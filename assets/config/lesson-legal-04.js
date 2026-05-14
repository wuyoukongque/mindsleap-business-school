(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第4课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第4课：数据隐私与合规：GDPR 与个人信息保护法",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep100-data-privacy/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：数据隐私与合规：GDPR 与个人信息保护法", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-05.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 法规全景：全球 AI 监管趋势",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 6,
                "title": "AI 伦理与算法治理：负责任地使用 AI",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-legal-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 4/10", "建议下一节：AI 法规全景：全球 AI 监管趋势", '也可以先整理这一节'], nextHref: "./lesson-legal-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-04", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson4", audioSource: './assets/audio/legal-ep100-data-privacy.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep100-data-privacy.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep100-data-privacy/slide_01.png",
            "label": "数据隐私与合规：GDPR 与个人信息保护法",
            "caption": "这一节会帮助你系统理解：数据隐私与合规：GDPR 与个人信息保护法"
        },
        {
            "file": "legal-ep100-data-privacy/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "这些法规的核心原则是相似的。 我来讲几个最重要的。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_04.png",
            "label": "常见误区与代价",
            "caption": "那你就不能用这些邮箱来发营销广告，除非你额外获得了用户的同意。 这对 AI 时代的影响很大。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "用户要求导出数据，你的系统得能做到。 第四个核心原则：数据安全。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "如果你用 AI 来做影响用户的决策，比如信贷审批、保险定价、招聘筛选，用户有权知道 AI 是怎么做出这个决策的。 这就是\"算法透明度\"的要求。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_07.png",
            "label": "本节行动提示",
            "caption": "当用户要求访问、删除或导出数据时，AI 可以自动处理这些请求，提高效率。 第四，实时监控数据合规状态。"
        },
        {
            "file": "legal-ep100-data-privacy/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.5550000000000002,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.5550000000000002,
            "end": 3.46,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.46,
            "end": 4.34,
            "text": "第一百期了！"
        },
        {
            "start": 4.34,
            "end": 5.82,
            "text": "感谢大家一路的陪伴。"
        },
        {
            "start": 5.82,
            "end": 7.78,
            "text": "今天聊数据隐私。"
        },
        {
            "start": 7.78,
            "end": 11.46,
            "text": "这是 AI 时代每个管理者必须了解的话题。"
        },
        {
            "start": 11.46,
            "end": 13.66,
            "text": "你的企业收集了客户的数据，"
        },
        {
            "start": 13.66,
            "end": 16.299999999999997,
            "text": "你用这些数据做分析、做营销、"
        },
        {
            "start": 16.299999999999997,
            "end": 17.58,
            "text": "训练 AI 模型。"
        },
        {
            "start": 17.58,
            "end": 21.2,
            "text": "这些行为都受到数据隐私法律的约束。"
        },
        {
            "start": 21.2,
            "end": 23.28,
            "text": "违规的后果非常严重。"
        },
        {
            "start": 23.28,
            "end": 26.54,
            "text": "先了解全球主要的数据隐私法规。"
        },
        {
            "start": 26.54,
            "end": 28.27,
            "text": "第一，GDPR。"
        },
        {
            "start": 28.27,
            "end": 30.94,
            "text": "这是欧盟的《通用数据保护条例》，"
        },
        {
            "start": 30.94,
            "end": 34.1,
            "text": "是全球最严格的数据隐私法规之一。"
        },
        {
            "start": 34.1,
            "end": 36.98,
            "text": "如果你的业务涉及欧盟用户，"
        },
        {
            "start": 36.98,
            "end": 40.58,
            "text": "不管你的公司在哪里，都必须遵守 GDPR。"
        },
        {
            "start": 40.58,
            "end": 43.02,
            "text": "GDPR 的罚款力度有多大？"
        },
        {
            "start": 43.02,
            "end": 46.61200000000001,
            "text": "最高可以罚到你全球年营收的百分之四。"
        },
        {
            "start": 46.61200000000001,
            "end": 49.2,
            "text": "对大公司来说可能是几十亿欧元。"
        },
        {
            "start": 49.2,
            "end": 51.82,
            "text": "第二，中国的《个人信息保护法》。"
        },
        {
            "start": 51.82,
            "end": 55.08,
            "text": "这是中国版的\"GDPR\"，2021年生效。"
        },
        {
            "start": 55.08,
            "end": 58.8,
            "text": "对在中国收集和处理个人信息的企业都适用。"
        },
        {
            "start": 58.8,
            "end": 62.84,
            "text": "第三，美国没有联邦层面的统一隐私法，"
        },
        {
            "start": 62.84,
            "end": 64.58,
            "text": "但各州有自己的法规。"
        },
        {
            "start": 64.58,
            "end": 67.28,
            "text": "最知名的是加州的 CCPA。"
        },
        {
            "start": 67.28,
            "end": 69.94,
            "text": "这些法规的核心原则是相似的。"
        },
        {
            "start": 69.94,
            "end": 72.1,
            "text": "我来讲几个最重要的。"
        },
        {
            "start": 72.1,
            "end": 74.9,
            "text": "第一个核心原则：合法、正当、必要。"
        },
        {
            "start": 74.9,
            "end": 77.42,
            "text": "你收集个人信息必须有合法的理由。"
        },
        {
            "start": 77.42,
            "end": 80.28,
            "text": "最常见的理由是\"用户知情同意\"。"
        },
        {
            "start": 80.28,
            "end": 81.78399999999999,
            "text": "什么叫知情同意？"
        },
        {
            "start": 81.78399999999999,
            "end": 82.72,
            "text": "两个条件。"
        },
        {
            "start": 82.72,
            "end": 84.88,
            "text": "\"知情\"是指你要告诉用户："
        },
        {
            "start": 84.88,
            "end": 87.86,
            "text": "你收集了他们什么信息、用来做什么、"
        },
        {
            "start": 87.86,
            "end": 90.66,
            "text": "怎么存储、怎么保护、分享给谁、"
        },
        {
            "start": 90.66,
            "end": 91.42,
            "text": "保存多久。"
        },
        {
            "start": 91.42,
            "end": 94.5,
            "text": "这些信息通常写在\"隐私政策\"里。"
        },
        {
            "start": 94.5,
            "end": 98.66,
            "text": "\"同意\"是指用户必须主动同意，而不是默认同意。"
        },
        {
            "start": 98.66,
            "end": 101.1,
            "text": "不能用预先勾选的复选框。"
        },
        {
            "start": 101.1,
            "end": 103.66,
            "text": "用户必须自己勾选\"我同意\"。"
        },
        {
            "start": 103.66,
            "end": 106.72,
            "text": "而且用户有权随时撤回同意。"
        },
        {
            "start": 106.72,
            "end": 110.42000000000002,
            "text": "一旦撤回，你就不能继续处理他的数据。"
        },
        {
            "start": 110.42000000000002,
            "end": 115.38,
            "text": "\"必要\"是指你只能收集完成目的所必需的最少数据。"
        },
        {
            "start": 115.38,
            "end": 119.72,
            "text": "你做一个电商网站，收集用户的收货地址是必要的。"
        },
        {
            "start": 119.72,
            "end": 122.66,
            "text": "但收集用户的血型就不是必要的。"
        },
        {
            "start": 122.66,
            "end": 125.02,
            "text": "第二个核心原则：目的限制。"
        },
        {
            "start": 125.02,
            "end": 129.66,
            "text": "你收集数据的时候说的是用来做 A，那就只能用来做 A。"
        },
        {
            "start": 129.66,
            "end": 131.3,
            "text": "不能偷偷用来做 B。"
        },
        {
            "start": 131.78,
            "end": 135.1,
            "text": "比如你说收集用户邮箱是为了发订单通知。"
        },
        {
            "start": 135.1,
            "end": 138.2,
            "text": "那你就不能用这些邮箱来发营销广告，"
        },
        {
            "start": 138.2,
            "end": 140.6,
            "text": "除非你额外获得了用户的同意。"
        },
        {
            "start": 140.6,
            "end": 143.2,
            "text": "这对 AI 时代的影响很大。"
        },
        {
            "start": 143.2,
            "end": 147.1,
            "text": "你收集了客户的服务数据，想用来训练 AI 模型。"
        },
        {
            "start": 147.1,
            "end": 151.8,
            "text": "但你当初收集数据的时候告诉用户是\"为了提供服务\"。"
        },
        {
            "start": 151.8,
            "end": 156.54,
            "text": "用来训练 AI 是一个新的目的，你需要额外获得用户的同意。"
        },
        {
            "start": 156.54,
            "end": 159.33000000000004,
            "text": "第三个核心原则：用户权利。"
        },
        {
            "start": 159.33000000000004,
            "end": 162.22,
            "text": "数据隐私法赋予了用户一系列的权利。"
        },
        {
            "start": 162.22,
            "end": 163.24,
            "text": "知情权。"
        },
        {
            "start": 163.24,
            "end": 167.14,
            "text": "用户有权知道你收集了他的什么数据、怎么用的。"
        },
        {
            "start": 167.14,
            "end": 167.96,
            "text": "访问权。"
        },
        {
            "start": 167.96,
            "end": 171.18,
            "text": "用户有权要求你提供他的个人数据的副本。"
        },
        {
            "start": 171.18,
            "end": 172.18000000000004,
            "text": "更正权。"
        },
        {
            "start": 172.18000000000004,
            "end": 175.50000000000003,
            "text": "如果数据有错误，用户有权要求更正。"
        },
        {
            "start": 175.50000000000003,
            "end": 176.44,
            "text": "删除权。"
        },
        {
            "start": 176.44,
            "end": 179.44,
            "text": "用户有权要求你删除他的个人数据。"
        },
        {
            "start": 179.44,
            "end": 181.89999999999998,
            "text": "GDPR 中叫\"被遗忘权\"。"
        },
        {
            "start": 181.9,
            "end": 183.28,
            "text": "可携带权。"
        },
        {
            "start": 183.28,
            "end": 187.1,
            "text": "用户有权要求你把他的数据以通用格式导出，"
        },
        {
            "start": 187.1,
            "end": 189.8,
            "text": "方便他转移到其他服务商。"
        },
        {
            "start": 189.8,
            "end": 190.58000000000004,
            "text": "拒绝权。"
        },
        {
            "start": 190.58000000000004,
            "end": 193.62,
            "text": "用户有权拒绝某些数据处理行为，"
        },
        {
            "start": 193.62,
            "end": 196.72500000000002,
            "text": "比如拒绝被自动化决策所影响。"
        },
        {
            "start": 196.72500000000002,
            "end": 201.02,
            "text": "这些权利意味着你的系统必须有能力响应用户的这些请求。"
        },
        {
            "start": 201.02,
            "end": 203.98,
            "text": "用户要求删除数据，你的系统得能做到。"
        },
        {
            "start": 203.98,
            "end": 206.74,
            "text": "用户要求导出数据，你的系统得能做到。"
        },
        {
            "start": 206.74,
            "end": 209.06,
            "text": "第四个核心原则：数据安全。"
        },
        {
            "start": 209.06,
            "end": 213.22,
            "text": "你有义务保护你收集的个人数据不被泄露、篡改或丢失。"
        },
        {
            "start": 213.22,
            "end": 214.44,
            "text": "要做哪些事？"
        },
        {
            "start": 214.62,
            "end": 215.72,
            "text": "第一，技术措施。"
        },
        {
            "start": 215.72,
            "end": 219.86,
            "text": "数据加密存储、传输过程加密、访问控制、日志审计。"
        },
        {
            "start": 219.86,
            "end": 221.32,
            "text": "第二，管理措施。"
        },
        {
            "start": 221.32,
            "end": 223.46000000000004,
            "text": "明确谁有权访问什么数据、"
        },
        {
            "start": 223.46000000000004,
            "end": 224.72,
            "text": "定期做安全培训、"
        },
        {
            "start": 224.72,
            "end": 226.4,
            "text": "制定数据泄露应急预案。"
        },
        {
            "start": 226.4,
            "end": 228.72,
            "text": "第三，数据泄露通知。"
        },
        {
            "start": 228.72,
            "end": 230.58,
            "text": "如果发生了数据泄露，"
        },
        {
            "start": 230.58,
            "end": 235.26,
            "text": "你有义务在规定的时间内通知监管机构和受影响的用户。"
        },
        {
            "start": 235.26,
            "end": 239.58000000000004,
            "text": "GDPR 要求七十二小时内通知监管机构。"
        },
        {
            "start": 239.58000000000004,
            "end": 242.08,
            "text": "中国的法律也有类似的要求。"
        },
        {
            "start": 242.08,
            "end": 244.22,
            "text": "数据泄露的后果不只是罚款。"
        },
        {
            "start": 244.22,
            "end": 247.86,
            "text": "还有品牌声誉的损害和客户信任的丧失。"
        },
        {
            "start": 247.86,
            "end": 250.82,
            "text": "这些往往比罚款更致命。"
        },
        {
            "start": 250.82000000000002,
            "end": 254.24,
            "text": "AI 时代的数据隐私有几个特别需要注意的点。"
        },
        {
            "start": 254.24,
            "end": 257.24,
            "text": "第一，AI 训练数据的合规。"
        },
        {
            "start": 257.24,
            "end": 259.7,
            "text": "你想用客户数据来训练 AI 模型？"
        },
        {
            "start": 259.7,
            "end": 260.82,
            "text": "你必须确保："
        },
        {
            "start": 260.82,
            "end": 263.04,
            "text": "用户同意了数据被用于此目的、"
        },
        {
            "start": 263.04,
            "end": 265.42,
            "text": "数据经过了适当的脱敏处理、"
        },
        {
            "start": 265.42,
            "end": 268.04,
            "text": "模型不会在输出中泄露个人信息。"
        },
        {
            "start": 268.58,
            "end": 270.32,
            "text": "第二，自动化决策的透明度。"
        },
        {
            "start": 271.08,
            "end": 274.14,
            "text": "如果你用 AI 来做影响用户的决策，"
        },
        {
            "start": 274.14,
            "end": 277.15999999999997,
            "text": "比如信贷审批、保险定价、招聘筛选，"
        },
        {
            "start": 277.16,
            "end": 280.84,
            "text": "用户有权知道 AI 是怎么做出这个决策的。"
        },
        {
            "start": 280.84,
            "end": 282.86,
            "text": "这就是\"算法透明度\"的要求。"
        },
        {
            "start": 282.86,
            "end": 285.36,
            "text": "第三，跨境数据传输。"
        },
        {
            "start": 285.36,
            "end": 288.04,
            "text": "如果你的数据需要传输到其他国家，"
        },
        {
            "start": 288.04,
            "end": 291.14,
            "text": "比如用了海外的云服务或者 AI 工具，"
        },
        {
            "start": 291.14,
            "end": 294.06,
            "text": "需要遵守跨境数据传输的规则。"
        },
        {
            "start": 294.06,
            "end": 297.46,
            "text": "中国的《个人信息保护法》对此有严格的要求。"
        },
        {
            "start": 298.0,
            "end": 300.42,
            "text": "第四，数据脱敏和匿名化。"
        },
        {
            "start": 300.42,
            "end": 303.16,
            "text": "在做数据分析和 AI 训练的时候，"
        },
        {
            "start": 303.16,
            "end": 305.9599999999999,
            "text": "尽量使用脱敏或匿名化的数据。"
        },
        {
            "start": 305.96,
            "end": 310.31999999999994,
            "text": "去掉能直接识别个人的信息，姓名、身份证号、手机号。"
        },
        {
            "start": 310.31999999999994,
            "end": 314.4,
            "text": "这样即使数据泄露，也不会直接暴露用户的个人信息。"
        },
        {
            "start": 314.4,
            "end": 317.82,
            "text": "AI 可以帮你做数据隐私合规的几件事。"
        },
        {
            "start": 317.82,
            "end": 320.94,
            "text": "第一，自动扫描和分类个人数据。"
        },
        {
            "start": 320.94,
            "end": 324.26,
            "text": "AI 可以自动检查你的数据库和系统中哪"
        },
        {
            "start": 324.26,
            "end": 326.12,
            "text": "些地方存储了个人信息，"
        },
        {
            "start": 326.12,
            "end": 329.42,
            "text": "是什么类型的个人信息，敏感程度如何。"
        },
        {
            "start": 329.42,
            "end": 332.02,
            "text": "第二，自动化隐私政策审查。"
        },
        {
            "start": 332.02,
            "end": 336.64,
            "text": "AI 可以帮你检查你的隐私政策是否符合相关法规的要求，"
        },
        {
            "start": 336.64,
            "end": 337.52,
            "text": "有没有遗漏。"
        },
        {
            "start": 337.52,
            "end": 340.34,
            "text": "第三，自动响应用户权利请求。"
        },
        {
            "start": 340.34,
            "end": 344.08000000000004,
            "text": "当用户要求访问、删除或导出数据时，"
        },
        {
            "start": 344.08000000000004,
            "end": 346.9,
            "text": "AI 可以自动处理这些请求，提高效率。"
        },
        {
            "start": 347.32000000000005,
            "end": 350.1400000000001,
            "text": "第四，实时监控数据合规状态。"
        },
        {
            "start": 350.1400000000001,
            "end": 353.465,
            "text": "AI 持续监控你的数据处理行为是否合规，"
        },
        {
            "start": 353.465,
            "end": 355.64,
            "text": "发现违规风险自动预警。"
        },
        {
            "start": 355.64,
            "end": 357.02,
            "text": "好，总结一下。"
        },
        {
            "start": 357.02,
            "end": 358.56,
            "text": "四个核心原则："
        },
        {
            "start": 358.56,
            "end": 361.24,
            "text": "合法正当必要（知情同意）、目的限制、"
        },
        {
            "start": 361.4,
            "end": 363.7,
            "text": "用户权利（知情、访问、删除、"
        },
        {
            "start": 363.7,
            "end": 365.52,
            "text": "可携带）、数据安全。"
        },
        {
            "start": 366.02000000000004,
            "end": 369.3199999999998,
            "text": "AI 时代四个重点：训练数据合规、"
        },
        {
            "start": 369.32,
            "end": 372.30000000000007,
            "text": "自动化决策透明、跨境传输、数据脱敏。"
        },
        {
            "start": 372.30000000000007,
            "end": 377.12,
            "text": "AI 可以帮你做数据分类、隐私审查、自动响应、合规监控。"
        },
        {
            "start": 377.67999999999995,
            "end": 380.4,
            "text": "下一期我们看全球 AI 法规的全景图。"
        },
        {
            "start": 380.4,
            "end": 383.08,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 383.08,
            "end": 385.96,
            "text": "1. 四大原则：合法正当必要、"
        },
        {
            "start": 385.96,
            "end": 388.68,
            "text": "目的限制、用户权利、数据安全"
        },
        {
            "start": 388.68,
            "end": 392.1239999999999,
            "text": "2. 用户六大权利：知情、访问、更正、"
        },
        {
            "start": 392.1239999999999,
            "end": 394.04,
            "text": "删除、可携带、拒绝"
        },
        {
            "start": 394.04,
            "end": 397.93999999999994,
            "text": "3. AI 时代重点：训练数据合规、"
        },
        {
            "start": 397.94,
            "end": 400.92000000000013,
            "text": "算法透明、跨境传输、数据脱敏"
        },
        {
            "start": 400.92000000000013,
            "end": 407.56,
            "text": "4. 数据泄露后果：罚款 加 品牌声誉损害 加 客户信任丧失"
        },
        {
            "start": 407.56,
            "end": 411.04,
            "text": "1. 你的企业收集了哪些个人信息？"
        },
        {
            "start": 411.04,
            "end": 413.98,
            "text": "有没有获得用户的知情同意？"
        },
        {
            "start": 413.98,
            "end": 418.62,
            "text": "2. 如果用户要求删除他的数据，你的系统能做到吗？"
        },
        {
            "start": 418.62,
            "end": 422.34,
            "text": "3. 你有没有用客户数据训练 AI 模型？"
        },
        {
            "start": 422.78000000000003,
            "end": 425.0,
            "text": "是否符合数据隐私要求？"
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
], navigation: { nextLessonUrl: "./lesson-legal-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-05.html?entry={entry}", secondaryHref: "./lesson-legal-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-04", coachSource: "./ai-coach.html?source=lesson-legal-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于数据隐私与合规：GDPR 与个人信息保护法的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "数据隐私与合规：GDPR 与个人信息保护法", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
