(function (window) {
  function escapeHtml(text) {
    return String(text || '')
      .replaceAll('&', '&amp;')
      .replaceAll('<', '&lt;')
      .replaceAll('>', '&gt;')
      .replaceAll('"', '&quot;')
      .replaceAll("'", '&#39;');
  }

  function renderList(items, render) {
    return (items || []).map(render).join('');
  }

  function renderLessonShell(config) {
    const shell = config.shell || {};
    const root = document.getElementById(shell.rootId || 'lessonApp');
    if (!root) return;

    if (shell.documentTitle) document.title = shell.documentTitle;

    const html = `
      <div class="wrap">
        <div class="page-top">
          <div class="brand"><img class="brand-logo" src="./assets/img/MindsLeap-Logo-blue-260322.png" alt="MindsLeap" /><span class="brand-text">商学院</span></div>
          <a href="${escapeHtml(shell.backLink?.href || './module-ai-foundation.html?entry=sequence')}" class="back-link">${escapeHtml(shell.backLink?.label || '← 返回模块')}</a>
        </div>

        <header class="hero">
          <div class="module">${escapeHtml(shell.moduleLabel || '')}</div>
          <h1>${escapeHtml(shell.lessonTitle || '')}</h1>
          <div class="meta">${renderList(shell.heroMeta, item => `<span>${escapeHtml(item)}</span>`)}</div>
          <div class="top-note">
            <strong id="topNoteTitle">${escapeHtml(shell.topNote?.title || '')}</strong>
            <span id="topNoteBody">${escapeHtml(shell.topNote?.body || '')}</span>
            <div class="note-meta">${renderList(shell.topNote?.meta, item => `<span>${escapeHtml(item)}</span>`)}</div>
          </div>
        </header>

        <div class="layout">
          <main>
            <section class="player-card card" id="playerCard">
              <div class="slide-stage">
                <img id="slideImage" src="${escapeHtml(shell.player?.initialSlide || '')}" alt="slide" />
                <div class="slide-count" id="slideCount">${escapeHtml(shell.player?.initialSlideCount || '')}</div>
                <div class="slide-subtitle-shell">
                  <div class="subtitle-box" id="subtitleBox">${escapeHtml(shell.player?.initialSubtitle || '')}</div>
                </div>
              </div>
              <div class="player-body">
                <div class="player-head">
                  <div class="disc-wrap">
                    <div class="disc" id="disc"></div>
                    <div class="player-title">
                      <strong>${escapeHtml(shell.player?.title || '')}</strong>
                      <span>${escapeHtml(shell.player?.subtitle || '')}</span>
                    </div>
                  </div>
                  <div class="player-tools">
                    <button class="speed-btn" id="speedBtn">1.0x</button>
                    <button class="speed-btn fullscreen-btn" id="fullscreenBtn">全屏</button>
                  </div>
                </div>
                <div class="controls">
                  <div class="control-row">
                    <button class="play-btn" id="playBtn">▶</button>
                    <div style="flex:1;min-width:0;">
                      <div class="progress-track">
                        <input id="progressRange" class="progress-range" type="range" min="0" max="1000" value="0" step="1" aria-label="播放进度" />
                      </div>
                      <div class="times"><span id="currentTime">0:00</span><span id="totalTime">0:00</span></div>
                    </div>
                  </div>
                </div>
                <div class="player-actions">
                  <a class="btn btn-secondary" id="backToModuleTop" href="${escapeHtml(shell.playerActions?.backToModuleHref || '#')}">${escapeHtml(shell.playerActions?.backToModuleLabel || '回到本模块章节')}</a>
                  <a class="btn btn-secondary" id="quickThoughtBtn" href="${escapeHtml(shell.playerActions?.quickThoughtHref || './thought-card.html')}">${escapeHtml(shell.playerActions?.quickThoughtLabel || '先整理这一节')}</a>
                </div>
              </div>
            </section>

            <section class="section card">
              <h2>${escapeHtml(shell.reflection?.title || '课后整理')}</h2>
              <div class="lesson-flow">
                <strong>${escapeHtml(shell.reflection?.leadStrong || '')}</strong><br/>
                ${escapeHtml(shell.reflection?.leadBody || '')}
              </div>
              ${shell.reflection?.introNote ? `<div class="quiz-result" style="margin-bottom:14px;">${escapeHtml(shell.reflection.introNote)}</div>` : ''}
              ${renderList(shell.reflection?.questions, q => `
                <div class="reflection-item">
                  <div class="reflection-title">${escapeHtml(q.title)}</div>
                  <textarea id="${escapeHtml(q.id)}" placeholder="${escapeHtml(q.placeholder || '')}"></textarea>
                  <div class="reflection-tip">${escapeHtml(q.tip || '')}</div>
                </div>
              `)}
              <div class="quiz-result">${escapeHtml(shell.reflection?.outroNote || '')}</div>
              <div class="sticky-cta">
                <div class="cta-head">
                  <strong id="${escapeHtml(shell.cta?.titleId || '')}">${escapeHtml(shell.cta?.title || '')}</strong>
                  <span id="${escapeHtml(shell.cta?.bodyId || '')}">${escapeHtml(shell.cta?.body || '')}</span>
                </div>
                <div class="cta-actions">
                  <button class="btn btn-primary" id="${escapeHtml(shell.cta?.submitId || 'submitThought')}">${escapeHtml(shell.cta?.submitLabel || '开始整理我的思路')}</button>
                  ${shell.cta?.showSecondary ? `<a class="btn btn-secondary" id="goCoachBtn" href="${escapeHtml(shell.cta?.secondaryHref || '#')}">${escapeHtml(shell.cta?.coachLabel || '继续学习')}</a>` : ''}
                </div>
              </div>
            </section>
          </main>

          <aside>
            <section class="section card">
              <h2>${escapeHtml(shell.sidebar?.chaptersTitle || '本模块章节')}</h2>
              <div class="chapter-list">
                ${renderList(shell.sidebar?.chapters, item => `
                  <div class="chapter-item ${escapeHtml(item.state || '')}">
                    <div class="chapter-no">${escapeHtml(item.no)}</div>
                    <div class="chapter-copy">
                      <strong>${escapeHtml(item.title)}</strong>
                      <p>${escapeHtml(item.body)}</p>
                    </div>
                    <span class="chapter-status ${item.badgeClass ? escapeHtml(item.badgeClass) : ''}">${escapeHtml(item.badge)}</span>
                  </div>
                `)}
              </div>
              <div class="module-actions">
                <a class="btn btn-primary" id="nextLessonBtn" href="${escapeHtml(shell.sidebar?.nextLessonHref || '#')}">${escapeHtml(shell.sidebar?.nextLessonLabel || '查看下一节')}</a>
                <a class="btn btn-secondary" id="moduleOverviewBtn" href="${escapeHtml(shell.sidebar?.moduleOverviewHref || './module-ai-foundation.html?entry=sequence')}">${escapeHtml(shell.sidebar?.moduleOverviewLabel || '查看本模块全部章节')}</a>
              </div>
            </section>

            <section class="section card">
              <h2 id="benefitSectionTitle">${escapeHtml(shell.sidebar?.benefitTitle || '本课你会得到什么')}</h2>
              <div class="mini-info">
                <div class="mini-card">
                  <strong id="reasonCardTitle">${escapeHtml(shell.sidebar?.reasonTitle || '学习收获')}</strong>
                  <p id="reasonCardBody">${escapeHtml(shell.sidebar?.reasonBody || '')}</p>
                </div>
                <div class="mini-card">
                  <strong>${escapeHtml(shell.sidebar?.statusTitle || '学习状态')}</strong>
                  <p><span class="status-pill ${escapeHtml(shell.sidebar?.statusClass || '')}" id="${escapeHtml(shell.sidebar?.statusId || '')}">${escapeHtml(shell.sidebar?.statusBody || '已接入音频')}</span></p>
                </div>
              </div>
            </section>

            <section class="section card">
              <h2>${escapeHtml(shell.sidebar?.summaryTitle || '本期重点总结')}</h2>
              <div class="summary-grid">
                ${renderList(shell.sidebar?.summaryCards, item => `
                  <div class="summary-card">
                    <span class="eyebrow">${escapeHtml(item.eyebrow)}</span>
                    <strong>${escapeHtml(item.title)}</strong>
                    <p>${escapeHtml(item.body)}</p>
                  </div>
                `)}
              </div>
            </section>

          </aside>
        </div>
      </div>
      ${shell.completion ? `
        <div class="completion-sheet" id="completionSheet">
          <div class="completion-top">
            <div class="completion-title">
              <strong>${escapeHtml(shell.completion.title)}</strong>
              <span>${escapeHtml(shell.completion.body)}</span>
            </div>
            <button class="completion-close" id="completionClose" type="button">×</button>
          </div>
          <div class="completion-meta">${renderList(shell.completion.meta, item => `<span>${escapeHtml(item)}</span>`)}</div>
          <div class="completion-actions">
            <a class="btn btn-primary" id="completionNextBtn" href="${escapeHtml(shell.completion.nextHref || '#')}">${escapeHtml(shell.completion.nextLabel || '进入下一节')}</a>
            <a class="btn btn-secondary" id="completionModuleBtn" href="${escapeHtml(shell.completion.moduleHref || '#')}">${escapeHtml(shell.completion.moduleLabel || '查看本模块全部章节')}</a>
            <a class="btn btn-secondary" id="${escapeHtml(shell.completion.thoughtId || '')}" href="${escapeHtml(shell.completion.thoughtHref || './thought-card.html')}">${escapeHtml(shell.completion.thoughtLabel || '先整理这一节')}</a>
          </div>
        </div>
      ` : ''}
      <audio id="audio" preload="auto" playsinline></audio>
    `;

    root.innerHTML = html;
  }

  window.MindsLeapLessonShell = {
    renderLessonShell
  };
})(window);
