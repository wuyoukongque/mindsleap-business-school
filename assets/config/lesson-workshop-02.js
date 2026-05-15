(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第2课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第2课：AI 写作实操：让 AI 帮你写报告、方案、邮件",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep108-ai-writing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 写作实操：让 AI 帮你写报告、方案、邮件", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-03.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "AI 数据分析实操：用自然语言分析业务数据",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 4,
                "title": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-workshop-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 2/8", "建议下一节：AI 数据分析实操：用自然语言分析业务数据", '也可以先整理这一节'], nextHref: "./lesson-workshop-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-02", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson2", audioSource: './assets/audio/workshop-ep108-ai-writing.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep108-ai-writing.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep108-ai-writing/slide_01.png",
            "label": "AI 写作实操：让 AI 帮你写报告、方案、邮件",
            "caption": "这一节会帮助你系统理解：AI 写作实操：让 AI 帮你写报告、方案、邮件"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_03.png",
            "label": "核心实操框架",
            "caption": "他对我们的方案感兴趣，但担心实施周期太长。 我需要写一封跟进邮件，表达感谢，回应他对实施周期的担心（我们可以分阶段实施，第一阶段三周就能上线），并提议下周三下午安排一次产品演示。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "第二步，在框架中填入你的实际数据和分析，让 AI 帮你润色。 \"以下是我的月度运营报告的要点。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "请帮我把这些要点扩展成完整的产品策略部分，包括：核心差异化、目标客群画像、定价策略建议、上市节奏建议。 \" 第三段，让 AI 帮你做财务测算的框架。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "AI 的第一版输出通常不是最终版。 你可以告诉 AI 哪里需要改： \"第二段的分析太笼统了，请更具体一些，加入实际的数据。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_07.png",
            "label": "本节行动提示",
            "caption": "第三，保持你的声音。 AI 写的东西会有一种\"AI 味\"，用词过于规范、句式过于整齐、缺少个人特色。"
        },
        {
            "file": "workshop-ep108-ai-writing/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
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
            "end": 3.82,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.82,
            "end": 5.7,
            "text": "今天实操 AI 写作。"
        },
        {
            "start": 5.7,
            "end": 8.7,
            "text": "写作是管理者最耗时的工作之一。"
        },
        {
            "start": 8.7,
            "end": 11.76,
            "text": "写邮件、写周报、写方案、写汇报材料。"
        },
        {
            "start": 11.76,
            "end": 15.06,
            "text": "AI 可以帮你把写作效率提升三到五倍。"
        },
        {
            "start": 15.06,
            "end": 17.06,
            "text": "今天教你具体怎么做。"
        },
        {
            "start": 17.06,
            "end": 18.8,
            "text": "先讲一个核心原则："
        },
        {
            "start": 18.8,
            "end": 21.58,
            "text": "好的 AI 写作不是让 AI 替你写，"
        },
        {
            "start": 21.58,
            "end": 23.44,
            "text": "而是你和 AI 合作写。"
        },
        {
            "start": 23.44,
            "end": 24.28,
            "text": "你负责什么？"
        },
        {
            "start": 24.28,
            "end": 26.74,
            "text": "思想、观点、判断、关键信息。"
        },
        {
            "start": 26.74,
            "end": 29.58,
            "text": "这些是 AI 不知道的，只有你知道。"
        },
        {
            "start": 29.58,
            "end": 30.7,
            "text": "AI 负责什么？"
        },
        {
            "start": 30.7,
            "end": 33.12,
            "text": "结构化、扩展、润色、排版。"
        },
        {
            "start": 33.12,
            "end": 36.0,
            "text": "这些 AI 比你快得多、做得也不差。"
        },
        {
            "start": 36.0,
            "end": 39.96,
            "text": "最高效的流程是：你给 AI 要点和框架，"
        },
        {
            "start": 39.96,
            "end": 41.96,
            "text": "AI 帮你扩展成完整的文稿，"
        },
        {
            "start": 41.96,
            "end": 43.56,
            "text": "你再审核和修改。"
        },
        {
            "start": 43.74,
            "end": 46.82,
            "text": "实操一：用 AI 写商务邮件。"
        },
        {
            "start": 47.34,
            "end": 50.22,
            "text": "场景：你需要给一个潜在客户写一封跟进邮件。"
        },
        {
            "start": 50.22,
            "end": 52.44,
            "text": "上周见过面，聊了合作的可能性。"
        },
        {
            "start": 52.44,
            "end": 54.46,
            "text": "现在需要跟进，推动下一步。"
        },
        {
            "start": 54.46,
            "end": 56.08,
            "text": "你可以这样给 AI 下指令："
        },
        {
            "start": 56.08,
            "end": 58.2,
            "text": "\"帮我写一封商务邮件。"
        },
        {
            "start": 58.2,
            "end": 61.42,
            "text": "背景：我上周四跟张总见面，"
        },
        {
            "start": 61.42,
            "end": 64.2,
            "text": "讨论了我们在 AI 客服方面的合作。"
        },
        {
            "start": 64.2,
            "end": 68.3,
            "text": "他对我们的方案感兴趣，但担心实施周期太长。"
        },
        {
            "start": 68.3,
            "end": 71.84,
            "text": "我需要写一封跟进邮件，表达感谢，"
        },
        {
            "start": 71.84,
            "end": 76.04,
            "text": "回应他对实施周期的担心（我们可以分阶段实施，"
        },
        {
            "start": 76.04,
            "end": 78.16,
            "text": "第一阶段三周就能上线），"
        },
        {
            "start": 78.16,
            "end": 81.58,
            "text": "并提议下周三下午安排一次产品演示。"
        },
        {
            "start": 81.58,
            "end": 84.96,
            "text": "语气要专业但不生硬，简洁明了。"
        },
        {
            "start": 84.96,
            "end": 85.38,
            "text": "\""
        },
        {
            "start": 85.38,
            "end": 86.08,
            "text": "看到了吗？"
        },
        {
            "start": 86.12,
            "end": 88.84,
            "text": "关键信息都是你提供的：背景、"
        },
        {
            "start": 89.26,
            "end": 91.0,
            "text": "客户的顾虑、你的回应、"
        },
        {
            "start": 91.0,
            "end": 93.9,
            "text": "想推动的下一步、语气要求。"
        },
        {
            "start": 93.9,
            "end": 97.42,
            "text": "AI 负责的是把这些信息组织成一封得体的邮件。"
        },
        {
            "start": 97.42,
            "end": 99.92,
            "text": "AI 生成之后你快速读一遍，"
        },
        {
            "start": 99.92,
            "end": 102.12,
            "text": "可能改几个词、调整一两句话，"
        },
        {
            "start": 102.12,
            "end": 103.58,
            "text": "三分钟就搞定了。"
        },
        {
            "start": 103.58,
            "end": 106.56,
            "text": "如果你自己从头写，可能要十五到二十分钟。"
        },
        {
            "start": 106.56,
            "end": 109.26,
            "text": "实操二：用 AI 写工作报告。"
        },
        {
            "start": 109.26,
            "end": 113.92,
            "text": "场景：你需要写一份月度运营报告，给管理层汇报。"
        },
        {
            "start": 113.92,
            "end": 115.22,
            "text": "分两步走。"
        },
        {
            "start": 115.22,
            "end": 117.84,
            "text": "第一步，让 AI 帮你搭建报告框架。"
        },
        {
            "start": 117.84,
            "end": 121.24,
            "text": "\"帮我搭建一份月度运营报告的框架。"
        },
        {
            "start": 121.24,
            "end": 124.2,
            "text": "内容包括：本月核心指标总结、"
        },
        {
            "start": 124.2,
            "end": 126.3,
            "text": "与目标对比、环比变化、"
        },
        {
            "start": 126.3,
            "end": 127.82,
            "text": "关键事件和成果、"
        },
        {
            "start": 127.82,
            "end": 129.76,
            "text": "发现的问题和原因分析、"
        },
        {
            "start": 129.76,
            "end": 132.3,
            "text": "下月计划和行动项。"
        },
        {
            "start": 132.3,
            "end": 132.72,
            "text": "\""
        },
        {
            "start": 132.72,
            "end": 135.0,
            "text": "AI 给你一个结构清晰的框架。"
        },
        {
            "start": 135.0,
            "end": 135.9,
            "text": "第二步，"
        },
        {
            "start": 135.9,
            "end": 138.98,
            "text": "在框架中填入你的实际数据和分析，"
        },
        {
            "start": 138.98,
            "end": 140.76,
            "text": "让 AI 帮你润色。"
        },
        {
            "start": 140.76,
            "end": 143.66,
            "text": "\"以下是我的月度运营报告的要点。"
        },
        {
            "start": 143.66,
            "end": 146.52,
            "text": "然后把你的数据和分析要点列出来。"
        },
        {
            "start": 146.52,
            "end": 149.18,
            "text": "请帮我扩展成一份完整的报告，"
        },
        {
            "start": 149.18,
            "end": 152.6,
            "text": "语言要简洁专业，数据要突出展示，"
        },
        {
            "start": 152.6,
            "end": 154.86,
            "text": "问题分析要有因果逻辑。"
        },
        {
            "start": 154.86,
            "end": 155.28,
            "text": "\""
        },
        {
            "start": 155.35999999999999,
            "end": 159.74,
            "text": "AI 会把你的要点扩展成一份完整的、结构化的报告。"
        },
        {
            "start": 159.74,
            "end": 161.7,
            "text": "你再审核修改就行。"
        },
        {
            "start": 161.7,
            "end": 163.96,
            "text": "实操三：用 AI 写商业方案。"
        },
        {
            "start": 163.96,
            "end": 167.18,
            "text": "场景：你需要写一份新项目的立项方案。"
        },
        {
            "start": 167.18,
            "end": 170.26,
            "text": "商业方案比邮件和报告复杂得多。"
        },
        {
            "start": 170.26,
            "end": 171.64,
            "text": "建议分段来写。"
        },
        {
            "start": 171.64,
            "end": 174.16,
            "text": "第一段，让 AI 帮你做背景分析。"
        },
        {
            "start": 174.16,
            "end": 178.12,
            "text": "\"我们公司想做一个面向中小企业的 AI 客服产品。"
        },
        {
            "start": 178.12,
            "end": 182.42,
            "text": "请帮我分析这个市场的现状：市场规模大概多大？"
        },
        {
            "start": 182.42,
            "end": 184.0,
            "text": "主要的竞品有哪些？"
        },
        {
            "start": 184.0,
            "end": 186.28,
            "text": "他们的定价和功能是怎样的？"
        },
        {
            "start": 186.28,
            "end": 189.58,
            "text": "中小企业在客服方面的核心痛点是什么？"
        },
        {
            "start": 189.58,
            "end": 190.0,
            "text": "\""
        },
        {
            "start": 190.0,
            "end": 191.6,
            "text": "AI 会给你一份市场分析。"
        },
        {
            "start": 191.6,
            "end": 194.62,
            "text": "但要注意：AI 的数据可能不是最新的。"
        },
        {
            "start": 194.62,
            "end": 196.84,
            "text": "关键的数据你需要自己核实。"
        },
        {
            "start": 196.84,
            "end": 201.68,
            "text": "第二段，你提供你的产品定位和策略，让 AI 帮你完善。"
        },
        {
            "start": 201.68,
            "end": 204.4,
            "text": "\"我们的产品定位是以下几点。"
        },
        {
            "start": 204.4,
            "end": 205.78,
            "text": "然后列出你的定位。"
        },
        {
            "start": 205.78,
            "end": 209.72,
            "text": "请帮我把这些要点扩展成完整的产品策略部分，"
        },
        {
            "start": 209.72,
            "end": 212.92,
            "text": "包括：核心差异化、目标客群画像、"
        },
        {
            "start": 212.92,
            "end": 215.9,
            "text": "定价策略建议、上市节奏建议。"
        },
        {
            "start": 215.9,
            "end": 216.32,
            "text": "\""
        },
        {
            "start": 216.32,
            "end": 219.76,
            "text": "第三段，让 AI 帮你做财务测算的框架。"
        },
        {
            "start": 219.76,
            "end": 223.98,
            "text": "第四段，让 AI 帮你整理风险分析和应对措施。"
        },
        {
            "start": 223.98,
            "end": 228.3,
            "text": "最后，让 AI 把所有部分整合成一份完整的方案。"
        },
        {
            "start": 228.3,
            "end": 232.94000000000017,
            "text": "\"请帮我把以上内容整合成一份完整的项目立项方案。"
        },
        {
            "start": 232.94000000000017,
            "end": 234.3600000000001,
            "text": "包括：执行摘要（一页纸说清楚要点）、"
        },
        {
            "start": 234.3600000000001,
            "end": 237.44,
            "text": "市场分析、产品策略、财务测算、"
        },
        {
            "start": 237.44,
            "end": 240.29999999999998,
            "text": "风险分析、时间表和里程碑。"
        },
        {
            "start": 240.3,
            "end": 242.06,
            "text": "格式要清晰专业。"
        },
        {
            "start": 242.06,
            "end": 242.48,
            "text": "\""
        },
        {
            "start": 242.48,
            "end": 244.44,
            "text": "讲几个 AI 写作的高级技巧。"
        },
        {
            "start": 244.44,
            "end": 246.66,
            "text": "第一个技巧：给 AI 一个角色。"
        },
        {
            "start": 246.66,
            "end": 249.74,
            "text": "\"你是一个有十年经验的管理咨询顾问，"
        },
        {
            "start": 249.74,
            "end": 252.52,
            "text": "擅长写简洁有力的商业报告。"
        },
        {
            "start": 252.52,
            "end": 252.94,
            "text": "\""
        },
        {
            "start": 252.94,
            "end": 256.96,
            "text": "给 AI 一个角色，它的输出风格会更贴合你的需求。"
        },
        {
            "start": 256.96,
            "end": 259.54,
            "text": "第二个技巧：提供参考样本。"
        },
        {
            "start": 259.54,
            "end": 262.94,
            "text": "如果你有一份以前写得好的报告或方案，"
        },
        {
            "start": 262.94,
            "end": 264.04,
            "text": "把它发给 AI："
        },
        {
            "start": 264.04,
            "end": 266.04,
            "text": "\"这是我以前写的一份报告，"
        },
        {
            "start": 266.04,
            "end": 268.24,
            "text": "我很满意这个风格和格式。"
        },
        {
            "start": 268.24,
            "end": 271.4,
            "text": "请按照这个风格帮我写新的报告。"
        },
        {
            "start": 271.4,
            "end": 271.82,
            "text": "\""
        },
        {
            "start": 271.82,
            "end": 273.9,
            "text": "AI 会模仿你的风格和格式。"
        },
        {
            "start": 273.9,
            "end": 276.34,
            "text": "第三个技巧：迭代修改。"
        },
        {
            "start": 276.34,
            "end": 279.58,
            "text": "AI 的第一版输出通常不是最终版。"
        },
        {
            "start": 280.06,
            "end": 282.52,
            "text": "你可以告诉 AI 哪里需要改："
        },
        {
            "start": 282.52,
            "end": 284.36,
            "text": "\"第二段的分析太笼统了，"
        },
        {
            "start": 284.36,
            "end": 287.04,
            "text": "请更具体一些，加入实际的数据。"
        },
        {
            "start": 287.04,
            "end": 287.46000000000004,
            "text": "\""
        },
        {
            "start": 287.46000000000004,
            "end": 291.68,
            "text": "\"整体语气太正式了，请调整为更轻松的对话式风格。"
        },
        {
            "start": 291.68,
            "end": 292.1,
            "text": "\""
        },
        {
            "start": 292.1,
            "end": 295.24,
            "text": "\"结论部分太长了，请压缩到三句话以内。"
        },
        {
            "start": 295.24,
            "end": 295.66,
            "text": "\""
        },
        {
            "start": 295.66,
            "end": 298.58,
            "text": "第四个技巧：让 AI 帮你做审校。"
        },
        {
            "start": 298.58,
            "end": 301.18,
            "text": "写完之后，让 AI 帮你检查："
        },
        {
            "start": 301.18,
            "end": 303.48,
            "text": "\"请帮我审校这篇文稿。"
        },
        {
            "start": 303.48,
            "end": 306.04,
            "text": "检查：有没有逻辑不通的地方？"
        },
        {
            "start": 306.04,
            "end": 308.38,
            "text": "有没有错别字和语法错误？"
        },
        {
            "start": 308.38,
            "end": 310.6,
            "text": "有没有表述不清楚的地方？"
        },
        {
            "start": 310.6,
            "end": 312.86,
            "text": "有没有可以更简洁的表达？"
        },
        {
            "start": 312.86,
            "end": 313.28000000000003,
            "text": "\""
        },
        {
            "start": 313.28000000000003,
            "end": 315.9,
            "text": "AI 是一个非常好的审校工具。"
        },
        {
            "start": 315.9,
            "end": 318.44,
            "text": "它能发现你自己很难发现的问题。"
        },
        {
            "start": 318.44,
            "end": 321.05999999999995,
            "text": "最后讲 AI 写作的注意事项。"
        },
        {
            "start": 321.06,
            "end": 324.32,
            "text": "第一，不要发布未经审核的 AI 内容。"
        },
        {
            "start": 324.32,
            "end": 326.52,
            "text": "AI 可能写错事实、表述不当、"
        },
        {
            "start": 326.52,
            "end": 329.42,
            "text": "或者写出跟你公司立场不一致的内容。"
        },
        {
            "start": 329.42,
            "end": 331.04,
            "text": "必须人工审核。"
        },
        {
            "start": 331.04,
            "end": 334.1600000000001,
            "text": "第二，注意 AI 的\"正确废话\"倾向。"
        },
        {
            "start": 334.1600000000001,
            "end": 339.28,
            "text": "AI 有时候会写很多看起来很有道理但实际上很空洞的话。"
        },
        {
            "start": 339.28,
            "end": 343.88,
            "text": "比如\"在当今快速变化的商业环境中\"这种万能开头。"
        },
        {
            "start": 344.34000000000003,
            "end": 347.08,
            "text": "删掉这些废话，保留有价值的内容。"
        },
        {
            "start": 347.78000000000003,
            "end": 349.6,
            "text": "第三，保持你的声音。"
        },
        {
            "start": 349.6,
            "end": 352.0,
            "text": "AI 写的东西会有一种\"AI 味\"，"
        },
        {
            "start": 352.0,
            "end": 354.76,
            "text": "用词过于规范、句式过于整齐、"
        },
        {
            "start": 354.76,
            "end": 356.12,
            "text": "缺少个人特色。"
        },
        {
            "start": 356.12,
            "end": 359.94,
            "text": "在修改的时候加入你的个人风格和独特表达。"
        },
        {
            "start": 359.94,
            "end": 361.12,
            "text": "好，总结一下。"
        },
        {
            "start": 361.12,
            "end": 365.06,
            "text": "AI 写作的核心流程：你提供要点和框架，"
        },
        {
            "start": 365.46000000000004,
            "end": 367.88,
            "text": "AI 扩展润色，你审核修改。"
        },
        {
            "start": 367.88,
            "end": 369.54,
            "text": "三种实操场景："
        },
        {
            "start": 369.54,
            "end": 371.75,
            "text": "商务邮件（给背景和要点）、"
        },
        {
            "start": 371.75,
            "end": 373.44,
            "text": "工作报告（先搭框架再填内容）、"
        },
        {
            "start": 373.44,
            "end": 375.98,
            "text": "商业方案（分段写再整合）。"
        },
        {
            "start": 375.98,
            "end": 378.74,
            "text": "四个高级技巧：给 AI 角色、"
        },
        {
            "start": 378.74,
            "end": 381.98,
            "text": "提供参考样本、迭代修改、AI 审校。"
        },
        {
            "start": 381.98,
            "end": 384.58,
            "text": "下一期我们实操 AI 数据分析。"
        },
        {
            "start": 384.58,
            "end": 386.8,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 386.8,
            "end": 389.76,
            "text": "1. AI 写作核心：你出思想要点，"
        },
        {
            "start": 389.76,
            "end": 392.0,
            "text": "AI 出结构润色，你做最终审核"
        },
        {
            "start": 392.0,
            "end": 394.6,
            "text": "2. 三大场景：邮件（3 分钟搞定）、"
        },
        {
            "start": 394.6,
            "end": 396.8,
            "text": "报告（框架+填充）、"
        },
        {
            "start": 396.8,
            "end": 398.32,
            "text": "方案（分段写+整合）"
        },
        {
            "start": 398.32,
            "end": 401.05499999999995,
            "text": "3. 四个技巧：给角色、给样本、迭代修改、AI 审校"
        },
        {
            "start": 401.05499999999995,
            "end": 403.2,
            "text": "4. 注意：必须人工审核、"
        },
        {
            "start": 403.2,
            "end": 405.74,
            "text": "删掉\"正确废话\"、保持你的声音"
        },
        {
            "start": 405.74,
            "end": 409.56,
            "text": "1. 你每周花多少时间在写作上？"
        },
        {
            "start": 409.56,
            "end": 411.98,
            "text": "哪些写作任务可以用 AI 加速？"
        },
        {
            "start": 411.98,
            "end": 412.9100000000002,
            "text": "2. 试着用 AI 写一封你明天需要发的邮件，对比一下效率"
        },
        {
            "start": 412.9100000000002,
            "end": 413.1800000000004,
            "text": "3. 你有没有\"参考样本\"可以给 AI？"
        },
        {
            "start": 413.1800000000004,
            "end": 415.96,
            "text": "试试让 AI 模仿你的风格"
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
], navigation: { nextLessonUrl: "./lesson-workshop-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-03.html?entry={entry}", secondaryHref: "./lesson-workshop-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-02", coachSource: "./ai-coach.html?source=lesson-workshop-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 写作实操：让 AI 帮你写报告、方案、邮件的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 写作实操：让 AI 帮你写报告、方案、邮件", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
