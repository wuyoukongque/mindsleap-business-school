(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第2课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第2课：核心商业指标：哪些数字必须盯住",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep87-core-metrics/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：核心商业指标：哪些数字必须盯住", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-03.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "数据可视化与 Dashboard：让数据讲故事",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 2/11", "建议下一节：数据可视化与 Dashboard：让数据讲故事", '也可以先整理这一节'], nextHref: "./lesson-data-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-02", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson2", audioSource: './assets/audio/data-ep87-core-metrics.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep87-core-metrics.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep87-core-metrics/slide_01.png",
            "label": "核心商业指标：哪些数字必须盯住",
            "caption": "这一节会帮助你系统理解：核心商业指标：哪些数字必须盯住"
        },
        {
            "file": "data-ep87-core-metrics/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep87-core-metrics/slide_03.png",
            "label": "核心指标与判断",
            "caption": "英文叫 ARPU，就是平均每个用户贡献的收入。 营收等于用户数乘以客单价。"
        },
        {
            "file": "data-ep87-core-metrics/slide_04.png",
            "label": "从看见到解释",
            "caption": "是大客户还是小客户？ 是什么原因导致的流失？"
        },
        {
            "file": "data-ep87-core-metrics/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "简单的计算方法是：客单价乘以购买频率乘以客户生命周期。 比如一个客户每月付五百块，平均留存两年，那 LTV 就是一万二。"
        },
        {
            "file": "data-ep87-core-metrics/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "回款周期越短越好。 如果你的回款周期是九十天，但你要三十天内付供应商，中间就有六十天的资金缺口。"
        },
        {
            "file": "data-ep87-core-metrics/slide_07.png",
            "label": "本节行动提示",
            "caption": "如果你是线下零售，核心指标是：坪效（每平方米的营收）、同店增长率、库存周转率、客流量和转化率。 如果你是服务型企业，核心指标是：人均产出、项目利润率、客户满意度、回头率。"
        },
        {
            "file": "data-ep87-core-metrics/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.46,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.96,
            "end": 3.8,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.04,
            "end": 5.62,
            "text": "今天聊核心商业指标。"
        },
        {
            "start": 6.1,
            "end": 7.34,
            "text": "经营企业就像开车，"
        },
        {
            "start": 7.64,
            "end": 10.12,
            "text": "你需要一个仪表盘告诉你速度多快、"
        },
        {
            "start": 10.12,
            "end": 12.58,
            "text": "油量多少、发动机温度正不正常。"
        },
        {
            "start": 12.82,
            "end": 15.1,
            "text": "商业指标就是你的经营仪表盘。"
        },
        {
            "start": 15.1,
            "end": 16.78,
            "text": "问题是：指标太多了。"
        },
        {
            "start": 17.06,
            "end": 19.86,
            "text": "随便打开一个数据系统，几十上百个指标。"
        },
        {
            "start": 20.24,
            "end": 21.94,
            "text": "你到底应该盯住哪些？"
        },
        {
            "start": 22.32,
            "end": 23.94,
            "text": "今天我帮你梳理清楚。"
        },
        {
            "start": 24.4,
            "end": 27.6,
            "text": "不同类型的业务需要关注的核心指标不同，"
        },
        {
            "start": 27.6,
            "end": 31.44,
            "text": "但有一些通用的指标是所有企业都应该了解的。"
        },
        {
            "start": 31.44,
            "end": 32.98,
            "text": "先讲增长类指标。"
        },
        {
            "start": 33.68,
            "end": 36.18,
            "text": "第一个关键指标：营收和营收增长率。"
        },
        {
            "start": 36.42,
            "end": 38.22,
            "text": "营收就是你赚了多少钱。"
        },
        {
            "start": 38.44,
            "end": 42.8,
            "text": "营收增长率就是跟上个月或者去年同期相比增长了多少。"
        },
        {
            "start": 43.08,
            "end": 44.62,
            "text": "这是最基础的指标，"
        },
        {
            "start": 44.8,
            "end": 46.36,
            "text": "但很多人只看总营收，"
        },
        {
            "start": 46.36,
            "end": 47.82,
            "text": "不看增长率和趋势。"
        },
        {
            "start": 48.14,
            "end": 51.98,
            "text": "总营收在增长但增长率在下降，说明增长在放缓。"
        },
        {
            "start": 52.440000000000005,
            "end": 55.7,
            "text": "你需要在增长放缓的早期就采取行动，"
        },
        {
            "start": 55.7,
            "end": 57.86,
            "text": "而不是等到增长完全停滞。"
        },
        {
            "start": 57.86,
            "end": 61.1,
            "text": "第二个关键指标：用户数和用户增长率。"
        },
        {
            "start": 61.3,
            "end": 65.76,
            "text": "如果你做的是面向大量用户的业务，用户数是核心指标。"
        },
        {
            "start": 66.1,
            "end": 69.66,
            "text": "要区分几种用户：注册用户、活跃用户、付费用户。"
        },
        {
            "start": 70.12,
            "end": 71.7,
            "text": "最重要的是活跃用户。"
        },
        {
            "start": 71.86,
            "end": 76.24,
            "text": "注册了但不活跃的用户是\"僵尸用户\"，没有实际价值。"
        },
        {
            "start": 76.58,
            "end": 78.28,
            "text": "第三个关键指标：客单价。"
        },
        {
            "start": 78.28,
            "end": 82.56,
            "text": "英文叫 ARPU，就是平均每个用户贡献的收入。"
        },
        {
            "start": 82.56,
            "end": 85.12,
            "text": "营收等于用户数乘以客单价。"
        },
        {
            "start": 85.3,
            "end": 90.1,
            "text": "如果你想提升营收，要么增加用户数，要么提高客单价。"
        },
        {
            "start": 90.28,
            "end": 94.04,
            "text": "知道这两个数字，你才知道增长的驱动力在哪里。"
        },
        {
            "start": 94.22,
            "end": 96.18,
            "text": "接下来讲留存类指标。"
        },
        {
            "start": 96.58,
            "end": 100.28,
            "text": "获取一个新客户的成本远远高于留住一个老客户。"
        },
        {
            "start": 100.7,
            "end": 102.66,
            "text": "所以留存类指标极其重要。"
        },
        {
            "start": 103.02,
            "end": 105.34,
            "text": "第一个留存指标：客户留存率。"
        },
        {
            "start": 105.34,
            "end": 107.08,
            "text": "在一段时间内，"
        },
        {
            "start": 107.08,
            "end": 110.42,
            "text": "有多少老客户还在继续使用你的产品或服务。"
        },
        {
            "start": 110.48,
            "end": 112.84,
            "text": "通常看月留存或年留存。"
        },
        {
            "start": 112.98,
            "end": 114.12,
            "text": "举个例子。"
        },
        {
            "start": 114.44,
            "end": 116.52,
            "text": "你上个月有一千个付费客户。"
        },
        {
            "start": 116.78,
            "end": 118.74,
            "text": "这个月其中有九百个续费了。"
        },
        {
            "start": 118.74,
            "end": 121.22999999999999,
            "text": "你的月留存率就是百分之九十。"
        },
        {
            "start": 121.22999999999999,
            "end": 123.14,
            "text": "百分之九十听起来不错？"
        },
        {
            "start": 123.58,
            "end": 124.58,
            "text": "如果按年算，"
        },
        {
            "start": 124.58,
            "end": 126.22,
            "text": "百分之九十的月留存率"
        },
        {
            "start": 126.22,
            "end": 129.08,
            "text": "意味着年留存率只有百分之二十八左右。"
        },
        {
            "start": 129.4,
            "end": 131.54,
            "text": "一年下来你丢了七成的客户。"
        },
        {
            "start": 131.54,
            "end": 135.48,
            "text": "这就是为什么小小的留存率提升可以带来巨大的影响。"
        },
        {
            "start": 135.52,
            "end": 138.28000000000003,
            "text": "月留存从百分之九十提到百分之九十五，"
        },
        {
            "start": 138.28000000000003,
            "end": 142.23999999999992,
            "text": "年留存就从百分之二十八提升到了百分之五十四。"
        },
        {
            "start": 142.24,
            "end": 145.72,
            "text": "第二个留存指标：客户流失率，英文叫 Churn Rate。"
        },
        {
            "start": 146.14,
            "end": 148.14,
            "text": "流失率就是留存率的反面。"
        },
        {
            "start": 148.22,
            "end": 151.6,
            "text": "月流失率百分之十就是月留存率百分之九十。"
        },
        {
            "start": 151.6,
            "end": 153.2,
            "text": "为什么要单独看流失率？"
        },
        {
            "start": 153.3,
            "end": 155.12,
            "text": "因为流失率可以进一步拆解。"
        },
        {
            "start": 155.52,
            "end": 156.92,
            "text": "哪些客户在流失？"
        },
        {
            "start": 157.08,
            "end": 158.72,
            "text": "是新客户还是老客户？"
        },
        {
            "start": 159.1,
            "end": 160.32,
            "text": "是大客户还是小客户？"
        },
        {
            "start": 160.32,
            "end": 162.34,
            "text": "是什么原因导致的流失？"
        },
        {
            "start": 162.46,
            "end": 164.82,
            "text": "AI 可以帮你做流失分析。"
        },
        {
            "start": 165.0,
            "end": 167.08,
            "text": "自动识别即将流失的客户，"
        },
        {
            "start": 167.24,
            "end": 169.88,
            "text": "分析流失的原因，建议干预措施。"
        },
        {
            "start": 170.18,
            "end": 174.08,
            "text": "第三个留存指标：净推荐值，英文叫 NPS。"
        },
        {
            "start": 174.46,
            "end": 177.28,
            "text": "NPS 是衡量客户忠诚度的指标。"
        },
        {
            "start": 177.54,
            "end": 181.78,
            "text": "问客户一个问题：\"你有多大可能向朋友推荐我们的产品？"
        },
        {
            "start": 182.1,
            "end": 183.66,
            "text": "\"从零到十打分。"
        },
        {
            "start": 183.92,
            "end": 185.76,
            "text": "打九到十分的是\"推荐者\"。"
        },
        {
            "start": 185.76,
            "end": 188.14,
            "text": "打零到六分的是\"贬损者\"。"
        },
        {
            "start": 188.14,
            "end": 191.72,
            "text": "NPS 等于推荐者的比例减去贬损者的比例。"
        },
        {
            "start": 191.94,
            "end": 193.4,
            "text": "NPS 为什么重要？"
        },
        {
            "start": 193.62,
            "end": 195.12,
            "text": "因为它是一个\"先行指标\"。"
        },
        {
            "start": 195.4,
            "end": 200.36,
            "text": "当 NPS 下降的时候，留存率往往会在之后几个月跟着下降。"
        },
        {
            "start": 200.62,
            "end": 203.4,
            "text": "所以 NPS 可以让你提前发现问题。"
        },
        {
            "start": 203.76,
            "end": 205.5,
            "text": "接下来讲效率类指标。"
        },
        {
            "start": 205.84,
            "end": 209.14,
            "text": "第一个效率指标：获客成本，英文叫 CAC。"
        },
        {
            "start": 209.54,
            "end": 212.54,
            "text": "就是你获取一个新客户平均要花多少钱。"
        },
        {
            "start": 212.76,
            "end": 214.96,
            "text": "包括所有的市场和销售费用。"
        },
        {
            "start": 215.38,
            "end": 218.14,
            "text": "如果你这个月在获客上花了十万块，"
        },
        {
            "start": 218.2,
            "end": 219.9,
            "text": "获得了一百个新客户，"
        },
        {
            "start": 220.04,
            "end": 222.18,
            "text": "你的获客成本就是一千块一个。"
        },
        {
            "start": 222.18,
            "end": 224.16,
            "text": "获客成本单独看没有意义。"
        },
        {
            "start": 224.32,
            "end": 226.9,
            "text": "要跟客户终身价值一起看。"
        },
        {
            "start": 226.9,
            "end": 231.08,
            "text": "第二个效率指标：客户终身价值，英文叫 LTV。"
        },
        {
            "start": 231.24,
            "end": 235.78,
            "text": "就是一个客户在整个生命周期内预计会给你贡献多少收入。"
        },
        {
            "start": 236.22,
            "end": 238.12,
            "text": "简单的计算方法是："
        },
        {
            "start": 238.12,
            "end": 241.28,
            "text": "客单价乘以购买频率乘以客户生命周期。"
        },
        {
            "start": 241.28,
            "end": 243.84,
            "text": "比如一个客户每月付五百块，"
        },
        {
            "start": 243.98,
            "end": 247.36,
            "text": "平均留存两年，那 LTV 就是一万二。"
        },
        {
            "start": 247.36,
            "end": 250.18,
            "text": "最关键的比例是 LTV 除以 CAC。"
        },
        {
            "start": 250.7,
            "end": 251.68,
            "text": "这个比值告诉你："
        },
        {
            "start": 251.7,
            "end": 253.54,
            "text": "你花了多少钱获取一个客户，"
        },
        {
            "start": 253.7,
            "end": 255.74,
            "text": "这个客户能给你赚回多少钱。"
        },
        {
            "start": 255.74,
            "end": 259.5,
            "text": "一般来说，LTV 除以 CAC 大于三是健康的。"
        },
        {
            "start": 259.5,
            "end": 262.54,
            "text": "意味着每花一块钱获客，能赚回三块钱。"
        },
        {
            "start": 262.64,
            "end": 266.86,
            "text": "如果小于一，说明你在亏钱获客，商业模式不可持续。"
        },
        {
            "start": 267.32,
            "end": 269.68,
            "text": "AI 可以帮你更精准地计算 LTV。"
        },
        {
            "start": 269.68,
            "end": 272.1,
            "text": "不是所有客户的 LTV 都一样。"
        },
        {
            "start": 272.1,
            "end": 276.06,
            "text": "AI 可以根据客户的特征和行为预测每个客户的 LTV。"
        },
        {
            "start": 276.2,
            "end": 279.66,
            "text": "高 LTV 的客户值得花更多的钱去获取和维护。"
        },
        {
            "start": 279.66,
            "end": 282.3,
            "text": "低 LTV 的客户就不值得花太多。"
        },
        {
            "start": 282.6,
            "end": 284.34,
            "text": "再讲几个财务效率指标。"
        },
        {
            "start": 284.78,
            "end": 285.26,
            "text": "毛利率。"
        },
        {
            "start": 285.26,
            "end": 288.44,
            "text": "收入减去直接成本，除以收入。"
        },
        {
            "start": 288.68,
            "end": 292.4,
            "text": "告诉你每赚一块钱，扣掉直接成本后还剩多少。"
        },
        {
            "start": 292.7,
            "end": 296.04,
            "text": "毛利率越高，你的商业模式的经济性越好。"
        },
        {
            "start": 296.38,
            "end": 297.02,
            "text": "现金流。"
        },
        {
            "start": 297.4,
            "end": 299.34,
            "text": "我们在财务模块详细讲过了。"
        },
        {
            "start": 299.34,
            "end": 300.46,
            "text": "这里强调一点："
        },
        {
            "start": 300.46,
            "end": 302.5,
            "text": "很多企业不是亏损倒闭的，"
        },
        {
            "start": 302.56,
            "end": 304.42,
            "text": "而是现金流断裂倒闭的。"
        },
        {
            "start": 304.42,
            "end": 308.38,
            "text": "账上显示赚钱了，但钱没收回来，付不了下个月的工资。"
        },
        {
            "start": 308.96,
            "end": 309.7,
            "text": "回款周期。"
        },
        {
            "start": 310.18,
            "end": 314.4,
            "text": "从交付产品或服务到收到客户付款，平均需要多少天。"
        },
        {
            "start": 314.66,
            "end": 316.24,
            "text": "回款周期越短越好。"
        },
        {
            "start": 316.48,
            "end": 318.76,
            "text": "如果你的回款周期是九十天，"
        },
        {
            "start": 319.04,
            "end": 321.1,
            "text": "但你要三十天内付供应商，"
        },
        {
            "start": 321.4,
            "end": 323.6,
            "text": "中间就有六十天的资金缺口。"
        },
        {
            "start": 323.98,
            "end": 327.56,
            "text": "最后讲一个非常重要的概念：指标之间的关系。"
        },
        {
            "start": 327.64,
            "end": 329.86,
            "text": "不要孤立地看每一个指标。"
        },
        {
            "start": 329.98,
            "end": 332.66,
            "text": "指标之间是有因果关系的。"
        },
        {
            "start": 332.66,
            "end": 333.74,
            "text": "举个例子。"
        },
        {
            "start": 333.9,
            "end": 336.28,
            "text": "你发现营收增长放缓了。"
        },
        {
            "start": 336.28,
            "end": 338.46,
            "text": "营收等于用户数乘以客单价。"
        },
        {
            "start": 338.74,
            "end": 340.62,
            "text": "你去看用户数，还在增长。"
        },
        {
            "start": 340.86,
            "end": 342.13000000000005,
            "text": "那问题在客单价。"
        },
        {
            "start": 342.13000000000005,
            "end": 343.32,
            "text": "客单价下降了。"
        },
        {
            "start": 343.32,
            "end": 343.64,
            "text": "为什么？"
        },
        {
            "start": 344.22,
            "end": 345.06,
            "text": "进一步拆解。"
        },
        {
            "start": 345.22,
            "end": 348.9,
            "text": "客单价下降可能是因为高价产品的销量下降了，"
        },
        {
            "start": 348.94,
            "end": 351.26,
            "text": "或者是折扣力度太大了，"
        },
        {
            "start": 351.26,
            "end": 355.0500000000002,
            "text": "或者是客户结构变化了（低价值客户的比例增加了）。"
        },
        {
            "start": 355.0500000000002,
            "end": 355.42,
            "text": "这就是\"指标树\"的概念。"
        },
        {
            "start": 355.44,
            "end": 360.0,
            "text": "从顶层指标往下拆，一直拆到可以直接行动的层面。"
        },
        {
            "start": 360.32,
            "end": 363.0,
            "text": "AI 可以帮你自动做这种拆解分析。"
        },
        {
            "start": 363.52,
            "end": 365.76,
            "text": "当某个顶层指标异常时，"
        },
        {
            "start": 365.82,
            "end": 368.24,
            "text": "AI 自动沿着指标树往下分析，"
        },
        {
            "start": 368.52,
            "end": 369.88,
            "text": "找到异常的根源。"
        },
        {
            "start": 369.98,
            "end": 373.72,
            "text": "给不同类型的企业推荐最应该关注的核心指标。"
        },
        {
            "start": 374.18,
            "end": 377.0,
            "text": "如果你是电商企业，核心指标是："
        },
        {
            "start": 377.0,
            "end": 379.7,
            "text": "总交易额、客单价、转化率、复购率、"
        },
        {
            "start": 379.7,
            "end": 380.58,
            "text": "获客成本。"
        },
        {
            "start": 381.04,
            "end": 384.2,
            "text": "如果你是订阅制的 SaaS 企业，核心指标是："
        },
        {
            "start": 384.2,
            "end": 386.3,
            "text": "月度经常性收入、客户流失率、"
        },
        {
            "start": 386.46,
            "end": 388.56,
            "text": "客户终身价值除以获客成本、"
        },
        {
            "start": 388.56,
            "end": 389.82,
            "text": "净收入留存率。"
        },
        {
            "start": 390.14,
            "end": 393.4,
            "text": "如果你是线下零售，核心指标是："
        },
        {
            "start": 393.4,
            "end": 397.12,
            "text": "坪效（每平方米的营收）、同店增长率、"
        },
        {
            "start": 397.5,
            "end": 399.94,
            "text": "库存周转率、客流量和转化率。"
        },
        {
            "start": 400.34,
            "end": 403.56,
            "text": "如果你是服务型企业，核心指标是："
        },
        {
            "start": 403.56,
            "end": 406.86,
            "text": "人均产出、项目利润率、客户满意度、"
        },
        {
            "start": 407.22,
            "end": 407.62,
            "text": "回头率。"
        },
        {
            "start": 407.92,
            "end": 409.84,
            "text": "不管哪种企业，记住一个原则："
        },
        {
            "start": 409.84,
            "end": 412.8,
            "text": "核心指标不要超过五到八个。"
        },
        {
            "start": 412.84,
            "end": 414.96,
            "text": "太多了就等于什么都没看。"
        },
        {
            "start": 415.32,
            "end": 416.0,
            "text": "好，总结一下。"
        },
        {
            "start": 416.38,
            "end": 420.26,
            "text": "核心商业指标分三大类：增长类（营收、"
        },
        {
            "start": 420.74,
            "end": 424.0,
            "text": "用户数、客单价）、留存类（留存率、"
        },
        {
            "start": 424.4,
            "end": 427.92,
            "text": "流失率、NPS）、效率类（获客成本、"
        },
        {
            "start": 428.18,
            "end": 430.1,
            "text": "客户终身价值、毛利率）。"
        },
        {
            "start": 430.44,
            "end": 435.38,
            "text": "最关键的比值是 LTV 除以 CAC，大于三是健康的。"
        },
        {
            "start": 435.38,
            "end": 438.86,
            "text": "指标不要孤立看，要看指标之间的因果关系。"
        },
        {
            "start": 438.86,
            "end": 441.24,
            "text": "核心指标控制在五到八个。"
        },
        {
            "start": 441.54,
            "end": 445.14,
            "text": "下一期我们聊数据可视化：怎么让数据讲故事。"
        },
        {
            "start": 445.26,
            "end": 447.14,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 447.42,
            "end": 450.86,
            "text": "1. 三大类指标：增长类（营收、用户、"
        },
        {
            "start": 451.18,
            "end": 453.58,
            "text": "客单价）、留存类（留存率、NPS）、"
        },
        {
            "start": 454.24,
            "end": 455.68,
            "text": "效率类（CAC、LTV）"
        },
        {
            "start": 455.68,
            "end": 460.24,
            "text": "2. 关键比值：LTV 除以 CAC 大于 3 是健康的"
        },
        {
            "start": 460.24,
            "end": 465.34,
            "text": "3. 指标树思维：从顶层指标往下拆解，找到异常根源"
        },
        {
            "start": 465.68,
            "end": 469.98,
            "text": "4. 核心指标不超过 5 8 个，按企业类型选择"
        },
        {
            "start": 470.1,
            "end": 473.5,
            "text": "1. 你的企业最核心的五个指标是什么？"
        },
        {
            "start": 473.86,
            "end": 476.22999999999996,
            "text": "你能脱口而出它们的当前数值吗？"
        },
        {
            "start": 476.62,
            "end": 479.9,
            "text": "2. 你的 LTV 除以 CAC 是多少？"
        },
        {
            "start": 480.32,
            "end": 481.92,
            "text": "这个比值健康吗？"
        },
        {
            "start": 482.24,
            "end": 484.82,
            "text": "3. 你有没有\"指标树\"？"
        },
        {
            "start": 484.82,
            "end": 488.46,
            "text": "当某个指标异常时，你能快速定位到原因吗？"
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
], navigation: { nextLessonUrl: "./lesson-data-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-03.html?entry={entry}", secondaryHref: "./lesson-data-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-02", coachSource: "./ai-coach.html?source=lesson-data-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于核心商业指标：哪些数字必须盯住的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "核心商业指标：哪些数字必须盯住", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
