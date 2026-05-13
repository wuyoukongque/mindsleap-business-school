(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第11课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第11课：AI 辅助决策：领导者该怎么用 AI 想问题",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep58-ai-decision-making/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 辅助决策：领导者该怎么用 AI 想问题", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-12.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "冲突管理：有分歧，不一定是坏事",
                "body": "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-12.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 真正变成决策辅助者，而不是新的噪音来源。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先分决策类型，再谈 AI 能帮多少",
                "body": "不把决策类型分清楚，就很容易一边过度依赖 AI，一边又在真正该依赖它的地方没有用起来。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 更像一个高强度决策辅助者，而不是责任承担者",
                "body": "它最擅长帮你准备、挑战和模拟，但真正拍板和承担后果的仍然应该是人。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 越强，人的判断力越重要",
                "body": "因为当信息处理被放大以后，真正有价值的差异，就会更多落在判断、取舍和责任感上。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 11/14", "建议下一节：冲突管理：有分歧，不一定是坏事", '也可以先整理这一节'], nextHref: "./lesson-leadership-12.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-11", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson11", audioSource: './assets/audio/leadership-ep58-ai-decision-making.mp3?v=20260412-leadership-11a', vttSrc: './assets/subtitles/leadership-ep58-ai-decision-making.vtt?v=20260412-leadership-11a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep58-ai-decision-making/slide_01.png",
            "label": "AI 辅助决策：领导者该怎么用 AI 想问题",
            "caption": "这一节会帮助你系统理解：AI 辅助决策：领导者该怎么用 AI 想问题"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_02.png",
            "label": "先看 AI 决策的边界",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_03.png",
            "label": "三类决策",
            "caption": "AI 辅助决策的前提，不是先相信它，而是先把决策类型分清楚。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_04.png",
            "label": "更合理的人机分工",
            "caption": "不要问 AI 能不能替你做整个决策，更该问每一步最适合谁来做。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_05.png",
            "label": "AI 辅助决策三法",
            "caption": "AI 最有价值的时候，通常不是代替你决定，而是帮你在决定前把问题看清。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_06.png",
            "label": "四个注意事项",
            "caption": "AI 最危险的不是给不出答案，而是让人误以为“有答案就等于可以不负责”。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_07.png",
            "label": "判断力仍然属于人",
            "caption": "AI 能放大信息处理能力，但真正决定方向的，仍然是人的判断力。"
        },
        {
            "file": "leadership-ep58-ai-decision-making/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.02,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.42,
            "end": 2.8,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.8,
            "end": 6.26,
            "text": "今天这一节，我们来聊一个对决策者最关键的问题。"
        },
        {
            "start": 6.26,
            "end": 9.28,
            "text": "AI 到底能不能帮你做出更好的决策。"
        },
        {
            "start": 9.28,
            "end": 10.76,
            "text": "我的答案是，可以。"
        },
        {
            "start": 10.76,
            "end": 12.58,
            "text": "但它有非常明确的边界。"
        },
        {
            "start": 12.58,
            "end": 15.88,
            "text": "很多讨论 AI 决策的时候，容易走到两个极端。"
        },
        {
            "start": 15.88,
            "end": 17.62,
            "text": "一个极端是过度相信，"
        },
        {
            "start": 18.1,
            "end": 19.7,
            "text": "觉得只要把数据喂进去，"
        },
        {
            "start": 19.7,
            "end": 21.24,
            "text": "AI 就会给出最优答案。"
        },
        {
            "start": 21.24,
            "end": 23.36,
            "text": "另一个极端是完全不信，"
        },
        {
            "start": 23.36,
            "end": 26.48,
            "text": "觉得决策永远只能靠人的经验和直觉。"
        },
        {
            "start": 26.48,
            "end": 29.46,
            "text": "真正更稳的做法，是先把决策分类型，"
        },
        {
            "start": 29.46,
            "end": 31.62,
            "text": "再决定人和 AI 怎么配合。"
        },
        {
            "start": 31.62,
            "end": 33.66,
            "text": "我们可以先把决策分成三类。"
        },
        {
            "start": 33.66,
            "end": 36.1,
            "text": "第一类，是数据密集型决策。"
        },
        {
            "start": 36.1,
            "end": 40.78,
            "text": "这类决策的关键，在于要处理大量数据、模式和变化趋势。"
        },
        {
            "start": 40.78,
            "end": 44.96,
            "text": "比如库存补货、预算分配、广告投放、需求预测。"
        },
        {
            "start": 44.96,
            "end": 47.72,
            "text": "这类事情，AI 通常会比人更强。"
        },
        {
            "start": 47.72,
            "end": 51.68,
            "text": "因为它能同时看更多数据，也能更快发现规律。"
        },
        {
            "start": 51.68,
            "end": 54.38,
            "text": "第二类，是规则密集型决策。"
        },
        {
            "start": 54.38,
            "end": 57.98,
            "text": "也就是有明确标准、流程和边界的决策。"
        },
        {
            "start": 57.98,
            "end": 61.14,
            "text": "比如报销审核、合同条款检查、合规判断。"
        },
        {
            "start": 61.14,
            "end": 63.48,
            "text": "AI 在这类事情上也很擅长。"
        },
        {
            "start": 63.48,
            "end": 67.32,
            "text": "它不会漏项，也不会因为疲劳和情绪影响执行。"
        },
        {
            "start": 67.32,
            "end": 69.96,
            "text": "第三类，是判断密集型决策。"
        },
        {
            "start": 69.96,
            "end": 72.04,
            "text": "这类决策往往没有标准答案。"
        },
        {
            "start": 72.04,
            "end": 76.5,
            "text": "它需要综合考虑战略、价值观、关系、时机、风险和取舍。"
        },
        {
            "start": 76.5,
            "end": 78.42,
            "text": "比如要不要进入一个新市场，"
        },
        {
            "start": 78.42,
            "end": 80.16,
            "text": "要不要换一个关键合伙人，"
        },
        {
            "start": 80.16,
            "end": 81.86,
            "text": "要不要在现在裁员。"
        },
        {
            "start": 81.86,
            "end": 84.4,
            "text": "这一类决策，目前仍然应该由人主导。"
        },
        {
            "start": 84.4,
            "end": 87.12,
            "text": "因为这里真正重要的，不只是算出来什么。"
        },
        {
            "start": 87.12,
            "end": 89.68,
            "text": "而是你愿意承担什么，放弃什么，"
        },
        {
            "start": 89.68,
            "end": 91.82,
            "text": "以及你怎么看这个不确定的未来。"
        },
        {
            "start": 91.82,
            "end": 94.48,
            "text": "所以更好的分工原则就很清楚了。"
        },
        {
            "start": 94.48,
            "end": 96.96,
            "text": "数据密集型，AI 主导，人来监督。"
        },
        {
            "start": 97.42,
            "end": 99.76,
            "text": "规则密集型，AI 执行，人来处理例外。"
        },
        {
            "start": 100.28,
            "end": 102.96,
            "text": "判断密集型，人做决策，AI 做支持。"
        },
        {
            "start": 102.96,
            "end": 106.44,
            "text": "但现实里，大多数重要决策都不是单一类型。"
        },
        {
            "start": 106.44,
            "end": 108.76,
            "text": "它往往是三种类型混在一起。"
        },
        {
            "start": 108.76,
            "end": 110.68,
            "text": "比如要不要投资一个项目。"
        },
        {
            "start": 110.68,
            "end": 115.1,
            "text": "里面既有数据分析，也有规则审查，也有最后的战略判断。"
        },
        {
            "start": 115.1,
            "end": 119.1,
            "text": "所以更成熟的做法，不是问 AI 能不能替你做整个决策。"
        },
        {
            "start": 119.1,
            "end": 122.78,
            "text": "而是把决策拆开，看每一步最适合谁来做。"
        },
        {
            "start": 122.78,
            "end": 125.68,
            "text": "接下来我想讲三个 AI 辅助决策的具体用法。"
        },
        {
            "start": 125.68,
            "end": 128.18,
            "text": "第一个，是让 AI 做决策准备。"
        },
        {
            "start": 128.18,
            "end": 130.12,
            "text": "也就是在你真正拍板之前，"
        },
        {
            "start": 130.12,
            "end": 132.62,
            "text": "让 AI 帮你先把信息、选项、"
        },
        {
            "start": 132.62,
            "end": 134.22,
            "text": "背景和案例整理出来。"
        },
        {
            "start": 134.22,
            "end": 136.32,
            "text": "比如你在考虑进入一个新市场。"
        },
        {
            "start": 136.32,
            "end": 139.74,
            "text": "AI 可以先帮你整理市场规模、竞争格局、"
        },
        {
            "start": 139.74,
            "end": 142.4,
            "text": "政策门槛、典型案例和失败教训。"
        },
        {
            "start": 142.4,
            "end": 146.62,
            "text": "它能把原本需要几天甚至几周的信息准备，压缩得更快。"
        },
        {
            "start": 146.62,
            "end": 149.0,
            "text": "第二个，是让 AI 做反方挑战。"
        },
        {
            "start": 149.0,
            "end": 151.32,
            "text": "很多决策者一旦心里有了倾向，"
        },
        {
            "start": 151.32,
            "end": 153.64,
            "text": "就会下意识地去找支持自己的信息。"
        },
        {
            "start": 153.64,
            "end": 155.26,
            "text": "这就是典型的确认偏误。"
        },
        {
            "start": 155.26,
            "end": 158.74,
            "text": "AI 在这里的价值，是可以充当一个不碍于情面的反方。"
        },
        {
            "start": 158.74,
            "end": 160.42,
            "text": "你可以直接让它告诉你，"
        },
        {
            "start": 160.42,
            "end": 163.02,
            "text": "如果这个判断是错的，最可能错在哪里。"
        },
        {
            "start": 163.02,
            "end": 164.94,
            "text": "有哪些反面证据被忽略了。"
        },
        {
            "start": 164.94,
            "end": 166.26,
            "text": "最坏情况会怎么发生。"
        },
        {
            "start": 166.26,
            "end": 168.68,
            "text": "第三个，是让 AI 做情景模拟。"
        },
        {
            "start": 168.68,
            "end": 172.92,
            "text": "很多重大决策不是看一个答案，而是看不同情景下会怎样。"
        },
        {
            "start": 172.92,
            "end": 174.28,
            "text": "乐观情况下会怎样。"
        },
        {
            "start": 174.28,
            "end": 175.56,
            "text": "悲观情况下会怎样。"
        },
        {
            "start": 175.56,
            "end": 177.68,
            "text": "如果竞争对手也跟进会怎样。"
        },
        {
            "start": 177.68,
            "end": 180.06,
            "text": "如果关键假设不成立会怎样。"
        },
        {
            "start": 180.06,
            "end": 182.52,
            "text": "AI 很适合帮助你把这些情景铺开，"
        },
        {
            "start": 182.52,
            "end": 184.44,
            "text": "让你更全面地看风险与回报。"
        },
        {
            "start": 184.44,
            "end": 187.12,
            "text": "但在这里，我也想提醒四个很重要的注意事项。"
        },
        {
            "start": 187.12,
            "end": 189.84,
            "text": "第一，不要让 AI 只证明你想听的东西。"
        },
        {
            "start": 189.84,
            "end": 192.08,
            "text": "如果你的问题本身就是单向的，"
        },
        {
            "start": 192.08,
            "end": 194.76,
            "text": "AI 很容易顺着你的倾向给你越来越多支持。"
        },
        {
            "start": 194.76,
            "end": 197.86,
            "text": "所以更好的提问方式，是同时要求正反两面。"
        },
        {
            "start": 197.86,
            "end": 199.87999999999997,
            "text": "第二，不要把 AI 当挡箭牌。"
        },
        {
            "start": 199.88,
            "end": 202.34,
            "text": "AI 给的是参考，不是责任承担者。"
        },
        {
            "start": 202.34,
            "end": 204.48,
            "text": "真正负责的人，永远还是你。"
        },
        {
            "start": 204.48,
            "end": 205.98,
            "text": "第三，要注意时效性。"
        },
        {
            "start": 205.98,
            "end": 208.86,
            "text": "如果你的决策高度依赖实时市场变化，"
        },
        {
            "start": 208.86,
            "end": 211.12,
            "text": "那就不能只靠模型里原有的知识。"
        },
        {
            "start": 211.12,
            "end": 213.0,
            "text": "你必须补充最新信息。"
        },
        {
            "start": 213.0,
            "end": 215.9,
            "text": "第四，越重大的决策，人的比重越大。"
        },
        {
            "start": 215.9,
            "end": 219.12,
            "text": "日常运营层面的很多事情，可以高度依赖 AI。"
        },
        {
            "start": 219.12,
            "end": 220.56,
            "text": "但涉及组织方向、"
        },
        {
            "start": 220.56,
            "end": 222.7,
            "text": "生死取舍和长期责任的决策，"
        },
        {
            "start": 222.7,
            "end": 223.95999999999998,
            "text": "AI 只能做辅助。"
        },
        {
            "start": 223.96,
            "end": 226.32,
            "text": "最后，我们再讲一下判断力本身。"
        },
        {
            "start": 226.32,
            "end": 229.04,
            "text": "AI 时代，人的核心价值不会消失。"
        },
        {
            "start": 229.04,
            "end": 231.2,
            "text": "它会更集中地落在判断力上。"
        },
        {
            "start": 231.2,
            "end": 232.46,
            "text": "判断力怎么来。"
        },
        {
            "start": 232.46,
            "end": 233.78,
            "text": "第一，来自复盘。"
        },
        {
            "start": 233.78,
            "end": 236.26,
            "text": "你要回头看自己过去做过的决策，"
        },
        {
            "start": 236.26,
            "end": 238.7,
            "text": "哪里对了，哪里错了，忽略了什么，"
        },
        {
            "start": 238.7,
            "end": 240.32,
            "text": "被什么偏见影响了。"
        },
        {
            "start": 240.32,
            "end": 242.23999999999995,
            "text": "第二，来自广泛的知识积累。"
        },
        {
            "start": 242.24,
            "end": 245.44,
            "text": "判断力不是只靠某一个行业经验就够了。"
        },
        {
            "start": 245.44,
            "end": 249.3,
            "text": "它很大程度上来自跨领域的见识、案例和对人性的理解。"
        },
        {
            "start": 249.3,
            "end": 251.28000000000003,
            "text": "第三，来自刻意练习。"
        },
        {
            "start": 251.28000000000003,
            "end": 254.16,
            "text": "不是每天都在做决定，就一定会有更强判断力。"
        },
        {
            "start": 254.16,
            "end": 258.7,
            "text": "关键在于你有没有把决策当成一种可以被训练的能力去练。"
        },
        {
            "start": 258.7,
            "end": 259.9599999999999,
            "text": "第四，来自谦逊。"
        },
        {
            "start": 259.96,
            "end": 262.94,
            "text": "真正好的决策者，不是觉得自己永远对。"
        },
        {
            "start": 262.94,
            "end": 264.64,
            "text": "而是知道自己哪里可能错，"
        },
        {
            "start": 264.64,
            "end": 267.46,
            "text": "也愿意主动寻找不同观点来挑战自己。"
        },
        {
            "start": 267.46,
            "end": 268.64,
            "text": "好，我们来收一下。"
        },
        {
            "start": 268.64,
            "end": 271.24,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 271.24,
            "end": 273.0,
            "text": "第一，AI 能帮助决策，"
        },
        {
            "start": 273.0,
            "end": 274.46,
            "text": "但前提是你先分清楚，"
        },
        {
            "start": 274.46,
            "end": 276.7,
            "text": "什么是数据密集型、规则密集型，"
        },
        {
            "start": 276.7,
            "end": 278.1,
            "text": "什么是判断密集型。"
        },
        {
            "start": 278.1,
            "end": 280.08,
            "text": "第二，AI 最适合做的三件事，"
        },
        {
            "start": 280.08,
            "end": 282.89999999999986,
            "text": "是决策准备、反方挑战和情景模拟。"
        },
        {
            "start": 282.9,
            "end": 286.46,
            "text": "第三，越重要的决策，越不能把责任外包给 AI。"
        },
        {
            "start": 286.46,
            "end": 290.44,
            "text": "真正属于人的核心价值，仍然是判断、取舍和承担结果。"
        },
        {
            "start": 290.44,
            "end": 293.8,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 293.8,
            "end": 297.28,
            "text": "把你最近在考虑的一个重要决策拆成几个步骤。"
        },
        {
            "start": 297.28,
            "end": 299.78,
            "text": "看看哪些步骤更适合交给 AI，"
        },
        {
            "start": 299.78,
            "end": 302.06,
            "text": "哪些步骤必须由你自己来判断。"
        },
        {
            "start": 302.06,
            "end": 304.94,
            "text": "你会发现，很多时候不是 AI 不够强，"
        },
        {
            "start": 304.94,
            "end": 307.84,
            "text": "而是我们还没有把人机决策分工想清楚。"
        },
        {
            "start": 308.21999999999997,
            "end": 308.9,
            "text": "我是 Lincoln。"
        },
        {
            "start": 308.9,
            "end": 310.7,
            "text": "我们下一节，继续聊冲突管理，"
        },
        {
            "start": 310.7,
            "end": 313.52,
            "text": "看看在变化更多、协作更复杂的时代，"
        },
        {
            "start": 313.52,
            "end": 315.14,
            "text": "领导者怎么处理分歧。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.8,
        "index": 0
    },
    {
        "start": 2.8,
        "end": 31.62,
        "index": 1
    },
    {
        "start": 31.62,
        "end": 91.82,
        "index": 2
    },
    {
        "start": 91.82,
        "end": 122.78,
        "index": 3
    },
    {
        "start": 122.78,
        "end": 184.44,
        "index": 4
    },
    {
        "start": 184.44,
        "end": 223.96,
        "index": 5
    },
    {
        "start": 223.96,
        "end": 268.64,
        "index": 6
    },
    {
        "start": 268.64,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-12.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 真正变成决策辅助者，而不是新的噪音来源。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-12.html?entry={entry}", secondaryHref: "./lesson-leadership-12.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-11", coachSource: "./ai-coach.html?source=lesson-leadership-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 辅助决策：领导者该怎么用 AI 想问题的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 辅助决策：领导者该怎么用 AI 想问题", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-12.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
