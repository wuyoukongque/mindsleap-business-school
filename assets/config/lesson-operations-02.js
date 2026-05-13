(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第2课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第2课：精益管理：消除一切浪费",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep63-lean-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：精益管理：消除一切浪费", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-03.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "运营思维：用系统的方式做事情",
                "body": "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "精益管理：消除一切浪费",
                "body": "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "质量管理：质量不是检出来的",
                "body": "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 4,
                "title": "AI 供应链：让链条更智能",
                "body": "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "从 RPA 到 Agent：流程自动化的升级",
                "body": "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：一家制造企业的 AI 运营升级",
                "body": "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的运营诊断：用 AI 找到效率瓶颈",
                "body": "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "自动化路线图：先做什么，后做什么",
                "body": "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-operations-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "精益不是让人更忙，而是让浪费更少",
                "body": "真正该被消除的，是那些客户不愿意为之付钱、却持续消耗时间和成本的动作。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 让很多过去看不见的浪费第一次被看见",
                "body": "重复脑力劳动、信息等待、决策等待和知识重复发现，都是 AI 时代新的精益切入口。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "最稳的落地方法，是价值流可视化、浪费识别和改善闭环",
                "body": "先把流程看清楚，再决定哪些要自动化、哪些要重做流程，才能让精益改善真正持续下去。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 2/12", "建议下一节：质量管理：质量不是检出来的", '也可以先整理这一节'], nextHref: "./lesson-operations-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-02", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson2", audioSource: './assets/audio/operations-ep63-lean-management.mp3?v=20260413-operations-02a', vttSrc: './assets/subtitles/operations-ep63-lean-management.vtt?v=20260413-operations-02a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep63-lean-management/slide_01.png",
            "label": "精益管理：消除一切浪费",
            "caption": "这一节会帮助你系统理解：精益管理：消除一切浪费"
        },
        {
            "file": "operations-ep63-lean-management/slide_02.png",
            "label": "精益管理到底在管什么",
            "caption": "精益真正关心的，不是表面上有多忙，而是客户愿不愿意为这些动作买单。"
        },
        {
            "file": "operations-ep63-lean-management/slide_03.png",
            "label": "七种经典浪费",
            "caption": "先学会识别浪费，管理者才知道该把改善动作放在哪里。"
        },
        {
            "file": "operations-ep63-lean-management/slide_04.png",
            "label": "AI 时代的四种新浪费",
            "caption": "AI 时代的精益，不只看物料和动作，也要看脑力、信息与知识是不是在被浪费。"
        },
        {
            "file": "operations-ep63-lean-management/slide_05.png",
            "label": "AI 精益三步法",
            "caption": "精益最怕只停在看问题，真正有效的是把价值流、浪费识别和改善方案串成闭环。"
        },
        {
            "file": "operations-ep63-lean-management/slide_06.png",
            "label": "电商订单流程案例",
            "caption": "好的精益案例，不是某一个环节更忙了，而是整体流程更顺了。"
        },
        {
            "file": "operations-ep63-lean-management/slide_07.png",
            "label": "Kaizen 持续改善文化",
            "caption": "真正成熟的运营系统，不是偶尔改善一次，而是把改善变成日常机制。"
        },
        {
            "file": "operations-ep63-lean-management/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.22,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.22,
            "end": 3.2,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 3.2,
            "end": 5.34,
            "text": "今天这一节，我们来聊精益管理。"
        },
        {
            "start": 5.34,
            "end": 7.32,
            "text": "这个概念最早来自制造业，"
        },
        {
            "start": 7.32,
            "end": 10.28,
            "text": "但它背后的原则，其实适用于任何行业、"
        },
        {
            "start": 10.28,
            "end": 11.56,
            "text": "任何规模的企业。"
        },
        {
            "start": 11.56,
            "end": 13.96,
            "text": "如果要用一句最核心的话来概括，"
        },
        {
            "start": 13.96,
            "end": 15.16,
            "text": "精益管理就是，"
        },
        {
            "start": 15.16,
            "end": 17.88,
            "text": "消除一切不为客户创造价值的浪费。"
        },
        {
            "start": 17.88,
            "end": 19.58,
            "text": "这句话听起来很简单，"
        },
        {
            "start": 19.58,
            "end": 21.46,
            "text": "但真正把它放回企业现场，"
        },
        {
            "start": 21.46,
            "end": 23.52,
            "text": "你会发现它非常有力量。"
        },
        {
            "start": 23.52,
            "end": 25.78,
            "text": "因为企业里很多人每天都很忙。"
        },
        {
            "start": 25.78,
            "end": 27.3,
            "text": "流程也一直在跑。"
        },
        {
            "start": 27.3,
            "end": 28.88,
            "text": "但忙，不代表有价值。"
        },
        {
            "start": 28.88,
            "end": 31.1,
            "text": "有些动作客户愿意为之付钱。"
        },
        {
            "start": 31.1,
            "end": 33.12,
            "text": "有些动作，客户根本不在乎，"
        },
        {
            "start": 33.12,
            "end": 36.12,
            "text": "却在持续消耗时间、资金和精力。"
        },
        {
            "start": 36.12,
            "end": 39.32,
            "text": "精益管理真正要做的，就是把这两类动作分清楚。"
        },
        {
            "start": 39.32,
            "end": 40.34,
            "text": "什么叫浪费。"
        },
        {
            "start": 40.66,
            "end": 41.74,
            "text": "库存积压，是浪费。"
        },
        {
            "start": 41.74,
            "end": 42.94,
            "text": "返工，是浪费。"
        },
        {
            "start": 43.22,
            "end": 44.3,
            "text": "等待审批，是浪费。"
        },
        {
            "start": 44.3,
            "end": 45.98,
            "text": "不必要的搬运，是浪费。"
        },
        {
            "start": 45.98,
            "end": 48.58,
            "text": "流程里多余的来回确认，也是浪费。"
        },
        {
            "start": 48.58,
            "end": 50.52,
            "text": "这些事情看起来都在发生，"
        },
        {
            "start": 50.52,
            "end": 52.84,
            "text": "但它们并没有真正增加客户价值。"
        },
        {
            "start": 52.84,
            "end": 55.04,
            "text": "所以精益不是单纯地压缩成本。"
        },
        {
            "start": 55.04,
            "end": 58.22,
            "text": "而是把资源重新集中到真正创造价值的地方。"
        },
        {
            "start": 58.22,
            "end": 59.94,
            "text": "先看七种经典浪费。"
        },
        {
            "start": 59.94,
            "end": 61.78,
            "text": "第一种，是过度生产。"
        },
        {
            "start": 61.78,
            "end": 64.9,
            "text": "做得比需求更多，最后就会变成库存压力。"
        },
        {
            "start": 64.9,
            "end": 66.44,
            "text": "第二种，是等待。"
        },
        {
            "start": 66.44,
            "end": 69.38,
            "text": "人在等材料，等审批，等前一道工序，"
        },
        {
            "start": 69.38,
            "end": 72.22,
            "text": "时间在流走，但没有创造任何价值。"
        },
        {
            "start": 72.22,
            "end": 74.08,
            "text": "第三种，是不必要的搬运。"
        },
        {
            "start": 74.08,
            "end": 76.02,
            "text": "物料在工厂里来回移动，"
        },
        {
            "start": 76.02,
            "end": 78.24,
            "text": "产品在仓库之间反复转运，"
        },
        {
            "start": 78.24,
            "end": 81.22,
            "text": "客户并不会因为你多搬了几次就多付钱。"
        },
        {
            "start": 81.22,
            "end": 83.02,
            "text": "第四种，是过度加工。"
        },
        {
            "start": 83.02,
            "end": 86.82,
            "text": "客户只需要八十分，你却用一百二十分的成本去做。"
        },
        {
            "start": 86.82,
            "end": 88.6,
            "text": "第五种，是库存过多。"
        },
        {
            "start": 88.6,
            "end": 91.26,
            "text": "原材料、半成品、成品堆在那里，"
        },
        {
            "start": 91.26,
            "end": 93.75999999999999,
            "text": "占用的是现金、空间和管理精力。"
        },
        {
            "start": 93.76,
            "end": 95.82,
            "text": "第六种，是不必要的动作。"
        },
        {
            "start": 95.82,
            "end": 98.88,
            "text": "工具放得太远，系统界面切来切去，"
        },
        {
            "start": 98.88,
            "end": 100.14,
            "text": "操作路径太绕，"
        },
        {
            "start": 100.14,
            "end": 102.16,
            "text": "这些都会一点点吞掉效率。"
        },
        {
            "start": 102.16,
            "end": 104.14,
            "text": "第七种，是缺陷和返工。"
        },
        {
            "start": 104.14,
            "end": 106.16,
            "text": "它最直观，也最昂贵。"
        },
        {
            "start": 106.16,
            "end": 110.03999999999999,
            "text": "因为一旦出错，前面的时间和成本，很多都要重新来一遍。"
        },
        {
            "start": 110.03999999999999,
            "end": 114.22,
            "text": "你会发现，这七种浪费背后，其实都在说同一件事。"
        },
        {
            "start": 114.22,
            "end": 117.58,
            "text": "企业把大量资源花在了客户不愿意额外付钱的地方。"
        },
        {
            "start": 117.58,
            "end": 120.3,
            "text": "所以精益管理不是做减法给财务看。"
        },
        {
            "start": 120.3,
            "end": 122.46000000000001,
            "text": "而是做减法给客户价值让路。"
        },
        {
            "start": 122.46000000000001,
            "end": 126.08,
            "text": "但到了 AI 时代，浪费的含义又被重新拉开了。"
        },
        {
            "start": 126.08,
            "end": 127.92,
            "text": "除了传统的物料和动作浪费，"
        },
        {
            "start": 127.92,
            "end": 130.46,
            "text": "知识工作里还出现了很多新的浪费。"
        },
        {
            "start": 130.46,
            "end": 132.96,
            "text": "第一种新浪费，是重复性脑力劳动。"
        },
        {
            "start": 132.96,
            "end": 134.9,
            "text": "同样类型的邮件反复写。"
        },
        {
            "start": 134.9,
            "end": 136.8,
            "text": "同样格式的报表反复做。"
        },
        {
            "start": 136.8,
            "end": 138.42,
            "text": "同样的问题反复回答。"
        },
        {
            "start": 138.42,
            "end": 141.46,
            "text": "这些工作过去常常被默认成正常劳动。"
        },
        {
            "start": 141.46,
            "end": 145.4,
            "text": "但在 AI 时代，它们越来越应该被视作可以优先优化的浪费。"
        },
        {
            "start": 145.4,
            "end": 147.48,
            "text": "第二种新浪费，是信息等待。"
        },
        {
            "start": 147.48,
            "end": 150.2,
            "text": "不是等货，而是等回复、等报表、"
        },
        {
            "start": 150.2,
            "end": 152.66,
            "text": "等对齐、等别人把信息整理给你。"
        },
        {
            "start": 152.66,
            "end": 156.24,
            "text": "很多团队效率低，不是人不努力，而是信息流得太慢。"
        },
        {
            "start": 156.24,
            "end": 158.6,
            "text": "第三种新浪费，是决策等待。"
        },
        {
            "start": 158.6,
            "end": 160.16666666666666,
            "text": "数据不够，不敢拍板。"
        },
        {
            "start": 160.16666666666666,
            "end": 162.1,
            "text": "权限不清，要层层上报。"
        },
        {
            "start": 162.1,
            "end": 164.08,
            "text": "材料不完整，只能继续等。"
        },
        {
            "start": 164.08,
            "end": 166.4,
            "text": "很多业务真正卡住的，不是动作，"
        },
        {
            "start": 166.4,
            "end": 168.2,
            "text": "而是没人能及时做出判断。"
        },
        {
            "start": 168.2,
            "end": 170.92,
            "text": "第四种新浪费，是知识的重复发现。"
        },
        {
            "start": 170.92,
            "end": 174.64000000000001,
            "text": "一个团队已经踩过的坑，另一个团队又重新踩一遍。"
        },
        {
            "start": 174.64000000000001,
            "end": 178.58,
            "text": "一个部门已经总结过的方法，另一个部门还要从头摸索。"
        },
        {
            "start": 178.58,
            "end": 180.7,
            "text": "如果知识没有沉淀，没有共享，"
        },
        {
            "start": 180.7,
            "end": 182.98,
            "text": "这种浪费会在组织里反复发生。"
        },
        {
            "start": 182.98,
            "end": 186.26,
            "text": "所以 AI 时代做精益，不只是看产线和库存。"
        },
        {
            "start": 186.26,
            "end": 189.74,
            "text": "还要看脑力、信息和知识是不是也在被浪费。"
        },
        {
            "start": 189.74,
            "end": 192.54,
            "text": "那么，怎么把 AI 真正用到精益改善里。"
        },
        {
            "start": 192.54,
            "end": 194.04,
            "text": "我建议你用三步法。"
        },
        {
            "start": 194.04,
            "end": 195.76,
            "text": "第一步，可视化价值流。"
        },
        {
            "start": 195.76,
            "end": 198.62,
            "text": "也就是把你的业务流程从头到尾画出来。"
        },
        {
            "start": 198.62,
            "end": 200.5,
            "text": "每个步骤花多长时间。"
        },
        {
            "start": 200.5,
            "end": 201.56,
            "text": "中间等了多久。"
        },
        {
            "start": 201.56,
            "end": 202.7,
            "text": "消耗了什么资源。"
        },
        {
            "start": 202.7,
            "end": 205.98,
            "text": "如果这些数据原来已经散落在企业资源系统、"
        },
        {
            "start": 205.98,
            "end": 207.98,
            "text": "客户管理系统或者项目工具里，"
        },
        {
            "start": 207.98,
            "end": 209.98,
            "text": "AI 可以帮你更快把它们整理出来。"
        },
        {
            "start": 209.98,
            "end": 213.92,
            "text": "过去可能要一个团队花很多时间才能做完一次流程盘点。"
        },
        {
            "start": 213.92,
            "end": 217.54,
            "text": "现在，AI 可以先帮你把第一版价值流快速搭起来。"
        },
        {
            "start": 217.54,
            "end": 218.64,
            "text": "第二步，识别浪费。"
        },
        {
            "start": 218.64,
            "end": 220.9,
            "text": "有了流程图以后，就要开始问。"
        },
        {
            "start": 220.9,
            "end": 223.28,
            "text": "哪些步骤真的在创造客户价值。"
        },
        {
            "start": 223.28,
            "end": 225.78,
            "text": "哪些只是必要但暂时还不能取消。"
        },
        {
            "start": 225.78,
            "end": 229.2,
            "text": "哪些则是可以直接优化、压缩，甚至取消的浪费。"
        },
        {
            "start": 229.2,
            "end": 231.46,
            "text": "AI 在这里能做的，不只是分类。"
        },
        {
            "start": 231.46,
            "end": 233.0,
            "text": "它还可以帮你按时间、"
        },
        {
            "start": 233.0,
            "end": 234.7,
            "text": "成本和频率排优先级，"
        },
        {
            "start": 234.7,
            "end": 236.88,
            "text": "让你知道先动哪里最有回报。"
        },
        {
            "start": 236.88,
            "end": 238.68,
            "text": "第三步，设计改善方案。"
        },
        {
            "start": 238.68,
            "end": 241.26,
            "text": "这里最关键的不是一句话，叫做上 AI。"
        },
        {
            "start": 241.26,
            "end": 242.5,
            "text": "而是具体判断。"
        },
        {
            "start": 242.5,
            "end": 244.54,
            "text": "哪些步骤适合自动化。"
        },
        {
            "start": 244.54,
            "end": 246.06,
            "text": "哪些步骤应该重做流程。"
        },
        {
            "start": 246.06,
            "end": 247.84,
            "text": "哪些步骤要减少交接。"
        },
        {
            "start": 247.84,
            "end": 250.2,
            "text": "哪些地方需要人保留最终判断。"
        },
        {
            "start": 250.2,
            "end": 251.96,
            "text": "真正成熟的精益改善，"
        },
        {
            "start": 251.96,
            "end": 253.86,
            "text": "不是所有动作都交给 AI，"
        },
        {
            "start": 253.86,
            "end": 256.42,
            "text": "而是把人和 AI 放回最合适的位置。"
        },
        {
            "start": 256.42,
            "end": 258.16,
            "text": "我们来看一个很具体的例子。"
        },
        {
            "start": 258.16,
            "end": 260.36,
            "text": "一家电商公司的订单处理流程。"
        },
        {
            "start": 260.36,
            "end": 261.38,
            "text": "客户下单。"
        },
        {
            "start": 261.76,
            "end": 262.28,
            "text": "审核订单。"
        },
        {
            "start": 262.28,
            "end": 263.34,
            "text": "分配仓库。"
        },
        {
            "start": 263.34,
            "end": 263.94,
            "text": "拣货。"
        },
        {
            "start": 264.26,
            "end": 264.38,
            "text": "包装。"
        },
        {
            "start": 264.78,
            "end": 264.92,
            "text": "发货。"
        },
        {
            "start": 265.28,
            "end": 265.84,
            "text": "客户签收。"
        },
        {
            "start": 265.84,
            "end": 268.76,
            "text": "听上去很顺，但原来这里面有很多浪费。"
        },
        {
            "start": 268.76,
            "end": 272.28,
            "text": "订单审核靠人工做，每单要花三分钟。"
        },
        {
            "start": 272.28,
            "end": 276.34,
            "text": "仓库分配靠人判断，有时候分错仓，物流成本就会升高。"
        },
        {
            "start": 276.34,
            "end": 278.72,
            "text": "客户下单以后频繁问物流状态，"
        },
        {
            "start": 278.72,
            "end": 282.1,
            "text": "客服团队有很大一部分时间都耗在重复查询上。"
        },
        {
            "start": 282.1,
            "end": 283.3,
            "text": "后来他们怎么做。"
        },
        {
            "start": 283.3,
            "end": 285.24,
            "text": "订单审核改成 AI 先筛。"
        },
        {
            "start": 285.24,
            "end": 287.14,
            "text": "只有异常订单再交给人工。"
        },
        {
            "start": 287.14,
            "end": 289.22,
            "text": "结果每单从三分钟降到三秒。"
        },
        {
            "start": 289.22,
            "end": 291.82,
            "text": "仓库分配改成 AI 综合客户位置、"
        },
        {
            "start": 291.82,
            "end": 293.24,
            "text": "库存和路线自动判断，"
        },
        {
            "start": 293.24,
            "end": 294.8,
            "text": "物流成本明显下降。"
        },
        {
            "start": 294.8,
            "end": 297.88,
            "text": "物流查询这件事，改成 AI 主动推送进度，"
        },
        {
            "start": 297.88,
            "end": 299.9,
            "text": "客服团队被大量释放出来。"
        },
        {
            "start": 299.9,
            "end": 302.62,
            "text": "你看，这就是很典型的精益加 AI。"
        },
        {
            "start": 302.62,
            "end": 304.38,
            "text": "不是某一个人更辛苦了。"
        },
        {
            "start": 304.38,
            "end": 305.74,
            "text": "而是整个流程更顺了。"
        },
        {
            "start": 305.74,
            "end": 307.6,
            "text": "最后再讲一个特别重要的点。"
        },
        {
            "start": 307.6,
            "end": 309.28,
            "text": "精益不是一次性的项目。"
        },
        {
            "start": 309.28,
            "end": 311.58,
            "text": "它本质上是一种持续改善文化。"
        },
        {
            "start": 311.58,
            "end": 314.6,
            "text": "也就是今天发现一个小问题，今天就修一点。"
        },
        {
            "start": 314.6,
            "end": 317.34,
            "text": "明天再发现一个小问题，明天再往前推一点。"
        },
        {
            "start": 317.34,
            "end": 321.14,
            "text": "不是等到年底复盘，才开始大张旗鼓地做优化。"
        },
        {
            "start": 321.14,
            "end": 323.72,
            "text": "AI 会让这种持续改善更容易发生。"
        },
        {
            "start": 323.72,
            "end": 326.14,
            "text": "因为它可以持续监控流程数据，"
        },
        {
            "start": 326.14,
            "end": 327.17999999999995,
            "text": "持续发现异常，"
        },
        {
            "start": 327.18,
            "end": 329.34,
            "text": "持续提醒你哪里开始变慢、"
        },
        {
            "start": 329.34,
            "end": 332.14,
            "text": "哪里开始波动、哪里又出现了新的浪费。"
        },
        {
            "start": 332.14,
            "end": 335.58,
            "text": "这意味着改善不再只是管理层偶尔发起的动作。"
        },
        {
            "start": 335.58,
            "end": 338.6,
            "text": "而是可以慢慢变成日常运营系统的一部分。"
        },
        {
            "start": 338.6,
            "end": 340.18,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 340.18,
            "end": 342.34,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 342.34,
            "end": 343.9,
            "text": "第一，精益管理的核心，"
        },
        {
            "start": 343.9,
            "end": 346.76,
            "text": "是消除一切不为客户创造价值的浪费。"
        },
        {
            "start": 346.76,
            "end": 348.58,
            "text": "第二，AI 时代的精益，"
        },
        {
            "start": 348.58,
            "end": 350.12,
            "text": "不只看传统七种浪费，"
        },
        {
            "start": 350.12,
            "end": 352.86,
            "text": "还要看重复脑力劳动、信息等待、"
        },
        {
            "start": 352.96,
            "end": 355.22,
            "text": "决策等待和知识重复发现。"
        },
        {
            "start": 355.22,
            "end": 357.86,
            "text": "第三，AI 精益最实用的落地方法，"
        },
        {
            "start": 357.86,
            "end": 360.98,
            "text": "就是先把价值流看清楚，再识别浪费，"
        },
        {
            "start": 360.98,
            "end": 363.52,
            "text": "最后设计自动化和流程优化方案。"
        },
        {
            "start": 363.52,
            "end": 366.56,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 366.56,
            "end": 369.38,
            "text": "把你业务里最核心的一条流程写下来。"
        },
        {
            "start": 369.38,
            "end": 372.34,
            "text": "然后问自己，这里面最明显的三个浪费点是什么。"
        },
        {
            "start": 372.34,
            "end": 373.66,
            "text": "哪些是传统浪费。"
        },
        {
            "start": 373.66,
            "end": 375.74,
            "text": "哪些是 AI 时代的新型浪费。"
        },
        {
            "start": 375.74,
            "end": 378.4,
            "text": "你会发现，一旦你开始这样看流程，"
        },
        {
            "start": 378.4,
            "end": 380.7,
            "text": "改善机会会比你想象得更清楚。"
        },
        {
            "start": 380.7,
            "end": 381.6,
            "text": "我是 Lincoln。"
        },
        {
            "start": 381.6,
            "end": 383.88,
            "text": "我们下一节，继续聊质量管理，"
        },
        {
            "start": 383.88,
            "end": 386.04,
            "text": "看看质量为什么不是检出来的，"
        },
        {
            "start": 386.04,
            "end": 388.38,
            "text": "而是设计和过程里管出来的。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.2,
        "index": 0
    },
    {
        "start": 3.2,
        "end": 58.22,
        "index": 1
    },
    {
        "start": 58.22,
        "end": 122.46,
        "index": 2
    },
    {
        "start": 122.46,
        "end": 192.54,
        "index": 3
    },
    {
        "start": 192.54,
        "end": 256.42,
        "index": 4
    },
    {
        "start": 256.42,
        "end": 309.28,
        "index": 5
    },
    {
        "start": 309.28,
        "end": 338.6,
        "index": 6
    },
    {
        "start": 338.6,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-03.html?entry={entry}", secondaryHref: "./lesson-operations-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-02", coachSource: "./ai-coach.html?source=lesson-operations-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于精益管理：消除一切浪费的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "精益管理：消除一切浪费", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
