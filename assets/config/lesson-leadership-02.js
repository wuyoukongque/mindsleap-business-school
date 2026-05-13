(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第2课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第2课：团队激励：钱不是万能的",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep49-team-motivation/slide_01.svg", initialSlideCount: "1 / 8", title: "当前内容：团队激励：钱不是万能的", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-03.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "绩效与 OKR：目标怎么真正落地",
                "body": "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "看清楚团队真正被什么驱动，再把激励从单一的奖金机制升级成更完整的系统。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先判断团队状态，再决定怎么激励",
                "body": "形成期、磨合期、规范期、高效期，需要的不是同一套领导动作，判断错阶段，激励就容易失效。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "钱能止痛，但不能长期点燃团队",
                "body": "薪资和福利更多是在防止不满，真正让人持续投入的，是自主、成长、意义感、认可和责任。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 时代的领导者，要把焦虑转成升级动力",
                "body": "坦诚沟通变化、提供学习路径、重新定义人的价值，才能让团队在变化里保持士气和行动力。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 2/14", "建议下一节：绩效与 OKR：目标怎么真正落地", '也可以先整理这一节'], nextHref: "./lesson-leadership-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-02", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson2", audioSource: './assets/audio/leadership-ep49-team-motivation.mp3?v=20260412-leadership-02a', vttSrc: './assets/subtitles/leadership-ep49-team-motivation.vtt?v=20260412-leadership-02a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep49-team-motivation/slide_01.svg",
            "label": "团队激励：钱不是万能的",
            "caption": "这一节会帮助你系统理解：团队激励：钱不是万能的"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_02.svg",
            "label": "先分清激励误区",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_03.svg",
            "label": "团队发展四阶段",
            "caption": "先判断团队处在哪个阶段，再决定你是要定规则、化冲突，还是该放权。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_04.svg",
            "label": "为什么钱不是万能的",
            "caption": "激励的关键，不只是多给一点，而是看清楚什么只能止痛，什么才能真正点燃人。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_05.svg",
            "label": "真正驱动人的三个因素",
            "caption": "激励最怕只剩下任务和考核，最有效的做法，是把自主、成长和意义感重新放回工作里。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_06.svg",
            "label": "五个激励动作",
            "caption": "很多管理问题并不是团队没有动力，而是激励动作太单一，只有奖金，没有系统。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_07.svg",
            "label": "AI 时代的新激励挑战",
            "caption": "AI 焦虑如果不被正面回应，就会直接影响士气、协作和执行力。"
        },
        {
            "file": "leadership-ep49-team-motivation/slide_08.svg",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.18,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.18,
            "end": 3.08,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.08,
            "end": 5.44,
            "text": "今天这一节，我们来聊团队激励。"
        },
        {
            "start": 5.44,
            "end": 9.52,
            "text": "很多管理者一提到激励，第一反应就是两个字，发钱。"
        },
        {
            "start": 9.52,
            "end": 10.48,
            "text": "钱当然重要。"
        },
        {
            "start": 10.48,
            "end": 13.5,
            "text": "但如果你真的带过团队，你会发现一件事。"
        },
        {
            "start": 13.5,
            "end": 16.1,
            "text": "很多时候，钱解决不了真正的问题。"
        },
        {
            "start": 16.1,
            "end": 18.6,
            "text": "有的人薪资不低，状态还是很差。"
        },
        {
            "start": 18.6,
            "end": 21.86,
            "text": "有的人奖金也拿到了，但并没有变得更主动。"
        },
        {
            "start": 21.86,
            "end": 25.76,
            "text": "甚至还有一些团队，钱越发越多，士气反而越一般。"
        },
        {
            "start": 25.76,
            "end": 26.82,
            "text": "这说明什么？"
        },
        {
            "start": 26.82,
            "end": 29.66,
            "text": "说明激励这件事，比我们想得复杂得多。"
        },
        {
            "start": 29.66,
            "end": 32.48,
            "text": "它不是一个单点动作，而是一整套系统。"
        },
        {
            "start": 32.48,
            "end": 34.94,
            "text": "如果你只会用奖金解决所有问题，"
        },
        {
            "start": 34.94,
            "end": 37.54,
            "text": "那你最后会发现，成本越来越高，"
        },
        {
            "start": 37.54,
            "end": 38.94,
            "text": "效果却越来越弱。"
        },
        {
            "start": 38.94,
            "end": 42.68,
            "text": "所以今天这一节，我想帮你先建立一个更清楚的框架。"
        },
        {
            "start": 42.68,
            "end": 45.24,
            "text": "第一，团队为什么会有不同状态。"
        },
        {
            "start": 45.24,
            "end": 47.46,
            "text": "第二，为什么钱不是万能的。"
        },
        {
            "start": 47.46,
            "end": 51.16,
            "text": "第三，在 AI 时代，领导者到底该怎么重新做激励。"
        },
        {
            "start": 51.16,
            "end": 53.14,
            "text": "我们先从团队本身开始看。"
        },
        {
            "start": 53.14,
            "end": 56.04,
            "text": "因为很多时候，你以为是激励出了问题，"
        },
        {
            "start": 56.04,
            "end": 58.18,
            "text": "其实是团队还没发展到那个阶段。"
        },
        {
            "start": 58.18,
            "end": 60.48,
            "text": "一个团队通常会经历四个阶段。"
        },
        {
            "start": 60.48,
            "end": 62.22,
            "text": "第一个阶段，形成期。"
        },
        {
            "start": 62.22,
            "end": 64.78,
            "text": "团队刚组起来，大家表面上都很客气，"
        },
        {
            "start": 64.78,
            "end": 67.44,
            "text": "但彼此还不熟，也不太知道边界在哪。"
        },
        {
            "start": 67.44,
            "end": 70.72,
            "text": "目标理解未必一致，角色分工也未必真的清楚。"
        },
        {
            "start": 70.72,
            "end": 72.92,
            "text": "这个阶段，领导者最重要的工作，"
        },
        {
            "start": 72.92,
            "end": 75.12,
            "text": "不是喊口号激励，而是把目标、"
        },
        {
            "start": 75.12,
            "end": 76.48,
            "text": "规则和分工说清楚。"
        },
        {
            "start": 76.48,
            "end": 78.24,
            "text": "第二个阶段，磨合期。"
        },
        {
            "start": 78.24,
            "end": 79.9,
            "text": "这通常是最难的阶段。"
        },
        {
            "start": 79.9,
            "end": 81.78,
            "text": "大家开始出现分歧了。"
        },
        {
            "start": 81.78,
            "end": 84.32,
            "text": "做事方式不同，对标准的理解不同，"
        },
        {
            "start": 84.32,
            "end": 86.1,
            "text": "性格差异也慢慢冒出来。"
        },
        {
            "start": 86.1,
            "end": 88.4,
            "text": "很多团队的问题，不是出在人不行，"
        },
        {
            "start": 88.4,
            "end": 90.74,
            "text": "而是卡在这个阶段没有走过去。"
        },
        {
            "start": 90.74,
            "end": 92.19,
            "text": "这时候领导者要做的，"
        },
        {
            "start": 92.19,
            "end": 95.12,
            "text": "是帮助团队面对冲突，建立沟通机制，"
        },
        {
            "start": 95.12,
            "end": 96.94,
            "text": "推动大家形成基本共识。"
        },
        {
            "start": 96.94,
            "end": 98.94,
            "text": "不要一看到冲突就想压下去。"
        },
        {
            "start": 98.94,
            "end": 102.28,
            "text": "健康的冲突，很多时候反而是团队成长的开始。"
        },
        {
            "start": 102.28,
            "end": 104.3,
            "text": "第三个阶段，规范期。"
        },
        {
            "start": 104.3,
            "end": 106.86,
            "text": "团队慢慢找到节奏，知道怎么配合，"
        },
        {
            "start": 106.86,
            "end": 109.4,
            "text": "也知道什么是彼此认可的工作方式。"
        },
        {
            "start": 109.4,
            "end": 112.48,
            "text": "信任感开始建立，效率也会明显提升。"
        },
        {
            "start": 112.48,
            "end": 114.34,
            "text": "第四个阶段，高效期。"
        },
        {
            "start": 114.34,
            "end": 117.44,
            "text": "到了这个阶段，团队之间的协作已经比较顺了。"
        },
        {
            "start": 117.44,
            "end": 121.22,
            "text": "很多事情不用你事无巨细地盯，大家也能往前推进。"
        },
        {
            "start": 121.22,
            "end": 123.32,
            "text": "领导者这时候更重要的任务，"
        },
        {
            "start": 123.32,
            "end": 125.28,
            "text": "是校准方向、调配资源，"
        },
        {
            "start": 125.28,
            "end": 126.52,
            "text": "而不是天天盯动作。"
        },
        {
            "start": 126.52,
            "end": 130.24,
            "text": "你会发现，很多管理者一上来就抱怨团队没有动力。"
        },
        {
            "start": 130.24,
            "end": 132.44,
            "text": "但问题可能根本不是动力不够。"
        },
        {
            "start": 132.44,
            "end": 135.0,
            "text": "而是团队还在形成期和磨合期，"
        },
        {
            "start": 135.0,
            "end": 137.38,
            "text": "你却用高效期的标准要求他们。"
        },
        {
            "start": 137.38,
            "end": 140.98,
            "text": "阶段判断错了，后面的激励动作就很容易全部失效。"
        },
        {
            "start": 140.98,
            "end": 142.85999999999999,
            "text": "接下来，我们再看第二层。"
        },
        {
            "start": 142.86,
            "end": 144.62,
            "text": "为什么钱不是万能的？"
        },
        {
            "start": 144.62,
            "end": 146.0,
            "text": "这里有一个很经典的判断。"
        },
        {
            "start": 146.0,
            "end": 149.46,
            "text": "像薪资、福利、办公环境这些，当然重要。"
        },
        {
            "start": 149.46,
            "end": 151.34,
            "text": "少了它们，人会不满意。"
        },
        {
            "start": 151.34,
            "end": 154.62,
            "text": "但有了它们，人并不会自动变得特别有激情。"
        },
        {
            "start": 154.62,
            "end": 157.0,
            "text": "真正会让一个人更愿意投入、"
        },
        {
            "start": 157.0,
            "end": 160.16,
            "text": "更愿意主动承担、更愿意长期留下来的，"
        },
        {
            "start": 160.16,
            "end": 161.42,
            "text": "往往是另外一些东西。"
        },
        {
            "start": 161.42,
            "end": 163.84,
            "text": "比如成就感，被看见，被认可，"
        },
        {
            "start": 163.84,
            "end": 165.84,
            "text": "有成长空间，有责任感，"
        },
        {
            "start": 165.84,
            "end": 167.02,
            "text": "也有一定的自主权。"
        },
        {
            "start": 167.02,
            "end": 169.08,
            "text": "所以你会看到一个很现实的现象。"
        },
        {
            "start": 169.08,
            "end": 170.44,
            "text": "钱少了，人会走。"
        },
        {
            "start": 170.44,
            "end": 172.84,
            "text": "但钱多了，人不一定就更愿意拼。"
        },
        {
            "start": 172.84,
            "end": 175.7,
            "text": "这也是为什么，很多团队加了奖金以后，"
        },
        {
            "start": 175.7,
            "end": 178.28,
            "text": "短期有反应，长期却又回到原点。"
        },
        {
            "start": 178.28,
            "end": 181.3,
            "text": "因为奖金更像是刺激，不等于持续驱动。"
        },
        {
            "start": 181.76,
            "end": 184.02,
            "text": "如果工作的设计本身没有变化，"
        },
        {
            "start": 184.02,
            "end": 186.78,
            "text": "团队还是看不到成长、感受不到价值，"
        },
        {
            "start": 186.78,
            "end": 188.6,
            "text": "也没有被真正信任，"
        },
        {
            "start": 188.6,
            "end": 190.38,
            "text": "那动力很快就会衰减。"
        },
        {
            "start": 190.38,
            "end": 193.08,
            "text": "那真正驱动人的东西，到底是什么？"
        },
        {
            "start": 193.08,
            "end": 195.04,
            "text": "我建议你记住三个关键词。"
        },
        {
            "start": 195.04,
            "end": 196.3,
            "text": "第一个，自主。"
        },
        {
            "start": 196.3,
            "end": 201.06,
            "text": "不是说完全放任不管，而是结果清楚，方法上给空间。"
        },
        {
            "start": 201.06,
            "end": 205.38,
            "text": "你告诉团队要打到什么结果，但不要把每一步都管死。"
        },
        {
            "start": 205.38,
            "end": 207.88,
            "text": "一个人只有在觉得自己能做判断、"
        },
        {
            "start": 207.88,
            "end": 210.94,
            "text": "能做选择的时候，才更容易真正投入。"
        },
        {
            "start": 210.94,
            "end": 212.32,
            "text": "第二个，精进。"
        },
        {
            "start": 212.32,
            "end": 214.24,
            "text": "人天然会被成长感驱动。"
        },
        {
            "start": 214.24,
            "end": 216.6,
            "text": "尤其在 AI 时代，这一点更重要。"
        },
        {
            "start": 216.6,
            "end": 220.38,
            "text": "因为很多人一边好奇 AI，一边又担心自己会不会被淘汰。"
        },
        {
            "start": 220.38,
            "end": 223.2,
            "text": "如果你的组织能够提供新的学习机会，"
        },
        {
            "start": 223.2,
            "end": 225.1,
            "text": "让大家掌握新工具、新方法、"
        },
        {
            "start": 225.1,
            "end": 225.94,
            "text": "新协作方式，"
        },
        {
            "start": 225.94,
            "end": 227.82,
            "text": "这本身就是一种非常强的激励。"
        },
        {
            "start": 227.82,
            "end": 229.5,
            "text": "第三个，意义感。"
        },
        {
            "start": 229.5,
            "end": 231.14,
            "text": "团队不只是想完成任务，"
        },
        {
            "start": 231.14,
            "end": 232.28,
            "text": "很多人还想知道，"
        },
        {
            "start": 232.28,
            "end": 234.16,
            "text": "自己做的事到底有没有价值。"
        },
        {
            "start": 234.16,
            "end": 237.18,
            "text": "如果一个成员觉得自己每天只是重复动作，"
        },
        {
            "start": 237.18,
            "end": 238.58,
            "text": "没有创造真实结果，"
        },
        {
            "start": 238.58,
            "end": 240.58,
            "text": "那他很难长期保持高投入。"
        },
        {
            "start": 240.58,
            "end": 242.14,
            "text": "但如果他知道，"
        },
        {
            "start": 242.14,
            "end": 244.4,
            "text": "自己做的事真的帮助了客户，"
        },
        {
            "start": 244.4,
            "end": 246.6,
            "text": "推动了业务，或者让团队更强，"
        },
        {
            "start": 246.6,
            "end": 248.38,
            "text": "他的状态就会完全不一样。"
        },
        {
            "start": 248.38,
            "end": 252.1,
            "text": "所以，一个更完整的激励系统，至少要包含五个动作。"
        },
        {
            "start": 252.1,
            "end": 253.6,
            "text": "第一，给自主权。"
        },
        {
            "start": 253.6,
            "end": 256.08,
            "text": "把结果讲清楚，把边界讲清楚，"
        },
        {
            "start": 256.08,
            "end": 259.06,
            "text": "然后允许团队自己探索更好的方法。"
        },
        {
            "start": 259.06,
            "end": 260.5,
            "text": "第二，给成长机会。"
        },
        {
            "start": 260.88,
            "end": 262.98,
            "text": "不是只在年初说一句要成长，"
        },
        {
            "start": 262.98,
            "end": 265.2,
            "text": "而是要通过项目、训练、复盘、"
        },
        {
            "start": 265.2,
            "end": 267.1,
            "text": "轮岗或者 AI 学习机会，"
        },
        {
            "start": 267.1,
            "end": 269.06,
            "text": "让人真的感觉自己在变强。"
        },
        {
            "start": 269.06,
            "end": 270.68,
            "text": "第三，给意义感。"
        },
        {
            "start": 270.68,
            "end": 273.3,
            "text": "帮助团队看见，自己做的这件事，"
        },
        {
            "start": 273.3,
            "end": 275.54,
            "text": "到底和客户价值、业务目标、"
        },
        {
            "start": 275.54,
            "end": 277.16,
            "text": "组织未来有什么关系。"
        },
        {
            "start": 277.16,
            "end": 279.74,
            "text": "第四，给及时而具体的认可。"
        },
        {
            "start": 279.74,
            "end": 281.7,
            "text": "不是泛泛地说一句做得不错，"
        },
        {
            "start": 281.7,
            "end": 284.0,
            "text": "而是明确告诉对方，哪一件事做得好，"
        },
        {
            "start": 284.0,
            "end": 284.84,
            "text": "为什么好，"
        },
        {
            "start": 284.84,
            "end": 286.84,
            "text": "这样他才知道什么值得继续强化。"
        },
        {
            "start": 286.84,
            "end": 288.66,
            "text": "第五，给公平和透明。"
        },
        {
            "start": 288.66,
            "end": 291.12,
            "text": "如果一个团队觉得标准不一致，"
        },
        {
            "start": 291.12,
            "end": 293.3,
            "text": "奖励没有依据，评价全靠感觉，"
        },
        {
            "start": 293.3,
            "end": 295.88,
            "text": "那前面做的很多激励动作都会被抵消。"
        },
        {
            "start": 295.88,
            "end": 299.26,
            "text": "到这里，我们再把 AI 时代的新挑战放进来。"
        },
        {
            "start": 299.26,
            "end": 301.82,
            "text": "今天很多团队面对的，不只是任务压力。"
        },
        {
            "start": 301.82,
            "end": 304.82,
            "text": "还有一种越来越普遍的情绪，就是 AI 焦虑。"
        },
        {
            "start": 304.82,
            "end": 308.46,
            "text": "大家会想，我现在做的工作，会不会以后不需要我了？"
        },
        {
            "start": 308.46,
            "end": 310.0,
            "text": "我是不是学不会新工具？"
        },
        {
            "start": 310.0,
            "end": 312.9599999999999,
            "text": "我现在积累的能力，会不会突然贬值？"
        },
        {
            "start": 312.96,
            "end": 315.06,
            "text": "这些情绪如果不被正面处理，"
        },
        {
            "start": 315.06,
            "end": 317.6,
            "text": "就会直接影响士气、协作和执行力。"
        },
        {
            "start": 317.6,
            "end": 320.44,
            "text": "所以 AI 时代的激励，必须多做三件事。"
        },
        {
            "start": 320.44,
            "end": 322.44,
            "text": "第一，坦诚沟通变化。"
        },
        {
            "start": 322.44,
            "end": 324.24,
            "text": "不要假装什么都没有发生。"
        },
        {
            "start": 324.24,
            "end": 327.98,
            "text": "越是回避，团队越会自己脑补，焦虑只会更重。"
        },
        {
            "start": 327.98,
            "end": 329.44,
            "text": "第二，给出路径。"
        },
        {
            "start": 329.44,
            "end": 331.98,
            "text": "告诉大家该怎么学，先学什么，"
        },
        {
            "start": 331.98,
            "end": 334.94000000000005,
            "text": "哪些岗位会变化，哪些能力会升值，"
        },
        {
            "start": 334.94000000000005,
            "end": 336.94,
            "text": "让人知道自己可以往哪里走。"
        },
        {
            "start": 336.94,
            "end": 338.94,
            "text": "第三，重新定义价值。"
        },
        {
            "start": 338.94,
            "end": 340.36,
            "text": "要让团队看到，"
        },
        {
            "start": 340.36,
            "end": 342.52,
            "text": "AI 替代的更多是重复动作，"
        },
        {
            "start": 342.52,
            "end": 343.9,
            "text": "不是人的全部价值。"
        },
        {
            "start": 343.9,
            "end": 346.64,
            "text": "人的判断、创造、协作、建立信任，"
        },
        {
            "start": 346.64,
            "end": 348.12,
            "text": "这些反而会变得更重要。"
        },
        {
            "start": 348.12,
            "end": 349.44,
            "text": "好，我们来收一下。"
        },
        {
            "start": 349.44,
            "end": 351.84,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 351.84,
            "end": 355.08,
            "text": "第一，团队管理不能脱离团队发展阶段。"
        },
        {
            "start": 355.08,
            "end": 357.96000000000004,
            "text": "先判断你的团队在形成期、磨合期、"
        },
        {
            "start": 357.96000000000004,
            "end": 361.12,
            "text": "规范期还是高效期，再决定你该怎么带。"
        },
        {
            "start": 361.12,
            "end": 364.3,
            "text": "第二，钱很重要，但钱不是万能的。"
        },
        {
            "start": 364.3,
            "end": 368.68,
            "text": "真正持续驱动人的，是自主、成长、意义感、认可和公平。"
        },
        {
            "start": 368.68,
            "end": 370.44,
            "text": "第三，AI 时代的激励，"
        },
        {
            "start": 370.44,
            "end": 372.22,
            "text": "不能只谈绩效和奖金，"
        },
        {
            "start": 372.22,
            "end": 373.78,
            "text": "还要正面回应焦虑，"
        },
        {
            "start": 373.78,
            "end": 376.62,
            "text": "帮助团队把变化变成升级能力的机会。"
        },
        {
            "start": 376.62,
            "end": 380.42,
            "text": "如果你愿意，今天听完以后，你就可以先做一个动作。"
        },
        {
            "start": 380.42,
            "end": 382.36,
            "text": "挑一个你最重要的团队成员，"
        },
        {
            "start": 382.36,
            "end": 384.2,
            "text": "或者一个你最关键的小团队，"
        },
        {
            "start": 384.2,
            "end": 386.46,
            "text": "重新判断一下，他们现在最缺的，"
        },
        {
            "start": 386.46,
            "end": 388.32,
            "text": "到底是钱，还是清晰感、"
        },
        {
            "start": 388.36,
            "end": 389.88,
            "text": "成长感和被信任的感觉。"
        },
        {
            "start": 389.88,
            "end": 393.18,
            "text": "这个判断一变，你后面的管理动作就会完全不同。"
        },
        {
            "start": 393.18,
            "end": 393.86,
            "text": "我是 Lincoln。"
        },
        {
            "start": 393.86,
            "end": 397.24,
            "text": "我们下一节，继续聊绩效与目标，怎么真正落地。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 5.44,
        "index": 0
    },
    {
        "start": 5.44,
        "end": 58.18,
        "index": 1
    },
    {
        "start": 58.18,
        "end": 140.98,
        "index": 2
    },
    {
        "start": 140.98,
        "end": 190.38,
        "index": 3
    },
    {
        "start": 190.38,
        "end": 248.38,
        "index": 4
    },
    {
        "start": 248.38,
        "end": 295.88,
        "index": 5
    },
    {
        "start": 295.88,
        "end": 348.12,
        "index": 6
    },
    {
        "start": 348.12,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "看清楚团队真正被什么驱动，再把激励从单一的奖金机制升级成更完整的系统。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-03.html?entry={entry}", secondaryHref: "./lesson-leadership-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-02", coachSource: "./ai-coach.html?source=lesson-leadership-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于团队激励：钱不是万能的的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "团队激励：钱不是万能的", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
