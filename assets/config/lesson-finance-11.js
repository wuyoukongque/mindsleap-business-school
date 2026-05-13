(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第11课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第11课：定价策略：价格不是拍脑袋决定的",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep11-pricing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：定价策略：价格不是拍脑袋决定的", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-12.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 10,
                "title": "AI 时代的财务风险：你需要警惕什么",
                "body": "识别 AI 时代新的财务风险源，并建立更前置的预警机制。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "定价策略：价格不是拍脑袋决定的",
                "body": "把定价放回价值、成本、竞争与客户心理里重新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：NVIDIA 的财务与资本市场逻辑",
                "body": "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-12.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把定价放回价值、成本、竞争与客户心理里重新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天来聊一个看似简单、实际上极其复杂的话题：定价"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "也许市场上竞品只卖 120 块，你定 143 块根本卖不动"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "接下来聊 AI 时代的新玩法：动态定价"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "你在网上买东西，很多价格其实是实时变化的"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 11/13", "建议下一节：案例：NVIDIA 的财务与资本市场逻辑", '也可以先整理这一节'], nextHref: "./lesson-finance-12.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-11", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson11", audioSource: './assets/audio/finance-ep11-pricing.mp3?v=20260411-finance-ep11-r1', vttSrc: './assets/subtitles/finance-ep11-pricing.vtt?v=20260411-finance-ep11-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep11-pricing/slide_01.png",
            "label": "定价策略：价格不是拍脑袋决定的",
            "caption": "这一节会帮助你系统理解：定价策略：价格不是拍脑袋决定的"
        },
        {
            "file": "finance-ep11-pricing/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep11-pricing/slide_03.png",
            "label": "核心框架",
            "caption": "也许市场上竞品只卖 120 块，你定 143 块根本卖不动。 第二种：竞争定价。"
        },
        {
            "file": "finance-ep11-pricing/slide_04.png",
            "label": "关键指标",
            "caption": "接下来聊 AI 时代的新玩法：动态定价。 动态定价是什么意思？"
        },
        {
            "file": "finance-ep11-pricing/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "你在网上买东西，很多价格其实是实时变化的。 平台会根据你的浏览历史、购物车行为、竞品价格等因素来动态调整。"
        },
        {
            "file": "finance-ep11-pricing/slide_06.png",
            "label": "回到你的企业",
            "caption": "目前全球对个性化定价的监管在逐步收紧。 欧盟已经有相关的法规在讨论。"
        },
        {
            "file": "finance-ep11-pricing/slide_07.png",
            "label": "风险与提醒",
            "caption": "AI 可以帮你分析历史数据，找到最优的价格点。 第二，竞品价格监控。"
        },
        {
            "file": "finance-ep11-pricing/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.34,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.54,
            "end": 3.46,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.46,
            "end": 8.6,
            "text": "今天来聊一个看似简单、实际上极其复杂的话题：定价。"
        },
        {
            "start": 8.84,
            "end": 11.68,
            "text": "你有没有想过，为什么同样一杯咖啡，"
        },
        {
            "start": 11.68,
            "end": 15.98,
            "text": "在星巴克卖 35 块，在便利店卖 12 块？"
        },
        {
            "start": 15.98,
            "end": 18.1,
            "text": "为什么同一款航班座位，"
        },
        {
            "start": 18.1,
            "end": 21.34,
            "text": "提前两个月买和临时买价格差三倍？"
        },
        {
            "start": 21.759999999999994,
            "end": 25.32,
            "text": "为什么 Netflix 在不同国家的定价完全不一样？"
        },
        {
            "start": 25.32,
            "end": 28.52,
            "text": "定价不是简单地在成本上加一个利润率。"
        },
        {
            "start": 28.52,
            "end": 31.14,
            "text": "定价是一门艺术，也是一门科学。"
        },
        {
            "start": 31.14,
            "end": 34.94,
            "text": "而 AI 的出现，正在把这门艺术推向一个全新的水平。"
        },
        {
            "start": 34.94,
            "end": 37.86,
            "text": "先来讲三种经典的定价方法。"
        },
        {
            "start": 37.86,
            "end": 39.74,
            "text": "第一种：成本加成定价。"
        },
        {
            "start": 39.74,
            "end": 42.02,
            "text": "Cost-plus pricing。"
        },
        {
            "start": 42.02,
            "end": 44.4,
            "text": "这是最简单直接的定价方式。"
        },
        {
            "start": 44.4,
            "end": 46.56,
            "text": "算出你的成本是多少，"
        },
        {
            "start": 46.56,
            "end": 48.5,
            "text": "然后加上一个目标利润率，"
        },
        {
            "start": 48.6,
            "end": 49.58,
            "text": "就是你的售价。"
        },
        {
            "start": 49.58,
            "end": 52.88,
            "text": "比如，你生产一个产品成本 100 块，"
        },
        {
            "start": 52.88,
            "end": 55.72,
            "text": "你想要 30% 的毛利率，"
        },
        {
            "start": 55.72,
            "end": 58.22,
            "text": "那你的售价就是 143 块。"
        },
        {
            "start": 58.22,
            "end": 60.1,
            "text": "优点是简单、好算。"
        },
        {
            "start": 60.1,
            "end": 63.12,
            "text": "缺点是完全没有考虑市场需求和竞争。"
        },
        {
            "start": 63.12,
            "end": 68.14,
            "text": "也许客户愿意付 200 块，你只收了 143，少赚了。"
        },
        {
            "start": 68.14,
            "end": 72.78,
            "text": "也许市场上竞品只卖 120 块，你定 143 块根本卖不动。"
        },
        {
            "start": 72.78,
            "end": 74.38,
            "text": "第二种：竞争定价。"
        },
        {
            "start": 74.38,
            "end": 76.0,
            "text": "Competitive pricing。"
        },
        {
            "start": 76.6,
            "end": 80.2,
            "text": "看看竞争对手卖多少，然后你在这个基础上定价。"
        },
        {
            "start": 80.2,
            "end": 83.66,
            "text": "可以定高一点（如果你的产品有差异化优势），"
        },
        {
            "start": 83.66,
            "end": 87.46,
            "text": "也可以定低一点（如果你想走薄利多销路线）。"
        },
        {
            "start": 87.46,
            "end": 89.48,
            "text": "优点是简单务实。"
        },
        {
            "start": 89.48,
            "end": 94.7,
            "text": "缺点是你被竞争对手的定价锚定了，失去了定价的主动权。"
        },
        {
            "start": 94.7,
            "end": 96.5,
            "text": "第三种：价值定价。"
        },
        {
            "start": 96.5,
            "end": 97.88,
            "text": "Value-based pricing。"
        },
        {
            "start": 97.88,
            "end": 99.92,
            "text": "这是最高级的定价方法。"
        },
        {
            "start": 99.92,
            "end": 101.84,
            "text": "不是看你的成本是多少，"
        },
        {
            "start": 101.84,
            "end": 104.0,
            "text": "也不是看竞争对手卖多少，"
        },
        {
            "start": 104.0,
            "end": 107.88,
            "text": "而是看客户从你的产品中获得了多少价值，"
        },
        {
            "start": 107.88,
            "end": 110.18,
            "text": "然后基于这个价值来定价。"
        },
        {
            "start": 110.18,
            "end": 111.42,
            "text": "举个例子。"
        },
        {
            "start": 111.42,
            "end": 115.78,
            "text": "你的 AI 工具能帮客户每个月省 10 万块的人工成本。"
        },
        {
            "start": 115.78,
            "end": 118.08,
            "text": "那你定价一个月 3 万块，"
        },
        {
            "start": 118.08,
            "end": 120.94,
            "text": "客户觉得非常值——他花 3 万省了 10 万，"
        },
        {
            "start": 120.94,
            "end": 121.78,
            "text": "赚了 7 万。"
        },
        {
            "start": 121.78,
            "end": 123.92000000000002,
            "text": "你也赚了 3 万，皆大欢喜。"
        },
        {
            "start": 123.92000000000002,
            "end": 127.36,
            "text": "价值定价的关键是你要能清楚地量化和展"
        },
        {
            "start": 127.36,
            "end": 129.78,
            "text": "示你的产品给客户带来的价值。"
        },
        {
            "start": 130.2,
            "end": 132.22,
            "text": "如果你说不清楚价值在哪里，"
        },
        {
            "start": 132.22,
            "end": 136.3,
            "text": "客户就会把你拉回到成本定价或竞争定价的思路里。"
        },
        {
            "start": 136.3,
            "end": 138.02,
            "text": "好，经典方法讲完了。"
        },
        {
            "start": 138.02,
            "end": 141.1,
            "text": "接下来聊 AI 时代的新玩法：动态定价。"
        },
        {
            "start": 141.1,
            "end": 143.02,
            "text": "动态定价是什么意思？"
        },
        {
            "start": 143.02,
            "end": 144.9,
            "text": "就是价格不是固定的，"
        },
        {
            "start": 144.9,
            "end": 147.84,
            "text": "而是根据市场供需、用户特征、"
        },
        {
            "start": 147.84,
            "end": 150.24,
            "text": "购买时机等因素实时调整。"
        },
        {
            "start": 150.24,
            "end": 151.64,
            "text": "这不是新概念。"
        },
        {
            "start": 151.64,
            "end": 155.1,
            "text": "航空公司几十年前就开始做动态定价了。"
        },
        {
            "start": 155.1,
            "end": 157.92,
            "text": "同一个航班，早买便宜，晚买贵；"
        },
        {
            "start": 157.92,
            "end": 161.02,
            "text": "淡季便宜，旺季贵；商务舱贵，"
        },
        {
            "start": 161.02,
            "end": 162.4,
            "text": "经济舱便宜。"
        },
        {
            "start": 162.4,
            "end": 165.34,
            "text": "背后是一套复杂的收益管理系统。"
        },
        {
            "start": 165.34,
            "end": 168.12,
            "text": "但过去的动态定价主要靠规则。"
        },
        {
            "start": 168.12,
            "end": 169.96,
            "text": "人为设定一套规则，"
        },
        {
            "start": 169.96,
            "end": 173.0,
            "text": "比如\"距离起飞 30 天以上打 7 折，"
        },
        {
            "start": 173.0,
            "end": 174.98,
            "text": "7 天以内不打折\"。"
        },
        {
            "start": 174.98,
            "end": 178.48,
            "text": "AI 把动态定价升级到了一个完全不同的水平。"
        },
        {
            "start": 178.48,
            "end": 180.86,
            "text": "AI 动态定价可以做到什么？"
        },
        {
            "start": 180.86,
            "end": 182.54,
            "text": "第一，实时响应。"
        },
        {
            "start": 182.54,
            "end": 187.46,
            "text": "市场供需一发生变化，AI 可以在秒级别调整价格。"
        },
        {
            "start": 187.46,
            "end": 189.32,
            "text": "第二，多因素综合。"
        },
        {
            "start": 189.32,
            "end": 190.76,
            "text": "不只看一两个因素，"
        },
        {
            "start": 190.76,
            "end": 194.42,
            "text": "而是同时考虑几十个甚至上百个变量——时间、"
        },
        {
            "start": 194.42,
            "end": 197.1,
            "text": "地点、天气、竞品价格、库存水平、"
        },
        {
            "start": 197.1,
            "end": 199.14,
            "text": "用户画像、历史购买行为，"
        },
        {
            "start": 199.14,
            "end": 200.72,
            "text": "全部纳入模型。"
        },
        {
            "start": 200.72,
            "end": 202.82,
            "text": "第三，个性化定价。"
        },
        {
            "start": 202.82,
            "end": 205.66,
            "text": "不同的用户可以看到不同的价格。"
        },
        {
            "start": 205.66,
            "end": 209.5,
            "text": "这个我待会儿会详细讲，因为它涉及到一些伦理问题。"
        },
        {
            "start": 209.5,
            "end": 212.92,
            "text": "AI 动态定价在几个行业已经非常成熟了。"
        },
        {
            "start": 212.92,
            "end": 214.0,
            "text": "电商平台。"
        },
        {
            "start": 214.0,
            "end": 218.2,
            "text": "你在网上买东西，很多价格其实是实时变化的。"
        },
        {
            "start": 218.2,
            "end": 221.56,
            "text": "平台会根据你的浏览历史、购物车行为、"
        },
        {
            "start": 221.56,
            "end": 224.28,
            "text": "竞品价格等因素来动态调整。"
        },
        {
            "start": 224.28,
            "end": 225.52,
            "text": "网约车。"
        },
        {
            "start": 225.52,
            "end": 229.9,
            "text": "Uber 和滴滴的\"潮汐定价\"就是典型的 AI 动态定价。"
        },
        {
            "start": 229.9,
            "end": 232.62,
            "text": "下雨天打车的人多了，价格就涨。"
        },
        {
            "start": 232.62,
            "end": 235.12,
            "text": "高峰期供不应求，价格就涨。"
        },
        {
            "start": 235.12,
            "end": 235.86,
            "text": "酒店。"
        },
        {
            "start": 235.86,
            "end": 240.72,
            "text": "你在不同时间搜索同一家酒店，看到的价格可能不一样。"
        },
        {
            "start": 240.72,
            "end": 243.64,
            "text": "酒店的收益管理系统会根据预订率、"
        },
        {
            "start": 243.64,
            "end": 247.56,
            "text": "到店日期、当地活动等因素动态调价。"
        },
        {
            "start": 247.56,
            "end": 248.9,
            "text": "SaaS 软件。"
        },
        {
            "start": 248.9,
            "end": 252.4,
            "text": "越来越多的 SaaS 公司开始做使用量定价。"
        },
        {
            "start": 252.4,
            "end": 254.18,
            "text": "用多少付多少。"
        },
        {
            "start": 254.18,
            "end": 258.44,
            "text": "背后也是 AI 在做用户使用模式分析和计费优化。"
        },
        {
            "start": 258.44,
            "end": 262.18,
            "text": "接下来要聊一个敏感但重要的话题："
        },
        {
            "start": 262.18,
            "end": 264.38666666666666,
            "text": "个性化定价的伦理边界。"
        },
        {
            "start": 264.38666666666666,
            "end": 266.04,
            "text": "个性化定价是什么？"
        },
        {
            "start": 266.04,
            "end": 269.58,
            "text": "就是基于你的个人特征给你一个不同的价格。"
        },
        {
            "start": 269.58,
            "end": 272.54,
            "text": "最极端的例子就是所谓的\"大数据杀熟\"。"
        },
        {
            "start": 272.54,
            "end": 275.64,
            "text": "平台发现你是老客户了，不太容易流失，"
        },
        {
            "start": 275.64,
            "end": 277.4,
            "text": "就给你的价格定高一点。"
        },
        {
            "start": 277.4,
            "end": 281.58,
            "text": "新用户反而能拿到更低的价格，因为需要用优惠来获客。"
        },
        {
            "start": 281.58,
            "end": 284.98,
            "text": "这个事情从经济学上来说是有道理的。"
        },
        {
            "start": 284.98,
            "end": 288.72,
            "text": "但从用户体验和公平性来说，是有很大问题的。"
        },
        {
            "start": 288.72,
            "end": 292.54,
            "text": "目前全球对个性化定价的监管在逐步收紧。"
        },
        {
            "start": 292.54,
            "end": 294.96,
            "text": "欧盟已经有相关的法规在讨论。"
        },
        {
            "start": 294.96,
            "end": 298.3,
            "text": "中国也明确规定了不允许大数据杀熟。"
        },
        {
            "start": 298.3,
            "end": 298.94,
            "text": "所以，"
        },
        {
            "start": 298.94,
            "end": 302.54,
            "text": "如果你的公司在考虑用 AI 做个性化定价，"
        },
        {
            "start": 302.54,
            "end": 304.54,
            "text": "你必须注意几条红线："
        },
        {
            "start": 304.54,
            "end": 306.06,
            "text": "第一，透明度。"
        },
        {
            "start": 306.06,
            "end": 309.64,
            "text": "你的定价逻辑对用户来说是不是可理解的？"
        },
        {
            "start": 309.64,
            "end": 313.46,
            "text": "如果用户发现自己被区别对待了，你能不能解释清楚？"
        },
        {
            "start": 313.46,
            "end": 315.06,
            "text": "第二，公平性。"
        },
        {
            "start": 315.06,
            "end": 319.08,
            "text": "价格差异是基于合理的因素（比如购买时间、"
        },
        {
            "start": 319.08,
            "end": 323.6,
            "text": "购买量）还是基于歧视性的因素（比如用户的收入水平、"
        },
        {
            "start": 323.6,
            "end": 324.7,
            "text": "手机品牌）？"
        },
        {
            "start": 324.7,
            "end": 326.6,
            "text": "第三，合规性。"
        },
        {
            "start": 326.6,
            "end": 329.92,
            "text": "你的定价策略是否符合当地的法律法规？"
        },
        {
            "start": 329.92,
            "end": 332.6,
            "text": "我个人的建议是，动态定价可以做，"
        },
        {
            "start": 332.6,
            "end": 334.62,
            "text": "但要做得让用户能接受。"
        },
        {
            "start": 334.62,
            "end": 338.59999999999997,
            "text": "涨价要有合理的理由，比如高峰期供不应求。"
        },
        {
            "start": 338.6,
            "end": 342.36,
            "text": "优惠要有明确的条件，比如提前预订、大批量采购。"
        },
        {
            "start": 342.36,
            "end": 346.84,
            "text": "但不要对同一个场景下的不同用户搞隐性的价格歧视。"
        },
        {
            "start": 346.84,
            "end": 350.04,
            "text": "最后讲一下 AI 对定价策略的辅助作用。"
        },
        {
            "start": 350.04,
            "end": 354.42,
            "text": "即使你不做动态定价，AI 也能帮你做更好的定价决策。"
        },
        {
            "start": 354.42,
            "end": 356.34,
            "text": "第一，价格弹性分析。"
        },
        {
            "start": 356.34,
            "end": 359.2,
            "text": "你涨价 10% 会损失多少客户？"
        },
        {
            "start": 359.2,
            "end": 361.88,
            "text": "降价 10% 能增加多少销量？"
        },
        {
            "start": 361.88,
            "end": 365.82,
            "text": "AI 可以帮你分析历史数据，找到最优的价格点。"
        },
        {
            "start": 365.82,
            "end": 367.7,
            "text": "第二，竞品价格监控。"
        },
        {
            "start": 367.7,
            "end": 373.26,
            "text": "AI 可以实时爬取竞品的价格变化，让你随时知道市场行情。"
        },
        {
            "start": 373.26,
            "end": 374.96,
            "text": "第三，定价实验。"
        },
        {
            "start": 374.96,
            "end": 378.65999999999997,
            "text": "你可以用 AI 来设计和分析定价的 A/B 测试。"
        },
        {
            "start": 378.65999999999997,
            "end": 381.52,
            "text": "在不同的用户群体中试不同的价格，"
        },
        {
            "start": 381.52,
            "end": 383.72,
            "text": "看哪个价格点的总收入最高。"
        },
        {
            "start": 383.72,
            "end": 385.14,
            "text": "好，总结一下。"
        },
        {
            "start": 385.14,
            "end": 389.74,
            "text": "定价的三种经典方法：成本加成、竞争定价、价值定价。"
        },
        {
            "start": 389.74,
            "end": 391.86,
            "text": "AI 动态定价是新趋势，"
        },
        {
            "start": 391.86,
            "end": 394.53000000000003,
            "text": "可以做到实时响应、多因素综合、"
        },
        {
            "start": 394.53000000000003,
            "end": 395.52,
            "text": "个性化定价。"
        },
        {
            "start": 395.52,
            "end": 398.44,
            "text": "但个性化定价有伦理红线，透明度、"
        },
        {
            "start": 398.44,
            "end": 400.4,
            "text": "公平性和合规性是底线。"
        },
        {
            "start": 400.4,
            "end": 402.8,
            "text": "下一期我们来看一个精彩的案例："
        },
        {
            "start": 402.8,
            "end": 406.08,
            "text": "从财报看 Nvidia 的 AI 淘金卖水模式。"
        },
        {
            "start": 406.08,
            "end": 408.12,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 408.12,
            "end": 411.82,
            "text": "1. 三种经典定价方法：成本加成、"
        },
        {
            "start": 411.82,
            "end": 414.2,
            "text": "竞争定价、价值定价（最推荐）"
        },
        {
            "start": 414.2,
            "end": 417.96,
            "text": "2. AI 动态定价的三大能力：实时响应、"
        },
        {
            "start": 417.96,
            "end": 420.08,
            "text": "多因素综合、个性化定价"
        },
        {
            "start": 420.08,
            "end": 425.54,
            "text": "3. 个性化定价的三条伦理红线：透明度、公平性、合规性"
        },
        {
            "start": 425.54,
            "end": 429.04,
            "text": "4. AI 辅助定价：价格弹性分析、"
        },
        {
            "start": 429.04,
            "end": 431.5,
            "text": "竞品监控、定价 A/B 测试"
        },
        {
            "start": 431.5,
            "end": 435.8,
            "text": "1. 你的产品或服务目前用的是哪种定价方法？"
        },
        {
            "start": 435.8,
            "end": 438.34,
            "text": "有没有转向价值定价的可能？"
        },
        {
            "start": 438.34,
            "end": 441.34,
            "text": "2. 你觉得\"大数据杀熟\"的边界在哪里？"
        },
        {
            "start": 441.34,
            "end": 443.8,
            "text": "什么样的价格差异是可以接受的？"
        },
        {
            "start": 443.8,
            "end": 448.34,
            "text": "3. 如果你引入 AI 动态定价，预计对收入会有多大的提升？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.734,
        "index": 0
    },
    {
        "start": 10.734,
        "end": 63.064,
        "index": 1
    },
    {
        "start": 63.064,
        "end": 119.15,
        "index": 2
    },
    {
        "start": 119.15,
        "end": 173.895,
        "index": 3
    },
    {
        "start": 173.895,
        "end": 227.835,
        "index": 4
    },
    {
        "start": 227.835,
        "end": 281.372,
        "index": 5
    },
    {
        "start": 281.372,
        "end": 347.924,
        "index": 6
    },
    {
        "start": 347.924,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-12.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把定价放回价值、成本、竞争与客户心理里重新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-12.html?entry={entry}", secondaryHref: "./lesson-finance-12.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-11", coachSource: "./ai-coach.html?source=lesson-finance-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于定价策略：价格不是拍脑袋决定的的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "定价策略：价格不是拍脑袋决定的", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-12.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
