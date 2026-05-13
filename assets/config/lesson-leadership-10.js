(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第10课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第10课：远程协作：团队不在一起怎么高效工作",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep57-remote-work/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：远程协作：团队不在一起怎么高效工作", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-11.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "招人的艺术：AI 时代需要什么样的人才",
                "body": "重新理解 AI 时代的人才标准：什么能力在升值，什么样的人更值得你提前布局。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "团队激励：钱不是万能的",
                "body": "看清楚团队真正被什么驱动，再把激励从单一的奖金机制升级成更完整的系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "绩效与 OKR：目标怎么真正落地",
                "body": "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "领导力模型：领导者到底在做什么",
                "body": "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "管理数字员工：人和 AI 一起工作以后怎么管",
                "body": "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "人与 AI 协作：团队分工怎么重做",
                "body": "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 变革管理：组织怎么更轻快地改变",
                "body": "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "敏捷组织：组织怎么更灵活",
                "body": "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "企业文化：看不见的组织操作系统",
                "body": "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "远程协作：团队不在一起怎么高效工作",
                "body": "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "AI 辅助决策：领导者该怎么用 AI 想问题",
                "body": "把 AI 真正变成决策辅助者，而不是新的噪音来源。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-11.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先重写协作系统，不只是多装几个远程工具",
                "body": "远程办公真正的难点在于上下文、节奏和连接感，AI 的价值是把这些关键环节重新接起来。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "会议、知识、异步、项目和连接，是最值得优先重做的五个场景",
                "body": "这些场景一旦被重新设计，远程团队的效率和稳定性都会明显提升。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "远程管理的核心，不是看住人，而是设计结果与节奏",
                "body": "结果导向、过度沟通、异步优先和保持仪式感，才是远程团队更长期有效的管理原则。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 10/14", "建议下一节：AI 辅助决策：领导者该怎么用 AI 想问题", '也可以先整理这一节'], nextHref: "./lesson-leadership-11.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-10", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson10", audioSource: './assets/audio/leadership-ep57-remote-work.mp3?v=20260412-leadership-10a', vttSrc: './assets/subtitles/leadership-ep57-remote-work.vtt?v=20260412-leadership-10a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep57-remote-work/slide_01.png",
            "label": "远程协作：团队不在一起怎么高效工作",
            "caption": "这一节会帮助你系统理解：远程协作：团队不在一起怎么高效工作"
        },
        {
            "file": "leadership-ep57-remote-work/slide_02.png",
            "label": "先看远程协作真正难在哪里",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_03.png",
            "label": "AI 会议助手",
            "caption": "远程会议最容易丢的是会后执行，AI 会议助手最先补上的，正是这块断层。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_04.png",
            "label": "AI 知识管理与异步协作",
            "caption": "远程协作真正的效率提升，往往先来自知识和上下文被重新组织。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_05.png",
            "label": "AI 项目管理",
            "caption": "远程项目管理最难的是“看不见全局”，AI 最擅长补的正是这一层感知。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_06.png",
            "label": "AI 增强团队连接",
            "caption": "团队连接不是附属品，它是远程团队能不能长期稳定协作的底层条件。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_07.png",
            "label": "四个远程管理原则",
            "caption": "远程办公不是天然低效，而是需要一套更适合它的协作与管理系统。"
        },
        {
            "file": "leadership-ep57-remote-work/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.06,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.3,
            "end": 2.68,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.68,
            "end": 4.82,
            "text": "今天这一节，我们来聊远程协作。"
        },
        {
            "start": 4.82,
            "end": 9.04,
            "text": "很多团队在疫情之后已经习惯了远程办公或者混合办公。"
        },
        {
            "start": 9.04,
            "end": 11.4,
            "text": "但真正的问题不是能不能远程。"
        },
        {
            "start": 11.4,
            "end": 15.38,
            "text": "而是团队不在一个办公室里的时候，怎么还能高效协作。"
        },
        {
            "start": 15.38,
            "end": 17.92,
            "text": "远程办公最大的挑战，通常不是技术。"
        },
        {
            "start": 17.92,
            "end": 22.1,
            "text": "真正难的，是沟通效率、协作节奏和团队连接感。"
        },
        {
            "start": 22.5,
            "end": 24.9,
            "text": "大家不在一起以后，信息传递会变慢，"
        },
        {
            "start": 24.9,
            "end": 26.3,
            "text": "即时沟通会减少，"
        },
        {
            "start": 26.3,
            "end": 28.92,
            "text": "很多原来靠顺手说一句就能解决的事情，"
        },
        {
            "start": 28.92,
            "end": 30.36,
            "text": "现在都要重新设计。"
        },
        {
            "start": 30.36,
            "end": 32.46,
            "text": "这也是为什么很多管理者会觉得，"
        },
        {
            "start": 32.46,
            "end": 35.0,
            "text": "远程不是不能做，而是心里不踏实。"
        },
        {
            "start": 35.0,
            "end": 37.72,
            "text": "但 AI 正在让这件事变得越来越可行。"
        },
        {
            "start": 37.72,
            "end": 40.58,
            "text": "它不是简单地把远程办公工具再做一遍。"
        },
        {
            "start": 40.58,
            "end": 43.86,
            "text": "而是在帮助团队把很多原来分散、低效、"
        },
        {
            "start": 43.86,
            "end": 47.1,
            "text": "靠人力补洞的协作环节重新连接起来。"
        },
        {
            "start": 47.1,
            "end": 49.7,
            "text": "今天我想把它收成五个最重要的应用场景。"
        },
        {
            "start": 49.7,
            "end": 51.86,
            "text": "第一个，是 AI 会议助手。"
        },
        {
            "start": 51.86,
            "end": 54.68,
            "text": "远程团队会更多，会后遗失也更多。"
        },
        {
            "start": 54.68,
            "end": 57.38,
            "text": "大家开完会以后，经常忘记关键结论、"
        },
        {
            "start": 57.38,
            "end": 58.96,
            "text": "待办事项和责任分配。"
        },
        {
            "start": 58.96,
            "end": 62.62,
            "text": "AI 会议助手最大的价值，就是把这些事情自动补上。"
        },
        {
            "start": 62.62,
            "end": 65.50000000000001,
            "text": "它可以做转录、纪要、重点提炼、"
        },
        {
            "start": 65.50000000000001,
            "end": 66.38,
            "text": "待办提取，"
        },
        {
            "start": 66.38,
            "end": 69.84,
            "text": "甚至持续追踪上一次会议里说过的事项有没有推进。"
        },
        {
            "start": 69.84,
            "end": 73.42,
            "text": "这意味着，人在会议里可以更专注讨论，"
        },
        {
            "start": 73.42,
            "end": 75.5,
            "text": "而不是一边听一边忙着记笔记。"
        },
        {
            "start": 75.5,
            "end": 77.58,
            "text": "第二个，是 AI 知识管理。"
        },
        {
            "start": 77.58,
            "end": 80.76,
            "text": "远程团队特别容易出现信息碎片化。"
        },
        {
            "start": 80.76,
            "end": 83.94,
            "text": "资料可能散落在文档、聊天记录、邮件、"
        },
        {
            "start": 83.94,
            "end": 85.70000000000002,
            "text": "共享盘和会议录像里。"
        },
        {
            "start": 85.70000000000002,
            "end": 89.62,
            "text": "新人进来以后，经常花很多时间都找不到真正需要的内容。"
        },
        {
            "start": 90.22,
            "end": 93.14,
            "text": "AI 可以把这些分散信息重新组织起来，"
        },
        {
            "start": 93.14,
            "end": 95.28,
            "text": "变成一个随问随答的知识系统。"
        },
        {
            "start": 95.28,
            "end": 98.1,
            "text": "过去你可能要问同事、翻文件、找流程。"
        },
        {
            "start": 98.1,
            "end": 100.88,
            "text": "现在很多标准信息都可以先问 AI。"
        },
        {
            "start": 100.88,
            "end": 103.2,
            "text": "第三个，是 AI 异步协作。"
        },
        {
            "start": 103.2,
            "end": 107.54,
            "text": "远程团队经常跨时区，或者至少不在同一个工作节奏里。"
        },
        {
            "start": 107.54,
            "end": 111.8,
            "text": "如果所有事情都等对方在线再推进，效率会非常低。"
        },
        {
            "start": 111.8,
            "end": 114.58,
            "text": "AI 可以帮助团队把异步协作做得更顺。"
        },
        {
            "start": 114.58,
            "end": 117.74,
            "text": "比如方案先由 AI 做摘要、列关键问题，"
        },
        {
            "start": 117.74,
            "end": 119.84,
            "text": "让同事在自己的时间审阅。"
        },
        {
            "start": 119.84,
            "end": 122.08,
            "text": "比如反馈由 AI 先做汇总，"
        },
        {
            "start": 122.34,
            "end": 124.9,
            "text": "让下一个人接手时不是面对一堆零散信息，"
        },
        {
            "start": 125.1,
            "end": 126.28,
            "text": "而是看到结构化结果。"
        },
        {
            "start": 126.28,
            "end": 130.34,
            "text": "这样很多工作不需要等所有人同时在线，也能往前走。"
        },
        {
            "start": 130.34,
            "end": 131.98,
            "text": "第四个，是 AI 项目管理。"
        },
        {
            "start": 131.98,
            "end": 135.2,
            "text": "远程团队最容易失去的，是对整体进度的感知。"
        },
        {
            "start": 135.2,
            "end": 137.76,
            "text": "谁在做什么，卡在哪里，有没有风险，"
        },
        {
            "start": 137.76,
            "end": 139.94,
            "text": "这些如果靠项目经理一个个去问，"
        },
        {
            "start": 139.94,
            "end": 141.12,
            "text": "会非常耗时。"
        },
        {
            "start": 141.12,
            "end": 143.76,
            "text": "AI 在这里最适合做全局视角的助手。"
        },
        {
            "start": 143.76,
            "end": 146.08999999999997,
            "text": "它能自动汇总任务、识别异常、"
        },
        {
            "start": 146.08999999999997,
            "end": 147.14,
            "text": "提示依赖风险，"
        },
        {
            "start": 147.14,
            "end": 150.22,
            "text": "也能把分散更新整理成更清楚的状态报告。"
        },
        {
            "start": 150.22,
            "end": 152.82,
            "text": "第五个，是 AI 增强团队连接。"
        },
        {
            "start": 152.82,
            "end": 155.5,
            "text": "远程办公最容易流失的，不只是效率。"
        },
        {
            "start": 155.5,
            "end": 158.44,
            "text": "还有人和人之间那些原本自然发生的连接。"
        },
        {
            "start": 158.44,
            "end": 160.6,
            "text": "比如走过工位顺手聊一句，"
        },
        {
            "start": 160.6,
            "end": 162.48,
            "text": "比如吃饭时交换一个想法，"
        },
        {
            "start": 162.48,
            "end": 165.22,
            "text": "比如茶水间里听到别的团队最近在忙什么。"
        },
        {
            "start": 165.22,
            "end": 168.5,
            "text": "这些非正式连接，其实对团队凝聚力非常重要。"
        },
        {
            "start": 168.88000000000002,
            "end": 172.06,
            "text": "AI 可以帮助团队重新设计一些新的连接方式。"
        },
        {
            "start": 172.06,
            "end": 174.36,
            "text": "比如随机配对的线上咖啡聊天，"
        },
        {
            "start": 174.36,
            "end": 176.08,
            "text": "比如匿名情绪反馈，"
        },
        {
            "start": 176.08,
            "end": 178.74,
            "text": "比如跨团队的轻量破冰问题和对话引导。"
        },
        {
            "start": 178.74,
            "end": 181.46,
            "text": "讲到这里，我们再看四个远程管理原则。"
        },
        {
            "start": 181.46,
            "end": 184.26,
            "text": "第一，结果导向，而不是时间导向。"
        },
        {
            "start": 184.26,
            "end": 186.78,
            "text": "远程办公最忌讳的一种做法，"
        },
        {
            "start": 186.78,
            "end": 189.45999999999998,
            "text": "就是把注意力放在“有没有在线”“有没"
        },
        {
            "start": 189.45999999999998,
            "end": 191.7,
            "text": "有一直盯着电脑”这种表面动作上。"
        },
        {
            "start": 191.7,
            "end": 194.0,
            "text": "真正该看的，是任务有没有完成，"
        },
        {
            "start": 194.0,
            "end": 196.28,
            "text": "质量有没有达标，结果有没有产出。"
        },
        {
            "start": 196.28,
            "end": 199.22,
            "text": "第二，过度沟通，好过沟通不足。"
        },
        {
            "start": 199.22,
            "end": 201.92,
            "text": "远程环境下，默认状态常常是不知道。"
        },
        {
            "start": 201.92,
            "end": 204.52,
            "text": "如果你不主动讲，别人就不知道进度，"
        },
        {
            "start": 204.52,
            "end": 206.36,
            "text": "不知道背景，也不知道你的判断。"
        },
        {
            "start": 206.36,
            "end": 208.8,
            "text": "所以远程团队往往需要更主动、"
        },
        {
            "start": 208.8,
            "end": 211.08,
            "text": "更频繁地同步状态和上下文。"
        },
        {
            "start": 211.08,
            "end": 213.3,
            "text": "第三，异步优先，同步补充。"
        },
        {
            "start": 213.3,
            "end": 215.4,
            "text": "不是所有事情都值得开会。"
        },
        {
            "start": 215.4,
            "end": 218.98,
            "text": "能靠文档和消息解决的，就不要占用大家同步时间。"
        },
        {
            "start": 218.98,
            "end": 222.78,
            "text": "把真正需要讨论、判断和共创的事情，留给同步沟通。"
        },
        {
            "start": 222.78,
            "end": 224.74,
            "text": "第四，仪式感不能丢。"
        },
        {
            "start": 224.74,
            "end": 226.94,
            "text": "远程团队更需要刻意设计"
        },
        {
            "start": 226.94,
            "end": 229.66,
            "text": "那些能把人重新连在一起的固定动作。"
        },
        {
            "start": 229.9,
            "end": 233.68,
            "text": "比如全员会、分享会、团队活动，甚至周期性的线下见面。"
        },
        {
            "start": 233.68,
            "end": 235.82,
            "text": "这些看上去不像效率工具，"
        },
        {
            "start": 235.82,
            "end": 238.52,
            "text": "但它们决定了团队是不是还像一个团队。"
        },
        {
            "start": 238.52,
            "end": 239.42,
            "text": "好，我们来收一下。"
        },
        {
            "start": 239.42,
            "end": 242.26,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 242.26,
            "end": 244.42,
            "text": "第一，远程协作真正难的，"
        },
        {
            "start": 244.42,
            "end": 247.66,
            "text": "不是工具够不够多，而是沟通、知识、协作、"
        },
        {
            "start": 247.66,
            "end": 250.26,
            "text": "项目感知和团队连接要被重新设计。"
        },
        {
            "start": 250.26,
            "end": 253.06,
            "text": "第二，AI 最有价值的五个应用场景，"
        },
        {
            "start": 253.06,
            "end": 255.68,
            "text": "是会议助手、知识管理、异步协作、"
        },
        {
            "start": 255.68,
            "end": 257.42,
            "text": "项目管理和团队连接。"
        },
        {
            "start": 257.42,
            "end": 259.2,
            "text": "第三，真正稳的远程管理，"
        },
        {
            "start": 259.2,
            "end": 261.58,
            "text": "要同时守住结果导向、过度沟通、"
        },
        {
            "start": 261.58,
            "end": 263.88,
            "text": "异步优先和仪式感这四条原则。"
        },
        {
            "start": 263.88,
            "end": 267.26,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 267.26,
            "end": 269.68,
            "text": "看看你团队现在最容易失去效率的，"
        },
        {
            "start": 269.68,
            "end": 272.5,
            "text": "是会议、知识、异步协作、项目推进，"
        },
        {
            "start": 272.9,
            "end": 273.74,
            "text": "还是团队连接。"
        },
        {
            "start": 273.74,
            "end": 276.64,
            "text": "先挑一个点，用 AI 重新设计一次。"
        },
        {
            "start": 276.64,
            "end": 279.26,
            "text": "你会发现，远程办公不是天然低效，"
        },
        {
            "start": 279.26,
            "end": 281.8,
            "text": "而是需要一套更适合它的协作系统。"
        },
        {
            "start": 281.8,
            "end": 282.76,
            "text": "我是 Lincoln。"
        },
        {
            "start": 283.3,
            "end": 285.98,
            "text": "我们下一节，继续聊 AI 辅助决策，"
        },
        {
            "start": 285.98,
            "end": 288.8,
            "text": "看看领导者到底该怎么和 AI 一起想问题。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.68,
        "index": 0
    },
    {
        "start": 2.68,
        "end": 49.7,
        "index": 1
    },
    {
        "start": 49.7,
        "end": 75.5,
        "index": 2
    },
    {
        "start": 75.5,
        "end": 130.34,
        "index": 3
    },
    {
        "start": 130.34,
        "end": 150.22,
        "index": 4
    },
    {
        "start": 150.22,
        "end": 178.74,
        "index": 5
    },
    {
        "start": 178.74,
        "end": 239.42,
        "index": 6
    },
    {
        "start": 239.42,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-11.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-11.html?entry={entry}", secondaryHref: "./lesson-leadership-11.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-10", coachSource: "./ai-coach.html?source=lesson-leadership-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于远程协作：团队不在一起怎么高效工作的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "远程协作：团队不在一起怎么高效工作", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-11.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
