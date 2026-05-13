(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第4课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第4课：领导力模型：领导者到底在做什么",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep51-leadership-model/slide_01.svg", initialSlideCount: "1 / 8", title: "当前内容：领导力模型：领导者到底在做什么", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-05.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "管理数字员工：人和 AI 一起工作以后怎么管",
                "body": "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把领导力从“带团队”升级成“带人加机器”",
                "body": "AI 进入组织以后，领导者面对的不再只是人，而是更复杂的人、AI 与流程协同系统。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 越强，方向、判断和情绪管理越重要",
                "body": "执行性工作会被加速，但意义感、选择能力和稳定组织情绪，反而更依赖领导者。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "最有价值的新能力，是设计人机协作",
                "body": "清楚分工、设定边界、设计交接和控制风险，会成为 AI 时代领导者的重要基本功。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 4/14", "建议下一节：管理数字员工：人和 AI 一起工作以后怎么管", '也可以先整理这一节'], nextHref: "./lesson-leadership-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-04", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson4", audioSource: './assets/audio/leadership-ep51-leadership-model.mp3?v=20260412-leadership-04a', vttSrc: './assets/subtitles/leadership-ep51-leadership-model.vtt?v=20260412-leadership-04a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep51-leadership-model/slide_01.svg",
            "label": "领导力模型：领导者到底在做什么",
            "caption": "这一节会帮助你系统理解：领导力模型：领导者到底在做什么"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_02.svg",
            "label": "先重写领导力定义",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_03.svg",
            "label": "领导人的三个重点",
            "caption": "AI 越强，领导者越不能只做监工，而要把方向、判断和情绪稳定住。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_04.svg",
            "label": "领导 AI",
            "caption": "管理 AI 的关键，不是会不会用，而是会不会设边界、看质量、控风险。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_05.svg",
            "label": "领导人机协作",
            "caption": "领导力正在从“分配任务”升级成“设计人和 AI 怎么协作”。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_06.svg",
            "label": "四个常见陷阱",
            "caption": "真正危险的，不是 AI 本身，而是领导者用极端方式理解 AI。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_07.svg",
            "label": "领导者如何自我升级",
            "caption": "AI 时代最好的领导者，不是最懂技术的人，而是最会把技术与人组织起来的人。"
        },
        {
            "file": "leadership-ep51-leadership-model/slide_08.svg",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.04,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.32,
            "end": 2.7,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.7,
            "end": 5.96,
            "text": "今天这一节，我们来聊一个很核心的话题。"
        },
        {
            "start": 5.96,
            "end": 7.62,
            "text": "领导者到底在做什么？"
        },
        {
            "start": 7.66,
            "end": 10.02,
            "text": "这个问题，过去很多年大家都在讲。"
        },
        {
            "start": 10.02,
            "end": 13.3,
            "text": "但到了 AI 时代，这个问题必须重新回答一次。"
        },
        {
            "start": 13.3,
            "end": 15.62,
            "text": "因为现在你带的，不只是人。"
        },
        {
            "start": 15.62,
            "end": 18.64,
            "text": "你的团队里，开始出现越来越多 AI 工具、"
        },
        {
            "start": 18.64,
            "end": 20.06,
            "text": "AI 助手、AI 流程，"
        },
        {
            "start": 20.12,
            "end": 22.56,
            "text": "甚至未来还会有越来越多数字员工。"
        },
        {
            "start": 22.56,
            "end": 25.08,
            "text": "所以领导这件事，本身正在变化。"
        },
        {
            "start": 25.08,
            "end": 26.6,
            "text": "我想先给你一个结论。"
        },
        {
            "start": 26.6,
            "end": 29.24,
            "text": "AI 时代的领导力，不再只是领导人。"
        },
        {
            "start": 29.24,
            "end": 30.92,
            "text": "而是同时要做三件事。"
        },
        {
            "start": 30.92,
            "end": 31.56,
            "text": "领导人。"
        },
        {
            "start": 31.56,
            "end": 32.52,
            "text": "领导 AI。"
        },
        {
            "start": 32.52,
            "end": 34.38,
            "text": "以及领导人和 AI 的协作。"
        },
        {
            "start": 34.38,
            "end": 36.92,
            "text": "如果只会第一件事，不会后面两件事，"
        },
        {
            "start": 36.92,
            "end": 39.12,
            "text": "未来很多管理动作都会跟不上。"
        },
        {
            "start": 39.12,
            "end": 41.14,
            "text": "先说第一层，领导人。"
        },
        {
            "start": 41.14,
            "end": 42.76,
            "text": "这听起来像是最传统的部分。"
        },
        {
            "start": 42.76,
            "end": 45.08,
            "text": "但其实它的重点已经发生了变化。"
        },
        {
            "start": 45.08,
            "end": 47.96,
            "text": "过去很多管理者花大量时间在分配任务、"
        },
        {
            "start": 47.96,
            "end": 49.94,
            "text": "盯进度、查细节、纠动作。"
        },
        {
            "start": 49.94,
            "end": 52.64,
            "text": "因为那时候，大量执行工作只能靠人完成。"
        },
        {
            "start": 52.64,
            "end": 55.14,
            "text": "但现在很多重复性、标准化、"
        },
        {
            "start": 55.14,
            "end": 55.86,
            "text": "数据型的工作，"
        },
        {
            "start": 55.86,
            "end": 58.06,
            "text": "已经可以被 AI 接走一大部分。"
        },
        {
            "start": 58.06,
            "end": 61.7,
            "text": "那这时候，领导者最重要的价值就不再只是盯执行。"
        },
        {
            "start": 61.7,
            "end": 64.4,
            "text": "而会慢慢转向三个新的重心。"
        },
        {
            "start": 64.4,
            "end": 66.38,
            "text": "第一，设定方向和意义。"
        },
        {
            "start": 66.38,
            "end": 68.86,
            "text": "你要告诉团队，我们到底要去哪里，"
        },
        {
            "start": 68.86,
            "end": 71.46,
            "text": "为什么这件事重要，什么是优先级，"
        },
        {
            "start": 71.78,
            "end": 72.36,
            "text": "什么不是。"
        },
        {
            "start": 72.36,
            "end": 76.3,
            "text": "AI 能帮你分析，但它不会替你真正定义方向。"
        },
        {
            "start": 76.3,
            "end": 78.22,
            "text": "第二，培养判断力。"
        },
        {
            "start": 78.22,
            "end": 82.14,
            "text": "AI 给出的选项会越来越多，信息也会越来越丰富。"
        },
        {
            "start": 82.14,
            "end": 84.18,
            "text": "但一个团队真正值钱的，"
        },
        {
            "start": 84.18,
            "end": 85.22,
            "text": "不是拿到多少答案，"
        },
        {
            "start": 85.22,
            "end": 87.42,
            "text": "而是能不能判断哪个答案值得相信，"
        },
        {
            "start": 87.42,
            "end": 89.04,
            "text": "哪个动作值得先做。"
        },
        {
            "start": 89.04,
            "end": 90.9,
            "text": "第三，管理情感和动力。"
        },
        {
            "start": 90.9,
            "end": 93.20000000000002,
            "text": "AI 时代的组织里，会有更多焦虑、"
        },
        {
            "start": 93.20000000000002,
            "end": 95.0,
            "text": "不确定感和变化带来的压力。"
        },
        {
            "start": 95.0,
            "end": 97.42,
            "text": "领导者要做的不只是推进任务。"
        },
        {
            "start": 97.42,
            "end": 100.26,
            "text": "还要稳住节奏、稳住情绪、稳住信心。"
        },
        {
            "start": 100.26,
            "end": 104.14,
            "text": "所以你会发现，AI 越强，领导者越不能只做一个监工。"
        },
        {
            "start": 104.14,
            "end": 108.28,
            "text": "反而越要成为那个帮团队看方向、做选择、稳住状态的人。"
        },
        {
            "start": 108.28,
            "end": 109.68,
            "text": "第二层，领导 AI。"
        },
        {
            "start": 109.68,
            "end": 113.34,
            "text": "这是一项以前几乎不存在，但现在越来越重要的新能力。"
        },
        {
            "start": 113.34,
            "end": 114.46,
            "text": "什么叫领导 AI？"
        },
        {
            "start": 114.46,
            "end": 115.68,
            "text": "不是你去写模型。"
        },
        {
            "start": 115.68,
            "end": 117.56,
            "text": "也不是你要变成技术专家。"
        },
        {
            "start": 117.56,
            "end": 121.42,
            "text": "而是你要判断，哪些环节应该引入 AI，哪些不应该。"
        },
        {
            "start": 121.42,
            "end": 125.46,
            "text": "你要判断，用什么工具最合适，风险在哪里，边界在哪里。"
        },
        {
            "start": 125.46,
            "end": 129.5,
            "text": "你还要看，AI 给出来的内容、结论、建议，到底靠不靠谱。"
        },
        {
            "start": 129.5,
            "end": 133.7,
            "text": "所以从管理动作上看，领导 AI 至少包括四件事。"
        },
        {
            "start": 133.7,
            "end": 134.6,
            "text": "第一，做选择。"
        },
        {
            "start": 134.6,
            "end": 137.84,
            "text": "市场上工具很多，但不是每个都值得用。"
        },
        {
            "start": 137.84,
            "end": 140.26,
            "text": "你要判断，它是不是和你的业务匹配，"
        },
        {
            "start": 140.26,
            "end": 141.92,
            "text": "是不是和团队能力匹配，"
        },
        {
            "start": 141.92,
            "end": 142.9,
            "text": "是不是值得投入。"
        },
        {
            "start": 142.9,
            "end": 144.4,
            "text": "第二，设边界。"
        },
        {
            "start": 144.4,
            "end": 146.42,
            "text": "什么事情可以让 AI 先做，"
        },
        {
            "start": 146.42,
            "end": 148.16,
            "text": "什么事情必须由人来拍板，"
        },
        {
            "start": 148.16,
            "end": 149.62,
            "text": "这个边界一定要清楚。"
        },
        {
            "start": 149.62,
            "end": 150.82,
            "text": "第三，做监控。"
        },
        {
            "start": 150.82,
            "end": 154.04,
            "text": "AI 会犯错，会幻觉，也可能带来偏见。"
        },
        {
            "start": 154.04,
            "end": 157.36,
            "text": "如果没有人持续看质量，问题只会越来越大。"
        },
        {
            "start": 157.36,
            "end": 158.66,
            "text": "第四，控风险。"
        },
        {
            "start": 158.66,
            "end": 163.0,
            "text": "这包括数据安全、隐私、伦理，以及团队对 AI 的过度依赖。"
        },
        {
            "start": 163.0,
            "end": 165.58,
            "text": "你可以把 AI 理解成一个能力很强，"
        },
        {
            "start": 165.58,
            "end": 167.72,
            "text": "但必须被管理的系统成员。"
        },
        {
            "start": 167.72,
            "end": 169.76,
            "text": "不是你把它接进来就结束了。"
        },
        {
            "start": 169.76,
            "end": 173.0,
            "text": "真正的领导工作，是从接进来以后才开始。"
        },
        {
            "start": 173.0,
            "end": 175.72,
            "text": "第三层，是最难也最有价值的一层。"
        },
        {
            "start": 175.72,
            "end": 177.0,
            "text": "领导人机协作。"
        },
        {
            "start": 177.0,
            "end": 179.34,
            "text": "这其实是在设计新的组织方式。"
        },
        {
            "start": 179.34,
            "end": 182.9,
            "text": "因为未来很多工作，不会再是一个人从头做到尾。"
        },
        {
            "start": 182.9,
            "end": 185.16,
            "text": "而是人做一部分，AI 做一部分，"
        },
        {
            "start": 185.16,
            "end": 187.68,
            "text": "再由人接回来做判断和复核。"
        },
        {
            "start": 187.68,
            "end": 189.78,
            "text": "所以领导者要回答的问题变成了："
        },
        {
            "start": 189.78,
            "end": 190.32,
            "text": "谁先做？"
        },
        {
            "start": 190.44,
            "end": 191.28000000000003,
            "text": "谁复核？"
        },
        {
            "start": 191.28000000000003,
            "end": 192.98,
            "text": "什么情况下交给 AI？"
        },
        {
            "start": 192.98,
            "end": 195.0,
            "text": "什么情况下必须转回人工？"
        },
        {
            "start": 195.0,
            "end": 197.18,
            "text": "以及整个流程怎么衔接才顺？"
        },
        {
            "start": 197.18,
            "end": 199.92,
            "text": "人机协作设计的一个基本原则是："
        },
        {
            "start": 199.92,
            "end": 201.54,
            "text": "AI 去做它擅长的。"
        },
        {
            "start": 201.54,
            "end": 203.12,
            "text": "人去做人擅长的。"
        },
        {
            "start": 203.12,
            "end": 205.96,
            "text": "AI 更擅长速度、大量数据、重复性动作、"
        },
        {
            "start": 205.96,
            "end": 207.38,
            "text": "模式提取、生成初稿。"
        },
        {
            "start": 207.38,
            "end": 209.96,
            "text": "人更擅长判断、创造、关系建立、"
        },
        {
            "start": 209.96,
            "end": 210.72,
            "text": "情绪理解，"
        },
        {
            "start": 210.72,
            "end": 213.24,
            "text": "以及在模糊和复杂情境中做取舍。"
        },
        {
            "start": 213.24,
            "end": 216.72,
            "text": "所以真正优秀的组织，不是让 AI 和人互相打架。"
        },
        {
            "start": 216.72,
            "end": 219.3,
            "text": "而是让两边各自做自己最强的部分。"
        },
        {
            "start": 219.3,
            "end": 220.5,
            "text": "比如客服场景。"
        },
        {
            "start": 220.5,
            "end": 222.86,
            "text": "AI 可以先处理大量标准化问题。"
        },
        {
            "start": 222.86,
            "end": 227.16,
            "text": "但遇到投诉升级、情绪安抚、复杂协商，还是要转给人。"
        },
        {
            "start": 227.16,
            "end": 229.18,
            "text": "这时候关键不是“有没有 AI”。"
        },
        {
            "start": 229.18,
            "end": 230.7,
            "text": "而是这个交接是不是顺。"
        },
        {
            "start": 230.7,
            "end": 232.58,
            "text": "AI 有没有把上下文带完整。"
        },
        {
            "start": 232.58,
            "end": 234.5,
            "text": "人工接手时有没有足够信息。"
        },
        {
            "start": 234.5,
            "end": 235.9,
            "text": "客户体验有没有被切断。"
        },
        {
            "start": 235.9,
            "end": 238.46,
            "text": "这就已经不是单点工具问题了。"
        },
        {
            "start": 238.46,
            "end": 240.62,
            "text": "这是领导者在设计新的协作系统。"
        },
        {
            "start": 240.62,
            "end": 243.08000000000004,
            "text": "讲到这里，我们也要提醒几个常见陷阱。"
        },
        {
            "start": 243.08000000000004,
            "end": 245.6,
            "text": "第一个陷阱，是过度依赖 AI。"
        },
        {
            "start": 245.6,
            "end": 247.76,
            "text": "有些人会把 AI 当成万能助手，"
        },
        {
            "start": 247.76,
            "end": 251.06,
            "text": "甚至把本该由领导者承担的重大判断也交出去。"
        },
        {
            "start": 251.06,
            "end": 253.18,
            "text": "但 AI 不理解你的组织文化，"
        },
        {
            "start": 253.18,
            "end": 254.88,
            "text": "不理解人的微妙感受，"
        },
        {
            "start": 254.88,
            "end": 257.06,
            "text": "也不真的为你的决策后果负责。"
        },
        {
            "start": 257.06,
            "end": 259.62,
            "text": "第二个陷阱，是完全忽视 AI。"
        },
        {
            "start": 259.62,
            "end": 261.7,
            "text": "如果管理者一直坚持旧做法，"
        },
        {
            "start": 261.7,
            "end": 263.84,
            "text": "不愿意学习、不愿意试新的协作方式，"
        },
        {
            "start": 264.18,
            "end": 266.68,
            "text": "团队的效率和竞争力会被越来越快拉开。"
        },
        {
            "start": 266.68,
            "end": 269.96,
            "text": "第三个陷阱，是把 AI 理解成替代人的工具。"
        },
        {
            "start": 269.96,
            "end": 274.24,
            "text": "更健康的想法应该是，AI 先增强人，再重做组织分工。"
        },
        {
            "start": 274.24,
            "end": 278.32,
            "text": "不是先想着裁掉谁，而是先想着怎么让团队产出升级。"
        },
        {
            "start": 278.32,
            "end": 280.88,
            "text": "第四个陷阱，是忽视伦理和风险。"
        },
        {
            "start": 280.88,
            "end": 283.56,
            "text": "如果 AI 被用在招聘、筛选、评分、"
        },
        {
            "start": 283.56,
            "end": 286.26,
            "text": "推荐这些环节，它就可能放大原有偏见。"
        },
        {
            "start": 286.26,
            "end": 290.36,
            "text": "作为领导者，你必须对这个风险有判断，也要有校正机制。"
        },
        {
            "start": 290.36,
            "end": 292.52,
            "text": "最后，我们回到领导者自己。"
        },
        {
            "start": 292.52,
            "end": 296.24,
            "text": "AI 时代，领导者最重要的自我升级，有三件事。"
        },
        {
            "start": 296.24,
            "end": 297.92,
            "text": "第一，自己先去用 AI。"
        },
        {
            "start": 297.92,
            "end": 301.56,
            "text": "你不一定要成为最会用的人，但你不能完全没体验过。"
        },
        {
            "start": 301.56,
            "end": 303.62,
            "text": "否则你很难判断它的真实边界。"
        },
        {
            "start": 303.62,
            "end": 305.62,
            "text": "第二，培养人机设计思维。"
        },
        {
            "start": 305.62,
            "end": 308.6,
            "text": "以后看到一个业务问题，不只想该派谁去做。"
        },
        {
            "start": 308.6,
            "end": 311.46,
            "text": "还要想，这件事能不能拆成“人做什么，"
        },
        {
            "start": 311.46,
            "end": 313.52,
            "text": "AI 做什么，谁来复核”的新流程。"
        },
        {
            "start": 313.52,
            "end": 315.58,
            "text": "第三，保持对人的关注。"
        },
        {
            "start": 315.58,
            "end": 318.36,
            "text": "AI 越强，人的信任、共识、情绪、"
        },
        {
            "start": 318.36,
            "end": 320.3,
            "text": "责任感和关系质量就越重要。"
        },
        {
            "start": 320.3,
            "end": 323.64,
            "text": "这些东西，不会因为工具更先进就自动解决。"
        },
        {
            "start": 323.64,
            "end": 325.88,
            "text": "恰恰相反，它们会变得更值钱。"
        },
        {
            "start": 325.88,
            "end": 327.12,
            "text": "好，我们来收一下。"
        },
        {
            "start": 327.12,
            "end": 329.58,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 329.58,
            "end": 331.5,
            "text": "第一，AI 时代的领导力，"
        },
        {
            "start": 331.5,
            "end": 334.08,
            "text": "不再只是领导人，而是同时要领导人、"
        },
        {
            "start": 334.08,
            "end": 336.02,
            "text": "领导 AI、领导人机协作。"
        },
        {
            "start": 336.02,
            "end": 339.08,
            "text": "第二，领导者的重点，正在从分配任务，"
        },
        {
            "start": 339.08,
            "end": 342.48,
            "text": "转向设定方向、培养判断力和管理情感。"
        },
        {
            "start": 342.48,
            "end": 345.42,
            "text": "第三，未来最有价值的新领导能力之一，"
        },
        {
            "start": 345.42,
            "end": 347.58,
            "text": "就是设计人和 AI 怎么一起工作。"
        },
        {
            "start": 347.58,
            "end": 350.88,
            "text": "如果你愿意，今天听完以后，你可以先做一个动作。"
        },
        {
            "start": 350.88,
            "end": 353.8,
            "text": "把你团队里一个最关键的工作流程拿出来，"
        },
        {
            "start": 353.8,
            "end": 355.34,
            "text": "重新问自己一句。"
        },
        {
            "start": 355.34,
            "end": 357.78,
            "text": "这个流程里，哪些部分应该交给 AI，"
        },
        {
            "start": 357.78,
            "end": 359.82,
            "text": "哪些部分必须保留给人，"
        },
        {
            "start": 359.82,
            "end": 361.5,
            "text": "交接点应该放在哪里？"
        },
        {
            "start": 361.5,
            "end": 364.6,
            "text": "很多领导力升级，答案就藏在这个问题里。"
        },
        {
            "start": 364.6,
            "end": 365.30000000000007,
            "text": "我是 Lincoln。"
        },
        {
            "start": 365.30000000000007,
            "end": 368.36,
            "text": "我们下一节，继续聊数字员工怎么管理。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.7,
        "index": 0
    },
    {
        "start": 2.7,
        "end": 39.12,
        "index": 1
    },
    {
        "start": 39.12,
        "end": 108.28,
        "index": 2
    },
    {
        "start": 108.28,
        "end": 173.0,
        "index": 3
    },
    {
        "start": 173.0,
        "end": 240.62,
        "index": 4
    },
    {
        "start": 240.62,
        "end": 290.36,
        "index": 5
    },
    {
        "start": 290.36,
        "end": 325.88,
        "index": 6
    },
    {
        "start": 325.88,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-05.html?entry={entry}", secondaryHref: "./lesson-leadership-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-04", coachSource: "./ai-coach.html?source=lesson-leadership-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于领导力模型：领导者到底在做什么的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "领导力模型：领导者到底在做什么", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
