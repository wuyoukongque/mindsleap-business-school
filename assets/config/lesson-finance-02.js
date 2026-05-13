(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第2课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第2课：关键财务指标：管理者必须盯住的几个数字",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep02-financial-ratios/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：关键财务指标：管理者必须盯住的几个数字", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-03.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "三张财务报表：企业的体检报告",
                "body": "先建立财务阅读的底层框架：资产负债表、利润表与现金流量表到底怎么看。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "关键财务指标：管理者必须盯住的几个数字",
                "body": "抓住几个最关键的数字，快速判断一家公司的健康度。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "现金流管理：利润不等于现金",
                "body": "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "抓住几个最关键的数字，快速判断一家公司的健康度。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "上一期我们学了三张财务报表的基本逻辑"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "你还要看绝对值"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "如果这个数字在变大，说明你的客户在拖延付款，或者你为了冲销售在放松收款标准"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "简单说就是：你短期内有多少钱可以用来还短期债务"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 2/13", "建议下一节：现金流管理：利润不等于现金", '也可以先整理这一节'], nextHref: "./lesson-finance-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-02", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson2", audioSource: './assets/audio/finance-ep02-financial-ratios.mp3?v=20260411-finance-ep02-r1', vttSrc: './assets/subtitles/finance-ep02-financial-ratios.vtt?v=20260411-finance-ep02-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep02-financial-ratios/slide_01.png",
            "label": "关键财务指标：管理者必须盯住的几个数字",
            "caption": "这一节会帮助你系统理解：关键财务指标：管理者必须盯住的几个数字"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_03.png",
            "label": "核心框架",
            "caption": "你还要看绝对值。 一个净利率20%但收入只有一千万的公司，和一个净利率5%但收入一百亿的公司，后者的净利润是前者的二十五倍。"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_04.png",
            "label": "关键指标",
            "caption": "如果这个数字在变大，说明你的客户在拖延付款，或者你为了冲销售在放松收款标准。 这是一个警示信号。"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "简单说就是：你短期内有多少钱可以用来还短期债务。 这个比率至少要大于1，最好在1.5到2之间。"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_06.png",
            "label": "回到你的企业",
            "caption": "拿到一家公司的财报，你用五分钟看这几个数字： 毛利率，产品赚不赚钱？ 跟同行比怎么样？"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_07.png",
            "label": "风险与提醒",
            "caption": "有的公司是靠高周转做到的，比如沃尔玛，利润率低但卖得多。 有的公司是靠高杠杆做到的，比如银行。"
        },
        {
            "file": "finance-ep02-financial-ratios/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.26,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.26,
            "end": 3.56,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.56,
            "end": 6.66,
            "text": "上一期我们学了三张财务报表的基本逻辑。"
        },
        {
            "start": 6.66,
            "end": 10.920000000000002,
            "text": "今天来学怎么用关键指标快速给企业做一次\"体检\"。"
        },
        {
            "start": 10.920000000000002,
            "end": 14.42,
            "text": "就像医生不会把你的体检报告每一项都看一遍，"
        },
        {
            "start": 14.42,
            "end": 17.94,
            "text": "他会重点看几个关键指标——血压、"
        },
        {
            "start": 17.94,
            "end": 19.22,
            "text": "血糖、心率。"
        },
        {
            "start": 19.72,
            "end": 20.78,
            "text": "财务分析也一样，"
        },
        {
            "start": 20.78,
            "end": 22.72,
            "text": "你只要盯住几个关键指标，"
        },
        {
            "start": 22.72,
            "end": 25.44,
            "text": "就能快速判断一家公司的健康状况。"
        },
        {
            "start": 25.44,
            "end": 28.0,
            "text": "我把关键财务指标分成四个类别。"
        },
        {
            "start": 28.0,
            "end": 29.88,
            "text": "第一类：盈利能力。"
        },
        {
            "start": 29.88,
            "end": 32.48,
            "text": "你赚不赚钱，赚钱的效率怎么样。"
        },
        {
            "start": 32.48,
            "end": 34.32,
            "text": "第二类：运营效率。"
        },
        {
            "start": 34.32,
            "end": 36.62,
            "text": "你的资产和资金用得好不好。"
        },
        {
            "start": 36.62,
            "end": 38.64,
            "text": "第三类：偿债能力。"
        },
        {
            "start": 38.64,
            "end": 40.48,
            "text": "你欠的债安不安全。"
        },
        {
            "start": 40.48,
            "end": 42.62,
            "text": "第四类：成长能力。"
        },
        {
            "start": 42.62,
            "end": 44.14,
            "text": "你的增长势头怎么样。"
        },
        {
            "start": 44.14,
            "end": 47.26,
            "text": "每一类我讲两到三个最核心的指标。"
        },
        {
            "start": 47.26,
            "end": 48.78,
            "text": "先说盈利能力。"
        },
        {
            "start": 48.9,
            "end": 49.8,
            "text": "三个指标。"
        },
        {
            "start": 49.8,
            "end": 51.4,
            "text": "第一个：毛利率。"
        },
        {
            "start": 51.86,
            "end": 53.12,
            "text": "上一期讲过了。"
        },
        {
            "start": 53.12,
            "end": 54.44,
            "text": "毛利润除以收入。"
        },
        {
            "start": 54.96,
            "end": 56.98,
            "text": "反映产品本身的赚钱能力。"
        },
        {
            "start": 56.98,
            "end": 58.32,
            "text": "第二个：净利率。"
        },
        {
            "start": 58.32,
            "end": 59.9,
            "text": "净利润除以收入。"
        },
        {
            "start": 59.9,
            "end": 61.74,
            "text": "反映最终的盈利效率。"
        },
        {
            "start": 61.74,
            "end": 66.9,
            "text": "一个公司收入十个亿，净利率是10%，净利润就是一个亿。"
        },
        {
            "start": 66.9,
            "end": 69.06,
            "text": "但净利率高不代表一定好。"
        },
        {
            "start": 69.06,
            "end": 70.44,
            "text": "你还要看绝对值。"
        },
        {
            "start": 70.44,
            "end": 74.02,
            "text": "一个净利率20%但收入只有一千万的公司，"
        },
        {
            "start": 74.02,
            "end": 77.48,
            "text": "和一个净利率5%但收入一百亿的公司，"
        },
        {
            "start": 77.48,
            "end": 80.18,
            "text": "后者的净利润是前者的二十五倍。"
        },
        {
            "start": 80.18,
            "end": 85.44,
            "text": "第三个，也是最重要的：ROE，Return on Equity，净资产收益率。"
        },
        {
            "start": 85.44,
            "end": 88.34,
            "text": "ROE = 净利润 / 股东权益。"
        },
        {
            "start": 88.34,
            "end": 91.08,
            "text": "ROE为什么是最重要的盈利指标？"
        },
        {
            "start": 91.08,
            "end": 95.08,
            "text": "因为它告诉你：股东投进来的每一块钱，"
        },
        {
            "start": 95.08,
            "end": 96.86,
            "text": "一年能赚回多少钱。"
        },
        {
            "start": 96.86,
            "end": 102.02,
            "text": "ROE 20%意味着股东投了一百块，一年赚了二十块。"
        },
        {
            "start": 102.02,
            "end": 104.18,
            "text": "巴菲特特别看重ROE。"
        },
        {
            "start": 104.18,
            "end": 109.42,
            "text": "他说过，长期来看，你的投资回报率会趋近于公司的ROE。"
        },
        {
            "start": 109.42,
            "end": 110.4,
            "text": "一般来说，"
        },
        {
            "start": 110.4,
            "end": 115.5,
            "text": "ROE能持续保持在15%以上的公司就是很优秀的公司了。"
        },
        {
            "start": 115.5,
            "end": 118.88,
            "text": "能持续保持在20%以上的是极少数。"
        },
        {
            "start": 118.88,
            "end": 120.22,
            "text": "第二类：运营效率。"
        },
        {
            "start": 120.34,
            "end": 121.46,
            "text": "两个指标。"
        },
        {
            "start": 121.46,
            "end": 124.28,
            "text": "第一个：应收账款周转天数。"
        },
        {
            "start": 124.28,
            "end": 127.76,
            "text": "就是你卖了东西之后，平均多少天能收到钱。"
        },
        {
            "start": 127.76,
            "end": 129.54,
            "text": "这个数字越小越好。"
        },
        {
            "start": 129.54,
            "end": 133.34,
            "text": "30天比90天好，因为你更快收到钱。"
        },
        {
            "start": 133.34,
            "end": 135.04,
            "text": "如果这个数字在变大，"
        },
        {
            "start": 135.04,
            "end": 136.98,
            "text": "说明你的客户在拖延付款，"
        },
        {
            "start": 136.98,
            "end": 140.22,
            "text": "或者你为了冲销售在放松收款标准。"
        },
        {
            "start": 140.22,
            "end": 141.92,
            "text": "这是一个警示信号。"
        },
        {
            "start": 141.92,
            "end": 143.68,
            "text": "第二个：库存周转天数。"
        },
        {
            "start": 143.68,
            "end": 146.7,
            "text": "就是你的库存平均多少天能卖掉。"
        },
        {
            "start": 146.7,
            "end": 148.52,
            "text": "同样越小越好。"
        },
        {
            "start": 148.52,
            "end": 152.1,
            "text": "如果库存周转天数在变大，说明东西卖不动了。"
        },
        {
            "start": 152.1,
            "end": 155.68,
            "text": "这两个指标看起来很基础，但非常实用。"
        },
        {
            "start": 155.68,
            "end": 158.48,
            "text": "很多公司表面上利润很好，"
        },
        {
            "start": 158.48,
            "end": 163.12,
            "text": "但一看应收账款周转天数从30天变成了90天，"
        },
        {
            "start": 163.12,
            "end": 166.62,
            "text": "就知道这个利润质量不高——钱还没收回来呢。"
        },
        {
            "start": 166.62,
            "end": 168.64,
            "text": "第三类：偿债能力。"
        },
        {
            "start": 168.64,
            "end": 169.38,
            "text": "两个指标。"
        },
        {
            "start": 169.38,
            "end": 171.0,
            "text": "第一个：资产负债率。"
        },
        {
            "start": 171.0,
            "end": 173.38,
            "text": "负债总额除以资产总额。"
        },
        {
            "start": 173.38,
            "end": 175.32,
            "text": "反映公司用了多少杠杆。"
        },
        {
            "start": 175.32,
            "end": 177.02,
            "text": "这个比率多少合适？"
        },
        {
            "start": 177.02,
            "end": 178.1,
            "text": "看行业。"
        },
        {
            "start": 178.38,
            "end": 180.86,
            "text": "重资产行业比如房地产、制造业，"
        },
        {
            "start": 180.86,
            "end": 184.12,
            "text": "资产负债率60%到70%很正常。"
        },
        {
            "start": 184.12,
            "end": 186.84,
            "text": "轻资产行业比如科技公司、咨询公司，"
        },
        {
            "start": 186.84,
            "end": 189.72,
            "text": "30%到40%可能就够了。"
        },
        {
            "start": 189.72,
            "end": 192.24,
            "text": "关键不是绝对数字，而是趋势。"
        },
        {
            "start": 192.24,
            "end": 195.02,
            "text": "如果资产负债率在持续上升，"
        },
        {
            "start": 195.02,
            "end": 198.5,
            "text": "说明公司在不断加杠杆，风险在增加。"
        },
        {
            "start": 198.5,
            "end": 200.08,
            "text": "第二个：流动比率。"
        },
        {
            "start": 200.08,
            "end": 202.42,
            "text": "流动资产除以流动负债。"
        },
        {
            "start": 202.42,
            "end": 204.82,
            "text": "反映你的短期偿债能力。"
        },
        {
            "start": 204.82,
            "end": 209.02,
            "text": "简单说就是：你短期内有多少钱可以用来还短期债务。"
        },
        {
            "start": 209.02,
            "end": 212.92,
            "text": "这个比率至少要大于1，最好在1.5到2之间。"
        },
        {
            "start": 212.92,
            "end": 214.3,
            "text": "如果小于1，"
        },
        {
            "start": 214.3,
            "end": 218.08,
            "text": "意味着你的短期债务比短期能变现的资产还多，"
        },
        {
            "start": 218.08,
            "end": 220.18,
            "text": "可能面临现金流危机。"
        },
        {
            "start": 220.18,
            "end": 222.24,
            "text": "第四类：成长能力。"
        },
        {
            "start": 222.24,
            "end": 223.08,
            "text": "两个指标。"
        },
        {
            "start": 223.08,
            "end": 225.16,
            "text": "第一个：收入增长率。"
        },
        {
            "start": 225.16,
            "end": 227.62,
            "text": "今年收入比去年增长了多少。"
        },
        {
            "start": 227.62,
            "end": 229.72,
            "text": "这是最直接的增长指标。"
        },
        {
            "start": 229.72,
            "end": 233.1,
            "text": "但要注意区分有机增长和并购增长。"
        },
        {
            "start": 233.1,
            "end": 239.06,
            "text": "如果收入增长了50%但其中40%是靠收购一家公司带来的，"
        },
        {
            "start": 239.06,
            "end": 240.72,
            "text": "有机增长只有10%。"
        },
        {
            "start": 241.28,
            "end": 243.14,
            "text": "第二个：净利润增长率。"
        },
        {
            "start": 243.14,
            "end": 246.02,
            "text": "利润增长比收入增长更有含金量。"
        },
        {
            "start": 246.02,
            "end": 248.98,
            "text": "因为收入增长可能是靠烧钱换来的，"
        },
        {
            "start": 248.98,
            "end": 252.26,
            "text": "但利润增长意味着你在赚更多的钱。"
        },
        {
            "start": 252.26,
            "end": 253.8,
            "text": "最理想的状态是什么？"
        },
        {
            "start": 253.8,
            "end": 256.08,
            "text": "利润增长率大于收入增长率。"
        },
        {
            "start": 256.08,
            "end": 260.86,
            "text": "这说明你在增长的同时还在提高效率——规模效应出来了。"
        },
        {
            "start": 260.86,
            "end": 264.04,
            "text": "反过来，如果收入在增长但利润在下降，"
        },
        {
            "start": 264.04,
            "end": 266.4,
            "text": "说明你的增长是不健康的，"
        },
        {
            "start": 266.4,
            "end": 268.38,
            "text": "可能是在用利润换规模。"
        },
        {
            "start": 268.38,
            "end": 272.26,
            "text": "好，我现在帮你串一个完整的\"快速体检\"流程。"
        },
        {
            "start": 272.26,
            "end": 276.18,
            "text": "拿到一家公司的财报，你用五分钟看这几个数字："
        },
        {
            "start": 276.18,
            "end": 278.12,
            "text": "毛利率——产品赚不赚钱？"
        },
        {
            "start": 278.12,
            "end": 279.56,
            "text": "跟同行比怎么样？"
        },
        {
            "start": 279.56,
            "end": 282.26,
            "text": "ROE——股东的钱用得效率高不高？"
        },
        {
            "start": 282.26,
            "end": 285.62,
            "text": "应收账款周转天数——钱收得回来吗？"
        },
        {
            "start": 285.62,
            "end": 287.26,
            "text": "在变好还是变差？"
        },
        {
            "start": 287.26,
            "end": 289.42,
            "text": "资产负债率——杠杆大不大？"
        },
        {
            "start": 289.42,
            "end": 290.9,
            "text": "安不安全？"
        },
        {
            "start": 290.9,
            "end": 294.12,
            "text": "收入增长率和净利润增长率——在增长吗？"
        },
        {
            "start": 294.36,
            "end": 295.36,
            "text": "增长健康吗？"
        },
        {
            "start": 295.36,
            "end": 297.22,
            "text": "六个数字，五分钟，"
        },
        {
            "start": 297.22,
            "end": 300.88,
            "text": "你就能对一家公司的财务健康状况有一个基本的判断。"
        },
        {
            "start": 300.88,
            "end": 302.74,
            "text": "当然，这只是初步判断。"
        },
        {
            "start": 302.74,
            "end": 305.24,
            "text": "深入分析还需要看更多细节。"
        },
        {
            "start": 305.24,
            "end": 310.08,
            "text": "但作为管理者，这个快速体检已经够你做大多数决策了。"
        },
        {
            "start": 310.08,
            "end": 312.9,
            "text": "最后补充一个重要的概念：杜邦分析法。"
        },
        {
            "start": 312.9,
            "end": 316.06,
            "text": "杜邦分析法把ROE拆成了三个部分："
        },
        {
            "start": 316.06,
            "end": 319.98,
            "text": "ROE = 净利率 × 资产周转率 × 权益乘数"
        },
        {
            "start": 319.98,
            "end": 321.98,
            "text": "净利率反映你的盈利能力。"
        },
        {
            "start": 321.98,
            "end": 324.2,
            "text": "资产周转率反映你的运营效率。"
        },
        {
            "start": 324.2,
            "end": 326.52,
            "text": "权益乘数反映你的杠杆水平。"
        },
        {
            "start": 326.52,
            "end": 328.64,
            "text": "这个拆解的价值在哪里？"
        },
        {
            "start": 328.64,
            "end": 331.12,
            "text": "它帮你找到ROE背后的驱动因素。"
        },
        {
            "start": 331.12,
            "end": 333.36,
            "text": "同样是ROE 20%，"
        },
        {
            "start": 333.42,
            "end": 336.92,
            "text": "有的公司是靠高利润率做到的——比如奢侈品公司。"
        },
        {
            "start": 336.92,
            "end": 340.54,
            "text": "有的公司是靠高周转做到的——比如沃尔玛，"
        },
        {
            "start": 340.54,
            "end": 342.02,
            "text": "利润率低但卖得多。"
        },
        {
            "start": 342.02,
            "end": 345.12,
            "text": "有的公司是靠高杠杆做到的——比如银行。"
        },
        {
            "start": 345.12,
            "end": 346.56,
            "text": "知道了驱动因素，"
        },
        {
            "start": 346.56,
            "end": 349.16,
            "text": "你就知道了这家公司的战略逻辑，"
        },
        {
            "start": 349.16,
            "end": 351.14,
            "text": "也知道了风险在哪里。"
        },
        {
            "start": 351.14,
            "end": 355.48,
            "text": "靠杠杆做到的高ROE，风险就比靠利润率做到的高。"
        },
        {
            "start": 355.48,
            "end": 357.24,
            "text": "好，今天的思考题。"
        },
        {
            "start": 357.24,
            "end": 359.76,
            "text": "第一，查一下你公司的ROE是多少？"
        },
        {
            "start": 359.76,
            "end": 362.82,
            "text": "用杜邦分析拆解一下，是靠利润率、"
        },
        {
            "start": 362.82,
            "end": 364.82,
            "text": "周转率还是杠杆驱动的？"
        },
        {
            "start": 364.82,
            "end": 367.8,
            "text": "第二，你的应收账款周转天数是多少？"
        },
        {
            "start": 367.8,
            "end": 370.42,
            "text": "跟去年比是变好了还是变差了？"
        },
        {
            "start": 370.42,
            "end": 374.44,
            "text": "第三，你的收入增长率和净利润增长率哪个更高？"
        },
        {
            "start": 374.44,
            "end": 376.6,
            "text": "你的增长是健康的吗？"
        },
        {
            "start": 376.6,
            "end": 377.54,
            "text": "总结一下。"
        },
        {
            "start": 377.54,
            "end": 380.34,
            "text": "第一，四类关键指标：盈利能力、"
        },
        {
            "start": 380.66,
            "end": 383.3,
            "text": "运营效率、偿债能力、成长能力。"
        },
        {
            "start": 383.3,
            "end": 386.38,
            "text": "第二，六个数字做快速体检：毛利率、"
        },
        {
            "start": 386.38,
            "end": 389.32,
            "text": "ROE、应收周转天数、资产负债率、"
        },
        {
            "start": 389.46,
            "end": 391.58,
            "text": "收入增长率、净利润增长率。"
        },
        {
            "start": 391.58,
            "end": 395.06,
            "text": "第三，杜邦分析把ROE拆成三个驱动因素："
        },
        {
            "start": 395.06,
            "end": 397.14,
            "text": "利润率×周转率×杠杆。"
        },
        {
            "start": 397.14,
            "end": 400.28,
            "text": "帮你理解高ROE背后的真实逻辑。"
        },
        {
            "start": 400.28,
            "end": 404.68,
            "text": "第四，看财务指标要看趋势，不只是看绝对值。"
        },
        {
            "start": 404.68,
            "end": 408.5,
            "text": "在变好还是变差比当前数字本身更重要。"
        },
        {
            "start": 408.5,
            "end": 410.86,
            "text": "下一期我们深入聊现金流。"
        },
        {
            "start": 410.86,
            "end": 412.66,
            "text": "为什么赚钱的公司也会死？"
        },
        {
            "start": 412.66,
            "end": 415.08,
            "text": "现金流为王到底是什么意思？"
        },
        {
            "start": 415.08,
            "end": 417.42,
            "text": "这个话题对创业者尤其重要。"
        },
        {
            "start": 417.42,
            "end": 418.76,
            "text": "好，今天就到这里。"
        },
        {
            "start": 418.76,
            "end": 420.2,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 11.813,
        "index": 0
    },
    {
        "start": 11.813,
        "end": 67.629,
        "index": 1
    },
    {
        "start": 67.629,
        "end": 118.868,
        "index": 2
    },
    {
        "start": 118.868,
        "end": 173.208,
        "index": 3
    },
    {
        "start": 173.208,
        "end": 225.48,
        "index": 4
    },
    {
        "start": 225.48,
        "end": 279.377,
        "index": 5
    },
    {
        "start": 279.377,
        "end": 346.71,
        "index": 6
    },
    {
        "start": 346.71,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "抓住几个最关键的数字，快速判断一家公司的健康度。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-03.html?entry={entry}", secondaryHref: "./lesson-finance-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-02", coachSource: "./ai-coach.html?source=lesson-finance-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于关键财务指标：管理者必须盯住的几个数字的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "关键财务指标：管理者必须盯住的几个数字", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
