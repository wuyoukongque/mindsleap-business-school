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

  window.MindsLeapConfigs.lessons.strategy05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第5课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第5课：商业模式画布：一张图说清怎么赚钱",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep05-business-model-canvas/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：商业模式画布：一张图说清怎么赚钱",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-5",
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
        secondaryHref: "./lesson-strategy-06.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 4,
                "title": "价值链分析：AI 正在重构哪些环节",
                "body": "用价值链看清利润从哪里来，也看清 AI 最值得切入的环节。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "商业模式画布：一张图说清怎么赚钱",
                "body": "用九宫格快速看懂任何业务如何创造、交付与捕获价值。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "平台战略与网络效应",
                "body": "理解平台为什么会赢家通吃，以及网络效应如何形成战略壁垒。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-06.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "用九宫格快速看懂任何业务如何创造、交付与捕获价值。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "商业模式画布看的是闭环",
                "body": "重点不是把九个格子写满，而是看客户、价值、资源、收入之间能不能形成自洽闭环。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "客户与价值永远排在前面",
                "body": "客户定义越清楚，你后面的渠道、关系、收入设计才会有针对性，而不是泛泛而谈。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键资源要支撑关键活动",
                "body": "如果资源、活动、价值主张彼此脱节，商业模式看上去完整，实际上很难跑起来。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 会改写九宫格的多个模块",
                "body": "AI 不只是一个工具，它会同时影响客户关系、渠道、关键资源、收入方式和成本结构。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 5/14", "建议下一节：平台战略与网络效应", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-06.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-05",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson5",
    audioSource: './assets/audio/strategy-ep05-business-model-canvas.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep05-business-model-canvas.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep05-business-model-canvas/slide_01.png",
            "label": "商业模式画布：一张图说清怎么赚钱",
            "caption": "这一节会帮助你系统理解：商业模式画布：一张图说清怎么赚钱"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_03.png",
            "label": "经典框架",
            "caption": "你的客户定义越清楚，你后面的所有选择就越有针对性。 第二个模块：价值主张，Value Proposition。"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_04.png",
            "label": "关键判断",
            "caption": "第五个模块：核心资源，Key Resources。 你做这件事需要什么关键资源？"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "现在我用一个大家都熟悉的公司来填一下这个画布：星巴克。 客户细分：城市白领、学生、商务人士。"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_06.png",
            "label": "回到你的企业",
            "caption": "AI时代，商业模式画布的每一个模块都有可能被重新思考。 我举几个最重要的变化。"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_07.png",
            "label": "风险与提醒",
            "caption": "这就形成了一个飞轮：好的产品吸引更多用户 → 更多用户产生更多数据 → 更多数据让AI更聪明 → 更聪明的AI让产品更好 → 吸引更多用户。 这个数据飞轮在很多"
        },
        {
            "file": "strategy-ep05-business-model-canvas/slide_08.png",
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
            "start": 1.62,
            "end": 3.4,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.4,
            "end": 5.54,
            "text": "今天开始我们进入商业模式设计。"
        },
        {
            "start": 5.54,
            "end": 6.32,
            "text": "第一个工具，"
        },
        {
            "start": 6.32,
            "end": 9.58,
            "text": "也是我个人认为最实用的商业思维工具之一："
        },
        {
            "start": 9.58,
            "end": 12.62,
            "text": "商业模式画布，Business Model Canvas。"
        },
        {
            "start": 12.62,
            "end": 16.76,
            "text": "这个工具是Alex Osterwalder在2010年提出来的。"
        },
        {
            "start": 16.76,
            "end": 18.78,
            "text": "它用一张图、九个模块，"
        },
        {
            "start": 18.78,
            "end": 22.22,
            "text": "把一个商业模式的全部要素说清楚。"
        },
        {
            "start": 22.22,
            "end": 25.52,
            "text": "不管你是创业者想梳理自己的商业模式，"
        },
        {
            "start": 25.52,
            "end": 28.38,
            "text": "还是投资人想快速看懂一家公司，"
        },
        {
            "start": 28.38,
            "end": 31.4,
            "text": "或者你是高管想评估一个新业务，"
        },
        {
            "start": 31.4,
            "end": 33.66,
            "text": "这个画布都非常好用。"
        },
        {
            "start": 33.66,
            "end": 36.66,
            "text": "我今天的目标是：你听完这期之后，"
        },
        {
            "start": 36.66,
            "end": 41.78,
            "text": "能用这个画布在十分钟内说清楚任何一家公司怎么赚钱。"
        },
        {
            "start": 41.78,
            "end": 43.18,
            "text": "好，九个模块。"
        },
        {
            "start": 43.18,
            "end": 46.5,
            "text": "我按照一个逻辑链条来讲，这样更好理解。"
        },
        {
            "start": 46.5,
            "end": 50.26,
            "text": "第一个模块：客户细分，Customer Segments。"
        },
        {
            "start": 50.26,
            "end": 51.4,
            "text": "你服务谁？"
        },
        {
            "start": 51.4,
            "end": 53.3,
            "text": "你的目标客户是谁？"
        },
        {
            "start": 53.3,
            "end": 56.08,
            "text": "不同的客户群体可能有不同的需求。"
        },
        {
            "start": 56.08,
            "end": 60.82,
            "text": "比如说，微信的客户细分很广，几乎是全中国的手机用户。"
        },
        {
            "start": 60.82,
            "end": 65.26,
            "text": "但LinkedIn的客户细分就比较窄，主要是职场人士。"
        },
        {
            "start": 65.26,
            "end": 69.68,
            "text": "你的客户定义越清楚，你后面的所有选择就越有针对性。"
        },
        {
            "start": 69.68,
            "end": 73.08,
            "text": "第二个模块：价值主张，Value Proposition。"
        },
        {
            "start": 73.08,
            "end": 75.68,
            "text": "你给客户提供什么独特的价值？"
        },
        {
            "start": 75.68,
            "end": 78.0,
            "text": "客户为什么选你而不选别人？"
        },
        {
            "start": 78.0,
            "end": 79.82,
            "text": "这是整个画布的核心。"
        },
        {
            "start": 79.82,
            "end": 84.28,
            "text": "如果你说不清你的价值主张，你的商业模式就没有灵魂。"
        },
        {
            "start": 85.88,
            "end": 89.2,
            "text": "价值主张不一定是\"我的产品功能多\"。"
        },
        {
            "start": 89.2,
            "end": 92.46,
            "text": "它可以是更便宜、更方便、更好看、"
        },
        {
            "start": 92.46,
            "end": 94.94,
            "text": "更快、更安全、更个性化。"
        },
        {
            "start": 94.94,
            "end": 97.28,
            "text": "关键是你的客户最在乎什么，"
        },
        {
            "start": 97.28,
            "end": 99.84,
            "text": "你在这个维度上能不能做到最好。"
        },
        {
            "start": 99.84,
            "end": 102.12,
            "text": "第三个模块：渠道，Channels。"
        },
        {
            "start": 102.12,
            "end": 104.2,
            "text": "你通过什么渠道触达客户？"
        },
        {
            "start": 104.2,
            "end": 105.72,
            "text": "线上还是线下？"
        },
        {
            "start": 105.96,
            "end": 106.8,
            "text": "直销还是分销？"
        },
        {
            "start": 106.8,
            "end": 110.32,
            "text": "社交媒体、搜索引擎、门店、合作伙伴？"
        },
        {
            "start": 110.32,
            "end": 114.02,
            "text": "第四个模块：客户关系，Customer Relationships。"
        },
        {
            "start": 114.02,
            "end": 116.18,
            "text": "你跟客户之间是什么样的关系？"
        },
        {
            "start": 116.18,
            "end": 117.38,
            "text": "一次性交易？"
        },
        {
            "start": 117.64,
            "end": 118.24,
            "text": "长期订阅？"
        },
        {
            "start": 118.74,
            "end": 119.46,
            "text": "社群运营？"
        },
        {
            "start": 119.46,
            "end": 120.88,
            "text": "专属客户经理？"
        },
        {
            "start": 120.88,
            "end": 123.88,
            "text": "这四个模块是画布的右半部分，"
        },
        {
            "start": 123.88,
            "end": 125.28,
            "text": "核心回答一个问题："
        },
        {
            "start": 125.28,
            "end": 128.38,
            "text": "你给谁创造什么价值，怎么触达他们，"
        },
        {
            "start": 128.64,
            "end": 129.74,
            "text": "怎么维护关系。"
        },
        {
            "start": 129.74,
            "end": 132.22,
            "text": "接下来是画布的左半部分，"
        },
        {
            "start": 132.22,
            "end": 135.2,
            "text": "回答另一个问题：你怎么创造这个价值。"
        },
        {
            "start": 135.2,
            "end": 138.3,
            "text": "第五个模块：核心资源，Key Resources。"
        },
        {
            "start": 138.89,
            "end": 141.6,
            "text": "你做这件事需要什么关键资源？"
        },
        {
            "start": 141.6,
            "end": 145.44,
            "text": "可能是技术、品牌、数据、人才、专利、资金。"
        },
        {
            "start": 145.44,
            "end": 148.48,
            "text": "第六个模块：关键活动，Key Activities。"
        },
        {
            "start": 148.48,
            "end": 150.82,
            "text": "你必须做好哪些关键事情？"
        },
        {
            "start": 150.82,
            "end": 154.66,
            "text": "产品研发、供应链管理、平台运营、营销获客？"
        },
        {
            "start": 154.66,
            "end": 158.62,
            "text": "第七个模块：关键合作伙伴，Key Partnerships。"
        },
        {
            "start": 158.62,
            "end": 161.08,
            "text": "谁是你不可或缺的合作伙伴？"
        },
        {
            "start": 161.08,
            "end": 164.74,
            "text": "供应商、分销商、技术提供商、内容创作者？"
        },
        {
            "start": 164.74,
            "end": 168.74,
            "text": "最后两个模块是整个画布的底部，也就是财务层面。"
        },
        {
            "start": 168.74,
            "end": 171.78,
            "text": "第八个模块：收入来源，Revenue Streams。"
        },
        {
            "start": 171.78,
            "end": 173.1,
            "text": "你怎么赚钱？"
        },
        {
            "start": 173.24,
            "end": 173.68,
            "text": "卖产品？"
        },
        {
            "start": 173.68,
            "end": 174.46,
            "text": "收订阅费？"
        },
        {
            "start": 174.74,
            "end": 175.22,
            "text": "抽佣金？"
        },
        {
            "start": 175.56,
            "end": 176.12,
            "text": "卖广告？"
        },
        {
            "start": 176.12,
            "end": 177.5,
            "text": "授权使用费？"
        },
        {
            "start": 177.5,
            "end": 181.36,
            "text": "第九个模块：成本结构，Cost Structure。"
        },
        {
            "start": 181.36,
            "end": 183.2,
            "text": "你的主要成本是什么？"
        },
        {
            "start": 183.2,
            "end": 186.06,
            "text": "人力、技术、营销、物流、原材料？"
        },
        {
            "start": 186.06,
            "end": 189.94,
            "text": "你的成本是固定成本为主还是可变成本为主？"
        },
        {
            "start": 189.94,
            "end": 192.24,
            "text": "好，九个模块全部讲完了。"
        },
        {
            "start": 192.24,
            "end": 195.02,
            "text": "客户细分、价值主张、渠道、客户关系、"
        },
        {
            "start": 195.34,
            "end": 198.2,
            "text": "核心资源、关键活动、关键合作伙伴、"
        },
        {
            "start": 198.2,
            "end": 200.14,
            "text": "收入来源、成本结构。"
        },
        {
            "start": 200.14,
            "end": 203.84,
            "text": "现在我用一个大家都熟悉的公司来填一下这个画布："
        },
        {
            "start": 203.84,
            "end": 204.54,
            "text": "星巴克。"
        },
        {
            "start": 204.54,
            "end": 207.92,
            "text": "客户细分：城市白领、学生、商务人士。"
        },
        {
            "start": 207.92,
            "end": 211.36,
            "text": "愿意为品质咖啡和社交空间多付钱的人群。"
        },
        {
            "start": 211.36,
            "end": 213.48,
            "text": "价值主张：不只是一杯咖啡，"
        },
        {
            "start": 213.48,
            "end": 217.68,
            "text": "是\"第三空间\"——家和办公室之外的第三个去处。"
        },
        {
            "start": 217.68,
            "end": 220.84,
            "text": "稳定的品质、舒适的环境、社交属性。"
        },
        {
            "start": 220.84,
            "end": 225.96,
            "text": "渠道：线下门店为主，手机App和小程序做数字化延伸。"
        },
        {
            "start": 225.96,
            "end": 229.24,
            "text": "客户关系：会员体系、积分、个性化推荐。"
        },
        {
            "start": 229.24,
            "end": 234.0,
            "text": "核心资源：品牌、全球供应链、门店位置、数字化系统。"
        },
        {
            "start": 234.0,
            "end": 235.82,
            "text": "关键活动：门店运营、"
        },
        {
            "start": 236.08,
            "end": 238.5,
            "text": "咖啡豆采购和烘焙、品牌营销、"
        },
        {
            "start": 238.5,
            "end": 239.86,
            "text": "数字化会员运营。"
        },
        {
            "start": 239.86,
            "end": 244.7,
            "text": "关键合作伙伴：咖啡豆种植商、商业地产商、配送平台。"
        },
        {
            "start": 245.12,
            "end": 250.0,
            "text": "收入来源：饮品和食品销售、周边产品、瓶装咖啡授权。"
        },
        {
            "start": 250.4,
            "end": 253.3,
            "text": "成本结构：门店租金和人工是大头，"
        },
        {
            "start": 253.3,
            "end": 255.68,
            "text": "其次是原材料、营销、技术。"
        },
        {
            "start": 255.68,
            "end": 259.58,
            "text": "你看，九个模块填完，星巴克怎么赚钱就一目了然了。"
        },
        {
            "start": 259.58,
            "end": 262.76,
            "text": "而且你马上就能看出它的关键点在哪里——品"
        },
        {
            "start": 262.76,
            "end": 266.18,
            "text": "牌和\"第三空间\"的体验是它的核心价值主张，"
        },
        {
            "start": 266.18,
            "end": 268.98,
            "text": "门店运营效率是它的核心竞争力。"
        },
        {
            "start": 268.98,
            "end": 271.84,
            "text": "好，经典讲完了，我们来加AI的视角。"
        },
        {
            "start": 271.84,
            "end": 276.7,
            "text": "AI时代，商业模式画布的每一个模块都有可能被重新思考。"
        },
        {
            "start": 276.7,
            "end": 278.76,
            "text": "我举几个最重要的变化。"
        },
        {
            "start": 278.76,
            "end": 281.22,
            "text": "第一，客户细分可以更细了。"
        },
        {
            "start": 281.22,
            "end": 283.5,
            "text": "以前你可能把客户分成三五个大类。"
        },
        {
            "start": 283.5,
            "end": 287.7,
            "text": "但AI可以做到微细分，每个客户就是一个细分市场。"
        },
        {
            "start": 287.7,
            "end": 290.52,
            "text": "你可以给每个客户提供不同的体验、"
        },
        {
            "start": 290.52,
            "end": 292.34,
            "text": "不同的价格、不同的内容。"
        },
        {
            "start": 292.82000000000005,
            "end": 295.44,
            "text": "第二，价值主张可以加上\"智能化\"。"
        },
        {
            "start": 295.44,
            "end": 298.42,
            "text": "你的产品可以越用越聪明，越懂用户。"
        },
        {
            "start": 298.42,
            "end": 303.26,
            "text": "比如说Spotify的推荐越听越准，这本身就是价值主张的一部分。"
        },
        {
            "start": 303.26,
            "end": 306.58,
            "text": "第三，渠道和客户关系可以AI自动化。"
        },
        {
            "start": 306.74,
            "end": 309.48,
            "text": "AI客服、AI销售助手、AI社群运营。"
        },
        {
            "start": 309.48,
            "end": 311.14,
            "text": "以前这些都需要大量人力，"
        },
        {
            "start": 311.14,
            "end": 314.3,
            "text": "现在AI可以做到7乘24小时的个性化服务。"
        },
        {
            "start": 314.3,
            "end": 318.22,
            "text": "第四，也是最关键的，核心资源要加上\"数据\"。"
        },
        {
            "start": 318.22,
            "end": 321.26,
            "text": "在AI时代，数据可能是最重要的核心资源。"
        },
        {
            "start": 321.26,
            "end": 323.7,
            "text": "因为AI需要数据来学习和改进。"
        },
        {
            "start": 323.7,
            "end": 326.0,
            "text": "你拥有的独特数据越多，"
        },
        {
            "start": 326.0,
            "end": 329.2,
            "text": "你的AI就越厉害，你的竞争优势就越大。"
        },
        {
            "start": 329.2,
            "end": 330.8,
            "text": "这就形成了一个飞轮："
        },
        {
            "start": 330.8,
            "end": 335.3,
            "text": "好的产品吸引更多用户 → 更多用户产生更多数据 →"
        },
        {
            "start": 335.3,
            "end": 339.5,
            "text": "更多数据让AI更聪明 → 更聪明的AI让产品更好"
        },
        {
            "start": 339.5,
            "end": 340.7,
            "text": "→ 吸引更多用户。"
        },
        {
            "start": 340.7,
            "end": 344.14,
            "text": "这个数据飞轮在很多AI公司身上都能看到。"
        },
        {
            "start": 344.14,
            "end": 349.2,
            "text": "Tesla的自动驾驶越多车在路上跑，数据越多，模型越好。"
        },
        {
            "start": 349.2,
            "end": 353.02,
            "text": "TikTok越多人看视频，推荐越准，用户越黏。"
        },
        {
            "start": 353.02,
            "end": 355.46,
            "text": "所以如果你在设计商业模式的时候，"
        },
        {
            "start": 355.46,
            "end": 356.58,
            "text": "一定要想清楚："
        },
        {
            "start": 356.58,
            "end": 359.48,
            "text": "你的业务能不能形成数据飞轮？"
        },
        {
            "start": 359.48,
            "end": 362.68,
            "text": "如果能，这可能就是你最深的护城河。"
        },
        {
            "start": 362.68,
            "end": 364.26,
            "text": "好，今天的思考题。"
        },
        {
            "start": 364.26,
            "end": 369.32,
            "text": "第一，用商业模式画布的九个模块分析你自己的公司。"
        },
        {
            "start": 369.32,
            "end": 371.56,
            "text": "每个模块用一两句话回答。"
        },
        {
            "start": 371.56,
            "end": 375.54,
            "text": "第二，在你的九个模块里，AI最能增强哪个模块？"
        },
        {
            "start": 375.54,
            "end": 378.08,
            "text": "是让价值主张更个性化？"
        },
        {
            "start": 378.08,
            "end": 379.74,
            "text": "是让获客渠道更高效？"
        },
        {
            "start": 379.74,
            "end": 381.6,
            "text": "还是让成本结构更优？"
        },
        {
            "start": 381.6,
            "end": 384.96,
            "text": "第三，你的业务能不能形成数据飞轮？"
        },
        {
            "start": 384.96,
            "end": 389.52,
            "text": "如果现在还不能，有没有办法重新设计让它形成？"
        },
        {
            "start": 390.5,
            "end": 391.56,
            "text": "总结一下。"
        },
        {
            "start": 391.56,
            "end": 396.7,
            "text": "第一，商业模式画布用九个模块说清楚一个公司怎么赚钱。"
        },
        {
            "start": 396.7,
            "end": 399.6,
            "text": "它是一个非常实用的商业思维工具。"
        },
        {
            "start": 399.6,
            "end": 404.14,
            "text": "第二，AI时代要在画布里加上数据这个核心资源。"
        },
        {
            "start": 404.14,
            "end": 407.47999999999996,
            "text": "数据飞轮可能是AI时代最强的护城河。"
        },
        {
            "start": 407.48,
            "end": 409.96,
            "text": "第三，AI让微细分、个性化、"
        },
        {
            "start": 409.96,
            "end": 411.1,
            "text": "自动化成为可能，"
        },
        {
            "start": 411.1,
            "end": 415.78,
            "text": "商业模式画布的每一个模块都值得在AI视角下重新审视。"
        },
        {
            "start": 416.3,
            "end": 418.8,
            "text": "下一期我们聊平台战略和网络效应。"
        },
        {
            "start": 418.8,
            "end": 421.14,
            "text": "为什么有些公司能赢家通吃？"
        },
        {
            "start": 421.14,
            "end": 423.72,
            "text": "AI时代的平台飞轮又是怎么转的？"
        },
        {
            "start": 423.72,
            "end": 424.76,
            "text": "特别有意思。"
        },
        {
            "start": 424.76,
            "end": 426.1,
            "text": "好，今天就到这里。"
        },
        {
            "start": 426.1,
            "end": 428.0,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 33.66,
        "index": 0
    },
    {
        "start": 33.66,
        "end": 69.68,
        "index": 1
    },
    {
        "start": 69.68,
        "end": 135.2,
        "index": 2
    },
    {
        "start": 135.2,
        "end": 200.14,
        "index": 3
    },
    {
        "start": 200.14,
        "end": 271.84,
        "index": 4
    },
    {
        "start": 271.84,
        "end": 329.2,
        "index": 5
    },
    {
        "start": 329.2,
        "end": 390.5,
        "index": 6
    },
    {
        "start": 390.5,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-06.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "用九宫格快速看懂任何业务如何创造、交付与捕获价值。"
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
      submitHref: "./lesson-strategy-06.html?entry={entry}",
      secondaryHref: "./lesson-strategy-06.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-05",
      coachSource: "./ai-coach.html?source=lesson-strategy-05"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于商业模式画布：一张图说清怎么赚钱的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "商业模式画布：一张图说清怎么赚钱", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-06.html" + '?entry=' + entryMode;
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
