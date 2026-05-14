(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第8课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第8课：案例：Netflix 如何用数据加 AI 决定拍什么剧",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep93-case-netflix/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：Netflix 如何用数据加 AI 决定拍什么剧", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-09.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：拼多多的数据驱动增长引擎",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 8/11", "建议下一节：案例：拼多多的数据驱动增长引擎", '也可以先整理这一节'], nextHref: "./lesson-data-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-08", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson8", audioSource: './assets/audio/data-ep93-case-netflix.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep93-case-netflix.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep93-case-netflix/slide_01.png",
            "label": "案例：Netflix 如何用数据加 AI 决定拍什么剧",
            "caption": "这一节会帮助你系统理解：案例：Netflix 如何用数据加 AI 决定拍什么剧"
        },
        {
            "file": "data-ep93-case-netflix/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep93-case-netflix/slide_03.png",
            "label": "核心指标与判断",
            "caption": "它包括：用户什么时候开始看、看了多久、在哪一分钟暂停了、在哪一集弃剧了、看完之后又看了什么、看之前搜索了什么。 举个例子。"
        },
        {
            "file": "data-ep93-case-netflix/slide_04.png",
            "label": "从看见到解释",
            "caption": "政治题材加大卫·芬奇加凯文·斯派西，数据告诉 Netflix 这个组合很可能受欢迎。 于是 Netflix 直接买下了两季的版权，跳过了传统的\"先拍试播集测试反应\"的流程。"
        },
        {
            "file": "data-ep93-case-netflix/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "这些预测帮助 Netflix 决定给每部作品投入多少营销资源。 预测表现好的作品获得更多的推广资源。"
        },
        {
            "file": "data-ep93-case-netflix/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "这种极细粒度的用户理解，让 Netflix 的推荐精准度远超传统的影视平台。 从 Netflix 的案例中我们可以提炼出几个通用的启发。"
        },
        {
            "file": "data-ep93-case-netflix/slide_07.png",
            "label": "本节行动提示",
            "caption": "Netflix 并不是只拍数据显示\"大多数人会喜欢\"的内容。 它也拍很多小众但特定群体非常喜欢的内容。"
        },
        {
            "file": "data-ep93-case-netflix/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.32,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.54,
            "end": 3.3,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.3,
            "end": 5.2,
            "text": "今天讲一个非常有意思的案例："
        },
        {
            "start": 5.2,
            "end": 9.34,
            "text": "Netflix 如何用数据和 AI 来决定拍什么剧。"
        },
        {
            "start": 9.34,
            "end": 13.98,
            "text": "很多人觉得影视行业是一个高度依赖直觉和创意的行业。"
        },
        {
            "start": 14.48,
            "end": 18.98,
            "text": "但 Netflix 证明了数据可以在这个行业中发挥巨大的作用。"
        },
        {
            "start": 18.98,
            "end": 22.42,
            "text": "先了解一下 Netflix 面临的核心决策问题。"
        },
        {
            "start": 22.42,
            "end": 27.22,
            "text": "Netflix 每年在内容上的投入超过一百七十亿美元。"
        },
        {
            "start": 27.22,
            "end": 31.38,
            "text": "每一部剧、每一部电影都是一个巨大的投资决策。"
        },
        {
            "start": 31.38,
            "end": 34.4,
            "text": "拍一部剧可能要几千万甚至上亿美元。"
        },
        {
            "start": 34.88,
            "end": 38.44,
            "text": "拍对了，吸引大量新用户、留住老用户。"
        },
        {
            "start": 38.44,
            "end": 41.1,
            "text": "拍错了，巨额投入打水漂。"
        },
        {
            "start": 41.1,
            "end": 44.26,
            "text": "传统的影视公司怎么决定拍什么？"
        },
        {
            "start": 44.26,
            "end": 48.38,
            "text": "主要靠制片人的经验、明星的号召力、编剧的名气。"
        },
        {
            "start": 48.38,
            "end": 51.24,
            "text": "这是高度依赖个人判断的决策方式。"
        },
        {
            "start": 51.42,
            "end": 52.36,
            "text": "成功率很低。"
        },
        {
            "start": 52.36,
            "end": 55.82,
            "text": "好莱坞有一句老话：\"没有人知道什么会卖座。"
        },
        {
            "start": 55.82,
            "end": 56.24,
            "text": "\""
        },
        {
            "start": 56.24,
            "end": 57.62,
            "text": "Netflix 的做法不同。"
        },
        {
            "start": 57.62,
            "end": 60.4,
            "text": "它用数据来降低这个不确定性。"
        },
        {
            "start": 60.4,
            "end": 62.8,
            "text": "Netflix 的数据资产有多丰富？"
        },
        {
            "start": 62.8,
            "end": 67.64,
            "text": "全球超过两亿用户，每天产生海量的观看行为数据。"
        },
        {
            "start": 67.64,
            "end": 70.02,
            "text": "这些数据不只是\"谁看了什么\"。"
        },
        {
            "start": 70.02,
            "end": 72.64,
            "text": "它包括：用户什么时候开始看、"
        },
        {
            "start": 72.64,
            "end": 75.68,
            "text": "看了多久、在哪一分钟暂停了、"
        },
        {
            "start": 75.68,
            "end": 78.48,
            "text": "在哪一集弃剧了、看完之后又看了什么、"
        },
        {
            "start": 78.82,
            "end": 80.5,
            "text": "看之前搜索了什么。"
        },
        {
            "start": 80.5,
            "end": 81.78,
            "text": "举个例子。"
        },
        {
            "start": 81.78,
            "end": 85.96,
            "text": "Netflix 知道某个用户看了一部犯罪题材的剧，"
        },
        {
            "start": 85.96,
            "end": 89.02,
            "text": "在第三集的第二十七分钟暂停了，"
        },
        {
            "start": 89.16,
            "end": 90.28,
            "text": "第二天继续看完了，"
        },
        {
            "start": 90.28,
            "end": 93.4,
            "text": "然后马上搜索了同一个导演的其他作品。"
        },
        {
            "start": 93.89999999999999,
            "end": 95.74,
            "text": "这个行为告诉 Netflix："
        },
        {
            "start": 95.74,
            "end": 98.24,
            "text": "这个用户对犯罪题材感兴趣，"
        },
        {
            "start": 98.24,
            "end": 100.12,
            "text": "而且对这个导演有好感。"
        },
        {
            "start": 100.12,
            "end": 103.92,
            "text": "把两亿用户的这些细粒度数据汇总起来，"
        },
        {
            "start": 103.92,
            "end": 107.26,
            "text": "Netflix 对观众的喜好有极其深入的理解。"
        },
        {
            "start": 107.26,
            "end": 110.98,
            "text": "那 Netflix 具体怎么用数据来做内容决策？"
        },
        {
            "start": 110.98,
            "end": 113.44,
            "text": "第一个层面：识别内容机会。"
        },
        {
            "start": 113.44,
            "end": 116.62,
            "text": "Netflix 通过分析用户的观看数据，"
        },
        {
            "start": 116.62,
            "end": 118.24,
            "text": "发现哪些题材、"
        },
        {
            "start": 118.24,
            "end": 121.24,
            "text": "哪些类型的内容有未被满足的需求。"
        },
        {
            "start": 121.24,
            "end": 123.4,
            "text": "最经典的案例就是《纸牌屋》。"
        },
        {
            "start": 123.4,
            "end": 126.86,
            "text": "Netflix 在决定投拍《纸牌屋》之前，"
        },
        {
            "start": 126.86,
            "end": 129.83999999999997,
            "text": "从数据中发现了三个关键信号。"
        },
        {
            "start": 129.84,
            "end": 133.7,
            "text": "第一，大量用户喜欢看政治题材的英剧。"
        },
        {
            "start": 133.7,
            "end": 134.1,
            "text": "第二，"
        },
        {
            "start": 134.2,
            "end": 138.6,
            "text": "这些用户中有很大比例也喜欢看导演大卫·芬奇的电影。"
        },
        {
            "start": 138.6,
            "end": 143.72,
            "text": "第三，凯文·斯派西主演的电影在 Netflix 上的完播率很高。"
        },
        {
            "start": 143.72,
            "end": 146.84,
            "text": "政治题材加大卫·芬奇加凯文·斯派西，"
        },
        {
            "start": 146.84,
            "end": 150.02,
            "text": "数据告诉 Netflix 这个组合很可能受欢迎。"
        },
        {
            "start": 150.02,
            "end": 153.14,
            "text": "于是 Netflix 直接买下了两季的版权，"
        },
        {
            "start": 153.14,
            "end": 156.74,
            "text": "跳过了传统的\"先拍试播集测试反应\"的流程。"
        },
        {
            "start": 157.18,
            "end": 161.68,
            "text": "结果《纸牌屋》大获成功，成为 Netflix 自制内容的标志性作品。"
        },
        {
            "start": 161.68,
            "end": 164.02,
            "text": "第二个层面：优化内容制作。"
        },
        {
            "start": 164.02,
            "end": 168.14,
            "text": "不只是决定拍什么，还在制作过程中用数据来优化。"
        },
        {
            "start": 168.57999999999998,
            "end": 170.22,
            "text": "比如缩略图优化。"
        },
        {
            "start": 170.22,
            "end": 173.58,
            "text": "Netflix 发现，用户决定要不要看一部剧，"
        },
        {
            "start": 173.58,
            "end": 175.86,
            "text": "缩略图的影响比剧名还大。"
        },
        {
            "start": 175.86,
            "end": 180.96,
            "text": "所以 Netflix 用 AI 为每部作品生成多个不同的缩略图版本。"
        },
        {
            "start": 180.96,
            "end": 185.1,
            "text": "然后针对不同的用户群体展示不同的缩略图。"
        },
        {
            "start": 185.56,
            "end": 189.66,
            "text": "喜欢浪漫题材的用户看到的是男女主角的温馨画面。"
        },
        {
            "start": 189.66,
            "end": 193.16,
            "text": "喜欢动作题材的用户看到的是紧张刺激的场景。"
        },
        {
            "start": 193.16,
            "end": 197.08,
            "text": "同一部作品，不同用户看到的\"封面\"是不一样的。"
        },
        {
            "start": 197.08,
            "end": 199.44,
            "text": "第三个层面：预测内容表现。"
        },
        {
            "start": 199.44,
            "end": 201.94,
            "text": "在一部新剧上线之前，"
        },
        {
            "start": 201.94,
            "end": 205.18,
            "text": "Netflix 的 AI 模型会预测它的表现："
        },
        {
            "start": 205.18,
            "end": 208.2,
            "text": "预计会有多少人观看、多少人会看完、"
        },
        {
            "start": 208.2,
            "end": 210.56,
            "text": "对用户留存会有多大的影响。"
        },
        {
            "start": 210.56,
            "end": 216.2,
            "text": "这些预测帮助 Netflix 决定给每部作品投入多少营销资源。"
        },
        {
            "start": 216.2,
            "end": 220.04,
            "text": "预测表现好的作品获得更多的推广资源。"
        },
        {
            "start": 220.04,
            "end": 222.8,
            "text": "第三个层面也是最重要的：个性化推荐。"
        },
        {
            "start": 223.42000000000002,
            "end": 227.3,
            "text": "Netflix 的推荐系统是它的核心竞争力之一。"
        },
        {
            "start": 227.3,
            "end": 230.06,
            "text": "Netflix 公开披露过，"
        },
        {
            "start": 230.06,
            "end": 233.3,
            "text": "用户在 Netflix 上观看的内容中，"
        },
        {
            "start": 233.3,
            "end": 236.48,
            "text": "超过百分之八十是通过推荐系统发现的，"
        },
        {
            "start": 236.48,
            "end": 239.08,
            "text": "而不是用户主动搜索的。"
        },
        {
            "start": 239.08,
            "end": 242.9,
            "text": "推荐系统的精准度直接影响用户体验和留存率。"
        },
        {
            "start": 242.9,
            "end": 246.26,
            "text": "如果你打开 Netflix 看不到感兴趣的内容，"
        },
        {
            "start": 246.26,
            "end": 248.68,
            "text": "你可能就去别的平台了。"
        },
        {
            "start": 248.68,
            "end": 252.1,
            "text": "Netflix 的推荐算法考虑的因素非常多。"
        },
        {
            "start": 252.1,
            "end": 254.22,
            "text": "你的观看历史、你的评分、"
        },
        {
            "start": 254.22,
            "end": 256.54,
            "text": "你跟哪些用户有相似的口味、"
        },
        {
            "start": 256.54,
            "end": 261.42,
            "text": "当前的时间（工作日晚上和周末下午推荐的内容不同）、"
        },
        {
            "start": 261.42,
            "end": 264.56,
            "text": "你使用的设备（手机上推荐短内容、"
        },
        {
            "start": 264.56,
            "end": 266.62,
            "text": "电视上推荐长内容）。"
        },
        {
            "start": 266.62,
            "end": 270.48,
            "text": "Netflix 把用户分成了几千个\"口味群体\"。"
        },
        {
            "start": 270.48,
            "end": 275.84,
            "text": "不是按年龄和性别分的，而是按观看行为和偏好分的。"
        },
        {
            "start": 275.84,
            "end": 280.42,
            "text": "有的群体喜欢\"节奏慢但情感深刻的北欧犯罪剧\"，"
        },
        {
            "start": 280.42,
            "end": 283.2,
            "text": "有的群体喜欢\"轻松搞笑的真人秀\"。"
        },
        {
            "start": 283.2,
            "end": 286.12,
            "text": "这种极细粒度的用户理解，"
        },
        {
            "start": 286.12,
            "end": 290.38,
            "text": "让 Netflix 的推荐精准度远超传统的影视平台。"
        },
        {
            "start": 290.38,
            "end": 294.58,
            "text": "从 Netflix 的案例中我们可以提炼出几个通用的启发。"
        },
        {
            "start": 294.58,
            "end": 295.68,
            "text": "第一个启发："
        },
        {
            "start": 295.68,
            "end": 298.08,
            "text": "数据可以降低创意决策的风险，"
        },
        {
            "start": 298.08,
            "end": 299.92,
            "text": "但不能替代创意。"
        },
        {
            "start": 299.92,
            "end": 304.08,
            "text": "Netflix 不是让 AI 来写剧本或者当导演。"
        },
        {
            "start": 304.82,
            "end": 306.74,
            "text": "创意仍然是人的工作。"
        },
        {
            "start": 306.74,
            "end": 309.46,
            "text": "数据做的是帮人做更好的判断："
        },
        {
            "start": 309.46,
            "end": 311.66,
            "text": "市场需要什么类型的内容、"
        },
        {
            "start": 311.66,
            "end": 314.42,
            "text": "哪些元素的组合更可能成功、"
        },
        {
            "start": 314.42,
            "end": 316.68,
            "text": "怎么把好内容推给对的人。"
        },
        {
            "start": 316.68,
            "end": 321.68,
            "text": "数据降低了\"猜\"的成分，但最终的创意决策还是人做的。"
        },
        {
            "start": 321.68,
            "end": 324.72,
            "text": "第二个启发：数据的价值在于细粒度。"
        },
        {
            "start": 325.26,
            "end": 328.08,
            "text": "Netflix 的数据不是\"有多少人看"
        },
        {
            "start": 328.08,
            "end": 330.58,
            "text": "了这部剧\"这种粗颗粒度的数据。"
        },
        {
            "start": 330.58,
            "end": 335.6,
            "text": "它精细到了每一分钟、每一个暂停、每一次快进。"
        },
        {
            "start": 335.6,
            "end": 340.38,
            "text": "这种细粒度的数据才能提供真正有价值的洞察。"
        },
        {
            "start": 340.38,
            "end": 343.82000000000005,
            "text": "第三个启发：数据要形成闭环。"
        },
        {
            "start": 343.82000000000005,
            "end": 346.56,
            "text": "Netflix 的数据不只是用来做决策。"
        },
        {
            "start": 346.56,
            "end": 349.64,
            "text": "决策之后的结果又变成了新的数据，"
        },
        {
            "start": 349.64,
            "end": 352.62,
            "text": "反馈回系统，让下一次的决策更准确。"
        },
        {
            "start": 352.62,
            "end": 355.38,
            "text": "这是一个不断学习、不断优化的闭环。"
        },
        {
            "start": 355.38,
            "end": 359.76,
            "text": "第四个启发：数据驱动不等于讨好所有人。"
        },
        {
            "start": 359.76,
            "end": 364.4,
            "text": "Netflix 并不是只拍数据显示\"大多数人会喜欢\"的内容。"
        },
        {
            "start": 364.4,
            "end": 368.56,
            "text": "它也拍很多小众但特定群体非常喜欢的内容。"
        },
        {
            "start": 368.56,
            "end": 372.54,
            "text": "因为推荐系统可以精准地把小众内容推给"
        },
        {
            "start": 372.54,
            "end": 374.34,
            "text": "那一小群会喜欢的人。"
        },
        {
            "start": 374.34,
            "end": 379.04,
            "text": "这让 Netflix 的内容库既有大众爆款，也有小众精品。"
        },
        {
            "start": 379.04,
            "end": 380.76,
            "text": "好，总结一下。"
        },
        {
            "start": 380.76,
            "end": 384.74,
            "text": "Netflix 用数据做内容决策的三个层面："
        },
        {
            "start": 384.74,
            "end": 389.02,
            "text": "识别内容机会（用观看数据发现需求）、"
        },
        {
            "start": 389.02,
            "end": 392.32,
            "text": "优化内容制作（个性化缩略图、"
        },
        {
            "start": 392.32,
            "end": 393.3,
            "text": "表现预测）、"
        },
        {
            "start": 393.3,
            "end": 398.1,
            "text": "个性化推荐（超过百分之八十的观看来自推荐）。"
        },
        {
            "start": 398.1,
            "end": 399.96,
            "text": "四个通用启发："
        },
        {
            "start": 399.96,
            "end": 403.5,
            "text": "数据降低创意决策风险但不替代创意、"
        },
        {
            "start": 403.5,
            "end": 407.24,
            "text": "数据价值在于细粒度、数据要形成闭环、"
        },
        {
            "start": 407.24,
            "end": 409.96,
            "text": "数据驱动不等于讨好所有人。"
        },
        {
            "start": 409.96,
            "end": 415.36,
            "text": "下一期我们看另一个案例：拼多多的数据驱动增长引擎。"
        },
        {
            "start": 415.36,
            "end": 417.66,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 417.66,
            "end": 422.2,
            "text": "1. Netflix 数据决策三层面：识别内容机会、"
        },
        {
            "start": 422.2,
            "end": 424.22,
            "text": "优化制作、个性化推荐"
        },
        {
            "start": 424.22,
            "end": 430.72,
            "text": "2. 80%+ 观看来自推荐系统，精准推荐是核心竞争力"
        },
        {
            "start": 430.72,
            "end": 435.26,
            "text": "3. 数据降低创意决策风险，但不替代创意本身"
        },
        {
            "start": 435.26,
            "end": 438.52,
            "text": "4. 数据价值在于细粒度，"
        },
        {
            "start": 438.52,
            "end": 441.46,
            "text": "并形成\"决策→结果→反馈\"闭环"
        },
        {
            "start": 441.46,
            "end": 446.0,
            "text": "1. 你的行业中有哪些\"高度依赖直觉\"的决策？"
        },
        {
            "start": 446.0,
            "end": 448.82,
            "text": "数据能否帮助降低风险？"
        },
        {
            "start": 448.82,
            "end": 452.32,
            "text": "2. 你的用户行为数据有多细粒度？"
        },
        {
            "start": 452.32,
            "end": 455.4,
            "text": "能不能做到 Netflix 那样的精细分析？"
        },
        {
            "start": 455.4,
            "end": 459.88,
            "text": "3. Netflix 的\"数据闭环\"理念，你的业务中能不能应用？"
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
], navigation: { nextLessonUrl: "./lesson-data-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-09.html?entry={entry}", secondaryHref: "./lesson-data-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-08", coachSource: "./ai-coach.html?source=lesson-data-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：Netflix 如何用数据加 AI 决定拍什么剧的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：Netflix 如何用数据加 AI 决定拍什么剧", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
