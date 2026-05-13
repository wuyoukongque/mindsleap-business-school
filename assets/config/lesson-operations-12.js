(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第12课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第12课：自动化路线图：先做什么，后做什么",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep73-automation-roadmap/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：自动化路线图：先做什么，后做什么", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-12", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-operations.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "质量管理：质量不是检出来的",
                "body": "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 供应链：让链条更智能",
                "body": "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "从 RPA 到 Agent：流程自动化的升级",
                "body": "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：一家制造企业的 AI 运营升级",
                "body": "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的运营诊断：用 AI 找到效率瓶颈",
                "body": "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "自动化路线图：先做什么，后做什么",
                "body": "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-operations.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "本期重点总结", summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先理解流程为什么重要",
                "body": "今天是模块五运营管理的最后一期"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "流程看清楚以后",
                "body": "第二步：用四维评估模型给每个流程打分"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "找到真正的瓶颈",
                "body": "风险的评分也是反向的"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "把标准化做起来",
                "body": "第二阶段：深化期"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了整个运营模块。建议回到模块页复盘完整章节结构。", meta: ["当前完成：运营与流程优化 12/12", "你已完成运营模块", '也可以先整理这一节'], nextHref: "./module-operations.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-12", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson12", audioSource: './assets/audio/operations-ep73-automation-roadmap.mp3?v=20260513-operations-09-12a', vttSrc: './assets/subtitles/operations-ep73-automation-roadmap.vtt?v=20260513-operations-09-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep73-automation-roadmap/slide_01.png",
            "label": "自动化路线图：先做什么，后做什么",
            "caption": "这一节会帮助你系统理解：自动化路线图：先做什么，后做什么"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_02.png",
            "label": "先理解流程为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_03.png",
            "label": "流程看清楚以后",
            "caption": "第二步：用四维评估模型给每个流程打分。 候选清单列出来了，怎么排优先级？"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_04.png",
            "label": "找到真正的瓶颈",
            "caption": "风险的评分也是反向的。 五分是风险极低，一分是风险非常高。"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_05.png",
            "label": "把标准化做起来",
            "caption": "第二阶段：深化期。 通常是第四到第九个月。"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_06.png",
            "label": "AI 如何重构运营",
            "caption": "关键是把上面五个要素想清楚。 第五步：建立持续优化机制。"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_07.png",
            "label": "回到你的业务现场",
            "caption": "AI 可能不知道你的某些系统很老旧对接起来很困难，也可能不知道你的某个部门人手特别紧张配合不了。 这些实际情况需要你来补充。"
        },
        {
            "file": "operations-ep73-automation-roadmap/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.82,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.82,
            "end": 4.02,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.02,
            "end": 7.14,
            "text": "今天是模块五运营管理的最后一期。"
        },
        {
            "start": 7.14,
            "end": 11.76,
            "text": "上一期我们做了运营诊断，找到了效率瓶颈和浪费。"
        },
        {
            "start": 11.76,
            "end": 16.26,
            "text": "今天来做一件更具体的事：制定你的自动化路线图。"
        },
        {
            "start": 16.26,
            "end": 19.6,
            "text": "哪些流程该优先用 AI 来做？"
        },
        {
            "start": 19.6,
            "end": 21.44,
            "text": "先做哪个后做哪个？"
        },
        {
            "start": 21.66,
            "end": 22.98,
            "text": "怎么排优先级？"
        },
        {
            "start": 22.98,
            "end": 28.44,
            "text": "很多企业一提到 AI 自动化，就想把所有能自动化的都做了。"
        },
        {
            "start": 28.44,
            "end": 31.4,
            "text": "结果铺得太广，每个项目都做了一点点，"
        },
        {
            "start": 31.4,
            "end": 32.82,
            "text": "没有一个真正做透。"
        },
        {
            "start": 33.26,
            "end": 38.6,
            "text": "正确的做法是：画一张路线图，分阶段、有节奏地推进。"
        },
        {
            "start": 38.6,
            "end": 41.18,
            "text": "第一步：列出候选流程清单。"
        },
        {
            "start": 41.52,
            "end": 44.24,
            "text": "把你企业中所有重复性的、耗时的、"
        },
        {
            "start": 44.24,
            "end": 47.6,
            "text": "有潜力自动化的流程全部列出来。"
        },
        {
            "start": 47.6,
            "end": 48.38,
            "text": "怎么列？"
        },
        {
            "start": 48.800000000000004,
            "end": 49.74,
            "text": "三个来源。"
        },
        {
            "start": 49.86,
            "end": 53.4,
            "text": "第一个来源，上一期的运营诊断结果。"
        },
        {
            "start": 53.4,
            "end": 56.239999999999995,
            "text": "你已经识别出了浪费和瓶颈，"
        },
        {
            "start": 56.24,
            "end": 59.88,
            "text": "那些涉及重复性工作的环节就是候选。"
        },
        {
            "start": 59.88,
            "end": 61.9,
            "text": "第二个来源，问一线员工。"
        },
        {
            "start": 61.9,
            "end": 65.8,
            "text": "直接问他们：\"你每天花时间最多的重复性工作是什么？"
        },
        {
            "start": 65.8,
            "end": 69.06,
            "text": "你觉得最烦、最浪费时间的事情是什么？"
        },
        {
            "start": 69.06,
            "end": 71.44,
            "text": "\"一线员工的反馈往往最直接。"
        },
        {
            "start": 71.44,
            "end": 74.26,
            "text": "第三个来源，按部门扫描。"
        },
        {
            "start": 74.26,
            "end": 76.96,
            "text": "把每个部门的日常工作过一遍。"
        },
        {
            "start": 76.96,
            "end": 78.82,
            "text": "销售部有没有重复的？"
        },
        {
            "start": 78.84,
            "end": 79.78,
            "text": "财务部有没有？"
        },
        {
            "start": 79.94,
            "end": 80.96,
            "text": "客服部有没有？"
        },
        {
            "start": 80.96,
            "end": 82.14,
            "text": "HR有没有？"
        },
        {
            "start": 82.26,
            "end": 83.16,
            "text": "运营部有没有？"
        },
        {
            "start": 83.58,
            "end": 85.92,
            "text": "通常一家中型企业扫描下来，"
        },
        {
            "start": 85.92,
            "end": 88.3,
            "text": "能列出二十到五十个候选流程。"
        },
        {
            "start": 88.3,
            "end": 92.42,
            "text": "第二步：用四维评估模型给每个流程打分。"
        },
        {
            "start": 92.42,
            "end": 95.5,
            "text": "候选清单列出来了，怎么排优先级？"
        },
        {
            "start": 95.5,
            "end": 97.82,
            "text": "我教你一个四维评估模型。"
        },
        {
            "start": 98.02,
            "end": 99.28,
            "text": "第一个维度：价值。"
        },
        {
            "start": 99.28,
            "end": 102.78,
            "text": "这个流程自动化之后，能带来多大的价值？"
        },
        {
            "start": 102.78,
            "end": 105.04,
            "text": "价值可以从几个角度衡量。"
        },
        {
            "start": 105.08,
            "end": 107.04,
            "text": "节省多少人力工时？"
        },
        {
            "start": 107.04,
            "end": 108.3,
            "text": "减少多少错误？"
        },
        {
            "start": 108.3,
            "end": 109.62,
            "text": "提升多少效率？"
        },
        {
            "start": 109.76,
            "end": 111.2,
            "text": "改善多少客户体验？"
        },
        {
            "start": 111.2,
            "end": 114.1,
            "text": "给每个流程的价值打一到五分。"
        },
        {
            "start": 114.1,
            "end": 117.06,
            "text": "五分是价值非常高，一分是价值很低。"
        },
        {
            "start": 117.06,
            "end": 119.06,
            "text": "第二个维度：可行性。"
        },
        {
            "start": 119.06,
            "end": 123.52,
            "text": "这个流程用当前的 AI 技术能不能实现自动化？"
        },
        {
            "start": 123.52,
            "end": 126.08,
            "text": "有些流程技术上已经很成熟了，"
        },
        {
            "start": 126.08,
            "end": 128.9,
            "text": "比如数据录入、报表生成、客服问答。"
        },
        {
            "start": 128.9,
            "end": 131.02,
            "text": "有些流程技术上还有难度，"
        },
        {
            "start": 131.02,
            "end": 132.9,
            "text": "比如需要复杂的创意判断、"
        },
        {
            "start": 133.54,
            "end": 135.72,
            "text": "涉及高度非结构化的信息处理。"
        },
        {
            "start": 135.72,
            "end": 138.22,
            "text": "可行性也打一到五分。"
        },
        {
            "start": 138.22,
            "end": 141.76,
            "text": "五分是技术完全成熟，一分是目前还很难实现。"
        },
        {
            "start": 141.76,
            "end": 143.56,
            "text": "第三个维度：复杂度。"
        },
        {
            "start": 143.56,
            "end": 145.74,
            "text": "实施这个自动化项目有多复杂？"
        },
        {
            "start": 145.74,
            "end": 147.42,
            "text": "要考虑几个因素。"
        },
        {
            "start": 147.42,
            "end": 148.92,
            "text": "需要多少数据准备？"
        },
        {
            "start": 148.92,
            "end": 151.22,
            "text": "需要跟多少个系统做对接？"
        },
        {
            "start": 151.22,
            "end": 153.96,
            "text": "需要改变多少现有的工作流程？"
        },
        {
            "start": 153.96,
            "end": 155.72,
            "text": "涉及多少部门的配合？"
        },
        {
            "start": 155.72,
            "end": 158.56,
            "text": "复杂度的评分是反向的。"
        },
        {
            "start": 158.56,
            "end": 161.26,
            "text": "五分是非常简单，一分是非常复杂。"
        },
        {
            "start": 161.26,
            "end": 163.04,
            "text": "第四个维度：风险。"
        },
        {
            "start": 163.04,
            "end": 165.98,
            "text": "如果自动化出了问题，后果有多严重？"
        },
        {
            "start": 165.98,
            "end": 168.58,
            "text": "有些流程出了错可以补救，"
        },
        {
            "start": 168.58,
            "end": 171.6,
            "text": "比如内部报表做错了重新做就行。"
        },
        {
            "start": 171.6,
            "end": 173.78,
            "text": "有些流程出了错后果很严重，"
        },
        {
            "start": 173.78,
            "end": 176.3,
            "text": "比如给客户发了错误的报价、"
        },
        {
            "start": 176.3,
            "end": 178.2,
            "text": "财务数据算错了。"
        },
        {
            "start": 178.2,
            "end": 180.42,
            "text": "风险的评分也是反向的。"
        },
        {
            "start": 180.42,
            "end": 183.36,
            "text": "五分是风险极低，一分是风险非常高。"
        },
        {
            "start": 183.36,
            "end": 185.84,
            "text": "四个维度的分数加起来，"
        },
        {
            "start": 185.84,
            "end": 189.48,
            "text": "总分最高的流程就是你应该最先自动化的。"
        },
        {
            "start": 189.48,
            "end": 190.04,
            "text": "举个例子。"
        },
        {
            "start": 190.04,
            "end": 195.66,
            "text": "流程 A：每天从邮箱收集供应商报价，录入到采购系统。"
        },
        {
            "start": 195.66,
            "end": 198.64,
            "text": "价值四分，因为每天花两小时。"
        },
        {
            "start": 198.64,
            "end": 201.34,
            "text": "可行性五分，因为技术成熟。"
        },
        {
            "start": 201.34,
            "end": 204.52,
            "text": "复杂度四分，因为实施简单。"
        },
        {
            "start": 204.52,
            "end": 207.52,
            "text": "风险四分，因为出错可以修正。"
        },
        {
            "start": 207.52,
            "end": 209.44,
            "text": "总分十七分。"
        },
        {
            "start": 209.44,
            "end": 211.96,
            "text": "流程 B：分析客户的投诉邮件，"
        },
        {
            "start": 211.96,
            "end": 214.9,
            "text": "自动分类并分配给对应的处理人员。"
        },
        {
            "start": 214.9,
            "end": 216.08,
            "text": "价值三分。"
        },
        {
            "start": 216.08,
            "end": 217.46,
            "text": "可行性四分。"
        },
        {
            "start": 217.46,
            "end": 218.64,
            "text": "复杂度三分。"
        },
        {
            "start": 218.64,
            "end": 219.78,
            "text": "风险三分。"
        },
        {
            "start": 220.16,
            "end": 221.72,
            "text": "总分十三分。"
        },
        {
            "start": 221.72,
            "end": 225.06,
            "text": "流程 C：自动生成每月的经营分析报告。"
        },
        {
            "start": 225.06,
            "end": 226.4,
            "text": "价值五分。"
        },
        {
            "start": 226.4,
            "end": 229.6,
            "text": "可行性三分，因为涉及多个数据源的整合。"
        },
        {
            "start": 229.6,
            "end": 232.14,
            "text": "复杂度二分，因为实施比较复杂。"
        },
        {
            "start": 232.14,
            "end": 233.58,
            "text": "风险三分。"
        },
        {
            "start": 233.58,
            "end": 234.64,
            "text": "总分十三分。"
        },
        {
            "start": 235.2,
            "end": 238.12,
            "text": "按这个评分，流程 A 应该先做。"
        },
        {
            "start": 238.12,
            "end": 241.54,
            "text": "价值高、可行性高、复杂度低、风险低。"
        },
        {
            "start": 241.54,
            "end": 243.42,
            "text": "是一个\"速赢\"项目。"
        },
        {
            "start": 243.42,
            "end": 245.78,
            "text": "流程 B 和 C 并列第二梯队。"
        },
        {
            "start": 245.78,
            "end": 248.92,
            "text": "可以在流程 A 跑通之后再做。"
        },
        {
            "start": 248.92,
            "end": 251.66,
            "text": "第三步：画出你的自动化路线图。"
        },
        {
            "start": 251.66,
            "end": 256.2,
            "text": "把评分排好之后，按照时间轴排成一张路线图。"
        },
        {
            "start": 256.2,
            "end": 257.66,
            "text": "我建议分三个阶段。"
        },
        {
            "start": 257.66,
            "end": 259.94,
            "text": "第一阶段：快速见效期。"
        },
        {
            "start": 259.94,
            "end": 262.06,
            "text": "通常是第一到第三个月。"
        },
        {
            "start": 262.06,
            "end": 264.86,
            "text": "选两到三个总分最高的\"速赢\"流程。"
        },
        {
            "start": 264.86,
            "end": 267.38,
            "text": "这些流程实施简单、见效快。"
        },
        {
            "start": 267.38,
            "end": 271.12,
            "text": "目的是让团队看到 AI 自动化的效果，建立信心。"
        },
        {
            "start": 271.12,
            "end": 273.02,
            "text": "第二阶段：深化期。"
        },
        {
            "start": 273.02,
            "end": 275.16,
            "text": "通常是第四到第九个月。"
        },
        {
            "start": 275.16,
            "end": 279.54,
            "text": "在第一阶段的基础上，推进五到八个中等复杂度的流程。"
        },
        {
            "start": 279.54,
            "end": 283.28,
            "text": "这些流程价值高但实施需要更多的准备工作。"
        },
        {
            "start": 283.86,
            "end": 287.52,
            "text": "比如需要整理数据、对接系统、调整工作流程。"
        },
        {
            "start": 287.52,
            "end": 289.76,
            "text": "第三阶段：规模化期。"
        },
        {
            "start": 289.76,
            "end": 291.62,
            "text": "通常是第十个月之后。"
        },
        {
            "start": 291.62,
            "end": 294.5,
            "text": "把自动化扩展到更多流程和部门。"
        },
        {
            "start": 294.5,
            "end": 298.4,
            "text": "同时回顾和优化前面已经实施的自动化项目，"
        },
        {
            "start": 298.4,
            "end": 300.22,
            "text": "让它们运行得更好。"
        },
        {
            "start": 300.22,
            "end": 302.48,
            "text": "这三个阶段不是死板的。"
        },
        {
            "start": 302.48,
            "end": 305.2,
            "text": "根据你的企业实际情况可以调整节奏。"
        },
        {
            "start": 305.2,
            "end": 309.96,
            "text": "关键是不要一上来就铺太多，也不要一个做完才做下一个。"
        },
        {
            "start": 309.96,
            "end": 313.58,
            "text": "每个阶段并行推进两到三个项目是合理的。"
        },
        {
            "start": 313.58,
            "end": 316.98,
            "text": "第四步：为每个自动化项目制定实施计划。"
        },
        {
            "start": 316.98,
            "end": 319.28,
            "text": "每一个自动化项目，不管大小，"
        },
        {
            "start": 319.28,
            "end": 321.34,
            "text": "都需要一个简单的实施计划。"
        },
        {
            "start": 321.34,
            "end": 323.48,
            "text": "实施计划包括五个要素。"
        },
        {
            "start": 323.48,
            "end": 325.22,
            "text": "第一，目标。"
        },
        {
            "start": 325.22,
            "end": 326.88,
            "text": "这个项目要达到什么效果？"
        },
        {
            "start": 326.88,
            "end": 327.24,
            "text": "比如："
        },
        {
            "start": 327.24,
            "end": 331.94,
            "text": "将供应商报价录入的时间从每天两小时减少到十分钟。"
        },
        {
            "start": 331.94,
            "end": 333.66,
            "text": "第二，方案。"
        },
        {
            "start": 333.66,
            "end": 335.64,
            "text": "用什么技术和工具来实现？"
        },
        {
            "start": 335.64,
            "end": 338.0,
            "text": "是用 RPA 还是 AI Agent？"
        },
        {
            "start": 338.0,
            "end": 339.72,
            "text": "用哪个产品或平台？"
        },
        {
            "start": 339.72,
            "end": 341.72,
            "text": "第三，数据准备。"
        },
        {
            "start": 341.72,
            "end": 342.72,
            "text": "需要什么数据？"
        },
        {
            "start": 342.72,
            "end": 343.82,
            "text": "数据在哪里？"
        },
        {
            "start": 343.82,
            "end": 345.38,
            "text": "需要做什么清洗和整理？"
        },
        {
            "start": 345.38,
            "end": 347.32,
            "text": "第四，时间表。"
        },
        {
            "start": 347.32,
            "end": 350.38,
            "text": "什么时候开始、什么时候测试、什么时候上线。"
        },
        {
            "start": 350.38,
            "end": 352.04,
            "text": "第五，负责人。"
        },
        {
            "start": 352.04,
            "end": 353.26,
            "text": "谁来主导这个项目？"
        },
        {
            "start": 353.26,
            "end": 354.18,
            "text": "谁来配合？"
        },
        {
            "start": 354.18,
            "end": 356.06,
            "text": "不需要写几十页的方案。"
        },
        {
            "start": 356.06,
            "end": 357.68,
            "text": "一页纸就够了。"
        },
        {
            "start": 357.68,
            "end": 359.76,
            "text": "关键是把上面五个要素想清楚。"
        },
        {
            "start": 359.76,
            "end": 362.56,
            "text": "第五步：建立持续优化机制。"
        },
        {
            "start": 362.56,
            "end": 365.18,
            "text": "自动化路线图不是画完就完了。"
        },
        {
            "start": 365.18,
            "end": 367.0,
            "text": "你需要一个持续优化的机制。"
        },
        {
            "start": 367.42,
            "end": 368.14,
            "text": "三个建议。"
        },
        {
            "start": 368.64000000000004,
            "end": 370.1,
            "text": "第一，每月复盘。"
        },
        {
            "start": 370.1,
            "end": 374.66,
            "text": "每个月回顾一次所有已上线的自动化项目的运行情况。"
        },
        {
            "start": 374.66,
            "end": 375.94,
            "text": "准确率怎么样？"
        },
        {
            "start": 375.94,
            "end": 377.34,
            "text": "效率提升了多少？"
        },
        {
            "start": 377.34,
            "end": 378.34000000000003,
            "text": "有没有异常？"
        },
        {
            "start": 378.34000000000003,
            "end": 379.82,
            "text": "哪些需要调整？"
        },
        {
            "start": 379.82,
            "end": 382.48,
            "text": "第二，每季度更新路线图。"
        },
        {
            "start": 382.48,
            "end": 385.7,
            "text": "每个季度重新评估一次候选流程清单。"
        },
        {
            "start": 385.7,
            "end": 388.34,
            "text": "因为三个月里可能会出现新的痛点、"
        },
        {
            "start": 388.34,
            "end": 391.2,
            "text": "新的 AI 工具、新的业务需求。"
        },
        {
            "start": 391.2,
            "end": 393.06,
            "text": "路线图需要动态更新。"
        },
        {
            "start": 393.06,
            "end": 396.08,
            "text": "第三，培养内部的 AI 运营能力。"
        },
        {
            "start": 396.08,
            "end": 398.2,
            "text": "不能完全依赖外部供应商。"
        },
        {
            "start": 398.2,
            "end": 401.22,
            "text": "要在团队内部培养一到两个人，"
        },
        {
            "start": 401.22,
            "end": 404.3,
            "text": "能够维护和优化 AI 自动化系统。"
        },
        {
            "start": 404.3,
            "end": 406.4,
            "text": "他们不需要会写代码，"
        },
        {
            "start": 406.4,
            "end": 408.92,
            "text": "但需要理解 AI 的能力和局限，"
        },
        {
            "start": 408.92,
            "end": 411.32,
            "text": "能够做基本的配置和调优。"
        },
        {
            "start": 411.32,
            "end": 413.24,
            "text": "给大家一个实战提示。"
        },
        {
            "start": 413.24,
            "end": 417.0,
            "text": "现在就可以用 AI 来帮你制定自动化路线图。"
        },
        {
            "start": 417.0,
            "end": 419.42,
            "text": "你可以把以下信息发给 AI。"
        },
        {
            "start": 419.96,
            "end": 423.54,
            "text": "\"我的企业是做什么的，大约多少人，有哪些部门。"
        },
        {
            "start": 423.54,
            "end": 428.08,
            "text": "以下是我列出的候选自动化流程，然后列出你的流程清单。"
        },
        {
            "start": 428.08,
            "end": 431.16,
            "text": "请帮我用四维评估模型打分，"
        },
        {
            "start": 431.16,
            "end": 434.48,
            "text": "并制定一个分三个阶段的自动化路线图。"
        },
        {
            "start": 434.48,
            "end": 434.90000000000003,
            "text": "\""
        },
        {
            "start": 434.90000000000003,
            "end": 438.06,
            "text": "AI 会给你一份初步的路线图。"
        },
        {
            "start": 438.06,
            "end": 441.3,
            "text": "你需要根据你对业务的了解来调整。"
        },
        {
            "start": 441.3,
            "end": 446.04,
            "text": "AI 可能不知道你的某些系统很老旧对接起来很困难，"
        },
        {
            "start": 446.04,
            "end": 450.68,
            "text": "也可能不知道你的某个部门人手特别紧张配合不了。"
        },
        {
            "start": 450.68,
            "end": 453.24,
            "text": "这些实际情况需要你来补充。"
        },
        {
            "start": 453.24,
            "end": 457.24,
            "text": "但 AI 给你的框架和方向是很有价值的。"
        },
        {
            "start": 457.24,
            "end": 461.48,
            "text": "它能帮你结构化地思考这个问题，避免遗漏和偏见。"
        },
        {
            "start": 461.48,
            "end": 462.92,
            "text": "好，总结一下。"
        },
        {
            "start": 462.92,
            "end": 464.9,
            "text": "自动化路线图五步法："
        },
        {
            "start": 464.9,
            "end": 467.04,
            "text": "列出候选流程清单、"
        },
        {
            "start": 467.04,
            "end": 471.02,
            "text": "四维评估模型打分（价值、可行性、"
        },
        {
            "start": 471.02,
            "end": 472.08,
            "text": "复杂度、风险）、"
        },
        {
            "start": 472.08,
            "end": 476.06,
            "text": "画出三阶段路线图（快速见效、深化、"
        },
        {
            "start": 476.06,
            "end": 476.6,
            "text": "规模化）、"
        },
        {
            "start": 476.6,
            "end": 480.52,
            "text": "为每个项目做实施计划（目标、方案、"
        },
        {
            "start": 480.52,
            "end": 482.6,
            "text": "数据、时间表、负责人）、"
        },
        {
            "start": 482.6,
            "end": 484.22,
            "text": "建立持续优化机制。"
        },
        {
            "start": 484.22,
            "end": 487.02,
            "text": "这就是模块五运营管理的全部内容。"
        },
        {
            "start": 487.02,
            "end": 489.94,
            "text": "我们从运营思维、精益管理、"
        },
        {
            "start": 489.94,
            "end": 493.94,
            "text": "质量管理讲起，到供应链、流程自动化、"
        },
        {
            "start": 493.94,
            "end": 496.06,
            "text": "数据化运营、项目管理，"
        },
        {
            "start": 496.06,
            "end": 499.0,
            "text": "再到三个案例和两个实战工作坊。"
        },
        {
            "start": 499.0,
            "end": 502.94,
            "text": "希望这些内容能帮你把运营这件事做得更好。"
        },
        {
            "start": 502.94,
            "end": 506.44,
            "text": "从下一期开始，我们进入模块六：创新与创业。"
        },
        {
            "start": 506.44,
            "end": 508.68,
            "text": "我是 Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 9.433,
        "index": 0
    },
    {
        "start": 9.433,
        "end": 64.147,
        "index": 1
    },
    {
        "start": 64.147,
        "end": 120.039,
        "index": 2
    },
    {
        "start": 120.039,
        "end": 175.814,
        "index": 3
    },
    {
        "start": 175.814,
        "end": 231.235,
        "index": 4
    },
    {
        "start": 231.235,
        "end": 283.944,
        "index": 5
    },
    {
        "start": 283.944,
        "end": 349.387,
        "index": 6
    },
    {
        "start": 349.387,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-operations.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-operations.html?entry={entry}", secondaryHref: "./module-operations.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-12", coachSource: "./ai-coach.html?source=lesson-operations-12" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于自动化路线图：先做什么，后做什么的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "自动化路线图：先做什么，后做什么", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-operations.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
