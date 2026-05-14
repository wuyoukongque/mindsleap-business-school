(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第7课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第7课：AB 测试与实验文化",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep92-ab-testing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AB 测试与实验文化", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-08.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：Netflix 如何用数据加 AI 决定拍什么剧",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 7/11", "建议下一节：案例：Netflix 如何用数据加 AI 决定拍什么剧", '也可以先整理这一节'], nextHref: "./lesson-data-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-07", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson7", audioSource: './assets/audio/data-ep92-ab-testing.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep92-ab-testing.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep92-ab-testing/slide_01.png",
            "label": "AB 测试与实验文化",
            "caption": "这一节会帮助你系统理解：AB 测试与实验文化"
        },
        {
            "file": "data-ep92-ab-testing/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep92-ab-testing/slide_03.png",
            "label": "核心指标与判断",
            "caption": "因为如果你同时改了颜色和文案，你不知道效果的变化是因为颜色还是文案。 测试目标指标是什么？"
        },
        {
            "file": "data-ep92-ab-testing/slide_04.png",
            "label": "从看见到解释",
            "caption": "如果 A 方案的转化率是百分之五点二，B 方案是百分之五点零。 差了零点二个百分点。"
        },
        {
            "file": "data-ep92-ab-testing/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "AI 可以用\"多臂老虎机\"算法动态分配流量。 表现好的方案自动获得更多流量。"
        },
        {
            "file": "data-ep92-ab-testing/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "实验文化的核心理念是：不管你是谁、你有多少经验，你的想法都需要经过实验验证。 数据面前人人平等。"
        },
        {
            "file": "data-ep92-ab-testing/slide_07.png",
            "label": "本节行动提示",
            "caption": "成功的实验大家可以学习和复制。 失败的实验可以帮别人避免犯同样的错误。"
        },
        {
            "file": "data-ep92-ab-testing/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.34,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.34,
            "end": 3.86,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.86,
            "end": 6.68,
            "text": "今天聊 AB 测试和实验文化。"
        },
        {
            "start": 6.68,
            "end": 10.08,
            "text": "AB 测试是数据驱动决策最直接的工具。"
        },
        {
            "start": 10.08,
            "end": 14.64,
            "text": "与其争论\"这个方案好还是那个方案好\"，不如直接测。"
        },
        {
            "start": 14.7,
            "end": 16.5,
            "text": "让数据来说话。"
        },
        {
            "start": 16.5,
            "end": 18.22,
            "text": "AB 测试的原理非常简单。"
        },
        {
            "start": 18.22,
            "end": 20.12,
            "text": "你有两个方案，不确定哪个好。"
        },
        {
            "start": 20.12,
            "end": 22.02,
            "text": "把用户随机分成两组。"
        },
        {
            "start": 22.02,
            "end": 24.56,
            "text": "A 组看方案 A，B 组看方案 B。"
        },
        {
            "start": 24.56,
            "end": 27.5,
            "text": "跑一段时间，看哪组的数据更好。"
        },
        {
            "start": 27.5,
            "end": 30.72,
            "text": "听起来简单，但要做好 AB 测试有很多讲究。"
        },
        {
            "start": 30.72,
            "end": 32.78,
            "text": "今天把这些讲究讲清楚。"
        },
        {
            "start": 32.78,
            "end": 35.12,
            "text": "先讲 AB 测试的完整流程。"
        },
        {
            "start": 35.12,
            "end": 36.7,
            "text": "第一步：提出假设。"
        },
        {
            "start": 36.7,
            "end": 38.82,
            "text": "AB 测试不是随机乱测。"
        },
        {
            "start": 39.339999999999996,
            "end": 41.02,
            "text": "你必须先有一个明确的假设。"
        },
        {
            "start": 41.02,
            "end": 44.42,
            "text": "假设的格式是：\"我相信改变某某东西，"
        },
        {
            "start": 44.42,
            "end": 46.98,
            "text": "会导致某个指标提升某个幅度，"
        },
        {
            "start": 46.98,
            "end": 48.16,
            "text": "因为某个原因。"
        },
        {
            "start": 48.16,
            "end": 48.58,
            "text": "\""
        },
        {
            "start": 48.58,
            "end": 48.92,
            "text": "比如："
        },
        {
            "start": 48.92,
            "end": 52.46,
            "text": "\"我相信把购买按钮从灰色改成橙色，"
        },
        {
            "start": 52.46,
            "end": 54.98,
            "text": "会导致点击率提升百分之十，"
        },
        {
            "start": 54.98,
            "end": 57.62,
            "text": "因为橙色更醒目更容易被注意到。"
        },
        {
            "start": 57.62,
            "end": 58.04,
            "text": "\""
        },
        {
            "start": 58.04,
            "end": 59.08,
            "text": "有假设才有方向。"
        },
        {
            "start": 59.08,
            "end": 61.14,
            "text": "不然你就是在盲目地测试。"
        },
        {
            "start": 61.14,
            "end": 62.94,
            "text": "第二步：设计实验。"
        },
        {
            "start": 62.94,
            "end": 64.74,
            "text": "确定几个关键要素。"
        },
        {
            "start": 64.74,
            "end": 65.98,
            "text": "测试什么变量？"
        },
        {
            "start": 65.98,
            "end": 68.54,
            "text": "只改一个东西，其他保持不变。"
        },
        {
            "start": 68.54,
            "end": 70.84,
            "text": "因为如果你同时改了颜色和文案，"
        },
        {
            "start": 70.84,
            "end": 73.9,
            "text": "你不知道效果的变化是因为颜色还是文案。"
        },
        {
            "start": 73.9,
            "end": 75.62,
            "text": "测试目标指标是什么？"
        },
        {
            "start": 75.62,
            "end": 78.46,
            "text": "你用什么指标来判断哪个方案好？"
        },
        {
            "start": 78.46,
            "end": 81.38,
            "text": "要提前定义好主要指标和次要指标。"
        },
        {
            "start": 81.38,
            "end": 85.0,
            "text": "主要指标是你最关心的，比如购买转化率。"
        },
        {
            "start": 85.0,
            "end": 88.84,
            "text": "次要指标是你也想观察的，比如页面停留时间。"
        },
        {
            "start": 88.84,
            "end": 90.48,
            "text": "需要多少样本量？"
        },
        {
            "start": 90.48,
            "end": 92.28,
            "text": "这是很多人忽略的问题。"
        },
        {
            "start": 92.28,
            "end": 96.02,
            "text": "如果样本量太小，你的测试结果可能不可靠。"
        },
        {
            "start": 96.02,
            "end": 99.18,
            "text": "统计学上有计算最小样本量的方法。"
        },
        {
            "start": 99.18,
            "end": 101.16,
            "text": "AI 工具可以帮你自动计算。"
        },
        {
            "start": 101.6,
            "end": 103.16,
            "text": "第三步：执行测试。"
        },
        {
            "start": 103.16,
            "end": 105.98,
            "text": "确保随机分组是真正随机的。"
        },
        {
            "start": 105.98,
            "end": 110.22,
            "text": "A 组和 B 组在测试开始之前应该没有系统性的差异。"
        },
        {
            "start": 110.22,
            "end": 112.64,
            "text": "测试期间不要偷看数据。"
        },
        {
            "start": 112.64,
            "end": 114.82,
            "text": "这是一个很常见的错误。"
        },
        {
            "start": 114.82,
            "end": 116.94,
            "text": "测试跑了两天，你就去看数据，"
        },
        {
            "start": 116.94,
            "end": 118.9,
            "text": "发现 A 方案暂时领先，"
        },
        {
            "start": 118.9,
            "end": 121.14,
            "text": "就提前结束测试选了 A。"
        },
        {
            "start": 121.66,
            "end": 124.0,
            "text": "但两天的数据可能是巧合，"
        },
        {
            "start": 124.0,
            "end": 127.16,
            "text": "如果跑完整个周期，B 方案可能反超。"
        },
        {
            "start": 127.16,
            "end": 128.96,
            "text": "第四步：分析结果。"
        },
        {
            "start": 128.96,
            "end": 131.3,
            "text": "测试跑完之后，看数据。"
        },
        {
            "start": 131.3,
            "end": 134.62,
            "text": "A 和 B 的指标差异是否有\"统计显著性\"。"
        },
        {
            "start": 135.18,
            "end": 136.84,
            "text": "什么是统计显著性？"
        },
        {
            "start": 136.84,
            "end": 142.12,
            "text": "简单说就是：这个差异是真实的，还是随机波动造成的？"
        },
        {
            "start": 142.12,
            "end": 145.18,
            "text": "如果 A 方案的转化率是百分之五点二，"
        },
        {
            "start": 145.18,
            "end": 146.78000000000003,
            "text": "B 方案是百分之五点零。"
        },
        {
            "start": 146.78000000000003,
            "end": 148.54,
            "text": "差了零点二个百分点。"
        },
        {
            "start": 148.54,
            "end": 149.84,
            "text": "这个差异是真的吗？"
        },
        {
            "start": 149.84,
            "end": 152.56,
            "text": "可能是，也可能只是随机波动。"
        },
        {
            "start": 152.56,
            "end": 154.82,
            "text": "统计显著性测试帮你判断。"
        },
        {
            "start": 154.82,
            "end": 160.0,
            "text": "一般来说，P 值小于零点零五就认为结果是显著的。"
        },
        {
            "start": 160.0,
            "end": 162.4,
            "text": "AI 工具会自动帮你做这个计算。"
        },
        {
            "start": 162.4,
            "end": 165.01999999999998,
            "text": "第五步：做决策和迭代。"
        },
        {
            "start": 165.01999999999998,
            "end": 167.92,
            "text": "如果结果显著，选择更好的方案上线。"
        },
        {
            "start": 167.92,
            "end": 169.2,
            "text": "如果结果不显著，"
        },
        {
            "start": 169.2,
            "end": 171.34,
            "text": "说明两个方案没有明显差别，"
        },
        {
            "start": 171.34,
            "end": 173.06,
            "text": "你可以选择任意一个，"
        },
        {
            "start": 173.06,
            "end": 175.3,
            "text": "或者设计新的实验继续测。"
        },
        {
            "start": 175.3,
            "end": 177.78,
            "text": "AI 怎么让 AB 测试更强大？"
        },
        {
            "start": 177.78,
            "end": 179.06,
            "text": "第一，多变量测试。"
        },
        {
            "start": 179.06,
            "end": 181.78,
            "text": "传统的 AB 测试同时只测两个方案。"
        },
        {
            "start": 181.78,
            "end": 184.62,
            "text": "AI 可以同时测试几十个变量的组合。"
        },
        {
            "start": 184.62,
            "end": 186.78,
            "text": "比如你想测试一个落地页。"
        },
        {
            "start": 186.78,
            "end": 191.54,
            "text": "标题有三个版本、主图有四个版本、按钮颜色有两个版本。"
        },
        {
            "start": 191.54,
            "end": 194.18,
            "text": "组合起来是二十四种方案。"
        },
        {
            "start": 194.18,
            "end": 198.82,
            "text": "AI 可以同时测试这二十四种方案，自动找到最优组合。"
        },
        {
            "start": 198.82,
            "end": 200.5,
            "text": "第二，智能流量分配。"
        },
        {
            "start": 200.5,
            "end": 203.78,
            "text": "传统的 AB 测试把流量均匀分给 A 和 B。"
        },
        {
            "start": 203.78,
            "end": 205.5,
            "text": "但这不是最优的。"
        },
        {
            "start": 205.5,
            "end": 208.1,
            "text": "如果测试过程中 A 明显比 B 好，"
        },
        {
            "start": 208.1,
            "end": 210.78,
            "text": "继续给 B 分配一半的流量就是浪费。"
        },
        {
            "start": 211.22,
            "end": 214.66,
            "text": "AI 可以用\"多臂老虎机\"算法动态分配流量。"
        },
        {
            "start": 214.66,
            "end": 217.26,
            "text": "表现好的方案自动获得更多流量。"
        },
        {
            "start": 217.26,
            "end": 220.2,
            "text": "这样在实验过程中就减少了机会成本。"
        },
        {
            "start": 220.2,
            "end": 222.18,
            "text": "第三，自动化实验流程。"
        },
        {
            "start": 222.6,
            "end": 226.12,
            "text": "从生成假设到设计实验到分析结果，"
        },
        {
            "start": 226.12,
            "end": 229.34,
            "text": "AI 可以辅助甚至自动完成大部分工作。"
        },
        {
            "start": 229.34,
            "end": 234.32,
            "text": "比如 AI 分析你的漏斗数据，发现某个环节的转化率偏低。"
        },
        {
            "start": 234.32,
            "end": 237.76,
            "text": "然后自动生成几个优化假设和实验方案。"
        },
        {
            "start": 237.76,
            "end": 242.0,
            "text": "你审核通过后，AI 自动执行测试、分析结果、给出建议。"
        },
        {
            "start": 242.0,
            "end": 244.34,
            "text": "第四，AI 生成测试变量。"
        },
        {
            "start": 244.8,
            "end": 247.14,
            "text": "你想测试不同的文案效果？"
        },
        {
            "start": 247.14,
            "end": 250.86,
            "text": "AI 可以帮你生成十几个不同风格的文案版本。"
        },
        {
            "start": 250.86,
            "end": 253.18,
            "text": "你想测试不同的页面设计？"
        },
        {
            "start": 253.18,
            "end": 256.12,
            "text": "AI 可以帮你生成多个设计变体。"
        },
        {
            "start": 256.12,
            "end": 257.74,
            "text": "AB 测试讲完了。"
        },
        {
            "start": 257.74,
            "end": 261.02,
            "text": "更重要的话题是：怎么建立实验文化。"
        },
        {
            "start": 261.48,
            "end": 262.7,
            "text": "什么是实验文化？"
        },
        {
            "start": 262.7,
            "end": 266.94,
            "text": "就是组织中每个人都习惯用实验的方式来验证想法，"
        },
        {
            "start": 266.94,
            "end": 269.86,
            "text": "而不是靠职级高低来决定哪个方案好。"
        },
        {
            "start": 269.86,
            "end": 272.32,
            "text": "很多企业的决策方式是\"HiPPO\"。"
        },
        {
            "start": 272.32,
            "end": 273.06,
            "text": "什么意思？"
        },
        {
            "start": 273.06,
            "end": 276.9,
            "text": "Highest Paid Person's Opinion，薪水最高的那个人的意见。"
        },
        {
            "start": 276.9,
            "end": 280.48,
            "text": "不管数据说什么，老板觉得好就用老板的方案。"
        },
        {
            "start": 280.48,
            "end": 283.28,
            "text": "实验文化的核心理念是：不管你是谁、"
        },
        {
            "start": 283.28,
            "end": 284.2,
            "text": "你有多少经验，"
        },
        {
            "start": 284.2,
            "end": 287.16,
            "text": "你的想法都需要经过实验验证。"
        },
        {
            "start": 287.16,
            "end": 288.96,
            "text": "数据面前人人平等。"
        },
        {
            "start": 288.96,
            "end": 290.28,
            "text": "怎么建立实验文化？"
        },
        {
            "start": 290.28,
            "end": 292.22,
            "text": "第一，降低实验门槛。"
        },
        {
            "start": 292.22,
            "end": 295.66,
            "text": "如果做一个 AB 测试需要写一份十页的方案、"
        },
        {
            "start": 295.66,
            "end": 298.82,
            "text": "等三个部门审批、排两个月的开发队列，"
        },
        {
            "start": 298.82,
            "end": 300.32,
            "text": "那没人愿意做实验。"
        },
        {
            "start": 300.32,
            "end": 303.26,
            "text": "实验的流程要尽可能简单快速。"
        },
        {
            "start": 303.26,
            "end": 305.72,
            "text": "第二，鼓励大量的小实验。"
        },
        {
            "start": 305.72,
            "end": 309.5,
            "text": "不是一次做一个大实验，而是同时做很多小实验。"
        },
        {
            "start": 309.5,
            "end": 312.48,
            "text": "每个实验只测一个小的改变。"
        },
        {
            "start": 313.04,
            "end": 317.24,
            "text": "很多成功的互联网公司每年要做几千次 AB 测试。"
        },
        {
            "start": 317.24,
            "end": 319.2,
            "text": "不是因为他们的团队大，"
        },
        {
            "start": 319.2,
            "end": 322.98,
            "text": "而是因为他们把实验变成了日常工作的一部分。"
        },
        {
            "start": 322.98,
            "end": 325.88,
            "text": "第三，接受大部分实验会\"失败\"。"
        },
        {
            "start": 325.88,
            "end": 327.38,
            "text": "AB 测试中，"
        },
        {
            "start": 327.38,
            "end": 329.76,
            "text": "大约百分之七十到八十的测试"
        },
        {
            "start": 329.76,
            "end": 333.2,
            "text": "结果是\"没有显著差异\"或者\"新方案不如旧方案\"。"
        },
        {
            "start": 333.2,
            "end": 334.8,
            "text": "这是正常的。"
        },
        {
            "start": 334.8,
            "end": 336.78,
            "text": "如果每次实验都成功了，"
        },
        {
            "start": 336.78,
            "end": 340.72,
            "text": "要么你的实验太保守（只测那些明显会更好的东西），"
        },
        {
            "start": 340.72,
            "end": 342.72,
            "text": "要么你的统计方法有问题。"
        },
        {
            "start": 342.72,
            "end": 344.74,
            "text": "失败的实验不是浪费。"
        },
        {
            "start": 344.74,
            "end": 349.86,
            "text": "它们帮你排除了错误的方向，让你更快地找到正确的方向。"
        },
        {
            "start": 349.86,
            "end": 351.8,
            "text": "第四，分享实验结果。"
        },
        {
            "start": 351.8,
            "end": 354.98,
            "text": "不管实验成功还是失败，都要分享给团队。"
        },
        {
            "start": 354.98,
            "end": 357.42,
            "text": "成功的实验大家可以学习和复制。"
        },
        {
            "start": 357.42,
            "end": 360.94,
            "text": "失败的实验可以帮别人避免犯同样的错误。"
        },
        {
            "start": 360.94,
            "end": 362.52,
            "text": "建一个\"实验知识库\"，"
        },
        {
            "start": 362.52,
            "end": 365.0,
            "text": "记录每一次实验的假设、方法、"
        },
        {
            "start": 365.12,
            "end": 366.7,
            "text": "结果和学到的东西。"
        },
        {
            "start": 366.7,
            "end": 369.0,
            "text": "AI 可以帮你管理这个知识库，"
        },
        {
            "start": 369.0,
            "end": 372.54,
            "text": "在有人做新实验的时候自动推送相关的历史实验。"
        },
        {
            "start": 372.54,
            "end": 374.12,
            "text": "好，总结一下。"
        },
        {
            "start": 374.12,
            "end": 376.76,
            "text": "AB 测试五步法：提出假设、"
        },
        {
            "start": 376.76,
            "end": 378.78,
            "text": "设计实验（单变量、定指标、"
        },
        {
            "start": 378.78,
            "end": 381.46,
            "text": "算样本量）、执行测试（随机分组、"
        },
        {
            "start": 381.46,
            "end": 382.54,
            "text": "不偷看数据）、"
        },
        {
            "start": 382.54,
            "end": 386.1,
            "text": "分析结果（看统计显著性）、决策迭代。"
        },
        {
            "start": 386.1,
            "end": 388.9,
            "text": "AI 四大增强：多变量测试、"
        },
        {
            "start": 388.9,
            "end": 391.42,
            "text": "智能流量分配、自动化实验流程、"
        },
        {
            "start": 391.42,
            "end": 393.12,
            "text": "AI 生成测试变量。"
        },
        {
            "start": 393.12,
            "end": 395.68,
            "text": "实验文化四要素：降低门槛、"
        },
        {
            "start": 395.68,
            "end": 398.24,
            "text": "鼓励大量小实验、接受\"失败\"、"
        },
        {
            "start": 398.24,
            "end": 399.3,
            "text": "分享结果。"
        },
        {
            "start": 399.3,
            "end": 405.1,
            "text": "下一期我们看案例：Netflix 是怎么用数据加 AI 决定拍什么剧的。"
        },
        {
            "start": 405.1,
            "end": 407.2,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 407.2,
            "end": 412.12,
            "text": "1. AB 测试五步：假设 → 设计 → 执行 → 分析 → 决策"
        },
        {
            "start": 412.12,
            "end": 416.28,
            "text": "2. AI 增强：多变量测试、智能流量分配、自动化流程"
        },
        {
            "start": 416.28,
            "end": 419.82,
            "text": "3. 统计显著性：区分真实差异和随机波动"
        },
        {
            "start": 419.82,
            "end": 423.42,
            "text": "4. 实验文化：降低门槛、大量小实验、"
        },
        {
            "start": 423.42,
            "end": 425.08,
            "text": "接受失败、分享结果"
        },
        {
            "start": 425.08,
            "end": 428.14,
            "text": "1. 你的团队有\"实验文化\"吗？"
        },
        {
            "start": 428.14,
            "end": 431.16,
            "text": "做决策主要靠数据还是靠\"HiPPO\"？"
        },
        {
            "start": 431.16,
            "end": 434.58000000000015,
            "text": "2. 你最近有什么想法可以用 AB 测试来验证？"
        },
        {
            "start": 434.58000000000015,
            "end": 437.10000000000025,
            "text": "3. 你的团队一年做了多少次实验？"
        },
        {
            "start": 437.10000000000025,
            "end": 438.7200000000003,
            "text": "这个数字可以提升吗？"
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
], navigation: { nextLessonUrl: "./lesson-data-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-08.html?entry={entry}", secondaryHref: "./lesson-data-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-07", coachSource: "./ai-coach.html?source=lesson-data-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AB 测试与实验文化的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AB 测试与实验文化", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
