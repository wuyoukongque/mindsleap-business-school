(function (window) {
  function $(id) {
    return document.getElementById(id);
  }

  function createTag(tag, className, text) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    if (typeof text === 'string') el.textContent = text;
    return el;
  }

  function initModulePage(config) {
    const entryMode = config.entryMode || 'sequence';
    const ids = config.ids || {};
    const els = {
      backLink: $(ids.backLink || 'backLink'),
      pill: $(ids.pill || 'modulePill'),
      title: $(ids.title || 'moduleTitle'),
      lead: $(ids.lead || 'moduleLead'),
      heroMeta: $(ids.heroMeta || 'heroMeta'),
      chapterList: $(ids.chapterList || 'chapterList'),
      sideTitle: $(ids.sideTitle || 'sideTitle'),
      sideGrid: $(ids.sideGrid || 'sideGrid'),
      pathTitle: $(ids.pathTitle || 'pathTitle'),
      pathList: $(ids.pathList || 'pathList')
    };

    function renderHero() {
      if (els.backLink && config.backHref) {
        els.backLink.href = config.backHref.replace('{entry}', entryMode);
      }
      if (els.pill) els.pill.textContent = config.hero.pill;
      if (els.title) els.title.textContent = config.hero.title;
      if (els.lead) els.lead.textContent = config.hero.lead;
      if (els.heroMeta) {
        els.heroMeta.innerHTML = '';
        (config.hero.meta || []).forEach(item => {
          els.heroMeta.appendChild(createTag('span', '', item));
        });
      }
    }

    function getProgressState() {
      try {
        const progress = JSON.parse(localStorage.getItem(config.progressStorageKey || 'mindsleap_course_progress') || '{}');
        return progress[config.progressNamespace] || {};
      } catch (e) {
        return {};
      }
    }

    function createStatusBadge(mode) {
      const status = createTag('div', 'status');
      if (mode === 'done') {
        status.textContent = '学习完';
        status.classList.add('done');
      } else if (mode === 'in-progress') {
        status.textContent = '正在学习';
        status.classList.add('in-progress');
      } else {
        status.textContent = '待学习';
        status.classList.add('locked');
      }
      return status;
    }

    function createChapter(chapter, progress) {
      const article = createTag('article', 'chapter');
      article.id = chapter.anchorId;
      article.dataset.lesson = chapter.key;

      const isCompleted = !!progress[chapter.key]?.completed;
      const isCurrent = progress.currentLesson === chapter.key && !isCompleted;
      if (isCurrent) article.classList.add('in-progress');

      const no = createTag('div', 'chapter-no', String(chapter.index));
      const content = createTag('div');
      const title = createTag('h3', '', chapter.title);
      const desc = createTag('p', '', chapter.description);
      content.appendChild(title);
      content.appendChild(desc);

      if (chapter.href) {
        const actions = createTag('div', 'chapter-actions');
        const link = createTag('a', 'btn btn-primary', chapter.buttonLabel || '开始学习');
        link.href = chapter.href.replace('{entry}', entryMode);
        actions.appendChild(link);
        content.appendChild(actions);
      }

      article.appendChild(no);
      article.appendChild(content);
      article.appendChild(createStatusBadge(isCompleted ? 'done' : (isCurrent ? 'in-progress' : 'locked')));
      return article;
    }

    function renderChapters() {
      if (!els.chapterList) return;
      const progress = getProgressState();
      els.chapterList.innerHTML = '';
      (config.chapters || []).forEach(chapter => {
        els.chapterList.appendChild(createChapter(chapter, progress));
      });
    }

    function renderSideCards() {
      if (els.sideTitle) els.sideTitle.textContent = config.side.title;
      if (els.sideGrid) {
        els.sideGrid.innerHTML = '';
        (config.side.cards || []).forEach(card => {
          const item = createTag('div', 'mini-card');
          item.appendChild(createTag('strong', '', card.title));
          item.appendChild(createTag('p', '', card.body));
          els.sideGrid.appendChild(item);
        });
      }
      if (els.pathTitle) els.pathTitle.textContent = config.path.title;
      if (els.pathList) {
        els.pathList.innerHTML = '';
        (config.path.items || []).forEach(item => {
          const row = createTag('div', 'path-item');
          row.appendChild(createTag('strong', '', item.title));
          row.appendChild(createTag('span', '', item.body));
          els.pathList.appendChild(row);
        });
      }
    }

    renderHero();
    renderChapters();
    renderSideCards();

    return {
      rerender() {
        renderChapters();
      }
    };
  }

  window.MindsLeapModuleRuntime = {
    initModulePage
  };
})(window);
