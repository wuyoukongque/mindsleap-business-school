(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第2课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第2课：设计思维：AI 如何增强每一步",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep75-design-thinking/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：设计思维：AI 如何增强每一步", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-03.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "精益创业：AI 时代的 MVP 更快更便宜",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 4,
                "title": "第一性原理思维：AI 时代的创新基础",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-innovation-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 2/12", "建议下一节：精益创业：AI 时代的 MVP 更快更便宜", '也可以先整理这一节'], nextHref: "./lesson-innovation-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-02", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson2", audioSource: './assets/audio/innovation-ep75-design-thinking.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep75-design-thinking.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep75-design-thinking/slide_01.png",
            "label": "设计思维：AI 如何增强每一步",
            "caption": "这一节会帮助你系统理解：设计思维：AI 如何增强每一步"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "一个人可能要花几个月才能读完的内容，AI 几个小时就分析完了。 第二，情感分析。"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_04.png",
            "label": "关键判断一",
            "caption": "第三步：创意。 围绕定义好的问题，产生尽可能多的解决方案。"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_05.png",
            "label": "关键判断二",
            "caption": "把创意变成一个可以看得到、摸得着的东西。 原型不需要是完美的产品。"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "测试阶段的目标不是让用户夸你的原型多好，而是发现问题。 用户在哪里感到困惑？"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_07.png",
            "label": "本节行动提示",
            "caption": "过去做一轮设计思维可能要一两个月。 现在借助 AI，可能两到三周就能跑完一轮。"
        },
        {
            "file": "innovation-ep75-design-thinking/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3400000000000003,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.3400000000000003,
            "end": 3.8,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.8,
            "end": 5.4,
            "text": "今天聊设计思维。"
        },
        {
            "start": 5.4,
            "end": 9.66,
            "text": "设计思维是硅谷最推崇的创新方法论之一。"
        },
        {
            "start": 9.66,
            "end": 11.68,
            "text": "它不是给设计师用的，"
        },
        {
            "start": 11.68,
            "end": 15.36,
            "text": "而是给所有需要解决复杂问题的人用的。"
        },
        {
            "start": 15.36,
            "end": 18.92,
            "text": "设计思维的核心理念是：以用户为中心来创新。"
        },
        {
            "start": 18.92,
            "end": 21.58,
            "text": "不是先想\"我有什么技术可以做什么产品\"，"
        },
        {
            "start": 21.58,
            "end": 24.64,
            "text": "而是先问\"用户有什么痛点和需求\"，"
        },
        {
            "start": 24.64,
            "end": 27.74,
            "text": "然后围绕用户需求来设计解决方案。"
        },
        {
            "start": 27.74,
            "end": 30.58,
            "text": "AI 可以增强设计思维的每一个步骤。"
        },
        {
            "start": 30.58,
            "end": 32.48,
            "text": "今天我们一步一步来讲。"
        },
        {
            "start": 32.48,
            "end": 34.06,
            "text": "设计思维有五个步骤。"
        },
        {
            "start": 34.06,
            "end": 35.44,
            "text": "第一步：共情。"
        },
        {
            "start": 35.44,
            "end": 36.8,
            "text": "就是理解用户。"
        },
        {
            "start": 36.8,
            "end": 40.8,
            "text": "深入了解用户的需求、痛点、情感、行为。"
        },
        {
            "start": 40.8,
            "end": 43.98,
            "text": "不是坐在办公室里想用户要什么，"
        },
        {
            "start": 43.98,
            "end": 46.36,
            "text": "而是真正走进用户的世界。"
        },
        {
            "start": 46.36,
            "end": 49.6,
            "text": "传统的共情方法包括：用户访谈、"
        },
        {
            "start": 49.98,
            "end": 52.4,
            "text": "现场观察、问卷调查、焦点小组。"
        },
        {
            "start": 52.4,
            "end": 54.78,
            "text": "这些方法都很好，但有局限。"
        },
        {
            "start": 54.78,
            "end": 57.16,
            "text": "你能访谈的用户数量有限，"
        },
        {
            "start": 57.16,
            "end": 59.44,
            "text": "问卷的问题设计可能有偏见，"
        },
        {
            "start": 59.44,
            "end": 61.6,
            "text": "现场观察耗时耗力。"
        },
        {
            "start": 61.6,
            "end": 63.0,
            "text": "AI 怎么增强共情？"
        },
        {
            "start": 63.0,
            "end": 65.36,
            "text": "第一，大规模的用户洞察。"
        },
        {
            "start": 65.36,
            "end": 67.78,
            "text": "AI 可以分析海量的用户评论、"
        },
        {
            "start": 67.78,
            "end": 70.16,
            "text": "社交媒体帖子、客服对话记录、"
        },
        {
            "start": 70.38,
            "end": 71.04,
            "text": "论坛讨论。"
        },
        {
            "start": 71.04,
            "end": 74.02,
            "text": "从中提取用户的真实需求和痛点。"
        },
        {
            "start": 74.02,
            "end": 77.08,
            "text": "一个人可能要花几个月才能读完的内容，"
        },
        {
            "start": 77.58000000000001,
            "end": 79.52,
            "text": "AI 几个小时就分析完了。"
        },
        {
            "start": 79.96000000000001,
            "end": 81.4,
            "text": "第二，情感分析。"
        },
        {
            "start": 81.4,
            "end": 85.32,
            "text": "AI 不只是看用户说了什么，还能分析用户的情感。"
        },
        {
            "start": 85.32,
            "end": 88.7,
            "text": "这条评论是愤怒的、失望的、还是满意的？"
        },
        {
            "start": 88.7,
            "end": 91.02,
            "text": "用户在什么环节的情绪最负面？"
        },
        {
            "start": 91.02,
            "end": 93.02,
            "text": "第三，用户画像生成。"
        },
        {
            "start": 93.02,
            "end": 96.54,
            "text": "AI 可以从数据中自动生成详细的用户画像，"
        },
        {
            "start": 96.54,
            "end": 99.42,
            "text": "包括用户的典型行为模式、常见痛点、"
        },
        {
            "start": 99.42,
            "end": 100.22,
            "text": "使用场景。"
        },
        {
            "start": 100.22,
            "end": 101.62,
            "text": "第二步：定义。"
        },
        {
            "start": 101.62,
            "end": 106.29,
            "text": "把共情阶段收集到的信息，提炼成一个清晰的问题陈述。"
        },
        {
            "start": 106.29,
            "end": 109.48,
            "text": "定义阶段的核心产出是一个\"问题陈述\"。"
        },
        {
            "start": 109.48,
            "end": 111.02,
            "text": "格式通常是："
        },
        {
            "start": 111.02,
            "end": 113.0,
            "text": "\"某类用户需要某种解决方案，"
        },
        {
            "start": 113.0,
            "end": 115.12,
            "text": "因为他们遇到了某个问题。"
        },
        {
            "start": 115.12,
            "end": 115.54,
            "text": "\""
        },
        {
            "start": 115.54,
            "end": 115.9,
            "text": "比如："
        },
        {
            "start": 115.9,
            "end": 120.3,
            "text": "\"经常出差的商务人士需要一种更高效的行李管理方式，"
        },
        {
            "start": 120.3,
            "end": 124.82,
            "text": "因为他们每次出差都要花大量时间打包和找东西。"
        },
        {
            "start": 124.82,
            "end": 125.24,
            "text": "\""
        },
        {
            "start": 125.32,
            "end": 130.5,
            "text": "问题定义得好不好，直接决定了后面的创新方向对不对。"
        },
        {
            "start": 130.5,
            "end": 132.14,
            "text": "AI 怎么帮你定义问题？"
        },
        {
            "start": 132.14,
            "end": 136.34,
            "text": "你可以把共情阶段收集的所有用户洞察输入 AI，"
        },
        {
            "start": 136.34,
            "end": 138.48,
            "text": "让 AI 帮你做聚类分析。"
        },
        {
            "start": 138.48,
            "end": 140.72,
            "text": "哪些痛点是最普遍的？"
        },
        {
            "start": 140.72,
            "end": 142.46,
            "text": "哪些需求是最迫切的？"
        },
        {
            "start": 142.46,
            "end": 145.74,
            "text": "哪些问题是现有产品没有解决好的？"
        },
        {
            "start": 145.74,
            "end": 148.82,
            "text": "AI 可以帮你从大量碎片化的信息中提炼"
        },
        {
            "start": 148.82,
            "end": 150.64,
            "text": "出几个核心的问题方向。"
        },
        {
            "start": 150.64,
            "end": 152.08,
            "text": "第三步：创意。"
        },
        {
            "start": 152.08,
            "end": 155.82,
            "text": "围绕定义好的问题，产生尽可能多的解决方案。"
        },
        {
            "start": 155.82,
            "end": 158.5,
            "text": "这一步强调的是\"量大于质\"。"
        },
        {
            "start": 158.5,
            "end": 163.3,
            "text": "不要一上来就评判好不好，先尽可能多地想出各种方案。"
        },
        {
            "start": 163.3,
            "end": 165.94,
            "text": "传统的创意方法是头脑风暴。"
        },
        {
            "start": 165.94,
            "end": 169.06,
            "text": "一群人坐在一起，自由发言，不批评。"
        },
        {
            "start": 169.06,
            "end": 171.1,
            "text": "但头脑风暴有几个问题。"
        },
        {
            "start": 171.1,
            "end": 174.32,
            "text": "第一，有的人不太愿意在群体中发言。"
        },
        {
            "start": 174.32,
            "end": 177.14,
            "text": "第二，容易被声音大的人带跑方向。"
        },
        {
            "start": 177.14,
            "end": 181.4,
            "text": "第三，人的思维有惯性，容易在一个方向上打转。"
        },
        {
            "start": 181.4,
            "end": 183.92,
            "text": "AI 是一个很好的\"创意伙伴\"。"
        },
        {
            "start": 183.92,
            "end": 188.52,
            "text": "你可以先让团队做一轮头脑风暴，产生一批初始创意。"
        },
        {
            "start": 188.52,
            "end": 192.46,
            "text": "然后把这些创意输入 AI，让 AI 做三件事。"
        },
        {
            "start": 192.46,
            "end": 193.26,
            "text": "第一，扩展。"
        },
        {
            "start": 193.26,
            "end": 196.92,
            "text": "基于你们的创意，生成更多的变体和延伸。"
        },
        {
            "start": 196.92,
            "end": 199.78,
            "text": "\"如果这个想法更极端一点会怎样？"
        },
        {
            "start": 199.78,
            "end": 201.72,
            "text": "\"\"如果把这个想法反过来呢？"
        },
        {
            "start": 201.72,
            "end": 204.16,
            "text": "\"\"如果把两个想法合在一起呢？"
        },
        {
            "start": 204.16,
            "end": 204.57999999999998,
            "text": "\""
        },
        {
            "start": 204.57999999999998,
            "end": 205.86,
            "text": "第二，跨界借鉴。"
        },
        {
            "start": 205.86,
            "end": 209.72,
            "text": "AI 可以从其他行业的成功案例中找到灵感。"
        },
        {
            "start": 209.72,
            "end": 212.36,
            "text": "\"这个问题在医疗行业是怎么解决的？"
        },
        {
            "start": 212.36,
            "end": 215.1,
            "text": "\"\"在游戏行业有没有类似的解决思路？"
        },
        {
            "start": 215.1,
            "end": 215.51999999999998,
            "text": "\""
        },
        {
            "start": 215.56,
            "end": 217.28000000000003,
            "text": "第三，可行性初筛。"
        },
        {
            "start": 217.28000000000003,
            "end": 221.1,
            "text": "对大量的创意做一个初步的可行性评估。"
        },
        {
            "start": 221.1,
            "end": 222.6,
            "text": "技术上能不能实现？"
        },
        {
            "start": 222.6,
            "end": 223.86,
            "text": "市场规模大不大？"
        },
        {
            "start": 223.86,
            "end": 226.6,
            "text": "跟现有的竞品相比有什么差异？"
        },
        {
            "start": 226.6,
            "end": 227.94,
            "text": "第四步：原型。"
        },
        {
            "start": 227.94,
            "end": 231.44,
            "text": "把创意变成一个可以看得到、摸得着的东西。"
        },
        {
            "start": 231.44,
            "end": 233.7,
            "text": "原型不需要是完美的产品。"
        },
        {
            "start": 233.7,
            "end": 236.0,
            "text": "它可以是一个草图、一个纸模型、"
        },
        {
            "start": 236.0,
            "end": 238.48,
            "text": "一个简单的网页、一段演示视频。"
        },
        {
            "start": 238.48,
            "end": 242.62,
            "text": "关键是让人能够直观地感受到你的方案是什么样的。"
        },
        {
            "start": 242.62,
            "end": 245.28,
            "text": "AI 在原型阶段的帮助非常大。"
        },
        {
            "start": 245.28,
            "end": 247.8,
            "text": "第一，快速生成视觉原型。"
        },
        {
            "start": 247.8,
            "end": 252.24,
            "text": "用 AI 设计工具可以在几分钟内生成产品的界面设计、"
        },
        {
            "start": 252.24,
            "end": 254.76,
            "text": "视觉效果图、甚至品牌标识。"
        },
        {
            "start": 254.76,
            "end": 259.92,
            "text": "过去需要设计师花几天做的事情，AI 几分钟就完成了。"
        },
        {
            "start": 259.92,
            "end": 262.08,
            "text": "第二，快速生成文案和内容。"
        },
        {
            "start": 262.6,
            "end": 265.48,
            "text": "如果你的原型需要展示文案、营销内容、"
        },
        {
            "start": 265.48,
            "end": 267.7,
            "text": "产品描述，AI 可以快速生成。"
        },
        {
            "start": 267.7,
            "end": 270.54,
            "text": "第三，快速搭建功能原型。"
        },
        {
            "start": 270.54,
            "end": 273.04,
            "text": "如果你的方案涉及软件产品，"
        },
        {
            "start": 273.04,
            "end": 277.32,
            "text": "AI 编程工具可以帮你快速搭建一个可交互的原型。"
        },
        {
            "start": 277.32,
            "end": 282.56000000000006,
            "text": "不需要写复杂的代码，用自然语言描述功能，AI 帮你生成。"
        },
        {
            "start": 282.56000000000006,
            "end": 286.32,
            "text": "AI 让原型的成本和时间大幅降低。"
        },
        {
            "start": 286.32,
            "end": 289.7,
            "text": "过去做一个原型可能需要一两周和几万块。"
        },
        {
            "start": 289.7,
            "end": 291.46,
            "text": "现在可能一两天、"
        },
        {
            "start": 291.46,
            "end": 294.78,
            "text": "几乎零成本就能做出一个看起来很不错的原型。"
        },
        {
            "start": 294.78,
            "end": 297.64,
            "text": "这意味着你可以同时做多个原型，"
        },
        {
            "start": 297.64,
            "end": 299.02,
            "text": "测试多个方向，"
        },
        {
            "start": 299.02,
            "end": 301.44,
            "text": "而不是被迫只选一个方向。"
        },
        {
            "start": 301.44,
            "end": 302.58,
            "text": "第五步：测试。"
        },
        {
            "start": 302.58,
            "end": 305.94,
            "text": "把原型拿给真实用户去体验，收集反馈。"
        },
        {
            "start": 306.44,
            "end": 309.94,
            "text": "测试阶段的目标不是让用户夸你的原型多好，"
        },
        {
            "start": 309.94,
            "end": 310.96,
            "text": "而是发现问题。"
        },
        {
            "start": 310.96,
            "end": 312.66,
            "text": "用户在哪里感到困惑？"
        },
        {
            "start": 312.66,
            "end": 314.52,
            "text": "哪个功能他们根本不用？"
        },
        {
            "start": 314.52,
            "end": 316.76,
            "text": "哪个环节他们觉得不舒服？"
        },
        {
            "start": 316.76,
            "end": 318.62,
            "text": "AI 怎么帮你做测试？"
        },
        {
            "start": 318.62,
            "end": 320.7,
            "text": "第一，模拟用户测试。"
        },
        {
            "start": 320.7,
            "end": 322.22,
            "text": "在找真实用户之前，"
        },
        {
            "start": 322.22,
            "end": 325.14,
            "text": "你可以先让 AI 扮演不同类型的用户，"
        },
        {
            "start": 325.14,
            "end": 327.18,
            "text": "对你的方案进行模拟测试。"
        },
        {
            "start": 327.18,
            "end": 330.32,
            "text": "AI 可以从不同角度提出问题和反馈。"
        },
        {
            "start": 331.20000000000005,
            "end": 331.6,
            "text": "当然，"
        },
        {
            "start": 331.6,
            "end": 334.64,
            "text": "AI 的模拟不能完全替代真实用户测试，"
        },
        {
            "start": 334.64,
            "end": 337.76,
            "text": "但它可以帮你提前发现一些明显的问题。"
        },
        {
            "start": 337.76,
            "end": 339.88,
            "text": "第二，用户反馈分析。"
        },
        {
            "start": 339.88,
            "end": 344.0,
            "text": "收集到真实用户的反馈后，AI 可以帮你快速分析。"
        },
        {
            "start": 344.0,
            "end": 349.4,
            "text": "从大量的反馈中提取共性的问题和建议，按严重程度排序。"
        },
        {
            "start": 349.4,
            "end": 351.14,
            "text": "第三，快速迭代。"
        },
        {
            "start": 351.14,
            "end": 354.18,
            "text": "测试发现了问题，你需要修改原型。"
        },
        {
            "start": 354.18,
            "end": 356.18,
            "text": "AI 让修改变得很快。"
        },
        {
            "start": 356.18,
            "end": 360.4,
            "text": "调整设计、修改文案、改代码，AI 都能辅助完成。"
        },
        {
            "start": 360.4,
            "end": 363.84,
            "text": "测试、反馈、修改的循环可以更快地转起来。"
        },
        {
            "start": 363.84,
            "end": 367.15999999999997,
            "text": "设计思维有一个非常重要的原则：迭代。"
        },
        {
            "start": 367.16,
            "end": 369.14,
            "text": "五个步骤不是走一遍就完了。"
        },
        {
            "start": 369.14,
            "end": 370.2,
            "text": "它是一个循环。"
        },
        {
            "start": 370.2,
            "end": 374.52,
            "text": "测试之后你可能发现问题定义错了，要回到定义阶段。"
        },
        {
            "start": 374.52,
            "end": 377.9,
            "text": "创意阶段你可能发现对用户的理解不够深，"
        },
        {
            "start": 377.9,
            "end": 379.72,
            "text": "要回到共情阶段。"
        },
        {
            "start": 379.72,
            "end": 383.58,
            "text": "AI 让这个迭代循环变得更快了。"
        },
        {
            "start": 383.58,
            "end": 386.82,
            "text": "过去做一轮设计思维可能要一两个月。"
        },
        {
            "start": 386.82,
            "end": 390.74,
            "text": "现在借助 AI，可能两到三周就能跑完一轮。"
        },
        {
            "start": 391.32,
            "end": 395.02,
            "text": "这意味着你可以在同样的时间内跑更多轮迭代，"
        },
        {
            "start": 395.02,
            "end": 397.02,
            "text": "更快地逼近最优解。"
        },
        {
            "start": 397.02,
            "end": 399.18,
            "text": "最后讲一个很重要的提醒："
        },
        {
            "start": 399.18,
            "end": 401.42,
            "text": "AI 增强了设计思维的效率，"
        },
        {
            "start": 401.42,
            "end": 403.72,
            "text": "但不能替代设计思维的本质。"
        },
        {
            "start": 404.24,
            "end": 406.9,
            "text": "设计思维的本质是\"以人为中心\"。"
        },
        {
            "start": 406.9,
            "end": 410.16,
            "text": "是真正理解人的需求、情感和行为。"
        },
        {
            "start": 410.16,
            "end": 413.7,
            "text": "AI 可以帮你分析数据、生成创意、做原型。"
        },
        {
            "start": 413.7,
            "end": 415.96,
            "text": "但有些事情 AI 做不了。"
        },
        {
            "start": 415.96,
            "end": 420.62,
            "text": "AI 分析不了你在用户家里观察到的一个微妙的表情。"
        },
        {
            "start": 420.62,
            "end": 424.42,
            "text": "AI 感受不到用户在描述痛点时声音中的无奈。"
        },
        {
            "start": 424.42,
            "end": 427.76,
            "text": "AI 想不到一个突然闪过你脑海的灵感。"
        },
        {
            "start": 427.76,
            "end": 430.78,
            "text": "最好的做法是：用 AI 做数据密集、"
        },
        {
            "start": 430.78,
            "end": 432.1,
            "text": "重复性高的工作，"
        },
        {
            "start": 432.1,
            "end": 434.44,
            "text": "让人专注在需要同理心、"
        },
        {
            "start": 434.54,
            "end": 436.52,
            "text": "创造力和直觉的工作上。"
        },
        {
            "start": 436.52,
            "end": 440.44,
            "text": "人机配合，才是设计思维在 AI 时代的最佳实践。"
        },
        {
            "start": 440.44,
            "end": 442.08,
            "text": "好，总结一下。"
        },
        {
            "start": 442.08,
            "end": 446.12,
            "text": "设计思维五步法：共情、定义、创意、原型、测试。"
        },
        {
            "start": 446.12,
            "end": 448.56,
            "text": "AI 增强每一步：大规模用户洞察、"
        },
        {
            "start": 448.56,
            "end": 451.1,
            "text": "聚类分析提炼问题、AI 创意伙伴、"
        },
        {
            "start": 451.1,
            "end": 452.42,
            "text": "快速低成本原型、"
        },
        {
            "start": 452.42,
            "end": 455.06000000000006,
            "text": "模拟用户测试和快速迭代。"
        },
        {
            "start": 455.06000000000006,
            "end": 456.14,
            "text": "AI 提升效率，"
        },
        {
            "start": 456.14,
            "end": 459.14,
            "text": "但设计思维的本质\"以人为中心\"不能被替代。"
        },
        {
            "start": 459.14,
            "end": 461.0,
            "text": "下一期我们聊精益创业："
        },
        {
            "start": 461.0,
            "end": 463.82,
            "text": "AI 时代的最小可行产品更快更便宜。"
        },
        {
            "start": 463.82,
            "end": 465.88,
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
], navigation: { nextLessonUrl: "./lesson-innovation-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-03.html?entry={entry}", secondaryHref: "./lesson-innovation-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-02", coachSource: "./ai-coach.html?source=lesson-innovation-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于设计思维：AI 如何增强每一步的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "设计思维：AI 如何增强每一步", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
