(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第1课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 法律、合规与风险',
      lessonTitle: "第1课：公司法基础：企业设立与法人治理",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep97-company-law/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：公司法基础：企业设立与法人治理", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "公司法基础：企业设立与法人治理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "合同法要点：签合同前必知的事",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "知识产权保护：AI 时代的 IP 新问题",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "数据隐私与合规：GDPR 与个人信息保护法",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-legal-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 1/10", "建议下一节：合同法要点：签合同前必知的事", '也可以先整理这一节'], nextHref: "./lesson-legal-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-01", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson1", audioSource: './assets/audio/legal-ep97-company-law.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep97-company-law.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep97-company-law/slide_01.png",
            "label": "公司法基础：企业设立与法人治理",
            "caption": "这一节会帮助你系统理解：公司法基础：企业设立与法人治理"
        },
        {
            "file": "legal-ep97-company-law/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep97-company-law/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "如果你计划未来上市，最终需要转成股份有限公司。 第三种：个体工商户。"
        },
        {
            "file": "legal-ep97-company-law/slide_04.png",
            "label": "常见误区与代价",
            "caption": "董事会负责公司的经营管理决策。 小公司可以不设董事会，设一个执行董事就行。"
        },
        {
            "file": "legal-ep97-company-law/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "第二个原则：股权要有成熟机制。 什么叫\"成熟机制\"？"
        },
        {
            "file": "legal-ep97-company-law/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "什么事情需要全体股东同意？ 什么事情只需要多数同意？"
        },
        {
            "file": "legal-ep97-company-law/slide_07.png",
            "label": "本节行动提示",
            "caption": "但要强调：AI 不能替代律师。 AI 可以帮你建立基本认知、做初步的分析。"
        },
        {
            "file": "legal-ep97-company-law/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.58,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.86,
            "end": 3.98,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.98,
            "end": 8.64,
            "text": "从今天开始我们进入模块八：商业法律与合规。"
        },
        {
            "start": 8.64,
            "end": 12.62,
            "text": "很多创业者和管理者觉得法律这个话题很枯燥。"
        },
        {
            "start": 12.62,
            "end": 15.82,
            "text": "但现实是，不懂法律的代价非常高。"
        },
        {
            "start": 15.82,
            "end": 17.92,
            "text": "一个合同条款没看清、"
        },
        {
            "start": 18.02,
            "end": 19.82,
            "text": "一个股权结构没设计好、"
        },
        {
            "start": 19.82,
            "end": 21.8,
            "text": "一个合规问题没处理好，"
        },
        {
            "start": 21.8,
            "end": 25.06,
            "text": "可能会让你损失几百万甚至几千万。"
        },
        {
            "start": 25.06,
            "end": 28.019999999999996,
            "text": "我不是律师，今天讲的不是法律咨询，"
        },
        {
            "start": 28.02,
            "end": 30.64,
            "text": "而是管理者必须了解的法律常识。"
        },
        {
            "start": 30.76,
            "end": 33.46,
            "text": "让你知道什么时候该注意什么问题，"
        },
        {
            "start": 33.46,
            "end": 35.76,
            "text": "什么时候该找专业律师。"
        },
        {
            "start": 35.88,
            "end": 37.78,
            "text": "先讲公司类型的选择。"
        },
        {
            "start": 37.78,
            "end": 40.7,
            "text": "你创业的第一步就是注册一家公司。"
        },
        {
            "start": 40.7,
            "end": 42.1,
            "text": "选什么类型？"
        },
        {
            "start": 42.1,
            "end": 44.72,
            "text": "在中国常见的公司类型有几种。"
        },
        {
            "start": 44.72,
            "end": 47.06,
            "text": "第一种：有限责任公司。"
        },
        {
            "start": 47.24,
            "end": 48.86,
            "text": "这是最常见的类型。"
        },
        {
            "start": 48.86,
            "end": 50.44,
            "text": "\"有限责任\"的意思是，"
        },
        {
            "start": 50.44,
            "end": 52.04,
            "text": "如果公司出了问题，"
        },
        {
            "start": 52.04,
            "end": 55.52,
            "text": "股东只在自己出资的范围内承担责任。"
        },
        {
            "start": 55.94,
            "end": 60.64,
            "text": "你出了一百万，最多亏一百万，不会牵连到你的个人资产。"
        },
        {
            "start": 60.64,
            "end": 63.1,
            "text": "这是大多数创业公司的首选。"
        },
        {
            "start": 63.74,
            "end": 65.86,
            "text": "适合绝大多数中小企业。"
        },
        {
            "start": 65.86,
            "end": 67.44,
            "text": "第二种：股份有限公司。"
        },
        {
            "start": 67.66,
            "end": 69.4,
            "text": "跟有限责任公司类似，"
        },
        {
            "start": 69.4,
            "end": 71.52,
            "text": "但股权被分成等额的股份，"
        },
        {
            "start": 71.52,
            "end": 73.88,
            "text": "可以更灵活地转让和交易。"
        },
        {
            "start": 74.3,
            "end": 78.2,
            "text": "如果你计划未来上市，最终需要转成股份有限公司。"
        },
        {
            "start": 78.75999999999999,
            "end": 80.6,
            "text": "第三种：个体工商户。"
        },
        {
            "start": 80.78,
            "end": 83.62,
            "text": "最简单的形式，适合一个人做的小生意。"
        },
        {
            "start": 83.62,
            "end": 86.36,
            "text": "但注意：个体工商户是无限责任，"
        },
        {
            "start": 86.66,
            "end": 89.9,
            "text": "意味着你的个人资产和经营资产不分开。"
        },
        {
            "start": 89.9,
            "end": 93.66,
            "text": "如果经营出了问题，你的个人资产也可能被追偿。"
        },
        {
            "start": 93.66,
            "end": 95.48,
            "text": "第四种：合伙企业。"
        },
        {
            "start": 95.5,
            "end": 99.2,
            "text": "适合一群人合伙做事，比如律所、会计师事务所。"
        },
        {
            "start": 99.2,
            "end": 101.72,
            "text": "有普通合伙和有限合伙两种。"
        },
        {
            "start": 101.72,
            "end": 105.08,
            "text": "有限合伙在私募基金和创业投资中非常常见。"
        },
        {
            "start": 105.08,
            "end": 109.82,
            "text": "对于大多数创业者来说，有限责任公司是最稳妥的选择。"
        },
        {
            "start": 109.82,
            "end": 114.34,
            "text": "记住一个原则：\"永远把个人资产和公司资产分开。"
        },
        {
            "start": 114.34,
            "end": 114.76,
            "text": "\""
        },
        {
            "start": 114.76,
            "end": 118.0,
            "text": "好，公司注册了，下一个重要话题：法人治理结构。"
        },
        {
            "start": 118.47999999999999,
            "end": 122.5,
            "text": "法人治理就是公司内部的权力分配和决策机制。"
        },
        {
            "start": 122.5,
            "end": 124.28,
            "text": "谁有权做什么决定？"
        },
        {
            "start": 124.38,
            "end": 125.5,
            "text": "怎么做决定？"
        },
        {
            "start": 125.5,
            "end": 128.78,
            "text": "一家有限责任公司的标准治理结构有三层。"
        },
        {
            "start": 129.26,
            "end": 130.42,
            "text": "第一层：股东会。"
        },
        {
            "start": 130.42,
            "end": 131.76,
            "text": "由所有股东组成。"
        },
        {
            "start": 131.76,
            "end": 134.24,
            "text": "股东会是公司的最高权力机构。"
        },
        {
            "start": 134.24,
            "end": 137.02,
            "text": "决定公司的大事：修改公司章程、"
        },
        {
            "start": 137.3,
            "end": 139.72,
            "text": "增减注册资本、公司合并或分立、"
        },
        {
            "start": 140.12,
            "end": 141.38,
            "text": "选举董事和监事。"
        },
        {
            "start": 141.38,
            "end": 144.28,
            "text": "第二层：董事会（或执行董事）。"
        },
        {
            "start": 144.28,
            "end": 146.54,
            "text": "由股东会选举产生。"
        },
        {
            "start": 146.54,
            "end": 149.62,
            "text": "董事会负责公司的经营管理决策。"
        },
        {
            "start": 149.62,
            "end": 153.98,
            "text": "小公司可以不设董事会，设一个执行董事就行。"
        },
        {
            "start": 153.98,
            "end": 155.5,
            "text": "第三层：经理层。"
        },
        {
            "start": 155.5,
            "end": 156.96,
            "text": "由董事会聘任。"
        },
        {
            "start": 156.96,
            "end": 159.48,
            "text": "负责公司的日常经营管理。"
        },
        {
            "start": 159.48,
            "end": 161.60000000000002,
            "text": "总经理向董事会汇报。"
        },
        {
            "start": 161.60000000000002,
            "end": 164.54,
            "text": "很多初创公司的创始人身兼多职。"
        },
        {
            "start": 164.54,
            "end": 168.24,
            "text": "创始人既是股东、又是董事、又是总经理。"
        },
        {
            "start": 168.24,
            "end": 170.02,
            "text": "公司小的时候没问题。"
        },
        {
            "start": 170.02,
            "end": 174.58,
            "text": "但公司长大了、股东变多了，这个治理结构就很重要了。"
        },
        {
            "start": 174.58,
            "end": 177.0,
            "text": "特别是引入外部投资人之后。"
        },
        {
            "start": 177.0,
            "end": 180.96,
            "text": "接下来讲一个创业者最关心的话题：股权设计。"
        },
        {
            "start": 180.96,
            "end": 185.4,
            "text": "股权设计是我见过的创业公司最常犯错的地方之一。"
        },
        {
            "start": 185.4,
            "end": 187.94,
            "text": "很多公司死不是因为产品不好、"
        },
        {
            "start": 187.94,
            "end": 188.76,
            "text": "市场不行，"
        },
        {
            "start": 188.76,
            "end": 192.7,
            "text": "而是因为股权结构有问题导致合伙人内斗。"
        },
        {
            "start": 192.7,
            "end": 194.02,
            "text": "几个核心原则。"
        },
        {
            "start": 194.02,
            "end": 197.22,
            "text": "第一个原则：创始人必须有控制权。"
        },
        {
            "start": 197.22,
            "end": 201.36,
            "text": "如果你是主要的创始人，你应该持有公司的控制权。"
        },
        {
            "start": 201.36,
            "end": 203.02,
            "text": "在中国的公司法下，"
        },
        {
            "start": 203.02,
            "end": 206.32,
            "text": "持有三分之二以上股权可以做任何重大决策。"
        },
        {
            "start": 206.32,
            "end": 209.66,
            "text": "持有二分之一以上可以做大部分日常决策。"
        },
        {
            "start": 209.66,
            "end": 212.74,
            "text": "如果创始人的股份被稀释到没有控制权，"
        },
        {
            "start": 212.74,
            "end": 216.64,
            "text": "外部投资人或者其他合伙人就可能否决你的决策。"
        },
        {
            "start": 216.64,
            "end": 219.12,
            "text": "公司的方向就不再由你说了算。"
        },
        {
            "start": 219.12,
            "end": 221.64,
            "text": "第二个原则：股权要有成熟机制。"
        },
        {
            "start": 221.64,
            "end": 223.36,
            "text": "什么叫\"成熟机制\"？"
        },
        {
            "start": 223.36,
            "end": 227.8,
            "text": "就是股权不是一次性全部给你的，而是分期兑现的。"
        },
        {
            "start": 227.8,
            "end": 230.98,
            "text": "比如四年成熟期，每年成熟百分之二十五。"
        },
        {
            "start": 231.44,
            "end": 232.3,
            "text": "为什么要这样？"
        },
        {
            "start": 232.3,
            "end": 235.26,
            "text": "因为如果合伙人第二年就离开了，"
        },
        {
            "start": 235.26,
            "end": 237.24,
            "text": "他不应该拿走全部的股权。"
        },
        {
            "start": 237.24,
            "end": 242.24,
            "text": "成熟机制保证了只有持续贡献的人才能拿到全部股权。"
        },
        {
            "start": 242.24,
            "end": 245.02,
            "text": "第三个原则：预留期权池。"
        },
        {
            "start": 245.02,
            "end": 246.76,
            "text": "在股权分配的时候，"
        },
        {
            "start": 246.76,
            "end": 250.24,
            "text": "留出百分之十到二十的股份作为期权池。"
        },
        {
            "start": 250.24,
            "end": 253.4,
            "text": "未来招聘核心人才、激励团队用的。"
        },
        {
            "start": 253.4,
            "end": 257.66,
            "text": "如果一开始就把所有股份分完了，后面就没有空间了。"
        },
        {
            "start": 257.66,
            "end": 260.46,
            "text": "第四个原则：白纸黑字写清楚。"
        },
        {
            "start": 261.02,
            "end": 263.78,
            "text": "所有的股权安排必须写进股东协议。"
        },
        {
            "start": 263.78,
            "end": 268.72,
            "text": "包括：每个人持多少股、成熟条件、退出机制、竞业限制。"
        },
        {
            "start": 268.72,
            "end": 270.36,
            "text": "口头承诺不算数。"
        },
        {
            "start": 270.36,
            "end": 272.1,
            "text": "最后讲公司章程。"
        },
        {
            "start": 272.1,
            "end": 275.4,
            "text": "公司章程是公司最重要的法律文件。"
        },
        {
            "start": 275.4,
            "end": 279.44,
            "text": "很多人注册公司的时候用的是工商局的模板章程，"
        },
        {
            "start": 279.44,
            "end": 282.5,
            "text": "填一下公司名称和股东信息就交了。"
        },
        {
            "start": 282.5,
            "end": 283.76,
            "text": "这是一个很大的隐患。"
        },
        {
            "start": 283.76,
            "end": 288.52,
            "text": "模板章程是最基础的版本，很多关键条款没有涉及。"
        },
        {
            "start": 288.52,
            "end": 291.78,
            "text": "公司章程中应该关注的几个重要条款。"
        },
        {
            "start": 291.78,
            "end": 293.3,
            "text": "第一，表决机制。"
        },
        {
            "start": 293.3,
            "end": 295.86,
            "text": "什么事情需要全体股东同意？"
        },
        {
            "start": 295.86,
            "end": 298.14,
            "text": "什么事情只需要多数同意？"
        },
        {
            "start": 298.14,
            "end": 300.62,
            "text": "什么事情执行董事可以自己决定？"
        },
        {
            "start": 300.62,
            "end": 302.66,
            "text": "第二，股权转让限制。"
        },
        {
            "start": 302.66,
            "end": 305.9,
            "text": "股东想把股份卖给外人，需要什么条件？"
        },
        {
            "start": 305.9,
            "end": 308.48,
            "text": "其他股东有没有优先购买权？"
        },
        {
            "start": 308.48,
            "end": 310.12,
            "text": "第三，利润分配。"
        },
        {
            "start": 310.12,
            "end": 311.22,
            "text": "赚了钱怎么分？"
        },
        {
            "start": 311.38,
            "end": 312.04,
            "text": "什么时候分？"
        },
        {
            "start": 312.04,
            "end": 312.8,
            "text": "分多少？"
        },
        {
            "start": 313.0,
            "end": 314.18,
            "text": "第四，退出机制。"
        },
        {
            "start": 314.18,
            "end": 316.96,
            "text": "如果某个股东想退出，怎么定价？"
        },
        {
            "start": 316.96,
            "end": 317.82,
            "text": "怎么操作？"
        },
        {
            "start": 317.82,
            "end": 321.72,
            "text": "这些条款在公司顺利的时候没人关心。"
        },
        {
            "start": 321.72,
            "end": 325.46,
            "text": "但一旦出了分歧，章程就是解决争议的依据。"
        },
        {
            "start": 325.91999999999996,
            "end": 330.12,
            "text": "没有写清楚的条款就要按照公司法的默认规则来处理，"
        },
        {
            "start": 330.12,
            "end": 332.86,
            "text": "而默认规则可能不是你想要的。"
        },
        {
            "start": 332.86,
            "end": 335.32,
            "text": "AI 在公司法领域能帮你做什么？"
        },
        {
            "start": 335.32,
            "end": 339.58,
            "text": "第一，AI 可以帮你分析和对比不同公司类型的优劣。"
        },
        {
            "start": 339.58,
            "end": 341.62,
            "text": "你把你的情况告诉 AI，"
        },
        {
            "start": 341.62,
            "end": 344.94,
            "text": "它可以帮你分析哪种公司类型最适合你。"
        },
        {
            "start": 344.94,
            "end": 348.35,
            "text": "第二，AI 可以帮你审查公司章程。"
        },
        {
            "start": 348.35,
            "end": 349.98,
            "text": "把你的章程发给 AI，"
        },
        {
            "start": 349.98,
            "end": 353.04,
            "text": "让它帮你检查有没有遗漏的重要条款，"
        },
        {
            "start": 353.04,
            "end": 355.14,
            "text": "有没有对你不利的条款。"
        },
        {
            "start": 355.68,
            "end": 358.16,
            "text": "第三，AI 可以帮你理解法律条文。"
        },
        {
            "start": 358.16,
            "end": 361.08000000000004,
            "text": "公司法的很多条款读起来很晦涩。"
        },
        {
            "start": 361.08000000000004,
            "end": 364.1,
            "text": "让 AI 用通俗的语言解释给你听。"
        },
        {
            "start": 364.1,
            "end": 367.1,
            "text": "但要强调：AI 不能替代律师。"
        },
        {
            "start": 367.1,
            "end": 370.38,
            "text": "AI 可以帮你建立基本认知、做初步的分析。"
        },
        {
            "start": 370.38,
            "end": 372.56,
            "text": "但涉及到具体的法律操作，"
        },
        {
            "start": 372.56,
            "end": 374.74,
            "text": "比如起草正式的股东协议、"
        },
        {
            "start": 374.74,
            "end": 378.06,
            "text": "处理股权纠纷，一定要请专业律师。"
        },
        {
            "start": 378.06,
            "end": 379.56,
            "text": "好，总结一下。"
        },
        {
            "start": 379.56,
            "end": 381.7,
            "text": "四种常见公司类型："
        },
        {
            "start": 381.7,
            "end": 385.2,
            "text": "有限责任公司（首选）、股份有限公司、"
        },
        {
            "start": 385.2,
            "end": 387.48,
            "text": "个体工商户、合伙企业。"
        },
        {
            "start": 387.48,
            "end": 391.02,
            "text": "治理结构三层：股东会、董事会、经理层。"
        },
        {
            "start": 391.02,
            "end": 395.1,
            "text": "股权设计四原则：创始人保持控制权、"
        },
        {
            "start": 395.1,
            "end": 399.14,
            "text": "股权成熟机制、预留期权池、白纸黑字。"
        },
        {
            "start": 399.14,
            "end": 402.46,
            "text": "公司章程要自定义，不要用默认模板。"
        },
        {
            "start": 402.46,
            "end": 405.4,
            "text": "AI 可以辅助分析但不能替代律师。"
        },
        {
            "start": 405.4,
            "end": 407.76,
            "text": "下一期我们聊合同法要点。"
        },
        {
            "start": 407.76,
            "end": 409.88,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 409.88,
            "end": 411.78,
            "text": "1. 四种公司类型："
        },
        {
            "start": 411.78,
            "end": 414.06,
            "text": "有限责任公司最常见，"
        },
        {
            "start": 414.06,
            "end": 416.58,
            "text": "永远把个人和公司资产分开"
        },
        {
            "start": 416.58,
            "end": 421.06,
            "text": "2. 治理三层：股东会（最高权力）→ 董事会 → 经理层"
        },
        {
            "start": 421.06,
            "end": 424.62,
            "text": "3. 股权四原则：创始人控制权、"
        },
        {
            "start": 424.62,
            "end": 427.48,
            "text": "成熟机制、预留期权池、书面协议"
        },
        {
            "start": 427.48,
            "end": 432.42,
            "text": "4. 公司章程要自定义，关注表决、转让、分配、退出条款"
        },
        {
            "start": 432.42,
            "end": 435.46,
            "text": "1. 你的公司是什么类型的？"
        },
        {
            "start": 435.46,
            "end": 437.86,
            "text": "这个类型是否最适合你的业务？"
        },
        {
            "start": 438.98,
            "end": 442.02,
            "text": "2. 你的股权结构设计合理吗？"
        },
        {
            "start": 442.02,
            "end": 443.98,
            "text": "创始人有没有保持控制权？"
        },
        {
            "start": 443.98,
            "end": 447.44,
            "text": "3. 你的公司章程是自定义的还是模板？"
        },
        {
            "start": 447.44,
            "end": 449.9,
            "text": "有没有检查过关键条款？"
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
], navigation: { nextLessonUrl: "./lesson-legal-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-02.html?entry={entry}", secondaryHref: "./lesson-legal-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-01", coachSource: "./ai-coach.html?source=lesson-legal-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于公司法基础：企业设立与法人治理的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "公司法基础：企业设立与法人治理", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetalegal: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
