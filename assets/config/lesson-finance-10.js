(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第10课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第10课：AI 时代的财务风险：你需要警惕什么",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep10-ai-financial-risk/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 时代的财务风险：你需要警惕什么", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-11.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 9,
                "title": "投资决策：怎么判断一笔投入值不值",
                "body": "让投资决策回到回报、风险与机会成本，而不是只凭感觉。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 时代的财务风险：你需要警惕什么",
                "body": "识别 AI 时代新的财务风险源，并建立更前置的预警机制。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "定价策略：价格不是拍脑袋决定的",
                "body": "把定价放回价值、成本、竞争与客户心理里重新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-11.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "识别 AI 时代新的财务风险源，并建立更前置的预警机制。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天聊一个特别实用的话题：AI 在财务风控领域的应用"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "我给大家讲四个核心应用场景"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "外部的有虚假发票、合同诈骗、供应商围标"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "比如，AI 可以实时监控客户公司的公开信息，新闻报道、法院诉讼、招聘变化、高管离职"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 10/13", "建议下一节：定价策略：价格不是拍脑袋决定的", '也可以先整理这一节'], nextHref: "./lesson-finance-11.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-10", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson10", audioSource: './assets/audio/finance-ep10-ai-financial-risk.mp3?v=20260411-finance-ep10-r1', vttSrc: './assets/subtitles/finance-ep10-ai-financial-risk.vtt?v=20260411-finance-ep10-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep10-ai-financial-risk/slide_01.png",
            "label": "AI 时代的财务风险：你需要警惕什么",
            "caption": "这一节会帮助你系统理解：AI 时代的财务风险：你需要警惕什么"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_03.png",
            "label": "核心框架",
            "caption": "我给大家讲四个核心应用场景。 第一个：异常交易检测。"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_04.png",
            "label": "关键指标",
            "caption": "外部的有虚假发票、合同诈骗、供应商围标。 AI 在识别欺诈方面有几个独特的优势。"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "比如，AI 可以实时监控客户公司的公开信息，新闻报道、法院诉讼、招聘变化、高管离职。 如果一家客户公司突然裁员 30%，或者被多家供应商起诉，这些都是信用恶化的"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_06.png",
            "label": "回到你的企业",
            "caption": "比如，一家公司的流动比率可能还正常，但如果同时出现了几个信号，应收账款增长快于收入增长、存货周转率在下降、经营现金流连续三个月下滑，AI 会判断这家公司的现金流"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_07.png",
            "label": "风险与提醒",
            "caption": "第四，也是最容易被忽视的，AI 风控的部署需要组织配合。 你不能买一个 AI 风控系统就指望它自动运转。"
        },
        {
            "file": "finance-ep10-ai-financial-risk/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.38,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.38,
            "end": 3.289999999999998,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.289999999999998,
            "end": 8.44,
            "text": "今天聊一个特别实用的话题：AI 在财务风控领域的应用。"
        },
        {
            "start": 8.44,
            "end": 9.72,
            "text": "风控是什么？"
        },
        {
            "start": 9.72,
            "end": 11.2,
            "text": "风控就是风险控制。"
        },
        {
            "start": 11.2,
            "end": 15.9,
            "text": "简单说就是在坏事发生之前，提前发现它、预防它。"
        },
        {
            "start": 15.9,
            "end": 19.62,
            "text": "或者在坏事已经发生的时候，尽快发现它、止损。"
        },
        {
            "start": 19.62,
            "end": 21.7,
            "text": "传统的财务风控靠什么？"
        },
        {
            "start": 21.9,
            "end": 22.3,
            "text": "靠人。"
        },
        {
            "start": 22.3,
            "end": 24.64,
            "text": "靠审计师一张张翻单据，"
        },
        {
            "start": 24.64,
            "end": 27.06,
            "text": "靠风控专员一笔笔查交易，"
        },
        {
            "start": 27.06,
            "end": 29.56,
            "text": "靠合规团队一条条核对规则。"
        },
        {
            "start": 29.56,
            "end": 32.2,
            "text": "这种方式有两个根本性的问题。"
        },
        {
            "start": 32.2,
            "end": 34.16,
            "text": "第一，效率低。"
        },
        {
            "start": 34.16,
            "end": 37.92,
            "text": "一家稍具规模的公司每天可能有上万笔交易。"
        },
        {
            "start": 37.92,
            "end": 39.9,
            "text": "你让人去一笔笔查？"
        },
        {
            "start": 39.9,
            "end": 40.88,
            "text": "不可能。"
        },
        {
            "start": 40.88,
            "end": 43.38,
            "text": "所以传统审计只能做抽样。"
        },
        {
            "start": 43.38,
            "end": 48.76,
            "text": "查个 5%、10%，希望通过样本来推断整体。"
        },
        {
            "start": 48.76,
            "end": 50.06,
            "text": "第二，滞后性。"
        },
        {
            "start": 50.06,
            "end": 53.24,
            "text": "传统的审计和风控往往是事后的。"
        },
        {
            "start": 53.24,
            "end": 54.9,
            "text": "等你发现问题的时候，"
        },
        {
            "start": 54.9,
            "end": 56.4,
            "text": "钱可能已经被挪走了，"
        },
        {
            "start": 56.4,
            "end": 58.38,
            "text": "损失可能已经造成了。"
        },
        {
            "start": 58.38,
            "end": 60.2,
            "text": "AI 改变了这两个问题。"
        },
        {
            "start": 60.2,
            "end": 62.98,
            "text": "AI 可以做到全量检查、实时监控。"
        },
        {
            "start": 62.98,
            "end": 67.94,
            "text": "每一笔交易都过一遍，24小时不间断，而且速度极快。"
        },
        {
            "start": 67.94,
            "end": 71.02,
            "text": "好，那 AI 在财务风控里具体怎么用呢？"
        },
        {
            "start": 71.5,
            "end": 73.5,
            "text": "我给大家讲四个核心应用场景。"
        },
        {
            "start": 73.5,
            "end": 75.58,
            "text": "第一个：异常交易检测。"
        },
        {
            "start": 75.58,
            "end": 77.88,
            "text": "这是 AI 风控最典型的应用。"
        },
        {
            "start": 77.88,
            "end": 82.08,
            "text": "AI 会学习你公司正常的交易模式是什么样的——金额范围、"
        },
        {
            "start": 82.08,
            "end": 84.68,
            "text": "交易对手、时间规律、频率特征。"
        },
        {
            "start": 85.16,
            "end": 89.84,
            "text": "然后一旦出现偏离这些模式的交易，它就会标记出来。"
        },
        {
            "start": 89.84,
            "end": 90.82,
            "text": "比如说，"
        },
        {
            "start": 90.82,
            "end": 95.82,
            "text": "你的采购部门每个月的单笔采购一般在 5 万到 50 万之间。"
        },
        {
            "start": 95.82,
            "end": 101.06,
            "text": "突然有一笔 200 万的采购单出来了，而且是一个新的供应商。"
        },
        {
            "start": 101.06,
            "end": 105.7,
            "text": "AI 会立刻标记这笔交易，提醒相关人员去核实。"
        },
        {
            "start": 105.7,
            "end": 109.18,
            "text": "再比如，某个员工的报销模式突然变了。"
        },
        {
            "start": 109.18,
            "end": 113.7,
            "text": "以前每个月报一两千，突然开始频繁报销大额餐饮和差旅。"
        },
        {
            "start": 113.7,
            "end": 117.06,
            "text": "这种行为模式的变化，AI 也能捕捉到。"
        },
        {
            "start": 117.06,
            "end": 121.96,
            "text": "传统的规则引擎也能做一些检查，比如设定一个金额上限。"
        },
        {
            "start": 121.96,
            "end": 126.5,
            "text": "但 AI 的优势在于它能发现那些不违反任何单一规则，"
        },
        {
            "start": 126.5,
            "end": 129.22,
            "text": "但整体模式看起来不正常的情况。"
        },
        {
            "start": 129.22,
            "end": 131.98,
            "text": "这就是所谓的模式识别能力。"
        },
        {
            "start": 131.98,
            "end": 134.12,
            "text": "第二个应用：欺诈识别。"
        },
        {
            "start": 134.12,
            "end": 137.08,
            "text": "财务欺诈是每家公司都面临的风险。"
        },
        {
            "start": 137.08,
            "end": 140.3,
            "text": "内部的有贪污、挪用公款、虚假报销。"
        },
        {
            "start": 140.3,
            "end": 144.0,
            "text": "外部的有虚假发票、合同诈骗、供应商围标。"
        },
        {
            "start": 144.0,
            "end": 147.54,
            "text": "AI 在识别欺诈方面有几个独特的优势。"
        },
        {
            "start": 147.54,
            "end": 149.2,
            "text": "一，关联分析。"
        },
        {
            "start": 149.2,
            "end": 153.46,
            "text": "AI 可以发现看似不相关的交易之间的隐藏关联。"
        },
        {
            "start": 153.46,
            "end": 158.38,
            "text": "比如，一个采购经理批准的供应商，老板是他妻子的姐姐。"
        },
        {
            "start": 158.38,
            "end": 160.78,
            "text": "这种关系在单据上看不出来，"
        },
        {
            "start": 160.78,
            "end": 164.62,
            "text": "但 AI 通过工商信息的交叉比对可以发现。"
        },
        {
            "start": 164.62,
            "end": 166.3,
            "text": "二，模式识别。"
        },
        {
            "start": 166.3,
            "end": 169.42,
            "text": "欺诈者通常有一些共性行为模式。"
        },
        {
            "start": 169.42,
            "end": 169.96,
            "text": "比如，"
        },
        {
            "start": 169.96,
            "end": 173.66,
            "text": "故意把金额拆小到审批权限以下来逃避审批，"
        },
        {
            "start": 173.66,
            "end": 174.92,
            "text": "或者在月末、"
        },
        {
            "start": 174.92,
            "end": 178.12,
            "text": "季末集中处理大量交易来浑水摸鱼。"
        },
        {
            "start": 178.60000000000002,
            "end": 180.44,
            "text": "AI 可以识别这些模式。"
        },
        {
            "start": 180.44,
            "end": 182.14,
            "text": "三，网络分析。"
        },
        {
            "start": 182.54,
            "end": 184.62,
            "text": "AI 可以构建一个交易关系网络，"
        },
        {
            "start": 184.62,
            "end": 187.7,
            "text": "看哪些实体之间有异常密集的资金流动。"
        },
        {
            "start": 188.12,
            "end": 190.6,
            "text": "如果几个供应商之间存在循环交易，"
        },
        {
            "start": 190.6,
            "end": 193.6,
            "text": "这很可能是一个洗钱或者虚增收入的操作。"
        },
        {
            "start": 193.6,
            "end": 195.84,
            "text": "第三个应用：信用风险评估。"
        },
        {
            "start": 196.3,
            "end": 198.1,
            "text": "如果你的公司有应收账款，"
        },
        {
            "start": 198.1,
            "end": 199.16,
            "text": "你就面临一个问题："
        },
        {
            "start": 199.16,
            "end": 200.82,
            "text": "客户会不会欠了钱不还？"
        },
        {
            "start": 200.82,
            "end": 203.04,
            "text": "传统的信用评估看什么？"
        },
        {
            "start": 203.04,
            "end": 207.18,
            "text": "看客户的历史付款记录、看财务报表、看行业评级。"
        },
        {
            "start": 207.18,
            "end": 209.38,
            "text": "这些信息有用但有限。"
        },
        {
            "start": 209.38,
            "end": 212.86,
            "text": "AI 可以整合更多维度的信息来评估信用风险。"
        },
        {
            "start": 212.86,
            "end": 213.6,
            "text": "比如，"
        },
        {
            "start": 213.6,
            "end": 218.1,
            "text": "AI 可以实时监控客户公司的公开信息——新闻报道、"
        },
        {
            "start": 218.1,
            "end": 220.7,
            "text": "法院诉讼、招聘变化、高管离职。"
        },
        {
            "start": 220.7,
            "end": 223.86,
            "text": "如果一家客户公司突然裁员 30%，"
        },
        {
            "start": 224.14,
            "end": 226.2,
            "text": "或者被多家供应商起诉，"
        },
        {
            "start": 226.2,
            "end": 228.54,
            "text": "这些都是信用恶化的信号。"
        },
        {
            "start": 228.54,
            "end": 231.74,
            "text": "AI 还可以分析客户的付款行为趋势。"
        },
        {
            "start": 231.74,
            "end": 233.52,
            "text": "不是看它有没有逾期，"
        },
        {
            "start": 233.52,
            "end": 236.54,
            "text": "而是看它的付款天数是不是在逐步拉长。"
        },
        {
            "start": 236.54,
            "end": 240.24,
            "text": "从 30 天慢慢变成 45 天、60 天。"
        },
        {
            "start": 240.24,
            "end": 244.88,
            "text": "这种渐进式的恶化，人很难注意到，但 AI 一眼就能看出来。"
        },
        {
            "start": 244.88,
            "end": 247.8,
            "text": "这样你就可以在客户真正违约之前，"
        },
        {
            "start": 247.8,
            "end": 250.92,
            "text": "提前收紧信用政策，减少坏账损失。"
        },
        {
            "start": 250.92,
            "end": 253.5,
            "text": "第四个应用：财务预测与预警。"
        },
        {
            "start": 253.5,
            "end": 256.82,
            "text": "传统的财务预警靠的是一些固定指标，"
        },
        {
            "start": 256.82,
            "end": 259.46,
            "text": "比如流动比率低于 1 就报警、"
        },
        {
            "start": 259.46,
            "end": 262.68,
            "text": "资产负债率超过 70% 就报警。"
        },
        {
            "start": 262.68,
            "end": 265.52,
            "text": "这些指标有用，但太简单了。"
        },
        {
            "start": 265.52,
            "end": 267.92,
            "text": "AI 可以做多维度的综合预警。"
        },
        {
            "start": 267.92,
            "end": 269.86,
            "text": "它不是看单一指标，"
        },
        {
            "start": 269.86,
            "end": 273.34,
            "text": "而是同时监控几十甚至几百个指标，"
        },
        {
            "start": 273.34,
            "end": 275.8,
            "text": "分析它们之间的关系和趋势。"
        },
        {
            "start": 276.22,
            "end": 279.24,
            "text": "比如，一家公司的流动比率可能还正常，"
        },
        {
            "start": 279.24,
            "end": 282.16,
            "text": "但如果同时出现了几个信号——应收账款"
        },
        {
            "start": 282.16,
            "end": 283.64,
            "text": "增长快于收入增长、"
        },
        {
            "start": 283.64,
            "end": 285.52,
            "text": "存货周转率在下降、"
        },
        {
            "start": 285.52,
            "end": 288.76,
            "text": "经营现金流连续三个月下滑——AI"
        },
        {
            "start": 288.76,
            "end": 292.98,
            "text": "会判断这家公司的现金流可能在三到六个月后出问题。"
        },
        {
            "start": 292.98,
            "end": 294.98,
            "text": "这就是 AI 的预测能力。"
        },
        {
            "start": 294.98,
            "end": 297.2,
            "text": "它不是等火烧起来才报警，"
        },
        {
            "start": 297.2,
            "end": 300.92,
            "text": "而是在火苗刚冒出来的时候就提醒你。"
        },
        {
            "start": 300.92,
            "end": 303.78,
            "text": "讲完了四个应用，我也要给大家泼一点冷水。"
        },
        {
            "start": 303.78,
            "end": 307.54,
            "text": "AI 风控不是万能的，有几个要注意的点。"
        },
        {
            "start": 307.54,
            "end": 309.52,
            "text": "第一，数据质量是基础。"
        },
        {
            "start": 309.52,
            "end": 313.08,
            "text": "AI 再强，如果你的基础数据是脏的、"
        },
        {
            "start": 313.08,
            "end": 314.7,
            "text": "不完整的、不一致的，"
        },
        {
            "start": 314.7,
            "end": 316.9,
            "text": "那模型就是垃圾进垃圾出。"
        },
        {
            "start": 316.9,
            "end": 321.4,
            "text": "所以上 AI 风控之前，先要把数据治理做好。"
        },
        {
            "start": 321.4,
            "end": 323.78,
            "text": "第二，AI 的判断需要人来验证。"
        },
        {
            "start": 323.78,
            "end": 327.18,
            "text": "AI 标记出来的异常交易，不一定真的有问题。"
        },
        {
            "start": 327.18,
            "end": 330.02,
            "text": "可能只是一笔正常但少见的交易。"
        },
        {
            "start": 330.02,
            "end": 332.76,
            "text": "所以你需要有人来做最终的判断。"
        },
        {
            "start": 332.76,
            "end": 337.4,
            "text": "AI 负责筛选和优先排序，人负责调查和决策。"
        },
        {
            "start": 337.4,
            "end": 340.4,
            "text": "第三，AI 模型需要持续迭代。"
        },
        {
            "start": 340.4,
            "end": 343.56,
            "text": "欺诈手段在进化，业务模式在变化。"
        },
        {
            "start": 343.56,
            "end": 347.6,
            "text": "AI 模型不能一次训练就永远不变，需要定期更新。"
        },
        {
            "start": 347.6,
            "end": 352.54,
            "text": "第四，也是最容易被忽视的，AI 风控的部署需要组织配合。"
        },
        {
            "start": 352.54,
            "end": 356.12,
            "text": "你不能买一个 AI 风控系统就指望它自动运转。"
        },
        {
            "start": 356.12,
            "end": 358.86,
            "text": "你需要有专人来使用它、维护它、"
        },
        {
            "start": 358.86,
            "end": 360.98,
            "text": "根据它的输出来采取行动。"
        },
        {
            "start": 360.98,
            "end": 364.36,
            "text": "否则再好的预警也只是一个被忽略的弹窗。"
        },
        {
            "start": 364.36,
            "end": 366.66,
            "text": "好，总结一下今天的内容。"
        },
        {
            "start": 366.66,
            "end": 369.82,
            "text": "AI 在财务风控中有四大核心应用："
        },
        {
            "start": 369.82,
            "end": 371.98,
            "text": "异常交易检测、欺诈识别、"
        },
        {
            "start": 371.98,
            "end": 374.62,
            "text": "信用风险评估、财务预测与预警。"
        },
        {
            "start": 374.62,
            "end": 378.76,
            "text": "AI 的优势是全量检查、实时监控和模式识别。"
        },
        {
            "start": 378.76,
            "end": 380.92,
            "text": "但数据质量、人机协作、"
        },
        {
            "start": 380.92,
            "end": 383.82,
            "text": "模型迭代和组织配合是成功的前提。"
        },
        {
            "start": 383.82,
            "end": 388.5,
            "text": "下一期我们来聊定价策略：从成本加成到 AI 动态定价。"
        },
        {
            "start": 388.5,
            "end": 390.48,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 390.48,
            "end": 393.34,
            "text": "1. 传统风控的两大痛点："
        },
        {
            "start": 393.34,
            "end": 395.44,
            "text": "效率低（只能抽样）、"
        },
        {
            "start": 395.44,
            "end": 397.64,
            "text": "滞后性（事后发现）"
        },
        {
            "start": 397.64,
            "end": 401.78,
            "text": "2. AI 风控四大应用：异常交易检测、"
        },
        {
            "start": 401.78,
            "end": 406.14,
            "text": "欺诈识别、信用风险评估、财务预测预警"
        },
        {
            "start": 406.14,
            "end": 410.36,
            "text": "3. AI 风控不是万能的：依赖数据质量、"
        },
        {
            "start": 410.36,
            "end": 413.52,
            "text": "需要人机协作、模型要持续迭代"
        },
        {
            "start": 413.52,
            "end": 418.28,
            "text": "4. 关键转变：从事后审计到实时预警，"
        },
        {
            "start": 418.28,
            "end": 421.14,
            "text": "从抽样检查到全量监控"
        },
        {
            "start": 421.14,
            "end": 424.66,
            "text": "1. 你所在的公司有哪些财务风控痛点？"
        },
        {
            "start": 424.66,
            "end": 426.96,
            "text": "AI 能在哪个环节帮到你？"
        },
        {
            "start": 426.96,
            "end": 430.04,
            "text": "2. AI 异常检测模型的误报率如何控制？"
        },
        {
            "start": 430.04,
            "end": 432.04,
            "text": "误报太多会有什么后果？"
        },
        {
            "start": 432.04,
            "end": 435.38,
            "text": "3. 如果你的公司要引入 AI 风控，"
        },
        {
            "start": 435.38,
            "end": 438.3,
            "text": "你觉得最大的障碍是技术还是组织？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 11.339,
        "index": 0
    },
    {
        "start": 11.339,
        "end": 65.48,
        "index": 1
    },
    {
        "start": 65.48,
        "end": 119.339,
        "index": 2
    },
    {
        "start": 119.339,
        "end": 175.323,
        "index": 3
    },
    {
        "start": 175.323,
        "end": 223.228,
        "index": 4
    },
    {
        "start": 223.228,
        "end": 278.929,
        "index": 5
    },
    {
        "start": 278.929,
        "end": 347.244,
        "index": 6
    },
    {
        "start": 347.244,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-11.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "识别 AI 时代新的财务风险源，并建立更前置的预警机制。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-11.html?entry={entry}", secondaryHref: "./lesson-finance-11.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-10", coachSource: "./ai-coach.html?source=lesson-finance-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 时代的财务风险：你需要警惕什么的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 时代的财务风险：你需要警惕什么", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-11.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
