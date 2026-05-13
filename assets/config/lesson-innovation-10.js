(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第10课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第10课：案例：Cursor 和 Perplexity——用 AI 重新定义品类",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep83-case-cursor-perplexity/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：Cursor 和 Perplexity——用 AI 重新定义品类", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-11.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "颠覆式创新：AI 如何加速颠覆周期",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "设计思维：AI 如何增强每一步",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "精益创业：AI 时代的 MVP 更快更便宜",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "第一性原理思维：AI 时代的创新基础",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 原生创业：从第一天就用 AI 构建",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "产品市场匹配：AI 产品的 PMF 有什么不同",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "从零到一：AI 时代的创业路径",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：Midjourney——四个人如何做出十亿美金公司",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "案例：传统行业加 AI 的成功转型",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 12,
                "title": "你的创新工作坊：用 AI 设计一个创新实验",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-innovation-11.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把创新问题讲清楚",
                "body": "创新不是追热点，而是重新理解客户、技术、成本和组织能力之间的新组合。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 让试错更快，但也要求判断更稳",
                "body": "速度变快以后，真正稀缺的不是想法数量，而是筛选、验证和复盘能力。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "用小实验替代大口号",
                "body": "每一节课都要落到一个可执行、可衡量、可复盘的创新动作上。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 10/12", "建议下一节：案例：传统行业加 AI 的成功转型", '也可以先整理这一节'], nextHref: "./lesson-innovation-11.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-10", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson10", audioSource: './assets/audio/innovation-ep83-case-cursor-perplexity.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep83-case-cursor-perplexity.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_01.png",
            "label": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
            "caption": "这一节会帮助你系统理解：案例：Cursor 和 Perplexity——用 AI 重新定义品类"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "Cursor 的设计假设完全不同：程序员用自然语言描述想要什么，AI 来生成代码。 程序员的角色从\"写代码\"变成了\"指导 AI 写代码\"。"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_04.png",
            "label": "关键判断一",
            "caption": "在 AI 之前，工具是帮助人更高效地执行任务的。 锤子帮你更高效地钉钉子，Excel 帮你更高效地做计算。"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_05.png",
            "label": "关键判断二",
            "caption": "用 Google 搜索一个问题，你需要：看十几个链接的标题、点进两三个网页、在网页里找相关的段落、自己把信息综合起来。 整个过程可能要五到十分钟。"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "Perplexity 的解决方案是：每一个回答都标注了信息来源。 用户可以看到这个答案是基于哪些文章和网页生成的，随时可以点进去验证。"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_07.png",
            "label": "本节行动提示",
            "caption": "不要问\"怎么给现有产品加 AI\"。 要问\"如果 AI 从第一天就存在，这个品类应该是什么样的？"
        },
        {
            "file": "innovation-ep83-case-cursor-perplexity/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.6,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.6,
            "end": 3.94,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.94,
            "end": 10.240000000000007,
            "text": "今天讲两个用 AI 重新定义整个产品品类的案例：Cursor 和 Perplexity。"
        },
        {
            "start": 10.240000000000007,
            "end": 14.5,
            "text": "一个重新定义了代码编辑器，一个重新定义了搜索引擎。"
        },
        {
            "start": 14.5,
            "end": 16.66,
            "text": "这两家公司有一个共同点："
        },
        {
            "start": 16.66,
            "end": 19.98,
            "text": "它们不是在现有产品上\"加了一点 AI\"，"
        },
        {
            "start": 19.98,
            "end": 24.68,
            "text": "而是从根本上重新思考了这个品类应该是什么样的。"
        },
        {
            "start": 24.68,
            "end": 29.28,
            "text": "这就是上一期讲的第一性原理在 AI 领域的完美实践。"
        },
        {
            "start": 29.28,
            "end": 30.66,
            "text": "先讲 Cursor。"
        },
        {
            "start": 30.66,
            "end": 34.04,
            "text": "Cursor 是一个 AI 原生的代码编辑器。"
        },
        {
            "start": 34.04,
            "end": 36.66,
            "text": "程序员写代码都需要一个编辑器。"
        },
        {
            "start": 36.66,
            "end": 40.52,
            "text": "过去几十年，这个领域的霸主是微软的 VS Code。"
        },
        {
            "start": 40.52,
            "end": 44.06,
            "text": "VS Code 好用、免费、插件生态丰富。"
        },
        {
            "start": 44.06,
            "end": 46.26,
            "text": "几乎所有程序员都在用。"
        },
        {
            "start": 46.26,
            "end": 50.72,
            "text": "在这样一个看似不可能被颠覆的领域，Cursor 做到了什么？"
        },
        {
            "start": 50.72,
            "end": 54.4,
            "text": "它让一大批程序员从 VS Code 切换了过来。"
        },
        {
            "start": 54.4,
            "end": 56.04,
            "text": "Cursor 的核心理念是："
        },
        {
            "start": 56.04,
            "end": 59.22,
            "text": "代码编辑器不应该只是一个\"写代码的地方\"。"
        },
        {
            "start": 59.22,
            "end": 62.34,
            "text": "它应该是一个\"人和 AI 一起编程的环境\"。"
        },
        {
            "start": 62.86,
            "end": 65.3,
            "text": "传统的代码编辑器的设计假设是："
        },
        {
            "start": 65.3,
            "end": 67.2,
            "text": "程序员一行一行地写代码。"
        },
        {
            "start": 67.2,
            "end": 70.12,
            "text": "AI 最多给你做一些自动补全。"
        },
        {
            "start": 70.12,
            "end": 72.56,
            "text": "Cursor 的设计假设完全不同："
        },
        {
            "start": 72.56,
            "end": 75.16,
            "text": "程序员用自然语言描述想要什么，"
        },
        {
            "start": 75.16,
            "end": 76.48,
            "text": "AI 来生成代码。"
        },
        {
            "start": 76.48,
            "end": 80.44,
            "text": "程序员的角色从\"写代码\"变成了\"指导 AI 写代码\"。"
        },
        {
            "start": 80.44,
            "end": 82.72,
            "text": "Cursor 做对了几件关键的事情。"
        },
        {
            "start": 82.72,
            "end": 85.48,
            "text": "第一，它选择了正确的技术基础。"
        },
        {
            "start": 85.48,
            "end": 88.8,
            "text": "Cursor 是基于 VS Code 的开源代码做的。"
        },
        {
            "start": 88.8,
            "end": 91.68,
            "text": "所以程序员切换过来几乎没有学习成本。"
        },
        {
            "start": 91.68,
            "end": 94.64,
            "text": "界面一样、快捷键一样、插件也兼容。"
        },
        {
            "start": 94.64,
            "end": 98.18,
            "text": "但核心的 AI 能力是从底层重新设计的。"
        },
        {
            "start": 98.18,
            "end": 101.52,
            "text": "第二，它把 AI 融入了编程的每一个环节。"
        },
        {
            "start": 102.04,
            "end": 103.64,
            "text": "不只是自动补全代码。"
        },
        {
            "start": 103.64,
            "end": 106.3,
            "text": "你可以选中一段代码让 AI 重构。"
        },
        {
            "start": 106.3,
            "end": 110.82,
            "text": "你可以用自然语言描述一个功能让 AI 生成整个代码文件。"
        },
        {
            "start": 110.82,
            "end": 113.5,
            "text": "你可以让 AI 帮你找bug和修复。"
        },
        {
            "start": 113.94,
            "end": 117.8,
            "text": "你可以让 AI 阅读整个代码仓库然后回答你的问题。"
        },
        {
            "start": 117.8,
            "end": 122.42,
            "text": "AI 不是一个\"附加功能\"，它是整个编程工作流的核心。"
        },
        {
            "start": 123.11999999999999,
            "end": 125.48,
            "text": "第三，它极其注重产品体验。"
        },
        {
            "start": 125.48,
            "end": 129.1,
            "text": "AI 的响应速度够快，交互设计足够流畅。"
        },
        {
            "start": 129.1,
            "end": 132.44,
            "text": "程序员跟 AI 的对话就像跟一个非常能干"
        },
        {
            "start": 132.44,
            "end": 134.08,
            "text": "的同事协作一样自然。"
        },
        {
            "start": 134.08,
            "end": 137.9,
            "text": "从 Cursor 的案例中我们看到了一个重要的创新模式："
        },
        {
            "start": 137.9,
            "end": 140.06,
            "text": "AI 重新定义\"工具\"。"
        },
        {
            "start": 140.66,
            "end": 145.22,
            "text": "在 AI 之前，工具是帮助人更高效地执行任务的。"
        },
        {
            "start": 145.22,
            "end": 149.66,
            "text": "锤子帮你更高效地钉钉子，Excel 帮你更高效地做计算。"
        },
        {
            "start": 150.26,
            "end": 154.58,
            "text": "在 AI 之后，工具变成了\"人和 AI 协作的界面\"。"
        },
        {
            "start": 154.58,
            "end": 158.22,
            "text": "工具的核心不再是让你手动操作得更快，"
        },
        {
            "start": 158.22,
            "end": 161.54,
            "text": "而是让你更好地指导 AI 来完成任务。"
        },
        {
            "start": 162.1,
            "end": 164.64,
            "text": "这个思维的转变适用于很多领域。"
        },
        {
            "start": 164.64,
            "end": 167.86,
            "text": "设计工具、写作工具、数据分析工具、"
        },
        {
            "start": 167.86,
            "end": 169.02,
            "text": "项目管理工具，"
        },
        {
            "start": 169.02,
            "end": 171.42,
            "text": "都可以用这个思路重新设计。"
        },
        {
            "start": 171.42,
            "end": 172.6850000000001,
            "text": "好，再来看 Perplexity。"
        },
        {
            "start": 172.6850000000001,
            "end": 177.2,
            "text": "Perplexity 做的是 AI 搜索引擎。"
        },
        {
            "start": 177.2,
            "end": 180.34,
            "text": "Google 统治搜索市场已经超过二十年了。"
        },
        {
            "start": 180.34,
            "end": 184.24,
            "text": "很多人觉得搜索引擎这个品类已经没有创新空间了。"
        },
        {
            "start": 184.24,
            "end": 186.5,
            "text": "Perplexity 证明他们错了。"
        },
        {
            "start": 186.5,
            "end": 189.72,
            "text": "Google 搜索的逻辑是：你输入关键词，"
        },
        {
            "start": 189.72,
            "end": 191.44,
            "text": "Google 给你一堆链接，"
        },
        {
            "start": 191.44,
            "end": 194.0,
            "text": "你自己去链接里找答案。"
        },
        {
            "start": 194.0,
            "end": 200.0,
            "text": "Perplexity 的逻辑完全不同：你输入一个问题，Perplexity 直接给你答案。"
        },
        {
            "start": 200.0,
            "end": 201.76,
            "text": "不是链接，是答案。"
        },
        {
            "start": 201.76,
            "end": 205.68,
            "text": "而且每个答案都标注了信息来源，你可以点进去验证。"
        },
        {
            "start": 206.22,
            "end": 209.1,
            "text": "这个区别看起来不大，但体验完全不同。"
        },
        {
            "start": 209.1,
            "end": 211.48,
            "text": "用 Google 搜索一个问题，你需要："
        },
        {
            "start": 211.48,
            "end": 215.2,
            "text": "看十几个链接的标题、点进两三个网页、"
        },
        {
            "start": 215.2,
            "end": 217.1,
            "text": "在网页里找相关的段落、"
        },
        {
            "start": 217.1,
            "end": 219.18,
            "text": "自己把信息综合起来。"
        },
        {
            "start": 219.18,
            "end": 221.56,
            "text": "整个过程可能要五到十分钟。"
        },
        {
            "start": 221.56,
            "end": 226.12,
            "text": "用 Perplexity，你直接得到一个综合了多个信息源的答案。"
        },
        {
            "start": 226.12,
            "end": 228.12,
            "text": "三十秒就完事了。"
        },
        {
            "start": 228.12,
            "end": 230.38,
            "text": "Perplexity 做对了几件关键的事情。"
        },
        {
            "start": 230.38,
            "end": 232.7,
            "text": "第一，找到了正确的切入点。"
        },
        {
            "start": 232.7,
            "end": 237.6,
            "text": "Perplexity 没有试图在所有搜索场景上跟 Google 竞争。"
        },
        {
            "start": 237.6,
            "end": 242.42,
            "text": "你搜一个餐厅地址、搜一个电影时间，Google 已经做得很好了。"
        },
        {
            "start": 242.42,
            "end": 246.68,
            "text": "Perplexity 瞄准的是\"需要深度回答的复杂问题\"。"
        },
        {
            "start": 246.68,
            "end": 250.52,
            "text": "比如\"这两种编程语言各自的优缺点是什"
        },
        {
            "start": 250.52,
            "end": 252.88,
            "text": "么\"\"这个行业的发展趋势怎么样\"。"
        },
        {
            "start": 252.88,
            "end": 257.82,
            "text": "这类问题在 Google 上需要翻很多链接才能找到满意的答案，"
        },
        {
            "start": 257.82,
            "end": 260.94,
            "text": "但在 Perplexity 上一次就能得到。"
        },
        {
            "start": 260.94,
            "end": 263.48,
            "text": "这就是颠覆式创新的经典路径。"
        },
        {
            "start": 263.48,
            "end": 265.6,
            "text": "不在对手最强的地方竞争，"
        },
        {
            "start": 265.6,
            "end": 269.58,
            "text": "而是找到一个对手做得不够好的细分场景切入。"
        },
        {
            "start": 269.58,
            "end": 271.74,
            "text": "第二，透明度和信任。"
        },
        {
            "start": 271.74,
            "end": 274.98,
            "text": "AI 生成的答案最大的问题是\"可靠性\"。"
        },
        {
            "start": 274.98,
            "end": 277.88,
            "text": "用户怎么知道 AI 说的是对的？"
        },
        {
            "start": 277.88,
            "end": 282.36,
            "text": "Perplexity 的解决方案是：每一个回答都标注了信息来源。"
        },
        {
            "start": 282.36,
            "end": 286.26,
            "text": "用户可以看到这个答案是基于哪些文章和网页生成的，"
        },
        {
            "start": 286.26,
            "end": 287.98,
            "text": "随时可以点进去验证。"
        },
        {
            "start": 287.98,
            "end": 293.7,
            "text": "这种设计既保留了 AI 的效率，又给了用户验证信息的能力。"
        },
        {
            "start": 293.7,
            "end": 297.24,
            "text": "在\"AI 生成\"和\"信息可信\"之间找到了平衡。"
        },
        {
            "start": 297.24,
            "end": 300.0,
            "text": "第三，不断拓展使用场景。"
        },
        {
            "start": 300.0,
            "end": 305.16,
            "text": "Perplexity 从一个简单的\"AI 搜索\"开始，逐步加入了更多功能。"
        },
        {
            "start": 305.16,
            "end": 307.1,
            "text": "可以上传文件让它分析、"
        },
        {
            "start": 307.1,
            "end": 310.12,
            "text": "可以对搜索结果进行追问和深入探讨、"
        },
        {
            "start": 310.12,
            "end": 311.76,
            "text": "可以生成研究报告。"
        },
        {
            "start": 311.76,
            "end": 314.82,
            "text": "每一个新功能都在强化它的核心价值："
        },
        {
            "start": 314.82,
            "end": 317.46,
            "text": "帮用户更快地获取和理解信息。"
        },
        {
            "start": 317.46,
            "end": 321.44,
            "text": "把 Cursor 和 Perplexity 两个案例放在一起看，"
        },
        {
            "start": 321.44,
            "end": 325.88,
            "text": "可以提炼出\"用 AI 重新定义品类\"的方法论。"
        },
        {
            "start": 325.88,
            "end": 327.96,
            "text": "第一步：找到一个成熟品类。"
        },
        {
            "start": 327.96,
            "end": 332.74,
            "text": "成熟品类意味着用户需求已经验证过了，市场是存在的。"
        },
        {
            "start": 332.74,
            "end": 334.56,
            "text": "你不需要从零教育市场。"
        },
        {
            "start": 334.56,
            "end": 339.54,
            "text": "你要做的是用 AI 提供一种全新的方式来满足同样的需求。"
        },
        {
            "start": 339.54,
            "end": 341.82,
            "text": "代码编辑器是成熟品类。"
        },
        {
            "start": 341.82,
            "end": 343.54,
            "text": "搜索引擎是成熟品类。"
        },
        {
            "start": 343.54,
            "end": 347.32,
            "text": "写作工具、设计工具、数据分析工具，都是成熟品类。"
        },
        {
            "start": 347.32,
            "end": 350.24,
            "text": "第二步：用第一性原理重新思考这个品类。"
        },
        {
            "start": 350.24,
            "end": 353.28,
            "text": "不要问\"怎么给现有产品加 AI\"。"
        },
        {
            "start": 353.28,
            "end": 358.64,
            "text": "要问\"如果 AI 从第一天就存在，这个品类应该是什么样的？"
        },
        {
            "start": 358.64,
            "end": 359.06,
            "text": "\""
        },
        {
            "start": 359.06,
            "end": 362.18,
            "text": "Cursor 问的不是\"怎么给编辑器加 AI 补全\"，"
        },
        {
            "start": 362.18,
            "end": 363.98,
            "text": "而是\"在 AI 时代，"
        },
        {
            "start": 363.98,
            "end": 366.02,
            "text": "编程这件事应该怎么做\"。"
        },
        {
            "start": 366.02,
            "end": 369.46,
            "text": "Perplexity 问的不是\"怎么给搜索引擎加 AI 摘要\"，"
        },
        {
            "start": 369.46,
            "end": 371.82,
            "text": "而是\"在 AI 时代，"
        },
        {
            "start": 371.82,
            "end": 374.14,
            "text": "获取信息这件事应该怎么做\"。"
        },
        {
            "start": 374.14,
            "end": 376.38,
            "text": "第三步：降低切换成本。"
        },
        {
            "start": 376.38,
            "end": 379.06,
            "text": "用户已经在用现有的工具了。"
        },
        {
            "start": 379.06,
            "end": 383.26666666666665,
            "text": "你的新产品必须让用户切换过来的成本极低。"
        },
        {
            "start": 383.26666666666665,
            "end": 388.12,
            "text": "Cursor 基于 VS Code 的代码，程序员几乎零成本切换。"
        },
        {
            "start": 388.12,
            "end": 393.72,
            "text": "Perplexity 的使用方式跟搜索引擎一样简单，输入问题就行。"
        },
        {
            "start": 393.72,
            "end": 397.82,
            "text": "第四步：在一个细分场景做到远超现有产品。"
        },
        {
            "start": 397.82,
            "end": 401.16,
            "text": "不要试图在所有方面都超过现有产品。"
        },
        {
            "start": 401.16,
            "end": 405.46,
            "text": "在一个足够重要的细分场景上做到十倍好就够了。"
        },
        {
            "start": 405.46,
            "end": 409.04,
            "text": "用户会为了这个十倍好的体验而切换过来。"
        },
        {
            "start": 409.04,
            "end": 410.28,
            "text": "好，总结一下。"
        },
        {
            "start": 410.28,
            "end": 412.98,
            "text": "Cursor 重新定义了代码编辑器："
        },
        {
            "start": 412.98,
            "end": 416.46,
            "text": "从\"人写代码\"变成\"人和 AI 一起编程\"。"
        },
        {
            "start": 416.46,
            "end": 421.64,
            "text": "Perplexity 重新定义了搜索：从\"给你链接\"变成\"给你答案\"。"
        },
        {
            "start": 421.64,
            "end": 424.88,
            "text": "用 AI 重新定义品类的四步法："
        },
        {
            "start": 424.88,
            "end": 428.08,
            "text": "找成熟品类、第一性原理重新思考、"
        },
        {
            "start": 428.08,
            "end": 432.16,
            "text": "降低切换成本、细分场景做到十倍好。"
        },
        {
            "start": 432.16,
            "end": 436.48,
            "text": "下一期我们看传统行业加 AI 的成功转型案例。"
        },
        {
            "start": 436.48,
            "end": 438.7,
            "text": "我是 Lincoln，我们下期见。"
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
], navigation: { nextLessonUrl: "./lesson-innovation-11.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-11.html?entry={entry}", secondaryHref: "./lesson-innovation-11.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-10", coachSource: "./ai-coach.html?source=lesson-innovation-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：Cursor 和 Perplexity——用 AI 重新定义品类的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：Cursor 和 Perplexity——用 AI 重新定义品类", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-11.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
