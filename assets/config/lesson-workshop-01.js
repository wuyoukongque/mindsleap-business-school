(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第1课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第1课：AI 工具全景图：管理者必备工具栈",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep107-ai-tool-landscape/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 工具全景图：管理者必备工具栈", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "AI 工具全景图：管理者必备工具栈",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "AI 写作实操：让 AI 帮你写报告、方案、邮件",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "AI 数据分析实操：用自然语言分析业务数据",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-workshop-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 1/8", "建议下一节：AI 写作实操：让 AI 帮你写报告、方案、邮件", '也可以先整理这一节'], nextHref: "./lesson-workshop-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-01", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson1", audioSource: './assets/audio/workshop-ep107-ai-tool-landscape.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep107-ai-tool-landscape.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_01.png",
            "label": "AI 工具全景图：管理者必备工具栈",
            "caption": "这一节会帮助你系统理解：AI 工具全景图：管理者必备工具栈"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_03.png",
            "label": "核心实操框架",
            "caption": "可以准备两到三个常用的，根据任务选择。 第二类：AI 写作工具。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "第四类：AI 设计工具。 分几个子类。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "这些过去需要找程序员的事情，现在你自己用 AI 编程工具就能做。 代表工具：Cursor、Claude Code、GitHub Copilot。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "怎么选择和组合你的 AI 工具栈？ 我给你一个简单的选择框架。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_07.png",
            "label": "本节行动提示",
            "caption": "工具会换，但\"怎么给 AI 下指令\"\"怎么审核 AI 的输出\"\"怎么把 AI 嵌入工作流程\"这些能力是通用的。 好，总结一下。"
        },
        {
            "file": "workshop-ep107-ai-tool-landscape/slide_08.png",
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
            "start": 1.5,
            "end": 3.52,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.52,
            "end": 7.2,
            "text": "从今天开始我们进入模块九：AI 实战工作坊。"
        },
        {
            "start": 7.2,
            "end": 11.3,
            "text": "前面八个模块我们建立了 AI 加商业的认知和框架。"
        },
        {
            "start": 11.3,
            "end": 12.82,
            "text": "这个模块纯实操。"
        },
        {
            "start": 12.82,
            "end": 15.5,
            "text": "每一期都是\"跟着做\"的实操课。"
        },
        {
            "start": 15.5,
            "end": 18.48,
            "text": "今天先给你一张 AI 工具的全景图。"
        },
        {
            "start": 18.48,
            "end": 20.74,
            "text": "工具太多了，眼花缭乱。"
        },
        {
            "start": 20.74,
            "end": 23.52,
            "text": "我帮你按照工作场景分类，"
        },
        {
            "start": 23.52,
            "end": 26.62,
            "text": "告诉你每个场景最好用的工具是什么。"
        },
        {
            "start": 26.62,
            "end": 29.32,
            "text": "第一类：AI 对话和思考助手。"
        },
        {
            "start": 29.32,
            "end": 31.16,
            "text": "这是最基础的 AI 工具。"
        },
        {
            "start": 31.16,
            "end": 35.14,
            "text": "你跟 AI 对话，让它帮你思考、分析、回答问题。"
        },
        {
            "start": 35.14,
            "end": 39.24,
            "text": "代表工具：DeepSeek、豆包、Kimi、通义千问。"
        },
        {
            "start": 39.82,
            "end": 40.62,
            "text": "怎么选？"
        },
        {
            "start": 40.62,
            "end": 44.71999999999999,
            "text": "DeepSeek 推理能力很强，适合做分析和写代码。"
        },
        {
            "start": 44.72,
            "end": 48.66,
            "text": "豆包用户量大，界面友好，适合日常对话。"
        },
        {
            "start": 48.66,
            "end": 52.32,
            "text": "Kimi 的长文本理解能力突出，适合处理长文档。"
        },
        {
            "start": 52.32,
            "end": 56.76,
            "text": "通义千问跟阿里生态打通，适合电商和企业场景。"
        },
        {
            "start": 56.76,
            "end": 61.38,
            "text": "如果你需要联网搜索最新信息，选择有联网能力的版本。"
        },
        {
            "start": 61.38,
            "end": 63.06,
            "text": "建议不要只用一个。"
        },
        {
            "start": 63.06,
            "end": 65.66,
            "text": "不同的工具有不同的擅长领域。"
        },
        {
            "start": 65.66,
            "end": 69.44,
            "text": "可以准备两到三个常用的，根据任务选择。"
        },
        {
            "start": 69.44,
            "end": 71.24,
            "text": "第二类：AI 写作工具。"
        },
        {
            "start": 71.24,
            "end": 74.96,
            "text": "写作是管理者每天都在做的事情。"
        },
        {
            "start": 74.96,
            "end": 78.0,
            "text": "写邮件、写报告、写方案、写公众号文章。"
        },
        {
            "start": 78.0,
            "end": 80.66,
            "text": "AI 可以大幅提升你的写作效率。"
        },
        {
            "start": 80.66,
            "end": 83.72,
            "text": "对于商务写作，邮件、报告、方案，"
        },
        {
            "start": 83.72,
            "end": 86.24,
            "text": "直接用对话式 AI 工具就够了。"
        },
        {
            "start": 86.24,
            "end": 89.5,
            "text": "把你的需求描述清楚，AI 帮你起草。"
        },
        {
            "start": 89.5,
            "end": 90.94,
            "text": "你再修改润色。"
        },
        {
            "start": 90.94,
            "end": 94.66,
            "text": "对于内容创作，公众号文章、营销文案、"
        },
        {
            "start": 94.66,
            "end": 97.58,
            "text": "社交媒体内容，除了对话式 AI，"
        },
        {
            "start": 97.58,
            "end": 99.94,
            "text": "还有一些专门的内容创作工具。"
        },
        {
            "start": 100.53999999999999,
            "end": 103.84,
            "text": "用 AI 写作的关键不是让 AI 从零开始写，"
        },
        {
            "start": 103.84,
            "end": 105.7,
            "text": "而是你提供框架和要点，"
        },
        {
            "start": 105.7,
            "end": 107.68,
            "text": "AI 帮你扩展和润色。"
        },
        {
            "start": 107.68,
            "end": 112.02,
            "text": "你的思想加 AI 的表达能力，效率最高、质量最好。"
        },
        {
            "start": 112.02,
            "end": 114.48,
            "text": "第三类：AI 数据分析工具。"
        },
        {
            "start": 114.48,
            "end": 116.92,
            "text": "上一模块详细讲过了。"
        },
        {
            "start": 116.92,
            "end": 118.06,
            "text": "这里简单回顾。"
        },
        {
            "start": 118.06,
            "end": 119.76,
            "text": "对话式数据分析："
        },
        {
            "start": 119.76,
            "end": 123.2,
            "text": "直接把数据文件上传到 Kimi 或通义千问，"
        },
        {
            "start": 123.2,
            "end": 125.34,
            "text": "用自然语言提问和分析。"
        },
        {
            "start": 125.88,
            "end": 127.94,
            "text": "这已经够大多数管理者用了。"
        },
        {
            "start": 127.94,
            "end": 130.14,
            "text": "如果你需要更专业的分析，"
        },
        {
            "start": 130.14,
            "end": 132.56,
            "text": "有一些专门的 AI 数据分析平台，"
        },
        {
            "start": 132.56,
            "end": 135.42,
            "text": "可以接入你的数据库做实时分析。"
        },
        {
            "start": 135.42,
            "end": 137.5,
            "text": "第四类：AI 设计工具。"
        },
        {
            "start": 137.5,
            "end": 138.82,
            "text": "分几个子类。"
        },
        {
            "start": 138.82,
            "end": 143.6,
            "text": "图片生成：Midjourney、DALL·E、Stable Diffusion。"
        },
        {
            "start": 143.6,
            "end": 145.96,
            "text": "输入文字描述，AI 生成图片。"
        },
        {
            "start": 145.96,
            "end": 149.46,
            "text": "适合做营销素材、社交媒体配图、概念设计。"
        },
        {
            "start": 149.88,
            "end": 150.94,
            "text": "PPT 设计："
        },
        {
            "start": 150.94,
            "end": 155.22,
            "text": "有一些 AI 工具可以根据你的内容自动生成漂亮的 PPT。"
        },
        {
            "start": 155.22,
            "end": 159.0,
            "text": "视频生成：文字转视频的 AI 工具正在快速发展。"
        },
        {
            "start": 159.0,
            "end": 162.1,
            "text": "适合做短视频内容、产品演示视频。"
        },
        {
            "start": 162.51999999999998,
            "end": 165.1,
            "text": "设计类工具建议先试用免费版本，"
        },
        {
            "start": 165.1,
            "end": 167.06,
            "text": "找到适合你需求的再付费。"
        },
        {
            "start": 167.06,
            "end": 170.02,
            "text": "因为每个工具的风格和擅长领域不同。"
        },
        {
            "start": 170.02,
            "end": 172.3,
            "text": "第五类：AI 编程工具。"
        },
        {
            "start": 172.3,
            "end": 175.62,
            "text": "你可能觉得\"我又不是程序员，不需要编程工具\"。"
        },
        {
            "start": 175.62,
            "end": 178.4,
            "text": "但 AI 编程工具正在改变这个认知。"
        },
        {
            "start": 179.02,
            "end": 184.16,
            "text": "现在的 AI 编程工具可以让不会写代码的人也能做出工具。"
        },
        {
            "start": 184.16,
            "end": 189.32,
            "text": "你用自然语言描述你想要什么功能，AI 帮你生成代码。"
        },
        {
            "start": 189.32,
            "end": 192.3,
            "text": "比如你想做一个简单的客户数据看板、"
        },
        {
            "start": 192.3,
            "end": 194.7,
            "text": "一个自动化的邮件发送工具、"
        },
        {
            "start": 194.7,
            "end": 196.48,
            "text": "一个数据清洗脚本。"
        },
        {
            "start": 196.48,
            "end": 199.02,
            "text": "这些过去需要找程序员的事情，"
        },
        {
            "start": 199.02,
            "end": 201.74,
            "text": "现在你自己用 AI 编程工具就能做。"
        },
        {
            "start": 201.74,
            "end": 206.54,
            "text": "代表工具：Cursor、Claude Code、GitHub Copilot。"
        },
        {
            "start": 207.14000000000001,
            "end": 209.34,
            "text": "不要被\"编程\"两个字吓到。"
        },
        {
            "start": 209.34,
            "end": 212.18,
            "text": "AI 编程工具的门槛已经非常低了。"
        },
        {
            "start": 212.18,
            "end": 215.9,
            "text": "你不需要学编程语言，只需要会清楚地描述你的需求。"
        },
        {
            "start": 215.9,
            "end": 218.88,
            "text": "第六类：AI Agent 和自动化工具。"
        },
        {
            "start": 218.88,
            "end": 222.58,
            "text": "AI Agent 就是可以自主完成复杂任务的 AI。"
        },
        {
            "start": 222.58,
            "end": 225.7,
            "text": "不只是回答问题，而是帮你执行任务。"
        },
        {
            "start": 225.7,
            "end": 229.3,
            "text": "比如：自动帮你搜集竞品信息并生成报告。"
        },
        {
            "start": 229.3,
            "end": 231.84,
            "text": "自动帮你处理邮件，分类、"
        },
        {
            "start": 231.84,
            "end": 236.0,
            "text": "回复常见问题、标记需要你亲自处理的。"
        },
        {
            "start": 236.0,
            "end": 239.4,
            "text": "自动帮你做数据监控，有异常就通知你。"
        },
        {
            "start": 239.4,
            "end": 243.72,
            "text": "自动化工具可以把多个 AI 工具和其他应用串联起来，"
        },
        {
            "start": 243.72,
            "end": 245.86,
            "text": "形成自动化的工作流。"
        },
        {
            "start": 245.86,
            "end": 246.58,
            "text": "比如："
        },
        {
            "start": 246.58,
            "end": 249.78,
            "text": "当你的邮箱收到一封客户询价邮件时，"
        },
        {
            "start": 249.78,
            "end": 251.36,
            "text": "自动提取询价信息，"
        },
        {
            "start": 251.36,
            "end": 254.7,
            "text": "在 CRM 中创建一条新的商机记录，"
        },
        {
            "start": 254.7,
            "end": 258.42,
            "text": "并自动生成一封初步的回复邮件草稿等你确认。"
        },
        {
            "start": 259.02000000000004,
            "end": 263.7,
            "text": "这些工具把零散的 AI 能力串联成完整的业务流程自动化。"
        },
        {
            "start": 263.7,
            "end": 266.36,
            "text": "怎么选择和组合你的 AI 工具栈？"
        },
        {
            "start": 266.36,
            "end": 268.58,
            "text": "我给你一个简单的选择框架。"
        },
        {
            "start": 268.58,
            "end": 271.62,
            "text": "第一步，梳理你的核心工作场景。"
        },
        {
            "start": 271.62,
            "end": 274.4,
            "text": "你每天花时间最多的工作是什么？"
        },
        {
            "start": 274.4,
            "end": 277.24,
            "text": "写作、沟通、分析、设计、决策？"
        },
        {
            "start": 277.24,
            "end": 281.28,
            "text": "第二步，对每个场景评估 AI 的价值。"
        },
        {
            "start": 281.28,
            "end": 286.04,
            "text": "哪些场景 AI 能帮你节省最多时间或者提升最大效率？"
        },
        {
            "start": 286.04,
            "end": 289.36,
            "text": "第三步，从最高价值的场景开始。"
        },
        {
            "start": 289.36,
            "end": 291.16,
            "text": "不要一下子用十个工具。"
        },
        {
            "start": 291.16,
            "end": 294.08,
            "text": "先选一到两个最有价值的场景，"
        },
        {
            "start": 294.08,
            "end": 297.02,
            "text": "找到合适的 AI 工具，用熟了再扩展。"
        },
        {
            "start": 297.02,
            "end": 300.78,
            "text": "建议大多数管理者的入门工具栈是这样的。"
        },
        {
            "start": 300.78,
            "end": 303.42,
            "text": "一个对话式 AI 助手作为\"万能工具\"。"
        },
        {
            "start": 303.42,
            "end": 306.78,
            "text": "处理写作、分析、思考、搜索等日常需求。"
        },
        {
            "start": 306.78,
            "end": 310.46,
            "text": "加上一两个针对你特定需求的专项工具。"
        },
        {
            "start": 310.46,
            "end": 313.82,
            "text": "如果你经常做 PPT 就加一个 AI 设计工具。"
        },
        {
            "start": 313.82,
            "end": 317.96,
            "text": "如果你经常做数据分析就深入学习 AI 数据分析的用法。"
        },
        {
            "start": 317.96,
            "end": 320.76,
            "text": "如果你想做自动化就试试 Agent 工具。"
        },
        {
            "start": 321.28,
            "end": 324.84,
            "text": "最后一个建议：工具在变，能力在升级。"
        },
        {
            "start": 324.84,
            "end": 327.62,
            "text": "不要执着于某一个具体的工具。"
        },
        {
            "start": 327.62,
            "end": 331.24,
            "text": "更重要的是掌握跟 AI 协作的思维方式。"
        },
        {
            "start": 331.24,
            "end": 332.62,
            "text": "工具会换，"
        },
        {
            "start": 332.62,
            "end": 336.06,
            "text": "但\"怎么给 AI 下指令\"\"怎么审核 AI"
        },
        {
            "start": 336.06,
            "end": 340.84,
            "text": "的输出\"\"怎么把 AI 嵌入工作流程\"这些能力是通用的。"
        },
        {
            "start": 340.84,
            "end": 342.0,
            "text": "好，总结一下。"
        },
        {
            "start": 342.0,
            "end": 343.82,
            "text": "AI 工具六大类："
        },
        {
            "start": 343.82,
            "end": 345.0999999999999,
            "text": "对话助手（思考和回答）、"
        },
        {
            "start": 345.1,
            "end": 347.26,
            "text": "写作工具（邮件报告文案）、"
        },
        {
            "start": 347.26,
            "end": 349.36,
            "text": "数据分析（自然语言分析）、"
        },
        {
            "start": 349.36,
            "end": 351.66,
            "text": "设计工具（图片视频 PPT）、"
        },
        {
            "start": 351.66,
            "end": 354.86,
            "text": "编程工具（不会代码也能做工具）、"
        },
        {
            "start": 354.86,
            "end": 357.96,
            "text": "Agent 和自动化（串联流程自动执行）。"
        },
        {
            "start": 357.96,
            "end": 362.48,
            "text": "选择框架：梳理场景、评估价值、从高价值场景入手。"
        },
        {
            "start": 362.48,
            "end": 365.72,
            "text": "工具会变，AI 协作思维是通用的。"
        },
        {
            "start": 365.72,
            "end": 367.58,
            "text": "下一期我们实操 AI 写作。"
        },
        {
            "start": 367.58,
            "end": 369.58,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 369.58,
            "end": 373.1,
            "text": "1. AI 工具六大类：对话助手、写作、"
        },
        {
            "start": 373.1,
            "end": 376.42,
            "text": "数据分析、设计、编程、Agent 自动化"
        },
        {
            "start": 376.42,
            "end": 380.16,
            "text": "2. 入门工具栈：一个对话 AI + 一两个专项工具"
        },
        {
            "start": 380.16,
            "end": 385.58,
            "text": "3. 选择框架：梳理场景 → 评估价值 → 高价值场景优先"
        },
        {
            "start": 385.58,
            "end": 389.56,
            "text": "4. 工具会变，AI 协作思维是通用能力"
        },
        {
            "start": 389.56,
            "end": 393.1,
            "text": "1. 你目前在用哪些 AI 工具？"
        },
        {
            "start": 393.1,
            "end": 395.48,
            "text": "覆盖了你的核心工作场景吗？"
        },
        {
            "start": 395.48,
            "end": 399.66,
            "text": "2. 你每天花时间最多的工作是什么？"
        },
        {
            "start": 399.66,
            "end": 402.06,
            "text": "有没有对应的 AI 工具可以用？"
        },
        {
            "start": 402.06,
            "end": 406.64,
            "text": "3. 试着用一周时间集中使用一个新的 AI 工具，"
        },
        {
            "start": 406.64,
            "end": 407.9,
            "text": "看看效果如何"
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
], navigation: { nextLessonUrl: "./lesson-workshop-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-02.html?entry={entry}", secondaryHref: "./lesson-workshop-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-01", coachSource: "./ai-coach.html?source=lesson-workshop-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 工具全景图：管理者必备工具栈的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 工具全景图：管理者必备工具栈", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
