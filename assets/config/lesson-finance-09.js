(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第9课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第9课：投资决策：怎么判断一笔投入值不值",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep09-investment-decision/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：投资决策：怎么判断一笔投入值不值", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-10.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 8,
                "title": "股权结构：控制权、激励与长期治理",
                "body": "把融资、控制权和长期激励放在同一张桌子上考虑。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "投资决策：怎么判断一笔投入值不值",
                "body": "让投资决策回到回报、风险与机会成本，而不是只凭感觉。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 时代的财务风险：你需要警惕什么",
                "body": "识别 AI 时代新的财务风险源，并建立更前置的预警机制。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "让投资决策回到回报、风险与机会成本，而不是只凭感觉。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天聊投资决策"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "那这五年节省下来的钱，折现到今天大概是 113.7 万"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "如果你的资金成本是 18%，那 IRR 15.2% 就不够了，不做"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "就是让 AI 在你的每个假设变量上设置一个波动范围，然后跑几千次模拟，看在不同情况下 NPV 的分布"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 9/13", "建议下一节：AI 时代的财务风险：你需要警惕什么", '也可以先整理这一节'], nextHref: "./lesson-finance-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-09", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson9", audioSource: './assets/audio/finance-ep09-investment-decision.mp3?v=20260411-finance-ep09-r1', vttSrc: './assets/subtitles/finance-ep09-investment-decision.vtt?v=20260411-finance-ep09-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep09-investment-decision/slide_01.png",
            "label": "投资决策：怎么判断一笔投入值不值",
            "caption": "这一节会帮助你系统理解：投资决策：怎么判断一笔投入值不值"
        },
        {
            "file": "finance-ep09-investment-decision/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep09-investment-decision/slide_03.png",
            "label": "核心框架",
            "caption": "那这五年节省下来的钱，折现到今天大概是 113.7 万。 减去你的初始投入 100 万，NPV 就是 13.7 万。"
        },
        {
            "file": "finance-ep09-investment-decision/slide_04.png",
            "label": "关键指标",
            "caption": "如果你的资金成本是 18%，那 IRR 15.2% 就不够了，不做。 NPV 和 IRR 各有优缺点。"
        },
        {
            "file": "finance-ep09-investment-decision/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "就是让 AI 在你的每个假设变量上设置一个波动范围，然后跑几千次模拟，看在不同情况下 NPV 的分布。 这样你得到的不是一个点估计，而是一个概率分布。"
        },
        {
            "file": "finance-ep09-investment-decision/slide_06.png",
            "label": "回到你的企业",
            "caption": "第一，沉没成本谬误。 你已经在一个项目上投了 500 万，现在项目不太顺利。"
        },
        {
            "file": "finance-ep09-investment-decision/slide_07.png",
            "label": "风险与提醒",
            "caption": "二，这个项目的 IRR 是否高于我的资金成本？ 高多少？"
        },
        {
            "file": "finance-ep09-investment-decision/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.06,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.06,
            "end": 3.28,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.28,
            "end": 5.06,
            "text": "今天聊投资决策。"
        },
        {
            "start": 5.560000000000002,
            "end": 8.56,
            "text": "不管你是管理者决定要不要上一个新项目，"
        },
        {
            "start": 8.56,
            "end": 11.4,
            "text": "还是创业者决定要不要投入一个新方向，"
        },
        {
            "start": 11.4,
            "end": 14.62,
            "text": "还是投资人决定要不要投一家公司——本"
        },
        {
            "start": 14.62,
            "end": 16.08,
            "text": "质上都是同一个问题："
        },
        {
            "start": 16.08,
            "end": 17.8,
            "text": "这笔钱该不该花？"
        },
        {
            "start": 17.8,
            "end": 20.46,
            "text": "很多人做投资决策是凭感觉的。"
        },
        {
            "start": 20.46,
            "end": 24.8,
            "text": "觉得这个事情有前途，觉得这个市场够大，觉得团队不错。"
        },
        {
            "start": 24.8,
            "end": 25.82,
            "text": "感觉重不重要？"
        },
        {
            "start": 25.82,
            "end": 26.34,
            "text": "重要。"
        },
        {
            "start": 26.34,
            "end": 28.16,
            "text": "但光凭感觉不够。"
        },
        {
            "start": 28.16,
            "end": 32.58,
            "text": "你需要有一个量化的分析框架来辅助你的判断。"
        },
        {
            "start": 32.58,
            "end": 36.76,
            "text": "今天我给大家讲两个最核心的工具：NPV 和 IRR。"
        },
        {
            "start": 36.76,
            "end": 41.26,
            "text": "先讲 NPV，Net Present Value，净现值。"
        },
        {
            "start": 41.26,
            "end": 43.86,
            "text": "NPV 的核心逻辑特别简单："
        },
        {
            "start": 43.86,
            "end": 45.8,
            "text": "一笔投资值不值得做，"
        },
        {
            "start": 45.8,
            "end": 49.24,
            "text": "取决于它未来能给你带来的所有现金流，"
        },
        {
            "start": 49.24,
            "end": 52.7,
            "text": "折现到今天之后，减去你的初始投入，"
        },
        {
            "start": 52.7,
            "end": 55.0,
            "text": "剩下的是正的还是负的。"
        },
        {
            "start": 55.0,
            "end": 59.42,
            "text": "如果 NPV 大于零，说明这笔投资在经济上是值得的。"
        },
        {
            "start": 59.42,
            "end": 63.32,
            "text": "如果 NPV 小于零，说明你投进去的钱收不回来。"
        },
        {
            "start": 63.32,
            "end": 64.26,
            "text": "举个例子。"
        },
        {
            "start": 64.26,
            "end": 68.18,
            "text": "你考虑花 100 万引入一套 AI 客服系统。"
        },
        {
            "start": 68.18,
            "end": 73.78,
            "text": "你预计这套系统每年能帮你省 30 万的人工成本，用五年。"
        },
        {
            "start": 73.78,
            "end": 75.54,
            "text": "假设你的资金成本是 10%。"
        },
        {
            "start": 75.54,
            "end": 82.44,
            "text": "那这五年节省下来的钱，折现到今天大概是 113.7 万。"
        },
        {
            "start": 82.44,
            "end": 87.34,
            "text": "减去你的初始投入 100 万，NPV 就是 13.7 万。"
        },
        {
            "start": 87.34,
            "end": 89.24,
            "text": "大于零，值得做。"
        },
        {
            "start": 89.24,
            "end": 91.76,
            "text": "NPV 的关键是折现率怎么选。"
        },
        {
            "start": 91.76,
            "end": 95.12,
            "text": "折现率本质上反映了你的资金机会成本。"
        },
        {
            "start": 95.12,
            "end": 99.04,
            "text": "你这笔钱如果不投这个项目，能获得多少回报。"
        },
        {
            "start": 99.04,
            "end": 105.06,
            "text": "一般来说，公司会用 WACC（加权平均资本成本）作为折现率。"
        },
        {
            "start": 105.06,
            "end": 108.04,
            "text": "简单理解就是你公司的综合资金成本，"
        },
        {
            "start": 108.04,
            "end": 111.04,
            "text": "通常在 8% 到 15% 之间。"
        },
        {
            "start": 111.04,
            "end": 113.38,
            "text": "折现率越高，NPV 越低。"
        },
        {
            "start": 113.38,
            "end": 115.98,
            "text": "这意味着如果你的资金成本很高，"
        },
        {
            "start": 115.98,
            "end": 119.06,
            "text": "那这个项目需要产生更大的回报才值得做。"
        },
        {
            "start": 119.06,
            "end": 122.92,
            "text": "再来讲 IRR，Internal Rate of Return，内部收益率。"
        },
        {
            "start": 122.92,
            "end": 126.5,
            "text": "IRR 就是让 NPV 等于零的那个折现率。"
        },
        {
            "start": 126.5,
            "end": 130.36,
            "text": "换句话说，IRR 告诉你这个项目的实际回报率是多少。"
        },
        {
            "start": 130.36,
            "end": 131.9,
            "text": "还是刚才那个例子。"
        },
        {
            "start": 131.9,
            "end": 135.28,
            "text": "你花 100 万，每年回收 30 万，五年。"
        },
        {
            "start": 135.28,
            "end": 137.94,
            "text": "这个项目的 IRR 大约是 15.2%。"
        },
        {
            "start": 138.1,
            "end": 139.94,
            "text": "怎么用 IRR 做决策呢？"
        },
        {
            "start": 139.94,
            "end": 144.76,
            "text": "很简单：如果 IRR 大于你的资金成本，这个项目就值得做。"
        },
        {
            "start": 144.76,
            "end": 150.68,
            "text": "如果你的资金成本是 10%，这个项目 IRR 是 15.2%，那就做。"
        },
        {
            "start": 150.68,
            "end": 156.64,
            "text": "如果你的资金成本是 18%，那 IRR 15.2% 就不够了，不做。"
        },
        {
            "start": 156.64,
            "end": 158.8,
            "text": "NPV 和 IRR 各有优缺点。"
        },
        {
            "start": 158.8,
            "end": 162.02,
            "text": "NPV 的优点是直接告诉你这个项目能创"
        },
        {
            "start": 162.02,
            "end": 164.02,
            "text": "造多少价值（多少钱）。"
        },
        {
            "start": 164.02,
            "end": 166.58,
            "text": "缺点是需要先确定一个折现率。"
        },
        {
            "start": 166.58,
            "end": 170.96,
            "text": "IRR 的优点是不需要预先确定折现率，"
        },
        {
            "start": 170.96,
            "end": 174.5,
            "text": "直接算出回报率，方便跟不同项目比较。"
        },
        {
            "start": 174.5,
            "end": 178.70000000000002,
            "text": "缺点是在某些情况下可能算出多个 IRR，"
        },
        {
            "start": 178.70000000000002,
            "end": 181.82,
            "text": "或者在互斥项目的选择中可能误导。"
        },
        {
            "start": 181.82,
            "end": 184.42,
            "text": "实际工作中，最好两个一起用。"
        },
        {
            "start": 184.42,
            "end": 188.88,
            "text": "NPV 帮你判断绝对价值，IRR 帮你判断相对效率。"
        },
        {
            "start": 188.88,
            "end": 190.48,
            "text": "好，讲完了基本工具，"
        },
        {
            "start": 190.48,
            "end": 192.5,
            "text": "接下来聊一个重要的话题："
        },
        {
            "start": 192.5,
            "end": 194.58,
            "text": "AI 如何辅助投资决策。"
        },
        {
            "start": 194.58,
            "end": 195.98,
            "text": "传统的投资决策，"
        },
        {
            "start": 195.98,
            "end": 198.92,
            "text": "你需要手动做财务模型、做假设、"
        },
        {
            "start": 198.92,
            "end": 201.02,
            "text": "算 NPV 和 IRR。"
        },
        {
            "start": 201.02,
            "end": 204.06,
            "text": "这个过程很耗时，而且容易出错。"
        },
        {
            "start": 204.06,
            "end": 206.04,
            "text": "AI 在这里能帮大忙。"
        },
        {
            "start": 206.04,
            "end": 208.56,
            "text": "第一，AI 帮你做敏感性分析。"
        },
        {
            "start": 208.56,
            "end": 211.46,
            "text": "投资决策最大的不确定性在于假设。"
        },
        {
            "start": 211.46,
            "end": 216.34,
            "text": "你假设收入每年增长 20%，但万一只增长了 10% 呢？"
        },
        {
            "start": 216.34,
            "end": 220.5,
            "text": "你假设成本保持不变，但万一原材料涨价了呢？"
        },
        {
            "start": 220.5,
            "end": 222.96,
            "text": "你可以让 AI 做蒙特卡洛模拟。"
        },
        {
            "start": 222.96,
            "end": 223.6,
            "text": "什么意思？"
        },
        {
            "start": 223.6,
            "end": 228.7,
            "text": "就是让 AI 在你的每个假设变量上设置一个波动范围，"
        },
        {
            "start": 228.7,
            "end": 230.92,
            "text": "然后跑几千次模拟，"
        },
        {
            "start": 230.92,
            "end": 233.76,
            "text": "看在不同情况下 NPV 的分布。"
        },
        {
            "start": 233.76,
            "end": 237.68,
            "text": "这样你得到的不是一个点估计，而是一个概率分布。"
        },
        {
            "start": 237.68,
            "end": 239.1,
            "text": "比如 AI 告诉你："
        },
        {
            "start": 239.1,
            "end": 242.32,
            "text": "这个项目有 70% 的概率 NPV 大于零，"
        },
        {
            "start": 242.32,
            "end": 244.86,
            "text": "有 30% 的概率亏损。"
        },
        {
            "start": 244.86,
            "end": 248.92,
            "text": "这个信息比一个单一的 NPV 数字有价值得多。"
        },
        {
            "start": 248.92,
            "end": 250.9,
            "text": "第二，AI 帮你做情景分析。"
        },
        {
            "start": 251.32,
            "end": 255.66,
            "text": "你可以设定几个不同的情景：乐观、中性、悲观。"
        },
        {
            "start": 255.66,
            "end": 260.08,
            "text": "然后让 AI 在每个情景下算出 NPV 和 IRR。"
        },
        {
            "start": 260.08,
            "end": 264.0400000000001,
            "text": "更厉害的是，AI 可以帮你发现你没有想到的情景。"
        },
        {
            "start": 264.0400000000001,
            "end": 266.26,
            "text": "比如你在分析一个出海项目，"
        },
        {
            "start": 266.26,
            "end": 268.36,
            "text": "AI 可能会提醒你：汇率波动、"
        },
        {
            "start": 268.36,
            "end": 270.8,
            "text": "当地政策变化、竞争对手的反应，"
        },
        {
            "start": 270.8,
            "end": 273.1,
            "text": "这些因素你有没有考虑进去？"
        },
        {
            "start": 273.1,
            "end": 275.5,
            "text": "第三，AI 帮你做尽职调查。"
        },
        {
            "start": 275.5,
            "end": 277.18,
            "text": "如果你是投资人，"
        },
        {
            "start": 277.18,
            "end": 281.28,
            "text": "在做投资决策之前需要做大量的尽职调查。"
        },
        {
            "start": 281.28,
            "end": 286.38,
            "text": "行业研究、竞品分析、团队背景调查、技术可行性评估。"
        },
        {
            "start": 286.38,
            "end": 289.72,
            "text": "AI 可以快速处理大量的公开信息，"
        },
        {
            "start": 289.72,
            "end": 292.2,
            "text": "帮你做初步的筛选和分析。"
        },
        {
            "start": 292.2,
            "end": 295.58,
            "text": "当然，最终的判断还是要人来做，"
        },
        {
            "start": 295.58,
            "end": 299.82,
            "text": "特别是涉及到对团队的判断和行业直觉的部分。"
        },
        {
            "start": 299.82,
            "end": 303.04,
            "text": "讲几个投资决策中常见的认知偏差，"
        },
        {
            "start": 303.04,
            "end": 305.64,
            "text": "也是 AI 可以帮你对抗的。"
        },
        {
            "start": 305.64,
            "end": 306.9600000000001,
            "text": "第一，沉没成本谬误。"
        },
        {
            "start": 306.9600000000001,
            "end": 311.22,
            "text": "你已经在一个项目上投了 500 万，现在项目不太顺利。"
        },
        {
            "start": 311.22,
            "end": 313.86,
            "text": "理性的做法是看未来还需要投多少、"
        },
        {
            "start": 313.86,
            "end": 316.68,
            "text": "能回收多少来决定要不要继续。"
        },
        {
            "start": 316.68,
            "end": 319.34,
            "text": "但很多人会想\"都投了 500 万了，"
        },
        {
            "start": 319.34,
            "end": 322.0799999999999,
            "text": "不能白费\"，然后继续往里扔钱。"
        },
        {
            "start": 322.08,
            "end": 324.02,
            "text": "AI 不会有这种情感。"
        },
        {
            "start": 324.02,
            "end": 327.46,
            "text": "你把数据给它，它只看未来的现金流。"
        },
        {
            "start": 327.46,
            "end": 331.18,
            "text": "已经花的钱就是花了，不应该影响未来的决策。"
        },
        {
            "start": 331.18,
            "end": 333.5,
            "text": "第二，过度自信偏差。"
        },
        {
            "start": 333.5,
            "end": 337.12,
            "text": "创始人和管理者往往对自己的项目过度乐观。"
        },
        {
            "start": 337.12,
            "end": 341.56,
            "text": "收入预测偏高、成本预测偏低、时间预测偏短。"
        },
        {
            "start": 341.56,
            "end": 344.14,
            "text": "你可以让 AI 帮你做一个\"魔鬼辩论\"。"
        },
        {
            "start": 344.14,
            "end": 348.64,
            "text": "把你的假设告诉 AI，让它从反面来挑战每一个假设。"
        },
        {
            "start": 348.64,
            "end": 350.7,
            "text": "这能帮你发现自己的盲点。"
        },
        {
            "start": 350.7,
            "end": 352.56,
            "text": "第三，锚定效应。"
        },
        {
            "start": 353.04,
            "end": 355.36,
            "text": "如果有人先给你一个数字，"
        },
        {
            "start": 355.36,
            "end": 358.14,
            "text": "你后面的判断就会被这个数字锚定。"
        },
        {
            "start": 358.14,
            "end": 361.6,
            "text": "比如创业者告诉你\"我们预期明年收入一个亿\"，"
        },
        {
            "start": 361.6,
            "end": 364.2,
            "text": "你可能就会在这个基础上去评估。"
        },
        {
            "start": 364.2,
            "end": 367.24,
            "text": "但这个一个亿到底有没有根据？"
        },
        {
            "start": 367.24,
            "end": 370.98,
            "text": "AI 可以帮你独立地做一个自下而上的收入估算，"
        },
        {
            "start": 370.98,
            "end": 373.32,
            "text": "不受对方给你的锚点影响。"
        },
        {
            "start": 373.32,
            "end": 376.84,
            "text": "最后给大家一个实用的投资决策检查清单。"
        },
        {
            "start": 376.84,
            "end": 380.74,
            "text": "在做任何投资决策之前，问自己这五个问题："
        },
        {
            "start": 380.74,
            "end": 383.8399999999999,
            "text": "一，这个项目的 NPV 是否大于零？"
        },
        {
            "start": 383.84,
            "end": 385.48,
            "text": "在合理的假设下。"
        },
        {
            "start": 385.48,
            "end": 389.16,
            "text": "二，这个项目的 IRR 是否高于我的资金成本？"
        },
        {
            "start": 389.16,
            "end": 389.94,
            "text": "高多少？"
        },
        {
            "start": 389.94,
            "end": 392.46,
            "text": "三，我的关键假设是什么？"
        },
        {
            "start": 392.46,
            "end": 397.1,
            "text": "如果最关键的假设变差 30%，结论会不会翻转？"
        },
        {
            "start": 397.1,
            "end": 399.28,
            "text": "四，最坏的情况是什么？"
        },
        {
            "start": 399.28,
            "end": 401.46,
            "text": "我能不能承受最坏的结果？"
        },
        {
            "start": 401.46,
            "end": 404.2,
            "text": "五，有没有更好的替代方案？"
        },
        {
            "start": 404.2,
            "end": 407.28,
            "text": "同样的钱投在别处是不是回报更高？"
        },
        {
            "start": 407.28,
            "end": 409.44,
            "text": "把这五个问题回答清楚了，"
        },
        {
            "start": 409.44,
            "end": 412.3,
            "text": "你的投资决策就有了一个理性的基础。"
        },
        {
            "start": 412.3,
            "end": 416.22,
            "text": "然后再加上你的行业经验和直觉，做出最终判断。"
        },
        {
            "start": 416.74,
            "end": 417.96,
            "text": "好，总结一下。"
        },
        {
            "start": 417.96,
            "end": 420.92,
            "text": "NPV 告诉你一个项目能创造多少价值，"
        },
        {
            "start": 420.92,
            "end": 423.3,
            "text": "IRR 告诉你回报率是多少。"
        },
        {
            "start": 423.3,
            "end": 428.14,
            "text": "AI 可以帮你做敏感性分析、情景分析和对抗认知偏差。"
        },
        {
            "start": 428.14,
            "end": 431.16,
            "text": "投资决策用五问清单来检验。"
        },
        {
            "start": 431.16,
            "end": 434.64,
            "text": "下一期我们来聊 AI 驱动的财务风控："
        },
        {
            "start": 434.64,
            "end": 436.84,
            "text": "从人工审计到智能预警。"
        },
        {
            "start": 436.84,
            "end": 439.3,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 439.3,
            "end": 441.18,
            "text": "1. NPV（净现值）："
        },
        {
            "start": 441.18,
            "end": 444.34,
            "text": "未来现金流折现总和减去初始投入，"
        },
        {
            "start": 444.34,
            "end": 445.8,
            "text": ">0 则值得投"
        },
        {
            "start": 445.8,
            "end": 448.5,
            "text": "2. IRR（内部收益率）："
        },
        {
            "start": 448.5,
            "end": 452.16,
            "text": "项目实际回报率，>资金成本则值得做"
        },
        {
            "start": 452.16,
            "end": 455.24,
            "text": "3. AI 辅助投资决策三大应用："
        },
        {
            "start": 455.24,
            "end": 458.72,
            "text": "敏感性分析、情景分析、对抗认知偏差"
        },
        {
            "start": 458.72,
            "end": 461.84,
            "text": "4. 投资决策五问检查清单"
        },
        {
            "start": 461.84,
            "end": 466.16,
            "text": "1. 你所在的公司最近有没有面临投资决策？"
        },
        {
            "start": 466.16,
            "end": 469.52,
            "text": "用 NPV 和 IRR 分析一下，结论如何？"
        },
        {
            "start": 469.52,
            "end": 473.92,
            "text": "2. 你在做决策时最容易犯哪种认知偏差？"
        },
        {
            "start": 473.92,
            "end": 476.16,
            "text": "怎么用 AI 来对抗它？"
        },
        {
            "start": 476.16,
            "end": 481.32,
            "text": "3. 为什么说单独用 IRR 可能会在互斥项目选择中误导你？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.098,
        "index": 0
    },
    {
        "start": 10.098,
        "end": 65.007,
        "index": 1
    },
    {
        "start": 65.007,
        "end": 120.926,
        "index": 2
    },
    {
        "start": 120.926,
        "end": 171.795,
        "index": 3
    },
    {
        "start": 171.795,
        "end": 227.84,
        "index": 4
    },
    {
        "start": 227.84,
        "end": 284.011,
        "index": 5
    },
    {
        "start": 284.011,
        "end": 348.64,
        "index": 6
    },
    {
        "start": 348.64,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "让投资决策回到回报、风险与机会成本，而不是只凭感觉。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-10.html?entry={entry}", secondaryHref: "./lesson-finance-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-09", coachSource: "./ai-coach.html?source=lesson-finance-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于投资决策：怎么判断一笔投入值不值的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "投资决策：怎么判断一笔投入值不值", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
