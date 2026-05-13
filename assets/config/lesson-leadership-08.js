(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第8课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第8课：敏捷组织：组织怎么更灵活",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep55-agile-organization/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：敏捷组织：组织怎么更灵活", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-09.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "企业文化：看不见的组织操作系统",
                "body": "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先承认组织效率的基本单位正在变小",
                "body": "AI 放大了个人与小团队的产出，所以很多过去必须靠大团队完成的事，现在可以由更小的团队完成。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "平台与小队的组合，比单一大部门更适合快速变化环境",
                "body": "平台负责共享能力和效率，小队负责贴近业务与快速响应，两者结合更能兼顾规模与灵活。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "真正的敏捷组织，要连管理方式一起重写",
                "body": "层级、角色、能力中心、协作流程和数据决策都要一起更新，组织才会真的变灵活。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 8/14", "建议下一节：企业文化：看不见的组织操作系统", '也可以先整理这一节'], nextHref: "./lesson-leadership-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-08", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson8", audioSource: './assets/audio/leadership-ep55-agile-organization.mp3?v=20260412-leadership-08a', vttSrc: './assets/subtitles/leadership-ep55-agile-organization.vtt?v=20260412-leadership-08a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep55-agile-organization/slide_01.png",
            "label": "敏捷组织：组织怎么更灵活",
            "caption": "这一节会帮助你系统理解：敏捷组织：组织怎么更灵活"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_02.png",
            "label": "先看经典结构为什么不够用了",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_03.png",
            "label": "AI 时代的核心变化",
            "caption": "组织设计真正要重写的起点，是先承认“小团队也能做大事”已经成为现实。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_04.png",
            "label": "平台加小队",
            "caption": "平台负责共用能力，小队负责贴近业务和快速行动。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_05.png",
            "label": "动态组队与 AI 连接器",
            "caption": "更灵活的组织，不只是换一个结构图，而是让协作关系也变得更流动。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_06.png",
            "label": "五个组织设计建议",
            "caption": "组织升级不是一个动作，而是一组管理设计一起更新。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_07.png",
            "label": "回到你的组织",
            "caption": "结构图只是表面，真正决定组织效率的，是结构背后的协作逻辑。"
        },
        {
            "file": "leadership-ep55-agile-organization/slide_08.png",
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
            "start": 1.04,
            "end": 3.04,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.04,
            "end": 3.92,
            "text": "今天这一节，"
        },
        {
            "start": 3.92,
            "end": 7.32,
            "text": "我们来聊一个很多管理者正在重新思考的问题。"
        },
        {
            "start": 7.32,
            "end": 10.4,
            "text": "在 AI 时代，组织到底应该怎么搭，"
        },
        {
            "start": 10.4,
            "end": 13.48,
            "text": "才会更灵活、更高效，也更能适应变化。"
        },
        {
            "start": 13.48,
            "end": 15.7,
            "text": "先看三种经典的组织结构。"
        },
        {
            "start": 15.7,
            "end": 17.82,
            "text": "第一种，是职能型组织。"
        },
        {
            "start": 17.82,
            "end": 21.56,
            "text": "按销售、市场、技术、财务这样的功能来分部门。"
        },
        {
            "start": 21.56,
            "end": 23.4,
            "text": "它的好处是专业化强。"
        },
        {
            "start": 23.4,
            "end": 24.84,
            "text": "但问题也很明显，"
        },
        {
            "start": 24.84,
            "end": 26.98,
            "text": "就是部门之间很容易形成边界，"
        },
        {
            "start": 26.98,
            "end": 28.82,
            "text": "跨部门协作会变慢。"
        },
        {
            "start": 28.82,
            "end": 30.7,
            "text": "第二种，是事业部型组织。"
        },
        {
            "start": 30.7,
            "end": 33.2,
            "text": "按产品线、业务线或者市场来分。"
        },
        {
            "start": 33.2,
            "end": 35.4,
            "text": "它的好处是反应快，自主性强。"
        },
        {
            "start": 35.4,
            "end": 37.42,
            "text": "但代价是资源容易重复，"
        },
        {
            "start": 37.42,
            "end": 40.7,
            "text": "很多能力要在不同事业部里各自建设一遍。"
        },
        {
            "start": 40.7,
            "end": 42.56,
            "text": "第三种，是矩阵型组织。"
        },
        {
            "start": 42.56,
            "end": 44.92,
            "text": "也就是一边有职能线，一边有项目线。"
        },
        {
            "start": 44.92,
            "end": 47.9,
            "text": "它的好处是资源可以共享，调配也更灵活。"
        },
        {
            "start": 47.9,
            "end": 51.18,
            "text": "但问题是双线汇报很容易让人陷入拉扯。"
        },
        {
            "start": 51.18,
            "end": 54.22,
            "text": "这些结构放到过去的工业时代都很合理。"
        },
        {
            "start": 54.22,
            "end": 57.7,
            "text": "但 AI 时代，组织出现了一个非常关键的变化。"
        },
        {
            "start": 57.7,
            "end": 61.92,
            "text": "小团队，也可以做成过去只有大团队才能做成的事。"
        },
        {
            "start": 61.92,
            "end": 64.1,
            "text": "过去你可能需要一个几十人的团队，"
        },
        {
            "start": 64.1,
            "end": 66.38,
            "text": "才能把一个业务线真正跑起来。"
        },
        {
            "start": 66.38,
            "end": 68.7,
            "text": "现在一个五到十人的精英小团队，"
        },
        {
            "start": 68.7,
            "end": 70.72,
            "text": "加上 AI 工具和共享平台，"
        },
        {
            "start": 70.72,
            "end": 72.98,
            "text": "就可能做出过去几十人的产出。"
        },
        {
            "start": 72.98,
            "end": 75.4,
            "text": "这意味着，组织设计的思路要变。"
        },
        {
            "start": 75.4,
            "end": 76.7,
            "text": "不是一味做大。"
        },
        {
            "start": 76.7,
            "end": 79.16,
            "text": "而是更扁平、更灵活、更小单元化。"
        },
        {
            "start": 79.16,
            "end": 83.5,
            "text": "我们可以把这种组织形态理解成，AI 增强型的敏捷组织。"
        },
        {
            "start": 83.5,
            "end": 84.96,
            "text": "它有四个很重要的特征。"
        },
        {
            "start": 84.96,
            "end": 87.6,
            "text": "第一个特征，是小而精的自主团队。"
        },
        {
            "start": 87.6,
            "end": 90.46,
            "text": "团队人数不必很多，但能力要尽量闭环。"
        },
        {
            "start": 90.46,
            "end": 94.54,
            "text": "从策划到执行到分析，都尽量能在小团队内部完成。"
        },
        {
            "start": 94.54,
            "end": 99.24,
            "text": "每个人也都不是单纯靠自己工作，而是会用 AI 去放大产出。"
        },
        {
            "start": 99.24,
            "end": 102.42,
            "text": "第二个特征，是平台加小队的架构。"
        },
        {
            "start": 102.42,
            "end": 104.18,
            "text": "公司层面提供共享平台。"
        },
        {
            "start": 104.18,
            "end": 108.08,
            "text": "比如技术平台、数据平台、AI 工具平台和基础设施。"
        },
        {
            "start": 108.08,
            "end": 111.0,
            "text": "而前线的小队在这些平台之上自主运作。"
        },
        {
            "start": 111.0,
            "end": 112.9,
            "text": "平台解决的是效率问题。"
        },
        {
            "start": 112.9,
            "end": 115.28,
            "text": "它避免每个团队重复造轮子。"
        },
        {
            "start": 115.28,
            "end": 117.36,
            "text": "小队解决的是灵活性问题。"
        },
        {
            "start": 117.36,
            "end": 120.2,
            "text": "它让组织更快响应市场和客户变化。"
        },
        {
            "start": 120.2,
            "end": 122.28,
            "text": "第三个特征，是动态组队。"
        },
        {
            "start": 122.28,
            "end": 125.3,
            "text": "不是所有人永远固定在一个稳定部门里不动。"
        },
        {
            "start": 125.3,
            "end": 128.08,
            "text": "很多项目可以围绕目标来临时组队。"
        },
        {
            "start": 128.08,
            "end": 130.5,
            "text": "项目结束以后，人再回到自己的能力池。"
        },
        {
            "start": 130.5,
            "end": 132.72,
            "text": "这样组织不会被固定结构绑死。"
        },
        {
            "start": 132.72,
            "end": 135.64,
            "text": "第四个特征，是 AI 成为组织的连接器。"
        },
        {
            "start": 135.64,
            "end": 139.8,
            "text": "过去不同团队之间经常信息不通，需要大量会议来对齐。"
        },
        {
            "start": 139.8,
            "end": 142.26,
            "text": "现在 AI 可以帮组织做知识整理、"
        },
        {
            "start": 142.26,
            "end": 145.32,
            "text": "信息整合、项目跟踪和跨部门协作支持。"
        },
        {
            "start": 145.32,
            "end": 147.34,
            "text": "这会显著降低沟通成本。"
        },
        {
            "start": 147.34,
            "end": 150.58,
            "text": "接下来，我们讲五个更实际的组织设计建议。"
        },
        {
            "start": 150.58,
            "end": 152.38,
            "text": "第一，减少管理层级。"
        },
        {
            "start": 152.38,
            "end": 156.36,
            "text": "AI 让信息流动和决策支持变快了。"
        },
        {
            "start": 156.36,
            "end": 158.1,
            "text": "很多过去需要层层汇报、"
        },
        {
            "start": 158.1,
            "end": 160.78,
            "text": "层层传递的事情，现在可以通过仪表盘、"
        },
        {
            "start": 160.78,
            "end": 163.1,
            "text": "自动摘要和智能提醒更直接地完成。"
        },
        {
            "start": 163.1,
            "end": 165.88,
            "text": "这意味着，你未必还需要那么多层管理。"
        },
        {
            "start": 165.88,
            "end": 167.64,
            "text": "扁平化不再只是理想。"
        },
        {
            "start": 167.64,
            "end": 170.3,
            "text": "AI 让它在更多场景下变得可行。"
        },
        {
            "start": 170.3,
            "end": 172.56,
            "text": "第二，重新定义管理者的角色。"
        },
        {
            "start": 172.56,
            "end": 175.14,
            "text": "传统管理者花很多时间在信息传递、"
        },
        {
            "start": 175.14,
            "end": 177.1,
            "text": "进度追踪和资源协调上。"
        },
        {
            "start": 177.1,
            "end": 179.56,
            "text": "这些工作，AI 会越来越能帮忙承担。"
        },
        {
            "start": 179.56,
            "end": 181.54,
            "text": "那管理者更应该做什么。"
        },
        {
            "start": 181.54,
            "end": 185.18,
            "text": "答案是方向引导、人才培养、跨团队对齐和复杂判断。"
        },
        {
            "start": 185.18,
            "end": 190.08,
            "text": "管理者要从过去偏重管事，慢慢转向更重视管人和管方向。"
        },
        {
            "start": 190.08,
            "end": 192.16,
            "text": "第三，建立 AI 能力中心。"
        },
        {
            "start": 192.16,
            "end": 195.22,
            "text": "这里不是说要再搭一个很庞大的新部门。"
        },
        {
            "start": 195.22,
            "end": 197.82,
            "text": "而是组织里最好有一个小而强的团队，"
        },
        {
            "start": 197.82,
            "end": 200.54,
            "text": "专门负责评估工具、制定规范、"
        },
        {
            "start": 200.96,
            "end": 203.11999999999998,
            "text": "培训内部团队、沉淀最佳实践。"
        },
        {
            "start": 203.12,
            "end": 206.02,
            "text": "这个团队更像赋能型的内部服务中心。"
        },
        {
            "start": 206.02,
            "end": 209.02,
            "text": "它的价值不是自己把所有 AI 项目都做掉。"
        },
        {
            "start": 209.02,
            "end": 212.32,
            "text": "而是帮助其他团队都更快把 AI 用起来。"
        },
        {
            "start": 212.32,
            "end": 215.3,
            "text": "第四，设计适合远程和异步协作的流程。"
        },
        {
            "start": 215.7,
            "end": 218.94,
            "text": "AI 时代很多协作已经不需要所有人同时在线。"
        },
        {
            "start": 218.94,
            "end": 221.22,
            "text": "会议纪要、待办整理、项目跟进、"
        },
        {
            "start": 221.52,
            "end": 221.94,
            "text": "知识同步，"
        },
        {
            "start": 221.94,
            "end": 224.6,
            "text": "这些事情都可以借助 AI 变得更流畅。"
        },
        {
            "start": 224.6,
            "end": 226.8,
            "text": "这意味着，组织流程也要更新。"
        },
        {
            "start": 226.8,
            "end": 229.16,
            "text": "不是所有事情都要靠开会推进。"
        },
        {
            "start": 229.16,
            "end": 232.12,
            "text": "不是所有问题都要等大家到齐才能处理。"
        },
        {
            "start": 232.12,
            "end": 234.64,
            "text": "第五，推动数据驱动的组织决策。"
        },
        {
            "start": 234.64,
            "end": 237.12,
            "text": "AI 能帮助组织更好地看见数据。"
        },
        {
            "start": 237.12,
            "end": 240.52,
            "text": "比如团队效率、资源分配、项目瓶颈和协作问题。"
        },
        {
            "start": 240.52,
            "end": 242.16,
            "text": "但这里要记住一件事。"
        },
        {
            "start": 242.16,
            "end": 243.98,
            "text": "数据回答的是，发生了什么。"
        },
        {
            "start": 243.98,
            "end": 246.66,
            "text": "真正的判断回答的是，接下来该怎么办。"
        },
        {
            "start": 246.66,
            "end": 249.14,
            "text": "所以 AI 能加强组织的感知能力。"
        },
        {
            "start": 249.14,
            "end": 252.02,
            "text": "但真正的取舍和方向，还是要回到管理者。"
        },
        {
            "start": 252.02,
            "end": 253.08,
            "text": "好，我们来收一下。"
        },
        {
            "start": 253.08,
            "end": 255.6,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 255.6,
            "end": 258.46,
            "text": "第一，AI 时代最重要的组织变化，"
        },
        {
            "start": 258.46,
            "end": 260.28,
            "text": "是小团队也能做大事，"
        },
        {
            "start": 260.28,
            "end": 263.24,
            "text": "所以组织可以变得更扁平、更灵活、"
        },
        {
            "start": 263.24,
            "end": 264.8,
            "text": "更小单元化。"
        },
        {
            "start": 264.8,
            "end": 267.1,
            "text": "第二，更适合这个时代的组织形态，"
        },
        {
            "start": 267.1,
            "end": 269.96,
            "text": "往往具备四个特征，小而精的自主团队、"
        },
        {
            "start": 270.1,
            "end": 271.66,
            "text": "平台加小队、动态组队，"
        },
        {
            "start": 271.66,
            "end": 273.7,
            "text": "以及 AI 作为连接器。"
        },
        {
            "start": 273.7,
            "end": 275.62,
            "text": "第三，真正的组织升级，"
        },
        {
            "start": 275.62,
            "end": 276.8,
            "text": "不只是改结构图，"
        },
        {
            "start": 276.8,
            "end": 279.46,
            "text": "而是同时重写管理层级、管理者角色、"
        },
        {
            "start": 279.46,
            "end": 282.52,
            "text": "AI 能力中心、协作流程和数据决策方式。"
        },
        {
            "start": 283.0,
            "end": 285.84,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 285.84,
            "end": 287.52,
            "text": "看看你现在的组织里，"
        },
        {
            "start": 287.52,
            "end": 288.7,
            "text": "有没有一个业务单元，"
        },
        {
            "start": 288.7,
            "end": 291.2,
            "text": "适合先用五到十人的小团队，"
        },
        {
            "start": 291.2,
            "end": 292.88,
            "text": "加上 AI 和共享平台，"
        },
        {
            "start": 292.88,
            "end": 294.84,
            "text": "重新设计一次协作方式。"
        },
        {
            "start": 294.84,
            "end": 297.4,
            "text": "你会发现，很多组织效率问题，"
        },
        {
            "start": 297.4,
            "end": 299.0,
            "text": "本质上不是人不努力，"
        },
        {
            "start": 299.0,
            "end": 301.48,
            "text": "而是结构已经跟不上这个时代了。"
        },
        {
            "start": 301.48,
            "end": 302.08,
            "text": "我是 Lincoln。"
        },
        {
            "start": 302.08,
            "end": 304.2,
            "text": "我们下一节，继续聊企业文化，"
        },
        {
            "start": 304.2,
            "end": 307.24,
            "text": "为什么它才是组织真正看不见的操作系统。"
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
        "end": 54.22,
        "index": 1
    },
    {
        "start": 54.22,
        "end": 99.24,
        "index": 2
    },
    {
        "start": 99.24,
        "end": 132.72,
        "index": 3
    },
    {
        "start": 132.72,
        "end": 150.58,
        "index": 4
    },
    {
        "start": 150.58,
        "end": 252.02,
        "index": 5
    },
    {
        "start": 252.02,
        "end": 253.08,
        "index": 6
    },
    {
        "start": 253.08,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-09.html?entry={entry}", secondaryHref: "./lesson-leadership-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-08", coachSource: "./ai-coach.html?source=lesson-leadership-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于敏捷组织：组织怎么更灵活的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "敏捷组织：组织怎么更灵活", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
