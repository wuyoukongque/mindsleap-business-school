(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第3课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第3课：精益创业：AI 时代的 MVP 更快更便宜",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep76-lean-startup/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：精益创业：AI 时代的 MVP 更快更便宜", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-04.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "第一性原理思维：AI 时代的创新基础",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 5,
                "title": "AI 原生创业：从第一天就用 AI 构建",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "产品市场匹配：AI 产品的 PMF 有什么不同",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "从零到一：AI 时代的创业路径",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：Midjourney——四个人如何做出十亿美金公司",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "案例：传统行业加 AI 的成功转型",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "你的创新工作坊：用 AI 设计一个创新实验",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-innovation-04.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 3/12", "建议下一节：第一性原理思维：AI 时代的创新基础", '也可以先整理这一节'], nextHref: "./lesson-innovation-04.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-03", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson3", audioSource: './assets/audio/innovation-ep76-lean-startup.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep76-lean-startup.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep76-lean-startup/slide_01.png",
            "label": "精益创业：AI 时代的 MVP 更快更便宜",
            "caption": "这一节会帮助你系统理解：精益创业：AI 时代的 MVP 更快更便宜"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "你最需要验证的假设可能是：\"企业的市场部门愿意为AI写作工具付费。 \" 你不需要真的开发一个完整的AI写作工具来验证这个假设。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_04.png",
            "label": "关键判断一",
            "caption": "第四，AI 让你可以用\"拼装\"的方式构建产品。 很多AI能力是现成的服务，你只需要把它们组合起来。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_05.png",
            "label": "关键判断二",
            "caption": "大部分用户在第三步就放弃了。 建议优化引导流程的第三步。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "通过实时的数据分析，AI 可以在你投入太多之前就告诉你：\"这个方向的数据不好看，用户留存率远低于预期，建议考虑调整。 \" 讲一个 AI 时代精益创业的具体方法。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_07.png",
            "label": "本节行动提示",
            "caption": "现在一周就能跑完一轮。 一个月可以测试四个不同的方向。"
        },
        {
            "file": "innovation-ep76-lean-startup/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.3,
            "end": 3.66,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.66,
            "end": 5.34,
            "text": "今天聊精益创业。"
        },
        {
            "start": 5.34,
            "end": 9.22,
            "text": "这个方法论由 Eric Ries 在 2011 年提出，"
        },
        {
            "start": 9.22,
            "end": 13.34,
            "text": "到今天依然是创业领域最重要的方法论之一。"
        },
        {
            "start": 13.34,
            "end": 14.64,
            "text": "在 AI 时代，"
        },
        {
            "start": 14.64,
            "end": 17.3,
            "text": "精益创业的理念不但没有过时，"
        },
        {
            "start": 17.3,
            "end": 19.36,
            "text": "反而变得更强大了。"
        },
        {
            "start": 19.36,
            "end": 24.1,
            "text": "精益创业的核心是一个循环：构建、衡量、学习。"
        },
        {
            "start": 24.1,
            "end": 26.14,
            "text": "英文是 Build、Measure、Learn。"
        },
        {
            "start": 26.14,
            "end": 28.0,
            "text": "你有一个商业假设。"
        },
        {
            "start": 28.0,
            "end": 32.48,
            "text": "你用最快的速度构建一个最小可行产品来测试这个假设。"
        },
        {
            "start": 32.48,
            "end": 35.28,
            "text": "然后衡量数据，看假设是否成立。"
        },
        {
            "start": 35.28,
            "end": 38.98,
            "text": "最后从数据中学习，决定是继续还是转向。"
        },
        {
            "start": 38.98,
            "end": 42.84,
            "text": "这个循环越快，你浪费的时间和金钱就越少。"
        },
        {
            "start": 42.84,
            "end": 45.24,
            "text": "先讲什么是最小可行产品。"
        },
        {
            "start": 45.24,
            "end": 48.48,
            "text": "最小可行产品不是一个\"简陋的产品\"。"
        },
        {
            "start": 48.48,
            "end": 51.22,
            "text": "它是你能构建的最小的东西，"
        },
        {
            "start": 51.22,
            "end": 54.54,
            "text": "刚好足够验证你最关键的商业假设。"
        },
        {
            "start": 55.0,
            "end": 57.2,
            "text": "很多创业者的常见错误是："
        },
        {
            "start": 57.2,
            "end": 60.06,
            "text": "花了半年时间做了一个功能齐全的产品，"
        },
        {
            "start": 60.06,
            "end": 61.74,
            "text": "上线后发现没人要。"
        },
        {
            "start": 61.74,
            "end": 65.92,
            "text": "半年的时间和几百万的资金都浪费了。"
        },
        {
            "start": 65.92,
            "end": 70.04,
            "text": "精益创业的做法是：先问\"我最需要验证的假设是什么？"
        },
        {
            "start": 70.04,
            "end": 72.96,
            "text": "\"然后用最小的投入来验证它。"
        },
        {
            "start": 72.96,
            "end": 73.66,
            "text": "举个例子。"
        },
        {
            "start": 73.66,
            "end": 76.16,
            "text": "你想做一个AI写作助手。"
        },
        {
            "start": 76.16,
            "end": 79.02,
            "text": "你最需要验证的假设可能是："
        },
        {
            "start": 79.02,
            "end": 82.96,
            "text": "\"企业的市场部门愿意为AI写作工具付费。"
        },
        {
            "start": 82.96,
            "end": 83.38,
            "text": "\""
        },
        {
            "start": 83.5,
            "end": 88.96,
            "text": "你不需要真的开发一个完整的AI写作工具来验证这个假设。"
        },
        {
            "start": 88.96,
            "end": 91.5,
            "text": "你可以做一个简单的落地页，"
        },
        {
            "start": 91.5,
            "end": 93.7,
            "text": "描述你的产品功能和价格，"
        },
        {
            "start": 93.7,
            "end": 96.9,
            "text": "看有多少人点击\"立即购买\"。"
        },
        {
            "start": 96.9,
            "end": 99.46,
            "text": "如果点击率很高，说明需求存在。"
        },
        {
            "start": 99.46,
            "end": 102.72,
            "text": "如果没人点击，说明假设可能有问题。"
        },
        {
            "start": 102.72,
            "end": 105.64,
            "text": "这个落地页就是你的最小可行产品。"
        },
        {
            "start": 105.64,
            "end": 109.28,
            "text": "它花了你可能只有一天的时间和几乎零成本，"
        },
        {
            "start": 109.28,
            "end": 111.06,
            "text": "但验证了最关键的假设。"
        },
        {
            "start": 111.06,
            "end": 114.94,
            "text": "AI 怎么让最小可行产品变得更快更便宜？"
        },
        {
            "start": 114.94,
            "end": 116.56,
            "text": "在 AI 出现之前，"
        },
        {
            "start": 116.56,
            "end": 118.76,
            "text": "做一个最小可行产品通常需要："
        },
        {
            "start": 118.76,
            "end": 120.50000000000001,
            "text": "一个开发者花几周写代码，"
        },
        {
            "start": 120.50000000000001,
            "end": 122.8,
            "text": "一个设计师花几天做界面，"
        },
        {
            "start": 122.8,
            "end": 124.82,
            "text": "一个文案花几天写内容。"
        },
        {
            "start": 124.82,
            "end": 127.84,
            "text": "最快也要一两个月，花几万到几十万。"
        },
        {
            "start": 127.84,
            "end": 130.18,
            "text": "AI 时代完全不同了。"
        },
        {
            "start": 130.18,
            "end": 130.42,
            "text": "第一，"
        },
        {
            "start": 130.42,
            "end": 135.1,
            "text": "AI 编程工具让你不需要专业开发者就能搭建产品原型。"
        },
        {
            "start": 135.1,
            "end": 138.56000000000006,
            "text": "用自然语言描述你要什么功能，AI 帮你生成代码。"
        },
        {
            "start": 138.56000000000006,
            "end": 142.8,
            "text": "一个非技术人员也能在几天内搭出一个可用的产品。"
        },
        {
            "start": 142.8,
            "end": 143.48,
            "text": "第二，"
        },
        {
            "start": 143.48,
            "end": 146.68,
            "text": "AI 设计工具让你不需要设计师就能做出"
        },
        {
            "start": 146.68,
            "end": 148.32,
            "text": "好看的界面和品牌视觉。"
        },
        {
            "start": 148.32,
            "end": 149.0,
            "text": "第三，"
        },
        {
            "start": 149.0,
            "end": 152.72,
            "text": "AI 写作工具让你不需要文案就能生成产品描述、"
        },
        {
            "start": 152.72,
            "end": 154.54,
            "text": "营销文案、邮件模板。"
        },
        {
            "start": 154.54,
            "end": 158.6,
            "text": "第四，AI 让你可以用\"拼装\"的方式构建产品。"
        },
        {
            "start": 158.6,
            "end": 162.58,
            "text": "很多AI能力是现成的服务，你只需要把它们组合起来。"
        },
        {
            "start": 162.58,
            "end": 164.14,
            "text": "需要文字处理能力？"
        },
        {
            "start": 164.14,
            "end": 165.52,
            "text": "调用大语言模型。"
        },
        {
            "start": 165.52,
            "end": 167.04,
            "text": "需要图像识别？"
        },
        {
            "start": 167.04,
            "end": 168.58,
            "text": "调用视觉模型。"
        },
        {
            "start": 168.58,
            "end": 169.74,
            "text": "需要语音功能？"
        },
        {
            "start": 169.74,
            "end": 171.02,
            "text": "调用语音模型。"
        },
        {
            "start": 171.02,
            "end": 174.9,
            "text": "过去做一个最小可行产品需要一两个月和几万块。"
        },
        {
            "start": 174.9,
            "end": 178.34,
            "text": "现在用 AI，可能一两周、几千块就能搞定。"
        },
        {
            "start": 178.34,
            "end": 179.54,
            "text": "这意味着什么？"
        },
        {
            "start": 179.54,
            "end": 181.74,
            "text": "你可以同时测试多个方向。"
        },
        {
            "start": 181.74,
            "end": 184.44,
            "text": "过去你只有一次机会，赌一个方向。"
        },
        {
            "start": 184.96,
            "end": 188.18,
            "text": "现在你可以同时做三到五个最小可行产品，"
        },
        {
            "start": 188.18,
            "end": 189.94,
            "text": "测试三到五个方向，"
        },
        {
            "start": 189.94,
            "end": 192.32,
            "text": "看哪个数据最好再加大投入。"
        },
        {
            "start": 192.32,
            "end": 194.68,
            "text": "创业的成功概率大幅提升。"
        },
        {
            "start": 194.68,
            "end": 196.26,
            "text": "好，构建变快了。"
        },
        {
            "start": 196.26,
            "end": 198.29999999999998,
            "text": "衡量和学习这两个环节呢？"
        },
        {
            "start": 198.29999999999998,
            "end": 200.78,
            "text": "AI 同样可以加速衡量和学习。"
        },
        {
            "start": 200.78,
            "end": 204.84,
            "text": "在衡量环节，AI 可以帮你自动追踪和分析关键指标。"
        },
        {
            "start": 204.84,
            "end": 207.54,
            "text": "用户行为数据、转化率、留存率、"
        },
        {
            "start": 207.84,
            "end": 208.22,
            "text": "活跃度，"
        },
        {
            "start": 208.22,
            "end": 210.86,
            "text": "AI 实时监控并自动生成分析报告。"
        },
        {
            "start": 210.86,
            "end": 213.44,
            "text": "你不需要等一个月才看到数据。"
        },
        {
            "start": 213.44,
            "end": 217.62,
            "text": "AI 可以每天甚至每小时告诉你最小可行产品的表现。"
        },
        {
            "start": 217.62,
            "end": 221.51999999999998,
            "text": "在学习环节，AI 可以帮你从数据中提取洞察。"
        },
        {
            "start": 221.52,
            "end": 225.94,
            "text": "\"注册用户有五百个，但只有一百个人真正使用了产品。"
        },
        {
            "start": 225.94,
            "end": 227.32,
            "text": "进一步分析发现，"
        },
        {
            "start": 227.32,
            "end": 230.52,
            "text": "流失主要发生在第一次使用的引导流程上。"
        },
        {
            "start": 230.52,
            "end": 232.76,
            "text": "大部分用户在第三步就放弃了。"
        },
        {
            "start": 232.76,
            "end": 235.1,
            "text": "建议优化引导流程的第三步。"
        },
        {
            "start": 235.1,
            "end": 235.51999999999998,
            "text": "\""
        },
        {
            "start": 235.51999999999998,
            "end": 238.76,
            "text": "这种分析过去需要一个数据分析师花几天才能完成。"
        },
        {
            "start": 238.76,
            "end": 240.8,
            "text": "AI 几分钟就能给你。"
        },
        {
            "start": 240.8,
            "end": 244.94,
            "text": "这样，\"构建到衡量到学习\"的整个循环就被压缩了。"
        },
        {
            "start": 244.94,
            "end": 247.02,
            "text": "过去一个循环可能要一到两个月。"
        },
        {
            "start": 247.02,
            "end": 249.06,
            "text": "现在可能一到两周就能跑完。"
        },
        {
            "start": 249.06,
            "end": 252.6,
            "text": "你能在同样的时间内学到更多、迭代更多次。"
        },
        {
            "start": 252.6,
            "end": 256.36,
            "text": "精益创业中还有一个非常重要的概念：转向。"
        },
        {
            "start": 256.36,
            "end": 257.6,
            "text": "英文叫 Pivot。"
        },
        {
            "start": 257.6,
            "end": 262.14,
            "text": "转向就是当你发现原来的方向不对的时候，调整方向。"
        },
        {
            "start": 262.14,
            "end": 264.94,
            "text": "很多成功的公司都经历过转向。"
        },
        {
            "start": 264.94,
            "end": 267.2,
            "text": "Slack 原来是做游戏的，"
        },
        {
            "start": 267.2,
            "end": 271.0,
            "text": "在做游戏的过程中发现内部沟通工具更有价值，"
        },
        {
            "start": 271.0,
            "end": 273.52,
            "text": "就转向做了协作工具。"
        },
        {
            "start": 273.52,
            "end": 277.18,
            "text": "Instagram 原来是一个功能很复杂的社交应用，"
        },
        {
            "start": 277.18,
            "end": 280.82000000000005,
            "text": "后来发现用户最喜欢的就是拍照加滤镜，"
        },
        {
            "start": 280.82000000000005,
            "end": 283.84,
            "text": "就简化成了一个图片分享应用。"
        },
        {
            "start": 283.84,
            "end": 286.42,
            "text": "AI 让转向的成本变低了。"
        },
        {
            "start": 286.42,
            "end": 288.84,
            "text": "过去你花了三个月做了一个方向，"
        },
        {
            "start": 288.84,
            "end": 290.18,
            "text": "发现不行要转向，"
        },
        {
            "start": 290.18,
            "end": 292.72,
            "text": "之前的开发工作大部分浪费了。"
        },
        {
            "start": 292.72,
            "end": 297.96,
            "text": "在 AI 时代，你可能只花了两周，发现不行就转，损失很小。"
        },
        {
            "start": 297.96,
            "end": 302.34,
            "text": "而且 AI 可以帮你更早发现\"需要转向的信号\"。"
        },
        {
            "start": 303.01,
            "end": 304.78,
            "text": "通过实时的数据分析，"
        },
        {
            "start": 304.78,
            "end": 308.26,
            "text": "AI 可以在你投入太多之前就告诉你："
        },
        {
            "start": 308.26,
            "end": 309.96,
            "text": "\"这个方向的数据不好看，"
        },
        {
            "start": 309.96,
            "end": 313.7,
            "text": "用户留存率远低于预期，建议考虑调整。"
        },
        {
            "start": 313.7,
            "end": 314.12,
            "text": "\""
        },
        {
            "start": 314.12,
            "end": 317.34,
            "text": "讲一个 AI 时代精益创业的具体方法。"
        },
        {
            "start": 317.34,
            "end": 319.78,
            "text": "我把它叫做\"一周验证法\"。"
        },
        {
            "start": 319.78,
            "end": 323.26,
            "text": "适合想要测试一个新想法的创业者或者企"
        },
        {
            "start": 323.26,
            "end": 324.94,
            "text": "业内部的创新团队。"
        },
        {
            "start": 324.94,
            "end": 327.18,
            "text": "第一天，定义假设。"
        },
        {
            "start": 327.18,
            "end": 331.46,
            "text": "用一到两个小时，明确你最想验证的核心假设。"
        },
        {
            "start": 331.46,
            "end": 334.38,
            "text": "比如\"小型餐饮企业愿意为 AI"
        },
        {
            "start": 334.38,
            "end": 336.8,
            "text": "菜单优化工具每月付三百块\"。"
        },
        {
            "start": 336.8,
            "end": 339.76,
            "text": "第二天到第三天，构建最小可行产品。"
        },
        {
            "start": 339.76,
            "end": 343.96,
            "text": "用 AI 编程工具搭建一个简单的产品原型或者落地页。"
        },
        {
            "start": 343.96,
            "end": 346.1,
            "text": "用 AI 设计工具做视觉。"
        },
        {
            "start": 346.1,
            "end": 347.54,
            "text": "用 AI 写文案。"
        },
        {
            "start": 347.54,
            "end": 350.56,
            "text": "第四天到第五天，投放和获取用户。"
        },
        {
            "start": 350.56,
            "end": 352.9,
            "text": "在目标用户聚集的渠道投放。"
        },
        {
            "start": 352.9,
            "end": 356.02,
            "text": "可以是社交媒体广告、行业论坛、微信群。"
        },
        {
            "start": 356.02,
            "end": 359.16,
            "text": "预算不需要多，几百到一千块就够了。"
        },
        {
            "start": 359.16,
            "end": 362.66,
            "text": "第六天到第七天，分析数据和学习。"
        },
        {
            "start": 362.66,
            "end": 364.66,
            "text": "让 AI 帮你分析数据。"
        },
        {
            "start": 364.66,
            "end": 365.84,
            "text": "有多少人看了？"
        },
        {
            "start": 365.84,
            "end": 366.92,
            "text": "有多少人注册了？"
        },
        {
            "start": 366.92,
            "end": 368.28,
            "text": "有多少人愿意付费？"
        },
        {
            "start": 368.28,
            "end": 370.1,
            "text": "用户的反馈是什么？"
        },
        {
            "start": 370.1,
            "end": 373.76,
            "text": "一周结束，你就有了一个初步的验证结果。"
        },
        {
            "start": 373.76,
            "end": 376.34,
            "text": "如果数据好，进入下一轮迭代。"
        },
        {
            "start": 376.34,
            "end": 379.72,
            "text": "如果数据不好，分析原因，调整方向。"
        },
        {
            "start": 379.72,
            "end": 382.56,
            "text": "过去这个过程可能要两到三个月。"
        },
        {
            "start": 383.08,
            "end": 384.74,
            "text": "现在一周就能跑完一轮。"
        },
        {
            "start": 384.74,
            "end": 387.26,
            "text": "一个月可以测试四个不同的方向。"
        },
        {
            "start": 387.26,
            "end": 390.02,
            "text": "最后讲几个精益创业的常见误区。"
        },
        {
            "start": 390.02,
            "end": 394.04,
            "text": "第一个误区：最小可行产品 等于 最烂的产品。"
        },
        {
            "start": 394.04,
            "end": 394.76,
            "text": "不对。"
        },
        {
            "start": 394.76,
            "end": 397.96,
            "text": "最小可行产品的\"最小\"是指功能最小、"
        },
        {
            "start": 397.96,
            "end": 400.34,
            "text": "投入最小，但不是质量最差。"
        },
        {
            "start": 400.34,
            "end": 403.64,
            "text": "用户体验的核心部分必须做到\"够好\"。"
        },
        {
            "start": 403.64,
            "end": 406.74,
            "text": "如果你的产品连基本的可用性都没有，"
        },
        {
            "start": 406.74,
            "end": 409.74,
            "text": "用户不是因为不需要你的产品而离开，"
        },
        {
            "start": 409.74,
            "end": 411.2,
            "text": "而是因为体验太差。"
        },
        {
            "start": 411.2,
            "end": 413.8,
            "text": "这样你的测试数据就是无效的。"
        },
        {
            "start": 413.8,
            "end": 416.22,
            "text": "第二个误区：只要数据好就继续。"
        },
        {
            "start": 416.22,
            "end": 419.54,
            "text": "数据好是必要条件但不是充分条件。"
        },
        {
            "start": 419.54,
            "end": 422.12,
            "text": "你还需要判断：这个市场够大吗？"
        },
        {
            "start": 422.12,
            "end": 423.62,
            "text": "你能建立竞争壁垒吗？"
        },
        {
            "start": 423.62,
            "end": 425.54,
            "text": "商业模式可持续吗？"
        },
        {
            "start": 425.54,
            "end": 428.56,
            "text": "第三个误区：精益创业只适合科技创业。"
        },
        {
            "start": 428.56,
            "end": 431.48,
            "text": "精益创业的理念适用于任何创新项目。"
        },
        {
            "start": 431.48,
            "end": 434.02,
            "text": "企业内部的新产品开发、新市场进入、"
        },
        {
            "start": 434.02,
            "end": 435.02,
            "text": "新业务线探索，"
        },
        {
            "start": 435.02,
            "end": 437.08,
            "text": "都可以用精益创业的方法。"
        },
        {
            "start": 437.08,
            "end": 441.12,
            "text": "先用最小的投入验证假设，再逐步加大投入。"
        },
        {
            "start": 441.12,
            "end": 442.6,
            "text": "好，总结一下。"
        },
        {
            "start": 442.6,
            "end": 446.8,
            "text": "精益创业核心循环：构建、衡量、学习。"
        },
        {
            "start": 446.8,
            "end": 451.84,
            "text": "AI 让最小可行产品更快更便宜：从一两个月到一两周。"
        },
        {
            "start": 451.84,
            "end": 454.98,
            "text": "AI 加速整个循环：实时数据分析、"
        },
        {
            "start": 454.98,
            "end": 458.56,
            "text": "自动洞察提取、更早发现转向信号。"
        },
        {
            "start": 458.56,
            "end": 462.12,
            "text": "\"一周验证法\"让你快速测试商业假设。"
        },
        {
            "start": 462.12,
            "end": 466.46,
            "text": "下一期我们聊第一性原理思维：AI 时代的创新基础。"
        },
        {
            "start": 466.46,
            "end": 468.24,
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
], navigation: { nextLessonUrl: "./lesson-innovation-04.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-04.html?entry={entry}", secondaryHref: "./lesson-innovation-04.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-03", coachSource: "./ai-coach.html?source=lesson-innovation-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于精益创业：AI 时代的 MVP 更快更便宜的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "精益创业：AI 时代的 MVP 更快更便宜", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-04.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
