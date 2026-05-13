(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.lessons.aiFoundation04 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第4课',
      backLink: { href: './module-ai-foundation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第4课：AI 的商业经济学：成本、速度与规模',
      heroMeta: ['🧭 对齐 Foundation 课程目录', '🖼 白底 slides 跟随', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么这一节排在这里？',
        body: '因为前面你已经理解了 AI 的能力边界。接下来真正关键的问题是：这些能力放进企业经营里，到底值不值得投？这笔账该怎么算？',
        meta: ['预计时长：8-9 分钟', '你将获得：AI 成本结构 + API/自建判断 + ROI 思路']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep04/slide_01_title.png?v=20260402-foundation-ep04',
        initialSlideCount: '1 / 9',
        title: '当前内容：AI 的商业经济学：成本、速度与规模',
        subtitle: '这一节已经对齐 foundation 模块的 ep04，播放器和字幕规范继续与前几节保持一致。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-4',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '先整理这一节'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '这一节更重要的，不是只盯着 AI 单次调用贵不贵。',
        leadBody: '而是学会判断：AI 在你的业务里到底能不能形成规模价值，以及应该先轻还是先重地投入。你可以先用下面 3 个问题开始整理。',
        introNote: '这一节会继续保持真实音频、逐句字幕与 slide 跟随的统一标准。',
        questions: [
          { id: 'qCostArea', title: '1. 你的团队里，哪些工作时间主要花在信息处理和内容生成上？', placeholder: '例如：写方案、做报告、整理会议纪要、客户沟通、产品文案、数据整理。', tip: '先列 1-2 个最典型的高频场景，不用一次写很多。' },
          { id: 'qReinvest', title: '2. 如果这些工作的效率提升 3 倍，你最希望把释放出来的时间投入到哪里？', placeholder: '例如：客户深聊、产品打磨、关键销售、战略判断、组织带教。', tip: '这里最关键的是看到：AI 的价值，不只是省成本，而是把时间重新分配到更高价值的事情上。' },
          { id: 'qApiDecision', title: '3. 你现在更适合先用 API 快速验证，还是已经到了要评估私有化/自建的阶段？', placeholder: '例如：先试几个低风险场景；或者数据敏感、调用量很大，开始评估私有化。', tip: '这一步最重要的是识别：你的企业现在到底处在“先验证价值”还是“开始做重投入”的阶段。' }
        ],
        outroNote: '系统会把这些回答沉淀成你的下一版结构化认知卡。'
      },
      cta: {
        title: '先把这一节的经济学判断沉淀下来',
        body: '你可以先继续体验“学习 → 整理 → 认知卡”的后续链路，把抽象的成本认知转成自己的经营判断。',
        submitLabel: '开始整理我的思路',
        coachLabel: '暂时跳过，继续学习'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '已完成' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 Agent 的进化', body: '理解大模型为什么带来质变，以及 Agent 为什么会成为下一阶段的关键。', badge: '已完成' },
          { no: 3, title: 'AI 能做什么，不能做什么？管理者的判断框架', body: '建立一个理性、结构化的 AI 任务评估矩阵。', badge: '已完成' },
          { no: 4, title: 'AI 的商业经济学：成本、速度与规模', body: '理解 AI 的成本结构、规模价值，以及 API 与自建的判断逻辑。', badge: '当前', state: 'current' }
        ],
        nextLessonHref: './module-ai-foundation.html?entry=sequence#lesson-5',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-ai-foundation.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: '你会得到一个更可执行的经营判断框架：AI 成本到底怎么看、为什么规模才是价值，以及什么时候应该先用 API。',
        statusTitle: '学习状态',
        statusBody: '已接入音频',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: '训练成本和使用成本，要分开看', body: '训练模型是大厂的账，管理者真正要算的是使用成本和业务回报。' },
          { eyebrow: '核心概念 02', title: 'AI 的价值不只在单次省钱，更在规模化复制', body: '边际成本趋近于零，意味着以前做不到的大规模个性化，现在变得经济可行。' },
          { eyebrow: '核心概念 03', title: '大多数企业先用 API，别一上来就做重投入', body: '先验证价值，再决定要不要私有化或自建，通常是更理性的路径。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: '成本结构', insert: '【我的成本结构】我要先算清楚团队哪些工作最适合先导入 AI。' },
          { label: 'API优先', insert: '【我的判断】AI 的价值不只在单次省钱，更在规模化复制，团队表达需求的能力会越来越重要。' },
          { label: 'ROI算账', insert: '【我的ROI】先用几个低风险场景验证 ROI，再决定是否做更重的投入。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 哪些工作最值得先接入 AI？\n- 释放出来的时间你最想投向哪里？\n- 你现在更适合 API 还是更重投入？'
      }
    },
    moduleId: 'ai-foundation', lessonId: 'ai-foundation-04', modulePage: 'module-ai-foundation.html', progressNamespace: 'aiFoundation', progressLessonKey: 'lesson4',
    audioSource: './assets/audio/ai-foundation-ep04-economics.mp3?v=20260408-foundation-04-restore', vttSrc: './assets/subtitles/ai-foundation-ep04-economics-fixed.vtt?v=20260408-foundation-04-restore', slidesSrc: './assets/timeline/ai-foundation-ep04-slides.json', slideBasePath: './assets/slides/', slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep04/slide_01_title.png",
            "label": "标题页",
            "caption": "这一节的重点，是把 AI 的成本、速度与规模逻辑真正算清楚。"
        },
        {
            "file": "ai-foundation-ep04/slide_02_cost_types.png",
            "label": "两种成本",
            "caption": "先分清训练成本和使用成本，管理者真正该算的是后者。"
        },
        {
            "file": "ai-foundation-ep04/slide_03_token_pricing.png",
            "label": "Token计费",
            "caption": "按 Token 计费看起来抽象，但换成人话后，你会发现单次成本可能低得惊人。"
        },
        {
            "file": "ai-foundation-ep04/slide_04_marginal_cost.png",
            "label": "边际成本",
            "caption": "AI 的边际成本趋近于零，这才是它真正重写商业经济学的地方。"
        },
        {
            "file": "ai-foundation-ep04/slide_05_scale_value.png",
            "label": "规模价值",
            "caption": "真正的 ROI，不只是一件事省多少钱，而是以前做不到的规模化现在能做了。"
        },
        {
            "file": "ai-foundation-ep04/slide_06_api_vs_self_hosted.png",
            "label": "API还是自建",
            "caption": "大多数企业先用 API 验证价值，再决定要不要把投入做重。"
        },
        {
            "file": "ai-foundation-ep04/slide_07_cost_trend.png",
            "label": "成本趋势",
            "caption": "AI 会越来越便宜，所以很多今天不划算的场景，明年可能就划算了。"
        },
        {
            "file": "ai-foundation-ep04/slide_08_roi.png",
            "label": "ROI清单",
            "caption": "真正要算的，是投入、收益、学习成本和流程改造带来的综合回报。"
        },
        {
            "file": "ai-foundation-ep04/slide_09_summary.png",
            "label": "总结页",
            "caption": "最终目标不是省一点钱，而是用 AI 建立更快、更轻、更可规模化的经营系统。"
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
            "end": 3.38,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.38,
            "end": 5.58,
            "text": "前几期我们讲了AI是什么、"
        },
        {
            "start": 5.58,
            "end": 7.1,
            "text": "大模型怎么演化、"
        },
        {
            "start": 7.1,
            "end": 8.78,
            "text": "AI能做什么不能做什么。"
        },
        {
            "start": 8.78,
            "end": 11.82,
            "text": "今天来聊一个非常务实的话题：钱。"
        },
        {
            "start": 11.82,
            "end": 13.82,
            "text": "用AI到底要花多少钱？"
        },
        {
            "start": 13.82,
            "end": 14.56,
            "text": "怎么算账？"
        },
        {
            "start": 14.56,
            "end": 15.9,
            "text": "什么时候值得投入？"
        },
        {
            "start": 15.9,
            "end": 20.8,
            "text": "我发现很多管理者对AI的成本结构是模糊的。"
        },
        {
            "start": 20.8,
            "end": 22.06,
            "text": "有人觉得AI很贵，"
        },
        {
            "start": 22.06,
            "end": 25.16,
            "text": "因为他听说训练一个大模型要花几亿美金。"
        },
        {
            "start": 25.16,
            "end": 29.359999999999996,
            "text": "也有人觉得AI很便宜，因为豆包一个月才十几块钱。"
        },
        {
            "start": 29.36,
            "end": 31.9,
            "text": "这两个说法都对，但也都不完整。"
        },
        {
            "start": 31.9,
            "end": 35.78,
            "text": "今天我帮大家把AI的成本逻辑彻底说清楚。"
        },
        {
            "start": 35.78,
            "end": 40.0,
            "text": "首先，你要分清两件事：训练成本和使用成本。"
        },
        {
            "start": 40.0,
            "end": 42.9,
            "text": "训练成本，就是造AI的成本。"
        },
        {
            "start": 42.9,
            "end": 46.1,
            "text": "GPT-4的训练据说花了超过一亿美金。"
        },
        {
            "start": 46.1,
            "end": 49.04,
            "text": "这包括算力、数据、人才、时间。"
        },
        {
            "start": 49.04,
            "end": 53.9400000000001,
            "text": "这个成本跟你没关系，这是OpenAI、DeepSeek、"
        },
        {
            "start": 53.9400000000001,
            "end": 54.34,
            "text": "阿里、百度这些大厂的事情。"
        },
        {
            "start": 54.34,
            "end": 58.38,
            "text": "你不需要自己训练大模型，除非你是一个很大的科技公司。"
        },
        {
            "start": 58.38,
            "end": 60.86,
            "text": "使用成本，就是用AI的成本。"
        },
        {
            "start": 60.86,
            "end": 63.04,
            "text": "这才是你真正需要关心的。"
        },
        {
            "start": 63.04,
            "end": 64.47000000000001,
            "text": "那使用成本怎么算呢？"
        },
        {
            "start": 64.47000000000001,
            "end": 67.38,
            "text": "现在主流的模式是按Token收费。"
        },
        {
            "start": 67.38,
            "end": 68.62,
            "text": "什么是Token？"
        },
        {
            "start": 68.62,
            "end": 70.06,
            "text": "你可以简单理解为，"
        },
        {
            "start": 70.06,
            "end": 72.48,
            "text": "大约每个汉字是一到两个Token，"
        },
        {
            "start": 72.48,
            "end": 75.4,
            "text": "每个英文单词是一到两个Token。"
        },
        {
            "start": 75.4,
            "end": 79.86,
            "text": "你给AI输入多少Token，AI输出多少Token，按量计费。"
        },
        {
            "start": 79.86,
            "end": 82.42,
            "text": "我给大家算一笔具体的账。"
        },
        {
            "start": 82.42,
            "end": 86.36,
            "text": "以DeepSeek或者通义千问这个级别的模型为例，"
        },
        {
            "start": 86.36,
            "end": 90.48,
            "text": "目前的市场价格大概是输入100万个Token几美金，"
        },
        {
            "start": 90.48,
            "end": 93.24,
            "text": "输出100万个Token十几美金。"
        },
        {
            "start": 93.24,
            "end": 97.04,
            "text": "这个数字本身可能你没什么概念，我换算一下。"
        },
        {
            "start": 97.04,
            "end": 99.26,
            "text": "一篇两千字的商业分析报告，"
        },
        {
            "start": 99.26,
            "end": 101.34,
            "text": "从输入资料到输出报告，"
        },
        {
            "start": 101.34,
            "end": 104.1,
            "text": "大概消耗一万到两万个Token。"
        },
        {
            "start": 104.1,
            "end": 105.27000000000001,
            "text": "算下来多少钱呢？"
        },
        {
            "start": 105.27000000000001,
            "end": 107.64,
            "text": "大约几毛钱到一两块人民币。"
        },
        {
            "start": 107.64,
            "end": 110.3,
            "text": "你让一个分析师写同样一篇报告，"
        },
        {
            "start": 110.3,
            "end": 111.9,
            "text": "可能要花半天时间，"
        },
        {
            "start": 111.9,
            "end": 114.9,
            "text": "人力成本可能是一千到两千块。"
        },
        {
            "start": 114.9,
            "end": 116.26,
            "text": "你看到这个差距了吗？"
        },
        {
            "start": 116.26,
            "end": 120.26,
            "text": "这不是省一点两点的问题，这是几百倍的成本差异。"
        },
        {
            "start": 120.26,
            "end": 125.16,
            "text": "当然，AI写的报告可能需要人审核和修改，不能直接用。"
        },
        {
            "start": 125.16,
            "end": 129.92,
            "text": "但即便加上审核的人力成本，综合下来还是便宜太多了。"
        },
        {
            "start": 129.92,
            "end": 133.14,
            "text": "这个成本结构引出了一个非常重要的经济学概念，"
        },
        {
            "start": 133.14,
            "end": 135.86,
            "text": "就是AI的边际成本趋近于零。"
        },
        {
            "start": 135.86,
            "end": 136.54,
            "text": "什么意思？"
        },
        {
            "start": 136.54,
            "end": 139.76,
            "text": "就是你用AI做第一份报告要花一块钱，"
        },
        {
            "start": 139.76,
            "end": 142.64,
            "text": "做第一百份报告也是每份一块钱，"
        },
        {
            "start": 142.64,
            "end": 145.06,
            "text": "做第一万份报告还是每份一块钱。"
        },
        {
            "start": 145.06,
            "end": 149.66,
            "text": "它不会因为量大而涨价，反而因为量大可能还有折扣。"
        },
        {
            "start": 150.26,
            "end": 151.42,
            "text": "但是人不一样。"
        },
        {
            "start": 151.42,
            "end": 154.04,
            "text": "你让一个分析师写一份报告，可以。"
        },
        {
            "start": 154.04,
            "end": 155.28,
            "text": "写一百份？"
        },
        {
            "start": 155.28,
            "end": 157.04,
            "text": "你就需要十个分析师了。"
        },
        {
            "start": 157.04,
            "end": 157.98,
            "text": "写一万份？"
        },
        {
            "start": 157.98,
            "end": 159.8,
            "text": "你可能需要一个百人团队。"
        },
        {
            "start": 159.8,
            "end": 162.04,
            "text": "人力成本是线性增长的，"
        },
        {
            "start": 162.04,
            "end": 163.78,
            "text": "甚至是超线性增长的，"
        },
        {
            "start": 163.78,
            "end": 165.66,
            "text": "因为管理成本也会上去。"
        },
        {
            "start": 165.66,
            "end": 167.04,
            "text": "这意味着什么？"
        },
        {
            "start": 167.04,
            "end": 170.66,
            "text": "意味着AI最大的价值不是帮你做一件事，"
        },
        {
            "start": 170.66,
            "end": 173.1,
            "text": "而是帮你大规模地做同一类事情。"
        },
        {
            "start": 173.1,
            "end": 176.82,
            "text": "比如说，你开一家电商公司，你有一万个SKU。"
        },
        {
            "start": 176.82,
            "end": 180.16,
            "text": "以前给每个产品写一段精心打磨的描述文案，"
        },
        {
            "start": 180.16,
            "end": 182.8,
            "text": "几乎不可能，人力成本太高了。"
        },
        {
            "start": 182.8,
            "end": 185.16,
            "text": "但现在AI能帮你批量生成，"
        },
        {
            "start": 185.16,
            "end": 187.48,
            "text": "每个产品一段个性化的描述，"
        },
        {
            "start": 187.48,
            "end": 190.42,
            "text": "总成本可能还不到一个文案的月工资。"
        },
        {
            "start": 190.42,
            "end": 195.06,
            "text": "再比如说，你是一家B2B公司，有五千个目标客户。"
        },
        {
            "start": 195.06,
            "end": 199.42,
            "text": "以前给每个客户写一封个性化的cold email，想都不要想。"
        },
        {
            "start": 199.42,
            "end": 202.5,
            "text": "但现在AI可以根据每个客户的行业、"
        },
        {
            "start": 202.5,
            "end": 205.58,
            "text": "规模、痛点，生成完全不同的邮件。"
        },
        {
            "start": 205.58,
            "end": 210.06,
            "text": "五千封个性化邮件，几个小时搞定，成本几百块。"
        },
        {
            "start": 210.06,
            "end": 212.52,
            "text": "所以当你评估AI的ROI的时候，"
        },
        {
            "start": 212.52,
            "end": 215.44,
            "text": "不要只看\"AI做一件事省了多少钱\"。"
        },
        {
            "start": 215.44,
            "end": 219.5,
            "text": "你要看的是\"AI让我能够大规模地做以前做不到的事情\"。"
        },
        {
            "start": 219.5,
            "end": 222.3,
            "text": "这个才是AI真正的经济学价值。"
        },
        {
            "start": 222.3,
            "end": 225.36,
            "text": "好，接下来聊一个大家经常问的问题："
        },
        {
            "start": 225.36,
            "end": 227.9,
            "text": "我应该用API还是自建模型？"
        },
        {
            "start": 227.9,
            "end": 229.68,
            "text": "先说什么是API。"
        },
        {
            "start": 229.68,
            "end": 234.76,
            "text": "API就是Application Programming Interface，你可以理解为\"云端的AI服务\"。"
        },
        {
            "start": 234.76,
            "end": 238.86,
            "text": "你通过网络把请求发给OpenAI或者Anthropic的服务器，"
        },
        {
            "start": 238.86,
            "end": 241.12,
            "text": "它处理完把结果发回来。"
        },
        {
            "start": 241.12,
            "end": 242.96666666666667,
            "text": "按量付费，随用随付。"
        },
        {
            "start": 242.96666666666667,
            "end": 247.2,
            "text": "自建模型呢，就是你在自己的服务器上部署一个AI模型。"
        },
        {
            "start": 247.2,
            "end": 250.1,
            "text": "数据不出你的服务器，完全由你掌控。"
        },
        {
            "start": 250.1,
            "end": 251.7,
            "text": "这两种方案怎么选？"
        },
        {
            "start": 251.7,
            "end": 253.98,
            "text": "我给大家一个简单的决策框架。"
        },
        {
            "start": 253.98,
            "end": 257.62,
            "text": "如果你满足以下条件，用API就够了："
        },
        {
            "start": 257.62,
            "end": 258.84,
            "text": "你还在探索阶段，"
        },
        {
            "start": 258.84,
            "end": 261.02,
            "text": "你的使用量不是特别大，"
        },
        {
            "start": 261.02,
            "end": 263.42,
            "text": "你的数据敏感度不是特别高。"
        },
        {
            "start": 263.42,
            "end": 265.24,
            "text": "大多数中小企业，"
        },
        {
            "start": 265.24,
            "end": 267.9,
            "text": "甚至很多大企业的大部分场景，"
        },
        {
            "start": 267.9,
            "end": 270.0,
            "text": "用API就完全够了。"
        },
        {
            "start": 270.0,
            "end": 273.0,
            "text": "成本低、上线快、维护简单。"
        },
        {
            "start": 273.0,
            "end": 274.64,
            "text": "什么时候考虑自建呢？"
        },
        {
            "start": 274.64,
            "end": 277.78,
            "text": "当你满足以下条件：你的数据非常敏感，"
        },
        {
            "start": 277.78,
            "end": 279.48,
            "text": "不能离开你的服务器。"
        },
        {
            "start": 279.48,
            "end": 283.96,
            "text": "或者你的调用量非常大，大到按API计费比自建还贵。"
        },
        {
            "start": 283.96,
            "end": 289.22,
            "text": "或者你需要深度定制模型，让它在你的特定领域表现更好。"
        },
        {
            "start": 289.22,
            "end": 293.42,
            "text": "我的建议是，90%的企业应该先从API开始。"
        },
        {
            "start": 293.42,
            "end": 296.88,
            "text": "别一上来就想自建，那个投入太重了。"
        },
        {
            "start": 296.88,
            "end": 298.72,
            "text": "先用API验证价值，"
        },
        {
            "start": 298.72,
            "end": 302.42,
            "text": "等你想清楚AI在你的业务里到底怎么用之后，"
        },
        {
            "start": 302.42,
            "end": 303.96,
            "text": "再考虑要不要自建。"
        },
        {
            "start": 303.96,
            "end": 308.44,
            "text": "就像你不会在还没确定商业模式的时候就去建工厂一样。"
        },
        {
            "start": 308.44,
            "end": 312.18,
            "text": "再讲一个大家关心的话题：AI的成本趋势。"
        },
        {
            "start": 312.18,
            "end": 314.9,
            "text": "一句话总结：AI越来越便宜，"
        },
        {
            "start": 314.9,
            "end": 318.1,
            "text": "而且便宜的速度超出大多数人的预期。"
        },
        {
            "start": 318.56,
            "end": 320.2,
            "text": "我给大家几个数据点。"
        },
        {
            "start": 320.2,
            "end": 324.42,
            "text": "GPT-4刚出来的时候，输入100万Token的价格是30美金。"
        },
        {
            "start": 324.42,
            "end": 328.62,
            "text": "现在呢，同等能力的模型，价格已经降到了几美金。"
        },
        {
            "start": 328.62,
            "end": 332.2,
            "text": "不到两年时间，降了差不多一个数量级。"
        },
        {
            "start": 332.2,
            "end": 333.28,
            "text": "这个趋势会继续。"
        },
        {
            "start": 333.28,
            "end": 333.86,
            "text": "为什么？"
        },
        {
            "start": 333.86,
            "end": 337.6,
            "text": "因为芯片在进步，算法在优化，竞争在加剧。"
        },
        {
            "start": 337.6,
            "end": 340.36,
            "text": "每一个因素都在推动成本下降。"
        },
        {
            "start": 340.36,
            "end": 342.5700000000002,
            "text": "这对你做商业决策意味着什么？"
        },
        {
            "start": 342.5700000000002,
            "end": 345.8,
            "text": "第一，今天你觉得用AI不划算的场景，明年可能就划算了。"
        },
        {
            "start": 345.8,
            "end": 349.56,
            "text": "所以你要保持评估，不要一次否定就永远不看了。"
        },
        {
            "start": 349.56,
            "end": 353.92,
            "text": "第二，AI的成本下降会让越来越多的应用变得经济可行。"
        },
        {
            "start": 353.92,
            "end": 356.9,
            "text": "以前只有大客户值得做个性化服务，"
        },
        {
            "start": 356.9,
            "end": 360.6,
            "text": "未来AI可以让你给每一个客户提供个性化体验。"
        },
        {
            "start": 360.6,
            "end": 363.32,
            "text": "以前只有大问题值得做深度分析，"
        },
        {
            "start": 363.32,
            "end": 367.84,
            "text": "未来AI可以让你对每一个小决策都做数据驱动的分析。"
        },
        {
            "start": 368.38,
            "end": 371.68,
            "text": "第三，早期投入的学习成本是有价值的。"
        },
        {
            "start": 371.68,
            "end": 376.12,
            "text": "AI工具在变，但\"如何与AI协作\"这个能力是可以积累的。"
        },
        {
            "start": 376.12,
            "end": 379.14,
            "text": "你今天学会的prompt技巧、工作流设计、"
        },
        {
            "start": 379.34,
            "end": 381.92,
            "text": "质量控制方法，这些都是可迁移的能力。"
        },
        {
            "start": 381.92,
            "end": 384.68,
            "text": "最后我想给大家一个很实用的建议："
        },
        {
            "start": 384.68,
            "end": 387.2,
            "text": "怎么算你们公司的AI ROI。"
        },
        {
            "start": 387.2,
            "end": 388.56,
            "text": "公式很简单。"
        },
        {
            "start": 388.56,
            "end": 392.0,
            "text": "AI的投入成本，包括：工具订阅费、"
        },
        {
            "start": 392.0,
            "end": 394.64,
            "text": "API调用费、人员培训时间、"
        },
        {
            "start": 394.64,
            "end": 396.62,
            "text": "流程调整的时间成本。"
        },
        {
            "start": 396.62,
            "end": 400.16,
            "text": "AI的产出收益，包括：节省的人力成本、"
        },
        {
            "start": 400.16,
            "end": 402.34,
            "text": "提升的速度带来的商业价值、"
        },
        {
            "start": 402.34,
            "end": 405.18,
            "text": "大规模个性化带来的转化率提升、"
        },
        {
            "start": 405.18,
            "end": 409.74,
            "text": "员工从重复性工作中释放出来去做更高价值的事情。"
        },
        {
            "start": 409.74,
            "end": 413.1,
            "text": "我见过的比较典型的数据是什么呢？"
        },
        {
            "start": 413.1,
            "end": 414.66,
            "text": "一个十人左右的团队，"
        },
        {
            "start": 414.66,
            "end": 416.56,
            "text": "如果系统地用好AI，"
        },
        {
            "start": 416.56,
            "end": 421.18,
            "text": "综合效率提升30%到50%是完全可以达到的。"
        },
        {
            "start": 421.18,
            "end": 422.16,
            "text": "这意味着什么？"
        },
        {
            "start": 422.16,
            "end": 425.0,
            "text": "十个人干出十三到十五个人的活。"
        },
        {
            "start": 425.0,
            "end": 429.62,
            "text": "或者反过来说，同样的产出，你可能只需要七八个人。"
        },
        {
            "start": 429.62,
            "end": 433.22,
            "text": "但我要强调，这个效率提升不是自动发生的。"
        },
        {
            "start": 433.22,
            "end": 437.36,
            "text": "你需要投入时间去学习，去实验，去调整流程。"
        },
        {
            "start": 437.8,
            "end": 438.96,
            "text": "通常来说，"
        },
        {
            "start": 438.96,
            "end": 442.06,
            "text": "从开始导入AI到看到明显的效率提升，"
        },
        {
            "start": 442.06,
            "end": 444.26,
            "text": "需要两到三个月的适应期。"
        },
        {
            "start": 444.26,
            "end": 446.18,
            "text": "好，今天的思考题。"
        },
        {
            "start": 446.18,
            "end": 448.96,
            "text": "第一，算一下你的团队里，"
        },
        {
            "start": 448.96,
            "end": 453.44,
            "text": "有多少工作时间花在信息处理和内容生成上？"
        },
        {
            "start": 453.44,
            "end": 455.92,
            "text": "这些时间的人力成本是多少？"
        },
        {
            "start": 455.92,
            "end": 456.58,
            "text": "第二，"
        },
        {
            "start": 456.74,
            "end": 460.94,
            "text": "如果AI能帮你把这些工作的效率提升三倍，"
        },
        {
            "start": 460.94,
            "end": 464.44,
            "text": "你节省下来的时间和人力会投入到哪里？"
        },
        {
            "start": 464.44,
            "end": 464.94,
            "text": "第三，"
        },
        {
            "start": 464.94,
            "end": 468.66,
            "text": "你的竞争对手如果比你早半年全面拥抱AI，"
        },
        {
            "start": 468.66,
            "end": 471.58,
            "text": "他们在成本和速度上会领先你多少？"
        },
        {
            "start": 471.58,
            "end": 473.94,
            "text": "总结一下今天的核心要点。"
        },
        {
            "start": 473.94,
            "end": 479.3,
            "text": "第一，AI的使用成本按Token计费，做一件事可能只要几毛钱。"
        },
        {
            "start": 479.3,
            "end": 481.36,
            "text": "真正的价值在于规模化应用。"
        },
        {
            "start": 481.36,
            "end": 484.34,
            "text": "第二，AI的边际成本趋近于零，"
        },
        {
            "start": 484.34,
            "end": 486.78,
            "text": "这让大规模个性化成为可能。"
        },
        {
            "start": 486.78,
            "end": 491.78,
            "text": "第三，90%的企业应该先用API，别急着自建模型。"
        },
        {
            "start": 491.78,
            "end": 493.96,
            "text": "先验证价值再加大投入。"
        },
        {
            "start": 493.96,
            "end": 495.98,
            "text": "第四，AI越来越便宜，"
        },
        {
            "start": 495.98,
            "end": 499.12,
            "text": "今天不划算的场景明年可能就划算了。"
        },
        {
            "start": 499.12,
            "end": 500.74,
            "text": "保持评估，持续关注。"
        },
        {
            "start": 501.3,
            "end": 503.74,
            "text": "下一期我们讲Prompt思维。"
        },
        {
            "start": 503.74,
            "end": 506.54,
            "text": "怎么像产品经理一样跟AI协作，"
        },
        {
            "start": 506.54,
            "end": 509.94,
            "text": "怎么把你的需求表达得让AI真正理解。"
        },
        {
            "start": 509.94,
            "end": 514.4,
            "text": "这个是一个非常实操的技能，学会了你马上就能用。"
        },
        {
            "start": 514.4,
            "end": 515.68,
            "text": "好，今天就到这里。"
        },
        {
            "start": 515.68,
            "end": 517.26,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 42.9,
        "index": 0
    },
    {
        "start": 42.9,
        "end": 75.4,
        "index": 1
    },
    {
        "start": 75.4,
        "end": 145.06,
        "index": 2
    },
    {
        "start": 145.06,
        "end": 185.16,
        "index": 3
    },
    {
        "start": 185.16,
        "end": 247.2,
        "index": 4
    },
    {
        "start": 247.2,
        "end": 340.36,
        "index": 5
    },
    {
        "start": 340.36,
        "end": 425.0,
        "index": 6
    },
    {
        "start": 425.0,
        "end": 515.68,
        "index": 7
    },
    {
        "start": 515.68,
        "end": 9999,
        "index": 8
    }
], navigation: { currentLessonHash: '#lesson-4', nextLessonHash: '#lesson-5' },
    entryCopy: {
      problem: {
        topNoteTitle: '为什么系统把你带到这一节？',
        topNoteBody: '因为当用户已经理解 AI 的能力边界，下一步最需要的是把“值不值得投、怎么投”这件事想清楚。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '你当前最需要的，不是继续停留在能力想象，而是获得一套可以直接判断投入轻重与 ROI 的经济学框架。'
      }
    },
    reflection: { fields: [{ id: 'qCostArea', key: 'q1' }, { id: 'qReinvest', key: 'q2' }, { id: 'qApiDecision', key: 'q3' }] },
    redirects: { thoughtCardHref: './thought-card.html', thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-04', coachSource: './ai-coach.html?source=lesson-ai-foundation-04' },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于 AI 成本和 ROI 的判断想清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'AI 的商业经济学：成本、速度与规模', module: 'AI时代商业认知' })
  };
})(window);
