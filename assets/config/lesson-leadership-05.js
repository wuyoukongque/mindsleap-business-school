(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第5课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第5课：管理数字员工：人和 AI 一起工作以后怎么管",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep52-managing-digital-workers/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：管理数字员工：人和 AI 一起工作以后怎么管", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-06.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "人与 AI 协作：团队分工怎么重做",
                "body": "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把数字员工当成需要管理的系统成员",
                "body": "角色定义、权限边界、绩效监控和持续迭代，都是数字员工能否稳定工作的基础。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "权限边界比能力本身更重要",
                "body": "Agent 再强，如果边界没设计好，也会在错误的地方做出错误动作。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "最终责任永远在人，不在 Agent",
                "body": "透明、可追溯、安全和责任归属，才是数字员工治理真正不能省的底线。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 5/14", "建议下一节：人与 AI 协作：团队分工怎么重做", '也可以先整理这一节'], nextHref: "./lesson-leadership-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-05", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson5", audioSource: './assets/audio/leadership-ep52-managing-digital-workers.mp3?v=20260412-leadership-05a', vttSrc: './assets/subtitles/leadership-ep52-managing-digital-workers.vtt?v=20260412-leadership-05a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep52-managing-digital-workers/slide_01.png",
            "label": "管理数字员工：人和 AI 一起工作以后怎么管",
            "caption": "这一节会帮助你系统理解：管理数字员工：人和 AI 一起工作以后怎么管"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_02.png",
            "label": "先分清什么是数字员工",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_03.png",
            "label": "RAPID 框架",
            "caption": "数字员工不是部署完就结束了，真正重要的是部署之后怎么管。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_04.png",
            "label": "权限三级模型",
            "caption": "权限边界不清，是数字员工最常见的风险源。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_05.png",
            "label": "怎么监控数字员工绩效",
            "caption": "没有绩效监控，数字员工就会从效率工具变成黑箱风险。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_06.png",
            "label": "怎么做好人机集成",
            "caption": "数字员工管理的难点，不只是 AI 能不能做，而是和人怎么接得顺。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_07.png",
            "label": "治理原则与责任",
            "caption": "数字员工没有道德责任，真正承担责任的，永远还是领导者和组织。"
        },
        {
            "file": "leadership-ep52-managing-digital-workers/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.94,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 0.94,
            "end": 2.52,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.52,
            "end": 5.300000000000001,
            "text": "今天这一节，我们来聊一个越来越现实的话题。"
        },
        {
            "start": 5.300000000000001,
            "end": 8.42,
            "text": "当组织里开始出现越来越多 AI Agent，"
        },
        {
            "start": 8.42,
            "end": 10.68,
            "text": "也就是所谓的数字员工以后，"
        },
        {
            "start": 10.68,
            "end": 11.96,
            "text": "管理到底该怎么做？"
        },
        {
            "start": 11.96,
            "end": 15.84,
            "text": "很多人听到数字员工，会觉得这像是一个很遥远的概念。"
        },
        {
            "start": 15.84,
            "end": 16.98,
            "text": "但其实不是。"
        },
        {
            "start": 16.98,
            "end": 19.72,
            "text": "今天很多公司已经在用 AI 做客服、"
        },
        {
            "start": 19.72,
            "end": 22.82,
            "text": "做初步审核、做数据分析、做内容初稿、"
        },
        {
            "start": 23.0,
            "end": 25.0,
            "text": "做流程触发、做监控提醒。"
        },
        {
            "start": 25.0,
            "end": 27.57,
            "text": "这些系统如果能持续接收任务、"
        },
        {
            "start": 27.57,
            "end": 29.26,
            "text": "调用工具、执行动作、"
        },
        {
            "start": 29.26,
            "end": 31.04,
            "text": "遇到问题再升级给人，"
        },
        {
            "start": 31.04,
            "end": 33.54,
            "text": "它们本质上就已经很像数字员工了。"
        },
        {
            "start": 33.54,
            "end": 36.7,
            "text": "所以真正的问题不是，要不要面对数字员工。"
        },
        {
            "start": 36.7,
            "end": 39.28,
            "text": "而是它们已经开始进入组织以后，"
        },
        {
            "start": 39.28,
            "end": 41.56,
            "text": "你准备用什么方式去管理它们。"
        },
        {
            "start": 41.56,
            "end": 44.32,
            "text": "如果只是把 Agent 部署上去，"
        },
        {
            "start": 44.32,
            "end": 47.28,
            "text": "却没有治理框架，前面看起来像在提效，"
        },
        {
            "start": 47.28,
            "end": 50.16,
            "text": "后面很可能就会变成新的混乱和风险。"
        },
        {
            "start": 50.16,
            "end": 51.92,
            "text": "先分清一个基本概念。"
        },
        {
            "start": 51.92,
            "end": 55.39999999999999,
            "text": "普通 AI 工具，和数字员工，有什么区别？"
        },
        {
            "start": 55.4,
            "end": 57.7,
            "text": "普通工具更像一次性的助手。"
        },
        {
            "start": 57.7,
            "end": 59.4,
            "text": "你问一次，它答一次。"
        },
        {
            "start": 59.4,
            "end": 61.2,
            "text": "你触发一次，它执行一次。"
        },
        {
            "start": 61.2,
            "end": 62.64,
            "text": "但数字员工不一样。"
        },
        {
            "start": 62.64,
            "end": 64.12,
            "text": "你给它一个目标、"
        },
        {
            "start": 64.12,
            "end": 66.36,
            "text": "一组规则和一些工具之后，"
        },
        {
            "start": 66.36,
            "end": 68.11999999999999,
            "text": "它可以持续地去跑任务。"
        },
        {
            "start": 68.11999999999999,
            "end": 70.9,
            "text": "它会自己接收输入，自己判断下一步，"
        },
        {
            "start": 70.9,
            "end": 73.18,
            "text": "自己调用系统，自己输出结果，"
        },
        {
            "start": 73.18,
            "end": 75.28,
            "text": "必要时再升级给人工。"
        },
        {
            "start": 75.28,
            "end": 79.416,
            "text": "所以管理数字员工，已经不是单纯的软件采购问题。"
        },
        {
            "start": 79.416,
            "end": 82.46,
            "text": "它更像是在组织里增加了一种新的执行角色。"
        },
        {
            "start": 82.46,
            "end": 85.13333333333334,
            "text": "我建议你用一个很简单的框架来理解这件事。"
        },
        {
            "start": 85.76,
            "end": 86.54,
            "text": "叫 RAPID。"
        },
        {
            "start": 86.54,
            "end": 87.56666666666666,
            "text": "一共五层。"
        },
        {
            "start": 87.56666666666666,
            "end": 88.55499999999999,
            "text": "角色定义。"
        },
        {
            "start": 88.55499999999999,
            "end": 89.5,
            "text": "权限设定。"
        },
        {
            "start": 89.5,
            "end": 90.5,
            "text": "绩效监控。"
        },
        {
            "start": 90.5,
            "end": 91.44,
            "text": "人机集成。"
        },
        {
            "start": 91.44,
            "end": 92.21999999999998,
            "text": "持续迭代。"
        },
        {
            "start": 92.22,
            "end": 93.875,
            "text": "如果这五层没搭起来，"
        },
        {
            "start": 93.875,
            "end": 96.72,
            "text": "数字员工很难真正稳定为组织创造价值。"
        },
        {
            "start": 96.72,
            "end": 97.98,
            "text": "第一层，角色定义。"
        },
        {
            "start": 97.98,
            "end": 101.06,
            "text": "你要先说清楚，这个数字员工到底是干什么的。"
        },
        {
            "start": 101.06,
            "end": 101.82,
            "text": "它负责什么。"
        },
        {
            "start": 101.82,
            "end": 102.735,
            "text": "不负责什么。"
        },
        {
            "start": 102.735,
            "end": 103.91,
            "text": "它的输入是什么。"
        },
        {
            "start": 103.91,
            "end": 104.6,
            "text": "输出是什么。"
        },
        {
            "start": 104.6,
            "end": 106.22,
            "text": "在什么情况下继续处理。"
        },
        {
            "start": 106.22,
            "end": 108.82,
            "text": "在什么情况下必须停下来交给人。"
        },
        {
            "start": 108.82,
            "end": 112.99333333333334,
            "text": "这件事听起来很基础，但很多组织恰恰是在这里做得不够。"
        },
        {
            "start": 112.99333333333334,
            "end": 116.04,
            "text": "角色一模糊，Agent 就容易做多、做错，"
        },
        {
            "start": 116.04,
            "end": 117.92,
            "text": "或者该做的时候不敢做。"
        },
        {
            "start": 117.92,
            "end": 119.2,
            "text": "就像人类员工一样，"
        },
        {
            "start": 119.2,
            "end": 120.6,
            "text": "如果岗位定义不清楚，"
        },
        {
            "start": 120.6,
            "end": 122.82,
            "text": "后面所有问题都会跟着来。"
        },
        {
            "start": 122.82,
            "end": 124.26,
            "text": "第二层，权限设定。"
        },
        {
            "start": 124.26,
            "end": 126.82,
            "text": "这是数字员工管理里最关键的一层。"
        },
        {
            "start": 126.82,
            "end": 131.28,
            "text": "因为 Agent 能不能安全地跑起来，核心不只是能力，而是边界。"
        },
        {
            "start": 131.28,
            "end": 133.68,
            "text": "我建议你至少用三级权限模型。"
        },
        {
            "start": 133.68,
            "end": 134.60000000000002,
            "text": "绿灯区。"
        },
        {
            "start": 134.60000000000002,
            "end": 137.08,
            "text": "也就是它可以完全自主处理的事情。"
        },
        {
            "start": 137.08,
            "end": 141.6,
            "text": "比如常见问答、日报生成、例行检查、标准化的信息整理。"
        },
        {
            "start": 141.6,
            "end": 142.73999999999998,
            "text": "黄灯区。"
        },
        {
            "start": 142.73999999999998,
            "end": 146.84,
            "text": "它可以先完成准备动作，但真正执行前必须要有人审核。"
        },
        {
            "start": 146.84,
            "end": 149.82,
            "text": "比如营销文案、价格调整、对外发送内容、策略建议。"
        },
        {
            "start": 149.82,
            "end": 150.41999999999996,
            "text": "红灯区。"
        },
        {
            "start": 150.42,
            "end": 152.16,
            "text": "也就是完全不能碰的部分。"
        },
        {
            "start": 152.16,
            "end": 153.84,
            "text": "比如大额资金、敏感数据、"
        },
        {
            "start": 153.84,
            "end": 154.76,
            "text": "关键品牌声明，"
        },
        {
            "start": 154.76,
            "end": 156.74,
            "text": "以及真正高风险的重大决策。"
        },
        {
            "start": 156.74,
            "end": 158.32,
            "text": "这里有一个很重要的原则。"
        },
        {
            "start": 158.32,
            "end": 160.27999999999997,
            "text": "不要一开始就给太大权限。"
        },
        {
            "start": 160.27999999999997,
            "end": 164.08,
            "text": "数字员工最稳的方式，是先从最小必要权限开始。"
        },
        {
            "start": 164.08,
            "end": 165.78,
            "text": "跑顺以后，再逐步放大。"
        },
        {
            "start": 165.78,
            "end": 167.63999999999996,
            "text": "不是一上来就把权限开满。"
        },
        {
            "start": 167.64,
            "end": 169.28,
            "text": "第三层，绩效监控。"
        },
        {
            "start": 169.28,
            "end": 173.3,
            "text": "很多团队给人做绩效管理，却不给数字员工做监控。"
        },
        {
            "start": 173.3,
            "end": 174.66,
            "text": "这是很危险的。"
        },
        {
            "start": 174.66,
            "end": 178.76,
            "text": "因为数字员工一旦进入真实业务流，它也需要被持续评估。"
        },
        {
            "start": 178.76,
            "end": 180.34,
            "text": "至少要看五类指标。"
        },
        {
            "start": 180.34,
            "end": 181.62,
            "text": "第一，准确率。"
        },
        {
            "start": 181.62,
            "end": 183.74,
            "text": "它给出的结果到底准不准。"
        },
        {
            "start": 183.74,
            "end": 184.82,
            "text": "第二，效率。"
        },
        {
            "start": 184.82,
            "end": 186.22,
            "text": "它处理得够不够快。"
        },
        {
            "start": 186.22,
            "end": 187.6,
            "text": "第三，升级率。"
        },
        {
            "start": 187.6,
            "end": 190.94,
            "text": "多少任务自己处理了，多少任务转给了人工。"
        },
        {
            "start": 190.94,
            "end": 193.18,
            "text": "升级率过高，说明能力不够。"
        },
        {
            "start": 193.18,
            "end": 195.8,
            "text": "升级率过低，也可能说明它越界了。"
        },
        {
            "start": 195.8,
            "end": 196.58,
            "text": "第四，满意度。"
        },
        {
            "start": 196.58,
            "end": 199.82,
            "text": "如果它面向用户，就要看客户是不是认可。"
        },
        {
            "start": 199.82,
            "end": 201.22,
            "text": "第五，异常事件。"
        },
        {
            "start": 201.22,
            "end": 203.94,
            "text": "有没有出错，错在什么地方，频率高不高。"
        },
        {
            "start": 204.38,
            "end": 206.74,
            "text": "所以数字员工也需要一块仪表盘。"
        },
        {
            "start": 206.74,
            "end": 207.72,
            "text": "不是为了好看。"
        },
        {
            "start": 207.72,
            "end": 209.08,
            "text": "而是为了让你知道，"
        },
        {
            "start": 209.08,
            "end": 211.82,
            "text": "什么时候该继续放权，什么时候要缩权，"
        },
        {
            "start": 211.82,
            "end": 213.18,
            "text": "什么时候要调整流程。"
        },
        {
            "start": 213.18,
            "end": 215.315,
            "text": "第四层，人机集成。"
        },
        {
            "start": 215.315,
            "end": 217.76,
            "text": "这也是很多组织最容易低估的一层。"
        },
        {
            "start": 217.76,
            "end": 220.2,
            "text": "他们以为，把 AI 放在前半段、"
        },
        {
            "start": 220.2,
            "end": 222.92,
            "text": "人放在后半段，就叫人机协作。"
        },
        {
            "start": 222.92,
            "end": 225.44,
            "text": "但真正的难点不在于有没有分工。"
        },
        {
            "start": 225.44,
            "end": 227.28,
            "text": "而在于交接是不是顺。"
        },
        {
            "start": 227.28,
            "end": 228.66,
            "text": "什么时候转人工。"
        },
        {
            "start": 228.66,
            "end": 230.74,
            "text": "转过去时带哪些上下文。"
        },
        {
            "start": 230.74,
            "end": 233.9,
            "text": "人工处理完以后，结果有没有回流给系统。"
        },
        {
            "start": 233.9,
            "end": 238.32,
            "text": "如果这些都没设计好，效率就会大幅下降，错误也会变多。"
        },
        {
            "start": 238.32,
            "end": 242.1,
            "text": "真正成熟的人机集成，不是让 AI 和人各跑各的。"
        },
        {
            "start": 242.1,
            "end": 244.45999999999998,
            "text": "而是让他们处在同一条工作流里。"
        },
        {
            "start": 244.45999999999998,
            "end": 246.68,
            "text": "AI 负责标准化处理和前置动作。"
        },
        {
            "start": 246.68,
            "end": 250.2,
            "text": "人负责判断、例外、协商、复核和最终责任。"
        },
        {
            "start": 250.2,
            "end": 251.74,
            "text": "第五层，持续迭代。"
        },
        {
            "start": 251.74,
            "end": 254.08,
            "text": "数字员工不是部署完就结束了。"
        },
        {
            "start": 254.08,
            "end": 256.2,
            "text": "它需要被训练、被复盘、被优化。"
        },
        {
            "start": 256.2,
            "end": 257.88,
            "text": "哪些问题老是答错。"
        },
        {
            "start": 257.88,
            "end": 259.48,
            "text": "哪些场景老是升级。"
        },
        {
            "start": 259.48,
            "end": 261.48,
            "text": "哪些边界太窄，影响效率。"
        },
        {
            "start": 261.48,
            "end": 263.52500000000003,
            "text": "哪些边界太宽，带来风险。"
        },
        {
            "start": 263.52500000000003,
            "end": 265.14,
            "text": "这些都需要持续调整。"
        },
        {
            "start": 265.14,
            "end": 268.36,
            "text": "所以数字员工管理，说到底不是一次性交付。"
        },
        {
            "start": 268.36,
            "end": 270.18,
            "text": "而是一套持续运营工作。"
        },
        {
            "start": 270.18,
            "end": 272.52,
            "text": "最后，我们再谈几个治理底线。"
        },
        {
            "start": 272.52,
            "end": 273.62,
            "text": "第一，透明。"
        },
        {
            "start": 273.62,
            "end": 277.3,
            "text": "员工和客户要知道，自己什么时候在和 AI 交互。"
        },
        {
            "start": 277.3,
            "end": 278.84,
            "text": "不要故意模糊边界。"
        },
        {
            "start": 278.84,
            "end": 280.16,
            "text": "第二，可追溯。"
        },
        {
            "start": 280.16,
            "end": 284.185,
            "text": "每一个关键动作、关键决策、关键输出，都要能查回来。"
        },
        {
            "start": 284.185,
            "end": 285.86,
            "text": "出了问题，才能找到原因。"
        },
        {
            "start": 285.86,
            "end": 287.68,
            "text": "第三，安全和隐私。"
        },
        {
            "start": 287.68,
            "end": 291.48,
            "text": "数字员工接触到的数据，可能比很多人想象得更敏感。"
        },
        {
            "start": 291.48,
            "end": 293.78,
            "text": "只要涉及客户资料、商业信息、"
        },
        {
            "start": 293.78,
            "end": 296.76,
            "text": "内部流程，就一定要有清楚的安全规则。"
        },
        {
            "start": 296.76,
            "end": 298.44,
            "text": "第四，也是最重要的一条。"
        },
        {
            "start": 298.44,
            "end": 300.56,
            "text": "最终责任永远在人，不在 Agent。"
        },
        {
            "start": 300.56,
            "end": 302.92,
            "text": "数字员工不会自己承担后果。"
        },
        {
            "start": 302.92,
            "end": 305.85999999999996,
            "text": "真正承担责任的，是部署它、放权给它、"
        },
        {
            "start": 305.86,
            "end": 307.68,
            "text": "管理它的领导者和组织。"
        },
        {
            "start": 307.68,
            "end": 308.98,
            "text": "好，我们来收一下。"
        },
        {
            "start": 308.98,
            "end": 311.66,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 311.66,
            "end": 313.86,
            "text": "第一，数字员工不是普通工具，"
        },
        {
            "start": 313.86,
            "end": 317.02,
            "text": "而是需要被定义角色、设边界、看绩效、"
        },
        {
            "start": 317.02,
            "end": 318.38,
            "text": "做迭代的组织成员。"
        },
        {
            "start": 318.38,
            "end": 321.12,
            "text": "第二，权限边界比能力本身更重要。"
        },
        {
            "start": 321.12,
            "end": 324.58,
            "text": "绿灯、黄灯、红灯，这个分层一定要先想清楚。"
        },
        {
            "start": 324.96,
            "end": 327.18,
            "text": "第三，真正成熟的数字员工管理，"
        },
        {
            "start": 327.18,
            "end": 328.6,
            "text": "不是让 AI 单独跑，"
        },
        {
            "start": 328.6,
            "end": 330.14,
            "text": "而是把它和人的工作流、"
        },
        {
            "start": 330.14,
            "end": 332.0,
            "text": "责任和治理规则整合在一起。"
        },
        {
            "start": 332.0,
            "end": 335.02,
            "text": "如果你愿意，今天听完以后，你可以先做一个动作。"
        },
        {
            "start": 335.02,
            "end": 337.82,
            "text": "挑一个你觉得最适合部署 Agent 的流程，"
        },
        {
            "start": 337.82,
            "end": 340.32,
            "text": "先写出它的角色定义和权限边界。"
        },
        {
            "start": 340.32,
            "end": 341.4,
            "text": "你会很快发现，"
        },
        {
            "start": 341.4,
            "end": 343.3,
            "text": "很多时候问题不是技术做不到，"
        },
        {
            "start": 343.3,
            "end": 344.96,
            "text": "而是管理设计还没跟上。"
        },
        {
            "start": 344.96,
            "end": 345.82,
            "text": "我是 Lincoln。"
        },
        {
            "start": 345.82,
            "end": 349.38,
            "text": "我们下一节，继续聊人和 AI 怎么更高效地协作。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.52,
        "index": 0
    },
    {
        "start": 2.52,
        "end": 82.46,
        "index": 1
    },
    {
        "start": 82.46,
        "end": 122.82,
        "index": 2
    },
    {
        "start": 122.82,
        "end": 167.64,
        "index": 3
    },
    {
        "start": 167.64,
        "end": 213.18,
        "index": 4
    },
    {
        "start": 213.18,
        "end": 270.18,
        "index": 5
    },
    {
        "start": 270.18,
        "end": 307.68,
        "index": 6
    },
    {
        "start": 307.68,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-06.html?entry={entry}", secondaryHref: "./lesson-leadership-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-05", coachSource: "./ai-coach.html?source=lesson-leadership-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于管理数字员工：人和 AI 一起工作以后怎么管的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "管理数字员工：人和 AI 一起工作以后怎么管", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
