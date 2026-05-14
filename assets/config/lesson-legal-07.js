(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第7课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 法律、合规与风险',
      lessonTitle: "第7课：AI 风险管理框架：识别和防控 AI 带来的新风险",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep103-ai-risk-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 风险管理框架：识别和防控 AI 带来的新风险", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-08.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "劳动法：AI 替代岗位的法律与伦理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-legal-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 7/10", "建议下一节：劳动法：AI 替代岗位的法律与伦理", '也可以先整理这一节'], nextHref: "./lesson-legal-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-07", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson7", audioSource: './assets/audio/legal-ep103-ai-risk-management.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep103-ai-risk-management.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep103-ai-risk-management/slide_01.png",
            "label": "AI 风险管理框架：识别和防控 AI 带来的新风险",
            "caption": "这一节会帮助你系统理解：AI 风险管理框架：识别和防控 AI 带来的新风险"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "第一，在 AI 输出用于正式场合之前，必须有人工审核环节。 特别是涉及事实、数据、法律的内容。"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_04.png",
            "label": "常见误区与代价",
            "caption": "第二，提供企业级的私有化 AI 工具。 让员工用公司自己部署的 AI，数据不出企业网络。"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "AI 如果做了不恰当的事情，可能严重损害你的品牌声誉。 比如你的 AI 客服说了不当言论。"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "AI 模型更新之后，之前表现好的场景可能变差了。 怎么防控？"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_07.png",
            "label": "本节行动提示",
            "caption": "包括：预防措施（防止风险发生）、监控措施（及时发现问题）、应急措施（出了问题怎么处理）。 好，总结一下。"
        },
        {
            "file": "legal-ep103-ai-risk-management/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
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
            "end": 3.8,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.8,
            "end": 5.64,
            "text": "今天聊 AI 风险管理。"
        },
        {
            "start": 5.64,
            "end": 10.22,
            "text": "AI 给你带来效率和能力的同时，也带来了新的风险。"
        },
        {
            "start": 10.22,
            "end": 15.84,
            "text": "这些风险不是传统的企业风险，很多管理者还没有意识到。"
        },
        {
            "start": 15.84,
            "end": 20.56,
            "text": "今天我们系统梳理一下，帮你建立 AI 风险的防控意识。"
        },
        {
            "start": 20.56,
            "end": 23.22,
            "text": "我把 AI 风险分成六大类。"
        },
        {
            "start": 23.22,
            "end": 25.32,
            "text": "第一类：幻觉风险。"
        },
        {
            "start": 25.32,
            "end": 28.82,
            "text": "AI 大模型有一个著名的问题叫\"幻觉\"。"
        },
        {
            "start": 28.82,
            "end": 33.56,
            "text": "就是 AI 会编造看起来合理但实际上不正确的信息。"
        },
        {
            "start": 33.56,
            "end": 36.62,
            "text": "它说得很自信，但内容是错的。"
        },
        {
            "start": 36.62,
            "end": 38.84,
            "text": "这个风险在什么时候特别危险？"
        },
        {
            "start": 38.84,
            "end": 42.48,
            "text": "当你把 AI 的输出直接用于对外沟通、"
        },
        {
            "start": 42.48,
            "end": 45.22,
            "text": "客户服务、决策建议的时候。"
        },
        {
            "start": 45.22,
            "end": 49.94,
            "text": "比如你的 AI 客服告诉客户\"您的退款会在三天内到账\"，"
        },
        {
            "start": 49.94,
            "end": 52.78,
            "text": "但实际上你的退款流程需要七天。"
        },
        {
            "start": 52.78,
            "end": 54.82,
            "text": "客户信了，但事实不是这样。"
        },
        {
            "start": 54.82,
            "end": 57.66,
            "text": "比如你让 AI 帮你做法律研究，"
        },
        {
            "start": 57.66,
            "end": 59.86,
            "text": "AI 引用了一个\"法律条文\"，"
        },
        {
            "start": 59.86,
            "end": 61.32,
            "text": "你写进了合同。"
        },
        {
            "start": 61.32,
            "end": 64.26,
            "text": "但这个条文是 AI 编造的，根本不存在。"
        },
        {
            "start": 64.26,
            "end": 65.52000000000001,
            "text": "怎么防控？"
        },
        {
            "start": 65.52000000000001,
            "end": 70.77999999999999,
            "text": "第一，在 AI 输出用于正式场合之前，必须有人工审核环节。"
        },
        {
            "start": 70.78,
            "end": 74.62,
            "text": "特别是涉及事实、数据、法律的内容。"
        },
        {
            "start": 74.62,
            "end": 78.54,
            "text": "第二，给 AI 接入可靠的知识库和数据源。"
        },
        {
            "start": 78.54,
            "end": 83.3,
            "text": "让 AI 基于你的真实数据来回答，而不是凭空生成。"
        },
        {
            "start": 83.82,
            "end": 89.42,
            "text": "第三，在面向客户的 AI 应用中，对 AI 的回答范围做限制。"
        },
        {
            "start": 89.42,
            "end": 92.02,
            "text": "不允许 AI 回答它不确定的问题。"
        },
        {
            "start": 92.02,
            "end": 93.9,
            "text": "第二类：数据泄露风险。"
        },
        {
            "start": 93.9,
            "end": 98.68,
            "text": "使用 AI 工具的时候，你可能无意中把敏感数据泄露了出去。"
        },
        {
            "start": 98.68,
            "end": 102.48,
            "text": "最常见的场景：员工把公司的内部文件、"
        },
        {
            "start": 102.48,
            "end": 103.52,
            "text": "客户数据、"
        },
        {
            "start": 103.52,
            "end": 106.78,
            "text": "财务数据上传到外部的 AI 工具做分析。"
        },
        {
            "start": 106.78,
            "end": 110.26,
            "text": "这些数据就传到了外部服务器上。"
        },
        {
            "start": 110.26,
            "end": 115.08,
            "text": "某知名科技公司的员工曾经把公司的核心代码粘贴到"
        },
        {
            "start": 115.08,
            "end": 117.58,
            "text": "ChatGPT 中让它帮忙找 bug。"
        },
        {
            "start": 117.58,
            "end": 122.04,
            "text": "结果公司的核心代码就被传到了 OpenAI 的服务器上。"
        },
        {
            "start": 122.04,
            "end": 122.82,
            "text": "怎么防控？"
        },
        {
            "start": 122.82,
            "end": 126.02,
            "text": "第一，制定明确的 AI 使用政策。"
        },
        {
            "start": 126.02,
            "end": 130.38,
            "text": "告诉员工哪些数据可以输入外部 AI 工具、哪些不行。"
        },
        {
            "start": 130.38,
            "end": 133.72,
            "text": "第二，提供企业级的私有化 AI 工具。"
        },
        {
            "start": 133.72,
            "end": 138.38,
            "text": "让员工用公司自己部署的 AI，数据不出企业网络。"
        },
        {
            "start": 138.38,
            "end": 140.14,
            "text": "第三，技术手段。"
        },
        {
            "start": 140.14,
            "end": 145.76,
            "text": "对敏感数据做分级管理，高敏感数据在技术层面禁止外传。"
        },
        {
            "start": 145.76,
            "end": 147.62,
            "text": "第三类：依赖风险。"
        },
        {
            "start": 147.62,
            "end": 149.9,
            "text": "你的业务越来越依赖 AI。"
        },
        {
            "start": 149.9,
            "end": 152.28,
            "text": "如果 AI 服务中断了怎么办？"
        },
        {
            "start": 152.28,
            "end": 154.94,
            "text": "几种常见的依赖风险场景。"
        },
        {
            "start": 154.94,
            "end": 157.46,
            "text": "AI 服务商的系统宕机了。"
        },
        {
            "start": 157.46,
            "end": 160.7,
            "text": "你的 AI 客服停了、你的推荐系统停了、"
        },
        {
            "start": 160.7,
            "end": 162.64,
            "text": "你的自动化流程停了。"
        },
        {
            "start": 162.64,
            "end": 165.04,
            "text": "AI 服务商修改了定价或者条款。"
        },
        {
            "start": 165.04,
            "end": 168.14,
            "text": "你用得很深了，想换成本太高。"
        },
        {
            "start": 168.14,
            "end": 171.36,
            "text": "AI 服务商被收购了或者倒闭了。"
        },
        {
            "start": 171.36,
            "end": 173.6,
            "text": "你的数据和模型怎么办？"
        },
        {
            "start": 173.6,
            "end": 174.36,
            "text": "怎么防控？"
        },
        {
            "start": 174.36,
            "end": 178.5,
            "text": "第一，不要把所有的 AI 依赖放在一个供应商身上。"
        },
        {
            "start": 178.5,
            "end": 180.52,
            "text": "关键应用有备选方案。"
        },
        {
            "start": 180.52,
            "end": 182.52,
            "text": "第二，保留\"降级方案\"。"
        },
        {
            "start": 182.52,
            "end": 186.7,
            "text": "如果 AI 系统挂了，人工可以顶上来处理核心业务。"
        },
        {
            "start": 186.7,
            "end": 189.24,
            "text": "第三，评估供应商的稳定性。"
        },
        {
            "start": 189.24,
            "end": 191.72,
            "text": "大公司、有融资保障的公司、"
        },
        {
            "start": 191.72,
            "end": 194.52,
            "text": "有多年运营记录的公司更可靠。"
        },
        {
            "start": 194.52,
            "end": 196.32,
            "text": "第四类：声誉风险。"
        },
        {
            "start": 196.32,
            "end": 200.7,
            "text": "AI 如果做了不恰当的事情，可能严重损害你的品牌声誉。"
        },
        {
            "start": 200.7,
            "end": 203.7,
            "text": "比如你的 AI 客服说了不当言论。"
        },
        {
            "start": 203.7,
            "end": 207.04,
            "text": "比如你的 AI 推荐系统推荐了不适当的内容。"
        },
        {
            "start": 207.04,
            "end": 211.06,
            "text": "比如你的 AI 生成的营销素材包含了歧视性内容。"
        },
        {
            "start": 211.06,
            "end": 216.28,
            "text": "这些事情一旦被用户截图传播，可能迅速演变成公关危机。"
        },
        {
            "start": 216.28,
            "end": 217.48,
            "text": "怎么防控？"
        },
        {
            "start": 217.48,
            "end": 222.36,
            "text": "第一，对面向用户的 AI 做严格的内容过滤和安全测试。"
        },
        {
            "start": 222.36,
            "end": 226.14,
            "text": "上线前做大量的测试，尽可能覆盖边界情况。"
        },
        {
            "start": 226.14,
            "end": 228.62,
            "text": "第二，实时监控 AI 的输出。"
        },
        {
            "start": 228.62,
            "end": 230.44,
            "text": "发现不当内容立即处理。"
        },
        {
            "start": 230.44,
            "end": 232.39999999999998,
            "text": "第三，有公关应急预案。"
        },
        {
            "start": 232.4,
            "end": 235.7,
            "text": "如果出了问题，知道怎么快速响应和处理。"
        },
        {
            "start": 235.7,
            "end": 237.2,
            "text": "第五类：合规风险。"
        },
        {
            "start": 237.2,
            "end": 239.86,
            "text": "上几期已经详细讲了法律法规。"
        },
        {
            "start": 239.86,
            "end": 244.32,
            "text": "合规风险就是你使用 AI 的方式不符合相关法规的要求。"
        },
        {
            "start": 244.32,
            "end": 246.66,
            "text": "简单回顾：数据隐私不合规、"
        },
        {
            "start": 246.66,
            "end": 249.62,
            "text": "算法不透明、AI 决策存在歧视、"
        },
        {
            "start": 249.62,
            "end": 251.06,
            "text": "跨境数据传输违规。"
        },
        {
            "start": 251.06,
            "end": 252.88,
            "text": "第六类：质量风险。"
        },
        {
            "start": 252.88,
            "end": 255.18,
            "text": "AI 的输出质量不稳定。"
        },
        {
            "start": 255.18,
            "end": 258.88,
            "text": "同样的输入，不同时间可能得到不同质量的输出。"
        },
        {
            "start": 258.88,
            "end": 263.6,
            "text": "AI 模型更新之后，之前表现好的场景可能变差了。"
        },
        {
            "start": 263.6,
            "end": 264.46,
            "text": "怎么防控？"
        },
        {
            "start": 264.46,
            "end": 268.04,
            "text": "第一，建立 AI 输出的质量监控机制。"
        },
        {
            "start": 268.04,
            "end": 270.2,
            "text": "定期抽检 AI 的输出质量。"
        },
        {
            "start": 270.2,
            "end": 272.2,
            "text": "第二，定义质量标准。"
        },
        {
            "start": 272.2,
            "end": 274.82,
            "text": "什么样的 AI 输出是可接受的？"
        },
        {
            "start": 274.82,
            "end": 276.46,
            "text": "什么样的需要人工修正？"
        },
        {
            "start": 276.46,
            "end": 279.86,
            "text": "第三，模型更新后要做回归测试。"
        },
        {
            "start": 279.86,
            "end": 284.0,
            "text": "确保新版本在核心场景上的表现不比旧版本差。"
        },
        {
            "start": 284.0,
            "end": 287.26,
            "text": "给大家一个实用的 AI 风险管理框架。"
        },
        {
            "start": 287.26,
            "end": 288.06,
            "text": "分三步。"
        },
        {
            "start": 288.06,
            "end": 289.78,
            "text": "第一步：风险识别。"
        },
        {
            "start": 289.78,
            "end": 292.98,
            "text": "列出你企业中所有使用 AI 的场景。"
        },
        {
            "start": 292.98,
            "end": 296.34,
            "text": "对每个场景按照六大风险类别做检查。"
        },
        {
            "start": 296.34,
            "end": 297.94,
            "text": "哪些风险存在？"
        },
        {
            "start": 297.94,
            "end": 299.52,
            "text": "第二步：风险评估。"
        },
        {
            "start": 299.52,
            "end": 304.5,
            "text": "对每个识别出来的风险评估两个维度：发生的概率有多大？"
        },
        {
            "start": 304.5,
            "end": 306.66,
            "text": "发生之后的影响有多严重？"
        },
        {
            "start": 306.66,
            "end": 311.0,
            "text": "高概率加高影响的风险是红色，必须立刻处理。"
        },
        {
            "start": 311.0,
            "end": 315.26,
            "text": "高概率加低影响的风险是黄色，需要关注。"
        },
        {
            "start": 315.26,
            "end": 320.16,
            "text": "低概率加高影响的风险也是黄色，需要有应急预案。"
        },
        {
            "start": 320.16,
            "end": 323.9,
            "text": "低概率加低影响的风险是绿色，可以接受。"
        },
        {
            "start": 323.9,
            "end": 326.06,
            "text": "第三步：风险应对。"
        },
        {
            "start": 326.06,
            "end": 329.44,
            "text": "对每个红色和黄色的风险制定应对措施。"
        },
        {
            "start": 329.44,
            "end": 332.34,
            "text": "包括：预防措施（防止风险发生）、"
        },
        {
            "start": 332.34,
            "end": 334.3,
            "text": "监控措施（及时发现问题）、"
        },
        {
            "start": 334.3,
            "end": 336.46,
            "text": "应急措施（出了问题怎么处理）。"
        },
        {
            "start": 336.46,
            "end": 338.22,
            "text": "好，总结一下。"
        },
        {
            "start": 338.22,
            "end": 342.0,
            "text": "AI 六大风险：幻觉风险、数据泄露风险、"
        },
        {
            "start": 342.0,
            "end": 344.94,
            "text": "依赖风险、声誉风险、合规风险、"
        },
        {
            "start": 344.94,
            "end": 345.98,
            "text": "质量风险。"
        },
        {
            "start": 345.98,
            "end": 349.98,
            "text": "风险管理三步：识别（列场景、"
        },
        {
            "start": 349.98,
            "end": 353.02,
            "text": "查风险）、评估（概率乘以影响）、"
        },
        {
            "start": 353.02,
            "end": 355.82,
            "text": "应对（预防加监控加应急）。"
        },
        {
            "start": 355.82,
            "end": 359.98,
            "text": "核心原则：AI 带来能力的同时带来风险，"
        },
        {
            "start": 359.98,
            "end": 362.6,
            "text": "用好 AI 就是管好 AI 的风险。"
        },
        {
            "start": 362.6,
            "end": 367.56,
            "text": "下一期我们聊劳动法：AI 替代岗位的法律与伦理问题。"
        },
        {
            "start": 367.56,
            "end": 370.2,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 370.2,
            "end": 373.28,
            "text": "1. AI 六大风险：幻觉、数据泄露、"
        },
        {
            "start": 373.28,
            "end": 375.4,
            "text": "依赖、声誉、合规、质量"
        },
        {
            "start": 375.4,
            "end": 379.7,
            "text": "2. 幻觉风险：AI 编造信息，关键输出必须人工审核"
        },
        {
            "start": 379.7,
            "end": 382.16,
            "text": "3. 风险管理三步："
        },
        {
            "start": 382.16,
            "end": 386.82599999999996,
            "text": "识别 → 评估（概率×影响）→ 应对（预防+监控+应急）"
        },
        {
            "start": 386.82599999999996,
            "end": 390.06,
            "text": "4. 核心：用好 AI 等于 管好 AI 的风险"
        },
        {
            "start": 390.06,
            "end": 393.9,
            "text": "1. 你的企业使用 AI 时面临的最大风险是什么？"
        },
        {
            "start": 393.9,
            "end": 398.18,
            "text": "2. 你的员工知道哪些数据不能输入外部 AI 工具吗？"
        },
        {
            "start": 398.18,
            "end": 402.3,
            "text": "3. 如果你的 AI 系统突然停止服务，你有备选方案吗？"
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
], navigation: { nextLessonUrl: "./lesson-legal-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-08.html?entry={entry}", secondaryHref: "./lesson-legal-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-07", coachSource: "./ai-coach.html?source=lesson-legal-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 风险管理框架：识别和防控 AI 带来的新风险的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 风险管理框架：识别和防控 AI 带来的新风险", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetalegal: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
