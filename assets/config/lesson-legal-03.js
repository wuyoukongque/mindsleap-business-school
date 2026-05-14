(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第3课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第3课：知识产权保护：AI 时代的 IP 新问题",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep99-ip-protection/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：知识产权保护：AI 时代的 IP 新问题", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-04.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "数据隐私与合规：GDPR 与个人信息保护法",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 5,
                "title": "AI 法规全景：全球 AI 监管趋势",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-legal-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 3/10", "建议下一节：数据隐私与合规：GDPR 与个人信息保护法", '也可以先整理这一节'], nextHref: "./lesson-legal-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-03", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson3", audioSource: './assets/audio/legal-ep99-ip-protection.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep99-ip-protection.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep99-ip-protection/slide_01.png",
            "label": "知识产权保护：AI 时代的 IP 新问题",
            "caption": "这一节会帮助你系统理解：知识产权保护：AI 时代的 IP 新问题"
        },
        {
            "file": "legal-ep99-ip-protection/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "版权不需要注册就自动产生，但注册可以更好地维权。 这三种知识产权保护的对象不同。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_04.png",
            "label": "常见误区与代价",
            "caption": "这样更容易主张版权。 第二，注意你使用的 AI 工具的服务条款。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "AI 生成的内容有可能\"碰巧\"跟已有的版权作品非常相似。 因为 AI 是从大量已有作品中学习的，有可能在生成时\"复现\"了训练数据中的某些内容。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "但如果人类在 AI 辅助下完成了发明，人类可以作为发明人申请专利。 实操建议：在用 AI 辅助做技术研发时，确保人类研发人员有实质性的创造贡献。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_07.png",
            "label": "本节行动提示",
            "caption": "AI 可以帮你在网上自动搜索和发现可能侵犯你商标或版权的内容。 比你人工监控效率高得多。"
        },
        {
            "file": "legal-ep99-ip-protection/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.4,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.4,
            "end": 3.4599999999999884,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.4599999999999884,
            "end": 5.18,
            "text": "今天聊知识产权。"
        },
        {
            "start": 5.18,
            "end": 9.54,
            "text": "AI 时代的知识产权问题比以往任何时候都复杂。"
        },
        {
            "start": 9.54,
            "end": 11.579999999999998,
            "text": "AI 生成的内容归谁？"
        },
        {
            "start": 11.58,
            "end": 13.94,
            "text": "用 AI 训练数据算不算侵权？"
        },
        {
            "start": 13.94,
            "end": 16.26,
            "text": "你的品牌和创意怎么保护？"
        },
        {
            "start": 16.26,
            "end": 19.02,
            "text": "这些问题每个管理者都应该了解。"
        },
        {
            "start": 19.02,
            "end": 21.84,
            "text": "先讲知识产权的三大基本类型。"
        },
        {
            "start": 21.84,
            "end": 23.18,
            "text": "第一种：专利。"
        },
        {
            "start": 23.18,
            "end": 25.68,
            "text": "保护的是技术发明和创新。"
        },
        {
            "start": 25.68,
            "end": 28.28,
            "text": "你发明了一种新的技术方案、"
        },
        {
            "start": 28.28,
            "end": 31.42,
            "text": "一种新的产品结构，可以申请专利。"
        },
        {
            "start": 31.42,
            "end": 36.04,
            "text": "拿到专利后，别人不能未经你许可使用这个技术。"
        },
        {
            "start": 36.04,
            "end": 40.64,
            "text": "专利的保护期限在中国是发明专利二十年，"
        },
        {
            "start": 40.64,
            "end": 43.54,
            "text": "实用新型和外观设计十年。"
        },
        {
            "start": 43.54,
            "end": 44.62,
            "text": "第二种：商标。"
        },
        {
            "start": 44.62,
            "end": 46.48,
            "text": "保护的是品牌标识。"
        },
        {
            "start": 46.48,
            "end": 51.08,
            "text": "你的公司名称、logo、产品名称、标语，都可以注册商标。"
        },
        {
            "start": 51.08,
            "end": 55.46,
            "text": "注册之后别人不能用相同或近似的标识做同类生意。"
        },
        {
            "start": 55.46,
            "end": 58.98,
            "text": "商标的保护期限是十年，到期可以续展，"
        },
        {
            "start": 58.98,
            "end": 60.84,
            "text": "理论上可以永久保护。"
        },
        {
            "start": 60.84,
            "end": 63.32,
            "text": "第三种：版权，也叫著作权。"
        },
        {
            "start": 63.74,
            "end": 65.12,
            "text": "保护的是原创作品。"
        },
        {
            "start": 65.12,
            "end": 68.94,
            "text": "文章、设计、代码、音乐、视频，都属于版权的范围。"
        },
        {
            "start": 68.94,
            "end": 73.46,
            "text": "版权不需要注册就自动产生，但注册可以更好地维权。"
        },
        {
            "start": 73.89999999999999,
            "end": 76.66,
            "text": "这三种知识产权保护的对象不同。"
        },
        {
            "start": 76.66,
            "end": 81.72,
            "text": "简单说：专利保护技术、商标保护品牌、版权保护作品。"
        },
        {
            "start": 81.72,
            "end": 84.12,
            "text": "好，传统的知识产权概念讲完了。"
        },
        {
            "start": 84.12,
            "end": 86.16,
            "text": "来看 AI 时代的新问题。"
        },
        {
            "start": 86.66,
            "end": 89.88,
            "text": "第一个新问题：AI 生成内容的版权归谁？"
        },
        {
            "start": 89.88,
            "end": 93.74,
            "text": "你用 AI 生成了一篇文章、一张图片、一段代码。"
        },
        {
            "start": 93.74,
            "end": 95.67999999999999,
            "text": "这些内容的版权归谁？"
        },
        {
            "start": 95.67999999999999,
            "end": 96.38,
            "text": "归你？"
        },
        {
            "start": 96.38,
            "end": 97.44,
            "text": "归 AI 公司？"
        },
        {
            "start": 97.44,
            "end": 99.3,
            "text": "还是不属于任何人？"
        },
        {
            "start": 99.36,
            "end": 102.16,
            "text": "目前全球对这个问题没有统一的答案。"
        },
        {
            "start": 102.16,
            "end": 104.04,
            "text": "各国法律的态度不同。"
        },
        {
            "start": 104.04,
            "end": 107.18,
            "text": "在中国，目前的司法实践倾向于认为："
        },
        {
            "start": 107.18,
            "end": 112.1,
            "text": "如果人类在 AI 创作过程中进行了有创造性的选择和安排，"
        },
        {
            "start": 112.1,
            "end": 114.26,
            "text": "比如设计了详细的提示词、"
        },
        {
            "start": 114.42,
            "end": 115.58,
            "text": "做了选择和修改，"
        },
        {
            "start": 115.58,
            "end": 118.58,
            "text": "那可以认定人类是作者，享有版权。"
        },
        {
            "start": 118.58,
            "end": 120.98,
            "text": "但如果完全是 AI 自动生成、"
        },
        {
            "start": 120.98,
            "end": 123.6,
            "text": "人类没有实质性的创造性贡献，"
        },
        {
            "start": 123.6,
            "end": 125.52,
            "text": "那版权的归属就有争议。"
        },
        {
            "start": 125.52,
            "end": 127.3,
            "text": "实操建议是什么？"
        },
        {
            "start": 127.3,
            "end": 131.86,
            "text": "第一，在使用 AI 生成内容时，尽量加入你的创造性选择。"
        },
        {
            "start": 131.86,
            "end": 134.88,
            "text": "不要只输入一句话让 AI 全部生成。"
        },
        {
            "start": 134.88,
            "end": 137.18,
            "text": "你要做筛选、修改、组合。"
        },
        {
            "start": 137.38,
            "end": 138.8,
            "text": "这样更容易主张版权。"
        },
        {
            "start": 138.8,
            "end": 142.56,
            "text": "第二，注意你使用的 AI 工具的服务条款。"
        },
        {
            "start": 142.56,
            "end": 146.58,
            "text": "有些 AI 工具的条款约定了生成内容的权利归属。"
        },
        {
            "start": 146.58,
            "end": 148.1,
            "text": "用之前看清楚。"
        },
        {
            "start": 148.1,
            "end": 151.94,
            "text": "第二个新问题：AI 训练数据的版权争议。"
        },
        {
            "start": 151.94,
            "end": 155.26,
            "text": "AI 模型是用大量数据训练出来的。"
        },
        {
            "start": 155.26,
            "end": 158.78,
            "text": "这些训练数据中可能包含了受版权保护的内容，"
        },
        {
            "start": 159.2,
            "end": 161.32,
            "text": "文章、图片、代码、音乐。"
        },
        {
            "start": 161.32,
            "end": 163.3,
            "text": "这些内容的创作者说："
        },
        {
            "start": 163.3,
            "end": 166.92,
            "text": "\"你没有经过我的许可就用我的作品来训练你的 AI，"
        },
        {
            "start": 166.92,
            "end": 167.9,
            "text": "这是侵权。"
        },
        {
            "start": 167.9,
            "end": 168.32,
            "text": "\""
        },
        {
            "start": 168.32,
            "end": 172.42,
            "text": "AI 公司说：\"我们是在做技术研究和开发，属于合理使用。"
        },
        {
            "start": 172.42,
            "end": 172.83999999999997,
            "text": "\""
        },
        {
            "start": 172.83999999999997,
            "end": 175.9,
            "text": "这个争议目前在全球范围内还在打官司。"
        },
        {
            "start": 175.9,
            "end": 179.1,
            "text": "美国有多起针对 AI 公司的版权诉讼。"
        },
        {
            "start": 179.1,
            "end": 182.02,
            "text": "欧盟、中国也在制定相关的规则。"
        },
        {
            "start": 182.02,
            "end": 184.7,
            "text": "对管理者来说，这意味着什么？"
        },
        {
            "start": 184.7,
            "end": 185.28,
            "text": "第一，"
        },
        {
            "start": 185.36,
            "end": 189.08,
            "text": "如果你在用 AI 生成的内容做商业用途，"
        },
        {
            "start": 189.08,
            "end": 191.18,
            "text": "要意识到有一定的法律风险。"
        },
        {
            "start": 191.18,
            "end": 194.02,
            "text": "虽然目前概率不大，但不是零。"
        },
        {
            "start": 194.02,
            "end": 194.58,
            "text": "第二，"
        },
        {
            "start": 194.66,
            "end": 199.0,
            "text": "如果你自己的原创内容被 AI 公司用来训练模型，"
        },
        {
            "start": 199.0,
            "end": 201.54,
            "text": "你有权关注和维护自己的权益。"
        },
        {
            "start": 201.54,
            "end": 205.42,
            "text": "第三个新问题：AI 生成内容的侵权风险。"
        },
        {
            "start": 205.42,
            "end": 211.54,
            "text": "AI 生成的内容有可能\"碰巧\"跟已有的版权作品非常相似。"
        },
        {
            "start": 211.54,
            "end": 215.56,
            "text": "因为 AI 是从大量已有作品中学习的，"
        },
        {
            "start": 215.56,
            "end": 220.14,
            "text": "有可能在生成时\"复现\"了训练数据中的某些内容。"
        },
        {
            "start": 220.84000000000003,
            "end": 224.48,
            "text": "如果你用了 AI 生成的一张图片做商业宣传，"
        },
        {
            "start": 224.48,
            "end": 228.04,
            "text": "这张图片恰好跟某个摄影师的作品很像，"
        },
        {
            "start": 228.04,
            "end": 229.84,
            "text": "你可能面临侵权诉讼。"
        },
        {
            "start": 229.84,
            "end": 231.28,
            "text": "实操建议："
        },
        {
            "start": 231.28,
            "end": 234.44,
            "text": "第一，AI 生成的内容在正式商用之前，"
        },
        {
            "start": 234.44,
            "end": 236.28,
            "text": "最好做一下原创性检查。"
        },
        {
            "start": 236.28,
            "end": 238.78,
            "text": "用图片搜索工具查一下 AI"
        },
        {
            "start": 238.78,
            "end": 242.08,
            "text": "生成的图片是否跟已有作品太相似。"
        },
        {
            "start": 242.08,
            "end": 245.22,
            "text": "第二，重要的商业素材，比如品牌logo、"
        },
        {
            "start": 245.22,
            "end": 248.16,
            "text": "核心宣传图、产品设计，"
        },
        {
            "start": 248.16,
            "end": 250.3,
            "text": "不建议完全依赖 AI 生成。"
        },
        {
            "start": 250.3,
            "end": 252.2,
            "text": "用 AI 做初稿可以，"
        },
        {
            "start": 252.2,
            "end": 255.9,
            "text": "但最终版本应该有人类设计师的实质性创作。"
        },
        {
            "start": 255.9,
            "end": 259.98,
            "text": "第四个新问题：AI 发明的专利归属。"
        },
        {
            "start": 259.98,
            "end": 263.96,
            "text": "如果 AI 自主完成了一项技术发明，专利归谁？"
        },
        {
            "start": 263.96,
            "end": 269.18,
            "text": "目前全球大部分国家的专利法都要求发明人必须是自然人。"
        },
        {
            "start": 269.18,
            "end": 272.2,
            "text": "也就是说，AI 不能作为发明人申请专利。"
        },
        {
            "start": 272.2,
            "end": 273.3,
            "text": "这意味着："
        },
        {
            "start": 273.3,
            "end": 276.34,
            "text": "如果一项发明确实是 AI 完成的，"
        },
        {
            "start": 276.34,
            "end": 279.02,
            "text": "从法律上来说可能不能申请专利。"
        },
        {
            "start": 279.02,
            "end": 282.54,
            "text": "但如果人类在 AI 辅助下完成了发明，"
        },
        {
            "start": 282.54,
            "end": 285.46,
            "text": "人类可以作为发明人申请专利。"
        },
        {
            "start": 285.46,
            "end": 289.38,
            "text": "实操建议：在用 AI 辅助做技术研发时，"
        },
        {
            "start": 289.38,
            "end": 292.68,
            "text": "确保人类研发人员有实质性的创造贡献。"
        },
        {
            "start": 292.68,
            "end": 296.02,
            "text": "记录好人类的参与过程和创造性贡献。"
        },
        {
            "start": 296.02,
            "end": 298.7,
            "text": "这样在申请专利时更有保障。"
        },
        {
            "start": 298.7,
            "end": 301.4,
            "text": "回到传统的知识产权保护。"
        },
        {
            "start": 301.4,
            "end": 305.38,
            "text": "AI 时代，保护自己的知识产权比以前更重要。"
        },
        {
            "start": 305.38,
            "end": 306.96,
            "text": "几个实操建议。"
        },
        {
            "start": 306.96,
            "end": 309.26,
            "text": "第一，及时注册商标。"
        },
        {
            "start": 309.26,
            "end": 311.34,
            "text": "不要等品牌做大了再注册。"
        },
        {
            "start": 311.34,
            "end": 312.5,
            "text": "越早越好。"
        },
        {
            "start": 312.5,
            "end": 316.82,
            "text": "注册的范围要覆盖你当前和未来可能涉及的品类。"
        },
        {
            "start": 316.82,
            "end": 320.36,
            "text": "第二，重要的技术创新及时申请专利。"
        },
        {
            "start": 320.36,
            "end": 324.18,
            "text": "专利是\"先申请制\"，谁先申请谁拿到。"
        },
        {
            "start": 324.18,
            "end": 325.08,
            "text": "不要犹豫。"
        },
        {
            "start": 325.08,
            "end": 327.48,
            "text": "第三，保留原创证据。"
        },
        {
            "start": 327.48,
            "end": 331.12,
            "text": "你的原创内容，设计稿、文章、代码，"
        },
        {
            "start": 331.12,
            "end": 334.18,
            "text": "要保留创作的时间戳和过程记录。"
        },
        {
            "start": 334.18,
            "end": 337.96,
            "text": "一旦发生侵权纠纷，这些是重要的证据。"
        },
        {
            "start": 337.96,
            "end": 341.58,
            "text": "第四，在合同中明确知识产权条款。"
        },
        {
            "start": 341.58,
            "end": 344.64,
            "text": "上一期讲过的，跟客户、供应商、"
        },
        {
            "start": 344.64,
            "end": 346.52,
            "text": "合作伙伴签合同时，"
        },
        {
            "start": 346.52,
            "end": 348.46,
            "text": "IP 归属一定要写清楚。"
        },
        {
            "start": 348.46,
            "end": 350.81999999999994,
            "text": "第五，用 AI 来监控侵权。"
        },
        {
            "start": 350.82,
            "end": 354.18,
            "text": "AI 可以帮你在网上自动搜索和发现可能"
        },
        {
            "start": 354.18,
            "end": 356.12,
            "text": "侵犯你商标或版权的内容。"
        },
        {
            "start": 356.12,
            "end": 358.64,
            "text": "比你人工监控效率高得多。"
        },
        {
            "start": 358.64,
            "end": 359.84,
            "text": "好，总结一下。"
        },
        {
            "start": 359.84,
            "end": 362.76,
            "text": "知识产权三大类：专利保护技术、"
        },
        {
            "start": 362.76,
            "end": 365.2,
            "text": "商标保护品牌、版权保护作品。"
        },
        {
            "start": 365.2,
            "end": 367.24,
            "text": "AI 时代四个新问题："
        },
        {
            "start": 367.24,
            "end": 369.6,
            "text": "AI 生成内容的版权归属、"
        },
        {
            "start": 369.6,
            "end": 371.32,
            "text": "训练数据的版权争议、"
        },
        {
            "start": 371.32,
            "end": 375.08,
            "text": "AI 内容的侵权风险、AI 发明的专利归属。"
        },
        {
            "start": 375.08,
            "end": 376.62,
            "text": "实操建议："
        },
        {
            "start": 376.62,
            "end": 379.7,
            "text": "在 AI 创作中保持人类的创造性参与、"
        },
        {
            "start": 379.7,
            "end": 381.92,
            "text": "检查 AI 内容的原创性、"
        },
        {
            "start": 381.92,
            "end": 383.84,
            "text": "及时注册商标和专利、"
        },
        {
            "start": 383.84,
            "end": 385.98,
            "text": "合同中写清楚 IP 条款。"
        },
        {
            "start": 385.98,
            "end": 389.06,
            "text": "下一期我们聊数据隐私与合规。"
        },
        {
            "start": 389.06,
            "end": 391.16,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 391.16,
            "end": 394.34,
            "text": "1. 知识产权三大类：专利（技术）、"
        },
        {
            "start": 394.34,
            "end": 396.7,
            "text": "商标（品牌）、版权（作品）"
        },
        {
            "start": 396.7,
            "end": 399.86,
            "text": "2. AI 新问题：AI 生成内容版权、"
        },
        {
            "start": 399.86,
            "end": 403.64,
            "text": "训练数据争议、AI 侵权风险、AI 发明专利"
        },
        {
            "start": 403.64,
            "end": 408.72,
            "text": "3. 关键原则：在 AI 创作中保持人类创造性参与"
        },
        {
            "start": 408.72,
            "end": 411.82,
            "text": "4. 实操：及时注册商标专利、"
        },
        {
            "start": 411.82,
            "end": 414.96,
            "text": "保留原创证据、合同明确 IP 条款"
        },
        {
            "start": 414.96,
            "end": 420.48,
            "text": "1. 你的核心品牌和技术有没有注册商标和申请专利？"
        },
        {
            "start": 420.48,
            "end": 424.04,
            "text": "2. 你的公司在用 AI 生成商业内容吗？"
        },
        {
            "start": 424.04,
            "end": 426.0,
            "text": "有没有考虑过版权风险？"
        },
        {
            "start": 426.0,
            "end": 429.9999999999998,
            "text": "3. 你的合同中有没有明确知识产权归属的条款？"
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
], navigation: { nextLessonUrl: "./lesson-legal-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-04.html?entry={entry}", secondaryHref: "./lesson-legal-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-03", coachSource: "./ai-coach.html?source=lesson-legal-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于知识产权保护：AI 时代的 IP 新问题的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "知识产权保护：AI 时代的 IP 新问题", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
