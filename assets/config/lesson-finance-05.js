(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第5课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第5课：公司估值：一家公司到底值多少钱",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep05-valuation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：公司估值：一家公司到底值多少钱", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-06.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 4,
                "title": "AI 财务分析：让 AI 成为你的 CFO 助手",
                "body": "把 AI 用进财务分析，让数字阅读更快、更系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "公司估值：一家公司到底值多少钱",
                "body": "先建立估值判断框架，理解一家公司的价值到底从哪里来。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 估值：用 AI 做公司估值的第一版判断",
                "body": "用 AI 提高估值分析效率，但保留管理者自己的判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "先建立估值判断框架，理解一家公司的价值到底从哪里来。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天聊一个每个创业者和投资人都绕不开的问题：你的公司到底值多少钱"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "第二步，选一个折现率"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "逻辑很简单：找几家跟你类似的上市公司，看它们的估值倍数是多少，然后把同样的倍数套在你身上"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "Precedent Transaction Analysis"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 5/13", "建议下一节：AI 估值：用 AI 做公司估值的第一版判断", '也可以先整理这一节'], nextHref: "./lesson-finance-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-05", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson5", audioSource: './assets/audio/finance-ep05-valuation.mp3?v=20260411-finance-ep05-r1', vttSrc: './assets/subtitles/finance-ep05-valuation.vtt?v=20260411-finance-ep05-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep05-valuation/slide_01.png",
            "label": "公司估值：一家公司到底值多少钱",
            "caption": "这一节会帮助你系统理解：公司估值：一家公司到底值多少钱"
        },
        {
            "file": "finance-ep05-valuation/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep05-valuation/slide_03.png",
            "label": "核心框架",
            "caption": "第二步，选一个折现率。 通常用加权平均资本成本，WACC。"
        },
        {
            "file": "finance-ep05-valuation/slide_04.png",
            "label": "关键指标",
            "caption": "逻辑很简单：找几家跟你类似的上市公司，看它们的估值倍数是多少，然后把同样的倍数套在你身上。 最常用的估值倍数是P/E和EV/Revenue。"
        },
        {
            "file": "finance-ep05-valuation/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "Precedent Transaction Analysis。 跟可比公司法类似，只不过参照的不是上市公司的当前估值，而是最近发生的并购交易。"
        },
        {
            "file": "finance-ep05-valuation/slide_06.png",
            "label": "回到你的企业",
            "caption": "你的增长势头好、赛道热、竞争投资人多，价格就往高走。 反过来就往低走。"
        },
        {
            "file": "finance-ep05-valuation/slide_07.png",
            "label": "风险与提醒",
            "caption": "DCF、可比公司还是可比交易？ 第二，找三家跟你类似的上市公司或者最近被收购的公司，看看它们的估值倍数是多少。"
        },
        {
            "file": "finance-ep05-valuation/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.16,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.16,
            "end": 3.3,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.3,
            "end": 7.18,
            "text": "今天聊一个每个创业者和投资人都绕不开的问题："
        },
        {
            "start": 7.18,
            "end": 9.38,
            "text": "你的公司到底值多少钱？"
        },
        {
            "start": 9.38,
            "end": 11.5,
            "text": "估值这个事情，很多人觉得很神秘。"
        },
        {
            "start": 11.5,
            "end": 14.42,
            "text": "好像投资人报一个价，创始人还一个价，"
        },
        {
            "start": 14.42,
            "end": 15.92,
            "text": "最终谈出来一个数字。"
        },
        {
            "start": 15.92,
            "end": 18.3,
            "text": "但其实估值背后是有方法论的。"
        },
        {
            "start": 18.3,
            "end": 21.44,
            "text": "今天我给你讲三种最主流的估值方法。"
        },
        {
            "start": 21.44,
            "end": 24.5,
            "text": "第一种：DCF，折现现金流法。"
        },
        {
            "start": 24.5,
            "end": 25.9,
            "text": "Discounted Cash Flow。"
        },
        {
            "start": 25.9,
            "end": 28.02,
            "text": "DCF的逻辑非常纯粹："
        },
        {
            "start": 28.02,
            "end": 33.32,
            "text": "一家公司的价值等于它未来所有年份产生的自由现金流，"
        },
        {
            "start": 33.32,
            "end": 35.3,
            "text": "折现到今天的总和。"
        },
        {
            "start": 35.3,
            "end": 36.5,
            "text": "什么叫折现？"
        },
        {
            "start": 36.5,
            "end": 39.74,
            "text": "因为今天的一块钱比明年的一块钱更值钱。"
        },
        {
            "start": 39.74,
            "end": 43.68,
            "text": "今天的一块钱你可以去投资，明年可能变成一块一。"
        },
        {
            "start": 43.68,
            "end": 48.08,
            "text": "所以明年的一块钱，折算到今天只值大约九毛一。"
        },
        {
            "start": 48.08,
            "end": 49.08,
            "text": "具体怎么做？"
        },
        {
            "start": 49.08,
            "end": 49.58,
            "text": "三步。"
        },
        {
            "start": 49.9,
            "end": 53.02,
            "text": "第一步，预测未来五到十年的自由现金流。"
        },
        {
            "start": 53.02,
            "end": 57.84,
            "text": "这需要你对公司的收入增长、利润率、资本开支做假设。"
        },
        {
            "start": 58.5,
            "end": 60.34,
            "text": "第二步，选一个折现率。"
        },
        {
            "start": 60.34,
            "end": 64.06,
            "text": "通常用加权平均资本成本，WACC。"
        },
        {
            "start": 64.06,
            "end": 66.04,
            "text": "简单理解就是你的资金成本。"
        },
        {
            "start": 66.04,
            "end": 68.9,
            "text": "一般在8%到15%之间。"
        },
        {
            "start": 68.9,
            "end": 71.12,
            "text": "第三步，计算终值。"
        },
        {
            "start": 71.12,
            "end": 73.34,
            "text": "因为你不可能预测到无穷远，"
        },
        {
            "start": 73.34,
            "end": 78.22,
            "text": "所以假设第十年之后公司以一个稳定的增长率持续增长，"
        },
        {
            "start": 78.44,
            "end": 79.54,
            "text": "算出一个终值。"
        },
        {
            "start": 79.54,
            "end": 82.86,
            "text": "把五到十年的现金流加上终值，"
        },
        {
            "start": 82.86,
            "end": 84.92,
            "text": "全部折现到今天，"
        },
        {
            "start": 84.92,
            "end": 87.5,
            "text": "就是你的公司理论上值多少钱。"
        },
        {
            "start": 87.5,
            "end": 89.36,
            "text": "DCF的优点是什么？"
        },
        {
            "start": 89.36,
            "end": 91.9,
            "text": "它是最\"正宗\"的估值方法。"
        },
        {
            "start": 91.9,
            "end": 93.94,
            "text": "它不依赖其他公司的价格，"
        },
        {
            "start": 94.46,
            "end": 96.86,
            "text": "完全基于你自己公司的财务预测。"
        },
        {
            "start": 96.86,
            "end": 97.84,
            "text": "缺点呢？"
        },
        {
            "start": 97.84,
            "end": 99.38,
            "text": "它对假设非常敏感。"
        },
        {
            "start": 99.38,
            "end": 103.58,
            "text": "收入增长率多估一个百分点，最终估值可能差30%。"
        },
        {
            "start": 104.54,
            "end": 108.94,
            "text": "折现率差一个百分点，估值也可能差几十个百分点。"
        },
        {
            "start": 108.94,
            "end": 113.0,
            "text": "所以DCF更适合现金流稳定可预测的成熟公司。"
        },
        {
            "start": 113.0,
            "end": 117.9,
            "text": "对高速增长的创业公司，DCF的预测误差会很大。"
        },
        {
            "start": 117.9,
            "end": 119.9,
            "text": "第二种：可比公司法。"
        },
        {
            "start": 119.9,
            "end": 121.8,
            "text": "Comparable Company Analysis。"
        },
        {
            "start": 121.8,
            "end": 123.3,
            "text": "逻辑很简单："
        },
        {
            "start": 123.3,
            "end": 125.76,
            "text": "找几家跟你类似的上市公司，"
        },
        {
            "start": 125.76,
            "end": 128.1,
            "text": "看它们的估值倍数是多少，"
        },
        {
            "start": 128.1,
            "end": 130.66,
            "text": "然后把同样的倍数套在你身上。"
        },
        {
            "start": 130.66,
            "end": 134.32,
            "text": "最常用的估值倍数是P/E和EV/Revenue。"
        },
        {
            "start": 134.32,
            "end": 136.04,
            "text": "P/E就是市盈率。"
        },
        {
            "start": 136.24,
            "end": 137.64,
            "text": "股价除以每股收益。"
        },
        {
            "start": 137.64,
            "end": 140.62,
            "text": "如果一家类似公司的P/E是20倍，"
        },
        {
            "start": 140.62,
            "end": 142.58,
            "text": "你的净利润是五千万，"
        },
        {
            "start": 142.58,
            "end": 144.5,
            "text": "那你的估值就是十个亿。"
        },
        {
            "start": 144.5,
            "end": 147.86,
            "text": "EV/Revenue就是企业价值除以收入。"
        },
        {
            "start": 147.86,
            "end": 151.34,
            "text": "如果类似公司的EV/Revenue是5倍，"
        },
        {
            "start": 151.34,
            "end": 152.76,
            "text": "你的收入是两个亿，"
        },
        {
            "start": 152.76,
            "end": 154.84,
            "text": "那你的估值就是十个亿。"
        },
        {
            "start": 154.84,
            "end": 158.4,
            "text": "对于还没盈利的公司，通常用EV/Revenue，"
        },
        {
            "start": 158.4,
            "end": 160.4,
            "text": "因为你没有利润可以用P/E。"
        },
        {
            "start": 160.4,
            "end": 164.5,
            "text": "可比公司法的优点：简单直观，有市场参照。"
        },
        {
            "start": 164.5,
            "end": 166.66,
            "text": "投资人很喜欢用这个方法。"
        },
        {
            "start": 166.66,
            "end": 171.16,
            "text": "缺点：你要找到真正\"可比\"的公司，而这个其实很难。"
        },
        {
            "start": 171.16,
            "end": 173.54,
            "text": "你和可比公司的增长率不同、"
        },
        {
            "start": 173.54,
            "end": 177.28,
            "text": "利润率不同、市场不同、竞争格局不同。"
        },
        {
            "start": 177.28,
            "end": 179.66,
            "text": "这些差异都会影响估值倍数。"
        },
        {
            "start": 179.66,
            "end": 182.04,
            "text": "第三种：可比交易法。"
        },
        {
            "start": 182.04,
            "end": 184.18,
            "text": "Precedent Transaction Analysis。"
        },
        {
            "start": 184.18,
            "end": 186.22,
            "text": "跟可比公司法类似，"
        },
        {
            "start": 186.22,
            "end": 189.42,
            "text": "只不过参照的不是上市公司的当前估值，"
        },
        {
            "start": 189.42,
            "end": 191.82,
            "text": "而是最近发生的并购交易。"
        },
        {
            "start": 191.82,
            "end": 193.1,
            "text": "比如说，"
        },
        {
            "start": 193.1,
            "end": 195.94,
            "text": "你的行业里最近有一家公司被收购了，"
        },
        {
            "start": 195.94,
            "end": 197.88,
            "text": "收购价是收入的八倍。"
        },
        {
            "start": 197.88,
            "end": 201.38,
            "text": "那你可以参照这个倍数来估算你自己的价值。"
        },
        {
            "start": 201.38,
            "end": 206.1,
            "text": "可比交易法的一个特点是：并购价格通常包含了溢价。"
        },
        {
            "start": 206.1,
            "end": 210.52,
            "text": "因为买方愿意多付钱来获得控制权和协同效应。"
        },
        {
            "start": 210.52,
            "end": 215.54,
            "text": "所以可比交易法算出来的估值通常比可比公司法高一些。"
        },
        {
            "start": 215.54,
            "end": 217.4,
            "text": "好，三种方法讲完了。"
        },
        {
            "start": 217.4,
            "end": 220.58,
            "text": "在实际操作中，通常不会只用一种方法，"
        },
        {
            "start": 220.58,
            "end": 223.76,
            "text": "而是三种都做，得到一个估值范围。"
        },
        {
            "start": 223.76,
            "end": 226.89999999999995,
            "text": "比如说，DCF算出来八到十二亿，"
        },
        {
            "start": 226.9,
            "end": 229.22,
            "text": "可比公司法算出来十到十五亿，"
        },
        {
            "start": 229.22,
            "end": 232.25999999999993,
            "text": "可比交易法算出来十二到十八亿。"
        },
        {
            "start": 232.26,
            "end": 235.48,
            "text": "那你的估值范围大概就是十到十五亿。"
        },
        {
            "start": 235.48,
            "end": 239.76,
            "text": "最终成交价在这个范围里的哪个位置，取决于谈判。"
        },
        {
            "start": 239.76,
            "end": 244.44,
            "text": "你的增长势头好、赛道热、竞争投资人多，价格就往高走。"
        },
        {
            "start": 244.72,
            "end": 245.78,
            "text": "反过来就往低走。"
        },
        {
            "start": 245.78,
            "end": 250.46,
            "text": "对创业公司来说，我再补充一个常用的方法：VC估值法。"
        },
        {
            "start": 250.46,
            "end": 253.5,
            "text": "风险投资的估值逻辑跟传统的不太一样。"
        },
        {
            "start": 253.5,
            "end": 255.34,
            "text": "VC看的是退出回报。"
        },
        {
            "start": 255.34,
            "end": 258.82,
            "text": "简单说就是：如果VC投了你一千万，"
        },
        {
            "start": 258.82,
            "end": 260.3,
            "text": "占10%的股份，"
        },
        {
            "start": 260.3,
            "end": 262.66,
            "text": "那你的投后估值就是一个亿。"
        },
        {
            "start": 262.66,
            "end": 265.42,
            "text": "VC怎么判断这个一个亿合不合理？"
        },
        {
            "start": 265.42,
            "end": 266.14,
            "text": "他会想："
        },
        {
            "start": 266.14,
            "end": 269.1,
            "text": "五年后这家公司能上市或者被收购，"
        },
        {
            "start": 269.1,
            "end": 270.42,
            "text": "到时候值多少？"
        },
        {
            "start": 270.42,
            "end": 276.32,
            "text": "如果五年后值十个亿，那我的10%值一个亿，赚了十倍。"
        },
        {
            "start": 276.32,
            "end": 277.92,
            "text": "这个回报率可以接受。"
        },
        {
            "start": 277.92,
            "end": 281.14,
            "text": "所以VC的估值实际上是倒推出来的。"
        },
        {
            "start": 281.14,
            "end": 283.36,
            "text": "它先想清楚退出时值多少，"
        },
        {
            "start": 283.36,
            "end": 286.5,
            "text": "然后倒推出今天应该什么估值进来。"
        },
        {
            "start": 286.5,
            "end": 289.6,
            "text": "这就是为什么早期创业公司的估值看起来"
        },
        {
            "start": 289.6,
            "end": 290.66,
            "text": "有时候不太合理——"
        },
        {
            "start": 290.66,
            "end": 294.82,
            "text": "因为它定价的逻辑不是基于你今天的财务数据，"
        },
        {
            "start": 294.82,
            "end": 297.1,
            "text": "而是基于你未来可能长成多大。"
        },
        {
            "start": 297.1,
            "end": 299.06,
            "text": "好，今天的思考题。"
        },
        {
            "start": 299.06,
            "end": 303.48,
            "text": "第一，如果你的公司要融资，你会用哪种估值方法？"
        },
        {
            "start": 303.48,
            "end": 306.28,
            "text": "DCF、可比公司还是可比交易？"
        },
        {
            "start": 306.28,
            "end": 306.96,
            "text": "第二，"
        },
        {
            "start": 307.24,
            "end": 311.68,
            "text": "找三家跟你类似的上市公司或者最近被收购的公司，"
        },
        {
            "start": 311.68,
            "end": 314.08,
            "text": "看看它们的估值倍数是多少。"
        },
        {
            "start": 314.08,
            "end": 318.12,
            "text": "第三，用最简单的方法估算一下你公司的价值。"
        },
        {
            "start": 318.12,
            "end": 321.06,
            "text": "收入乘以行业平均的Revenue倍数。"
        },
        {
            "start": 321.06,
            "end": 323.14,
            "text": "你觉得这个数字合理吗？"
        },
        {
            "start": 323.14,
            "end": 324.12,
            "text": "总结一下。"
        },
        {
            "start": 324.12,
            "end": 326.92,
            "text": "第一，三种主流估值方法："
        },
        {
            "start": 326.92,
            "end": 331.04,
            "text": "DCF看未来现金流、可比公司看市场参照、"
        },
        {
            "start": 331.04,
            "end": 333.54,
            "text": "可比交易看历史成交价。"
        },
        {
            "start": 333.54,
            "end": 336.78,
            "text": "实际中三种并用得到估值范围。"
        },
        {
            "start": 336.78,
            "end": 341.2,
            "text": "第二，DCF最\"纯粹\"但对假设敏感。"
        },
        {
            "start": 341.2,
            "end": 344.94,
            "text": "可比公司法简单直观但要找到真正可比的对象。"
        },
        {
            "start": 344.94,
            "end": 348.28,
            "text": "可比交易法通常估值偏高因为包含溢价。"
        },
        {
            "start": 348.72,
            "end": 352.22,
            "text": "第三，创业公司估值本质上是对未来的定价。"
        },
        {
            "start": 352.22,
            "end": 354.92,
            "text": "VC从退出回报倒推今天的估值。"
        },
        {
            "start": 354.92,
            "end": 358.46,
            "text": "第四，估值是一个范围，不是一个精确数字。"
        },
        {
            "start": 358.46,
            "end": 361.16,
            "text": "最终价格取决于谈判和市场供需。"
        },
        {
            "start": 361.68,
            "end": 364.82,
            "text": "下一期我们专门聊AI公司的估值。"
        },
        {
            "start": 364.82,
            "end": 368.76,
            "text": "AI公司跟传统公司的估值逻辑有什么不同？"
        },
        {
            "start": 368.76,
            "end": 370.18,
            "text": "数据资产怎么估？"
        },
        {
            "start": 370.18,
            "end": 372.14,
            "text": "模型能力值多少钱？"
        },
        {
            "start": 372.36,
            "end": 374.26,
            "text": "这些都是AI时代的新问题。"
        },
        {
            "start": 374.26,
            "end": 375.7,
            "text": "好，今天就到这里。"
        },
        {
            "start": 375.7,
            "end": 377.26,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 12.932,
        "index": 0
    },
    {
        "start": 12.932,
        "end": 68.379,
        "index": 1
    },
    {
        "start": 68.379,
        "end": 122.694,
        "index": 2
    },
    {
        "start": 122.694,
        "end": 177.009,
        "index": 3
    },
    {
        "start": 177.009,
        "end": 228.738,
        "index": 4
    },
    {
        "start": 228.738,
        "end": 284.185,
        "index": 5
    },
    {
        "start": 284.185,
        "end": 345.451,
        "index": 6
    },
    {
        "start": 345.451,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "先建立估值判断框架，理解一家公司的价值到底从哪里来。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-06.html?entry={entry}", secondaryHref: "./lesson-finance-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-05", coachSource: "./ai-coach.html?source=lesson-finance-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于公司估值：一家公司到底值多少钱的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "公司估值：一家公司到底值多少钱", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
