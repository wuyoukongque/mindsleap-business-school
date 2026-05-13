
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
      els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把“方向、取舍、优先级”真正落回你的企业里。';
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
      els.ctaCopy.textContent = '建议先把整节课听完，再开始生成认知卡。你也可以先想一想：今年真正最重要的三件事到底是什么。';
    }
  }

  window.MindsLeapConfigs.lessons.strategy01 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Strategy 第1课',
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: '第1课：AI时代，什么是战略？',
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 听完即可沉淀战略思考卡'],
      topNote: {
        title: '为什么这一节应该先学？',
        body: '因为如果不先把“什么是战略”讲清楚，后面的竞争格局、增长路径、商业模式与 AI 时代的新变量，都会变成零散概念。',
        meta: ['预计时长：5-6 分钟', '你将获得：战略定义 + 取舍框架 + 初步行动线索']
      },
      player: {
        initialSlide: './assets/slides/slide_01_title.png?v=20260407-safezone-v1',
        initialSlideCount: '1 / 10',
        title: '当前内容：AI时代，什么是战略？',
        subtitle: '用一节课先把“战略不是目标列表，而是取舍”这件事讲清楚。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-strategy.html?entry=sequence#lesson-1',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '查看学习地图',
        quickThoughtHref: './map.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节真正重要的，不是记住“战略”这个定义。',
        leadBody: '而是开始用战略的方式看你自己的企业：今年你到底要做什么，不做什么，为什么。',
        questions: [
          { id: 'qPriority', title: '1. 如果今年你只能真正做好 3 件事，它们会是什么？', placeholder: '先写最关键的 3 件事，不求完整，只求真实。', tip: '这一步最重要的是“聚焦”，不是把所有想做的事都列上来。' },
          { id: 'qTradeoff', title: '2. 为了聚焦，你最应该减少、暂停，或者明确不做的是什么？', placeholder: '例如：某条业务线、某类客户、某个项目，或者某种投入方式。', tip: '战略一定伴随着取舍。把“不做什么”说清楚，判断才会真正开始形成。' },
          { id: 'qAlignment', title: '3. 这 3 件事和你的长期方向之间，是什么关系？', placeholder: '它们为什么值得你今年优先做？和企业未来 3 年想去的方向有什么关系？', tip: '不要只回答“重要”，而要回答：它为什么对长期方向有意义。' }
        ],
        outroNote: '系统会先保存你的回答。你可以继续往下学习，等学完整个模块后再统一做一次复盘。'
      },
      cta: {
        title: '回答先记录下来，继续往下学',
        body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。',
        titleId: 'ctaTitle',
        bodyId: 'ctaCopy',
        submitLabel: '保存回答，进入下一节',
        coachLabel: '暂时跳过，继续学习',
        secondaryHref: './lesson-strategy-02.html?entry=sequence'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI时代，什么是战略？', body: '先建立战略的底层定义：方向、取舍与优先级。', badge: '当前', state: 'current' },
          { no: 2, title: '波特五力模型：看懂你的行业竞争格局', body: '从竞争结构切入，看清增长、价格战和行业吸引力。', badge: '下一节', state: 'next', badgeClass: 'next' },
          { no: 3, title: '竞争优势的两条路：成本领先 vs 差异化', body: '理解企业到底靠什么赢，以及 AI 是否改变了边界。', badge: '待学习' }
        ],
        nextLessonHref: './lesson-strategy-02.html?entry=sequence',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '推荐理由',
        reasonBody: '这是整个战略模块的起点。先把“战略到底是什么”讲清楚，后面的五力、价值链、商业模式和增长路径才不会变成碎片。',
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: '战略不是目标列表', body: '战略不是把所有想做的事都写出来，而是决定：在有限资源下，真正先做什么。' },
          { eyebrow: '核心概念 02', title: '真正的战略一定伴随取舍', body: '如果没有“不做什么”，那往往还不是战略，而只是愿望清单。' },
          { eyebrow: '核心概念 03', title: '经典框架今天仍然有效', body: '波特关于取舍、活动系统和竞争位置的判断，在 AI 时代仍然成立，只是变量更多了。' },
          { eyebrow: '行动提示', title: '把战略先变成 3 件事', body: '听完后最值得做的动作，不是继续收集概念，而是写清楚：今年你只做哪 3 件事。' }
        ]
      },
      completion: {
        title: '这节课你已经学完了',
        body: '建议马上进入下一节，看懂行业竞争格局；或者先把这一节整理成你的战略思考卡。',
        meta: ['当前完成：企业战略 1/14', '建议下一节：波特五力模型', '也可以先整理这一节'],
        nextHref: './lesson-strategy-02.html?entry=sequence',
        nextLabel: '进入下一节',
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: 'strategy-01',
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: 'lesson1',
    audioSource: './assets/audio/ep01.mp3?v=20260410-strategy-fullregen',
    vttSrc: './assets/subtitles/ep01-fixed.vtt?v=20260410-strategy-fullregen',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260407-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "slide_01_title.png",
            "label": "标题页",
            "caption": "这节课先帮你把“战略到底是什么”讲清楚。"
        },
        {
            "file": "slide_02_question.png",
            "label": "问题引入",
            "caption": "如果你不能清楚说出企业今年真正要做的 3 件事，战略通常还没有成形。"
        },
        {
            "file": "slide_03_porter_quote.png",
            "label": "波特定义",
            "caption": "战略最核心的地方，不只是做什么，更是明确不做什么。"
        },
        {
            "file": "slide_04_ikea.png",
            "label": "IKEA 案例",
            "caption": "宜家的强大，不靠一句口号，而靠一整套持续一致的战略取舍。"
        },
        {
            "file": "slide_05_activity_system.png",
            "label": "活动系统",
            "caption": "真正的战略，是一组互相支撑的活动，而不是单点动作。"
        },
        {
            "file": "slide_06_southwest.png",
            "label": "Southwest 案例",
            "caption": "低成本不是一句口号，而是围绕战略位置做出的系统性选择。"
        },
        {
            "file": "slide_07_three_questions.png",
            "label": "三道问题",
            "caption": "把战略带回企业，关键是回答清楚：优先级、取舍和长期方向。"
        },
        {
            "file": "slide_08_strategy_vs_oe.png",
            "label": "战略 vs 运营效率",
            "caption": "运营效率很重要，但它不能替代战略。"
        },
        {
            "file": "slide_09_summary.png",
            "label": "总结页",
            "caption": "这节课的目标，是帮你第一次更清楚地理解战略。"
        },
        {
            "file": "slide_10_closing.png",
            "label": "收尾页",
            "caption": "下一步，你要开始看懂行业竞争格局，而不是只停留在定义层面。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.2,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.2,
            "end": 3.12,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.12,
            "end": 5.14,
            "text": "今天跟大家讲的是一个非常基础，"
        },
        {
            "start": 5.14,
            "end": 6.16,
            "text": "但与此同时呢，"
        },
        {
            "start": 6.16,
            "end": 8.06,
            "text": "也是一个非常容易被误解的概念。"
        },
        {
            "start": 8.06,
            "end": 9.1,
            "text": "就是，战略。"
        },
        {
            "start": 9.1,
            "end": 9.84,
            "text": "Strategy。"
        },
        {
            "start": 9.84,
            "end": 12.24,
            "text": "你可能觉得，这个词谁不知道是不是？"
        },
        {
            "start": 12.24,
            "end": 13.88,
            "text": "每家公司都说自己有战略，"
        },
        {
            "start": 13.88,
            "end": 16.62,
            "text": "每个创始人都能讲出一套自己的战略规划。"
        },
        {
            "start": 16.62,
            "end": 19.2,
            "text": "但是话说回来，我想问大家一个问题："
        },
        {
            "start": 19.2,
            "end": 20.5,
            "text": "你能用一句话，"
        },
        {
            "start": 20.5,
            "end": 23.0,
            "text": "说清楚你公司的战略到底是什么吗？"
        },
        {
            "start": 23.0,
            "end": 24.02,
            "text": "大家想想，"
        },
        {
            "start": 24.06,
            "end": 26.54,
            "text": "如果你的回答是\"我们要做行业第一\"，"
        },
        {
            "start": 26.54,
            "end": 28.14,
            "text": "或者\"我们要服务好客户\"，"
        },
        {
            "start": 28.14,
            "end": 30.24,
            "text": "或者\"我们要快速增长\"。"
        },
        {
            "start": 30.24,
            "end": 31.96,
            "text": "坦白说，这些都不是战略。"
        },
        {
            "start": 31.96,
            "end": 34.82,
            "text": "这些是目标，是愿望，但不是战略。"
        },
        {
            "start": 34.82,
            "end": 36.64,
            "text": "那到底什么是战略呢？"
        },
        {
            "start": 36.64,
            "end": 39.06,
            "text": "哈佛商学院的Michael Porter，迈克尔·波特教授，"
        },
        {
            "start": 39.06,
            "end": 41.96,
            "text": "他基本上是竞争战略这个领域的奠基人。"
        },
        {
            "start": 41.96,
            "end": 43.66,
            "text": "他给了一个非常精辟的定义。"
        },
        {
            "start": 43.66,
            "end": 46.64,
            "text": "他说：战略的核心，是选择不做什么。"
        },
        {
            "start": 46.64,
            "end": 50.17,
            "text": "注意啊，不是选择做什么，而是选择不做什么。"
        },
        {
            "start": 50.17,
            "end": 53.56,
            "text": "这句话听起来简单，但你仔细想想，这其实是反人性的。"
        },
        {
            "start": 53.56,
            "end": 54.9,
            "text": "我们在经营企业的时候，"
        },
        {
            "start": 54.9,
            "end": 57.44,
            "text": "天然就倾向于什么都想做，是不是？"
        },
        {
            "start": 57.44,
            "end": 59.2,
            "text": "客户有需求，我们想满足。"
        },
        {
            "start": 59.2,
            "end": 61.24,
            "text": "市场有机会，我们想抓住。"
        },
        {
            "start": 61.24,
            "end": 63.68,
            "text": "竞争对手做了什么，我们也想跟进。"
        },
        {
            "start": 63.68,
            "end": 67.32,
            "text": "但波特说，真正的战略恰恰相反，你必须做出取舍。"
        },
        {
            "start": 67.32,
            "end": 69.14,
            "text": "我给大家举一个经典的例子。"
        },
        {
            "start": 69.14,
            "end": 72.12,
            "text": "比如说，宜家，IKEA，大家都知道。"
        },
        {
            "start": 72.12,
            "end": 73.47999999999999,
            "text": "它的战略是什么？"
        },
        {
            "start": 73.47999999999999,
            "end": 74.52,
            "text": "卖便宜的家具？"
        },
        {
            "start": 74.52,
            "end": 75.6,
            "text": "不完全是。"
        },
        {
            "start": 75.6,
            "end": 77.26857142857143,
            "text": "宜家的战略应该这么说："
        },
        {
            "start": 77.26857142857143,
            "end": 79.74,
            "text": "为预算有限但追求设计感的年轻人，"
        },
        {
            "start": 79.74,
            "end": 82.06,
            "text": "提供一套自助式的家居解决方案。"
        },
        {
            "start": 82.06,
            "end": 84.6,
            "text": "你看这里面有几个关键的取舍。"
        },
        {
            "start": 84.6,
            "end": 87.64,
            "text": "第一，它选择了年轻人和预算有限的家庭。"
        },
        {
            "start": 87.64,
            "end": 88.94,
            "text": "这意味着什么呢？"
        },
        {
            "start": 88.94,
            "end": 90.28,
            "text": "它主动放弃了高端客户。"
        },
        {
            "start": 90.28,
            "end": 94.02666666666666,
            "text": "你不会看到宜家去跟意大利那些顶级家具品牌去竞争，"
        },
        {
            "start": 94.02666666666666,
            "end": 95.16,
            "text": "它不做那个事情。"
        },
        {
            "start": 95.16,
            "end": 97.42000000000002,
            "text": "第二，它选择了自助式的体验。"
        },
        {
            "start": 97.42000000000002,
            "end": 100.33999999999999,
            "text": "你自己逛、自己选、自己搬、自己组装。"
        },
        {
            "start": 100.33999999999999,
            "end": 101.73999999999998,
            "text": "这不是因为宜家偷懒啊，"
        },
        {
            "start": 101.74,
            "end": 105.14,
            "text": "而是因为这种模式让它能够把成本降到极致。"
        },
        {
            "start": 105.6,
            "end": 107.08666666666666,
            "text": "第三，与此同时呢，"
        },
        {
            "start": 107.08666666666666,
            "end": 109.4,
            "text": "它投入大量资源在设计上，"
        },
        {
            "start": 109.4,
            "end": 111.38,
            "text": "让便宜的东西看起来不廉价。"
        },
        {
            "start": 111.38,
            "end": 114.48000000000002,
            "text": "这是它和普通低价家具店的根本区别。"
        },
        {
            "start": 114.48000000000002,
            "end": 116.02,
            "text": "所以大家发现没有？"
        },
        {
            "start": 116.02,
            "end": 118.86800000000001,
            "text": "宜家的战略不只是\"卖便宜家具\"这么简单。"
        },
        {
            "start": 118.86800000000001,
            "end": 120.9,
            "text": "它是一整套环环相扣的选择。"
        },
        {
            "start": 120.9,
            "end": 123.67333333333332,
            "text": "每一个选择都在强化其他选择，"
        },
        {
            "start": 123.67333333333332,
            "end": 126.52,
            "text": "与此同时也意味着放弃了另一些东西。"
        },
        {
            "start": 126.52,
            "end": 129.16666666666666,
            "text": "这就引出了波特的另一个核心观点："
        },
        {
            "start": 129.16666666666666,
            "end": 131.4,
            "text": "战略就是要建立一套独特的、"
        },
        {
            "start": 131.4,
            "end": 132.9,
            "text": "彼此协调的活动体系。"
        },
        {
            "start": 132.9,
            "end": 133.76,
            "text": "什么意思呢？"
        },
        {
            "start": 133.76,
            "end": 136.43999999999994,
            "text": "也就是说，战略不是某一个单独的decision，"
        },
        {
            "start": 136.44,
            "end": 137.98,
            "text": "不是某个单独的决策，"
        },
        {
            "start": 137.98,
            "end": 140.2,
            "text": "而是一系列决策构成的系统。"
        },
        {
            "start": 140.2,
            "end": 145.08,
            "text": "这些决策之间应该是相互支撑的，像齿轮一样咬合在一起。"
        },
        {
            "start": 145.08,
            "end": 147.6,
            "text": "再给大家举一个例子，这个例子非常exciting。"
        },
        {
            "start": 147.6,
            "end": 151.95999999999998,
            "text": "西南航空，Southwest Airlines，美国最赚钱的航空公司之一。"
        },
        {
            "start": 151.95999999999998,
            "end": 155.304,
            "text": "它的战略是做低成本的点对点短途航线。"
        },
        {
            "start": 155.304,
            "end": 158.24,
            "text": "围绕这个定位，它做了一系列配套选择。"
        },
        {
            "start": 158.24,
            "end": 161.1,
            "text": "比如说，只用一种机型，波音737，"
        },
        {
            "start": 161.1,
            "end": 163.18,
            "text": "这样维护成本低、培训简单。"
        },
        {
            "start": 163.18,
            "end": 167.14,
            "text": "不设头等舱，不提前分配座位，这样周转速度快。"
        },
        {
            "start": 167.14,
            "end": 171.28,
            "text": "不飞大型枢纽机场Hub，而是用二线机场，起降费便宜。"
        },
        {
            "start": 171.28,
            "end": 172.52,
            "text": "等等吧。"
        },
        {
            "start": 172.52,
            "end": 176.12,
            "text": "你看，每一个选择单独看，竞争对手都可以模仿。"
        },
        {
            "start": 176.12,
            "end": 178.08,
            "text": "但所有选择组合在一起，"
        },
        {
            "start": 178.08,
            "end": 179.06666666666666,
            "text": "形成了一个系统，"
        },
        {
            "start": 179.06666666666666,
            "end": 180.92,
            "text": "这个系统就很难被复制了。"
        },
        {
            "start": 180.92,
            "end": 182.32,
            "text": "这就是战略的力量。"
        },
        {
            "start": 182.32,
            "end": 184.34,
            "text": "所以到这里呢，拉回来一点，"
        },
        {
            "start": 184.34,
            "end": 186.54,
            "text": "你可以回过头来想想你自己的业务。"
        },
        {
            "start": 186.54,
            "end": 190.11999999999998,
            "text": "我个人认为，每个做企业的人都应该问自己三个问题。"
        },
        {
            "start": 190.12,
            "end": 192.62,
            "text": "第一，我的目标客户到底是谁？"
        },
        {
            "start": 192.62,
            "end": 195.82,
            "text": "更重要的是，我主动选择不服务谁？"
        },
        {
            "start": 195.82,
            "end": 198.04,
            "text": "第二，我提供什么独特的价值？"
        },
        {
            "start": 198.04,
            "end": 201.81999999999996,
            "text": "这个value proposition，和竞争对手到底有什么本质区别？"
        },
        {
            "start": 201.82,
            "end": 205.68,
            "text": "第三，我的各项业务活动之间，是不是相互支撑的？"
        },
        {
            "start": 205.68,
            "end": 207.96,
            "text": "还是各做各的，甚至相互矛盾？"
        },
        {
            "start": 208.33999999999997,
            "end": 210.32000000000002,
            "text": "如果你能清晰地回答这三个问题，"
        },
        {
            "start": 210.32000000000002,
            "end": 212.33999999999997,
            "text": "你就已经有了一个战略的雏形。"
        },
        {
            "start": 212.34,
            "end": 215.14,
            "text": "但是话说回来，如果你回答不上来，"
        },
        {
            "start": 215.14,
            "end": 217.94,
            "text": "或者发现你的回答和竞争对手基本上一模一样，"
        },
        {
            "start": 217.94,
            "end": 219.94,
            "text": "那说明你可能还没有真正的战略。"
        },
        {
            "start": 219.94,
            "end": 223.02000000000004,
            "text": "这其实是很多公司面临的真实状况。"
        },
        {
            "start": 223.02000000000004,
            "end": 224.76000000000002,
            "text": "波特曾经直言不讳地说："
        },
        {
            "start": 224.76000000000002,
            "end": 228.04,
            "text": "大多数公司没有战略，它们只有Operational Effectiveness，"
        },
        {
            "start": 228.04,
            "end": 229.52,
            "text": "运营效率的提升。"
        },
        {
            "start": 229.52,
            "end": 230.68,
            "text": "什么意思呢？"
        },
        {
            "start": 230.68,
            "end": 232.72,
            "text": "就是说很多公司每天在做的事情，"
        },
        {
            "start": 232.72,
            "end": 235.72,
            "text": "比如说优化流程、降低成本、提高质量、"
        },
        {
            "start": 235.94,
            "end": 238.16,
            "text": "提升服务，等等吧，这些都是好事。"
        },
        {
            "start": 238.16,
            "end": 240.52,
            "text": "但这些叫运营效率，不叫战略。"
        },
        {
            "start": 240.52,
            "end": 241.48,
            "text": "为什么呢？"
        },
        {
            "start": 241.48,
            "end": 243.78,
            "text": "因为这些事情你的竞争对手也在做，"
        },
        {
            "start": 243.78,
            "end": 245.6,
            "text": "而且它们是没有尽头的。"
        },
        {
            "start": 245.6,
            "end": 247.18,
            "text": "你降了成本，别人也能降。"
        },
        {
            "start": 247.18,
            "end": 249.42,
            "text": "你提高了质量，别人也能提高。"
        },
        {
            "start": 249.42,
            "end": 251.68666666666667,
            "text": "战略是你做了一套不同的选择，"
        },
        {
            "start": 251.68666666666667,
            "end": 253.68,
            "text": "让你在某个特定的位置上，"
        },
        {
            "start": 253.68,
            "end": 255.76000000000005,
            "text": "建立起别人很难复制的优势。"
        },
        {
            "start": 255.76000000000005,
            "end": 260.02,
            "text": "运营效率是把事情做得更好，战略是选择做不一样的事情。"
        },
        {
            "start": 260.02,
            "end": 262.32,
            "text": "某种意义上来讲，这是一个根本性的区别。"
        },
        {
            "start": 262.32,
            "end": 265.38,
            "text": "好，总而言之，今天的核心要点有三个。"
        },
        {
            "start": 265.38,
            "end": 267.24666666666667,
            "text": "第一，战略的本质是取舍。"
        },
        {
            "start": 267.24666666666667,
            "end": 269.8,
            "text": "选择不做什么比选择做什么更重要。"
        },
        {
            "start": 269.8,
            "end": 270.32,
            "text": "第二，"
        },
        {
            "start": 270.46,
            "end": 272.98,
            "text": "好的战略是一套环环相扣的活动体系，"
        },
        {
            "start": 272.98,
            "end": 274.26,
            "text": "不是单个决策。"
        },
        {
            "start": 274.6,
            "end": 276.66,
            "text": "第三，战略不等于运营效率。"
        },
        {
            "start": 276.66,
            "end": 279.12,
            "text": "大多数公司在追求运营效率的提升，"
        },
        {
            "start": 279.12,
            "end": 281.04,
            "text": "但缺少真正的战略定位。"
        },
        {
            "start": 281.04,
            "end": 284.78,
            "text": "今天讲的这些，主要来自Michael Porter的竞争战略理论。"
        },
        {
            "start": 284.78,
            "end": 286.38,
            "text": "在接下来的几期里，"
        },
        {
            "start": 286.38,
            "end": 288.8,
            "text": "我会带大家深入学习波特五力模型、"
        },
        {
            "start": 288.8,
            "end": 290.77,
            "text": "竞争优势的两条基本路径，"
        },
        {
            "start": 290.77,
            "end": 295.08,
            "text": "帮你真正学会用这些工具来分析你自己的市场和竞争格局。"
        },
        {
            "start": 295.08,
            "end": 298.76,
            "text": "应该来说，这些工具非常practical，非常实用。"
        },
        {
            "start": 298.76,
            "end": 303.62,
            "text": "如果你听完想继续深入思考，可以把你公司的情况先写下来。"
        },
        {
            "start": 303.62,
            "end": 306.136,
            "text": "回到你的企业里，看看哪些选择是真正值得坚持的，"
        },
        {
            "start": 306.136,
            "end": 308.46,
            "text": "哪些看起来忙，但其实并不构成真正的战略。"
        },
        {
            "start": 308.46,
            "end": 310.54,
            "text": "这会非常有价值。"
        },
        {
            "start": 310.54,
            "end": 311.96,
            "text": "好，今天的分享就到这。"
        },
        {
            "start": 311.96,
            "end": 313.47999999999996,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 20.66,
        "index": 0
    },
    {
        "start": 20.66,
        "end": 45.36,
        "index": 1
    },
    {
        "start": 45.36,
        "end": 71.24,
        "index": 2
    },
    {
        "start": 71.24,
        "end": 131.68,
        "index": 3
    },
    {
        "start": 131.68,
        "end": 152.96,
        "index": 4
    },
    {
        "start": 152.96,
        "end": 194.7,
        "index": 5
    },
    {
        "start": 194.7,
        "end": 232.96,
        "index": 6
    },
    {
        "start": 232.96,
        "end": 271.72,
        "index": 7
    },
    {
        "start": 271.72,
        "end": 290.72,
        "index": 8
    },
    {
        "start": 290.72,
        "end": 9999,
        "index": 9
    }
], navigation: { nextLessonUrl: './lesson-strategy-02.html?entry={entry}' },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: '这节课会先帮你建立战略的底层判断：战略不是目标列表，而是方向、取舍与优先级。',
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: '你会先建立“方向、取舍、优先级”的战略框架。后面再进入竞争格局与增长路径时，会更容易形成系统判断。'
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: '因为在很多现实问题背后，真正卡住你的不是执行动作不够多，而是战略判断还不够清楚。先把战略定义讲清楚，后面的建议才会更稳。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '系统希望你先建立战略判断的底层框架，再去看竞争、增长和 AI 时代的新变量，这样学习路径会更稳。'
      }
    },
    reflection: { fields: [{ id: 'qPriority', key: 'q1' }, { id: 'qTradeoff', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] },
    redirects: {
      submitHref: './lesson-strategy-02.html?entry={entry}',
      secondaryHref: './lesson-strategy-02.html?entry={entry}',
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: './thought-card.html?source=lesson-strategy-01',
      coachSource: './ai-coach.html?source=lesson-strategy-01'
    },
    playbackEndTime: 298.6,
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于战略定义和战略取舍的思路打磨得更清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'AI时代，什么是战略？', module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = `./lesson-strategy-02.html?entry=${entryMode}`;
        if (els.completionModuleBtn) els.completionModuleBtn.href = `./module-strategy.html?entry=${entryMode}`;
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
