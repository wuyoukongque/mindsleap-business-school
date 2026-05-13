(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第12课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第12课：案例：NVIDIA 的财务与资本市场逻辑",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep12-case-nvidia/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：NVIDIA 的财务与资本市场逻辑", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-12", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-13.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 11,
                "title": "定价策略：价格不是拍脑袋决定的",
                "body": "把定价放回价值、成本、竞争与客户心理里重新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：NVIDIA 的财务与资本市场逻辑",
                "body": "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "你的财务体检：用 AI 做一次快速财务诊断",
                "body": "把整个模块整合起来，做一次真正可落地的财务体检。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-13.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天来讲一个案例，可能是 AI 时代最经典的财务故事：Nvidia，英伟达"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "而且不是训练完就结束了，推理，也就是让模型运行起来回答用户问题，也需要大量 GPU"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "Nvidia 不只是卖硬件，它建了一个软件生态系统"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "我归纳为\"卖水模式\"的三个核心优势： 第一，不赌方向"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 12/13", "建议下一节：你的财务体检：用 AI 做一次快速财务诊断", '也可以先整理这一节'], nextHref: "./lesson-finance-13.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-12", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson12", audioSource: './assets/audio/finance-ep12-case-nvidia.mp3?v=20260411-finance-ep12-r1', vttSrc: './assets/subtitles/finance-ep12-case-nvidia.vtt?v=20260411-finance-ep12-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep12-case-nvidia/slide_01.png",
            "label": "案例：NVIDIA 的财务与资本市场逻辑",
            "caption": "这一节会帮助你系统理解：案例：NVIDIA 的财务与资本市场逻辑"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_03.png",
            "label": "核心框架",
            "caption": "而且不是训练完就结束了，推理，也就是让模型运行起来回答用户问题，也需要大量 GPU。 训练的需求是一波一波的，但推理的需求是持续的、而且随着用户增长不断放大的。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_04.png",
            "label": "关键指标",
            "caption": "Nvidia 不只是卖硬件，它建了一个软件生态系统。 硬件有竞品能追上，但生态系统的壁垒要深得多。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "我归纳为\"卖水模式\"的三个核心优势： 第一，不赌方向。 做 AI 应用的公司，需要赌哪个应用场景能跑通。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_06.png",
            "label": "回到你的企业",
            "caption": "AI 投资有可能出现周期。 如果 AI 应用的商业化进展不如预期，大公司可能会减少 AI 资本开支。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_07.png",
            "label": "风险与提醒",
            "caption": "作为投资者或管理者，你需要识别这些风险，评估它们的概率和影响。 你可以试着用 AI 来做这种分析。"
        },
        {
            "file": "finance-ep12-case-nvidia/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.3,
            "end": 3.56,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.56,
            "end": 4.98,
            "text": "今天来讲一个案例，"
        },
        {
            "start": 4.98,
            "end": 8.94,
            "text": "可能是 AI 时代最经典的财务故事：Nvidia，"
        },
        {
            "start": 8.94,
            "end": 10.0,
            "text": "英伟达。"
        },
        {
            "start": 10.0,
            "end": 12.66,
            "text": "你一定听过一句话：淘金热的时候，"
        },
        {
            "start": 12.66,
            "end": 14.9,
            "text": "最赚钱的不是去淘金的人，"
        },
        {
            "start": 14.9,
            "end": 17.22,
            "text": "而是卖铲子和卖水的人。"
        },
        {
            "start": 17.22,
            "end": 20.32,
            "text": "Nvidia 就是 AI 淘金热里那个卖水的。"
        },
        {
            "start": 20.32,
            "end": 23.86,
            "text": "不管是 OpenAI、Google、Meta、还是中国的百度、"
        },
        {
            "start": 23.86,
            "end": 27.34,
            "text": "字节，所有做 AI 的公司都需要 GPU。"
        },
        {
            "start": 27.34,
            "end": 31.2,
            "text": "而 Nvidia 几乎垄断了高端 AI GPU 的市场。"
        },
        {
            "start": 31.2,
            "end": 34.16,
            "text": "今天我不是要讲 Nvidia 的技术有多牛，"
        },
        {
            "start": 34.16,
            "end": 36.84,
            "text": "而是要从财务的角度来拆解："
        },
        {
            "start": 36.84,
            "end": 39.68,
            "text": "Nvidia 这门生意到底好在哪里？"
        },
        {
            "start": 39.68,
            "end": 41.82,
            "text": "它的财报里藏着什么样的秘密？"
        },
        {
            "start": 41.82,
            "end": 43.52,
            "text": "先看收入增长。"
        },
        {
            "start": 43.52,
            "end": 46.3,
            "text": "Nvidia 的数据中心业务——这是 AI"
        },
        {
            "start": 46.3,
            "end": 50.4,
            "text": "芯片的主力——收入在过去两年实现了爆炸式增长。"
        },
        {
            "start": 50.4,
            "end": 54.78,
            "text": "这种增速在半导体行业的历史上几乎是前所未有的。"
        },
        {
            "start": 54.78,
            "end": 56.28,
            "text": "为什么增长这么快？"
        },
        {
            "start": 56.28,
            "end": 59.54,
            "text": "因为 AI 大模型的训练需要海量的算力。"
        },
        {
            "start": 59.54,
            "end": 64.28,
            "text": "一个大语言模型的训练可能需要几千张甚至上万张 GPU，"
        },
        {
            "start": 64.28,
            "end": 65.56,
            "text": "跑几个月。"
        },
        {
            "start": 65.56,
            "end": 68.16,
            "text": "而且不是训练完就结束了，"
        },
        {
            "start": 68.16,
            "end": 71.12,
            "text": "推理——也就是让模型运行起来回答用户"
        },
        {
            "start": 71.12,
            "end": 73.36,
            "text": "问题——也需要大量 GPU。"
        },
        {
            "start": 73.36,
            "end": 75.62,
            "text": "训练的需求是一波一波的，"
        },
        {
            "start": 75.62,
            "end": 77.6,
            "text": "但推理的需求是持续的、"
        },
        {
            "start": 77.6,
            "end": 79.8,
            "text": "而且随着用户增长不断放大的。"
        },
        {
            "start": 79.8,
            "end": 82.32,
            "text": "这就是 Nvidia 增长的底层逻辑。"
        },
        {
            "start": 82.32,
            "end": 83.62,
            "text": "再看毛利率。"
        },
        {
            "start": 83.62,
            "end": 87.4,
            "text": "这是 Nvidia 财报里最让人惊叹的数字。"
        },
        {
            "start": 87.4,
            "end": 90.76,
            "text": "Nvidia 的毛利率常年保持在很高的水平。"
        },
        {
            "start": 90.76,
            "end": 92.92,
            "text": "这在半导体行业里是什么概念？"
        },
        {
            "start": 92.92,
            "end": 96.28,
            "text": "这基本上是软件公司的毛利率水平了。"
        },
        {
            "start": 96.28,
            "end": 98.64,
            "text": "为什么 Nvidia 的毛利率这么高？"
        },
        {
            "start": 98.64,
            "end": 99.34,
            "text": "几个原因。"
        },
        {
            "start": 99.80000000000001,
            "end": 101.28,
            "text": "第一，垄断地位。"
        },
        {
            "start": 101.28,
            "end": 105.18,
            "text": "AI GPU 市场，Nvidia 占了绝大部分份额。"
        },
        {
            "start": 105.18,
            "end": 107.82,
            "text": "AMD 在追赶，但差距还很大。"
        },
        {
            "start": 107.82,
            "end": 109.8,
            "text": "垄断意味着定价权。"
        },
        {
            "start": 109.8,
            "end": 112.76,
            "text": "你可以定一个很高的价格，客户也得买。"
        },
        {
            "start": 112.76,
            "end": 114.68,
            "text": "第二，CUDA 生态壁垒。"
        },
        {
            "start": 114.68,
            "end": 117.16,
            "text": "这是 Nvidia 最深的护城河。"
        },
        {
            "start": 117.16,
            "end": 119.8,
            "text": "CUDA 是 Nvidia 的编程框架。"
        },
        {
            "start": 119.8,
            "end": 123.36000000000001,
            "text": "几乎所有的 AI 研究者和工程师都用 CUDA。"
        },
        {
            "start": 123.36000000000001,
            "end": 125.12,
            "text": "你想换 AMD 的卡？"
        },
        {
            "start": 125.12,
            "end": 128.06,
            "text": "可以，但你的软件要重写一遍，"
        },
        {
            "start": 128.06,
            "end": 130.56,
            "text": "你的团队要重新学一套工具。"
        },
        {
            "start": 130.56,
            "end": 134.38,
            "text": "这个切换成本太高了，大多数公司不会轻易换。"
        },
        {
            "start": 134.38,
            "end": 137.74,
            "text": "这就是我们上一期讲的切换成本在发挥作用。"
        },
        {
            "start": 137.74,
            "end": 141.62,
            "text": "Nvidia 不只是卖硬件，它建了一个软件生态系统。"
        },
        {
            "start": 141.62,
            "end": 145.8,
            "text": "硬件有竞品能追上，但生态系统的壁垒要深得多。"
        },
        {
            "start": 145.8,
            "end": 148.76,
            "text": "第三，芯片设计 + 代工模式。"
        },
        {
            "start": 148.76,
            "end": 152.36,
            "text": "Nvidia 自己不建工厂，芯片制造交给台积电。"
        },
        {
            "start": 152.36,
            "end": 157.04,
            "text": "这意味着 Nvidia 不需要承担巨额的资本开支来建晶圆厂。"
        },
        {
            "start": 157.04,
            "end": 161.82,
            "text": "它把钱花在设计和研发上，然后拿走最大的一块利润。"
        },
        {
            "start": 161.82,
            "end": 163.82,
            "text": "再来看自由现金流。"
        },
        {
            "start": 163.82,
            "end": 166.8,
            "text": "Nvidia 的自由现金流表现也非常好。"
        },
        {
            "start": 166.8,
            "end": 171.3,
            "text": "高毛利率加上轻资产模式，让它产生了大量的现金。"
        },
        {
            "start": 171.3,
            "end": 173.5,
            "text": "这些现金用来做什么呢？"
        },
        {
            "start": 173.5,
            "end": 174.7,
            "text": "主要是三件事："
        },
        {
            "start": 174.7,
            "end": 176.46,
            "text": "一，加大研发投入。"
        },
        {
            "start": 177.04999999999998,
            "end": 181.24,
            "text": "AI 芯片的迭代速度非常快，Nvidia 每年都在推出新一代产品。"
        },
        {
            "start": 181.24,
            "end": 183.22,
            "text": "这需要持续的高额研发。"
        },
        {
            "start": 183.22,
            "end": 185.06,
            "text": "二，回购股份。"
        },
        {
            "start": 185.06,
            "end": 190.02,
            "text": "Nvidia 持续在回购自己的股票，这相当于把钱返还给股东。"
        },
        {
            "start": 190.02,
            "end": 191.64,
            "text": "三，战略投资。"
        },
        {
            "start": 191.64,
            "end": 195.96,
            "text": "Nvidia 投资了大量的 AI 创业公司和数据中心项目。"
        },
        {
            "start": 195.96,
            "end": 200.58,
            "text": "这种\"高毛利 → 高现金流 → 高研发 →"
        },
        {
            "start": 200.58,
            "end": 203.88,
            "text": "保持技术领先 → 维持高毛利\"的循环，"
        },
        {
            "start": 203.88,
            "end": 205.98,
            "text": "就是 Nvidia 的核心飞轮。"
        },
        {
            "start": 205.98,
            "end": 207.88,
            "text": "好，讲完了财务数据，"
        },
        {
            "start": 207.88,
            "end": 211.2,
            "text": "我们来分析一下 Nvidia 的商业模式为什么好。"
        },
        {
            "start": 211.2,
            "end": 214.5,
            "text": "我归纳为\"卖水模式\"的三个核心优势："
        },
        {
            "start": 214.5,
            "end": 215.82,
            "text": "第一，不赌方向。"
        },
        {
            "start": 215.82,
            "end": 219.7,
            "text": "做 AI 应用的公司，需要赌哪个应用场景能跑通。"
        },
        {
            "start": 219.7,
            "end": 221.26,
            "text": "但 Nvidia 不用。"
        },
        {
            "start": 221.26,
            "end": 224.16000000000003,
            "text": "不管你做的是聊天机器人、自动驾驶、"
        },
        {
            "start": 224.16000000000003,
            "end": 227.28,
            "text": "还是 AI 药物研发，你都需要买 GPU。"
        },
        {
            "start": 227.28,
            "end": 230.78,
            "text": "Nvidia 赚的是所有 AI 玩家的\"通行费\"。"
        },
        {
            "start": 230.78,
            "end": 233.18,
            "text": "第二，需求确定性高。"
        },
        {
            "start": 233.18,
            "end": 235.32,
            "text": "AI 的发展方向可能有分歧，"
        },
        {
            "start": 235.32,
            "end": 238.92,
            "text": "但\"AI 需要更多算力\"这件事是确定的。"
        },
        {
            "start": 238.92,
            "end": 242.78,
            "text": "只要 AI 行业在增长，Nvidia 的需求就在增长。"
        },
        {
            "start": 242.78,
            "end": 244.96,
            "text": "第三，赢家通吃效应。"
        },
        {
            "start": 244.96,
            "end": 246.5,
            "text": "半导体行业有一个特点："
        },
        {
            "start": 246.5,
            "end": 248.3,
            "text": "第一名拿走大部分利润，"
        },
        {
            "start": 248.3,
            "end": 251.36,
            "text": "第二名勉强盈亏平衡，第三名亏损。"
        },
        {
            "start": 251.36,
            "end": 255.82,
            "text": "因为芯片的研发成本极高，但边际制造成本很低。"
        },
        {
            "start": 255.82,
            "end": 259.88,
            "text": "规模越大，单位成本越低，越能投入研发保持领先。"
        },
        {
            "start": 260.28000000000003,
            "end": 262.44,
            "text": "当然，Nvidia 也面临一些风险。"
        },
        {
            "start": 262.44,
            "end": 265.16,
            "text": "从财务的角度看几个关键风险。"
        },
        {
            "start": 265.16,
            "end": 267.46,
            "text": "第一，客户集中度风险。"
        },
        {
            "start": 267.46,
            "end": 271.06,
            "text": "Nvidia 的大客户主要是几家超大型科技公司："
        },
        {
            "start": 271.06,
            "end": 273.82,
            "text": "微软、Meta、Google、亚马逊等。"
        },
        {
            "start": 273.82,
            "end": 276.6,
            "text": "这几家公司都在投入自研芯片。"
        },
        {
            "start": 276.6,
            "end": 281.2,
            "text": "如果它们的自研芯片做起来了，对 Nvidia 的需求可能会下降。"
        },
        {
            "start": 281.2,
            "end": 283.04,
            "text": "第二，周期性风险。"
        },
        {
            "start": 283.04,
            "end": 285.06000000000006,
            "text": "AI 投资有可能出现周期。"
        },
        {
            "start": 285.06000000000006,
            "end": 288.6,
            "text": "如果 AI 应用的商业化进展不如预期，"
        },
        {
            "start": 288.6,
            "end": 291.66,
            "text": "大公司可能会减少 AI 资本开支。"
        },
        {
            "start": 291.66,
            "end": 295.04,
            "text": "Nvidia 的收入增速就会放缓甚至下滑。"
        },
        {
            "start": 295.6,
            "end": 297.22,
            "text": "第三，竞争加剧。"
        },
        {
            "start": 297.22,
            "end": 298.62,
            "text": "AMD 在追赶，"
        },
        {
            "start": 298.62,
            "end": 301.02,
            "text": "中国也在加大自主芯片的投入，"
        },
        {
            "start": 301.02,
            "end": 303.84,
            "text": "还有各种专用 AI 芯片在涌现。"
        },
        {
            "start": 303.84,
            "end": 307.1,
            "text": "虽然短期内 Nvidia 的领先地位很稳，"
        },
        {
            "start": 307.1,
            "end": 309.7,
            "text": "但长期来看竞争一定会加剧。"
        },
        {
            "start": 309.7,
            "end": 312.02,
            "text": "第四，地缘政治风险。"
        },
        {
            "start": 312.02,
            "end": 315.32,
            "text": "AI 芯片已经成为中美科技竞争的焦点。"
        },
        {
            "start": 315.32,
            "end": 319.12,
            "text": "出口限制政策的变化会直接影响 Nvidia 的市场空间。"
        },
        {
            "start": 319.64,
            "end": 324.38,
            "text": "最后，从 Nvidia 的案例里提炼几个对我们有用的财务分析启发。"
        },
        {
            "start": 324.38,
            "end": 325.46,
            "text": "第一，看毛利率。"
        },
        {
            "start": 325.46,
            "end": 327.9,
            "text": "高毛利率意味着强定价权，"
        },
        {
            "start": 327.9,
            "end": 331.42,
            "text": "而强定价权通常来自垄断或者生态壁垒。"
        },
        {
            "start": 331.42,
            "end": 333.5,
            "text": "第二，看自由现金流。"
        },
        {
            "start": 333.5,
            "end": 337.8,
            "text": "一家公司赚的利润如果不能转化成真金白银的现金流，"
        },
        {
            "start": 337.8,
            "end": 340.02,
            "text": "那利润就是纸面上的数字。"
        },
        {
            "start": 340.02,
            "end": 344.7,
            "text": "Nvidia 的现金流和利润是匹配的，这说明它的盈利质量很高。"
        },
        {
            "start": 344.7,
            "end": 345.98,
            "text": "第三，看飞轮。"
        },
        {
            "start": 345.98,
            "end": 348.92,
            "text": "好的公司都有一个正向循环的飞轮。"
        },
        {
            "start": 348.92,
            "end": 353.54,
            "text": "Nvidia 的飞轮是\"技术领先 → 高毛利 → 高研发"
        },
        {
            "start": 353.54,
            "end": 355.1,
            "text": "→ 保持技术领先\"。"
        },
        {
            "start": 355.1,
            "end": 356.98,
            "text": "第四，看风险。"
        },
        {
            "start": 356.98,
            "end": 359.32,
            "text": "再好的公司也有风险。"
        },
        {
            "start": 359.32,
            "end": 361.34,
            "text": "作为投资者或管理者，"
        },
        {
            "start": 361.34,
            "end": 363.16,
            "text": "你需要识别这些风险，"
        },
        {
            "start": 363.16,
            "end": 365.3,
            "text": "评估它们的概率和影响。"
        },
        {
            "start": 365.3,
            "end": 368.32,
            "text": "你可以试着用 AI 来做这种分析。"
        },
        {
            "start": 368.32,
            "end": 371.52,
            "text": "把 Nvidia 的财报数据输入给 AI，"
        },
        {
            "start": 371.52,
            "end": 374.56,
            "text": "让它帮你算关键指标、找趋势、"
        },
        {
            "start": 374.56,
            "end": 375.6,
            "text": "做同行对比。"
        },
        {
            "start": 375.6,
            "end": 378.46,
            "text": "这比你自己一个一个数字翻快得多。"
        },
        {
            "start": 378.46,
            "end": 380.06,
            "text": "好，总结一下。"
        },
        {
            "start": 380.06,
            "end": 385.16,
            "text": "Nvidia 的\"卖水模式\"：不赌方向、需求确定、赢家通吃。"
        },
        {
            "start": 385.16,
            "end": 389.5,
            "text": "财务特征是超高毛利率、强现金流、轻资产模式。"
        },
        {
            "start": 389.5,
            "end": 393.58,
            "text": "核心壁垒不只是芯片性能，更是 CUDA 生态。"
        },
        {
            "start": 393.58,
            "end": 397.28,
            "text": "主要风险是客户自研、周期性和地缘政治。"
        },
        {
            "start": 397.28,
            "end": 399.9,
            "text": "下一期是模块二的最后一期："
        },
        {
            "start": 399.9,
            "end": 401.36,
            "text": "你的财务体检，"
        },
        {
            "start": 401.36,
            "end": 403.74,
            "text": "用 AI 做一次快速财务诊断。"
        },
        {
            "start": 403.74,
            "end": 405.82,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 405.82,
            "end": 409.28,
            "text": "1. \"卖水模式\"三大优势：不赌方向、"
        },
        {
            "start": 409.28,
            "end": 411.08,
            "text": "需求确定、赢家通吃"
        },
        {
            "start": 411.08,
            "end": 414.44,
            "text": "2. Nvidia 的核心财务特征：超高毛利率、"
        },
        {
            "start": 414.64,
            "end": 416.22,
            "text": "强自由现金流、轻资产"
        },
        {
            "start": 416.22,
            "end": 420.53999999999996,
            "text": "3. 护城河不只是硬件——CUDA 生态是最深的壁垒"
        },
        {
            "start": 420.54,
            "end": 425.48,
            "text": "4. 四大风险：客户自研、周期性、竞争加剧、地缘政治"
        },
        {
            "start": 425.90000000000003,
            "end": 430.14,
            "text": "1. 在你所在的行业里，有没有类似\"卖水模式\"的公司？"
        },
        {
            "start": 430.14,
            "end": 431.96,
            "text": "它的财务特征如何？"
        },
        {
            "start": 431.96,
            "end": 435.82,
            "text": "2. 如果 AI 大模型的训练成本大幅下降，"
        },
        {
            "start": 435.82,
            "end": 438.78,
            "text": "对 Nvidia 的影响会是正面还是负面？"
        },
        {
            "start": 438.78,
            "end": 443.0,
            "text": "3. 你觉得 Nvidia 的 CUDA 生态壁垒能维持多久？"
        },
        {
            "start": 443.0,
            "end": 444.84,
            "text": "什么因素可能打破它？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.271,
        "index": 0
    },
    {
        "start": 10.271,
        "end": 63.167,
        "index": 1
    },
    {
        "start": 63.167,
        "end": 118.631,
        "index": 2
    },
    {
        "start": 118.631,
        "end": 173.837,
        "index": 3
    },
    {
        "start": 173.837,
        "end": 229.301,
        "index": 4
    },
    {
        "start": 229.301,
        "end": 285.021,
        "index": 5
    },
    {
        "start": 285.021,
        "end": 348.445,
        "index": 6
    },
    {
        "start": 348.445,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-13.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-13.html?entry={entry}", secondaryHref: "./lesson-finance-13.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-12", coachSource: "./ai-coach.html?source=lesson-finance-12" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：NVIDIA 的财务与资本市场逻辑的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：NVIDIA 的财务与资本市场逻辑", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-13.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
