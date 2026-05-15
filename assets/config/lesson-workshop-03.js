(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第3课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第3课：AI 数据分析实操：用自然语言分析业务数据",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep109-ai-data-analysis/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 数据分析实操：用自然语言分析业务数据", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-04.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "AI 工具全景图：管理者必备工具栈",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "AI 写作实操：让 AI 帮你写报告、方案、邮件",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "AI 数据分析实操：用自然语言分析业务数据",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 5,
                "title": "AI Agent 深度实操：企业级应用与组织转型",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 编程实操：不会写代码也能做工具",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "AI 工具选型与部署：从试用到全面推广",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-workshop-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先选场景，再选工具",
                "body": "AI 实战不是追新工具，而是从高频、低风险、可验证的业务场景开始。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "输入决定上限，评估决定下限",
                "body": "好的提示词、上下文和验收标准，决定 AI 输出能不能真正进入工作流。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "把一次使用升级成流程能力",
                "body": "管理者要把个人试用沉淀为团队规范、模板、检查清单和可复用工作流。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 3/8", "建议下一节：AI 创意实操：用 AI 做设计、做视频、做 PPT", '也可以先整理这一节'], nextHref: "./lesson-workshop-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-03", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson3", audioSource: './assets/audio/workshop-ep109-ai-data-analysis.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep109-ai-data-analysis.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep109-ai-data-analysis/slide_01.png",
            "label": "AI 数据分析实操：用自然语言分析业务数据",
            "caption": "这一节会帮助你系统理解：AI 数据分析实操：用自然语言分析业务数据"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_03.png",
            "label": "核心实操框架",
            "caption": "这步的目的是确认数据是完整和正确的。 第二步：整体概览。"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "C 品类在持续下降。 接着追问：\"B 品类增长这么快是因为什么？"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "\"请帮我分析不同渠道的表现。 各渠道的销售额占比是多少？"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "建议加大 B 品类的投入，特别是这两款新品的库存和推广。 第三个发现：新客获取放缓，主要因为搜索引擎渠道效率下降。"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_07.png",
            "label": "本节行动提示",
            "caption": "这种交互式的分析体验是传统报表做不到的。 好，总结一下。"
        },
        {
            "file": "workshop-ep109-ai-data-analysis/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.3,
            "end": 3.82,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.82,
            "end": 6.08,
            "text": "今天实操 AI 数据分析。"
        },
        {
            "start": 6.08,
            "end": 8.920000000000002,
            "text": "模块七讲了理论，今天纯实操。"
        },
        {
            "start": 8.920000000000002,
            "end": 10.9,
            "text": "我会用一个具体的案例，"
        },
        {
            "start": 10.9,
            "end": 13.82,
            "text": "带你走一遍完整的 AI 数据分析流程。"
        },
        {
            "start": 13.82,
            "end": 17.42,
            "text": "假设你是一家电商公司的运营负责人。"
        },
        {
            "start": 17.42,
            "end": 20.54,
            "text": "手上有一份过去十二个月的销售数据。"
        },
        {
            "start": 20.54,
            "end": 23.54,
            "text": "包括：日期、产品名称、产品品类、"
        },
        {
            "start": 23.54,
            "end": 25.26,
            "text": "销售额、订单数、"
        },
        {
            "start": 25.26,
            "end": 27.42,
            "text": "客户类型（新客或老客）、渠道来源。"
        },
        {
            "start": 27.42,
            "end": 30.22,
            "text": "你想搞清楚几个问题：整体业绩怎么样？"
        },
        {
            "start": 30.22,
            "end": 32.52,
            "text": "哪些产品和品类表现好？"
        },
        {
            "start": 32.52,
            "end": 34.78,
            "text": "新客和老客的贡献有什么变化？"
        },
        {
            "start": 34.78,
            "end": 36.84,
            "text": "不同渠道的效果如何？"
        },
        {
            "start": 36.84,
            "end": 39.9,
            "text": "第一步：上传数据并了解数据结构。"
        },
        {
            "start": 39.9,
            "end": 43.68000000000001,
            "text": "把 Excel 文件上传到 AI 工具之后，先问："
        },
        {
            "start": 43.68000000000001,
            "end": 45.42,
            "text": "\"请帮我了解这份数据。"
        },
        {
            "start": 45.42,
            "end": 47.14,
            "text": "有多少行数据？"
        },
        {
            "start": 47.14,
            "end": 47.98,
            "text": "有哪些列？"
        },
        {
            "start": 48.08,
            "end": 50.2,
            "text": "每一列的数据类型是什么？"
        },
        {
            "start": 50.2,
            "end": 51.56,
            "text": "有没有缺失值？"
        },
        {
            "start": 51.56,
            "end": 53.5,
            "text": "数据的时间范围是多少？"
        },
        {
            "start": 53.5,
            "end": 53.92,
            "text": "\""
        },
        {
            "start": 53.92,
            "end": 56.6,
            "text": "AI 会快速扫描数据并给你一份概要。"
        },
        {
            "start": 56.6,
            "end": 60.38,
            "text": "这步的目的是确认数据是完整和正确的。"
        },
        {
            "start": 60.38,
            "end": 61.8,
            "text": "第二步：整体概览。"
        },
        {
            "start": 61.8,
            "end": 65.39999999999999,
            "text": "\"请帮我做一个整体的业绩概览。"
        },
        {
            "start": 65.4,
            "end": 67.82,
            "text": "包括：总销售额、总订单数、"
        },
        {
            "start": 67.82,
            "end": 70.38,
            "text": "平均客单价、月度销售额趋势图。"
        },
        {
            "start": 70.38,
            "end": 74.0,
            "text": "标注出销售额最高和最低的月份。"
        },
        {
            "start": 74.0,
            "end": 74.42,
            "text": "\""
        },
        {
            "start": 74.42,
            "end": 77.4,
            "text": "AI 会给你几个关键数字和一张趋势图。"
        },
        {
            "start": 77.4,
            "end": 81.8,
            "text": "你可能看到：总销售额两千四百万，月均两百万。"
        },
        {
            "start": 81.8,
            "end": 85.9,
            "text": "八月份最高三百二十万，二月份最低一百五十万。"
        },
        {
            "start": 85.9,
            "end": 88.3,
            "text": "趋势整体上升但增速在放缓。"
        },
        {
            "start": 88.3,
            "end": 91.52,
            "text": "到这里你已经对整体情况有了基本了解。"
        },
        {
            "start": 91.52,
            "end": 94.3,
            "text": "第三步：深入分析，产品和品类。"
        },
        {
            "start": 94.87,
            "end": 97.56,
            "text": "\"请帮我分析不同品类的销售表现。"
        },
        {
            "start": 97.56,
            "end": 99.82,
            "text": "哪个品类的销售额最高？"
        },
        {
            "start": 99.82,
            "end": 101.28,
            "text": "哪个增长最快？"
        },
        {
            "start": 101.48,
            "end": 102.32,
            "text": "哪个在下降？"
        },
        {
            "start": 102.32,
            "end": 105.68,
            "text": "请用柱状图展示各品类的销售额对比，"
        },
        {
            "start": 105.68,
            "end": 109.06,
            "text": "用折线图展示各品类的月度趋势。"
        },
        {
            "start": 109.06,
            "end": 109.48,
            "text": "\""
        },
        {
            "start": 109.48,
            "end": 110.64,
            "text": "AI 可能告诉你："
        },
        {
            "start": 110.64,
            "end": 113.36,
            "text": "A 品类贡献了百分之四十的销售额，"
        },
        {
            "start": 113.36,
            "end": 115.17,
            "text": "但增长已经停滞。"
        },
        {
            "start": 115.17,
            "end": 120.30666666666666,
            "text": "B 品类只占百分之十五，但过去三个月增长了百分之五十。"
        },
        {
            "start": 120.30666666666666,
            "end": 122.08,
            "text": "C 品类在持续下降。"
        },
        {
            "start": 122.08,
            "end": 125.74,
            "text": "接着追问：\"B 品类增长这么快是因为什么？"
        },
        {
            "start": 125.74,
            "end": 128.76,
            "text": "是某个具体产品带动的还是整体增长？"
        },
        {
            "start": 128.76,
            "end": 129.17999999999998,
            "text": "\""
        },
        {
            "start": 129.17999999999998,
            "end": 130.96,
            "text": "AI 深入分析后告诉你："
        },
        {
            "start": 130.96,
            "end": 133.7,
            "text": "\"B 品类的增长主要由两款新品带动，"
        },
        {
            "start": 133.7,
            "end": 137.54,
            "text": "这两款产品贡献了 B 品类增量的百分之七十。"
        },
        {
            "start": 137.54,
            "end": 137.95999999999998,
            "text": "\""
        },
        {
            "start": 137.95999999999998,
            "end": 139.84,
            "text": "第四步：深入分析，客户结构。"
        },
        {
            "start": 140.29999999999998,
            "end": 143.54,
            "text": "\"请帮我分析新客和老客的贡献变化。"
        },
        {
            "start": 143.54,
            "end": 147.34,
            "text": "过去十二个月，新客和老客的销售额占比分别是多少？"
        },
        {
            "start": 147.34,
            "end": 149.3,
            "text": "这个比例有什么变化趋势？"
        },
        {
            "start": 149.3,
            "end": 153.26,
            "text": "新客的获取量和老客的复购率分别是什么趋势？"
        },
        {
            "start": 153.26,
            "end": 153.67999999999998,
            "text": "\""
        },
        {
            "start": 153.67999999999998,
            "end": 154.66,
            "text": "AI 可能发现："
        },
        {
            "start": 154.66,
            "end": 159.06,
            "text": "新客占比从年初的百分之四十下降到了百分之三十。"
        },
        {
            "start": 159.06,
            "end": 163.31999999999996,
            "text": "老客的复购率从百分之二十五提升到了百分之三十二。"
        },
        {
            "start": 163.32,
            "end": 166.52,
            "text": "这意味着你的增长越来越依赖老客户的复购，"
        },
        {
            "start": 166.8,
            "end": 168.34,
            "text": "新客获取在放缓。"
        },
        {
            "start": 168.34,
            "end": 172.12,
            "text": "追问：\"新客获取量是从哪个月开始下降的？"
        },
        {
            "start": 172.12,
            "end": 174.34,
            "text": "跟哪个渠道的变化有关系吗？"
        },
        {
            "start": 174.34,
            "end": 174.76,
            "text": "\""
        },
        {
            "start": 174.76,
            "end": 177.42,
            "text": "第五步：深入分析，渠道效果。"
        },
        {
            "start": 177.42,
            "end": 180.06,
            "text": "\"请帮我分析不同渠道的表现。"
        },
        {
            "start": 180.06,
            "end": 182.12,
            "text": "各渠道的销售额占比是多少？"
        },
        {
            "start": 182.12,
            "end": 184.46,
            "text": "各渠道的新客获取量趋势如何？"
        },
        {
            "start": 184.46,
            "end": 187.0,
            "text": "各渠道的客单价有什么差异？"
        },
        {
            "start": 187.0,
            "end": 187.42,
            "text": "\""
        },
        {
            "start": 187.42,
            "end": 189.08,
            "text": "AI 分析后可能发现："
        },
        {
            "start": 189.08,
            "end": 192.2,
            "text": "搜索引擎渠道的新客获取量在过去三个月"
        },
        {
            "start": 192.2,
            "end": 194.03999999999994,
            "text": "下降了百分之二十五。"
        },
        {
            "start": 194.04,
            "end": 197.76,
            "text": "社交媒体渠道的获客量在增长但客单价偏低。"
        },
        {
            "start": 198.22,
            "end": 201.36,
            "text": "内容营销渠道的客单价最高但量最小。"
        },
        {
            "start": 201.36,
            "end": 204.42,
            "text": "这就跟前面\"新客获取放缓\"的发现对上了："
        },
        {
            "start": 204.42,
            "end": 207.62,
            "text": "主要是搜索引擎渠道的获客下降导致的。"
        },
        {
            "start": 207.62,
            "end": 210.86,
            "text": "第六步：让 AI 给出综合结论和建议。"
        },
        {
            "start": 211.48,
            "end": 212.84,
            "text": "\"基于以上所有分析，"
        },
        {
            "start": 213.06,
            "end": 215.3,
            "text": "请帮我总结三到五个关键发现，"
        },
        {
            "start": 215.3,
            "end": 218.56,
            "text": "并针对每个发现给出具体的行动建议。"
        },
        {
            "start": 218.56,
            "end": 218.98,
            "text": "\""
        },
        {
            "start": 218.98,
            "end": 220.52,
            "text": "AI 可能给出这样的总结："
        },
        {
            "start": 220.54,
            "end": 223.34,
            "text": "第一个发现：整体销售增长在放缓，"
        },
        {
            "start": 223.34,
            "end": 226.74,
            "text": "增速从月均百分之八降到了百分之三。"
        },
        {
            "start": 226.74,
            "end": 228.6,
            "text": "建议重新评估增长策略。"
        },
        {
            "start": 229.0,
            "end": 233.78,
            "text": "第二个发现：B 品类是最大的增长点，由两款新品驱动。"
        },
        {
            "start": 233.78,
            "end": 238.56,
            "text": "建议加大 B 品类的投入，特别是这两款新品的库存和推广。"
        },
        {
            "start": 238.56,
            "end": 241.28,
            "text": "第三个发现：新客获取放缓，"
        },
        {
            "start": 241.28,
            "end": 244.12,
            "text": "主要因为搜索引擎渠道效率下降。"
        },
        {
            "start": 244.12,
            "end": 248.06,
            "text": "建议诊断搜索引擎渠道的问题（竞品加大了投放？"
        },
        {
            "start": 248.64,
            "end": 249.88,
            "text": "关键词竞争加剧？"
        },
        {
            "start": 249.88,
            "end": 251.98,
            "text": "），同时探索新的获客渠道。"
        },
        {
            "start": 251.98,
            "end": 256.38,
            "text": "第四个发现：老客复购率在提升，这是好事。"
        },
        {
            "start": 256.38,
            "end": 260.72,
            "text": "建议进一步加强老客户运营，推出会员计划或忠诚度奖励。"
        },
        {
            "start": 260.72,
            "end": 263.82,
            "text": "最后一步：让 AI 帮你生成一份简报。"
        },
        {
            "start": 263.82,
            "end": 267.82,
            "text": "\"请把以上分析整理成一份一页纸的经营简报，"
        },
        {
            "start": 267.82,
            "end": 270.82,
            "text": "包含关键数据、核心发现和行动建议。"
        },
        {
            "start": 270.82,
            "end": 273.42,
            "text": "适合在管理层会议上快速汇报。"
        },
        {
            "start": 273.42,
            "end": 273.84000000000003,
            "text": "\""
        },
        {
            "start": 273.84000000000003,
            "end": 275.52,
            "text": "整个过程花了多少时间？"
        },
        {
            "start": 276.0,
            "end": 279.2,
            "text": "如果你熟练的话，大概二十到三十分钟。"
        },
        {
            "start": 279.2,
            "end": 280.94,
            "text": "传统方式做同样的分析，"
        },
        {
            "start": 280.94,
            "end": 284.02,
            "text": "一个数据分析师可能需要一到两天。"
        },
        {
            "start": 284.02,
            "end": 288.32,
            "text": "而且 AI 分析的过程中你可以随时追问、随时调整方向。"
        },
        {
            "start": 288.32,
            "end": 291.36,
            "text": "发现了一个有意思的点，立刻深入挖掘。"
        },
        {
            "start": 291.36,
            "end": 294.76,
            "text": "这种交互式的分析体验是传统报表做不到的。"
        },
        {
            "start": 294.76,
            "end": 295.98,
            "text": "好，总结一下。"
        },
        {
            "start": 295.98,
            "end": 297.84,
            "text": "AI 数据分析六步流程："
        },
        {
            "start": 298.14,
            "end": 300.17,
            "text": "上传数据了解结构、整体概览、"
        },
        {
            "start": 300.17,
            "end": 303.12,
            "text": "深入分析产品品类、分析客户结构、"
        },
        {
            "start": 303.12,
            "end": 306.26,
            "text": "分析渠道效果、AI 给出结论和建议。"
        },
        {
            "start": 306.26,
            "end": 309.44,
            "text": "关键技巧：先总后分、层层追问、"
        },
        {
            "start": 309.44,
            "end": 312.66,
            "text": "让 AI 给行动建议、最后生成简报。"
        },
        {
            "start": 312.66,
            "end": 317.04,
            "text": "二十到三十分钟完成传统一到两天的分析工作。"
        },
        {
            "start": 317.04,
            "end": 319.78,
            "text": "下一期我们实操 AI 创意工具。"
        },
        {
            "start": 319.78,
            "end": 322.16,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 322.16,
            "end": 323.62,
            "text": "1. 六步流程："
        },
        {
            "start": 323.62,
            "end": 327.18,
            "text": "了解数据 → 整体概览 → 品类分析 → 客户分析"
        },
        {
            "start": 327.18,
            "end": 328.88,
            "text": "→ 渠道分析 → 结论建议"
        },
        {
            "start": 329.64,
            "end": 333.38,
            "text": "2. 关键技巧：先总后分、层层追问、要行动建议"
        },
        {
            "start": 333.38,
            "end": 337.36,
            "text": "3. 20 30 分钟完成传统 1 2 天的分析"
        },
        {
            "start": 337.36,
            "end": 341.92,
            "text": "4. 最后让 AI 生成一页纸简报，直接用于会议汇报"
        },
        {
            "start": 341.92,
            "end": 345.94,
            "text": "1. 找一份你手头的销售或运营数据，"
        },
        {
            "start": 345.94,
            "end": 348.36,
            "text": "按这个六步流程做一次分析"
        },
        {
            "start": 348.36,
            "end": 351.4,
            "text": "2. 在分析过程中，你追问了几层？"
        },
        {
            "start": 351.4,
            "end": 354.12,
            "text": "有没有发现意想不到的洞察？"
        },
        {
            "start": 354.12,
            "end": 358.44,
            "text": "3. AI 给出的行动建议中，哪些是你认可的？"
        },
        {
            "start": 358.54,
            "end": 359.6,
            "text": "哪些需要调整？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 55.0,
        "index": 0
    },
    {
        "start": 55.0,
        "end": 110.0,
        "index": 1
    },
    {
        "start": 110.0,
        "end": 165.0,
        "index": 2
    },
    {
        "start": 165.0,
        "end": 220.0,
        "index": 3
    },
    {
        "start": 220.0,
        "end": 275.0,
        "index": 4
    },
    {
        "start": 275.0,
        "end": 330.0,
        "index": 5
    },
    {
        "start": 330.0,
        "end": 385.0,
        "index": 6
    },
    {
        "start": 385.0,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-workshop-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-04.html?entry={entry}", secondaryHref: "./lesson-workshop-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-03", coachSource: "./ai-coach.html?source=lesson-workshop-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 数据分析实操：用自然语言分析业务数据的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 数据分析实操：用自然语言分析业务数据", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
