(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第7课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第7课：你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep113-ai-workflow/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的 AI 工作流设计：找到你业务中的 AI 杠杆点", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-08.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI Agent 深度实操：企业级应用与组织转型",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 编程实操：不会写代码也能做工具",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "AI 工具选型与部署：从试用到全面推广",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-workshop-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 7/8", "建议下一节：AI 工具选型与部署：从试用到全面推广", '也可以先整理这一节'], nextHref: "./lesson-workshop-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-07", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson7", audioSource: './assets/audio/workshop-ep113-ai-workflow.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep113-ai-workflow.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep113-ai-workflow/slide_01.png",
            "label": "你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
            "caption": "这一节会帮助你系统理解：你的 AI 工作流设计：找到你业务中的 AI 杠杆点"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_03.png",
            "label": "核心实操框架",
            "caption": "那些\"耗时长、重复性高\"的任务就是你的 AI 杠杆点。 来看三个典型角色的 AI 工作流设计。"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "营销负责人的核心工作：策略制定、内容生产、数据分析、渠道管理。 AI 杠杆点在哪？"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "你从\"每天看数据\"变成\"有问题才看数据\"。 第二个杠杆点：流程自动化。"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "\"AI 辅助\"是 AI 可以帮你做一部分，比如起草初稿、做初步分析。 \"人为主\"是需要你的判断、创意、关系的任务。"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_07.png",
            "label": "本节行动提示",
            "caption": "一个月之后，你就会自然而然地把 AI 融入工作流了。 好，总结一下。"
        },
        {
            "file": "workshop-ep113-ai-workflow/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.54,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.54,
            "end": 3.92,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.92,
            "end": 8.48,
            "text": "今天做一件非常实际的事：设计你的 AI 工作流。"
        },
        {
            "start": 8.48,
            "end": 11.8,
            "text": "前面几期我们学了各种 AI 工具的用法。"
        },
        {
            "start": 11.8,
            "end": 14.54,
            "text": "但零散地用工具效果有限。"
        },
        {
            "start": 14.54,
            "end": 17.42,
            "text": "真正的效率提升来自于把 AI"
        },
        {
            "start": 17.42,
            "end": 20.36,
            "text": "系统地嵌入你的日常工作流程中。"
        },
        {
            "start": 20.36,
            "end": 22.9,
            "text": "先讲一个概念：AI 杠杆点。"
        },
        {
            "start": 22.9,
            "end": 24.16,
            "text": "什么叫杠杆点？"
        },
        {
            "start": 24.16,
            "end": 28.9,
            "text": "就是你在这个点上用 AI，能撬动最大的效率提升。"
        },
        {
            "start": 28.9,
            "end": 31.24,
            "text": "不是所有工作都值得用 AI。"
        },
        {
            "start": 31.24,
            "end": 35.98,
            "text": "有些工作用 AI 节省的时间不多，有些工作 AI 做得不够好。"
        },
        {
            "start": 35.98,
            "end": 37.8,
            "text": "你要找到那些\"AI 能做好、"
        },
        {
            "start": 37.8,
            "end": 40.26,
            "text": "而且做了之后效率提升最大\"的点。"
        },
        {
            "start": 40.26,
            "end": 41.76,
            "text": "怎么找杠杆点？"
        },
        {
            "start": 41.76,
            "end": 44.08,
            "text": "我教你一个简单的方法。"
        },
        {
            "start": 44.08,
            "end": 45.74,
            "text": "先列出你一周的工作。"
        },
        {
            "start": 45.74,
            "end": 47.76,
            "text": "把所有主要的工作任务列出来。"
        },
        {
            "start": 47.76,
            "end": 49.46,
            "text": "每个任务标注两个信息："
        },
        {
            "start": 49.46,
            "end": 51.12,
            "text": "每周花多少时间、"
        },
        {
            "start": 51.12,
            "end": 55.44,
            "text": "这个任务中有多少比例是重复性的或者模式化的。"
        },
        {
            "start": 55.44,
            "end": 59.2,
            "text": "那些\"耗时长、重复性高\"的任务就是你的 AI 杠杆点。"
        },
        {
            "start": 59.2,
            "end": 63.0,
            "text": "来看三个典型角色的 AI 工作流设计。"
        },
        {
            "start": 63.0,
            "end": 65.24,
            "text": "第一个角色：创始人或CEO。"
        },
        {
            "start": 65.24,
            "end": 67.52,
            "text": "创始人的核心工作是什么？"
        },
        {
            "start": 67.52,
            "end": 71.06,
            "text": "战略思考、对外沟通、团队管理、决策。"
        },
        {
            "start": 71.06,
            "end": 72.66,
            "text": "AI 杠杆点在哪？"
        },
        {
            "start": 72.66,
            "end": 74.74,
            "text": "第一个杠杆点：信息输入。"
        },
        {
            "start": 74.74,
            "end": 77.56,
            "text": "创始人需要大量信息来做决策。"
        },
        {
            "start": 77.56,
            "end": 80.54,
            "text": "行业动态、竞品信息、市场数据。"
        },
        {
            "start": 80.54,
            "end": 83.84,
            "text": "AI 可以帮你做信息的自动收集和整理。"
        },
        {
            "start": 84.46,
            "end": 88.66,
            "text": "每天早上花十分钟看 AI 帮你整理好的信息摘要，"
        },
        {
            "start": 88.66,
            "end": 91.62,
            "text": "而不是花一个小时自己去搜索和阅读。"
        },
        {
            "start": 92.10000000000001,
            "end": 94.06,
            "text": "第二个杠杆点：对外沟通。"
        },
        {
            "start": 94.06,
            "end": 96.6,
            "text": "写邮件、写方案、准备演讲稿。"
        },
        {
            "start": 96.6,
            "end": 101.14,
            "text": "这些高频的写作任务用 AI 辅助可以节省大量时间。"
        },
        {
            "start": 101.7,
            "end": 103.88,
            "text": "第三个杠杆点：决策分析。"
        },
        {
            "start": 103.88,
            "end": 105.68,
            "text": "面对一个重要决策，"
        },
        {
            "start": 105.68,
            "end": 108.94,
            "text": "让 AI 帮你做利弊分析、情景模拟、"
        },
        {
            "start": 109.02,
            "end": 110.06,
            "text": "数据测算。"
        },
        {
            "start": 110.06,
            "end": 112.68,
            "text": "AI 是一个不知疲倦的分析助手。"
        },
        {
            "start": 112.68,
            "end": 114.96,
            "text": "第二个角色：营销负责人。"
        },
        {
            "start": 115.36,
            "end": 118.54,
            "text": "营销负责人的核心工作：策略制定、"
        },
        {
            "start": 118.54,
            "end": 121.56,
            "text": "内容生产、数据分析、渠道管理。"
        },
        {
            "start": 121.56,
            "end": 122.9,
            "text": "AI 杠杆点在哪？"
        },
        {
            "start": 122.9,
            "end": 125.56,
            "text": "第一个杠杆点：内容生产。"
        },
        {
            "start": 125.56,
            "end": 127.86,
            "text": "这是营销团队最耗时的工作。"
        },
        {
            "start": 127.86,
            "end": 132.68,
            "text": "用 AI 做内容的初稿生成、多版本创作、多平台适配。"
        },
        {
            "start": 132.68,
            "end": 136.1,
            "text": "一篇文章可以让 AI 快速改写成公众号版、"
        },
        {
            "start": 136.1,
            "end": 138.0,
            "text": "小红书版、朋友圈版。"
        },
        {
            "start": 138.0,
            "end": 140.22,
            "text": "第二个杠杆点：数据分析。"
        },
        {
            "start": 140.22,
            "end": 143.26,
            "text": "每周的营销数据复盘用 AI 来做。"
        },
        {
            "start": 143.26,
            "end": 146.66,
            "text": "从数据中提取洞察、发现异常、生成建议。"
        },
        {
            "start": 146.66,
            "end": 148.98,
            "text": "第三个杠杆点：竞品监控。"
        },
        {
            "start": 148.98,
            "end": 152.24,
            "text": "用 AI Agent 自动追踪竞品的动态，"
        },
        {
            "start": 152.24,
            "end": 155.14,
            "text": "新产品发布、价格调整、营销活动。"
        },
        {
            "start": 155.14,
            "end": 157.46,
            "text": "第三个角色：运营负责人。"
        },
        {
            "start": 157.46,
            "end": 160.74,
            "text": "运营负责人的核心工作：流程管理、"
        },
        {
            "start": 160.84,
            "end": 163.26,
            "text": "数据监控、问题处理、持续优化。"
        },
        {
            "start": 163.26,
            "end": 165.06,
            "text": "AI 杠杆点在哪？"
        },
        {
            "start": 165.06,
            "end": 167.9,
            "text": "第一个杠杆点：数据监控和预警。"
        },
        {
            "start": 167.9,
            "end": 172.9,
            "text": "设置 AI 自动监控核心运营指标，有异常自动通知。"
        },
        {
            "start": 172.9,
            "end": 177.04,
            "text": "你从\"每天看数据\"变成\"有问题才看数据\"。"
        },
        {
            "start": 177.04,
            "end": 179.04,
            "text": "第二个杠杆点：流程自动化。"
        },
        {
            "start": 179.04,
            "end": 183.88,
            "text": "把那些规则明确、重复性高的操作流程用 AI 和 RPA 自动化。"
        },
        {
            "start": 183.88,
            "end": 185.6,
            "text": "第三个杠杆点：问题分析。"
        },
        {
            "start": 185.6,
            "end": 189.34,
            "text": "出了运营问题，用 AI 快速做归因分析。"
        },
        {
            "start": 189.9,
            "end": 191.68,
            "text": "比你手动排查快得多。"
        },
        {
            "start": 191.68,
            "end": 193.9,
            "text": "好，讲完了三个角色的例子。"
        },
        {
            "start": 193.9,
            "end": 196.68,
            "text": "现在教你怎么设计你自己的 AI 工作流。"
        },
        {
            "start": 196.68,
            "end": 197.58,
            "text": "四步法。"
        },
        {
            "start": 197.58,
            "end": 199.98,
            "text": "第一步：画出你的工作地图。"
        },
        {
            "start": 199.98,
            "end": 202.74,
            "text": "把你的日常工作按类型分类。"
        },
        {
            "start": 202.74,
            "end": 204.96,
            "text": "比如：沟通类（邮件、会议）、"
        },
        {
            "start": 205.28,
            "end": 208.14,
            "text": "分析类（数据、报告）、创作类（方案、"
        },
        {
            "start": 208.14,
            "end": 210.6,
            "text": "内容）、管理类（审批、协调）、"
        },
        {
            "start": 210.6,
            "end": 212.6,
            "text": "学习类（阅读、研究）。"
        },
        {
            "start": 212.6,
            "end": 216.84,
            "text": "每个类别下列出具体的任务和每周的时间投入。"
        },
        {
            "start": 216.84,
            "end": 219.38,
            "text": "第二步：标记 AI 杠杆点。"
        },
        {
            "start": 219.38,
            "end": 222.46,
            "text": "对每个任务评估：AI 能帮到什么程度？"
        },
        {
            "start": 222.46,
            "end": 223.96,
            "text": "能节省多少时间？"
        },
        {
            "start": 223.96,
            "end": 225.76,
            "text": "把任务分成三类。"
        },
        {
            "start": 225.76,
            "end": 229.94,
            "text": "\"AI 主力\"是 AI 可以完成百分之八十以上的任务。"
        },
        {
            "start": 229.94,
            "end": 233.26,
            "text": "\"AI 辅助\"是 AI 可以帮你做一部分，"
        },
        {
            "start": 233.26,
            "end": 235.68,
            "text": "比如起草初稿、做初步分析。"
        },
        {
            "start": 235.68,
            "end": 239.88,
            "text": "\"人为主\"是需要你的判断、创意、关系的任务。"
        },
        {
            "start": 239.88,
            "end": 242.62,
            "text": "第三步：设计具体的工作流。"
        },
        {
            "start": 242.62,
            "end": 245.74,
            "text": "对每个\"AI 主力\"和\"AI 辅助\"的任务，"
        },
        {
            "start": 245.74,
            "end": 247.42,
            "text": "设计一个具体的流程。"
        },
        {
            "start": 247.94,
            "end": 249.62,
            "text": "比如\"写周报\"这个任务。"
        },
        {
            "start": 249.62,
            "end": 250.88,
            "text": "新工作流："
        },
        {
            "start": 250.88,
            "end": 255.72,
            "text": "周五下午花五分钟把本周的要点用语音或文字记录下来。"
        },
        {
            "start": 255.72,
            "end": 258.6,
            "text": "发给 AI，让 AI 整理成周报初稿。"
        },
        {
            "start": 258.6,
            "end": 260.82,
            "text": "你花五分钟审核修改。"
        },
        {
            "start": 260.82,
            "end": 261.78,
            "text": "完成。"
        },
        {
            "start": 261.78,
            "end": 264.56,
            "text": "总共十分钟搞定以前要三十分钟的事。"
        },
        {
            "start": 264.56,
            "end": 266.48,
            "text": "第四步：养成习惯。"
        },
        {
            "start": 266.48,
            "end": 270.36,
            "text": "AI 工作流的最大挑战不是工具，而是习惯。"
        },
        {
            "start": 270.36,
            "end": 272.02,
            "text": "你需要刻意练习，"
        },
        {
            "start": 272.02,
            "end": 276.48,
            "text": "把\"遇到任务先想想 AI 能不能帮忙\"变成你的条件反射。"
        },
        {
            "start": 277.0,
            "end": 279.64,
            "text": "建议给自己一个\"AI 优先月\"。"
        },
        {
            "start": 279.64,
            "end": 283.04,
            "text": "接下来一个月，每次开始一项工作之前，"
        },
        {
            "start": 283.04,
            "end": 286.38,
            "text": "先问自己：\"这件事 AI 能帮什么忙？"
        },
        {
            "start": 286.38,
            "end": 287.84,
            "text": "\"强制自己去尝试。"
        },
        {
            "start": 288.44,
            "end": 292.72,
            "text": "一个月之后，你就会自然而然地把 AI 融入工作流了。"
        },
        {
            "start": 292.72,
            "end": 294.18,
            "text": "好，总结一下。"
        },
        {
            "start": 294.18,
            "end": 297.44,
            "text": "AI 杠杆点：耗时长、重复性高的任务。"
        },
        {
            "start": 297.44,
            "end": 300.92,
            "text": "三类任务分法：AI 主力、AI 辅助、人为主。"
        },
        {
            "start": 300.92,
            "end": 303.68,
            "text": "工作流设计四步：画工作地图、"
        },
        {
            "start": 303.68,
            "end": 307.02,
            "text": "标记杠杆点、设计具体流程、养成习惯。"
        },
        {
            "start": 307.02,
            "end": 311.04,
            "text": "给自己一个\"AI 优先月\"，刻意练习把 AI 融入工作。"
        },
        {
            "start": 311.04,
            "end": 315.32,
            "text": "下一期是模块九的最后一期：AI 工具的选型与部署。"
        },
        {
            "start": 315.32,
            "end": 317.34,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 317.34,
            "end": 321.74,
            "text": "1. AI 杠杆点：耗时长 加 重复性高 等于 最大效率提升点"
        },
        {
            "start": 321.74,
            "end": 324.44,
            "text": "2. 三类任务：AI 主力（80%+）、"
        },
        {
            "start": 324.44,
            "end": 326.0,
            "text": "AI 辅助（部分）、人为主"
        },
        {
            "start": 326.0,
            "end": 327.9,
            "text": "3. 四步设计法："
        },
        {
            "start": 328.12,
            "end": 331.44,
            "text": "画工作地图 → 标杠杆点 → 设计流程 → 养成习惯"
        },
        {
            "start": 331.44,
            "end": 334.92,
            "text": "4. 给自己一个\"AI 优先月\"，刻意练习"
        },
        {
            "start": 334.92,
            "end": 339.9,
            "text": "1. 画出你一周的工作地图，标注每项工作的时间投入"
        },
        {
            "start": 339.9,
            "end": 342.88,
            "text": "2. 你的三大 AI 杠杆点是什么？"
        },
        {
            "start": 342.88,
            "end": 344.12,
            "text": "能节省多少时间？"
        },
        {
            "start": 344.12,
            "end": 348.12,
            "text": "3. 选一个任务设计 AI 工作流，这周就开始用"
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
], navigation: { nextLessonUrl: "./lesson-workshop-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-08.html?entry={entry}", secondaryHref: "./lesson-workshop-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-07", coachSource: "./ai-coach.html?source=lesson-workshop-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的 AI 工作流设计：找到你业务中的 AI 杠杆点的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的 AI 工作流设计：找到你业务中的 AI 杠杆点", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
