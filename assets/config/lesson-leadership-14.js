(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership14 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第14课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第14课：案例：一家企业如何真正把 AI 用起来",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep61-case-ai-adoption/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：一家企业如何真正把 AI 用起来", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-14", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-leadership.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：纳德拉如何重塑微软",
                "body": "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "案例：一家企业如何真正把 AI 用起来",
                "body": "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-leadership.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先选准场景，再谈全面推广",
                "body": "痛点明确、数据可用、见效快、风险可控，是很多企业做 AI 试点时最稳的四个标准。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "流程设计决定 AI 最终能不能真正出效果",
                "body": "同样的工具，流程设计对了会放大能力，流程设计错了就只会放大失望。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 最终该释放的，是人的更高价值工作时间",
                "body": "真正好的 AI 落地，不只是节省成本，而是把组织更多时间放回判断、关系和创造力。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了整个领导力模块。建议回到模块页复盘完整章节结构。", meta: ["当前完成：AI时代领导力 14/14", "你已完成领导力模块", '也可以先整理这一节'], nextHref: "./module-leadership.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-14", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson14", audioSource: './assets/audio/leadership-ep61-case-ai-adoption.mp3?v=20260413-leadership-14a', vttSrc: './assets/subtitles/leadership-ep61-case-ai-adoption.vtt?v=20260413-leadership-14a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep61-case-ai-adoption/slide_01.png",
            "label": "案例：一家企业如何真正把 AI 用起来",
            "caption": "这一节会帮助你系统理解：案例：一家企业如何真正把 AI 用起来"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_02.png",
            "label": "先看为什么这个案例有代表性",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_03.png",
            "label": "摸底和选方向",
            "caption": "做 AI 试点最稳的起点，不是选最炫的场景，而是先选最容易跑出结果的场景。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_04.png",
            "label": "小范围试点",
            "caption": "AI 落地最怕要求一步到位，更稳的做法，是允许先不完美，再持续把流程调顺。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_05.png",
            "label": "推广和深化",
            "caption": "很多企业最大的问题，不是试点做不出，而是在推广阶段太着急、太平均。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_06.png",
            "label": "常态化运营",
            "caption": "AI 常态化的标志，不是工具还在不在，而是组织是不是已经开始默认这样工作。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_07.png",
            "label": "真正值得带走的经营启发",
            "caption": "AI 落地做得好，最终改变的不是工具使用率，而是组织把时间花在哪里。"
        },
        {
            "file": "leadership-ep61-case-ai-adoption/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.98,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 0.98,
            "end": 2.74,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.74,
            "end": 5.48,
            "text": "今天这一节，是领导力模块的最后一课。"
        },
        {
            "start": 5.48,
            "end": 9.08,
            "text": "上一节我们看了微软这样的大公司怎么做 AI 转型。"
        },
        {
            "start": 9.08,
            "end": 12.82,
            "text": "这一节，我们换一个更贴近大多数企业现实的视角。"
        },
        {
            "start": 12.82,
            "end": 16.16,
            "text": "一家公司到底是怎么把 AI 真正用起来的。"
        },
        {
            "start": 16.16,
            "end": 18.84,
            "text": "这个案例不是某一家公司的逐字还原。"
        },
        {
            "start": 18.84,
            "end": 21.64,
            "text": "而是综合了很多中型企业的真实路径，"
        },
        {
            "start": 21.64,
            "end": 23.48,
            "text": "把最典型的过程抽出来。"
        },
        {
            "start": 23.48,
            "end": 24.76,
            "text": "它很有代表性。"
        },
        {
            "start": 24.76,
            "end": 26.52,
            "text": "因为大多数企业推进 AI，"
        },
        {
            "start": 26.52,
            "end": 29.18,
            "text": "不会从一开始就有特别强的技术团队，"
        },
        {
            "start": 29.18,
            "end": 30.94,
            "text": "也不会一下子全面铺开。"
        },
        {
            "start": 30.94,
            "end": 32.6,
            "text": "它通常会经历四个阶段。"
        },
        {
            "start": 32.6,
            "end": 34.2,
            "text": "先摸底和选方向。"
        },
        {
            "start": 34.2,
            "end": 35.62,
            "text": "再小范围试点。"
        },
        {
            "start": 35.62,
            "end": 36.64,
            "text": "接着逐步推广。"
        },
        {
            "start": 36.64,
            "end": 38.86,
            "text": "最后变成日常工作方式的一部分。"
        },
        {
            "start": 38.86,
            "end": 41.48,
            "text": "先看第一阶段，摸底和选方向。"
        },
        {
            "start": 41.48,
            "end": 43.32,
            "text": "这家公司大约两百人，"
        },
        {
            "start": 43.32,
            "end": 44.58,
            "text": "老板知道要推动 AI，"
        },
        {
            "start": 44.58,
            "end": 47.04,
            "text": "但一开始并不知道应该从哪里切入。"
        },
        {
            "start": 47.04,
            "end": 48.98,
            "text": "大家列出来很多想法。"
        },
        {
            "start": 48.98,
            "end": 52.08,
            "text": "客服、方案撰写、数据分析、招聘筛选、"
        },
        {
            "start": 52.3,
            "end": 54.08,
            "text": "财务报表，看起来都能做。"
        },
        {
            "start": 54.08,
            "end": 57.12,
            "text": "但问题是，资源不可能同时投到所有地方。"
        },
        {
            "start": 57.12,
            "end": 60.3,
            "text": "所以真正关键的第一步，不是有多少想法。"
        },
        {
            "start": 60.3,
            "end": 61.04,
            "text": "而是怎么选。"
        },
        {
            "start": 61.04,
            "end": 62.82,
            "text": "最后他们选了两个场景。"
        },
        {
            "start": 62.82,
            "end": 63.86,
            "text": "一个是客服。"
        },
        {
            "start": 64.3,
            "end": 65.16,
            "text": "一个是方案撰写。"
        },
        {
            "start": 65.16,
            "end": 66.54,
            "text": "为什么选这两个。"
        },
        {
            "start": 66.54,
            "end": 68.42,
            "text": "因为它们同时满足四个标准。"
        },
        {
            "start": 68.42,
            "end": 71.72,
            "text": "痛点明确、数据可用、见效快、风险可控。"
        },
        {
            "start": 71.72,
            "end": 75.12,
            "text": "这其实也是很多企业做 AI 试点最稳的选择标准。"
        },
        {
            "start": 75.12,
            "end": 77.94,
            "text": "不要先选最复杂、最有想象力的场景。"
        },
        {
            "start": 77.94,
            "end": 80.46,
            "text": "而是先选最容易跑出结果的场景。"
        },
        {
            "start": 80.46,
            "end": 82.28,
            "text": "第二阶段，是试点。"
        },
        {
            "start": 82.28,
            "end": 84.04,
            "text": "客服场景一开始也并不顺。"
        },
        {
            "start": 84.04,
            "end": 87.6,
            "text": "知识库整理完以后，AI 刚上线时的准确率并不高。"
        },
        {
            "start": 87.6,
            "end": 89.9,
            "text": "团队第一反应是，这东西不靠谱。"
        },
        {
            "start": 89.9,
            "end": 91.78,
            "text": "很多企业的问题就在这里。"
        },
        {
            "start": 91.78,
            "end": 94.34,
            "text": "试了两周发现不完美，就准备放弃。"
        },
        {
            "start": 94.34,
            "end": 96.28,
            "text": "但这家公司没有这么做。"
        },
        {
            "start": 96.28,
            "end": 100.86,
            "text": "他们持续把错误反馈回来，持续优化知识库和提示方式。"
        },
        {
            "start": 100.86,
            "end": 104.42,
            "text": "从六成，到七成五，到八成五，再到九成以上。"
        },
        {
            "start": 104.42,
            "end": 108.74,
            "text": "最后 AI 能处理大部分标准问题，人工只接复杂情况。"
        },
        {
            "start": 109.16,
            "end": 111.62,
            "text": "这时候，价值才真正显现出来。"
        },
        {
            "start": 111.62,
            "end": 113.58,
            "text": "方案撰写这个场景也很有意思。"
        },
        {
            "start": 113.58,
            "end": 116.48,
            "text": "一开始他们让 AI 直接生成完整方案。"
        },
        {
            "start": 116.48,
            "end": 118.9,
            "text": "结果发现，内容看上去像模板，"
        },
        {
            "start": 118.9,
            "end": 121.54,
            "text": "缺少针对客户真正有价值的判断。"
        },
        {
            "start": 121.54,
            "end": 123.04,
            "text": "后来他们换了思路。"
        },
        {
            "start": 123.04,
            "end": 125.0,
            "text": "不再要求 AI 一步到位。"
        },
        {
            "start": 125.0,
            "end": 129.36,
            "text": "而是让 AI 先做背景调研、案例匹配、结构大纲和初稿框架。"
        },
        {
            "start": 129.36,
            "end": 132.9,
            "text": "销售再把真正关键的分析和建议补进去。"
        },
        {
            "start": 132.9,
            "end": 134.88,
            "text": "这一下效果就明显好了很多。"
        },
        {
            "start": 134.88,
            "end": 137.52,
            "text": "方案撰写时间缩短了，质量反而更高。"
        },
        {
            "start": 137.52,
            "end": 139.86,
            "text": "这里最值得带走的一个经验是，"
        },
        {
            "start": 139.86,
            "end": 142.22,
            "text": "人机协作流程比工具本身更重要。"
        },
        {
            "start": 142.22,
            "end": 145.86,
            "text": "如果流程设计错了，AI 再强也很难出好结果。"
        },
        {
            "start": 145.86,
            "end": 149.6,
            "text": "如果流程设计对了，AI 才会真正放大人的能力。"
        },
        {
            "start": 149.6,
            "end": 151.90000000000003,
            "text": "第三阶段，是推广和深化。"
        },
        {
            "start": 151.90000000000003,
            "end": 155.76,
            "text": "前两个场景跑通以后，他们没有立刻全面铺开。"
        },
        {
            "start": 155.76,
            "end": 158.56,
            "text": "而是继续扩到几个更适合复制的场景。"
        },
        {
            "start": 158.56,
            "end": 161.86,
            "text": "比如数据分析、简历筛选、内部知识库。"
        },
        {
            "start": 161.86,
            "end": 164.06,
            "text": "这是一个很典型、也很稳的节奏。"
        },
        {
            "start": 164.06,
            "end": 165.76,
            "text": "不是先追求全覆盖。"
        },
        {
            "start": 165.76,
            "end": 169.02,
            "text": "而是先做出一批可信的小胜利，再往外扩。"
        },
        {
            "start": 169.02,
            "end": 172.24,
            "text": "推广过程中，他们也遇到了三个很典型的问题。"
        },
        {
            "start": 172.24,
            "end": 174.14,
            "text": "第一个，是员工抵触。"
        },
        {
            "start": 174.14,
            "end": 176.4,
            "text": "有些人表面上说工具不好用，"
        },
        {
            "start": 176.4,
            "end": 178.78,
            "text": "深一层其实是在担心自己被替代。"
        },
        {
            "start": 178.78,
            "end": 181.26,
            "text": "这时候管理动作不能只是强调效率。"
        },
        {
            "start": 181.26,
            "end": 184.18,
            "text": "而是要先回应焦虑，再给训练和支持。"
        },
        {
            "start": 184.18,
            "end": 186.1,
            "text": "第二个，是数据安全顾虑。"
        },
        {
            "start": 186.1,
            "end": 189.06,
            "text": "法务、管理层、业务负责人都会关心，"
        },
        {
            "start": 189.06,
            "end": 191.24,
            "text": "哪些数据能进 AI，哪些不能。"
        },
        {
            "start": 191.24,
            "end": 195.22,
            "text": "所以这家公司后来专门选了更适合内部部署的方案，"
        },
        {
            "start": 195.22,
            "end": 197.86,
            "text": "也同步建立了更清楚的数据使用规范。"
        },
        {
            "start": 197.86,
            "end": 200.0,
            "text": "第三个，是效果不稳定。"
        },
        {
            "start": 200.0,
            "end": 202.86,
            "text": "有些场景效果非常好，有些场景一般。"
        },
        {
            "start": 202.86,
            "end": 205.96,
            "text": "他们没有硬推所有场景，而是先分析原因。"
        },
        {
            "start": 205.96,
            "end": 209.26,
            "text": "能优化的就优化，不适合现在做的就先放下。"
        },
        {
            "start": 209.26,
            "end": 211.9,
            "text": "这其实是很多企业最容易做错的地方。"
        },
        {
            "start": 211.9,
            "end": 214.66,
            "text": "不是每个场景都要立刻证明 AI 有用。"
        },
        {
            "start": 214.66,
            "end": 218.3,
            "text": "真正成熟的做法，是接受不同场景成熟度不同。"
        },
        {
            "start": 218.3,
            "end": 220.48,
            "text": "先把真正能跑通的地方做深。"
        },
        {
            "start": 220.48,
            "end": 222.44,
            "text": "第四阶段，是常态化运营。"
        },
        {
            "start": 222.44,
            "end": 226.34,
            "text": "也就是 AI 不再是一个单独项目，而是真的进入组织日常。"
        },
        {
            "start": 226.34,
            "end": 228.2,
            "text": "新人入职要学会用。"
        },
        {
            "start": 228.2,
            "end": 230.44,
            "text": "团队例会里会固定分享怎么用。"
        },
        {
            "start": 230.44,
            "end": 233.0,
            "text": "绩效里会把 AI 能力作为一个参考维度。"
        },
        {
            "start": 233.0,
            "end": 236.34,
            "text": "组织里还会有人持续看工具、流程和新机会。"
        },
        {
            "start": 236.34,
            "end": 239.4,
            "text": "到了这一步，AI 才算真正被组织吸收了。"
        },
        {
            "start": 239.4,
            "end": 241.98,
            "text": "它不再只是某个部门试一试的新东西。"
        },
        {
            "start": 241.98,
            "end": 244.48,
            "text": "而是慢慢变成组织工作方式的一部分。"
        },
        {
            "start": 244.48,
            "end": 246.04,
            "text": "最后再看整体效果。"
        },
        {
            "start": 246.04,
            "end": 248.64,
            "text": "这家公司当然有成本和效率上的改善。"
        },
        {
            "start": 249.10000000000002,
            "end": 252.62,
            "text": "但真正更有价值的变化，是团队的工作状态变了。"
        },
        {
            "start": 252.62,
            "end": 255.98,
            "text": "客服不再把时间花在重复回答同样的问题上。"
        },
        {
            "start": 255.98,
            "end": 259.6,
            "text": "销售也不再把精力耗在大量格式化和基础整理上。"
        },
        {
            "start": 259.6,
            "end": 262.4,
            "text": "更多时间被释放出来，放到更需要判断、"
        },
        {
            "start": 262.4,
            "end": 265.5,
            "text": "更需要关系和更需要创造力的事情上。"
        },
        {
            "start": 265.5,
            "end": 267.64,
            "text": "这才是 AI 真正该带来的升级。"
        },
        {
            "start": 267.64,
            "end": 269.76,
            "text": "不是单纯少做几件事。"
        },
        {
            "start": 269.76,
            "end": 272.68,
            "text": "而是把人的时间重新放回更有价值的位置。"
        },
        {
            "start": 272.68,
            "end": 273.88,
            "text": "好，我们来收一下。"
        },
        {
            "start": 273.88,
            "end": 276.68,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 276.68,
            "end": 278.86,
            "text": "第一，企业导入 AI 最稳的路径，"
        },
        {
            "start": 278.86,
            "end": 281.42,
            "text": "通常是四步，摸底选方向、试点、"
        },
        {
            "start": 281.42,
            "end": 282.62,
            "text": "推广和常态化。"
        },
        {
            "start": 282.62,
            "end": 284.48,
            "text": "第二，真正决定成败的，"
        },
        {
            "start": 284.48,
            "end": 286.9,
            "text": "不只是工具选型，而是场景选择、"
        },
        {
            "start": 286.9,
            "end": 287.9,
            "text": "流程设计、"
        },
        {
            "start": 287.9,
            "end": 290.52,
            "text": "持续优化和对人性阻力的处理。"
        },
        {
            "start": 290.52,
            "end": 293.04,
            "text": "第三，AI 落地真正好的结果，"
        },
        {
            "start": 293.04,
            "end": 294.24,
            "text": "不只是效率提升，"
        },
        {
            "start": 294.24,
            "end": 297.06,
            "text": "而是让人的时间重新回到更需要判断、"
        },
        {
            "start": 297.06,
            "end": 298.98,
            "text": "关系和创造力的工作上。"
        },
        {
            "start": 298.98,
            "end": 302.74,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 302.74,
            "end": 304.22,
            "text": "想一想你自己的公司，"
        },
        {
            "start": 304.22,
            "end": 306.76,
            "text": "如果现在只能选一个 AI 试点场景，"
        },
        {
            "start": 306.76,
            "end": 308.02,
            "text": "你会选哪里。"
        },
        {
            "start": 308.02,
            "end": 311.36,
            "text": "它是不是同时满足痛点明确、数据可用、"
        },
        {
            "start": 311.36,
            "end": 313.96,
            "text": "见效快、风险可控这四个标准。"
        },
        {
            "start": 313.96,
            "end": 316.82,
            "text": "你会发现，很多时候不是企业没有机会，"
        },
        {
            "start": 316.82,
            "end": 318.56,
            "text": "而是第一步没有选准。"
        },
        {
            "start": 318.56,
            "end": 319.28,
            "text": "我是 Lincoln。"
        },
        {
            "start": 319.28,
            "end": 321.86,
            "text": "Leadership 模块到这里就完整结束了。"
        },
        {
            "start": 321.86,
            "end": 323.02,
            "text": "我们下一模块再见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.74,
        "index": 0
    },
    {
        "start": 2.74,
        "end": 38.86,
        "index": 1
    },
    {
        "start": 38.86,
        "end": 80.46,
        "index": 2
    },
    {
        "start": 80.46,
        "end": 149.6,
        "index": 3
    },
    {
        "start": 149.6,
        "end": 220.48,
        "index": 4
    },
    {
        "start": 220.48,
        "end": 244.48,
        "index": 5
    },
    {
        "start": 244.48,
        "end": 273.88,
        "index": 6
    },
    {
        "start": 273.88,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-leadership.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-leadership.html?entry={entry}", secondaryHref: "./module-leadership.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-14", coachSource: "./ai-coach.html?source=lesson-leadership-14" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：一家企业如何真正把 AI 用起来的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：一家企业如何真正把 AI 用起来", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-leadership.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
