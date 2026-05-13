(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  function getEls() {
    return {
      lessonStatus: document.getElementById('lessonStatus'),
      ctaTitle: document.getElementById('ctaTitle'),
      ctaCopy: document.getElementById('ctaCopy'),
      completionSheet: document.getElementById('completionSheet'),
      completionClose: document.getElementById('completionClose'),
      completionNextBtn: document.getElementById('completionNextBtn'),
      completionModuleBtn: document.getElementById('completionModuleBtn')
    };
  }

  let completionShown = false;

  function showCompletionSheet(api) {
    const els = getEls();
    if (!els.completionSheet || completionShown) return;
    completionShown = true;
    api.markLessonCompleted();
    els.completionSheet.classList.add('show');
  }

  function updateLessonStatus(api) {
    const els = getEls();
    const time = api.elements.audio.currentTime || 0;
    const duration = api.elements.audio.duration || 0;
    if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return;

    if (duration && time >= duration - 2) {
      els.lessonStatus.textContent = '已完成';
      els.lessonStatus.classList.add('done');
      els.ctaTitle.textContent = '现在，把这节课整理成你的战略思考卡';
      els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的框架真正落回你的企业里。';
      showCompletionSheet(api);
    } else if (time > 0.5) {
      els.lessonStatus.textContent = '学习中';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '边听边想，听完后开始整理';
      els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。';
    } else {
      els.lessonStatus.textContent = '未开始';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '先听课，再整理思路';
      els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。';
    }
  }

  window.MindsLeapConfigs.lessons.strategy08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第8课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第8课：订阅经济与 AI 个性化",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep08-subscription-economy/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：订阅经济与 AI 个性化",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-8",
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '查看学习地图',
        quickThoughtHref: './map.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '不要只停在“我听懂了”。',
        leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。',
        questions: [
          { id: 'qOpportunity', title: '1. 今天这节课里，哪个判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' },
          { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：产品、营销、组织、定价、客户关系，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' },
          { id: 'qAlignment', title: '3. 这会怎么影响你今年的优先级或资源配置？', placeholder: '这个框架会让你多做什么、少做什么，或者重新排序什么？', tip: '真正的战略学习，最终都会回到取舍与资源配置。' }
        ],
        outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。'
      },
      cta: {
        title: '回答先记录下来，继续往下学',
        body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。',
        titleId: 'ctaTitle',
        bodyId: 'ctaCopy',
        submitId: 'submitQuiz',
        submitLabel: "保存回答，进入下一节",
        coachLabel: "暂时跳过，继续学习",
        secondaryHref: "./lesson-strategy-09.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 7,
                "title": "AI-Native 商业模式：从卖产品到卖智能",
                "body": "理解 AI 时代才可能成立的新商业模式，以及从卖产品到卖智能的迁移。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "订阅经济与 AI 个性化",
                "body": "理解订阅模式为什么成立，以及 AI 个性化如何强化长期价值。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "蓝海战略：AI 时代的新蓝海在哪里",
                "body": "把创造无竞争市场空间的经典框架，放到 AI 新机会里重新理解。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-09.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "理解订阅模式为什么成立，以及 AI 个性化如何强化长期价值。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "订阅成立的前提是持续价值",
                "body": "客户愿意一直付费，不是因为付款方式变了，而是因为你持续交付了新的价值。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "续费比首单更重要",
                "body": "订阅模式真正考验的不是拉新，而是留存、复购和长期关系经营。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "AI 个性化是一种锁客机制",
                "body": "当服务越来越懂用户，体验会更贴合，客户也会更难离开，这就是订阅壁垒的一部分。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "价格策略也会被 AI 重写",
                "body": "AI 可以帮助你做分层定价、实验不同套餐，并更快找到长期价值与转化率的平衡点。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 8/14", "建议下一节：蓝海战略：AI 时代的新蓝海在哪里", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-09.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-08",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson8",
    audioSource: './assets/audio/strategy-ep08-subscription-economy.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep08-subscription-economy.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep08-subscription-economy/slide_01.png",
            "label": "订阅经济与 AI 个性化",
            "caption": "这一节会帮助你系统理解：订阅经济与 AI 个性化"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_03.png",
            "label": "经典框架",
            "caption": "答案是：持续的价值交付。 用户续费不是因为惯性，是因为你每个月都在给他新的价值。"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_04.png",
            "label": "关键判断",
            "caption": "所以AI个性化不只是体验上的提升，它在战略上是一种锁客机制。 第二，AI可以预测和预防流失。"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "针对不同的用户群体测试不同的价格点，找到最优的价格策略。 甚至可以做动态定价，根据用户的使用频率、价值感知、付费能力来提供不同的定价方案。"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_06.png",
            "label": "回到你的企业",
            "caption": "AI帮你提高LTV，通过个性化提升留存率和用量，延长客户的订阅周期。 AI帮你降低CAC，通过精准营销减少浪费，提高获客效率。"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_07.png",
            "label": "风险与提醒",
            "caption": "但如果你有一个AI法律助手，随时帮你审合同、回答法律问题、监控合规风险，中小企业可能愿意按月订阅这个服务。 你发现没有？"
        },
        {
            "file": "strategy-ep08-subscription-economy/slide_08.png",
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
            "end": 3.42,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.42,
            "end": 5.12,
            "text": "今天我们聊订阅经济。"
        },
        {
            "start": 5.12,
            "end": 6.7,
            "text": "你可能已经注意到了，"
        },
        {
            "start": 6.7,
            "end": 10.3,
            "text": "越来越多的公司从一次性卖产品变成了卖订阅。"
        },
        {
            "start": 10.3,
            "end": 15.28,
            "text": "Netflix、Spotify、Adobe、Microsoft 365，"
        },
        {
            "start": 15.28,
            "end": 18.9,
            "text": "甚至一些卖剃须刀和宠物食品的公司也在做订阅。"
        },
        {
            "start": 18.9,
            "end": 19.7,
            "text": "为什么？"
        },
        {
            "start": 20.22,
            "end": 24.18,
            "text": "因为订阅模式在财务上有几个非常attractive的特性。"
        },
        {
            "start": 24.18,
            "end": 26.34,
            "text": "第一，可预测的收入。"
        },
        {
            "start": 26.88,
            "end": 30.7,
            "text": "你知道下个月大概有多少收入进来，因为用户已经订阅了。"
        },
        {
            "start": 30.7,
            "end": 33.7,
            "text": "这让你做计划、做投资决策更有底气。"
        },
        {
            "start": 33.7,
            "end": 36.18,
            "text": "第二，更高的客户终身价值。"
        },
        {
            "start": 36.18,
            "end": 40.04,
            "text": "一个用户每月付你100块，十二个月就是1200块。"
        },
        {
            "start": 40.04,
            "end": 43.2,
            "text": "如果他连续订阅三年，就是3600块。"
        },
        {
            "start": 43.2,
            "end": 45.88,
            "text": "而一次性购买可能只付500块就走了。"
        },
        {
            "start": 45.88,
            "end": 48.08,
            "text": "第三，更低的获客压力。"
        },
        {
            "start": 48.08,
            "end": 50.52,
            "text": "你不需要每个月都去找新客户。"
        },
        {
            "start": 50.52,
            "end": 53.52,
            "text": "只要留住现有订阅用户，收入就是稳的。"
        },
        {
            "start": 53.52,
            "end": 57.64,
            "text": "所以从企业的角度，订阅模式是一个非常好的商业模式。"
        },
        {
            "start": 57.64,
            "end": 61.08,
            "text": "但从用户的角度，用户为什么愿意持续订阅？"
        },
        {
            "start": 61.08,
            "end": 63.98,
            "text": "答案是：持续的价值交付。"
        },
        {
            "start": 64.54,
            "end": 66.24,
            "text": "用户续费不是因为惯性，"
        },
        {
            "start": 66.24,
            "end": 68.88,
            "text": "是因为你每个月都在给他新的价值。"
        },
        {
            "start": 68.88,
            "end": 71.6,
            "text": "Netflix每个月都有新剧可以看。"
        },
        {
            "start": 71.6,
            "end": 74.32,
            "text": "Spotify每周都帮你发现新的音乐。"
        },
        {
            "start": 74.32,
            "end": 77.1,
            "text": "Adobe的工具每次更新都有新功能。"
        },
        {
            "start": 77.1,
            "end": 80.18,
            "text": "如果你停止了价值交付，用户就会取消订阅。"
        },
        {
            "start": 80.18,
            "end": 84.56,
            "text": "这就是订阅模式的核心挑战：你必须持续创造价值。"
        },
        {
            "start": 84.56,
            "end": 86.64,
            "text": "这就是AI的切入点。"
        },
        {
            "start": 86.64,
            "end": 89.0,
            "text": "AI可以让订阅模式变得更好。"
        },
        {
            "start": 89.0,
            "end": 89.78,
            "text": "怎么更好？"
        },
        {
            "start": 89.78,
            "end": 90.64,
            "text": "三个维度。"
        },
        {
            "start": 90.64,
            "end": 94.04,
            "text": "第一，AI让个性化成为订阅的核心体验。"
        },
        {
            "start": 94.04,
            "end": 96.94,
            "text": "以前的订阅是\"一份套餐卖给所有人\"。"
        },
        {
            "start": 96.94,
            "end": 100.56,
            "text": "比如说，你订阅一个杂志，每个订户收到的内容一模一样。"
        },
        {
            "start": 100.56,
            "end": 104.2,
            "text": "但AI可以让每个订户的体验都不一样。"
        },
        {
            "start": 104.2,
            "end": 107.38,
            "text": "Spotify给你推的歌跟给我推的完全不同。"
        },
        {
            "start": 107.38,
            "end": 110.74,
            "text": "Netflix给你推的剧跟给我推的完全不同。"
        },
        {
            "start": 110.74,
            "end": 115.54,
            "text": "这种个性化体验会大幅提高用户的满意度和留存率。"
        },
        {
            "start": 115.54,
            "end": 119.12,
            "text": "因为你觉得\"这个产品好懂我\"，你就不想换了。"
        },
        {
            "start": 119.12,
            "end": 121.16,
            "text": "转换成本不只是钱的问题，"
        },
        {
            "start": 121.16,
            "end": 124.04,
            "text": "而是\"它花了这么长时间了解我，"
        },
        {
            "start": 124.04,
            "end": 126.36,
            "text": "我换一个新的又要从头开始\"。"
        },
        {
            "start": 126.36,
            "end": 129.76,
            "text": "所以AI个性化不只是体验上的提升，"
        },
        {
            "start": 129.76,
            "end": 132.62,
            "text": "它在战略上是一种锁客机制。"
        },
        {
            "start": 132.62,
            "end": 135.16,
            "text": "第二，AI可以预测和预防流失。"
        },
        {
            "start": 135.16,
            "end": 137.72,
            "text": "订阅模式最大的敌人是什么？"
        },
        {
            "start": 137.72,
            "end": 139.2,
            "text": "Churn，用户流失。"
        },
        {
            "start": 139.2,
            "end": 140.72,
            "text": "传统的做法是什么？"
        },
        {
            "start": 140.72,
            "end": 142.78,
            "text": "等用户点了\"取消订阅\"的按钮，"
        },
        {
            "start": 142.78,
            "end": 145.92,
            "text": "然后弹出一个挽留弹窗，打个折扣试试。"
        },
        {
            "start": 145.92,
            "end": 147.94,
            "text": "但这时候往往已经太晚了。"
        },
        {
            "start": 148.46,
            "end": 149.74,
            "text": "AI可以做得更早。"
        },
        {
            "start": 149.74,
            "end": 153.44,
            "text": "它可以分析用户的行为数据——登录频率下降了、"
        },
        {
            "start": 153.44,
            "end": 155.28,
            "text": "使用核心功能减少了、"
        },
        {
            "start": 155.28,
            "end": 159.02,
            "text": "打开邮件的比率降了——这些都是流失的预警信号。"
        },
        {
            "start": 159.02,
            "end": 162.48,
            "text": "AI可以在用户想取消之前就识别出风险，"
        },
        {
            "start": 162.48,
            "end": 164.22,
            "text": "提前触发留存动作。"
        },
        {
            "start": 164.22,
            "end": 167.12,
            "text": "比如推送一个他可能感兴趣的新功能，"
        },
        {
            "start": 167.12,
            "end": 169.0,
            "text": "或者给他一个专属的优惠，"
        },
        {
            "start": 169.0,
            "end": 170.92,
            "text": "或者让客服主动联系。"
        },
        {
            "start": 170.92,
            "end": 175.78,
            "text": "数据显示，提前干预的留存效果比事后挽留好三到五倍。"
        },
        {
            "start": 175.78,
            "end": 179.04,
            "text": "这就是AI在订阅模式中的战略价值。"
        },
        {
            "start": 179.46,
            "end": 182.1,
            "text": "第三，AI可以优化订阅定价。"
        },
        {
            "start": 182.1,
            "end": 183.04,
            "text": "定多少钱？"
        },
        {
            "start": 183.04,
            "end": 183.98,
            "text": "分几个档次？"
        },
        {
            "start": 183.98,
            "end": 185.92,
            "text": "每个档次包含什么功能？"
        },
        {
            "start": 185.92,
            "end": 189.12,
            "text": "这些问题以前是靠经验和直觉来定的。"
        },
        {
            "start": 189.12,
            "end": 191.48,
            "text": "但AI可以做大规模的定价实验。"
        },
        {
            "start": 191.48,
            "end": 194.1,
            "text": "针对不同的用户群体测试不同的价格点，"
        },
        {
            "start": 194.1,
            "end": 195.72,
            "text": "找到最优的价格策略。"
        },
        {
            "start": 196.20000000000002,
            "end": 199.02,
            "text": "甚至可以做动态定价——根据用户的使用频率、"
        },
        {
            "start": 199.02,
            "end": 199.86,
            "text": "价值感知、"
        },
        {
            "start": 199.86,
            "end": 202.18,
            "text": "付费能力来提供不同的定价方案。"
        },
        {
            "start": 202.18,
            "end": 205.14,
            "text": "好，讲完了AI怎么增强订阅模式。"
        },
        {
            "start": 205.14,
            "end": 209.6,
            "text": "我想再讲一个更深层的话题：订阅模式的两个核心指标。"
        },
        {
            "start": 209.6,
            "end": 213.6,
            "text": "如果你做订阅业务，有两个数字你必须天天盯着看。"
        },
        {
            "start": 213.6,
            "end": 218.16,
            "text": "第一个：LTV，Customer Lifetime Value，客户终身价值。"
        },
        {
            "start": 218.16,
            "end": 221.4,
            "text": "就是一个客户在他整个订阅周期里总共给"
        },
        {
            "start": 221.4,
            "end": 222.62,
            "text": "你贡献了多少收入。"
        },
        {
            "start": 223.1,
            "end": 227.16,
            "text": "第二个：CAC，Customer Acquisition Cost，客户获取成本。"
        },
        {
            "start": 227.16,
            "end": 230.3,
            "text": "就是你获取一个新订阅客户花了多少钱。"
        },
        {
            "start": 230.62,
            "end": 231.88,
            "text": "黄金法则是什么？"
        },
        {
            "start": 231.88,
            "end": 234.1,
            "text": "LTV要大于三倍的CAC。"
        },
        {
            "start": 234.1,
            "end": 237.14,
            "text": "也就是说，你从一个客户身上赚的钱，"
        },
        {
            "start": 237.14,
            "end": 239.76,
            "text": "要大于你获取他所花的钱的三倍。"
        },
        {
            "start": 239.76,
            "end": 241.72,
            "text": "如果这个比值小于三，"
        },
        {
            "start": 241.72,
            "end": 244.2,
            "text": "说明你要么花太多钱获客了，"
        },
        {
            "start": 244.2,
            "end": 245.42,
            "text": "要么客户留不住。"
        },
        {
            "start": 245.42,
            "end": 247.94,
            "text": "AI在这两个指标上都能帮你。"
        },
        {
            "start": 247.94,
            "end": 252.4,
            "text": "AI帮你提高LTV——通过个性化提升留存率和用量，"
        },
        {
            "start": 252.4,
            "end": 254.42,
            "text": "延长客户的订阅周期。"
        },
        {
            "start": 254.42,
            "end": 259.1,
            "text": "AI帮你降低CAC——通过精准营销减少浪费，提高获客效率。"
        },
        {
            "start": 259.1,
            "end": 261.26,
            "text": "AI还能帮你做用户分群，"
        },
        {
            "start": 261.26,
            "end": 264.6,
            "text": "识别哪些渠道获取的用户LTV最高，"
        },
        {
            "start": 264.6,
            "end": 267.14,
            "text": "然后把预算集中在这些渠道上。"
        },
        {
            "start": 267.14,
            "end": 269.58,
            "text": "最后我想聊一个很多人没想到的应用："
        },
        {
            "start": 269.58,
            "end": 273.74,
            "text": "AI让一些以前不适合做订阅的行业也能做订阅了。"
        },
        {
            "start": 273.74,
            "end": 275.18,
            "text": "比如说教育。"
        },
        {
            "start": 275.18,
            "end": 277.1,
            "text": "以前卖课程是一次性的。"
        },
        {
            "start": 277.1,
            "end": 279.18,
            "text": "你买了一门课，学完就走了。"
        },
        {
            "start": 279.18,
            "end": 281.9,
            "text": "但如果你用AI做个性化学习路径，"
        },
        {
            "start": 281.9,
            "end": 285.68,
            "text": "每天根据学员的进度和薄弱点推送不同的内容，"
        },
        {
            "start": 285.68,
            "end": 287.86,
            "text": "这就变成了一个持续的服务，"
        },
        {
            "start": 287.86,
            "end": 289.26,
            "text": "订阅就有了意义。"
        },
        {
            "start": 289.26,
            "end": 290.96,
            "text": "比如说健康管理。"
        },
        {
            "start": 290.96,
            "end": 293.0,
            "text": "以前体检是一年一次的。"
        },
        {
            "start": 293.0,
            "end": 295.1,
            "text": "但如果你有一个AI健康助手，"
        },
        {
            "start": 295.1,
            "end": 297.94,
            "text": "每天分析你的运动数据、饮食数据、"
        },
        {
            "start": 297.94,
            "end": 300.74,
            "text": "睡眠数据，给你个性化的健康建议，"
        },
        {
            "start": 300.74,
            "end": 302.58,
            "text": "这就值得按月订阅。"
        },
        {
            "start": 302.58,
            "end": 304.08,
            "text": "再比如说法律咨询。"
        },
        {
            "start": 304.08,
            "end": 306.9,
            "text": "以前有法律问题才找律师，按次收费。"
        },
        {
            "start": 306.9,
            "end": 309.5,
            "text": "但如果你有一个AI法律助手，"
        },
        {
            "start": 309.5,
            "end": 311.98,
            "text": "随时帮你审合同、回答法律问题、"
        },
        {
            "start": 311.98,
            "end": 313.38,
            "text": "监控合规风险，"
        },
        {
            "start": 313.38,
            "end": 316.22,
            "text": "中小企业可能愿意按月订阅这个服务。"
        },
        {
            "start": 316.66,
            "end": 317.68,
            "text": "你发现没有？"
        },
        {
            "start": 317.68,
            "end": 320.34,
            "text": "AI让\"持续价值交付\"变得可能了。"
        },
        {
            "start": 320.34,
            "end": 323.78,
            "text": "以前很多服务是断点式的，AI可以把它变成连续的。"
        },
        {
            "start": 323.78,
            "end": 326.62,
            "text": "一旦变成连续的，订阅模式就成立了。"
        },
        {
            "start": 326.62,
            "end": 327.98,
            "text": "好，今天的思考题。"
        },
        {
            "start": 327.98,
            "end": 330.26,
            "text": "第一，你的业务能不能做订阅？"
        },
        {
            "start": 330.26,
            "end": 334.48,
            "text": "如果现在是一次性销售，有没有办法改成持续服务？"
        },
        {
            "start": 334.48,
            "end": 338.46,
            "text": "第二，如果你已经有订阅模式，AI能帮你提高哪些指标？"
        },
        {
            "start": 338.46,
            "end": 339.34,
            "text": "留存率？"
        },
        {
            "start": 339.34,
            "end": 339.88,
            "text": "客单价？"
        },
        {
            "start": 339.88,
            "end": 340.72,
            "text": "获客效率？"
        },
        {
            "start": 340.72,
            "end": 344.16,
            "text": "第三，算一下你的LTV和CAC比值。"
        },
        {
            "start": 344.16,
            "end": 346.66,
            "text": "如果小于三，问题出在哪里？"
        },
        {
            "start": 346.66,
            "end": 347.42,
            "text": "总结一下。"
        },
        {
            "start": 347.42,
            "end": 347.7,
            "text": "第一，"
        },
        {
            "start": 347.7,
            "end": 351.94,
            "text": "订阅模式的核心优势是可预测收入和更高的客户终身价值，"
        },
        {
            "start": 351.94,
            "end": 353.96,
            "text": "但必须持续创造价值。"
        },
        {
            "start": 353.96,
            "end": 356.56,
            "text": "第二，AI在三个维度增强订阅："
        },
        {
            "start": 356.56,
            "end": 359.76,
            "text": "个性化体验提升留存、预测性防流失、"
        },
        {
            "start": 359.76,
            "end": 360.76,
            "text": "智能定价优化。"
        },
        {
            "start": 360.76,
            "end": 365.14,
            "text": "第三，LTV大于三倍CAC是订阅业务的健康线。"
        },
        {
            "start": 365.14,
            "end": 368.38,
            "text": "AI同时帮你提高LTV和降低CAC。"
        },
        {
            "start": 368.38,
            "end": 371.5,
            "text": "第四，AI让更多行业可以做订阅，"
        },
        {
            "start": 371.5,
            "end": 374.72,
            "text": "因为AI让持续价值交付变得可能。"
        },
        {
            "start": 374.72,
            "end": 377.12,
            "text": "好，商业模式设计四期讲完了。"
        },
        {
            "start": 377.12,
            "end": 380.06,
            "text": "从下一期开始我们进入战略增长的话题。"
        },
        {
            "start": 380.06,
            "end": 384.32,
            "text": "第一个主题是蓝海战略：AI时代的新蓝海在哪里？"
        },
        {
            "start": 384.32,
            "end": 386.64,
            "text": "怎么找到没有竞争的市场空间？"
        },
        {
            "start": 386.64,
            "end": 388.18,
            "text": "好，今天就到这里。"
        },
        {
            "start": 388.18,
            "end": 389.84,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.42,
        "index": 0
    },
    {
        "start": 3.42,
        "end": 61.08,
        "index": 1
    },
    {
        "start": 61.08,
        "end": 126.36,
        "index": 2
    },
    {
        "start": 126.36,
        "end": 196.2,
        "index": 3
    },
    {
        "start": 196.2,
        "end": 247.94,
        "index": 4
    },
    {
        "start": 247.94,
        "end": 306.9,
        "index": 5
    },
    {
        "start": 306.9,
        "end": 346.66,
        "index": 6
    },
    {
        "start": 346.66,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-09.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "理解订阅模式为什么成立，以及 AI 个性化如何强化长期价值。"
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是判断框架还不够清楚。",
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: "系统希望你先建立一个更稳定的战略判断框架，再去推进具体动作。"
      }
    },
    reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] },
    redirects: {
      submitHref: "./lesson-strategy-09.html?entry={entry}",
      secondaryHref: "./lesson-strategy-09.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-08",
      coachSource: "./ai-coach.html?source=lesson-strategy-08"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于订阅经济与 AI 个性化的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "订阅经济与 AI 个性化", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-09.html" + '?entry=' + entryMode;
        if (els.completionModuleBtn) els.completionModuleBtn.href = './module-strategy.html?entry=' + entryMode;
        if (els.completionClose) {
          els.completionClose.onclick = () => els.completionSheet?.classList.remove('show');
        }
        updateLessonStatus(api);
      },
      onLoadedMetadata: updateLessonStatus,
      onPlay: updateLessonStatus,
      onTimeUpdate: updateLessonStatus,
      onEnded(api) {
        updateLessonStatus(api);
        showCompletionSheet(api);
      }
    }
  };
})(window);
