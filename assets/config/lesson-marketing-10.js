(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第10课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第10课：B2B 营销：企业客户怎么打",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep43-b2b-marketing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：B2B 营销：企业客户怎么打", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个营销判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个增长环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的营销优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的营销学习，最终都会回到资源配置与增长判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-marketing.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "STP：找到你的市场在哪里",
                "body": "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "品牌定位：在用户心里占一个位置",
                "body": "从差异化与心智占位出发，重新理解品牌定位在 AI 时代为什么更重要。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "4P 到 4C：营销组合怎么设计",
                "body": "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "消费者决策心理：人为什么买单",
                "body": "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "增长飞轮：从 AARRR 到 AI 驱动增长",
                "body": "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 内容营销：规模化创作高质量内容",
                "body": "把内容生产从一次次临时输出，升级成模板、语料与审核驱动的内容系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "个性化营销：千人千面的实现路径",
                "body": "把千人千面拆成四个层次、三类基础设施和几个最值得先做的应用场景。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "营销自动化：让 AI Agent 帮你跑增长",
                "body": "把营销自动化从规则引擎升级成目标驱动的执行系统，先从最值得落地的五类 Agent 场景开始。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "故事化营销：AI 时代更需要人的温度",
                "body": "把品牌表达从“我想说什么”转成“用户为什么会在乎”，用故事建立真实感、记忆点和信任。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "B2B 营销：企业客户怎么打",
                "body": "理解 B2B 的多角色决策和长周期购买，再用 ABM、线索培育、AI 评分与销售协同建立更稳的企业获客系统。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解 B2B 的多角色决策和长周期购买，再用 ABM、线索培育、AI 评分与销售协同建立更稳的企业获客系统。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先接受一个现实，你面对的不是一个人，而是一个组织",
                "body": "采购、技术、业务、法务和老板关心的点都不同，B2B 营销本质上是在推动组织决策。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "ABM 和线索培育，决定你能不能把高价值客户慢慢打透",
                "body": "先挑对客户，再围绕不同阶段持续给出正确信息，比盲目撒网更适合 B2B 场景。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 最适合做放大器，不适合替代判断",
                "body": "客户情报、个性化邮件、线索评分和销售营销协同都可以借助 AI 提效，但前提是你先想清楚谁值得打、该怎么打。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 10/10", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-10", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson10", audioSource: './assets/audio/marketing-ep43-b2b-marketing.mp3?v=20260411-marketing-10b', vttSrc: './assets/subtitles/marketing-ep43-b2b-marketing.vtt?v=20260411-marketing-10b', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep43-b2b-marketing/slide_01.png",
            "label": "B2B 营销：企业客户怎么打",
            "caption": "这一节会帮助你系统理解：B2B 营销：企业客户怎么打"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_02.png",
            "label": "先看 B2B 为什么不同",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_03.png",
            "label": "ABM 与目标客户",
            "caption": "ABM，内容驱动的线索培育，AI 线索评分，以及销售和营销协同。 先说第一个，ABM，Account Based Marketing，基于客户的营销。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_04.png",
            "label": "内容线索培育",
            "caption": "线索培育的关键，是让内容和客户所处阶段匹配，而不是只追求内容数量。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_05.png",
            "label": "AI 线索评分",
            "caption": "线索评分的目标，不是打一个静态分数，而是让销售在最对的时间接手最值得跟进的人。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_06.png",
            "label": "销售与营销协同",
            "caption": "协同的重点，不是多一个看板，而是让营销和销售围绕同一个客户事实做判断。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_07.png",
            "label": "AI 在 B2B 的应用",
            "caption": "AI 在 B2B 里的最好用法，是把客户情报、个性化触达和销售准备工作规模化。"
        },
        {
            "file": "marketing-ep43-b2b-marketing/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.96,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 0.96,
            "end": 2.42,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 2.42,
            "end": 3.9,
            "text": "今天我们来聊 B2B 营销。"
        },
        {
            "start": 3.9,
            "end": 6.58,
            "text": "如果你的客户是企业，而不是个人，"
        },
        {
            "start": 6.58,
            "end": 9.88,
            "text": "那营销逻辑就不能再照着 B2C 的思路直接套。"
        },
        {
            "start": 9.88,
            "end": 12.3,
            "text": "我先给你一个最关键的判断。"
        },
        {
            "start": 12.3,
            "end": 14.64,
            "text": "B2B 和 B2C 最大的区别，"
        },
        {
            "start": 14.64,
            "end": 15.98,
            "text": "不是产品长得不一样，"
        },
        {
            "start": 15.98,
            "end": 17.34,
            "text": "也不是渠道不一样，"
        },
        {
            "start": 17.34,
            "end": 19.22,
            "text": "而是决策方式不一样。"
        },
        {
            "start": 19.22,
            "end": 21.1,
            "text": "B2C 往往是一个人做决定。"
        },
        {
            "start": 21.1,
            "end": 25.46,
            "text": "看到、喜欢、下单，整个过程可能十分钟就完成了。"
        },
        {
            "start": 25.46,
            "end": 26.86,
            "text": "但 B2B 不一样。"
        },
        {
            "start": 26.86,
            "end": 29.3,
            "text": "一个企业客户在决定要不要买你的产品时，"
        },
        {
            "start": 29.3,
            "end": 31.72,
            "text": "可能会同时出现采购、业务负责人、"
        },
        {
            "start": 31.72,
            "end": 34.16,
            "text": "技术团队、法务，最后还要老板拍板。"
        },
        {
            "start": 34.16,
            "end": 37.64,
            "text": "你不是在说服一个人，而是在推动一个组织完成决策。"
        },
        {
            "start": 38.02,
            "end": 40.32,
            "text": "这也意味着，B2B 营销的核心，"
        },
        {
            "start": 40.32,
            "end": 42.2,
            "text": "不是把信息撒出去就行，"
        },
        {
            "start": 42.2,
            "end": 45.04,
            "text": "而是要在更长的周期里，把不同的信息，"
        },
        {
            "start": 45.04,
            "end": 46.34,
            "text": "给到不同的角色。"
        },
        {
            "start": 46.34,
            "end": 49.02,
            "text": "这节课我想带你抓住四个关键动作。"
        },
        {
            "start": 49.02,
            "end": 52.64,
            "text": "ABM，内容驱动的线索培育，AI 线索评分，"
        },
        {
            "start": 52.64,
            "end": 54.38000000000001,
            "text": "以及销售和营销协同。"
        },
        {
            "start": 54.38000000000001,
            "end": 58.58,
            "text": "先说第一个，ABM，Account Based Marketing，基于客户的营销。"
        },
        {
            "start": 58.58,
            "end": 62.1,
            "text": "ABM 的逻辑，和传统撒网式营销正好相反。"
        },
        {
            "start": 62.1,
            "end": 65.48,
            "text": "传统营销是先尽量多拿线索，再从里面筛选。"
        },
        {
            "start": 65.48,
            "end": 68.48,
            "text": "ABM 是先挑出你最值得打的目标客户，"
        },
        {
            "start": 68.48,
            "end": 70.62,
            "text": "再围绕这些客户做深度定制。"
        },
        {
            "start": 70.62,
            "end": 72.92,
            "text": "为什么 B2B 特别适合 ABM。"
        },
        {
            "start": 72.92,
            "end": 75.6,
            "text": "因为 B2B 的客户通常数量没那么多，"
        },
        {
            "start": 75.6,
            "end": 77.34,
            "text": "但每一个客户的价值很高。"
        },
        {
            "start": 77.34,
            "end": 79.8,
            "text": "你可能只有一百个真正值得打的客户，"
        },
        {
            "start": 79.8,
            "end": 82.38,
            "text": "但每个客户的年合同额可能是几十万，"
        },
        {
            "start": 82.38,
            "end": 83.58,
            "text": "甚至上百万。"
        },
        {
            "start": 83.58,
            "end": 85.42,
            "text": "既然单个客户价值这么高，"
        },
        {
            "start": 85.42,
            "end": 88.02,
            "text": "就值得你投入更多精力去理解它、"
        },
        {
            "start": 88.08,
            "end": 89.52,
            "text": "靠近它、拿下它。"
        },
        {
            "start": 89.52,
            "end": 91.4,
            "text": "那 AI 在 ABM 里能帮什么。"
        },
        {
            "start": 91.4,
            "end": 93.22,
            "text": "第一，帮你识别目标客户。"
        },
        {
            "start": 93.22,
            "end": 96.16,
            "text": "AI 可以分析你现有客户的行业、规模、"
        },
        {
            "start": 96.16,
            "end": 97.4,
            "text": "增长阶段、技术栈，"
        },
        {
            "start": 97.4,
            "end": 99.5,
            "text": "再去找出一批“长得像”的潜在客户。"
        },
        {
            "start": 99.5,
            "end": 101.24,
            "text": "第二，帮你收集客户情报。"
        },
        {
            "start": 101.24,
            "end": 103.76,
            "text": "比如这个客户最近融资了，换了高管，"
        },
        {
            "start": 103.94,
            "end": 106.18,
            "text": "开了新业务，或者正在做数字化升级，"
        },
        {
            "start": 106.18,
            "end": 108.16,
            "text": "这些都可能是你切入的窗口。"
        },
        {
            "start": 108.16,
            "end": 110.16,
            "text": "第三，帮你做个性化触达。"
        },
        {
            "start": 110.61999999999999,
            "end": 112.9,
            "text": "不是每个客户都发一套一样的话术，"
        },
        {
            "start": 112.9,
            "end": 116.08,
            "text": "而是针对他的行业、场景和角色，"
        },
        {
            "start": 116.08,
            "end": 118.86,
            "text": "生成更贴近业务现实的内容和邮件。"
        },
        {
            "start": 118.86,
            "end": 120.2,
            "text": "这时候你会发现，"
        },
        {
            "start": 120.2,
            "end": 122.26,
            "text": "ABM 的重点从来不是“多发一些”，"
        },
        {
            "start": 122.26,
            "end": 123.38,
            "text": "而是“打得更准”。"
        },
        {
            "start": 123.38,
            "end": 126.66,
            "text": "第二个关键动作，是内容驱动的线索培育。"
        },
        {
            "start": 126.66,
            "end": 131.64,
            "text": "B2B 客户通常不会因为看到一条广告，就立刻买你的产品。"
        },
        {
            "start": 131.64,
            "end": 134.72,
            "text": "他需要被教育，也需要被持续建立信任。"
        },
        {
            "start": 134.72,
            "end": 137.82,
            "text": "这个过程就叫 Lead Nurturing，线索培育。"
        },
        {
            "start": 137.82,
            "end": 140.82,
            "text": "你可以把它理解成一个分阶段推进的过程。"
        },
        {
            "start": 140.82,
            "end": 143.52,
            "text": "在意识阶段，客户可能只感觉到问题，"
        },
        {
            "start": 143.52,
            "end": 145.72,
            "text": "但还没有想清楚解决方案是什么。"
        },
        {
            "start": 145.72,
            "end": 148.42,
            "text": "这时你给他的内容，应该是趋势判断、"
        },
        {
            "start": 148.56,
            "end": 150.21999999999997,
            "text": "问题诊断、行业洞察。"
        },
        {
            "start": 150.22,
            "end": 153.24,
            "text": "在考虑阶段，客户开始主动比较不同方案。"
        },
        {
            "start": 153.24,
            "end": 156.94,
            "text": "这时你更适合给案例研究、白皮书、方法对比。"
        },
        {
            "start": 156.94,
            "end": 160.56,
            "text": "到了决策阶段，客户已经在几个方案之间做取舍了。"
        },
        {
            "start": 160.56,
            "end": 164.6,
            "text": "这时就应该给产品演示、试用、ROI 分析和客户证言。"
        },
        {
            "start": 164.6,
            "end": 166.26,
            "text": "AI 在这里最重要的作用，"
        },
        {
            "start": 166.26,
            "end": 169.42,
            "text": "是判断一个线索现在到底处于哪个阶段。"
        },
        {
            "start": 169.42,
            "end": 172.0,
            "text": "他最近看了什么内容，下载了什么资料，"
        },
        {
            "start": 172.0,
            "end": 174.72,
            "text": "参加了什么活动，这些行为都会告诉你，"
        },
        {
            "start": 174.72,
            "end": 176.14,
            "text": "他现在更需要什么信息。"
        },
        {
            "start": 176.56,
            "end": 178.58000000000004,
            "text": "所以真正好的 B2B 内容营销，"
        },
        {
            "start": 178.58000000000004,
            "end": 180.28,
            "text": "不是内容越多越好，"
        },
        {
            "start": 180.28,
            "end": 182.84,
            "text": "而是内容跟决策阶段匹配得足够准。"
        },
        {
            "start": 182.84,
            "end": 185.42,
            "text": "第三个关键动作，是 AI 线索评分。"
        },
        {
            "start": 185.42,
            "end": 187.9,
            "text": "因为销售的时间一定是有限的。"
        },
        {
            "start": 187.9,
            "end": 190.2,
            "text": "不是每个线索都值得同样的跟进力度。"
        },
        {
            "start": 190.2,
            "end": 193.22,
            "text": "所以你必须回答一个问题，谁更值得先跟进。"
        },
        {
            "start": 193.22,
            "end": 195.34,
            "text": "传统做法是人工设规则。"
        },
        {
            "start": 195.34,
            "end": 197.1,
            "text": "比如下载白皮书加十分，"
        },
        {
            "start": 197.1,
            "end": 198.74,
            "text": "参加活动加二十分，"
        },
        {
            "start": 198.74,
            "end": 201.04,
            "text": "职位是 CTO 再加三十分。"
        },
        {
            "start": 201.04,
            "end": 203.48,
            "text": "这当然有用，但也很容易僵化。"
        },
        {
            "start": 203.48,
            "end": 205.02,
            "text": "AI 线索评分更进一步。"
        },
        {
            "start": 205.02,
            "end": 207.54,
            "text": "它会同时看很多信号，行为数据、"
        },
        {
            "start": 207.54,
            "end": 209.62,
            "text": "公司属性、互动频率、内容偏好，"
        },
        {
            "start": 209.62,
            "end": 212.68,
            "text": "最后给出一个更动态的转化概率判断。"
        },
        {
            "start": 212.68,
            "end": 214.74,
            "text": "更重要的是，它不是静态分数。"
        },
        {
            "start": 214.74,
            "end": 217.45999999999998,
            "text": "一个线索上周还不值得优先跟进，"
        },
        {
            "start": 217.46,
            "end": 219.46,
            "text": "这周却连续看了你的案例、"
        },
        {
            "start": 219.46,
            "end": 222.58,
            "text": "下载了技术白皮书、还反复访问价格页。"
        },
        {
            "start": 222.58,
            "end": 227.0,
            "text": "这个时候，AI 应该立刻把优先级提上来，让销售尽快接手。"
        },
        {
            "start": 227.0,
            "end": 230.2,
            "text": "第四个关键动作，是销售和营销协同。"
        },
        {
            "start": 230.2,
            "end": 232.74,
            "text": "很多 B2B 公司都会遇到一个老问题。"
        },
        {
            "start": 232.74,
            "end": 234.9,
            "text": "营销觉得自己给了很多线索，"
        },
        {
            "start": 234.9,
            "end": 237.32,
            "text": "销售却觉得这些线索质量不行。"
        },
        {
            "start": 237.32,
            "end": 241.27999999999997,
            "text": "销售埋怨营销不懂成交，营销埋怨销售不跟进。"
        },
        {
            "start": 241.28,
            "end": 242.76,
            "text": "AI 在这里最有价值的，"
        },
        {
            "start": 242.76,
            "end": 243.92,
            "text": "不是多做一个看板，"
        },
        {
            "start": 243.92,
            "end": 246.4,
            "text": "而是让双方看到同一条客户旅程。"
        },
        {
            "start": 246.4,
            "end": 248.8,
            "text": "从第一次触达，到内容互动，"
        },
        {
            "start": 248.8,
            "end": 251.12,
            "text": "到分数变化，到销售接手，"
        },
        {
            "start": 251.12,
            "end": 252.32,
            "text": "再到最终成交，"
        },
        {
            "start": 252.32,
            "end": 254.3,
            "text": "大家看到的是同一个客户，"
        },
        {
            "start": 254.3,
            "end": 256.28,
            "text": "而不是各看各的数据。"
        },
        {
            "start": 256.28,
            "end": 257.88,
            "text": "这样一来，什么时候该交接，"
        },
        {
            "start": 257.88,
            "end": 260.04,
            "text": "哪些信号说明客户已经准备好了，"
        },
        {
            "start": 260.04,
            "end": 261.9,
            "text": "哪些内容真的推动了成交，"
        },
        {
            "start": 261.9,
            "end": 263.12,
            "text": "都会越来越清楚。"
        },
        {
            "start": 263.12,
            "end": 263.94,
            "text": "讲到这里，"
        },
        {
            "start": 263.94,
            "end": 267.94,
            "text": "我们再把 AI 在 B2B 里的几个具体应用落得更实一点。"
        },
        {
            "start": 267.94,
            "end": 269.38,
            "text": "第一，个性化开发邮件。"
        },
        {
            "start": 269.38,
            "end": 271.4,
            "text": "冷邮件本来回复率就不高，"
        },
        {
            "start": 271.4,
            "end": 274.58,
            "text": "但如果每封邮件都能结合客户最近的动作、"
        },
        {
            "start": 274.58,
            "end": 277.84,
            "text": "公司现状和潜在痛点，质量会完全不同。"
        },
        {
            "start": 277.84,
            "end": 279.4,
            "text": "第二，竞品分析。"
        },
        {
            "start": 279.4,
            "end": 282.9,
            "text": "客户在做选择时，一定会把你和别家放在一起比较。"
        },
        {
            "start": 282.9,
            "end": 285.32,
            "text": "AI 可以帮你持续监控竞品动态，"
        },
        {
            "start": 285.32,
            "end": 287.48,
            "text": "让你在销售沟通里更有准备。"
        },
        {
            "start": 287.48,
            "end": 289.5,
            "text": "第三，客户情报简报。"
        },
        {
            "start": 289.5,
            "end": 291.58,
            "text": "在和重点客户开会之前，"
        },
        {
            "start": 291.58,
            "end": 294.32,
            "text": "AI 可以先帮你把财报、业务重点、"
        },
        {
            "start": 294.32,
            "end": 297.08,
            "text": "组织变化、公开动作整理成一份简报，"
        },
        {
            "start": 297.08,
            "end": 299.86,
            "text": "让你带着更完整的上下文进入会议。"
        },
        {
            "start": 299.86,
            "end": 303.42,
            "text": "所以如果我们把整节课压缩成一句话，那就是："
        },
        {
            "start": 303.42,
            "end": 305.5,
            "text": "B2B 营销不是撒网获客，"
        },
        {
            "start": 305.5,
            "end": 308.66,
            "text": "而是围绕高价值客户，在长决策周期里，"
        },
        {
            "start": 308.66,
            "end": 310.32,
            "text": "持续推动组织决策。"
        },
        {
            "start": 310.32,
            "end": 311.76,
            "text": "好，我们总结一下。"
        },
        {
            "start": 311.76,
            "end": 316.36,
            "text": "B2B 的难点，在于多角色决策、长购买周期和高客单价。"
        },
        {
            "start": 316.36,
            "end": 318.82,
            "text": "真正关键的四个动作，是 ABM、"
        },
        {
            "start": 318.82,
            "end": 321.64,
            "text": "内容线索培育、AI 线索评分，"
        },
        {
            "start": 321.64,
            "end": 323.58,
            "text": "以及销售和营销协同。"
        },
        {
            "start": 323.58,
            "end": 326.5,
            "text": "AI 最有价值的地方，是把客户识别、"
        },
        {
            "start": 326.5,
            "end": 327.28,
            "text": "客户情报、"
        },
        {
            "start": 327.28,
            "end": 330.22,
            "text": "个性化触达和优先级判断规模化。"
        },
        {
            "start": 330.22,
            "end": 333.54,
            "text": "但前提始终是，你先想清楚谁值得打、"
        },
        {
            "start": 333.54,
            "end": 336.14,
            "text": "在什么阶段打、要用什么信息去打。"
        },
        {
            "start": 336.14,
            "end": 338.12,
            "text": "下一期我们会继续聊出海营销，"
        },
        {
            "start": 338.12,
            "end": 340.82,
            "text": "看看 AI 如何降低全球化营销的门槛。"
        },
        {
            "start": 340.82,
            "end": 342.52,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 12.3,
        "index": 0
    },
    {
        "start": 12.3,
        "end": 54.38,
        "index": 1
    },
    {
        "start": 54.38,
        "end": 123.38,
        "index": 2
    },
    {
        "start": 123.38,
        "end": 182.84,
        "index": 3
    },
    {
        "start": 182.84,
        "end": 227.0,
        "index": 4
    },
    {
        "start": 227.0,
        "end": 263.94,
        "index": 5
    },
    {
        "start": 263.94,
        "end": 310.32,
        "index": 6
    },
    {
        "start": 310.32,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解 B2B 的多角色决策和长周期购买，再用 ABM、线索培育、AI 评分与销售协同建立更稳的企业获客系统。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-10", coachSource: "./ai-coach.html?source=lesson-marketing-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于B2B 营销：企业客户怎么打的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "B2B 营销：企业客户怎么打", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
