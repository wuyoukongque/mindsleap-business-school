(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第1课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第1课：数据驱动决策：从拍脑袋到用数据说话",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep86-data-driven-decision/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：数据驱动决策：从拍脑袋到用数据说话", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "数据驱动决策：从拍脑袋到用数据说话",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "核心商业指标：哪些数字必须盯住",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "数据可视化与 Dashboard：让数据讲故事",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "用户分群：AI 发现你看不到的用户群体",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "漏斗分析与归因：AI 帮你找到增长杠杆",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "预测分析：用 AI 预测业务趋势",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AB 测试与实验文化",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：Netflix 如何用数据加 AI 决定拍什么剧",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：拼多多的数据驱动增长引擎",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 数据分析工具实操：从 Excel 到对话式分析",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的数据诊断：用 AI 搭建业务指标体系",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-data-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先定义问题，再看数据",
                "body": "没有清楚的经营问题，数据只会变成更多噪音；先问对问题，指标才有方向。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "指标不是数字，而是管理语言",
                "body": "好的指标能帮助团队对齐目标、识别异常、判断优先级，而不是只做事后汇报。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 放大分析能力，也放大提问质量",
                "body": "AI 可以更快生成图表和洞察，但管理者仍然要负责判断什么值得分析、什么值得行动。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 1/11", "建议下一节：核心商业指标：哪些数字必须盯住", '也可以先整理这一节'], nextHref: "./lesson-data-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-01", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson1", audioSource: './assets/audio/data-ep86-data-driven-decision.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep86-data-driven-decision.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep86-data-driven-decision/slide_01.png",
            "label": "数据驱动决策：从拍脑袋到用数据说话",
            "caption": "这一节会帮助你系统理解：数据驱动决策：从拍脑袋到用数据说话"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_03.png",
            "label": "核心指标与判断",
            "caption": "第二个断裂：数据和决策之间的断裂。 即使拿到了数据，很多人不知道怎么用数据来做决策。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_04.png",
            "label": "从看见到解释",
            "caption": "留存率是多少、收入是多少、增长率是多少。 但你还需要知道\"为什么\"和\"怎么办\"。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "把核心业务系统的数据打通，统一格式，建立数据质量的检查机制。 不需要一步到位。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "有些决策需要数据支撑，有些决策需要直觉和判断。 特别是在信息不完整的情况下，在进入全新市场的情况下，在需要快速行动的情况下，过度依赖数据反而会延误时机。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_07.png",
            "label": "本节行动提示",
            "caption": "数据提供的是信息、洞察和建议。 人负责的是判断、权衡和决策。"
        },
        {
            "file": "data-ep86-data-driven-decision/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 2.279999999999999,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 2.279999999999999,
            "end": 4.500000000000007,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.500000000000007,
            "end": 8.42,
            "text": "从今天开始我们进入模块七：商业数据与分析。"
        },
        {
            "start": 8.42,
            "end": 11.7,
            "text": "前面六个模块讲了战略、财务、营销、"
        },
        {
            "start": 12.06,
            "end": 13.6,
            "text": "领导力、运营、创新。"
        },
        {
            "start": 13.6,
            "end": 16.86,
            "text": "这些模块里多次提到\"用数据做决策\"。"
        },
        {
            "start": 16.86,
            "end": 20.3,
            "text": "今天我们把\"数据\"这件事系统地讲透。"
        },
        {
            "start": 20.3,
            "end": 24.08,
            "text": "先问一个问题：你的企业做决策主要靠什么？"
        },
        {
            "start": 24.08,
            "end": 26.54,
            "text": "是数据还是经验和直觉？"
        },
        {
            "start": 26.54,
            "end": 28.26,
            "text": "如果你诚实地回答，"
        },
        {
            "start": 28.26,
            "end": 31.36,
            "text": "大多数企业的大多数决策，"
        },
        {
            "start": 31.36,
            "end": 33.22,
            "text": "还是靠经验和直觉。"
        },
        {
            "start": 33.22,
            "end": 36.8,
            "text": "数据更多是\"事后验证\"而不是\"事前驱动\"。"
        },
        {
            "start": 36.8,
            "end": 41.86,
            "text": "今天我们来聊怎么从\"拍脑袋\"转变到\"用数据说话\"，"
        },
        {
            "start": 41.86,
            "end": 44.84,
            "text": "以及 AI 如何让这个转变变得更容易。"
        },
        {
            "start": 44.84,
            "end": 48.94,
            "text": "先讲一个根本性的问题：为什么数据驱动这么难？"
        },
        {
            "start": 48.94,
            "end": 50.46,
            "text": "不是因为缺数据。"
        },
        {
            "start": 50.46,
            "end": 52.62,
            "text": "大多数企业不缺数据。"
        },
        {
            "start": 52.62,
            "end": 55.66,
            "text": "ERP 里有数据、CRM 里有数据、"
        },
        {
            "start": 55.66,
            "end": 58.44,
            "text": "财务系统里有数据、网站后台有数据。"
        },
        {
            "start": 58.44,
            "end": 59.92,
            "text": "数据太多了。"
        },
        {
            "start": 60.06,
            "end": 61.76,
            "text": "问题在于三个\"断裂\"。"
        },
        {
            "start": 61.76,
            "end": 64.78,
            "text": "第一个断裂：数据和人之间的断裂。"
        },
        {
            "start": 64.78,
            "end": 67.98,
            "text": "数据在系统里，但大部分人看不到、看不懂。"
        },
        {
            "start": 67.98,
            "end": 70.9,
            "text": "你想知道上个月的客户留存率是多少，"
        },
        {
            "start": 70.9,
            "end": 73.84,
            "text": "你需要找数据分析师帮你跑一个查询，"
        },
        {
            "start": 73.84,
            "end": 75.94,
            "text": "等两三天才能拿到结果。"
        },
        {
            "start": 75.94,
            "end": 79.12,
            "text": "等拿到的时候，你可能已经拍脑袋做了决定。"
        },
        {
            "start": 79.12,
            "end": 82.0,
            "text": "第二个断裂：数据和决策之间的断裂。"
        },
        {
            "start": 82.0,
            "end": 86.06,
            "text": "即使拿到了数据，很多人不知道怎么用数据来做决策。"
        },
        {
            "start": 86.06,
            "end": 90.52,
            "text": "数据告诉你\"上个月客户留存率下降了五个百分点\"，"
        },
        {
            "start": 90.52,
            "end": 91.04,
            "text": "然后呢？"
        },
        {
            "start": 91.04,
            "end": 91.76,
            "text": "为什么下降？"
        },
        {
            "start": 91.76,
            "end": 92.74,
            "text": "应该做什么？"
        },
        {
            "start": 92.74,
            "end": 94.86,
            "text": "数据本身不会告诉你。"
        },
        {
            "start": 94.86,
            "end": 98.52,
            "text": "第三个断裂：部门和部门之间的数据断裂。"
        },
        {
            "start": 98.52,
            "end": 101.16,
            "text": "营销有营销的数据，销售有销售的数据，"
        },
        {
            "start": 101.16,
            "end": 103.72,
            "text": "产品有产品的数据，财务有财务的数据。"
        },
        {
            "start": 103.72,
            "end": 105.6,
            "text": "但这些数据之间没有打通。"
        },
        {
            "start": 105.6,
            "end": 108.74,
            "text": "你很难看到一个完整的业务全景。"
        },
        {
            "start": 108.74,
            "end": 110.86000000000001,
            "text": "AI 正在修复这三个断裂。"
        },
        {
            "start": 110.86000000000001,
            "end": 115.06,
            "text": "修复第一个断裂：AI 让每个人都能直接跟数据对话。"
        },
        {
            "start": 115.06,
            "end": 117.4,
            "text": "传统模式下，你要看数据，"
        },
        {
            "start": 117.4,
            "end": 119.6,
            "text": "要么自己会写数据库查询语句，"
        },
        {
            "start": 119.6,
            "end": 122.12,
            "text": "要么找数据分析师帮你做。"
        },
        {
            "start": 122.12,
            "end": 125.06,
            "text": "AI 时代，你可以直接用自然语言问 AI："
        },
        {
            "start": 125.06,
            "end": 127.82,
            "text": "\"上个月华东地区的客户留存率是多少？"
        },
        {
            "start": 127.82,
            "end": 130.42,
            "text": "跟上上个月相比变化了多少？"
        },
        {
            "start": 130.42,
            "end": 131.98,
            "text": "\"AI 直接给你答案。"
        },
        {
            "start": 131.98,
            "end": 134.64,
            "text": "不需要会写代码，不需要等分析师。"
        },
        {
            "start": 134.64,
            "end": 138.06,
            "text": "这听起来是一个小变化，但它的影响是巨大的。"
        },
        {
            "start": 138.06,
            "end": 143.22,
            "text": "当每一个管理者都能随时随地获取自己需要的数据时，"
        },
        {
            "start": 143.22,
            "end": 145.74,
            "text": "数据就真正融入了决策过程。"
        },
        {
            "start": 145.74,
            "end": 150.81,
            "text": "修复第二个断裂：AI 不只给你数据，还给你洞察。"
        },
        {
            "start": 150.81,
            "end": 153.88,
            "text": "传统的数据报表告诉你\"是什么\"。"
        },
        {
            "start": 153.88,
            "end": 157.16,
            "text": "留存率是多少、收入是多少、增长率是多少。"
        },
        {
            "start": 157.16,
            "end": 160.06,
            "text": "但你还需要知道\"为什么\"和\"怎么办\"。"
        },
        {
            "start": 160.06,
            "end": 161.52,
            "text": "AI 可以做到这一点。"
        },
        {
            "start": 161.52,
            "end": 164.96,
            "text": "它不只是告诉你留存率下降了，还能自动分析原因。"
        },
        {
            "start": 164.96,
            "end": 168.7,
            "text": "\"留存率下降主要是因为首月用户流失增加。"
        },
        {
            "start": 168.7,
            "end": 170.02,
            "text": "进一步分析发现，"
        },
        {
            "start": 170.02,
            "end": 172.48,
            "text": "来自某个渠道的新用户质量较低，"
        },
        {
            "start": 172.48,
            "end": 175.57999999999998,
            "text": "他们的七天留存率只有百分之十五，"
        },
        {
            "start": 175.58,
            "end": 178.38000000000002,
            "text": "远低于其他渠道的百分之三十五。"
        },
        {
            "start": 178.38000000000002,
            "end": 181.7,
            "text": "建议优化该渠道的获客策略或调整投放预算。"
        },
        {
            "start": 181.7,
            "end": 182.11999999999998,
            "text": "\""
        },
        {
            "start": 182.11999999999998,
            "end": 185.2,
            "text": "从数据到洞察到建议，AI 一步到位。"
        },
        {
            "start": 185.64,
            "end": 188.8,
            "text": "修复第三个断裂：AI 可以整合跨部门的数据。"
        },
        {
            "start": 188.8,
            "end": 192.54,
            "text": "AI 可以同时接入多个数据源，把营销、"
        },
        {
            "start": 192.54,
            "end": 193.6,
            "text": "销售、产品、"
        },
        {
            "start": 193.6,
            "end": 195.7,
            "text": "财务的数据整合在一起分析。"
        },
        {
            "start": 195.7,
            "end": 197.98,
            "text": "给你一个完整的业务全景视图。"
        },
        {
            "start": 197.98,
            "end": 203.6,
            "text": "好，讲完 AI 的价值，来看怎么建立数据驱动的决策体系。"
        },
        {
            "start": 203.6,
            "end": 205.24,
            "text": "我给你一个三层架构。"
        },
        {
            "start": 205.24,
            "end": 207.18,
            "text": "第一层：数据基础层。"
        },
        {
            "start": 207.18,
            "end": 210.26,
            "text": "这一层解决的是\"数据从哪里来、"
        },
        {
            "start": 210.26,
            "end": 212.48,
            "text": "怎么存、怎么保证质量\"的问题。"
        },
        {
            "start": 212.48,
            "end": 215.6,
            "text": "很多企业的数据基础很差。"
        },
        {
            "start": 215.6,
            "end": 219.64,
            "text": "数据分散在不同系统里、格式不统一、"
        },
        {
            "start": 219.64,
            "end": 221.52,
            "text": "有大量的缺失和错误。"
        },
        {
            "start": 221.52,
            "end": 226.22,
            "text": "在这种基础上做数据分析，得到的结论是不可靠的。"
        },
        {
            "start": 226.22,
            "end": 228.84,
            "text": "所以第一步是整理你的数据基础。"
        },
        {
            "start": 228.84,
            "end": 233.38,
            "text": "把核心业务系统的数据打通，统一格式，"
        },
        {
            "start": 233.38,
            "end": 235.52,
            "text": "建立数据质量的检查机制。"
        },
        {
            "start": 235.52,
            "end": 237.1,
            "text": "不需要一步到位。"
        },
        {
            "start": 237.1,
            "end": 240.56,
            "text": "先把最关键的几个数据源整理好就行。"
        },
        {
            "start": 240.56,
            "end": 244.38,
            "text": "比如：客户数据、订单数据、财务数据。"
        },
        {
            "start": 244.38,
            "end": 246.38,
            "text": "第二层：分析和洞察层。"
        },
        {
            "start": 246.38,
            "end": 250.04000000000002,
            "text": "有了干净的数据之后，需要把数据变成洞察。"
        },
        {
            "start": 250.04000000000002,
            "end": 252.1,
            "text": "这一层包括：定义关键指标、"
        },
        {
            "start": 252.1,
            "end": 254.38,
            "text": "搭建数据看板、设置预警规则、"
        },
        {
            "start": 254.38,
            "end": 255.7,
            "text": "定期做数据分析。"
        },
        {
            "start": 255.7,
            "end": 258.14,
            "text": "AI 在这一层的作用最大。"
        },
        {
            "start": 258.14,
            "end": 260.22,
            "text": "AI 可以自动生成分析报告、"
        },
        {
            "start": 260.38,
            "end": 262.94,
            "text": "自动发现异常、自动做归因分析。"
        },
        {
            "start": 262.94,
            "end": 264.76,
            "text": "第三层：决策应用层。"
        },
        {
            "start": 264.76,
            "end": 267.42,
            "text": "洞察有了，怎么用到决策中去？"
        },
        {
            "start": 267.42,
            "end": 271.38,
            "text": "这一层是把数据洞察嵌入到日常的决策流程中。"
        },
        {
            "start": 271.38,
            "end": 273.56,
            "text": "比如：每周的经营会议上，"
        },
        {
            "start": 273.56,
            "end": 276.56,
            "text": "先看 AI 生成的经营数据摘要和异常预警，"
        },
        {
            "start": 276.56,
            "end": 278.2,
            "text": "然后讨论怎么应对。"
        },
        {
            "start": 278.2,
            "end": 280.08,
            "text": "做一个新的营销活动之前，"
        },
        {
            "start": 280.08,
            "end": 283.22,
            "text": "先看 AI 对目标用户群体的分析和预测。"
        },
        {
            "start": 283.82,
            "end": 287.2,
            "text": "上一个新功能之前，先做 AI 辅助的AB 测试。"
        },
        {
            "start": 287.2,
            "end": 290.78,
            "text": "关键是让数据分析变成决策流程的\"标准动作\"，"
        },
        {
            "start": 290.78,
            "end": 292.76,
            "text": "而不是\"偶尔想起来才看一下\"。"
        },
        {
            "start": 292.76,
            "end": 295.64,
            "text": "讲几个数据驱动决策的常见误区。"
        },
        {
            "start": 295.64,
            "end": 297.66,
            "text": "第一个误区：数据崇拜。"
        },
        {
            "start": 297.66,
            "end": 299.78,
            "text": "有些人走向了另一个极端。"
        },
        {
            "start": 299.78,
            "end": 303.46,
            "text": "什么事情都要等数据，没有数据就不做决定。"
        },
        {
            "start": 303.46,
            "end": 305.86,
            "text": "数据是工具，不是信仰。"
        },
        {
            "start": 305.86,
            "end": 311.08,
            "text": "有些决策需要数据支撑，有些决策需要直觉和判断。"
        },
        {
            "start": 311.52000000000004,
            "end": 314.42,
            "text": "特别是在信息不完整的情况下，"
        },
        {
            "start": 314.42,
            "end": 316.76,
            "text": "在进入全新市场的情况下，"
        },
        {
            "start": 316.76,
            "end": 319.06,
            "text": "在需要快速行动的情况下，"
        },
        {
            "start": 319.06,
            "end": 322.06,
            "text": "过度依赖数据反而会延误时机。"
        },
        {
            "start": 322.06,
            "end": 326.22,
            "text": "好的管理者知道什么时候看数据、什么时候信直觉。"
        },
        {
            "start": 326.22,
            "end": 328.78,
            "text": "第二个误区：数据确认偏误。"
        },
        {
            "start": 328.78,
            "end": 333.68,
            "text": "就是你已经有了一个结论，然后去数据里找支持你的证据。"
        },
        {
            "start": 333.68,
            "end": 336.74,
            "text": "找到了就说\"看，数据证明我是对的\"。"
        },
        {
            "start": 336.74,
            "end": 338.03999999999996,
            "text": "不利的数据就忽略。"
        },
        {
            "start": 338.03999999999996,
            "end": 341.92,
            "text": "避免这个误区的方法是：先提出假设，"
        },
        {
            "start": 341.92,
            "end": 345.14,
            "text": "然后设计实验来验证或推翻这个假设。"
        },
        {
            "start": 345.14,
            "end": 347.78,
            "text": "不是\"找数据来支持我的决定\"，"
        },
        {
            "start": 347.78,
            "end": 350.12,
            "text": "而是\"用数据来检验我的假设\"。"
        },
        {
            "start": 350.58,
            "end": 353.66,
            "text": "第三个误区：看平均值忽略分布。"
        },
        {
            "start": 353.66,
            "end": 357.18,
            "text": "\"我们的客户满意度平均分是 4.2，不错。"
        },
        {
            "start": 357.18,
            "end": 358.64,
            "text": "\"但如果你看分布，"
        },
        {
            "start": 358.64,
            "end": 361.1333333333333,
            "text": "可能有百分之三十的客户打了 5 分，"
        },
        {
            "start": 361.1333333333333,
            "end": 363.52,
            "text": "百分之二十的客户打了 1 分。"
        },
        {
            "start": 363.52,
            "end": 366.46,
            "text": "平均值掩盖了严重的两极分化。"
        },
        {
            "start": 366.46,
            "end": 370.14,
            "text": "AI 的好处是它可以帮你自动分析数据的分布，"
        },
        {
            "start": 370.14,
            "end": 371.52,
            "text": "不只是看平均值。"
        },
        {
            "start": 371.52,
            "end": 373.16,
            "text": "任何时候看到一个数字，"
        },
        {
            "start": 373.16,
            "end": 375.72,
            "text": "都要问\"这个数字背后的分布是什么样的\"。"
        },
        {
            "start": 375.72,
            "end": 377.92,
            "text": "最后讲一个非常重要的观点："
        },
        {
            "start": 377.92,
            "end": 381.08,
            "text": "数据驱动不是\"数据替代人做决策\"，"
        },
        {
            "start": 381.08,
            "end": 384.08,
            "text": "而是\"数据帮助人做更好的决策\"。"
        },
        {
            "start": 384.08,
            "end": 386.0,
            "text": "最终做决定的是人。"
        },
        {
            "start": 386.0,
            "end": 389.12,
            "text": "数据提供的是信息、洞察和建议。"
        },
        {
            "start": 389.12,
            "end": 392.56,
            "text": "人负责的是判断、权衡和决策。"
        },
        {
            "start": 392.56,
            "end": 394.35999999999996,
            "text": "AI 也是一样。"
        },
        {
            "start": 394.35999999999996,
            "end": 398.16,
            "text": "AI 给你分析和建议，但最终拍板的是你。"
        },
        {
            "start": 398.16,
            "end": 401.02,
            "text": "你比 AI 更了解你的企业、你的团队、"
        },
        {
            "start": 401.3,
            "end": 403.82,
            "text": "你的客户、你的行业的微妙之处。"
        },
        {
            "start": 403.82,
            "end": 405.92,
            "text": "最好的决策模式是："
        },
        {
            "start": 405.92,
            "end": 408.5,
            "text": "AI 提供数据洞察和方案建议，"
        },
        {
            "start": 408.5,
            "end": 410.74,
            "text": "人做最终判断和决策。"
        },
        {
            "start": 410.74,
            "end": 413.42,
            "text": "人和 AI 各发挥各的优势。"
        },
        {
            "start": 413.42,
            "end": 415.16,
            "text": "好，总结一下。"
        },
        {
            "start": 415.16,
            "end": 417.26,
            "text": "数据驱动决策的三个断裂："
        },
        {
            "start": 417.26,
            "end": 420.5,
            "text": "数据和人的断裂、数据和决策的断裂、"
        },
        {
            "start": 420.5,
            "end": 422.2,
            "text": "跨部门数据断裂。"
        },
        {
            "start": 422.2,
            "end": 424.52,
            "text": "AI 正在修复这三个断裂。"
        },
        {
            "start": 424.52,
            "end": 427.42,
            "text": "数据驱动三层架构：数据基础层、"
        },
        {
            "start": 427.62,
            "end": 429.48,
            "text": "分析洞察层、决策应用层。"
        },
        {
            "start": 429.48,
            "end": 434.72,
            "text": "三个常见误区：数据崇拜、确认偏误、只看平均值。"
        },
        {
            "start": 434.72,
            "end": 439.52,
            "text": "数据驱动不是数据替代人，而是数据帮助人做更好的决策。"
        },
        {
            "start": 439.98,
            "end": 444.46,
            "text": "下一期我们聊核心商业指标：哪些数字是你必须盯住的。"
        },
        {
            "start": 444.46,
            "end": 446.66,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 446.66,
            "end": 449.76,
            "text": "1. 数据驱动三大断裂：数据与人、"
        },
        {
            "start": 449.76,
            "end": 451.94,
            "text": "数据与决策、跨部门数据"
        },
        {
            "start": 451.94,
            "end": 455.24,
            "text": "2. AI 修复断裂：自然语言查数据、"
        },
        {
            "start": 455.24,
            "end": 458.06,
            "text": "自动生成洞察、跨源数据整合"
        },
        {
            "start": 458.06,
            "end": 462.7,
            "text": "3. 三层架构：数据基础 → 分析洞察 → 决策应用"
        },
        {
            "start": 462.7,
            "end": 468.46,
            "text": "4. 数据驱动 ≠ 数据替代人，而是数据帮助人做更好的决策"
        },
        {
            "start": 469.22,
            "end": 474.18,
            "text": "1. 你做决策时，有多大比例是基于数据的？"
        },
        {
            "start": 474.18,
            "end": 475.78,
            "text": "有多大比例是凭经验？"
        },
        {
            "start": 475.78,
            "end": 479.82,
            "text": "2. 你获取一个关键数据需要多长时间？"
        },
        {
            "start": 479.82,
            "end": 482.44,
            "text": "是实时的还是要等几天？"
        },
        {
            "start": 482.44,
            "end": 485.72,
            "text": "3. 你的组织有哪些\"数据断裂\"？"
        },
        {
            "start": 485.72,
            "end": 487.22,
            "text": "如何修复？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 55.0,
        "index": 0
    },
    {
        "start": 55.0,
        "end": 110.0,
        "index": 1
    },
    {
        "start": 110.0,
        "end": 165.0,
        "index": 2
    },
    {
        "start": 165.0,
        "end": 220.0,
        "index": 3
    },
    {
        "start": 220.0,
        "end": 275.0,
        "index": 4
    },
    {
        "start": 275.0,
        "end": 330.0,
        "index": 5
    },
    {
        "start": 330.0,
        "end": 385.0,
        "index": 6
    },
    {
        "start": 385.0,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-data-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-02.html?entry={entry}", secondaryHref: "./lesson-data-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-01", coachSource: "./ai-coach.html?source=lesson-data-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于数据驱动决策：从拍脑袋到用数据说话的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "数据驱动决策：从拍脑袋到用数据说话", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
