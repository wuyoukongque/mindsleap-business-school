(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第10课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第10课：AI 数据分析工具实操：从 Excel 到对话式分析",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep95-ai-tools-guide/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 数据分析工具实操：从 Excel 到对话式分析", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-11.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的数据诊断：用 AI 搭建业务指标体系",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-data-11.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 10/11", "建议下一节：你的数据诊断：用 AI 搭建业务指标体系", '也可以先整理这一节'], nextHref: "./lesson-data-11.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-10", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson10", audioSource: './assets/audio/data-ep95-ai-tools-guide.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep95-ai-tools-guide.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep95-ai-tools-guide/slide_01.png",
            "label": "AI 数据分析工具实操：从 Excel 到对话式分析",
            "caption": "这一节会帮助你系统理解：AI 数据分析工具实操：从 Excel 到对话式分析"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_03.png",
            "label": "核心指标与判断",
            "caption": "现在的 AI 工具可以让你用自然语言做数据分析。 你不需要知道任何函数和公式，直接用中文告诉 AI 你想分析什么，AI 就帮你做了。"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_04.png",
            "label": "从看见到解释",
            "caption": "\" AI 会快速算出所有这些数字，并且给你一段文字总结。 趋势分析类的提问： \"帮我画一个月度销售额的趋势图。"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "\" \"三月份的下降是全国性的还是某些地区？ \" \"三月份的客户数量有变化吗？"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "比如：\"我们是一家做订阅制 SaaS 产品的公司。 这份数据是我们过去一年的客户数据。"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_07.png",
            "label": "本节行动提示",
            "caption": "如果你的数据包含客户的个人信息、财务数据等敏感信息，上传到外部 AI 工具需要注意数据安全和合规问题。 考虑脱敏处理或者使用企业级的私有化 AI 工具。"
        },
        {
            "file": "data-ep95-ai-tools-guide/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.44,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.56,
            "end": 3.679999999999997,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.679999999999997,
            "end": 5.14,
            "text": "今天是一期实操课。"
        },
        {
            "start": 5.14,
            "end": 9.38,
            "text": "前面讲了很多数据分析的理论和案例，今天来看怎么动手。"
        },
        {
            "start": 9.38,
            "end": 12.22,
            "text": "我会教你用 AI 工具做数据分析。"
        },
        {
            "start": 12.22,
            "end": 16.82,
            "text": "不需要写代码，不需要学统计学，用自然语言就能完成。"
        },
        {
            "start": 16.82,
            "end": 19.76,
            "text": "先讲传统的数据分析方式和它的痛点。"
        },
        {
            "start": 19.76,
            "end": 22.8,
            "text": "大多数管理者做数据分析用的是 Excel。"
        },
        {
            "start": 22.8,
            "end": 26.34,
            "text": "Excel 是一个伟大的工具，但它有几个明显的局限。"
        },
        {
            "start": 26.999999999999996,
            "end": 28.88,
            "text": "第一，数据量限制。"
        },
        {
            "start": 28.88,
            "end": 31.68,
            "text": "Excel 处理几万行数据还行，"
        },
        {
            "start": 31.68,
            "end": 33.68,
            "text": "几十万行就开始卡了，"
        },
        {
            "start": 33.68,
            "end": 35.46,
            "text": "百万行以上基本用不了。"
        },
        {
            "start": 35.46,
            "end": 37.16,
            "text": "第二，分析能力有限。"
        },
        {
            "start": 37.16,
            "end": 39.94,
            "text": "做个求和、平均值、做个透视表还行。"
        },
        {
            "start": 39.94,
            "end": 41.8,
            "text": "但稍微复杂一点的分析，"
        },
        {
            "start": 41.8,
            "end": 43.94,
            "text": "比如时间序列预测、聚类分析、"
        },
        {
            "start": 43.94,
            "end": 46.4,
            "text": "相关性分析，Excel 就很难做了。"
        },
        {
            "start": 46.4,
            "end": 48.32,
            "text": "第三，可视化能力一般。"
        },
        {
            "start": 48.32,
            "end": 52.14,
            "text": "Excel 的图表功能有，但不够灵活、不够美观。"
        },
        {
            "start": 52.14,
            "end": 55.04,
            "text": "第四，也是最大的痛点：门槛。"
        },
        {
            "start": 55.04,
            "end": 59.52,
            "text": "即使是 Excel，很多管理者也只会用百分之二十的功能。"
        },
        {
            "start": 59.52,
            "end": 62.26,
            "text": "数据透视表、条件函数、宏，"
        },
        {
            "start": 62.26,
            "end": 64.12,
            "text": "这些稍微高级一点的功能，"
        },
        {
            "start": 64.12,
            "end": 65.5,
            "text": "很多人不会用。"
        },
        {
            "start": 65.5,
            "end": 68.38,
            "text": "AI 数据分析工具彻底改变了这个局面。"
        },
        {
            "start": 68.88,
            "end": 72.84,
            "text": "现在的 AI 工具可以让你用自然语言做数据分析。"
        },
        {
            "start": 72.84,
            "end": 75.5,
            "text": "你不需要知道任何函数和公式，"
        },
        {
            "start": 75.5,
            "end": 78.36,
            "text": "直接用中文告诉 AI 你想分析什么，"
        },
        {
            "start": 78.36,
            "end": 80.1,
            "text": "AI 就帮你做了。"
        },
        {
            "start": 80.1,
            "end": 82.46,
            "text": "我来演示一个完整的分析流程。"
        },
        {
            "start": 82.46,
            "end": 84.12,
            "text": "第一步：准备数据。"
        },
        {
            "start": 84.12,
            "end": 86.86,
            "text": "你需要把你的数据整理成一个表格。"
        },
        {
            "start": 86.86,
            "end": 90.78,
            "text": "可以是 Excel 文件，也可以是 CSV 文件。"
        },
        {
            "start": 90.78,
            "end": 94.18,
            "text": "确保几件事：第一列有清晰的列标题。"
        },
        {
            "start": 94.18,
            "end": 98.32,
            "text": "比如\"日期\"\"产品名称\"\"销售额\"\"客户类型\"。"
        },
        {
            "start": 98.32,
            "end": 99.78,
            "text": "数据格式统一。"
        },
        {
            "start": 99.78,
            "end": 103.58,
            "text": "日期都是同一种格式，数字不要混入文字。"
        },
        {
            "start": 103.58,
            "end": 105.32,
            "text": "数据不需要完美。"
        },
        {
            "start": 105.32,
            "end": 110.2,
            "text": "如果有一些缺失值或者格式小问题，AI 通常能自动处理。"
        },
        {
            "start": 110.2,
            "end": 112.16,
            "text": "第二步：上传数据给 AI。"
        },
        {
            "start": 112.16,
            "end": 116.9,
            "text": "现在主流的 AI 工具比如 Kimi、通义千问都支持上传文件。"
        },
        {
            "start": 116.9,
            "end": 120.42,
            "text": "你把 Excel 或 CSV 文件上传上去就行。"
        },
        {
            "start": 120.42,
            "end": 122.44,
            "text": "第三步：用自然语言提问。"
        },
        {
            "start": 122.44,
            "end": 124.0,
            "text": "这是最有意思的部分。"
        },
        {
            "start": 124.0,
            "end": 128.38,
            "text": "你直接用中文问 AI 问题，AI 给你分析结果。"
        },
        {
            "start": 128.38,
            "end": 130.74,
            "text": "我来举几个实际的提问示例。"
        },
        {
            "start": 130.74,
            "end": 132.48,
            "text": "基础分析类的提问："
        },
        {
            "start": 132.48,
            "end": 135.58,
            "text": "\"帮我看看这份销售数据的整体情况。"
        },
        {
            "start": 135.58,
            "end": 137.12,
            "text": "总销售额是多少？"
        },
        {
            "start": 137.12,
            "end": 138.42,
            "text": "平均客单价是多少？"
        },
        {
            "start": 138.42,
            "end": 139.96,
            "text": "哪个月的销售额最高？"
        },
        {
            "start": 139.96,
            "end": 140.38,
            "text": "\""
        },
        {
            "start": 140.38,
            "end": 145.1,
            "text": "AI 会快速算出所有这些数字，并且给你一段文字总结。"
        },
        {
            "start": 145.1,
            "end": 146.78,
            "text": "趋势分析类的提问："
        },
        {
            "start": 146.78,
            "end": 149.32,
            "text": "\"帮我画一个月度销售额的趋势图。"
        },
        {
            "start": 149.32,
            "end": 153.14,
            "text": "标注出增长最快的月份和下降最快的月份。"
        },
        {
            "start": 153.14,
            "end": 153.55999999999997,
            "text": "\""
        },
        {
            "start": 153.55999999999997,
            "end": 157.12,
            "text": "AI 会生成一张折线图，并且标注出关键的拐点。"
        },
        {
            "start": 157.12,
            "end": 158.92,
            "text": "对比分析类的提问："
        },
        {
            "start": 158.92,
            "end": 161.74,
            "text": "\"帮我对比不同产品线的销售表现。"
        },
        {
            "start": 161.74,
            "end": 163.6,
            "text": "哪个产品线增长最快？"
        },
        {
            "start": 163.6,
            "end": 164.76,
            "text": "哪个在下降？"
        },
        {
            "start": 164.76,
            "end": 165.17999999999998,
            "text": "\""
        },
        {
            "start": 165.17999999999998,
            "end": 168.1,
            "text": "AI 会生成对比图表，并给出文字分析。"
        },
        {
            "start": 168.6,
            "end": 170.02,
            "text": "深度分析类的提问："
        },
        {
            "start": 170.02,
            "end": 172.46,
            "text": "\"帮我分析客户留存的情况。"
        },
        {
            "start": 172.46,
            "end": 174.62,
            "text": "新客户的复购率是多少？"
        },
        {
            "start": 174.62,
            "end": 177.56,
            "text": "不同渠道来的客户复购率有什么差异？"
        },
        {
            "start": 177.56,
            "end": 177.98,
            "text": "\""
        },
        {
            "start": 177.98,
            "end": 179.46,
            "text": "\"帮我做一个客户分群。"
        },
        {
            "start": 179.46,
            "end": 184.3,
            "text": "按照购买频率和消费金额，把客户分成几个群体。"
        },
        {
            "start": 184.3,
            "end": 185.76,
            "text": "每个群体有什么特征？"
        },
        {
            "start": 185.76,
            "end": 186.17999999999998,
            "text": "\""
        },
        {
            "start": 186.17999999999998,
            "end": 188.3,
            "text": "\"帮我预测下个月的销售额。"
        },
        {
            "start": 188.3,
            "end": 191.5,
            "text": "基于过去十二个月的数据做趋势预测。"
        },
        {
            "start": 191.5,
            "end": 191.92,
            "text": "\""
        },
        {
            "start": 191.92,
            "end": 195.94,
            "text": "这些在传统工具里需要专业技能才能完成的分析，"
        },
        {
            "start": 195.94,
            "end": 199.06,
            "text": "现在一句话就能让 AI 帮你做。"
        },
        {
            "start": 199.06,
            "end": 201.1,
            "text": "第四步：追问和深挖。"
        },
        {
            "start": 201.1,
            "end": 204.7,
            "text": "AI 给你的第一个分析结果往往是一个起点。"
        },
        {
            "start": 204.7,
            "end": 206.92,
            "text": "你可以基于结果继续追问。"
        },
        {
            "start": 206.92,
            "end": 211.31999999999994,
            "text": "比如 AI 告诉你\"三月份的销售额下降了百分之十五\"。"
        },
        {
            "start": 211.32,
            "end": 212.16,
            "text": "你可以追问："
        },
        {
            "start": 212.16,
            "end": 214.9,
            "text": "\"三月份哪个产品线下降最多？"
        },
        {
            "start": 214.9,
            "end": 215.32,
            "text": "\""
        },
        {
            "start": 215.32,
            "end": 217.98,
            "text": "\"三月份的下降是全国性的还是某些地区？"
        },
        {
            "start": 217.98,
            "end": 218.39999999999998,
            "text": "\""
        },
        {
            "start": 218.39999999999998,
            "end": 220.32,
            "text": "\"三月份的客户数量有变化吗？"
        },
        {
            "start": 220.32,
            "end": 222.2,
            "text": "还是客单价下降了？"
        },
        {
            "start": 222.2,
            "end": 222.61999999999998,
            "text": "\""
        },
        {
            "start": 222.61999999999998,
            "end": 226.92,
            "text": "一步一步追问下去，AI 帮你层层深入，找到问题的根源。"
        },
        {
            "start": 226.92,
            "end": 229.74,
            "text": "这就像跟一个数据分析师对话一样。"
        },
        {
            "start": 229.74,
            "end": 232.52,
            "text": "你问问题，它分析数据给你答案。"
        },
        {
            "start": 232.52,
            "end": 234.92,
            "text": "你根据答案再问更深的问题。"
        },
        {
            "start": 235.33999999999997,
            "end": 238.2,
            "text": "第五步：生成报告和可视化。"
        },
        {
            "start": 238.2,
            "end": 241.18,
            "text": "分析完了，你可以让 AI 帮你生成一份报告。"
        },
        {
            "start": 241.18,
            "end": 244.22,
            "text": "\"请帮我把刚才的分析整理成一份简报。"
        },
        {
            "start": 244.22,
            "end": 247.68,
            "text": "包括关键发现、趋势图表和行动建议。"
        },
        {
            "start": 247.68,
            "end": 248.1,
            "text": "\""
        },
        {
            "start": 248.1,
            "end": 252.6,
            "text": "AI 会生成一份结构清晰的分析报告，包含文字说明和图表。"
        },
        {
            "start": 252.6,
            "end": 255.08,
            "text": "你可以直接拿去在会议上用。"
        },
        {
            "start": 255.08,
            "end": 256.74,
            "text": "给大家几个实用的提问技巧。"
        },
        {
            "start": 256.74,
            "end": 259.92,
            "text": "第一个技巧：先让 AI 了解你的数据。"
        },
        {
            "start": 259.92,
            "end": 264.74,
            "text": "上传数据之后，先问：\"请帮我看看这份数据的结构。"
        },
        {
            "start": 264.74,
            "end": 266.42,
            "text": "有多少行多少列？"
        },
        {
            "start": 266.42,
            "end": 268.06,
            "text": "每一列的含义是什么？"
        },
        {
            "start": 268.06,
            "end": 269.5,
            "text": "有没有缺失值？"
        },
        {
            "start": 269.5,
            "end": 271.94,
            "text": "数据的时间跨度是多少？"
        },
        {
            "start": 271.94,
            "end": 272.36,
            "text": "\""
        },
        {
            "start": 272.36,
            "end": 276.62,
            "text": "让 AI 先对数据有一个全面的了解，后面的分析会更准确。"
        },
        {
            "start": 276.62,
            "end": 280.12,
            "text": "第二个技巧：告诉 AI 你的业务背景。"
        },
        {
            "start": 280.12,
            "end": 281.78,
            "text": "AI 不了解你的业务。"
        },
        {
            "start": 281.78,
            "end": 284.28,
            "text": "你可以在提问的时候加上背景信息。"
        },
        {
            "start": 284.28,
            "end": 287.56,
            "text": "比如：\"我们是一家做订阅制 SaaS 产品的公司。"
        },
        {
            "start": 287.56,
            "end": 290.92,
            "text": "这份数据是我们过去一年的客户数据。"
        },
        {
            "start": 290.92,
            "end": 293.88,
            "text": "请帮我分析客户留存和流失的情况。"
        },
        {
            "start": 293.88,
            "end": 294.3,
            "text": "\""
        },
        {
            "start": 294.3,
            "end": 297.44,
            "text": "有了业务背景，AI 的分析会更有针对性。"
        },
        {
            "start": 297.44,
            "end": 300.9,
            "text": "第三个技巧：要求 AI 解释它的分析过程。"
        },
        {
            "start": 300.9,
            "end": 303.68,
            "text": "如果你对 AI 的结论有疑问，可以问："
        },
        {
            "start": 303.68,
            "end": 305.4,
            "text": "\"你是怎么得出这个结论的？"
        },
        {
            "start": 305.4,
            "end": 306.74,
            "text": "用了什么分析方法？"
        },
        {
            "start": 306.74,
            "end": 310.66,
            "text": "\"AI 会解释它的分析逻辑，帮你判断结论是否可靠。"
        },
        {
            "start": 310.66,
            "end": 313.66,
            "text": "第四个技巧：让 AI 给出行动建议。"
        },
        {
            "start": 313.66,
            "end": 317.34,
            "text": "不只是让 AI 分析数据，还要让它给出建议。"
        },
        {
            "start": 317.34,
            "end": 320.64,
            "text": "\"基于这些分析，你认为我们应该优先做什么？"
        },
        {
            "start": 320.64,
            "end": 322.5,
            "text": "给我三个具体的行动建议。"
        },
        {
            "start": 322.5,
            "end": 322.92,
            "text": "\""
        },
        {
            "start": 322.92,
            "end": 325.52,
            "text": "最后讲一下 AI 数据分析的局限性。"
        },
        {
            "start": 326.06,
            "end": 328.92,
            "text": "第一，数据质量决定分析质量。"
        },
        {
            "start": 328.92,
            "end": 332.74,
            "text": "AI 再强大，如果你的数据本身有问题，"
        },
        {
            "start": 332.74,
            "end": 334.68,
            "text": "错误、缺失、不一致，"
        },
        {
            "start": 334.68,
            "end": 336.82,
            "text": "分析结果就不可靠。"
        },
        {
            "start": 336.82,
            "end": 339.32,
            "text": "第二，AI 可能会\"编造\"分析。"
        },
        {
            "start": 339.32,
            "end": 341.68,
            "text": "特别是当数据不够充分的时候，"
        },
        {
            "start": 341.68,
            "end": 346.42,
            "text": "AI 有时候会给出看似合理但实际上没有数据支撑的结论。"
        },
        {
            "start": 346.42,
            "end": 348.8,
            "text": "所以你要养成核实的习惯。"
        },
        {
            "start": 348.8,
            "end": 353.6,
            "text": "对关键的数字和结论，让 AI 展示原始数据来验证。"
        },
        {
            "start": 353.6,
            "end": 356.22,
            "text": "第三，隐私和安全。"
        },
        {
            "start": 356.22,
            "end": 359.38,
            "text": "如果你的数据包含客户的个人信息、"
        },
        {
            "start": 359.38,
            "end": 361.32,
            "text": "财务数据等敏感信息，"
        },
        {
            "start": 361.32,
            "end": 365.66,
            "text": "上传到外部 AI 工具需要注意数据安全和合规问题。"
        },
        {
            "start": 365.66,
            "end": 370.72,
            "text": "考虑脱敏处理或者使用企业级的私有化 AI 工具。"
        },
        {
            "start": 370.72,
            "end": 372.2,
            "text": "好，总结一下。"
        },
        {
            "start": 372.2,
            "end": 375.24,
            "text": "AI 数据分析的五步流程：准备数据、"
        },
        {
            "start": 375.24,
            "end": 378.14,
            "text": "上传 AI 工具、用自然语言提问、"
        },
        {
            "start": 378.14,
            "end": 380.08,
            "text": "追问深挖、生成报告。"
        },
        {
            "start": 380.08,
            "end": 383.22,
            "text": "四个提问技巧：先了解数据结构、"
        },
        {
            "start": 383.22,
            "end": 386.04,
            "text": "告诉业务背景、要求解释过程、"
        },
        {
            "start": 386.04,
            "end": 387.7,
            "text": "让 AI 给行动建议。"
        },
        {
            "start": 387.7,
            "end": 392.08,
            "text": "注意三个局限：数据质量、AI 编造风险、数据安全。"
        },
        {
            "start": 392.08,
            "end": 397.26,
            "text": "下一期是模块七的最后一期：用 AI 搭建你的业务指标体系。"
        },
        {
            "start": 397.26,
            "end": 399.48,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 399.48,
            "end": 402.36,
            "text": "1. AI 数据分析五步："
        },
        {
            "start": 402.36,
            "end": 407.78,
            "text": "准备数据 → 上传 → 自然语言提问 → 追问深挖 → 生成报告"
        },
        {
            "start": 407.78,
            "end": 410.96,
            "text": "2. 四个提问技巧：先了解结构、"
        },
        {
            "start": 410.96,
            "end": 413.96,
            "text": "说业务背景、要求解释、要行动建议"
        },
        {
            "start": 413.96,
            "end": 419.0,
            "text": "3. 不需要写代码和公式，自然语言即可完成专业分析"
        },
        {
            "start": 419.0,
            "end": 424.44,
            "text": "4. 注意局限：数据质量、AI 编造风险、数据隐私安全"
        },
        {
            "start": 424.44,
            "end": 427.22,
            "text": "1. 找一份你手头的业务数据，"
        },
        {
            "start": 427.22,
            "end": 430.18,
            "text": "试着上传到 AI 工具中做一次分析"
        },
        {
            "start": 430.18,
            "end": 434.58,
            "text": "2. 你最想用 AI 回答的三个业务数据问题是什么？"
        },
        {
            "start": 434.58,
            "end": 436.96,
            "text": "3. 你的数据敏感度如何？"
        },
        {
            "start": 436.96,
            "end": 439.74,
            "text": "能否直接上传到外部 AI 工具？"
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
], navigation: { nextLessonUrl: "./lesson-data-11.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-11.html?entry={entry}", secondaryHref: "./lesson-data-11.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-10", coachSource: "./ai-coach.html?source=lesson-data-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 数据分析工具实操：从 Excel 到对话式分析的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 数据分析工具实操：从 Excel 到对话式分析", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-11.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
