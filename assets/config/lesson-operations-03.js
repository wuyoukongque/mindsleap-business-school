(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第3课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第3课：质量管理：质量不是检出来的",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep64-quality-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：质量管理：质量不是检出来的", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-04.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 供应链：让链条更智能",
                "body": "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-operations-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "质量不是检出来的，而是从设计和过程里管出来的",
                "body": "真正成熟的质量管理，重点是预防问题形成，而不是把问题留到最后一道检验再处理。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "DMAIC 的价值，在于把质量改进做成可重复的闭环",
                "body": "定义、测量、分析、改善、控制，这条链路能让质量管理从经验判断走向数据驱动。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 让质量管理第一次同时具备速度、稳定性和提前量",
                "body": "视觉质检、预测预警、根因分析和体系自动化结合起来，才是 AI 真正重构质量管理的地方。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 3/12", "建议下一节：AI 供应链：让链条更智能", '也可以先整理这一节'], nextHref: "./lesson-operations-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-03", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson3", audioSource: './assets/audio/operations-ep64-quality-management.mp3?v=20260413-operations-03a', vttSrc: './assets/subtitles/operations-ep64-quality-management.vtt?v=20260413-operations-03a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep64-quality-management/slide_01.png",
            "label": "质量管理：质量不是检出来的",
            "caption": "这一节会帮助你系统理解：质量管理：质量不是检出来的"
        },
        {
            "file": "operations-ep64-quality-management/slide_02.png",
            "label": "质量管理到底在管什么",
            "caption": "质量管理最核心的转变，是从“出了问题再查”转向“在问题形成前就开始控制”。"
        },
        {
            "file": "operations-ep64-quality-management/slide_03.png",
            "label": "六西格玛与 DMAIC",
            "caption": "六西格玛真正值得学的，不只是标准有多高，而是它把质量改进做成了一条数据驱动的闭环。"
        },
        {
            "file": "operations-ep64-quality-management/slide_04.png",
            "label": "AI 视觉质检",
            "caption": "AI 视觉质检的价值，不只是替人看，而是把质检标准真正稳定下来。"
        },
        {
            "file": "operations-ep64-quality-management/slide_05.png",
            "label": "预测性质控与根因分析",
            "caption": "真正成熟的质控，不是等产品坏了再挑出来，而是尽量让问题不要发生。"
        },
        {
            "file": "operations-ep64-quality-management/slide_06.png",
            "label": "质量体系自动化",
            "caption": "当质量体系能自动追踪和闭环，管理者才更容易把注意力放在关键问题上。"
        },
        {
            "file": "operations-ep64-quality-management/slide_07.png",
            "label": "四个通用原则",
            "caption": "无论你是否用 AI，这四个原则都决定了质量管理能不能真正落地。"
        },
        {
            "file": "operations-ep64-quality-management/slide_08.png",
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
            "end": 4.68,
            "text": "今天这一节，我们来聊质量管理。"
        },
        {
            "start": 4.68,
            "end": 6.28,
            "text": "很多管理者一说质量，"
        },
        {
            "start": 6.28,
            "end": 7.84,
            "text": "第一反应就是检验、抽检、"
        },
        {
            "start": 7.84,
            "end": 9.3,
            "text": "返工和投诉处理。"
        },
        {
            "start": 9.3,
            "end": 12.76,
            "text": "但如果你真的这样理解质量管理，就还是太靠后了。"
        },
        {
            "start": 12.76,
            "end": 14.24,
            "text": "质量管理真正要解决的，"
        },
        {
            "start": 14.24,
            "end": 17.06,
            "text": "不是怎么在最后一道关卡把坏产品挑出来。"
        },
        {
            "start": 17.06,
            "end": 20.04,
            "text": "而是怎么尽量让问题不要在前面产生。"
        },
        {
            "start": 20.04,
            "end": 23.88,
            "text": "因为质量一旦出问题，代价从来不只是返工和赔偿。"
        },
        {
            "start": 23.88,
            "end": 25.3,
            "text": "客户信任会受损。"
        },
        {
            "start": 25.54,
            "end": 26.38,
            "text": "品牌会受影响。"
        },
        {
            "start": 26.38,
            "end": 29.14,
            "text": "团队会被拖进大量救火和解释里。"
        },
        {
            "start": 29.14,
            "end": 30.24,
            "text": "所以质量管理，"
        },
        {
            "start": 30.24,
            "end": 32.46,
            "text": "本质上是在管理一种稳定、可靠、"
        },
        {
            "start": 32.46,
            "end": 33.9,
            "text": "可持续的交付能力。"
        },
        {
            "start": 33.9,
            "end": 36.13,
            "text": "先讲一个经典方法，六西格玛。"
        },
        {
            "start": 36.13,
            "end": 39.68,
            "text": "它最早是制造业里非常重要的一套质量改进方法。"
        },
        {
            "start": 39.68,
            "end": 43.8,
            "text": "如果用最直白的话来说，六西格玛追求的是极低的缺陷率。"
        },
        {
            "start": 43.8,
            "end": 47.02,
            "text": "但它真正值得学的，不只是数字标准有多高。"
        },
        {
            "start": 47.02,
            "end": 49.36,
            "text": "而是它背后的改进逻辑非常完整。"
        },
        {
            "start": 49.36,
            "end": 51.06,
            "text": "这套逻辑叫 DMAIC。"
        },
        {
            "start": 51.06,
            "end": 54.5,
            "text": "也就是定义、测量、分析、改善和控制。"
        },
        {
            "start": 54.5,
            "end": 55.76,
            "text": "先定义问题。"
        },
        {
            "start": 55.76,
            "end": 57.36,
            "text": "到底是什么质量问题。"
        },
        {
            "start": 57.36,
            "end": 58.54,
            "text": "影响有多大。"
        },
        {
            "start": 58.54,
            "end": 60.3,
            "text": "目标要改善到什么程度。"
        },
        {
            "start": 60.3,
            "end": 61.64,
            "text": "然后测量现状。"
        },
        {
            "start": 61.64,
            "end": 64.26,
            "text": "不是靠猜，而是把数据拿出来看。"
        },
        {
            "start": 64.26,
            "end": 65.38,
            "text": "接着分析原因。"
        },
        {
            "start": 65.38,
            "end": 68.68,
            "text": "不是停在表面现象，而是往下找到根因。"
        },
        {
            "start": 68.68,
            "end": 70.08,
            "text": "再然后才是改善。"
        },
        {
            "start": 70.08,
            "end": 71.36,
            "text": "最后还要控制，"
        },
        {
            "start": 71.36,
            "end": 73.26,
            "text": "也就是把改善结果稳定住，"
        },
        {
            "start": 73.26,
            "end": 74.66,
            "text": "不要过一阵又回去。"
        },
        {
            "start": 74.66,
            "end": 77.4,
            "text": "你会发现，DMAIC 的重点其实很清楚。"
        },
        {
            "start": 77.4,
            "end": 79.44,
            "text": "质量改进不是靠喊口号。"
        },
        {
            "start": 79.44,
            "end": 81.64,
            "text": "而是靠一条数据驱动的闭环。"
        },
        {
            "start": 81.64,
            "end": 83.1,
            "text": "先把问题讲清楚。"
        },
        {
            "start": 83.1,
            "end": 84.5,
            "text": "再把数据看清楚。"
        },
        {
            "start": 84.5,
            "end": 85.88,
            "text": "再把原因找清楚。"
        },
        {
            "start": 85.88,
            "end": 88.46,
            "text": "最后把动作和控制机制真正接上。"
        },
        {
            "start": 88.46,
            "end": 91.76,
            "text": "这也是为什么很多企业质量问题总是反复出现。"
        },
        {
            "start": 91.76,
            "end": 94.16,
            "text": "因为它只做了改善，没有做分析。"
        },
        {
            "start": 94.16,
            "end": 96.36,
            "text": "或者只做了改善，没有做控制。"
        },
        {
            "start": 96.36,
            "end": 99.92,
            "text": "问题一时被压下去了，但系统并没有真的变稳。"
        },
        {
            "start": 99.92,
            "end": 103.64,
            "text": "好，接下来我们看 AI 到底给质量管理带来了什么变化。"
        },
        {
            "start": 103.64,
            "end": 105.94,
            "text": "我建议你把它理解成四个层次。"
        },
        {
            "start": 105.94,
            "end": 108.03999999999999,
            "text": "第一层，是 AI 视觉质检。"
        },
        {
            "start": 108.04,
            "end": 109.88,
            "text": "传统质检大量依赖人眼。"
        },
        {
            "start": 109.88,
            "end": 111.44,
            "text": "但人眼会疲劳。"
        },
        {
            "start": 111.44,
            "end": 111.92,
            "text": "速度有限。"
        },
        {
            "start": 111.92,
            "end": 115.0,
            "text": "而且不同人对细节的判断标准也会有差异。"
        },
        {
            "start": 115.0,
            "end": 119.36,
            "text": "所以人工质检往往很难同时做到又快、又稳、又持续。"
        },
        {
            "start": 119.36,
            "end": 121.48,
            "text": "AI 视觉质检的优势就在这里。"
        },
        {
            "start": 121.48,
            "end": 123.72,
            "text": "它可以长时间保持同样的判断标准。"
        },
        {
            "start": 123.72,
            "end": 125.76,
            "text": "可以高速检查每一个产品。"
        },
        {
            "start": 125.76,
            "end": 129.10000000000002,
            "text": "也可以识别人眼不容易稳定发现的细小裂纹、"
        },
        {
            "start": 129.10000000000002,
            "end": 130.68,
            "text": "颜色偏差或者结构异常。"
        },
        {
            "start": 130.68,
            "end": 135.22,
            "text": "这意味着质检开始从经验型动作，转向更稳定的系统能力。"
        },
        {
            "start": 135.22,
            "end": 137.36,
            "text": "第二层，是预测性质量控制。"
        },
        {
            "start": 137.36,
            "end": 139.06,
            "text": "这一步比质检更重要。"
        },
        {
            "start": 139.06,
            "end": 143.1,
            "text": "因为它不只是发现问题，而是尽量在问题发生之前就预警。"
        },
        {
            "start": 143.1,
            "end": 145.36,
            "text": "比如生产线温度、压力、速度，"
        },
        {
            "start": 145.36,
            "end": 146.92,
            "text": "或者原料批次的变化，"
        },
        {
            "start": 146.92,
            "end": 148.76,
            "text": "原本看起来都还没有超标。"
        },
        {
            "start": 148.76,
            "end": 153.16,
            "text": "但 AI 已经能从趋势里判断，它们正在往不稳定的方向走。"
        },
        {
            "start": 153.16,
            "end": 155.94,
            "text": "这时候系统就可以提前提醒你检查设备、"
        },
        {
            "start": 155.94,
            "end": 157.58,
            "text": "调整参数或者更换物料。"
        },
        {
            "start": 157.58,
            "end": 160.44,
            "text": "真正好的质量管理，不是返工做得多快。"
        },
        {
            "start": 160.44,
            "end": 162.36,
            "text": "而是缺陷尽量不要产生。"
        },
        {
            "start": 162.36,
            "end": 164.46,
            "text": "第三层，是 AI 根因分析。"
        },
        {
            "start": 164.46,
            "end": 167.52,
            "text": "很多质量问题真正难的，不是看见它，"
        },
        {
            "start": 167.52,
            "end": 169.46,
            "text": "而是知道它为什么会发生。"
        },
        {
            "start": 169.46,
            "end": 171.7,
            "text": "有时候人能看到几个明显原因。"
        },
        {
            "start": 171.7,
            "end": 174.72,
            "text": "但问题背后其实是多个变量一起叠加。"
        },
        {
            "start": 174.72,
            "end": 177.08,
            "text": "原料批次、设备状态、环境湿度、"
        },
        {
            "start": 177.34,
            "end": 178.88,
            "text": "人员操作、参数微调，"
        },
        {
            "start": 178.88,
            "end": 180.84,
            "text": "都可能同时在影响结果。"
        },
        {
            "start": 180.84,
            "end": 181.8,
            "text": "AI 的优势，"
        },
        {
            "start": 181.8,
            "end": 184.24,
            "text": "是它可以同时分析大量历史数据，"
        },
        {
            "start": 184.24,
            "end": 187.41999999999996,
            "text": "去找出那些人很难直观看到的隐蔽关联。"
        },
        {
            "start": 187.42,
            "end": 188.72,
            "text": "这会让分析这一步，"
        },
        {
            "start": 188.72,
            "end": 190.34,
            "text": "不再只靠经验和讨论，"
        },
        {
            "start": 190.34,
            "end": 192.34,
            "text": "而更接近真实的因果结构。"
        },
        {
            "start": 192.34,
            "end": 194.98,
            "text": "第四层，是质量体系自动化。"
        },
        {
            "start": 194.98,
            "end": 197.6,
            "text": "很多企业一提质量体系，就想到文档、"
        },
        {
            "start": 197.6,
            "end": 200.02,
            "text": "审计、版本控制和各种流程表格。"
        },
        {
            "start": 200.02,
            "end": 204.18,
            "text": "这些事情如果完全靠人工来维护，既耗时间，又容易漏项。"
        },
        {
            "start": 204.18,
            "end": 206.48,
            "text": "AI 在这里能帮你做很多基础工作。"
        },
        {
            "start": 206.48,
            "end": 208.1,
            "text": "比如自动追踪文档版本。"
        },
        {
            "start": 208.1,
            "end": 209.94,
            "text": "提前准备审计所需材料。"
        },
        {
            "start": 209.94,
            "end": 211.88,
            "text": "记录每一次不合格事件。"
        },
        {
            "start": 211.88,
            "end": 214.14,
            "text": "追踪纠正措施有没有真正闭环。"
        },
        {
            "start": 214.14,
            "end": 214.96,
            "text": "这样一来，"
        },
        {
            "start": 214.96,
            "end": 216.94,
            "text": "质量体系就不只是为了应付认证，"
        },
        {
            "start": 216.94,
            "end": 219.06,
            "text": "而是能更真实地进入日常运营。"
        },
        {
            "start": 219.06,
            "end": 223.32,
            "text": "到这里，其实可以把 AI 对质量管理的价值总结成一句话。"
        },
        {
            "start": 223.32,
            "end": 227.65999999999997,
            "text": "它让质量管理从事后检查，慢慢走向事前预防和系统闭环。"
        },
        {
            "start": 227.66,
            "end": 229.3,
            "text": "这才是最关键的改变。"
        },
        {
            "start": 229.3,
            "end": 231.58,
            "text": "最后我想再讲四个通用原则。"
        },
        {
            "start": 231.58,
            "end": 234.26,
            "text": "无论你用不用 AI，这四个原则都成立。"
        },
        {
            "start": 234.26,
            "end": 237.54,
            "text": "第一，质量是设计出来的，不是检查出来的。"
        },
        {
            "start": 237.54,
            "end": 239.9,
            "text": "如果产品设计本身就容易出问题，"
        },
        {
            "start": 239.9,
            "end": 241.24,
            "text": "你最后检得再严，"
        },
        {
            "start": 241.24,
            "end": 243.32,
            "text": "也只是把损失留到更后面爆发。"
        },
        {
            "start": 243.32,
            "end": 246.02,
            "text": "第二，要看到质量成本的冰山效应。"
        },
        {
            "start": 246.02,
            "end": 248.56,
            "text": "你看得见的是返工、退货和赔偿。"
        },
        {
            "start": 248.56,
            "end": 251.3,
            "text": "看不见的，是客户流失、品牌伤害、"
        },
        {
            "start": 251.3,
            "end": 253.8,
            "text": "内部士气和管理层被牵走的注意力。"
        },
        {
            "start": 253.8,
            "end": 255.92,
            "text": "第三，要建立全员质量意识。"
        },
        {
            "start": 255.92,
            "end": 258.14,
            "text": "质量不能只是质量部门的工作。"
        },
        {
            "start": 258.14,
            "end": 260.38,
            "text": "如果研发、生产、采购、运营、"
        },
        {
            "start": 260.38,
            "end": 262.8,
            "text": "客服都觉得这件事和自己关系不大，"
        },
        {
            "start": 262.8,
            "end": 265.36,
            "text": "质量问题一定会在系统里反复出现。"
        },
        {
            "start": 265.36,
            "end": 267.74,
            "text": "第四，尽量用数据说话。"
        },
        {
            "start": 267.74,
            "end": 269.76,
            "text": "不要只说最近感觉不太稳定。"
        },
        {
            "start": 269.76,
            "end": 272.28,
            "text": "而是要能回答，缺陷率是多少，"
        },
        {
            "start": 272.28,
            "end": 274.16,
            "text": "趋势是在变好还是变差，"
        },
        {
            "start": 274.16,
            "end": 276.1,
            "text": "波动到底来自哪里。"
        },
        {
            "start": 276.1,
            "end": 278.44,
            "text": "AI 会让数据的采集和分析更容易，"
        },
        {
            "start": 278.44,
            "end": 281.46,
            "text": "但前提还是你愿不愿意真的回到数据。"
        },
        {
            "start": 281.46,
            "end": 282.98,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 282.98,
            "end": 285.12,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 285.12,
            "end": 286.68,
            "text": "第一，质量管理的核心，"
        },
        {
            "start": 286.68,
            "end": 289.04,
            "text": "是把问题尽量挡在形成之前，"
        },
        {
            "start": 289.04,
            "end": 292.34,
            "text": "而不是等产品做出来以后再靠检查补救。"
        },
        {
            "start": 292.34,
            "end": 296.0,
            "text": "第二，六西格玛和 DMAIC 真正重要的地方，"
        },
        {
            "start": 296.0,
            "end": 299.22,
            "text": "是它提供了一条数据驱动的质量改进闭环。"
        },
        {
            "start": 299.22,
            "end": 301.94,
            "text": "第三，AI 对质量管理最重要的价值，"
        },
        {
            "start": 301.94,
            "end": 303.98,
            "text": "是让视觉质检、预测预警、"
        },
        {
            "start": 303.98,
            "end": 306.74,
            "text": "根因分析和体系管理同时变得更早、"
        },
        {
            "start": 307.02,
            "end": 307.86,
            "text": "更稳、更系统。"
        },
        {
            "start": 307.86,
            "end": 310.96,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 310.96,
            "end": 313.88,
            "text": "选你业务里一个最容易出质量问题的环节。"
        },
        {
            "start": 313.88,
            "end": 315.54,
            "text": "然后问自己三个问题。"
        },
        {
            "start": 315.54,
            "end": 319.58,
            "text": "问题现在主要是靠事后检查发现，还是已经能提前预防。"
        },
        {
            "start": 319.58,
            "end": 321.0,
            "text": "根因到底清不清楚。"
        },
        {
            "start": 321.0,
            "end": 322.2,
            "text": "如果引入 AI，"
        },
        {
            "start": 322.2,
            "end": 324.52,
            "text": "最值得先放进去的是视觉识别、"
        },
        {
            "start": 324.52,
            "end": 327.78,
            "text": "预测预警、根因分析，还是体系自动化。"
        },
        {
            "start": 327.78,
            "end": 330.72,
            "text": "你会发现，一旦把这三件事想清楚，"
        },
        {
            "start": 330.72,
            "end": 333.7,
            "text": "质量管理就不再只是一个质量部门的工作，"
        },
        {
            "start": 333.7,
            "end": 336.16,
            "text": "而会重新回到经营系统里。"
        },
        {
            "start": 336.16,
            "end": 336.86,
            "text": "我是 Lincoln。"
        },
        {
            "start": 336.86,
            "end": 339.24,
            "text": "我们下一节，继续聊供应链管理，"
        },
        {
            "start": 339.24,
            "end": 342.16,
            "text": "看看 AI 怎么让整条链路变得更快、更稳、"
        },
        {
            "start": 342.4,
            "end": 342.7,
            "text": "更聪明。"
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
        "end": 33.9,
        "index": 1
    },
    {
        "start": 33.9,
        "end": 105.94,
        "index": 2
    },
    {
        "start": 105.94,
        "end": 135.22,
        "index": 3
    },
    {
        "start": 135.22,
        "end": 192.34,
        "index": 4
    },
    {
        "start": 192.34,
        "end": 229.3,
        "index": 5
    },
    {
        "start": 229.3,
        "end": 281.46,
        "index": 6
    },
    {
        "start": 281.46,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-04.html?entry={entry}", secondaryHref: "./lesson-operations-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-03", coachSource: "./ai-coach.html?source=lesson-operations-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于质量管理：质量不是检出来的的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "质量管理：质量不是检出来的", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
