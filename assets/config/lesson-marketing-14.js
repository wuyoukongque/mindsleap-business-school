(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing14 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第14课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第14课：你的营销诊断：用 AI 设计你的增长策略",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep47-marketing-workshop/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的营销诊断：用 AI 设计你的增长策略", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-14", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "出海营销：AI 如何降低全球化门槛",
                "body": "把出海最难的语言、文化和市场洞察拆开来看，再用 AI 建立更轻量的全球化营销打法。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：可口可乐的 AI 营销实验",
                "body": "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：一个直面消费者品牌如何用 AI 从零做到千万",
                "body": "从一个小团队品牌的成长路径里，看清楚 AI 怎样帮助品牌完成验证、冷启动、规模化增长和长期复购。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "你的营销诊断：用 AI 设计你的增长策略",
                "body": "用五步法诊断营销健康度、AARRR 漏斗和竞品策略，再设计一套可执行的 90 天增长计划。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "用五步法诊断营销健康度、AARRR 漏斗和竞品策略，再设计一套可执行的 90 天增长计划。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先诊断，再设计增长策略",
                "body": "不要一上来就投渠道或做内容，先看 CAC、LTV、转化率、留存率和 AARRR 漏斗到底哪里漏水。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "90 天增长计划必须聚焦一两个杠杆点",
                "body": "真正有效的增长策略，通常不是十件事一起做，而是选中最有杠杆效应的问题集中突破。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "用 AI 提升复盘频率和决策质量",
                "body": "每周把数据交给 AI 做趋势分析和异常提示，再由人决定哪些放大、哪些停止、哪些调整。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 14/14", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-14", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson14", audioSource: './assets/audio/marketing-ep47-marketing-workshop.mp3?v=20260513-marketing-14a', vttSrc: './assets/subtitles/marketing-ep47-marketing-workshop.vtt?v=20260513-marketing-14a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep47-marketing-workshop/slide_01.png",
            "label": "你的营销诊断：用 AI 设计你的增长策略",
            "caption": "这一节会帮助你系统理解：你的营销诊断：用 AI 设计你的增长策略"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_02.png",
            "label": "现状诊断",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_03.png",
            "label": "AARRR 漏斗分析",
            "caption": "把这些数据输入给 AI，加上这个提示词： \"我是一家做XXX的公司，以下是我的营销核心数据。 请帮我做一个营销健康度诊断，指出最大的问题和机会。"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_04.png",
            "label": "竞品营销分析",
            "caption": "推荐率是多少？ AI 会帮你找到漏斗中\"漏水\"最严重的环节。"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_05.png",
            "label": "增长策略设计",
            "caption": "提示词： \"基于以上的营销诊断、漏斗分析和竞品分析，请帮我设计一套90天的营销增长策略。 包括：（1）最应该优先解决的1 2个问题；（2）每个问题的具体行动方案；（3）预期效果和衡"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_06.png",
            "label": "执行计划与监控",
            "caption": "让 AI 帮你把策略分解成每周的执行任务。 比如第一周： 搭建 AI 内容生产流程 测试三个新的广告素材 优化新用户引导流程 第二周： 分析第一周的数据 放大效果好的素材 启动 K"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_07.png",
            "label": "AI 营销提示词模板",
            "caption": "要求：聚焦 1 2 个杠杆点、每个行动有明确的 KPI、总预算不超过 XX 万、充分利用 AI 工具。 \" 模板三，每周复盘： \"以下是本周的营销数据对比上周。"
        },
        {
            "file": "marketing-ep47-marketing-workshop/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.2599999999999998,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.26,
            "end": 3.42,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.42,
            "end": 7.96,
            "text": "今天是模块三市场营销的最后一期，也是我们的实战课。"
        },
        {
            "start": 7.96,
            "end": 12.94,
            "text": "我要手把手带你用 AI 给你的营销做一次全面的诊断，"
        },
        {
            "start": 12.94,
            "end": 15.14,
            "text": "然后设计一套增长策略。"
        },
        {
            "start": 15.14,
            "end": 18.94,
            "text": "过去十三期我们学了 STP、品牌定位、"
        },
        {
            "start": 18.94,
            "end": 21.74,
            "text": "4P/4C、消费者心理、增长飞轮、"
        },
        {
            "start": 21.74,
            "end": 25.22,
            "text": "AI 内容营销、个性化营销、营销自动化、"
        },
        {
            "start": 25.22,
            "end": 28.46,
            "text": "B2B 营销、出海营销，还看了两个案例。"
        },
        {
            "start": 28.46,
            "end": 31.5,
            "text": "理论武器都齐了，今天来打一场实战。"
        },
        {
            "start": 31.5,
            "end": 32.7,
            "text": "准备好了吗？"
        },
        {
            "start": 32.7,
            "end": 33.72,
            "text": "让我们开始。"
        },
        {
            "start": 33.72,
            "end": 35.34,
            "text": "第一步：现状诊断。"
        },
        {
            "start": 35.34,
            "end": 38.06,
            "text": "先搞清楚你目前的营销做得怎么样。"
        },
        {
            "start": 38.06,
            "end": 39.74,
            "text": "准备以下数据："
        },
        {
            "start": 39.74,
            "end": 42.32,
            "text": "- 月度/年度营收和增长率"
        },
        {
            "start": 42.32,
            "end": 46.26,
            "text": "- 获客渠道和各渠道的 CAC（获客成本）"
        },
        {
            "start": 46.26,
            "end": 50.24,
            "text": "- 转化率（从访客到注册、从注册到付费等）"
        },
        {
            "start": 50.24,
            "end": 52.96,
            "text": "- 留存率（月留存、季度留存）"
        },
        {
            "start": 52.96,
            "end": 55.7,
            "text": "- LTV（客户终身价值）"
        },
        {
            "start": 55.7,
            "end": 57.58,
            "text": "- LTV/CAC 比率"
        },
        {
            "start": 57.58,
            "end": 60.32,
            "text": "如果你有这些数据，太好了，直接用。"
        },
        {
            "start": 60.32,
            "end": 62.64,
            "text": "如果没有完整的数据，先估算。"
        },
        {
            "start": 62.64,
            "end": 64.32,
            "text": "估算总比没有强。"
        },
        {
            "start": 64.32,
            "end": 68.08,
            "text": "把这些数据输入给 AI，加上这个提示词："
        },
        {
            "start": 68.08,
            "end": 72.78,
            "text": "\"我是一家做XXX的公司，以下是我的营销核心数据。"
        },
        {
            "start": 72.78,
            "end": 78.24,
            "text": "请帮我做一个营销健康度诊断，指出最大的问题和机会。"
        },
        {
            "start": 78.24,
            "end": 81.12,
            "text": "跟同行业平均水平做对比。"
        },
        {
            "start": 81.12,
            "end": 81.54,
            "text": "\""
        },
        {
            "start": 81.54,
            "end": 83.36000000000001,
            "text": "AI 会给你一个初步诊断。"
        },
        {
            "start": 83.36000000000001,
            "end": 85.1,
            "text": "比如可能告诉你："
        },
        {
            "start": 85.1,
            "end": 88.26,
            "text": "- 你的 CAC 偏高——获客效率有问题"
        },
        {
            "start": 88.26,
            "end": 92.34,
            "text": "- 你的留存率偏低——产品粘性或用户体验有问题"
        },
        {
            "start": 92.34,
            "end": 97.42,
            "text": "- 你的 LTV/CAC 比率低于 3——商业模式的可持续性存疑"
        },
        {
            "start": 97.42,
            "end": 99.8,
            "text": "第二步：AARRR 漏斗分析。"
        },
        {
            "start": 99.8,
            "end": 105.3,
            "text": "把你的用户旅程按 AARRR 五步拆解，看每一步的转化率。"
        },
        {
            "start": 105.3,
            "end": 106.78,
            "text": "让 AI 帮你分析："
        },
        {
            "start": 106.78,
            "end": 109.44,
            "text": "获取：每个渠道带来多少访客？"
        },
        {
            "start": 109.44,
            "end": 110.76,
            "text": "成本是多少？"
        },
        {
            "start": 110.76,
            "end": 111.8,
            "text": "质量如何？"
        },
        {
            "start": 111.8,
            "end": 115.82,
            "text": "激活：新用户注册后有多少完成了关键动作？"
        },
        {
            "start": 115.82,
            "end": 118.3,
            "text": "Aha Moment 的到达率是多少？"
        },
        {
            "start": 118.3,
            "end": 121.56,
            "text": "留存：注册 7 天后还有多少人活跃？"
        },
        {
            "start": 121.56,
            "end": 122.68,
            "text": "30 天呢？"
        },
        {
            "start": 122.68,
            "end": 123.52000000000001,
            "text": "90 天呢？"
        },
        {
            "start": 123.52000000000001,
            "end": 126.92,
            "text": "收入：免费用户转付费的比率是多少？"
        },
        {
            "start": 126.92,
            "end": 128.24,
            "text": "客单价是多少？"
        },
        {
            "start": 128.24,
            "end": 131.24,
            "text": "推荐：有多少用户是通过推荐来的？"
        },
        {
            "start": 131.24,
            "end": 132.46,
            "text": "推荐率是多少？"
        },
        {
            "start": 132.46,
            "end": 135.94,
            "text": "AI 会帮你找到漏斗中\"漏水\"最严重的环节。"
        },
        {
            "start": 135.94,
            "end": 138.58,
            "text": "这个环节就是你应该优先优化的地方。"
        },
        {
            "start": 138.58,
            "end": 141.76,
            "text": "很多人犯的错误是拼命在获客端投钱，"
        },
        {
            "start": 141.76,
            "end": 144.86,
            "text": "但其实漏斗中间的流失才是最大的问题。"
        },
        {
            "start": 144.86,
            "end": 149.42,
            "text": "如果你的激活率只有 20%，你花再多钱获客也是浪费。"
        },
        {
            "start": 149.42,
            "end": 151.52,
            "text": "第三步：竞品营销分析。"
        },
        {
            "start": 151.52,
            "end": 155.98,
            "text": "让 AI 帮你分析三到五个核心竞品的营销策略。"
        },
        {
            "start": 155.98,
            "end": 157.22,
            "text": "你可以问 AI："
        },
        {
            "start": 157.22,
            "end": 159.56,
            "text": "\"请分析以下竞品的营销策略，"
        },
        {
            "start": 159.56,
            "end": 162.38,
            "text": "包括它们的定位、核心渠道、内容策略、"
        },
        {
            "start": 162.38,
            "end": 163.26,
            "text": "定价策略。"
        },
        {
            "start": 163.26,
            "end": 166.04,
            "text": "找出它们做得好的点和可能的弱点。"
        },
        {
            "start": 166.04,
            "end": 166.45999999999998,
            "text": "\""
        },
        {
            "start": 166.45999999999998,
            "end": 169.72,
            "text": "把竞品的官网、社交媒体、广告素材、"
        },
        {
            "start": 169.72,
            "end": 172.14,
            "text": "用户评价等信息提供给 AI。"
        },
        {
            "start": 172.14,
            "end": 175.4,
            "text": "它可以帮你做一个系统性的竞品营销对比。"
        },
        {
            "start": 175.4,
            "end": 176.66,
            "text": "重点看："
        },
        {
            "start": 176.66,
            "end": 179.02,
            "text": "- 它们的定位跟你有什么不同？"
        },
        {
            "start": 179.02,
            "end": 181.24,
            "text": "- 它们的主力获客渠道是什么？"
        },
        {
            "start": 181.24,
            "end": 184.28,
            "text": "- 它们的内容策略有什么值得学习的？"
        },
        {
            "start": 184.28,
            "end": 187.48,
            "text": "- 它们有什么明显的短板是你可以利用的？"
        },
        {
            "start": 187.48,
            "end": 189.62,
            "text": "第四步：增长策略设计。"
        },
        {
            "start": 189.62,
            "end": 193.66,
            "text": "基于前三步的诊断，现在来设计你的增长策略。"
        },
        {
            "start": 193.66,
            "end": 196.68,
            "text": "让 AI 帮你做，但你来做最终决策。"
        },
        {
            "start": 196.68,
            "end": 198.32,
            "text": "提示词："
        },
        {
            "start": 198.32,
            "end": 200.04000000000002,
            "text": "\"基于以上的营销诊断、"
        },
        {
            "start": 200.04000000000002,
            "end": 201.76,
            "text": "漏斗分析和竞品分析，"
        },
        {
            "start": 201.76,
            "end": 205.02,
            "text": "请帮我设计一套90天的营销增长策略。"
        },
        {
            "start": 205.02,
            "end": 205.76,
            "text": "包括："
        },
        {
            "start": 205.76,
            "end": 208.24,
            "text": "（1）最应该优先解决的1-2个问题；"
        },
        {
            "start": 208.24,
            "end": 211.0,
            "text": "（2）每个问题的具体行动方案；"
        },
        {
            "start": 211.0,
            "end": 213.38,
            "text": "（3）预期效果和衡量指标；"
        },
        {
            "start": 213.38,
            "end": 215.64,
            "text": "（4）需要的资源和预算。"
        },
        {
            "start": 215.64,
            "end": 216.05999999999997,
            "text": "\""
        },
        {
            "start": 216.05999999999997,
            "end": 218.4,
            "text": "好的增长策略应该符合这几个原则："
        },
        {
            "start": 218.4,
            "end": 219.44,
            "text": "一，聚焦。"
        },
        {
            "start": 219.44,
            "end": 221.36000000000004,
            "text": "不要同时做十件事。"
        },
        {
            "start": 221.36000000000004,
            "end": 225.04,
            "text": "选一到两个最有杠杆效应的方向，集中资源突破。"
        },
        {
            "start": 225.5,
            "end": 226.92,
            "text": "二，可衡量。"
        },
        {
            "start": 226.92,
            "end": 230.88,
            "text": "每个行动都有明确的目标指标和时间节点。"
        },
        {
            "start": 230.88,
            "end": 234.06,
            "text": "不能模糊地说\"提升品牌知名度\"，"
        },
        {
            "start": 234.06,
            "end": 240.18,
            "text": "要具体到\"在 90 天内把某渠道的 CAC 从 80 降到 50\"。"
        },
        {
            "start": 240.74,
            "end": 242.08,
            "text": "三，快速验证。"
        },
        {
            "start": 242.08,
            "end": 243.2,
            "text": "不要做大计划。"
        },
        {
            "start": 243.2,
            "end": 245.86,
            "text": "先小范围测试，看到效果再放量。"
        },
        {
            "start": 245.86,
            "end": 249.28,
            "text": "每个策略先花最小的成本验证有效性。"
        },
        {
            "start": 249.28,
            "end": 251.0,
            "text": "四，AI 原生。"
        },
        {
            "start": 251.0,
            "end": 253.82,
            "text": "在设计策略的时候就考虑 AI 的应用。"
        },
        {
            "start": 253.82,
            "end": 256.54,
            "text": "不是先设计策略再想怎么用 AI 提效，"
        },
        {
            "start": 256.54,
            "end": 260.14,
            "text": "而是从一开始就用 AI 的能力来设计策略。"
        },
        {
            "start": 260.14,
            "end": 262.68,
            "text": "第五步：执行计划与监控。"
        },
        {
            "start": 262.68,
            "end": 264.78,
            "text": "策略有了，怎么落地？"
        },
        {
            "start": 264.78,
            "end": 268.08,
            "text": "让 AI 帮你把策略分解成每周的执行任务。"
        },
        {
            "start": 268.08,
            "end": 268.96,
            "text": "比如第一周："
        },
        {
            "start": 268.96,
            "end": 270.86,
            "text": "- 搭建 AI 内容生产流程"
        },
        {
            "start": 270.86,
            "end": 272.94,
            "text": "- 测试三个新的广告素材"
        },
        {
            "start": 272.94,
            "end": 274.8,
            "text": "- 优化新用户引导流程"
        },
        {
            "start": 274.8,
            "end": 275.7,
            "text": "第二周："
        },
        {
            "start": 275.7,
            "end": 277.34,
            "text": "- 分析第一周的数据"
        },
        {
            "start": 277.34,
            "end": 278.92,
            "text": "- 放大效果好的素材"
        },
        {
            "start": 278.92,
            "end": 280.68,
            "text": "- 启动 KOC 合作计划"
        },
        {
            "start": 280.68,
            "end": 284.88,
            "text": "同时设置一个监控仪表盘，追踪核心指标的变化。"
        },
        {
            "start": 284.88,
            "end": 286.5,
            "text": "每周复盘一次："
        },
        {
            "start": 286.5,
            "end": 288.06,
            "text": "- 目标达成了多少？"
        },
        {
            "start": 288.06,
            "end": 289.74,
            "text": "- 哪些做法有效？"
        },
        {
            "start": 289.74,
            "end": 290.1,
            "text": "放大。"
        },
        {
            "start": 290.1,
            "end": 290.65000000000003,
            "text": "- 哪些做法无效？"
        },
        {
            "start": 291.88,
            "end": 293.52,
            "text": "停止或调整。"
        },
        {
            "start": 293.52,
            "end": 295.98,
            "text": "- 有什么新的发现或机会？"
        },
        {
            "start": 295.98,
            "end": 299.82,
            "text": "AI 可以帮你做每周的数据分析和复盘总结。"
        },
        {
            "start": 299.82,
            "end": 303.02,
            "text": "你把这周的数据给它，它帮你分析趋势、"
        },
        {
            "start": 303.02,
            "end": 305.46,
            "text": "标注异常、给出下周的建议。"
        },
        {
            "start": 305.46,
            "end": 308.9,
            "text": "最后给大家几个实用的 AI 营销提示词模板。"
        },
        {
            "start": 308.9,
            "end": 312.06,
            "text": "模板一——营销健康度诊断："
        },
        {
            "start": 312.06,
            "end": 316.52,
            "text": "\"我是一家做XXX的公司，目标客户是XXX。"
        },
        {
            "start": 316.52,
            "end": 318.9,
            "text": "以下是我的核心营销数据：。"
        },
        {
            "start": 318.9,
            "end": 321.6533333333333,
            "text": "请做一个营销健康度诊断，"
        },
        {
            "start": 321.6533333333333,
            "end": 325.16,
            "text": "指出三个最大的问题和三个最大的机会。"
        },
        {
            "start": 325.16,
            "end": 325.58000000000004,
            "text": "\""
        },
        {
            "start": 325.58000000000004,
            "end": 327.56,
            "text": "模板二——增长策略设计："
        },
        {
            "start": 327.56,
            "end": 330.56,
            "text": "\"基于以下营销数据和竞品分析，"
        },
        {
            "start": 330.56,
            "end": 333.16,
            "text": "请设计一套 90 天增长计划。"
        },
        {
            "start": 333.16,
            "end": 335.52,
            "text": "要求：聚焦 1-2 个杠杆点、"
        },
        {
            "start": 335.52,
            "end": 337.2,
            "text": "每个行动有明确的 KPI、"
        },
        {
            "start": 337.2,
            "end": 341.04,
            "text": "总预算不超过 XX 万、充分利用 AI 工具。"
        },
        {
            "start": 341.04,
            "end": 341.46000000000004,
            "text": "\""
        },
        {
            "start": 341.64,
            "end": 343.16,
            "text": "模板三——每周复盘："
        },
        {
            "start": 343.16,
            "end": 345.92,
            "text": "\"以下是本周的营销数据对比上周。"
        },
        {
            "start": 345.92,
            "end": 349.1,
            "text": "请分析：（1）哪些指标在改善？"
        },
        {
            "start": 349.1,
            "end": 350.5,
            "text": "原因是什么？"
        },
        {
            "start": 350.5,
            "end": 352.4,
            "text": "（2）哪些指标在恶化？"
        },
        {
            "start": 352.4,
            "end": 353.56,
            "text": "需要关注什么？"
        },
        {
            "start": 353.56,
            "end": 355.72,
            "text": "（3）下周应该重点做什么？"
        },
        {
            "start": 355.72,
            "end": 356.14000000000004,
            "text": "\""
        },
        {
            "start": 356.14000000000004,
            "end": 358.98,
            "text": "好，这就是模块三市场营销的最后一期。"
        },
        {
            "start": 358.98,
            "end": 362.68,
            "text": "回顾整个模块三：我们从 STP 和定位出发，"
        },
        {
            "start": 362.68,
            "end": 364.88,
            "text": "学了营销组合和消费者心理，"
        },
        {
            "start": 364.88,
            "end": 368.34,
            "text": "然后深入 AI 驱动增长的四大方向——内容营销、"
        },
        {
            "start": 368.34,
            "end": 370.36,
            "text": "个性化、营销自动化和 Agent。"
        },
        {
            "start": 370.36,
            "end": 374.0,
            "text": "接着看了 B2B 和出海两个专题，以及两个案例。"
        },
        {
            "start": 374.0,
            "end": 376.6,
            "text": "最后今天做了一次实战营销诊断。"
        },
        {
            "start": 376.6,
            "end": 379.32,
            "text": "营销的本质没有变——找到对的人、"
        },
        {
            "start": 379.32,
            "end": 381.82,
            "text": "用对的方式、传递对的价值。"
        },
        {
            "start": 381.82,
            "end": 385.3,
            "text": "但 AI 让你做这件事的效率提升了十倍。"
        },
        {
            "start": 385.3,
            "end": 389.98,
            "text": "从下一期开始，我们进入模块四：组织与领导力。"
        },
        {
            "start": 389.98,
            "end": 392.2,
            "text": "聊聊 AI 时代怎么带团队、"
        },
        {
            "start": 392.2,
            "end": 395.22,
            "text": "怎么管理数字员工、怎么领导组织变革。"
        },
        {
            "start": 395.22,
            "end": 397.58,
            "text": "我是 Lincoln，我们下期见。"
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
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "用五步法诊断营销健康度、AARRR 漏斗和竞品策略，再设计一套可执行的 90 天增长计划。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-14", coachSource: "./ai-coach.html?source=lesson-marketing-14" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的营销诊断：用 AI 设计你的增长策略的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的营销诊断：用 AI 设计你的增长策略", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
