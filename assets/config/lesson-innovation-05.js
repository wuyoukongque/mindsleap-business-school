(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第5课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第5课：AI 原生创业：从第一天就用 AI 构建",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep78-ai-native-startup/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 原生创业：从第一天就用 AI 构建", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-06.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "产品市场匹配：AI 产品的 PMF 有什么不同",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-innovation-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 5/12", "建议下一节：产品市场匹配：AI 产品的 PMF 有什么不同", '也可以先整理这一节'], nextHref: "./lesson-innovation-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-05", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson5", audioSource: './assets/audio/innovation-ep78-ai-native-startup.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep78-ai-native-startup.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep78-ai-native-startup/slide_01.png",
            "label": "AI 原生创业：从第一天就用 AI 构建",
            "caption": "这一节会帮助你系统理解：AI 原生创业：从第一天就用 AI 构建"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "收入做到几百万甚至上千万，团队还是一个人。 这不是科幻。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_04.png",
            "label": "关键判断一",
            "caption": "但你做一个\"专门帮律师写法律文书\"的 AI 工具，你对法律场景的理解就是你的护城河。 第二种模式：AI 服务。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_05.png",
            "label": "关键判断二",
            "caption": "如果 AI 在这个场景中的准确率只有百分之六十，那还不行。 你需要 AI 至少达到百分之八十五到九十以上的水平。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "通常的标准是：百分之八十五以上的情况下，AI 的输出不需要用户修改就可以直接使用。 如果达不到这个标准，用户会觉得\"用 AI 还不如自己做\"。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_07.png",
            "label": "本节行动提示",
            "caption": "设计好反馈机制，让用户愿意给反馈。 讲几个 AI 原生创业的注意事项。"
        },
        {
            "file": "innovation-ep78-ai-native-startup/slide_08.png",
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
            "end": 3.66,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.66,
            "end": 5.74,
            "text": "今天聊 AI 原生创业。"
        },
        {
            "start": 5.74,
            "end": 7.5,
            "text": "什么叫 AI 原生？"
        },
        {
            "start": 7.5,
            "end": 10.5,
            "text": "就是从公司成立的第一天起，"
        },
        {
            "start": 10.5,
            "end": 12.5,
            "text": "AI 就不是\"附加功能\"，"
        },
        {
            "start": 12.5,
            "end": 15.62,
            "text": "而是整个商业模式和运营体系的核心。"
        },
        {
            "start": 16.12,
            "end": 18.88,
            "text": "这跟\"用 AI 增强\"是不同的。"
        },
        {
            "start": 18.88,
            "end": 22.6,
            "text": "很多传统企业在现有业务上加了一些 AI 功能。"
        },
        {
            "start": 22.6,
            "end": 27.92,
            "text": "比如在客服系统上加了 AI 问答，在营销上用了 AI 生成内容。"
        },
        {
            "start": 27.92,
            "end": 29.24,
            "text": "这叫\"AI 增强\"。"
        },
        {
            "start": 29.24,
            "end": 33.22,
            "text": "AI 原生是从零开始就围绕 AI 来设计。"
        },
        {
            "start": 33.22,
            "end": 35.84,
            "text": "产品是为 AI 能力而设计的，"
        },
        {
            "start": 35.84,
            "end": 38.28,
            "text": "流程是为 AI 效率而设计的，"
        },
        {
            "start": 38.28,
            "end": 40.62,
            "text": "组织是为人机协作而设计的。"
        },
        {
            "start": 40.62,
            "end": 46.0,
            "text": "今天我们来拆解 AI 原生创业的核心逻辑和实操方法。"
        },
        {
            "start": 46.0,
            "end": 49.86,
            "text": "先讲 AI 原生创业和传统创业的几个根本区别。"
        },
        {
            "start": 49.86,
            "end": 52.14,
            "text": "第一个区别：团队规模。"
        },
        {
            "start": 52.14,
            "end": 56.4,
            "text": "传统创业的思路是：业务增长，就要招更多的人。"
        },
        {
            "start": 56.4,
            "end": 59.0,
            "text": "收入翻倍，人头也差不多翻倍。"
        },
        {
            "start": 59.0,
            "end": 61.42,
            "text": "AI 原生创业完全不同。"
        },
        {
            "start": 61.42,
            "end": 63.18,
            "text": "你可以做到\"收入增长"
        },
        {
            "start": 63.38,
            "end": 67.98,
            "text": "但人数不增长\"甚至\"收入大幅增长而人数只少量增加\"。"
        },
        {
            "start": 67.98,
            "end": 70.3,
            "text": "因为大量的工作由 AI 完成。"
        },
        {
            "start": 70.3,
            "end": 72.76,
            "text": "最极端的例子就是\"一人公司\"。"
        },
        {
            "start": 72.76,
            "end": 76.54,
            "text": "一个人用 AI 做产品、做营销、做客服、做财务。"
        },
        {
            "start": 76.54,
            "end": 80.52,
            "text": "收入做到几百万甚至上千万，团队还是一个人。"
        },
        {
            "start": 80.52,
            "end": 81.2,
            "text": "这不是科幻。"
        },
        {
            "start": 81.2,
            "end": 82.82,
            "text": "已经有很多这样的案例了。"
        },
        {
            "start": 82.82,
            "end": 86.4,
            "text": "一个人用 AI 做了一个SaaS工具，年收入几百万。"
        },
        {
            "start": 86.4,
            "end": 89.4,
            "text": "一个人用 AI 做内容创业，月收入几十万。"
        },
        {
            "start": 89.4,
            "end": 91.78,
            "text": "第二个区别：产品开发速度。"
        },
        {
            "start": 91.78,
            "end": 95.86,
            "text": "传统创业开发一个产品可能需要几个月。"
        },
        {
            "start": 95.86,
            "end": 97.18,
            "text": "AI 原生创业，"
        },
        {
            "start": 97.18,
            "end": 100.16,
            "text": "因为大量使用 AI 编程和 AI 设计工具，"
        },
        {
            "start": 100.16,
            "end": 103.86,
            "text": "产品的开发周期可以缩短到几天到几周。"
        },
        {
            "start": 103.86,
            "end": 106.62,
            "text": "第三个区别：边际成本结构。"
        },
        {
            "start": 106.62,
            "end": 110.54,
            "text": "传统的服务型企业，每服务一个客户都需要人力成本。"
        },
        {
            "start": 110.54,
            "end": 111.7,
            "text": "AI 原生企业，"
        },
        {
            "start": 111.7,
            "end": 114.96,
            "text": "服务一个客户和服务一万个客户的成本差别不大。"
        },
        {
            "start": 114.96,
            "end": 117.06,
            "text": "因为服务主要由 AI 提供。"
        },
        {
            "start": 117.06,
            "end": 119.2,
            "text": "边际成本接近于零。"
        },
        {
            "start": 119.2,
            "end": 121.92,
            "text": "AI 原生创业有几种常见的模式。"
        },
        {
            "start": 121.92,
            "end": 123.88,
            "text": "第一种模式：AI 产品。"
        },
        {
            "start": 123.88,
            "end": 126.86,
            "text": "直接把 AI 能力做成产品卖给用户。"
        },
        {
            "start": 126.86,
            "end": 131.54,
            "text": "比如 AI 写作工具、AI 设计工具、AI 数据分析工具。"
        },
        {
            "start": 131.54,
            "end": 134.18,
            "text": "这种模式的核心竞争力是什么？"
        },
        {
            "start": 134.18,
            "end": 135.44,
            "text": "不是 AI 本身。"
        },
        {
            "start": 135.44,
            "end": 138.18,
            "text": "因为底层的 AI 模型大家都可以用。"
        },
        {
            "start": 138.18,
            "end": 139.8,
            "text": "核心竞争力是："
        },
        {
            "start": 139.8,
            "end": 143.54,
            "text": "对垂直场景的深度理解加上优秀的产品体验。"
        },
        {
            "start": 143.54,
            "end": 149.22,
            "text": "你做一个通用的 AI 写作工具，跟大厂竞争毫无胜算。"
        },
        {
            "start": 149.22,
            "end": 152.94,
            "text": "但你做一个\"专门帮律师写法律文书\"的 AI 工具，"
        },
        {
            "start": 152.94,
            "end": 156.26,
            "text": "你对法律场景的理解就是你的护城河。"
        },
        {
            "start": 156.26,
            "end": 158.94,
            "text": "第二种模式：AI 服务。"
        },
        {
            "start": 158.94,
            "end": 162.66,
            "text": "用 AI 来提供过去需要大量人力的服务。"
        },
        {
            "start": 162.66,
            "end": 166.36,
            "text": "比如 AI 记账服务、AI 翻译服务、AI 咨询服务。"
        },
        {
            "start": 166.36,
            "end": 168.18,
            "text": "这种模式的精髓是："
        },
        {
            "start": 168.18,
            "end": 169.92,
            "text": "对外呈现的是\"服务\"，"
        },
        {
            "start": 169.92,
            "end": 172.72,
            "text": "客户不需要关心背后是人还是 AI。"
        },
        {
            "start": 172.72,
            "end": 175.52,
            "text": "但因为 AI 做了大部分工作，"
        },
        {
            "start": 175.52,
            "end": 178.66,
            "text": "你的成本远低于传统的服务提供商。"
        },
        {
            "start": 178.66,
            "end": 182.22,
            "text": "你可以用更低的价格服务更广的客户群，"
        },
        {
            "start": 182.22,
            "end": 186.24,
            "text": "或者用同样的价格提供更快更好的服务。"
        },
        {
            "start": 186.24,
            "end": 188.92,
            "text": "第三种模式：AI 赋能的平台。"
        },
        {
            "start": 188.92,
            "end": 192.5,
            "text": "搭建一个平台，用 AI 来连接供需双方。"
        },
        {
            "start": 192.5,
            "end": 195.64,
            "text": "AI 做匹配、做质量控制、做定价。"
        },
        {
            "start": 195.64,
            "end": 198.96,
            "text": "好，怎么从零开始做一个 AI 原生创业？"
        },
        {
            "start": 198.96,
            "end": 200.8,
            "text": "我给你一个实操框架。"
        },
        {
            "start": 200.8,
            "end": 204.32,
            "text": "第一步：找到一个 AI 可以十倍提升的场景。"
        },
        {
            "start": 204.84,
            "end": 207.96,
            "text": "不是所有场景都适合 AI 原生创业。"
        },
        {
            "start": 207.96,
            "end": 210.36,
            "text": "你要找的场景需要满足两个条件。"
        },
        {
            "start": 210.98,
            "end": 214.82,
            "text": "条件一，现有的解决方案效率低或者成本高。"
        },
        {
            "start": 214.82,
            "end": 216.68,
            "text": "如果现有方案已经很好了，"
        },
        {
            "start": 216.68,
            "end": 219.54,
            "text": "AI 只能提升百分之十二十，那不够。"
        },
        {
            "start": 219.54,
            "end": 222.62,
            "text": "你要找那些 AI 可以带来十倍提升的场景。"
        },
        {
            "start": 222.62,
            "end": 226.9,
            "text": "条件二，AI 的技术能力已经达到了\"够用\"的水平。"
        },
        {
            "start": 226.9,
            "end": 231.6,
            "text": "如果 AI 在这个场景中的准确率只有百分之六十，那还不行。"
        },
        {
            "start": 231.6,
            "end": 235.52,
            "text": "你需要 AI 至少达到百分之八十五到九十以上的水平。"
        },
        {
            "start": 235.52,
            "end": 236.78,
            "text": "怎么找？"
        },
        {
            "start": 236.78,
            "end": 239.32,
            "text": "回到上一期讲的第一性原理思考法。"
        },
        {
            "start": 239.32,
            "end": 242.18,
            "text": "选一个你熟悉的行业，列出隐含假设，"
        },
        {
            "start": 242.18,
            "end": 245.18,
            "text": "看 AI 让哪些假设失效了。"
        },
        {
            "start": 245.18,
            "end": 246.9,
            "text": "第二步：定义你的\"AI 架构\"。"
        },
        {
            "start": 246.9,
            "end": 250.18,
            "text": "你的产品或服务中，哪些环节用 AI？"
        },
        {
            "start": 250.4,
            "end": 251.82,
            "text": "哪些环节用人？"
        },
        {
            "start": 251.82,
            "end": 253.66,
            "text": "人和 AI 的接口是什么？"
        },
        {
            "start": 253.66,
            "end": 257.24,
            "text": "一个好的 AI 架构应该是：AI 做标准化的、"
        },
        {
            "start": 257.24,
            "end": 259.84,
            "text": "可规模化的、不需要创造力的工作。"
        },
        {
            "start": 259.84,
            "end": 265.32,
            "text": "人做需要判断的、需要创意的、需要情感连接的工作。"
        },
        {
            "start": 265.32,
            "end": 269.36,
            "text": "第三步：用最快的速度做出最小可行产品。"
        },
        {
            "start": 269.36,
            "end": 271.86,
            "text": "用 AI 编程工具搭建产品。"
        },
        {
            "start": 271.86,
            "end": 274.12,
            "text": "用 AI 设计工具做界面。"
        },
        {
            "start": 274.12,
            "end": 275.84,
            "text": "用 AI 写文案。"
        },
        {
            "start": 275.84,
            "end": 279.9,
            "text": "目标是一到两周内有一个可以给用户体验的产品。"
        },
        {
            "start": 279.9,
            "end": 282.6,
            "text": "第四步：验证两个关键指标。"
        },
        {
            "start": 282.6,
            "end": 286.44,
            "text": "AI 原生创业需要验证两个特殊的指标。"
        },
        {
            "start": 286.44,
            "end": 291.16,
            "text": "第一个指标：AI 的输出质量是否达到用户可接受的水平。"
        },
        {
            "start": 291.16,
            "end": 293.66,
            "text": "这是 AI 产品特有的挑战。"
        },
        {
            "start": 293.66,
            "end": 297.68,
            "text": "传统产品，功能就在那里，能用就是能用。"
        },
        {
            "start": 297.68,
            "end": 300.62,
            "text": "但 AI 产品的输出质量是有波动的。"
        },
        {
            "start": 300.62,
            "end": 304.4,
            "text": "你要确保 AI 的输出在大部分情况下让用户满意。"
        },
        {
            "start": 304.4,
            "end": 306.38,
            "text": "什么叫\"大部分情况下满意\"？"
        },
        {
            "start": 306.38,
            "end": 307.86,
            "text": "通常的标准是："
        },
        {
            "start": 307.86,
            "end": 310.14,
            "text": "百分之八十五以上的情况下，"
        },
        {
            "start": 310.14,
            "end": 313.68,
            "text": "AI 的输出不需要用户修改就可以直接使用。"
        },
        {
            "start": 313.68,
            "end": 317.42,
            "text": "如果达不到这个标准，用户会觉得\"用 AI 还不如自己做\"。"
        },
        {
            "start": 317.42,
            "end": 320.98,
            "text": "第二个指标：用户是否愿意持续使用并付费。"
        },
        {
            "start": 320.98,
            "end": 324.26,
            "text": "很多人第一次用 AI 产品会觉得\"哇好厉害\"。"
        },
        {
            "start": 324.26,
            "end": 328.1,
            "text": "但新鲜感过后，他们会回到旧的工作方式。"
        },
        {
            "start": 328.1,
            "end": 332.0,
            "text": "你要看的是一周后、一个月后，用户还在用吗？"
        },
        {
            "start": 332.0,
            "end": 333.4,
            "text": "用的频率是多少？"
        },
        {
            "start": 333.4,
            "end": 335.64,
            "text": "第五步：建立数据飞轮。"
        },
        {
            "start": 335.64,
            "end": 339.44,
            "text": "AI 原生企业最强大的护城河是数据飞轮。"
        },
        {
            "start": 339.44,
            "end": 342.38,
            "text": "用户使用你的产品就会产生数据。"
        },
        {
            "start": 342.38,
            "end": 344.94,
            "text": "这些数据帮你优化 AI 模型。"
        },
        {
            "start": 344.94,
            "end": 347.52,
            "text": "更好的模型带来更好的产品体验。"
        },
        {
            "start": 347.52,
            "end": 349.94,
            "text": "更好的体验吸引更多用户。"
        },
        {
            "start": 349.94,
            "end": 352.36,
            "text": "更多用户产生更多数据。"
        },
        {
            "start": 352.36,
            "end": 353.36,
            "text": "循环往复。"
        },
        {
            "start": 353.36,
            "end": 357.34,
            "text": "数据飞轮是 AI 原生企业独有的竞争优势。"
        },
        {
            "start": 357.34,
            "end": 359.28,
            "text": "传统企业没有这个。"
        },
        {
            "start": 359.28,
            "end": 361.44,
            "text": "你的竞争对手可以抄你的功能，"
        },
        {
            "start": 361.44,
            "end": 363.76,
            "text": "但他抄不走你的数据和模型。"
        },
        {
            "start": 363.76,
            "end": 365.34,
            "text": "怎么建立数据飞轮？"
        },
        {
            "start": 365.74,
            "end": 369.4200000000001,
            "text": "关键是设计好产品的数据收集机制。"
        },
        {
            "start": 369.4200000000001,
            "end": 372.4,
            "text": "第一，用户的使用行为本身就是数据。"
        },
        {
            "start": 372.4,
            "end": 374.48,
            "text": "他们选择了 AI 的哪个建议、"
        },
        {
            "start": 374.48,
            "end": 376.62,
            "text": "修改了 AI 输出的哪个部分、"
        },
        {
            "start": 376.62,
            "end": 379.1,
            "text": "对哪些结果给了正面反馈。"
        },
        {
            "start": 379.1,
            "end": 381.9,
            "text": "这些隐性数据非常有价值。"
        },
        {
            "start": 381.9,
            "end": 384.2,
            "text": "第二，用户主动提供的反馈。"
        },
        {
            "start": 384.2,
            "end": 386.24,
            "text": "点赞、踩、评分、纠错。"
        },
        {
            "start": 386.24,
            "end": 389.54,
            "text": "设计好反馈机制，让用户愿意给反馈。"
        },
        {
            "start": 389.54,
            "end": 392.22,
            "text": "讲几个 AI 原生创业的注意事项。"
        },
        {
            "start": 392.22,
            "end": 396.9,
            "text": "第一个注意事项：不要依赖单一的 AI 模型提供商。"
        },
        {
            "start": 396.9,
            "end": 400.72,
            "text": "如果你的整个产品都依赖某一个大模型的接口，"
        },
        {
            "start": 400.72,
            "end": 404.28,
            "text": "你的命运就掌握在这个大模型公司手里。"
        },
        {
            "start": 404.28,
            "end": 408.34,
            "text": "它涨价你就涨成本，它改了接口你的产品可能就坏了。"
        },
        {
            "start": 408.34,
            "end": 410.2,
            "text": "建议做\"模型抽象层\"。"
        },
        {
            "start": 410.2,
            "end": 413.76,
            "text": "你的产品和底层模型之间有一层中间层，"
        },
        {
            "start": 413.76,
            "end": 416.0,
            "text": "可以灵活切换不同的模型。"
        },
        {
            "start": 416.0,
            "end": 419.26,
            "text": "第二个注意事项：用户预期管理。"
        },
        {
            "start": 419.26,
            "end": 420.76,
            "text": "AI 不是完美的。"
        },
        {
            "start": 420.76,
            "end": 422.42,
            "text": "它会犯错、会\"胡说八道\"。"
        },
        {
            "start": 422.42,
            "end": 426.1,
            "text": "你必须在产品设计中管理好用户的预期。"
        },
        {
            "start": 426.1,
            "end": 429.04,
            "text": "让用户知道 AI 的输出需要审核，"
        },
        {
            "start": 429.04,
            "end": 432.4,
            "text": "在关键环节设置人工确认的步骤。"
        },
        {
            "start": 432.4,
            "end": 435.98,
            "text": "第三个注意事项：关注合规和伦理。"
        },
        {
            "start": 435.98,
            "end": 438.7,
            "text": "AI 产品涉及数据隐私、"
        },
        {
            "start": 438.7,
            "end": 440.68,
            "text": "输出的准确性和可靠性、"
        },
        {
            "start": 440.68,
            "end": 442.16,
            "text": "可能的偏见等问题。"
        },
        {
            "start": 442.16,
            "end": 444.74,
            "text": "在设计产品的时候就要考虑这些。"
        },
        {
            "start": 444.74,
            "end": 447.16,
            "text": "不要等到出了问题才去处理。"
        },
        {
            "start": 447.16,
            "end": 448.34,
            "text": "好，总结一下。"
        },
        {
            "start": 448.34,
            "end": 451.44,
            "text": "AI 原生创业和传统创业的三大区别："
        },
        {
            "start": 451.44,
            "end": 455.38,
            "text": "团队更小、开发更快、边际成本接近零。"
        },
        {
            "start": 455.38,
            "end": 460.66,
            "text": "三种常见模式：AI 产品、AI 服务、AI 赋能平台。"
        },
        {
            "start": 460.66,
            "end": 464.0,
            "text": "五步实操框架：找十倍提升场景、"
        },
        {
            "start": 464.0,
            "end": 467.74,
            "text": "定义 AI 架构、快速做出最小可行产品、"
        },
        {
            "start": 467.74,
            "end": 470.86,
            "text": "验证质量和付费意愿、建立数据飞轮。"
        },
        {
            "start": 471.38,
            "end": 474.06,
            "text": "三个注意事项：不依赖单一模型、"
        },
        {
            "start": 474.06,
            "end": 476.9200000000001,
            "text": "管理用户预期、关注合规伦理。"
        },
        {
            "start": 476.9200000000001,
            "end": 481.4,
            "text": "下一期我们聊产品市场匹配：AI 产品的 PMF 有什么不同。"
        },
        {
            "start": 481.4,
            "end": 483.0,
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
], navigation: { nextLessonUrl: "./lesson-innovation-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-06.html?entry={entry}", secondaryHref: "./lesson-innovation-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-05", coachSource: "./ai-coach.html?source=lesson-innovation-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 原生创业：从第一天就用 AI 构建的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 原生创业：从第一天就用 AI 构建", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
