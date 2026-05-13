(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第12课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第12课：你的创新工作坊：用 AI 设计一个创新实验",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep85-innovation-workshop/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的创新工作坊：用 AI 设计一个创新实验", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-12", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-innovation.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "案例：传统行业加 AI 的成功转型",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "你的创新工作坊：用 AI 设计一个创新实验",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-innovation.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的创新课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：创新与创业 12/12", "你已完成当前开放的创新课程", '也可以先整理这一节'], nextHref: "./module-innovation.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-12", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson12", audioSource: './assets/audio/innovation-ep85-innovation-workshop.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep85-innovation-workshop.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep85-innovation-workshop/slide_01.png",
            "label": "你的创新工作坊：用 AI 设计一个创新实验",
            "caption": "这一节会帮助你系统理解：你的创新工作坊：用 AI 设计一个创新实验"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "考试是主要的检验方式？ AI 可以通过分析学习过程来评估掌握程度。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_04.png",
            "label": "关键判断一",
            "caption": "第三，有风险。 如果假设很明显是对的，那不需要验证。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_05.png",
            "label": "关键判断二",
            "caption": "这个测试验证的是：你的方案的最终输出是否满足用户需求。 形式四：预售测试。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "\"如果不到百分之五，说明假设需要调整。 提前定义成功线可以避免事后的自我欺骗。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_07.png",
            "label": "本节行动提示",
            "caption": "第二，帮我把创新想法提炼成一个可验证的核心假设。 第三，设计一个最小实验来验证这个假设，包括实验方式、衡量指标、成功标准。"
        },
        {
            "file": "innovation-ep85-innovation-workshop/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.48000000000000287,
            "end": 1.64,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.64,
            "end": 4.28,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.760000000000002,
            "end": 7.66,
            "text": "今天是模块六创新与创业的最后一期。"
        },
        {
            "start": 7.66,
            "end": 10.52,
            "text": "前面我们学了颠覆式创新、设计思维、"
        },
        {
            "start": 10.52,
            "end": 13.34,
            "text": "精益创业、第一性原理、AI 原生创业，"
        },
        {
            "start": 13.34,
            "end": 14.92,
            "text": "看了好几个精彩案例。"
        },
        {
            "start": 14.92,
            "end": 18.9,
            "text": "今天把这些知识串起来，做一个实战工作坊。"
        },
        {
            "start": 18.9,
            "end": 21.4,
            "text": "目标是：用一期节目的时间，"
        },
        {
            "start": 21.4,
            "end": 24.24,
            "text": "帮你设计一个可以落地的创新实验。"
        },
        {
            "start": 24.24,
            "end": 26.4,
            "text": "不是做一个完整的商业计划，"
        },
        {
            "start": 26.4,
            "end": 30.42,
            "text": "而是设计一个最小的实验来验证你的创新想法。"
        },
        {
            "start": 30.42,
            "end": 32.4,
            "text": "跟着我的步骤一步步来。"
        },
        {
            "start": 32.4,
            "end": 34.56,
            "text": "第一步：找到你的创新机会。"
        },
        {
            "start": 34.56,
            "end": 37.52,
            "text": "用我们在第一性原理那期讲的方法。"
        },
        {
            "start": 37.52,
            "end": 40.24,
            "text": "先选一个你最熟悉的行业或领域。"
        },
        {
            "start": 40.72,
            "end": 43.6,
            "text": "然后列出这个领域中三到五个\"一直这么"
        },
        {
            "start": 43.6,
            "end": 44.98,
            "text": "做\"的惯例或假设。"
        },
        {
            "start": 45.6,
            "end": 47.16,
            "text": "比如你做教育培训。"
        },
        {
            "start": 47.16,
            "end": 50.6,
            "text": "惯例可能包括：课程需要老师来讲、"
        },
        {
            "start": 50.6,
            "end": 53.4,
            "text": "学习需要按固定的课程表来、"
        },
        {
            "start": 53.4,
            "end": 55.78,
            "text": "考试是检验学习效果的主要方式、"
        },
        {
            "start": 55.78,
            "end": 57.78,
            "text": "每个学生学同样的内容。"
        },
        {
            "start": 57.78,
            "end": 61.3,
            "text": "然后问：AI 让哪些假设动摇了？"
        },
        {
            "start": 61.3,
            "end": 62.9,
            "text": "课程需要老师来讲？"
        },
        {
            "start": 62.9,
            "end": 65.42,
            "text": "AI 可以生成个性化的教学内容。"
        },
        {
            "start": 65.42,
            "end": 67.84,
            "text": "学习需要按固定课程表？"
        },
        {
            "start": 67.84,
            "end": 71.16,
            "text": "AI 可以根据每个学生的进度动态调整。"
        },
        {
            "start": 71.16,
            "end": 74.06,
            "text": "考试是主要的检验方式？"
        },
        {
            "start": 74.06,
            "end": 77.46,
            "text": "AI 可以通过分析学习过程来评估掌握程度。"
        },
        {
            "start": 77.46,
            "end": 79.5,
            "text": "每个学生学同样的内容？"
        },
        {
            "start": 79.5,
            "end": 83.82,
            "text": "AI 可以根据每个人的基础和目标定制学习路径。"
        },
        {
            "start": 83.82,
            "end": 86.38,
            "text": "现在你看到了好几个创新机会。"
        },
        {
            "start": 86.38,
            "end": 88.7,
            "text": "从中选一个你最有感觉的。"
        },
        {
            "start": 88.7,
            "end": 90.0,
            "text": "选择的标准是："
        },
        {
            "start": 90.0,
            "end": 92.02,
            "text": "你对这个问题有深入的理解、"
        },
        {
            "start": 92.02,
            "end": 93.34,
            "text": "这个问题足够痛、"
        },
        {
            "start": 93.34,
            "end": 96.6,
            "text": "你能想到一个 AI 可以带来显著改善的方案。"
        },
        {
            "start": 97.03999999999999,
            "end": 98.98,
            "text": "第二步：定义你的核心假设。"
        },
        {
            "start": 98.98,
            "end": 101.46,
            "text": "你的创新想法基于什么假设？"
        },
        {
            "start": 101.46,
            "end": 104.74000000000001,
            "text": "把这个假设写成一句清晰的陈述。"
        },
        {
            "start": 104.74000000000001,
            "end": 106.28,
            "text": "假设的格式应该是这样的："
        },
        {
            "start": 106.28,
            "end": 108.96,
            "text": "\"我相信某类用户，在某个场景下，"
        },
        {
            "start": 108.96,
            "end": 112.04,
            "text": "愿意使用某种 AI 方案来解决某个问题，"
        },
        {
            "start": 112.04,
            "end": 114.78,
            "text": "因为它比现有方案好在某方面。"
        },
        {
            "start": 114.78,
            "end": 115.2,
            "text": "\""
        },
        {
            "start": 115.2,
            "end": 117.74,
            "text": "比如：\"我相信小型电商卖家，"
        },
        {
            "start": 117.74,
            "end": 120.08,
            "text": "在撰写产品描述时，"
        },
        {
            "start": 120.08,
            "end": 124.46,
            "text": "愿意使用 AI 生成工具来自动创建产品文案，"
        },
        {
            "start": 124.46,
            "end": 128.74,
            "text": "因为它比手写快十倍而且质量不输人工。"
        },
        {
            "start": 128.74,
            "end": 129.16,
            "text": "\""
        },
        {
            "start": 129.16,
            "end": 131.16,
            "text": "一个好的假设有三个特征。"
        },
        {
            "start": 131.16,
            "end": 132.52,
            "text": "第一，具体。"
        },
        {
            "start": 132.52,
            "end": 134.52,
            "text": "不是\"AI 可以帮助教育\"，"
        },
        {
            "start": 134.52,
            "end": 137.46,
            "text": "而是\"AI 可以帮职场英语学习者把口语"
        },
        {
            "start": 137.46,
            "end": 139.02,
            "text": "练习效率提升三倍\"。"
        },
        {
            "start": 139.02,
            "end": 140.54,
            "text": "第二，可验证。"
        },
        {
            "start": 140.54,
            "end": 144.0,
            "text": "你可以设计一个实验来证明或推翻它。"
        },
        {
            "start": 144.0,
            "end": 145.6,
            "text": "第三，有风险。"
        },
        {
            "start": 145.6,
            "end": 148.5,
            "text": "如果假设很明显是对的，那不需要验证。"
        },
        {
            "start": 148.5,
            "end": 150.94,
            "text": "好的假设应该有一定的不确定性，"
        },
        {
            "start": 150.94,
            "end": 152.52,
            "text": "你真的不知道答案是什么。"
        },
        {
            "start": 152.52,
            "end": 155.26,
            "text": "第三步：设计你的最小实验。"
        },
        {
            "start": 155.26,
            "end": 157.2,
            "text": "回顾一下精益创业的原则："
        },
        {
            "start": 157.2,
            "end": 159.82,
            "text": "用最小的成本验证最关键的假设。"
        },
        {
            "start": 159.82,
            "end": 162.4,
            "text": "你的实验不需要是一个完整的产品。"
        },
        {
            "start": 162.4,
            "end": 164.5,
            "text": "它可以是以下几种形式之一。"
        },
        {
            "start": 164.5,
            "end": 167.0,
            "text": "形式一：落地页测试。"
        },
        {
            "start": 167.0,
            "end": 168.28,
            "text": "做一个简单的网页，"
        },
        {
            "start": 168.28,
            "end": 169.8,
            "text": "描述你的产品或服务，"
        },
        {
            "start": 169.8,
            "end": 171.9,
            "text": "放上\"立即体验\"或\"预约试用\"的按钮。"
        },
        {
            "start": 171.9,
            "end": 174.3,
            "text": "然后投一点广告把目标用户引过来。"
        },
        {
            "start": 174.3,
            "end": 175.84,
            "text": "看有多少人点击了按钮。"
        },
        {
            "start": 175.84,
            "end": 179.68,
            "text": "这个测试验证的是：目标用户对你的方案有没有兴趣。"
        },
        {
            "start": 179.68,
            "end": 181.4,
            "text": "形式二：简易原型测试。"
        },
        {
            "start": 181.4,
            "end": 184.36,
            "text": "用 AI 工具快速做一个简单的产品原型，"
        },
        {
            "start": 184.36,
            "end": 186.08,
            "text": "让目标用户实际体验。"
        },
        {
            "start": 186.08,
            "end": 188.2,
            "text": "观察他们的使用行为和反馈。"
        },
        {
            "start": 188.2,
            "end": 192.54,
            "text": "这个测试验证的是：用户实际使用你的方案时体验怎么样。"
        },
        {
            "start": 192.54,
            "end": 195.0,
            "text": "形式三：人工模拟测试。"
        },
        {
            "start": 195.0,
            "end": 196.08,
            "text": "还没有产品？"
        },
        {
            "start": 196.08,
            "end": 199.88,
            "text": "你可以先用\"人工加 AI\"的方式模拟产品的效果。"
        },
        {
            "start": 199.88,
            "end": 201.86,
            "text": "比如你想做一个 AI 法律顾问。"
        },
        {
            "start": 201.86,
            "end": 205.18,
            "text": "你可以先用 AI 帮你生成法律建议的初稿，"
        },
        {
            "start": 205.18,
            "end": 208.24,
            "text": "你再做审核和润色，然后发给客户。"
        },
        {
            "start": 208.24,
            "end": 209.64,
            "text": "看客户的反应。"
        },
        {
            "start": 209.64,
            "end": 211.12,
            "text": "这个测试验证的是："
        },
        {
            "start": 211.12,
            "end": 214.14,
            "text": "你的方案的最终输出是否满足用户需求。"
        },
        {
            "start": 214.62,
            "end": 216.36,
            "text": "形式四：预售测试。"
        },
        {
            "start": 216.36,
            "end": 218.24,
            "text": "直接让目标用户付费。"
        },
        {
            "start": 218.24,
            "end": 221.72,
            "text": "\"这个产品两周后上线，现在预购享受半价。"
        },
        {
            "start": 221.72,
            "end": 225.36,
            "text": "\"如果有人愿意预付费，说明需求是真实的。"
        },
        {
            "start": 225.36,
            "end": 227.48,
            "text": "第四步：确定你的衡量指标。"
        },
        {
            "start": 227.48,
            "end": 230.96,
            "text": "实验设计好了，你怎么判断实验成功还是失败？"
        },
        {
            "start": 230.96,
            "end": 234.08,
            "text": "需要提前定义好衡量指标和成功标准。"
        },
        {
            "start": 234.08,
            "end": 237.4,
            "text": "每种实验形式对应的核心指标不同。"
        },
        {
            "start": 237.4,
            "end": 240.8,
            "text": "落地页测试的核心指标是：点击率和注册率。"
        },
        {
            "start": 240.8,
            "end": 244.12,
            "text": "如果把广告展示给一千个目标用户，"
        },
        {
            "start": 244.12,
            "end": 246.16,
            "text": "有多少人点进来了、"
        },
        {
            "start": 246.16,
            "end": 248.6,
            "text": "有多少人留下了联系方式。"
        },
        {
            "start": 248.6,
            "end": 252.72,
            "text": "原型测试的核心指标是：完成率和满意度。"
        },
        {
            "start": 252.72,
            "end": 255.88,
            "text": "用户能不能完成你设计的核心任务？"
        },
        {
            "start": 255.88,
            "end": 257.98,
            "text": "完成之后满意度怎么样？"
        },
        {
            "start": 257.98,
            "end": 262.76,
            "text": "人工模拟测试的核心指标是：用户的付费意愿和复用意愿。"
        },
        {
            "start": 262.76,
            "end": 265.24,
            "text": "用户体验了之后愿意付多少钱？"
        },
        {
            "start": 265.24,
            "end": 266.78,
            "text": "下次还会用吗？"
        },
        {
            "start": 266.78,
            "end": 271.46,
            "text": "预售测试的核心指标很简单：有多少人付了钱。"
        },
        {
            "start": 271.46,
            "end": 274.16,
            "text": "更重要的是：提前定义\"成功线\"。"
        },
        {
            "start": 274.16,
            "end": 277.14,
            "text": "比如你的落地页测试，你提前决定："
        },
        {
            "start": 277.14,
            "end": 281.16,
            "text": "\"如果一千个目标用户中有超过百分之五注册了，"
        },
        {
            "start": 281.16,
            "end": 283.4,
            "text": "我就认为需求是验证通过的。"
        },
        {
            "start": 283.4,
            "end": 286.46,
            "text": "\"如果不到百分之五，说明假设需要调整。"
        },
        {
            "start": 286.97999999999996,
            "end": 290.18,
            "text": "提前定义成功线可以避免事后的自我欺骗。"
        },
        {
            "start": 290.18,
            "end": 291.48,
            "text": "如果不提前定义，"
        },
        {
            "start": 291.48,
            "end": 296.08,
            "text": "你很容易在看到数据之后找理由说服自己\"其实还行\"。"
        },
        {
            "start": 296.08,
            "end": 298.38,
            "text": "第五步：制定你的实验行动计划。"
        },
        {
            "start": 298.84000000000003,
            "end": 301.94,
            "text": "把前面四步整合成一个简单的行动计划。"
        },
        {
            "start": 301.94,
            "end": 303.9,
            "text": "行动计划包括六个要素。"
        },
        {
            "start": 303.9,
            "end": 305.26,
            "text": "第一，创新假设。"
        },
        {
            "start": 305.26,
            "end": 307.76,
            "text": "一句话描述你要验证的假设。"
        },
        {
            "start": 307.76,
            "end": 309.1,
            "text": "第二，实验方式。"
        },
        {
            "start": 309.1,
            "end": 310.92,
            "text": "选哪种测试形式。"
        },
        {
            "start": 310.92,
            "end": 312.58,
            "text": "第三，目标用户。"
        },
        {
            "start": 312.58,
            "end": 314.46,
            "text": "你要找谁来参与实验。"
        },
        {
            "start": 314.46,
            "end": 316.8,
            "text": "第四，衡量指标和成功线。"
        },
        {
            "start": 316.8,
            "end": 319.84,
            "text": "你看什么数据、达到什么标准算通过。"
        },
        {
            "start": 319.84,
            "end": 321.06,
            "text": "第五，时间表。"
        },
        {
            "start": 321.06,
            "end": 323.32,
            "text": "什么时候开始、什么时候结束。"
        },
        {
            "start": 323.32,
            "end": 325.52,
            "text": "建议控制在一到两周内。"
        },
        {
            "start": 325.52,
            "end": 326.28,
            "text": "第六，预算。"
        },
        {
            "start": 326.28,
            "end": 328.5,
            "text": "你愿意投入多少时间和钱。"
        },
        {
            "start": 328.5,
            "end": 330.48,
            "text": "建议控制在最小的范围内。"
        },
        {
            "start": 330.48,
            "end": 332.78,
            "text": "一周时间、几千块预算足够了。"
        },
        {
            "start": 332.78,
            "end": 334.6,
            "text": "最后给你一个实战提示。"
        },
        {
            "start": 334.6,
            "end": 338.08,
            "text": "现在就可以让 AI 帮你完成这个工作坊的输出。"
        },
        {
            "start": 338.08,
            "end": 339.84,
            "text": "把以下内容发给 AI。"
        },
        {
            "start": 339.84,
            "end": 343.12,
            "text": "\"我在某个行业工作，我观察到某个痛点。"
        },
        {
            "start": 343.12,
            "end": 344.8,
            "text": "我的创新想法是某某。"
        },
        {
            "start": 344.8,
            "end": 346.08,
            "text": "请帮我：第一，"
        },
        {
            "start": 346.08,
            "end": 350.72,
            "text": "用第一性原理分析这个行业的隐含假设和 AI 带来的变化。"
        },
        {
            "start": 350.72,
            "end": 355.02,
            "text": "第二，帮我把创新想法提炼成一个可验证的核心假设。"
        },
        {
            "start": 355.02,
            "end": 355.76,
            "text": "第三，"
        },
        {
            "start": 355.76,
            "end": 358.56,
            "text": "设计一个最小实验来验证这个假设，"
        },
        {
            "start": 358.56,
            "end": 361.62,
            "text": "包括实验方式、衡量指标、成功标准。"
        },
        {
            "start": 361.62,
            "end": 364.66,
            "text": "第四，制定一个一到两周的行动计划。"
        },
        {
            "start": 364.66,
            "end": 365.08000000000004,
            "text": "\""
        },
        {
            "start": 365.08000000000004,
            "end": 368.5,
            "text": "AI 会给你一份相当完整的创新实验方案。"
        },
        {
            "start": 368.5,
            "end": 373.58,
            "text": "你需要根据你的实际情况做调整，但框架和方向是有用的。"
        },
        {
            "start": 374.2,
            "end": 378.92,
            "text": "记住：创新的关键不是想出完美的想法，而是尽快去验证。"
        },
        {
            "start": 378.92,
            "end": 381.84,
            "text": "一个一般的想法加上快速的验证，"
        },
        {
            "start": 381.84,
            "end": 384.82,
            "text": "远好于一个完美的想法但从来不行动。"
        },
        {
            "start": 384.82,
            "end": 386.3,
            "text": "好，总结一下。"
        },
        {
            "start": 386.3,
            "end": 388.28,
            "text": "创新实验设计五步法："
        },
        {
            "start": 388.28,
            "end": 390.46,
            "text": "找创新机会（第一性原理）、"
        },
        {
            "start": 390.46,
            "end": 393.06,
            "text": "定义核心假设（具体、可验证、"
        },
        {
            "start": 393.06,
            "end": 395.76,
            "text": "有风险）、设计最小实验（落地页、"
        },
        {
            "start": 395.76,
            "end": 397.78,
            "text": "原型、人工模拟、预售）、"
        },
        {
            "start": 397.78,
            "end": 400.16,
            "text": "确定衡量指标和成功线、"
        },
        {
            "start": 400.16,
            "end": 403.32,
            "text": "制定行动计划（一到两周内完成）。"
        },
        {
            "start": 403.32,
            "end": 406.78,
            "text": "这就是模块六创新与创业的全部内容。"
        },
        {
            "start": 406.78,
            "end": 409.86,
            "text": "我们从颠覆式创新讲到设计思维、"
        },
        {
            "start": 409.86,
            "end": 413.2,
            "text": "精益创业、第一性原理、AI 原生创业、"
        },
        {
            "start": 413.2,
            "end": 416.26,
            "text": "产品市场匹配、创业路径和失败管理，"
        },
        {
            "start": 416.26,
            "end": 418.14,
            "text": "然后看了 Midjourney、Cursor、"
        },
        {
            "start": 418.14,
            "end": 420.72,
            "text": "Perplexity 和传统行业转型的案例，"
        },
        {
            "start": 420.72,
            "end": 423.04,
            "text": "最后做了创新实验工作坊。"
        },
        {
            "start": 423.04,
            "end": 427.3,
            "text": "从下一期开始，我们进入模块七：商业数据与分析。"
        },
        {
            "start": 427.3,
            "end": 429.26,
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
], navigation: { nextLessonUrl: "./module-innovation.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-innovation.html?entry={entry}", secondaryHref: "./module-innovation.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-12", coachSource: "./ai-coach.html?source=lesson-innovation-12" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的创新工作坊：用 AI 设计一个创新实验的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的创新工作坊：用 AI 设计一个创新实验", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-innovation.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
