(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第11课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第11课：你的数据诊断：用 AI 搭建业务指标体系",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep96-data-diagnosis-workshop/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的数据诊断：用 AI 搭建业务指标体系", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-data.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 数据分析工具实操：从 Excel 到对话式分析",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的数据诊断：用 AI 搭建业务指标体系",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-data.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的数据课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：数据驱动经营 11/11", "你已完成当前开放的数据课程", '也可以先整理这一节'], nextHref: "./module-data.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-11", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson11", audioSource: './assets/audio/data-ep96-data-diagnosis-workshop.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep96-data-diagnosis-workshop.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_01.png",
            "label": "你的数据诊断：用 AI 搭建业务指标体系",
            "caption": "这一节会帮助你系统理解：你的数据诊断：用 AI 搭建业务指标体系"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_03.png",
            "label": "核心指标与判断",
            "caption": "然后你根据自己的判断做最终选择。 第二步：拆解驱动指标。"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_04.png",
            "label": "从看见到解释",
            "caption": "以\"老客留存率\"为例，可以拆解为：客户活跃度（登录频率、使用深度）、客户满意度（NPS）、客服响应质量。 这样你就得到了一棵完整的指标树。"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "第三，业务需求。 要达成今年的营收目标，各个指标需要达到什么水平？"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "第四，对每个指标写下：当前值是多少？ 目标值是多少？"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_07.png",
            "label": "本节行动提示",
            "caption": "等你看到结果指标下降的时候已经晚了。 你需要过程指标来提前发现问题。"
        },
        {
            "file": "data-ep96-data-diagnosis-workshop/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.56,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.56,
            "end": 4.1,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.1,
            "end": 7.46,
            "text": "今天是模块七商业数据与分析的最后一期，"
        },
        {
            "start": 7.46,
            "end": 9.84,
            "text": "也是一期实战工作坊。"
        },
        {
            "start": 9.84,
            "end": 11.82,
            "text": "我们来做一件非常实用的事："
        },
        {
            "start": 11.82,
            "end": 15.32,
            "text": "用 AI 帮你搭建你企业的业务指标体系。"
        },
        {
            "start": 15.32,
            "end": 18.76,
            "text": "前面我们讲了很多指标、分析方法、工具。"
        },
        {
            "start": 18.76,
            "end": 20.46,
            "text": "今天把这些串起来，"
        },
        {
            "start": 20.46,
            "end": 23.48,
            "text": "帮你建一套属于你自己的\"经营仪表盘\"。"
        },
        {
            "start": 23.48,
            "end": 25.88,
            "text": "搭建指标体系分五步。"
        },
        {
            "start": 25.88,
            "end": 28.62,
            "text": "第一步：确定你的北极星指标。"
        },
        {
            "start": 29.08,
            "end": 31.92,
            "text": "回顾一下我们在第八十七期讲的。"
        },
        {
            "start": 31.92,
            "end": 34.96,
            "text": "北极星指标是你整个企业最核心的一个指标。"
        },
        {
            "start": 34.96,
            "end": 37.98,
            "text": "它代表了你为客户创造的核心价值。"
        },
        {
            "start": 37.98,
            "end": 40.2,
            "text": "怎么找到你的北极星指标？"
        },
        {
            "start": 40.2,
            "end": 41.52,
            "text": "问自己一个问题："
        },
        {
            "start": 41.52,
            "end": 44.86666666666667,
            "text": "\"如果我只能看一个数字来判断公司是不"
        },
        {
            "start": 44.86666666666667,
            "end": 46.54,
            "text": "是在正确的方向上，"
        },
        {
            "start": 46.54,
            "end": 47.72,
            "text": "这个数字是什么？"
        },
        {
            "start": 47.72,
            "end": 48.14,
            "text": "\""
        },
        {
            "start": 48.14,
            "end": 50.62,
            "text": "不同类型的企业有不同的北极星指标。"
        },
        {
            "start": 50.62,
            "end": 53.14,
            "text": "电商可能是月活跃买家数。"
        },
        {
            "start": 53.14,
            "end": 55.6,
            "text": "SaaS 可能是月度经常性收入。"
        },
        {
            "start": 55.6,
            "end": 59.34,
            "text": "内容平台可能是日活跃用户的平均使用时长。"
        },
        {
            "start": 59.34,
            "end": 61.92,
            "text": "教育平台可能是完课率。"
        },
        {
            "start": 61.92,
            "end": 63.56,
            "text": "你可以让 AI 帮你确定。"
        },
        {
            "start": 63.56,
            "end": 66.24,
            "text": "告诉 AI 你的业务类型、商业模式、"
        },
        {
            "start": 66.24,
            "end": 67.52,
            "text": "核心用户价值，"
        },
        {
            "start": 67.52,
            "end": 70.62,
            "text": "让它帮你推荐最适合的北极星指标。"
        },
        {
            "start": 70.62,
            "end": 73.78,
            "text": "然后你根据自己的判断做最终选择。"
        },
        {
            "start": 73.78,
            "end": 75.56,
            "text": "第二步：拆解驱动指标。"
        },
        {
            "start": 75.56,
            "end": 79.32,
            "text": "北极星指标太高层了，你没办法直接优化它。"
        },
        {
            "start": 79.32,
            "end": 82.34,
            "text": "你需要把它拆解成三到五个驱动指标。"
        },
        {
            "start": 82.34,
            "end": 86.28,
            "text": "拆解的方法是问自己：\"什么因素直接影响北极星指标？"
        },
        {
            "start": 86.28,
            "end": 86.7,
            "text": "\""
        },
        {
            "start": 86.7,
            "end": 89.56,
            "text": "比如北极星指标是\"月活跃买家数\"。"
        },
        {
            "start": 89.56,
            "end": 91.3,
            "text": "什么因素影响它？"
        },
        {
            "start": 91.3,
            "end": 92.8,
            "text": "第一，新客户获取量。"
        },
        {
            "start": 92.8,
            "end": 94.7,
            "text": "每月获取多少新买家。"
        },
        {
            "start": 94.7,
            "end": 96.32,
            "text": "第二，老客户留存率。"
        },
        {
            "start": 96.32,
            "end": 99.72,
            "text": "上个月的活跃买家这个月还有多少在。"
        },
        {
            "start": 99.72,
            "end": 101.9,
            "text": "第三，沉睡客户激活量。"
        },
        {
            "start": 101.9,
            "end": 105.0,
            "text": "之前不活跃的买家被重新激活了多少。"
        },
        {
            "start": 105.0,
            "end": 107.0,
            "text": "这三个就是你的驱动指标。"
        },
        {
            "start": 107.0,
            "end": 113.14,
            "text": "新客获取加老客留存加沉睡激活，共同驱动月活跃买家数。"
        },
        {
            "start": 113.14,
            "end": 115.34,
            "text": "你也可以用数学公式来表达："
        },
        {
            "start": 115.34,
            "end": 119.74,
            "text": "月活跃买家数等于上月活跃买家数乘以留存率，"
        },
        {
            "start": 119.74,
            "end": 123.2,
            "text": "加上新客获取量，加上沉睡激活量。"
        },
        {
            "start": 123.2,
            "end": 125.44,
            "text": "第三步：拆解过程指标。"
        },
        {
            "start": 126.04,
            "end": 128.36,
            "text": "每个驱动指标再往下拆一层，"
        },
        {
            "start": 128.36,
            "end": 131.22,
            "text": "变成可以直接行动的过程指标。"
        },
        {
            "start": 131.22,
            "end": 134.44,
            "text": "以\"新客获取量\"为例，可以拆解为："
        },
        {
            "start": 134.44,
            "end": 137.08,
            "text": "各渠道的流量、各渠道的注册转化率、"
        },
        {
            "start": 137.08,
            "end": 139.12,
            "text": "注册到首次购买的转化率。"
        },
        {
            "start": 139.12,
            "end": 142.08,
            "text": "以\"老客留存率\"为例，可以拆解为："
        },
        {
            "start": 142.08,
            "end": 145.3,
            "text": "客户活跃度（登录频率、使用深度）、"
        },
        {
            "start": 145.3,
            "end": 149.5,
            "text": "客户满意度（NPS）、客服响应质量。"
        },
        {
            "start": 149.5,
            "end": 152.52,
            "text": "这样你就得到了一棵完整的指标树。"
        },
        {
            "start": 152.52,
            "end": 156.12,
            "text": "从北极星指标到驱动指标到过程指标。"
        },
        {
            "start": 156.12,
            "end": 158.7,
            "text": "任何一个过程指标出了问题，"
        },
        {
            "start": 158.7,
            "end": 162.14,
            "text": "你都能追溯到它对北极星指标的影响。"
        },
        {
            "start": 162.14,
            "end": 164.48,
            "text": "让 AI 帮你做这个拆解。"
        },
        {
            "start": 164.48,
            "end": 167.98,
            "text": "把你的北极星指标和驱动指标告诉 AI，"
        },
        {
            "start": 167.98,
            "end": 170.88,
            "text": "让它帮你进一步拆解过程指标。"
        },
        {
            "start": 170.88,
            "end": 174.1,
            "text": "AI 通常能给出比较全面的拆解建议。"
        },
        {
            "start": 174.1,
            "end": 176.16,
            "text": "你再根据实际情况做调整。"
        },
        {
            "start": 176.68,
            "end": 179.22,
            "text": "第四步：设定目标值和预警线。"
        },
        {
            "start": 179.22,
            "end": 182.62,
            "text": "每个指标都需要有一个目标值和预警线。"
        },
        {
            "start": 183.16000000000003,
            "end": 185.64,
            "text": "目标值就是你希望达到的水平。"
        },
        {
            "start": 185.64,
            "end": 188.64,
            "text": "比如新客获取量的目标是每月一千个。"
        },
        {
            "start": 188.64,
            "end": 191.01999999999992,
            "text": "留存率的目标是百分之八十五。"
        },
        {
            "start": 191.02,
            "end": 194.94,
            "text": "预警线就是低于这个值就需要采取行动。"
        },
        {
            "start": 194.94,
            "end": 197.74,
            "text": "比如留存率低于百分之七十五就预警。"
        },
        {
            "start": 197.74,
            "end": 202.2,
            "text": "新客获取量连续两周低于目标的百分之八十就预警。"
        },
        {
            "start": 202.2,
            "end": 203.84,
            "text": "怎么设定目标值？"
        },
        {
            "start": 203.84,
            "end": 204.74,
            "text": "三个参考。"
        },
        {
            "start": 204.74,
            "end": 206.26,
            "text": "第一，历史数据。"
        },
        {
            "start": 206.26,
            "end": 207.86,
            "text": "过去的表现怎么样？"
        },
        {
            "start": 207.86,
            "end": 212.64,
            "text": "在历史最好水平的基础上设定一个合理的提升目标。"
        },
        {
            "start": 212.64,
            "end": 213.92,
            "text": "第二，行业标杆。"
        },
        {
            "start": 213.92,
            "end": 216.18,
            "text": "同行的平均水平是多少？"
        },
        {
            "start": 216.18,
            "end": 217.74,
            "text": "头部企业是多少？"
        },
        {
            "start": 217.74,
            "end": 219.14,
            "text": "第三，业务需求。"
        },
        {
            "start": 219.14,
            "end": 223.7,
            "text": "要达成今年的营收目标，各个指标需要达到什么水平？"
        },
        {
            "start": 223.7,
            "end": 225.3,
            "text": "AI 可以帮你做测算。"
        },
        {
            "start": 225.73999999999998,
            "end": 230.6,
            "text": "告诉 AI 你的营收目标，让它反推每个指标需要达到的水平。"
        },
        {
            "start": 230.6,
            "end": 232.84,
            "text": "第五步：确定监控节奏。"
        },
        {
            "start": 232.84,
            "end": 235.46,
            "text": "不是所有指标都需要每天看。"
        },
        {
            "start": 235.46,
            "end": 238.42,
            "text": "不同层级的指标用不同的节奏监控。"
        },
        {
            "start": 238.42,
            "end": 242.46,
            "text": "北极星指标和驱动指标：至少每周看一次。"
        },
        {
            "start": 242.46,
            "end": 244.92,
            "text": "在每周的经营会议上回顾。"
        },
        {
            "start": 244.92,
            "end": 248.02,
            "text": "过程指标：每天或者实时监控。"
        },
        {
            "start": 248.02,
            "end": 250.02,
            "text": "如果有异常立刻响应。"
        },
        {
            "start": 250.02,
            "end": 252.22,
            "text": "深度分析：每月做一次。"
        },
        {
            "start": 252.22,
            "end": 256.88,
            "text": "不只是看数据，还要做深入的归因分析和趋势分析。"
        },
        {
            "start": 256.88,
            "end": 258.86,
            "text": "设置自动化预警。"
        },
        {
            "start": 258.86,
            "end": 263.34,
            "text": "当某个指标触发预警线的时候，自动通知相关负责人。"
        },
        {
            "start": 263.34,
            "end": 267.82,
            "text": "不需要每个人每天盯着看板，有问题系统会主动告诉你。"
        },
        {
            "start": 267.82,
            "end": 269.62,
            "text": "好，现在来做实操练习。"
        },
        {
            "start": 269.62,
            "end": 273.32,
            "text": "拿出你的纸笔或者打开一个文档，跟着我做。"
        },
        {
            "start": 273.32,
            "end": 275.2,
            "text": "第一，写下你的北极星指标。"
        },
        {
            "start": 275.2,
            "end": 276.46,
            "text": "只能写一个。"
        },
        {
            "start": 276.46,
            "end": 279.56,
            "text": "想清楚什么最能代表你的业务核心价值。"
        },
        {
            "start": 279.56,
            "end": 282.34,
            "text": "第二，写下三到五个驱动指标。"
        },
        {
            "start": 282.34,
            "end": 285.72,
            "text": "问自己\"什么因素直接影响北极星指标\"。"
        },
        {
            "start": 285.72,
            "end": 289.92,
            "text": "第三，每个驱动指标下面写两到三个过程指标。"
        },
        {
            "start": 289.92,
            "end": 292.24,
            "text": "问自己\"要改善这个驱动指标，"
        },
        {
            "start": 292.24,
            "end": 294.14,
            "text": "我需要做好哪些具体的事\"。"
        },
        {
            "start": 294.14,
            "end": 297.8,
            "text": "第四，对每个指标写下：当前值是多少？"
        },
        {
            "start": 298.02,
            "end": 299.28,
            "text": "目标值是多少？"
        },
        {
            "start": 299.28,
            "end": 300.86,
            "text": "预警线在哪里？"
        },
        {
            "start": 300.86,
            "end": 302.28,
            "text": "如果你不知道当前值，"
        },
        {
            "start": 302.28,
            "end": 303.74,
            "text": "那本身就是一个发现："
        },
        {
            "start": 303.74,
            "end": 306.0,
            "text": "说明你的数据基础还需要加强。"
        },
        {
            "start": 306.0,
            "end": 309.48,
            "text": "第五，确定监控节奏和责任人。"
        },
        {
            "start": 309.48,
            "end": 310.68,
            "text": "每个指标谁负责？"
        },
        {
            "start": 310.68,
            "end": 311.9,
            "text": "多久看一次？"
        },
        {
            "start": 311.9,
            "end": 316.0,
            "text": "完成了上面的练习，你就有了一个初步的指标体系框架。"
        },
        {
            "start": 316.0,
            "end": 320.5,
            "text": "接下来，把这个框架发给 AI，让 AI 帮你审核和完善。"
        },
        {
            "start": 320.5,
            "end": 323.94,
            "text": "问 AI：\"我搭建了以下的业务指标体系，"
        },
        {
            "start": 323.94,
            "end": 325.76,
            "text": "然后把你的指标树发给它。"
        },
        {
            "start": 325.76,
            "end": 329.94,
            "text": "请帮我检查：第一，指标之间的逻辑关系是否完整？"
        },
        {
            "start": 329.94,
            "end": 331.74,
            "text": "有没有遗漏的关键指标？"
        },
        {
            "start": 331.74,
            "end": 333.9,
            "text": "第二，目标值是否合理？"
        },
        {
            "start": 333.9,
            "end": 336.24,
            "text": "第三，有没有更好的指标可以替代？"
        },
        {
            "start": 336.24,
            "end": 336.66,
            "text": "\""
        },
        {
            "start": 336.76,
            "end": 339.72,
            "text": "AI 会帮你找到遗漏和不合理的地方。"
        },
        {
            "start": 339.72,
            "end": 341.98,
            "text": "你根据 AI 的建议做调整，"
        },
        {
            "start": 341.98,
            "end": 344.62,
            "text": "就得到了一个比较完善的指标体系。"
        },
        {
            "start": 344.62,
            "end": 348.32,
            "text": "最后分享三个搭建指标体系的常见错误。"
        },
        {
            "start": 348.32,
            "end": 350.06,
            "text": "第一，指标太多。"
        },
        {
            "start": 350.06,
            "end": 353.34,
            "text": "有些企业的看板上放了三四十个指标。"
        },
        {
            "start": 353.34,
            "end": 354.28,
            "text": "太多了。"
        },
        {
            "start": 354.38,
            "end": 357.1,
            "text": "记住，核心指标不超过五到八个。"
        },
        {
            "start": 357.1,
            "end": 360.96,
            "text": "过程指标可以多一些，但也要控制在二十个以内。"
        },
        {
            "start": 360.96,
            "end": 364.28,
            "text": "第二，只有结果指标没有过程指标。"
        },
        {
            "start": 364.28,
            "end": 368.06,
            "text": "只看营收、利润这些结果指标是不够的。"
        },
        {
            "start": 368.06,
            "end": 371.34,
            "text": "等你看到结果指标下降的时候已经晚了。"
        },
        {
            "start": 371.34,
            "end": 375.22,
            "text": "你需要过程指标来提前发现问题。"
        },
        {
            "start": 375.22,
            "end": 377.8,
            "text": "第三，指标不跟行动挂钩。"
        },
        {
            "start": 377.8,
            "end": 381.68,
            "text": "每一个指标都应该有明确的负责人和行动方案。"
        },
        {
            "start": 381.68,
            "end": 384.14,
            "text": "\"如果这个指标下降了，谁负责？"
        },
        {
            "start": 384.14,
            "end": 385.94,
            "text": "应该采取什么行动？"
        },
        {
            "start": 385.94,
            "end": 388.96,
            "text": "\"如果答不出来，这个指标就是白设的。"
        },
        {
            "start": 388.96,
            "end": 390.18,
            "text": "好，总结一下。"
        },
        {
            "start": 390.18,
            "end": 393.04,
            "text": "搭建指标体系五步：确定北极星指标、"
        },
        {
            "start": 393.04,
            "end": 395.22,
            "text": "拆解驱动指标、拆解过程指标、"
        },
        {
            "start": 395.22,
            "end": 397.84,
            "text": "设定目标值和预警线、确定监控节奏。"
        },
        {
            "start": 397.84,
            "end": 399.78,
            "text": "每一步都可以用 AI 辅助。"
        },
        {
            "start": 399.78,
            "end": 402.08,
            "text": "三个常见错误：指标太多、"
        },
        {
            "start": 402.08,
            "end": 404.78,
            "text": "只有结果没有过程、指标不跟行动挂钩。"
        },
        {
            "start": 404.78,
            "end": 407.28,
            "text": "模块七到这里就全部结束了。"
        },
        {
            "start": 407.28,
            "end": 411.0,
            "text": "从下一期开始，我们进入模块八：商业法律与合规。"
        },
        {
            "start": 411.0,
            "end": 413.18,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 413.18,
            "end": 415.3,
            "text": "1. 指标体系五步："
        },
        {
            "start": 415.3,
            "end": 420.14,
            "text": "北极星 → 驱动指标 → 过程指标 → 目标与预警 → 监控节奏"
        },
        {
            "start": 420.14,
            "end": 423.4446153846153,
            "text": "2. 北极星只选一个，驱动指标 3 5 个，"
        },
        {
            "start": 423.4446153846153,
            "end": 423.81846153846124,
            "text": "核心指标不超过 8 个"
        },
        {
            "start": 423.81846153846124,
            "end": 428.7,
            "text": "3. 每个指标必须有目标值、预警线、负责人和行动方案"
        },
        {
            "start": 428.7,
            "end": 432.12,
            "text": "4. 三个常见错误：指标太多、"
        },
        {
            "start": 432.12,
            "end": 435.2,
            "text": "只看结果不看过程、不跟行动挂钩"
        },
        {
            "start": 435.2,
            "end": 440.18,
            "text": "1. 写出你的北极星指标和三到五个驱动指标"
        },
        {
            "start": 440.18,
            "end": 443.28,
            "text": "2. 你目前最缺哪些数据？"
        },
        {
            "start": 443.28,
            "end": 445.19,
            "text": "需要做什么来补齐？"
        },
        {
            "start": 445.19,
            "end": 450.62,
            "text": "3. 把你的指标体系发给 AI 审核，看看 AI 有什么建议"
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
], navigation: { nextLessonUrl: "./module-data.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-data.html?entry={entry}", secondaryHref: "./module-data.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-11", coachSource: "./ai-coach.html?source=lesson-data-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的数据诊断：用 AI 搭建业务指标体系的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的数据诊断：用 AI 搭建业务指标体系", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-data.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
