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
      els.ctaTitle.textContent = '现在，把这节课整理成你的认知卡';
      els.ctaCopy.textContent = '你已经听完了核心内容。建议马上用下面 3 个问题，把它变成一张认知卡，别让这节课只停留在“听懂了”。';
      showCompletionSheet(api);
    } else if (time > 0.5) {
      els.lessonStatus.textContent = '学习中';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '边听边想，听完后开始整理';
      els.ctaCopy.textContent = '你已经进入学习状态。建议先把课听完，再把这节课真正放回你的企业里。';
    } else {
      els.lessonStatus.textContent = '未开始';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '先听课，再整理思路';
      els.ctaCopy.textContent = '建议先把整节课听完，再开始生成认知卡。你也可以随时先记录想法，等听完后统一整理。';
    }
  }

  window.MindsLeapConfigs.lessons.aiFoundation01 = {
    shell: {
      documentTitle: 'MindsLeap Business School · Foundation 第1课',
      backLink: { href: './index.html', label: '← 返回首页' },
      moduleLabel: '模块零 · AI时代商业认知',
      lessonTitle: '第1课：AI 到底是什么？一个管理者的理解框架',
      heroMeta: ['🎙 Foundation 音频主导', '🖼 Slides 跟随切换', '📝 听完即可沉淀认知卡'],
      topNote: {
        title: '为什么系统先推荐你从这节课开始？',
        body: '因为这节课会先帮你建立一个管理者理解 AI 的底层框架。后面的战略、增长、领导力与 AI 转型模块，都会建立在这个认知地基之上。',
        meta: ['预计时长：10-11 分钟', '你将获得：理解 AI 的本质、边界与应用层次']
      },
      player: {
        initialSlide: './assets/slides/ai-foundation-ep01/slide_01_title.png?v=20260407-safezone-v1',
        initialSlideCount: '1 / 10',
        title: '当前内容：AI 到底是什么？一个管理者的理解框架',
        subtitle: '边听边看重点，学完后把 AI 认知框架放回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: './module-ai-foundation.html?entry=sequence#lesson-1',
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '查看学习地图',
        quickThoughtHref: './map.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '不要只停在“我懂 AI 了”。',
        leadBody: '用下面 3 个问题，把这节课真正放回你的企业现实里。系统会基于你的回答，生成一张认知卡，帮助你先获得第一轮清晰感。',
        questions: [
          { id: 'qOpportunity', title: '1. 你的业务里，哪些工作最可能先被 AI 自动化或增强？', placeholder: '例如：报告分析、内容生成、客服回复、数据整理，或别的高频工作。', tip: '先写你最直觉想到的 1-2 个场景，不用一次写得很完整。' },
          { id: 'qResources', title: '2. 在你的团队里，哪些判断必须保留给人，不能直接交给 AI？', placeholder: '例如：价值判断、最终拍板、品牌表达、复杂谈判，或高风险决策。', tip: '这里最关键的是区分：哪些是 AI 可以辅助，哪些是人必须负责。' },
          { id: 'qAlignment', title: '3. 如果明天你的团队多了 2 个“数字员工”，你会让它们先做什么？', placeholder: '可以从市场、运营、内容、客服、数据分析这几个方向里先想。', tip: '这一步最重要：开始练习“人 + AI 混合团队”的思考方式。' }
        ],
        outroNote: '系统会基于你的回答整理出一版结构化认知卡，后面你还可以继续和 AI 一起打磨。'
      },
      cta: {
        title: '回答先记录下来，继续往下学',
        body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更有价值的模块复盘。',
        titleId: 'ctaTitle',
        bodyId: 'ctaCopy',
        submitId: 'submitQuiz',
        submitLabel: '保存回答，进入下一节',
        coachLabel: '暂时跳过，继续学习',
        secondaryHref: './lesson-ai-foundation-02.html?entry=sequence'
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
          { no: 1, title: 'AI 到底是什么？一个管理者的理解框架', body: '先建立管理者理解 AI 的底层框架。', badge: '当前', state: 'current' },
          { no: 2, title: '大模型到底改变了什么？从 GPT 到 AI Agent', body: '理解为什么大模型成为这一轮 AI 变化的核心，以及它对商业意味着什么。', badge: '下一节', state: 'next', badgeClass: 'next' },
          { no: 3, title: 'AI 擅长什么，不擅长什么？', body: '帮助你判断哪些任务适合交给 AI，哪些任务必须保留人的判断。', badge: '待学习' }
        ],
        nextLessonHref: './lesson-ai-foundation-02.html?entry=sequence',
        nextLessonLabel: '查看下一节',
        moduleOverviewHref: './module-ai-foundation.html',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '推荐理由',
        reasonBody: '这是整个学习路径的起点。先把“AI 到底是什么”讲清楚，后面的战略、增长、领导力与 AI 应用才不会变成零散动作。',
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
          { eyebrow: '核心概念 01', title: 'AI 的本质：模式识别 + 内容生成', body: 'AI 的本质，可以先理解为模式识别与内容生成。你不需要先学技术细节，但要先建立这个底层认知。' },
          { eyebrow: '核心概念 02', title: 'AI 有能力，也有明显边界', body: 'AI 很强，但它也有明显边界：它擅长信息密集型工作，不擅长做价值判断，也可能一本正经地出错。' },
          { eyebrow: '核心概念 03', title: 'AI 的应用有层次', body: '自动化、增强、创造，是管理者理解 AI 商业价值最实用的三层框架。' },
          { eyebrow: '行动提示', title: '真正重要的是人机协作', body: '未来管理者要管的不只是人，还要管理数字员工，设计“人 + AI”的混合工作流。' }
        ],
        notesTitle: '随手记录',
        noteChips: [
          { label: '关键定义', insert: '【关键定义】AI 的本质，可以先理解为模式识别 + 内容生成。' },
          { label: '我的反思', insert: '【我的反思】我需要更清楚地区分：哪些适合交给 AI，哪些必须保留给人。' },
          { label: '下一步', insert: '【下一步】回去梳理：团队里哪些工作可以先引入 AI 自动化或增强。' }
        ],
        notesPlaceholder: '记录你的想法：\n- 哪些工作最适合先交给 AI？\n- 哪些判断必须由人负责？\n- 如果多两个数字员工，我会怎么分工？'
      },
      completion: {
        title: '这节课你已经学完了',
        body: '现在最合适的下一步，是继续进入本模块的下一节，或者先回到模块页看完整章节结构。',
        meta: ['当前完成：AI时代商业认知 1/6', '建议下一节：大模型到底改变了什么', '也可以先整理认知卡'],
        nextHref: './lesson-ai-foundation-02.html?entry=sequence',
        nextLabel: '进入下一节',
        moduleHref: './module-ai-foundation.html',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    ids: {
      submitThought: 'submitQuiz'
    },
    moduleId: 'ai-foundation',
    lessonId: 'ai-foundation-01',
    modulePage: 'module-ai-foundation.html',
    progressNamespace: 'aiFoundation',
    progressLessonKey: 'lesson1',
    audioSource: './assets/audio/ai-foundation-ep01-clean-opening-from-ep02-v1.mp3?v=20260513-foundation-01-opening-resync',
    vttSrc: './assets/subtitles/ai-foundation-ep01-fixed.vtt?v=20260513-foundation-01-opening-resync',
    slidesSrc: './assets/timeline/ai-foundation-ep01-slides.json',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260407-foundation-safezone-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "ai-foundation-ep01/slide_01_title.png",
            "label": "标题页",
            "caption": "这节课先帮你建立一个管理者理解 AI 的底层框架。"
        },
        {
            "file": "ai-foundation-ep01/slide_02_why_first.png",
            "label": "为什么先学这节",
            "caption": "如果不先搞清楚 AI 是什么，后面的战略、增长和组织讨论都会漂起来。"
        },
        {
            "file": "ai-foundation-ep01/slide_03_definition.png",
            "label": "定义",
            "caption": "先用管理者能理解的话把 AI 说明白，而不是一上来陷入技术名词。"
        },
        {
            "file": "ai-foundation-ep01/slide_04_super_intern.png",
            "label": "超级实习生",
            "caption": "你可以先把 AI 理解成一个速度极快、知识很广，但也会犯错的超级实习生。"
        },
        {
            "file": "ai-foundation-ep01/slide_05_strengths.png",
            "label": "擅长什么",
            "caption": "AI 特别擅长处理信息密集、可表达、可拆解的工作。"
        },
        {
            "file": "ai-foundation-ep01/slide_06_limits.png",
            "label": "不擅长什么",
            "caption": "AI 不擅长承担价值判断，也不能替你完成最终取舍。"
        },
        {
            "file": "ai-foundation-ep01/slide_07_application_layers.png",
            "label": "应用层次",
            "caption": "自动化、增强、创造，是最适合管理者理解 AI 商业价值的三层框架。"
        },
        {
            "file": "ai-foundation-ep01/slide_08_manager_levels.png",
            "label": "管理者层次",
            "caption": "真正重要的不是追工具，而是开始用管理者视角重构业务分工。"
        },
        {
            "file": "ai-foundation-ep01/slide_09_digital_workers.png",
            "label": "数字员工",
            "caption": "未来你要管理的不只是人，也包括越来越多的数字员工。"
        },
        {
            "file": "ai-foundation-ep01/slide_10_summary.png",
            "label": "总结页",
            "caption": "这节课的目的，是让你第一次用结构化方式理解 AI，而不是只凭感觉。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.32,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.32,
            "end": 4.0,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.0,
            "end": 6.28,
            "text": "今天是我们整个课程的第一期。"
        },
        {
            "start": 6.28,
            "end": 8.94,
            "text": "在正式开始学战略、学财务、"
        },
        {
            "start": 8.94,
            "end": 10.020000000000024,
            "text": "学营销之前呢，"
        },
        {
            "start": 10.020000000000024,
            "end": 12.68,
            "text": "我想先跟大家聊一个绕不开的话题。"
        },
        {
            "start": 12.68,
            "end": 13.8,
            "text": "就是，AI。"
        },
        {
            "start": 13.8,
            "end": 16.16,
            "text": "Artificial Intelligence，人工智能。"
        },
        {
            "start": 16.16,
            "end": 19.8,
            "text": "你可能会说，Lincoln，AI这个词我天天听，"
        },
        {
            "start": 19.8,
            "end": 22.08,
            "text": "ChatGPT我也用过，这有什么好讲的？"
        },
        {
            "start": 22.08,
            "end": 24.56,
            "text": "但是话说回来，我想问大家一个问题："
        },
        {
            "start": 24.56,
            "end": 26.48,
            "text": "你真的理解AI是什么吗？"
        },
        {
            "start": 26.48,
            "end": 28.34,
            "text": "不是技术层面的理解，"
        },
        {
            "start": 28.34,
            "end": 30.92,
            "text": "我不是要你去学什么神经网络、"
        },
        {
            "start": 30.92,
            "end": 32.22,
            "text": "什么transformer架构。"
        },
        {
            "start": 32.22,
            "end": 35.2,
            "text": "我说的是，作为一个企业的管理者，"
        },
        {
            "start": 35.2,
            "end": 36.44,
            "text": "作为一个创业者，"
        },
        {
            "start": 36.44,
            "end": 39.28,
            "text": "你需要对AI建立一个什么样的认知框架？"
        },
        {
            "start": 39.28,
            "end": 40.4,
            "text": "这个很重要。"
        },
        {
            "start": 40.4,
            "end": 42.58,
            "text": "因为在接下来的整个课程里面，"
        },
        {
            "start": 42.58,
            "end": 46.02,
            "text": "我们讲战略的时候会讲AI怎么改变竞争格局，"
        },
        {
            "start": 46.02,
            "end": 49.22,
            "text": "讲营销的时候会讲AI怎么做精准获客，"
        },
        {
            "start": 49.22,
            "end": 52.62,
            "text": "讲领导力的时候会讲你怎么管理数字员工。"
        },
        {
            "start": 52.62,
            "end": 54.52,
            "text": "AI已经是一个底色了，"
        },
        {
            "start": 54.52,
            "end": 56.02,
            "text": "它不是一个单独的话题，"
        },
        {
            "start": 56.02,
            "end": 58.52,
            "text": "它是渗透在每一个商业环节里面的。"
        },
        {
            "start": 58.52,
            "end": 62.22,
            "text": "所以第一期，我们先把这个认知地基打好。"
        },
        {
            "start": 62.22,
            "end": 64.14,
            "text": "好，那AI到底是什么呢？"
        },
        {
            "start": 64.14,
            "end": 66.64,
            "text": "我给大家一个最简单的理解框架。"
        },
        {
            "start": 66.64,
            "end": 69.54,
            "text": "你不需要懂技术，你只要记住两个词："
        },
        {
            "start": 69.54,
            "end": 72.4,
            "text": "模式识别，和内容生成。"
        },
        {
            "start": 72.4,
            "end": 74.52,
            "text": "Pattern Recognition and Content Generation."
        },
        {
            "start": 74.52,
            "end": 75.38,
            "text": "什么意思呢？"
        },
        {
            "start": 75.38,
            "end": 79.82,
            "text": "比如说，你给AI看一万张猫的照片，它就能学会识别猫。"
        },
        {
            "start": 79.82,
            "end": 81.46,
            "text": "这叫模式识别。"
        },
        {
            "start": 81.46,
            "end": 85.44,
            "text": "你给AI读一百万篇商业报告，它就能学会写商业报告。"
        },
        {
            "start": 85.44,
            "end": 86.62,
            "text": "这叫内容生成。"
        },
        {
            "start": 86.62,
            "end": 88.42,
            "text": "本质上，今天的AI，"
        },
        {
            "start": 88.42,
            "end": 90.64,
            "text": "尤其是大家天天在用的ChatGPT、"
        },
        {
            "start": 90.64,
            "end": 93.78,
            "text": "Claude这些大语言模型，它们做的事情就是："
        },
        {
            "start": 93.78,
            "end": 96.5,
            "text": "从海量的数据里面学习模式，"
        },
        {
            "start": 96.5,
            "end": 99.38,
            "text": "然后根据这些模式来生成新的内容。"
        },
        {
            "start": 99.38,
            "end": 102.26000000000002,
            "text": "你可以把它想象成一个超级实习生。"
        },
        {
            "start": 102.26000000000002,
            "end": 103.19999999999999,
            "text": "这个实习生呢，"
        },
        {
            "start": 103.2,
            "end": 105.64,
            "text": "读过全世界几乎所有的书，"
        },
        {
            "start": 105.64,
            "end": 107.4,
            "text": "看过几乎所有的资料。"
        },
        {
            "start": 107.4,
            "end": 110.08,
            "text": "它的知识面极其广，速度极其快，"
        },
        {
            "start": 110.08,
            "end": 113.34,
            "text": "而且不知疲倦，7乘24小时随时待命。"
        },
        {
            "start": 113.75999999999999,
            "end": 116.86,
            "text": "但是话说回来，它有一个根本性的特点："
        },
        {
            "start": 116.86,
            "end": 119.42,
            "text": "它是从已有的模式里面做推断，"
        },
        {
            "start": 119.42,
            "end": 122.38,
            "text": "而不是从第一性原理出发去思考。"
        },
        {
            "start": 122.38,
            "end": 123.7,
            "text": "这意味着什么呢？"
        },
        {
            "start": 123.7,
            "end": 127.44,
            "text": "这就引出了一个管理者必须理解的关键点："
        },
        {
            "start": 127.44,
            "end": 129.68,
            "text": "AI擅长什么，不擅长什么。"
        },
        {
            "start": 129.68,
            "end": 131.36,
            "text": "先说擅长的。"
        },
        {
            "start": 131.36,
            "end": 134.4,
            "text": "第一，AI特别擅长处理信息密集型的任务。"
        },
        {
            "start": 134.4,
            "end": 137.62,
            "text": "比如说，你要分析一份200页的行业报告，"
        },
        {
            "start": 137.62,
            "end": 139.48,
            "text": "人可能要读两天，"
        },
        {
            "start": 139.48,
            "end": 142.08,
            "text": "AI几秒钟就能帮你提取关键信息。"
        },
        {
            "start": 142.08,
            "end": 145.8,
            "text": "第二，AI特别擅长规模化的重复性工作。"
        },
        {
            "start": 145.8,
            "end": 148.82,
            "text": "比如说你要给一千个客户写个性化的邮件，"
        },
        {
            "start": 148.82,
            "end": 150.62,
            "text": "人工可能要写一个月，"
        },
        {
            "start": 150.62,
            "end": 152.56,
            "text": "AI可能半小时就搞定了。"
        },
        {
            "start": 152.56,
            "end": 155.38,
            "text": "第三，AI擅长跨领域的知识连接。"
        },
        {
            "start": 155.38,
            "end": 157.22,
            "text": "它读过各行各业的资料，"
        },
        {
            "start": 157.22,
            "end": 160.06,
            "text": "所以它特别善于把不同领域的知识做关联。"
        },
        {
            "start": 160.06,
            "end": 163.06,
            "text": "你跟它聊战略的时候它能联想到历史案例，"
        },
        {
            "start": 163.06,
            "end": 166.0,
            "text": "你跟它聊营销的时候它能引用心理学的研究。"
        },
        {
            "start": 166.57999999999998,
            "end": 169.28,
            "text": "但是，AI不擅长的东西同样重要。"
        },
        {
            "start": 169.28,
            "end": 171.6,
            "text": "第一，AI不擅长做价值判断。"
        },
        {
            "start": 171.6,
            "end": 174.5,
            "text": "它能告诉你这个方案的优缺点是什么，"
        },
        {
            "start": 174.5,
            "end": 177.06,
            "text": "但它不能替你决定，这个事情该不该做。"
        },
        {
            "start": 177.06,
            "end": 179.42,
            "text": "因为该不该做涉及到你的价值观，"
        },
        {
            "start": 179.42,
            "end": 181.42,
            "text": "你的愿景，你对风险的偏好。"
        },
        {
            "start": 181.42,
            "end": 183.0,
            "text": "这些是人的领地。"
        },
        {
            "start": 183.4,
            "end": 186.2,
            "text": "第二，AI不擅长处理真正的新情况。"
        },
        {
            "start": 186.2,
            "end": 188.1,
            "text": "它是从历史数据里面学的，"
        },
        {
            "start": 188.1,
            "end": 190.04,
            "text": "所以当遇到完全没有先例的情况，"
        },
        {
            "start": 190.04,
            "end": 191.8,
            "text": "它的判断力会大幅下降。"
        },
        {
            "start": 191.8,
            "end": 195.7,
            "text": "而创业和经营企业，你经常会遇到从来没有人做过的事情。"
        },
        {
            "start": 195.7,
            "end": 199.04,
            "text": "第三，AI会\"一本正经地胡说八道\"。"
        },
        {
            "start": 199.51999999999998,
            "end": 201.74,
            "text": "英文叫Hallucination，幻觉。"
        },
        {
            "start": 201.74,
            "end": 205.28,
            "text": "它有时候会非常自信地给你一个完全错误的答案。"
        },
        {
            "start": 205.28,
            "end": 207.32,
            "text": "这对管理者来说是一个很大的陷阱，"
        },
        {
            "start": 207.32,
            "end": 209.4,
            "text": "因为如果你不具备专业判断力，"
        },
        {
            "start": 209.4,
            "end": 211.12,
            "text": "你可能就被它带偏了。"
        },
        {
            "start": 211.12,
            "end": 212.26000000000002,
            "text": "好，讲到这里呢，"
        },
        {
            "start": 212.26000000000002,
            "end": 214.72,
            "text": "我想给大家分享一个我自己的理解框架，"
        },
        {
            "start": 214.72,
            "end": 215.86,
            "text": "我觉得非常实用。"
        },
        {
            "start": 215.86,
            "end": 219.18,
            "text": "我把AI在商业中的应用分成三个层次。"
        },
        {
            "start": 219.18,
            "end": 221.78,
            "text": "第一个层次叫 自动化，Automation。"
        },
        {
            "start": 221.78,
            "end": 225.36,
            "text": "就是用AI替代那些重复性的、规则明确的工作。"
        },
        {
            "start": 225.36,
            "end": 227.5,
            "text": "比如说，数据录入、报表生成、"
        },
        {
            "start": 227.5,
            "end": 230.54,
            "text": "客服回复常见问题、发票处理，等等吧。"
        },
        {
            "start": 230.54,
            "end": 232.22,
            "text": "这个层次的特点是什么呢？"
        },
        {
            "start": 232.22,
            "end": 235.2,
            "text": "投入产出比最清晰，见效最快，风险最低。"
        },
        {
            "start": 235.2,
            "end": 237.9,
            "text": "第二个层次叫 增强，Augmentation。"
        },
        {
            "start": 237.9,
            "end": 240.94,
            "text": "就是AI不是替代你，而是让你变得更强。"
        },
        {
            "start": 240.94,
            "end": 242.78,
            "text": "比如说，你是一个市场经理，"
        },
        {
            "start": 242.78,
            "end": 245.32,
            "text": "AI帮你分析用户数据、生成创意方案、"
        },
        {
            "start": 245.32,
            "end": 247.04,
            "text": "做A/B测试的自动化。"
        },
        {
            "start": 247.04,
            "end": 250.28,
            "text": "你的判断力还在，但你的效率提升了十倍。"
        },
        {
            "start": 250.28,
            "end": 253.74,
            "text": "这个层次是目前大多数企业应该重点关注的。"
        },
        {
            "start": 253.74,
            "end": 256.06,
            "text": "第三个层次叫 创造，Creation。"
        },
        {
            "start": 256.06,
            "end": 259.28,
            "text": "就是AI帮你做出以前根本不可能做的事情。"
        },
        {
            "start": 259.28,
            "end": 261.58,
            "text": "比如说，一个四人的创业团队，"
        },
        {
            "start": 261.58,
            "end": 264.3,
            "text": "用AI做客服、做内容、做数据分析、"
        },
        {
            "start": 264.42,
            "end": 267.16,
            "text": "做编程，相当于有了四十个人的能力。"
        },
        {
            "start": 267.16,
            "end": 271.56,
            "text": "或者说，AI帮你发现了一个你从来没想到的市场机会。"
        },
        {
            "start": 271.56,
            "end": 274.42,
            "text": "这个层次最exciting，但也最不确定。"
        },
        {
            "start": 274.42,
            "end": 276.64,
            "text": "自动化、增强、创造。"
        },
        {
            "start": 276.64,
            "end": 278.46,
            "text": "这三个层次是递进的。"
        },
        {
            "start": 278.46,
            "end": 280.52,
            "text": "我建议大家在想AI应用的时候，"
        },
        {
            "start": 280.52,
            "end": 283.12,
            "text": "先从自动化开始，把低风险、"
        },
        {
            "start": 283.12,
            "end": 285.12,
            "text": "高确定性的事情先做了。"
        },
        {
            "start": 285.12,
            "end": 288.06,
            "text": "然后再往增强走，最后探索创造的可能性。"
        },
        {
            "start": 288.06,
            "end": 291.26,
            "text": "不要一上来就想搞颠覆，先把效率提上去。"
        },
        {
            "start": 291.26,
            "end": 294.78,
            "text": "接下来我想聊一个很多管理者都在纠结的问题："
        },
        {
            "start": 294.78,
            "end": 297.2,
            "text": "我到底需要懂AI到什么程度？"
        },
        {
            "start": 297.2,
            "end": 298.82,
            "text": "我觉得这个问题特别好。"
        },
        {
            "start": 298.82,
            "end": 299.5,
            "text": "因为确实，"
        },
        {
            "start": 299.5,
            "end": 302.3,
            "text": "你不可能要求每个CEO都去学写代码，"
        },
        {
            "start": 302.44,
            "end": 303.28,
            "text": "去学训练模型。"
        },
        {
            "start": 303.28,
            "end": 306.92,
            "text": "但是话说回来，你也不能对AI一无所知。"
        },
        {
            "start": 306.92,
            "end": 310.78,
            "text": "我的建议是，管理者对AI的理解应该分三个层次。"
        },
        {
            "start": 310.78,
            "end": 313.28,
            "text": "第一层，你要理解AI的能力边界。"
        },
        {
            "start": 313.28,
            "end": 316.88,
            "text": "也就是说，你要知道AI大概能做什么，不能做什么。"
        },
        {
            "start": 316.88,
            "end": 320.2,
            "text": "这样当你的团队跟你提AI相关的方案时，"
        },
        {
            "start": 320.2,
            "end": 323.14,
            "text": "你才有能力判断这个方案靠不靠谱。"
        },
        {
            "start": 323.14,
            "end": 325.24,
            "text": "你不需要知道模型怎么训练的，"
        },
        {
            "start": 325.24,
            "end": 327.78,
            "text": "但你要知道这个模型大概能做到什么精度，"
        },
        {
            "start": 327.78,
            "end": 329.4,
            "text": "有什么局限性。"
        },
        {
            "start": 329.4,
            "end": 331.66,
            "text": "第二层，你要能够亲手用AI。"
        },
        {
            "start": 331.66,
            "end": 334.78,
            "text": "不是说你天天用，但至少你要体验过。"
        },
        {
            "start": 334.78,
            "end": 338.02,
            "text": "你自己用ChatGPT或者Claude写过东西，做过分析，"
        },
        {
            "start": 338.02,
            "end": 340.26,
            "text": "你才能真正理解它的能力和局限。"
        },
        {
            "start": 340.26,
            "end": 341.62,
            "text": "这个没有捷径。"
        },
        {
            "start": 341.62,
            "end": 345.6,
            "text": "就像你不亲自开车，你永远不知道开车是什么感觉。"
        },
        {
            "start": 345.6,
            "end": 349.18,
            "text": "第三层，你要能够设计人机协作的工作流。"
        },
        {
            "start": 349.18,
            "end": 351.92,
            "text": "也就是说，在你的业务流程里面，"
        },
        {
            "start": 351.92,
            "end": 354.76,
            "text": "哪些环节让AI做，哪些环节让人做，"
        },
        {
            "start": 354.76,
            "end": 356.18,
            "text": "两者之间怎么配合。"
        },
        {
            "start": 356.18,
            "end": 358.6,
            "text": "这个是管理者最核心的能力。"
        },
        {
            "start": 358.6,
            "end": 361.96,
            "text": "我们后面在领导力模块会深入讲这个话题。"
        },
        {
            "start": 362.42,
            "end": 365.72,
            "text": "我再给大家举一个具体的例子，帮大家感受一下。"
        },
        {
            "start": 365.72,
            "end": 368.22,
            "text": "假设你是一个消费品公司的CEO。"
        },
        {
            "start": 368.22,
            "end": 370.78,
            "text": "你的市场团队跑过来跟你说：\"老板，"
        },
        {
            "start": 370.78,
            "end": 372.46,
            "text": "我们想用AI做内容营销。"
        },
        {
            "start": 372.46,
            "end": 372.88,
            "text": "\""
        },
        {
            "start": 372.88,
            "end": 373.92,
            "text": "这时候你怎么判断？"
        },
        {
            "start": 374.38,
            "end": 377.36,
            "text": "如果你理解AI的能力边界，你就知道："
        },
        {
            "start": 377.36,
            "end": 380.48,
            "text": "AI写产品描述、写社交媒体文案、"
        },
        {
            "start": 380.84,
            "end": 383.86,
            "text": "写邮件，这些是它非常擅长的，可以做。"
        },
        {
            "start": 383.86,
            "end": 386.24,
            "text": "但是品牌的核心叙事、"
        },
        {
            "start": 386.24,
            "end": 389.36,
            "text": "品牌价值观的表达，这些需要人来把关，"
        },
        {
            "start": 389.36,
            "end": 390.5,
            "text": "AI只能辅助。"
        },
        {
            "start": 390.5,
            "end": 393.14,
            "text": "如果你自己用过AI，你就知道："
        },
        {
            "start": 393.14,
            "end": 395.2,
            "text": "AI生成的内容需要人审核，"
        },
        {
            "start": 395.2,
            "end": 396.64,
            "text": "因为它有时候会出错，"
        },
        {
            "start": 396.64,
            "end": 399.46,
            "text": "有时候会生成缺乏个性的\"AI味儿\"内容。"
        },
        {
            "start": 399.46,
            "end": 404.1,
            "text": "所以你不能完全放手，你需要有人在中间做quality control。"
        },
        {
            "start": 404.7,
            "end": 407.36,
            "text": "如果你能设计人机协作工作流，"
        },
        {
            "start": 407.36,
            "end": 408.9,
            "text": "你就能跟团队说：好，"
        },
        {
            "start": 408.9,
            "end": 412.62,
            "text": "我们这么做——AI负责初稿生成和素材搜集，"
        },
        {
            "start": 412.62,
            "end": 415.66,
            "text": "人负责创意方向和最终审核。"
        },
        {
            "start": 415.66,
            "end": 417.86,
            "text": "这样效率提高了，质量也有保障。"
        },
        {
            "start": 417.86,
            "end": 422.6,
            "text": "你看，这三层理解，没有一层需要你会写代码。"
        },
        {
            "start": 422.6,
            "end": 426.32,
            "text": "但每一层都能让你做出更好的商业决策。"
        },
        {
            "start": 426.32,
            "end": 429.08,
            "text": "其实讲到这里，我还想多说一层。"
        },
        {
            "start": 429.08,
            "end": 431.64000000000004,
            "text": "过去我们做管理者，核心工作是什么？"
        },
        {
            "start": 431.64000000000004,
            "end": 432.74,
            "text": "管人。"
        },
        {
            "start": 433.04,
            "end": 435.62,
            "text": "招人、带人、激励人、协调人。"
        },
        {
            "start": 435.62,
            "end": 439.74,
            "text": "但是在AI时代，管理者的角色发生了一个根本性的变化。"
        },
        {
            "start": 439.74,
            "end": 442.82,
            "text": "你不仅要管人，你还要管你的数字员工。"
        },
        {
            "start": 442.82,
            "end": 444.64,
            "text": "什么叫数字员工？"
        },
        {
            "start": 444.64,
            "end": 446.0,
            "text": "就是AI Agent。"
        },
        {
            "start": 446.0,
            "end": 448.92,
            "text": "它可以帮你做客服、做数据分析、"
        },
        {
            "start": 448.92,
            "end": 451.32,
            "text": "做内容生成、做市场调研。"
        },
        {
            "start": 451.32,
            "end": 454.24,
            "text": "它不需要休息，不需要发工资，不需要团建。"
        },
        {
            "start": 454.24,
            "end": 456.0,
            "text": "但它需要你去管理。"
        },
        {
            "start": 456.0,
            "end": 457.48,
            "text": "你要给它分配任务，"
        },
        {
            "start": 457.48,
            "end": 459.18,
            "text": "你要设定它的权限边界，"
        },
        {
            "start": 459.18,
            "end": 461.16,
            "text": "你要检查它的产出质量，"
        },
        {
            "start": 461.16,
            "end": 463.48,
            "text": "你要在它犯错的时候纠正它。"
        },
        {
            "start": 463.48,
            "end": 466.74,
            "text": "这跟管人是一样的逻辑，但又不完全一样。"
        },
        {
            "start": 466.74,
            "end": 470.22,
            "text": "比如说，你现在有一个五人的市场团队。"
        },
        {
            "start": 470.22,
            "end": 473.44,
            "text": "以前你的工作是让这五个人高效协作。"
        },
        {
            "start": 473.44,
            "end": 477.7,
            "text": "但现在呢，你的团队可能是五个人加上三个AI Agent。"
        },
        {
            "start": 477.7,
            "end": 480.5,
            "text": "有一个AI Agent专门帮你写社媒内容，"
        },
        {
            "start": 480.5,
            "end": 482.9,
            "text": "有一个专门帮你做竞品监控，"
        },
        {
            "start": 482.9,
            "end": 485.18,
            "text": "还有一个专门帮你跑数据报表。"
        },
        {
            "start": 485.18,
            "end": 487.42,
            "text": "这时候你要考虑的问题就变了。"
        },
        {
            "start": 487.42,
            "end": 491.82,
            "text": "不只是人跟人之间怎么配合，还有人跟AI之间怎么配合。"
        },
        {
            "start": 491.82,
            "end": 494.56,
            "text": "哪些任务交给AI做初稿，人来审核？"
        },
        {
            "start": 494.56,
            "end": 497.42,
            "text": "哪些任务必须人来主导，AI来辅助？"
        },
        {
            "start": 497.42,
            "end": 501.3,
            "text": "当AI的产出和人的判断不一致的时候，以谁为准？"
        },
        {
            "start": 501.3,
            "end": 503.58,
            "text": "这个就是我说的人机协作。"
        },
        {
            "start": 503.58,
            "end": 507.34,
            "text": "它不是一个遥远的概念，它就是今天正在发生的事情。"
        },
        {
            "start": 507.34,
            "end": 511.02,
            "text": "我们后面在领导力模块会专门拿几期来深入讲，"
        },
        {
            "start": 511.02,
            "end": 512.72,
            "text": "怎么管理你的数字员工，"
        },
        {
            "start": 512.72,
            "end": 514.8800000000001,
            "text": "怎么设计人机协作的组织架构。"
        },
        {
            "start": 514.8800000000001,
            "end": 516.82,
            "text": "但我希望从第一期开始，"
        },
        {
            "start": 516.82,
            "end": 519.24,
            "text": "你就建立这个意识：AI时代的管理者，"
        },
        {
            "start": 519.24,
            "end": 522.56,
            "text": "管的不只是人，是人加机器的混合团队。"
        },
        {
            "start": 522.56,
            "end": 525.72,
            "text": "所以到这里呢，我想给大家留几个思考题。"
        },
        {
            "start": 525.72,
            "end": 527.84,
            "text": "第一，在你现在的业务里面，"
        },
        {
            "start": 527.84,
            "end": 530.82,
            "text": "有哪些工作是信息密集、重复性高的？"
        },
        {
            "start": 530.82,
            "end": 533.88,
            "text": "这些可能是AI自动化的第一批候选。"
        },
        {
            "start": 533.88,
            "end": 535.9200000000001,
            "text": "第二，你自己用过AI工具吗？"
        },
        {
            "start": 535.9200000000001,
            "end": 538.62,
            "text": "如果还没有，我强烈建议你今天就开始，"
        },
        {
            "start": 538.62,
            "end": 541.68,
            "text": "哪怕只是跟ChatGPT或者Claude聊几句，"
        },
        {
            "start": 541.68,
            "end": 543.26,
            "text": "感受一下它的能力。"
        },
        {
            "start": 543.26,
            "end": 543.78,
            "text": "第三，"
        },
        {
            "start": 543.78,
            "end": 546.8,
            "text": "如果明天你的团队里多了两个\"数字员工\"，"
        },
        {
            "start": 546.8,
            "end": 548.06,
            "text": "你会让它们做什么？"
        },
        {
            "start": 548.06,
            "end": 550.06,
            "text": "你的团队需要怎么调整配合方式？"
        },
        {
            "start": 550.06,
            "end": 553.58,
            "text": "第四，如果你的竞争对手全面拥抱了AI，"
        },
        {
            "start": 553.58,
            "end": 554.9,
            "text": "而你还没有，"
        },
        {
            "start": 554.9,
            "end": 557.72,
            "text": "你觉得一年后的竞争格局会变成什么样？"
        },
        {
            "start": 558.1999999999999,
            "end": 561.64,
            "text": "这些问题没有标准答案，但值得你认真想一想。"
        },
        {
            "start": 561.64,
            "end": 563.76,
            "text": "好，总结一下今天的核心要点。"
        },
        {
            "start": 563.76,
            "end": 566.8,
            "text": "第一，AI的本质是模式识别和内容生成。"
        },
        {
            "start": 566.8,
            "end": 570.34,
            "text": "你不需要懂技术细节，但你要理解这个基本原理。"
        },
        {
            "start": 570.34,
            "end": 574.28,
            "text": "第二，AI的应用有三个层次：自动化、增强、创造。"
        },
        {
            "start": 574.28,
            "end": 576.78,
            "text": "建议从自动化开始，逐步深入。"
        },
        {
            "start": 576.78,
            "end": 579.68,
            "text": "第三，管理者需要建立三层AI认知："
        },
        {
            "start": 579.68,
            "end": 581.8,
            "text": "理解能力边界、亲手使用、"
        },
        {
            "start": 581.8,
            "end": 583.66,
            "text": "设计人机协作工作流。"
        },
        {
            "start": 583.66,
            "end": 587.12,
            "text": "第四，AI时代的管理者要管的不只是人，"
        },
        {
            "start": 587.12,
            "end": 589.64,
            "text": "而是人加数字员工的混合团队。"
        },
        {
            "start": 589.64,
            "end": 593.04,
            "text": "人机协作能力会成为管理者的核心竞争力。"
        },
        {
            "start": 593.5999999999999,
            "end": 595.04,
            "text": "从下一期开始，"
        },
        {
            "start": 595.04,
            "end": 598.32,
            "text": "我会带大家了解大模型到底改变了什么，"
        },
        {
            "start": 598.32,
            "end": 600.56,
            "text": "从GPT到AI Agent，"
        },
        {
            "start": 600.56,
            "end": 603.44,
            "text": "这个演化过程对商业意味着什么。"
        },
        {
            "start": 603.44,
            "end": 606.36,
            "text": "应该来说，理解了这个演化脉络，"
        },
        {
            "start": 606.36,
            "end": 609.22,
            "text": "你对AI的认知会上一个很大的台阶。"
        },
        {
            "start": 609.22,
            "end": 614.08,
            "text": "如果你听完有任何问题，打开MindsLeap 商学院，找AI导师聊一聊。"
        },
        {
            "start": 614.08,
            "end": 616.48,
            "text": "你可以问它关于AI的任何问题，"
        },
        {
            "start": 616.48,
            "end": 619.6,
            "text": "它会根据你的行业和角色给你针对性的回答。"
        },
        {
            "start": 619.6,
            "end": 621.46,
            "text": "好，今天的分享就到这里。"
        },
        {
            "start": 621.46,
            "end": 623.26,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 22.08,
        "index": 0
    },
    {
        "start": 22.08,
        "end": 64.14,
        "index": 1
    },
    {
        "start": 64.14,
        "end": 102.26,
        "index": 2
    },
    {
        "start": 102.26,
        "end": 123.7,
        "index": 3
    },
    {
        "start": 123.7,
        "end": 166.58,
        "index": 4
    },
    {
        "start": 166.58,
        "end": 215.86,
        "index": 5
    },
    {
        "start": 215.86,
        "end": 291.26,
        "index": 6
    },
    {
        "start": 291.26,
        "end": 426.32,
        "index": 7
    },
    {
        "start": 426.32,
        "end": 561.64,
        "index": 8
    },
    {
        "start": 561.64,
        "end": 9999,
        "index": 9
    }
], navigation: { nextLessonUrl: './lesson-ai-foundation-02.html?entry={entry}' },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: '这节课会先帮你建立管理者理解 AI 的底层判断框架：AI 是什么、AI 不是什么，以及为什么它会成为后面所有经营判断的新变量。',
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: '你会先建立“AI 是什么、能做什么、不能做什么”的核心框架。后面再进入战略、增长、领导力时，会更容易形成系统性的判断。'
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: '因为这节课会先帮你建立一个管理者理解 AI 的底层框架。后面的战略、增长、领导力与 AI 转型模块，都会建立在这个认知地基之上。',
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: '这是整个学习路径的起点。先把“AI 到底是什么”讲清楚，后面的战略、增长、领导力与 AI 应用才不会变成零散动作。'
      }
    },
    reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] },
    redirects: {
      submitHref: './lesson-ai-foundation-02.html?entry={entry}',
      secondaryHref: './lesson-ai-foundation-02.html?entry={entry}',
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: './thought-card.html?source=lesson-ai-foundation-01',
      coachSource: './ai-coach.html?source=lesson-ai-foundation-01'
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: '我想继续把这一节关于 AI 基础认知的思路打磨得更清楚。',
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: 'AI 到底是什么？一个管理者的理解框架', module: 'AI时代商业认知' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = `./lesson-ai-foundation-02.html?entry=${entryMode}`;
        if (els.completionModuleBtn) els.completionModuleBtn.href = `./module-ai-foundation.html?entry=${entryMode}`;
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
