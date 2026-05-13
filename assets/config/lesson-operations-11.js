(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第11课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第11课：你的运营诊断：用 AI 找到效率瓶颈",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep72-ops-diagnosis/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的运营诊断：用 AI 找到效率瓶颈", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-12.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "自动化路线图：先做什么，后做什么",
                "body": "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-operations-12.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "本期重点总结", summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先理解流程为什么重要",
                "body": "今天是一期实战工作坊"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "流程看清楚以后",
                "body": "描述的时候要包括：每个步骤是什么、谁做的、大概要多长时间、用什么工具"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "找到真正的瓶颈",
                "body": "系统的整体产出取决于最薄弱的环节"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "把标准化做起来",
                "body": "\" AI 会帮你识别出来，比如： \"步骤三到步骤四之间有两天的等待时间，属于等待浪费"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 11/12", "建议下一节：自动化路线图：先做什么，后做什么", '也可以先整理这一节'], nextHref: "./lesson-operations-12.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-11", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson11", audioSource: './assets/audio/operations-ep72-ops-diagnosis.mp3?v=20260513-operations-09-12a', vttSrc: './assets/subtitles/operations-ep72-ops-diagnosis.vtt?v=20260513-operations-09-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep72-ops-diagnosis/slide_01.png",
            "label": "你的运营诊断：用 AI 找到效率瓶颈",
            "caption": "这一节会帮助你系统理解：你的运营诊断：用 AI 找到效率瓶颈"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_02.png",
            "label": "先理解流程为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_03.png",
            "label": "流程看清楚以后",
            "caption": "描述的时候要包括：每个步骤是什么、谁做的、大概要多长时间、用什么工具。 AI 会帮你整理成一个清晰的流程步骤列表，可能还会发现你遗漏的环节。"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_04.png",
            "label": "找到真正的瓶颈",
            "caption": "系统的整体产出取决于最薄弱的环节。 怎么找瓶颈？"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_05.png",
            "label": "把标准化做起来",
            "caption": "\" AI 会帮你识别出来，比如： \"步骤三到步骤四之间有两天的等待时间，属于等待浪费。 \" \"步骤五的返工率是百分之二十，属于缺陷和返工浪费。"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_06.png",
            "label": "AI 如何重构运营",
            "caption": "\" \"建议将步骤四的审批流程从串行改为并行。 三个审批人同时审批而不是依次审批。"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_07.png",
            "label": "回到你的业务现场",
            "caption": "不要只是管理层自己做诊断。 一线员工最了解实际操作中的痛点和浪费。"
        },
        {
            "file": "operations-ep72-ops-diagnosis/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.24,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.24,
            "end": 3.4,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.4,
            "end": 5.7,
            "text": "今天是一期实战工作坊。"
        },
        {
            "start": 5.7,
            "end": 9.08,
            "text": "前面几期我们学了运营管理的框架和案例，"
        },
        {
            "start": 9.08,
            "end": 11.06,
            "text": "今天要把这些知识用起来。"
        },
        {
            "start": 11.06,
            "end": 13.92,
            "text": "我会带你用 AI 做一次系统的运营诊断，"
        },
        {
            "start": 13.92,
            "end": 16.08,
            "text": "找到你企业的效率瓶颈。"
        },
        {
            "start": 16.08,
            "end": 19.92,
            "text": "运营诊断不是随便看看数据、聊聊感觉。"
        },
        {
            "start": 19.92,
            "end": 21.84,
            "text": "它是一个结构化的过程。"
        },
        {
            "start": 21.84,
            "end": 26.7,
            "text": "我今天教你一个五步诊断法，每一步都可以借助 AI 来完成。"
        },
        {
            "start": 26.7,
            "end": 29.48,
            "text": "第一步：绘制核心流程地图。"
        },
        {
            "start": 29.48,
            "end": 34.24,
            "text": "运营诊断的第一件事是把你的核心业务流程画出来。"
        },
        {
            "start": 34.24,
            "end": 35.26,
            "text": "怎么画？"
        },
        {
            "start": 35.26,
            "end": 39.44,
            "text": "找一个你最核心的业务流程，从起点画到终点。"
        },
        {
            "start": 39.44,
            "end": 41.32,
            "text": "把每一个步骤都列出来，"
        },
        {
            "start": 41.32,
            "end": 44.3,
            "text": "标注每个步骤的负责人、平均耗时、"
        },
        {
            "start": 44.3,
            "end": 46.34,
            "text": "使用的工具或系统。"
        },
        {
            "start": 46.34,
            "end": 47.98,
            "text": "比如你是一家电商公司，"
        },
        {
            "start": 47.98,
            "end": 51.48,
            "text": "核心流程可能是：客户下单，订单审核，"
        },
        {
            "start": 51.48,
            "end": 54.96,
            "text": "仓库拣货，包装，发货，客户签收，售后。"
        },
        {
            "start": 55.38,
            "end": 57.0,
            "text": "比如你是一家咨询公司，"
        },
        {
            "start": 57.0,
            "end": 59.88,
            "text": "核心流程可能是：客户需求沟通，"
        },
        {
            "start": 59.88,
            "end": 63.18,
            "text": "方案设计，内部评审，方案修改，"
        },
        {
            "start": 63.6,
            "end": 66.18,
            "text": "客户提案，项目执行，项目交付，"
        },
        {
            "start": 66.7,
            "end": 67.44,
            "text": "满意度回访。"
        },
        {
            "start": 67.44,
            "end": 69.38,
            "text": "AI 怎么帮你做这一步？"
        },
        {
            "start": 69.38,
            "end": 73.54,
            "text": "你可以把你的业务流程用自然语言描述给 AI，"
        },
        {
            "start": 73.54,
            "end": 77.06,
            "text": "让 AI 帮你生成一个结构化的流程图。"
        },
        {
            "start": 77.06,
            "end": 80.58,
            "text": "描述的时候要包括：每个步骤是什么、"
        },
        {
            "start": 80.58,
            "end": 83.9,
            "text": "谁做的、大概要多长时间、用什么工具。"
        },
        {
            "start": 83.9,
            "end": 87.52,
            "text": "AI 会帮你整理成一个清晰的流程步骤列表，"
        },
        {
            "start": 87.52,
            "end": 89.92,
            "text": "可能还会发现你遗漏的环节。"
        },
        {
            "start": 89.92,
            "end": 93.16,
            "text": "第二步：量化每个环节的效率。"
        },
        {
            "start": 93.16,
            "end": 97.4,
            "text": "有了流程地图之后，下一步是给每个环节做\"体检\"。"
        },
        {
            "start": 97.4,
            "end": 100.62,
            "text": "对每个环节，你需要收集四个关键数据。"
        },
        {
            "start": 100.62,
            "end": 102.52,
            "text": "第一个数据：处理时间。"
        },
        {
            "start": 102.52,
            "end": 105.76,
            "text": "这个环节实际做事情花多长时间。"
        },
        {
            "start": 105.76,
            "end": 107.74,
            "text": "第二个数据：等待时间。"
        },
        {
            "start": 107.74,
            "end": 112.56,
            "text": "这个环节做完之后，要等多久才能进入下一个环节。"
        },
        {
            "start": 112.56,
            "end": 116.04000000000002,
            "text": "比如方案写完了，要等两天才能安排评审。"
        },
        {
            "start": 116.04000000000002,
            "end": 117.74,
            "text": "这两天就是等待时间。"
        },
        {
            "start": 117.74,
            "end": 119.8,
            "text": "第三个数据：返工率。"
        },
        {
            "start": 119.8,
            "end": 124.18,
            "text": "这个环节做完之后，有多大概率需要返工或者重做。"
        },
        {
            "start": 124.18,
            "end": 126.58,
            "text": "第四个数据：人力投入。"
        },
        {
            "start": 126.58,
            "end": 129.84,
            "text": "这个环节需要几个人、花多少工时。"
        },
        {
            "start": 129.84,
            "end": 132.58,
            "text": "为什么要分\"处理时间\"和\"等待时间\"？"
        },
        {
            "start": 132.58,
            "end": 135.66,
            "text": "因为很多时候，一个流程总耗时很长，"
        },
        {
            "start": 135.66,
            "end": 138.26,
            "text": "但真正做事情的时间并不长，"
        },
        {
            "start": 138.26,
            "end": 140.98,
            "text": "大部分时间都浪费在等待上。"
        },
        {
            "start": 140.98,
            "end": 144.64,
            "text": "你可以把这些数据输入 AI，让 AI 帮你做分析。"
        },
        {
            "start": 144.64,
            "end": 147.56,
            "text": "AI 会算出每个环节的\"效率比\"，"
        },
        {
            "start": 147.56,
            "end": 150.04,
            "text": "也就是处理时间占总时间的比例。"
        },
        {
            "start": 150.04,
            "end": 153.36,
            "text": "效率比低的环节，说明等待浪费严重。"
        },
        {
            "start": 153.36,
            "end": 155.56,
            "text": "第三步：识别瓶颈环节。"
        },
        {
            "start": 155.56,
            "end": 158.22,
            "text": "还记得我们在第一期讲的瓶颈理论吗？"
        },
        {
            "start": 158.22,
            "end": 161.68,
            "text": "系统的整体产出取决于最薄弱的环节。"
        },
        {
            "start": 161.68,
            "end": 162.86,
            "text": "怎么找瓶颈？"
        },
        {
            "start": 162.86,
            "end": 163.9,
            "text": "有三个信号。"
        },
        {
            "start": 163.9,
            "end": 165.39999999999998,
            "text": "第一个信号：堆积。"
        },
        {
            "start": 165.4,
            "end": 169.08,
            "text": "如果某个环节的前面经常\"堆积\"大量待处理的工作，"
        },
        {
            "start": 169.08,
            "end": 171.74,
            "text": "那这个环节很可能是瓶颈。"
        },
        {
            "start": 171.74,
            "end": 173.46,
            "text": "第二个信号：等待。"
        },
        {
            "start": 173.46,
            "end": 178.14,
            "text": "如果某个环节经常在等上游的输出，那上游可能是瓶颈。"
        },
        {
            "start": 178.14,
            "end": 181.94,
            "text": "如果某个环节做完了下游总是来不及接，"
        },
        {
            "start": 181.94,
            "end": 183.92,
            "text": "那这个环节可能跑得太快，"
        },
        {
            "start": 183.92,
            "end": 185.36,
            "text": "资源配置不合理。"
        },
        {
            "start": 185.36,
            "end": 188.04,
            "text": "第三个信号：产能利用率不匹配。"
        },
        {
            "start": 188.04,
            "end": 190.76,
            "text": "如果有些环节忙得不可开交，"
        },
        {
            "start": 190.76,
            "end": 192.34,
            "text": "有些环节很闲，"
        },
        {
            "start": 192.34,
            "end": 195.38,
            "text": "说明资源分配和产能不匹配。"
        },
        {
            "start": 195.38,
            "end": 197.55999999999997,
            "text": "忙的那个环节就是瓶颈。"
        },
        {
            "start": 197.55999999999997,
            "end": 200.0,
            "text": "让 AI 帮你做瓶颈分析。"
        },
        {
            "start": 200.0,
            "end": 205.3,
            "text": "把每个环节的处理能力、实际处理量、等待时间输入 AI。"
        },
        {
            "start": 205.3,
            "end": 209.88,
            "text": "AI 可以帮你找到产能最紧张的环节，也就是你的瓶颈。"
        },
        {
            "start": 209.88,
            "end": 211.84,
            "text": "第四步：分析浪费。"
        },
        {
            "start": 211.84,
            "end": 216.08,
            "text": "找到瓶颈之后，还要看看整个流程中有哪些浪费。"
        },
        {
            "start": 216.08,
            "end": 218.4,
            "text": "回顾一下我们在精益管理"
        },
        {
            "start": 218.4,
            "end": 221.22,
            "text": "那一期讲的七种浪费加四种新浪费。"
        },
        {
            "start": 221.22,
            "end": 223.7,
            "text": "你可以用 AI 做一个浪费审计。"
        },
        {
            "start": 223.7,
            "end": 228.98,
            "text": "把你的流程地图和每个环节的数据发给 AI，问它："
        },
        {
            "start": 228.98,
            "end": 231.86,
            "text": "\"请帮我分析这个流程中可能存在的浪费。"
        },
        {
            "start": 231.86,
            "end": 236.78,
            "text": "按照精益管理的七种经典浪费和四种知识工作浪费来分类。"
        },
        {
            "start": 236.78,
            "end": 237.2,
            "text": "\""
        },
        {
            "start": 237.23999999999998,
            "end": 239.66,
            "text": "AI 会帮你识别出来，比如："
        },
        {
            "start": 239.66,
            "end": 244.1,
            "text": "\"步骤三到步骤四之间有两天的等待时间，属于等待浪费。"
        },
        {
            "start": 244.1,
            "end": 244.51999999999998,
            "text": "\""
        },
        {
            "start": 244.51999999999998,
            "end": 248.4,
            "text": "\"步骤五的返工率是百分之二十，属于缺陷和返工浪费。"
        },
        {
            "start": 248.4,
            "end": 248.82,
            "text": "\""
        },
        {
            "start": 248.88,
            "end": 252.54,
            "text": "\"步骤二和步骤六有大量重复的数据录入工作，"
        },
        {
            "start": 252.54,
            "end": 254.78,
            "text": "属于重复性脑力劳动浪费。"
        },
        {
            "start": 254.78,
            "end": 255.2,
            "text": "\""
        },
        {
            "start": 255.2,
            "end": 257.76,
            "text": "然后让 AI 按照浪费的大小排序。"
        },
        {
            "start": 257.76,
            "end": 259.78,
            "text": "最大的浪费优先解决。"
        },
        {
            "start": 259.78,
            "end": 261.76,
            "text": "第五步：制定改善方案。"
        },
        {
            "start": 261.76,
            "end": 264.8,
            "text": "诊断完了，最后一步是制定改善方案。"
        },
        {
            "start": 264.8,
            "end": 268.84,
            "text": "对每个识别出来的问题，考虑三种类型的改善方案。"
        },
        {
            "start": 268.84,
            "end": 270.32,
            "text": "第一种：消除。"
        },
        {
            "start": 270.32,
            "end": 272.7,
            "text": "这个步骤能不能直接去掉？"
        },
        {
            "start": 272.7,
            "end": 276.22,
            "text": "有些步骤是历史遗留的，当初有原因，"
        },
        {
            "start": 276.22,
            "end": 278.14,
            "text": "但现在已经不需要了。"
        },
        {
            "start": 278.14,
            "end": 279.44,
            "text": "第二种：自动化。"
        },
        {
            "start": 279.44,
            "end": 282.68,
            "text": "这个步骤能不能用 AI 或者 RPA 自动化？"
        },
        {
            "start": 282.68,
            "end": 285.06,
            "text": "判断标准就是我们之前讲的：高频、"
        },
        {
            "start": 285.06,
            "end": 286.68,
            "text": "规则明确的用 RPA，"
        },
        {
            "start": 286.68,
            "end": 289.58,
            "text": "需要理解判断的用 AI Agent。"
        },
        {
            "start": 289.58,
            "end": 290.96,
            "text": "第三种：优化。"
        },
        {
            "start": 290.96,
            "end": 293.32,
            "text": "不能消除也不能自动化的步骤，"
        },
        {
            "start": 293.32,
            "end": 297.14,
            "text": "能不能通过调整流程、重新分配资源、"
        },
        {
            "start": 297.14,
            "end": 299.2,
            "text": "改变工具来提升效率？"
        },
        {
            "start": 299.2,
            "end": 302.98,
            "text": "让 AI 帮你为每个问题生成改善建议。"
        },
        {
            "start": 302.98,
            "end": 306.82,
            "text": "AI 可以根据你的流程特点，给出具体的建议。"
        },
        {
            "start": 306.82,
            "end": 307.56,
            "text": "比如："
        },
        {
            "start": 307.56,
            "end": 311.86,
            "text": "\"建议将步骤二的手动数据录入改为 AI 自动提取。"
        },
        {
            "start": 311.86,
            "end": 315.02,
            "text": "预估可以节省每天两小时的人工。"
        },
        {
            "start": 315.02,
            "end": 315.44,
            "text": "\""
        },
        {
            "start": 315.44,
            "end": 319.66,
            "text": "\"建议将步骤四的审批流程从串行改为并行。"
        },
        {
            "start": 319.66,
            "end": 322.7,
            "text": "三个审批人同时审批而不是依次审批。"
        },
        {
            "start": 322.7,
            "end": 326.2,
            "text": "预估可以将审批时间从三天缩短到一天。"
        },
        {
            "start": 326.2,
            "end": 326.62,
            "text": "\""
        },
        {
            "start": 326.62,
            "end": 329.06,
            "text": "给大家一个运营诊断的快速模板。"
        },
        {
            "start": 329.06,
            "end": 333.3,
            "text": "你可以把以下内容发给 AI，让它帮你做诊断。"
        },
        {
            "start": 333.3,
            "end": 338.06,
            "text": "\"我是一家什么行业的什么类型的公司，大约多少人。"
        },
        {
            "start": 338.06,
            "end": 342.64,
            "text": "我们的核心业务流程是这样的：然后描述你的流程步骤。"
        },
        {
            "start": 342.64,
            "end": 347.04,
            "text": "目前遇到的主要问题包括：列出你感受到的痛点。"
        },
        {
            "start": 347.04,
            "end": 349.4,
            "text": "请帮我做一次运营诊断。"
        },
        {
            "start": 349.4,
            "end": 351.84,
            "text": "包括：第一，帮我整理流程地图。"
        },
        {
            "start": 351.84,
            "end": 354.76,
            "text": "第二，分析每个环节可能的瓶颈和浪费。"
        },
        {
            "start": 354.76,
            "end": 359.7,
            "text": "第三，给出改善建议，包括哪些环节可以用 AI 自动化。"
        },
        {
            "start": 359.7,
            "end": 360.12,
            "text": "\""
        },
        {
            "start": 360.12,
            "end": 362.92,
            "text": "AI 会给你一份相当详细的诊断报告。"
        },
        {
            "start": 362.92,
            "end": 367.68,
            "text": "当然，AI 给出的建议需要你根据实际情况做判断和调整。"
        },
        {
            "start": 367.68,
            "end": 371.1,
            "text": "AI 不了解你公司的具体情况和限制条件，"
        },
        {
            "start": 371.1,
            "end": 373.08,
            "text": "它给的是方向性的建议。"
        },
        {
            "start": 373.08,
            "end": 376.58,
            "text": "关键是你要带着框架去看 AI 的建议："
        },
        {
            "start": 376.58,
            "end": 379.92,
            "text": "这个建议解决的是瓶颈问题还是浪费问题？"
        },
        {
            "start": 379.92,
            "end": 383.06,
            "text": "是消除、自动化还是优化？"
        },
        {
            "start": 383.06,
            "end": 384.34,
            "text": "优先级怎么排？"
        },
        {
            "start": 384.34,
            "end": 387.62,
            "text": "最后分享几个运营诊断的实用建议。"
        },
        {
            "start": 387.62,
            "end": 388.78,
            "text": "第一，定期做。"
        },
        {
            "start": 388.78,
            "end": 390.84,
            "text": "运营诊断不是做一次就完了。"
        },
        {
            "start": 390.84,
            "end": 392.82,
            "text": "建议至少每季度做一次。"
        },
        {
            "start": 392.82,
            "end": 397.16,
            "text": "因为业务在变、流程在变、新的瓶颈会不断出现。"
        },
        {
            "start": 397.16,
            "end": 399.34,
            "text": "第二，让一线参与。"
        },
        {
            "start": 399.34,
            "end": 401.78999999999996,
            "text": "不要只是管理层自己做诊断。"
        },
        {
            "start": 401.78999999999996,
            "end": 405.08,
            "text": "一线员工最了解实际操作中的痛点和浪费。"
        },
        {
            "start": 405.08,
            "end": 406.53999999999996,
            "text": "让他们参与诊断，"
        },
        {
            "start": 406.54,
            "end": 409.32,
            "text": "你会发现很多坐在办公室里看不到的问题。"
        },
        {
            "start": 409.32,
            "end": 411.76,
            "text": "第三，从小处着手。"
        },
        {
            "start": 411.76,
            "end": 414.44,
            "text": "不要试图一次解决所有问题。"
        },
        {
            "start": 414.44,
            "end": 418.32,
            "text": "找到最大的那一两个瓶颈，先解决它们。"
        },
        {
            "start": 418.32,
            "end": 422.38,
            "text": "解决了之后再重新诊断，找下一个瓶颈。"
        },
        {
            "start": 422.38,
            "end": 425.02,
            "text": "持续改善，每次进步一点。"
        },
        {
            "start": 425.02,
            "end": 426.84,
            "text": "第四，量化效果。"
        },
        {
            "start": 426.84,
            "end": 429.94,
            "text": "每次改善之后，要量化效果。"
        },
        {
            "start": 429.94,
            "end": 433.68,
            "text": "省了多少时间、减少了多少成本、提升了多少效率。"
        },
        {
            "start": 433.68,
            "end": 436.8,
            "text": "用数据来验证改善是否有效。"
        },
        {
            "start": 436.8,
            "end": 438.48,
            "text": "好，总结一下。"
        },
        {
            "start": 438.48,
            "end": 441.14,
            "text": "运营诊断五步法：绘制流程地图、"
        },
        {
            "start": 441.14,
            "end": 444.1,
            "text": "量化每个环节的效率、识别瓶颈、"
        },
        {
            "start": 444.1,
            "end": 446.34,
            "text": "分析浪费、制定改善方案。"
        },
        {
            "start": 446.34,
            "end": 448.72,
            "text": "每一步都可以用 AI 辅助完成。"
        },
        {
            "start": 448.72,
            "end": 452.56,
            "text": "改善方案三种类型：消除、自动化、优化。"
        },
        {
            "start": 452.56,
            "end": 457.72,
            "text": "运营诊断要定期做、让一线参与、从小处着手、量化效果。"
        },
        {
            "start": 457.72,
            "end": 462.04,
            "text": "下一期是模块五的最后一期：制定你的自动化路线图。"
        },
        {
            "start": 462.46,
            "end": 464.12,
            "text": "我是 Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 9.997,
        "index": 0
    },
    {
        "start": 9.997,
        "end": 62.728,
        "index": 1
    },
    {
        "start": 62.728,
        "end": 117.459,
        "index": 2
    },
    {
        "start": 117.459,
        "end": 169.316,
        "index": 3
    },
    {
        "start": 169.316,
        "end": 224.297,
        "index": 4
    },
    {
        "start": 224.297,
        "end": 280.653,
        "index": 5
    },
    {
        "start": 280.653,
        "end": 348.754,
        "index": 6
    },
    {
        "start": 348.754,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-12.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-12.html?entry={entry}", secondaryHref: "./lesson-operations-12.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-11", coachSource: "./ai-coach.html?source=lesson-operations-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的运营诊断：用 AI 找到效率瓶颈的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的运营诊断：用 AI 找到效率瓶颈", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-12.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
