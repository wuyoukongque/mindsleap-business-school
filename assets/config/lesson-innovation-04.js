(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第4课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第4课：第一性原理思维：AI 时代的创新基础",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep77-first-principles/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：第一性原理思维：AI 时代的创新基础", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-05.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 原生创业：从第一天就用 AI 构建",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-innovation-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 4/12", "建议下一节：AI 原生创业：从第一天就用 AI 构建", '也可以先整理这一节'], nextHref: "./lesson-innovation-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-04", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson4", audioSource: './assets/audio/innovation-ep77-first-principles.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep77-first-principles.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep77-first-principles/slide_01.png",
            "label": "第一性原理思维：AI 时代的创新基础",
            "caption": "这一节会帮助你系统理解：第一性原理思维：AI 时代的创新基础"
        },
        {
            "file": "innovation-ep77-first-principles/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep77-first-principles/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "但马斯克用第一性原理来思考。 他问：电池是由什么组成的？"
        },
        {
            "file": "innovation-ep77-first-principles/slide_04.png",
            "label": "关键判断一",
            "caption": "咨询公司需要很多顾问。 这是行业的基本假设。"
        },
        {
            "file": "innovation-ep77-first-principles/slide_05.png",
            "label": "关键判断二",
            "caption": "AI 恰好可以提供这些。 假设三：\"创业需要大量的启动资金和团队。"
        },
        {
            "file": "innovation-ep77-first-principles/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "\" 对每个假设问一遍：如果有一个足够好的 AI，这个假设还成立吗？ 菜单设计：AI 可以根据食材成本、销售数据、季节趋势自动优化菜单。"
        },
        {
            "file": "innovation-ep77-first-principles/slide_07.png",
            "label": "本节行动提示",
            "caption": "从第一性原理推导出来的方案，理论上可能很完美。 但实际执行中有很多约束：用户习惯、监管要求、基础设施限制、社会文化因素。"
        },
        {
            "file": "innovation-ep77-first-principles/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.54,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.98,
            "end": 3.6,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.6,
            "end": 5.76,
            "text": "今天聊第一性原理思维。"
        },
        {
            "start": 5.76,
            "end": 8.16,
            "text": "这个概念因为马斯克而广为人知，"
        },
        {
            "start": 8.16,
            "end": 11.38,
            "text": "但它其实源自两千多年前的亚里士多德。"
        },
        {
            "start": 11.38,
            "end": 14.68,
            "text": "第一性原理思维是最根本的创新思维方式。"
        },
        {
            "start": 14.68,
            "end": 16.46,
            "text": "什么是第一性原理？"
        },
        {
            "start": 16.6,
            "end": 17.36,
            "text": "简单说就是："
        },
        {
            "start": 17.36,
            "end": 19.62,
            "text": "回到事物最基本的事实和前提，"
        },
        {
            "start": 19.62,
            "end": 21.16,
            "text": "从那里开始推理，"
        },
        {
            "start": 21.58,
            "end": 23.16,
            "text": "而不是基于类比和经验。"
        },
        {
            "start": 23.68,
            "end": 26.08,
            "text": "大多数人思考问题是用类比。"
        },
        {
            "start": 26.08,
            "end": 27.54,
            "text": "\"别人怎么做的？"
        },
        {
            "start": 27.54,
            "end": 28.5,
            "text": "行业惯例是什么？"
        },
        {
            "start": 28.7,
            "end": 29.76,
            "text": "过去是怎么做的？"
        },
        {
            "start": 29.76,
            "end": 32.04,
            "text": "\"然后在此基础上做微调。"
        },
        {
            "start": 32.04,
            "end": 34.52,
            "text": "第一性原理的思考方式是："
        },
        {
            "start": 34.52,
            "end": 36.68,
            "text": "把所有的假设都剥掉，"
        },
        {
            "start": 36.68,
            "end": 38.56,
            "text": "回到最基本的事实。"
        },
        {
            "start": 38.56,
            "end": 42.76,
            "text": "然后问\"从这些基本事实出发，最好的做法是什么？"
        },
        {
            "start": 42.76,
            "end": 43.18,
            "text": "\""
        },
        {
            "start": 43.18,
            "end": 45.06,
            "text": "讲一个马斯克的经典例子。"
        },
        {
            "start": 45.06,
            "end": 47.6,
            "text": "他想做电动车，需要大量的电池。"
        },
        {
            "start": 47.6,
            "end": 50.16,
            "text": "当时电池的成本是每千瓦时六百美元。"
        },
        {
            "start": 50.16,
            "end": 51.58,
            "text": "如果按照这个成本来算，"
        },
        {
            "start": 51.58,
            "end": 53.36,
            "text": "电动车永远比燃油车贵，"
        },
        {
            "start": 53.5,
            "end": 55.16,
            "text": "没有商业可行性。"
        },
        {
            "start": 55.16,
            "end": 59.2,
            "text": "用类比思维来看，结论是：电池就是这么贵，做不了。"
        },
        {
            "start": 59.2,
            "end": 62.02,
            "text": "但马斯克用第一性原理来思考。"
        },
        {
            "start": 62.02,
            "end": 64.62,
            "text": "他问：电池是由什么组成的？"
        },
        {
            "start": 64.62,
            "end": 67.44,
            "text": "碳、镍、铝、钴，加上一些聚合物和钢壳。"
        },
        {
            "start": 67.44,
            "end": 70.72,
            "text": "这些原材料在商品市场上的价格是多少？"
        },
        {
            "start": 70.72,
            "end": 73.86,
            "text": "算下来大约每千瓦时八十美元。"
        },
        {
            "start": 73.86,
            "end": 78.26000000000002,
            "text": "也就是说，电池的原材料成本只有市场价格的七分之一。"
        },
        {
            "start": 78.26000000000002,
            "end": 81.32,
            "text": "中间六七倍的差距是因为制造工艺、"
        },
        {
            "start": 81.32,
            "end": 83.36000000000001,
            "text": "供应链效率和行业惯性。"
        },
        {
            "start": 83.36000000000001,
            "end": 86.6,
            "text": "这些都是可以被重新设计和优化的。"
        },
        {
            "start": 86.6,
            "end": 89.9,
            "text": "所以马斯克的结论是：电池成本可以大幅降低。"
        },
        {
            "start": 89.9,
            "end": 92.02,
            "text": "基于这个判断，他做了电动车。"
        },
        {
            "start": 92.02,
            "end": 95.58,
            "text": "事实证明，电池成本这些年一直在快速下降。"
        },
        {
            "start": 95.58,
            "end": 98.62,
            "text": "好，第一性原理在 AI 时代特别有价值。"
        },
        {
            "start": 99.08000000000001,
            "end": 99.48,
            "text": "为什么？"
        },
        {
            "start": 99.72,
            "end": 102.8,
            "text": "因为 AI 从根本上改变了很多\"基本事实\"。"
        },
        {
            "start": 102.8,
            "end": 104.78,
            "text": "过去的很多行业惯例、"
        },
        {
            "start": 104.78,
            "end": 106.52,
            "text": "商业模式和组织方式，"
        },
        {
            "start": 106.52,
            "end": 109.54,
            "text": "是基于一些\"隐含的假设\"建立的。"
        },
        {
            "start": 109.54,
            "end": 112.04,
            "text": "而 AI 正在让这些隐含假设失效。"
        },
        {
            "start": 112.04,
            "end": 113.98,
            "text": "我给大家举几个例子。"
        },
        {
            "start": 113.98,
            "end": 117.18,
            "text": "假设一：\"专业服务需要大量专业人才。"
        },
        {
            "start": 117.18,
            "end": 117.60000000000001,
            "text": "\""
        },
        {
            "start": 117.60000000000001,
            "end": 119.98,
            "text": "律师事务所需要很多律师。"
        },
        {
            "start": 119.98,
            "end": 122.52799999999999,
            "text": "会计事务所需要很多会计师。"
        },
        {
            "start": 122.52799999999999,
            "end": 124.54,
            "text": "咨询公司需要很多顾问。"
        },
        {
            "start": 124.54,
            "end": 126.58,
            "text": "这是行业的基本假设。"
        },
        {
            "start": 126.58,
            "end": 128.9,
            "text": "但 AI 让这个假设动摇了。"
        },
        {
            "start": 128.9,
            "end": 132.82,
            "text": "AI 可以做大量的法律文档审查、财务分析、市场调研。"
        },
        {
            "start": 132.82,
            "end": 136.86,
            "text": "一个人加上 AI，可能做到过去五个人的产出。"
        },
        {
            "start": 136.86,
            "end": 141.46,
            "text": "如果你从第一性原理来思考：客户需要的是什么？"
        },
        {
            "start": 141.46,
            "end": 146.14,
            "text": "是\"很多专业人才\"还是\"高质量的专业建议和方案\"？"
        },
        {
            "start": 146.14,
            "end": 147.4,
            "text": "当然是后者。"
        },
        {
            "start": 147.4,
            "end": 150.54,
            "text": "那如果 AI 可以帮一个人做到后者，"
        },
        {
            "start": 150.54,
            "end": 153.42,
            "text": "你为什么还需要传统的人力密集型组织？"
        },
        {
            "start": 153.42,
            "end": 157.32,
            "text": "假设二：\"教育需要老师在教室里面对面教。"
        },
        {
            "start": 157.32,
            "end": 157.73999999999998,
            "text": "\""
        },
        {
            "start": 157.73999999999998,
            "end": 160.7,
            "text": "这个假设已经被在线教育打破了一部分。"
        },
        {
            "start": 160.7,
            "end": 162.08,
            "text": "但 AI 更进一步。"
        },
        {
            "start": 162.08,
            "end": 164.34,
            "text": "AI 可以做到真正的个性化教学。"
        },
        {
            "start": 164.34,
            "end": 168.94,
            "text": "每个学生的学习路径不同、进度不同、理解方式不同。"
        },
        {
            "start": 168.94,
            "end": 173.18,
            "text": "AI 家教可以随时随地、一对一地陪学生学习。"
        },
        {
            "start": 173.18,
            "end": 176.02,
            "text": "从第一性原理来看：教育的目的是什么？"
        },
        {
            "start": 176.02,
            "end": 178.06,
            "text": "是让学生掌握知识和技能。"
        },
        {
            "start": 178.06,
            "end": 179.96,
            "text": "最好的学习方式是什么？"
        },
        {
            "start": 180.14,
            "end": 183.82,
            "text": "是个性化的、即时反馈的、可以按自己节奏来的。"
        },
        {
            "start": 183.82,
            "end": 185.72,
            "text": "AI 恰好可以提供这些。"
        },
        {
            "start": 185.72,
            "end": 189.54,
            "text": "假设三：\"创业需要大量的启动资金和团队。"
        },
        {
            "start": 189.54,
            "end": 189.95999999999998,
            "text": "\""
        },
        {
            "start": 189.95999999999998,
            "end": 192.92,
            "text": "过去创业你至少需要几个联合创始人、"
        },
        {
            "start": 192.92,
            "end": 194.82,
            "text": "一笔启动资金、租个办公室。"
        },
        {
            "start": 194.82,
            "end": 197.62,
            "text": "但 AI 让\"一人公司\"成为可能。"
        },
        {
            "start": 197.62,
            "end": 200.66,
            "text": "一个人可以用 AI 做产品开发、内容创作、"
        },
        {
            "start": 200.66,
            "end": 202.06,
            "text": "客户服务、数据分析。"
        },
        {
            "start": 202.52,
            "end": 206.14,
            "text": "启动成本从几十万降到了几万甚至几千。"
        },
        {
            "start": 206.14,
            "end": 210.56,
            "text": "那怎么用第一性原理来发现 AI 时代的创新机会呢？"
        },
        {
            "start": 210.56,
            "end": 212.54,
            "text": "我教你一个四步思考法。"
        },
        {
            "start": 212.54,
            "end": 214.52,
            "text": "第一步：选一个行业或领域。"
        },
        {
            "start": 214.52,
            "end": 218.48,
            "text": "可以是你正在做的行业，也可以是你感兴趣的行业。"
        },
        {
            "start": 218.48,
            "end": 221.14,
            "text": "第二步：列出这个行业的\"隐含假设\"。"
        },
        {
            "start": 221.14,
            "end": 225.5,
            "text": "就是那些大家习以为常、从不质疑的做法或前提。"
        },
        {
            "start": 225.5,
            "end": 228.6,
            "text": "比如在餐饮行业：菜单需要人来设计，"
        },
        {
            "start": 228.6,
            "end": 232.12,
            "text": "食材需要人来采购，排班需要人来安排，"
        },
        {
            "start": 232.12,
            "end": 234.22,
            "text": "客户投诉需要人来处理。"
        },
        {
            "start": 234.22,
            "end": 235.88,
            "text": "比如在房地产行业："
        },
        {
            "start": 235.88,
            "end": 238.24,
            "text": "看房需要中介带着去现场，"
        },
        {
            "start": 238.24,
            "end": 240.26,
            "text": "估价需要评估师上门，"
        },
        {
            "start": 240.26,
            "end": 242.22,
            "text": "合同审查需要律师参与。"
        },
        {
            "start": 242.22,
            "end": 245.7,
            "text": "第三步：问\"AI 让哪些假设失效了？"
        },
        {
            "start": 245.7,
            "end": 246.11999999999998,
            "text": "\""
        },
        {
            "start": 246.11999999999998,
            "end": 247.36,
            "text": "对每个假设问一遍："
        },
        {
            "start": 247.36,
            "end": 249.06,
            "text": "如果有一个足够好的 AI，"
        },
        {
            "start": 249.06,
            "end": 250.9,
            "text": "这个假设还成立吗？"
        },
        {
            "start": 250.9,
            "end": 253.64,
            "text": "菜单设计：AI 可以根据食材成本、"
        },
        {
            "start": 253.64,
            "end": 256.7,
            "text": "销售数据、季节趋势自动优化菜单。"
        },
        {
            "start": 256.7,
            "end": 258.28,
            "text": "这个假设部分失效。"
        },
        {
            "start": 258.28,
            "end": 262.7,
            "text": "食材采购：AI 可以根据需求预测自动生成采购单。"
        },
        {
            "start": 262.7,
            "end": 264.32,
            "text": "这个假设部分失效。"
        },
        {
            "start": 264.32,
            "end": 268.36,
            "text": "看房：AI 加上虚拟现实技术可以让你远程看房。"
        },
        {
            "start": 268.36,
            "end": 271.56,
            "text": "中介带看这个假设在一定程度上失效。"
        },
        {
            "start": 271.56,
            "end": 276.08,
            "text": "第四步：基于新的\"基本事实\"，重新设计解决方案。"
        },
        {
            "start": 276.08,
            "end": 279.58,
            "text": "如果 AI 可以做菜单设计、采购计划、"
        },
        {
            "start": 279.58,
            "end": 281.42,
            "text": "排班、客诉处理，"
        },
        {
            "start": 281.42,
            "end": 284.14,
            "text": "那一家餐厅的运营还需要多少管理层？"
        },
        {
            "start": 284.14,
            "end": 286.9,
            "text": "组织架构是不是可以完全不同？"
        },
        {
            "start": 286.9,
            "end": 289.3,
            "text": "一个人是不是可以管理多家店？"
        },
        {
            "start": 289.3,
            "end": 292.36,
            "text": "这就是第一性原理思维带来的创新："
        },
        {
            "start": 292.36,
            "end": 294.96,
            "text": "不是在现有做法上做改良，"
        },
        {
            "start": 294.96,
            "end": 299.5,
            "text": "而是基于新的基本事实重新设计整个方案。"
        },
        {
            "start": 299.5,
            "end": 302.76,
            "text": "第一性原理思维有一个常见的陷阱要注意。"
        },
        {
            "start": 303.28,
            "end": 308.06,
            "text": "这个陷阱就是：把\"理论上可行\"等同于\"实际上可行\"。"
        },
        {
            "start": 308.06,
            "end": 311.94,
            "text": "从第一性原理推导出来的方案，理论上可能很完美。"
        },
        {
            "start": 311.94,
            "end": 315.22,
            "text": "但实际执行中有很多约束：用户习惯、"
        },
        {
            "start": 315.22,
            "end": 317.22,
            "text": "监管要求、基础设施限制、"
        },
        {
            "start": 317.22,
            "end": 318.48,
            "text": "社会文化因素。"
        },
        {
            "start": 318.48,
            "end": 320.94,
            "text": "比如，从第一性原理来看，"
        },
        {
            "start": 320.94,
            "end": 323.56,
            "text": "AI 可以替代大部分初级医疗诊断。"
        },
        {
            "start": 323.56,
            "end": 327.02,
            "text": "但在实际中，医疗有严格的监管要求，"
        },
        {
            "start": 327.02,
            "end": 329.66,
            "text": "患者对 AI 诊断的信任度还不够，"
        },
        {
            "start": 329.66,
            "end": 332.34,
            "text": "医疗数据的隐私保护也是挑战。"
        },
        {
            "start": 332.88,
            "end": 336.02,
            "text": "所以第一性原理给你的是\"方向\"，不是\"路线图\"。"
        },
        {
            "start": 336.02,
            "end": 337.62,
            "text": "方向是对的，"
        },
        {
            "start": 337.62,
            "end": 340.92,
            "text": "但怎么走到那里需要结合实际情况，"
        },
        {
            "start": 340.92,
            "end": 342.1,
            "text": "一步一步来。"
        },
        {
            "start": 342.1,
            "end": 346.04,
            "text": "这就是为什么我们前面学的精益创业方法很重要。"
        },
        {
            "start": 346.04,
            "end": 350.86,
            "text": "用第一性原理找到方向，用精益创业的方法去验证和执行。"
        },
        {
            "start": 350.86,
            "end": 353.92,
            "text": "两者结合才是完整的创新方法。"
        },
        {
            "start": 353.92,
            "end": 355.1,
            "text": "好，总结一下。"
        },
        {
            "start": 355.1,
            "end": 359.52,
            "text": "第一性原理思维：回到基本事实，而不是基于类比和惯例。"
        },
        {
            "start": 359.52,
            "end": 362.28,
            "text": "AI 让很多行业的\"隐含假设\"失效，"
        },
        {
            "start": 362.28,
            "end": 364.42,
            "text": "创造了大量的创新机会。"
        },
        {
            "start": 364.42,
            "end": 367.4,
            "text": "四步思考法：选行业、列假设、"
        },
        {
            "start": 367.4,
            "end": 370.86,
            "text": "问 AI 让哪些假设失效、重新设计方案。"
        },
        {
            "start": 370.86,
            "end": 374.66,
            "text": "第一性原理给方向，精益创业给执行方法。"
        },
        {
            "start": 374.66,
            "end": 379.56,
            "text": "下一期我们聊 AI 原生创业：从第一天就用 AI 构建。"
        },
        {
            "start": 379.56,
            "end": 381.72,
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
], navigation: { nextLessonUrl: "./lesson-innovation-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-05.html?entry={entry}", secondaryHref: "./lesson-innovation-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-04", coachSource: "./ai-coach.html?source=lesson-innovation-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于第一性原理思维：AI 时代的创新基础的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "第一性原理思维：AI 时代的创新基础", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
