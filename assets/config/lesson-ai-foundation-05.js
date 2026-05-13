(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.lessons.aiFoundation05 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第5课',
      backLink: { href: './module-ai-foundation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第5课：Prompt Thinking：怎么跟 AI 更好共创',
      heroMeta: ['🧭 对齐 Foundation 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么这一节排在这里？',
        body: '因为前面你已经知道 AI 是什么、能做什么、值不值得投。接下来真正影响结果的，是你会不会把需求讲清楚，让 AI 真正进入工作流。',
        meta: ['预计时长：8-9 分钟', '你将获得：CRISP 框架 + Prompt 进阶技巧 + 模板库思维']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep05/slide_01.png',
        initialSlideCount: '1 / 9',
        title: '当前内容：Prompt Thinking：怎么跟 AI 更好共创',
        subtitle: '这一节会把 Prompt 从“提示词技巧”升级成结构化表达能力。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-5',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '先整理这一节'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节更重要的，不是背几个 Prompt 模板。',
        leadBody: '而是开始形成一种新的协作习惯：先把问题定义清楚，再让 AI 帮你推进。你可以先用下面 3 个问题开始整理。',
        introNote: '这一节会继续保持真实音频、逐句字幕与 slide 跟随的统一标准。',
        questions: [
          { id: 'qCrispTask', title: '1. 选一个你这周要做的真实任务，用 CRISP 框架把它重新写成一个 Prompt。', placeholder: '例如：董事会简报、市场分析、周报、客户邮件、业务复盘。', tip: '先选一个高频、真实、马上就会用到的任务。' },
          { id: 'qChallenge', title: '2. 最近你做过的一个商业判断，最值得让 AI 从哪个角度来挑战你？', placeholder: '例如：市场进入、预算分配、团队分工、产品方向、增长策略。', tip: '把 AI 当成一个“会反驳你”的外脑，而不只是执行工具。' },
          { id: 'qTemplate', title: '3. 如果开始建立自己的 Prompt 模板库，你最先要沉淀的 3 个高频模板是什么？', placeholder: '例如：周报模板、市场分析模板、会议纪要模板、复盘模板。', tip: '优先从高频任务开始，模板化最容易放大收益。' }
        ],
        outroNote: '系统会把这些回答沉淀成你的下一版结构化认知卡。'
      },
      cta: {
        title: '先把这一节的 Prompt 思维沉淀下来',
        body: '你可以先继续体验“学习 → 整理 → 认知卡”的后续链路，把抽象理解真正变成可复用的方法。',
        submitLabel: '开始整理我的思路',
        coachLabel: '暂时跳过，继续学习'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '已完成' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 Agent 的进化', body: '理解大模型为什么带来质变，以及 Agent 为什么会成为下一阶段的关键。', badge: '已完成' },
          { no: 3, title: 'AI 能做什么，不能做什么？管理者的判断框架', body: '建立一个理性、结构化的 AI 任务评估矩阵。', badge: '已完成' },
          { no: 4, title: 'AI 的商业经济学：成本、速度与规模', body: '理解 AI 的成本结构、规模价值，以及 API 与自建的判断逻辑。', badge: '已完成' },
          { no: 5, title: 'Prompt Thinking：怎么跟 AI 更好共创', body: '把提示词从“会不会写”升级为“会不会思考与拆解问题”。', badge: '当前', state: 'current' },
          { no: 6, title: 'AI时代的个人竞争力', body: '思考管理者和专业人士在 AI 时代最需要重建的能力结构。', badge: '下一节', state: 'next', badgeClass: 'next' }
        ],
        nextLessonHref: './lesson-ai-foundation-06.html?entry=sequence',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-ai-foundation.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: '你会得到一个可执行的 Prompt 协作框架：CRISP、五个进阶技巧，以及如何建立自己的 Prompt 模板库。',
        statusTitle: '学习状态',
        statusBody: '已接入音频',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: 'Prompt 的质量，决定 AI 输出的质量', body: '同一个 AI，不同的表达方式，得到的结果可能差十倍。' },
          { eyebrow: '核心概念 02', title: 'CRISP 是最实用的基础框架', body: '背景、角色、指令、具体要求、目的，先想清楚再开口。' },
          { eyebrow: '核心概念 03', title: 'Prompt 思维本质上是结构化表达能力', body: '这不只是 AI 技巧，也是管理、沟通和协作的底层能力。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: 'CRISP', insert: '【CRISP】每次跟 AI 协作前，先把背景、角色、指令、具体要求和目的想清楚。' },
          { label: '让AI挑战我', insert: '【挑战】别只让 AI 顺着我，也要让它帮我找漏洞。' },
          { label: '模板库', insert: '【模板库】从高频任务开始建立自己的 Prompt 模板 SOP。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 你最常见的 Prompt 场景是什么？\n- 你最该沉淀的模板是哪几个？\n- 哪些事情值得让 AI 来挑战你？'
      }
    },
    moduleId: 'ai-foundation', lessonId: 'ai-foundation-05', modulePage: 'module-ai-foundation.html', progressNamespace: 'aiFoundation', progressLessonKey: 'lesson5',
    audioSource: './assets/audio/ai-foundation-ep05-prompt-thinking.mp3?v=20260407-foundation-rerun-v1', vttSrc: './assets/subtitles/ai-foundation-ep05-prompt-thinking-fixed.vtt?v=20260407-foundation-rerun-v1', slidesSrc: './assets/timeline/ai-foundation-ep05-slides.json', slideBasePath: './assets/slides/', slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep05/slide_01.png",
            "label": "标题页",
            "caption": "这一节的重点，是把 Prompt 从技巧升级成结构化表达能力。"
        },
        {
            "file": "ai-foundation-ep05/slide_02.png",
            "label": "问题不在AI",
            "caption": "很多时候不是 AI 不行，而是你的需求表达得还不够清楚。"
        },
        {
            "file": "ai-foundation-ep05/slide_03.png",
            "label": "CRISP框架",
            "caption": "每次跟 AI 协作前，把背景、角色、指令、具体要求和目的想清楚。"
        },
        {
            "file": "ai-foundation-ep05/slide_04.png",
            "label": "好坏Prompt对比",
            "caption": "同样是写市场分析，结构化 Prompt 和模糊 Prompt 的结果会差很多。"
        },
        {
            "file": "ai-foundation-ep05/slide_05.png",
            "label": "五个进阶技巧",
            "caption": "给范例、分步骤、迭代优化，会让 AI 协作效率大幅提升。"
        },
        {
            "file": "ai-foundation-ep05/slide_06.png",
            "label": "让AI挑战你",
            "caption": "别只让 AI 顺着你，也要让它帮你找漏洞、做压力测试。"
        },
        {
            "file": "ai-foundation-ep05/slide_07.png",
            "label": "本质能力",
            "caption": "Prompt 思维本质上是在训练结构化表达和需求定义能力。"
        },
        {
            "file": "ai-foundation-ep05/slide_08.png",
            "label": "今天就能开始",
            "caption": "从高频任务开始建立自己的 Prompt 模板库，最容易快速见效。"
        },
        {
            "file": "ai-foundation-ep05/slide_09.png",
            "label": "总结页",
            "caption": "Prompt 的质量，直接决定你从 AI 身上拿到的价值。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.3,
            "end": 3.66,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.66,
            "end": 7.52,
            "text": "今天聊一个你马上就能用的技能：怎么跟AI说话。"
        },
        {
            "start": 7.52,
            "end": 9.66,
            "text": "听起来简单，但这个技能的差距，"
        },
        {
            "start": 9.66,
            "end": 15.36,
            "text": "真的能决定你从AI身上获得的价值是十倍还是一百倍。"
        },
        {
            "start": 15.36,
            "end": 16.84,
            "text": "你有没有这种经历："
        },
        {
            "start": 16.84,
            "end": 20.02,
            "text": "你跟DeepSeek或者豆包说了一句话，"
        },
        {
            "start": 20.02,
            "end": 22.36,
            "text": "它给你的回答很泛、很空、"
        },
        {
            "start": 22.36,
            "end": 24.8,
            "text": "感觉跟你想要的完全不一样。"
        },
        {
            "start": 24.8,
            "end": 27.82,
            "text": "然后你可能就想，\"哎，AI也不过如此嘛。"
        },
        {
            "start": 27.82,
            "end": 28.240000000000002,
            "text": "\""
        },
        {
            "start": 28.240000000000002,
            "end": 31.84,
            "text": "但问题很可能不在AI，而在于你怎么跟它沟通的。"
        },
        {
            "start": 31.84,
            "end": 34.76,
            "text": "这就好比你刚招了一个很聪明的新员工，"
        },
        {
            "start": 34.76,
            "end": 36.66,
            "text": "能力很强，知识面很广。"
        },
        {
            "start": 36.66,
            "end": 38.94,
            "text": "但你跟他说：\"帮我做个方案。"
        },
        {
            "start": 38.94,
            "end": 39.98,
            "text": "\"他会一脸懵。"
        },
        {
            "start": 39.98,
            "end": 40.72,
            "text": "什么方案？"
        },
        {
            "start": 40.72,
            "end": 41.5,
            "text": "给谁看的？"
        },
        {
            "start": 41.5,
            "end": 42.04,
            "text": "什么目的？"
        },
        {
            "start": 42.04,
            "end": 42.88,
            "text": "什么格式？"
        },
        {
            "start": 42.88,
            "end": 44.24,
            "text": "什么时候要？"
        },
        {
            "start": 44.24,
            "end": 47.78,
            "text": "你不说清楚，他怎么可能给你满意的结果？"
        },
        {
            "start": 48.480000000000004,
            "end": 50.1,
            "text": "AI也是一模一样的。"
        },
        {
            "start": 50.1,
            "end": 53.5,
            "text": "你给它的指令越模糊，它的输出就越泛。"
        },
        {
            "start": 53.5,
            "end": 56.26,
            "text": "你给它的指令越具体、越有结构，"
        },
        {
            "start": 56.26,
            "end": 58.44,
            "text": "它的输出就越精准、越有价值。"
        },
        {
            "start": 59.02,
            "end": 63.62,
            "text": "所以我说Prompt不只是一个技术技巧，它是一种思维方式。"
        },
        {
            "start": 63.62,
            "end": 65.76,
            "text": "我把它叫做Prompt思维。"
        },
        {
            "start": 65.76,
            "end": 69.88,
            "text": "本质上就是：你能不能把你的需求结构化地表达出来。"
        },
        {
            "start": 69.88,
            "end": 74.26,
            "text": "这个能力不光对AI有用，对跟人协作一样有用。"
        },
        {
            "start": 74.26,
            "end": 78.48,
            "text": "好，我给大家一个实用的框架，叫做CRISP框架。"
        },
        {
            "start": 78.48,
            "end": 80.28,
            "text": "五个字母，五个要素。"
        },
        {
            "start": 80.28,
            "end": 82.34,
            "text": "你每次跟AI协作之前，"
        },
        {
            "start": 82.34,
            "end": 83.9,
            "text": "把这五个要素想清楚，"
        },
        {
            "start": 83.9,
            "end": 85.96,
            "text": "输出质量会有质的飞跃。"
        },
        {
            "start": 85.96,
            "end": 87.96,
            "text": "C — Context，背景。"
        },
        {
            "start": 87.96,
            "end": 91.74,
            "text": "告诉AI你是谁，你在什么情境下需要这个东西。"
        },
        {
            "start": 91.74,
            "end": 93.48,
            "text": "R — Role，角色。"
        },
        {
            "start": 93.48,
            "end": 96.24,
            "text": "告诉AI你希望它扮演什么角色。"
        },
        {
            "start": 96.24,
            "end": 97.84,
            "text": "I — Instruction，指令。"
        },
        {
            "start": 97.84,
            "end": 100.26,
            "text": "具体告诉它你要它做什么。"
        },
        {
            "start": 100.26,
            "end": 102.56,
            "text": "S — Specifics，具体要求。"
        },
        {
            "start": 102.56,
            "end": 105.76,
            "text": "格式、长度、风格、受众、限制条件。"
        },
        {
            "start": 105.76,
            "end": 107.5,
            "text": "P — Purpose，目的。"
        },
        {
            "start": 107.5,
            "end": 110.3,
            "text": "告诉它这个东西最终是干什么用的。"
        },
        {
            "start": 110.3,
            "end": 113.82,
            "text": "我举一个对比的例子，大家马上就能感受到区别。"
        },
        {
            "start": 113.82,
            "end": 117.26,
            "text": "差的Prompt：\"帮我写一份市场分析。"
        },
        {
            "start": 117.26,
            "end": 117.68,
            "text": "\""
        },
        {
            "start": 117.72,
            "end": 122.82,
            "text": "好的Prompt：\"我是一家做宠物食品的DTC品牌的市场总监。"
        },
        {
            "start": 122.82,
            "end": 124.12,
            "text": "（这是Context。"
        },
        {
            "start": 124.12,
            "end": 127.64,
            "text": "）请你扮演一个资深的市场研究分析师。"
        },
        {
            "start": 127.64,
            "end": 128.41999999999996,
            "text": "（这是Role。"
        },
        {
            "start": 128.42,
            "end": 133.8,
            "text": "）帮我分析中国宠物食品市场2024到2026年的发展趋势。"
        },
        {
            "start": 133.8,
            "end": 135.22,
            "text": "（这是Instruction。"
        },
        {
            "start": 135.22,
            "end": 137.34,
            "text": "）输出一份结构化的报告，"
        },
        {
            "start": 137.34,
            "end": 140.18,
            "text": "包括市场规模、增长驱动因素、"
        },
        {
            "start": 140.18,
            "end": 141.96,
            "text": "竞争格局、主要玩家、"
        },
        {
            "start": 141.96,
            "end": 143.52,
            "text": "消费者趋势五个部分。"
        },
        {
            "start": 143.52,
            "end": 147.0,
            "text": "每个部分300到500字，用数据支撑观点。"
        },
        {
            "start": 147.0,
            "end": 148.66,
            "text": "（这是Specifics。"
        },
        {
            "start": 148.66,
            "end": 152.18,
            "text": "）这份报告将用于下周董事会的战略讨论。"
        },
        {
            "start": 152.18,
            "end": 153.44,
            "text": "（这是Purpose。"
        },
        {
            "start": 153.44,
            "end": 153.85999999999999,
            "text": "）\""
        },
        {
            "start": 153.85999999999999,
            "end": 155.2,
            "text": "你感受到了没有？"
        },
        {
            "start": 155.2,
            "end": 157.1,
            "text": "同样是\"写市场分析\"，"
        },
        {
            "start": 157.1,
            "end": 161.3,
            "text": "第二个Prompt给AI的信息量是第一个的几十倍。"
        },
        {
            "start": 161.3,
            "end": 162.94,
            "text": "AI有了这些信息，"
        },
        {
            "start": 162.94,
            "end": 165.28,
            "text": "它就能给你一个有针对性的、"
        },
        {
            "start": 165.28,
            "end": 166.5,
            "text": "高质量的输出。"
        },
        {
            "start": 166.5,
            "end": 169.48,
            "text": "好，CRISP框架是写Prompt的基础。"
        },
        {
            "start": 169.48,
            "end": 171.66,
            "text": "接下来我讲几个进阶的技巧，"
        },
        {
            "start": 171.66,
            "end": 173.56,
            "text": "都是我自己用了非常多次、"
        },
        {
            "start": 173.56,
            "end": 174.64,
            "text": "效果特别好的。"
        },
        {
            "start": 174.64,
            "end": 176.76,
            "text": "第一个技巧：给AI看范例。"
        },
        {
            "start": 176.76,
            "end": 182.56,
            "text": "Show, don't just tell. 如果你想要AI写出特定风格的东西，"
        },
        {
            "start": 182.56,
            "end": 184.54,
            "text": "与其用语言描述那个风格，"
        },
        {
            "start": 184.54,
            "end": 186.18,
            "text": "不如直接给它一个范例。"
        },
        {
            "start": 186.18,
            "end": 190.08,
            "text": "比如说你想让AI帮你写周报，你可以说："
        },
        {
            "start": 190.08,
            "end": 192.56,
            "text": "\"这是我之前写的一份周报的范例。"
        },
        {
            "start": 192.56,
            "end": 196.86,
            "text": "请按照这个格式和风格，帮我写本周的周报。"
        },
        {
            "start": 196.86,
            "end": 198.64,
            "text": "本周的重点是......\""
        },
        {
            "start": 198.64,
            "end": 201.34,
            "text": "AI看到了范例，它就知道你要什么语气、"
        },
        {
            "start": 201.34,
            "end": 203.36,
            "text": "什么结构、什么详细程度。"
        },
        {
            "start": 203.36,
            "end": 207.06,
            "text": "这比你用一百个形容词去描述要有效得多。"
        },
        {
            "start": 207.06,
            "end": 210.04,
            "text": "第二个技巧：让AI分步骤思考。"
        },
        {
            "start": 210.56,
            "end": 212.6,
            "text": "如果你给AI一个复杂的任务，"
        },
        {
            "start": 212.6,
            "end": 214.2,
            "text": "让它一步到位给你答案，"
        },
        {
            "start": 214.2,
            "end": 215.84,
            "text": "它可能会出错或者遗漏。"
        },
        {
            "start": 215.84,
            "end": 219.22,
            "text": "但如果你让它分步骤来，效果会好很多。"
        },
        {
            "start": 219.68,
            "end": 221.48,
            "text": "比如你要分析一个商业问题。"
        },
        {
            "start": 221.48,
            "end": 222.2,
            "text": "你可以说："
        },
        {
            "start": 222.2,
            "end": 225.0,
            "text": "\"请先帮我识别这个问题涉及的关键因素，"
        },
        {
            "start": 225.0,
            "end": 226.86,
            "text": "然后针对每个因素做分析，"
        },
        {
            "start": 226.86,
            "end": 228.44,
            "text": "最后给出综合建议。"
        },
        {
            "start": 228.44,
            "end": 230.42,
            "text": "一步一步来，不要跳步骤。"
        },
        {
            "start": 230.42,
            "end": 230.83999999999997,
            "text": "\""
        },
        {
            "start": 230.83999999999997,
            "end": 232.46,
            "text": "这个技巧的原理很简单："
        },
        {
            "start": 232.46,
            "end": 235.74,
            "text": "大模型在做推理的时候，中间步骤越多，"
        },
        {
            "start": 235.74,
            "end": 237.86,
            "text": "最终答案的质量通常越高。"
        },
        {
            "start": 237.86,
            "end": 241.18,
            "text": "这就跟你让一个人先列大纲再写文章，"
        },
        {
            "start": 241.18,
            "end": 243.4,
            "text": "比直接写要好是一个道理。"
        },
        {
            "start": 243.4,
            "end": 245.7,
            "text": "第三个技巧：迭代优化。"
        },
        {
            "start": 245.7,
            "end": 249.06,
            "text": "很多人跟AI交流是\"一次性\"的："
        },
        {
            "start": 249.06,
            "end": 251.98,
            "text": "问一个问题，拿到答案，走了。"
        },
        {
            "start": 251.98,
            "end": 255.74,
            "text": "但真正会用AI的人，是\"对话式\"的："
        },
        {
            "start": 255.74,
            "end": 258.58,
            "text": "拿到第一版，看看哪里不满意，给反馈，"
        },
        {
            "start": 258.58,
            "end": 261.3,
            "text": "让AI改进，再看，再反馈。"
        },
        {
            "start": 261.3,
            "end": 265.56,
            "text": "比如说，AI写了一版文案，你觉得语气太正式了。"
        },
        {
            "start": 265.56,
            "end": 268.04,
            "text": "你就说：\"这版不错，但语气太书面了。"
        },
        {
            "start": 268.04,
            "end": 271.62,
            "text": "帮我改得更口语化一些，像跟朋友聊天一样。"
        },
        {
            "start": 271.62,
            "end": 273.14,
            "text": "保留核心观点不变。"
        },
        {
            "start": 273.14,
            "end": 273.56,
            "text": "\""
        },
        {
            "start": 273.56,
            "end": 275.6,
            "text": "它就能在第一版的基础上调整。"
        },
        {
            "start": 275.6,
            "end": 279.52,
            "text": "几轮迭代下来，你通常就能得到一个相当满意的结果。"
        },
        {
            "start": 279.98,
            "end": 282.86,
            "text": "记住，跟AI协作不是一锤子买卖。"
        },
        {
            "start": 282.86,
            "end": 285.22,
            "text": "它更像是一个快速迭代的过程。"
        },
        {
            "start": 285.22,
            "end": 290.54,
            "text": "第一版可能60分，改一轮到75分，再改一轮到85分。"
        },
        {
            "start": 290.54,
            "end": 292.22,
            "text": "整个过程可能十分钟，"
        },
        {
            "start": 292.22,
            "end": 294.12,
            "text": "但如果你自己从零开始写，"
        },
        {
            "start": 294.12,
            "end": 295.68,
            "text": "可能要花两三个小时。"
        },
        {
            "start": 295.68,
            "end": 300.72,
            "text": "第四个技巧，这个是我个人特别喜欢用的：让AI挑战你。"
        },
        {
            "start": 300.72,
            "end": 303.3,
            "text": "大多数人用AI是让它帮你做事。"
        },
        {
            "start": 303.3,
            "end": 307.02,
            "text": "但你有没有想过，让AI来挑战你的想法？"
        },
        {
            "start": 307.52000000000004,
            "end": 310.02,
            "text": "比如说你有一个商业方案，你觉得挺好的。"
        },
        {
            "start": 310.02,
            "end": 311.26,
            "text": "你可以跟AI说："
        },
        {
            "start": 311.26,
            "end": 313.78,
            "text": "\"我现在有一个方案是这样的...请你"
        },
        {
            "start": 313.78,
            "end": 315.84,
            "text": "扮演一个严苛的投资人，"
        },
        {
            "start": 315.84,
            "end": 317.52,
            "text": "从各个角度挑毛病。"
        },
        {
            "start": 317.52,
            "end": 320.4,
            "text": "找出这个方案最大的三个风险和漏洞。"
        },
        {
            "start": 320.4,
            "end": 320.82,
            "text": "\""
        },
        {
            "start": 320.82,
            "end": 322.68,
            "text": "AI会给你很不客气的反馈。"
        },
        {
            "start": 322.68,
            "end": 325.64,
            "text": "它会指出你没考虑到的竞争威胁，"
        },
        {
            "start": 325.64,
            "end": 327.78,
            "text": "质疑你的假设是否成立，"
        },
        {
            "start": 327.78,
            "end": 329.96,
            "text": "提出你的财务模型里的问题。"
        },
        {
            "start": 329.96,
            "end": 334.02,
            "text": "这就相当于你有了一个24小时在线的devil's advocate。"
        },
        {
            "start": 334.02,
            "end": 338.02,
            "text": "你任何时候有一个想法，都可以找AI来压力测试一下。"
        },
        {
            "start": 338.02,
            "end": 340.6,
            "text": "这对管理者来说太有价值了。"
        },
        {
            "start": 340.6,
            "end": 344.14,
            "text": "因为在真实的组织里面，很多人不敢跟老板说真话。"
        },
        {
            "start": 344.14,
            "end": 345.86,
            "text": "但AI没有这个顾虑。"
        },
        {
            "start": 345.86,
            "end": 348.86,
            "text": "第五个技巧：建立你的Prompt模板库。"
        },
        {
            "start": 349.38,
            "end": 351.12,
            "text": "如果你经常做类似的任务，"
        },
        {
            "start": 351.12,
            "end": 354.08,
            "text": "比如说每周写周报，每月做市场分析，"
        },
        {
            "start": 354.08,
            "end": 355.98,
            "text": "每个季度做业务复盘。"
        },
        {
            "start": 355.98,
            "end": 359.78,
            "text": "你应该把好用的Prompt保存下来，变成模板。"
        },
        {
            "start": 359.78,
            "end": 363.08,
            "text": "下次用的时候只要替换关键信息就行了。"
        },
        {
            "start": 363.08,
            "end": 366.52,
            "text": "这就像你有一套工作流程的SOP一样。"
        },
        {
            "start": 366.52,
            "end": 369.94,
            "text": "Prompt模板就是你跟AI协作的SOP。"
        },
        {
            "start": 370.46000000000004,
            "end": 371.32,
            "text": "时间长了，"
        },
        {
            "start": 371.32,
            "end": 374.04,
            "text": "你会积累一套非常好用的模板库，"
        },
        {
            "start": 374.04,
            "end": 375.48,
            "text": "效率会越来越高。"
        },
        {
            "start": 375.48,
            "end": 378.14,
            "text": "最后我想强调一个更深层的观点。"
        },
        {
            "start": 378.14,
            "end": 383.36,
            "text": "Prompt思维的本质，不是学会某种固定的语法或者格式。"
        },
        {
            "start": 383.36,
            "end": 384.76,
            "text": "它的本质是什么？"
        },
        {
            "start": 384.76,
            "end": 387.48,
            "text": "是你能不能清晰地定义一个问题，"
        },
        {
            "start": 387.48,
            "end": 390.36,
            "text": "并且把这个问题结构化地表达出来。"
        },
        {
            "start": 390.36,
            "end": 393.8,
            "text": "你想想，这个能力是不是其实跟AI无关？"
        },
        {
            "start": 393.8,
            "end": 395.42,
            "text": "一个好的管理者，"
        },
        {
            "start": 395.42,
            "end": 397.78,
            "text": "本来就应该能够清晰地定义问题、"
        },
        {
            "start": 397.78,
            "end": 399.52,
            "text": "给团队下达明确的指令、"
        },
        {
            "start": 399.52,
            "end": 401.94,
            "text": "说清楚期望的标准和交付物。"
        },
        {
            "start": 401.94,
            "end": 406.08,
            "text": "只不过以前你做得好不好，影响的是团队的执行效率。"
        },
        {
            "start": 406.08,
            "end": 410.84,
            "text": "现在你做得好不好，同时还影响你从AI身上获得的价值。"
        },
        {
            "start": 411.38,
            "end": 413.76,
            "text": "所以学Prompt不是在学一个新技能，"
        },
        {
            "start": 413.76,
            "end": 417.18,
            "text": "你是在锻炼一个你本来就需要的核心管理能力："
        },
        {
            "start": 417.18,
            "end": 419.46,
            "text": "结构化表达和需求定义。"
        },
        {
            "start": 419.46,
            "end": 421.44,
            "text": "好，今天的思考题。"
        },
        {
            "start": 421.44,
            "end": 424.08,
            "text": "第一，找一个你这周要做的工作任务，"
        },
        {
            "start": 424.08,
            "end": 428.28,
            "text": "用CRISP框架写一个Prompt，然后跟AI协作完成。"
        },
        {
            "start": 428.28,
            "end": 431.24,
            "text": "对比一下跟你自己做的效果差别。"
        },
        {
            "start": 431.24,
            "end": 434.04,
            "text": "第二，试一下让AI挑战你。"
        },
        {
            "start": 434.04,
            "end": 436.46,
            "text": "把你最近做的一个商业决策告诉AI，"
        },
        {
            "start": 436.46,
            "end": 439.14,
            "text": "让它扮演严苛的投资人来挑毛病。"
        },
        {
            "start": 439.14,
            "end": 441.58,
            "text": "看看它能不能帮你发现盲点。"
        },
        {
            "start": 441.58,
            "end": 444.34,
            "text": "第三，开始建立你自己的Prompt模板库。"
        },
        {
            "start": 444.34,
            "end": 447.26,
            "text": "从你最频繁的三个工作任务开始。"
        },
        {
            "start": 447.26,
            "end": 448.62,
            "text": "总结一下。"
        },
        {
            "start": 448.62,
            "end": 451.96,
            "text": "第一，Prompt的质量直接决定AI输出的质量。"
        },
        {
            "start": 451.96,
            "end": 455.34,
            "text": "同一个AI，不同的Prompt，效果可能差十倍。"
        },
        {
            "start": 455.9,
            "end": 460.14,
            "text": "第二，CRISP框架：Context背景、Role角色、"
        },
        {
            "start": 460.14,
            "end": 464.2,
            "text": "Instruction指令、Specifics具体要求、Purpose目的。"
        },
        {
            "start": 464.2,
            "end": 466.58,
            "text": "每次跟AI协作前过一遍。"
        },
        {
            "start": 466.58,
            "end": 470.64000000000004,
            "text": "第三，五个进阶技巧：给范例、分步骤、"
        },
        {
            "start": 470.64000000000004,
            "end": 473.92,
            "text": "迭代优化、让AI挑战你、建模板库。"
        },
        {
            "start": 473.92,
            "end": 477.82,
            "text": "第四，Prompt思维的本质是结构化表达能力。"
        },
        {
            "start": 477.82,
            "end": 482.34,
            "text": "这个能力不只是对AI有用，对管理和沟通同样有用。"
        },
        {
            "start": 482.34,
            "end": 484.6,
            "text": "下一期是模块零的最后一期，"
        },
        {
            "start": 484.6,
            "end": 487.0,
            "text": "我们来聊一个很多人都在焦虑的问题："
        },
        {
            "start": 487.0,
            "end": 489.88,
            "text": "AI时代，你的个人竞争力到底在哪里？"
        },
        {
            "start": 489.88,
            "end": 492.16,
            "text": "什么东西是AI替代不了的？"
        },
        {
            "start": 492.16,
            "end": 493.4,
            "text": "好，今天就到这里。"
        },
        {
            "start": 493.4,
            "end": 494.92,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 16.84,
        "index": 0
    },
    {
        "start": 16.84,
        "end": 83.9,
        "index": 1
    },
    {
        "start": 83.9,
        "end": 128.42,
        "index": 2
    },
    {
        "start": 128.42,
        "end": 201.34,
        "index": 3
    },
    {
        "start": 201.34,
        "end": 338.02,
        "index": 4
    },
    {
        "start": 338.02,
        "end": 390.36,
        "index": 5
    },
    {
        "start": 390.36,
        "end": 466.58,
        "index": 6
    },
    {
        "start": 466.58,
        "end": 493.4,
        "index": 7
    },
    {
        "start": 493.4,
        "end": 9999,
        "index": 8
    }
], navigation: { currentLessonHash: '#lesson-5', nextLessonUrl: './lesson-ai-foundation-06.html?entry={entry}' },
    entryCopy: {
      problem: {
        topNoteTitle: '为什么系统把你带到这一节？',
        topNoteBody: '因为对很多管理者来说，真正的瓶颈不是 AI 能力本身，而是怎么把需求讲清楚，让 AI 真正帮上忙。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '你当前最需要的，不是再试更多工具，而是建立一套更高质量的人机协作表达框架。'
      }
    },
    reflection: { fields: [{ id: 'qCrispTask', key: 'q1' }, { id: 'qChallenge', key: 'q2' }, { id: 'qTemplate', key: 'q3' }] },
    redirects: { thoughtCardHref: './thought-card.html', thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-05', coachSource: './ai-coach.html?source=lesson-ai-foundation-05' },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于 Prompt Thinking 的方法打磨得更清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'Prompt Thinking：怎么跟 AI 更好共创', module: 'AI时代商业认知' })
  };
})(window);
