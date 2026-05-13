(function (window) {
  const StorageKeys = {
    auth: 'mindsleap_auth',
    guestIntake: 'mindsleap_guest_intake',
    guestPath: 'mindsleap_guest_path',
    guestProgress: 'mindsleap_guest_progress',
    guestReflectionDraft: 'mindsleap_guest_reflection_draft',
    guestModuleResponses: 'mindsleap_guest_module_responses',
    guestCoachDraft: 'mindsleap_guest_coach_draft',
    postAuthRedirect: 'mindsleap_post_auth_redirect'
  };

  function readStorage(key, fallback = null) {
    try {
      const raw = localStorage.getItem(key);
      return raw ? JSON.parse(raw) : fallback;
    } catch (e) {
      return fallback;
    }
  }

  function writeStorage(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
    return value;
  }

  function removeStorage(key) {
    localStorage.removeItem(key);
  }

  function mergeStorage(key, patch) {
    const prev = readStorage(key, {});
    const next = { ...(prev || {}), ...(patch || {}), updated_at: Date.now() };
    writeStorage(key, next);
    return next;
  }

  function getAuthState() {
    return readStorage(StorageKeys.auth, { is_authenticated: false, user_id: null, updated_at: null });
  }

  function isAuthenticated() {
    return !!getAuthState().is_authenticated;
  }

  function requireAuth(actionType, payload = {}, options = {}) {
    if (isAuthenticated()) return { allowed: true };
    writeStorage(StorageKeys.postAuthRedirect, {
      type: options.type || 'generic',
      url: options.url || (window.location.pathname + window.location.search),
      action: actionType,
      payload,
      updated_at: Date.now()
    });
    window.location.href = options.registerUrl || './register.html';
    return { allowed: false };
  }

  function resumePostAuthFlow() {
    const redirect = readStorage(StorageKeys.postAuthRedirect);
    if (!redirect || !redirect.url) return false;
    removeStorage(StorageKeys.postAuthRedirect);
    window.location.href = redirect.url;
    return true;
  }

  function updateGuestLessonProgress({ moduleId, lessonId, lastPositionSec = 0, entryMode = 'sequence' }) {
    const prev = readStorage(StorageKeys.guestProgress, {
      entry_mode: entryMode,
      current_module: '',
      current_lesson: '',
      last_position_sec: 0,
      visited_lessons: []
    });
    const visited = new Set(prev.visited_lessons || []);
    if (lessonId) visited.add(lessonId);
    return writeStorage(StorageKeys.guestProgress, {
      ...prev,
      entry_mode: prev.entry_mode || entryMode,
      current_module: moduleId || prev.current_module,
      current_lesson: lessonId || prev.current_lesson,
      last_position_sec: Number(lastPositionSec || 0),
      visited_lessons: Array.from(visited),
      updated_at: Date.now()
    });
  }

  function restoreLessonPosition(lessonId, applyPosition) {
    const progress = readStorage(StorageKeys.guestProgress);
    if (!progress || progress.current_lesson !== lessonId || !progress.last_position_sec) return false;
    try {
      applyPosition(Number(progress.last_position_sec));
      return true;
    } catch (e) {
      return false;
    }
  }

  function clearGuestDrafts() {
    [
      StorageKeys.guestIntake,
      StorageKeys.guestPath,
      StorageKeys.guestProgress,
      StorageKeys.guestReflectionDraft,
      StorageKeys.guestModuleResponses,
      StorageKeys.guestCoachDraft
    ].forEach(removeStorage);
  }

  window.MindsLeapAuthFlow = {
    StorageKeys,
    readStorage,
    writeStorage,
    removeStorage,
    mergeStorage,
    getAuthState,
    isAuthenticated,
    requireAuth,
    resumePostAuthFlow,
    updateGuestLessonProgress,
    restoreLessonPosition,
    clearGuestDrafts
  };
})(window);
