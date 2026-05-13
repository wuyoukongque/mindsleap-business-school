(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第6课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第6课：人与 AI 协作：团队分工怎么重做",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep53-human-ai-collaboration/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：人与 AI 协作：团队分工怎么重做", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-07.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 变革管理：组织怎么更轻快地改变",
                "body": "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先分任务，再分工，不要先入为主地决定谁来做",
                "body": "数据密集度和判断复杂度，是判断任务该由 AI 主导、人主导，还是协作完成的关键维度。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "真正高质量的人机协作，重点在交接和复核",
                "body": "AI 负责处理和生成，人负责判断和把关，流程设计清楚，协作才能真正提效。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "团队层面的人机协作，需要规范、分享和试验空间",
                "body": "不是每个人各自摸索，而是把好的协作方式沉淀成团队共同能力。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 6/14", "建议下一节：AI 变革管理：组织怎么更轻快地改变", '也可以先整理这一节'], nextHref: "./lesson-leadership-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-06", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson6", audioSource: './assets/audio/leadership-ep53-human-ai-collaboration.mp3?v=20260412-leadership-06a', vttSrc: './assets/subtitles/leadership-ep53-human-ai-collaboration.vtt?v=20260412-leadership-06a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_01.png",
            "label": "人与 AI 协作：团队分工怎么重做",
            "caption": "这一节会帮助你系统理解：人与 AI 协作：团队分工怎么重做"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_02.png",
            "label": "先看协作为什么常常低效",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_03.png",
            "label": "四象限分工矩阵",
            "caption": "人机协作最怕拍脑袋分工，更稳的做法，是先判断任务属于哪个象限。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_04.png",
            "label": "写作场景怎么配合",
            "caption": "AI 很适合帮你把想法扩展开，但不适合替你决定你到底要表达什么。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_05.png",
            "label": "数据分析怎么配合",
            "caption": "数据分析最容易被误解的地方，是把“看见异常”和“理解异常”当成同一件事。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_06.png",
            "label": "客户沟通怎么配合",
            "caption": "人机协作在客户沟通里最好的角色分配，是 AI 做准备和善后，人来完成真正的关系建立。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_07.png",
            "label": "常见陷阱与团队推广",
            "caption": "最好的协作方式不会自动出现，它需要团队刻意设计，也需要持续迭代。"
        },
        {
            "file": "leadership-ep53-human-ai-collaboration/slide_08.png",
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
            "start": 1.1,
            "end": 3.12,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.12,
            "end": 5.62,
            "text": "今天这一节，我们来聊一个越来越具体、"
        },
        {
            "start": 5.62,
            "end": 7.06,
            "text": "也越来越重要的话题。"
        },
        {
            "start": 7.06,
            "end": 9.9,
            "text": "人和 AI 到底谁做什么，怎么配合，"
        },
        {
            "start": 9.9,
            "end": 12.44,
            "text": "才能真正把效率和质量都拉起来？"
        },
        {
            "start": 12.44,
            "end": 15.26,
            "text": "很多团队现在已经不是完全不用 AI 了。"
        },
        {
            "start": 15.26,
            "end": 16.48,
            "text": "问题不是有没有用。"
        },
        {
            "start": 16.48,
            "end": 18.66,
            "text": "而是大多数用法还比较初级。"
        },
        {
            "start": 18.66,
            "end": 22.12,
            "text": "比如拿 AI 查资料、改文案、写个初稿、做个总结。"
        },
        {
            "start": 22.12,
            "end": 23.46,
            "text": "这些当然有帮助。"
        },
        {
            "start": 23.46,
            "end": 25.26,
            "text": "但如果只停在这个层面，"
        },
        {
            "start": 25.26,
            "end": 28.28,
            "text": "人机协作的价值其实还远远没有被打开。"
        },
        {
            "start": 28.28,
            "end": 32.38,
            "text": "真正成熟的人机协作，不是把 AI 当成一个高级搜索框。"
        },
        {
            "start": 32.38,
            "end": 33.66,
            "text": "而是把任务拆开，"
        },
        {
            "start": 33.66,
            "end": 35.88,
            "text": "看清楚到底哪一段该给 AI，"
        },
        {
            "start": 35.88,
            "end": 37.58,
            "text": "哪一段必须由人来做，"
        },
        {
            "start": 37.58,
            "end": 39.5,
            "text": "哪一段需要两边反复配合。"
        },
        {
            "start": 39.5,
            "end": 42.42,
            "text": "所以今天这节课，我想给你一个更系统的框架。"
        },
        {
            "start": 42.42,
            "end": 44.18,
            "text": "不是教你几个零碎技巧。"
        },
        {
            "start": 44.18,
            "end": 46.12,
            "text": "而是帮你建立一个判断方法。"
        },
        {
            "start": 46.12,
            "end": 48.56,
            "text": "我建议你先记住一个很实用的工具。"
        },
        {
            "start": 48.56,
            "end": 50.19333333333333,
            "text": "叫四象限分工矩阵。"
        },
        {
            "start": 50.19333333333333,
            "end": 51.7,
            "text": "它背后只看两个维度。"
        },
        {
            "start": 51.88,
            "end": 54.2,
            "text": "第一个维度，数据密集度高不高。"
        },
        {
            "start": 54.2,
            "end": 56.84,
            "text": "也就是这个任务是不是要处理很多信息、"
        },
        {
            "start": 56.84,
            "end": 59.1,
            "text": "很多资料、很多重复输入。"
        },
        {
            "start": 59.1,
            "end": 61.48,
            "text": "第二个维度，判断复杂度高不高。"
        },
        {
            "start": 61.48,
            "end": 63.84,
            "text": "也就是这个任务是不是很依赖经验、"
        },
        {
            "start": 63.84,
            "end": 65.7,
            "text": "取舍、上下文理解、"
        },
        {
            "start": 65.7,
            "end": 67.7,
            "text": "关系判断和主观决策。"
        },
        {
            "start": 67.7,
            "end": 70.84,
            "text": "把这两个维度组合起来，你就会看到四类任务。"
        },
        {
            "start": 70.84,
            "end": 73.06,
            "text": "第一类，高数据、低判断。"
        },
        {
            "start": 73.06,
            "end": 75.54,
            "text": "这类任务通常最适合 AI 主导。"
        },
        {
            "start": 75.54,
            "end": 78.86,
            "text": "比如数据清洗、报表生成、标准化翻译、"
        },
        {
            "start": 79.28,
            "end": 81.34,
            "text": "常见问题回复、基础信息整理。"
        },
        {
            "start": 81.34,
            "end": 84.7,
            "text": "因为这类任务主要拼的是处理速度和稳定执行，"
        },
        {
            "start": 84.7,
            "end": 86.62,
            "text": "不太依赖复杂主观判断。"
        },
        {
            "start": 86.62,
            "end": 88.84,
            "text": "第二类，高数据、高判断。"
        },
        {
            "start": 88.84,
            "end": 92.0,
            "text": "这类任务最适合 AI 辅助，人来决策。"
        },
        {
            "start": 92.38,
            "end": 96.3,
            "text": "比如战略分析、投资判断、人才评估、复杂风险分析。"
        },
        {
            "start": 96.3,
            "end": 100.18,
            "text": "AI 可以先收集信息、做初步分析、给出几个选项。"
        },
        {
            "start": 100.18,
            "end": 103.7,
            "text": "但最后到底选哪个，为什么选，还是需要人来拍板。"
        },
        {
            "start": 103.7,
            "end": 105.84,
            "text": "第三类，低数据、低判断。"
        },
        {
            "start": 105.84,
            "end": 108.46,
            "text": "这类任务如果能自动化，就尽量自动化。"
        },
        {
            "start": 108.46,
            "end": 111.29999999999998,
            "text": "比如会议纪要格式化、邮件归档、"
        },
        {
            "start": 111.3,
            "end": 112.94,
            "text": "日程同步、固定流程触发。"
        },
        {
            "start": 112.94,
            "end": 115.24,
            "text": "第四类，低数据、高判断。"
        },
        {
            "start": 115.24,
            "end": 118.42,
            "text": "这类任务最适合人主导，AI 只能做参考。"
        },
        {
            "start": 118.42,
            "end": 121.36,
            "text": "比如重大人事决策、团队冲突调解、"
        },
        {
            "start": 121.36,
            "end": 123.82,
            "text": "客户关系维护、创意方向判断。"
        },
        {
            "start": 123.82,
            "end": 126.5,
            "text": "因为这些事情最关键的，不是信息量，"
        },
        {
            "start": 126.5,
            "end": 129.92,
            "text": "而是经验、关系、情绪理解和复杂取舍。"
        },
        {
            "start": 129.92,
            "end": 130.96,
            "text": "你会发现，"
        },
        {
            "start": 131.16,
            "end": 133.06,
            "text": "人机协作最容易出问题的地方，"
        },
        {
            "start": 133.06,
            "end": 135.52,
            "text": "是一上来就把任务全丢给 AI，"
        },
        {
            "start": 135.52,
            "end": 136.94,
            "text": "或者完全不敢给 AI。"
        },
        {
            "start": 136.94,
            "end": 140.96,
            "text": "更稳的做法，是先判断任务在哪个象限，再决定分工。"
        },
        {
            "start": 140.96,
            "end": 143.46,
            "text": "接下来，我们讲几个很典型的场景。"
        },
        {
            "start": 143.46,
            "end": 144.56,
            "text": "先说写作。"
        },
        {
            "start": 144.56,
            "end": 146.54,
            "text": "很多人现在的人机写作方式，"
        },
        {
            "start": 146.54,
            "end": 148.46,
            "text": "是让 AI 直接把整篇写出来，"
        },
        {
            "start": 148.46,
            "end": 149.56,
            "text": "然后自己再改。"
        },
        {
            "start": 149.56,
            "end": 152.66,
            "text": "这种方式不是不能用，但往往效率并不稳定。"
        },
        {
            "start": 152.66,
            "end": 154.7,
            "text": "因为如果前面的方向就不对，"
        },
        {
            "start": 154.7,
            "end": 157.06,
            "text": "后面你花很多时间去改，也很累。"
        },
        {
            "start": 157.06,
            "end": 158.7,
            "text": "更稳的流程是这样。"
        },
        {
            "start": 158.7,
            "end": 162.66,
            "text": "先由人来定题目、定核心观点、定真正想表达的判断。"
        },
        {
            "start": 162.66,
            "end": 164.62,
            "text": "然后让 AI 出大纲和初稿。"
        },
        {
            "start": 164.62,
            "end": 168.34,
            "text": "接着由人把自己的经验、案例、独特洞察补进去。"
        },
        {
            "start": 168.34,
            "end": 171.34,
            "text": "最后再让 AI 去做润色、重写、格式化，"
        },
        {
            "start": 171.34,
            "end": 173.44,
            "text": "而不是替你决定你到底想说什么。"
        },
        {
            "start": 173.44,
            "end": 178.04,
            "text": "这背后的关键是，核心思想由人来，扩写和整理交给 AI。"
        },
        {
            "start": 178.04,
            "end": 180.36,
            "text": "如果你把观点也一起外包掉，"
        },
        {
            "start": 180.36,
            "end": 182.84,
            "text": "内容最后就很容易变成正确但没灵魂。"
        },
        {
            "start": 182.84,
            "end": 184.56,
            "text": "第二个场景，数据分析。"
        },
        {
            "start": 184.56,
            "end": 188.52,
            "text": "这个场景特别适合做人机协作，但也特别容易被误用。"
        },
        {
            "start": 188.52,
            "end": 191.68,
            "text": "更好的流程应该是，人先提出业务问题。"
        },
        {
            "start": 191.68,
            "end": 194.36,
            "text": "比如这个月转化下降到底是哪里出了问题。"
        },
        {
            "start": 194.36,
            "end": 198.58000000000004,
            "text": "然后 AI 去做数据清洗、分类、初步对比和异常识别。"
        },
        {
            "start": 198.58000000000004,
            "end": 202.94,
            "text": "接着把分析结果交回来，由人结合业务背景去解释。"
        },
        {
            "start": 202.94,
            "end": 205.7,
            "text": "因为同样一个异常数字，在不同公司、"
        },
        {
            "start": 205.7,
            "end": 207.68,
            "text": "不同阶段、不同业务模型里，"
        },
        {
            "start": 207.68,
            "end": 209.6,
            "text": "意义完全可能不一样。"
        },
        {
            "start": 209.6,
            "end": 211.24,
            "text": "AI 很擅长发现变化。"
        },
        {
            "start": 211.24,
            "end": 213.68,
            "text": "但这是不是风险，是不是机会，"
        },
        {
            "start": 213.68,
            "end": 214.94,
            "text": "要不要立刻动作，"
        },
        {
            "start": 214.94,
            "end": 217.64,
            "text": "这一步仍然需要真正懂业务的人来判断。"
        },
        {
            "start": 217.64,
            "end": 219.44,
            "text": "第三个场景，客户沟通。"
        },
        {
            "start": 219.44,
            "end": 221.34,
            "text": "这里的人机分工也很清楚。"
        },
        {
            "start": 221.34,
            "end": 223.7,
            "text": "AI 很适合做准备和善后。"
        },
        {
            "start": 223.7,
            "end": 226.78,
            "text": "比如会前整理客户背景，提炼近期动态，"
        },
        {
            "start": 226.78,
            "end": 229.07333333333335,
            "text": "生成会议提纲，做会后纪要，"
        },
        {
            "start": 229.07333333333335,
            "end": 230.1,
            "text": "梳理后续待办。"
        },
        {
            "start": 230.1,
            "end": 232.96,
            "text": "但真正去建立信任、理解真实需求、"
        },
        {
            "start": 232.96,
            "end": 235.1,
            "text": "拿捏沟通分寸、做关键承诺，"
        },
        {
            "start": 235.1,
            "end": 236.52,
            "text": "这些仍然是人的工作。"
        },
        {
            "start": 236.52,
            "end": 240.74,
            "text": "所以在客户沟通里，最好的协作方式不是让 AI 替你说。"
        },
        {
            "start": 240.74,
            "end": 242.5,
            "text": "而是让 AI 帮你准备得更充分，"
        },
        {
            "start": 242.5,
            "end": 243.62,
            "text": "跟进得更完整，"
        },
        {
            "start": 243.62,
            "end": 245.78,
            "text": "而你把关键的人际互动做好。"
        },
        {
            "start": 245.78,
            "end": 248.52,
            "text": "讲到这里，我们也要提醒几个很常见的协作陷阱。"
        },
        {
            "start": 248.52,
            "end": 250.42,
            "text": "第一个陷阱，盲信 AI。"
        },
        {
            "start": 250.42,
            "end": 252.44,
            "text": "AI 会一本正经地给出错误信息。"
        },
        {
            "start": 252.76000000000002,
            "end": 253.78,
            "text": "如果你不做验证，"
        },
        {
            "start": 253.78,
            "end": 256.72,
            "text": "就很容易把错误当成正确答案带进业务里。"
        },
        {
            "start": 256.72,
            "end": 258.54,
            "text": "第二个陷阱，过度编辑。"
        },
        {
            "start": 258.54,
            "end": 261.82000000000005,
            "text": "有些人让 AI 先写，再花很长时间逐字逐句改。"
        },
        {
            "start": 261.82000000000005,
            "end": 264.24,
            "text": "这样有时候还不如一开始就把指令给对，"
        },
        {
            "start": 264.24,
            "end": 265.62,
            "text": "或者重新生成一版。"
        },
        {
            "start": 265.62,
            "end": 267.32,
            "text": "第三个陷阱，自动化上瘾。"
        },
        {
            "start": 267.32,
            "end": 268.72,
            "text": "什么都想让 AI 做。"
        },
        {
            "start": 268.72,
            "end": 271.14,
            "text": "但有些事情，人直接打一个电话、"
        },
        {
            "start": 271.14,
            "end": 273.62,
            "text": "开十分钟会、做一次当面判断，"
        },
        {
            "start": 273.62,
            "end": 275.02,
            "text": "反而更快更有效。"
        },
        {
            "start": 275.02,
            "end": 277.02,
            "text": "第四个陷阱，创造力外包。"
        },
        {
            "start": 277.38,
            "end": 279.74,
            "text": "如果你长期让 AI 帮你出所有想法，"
        },
        {
            "start": 279.74,
            "end": 282.26,
            "text": "你自己的判断和创造肌肉就会慢慢变弱。"
        },
        {
            "start": 282.26,
            "end": 285.48,
            "text": "AI 应该帮你放大创造力，而不是替代你的思考。"
        },
        {
            "start": 285.48,
            "end": 288.54,
            "text": "最后，我们再看团队层面怎么推广人机协作。"
        },
        {
            "start": 288.54,
            "end": 291.48,
            "text": "第一，先建立一份简单的 AI 协作规范。"
        },
        {
            "start": 291.48,
            "end": 293.0,
            "text": "什么场景可以用 AI。"
        },
        {
            "start": 293.0,
            "end": 294.82,
            "text": "什么场景不能完全交给 AI。"
        },
        {
            "start": 294.82,
            "end": 297.18000000000006,
            "text": "AI 输出出来以后，谁来复核。"
        },
        {
            "start": 297.18000000000006,
            "end": 298.66,
            "text": "敏感信息怎么处理。"
        },
        {
            "start": 298.66,
            "end": 299.76,
            "text": "这些都要讲清楚。"
        },
        {
            "start": 299.76,
            "end": 301.92,
            "text": "第二，持续分享最佳实践。"
        },
        {
            "start": 301.92,
            "end": 303.64,
            "text": "不要每个人各自摸索。"
        },
        {
            "start": 303.64,
            "end": 307.46,
            "text": "团队里谁发现了更好的协作方式，应该让大家都能复用。"
        },
        {
            "start": 307.46,
            "end": 309.74,
            "text": "第三，给成员留试验空间。"
        },
        {
            "start": 309.74,
            "end": 312.94,
            "text": "很多好的协作流程，不是开会想出来的，"
        },
        {
            "start": 312.94,
            "end": 314.72,
            "text": "而是在实际工作里试出来的。"
        },
        {
            "start": 314.72,
            "end": 318.66,
            "text": "如果组织没有试验空间，新的最佳实践就很难出现。"
        },
        {
            "start": 318.66,
            "end": 320.31999999999994,
            "text": "第四，持续迭代。"
        },
        {
            "start": 320.32,
            "end": 323.44,
            "text": "人机协作不是一套规则写完就不动了。"
        },
        {
            "start": 323.44,
            "end": 327.86,
            "text": "AI 工具在变，业务在变，最好的协作方式也会跟着变。"
        },
        {
            "start": 327.86,
            "end": 328.74,
            "text": "好，我们来收一下。"
        },
        {
            "start": 328.74,
            "end": 331.56,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 331.56,
            "end": 334.44,
            "text": "第一，人机协作不是谁替代谁，"
        },
        {
            "start": 334.44,
            "end": 336.79999999999995,
            "text": "而是先判断任务属于哪个象限，"
        },
        {
            "start": 336.8,
            "end": 338.1,
            "text": "再决定分工。"
        },
        {
            "start": 338.1,
            "end": 341.02,
            "text": "第二，AI 更适合速度、处理和初稿，"
        },
        {
            "start": 341.02,
            "end": 343.78,
            "text": "人更适合判断、关系和最终责任。"
        },
        {
            "start": 343.78,
            "end": 346.4,
            "text": "第三，团队推广人机协作时，"
        },
        {
            "start": 346.4,
            "end": 348.48,
            "text": "要同时避开盲信、过度编辑、"
        },
        {
            "start": 348.48,
            "end": 350.48,
            "text": "自动化上瘾和创造力外包。"
        },
        {
            "start": 350.48,
            "end": 353.46,
            "text": "如果你愿意，今天听完以后，你可以先做一个动作。"
        },
        {
            "start": 353.46,
            "end": 356.78,
            "text": "把你现在最常做的三类任务写下来，"
        },
        {
            "start": 356.78,
            "end": 358.69999999999993,
            "text": "分别判断它们属于哪个象限，"
        },
        {
            "start": 358.7,
            "end": 361.32,
            "text": "再决定你以后准备怎么和 AI 协作。"
        },
        {
            "start": 361.32,
            "end": 362.02,
            "text": "你会发现，"
        },
        {
            "start": 362.02,
            "end": 364.44,
            "text": "很多低效并不是因为 AI 不够强，"
        },
        {
            "start": 364.44,
            "end": 366.3,
            "text": "而是因为分工还没想清楚。"
        },
        {
            "start": 366.3,
            "end": 367.16,
            "text": "我是 Lincoln。"
        },
        {
            "start": 367.16,
            "end": 371.6,
            "text": "我们下一节，继续聊 AI 变革管理，怎么带组织穿越转型期。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.12,
        "index": 0
    },
    {
        "start": 3.12,
        "end": 46.12,
        "index": 1
    },
    {
        "start": 46.12,
        "end": 143.46,
        "index": 2
    },
    {
        "start": 143.46,
        "end": 182.84,
        "index": 3
    },
    {
        "start": 182.84,
        "end": 217.64,
        "index": 4
    },
    {
        "start": 217.64,
        "end": 245.78,
        "index": 5
    },
    {
        "start": 245.78,
        "end": 327.86,
        "index": 6
    },
    {
        "start": 327.86,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-07.html?entry={entry}", secondaryHref: "./lesson-leadership-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-06", coachSource: "./ai-coach.html?source=lesson-leadership-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于人与 AI 协作：团队分工怎么重做的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "人与 AI 协作：团队分工怎么重做", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
