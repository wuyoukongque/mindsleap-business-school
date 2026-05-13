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

  window.MindsLeapConfigs.lessons.strategy07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第7课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第7课：AI-Native 商业模式：从卖产品到卖智能",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep07-ai-native-business-models/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：AI-Native 商业模式：从卖产品到卖智能",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-7",
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
        secondaryHref: "./lesson-strategy-08.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 6,
                "title": "平台战略与网络效应",
                "body": "理解平台为什么会赢家通吃，以及网络效应如何形成战略壁垒。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI-Native 商业模式：从卖产品到卖智能",
                "body": "理解 AI 时代才可能成立的新商业模式，以及从卖产品到卖智能的迁移。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "订阅经济与 AI 个性化",
                "body": "理解订阅模式为什么成立，以及 AI 个性化如何强化长期价值。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-08.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "理解 AI 时代才可能成立的新商业模式，以及从卖产品到卖智能的迁移。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "AI-Native 不只是加一个 AI 功能",
                "body": "真正的 AI-Native 商业模式，是把 AI 放进价值创造的核心，而不是只做表层提效。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "从卖产品到卖能力",
                "body": "很多 AI 业务不再卖单一工具，而是直接把分析、生成、判断或执行能力交付给客户。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "按效果计费会越来越常见",
                "body": "当 AI 更接近结果交付时，商业模式也会从卖席位、卖软件，转向卖效果和卖产出。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "关键问题是你的数据与工作流在哪里",
                "body": "如果没有数据、场景和持续反馈，很多所谓 AI-Native 模式很快就会被同质化。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 7/14", "建议下一节：订阅经济与 AI 个性化", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-08.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-07",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson7",
    audioSource: './assets/audio/strategy-ep07-ai-native-business-models.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep07-ai-native-business-models.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep07-ai-native-business-models/slide_01.png",
            "label": "AI-Native 商业模式：从卖产品到卖智能",
            "caption": "这一节会帮助你系统理解：AI-Native 商业模式：从卖产品到卖智能"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_03.png",
            "label": "经典框架",
            "caption": "客户不需要自己建AI团队，按需调用你的AI服务就行了。 典型的例子就是OpenAI的API服务。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_04.png",
            "label": "关键判断",
            "caption": "按效果付费的好处是什么？ 客户的采购决策变得非常简单，因为没有风险。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "比如说，Shopify就在往这个方向走。 它不直接卖货，它帮商家用AI做推荐、做客服、做营销。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_06.png",
            "label": "回到你的企业",
            "caption": "一个有vision的创始人，加上一套AI工具链，真的可以做出一个很大的生意。 这对创业者来说是一个巨大的机会。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_07.png",
            "label": "风险与提醒",
            "caption": "当然，这几种模式不是互斥的。 很多成功的AI公司是几种模式的组合。"
        },
        {
            "file": "strategy-ep07-ai-native-business-models/slide_08.png",
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
            "start": 1.56,
            "end": 3.22,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.22,
            "end": 5.62,
            "text": "今天我们聊一个前沿话题："
        },
        {
            "start": 5.62,
            "end": 8.56,
            "text": "AI时代催生了哪些全新的商业模式？"
        },
        {
            "start": 8.56,
            "end": 12.5,
            "text": "不是把AI加到旧模式上，而是AI原生的、"
        },
        {
            "start": 12.5,
            "end": 15.5,
            "text": "只有AI时代才可能存在的商业模式。"
        },
        {
            "start": 15.5,
            "end": 17.38,
            "text": "先说一个大的趋势变化。"
        },
        {
            "start": 17.38,
            "end": 20.82,
            "text": "过去的商业模式核心是卖产品或者卖服务。"
        },
        {
            "start": 20.82,
            "end": 23.64,
            "text": "你造一辆车，卖给客户，收一笔钱。"
        },
        {
            "start": 23.64,
            "end": 27.46,
            "text": "你提供一个咨询服务，按小时或者按项目收费。"
        },
        {
            "start": 27.46,
            "end": 31.42,
            "text": "但AI时代出现了一个新的东西可以卖：智能。"
        },
        {
            "start": 31.42,
            "end": 32.92,
            "text": "什么叫卖智能？"
        },
        {
            "start": 32.92,
            "end": 35.14,
            "text": "就是你卖的不是一个固定的产品，"
        },
        {
            "start": 35.14,
            "end": 38.16,
            "text": "而是一个会学习、会进化的能力。"
        },
        {
            "start": 38.16,
            "end": 41.82,
            "text": "客户用得越多，这个能力就越适应他的需求。"
        },
        {
            "start": 41.82,
            "end": 43.68,
            "text": "这是一个根本性的变化。"
        },
        {
            "start": 43.68,
            "end": 47.16,
            "text": "因为传统产品交付的那一刻，价值就定了。"
        },
        {
            "start": 47.16,
            "end": 50.1,
            "text": "但AI产品交付之后，价值还在持续增长。"
        },
        {
            "start": 50.1,
            "end": 53.5,
            "text": "好，我来具体讲几种AI-Native的商业模式。"
        },
        {
            "start": 53.5,
            "end": 57.14,
            "text": "第一种：AI-as-a-Service，AI即服务。"
        },
        {
            "start": 57.14,
            "end": 59.84,
            "text": "这是目前最常见的AI商业模式。"
        },
        {
            "start": 59.84,
            "end": 64.24,
            "text": "你把AI能力通过API或者SaaS的方式提供给客户。"
        },
        {
            "start": 64.24,
            "end": 69.4,
            "text": "客户不需要自己建AI团队，按需调用你的AI服务就行了。"
        },
        {
            "start": 69.4,
            "end": 72.48,
            "text": "典型的例子就是各大模型厂商的API服务。"
        },
        {
            "start": 72.48,
            "end": 75.18,
            "text": "你调用DeepSeek或者通义千问的接口，按Token付费。"
        },
        {
            "start": 75.18,
            "end": 77.8,
            "text": "还有各种垂直领域的AI服务，"
        },
        {
            "start": 77.8,
            "end": 80.84,
            "text": "比如AI翻译API、AI语音识别API、"
        },
        {
            "start": 80.84,
            "end": 82.38,
            "text": "AI图像生成API。"
        },
        {
            "start": 82.38,
            "end": 84.32,
            "text": "这种模式的关键是什么？"
        },
        {
            "start": 84.32,
            "end": 86.34,
            "text": "规模效应和边际成本。"
        },
        {
            "start": 86.34,
            "end": 88.32,
            "text": "你的AI模型训练好之后，"
        },
        {
            "start": 88.32,
            "end": 92.06,
            "text": "服务一个客户和服务一万个客户的边际成本差别不大。"
        },
        {
            "start": 92.06,
            "end": 94.88,
            "text": "所以用户越多，你的利润率越高。"
        },
        {
            "start": 94.88,
            "end": 97.04,
            "text": "第二种：按效果付费模式。"
        },
        {
            "start": 97.04,
            "end": 101.0,
            "text": "传统的SaaS是按使用量或者按席位收费的。"
        },
        {
            "start": 101.0,
            "end": 103.8,
            "text": "不管你用了有没有效果，每个月都要交钱。"
        },
        {
            "start": 103.8,
            "end": 107.62,
            "text": "但AI催生了一种新的定价方式：按效果付费。"
        },
        {
            "start": 107.62,
            "end": 112.04,
            "text": "你帮客户省了多少钱或者多赚了多少钱，你从中分成。"
        },
        {
            "start": 112.04,
            "end": 115.04,
            "text": "比如说，有一些AI广告投放工具，"
        },
        {
            "start": 115.04,
            "end": 116.58,
            "text": "它不按月费收钱，"
        },
        {
            "start": 116.58,
            "end": 119.28,
            "text": "而是按你广告带来的转化效果收费。"
        },
        {
            "start": 119.28,
            "end": 121.82,
            "text": "你多赚了一万块，它收你两千。"
        },
        {
            "start": 121.82,
            "end": 123.68,
            "text": "你没效果，它不收钱。"
        },
        {
            "start": 123.68,
            "end": 126.8,
            "text": "再比如，有些AI节能系统应用在工厂里面。"
        },
        {
            "start": 126.8,
            "end": 131.34,
            "text": "它不按设备数量收费，而是按实际节省的能源费用来分成。"
        },
        {
            "start": 131.34,
            "end": 133.68,
            "text": "按效果付费的好处是什么？"
        },
        {
            "start": 133.68,
            "end": 137.1,
            "text": "客户的采购决策变得非常简单，因为没有风险。"
        },
        {
            "start": 137.1,
            "end": 138.62,
            "text": "有效果才付钱。"
        },
        {
            "start": 138.62,
            "end": 142.74,
            "text": "这大大降低了客户的决策门槛，也让销售变得更容易。"
        },
        {
            "start": 142.74,
            "end": 144.24,
            "text": "但难点在哪里？"
        },
        {
            "start": 144.24,
            "end": 146.06,
            "text": "你要能够准确衡量效果，"
        },
        {
            "start": 146.06,
            "end": 148.96,
            "text": "而且要对自己的AI能力有足够的信心。"
        },
        {
            "start": 148.96,
            "end": 151.4,
            "text": "第三种：数据飞轮模式。"
        },
        {
            "start": 151.4,
            "end": 153.08,
            "text": "这种模式的核心是："
        },
        {
            "start": 153.08,
            "end": 155.74,
            "text": "你的产品在使用过程中积累数据，"
        },
        {
            "start": 155.74,
            "end": 157.82,
            "text": "数据让产品变得更好，"
        },
        {
            "start": 157.82,
            "end": 161.16,
            "text": "更好的产品吸引更多用户，形成正循环。"
        },
        {
            "start": 161.16,
            "end": 163.76,
            "text": "上一期我们讲了TikTok的推荐飞轮。"
        },
        {
            "start": 163.76,
            "end": 166.84,
            "text": "再举一个不一样的例子：特斯拉的自动驾驶。"
        },
        {
            "start": 166.84,
            "end": 170.94,
            "text": "每一辆特斯拉在路上跑的时候都在收集驾驶数据。"
        },
        {
            "start": 170.94,
            "end": 174.0,
            "text": "这些数据用来训练自动驾驶模型，"
        },
        {
            "start": 174.0,
            "end": 176.8,
            "text": "模型更新后推送给所有车辆。"
        },
        {
            "start": 176.8,
            "end": 179.84,
            "text": "所以特斯拉的车越多，自动驾驶越好。"
        },
        {
            "start": 179.84,
            "end": 182.12,
            "text": "这种模式的壁垒非常深。"
        },
        {
            "start": 182.12,
            "end": 184.6,
            "text": "因为后来者即使技术一样好，"
        },
        {
            "start": 184.6,
            "end": 187.24,
            "text": "它没有数据，模型就训练不出来。"
        },
        {
            "start": 187.24,
            "end": 191.8,
            "text": "而数据是跟时间和用户量挂钩的，这不是花钱能买到的。"
        },
        {
            "start": 191.8,
            "end": 194.32,
            "text": "第四种：AI赋能型平台。"
        },
        {
            "start": 194.32,
            "end": 199.4,
            "text": "就是你搭建一个平台，让其他人在上面用AI创造价值。"
        },
        {
            "start": 199.4,
            "end": 201.7,
            "text": "你不直接服务终端用户，"
        },
        {
            "start": 201.7,
            "end": 205.5,
            "text": "你服务的是用AI服务终端用户的那些人。"
        },
        {
            "start": 205.5,
            "end": 208.38,
            "text": "比如说，Shopify就在往这个方向走。"
        },
        {
            "start": 208.38,
            "end": 213.34,
            "text": "它不直接卖货，它帮商家用AI做推荐、做客服、做营销。"
        },
        {
            "start": 213.34,
            "end": 216.84,
            "text": "商家赚了钱，Shopify收取平台费用。"
        },
        {
            "start": 216.84,
            "end": 219.62,
            "text": "再比如，各种AI Agent平台，"
        },
        {
            "start": 219.62,
            "end": 222.3,
            "text": "让企业可以在上面搭建自己的AI Agent，"
        },
        {
            "start": 222.3,
            "end": 223.44,
            "text": "不需要写代码。"
        },
        {
            "start": 223.44,
            "end": 226.26,
            "text": "平台收订阅费或者按Agent运行次数收费。"
        },
        {
            "start": 226.8,
            "end": 228.8,
            "text": "这种模式的精髓是什么？"
        },
        {
            "start": 228.8,
            "end": 232.46,
            "text": "你不是在卖AI，你是在卖\"用AI的能力\"。"
        },
        {
            "start": 232.46,
            "end": 235.68,
            "text": "就像淘金热里面最赚钱的不是挖金子的人，"
        },
        {
            "start": 235.68,
            "end": 237.5,
            "text": "而是卖铲子的人。"
        },
        {
            "start": 237.5,
            "end": 242.14,
            "text": "第五种模式比较新，我特别想讲一下：AI原生一人公司。"
        },
        {
            "start": 242.14,
            "end": 242.98,
            "text": "什么意思？"
        },
        {
            "start": 242.98,
            "end": 245.14,
            "text": "就是一个人或者两三个人，"
        },
        {
            "start": 245.14,
            "end": 250.04,
            "text": "用AI工具做出以前需要几十人才能做出的产品和服务。"
        },
        {
            "start": 250.04,
            "end": 251.86,
            "text": "Midjourney就是一个经典案例。"
        },
        {
            "start": 251.86,
            "end": 254.2,
            "text": "据说核心团队只有不到十个人，"
        },
        {
            "start": 254.2,
            "end": 256.72,
            "text": "但它的年收入超过了两亿美金。"
        },
        {
            "start": 257.32,
            "end": 259.14,
            "text": "这种模式以前是不可能的。"
        },
        {
            "start": 259.14,
            "end": 261.14,
            "text": "以前你要做一个有影响力的产品，"
        },
        {
            "start": 261.14,
            "end": 263.04,
            "text": "你至少需要一个像样的团队。"
        },
        {
            "start": 263.04,
            "end": 266.46,
            "text": "但现在AI可以做设计、写代码、做客服、"
        },
        {
            "start": 266.46,
            "end": 268.42,
            "text": "做营销、做数据分析。"
        },
        {
            "start": 268.42,
            "end": 271.54,
            "text": "一个有vision的创始人，加上一套AI工具链，"
        },
        {
            "start": 271.54,
            "end": 273.42,
            "text": "真的可以做出一个很大的生意。"
        },
        {
            "start": 273.42,
            "end": 276.04,
            "text": "这对创业者来说是一个巨大的机会。"
        },
        {
            "start": 276.04,
            "end": 279.96,
            "text": "创业的资金门槛和团队门槛都被AI大幅拉低了。"
        },
        {
            "start": 279.96,
            "end": 282.84,
            "text": "但我要提醒一点：AI拉低了启动门槛，"
        },
        {
            "start": 282.84,
            "end": 284.86,
            "text": "但不代表拉低了成功门槛。"
        },
        {
            "start": 284.86,
            "end": 287.76,
            "text": "竞争更激烈了，因为每个人都能做。"
        },
        {
            "start": 287.76,
            "end": 290.78,
            "text": "你的竞争优势只能来自于独特的洞察、"
        },
        {
            "start": 290.78,
            "end": 293.1,
            "text": "独特的定位、独特的执行力。"
        },
        {
            "start": 293.1,
            "end": 296.74,
            "text": "好，讲了五种AI-Native商业模式。"
        },
        {
            "start": 296.74,
            "end": 299.96,
            "text": "你可能会问：我怎么判断我该用哪一种？"
        },
        {
            "start": 299.96,
            "end": 302.2,
            "text": "我给你一个简单的决策框架。"
        },
        {
            "start": 302.2,
            "end": 304.24,
            "text": "如果你有强大的AI技术能力，"
        },
        {
            "start": 304.24,
            "end": 306.54,
            "text": "可以考虑AI-as-a-Service，"
        },
        {
            "start": 306.54,
            "end": 308.0,
            "text": "直接卖AI能力。"
        },
        {
            "start": 308.0,
            "end": 310.48,
            "text": "如果你的AI能直接衡量商业效果，"
        },
        {
            "start": 310.48,
            "end": 312.08,
            "text": "可以考虑按效果付费，"
        },
        {
            "start": 312.08,
            "end": 313.64,
            "text": "降低客户决策门槛。"
        },
        {
            "start": 313.64,
            "end": 316.58,
            "text": "如果你的产品天然会产生用户数据，"
        },
        {
            "start": 316.58,
            "end": 318.54,
            "text": "可以设计数据飞轮模式，"
        },
        {
            "start": 318.54,
            "end": 320.52000000000004,
            "text": "让数据成为护城河。"
        },
        {
            "start": 320.52000000000004,
            "end": 323.0,
            "text": "如果你想做生态而不是做产品，"
        },
        {
            "start": 323.0,
            "end": 325.16,
            "text": "可以考虑AI赋能型平台，"
        },
        {
            "start": 325.16,
            "end": 326.98,
            "text": "服务那些用AI的人。"
        },
        {
            "start": 326.98,
            "end": 329.6,
            "text": "如果你是个人创业者或者小团队，"
        },
        {
            "start": 329.6,
            "end": 332.26,
            "text": "可以考虑AI原生一人公司模式，"
        },
        {
            "start": 332.26,
            "end": 334.06,
            "text": "用AI杠杆做大事。"
        },
        {
            "start": 334.06,
            "end": 336.9,
            "text": "当然，这几种模式不是互斥的。"
        },
        {
            "start": 336.9,
            "end": 340.76,
            "text": "很多成功的AI公司是几种模式的组合。"
        },
        {
            "start": 340.76,
            "end": 342.4,
            "text": "重要的是你要想清楚："
        },
        {
            "start": 342.4,
            "end": 344.88,
            "text": "你的核心价值创造逻辑是什么，"
        },
        {
            "start": 344.88,
            "end": 348.1,
            "text": "你的收入来源是什么，你的壁垒是什么。"
        },
        {
            "start": 348.1,
            "end": 349.94,
            "text": "好，今天的思考题。"
        },
        {
            "start": 349.94,
            "end": 354.16,
            "text": "第一，你现在的商业模式是传统的还是AI-Native的？"
        },
        {
            "start": 354.16,
            "end": 355.6,
            "text": "有没有机会升级？"
        },
        {
            "start": 355.6,
            "end": 358.76,
            "text": "第二，五种AI-Native商业模式里面，"
        },
        {
            "start": 358.76,
            "end": 360.9,
            "text": "哪一种跟你的业务最匹配？"
        },
        {
            "start": 360.9,
            "end": 364.22,
            "text": "第三，如果你要重新设计你的收入模式，"
        },
        {
            "start": 364.22,
            "end": 366.28,
            "text": "按效果付费可不可行？"
        },
        {
            "start": 366.28,
            "end": 368.34,
            "text": "客户会更愿意买单吗？"
        },
        {
            "start": 368.34,
            "end": 369.42,
            "text": "总结一下。"
        },
        {
            "start": 369.42,
            "end": 373.96,
            "text": "第一，AI时代催生了新的商业模式：从卖产品到卖智能。"
        },
        {
            "start": 373.96,
            "end": 376.96,
            "text": "AI产品的价值在交付后持续增长。"
        },
        {
            "start": 376.96,
            "end": 381.06,
            "text": "第二，五种AI-Native商业模式：AI即服务、"
        },
        {
            "start": 381.18,
            "end": 384.12,
            "text": "按效果付费、数据飞轮、AI赋能型平台、"
        },
        {
            "start": 384.12,
            "end": 385.58,
            "text": "AI原生一人公司。"
        },
        {
            "start": 386.12,
            "end": 389.54,
            "text": "第三，数据飞轮是AI时代最深的护城河。"
        },
        {
            "start": 389.54,
            "end": 392.18000000000006,
            "text": "如果你的业务能形成数据正循环，"
        },
        {
            "start": 392.18000000000006,
            "end": 394.18,
            "text": "你的竞争优势会越来越强。"
        },
        {
            "start": 394.18,
            "end": 398.88,
            "text": "第四，AI降低了创业的启动门槛，但竞争更激烈了。"
        },
        {
            "start": 398.88,
            "end": 402.16,
            "text": "你的优势必须来自独特的洞察和执行力。"
        },
        {
            "start": 402.16,
            "end": 405.26,
            "text": "下一期我们聊订阅经济与AI个性化。"
        },
        {
            "start": 405.26,
            "end": 407.56,
            "text": "为什么订阅模式越来越流行？"
        },
        {
            "start": 407.56,
            "end": 409.94,
            "text": "AI如何让订阅做得更好？"
        },
        {
            "start": 409.94,
            "end": 412.92,
            "text": "这个跟很多公司的收入模式直接相关。"
        },
        {
            "start": 412.92,
            "end": 414.34,
            "text": "好，今天就到这里。"
        },
        {
            "start": 414.34,
            "end": 415.9,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.22,
        "index": 0
    },
    {
        "start": 3.22,
        "end": 53.5,
        "index": 1
    },
    {
        "start": 53.5,
        "end": 131.34,
        "index": 2
    },
    {
        "start": 131.34,
        "end": 205.5,
        "index": 3
    },
    {
        "start": 205.5,
        "end": 268.42,
        "index": 4
    },
    {
        "start": 268.42,
        "end": 334.06,
        "index": 5
    },
    {
        "start": 334.06,
        "end": 368.34,
        "index": 6
    },
    {
        "start": 368.34,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-08.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "理解 AI 时代才可能成立的新商业模式，以及从卖产品到卖智能的迁移。"
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
      submitHref: "./lesson-strategy-08.html?entry={entry}",
      secondaryHref: "./lesson-strategy-08.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-07",
      coachSource: "./ai-coach.html?source=lesson-strategy-07"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于AI-Native 商业模式：从卖产品到卖智能的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI-Native 商业模式：从卖产品到卖智能", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-08.html" + '?entry=' + entryMode;
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
