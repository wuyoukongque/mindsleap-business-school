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

  window.MindsLeapConfigs.lessons.strategy06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第6课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第6课：平台战略与网络效应",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep06-platform-strategy/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：平台战略与网络效应",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-6",
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
        secondaryHref: "./lesson-strategy-07.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 5,
                "title": "商业模式画布：一张图说清怎么赚钱",
                "body": "用九宫格快速看懂任何业务如何创造、交付与捕获价值。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "平台战略与网络效应",
                "body": "理解平台为什么会赢家通吃，以及网络效应如何形成战略壁垒。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI-Native 商业模式：从卖产品到卖智能",
                "body": "理解 AI 时代才可能成立的新商业模式，以及从卖产品到卖智能的迁移。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-07.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "理解平台为什么会赢家通吃，以及网络效应如何形成战略壁垒。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "平台的本质是连接多边",
                "body": "平台不是简单卖产品，而是让供给侧和需求侧持续互动，并从中形成更强的网络价值。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "网络效应决定护城河强弱",
                "body": "用户越多，平台对其他用户越有价值，这种正反馈才是平台最核心的战略壁垒。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "冷启动是平台最大难点",
                "body": "没有供给就没有需求，没有需求也吸引不到供给，平台能不能起来，往往卡在这一关。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 可以帮你跨过冷启动",
                "body": "AI 能先补上一部分供给或服务能力，让平台更快形成初始体验，再进入真正的网络效应。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 6/14", "建议下一节：AI-Native 商业模式：从卖产品到卖智能", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-07.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-06",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson6",
    audioSource: './assets/audio/strategy-ep06-platform-strategy.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep06-platform-strategy.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep06-platform-strategy/slide_01.png",
            "label": "平台战略与网络效应",
            "caption": "这一节会帮助你系统理解：平台战略与网络效应"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_03.png",
            "label": "经典框架",
            "caption": "每多一个用户，微信对所有其他用户就更有价值。 这就是网络效应。"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_04.png",
            "label": "关键判断",
            "caption": "它比传统的网络效应更加强大。 为什么？"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "讲一个很重要的战略概念：平台的冷启动问题。 这是所有平台都会面临的一个鸡和蛋的问题。"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_06.png",
            "label": "回到你的企业",
            "caption": "你可以先提供AI设计能力，让客户先用起来，然后再引入真人设计师做高端服务。 这就是AI对平台战略的一个重大创新：AI可以帮你解决冷启动问题。"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_07.png",
            "label": "风险与提醒",
            "caption": "但如果你没有网络效应，你就不是平台，你的估值模型和增长逻辑就不应该按平台来套。 好，今天的思考题。"
        },
        {
            "file": "strategy-ep06-platform-strategy/slide_08.png",
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
            "end": 3.58,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.58,
            "end": 6.42,
            "text": "今天我们来聊一个非常重要的商业现象："
        },
        {
            "start": 6.42,
            "end": 9.44,
            "text": "为什么有些公司能赢家通吃？"
        },
        {
            "start": 9.44,
            "end": 13.86,
            "text": "淘宝、微信、Uber、Airbnb，这些公司有什么共同点？"
        },
        {
            "start": 13.86,
            "end": 18.0,
            "text": "答案是：它们都是平台，而且都享有网络效应。"
        },
        {
            "start": 18.0,
            "end": 19.44,
            "text": "什么是平台？"
        },
        {
            "start": 19.82,
            "end": 21.4,
            "text": "传统企业是管道模式。"
        },
        {
            "start": 21.4,
            "end": 23.96,
            "text": "你生产一个产品，卖给客户。"
        },
        {
            "start": 23.96,
            "end": 26.12,
            "text": "价值是单向流动的。"
        },
        {
            "start": 26.12,
            "end": 27.02,
            "text": "平台不一样。"
        },
        {
            "start": 27.18,
            "end": 29.98,
            "text": "平台不生产产品，它连接两方甚至多方。"
        },
        {
            "start": 29.98,
            "end": 31.76,
            "text": "淘宝连接买家和卖家。"
        },
        {
            "start": 31.76,
            "end": 33.74,
            "text": "滴滴连接乘客和司机。"
        },
        {
            "start": 33.74,
            "end": 35.76,
            "text": "YouTube连接观众和创作者。"
        },
        {
            "start": 35.76,
            "end": 39.58,
            "text": "平台创造价值的方式不是生产，而是促成交易和互动。"
        },
        {
            "start": 39.58,
            "end": 41.12,
            "text": "那什么是网络效应？"
        },
        {
            "start": 41.12,
            "end": 43.84,
            "text": "网络效应就是：使用你产品的人越多，"
        },
        {
            "start": 43.84,
            "end": 46.18,
            "text": "你的产品对每个人就越有价值。"
        },
        {
            "start": 46.18,
            "end": 48.2,
            "text": "微信是最典型的例子。"
        },
        {
            "start": 48.2,
            "end": 49.58,
            "text": "微信好不好用？"
        },
        {
            "start": 49.76,
            "end": 51.8,
            "text": "取决于你的朋友是不是都在上面。"
        },
        {
            "start": 51.8,
            "end": 54.02,
            "text": "如果你所有的朋友、同事、"
        },
        {
            "start": 54.02,
            "end": 56.64,
            "text": "客户都用微信，你就不可能不用。"
        },
        {
            "start": 56.64,
            "end": 60.58,
            "text": "每多一个用户，微信对所有其他用户就更有价值。"
        },
        {
            "start": 60.58,
            "end": 62.06,
            "text": "这就是网络效应。"
        },
        {
            "start": 62.06,
            "end": 63.84,
            "text": "网络效应有两种。"
        },
        {
            "start": 63.84,
            "end": 68.1,
            "text": "同侧网络效应：用户越多，对同类用户越有价值。"
        },
        {
            "start": 68.1,
            "end": 69.14,
            "text": "比如微信。"
        },
        {
            "start": 69.56,
            "end": 73.92,
            "text": "跨侧网络效应：一侧用户越多，对另一侧用户越有价值。"
        },
        {
            "start": 73.92,
            "end": 77.32,
            "text": "比如淘宝，卖家越多，买家选择越多。"
        },
        {
            "start": 77.32,
            "end": 79.68,
            "text": "买家越多，卖家越愿意来。"
        },
        {
            "start": 79.68,
            "end": 81.86,
            "text": "网络效应为什么如此强大？"
        },
        {
            "start": 81.86,
            "end": 85.5,
            "text": "因为它会形成正反馈循环，也就是飞轮效应。"
        },
        {
            "start": 85.5,
            "end": 89.98,
            "text": "用户越多 → 价值越大 → 吸引更多用户 → 价值更大。"
        },
        {
            "start": 89.98,
            "end": 93.7,
            "text": "这个飞轮一旦转起来，后来者几乎不可能追上。"
        },
        {
            "start": 93.7,
            "end": 96.76,
            "text": "这就是为什么平台公司经常赢家通吃。"
        },
        {
            "start": 96.76,
            "end": 99.98,
            "text": "好，现在来聊AI时代的平台有什么不一样。"
        },
        {
            "start": 99.98,
            "end": 104.9,
            "text": "传统平台的飞轮是：更多用户 → 更多交易 → 更多用户。"
        },
        {
            "start": 104.9,
            "end": 106.88,
            "text": "AI时代的平台多了一层："
        },
        {
            "start": 106.88,
            "end": 112.98,
            "text": "更多用户 → 更多数据 → 更好的AI → 更好的体验 → 更多用户。"
        },
        {
            "start": 112.98,
            "end": 114.82,
            "text": "这就是AI数据飞轮。"
        },
        {
            "start": 114.82,
            "end": 117.34,
            "text": "它比传统的网络效应更加强大。"
        },
        {
            "start": 117.34,
            "end": 117.9,
            "text": "为什么？"
        },
        {
            "start": 117.9,
            "end": 120.48,
            "text": "因为传统的网络效应有一个天花板。"
        },
        {
            "start": 120.48,
            "end": 123.38,
            "text": "比如说淘宝，当卖家数量到了一定程度，"
        },
        {
            "start": 123.38,
            "end": 126.92,
            "text": "再多一个卖家对买家的边际价值其实很小了。"
        },
        {
            "start": 126.92,
            "end": 128.6,
            "text": "但AI数据飞轮不太一样。"
        },
        {
            "start": 128.6,
            "end": 131.94,
            "text": "更多的用户行为数据让AI模型持续改进。"
        },
        {
            "start": 131.94,
            "end": 134.62,
            "text": "模型越好，推荐越准，体验越好。"
        },
        {
            "start": 134.62,
            "end": 137.64,
            "text": "这个改进是持续的、复合增长的。"
        },
        {
            "start": 137.64,
            "end": 140.76,
            "text": "TikTok就是AI数据飞轮的典型案例。"
        },
        {
            "start": 140.76,
            "end": 143.42,
            "text": "每个用户的每一次滑动、每一次停留、"
        },
        {
            "start": 143.58,
            "end": 146.22,
            "text": "每一次点赞，都在喂给推荐算法。"
        },
        {
            "start": 146.22,
            "end": 150.44,
            "text": "算法越准，用户越上瘾，用得越久，产生越多数据。"
        },
        {
            "start": 150.44,
            "end": 152.28,
            "text": "这个飞轮转得越来越快。"
        },
        {
            "start": 152.28,
            "end": 157.18,
            "text": "所以TikTok能在短短几年内从零做到全球十几亿用户。"
        },
        {
            "start": 157.18,
            "end": 159.62,
            "text": "不是因为它的内容比YouTube好，"
        },
        {
            "start": 159.62,
            "end": 164.94,
            "text": "而是因为它的AI数据飞轮让每个用户的首页都高度个性化。"
        },
        {
            "start": 164.94,
            "end": 169.6,
            "text": "你打开TikTok看到的内容，跟你旁边的人看到的完全不同。"
        },
        {
            "start": 169.6,
            "end": 172.72,
            "text": "这种个性化体验让人很难离开。"
        },
        {
            "start": 172.72,
            "end": 176.5,
            "text": "讲一个很重要的战略概念：平台的冷启动问题。"
        },
        {
            "start": 176.5,
            "end": 180.08,
            "text": "这是所有平台都会面临的一个鸡和蛋的问题。"
        },
        {
            "start": 180.08,
            "end": 184.32,
            "text": "买家不来是因为没有卖家，卖家不来是因为没有买家。"
        },
        {
            "start": 184.32,
            "end": 185.26,
            "text": "怎么打破？"
        },
        {
            "start": 186.78,
            "end": 188.64,
            "text": "传统的解法有几种。"
        },
        {
            "start": 188.64,
            "end": 193.16,
            "text": "补贴一侧用户，比如滴滴早期疯狂补贴司机和乘客。"
        },
        {
            "start": 193.72,
            "end": 195.6,
            "text": "先做工具再做平台，"
        },
        {
            "start": 195.6,
            "end": 198.48,
            "text": "比如美图秀秀先是一个修图工具，"
        },
        {
            "start": 198.48,
            "end": 200.94,
            "text": "积累了用户之后再变成社区。"
        },
        {
            "start": 200.94,
            "end": 206.7,
            "text": "从一个小市场切入，比如Facebook先只做哈佛大学的校园社交。"
        },
        {
            "start": 206.7,
            "end": 211.76,
            "text": "AI时代有一个新的解法：用AI替代冷启动中缺失的一侧。"
        },
        {
            "start": 211.76,
            "end": 212.66,
            "text": "什么意思？"
        },
        {
            "start": 212.66,
            "end": 215.32,
            "text": "比如说你做一个知识问答平台，"
        },
        {
            "start": 215.32,
            "end": 218.22,
            "text": "冷启动的时候没有专家来回答问题。"
        },
        {
            "start": 218.22,
            "end": 220.86,
            "text": "以前你可能需要花很多钱请专家来。"
        },
        {
            "start": 220.86,
            "end": 223.12,
            "text": "但现在你可以先用AI来回答，"
        },
        {
            "start": 223.12,
            "end": 225.94,
            "text": "保证新用户来了能得到还不错的体验。"
        },
        {
            "start": 225.94,
            "end": 228.44,
            "text": "等平台起来了、真人专家进来了，"
        },
        {
            "start": 228.44,
            "end": 230.62,
            "text": "再逐步替换或者人机混合。"
        },
        {
            "start": 230.62,
            "end": 235.24,
            "text": "再比如说你做一个设计师平台，早期没有设计师怎么办？"
        },
        {
            "start": 235.24,
            "end": 237.28,
            "text": "你可以先提供AI设计能力，"
        },
        {
            "start": 237.28,
            "end": 238.96,
            "text": "让客户先用起来，"
        },
        {
            "start": 238.96,
            "end": 241.62,
            "text": "然后再引入真人设计师做高端服务。"
        },
        {
            "start": 241.62,
            "end": 244.72,
            "text": "这就是AI对平台战略的一个重大创新："
        },
        {
            "start": 244.72,
            "end": 246.98,
            "text": "AI可以帮你解决冷启动问题。"
        },
        {
            "start": 246.98,
            "end": 251.62,
            "text": "最后我想讲一个很关键的战略判断：你该不该做平台？"
        },
        {
            "start": 251.62,
            "end": 254.28,
            "text": "不是所有的业务都适合做平台。"
        },
        {
            "start": 254.28,
            "end": 256.46,
            "text": "平台战略有几个前提条件。"
        },
        {
            "start": 256.46,
            "end": 259.8,
            "text": "第一，你的行业里存在明确的多方需求。"
        },
        {
            "start": 259.8,
            "end": 264.14,
            "text": "有供给方和需求方，而且他们有直接匹配的需求。"
        },
        {
            "start": 264.14,
            "end": 267.14,
            "text": "第二，中间有信息不对称或者交易摩擦。"
        },
        {
            "start": 267.14,
            "end": 269.76,
            "text": "平台的价值就在于减少这种摩擦。"
        },
        {
            "start": 269.76,
            "end": 274.4,
            "text": "如果供需双方自己就能很容易找到彼此，平台就没有价值。"
        },
        {
            "start": 274.4,
            "end": 277.98,
            "text": "第三，你能够建立网络效应或者数据飞轮。"
        },
        {
            "start": 277.98,
            "end": 281.22,
            "text": "如果用户越多但产品并不会变得更好，"
        },
        {
            "start": 281.22,
            "end": 283.86,
            "text": "那就不是平台，就是一个普通的中介。"
        },
        {
            "start": 284.6,
            "end": 286.8,
            "text": "很多公司犯的一个错误是："
        },
        {
            "start": 286.8,
            "end": 288.68,
            "text": "明明是一个管道型的业务，"
        },
        {
            "start": 288.68,
            "end": 290.2,
            "text": "非要包装成平台。"
        },
        {
            "start": 290.2,
            "end": 293.52,
            "text": "但如果你没有网络效应，你就不是平台，"
        },
        {
            "start": 293.52,
            "end": 297.76,
            "text": "你的估值模型和增长逻辑就不应该按平台来套。"
        },
        {
            "start": 297.76,
            "end": 299.58,
            "text": "好，今天的思考题。"
        },
        {
            "start": 299.58,
            "end": 301.92,
            "text": "第一，你的业务有网络效应吗？"
        },
        {
            "start": 301.92,
            "end": 305.36,
            "text": "用户越多，产品对其他用户越有价值吗？"
        },
        {
            "start": 305.36,
            "end": 307.9,
            "text": "第二，你能不能建立AI数据飞轮？"
        },
        {
            "start": 307.9,
            "end": 311.58,
            "text": "用户数据能不能让你的产品持续变得更好？"
        },
        {
            "start": 311.58,
            "end": 311.94,
            "text": "第三，"
        },
        {
            "start": 312.18,
            "end": 315.32,
            "text": "如果你想做平台但面临冷启动问题，"
        },
        {
            "start": 315.32,
            "end": 317.02,
            "text": "AI能不能帮你解决？"
        },
        {
            "start": 317.02,
            "end": 318.26,
            "text": "总结一下。"
        },
        {
            "start": 318.26,
            "end": 321.18,
            "text": "第一，平台连接多方、促成交易。"
        },
        {
            "start": 321.18,
            "end": 325.16,
            "text": "网络效应让平台越大越强，形成赢家通吃。"
        },
        {
            "start": 325.16,
            "end": 328.38,
            "text": "第二，AI时代的平台多了一层数据飞轮："
        },
        {
            "start": 328.38,
            "end": 332.62,
            "text": "更多用户 → 更多数据 → 更好的AI → 更好的体验。"
        },
        {
            "start": 332.62,
            "end": 335.06,
            "text": "这比传统网络效应更强大。"
        },
        {
            "start": 335.06,
            "end": 338.12,
            "text": "第三，AI可以帮平台解决冷启动问题，"
        },
        {
            "start": 338.12,
            "end": 341.0,
            "text": "用AI替代冷启动阶段缺失的一侧。"
        },
        {
            "start": 341.0,
            "end": 344.16,
            "text": "第四，不是所有业务都适合做平台。"
        },
        {
            "start": 344.16,
            "end": 347.5,
            "text": "没有网络效应的业务，不要硬套平台模式。"
        },
        {
            "start": 347.5,
            "end": 350.96,
            "text": "下一期更有意思，我们聊AI-Native商业模式。"
        },
        {
            "start": 350.96,
            "end": 355.24,
            "text": "从卖产品到卖智能，AI催生了哪些全新的赚钱方式。"
        },
        {
            "start": 355.24,
            "end": 356.56,
            "text": "好，今天就到这里。"
        },
        {
            "start": 356.56,
            "end": 357.88,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.58,
        "index": 0
    },
    {
        "start": 3.58,
        "end": 56.64,
        "index": 1
    },
    {
        "start": 56.64,
        "end": 114.82,
        "index": 2
    },
    {
        "start": 114.82,
        "end": 172.72,
        "index": 3
    },
    {
        "start": 172.72,
        "end": 235.24,
        "index": 4
    },
    {
        "start": 235.24,
        "end": 246.98,
        "index": 5
    },
    {
        "start": 246.98,
        "end": 317.02,
        "index": 6
    },
    {
        "start": 317.02,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-07.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "理解平台为什么会赢家通吃，以及网络效应如何形成战略壁垒。"
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
      submitHref: "./lesson-strategy-07.html?entry={entry}",
      secondaryHref: "./lesson-strategy-07.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-06",
      coachSource: "./ai-coach.html?source=lesson-strategy-06"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于平台战略与网络效应的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "平台战略与网络效应", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-07.html" + '?entry=' + entryMode;
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
