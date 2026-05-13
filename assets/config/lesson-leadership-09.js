(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第9课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第9课：企业文化：看不见的组织操作系统",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep56-corporate-culture/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：企业文化：看不见的组织操作系统", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-10.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "远程协作：团队不在一起怎么高效工作",
                "body": "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先看文化，不要只看工具和战略",
                "body": "AI 转型里很多执行问题，深一层看并不是动作不够，而是文化没有给变化提供支撑。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "实验、学习、透明、AI 优先，是更适合这个时代的四种基因",
                "body": "这四种文化基因决定了组织能不能在不确定和高变化环境里保持探索、学习和协作能力。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "文化要靠机制和重复行为做出来",
                "body": "招聘、入职、仪式、激励和领导者行为，才是文化真正落地的地方，不是墙上的标语。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 9/14", "建议下一节：远程协作：团队不在一起怎么高效工作", '也可以先整理这一节'], nextHref: "./lesson-leadership-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-09", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson9", audioSource: './assets/audio/leadership-ep56-corporate-culture.mp3?v=20260412-leadership-09a', vttSrc: './assets/subtitles/leadership-ep56-corporate-culture.vtt?v=20260412-leadership-09a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep56-corporate-culture/slide_01.png",
            "label": "企业文化：看不见的组织操作系统",
            "caption": "这一节会帮助你系统理解：企业文化：看不见的组织操作系统"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_02.png",
            "label": "先看文化为什么更重要了",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_03.png",
            "label": "实验文化",
            "caption": "组织嘴上说创新没有用，真正决定实验文化能不能出现的，是团队敢不敢先试。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_04.png",
            "label": "持续学习文化",
            "caption": "持续学习不是补课，而是组织在快速变化中保持更新能力的基础设施。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_05.png",
            "label": "透明与信任文化",
            "caption": "透明不是“说得多”，而是让组织真的看见目标、判断过程和真实问题。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_06.png",
            "label": "AI 优先思维",
            "caption": "真正的 AI 优先思维，是一种先重看流程、再决定如何协作的新习惯。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_07.png",
            "label": "文化如何真正落地",
            "caption": "文化不是背景板，而是组织每天在重复什么、默认什么、奖励什么。"
        },
        {
            "file": "leadership-ep56-corporate-culture/slide_08.png",
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
            "end": 2.54,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.54,
            "end": 3.7,
            "text": "今天这一节，"
        },
        {
            "start": 3.7,
            "end": 7.64,
            "text": "我们来聊一个真正决定组织能不能长期跑起来的东西。"
        },
        {
            "start": 7.64,
            "end": 10.06,
            "text": "不是战略，不是流程，不是工具。"
        },
        {
            "start": 10.06,
            "end": 10.98,
            "text": "而是文化。"
        },
        {
            "start": 10.98,
            "end": 12.68,
            "text": "很多人都听过一句话。"
        },
        {
            "start": 12.68,
            "end": 14.66,
            "text": "文化会把战略当早餐吃掉。"
        },
        {
            "start": 14.66,
            "end": 16.5,
            "text": "它的意思是，再好的战略，"
        },
        {
            "start": 16.5,
            "end": 17.82,
            "text": "如果没有文化支撑，"
        },
        {
            "start": 17.82,
            "end": 19.72,
            "text": "最后也很难真正执行下去。"
        },
        {
            "start": 19.72,
            "end": 22.4,
            "text": "到了 AI 时代，这件事只会变得更重要。"
        },
        {
            "start": 22.4,
            "end": 25.56,
            "text": "因为你推动的变化，不只是多上一个工具。"
        },
        {
            "start": 25.56,
            "end": 28.82,
            "text": "而是工作方式、思维方式、协作方式都在变。"
        },
        {
            "start": 28.82,
            "end": 32.04,
            "text": "如果文化跟不上，这些变化就很难真正落地。"
        },
        {
            "start": 32.04,
            "end": 34.42,
            "text": "那 AI 时代更需要什么样的文化。"
        },
        {
            "start": 34.42,
            "end": 36.98,
            "text": "我想把它收成四个关键文化基因。"
        },
        {
            "start": 36.98,
            "end": 38.4,
            "text": "第一个，是实验文化。"
        },
        {
            "start": 38.4,
            "end": 42.36,
            "text": "AI 时代变化太快，没有人一开始就知道最好的做法是什么。"
        },
        {
            "start": 42.36,
            "end": 44.34,
            "text": "所以组织必须允许试。"
        },
        {
            "start": 44.34,
            "end": 47.14000000000001,
            "text": "而实验文化最核心的一点，不是鼓励乱试。"
        },
        {
            "start": 47.14000000000001,
            "end": 48.98,
            "text": "而是允许有价值的失败。"
        },
        {
            "start": 48.98,
            "end": 52.68,
            "text": "也就是说，一个尝试最后没有成功，并不代表它没有价值。"
        },
        {
            "start": 52.68,
            "end": 55.94,
            "text": "如果这个过程帮助团队更快知道什么不该做，"
        },
        {
            "start": 55.94,
            "end": 58.38,
            "text": "什么更值得做，它就是有价值的学习。"
        },
        {
            "start": 58.38,
            "end": 62.24,
            "text": "很多组织的问题在于，嘴上说创新，实际上极度怕错。"
        },
        {
            "start": 62.24,
            "end": 65.33333333333333,
            "text": "一犯错就追责，一试新东西就担心失败。"
        },
        {
            "start": 65.33333333333333,
            "end": 68.78,
            "text": "这种文化下，没有人会真的愿意去探索 AI 的新用法。"
        },
        {
            "start": 68.78,
            "end": 71.28,
            "text": "所以真正的实验文化，要做三件事。"
        },
        {
            "start": 71.28,
            "end": 73.28,
            "text": "第一，领导者自己先做实验，"
        },
        {
            "start": 73.28,
            "end": 74.62,
            "text": "而且愿意公开讲结果，"
        },
        {
            "start": 74.62,
            "end": 76.08,
            "text": "包括不成功的部分。"
        },
        {
            "start": 76.08,
            "end": 78.0,
            "text": "第二，给团队留实验空间。"
        },
        {
            "start": 78.0,
            "end": 82.2,
            "text": "不管是时间、预算还是试点机会，都要让大家真的能试。"
        },
        {
            "start": 82.2,
            "end": 86.24,
            "text": "第三，奖励有价值的尝试，而不只是奖励最后成功的结果。"
        },
        {
            "start": 86.24,
            "end": 89.02,
            "text": "第二个文化基因，是持续学习文化。"
        },
        {
            "start": 89.02,
            "end": 90.86,
            "text": "AI 技术变化非常快。"
        },
        {
            "start": 90.86,
            "end": 94.06,
            "text": "今天学会的方法，半年后可能就已经需要更新。"
        },
        {
            "start": 94.06,
            "end": 96.76,
            "text": "如果组织不把学习当成日常能力，"
        },
        {
            "start": 96.76,
            "end": 99.23999999999998,
            "text": "而只是偶尔培训一次，很快就会掉队。"
        },
        {
            "start": 99.24,
            "end": 102.63999999999999,
            "text": "真正的持续学习文化，不只是说要学习。"
        },
        {
            "start": 102.64,
            "end": 104.28,
            "text": "而是把学习制度化。"
        },
        {
            "start": 104.28,
            "end": 106.58000000000001,
            "text": "比如固定给团队留学习时间。"
        },
        {
            "start": 106.58000000000001,
            "end": 108.72,
            "text": "比如把知识分享做成常态。"
        },
        {
            "start": 108.72,
            "end": 112.64,
            "text": "比如给课程、书籍、工具和外部学习资源留预算。"
        },
        {
            "start": 112.64,
            "end": 113.82,
            "text": "还有一点很重要。"
        },
        {
            "start": 113.82,
            "end": 116.06,
            "text": "学习本身也可以被 AI 增强。"
        },
        {
            "start": 116.06,
            "end": 120.1,
            "text": "AI 可以帮助不同角色的人找到更适合自己的学习内容，"
        },
        {
            "start": 120.1,
            "end": 122.46666666666664,
            "text": "也可以在学习过程中随时答疑、"
        },
        {
            "start": 122.46666666666664,
            "end": 123.35999999999999,
            "text": "测试和陪练。"
        },
        {
            "start": 123.36,
            "end": 126.16,
            "text": "所以持续学习文化，不只是学 AI。"
        },
        {
            "start": 126.16,
            "end": 128.54000000000002,
            "text": "也是学会用 AI 来帮助学习。"
        },
        {
            "start": 128.54000000000002,
            "end": 131.1,
            "text": "第三个文化基因，是透明与信任文化。"
        },
        {
            "start": 131.1,
            "end": 133.46,
            "text": "AI 时代的组织会越来越扁平，"
        },
        {
            "start": 133.46,
            "end": 135.56,
            "text": "也越来越依赖成员自己做判断。"
        },
        {
            "start": 135.56,
            "end": 137.74,
            "text": "而自主判断的前提，是信任。"
        },
        {
            "start": 137.74,
            "end": 139.56,
            "text": "信任的前提，是透明。"
        },
        {
            "start": 139.56,
            "end": 141.72,
            "text": "透明至少包括三件事。"
        },
        {
            "start": 141.72,
            "end": 143.0,
            "text": "第一，信息透明。"
        },
        {
            "start": 143.0,
            "end": 145.02000000000004,
            "text": "组织的目标、进展和问题，"
        },
        {
            "start": 145.02000000000004,
            "end": 147.90000000000003,
            "text": "不应该只停留在少数管理者的会议室里。"
        },
        {
            "start": 147.90000000000003,
            "end": 149.36,
            "text": "第二，决策透明。"
        },
        {
            "start": 149.36,
            "end": 152.0,
            "text": "重要决策为什么这样做，考虑过什么，"
        },
        {
            "start": 152.0,
            "end": 154.3,
            "text": "放弃了什么，团队应该看得见。"
        },
        {
            "start": 154.3,
            "end": 155.72,
            "text": "第三，反馈透明。"
        },
        {
            "start": 155.72,
            "end": 158.18,
            "text": "问题是可以被拿出来讨论的，"
        },
        {
            "start": 158.18,
            "end": 160.7,
            "text": "质疑和建议是可以被认真对待的。"
        },
        {
            "start": 160.7,
            "end": 163.32,
            "text": "员工真正感受到被尊重、被信任，"
        },
        {
            "start": 163.32,
            "end": 165.12,
            "text": "才会更愿意承担责任，"
        },
        {
            "start": 165.12,
            "end": 167.48,
            "text": "也更愿意在变化里主动行动。"
        },
        {
            "start": 167.48,
            "end": 171.86,
            "text": "尤其在 AI 转型期，员工对岗位、角色和未来会有很多疑虑。"
        },
        {
            "start": 171.86,
            "end": 174.46,
            "text": "越透明，焦虑越少，配合度越高。"
        },
        {
            "start": 174.46,
            "end": 177.28000000000003,
            "text": "第四个文化基因，是 AI 优先思维。"
        },
        {
            "start": 177.28000000000003,
            "end": 179.38,
            "text": "这里不是说什么事情都交给 AI。"
        },
        {
            "start": 179.38,
            "end": 181.08,
            "text": "而是一种新的习惯。"
        },
        {
            "start": 181.08,
            "end": 183.32,
            "text": "面对任务时，先问自己一句，"
        },
        {
            "start": 183.32,
            "end": 185.2,
            "text": "AI 能不能帮我更快、"
        },
        {
            "start": 185.2,
            "end": 186.82,
            "text": "更好地完成其中一部分。"
        },
        {
            "start": 186.82,
            "end": 189.64,
            "text": "这种思维和过去最大的不同是，"
        },
        {
            "start": 189.64,
            "end": 192.7,
            "text": "过去很多人拿到任务就直接按老办法做。"
        },
        {
            "start": 192.7,
            "end": 196.14,
            "text": "现在更好的做法，是先重新看一遍流程，"
        },
        {
            "start": 196.14,
            "end": 198.98,
            "text": "再判断哪些环节值得借助 AI。"
        },
        {
            "start": 198.98,
            "end": 201.04,
            "text": "怎么把这种思维培养出来。"
        },
        {
            "start": 201.04,
            "end": 202.96,
            "text": "比如在会议里固定多问一句，"
        },
        {
            "start": 202.96,
            "end": 205.38,
            "text": "这件事有没有 AI 可以帮忙的环节。"
        },
        {
            "start": 205.38,
            "end": 207.72,
            "text": "比如定期让团队回顾工作流，"
        },
        {
            "start": 207.72,
            "end": 210.0,
            "text": "重新找一遍可以引入 AI 的地方。"
        },
        {
            "start": 210.0,
            "end": 213.5,
            "text": "也比如公开表彰那些用 AI 做出更好方法的人。"
        },
        {
            "start": 213.5,
            "end": 215.5,
            "text": "讲到这里，我们还要提醒一点。"
        },
        {
            "start": 215.5,
            "end": 217.89,
            "text": "文化不是写在墙上的一句口号。"
        },
        {
            "start": 217.89,
            "end": 221.32,
            "text": "它必须通过具体的机制和重复的行为被做出来。"
        },
        {
            "start": 221.32,
            "end": 224.32,
            "text": "真正能让文化落地的，至少有五个抓手。"
        },
        {
            "start": 224.32,
            "end": 225.48,
            "text": "第一，招聘。"
        },
        {
            "start": 225.48,
            "end": 228.16,
            "text": "你招进来的人，是否认同这种文化，"
        },
        {
            "start": 228.16,
            "end": 230.36,
            "text": "本身就决定了文化能不能持续。"
        },
        {
            "start": 230.36,
            "end": 232.08,
            "text": "第二，入职。"
        },
        {
            "start": 232.08,
            "end": 233.8,
            "text": "新人第一周接触到什么，"
        },
        {
            "start": 233.8,
            "end": 236.82,
            "text": "往往就会默认什么是这个组织真正重视的。"
        },
        {
            "start": 236.82,
            "end": 238.54000000000002,
            "text": "第三，日常仪式。"
        },
        {
            "start": 238.54000000000002,
            "end": 241.70499999999998,
            "text": "比如分享会、实验复盘、文化回顾，"
        },
        {
            "start": 241.70499999999998,
            "end": 243.4,
            "text": "这些高频重复的动作，"
        },
        {
            "start": 243.4,
            "end": 245.08,
            "text": "会把文化慢慢做实。"
        },
        {
            "start": 245.08,
            "end": 246.74,
            "text": "第四，激励机制。"
        },
        {
            "start": 246.74,
            "end": 249.52,
            "text": "你奖励什么，组织就会越来越像什么。"
        },
        {
            "start": 249.52,
            "end": 251.14,
            "text": "第五，领导者行为。"
        },
        {
            "start": 251.14,
            "end": 253.16,
            "text": "文化不是靠文件传下去的。"
        },
        {
            "start": 253.16,
            "end": 255.66,
            "text": "更多时候，是领导者自己怎么做，"
        },
        {
            "start": 255.66,
            "end": 257.5400000000001,
            "text": "组织就会慢慢学成什么样。"
        },
        {
            "start": 257.5400000000001,
            "end": 258.48,
            "text": "好，我们来收一下。"
        },
        {
            "start": 258.48,
            "end": 261.26,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 261.26,
            "end": 264.18,
            "text": "第一，AI 时代更需要四个文化基因，"
        },
        {
            "start": 264.18,
            "end": 267.15999999999997,
            "text": "实验、持续学习、透明与信任、"
        },
        {
            "start": 267.16,
            "end": 268.24,
            "text": "AI 优先思维。"
        },
        {
            "start": 268.24,
            "end": 270.5,
            "text": "第二，文化真正影响的，"
        },
        {
            "start": 270.5,
            "end": 272.0,
            "text": "不是口号好不好听，"
        },
        {
            "start": 272.0,
            "end": 274.56,
            "text": "而是组织在变化里到底敢不敢试、"
        },
        {
            "start": 274.56,
            "end": 276.52,
            "text": "愿不愿学、能不能协作、"
        },
        {
            "start": 276.52,
            "end": 277.86,
            "text": "会不会主动升级。"
        },
        {
            "start": 277.86,
            "end": 280.14,
            "text": "第三，文化不会自动形成，"
        },
        {
            "start": 280.14,
            "end": 283.296,
            "text": "它需要通过招聘、入职、日常仪式、"
        },
        {
            "start": 283.296,
            "end": 286.22,
            "text": "激励机制和领导者行为不断被强化。"
        },
        {
            "start": 286.22,
            "end": 289.76,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 289.76,
            "end": 291.46,
            "text": "看看你现在的团队里，"
        },
        {
            "start": 291.46,
            "end": 293.02,
            "text": "最强的文化基因是什么，"
        },
        {
            "start": 293.02,
            "end": 294.32,
            "text": "最弱的又是什么。"
        },
        {
            "start": 294.32,
            "end": 295.12,
            "text": "你会发现，"
        },
        {
            "start": 295.12,
            "end": 298.025,
            "text": "很多执行问题表面上看是动作不够，"
        },
        {
            "start": 298.025,
            "end": 300.62,
            "text": "深一层其实是文化没有支撑住。"
        },
        {
            "start": 300.62,
            "end": 301.52,
            "text": "我是 Lincoln。"
        },
        {
            "start": 301.52,
            "end": 304.3,
            "text": "我们下一节，继续聊远程与混合协作，"
        },
        {
            "start": 304.3,
            "end": 307.54,
            "text": "看看 AI 怎么帮助分布式团队真正高效工作。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.54,
        "index": 0
    },
    {
        "start": 2.54,
        "end": 36.98,
        "index": 1
    },
    {
        "start": 36.98,
        "end": 86.24,
        "index": 2
    },
    {
        "start": 86.24,
        "end": 128.54,
        "index": 3
    },
    {
        "start": 128.54,
        "end": 174.46,
        "index": 4
    },
    {
        "start": 174.46,
        "end": 215.5,
        "index": 5
    },
    {
        "start": 215.5,
        "end": 258.48,
        "index": 6
    },
    {
        "start": 258.48,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-10.html?entry={entry}", secondaryHref: "./lesson-leadership-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-09", coachSource: "./ai-coach.html?source=lesson-leadership-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于企业文化：看不见的组织操作系统的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "企业文化：看不见的组织操作系统", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
