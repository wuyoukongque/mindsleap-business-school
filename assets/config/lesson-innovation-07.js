(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第7课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第7课：从零到一：AI 时代的创业路径",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep80-zero-to-one/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：从零到一：AI 时代的创业路径", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-08.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-innovation-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 7/12", "建议下一节：失败管理：从失败中提取价值", '也可以先整理这一节'], nextHref: "./lesson-innovation-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-07", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson7", audioSource: './assets/audio/innovation-ep80-zero-to-one.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep80-zero-to-one.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep80-zero-to-one/slide_01.png",
            "label": "从零到一：AI 时代的创业路径",
            "caption": "这一节会帮助你系统理解：从零到一：AI 时代的创业路径"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "你的想法跟现有方案的差异是什么？ 第二，用户调研。"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_04.png",
            "label": "关键判断一",
            "caption": "用现有的大模型接口，搭一个最简单的原型，看看 AI 在你的场景中的实际表现。 准确率多少？"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_05.png",
            "label": "关键判断二",
            "caption": "客服方面：AI 客服处理大部分的用户咨询。 这些工具加在一起，一个人就可以扮演过去需要五到八个人的角色。"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "AI 产品天然适合\"产品驱动增长\"的模式。 让用户免费体验产品的基础功能，体验好了自然会升级到付费版，还会推荐给同事朋友。"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_07.png",
            "label": "本节行动提示",
            "caption": "你选错了问题，AI 再强也没用。 第二个能力：人机协作能力。"
        },
        {
            "file": "innovation-ep80-zero-to-one/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.56,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.56,
            "end": 3.88,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.88,
            "end": 6.873333333333335,
            "text": "今天聊从零到一的创业路径。"
        },
        {
            "start": 6.873333333333335,
            "end": 9.24,
            "text": "创业不是一个点，而是一段旅程。"
        },
        {
            "start": 9.24,
            "end": 13.22,
            "text": "每个阶段有不同的任务、不同的挑战、不同的优先级。"
        },
        {
            "start": 13.22,
            "end": 16.32,
            "text": "AI 时代的创业路径跟过去有很大不同。"
        },
        {
            "start": 16.32,
            "end": 20.58,
            "text": "最大的不同是：创始人一个人可以做的事情比过去多得多。"
        },
        {
            "start": 20.58,
            "end": 24.68,
            "text": "AI 工具让创始人在早期阶段不需要那么多人、"
        },
        {
            "start": 24.68,
            "end": 25.88,
            "text": "不需要那么多钱。"
        },
        {
            "start": 25.88,
            "end": 30.560000000000002,
            "text": "今天我们来梳理 AI 时代创业从零到一的完整路径。"
        },
        {
            "start": 30.560000000000002,
            "end": 33.68,
            "text": "我把创业的早期阶段分成四个阶段。"
        },
        {
            "start": 33.68,
            "end": 35.6,
            "text": "第一个阶段：想法阶段。"
        },
        {
            "start": 35.6,
            "end": 39.18,
            "text": "你有了一个创业想法，但还没有开始做任何事情。"
        },
        {
            "start": 39.18,
            "end": 41.47555555555555,
            "text": "这个阶段最重要的任务是什么？"
        },
        {
            "start": 41.47555555555555,
            "end": 42.56,
            "text": "验证想法。"
        },
        {
            "start": 42.56,
            "end": 46.74,
            "text": "不是开始做产品，是先验证你的想法有没有市场。"
        },
        {
            "start": 46.74,
            "end": 50.44,
            "text": "很多创业者在这个阶段犯的最大错误是\""
        },
        {
            "start": 50.44,
            "end": 52.0,
            "text": "爱上自己的想法\"。"
        },
        {
            "start": 52.0,
            "end": 54.98,
            "text": "觉得自己的想法太棒了，迫不及待想做出来。"
        },
        {
            "start": 54.98,
            "end": 58.260000000000005,
            "text": "但没有先问市场：有人需要这个吗？"
        },
        {
            "start": 58.260000000000005,
            "end": 61.48,
            "text": "AI 在这个阶段可以帮你做几件事。"
        },
        {
            "start": 61.48,
            "end": 63.04,
            "text": "第一，市场调研。"
        },
        {
            "start": 63.04,
            "end": 65.9,
            "text": "让 AI 帮你分析这个市场的规模、"
        },
        {
            "start": 65.9,
            "end": 68.8,
            "text": "竞争格局、现有的解决方案。"
        },
        {
            "start": 68.8,
            "end": 71.78,
            "text": "你的想法跟现有方案的差异是什么？"
        },
        {
            "start": 71.78,
            "end": 73.66,
            "text": "第二，用户调研。"
        },
        {
            "start": 73.66,
            "end": 78.78,
            "text": "用 AI 分析目标用户群体在社交媒体和论坛上讨论的痛点。"
        },
        {
            "start": 78.78,
            "end": 81.54,
            "text": "他们对现有解决方案的不满是什么？"
        },
        {
            "start": 81.54,
            "end": 83.72,
            "text": "第三，竞品分析。"
        },
        {
            "start": 83.72,
            "end": 85.8,
            "text": "让 AI 帮你全面分析竞品。"
        },
        {
            "start": 85.8,
            "end": 89.14,
            "text": "他们的产品功能、定价、用户评价、优缺点。"
        },
        {
            "start": 89.14,
            "end": 91.82,
            "text": "找到竞品没有覆盖到的需求空白。"
        },
        {
            "start": 91.82,
            "end": 96.22,
            "text": "这些调研过去可能需要一两周甚至外包给调研公司。"
        },
        {
            "start": 96.22,
            "end": 100.26,
            "text": "现在 AI 可以帮你在一两天内完成初步分析。"
        },
        {
            "start": 100.26,
            "end": 102.24,
            "text": "第二个阶段：验证阶段。"
        },
        {
            "start": 102.24,
            "end": 105.66999999999999,
            "text": "你已经有了初步的方向，开始验证核心假设。"
        },
        {
            "start": 105.66999999999999,
            "end": 110.22,
            "text": "这个阶段的核心任务是用最小的成本验证两个假设。"
        },
        {
            "start": 110.22,
            "end": 114.98,
            "text": "假设一：用户真的有这个痛点，而且痛到愿意付钱解决。"
        },
        {
            "start": 114.98,
            "end": 116.03999999999999,
            "text": "怎么验证？"
        },
        {
            "start": 116.04,
            "end": 119.58,
            "text": "最直接的方法是跟潜在用户面对面聊。"
        },
        {
            "start": 119.58,
            "end": 121.94,
            "text": "不是问\"你觉得我这个想法好不好\"，"
        },
        {
            "start": 121.94,
            "end": 124.12,
            "text": "因为大多数人会说好话。"
        },
        {
            "start": 124.12,
            "end": 127.46,
            "text": "而是问\"你现在怎么解决这个问题的？"
        },
        {
            "start": 127.46,
            "end": 129.06,
            "text": "花了多少时间和钱？"
        },
        {
            "start": 129.06,
            "end": 132.6,
            "text": "如果有一个工具能帮你解决，你愿意付多少钱？"
        },
        {
            "start": 132.6,
            "end": 133.01999999999998,
            "text": "\""
        },
        {
            "start": 133.01999999999998,
            "end": 137.4,
            "text": "假设二：AI 技术能够以用户可接受的质量完成这个任务。"
        },
        {
            "start": 137.4,
            "end": 138.44,
            "text": "怎么验证？"
        },
        {
            "start": 138.44,
            "end": 141.16,
            "text": "做一个快速的技术可行性测试。"
        },
        {
            "start": 141.16,
            "end": 142.82,
            "text": "用现有的大模型接口，"
        },
        {
            "start": 142.82,
            "end": 144.26,
            "text": "搭一个最简单的原型，"
        },
        {
            "start": 144.26,
            "end": 147.20666666666665,
            "text": "看看 AI 在你的场景中的实际表现。"
        },
        {
            "start": 147.20666666666665,
            "end": 148.36,
            "text": "准确率多少？"
        },
        {
            "start": 148.36,
            "end": 149.42,
            "text": "速度如何？"
        },
        {
            "start": 149.42,
            "end": 151.36,
            "text": "有哪些明显的局限？"
        },
        {
            "start": 151.96,
            "end": 155.98,
            "text": "如果 AI 的表现远低于预期，不要放弃整个想法。"
        },
        {
            "start": 155.98,
            "end": 156.84,
            "text": "调整方案。"
        },
        {
            "start": 156.84,
            "end": 161.08,
            "text": "也许不是让 AI 完全替代人，而是让 AI 做其中一部分。"
        },
        {
            "start": 161.08,
            "end": 163.58,
            "text": "找到 AI \"够用\"的那个切入点。"
        },
        {
            "start": 163.58,
            "end": 165.94,
            "text": "第三个阶段：产品阶段。"
        },
        {
            "start": 165.94,
            "end": 168.56,
            "text": "假设验证通过了，开始做产品。"
        },
        {
            "start": 168.56,
            "end": 171.94,
            "text": "这个阶段的核心任务是做出一个最小可行产品，"
        },
        {
            "start": 171.94,
            "end": 173.54,
            "text": "获取第一批用户。"
        },
        {
            "start": 173.54,
            "end": 177.5,
            "text": "AI 时代的创始人在产品阶段有一个巨大的优势："
        },
        {
            "start": 177.5,
            "end": 181.28,
            "text": "你可以一个人或者极小的团队把产品做出来。"
        },
        {
            "start": 181.28,
            "end": 185.44,
            "text": "一个典型的 AI 时代创始人的工具栈是什么样的？"
        },
        {
            "start": 185.44,
            "end": 188.44,
            "text": "编程方面：AI 编程助手帮你写代码。"
        },
        {
            "start": 188.44,
            "end": 190.54,
            "text": "很多创始人即使不是技术背景，"
        },
        {
            "start": 190.54,
            "end": 193.5,
            "text": "也可以借助 AI 编程工具搭建产品。"
        },
        {
            "start": 193.5,
            "end": 197.42,
            "text": "设计方面：AI 设计工具生成界面设计和视觉素材。"
        },
        {
            "start": 197.42,
            "end": 200.86,
            "text": "内容方面：AI 写作工具生成产品文案、"
        },
        {
            "start": 200.86,
            "end": 202.50666666666666,
            "text": "营销内容、帮助文档。"
        },
        {
            "start": 202.50666666666666,
            "end": 206.52,
            "text": "数据方面：AI 分析工具帮你搭建数据追踪和分析。"
        },
        {
            "start": 206.52,
            "end": 210.69,
            "text": "客服方面：AI 客服处理大部分的用户咨询。"
        },
        {
            "start": 210.69,
            "end": 212.5,
            "text": "这些工具加在一起，"
        },
        {
            "start": 212.5,
            "end": 216.5,
            "text": "一个人就可以扮演过去需要五到八个人的角色。"
        },
        {
            "start": 216.5,
            "end": 219.1,
            "text": "不是说每个方面都做到专业水平，"
        },
        {
            "start": 219.1,
            "end": 222.18,
            "text": "但足够把产品做出来并推向市场。"
        },
        {
            "start": 222.18,
            "end": 226.08,
            "text": "但有一件事 AI 做不了：跟用户的深度交流。"
        },
        {
            "start": 226.08,
            "end": 228.7,
            "text": "你必须亲自跟每一个早期用户聊。"
        },
        {
            "start": 228.7,
            "end": 233.0,
            "text": "了解他们的真实感受、真实需求、真实的使用场景。"
        },
        {
            "start": 233.0,
            "end": 236.54,
            "text": "这些信息是你做产品决策最重要的输入。"
        },
        {
            "start": 236.54,
            "end": 241.2,
            "text": "在产品阶段，创始人最应该花时间的两件事。"
        },
        {
            "start": 241.2,
            "end": 243.56,
            "text": "第一，用 AI 快速迭代产品。"
        },
        {
            "start": 243.56,
            "end": 245.7,
            "text": "第二，亲自跟用户深度交流。"
        },
        {
            "start": 245.7,
            "end": 247.76,
            "text": "第四个阶段：增长阶段。"
        },
        {
            "start": 247.76,
            "end": 251.52,
            "text": "你找到了产品市场匹配，开始加速增长。"
        },
        {
            "start": 251.52,
            "end": 255.16000000000003,
            "text": "这个阶段的核心任务是建立可复制的增长引擎。"
        },
        {
            "start": 255.16000000000003,
            "end": 258.20000000000005,
            "text": "AI 时代的增长有几个特点。"
        },
        {
            "start": 258.20000000000005,
            "end": 261.4,
            "text": "第一，内容驱动增长更容易了。"
        },
        {
            "start": 261.4,
            "end": 264.08,
            "text": "AI 让你可以大规模地生成高质量的内容。"
        },
        {
            "start": 264.08,
            "end": 268.4,
            "text": "博客文章、社交媒体内容、视频脚本、用户案例。"
        },
        {
            "start": 268.4,
            "end": 272.3,
            "text": "内容营销是很多产品最有效的获客渠道，"
        },
        {
            "start": 272.3,
            "end": 275.14,
            "text": "AI 让你的内容产出能力提升了十倍。"
        },
        {
            "start": 275.14,
            "end": 277.94,
            "text": "第二，产品驱动增长更强了。"
        },
        {
            "start": 277.94,
            "end": 280.88,
            "text": "AI 产品天然适合\"产品驱动增长\"的模式。"
        },
        {
            "start": 280.88,
            "end": 283.7,
            "text": "让用户免费体验产品的基础功能，"
        },
        {
            "start": 283.7,
            "end": 286.08,
            "text": "体验好了自然会升级到付费版，"
        },
        {
            "start": 286.08,
            "end": 287.96,
            "text": "还会推荐给同事朋友。"
        },
        {
            "start": 288.36,
            "end": 290.81999999999994,
            "text": "第三，AI 可以帮你做精细化运营。"
        },
        {
            "start": 290.82,
            "end": 294.59333333333336,
            "text": "用户分群、个性化沟通、流失预警、自动化营销。"
        },
        {
            "start": 294.59333333333336,
            "end": 298.06,
            "text": "这些在过去需要一个运营团队来做的事情，"
        },
        {
            "start": 298.06,
            "end": 300.66,
            "text": "AI 可以帮一个人搞定大部分。"
        },
        {
            "start": 300.66,
            "end": 305.18,
            "text": "增长阶段有一个关键决策：什么时候开始扩大团队。"
        },
        {
            "start": 305.18,
            "end": 308.72,
            "text": "AI 原生创业的好处是你不需要太早招人。"
        },
        {
            "start": 308.72,
            "end": 313.24,
            "text": "但当增长速度超过了你一个人或小团队的承载能力时，"
        },
        {
            "start": 313.24,
            "end": 315.1,
            "text": "就需要扩大团队了。"
        },
        {
            "start": 315.1,
            "end": 317.14,
            "text": "扩大团队的信号是什么？"
        },
        {
            "start": 317.14,
            "end": 319.0799999999999,
            "text": "第一，你发现自己成了瓶颈。"
        },
        {
            "start": 319.08,
            "end": 322.92,
            "text": "很多事情等着你做，但你一天只有二十四小时。"
        },
        {
            "start": 322.92,
            "end": 327.48,
            "text": "第二，有些事情需要专业深度，AI 加你已经不够了。"
        },
        {
            "start": 327.48,
            "end": 330.73,
            "text": "第三，增长机会很大但你来不及抓。"
        },
        {
            "start": 330.73,
            "end": 333.98,
            "text": "讲一下 AI 时代创始人最重要的几个能力。"
        },
        {
            "start": 333.98,
            "end": 336.34,
            "text": "第一个能力：问题定义能力。"
        },
        {
            "start": 336.34,
            "end": 337.65999999999997,
            "text": "技术不是难点了。"
        },
        {
            "start": 337.66,
            "end": 340.06,
            "text": "AI 让技术变得普及化。"
        },
        {
            "start": 340.06,
            "end": 343.7,
            "text": "真正稀缺的是\"找到正确的问题来解决\"的能力。"
        },
        {
            "start": 343.7,
            "end": 346.24,
            "text": "你选对了问题，AI 帮你解决。"
        },
        {
            "start": 346.24,
            "end": 349.04,
            "text": "你选错了问题，AI 再强也没用。"
        },
        {
            "start": 349.04,
            "end": 351.64,
            "text": "第二个能力：人机协作能力。"
        },
        {
            "start": 351.64,
            "end": 354.76,
            "text": "知道什么事情让 AI 做、什么事情自己做。"
        },
        {
            "start": 354.76,
            "end": 359.2,
            "text": "能够高效地使用各种 AI 工具来放大自己的产出。"
        },
        {
            "start": 359.2,
            "end": 362.18,
            "text": "这是 AI 时代创始人最基础的能力。"
        },
        {
            "start": 362.18,
            "end": 364.84,
            "text": "第三个能力：快速学习能力。"
        },
        {
            "start": 364.84,
            "end": 368.98,
            "text": "AI 的能力在快速进步，新的工具和方法不断出现。"
        },
        {
            "start": 368.98,
            "end": 373.76,
            "text": "创始人需要保持学习，及时更新自己的工具栈和方法论。"
        },
        {
            "start": 373.76,
            "end": 376.48,
            "text": "第四个能力：讲故事的能力。"
        },
        {
            "start": 376.48,
            "end": 379.36,
            "text": "AI 越普及，产品的功能差异越小。"
        },
        {
            "start": 379.36,
            "end": 380.46,
            "text": "怎么脱颖而出？"
        },
        {
            "start": 380.46,
            "end": 381.98,
            "text": "靠品牌和故事。"
        },
        {
            "start": 381.98,
            "end": 383.31999999999994,
            "text": "你为什么创业？"
        },
        {
            "start": 383.32,
            "end": 385.58000000000004,
            "text": "你解决的是什么人的什么问题？"
        },
        {
            "start": 385.58000000000004,
            "end": 387.44,
            "text": "你跟别人有什么不同？"
        },
        {
            "start": 387.44,
            "end": 390.08,
            "text": "能把这些讲成一个打动人的故事，"
        },
        {
            "start": 390.08,
            "end": 393.72,
            "text": "对获客、融资、招人都非常重要。"
        },
        {
            "start": 393.72,
            "end": 394.84,
            "text": "好，总结一下。"
        },
        {
            "start": 394.84,
            "end": 397.1,
            "text": "AI 时代创业四阶段："
        },
        {
            "start": 397.1,
            "end": 399.5,
            "text": "想法阶段验证市场需求、"
        },
        {
            "start": 399.5,
            "end": 401.72,
            "text": "验证阶段测试核心假设、"
        },
        {
            "start": 401.72,
            "end": 405.62,
            "text": "产品阶段用 AI 快速构建加亲自跟用户聊、"
        },
        {
            "start": 405.62,
            "end": 408.76,
            "text": "增长阶段建立可复制的增长引擎。"
        },
        {
            "start": 408.76,
            "end": 412.38,
            "text": "AI 时代创始人四大能力：问题定义、"
        },
        {
            "start": 412.38,
            "end": 414.72,
            "text": "人机协作、快速学习、讲故事。"
        },
        {
            "start": 414.72,
            "end": 415.76,
            "text": "核心理念："
        },
        {
            "start": 415.76,
            "end": 418.5,
            "text": "AI 让创始人一个人可以做更多，"
        },
        {
            "start": 418.5,
            "end": 421.52,
            "text": "但跟用户的深度交流不能让 AI 代替。"
        },
        {
            "start": 422.0,
            "end": 425.86,
            "text": "下一期我们聊失败管理：从失败中提取价值。"
        },
        {
            "start": 425.86,
            "end": 427.6,
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
], navigation: { nextLessonUrl: "./lesson-innovation-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-08.html?entry={entry}", secondaryHref: "./lesson-innovation-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-07", coachSource: "./ai-coach.html?source=lesson-innovation-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于从零到一：AI 时代的创业路径的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "从零到一：AI 时代的创业路径", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
