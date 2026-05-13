(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第1课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第1课：颠覆式创新：AI 如何加速颠覆周期",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep74-disruptive-innovation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：颠覆式创新：AI 如何加速颠覆周期", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "颠覆式创新：AI 如何加速颠覆周期",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "设计思维：AI 如何增强每一步",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 3,
                "title": "精益创业：AI 时代的 MVP 更快更便宜",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-innovation-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 1/12", "建议下一节：设计思维：AI 如何增强每一步", '也可以先整理这一节'], nextHref: "./lesson-innovation-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-01", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson1", audioSource: './assets/audio/innovation-ep74-disruptive-innovation.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep74-disruptive-innovation.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep74-disruptive-innovation/slide_01.png",
            "label": "颠覆式创新：AI 如何加速颠覆周期",
            "caption": "这一节会帮助你系统理解：颠覆式创新：AI 如何加速颠覆周期"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "颠覆式创新就是从这群被忽视的人开始。 一个新进入者推出一个产品，性能不如现有产品，但它更便宜、更简单、更方便。"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_04.png",
            "label": "关键判断一",
            "caption": "柯达就是这么倒下的。 智能手机颠覆个人电脑也是类似的逻辑。"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_05.png",
            "label": "关键判断二",
            "caption": "颠覆式创新的关键阶段是产品从\"不够好\"进化到\"够好\"。 这个过程过去可能需要十年。"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "这些都是\"非消费者\"市场。 AI 让他们从\"用不起\"变成了\"用得起\"。"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_07.png",
            "label": "本节行动提示",
            "caption": "最后讲一个思考框架。 怎么判断你的行业正在被AI颠覆？"
        },
        {
            "file": "innovation-ep74-disruptive-innovation/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.34,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.34,
            "end": 3.46,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.46,
            "end": 6.74,
            "text": "从今天开始我们进入模块六：创新与创业。"
        },
        {
            "start": 6.74,
            "end": 10.8,
            "text": "前面五个模块讲了战略、财务、营销、领导力、运营。"
        },
        {
            "start": 10.8,
            "end": 13.86,
            "text": "这些都是\"经营好一家企业\"的基本功。"
        },
        {
            "start": 13.86,
            "end": 16.08,
            "text": "但只有基本功是不够的。"
        },
        {
            "start": 16.08,
            "end": 19.86,
            "text": "在一个技术飞速变化的时代，不创新就会被淘汰。"
        },
        {
            "start": 19.86,
            "end": 23.98,
            "text": "今天先讲一个非常重要的创新理论：颠覆式创新。"
        },
        {
            "start": 23.98,
            "end": 27.44,
            "text": "这个理论由哈佛商学院教授克里斯坦森提出，"
        },
        {
            "start": 27.44,
            "end": 31.2,
            "text": "可以说是过去三十年最有影响力的创新理论之一。"
        },
        {
            "start": 31.2,
            "end": 33.0,
            "text": "什么是颠覆式创新？"
        },
        {
            "start": 33.0,
            "end": 36.94,
            "text": "很多人以为颠覆式创新就是做出一个\"更好\"的产品。"
        },
        {
            "start": 36.94,
            "end": 37.34,
            "text": "不对。"
        },
        {
            "start": 37.34,
            "end": 40.52,
            "text": "颠覆式创新的核心特征恰恰相反——它一"
        },
        {
            "start": 40.52,
            "end": 41.72,
            "text": "开始看起来\"更差\"。"
        },
        {
            "start": 41.72,
            "end": 44.64,
            "text": "克里斯坦森的经典观察是这样的。"
        },
        {
            "start": 44.64,
            "end": 45.82,
            "text": "在任何一个行业里，"
        },
        {
            "start": 45.82,
            "end": 48.22,
            "text": "成熟企业都在不断改进产品，"
        },
        {
            "start": 48.22,
            "end": 50.94,
            "text": "满足高端客户越来越高的需求。"
        },
        {
            "start": 50.94,
            "end": 54.7,
            "text": "产品越来越好、越来越贵、功能越来越多。"
        },
        {
            "start": 54.7,
            "end": 56.02,
            "text": "但与此同时，"
        },
        {
            "start": 56.02,
            "end": 59.08,
            "text": "市场上有一群\"低端客户\"或者\"非消费者\"。"
        },
        {
            "start": 59.08,
            "end": 62.24,
            "text": "他们觉得现有的产品太贵了、太复杂了、"
        },
        {
            "start": 62.24,
            "end": 63.54,
            "text": "用不上那么多功能。"
        },
        {
            "start": 63.54,
            "end": 65.6,
            "text": "他们的需求没有被满足。"
        },
        {
            "start": 65.6,
            "end": 69.62,
            "text": "颠覆式创新就是从这群被忽视的人开始。"
        },
        {
            "start": 69.62,
            "end": 72.12,
            "text": "一个新进入者推出一个产品，"
        },
        {
            "start": 72.12,
            "end": 74.84,
            "text": "性能不如现有产品，但它更便宜、"
        },
        {
            "start": 75.04,
            "end": 76.3,
            "text": "更简单、更方便。"
        },
        {
            "start": 76.3,
            "end": 79.9,
            "text": "高端客户看不上它，成熟企业也不在乎。"
        },
        {
            "start": 79.9,
            "end": 82.34,
            "text": "但这个新产品会不断进步。"
        },
        {
            "start": 82.34,
            "end": 85.18,
            "text": "当它的性能提升到\"够用\"的水平时，"
        },
        {
            "start": 85.18,
            "end": 88.86,
            "text": "它的低价和便利性就会开始吸引主流客户。"
        },
        {
            "start": 88.86,
            "end": 92.64,
            "text": "等成熟企业反应过来的时候，已经晚了。"
        },
        {
            "start": 92.64,
            "end": 96.32,
            "text": "讲几个经典的颠覆式创新案例帮大家理解。"
        },
        {
            "start": 96.32,
            "end": 97.38,
            "text": "硬盘行业。"
        },
        {
            "start": 97.38,
            "end": 99.84,
            "text": "这是克里斯坦森最早研究的案例。"
        },
        {
            "start": 99.84,
            "end": 101.78,
            "text": "在硬盘发展史上，"
        },
        {
            "start": 101.78,
            "end": 104.54,
            "text": "每一代更小尺寸的硬盘刚出来的时候，"
        },
        {
            "start": 104.54,
            "end": 106.28,
            "text": "容量都不如上一代。"
        },
        {
            "start": 106.28,
            "end": 110.08,
            "text": "大型机用的 14 寸硬盘被 8 寸硬盘颠覆，"
        },
        {
            "start": 110.08,
            "end": 114.7,
            "text": "8 寸被 5.25 寸颠覆，5.25 寸被 3.5 寸颠覆。"
        },
        {
            "start": 114.7,
            "end": 115.68,
            "text": "每一次，"
        },
        {
            "start": 115.68,
            "end": 119.42,
            "text": "做大尺寸硬盘的公司都觉得\"小硬盘容量太小，"
        },
        {
            "start": 119.42,
            "end": 120.98,
            "text": "我们的客户不需要\"。"
        },
        {
            "start": 120.98,
            "end": 124.7,
            "text": "结果每一次它们都被新进入者颠覆了。"
        },
        {
            "start": 124.7,
            "end": 127.52,
            "text": "再比如数码相机颠覆胶片相机。"
        },
        {
            "start": 127.52,
            "end": 132.32,
            "text": "早期的数码照片画质很差，专业摄影师根本看不上。"
        },
        {
            "start": 132.32,
            "end": 135.76,
            "text": "但数码相机方便、便宜、即拍即看。"
        },
        {
            "start": 135.76,
            "end": 140.78,
            "text": "当画质进步到\"够用\"的水平，胶片相机就全面崩溃了。"
        },
        {
            "start": 140.78,
            "end": 142.72,
            "text": "柯达就是这么倒下的。"
        },
        {
            "start": 142.72,
            "end": 145.28,
            "text": "智能手机颠覆个人电脑也是类似的逻辑。"
        },
        {
            "start": 145.28,
            "end": 147.92,
            "text": "早期的智能手机性能远不如电脑。"
        },
        {
            "start": 147.92,
            "end": 149.84,
            "text": "但它随身携带、随时联网。"
        },
        {
            "start": 149.84,
            "end": 153.92,
            "text": "对很多人来说，手机已经能满足大部分计算需求了。"
        },
        {
            "start": 153.92,
            "end": 156.92,
            "text": "好，理解了颠覆式创新的基本逻辑，"
        },
        {
            "start": 156.92,
            "end": 159.58,
            "text": "来看 AI 如何加速了颠覆周期。"
        },
        {
            "start": 159.58,
            "end": 162.16000000000003,
            "text": "AI 让颠覆变得更快更频繁。"
        },
        {
            "start": 162.16000000000003,
            "end": 163.48,
            "text": "原因有三个。"
        },
        {
            "start": 163.48,
            "end": 166.04,
            "text": "第一个原因：AI 大幅降低了进入门槛。"
        },
        {
            "start": 166.04,
            "end": 168.14,
            "text": "过去要颠覆一个行业，"
        },
        {
            "start": 168.14,
            "end": 169.54,
            "text": "你需要大量的资金、"
        },
        {
            "start": 169.54,
            "end": 171.38,
            "text": "技术人才和基础设施。"
        },
        {
            "start": 171.38,
            "end": 175.1,
            "text": "现在很多 AI 能力是以API的形式提供的，"
        },
        {
            "start": 175.1,
            "end": 176.9,
            "text": "你不需要自己训练模型。"
        },
        {
            "start": 177.44,
            "end": 181.7,
            "text": "一个小团队甚至一个人，就可以构建出有竞争力的产品。"
        },
        {
            "start": 182.14,
            "end": 183.82,
            "text": "以前要做一个翻译产品，"
        },
        {
            "start": 183.82,
            "end": 186.82,
            "text": "你需要雇几十个语言学家和工程师。"
        },
        {
            "start": 186.82,
            "end": 191.66,
            "text": "现在你调用大模型的接口，一个人就能做出一个翻译工具。"
        },
        {
            "start": 191.66,
            "end": 195.28,
            "text": "以前要做一个智能客服，你需要几百万的投入。"
        },
        {
            "start": 195.28,
            "end": 198.6,
            "text": "现在你用开源的大语言模型加上你的行业知识，"
        },
        {
            "start": 198.6,
            "end": 200.22,
            "text": "几周就能搭出来。"
        },
        {
            "start": 200.22,
            "end": 203.56,
            "text": "门槛降低意味着：潜在的颠覆者变多了，"
        },
        {
            "start": 203.56,
            "end": 205.22,
            "text": "颠覆的速度变快了。"
        },
        {
            "start": 205.22,
            "end": 209.14,
            "text": "第二个原因：AI 加速了产品从\"够差\"到\"够好\"的演进。"
        },
        {
            "start": 209.14,
            "end": 213.52,
            "text": "颠覆式创新的关键阶段是产品从\"不够好"
        },
        {
            "start": 213.52,
            "end": 214.84,
            "text": "\"进化到\"够好\"。"
        },
        {
            "start": 214.84,
            "end": 217.4,
            "text": "这个过程过去可能需要十年。"
        },
        {
            "start": 217.4,
            "end": 220.72,
            "text": "AI 让这个过程缩短到了几年甚至几个月。"
        },
        {
            "start": 221.22,
            "end": 221.66,
            "text": "为什么？"
        },
        {
            "start": 221.66,
            "end": 226.88,
            "text": "因为 AI 产品有一个独特的特性：用的人越多，产品越好。"
        },
        {
            "start": 226.88,
            "end": 230.86,
            "text": "用户的使用数据反馈给模型，模型就能不断优化。"
        },
        {
            "start": 230.86,
            "end": 235.34,
            "text": "这个\"数据飞轮\"让产品进步的速度远超传统产品。"
        },
        {
            "start": 235.34,
            "end": 237.7,
            "text": "你看 AI 写作工具的进化。"
        },
        {
            "start": 237.7,
            "end": 241.64,
            "text": "两年前 AI 写的文章还很生硬、有明显的AI味道。"
        },
        {
            "start": 241.64,
            "end": 246.34,
            "text": "现在AI写的内容在很多场景下已经跟人写的差不多了。"
        },
        {
            "start": 246.34,
            "end": 249.08,
            "text": "两年时间，从\"不够好\"到\"够好\"。"
        },
        {
            "start": 249.08,
            "end": 253.52,
            "text": "第三个原因：AI 创造了全新的\"非消费者\"市场。"
        },
        {
            "start": 253.52,
            "end": 256.44,
            "text": "还记得颠覆式创新的起点是被忽视的低端"
        },
        {
            "start": 256.44,
            "end": 258.2,
            "text": "客户或非消费者吗？"
        },
        {
            "start": 258.2,
            "end": 260.84,
            "text": "AI 创造了大量新的\"非消费者\"市场。"
        },
        {
            "start": 260.84,
            "end": 263.52,
            "text": "过去请不起律师的小企业，"
        },
        {
            "start": 263.52,
            "end": 267.58,
            "text": "现在可以用 AI 法律助手来处理基础的法律事务。"
        },
        {
            "start": 267.58,
            "end": 270.2,
            "text": "过去做不起数据分析的小公司，"
        },
        {
            "start": 270.2,
            "end": 273.86,
            "text": "现在可以用 AI 分析工具来洞察数据。"
        },
        {
            "start": 273.86,
            "end": 276.62,
            "text": "过去请不起设计师的创业者，"
        },
        {
            "start": 276.62,
            "end": 280.12,
            "text": "现在可以用 AI 设计工具来做视觉素材。"
        },
        {
            "start": 280.12,
            "end": 282.36,
            "text": "这些都是\"非消费者\"市场。"
        },
        {
            "start": 282.36,
            "end": 285.44,
            "text": "AI 让他们从\"用不起\"变成了\"用得起\"。"
        },
        {
            "start": 285.94,
            "end": 289.72,
            "text": "那对已有企业来说，怎么应对 AI 时代的颠覆？"
        },
        {
            "start": 289.72,
            "end": 292.52,
            "text": "克里斯坦森给出的经典建议是："
        },
        {
            "start": 292.52,
            "end": 295.6,
            "text": "成立独立的团队来做创新项目。"
        },
        {
            "start": 295.6,
            "end": 299.28,
            "text": "不要在现有的组织架构内做颠覆式创新，"
        },
        {
            "start": 299.28,
            "end": 303.12,
            "text": "因为现有组织的资源配置逻辑和考核机制"
        },
        {
            "start": 303.12,
            "end": 305.24,
            "text": "会扼杀颠覆式创新。"
        },
        {
            "start": 305.24,
            "end": 307.88,
            "text": "这个建议在 AI 时代依然有效。"
        },
        {
            "start": 307.88,
            "end": 309.86,
            "text": "但我想补充三点。"
        },
        {
            "start": 309.86,
            "end": 311.6,
            "text": "第一，主动颠覆自己。"
        },
        {
            "start": 311.6,
            "end": 314.24,
            "text": "不要等别人来颠覆你，自己先颠覆自己。"
        },
        {
            "start": 314.24,
            "end": 315.46,
            "text": "问一个问题："
        },
        {
            "start": 315.46,
            "end": 318.88000000000005,
            "text": "\"如果有人用 AI 从零开始做我现在的业务，"
        },
        {
            "start": 318.88000000000005,
            "end": 320.0,
            "text": "他会怎么做？"
        },
        {
            "start": 320.0,
            "end": 321.94,
            "text": "\"然后按照那个思路去创新。"
        },
        {
            "start": 321.94,
            "end": 325.04,
            "text": "第二，关注\"够用\"的时刻。"
        },
        {
            "start": 325.04,
            "end": 328.58,
            "text": "密切关注AI在你的行业中从\"不够好\""
        },
        {
            "start": 328.58,
            "end": 329.98,
            "text": "到\"够好\"的转折点。"
        },
        {
            "start": 329.98,
            "end": 334.44,
            "text": "一旦AI的能力达到了\"够用\"的水平，颠覆就会加速。"
        },
        {
            "start": 334.94,
            "end": 338.08,
            "text": "你必须在这个转折点之前做好准备。"
        },
        {
            "start": 338.08,
            "end": 343.76,
            "text": "第三，利用AI增强现有优势，同时探索AI原生的新业务。"
        },
        {
            "start": 343.76,
            "end": 346.34,
            "text": "不是所有创新都是颠覆式的。"
        },
        {
            "start": 346.34,
            "end": 348.94,
            "text": "你也可以用AI来增强现有产品和服务。"
        },
        {
            "start": 348.94,
            "end": 353.94,
            "text": "但同时，你必须用一部分资源去探索AI原生的新业务。"
        },
        {
            "start": 353.94,
            "end": 355.02,
            "text": "两条腿走路。"
        },
        {
            "start": 355.02,
            "end": 357.1,
            "text": "最后讲一个思考框架。"
        },
        {
            "start": 357.1,
            "end": 359.9200000000001,
            "text": "怎么判断你的行业正在被AI颠覆？"
        },
        {
            "start": 359.9200000000001,
            "end": 361.02,
            "text": "三个信号。"
        },
        {
            "start": 361.02,
            "end": 366.24,
            "text": "第一个信号：行业中出现了价格低一个数量级的新产品。"
        },
        {
            "start": 366.24,
            "end": 368.3,
            "text": "如果你的服务收费一万，"
        },
        {
            "start": 368.3,
            "end": 372.34,
            "text": "突然有人用AI做出了一个收费一千的替代品，"
        },
        {
            "start": 372.34,
            "end": 374.46,
            "text": "虽然功能不如你全面，"
        },
        {
            "start": 374.46,
            "end": 376.76,
            "text": "但对很多客户来说够用了。"
        },
        {
            "start": 376.76,
            "end": 377.92,
            "text": "这是颠覆的信号。"
        },
        {
            "start": 377.92,
            "end": 382.56,
            "text": "第二个信号：你的低端客户开始流失，但高端客户还在。"
        },
        {
            "start": 382.56,
            "end": 385.24,
            "text": "这恰好符合颠覆式创新的模式。"
        },
        {
            "start": 385.24,
            "end": 388.02,
            "text": "新进入者先从低端开始抢。"
        },
        {
            "start": 388.58,
            "end": 392.7,
            "text": "如果你只看高端客户还不错就觉得安全，那你就危险了。"
        },
        {
            "start": 392.7,
            "end": 396.74,
            "text": "第三个信号：行业外的玩家进入了你的领域。"
        },
        {
            "start": 396.74,
            "end": 398.96,
            "text": "他们不是传统的竞争对手，"
        },
        {
            "start": 398.96,
            "end": 400.82,
            "text": "他们可能是技术公司，"
        },
        {
            "start": 400.82,
            "end": 404.94,
            "text": "用AI从一个你没想到的角度切入你的市场。"
        },
        {
            "start": 404.94,
            "end": 406.82,
            "text": "好，总结一下。"
        },
        {
            "start": 406.82,
            "end": 408.76,
            "text": "颠覆式创新的核心逻辑："
        },
        {
            "start": 408.76,
            "end": 411.92,
            "text": "从低端或非消费者市场开始，"
        },
        {
            "start": 411.92,
            "end": 415.92,
            "text": "产品一开始\"不够好\"但\"够便宜够简单\"，"
        },
        {
            "start": 415.92,
            "end": 418.7,
            "text": "然后不断进步直到颠覆主流市场。"
        },
        {
            "start": 418.7,
            "end": 422.76,
            "text": "AI 加速颠覆的三个原因：降低进入门槛、"
        },
        {
            "start": 422.76,
            "end": 426.2,
            "text": "加速产品进化、创造新的非消费者市场。"
        },
        {
            "start": 426.2,
            "end": 429.82,
            "text": "应对颠覆的策略：主动颠覆自己、"
        },
        {
            "start": 429.82,
            "end": 432.8,
            "text": "关注\"够用\"的转折点、两条腿走路。"
        },
        {
            "start": 432.8,
            "end": 437.62,
            "text": "下一期我们聊设计思维：AI 如何增强创新的每一步。"
        },
        {
            "start": 437.62,
            "end": 439.76,
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
], navigation: { nextLessonUrl: "./lesson-innovation-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-02.html?entry={entry}", secondaryHref: "./lesson-innovation-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-01", coachSource: "./ai-coach.html?source=lesson-innovation-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于颠覆式创新：AI 如何加速颠覆周期的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "颠覆式创新：AI 如何加速颠覆周期", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
