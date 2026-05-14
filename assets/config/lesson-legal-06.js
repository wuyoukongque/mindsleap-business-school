(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第6课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第6课：AI 伦理与算法治理：负责任地使用 AI",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep102-ai-ethics/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 伦理与算法治理：负责任地使用 AI", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-07.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "公司法基础：企业设立与法人治理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "合同法要点：签合同前必知的事",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "知识产权保护：AI 时代的 IP 新问题",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "数据隐私与合规：GDPR 与个人信息保护法",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 法规全景：全球 AI 监管趋势",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 伦理与算法治理：负责任地使用 AI",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 8,
                "title": "劳动法：AI 替代岗位的法律与伦理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：AI 公司的法律踩坑实录",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "法律工具箱：AI 时代管理者必备的法律清单",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-legal-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先识别风险，再设计动作",
                "body": "法律问题不能只靠事后救火，管理者要在业务设计、合同、数据和组织动作之前先看到风险。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "合规不是拖慢业务，而是保护业务可持续",
                "body": "好的合规框架能让企业少踩坑、少返工，也让团队在关键决策上更有边界感。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 放大效率，也放大治理责任",
                "body": "当 AI 进入内容、数据、招聘、客服和决策流程，管理者必须同步建立新的责任边界。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 6/10", "建议下一节：AI 风险管理框架：识别和防控 AI 带来的新风险", '也可以先整理这一节'], nextHref: "./lesson-legal-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-06", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson6", audioSource: './assets/audio/legal-ep102-ai-ethics.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep102-ai-ethics.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep102-ai-ethics/slide_01.png",
            "label": "AI 伦理与算法治理：负责任地使用 AI",
            "caption": "这一节会帮助你系统理解：AI 伦理与算法治理：负责任地使用 AI"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "第一种，训练数据偏见。 数据本身就不均衡或者包含历史歧视。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_04.png",
            "label": "常见误区与代价",
            "caption": "即使模型是黑箱的，也可以用后处理的方法生成解释。 \"您的贷款申请被拒绝，主要原因是：信用历史较短、负债比率较高。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "第二，你要定期检测你的 AI 系统在不同群体之间的表现差异。 第三，如果发现不公平，要有修正的机制。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "一，公平性。 我们的 AI 系统不歧视任何群体。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_07.png",
            "label": "本节行动提示",
            "caption": "因为不管你做了多少预防工作，AI 系统在实际运行中总会出现意想不到的问题。 有了反馈机制，你就能快速发现和修正。"
        },
        {
            "file": "legal-ep102-ai-ethics/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.32,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.32,
            "end": 3.54,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.959999999999998,
            "end": 5.640000000000001,
            "text": "今天聊 AI 伦理。"
        },
        {
            "start": 5.640000000000001,
            "end": 7.16,
            "text": "法律告诉你什么不能做。"
        },
        {
            "start": 7.16,
            "end": 9.64,
            "text": "伦理告诉你什么应该做、什么不应该做，"
        },
        {
            "start": 9.64,
            "end": 11.36,
            "text": "即使法律没有明确禁止。"
        },
        {
            "start": 11.36,
            "end": 12.86,
            "text": "负责任地使用 AI，"
        },
        {
            "start": 12.86,
            "end": 14.8,
            "text": "不只是为了避免法律风险，"
        },
        {
            "start": 14.8,
            "end": 17.98,
            "text": "更是为了赢得客户信任、建立长期品牌。"
        },
        {
            "start": 17.98,
            "end": 20.46,
            "text": "先讲 AI 伦理的四个核心议题。"
        },
        {
            "start": 20.46,
            "end": 22.42,
            "text": "第一个议题：AI 偏见。"
        },
        {
            "start": 22.42,
            "end": 25.12,
            "text": "AI 模型是从数据中学习的。"
        },
        {
            "start": 25.12,
            "end": 29.1,
            "text": "如果训练数据中包含了偏见，AI 就会\"学会\"这些偏见。"
        },
        {
            "start": 29.1,
            "end": 30.7,
            "text": "一个经典的案例。"
        },
        {
            "start": 30.7,
            "end": 35.3,
            "text": "某家大型科技公司曾经用 AI 来筛选简历。"
        },
        {
            "start": 35.3,
            "end": 40.52,
            "text": "AI 从过去十年的招聘数据中学习\"什么样的候选人更好\"。"
        },
        {
            "start": 40.52,
            "end": 44.44,
            "text": "结果发现，AI 系统性地给女性候选人打低分。"
        },
        {
            "start": 44.44,
            "end": 45.38,
            "text": "为什么？"
        },
        {
            "start": 45.54,
            "end": 48.82,
            "text": "因为过去十年这个行业以男性为主，"
        },
        {
            "start": 48.82,
            "end": 52.18,
            "text": "历史数据中被录用的大部分是男性。"
        },
        {
            "start": 52.18,
            "end": 55.8,
            "text": "AI 学到了\"男性候选人更好\"这个错误的规律。"
        },
        {
            "start": 55.8,
            "end": 58.24,
            "text": "AI 偏见的来源有几种。"
        },
        {
            "start": 58.24,
            "end": 60.26,
            "text": "第一种，训练数据偏见。"
        },
        {
            "start": 60.26,
            "end": 63.88,
            "text": "数据本身就不均衡或者包含历史歧视。"
        },
        {
            "start": 63.88,
            "end": 65.8,
            "text": "第二种，标注偏见。"
        },
        {
            "start": 65.8,
            "end": 68.98,
            "text": "数据标注者的主观判断带入了偏见。"
        },
        {
            "start": 68.98,
            "end": 71.06,
            "text": "第三种，设计偏见。"
        },
        {
            "start": 71.06,
            "end": 74.94,
            "text": "算法的设计本身就对某些群体不公平。"
        },
        {
            "start": 75.58000000000001,
            "end": 77.5,
            "text": "AI 偏见的影响很严重。"
        },
        {
            "start": 77.5,
            "end": 79.9,
            "text": "在招聘中歧视某些群体、"
        },
        {
            "start": 79.9,
            "end": 82.36,
            "text": "在信贷中对某些社区不公平、"
        },
        {
            "start": 82.36,
            "end": 85.96,
            "text": "在医疗中对某些族群的诊断准确率更低。"
        },
        {
            "start": 85.96,
            "end": 89.02,
            "text": "第二个议题：算法透明度和可解释性。"
        },
        {
            "start": 89.02,
            "end": 90.58,
            "text": "AI 做出了一个决定："
        },
        {
            "start": 90.58,
            "end": 92.06,
            "text": "拒绝了你的贷款申请、"
        },
        {
            "start": 92.3,
            "end": 94.42,
            "text": "给你的保险定了一个更高的价格、"
        },
        {
            "start": 94.46,
            "end": 96.38,
            "text": "把你的简历筛掉了。"
        },
        {
            "start": 96.38,
            "end": 97.66,
            "text": "你有权知道为什么。"
        },
        {
            "start": 97.66,
            "end": 100.22,
            "text": "但很多 AI 模型是\"黑箱\"。"
        },
        {
            "start": 100.52,
            "end": 105.14,
            "text": "输入数据、输出结果，中间的过程连开发者都不完全理解。"
        },
        {
            "start": 105.14,
            "end": 106.94,
            "text": "这就导致了透明度的问题。"
        },
        {
            "start": 107.1,
            "end": 107.68,
            "text": "怎么解决？"
        },
        {
            "start": 107.68,
            "end": 110.56,
            "text": "第一，使用可解释的 AI 模型。"
        },
        {
            "start": 110.56,
            "end": 112.72,
            "text": "在某些高风险场景中，"
        },
        {
            "start": 112.72,
            "end": 115.22,
            "text": "优先使用那些输出可以解释的模型，"
        },
        {
            "start": 115.22,
            "end": 118.5,
            "text": "而不是追求最高的准确率但不可解释。"
        },
        {
            "start": 118.88000000000001,
            "end": 120.38,
            "text": "第二，提供决策解释。"
        },
        {
            "start": 120.38,
            "end": 124.14,
            "text": "即使模型是黑箱的，也可以用后处理的方法生成解释。"
        },
        {
            "start": 124.14,
            "end": 126.88,
            "text": "\"您的贷款申请被拒绝，主要原因是："
        },
        {
            "start": 126.88,
            "end": 129.0,
            "text": "信用历史较短、负债比率较高。"
        },
        {
            "start": 129.0,
            "end": 131.48,
            "text": "\"给用户一个可以理解的解释。"
        },
        {
            "start": 131.48,
            "end": 133.28,
            "text": "第三，人工审核。"
        },
        {
            "start": 133.28,
            "end": 136.58,
            "text": "在高风险决策中保留人工审核的环节。"
        },
        {
            "start": 136.58,
            "end": 139.22,
            "text": "AI 给出建议，人做最终决定。"
        },
        {
            "start": 139.22,
            "end": 141.32,
            "text": "第三个议题：AI 公平性。"
        },
        {
            "start": 141.32,
            "end": 144.42,
            "text": "公平性和偏见相关，但不完全一样。"
        },
        {
            "start": 144.42,
            "end": 148.54,
            "text": "偏见是数据层面的问题，公平性是结果层面的问题。"
        },
        {
            "start": 148.54,
            "end": 149.62,
            "text": "什么叫\"公平\"？"
        },
        {
            "start": 149.62,
            "end": 151.32,
            "text": "这个问题比想象中复杂。"
        },
        {
            "start": 151.32,
            "end": 153.54,
            "text": "比如一个 AI 信贷模型。"
        },
        {
            "start": 153.54,
            "end": 156.18,
            "text": "\"公平\"是指：每个群体的批准率一样？"
        },
        {
            "start": 156.18,
            "end": 159.66,
            "text": "还是在同等条件下每个群体的批准率一样？"
        },
        {
            "start": 159.66,
            "end": 163.0,
            "text": "还是最终的违约率在每个群体中一样？"
        },
        {
            "start": 163.0,
            "end": 167.0,
            "text": "这几种\"公平\"的定义在数学上是不可能同时满足的。"
        },
        {
            "start": 167.0,
            "end": 168.46,
            "text": "你必须选择一种。"
        },
        {
            "start": 168.46,
            "end": 171.54,
            "text": "作为管理者，你不需要深入理解数学。"
        },
        {
            "start": 171.54,
            "end": 173.36,
            "text": "但你需要知道：第一，"
        },
        {
            "start": 173.36,
            "end": 176.92,
            "text": "你要明确你的 AI 系统应该追求哪种\"公平\"。"
        },
        {
            "start": 176.92,
            "end": 177.64,
            "text": "第二，"
        },
        {
            "start": 177.64,
            "end": 182.26,
            "text": "你要定期检测你的 AI 系统在不同群体之间的表现差异。"
        },
        {
            "start": 183.06,
            "end": 186.54,
            "text": "第三，如果发现不公平，要有修正的机制。"
        },
        {
            "start": 186.54,
            "end": 189.48,
            "text": "第四个议题：AI 的责任归属。"
        },
        {
            "start": 189.48,
            "end": 192.04,
            "text": "当 AI 犯了错，谁负责？"
        },
        {
            "start": 192.04,
            "end": 195.02,
            "text": "自动驾驶出了事故，是车主的责任、"
        },
        {
            "start": 195.18,
            "end": 198.84,
            "text": "还是汽车公司的、还是 AI 算法开发者的？"
        },
        {
            "start": 198.84,
            "end": 201.62,
            "text": "AI 医疗诊断出了误诊，谁担责？"
        },
        {
            "start": 202.1,
            "end": 205.74,
            "text": "目前法律上对 AI 责任归属还没有完全明确。"
        },
        {
            "start": 205.74,
            "end": 208.76,
            "text": "但有一个基本原则：谁部署、谁使用 AI，"
        },
        {
            "start": 208.76,
            "end": 210.91999999999996,
            "text": "谁就有相应的注意义务。"
        },
        {
            "start": 210.92,
            "end": 212.1,
            "text": "也就是说，"
        },
        {
            "start": 212.1,
            "end": 214.5,
            "text": "如果你在你的业务中使用了 AI，"
        },
        {
            "start": 214.5,
            "end": 217.78,
            "text": "你就有责任确保 AI 的输出是合理的、"
        },
        {
            "start": 217.78,
            "end": 218.78,
            "text": "安全的。"
        },
        {
            "start": 218.78,
            "end": 221.62,
            "text": "你不能说\"这是 AI 做的决定，跟我没关系\"。"
        },
        {
            "start": 221.62,
            "end": 224.08,
            "text": "好，讲完了四个核心议题。"
        },
        {
            "start": 224.08,
            "end": 228.08,
            "text": "来看怎么在企业中建立 AI 伦理的管理框架。"
        },
        {
            "start": 228.08,
            "end": 230.44,
            "text": "我给你一个实用的四步框架。"
        },
        {
            "start": 230.44,
            "end": 232.92,
            "text": "第一步：制定 AI 使用原则。"
        },
        {
            "start": 232.92,
            "end": 236.24,
            "text": "你的企业在使用 AI 时遵循什么原则？"
        },
        {
            "start": 236.24,
            "end": 238.4,
            "text": "建议至少包括四条。"
        },
        {
            "start": 238.4,
            "end": 239.72,
            "text": "一，公平性。"
        },
        {
            "start": 239.72,
            "end": 242.56,
            "text": "我们的 AI 系统不歧视任何群体。"
        },
        {
            "start": 242.56,
            "end": 243.76,
            "text": "二，透明度。"
        },
        {
            "start": 243.76,
            "end": 246.6,
            "text": "我们的 AI 决策可以被解释和审计。"
        },
        {
            "start": 246.6,
            "end": 248.06,
            "text": "三，隐私保护。"
        },
        {
            "start": 248.06,
            "end": 251.06,
            "text": "我们的 AI 系统保护用户的数据隐私。"
        },
        {
            "start": 251.06,
            "end": 252.96,
            "text": "四，人类主权。"
        },
        {
            "start": 252.96,
            "end": 256.32,
            "text": "在关键决策中，人有最终的决定权。"
        },
        {
            "start": 256.32,
            "end": 258.38,
            "text": "第二步：风险评估。"
        },
        {
            "start": 258.96,
            "end": 262.44,
            "text": "对你企业中使用的每一个 AI 系统做风险评估。"
        },
        {
            "start": 262.44,
            "end": 264.38,
            "text": "这个 AI 做的是什么决策？"
        },
        {
            "start": 264.38,
            "end": 265.58,
            "text": "影响谁？"
        },
        {
            "start": 265.58,
            "end": 267.54,
            "text": "如果出错了后果有多严重？"
        },
        {
            "start": 267.54,
            "end": 270.1,
            "text": "风险高的系统需要更严格的管理。"
        },
        {
            "start": 270.1,
            "end": 271.7,
            "text": "第三步：定期审计。"
        },
        {
            "start": 271.7,
            "end": 274.7,
            "text": "定期检查你的 AI 系统的表现。"
        },
        {
            "start": 274.7,
            "end": 276.08,
            "text": "有没有偏见？"
        },
        {
            "start": 276.08,
            "end": 278.62,
            "text": "在不同群体间是否公平？"
        },
        {
            "start": 278.62,
            "end": 281.76,
            "text": "准确率是否在可接受的范围内？"
        },
        {
            "start": 281.76,
            "end": 284.12,
            "text": "建议至少每半年做一次审计。"
        },
        {
            "start": 284.12,
            "end": 287.06,
            "text": "第四步：建立反馈和纠错机制。"
        },
        {
            "start": 287.06,
            "end": 290.88,
            "text": "如果用户认为 AI 对他不公平，他有渠道投诉。"
        },
        {
            "start": 290.88,
            "end": 292.82,
            "text": "投诉之后有人审查。"
        },
        {
            "start": 292.82,
            "end": 295.02,
            "text": "审查之后有机制纠正。"
        },
        {
            "start": 295.02,
            "end": 297.08,
            "text": "这个反馈机制非常重要。"
        },
        {
            "start": 297.08,
            "end": 299.12,
            "text": "因为不管你做了多少预防工作，"
        },
        {
            "start": 299.12,
            "end": 302.82,
            "text": "AI 系统在实际运行中总会出现意想不到的问题。"
        },
        {
            "start": 302.82,
            "end": 305.82,
            "text": "有了反馈机制，你就能快速发现和修正。"
        },
        {
            "start": 305.82,
            "end": 307.44,
            "text": "好，总结一下。"
        },
        {
            "start": 307.44,
            "end": 309.57777777777795,
            "text": "AI 伦理四大议题："
        },
        {
            "start": 309.57777777777795,
            "end": 312.51722222222264,
            "text": "偏见（数据和算法中的歧视）、"
        },
        {
            "start": 312.51722222222264,
            "end": 314.38777777777835,
            "text": "透明度（可解释性）、"
        },
        {
            "start": 314.38777777777835,
            "end": 317.0600000000008,
            "text": "公平性（结果层面的平等）、"
        },
        {
            "start": 317.0600000000008,
            "end": 319.84,
            "text": "责任归属（谁部署谁负责）。"
        },
        {
            "start": 319.84,
            "end": 323.34,
            "text": "企业 AI 伦理四步框架：制定使用原则、"
        },
        {
            "start": 323.34,
            "end": 327.02,
            "text": "风险评估、定期审计、反馈纠错机制。"
        },
        {
            "start": 327.02,
            "end": 330.0,
            "text": "下一期我们聊 AI 风险管理框架。"
        },
        {
            "start": 330.0,
            "end": 332.02,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 332.02,
            "end": 350.4400000000001,
            "text": "1. AI 伦理四大议题：偏见、透明度、公平性、责任归属"
        },
        {
            "start": 350.4400000000001,
            "end": 353.68000000000023,
            "text": "2. AI 偏见三来源：训练数据、标注、算法设计"
        },
        {
            "start": 353.68000000000023,
            "end": 354.9400000000003,
            "text": "3. 企业四步框架："
        },
        {
            "start": 354.9400000000003,
            "end": 358.3600000000004,
            "text": "制定原则 → 风险评估 → 定期审计 → 反馈纠错"
        },
        {
            "start": 358.3600000000004,
            "end": 358.9100000000004,
            "text": "4. 核心原则：谁部署 AI 谁就有注意义务，不能推责给算法"
        },
        {
            "start": 358.9100000000004,
            "end": 359.46000000000043,
            "text": "1. 你的 AI 系统有没有做过偏见检测？"
        },
        {
            "start": 359.46000000000043,
            "end": 360.01000000000045,
            "text": "2. 你的 AI 决策能被解释吗？"
        },
        {
            "start": 360.01000000000045,
            "end": 360.76,
            "text": "用户如果质疑怎么办？"
        },
        {
            "start": 360.76,
            "end": 364.06,
            "text": "3. 你的企业有没有 AI 使用原则？"
        },
        {
            "start": 364.06,
            "end": 366.1,
            "text": "有没有人负责 AI 伦理？"
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
], navigation: { nextLessonUrl: "./lesson-legal-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-07.html?entry={entry}", secondaryHref: "./lesson-legal-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-06", coachSource: "./ai-coach.html?source=lesson-legal-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 伦理与算法治理：负责任地使用 AI的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 伦理与算法治理：负责任地使用 AI", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
