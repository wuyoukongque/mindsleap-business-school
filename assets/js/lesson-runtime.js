(function (window) {
  const AuthFlow = window.MindsLeapAuthFlow || {};

  const DEFAULTS = {
    entryMode: 'sequence',
    speedOptions: [1, 1.25, 1.5],
    subtitleEmptyText: '',
    audioLoadingText: '正在加载音频资源…',
    progressStorageKey: 'mindsleap_course_progress'
  };

  function $(id) {
    return document.getElementById(id);
  }

  function formatTime(sec) {
    if (!isFinite(sec)) return '0:00';
    const m = Math.floor(sec / 60);
    const s = Math.floor(sec % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function parseTimecode(timecode) {
    const [hh, mm, rest] = timecode.trim().split(':');
    const [ss, ms] = rest.split('.');
    return Number(hh) * 3600 + Number(mm) * 60 + Number(ss) + Number(ms || 0) / 1000;
  }

  function normalizeSubtitleText(text, replacements = []) {
    let result = (text || '').trim();
    replacements.forEach(([from, to]) => {
      result = result.replaceAll(from, to);
    });
    return result.trim();
  }

  function resolveEntryUrl(url, entryMode) {
    if (!url) return url;
    return String(url).replaceAll('{entry}', entryMode || 'sequence');
  }

  function parseVtt(vtt, replacements) {
    const blocks = vtt.split(/\n\s*\n/).map(x => x.trim()).filter(Boolean);
    const parsed = [];
    for (const block of blocks) {
      if (block === 'WEBVTT') continue;
      const lines = block.split('\n').map(x => x.trim()).filter(Boolean);
      const timing = lines.find(line => line.includes('-->'));
      if (!timing) continue;
      const [start, end] = timing.split('-->').map(x => x.trim());
      const textLines = lines.slice(lines.indexOf(timing) + 1);
      if (!textLines.length) continue;
      parsed.push({
        start: parseTimecode(start),
        end: parseTimecode(end),
        text: normalizeSubtitleText(textLines.join(' '), replacements)
      });
    }
    return parsed;
  }

  function mergeProgress(progressStorageKey, updater) {
    try {
      const prev = JSON.parse(localStorage.getItem(progressStorageKey) || '{}');
      const next = updater(prev || {}) || prev;
      localStorage.setItem(progressStorageKey, JSON.stringify(next));
    } catch (e) {}
  }

  function initLessonPage(userConfig) {
    const config = { ...DEFAULTS, ...(userConfig || {}) };
    config.ids = config.ids || {};
    const entryMode = config.entryMode || 'sequence';
    const speedOptions = config.speedOptions || DEFAULTS.speedOptions;
    const subtitleReplacements = config.subtitleReplacements || [];
    const hooks = config.hooks || {};

    const els = {
      playerCard: $(config.ids.playerCard || 'playerCard'),
      slideImage: $(config.ids.slideImage || 'slideImage'),
      slideCount: $(config.ids.slideCount || 'slideCount'),
      subtitleBox: $(config.ids.subtitleBox || 'subtitleBox'),
      playBtn: $(config.ids.playBtn || 'playBtn'),
      speedBtn: $(config.ids.speedBtn || 'speedBtn'),
      fullscreenBtn: $(config.ids.fullscreenBtn || 'fullscreenBtn'),
      progressRange: $(config.ids.progressRange || 'progressRange'),
      currentTime: $(config.ids.currentTime || 'currentTime'),
      totalTime: $(config.ids.totalTime || 'totalTime'),
      disc: $(config.ids.disc || 'disc'),
      audio: $(config.ids.audio || 'audio'),
      notes: $(config.ids.notes || 'notes'),
      submitThought: $(config.ids.submitThought || 'submitThought'),
      quickThoughtBtn: $(config.ids.quickThoughtBtn || 'quickThoughtBtn'),
      goCoachBtn: $(config.ids.goCoachBtn || 'goCoachBtn'),
      nextLessonBtn: $(config.ids.nextLessonBtn || 'nextLessonBtn'),
      moduleOverviewBtn: $(config.ids.moduleOverviewBtn || 'moduleOverviewBtn'),
      backToModuleTop: $(config.ids.backToModuleTop || 'backToModuleTop'),
      topNoteTitle: $(config.ids.topNoteTitle || 'topNoteTitle'),
      topNoteBody: $(config.ids.topNoteBody || 'topNoteBody'),
      benefitSectionTitle: $(config.ids.benefitSectionTitle || 'benefitSectionTitle'),
      reasonCardTitle: $(config.ids.reasonCardTitle || 'reasonCardTitle'),
      reasonCardBody: $(config.ids.reasonCardBody || 'reasonCardBody')
    };

    const state = {
      slideIndex: 0,
      lessonSlides: [],
      cues: [],
      lastSubtitleText: '',
      fullscreenHideTimer: 0,
      isScrubbing: false,
      resumeAfterScrub: false,
      speedIndex: 0,
      audioBlobUrl: null,
      lastGuestSaveAt: 0,
      lastPlayIntentAt: 0,
      scrubCommitFrame: 0,
      scrubPreviewTime: null,
      scrubGlobalEventsBound: false,
      playbackCapHandled: false
    };

    function getHookContext() {
      return {
        config,
        elements: els,
        state,
        formatTime,
        updateFromAudio,
        persistGuestProgress,
        markLessonCompleted
      };
    }

    function setProgressUi(ratio) {
      const safeRatio = Math.min(1, Math.max(0, ratio || 0));
      const value = Math.round(safeRatio * 1000);
      els.progressRange.value = String(value);
      els.progressRange.style.setProperty('--progress', `${safeRatio * 100}%`);
    }

    function getProgressRatio() {
      return Math.min(1, Math.max(0, Number(els.progressRange.value) / 1000));
    }

    function getEffectiveDuration() {
      const rawDuration = Number(els.audio?.duration) || 0;
      const playbackCap = Number(config.playbackEndTime) || 0;
      if (playbackCap > 0 && rawDuration > 0) return Math.min(playbackCap, rawDuration);
      return playbackCap > 0 ? playbackCap : rawDuration;
    }

    function getSeekTargetTime() {
      const duration = getEffectiveDuration();
      if (!duration) return 0;
      return getProgressRatio() * duration;
    }

    function renderSlide() {
      if (!state.lessonSlides.length || !els.slideImage || !els.slideCount) return;
      const current = state.lessonSlides[state.slideIndex];
      els.slideImage.src = `${config.slideBasePath}${current.file}${config.slideVersion || ''}`;
      els.slideCount.textContent = `${state.slideIndex + 1} / ${state.lessonSlides.length}`;
      if (!state.cues.length || els.audio.paused) {
        els.subtitleBox.textContent = state.lastSubtitleText || current.caption || config.subtitleEmptyText;
      }
    }

    function updateSubtitle(time) {
      const current = state.cues.find(item => time >= item.start && time < item.end);
      if (current) {
        state.lastSubtitleText = current.text;
        els.subtitleBox.textContent = current.text;
        return;
      }

      const beforeFirstCue = state.cues.length && time < state.cues[0].start;
      if (beforeFirstCue && !state.lastSubtitleText) {
        els.subtitleBox.textContent = '';
        return;
      }

      els.subtitleBox.textContent = '';
    }

    function updateFromAudio(time) {
      if (state.lessonSlides.length && config.slideTimeline?.length) {
        const matched = config.slideTimeline.find(item => time >= item.start && time < item.end) || config.slideTimeline[config.slideTimeline.length - 1];
        if (matched && matched.index !== state.slideIndex) {
          state.slideIndex = matched.index;
          renderSlide();
        }
      }
      updateSubtitle(time);
    }

    async function loadSlides() {
      if (Array.isArray(config.lessonSlides) && config.lessonSlides.length) {
        state.lessonSlides = config.lessonSlides;
        renderSlide();
        return;
      }
      if (!config.slidesSrc) return;
      try {
        const res = await fetch(config.slidesSrc);
        state.lessonSlides = await res.json();
        renderSlide();
      } catch (e) {
        console.warn('lesson slides load failed', e);
      }
    }

    async function loadVttCues() {
      if (Array.isArray(config.subtitleCues) && config.subtitleCues.length) {
        state.cues = config.subtitleCues.map(item => ({
          start: Number(item.start) || 0,
          end: Number(item.end) || 0,
          text: normalizeSubtitleText(item.text || '', subtitleReplacements)
        }));
        updateSubtitle(els.audio.currentTime || 0);
        return;
      }
      if (!config.vttSrc) return;
      try {
        const res = await fetch(config.vttSrc);
        const raw = await res.text();
        state.cues = parseVtt(raw, subtitleReplacements);
        updateSubtitle(els.audio.currentTime || 0);
      } catch (e) {
        console.warn('lesson vtt load failed', e);
      }
    }

    function persistGuestProgress(force = false) {
      const now = Date.now();
      if (!force && now - state.lastGuestSaveAt < 4000) return;
      state.lastGuestSaveAt = now;

      if (AuthFlow.updateGuestLessonProgress) {
        AuthFlow.updateGuestLessonProgress({
          moduleId: config.moduleId,
          lessonId: config.lessonId,
          lastPositionSec: els.audio.currentTime || 0,
          entryMode
        });
      }

      mergeProgress(config.progressStorageKey, progress => {
        progress[config.progressNamespace] = progress[config.progressNamespace] || {};
        progress[config.progressNamespace].currentLesson = config.progressLessonKey;
        return progress;
      });
    }

    function markCurrentLesson() {
      mergeProgress(config.progressStorageKey, progress => {
        progress[config.progressNamespace] = progress[config.progressNamespace] || {};
        progress[config.progressNamespace].currentLesson = config.progressLessonKey;
        return progress;
      });
    }

    function markLessonCompleted() {
      mergeProgress(config.progressStorageKey, progress => {
        progress[config.progressNamespace] = progress[config.progressNamespace] || {};
        progress[config.progressNamespace][config.progressLessonKey] = {
          completed: true,
          completedAt: Date.now(),
          entry: entryMode
        };
        progress[config.progressNamespace].currentLesson = config.progressLessonKey;
        return progress;
      });

      if (AuthFlow.updateGuestLessonProgress) {
        AuthFlow.updateGuestLessonProgress({
          moduleId: config.moduleId,
          lessonId: config.lessonId,
          lastPositionSec: getEffectiveDuration() || els.audio.currentTime || 0,
          entryMode
        });
      }
    }

    async function prepareAudio() {
      els.playBtn.disabled = true;
      els.playBtn.textContent = '…';
      els.subtitleBox.textContent = config.audioLoadingText;
      try {
        els.audio.preload = 'auto';
        if (state.audioBlobUrl) {
          URL.revokeObjectURL(state.audioBlobUrl);
          state.audioBlobUrl = null;
        }
        const response = await fetch(config.audioSource);
        if (!response.ok) {
          throw new Error(`audio fetch failed: ${response.status}`);
        }
        const audioBlob = await response.blob();
        state.audioBlobUrl = URL.createObjectURL(audioBlob);
        els.audio.src = state.audioBlobUrl;
        els.audio.load();
      } catch (error) {
        console.warn('audio init failed, fallback to direct src', error);
        try {
          els.audio.src = config.audioSource;
          els.audio.load();
        } catch (fallbackError) {
          console.warn('audio direct src fallback failed', fallbackError);
          els.subtitleBox.textContent = '音频资源初始化失败，请刷新后重试。';
        }
      }
    }

    function applyEntryMode() {
      if (els.nextLessonBtn) {
        if (config.navigation?.nextLessonUrl) {
          els.nextLessonBtn.href = config.navigation.nextLessonUrl.replace('{entry}', entryMode);
        } else if (config.navigation?.nextLessonHash) {
          els.nextLessonBtn.href = `./${config.modulePage}?entry=${entryMode}${config.navigation.nextLessonHash}`;
        }
      }
      if (els.moduleOverviewBtn) {
        els.moduleOverviewBtn.href = `./${config.modulePage}?entry=${entryMode}`;
      }
      if (els.backToModuleTop && config.navigation?.currentLessonHash) {
        els.backToModuleTop.href = `./${config.modulePage}?entry=${entryMode}${config.navigation.currentLessonHash}`;
      }

      const modeCopy = config.entryCopy?.[entryMode];
      if (!modeCopy) return;
      if (els.topNoteTitle && modeCopy.topNoteTitle) els.topNoteTitle.textContent = modeCopy.topNoteTitle;
      if (els.topNoteBody && modeCopy.topNoteBody) els.topNoteBody.textContent = modeCopy.topNoteBody;
      if (els.benefitSectionTitle && modeCopy.benefitSectionTitle) els.benefitSectionTitle.textContent = modeCopy.benefitSectionTitle;
      if (els.reasonCardTitle && modeCopy.reasonCardTitle) els.reasonCardTitle.textContent = modeCopy.reasonCardTitle;
      if (els.reasonCardBody && modeCopy.reasonCardBody) els.reasonCardBody.textContent = modeCopy.reasonCardBody;
    }

    function collectReflectionAnswers() {
      const answers = {};
      (config.reflection?.fields || []).forEach(field => {
        const el = $(field.id);
        answers[field.key] = el ? el.value.trim() : '';
      });
      return answers;
    }

    function persistReflectionDraft() {
      const answers = collectReflectionAnswers();
      const notes = els.notes ? els.notes.value.trim() : '';
      if (AuthFlow.writeStorage) {
        AuthFlow.writeStorage(AuthFlow.StorageKeys.guestReflectionDraft, {
          lesson_id: config.lessonId,
          module_id: config.moduleId,
          answers,
          notes,
          updated_at: Date.now()
        });

        const modules = AuthFlow.readStorage
          ? AuthFlow.readStorage(AuthFlow.StorageKeys.guestModuleResponses, {})
          : {};
        const prevModule = modules?.[config.moduleId] || { module_id: config.moduleId, lessons: {} };
        const nextModule = {
          ...prevModule,
          module_id: config.moduleId,
          module_title: config.shell?.moduleLabel || config.moduleId,
          updated_at: Date.now(),
          lessons: {
            ...(prevModule.lessons || {}),
            [config.lessonId]: {
              lesson_id: config.lessonId,
              lesson_title: config.shell?.lessonTitle || config.lessonId,
              lesson_key: config.progressLessonKey || '',
              answers,
              notes,
              entry_mode: entryMode,
              saved_at: Date.now()
            }
          }
        };
        AuthFlow.writeStorage(AuthFlow.StorageKeys.guestModuleResponses, {
          ...(modules || {}),
          [config.moduleId]: nextModule
        });
      }

      const publicDraft = typeof config.buildThoughtCardDraft === 'function'
        ? config.buildThoughtCardDraft({ answers, notes, entryMode })
        : { answers, notes };
      localStorage.setItem('mindsleap_thought_card_draft', JSON.stringify(publicDraft));
      return { answers, notes, publicDraft };
    }

    function bindNoteChips() {
      const selector = config.noteChipSelector || '.chip';
      document.querySelectorAll(selector).forEach(btn => {
        btn.addEventListener('click', () => {
          if (!els.notes) return;
          const text = btn.dataset.insert || '';
          const current = els.notes.value.trim();
          els.notes.value = current ? `${current}\n${text}` : text;
          els.notes.focus();
        });
      });
    }

    function isFullscreenActive() {
      return document.fullscreenElement === els.playerCard || els.playerCard?.classList.contains('is-fullscreen-fallback');
    }

    function updateFullscreenButton() {
      if (!els.fullscreenBtn) return;
      els.fullscreenBtn.textContent = isFullscreenActive() ? '退出全屏' : '全屏';
    }

    function clearFullscreenHideTimer() {
      if (state.fullscreenHideTimer) {
        clearTimeout(state.fullscreenHideTimer);
        state.fullscreenHideTimer = 0;
      }
    }

    function setFullscreenUiHidden(hidden) {
      if (!els.playerCard) return;
      els.playerCard.classList.toggle('fullscreen-ui-hidden', !!hidden && isFullscreenActive());
    }

    function bumpFullscreenUiVisibility() {
      if (!isFullscreenActive()) return;
      setFullscreenUiHidden(false);
      clearFullscreenHideTimer();
      state.fullscreenHideTimer = window.setTimeout(() => {
        setFullscreenUiHidden(true);
      }, 3000);
    }

    async function toggleFullscreen() {
      if (!els.playerCard) return;

      const request = els.playerCard.requestFullscreen || els.playerCard.webkitRequestFullscreen;
      const exit = document.exitFullscreen || document.webkitExitFullscreen;

      if (document.fullscreenElement === els.playerCard) {
        if (exit) {
          await exit.call(document);
        }
      } else if (request) {
        try {
          await request.call(els.playerCard);
        } catch (error) {
          els.playerCard.classList.toggle('is-fullscreen-fallback');
          document.body.classList.toggle('lesson-fullscreen-mode', els.playerCard.classList.contains('is-fullscreen-fallback'));
        }
      } else {
        els.playerCard.classList.toggle('is-fullscreen-fallback');
        document.body.classList.toggle('lesson-fullscreen-mode', els.playerCard.classList.contains('is-fullscreen-fallback'));
      }

      if (!document.fullscreenElement) {
        document.body.classList.toggle('lesson-fullscreen-mode', els.playerCard.classList.contains('is-fullscreen-fallback'));
      }
      if (isFullscreenActive()) {
        bumpFullscreenUiVisibility();
      } else {
        clearFullscreenHideTimer();
        setFullscreenUiHidden(false);
      }
      updateFullscreenButton();
    }

    async function togglePlayback() {
      if (!els.audio) return;
      if (els.audio.paused) {
        try {
          if (!els.audio.src) {
            els.audio.src = config.audioSource;
            els.audio.load();
          }
          await els.audio.play();
        } catch (e) {
          console.warn('audio play failed', e);
          els.subtitleBox.textContent = '播放没有成功，请再点一次；如果仍然无效，请刷新页面。';
        }
      } else {
        els.audio.pause();
      }
    }

    function shouldIgnoreDuplicate(lastAtKey, thresholdMs = 420) {
      const now = Date.now();
      if (now - state[lastAtKey] < thresholdMs) return true;
      state[lastAtKey] = now;
      return false;
    }

    function handlePlayIntent(event) {
      if (event?.cancelable) event.preventDefault();
      if (shouldIgnoreDuplicate('lastPlayIntentAt')) return;
      togglePlayback();
    }

    function seekFromRange(forcePersist = false) {
      const duration = getEffectiveDuration();
      if (!duration) return;
      const ratio = getProgressRatio();
      const nextTime = ratio * duration;
      els.audio.currentTime = nextTime;
      els.currentTime.textContent = formatTime(nextTime);
      updateFromAudio(nextTime);
      setProgressUi(ratio);
      if (forcePersist) persistGuestProgress(true);
    }

    function beginScrubbing() {
      if (!getEffectiveDuration()) return false;
      if (state.isScrubbing) return true;
      state.isScrubbing = true;
      state.resumeAfterScrub = !els.audio.paused && !els.audio.ended;
      state.scrubPreviewTime = els.audio.currentTime || 0;
      if (state.resumeAfterScrub) {
        els.audio.pause();
      }
      return true;
    }

    function previewSeekFromRange() {
      if (!getEffectiveDuration()) return;
      const nextTime = getSeekTargetTime();
      state.scrubPreviewTime = nextTime;
      els.currentTime.textContent = formatTime(nextTime);
      setProgressUi(getProgressRatio());
      updateFromAudio(nextTime);
    }

    function commitScrub(forcePersist = true) {
      if (!state.isScrubbing) {
        seekFromRange(forcePersist);
        return;
      }
      const duration = getEffectiveDuration();
      if (!duration) {
        state.isScrubbing = false;
        state.resumeAfterScrub = false;
        state.scrubPreviewTime = null;
        return;
      }

      const ratio = getProgressRatio();
      const nextTime = ratio * duration;
      const resumeAfterScrub = state.resumeAfterScrub;

      state.isScrubbing = false;
      state.resumeAfterScrub = false;
      state.scrubPreviewTime = null;

      if (state.scrubCommitFrame) {
        cancelAnimationFrame(state.scrubCommitFrame);
      }

      state.scrubCommitFrame = requestAnimationFrame(() => {
        state.scrubCommitFrame = 0;
        try {
          if (typeof els.audio.fastSeek === 'function') {
            els.audio.fastSeek(nextTime);
          } else {
            els.audio.currentTime = nextTime;
          }
        } catch (error) {
          els.audio.currentTime = nextTime;
        }
        els.currentTime.textContent = formatTime(nextTime);
        setProgressUi(ratio);
        updateFromAudio(nextTime);
        if (forcePersist) persistGuestProgress(true);
        if (resumeAfterScrub) {
          els.audio.play().catch(err => {
            console.warn('audio resume after scrub failed', err);
          });
        }
      });
    }

    function bindEvents() {
      if (window.PointerEvent) {
        els.playBtn.addEventListener('pointerup', handlePlayIntent);
      }
      els.playBtn.addEventListener('click', handlePlayIntent);

      els.audio.addEventListener('play', () => {
        els.playBtn.textContent = '❚❚';
        els.disc?.classList.add('playing');
        hooks.onPlay?.(getHookContext());
      });

      els.audio.addEventListener('pause', () => {
        els.playBtn.textContent = '▶';
        els.disc?.classList.remove('playing');
        if (!state.cues.length) renderSlide();
        hooks.onPause?.(getHookContext());
      });

      els.audio.addEventListener('loadedmetadata', () => {
        const effectiveDuration = getEffectiveDuration();
        els.playBtn.disabled = false;
        els.playBtn.textContent = '▶';
        els.totalTime.textContent = formatTime(effectiveDuration);
        els.currentTime.textContent = formatTime(els.audio.currentTime);
        setProgressUi(0);
        if (AuthFlow.restoreLessonPosition) {
          AuthFlow.restoreLessonPosition(config.lessonId, (positionSec) => {
            const safePos = Math.min(positionSec, Math.max(0, (effectiveDuration || positionSec) - 1));
            els.audio.currentTime = safePos;
            els.currentTime.textContent = formatTime(safePos);
            setProgressUi(effectiveDuration ? safePos / effectiveDuration : 0);
          });
        }
        updateSubtitle(els.audio.currentTime || 0);
        persistGuestProgress(true);
        hooks.onLoadedMetadata?.(getHookContext());
      });

      els.audio.addEventListener('timeupdate', () => {
        const playbackCap = Number(config.playbackEndTime) || 0;
        const effectiveDuration = getEffectiveDuration();
        if (playbackCap > 0 && els.audio.currentTime >= playbackCap) {
          if (!state.playbackCapHandled) {
            state.playbackCapHandled = true;
            els.audio.pause();
            els.audio.currentTime = playbackCap;
            els.currentTime.textContent = formatTime(playbackCap);
            setProgressUi(1);
            updateFromAudio(playbackCap);
            markLessonCompleted();
            hooks.onEnded?.(getHookContext());
          }
          return;
        }
        if (playbackCap <= 0 || els.audio.currentTime < playbackCap - 0.2) {
          state.playbackCapHandled = false;
        }
        const ratio = effectiveDuration ? (els.audio.currentTime / effectiveDuration) : 0;
        if (!state.isScrubbing) setProgressUi(ratio);
        els.currentTime.textContent = formatTime(els.audio.currentTime);
        updateFromAudio(els.audio.currentTime || 0);
        persistGuestProgress();
        hooks.onTimeUpdate?.(getHookContext());
      });

      els.audio.addEventListener('canplay', () => {
        els.playBtn.disabled = false;
        if (els.playBtn.textContent === '…') els.playBtn.textContent = '▶';
      });

      els.audio.addEventListener('error', () => {
        els.playBtn.disabled = false;
        els.playBtn.textContent = '▶';
        els.subtitleBox.textContent = '音频加载失败，请刷新页面重试。';
      });

      els.audio.addEventListener('ended', () => {
        els.playBtn.textContent = '▶';
        els.disc?.classList.remove('playing');
        markLessonCompleted();
        hooks.onEnded?.(getHookContext());
      });

      const startScrubbing = () => {
        beginScrubbing();
      };
      const finishScrubbing = () => {
        commitScrub(true);
      };

      els.progressRange.addEventListener('pointerdown', startScrubbing);
      els.progressRange.addEventListener('mousedown', startScrubbing);
      els.progressRange.addEventListener('touchstart', startScrubbing, { passive: true });

      els.progressRange.addEventListener('input', () => {
        if (!state.isScrubbing) {
          beginScrubbing();
        }
        previewSeekFromRange();
      });
      els.progressRange.addEventListener('change', finishScrubbing);
      els.progressRange.addEventListener('pointerup', finishScrubbing);
      els.progressRange.addEventListener('mouseup', finishScrubbing);
      els.progressRange.addEventListener('touchend', finishScrubbing, { passive: true });
      els.progressRange.addEventListener('touchcancel', finishScrubbing, { passive: true });
      els.progressRange.addEventListener('pointercancel', finishScrubbing);
      els.progressRange.addEventListener('keyup', (event) => {
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight' || event.key === 'Home' || event.key === 'End') {
          previewSeekFromRange();
          commitScrub(true);
        }
      });

      els.speedBtn.addEventListener('click', () => {
        state.speedIndex = (state.speedIndex + 1) % speedOptions.length;
        els.audio.playbackRate = speedOptions[state.speedIndex];
        els.speedBtn.textContent = `${speedOptions[state.speedIndex]}x`;
      });

      els.fullscreenBtn?.addEventListener('click', () => {
        toggleFullscreen().catch?.(() => {});
      });

      ['mousemove', 'pointermove', 'touchstart', 'click'].forEach(eventName => {
        els.playerCard?.addEventListener(eventName, () => {
          bumpFullscreenUiVisibility();
        }, { passive: true });
      });

      document.addEventListener('fullscreenchange', () => {
        if (!document.fullscreenElement) {
          els.playerCard?.classList.remove('is-fullscreen-fallback');
          document.body.classList.remove('lesson-fullscreen-mode');
          clearFullscreenHideTimer();
          setFullscreenUiHidden(false);
        }
        if (isFullscreenActive()) bumpFullscreenUiVisibility();
        updateFullscreenButton();
      });

      els.quickThoughtBtn?.addEventListener('click', () => {
        persistReflectionDraft();
      });

      els.submitThought?.addEventListener('click', () => {
        persistReflectionDraft();
        const submitHref = resolveEntryUrl(config.redirects?.submitHref, entryMode);
        if (submitHref) {
          window.location.href = submitHref;
          return;
        }
        const allowed = AuthFlow.requireAuth
          ? AuthFlow.requireAuth(config.authActions.submitReflection, { lesson_id: config.lessonId }, {
              type: 'lesson',
              url: config.redirects.thoughtCardSource
            })
          : { allowed: true };
        if (!allowed.allowed) return;
        window.location.href = config.redirects.thoughtCardHref;
      });

      els.goCoachBtn?.addEventListener('click', (e) => {
        const secondaryHref = resolveEntryUrl(config.redirects?.secondaryHref, entryMode);
        if (secondaryHref) return;
        if (AuthFlow.writeStorage) {
          AuthFlow.writeStorage(AuthFlow.StorageKeys.guestCoachDraft, {
            lesson_id: config.lessonId,
            first_message: config.coachFirstMessage,
            updated_at: Date.now()
          });
        }
        const allowed = AuthFlow.requireAuth
          ? AuthFlow.requireAuth(config.authActions.openCoach, { lesson_id: config.lessonId }, {
              type: 'lesson',
              url: config.redirects.coachSource
            })
          : { allowed: true };
        if (!allowed.allowed) e.preventDefault();
      });
    }

    applyEntryMode();
    markCurrentLesson();
    bindNoteChips();
    bindEvents();
    updateFullscreenButton();
    updateSubtitle(0);
    loadSlides();
    loadVttCues();
    prepareAudio();

    const api = {
      config,
      elements: els,
      state,
      persistReflectionDraft,
      updateFromAudio,
      persistGuestProgress,
      markLessonCompleted
    };

    hooks.onInit?.(api);
    return api;
  }

  window.MindsLeapLessonRuntime = {
    initLessonPage
  };
})(window);
