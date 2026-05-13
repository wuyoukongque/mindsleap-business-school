(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.lessons.aiFoundation02 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第2课',
      backLink: { href: './module-ai-foundation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第2课：大模型到底改变了什么？从 GPT 到 Agent 的进化',
      heroMeta: ['🧭 对齐 Foundation 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么这一节排在这里？',
        body: '因为你在第 1 节里已经先建立了 AI 的基础认知。现在要往前走一步：理解为什么大模型会带来这一轮质变，以及 Agent 为什么会成为下一阶段的关键。',
        meta: ['预计时长：10-11 分钟', '你将获得：大模型质变逻辑 + GPT 到 Agent 的演化框架']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep02/slide_01_title.png?v=20260402-foundation-ep02',
        initialSlideCount: '1 / 9',
        title: '当前内容：大模型到底改变了什么？从 GPT 到 Agent 的进化',
        subtitle: '这一节已经对齐 foundation 模块的 ep02，播放器和字幕规范与第 1 节保持一致。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-2',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '回到模块页',
        quickThoughtHref: './module-ai-foundation.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节更重要的，不是记住一堆技术名词。',
        leadBody: '而是学会判断：大模型和 Agent 到底意味着什么？你的企业该怎么看待它们？你可以先用下面 3 个问题开始整理。',
        introNote: '这一节会接入真实 Fish Audio 音频与逐句字幕，继续保持与前面页面相同的交互标准。',
        questions: [
          { id: 'qChangeArea', title: '1. 在你的业务里，大模型最可能先改变哪个环节？', placeholder: '例如：内容、客服、数据分析、内部协作、研究、销售支持等。', tip: '先写你最直觉想到的那个环节，不用一次写得很完整。' },
          { id: 'qCapability', title: '2. 如果自然语言已经变成新的“编程语言”，你所在团队最该补上的能力是什么？', placeholder: '例如：表达需求、拆解问题、设计协作流程，或建立质量审核机制。', tip: '这里最关键的是：团队需要从“会不会用工具”升级到“会不会和 AI 协作”。' },
          { id: 'qAgentTask', title: '3. 如果明天你的团队里多了一个 Agent，你最希望它独立完成什么任务？', placeholder: '例如：市场研究、信息收集、报告初稿、竞品监控，或客户整理。', tip: '这一步最重要的是开始把 Agent 当作未来的数字员工来思考。' }
        ],
        outroNote: '系统会把这些回答沉淀成你的下一版结构化认知卡。'
      },
      cta: {
        title: '这已经是当前模块最后一节',
        body: '系统会先保存你在本模块里的回答，然后进入模块复盘页。后续再统一加入更完整的 AI 总结能力。',
        submitLabel: '查看本模块复盘',
        coachLabel: '回到模块页',
        secondaryHref: './module-ai-foundation.html?entry=sequence'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '已完成' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 Agent 的进化', body: '理解大模型为什么带来质变，以及 Agent 为什么会成为下一阶段的关键。', badge: '当前', state: 'current' },
          { no: 3, title: 'AI 能做什么，不能做什么？管理者的判断框架', body: '帮助你判断哪些任务适合交给 AI，哪些任务必须保留人的判断。', badge: '后续开放', state: 'next', badgeClass: 'next' }
        ],
        nextLessonHref: './module-recap.html?module=ai-foundation',
        nextLessonLabel: '查看本模块复盘',
        moduleOverviewHref: './module-ai-foundation.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: '你会理解：大模型为什么让 AI 从“专用能力”走向“通用能力”，自然语言为什么会变成新的编程语言，以及 Agent 为什么会成为未来的数字员工。',
        statusTitle: '学习状态',
        statusBody: '已接入音频',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: '大模型带来的是质变', body: '大模型不是让 AI 稍微更强一点，而是让 AI 从一个任务一个模型，变成一个模型处理一大类任务。' },
          { eyebrow: '核心概念 02', title: '自然语言会变成新的生产接口', body: '以后不是只有会写代码的人能指挥计算机，能清楚表达需求的人也能直接指挥 AI。' },
          { eyebrow: '核心概念 03', title: 'Agent 会成为未来的数字员工', body: '未来更重要的问题，不只是“AI 会不会回答问题”，而是“AI 能不能替你执行任务”。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: '质变', insert: '【质变】大模型真正改变的，不只是效果，而是 AI 的可用性和普及速度。' },
          { label: '我的判断', insert: '【我的判断】自然语言会变成新的生产接口，团队表达需求的能力会越来越重要。' },
          { label: '下一步', insert: '【下一步】我要开始思考：哪些工作以后可以交给 Agent 做。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 大模型会先改变我的哪个环节？\n- 团队最该补上的 AI 协作能力是什么？\n- 如果有一个 Agent，我想让它做什么？'
      }
    },
    moduleId: 'ai-foundation',
    lessonId: 'ai-foundation-02',
    modulePage: 'module-ai-foundation.html',
    progressNamespace: 'aiFoundation',
    progressLessonKey: 'lesson2',
    audioSource: './assets/audio/ai-foundation-ep02-large-models.mp3?v=20260407-foundation-rerun-v1',
    vttSrc: './assets/subtitles/ai-foundation-ep02-large-models-fixed.vtt?v=20260407-foundation-rerun-v1',
    slidesSrc: './assets/timeline/ai-foundation-ep02-slides.json',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep02/slide_01_title.png",
            "label": "标题页",
            "caption": "大模型让 AI 从专用能力走向通用能力，真正带来了这一轮质变。"
        },
        {
            "file": "ai-foundation-ep02/slide_02_special_to_general.png",
            "label": "专用到通用",
            "caption": "在大模型之前，AI 更像一个任务一个模型；大模型之后，AI 开始变成通用能力。"
        },
        {
            "file": "ai-foundation-ep02/slide_03_barrier_drop.png",
            "label": "门槛下降",
            "caption": "大模型带来的第一个商业变化，是 AI 的使用门槛被大幅拉低。"
        },
        {
            "file": "ai-foundation-ep02/slide_04_language_programming.png",
            "label": "自然语言编程",
            "caption": "自然语言正在变成新的编程语言，表达需求的能力会直接变成生产力。"
        },
        {
            "file": "ai-foundation-ep02/slide_05_tool_to_colleague.png",
            "label": "工具到同事",
            "caption": "今天的 AI 不再只是工具，而开始更像一个会沟通的同事。"
        },
        {
            "file": "ai-foundation-ep02/slide_06_agent.png",
            "label": "Agent",
            "caption": "Agent 代表 AI 的下一个阶段：从被动回答，走向主动执行。"
        },
        {
            "file": "ai-foundation-ep02/slide_07_timeline.png",
            "label": "演化时间线",
            "caption": "规则、机器学习、大模型和 Agent 时代，是叠加关系，不是替代关系。"
        },
        {
            "file": "ai-foundation-ep02/slide_08_multimodal.png",
            "label": "多模态",
            "caption": "AI 正在从只懂文字，走向同时看图、听音频、处理多种信息。"
        },
        {
            "file": "ai-foundation-ep02/slide_09_summary.png",
            "label": "总结页",
            "caption": "管理者真正需要理解的，是大模型和 Agent 对商业的实际意义。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.5,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.5,
            "end": 3.64,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.64,
            "end": 8.4,
            "text": "上一期我们聊了AI的基本认知框架，模式识别加内容生成。"
        },
        {
            "start": 8.4,
            "end": 10.219999999999999,
            "text": "今天我们往前走一步，"
        },
        {
            "start": 10.219999999999999,
            "end": 11.66,
            "text": "聊一个更具体的问题："
        },
        {
            "start": 11.66,
            "end": 13.82,
            "text": "大模型到底改变了什么？"
        },
        {
            "start": 14.04,
            "end": 18.58,
            "text": "你可能注意到，AI这个概念其实已经存在了几十年了。"
        },
        {
            "start": 18.58,
            "end": 21.46,
            "text": "但为什么过去两三年突然爆发？"
        },
        {
            "start": 21.64,
            "end": 24.86,
            "text": "为什么ChatGPT一出来全世界都疯了？"
        },
        {
            "start": 25.1,
            "end": 30.2,
            "text": "因为大模型，Large Language Model，简称LLM，它带来了一个质变。"
        },
        {
            "start": 30.26,
            "end": 31.96,
            "text": "不是量变，是质变。"
        },
        {
            "start": 31.96,
            "end": 34.9,
            "text": "在大模型之前，AI是专用的。"
        },
        {
            "start": 34.92,
            "end": 35.48,
            "text": "什么意思呢？"
        },
        {
            "start": 35.48,
            "end": 37.32,
            "text": "你想做一个识别猫的AI，"
        },
        {
            "start": 37.32,
            "end": 40.14,
            "text": "你就要专门训练一个识别猫的模型。"
        },
        {
            "start": 40.14,
            "end": 42.18,
            "text": "你想做一个翻译英文的AI，"
        },
        {
            "start": 42.18,
            "end": 44.46,
            "text": "你就要专门训练一个翻译的模型。"
        },
        {
            "start": 44.92,
            "end": 47.36,
            "text": "每一个任务都需要一个专门的模型，"
        },
        {
            "start": 47.36,
            "end": 50.48,
            "text": "而且每个模型都需要大量的专业标注数据。"
        },
        {
            "start": 50.48,
            "end": 52.96,
            "text": "这个成本非常高，门槛非常高。"
        },
        {
            "start": 52.96,
            "end": 57.02,
            "text": "所以在大模型之前，AI基本上是大公司的专利。"
        },
        {
            "start": 57.02,
            "end": 61.16,
            "text": "谷歌、亚马逊、百度这些公司能玩，一般的企业玩不起。"
        },
        {
            "start": 61.16,
            "end": 63.58,
            "text": "但是大模型改变了这个游戏规则。"
        },
        {
            "start": 63.58,
            "end": 67.74,
            "text": "一个GPT-4，一个DeepSeek，它不是为某一个任务训练的。"
        },
        {
            "start": 67.74,
            "end": 71.18,
            "text": "它是通过阅读互联网上几乎所有的文本，"
        },
        {
            "start": 71.18,
            "end": 73.24,
            "text": "学会了\"语言\"这件事情本身。"
        },
        {
            "start": 73.24,
            "end": 77.96,
            "text": "学会了语言之后呢，它就能做几乎所有跟语言相关的任务。"
        },
        {
            "start": 77.96,
            "end": 82.10000000000002,
            "text": "写文章、做翻译、写代码、分析数据、做推理，等等吧。"
        },
        {
            "start": 82.10000000000002,
            "end": 84.78,
            "text": "这就是所谓的通用人工智能的雏形。"
        },
        {
            "start": 84.78,
            "end": 87.42,
            "text": "一个模型，解决一大类问题。"
        },
        {
            "start": 87.42,
            "end": 90.28,
            "text": "好，那这个变化对商业意味着什么呢？"
        },
        {
            "start": 90.28,
            "end": 92.68,
            "text": "我总结下来有三个根本性的影响。"
        },
        {
            "start": 93.17999999999999,
            "end": 96.28000000000002,
            "text": "第一，AI的使用门槛断崖式下降。"
        },
        {
            "start": 96.28000000000002,
            "end": 98.46,
            "text": "以前你要用AI，你需要什么？"
        },
        {
            "start": 98.46,
            "end": 100.34,
            "text": "你需要有数据科学家，"
        },
        {
            "start": 100.34,
            "end": 102.38,
            "text": "你需要有机器学习工程师，"
        },
        {
            "start": 102.38,
            "end": 104.24,
            "text": "你需要有高性能计算资源，"
        },
        {
            "start": 104.24,
            "end": 106.32,
            "text": "你需要有海量的标注数据。"
        },
        {
            "start": 106.32,
            "end": 109.04,
            "text": "一套下来，没有几百万搞不定。"
        },
        {
            "start": 109.04,
            "end": 110.2,
            "text": "现在呢？"
        },
        {
            "start": 110.2,
            "end": 114.22,
            "text": "你打开浏览器，输入一句话，AI就能帮你干活了。"
        },
        {
            "start": 114.22,
            "end": 117.76,
            "text": "一个月几十美金的API费用，一个实习生都用得起。"
        },
        {
            "start": 117.76,
            "end": 118.78,
            "text": "这意味着什么？"
        },
        {
            "start": 118.78,
            "end": 121.16,
            "text": "意味着AI不再是大公司的专利了。"
        },
        {
            "start": 121.16,
            "end": 122.98,
            "text": "一个三人的创业团队，"
        },
        {
            "start": 122.98,
            "end": 125.1,
            "text": "和一个三千人的大公司，"
        },
        {
            "start": 125.1,
            "end": 128.1,
            "text": "在AI能力上的差距被极大地缩小了。"
        },
        {
            "start": 128.1,
            "end": 132.2,
            "text": "这对竞争格局的影响是深远的，我们在战略模块会细讲。"
        },
        {
            "start": 132.2,
            "end": 135.54,
            "text": "第二个影响，自然语言成了新的编程语言。"
        },
        {
            "start": 135.54,
            "end": 136.68,
            "text": "这个很有意思。"
        },
        {
            "start": 136.68,
            "end": 139.78,
            "text": "以前你想让计算机帮你干活，你得写代码。"
        },
        {
            "start": 139.78,
            "end": 141.86,
            "text": "Python、Java、SQL，等等。"
        },
        {
            "start": 141.86,
            "end": 144.12,
            "text": "这就把90%的人挡在了门外。"
        },
        {
            "start": 144.12,
            "end": 148.1,
            "text": "但现在呢，你只要会说话，会打字，你就能指挥AI。"
        },
        {
            "start": 148.1,
            "end": 150.24,
            "text": "比如说，你跟AI说："
        },
        {
            "start": 150.24,
            "end": 153.78,
            "text": "\"帮我分析一下我们公司上个季度的销售数据，"
        },
        {
            "start": 153.78,
            "end": 155.72,
            "text": "找出增长最快的三个品类，"
        },
        {
            "start": 155.72,
            "end": 157.98,
            "text": "并且给我一些可能的原因分析。"
        },
        {
            "start": 157.98,
            "end": 159.22,
            "text": "\"它就能帮你做了。"
        },
        {
            "start": 159.22,
            "end": 162.96,
            "text": "你不需要会写SQL查询，不需要会做Excel透视表。"
        },
        {
            "start": 162.96,
            "end": 164.64,
            "text": "你只要能把需求说清楚。"
        },
        {
            "start": 164.64,
            "end": 168.32,
            "text": "这就是为什么我们在大纲里面有一期叫\"Prompt思维\"。"
        },
        {
            "start": 168.32,
            "end": 172.26,
            "text": "因为在AI时代，你表达需求的能力，就是你的生产力。"
        },
        {
            "start": 172.26,
            "end": 175.86,
            "text": "第三个影响，AI从工具变成了\"同事\"。"
        },
        {
            "start": 175.86,
            "end": 178.14,
            "text": "这个变化是最深刻的。"
        },
        {
            "start": 178.14,
            "end": 182.8,
            "text": "以前的软件，比如说Excel、PowerPoint、ERP系统，它们都是工具。"
        },
        {
            "start": 182.8,
            "end": 185.62,
            "text": "你给它一个指令，它执行，然后返回结果。"
        },
        {
            "start": 185.62,
            "end": 189.18,
            "text": "它不会主动跟你沟通，不会问你问题，不会给你建议。"
        },
        {
            "start": 189.18,
            "end": 190.9,
            "text": "但今天的AI不一样。"
        },
        {
            "start": 190.9,
            "end": 194.26,
            "text": "你跟豆包或者DeepSeek聊天，它会追问你，"
        },
        {
            "start": 194.26,
            "end": 196.76,
            "text": "它会给你建议，它会指出你的逻辑漏洞。"
        },
        {
            "start": 196.76,
            "end": 200.3,
            "text": "某种意义上来讲，它更像一个同事，而不是一个工具。"
        },
        {
            "start": 200.3,
            "end": 203.86,
            "text": "这就引出了一个非常重要的概念，就是AI Agent。"
        },
        {
            "start": 203.86,
            "end": 205.86,
            "text": "AI Agent是什么？"
        },
        {
            "start": 205.86,
            "end": 209.32,
            "text": "这个概念你一定要理解，因为它代表了AI的下一个阶段。"
        },
        {
            "start": 209.32,
            "end": 213.64,
            "text": "简单来说，Agent就是能够自主完成任务的AI。"
        },
        {
            "start": 213.64,
            "end": 216.14,
            "text": "现在我们用通义千问或者豆包，"
        },
        {
            "start": 216.14,
            "end": 218.7,
            "text": "基本上是一问一答的模式，是不是？"
        },
        {
            "start": 218.7,
            "end": 221.1,
            "text": "你问一个问题，它回答一个问题。"
        },
        {
            "start": 221.1,
            "end": 222.7,
            "text": "你再问，它再答。"
        },
        {
            "start": 222.7,
            "end": 224.64,
            "text": "这个叫做对话式AI。"
        },
        {
            "start": 224.64,
            "end": 226.14,
            "text": "但Agent不一样。"
        },
        {
            "start": 226.14,
            "end": 227.5,
            "text": "你给它一个目标，比如说："
        },
        {
            "start": 227.5,
            "end": 230.56,
            "text": "\"帮我研究一下东南亚市场的消费电子竞争格局，"
        },
        {
            "start": 230.56,
            "end": 232.08,
            "text": "输出一份分析报告。"
        },
        {
            "start": 232.08,
            "end": 233.38,
            "text": "\"然后它就自己去干了。"
        },
        {
            "start": 233.38,
            "end": 235.88,
            "text": "它会自己上网搜资料，自己整理数据，"
        },
        {
            "start": 235.88,
            "end": 238.0,
            "text": "自己写分析，自己生成图表。"
        },
        {
            "start": 238.6,
            "end": 240.82,
            "text": "中间可能会问你几个确认性的问题，"
        },
        {
            "start": 240.82,
            "end": 243.08,
            "text": "但大部分工作是它自主完成的。"
        },
        {
            "start": 243.08,
            "end": 245.92,
            "text": "你有没有感觉到，这跟你给下属布置任务很像？"
        },
        {
            "start": 245.92,
            "end": 249.0,
            "text": "你跟你的分析师说：\"小张，帮我做个东南亚市场调研。"
        },
        {
            "start": 249.0,
            "end": 250.98,
            "text": "\"小张就去做了，做完给你汇报。"
        },
        {
            "start": 250.98,
            "end": 253.06,
            "text": "Agent干的就是类似的事情。"
        },
        {
            "start": 253.06,
            "end": 256.72,
            "text": "所以我上一期说的\"数字员工\"，核心就是指AI Agent。"
        },
        {
            "start": 257.41999999999996,
            "end": 260.16,
            "text": "好，那我给大家梳理一下AI演化的脉络，"
        },
        {
            "start": 260.16,
            "end": 262.72,
            "text": "帮大家建立一个完整的时间线。"
        },
        {
            "start": 262.72,
            "end": 264.12,
            "text": "第一阶段，规则时代。"
        },
        {
            "start": 264.12,
            "end": 265.9,
            "text": "大概是2010年之前。"
        },
        {
            "start": 265.9,
            "end": 268.36,
            "text": "这个时候的AI基本上是基于规则的。"
        },
        {
            "start": 268.36,
            "end": 270.8,
            "text": "比如说，你设定一个if-then的逻辑："
        },
        {
            "start": 270.8,
            "end": 272.4,
            "text": "如果客户投诉了，"
        },
        {
            "start": 272.4,
            "end": 274.0600000000001,
            "text": "就自动发一封致歉邮件。"
        },
        {
            "start": 274.0600000000001,
            "end": 275.7,
            "text": "这是最原始的\"智能\"。"
        },
        {
            "start": 275.7,
            "end": 277.9,
            "text": "第二阶段，机器学习时代。"
        },
        {
            "start": 277.9,
            "end": 280.48,
            "text": "大概2010年到2020年。"
        },
        {
            "start": 280.48,
            "end": 283.52,
            "text": "这个时候AI学会了从数据中找模式。"
        },
        {
            "start": 283.52,
            "end": 287.96,
            "text": "推荐算法、风控模型、图像识别，都是这个时期的产物。"
        },
        {
            "start": 287.96,
            "end": 291.6,
            "text": "但是每个应用都需要专门的模型和大量的数据。"
        },
        {
            "start": 291.6,
            "end": 293.68,
            "text": "第三阶段，大模型时代。"
        },
        {
            "start": 293.68,
            "end": 295.78,
            "text": "2020年到现在。"
        },
        {
            "start": 295.78,
            "end": 297.92,
            "text": "GPT-3的出现是一个分水岭。"
        },
        {
            "start": 297.92,
            "end": 302.3,
            "text": "一个模型能做几乎所有语言任务，使用门槛极低。"
        },
        {
            "start": 302.3,
            "end": 305.78,
            "text": "这个阶段的核心特征是：通用性和易用性。"
        },
        {
            "start": 305.78,
            "end": 307.76,
            "text": "第四阶段，Agent时代。"
        },
        {
            "start": 307.76,
            "end": 309.3,
            "text": "现在正在发生。"
        },
        {
            "start": 309.3,
            "end": 311.62,
            "text": "AI从被动应答变成主动执行。"
        },
        {
            "start": 311.62,
            "end": 315.42,
            "text": "它不只是回答你的问题，它能替你完成完整的任务。"
        },
        {
            "start": 315.42,
            "end": 318.92,
            "text": "这个阶段的核心特征是：自主性和协作性。"
        },
        {
            "start": 318.92,
            "end": 323.1,
            "text": "大家注意，这四个阶段不是替代关系，是叠加关系。"
        },
        {
            "start": 323.1,
            "end": 327.7,
            "text": "今天的企业里面，四个阶段的AI可能同时存在。"
        },
        {
            "start": 327.7,
            "end": 330.68,
            "text": "你的客服系统可能还在用规则引擎，"
        },
        {
            "start": 330.68,
            "end": 333.34,
            "text": "你的风控可能在用机器学习模型，"
        },
        {
            "start": 333.34,
            "end": 335.6,
            "text": "你的内容团队在用大模型，"
        },
        {
            "start": 335.6,
            "end": 340.04,
            "text": "而你的某些业务流程正在尝试用Agent来自动化。"
        },
        {
            "start": 340.04,
            "end": 341.98,
            "text": "作为管理者，你要能够判断，"
        },
        {
            "start": 341.98,
            "end": 345.88,
            "text": "你的每一个业务场景适合用哪个阶段的AI。"
        },
        {
            "start": 345.88,
            "end": 349.3,
            "text": "不是越新越好，而是越匹配越好。"
        },
        {
            "start": 349.3,
            "end": 353.64,
            "text": "最后我想讲一个很有意思的趋势，叫做多模态。"
        },
        {
            "start": 353.64,
            "end": 357.5,
            "text": "以前的大语言模型，顾名思义，它只懂语言。"
        },
        {
            "start": 357.5,
            "end": 359.08,
            "text": "你跟它说话，它跟你说话。"
        },
        {
            "start": 359.08,
            "end": 361.78,
            "text": "但现在的模型已经能够同时处理文字、"
        },
        {
            "start": 361.78,
            "end": 363.78,
            "text": "图片、音频、视频、代码。"
        },
        {
            "start": 363.78,
            "end": 365.56000000000023,
            "text": "这就是多模态，Multimodal。"
        },
        {
            "start": 365.56000000000023,
            "end": 366.66,
            "text": "比如说，"
        },
        {
            "start": 366.66,
            "end": 369.32,
            "text": "你拍一张你公司仓库的照片发给AI，"
        },
        {
            "start": 369.32,
            "end": 371.54,
            "text": "它能帮你识别库存状况。"
        },
        {
            "start": 371.54,
            "end": 374.38,
            "text": "你把一段客户的电话录音发给它，"
        },
        {
            "start": 374.38,
            "end": 377.2,
            "text": "它能帮你分析客户的情绪和核心诉求。"
        },
        {
            "start": 377.2,
            "end": 381.34,
            "text": "你把一个Excel表格和一份PDF合同一起发给它，"
        },
        {
            "start": 381.34,
            "end": 382.72,
            "text": "它能帮你交叉分析。"
        },
        {
            "start": 382.72,
            "end": 386.02,
            "text": "这意味着AI的输入不再局限于文字了。"
        },
        {
            "start": 386.02,
            "end": 387.52,
            "text": "它可以\"看\"、可以\"听\"、"
        },
        {
            "start": 387.52,
            "end": 389.74,
            "text": "可以同时处理多种类型的信息。"
        },
        {
            "start": 389.74,
            "end": 392.48,
            "text": "这对商业应用来说是一个巨大的拓展。"
        },
        {
            "start": 392.48,
            "end": 395.5,
            "text": "好，今天的内容信息量比较大，"
        },
        {
            "start": 395.5,
            "end": 398.12,
            "text": "我帮大家总结一下核心要点。"
        },
        {
            "start": 398.12,
            "end": 400.31999999999994,
            "text": "第一，大模型带来了质变："
        },
        {
            "start": 400.32,
            "end": 402.66,
            "text": "AI从\"专用\"变成了\"通用\"，"
        },
        {
            "start": 402.66,
            "end": 404.66,
            "text": "使用门槛断崖式下降。"
        },
        {
            "start": 404.66,
            "end": 407.98,
            "text": "第二，自然语言成了新的编程语言。"
        },
        {
            "start": 407.98,
            "end": 411.68,
            "text": "你表达需求的能力，就是你在AI时代的生产力。"
        },
        {
            "start": 412.24,
            "end": 417.38,
            "text": "第三，AI正在从工具进化成Agent，从被动应答变成主动执行。"
        },
        {
            "start": 417.38,
            "end": 419.76,
            "text": "这就是你未来的\"数字员工\"。"
        },
        {
            "start": 419.76,
            "end": 423.16,
            "text": "第四，AI的演化有四个阶段：规则、"
        },
        {
            "start": 423.16,
            "end": 425.16,
            "text": "机器学习、大模型、Agent。"
        },
        {
            "start": 425.16,
            "end": 428.12,
            "text": "它们是叠加关系，不是替代关系。"
        },
        {
            "start": 428.12,
            "end": 431.82,
            "text": "管理者要能够判断每个场景该用哪一层。"
        },
        {
            "start": 431.82,
            "end": 435.06,
            "text": "下一期，我们来聊一个更实际的话题："
        },
        {
            "start": 435.06,
            "end": 437.22,
            "text": "AI到底能做什么，不能做什么。"
        },
        {
            "start": 437.22,
            "end": 439.88,
            "text": "我会给你一个非常具体的判断框架，"
        },
        {
            "start": 439.88,
            "end": 443.84,
            "text": "帮你快速评估一个任务到底适不适合交给AI做。"
        },
        {
            "start": 443.84,
            "end": 447.38,
            "text": "这个框架在你日常做决策的时候会非常好用。"
        },
        {
            "start": 447.38,
            "end": 448.48,
            "text": "好，今天就到这里。"
        },
        {
            "start": 448.48,
            "end": 449.92,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 11.66,
        "index": 0
    },
    {
        "start": 11.66,
        "end": 82.1,
        "index": 1
    },
    {
        "start": 82.1,
        "end": 128.1,
        "index": 2
    },
    {
        "start": 128.1,
        "end": 168.32,
        "index": 3
    },
    {
        "start": 168.32,
        "end": 200.3,
        "index": 4
    },
    {
        "start": 200.3,
        "end": 253.06,
        "index": 5
    },
    {
        "start": 253.06,
        "end": 341.98,
        "index": 6
    },
    {
        "start": 341.98,
        "end": 389.74,
        "index": 7
    },
    {
        "start": 389.74,
        "end": 9999,
        "index": 8
    }
], navigation: { currentLessonHash: '#lesson-2', nextLessonUrl: './module-recap.html?module=ai-foundation' },
    entryCopy: {
      problem: {
        topNoteTitle: '为什么系统把你带到这一节？',
        topNoteBody: '因为当用户已经理解“AI 到底是什么”后，下一步最需要的不是停在抽象概念，而是理解为什么大模型与 Agent 会真正改变商业。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '你当前最需要的，不是继续停留在 AI 的抽象概念，而是理解大模型和 Agent 到底意味着什么。'
      }
    },
    reflection: { fields: [{ id: 'qChangeArea', key: 'q1' }, { id: 'qCapability', key: 'q2' }, { id: 'qAgentTask', key: 'q3' }] },
    redirects: {
      submitHref: './module-recap.html?module=ai-foundation',
      secondaryHref: './module-ai-foundation.html?entry={entry}',
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-02',
      coachSource: './ai-coach.html?source=lesson-ai-foundation-02'
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于大模型和 Agent 的判断想清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({
      opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '',
      lesson: '大模型到底改变了什么？从 GPT 到 Agent 的进化', module: 'AI时代商业认知'
    })
  };
})(window);
