(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第1课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第1课：商业分析全流程：从行业研究到战略建议",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep115-full-analysis/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：商业分析全流程：从行业研究到战略建议", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-capstone-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "商业分析全流程：从行业研究到战略建议",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "案例复盘：一家公司的全方位诊断",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "你的毕业项目（上）：问题定义与数据收集",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "你的毕业项目（中）：分析与策略制定",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-capstone-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 综合项目框架学完整。", meta: ["当前完成：综合实战与毕业项目 1/6", "建议下一节：案例复盘：一家公司的全方位诊断", '也可以先整理这一节'], nextHref: "./lesson-capstone-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-01", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson1", audioSource: './assets/audio/capstone-ep115-full-analysis.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep115-full-analysis.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep115-full-analysis/slide_01.png",
            "label": "商业分析全流程：从行业研究到战略建议",
            "caption": "这一节会帮助你系统理解：商业分析全流程：从行业研究到战略建议"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_03.png",
            "label": "核心分析框架",
            "caption": "\" AI 可能会帮你拆解成：增长放缓是营收问题还是用户数问题？ 是所有产品线都在放缓还是某个产品线？"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_04.png",
            "label": "证据与材料组织",
            "caption": "你的企业自身有什么问题？ 几个维度。"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "\"基于以上的外部分析和内部诊断，请帮我分析增长放缓的最可能原因。 请按照影响程度排序，并给出每个原因的证据。"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "长期策略是加强品牌建设，降低对付费获客的依赖。 让 AI 帮你做策略设计。"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_07.png",
            "label": "本节行动提示",
            "caption": "结构包括：执行摘要（一页纸）、行业和市场分析、内部诊断、问题归因、策略建议、财务测算、行动计划和时间表。 \" 好，总结一下。"
        },
        {
            "file": "capstone-ep115-full-analysis/slide_08.png",
            "label": "学员最需要带走的 3 个项目判断",
            "caption": "学完后，最重要的是把今天的 综合项目方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.46,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.46,
            "end": 3.54,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.54,
            "end": 7.58,
            "text": "我们到了最后的模块十：综合实战与毕业项目。"
        },
        {
            "start": 7.58,
            "end": 10.1,
            "text": "前面九个模块我们学了战略、财务、"
        },
        {
            "start": 10.3,
            "end": 13.52,
            "text": "营销、领导力、运营、创新、数据分析、"
        },
        {
            "start": 13.82,
            "end": 15.38,
            "text": "法律合规、AI 工具。"
        },
        {
            "start": 15.38,
            "end": 19.96,
            "text": "今天把这些全部串起来，走一遍完整的商业分析全流程。"
        },
        {
            "start": 19.96,
            "end": 23.74,
            "text": "这就像学了两年武术之后的一场综合实战演练。"
        },
        {
            "start": 23.74,
            "end": 26.56,
            "text": "每一招你都会了，现在要连成套路。"
        },
        {
            "start": 26.96,
            "end": 29.18,
            "text": "一个完整的商业分析有七个步骤。"
        },
        {
            "start": 29.18,
            "end": 30.48,
            "text": "第一步：定义问题。"
        },
        {
            "start": 31.259999999999998,
            "end": 34.04,
            "text": "所有分析的起点都是一个明确的问题。"
        },
        {
            "start": 34.04,
            "end": 36.4,
            "text": "不是\"帮我分析一下公司的情况\"，"
        },
        {
            "start": 36.4,
            "end": 39.96,
            "text": "而是\"我们的增长在过去两个季度放缓了，"
        },
        {
            "start": 39.96,
            "end": 43.26,
            "text": "我需要找到原因并制定加速增长的策略\"。"
        },
        {
            "start": 43.26,
            "end": 47.34,
            "text": "问题定义得越精准，后面的分析越有方向。"
        },
        {
            "start": 47.34,
            "end": 49.46,
            "text": "你可以让 AI 帮你优化问题定义："
        },
        {
            "start": 49.46,
            "end": 52.44,
            "text": "\"我想分析我们公司最近增长放缓的原因。"
        },
        {
            "start": 52.980000000000004,
            "end": 57.18,
            "text": "请帮我把这个问题细化成三到五个具体的子问题。"
        },
        {
            "start": 57.18,
            "end": 57.6,
            "text": "\""
        },
        {
            "start": 57.6,
            "end": 59.36,
            "text": "AI 可能会帮你拆解成："
        },
        {
            "start": 59.36,
            "end": 62.72,
            "text": "增长放缓是营收问题还是用户数问题？"
        },
        {
            "start": 62.72,
            "end": 66.16,
            "text": "是所有产品线都在放缓还是某个产品线？"
        },
        {
            "start": 66.16,
            "end": 69.4,
            "text": "是所有渠道都在放缓还是某个渠道？"
        },
        {
            "start": 69.4,
            "end": 72.06,
            "text": "是市场整体在放缓还是只有我们？"
        },
        {
            "start": 72.06,
            "end": 74.12,
            "text": "第二步：行业和市场分析。"
        },
        {
            "start": 74.12,
            "end": 75.56,
            "text": "先看外部环境。"
        },
        {
            "start": 75.56,
            "end": 77.96,
            "text": "用我们在战略模块学的框架。"
        },
        {
            "start": 77.96,
            "end": 79.46,
            "text": "宏观环境分析。"
        },
        {
            "start": 79.46,
            "end": 82.14,
            "text": "行业整体在增长还是在萎缩？"
        },
        {
            "start": 82.14,
            "end": 85.14,
            "text": "有没有新的政策法规影响行业？"
        },
        {
            "start": 85.14,
            "end": 88.28,
            "text": "技术变化给行业带来了什么机会和威胁？"
        },
        {
            "start": 88.28,
            "end": 89.94,
            "text": "竞争格局分析。"
        },
        {
            "start": 89.94,
            "end": 91.68,
            "text": "用波特五力来分析。"
        },
        {
            "start": 91.68,
            "end": 93.56,
            "text": "你的竞品最近有什么动作？"
        },
        {
            "start": 93.56,
            "end": 95.08,
            "text": "有没有新的进入者？"
        },
        {
            "start": 95.08,
            "end": 97.24,
            "text": "客户的议价能力有没有变化？"
        },
        {
            "start": 97.24,
            "end": 99.56,
            "text": "让 AI 帮你做行业研究。"
        },
        {
            "start": 99.56,
            "end": 102.3,
            "text": "\"请帮我分析某某行业的最近趋势。"
        },
        {
            "start": 102.88,
            "end": 104.94,
            "text": "包括：市场规模和增长率、"
        },
        {
            "start": 104.94,
            "end": 107.0,
            "text": "主要竞争者及其市场份额、"
        },
        {
            "start": 107.0,
            "end": 108.92,
            "text": "最新的行业政策变化、"
        },
        {
            "start": 108.92,
            "end": 110.98,
            "text": "AI 技术对行业的影响。"
        },
        {
            "start": 110.98,
            "end": 111.4,
            "text": "\""
        },
        {
            "start": 111.4,
            "end": 115.38,
            "text": "AI 的研究结果作为参考，关键数据你需要核实。"
        },
        {
            "start": 115.38,
            "end": 117.12,
            "text": "第三步：内部诊断。"
        },
        {
            "start": 117.12,
            "end": 118.88,
            "text": "看完外部看内部。"
        },
        {
            "start": 118.88,
            "end": 120.76,
            "text": "你的企业自身有什么问题？"
        },
        {
            "start": 120.76,
            "end": 121.38,
            "text": "几个维度。"
        },
        {
            "start": 121.72,
            "end": 122.36,
            "text": "财务维度。"
        },
        {
            "start": 122.36,
            "end": 124.14,
            "text": "用模块二学的框架。"
        },
        {
            "start": 124.14,
            "end": 129.46,
            "text": "营收趋势、利润率变化、现金流状况、跟竞品的财务对比。"
        },
        {
            "start": 129.46,
            "end": 130.36,
            "text": "营销维度。"
        },
        {
            "start": 130.36,
            "end": 132.12,
            "text": "用模块三学的框架。"
        },
        {
            "start": 132.12,
            "end": 137.46,
            "text": "获客渠道效果、客户留存、品牌认知、营销投入产出比。"
        },
        {
            "start": 137.46,
            "end": 138.46,
            "text": "运营维度。"
        },
        {
            "start": 138.9,
            "end": 140.7,
            "text": "用模块五学的框架。"
        },
        {
            "start": 140.7,
            "end": 142.98,
            "text": "效率指标、质量指标、成本结构。"
        },
        {
            "start": 142.98,
            "end": 143.84,
            "text": "组织维度。"
        },
        {
            "start": 143.84,
            "end": 145.72,
            "text": "用模块四学的框架。"
        },
        {
            "start": 145.72,
            "end": 147.94,
            "text": "团队能力、组织结构、文化。"
        },
        {
            "start": 147.94,
            "end": 151.0,
            "text": "每个维度都可以用 AI 来辅助分析。"
        },
        {
            "start": 151.0,
            "end": 154.07999999999998,
            "text": "把你的数据发给 AI，让它做诊断。"
        },
        {
            "start": 154.08,
            "end": 156.38,
            "text": "第四步：问题归因。"
        },
        {
            "start": 156.38,
            "end": 159.52,
            "text": "外部和内部都看完了，现在要找到真正的原因。"
        },
        {
            "start": 159.52,
            "end": 161.76,
            "text": "增长放缓到底是因为什么？"
        },
        {
            "start": 161.76,
            "end": 164.24,
            "text": "是外部市场的原因还是内部的原因？"
        },
        {
            "start": 164.24,
            "end": 167.28,
            "text": "如果是内部的，是哪个环节的问题？"
        },
        {
            "start": 167.28,
            "end": 170.06,
            "text": "用\"指标树\"的方法层层拆解。"
        },
        {
            "start": 170.06,
            "end": 176.27999999999997,
            "text": "从顶层指标往下拆，一直拆到你能找到可以行动的根因。"
        },
        {
            "start": 176.27999999999997,
            "end": 178.4,
            "text": "让 AI 帮你做归因分析。"
        },
        {
            "start": 178.4,
            "end": 181.18,
            "text": "\"基于以上的外部分析和内部诊断，"
        },
        {
            "start": 181.18,
            "end": 184.02,
            "text": "请帮我分析增长放缓的最可能原因。"
        },
        {
            "start": 184.02,
            "end": 187.86,
            "text": "请按照影响程度排序，并给出每个原因的证据。"
        },
        {
            "start": 187.86,
            "end": 188.28,
            "text": "\""
        },
        {
            "start": 188.35999999999999,
            "end": 190.22,
            "text": "AI 可能会给你这样的结论："
        },
        {
            "start": 190.22,
            "end": 193.42,
            "text": "\"增长放缓的主要原因按影响程度排序。"
        },
        {
            "start": 193.42,
            "end": 193.8,
            "text": "第一，"
        },
        {
            "start": 194.2,
            "end": 197.37999999999994,
            "text": "核心渠道的获客成本上升了百分之三十，"
        },
        {
            "start": 197.38,
            "end": 198.8,
            "text": "新客获取量下降。"
        },
        {
            "start": 198.8,
            "end": 201.3,
            "text": "第二，老客户的复购率在下降，"
        },
        {
            "start": 201.3,
            "end": 204.72,
            "text": "主要是因为竞品推出了有竞争力的新产品。"
        },
        {
            "start": 204.72,
            "end": 207.92,
            "text": "第三，内部的产品迭代速度变慢了，"
        },
        {
            "start": 207.92,
            "end": 210.66,
            "text": "过去三个月没有重要的新功能上线。"
        },
        {
            "start": 210.66,
            "end": 211.07999999999998,
            "text": "\""
        },
        {
            "start": 211.07999999999998,
            "end": 212.54,
            "text": "第五步：策略制定。"
        },
        {
            "start": 212.54,
            "end": 214.82,
            "text": "找到了原因，接下来制定策略。"
        },
        {
            "start": 214.82,
            "end": 216.58,
            "text": "策略要有优先级。"
        },
        {
            "start": 216.58,
            "end": 218.76,
            "text": "不是所有问题都同时解决。"
        },
        {
            "start": 218.76,
            "end": 221.92,
            "text": "先解决影响最大、解决成本最低的问题。"
        },
        {
            "start": 222.4,
            "end": 226.34,
            "text": "对每个核心问题制定具体的策略和行动计划。"
        },
        {
            "start": 227.2,
            "end": 229.2,
            "text": "比如针对\"获客成本上升\"："
        },
        {
            "start": 229.2,
            "end": 232.16,
            "text": "短期策略是优化现有渠道的投放效率。"
        },
        {
            "start": 232.16,
            "end": 235.54,
            "text": "中期策略是开拓新的低成本获客渠道。"
        },
        {
            "start": 235.54,
            "end": 240.16,
            "text": "长期策略是加强品牌建设，降低对付费获客的依赖。"
        },
        {
            "start": 240.16,
            "end": 242.76,
            "text": "让 AI 帮你做策略设计。"
        },
        {
            "start": 242.76,
            "end": 246.84,
            "text": "\"针对以上三个核心问题，请帮我设计应对策略。"
        },
        {
            "start": 246.84,
            "end": 249.7,
            "text": "每个问题给出短期（一到三个月）、"
        },
        {
            "start": 249.7,
            "end": 251.36,
            "text": "中期（三到六个月）、"
        },
        {
            "start": 251.36,
            "end": 253.9,
            "text": "长期（六到十二个月）的策略建议。"
        },
        {
            "start": 253.9,
            "end": 255.68,
            "text": "每个策略要具体可执行。"
        },
        {
            "start": 255.68,
            "end": 256.1,
            "text": "\""
        },
        {
            "start": 256.1,
            "end": 257.14,
            "text": "第六步：财务测算。"
        },
        {
            "start": 257.14,
            "end": 259.14,
            "text": "策略有了，要算一下账。"
        },
        {
            "start": 259.14,
            "end": 261.8,
            "text": "执行这些策略需要多少投入？"
        },
        {
            "start": 261.8,
            "end": 263.82,
            "text": "预期能带来多少回报？"
        },
        {
            "start": 263.82,
            "end": 266.64,
            "text": "让 AI 帮你做财务测算。"
        },
        {
            "start": 266.64,
            "end": 268.8,
            "text": "\"假设我们执行以下策略，"
        },
        {
            "start": 268.8,
            "end": 271.8,
            "text": "请帮我测算需要的投入和预期的回报。"
        },
        {
            "start": 271.8,
            "end": 274.94,
            "text": "做三个情景：乐观、基准、悲观。"
        },
        {
            "start": 274.94,
            "end": 275.36,
            "text": "\""
        },
        {
            "start": 275.36,
            "end": 278.74,
            "text": "财务测算帮你判断策略是否值得做。"
        },
        {
            "start": 278.74,
            "end": 282.06,
            "text": "如果投入太大回报太小，可能需要调整策略。"
        },
        {
            "start": 282.06,
            "end": 283.62,
            "text": "第七步：方案呈现。"
        },
        {
            "start": 283.62,
            "end": 288.32,
            "text": "最后把所有分析和建议整合成一份完整的报告或 PPT。"
        },
        {
            "start": 288.72,
            "end": 290.46,
            "text": "让 AI 帮你组织。"
        },
        {
            "start": 290.46,
            "end": 295.0,
            "text": "\"请帮我把以上所有分析整合成一份商业分析报告。"
        },
        {
            "start": 295.0,
            "end": 297.52000000000004,
            "text": "结构包括：执行摘要（一页纸）、"
        },
        {
            "start": 297.52000000000004,
            "end": 300.16,
            "text": "行业和市场分析、内部诊断、问题归因、"
        },
        {
            "start": 300.16,
            "end": 301.34,
            "text": "策略建议、财务测算、"
        },
        {
            "start": 301.34,
            "end": 302.82,
            "text": "行动计划和时间表。"
        },
        {
            "start": 302.82,
            "end": 303.24,
            "text": "\""
        },
        {
            "start": 303.24,
            "end": 304.08,
            "text": "好，总结一下。"
        },
        {
            "start": 304.08,
            "end": 306.92,
            "text": "商业分析全流程七步：定义问题、"
        },
        {
            "start": 307.14,
            "end": 309.98,
            "text": "行业市场分析、内部诊断、问题归因、"
        },
        {
            "start": 309.98,
            "end": 312.16,
            "text": "策略制定、财务测算、方案呈现。"
        },
        {
            "start": 312.16,
            "end": 314.36,
            "text": "每一步都可以用 AI 辅助。"
        },
        {
            "start": 314.36,
            "end": 318.92,
            "text": "这七步综合运用了前面九个模块的所有框架和工具。"
        },
        {
            "start": 318.92,
            "end": 321.78,
            "text": "下一期我们看一个完整的案例复盘。"
        },
        {
            "start": 321.78,
            "end": 324.3,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 324.3,
            "end": 325.86,
            "text": "1. 商业分析七步："
        },
        {
            "start": 325.86,
            "end": 331.46,
            "text": "定义问题 → 外部分析 → 内部诊断 → 归因 → 策略 → 测算 → 呈现"
        },
        {
            "start": 331.46,
            "end": 335.06,
            "text": "2. 每步都可用 AI 辅助：行业研究、"
        },
        {
            "start": 335.06,
            "end": 337.78,
            "text": "数据分析、归因、策略生成、测算"
        },
        {
            "start": 337.78,
            "end": 340.72,
            "text": "3. 综合运用九大模块："
        },
        {
            "start": 340.72,
            "end": 344.66,
            "text": "战略+财务+营销+运营+领导力+创新"
        },
        {
            "start": 344.66,
            "end": 347.24,
            "text": "+数据+法律+AI工具"
        },
        {
            "start": 347.24,
            "end": 352.08,
            "text": "4. 策略要有优先级：影响大+成本低的优先"
        },
        {
            "start": 352.08,
            "end": 356.82,
            "text": "1. 你的企业目前面临的最大商业问题是什么？"
        },
        {
            "start": 356.82,
            "end": 361.6,
            "text": "2. 试着用这七步框架来分析这个问题"
        },
        {
            "start": 361.6,
            "end": 364.08,
            "text": "3. 你觉得哪一步最难？"
        },
        {
            "start": 364.08,
            "end": 366.26,
            "text": "是找原因还是定策略？"
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
], navigation: { nextLessonUrl: "./lesson-capstone-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-capstone-02.html?entry={entry}", secondaryHref: "./lesson-capstone-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-01", coachSource: "./ai-coach.html?source=lesson-capstone-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于商业分析全流程：从行业研究到战略建议的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "商业分析全流程：从行业研究到战略建议", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-capstone-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
