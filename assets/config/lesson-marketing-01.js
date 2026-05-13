(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第1课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第1课：STP：找到你的市场在哪里",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 8 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep34-stp/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：STP：找到你的市场在哪里", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个营销判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个增长环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的营销优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的营销学习，最终都会回到资源配置与增长判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-marketing-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "STP：找到你的市场在哪里",
                "body": "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "品牌定位：在用户心里占一个位置",
                "body": "从差异化与心智占位出发，重新理解品牌定位在 AI 时代为什么更重要。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-marketing-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从问题开始",
                "body": "从今天开始我们进入模块三：市场营销"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "四，行为特征"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键判断",
                "body": "某个用户上个月还是\"高频活跃用户\"，这个月变成\"流失预警用户\"了，AI 立刻把他重新分类"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "你可以让 AI 分析每个细分市场的几个关键数据：市场规模、增长率、竞争程度、你的产品在这个群体中的转化率和留存率"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组营销框架学完整。", meta: ["当前完成：营销与增长 1/2", "建议下一节：品牌定位：在用户心里占一个位置", '也可以先整理这一节'], nextHref: "./lesson-marketing-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-01", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson1", audioSource: './assets/audio/marketing-ep34-stp.mp3?v=20260406-subtitle-startsnap', vttSrc: './assets/subtitles/marketing-ep34-stp.vtt?v=20260406-subtitle-startsnap', slideBasePath: './assets/slides/', slideVersion: '?v=20260406-marketing-pilot', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']], lessonSlides: [
    {
        "file": "marketing-ep34-stp/slide_01.png",
        "label": "STP：找到你的市场在哪里",
        "caption": "这一节会帮助你系统理解：STP：找到你的市场在哪里"
    },
    {
        "file": "marketing-ep34-stp/slide_02.png",
        "label": "先从问题开始",
        "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
    },
    {
        "file": "marketing-ep34-stp/slide_03.png",
        "label": "核心框架",
        "caption": "四，行为特征。 购买频率、使用场景、品牌忠诚度、价格敏感度。"
    },
    {
        "file": "marketing-ep34-stp/slide_04.png",
        "label": "关键判断",
        "caption": "某个用户上个月还是\"高频活跃用户\"，这个月变成\"流失预警用户\"了，AI 立刻把他重新分类。 第二步：Targeting，目标市场选择。"
    },
    {
        "file": "marketing-ep34-stp/slide_05.png",
        "label": "AI 时代的变化",
        "caption": "你可以让 AI 分析每个细分市场的几个关键数据：市场规模、增长率、竞争程度、你的产品在这个群体中的转化率和留存率。 然后 AI 可以做一个综合评分，帮你排优先级。"
    },
    {
        "file": "marketing-ep34-stp/slide_06.png",
        "label": "回到你的业务",
        "caption": "你可以跟别人不一样，但如果客户不在乎这个不一样，那也没用。 第三，可信。"
    },
    {
        "file": "marketing-ep34-stp/slide_07.png",
        "label": "风险与提醒",
        "caption": "基于你对市场的初步理解和直觉，先假设你的细分市场、目标客户和定位是什么。 然后用最小的成本去测试这个假设。"
    },
    {
        "file": "marketing-ep34-stp/slide_08.png",
        "label": "这节课最值得带走的三点",
        "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
    }
], subtitleCues: [], slideTimeline: [
    {
        "start": 0.0,
        "end": 13.067,
        "index": 0
    },
    {
        "start": 13.067,
        "end": 89.018,
        "index": 1
    },
    {
        "start": 89.018,
        "end": 163.173,
        "index": 2
    },
    {
        "start": 163.173,
        "end": 233.244,
        "index": 3
    },
    {
        "start": 233.244,
        "end": 305.601,
        "index": 4
    },
    {
        "start": 305.601,
        "end": 378.286,
        "index": 5
    },
    {
        "start": 378.286,
        "end": 468.774,
        "index": 6
    },
    {
        "start": 468.774,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-marketing-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-marketing-02.html?entry={entry}", secondaryHref: "./lesson-marketing-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-01", coachSource: "./ai-coach.html?source=lesson-marketing-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于STP：找到你的市场在哪里的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "STP：找到你的市场在哪里", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-marketing-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
