(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第2课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 法律、合规与风险',
      lessonTitle: "第2课：合同法要点：签合同前必知的事",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep98-contract-law/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：合同法要点：签合同前必知的事", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-03.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "知识产权保护：AI 时代的 IP 新问题",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-legal-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 2/10", "建议下一节：知识产权保护：AI 时代的 IP 新问题", '也可以先整理这一节'], nextHref: "./lesson-legal-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-02", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson2", audioSource: './assets/audio/legal-ep98-contract-law.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep98-contract-law.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep98-contract-law/slide_01.png",
            "label": "合同法要点：签合同前必知的事",
            "caption": "这一节会帮助你系统理解：合同法要点：签合同前必知的事"
        },
        {
            "file": "legal-ep98-contract-law/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep98-contract-law/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "\"提供咨询服务\"太模糊。 \"提供为期三个月的市场进入策略咨询服务，包含行业分析报告一份、竞品分析报告一份、战略建议方案一份\"才够明确。"
        },
        {
            "file": "legal-ep98-contract-law/slide_04.png",
            "label": "常见误区与代价",
            "caption": "这样即使对方最后赖账，你的损失也是可控的。 第二个坑：验收标准。"
        },
        {
            "file": "legal-ep98-contract-law/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "要注意保密的范围是什么、保密期限是多长、违反保密义务的后果是什么。 特别要注意\"保密期限\"。"
        },
        {
            "file": "legal-ep98-contract-law/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "如果你是卖方，这个条款保护你。 如果你是买方，你要考虑这个上限是否能覆盖你可能的损失。"
        },
        {
            "file": "legal-ep98-contract-law/slide_07.png",
            "label": "本节行动提示",
            "caption": "但还是要强调：AI 的审查是辅助性的。 重要的合同，特别是金额大的、涉及知识产权的、有竞业限制的，一定要让专业律师把关。"
        },
        {
            "file": "legal-ep98-contract-law/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.839999999999999,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.839999999999999,
            "end": 3.86,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.86,
            "end": 5.42,
            "text": "今天聊合同法。"
        },
        {
            "start": 5.5,
            "end": 6.84,
            "text": "做生意离不开签合同。"
        },
        {
            "start": 6.84,
            "end": 9.2,
            "text": "但很多人签合同的方式是："
        },
        {
            "start": 9.2,
            "end": 11.840000000000002,
            "text": "对方发过来一份合同，大概扫一眼，"
        },
        {
            "start": 11.840000000000002,
            "end": 13.3,
            "text": "觉得差不多就签了。"
        },
        {
            "start": 13.3,
            "end": 15.86,
            "text": "等出了问题才发现合同里有\"坑\"。"
        },
        {
            "start": 16.379999999999995,
            "end": 18.4,
            "text": "今天不讲复杂的法律条文。"
        },
        {
            "start": 18.4,
            "end": 21.84,
            "text": "我教你签合同之前必须检查的几个关键点，"
        },
        {
            "start": 21.84,
            "end": 23.98,
            "text": "以及 AI 怎么帮你做合同审查。"
        },
        {
            "start": 23.98,
            "end": 26.22,
            "text": "先讲一份有效合同的基本要素。"
        },
        {
            "start": 26.22,
            "end": 29.4,
            "text": "一份合同要成立，必须具备几个要素。"
        },
        {
            "start": 30.02,
            "end": 32.14,
            "text": "第一，双方主体明确。"
        },
        {
            "start": 32.14,
            "end": 33.54,
            "text": "合同双方是谁？"
        },
        {
            "start": 33.54,
            "end": 37.78,
            "text": "公司名称、法定代表人、注册地址、统一社会信用代码。"
        },
        {
            "start": 37.78,
            "end": 39.66,
            "text": "这些信息必须准确。"
        },
        {
            "start": 39.66,
            "end": 41.12,
            "text": "听起来是废话？"
        },
        {
            "start": 41.12,
            "end": 45.54,
            "text": "但确实有人签合同的时候没注意对方的主体是谁。"
        },
        {
            "start": 45.54,
            "end": 47.76,
            "text": "你以为你跟 A 公司签了合同，"
        },
        {
            "start": 47.76,
            "end": 51.04,
            "text": "结果合同上写的是 A 公司的一个子公司 B。"
        },
        {
            "start": 51.04,
            "end": 55.22,
            "text": "B 公司可能是一个空壳，出了问题你找不到人赔。"
        },
        {
            "start": 55.22,
            "end": 56.92,
            "text": "第二，标的明确。"
        },
        {
            "start": 56.92,
            "end": 59.18,
            "text": "就是合同约定的事情是什么。"
        },
        {
            "start": 59.18,
            "end": 61.34,
            "text": "你买什么、卖什么、提供什么服务。"
        },
        {
            "start": 61.34,
            "end": 63.36,
            "text": "必须描述清楚，不能含糊。"
        },
        {
            "start": 63.36,
            "end": 65.24,
            "text": "\"提供咨询服务\"太模糊。"
        },
        {
            "start": 65.24,
            "end": 68.96,
            "text": "\"提供为期三个月的市场进入策略咨询服务，"
        },
        {
            "start": 68.96,
            "end": 70.64,
            "text": "包含行业分析报告一份、"
        },
        {
            "start": 70.64,
            "end": 72.18,
            "text": "竞品分析报告一份、"
        },
        {
            "start": 72.18,
            "end": 74.46,
            "text": "战略建议方案一份\"才够明确。"
        },
        {
            "start": 74.46,
            "end": 75.98,
            "text": "第三，对价明确。"
        },
        {
            "start": 75.98,
            "end": 77.98,
            "text": "就是价格和付款方式。"
        },
        {
            "start": 77.98,
            "end": 80.54,
            "text": "多少钱、怎么付、什么时候付。"
        },
        {
            "start": 80.54,
            "end": 82.48,
            "text": "第四，履行期限和方式。"
        },
        {
            "start": 82.48,
            "end": 85.4,
            "text": "什么时候交付、怎么交付、在哪里交付。"
        },
        {
            "start": 85.4,
            "end": 86.78,
            "text": "第五，违约责任。"
        },
        {
            "start": 86.78,
            "end": 88.46,
            "text": "如果一方违约了怎么办？"
        },
        {
            "start": 88.46,
            "end": 88.94,
            "text": "赔多少？"
        },
        {
            "start": 89.14,
            "end": 89.9,
            "text": "怎么赔？"
        },
        {
            "start": 89.9,
            "end": 91.48,
            "text": "第六，争议解决。"
        },
        {
            "start": 91.48,
            "end": 92.94,
            "text": "出了纠纷怎么处理？"
        },
        {
            "start": 92.94,
            "end": 94.16,
            "text": "是仲裁还是诉讼？"
        },
        {
            "start": 94.16,
            "end": 96.5,
            "text": "在哪个地方的法院或仲裁机构？"
        },
        {
            "start": 96.5,
            "end": 98.28,
            "text": "好，基本要素讲完了。"
        },
        {
            "start": 98.28,
            "end": 101.6,
            "text": "来看签合同之前必须重点检查的六个\"坑\"。"
        },
        {
            "start": 101.6,
            "end": 104.44,
            "text": "第一个坑：付款条件和付款节点。"
        },
        {
            "start": 104.44,
            "end": 106.64,
            "text": "这是最常出问题的地方。"
        },
        {
            "start": 106.64,
            "end": 110.14,
            "text": "你提供了服务或者交了货，对方不付款。"
        },
        {
            "start": 110.14,
            "end": 113.48,
            "text": "合同里关于付款的条款写得越具体越好。"
        },
        {
            "start": 113.48,
            "end": 114.44,
            "text": "分几期付？"
        },
        {
            "start": 114.56,
            "end": 115.56,
            "text": "每期付多少？"
        },
        {
            "start": 115.56,
            "end": 117.66,
            "text": "触发付款的条件是什么？"
        },
        {
            "start": 117.66,
            "end": 120.04,
            "text": "逾期付款的违约金是多少？"
        },
        {
            "start": 120.04,
            "end": 123.34,
            "text": "建议：不要把全部款项放在最后一期。"
        },
        {
            "start": 123.34,
            "end": 126.98,
            "text": "至少收取百分之三十到五十的预付款。"
        },
        {
            "start": 126.98,
            "end": 129.15999999999997,
            "text": "每完成一个阶段收一笔。"
        },
        {
            "start": 129.16,
            "end": 133.26,
            "text": "这样即使对方最后赖账，你的损失也是可控的。"
        },
        {
            "start": 133.26,
            "end": 135.14,
            "text": "第二个坑：验收标准。"
        },
        {
            "start": 135.14,
            "end": 138.18,
            "text": "如果你是提供服务或者定制产品的，"
        },
        {
            "start": 138.18,
            "end": 139.92,
            "text": "\"验收\"是一个关键环节。"
        },
        {
            "start": 139.92,
            "end": 142.18,
            "text": "验收通过了才能收尾款。"
        },
        {
            "start": 142.18,
            "end": 144.5,
            "text": "但如果验收标准写得很模糊，"
        },
        {
            "start": 144.5,
            "end": 146.9,
            "text": "对方可能会说\"不满意，不验收\"，"
        },
        {
            "start": 146.9,
            "end": 148.5,
            "text": "一直拖着不付款。"
        },
        {
            "start": 148.5,
            "end": 151.64,
            "text": "所以验收标准必须在合同里写清楚。"
        },
        {
            "start": 151.64,
            "end": 153.5,
            "text": "具体的交付物是什么、"
        },
        {
            "start": 153.5,
            "end": 155.82,
            "text": "每个交付物的验收标准是什么、"
        },
        {
            "start": 155.82,
            "end": 158.88,
            "text": "验收的流程是什么、验收的期限是多久。"
        },
        {
            "start": 158.88,
            "end": 163.78,
            "text": "如果在约定期限内对方没有提出异议，视为验收通过。"
        },
        {
            "start": 163.78,
            "end": 166.12,
            "text": "第三个坑：知识产权归属。"
        },
        {
            "start": 166.12,
            "end": 168.62,
            "text": "如果合同涉及到创作、开发、"
        },
        {
            "start": 168.62,
            "end": 169.48,
            "text": "设计等内容，"
        },
        {
            "start": 169.48,
            "end": 171.84,
            "text": "知识产权归谁一定要写清楚。"
        },
        {
            "start": 171.84,
            "end": 174.76,
            "text": "你帮客户做了一套设计方案，"
        },
        {
            "start": 174.76,
            "end": 177.48,
            "text": "这个设计的版权归你还是归客户？"
        },
        {
            "start": 177.48,
            "end": 181.54,
            "text": "你帮客户开发了一个软件，代码的所有权归谁？"
        },
        {
            "start": 181.54,
            "end": 184.66,
            "text": "如果合同没有约定，按照法律默认规则，"
        },
        {
            "start": 184.66,
            "end": 186.98,
            "text": "有时候会出现你意想不到的结果。"
        },
        {
            "start": 186.98,
            "end": 189.3,
            "text": "所以一定要在合同里明确约定。"
        },
        {
            "start": 189.3,
            "end": 190.94,
            "text": "第四个坑：保密条款。"
        },
        {
            "start": 190.94,
            "end": 193.54,
            "text": "很多合同中有保密条款。"
        },
        {
            "start": 193.54,
            "end": 195.72,
            "text": "要注意保密的范围是什么、"
        },
        {
            "start": 195.72,
            "end": 197.18,
            "text": "保密期限是多长、"
        },
        {
            "start": 197.18,
            "end": 199.54,
            "text": "违反保密义务的后果是什么。"
        },
        {
            "start": 199.54,
            "end": 201.54,
            "text": "特别要注意\"保密期限\"。"
        },
        {
            "start": 201.54,
            "end": 205.06,
            "text": "有些合同写的是\"合同终止后保密义务永久有效\"。"
        },
        {
            "start": 205.06,
            "end": 208.64,
            "text": "永久保密在很多情况下是不合理的，也很难执行。"
        },
        {
            "start": 208.64,
            "end": 211.42,
            "text": "通常两到五年的保密期限比较合理。"
        },
        {
            "start": 211.42,
            "end": 214.44,
            "text": "第五个坑：竞业限制和排他条款。"
        },
        {
            "start": 214.44,
            "end": 219.26,
            "text": "有些合同会要求你在合作期间甚至合作结束后一段时间内，"
        },
        {
            "start": 219.26,
            "end": 221.76000000000002,
            "text": "不能为对方的竞争对手提供服务。"
        },
        {
            "start": 222.34,
            "end": 224.46,
            "text": "这个条款本身是合理的。"
        },
        {
            "start": 224.46,
            "end": 226.54,
            "text": "但要注意范围和期限。"
        },
        {
            "start": 226.54,
            "end": 228.5,
            "text": "\"竞争对手\"的定义是什么？"
        },
        {
            "start": 228.5,
            "end": 230.44,
            "text": "限制的地域范围有多大？"
        },
        {
            "start": 230.44,
            "end": 232.1,
            "text": "限制的时间有多长？"
        },
        {
            "start": 232.1,
            "end": 236.36,
            "text": "如果范围太广、时间太长，可能严重影响你的正常经营。"
        },
        {
            "start": 236.36,
            "end": 238.78,
            "text": "第六个坑：责任上限和免责条款。"
        },
        {
            "start": 238.78,
            "end": 241.98,
            "text": "很多大公司的合同模板里会有一条："
        },
        {
            "start": 241.98,
            "end": 245.96,
            "text": "\"甲方在本合同项下的赔偿责任不超过合同总金额。"
        },
        {
            "start": 245.96,
            "end": 246.38,
            "text": "\""
        },
        {
            "start": 246.38,
            "end": 250.02,
            "text": "这意味着如果对方的过错给你造成了一百万的损失，"
        },
        {
            "start": 250.02,
            "end": 252.14,
            "text": "但合同总金额只有十万，"
        },
        {
            "start": 252.14,
            "end": 254.32,
            "text": "对方最多赔你十万。"
        },
        {
            "start": 254.32,
            "end": 256.9,
            "text": "这个条款对谁有利取决于你是哪一方。"
        },
        {
            "start": 256.9,
            "end": 259.3,
            "text": "如果你是卖方，这个条款保护你。"
        },
        {
            "start": 259.3,
            "end": 260.46,
            "text": "如果你是买方，"
        },
        {
            "start": 260.46,
            "end": 264.04,
            "text": "你要考虑这个上限是否能覆盖你可能的损失。"
        },
        {
            "start": 264.04,
            "end": 266.36,
            "text": "AI 在合同审查中非常有用。"
        },
        {
            "start": 266.36,
            "end": 269.48,
            "text": "现在的 AI 工具可以帮你做几件事。"
        },
        {
            "start": 269.48,
            "end": 271.76,
            "text": "第一，快速审查合同。"
        },
        {
            "start": 271.76,
            "end": 273.18,
            "text": "把合同发给 AI，"
        },
        {
            "start": 273.18,
            "end": 276.88,
            "text": "让它帮你检查关键条款是否完整、"
        },
        {
            "start": 276.88,
            "end": 278.64,
            "text": "有没有对你不利的条款、"
        },
        {
            "start": 278.64,
            "end": 279.94,
            "text": "有没有法律风险。"
        },
        {
            "start": 279.94,
            "end": 282.9,
            "text": "你可以这样提问：\"请帮我审查这份合同。"
        },
        {
            "start": 282.9,
            "end": 285.14,
            "text": "我是乙方（服务提供方）。"
        },
        {
            "start": 285.14,
            "end": 288.42,
            "text": "请重点检查：付款条件是否合理、"
        },
        {
            "start": 288.42,
            "end": 290.02,
            "text": "违约责任是否对等、"
        },
        {
            "start": 290.02,
            "end": 291.96,
            "text": "知识产权归属是否明确、"
        },
        {
            "start": 291.96,
            "end": 294.4,
            "text": "有没有对我特别不利的条款。"
        },
        {
            "start": 294.4,
            "end": 294.82,
            "text": "\""
        },
        {
            "start": 294.98,
            "end": 296.78,
            "text": "第二，对比合同版本。"
        },
        {
            "start": 296.78,
            "end": 299.1,
            "text": "如果合同经过了多轮修改，"
        },
        {
            "start": 299.1,
            "end": 302.16,
            "text": "AI 可以帮你对比不同版本之间的差异。"
        },
        {
            "start": 302.16,
            "end": 304.74,
            "text": "确保对方没有偷偷改了某个条款。"
        },
        {
            "start": 304.74,
            "end": 306.9,
            "text": "第三，解释复杂条款。"
        },
        {
            "start": 306.9,
            "end": 310.4,
            "text": "合同中有些条款写得很绕，普通人读不懂。"
        },
        {
            "start": 310.4,
            "end": 314.56,
            "text": "让 AI 用通俗的语言解释这个条款到底是什么意思、"
        },
        {
            "start": 314.56,
            "end": 315.72,
            "text": "对你有什么影响。"
        },
        {
            "start": 315.72,
            "end": 317.64,
            "text": "第四，提出修改建议。"
        },
        {
            "start": 318.24,
            "end": 321.74,
            "text": "AI 可以针对对你不利的条款，给出修改建议。"
        },
        {
            "start": 321.74,
            "end": 325.6,
            "text": "但还是要强调：AI 的审查是辅助性的。"
        },
        {
            "start": 325.6,
            "end": 327.82,
            "text": "重要的合同，特别是金额大的、"
        },
        {
            "start": 327.82,
            "end": 330.3,
            "text": "涉及知识产权的、有竞业限制的，"
        },
        {
            "start": 330.3,
            "end": 332.22,
            "text": "一定要让专业律师把关。"
        },
        {
            "start": 332.22,
            "end": 333.32,
            "text": "好，总结一下。"
        },
        {
            "start": 333.32,
            "end": 336.0,
            "text": "合同六要素：主体、标的、对价、"
        },
        {
            "start": 336.0,
            "end": 338.28,
            "text": "履行方式、违约责任、争议解决。"
        },
        {
            "start": 338.28,
            "end": 341.14,
            "text": "签合同前检查六个\"坑\"：付款条件、"
        },
        {
            "start": 341.14,
            "end": 344.04,
            "text": "验收标准、知识产权归属、保密条款、"
        },
        {
            "start": 344.04,
            "end": 345.94,
            "text": "竞业限制、责任上限。"
        },
        {
            "start": 346.54,
            "end": 349.46,
            "text": "AI 可以帮你快速审查合同、对比版本、"
        },
        {
            "start": 349.46,
            "end": 351.14,
            "text": "解释条款、提修改建议。"
        },
        {
            "start": 351.14,
            "end": 353.24,
            "text": "重要合同请律师把关。"
        },
        {
            "start": 353.24,
            "end": 355.09,
            "text": "下一期我们聊知识产权保护。"
        },
        {
            "start": 355.09,
            "end": 356.94,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 356.94,
            "end": 360.02,
            "text": "1. 合同六要素：主体、标的、对价、"
        },
        {
            "start": 360.02,
            "end": 362.06,
            "text": "履行、违约责任、争议解决"
        },
        {
            "start": 362.06,
            "end": 364.38,
            "text": "2. 六大合同\"坑\"：付款条件、"
        },
        {
            "start": 364.38,
            "end": 366.84,
            "text": "验收标准、IP归属、保密、竞业、"
        },
        {
            "start": 366.84,
            "end": 367.62,
            "text": "责任上限"
        },
        {
            "start": 367.62,
            "end": 371.12,
            "text": "3. AI 合同审查：快速检查风险、"
        },
        {
            "start": 371.12,
            "end": 373.86,
            "text": "对比版本、解释条款、建议修改"
        },
        {
            "start": 373.86,
            "end": 376.94,
            "text": "4. 重要合同永远让专业律师把关"
        },
        {
            "start": 376.94,
            "end": 379.84,
            "text": "1. 你最近签的一份合同，"
        },
        {
            "start": 379.84,
            "end": 383.42,
            "text": "付款条件和验收标准写清楚了吗？"
        },
        {
            "start": 383.54,
            "end": 386.52,
            "text": "2. 你有没有遇到过合同纠纷？"
        },
        {
            "start": 386.52,
            "end": 388.0,
            "text": "问题出在哪个条款？"
        },
        {
            "start": 388.0,
            "end": 393.54,
            "text": "3. 试着把一份合同发给 AI 做审查，看看它能发现什么问题"
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
], navigation: { nextLessonUrl: "./lesson-legal-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-03.html?entry={entry}", secondaryHref: "./lesson-legal-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-02", coachSource: "./ai-coach.html?source=lesson-legal-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于合同法要点：签合同前必知的事的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "合同法要点：签合同前必知的事", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetalegal: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
