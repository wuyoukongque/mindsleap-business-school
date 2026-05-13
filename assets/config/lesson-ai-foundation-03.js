(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.lessons.aiFoundation03 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第3课',
      backLink: { href: './module-ai-foundation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第3课：AI 能做什么，不能做什么？管理者的判断框架',
      heroMeta: ['🧭 对齐 Foundation 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么这一节排在这里？',
        body: '因为前两节帮你建立了 AI 的底层认知和大模型演化框架。接下来真正关键的是：你能不能把这些理解转换成实际的任务判断。',
        meta: ['预计时长：9-10 分钟', '你将获得：AI 任务分工矩阵 + 人机协作判断框架']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep03/slide_01_title.png?v=20260402-foundation-ep03',
        initialSlideCount: '1 / 9',
        title: '当前内容：AI 能做什么，不能做什么？管理者的判断框架',
        subtitle: '这一节已经对齐 foundation 模块的 ep03，播放器和字幕规范继续与前两节保持一致。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-3',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '先整理这一节'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节更重要的，不是陷入“AI 无所不能”或者“AI 没什么用”的情绪。',
        leadBody: '而是学会判断：不同任务到底该不该交给 AI。你可以先用下面 3 个问题开始整理。',
        introNote: '这一节会继续保持真实音频、逐句字幕与 slide 跟随的统一标准。',
        questions: [
          { id: 'qStructured', title: '1. 你最近一周最常做的工作里，哪些属于高结构化任务？', placeholder: '例如：翻译、摘要、整理、生成模板、标准化分析、固定流程回复。', tip: '先列 1-2 个最典型的任务，不用一次写很多。' },
          { id: 'qPrivateContext', title: '2. 在你的团队里，哪些任务虽然结构化，但必须依赖公司内部数据或上下文？', placeholder: '例如：销售数据分析、客户画像生成、合同审核、内部知识库查询。', tip: '这里最关键的是识别：AI 能力在，但前提是你有没有把数据准备好。' },
          { id: 'qHumanCore', title: '3. 哪些任务即使 AI 能参与，你也不会完全放手，必须由人拍板？', placeholder: '例如：品牌定位、战略取舍、危机处理、关键人决策、价值判断。', tip: '这一步最重要的是识别出：什么是人的核心领地。' }
        ],
        outroNote: '系统会把这些回答沉淀成你的下一版结构化认知卡。'
      },
      cta: {
        title: '先把这一节的判断沉淀下来',
        body: '你可以先继续体验“学习 → 整理 → 认知卡”的后续链路，把抽象理解真正沉淀下来。',
        submitLabel: '开始整理我的思路',
        coachLabel: '暂时跳过，继续学习'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '已完成' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 Agent 的进化', body: '理解大模型为什么带来质变，以及 Agent 为什么会成为下一阶段的关键。', badge: '已完成' },
          { no: 3, title: 'AI 能做什么，不能做什么？管理者的判断框架', body: '建立一个理性、结构化的 AI 任务评估矩阵。', badge: '当前', state: 'current' }
        ],
        nextLessonHref: './lesson-ai-foundation-04.html?entry=sequence',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-ai-foundation.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: '你会得到一个四象限判断框架：哪些任务直接交给 AI，哪些任务需要 AI + 数据，哪些任务只能让 AI 辅助，哪些任务必须由人来承担。',
        statusTitle: '学习状态',
        statusBody: '已接入音频',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: '判断任务是否适合 AI，要先看两个维度', body: '结构化程度 + 上下文类型，就是管理者判断 AI 任务分工最实用的两根轴。' },
          { eyebrow: '核心概念 02', title: '高结构化任务优先交给 AI', body: '第一和第二象限能显著释放效率，真正要把你的时间省给更高价值的判断。' },
          { eyebrow: '核心概念 03', title: '人的核心价值，是高风险、高情境、高价值判断任务', body: '第四象限里的任务，AI 可以参与，但最终承担责任和判断的，仍然必须是你。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: '任务矩阵', insert: '【我的矩阵】我需要把团队任务按四象限重新分一遍。' },
          { label: '效率洼地', insert: '【我的判断】高结构化任务优先交给 AI，团队表达需求的能力会越来越重要。' },
          { label: '人的领地', insert: '【人的领地】高风险决策和价值判断，仍然必须由人负责。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 哪些任务可以直接交给 AI？\n- 哪些任务需要 AI + 私有数据？\n- 哪些判断必须由人负责？'
      }
    },
    moduleId: 'ai-foundation', lessonId: 'ai-foundation-03', modulePage: 'module-ai-foundation.html', progressNamespace: 'aiFoundation', progressLessonKey: 'lesson3',
    audioSource: './assets/audio/ai-foundation-ep03-can-and-cannot.mp3?v=20260407-foundation-rerun-v1', vttSrc: './assets/subtitles/ai-foundation-ep03-can-and-cannot-fixed.vtt?v=20260407-foundation-rerun-v1', slidesSrc: './assets/timeline/ai-foundation-ep03-slides.json', slideBasePath: './assets/slides/', slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep03/slide_01_title.png",
            "label": "标题页",
            "caption": "这一节的重点，是建立一个理性的 AI 任务评估矩阵。"
        },
        {
            "file": "ai-foundation-ep03/slide_02_two_extremes.png",
            "label": "两种极端",
            "caption": "管理者最容易掉进两个极端：AI恐慌派和AI无视派。"
        },
        {
            "file": "ai-foundation-ep03/slide_03_two_axes.png",
            "label": "两个维度",
            "caption": "判断一个任务适不适合 AI，先看结构化程度和上下文类型。"
        },
        {
            "file": "ai-foundation-ep03/slide_04_sweet_spot.png",
            "label": "甜蜜区",
            "caption": "高结构化加通用上下文，是 AI 的甜蜜区。"
        },
        {
            "file": "ai-foundation-ep03/slide_05_ai_plus_data.png",
            "label": "AI加数据",
            "caption": "高结构化加私有上下文，不是 AI 没用，而是要先把数据接好。"
        },
        {
            "file": "ai-foundation-ep03/slide_06_human_core.png",
            "label": "人的核心领地",
            "caption": "低结构化任务里，AI 更适合辅助，真正的决策仍然属于人。"
        },
        {
            "file": "ai-foundation-ep03/slide_07_business_review.png",
            "label": "真实业务场景",
            "caption": "一个季度业务复盘，会同时分布在四个象限里。"
        },
        {
            "file": "ai-foundation-ep03/slide_08_traps.png",
            "label": "三个陷阱",
            "caption": "过度信任、低估进化速度、忽视数据安全，是最常见的三个坑。"
        },
        {
            "file": "ai-foundation-ep03/slide_09_summary.png",
            "label": "总结页",
            "caption": "真正重要的，是用 AI 释放低价值时间，把精力集中到高价值判断。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.4400000000000023,
            "end": 1.86,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 2.2,
            "end": 4.5,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.5,
            "end": 7.6,
            "text": "前两期我们讲了AI的本质和大模型的演化。"
        },
        {
            "start": 7.6,
            "end": 10.12,
            "text": "今天来聊一个非常实用的话题："
        },
        {
            "start": 10.12,
            "end": 12.42,
            "text": "AI到底能做什么，不能做什么？"
        },
        {
            "start": 12.42,
            "end": 14.22,
            "text": "为什么这个话题很重要？"
        },
        {
            "start": 14.24,
            "end": 15.72,
            "text": "因为我见过两种极端。"
        },
        {
            "start": 15.72,
            "end": 17.8,
            "text": "一种是AI恐慌派。"
        },
        {
            "start": 17.8,
            "end": 21.54,
            "text": "他们觉得AI无所不能，马上就要取代所有人的工作。"
        },
        {
            "start": 21.54,
            "end": 24.32,
            "text": "所以他们非常焦虑，但又不知道该怎么办。"
        },
        {
            "start": 24.32,
            "end": 25.98,
            "text": "另一种是AI无视派。"
        },
        {
            "start": 25.98,
            "end": 28.04,
            "text": "他们觉得AI也就那么回事儿，"
        },
        {
            "start": 28.04,
            "end": 30.76,
            "text": "写的东西质量不行，经常犯错，"
        },
        {
            "start": 31.0,
            "end": 31.7,
            "text": "不值得投入。"
        },
        {
            "start": 31.7,
            "end": 33.24,
            "text": "所以他们选择忽视。"
        },
        {
            "start": 33.24,
            "end": 35.42,
            "text": "这两种态度都有问题。"
        },
        {
            "start": 35.42,
            "end": 39.82,
            "text": "作为管理者，你需要一个理性的、结构化的判断框架。"
        },
        {
            "start": 39.82,
            "end": 41.56,
            "text": "今天我就给你一个。"
        },
        {
            "start": 41.56,
            "end": 44.78,
            "text": "这个框架呢，我叫它 AI 任务评估矩阵。"
        },
        {
            "start": 44.78,
            "end": 47.88,
            "text": "你拿到任何一个任务，从两个维度去评估。"
        },
        {
            "start": 47.88,
            "end": 50.68,
            "text": "第一个维度：这个任务的结构化程度怎么样？"
        },
        {
            "start": 50.68,
            "end": 51.82,
            "text": "什么叫结构化？"
        },
        {
            "start": 51.82,
            "end": 53.98,
            "text": "就是这个任务有没有明确的输入、"
        },
        {
            "start": 54.14,
            "end": 56.34,
            "text": "明确的规则、明确的输出标准。"
        },
        {
            "start": 56.8,
            "end": 57.54,
            "text": "比如说，"
        },
        {
            "start": 57.54,
            "end": 59.36,
            "text": "\"把这份英文合同翻译成中文\"，"
        },
        {
            "start": 59.36,
            "end": 61.2,
            "text": "这个任务结构化程度很高。"
        },
        {
            "start": 61.2,
            "end": 64.98,
            "text": "输入是英文合同，规则是翻译，输出标准是中文合同。"
        },
        {
            "start": 64.98,
            "end": 65.82,
            "text": "很清楚。"
        },
        {
            "start": 65.82,
            "end": 66.84,
            "text": "再比如说，"
        },
        {
            "start": 66.84,
            "end": 69.12,
            "text": "\"为我们公司想一个新的品牌定位\"，"
        },
        {
            "start": 69.12,
            "end": 71.44,
            "text": "这个任务结构化程度就很低。"
        },
        {
            "start": 71.44,
            "end": 73.12,
            "text": "什么算好的品牌定位？"
        },
        {
            "start": 73.42,
            "end": 74.38,
            "text": "没有标准答案。"
        },
        {
            "start": 74.38,
            "end": 77.84,
            "text": "它依赖创意、直觉和对市场的深度理解。"
        },
        {
            "start": 77.84,
            "end": 82.14,
            "text": "第二个维度：这个任务需要的上下文是通用的还是私有的？"
        },
        {
            "start": 82.14,
            "end": 82.9,
            "text": "什么意思呢？"
        },
        {
            "start": 82.96,
            "end": 85.74,
            "text": "就是完成这个任务所需要的知识和信息，"
        },
        {
            "start": 85.74,
            "end": 87.8,
            "text": "是公开的、通用的，"
        },
        {
            "start": 87.92,
            "end": 90.08,
            "text": "还是只存在于你公司内部的。"
        },
        {
            "start": 90.08,
            "end": 90.94,
            "text": "比如说，"
        },
        {
            "start": 90.94,
            "end": 93.72,
            "text": "\"帮我解释一下什么是杜邦分析法\"，"
        },
        {
            "start": 93.72,
            "end": 95.07999999999998,
            "text": "这个是通用知识。"
        },
        {
            "start": 95.08,
            "end": 99.6,
            "text": "AI读过无数的教科书和文章，它能答得非常好。"
        },
        {
            "start": 99.6,
            "end": 102.5,
            "text": "但如果你问\"我们公司上个季度ROE下"
        },
        {
            "start": 102.5,
            "end": 103.72,
            "text": "降的核心原因是什么\"，"
        },
        {
            "start": 103.72,
            "end": 106.46,
            "text": "这个就需要你公司的私有数据和内部context。"
        },
        {
            "start": 106.46,
            "end": 109.58,
            "text": "AI如果不接入你的数据，它是答不了的。"
        },
        {
            "start": 109.58,
            "end": 114.04,
            "text": "好，有了这两个维度，我们就可以画一个四象限矩阵。"
        },
        {
            "start": 114.04,
            "end": 117.04,
            "text": "第一象限：结构化高 + 通用上下文。"
        },
        {
            "start": 117.04,
            "end": 119.72,
            "text": "这是AI的甜蜜区，Sweet Spot。"
        },
        {
            "start": 119.72,
            "end": 122.16,
            "text": "典型任务包括：翻译、摘要、"
        },
        {
            "start": 122.16,
            "end": 125.48,
            "text": "数据格式转换、写邮件模板、代码生成、"
        },
        {
            "start": 125.48,
            "end": 126.22,
            "text": "报表解读。"
        },
        {
            "start": 126.22,
            "end": 127.16,
            "text": "这些任务，"
        },
        {
            "start": 127.16,
            "end": 129.94,
            "text": "AI可以做到80分甚至90分以上，"
        },
        {
            "start": 129.94,
            "end": 131.88,
            "text": "而且速度是人的十倍百倍。"
        },
        {
            "start": 131.88,
            "end": 134.14,
            "text": "你应该毫不犹豫地交给AI。"
        },
        {
            "start": 134.14,
            "end": 137.28,
            "text": "第二象限：结构化高 + 私有上下文。"
        },
        {
            "start": 137.79999999999998,
            "end": 139.56,
            "text": "这是AI加数据的领域。"
        },
        {
            "start": 139.56,
            "end": 142.08,
            "text": "比如说，分析你公司的销售数据、"
        },
        {
            "start": 142.08,
            "end": 144.46,
            "text": "根据你的客户画像生成营销文案、"
        },
        {
            "start": 144.46,
            "end": 145.78,
            "text": "审核你公司的合同。"
        },
        {
            "start": 145.78,
            "end": 149.42,
            "text": "AI的能力在，但它需要接入你的数据才能发挥出来。"
        },
        {
            "start": 149.42,
            "end": 151.62,
            "text": "这就涉及到数据基建的问题，"
        },
        {
            "start": 151.62,
            "end": 154.14,
            "text": "你需要把你的数据整理好、接入好，"
        },
        {
            "start": 154.14,
            "end": 155.06,
            "text": "AI才能干活。"
        },
        {
            "start": 155.57999999999998,
            "end": 157.24,
            "text": "很多企业说\"AI没用\"，"
        },
        {
            "start": 157.24,
            "end": 158.42,
            "text": "其实不是AI没用，"
        },
        {
            "start": 158.42,
            "end": 160.54,
            "text": "是它们没有把自己的数据准备好。"
        },
        {
            "start": 160.54,
            "end": 163.18,
            "text": "这个我们后面在数据分析模块会专门讲。"
        },
        {
            "start": 163.18,
            "end": 166.06,
            "text": "第三象限：结构化低 + 通用上下文。"
        },
        {
            "start": 166.06,
            "end": 168.7,
            "text": "这是AI辅助人做创意的领域。"
        },
        {
            "start": 168.7,
            "end": 171.6,
            "text": "比如说，头脑风暴新产品idea、"
        },
        {
            "start": 171.6,
            "end": 173.86,
            "text": "写品牌故事、设计营销活动方案。"
        },
        {
            "start": 173.86,
            "end": 176.86,
            "text": "这些任务没有标准答案，需要创意和判断。"
        },
        {
            "start": 176.86,
            "end": 178.28,
            "text": "AI能做什么呢？"
        },
        {
            "start": 178.28,
            "end": 181.82,
            "text": "它能给你大量的灵感和初始方案，帮你拓展思路。"
        },
        {
            "start": 181.82,
            "end": 184.88,
            "text": "但最终的选择和把关，必须由人来做。"
        },
        {
            "start": 184.88,
            "end": 188.7,
            "text": "我经常说，在这个象限里，AI是你最好的brainstorm partner。"
        },
        {
            "start": 188.7,
            "end": 192.74,
            "text": "它不知疲倦，不会觉得你的问题傻，而且知识面极广。"
        },
        {
            "start": 192.74,
            "end": 195.96,
            "text": "但它缺的是taste，缺的是审美和判断力。"
        },
        {
            "start": 195.96,
            "end": 197.2,
            "text": "这个得你来。"
        },
        {
            "start": 197.2,
            "end": 200.22,
            "text": "第四象限：结构化低 + 私有上下文。"
        },
        {
            "start": 200.22,
            "end": 201.8,
            "text": "这是人的核心领地。"
        },
        {
            "start": 201.8,
            "end": 203.0,
            "text": "比如说，"
        },
        {
            "start": 203.04,
            "end": 205.22,
            "text": "决定公司要不要进入一个新市场、"
        },
        {
            "start": 205.22,
            "end": 207.34,
            "text": "处理一场严重的公关危机、"
        },
        {
            "start": 207.34,
            "end": 210.42,
            "text": "跟核心高管进行一次艰难的谈话、"
        },
        {
            "start": 210.42,
            "end": 213.04,
            "text": "判断一个合伙人值不值得信任。"
        },
        {
            "start": 213.04,
            "end": 214.92,
            "text": "这些任务的共同特点是："
        },
        {
            "start": 214.92,
            "end": 217.62,
            "text": "它们需要深层的情境理解、价值判断、"
        },
        {
            "start": 217.62,
            "end": 220.06,
            "text": "人际敏感度和承担风险的勇气。"
        },
        {
            "start": 220.06,
            "end": 222.12,
            "text": "这些是AI目前做不到的，"
        },
        {
            "start": 222.12,
            "end": 224.94,
            "text": "也是你作为管理者最核心的价值所在。"
        },
        {
            "start": 224.94,
            "end": 230.06,
            "text": "好，我用一个实际的业务场景帮大家串一下这四个象限。"
        },
        {
            "start": 230.06,
            "end": 232.58,
            "text": "假设你要做一个季度的业务复盘。"
        },
        {
            "start": 232.58,
            "end": 236.02,
            "text": "这里面涉及的子任务，其实分布在四个象限里。"
        },
        {
            "start": 236.02,
            "end": 238.22,
            "text": "数据整理和可视化——第一象限。"
        },
        {
            "start": 238.22,
            "end": 240.42,
            "text": "AI来做，又快又好。"
        },
        {
            "start": 240.42,
            "end": 244.72,
            "text": "你给它原始数据，它几分钟就能生成图表和趋势分析。"
        },
        {
            "start": 244.72,
            "end": 248.44,
            "text": "基于你公司数据的归因分析——第二象限。"
        },
        {
            "start": 248.44,
            "end": 250.14,
            "text": "AI加你的数据。"
        },
        {
            "start": 250.14,
            "end": 252.56,
            "text": "比如说，这个季度营收下降了8%，"
        },
        {
            "start": 253.24,
            "end": 255.56,
            "text": "AI可以帮你从多个维度做归因，"
        },
        {
            "start": 255.56,
            "end": 259.1,
            "text": "是获客成本上升了，还是转化率下降了，"
        },
        {
            "start": 259.1,
            "end": 260.3,
            "text": "还是客单价降了。"
        },
        {
            "start": 260.3,
            "end": 263.02,
            "text": "但它需要接入你的实际数据。"
        },
        {
            "start": 263.02,
            "end": 265.54,
            "text": "制定下季度的改进方案——第三象限。"
        },
        {
            "start": 265.54,
            "end": 267.0,
            "text": "AI辅助创意。"
        },
        {
            "start": 267.0,
            "end": 269.92,
            "text": "它可以基于分析结果给你十个改进方向，"
        },
        {
            "start": 269.92,
            "end": 272.04,
            "text": "但哪个最适合你的公司、你的团队、"
        },
        {
            "start": 272.04,
            "end": 274.42,
            "text": "你的资源状况，这个需要你来判断。"
        },
        {
            "start": 274.42,
            "end": 278.44,
            "text": "最终的战略取舍和资源分配——第四象限。"
        },
        {
            "start": 278.44,
            "end": 280.04,
            "text": "纯粹人的工作。"
        },
        {
            "start": 280.04,
            "end": 284.14,
            "text": "砍掉哪条产品线，人员怎么调整，预算怎么重新分配。"
        },
        {
            "start": 284.14,
            "end": 286.48,
            "text": "这些决策涉及到利益博弈、"
        },
        {
            "start": 286.48,
            "end": 290.08,
            "text": "组织政治和价值取向，AI帮不了你。"
        },
        {
            "start": 290.08,
            "end": 294.16,
            "text": "你看，一个业务复盘这件事情，四个象限都涉及到了。"
        },
        {
            "start": 294.16,
            "end": 295.4,
            "text": "你的目标应该是："
        },
        {
            "start": 295.4,
            "end": 298.22,
            "text": "把第一和第二象限的工作尽量交给AI，"
        },
        {
            "start": 298.22,
            "end": 300.28,
            "text": "把你自己的时间释放出来，"
        },
        {
            "start": 300.28,
            "end": 302.48,
            "text": "集中在第三和第四象限上。"
        },
        {
            "start": 302.48,
            "end": 305.28,
            "text": "因为第三和第四象限才是你作为管理者最"
        },
        {
            "start": 305.28,
            "end": 306.72,
            "text": "能创造价值的地方。"
        },
        {
            "start": 306.72,
            "end": 310.28,
            "text": "接下来我想特别讲一下AI的几个常见陷阱，"
        },
        {
            "start": 310.28,
            "end": 311.3,
            "text": "这个大家一定要注意。"
        },
        {
            "start": 311.3,
            "end": 313.0799999999999,
            "text": "第一个陷阱：过度信任。"
        },
        {
            "start": 313.08,
            "end": 315.2,
            "text": "AI回答问题的时候非常自信，"
        },
        {
            "start": 315.2,
            "end": 318.66,
            "text": "措辞非常流畅，这很容易让人放松警惕。"
        },
        {
            "start": 318.66,
            "end": 321.46,
            "text": "但是话说回来，AI是会犯错的，"
        },
        {
            "start": 321.46,
            "end": 323.64,
            "text": "而且它犯错的方式跟人不一样。"
        },
        {
            "start": 323.64,
            "end": 326.7,
            "text": "人犯错通常是因为不知道，会说\"我不确定\"。"
        },
        {
            "start": 326.7,
            "end": 327.96999999999997,
            "text": "AI犯错呢，"
        },
        {
            "start": 327.96999999999997,
            "end": 330.0,
            "text": "它会一本正经地给你一个错误的答案，"
        },
        {
            "start": 330.0,
            "end": 331.48,
            "text": "而且看起来特别有道理。"
        },
        {
            "start": 332.06,
            "end": 333.52,
            "text": "这就是所谓的幻觉。"
        },
        {
            "start": 333.52,
            "end": 337.86,
            "text": "所以任何重要的决策，AI的输出一定要有人审核。"
        },
        {
            "start": 337.86,
            "end": 339.94,
            "text": "特别是涉及到数字、法律、"
        },
        {
            "start": 339.94,
            "end": 341.02,
            "text": "合同这些领域，"
        },
        {
            "start": 341.02,
            "end": 343.44,
            "text": "千万不能直接用AI的输出。"
        },
        {
            "start": 343.44,
            "end": 345.82,
            "text": "第二个陷阱：低估AI的进化速度。"
        },
        {
            "start": 345.82,
            "end": 348.69999999999993,
            "text": "我见过很多人说：\"我去年试过AI，"
        },
        {
            "start": 348.7,
            "end": 350.92,
            "text": "感觉不怎么样，回答质量不行。"
        },
        {
            "start": 350.92,
            "end": 351.84,
            "text": "\"但问题是，"
        },
        {
            "start": 351.84,
            "end": 355.26,
            "text": "去年和今年的AI能力可能已经差了一个数量级了。"
        },
        {
            "start": 355.26,
            "end": 358.36,
            "text": "AI的进步速度是按月算的，不是按年算的。"
        },
        {
            "start": 358.36,
            "end": 361.4,
            "text": "所以你不能用去年的体验来判断今天的AI。"
        },
        {
            "start": 361.4,
            "end": 365.76,
            "text": "我的建议是，每隔两三个月重新评估一次AI的能力。"
        },
        {
            "start": 365.76,
            "end": 367.26,
            "text": "你会惊讶地发现，"
        },
        {
            "start": 367.26,
            "end": 369.06,
            "text": "很多以前它做不好的事情，"
        },
        {
            "start": 369.06,
            "end": 370.6,
            "text": "现在已经能做得很好了。"
        },
        {
            "start": 370.6,
            "end": 373.04,
            "text": "第三个陷阱：忽视数据安全。"
        },
        {
            "start": 373.04,
            "end": 376.64,
            "text": "当你把公司的敏感信息输入到AI工具里的时候，"
        },
        {
            "start": 376.64,
            "end": 379.76,
            "text": "你有没有想过这些数据会不会被用来训练模型？"
        },
        {
            "start": 379.76,
            "end": 380.68,
            "text": "会不会泄露？"
        },
        {
            "start": 380.68,
            "end": 382.94,
            "text": "这是一个非常现实的风险。"
        },
        {
            "start": 382.94,
            "end": 387.14,
            "text": "所以在企业里使用AI，一定要有明确的数据安全策略。"
        },
        {
            "start": 387.14,
            "end": 389.92,
            "text": "哪些数据可以输入公共AI工具，"
        },
        {
            "start": 389.92,
            "end": 392.0,
            "text": "哪些必须用私有部署的模型，"
        },
        {
            "start": 392.0,
            "end": 393.4,
            "text": "这个边界要清楚。"
        },
        {
            "start": 393.4,
            "end": 396.4,
            "text": "我们在法律与合规模块会细讲。"
        },
        {
            "start": 396.4,
            "end": 398.36,
            "text": "好，留几个思考题给大家。"
        },
        {
            "start": 398.36,
            "end": 398.76,
            "text": "第一，"
        },
        {
            "start": 398.76,
            "end": 401.74,
            "text": "把你这周要做的五个核心工作任务列出来，"
        },
        {
            "start": 401.74,
            "end": 405.0,
            "text": "试着用我们今天讲的四象限矩阵去分类。"
        },
        {
            "start": 405.0,
            "end": 406.38,
            "text": "哪些可以交给AI？"
        },
        {
            "start": 406.38,
            "end": 408.18,
            "text": "第二，在你的团队里，"
        },
        {
            "start": 408.18,
            "end": 411.52,
            "text": "有没有哪些高结构化的工作还在靠人工完成？"
        },
        {
            "start": 411.52,
            "end": 413.38,
            "text": "这可能就是你的效率洼地。"
        },
        {
            "start": 413.78000000000003,
            "end": 417.6,
            "text": "第三，你的团队在使用AI的时候，有没有建立审核机制？"
        },
        {
            "start": 417.6,
            "end": 419.8,
            "text": "谁来检查AI的产出质量？"
        },
        {
            "start": 419.8,
            "end": 422.34,
            "text": "好，总结一下今天的核心要点。"
        },
        {
            "start": 422.34,
            "end": 425.1,
            "text": "第一，评估一个任务是否适合AI，"
        },
        {
            "start": 425.1,
            "end": 428.88,
            "text": "看两个维度：结构化程度和上下文类型。"
        },
        {
            "start": 428.88,
            "end": 432.12,
            "text": "第二，四象限矩阵：甜蜜区直接交给AI，"
        },
        {
            "start": 432.12,
            "end": 434.26,
            "text": "AI加数据需要做数据基建，"
        },
        {
            "start": 434.26,
            "end": 436.54,
            "text": "创意类AI做辅助人做决定，"
        },
        {
            "start": 436.54,
            "end": 438.6,
            "text": "战略判断类是人的核心领地。"
        },
        {
            "start": 438.6,
            "end": 440.46,
            "text": "第三，三个陷阱要注意："
        },
        {
            "start": 440.46,
            "end": 443.36,
            "text": "过度信任AI的输出、低估AI的进化速度、"
        },
        {
            "start": 443.36,
            "end": 444.58,
            "text": "忽视数据安全。"
        },
        {
            "start": 445.20000000000005,
            "end": 445.74,
            "text": "第四，"
        },
        {
            "start": 445.74,
            "end": 449.06,
            "text": "你的目标是用AI释放自己在低价值象限的时间，"
        },
        {
            "start": 449.06,
            "end": 452.2,
            "text": "把精力集中到高价值的判断和决策上。"
        },
        {
            "start": 452.2,
            "end": 456.6,
            "text": "下一期我们聊一个很现实的话题：AI的商业经济学。"
        },
        {
            "start": 456.6,
            "end": 458.64,
            "text": "用AI到底要花多少钱？"
        },
        {
            "start": 458.64,
            "end": 460.26,
            "text": "API调用怎么算费用？"
        },
        {
            "start": 460.26,
            "end": 463.24,
            "text": "什么时候应该用API，什么时候应该自建模型？"
        },
        {
            "start": 463.24,
            "end": 466.74,
            "text": "这些跟你做预算和ROI分析直接相关。"
        },
        {
            "start": 466.74,
            "end": 467.76,
            "text": "好，今天就到这里。"
        },
        {
            "start": 467.76,
            "end": 469.06,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.44,
        "end": 12.42,
        "index": 0
    },
    {
        "start": 12.42,
        "end": 41.56,
        "index": 1
    },
    {
        "start": 41.56,
        "end": 109.58,
        "index": 2
    },
    {
        "start": 109.58,
        "end": 131.88,
        "index": 3
    },
    {
        "start": 131.88,
        "end": 160.54,
        "index": 4
    },
    {
        "start": 160.54,
        "end": 222.12,
        "index": 5
    },
    {
        "start": 222.12,
        "end": 305.28,
        "index": 6
    },
    {
        "start": 305.28,
        "end": 419.8,
        "index": 7
    },
    {
        "start": 419.8,
        "end": 9999,
        "index": 8
    }
], navigation: { currentLessonHash: '#lesson-3', nextLessonUrl: './lesson-ai-foundation-04.html?entry={entry}' },
    entryCopy: {
      problem: {
        topNoteTitle: '为什么系统把你带到这一节？',
        topNoteBody: '因为当用户已经理解了 AI 的本质和演化，下一步最需要的是一个能直接拿去做任务判断的实用框架。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '你当前最需要的，不是再听抽象概念，而是获得一个可以直接拿去做任务分工的判断矩阵。'
      }
    },
    reflection: { fields: [{ id: 'qStructured', key: 'q1' }, { id: 'qPrivateContext', key: 'q2' }, { id: 'qHumanCore', key: 'q3' }] },
    redirects: { thoughtCardHref: './thought-card.html', thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-03', coachSource: './ai-coach.html?source=lesson-ai-foundation-03' },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于 AI 任务分工的判断想清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'AI 能做什么，不能做什么？管理者的判断框架', module: 'AI时代商业认知' })
  };
})(window);
