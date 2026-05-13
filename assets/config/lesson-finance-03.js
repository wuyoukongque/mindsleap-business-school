(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第3课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第3课：现金流管理：利润不等于现金",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep03-cash-flow/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：现金流管理：利润不等于现金", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-04.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 2,
                "title": "关键财务指标：管理者必须盯住的几个数字",
                "body": "抓住几个最关键的数字，快速判断一家公司的健康度。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "现金流管理：利润不等于现金",
                "body": "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 财务分析：让 AI 成为你的 CFO 助手",
                "body": "把 AI 用进财务分析，让数字阅读更快、更系统。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天聊一个血淋淋的话题：为什么利润表上赚钱的公司，也会突然死掉"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "再下个月又是如此"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "可能是库存积压了大量资金"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "经营活动现金流可能还是负的，投资也在花钱，完全靠筹资（融资）来维持"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 3/13", "建议下一节：AI 财务分析：让 AI 成为你的 CFO 助手", '也可以先整理这一节'], nextHref: "./lesson-finance-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-03", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson3", audioSource: './assets/audio/finance-ep03-cash-flow.mp3?v=20260411-finance-ep03-r1', vttSrc: './assets/subtitles/finance-ep03-cash-flow.vtt?v=20260411-finance-ep03-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep03-cash-flow/slide_01.png",
            "label": "现金流管理：利润不等于现金",
            "caption": "这一节会帮助你系统理解：现金流管理：利润不等于现金"
        },
        {
            "file": "finance-ep03-cash-flow/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep03-cash-flow/slide_03.png",
            "label": "核心框架",
            "caption": "再下个月又是如此。 到第三个月的时候，你已经垫了六百万出去了，而第一笔三百万可能刚刚开始回来。"
        },
        {
            "file": "finance-ep03-cash-flow/slide_04.png",
            "label": "关键指标",
            "caption": "可能是库存积压了大量资金。 可能是预付了太多供应商的钱。"
        },
        {
            "file": "finance-ep03-cash-flow/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "经营活动现金流可能还是负的，投资也在花钱，完全靠筹资（融资）来维持。 这个阶段是正常的，但你要有一个清晰的路径：什么时候经营活动现金流能转正？"
        },
        {
            "file": "finance-ep03-cash-flow/slide_06.png",
            "label": "回到你的企业",
            "caption": "未来三个月甚至六个月，每个月预计有多少钱进来、多少钱出去、账上还剩多少。 这样你能提前发现问题，提前应对。"
        },
        {
            "file": "finance-ep03-cash-flow/slide_07.png",
            "label": "风险与提醒",
            "caption": "因为它是真正属于股东的钱。 净利润里面有很多\"虚\"的成分。"
        },
        {
            "file": "finance-ep03-cash-flow/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.24,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.24,
            "end": 3.46,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.46,
            "end": 5.54,
            "text": "今天聊一个血淋淋的话题："
        },
        {
            "start": 5.54,
            "end": 7.96,
            "text": "为什么利润表上赚钱的公司，"
        },
        {
            "start": 7.96,
            "end": 9.42,
            "text": "也会突然死掉？"
        },
        {
            "start": 9.42,
            "end": 11.88,
            "text": "答案就在现金流里面。"
        },
        {
            "start": 11.88,
            "end": 13.06,
            "text": "有一个统计数据："
        },
        {
            "start": 13.06,
            "end": 16.18,
            "text": "创业公司死亡的第一大原因不是产品不好，"
        },
        {
            "start": 16.18,
            "end": 18.96,
            "text": "不是市场不存在，而是现金流断裂。"
        },
        {
            "start": 18.96,
            "end": 21.3,
            "text": "就是字面意思——账上没钱了，"
        },
        {
            "start": 21.3,
            "end": 23.34,
            "text": "发不了工资了，付不起房租了。"
        },
        {
            "start": 23.34,
            "end": 26.24,
            "text": "但诡异的是，很多这样死掉的公司，"
        },
        {
            "start": 26.24,
            "end": 28.84,
            "text": "利润表上其实是盈利的。"
        },
        {
            "start": 28.84,
            "end": 32.52,
            "text": "这就是今天要讲的核心问题：利润和现金不是一回事。"
        },
        {
            "start": 32.52,
            "end": 35.02,
            "text": "我先给大家讲一个典型的场景。"
        },
        {
            "start": 35.02,
            "end": 38.48,
            "text": "假设你开了一家公司，这个月签了三百万的合同。"
        },
        {
            "start": 38.48,
            "end": 41.16,
            "text": "合同约定客户九十天后付款。"
        },
        {
            "start": 41.16,
            "end": 45.58,
            "text": "你为了履行合同，先垫了两百万的原材料和人工成本。"
        },
        {
            "start": 45.58,
            "end": 47.3,
            "text": "利润表上怎么记？"
        },
        {
            "start": 47.3,
            "end": 50.5,
            "text": "收入三百万，成本两百万，利润一百万。"
        },
        {
            "start": 50.5,
            "end": 51.64,
            "text": "看起来很棒。"
        },
        {
            "start": 51.64,
            "end": 53.02,
            "text": "但现金流呢？"
        },
        {
            "start": 53.02,
            "end": 56.54,
            "text": "这个月你花了两百万出去，但一分钱没收到。"
        },
        {
            "start": 56.54,
            "end": 58.48,
            "text": "现金净流出两百万。"
        },
        {
            "start": 58.48,
            "end": 62.58,
            "text": "如果你下个月又签了三百万的合同，又要先垫两百万。"
        },
        {
            "start": 62.58,
            "end": 64.32,
            "text": "再下个月又是如此。"
        },
        {
            "start": 64.32,
            "end": 65.98,
            "text": "到第三个月的时候，"
        },
        {
            "start": 65.98,
            "end": 68.26,
            "text": "你已经垫了六百万出去了，"
        },
        {
            "start": 68.26,
            "end": 71.52,
            "text": "而第一笔三百万可能刚刚开始回来。"
        },
        {
            "start": 71.52,
            "end": 74.04,
            "text": "如果你账上的钱不够垫这六百万呢？"
        },
        {
            "start": 74.04,
            "end": 75.28,
            "text": "你就死了。"
        },
        {
            "start": 75.28,
            "end": 78.08,
            "text": "利润表上累计利润三百万，但你死了。"
        },
        {
            "start": 78.08,
            "end": 80.36,
            "text": "这就是为什么说现金流为王。"
        },
        {
            "start": 80.36,
            "end": 82.56,
            "text": "利润是纸面上的数字，"
        },
        {
            "start": 82.56,
            "end": 85.34,
            "text": "现金才是实实在在能用来发工资、"
        },
        {
            "start": 85.34,
            "end": 87.16,
            "text": "付房租、买原料的东西。"
        },
        {
            "start": 87.16,
            "end": 90.34,
            "text": "深入理解一下现金流量表的三个部分。"
        },
        {
            "start": 90.34,
            "end": 92.54,
            "text": "第一，经营活动现金流。"
        },
        {
            "start": 92.54,
            "end": 93.74,
            "text": "Operating Cash Flow。"
        },
        {
            "start": 93.74,
            "end": 95.58,
            "text": "这是最核心的。"
        },
        {
            "start": 95.58,
            "end": 100.2,
            "text": "它反映的是你的核心业务到底在产生现金还是在消耗现金。"
        },
        {
            "start": 100.2,
            "end": 101.76,
            "text": "一个健康的公司，"
        },
        {
            "start": 101.76,
            "end": 103.84,
            "text": "经营活动现金流应该是正的，"
        },
        {
            "start": 103.84,
            "end": 105.3,
            "text": "而且最好大于净利润。"
        },
        {
            "start": 105.7,
            "end": 106.06,
            "text": "为什么？"
        },
        {
            "start": 106.06,
            "end": 110.64,
            "text": "因为净利润里面有些项目不需要花现金，比如折旧。"
        },
        {
            "start": 110.64,
            "end": 114.54,
            "text": "所以正常情况下经营活动现金流应该比净利润高。"
        },
        {
            "start": 114.54,
            "end": 116.66,
            "text": "如果你的净利润是正的，"
        },
        {
            "start": 116.66,
            "end": 120.26,
            "text": "但经营活动现金流是负的，红灯亮了。"
        },
        {
            "start": 120.26,
            "end": 122.46,
            "text": "这意味着你的利润质量有问题。"
        },
        {
            "start": 122.46,
            "end": 126.28,
            "text": "可能是应收账款太多，客户的钱收不回来。"
        },
        {
            "start": 126.28,
            "end": 128.54,
            "text": "可能是库存积压了大量资金。"
        },
        {
            "start": 128.54,
            "end": 131.22,
            "text": "可能是预付了太多供应商的钱。"
        },
        {
            "start": 131.22,
            "end": 133.66,
            "text": "第二，投资活动现金流。"
        },
        {
            "start": 133.66,
            "end": 135.36,
            "text": "Investing Cash Flow。"
        },
        {
            "start": 135.36,
            "end": 139.22,
            "text": "买设备、买公司、做长期投资的钱。"
        },
        {
            "start": 139.22,
            "end": 142.72,
            "text": "这个通常是负的，因为你在花钱投资未来。"
        },
        {
            "start": 142.72,
            "end": 145.6,
            "text": "投资活动现金流为负不一定是坏事。"
        },
        {
            "start": 145.6,
            "end": 147.54,
            "text": "如果你在快速扩张期，"
        },
        {
            "start": 147.54,
            "end": 149.62,
            "text": "大量投入研发和基础设施，"
        },
        {
            "start": 149.62,
            "end": 152.18,
            "text": "投资现金流为负是正常的。"
        },
        {
            "start": 152.18,
            "end": 154.1,
            "text": "关键是你的投资有没有回报。"
        },
        {
            "start": 154.1,
            "end": 158.18,
            "text": "但如果你的投资活动现金流常年大量为负，"
        },
        {
            "start": 158.18,
            "end": 160.6,
            "text": "而经营活动现金流又不够覆盖，"
        },
        {
            "start": 160.6,
            "end": 163.16,
            "text": "你就需要不断借钱或者融资来维持。"
        },
        {
            "start": 163.16,
            "end": 164.68,
            "text": "这是不可持续的。"
        },
        {
            "start": 164.68,
            "end": 167.16,
            "text": "第三，筹资活动现金流。"
        },
        {
            "start": 167.16,
            "end": 168.58,
            "text": "Financing Cash Flow。"
        },
        {
            "start": 168.58,
            "end": 171.98,
            "text": "融资进来的钱、借款、还款、分红。"
        },
        {
            "start": 171.98,
            "end": 173.56,
            "text": "一个成熟的公司，"
        },
        {
            "start": 173.56,
            "end": 176.96,
            "text": "经营活动现金流应该足够覆盖投资需求，"
        },
        {
            "start": 176.96,
            "end": 179.52,
            "text": "甚至还有富余来还债和分红。"
        },
        {
            "start": 179.52,
            "end": 183.5,
            "text": "这意味着公司是自给自足的，不需要依赖外部资金。"
        },
        {
            "start": 183.5,
            "end": 185.35999999999999,
            "text": "但一个早期创业公司呢？"
        },
        {
            "start": 185.35999999999999,
            "end": 187.96,
            "text": "经营活动现金流可能还是负的，"
        },
        {
            "start": 187.96,
            "end": 189.08,
            "text": "投资也在花钱，"
        },
        {
            "start": 189.08,
            "end": 191.76,
            "text": "完全靠筹资（融资）来维持。"
        },
        {
            "start": 191.76,
            "end": 193.56,
            "text": "这个阶段是正常的，"
        },
        {
            "start": 193.56,
            "end": 195.48,
            "text": "但你要有一个清晰的路径："
        },
        {
            "start": 195.48,
            "end": 198.38,
            "text": "什么时候经营活动现金流能转正？"
        },
        {
            "start": 198.38,
            "end": 201.54,
            "text": "好，讲几个实用的现金流管理技巧。"
        },
        {
            "start": 201.54,
            "end": 205.62,
            "text": "第一，缩短收款周期，延长付款周期。"
        },
        {
            "start": 205.62,
            "end": 209.3,
            "text": "这是最基本也最有效的现金流管理手段。"
        },
        {
            "start": 209.3,
            "end": 214.14,
            "text": "如果你能把客户的付款周期从90天缩短到60天，"
        },
        {
            "start": 214.14,
            "end": 215.78,
            "text": "你的现金流立刻改善。"
        },
        {
            "start": 215.78,
            "end": 219.06,
            "text": "如果你能跟供应商谈到更长的付款周期，"
        },
        {
            "start": 219.06,
            "end": 221.82,
            "text": "你用的是供应商的钱来周转你的生意。"
        },
        {
            "start": 221.82,
            "end": 223.78,
            "text": "亚马逊就是这方面的高手。"
        },
        {
            "start": 223.78,
            "end": 227.48,
            "text": "它收客户的钱很快，但付供应商的钱很慢。"
        },
        {
            "start": 227.48,
            "end": 230.5,
            "text": "中间的时间差就是它免费使用的现金。"
        },
        {
            "start": 230.5,
            "end": 233.76,
            "text": "这笔免费的现金可以用来投资、扩张。"
        },
        {
            "start": 234.3,
            "end": 236.66,
            "text": "第二，建立现金流预测模型。"
        },
        {
            "start": 237.14000000000001,
            "end": 239.28,
            "text": "很多公司死在现金流上，"
        },
        {
            "start": 239.28,
            "end": 241.44,
            "text": "不是因为他们不知道现金流重要，"
        },
        {
            "start": 241.44,
            "end": 243.08,
            "text": "而是因为他们没有预测。"
        },
        {
            "start": 243.08,
            "end": 246.0,
            "text": "等到发现现金不够了，已经来不及了。"
        },
        {
            "start": 246.52,
            "end": 249.2,
            "text": "你应该做一个滚动的现金流预测。"
        },
        {
            "start": 249.2,
            "end": 251.32,
            "text": "未来三个月甚至六个月，"
        },
        {
            "start": 251.32,
            "end": 254.82,
            "text": "每个月预计有多少钱进来、多少钱出去、"
        },
        {
            "start": 254.82,
            "end": 256.4,
            "text": "账上还剩多少。"
        },
        {
            "start": 256.4,
            "end": 259.4,
            "text": "这样你能提前发现问题，提前应对。"
        },
        {
            "start": 259.4,
            "end": 261.74,
            "text": "第三，控制烧钱速率。"
        },
        {
            "start": 261.74,
            "end": 263.58,
            "text": "这个对创业公司特别重要。"
        },
        {
            "start": 263.58,
            "end": 264.9,
            "text": "你的Burn Rate是多少？"
        },
        {
            "start": 264.9,
            "end": 267.44,
            "text": "就是你每个月净亏损多少现金。"
        },
        {
            "start": 267.44,
            "end": 269.08,
            "text": "你的Runway是多少？"
        },
        {
            "start": 269.08,
            "end": 273.4,
            "text": "就是按照当前的烧钱速度，你账上的钱还能撑多少个月。"
        },
        {
            "start": 273.4,
            "end": 277.52,
            "text": "一个基本原则：你的Runway永远不能低于六个月。"
        },
        {
            "start": 277.52,
            "end": 278.78,
            "text": "如果低于六个月，"
        },
        {
            "start": 278.78,
            "end": 280.68,
            "text": "你就应该停下一切其他事情，"
        },
        {
            "start": 280.68,
            "end": 282.96,
            "text": "全力去融资或者降低成本。"
        },
        {
            "start": 282.96,
            "end": 286.38,
            "text": "因为融资本身也需要三到六个月的时间。"
        },
        {
            "start": 286.38,
            "end": 290.32,
            "text": "等你只剩两三个月Runway的时候再去融，很可能来不及了。"
        },
        {
            "start": 290.32,
            "end": 293.48,
            "text": "最后讲一个很有意思的概念：自由现金流。"
        },
        {
            "start": 293.48,
            "end": 296.08,
            "text": "Free Cash Flow，简称FCF。"
        },
        {
            "start": 296.08,
            "end": 300.6,
            "text": "自由现金流 = 经营活动现金流 - 资本开支。"
        },
        {
            "start": 300.6,
            "end": 301.94,
            "text": "它反映的是："
        },
        {
            "start": 301.94,
            "end": 305.9,
            "text": "你的业务在维持正常运营和必要投资之后，"
        },
        {
            "start": 305.9,
            "end": 308.22,
            "text": "还能自由支配多少现金。"
        },
        {
            "start": 308.22,
            "end": 310.42,
            "text": "为什么自由现金流重要？"
        },
        {
            "start": 310.42,
            "end": 312.74,
            "text": "因为它是真正属于股东的钱。"
        },
        {
            "start": 312.74,
            "end": 315.16,
            "text": "净利润里面有很多\"虚\"的成分。"
        },
        {
            "start": 315.16,
            "end": 318.08,
            "text": "但自由现金流是实实在在的，"
        },
        {
            "start": 318.08,
            "end": 321.92,
            "text": "可以用来分红、回购股票、做新投资、还债。"
        },
        {
            "start": 321.92,
            "end": 324.52,
            "text": "巴菲特评估一家公司的价值，"
        },
        {
            "start": 324.52,
            "end": 328.24,
            "text": "核心就是看它未来能产生多少自由现金流。"
        },
        {
            "start": 328.24,
            "end": 332.68,
            "text": "这就是DCF估值法的基础，我们后面会讲到。"
        },
        {
            "start": 332.68,
            "end": 334.32,
            "text": "好，今天的思考题。"
        },
        {
            "start": 334.32,
            "end": 337.92,
            "text": "第一，你公司的经营活动现金流是正还是负？"
        },
        {
            "start": 337.92,
            "end": 339.98,
            "text": "它比净利润高还是低？"
        },
        {
            "start": 339.98,
            "end": 343.26,
            "text": "第二，你的应收账款周转天数是多少？"
        },
        {
            "start": 343.26,
            "end": 344.76,
            "text": "有没有办法缩短？"
        },
        {
            "start": 344.76,
            "end": 349.03999999999996,
            "text": "第三，如果你是创业公司，算一下你的Burn Rate和Runway。"
        },
        {
            "start": 349.04,
            "end": 350.82,
            "text": "你还能撑多少个月？"
        },
        {
            "start": 350.82,
            "end": 352.04,
            "text": "总结一下。"
        },
        {
            "start": 352.04,
            "end": 354.12,
            "text": "第一，利润不等于现金流。"
        },
        {
            "start": 354.12,
            "end": 358.18,
            "text": "赚钱的公司也可能因为现金流断裂而死亡。"
        },
        {
            "start": 358.18,
            "end": 361.36,
            "text": "第二，经营活动现金流是最核心的指标。"
        },
        {
            "start": 361.36,
            "end": 366.5,
            "text": "如果净利润为正但经营现金流为负，利润质量有问题。"
        },
        {
            "start": 366.5,
            "end": 369.32,
            "text": "第三，三个现金流管理技巧："
        },
        {
            "start": 369.32,
            "end": 372.56,
            "text": "缩短收款延长付款、建立预测模型、"
        },
        {
            "start": 373.06,
            "end": 374.36,
            "text": "控制烧钱速率。"
        },
        {
            "start": 374.36,
            "end": 377.82,
            "text": "第四，自由现金流是真正属于股东的钱。"
        },
        {
            "start": 377.82,
            "end": 379.68,
            "text": "它是企业估值的基础。"
        },
        {
            "start": 379.68,
            "end": 383.18,
            "text": "下一期非常实操：怎么用AI做财务分析。"
        },
        {
            "start": 383.18,
            "end": 386.37999999999994,
            "text": "从手动翻报表到对话式洞察，"
        },
        {
            "start": 386.38,
            "end": 389.54,
            "text": "AI让财务分析变得人人都能做。"
        },
        {
            "start": 389.54,
            "end": 390.76,
            "text": "好，今天就到这里。"
        },
        {
            "start": 390.76,
            "end": 392.36,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 12.334,
        "index": 0
    },
    {
        "start": 12.334,
        "end": 67.529,
        "index": 1
    },
    {
        "start": 67.529,
        "end": 122.261,
        "index": 2
    },
    {
        "start": 122.261,
        "end": 173.602,
        "index": 3
    },
    {
        "start": 173.602,
        "end": 225.405,
        "index": 4
    },
    {
        "start": 225.405,
        "end": 279.983,
        "index": 5
    },
    {
        "start": 279.983,
        "end": 346.124,
        "index": 6
    },
    {
        "start": 346.124,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-04.html?entry={entry}", secondaryHref: "./lesson-finance-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-03", coachSource: "./ai-coach.html?source=lesson-finance-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于现金流管理：利润不等于现金的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "现金流管理：利润不等于现金", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
