(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第3课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第3课：数据可视化与 Dashboard：让数据讲故事",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep88-data-visualization/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：数据可视化与 Dashboard：让数据讲故事", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-04.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "用户分群：AI 发现你看不到的用户群体",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 3/11", "建议下一节：用户分群：AI 发现你看不到的用户群体", '也可以先整理这一节'], nextHref: "./lesson-data-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-03", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson3", audioSource: './assets/audio/data-ep88-data-visualization.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep88-data-visualization.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep88-data-visualization/slide_01.png",
            "label": "数据可视化与 Dashboard：让数据讲故事",
            "caption": "这一节会帮助你系统理解：数据可视化与 Dashboard：让数据讲故事"
        },
        {
            "file": "data-ep88-data-visualization/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep88-data-visualization/slide_03.png",
            "label": "核心指标与判断",
            "caption": "比如客户年龄分布、订单金额分布。 适合用直方图。"
        },
        {
            "file": "data-ep88-data-visualization/slide_04.png",
            "label": "从看见到解释",
            "caption": "再下面是细分的明细数据。 就像新闻一样：标题告诉你最重要的信息，正文展开细节，附录提供补充数据。"
        },
        {
            "file": "data-ep88-data-visualization/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "你看到图表，自己去发现规律。 AI 看板是智能的。"
        },
        {
            "file": "data-ep88-data-visualization/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "\" 洞察：\"进一步分析发现，流失主要集中在使用了三到六个月的中期客户。 这些客户在流失前的共同行为是：登录频率从每周三次降到了每周不到一次，并且都没有使用我们上个月新上线的高级功能"
        },
        {
            "file": "data-ep88-data-visualization/slide_07.png",
            "label": "本节行动提示",
            "caption": "一般不超过五种颜色。 用颜色来区分最重要的信息，而不是用颜色来装饰。"
        },
        {
            "file": "data-ep88-data-visualization/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.42,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.42,
            "end": 3.88,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.88,
            "end": 5.82,
            "text": "今天聊数据可视化。"
        },
        {
            "start": 5.82,
            "end": 8.94,
            "text": "一张好的数据图表胜过一千行数据。"
        },
        {
            "start": 8.94,
            "end": 12.42,
            "text": "因为人的大脑天生擅长处理视觉信息。"
        },
        {
            "start": 12.42,
            "end": 15.72,
            "text": "你看一个数据表格可能要三分钟才能理解，"
        },
        {
            "start": 15.72,
            "end": 19.08,
            "text": "但看一张图表三秒钟就能抓住重点。"
        },
        {
            "start": 19.08,
            "end": 22.58,
            "text": "数据可视化不只是\"把数据画成图\"。"
        },
        {
            "start": 22.58,
            "end": 25.7,
            "text": "它是\"用视觉的方式讲一个数据故事\"。"
        },
        {
            "start": 25.7,
            "end": 29.06,
            "text": "今天我们来学怎么做一个好的数据看板，"
        },
        {
            "start": 29.06,
            "end": 32.44,
            "text": "以及 AI 如何让数据可视化变得更容易。"
        },
        {
            "start": 32.86,
            "end": 35.38,
            "text": "先讲图表选择的基本原则。"
        },
        {
            "start": 35.38,
            "end": 38.5,
            "text": "不同的数据关系适合不同的图表。"
        },
        {
            "start": 38.5,
            "end": 39.94,
            "text": "第一种情况：比较。"
        },
        {
            "start": 39.94,
            "end": 42.5,
            "text": "你想比较不同类别的数据大小。"
        },
        {
            "start": 42.5,
            "end": 45.44,
            "text": "比如各产品线的营收、各地区的客户数。"
        },
        {
            "start": 45.44,
            "end": 47.2,
            "text": "适合用柱状图。"
        },
        {
            "start": 47.2,
            "end": 49.3,
            "text": "类别少的时候用柱状图最清楚。"
        },
        {
            "start": 49.3,
            "end": 50.94,
            "text": "第二种情况：趋势。"
        },
        {
            "start": 50.94,
            "end": 53.56,
            "text": "你想看一个指标随时间的变化趋势。"
        },
        {
            "start": 53.56,
            "end": 56.24,
            "text": "比如月度营收、日活跃用户数。"
        },
        {
            "start": 56.24,
            "end": 57.74,
            "text": "适合用折线图。"
        },
        {
            "start": 57.74,
            "end": 60.94,
            "text": "折线图最能清晰展示趋势的方向和变化。"
        },
        {
            "start": 61.34,
            "end": 62.76,
            "text": "第三种情况：占比。"
        },
        {
            "start": 62.76,
            "end": 65.38,
            "text": "你想看各部分占整体的比例。"
        },
        {
            "start": 65.38,
            "end": 68.74,
            "text": "比如各渠道的流量占比、各产品的营收占比。"
        },
        {
            "start": 68.74,
            "end": 70.96,
            "text": "适合用饼图或环形图。"
        },
        {
            "start": 70.96,
            "end": 75.22,
            "text": "但注意，如果类别超过五六个，饼图就会变得很难读。"
        },
        {
            "start": 75.22,
            "end": 76.68,
            "text": "第四种情况：分布。"
        },
        {
            "start": 76.68,
            "end": 78.56,
            "text": "你想看数据的分布情况。"
        },
        {
            "start": 78.56,
            "end": 81.34,
            "text": "比如客户年龄分布、订单金额分布。"
        },
        {
            "start": 81.34,
            "end": 82.74,
            "text": "适合用直方图。"
        },
        {
            "start": 82.74,
            "end": 84.74,
            "text": "第五种情况：关系。"
        },
        {
            "start": 84.74,
            "end": 87.34,
            "text": "你想看两个变量之间有没有关系。"
        },
        {
            "start": 87.34,
            "end": 89.98,
            "text": "比如广告投入和销售额之间的关系。"
        },
        {
            "start": 89.98,
            "end": 91.58,
            "text": "适合用散点图。"
        },
        {
            "start": 91.58,
            "end": 95.14,
            "text": "一个常见的错误是\"为了好看而选错图表\"。"
        },
        {
            "start": 95.14,
            "end": 100.14,
            "text": "有些人喜欢用各种花哨的图表，什么3D饼图、雷达图。"
        },
        {
            "start": 100.14,
            "end": 102.86,
            "text": "但越花哨的图表往往越难读。"
        },
        {
            "start": 102.86,
            "end": 107.4,
            "text": "最好的图表是最简单、最直接让人看懂的图表。"
        },
        {
            "start": 107.4,
            "end": 110.68,
            "text": "好，讲完图表选择，来聊数据看板的设计。"
        },
        {
            "start": 110.68,
            "end": 115.16,
            "text": "数据看板就是把多个关键指标和图表组合在一起，"
        },
        {
            "start": 115.16,
            "end": 116.94,
            "text": "形成一个\"经营仪表盘\"。"
        },
        {
            "start": 116.94,
            "end": 120.24,
            "text": "打开看板，一眼就能知道业务的整体状态。"
        },
        {
            "start": 120.24,
            "end": 123.18,
            "text": "一个好的数据看板有几个设计原则。"
        },
        {
            "start": 123.18,
            "end": 124.88,
            "text": "第一个原则：聚焦。"
        },
        {
            "start": 124.88,
            "end": 127.58,
            "text": "一个看板不要放太多信息。"
        },
        {
            "start": 127.58,
            "end": 131.2,
            "text": "一般一个屏幕放五到八个核心指标就够了。"
        },
        {
            "start": 131.2,
            "end": 134.46,
            "text": "如果放二十个指标，等于什么都没看。"
        },
        {
            "start": 134.46,
            "end": 136.6,
            "text": "不同层级的人看不同的看板。"
        },
        {
            "start": 136.6,
            "end": 140.66,
            "text": "CEO 看全局看板：营收、用户、利润、增长率。"
        },
        {
            "start": 140.66,
            "end": 145.2,
            "text": "营销总监看营销看板：各渠道的流量、转化率、获客成本。"
        },
        {
            "start": 145.2,
            "end": 149.96,
            "text": "产品负责人看产品看板：活跃度、留存率、功能使用率。"
        },
        {
            "start": 149.96,
            "end": 151.74,
            "text": "第二个原则：层次。"
        },
        {
            "start": 151.74,
            "end": 153.78,
            "text": "看板应该有层次感。"
        },
        {
            "start": 153.78,
            "end": 156.88,
            "text": "最上面是最核心的几个数字，大字体。"
        },
        {
            "start": 156.88,
            "end": 158.46,
            "text": "下面是趋势图表。"
        },
        {
            "start": 158.46,
            "end": 160.82,
            "text": "再下面是细分的明细数据。"
        },
        {
            "start": 160.82,
            "end": 162.3,
            "text": "就像新闻一样："
        },
        {
            "start": 162.3,
            "end": 164.5,
            "text": "标题告诉你最重要的信息，"
        },
        {
            "start": 164.5,
            "end": 167.72,
            "text": "正文展开细节，附录提供补充数据。"
        },
        {
            "start": 167.72,
            "end": 169.94,
            "text": "第三个原则：可行动。"
        },
        {
            "start": 169.94,
            "end": 173.96,
            "text": "看板上的每一个数据都应该指向一个可以行动的方向。"
        },
        {
            "start": 173.96,
            "end": 176.78,
            "text": "如果一个指标放在看板上但你不知道\""
        },
        {
            "start": 176.82,
            "end": 179.1,
            "text": "如果这个数字变差了我该做什么\"，"
        },
        {
            "start": 179.1,
            "end": 181.18,
            "text": "那这个指标不应该在看板上。"
        },
        {
            "start": 181.72,
            "end": 183.74,
            "text": "第四个原则：对比。"
        },
        {
            "start": 183.74,
            "end": 185.96,
            "text": "单独一个数字没有意义。"
        },
        {
            "start": 185.96,
            "end": 187.14,
            "text": "一定要有对比。"
        },
        {
            "start": 187.28,
            "end": 189.2,
            "text": "跟上期对比（环比）、"
        },
        {
            "start": 189.3,
            "end": 193.04,
            "text": "跟去年同期对比（同比）、跟目标对比。"
        },
        {
            "start": 193.04,
            "end": 195.84,
            "text": "有了对比你才知道这个数字是好是坏。"
        },
        {
            "start": 195.84,
            "end": 199.54,
            "text": "AI 在数据可视化中的应用非常直接。"
        },
        {
            "start": 199.54,
            "end": 201.6,
            "text": "第一，自然语言生成看板。"
        },
        {
            "start": 201.6,
            "end": 203.06,
            "text": "传统的做法是："
        },
        {
            "start": 203.06,
            "end": 205.9,
            "text": "你告诉数据分析师你想看什么指标，"
        },
        {
            "start": 205.9,
            "end": 208.22,
            "text": "分析师去写代码做看板。"
        },
        {
            "start": 208.22,
            "end": 212.5,
            "text": "AI 的做法是：你直接用自然语言描述你想看什么。"
        },
        {
            "start": 212.5,
            "end": 214.76,
            "text": "\"帮我做一个营销看板，"
        },
        {
            "start": 214.76,
            "end": 217.1,
            "text": "包含各渠道的月度流量趋势、"
        },
        {
            "start": 217.1,
            "end": 219.68,
            "text": "转化率对比、获客成本排名。"
        },
        {
            "start": 219.68,
            "end": 221.17999999999998,
            "text": "\"AI 自动生成。"
        },
        {
            "start": 221.17999999999998,
            "end": 223.66,
            "text": "第二，AI 自动推荐图表类型。"
        },
        {
            "start": 224.18,
            "end": 227.1,
            "text": "你不确定用什么图表来展示你的数据？"
        },
        {
            "start": 227.1,
            "end": 228.66,
            "text": "把数据丢给 AI，"
        },
        {
            "start": 228.66,
            "end": 232.96,
            "text": "AI 会根据数据的类型和关系自动推荐最合适的图表。"
        },
        {
            "start": 233.46,
            "end": 235.62,
            "text": "第三，AI 自动发现洞察。"
        },
        {
            "start": 235.62,
            "end": 237.84,
            "text": "传统的看板是静态的。"
        },
        {
            "start": 237.84,
            "end": 240.14,
            "text": "你看到图表，自己去发现规律。"
        },
        {
            "start": 240.14,
            "end": 241.98,
            "text": "AI 看板是智能的。"
        },
        {
            "start": 241.98,
            "end": 246.0,
            "text": "AI 会自动分析数据，把值得注意的洞察高亮出来。"
        },
        {
            "start": 246.0,
            "end": 246.44,
            "text": "\"注意："
        },
        {
            "start": 246.44,
            "end": 249.28,
            "text": "上周三的网站流量出现了异常峰值，"
        },
        {
            "start": 249.28,
            "end": 251.28,
            "text": "比正常水平高了三倍。"
        },
        {
            "start": 251.28,
            "end": 253.8,
            "text": "来源主要是某个社交平台。"
        },
        {
            "start": 253.8,
            "end": 254.22,
            "text": "\""
        },
        {
            "start": 254.22,
            "end": 257.08,
            "text": "第四，AI 自动生成数据解说。"
        },
        {
            "start": 257.08,
            "end": 260.64,
            "text": "看板上有很多图表，不是每个人都能快速读懂。"
        },
        {
            "start": 260.64,
            "end": 265.04,
            "text": "AI 可以为每一张图表生成一段自然语言的解说。"
        },
        {
            "start": 265.04,
            "end": 268.48,
            "text": "\"本月营收环比增长百分之八，"
        },
        {
            "start": 268.48,
            "end": 270.78,
            "text": "主要由华南地区的增长驱动。"
        },
        {
            "start": 271.22,
            "end": 276.08,
            "text": "华南地区营收增长了百分之十五，而其他地区基本持平。"
        },
        {
            "start": 276.08,
            "end": 276.5,
            "text": "\""
        },
        {
            "start": 276.5,
            "end": 280.64,
            "text": "这对于那些不太擅长读图表的管理者来说非常有用。"
        },
        {
            "start": 280.64,
            "end": 283.34,
            "text": "讲一个重要的话题：数据讲故事。"
        },
        {
            "start": 283.91999999999996,
            "end": 287.02,
            "text": "数据可视化的最高境界不是\"展示数据\"，"
        },
        {
            "start": 287.02,
            "end": 289.84,
            "text": "而是\"用数据讲一个有说服力的故事\"。"
        },
        {
            "start": 289.84,
            "end": 291.34,
            "text": "什么叫数据故事？"
        },
        {
            "start": 291.34,
            "end": 292.56,
            "text": "它有三个要素。"
        },
        {
            "start": 292.56,
            "end": 294.08,
            "text": "第一个要素：背景。"
        },
        {
            "start": 294.08,
            "end": 295.02,
            "text": "发生了什么？"
        },
        {
            "start": 295.02,
            "end": 296.8,
            "text": "我们面对什么情况？"
        },
        {
            "start": 296.8,
            "end": 298.48,
            "text": "第二个要素：洞察。"
        },
        {
            "start": 298.48,
            "end": 299.96,
            "text": "数据告诉我们什么？"
        },
        {
            "start": 299.96,
            "end": 301.54,
            "text": "有什么重要的发现？"
        },
        {
            "start": 301.54,
            "end": 303.3,
            "text": "第三个要素：行动。"
        },
        {
            "start": 303.3,
            "end": 306.04,
            "text": "基于这些发现，我们应该做什么？"
        },
        {
            "start": 306.04,
            "end": 307.08,
            "text": "举个例子。"
        },
        {
            "start": 307.08,
            "end": 307.62,
            "text": "背景："
        },
        {
            "start": 307.62,
            "end": 310.745,
            "text": "\"上个月我们的客户流失率突然从百分之"
        },
        {
            "start": 310.745,
            "end": 312.87999999999994,
            "text": "五上升到了百分之八。"
        },
        {
            "start": 312.87999999999994,
            "end": 313.29999999999995,
            "text": "\""
        },
        {
            "start": 313.29999999999995,
            "end": 314.94,
            "text": "洞察：\"进一步分析发现，"
        },
        {
            "start": 314.94,
            "end": 318.3,
            "text": "流失主要集中在使用了三到六个月的中期客户。"
        },
        {
            "start": 318.3,
            "end": 321.1,
            "text": "这些客户在流失前的共同行为是："
        },
        {
            "start": 321.1,
            "end": 324.62,
            "text": "登录频率从每周三次降到了每周不到一次，"
        },
        {
            "start": 324.62,
            "end": 328.42,
            "text": "并且都没有使用我们上个月新上线的高级功能。"
        },
        {
            "start": 328.42,
            "end": 328.84000000000003,
            "text": "\""
        },
        {
            "start": 328.84000000000003,
            "end": 330.82,
            "text": "行动：\"建议做两件事。"
        },
        {
            "start": 330.82,
            "end": 331.08,
            "text": "第一，"
        },
        {
            "start": 331.08,
            "end": 334.52,
            "text": "针对三到六个月的客户做一次专项的回访和引导，"
        },
        {
            "start": 334.52,
            "end": 337.24,
            "text": "帮他们发现高级功能的价值。"
        },
        {
            "start": 337.24,
            "end": 340.7,
            "text": "第二，在产品中增加一个自动引导机制，"
        },
        {
            "start": 340.7,
            "end": 344.94,
            "text": "当检测到客户活跃度下降时主动推送使用建议。"
        },
        {
            "start": 344.94,
            "end": 345.36,
            "text": "\""
        },
        {
            "start": 345.36,
            "end": 347.24,
            "text": "这就是一个完整的数据故事。"
        },
        {
            "start": 347.24,
            "end": 350.48,
            "text": "它不是给你一堆图表让你自己理解，"
        },
        {
            "start": 350.48,
            "end": 353.96,
            "text": "而是把数据整理成一个有因果关系、"
        },
        {
            "start": 353.96,
            "end": 356.1,
            "text": "有行动建议的叙事。"
        },
        {
            "start": 356.1,
            "end": 358.3,
            "text": "AI 可以帮你做这件事。"
        },
        {
            "start": 358.3,
            "end": 361.22,
            "text": "你把数据给 AI，让它生成一个数据故事。"
        },
        {
            "start": 361.22,
            "end": 365.0799999999999,
            "text": "AI 会把背景、洞察、行动组织成一个清晰的叙述。"
        },
        {
            "start": 365.08,
            "end": 368.44,
            "text": "最后讲几个数据可视化的常见错误。"
        },
        {
            "start": 368.44,
            "end": 370.8,
            "text": "第一个错误：图表美化过度。"
        },
        {
            "start": 370.8,
            "end": 375.14,
            "text": "为了好看加了很多装饰元素，反而干扰了数据的传达。"
        },
        {
            "start": 375.14,
            "end": 376.52,
            "text": "简洁最好。"
        },
        {
            "start": 376.52,
            "end": 379.38,
            "text": "第二个错误：坐标轴不从零开始。"
        },
        {
            "start": 379.38,
            "end": 382.58,
            "text": "把坐标轴的起点设为一个很大的数字，"
        },
        {
            "start": 382.58,
            "end": 385.78,
            "text": "会让微小的变化看起来很大，造成误导。"
        },
        {
            "start": 386.32,
            "end": 388.12,
            "text": "第三个错误：太多颜色。"
        },
        {
            "start": 388.12,
            "end": 391.34,
            "text": "一张图上用了七八种颜色，眼花缭乱。"
        },
        {
            "start": 391.34,
            "end": 393.54,
            "text": "一般不超过五种颜色。"
        },
        {
            "start": 393.54,
            "end": 398.1,
            "text": "用颜色来区分最重要的信息，而不是用颜色来装饰。"
        },
        {
            "start": 398.64,
            "end": 401.88,
            "text": "第四个错误：没有标注单位和时间范围。"
        },
        {
            "start": 401.88,
            "end": 405.44,
            "text": "\"营收增长了百分之二十\"，是月度还是年度？"
        },
        {
            "start": 405.44,
            "end": 407.3,
            "text": "是总体还是某个产品？"
        },
        {
            "start": 407.3,
            "end": 410.12,
            "text": "没有上下文的数据是没有意义的。"
        },
        {
            "start": 410.12,
            "end": 411.44,
            "text": "好，总结一下。"
        },
        {
            "start": 411.44,
            "end": 414.84,
            "text": "图表选择五种场景：比较用柱状图、"
        },
        {
            "start": 414.84,
            "end": 417.18,
            "text": "趋势用折线图、占比用饼图、"
        },
        {
            "start": 417.18,
            "end": 419.64,
            "text": "分布用直方图、关系用散点图。"
        },
        {
            "start": 419.64,
            "end": 423.7,
            "text": "看板设计四原则：聚焦、层次、可行动、有对比。"
        },
        {
            "start": 423.7,
            "end": 426.68,
            "text": "AI 四大助力：自然语言生成看板、"
        },
        {
            "start": 426.68,
            "end": 428.81999999999994,
            "text": "自动推荐图表、自动发现洞察、"
        },
        {
            "start": 428.82,
            "end": 430.1,
            "text": "自动生成解说。"
        },
        {
            "start": 430.1,
            "end": 433.6,
            "text": "数据故事三要素：背景、洞察、行动。"
        },
        {
            "start": 433.6,
            "end": 438.28,
            "text": "下一期我们聊用户分群：AI 帮你发现看不见的用户群体。"
        },
        {
            "start": 438.28,
            "end": 440.06,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 440.06,
            "end": 443.84,
            "text": "1. 图表五场景：比较→柱状图、"
        },
        {
            "start": 443.84,
            "end": 446.14,
            "text": "趋势→折线图、占比→饼图、"
        },
        {
            "start": 446.14,
            "end": 448.94,
            "text": "分布→直方图、关系→散点图"
        },
        {
            "start": 448.94,
            "end": 452.52,
            "text": "2. 看板四原则：聚焦（5 8 个指标）、"
        },
        {
            "start": 452.52,
            "end": 454.74,
            "text": "层次、可行动、有对比"
        },
        {
            "start": 454.74,
            "end": 457.46,
            "text": "3. AI 让可视化更智能："
        },
        {
            "start": 457.46,
            "end": 460.98,
            "text": "自然语言建看板、自动洞察、数据解说"
        },
        {
            "start": 460.98,
            "end": 464.12,
            "text": "4. 数据故事三要素：背景 → 洞察 → 行动"
        },
        {
            "start": 464.12,
            "end": 468.22,
            "text": "1. 你目前有数据看板吗？"
        },
        {
            "start": 468.22,
            "end": 472.96,
            "text": "它满足\"聚焦、层次、可行动、有对比\"的原则吗？"
        },
        {
            "start": 472.96,
            "end": 474.66999999999996,
            "text": "2. 你在做数据汇报时，"
        },
        {
            "start": 474.66999999999996,
            "end": 475.21999999999997,
            "text": "是\"展示数据\"还是\"讲数据故事\"？"
        },
        {
            "start": 475.21999999999997,
            "end": 477.46,
            "text": "3. 试试用 AI 帮你生成一个业务看板或数据分析报告"
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
], navigation: { nextLessonUrl: "./lesson-data-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-04.html?entry={entry}", secondaryHref: "./lesson-data-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-03", coachSource: "./ai-coach.html?source=lesson-data-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于数据可视化与 Dashboard：让数据讲故事的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "数据可视化与 Dashboard：让数据讲故事", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
