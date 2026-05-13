(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第1课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第1课：招人的艺术：AI 时代需要什么样的人才",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep48-hiring-ai-era/slide_01.svg", initialSlideCount: "1 / 8", title: "当前内容：招人的艺术：AI 时代需要什么样的人才", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "招人的艺术：AI 时代需要什么样的人才",
                "body": "重新理解 AI 时代的人才标准：什么能力在升值，什么样的人更值得你提前布局。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "团队激励：钱不是万能的",
                "body": "看清楚团队真正被什么驱动，再把激励从单一的奖金机制升级成更完整的系统。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "绩效与 OKR：目标怎么真正落地",
                "body": "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "领导力模型：领导者到底在做什么",
                "body": "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "管理数字员工：人和 AI 一起工作以后怎么管",
                "body": "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "人与 AI 协作：团队分工怎么重做",
                "body": "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 变革管理：组织怎么更轻快地改变",
                "body": "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "敏捷组织：组织怎么更灵活",
                "body": "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "企业文化：看不见的组织操作系统",
                "body": "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "远程协作：团队不在一起怎么高效工作",
                "body": "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "AI 辅助决策：领导者该怎么用 AI 想问题",
                "body": "把 AI 真正变成决策辅助者，而不是新的噪音来源。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "冲突管理：有分歧，不一定是坏事",
                "body": "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：纳德拉如何重塑微软",
                "body": "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "案例：一家企业如何真正把 AI 用起来",
                "body": "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-leadership-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "重新理解 AI 时代的人才标准：什么能力在升值，什么样的人更值得你提前布局。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先重估能力价值，不要沿用旧时代的人才标准",
                "body": "具体技能的价值变化越来越快，真正长期升值的，是判断、创造和关系能力。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "招聘时看潜力结构，不只看履历标签",
                "body": "学习敏捷度、AI 协作能力、系统思维、适应力和沟通协作，更能决定一个人在 AI 时代能不能持续成长。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "组织升级的关键，不是多招人，而是重写岗位与能力设计",
                "body": "一人加 AI 的产出边界正在改变，管理者要更早调整岗位定义、面试方式和用人判断。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 1/14", "建议下一节：团队激励：钱不是万能的", '也可以先整理这一节'], nextHref: "./lesson-leadership-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-01", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson1", audioSource: './assets/audio/leadership-ep48-hiring-ai-era.mp3?v=20260412-leadership-01a', vttSrc: './assets/subtitles/leadership-ep48-hiring-ai-era.vtt?v=20260412-leadership-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep48-hiring-ai-era/slide_01.svg",
            "label": "招人的艺术：AI 时代需要什么样的人才",
            "caption": "这一节会帮助你系统理解：招人的艺术：AI 时代需要什么样的人才"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_02.svg",
            "label": "先从组织现实开始",
            "caption": "大家好，我是 Lincoln。 欢迎来到 Minds Leap商学院。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_03.svg",
            "label": "AI 时代三种更不可替代的能力",
            "caption": "真正升值的，不再只是会做事的人，而是能判断、能创造、能建立关系的人。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_04.svg",
            "label": "五维人才画像",
            "caption": "招聘时要看的，不只是技能清单，而是这个人能不能在变化里持续成长。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_05.svg",
            "label": "AI 在招聘中的四大应用",
            "caption": "AI 最适合做放大器，帮你提效、补盲区，但最后的判断仍然要回到你。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_06.svg",
            "label": "核心原则：招少但精，一人多能",
            "caption": "真正的招聘升级，不是把组织做大，而是把关键能力做强。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_08.svg",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        },
        {
            "file": "leadership-ep48-hiring-ai-era/slide_07.svg",
            "label": "回到你的团队，今天最该带走什么",
            "caption": "这节课最重要的，不是听懂概念，而是开始重写你的人才判断标准。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.1,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.4,
            "end": 3.22,
            "text": "欢迎来到 Minds Leap商学院。"
        },
        {
            "start": 3.22,
            "end": 6.26,
            "text": "今天我们正式进入模块四，AI时代领导力。"
        },
        {
            "start": 6.26,
            "end": 8.76,
            "text": "前面我们学了战略、财务、营销。"
        },
        {
            "start": 8.76,
            "end": 10.72,
            "text": "那些更多是在回答一件事，"
        },
        {
            "start": 10.72,
            "end": 13.04,
            "text": "就是企业要做什么、怎么做、怎么增长。"
        },
        {
            "start": 13.04,
            "end": 16.16,
            "text": "但从这一节开始，我们要回到另外一个更现实的问题。"
        },
        {
            "start": 16.16,
            "end": 18.56,
            "text": "这些事情，到底要靠谁来做？"
        },
        {
            "start": 18.56,
            "end": 20.9,
            "text": "所以这一节，我们先从招人开始。"
        },
        {
            "start": 20.9,
            "end": 23.06,
            "text": "因为在 AI 时代，很多管理问题、"
        },
        {
            "start": 23.36,
            "end": 25.34,
            "text": "组织问题，最后都会先落到一个地方，"
        },
        {
            "start": 25.34,
            "end": 27.12,
            "text": "就是你到底招什么样的人。"
        },
        {
            "start": 27.12,
            "end": 29.0,
            "text": "如果人才标准没更新，"
        },
        {
            "start": 29.36,
            "end": 31.38,
            "text": "后面你讲组织升级、绩效优化、"
        },
        {
            "start": 31.48,
            "end": 33.56,
            "text": "人机协作，都会变成空话。"
        },
        {
            "start": 33.56,
            "end": 35.2,
            "text": "先说一个最核心的变化。"
        },
        {
            "start": 35.2,
            "end": 38.06,
            "text": "AI 时代，不是所有能力都在一起升值。"
        },
        {
            "start": 38.06,
            "end": 40.28,
            "text": "有些能力，正在快速贬值。"
        },
        {
            "start": 40.28,
            "end": 42.3,
            "text": "有些能力，反而越来越贵。"
        },
        {
            "start": 42.3,
            "end": 46.16,
            "text": "过去我们招人，常常会看学历、经验、履历、专业技能。"
        },
        {
            "start": 46.16,
            "end": 47.42,
            "text": "你做过几年。"
        },
        {
            "start": 47.42,
            "end": 48.66,
            "text": "你在哪家公司待过。"
        },
        {
            "start": 48.66,
            "end": 50.2,
            "text": "你会不会某个工具。"
        },
        {
            "start": 50.2,
            "end": 52.34,
            "text": "你有没有这个岗位的对口背景。"
        },
        {
            "start": 52.34,
            "end": 54.14,
            "text": "这些当然不是完全不重要。"
        },
        {
            "start": 54.14,
            "end": 58.6,
            "text": "但如果今天你还主要用这套标准看人，那很可能会看走眼。"
        },
        {
            "start": 58.6,
            "end": 63.06,
            "text": "因为 AI 正在把很多原来稀缺的专业技能，快速拉平。"
        },
        {
            "start": 63.06,
            "end": 65.94,
            "text": "以前你可能需要一个写了很多年文案的人，"
        },
        {
            "start": 66.12,
            "end": 67.56,
            "text": "才能写出还不错的内容。"
        },
        {
            "start": 68.16,
            "end": 70.32,
            "text": "今天，一个理解业务、会提问、"
        },
        {
            "start": 70.32,
            "end": 72.32,
            "text": "会判断的人，配合 AI，"
        },
        {
            "start": 72.32,
            "end": 74.28,
            "text": "也能很快做出接近的结果。"
        },
        {
            "start": 74.28,
            "end": 77.66,
            "text": "以前你可能觉得数据分析一定要交给特别资深的人。"
        },
        {
            "start": 77.66,
            "end": 80.08,
            "text": "现在，一个真正懂业务的人，"
        },
        {
            "start": 80.3,
            "end": 81.62,
            "text": "只要会和 AI 协作，"
        },
        {
            "start": 81.62,
            "end": 83.76,
            "text": "也能做出相当不错的分析初稿。"
        },
        {
            "start": 83.76,
            "end": 85.08,
            "text": "所以问题就来了。"
        },
        {
            "start": 85.08,
            "end": 87.88,
            "text": "如果很多具体技能都会被 AI 放大，"
        },
        {
            "start": 88.22,
            "end": 89.04,
            "text": "甚至部分替代，"
        },
        {
            "start": 89.04,
            "end": 90.74,
            "text": "那什么能力会变得更重要？"
        },
        {
            "start": 90.74,
            "end": 94.72,
            "text": "我建议你先记住三种，在 AI 时代更不可替代的能力。"
        },
        {
            "start": 94.72,
            "end": 96.14,
            "text": "第一种，判断力。"
        },
        {
            "start": 96.14,
            "end": 99.46,
            "text": "AI 可以给你很多选项，很多答案，很多可能性。"
        },
        {
            "start": 99.46,
            "end": 101.72,
            "text": "但最后到底选哪个，不选哪个，"
        },
        {
            "start": 101.76,
            "end": 103.2,
            "text": "先做哪个，后做哪个，"
        },
        {
            "start": 103.2,
            "end": 104.54,
            "text": "这件事还是人的工作。"
        },
        {
            "start": 105.18,
            "end": 105.96,
            "text": "判断力来自什么？"
        },
        {
            "start": 105.96,
            "end": 108.32,
            "text": "来自经验，来自你对业务的理解，"
        },
        {
            "start": 108.32,
            "end": 110.53999999999999,
            "text": "来自你对风险和机会的取舍。"
        },
        {
            "start": 110.54,
            "end": 111.92,
            "text": "第二种，创造力。"
        },
        {
            "start": 111.92,
            "end": 116.62,
            "text": "AI 很擅长在既有信息里做重组、改写、扩写、组合。"
        },
        {
            "start": 116.62,
            "end": 119.22,
            "text": "但真正提出新的方向、新的问题、"
        },
        {
            "start": 119.22,
            "end": 121.78,
            "text": "新的连接方式，目前还是更依赖人。"
        },
        {
            "start": 121.98,
            "end": 123.14,
            "text": "第三种，关系力。"
        },
        {
            "start": 123.14,
            "end": 125.76,
            "text": "你要带团队，要建立信任，要协调冲突，"
        },
        {
            "start": 125.76,
            "end": 127.74,
            "text": "要和客户形成深层关系。"
        },
        {
            "start": 127.74,
            "end": 130.94,
            "text": "这些事情，不会因为 AI 更强就自动消失。"
        },
        {
            "start": 131.38,
            "end": 133.3,
            "text": "恰恰相反，越是进入 AI 时代，"
        },
        {
            "start": 133.56,
            "end": 135.62,
            "text": "真正的人际能力越会变得更重要。"
        },
        {
            "start": 135.62,
            "end": 137.98,
            "text": "好，基于这个变化，我们再往下走一步。"
        },
        {
            "start": 137.98,
            "end": 141.62,
            "text": "如果今天重新画一张人才画像，你最该看什么？"
        },
        {
            "start": 141.62,
            "end": 143.32,
            "text": "我建议你重点看五个维度。"
        },
        {
            "start": 143.72,
            "end": 144.9,
            "text": "第一，学习敏捷度。"
        },
        {
            "start": 144.9,
            "end": 146.78,
            "text": "这可能是今天最重要的一项。"
        },
        {
            "start": 146.78,
            "end": 150.28,
            "text": "不是他现在会什么，而是他多快能学会新东西。"
        },
        {
            "start": 150.28,
            "end": 154.32,
            "text": "因为 AI 工具在变，工作方法在变，岗位边界也在变。"
        },
        {
            "start": 154.32,
            "end": 157.72,
            "text": "一个人如果只能在旧经验里工作，那他会越来越吃力。"
        },
        {
            "start": 157.72,
            "end": 161.42,
            "text": "但如果他有很强的学习敏捷度，他就能不断更新自己。"
        },
        {
            "start": 161.42,
            "end": 163.02,
            "text": "第二，AI 协作能力。"
        },
        {
            "start": 163.02,
            "end": 165.94,
            "text": "这里不是说你非得招一个会写代码的人。"
        },
        {
            "start": 165.94,
            "end": 166.88,
            "text": "而是你要看，"
        },
        {
            "start": 166.88,
            "end": 169.08,
            "text": "这个人能不能把一个模糊问题拆开，"
        },
        {
            "start": 169.32,
            "end": 172.08,
            "text": "交给 AI，拿到结果以后再做判断和修正。"
        },
        {
            "start": 172.54,
            "end": 173.38,
            "text": "说得更直接一点。"
        },
        {
            "start": 173.38,
            "end": 176.98,
            "text": "他会不会把 AI 当成工作搭档，而不是只是一个聊天工具。"
        },
        {
            "start": 176.98,
            "end": 178.6,
            "text": "第三，系统思维。"
        },
        {
            "start": 178.68,
            "end": 181.24,
            "text": "未来很多执行动作都会更自动化。"
        },
        {
            "start": 181.24,
            "end": 182.72,
            "text": "那人的价值就更体现在，"
        },
        {
            "start": 182.72,
            "end": 184.22,
            "text": "看不看得见全局，"
        },
        {
            "start": 184.22,
            "end": 187.0,
            "text": "能不能理解局部动作会怎样影响整体。"
        },
        {
            "start": 187.0,
            "end": 189.04,
            "text": "第四，适应力。"
        },
        {
            "start": 189.04,
            "end": 190.06,
            "text": "变化会越来越快。"
        },
        {
            "start": 190.06,
            "end": 193.72,
            "text": "组织会调整，角色会变化，很多流程会被重写。"
        },
        {
            "start": 193.72,
            "end": 197.78,
            "text": "一个人如果对变化极度抗拒，他在 AI 时代会很痛苦。"
        },
        {
            "start": 197.78,
            "end": 200.02,
            "text": "第五，人际沟通与协作。"
        },
        {
            "start": 200.39999999999998,
            "end": 202.92,
            "text": "工具可以提效，但团队真正跑起来，"
        },
        {
            "start": 202.92,
            "end": 205.58,
            "text": "还是靠人和人之间的信息流动、"
        },
        {
            "start": 205.58,
            "end": 208.9,
            "text": "信任建立、分歧协调和共识形成。"
        },
        {
            "start": 208.9,
            "end": 212.34,
            "text": "所以，未来的好人才，不是单一技能最强的人。"
        },
        {
            "start": 212.34,
            "end": 215.06,
            "text": "而是能快速学习、会和 AI 协作、"
        },
        {
            "start": 215.24,
            "end": 217.42,
            "text": "看得到全局、扛得住变化、"
        },
        {
            "start": 217.42,
            "end": 219.24,
            "text": "又能和别人一起工作的人。"
        },
        {
            "start": 219.24,
            "end": 222.86,
            "text": "讲到这里，你就会明白，为什么很多企业招人越来越难。"
        },
        {
            "start": 222.86,
            "end": 224.8,
            "text": "不是市场上完全没人。"
        },
        {
            "start": 224.8,
            "end": 227.64,
            "text": "而是你还在用旧标准找新世界里的人。"
        },
        {
            "start": 227.64,
            "end": 230.24,
            "text": "这时候，AI 在招聘里能不能帮上忙？"
        },
        {
            "start": 230.24,
            "end": 231.34,
            "text": "当然能。"
        },
        {
            "start": 231.34,
            "end": 233.58,
            "text": "而且它能帮的不只是一点点效率提升。"
        },
        {
            "start": 233.58,
            "end": 235.58,
            "text": "我会建议你重点看四个用法。"
        },
        {
            "start": 235.58,
            "end": 237.26,
            "text": "第一，简历筛选。"
        },
        {
            "start": 237.26,
            "end": 239.88,
            "text": "不是只看关键词有没有匹配，"
        },
        {
            "start": 239.88,
            "end": 242.6,
            "text": "而是更快看出这个人的职业轨迹、"
        },
        {
            "start": 242.9,
            "end": 244.3,
            "text": "技能组合、成长趋势，"
        },
        {
            "start": 244.3,
            "end": 246.48,
            "text": "到底有没有你要的潜力结构。"
        },
        {
            "start": 246.48,
            "end": 248.04,
            "text": "第二，面试问题设计。"
        },
        {
            "start": 248.04,
            "end": 252.32,
            "text": "AI 可以帮你根据岗位目标，生成更有针对性的行为问题。"
        },
        {
            "start": 252.32,
            "end": 254.46,
            "text": "比如，不只是问他做过什么，"
        },
        {
            "start": 254.46,
            "end": 256.86,
            "text": "而是问他怎么学、怎么适应变化、"
        },
        {
            "start": 256.86,
            "end": 258.42,
            "text": "怎么跟新工具协作。"
        },
        {
            "start": 258.42,
            "end": 260.38,
            "text": "第三，评估辅助。"
        },
        {
            "start": 260.38,
            "end": 263.08,
            "text": "很多面试判断很容易被主观印象带偏。"
        },
        {
            "start": 263.08,
            "end": 267.28,
            "text": "AI 至少可以帮你把评价标准拉齐，减少一些明显的偏差。"
        },
        {
            "start": 267.28,
            "end": 269.18,
            "text": "第四，人才市场洞察。"
        },
        {
            "start": 269.18,
            "end": 271.64,
            "text": "你可以更快看到市场上的薪资水平、"
        },
        {
            "start": 271.64,
            "end": 274.48,
            "text": "供需变化、竞品最近在招什么样的人。"
        },
        {
            "start": 274.48,
            "end": 278.4,
            "text": "这样你不是在凭感觉招人，而是在带着市场上下文做判断。"
        },
        {
            "start": 278.4,
            "end": 280.2,
            "text": "不过这里我也想提醒一句。"
        },
        {
            "start": 280.58,
            "end": 282.72,
            "text": "AI 可以帮你提效，可以帮你补盲区。"
        },
        {
            "start": 282.72,
            "end": 285.98,
            "text": "但它不能替你决定，到底什么人适合你的企业。"
        },
        {
            "start": 285.98,
            "end": 288.22,
            "text": "因为招聘从来不只是能力匹配。"
        },
        {
            "start": 288.22,
            "end": 290.62,
            "text": "它还包括文化适配、阶段匹配、"
        },
        {
            "start": 290.88,
            "end": 292.76,
            "text": "创始人风格匹配、团队化学反应。"
        },
        {
            "start": 292.76,
            "end": 295.42,
            "text": "这些最后都还是要回到你的管理判断。"
        },
        {
            "start": 295.42,
            "end": 299.16,
            "text": "最后，我们再聊一个更现实、也更容易被忽略的原则。"
        },
        {
            "start": 299.16,
            "end": 301.54,
            "text": "招少但精，一人多能。"
        },
        {
            "start": 301.54,
            "end": 304.62,
            "text": "过去很多岗位的逻辑，是一个人做一类事。"
        },
        {
            "start": 304.62,
            "end": 307.08,
            "text": "但现在越来越多岗位会被重新定义。"
        },
        {
            "start": 307.40000000000003,
            "end": 308.86,
            "text": "不是岗位消失了。"
        },
        {
            "start": 308.86,
            "end": 311.3,
            "text": "而是岗位里那些低杠杆、重复性的部分，"
        },
        {
            "start": 311.3,
            "end": 313.22,
            "text": "会越来越多被 AI 接走。"
        },
        {
            "start": 313.22,
            "end": 317.3,
            "text": "这样一来，一个真正会用 AI 的人，产出边界会明显扩大。"
        },
        {
            "start": 317.3,
            "end": 320.26,
            "text": "所以你未来招人，不能只想着把编制补满。"
        },
        {
            "start": 320.26,
            "end": 324.5,
            "text": "而是要想清楚，未来三年你最需要的关键能力到底是什么。"
        },
        {
            "start": 324.5,
            "end": 326.96,
            "text": "有时候，与其低薪招三个人，"
        },
        {
            "start": 326.96,
            "end": 329.6,
            "text": "不如高薪招一个真正能把 AI 用起来、"
        },
        {
            "start": 329.6,
            "end": 331.38,
            "text": "还能带动别人一起升级的人。"
        },
        {
            "start": 331.38,
            "end": 333.64,
            "text": "这背后其实不是招人成本问题。"
        },
        {
            "start": 333.64,
            "end": 335.36,
            "text": "而是组织设计问题。"
        },
        {
            "start": 335.36,
            "end": 337.94,
            "text": "你到底是在用过去的岗位定义搭团队，"
        },
        {
            "start": 337.94,
            "end": 340.38,
            "text": "还是在用未来的能力需求搭团队。"
        },
        {
            "start": 340.38,
            "end": 341.46,
            "text": "好，我们来收一下。"
        },
        {
            "start": 341.46,
            "end": 343.98,
            "text": "这节课最重要的，不是记住几个概念。"
        },
        {
            "start": 343.98,
            "end": 347.58,
            "text": "而是把你的人才判断标准，真正更新到 AI 时代。"
        },
        {
            "start": 347.58,
            "end": 349.78,
            "text": "请你先记住今天的三层框架。"
        },
        {
            "start": 349.78,
            "end": 354.64,
            "text": "第一，真正升值的三种能力，是判断力、创造力、关系力。"
        },
        {
            "start": 354.64,
            "end": 356.8399999999999,
            "text": "第二，看人不能只看当前技能，"
        },
        {
            "start": 356.84,
            "end": 359.06,
            "text": "还要看学习敏捷度、AI 协作能力、"
        },
        {
            "start": 359.06,
            "end": 361.28,
            "text": "系统思维、适应力和协作能力。"
        },
        {
            "start": 361.28,
            "end": 365.08,
            "text": "第三，招聘策略要从补人头，转向招少但精、一人多能。"
        },
        {
            "start": 365.46,
            "end": 368.82,
            "text": "如果你愿意，今天听完以后，就可以先做一件很实际的事。"
        },
        {
            "start": 368.82,
            "end": 371.02,
            "text": "把你现在最关键的一个岗位拿出来，"
        },
        {
            "start": 371.02,
            "end": 372.48,
            "text": "重新写一遍岗位说明，"
        },
        {
            "start": 372.48,
            "end": 374.12,
            "text": "重新想一遍面试问题。"
        },
        {
            "start": 374.12,
            "end": 377.8,
            "text": "你会很快发现，你看人的方式，已经开始变了。"
        },
        {
            "start": 377.8,
            "end": 378.28,
            "text": "我是 Lincoln。"
        },
        {
            "start": 378.28,
            "end": 380.38,
            "text": "我们下一节，继续聊团队激励。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 18.56,
        "index": 0
    },
    {
        "start": 18.56,
        "end": 90.74,
        "index": 1
    },
    {
        "start": 90.74,
        "end": 141.62,
        "index": 2
    },
    {
        "start": 141.62,
        "end": 233.58,
        "index": 3
    },
    {
        "start": 233.58,
        "end": 295.42,
        "index": 4
    },
    {
        "start": 295.42,
        "end": 347.58,
        "index": 5
    },
    {
        "start": 347.58,
        "end": 365.46,
        "index": 6
    },
    {
        "start": 365.46,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "重新理解 AI 时代的人才标准：什么能力在升值，什么样的人更值得你提前布局。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-02.html?entry={entry}", secondaryHref: "./lesson-leadership-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-01", coachSource: "./ai-coach.html?source=lesson-leadership-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于招人的艺术：AI 时代需要什么样的人才的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "招人的艺术：AI 时代需要什么样的人才", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
