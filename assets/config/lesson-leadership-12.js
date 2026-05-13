(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第12课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第12课：冲突管理：有分歧，不一定是坏事",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep59-conflict-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：冲突管理：有分歧，不一定是坏事", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-12", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-13.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "AI 辅助决策：领导者该怎么用 AI 想问题",
                "body": "把 AI 真正变成决策辅助者，而不是新的噪音来源。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "冲突管理：有分歧，不一定是坏事",
                "body": "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：纳德拉如何重塑微软",
                "body": "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 14,
                "title": "案例：一家企业如何真正把 AI 用起来",
                "body": "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-leadership-13.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先分清冲突类型，再决定怎么处理",
                "body": "真正好的冲突管理，不是总追求和气，而是看清目标、情境和关系后选对处理方式。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 时代的很多冲突，背后其实是焦虑和边界问题",
                "body": "只盯着表面动作，很容易误判真正的问题；把情绪和边界看清楚，处理才会更有效。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "向上管理的重点，是让协作更顺，让方案更容易被采纳",
                "body": "对齐优先级、适配风格、主动汇报、带着方案沟通，比单纯“多汇报”更有价值。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 12/14", "建议下一节：案例：纳德拉如何重塑微软", '也可以先整理这一节'], nextHref: "./lesson-leadership-13.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-12", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson12", audioSource: './assets/audio/leadership-ep59-conflict-management.mp3?v=20260412-leadership-12a', vttSrc: './assets/subtitles/leadership-ep59-conflict-management.vtt?v=20260412-leadership-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep59-conflict-management/slide_01.png",
            "label": "冲突管理：有分歧，不一定是坏事",
            "caption": "这一节会帮助你系统理解：冲突管理：有分歧，不一定是坏事"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_02.png",
            "label": "先看冲突为什么不一定是坏事",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_03.png",
            "label": "五种冲突处理方式",
            "caption": "冲突管理最怕的，不是有分歧，而是只会用一种方式处理所有分歧。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_04.png",
            "label": "AI 时代的新冲突",
            "caption": "很多 AI 冲突不是工具之争，而是情绪、价值感和边界没有被说清楚。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_05.png",
            "label": "向上管理的核心",
            "caption": "向上管理的本质，不是往上“表现”，而是让协作更顺，让判断更容易被看见。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_06.png",
            "label": "怎么向上推动 AI 项目",
            "caption": "推动 AI 项目往往不是“说服观念”，而是先让结果看得见。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_07.png",
            "label": "回到关系与边界",
            "caption": "管理真正难的地方，往往不是流程本身，而是流程背后的人与关系。"
        },
        {
            "file": "leadership-ep59-conflict-management/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.14,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.44,
            "end": 3.04,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.04,
            "end": 5.96,
            "text": "今天这一节，我们来聊两个非常实用，"
        },
        {
            "start": 5.96,
            "end": 8.14,
            "text": "但又常常被低估的管理能力。"
        },
        {
            "start": 8.14,
            "end": 9.62,
            "text": "一个是冲突管理。"
        },
        {
            "start": 9.96,
            "end": 11.1,
            "text": "一个是向上管理。"
        },
        {
            "start": 11.1,
            "end": 12.1,
            "text": "先说冲突。"
        },
        {
            "start": 12.1,
            "end": 15.58,
            "text": "很多人一听到冲突，就会下意识觉得这是坏事。"
        },
        {
            "start": 15.58,
            "end": 19.12,
            "text": "但真实情况是，有人的地方就一定会有冲突。"
        },
        {
            "start": 19.12,
            "end": 21.04,
            "text": "关键不在于有没有冲突。"
        },
        {
            "start": 21.04,
            "end": 22.92,
            "text": "而在于你怎么处理冲突。"
        },
        {
            "start": 22.92,
            "end": 26.68,
            "text": "处理得好，冲突会变成创新和澄清问题的机会。"
        },
        {
            "start": 26.68,
            "end": 30.3,
            "text": "处理不好，冲突就会变成团队的内耗和情绪消耗。"
        },
        {
            "start": 30.3,
            "end": 33.48,
            "text": "我们可以先用一个经典框架来看冲突处理方式。"
        },
        {
            "start": 33.48,
            "end": 36.34,
            "text": "一般来说，冲突处理有五种常见方式。"
        },
        {
            "start": 36.34,
            "end": 37.92,
            "text": "第一种，是竞争。"
        },
        {
            "start": 37.92,
            "end": 39.5,
            "text": "也就是我赢你输。"
        },
        {
            "start": 39.5,
            "end": 42.98,
            "text": "这种方式适合特别紧急、必须快速拍板的场景。"
        },
        {
            "start": 42.98,
            "end": 44.6,
            "text": "第二种，是合作。"
        },
        {
            "start": 44.6,
            "end": 46.72,
            "text": "也就是想办法让双方都赢。"
        },
        {
            "start": 46.72,
            "end": 49.10000000000001,
            "text": "它最理想，但也最费时间和精力。"
        },
        {
            "start": 49.10000000000001,
            "end": 50.88,
            "text": "第三种，是妥协。"
        },
        {
            "start": 50.88,
            "end": 54.08,
            "text": "双方各退一步，尽快达成一个可接受的结果。"
        },
        {
            "start": 54.08,
            "end": 55.48,
            "text": "第四种，是回避。"
        },
        {
            "start": 55.48,
            "end": 59.84,
            "text": "不是不管，而是判断现在可能不是处理这件事的最好时机。"
        },
        {
            "start": 59.84,
            "end": 61.34,
            "text": "第五种，是迁就。"
        },
        {
            "start": 61.34,
            "end": 65.34,
            "text": "这个事情对你不重要，但对对方很重要，你选择让一步。"
        },
        {
            "start": 65.34,
            "end": 68.14,
            "text": "这里最重要的，不是哪一种永远最好。"
        },
        {
            "start": 68.14,
            "end": 70.74,
            "text": "而是你能不能根据情境选对方式。"
        },
        {
            "start": 70.74,
            "end": 73.46,
            "text": "成熟的管理者，不会只会一种处理方式。"
        },
        {
            "start": 73.46,
            "end": 76.12,
            "text": "而是知道什么时候该快，什么时候该谈，"
        },
        {
            "start": 76.12,
            "end": 78.06,
            "text": "什么时候该等，什么时候该让。"
        },
        {
            "start": 78.06,
            "end": 81.16,
            "text": "到了 AI 时代，冲突又出现了一些新的类型。"
        },
        {
            "start": 81.16,
            "end": 83.94,
            "text": "第一类，是替代焦虑带来的冲突。"
        },
        {
            "start": 83.94,
            "end": 88.14,
            "text": "组织一开始推进 AI 时，很多人表面上是在抱怨工具。"
        },
        {
            "start": 88.14,
            "end": 91.5,
            "text": "但更深一层，常常是在担心自己的价值和位置。"
        },
        {
            "start": 91.5,
            "end": 96.14,
            "text": "他可能说 AI 不好用，可能消极配合，可能对新流程很抗拒。"
        },
        {
            "start": 96.14,
            "end": 98.32,
            "text": "但根子往往不是工具本身。"
        },
        {
            "start": 98.32,
            "end": 99.32,
            "text": "而是焦虑。"
        },
        {
            "start": 99.32,
            "end": 102.6,
            "text": "所以这类冲突的处理，第一步不是反驳。"
        },
        {
            "start": 102.6,
            "end": 104.4,
            "text": "而是先承认对方的感受。"
        },
        {
            "start": 104.4,
            "end": 106.92,
            "text": "告诉他，这种担心是合理的。"
        },
        {
            "start": 106.92,
            "end": 108.16,
            "text": "然后再把信息说清楚。"
        },
        {
            "start": 108.16,
            "end": 112.42,
            "text": "岗位会怎么变，公司希望他怎么升级，会提供什么支持。"
        },
        {
            "start": 112.42,
            "end": 114.6,
            "text": "最后再给出资源和训练，"
        },
        {
            "start": 114.6,
            "end": 116.78,
            "text": "而不是只丢一句“你得学会适应”。"
        },
        {
            "start": 116.78,
            "end": 119.7,
            "text": "第二类，是人和 AI 之间的信任冲突。"
        },
        {
            "start": 119.7,
            "end": 122.2,
            "text": "比如一个资深员工凭经验做了判断，"
        },
        {
            "start": 122.2,
            "end": 124.32,
            "text": "但 AI 给出了完全不同的建议。"
        },
        {
            "start": 124.32,
            "end": 128.44,
            "text": "这时候如果组织没有事先设计原则，很容易变成新的拉扯。"
        },
        {
            "start": 128.44,
            "end": 131.02,
            "text": "总是否定 AI，系统就白建了。"
        },
        {
            "start": 131.02,
            "end": 134.26,
            "text": "总是否定人，团队又会觉得自己的判断没有价值。"
        },
        {
            "start": 134.26,
            "end": 137.12,
            "text": "所以更稳的做法，是提前建立决策框架。"
        },
        {
            "start": 137.12,
            "end": 139.26,
            "text": "什么情况以数据和模型为主。"
        },
        {
            "start": 139.26,
            "end": 141.46,
            "text": "什么情况以人的经验判断为主。"
        },
        {
            "start": 141.46,
            "end": 143.98,
            "text": "什么情况需要先做一个小实验来验证。"
        },
        {
            "start": 143.98,
            "end": 146.48,
            "text": "很多人机冲突，并不是因为谁更聪明。"
        },
        {
            "start": 146.48,
            "end": 148.76,
            "text": "而是因为边界根本没有提前说清楚。"
        },
        {
            "start": 148.76,
            "end": 150.66,
            "text": "接下来，我们讲向上管理。"
        },
        {
            "start": 151.10000000000002,
            "end": 153.08,
            "text": "很多人一听这个词会有点抗拒。"
        },
        {
            "start": 153.08,
            "end": 154.7,
            "text": "但向上管理不是拍马屁。"
        },
        {
            "start": 154.7,
            "end": 156.8,
            "text": "它本质上是一种专业协作能力。"
        },
        {
            "start": 156.8,
            "end": 159.84,
            "text": "你的老板决定了资源、节奏、机会和评价。"
        },
        {
            "start": 159.84,
            "end": 162.64,
            "text": "如果你和老板之间的协作长期不顺，"
        },
        {
            "start": 162.64,
            "end": 165.16,
            "text": "再有能力也很难完全发挥出来。"
        },
        {
            "start": 165.16,
            "end": 168.1,
            "text": "向上管理最核心的一点，是先理解对方。"
        },
        {
            "start": 168.1,
            "end": 169.8,
            "text": "你的老板最关心什么。"
        },
        {
            "start": 169.8,
            "end": 173.8,
            "text": "他更看重增长、效率、风险控制，还是客户结果。"
        },
        {
            "start": 173.8,
            "end": 176.52,
            "text": "他喜欢先听结论，还是先听背景。"
        },
        {
            "start": 176.52,
            "end": 179.9,
            "text": "他喜欢看数字，还是喜欢先听一个清楚判断。"
        },
        {
            "start": 179.9,
            "end": 181.26,
            "text": "如果这些不清楚，"
        },
        {
            "start": 181.26,
            "end": 183.9,
            "text": "你的汇报和方案就很容易讲了很多，"
        },
        {
            "start": 183.9,
            "end": 185.26,
            "text": "但没有讲到点上。"
        },
        {
            "start": 185.26,
            "end": 188.84,
            "text": "第二个关键点，是主动汇报，而不是等着被问。"
        },
        {
            "start": 188.84,
            "end": 192.18,
            "text": "尤其是风险和坏消息，越早讲越有价值。"
        },
        {
            "start": 192.18,
            "end": 193.84,
            "text": "晚讲不是减少问题。"
        },
        {
            "start": 193.84,
            "end": 195.9,
            "text": "只是把问题变得更难处理。"
        },
        {
            "start": 195.9,
            "end": 199.44,
            "text": "第三个关键点，是带着方案，而不只是带着问题。"
        },
        {
            "start": 199.44,
            "end": 202.92,
            "text": "如果你只是说项目有风险，老板听到的只是压力。"
        },
        {
            "start": 203.35999999999999,
            "end": 205.58,
            "text": "如果你同时给出几个备选方案，"
        },
        {
            "start": 205.58,
            "end": 206.98,
            "text": "并说明你的建议，"
        },
        {
            "start": 206.98,
            "end": 209.06,
            "text": "老板看到的是你的判断能力。"
        },
        {
            "start": 209.06,
            "end": 211.98,
            "text": "AI 在向上管理里，其实也非常有帮助。"
        },
        {
            "start": 211.98,
            "end": 215.26,
            "text": "它可以帮你把复杂信息整理成更适合你老"
        },
        {
            "start": 215.26,
            "end": 216.5,
            "text": "板风格的表达方式。"
        },
        {
            "start": 216.5,
            "end": 220.28,
            "text": "比如把一份很长的项目进展，压成一个三分钟汇报。"
        },
        {
            "start": 220.28,
            "end": 224.46,
            "text": "比如先帮你把问题、选项、风险和建议做成更清楚的结构。"
        },
        {
            "start": 224.46,
            "end": 227.0,
            "text": "这样你跟老板沟通时，更容易抓住重点。"
        },
        {
            "start": 227.0,
            "end": 229.84,
            "text": "最后，再讲一个 AI 时代特别现实的场景。"
        },
        {
            "start": 229.84,
            "end": 232.1,
            "text": "如果你想往上推动一个 AI 项目，"
        },
        {
            "start": 232.1,
            "end": 234.26,
            "text": "但老板本身并不相信，怎么办。"
        },
        {
            "start": 234.26,
            "end": 236.78,
            "text": "这时候最有效的做法，通常不是讲概念。"
        },
        {
            "start": 236.78,
            "end": 239.1,
            "text": "而是讲数据、讲案例、讲试点。"
        },
        {
            "start": 239.1,
            "end": 241.7,
            "text": "第一，用真实案例和结果说话。"
        },
        {
            "start": 241.7,
            "end": 243.02,
            "text": "第二，从小处开始，"
        },
        {
            "start": 243.02,
            "end": 245.74,
            "text": "不要一上来就提一个特别大的转型计划。"
        },
        {
            "start": 245.74,
            "end": 248.34,
            "text": "第三，尽量做演示，而不是只做描述。"
        },
        {
            "start": 248.34,
            "end": 250.38,
            "text": "很多时候，老板不是反对变化。"
        },
        {
            "start": 250.38,
            "end": 252.76,
            "text": "他只是还没有真正看见变化的价值。"
        },
        {
            "start": 252.76,
            "end": 254.2,
            "text": "好，我们来收一下。"
        },
        {
            "start": 254.2,
            "end": 257.14,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 257.14,
            "end": 259.58,
            "text": "第一，冲突本身不一定是坏事，"
        },
        {
            "start": 259.58,
            "end": 263.36,
            "text": "关键是你能不能根据情境灵活选择处理方式。"
        },
        {
            "start": 263.36,
            "end": 265.5,
            "text": "第二，AI 时代新的冲突，"
        },
        {
            "start": 265.5,
            "end": 268.8,
            "text": "往往集中在替代焦虑和人机信任边界上，"
        },
        {
            "start": 268.8,
            "end": 270.5,
            "text": "不能只看表面动作。"
        },
        {
            "start": 270.5,
            "end": 273.08,
            "text": "第三，向上管理不是讨好，"
        },
        {
            "start": 273.08,
            "end": 275.14,
            "text": "而是理解优先级、主动汇报、"
        },
        {
            "start": 275.14,
            "end": 276.2,
            "text": "带着方案沟通，"
        },
        {
            "start": 276.2,
            "end": 278.84,
            "text": "并用更适合上级的方式表达你的判断。"
        },
        {
            "start": 279.2,
            "end": 282.56,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 282.56,
            "end": 284.8,
            "text": "回想你最近遇到的一次冲突，"
        },
        {
            "start": 284.8,
            "end": 286.84,
            "text": "或者一次和上级沟通不顺的情况。"
        },
        {
            "start": 286.84,
            "end": 290.46,
            "text": "看看问题表面是什么，背后真正卡住的又是什么。"
        },
        {
            "start": 290.46,
            "end": 291.34,
            "text": "你会发现，"
        },
        {
            "start": 291.34,
            "end": 293.84,
            "text": "很多管理难题并不是动作不够，"
        },
        {
            "start": 293.84,
            "end": 297.08,
            "text": "而是没有先把关系、情绪和边界看清楚。"
        },
        {
            "start": 297.08,
            "end": 297.98,
            "text": "我是 Lincoln。"
        },
        {
            "start": 297.98,
            "end": 299.8399999999999,
            "text": "我们下一节，来看一个案例，"
        },
        {
            "start": 299.84,
            "end": 303.24,
            "text": "看看纳德拉是怎么带领微软真正完成大转型的。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.04,
        "index": 0
    },
    {
        "start": 3.04,
        "end": 30.3,
        "index": 1
    },
    {
        "start": 30.3,
        "end": 78.06,
        "index": 2
    },
    {
        "start": 78.06,
        "end": 148.76,
        "index": 3
    },
    {
        "start": 148.76,
        "end": 227.0,
        "index": 4
    },
    {
        "start": 227.0,
        "end": 252.76,
        "index": 5
    },
    {
        "start": 252.76,
        "end": 254.2,
        "index": 6
    },
    {
        "start": 254.2,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-13.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-13.html?entry={entry}", secondaryHref: "./lesson-leadership-13.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-12", coachSource: "./ai-coach.html?source=lesson-leadership-12" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于冲突管理：有分歧，不一定是坏事的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "冲突管理：有分歧，不一定是坏事", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-13.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
