(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第6课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第6课：AI 编程实操：不会写代码也能做工具",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep112-ai-coding/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 编程实操：不会写代码也能做工具", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-07.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 8,
                "title": "AI 工具选型与部署：从试用到全面推广",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-workshop-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 6/8", "建议下一节：你的 AI 工作流设计：找到你业务中的 AI 杠杆点", '也可以先整理这一节'], nextHref: "./lesson-workshop-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-06", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson6", audioSource: './assets/audio/workshop-ep112-ai-coding.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep112-ai-coding.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep112-ai-coding/slide_01.png",
            "label": "AI 编程实操：不会写代码也能做工具",
            "caption": "这一节会帮助你系统理解：AI 编程实操：不会写代码也能做工具"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_03.png",
            "label": "核心实操框架",
            "caption": "来看几个具体的案例。 案例一：做一个数据清洗工具。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "从这个 Excel 文件中读取数据，展示以下内容：月度销售额的折线图、各产品的销售额柱状图、三个核心指标的大数字展示（总营收、总订单数、平均客单价）。 页面设计要简洁美观。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "你的销售团队需要一个报价计算器。 输入产品数量、客户类型、折扣级别，自动算出报价。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "\"先帮我做一个最基础的版本，只有核心功能。 \" 测试之后：\"现在加上这个功能。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_07.png",
            "label": "本节行动提示",
            "caption": "这些还是需要专业的开发团队。 关键点：AI 编程让你从\"等别人帮你做\"变成了\"自己就能做简单的工具\"。"
        },
        {
            "file": "workshop-ep112-ai-coding/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.5,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.7,
            "end": 3.54,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.86,
            "end": 7.16,
            "text": "今天聊一个可能会改变你对\"编程\"认知的话题："
        },
        {
            "start": 7.16,
            "end": 8.08,
            "text": "用 AI 编程。"
        },
        {
            "start": 8.68,
            "end": 10.86,
            "text": "你不需要学编程语言，不需要懂代码，"
        },
        {
            "start": 11.26,
            "end": 13.92,
            "text": "用自然语言告诉 AI 你想要什么，"
        },
        {
            "start": 14.38,
            "end": 16.22,
            "text": "AI 帮你写代码、做工具。"
        },
        {
            "start": 16.72,
            "end": 20.44,
            "text": "很多管理者听到\"编程\"两个字就觉得跟自己无关。"
        },
        {
            "start": 20.84,
            "end": 24.64,
            "text": "但 AI 编程工具让编程变成了一种\"超级能力\"，"
        },
        {
            "start": 24.9,
            "end": 26.56,
            "text": "不是程序员的超级能力，"
        },
        {
            "start": 26.88,
            "end": 28.52,
            "text": "而是每一个人的超级能力。"
        },
        {
            "start": 28.52,
            "end": 31.0,
            "text": "你为什么需要 AI 编程能力？"
        },
        {
            "start": 31.56,
            "end": 33.82,
            "text": "因为在工作中你经常遇到这样的需求："
        },
        {
            "start": 34.02,
            "end": 36.3,
            "text": "想做一个小工具但找不到现成的。"
        },
        {
            "start": 36.46,
            "end": 39.12,
            "text": "想把两个系统的数据打通但没有接口。"
        },
        {
            "start": 39.46,
            "end": 42.44,
            "text": "想自动化一个重复性的操作但手动做太慢。"
        },
        {
            "start": 42.94,
            "end": 45.3,
            "text": "过去这些需求你只能找程序员帮忙。"
        },
        {
            "start": 45.62,
            "end": 47.46,
            "text": "排队等开发，可能要等几周。"
        },
        {
            "start": 47.84,
            "end": 50.24,
            "text": "或者花钱外包，几千到几万不等。"
        },
        {
            "start": 50.58,
            "end": 54.24,
            "text": "现在你自己用 AI 编程工具，可能半小时就做出来了。"
        },
        {
            "start": 54.56,
            "end": 55.88,
            "text": "来看几个具体的案例。"
        },
        {
            "start": 55.88,
            "end": 58.64,
            "text": "案例一：做一个数据清洗工具。"
        },
        {
            "start": 58.96,
            "end": 63.8,
            "text": "你有一份从客户那里收到的 Excel 数据，格式乱七八糟。"
        },
        {
            "start": 64.3,
            "end": 65.6,
            "text": "日期格式不统一，"
        },
        {
            "start": 65.9,
            "end": 68.0,
            "text": "有些单元格有多余的空格，"
        },
        {
            "start": 68.42,
            "end": 70.02,
            "text": "有些数据重复了。"
        },
        {
            "start": 70.12,
            "end": 71.98,
            "text": "手动清理要几个小时。"
        },
        {
            "start": 72.36,
            "end": 76.46,
            "text": "你可以告诉 AI 编程工具：\"帮我写一个数据清洗脚本。"
        },
        {
            "start": 76.64,
            "end": 78.32,
            "text": "输入是一个 Excel 文件。"
        },
        {
            "start": 79.12,
            "end": 80.36,
            "text": "需要做以下处理："
        },
        {
            "start": 80.5,
            "end": 83.1,
            "text": "把所有日期统一成年月日的格式、"
        },
        {
            "start": 83.1,
            "end": 85.46,
            "text": "去掉每个单元格的前后空格、"
        },
        {
            "start": 85.5,
            "end": 88.58,
            "text": "删除重复的行、把空值标记出来。"
        },
        {
            "start": 88.76,
            "end": 91.58,
            "text": "处理完之后保存成一个新的 Excel 文件。"
        },
        {
            "start": 91.58,
            "end": 92.0,
            "text": "\""
        },
        {
            "start": 92.02,
            "end": 95.4,
            "text": "AI 帮你写好代码，你运行一下，几秒钟就处理完了。"
        },
        {
            "start": 95.4,
            "end": 97.96,
            "text": "案例二：做一个简单的数据看板。"
        },
        {
            "start": 98.2,
            "end": 102.16,
            "text": "你想做一个网页版的数据看板，展示你的核心业务指标。"
        },
        {
            "start": 102.78,
            "end": 105.3,
            "text": "可以随时打开浏览器查看。"
        },
        {
            "start": 105.64,
            "end": 109.32,
            "text": "告诉 AI：\"帮我做一个简单的数据看板网页。"
        },
        {
            "start": 109.89999999999999,
            "end": 112.42,
            "text": "从这个 Excel 文件中读取数据，"
        },
        {
            "start": 112.42,
            "end": 115.72,
            "text": "展示以下内容：月度销售额的折线图、"
        },
        {
            "start": 115.88,
            "end": 117.84,
            "text": "各产品的销售额柱状图、"
        },
        {
            "start": 118.06,
            "end": 121.52,
            "text": "三个核心指标的大数字展示（总营收、"
        },
        {
            "start": 121.84,
            "end": 124.0,
            "text": "总订单数、平均客单价）。"
        },
        {
            "start": 124.0,
            "end": 126.46,
            "text": "页面设计要简洁美观。"
        },
        {
            "start": 126.46,
            "end": 126.88,
            "text": "\""
        },
        {
            "start": 126.94,
            "end": 129.2,
            "text": "AI 会生成一个完整的网页文件。"
        },
        {
            "start": 129.34,
            "end": 132.44,
            "text": "你打开浏览器就能看到一个漂亮的数据看板。"
        },
        {
            "start": 132.44,
            "end": 135.12,
            "text": "案例三：自动化一个日常操作。"
        },
        {
            "start": 135.56,
            "end": 139.3,
            "text": "你每天需要从三个不同的系统导出数据，"
        },
        {
            "start": 139.3,
            "end": 142.66,
            "text": "合并到一个 Excel 表里，然后发邮件给团队。"
        },
        {
            "start": 142.9,
            "end": 144.82,
            "text": "每天花二十分钟。"
        },
        {
            "start": 144.82,
            "end": 147.68,
            "text": "告诉 AI：\"帮我写一个自动化脚本。"
        },
        {
            "start": 147.98,
            "end": 149.92,
            "text": "每天早上九点自动执行。"
        },
        {
            "start": 150.18,
            "end": 151.84,
            "text": "从以下三个 CSV"
        },
        {
            "start": 151.84,
            "end": 155.8,
            "text": "文件中读取数据（假设已经导出到某个文件夹），"
        },
        {
            "start": 156.0,
            "end": 157.5,
            "text": "合并成一个 Excel 表，"
        },
        {
            "start": 157.86,
            "end": 160.24,
            "text": "自动发送邮件给以下收件人。"
        },
        {
            "start": 160.24,
            "end": 160.66,
            "text": "\""
        },
        {
            "start": 160.78,
            "end": 165.18,
            "text": "AI 生成脚本，你设定好定时任务，以后每天自动执行。"
        },
        {
            "start": 165.52,
            "end": 167.5,
            "text": "你再也不需要手动做了。"
        },
        {
            "start": 167.5,
            "end": 169.98,
            "text": "案例四：做一个简单的内部工具。"
        },
        {
            "start": 170.22,
            "end": 172.9,
            "text": "你的销售团队需要一个报价计算器。"
        },
        {
            "start": 173.4,
            "end": 177.44,
            "text": "输入产品数量、客户类型、折扣级别，自动算出报价。"
        },
        {
            "start": 177.92,
            "end": 180.3,
            "text": "告诉 AI：\"帮我做一个报价计算器。"
        },
        {
            "start": 180.62,
            "end": 181.54,
            "text": "输入项包括："
        },
        {
            "start": 181.54,
            "end": 184.22,
            "text": "产品选择（从一个产品列表中选）、"
        },
        {
            "start": 184.22,
            "end": 187.72,
            "text": "数量、客户类型（标准客户或VIP客户）、"
        },
        {
            "start": 187.88,
            "end": 188.62,
            "text": "折扣级别。"
        },
        {
            "start": 189.18,
            "end": 191.4,
            "text": "产品单价从一个价格表中读取。"
        },
        {
            "start": 191.4,
            "end": 194.16,
            "text": "VIP客户额外打九折。"
        },
        {
            "start": 194.16,
            "end": 198.28,
            "text": "输出报价单，显示每个产品的单价、数量、小计和总价。"
        },
        {
            "start": 198.28,
            "end": 200.0,
            "text": "界面要简洁好用。"
        },
        {
            "start": 200.0,
            "end": 200.42,
            "text": "\""
        },
        {
            "start": 200.42,
            "end": 201.96,
            "text": "怎么高效使用 AI 编程工具？"
        },
        {
            "start": 202.48,
            "end": 204.52,
            "text": "第一，描述清楚你的需求。"
        },
        {
            "start": 204.62,
            "end": 208.26,
            "text": "跟 AI 沟通需求就像跟一个程序员沟通一样。"
        },
        {
            "start": 208.26,
            "end": 211.3,
            "text": "你说得越清楚，AI 给你的结果越准确。"
        },
        {
            "start": 211.79999999999998,
            "end": 212.94,
            "text": "包括：输入是什么？"
        },
        {
            "start": 213.04,
            "end": 213.94,
            "text": "输出是什么？"
        },
        {
            "start": 214.22,
            "end": 216.0,
            "text": "中间的处理逻辑是什么？"
        },
        {
            "start": 216.16,
            "end": 218.1,
            "text": "有没有特殊情况需要处理？"
        },
        {
            "start": 218.36,
            "end": 219.64,
            "text": "第二，分步来做。"
        },
        {
            "start": 219.64,
            "end": 223.16,
            "text": "复杂的工具不要一次性让 AI 全部做完。"
        },
        {
            "start": 223.16,
            "end": 224.5,
            "text": "分成几个步骤。"
        },
        {
            "start": 224.62,
            "end": 228.14,
            "text": "先做核心功能，测试通过了再加其他功能。"
        },
        {
            "start": 228.5,
            "end": 232.06,
            "text": "\"先帮我做一个最基础的版本，只有核心功能。"
        },
        {
            "start": 232.06,
            "end": 232.48,
            "text": "\""
        },
        {
            "start": 232.48,
            "end": 234.56,
            "text": "测试之后：\"现在加上这个功能。"
        },
        {
            "start": 234.56,
            "end": 234.98,
            "text": "\""
        },
        {
            "start": 234.98,
            "end": 236.76,
            "text": "再测试：\"再加上那个功能。"
        },
        {
            "start": 236.76,
            "end": 237.17999999999998,
            "text": "\""
        },
        {
            "start": 237.17999999999998,
            "end": 238.94,
            "text": "第三，让 AI 解释代码。"
        },
        {
            "start": 239.32,
            "end": 243.24,
            "text": "虽然你不需要会写代码，但理解代码在做什么是有帮助的。"
        },
        {
            "start": 243.38,
            "end": 244.8,
            "text": "你可以让 AI 解释："
        },
        {
            "start": 244.8,
            "end": 247.9,
            "text": "\"请用通俗的语言解释一下这段代码在做什么。"
        },
        {
            "start": 247.9,
            "end": 248.32,
            "text": "\""
        },
        {
            "start": 248.32,
            "end": 251.72,
            "text": "理解了代码的逻辑，你就能更好地提出修改意见。"
        },
        {
            "start": 251.72,
            "end": 253.84,
            "text": "第四，保存和版本管理。"
        },
        {
            "start": 254.12,
            "end": 255.72,
            "text": "做好的工具要保存好。"
        },
        {
            "start": 255.78,
            "end": 260.06,
            "text": "如果后面需要修改，把之前的版本和新的需求一起发给 AI。"
        },
        {
            "start": 260.54,
            "end": 263.82,
            "text": "AI 可以在原有基础上修改，不需要从头再来。"
        },
        {
            "start": 263.82,
            "end": 265.66,
            "text": "AI 编程的边界在哪里？"
        },
        {
            "start": 265.72,
            "end": 267.7,
            "text": "AI 编程工具适合做什么？"
        },
        {
            "start": 267.92,
            "end": 269.46,
            "text": "小型的数据处理工具、"
        },
        {
            "start": 269.7,
            "end": 271.92,
            "text": "简单的网页和看板、自动化脚本、"
        },
        {
            "start": 271.92,
            "end": 273.06,
            "text": "内部的小工具。"
        },
        {
            "start": 273.3,
            "end": 275.82,
            "text": "这些东西 AI 可以帮你快速做出来。"
        },
        {
            "start": 276.08,
            "end": 277.06,
            "text": "不适合做什么？"
        },
        {
            "start": 277.06,
            "end": 280.26,
            "text": "大型的复杂系统、需要高安全性的应用、"
        },
        {
            "start": 280.54,
            "end": 282.38,
            "text": "面向大量用户的产品。"
        },
        {
            "start": 282.54,
            "end": 284.9,
            "text": "这些还是需要专业的开发团队。"
        },
        {
            "start": 285.14,
            "end": 285.9,
            "text": "关键点："
        },
        {
            "start": 285.96,
            "end": 289.66,
            "text": "AI 编程让你从\"等别人帮你做\"变成了"
        },
        {
            "start": 289.66,
            "end": 291.9,
            "text": "\"自己就能做简单的工具\"。"
        },
        {
            "start": 292.2,
            "end": 295.56,
            "text": "这极大地提升了你解决问题的速度和自主性。"
        },
        {
            "start": 295.96,
            "end": 297.04,
            "text": "好，总结一下。"
        },
        {
            "start": 297.04,
            "end": 300.2,
            "text": "AI 编程让不会代码的人也能做工具。"
        },
        {
            "start": 300.38,
            "end": 302.96,
            "text": "四个实用场景：数据清洗、数据看板、"
        },
        {
            "start": 303.08,
            "end": 304.54,
            "text": "日常自动化、内部工具。"
        },
        {
            "start": 304.9,
            "end": 307.74,
            "text": "使用技巧：描述清楚需求、分步来做、"
        },
        {
            "start": 307.74,
            "end": 310.0,
            "text": "让 AI 解释代码、保存版本。"
        },
        {
            "start": 310.02,
            "end": 314.48,
            "text": "适合小型工具和自动化，大型系统还是需要专业团队。"
        },
        {
            "start": 314.78,
            "end": 317.1,
            "text": "下一期我们做 AI 工作流设计。"
        },
        {
            "start": 317.32,
            "end": 319.36,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 319.36,
            "end": 324.68,
            "text": "1. AI 编程：不会代码也能做工具，自然语言描述需求即可"
        },
        {
            "start": 324.68,
            "end": 327.98,
            "text": "2. 四大场景：数据清洗、数据看板、"
        },
        {
            "start": 328.1,
            "end": 329.96,
            "text": "日常自动化、内部小工具"
        },
        {
            "start": 329.96,
            "end": 336.06,
            "text": "3. 使用技巧：说清需求、分步做、让 AI 解释、保存版本"
        },
        {
            "start": 336.06,
            "end": 340.54,
            "text": "4. 适合小型工具，大型系统仍需专业团队"
        },
        {
            "start": 340.58,
            "end": 345.72,
            "text": "1. 你有没有一个\"想做但一直没找人做\"的小工具？"
        },
        {
            "start": 345.72,
            "end": 347.76,
            "text": "试试用 AI 编程来做"
        },
        {
            "start": 347.92,
            "end": 351.98,
            "text": "2. 你每天有哪些操作是可以用脚本自动化的？"
        },
        {
            "start": 351.98,
            "end": 356.24,
            "text": "3. 你的团队中有多少人开始尝试 AI 编程工具了？"
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
], navigation: { nextLessonUrl: "./lesson-workshop-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-07.html?entry={entry}", secondaryHref: "./lesson-workshop-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-06", coachSource: "./ai-coach.html?source=lesson-workshop-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 编程实操：不会写代码也能做工具的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 编程实操：不会写代码也能做工具", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
