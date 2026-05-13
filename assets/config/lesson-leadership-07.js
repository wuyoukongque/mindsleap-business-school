(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第7课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第7课：AI 变革管理：组织怎么更轻快地改变",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep54-ai-change-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 变革管理：组织怎么更轻快地改变", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-08.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "敏捷组织：组织怎么更灵活",
                "body": "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先处理人的阻力，再谈工具落地",
                "body": "恐惧、惰性和能力焦虑如果没有被正面回应，再好的 AI 工具也很难真正被组织用起来。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "变革推进要有完整路径，不要只靠口号或动员",
                "body": "紧迫感、引导联盟、愿景、传播、赋能、短期胜利、扩大战果和文化沉淀，缺一块都容易让转型半途而废。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "从小胜利开始，组织才会真正建立信心",
                "body": "高影响、低难度的场景最适合作为起点，让结果先出现，变化才有机会扩散成真正的组织能力。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 7/14", "建议下一节：敏捷组织：组织怎么更灵活", '也可以先整理这一节'], nextHref: "./lesson-leadership-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-07", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson7", audioSource: './assets/audio/leadership-ep54-ai-change-management.mp3?v=20260412-leadership-07a', vttSrc: './assets/subtitles/leadership-ep54-ai-change-management.vtt?v=20260412-leadership-07a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep54-ai-change-management/slide_01.png",
            "label": "AI 变革管理：组织怎么更轻快地改变",
            "caption": "这一节会帮助你系统理解：AI 变革管理：组织怎么更轻快地改变"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_02.png",
            "label": "先看变革为什么总推不动",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_03.png",
            "label": "三层阻力",
            "caption": "AI 转型推不动，常常不是因为技术不行，而是因为人的心理与习惯还没有被真正处理。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_04.png",
            "label": "先建立紧迫感与引导联盟",
            "caption": "先让组织看见“不变不行”，再让一批关键人先动起来，变革才真正有起点。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_05.png",
            "label": "愿景、传播与赋能",
            "caption": "愿景让组织知道要去哪里，赋能让组织真的走得动。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_06.png",
            "label": "短期胜利与扩大战果",
            "caption": "真正的组织转型，往往不是一次大爆炸，而是一批小胜利不断累积出来的。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_07.png",
            "label": "把变革真正融入文化",
            "caption": "只有当 AI 使用变成日常工作方式，变革才算真正留下来了。"
        },
        {
            "file": "leadership-ep54-ai-change-management/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.1,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.48,
            "end": 2.98,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.98,
            "end": 4.06,
            "text": "今天这一节，"
        },
        {
            "start": 4.06,
            "end": 6.28,
            "text": "我们来聊一个很多企业都已经遇到，"
        },
        {
            "start": 6.28,
            "end": 8.16,
            "text": "但还没有真正解决好的问题。"
        },
        {
            "start": 8.16,
            "end": 10.02,
            "text": "你想推动 AI 转型。"
        },
        {
            "start": 10.02,
            "end": 11.94,
            "text": "你也知道组织需要变。"
        },
        {
            "start": 12.02,
            "end": 14.66,
            "text": "但团队不配合，员工有抵触，"
        },
        {
            "start": 14.66,
            "end": 16.48,
            "text": "项目推不动，最后工具买了，"
        },
        {
            "start": 16.48,
            "end": 19.34,
            "text": "流程也改了，结果还是没有真正转起来。"
        },
        {
            "start": 19.34,
            "end": 21.58,
            "text": "这时候问题往往不在技术本身。"
        },
        {
            "start": 21.62,
            "end": 24.16,
            "text": "真正卡住组织转型的，常常是人。"
        },
        {
            "start": 24.16,
            "end": 26.7,
            "text": "所以今天这节课，我们不只是讲 AI。"
        },
        {
            "start": 26.7,
            "end": 30.54,
            "text": "我们要讲的是，领导者怎么带着组织穿越转型期。"
        },
        {
            "start": 30.54,
            "end": 32.38,
            "text": "先说一个很残酷的现实。"
        },
        {
            "start": 32.38,
            "end": 35.14,
            "text": "大多数组织变革，其实都不成功。"
        },
        {
            "start": 35.14,
            "end": 37.02,
            "text": "不是因为方向完全错了。"
        },
        {
            "start": 37.02,
            "end": 38.92,
            "text": "也不是因为技术完全不行。"
        },
        {
            "start": 38.92,
            "end": 41.9,
            "text": "而是因为组织里人的心理、习惯和能力，"
        },
        {
            "start": 41.9,
            "end": 43.34,
            "text": "没有被真正处理好。"
        },
        {
            "start": 43.34,
            "end": 46.22,
            "text": "如果这件事放到 AI 转型里，就会更加明显。"
        },
        {
            "start": 46.22,
            "end": 48.84,
            "text": "因为 AI 带来的，不只是工具变化。"
        },
        {
            "start": 48.84,
            "end": 52.64,
            "text": "它还会碰到岗位、安全感、工作方式和权力结构。"
        },
        {
            "start": 52.64,
            "end": 56.019999999999996,
            "text": "所以你先要看清楚，AI 转型里最常见的三层阻力。"
        },
        {
            "start": 56.02,
            "end": 57.38,
            "text": "第一层，是恐惧。"
        },
        {
            "start": 57.38,
            "end": 59.42,
            "text": "很多人心里真正担心的是，"
        },
        {
            "start": 59.42,
            "end": 60.92,
            "text": "AI 会不会取代我，"
        },
        {
            "start": 60.92,
            "end": 62.78,
            "text": "我这个岗位以后还有没有价值。"
        },
        {
            "start": 62.78,
            "end": 64.08,
            "text": "第二层，是惰性。"
        },
        {
            "start": 64.08,
            "end": 65.82,
            "text": "有些人不是反对 AI。"
        },
        {
            "start": 65.82,
            "end": 68.72,
            "text": "他只是觉得，现在这套做法虽然不完美，"
        },
        {
            "start": 68.72,
            "end": 71.24,
            "text": "但也还能运转，为什么一定要改。"
        },
        {
            "start": 71.24,
            "end": 72.80000000000003,
            "text": "第三层，是能力焦虑。"
        },
        {
            "start": 72.80000000000003,
            "end": 74.96,
            "text": "他会觉得，我不会用，我学不会，"
        },
        {
            "start": 74.96,
            "end": 77.36,
            "text": "我已经没有信心去追新的东西了。"
        },
        {
            "start": 77.36,
            "end": 79.28000000000004,
            "text": "如果你不正面回应这三层阻力，"
        },
        {
            "start": 79.28000000000004,
            "end": 82.2,
            "text": "组织就很容易出现表面支持、实际拖延。"
        },
        {
            "start": 82.2,
            "end": 84.86,
            "text": "工具部署了，但没人真正用起来。"
        },
        {
            "start": 84.86,
            "end": 87.28,
            "text": "流程设计了，但最后还是回到老办法。"
        },
        {
            "start": 87.28,
            "end": 90.6,
            "text": "所以变革管理最重要的，不是宣布一声开始变革。"
        },
        {
            "start": 90.6,
            "end": 93.1,
            "text": "而是让组织愿意变，也有能力变。"
        },
        {
            "start": 93.1,
            "end": 94.68,
            "text": "接下来，我给你一个很经典、"
        },
        {
            "start": 94.68,
            "end": 97.16,
            "text": "但放到 AI 时代依然非常有用的框架。"
        },
        {
            "start": 97.16,
            "end": 98.9,
            "text": "就是变革八步法。"
        },
        {
            "start": 98.9,
            "end": 103.34,
            "text": "你可以把它理解成，推动 AI 转型时一条更稳的路线图。"
        },
        {
            "start": 103.34,
            "end": 105.2,
            "text": "第一步，创造紧迫感。"
        },
        {
            "start": 105.2,
            "end": 107.46,
            "text": "你要让团队明白，不变真的不行。"
        },
        {
            "start": 107.46,
            "end": 110.28,
            "text": "但这里最容易犯的错误，是用恐惧去逼。"
        },
        {
            "start": 110.28,
            "end": 113.02,
            "text": "比如说，你不学 AI 就会被淘汰。"
        },
        {
            "start": 113.02,
            "end": 117.68,
            "text": "这种话听起来很重，但通常只会增加防御，不会增加行动。"
        },
        {
            "start": 117.68,
            "end": 121.82,
            "text": "更好的做法，是让人看到变化背后的机会和现实。"
        },
        {
            "start": 121.82,
            "end": 126.18,
            "text": "比如竞争对手已经用 AI 把客户响应速度拉快了很多。"
        },
        {
            "start": 126.18,
            "end": 129.24,
            "text": "比如 AI 可以帮团队省下大量重复工作，"
        },
        {
            "start": 129.24,
            "end": 132.52,
            "text": "把时间放回更有价值的判断和创造上。"
        },
        {
            "start": 132.52,
            "end": 135.1,
            "text": "你不是单纯告诉大家，不变会很惨。"
        },
        {
            "start": 135.1,
            "end": 138.04,
            "text": "而是让大家看到，变了以后会更好。"
        },
        {
            "start": 138.04,
            "end": 139.7,
            "text": "第二步，组建引导联盟。"
        },
        {
            "start": 139.7,
            "end": 141.74,
            "text": "变革不能只靠一个人硬推。"
        },
        {
            "start": 141.74,
            "end": 146.28,
            "text": "你需要先找到一批愿意先试、学得快、对 AI 有兴趣的人。"
        },
        {
            "start": 146.28,
            "end": 149.52,
            "text": "这里最好同时有高管、中层和一线骨干。"
        },
        {
            "start": 149.52,
            "end": 152.52,
            "text": "高管负责资源和方向，中层负责推进，"
        },
        {
            "start": 152.52,
            "end": 155.5,
            "text": "一线骨干负责把变化真正带进日常工作。"
        },
        {
            "start": 155.5,
            "end": 157.5,
            "text": "第三步，制定愿景和路径。"
        },
        {
            "start": 157.5,
            "end": 159.92,
            "text": "很多企业说，我们要全面 AI 化。"
        },
        {
            "start": 159.92,
            "end": 163.0,
            "text": "这句话听起来很大，但其实没有画面，也没有动作。"
        },
        {
            "start": 163.0,
            "end": 166.34,
            "text": "真正好的变革愿景，一定要让团队能想象出来。"
        },
        {
            "start": 166.34,
            "end": 167.5,
            "text": "比如一年以后，"
        },
        {
            "start": 167.5,
            "end": 170.86,
            "text": "客户从咨询到成交的关键流程会变成什么样。"
        },
        {
            "start": 170.86,
            "end": 174.98,
            "text": "销售、运营、客服、产品，各自会怎样和 AI 配合。"
        },
        {
            "start": 174.98,
            "end": 178.82,
            "text": "一个具体的愿景，才会让组织知道自己到底要往哪里走。"
        },
        {
            "start": 178.82,
            "end": 181.38,
            "text": "而路径回答的是，先从哪里开始，"
        },
        {
            "start": 181.38,
            "end": 184.32,
            "text": "分几步推进，每一步要拿到什么结果。"
        },
        {
            "start": 184.32,
            "end": 185.82,
            "text": "第四步，传播愿景。"
        },
        {
            "start": 185.82,
            "end": 188.3,
            "text": "愿景不是做成一页文件就结束了。"
        },
        {
            "start": 188.3,
            "end": 190.68,
            "text": "你需要反复说，在会议里说，"
        },
        {
            "start": 190.68,
            "end": 193.1,
            "text": "在一对一里说，在复盘里说，"
        },
        {
            "start": 193.1,
            "end": 194.32,
            "text": "在项目推进里说。"
        },
        {
            "start": 194.32,
            "end": 196.6,
            "text": "更关键的是，你自己要先用起来。"
        },
        {
            "start": 196.6,
            "end": 199.78,
            "text": "如果领导者嘴上讲 AI，自己却完全不用，"
        },
        {
            "start": 199.78,
            "end": 202.24,
            "text": "团队很快就会把这件事判断成口号。"
        },
        {
            "start": 202.24,
            "end": 204.56,
            "text": "所以传播愿景，不只是说服。"
        },
        {
            "start": 204.56,
            "end": 205.48,
            "text": "也是示范。"
        },
        {
            "start": 205.48,
            "end": 207.16,
            "text": "第五步，赋能行动。"
        },
        {
            "start": 207.16,
            "end": 209.06,
            "text": "组织不是听懂了就会变。"
        },
        {
            "start": 209.06,
            "end": 210.94,
            "text": "还需要真的有条件去变。"
        },
        {
            "start": 210.94,
            "end": 212.54,
            "text": "这里至少有三件事。"
        },
        {
            "start": 212.54,
            "end": 213.4,
            "text": "第一，培训。"
        },
        {
            "start": 213.4,
            "end": 217.58,
            "text": "不是一次性的讲座，而是围绕真实工作场景的持续训练。"
        },
        {
            "start": 217.58,
            "end": 219.02,
            "text": "第二，工具和资源。"
        },
        {
            "start": 219.02,
            "end": 221.36,
            "text": "你要给团队可用的工具、账号、"
        },
        {
            "start": 221.36,
            "end": 224.24,
            "text": "权限和支持，而不是让大家自己摸索。"
        },
        {
            "start": 224.24,
            "end": 225.52,
            "text": "第三，移除障碍。"
        },
        {
            "start": 225.52,
            "end": 227.96,
            "text": "如果审批太复杂，数据拿不到，"
        },
        {
            "start": 227.96,
            "end": 229.18,
            "text": "系统彼此割裂，"
        },
        {
            "start": 229.18,
            "end": 231.22,
            "text": "那团队再有意愿也推不动。"
        },
        {
            "start": 231.22,
            "end": 233.14,
            "text": "第六步，创造短期胜利。"
        },
        {
            "start": 233.14,
            "end": 236.52,
            "text": "变革如果长期没有结果，人就会失去耐心。"
        },
        {
            "start": 236.52,
            "end": 239.56,
            "text": "所以你要尽早打出几个组织能看见的成果。"
        },
        {
            "start": 239.56,
            "end": 243.2,
            "text": "最好的选择，通常是那些高影响、低难度的场景。"
        },
        {
            "start": 243.2,
            "end": 247.82,
            "text": "比如原来一份周报要做两天，现在用 AI 两小时就能完成。"
        },
        {
            "start": 247.82,
            "end": 250.28,
            "text": "比如客户纪要整理、线索跟进、"
        },
        {
            "start": 250.28,
            "end": 251.74,
            "text": "知识检索这类工作，"
        },
        {
            "start": 251.74,
            "end": 253.62,
            "text": "先跑出一批明确成果。"
        },
        {
            "start": 253.62,
            "end": 256.26,
            "text": "这些短期胜利的意义，不只是效率提升。"
        },
        {
            "start": 256.26,
            "end": 257.6,
            "text": "它会给组织信心。"
        },
        {
            "start": 257.6,
            "end": 260.26,
            "text": "也会让原来观望的人开始愿意加入。"
        },
        {
            "start": 260.26,
            "end": 262.58,
            "text": "第七步，巩固成果，扩大战果。"
        },
        {
            "start": 262.58,
            "end": 264.98,
            "text": "一个场景跑通以后，不要停在这里。"
        },
        {
            "start": 264.98,
            "end": 266.94,
            "text": "你要趁着团队已经看到结果，"
        },
        {
            "start": 266.94,
            "end": 269.14,
            "text": "把成功的方法复制到更多环节。"
        },
        {
            "start": 269.14,
            "end": 274.26,
            "text": "从客服到销售，从销售到产品，从产品到运营，逐步扩大。"
        },
        {
            "start": 274.26,
            "end": 277.76,
            "text": "真正的组织转型，往往不是一次大爆炸完成的。"
        },
        {
            "start": 277.76,
            "end": 280.18,
            "text": "而是一批小胜利不断累积出来的。"
        },
        {
            "start": 280.18,
            "end": 281.94,
            "text": "第八步，把变化融入文化。"
        },
        {
            "start": 281.94,
            "end": 283.16,
            "text": "这是最难的一步，"
        },
        {
            "start": 283.16,
            "end": 286.02,
            "text": "也是最后真正决定变革能不能留下来的地方。"
        },
        {
            "start": 286.02,
            "end": 289.22,
            "text": "你要让使用 AI 不再是少数人的新鲜尝试。"
        },
        {
            "start": 289.22,
            "end": 291.26,
            "text": "而是组织正常的工作方式。"
        },
        {
            "start": 291.26,
            "end": 293.48,
            "text": "这意味着，招聘标准要更新，"
        },
        {
            "start": 293.48,
            "end": 296.76,
            "text": "绩效评价要更新，协作流程要更新，"
        },
        {
            "start": 296.76,
            "end": 299.18,
            "text": "领导者自己的行为也要持续更新。"
        },
        {
            "start": 299.18,
            "end": 301.3,
            "text": "不是部署一次工具就结束。"
        },
        {
            "start": 301.3,
            "end": 305.69999999999993,
            "text": "而是把人和 AI 协作，真正变成组织能力的一部分。"
        },
        {
            "start": 305.7,
            "end": 306.58,
            "text": "好，我们来收一下。"
        },
        {
            "start": 306.58,
            "end": 309.52,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 309.52,
            "end": 311.9,
            "text": "第一，AI 转型最大的阻力，"
        },
        {
            "start": 311.9,
            "end": 314.28,
            "text": "通常不是技术，而是人的恐惧、"
        },
        {
            "start": 314.28,
            "end": 315.7,
            "text": "惰性和能力焦虑。"
        },
        {
            "start": 315.7,
            "end": 318.96,
            "text": "第二，推动组织变化不能只靠一句口号，"
        },
        {
            "start": 318.96,
            "end": 321.8800000000001,
            "text": "而要沿着紧迫感、引导联盟、愿景、"
        },
        {
            "start": 321.8800000000001,
            "end": 323.68,
            "text": "传播、赋能、短期胜利、"
        },
        {
            "start": 323.68,
            "end": 325.6,
            "text": "扩大战果和融入文化，"
        },
        {
            "start": 325.6,
            "end": 327.74,
            "text": "这样一条完整路径往前走。"
        },
        {
            "start": 327.74,
            "end": 331.52,
            "text": "第三，真正好的 AI 变革，不是一次性轰轰烈烈上线。"
        },
        {
            "start": 331.52,
            "end": 335.5,
            "text": "而是让组织在一次次小胜利里，逐步建立新的工作方式。"
        },
        {
            "start": 335.5,
            "end": 339.28,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 339.28,
            "end": 342.92,
            "text": "写下你现在组织里一个最适合先跑通的高影响、"
        },
        {
            "start": 342.92,
            "end": 343.74,
            "text": "低难度场景。"
        },
        {
            "start": 343.74,
            "end": 344.72,
            "text": "然后判断，"
        },
        {
            "start": 344.72,
            "end": 347.88,
            "text": "团队现在最大的阻力到底是恐惧、惰性，"
        },
        {
            "start": 347.88,
            "end": 349.06,
            "text": "还是能力焦虑。"
        },
        {
            "start": 349.06,
            "end": 353.48,
            "text": "你会发现，当你先把阻力看清楚，变革推进就会顺很多。"
        },
        {
            "start": 353.48,
            "end": 354.26,
            "text": "我是 Lincoln。"
        },
        {
            "start": 354.26,
            "end": 358.06,
            "text": "我们下一节，继续聊 AI 时代的敏捷组织怎么设计。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.98,
        "index": 0
    },
    {
        "start": 2.98,
        "end": 52.64,
        "index": 1
    },
    {
        "start": 52.64,
        "end": 103.34,
        "index": 2
    },
    {
        "start": 103.34,
        "end": 155.5,
        "index": 3
    },
    {
        "start": 155.5,
        "end": 231.22,
        "index": 4
    },
    {
        "start": 231.22,
        "end": 280.18,
        "index": 5
    },
    {
        "start": 280.18,
        "end": 305.7,
        "index": 6
    },
    {
        "start": 305.7,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-08.html?entry={entry}", secondaryHref: "./lesson-leadership-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-07", coachSource: "./ai-coach.html?source=lesson-leadership-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 变革管理：组织怎么更轻快地改变的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 变革管理：组织怎么更轻快地改变", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
