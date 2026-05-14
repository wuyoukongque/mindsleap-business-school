(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第9课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第9课：案例：拼多多的数据驱动增长引擎",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep94-case-pinduoduo/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：拼多多的数据驱动增长引擎", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-10.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "数据驱动决策：从拍脑袋到用数据说话",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "核心商业指标：哪些数字必须盯住",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "数据可视化与 Dashboard：让数据讲故事",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "用户分群：AI 发现你看不到的用户群体",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "漏斗分析与归因：AI 帮你找到增长杠杆",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "预测分析：用 AI 预测业务趋势",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AB 测试与实验文化",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：Netflix 如何用数据加 AI 决定拍什么剧",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：拼多多的数据驱动增长引擎",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 数据分析工具实操：从 Excel 到对话式分析",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 11,
                "title": "你的数据诊断：用 AI 搭建业务指标体系",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-data-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 9/11", "建议下一节：AI 数据分析工具实操：从 Excel 到对话式分析", '也可以先整理这一节'], nextHref: "./lesson-data-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-09", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson9", audioSource: './assets/audio/data-ep94-case-pinduoduo.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep94-case-pinduoduo.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep94-case-pinduoduo/slide_01.png",
            "label": "案例：拼多多的数据驱动增长引擎",
            "caption": "这一节会帮助你系统理解：案例：拼多多的数据驱动增长引擎"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_03.png",
            "label": "核心指标与判断",
            "caption": "你想要一个低价商品，需要邀请朋友来帮你砍价。 这个机制天然利用了社交关系来获取新用户。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_04.png",
            "label": "从看见到解释",
            "caption": "拼多多的很多用户不是带着明确的购买目的来的。 他们是来\"逛\"的，看看有什么便宜的好东西。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "拼多多的\"多多买菜\"和\"多多果园\"直接连接了农产品的产地和消费者。 AI 做需求预测，提前告诉产地\"下周某个地区大概需要多少吨某种水果\"。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "从九块九的日用品慢慢引导到几十块的品牌商品。 第三，流失预警和召回。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_07.png",
            "label": "本节行动提示",
            "caption": "第四个原则：游戏化加数据是强大的组合。 拼多多的游戏化机制不是随便设计的。"
        },
        {
            "file": "data-ep94-case-pinduoduo/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.9,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.9,
            "end": 3.76,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.76,
            "end": 5.26,
            "text": "今天讲拼多多。"
        },
        {
            "start": 5.26,
            "end": 10.06,
            "text": "拼多多是中国电商行业最令人惊叹的增长案例之一。"
        },
        {
            "start": 10.06,
            "end": 13.14,
            "text": "从成立到上市只用了不到三年。"
        },
        {
            "start": 13.14,
            "end": 16.44,
            "text": "它的核心竞争力不是品牌、不是物流，"
        },
        {
            "start": 16.56,
            "end": 19.4,
            "text": "而是数据和算法驱动的增长引擎。"
        },
        {
            "start": 19.4,
            "end": 21.94,
            "text": "先看拼多多做对了什么。"
        },
        {
            "start": 21.94,
            "end": 24.16,
            "text": "拼多多切入市场的时候，"
        },
        {
            "start": 24.46,
            "end": 27.88,
            "text": "淘宝和京东已经占据了中国电商的绝大部分份额。"
        },
        {
            "start": 27.88,
            "end": 29.8,
            "text": "看起来没有机会了。"
        },
        {
            "start": 29.8,
            "end": 33.04,
            "text": "但拼多多找到了一个被忽视的巨大市场："
        },
        {
            "start": 33.04,
            "end": 36.38,
            "text": "三到六线城市和农村的消费者。"
        },
        {
            "start": 36.38,
            "end": 38.02,
            "text": "这些消费者有几个特点。"
        },
        {
            "start": 38.54,
            "end": 40.2,
            "text": "第一，价格极度敏感。"
        },
        {
            "start": 40.2,
            "end": 42.06,
            "text": "第二，空闲时间多。"
        },
        {
            "start": 42.12,
            "end": 46.32,
            "text": "第三，社交关系紧密，亲朋好友之间经常互相推荐。"
        },
        {
            "start": 46.32,
            "end": 47.26,
            "text": "第四，"
        },
        {
            "start": 47.56,
            "end": 50.72,
            "text": "很多人的互联网使用是从微信开始的，"
        },
        {
            "start": 50.72,
            "end": 52.88,
            "text": "对独立的购物应用不熟悉。"
        },
        {
            "start": 52.88,
            "end": 57.44,
            "text": "拼多多的产品设计和增长策略完全围绕这些特点来构建。"
        },
        {
            "start": 57.44,
            "end": 61.9,
            "text": "而数据和算法是让这一切高效运转的底层引擎。"
        },
        {
            "start": 61.9,
            "end": 65.14,
            "text": "拼多多的数据驱动体现在四个核心层面。"
        },
        {
            "start": 65.14,
            "end": 67.98,
            "text": "第一个层面：社交裂变的数据优化。"
        },
        {
            "start": 67.98,
            "end": 71.83999999999999,
            "text": "拼多多最出名的增长手段就是\"拼团\"和\"砍一刀\"。"
        },
        {
            "start": 71.83999999999999,
            "end": 75.56,
            "text": "你想要一个低价商品，需要邀请朋友来帮你砍价。"
        },
        {
            "start": 75.56,
            "end": 79.3,
            "text": "这个机制天然利用了社交关系来获取新用户。"
        },
        {
            "start": 79.74000000000001,
            "end": 83.08,
            "text": "但社交裂变不是随便设计就能成功的。"
        },
        {
            "start": 83.08,
            "end": 84.84,
            "text": "背后有大量的数据优化。"
        },
        {
            "start": 84.84,
            "end": 87.5,
            "text": "比如，多少人参与砍价才合适？"
        },
        {
            "start": 87.5,
            "end": 92.06,
            "text": "如果只需要三个人就能砍到最低价，裂变效果不够。"
        },
        {
            "start": 92.06,
            "end": 96.04,
            "text": "如果需要五十个人，用户觉得太难了就放弃了。"
        },
        {
            "start": 96.04,
            "end": 97.84,
            "text": "AI 根据不同商品的价值、"
        },
        {
            "start": 97.84,
            "end": 99.78,
            "text": "不同用户的社交网络大小、"
        },
        {
            "start": 99.78,
            "end": 101.64000000000001,
            "text": "不同地区的参与意愿，"
        },
        {
            "start": 101.64000000000001,
            "end": 103.86,
            "text": "动态调整砍价的难度。"
        },
        {
            "start": 103.86,
            "end": 107.5,
            "text": "再比如，什么时间推送砍价邀请最有效？"
        },
        {
            "start": 107.5,
            "end": 110.2,
            "text": "AI 分析每个用户的活跃时间模式，"
        },
        {
            "start": 110.2,
            "end": 112.34,
            "text": "在最可能响应的时间推送。"
        },
        {
            "start": 112.34,
            "end": 115.78,
            "text": "每一个社交裂变的环节都被数据精细化管理。"
        },
        {
            "start": 116.22,
            "end": 117.92,
            "text": "第二个层面：推荐算法。"
        },
        {
            "start": 117.92,
            "end": 122.22,
            "text": "跟淘宝和京东不同，拼多多的用户界面极其简洁。"
        },
        {
            "start": 122.22,
            "end": 125.86,
            "text": "没有复杂的搜索筛选，首页就是一个信息流。"
        },
        {
            "start": 125.86,
            "end": 127.02,
            "text": "这意味着什么？"
        },
        {
            "start": 127.02,
            "end": 131.36,
            "text": "意味着推荐算法承担了几乎全部的\"商品发现\"功能。"
        },
        {
            "start": 131.36,
            "end": 135.84,
            "text": "用户打开拼多多，看到的商品几乎完全由 AI 决定。"
        },
        {
            "start": 135.84,
            "end": 138.42,
            "text": "拼多多的推荐算法有几个特点。"
        },
        {
            "start": 138.42,
            "end": 140.68,
            "text": "第一，强调\"逛\"的体验。"
        },
        {
            "start": 141.12,
            "end": 145.0,
            "text": "拼多多的很多用户不是带着明确的购买目的来的。"
        },
        {
            "start": 145.0,
            "end": 147.88,
            "text": "他们是来\"逛\"的，看看有什么便宜的好东西。"
        },
        {
            "start": 148.42,
            "end": 151.62,
            "text": "所以推荐算法的目标不只是\"推荐用户最"
        },
        {
            "start": 151.62,
            "end": 152.76,
            "text": "可能购买的商品\"，"
        },
        {
            "start": 152.76,
            "end": 157.92,
            "text": "还包括\"推荐用户可能感兴趣但没想过要买的商品\"。"
        },
        {
            "start": 157.92,
            "end": 159.78,
            "text": "第二，价格权重极高。"
        },
        {
            "start": 159.78,
            "end": 164.14,
            "text": "对于拼多多的用户群体来说，价格是最核心的决策因素。"
        },
        {
            "start": 164.14,
            "end": 166.64,
            "text": "所以推荐算法在排序的时候，"
        },
        {
            "start": 166.64,
            "end": 169.82,
            "text": "价格因素的权重比其他平台高得多。"
        },
        {
            "start": 170.22,
            "end": 172.54,
            "text": "性价比高的商品优先展示。"
        },
        {
            "start": 172.94,
            "end": 174.68,
            "text": "第三，社交信号。"
        },
        {
            "start": 174.68,
            "end": 177.78,
            "text": "拼多多的推荐不只考虑你个人的行为数据，"
        },
        {
            "start": 177.78,
            "end": 180.56,
            "text": "还考虑你的社交圈里谁买了什么。"
        },
        {
            "start": 180.56,
            "end": 182.7,
            "text": "\"你的三个朋友最近买了这个商品\"，"
        },
        {
            "start": 182.7,
            "end": 185.02,
            "text": "这个社交信号会影响推荐排序。"
        },
        {
            "start": 185.6,
            "end": 188.58,
            "text": "第三个层面：供应链和定价的数据优化。"
        },
        {
            "start": 188.58,
            "end": 191.04,
            "text": "拼多多的低价不只是靠补贴。"
        },
        {
            "start": 191.04,
            "end": 194.1,
            "text": "它用数据来优化整个供应链的效率。"
        },
        {
            "start": 194.1,
            "end": 196.08,
            "text": "最典型的是\"拼\"的模式。"
        },
        {
            "start": 196.08,
            "end": 198.92,
            "text": "同一个商品，如果一百个人同时下单，"
        },
        {
            "start": 198.92,
            "end": 201.6,
            "text": "厂家可以按批量生产来降低成本。"
        },
        {
            "start": 201.6,
            "end": 205.3,
            "text": "拼多多用 AI 预测每个商品的拼团需求量，"
        },
        {
            "start": 205.3,
            "end": 207.66,
            "text": "帮助厂家提前做好生产计划。"
        },
        {
            "start": 207.66,
            "end": 209.74,
            "text": "在农产品领域做得更彻底。"
        },
        {
            "start": 209.74,
            "end": 212.8,
            "text": "拼多多的\"多多买菜\"和\"多多果园\"直"
        },
        {
            "start": 212.8,
            "end": 215.46,
            "text": "接连接了农产品的产地和消费者。"
        },
        {
            "start": 215.46,
            "end": 217.16,
            "text": "AI 做需求预测，"
        },
        {
            "start": 217.16,
            "end": 221.66,
            "text": "提前告诉产地\"下周某个地区大概需要多少吨某种水果\"。"
        },
        {
            "start": 221.66,
            "end": 226.36,
            "text": "产地按需采摘和发货，减少了中间环节和损耗。"
        },
        {
            "start": 226.36,
            "end": 230.82,
            "text": "定价方面，AI 在商家定价和平台补贴之间做动态平衡。"
        },
        {
            "start": 230.82,
            "end": 234.02,
            "text": "什么商品适合做\"百亿补贴\"的引流商品？"
        },
        {
            "start": 234.02,
            "end": 237.06,
            "text": "补贴多少能带来最大的新客获取效果？"
        },
        {
            "start": 237.06,
            "end": 239.36,
            "text": "这些都是数据驱动的决策。"
        },
        {
            "start": 239.9,
            "end": 242.36,
            "text": "第四个层面：用户生命周期管理。"
        },
        {
            "start": 242.36,
            "end": 244.4,
            "text": "拼多多面临一个挑战："
        },
        {
            "start": 244.4,
            "end": 248.0,
            "text": "很多用户来的时候是被\"低价\"和\"砍一刀\"吸引的。"
        },
        {
            "start": 248.0,
            "end": 252.18,
            "text": "如果只靠这些留住用户，成本太高也不可持续。"
        },
        {
            "start": 252.18,
            "end": 255.96,
            "text": "AI 在用户生命周期管理中做了几件关键的事。"
        },
        {
            "start": 255.96,
            "end": 257.62,
            "text": "第一，新用户培养。"
        },
        {
            "start": 257.62,
            "end": 258.8,
            "text": "新用户进来之后，"
        },
        {
            "start": 258.8,
            "end": 263.32,
            "text": "AI 通过一系列的任务和奖励引导他们形成使用习惯。"
        },
        {
            "start": 263.32,
            "end": 267.18,
            "text": "签到领现金、浇水种果树免费领水果。"
        },
        {
            "start": 267.18,
            "end": 270.82,
            "text": "这些游戏化的机制让用户每天都打开应用。"
        },
        {
            "start": 270.82,
            "end": 272.74,
            "text": "第二，消费升级引导。"
        },
        {
            "start": 272.74,
            "end": 275.5,
            "text": "随着用户对平台的信任增加，"
        },
        {
            "start": 275.5,
            "end": 278.94,
            "text": "AI 逐渐推荐更高品质和更高价位的商品。"
        },
        {
            "start": 278.94,
            "end": 283.4,
            "text": "从九块九的日用品慢慢引导到几十块的品牌商品。"
        },
        {
            "start": 283.4,
            "end": 286.04,
            "text": "第三，流失预警和召回。"
        },
        {
            "start": 286.04,
            "end": 288.6,
            "text": "AI 监控用户的活跃度变化。"
        },
        {
            "start": 288.6,
            "end": 291.42,
            "text": "如果某个用户的打开频率下降了，"
        },
        {
            "start": 291.42,
            "end": 295.16,
            "text": "AI 会推送个性化的优惠券或者限时特价来召回。"
        },
        {
            "start": 295.16,
            "end": 299.72,
            "text": "从拼多多的案例中总结几个数据驱动增长的通用原则。"
        },
        {
            "start": 299.72,
            "end": 302.8,
            "text": "第一个原则：找到你的数据杠杆点。"
        },
        {
            "start": 302.8,
            "end": 305.62,
            "text": "拼多多的数据杠杆点是社交关系。"
        },
        {
            "start": 305.62,
            "end": 309.72,
            "text": "它的算法最核心的优势不是比淘宝更懂\"商品\"，"
        },
        {
            "start": 309.72,
            "end": 312.52,
            "text": "而是更懂\"社交关系中的消费行为\"。"
        },
        {
            "start": 312.52,
            "end": 316.0,
            "text": "每个企业都有自己独特的数据杠杆点。"
        },
        {
            "start": 316.0,
            "end": 318.88,
            "text": "找到它，围绕它建立你的数据能力。"
        },
        {
            "start": 318.88,
            "end": 322.54,
            "text": "第二个原则：数据要服务于核心用户需求。"
        },
        {
            "start": 322.54,
            "end": 325.18,
            "text": "拼多多的用户最在乎的是价格。"
        },
        {
            "start": 325.18,
            "end": 328.6,
            "text": "所以它所有的数据和算法优化都指向一个目标："
        },
        {
            "start": 328.6,
            "end": 331.88,
            "text": "让用户以最低的价格买到想要的东西。"
        },
        {
            "start": 332.41999999999996,
            "end": 336.28,
            "text": "数据不是为了炫技，而是为了更好地满足用户需求。"
        },
        {
            "start": 336.28,
            "end": 340.16,
            "text": "第三个原则：增长飞轮需要数据来加速。"
        },
        {
            "start": 340.16,
            "end": 341.72,
            "text": "拼多多的飞轮是："
        },
        {
            "start": 341.72,
            "end": 343.82,
            "text": "更多用户带来更多拼团量，"
        },
        {
            "start": 343.82,
            "end": 345.96,
            "text": "更多拼团量带来更低的价格，"
        },
        {
            "start": 345.96,
            "end": 348.1,
            "text": "更低的价格吸引更多用户。"
        },
        {
            "start": 348.1,
            "end": 351.8,
            "text": "AI 在每一个环节都在加速这个飞轮的转动。"
        },
        {
            "start": 352.24,
            "end": 356.44,
            "text": "第四个原则：游戏化加数据是强大的组合。"
        },
        {
            "start": 356.44,
            "end": 359.86,
            "text": "拼多多的游戏化机制不是随便设计的。"
        },
        {
            "start": 359.86,
            "end": 362.28,
            "text": "每个任务的难度、奖励的大小、"
        },
        {
            "start": 362.28,
            "end": 363.44,
            "text": "推送的时机，"
        },
        {
            "start": 363.44,
            "end": 366.16,
            "text": "都是 AI 根据数据优化的结果。"
        },
        {
            "start": 366.16,
            "end": 370.3,
            "text": "游戏化提供了用户动机，数据确保了效率。"
        },
        {
            "start": 370.3,
            "end": 372.28,
            "text": "好，总结一下。"
        },
        {
            "start": 372.28,
            "end": 374.68,
            "text": "拼多多数据驱动增长的四个层面："
        },
        {
            "start": 374.68,
            "end": 376.18,
            "text": "社交裂变的数据优化、"
        },
        {
            "start": 376.18,
            "end": 378.32,
            "text": "推荐算法驱动商品发现、"
        },
        {
            "start": 378.32,
            "end": 380.68,
            "text": "供应链和定价的数据优化、"
        },
        {
            "start": 380.68,
            "end": 382.62,
            "text": "用户生命周期管理。"
        },
        {
            "start": 382.62,
            "end": 385.68,
            "text": "四个通用原则：找到你的数据杠杆点、"
        },
        {
            "start": 385.68,
            "end": 387.74,
            "text": "数据服务核心用户需求、"
        },
        {
            "start": 387.74,
            "end": 389.48,
            "text": "数据加速增长飞轮、"
        },
        {
            "start": 389.48,
            "end": 391.9,
            "text": "游戏化加数据是强大组合。"
        },
        {
            "start": 391.9,
            "end": 396.04,
            "text": "下一期我们进入实操：AI 数据分析工具的使用指南。"
        },
        {
            "start": 396.04,
            "end": 398.06,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 398.06,
            "end": 400.96,
            "text": "1. 拼多多四大数据引擎："
        },
        {
            "start": 400.96,
            "end": 404.2,
            "text": "社交裂变优化、推荐算法、供应链定价、"
        },
        {
            "start": 404.2,
            "end": 405.36,
            "text": "用户生命周期"
        },
        {
            "start": 405.36,
            "end": 410.32,
            "text": "2. 核心差异化：比竞品更懂\"社交关系中的消费行为\""
        },
        {
            "start": 410.32,
            "end": 415.58,
            "text": "3. 所有数据优化指向一个目标：让用户买到最低价"
        },
        {
            "start": 415.58,
            "end": 418.54,
            "text": "4. 通用原则：找数据杠杆点、"
        },
        {
            "start": 418.54,
            "end": 422.82,
            "text": "服务核心需求、加速飞轮、游戏化+数据"
        },
        {
            "start": 422.82,
            "end": 426.54,
            "text": "1. 你的企业独特的\"数据杠杆点\"是什么？"
        },
        {
            "start": 426.54,
            "end": 431.22,
            "text": "2. 你的增长飞轮中，哪个环节最需要数据来加速？"
        },
        {
            "start": 431.22,
            "end": 435.02,
            "text": "3. 拼多多的\"社交裂变加数据优化\"思路，"
        },
        {
            "start": 435.02,
            "end": 437.7,
            "text": "能不能应用到你的获客策略中？"
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
], navigation: { nextLessonUrl: "./lesson-data-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-10.html?entry={entry}", secondaryHref: "./lesson-data-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-09", coachSource: "./ai-coach.html?source=lesson-data-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：拼多多的数据驱动增长引擎的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：拼多多的数据驱动增长引擎", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
