(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第3课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第3课：你的毕业项目（上）：问题定义与数据收集",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep117-capstone-part1/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的毕业项目（上）：问题定义与数据收集", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-capstone-04.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "商业分析全流程：从行业研究到战略建议",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "案例复盘：一家公司的全方位诊断",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "你的毕业项目（上）：问题定义与数据收集",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "你的毕业项目（中）：分析与策略制定",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 5,
                "title": "你的毕业项目（下）：方案呈现与 AI 点评",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "毕业寄语：AI 时代的终身学习者",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-capstone-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "从真实问题出发",
                "body": "毕业项目不是再听一遍知识点，而是把一个真实业务问题定义清楚、拆开、验证并形成方案。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "让证据支撑判断",
                "body": "好的商业分析要把行业、用户、财务、运营和组织线索串起来，而不是只给一个漂亮结论。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "把方案讲给人听",
                "body": "最终产出要能被团队理解、讨论和执行，所以呈现结构与 AI 点评同样重要。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 综合项目框架学完整。", meta: ["当前完成：综合实战与毕业项目 3/6", "建议下一节：你的毕业项目（中）：分析与策略制定", '也可以先整理这一节'], nextHref: "./lesson-capstone-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-03", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson3", audioSource: './assets/audio/capstone-ep117-capstone-part1.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep117-capstone-part1.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep117-capstone-part1/slide_01.png",
            "label": "你的毕业项目（上）：问题定义与数据收集",
            "caption": "这一节会帮助你系统理解：你的毕业项目（上）：问题定义与数据收集"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_03.png",
            "label": "核心分析框架",
            "caption": "这是整个项目最重要的一步。 问题定义好了，后面的分析就有方向。"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_04.png",
            "label": "证据与材料组织",
            "caption": "是流量、转化率还是客单价？ 二，瓶颈是外部原因（市场、竞争）还是内部原因（产品、运营）？"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "如果你分析的是自己的企业，你应该有这些数据。 财务数据：营收、利润、成本结构、现金流。"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "\" AI 会给你一份结构化的现状描述，并且可能指出一些你自己没注意到的数据异常。 比如：\"你的获客成本在过去三个月上升了百分之三十五，但同期竞品的获客成本似乎没有明显变化。"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_07.png",
            "label": "本节行动提示",
            "caption": "对每个假设，我需要什么数据或分析来验证它？ \" AI 可能会提醒你：\"你的假设都聚焦在获客端，但你有没有考虑产品端的问题？"
        },
        {
            "file": "capstone-ep117-capstone-part1/slide_08.png",
            "label": "学员最需要带走的 3 个项目判断",
            "caption": "学完后，最重要的是把今天的 综合项目方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.32,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.32,
            "end": 3.68,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.68,
            "end": 7.22,
            "text": "从今天开始，连续三期是你的毕业项目。"
        },
        {
            "start": 7.22,
            "end": 9.66,
            "text": "这不是考试，而是一次真正的实战。"
        },
        {
            "start": 9.66,
            "end": 13.24,
            "text": "你要用我们学过的所有框架和工具，"
        },
        {
            "start": 13.24,
            "end": 16.74,
            "text": "对你自己的企业或你关注的一个商业问题"
        },
        {
            "start": 16.74,
            "end": 18.44,
            "text": "做一次完整的分析。"
        },
        {
            "start": 18.44,
            "end": 20.46,
            "text": "毕业项目分三个阶段。"
        },
        {
            "start": 20.46,
            "end": 23.64,
            "text": "今天是第一阶段：问题定义与数据收集。"
        },
        {
            "start": 23.64,
            "end": 25.88,
            "text": "下一期是分析与策略制定。"
        },
        {
            "start": 25.88,
            "end": 28.46,
            "text": "最后一期是方案呈现与 AI 点评。"
        },
        {
            "start": 28.46,
            "end": 29.88,
            "text": "跟着我一步步做。"
        },
        {
            "start": 29.9,
            "end": 30.72,
            "text": "准备好了吗？"
        },
        {
            "start": 30.72,
            "end": 31.3,
            "text": "开始。"
        },
        {
            "start": 31.3,
            "end": 33.56,
            "text": "第一个任务：选择你的分析对象。"
        },
        {
            "start": 33.56,
            "end": 34.76,
            "text": "你要分析什么？"
        },
        {
            "start": 34.88,
            "end": 36.44,
            "text": "三种选择。"
        },
        {
            "start": 36.44,
            "end": 38.46,
            "text": "第一种，分析你自己的企业。"
        },
        {
            "start": 38.46,
            "end": 42.28,
            "text": "如果你是创业者或管理者，这是最有价值的选择。"
        },
        {
            "start": 42.28,
            "end": 44.54,
            "text": "分析的结果直接可以用。"
        },
        {
            "start": 44.54,
            "end": 48.52,
            "text": "第二种，分析你正在考虑进入的一个市场或行业。"
        },
        {
            "start": 48.99999999999999,
            "end": 51.68,
            "text": "如果你在酝酿一个新项目或新业务，"
        },
        {
            "start": 51.68,
            "end": 53.84,
            "text": "可以做一次深度的市场分析。"
        },
        {
            "start": 53.84,
            "end": 57.54,
            "text": "第三种，分析一个你感兴趣的企业案例。"
        },
        {
            "start": 57.54,
            "end": 61.22,
            "text": "选一家你了解的公司，做一次全方位的诊断。"
        },
        {
            "start": 61.22,
            "end": 62.62,
            "text": "选好了吗？"
        },
        {
            "start": 62.88,
            "end": 64.66,
            "text": "选定之后就不要换了。"
        },
        {
            "start": 64.66,
            "end": 66.88,
            "text": "第二个任务：定义你的核心问题。"
        },
        {
            "start": 66.88,
            "end": 69.22,
            "text": "这是整个项目最重要的一步。"
        },
        {
            "start": 69.67999999999999,
            "end": 72.5,
            "text": "问题定义好了，后面的分析就有方向。"
        },
        {
            "start": 72.5,
            "end": 74.64,
            "text": "定义不好，后面会跑偏。"
        },
        {
            "start": 74.64,
            "end": 77.2,
            "text": "一个好的核心问题有三个特征。"
        },
        {
            "start": 77.2,
            "end": 78.62,
            "text": "第一，具体。"
        },
        {
            "start": 78.62,
            "end": 80.1,
            "text": "不是\"我的公司怎么样\"，"
        },
        {
            "start": 80.1,
            "end": 83.88,
            "text": "而是\"我的公司增长放缓的原因是什么\"\"我的新"
        },
        {
            "start": 83.88,
            "end": 87.48,
            "text": "产品应该怎么定位\"\"我是否应该进入某某市场\"。"
        },
        {
            "start": 87.48,
            "end": 89.62,
            "text": "第二，有时间框架。"
        },
        {
            "start": 89.62,
            "end": 93.88,
            "text": "\"过去六个月增长放缓\"比\"增长不好\"更具体。"
        },
        {
            "start": 93.88,
            "end": 97.3,
            "text": "\"未来十二个月的增长策略\"比\"怎么增长\"更清楚。"
        },
        {
            "start": 97.3,
            "end": 98.96,
            "text": "第三，可分析。"
        },
        {
            "start": 98.96,
            "end": 103.64,
            "text": "问题必须是可以通过收集数据和分析来回答的。"
        },
        {
            "start": 103.64,
            "end": 105.74,
            "text": "现在就写下你的核心问题。"
        },
        {
            "start": 105.74,
            "end": 106.82,
            "text": "一句话。"
        },
        {
            "start": 106.82,
            "end": 109.32,
            "text": "写好之后，让 AI 帮你优化。"
        },
        {
            "start": 109.32,
            "end": 113.36,
            "text": "把你的核心问题发给 AI：\"这是我的商业分析核心问题。"
        },
        {
            "start": 113.36,
            "end": 116.44,
            "text": "请帮我检查：这个问题是否够具体？"
        },
        {
            "start": 116.44,
            "end": 118.56,
            "text": "有没有更好的表述方式？"
        },
        {
            "start": 118.56,
            "end": 121.92,
            "text": "请帮我拆解成三到五个子问题。"
        },
        {
            "start": 121.92,
            "end": 122.34,
            "text": "\""
        },
        {
            "start": 122.34,
            "end": 125.16,
            "text": "AI 会帮你把问题拆解得更清晰。"
        },
        {
            "start": 125.16,
            "end": 128.16,
            "text": "比如你的核心问题是\"我的电商业务应该"
        },
        {
            "start": 128.16,
            "end": 129.48,
            "text": "怎么突破增长瓶颈\"。"
        },
        {
            "start": 129.48,
            "end": 131.72,
            "text": "AI 可能帮你拆解成："
        },
        {
            "start": 131.72,
            "end": 134.68,
            "text": "一，增长瓶颈体现在哪些指标上？"
        },
        {
            "start": 134.68,
            "end": 137.62,
            "text": "是流量、转化率还是客单价？"
        },
        {
            "start": 137.62,
            "end": 139.96,
            "text": "二，瓶颈是外部原因（市场、"
        },
        {
            "start": 139.96,
            "end": 142.6,
            "text": "竞争）还是内部原因（产品、运营）？"
        },
        {
            "start": 142.6,
            "end": 145.32,
            "text": "三，有哪些潜在的增长方向？"
        },
        {
            "start": 145.32,
            "end": 148.32,
            "text": "四，每个方向需要什么资源和投入？"
        },
        {
            "start": 148.32,
            "end": 150.4,
            "text": "五，优先级怎么排？"
        },
        {
            "start": 150.4,
            "end": 152.2,
            "text": "第三个任务：收集数据。"
        },
        {
            "start": 152.2,
            "end": 153.54,
            "text": "分析需要数据。"
        },
        {
            "start": 153.54,
            "end": 155.54,
            "text": "没有数据的分析就是猜。"
        },
        {
            "start": 155.54,
            "end": 157.38,
            "text": "你需要收集两类数据。"
        },
        {
            "start": 157.38,
            "end": 158.94,
            "text": "第一类：外部数据。"
        },
        {
            "start": 158.94,
            "end": 161.44,
            "text": "关于行业、市场、竞品的信息。"
        },
        {
            "start": 161.44,
            "end": 163.64,
            "text": "怎么收集外部数据？"
        },
        {
            "start": 163.64,
            "end": 166.1,
            "text": "让 AI 帮你做行业研究。"
        },
        {
            "start": 166.1,
            "end": 170.28,
            "text": "\"请帮我搜集关于某某行业的最新数据和趋势。"
        },
        {
            "start": 170.28,
            "end": 173.36,
            "text": "包括：市场规模、增长率、主要玩家、"
        },
        {
            "start": 173.36,
            "end": 175.32,
            "text": "最近的重要事件和趋势。"
        },
        {
            "start": 175.32,
            "end": 175.73999999999998,
            "text": "\""
        },
        {
            "start": 175.92000000000002,
            "end": 177.22,
            "text": "研究竞品。"
        },
        {
            "start": 177.22,
            "end": 179.68,
            "text": "\"请帮我分析以下竞品的基本情况。"
        },
        {
            "start": 179.68,
            "end": 181.58,
            "text": "然后列出竞品名称。"
        },
        {
            "start": 181.58,
            "end": 184.64,
            "text": "分析维度包括：产品定位、核心功能、"
        },
        {
            "start": 184.64,
            "end": 187.46,
            "text": "定价策略、目标客群、最近的重要动作。"
        },
        {
            "start": 187.46,
            "end": 187.88,
            "text": "\""
        },
        {
            "start": 188.09999999999997,
            "end": 193.06,
            "text": "注意：AI 提供的外部数据可能不是最新的或者不完全准确。"
        },
        {
            "start": 193.06,
            "end": 198.14,
            "text": "关键的数据要通过行业报告、公开财报、新闻等渠道核实。"
        },
        {
            "start": 198.14,
            "end": 199.6,
            "text": "第二类：内部数据。"
        },
        {
            "start": 199.6,
            "end": 201.66,
            "text": "你自己企业的经营数据。"
        },
        {
            "start": 201.66,
            "end": 204.9,
            "text": "如果你分析的是自己的企业，你应该有这些数据。"
        },
        {
            "start": 204.9,
            "end": 208.74,
            "text": "财务数据：营收、利润、成本结构、现金流。"
        },
        {
            "start": 208.74,
            "end": 211.06,
            "text": "至少过去十二个月的。"
        },
        {
            "start": 211.06,
            "end": 213.52,
            "text": "客户数据：客户数量、新客获取量、"
        },
        {
            "start": 213.52,
            "end": 216.28,
            "text": "留存率、客单价、客户满意度。"
        },
        {
            "start": 216.28,
            "end": 220.34,
            "text": "营销数据：各渠道的流量、转化率、获客成本。"
        },
        {
            "start": 220.34,
            "end": 222.66,
            "text": "运营数据：核心运营指标，"
        },
        {
            "start": 222.66,
            "end": 225.66,
            "text": "比如交付周期、质量指标、效率指标。"
        },
        {
            "start": 225.66,
            "end": 230.42,
            "text": "如果某些数据你没有，现在就是发现数据盲区的好时机。"
        },
        {
            "start": 230.42,
            "end": 233.94,
            "text": "在分析中标注\"此数据缺失，需要补充\"。"
        },
        {
            "start": 234.46,
            "end": 237.24,
            "text": "第四个任务：做一个初步的现状描述。"
        },
        {
            "start": 237.24,
            "end": 241.84,
            "text": "收集完数据之后，让 AI 帮你做一个现状的整体描述。"
        },
        {
            "start": 241.84,
            "end": 246.62,
            "text": "把你的核心问题和收集到的数据（外部和内部）发给 AI。"
        },
        {
            "start": 246.62,
            "end": 249.98,
            "text": "\"以下是我的核心问题和收集到的数据。"
        },
        {
            "start": 249.98,
            "end": 251.8,
            "text": "请帮我做一个现状描述。"
        },
        {
            "start": 251.8,
            "end": 253.74,
            "text": "包括：企业的基本情况、"
        },
        {
            "start": 254.04,
            "end": 255.22,
            "text": "所处行业的现状、"
        },
        {
            "start": 255.22,
            "end": 257.64,
            "text": "关键经营指标的表现和趋势、"
        },
        {
            "start": 257.64,
            "end": 259.6,
            "text": "与竞品的主要差异。"
        },
        {
            "start": 259.6,
            "end": 263.66,
            "text": "请指出数据中你发现的异常或值得关注的点。"
        },
        {
            "start": 263.66,
            "end": 264.08000000000004,
            "text": "\""
        },
        {
            "start": 264.08000000000004,
            "end": 266.52,
            "text": "AI 会给你一份结构化的现状描述，"
        },
        {
            "start": 266.52,
            "end": 270.52,
            "text": "并且可能指出一些你自己没注意到的数据异常。"
        },
        {
            "start": 270.52,
            "end": 271.16,
            "text": "比如："
        },
        {
            "start": 271.56,
            "end": 275.1000000000001,
            "text": "\"你的获客成本在过去三个月上升了百分之三十五，"
        },
        {
            "start": 275.1000000000001,
            "end": 278.4,
            "text": "但同期竞品的获客成本似乎没有明显变化。"
        },
        {
            "start": 278.4,
            "end": 281.1,
            "text": "这可能说明问题不是行业性的，"
        },
        {
            "start": 281.1,
            "end": 283.16,
            "text": "而是你的渠道策略需要调整。"
        },
        {
            "start": 283.16,
            "end": 283.58000000000004,
            "text": "\""
        },
        {
            "start": 283.58000000000004,
            "end": 286.16,
            "text": "第五个任务：列出你的初步假设。"
        },
        {
            "start": 286.16,
            "end": 290.54,
            "text": "在做深度分析之前，先列出你对核心问题的初步假设。"
        },
        {
            "start": 290.54,
            "end": 292.28,
            "text": "假设就是你的\"猜测\"。"
        },
        {
            "start": 292.28,
            "end": 294.2,
            "text": "你觉得问题的原因是什么？"
        },
        {
            "start": 294.2,
            "end": 296.38,
            "text": "可能的解决方向是什么？"
        },
        {
            "start": 296.38,
            "end": 298.1,
            "text": "写下三到五个假设。"
        },
        {
            "start": 298.1,
            "end": 298.62,
            "text": "比如："
        },
        {
            "start": 298.62,
            "end": 302.74,
            "text": "假设一：增长放缓的主要原因是获客渠道过于单一。"
        },
        {
            "start": 302.74,
            "end": 307.76,
            "text": "假设二：产品的差异化不够明显，客户选我们没有强理由。"
        },
        {
            "start": 307.76,
            "end": 312.54,
            "text": "假设三：老客户的续费率下降是因为客户支持做得不好。"
        },
        {
            "start": 312.54,
            "end": 314.22,
            "text": "为什么要先列假设？"
        },
        {
            "start": 314.22,
            "end": 316.96,
            "text": "因为假设给你的分析指明了方向。"
        },
        {
            "start": 316.96,
            "end": 320.28,
            "text": "接下来的分析就是验证或推翻这些假设。"
        },
        {
            "start": 320.28,
            "end": 322.74,
            "text": "把假设也发给 AI。"
        },
        {
            "start": 322.74,
            "end": 324.36,
            "text": "\"这是我的初步假设。"
        },
        {
            "start": 324.36,
            "end": 327.36,
            "text": "请帮我评估：这些假设是否合理？"
        },
        {
            "start": 327.36,
            "end": 329.3,
            "text": "有没有我遗漏的重要假设？"
        },
        {
            "start": 329.3,
            "end": 333.66,
            "text": "对每个假设，我需要什么数据或分析来验证它？"
        },
        {
            "start": 333.66,
            "end": 334.08000000000004,
            "text": "\""
        },
        {
            "start": 334.08000000000004,
            "end": 335.22,
            "text": "AI 可能会提醒你："
        },
        {
            "start": 335.22,
            "end": 337.2,
            "text": "\"你的假设都聚焦在获客端，"
        },
        {
            "start": 337.2,
            "end": 339.54,
            "text": "但你有没有考虑产品端的问题？"
        },
        {
            "start": 339.54,
            "end": 341.88,
            "text": "比如客户的使用深度和满意度。"
        },
        {
            "start": 341.88,
            "end": 346.28,
            "text": "建议增加一个假设：产品的核心功能体验不够好。"
        },
        {
            "start": 346.28,
            "end": 349.26,
            "text": "需要的验证数据是：功能使用率、"
        },
        {
            "start": 349.34,
            "end": 351.88,
            "text": "客户满意度调研、客服投诉分析。"
        },
        {
            "start": 351.88,
            "end": 352.3,
            "text": "\""
        },
        {
            "start": 352.3,
            "end": 353.78,
            "text": "好，今天的任务总结。"
        },
        {
            "start": 353.78,
            "end": 356.0,
            "text": "五个任务：选择分析对象、"
        },
        {
            "start": 356.0,
            "end": 358.28,
            "text": "定义核心问题并拆解子问题、"
        },
        {
            "start": 358.28,
            "end": 361.5,
            "text": "收集外部和内部数据、做初步现状描述、"
        },
        {
            "start": 361.58,
            "end": 363.04,
            "text": "列出初步假设。"
        },
        {
            "start": 363.04,
            "end": 365.9,
            "text": "每个任务都要动手做，不只是听。"
        },
        {
            "start": 365.9,
            "end": 369.3,
            "text": "下一期我们进入深度分析和策略制定。"
        },
        {
            "start": 369.3,
            "end": 372.38,
            "text": "请确保在下一期之前完成今天的五个任务。"
        },
        {
            "start": 372.38,
            "end": 374.7,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 374.7,
            "end": 377.24,
            "text": "1. 选定分析对象：自己的企业、"
        },
        {
            "start": 377.24,
            "end": 379.5,
            "text": "目标市场、或感兴趣的企业"
        },
        {
            "start": 379.5,
            "end": 382.5,
            "text": "2. 定义核心问题：具体、有时间框架、"
        },
        {
            "start": 382.52,
            "end": 385.52,
            "text": "可分析，拆解为 3 5 个子问题"
        },
        {
            "start": 385.52,
            "end": 389.22,
            "text": "3. 收集两类数据：外部（行业、"
        },
        {
            "start": 389.22,
            "end": 392.96,
            "text": "竞品）+ 内部（财务、客户、营销、运营）"
        },
        {
            "start": 392.96,
            "end": 397.76,
            "text": "4. 列出 3 5 个初步假设，让 AI 帮你检查遗漏"
        },
        {
            "start": 397.76,
            "end": 399.82,
            "text": "1. 你选择分析什么？"
        },
        {
            "start": 399.82,
            "end": 401.52,
            "text": "你的核心问题是什么？"
        },
        {
            "start": 401.52,
            "end": 403.9,
            "text": "2. 你手头有哪些数据？"
        },
        {
            "start": 404.02,
            "end": 404.88,
            "text": "缺什么数据？"
        },
        {
            "start": 404.88,
            "end": 407.4000000000001,
            "text": "3. 你的三到五个初步假设是什么？"
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
], navigation: { nextLessonUrl: "./lesson-capstone-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-capstone-04.html?entry={entry}", secondaryHref: "./lesson-capstone-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-03", coachSource: "./ai-coach.html?source=lesson-capstone-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的毕业项目（上）：问题定义与数据收集的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的毕业项目（上）：问题定义与数据收集", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-capstone-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
