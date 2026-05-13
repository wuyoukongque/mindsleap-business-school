
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
      els.ctaTitle.textContent = '现在，把这节课整理成你的竞争判断卡';
      els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把五力框架落回你的行业现实里。';
      showCompletionSheet(api);
    } else if (time > 0.5) {
      els.lessonStatus.textContent = '学习中';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '边听边想，听完后开始整理';
      els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再判断你的行业真正卡在哪个力量上。';
    } else {
      els.lessonStatus.textContent = '未开始';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '先听课，再整理思路';
      els.ctaCopy.textContent = '建议先把整节课听完，再开始生成认知卡。你也可以先想一想：你的行业到底是不是一个好行业。';
    }
  }

  window.MindsLeapConfigs.lessons.strategy02 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Strategy 第2课',
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: '第2课：波特五力模型——看懂你的行业竞争格局',
      heroMeta: ['🧭 对齐 Strategy 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀竞争判断卡'],
      topNote: {
        title: '为什么这一节排在这里？',
        body: '因为在你理解“什么是战略”之后，接下来最关键的一步，就是先看懂行业竞争结构：你面对的到底是一个什么样的战场。',
        meta: ['预计时长：8-9 分钟', '你将获得：五力框架 + AI 时代竞争结构的判断视角']
      },
      player: {
        initialSlide: './assets/slides/lesson2/slide_01_title.png?v=20260410-strategy-safe-v1',
        initialSlideCount: '1 / 8',
        title: '当前内容：波特五力模型——看懂你的行业竞争格局',
        subtitle: '用五力框架看懂行业吸引力、价格战和 AI 时代竞争变量。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-strategy.html?entry=sequence#lesson-2',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '回到模块页',
        quickThoughtHref: './module-strategy.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节真正重要的，不是背出“五力”这五个词。',
        leadBody: '而是开始判断：你的行业到底好不好做？竞争最激烈的地方在哪里？AI 又在改变哪些力量？',
        questions: [
          { id: 'qForce', title: '1. 在五个力量里，哪一个对你所在行业的压力最大？', placeholder: '例如：现有竞争激烈、新进入者太多、替代品威胁大，或客户议价能力太强。', tip: '先写你感受最强的那个力量，不必一次把五个都分析完。' },
          { id: 'qBarrier', title: '2. AI 对你所在行业的进入壁垒，产生了什么影响？', placeholder: '例如：开发成本下降、内容生产门槛下降、分析能力更容易获得，或者新的数据壁垒正在形成。', tip: '这里最关键的是：AI 在降低旧壁垒，还是也在创造新壁垒？' },
          { id: 'qMove', title: '3. 如果你只能先做一个战略动作，你最想先改变哪个竞争变量？', placeholder: '例如：减少价格战、强化差异化、提高客户粘性、降低对供应商依赖，或建立更强的壁垒。', tip: '不要泛泛写“继续增长”，而要具体说：你最想先改哪个竞争变量。' }
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
        secondaryHref: './lesson-strategy-03.html?entry=sequence'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI时代，什么是战略？', body: '先建立战略的底层定义：方向、取舍与优先级。', badge: '已学过' },
          { no: 2, title: '波特五力模型：看懂你的行业竞争格局', body: '用五力框架判断行业吸引力与竞争结构。', badge: '当前', state: 'current' },
          { no: 3, title: '竞争优势的两条路：成本领先 vs 差异化', body: '理解企业到底靠什么赢，以及 AI 是否改变了边界。', badge: '下一节', state: 'next', badgeClass: 'next' }
        ],
        nextLessonHref: './lesson-strategy-03.html?entry=sequence',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '推荐理由',
        reasonBody: '这节课会帮你把“行业竞争结构”看清楚。很多增长问题、价格战问题，背后首先是竞争结构问题。',
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: '五力不是分析表，而是判断框架', body: '它不是让你把五项都写一遍，而是帮助你判断：这个行业到底是不是一个值得长期投入的行业。' },
          { eyebrow: '核心概念 02', title: '增长难，往往先是竞争结构问题', body: '如果行业在打价格战、替代品多、客户议价强，再努力做动作，也可能会越来越卷。' },
          { eyebrow: '核心概念 03', title: 'AI 正在同时降低和重塑壁垒', body: 'AI 可能让进入门槛更低，也可能让数据、模型和分发能力变成新的壁垒。' },
          { eyebrow: '行动提示', title: '先改一个竞争变量', body: '听完后最值得做的，不是给行业打分，而是判断：你最想先改变哪个竞争变量。' }
        ]
      },
      completion: {
        title: '这节课你已经学完了',
        body: '建议马上进入下一节，继续把“行业格局”推进到“企业到底靠什么赢”的层面。',
        meta: ['当前完成：企业战略 2/14', '建议下一节：竞争优势的两条路', '也可以先整理这一节'],
        nextHref: './lesson-strategy-03.html?entry=sequence',
        nextLabel: '进入下一节',
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: 'strategy-02',
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: 'lesson2',
    audioSource: './assets/audio/strategy-ep02-five-forces-v2.mp3?v=20260409-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep02-five-forces-v2.vtt?v=20260409-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "lesson2/slide_01_title.png",
            "label": "标题页",
            "caption": "这一节先帮你建立行业竞争判断的基础框架。"
        },
        {
            "file": "lesson2/slide_02_five_forces.png",
            "label": "五力总览",
            "caption": "现有竞争、新进入者、替代品、供应商与买方，共同决定一个行业的吸引力。"
        },
        {
            "file": "lesson2/slide_03_rivalry.png",
            "label": "现有竞争",
            "caption": "很多增长难题，首先是现有竞争过度激烈。"
        },
        {
            "file": "lesson2/slide_04_entrants.png",
            "label": "新进入者",
            "caption": "当进入壁垒被降低，新玩家会更快涌入，利润就更容易被压缩。"
        },
        {
            "file": "lesson2/slide_05_substitutes.png",
            "label": "替代品",
            "caption": "你真正的竞争对手，不一定来自同一个行业。"
        },
        {
            "file": "lesson2/slide_06_suppliers_buyers.png",
            "label": "供应商与买方",
            "caption": "当上游或下游的议价权太强，你的利润空间就会被持续挤压。"
        },
        {
            "file": "lesson2/slide_07_questions.png",
            "label": "三道问题",
            "caption": "把五力框架带回企业，关键是找出最大压力与可改变的竞争变量。"
        },
        {
            "file": "lesson2/slide_08_summary.png",
            "label": "总结页",
            "caption": "这节课的目标，是帮你更清楚地判断：你的行业到底是不是一个好行业。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.52,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.52,
            "end": 3.64,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.64,
            "end": 6.34,
            "text": "上一期我们讲了战略的本质是取舍。"
        },
        {
            "start": 6.34,
            "end": 8.28,
            "text": "今天我们来学一个具体的工具，"
        },
        {
            "start": 8.28,
            "end": 12.26,
            "text": "帮你看懂你所在的行业到底是一个什么样的竞争格局。"
        },
        {
            "start": 12.26,
            "end": 15.84,
            "text": "这个工具叫波特五力模型，Porter's Five Forces。"
        },
        {
            "start": 15.84,
            "end": 20.1,
            "text": "这个模型是Michael Porter在1979年提出来的，"
        },
        {
            "start": 20.1,
            "end": 21.66,
            "text": "到今天快五十年了，"
        },
        {
            "start": 21.66,
            "end": 25.92,
            "text": "但它依然是分析行业竞争格局最好用的框架之一。"
        },
        {
            "start": 25.92,
            "end": 28.44,
            "text": "而且我今天还要告诉你，"
        },
        {
            "start": 28.44,
            "end": 31.6,
            "text": "AI时代这五个力量每一个都在发生变化。"
        },
        {
            "start": 31.6,
            "end": 33.86,
            "text": "所以我们不只是学经典，"
        },
        {
            "start": 33.86,
            "end": 36.54,
            "text": "我们还要看这个经典在今天怎么用。"
        },
        {
            "start": 36.54,
            "end": 39.08,
            "text": "好，五力模型的核心思想是什么呢？"
        },
        {
            "start": 39.08,
            "end": 39.76,
            "text": "它说，"
        },
        {
            "start": 39.76,
            "end": 42.44,
            "text": "一个行业的竞争激烈程度和利润水平，"
        },
        {
            "start": 42.44,
            "end": 44.7,
            "text": "不只是取决于现有的竞争对手，"
        },
        {
            "start": 44.7,
            "end": 47.46,
            "text": "而是取决于五种力量的综合作用。"
        },
        {
            "start": 47.46,
            "end": 49.32,
            "text": "这五种力量分别是："
        },
        {
            "start": 49.32,
            "end": 51.78,
            "text": "第一，现有竞争者之间的竞争。"
        },
        {
            "start": 51.78,
            "end": 55.62,
            "text": "这个最直观，就是你和你的同行之间打得有多凶。"
        },
        {
            "start": 55.62,
            "end": 57.44,
            "text": "第二，新进入者的威胁。"
        },
        {
            "start": 57.44,
            "end": 59.86,
            "text": "就是会不会有新的玩家进来搅局。"
        },
        {
            "start": 59.86,
            "end": 61.66,
            "text": "第三，替代品的威胁。"
        },
        {
            "start": 61.66,
            "end": 64.44,
            "text": "就是有没有别的产品或服务能替代你。"
        },
        {
            "start": 64.44,
            "end": 66.24,
            "text": "第四，供应商的议价能力。"
        },
        {
            "start": 66.24,
            "end": 68.52,
            "text": "就是你的上游能不能卡你脖子。"
        },
        {
            "start": 68.52,
            "end": 71.06,
            "text": "第五，买方的议价能力。"
        },
        {
            "start": 71.06,
            "end": 73.34,
            "text": "就是你的客户能不能压你的价。"
        },
        {
            "start": 73.34,
            "end": 75.84,
            "text": "这五个力量，任何一个力量强了，"
        },
        {
            "start": 75.84,
            "end": 77.62,
            "text": "你的行业利润就会被压缩。"
        },
        {
            "start": 77.62,
            "end": 81.34,
            "text": "五个力量都弱的行业，那就是一个赚钱的好行业。"
        },
        {
            "start": 81.34,
            "end": 84.36,
            "text": "五个力量都强的行业，大家都很辛苦。"
        },
        {
            "start": 84.36,
            "end": 88.98,
            "text": "我一个一个来讲，每一个力量我都会加上AI时代的新变化。"
        },
        {
            "start": 88.98,
            "end": 92.54,
            "text": "先说第一个力量：现有竞争者之间的竞争。"
        },
        {
            "start": 92.54,
            "end": 94.4,
            "text": "什么时候竞争特别激烈？"
        },
        {
            "start": 94.4,
            "end": 97.64,
            "text": "通常是这几种情况：行业里玩家很多、"
        },
        {
            "start": 97.64,
            "end": 100.04,
            "text": "增长速度慢、产品同质化严重、"
        },
        {
            "start": 100.04,
            "end": 101.36,
            "text": "退出壁垒高。"
        },
        {
            "start": 101.36,
            "end": 104.16,
            "text": "比如说餐饮行业，尤其是大众餐饮，"
        },
        {
            "start": 104.16,
            "end": 106.58,
            "text": "就是一个竞争极其激烈的行业。"
        },
        {
            "start": 106.58,
            "end": 108.48,
            "text": "门店多、增长有限、"
        },
        {
            "start": 108.48,
            "end": 110.46,
            "text": "你能做的菜别人也能做、"
        },
        {
            "start": 110.46,
            "end": 113.24,
            "text": "而且很多老板就算不赚钱也不愿意关店。"
        },
        {
            "start": 113.24,
            "end": 116.36,
            "text": "所以餐饮业的平均利润率是比较低的。"
        },
        {
            "start": 116.36,
            "end": 118.36,
            "text": "那AI对这个力量有什么影响呢？"
        },
        {
            "start": 118.36,
            "end": 122.82,
            "text": "一个很重要的变化是：AI会加速行业内的效率分化。"
        },
        {
            "start": 122.82,
            "end": 126.26,
            "text": "用好AI的公司，运营效率、营销效率、"
        },
        {
            "start": 126.26,
            "end": 130.2,
            "text": "服务效率可能比没用AI的公司高出一大截。"
        },
        {
            "start": 130.2,
            "end": 133.42,
            "text": "短期内这是竞争优势，但长期来看，"
        },
        {
            "start": 133.42,
            "end": 135.08,
            "text": "当大家都用上AI之后，"
        },
        {
            "start": 135.08,
            "end": 137.88,
            "text": "AI带来的效率提升就变成了行业标配，"
        },
        {
            "start": 137.88,
            "end": 139.44,
            "text": "不用就会被淘汰。"
        },
        {
            "start": 139.44,
            "end": 142.58,
            "text": "所以AI会让行业竞争的底线不断抬高。"
        },
        {
            "start": 142.58,
            "end": 146.78,
            "text": "以前你做得一般还能活，以后做得一般可能就活不下去了。"
        },
        {
            "start": 146.78,
            "end": 149.06,
            "text": "第二个力量：新进入者的威胁。"
        },
        {
            "start": 149.06,
            "end": 152.38,
            "text": "这个力量在AI时代发生了非常大的变化。"
        },
        {
            "start": 152.38,
            "end": 155.64,
            "text": "传统上，一个行业的进入壁垒包括什么？"
        },
        {
            "start": 155.64,
            "end": 159.28,
            "text": "资金壁垒、技术壁垒、品牌壁垒、规模效应、渠道控制。"
        },
        {
            "start": 159.28,
            "end": 161.88,
            "text": "这些壁垒越高，新玩家越难进来。"
        },
        {
            "start": 161.88,
            "end": 165.6,
            "text": "但AI正在大幅降低很多行业的进入壁垒。"
        },
        {
            "start": 165.6,
            "end": 168.6,
            "text": "比如说，以前你要做一个SaaS产品，"
        },
        {
            "start": 168.6,
            "end": 170.6,
            "text": "你需要一个十几人的技术团队，"
        },
        {
            "start": 170.6,
            "end": 172.14,
            "text": "花半年时间开发。"
        },
        {
            "start": 172.14,
            "end": 174.76,
            "text": "现在呢，两三个人用AI辅助编程，"
        },
        {
            "start": 174.76,
            "end": 176.46,
            "text": "可能一两个月就能做出来。"
        },
        {
            "start": 176.46,
            "end": 179.94,
            "text": "以前你要做内容营销，你需要一个五人的内容团队。"
        },
        {
            "start": 179.94,
            "end": 184.0,
            "text": "现在一个人加上AI，可能就能产出以前五个人的量。"
        },
        {
            "start": 184.0,
            "end": 186.34,
            "text": "以前你要做数据分析驱动的运营，"
        },
        {
            "start": 186.34,
            "end": 187.66,
            "text": "你需要招数据科学家，"
        },
        {
            "start": 187.66,
            "end": 189.08,
            "text": "年薪可能好几十万。"
        },
        {
            "start": 189.08,
            "end": 191.16,
            "text": "现在一个聪明的运营经理，"
        },
        {
            "start": 191.16,
            "end": 195.36,
            "text": "用AI工具就能做很多以前数据科学家才能做的分析。"
        },
        {
            "start": 195.36,
            "end": 198.16,
            "text": "这对已经在行业里的公司意味着什么？"
        },
        {
            "start": 198.16,
            "end": 200.74,
            "text": "你的护城河可能没你想的那么深。"
        },
        {
            "start": 200.74,
            "end": 203.24,
            "text": "以前你觉得\"我有一个二十人的技术团队，"
        },
        {
            "start": 203.24,
            "end": 204.36,
            "text": "别人追不上我\"。"
        },
        {
            "start": 204.36,
            "end": 208.76,
            "text": "但如果一个三人的创业团队用AI能做到你80%的功能，"
        },
        {
            "start": 208.76,
            "end": 210.92,
            "text": "你那二十人的优势就没那么大了。"
        },
        {
            "start": 210.92,
            "end": 214.48,
            "text": "所以在AI时代，你需要重新评估你的进入壁垒。"
        },
        {
            "start": 214.48,
            "end": 218.42,
            "text": "那些纯粹靠人力堆出来的壁垒，正在被AI瓦解。"
        },
        {
            "start": 218.42,
            "end": 220.38,
            "text": "真正持久的壁垒是什么？"
        },
        {
            "start": 220.38,
            "end": 223.8,
            "text": "数据壁垒、网络效应、品牌信任、监管牌照。"
        },
        {
            "start": 223.8,
            "end": 226.4,
            "text": "这些是AI不太容易突破的。"
        },
        {
            "start": 226.4,
            "end": 228.38,
            "text": "第三个力量：替代品的威胁。"
        },
        {
            "start": 228.9,
            "end": 231.5,
            "text": "替代品不是指竞争对手的产品，"
        },
        {
            "start": 231.5,
            "end": 234.82,
            "text": "而是指能满足同样需求的不同产品。"
        },
        {
            "start": 234.82,
            "end": 237.7,
            "text": "比如说，高铁是飞机的替代品。"
        },
        {
            "start": 237.7,
            "end": 240.28,
            "text": "Zoom是商务差旅的替代品。"
        },
        {
            "start": 240.28,
            "end": 242.9,
            "text": "外卖是去餐厅吃饭的替代品。"
        },
        {
            "start": 242.9,
            "end": 246.04,
            "text": "AI时代，替代品的威胁变得更大了。"
        },
        {
            "start": 246.04,
            "end": 246.38,
            "text": "为什么？"
        },
        {
            "start": 246.86,
            "end": 250.82,
            "text": "因为AI可以用完全不同的方式解决同一个问题。"
        },
        {
            "start": 250.82,
            "end": 251.64,
            "text": "举个例子。"
        },
        {
            "start": 251.64,
            "end": 254.54,
            "text": "传统的管理咨询公司，它的产品是什么？"
        },
        {
            "start": 254.54,
            "end": 258.02,
            "text": "是一份PPT报告加上一些现场建议。"
        },
        {
            "start": 258.02,
            "end": 259.72,
            "text": "这个产品的替代品是什么？"
        },
        {
            "start": 259.72,
            "end": 263.56,
            "text": "以前可能是内部咨询团队，或者行业分析报告。"
        },
        {
            "start": 264.02000000000004,
            "end": 264.78,
            "text": "但现在，"
        },
        {
            "start": 264.78,
            "end": 269.42,
            "text": "一个AI Agent可能就能做出质量还不错的行业分析和战略建议。"
        },
        {
            "start": 269.42,
            "end": 271.72,
            "text": "它不会完全替代McKinsey，"
        },
        {
            "start": 271.72,
            "end": 274.06,
            "text": "但对于很多中小企业来说，"
        },
        {
            "start": 274.06,
            "end": 276.42,
            "text": "AI可能是一个80分的替代品，"
        },
        {
            "start": 276.42,
            "end": 278.16,
            "text": "而且价格只有1%。"
        },
        {
            "start": 278.52,
            "end": 279.96,
            "text": "再比如说，法律服务。"
        },
        {
            "start": 279.96,
            "end": 283.64,
            "text": "以前你签合同要找律师，一次好几千甚至好几万。"
        },
        {
            "start": 283.64,
            "end": 287.5,
            "text": "现在AI合同审查工具几百块钱就能做一个基础审查。"
        },
        {
            "start": 287.5,
            "end": 290.04,
            "text": "对于简单的合同，这就是一个替代品。"
        },
        {
            "start": 290.04,
            "end": 292.26,
            "text": "所以当你做战略分析的时候，"
        },
        {
            "start": 292.26,
            "end": 295.06,
            "text": "不能只看你传统意义上的竞争对手，"
        },
        {
            "start": 295.06,
            "end": 298.1,
            "text": "你还要看AI有没有可能成为你的替代品。"
        },
        {
            "start": 298.1,
            "end": 300.86,
            "text": "第四个力量：供应商的议价能力。"
        },
        {
            "start": 300.86,
            "end": 302.14,
            "text": "这个比较好理解。"
        },
        {
            "start": 302.14,
            "end": 303.76,
            "text": "如果你的供应商很少，"
        },
        {
            "start": 303.76,
            "end": 305.34,
            "text": "或者你很难换供应商，"
        },
        {
            "start": 305.34,
            "end": 307.5,
            "text": "那供应商就有很强的议价能力，"
        },
        {
            "start": 307.5,
            "end": 309.46,
            "text": "可以提价或者降低质量。"
        },
        {
            "start": 309.46,
            "end": 311.88,
            "text": "AI时代一个有意思的变化是什么？"
        },
        {
            "start": 311.88,
            "end": 316.2,
            "text": "AI大模型的供应商正在成为很多企业的关键供应商。"
        },
        {
            "start": 316.2,
            "end": 317.12,
            "text": "你想想看，"
        },
        {
            "start": 317.12,
            "end": 319.98,
            "text": "如果你的产品高度依赖OpenAI的API，"
        },
        {
            "start": 319.98,
            "end": 322.24,
            "text": "那OpenAI就是你的关键供应商。"
        },
        {
            "start": 322.24,
            "end": 323.6,
            "text": "它涨价你怎么办？"
        },
        {
            "start": 323.6,
            "end": 324.86,
            "text": "它改了API你怎么办？"
        },
        {
            "start": 324.86,
            "end": 326.74,
            "text": "它限制了某些功能你怎么办？"
        },
        {
            "start": 326.74,
            "end": 331.04,
            "text": "这就是为什么很多公司会同时对接多个大模型提供商，"
        },
        {
            "start": 331.04,
            "end": 333.5,
            "text": "通义千问、DeepSeek、GPT都接上。"
        },
        {
            "start": 333.5,
            "end": 337.0,
            "text": "这不只是为了比较效果，更是为了降低供应商依赖。"
        },
        {
            "start": 337.0,
            "end": 340.02,
            "text": "这个在战略上叫做多元化供应商策略。"
        },
        {
            "start": 340.58000000000004,
            "end": 342.84,
            "text": "所以如果你的业务用到了AI，"
        },
        {
            "start": 342.84,
            "end": 345.72,
            "text": "一定要考虑AI供应商的议价能力。"
        },
        {
            "start": 345.72,
            "end": 347.68,
            "text": "不要把鸡蛋放在一个篮子里。"
        },
        {
            "start": 347.68,
            "end": 350.18,
            "text": "第五个力量：买方的议价能力。"
        },
        {
            "start": 350.18,
            "end": 352.42,
            "text": "买方，也就是你的客户。"
        },
        {
            "start": 352.42,
            "end": 355.0,
            "text": "当客户选择很多、转换成本低、"
        },
        {
            "start": 355.0,
            "end": 356.4,
            "text": "信息透明度高的时候，"
        },
        {
            "start": 356.4,
            "end": 359.67999999999995,
            "text": "客户的议价能力就很强，你就很难涨价。"
        },
        {
            "start": 359.68,
            "end": 363.06,
            "text": "AI时代的一个变化是：信息更加透明了。"
        },
        {
            "start": 363.06,
            "end": 366.76,
            "text": "客户可以用AI快速比价、快速评估不同方案。"
        },
        {
            "start": 366.76,
            "end": 369.94,
            "text": "以前客户可能因为信息不对称而接受高价，"
        },
        {
            "start": 369.94,
            "end": 372.28,
            "text": "现在AI帮客户做了功课，"
        },
        {
            "start": 372.28,
            "end": 373.88,
            "text": "这个信息差在缩小。"
        },
        {
            "start": 373.88,
            "end": 377.38,
            "text": "但反过来，AI也能帮你增强客户粘性。"
        },
        {
            "start": 377.38,
            "end": 381.62,
            "text": "如果你用AI为每个客户提供了高度个性化的服务，"
        },
        {
            "start": 381.62,
            "end": 384.1,
            "text": "客户的转换成本就提高了。"
        },
        {
            "start": 384.1,
            "end": 385.24,
            "text": "因为他换到别家，"
        },
        {
            "start": 385.24,
            "end": 387.14,
            "text": "要重新\"训练\"那个系统，"
        },
        {
            "start": 387.14,
            "end": 388.88,
            "text": "重新建立数据。"
        },
        {
            "start": 388.88,
            "end": 391.56,
            "text": "比如说，如果你是一个CRM软件，"
        },
        {
            "start": 391.56,
            "end": 395.62,
            "text": "你帮客户建了一套AI驱动的客户洞察系统。"
        },
        {
            "start": 395.62,
            "end": 398.76,
            "text": "客户用得越久，AI越了解他的客户。"
        },
        {
            "start": 398.76,
            "end": 402.12,
            "text": "这时候他想换一个CRM，代价就很大了。"
        },
        {
            "start": 402.12,
            "end": 404.22,
            "text": "这就是AI创造的转换成本。"
        },
        {
            "start": 404.22,
            "end": 406.2,
            "text": "好，五个力量都讲完了。"
        },
        {
            "start": 406.2,
            "end": 407.8,
            "text": "我帮大家串一下。"
        },
        {
            "start": 407.8,
            "end": 411.04,
            "text": "做五力分析的时候，你要问自己这五个问题："
        },
        {
            "start": 411.04,
            "end": 413.72,
            "text": "第一，我的行业里竞争有多激烈？"
        },
        {
            "start": 413.72,
            "end": 416.24,
            "text": "AI在加剧还是缓解竞争？"
        },
        {
            "start": 416.24,
            "end": 418.74,
            "text": "第二，新玩家进来容易吗？"
        },
        {
            "start": 418.74,
            "end": 420.72,
            "text": "AI有没有在降低进入壁垒？"
        },
        {
            "start": 420.72,
            "end": 422.54,
            "text": "第三，有没有替代品？"
        },
        {
            "start": 422.54,
            "end": 425.28,
            "text": "AI本身会不会成为我的替代品？"
        },
        {
            "start": 425.28,
            "end": 429.58,
            "text": "第四，我的供应商，特别是AI供应商，议价能力怎么样？"
        },
        {
            "start": 429.58,
            "end": 431.55999999999995,
            "text": "我有没有被绑定的风险？"
        },
        {
            "start": 431.56,
            "end": 434.24,
            "text": "第五，我的客户议价能力怎么样？"
        },
        {
            "start": 434.24,
            "end": 436.86,
            "text": "AI能不能帮我增加客户粘性？"
        },
        {
            "start": 436.86,
            "end": 439.12,
            "text": "五个问题全部回答一遍，"
        },
        {
            "start": 439.12,
            "end": 442.92,
            "text": "你就对你的行业竞争格局有了一个非常清晰的认知。"
        },
        {
            "start": 442.92,
            "end": 445.26,
            "text": "而且加上了AI的视角之后，"
        },
        {
            "start": 445.26,
            "end": 448.74,
            "text": "你的分析比传统的五力分析要深一层。"
        },
        {
            "start": 448.74,
            "end": 450.34,
            "text": "好，今天的思考题。"
        },
        {
            "start": 450.34,
            "end": 453.32,
            "text": "第一，用五力模型分析一下你所在的行业。"
        },
        {
            "start": 453.88,
            "end": 457.0,
            "text": "五个力量里面，哪一个对你的威胁最大？"
        },
        {
            "start": 457.0,
            "end": 460.88,
            "text": "第二，AI对你所在行业的进入壁垒产生了什么影响？"
        },
        {
            "start": 460.88,
            "end": 463.9,
            "text": "是在降低壁垒还是在创造新的壁垒？"
        },
        {
            "start": 463.9,
            "end": 468.0,
            "text": "第三，有没有AI驱动的替代品正在侵蚀你的市场？"
        },
        {
            "start": 468.0,
            "end": 470.28,
            "text": "如果有，你打算怎么应对？"
        },
        {
            "start": 470.88,
            "end": 472.94,
            "text": "总结一下今天的核心要点。"
        },
        {
            "start": 472.94,
            "end": 473.38,
            "text": "第一，"
        },
        {
            "start": 473.38,
            "end": 476.96,
            "text": "波特五力模型帮你从五个维度分析行业竞争格局："
        },
        {
            "start": 476.96,
            "end": 480.76,
            "text": "现有竞争、新进入者、替代品、供应商、买方。"
        },
        {
            "start": 480.76,
            "end": 484.56,
            "text": "第二，AI时代，每一个力量都在发生变化。"
        },
        {
            "start": 484.56,
            "end": 488.06,
            "text": "最显著的是：AI大幅降低了进入壁垒，"
        },
        {
            "start": 488.06,
            "end": 490.6,
            "text": "同时创造了新的替代品威胁。"
        },
        {
            "start": 490.88,
            "end": 493.88,
            "text": "第三，真正持久的壁垒不是人力规模，"
        },
        {
            "start": 493.88,
            "end": 496.1,
            "text": "而是数据壁垒、网络效应、"
        },
        {
            "start": 496.1,
            "end": 498.56,
            "text": "品牌信任和客户粘性。"
        },
        {
            "start": 498.56,
            "end": 501.78,
            "text": "第四，如果你的业务依赖AI供应商，"
        },
        {
            "start": 501.78,
            "end": 503.46,
            "text": "一定要做多元化布局，"
        },
        {
            "start": 503.46,
            "end": 505.88,
            "text": "避免被单一供应商卡脖子。"
        },
        {
            "start": 505.88,
            "end": 509.3,
            "text": "下一期我们继续讲竞争优势的两条基本路径："
        },
        {
            "start": 509.3,
            "end": 510.94,
            "text": "成本领先和差异化。"
        },
        {
            "start": 510.94,
            "end": 512.26,
            "text": "更有意思的是，"
        },
        {
            "start": 512.26,
            "end": 516.58,
            "text": "AI时代可能打破了\"你只能选其中一条\"的传统观点。"
        },
        {
            "start": 516.58,
            "end": 518.38,
            "text": "这个很颠覆，不要错过。"
        },
        {
            "start": 518.38,
            "end": 519.6,
            "text": "好，今天就到这里。"
        },
        {
            "start": 519.6,
            "end": 520.96,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 36.54,
        "index": 0
    },
    {
        "start": 36.54,
        "end": 88.98,
        "index": 1
    },
    {
        "start": 88.98,
        "end": 146.78,
        "index": 2
    },
    {
        "start": 146.78,
        "end": 226.4,
        "index": 3
    },
    {
        "start": 226.4,
        "end": 298.1,
        "index": 4
    },
    {
        "start": 298.1,
        "end": 407.8,
        "index": 5
    },
    {
        "start": 407.8,
        "end": 470.88,
        "index": 6
    },
    {
        "start": 470.88,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: './lesson-strategy-03.html?entry={entry}' },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: '这节课会帮你用五力框架判断行业竞争结构，看清增长难题背后的竞争逻辑。',
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: '你会更清楚地判断：你所在行业的压力主要来自哪里，AI 又在改变哪些竞争变量。'
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: '因为很多“增长难、价格战、越来越卷”的问题，表面上是增长问题，底层其实先是竞争结构问题。先把竞争格局看清楚，后面的建议才会更准。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '系统判断你当前更需要先看清行业竞争结构，而不是直接进入战术动作。先把五力看清楚，再谈增长动作会更稳。'
      }
    },
    reflection: { fields: [{ id: 'qForce', key: 'q1' }, { id: 'qBarrier', key: 'q2' }, { id: 'qMove', key: 'q3' }] },
    redirects: {
      submitHref: './lesson-strategy-03.html?entry={entry}',
      secondaryHref: './lesson-strategy-03.html?entry={entry}',
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: './thought-card.html?source=lesson-strategy-02',
      coachSource: './ai-coach.html?source=lesson-strategy-02'
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于行业竞争格局和五力模型的思路打磨得更清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: '波特五力模型：看懂你的行业竞争格局', module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = `./lesson-strategy-03.html?entry=${entryMode}`;
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
