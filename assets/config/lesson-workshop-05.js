(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第5课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第5课：AI Agent 深度实操：企业级应用与组织转型",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 11 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep111-ai-agent-workshop/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI Agent 深度实操：企业级应用与组织转型", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-06.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 编程实操：不会写代码也能做工具",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-workshop-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 5/8", "建议下一节：AI 编程实操：不会写代码也能做工具", '也可以先整理这一节'], nextHref: "./lesson-workshop-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-05", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson5", audioSource: './assets/audio/workshop-ep111-ai-agent-workshop.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep111-ai-agent-workshop.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_01.png",
            "label": "AI Agent 深度实操：企业级应用与组织转型",
            "caption": "这一节会帮助你系统理解：AI Agent 深度实操：企业级应用与组织转型"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_03.png",
            "label": "核心实操框架",
            "caption": "销售团队最痛的几个问题：线索太多筛不过来、客户跟进容易遗漏、报价流程繁琐、竞品信息不及时。 AI Agent 可以做什么？"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "Agent 自动分析所有客服对话，发现高频问题、客户情绪趋势、服务质量评分，生成周报给客服主管。 第三个部门：财务。"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "追踪行业热点，根据内容策略生成选题建议和初稿。 你从\"写内容\"变成\"审内容\"，效率提升数倍。"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "第一步：流程审计。 在引入 Agent 之前，先把你的核心业务流程画出来。"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_07.png",
            "label": "本节行动提示",
            "caption": "Agent 的版本管理、权限管理、效果监控，需要一套系统来管理。 第二，培训员工的\"AI 协作力\"。"
        },
        {
            "file": "workshop-ep111-ai-agent-workshop/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.26,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.26,
            "end": 3.2,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.2,
            "end": 5.5,
            "text": "今天深入讲 AI Agent。"
        },
        {
            "start": 5.5,
            "end": 9.299999999999999,
            "text": "前面几期我们用 AI 做写作、分析、设计，"
        },
        {
            "start": 9.299999999999999,
            "end": 11.96,
            "text": "这些都是\"你问 AI 答\"的模式。"
        },
        {
            "start": 11.96,
            "end": 13.880000000000006,
            "text": "AI Agent 不一样。"
        },
        {
            "start": 13.880000000000006,
            "end": 18.620000000000005,
            "text": "2026 年的 AI Agent 已经不是简单的\"自动回答问题\"，"
        },
        {
            "start": 18.620000000000005,
            "end": 21.48,
            "text": "它是能够自主规划、调用工具、"
        },
        {
            "start": 21.48,
            "end": 23.18,
            "text": "协调多个系统、"
        },
        {
            "start": 23.18,
            "end": 25.68,
            "text": "持续执行复杂任务的\"数字员工\"。"
        },
        {
            "start": 25.68,
            "end": 27.28,
            "text": "今天我要讲三件事。"
        },
        {
            "start": 27.34,
            "end": 30.14,
            "text": "第一，AI Agent 在企业各部门怎么落地。"
        },
        {
            "start": 30.14,
            "end": 33.07999999999999,
            "text": "第二，多 Agent 协作的架构怎么设计。"
        },
        {
            "start": 33.08,
            "end": 36.7,
            "text": "第三，用 AI Agent 推动组织转型的方法论。"
        },
        {
            "start": 36.7,
            "end": 40.14000000000001,
            "text": "先讲 AI Agent 跟普通 AI 对话的本质区别。"
        },
        {
            "start": 40.14000000000001,
            "end": 42.26,
            "text": "普通 AI 对话是\"一问一答\"。"
        },
        {
            "start": 42.26,
            "end": 44.34,
            "text": "你问一个问题，AI 回答一次。"
        },
        {
            "start": 44.34,
            "end": 46.44,
            "text": "每次交互是独立的。"
        },
        {
            "start": 46.44,
            "end": 49.88,
            "text": "AI Agent 有三个关键能力是普通对话做不到的。"
        },
        {
            "start": 49.88,
            "end": 51.36,
            "text": "第一，自主规划。"
        },
        {
            "start": 51.36,
            "end": 54.67,
            "text": "你给一个目标，Agent 自己拆解成步骤，"
        },
        {
            "start": 54.67,
            "end": 56.5,
            "text": "决定先做什么后做什么。"
        },
        {
            "start": 56.5,
            "end": 58.02,
            "text": "第二，工具调用。"
        },
        {
            "start": 58.42,
            "end": 60.92,
            "text": "Agent 可以调用外部工具，比如搜索引擎、"
        },
        {
            "start": 60.92,
            "end": 63.14,
            "text": "数据库、API 接口、文件系统。"
        },
        {
            "start": 63.14,
            "end": 66.36,
            "text": "它不只是生成文字，而是真的去\"做事\"。"
        },
        {
            "start": 66.8,
            "end": 68.69999999999999,
            "text": "第三，持续记忆。"
        },
        {
            "start": 68.7,
            "end": 71.4,
            "text": "Agent 可以记住上下文，持续追踪一个任务，"
        },
        {
            "start": 71.4,
            "end": 75.08,
            "text": "甚至跨越几天的时间周期来完成一个目标。"
        },
        {
            "start": 75.08,
            "end": 75.86,
            "text": "打个比方。"
        },
        {
            "start": 76.16,
            "end": 80.22,
            "text": "普通 AI 对话像是你问一个顾问一个问题，他回答你一次。"
        },
        {
            "start": 80.22,
            "end": 83.14,
            "text": "AI Agent 像是你雇了一个实习生，"
        },
        {
            "start": 83.14,
            "end": 85.5,
            "text": "你说\"帮我做一份竞品分析报告\"，"
        },
        {
            "start": 85.5,
            "end": 88.68,
            "text": "他自己去调研、搜索、整理、分析，"
        },
        {
            "start": 88.68,
            "end": 90.76,
            "text": "最后给你一份完整的报告。"
        },
        {
            "start": 90.76,
            "end": 92.34,
            "text": "重点来了。"
        },
        {
            "start": 92.34,
            "end": 95.14,
            "text": "AI Agent 在企业各部门怎么落地？"
        },
        {
            "start": 95.14,
            "end": 96.73999999999998,
            "text": "我按部门来讲。"
        },
        {
            "start": 96.74,
            "end": 97.94,
            "text": "第一个部门：销售。"
        },
        {
            "start": 97.94,
            "end": 100.39599999999999,
            "text": "销售团队最痛的几个问题："
        },
        {
            "start": 100.39599999999999,
            "end": 103.28,
            "text": "线索太多筛不过来、客户跟进容易遗漏、"
        },
        {
            "start": 103.28,
            "end": 106.16,
            "text": "报价流程繁琐、竞品信息不及时。"
        },
        {
            "start": 106.16,
            "end": 108.245,
            "text": "AI Agent 可以做什么？"
        },
        {
            "start": 108.245,
            "end": 109.86,
            "text": "线索评分 Agent。"
        },
        {
            "start": 109.86,
            "end": 112.44,
            "text": "自动分析每一条销售线索的质量。"
        },
        {
            "start": 112.44,
            "end": 115.82,
            "text": "它会去查这家公司的规模、行业、"
        },
        {
            "start": 115.82,
            "end": 118.14000000000001,
            "text": "融资情况、最近的新闻动态，"
        },
        {
            "start": 118.14000000000001,
            "end": 120.28,
            "text": "然后给这条线索打分。"
        },
        {
            "start": 120.28,
            "end": 124.46,
            "text": "销售人员只需要集中精力跟进高分线索。"
        },
        {
            "start": 124.46,
            "end": 125.88,
            "text": "客户跟进 Agent。"
        },
        {
            "start": 125.88,
            "end": 128.35999999999999,
            "text": "自动追踪每个客户的状态。"
        },
        {
            "start": 128.35999999999999,
            "end": 131.14000000000001,
            "text": "如果一个客户三天没有回复邮件，"
        },
        {
            "start": 131.14000000000001,
            "end": 134.14,
            "text": "Agent 自动提醒你并建议下一步的跟进话术。"
        },
        {
            "start": 134.14,
            "end": 138.62000000000003,
            "text": "如果客户在你的产品文档页面上花了很长时间，"
        },
        {
            "start": 138.62000000000003,
            "end": 142.38,
            "text": "Agent 会告诉你\"这个客户可能对某某功能感兴趣\"。"
        },
        {
            "start": 142.38,
            "end": 143.7,
            "text": "竞品监控 Agent。"
        },
        {
            "start": 143.7,
            "end": 148.4,
            "text": "自动追踪竞品的价格变动、新产品发布、客户评价。"
        },
        {
            "start": 148.4,
            "end": 151.46666666666667,
            "text": "每周给销售团队一份竞品动态简报。"
        },
        {
            "start": 151.46666666666667,
            "end": 154.07500000000002,
            "text": "国内的工具，像扣子、Dify、"
        },
        {
            "start": 154.07500000000002,
            "end": 156.48,
            "text": "百炼这些平台都可以搭建这类 Agent。"
        },
        {
            "start": 156.48,
            "end": 158.12,
            "text": "第二个部门：客服。"
        },
        {
            "start": 158.12,
            "end": 161.78,
            "text": "客服是 AI Agent 目前落地最成熟的场景之一。"
        },
        {
            "start": 161.78,
            "end": 166.64,
            "text": "传统的客服机器人是基于关键词匹配的，体验很差。"
        },
        {
            "start": 166.64,
            "end": 169.1,
            "text": "AI Agent 客服完全不同，"
        },
        {
            "start": 169.1,
            "end": 171.04,
            "text": "它理解客户的真实意图，"
        },
        {
            "start": 171.04,
            "end": 172.87499999999997,
            "text": "可以做多轮对话，"
        },
        {
            "start": 172.87499999999997,
            "end": 175.76666666666668,
            "text": "还能调用后台系统查询订单状态、"
        },
        {
            "start": 175.76666666666668,
            "end": 178.02,
            "text": "处理退款、修改配送信息。"
        },
        {
            "start": 178.02,
            "end": 181.66,
            "text": "一个好的客服 Agent 应该有三层能力。"
        },
        {
            "start": 181.66,
            "end": 184.3925,
            "text": "第一层，自主解决常见问题。"
        },
        {
            "start": 184.3925,
            "end": 188.72,
            "text": "百分之六十到七十的客户咨询可以由 Agent 直接解决。"
        },
        {
            "start": 188.72,
            "end": 191.44,
            "text": "第二层，复杂问题辅助人工。"
        },
        {
            "start": 191.44,
            "end": 194.78,
            "text": "Agent 把客户的问题分类、提取关键信息、"
        },
        {
            "start": 194.78,
            "end": 196.5,
            "text": "调出相关的历史记录，"
        },
        {
            "start": 196.5,
            "end": 199.08,
            "text": "然后转交给人工客服。"
        },
        {
            "start": 199.08,
            "end": 201.22,
            "text": "人工客服拿到的不是一个\"生客\"，"
        },
        {
            "start": 201.22,
            "end": 204.16,
            "text": "而是一个已经整理好背景信息的工单。"
        },
        {
            "start": 204.16,
            "end": 206.94,
            "text": "第三层，事后分析和优化。"
        },
        {
            "start": 206.94,
            "end": 213.225,
            "text": "Agent 自动分析所有客服对话，"
        },
        {
            "start": 213.225,
            "end": 215.18222222222226,
            "text": "发现高频问题、客户情绪趋势、"
        },
        {
            "start": 215.18222222222226,
            "end": 215.64,
            "text": "服务质量评分，生成周报给客服主管。"
        },
        {
            "start": 215.64,
            "end": 217.56800000000004,
            "text": "第三个部门：财务。"
        },
        {
            "start": 217.56800000000004,
            "end": 220.34,
            "text": "财务部门有大量重复性高、"
        },
        {
            "start": 220.34,
            "end": 223.88,
            "text": "规则明确的工作，特别适合 Agent 来做。"
        },
        {
            "start": 223.88,
            "end": 225.48,
            "text": "发票处理 Agent。"
        },
        {
            "start": 225.48,
            "end": 228.7,
            "text": "自动识别发票图片，提取金额、日期、"
        },
        {
            "start": 228.7,
            "end": 230.94,
            "text": "供应商信息，填入财务系统。"
        },
        {
            "start": 230.94,
            "end": 234.0,
            "text": "过去一个财务人员一天处理几十张发票，"
        },
        {
            "start": 234.0,
            "end": 236.64,
            "text": "现在 Agent 几分钟就搞定。"
        },
        {
            "start": 236.64,
            "end": 237.98,
            "text": "费用审核 Agent。"
        },
        {
            "start": 237.98,
            "end": 240.15999999999997,
            "text": "员工提交报销单后，"
        },
        {
            "start": 240.16,
            "end": 243.5,
            "text": "Agent 自动检查是否符合公司的费用政策，"
        },
        {
            "start": 243.5,
            "end": 246.6,
            "text": "金额是否超标、类别是否正确、"
        },
        {
            "start": 246.6,
            "end": 248.2,
            "text": "有没有重复报销。"
        },
        {
            "start": 248.2,
            "end": 252.56,
            "text": "合规的自动通过，有问题的标记出来给人工审核。"
        },
        {
            "start": 252.56,
            "end": 254.2,
            "text": "财务分析 Agent。"
        },
        {
            "start": 254.2,
            "end": 256.88,
            "text": "每月自动生成经营分析报告。"
        },
        {
            "start": 256.88,
            "end": 260.72,
            "text": "从 ERP 系统提取数据，计算核心指标，"
        },
        {
            "start": 260.72,
            "end": 264.5,
            "text": "跟预算对比，发现异常并给出初步分析。"
        },
        {
            "start": 264.5,
            "end": 266.82,
            "text": "第四个部门：人力资源。"
        },
        {
            "start": 266.82,
            "end": 268.54,
            "text": "招聘筛选 Agent。"
        },
        {
            "start": 268.54,
            "end": 273.38,
            "text": "自动筛选简历，按照岗位要求给候选人打分排序。"
        },
        {
            "start": 273.38,
            "end": 274.1,
            "text": "注意，"
        },
        {
            "start": 274.1,
            "end": 277.8,
            "text": "最终的面试和录用决策必须由人来做，"
        },
        {
            "start": 277.8,
            "end": 279.96,
            "text": "Agent 只负责初筛提效。"
        },
        {
            "start": 279.96,
            "end": 281.82,
            "text": "员工入职 Agent。"
        },
        {
            "start": 281.82,
            "end": 283.5,
            "text": "新员工入职的时候，"
        },
        {
            "start": 283.5,
            "end": 286.86,
            "text": "Agent 自动引导他们完成一系列入职流程，"
        },
        {
            "start": 286.86,
            "end": 289.92,
            "text": "填写资料、领取设备、了解公司制度、"
        },
        {
            "start": 289.92,
            "end": 291.22,
            "text": "预约培训。"
        },
        {
            "start": 291.22,
            "end": 292.84,
            "text": "员工问答 Agent。"
        },
        {
            "start": 292.84,
            "end": 295.9,
            "text": "员工经常问的问题，年假怎么算、"
        },
        {
            "start": 295.9,
            "end": 298.56,
            "text": "报销流程是什么、公司有什么福利，"
        },
        {
            "start": 298.56,
            "end": 300.52,
            "text": "Agent 全天候自动回答，"
        },
        {
            "start": 300.52,
            "end": 303.04,
            "text": "HR 不用反复解释同样的事情。"
        },
        {
            "start": 303.04,
            "end": 304.5999999999999,
            "text": "第五个部门：运营。"
        },
        {
            "start": 304.5999999999999,
            "end": 306.06,
            "text": "数据监控 Agent。"
        },
        {
            "start": 306.06,
            "end": 308.58,
            "text": "每天自动检查核心运营指标。"
        },
        {
            "start": 308.58,
            "end": 311.94,
            "text": "如果有指标偏离目标超过百分之十，"
        },
        {
            "start": 311.94,
            "end": 314.44000000000005,
            "text": "或者出现连续下降趋势，"
        },
        {
            "start": 314.44000000000005,
            "end": 319.02,
            "text": "自动通知运营负责人并附上初步的归因分析。"
        },
        {
            "start": 319.02,
            "end": 321.04,
            "text": "内容生产 Agent。"
        },
        {
            "start": 321.04,
            "end": 325.26,
            "text": "追踪行业热点，根据内容策略生成选题建议和初稿。"
        },
        {
            "start": 325.26,
            "end": 329.1,
            "text": "你从\"写内容\"变成\"审内容\"，效率提升数倍。"
        },
        {
            "start": 329.1,
            "end": 330.6,
            "text": "供应链 Agent。"
        },
        {
            "start": 330.6,
            "end": 333.44000000000005,
            "text": "自动监控库存水平、物流状态、"
        },
        {
            "start": 333.44000000000005,
            "end": 334.82666666666665,
            "text": "供应商交货情况，"
        },
        {
            "start": 334.82666666666665,
            "end": 337.94,
            "text": "预测可能的缺货风险并建议补货方案。"
        },
        {
            "start": 337.94,
            "end": 340.08,
            "text": "第二个重点：多 Agent 协作。"
        },
        {
            "start": 340.08,
            "end": 342.06,
            "text": "单个 Agent 能力有限。"
        },
        {
            "start": 342.06,
            "end": 345.06,
            "text": "真正的威力在于多个 Agent 协同工作。"
        },
        {
            "start": 345.06,
            "end": 347.18,
            "text": "什么是多 Agent 协作？"
        },
        {
            "start": 347.18,
            "end": 349.78,
            "text": "就是多个专业的 Agent 各司其职，"
        },
        {
            "start": 349.78,
            "end": 352.96,
            "text": "像一个团队一样配合完成复杂任务。"
        },
        {
            "start": 352.96,
            "end": 353.94,
            "text": "举个例子。"
        },
        {
            "start": 353.94,
            "end": 357.24,
            "text": "客户在你的电商平台上发了一条投诉。"
        },
        {
            "start": 357.24,
            "end": 360.14,
            "text": "第一个 Agent 是\"情绪识别 Agent\"。"
        },
        {
            "start": 360.14,
            "end": 361.94,
            "text": "它分析客户的语气和情绪，"
        },
        {
            "start": 361.94,
            "end": 365.14,
            "text": "判断这是一般性投诉还是高风险投诉。"
        },
        {
            "start": 365.14,
            "end": 368.26,
            "text": "第二个 Agent 是\"信息检索 Agent\"。"
        },
        {
            "start": 368.26,
            "end": 372.58,
            "text": "它调出这个客户的订单记录、历史对话记录、客户画像。"
        },
        {
            "start": 373.04,
            "end": 375.76,
            "text": "第三个 Agent 是\"方案生成 Agent\"。"
        },
        {
            "start": 375.76,
            "end": 380.24,
            "text": "基于情绪判断和历史信息，生成一个个性化的解决方案。"
        },
        {
            "start": 380.24,
            "end": 383.38,
            "text": "第四个 Agent 是\"质量审核 Agent\"。"
        },
        {
            "start": 383.38,
            "end": 387.24,
            "text": "检查方案是否符合公司政策，有没有过度承诺。"
        },
        {
            "start": 387.24,
            "end": 392.26,
            "text": "四个 Agent 在几秒钟内协作完成了一个完整的客诉处理流程。"
        },
        {
            "start": 392.26,
            "end": 397.5466666666667,
            "text": "人工客服只需要确认方案是否合理，然后发送给客户。"
        },
        {
            "start": 397.5466666666667,
            "end": 403.16,
            "text": "这种多 Agent 架构，国内的扣子平台和 Dify 都支持搭建。"
        },
        {
            "start": 403.16,
            "end": 407.26,
            "text": "你可以定义每个 Agent 的角色、能力和协作规则。"
        },
        {
            "start": 407.26,
            "end": 410.04,
            "text": "第三个重点，也是今天最重要的内容："
        },
        {
            "start": 410.04,
            "end": 413.78,
            "text": "用 AI Agent 推动组织转型的方法论。"
        },
        {
            "start": 413.78,
            "end": 417.11333333333334,
            "text": "很多企业买了 AI 工具，但推不动。"
        },
        {
            "start": 417.11333333333334,
            "end": 417.86,
            "text": "为什么？"
        },
        {
            "start": 417.86,
            "end": 422.4,
            "text": "因为 AI Agent 不只是一个工具问题，它是一个组织变革问题。"
        },
        {
            "start": 422.4,
            "end": 424.9,
            "text": "我给你一个\"四步转型法\"。"
        },
        {
            "start": 424.9,
            "end": 426.4599999999999,
            "text": "第一步：流程审计。"
        },
        {
            "start": 426.46,
            "end": 430.82,
            "text": "在引入 Agent 之前，先把你的核心业务流程画出来。"
        },
        {
            "start": 430.82,
            "end": 432.52,
            "text": "每个流程有哪些环节？"
        },
        {
            "start": 432.52,
            "end": 434.22,
            "text": "每个环节谁在做？"
        },
        {
            "start": 434.22,
            "end": 435.31999999999994,
            "text": "花多少时间？"
        },
        {
            "start": 435.32,
            "end": 437.42,
            "text": "有多少是重复性的？"
        },
        {
            "start": 437.42,
            "end": 441.46,
            "text": "这一步的目的是找到\"Agent 可以替代或增强\"的环节。"
        },
        {
            "start": 441.46,
            "end": 443.82,
            "text": "不是所有环节都适合用 Agent。"
        },
        {
            "start": 443.82,
            "end": 447.24,
            "text": "需要创造性判断、复杂人际沟通、"
        },
        {
            "start": 447.24,
            "end": 450.22,
            "text": "敏感决策的环节，人来做更好。"
        },
        {
            "start": 450.22,
            "end": 455.6,
            "text": "规则明确、重复性高、数据密集的环节，Agent 来做更好。"
        },
        {
            "start": 455.6,
            "end": 457.3040000000001,
            "text": "第二步：试点验证。"
        },
        {
            "start": 457.3040000000001,
            "end": 460.36,
            "text": "选一个业务部门、一个具体流程做试点。"
        },
        {
            "start": 460.36,
            "end": 463.44,
            "text": "比如选客服部门的常见问题处理流程。"
        },
        {
            "start": 463.44,
            "end": 466.62,
            "text": "试点的关键不是技术，而是指标。"
        },
        {
            "start": 466.62,
            "end": 469.8933333333333,
            "text": "你要事先定义清楚：成功的标准是什么？"
        },
        {
            "start": 469.8933333333333,
            "end": 471.62,
            "text": "响应时间缩短多少？"
        },
        {
            "start": 471.62,
            "end": 473.66,
            "text": "客户满意度变化如何？"
        },
        {
            "start": 473.66,
            "end": 476.1,
            "text": "人工工作量减少多少？"
        },
        {
            "start": 476.1,
            "end": 478.74,
            "text": "试点周期建议四到六周。"
        },
        {
            "start": 478.74,
            "end": 482.0,
            "text": "足够验证效果，也不至于投入太大。"
        },
        {
            "start": 482.0,
            "end": 484.5466666666667,
            "text": "第三步：人机协作设计。"
        },
        {
            "start": 484.5466666666667,
            "end": 487.3,
            "text": "这一步最关键，也最容易被忽略。"
        },
        {
            "start": 487.8,
            "end": 491.14,
            "text": "Agent 不是替代人，而是跟人协作。"
        },
        {
            "start": 491.14,
            "end": 494.94,
            "text": "你需要设计清楚：哪些任务 Agent 自主完成？"
        },
        {
            "start": 494.94,
            "end": 499.70000000000005,
            "text": "哪些任务 Agent 做初步处理然后交给人确认？"
        },
        {
            "start": 499.70000000000005,
            "end": 501.9,
            "text": "哪些任务完全由人来做？"
        },
        {
            "start": 501.9,
            "end": 503.9,
            "text": "还要设计\"升级机制\"。"
        },
        {
            "start": 503.9,
            "end": 506.30000000000007,
            "text": "Agent 遇到处理不了的情况怎么办？"
        },
        {
            "start": 506.30000000000007,
            "end": 508.92,
            "text": "怎么顺畅地把任务交接给人工？"
        },
        {
            "start": 508.92,
            "end": 513.1199999999999,
            "text": "人工处理完之后怎么让 Agent 从这次经验中学习？"
        },
        {
            "start": 513.1199999999999,
            "end": 515.06,
            "text": "这里面有一个核心原则："
        },
        {
            "start": 515.06,
            "end": 517.26,
            "text": "让 Agent 做\"八十分\"的事，"
        },
        {
            "start": 517.26,
            "end": 520.24,
            "text": "让人做\"从八十分到一百分\"的事。"
        },
        {
            "start": 520.24,
            "end": 522.48,
            "text": "Agent 负责效率，人负责质量。"
        },
        {
            "start": 522.48,
            "end": 524.4066666666666,
            "text": "第四步：规模化推广。"
        },
        {
            "start": 524.4066666666666,
            "end": 527.92,
            "text": "试点成功之后，把经验复制到其他部门。"
        },
        {
            "start": 527.92,
            "end": 529.46,
            "text": "但不要一刀切。"
        },
        {
            "start": 529.46,
            "end": 533.58,
            "text": "每个部门的业务特点不同，Agent 的应用方式也不同。"
        },
        {
            "start": 533.58,
            "end": 536.32,
            "text": "规模化阶段有三件事特别重要。"
        },
        {
            "start": 536.32,
            "end": 538.38,
            "text": "第一，建立 Agent 管理体系。"
        },
        {
            "start": 538.38,
            "end": 541.42,
            "text": "Agent 的版本管理、权限管理、效果监控，"
        },
        {
            "start": 541.42,
            "end": 543.68,
            "text": "需要一套系统来管理。"
        },
        {
            "start": 543.68,
            "end": 546.84,
            "text": "第二，培训员工的\"AI 协作力\"。"
        },
        {
            "start": 546.84,
            "end": 548.76,
            "text": "不是教他们怎么用工具，"
        },
        {
            "start": 548.76,
            "end": 550.96,
            "text": "而是教他们怎么跟 Agent 协作，"
        },
        {
            "start": 550.96,
            "end": 554.8,
            "text": "怎么审核 Agent 的输出、怎么给 Agent 反馈、"
        },
        {
            "start": 554.8,
            "end": 557.38,
            "text": "怎么设计人机协作流程。"
        },
        {
            "start": 557.9399999999999,
            "end": 559.7399999999999,
            "text": "第三，建立反馈循环。"
        },
        {
            "start": 559.74,
            "end": 562.32,
            "text": "Agent 的表现数据要定期回顾。"
        },
        {
            "start": 562.32,
            "end": 564.42,
            "text": "哪些场景 Agent 做得好？"
        },
        {
            "start": 564.42,
            "end": 566.18,
            "text": "哪些场景还需要优化？"
        },
        {
            "start": 566.18,
            "end": 568.12,
            "text": "用数据驱动持续改进。"
        },
        {
            "start": 568.12,
            "end": 570.5,
            "text": "好，总结一下今天的重点。"
        },
        {
            "start": 570.5,
            "end": 573.2,
            "text": "AI Agent 在五个核心部门的落地："
        },
        {
            "start": 573.2,
            "end": 576.5699999999999,
            "text": "销售（线索评分、客户跟进、"
        },
        {
            "start": 576.5699999999999,
            "end": 579.76,
            "text": "竞品监控）、客服（三层能力："
        },
        {
            "start": 579.76,
            "end": 582.92,
            "text": "自主解决、辅助人工、事后分析）、"
        },
        {
            "start": 582.92,
            "end": 586.1,
            "text": "财务（发票处理、费用审核、"
        },
        {
            "start": 586.1,
            "end": 589.4499999999999,
            "text": "财务分析）、人力资源（招聘筛选、"
        },
        {
            "start": 589.4499999999999,
            "end": 591.64,
            "text": "入职引导、员工问答）、"
        },
        {
            "start": 591.64,
            "end": 595.6399999999999,
            "text": "运营（数据监控、内容生产、供应链）。"
        },
        {
            "start": 595.64,
            "end": 600.18,
            "text": "多 Agent 协作让多个专业 Agent 像团队一样配合。"
        },
        {
            "start": 600.18,
            "end": 604.6799999999997,
            "text": "组织转型四步法：流程审计、试点验证、"
        },
        {
            "start": 604.68,
            "end": 607.32,
            "text": "人机协作设计、规模化推广。"
        },
        {
            "start": 607.32,
            "end": 608.3254545454545,
            "text": "核心原则：Agent 做八十分的事，人做从八十分到一百分的事。"
        },
        {
            "start": 608.3254545454545,
            "end": 608.3737878787878,
            "text": "下一期我们实操 AI 编程。"
        },
        {
            "start": 608.3737878787878,
            "end": 608.4133333333332,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 608.4133333333332,
            "end": 608.5187878787876,
            "text": "1. AI Agent 五大部门落地：销售、客服、财务、HR、运营"
        },
        {
            "start": 608.5187878787876,
            "end": 608.6462121212118,
            "text": "2. 多 Agent 协作：多个专业 Agent 各司其职，像团队一样配合"
        },
        {
            "start": 608.6462121212118,
            "end": 608.6813636363632,
            "text": "3. 组织转型四步法："
        },
        {
            "start": 608.6813636363632,
            "end": 608.7780303030298,
            "text": "流程审计 → 试点验证 → 人机协作设计 → 规模化推广"
        },
        {
            "start": 608.7780303030298,
            "end": 643.52,
            "text": "4. 核心原则：Agent 做 80 分的事，人做从 80 到 100 分的事"
        },
        {
            "start": 643.52,
            "end": 648.32,
            "text": "1. 你的企业哪个部门最适合优先引入 AI Agent？"
        },
        {
            "start": 648.32,
            "end": 648.780202020202,
            "text": "为什么？"
        },
        {
            "start": 648.780202020202,
            "end": 648.876363636363,
            "text": "2. 画出你最核心的一个业务流程，"
        },
        {
            "start": 648.876363636363,
            "end": 648.9931313131299,
            "text": "标记出哪些环节可以用 Agent 来做"
        },
        {
            "start": 648.9931313131299,
            "end": 652.66,
            "text": "3. 如果你要做一个 Agent 试点项目，你会选什么流程？"
        },
        {
            "start": 652.66,
            "end": 654.1133333333335,
            "text": "成功指标是什么？"
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
], navigation: { nextLessonUrl: "./lesson-workshop-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-06.html?entry={entry}", secondaryHref: "./lesson-workshop-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-05", coachSource: "./ai-coach.html?source=lesson-workshop-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI Agent 深度实操：企业级应用与组织转型的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI Agent 深度实操：企业级应用与组织转型", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
