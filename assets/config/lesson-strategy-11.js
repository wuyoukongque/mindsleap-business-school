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

  window.MindsLeapConfigs.lessons.strategy11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第11课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第11课：并购与战略联盟：AI 时代的买 vs 建 vs 合作",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep11-ma-and-alliances/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：并购与战略联盟：AI 时代的买 vs 建 vs 合作",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-11",
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
        secondaryHref: "./lesson-strategy-12.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 10,
                "title": "安索夫矩阵：四种增长路径怎么选",
                "body": "用安索夫矩阵看清市场、产品与多元化的不同风险。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "并购与战略联盟：AI 时代的买 vs 建 vs 合作",
                "body": "面对新能力需求时，判断自己做、买下来还是合作。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：Tesla 的 AI 战略棋局",
                "body": "用前面学过的战略工具，系统拆解 Tesla 的战略选择与 AI 布局。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-12.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "面对新能力需求时，判断自己做、买下来还是合作。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "买、建、合作，本质是速度与控制权权衡",
                "body": "当企业缺少关键能力时，真正要判断的是：你更需要速度、控制权，还是更低风险。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "并购不是万能捷径",
                "body": "并购常常比看上去更难，整合失败、文化冲突和协同落空，都是高频风险。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "能力越核心，越要谨慎外包",
                "body": "如果一项能力决定你的长期优势，只靠合作方往往不够，最终仍要考虑自建或更深控制。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代更容易先买后建",
                "body": "很多 AI 能力可以先通过购买成熟方案快速试水，验证价值后再决定要不要自建。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 11/14", "建议下一节：案例：Tesla 的 AI 战略棋局", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-12.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-11",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson11",
    audioSource: './assets/audio/strategy-ep11-ma-and-alliances.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep11-ma-and-alliances.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep11-ma-and-alliances/slide_01.png",
            "label": "并购与战略联盟：AI 时代的买 vs 建 vs 合作",
            "caption": "这一节会帮助你系统理解：并购与战略联盟：AI 时代的买 vs 建 vs 合作"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_03.png",
            "label": "经典框架",
            "caption": "据统计，超过50%的并购最终被认为是失败的，没有达到预期的协同效应。 合作的好处是：灵活，投入可控。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_04.png",
            "label": "关键判断",
            "caption": "比如说你做医疗AI，医疗领域的专业术语和知识，通用模型可能不够精确。 这时候你可能需要基于开源模型做微调，甚至自建。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "这种情况下，直接买一个成熟的AI质检解决方案通常是最好的选择。 不需要自建，因为这不是你的核心竞争力。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_06.png",
            "label": "回到你的企业",
            "caption": "跟OpenAI、Anthropic、百度文心这些大模型厂商合作，在它们的基础模型上构建你的应用。 这是目前最常见的AI合作形式。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_07.png",
            "label": "风险与提醒",
            "caption": "如果合作过程中你贡献了大量的行业数据帮AI模型改进，你要确保自己也能从中获益。 不要白白给大厂贡献了数据，结果它反过来跟你竞争。"
        },
        {
            "file": "strategy-ep11-ma-and-alliances/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.48,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.86,
            "end": 3.54,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.54,
            "end": 6.92,
            "text": "今天我们聊一个战略增长的重要话题："
        },
        {
            "start": 6.92,
            "end": 9.82,
            "text": "当你需要一种新能力的时候，你是买、"
        },
        {
            "start": 9.82,
            "end": 10.74,
            "text": "建还是合作？"
        },
        {
            "start": 10.74,
            "end": 15.08,
            "text": "特别是在AI时代，这个决策比以往更加频繁和关键。"
        },
        {
            "start": 15.08,
            "end": 16.6,
            "text": "先说经典框架。"
        },
        {
            "start": 16.66,
            "end": 20.72,
            "text": "当企业需要某种新能力时，通常有三种选择。"
        },
        {
            "start": 20.72,
            "end": 22.34,
            "text": "第一，自建，Build。"
        },
        {
            "start": 22.34,
            "end": 24.98,
            "text": "自己组团队、自己开发、自己积累。"
        },
        {
            "start": 24.98,
            "end": 26.7,
            "text": "第二，收购，Buy。"
        },
        {
            "start": 26.7,
            "end": 28.6,
            "text": "直接买一家有这个能力的公司。"
        },
        {
            "start": 28.6,
            "end": 30.3,
            "text": "第三，合作，Partner。"
        },
        {
            "start": 30.3,
            "end": 33.3,
            "text": "跟有这个能力的公司结成战略联盟。"
        },
        {
            "start": 33.3,
            "end": 35.4,
            "text": "每种选择都有优缺点。"
        },
        {
            "start": 35.4,
            "end": 40.48,
            "text": "自建的好处是：完全自主可控，能力沉淀在自己公司里面。"
        },
        {
            "start": 40.48,
            "end": 43.42,
            "text": "但缺点是：慢，而且成功率不确定。"
        },
        {
            "start": 43.42,
            "end": 45.98,
            "text": "你可能花了一年时间建了一个团队，"
        },
        {
            "start": 46.34,
            "end": 48.26,
            "text": "最后发现做出来的东西不行。"
        },
        {
            "start": 48.26,
            "end": 49.96,
            "text": "收购的好处是：快。"
        },
        {
            "start": 50.14,
            "end": 52.04,
            "text": "一夜之间你就拥有了这个能力。"
        },
        {
            "start": 52.04,
            "end": 54.82,
            "text": "但缺点是：贵，而且整合风险高。"
        },
        {
            "start": 54.82,
            "end": 55.5,
            "text": "据统计，"
        },
        {
            "start": 55.5,
            "end": 58.84,
            "text": "超过50%的并购最终被认为是失败的，"
        },
        {
            "start": 58.84,
            "end": 61.0,
            "text": "没有达到预期的协同效应。"
        },
        {
            "start": 61.0,
            "end": 64.22,
            "text": "合作的好处是：灵活，投入可控。"
        },
        {
            "start": 64.22,
            "end": 65.66,
            "text": "但缺点是："
        },
        {
            "start": 65.66,
            "end": 68.42,
            "text": "你对关键能力没有完全的控制权，"
        },
        {
            "start": 68.42,
            "end": 71.38000000000002,
            "text": "合作伙伴可能有自己的agenda。"
        },
        {
            "start": 71.38000000000002,
            "end": 74.44,
            "text": "好，现在把这个框架放到AI的语境下。"
        },
        {
            "start": 74.44,
            "end": 79.68,
            "text": "在AI时代，\"买vs建vs合作\"这个决策变得更频繁了。"
        },
        {
            "start": 79.68,
            "end": 79.94,
            "text": "为什么？"
        },
        {
            "start": 80.24,
            "end": 84.54,
            "text": "因为几乎每个公司都需要AI能力，但不是每个公司都有。"
        },
        {
            "start": 84.54,
            "end": 86.4,
            "text": "我来讲几个具体的场景。"
        },
        {
            "start": 86.82,
            "end": 90.3,
            "text": "场景一：你需要在产品里加入AI功能。"
        },
        {
            "start": 90.3,
            "end": 94.5,
            "text": "比如说你做一个客服系统，想加入AI自动回复的功能。"
        },
        {
            "start": 94.5,
            "end": 97.24,
            "text": "这种情况下，大多数公司应该选合作，"
        },
        {
            "start": 97.24,
            "end": 99.36,
            "text": "也就是调用大模型的API。"
        },
        {
            "start": 99.36,
            "end": 102.44,
            "text": "你不需要自己训练一个语言模型，那太重了。"
        },
        {
            "start": 102.44,
            "end": 106.98,
            "text": "直接调用OpenAI、Anthropic或者国内大模型厂商的API就行了。"
        },
        {
            "start": 106.98,
            "end": 109.52,
            "text": "自建模型在什么时候才值得？"
        },
        {
            "start": 109.52,
            "end": 111.38,
            "text": "当你有非常独特的数据，"
        },
        {
            "start": 111.38,
            "end": 115.3,
            "text": "而且通用模型在你的场景下表现不够好的时候。"
        },
        {
            "start": 115.3,
            "end": 117.12,
            "text": "比如说你做医疗AI，"
        },
        {
            "start": 117.12,
            "end": 119.6,
            "text": "医疗领域的专业术语和知识，"
        },
        {
            "start": 119.6,
            "end": 121.52,
            "text": "通用模型可能不够精确。"
        },
        {
            "start": 121.52,
            "end": 125.9,
            "text": "这时候你可能需要基于开源模型做微调，甚至自建。"
        },
        {
            "start": 125.9,
            "end": 129.84,
            "text": "场景二：你需要一个AI团队来推动公司的AI战略。"
        },
        {
            "start": 129.84,
            "end": 132.74,
            "text": "这个是很多传统企业面临的问题。"
        },
        {
            "start": 132.74,
            "end": 136.56,
            "text": "你知道需要做AI转型，但公司里没有AI人才。"
        },
        {
            "start": 136.56,
            "end": 139.78,
            "text": "如果你刚刚开始探索AI，建议先合作。"
        },
        {
            "start": 139.78,
            "end": 144.22,
            "text": "找一个AI咨询公司或者服务商帮你做几个试点项目。"
        },
        {
            "start": 144.22,
            "end": 148.84,
            "text": "验证了AI在你的业务里确实有价值之后，再开始自建团队。"
        },
        {
            "start": 149.34,
            "end": 151.0,
            "text": "如果你已经验证了价值，"
        },
        {
            "start": 151.0,
            "end": 152.24,
            "text": "需要大规模落地，"
        },
        {
            "start": 152.24,
            "end": 154.68,
            "text": "可以考虑收购一个小的AI团队。"
        },
        {
            "start": 154.68,
            "end": 156.8,
            "text": "注意，我说的是小团队。"
        },
        {
            "start": 156.8,
            "end": 160.76,
            "text": "很多大公司收购AI创业公司时犯的错误是："
        },
        {
            "start": 160.76,
            "end": 162.66,
            "text": "花了很多钱买了一个团队，"
        },
        {
            "start": 162.66,
            "end": 165.44,
            "text": "但整合之后核心人才跑了。"
        },
        {
            "start": 165.44,
            "end": 167.92,
            "text": "AI人才是最不缺选择的一群人。"
        },
        {
            "start": 167.92,
            "end": 171.9,
            "text": "场景三：你需要获取某个垂直领域的AI应用。"
        },
        {
            "start": 171.9,
            "end": 175.94,
            "text": "比如说你是一个制造企业，需要AI质检能力。"
        },
        {
            "start": 175.94,
            "end": 177.2,
            "text": "这种情况下，"
        },
        {
            "start": 177.2,
            "end": 181.44,
            "text": "直接买一个成熟的AI质检解决方案通常是最好的选择。"
        },
        {
            "start": 181.44,
            "end": 184.24,
            "text": "不需要自建，因为这不是你的核心竞争力。"
        },
        {
            "start": 184.24,
            "end": 188.16,
            "text": "也不需要收购，因为市场上有成熟的供应商。"
        },
        {
            "start": 188.16,
            "end": 190.92,
            "text": "好，我给你一个简单的决策框架。"
        },
        {
            "start": 190.92,
            "end": 192.42,
            "text": "问自己三个问题。"
        },
        {
            "start": 192.42,
            "end": 195.88,
            "text": "第一，这个AI能力是不是你的核心竞争力？"
        },
        {
            "start": 195.88,
            "end": 200.46,
            "text": "如果是，长期来看应该自建，把能力沉淀在公司内部。"
        },
        {
            "start": 200.46,
            "end": 204.18,
            "text": "如果不是，用合作或采购的方式就够了。"
        },
        {
            "start": 204.18,
            "end": 206.16,
            "text": "第二，你需要多快拿到这个能力？"
        },
        {
            "start": 206.16,
            "end": 209.38,
            "text": "如果时间紧迫，竞争窗口在关闭，考虑收购。"
        },
        {
            "start": 209.38,
            "end": 211.54,
            "text": "如果有时间，自建更稳妥。"
        },
        {
            "start": 211.54,
            "end": 213.62,
            "text": "第三，你的资金状况怎么样？"
        },
        {
            "start": 213.62,
            "end": 216.88,
            "text": "收购需要大量资金，自建需要持续投入，"
        },
        {
            "start": 216.88,
            "end": 219.56,
            "text": "合作最省钱但灵活性也最高。"
        },
        {
            "start": 219.56,
            "end": 222.76,
            "text": "核心竞争力的AI能力 → 长期自建。"
        },
        {
            "start": 222.76,
            "end": 224.94,
            "text": "非核心但紧急的 → 收购或合作。"
        },
        {
            "start": 225.02,
            "end": 227.88,
            "text": "非核心不紧急的 → 直接采购成熟方案。"
        },
        {
            "start": 229.22,
            "end": 233.42,
            "text": "再聊一下AI时代的战略联盟形式，跟传统的有些不一样。"
        },
        {
            "start": 233.42,
            "end": 235.64,
            "text": "第一种：大模型合作。"
        },
        {
            "start": 235.64,
            "end": 237.6799999999999,
            "text": "跟DeepSeek、通义千问、"
        },
        {
            "start": 237.68,
            "end": 240.42,
            "text": "百度文心这些大模型厂商合作，"
        },
        {
            "start": 240.42,
            "end": 243.56,
            "text": "在它们的基础模型上构建你的应用。"
        },
        {
            "start": 243.56,
            "end": 246.58,
            "text": "这是目前最常见的AI合作形式。"
        },
        {
            "start": 246.58,
            "end": 248.04,
            "text": "第二种：数据联盟。"
        },
        {
            "start": 248.04,
            "end": 251.9,
            "text": "跟其他公司共享数据来训练更好的AI模型。"
        },
        {
            "start": 251.9,
            "end": 253.74,
            "text": "单个公司的数据可能不够，"
        },
        {
            "start": 253.74,
            "end": 256.26,
            "text": "但几个公司的数据加在一起就够了。"
        },
        {
            "start": 256.26,
            "end": 259.08,
            "text": "当然，这涉及到数据隐私和安全的问题，"
        },
        {
            "start": 259.08,
            "end": 261.32,
            "text": "需要有合适的技术和法律框架。"
        },
        {
            "start": 261.32,
            "end": 263.24,
            "text": "第三种：AI生态合作。"
        },
        {
            "start": 263.24,
            "end": 265.34,
            "text": "加入某个AI平台的生态，"
        },
        {
            "start": 265.34,
            "end": 268.26,
            "text": "比如在Salesforce的AI平台上开发插件，"
        },
        {
            "start": 268.26,
            "end": 270.62,
            "text": "借助它的用户基数和分发能力。"
        },
        {
            "start": 270.62,
            "end": 273.96,
            "text": "选择哪种合作形式，关键看两点。"
        },
        {
            "start": 273.96,
            "end": 275.52,
            "text": "一是你的议价能力。"
        },
        {
            "start": 275.52,
            "end": 278.72,
            "text": "如果你是一个小公司跟大模型厂商合作，"
        },
        {
            "start": 278.72,
            "end": 280.36,
            "text": "你的议价能力很弱。"
        },
        {
            "start": 280.36,
            "end": 284.56,
            "text": "它改了API你就得跟着改，它涨了价你就得多付钱。"
        },
        {
            "start": 284.56,
            "end": 287.62,
            "text": "所以你要做好多元化供应商的准备。"
        },
        {
            "start": 287.62,
            "end": 289.54,
            "text": "二是你的数据资产。"
        },
        {
            "start": 289.54,
            "end": 294.06,
            "text": "如果合作过程中你贡献了大量的行业数据帮AI模型改进，"
        },
        {
            "start": 294.06,
            "end": 296.43999999999994,
            "text": "你要确保自己也能从中获益。"
        },
        {
            "start": 296.44,
            "end": 300.68,
            "text": "不要白白给大厂贡献了数据，结果它反过来跟你竞争。"
        },
        {
            "start": 300.68,
            "end": 302.52,
            "text": "好，今天的思考题。"
        },
        {
            "start": 302.52,
            "end": 306.66,
            "text": "第一，列出你公司目前需要但还没有的AI能力。"
        },
        {
            "start": 306.66,
            "end": 309.46,
            "text": "每一项，你打算买、建还是合作？"
        },
        {
            "start": 309.46,
            "end": 312.84,
            "text": "第二，你目前最关键的AI合作伙伴是谁？"
        },
        {
            "start": 312.84,
            "end": 314.78,
            "text": "你对它的依赖度有多高？"
        },
        {
            "start": 314.78,
            "end": 316.36,
            "text": "有没有备选方案？"
        },
        {
            "start": 316.36,
            "end": 320.32,
            "text": "第三，你的AI能力有没有可能成为你的核心竞争力？"
        },
        {
            "start": 320.32,
            "end": 322.88,
            "text": "如果是，你是不是应该开始自建？"
        },
        {
            "start": 322.88,
            "end": 324.12,
            "text": "总结一下。"
        },
        {
            "start": 324.12,
            "end": 328.22,
            "text": "第一，获取新能力有三种选择：自建、收购、合作。"
        },
        {
            "start": 328.22,
            "end": 330.56,
            "text": "AI时代这个决策更频繁了。"
        },
        {
            "start": 330.56,
            "end": 330.88,
            "text": "第二，"
        },
        {
            "start": 331.14,
            "end": 333.92,
            "text": "核心竞争力相关的AI能力应该自建，"
        },
        {
            "start": 333.92,
            "end": 336.26,
            "text": "非核心的优先合作或采购。"
        },
        {
            "start": 336.26,
            "end": 339.68,
            "text": "第三，AI时代的战略联盟有新形式："
        },
        {
            "start": 339.68,
            "end": 342.62,
            "text": "大模型合作、数据联盟、AI生态合作。"
        },
        {
            "start": 342.62,
            "end": 346.84,
            "text": "第四，注意AI供应商的议价能力和数据资产的保护。"
        },
        {
            "start": 346.84,
            "end": 349.24,
            "text": "不要过度依赖单一供应商。"
        },
        {
            "start": 349.24,
            "end": 351.32,
            "text": "好，战略增长三期讲完了。"
        },
        {
            "start": 351.32,
            "end": 354.28,
            "text": "从下一期开始我们进入战略实战案例。"
        },
        {
            "start": 354.28,
            "end": 355.58,
            "text": "第一个案例是Tesla。"
        },
        {
            "start": 355.58,
            "end": 360.64,
            "text": "我们来看看Elon Musk是怎么用AI构建Tesla的战略棋局的。"
        },
        {
            "start": 360.64,
            "end": 361.46,
            "text": "非常精彩。"
        },
        {
            "start": 361.46,
            "end": 362.98,
            "text": "好，今天就到这里。"
        },
        {
            "start": 362.98,
            "end": 364.32,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.54,
        "index": 0
    },
    {
        "start": 3.54,
        "end": 55.5,
        "index": 1
    },
    {
        "start": 55.5,
        "end": 115.3,
        "index": 2
    },
    {
        "start": 115.3,
        "end": 177.2,
        "index": 3
    },
    {
        "start": 177.2,
        "end": 235.64,
        "index": 4
    },
    {
        "start": 235.64,
        "end": 289.54,
        "index": 5
    },
    {
        "start": 289.54,
        "end": 322.88,
        "index": 6
    },
    {
        "start": 322.88,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-12.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "面对新能力需求时，判断自己做、买下来还是合作。"
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
      submitHref: "./lesson-strategy-12.html?entry={entry}",
      secondaryHref: "./lesson-strategy-12.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-11",
      coachSource: "./ai-coach.html?source=lesson-strategy-11"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于并购与战略联盟：AI 时代的买 vs 建 vs 合作的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "并购与战略联盟：AI 时代的买 vs 建 vs 合作", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-12.html" + '?entry=' + entryMode;
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
