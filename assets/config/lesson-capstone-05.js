(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第5课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第5课：你的毕业项目（下）：方案呈现与 AI 点评",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep119-capstone-part3/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的毕业项目（下）：方案呈现与 AI 点评", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-capstone-06.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "你的毕业项目（下）：方案呈现与 AI 点评",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "毕业寄语：AI 时代的终身学习者",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-capstone-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 综合项目框架学完整。", meta: ["当前完成：综合实战与毕业项目 5/6", "建议下一节：毕业寄语：AI 时代的终身学习者", '也可以先整理这一节'], nextHref: "./lesson-capstone-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-05", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson5", audioSource: './assets/audio/capstone-ep119-capstone-part3.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep119-capstone-part3.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep119-capstone-part3/slide_01.png",
            "label": "你的毕业项目（下）：方案呈现与 AI 点评",
            "caption": "这一节会帮助你系统理解：你的毕业项目（下）：方案呈现与 AI 点评"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_03.png",
            "label": "核心分析框架",
            "caption": "各问题之间的关联是什么？ 第六部分：策略建议。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_04.png",
            "label": "证据与材料组织",
            "caption": "报告整合好之后，让 AI 从几个角度做点评。 第一个角度：逻辑审查。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "\" 第四个角度：假扮对立方。 这是一个很有用的方法。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "\"请帮我把这份报告精简成一个十分钟的汇报版本。 最多十页 PPT 的内容量。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_07.png",
            "label": "本节行动提示",
            "caption": "知识变成能力，需要实践加反思。 好，毕业项目到这里就完成了。"
        },
        {
            "file": "capstone-ep119-capstone-part3/slide_08.png",
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
            "end": 4.6999999999999975,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.6999999999999975,
            "end": 7.1,
            "text": "今天是毕业项目的最后一个阶段："
        },
        {
            "start": 7.1,
            "end": 11.46,
            "text": "把你过去两期做的所有分析整合成一份完整的方案，"
        },
        {
            "start": 11.46,
            "end": 14.1,
            "text": "然后让 AI 帮你做点评和优化。"
        },
        {
            "start": 14.1,
            "end": 16.18,
            "text": "第一个任务：整合你的分析报告。"
        },
        {
            "start": 16.18,
            "end": 19.68,
            "text": "一份完整的商业分析报告应该有以下结构。"
        },
        {
            "start": 19.68,
            "end": 21.42,
            "text": "第一部分：执行摘要。"
        },
        {
            "start": 21.42,
            "end": 22.66,
            "text": "一页纸。"
        },
        {
            "start": 22.66,
            "end": 24.46,
            "text": "给忙碌的决策者看的。"
        },
        {
            "start": 24.46,
            "end": 26.02,
            "text": "包括：核心问题是什么、"
        },
        {
            "start": 26.02,
            "end": 28.92,
            "text": "关键发现是什么、推荐的策略是什么、"
        },
        {
            "start": 28.92,
            "end": 30.52,
            "text": "预期的效果是什么。"
        },
        {
            "start": 30.52,
            "end": 33.8,
            "text": "执行摘要虽然放在最前面，但应该最后写。"
        },
        {
            "start": 33.8,
            "end": 36.98,
            "text": "因为你要把所有分析做完了才能总结出精华。"
        },
        {
            "start": 36.98,
            "end": 39.12,
            "text": "第二部分：问题定义和背景。"
        },
        {
            "start": 39.12,
            "end": 41.3,
            "text": "你分析的核心问题是什么？"
        },
        {
            "start": 41.3,
            "end": 42.9,
            "text": "为什么这个问题重要？"
        },
        {
            "start": 42.9,
            "end": 44.68,
            "text": "业务背景是怎样的？"
        },
        {
            "start": 44.68,
            "end": 46.16,
            "text": "第三部分：外部分析。"
        },
        {
            "start": 46.16,
            "end": 49.03999999999999,
            "text": "行业趋势、市场状况、竞争格局。"
        },
        {
            "start": 49.04,
            "end": 50.7,
            "text": "第四部分：内部诊断。"
        },
        {
            "start": 50.7,
            "end": 53.36,
            "text": "各维度的经营数据和表现分析。"
        },
        {
            "start": 53.88,
            "end": 55.48,
            "text": "第五部分：问题归因。"
        },
        {
            "start": 55.48,
            "end": 56.86,
            "text": "核心发现是什么？"
        },
        {
            "start": 56.86,
            "end": 57.82,
            "text": "根因是什么？"
        },
        {
            "start": 57.82,
            "end": 59.72,
            "text": "各问题之间的关联是什么？"
        },
        {
            "start": 59.72,
            "end": 61.28,
            "text": "第六部分：策略建议。"
        },
        {
            "start": 61.28,
            "end": 63.76,
            "text": "方向性策略、具体策略、行动计划。"
        },
        {
            "start": 63.76,
            "end": 65.54,
            "text": "包括优先级排序。"
        },
        {
            "start": 65.54,
            "end": 67.38,
            "text": "第七部分：财务测算。"
        },
        {
            "start": 67.38,
            "end": 69.84,
            "text": "投入产出分析、三个情景。"
        },
        {
            "start": 69.84,
            "end": 72.58,
            "text": "第八部分：风险评估和应对措施。"
        },
        {
            "start": 72.58,
            "end": 74.54,
            "text": "现在让 AI 帮你整合。"
        },
        {
            "start": 74.54,
            "end": 78.24,
            "text": "把你前两期做的所有分析内容发给 AI。"
        },
        {
            "start": 78.24,
            "end": 81.2,
            "text": "\"以下是我的毕业项目分析的所有内容。"
        },
        {
            "start": 81.2,
            "end": 83.23999999999998,
            "text": "包括：核心问题和子问题、"
        },
        {
            "start": 83.24,
            "end": 85.48,
            "text": "外部分析数据、内部诊断数据、"
        },
        {
            "start": 85.48,
            "end": 88.22,
            "text": "假设验证结果、归因分析、策略建议、"
        },
        {
            "start": 88.22,
            "end": 89.8,
            "text": "财务测算、风险评估。"
        },
        {
            "start": 90.32000000000001,
            "end": 93.14,
            "text": "请帮我整合成一份完整的商业分析报告，"
        },
        {
            "start": 93.14,
            "end": 95.92,
            "text": "按照以下结构：执行摘要、问题定义、"
        },
        {
            "start": 95.92,
            "end": 98.24,
            "text": "外部分析、内部诊断、归因、策略、"
        },
        {
            "start": 98.24,
            "end": 100.04,
            "text": "财务测算、风险评估。"
        },
        {
            "start": 100.04,
            "end": 103.62,
            "text": "语言要简洁专业，数据要突出，逻辑要清晰。"
        },
        {
            "start": 103.62,
            "end": 104.04,
            "text": "\""
        },
        {
            "start": 104.04,
            "end": 107.86,
            "text": "AI 会帮你把零散的分析内容整合成一份结构化的报告。"
        },
        {
            "start": 107.86,
            "end": 109.14,
            "text": "你再审核修改。"
        },
        {
            "start": 109.14,
            "end": 111.36,
            "text": "第二个任务：让 AI 做点评。"
        },
        {
            "start": 111.36,
            "end": 115.12,
            "text": "报告整合好之后，让 AI 从几个角度做点评。"
        },
        {
            "start": 115.12,
            "end": 117.16,
            "text": "第一个角度：逻辑审查。"
        },
        {
            "start": 117.16,
            "end": 119.5,
            "text": "\"请审查这份报告的逻辑。"
        },
        {
            "start": 119.5,
            "end": 124.7,
            "text": "从问题定义到归因到策略，逻辑链条是否完整？"
        },
        {
            "start": 124.7,
            "end": 126.62,
            "text": "有没有逻辑跳跃的地方？"
        },
        {
            "start": 126.62,
            "end": 129.18,
            "text": "结论是否被证据充分支撑？"
        },
        {
            "start": 129.18,
            "end": 129.6,
            "text": "\""
        },
        {
            "start": 129.6,
            "end": 131.98,
            "text": "AI 会指出逻辑薄弱的地方。"
        },
        {
            "start": 131.98,
            "end": 132.48,
            "text": "比如："
        },
        {
            "start": 132.48,
            "end": 136.2,
            "text": "\"你的归因分析指出根因是产品差异化不足，"
        },
        {
            "start": 136.2,
            "end": 139.86,
            "text": "但你的策略中只有一条跟产品相关，"
        },
        {
            "start": 139.86,
            "end": 142.8,
            "text": "其他都是关于营销和销售的。"
        },
        {
            "start": 142.8,
            "end": 146.1,
            "text": "策略和归因之间的对应关系可以加强。"
        },
        {
            "start": 146.1,
            "end": 146.51999999999998,
            "text": "\""
        },
        {
            "start": 146.51999999999998,
            "end": 148.42,
            "text": "第二个角度：遗漏检查。"
        },
        {
            "start": 148.42,
            "end": 151.82,
            "text": "\"请检查这份分析有没有遗漏的重要方面。"
        },
        {
            "start": 151.82,
            "end": 153.74,
            "text": "有没有我没考虑到的外部因素？"
        },
        {
            "start": 153.74,
            "end": 155.44,
            "text": "有没有我忽略的内部问题？"
        },
        {
            "start": 155.44,
            "end": 157.08,
            "text": "有没有更好的策略选项？"
        },
        {
            "start": 157.08,
            "end": 157.5,
            "text": "\""
        },
        {
            "start": 157.5,
            "end": 160.46,
            "text": "AI 可能会提醒你一些你没考虑到的角度。"
        },
        {
            "start": 160.46,
            "end": 162.82,
            "text": "第三个角度：可行性审查。"
        },
        {
            "start": 162.82,
            "end": 165.6,
            "text": "\"请评估我的策略建议的可行性。"
        },
        {
            "start": 165.6,
            "end": 167.74,
            "text": "每个策略落地的难度如何？"
        },
        {
            "start": 167.74,
            "end": 169.24,
            "text": "需要什么前提条件？"
        },
        {
            "start": 169.24,
            "end": 171.7,
            "text": "有没有执行中可能遇到的障碍？"
        },
        {
            "start": 171.7,
            "end": 172.11999999999998,
            "text": "\""
        },
        {
            "start": 172.11999999999998,
            "end": 174.18,
            "text": "第四个角度：假扮对立方。"
        },
        {
            "start": 174.18,
            "end": 175.9,
            "text": "这是一个很有用的方法。"
        },
        {
            "start": 175.9,
            "end": 178.8,
            "text": "让 AI 扮演一个\"挑战者\"的角色。"
        },
        {
            "start": 178.8,
            "end": 183.04,
            "text": "\"请假扮一个经验丰富的投资人或董事会成员。"
        },
        {
            "start": 183.04,
            "end": 185.96,
            "text": "看完这份报告后，你会提出什么质疑？"
        },
        {
            "start": 185.96,
            "end": 187.16,
            "text": "你最担心什么？"
        },
        {
            "start": 187.16,
            "end": 188.68,
            "text": "你觉得哪里最薄弱？"
        },
        {
            "start": 188.68,
            "end": 189.1,
            "text": "\""
        },
        {
            "start": 189.1,
            "end": 191.53999999999996,
            "text": "AI 会从\"挑刺\"的角度给你反馈。"
        },
        {
            "start": 191.54,
            "end": 194.56,
            "text": "这帮你提前准备好回应质疑的答案。"
        },
        {
            "start": 194.56,
            "end": 196.78,
            "text": "第三个任务：优化你的报告。"
        },
        {
            "start": 196.78,
            "end": 199.28,
            "text": "根据 AI 的点评，优化你的报告。"
        },
        {
            "start": 199.28,
            "end": 204.04,
            "text": "补充遗漏的分析、加强逻辑薄弱的地方、完善策略建议。"
        },
        {
            "start": 204.04,
            "end": 206.68,
            "text": "然后再让 AI 审一遍优化后的版本。"
        },
        {
            "start": 207.23999999999998,
            "end": 208.54,
            "text": "\"这是优化后的报告。"
        },
        {
            "start": 208.54,
            "end": 209.66,
            "text": "请再审查一遍。"
        },
        {
            "start": 209.66,
            "end": 212.0,
            "text": "之前指出的问题是否已经改善？"
        },
        {
            "start": 212.0,
            "end": 214.28,
            "text": "还有没有其他需要优化的地方？"
        },
        {
            "start": 214.28,
            "end": 214.7,
            "text": "\""
        },
        {
            "start": 214.7,
            "end": 217.06,
            "text": "第四个任务：做一份汇报版本。"
        },
        {
            "start": 217.06,
            "end": 221.24,
            "text": "完整的分析报告可能有十几页甚至二十几页。"
        },
        {
            "start": 221.24,
            "end": 224.9,
            "text": "但在实际汇报的时候，你可能只有十到十五分钟。"
        },
        {
            "start": 224.9,
            "end": 227.42,
            "text": "让 AI 帮你做一份精简的汇报版本。"
        },
        {
            "start": 227.42,
            "end": 231.28,
            "text": "\"请帮我把这份报告精简成一个十分钟的汇报版本。"
        },
        {
            "start": 231.28,
            "end": 233.42,
            "text": "最多十页 PPT 的内容量。"
        },
        {
            "start": 233.42,
            "end": 235.58,
            "text": "每页一个核心信息。"
        },
        {
            "start": 235.58,
            "end": 239.16,
            "text": "第一页是执行摘要，最后一页是行动计划和时间表。"
        },
        {
            "start": 239.16,
            "end": 242.54,
            "text": "中间的页面只保留最关键的发现和策略。"
        },
        {
            "start": 242.54,
            "end": 242.95999999999998,
            "text": "\""
        },
        {
            "start": 242.95999999999998,
            "end": 245.4,
            "text": "AI 会帮你提炼出最重要的内容。"
        },
        {
            "start": 245.4,
            "end": 247.16,
            "text": "十分钟的汇报要做到："
        },
        {
            "start": 247.16,
            "end": 249.42,
            "text": "开头三十秒说清楚核心结论，"
        },
        {
            "start": 249.42,
            "end": 252.32,
            "text": "中间讲关键发现和策略逻辑，"
        },
        {
            "start": 252.32,
            "end": 255.58,
            "text": "结尾说清楚下一步的行动和预期效果。"
        },
        {
            "start": 255.58,
            "end": 258.02,
            "text": "第五个任务：反思和总结。"
        },
        {
            "start": 258.02,
            "end": 260.96,
            "text": "毕业项目做完了，花几分钟反思一下。"
        },
        {
            "start": 260.96,
            "end": 264.68,
            "text": "第一，在这个项目中，哪个框架或工具对你最有用？"
        },
        {
            "start": 264.68,
            "end": 267.24,
            "text": "第二，哪个分析步骤你觉得最难？"
        },
        {
            "start": 267.24,
            "end": 271.5,
            "text": "是问题定义、数据收集、归因分析还是策略制定？"
        },
        {
            "start": 271.94,
            "end": 274.5,
            "text": "第三，AI 在这个项目中帮了你什么？"
        },
        {
            "start": 274.5,
            "end": 276.76,
            "text": "哪些环节 AI 帮助最大？"
        },
        {
            "start": 276.76,
            "end": 278.64,
            "text": "哪些环节你必须自己判断？"
        },
        {
            "start": 279.06,
            "end": 282.22,
            "text": "第四，如果重新做一遍，你会怎么改进？"
        },
        {
            "start": 282.22,
            "end": 284.72,
            "text": "这些反思帮你内化学到的东西。"
        },
        {
            "start": 284.72,
            "end": 287.76,
            "text": "知识变成能力，需要实践加反思。"
        },
        {
            "start": 287.76,
            "end": 290.24,
            "text": "好，毕业项目到这里就完成了。"
        },
        {
            "start": 290.24,
            "end": 291.32,
            "text": "恭喜你！"
        },
        {
            "start": 291.32,
            "end": 292.66,
            "text": "总结一下今天的任务："
        },
        {
            "start": 292.66,
            "end": 295.64,
            "text": "整合分析报告（八个部分的完整结构）、"
        },
        {
            "start": 295.64,
            "end": 298.62,
            "text": "让 AI 从四个角度点评（逻辑、遗漏、"
        },
        {
            "start": 298.62,
            "end": 301.6,
            "text": "可行性、对立方）、根据点评优化报告、"
        },
        {
            "start": 301.6,
            "end": 304.42,
            "text": "做精简汇报版本、反思和总结。"
        },
        {
            "start": 304.42,
            "end": 307.46,
            "text": "你现在手上有了一份完整的商业分析方案。"
        },
        {
            "start": 307.46,
            "end": 311.7,
            "text": "这不只是一个作业，它可以直接用于你的实际业务决策。"
        },
        {
            "start": 311.7,
            "end": 315.2600000000001,
            "text": "下一期是我们整个课程的最后一期：毕业寄语。"
        },
        {
            "start": 315.2600000000001,
            "end": 317.94,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 317.94,
            "end": 321.5,
            "text": "1. 报告八部分：摘要、问题、外部、"
        },
        {
            "start": 321.5,
            "end": 325.06,
            "text": "内部、归因、策略、测算、风险"
        },
        {
            "start": 325.06,
            "end": 325.70761904761895,
            "text": "2. AI 四角度点评：逻辑、遗漏、可行性、对立方挑战"
        },
        {
            "start": 325.70761904761895,
            "end": 331.1,
            "text": "3. 做精简汇报版：十分钟、十页内、每页一个核心信息"
        },
        {
            "start": 331.1,
            "end": 334.4,
            "text": "4. 反思：哪个框架最有用？"
        },
        {
            "start": 334.4,
            "end": 335.54,
            "text": "哪步最难？"
        },
        {
            "start": 335.54,
            "end": 336.88,
            "text": "AI 帮了什么？"
        },
        {
            "start": 336.88,
            "end": 340.78,
            "text": "1. 你的报告中逻辑最薄弱的地方在哪？"
        },
        {
            "start": 340.78,
            "end": 342.38,
            "text": "AI 帮你发现了什么？"
        },
        {
            "start": 342.38,
            "end": 344.98,
            "text": "2. 如果你要向管理层汇报，"
        },
        {
            "start": 344.98,
            "end": 347.24,
            "text": "你的\"三十秒核心结论\"是什么？"
        },
        {
            "start": 347.24,
            "end": 351.02,
            "text": "3. 这个毕业项目中你最大的收获是什么？"
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
], navigation: { nextLessonUrl: "./lesson-capstone-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-capstone-06.html?entry={entry}", secondaryHref: "./lesson-capstone-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-05", coachSource: "./ai-coach.html?source=lesson-capstone-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的毕业项目（下）：方案呈现与 AI 点评的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的毕业项目（下）：方案呈现与 AI 点评", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-capstone-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
