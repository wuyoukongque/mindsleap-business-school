(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第1课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第1课：运营思维：用系统的方式做事情",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep62-operations-thinking/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：运营思维：用系统的方式做事情", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "运营思维：用系统的方式做事情",
                "body": "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "精益管理：消除一切浪费",
                "body": "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "质量管理：质量不是检出来的",
                "body": "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-operations-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把流程看清楚，再谈效率提升",
                "body": "流程不清的时候，很多问题会被误判成人的问题；流程清楚以后，优化才有抓手。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "别平均优化，先盯住真正卡住全局的瓶颈",
                "body": "整体产出由最弱环节决定，所以运营优化必须先识别瓶颈，再重配资源和节奏。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 的价值不只是自动化，更是让运营系统提前看见问题",
                "body": "可见、可预测、可自动化，才是 AI 真正重构运营管理的三层价值。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 1/12", "建议下一节：精益管理：消除一切浪费", '也可以先整理这一节'], nextHref: "./lesson-operations-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-01", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson1", audioSource: './assets/audio/operations-ep62-operations-thinking.mp3?v=20260413-operations-01a', vttSrc: './assets/subtitles/operations-ep62-operations-thinking.vtt?v=20260413-operations-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep62-operations-thinking/slide_01.png",
            "label": "运营思维：用系统的方式做事情",
            "caption": "这一节会帮助你系统理解：运营思维：用系统的方式做事情"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_02.png",
            "label": "先理解运营是什么",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_03.png",
            "label": "流程思维",
            "caption": "先把流程看清楚，很多效率和质量问题才有机会真正被解决。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_04.png",
            "label": "瓶颈理论",
            "caption": "运营优化最怕平均用力，最有效的做法通常是先盯住真正卡住全局的那个点。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_05.png",
            "label": "标准化和可复制性",
            "caption": "规模化不是先把业务做大，而是先把好结果做成可以复制的系统。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_06.png",
            "label": "AI 如何重构运营",
            "caption": "AI 对运营最核心的价值，不只是省人，而是让系统更早发现问题、更快做出反应。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_07.png",
            "label": "五个自检问题",
            "caption": "这节课最重要的，不是听懂定义，而是开始用结构化问题审视自己的运营系统。"
        },
        {
            "file": "operations-ep62-operations-thinking/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.96,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.26,
            "end": 2.78,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.78,
            "end": 6.46,
            "text": "今天开始，我们进入模块五，运营与流程优化。"
        },
        {
            "start": 6.46,
            "end": 10.24,
            "text": "前面几个模块，我们聊了战略、财务、营销和领导力。"
        },
        {
            "start": 10.34,
            "end": 11.38,
            "text": "这些都很重要。"
        },
        {
            "start": 11.38,
            "end": 12.94,
            "text": "但如果运营跟不上，"
        },
        {
            "start": 13.16,
            "end": 15.04,
            "text": "再好的战略也会停在纸面上，"
        },
        {
            "start": 15.04,
            "end": 17.68,
            "text": "再好的增长也会在交付环节掉下来。"
        },
        {
            "start": 17.68,
            "end": 20.16,
            "text": "所以这一节，我们先来建立一个最基础、"
        },
        {
            "start": 20.3,
            "end": 21.56,
            "text": "但也最关键的认知。"
        },
        {
            "start": 21.92,
            "end": 23.34,
            "text": "到底什么叫运营思维。"
        },
        {
            "start": 23.34,
            "end": 26.06,
            "text": "如果用一句最简单的话来讲，运营思维，"
        },
        {
            "start": 26.06,
            "end": 29.02,
            "text": "就是用系统的方式把事情稳定地做成。"
        },
        {
            "start": 29.02,
            "end": 31.18,
            "text": "战略回答的是，你要做什么。"
        },
        {
            "start": 31.18,
            "end": 33.42,
            "text": "营销回答的是，你要卖给谁。"
        },
        {
            "start": 33.42,
            "end": 34.62,
            "text": "而运营回答的是，"
        },
        {
            "start": 34.62,
            "end": 36.52,
            "text": "你怎么把产品和服务高效、"
        },
        {
            "start": 36.74,
            "end": 37.88,
            "text": "高质量地交付出去。"
        },
        {
            "start": 37.88,
            "end": 40.3,
            "text": "先讲第一个核心概念，流程思维。"
        },
        {
            "start": 40.3,
            "end": 43.82,
            "text": "很多人一听流程，会觉得这是制造业或者大公司的事。"
        },
        {
            "start": 43.82,
            "end": 44.74,
            "text": "其实不是。"
        },
        {
            "start": 44.76,
            "end": 48.58,
            "text": "只要你的业务里存在重复发生的动作，就一定存在流程。"
        },
        {
            "start": 48.58,
            "end": 51.04,
            "text": "你去买一杯咖啡，背后就是一个流程。"
        },
        {
            "start": 51.04,
            "end": 53.14,
            "text": "你在柜台或者手机上下单。"
        },
        {
            "start": 53.14,
            "end": 54.34,
            "text": "订单进入系统。"
        },
        {
            "start": 54.34,
            "end": 56.18,
            "text": "咖啡师按照标准制作。"
        },
        {
            "start": 56.18,
            "end": 57.86,
            "text": "然后出杯、叫号、交付。"
        },
        {
            "start": 57.86,
            "end": 60.32,
            "text": "这中间每一步，都有先后顺序，"
        },
        {
            "start": 60.34,
            "end": 62.34,
            "text": "也都有时间、质量和责任要求。"
        },
        {
            "start": 62.34,
            "end": 63.28,
            "text": "这就是流程。"
        },
        {
            "start": 63.36,
            "end": 64.68,
            "text": "为什么流程思维重要。"
        },
        {
            "start": 64.68,
            "end": 68.52,
            "text": "因为流程清楚之前，很多问题都容易被误判成人的问题。"
        },
        {
            "start": 68.52,
            "end": 70.32,
            "text": "有人做得快，有人做得慢。"
        },
        {
            "start": 70.32,
            "end": 71.95999999999998,
            "text": "有人做得稳，有人老返工。"
        },
        {
            "start": 71.96,
            "end": 75.16,
            "text": "表面上看，是这个人不行，那个团队执行力不够。"
        },
        {
            "start": 75.16,
            "end": 78.78,
            "text": "但往深一层看，常常是流程本身没有被设计清楚。"
        },
        {
            "start": 78.78,
            "end": 80.88,
            "text": "标准不一致，交接不清楚，"
        },
        {
            "start": 81.2,
            "end": 83.54,
            "text": "责任边界不明确，结果当然会波动。"
        },
        {
            "start": 83.54,
            "end": 87.32,
            "text": "所以运营的第一步，不是先催人，而是先把流程看清楚。"
        },
        {
            "start": 87.32,
            "end": 89.84,
            "text": "第二个核心概念，是瓶颈理论。"
        },
        {
            "start": 89.84,
            "end": 91.46,
            "text": "它背后的判断非常重要。"
        },
        {
            "start": 91.46,
            "end": 93.0,
            "text": "一个系统的整体产出，"
        },
        {
            "start": 93.0,
            "end": 95.0,
            "text": "往往不是由最强的环节决定，"
        },
        {
            "start": 95.06,
            "end": 97.28,
            "text": "而是由最弱的那个环节决定。"
        },
        {
            "start": 97.28,
            "end": 99.68,
            "text": "比如你的公司一天可以接一百个订单。"
        },
        {
            "start": 100.0,
            "end": 100.88,
            "text": "生产可以做一百件。"
        },
        {
            "start": 100.88,
            "end": 102.86,
            "text": "但包装一天只能处理六十件。"
        },
        {
            "start": 103.28,
            "end": 104.6,
            "text": "物流一天只能发五十件。"
        },
        {
            "start": 104.6,
            "end": 106.46,
            "text": "那你的真实交付能力是多少。"
        },
        {
            "start": 106.46,
            "end": 108.56,
            "text": "不是一百，也不是六十，而是五十。"
        },
        {
            "start": 108.56,
            "end": 111.26,
            "text": "因为真正卡住全局的，是物流。"
        },
        {
            "start": 111.26,
            "end": 113.52,
            "text": "这也是为什么很多企业做运营优化，"
        },
        {
            "start": 113.52,
            "end": 115.68,
            "text": "做了很多动作，结果却不明显。"
        },
        {
            "start": 115.8,
            "end": 117.28,
            "text": "因为它优化错了地方。"
        },
        {
            "start": 117.28,
            "end": 119.38,
            "text": "如果你继续给生产加设备，"
        },
        {
            "start": 119.46,
            "end": 121.44000000000001,
            "text": "把产能从一百做到一百二十，"
        },
        {
            "start": 121.44000000000001,
            "end": 124.38,
            "text": "但物流还是五十，整体还是不会变。"
        },
        {
            "start": 124.38,
            "end": 127.26,
            "text": "真正成熟的运营判断，不是平均用力，"
        },
        {
            "start": 127.26,
            "end": 130.14,
            "text": "而是先找出那个真正制约全局的环节。"
        },
        {
            "start": 130.14,
            "end": 133.16,
            "text": "找到瓶颈以后，其他资源、节奏和动作，"
        },
        {
            "start": 133.16,
            "end": 135.08,
            "text": "都要围绕它重新协调。"
        },
        {
            "start": 135.14,
            "end": 136.86,
            "text": "这件事对管理者特别重要。"
        },
        {
            "start": 136.86,
            "end": 140.04,
            "text": "因为很多经营者一焦虑，就会想全面提速。"
        },
        {
            "start": 140.04,
            "end": 143.16,
            "text": "销售催，生产催，客服催，供应链也催。"
        },
        {
            "start": 143.16,
            "end": 146.74,
            "text": "最后的结果往往是局部更忙，全局并没有更顺。"
        },
        {
            "start": 146.74,
            "end": 149.28,
            "text": "运营优化最怕的，就是平均加压。"
        },
        {
            "start": 149.28,
            "end": 153.24,
            "text": "最有效的做法，反而是先盯住真正卡住系统的那个点。"
        },
        {
            "start": 153.24,
            "end": 156.14,
            "text": "第三个核心概念，是标准化和可复制性。"
        },
        {
            "start": 156.14,
            "end": 157.3,
            "text": "什么叫好的运营。"
        },
        {
            "start": 157.3,
            "end": 158.84,
            "text": "不是某一次做成了。"
        },
        {
            "start": 158.84,
            "end": 160.76,
            "text": "而是你今天做成了，换一个人、"
        },
        {
            "start": 160.86,
            "end": 162.26,
            "text": "换一个门店、换一个班次，"
        },
        {
            "start": 162.26,
            "end": 163.78,
            "text": "也还能稳定地做出来。"
        },
        {
            "start": 163.82,
            "end": 165.64,
            "text": "这才叫真正的运营能力。"
        },
        {
            "start": 165.64,
            "end": 168.38,
            "text": "很多公司早期靠的是创始人盯、"
        },
        {
            "start": 168.38,
            "end": 170.54,
            "text": "核心员工扛、团队默契补位。"
        },
        {
            "start": 170.94,
            "end": 172.52,
            "text": "业务小的时候，好像也能跑。"
        },
        {
            "start": 172.52,
            "end": 176.38,
            "text": "但一旦规模开始变大，没有标准化的问题就会全部冒出来。"
        },
        {
            "start": 176.38,
            "end": 177.82,
            "text": "新人不知道该怎么做。"
        },
        {
            "start": 177.86,
            "end": 179.9,
            "text": "不同人做出来的质量不一样。"
        },
        {
            "start": 179.9,
            "end": 183.94,
            "text": "同样的问题反复出错，返工越来越多，内耗也越来越重。"
        },
        {
            "start": 183.94,
            "end": 185.88,
            "text": "所以标准化不是把人变笨。"
        },
        {
            "start": 185.88,
            "end": 189.58,
            "text": "而是把好的结果，沉淀成一个别人也能复制的系统。"
        },
        {
            "start": 189.58,
            "end": 191.2,
            "text": "这里至少有四个基础。"
        },
        {
            "start": 191.24,
            "end": 193.02,
            "text": "第一，是标准操作流程。"
        },
        {
            "start": 193.02,
            "end": 194.4,
            "text": "第二，是质量标准。"
        },
        {
            "start": 194.6,
            "end": 196.08,
            "text": "第三，是培训路径。"
        },
        {
            "start": 196.08,
            "end": 198.52,
            "text": "第四，是反馈和纠偏机制。"
        },
        {
            "start": 198.52,
            "end": 200.54,
            "text": "如果这四层没有建起来，"
        },
        {
            "start": 200.7,
            "end": 203.12,
            "text": "业务放大的同时，问题也会一起放大。"
        },
        {
            "start": 203.12,
            "end": 207.28,
            "text": "好，讲完这三个基础，我们再看 AI 到底怎么重构运营。"
        },
        {
            "start": 207.28,
            "end": 209.56,
            "text": "很多人一提 AI，第一反应是自动化。"
        },
        {
            "start": 209.56,
            "end": 213.98,
            "text": "但如果只把 AI 理解成省人工具，其实是把它看窄了。"
        },
        {
            "start": 213.98,
            "end": 216.04,
            "text": "AI 对运营至少有三层价值。"
        },
        {
            "start": 216.1,
            "end": 217.7,
            "text": "第一层，是更可见。"
        },
        {
            "start": 217.7,
            "end": 220.12,
            "text": "过去很多运营问题，你其实看不见。"
        },
        {
            "start": 220.6,
            "end": 221.72,
            "text": "效率卡在哪里。"
        },
        {
            "start": 221.72,
            "end": 223.36,
            "text": "质量波动出在哪个环节。"
        },
        {
            "start": 223.36,
            "end": 225.82,
            "text": "成本异常是从什么时候开始的。"
        },
        {
            "start": 225.82,
            "end": 228.74,
            "text": "很多时候你只能等结果出来以后，再去倒查。"
        },
        {
            "start": 228.74,
            "end": 232.1,
            "text": "而 AI 能帮你更早把这些异常和趋势看出来。"
        },
        {
            "start": 232.1,
            "end": 235.04,
            "text": "流程开始变得透明，问题也能更早暴露。"
        },
        {
            "start": 235.04,
            "end": 236.92,
            "text": "第二层，是更可预测。"
        },
        {
            "start": 237.4,
            "end": 238.82,
            "text": "设备还没坏，就提前预警。"
        },
        {
            "start": 238.82,
            "end": 240.8,
            "text": "库存还没断，就提前提醒。"
        },
        {
            "start": 240.8,
            "end": 243.7,
            "text": "客户还没投诉，就先看到满意度在下降。"
        },
        {
            "start": 243.7,
            "end": 246.42,
            "text": "这意味着运营不再只是被动救火，"
        },
        {
            "start": 246.42,
            "end": 248.38,
            "text": "而是可以更早地准备和调整。"
        },
        {
            "start": 248.38,
            "end": 250.72,
            "text": "第三层，才是更可自动化。"
        },
        {
            "start": 250.72,
            "end": 253.36,
            "text": "报表生成、数据录入、异常检测、"
        },
        {
            "start": 253.36,
            "end": 255.14,
            "text": "规则清楚的常规判断，"
        },
        {
            "start": 255.14,
            "end": 257.02,
            "text": "这些都可以逐步交给 AI。"
        },
        {
            "start": 257.02,
            "end": 260.04,
            "text": "这样人的时间就能从重复劳动里释放出来，"
        },
        {
            "start": 260.04,
            "end": 262.34,
            "text": "回到更需要判断和协调的地方。"
        },
        {
            "start": 262.34,
            "end": 266.58,
            "text": "所以 AI 对运营最核心的价值，不只是省几个人。"
        },
        {
            "start": 266.58,
            "end": 269.92,
            "text": "而是让整个系统更早发现问题、更快做出反应。"
        },
        {
            "start": 269.92,
            "end": 272.42,
            "text": "最后，我给你一个简单的自检框架。"
        },
        {
            "start": 272.42,
            "end": 273.9,
            "text": "你可以用五个问题，"
        },
        {
            "start": 273.9,
            "end": 276.94,
            "text": "快速看一看自己的运营系统现在处在什么状态。"
        },
        {
            "start": 276.94,
            "end": 278.88,
            "text": "第一，你的核心业务流程，"
        },
        {
            "start": 278.88,
            "end": 280.7,
            "text": "是否已经被清楚定义，"
        },
        {
            "start": 280.7,
            "end": 282.54,
            "text": "而且团队讲法一致。"
        },
        {
            "start": 282.54,
            "end": 284.18,
            "text": "第二，你是否真的知道，"
        },
        {
            "start": 284.18,
            "end": 288.02,
            "text": "当前限制整体效率和交付质量的瓶颈在哪里。"
        },
        {
            "start": 288.02,
            "end": 290.36,
            "text": "第三，你有没有把标准操作流程、"
        },
        {
            "start": 290.36,
            "end": 293.3,
            "text": "质量标准和培训路径真正建立起来。"
        },
        {
            "start": 293.3,
            "end": 295.5,
            "text": "第四，你的关键运营数据，"
        },
        {
            "start": 295.5,
            "end": 297.14,
            "text": "是否已经足够可见，"
        },
        {
            "start": 297.14,
            "end": 298.9,
            "text": "能让你及时发现异常。"
        },
        {
            "start": 298.9,
            "end": 304.28,
            "text": "第五，你的流程里，哪些环节最适合优先引入 AI 去做优化。"
        },
        {
            "start": 304.28,
            "end": 307.94,
            "text": "如果这五个问题里，有几个你还答不上来，也不用焦虑。"
        },
        {
            "start": 307.94,
            "end": 312.1,
            "text": "这恰恰说明，运营模块后面的内容会对你有帮助。"
        },
        {
            "start": 312.1,
            "end": 313.66,
            "text": "因为接下来的几节课，"
        },
        {
            "start": 313.66,
            "end": 316.32,
            "text": "我们会顺着这条线，继续把精益管理、"
        },
        {
            "start": 316.5,
            "end": 317.5,
            "text": "质量管理、供应链、"
        },
        {
            "start": 317.7,
            "end": 320.22,
            "text": "自动化和数据化运营一点点展开。"
        },
        {
            "start": 320.22,
            "end": 321.74,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 321.74,
            "end": 323.96,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 323.96,
            "end": 325.68,
            "text": "第一，运营思维的三个基础，"
        },
        {
            "start": 325.68,
            "end": 327.68,
            "text": "是流程思维、瓶颈理论，"
        },
        {
            "start": 327.68,
            "end": 330.0,
            "text": "以及标准化和可复制性。"
        },
        {
            "start": 330.0,
            "end": 332.34,
            "text": "第二，运营优化最重要的，"
        },
        {
            "start": 332.34,
            "end": 333.4,
            "text": "不是平均用力，"
        },
        {
            "start": 333.4,
            "end": 336.94000000000005,
            "text": "而是先识别并解决真正制约全局的瓶颈。"
        },
        {
            "start": 336.94000000000005,
            "end": 339.02,
            "text": "第三，AI 对运营的三层价值，"
        },
        {
            "start": 339.02,
            "end": 341.18,
            "text": "是让系统更可见、更可预测、"
        },
        {
            "start": 341.64,
            "end": 342.36,
            "text": "更可自动化。"
        },
        {
            "start": 342.36,
            "end": 345.86,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 345.86,
            "end": 348.22,
            "text": "把你自己的业务流程简单画出来。"
        },
        {
            "start": 348.22,
            "end": 350.5,
            "text": "然后问自己，哪一个环节最卡，"
        },
        {
            "start": 350.5,
            "end": 351.94,
            "text": "哪一个环节最不稳定，"
        },
        {
            "start": 351.94,
            "end": 354.7,
            "text": "哪一个环节最适合先做 AI 优化。"
        },
        {
            "start": 354.7,
            "end": 355.52,
            "text": "你会发现，"
        },
        {
            "start": 355.52,
            "end": 358.06,
            "text": "一旦你开始用流程和瓶颈的方式看问题，"
        },
        {
            "start": 358.06,
            "end": 360.06,
            "text": "很多原本模糊的运营难题，"
        },
        {
            "start": 360.06,
            "end": 361.8,
            "text": "会一下子变得清楚很多。"
        },
        {
            "start": 361.8,
            "end": 362.6,
            "text": "我是 Lincoln。"
        },
        {
            "start": 363.14,
            "end": 365.26,
            "text": "我们下一节，继续聊精益管理，"
        },
        {
            "start": 365.26,
            "end": 367.44,
            "text": "看看运营里那些最常见的浪费，"
        },
        {
            "start": 367.44,
            "end": 368.94,
            "text": "究竟该怎么消除。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.78,
        "index": 0
    },
    {
        "start": 2.78,
        "end": 37.88,
        "index": 1
    },
    {
        "start": 37.88,
        "end": 87.32,
        "index": 2
    },
    {
        "start": 87.32,
        "end": 153.24,
        "index": 3
    },
    {
        "start": 153.24,
        "end": 203.12,
        "index": 4
    },
    {
        "start": 203.12,
        "end": 269.92,
        "index": 5
    },
    {
        "start": 269.92,
        "end": 320.22,
        "index": 6
    },
    {
        "start": 320.22,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-02.html?entry={entry}", secondaryHref: "./lesson-operations-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-01", coachSource: "./ai-coach.html?source=lesson-operations-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于运营思维：用系统的方式做事情的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "运营思维：用系统的方式做事情", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
