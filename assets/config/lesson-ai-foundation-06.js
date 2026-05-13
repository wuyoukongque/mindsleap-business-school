(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.lessons.aiFoundation06 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第6课',
      backLink: { href: './module-ai-foundation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第6课：AI时代的个人竞争力',
      heroMeta: ['🧭 对齐 Foundation 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么这一节排在最后？',
        body: '因为前面五节是在建立你对 AI 的理解和使用方式，而这一节要把视角重新拉回你自己：AI 越来越强时，你真正不可替代的价值是什么。',
        meta: ['预计时长：9-10 分钟', '你将获得：判断力 / 创造力 / 关系力框架 + AI时代角色定位']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep06/slide_01.png',
        initialSlideCount: '1 / 9',
        title: '当前内容：AI时代的个人竞争力',
        subtitle: '这一节会帮你把焦点从“AI 会不会替代我”转向“我该升级成什么角色”。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-6',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '先整理这一节'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节更重要的，不是焦虑“会不会被替代”。',
        leadBody: '而是开始重新定义：AI 把低价值任务接走以后，你真正该把时间投到哪里。你可以先用下面 3 个问题开始整理。',
        introNote: '这一节是模块零的收束课，建议你把它和前面几节连起来理解。',
        questions: [
          { id: 'qCoreRatio', title: '1. 在你当前的工作里，判断力、创造力、关系力各占多大比例？', placeholder: '可以简单写成：判断力 30%，创造力 20%，关系力 50% 之类。', tip: '先看清你现在的时间到底花在什么价值上。' },
          { id: 'qInstrument', title: '2. 如果你是 AI 时代的“乐团指挥”，你现在最缺哪一种 AI 乐器手？', placeholder: '例如：研究分析型、内容生产型、运营执行型、销售辅助型。', tip: '这个问题会帮助你想清楚，AI 该如何补位，而不是替代你。' },
          { id: 'qFutureRole', title: '3. 三年后你最想成为什么样的管理者？AI 在这个角色里应该扮演什么角色？', placeholder: '例如：更像策略型管理者、产品型创始人、增长型领导者、组织型教练。', tip: '这一步最重要的是定义你的升级方向，而不只是防守。' }
        ],
        outroNote: '系统会把这些回答沉淀成你的下一版结构化认知卡。'
      },
      cta: {
        title: '先把这一节的角色升级想清楚',
        body: '你可以先继续体验“学习 → 整理 → 认知卡”的后续链路，把抽象焦虑变成可讨论、可行动的思考结果。',
        submitLabel: '开始整理我的思路',
        coachLabel: '暂时跳过，回到模块页'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '已完成' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 Agent 的进化', body: '理解大模型为什么带来质变，以及 Agent 为什么会成为下一阶段的关键。', badge: '已完成' },
          { no: 3, title: 'AI 能做什么，不能做什么？管理者的判断框架', body: '建立一个理性、结构化的 AI 任务评估矩阵。', badge: '已完成' },
          { no: 4, title: 'AI 的商业经济学：成本、速度与规模', body: '理解 AI 的成本结构、规模价值，以及 API 与自建的判断逻辑。', badge: '已完成' },
          { no: 5, title: 'Prompt Thinking：怎么跟 AI 更好共创', body: '把提示词从“会不会写”升级为“会不会思考与拆解问题”。', badge: '已完成' },
          { no: 6, title: 'AI时代的个人竞争力', body: '思考管理者和专业人士在 AI 时代最需要重建的能力结构。', badge: '当前', state: 'current' }
        ],
        nextLessonHref: './module-ai-foundation.html?entry=sequence',
        nextLessonLabel: '回到模块总览',
        moduleOverviewHref: './module-ai-foundation.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: '你会得到一个更清晰的个人升级框架：判断力、创造力、关系力，以及 AI 时代“乐团指挥式”角色定位。',
        statusTitle: '学习状态',
        statusBody: '已接入音频',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: 'AI 替代的是任务，不是整个人', body: '关键不在于会不会被替代，而在于你能不能把时间转向更高价值的工作。' },
          { eyebrow: '核心概念 02', title: '三个最难替代的能力：判断力、创造力、关系力', body: '这三种能力，决定了你能不能在 AI 时代继续向上升级。' },
          { eyebrow: '核心概念 03', title: 'AI 时代的你，更像一个乐团指挥', body: '你不是和 AI 比谁执行更快，而是站在上面定义方向、标准和协同。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: '判断力', insert: '【判断力】AI 能给我很多方案，但最终取舍仍然需要我来做。' },
          { label: '关系力', insert: '【关系力】越是 AI 普及的时代，人的温度和信任越稀缺。' },
          { label: '乐团指挥', insert: '【角色升级】我不是跟 AI 拼执行，而是像指挥一样编排和协调。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 你最该升级的能力是什么？\n- 你最缺哪类 AI 乐器手？\n- 三年后你想成为什么样的管理者？'
      }
    },
    moduleId: 'ai-foundation', lessonId: 'ai-foundation-06', modulePage: 'module-ai-foundation.html', progressNamespace: 'aiFoundation', progressLessonKey: 'lesson6',
    audioSource: './assets/audio/ai-foundation-ep06-personal-competitiveness.mp3?v=20260407-foundation-rerun-v1', vttSrc: './assets/subtitles/ai-foundation-ep06-personal-competitiveness-fixed.vtt?v=20260407-foundation-rerun-v1', slidesSrc: './assets/timeline/ai-foundation-ep06-slides.json', slideBasePath: './assets/slides/', slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep06/slide_01.png",
            "label": "标题页",
            "caption": "这一节的重点，是想清楚 AI 时代你真正不可替代的价值。"
        },
        {
            "file": "ai-foundation-ep06/slide_02.png",
            "label": "AI替代任务",
            "caption": "AI 替代的不是整个人，而是工作中的一部分任务。"
        },
        {
            "file": "ai-foundation-ep06/slide_03.png",
            "label": "任务重构",
            "caption": "AI 接走低价值执行后，你要把时间投回更高价值的工作。"
        },
        {
            "file": "ai-foundation-ep06/slide_04.png",
            "label": "判断力",
            "caption": "AI 能给你很多方案，但最终取舍和判断仍然属于你。"
        },
        {
            "file": "ai-foundation-ep06/slide_05.png",
            "label": "创造力",
            "caption": "真正的商业创造力，不只是组合已有模式，更是给方向和愿景。"
        },
        {
            "file": "ai-foundation-ep06/slide_06.png",
            "label": "关系力",
            "caption": "越是 AI 普及的时代，信任、连接和人的温度越稀缺。"
        },
        {
            "file": "ai-foundation-ep06/slide_07.png",
            "label": "乐团指挥",
            "caption": "AI 时代的管理者，更像一个负责定方向与编排的指挥。"
        },
        {
            "file": "ai-foundation-ep06/slide_08.png",
            "label": "思考题",
            "caption": "你现在就可以盘点：哪些价值要交给 AI，哪些价值必须由你来承担。"
        },
        {
            "file": "ai-foundation-ep06/slide_09.png",
            "label": "总结页",
            "caption": "AI 不是你的对手，而是你的加速器，方向仍然由你来定。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.26,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.26,
            "end": 3.28,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.28,
            "end": 6.16,
            "text": "今天是模块零先导课的最后一期。"
        },
        {
            "start": 6.16,
            "end": 9.1,
            "text": "前面五期我们讲了AI的认知框架、"
        },
        {
            "start": 9.1,
            "end": 11.060000000000002,
            "text": "大模型演化、能力边界、"
        },
        {
            "start": 11.060000000000002,
            "end": 12.54,
            "text": "经济学和Prompt思维。"
        },
        {
            "start": 12.54,
            "end": 15.8,
            "text": "今天我想跟大家聊一个更个人的话题："
        },
        {
            "start": 15.8,
            "end": 19.74,
            "text": "在AI时代，你的不可替代性到底在哪里？"
        },
        {
            "start": 19.74,
            "end": 22.42,
            "text": "这个话题，我觉得是所有管理者、"
        },
        {
            "start": 22.42,
            "end": 24.88,
            "text": "创业者内心深处都在想的一个问题。"
        },
        {
            "start": 24.88,
            "end": 28.08,
            "text": "只不过有些人说出来了，有些人没说。"
        },
        {
            "start": 28.08,
            "end": 30.32,
            "text": "AI越来越强，越来越便宜，越来越快。"
        },
        {
            "start": 30.32,
            "end": 33.24,
            "text": "它能写文章、能做分析、能写代码、能做设计。"
        },
        {
            "start": 33.24,
            "end": 34.98,
            "text": "那我的价值在哪里？"
        },
        {
            "start": 34.98,
            "end": 36.88,
            "text": "我怎么确保自己不被替代？"
        },
        {
            "start": 37.64,
            "end": 40.44,
            "text": "今天我不想给你画饼，也不想给你灌鸡汤。"
        },
        {
            "start": 40.44,
            "end": 45.18,
            "text": "我想给你一个清晰的思考框架，帮你真正想清楚这个问题。"
        },
        {
            "start": 45.18,
            "end": 49.46,
            "text": "先说一个基本判断：AI替代的不是人，而是任务。"
        },
        {
            "start": 49.46,
            "end": 54.0,
            "text": "这句话很重要，我再说一遍：AI替代的不是人，而是任务。"
        },
        {
            "start": 54.0,
            "end": 55.02,
            "text": "什么意思？"
        },
        {
            "start": 55.02,
            "end": 57.42,
            "text": "你的工作不会整个被AI替代，"
        },
        {
            "start": 57.42,
            "end": 60.32,
            "text": "但你工作中的某些任务会被AI替代。"
        },
        {
            "start": 60.32,
            "end": 64.9,
            "text": "关键是，替代了那些任务之后，你剩下要做的事情是什么？"
        },
        {
            "start": 64.9,
            "end": 66.0,
            "text": "举个例子。"
        },
        {
            "start": 66.0,
            "end": 67.12,
            "text": "一个市场经理，"
        },
        {
            "start": 67.12,
            "end": 69.86,
            "text": "以前每天的工作可能是这样的："
        },
        {
            "start": 69.86,
            "end": 72.76,
            "text": "40%的时间在写各种文案和报告，"
        },
        {
            "start": 72.76,
            "end": 76.08,
            "text": "30%的时间在整理数据和做分析，"
        },
        {
            "start": 76.08,
            "end": 79.46,
            "text": "20%的时间在跟团队开会讨论策略，"
        },
        {
            "start": 79.46,
            "end": 83.08,
            "text": "10%的时间在做创意构思和战略规划。"
        },
        {
            "start": 83.53999999999999,
            "end": 85.2,
            "text": "AI来了之后会怎样？"
        },
        {
            "start": 85.2,
            "end": 88.66,
            "text": "那40%的文案和报告工作，"
        },
        {
            "start": 88.66,
            "end": 90.4,
            "text": "AI可以帮你做初稿，"
        },
        {
            "start": 90.4,
            "end": 92.18,
            "text": "你只需要审核和修改。"
        },
        {
            "start": 92.18,
            "end": 96.5,
            "text": "那30%的数据分析，AI可以帮你快速完成。"
        },
        {
            "start": 96.5,
            "end": 99.24,
            "text": "但这不意味着这个市场经理失业了。"
        },
        {
            "start": 99.24,
            "end": 100.46,
            "text": "恰恰相反，"
        },
        {
            "start": 100.46,
            "end": 103.28,
            "text": "它意味着这个市场经理以前只有30%的"
        },
        {
            "start": 103.28,
            "end": 105.66,
            "text": "时间做真正有价值的工作，"
        },
        {
            "start": 105.66,
            "end": 108.36,
            "text": "也就是策略讨论和创意构思。"
        },
        {
            "start": 108.36,
            "end": 110.96,
            "text": "AI把低价值的任务接走之后，"
        },
        {
            "start": 110.96,
            "end": 114.24,
            "text": "这个市场经理可以把80%甚至90%的"
        },
        {
            "start": 114.24,
            "end": 116.64,
            "text": "时间花在高价值的工作上。"
        },
        {
            "start": 116.64,
            "end": 119.72,
            "text": "这对管理者来说其实是一个巨大的机会。"
        },
        {
            "start": 119.72,
            "end": 123.44,
            "text": "前提是，你确实有能力做那些高价值的工作。"
        },
        {
            "start": 123.88,
            "end": 128.5,
            "text": "但如果你以前的价值就是靠\"勤勤恳恳做执行\"来体现的，"
        },
        {
            "start": 128.5,
            "end": 130.9,
            "text": "如果你的竞争力就在于\"我能加班\"、"
        },
        {
            "start": 130.9,
            "end": 132.98,
            "text": "\"我细心\"、\"我速度快\"，"
        },
        {
            "start": 132.98,
            "end": 135.28,
            "text": "那AI确实会对你形成挑战。"
        },
        {
            "start": 135.28,
            "end": 138.38,
            "text": "因为在这些维度上，AI永远比你更快、"
        },
        {
            "start": 138.38,
            "end": 140.06,
            "text": "更细心、更不知疲倦。"
        },
        {
            "start": 140.06,
            "end": 143.5,
            "text": "好，那到底什么能力是AI替代不了的？"
        },
        {
            "start": 143.5,
            "end": 145.24,
            "text": "我总结了三个核心能力。"
        },
        {
            "start": 145.24,
            "end": 146.7,
            "text": "第一个：判断力。"
        },
        {
            "start": 146.7,
            "end": 147.36,
            "text": "Judgment。"
        },
        {
            "start": 148.04,
            "end": 151.66,
            "text": "AI能给你十个方案，但它不能帮你选哪一个。"
        },
        {
            "start": 151.66,
            "end": 154.68,
            "text": "因为选择涉及到价值取向、风险偏好、"
        },
        {
            "start": 154.68,
            "end": 156.28,
            "text": "组织政治、时机判断。"
        },
        {
            "start": 156.28,
            "end": 159.7,
            "text": "这些是基于经验、直觉和智慧的综合判断。"
        },
        {
            "start": 160.45999999999998,
            "end": 161.26,
            "text": "比如说，"
        },
        {
            "start": 161.26,
            "end": 164.68,
            "text": "你的AI助手分析完市场数据后告诉你："
        },
        {
            "start": 164.68,
            "end": 165.76,
            "text": "\"根据数据分析，"
        },
        {
            "start": 165.76,
            "end": 168.1,
            "text": "A市场的增长潜力更大。"
        },
        {
            "start": 168.1,
            "end": 168.86,
            "text": "\"但你知道，"
        },
        {
            "start": 168.86,
            "end": 172.76,
            "text": "A市场的主要客户跟你的一个大股东有竞争关系，"
        },
        {
            "start": 172.76,
            "end": 175.38,
            "text": "进入A市场可能影响你的融资。"
        },
        {
            "start": 175.38,
            "end": 178.42,
            "text": "这种信息AI不知道，也判断不了。"
        },
        {
            "start": 178.42,
            "end": 181.72,
            "text": "再比如说，AI帮你做了一个裁员方案，"
        },
        {
            "start": 181.72,
            "end": 184.02,
            "text": "从效率角度看非常合理。"
        },
        {
            "start": 184.02,
            "end": 186.82,
            "text": "但你知道其中有一个人是团队的灵魂人物，"
        },
        {
            "start": 186.82,
            "end": 189.24,
            "text": "他走了整个团队的士气都会崩。"
        },
        {
            "start": 189.76,
            "end": 192.34,
            "text": "这种对\"人\"的理解，AI目前做不到。"
        },
        {
            "start": 192.34,
            "end": 194.18,
            "text": "判断力不是天生的，"
        },
        {
            "start": 194.18,
            "end": 197.7,
            "text": "它是你在商业实践中一点一点积累出来的。"
        },
        {
            "start": 197.7,
            "end": 200.18,
            "text": "你做的每一个决策，经历的每一个项目，"
        },
        {
            "start": 200.18,
            "end": 203.22,
            "text": "踩的每一个坑，都在增强你的判断力。"
        },
        {
            "start": 203.22,
            "end": 207.52,
            "text": "这是你最宝贵的资产，也是AI最难模仿的能力。"
        },
        {
            "start": 207.52,
            "end": 209.64,
            "text": "第二个核心能力：创造力。"
        },
        {
            "start": 209.64,
            "end": 210.38,
            "text": "Creativity。"
        },
        {
            "start": 210.9,
            "end": 215.66,
            "text": "但我说的创造力不是狭义的\"能画画、能写诗\"那种。"
        },
        {
            "start": 215.66,
            "end": 219.88,
            "text": "我说的是商业创造力——你能不能看到别人看不到的机会，"
        },
        {
            "start": 219.88,
            "end": 222.28,
            "text": "想到别人想不到的解决方案，"
        },
        {
            "start": 222.28,
            "end": 224.96,
            "text": "把看似不相关的东西连接在一起。"
        },
        {
            "start": 224.96,
            "end": 229.04,
            "text": "AI很擅长在已有的模式里面做组合和变化。"
        },
        {
            "start": 229.04,
            "end": 233.64,
            "text": "你让它在一千个已有的商业模式里做混搭，它做得很好。"
        },
        {
            "start": 233.64,
            "end": 238.88,
            "text": "但是真正的创新，往往是跳出所有已知模式的。"
        },
        {
            "start": 238.88,
            "end": 240.2,
            "text": "乔布斯做iPhone的时候，"
        },
        {
            "start": 240.2,
            "end": 243.2,
            "text": "没有任何历史数据可以告诉他\"触摸屏手"
        },
        {
            "start": 243.2,
            "end": 244.28,
            "text": "机是一个好主意\"。"
        },
        {
            "start": 244.28,
            "end": 247.02,
            "text": "所有的市场调研都会告诉你，"
        },
        {
            "start": 247.02,
            "end": 249.42,
            "text": "用户需要一个更好的键盘手机。"
        },
        {
            "start": 249.42,
            "end": 251.52,
            "text": "那种跳出框架的vision，"
        },
        {
            "start": 251.52,
            "end": 253.42,
            "text": "那种对未来的直觉判断，"
        },
        {
            "start": 253.42,
            "end": 255.54,
            "text": "这是人类创造力的核心。"
        },
        {
            "start": 255.54,
            "end": 257.92,
            "text": "但是话说回来，我要澄清一点。"
        },
        {
            "start": 257.92,
            "end": 260.9,
            "text": "AI时代的创造力不是跟AI对立的。"
        },
        {
            "start": 260.9,
            "end": 264.5,
            "text": "恰恰相反，最好的创造力是人加AI的组合。"
        },
        {
            "start": 264.5,
            "end": 268.42,
            "text": "你负责方向和vision，AI负责快速验证和执行。"
        },
        {
            "start": 268.42,
            "end": 272.06,
            "text": "以前你有一个idea，从想法到原型可能要三个月。"
        },
        {
            "start": 272.06,
            "end": 273.86,
            "text": "现在呢，你跟AI协作，"
        },
        {
            "start": 273.86,
            "end": 276.98,
            "text": "可能三天就能做出一个可以测试的原型。"
        },
        {
            "start": 276.98,
            "end": 279.0,
            "text": "这意味着你可以更快地试错、"
        },
        {
            "start": 279.0,
            "end": 280.16,
            "text": "更快地迭代、"
        },
        {
            "start": 280.16,
            "end": 282.92,
            "text": "更快地找到真正有价值的创新方向。"
        },
        {
            "start": 282.92,
            "end": 287.02,
            "text": "所以AI不是创造力的敌人，它是创造力的加速器。"
        },
        {
            "start": 287.02,
            "end": 289.38,
            "text": "但加速器再快，你得有方向。"
        },
        {
            "start": 289.38,
            "end": 291.4,
            "text": "方向感——这是人的工作。"
        },
        {
            "start": 291.4,
            "end": 294.02,
            "text": "第三个核心能力：关系力。"
        },
        {
            "start": 294.02,
            "end": 295.04,
            "text": "Relationship。"
        },
        {
            "start": 295.04,
            "end": 297.5,
            "text": "这个可能是最容易被低估的一个。"
        },
        {
            "start": 297.5,
            "end": 300.14,
            "text": "商业的本质是人与人之间的关系。"
        },
        {
            "start": 300.14,
            "end": 302.14,
            "text": "客户为什么买你的东西？"
        },
        {
            "start": 302.14,
            "end": 305.82,
            "text": "很多时候不只是因为产品好，而是因为信任你。"
        },
        {
            "start": 305.82,
            "end": 307.6,
            "text": "投资人为什么投你？"
        },
        {
            "start": 307.6,
            "end": 310.18,
            "text": "很大程度上是因为信任你这个人。"
        },
        {
            "start": 310.18,
            "end": 311.96,
            "text": "团队为什么跟着你干？"
        },
        {
            "start": 311.96,
            "end": 314.3,
            "text": "因为他们认可你、信任你。"
        },
        {
            "start": 314.3,
            "end": 315.14,
            "text": "AI再厉害，"
        },
        {
            "start": 315.14,
            "end": 318.18,
            "text": "它不能帮你去跟关键客户吃一顿饭、"
        },
        {
            "start": 318.18,
            "end": 319.72,
            "text": "在饭桌上建立信任。"
        },
        {
            "start": 319.72,
            "end": 324.0,
            "text": "它不能帮你在团队士气低落的时候给每个人打气。"
        },
        {
            "start": 324.0,
            "end": 327.96,
            "text": "它不能帮你在谈判桌上读懂对方的微表情，"
        },
        {
            "start": 327.96,
            "end": 330.10000000000014,
            "text": "判断他是不是在bluffing。"
        },
        {
            "start": 330.10000000000014,
            "end": 333.38,
            "text": "这些人际交互中的微妙判断、情感连接、"
        },
        {
            "start": 333.38,
            "end": 336.26,
            "text": "信任建立，是深深植根于人性的东西。"
        },
        {
            "start": 336.26,
            "end": 338.52,
            "text": "而且越是AI普及的时代，"
        },
        {
            "start": 338.52,
            "end": 341.1,
            "text": "这些\"人的温度\"就越稀缺、越珍贵。"
        },
        {
            "start": 341.56,
            "end": 344.44,
            "text": "我经常跟朋友说一句话：AI时代，"
        },
        {
            "start": 344.44,
            "end": 347.06,
            "text": "最值钱的技能可能不是技术技能，"
        },
        {
            "start": 347.06,
            "end": 348.28,
            "text": "而是人际技能。"
        },
        {
            "start": 348.28,
            "end": 352.8,
            "text": "当所有人都能用AI写出漂亮的PPT和分析报告的时候，"
        },
        {
            "start": 352.8,
            "end": 354.78,
            "text": "能够赢得人心的那个人，"
        },
        {
            "start": 354.78,
            "end": 356.64,
            "text": "才是真正有竞争力的人。"
        },
        {
            "start": 356.64,
            "end": 360.52,
            "text": "好，三个核心能力说完了：判断力、创造力、关系力。"
        },
        {
            "start": 360.52,
            "end": 363.44,
            "text": "接下来我想给大家一个非常实操的建议："
        },
        {
            "start": 363.44,
            "end": 366.34,
            "text": "怎么定位你自己在人机协作中的角色。"
        },
        {
            "start": 366.34,
            "end": 368.1,
            "text": "我的框架是这样的。"
        },
        {
            "start": 368.1,
            "end": 370.56,
            "text": "你可以把自己想象成一个乐团的指挥。"
        },
        {
            "start": 370.56,
            "end": 375.42,
            "text": "乐团里有各种乐器，小提琴、大提琴、长笛、打击乐。"
        },
        {
            "start": 375.42,
            "end": 377.32,
            "text": "每个乐器手都很厉害，"
        },
        {
            "start": 377.32,
            "end": 380.1,
            "text": "但乐团能不能演奏出伟大的音乐，"
        },
        {
            "start": 380.1,
            "end": 381.22,
            "text": "取决于指挥。"
        },
        {
            "start": 381.76,
            "end": 382.96,
            "text": "指挥做什么？"
        },
        {
            "start": 382.96,
            "end": 385.0,
            "text": "他选曲目，他定节奏，"
        },
        {
            "start": 385.0,
            "end": 387.52,
            "text": "他在各个声部之间做平衡，"
        },
        {
            "start": 387.52,
            "end": 389.98,
            "text": "他决定什么时候该强什么时候该弱。"
        },
        {
            "start": 389.98,
            "end": 394.76,
            "text": "他自己不演奏任何一种乐器，但没有他，整个乐团就散了。"
        },
        {
            "start": 394.76,
            "end": 396.86,
            "text": "在AI时代，你就是那个指挥。"
        },
        {
            "start": 397.44,
            "end": 398.8,
            "text": "AI是你的乐器手。"
        },
        {
            "start": 398.8,
            "end": 400.02,
            "text": "它能写，你让它写。"
        },
        {
            "start": 400.02,
            "end": 401.82,
            "text": "它能分析，你让它分析。"
        },
        {
            "start": 401.82,
            "end": 403.22,
            "text": "它能画，你让它画。"
        },
        {
            "start": 403.22,
            "end": 405.26,
            "text": "它能编程，你让它编程。"
        },
        {
            "start": 405.26,
            "end": 408.86,
            "text": "每一个\"乐器手\"都比你在那个具体技能上强。"
        },
        {
            "start": 408.86,
            "end": 409.94,
            "text": "但你做什么？"
        },
        {
            "start": 409.94,
            "end": 411.72,
            "text": "你定方向，你定标准，"
        },
        {
            "start": 411.72,
            "end": 414.44,
            "text": "你在各个AI工具之间做协调，"
        },
        {
            "start": 414.44,
            "end": 417.08,
            "text": "你判断产出的质量够不够好，"
        },
        {
            "start": 417.08,
            "end": 419.68,
            "text": "你决定最终交付给市场的是什么。"
        },
        {
            "start": 419.68,
            "end": 422.7,
            "text": "这就是AI时代管理者的核心定位："
        },
        {
            "start": 422.7,
            "end": 425.9,
            "text": "你不是跟AI比谁执行得更快、更好，"
        },
        {
            "start": 425.9,
            "end": 428.96,
            "text": "你是站在AI之上做指挥、做判断、"
        },
        {
            "start": 429.18,
            "end": 429.68,
            "text": "做决策。"
        },
        {
            "start": 429.68,
            "end": 433.64,
            "text": "好，模块零的最后，我想给大家一个整体性的思考。"
        },
        {
            "start": 433.64,
            "end": 438.08,
            "text": "过去六期，我们一起建立了AI时代的基本认知。"
        },
        {
            "start": 438.08,
            "end": 441.76,
            "text": "我们知道了AI是什么，大模型怎么演化，"
        },
        {
            "start": 441.76,
            "end": 443.84,
            "text": "AI能做什么不能做什么，"
        },
        {
            "start": 443.84,
            "end": 447.18,
            "text": "AI的经济学逻辑，怎么跟AI协作，"
        },
        {
            "start": 447.18,
            "end": 449.92,
            "text": "以及我们自己的不可替代性在哪里。"
        },
        {
            "start": 449.92,
            "end": 453.08,
            "text": "从下一期开始，我们就要进入战略管理模块了。"
        },
        {
            "start": 453.08,
            "end": 457.34000000000003,
            "text": "每一个商业学科，我们都会带着AI的视角去重新审视。"
        },
        {
            "start": 457.34000000000003,
            "end": 460.18,
            "text": "波特五力模型在AI时代有什么变化？"
        },
        {
            "start": 460.18,
            "end": 463.06,
            "text": "商业模式画布在AI时代怎么填？"
        },
        {
            "start": 463.06,
            "end": 465.62,
            "text": "营销漏斗在AI加持下怎么优化？"
        },
        {
            "start": 465.62,
            "end": 468.8,
            "text": "这些不是未来的事情，是正在发生的事情。"
        },
        {
            "start": 468.8,
            "end": 472.28,
            "text": "你越早建立这个认知，你在竞争中就越有优势。"
        },
        {
            "start": 472.28,
            "end": 474.7,
            "text": "给大家留最后三个思考题。"
        },
        {
            "start": 474.7,
            "end": 477.74,
            "text": "第一，在你目前的工作中，判断力、"
        },
        {
            "start": 477.92,
            "end": 480.16,
            "text": "创造力、关系力各占多大比例？"
        },
        {
            "start": 480.16,
            "end": 485.46,
            "text": "你有没有可能通过AI把更多时间释放给这三个核心能力？"
        },
        {
            "start": 485.46,
            "end": 487.52,
            "text": "第二，如果你是一个乐团指挥，"
        },
        {
            "start": 487.52,
            "end": 490.1,
            "text": "你的AI工具就是你的乐器手，"
        },
        {
            "start": 490.1,
            "end": 492.46,
            "text": "你现在缺的是哪一个\"乐器\"？"
        },
        {
            "start": 492.46,
            "end": 496.02,
            "text": "第三，展望未来三年，你想成为什么样的管理者？"
        },
        {
            "start": 496.02,
            "end": 498.66,
            "text": "AI在你的这个愿景里扮演什么角色？"
        },
        {
            "start": 498.66,
            "end": 500.86,
            "text": "总结一下今天的核心要点。"
        },
        {
            "start": 500.86,
            "end": 503.3,
            "text": "第一，AI替代的是任务，不是人。"
        },
        {
            "start": 503.3,
            "end": 508.04,
            "text": "关键是AI接走低价值任务后，你要有能力做高价值的工作。"
        },
        {
            "start": 508.04,
            "end": 510.58,
            "text": "第二，三个不可替代的核心能力："
        },
        {
            "start": 510.58,
            "end": 512.68,
            "text": "判断力、创造力、关系力。"
        },
        {
            "start": 512.68,
            "end": 513.26,
            "text": "第三，"
        },
        {
            "start": 513.6,
            "end": 517.48,
            "text": "AI时代的管理者应该像乐团指挥——不是自己演奏，"
        },
        {
            "start": 517.48,
            "end": 520.74,
            "text": "而是指挥AI这些\"乐器手\"协同工作。"
        },
        {
            "start": 520.74,
            "end": 524.34,
            "text": "第四，AI不是你的对手，而是你的加速器。"
        },
        {
            "start": 524.34,
            "end": 527.46,
            "text": "但加速器再快，方向得由你来定。"
        },
        {
            "start": 527.46,
            "end": 529.24,
            "text": "好，模块零就到这里。"
        },
        {
            "start": 529.24,
            "end": 533.0,
            "text": "从下一期开始，我们正式进入模块一：战略管理。"
        },
        {
            "start": 533.0,
            "end": 535.32,
            "text": "第一个话题是\"什么是战略？"
        },
        {
            "start": 535.32,
            "end": 537.8,
            "text": "为什么大多数公司没有战略\"。"
        },
        {
            "start": 537.8,
            "end": 541.82,
            "text": "波特教授的经典理论，加上AI时代的全新视角。"
        },
        {
            "start": 541.82,
            "end": 543.66,
            "text": "非常精彩，不要错过。"
        },
        {
            "start": 544.2199999999999,
            "end": 547.08,
            "text": "如果你学完这六期有任何感想或者问题，"
        },
        {
            "start": 547.08,
            "end": 550.24,
            "text": "你也可以把这一组问题先记下来，回到企业里继续观察和应用。"
        },
        {
            "start": 550.24,
            "end": 554.84,
            "text": "把它们和你的行业、角色、团队现状放在一起，慢慢形成你自己的判断。"
        },
        {
            "start": 554.84,
            "end": 556.34,
            "text": "好，我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 45.18,
        "index": 0
    },
    {
        "start": 45.18,
        "end": 69.86,
        "index": 1
    },
    {
        "start": 69.86,
        "end": 161.26,
        "index": 2
    },
    {
        "start": 161.26,
        "end": 233.64,
        "index": 3
    },
    {
        "start": 233.64,
        "end": 327.96,
        "index": 4
    },
    {
        "start": 327.96,
        "end": 411.72,
        "index": 5
    },
    {
        "start": 411.72,
        "end": 527.46,
        "index": 6
    },
    {
        "start": 527.46,
        "end": 554.84,
        "index": 7
    },
    {
        "start": 554.84,
        "end": 9999,
        "index": 8
    }
], navigation: { currentLessonHash: '#lesson-6', nextLessonUrl: './module-ai-foundation.html?entry={entry}' },
    entryCopy: {
      problem: {
        topNoteTitle: '为什么系统把你带到这一节？',
        topNoteBody: '因为很多管理者真正焦虑的不是 AI 能做什么，而是自己在 AI 时代还剩下什么不可替代的价值。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '你当前最需要的，不是更多工具信息，而是一个更清晰的自我升级和角色定位框架。'
      }
    },
    reflection: { fields: [{ id: 'qCoreRatio', key: 'q1' }, { id: 'qInstrument', key: 'q2' }, { id: 'qFutureRole', key: 'q3' }] },
    redirects: { thoughtCardHref: './thought-card.html', thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-06', coachSource: './ai-coach.html?source=lesson-ai-foundation-06' },
    playbackEndTime: 544.1,
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于 AI 时代个人竞争力的判断想清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'AI时代的个人竞争力', module: 'AI时代商业认知' })
  };
})(window);
