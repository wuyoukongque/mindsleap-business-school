(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第3课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第3课：绩效与 OKR：目标怎么真正落地",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep50-performance-okr/slide_01.svg", initialSlideCount: "1 / 8", title: "当前内容：绩效与 OKR：目标怎么真正落地", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-04.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "领导力模型：领导者到底在做什么",
                "body": "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-leadership-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先分清工具场景，再谈绩效制度",
                "body": "KPI 适合清晰、重复、标准化的执行任务，OKR 更适合需要方向对齐、探索和协同的工作。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 时代不能只看忙不忙，要看有没有创造价值",
                "body": "执行速度被 AI 拉高以后，真正该被评价的，是结果、影响力和判断质量，而不是单纯工作量。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "持续反馈比年底打分更重要",
                "body": "高频的一对一、及时复盘和成长建议，比一年一次的大考更能帮助团队进步。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 3/14", "建议下一节：领导力模型：领导者到底在做什么", '也可以先整理这一节'], nextHref: "./lesson-leadership-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-03", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson3", audioSource: './assets/audio/leadership-ep50-performance-okr.mp3?v=20260412-leadership-03a', vttSrc: './assets/subtitles/leadership-ep50-performance-okr.vtt?v=20260412-leadership-03a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep50-performance-okr/slide_01.svg",
            "label": "绩效与 OKR：目标怎么真正落地",
            "caption": "这一节会帮助你系统理解：绩效与 OKR：目标怎么真正落地"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_02.svg",
            "label": "先看绩效为什么总让人头疼",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_03.svg",
            "label": "什么是 KPI",
            "caption": "KPI 适合守住基本盘，但如果用错场景，就会把团队带进只看指标、不看方向。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_04.svg",
            "label": "什么是 OKR",
            "caption": "OKR 的价值，不只是拉目标，更是让组织围绕同一方向协同。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_05.svg",
            "label": "KPI 和 OKR 怎么配合",
            "caption": "更成熟的做法，不是争论谁更先进，而是把两种工具放在合适的位置。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_06.svg",
            "label": "AI 时代怎么重新考核",
            "caption": "AI 时代最核心的转变，是从“做了多少”转向“创造了什么价值”。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_07.svg",
            "label": "持续反馈才是关键",
            "caption": "真正有效的绩效管理，不是年底打分，而是让反馈跟着变化一起发生。"
        },
        {
            "file": "leadership-ep50-performance-okr/slide_08.svg",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.28,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.28,
            "end": 3.38,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.38,
            "end": 5.38,
            "text": "今天这一节，我们来聊绩效管理。"
        },
        {
            "start": 5.38,
            "end": 8.92,
            "text": "这可能是所有管理话题里，最容易让人头疼的一件事。"
        },
        {
            "start": 8.92,
            "end": 10.74,
            "text": "考核太松，团队会散。"
        },
        {
            "start": 10.74,
            "end": 13.48,
            "text": "考核太紧，大家又可能只盯着数字，"
        },
        {
            "start": 13.48,
            "end": 16.593333333333334,
            "text": "不愿意做真正重要但短期看不见结果的事。"
        },
        {
            "start": 16.593333333333334,
            "end": 18.48,
            "text": "标准不清楚，会觉得不公平。"
        },
        {
            "start": 18.48,
            "end": 21.04,
            "text": "标准太死，又会把人越管越僵。"
        },
        {
            "start": 21.04,
            "end": 23.44,
            "text": "所以很多管理者都在纠结一件事。"
        },
        {
            "start": 23.44,
            "end": 26.58,
            "text": "绩效，到底该怎么做，才既能推动结果，"
        },
        {
            "start": 26.58,
            "end": 28.4,
            "text": "又不会把组织带偏？"
        },
        {
            "start": 28.4,
            "end": 31.279999999999998,
            "text": "今天这一节，我想帮你把这件事理一理。"
        },
        {
            "start": 31.279999999999998,
            "end": 33.34,
            "text": "先分清楚两种最常见的工具。"
        },
        {
            "start": 33.34,
            "end": 36.34,
            "text": "一个叫 KPI，也就是关键绩效指标。"
        },
        {
            "start": 36.34,
            "end": 39.26,
            "text": "一个叫 OKR，也就是目标与关键结果。"
        },
        {
            "start": 39.26,
            "end": 41.0,
            "text": "然后我们再往前走一步。"
        },
        {
            "start": 41.0,
            "end": 44.12,
            "text": "到了 AI 时代，绩效管理到底哪里要重做？"
        },
        {
            "start": 44.12,
            "end": 45.586666666666666,
            "text": "我们先看第一个问题。"
        },
        {
            "start": 45.586666666666666,
            "end": 47.96,
            "text": "为什么绩效管理总是让人不舒服？"
        },
        {
            "start": 48.419999999999995,
            "end": 50.42,
            "text": "因为它本质上不是在做表格。"
        },
        {
            "start": 50.42,
            "end": 52.82000000000001,
            "text": "它其实是在回答三个更深的问题。"
        },
        {
            "start": 52.82000000000001,
            "end": 55.12,
            "text": "第一，你到底想让团队追什么？"
        },
        {
            "start": 55.12,
            "end": 57.7,
            "text": "第二，你用什么标准来判断好坏？"
        },
        {
            "start": 57.7,
            "end": 60.8,
            "text": "第三，这套标准会把大家引向什么样的行为？"
        },
        {
            "start": 60.8,
            "end": 62.82,
            "text": "如果这三个问题没想清楚，"
        },
        {
            "start": 62.82,
            "end": 65.5,
            "text": "后面的制度再完整，也只是形式。"
        },
        {
            "start": 65.5,
            "end": 66.6,
            "text": "先说 KPI。"
        },
        {
            "start": 66.68,
            "end": 68.5,
            "text": "KPI 的逻辑其实很直接。"
        },
        {
            "start": 68.5,
            "end": 69.72,
            "text": "公司有目标，"
        },
        {
            "start": 69.72,
            "end": 71.98,
            "text": "再把目标拆成一组可量化的指标，"
        },
        {
            "start": 71.98,
            "end": 73.54,
            "text": "然后分到部门和个人。"
        },
        {
            "start": 73.54,
            "end": 75.33000000000001,
            "text": "比如销售看销售额，"
        },
        {
            "start": 75.33000000000001,
            "end": 77.26,
            "text": "客服看响应速度和满意度，"
        },
        {
            "start": 77.26,
            "end": 80.18,
            "text": "运营看转化率，财务看回款周期。"
        },
        {
            "start": 80.18,
            "end": 82.08,
            "text": "它的好处很明显。"
        },
        {
            "start": 82.08,
            "end": 83.64,
            "text": "清晰，直接，也容易执行。"
        },
        {
            "start": 83.64,
            "end": 87.46000000000001,
            "text": "一个人只要看到指标，通常就知道自己该朝哪里发力。"
        },
        {
            "start": 87.46000000000001,
            "end": 89.452,
            "text": "这也是为什么，很多成熟业务、"
        },
        {
            "start": 89.452,
            "end": 91.44,
            "text": "稳定业务、重复性比较高的工作，"
        },
        {
            "start": 91.56,
            "end": 92.94,
            "text": "非常适合用 KPI。"
        },
        {
            "start": 92.94,
            "end": 94.74,
            "text": "因为这类工作最大的重点，"
        },
        {
            "start": 94.74,
            "end": 95.88,
            "text": "本来就不是探索，"
        },
        {
            "start": 95.88,
            "end": 97.98,
            "text": "而是稳定交付和持续优化。"
        },
        {
            "start": 97.98,
            "end": 99.80000000000001,
            "text": "但 KPI 也有很明显的问题。"
        },
        {
            "start": 99.80000000000001,
            "end": 100.92,
            "text": "最大的问题是，"
        },
        {
            "start": 100.92,
            "end": 103.1,
            "text": "它很容易把人带到只看数字，"
        },
        {
            "start": 103.1,
            "end": 104.12,
            "text": "不看真正目标。"
        },
        {
            "start": 104.12,
            "end": 108.33999999999999,
            "text": "比如你把内容团队的指标定成每月必须产出二十篇文章。"
        },
        {
            "start": 108.33999999999999,
            "end": 111.92,
            "text": "那团队很可能会优先追求数量，而不是质量。"
        },
        {
            "start": 111.92,
            "end": 114.34,
            "text": "他们会想办法把二十篇写出来，"
        },
        {
            "start": 114.34,
            "end": 115.9,
            "text": "但不一定会去思考，"
        },
        {
            "start": 115.9,
            "end": 118.74,
            "text": "这些内容到底有没有真正影响客户、"
        },
        {
            "start": 118.74,
            "end": 120.58,
            "text": "有没有形成品牌价值。"
        },
        {
            "start": 120.58,
            "end": 124.48,
            "text": "再比如，你把销售团队的指标只定成成交额。"
        },
        {
            "start": 124.48,
            "end": 127.49000000000002,
            "text": "那就有可能出现为了签单而签单，"
        },
        {
            "start": 127.49000000000002,
            "end": 129.26,
            "text": "后面履约压力、客户质量、"
        },
        {
            "start": 129.26,
            "end": 130.78,
            "text": "回款风险都被忽略。"
        },
        {
            "start": 130.78,
            "end": 132.84,
            "text": "所以 KPI 不是不能用。"
        },
        {
            "start": 132.84,
            "end": 135.96,
            "text": "而是你要知道，它更像一个底线管理工具。"
        },
        {
            "start": 135.96,
            "end": 140.16,
            "text": "它擅长让组织稳定运行，但不擅长引导创新。"
        },
        {
            "start": 140.16,
            "end": 141.8,
            "text": "接下来，我们看 OKR。"
        },
        {
            "start": 141.8,
            "end": 143.825,
            "text": "OKR 的核心逻辑不一样。"
        },
        {
            "start": 143.825,
            "end": 145.96,
            "text": "它不是先问你要考核什么数字。"
        },
        {
            "start": 145.96,
            "end": 149.0,
            "text": "它先问的是，你到底想达成什么目标。"
        },
        {
            "start": 149.0,
            "end": 153.06,
            "text": "也就是先定一个明确、重要、甚至有一点挑战性的目标。"
        },
        {
            "start": 153.06,
            "end": 156.9,
            "text": "然后再用几个关键结果，判断你是不是正在接近这个目标。"
        },
        {
            "start": 156.9,
            "end": 159.4,
            "text": "所以 OKR 的重点，不只是量化。"
        },
        {
            "start": 159.4,
            "end": 161.41,
            "text": "更重要的是方向对齐。"
        },
        {
            "start": 161.41,
            "end": 162.66,
            "text": "它让每个人知道，"
        },
        {
            "start": 162.66,
            "end": 164.48,
            "text": "公司现在最重要的事是什么，"
        },
        {
            "start": 164.48,
            "end": 166.628,
            "text": "我做的工作为什么和这件事有关。"
        },
        {
            "start": 166.628,
            "end": 167.84,
            "text": "举个简单例子。"
        },
        {
            "start": 167.84,
            "end": 169.84,
            "text": "如果一个团队的目标是，"
        },
        {
            "start": 169.84,
            "end": 173.98,
            "text": "让品牌在目标市场里成为更被优先选择的那一个。"
        },
        {
            "start": 173.98,
            "end": 176.76,
            "text": "那关键结果可能是品牌搜索量提升，"
        },
        {
            "start": 176.76,
            "end": 179.38,
            "text": "自然流量提升，客户推荐意愿提升，"
        },
        {
            "start": 179.38,
            "end": 181.6,
            "text": "或者某个关键市场的认知度提高。"
        },
        {
            "start": 181.6,
            "end": 185.08,
            "text": "你会发现，这里的重点不是只完成某一个动作。"
        },
        {
            "start": 185.08,
            "end": 188.29999999999995,
            "text": "而是围绕一个更大的方向，去拉动组织协同。"
        },
        {
            "start": 188.3,
            "end": 190.48,
            "text": "所以 OKR 更适合什么场景？"
        },
        {
            "start": 190.48,
            "end": 193.38,
            "text": "更适合创新、探索、跨部门合作，"
        },
        {
            "start": 193.38,
            "end": 195.82,
            "text": "以及那些变化快、不确定性高的任务。"
        },
        {
            "start": 195.82,
            "end": 199.1,
            "text": "因为这类任务，最重要的不是把每一步都规定死。"
        },
        {
            "start": 199.1,
            "end": 202.86,
            "text": "而是让大家朝着同一个方向试、调、复盘、再推进。"
        },
        {
            "start": 202.86,
            "end": 205.84,
            "text": "那是不是说，有了 OKR，就不用 KPI 了？"
        },
        {
            "start": 205.84,
            "end": 206.96,
            "text": "我不建议这么理解。"
        },
        {
            "start": 206.96,
            "end": 209.66,
            "text": "真正更成熟的做法，往往不是二选一。"
        },
        {
            "start": 209.66,
            "end": 212.84,
            "text": "而是把这两种工具放在不同层级上一起用。"
        },
        {
            "start": 212.84,
            "end": 216.28,
            "text": "比如在公司层面、团队层面，用 OKR 来对齐方向。"
        },
        {
            "start": 216.28,
            "end": 219.34,
            "text": "让大家知道，这个季度最重要的三件事是什么。"
        },
        {
            "start": 219.34,
            "end": 223.08,
            "text": "而在执行层面、个人层面，用 KPI 守住基本盘。"
        },
        {
            "start": 223.08,
            "end": 225.54,
            "text": "比如交付时效、客户响应、成本控制、"
        },
        {
            "start": 225.54,
            "end": 226.24,
            "text": "质量稳定，"
        },
        {
            "start": 226.24,
            "end": 228.57500000000002,
            "text": "这些依然需要清楚的底线指标。"
        },
        {
            "start": 228.57500000000002,
            "end": 229.40000000000003,
            "text": "简单说。"
        },
        {
            "start": 229.40000000000003,
            "end": 230.7,
            "text": "OKR 负责拉高目标。"
        },
        {
            "start": 230.7,
            "end": 232.52,
            "text": "KPI 负责守住底线。"
        },
        {
            "start": 232.52,
            "end": 235.14,
            "text": "如果只有 KPI，组织容易越来越保守。"
        },
        {
            "start": 235.14,
            "end": 239.08,
            "text": "如果只有 OKR，组织又可能方向很激动，但执行落不下去。"
        },
        {
            "start": 239.08,
            "end": 241.0,
            "text": "两者配合，反而更稳。"
        },
        {
            "start": 241.0,
            "end": 243.68,
            "text": "讲到这里，我们再把 AI 时代放进来。"
        },
        {
            "start": 243.68,
            "end": 247.44000000000003,
            "text": "AI 一进来，绩效管理最先受到冲击的，就是评价标准。"
        },
        {
            "start": 247.44000000000003,
            "end": 251.22,
            "text": "以前很多岗位，会默认把工作量当成努力程度的证明。"
        },
        {
            "start": 251.22,
            "end": 254.5,
            "text": "你写了多少，做了多少，跑了多少，分析了多少。"
        },
        {
            "start": 254.5,
            "end": 258.12,
            "text": "但现在，很多执行动作都被 AI 大幅提速了。"
        },
        {
            "start": 258.12,
            "end": 261.52,
            "text": "一个人用 AI，一天可能能完成过去两三天的工作量。"
        },
        {
            "start": 261.52,
            "end": 265.43999999999994,
            "text": "那你还只是按工作量考核，就会立刻出现一个问题。"
        },
        {
            "start": 265.44,
            "end": 268.5,
            "text": "到底是在奖励忙碌，还是在奖励价值？"
        },
        {
            "start": 268.5,
            "end": 271.98,
            "text": "我更建议你把标准重新放到价值产出上。"
        },
        {
            "start": 271.98,
            "end": 273.24,
            "text": "不要只看做了多少。"
        },
        {
            "start": 273.24,
            "end": 275.84,
            "text": "更要看，做出来的东西有没有产生结果。"
        },
        {
            "start": 275.84,
            "end": 278.56,
            "text": "比如内容岗位，不只是看写了几篇，"
        },
        {
            "start": 278.56,
            "end": 280.66,
            "text": "而是看有没有带来流量、转化、"
        },
        {
            "start": 280.66,
            "end": 282.58,
            "text": "客户反馈和品牌影响。"
        },
        {
            "start": 282.58,
            "end": 285.2,
            "text": "比如分析岗位，不只是看做了多少报告，"
        },
        {
            "start": 285.2,
            "end": 288.44,
            "text": "而是看这些报告有没有帮助团队做出更好的决策。"
        },
        {
            "start": 288.44,
            "end": 291.0,
            "text": "比如销售、运营、产品，也一样。"
        },
        {
            "start": 291.0,
            "end": 292.42,
            "text": "AI 会让执行更容易。"
        },
        {
            "start": 292.42,
            "end": 295.48,
            "text": "那人的价值就会更多回到判断、整合、"
        },
        {
            "start": 295.48,
            "end": 298.26,
            "text": "创造，以及把结果真正落到业务上。"
        },
        {
            "start": 298.26,
            "end": 299.52,
            "text": "这也带来第二个变化。"
        },
        {
            "start": 299.52,
            "end": 302.3,
            "text": "绩效不能只评结果，还要开始看成长。"
        },
        {
            "start": 302.3,
            "end": 303.96,
            "text": "尤其是 AI 能力的成长。"
        },
        {
            "start": 303.96,
            "end": 305.66,
            "text": "因为在接下来几年，"
        },
        {
            "start": 305.66,
            "end": 307.72,
            "text": "一个成员会不会和 AI 协作，"
        },
        {
            "start": 307.72,
            "end": 310.88,
            "text": "几乎会直接影响他的效率边界和价值边界。"
        },
        {
            "start": 310.88,
            "end": 314.5,
            "text": "所以你完全可以把 AI 能力提升，放进发展目标里。"
        },
        {
            "start": 314.5,
            "end": 316.68000000000006,
            "text": "不是强行给每个人压一个死指标。"
        },
        {
            "start": 316.68000000000006,
            "end": 319.26,
            "text": "而是明确地告诉团队，学习新工具、"
        },
        {
            "start": 319.26,
            "end": 321.06,
            "text": "优化流程、沉淀新方法，"
        },
        {
            "start": 321.06,
            "end": 323.4133333333333,
            "text": "这些也属于值得被认可的成长。"
        },
        {
            "start": 323.4133333333333,
            "end": 325.3,
            "text": "这样做的意义，不只是提效。"
        },
        {
            "start": 325.3,
            "end": 327.86,
            "text": "更重要的是，它会释放一个很强的信号。"
        },
        {
            "start": 327.86,
            "end": 331.2,
            "text": "组织在鼓励升级，而不是让人用旧方法硬扛。"
        },
        {
            "start": 331.2,
            "end": 333.48,
            "text": "第三个变化，是反馈节奏。"
        },
        {
            "start": 333.48,
            "end": 337.26,
            "text": "传统绩效管理，很多时候是一年一次，或者半年一次。"
        },
        {
            "start": 337.26,
            "end": 339.52,
            "text": "但今天的环境变化太快了。"
        },
        {
            "start": 339.52,
            "end": 341.74,
            "text": "你等到年底再告诉一个人哪里做得好、"
        },
        {
            "start": 341.74,
            "end": 343.9,
            "text": "哪里做得不好，已经太晚了。"
        },
        {
            "start": 343.9,
            "end": 346.3,
            "text": "真正更有效的方式，是持续反馈。"
        },
        {
            "start": 346.3,
            "end": 349.18,
            "text": "可以是一周一次，也可以是两周一次。"
        },
        {
            "start": 349.18,
            "end": 351.66,
            "text": "不一定很正式，但要形成稳定节奏。"
        },
        {
            "start": 351.66,
            "end": 354.03999999999996,
            "text": "每次都围绕几个最重要的问题。"
        },
        {
            "start": 354.03999999999996,
            "end": 355.24,
            "text": "这段时间做得怎样？"
        },
        {
            "start": 355.24,
            "end": 356.36,
            "text": "卡点在哪里？"
        },
        {
            "start": 356.36,
            "end": 358.04,
            "text": "接下来最该聚焦什么？"
        },
        {
            "start": 358.04,
            "end": 359.52,
            "text": "需要我提供什么支持？"
        },
        {
            "start": 359.52,
            "end": 362.08666666666664,
            "text": "这样的反馈，不只是为了纠偏。"
        },
        {
            "start": 362.08666666666664,
            "end": 363.52,
            "text": "它本身也是一种激励。"
        },
        {
            "start": 363.52,
            "end": 366.48,
            "text": "因为它让成员知道，自己的工作被看见，"
        },
        {
            "start": 366.48,
            "end": 367.4,
            "text": "成长被关注，"
        },
        {
            "start": 367.4,
            "end": 370.02,
            "text": "而不是只在年底被统一打一次分。"
        },
        {
            "start": 370.02,
            "end": 371.58,
            "text": "AI 在这里也能帮上忙。"
        },
        {
            "start": 371.58,
            "end": 373.72,
            "text": "它可以帮助你整理过程数据，"
        },
        {
            "start": 373.72,
            "end": 376.26,
            "text": "回顾阶段成果，沉淀历史反馈，"
        },
        {
            "start": 376.26,
            "end": 380.18,
            "text": "甚至帮助你发现一个成员最近的成长趋势和风险信号。"
        },
        {
            "start": 380.18,
            "end": 384.12,
            "text": "但要记住，AI 能帮你做准备，不能替你做领导。"
        },
        {
            "start": 384.12,
            "end": 387.28,
            "text": "真正重要的那一步，还是你和成员之间的对话。"
        },
        {
            "start": 387.28,
            "end": 389.48,
            "text": "你怎么理解他，怎么帮助他，"
        },
        {
            "start": 389.48,
            "end": 391.66,
            "text": "怎么让他知道下一步该往哪走。"
        },
        {
            "start": 391.66,
            "end": 392.7,
            "text": "好，我们来收一下。"
        },
        {
            "start": 392.7,
            "end": 395.34,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 395.34,
            "end": 398.0,
            "text": "第一，KPI 和 OKR 不是谁替代谁。"
        },
        {
            "start": 398.0,
            "end": 402.78,
            "text": "KPI 更适合稳定执行型工作，OKR 更适合创新和协同型工作。"
        },
        {
            "start": 402.78,
            "end": 406.46,
            "text": "第二，AI 时代的绩效管理，不能再只看工作量。"
        },
        {
            "start": 406.46,
            "end": 410.13999999999993,
            "text": "更应该看价值产出、结果影响，以及人的判断质量。"
        },
        {
            "start": 410.14,
            "end": 414.04,
            "text": "第三，绩效管理真正有用的关键，不是年底打一次分。"
        },
        {
            "start": 414.04,
            "end": 417.26,
            "text": "而是持续反馈、及时校准、帮助成员成长。"
        },
        {
            "start": 417.26,
            "end": 419.26,
            "text": "如果你愿意，今天听完以后，"
        },
        {
            "start": 419.26,
            "end": 421.1,
            "text": "你可以先做一个很实际的动作。"
        },
        {
            "start": 421.1,
            "end": 424.88,
            "text": "把你团队里一个最常用的绩效指标拿出来，问自己一句。"
        },
        {
            "start": 424.88,
            "end": 427.0,
            "text": "这个指标，最后引导出来的，"
        },
        {
            "start": 427.0,
            "end": 428.82,
            "text": "到底是我真正想要的行为，"
        },
        {
            "start": 428.82,
            "end": 430.68,
            "text": "还是只是一个好看的数字？"
        },
        {
            "start": 430.68,
            "end": 432.9799999999999,
            "text": "很多绩效问题，答案就在这个问题里。"
        },
        {
            "start": 432.98,
            "end": 433.7,
            "text": "我是 Lincoln。"
        },
        {
            "start": 433.7,
            "end": 437.64,
            "text": "我们下一节，继续聊领导力模型，领导者到底在做什么。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.38,
        "index": 0
    },
    {
        "start": 3.38,
        "end": 65.5,
        "index": 1
    },
    {
        "start": 65.5,
        "end": 140.16,
        "index": 2
    },
    {
        "start": 140.16,
        "end": 206.96,
        "index": 3
    },
    {
        "start": 206.96,
        "end": 241.0,
        "index": 4
    },
    {
        "start": 241.0,
        "end": 331.2,
        "index": 5
    },
    {
        "start": 331.2,
        "end": 391.66,
        "index": 6
    },
    {
        "start": 391.66,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-04.html?entry={entry}", secondaryHref: "./lesson-leadership-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-03", coachSource: "./ai-coach.html?source=lesson-leadership-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于绩效与 OKR：目标怎么真正落地的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "绩效与 OKR：目标怎么真正落地", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
