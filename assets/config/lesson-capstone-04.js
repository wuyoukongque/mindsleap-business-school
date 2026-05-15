(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第4课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第4课：你的毕业项目（中）：分析与策略制定",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep118-capstone-part2/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的毕业项目（中）：分析与策略制定", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-capstone-05.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "你的毕业项目（中）：分析与策略制定",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "你的毕业项目（下）：方案呈现与 AI 点评",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 6,
                "title": "毕业寄语：AI 时代的终身学习者",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-capstone-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 综合项目框架学完整。", meta: ["当前完成：综合实战与毕业项目 4/6", "建议下一节：你的毕业项目（下）：方案呈现与 AI 点评", '也可以先整理这一节'], nextHref: "./lesson-capstone-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-04", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson4", audioSource: './assets/audio/capstone-ep118-capstone-part2.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep118-capstone-part2.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep118-capstone-part2/slide_01.png",
            "label": "你的毕业项目（中）：分析与策略制定",
            "caption": "这一节会帮助你系统理解：你的毕业项目（中）：分析与策略制定"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_03.png",
            "label": "核心分析框架",
            "caption": "可能的结果是： 假设一（获客渠道单一）：成立，置信度高。 证据：百分之七十五的新客来自同一个渠道，该渠道成本上升百分之三十五。"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_04.png",
            "label": "证据与材料组织",
            "caption": "\" AI 可能会发现问题之间的关联。 比如：\"获客渠道单一和差异化不足是相关的。"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "每个具体策略要回答：做什么？ 为什么？"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "让 AI 帮你做优先级排序。 \"请帮我对以上策略按照影响力和可行性做优先级排序。"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_07.png",
            "label": "本节行动提示",
            "caption": "粗略的量级估算就够了。 目的是确保你的策略在财务上是合理的。"
        },
        {
            "file": "capstone-ep118-capstone-part2/slide_08.png",
            "label": "学员最需要带走的 3 个项目判断",
            "caption": "学完后，最重要的是把今天的 综合项目方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.56,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.56,
            "end": 3.7,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.7,
            "end": 7.92,
            "text": "今天是毕业项目的第二阶段：深度分析与策略制定。"
        },
        {
            "start": 7.92,
            "end": 12.86,
            "text": "上一期你已经定义了核心问题、收集了数据、列出了假设。"
        },
        {
            "start": 12.86,
            "end": 16.76,
            "text": "今天我们来验证假设、找到根因、制定策略。"
        },
        {
            "start": 16.76,
            "end": 19.0,
            "text": "第一个任务：验证你的假设。"
        },
        {
            "start": 19.0,
            "end": 21.21,
            "text": "上一期你列了三到五个假设。"
        },
        {
            "start": 21.21,
            "end": 24.48,
            "text": "现在要用数据来验证或推翻每一个。"
        },
        {
            "start": 24.48,
            "end": 25.305,
            "text": "怎么验证？"
        },
        {
            "start": 25.305,
            "end": 27.900000000000002,
            "text": "对每个假设，问两个问题。"
        },
        {
            "start": 27.900000000000002,
            "end": 30.84,
            "text": "第一个问题：有什么数据可以支持这个假设？"
        },
        {
            "start": 30.84,
            "end": 34.16,
            "text": "第二个问题：有什么数据可以反驳这个假设？"
        },
        {
            "start": 34.16,
            "end": 36.7,
            "text": "你要做的是\"平衡地看证据\"，"
        },
        {
            "start": 36.7,
            "end": 39.91333333333334,
            "text": "而不是只找支持你假设的数据。"
        },
        {
            "start": 39.91333333333334,
            "end": 43.76,
            "text": "实操方法：把你的假设和相关数据发给 AI。"
        },
        {
            "start": 43.76,
            "end": 46.73,
            "text": "\"以下是我的假设和收集到的数据。"
        },
        {
            "start": 46.73,
            "end": 49.08,
            "text": "请帮我逐个验证每个假设。"
        },
        {
            "start": 49.08,
            "end": 50.32,
            "text": "对每个假设，"
        },
        {
            "start": 50.32,
            "end": 52.94,
            "text": "列出支持的证据和反驳的证据，"
        },
        {
            "start": 52.94,
            "end": 55.74,
            "text": "然后给出你的判断：这个假设是否成立？"
        },
        {
            "start": 55.74,
            "end": 57.98,
            "text": "置信度是高、中还是低？"
        },
        {
            "start": 57.98,
            "end": 58.4,
            "text": "\""
        },
        {
            "start": 58.4,
            "end": 60.02,
            "text": "AI 会帮你做一个平衡的分析。"
        },
        {
            "start": 60.02,
            "end": 61.62,
            "text": "可能的结果是："
        },
        {
            "start": 61.62,
            "end": 65.94,
            "text": "假设一（获客渠道单一）：成立，置信度高。"
        },
        {
            "start": 65.94,
            "end": 66.4,
            "text": "证据："
        },
        {
            "start": 66.4,
            "end": 69.88,
            "text": "百分之七十五的新客来自同一个渠道，"
        },
        {
            "start": 69.88,
            "end": 72.85999999999997,
            "text": "该渠道成本上升百分之三十五。"
        },
        {
            "start": 72.86,
            "end": 76.82,
            "text": "假设二（差异化不足）：部分成立，置信度中。"
        },
        {
            "start": 76.82,
            "end": 79.32,
            "text": "证据：竞品在功能上趋同，"
        },
        {
            "start": 79.32,
            "end": 82.94,
            "text": "但你的品牌认知度调研显示客户仍然认可"
        },
        {
            "start": 82.94,
            "end": 84.24,
            "text": "你的某些独特价值。"
        },
        {
            "start": 84.24,
            "end": 88.76,
            "text": "假设三（客户支持差导致续费下降）：成立，置信度高。"
        },
        {
            "start": 88.76,
            "end": 89.5,
            "text": "证据："
        },
        {
            "start": 89.5,
            "end": 92.62,
            "text": "客服响应时间从平均两小时延长到了八小时，"
        },
        {
            "start": 92.62,
            "end": 94.38,
            "text": "NPS 下降了十五个点。"
        },
        {
            "start": 94.38,
            "end": 96.58,
            "text": "第二个任务：做深度归因分析。"
        },
        {
            "start": 96.58,
            "end": 99.82,
            "text": "假设验证完了，接下来做更深入的归因。"
        },
        {
            "start": 99.82,
            "end": 101.98,
            "text": "不只是知道\"什么有问题\"，"
        },
        {
            "start": 101.98,
            "end": 104.88,
            "text": "还要知道\"为什么有问题\"和\"各个问题"
        },
        {
            "start": 104.88,
            "end": 106.48666666666668,
            "text": "之间有没有关联\"。"
        },
        {
            "start": 106.48666666666668,
            "end": 109.02,
            "text": "让 AI 帮你做综合归因分析。"
        },
        {
            "start": 109.02,
            "end": 113.2,
            "text": "\"基于假设验证的结果，请帮我做一个综合归因分析。"
        },
        {
            "start": 113.2,
            "end": 118.32,
            "text": "第一，把所有成立的假设按照对核心问题的影响程度排序。"
        },
        {
            "start": 118.32,
            "end": 123.12,
            "text": "第二，分析这些问题之间有没有因果关系或相互影响。"
        },
        {
            "start": 123.12,
            "end": 126.92000000000002,
            "text": "第三，找出最根本的一到两个根因。"
        },
        {
            "start": 126.92000000000002,
            "end": 127.34000000000002,
            "text": "\""
        },
        {
            "start": 127.34000000000002,
            "end": 129.44,
            "text": "AI 可能会发现问题之间的关联。"
        },
        {
            "start": 129.44,
            "end": 133.02,
            "text": "比如：\"获客渠道单一和差异化不足是相关的。"
        },
        {
            "start": 133.02,
            "end": 134.68,
            "text": "正因为产品差异化不够，"
        },
        {
            "start": 134.68,
            "end": 137.85000000000002,
            "text": "所以你在获客的时候主要靠投放价格战，"
        },
        {
            "start": 137.85000000000002,
            "end": 139.24,
            "text": "导致成本上升。"
        },
        {
            "start": 139.24,
            "end": 141.76,
            "text": "根本原因是产品竞争力的下降。"
        },
        {
            "start": 141.76,
            "end": 142.17999999999998,
            "text": "\""
        },
        {
            "start": 142.17999999999998,
            "end": 145.4,
            "text": "这种关联分析帮你找到\"牵一发动全身\"的根因。"
        },
        {
            "start": 145.4,
            "end": 148.1,
            "text": "解决根因，多个问题可能同时改善。"
        },
        {
            "start": 148.1,
            "end": 149.98,
            "text": "第三个任务：制定策略。"
        },
        {
            "start": 149.98,
            "end": 152.36,
            "text": "找到了根因，现在制定策略。"
        },
        {
            "start": 152.36,
            "end": 154.22,
            "text": "策略制定有三个层次。"
        },
        {
            "start": 154.22,
            "end": 156.36,
            "text": "第一层次：方向性策略。"
        },
        {
            "start": 156.36,
            "end": 157.9,
            "text": "你的大方向是什么？"
        },
        {
            "start": 157.9,
            "end": 161.96,
            "text": "比如：\"从通用型产品转向行业垂直型产品\"。"
        },
        {
            "start": 161.96,
            "end": 165.32,
            "text": "或者\"从规模扩张转向单客价值提升\"。"
        },
        {
            "start": 165.32,
            "end": 168.90000000000003,
            "text": "或者\"从产品驱动转向客户成功驱动\"。"
        },
        {
            "start": 168.90000000000003,
            "end": 171.66666666666669,
            "text": "方向性策略通常只有一到两个。"
        },
        {
            "start": 171.66666666666669,
            "end": 174.72,
            "text": "这是你未来六到十二个月的核心方向。"
        },
        {
            "start": 174.72,
            "end": 176.8,
            "text": "第二层次：具体策略。"
        },
        {
            "start": 176.8,
            "end": 179.32,
            "text": "在大方向下面的具体举措。"
        },
        {
            "start": 179.32,
            "end": 182.92,
            "text": "比如大方向是\"转向行业垂直型产品\"。"
        },
        {
            "start": 182.92,
            "end": 186.51,
            "text": "具体策略可能包括：选择两个重点行业、"
        },
        {
            "start": 186.51,
            "end": 188.98,
            "text": "为每个行业开发定制化功能、"
        },
        {
            "start": 188.98,
            "end": 192.7,
            "text": "建立行业客户案例库、招聘行业专家。"
        },
        {
            "start": 192.7,
            "end": 195.365,
            "text": "每个具体策略要回答：做什么？"
        },
        {
            "start": 195.365,
            "end": 196.0,
            "text": "为什么？"
        },
        {
            "start": 196.0,
            "end": 196.94,
            "text": "预期效果？"
        },
        {
            "start": 196.94,
            "end": 198.18,
            "text": "需要什么资源？"
        },
        {
            "start": 198.18,
            "end": 200.22,
            "text": "第三层次：行动计划。"
        },
        {
            "start": 200.22,
            "end": 206.02,
            "text": "每个具体策略拆解成可执行的行动项，有时间表和负责人。"
        },
        {
            "start": 206.02,
            "end": 207.44,
            "text": "让 AI 帮你。"
        },
        {
            "start": 207.44,
            "end": 211.54,
            "text": "\"基于以上的归因分析，请帮我制定策略建议。"
        },
        {
            "start": 211.54,
            "end": 212.76,
            "text": "分三个层次："
        },
        {
            "start": 212.76,
            "end": 215.2,
            "text": "方向性策略（一到两个大方向）、"
        },
        {
            "start": 215.2,
            "end": 218.38,
            "text": "具体策略（每个方向下三到五个具体举措）、"
        },
        {
            "start": 218.38,
            "end": 221.05333333333334,
            "text": "行动计划（每个举措的关键行动、"
        },
        {
            "start": 221.05333333333334,
            "end": 222.78,
            "text": "时间表和资源需求）。"
        },
        {
            "start": 222.78,
            "end": 223.2,
            "text": "\""
        },
        {
            "start": 223.28,
            "end": 226.2,
            "text": "第四个任务：做取舍和优先级排序。"
        },
        {
            "start": 226.2,
            "end": 228.64,
            "text": "你不可能同时做所有的事情。"
        },
        {
            "start": 228.64,
            "end": 230.42,
            "text": "资源有限、时间有限。"
        },
        {
            "start": 230.42,
            "end": 231.52,
            "text": "必须做取舍。"
        },
        {
            "start": 231.52,
            "end": 233.04,
            "text": "怎么排优先级？"
        },
        {
            "start": 233.04,
            "end": 233.8,
            "text": "用两个维度。"
        },
        {
            "start": 233.8,
            "end": 235.6,
            "text": "第一个维度：影响力。"
        },
        {
            "start": 235.6,
            "end": 239.52,
            "text": "这个策略如果成功了，对核心问题的改善有多大？"
        },
        {
            "start": 239.52,
            "end": 241.5,
            "text": "第二个维度：可行性。"
        },
        {
            "start": 241.5,
            "end": 243.86,
            "text": "这个策略执行的难度有多大？"
        },
        {
            "start": 243.86,
            "end": 245.60000000000002,
            "text": "需要多少资源和时间？"
        },
        {
            "start": 245.60000000000002,
            "end": 249.82,
            "text": "影响力高且可行性高的策略：优先做。"
        },
        {
            "start": 249.82,
            "end": 250.98000000000002,
            "text": "这是你的\"速赢\"。"
        },
        {
            "start": 250.98000000000002,
            "end": 254.98,
            "text": "影响力高但可行性低的策略：分阶段做。"
        },
        {
            "start": 254.98,
            "end": 256.42,
            "text": "这是你的\"长期投资\"。"
        },
        {
            "start": 256.42,
            "end": 258.82,
            "text": "影响力低的策略：暂时不做。"
        },
        {
            "start": 258.82,
            "end": 260.58,
            "text": "不管可行性高低。"
        },
        {
            "start": 260.58,
            "end": 263.12,
            "text": "让 AI 帮你做优先级排序。"
        },
        {
            "start": 263.12,
            "end": 267.2,
            "text": "\"请帮我对以上策略按照影响力和可行性做优先级排序。"
        },
        {
            "start": 267.2,
            "end": 269.02,
            "text": "输出一个二乘二的矩阵。"
        },
        {
            "start": 269.02,
            "end": 269.44,
            "text": "\""
        },
        {
            "start": 269.44,
            "end": 270.9,
            "text": "第五个任务：做风险评估。"
        },
        {
            "start": 270.9,
            "end": 272.62,
            "text": "每个策略都有风险。"
        },
        {
            "start": 272.62,
            "end": 274.26,
            "text": "不能只看好的一面。"
        },
        {
            "start": 274.26,
            "end": 276.58000000000004,
            "text": "对每个优先策略，评估三类风险。"
        },
        {
            "start": 276.58000000000004,
            "end": 277.90999999999997,
            "text": "第一类：执行风险。"
        },
        {
            "start": 277.90999999999997,
            "end": 279.72,
            "text": "这个策略能不能真的落地？"
        },
        {
            "start": 279.72,
            "end": 280.86,
            "text": "团队有没有能力？"
        },
        {
            "start": 280.86,
            "end": 281.76,
            "text": "时间够不够？"
        },
        {
            "start": 281.76,
            "end": 283.35999999999996,
            "text": "第二类：市场风险。"
        },
        {
            "start": 283.36,
            "end": 286.32,
            "text": "市场环境会不会变化导致策略失效？"
        },
        {
            "start": 286.32,
            "end": 287.82,
            "text": "竞品会不会有反应？"
        },
        {
            "start": 287.82,
            "end": 289.3200000000001,
            "text": "第三类：财务风险。"
        },
        {
            "start": 289.3200000000001,
            "end": 291.76,
            "text": "如果策略失败了，损失有多大？"
        },
        {
            "start": 291.76,
            "end": 292.54,
            "text": "能不能承受？"
        },
        {
            "start": 292.54,
            "end": 294.94,
            "text": "让 AI 帮你做风险评估。"
        },
        {
            "start": 294.94,
            "end": 298.2,
            "text": "\"请对每个优先策略做风险评估。"
        },
        {
            "start": 298.2,
            "end": 303.26,
            "text": "识别主要风险，评估概率和影响，并给出风险应对措施。"
        },
        {
            "start": 303.26,
            "end": 303.68,
            "text": "\""
        },
        {
            "start": 303.68,
            "end": 306.14,
            "text": "第六个任务：做简单的财务测算。"
        },
        {
            "start": 306.14,
            "end": 308.4,
            "text": "策略好不好，最终要算账。"
        },
        {
            "start": 308.4,
            "end": 309.42,
            "text": "投入多少？"
        },
        {
            "start": 309.42,
            "end": 311.6,
            "text": "每个策略需要的投入是什么？"
        },
        {
            "start": 311.6,
            "end": 313.43333333333334,
            "text": "人力、资金、时间。"
        },
        {
            "start": 313.43333333333334,
            "end": 314.42,
            "text": "产出多少？"
        },
        {
            "start": 314.42,
            "end": 318.38,
            "text": "如果策略成功，预期能带来多少增长或节省？"
        },
        {
            "start": 318.38,
            "end": 320.2,
            "text": "做三个情景的测算。"
        },
        {
            "start": 320.2,
            "end": 323.54,
            "text": "乐观情景、基准情景、悲观情景。"
        },
        {
            "start": 323.54,
            "end": 324.81,
            "text": "不需要太精确。"
        },
        {
            "start": 324.81,
            "end": 327.22,
            "text": "粗略的量级估算就够了。"
        },
        {
            "start": 327.22,
            "end": 330.86,
            "text": "目的是确保你的策略在财务上是合理的。"
        },
        {
            "start": 330.86,
            "end": 332.22,
            "text": "让 AI 帮你。"
        },
        {
            "start": 332.22,
            "end": 336.5,
            "text": "\"假设执行以下策略，请帮我做一个简单的投入产出测算。"
        },
        {
            "start": 336.5,
            "end": 339.32,
            "text": "分乐观、基准、悲观三个情景。"
        },
        {
            "start": 339.32,
            "end": 339.74,
            "text": "\""
        },
        {
            "start": 339.74,
            "end": 342.08399999999995,
            "text": "好，今天的六个任务总结。"
        },
        {
            "start": 342.08399999999995,
            "end": 345.29285714285714,
            "text": "验证假设（用数据检验每个假设）、"
        },
        {
            "start": 345.29285714285714,
            "end": 346.50000000000017,
            "text": "深度归因（找到根因和问题关联）、"
        },
        {
            "start": 346.50000000000017,
            "end": 349.92,
            "text": "制定策略（三个层次：方向、具体、"
        },
        {
            "start": 349.92,
            "end": 350.31,
            "text": "行动）、"
        },
        {
            "start": 350.31,
            "end": 353.6,
            "text": "优先级排序（影响力乘以可行性）、"
        },
        {
            "start": 353.6,
            "end": 356.2866666666667,
            "text": "风险评估（执行、市场、"
        },
        {
            "start": 356.2866666666667,
            "end": 357.83,
            "text": "财务三类风险）、"
        },
        {
            "start": 357.83,
            "end": 360.92,
            "text": "财务测算（投入产出的三个情景）。"
        },
        {
            "start": 360.92,
            "end": 362.76,
            "text": "下一期是最后一期："
        },
        {
            "start": 362.76,
            "end": 365.88,
            "text": "把所有分析整合成一份完整的方案，"
        },
        {
            "start": 365.88,
            "end": 368.3399999999999,
            "text": "让 AI 帮你做点评。"
        },
        {
            "start": 368.34,
            "end": 370.47,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 370.47,
            "end": 374.84000000000003,
            "text": "1. 假设验证：平衡看证据，不只找支持的数据"
        },
        {
            "start": 374.84000000000003,
            "end": 380.28,
            "text": "2. 深度归因：找问题关联和根因，解决根因牵一发动全身"
        },
        {
            "start": 380.28,
            "end": 385.60799999999995,
            "text": "3. 策略三层次：方向性策略 → 具体策略 → 行动计划"
        },
        {
            "start": 385.60799999999995,
            "end": 391.08,
            "text": "4. 优先级：影响力 × 可行性矩阵，先做\"速赢\""
        },
        {
            "start": 391.08,
            "end": 394.18,
            "text": "1. 你的假设中哪些被验证了？"
        },
        {
            "start": 394.18,
            "end": 395.9,
            "text": "哪些被推翻了？"
        },
        {
            "start": 395.9,
            "end": 399.7933333333333,
            "text": "2. 你找到的最根本的原因是什么？"
        },
        {
            "start": 399.7933333333333,
            "end": 402.2,
            "text": "3. 你的\"速赢\"策略是什么？"
        },
        {
            "start": 402.2,
            "end": 404.2,
            "text": "能不能在一个月内启动？"
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
], navigation: { nextLessonUrl: "./lesson-capstone-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-capstone-05.html?entry={entry}", secondaryHref: "./lesson-capstone-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-04", coachSource: "./ai-coach.html?source=lesson-capstone-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的毕业项目（中）：分析与策略制定的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的毕业项目（中）：分析与策略制定", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-capstone-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
