(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第8课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第8课：劳动法：AI 替代岗位的法律与伦理",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep104-labor-law/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：劳动法：AI 替代岗位的法律与伦理", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-09.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "劳动法：AI 替代岗位的法律与伦理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：AI 公司的法律踩坑实录",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 10,
                "title": "法律工具箱：AI 时代管理者必备的法律清单",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-legal-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 8/10", "建议下一节：案例：AI 公司的法律踩坑实录", '也可以先整理这一节'], nextHref: "./lesson-legal-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-08", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson8", audioSource: './assets/audio/legal-ep104-labor-law.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep104-labor-law.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep104-labor-law/slide_01.png",
            "label": "劳动法：AI 替代岗位的法律与伦理",
            "caption": "这一节会帮助你系统理解：劳动法：AI 替代岗位的法律与伦理"
        },
        {
            "file": "legal-ep104-labor-law/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep104-labor-law/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "裁员需要提前三十天通知员工，或者额外支付一个月工资作为代通知金。 第四，大规模裁员的额外要求。"
        },
        {
            "file": "legal-ep104-labor-law/slide_04.png",
            "label": "常见误区与代价",
            "caption": "提前三十天通知或支付代通知金，同时支付经济补偿金。 第三步，如果涉及大规模裁员，走大规模裁员的法定程序。"
        },
        {
            "file": "legal-ep104-labor-law/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "第一个伦理考量：渐进式转型，而不是突然裁员。 AI 不是一夜之间就要替代所有岗位的。"
        },
        {
            "file": "legal-ep104-labor-law/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "尽可能帮他们：提供就业推荐、给更长的过渡期、提供额外的培训资源。 第四个伦理考量：透明沟通。"
        },
        {
            "file": "legal-ep104-labor-law/slide_07.png",
            "label": "本节行动提示",
            "caption": "培训效果怎么评估？ 提前做好这个评估，你就能在引入 AI 的同时，最大限度地减少对员工的负面影响。"
        },
        {
            "file": "legal-ep104-labor-law/slide_08.png",
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
            "start": 1.52,
            "end": 3.38,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.38,
            "end": 6.82,
            "text": "今天聊一个敏感但必须面对的话题："
        },
        {
            "start": 6.82,
            "end": 9.76,
            "text": "AI 替代岗位的法律和伦理问题。"
        },
        {
            "start": 9.76,
            "end": 12.28,
            "text": "AI 正在改变很多工作岗位。"
        },
        {
            "start": 12.28,
            "end": 16.88,
            "text": "有些岗位被完全替代，有些岗位的内容被大幅改变。"
        },
        {
            "start": 16.88,
            "end": 18.24,
            "text": "作为管理者，"
        },
        {
            "start": 18.24,
            "end": 21.84,
            "text": "你需要知道怎么在法律框架内处理这些变化，"
        },
        {
            "start": 21.84,
            "end": 24.22,
            "text": "同时承担应有的社会责任。"
        },
        {
            "start": 24.22,
            "end": 26.56,
            "text": "先讲劳动法的基本原则。"
        },
        {
            "start": 26.56,
            "end": 31.24,
            "text": "在中国，劳动关系受《劳动法》和《劳动合同法》的保护。"
        },
        {
            "start": 31.24,
            "end": 33.9,
            "text": "员工不是说裁就能裁的。"
        },
        {
            "start": 33.9,
            "end": 35.34,
            "text": "几个核心的法律规定。"
        },
        {
            "start": 35.34,
            "end": 37.98,
            "text": "第一，解除劳动合同的限制。"
        },
        {
            "start": 37.98,
            "end": 42.18,
            "text": "企业要解除跟员工的劳动合同，必须有法定的理由。"
        },
        {
            "start": 42.18,
            "end": 43.68,
            "text": "不能随意裁人。"
        },
        {
            "start": 43.68,
            "end": 45.88,
            "text": "法定理由包括几种情况。"
        },
        {
            "start": 45.88,
            "end": 48.18,
            "text": "员工严重违反公司规章制度。"
        },
        {
            "start": 48.18,
            "end": 52.86,
            "text": "员工不能胜任工作，经过培训或调岗后仍然不能胜任。"
        },
        {
            "start": 52.86,
            "end": 56.260000000000005,
            "text": "企业经营发生重大变化需要裁员。"
        },
        {
            "start": 56.260000000000005,
            "end": 57.48,
            "text": "第二，经济补偿。"
        },
        {
            "start": 57.48,
            "end": 61.92,
            "text": "因为企业原因解除劳动合同的，要向员工支付经济补偿金。"
        },
        {
            "start": 61.92,
            "end": 65.26,
            "text": "标准是每工作一年支付一个月工资。"
        },
        {
            "start": 65.26,
            "end": 66.98,
            "text": "第三，提前通知。"
        },
        {
            "start": 66.98,
            "end": 70.48,
            "text": "裁员需要提前三十天通知员工，"
        },
        {
            "start": 70.48,
            "end": 73.66,
            "text": "或者额外支付一个月工资作为代通知金。"
        },
        {
            "start": 74.14,
            "end": 76.64,
            "text": "第四，大规模裁员的额外要求。"
        },
        {
            "start": 76.64,
            "end": 81.46,
            "text": "如果一次裁员二十人以上或者占员工总数百分之十以上，"
        },
        {
            "start": 81.46,
            "end": 86.5,
            "text": "需要提前三十天向工会或全体员工说明情况，"
        },
        {
            "start": 86.5,
            "end": 90.2,
            "text": "听取意见，并向劳动行政部门报告。"
        },
        {
            "start": 90.2,
            "end": 93.68,
            "text": "好，现在回到 AI 替代岗位的具体问题。"
        },
        {
            "start": 93.68,
            "end": 98.46,
            "text": "场景一：因为引入 AI 导致某些岗位不再需要了。"
        },
        {
            "start": 98.46,
            "end": 103.14,
            "text": "比如你引入了 AI 客服，原来的人工客服岗位部分不再需要。"
        },
        {
            "start": 103.14,
            "end": 105.58,
            "text": "或者你引入了 AI 做数据分析，"
        },
        {
            "start": 105.58,
            "end": 108.36,
            "text": "原来的数据录入员不需要那么多了。"
        },
        {
            "start": 108.36,
            "end": 109.96,
            "text": "从法律角度来看，"
        },
        {
            "start": 109.96,
            "end": 113.62,
            "text": "\"引入新技术导致岗位取消\"属于\"客观"
        },
        {
            "start": 113.62,
            "end": 115.44,
            "text": "情况发生重大变化\"。"
        },
        {
            "start": 115.44,
            "end": 119.1,
            "text": "企业可以据此调整岗位或者解除劳动合同。"
        },
        {
            "start": 119.1,
            "end": 121.0,
            "text": "但要遵循法定程序。"
        },
        {
            "start": 121.0,
            "end": 122.38,
            "text": "具体怎么操作？"
        },
        {
            "start": 122.38,
            "end": 124.86,
            "text": "第一步，先协商变更劳动合同。"
        },
        {
            "start": 124.86,
            "end": 128.92,
            "text": "跟受影响的员工沟通，看能不能调整到其他岗位。"
        },
        {
            "start": 128.92,
            "end": 132.92,
            "text": "比如人工客服转做 AI 客服的质检员或培训师。"
        },
        {
            "start": 132.92,
            "end": 137.9,
            "text": "第二步，如果无法协商一致，可以书面通知解除劳动合同。"
        },
        {
            "start": 137.9,
            "end": 142.58,
            "text": "提前三十天通知或支付代通知金，同时支付经济补偿金。"
        },
        {
            "start": 142.58,
            "end": 147.84,
            "text": "第三步，如果涉及大规模裁员，走大规模裁员的法定程序。"
        },
        {
            "start": 147.84,
            "end": 152.7,
            "text": "场景二：岗位没有被取消，但工作内容因为 AI 大幅变化。"
        },
        {
            "start": 152.7,
            "end": 157.14,
            "text": "比如你的设计师现在需要用 AI 工具来辅助设计。"
        },
        {
            "start": 157.14,
            "end": 160.72,
            "text": "你的文案写手现在需要用 AI 来辅助创作。"
        },
        {
            "start": 160.72,
            "end": 163.62,
            "text": "工作方式变了，技能要求变了。"
        },
        {
            "start": 163.62,
            "end": 167.18,
            "text": "从法律角度看，这涉及到\"岗位职责变更\"。"
        },
        {
            "start": 167.18,
            "end": 172.08,
            "text": "你可以调整员工的工作内容和技能要求，但要注意几点。"
        },
        {
            "start": 172.08,
            "end": 173.26,
            "text": "第一，合理性。"
        },
        {
            "start": 173.26,
            "end": 177.52,
            "text": "调整必须是合理的、跟原岗位有相关性的。"
        },
        {
            "start": 177.52,
            "end": 179.92,
            "text": "你不能把一个设计师调去当保安。"
        },
        {
            "start": 179.92,
            "end": 182.06,
            "text": "第二，培训义务。"
        },
        {
            "start": 182.06,
            "end": 186.62,
            "text": "如果新的工作方式需要新的技能，企业有义务提供培训。"
        },
        {
            "start": 186.62,
            "end": 190.52,
            "text": "不能说\"你不会用 AI 工具，所以你不胜任\"，你得先教他。"
        },
        {
            "start": 190.52,
            "end": 192.64,
            "text": "第三，薪酬保持。"
        },
        {
            "start": 192.64,
            "end": 195.86,
            "text": "调整工作内容不能成为降薪的理由。"
        },
        {
            "start": 195.86,
            "end": 198.06,
            "text": "除非双方协商同意。"
        },
        {
            "start": 198.06,
            "end": 200.03999999999996,
            "text": "讲完法律，来聊伦理。"
        },
        {
            "start": 200.04,
            "end": 205.26,
            "text": "法律是底线，但只做到法律要求的最低限度是不够的。"
        },
        {
            "start": 205.26,
            "end": 208.14,
            "text": "作为负责任的管理者，你应该考虑更多。"
        },
        {
            "start": 208.14,
            "end": 212.0,
            "text": "第一个伦理考量：渐进式转型，而不是突然裁员。"
        },
        {
            "start": 212.0,
            "end": 215.72,
            "text": "AI 不是一夜之间就要替代所有岗位的。"
        },
        {
            "start": 215.72,
            "end": 217.08,
            "text": "你有时间做规划。"
        },
        {
            "start": 217.08,
            "end": 220.0,
            "text": "最好的做法是：提前规划、渐进实施、"
        },
        {
            "start": 220.0,
            "end": 222.04,
            "text": "给员工转型的时间和机会。"
        },
        {
            "start": 222.04,
            "end": 225.2,
            "text": "比如你计划在未来一年引入 AI 客服。"
        },
        {
            "start": 225.2,
            "end": 228.3,
            "text": "不要等到系统上线那天才通知员工。"
        },
        {
            "start": 228.3,
            "end": 232.7,
            "text": "提前半年就开始沟通，让员工知道变化要来了。"
        },
        {
            "start": 232.7,
            "end": 236.12,
            "text": "同时开始提供培训，帮他们学习新的技能。"
        },
        {
            "start": 236.12,
            "end": 239.66,
            "text": "第二个伦理考量：投资员工的再培训。"
        },
        {
            "start": 239.66,
            "end": 242.36,
            "text": "AI 替代的是岗位，不是人。"
        },
        {
            "start": 242.36,
            "end": 245.34,
            "text": "人可以学习新的技能，胜任新的岗位。"
        },
        {
            "start": 245.34,
            "end": 247.58,
            "text": "最好的企业会把\"因 AI"
        },
        {
            "start": 247.58,
            "end": 251.34,
            "text": "节省的成本\"的一部分投入到员工的再培训中。"
        },
        {
            "start": 251.34,
            "end": 255.96,
            "text": "这不只是伦理上的正确选择，也是商业上的聪明选择。"
        },
        {
            "start": 255.96,
            "end": 259.16,
            "text": "因为重新招聘和培养新员工的成本，"
        },
        {
            "start": 259.16,
            "end": 261.78,
            "text": "往往比再培训现有员工更高。"
        },
        {
            "start": 261.78,
            "end": 266.28,
            "text": "第三个伦理考量：帮助被影响的员工找到新的出路。"
        },
        {
            "start": 267.04,
            "end": 270.48,
            "text": "如果确实有些员工的岗位被 AI 替代了，"
        },
        {
            "start": 270.48,
            "end": 273.1,
            "text": "不能简单地给一笔经济补偿就完了。"
        },
        {
            "start": 273.1,
            "end": 275.64,
            "text": "尽可能帮他们：提供就业推荐、"
        },
        {
            "start": 275.64,
            "end": 279.24,
            "text": "给更长的过渡期、提供额外的培训资源。"
        },
        {
            "start": 279.24,
            "end": 281.64,
            "text": "第四个伦理考量：透明沟通。"
        },
        {
            "start": 282.26000000000005,
            "end": 283.44,
            "text": "不要遮遮掩掩。"
        },
        {
            "start": 283.44,
            "end": 285.9,
            "text": "如果企业正在引入 AI，"
        },
        {
            "start": 285.9,
            "end": 287.62,
            "text": "可能会影响某些岗位，"
        },
        {
            "start": 287.62,
            "end": 289.62,
            "text": "要诚实地跟员工沟通。"
        },
        {
            "start": 289.62,
            "end": 292.06,
            "text": "不确定性比坏消息更让人焦虑。"
        },
        {
            "start": 292.06,
            "end": 296.22,
            "text": "给管理者一个\"AI 岗位影响评估\"的实操框架。"
        },
        {
            "start": 296.22,
            "end": 300.18,
            "text": "在引入任何 AI 系统之前，做以下评估。"
        },
        {
            "start": 300.18,
            "end": 301.74,
            "text": "第一，影响范围。"
        },
        {
            "start": 301.74,
            "end": 304.52,
            "text": "这个 AI 系统上线后，会影响哪些岗位？"
        },
        {
            "start": 304.52,
            "end": 305.58,
            "text": "影响多少人？"
        },
        {
            "start": 305.58,
            "end": 307.36,
            "text": "是完全替代还是部分替代？"
        },
        {
            "start": 307.36,
            "end": 308.6,
            "text": "第二，时间线。"
        },
        {
            "start": 308.6,
            "end": 309.9,
            "text": "影响什么时候开始？"
        },
        {
            "start": 309.9,
            "end": 311.98,
            "text": "是一次性的还是渐进的？"
        },
        {
            "start": 311.98,
            "end": 314.06,
            "text": "第三，转岗可能性。"
        },
        {
            "start": 314.06,
            "end": 316.74,
            "text": "受影响的员工能不能转到其他岗位？"
        },
        {
            "start": 316.74,
            "end": 317.72,
            "text": "需要什么培训？"
        },
        {
            "start": 318.18,
            "end": 320.46,
            "text": "第四，法律合规检查。"
        },
        {
            "start": 320.46,
            "end": 324.96,
            "text": "裁员的规模是否触发大规模裁员的法定程序？"
        },
        {
            "start": 324.96,
            "end": 327.32,
            "text": "经济补偿金的预算是多少？"
        },
        {
            "start": 327.32,
            "end": 331.54,
            "text": "有没有特殊保护的员工（孕期、哺乳期、工伤等）？"
        },
        {
            "start": 331.54,
            "end": 332.96,
            "text": "第五，沟通计划。"
        },
        {
            "start": 332.96,
            "end": 336.84,
            "text": "什么时候、用什么方式跟受影响的员工沟通？"
        },
        {
            "start": 336.84,
            "end": 337.84,
            "text": "谁来沟通？"
        },
        {
            "start": 337.84,
            "end": 339.66,
            "text": "第六，再培训计划。"
        },
        {
            "start": 339.66,
            "end": 340.94,
            "text": "提供什么培训？"
        },
        {
            "start": 340.94,
            "end": 342.28,
            "text": "培训多长时间？"
        },
        {
            "start": 342.28,
            "end": 344.12,
            "text": "培训效果怎么评估？"
        },
        {
            "start": 344.12,
            "end": 345.94,
            "text": "提前做好这个评估，"
        },
        {
            "start": 345.94,
            "end": 348.16,
            "text": "你就能在引入 AI 的同时，"
        },
        {
            "start": 348.16,
            "end": 351.2,
            "text": "最大限度地减少对员工的负面影响。"
        },
        {
            "start": 351.2,
            "end": 352.7,
            "text": "好，总结一下。"
        },
        {
            "start": 352.7,
            "end": 355.74,
            "text": "劳动法基本要求：裁员要有法定理由、"
        },
        {
            "start": 355.74,
            "end": 357.92,
            "text": "支付经济补偿、提前通知、"
        },
        {
            "start": 357.92,
            "end": 360.32,
            "text": "大规模裁员走法定程序。"
        },
        {
            "start": 360.32,
            "end": 365.42,
            "text": "AI 替代岗位的法律操作：先协商调岗、不行再依法解除。"
        },
        {
            "start": 365.42,
            "end": 368.22,
            "text": "四个伦理考量：渐进式转型、"
        },
        {
            "start": 368.22,
            "end": 371.62,
            "text": "投资再培训、帮助找出路、透明沟通。"
        },
        {
            "start": 371.62,
            "end": 374.9,
            "text": "引入 AI 前做六项评估：影响范围、"
        },
        {
            "start": 374.9,
            "end": 377.64,
            "text": "时间线、转岗可能、法律合规、"
        },
        {
            "start": 377.64,
            "end": 379.8,
            "text": "沟通计划、再培训计划。"
        },
        {
            "start": 379.8,
            "end": 383.7800000000001,
            "text": "下一期我们看案例：AI 公司的法律踩坑实录。"
        },
        {
            "start": 383.7800000000001,
            "end": 385.88,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 385.88,
            "end": 388.8,
            "text": "1. 劳动法核心：裁员需法定理由、"
        },
        {
            "start": 388.8,
            "end": 391.78,
            "text": "经济补偿（N+1）、大规模裁员需报备"
        },
        {
            "start": 391.78,
            "end": 393.52,
            "text": "2. AI 替代操作："
        },
        {
            "start": 393.52,
            "end": 397.48,
            "text": "先协商调岗 → 提供培训 → 无法调整再依法解除"
        },
        {
            "start": 397.48,
            "end": 401.26,
            "text": "3. 四个伦理：渐进转型、投资再培训、"
        },
        {
            "start": 401.26,
            "end": 403.14,
            "text": "帮找出路、透明沟通"
        },
        {
            "start": 403.14,
            "end": 406.98,
            "text": "4. 引入 AI 前做六项评估：范围、"
        },
        {
            "start": 406.98,
            "end": 409.98,
            "text": "时间线、转岗、合规、沟通、培训"
        },
        {
            "start": 409.98,
            "end": 415.48,
            "text": "1. 你的企业引入 AI 后，哪些岗位可能受到影响？"
        },
        {
            "start": 415.48,
            "end": 419.34,
            "text": "2. 你有没有员工再培训的计划和预算？"
        },
        {
            "start": 419.34,
            "end": 423.68,
            "text": "3. 你怎么跟团队沟通 AI 对岗位的影响？"
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
], navigation: { nextLessonUrl: "./lesson-legal-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-09.html?entry={entry}", secondaryHref: "./lesson-legal-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-08", coachSource: "./ai-coach.html?source=lesson-legal-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于劳动法：AI 替代岗位的法律与伦理的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "劳动法：AI 替代岗位的法律与伦理", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
