(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第6课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第6课：AI 估值：用 AI 做公司估值的第一版判断",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep06-ai-company-valuation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 估值：用 AI 做公司估值的第一版判断", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-07.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 5,
                "title": "公司估值：一家公司到底值多少钱",
                "body": "先建立估值判断框架，理解一家公司的价值到底从哪里来。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 估值：用 AI 做公司估值的第一版判断",
                "body": "用 AI 提高估值分析效率，但保留管理者自己的判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "融资策略：什么时候该融资，怎么融更合适",
                "body": "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "用 AI 提高估值分析效率，但保留管理者自己的判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "上一期我们聊了三种经典的估值方法：DCF、可比公司、可比交易"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "是高质量的标注数据，还是一堆噪音"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "这是 AI 公司估值中最关键的逻辑"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "因为用户的数据、工作流、自定义配置、甚至思维习惯，都跟这个 AI 工具绑定在一起了"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 6/13", "建议下一节：融资策略：什么时候该融资，怎么融更合适", '也可以先整理这一节'], nextHref: "./lesson-finance-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-06", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson6", audioSource: './assets/audio/finance-ep06-ai-company-valuation.mp3?v=20260411-finance-ep06-r1', vttSrc: './assets/subtitles/finance-ep06-ai-company-valuation.vtt?v=20260411-finance-ep06-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep06-ai-company-valuation/slide_01.png",
            "label": "AI 估值：用 AI 做公司估值的第一版判断",
            "caption": "这一节会帮助你系统理解：AI 估值：用 AI 做公司估值的第一版判断"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_03.png",
            "label": "核心框架",
            "caption": "是高质量的标注数据，还是一堆噪音？ 第三，数据的独占性。"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_04.png",
            "label": "关键指标",
            "caption": "这是 AI 公司估值中最关键的逻辑。 什么是飞轮效应？"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "因为用户的数据、工作流、自定义配置、甚至思维习惯，都跟这个 AI 工具绑定在一起了。 你换一个工具，不是简单地换个软件，是要重新训练团队、重新迁移数据、重新适配"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_06.png",
            "label": "回到你的企业",
            "caption": "因为你只看到了第一层，而市场在看四层。 当然，高估值也意味着高风险。"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_07.png",
            "label": "风险与提醒",
            "caption": "你可以让 AI 帮你分析一家公司的数据策略、竞争壁垒、用户增长趋势。 把这些信息整合起来，你才能做出更准确的估值判断。"
        },
        {
            "file": "finance-ep06-ai-company-valuation/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.28,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.8,
            "end": 3.86,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.86,
            "end": 7.08,
            "text": "上一期我们聊了三种经典的估值方法："
        },
        {
            "start": 7.08,
            "end": 9.74,
            "text": "DCF、可比公司、可比交易。"
        },
        {
            "start": 9.74,
            "end": 13.52,
            "text": "那这一期我们专门来聊一个特别有意思的话题："
        },
        {
            "start": 13.52,
            "end": 15.18,
            "text": "AI 公司到底怎么估值？"
        },
        {
            "start": 15.18,
            "end": 18.86,
            "text": "你有没有发现，AI 公司的估值经常让人看不懂？"
        },
        {
            "start": 18.86,
            "end": 22.12,
            "text": "一家公司可能还在亏损，收入也不算多，"
        },
        {
            "start": 22.12,
            "end": 24.42,
            "text": "但估值已经几百亿了。"
        },
        {
            "start": 24.42,
            "end": 27.66,
            "text": "你用传统方法一算，怎么都算不出这个数。"
        },
        {
            "start": 27.66,
            "end": 29.52,
            "text": "那是不是说市场疯了呢？"
        },
        {
            "start": 29.52,
            "end": 30.18,
            "text": "不一定。"
        },
        {
            "start": 30.18,
            "end": 33.82,
            "text": "是因为 AI 公司有一些特殊的价值驱动因素，"
        },
        {
            "start": 33.82,
            "end": 36.88,
            "text": "传统的估值框架没有充分捕捉到。"
        },
        {
            "start": 36.88,
            "end": 40.56,
            "text": "今天我就给大家拆解一下，AI 公司估值的特殊逻辑。"
        },
        {
            "start": 40.56,
            "end": 42.96,
            "text": "第一个特殊因素：数据资产。"
        },
        {
            "start": 42.96,
            "end": 46.46,
            "text": "传统公司的核心资产写在资产负债表上，"
        },
        {
            "start": 46.46,
            "end": 48.0,
            "text": "厂房、设备、存货。"
        },
        {
            "start": 48.0,
            "end": 52.82,
            "text": "但 AI 公司最值钱的东西往往不在报表里，那就是数据。"
        },
        {
            "start": 52.82,
            "end": 56.76,
            "text": "数据对于 AI 公司，就像石油对于炼油厂一样。"
        },
        {
            "start": 56.76,
            "end": 60.2,
            "text": "没有高质量的数据，模型再好也没有用。"
        },
        {
            "start": 60.2,
            "end": 62.58,
            "text": "那怎么评估数据资产的价值？"
        },
        {
            "start": 62.58,
            "end": 64.66,
            "text": "你可以从三个维度看："
        },
        {
            "start": 64.66,
            "end": 66.2,
            "text": "第一，数据的规模。"
        },
        {
            "start": 66.2,
            "end": 67.68,
            "text": "你有多少数据？"
        },
        {
            "start": 67.82,
            "end": 69.1,
            "text": "覆盖多少场景？"
        },
        {
            "start": 69.1,
            "end": 70.52,
            "text": "第二，数据的质量。"
        },
        {
            "start": 70.52,
            "end": 73.86,
            "text": "是高质量的标注数据，还是一堆噪音？"
        },
        {
            "start": 73.86,
            "end": 76.3,
            "text": "第三，数据的独占性。"
        },
        {
            "start": 76.3,
            "end": 77.16,
            "text": "这个最关键。"
        },
        {
            "start": 77.16,
            "end": 80.08,
            "text": "这些数据是公开的，谁都能拿到？"
        },
        {
            "start": 80.08,
            "end": 81.52,
            "text": "还是只有你有？"
        },
        {
            "start": 81.52,
            "end": 85.72,
            "text": "如果数据来自你的产品使用过程中自然积累的，"
        },
        {
            "start": 85.72,
            "end": 88.44,
            "text": "那别人很难复制，这就构成了壁垒。"
        },
        {
            "start": 88.44,
            "end": 89.3,
            "text": "举个例子。"
        },
        {
            "start": 89.5,
            "end": 91.66,
            "text": "特斯拉的自动驾驶为什么被看好？"
        },
        {
            "start": 91.66,
            "end": 94.88,
            "text": "因为每一辆特斯拉都在路上帮它收集数据。"
        },
        {
            "start": 94.88,
            "end": 99.68,
            "text": "几百万辆车跑了几十亿公里，这个数据量别人根本追不上。"
        },
        {
            "start": 99.68,
            "end": 101.66,
            "text": "这就是数据资产的价值。"
        },
        {
            "start": 101.66,
            "end": 104.14,
            "text": "第二个特殊因素：模型能力。"
        },
        {
            "start": 104.14,
            "end": 106.78,
            "text": "AI 公司的模型就是它的核心引擎。"
        },
        {
            "start": 106.78,
            "end": 108.86,
            "text": "但模型能力怎么评估呢？"
        },
        {
            "start": 108.86,
            "end": 110.22,
            "text": "你可以看几个指标："
        },
        {
            "start": 110.22,
            "end": 112.1,
            "text": "一，模型的性能。"
        },
        {
            "start": 112.1,
            "end": 115.36,
            "text": "在核心任务上的准确率、速度、成本。"
        },
        {
            "start": 115.36,
            "end": 117.56,
            "text": "二，模型的迭代速度。"
        },
        {
            "start": 117.56,
            "end": 120.88,
            "text": "这家公司能不能持续地把模型做得更好？"
        },
        {
            "start": 120.88,
            "end": 122.12,
            "text": "多久迭代一次？"
        },
        {
            "start": 122.12,
            "end": 125.5,
            "text": "三，模型的通用性和可迁移性。"
        },
        {
            "start": 125.5,
            "end": 129.4,
            "text": "这个模型是只能做一件事，还是可以拓展到多个场景？"
        },
        {
            "start": 129.4,
            "end": 133.12,
            "text": "如果是后者，它的商业化空间就大得多。"
        },
        {
            "start": 133.12,
            "end": 134.7,
            "text": "但要注意一点。"
        },
        {
            "start": 134.7,
            "end": 137.44,
            "text": "模型本身的壁垒其实在降低。"
        },
        {
            "start": 137.44,
            "end": 141.76,
            "text": "开源模型越来越强，大模型之间的差距在缩小。"
        },
        {
            "start": 141.76,
            "end": 146.48,
            "text": "所以单纯靠模型好是不够的，你还要看它的整体系统。"
        },
        {
            "start": 146.48,
            "end": 149.68,
            "text": "第三个特殊因素：飞轮效应。"
        },
        {
            "start": 149.68,
            "end": 153.28,
            "text": "这是 AI 公司估值中最关键的逻辑。"
        },
        {
            "start": 153.28,
            "end": 154.92,
            "text": "什么是飞轮效应？"
        },
        {
            "start": 154.92,
            "end": 155.46,
            "text": "就是："
        },
        {
            "start": 155.46,
            "end": 158.72,
            "text": "用户越多 → 数据越多 → 模型越好 →"
        },
        {
            "start": 158.72,
            "end": 160.94,
            "text": "产品体验越好 → 用户更多。"
        },
        {
            "start": 160.94,
            "end": 164.7,
            "text": "这个正循环一旦转起来，后来者就很难追上。"
        },
        {
            "start": 164.7,
            "end": 165.84,
            "text": "你想想看，"
        },
        {
            "start": 165.84,
            "end": 169.68,
            "text": "为什么投资人愿意给一些 AI 公司那么高的估值，"
        },
        {
            "start": 169.68,
            "end": 171.42,
            "text": "哪怕它现在还亏钱？"
        },
        {
            "start": 171.42,
            "end": 173.54,
            "text": "因为他们赌的是这个飞轮。"
        },
        {
            "start": 174.0,
            "end": 179.14,
            "text": "一旦飞轮转起来，赢家通吃，后面的增长是指数级的。"
        },
        {
            "start": 179.14,
            "end": 181.44,
            "text": "所以在评估 AI 公司的时候，"
        },
        {
            "start": 181.44,
            "end": 184.3,
            "text": "你不能只看当下的收入和利润，"
        },
        {
            "start": 184.3,
            "end": 187.76,
            "text": "你还要看它的飞轮有没有开始转起来。"
        },
        {
            "start": 187.76,
            "end": 189.62,
            "text": "判断飞轮的几个信号："
        },
        {
            "start": 189.62,
            "end": 192.44,
            "text": "一，用户增长带不带来数据增长。"
        },
        {
            "start": 192.44,
            "end": 197.66,
            "text": "有些产品用户很多，但数据沉淀很少，那飞轮就转不起来。"
        },
        {
            "start": 197.66,
            "end": 200.66,
            "text": "二，数据增长有没有转化为模型改善。"
        },
        {
            "start": 200.66,
            "end": 204.38,
            "text": "你需要看它的模型迭代速度是不是在加快。"
        },
        {
            "start": 204.38,
            "end": 207.78,
            "text": "三，模型改善有没有转化为留存和口碑。"
        },
        {
            "start": 207.78,
            "end": 213.44,
            "text": "如果用户留存率在上升、NPS在提高，那说明飞轮正向运转。"
        },
        {
            "start": 213.44,
            "end": 216.02,
            "text": "第四个特殊因素：切换成本。"
        },
        {
            "start": 216.02,
            "end": 220.84,
            "text": "AI 产品一旦被企业深度使用之后，切换成本是很高的。"
        },
        {
            "start": 220.84,
            "end": 221.38,
            "text": "为什么？"
        },
        {
            "start": 221.38,
            "end": 224.78,
            "text": "因为用户的数据、工作流、自定义配置、"
        },
        {
            "start": 224.78,
            "end": 226.06,
            "text": "甚至思维习惯，"
        },
        {
            "start": 226.06,
            "end": 229.22,
            "text": "都跟这个 AI 工具绑定在一起了。"
        },
        {
            "start": 229.22,
            "end": 231.84,
            "text": "你换一个工具，不是简单地换个软件，"
        },
        {
            "start": 231.84,
            "end": 235.3,
            "text": "是要重新训练团队、重新迁移数据、"
        },
        {
            "start": 235.3,
            "end": 236.76,
            "text": "重新适配流程。"
        },
        {
            "start": 236.76,
            "end": 239.74,
            "text": "这种切换成本带来的客户粘性，"
        },
        {
            "start": 239.74,
            "end": 243.44,
            "text": "是 AI 公司估值中非常重要的一个加分项。"
        },
        {
            "start": 243.44,
            "end": 245.38,
            "text": "特别是 toB 的 AI 公司，"
        },
        {
            "start": 245.38,
            "end": 249.48,
            "text": "如果它能做到深度嵌入客户的核心业务流程，"
        },
        {
            "start": 249.48,
            "end": 254.98,
            "text": "那它的客户续约率和生命周期价值 LTV 都会非常高。"
        },
        {
            "start": 254.98,
            "end": 257.18,
            "text": "好，讲完了四个特殊因素，"
        },
        {
            "start": 257.18,
            "end": 260.72,
            "text": "我来给大家一个实用的 AI 公司估值框架。"
        },
        {
            "start": 260.72,
            "end": 264.4,
            "text": "你可以把 AI 公司的价值分成四层来评估："
        },
        {
            "start": 264.4,
            "end": 266.76,
            "text": "第一层，基础业务价值。"
        },
        {
            "start": 266.76,
            "end": 270.28,
            "text": "就是用传统方法算出来的当下收入和利润。"
        },
        {
            "start": 270.28,
            "end": 272.72,
            "text": "第二层，数据资产溢价。"
        },
        {
            "start": 272.72,
            "end": 275.8,
            "text": "看它的数据规模、质量和独占性。"
        },
        {
            "start": 275.8,
            "end": 277.91999999999996,
            "text": "第三层，飞轮乘数。"
        },
        {
            "start": 277.92,
            "end": 279.9,
            "text": "如果飞轮已经开始转，"
        },
        {
            "start": 279.9,
            "end": 283.88,
            "text": "那你在基础业务价值上要乘一个溢价系数。"
        },
        {
            "start": 283.88,
            "end": 285.7,
            "text": "第四层，期权价值。"
        },
        {
            "start": 285.7,
            "end": 288.3,
            "text": "AI 公司往往有很多可能性还没兑现。"
        },
        {
            "start": 288.3,
            "end": 291.72,
            "text": "它的技术可以拓展到新场景、新行业、新产品。"
        },
        {
            "start": 291.72,
            "end": 294.32,
            "text": "这些潜在机会是有期权价值的。"
        },
        {
            "start": 294.32,
            "end": 297.16,
            "text": "这就是为什么 AI 公司的估值看起来\"贵\"。"
        },
        {
            "start": 297.16,
            "end": 300.4,
            "text": "因为你只看到了第一层，而市场在看四层。"
        },
        {
            "start": 300.4,
            "end": 302.94,
            "text": "当然，高估值也意味着高风险。"
        },
        {
            "start": 302.94,
            "end": 306.5,
            "text": "我给大家几个识别 AI 公司估值泡沫的信号："
        },
        {
            "start": 306.5,
            "end": 308.82,
            "text": "第一，没有独特数据来源。"
        },
        {
            "start": 308.82,
            "end": 313.34,
            "text": "如果一家 AI 公司完全依赖公开数据或者第三方数据，"
        },
        {
            "start": 313.34,
            "end": 314.62,
            "text": "那它的壁垒很弱。"
        },
        {
            "start": 314.62,
            "end": 316.74,
            "text": "第二，飞轮转不起来。"
        },
        {
            "start": 316.74,
            "end": 319.52,
            "text": "有技术但没有足够的用户产生数据，"
        },
        {
            "start": 319.52,
            "end": 322.36,
            "text": "或者数据增长不能转化为产品改善。"
        },
        {
            "start": 322.36,
            "end": 324.71333333333337,
            "text": "第三，客户没有粘性。"
        },
        {
            "start": 324.71333333333337,
            "end": 328.22,
            "text": "续约率低、流失率高，说明切换成本不够。"
        },
        {
            "start": 328.22,
            "end": 331.3,
            "text": "第四，故事很大但落地很少。"
        },
        {
            "start": 331.3,
            "end": 334.1,
            "text": "如果一家公司讲了很多 AI 愿景，"
        },
        {
            "start": 334.1,
            "end": 336.54,
            "text": "但实际的产品和收入都很小，"
        },
        {
            "start": 336.54,
            "end": 337.98,
            "text": "那你就要小心了。"
        },
        {
            "start": 337.98,
            "end": 340.96,
            "text": "最后分享一个 AI 时代估值的大趋势。"
        },
        {
            "start": 340.96,
            "end": 345.08,
            "text": "传统估值里，我们看的是有形资产、现金流、利润率。"
        },
        {
            "start": 345.08,
            "end": 349.22,
            "text": "但 AI 时代，无形资产的权重在大幅提高。"
        },
        {
            "start": 349.22,
            "end": 351.94,
            "text": "数据、算法、人才、品牌、"
        },
        {
            "start": 351.94,
            "end": 355.2,
            "text": "网络效应——这些东西不在资产负债表上，"
        },
        {
            "start": 355.2,
            "end": 358.52,
            "text": "但它们越来越决定一家公司的真实价值。"
        },
        {
            "start": 358.52,
            "end": 361.26,
            "text": "所以，如果你是一个投资人或者创业者，"
        },
        {
            "start": 361.26,
            "end": 363.68,
            "text": "你需要学会评估这些无形资产。"
        },
        {
            "start": 363.68,
            "end": 366.32,
            "text": "不能只看财务报表，还要看数据壁垒、"
        },
        {
            "start": 366.32,
            "end": 368.82,
            "text": "看飞轮效应、看切换成本。"
        },
        {
            "start": 368.82,
            "end": 371.72,
            "text": "用 AI 工具也能帮你做这件事。"
        },
        {
            "start": 371.72,
            "end": 374.62,
            "text": "你可以让 AI 帮你分析一家公司的数据策略、"
        },
        {
            "start": 374.62,
            "end": 376.5,
            "text": "竞争壁垒、用户增长趋势。"
        },
        {
            "start": 376.5,
            "end": 380.68,
            "text": "把这些信息整合起来，你才能做出更准确的估值判断。"
        },
        {
            "start": 380.68,
            "end": 382.91999999999996,
            "text": "好，总结一下今天的内容。"
        },
        {
            "start": 383.26,
            "end": 386.58,
            "text": "AI 公司估值有四个特殊因素：数据资产、"
        },
        {
            "start": 386.94,
            "end": 389.36,
            "text": "模型能力、飞轮效应、切换成本。"
        },
        {
            "start": 389.36,
            "end": 391.56,
            "text": "评估的时候要看四层价值："
        },
        {
            "start": 391.56,
            "end": 395.96,
            "text": "基础业务 + 数据溢价 + 飞轮乘数 + 期权价值。"
        },
        {
            "start": 395.96,
            "end": 398.24,
            "text": "同时也要警惕四个泡沫信号。"
        },
        {
            "start": 398.24,
            "end": 400.26,
            "text": "下一期我们来聊融资策略："
        },
        {
            "start": 400.26,
            "end": 402.4,
            "text": "股权和债权到底怎么选，"
        },
        {
            "start": 402.4,
            "end": 405.3,
            "text": "AI 创业公司的融资节奏是什么样的。"
        },
        {
            "start": 405.3,
            "end": 407.08,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 407.08,
            "end": 410.58,
            "text": "1. AI 公司的四大特殊价值驱动因素："
        },
        {
            "start": 410.58,
            "end": 413.14,
            "text": "数据资产、模型能力、飞轮效应、"
        },
        {
            "start": 413.14,
            "end": 414.22,
            "text": "切换成本"
        },
        {
            "start": 414.22,
            "end": 416.66,
            "text": "2. AI 公司估值四层框架："
        },
        {
            "start": 416.66,
            "end": 421.24,
            "text": "基础业务价值 → 数据资产溢价 → 飞轮乘数 → 期权价值"
        },
        {
            "start": 421.24,
            "end": 424.2,
            "text": "3. 识别估值泡沫的四个信号："
        },
        {
            "start": 424.2,
            "end": 427.6,
            "text": "无独特数据、飞轮不转、客户无粘性、"
        },
        {
            "start": 427.6,
            "end": 429.06,
            "text": "故事大落地少"
        },
        {
            "start": 429.06,
            "end": 431.62,
            "text": "1. 你关注的某家 AI 公司，"
        },
        {
            "start": 431.62,
            "end": 434.18,
            "text": "它的飞轮效应有没有开始转起来？"
        },
        {
            "start": 434.18,
            "end": 435.52,
            "text": "从什么信号可以判断？"
        },
        {
            "start": 435.52,
            "end": 438.38,
            "text": "2. 如果你要投资一家 AI 创业公司，"
        },
        {
            "start": 438.38,
            "end": 441.46,
            "text": "你最看重四个特殊因素中的哪一个？"
        },
        {
            "start": 441.46,
            "end": 441.94,
            "text": "为什么？"
        },
        {
            "start": 441.94,
            "end": 443.7,
            "text": "3. 你觉得 AI"
        },
        {
            "start": 443.7,
            "end": 447.32,
            "text": "公司的\"期权价值\"有没有被市场高估的风险？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.893,
        "index": 0
    },
    {
        "start": 10.893,
        "end": 66.172,
        "index": 1
    },
    {
        "start": 66.172,
        "end": 122.405,
        "index": 2
    },
    {
        "start": 122.405,
        "end": 174.281,
        "index": 3
    },
    {
        "start": 174.281,
        "end": 230.378,
        "index": 4
    },
    {
        "start": 230.378,
        "end": 286.611,
        "index": 5
    },
    {
        "start": 286.611,
        "end": 347.746,
        "index": 6
    },
    {
        "start": 347.746,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "用 AI 提高估值分析效率，但保留管理者自己的判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-07.html?entry={entry}", secondaryHref: "./lesson-finance-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-06", coachSource: "./ai-coach.html?source=lesson-finance-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 估值：用 AI 做公司估值的第一版判断的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 估值：用 AI 做公司估值的第一版判断", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
