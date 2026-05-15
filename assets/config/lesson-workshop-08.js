(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第8课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第8课：AI 工具选型与部署：从试用到全面推广",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep114-ai-deployment/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 工具选型与部署：从试用到全面推广", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-workshop.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "AI 工具选型与部署：从试用到全面推广",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-workshop.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的 AI 实战课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：AI实战工作坊 8/8", "你已完成当前开放的 AI 实战课程", '也可以先整理这一节'], nextHref: "./module-workshop.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-08", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson8", audioSource: './assets/audio/workshop-ep114-ai-deployment.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep114-ai-deployment.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep114-ai-deployment/slide_01.png",
            "label": "AI 工具选型与部署：从试用到全面推广",
            "caption": "这一节会帮助你系统理解：AI 工具选型与部署：从试用到全面推广"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_03.png",
            "label": "核心实操框架",
            "caption": "第五维：生态和可扩展性。 这个工具能不能跟你现有的系统集成？"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "第二，部门负责人支持并愿意推动。 第三，部门的工作效果比较容易量化。"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "为不同部门设计不同的培训内容。 营销部门的培训侧重 AI 内容创作和数据分析。"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "订阅费用是多少？ 节省了多少人力成本？"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_07.png",
            "label": "本节行动提示",
            "caption": "给一到两周的学习曲线。 提供具体的使用模板和示例，降低上手难度。"
        },
        {
            "file": "workshop-ep114-ai-deployment/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.64,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.64,
            "end": 4.24,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.24,
            "end": 7.92,
            "text": "今天是模块九 AI 实战工作坊的最后一期。"
        },
        {
            "start": 7.92,
            "end": 11.04,
            "text": "前面几期我们学了各种 AI 工具的使用。"
        },
        {
            "start": 11.04,
            "end": 13.78,
            "text": "今天讲一个管理层最关心的问题："
        },
        {
            "start": 13.78,
            "end": 16.78,
            "text": "怎么在企业中系统地推广 AI 工具。"
        },
        {
            "start": 16.78,
            "end": 21.04,
            "text": "从个人试用到团队使用到全面部署，怎么做？"
        },
        {
            "start": 21.04,
            "end": 22.32,
            "text": "先讲选型。"
        },
        {
            "start": 22.32,
            "end": 24.34,
            "text": "AI 工具太多了，怎么选？"
        },
        {
            "start": 24.34,
            "end": 26.64,
            "text": "我给你一个五维评估框架。"
        },
        {
            "start": 26.64,
            "end": 28.84,
            "text": "第一维：功能匹配度。"
        },
        {
            "start": 28.84,
            "end": 32.0,
            "text": "这个工具的功能是不是真的能解决你的需求？"
        },
        {
            "start": 32.0,
            "end": 36.48,
            "text": "不要被花哨的功能吸引，只看它在你核心需求上的表现。"
        },
        {
            "start": 36.48,
            "end": 38.02,
            "text": "第二维：易用性。"
        },
        {
            "start": 38.02,
            "end": 40.08,
            "text": "你的团队能不能快速上手？"
        },
        {
            "start": 40.08,
            "end": 43.28,
            "text": "如果一个工具功能很强但学习曲线太陡，"
        },
        {
            "start": 43.28,
            "end": 45.42,
            "text": "大部分人最后不会用。"
        },
        {
            "start": 45.42,
            "end": 47.98,
            "text": "第三维：安全性和合规性。"
        },
        {
            "start": 47.98,
            "end": 49.72,
            "text": "数据存在哪里？"
        },
        {
            "start": 49.72,
            "end": 50.46,
            "text": "是否加密？"
        },
        {
            "start": 50.46,
            "end": 53.48,
            "text": "是否符合你所在行业的合规要求？"
        },
        {
            "start": 53.48,
            "end": 56.96,
            "text": "有没有企业版提供更高的安全等级？"
        },
        {
            "start": 56.96,
            "end": 58.66,
            "text": "第四维：成本。"
        },
        {
            "start": 58.66,
            "end": 63.2,
            "text": "不只是订阅费，还包括培训成本、集成成本、维护成本。"
        },
        {
            "start": 63.2,
            "end": 66.86,
            "text": "有些工具看起来便宜，但集成到你的系统中很费劲。"
        },
        {
            "start": 67.48,
            "end": 69.54,
            "text": "第五维：生态和可扩展性。"
        },
        {
            "start": 69.54,
            "end": 72.5,
            "text": "这个工具能不能跟你现有的系统集成？"
        },
        {
            "start": 72.5,
            "end": 74.16,
            "text": "有没有开放的接口？"
        },
        {
            "start": 74.16,
            "end": 75.98,
            "text": "供应商的生态是否健全？"
        },
        {
            "start": 75.98,
            "end": 78.76,
            "text": "选好了工具，怎么在企业中推广？"
        },
        {
            "start": 79.3,
            "end": 81.4,
            "text": "我给你一个四阶段推广模型。"
        },
        {
            "start": 81.4,
            "end": 83.34,
            "text": "第一阶段：先锋试用。"
        },
        {
            "start": 83.34,
            "end": 84.92,
            "text": "时间大约两到四周。"
        },
        {
            "start": 84.92,
            "end": 87.56,
            "text": "选三到五个对 AI 有兴趣、"
        },
        {
            "start": 87.56,
            "end": 90.5,
            "text": "愿意尝试新事物的人组成\"先锋小组\"。"
        },
        {
            "start": 90.5,
            "end": 92.68,
            "text": "让他们先用起来。"
        },
        {
            "start": 92.68,
            "end": 94.84,
            "text": "先锋小组的任务是：试用工具、"
        },
        {
            "start": 94.84,
            "end": 97.04,
            "text": "找到最有价值的使用场景、"
        },
        {
            "start": 97.04,
            "end": 100.36,
            "text": "记录使用中遇到的问题、评估效果。"
        },
        {
            "start": 100.36,
            "end": 102.02,
            "text": "为什么要先锋试用？"
        },
        {
            "start": 102.02,
            "end": 105.2,
            "text": "因为你不确定这个工具在你的实际业务场"
        },
        {
            "start": 105.2,
            "end": 106.54,
            "text": "景中到底好不好用。"
        },
        {
            "start": 106.54,
            "end": 108.1,
            "text": "先锋小组帮你验证。"
        },
        {
            "start": 108.1,
            "end": 111.66,
            "text": "如果先锋小组都用不起来，就别全面推广了。"
        },
        {
            "start": 111.66,
            "end": 114.1,
            "text": "先锋试用的产出应该是："
        },
        {
            "start": 114.1,
            "end": 115.6,
            "text": "明确的使用场景清单、"
        },
        {
            "start": 115.6,
            "end": 118.3,
            "text": "效果数据（节省了多少时间、"
        },
        {
            "start": 118.3,
            "end": 119.68,
            "text": "提升了多少效率）、"
        },
        {
            "start": 119.68,
            "end": 121.5,
            "text": "问题清单和解决方案。"
        },
        {
            "start": 121.5,
            "end": 123.24,
            "text": "第二阶段：部门试点。"
        },
        {
            "start": 123.24,
            "end": 125.2,
            "text": "时间大约一到两个月。"
        },
        {
            "start": 125.2,
            "end": 129.78,
            "text": "先锋试用验证通过之后，选一到两个部门做试点推广。"
        },
        {
            "start": 130.28,
            "end": 132.7,
            "text": "试点部门的选择标准：第一，"
        },
        {
            "start": 132.7,
            "end": 135.5,
            "text": "这个部门的工作跟 AI 的能力匹配度高。"
        },
        {
            "start": 135.5,
            "end": 138.14,
            "text": "第二，部门负责人支持并愿意推动。"
        },
        {
            "start": 138.14,
            "end": 141.56,
            "text": "第三，部门的工作效果比较容易量化。"
        },
        {
            "start": 141.56,
            "end": 143.52,
            "text": "试点阶段要做几件事。"
        },
        {
            "start": 143.52,
            "end": 144.72,
            "text": "第一，培训。"
        },
        {
            "start": 144.72,
            "end": 148.24,
            "text": "不是简单地告诉大家\"这里有个 AI 工具你们用\"。"
        },
        {
            "start": 148.24,
            "end": 149.74,
            "text": "要做正式的培训。"
        },
        {
            "start": 149.74,
            "end": 152.0,
            "text": "教他们怎么用、在什么场景用、"
        },
        {
            "start": 152.0,
            "end": 155.02000000000004,
            "text": "提供具体的使用模板和示例。"
        },
        {
            "start": 155.02000000000004,
            "end": 156.46,
            "text": "第二，设定目标。"
        },
        {
            "start": 156.46,
            "end": 159.52,
            "text": "试点部门使用 AI 要达到什么效果？"
        },
        {
            "start": 159.52,
            "end": 162.11999999999995,
            "text": "比如：写报告的时间减少百分之四十、"
        },
        {
            "start": 162.12,
            "end": 165.14,
            "text": "数据分析的频率从每月一次提升到每周一次。"
        },
        {
            "start": 165.14,
            "end": 166.98,
            "text": "第三，收集反馈。"
        },
        {
            "start": 167.48000000000002,
            "end": 169.8,
            "text": "定期收集试点部门的使用反馈。"
        },
        {
            "start": 169.8,
            "end": 170.86,
            "text": "什么好用？"
        },
        {
            "start": 170.86,
            "end": 171.7,
            "text": "什么不好用？"
        },
        {
            "start": 171.7,
            "end": 172.9,
            "text": "有什么新的需求？"
        },
        {
            "start": 173.42000000000002,
            "end": 175.18,
            "text": "第四，衡量效果。"
        },
        {
            "start": 175.18,
            "end": 178.5,
            "text": "试点结束之后，用数据来评估效果。"
        },
        {
            "start": 178.5,
            "end": 179.82,
            "text": "时间节省了多少？"
        },
        {
            "start": 179.82,
            "end": 181.32,
            "text": "质量提升了多少？"
        },
        {
            "start": 181.32,
            "end": 182.92,
            "text": "团队满意度如何？"
        },
        {
            "start": 182.92,
            "end": 184.84,
            "text": "第三阶段：全面推广。"
        },
        {
            "start": 184.84,
            "end": 187.08,
            "text": "时间大约两到三个月。"
        },
        {
            "start": 187.08,
            "end": 190.5,
            "text": "试点验证成功之后，推广到全公司。"
        },
        {
            "start": 190.5,
            "end": 194.26,
            "text": "全面推广的关键是：标准化和系统化。"
        },
        {
            "start": 194.26,
            "end": 196.36,
            "text": "第一，制定 AI 使用规范。"
        },
        {
            "start": 196.36,
            "end": 198.52,
            "text": "包括：批准使用的工具清单、"
        },
        {
            "start": 198.52,
            "end": 201.42,
            "text": "数据安全政策、使用场景指南、"
        },
        {
            "start": 201.42,
            "end": 202.6,
            "text": "审核要求。"
        },
        {
            "start": 202.6,
            "end": 204.52,
            "text": "第二，系统化培训。"
        },
        {
            "start": 204.52,
            "end": 207.62,
            "text": "为不同部门设计不同的培训内容。"
        },
        {
            "start": 207.62,
            "end": 211.56,
            "text": "营销部门的培训侧重 AI 内容创作和数据分析。"
        },
        {
            "start": 211.56,
            "end": 215.84,
            "text": "销售部门侧重 AI 辅助客户沟通和竞品分析。"
        },
        {
            "start": 215.84,
            "end": 219.72,
            "text": "运营部门侧重 AI 数据监控和流程自动化。"
        },
        {
            "start": 219.72,
            "end": 222.34,
            "text": "第三，建立内部分享机制。"
        },
        {
            "start": 222.34,
            "end": 225.22000000000003,
            "text": "鼓励大家分享 AI 使用的好案例。"
        },
        {
            "start": 225.22000000000003,
            "end": 227.92,
            "text": "谁用 AI 做了什么有价值的事情？"
        },
        {
            "start": 227.92,
            "end": 229.14,
            "text": "怎么做的？"
        },
        {
            "start": 229.14,
            "end": 229.96,
            "text": "效果如何？"
        },
        {
            "start": 229.96,
            "end": 233.54,
            "text": "这种内部分享的效果比任何培训都好。"
        },
        {
            "start": 233.54,
            "end": 238.08,
            "text": "因为是同事在真实业务场景中的实践，特别有说服力。"
        },
        {
            "start": 238.08,
            "end": 240.76,
            "text": "第四，指定 AI 协调人。"
        },
        {
            "start": 240.76,
            "end": 245.28,
            "text": "每个部门或团队指定一个人作为\"AI 协调人\"。"
        },
        {
            "start": 245.28,
            "end": 248.72,
            "text": "负责帮助团队成员解决 AI 使用中的问题、"
        },
        {
            "start": 248.72,
            "end": 251.52,
            "text": "收集反馈、推广最佳实践。"
        },
        {
            "start": 251.52,
            "end": 253.7,
            "text": "第四阶段：持续优化。"
        },
        {
            "start": 253.7,
            "end": 255.16,
            "text": "长期进行。"
        },
        {
            "start": 255.16,
            "end": 258.02,
            "text": "AI 工具和技术在不断进化。"
        },
        {
            "start": 258.02,
            "end": 260.58,
            "text": "你的使用方式也要不断优化。"
        },
        {
            "start": 260.58,
            "end": 263.12,
            "text": "几件持续要做的事。"
        },
        {
            "start": 263.12,
            "end": 264.96,
            "text": "第一，定期评估工具。"
        },
        {
            "start": 264.96,
            "end": 268.4,
            "text": "每半年评估一次你在用的 AI 工具。"
        },
        {
            "start": 268.4,
            "end": 270.12,
            "text": "有没有更好的替代品？"
        },
        {
            "start": 270.12,
            "end": 272.9,
            "text": "现有工具有没有新功能值得利用？"
        },
        {
            "start": 273.32000000000005,
            "end": 274.64,
            "text": "第二，衡量 ROI。"
        },
        {
            "start": 274.64,
            "end": 277.62,
            "text": "持续追踪 AI 工具的投入产出比。"
        },
        {
            "start": 277.62,
            "end": 278.96,
            "text": "订阅费用是多少？"
        },
        {
            "start": 278.96,
            "end": 280.58,
            "text": "节省了多少人力成本？"
        },
        {
            "start": 280.58,
            "end": 281.86,
            "text": "提升了多少效率？"
        },
        {
            "start": 281.86,
            "end": 283.66,
            "text": "第三，跟踪新技术。"
        },
        {
            "start": 283.66,
            "end": 285.52,
            "text": "AI 技术在快速发展。"
        },
        {
            "start": 285.52,
            "end": 289.3,
            "text": "关注新的工具和能力，评估是否值得引入。"
        },
        {
            "start": 289.84000000000003,
            "end": 291.47,
            "text": "第四，升级培训。"
        },
        {
            "start": 291.47,
            "end": 293.0,
            "text": "定期做进阶培训。"
        },
        {
            "start": 293.0,
            "end": 295.9,
            "text": "很多人只用了 AI 工具百分之二十的功能。"
        },
        {
            "start": 295.9,
            "end": 297.8,
            "text": "帮他们发现更多的用法。"
        },
        {
            "start": 297.8,
            "end": 301.62,
            "text": "最后讲推广 AI 时最常遇到的三个阻力和应对。"
        },
        {
            "start": 302.18,
            "end": 304.1,
            "text": "第一个阻力：员工抵触。"
        },
        {
            "start": 304.1,
            "end": 305.94,
            "text": "\"AI 会不会取代我？"
        },
        {
            "start": 305.94,
            "end": 306.36,
            "text": "\""
        },
        {
            "start": 306.36,
            "end": 306.72,
            "text": "应对："
        },
        {
            "start": 306.72,
            "end": 311.58,
            "text": "明确沟通 AI 的定位是\"帮你做得更好\"而不是\"替代你\"。"
        },
        {
            "start": 311.58,
            "end": 315.12,
            "text": "强调 AI 是工具，会用 AI 的人更有竞争力。"
        },
        {
            "start": 315.12,
            "end": 318.18,
            "text": "让先锋用户分享他们的正面体验。"
        },
        {
            "start": 318.18,
            "end": 320.26,
            "text": "第二个阻力：安全顾虑。"
        },
        {
            "start": 320.26,
            "end": 323.24,
            "text": "\"把数据放到 AI 里安全吗？"
        },
        {
            "start": 323.24,
            "end": 323.66,
            "text": "\""
        },
        {
            "start": 323.66,
            "end": 325.72,
            "text": "应对：制定清晰的数据安全政策。"
        },
        {
            "start": 325.72,
            "end": 329.16,
            "text": "敏感数据用私有化部署的 AI 工具。"
        },
        {
            "start": 329.16,
            "end": 332.96,
            "text": "让 IT 部门参与工具评估和安全审查。"
        },
        {
            "start": 332.96,
            "end": 335.26,
            "text": "第三个阻力：效果不明显。"
        },
        {
            "start": 335.26,
            "end": 337.62,
            "text": "\"我试了一下，感觉也没快多少。"
        },
        {
            "start": 337.62,
            "end": 338.04,
            "text": "\""
        },
        {
            "start": 338.04,
            "end": 340.12,
            "text": "应对：AI 需要练习才能用好。"
        },
        {
            "start": 340.12,
            "end": 343.44,
            "text": "刚开始可能比传统方式还慢，因为你在学习。"
        },
        {
            "start": 343.44,
            "end": 345.22,
            "text": "给一到两周的学习曲线。"
        },
        {
            "start": 345.22,
            "end": 348.76,
            "text": "提供具体的使用模板和示例，降低上手难度。"
        },
        {
            "start": 348.76,
            "end": 350.28,
            "text": "好，总结一下。"
        },
        {
            "start": 350.28,
            "end": 353.16,
            "text": "五维选型框架：功能匹配、易用性、"
        },
        {
            "start": 353.16,
            "end": 355.4,
            "text": "安全合规、成本、生态。"
        },
        {
            "start": 355.4,
            "end": 358.41999999999996,
            "text": "四阶段推广：先锋试用（验证）、"
        },
        {
            "start": 358.41999999999996,
            "end": 359.92,
            "text": "部门试点（量化效果）、"
        },
        {
            "start": 359.92,
            "end": 362.8,
            "text": "全面推广（标准化）、持续优化。"
        },
        {
            "start": 362.8,
            "end": 366.8,
            "text": "三大阻力应对：员工抵触靠沟通和示范、"
        },
        {
            "start": 366.8,
            "end": 369.2,
            "text": "安全顾虑靠政策和技术、"
        },
        {
            "start": 369.2,
            "end": 371.84,
            "text": "效果不明显靠培训和耐心。"
        },
        {
            "start": 371.84,
            "end": 374.28,
            "text": "模块九到这里全部结束。"
        },
        {
            "start": 374.28,
            "end": 378.0,
            "text": "从下一期开始，我们进入最后的模块十："
        },
        {
            "start": 378.0,
            "end": 379.74,
            "text": "综合实战与毕业项目。"
        },
        {
            "start": 379.74,
            "end": 382.26,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 382.26,
            "end": 386.58,
            "text": "1. 五维选型：功能匹配、易用性、安全合规、成本、生态"
        },
        {
            "start": 386.58,
            "end": 388.0,
            "text": "2. 四阶段推广："
        },
        {
            "start": 388.0,
            "end": 392.0,
            "text": "先锋试用 → 部门试点 → 全面推广 → 持续优化"
        },
        {
            "start": 392.0,
            "end": 396.06,
            "text": "3. 每阶段关键：验证场景、量化效果、"
        },
        {
            "start": 396.06,
            "end": 398.2,
            "text": "标准化规范、定期评估"
        },
        {
            "start": 398.2,
            "end": 401.62,
            "text": "4. 三大阻力：员工抵触、安全顾虑、"
        },
        {
            "start": 401.62,
            "end": 403.8,
            "text": "效果不明显，各有应对"
        },
        {
            "start": 403.8,
            "end": 407.04,
            "text": "1. 你的企业 AI 推广在哪个阶段？"
        },
        {
            "start": 407.04,
            "end": 408.96,
            "text": "下一步应该做什么？"
        },
        {
            "start": 408.96,
            "end": 412.22,
            "text": "2. 你的团队中谁适合做\"先锋用户\"？"
        },
        {
            "start": 412.22,
            "end": 414.49600000000004,
            "text": "谁适合做\"AI 协调人\"？"
        },
        {
            "start": 414.49600000000004,
            "end": 418.4,
            "text": "3. 你能量化出 AI 工具为你节省的时间和成本吗？"
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
], navigation: { nextLessonUrl: "./module-workshop.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-workshop.html?entry={entry}", secondaryHref: "./module-workshop.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-08", coachSource: "./ai-coach.html?source=lesson-workshop-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 工具选型与部署：从试用到全面推广的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 工具选型与部署：从试用到全面推广", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-workshop.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
