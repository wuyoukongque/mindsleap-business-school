(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第9课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第9课：案例：Midjourney——四个人如何做出十亿美金公司",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep82-case-midjourney/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：Midjourney——四个人如何做出十亿美金公司", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-10.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-innovation-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 9/12", "建议下一节：案例：Cursor 和 Perplexity——用 AI 重新定义品类", '也可以先整理这一节'], nextHref: "./lesson-innovation-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-09", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson9", audioSource: './assets/audio/innovation-ep82-case-midjourney.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep82-case-midjourney.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep82-case-midjourney/slide_01.png",
            "label": "案例：Midjourney——四个人如何做出十亿美金公司",
            "caption": "这一节会帮助你系统理解：案例：Midjourney——四个人如何做出十亿美金公司"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "产品开发：核心团队专注于模型研发和产品体验。 获客：完全靠产品口碑和社区传播。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_04.png",
            "label": "关键判断一",
            "caption": "这种可见性带来了极强的传播效应。 第三，低使用门槛。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_05.png",
            "label": "关键判断二",
            "caption": "它的增长完全靠产品本身驱动。 用户生成了一张好看的图片，会分享到社交媒体上。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "不需要向投资人汇报，不需要为短期增长而牺牲长期产品质量。 第二，团队可以保持小而精。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_07.png",
            "label": "本节行动提示",
            "caption": "十几个人甚至几个人，如果每个人都是顶尖的，加上 AI 的杠杆，就能做出影响几千万人的产品。 第三个原则：让用户成为你的营销团队。"
        },
        {
            "file": "innovation-ep82-case-midjourney/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.36,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.36,
            "end": 4.12,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.12,
            "end": 7.38,
            "text": "今天讲一个让很多人震撼的案例：Midjourney。"
        },
        {
            "start": 7.54,
            "end": 9.46,
            "text": "这家公司只有大约十一个人，"
        },
        {
            "start": 9.46,
            "end": 11.54,
            "text": "没有融过一分钱的外部资金，"
        },
        {
            "start": 11.54,
            "end": 13.9,
            "text": "但估值超过了一百亿美金。"
        },
        {
            "start": 13.9,
            "end": 16.8,
            "text": "它是 AI 原生创业的极致代表。"
        },
        {
            "start": 16.8,
            "end": 19.7,
            "text": "Midjourney 是一个 AI 图像生成工具。"
        },
        {
            "start": 19.7,
            "end": 23.32,
            "text": "你输入一段文字描述，它就能生成高质量的图片。"
        },
        {
            "start": 23.32,
            "end": 28.46,
            "text": "从艺术作品到产品设计图到建筑效果图，它都能做。"
        },
        {
            "start": 28.46,
            "end": 32.0,
            "text": "它的创始人 David Holz 是一个非常有意思的人。"
        },
        {
            "start": 32.0,
            "end": 35.6,
            "text": "他之前做过一家叫 Leap Motion 的手势识别公司。"
        },
        {
            "start": 35.6,
            "end": 39.92,
            "text": "后来他开始研究 AI 图像生成，创办了 Midjourney。"
        },
        {
            "start": 39.92,
            "end": 42.08,
            "text": "先看 Midjourney 做对了什么。"
        },
        {
            "start": 42.08,
            "end": 44.62,
            "text": "第一，极致的小团队模式。"
        },
        {
            "start": 44.62,
            "end": 48.2,
            "text": "Midjourney 大部分时间只有不到十五个人。"
        },
        {
            "start": 48.2,
            "end": 52.26,
            "text": "它没有销售团队、没有市场团队、甚至连客服团队都极小。"
        },
        {
            "start": 52.26,
            "end": 53.46,
            "text": "怎么做到的？"
        },
        {
            "start": 53.46,
            "end": 56.96,
            "text": "因为它把 AI 原生的理念贯彻到了极致。"
        },
        {
            "start": 56.96,
            "end": 61.52,
            "text": "产品开发：核心团队专注于模型研发和产品体验。"
        },
        {
            "start": 61.52,
            "end": 65.14,
            "text": "获客：完全靠产品口碑和社区传播。"
        },
        {
            "start": 65.14,
            "end": 70.82,
            "text": "用户生成的图片在社交媒体上传播，自然就带来了新用户。"
        },
        {
            "start": 70.82,
            "end": 72.28,
            "text": "零广告投入。"
        },
        {
            "start": 72.28,
            "end": 74.5,
            "text": "客服：社区自助。"
        },
        {
            "start": 74.5,
            "end": 81.22,
            "text": "Midjourney 在 Discord 上建了一个巨大的社区，用户互相帮助解决问题。"
        },
        {
            "start": 81.22,
            "end": 84.2,
            "text": "这就是 AI 原生企业的魅力："
        },
        {
            "start": 84.2,
            "end": 87.68,
            "text": "一个极小的团队就能服务几千万用户，"
        },
        {
            "start": 87.68,
            "end": 89.78,
            "text": "创造数亿美金的收入。"
        },
        {
            "start": 90.34,
            "end": 92.62,
            "text": "第二，选对了分发渠道。"
        },
        {
            "start": 92.62,
            "end": 96.82,
            "text": "Midjourney 早期选择了 Discord 作为产品的使用入口。"
        },
        {
            "start": 96.82,
            "end": 98.66,
            "text": "用户不需要下载任何软件，"
        },
        {
            "start": 98.66,
            "end": 101.92,
            "text": "直接在 Discord 里输入文字命令就能生成图片。"
        },
        {
            "start": 102.5,
            "end": 106.06,
            "text": "为什么选 Discord 而不是做一个独立的网站或者应用？"
        },
        {
            "start": 106.06,
            "end": 108.14,
            "text": "第一，零开发成本。"
        },
        {
            "start": 108.14,
            "end": 111.86,
            "text": "不需要自己做用户系统、登录注册、前端界面。"
        },
        {
            "start": 111.86,
            "end": 113.42,
            "text": "Discord 已经有了这一切。"
        },
        {
            "start": 113.84,
            "end": 115.96,
            "text": "第二，天然的社区效应。"
        },
        {
            "start": 115.96,
            "end": 119.48,
            "text": "在 Discord 上，你可以看到别人在生成什么图片。"
        },
        {
            "start": 119.48,
            "end": 123.84,
            "text": "你看到一张很酷的图，就会好奇\"这是怎么生成的？"
        },
        {
            "start": 123.84,
            "end": 125.28,
            "text": "\"然后自己也开始尝试。"
        },
        {
            "start": 125.28,
            "end": 128.64,
            "text": "这种可见性带来了极强的传播效应。"
        },
        {
            "start": 128.64,
            "end": 130.52,
            "text": "第三，低使用门槛。"
        },
        {
            "start": 130.52,
            "end": 132.78,
            "text": "Discord 本身就有大量的用户。"
        },
        {
            "start": 132.78,
            "end": 134.54,
            "text": "对这些用户来说，"
        },
        {
            "start": 134.54,
            "end": 136.66,
            "text": "使用 Midjourney 只需要加入一个频道、"
        },
        {
            "start": 136.66,
            "end": 137.62,
            "text": "输入一个命令。"
        },
        {
            "start": 137.62,
            "end": 138.96,
            "text": "几乎零门槛。"
        },
        {
            "start": 138.96,
            "end": 141.44,
            "text": "这个渠道选择堪称天才级。"
        },
        {
            "start": 141.44,
            "end": 145.92,
            "text": "它让 Midjourney 在几乎没有市场投入的情况下，"
        },
        {
            "start": 145.92,
            "end": 147.8,
            "text": "快速获得了几百万用户。"
        },
        {
            "start": 147.8,
            "end": 150.22,
            "text": "第三，定价策略精准。"
        },
        {
            "start": 150.22,
            "end": 152.72,
            "text": "Midjourney 的定价是订阅制。"
        },
        {
            "start": 152.72,
            "end": 155.34,
            "text": "从每月十美元到六十美元不等。"
        },
        {
            "start": 155.34,
            "end": 158.22,
            "text": "这个价格对个人用户来说可以接受，"
        },
        {
            "start": 158.22,
            "end": 161.64,
            "text": "对企业用户来说更是便宜到忽略不计。"
        },
        {
            "start": 161.64,
            "end": 165.6,
            "text": "更重要的是，Midjourney 早期提供了免费的使用额度。"
        },
        {
            "start": 165.6,
            "end": 168.5,
            "text": "新用户可以免费生成几十张图片。"
        },
        {
            "start": 168.5,
            "end": 169.84,
            "text": "这降低了试用门槛。"
        },
        {
            "start": 169.84,
            "end": 173.46,
            "text": "用户免费体验了觉得好用，自然就付费了。"
        },
        {
            "start": 173.46,
            "end": 177.7,
            "text": "当你的产品足够好的时候，免费试用是最强的营销手段。"
        },
        {
            "start": 177.7,
            "end": 181.8,
            "text": "因为用户一旦体验了 AI 生成图片的便利和质量，"
        },
        {
            "start": 181.8,
            "end": 184.36,
            "text": "很难再回到从前的工作方式。"
        },
        {
            "start": 184.36,
            "end": 187.19999999999996,
            "text": "第四，产品驱动增长的典范。"
        },
        {
            "start": 187.2,
            "end": 190.86666666666667,
            "text": "Midjourney 几乎没有做过任何主动的营销。"
        },
        {
            "start": 190.86666666666667,
            "end": 193.7,
            "text": "它的增长完全靠产品本身驱动。"
        },
        {
            "start": 194.2,
            "end": 198.18,
            "text": "用户生成了一张好看的图片，会分享到社交媒体上。"
        },
        {
            "start": 198.18,
            "end": 200.2,
            "text": "每一次分享就是一次免费的广告。"
        },
        {
            "start": 200.2,
            "end": 203.36,
            "text": "而且这种\"用户生成内容\"的广告效果远"
        },
        {
            "start": 203.36,
            "end": 205.2,
            "text": "好于品牌自己做的广告。"
        },
        {
            "start": 205.74,
            "end": 209.5,
            "text": "因为它是真实的、有创造力的、让人好奇的。"
        },
        {
            "start": 209.5,
            "end": 213.2,
            "text": "数据显示，Midjourney 的用户获取成本几乎为零。"
        },
        {
            "start": 213.2,
            "end": 217.04,
            "text": "在同类的 AI 工具中，这是极其罕见的。"
        },
        {
            "start": 217.04,
            "end": 219.20000000000005,
            "text": "产品驱动增长的前提是什么？"
        },
        {
            "start": 219.20000000000005,
            "end": 220.46,
            "text": "产品必须足够好。"
        },
        {
            "start": 220.46,
            "end": 222.08,
            "text": "好到用户会忍不住分享。"
        },
        {
            "start": 222.08,
            "end": 223.64,
            "text": "Midjourney 做到了。"
        },
        {
            "start": 223.64,
            "end": 226.82,
            "text": "它生成的图片质量在当时远超竞品，"
        },
        {
            "start": 226.82,
            "end": 228.23000000000002,
            "text": "给人的第一印象是\"哇，"
        },
        {
            "start": 228.23000000000002,
            "end": 230.3,
            "text": "AI 居然能做到这种水平\"。"
        },
        {
            "start": 230.3,
            "end": 232.06,
            "text": "第五，不融资的策略。"
        },
        {
            "start": 232.06,
            "end": 234.9,
            "text": "Midjourney 没有拿过外部融资。"
        },
        {
            "start": 235.42,
            "end": 238.0,
            "text": "这在 AI 行业中极其少见。"
        },
        {
            "start": 238.0,
            "end": 240.74,
            "text": "大多数 AI 公司都在疯狂融资。"
        },
        {
            "start": 240.74,
            "end": 242.58,
            "text": "David Holz 为什么不融资？"
        },
        {
            "start": 242.58,
            "end": 245.9,
            "text": "他说过，因为公司从很早就开始盈利了。"
        },
        {
            "start": 245.9,
            "end": 249.14,
            "text": "订阅收入足以覆盖成本并支持增长。"
        },
        {
            "start": 249.14,
            "end": 251.0,
            "text": "不需要外部资金。"
        },
        {
            "start": 251.0,
            "end": 253.24,
            "text": "不融资有几个好处。"
        },
        {
            "start": 253.24,
            "end": 256.04,
            "text": "第一，创始人保持了完全的控制权。"
        },
        {
            "start": 256.04,
            "end": 257.76,
            "text": "不需要向投资人汇报，"
        },
        {
            "start": 257.76,
            "end": 261.28,
            "text": "不需要为短期增长而牺牲长期产品质量。"
        },
        {
            "start": 261.28,
            "end": 264.02,
            "text": "第二，团队可以保持小而精。"
        },
        {
            "start": 264.42,
            "end": 267.44,
            "text": "融资之后往往被迫快速扩张团队，"
        },
        {
            "start": 267.44,
            "end": 270.72,
            "text": "而扩张团队往往带来管理成本和效率下降。"
        },
        {
            "start": 270.72,
            "end": 272.7,
            "text": "第三，可以保持专注。"
        },
        {
            "start": 272.7,
            "end": 276.38,
            "text": "不被投资人的各种建议和要求分散注意力。"
        },
        {
            "start": 276.38,
            "end": 278.4,
            "text": "但不融资也有代价。"
        },
        {
            "start": 278.82000000000005,
            "end": 283.16,
            "text": "如果竞争对手拿了大量融资疯狂投入研发和市场，"
        },
        {
            "start": 283.16,
            "end": 285.67999999999995,
            "text": "你可能会在竞争中处于劣势。"
        },
        {
            "start": 285.68,
            "end": 290.12,
            "text": "Midjourney 能不融资成功，是因为它的产品够好、"
        },
        {
            "start": 290.12,
            "end": 291.92,
            "text": "增长够快、盈利够早。"
        },
        {
            "start": 291.92,
            "end": 294.1,
            "text": "不是所有公司都能做到。"
        },
        {
            "start": 294.1,
            "end": 299.6,
            "text": "从 Midjourney 的案例中我们可以提炼出几个 AI 原生创业的关键原则。"
        },
        {
            "start": 299.6,
            "end": 303.4,
            "text": "第一个原则：产品质量是一切的基础。"
        },
        {
            "start": 303.4,
            "end": 305.92,
            "text": "再好的商业策略、再聪明的渠道选择，"
        },
        {
            "start": 305.92,
            "end": 308.22,
            "text": "如果产品本身不够好，都没有用。"
        },
        {
            "start": 308.22,
            "end": 309.94,
            "text": "Midjourney 之所以成功，"
        },
        {
            "start": 309.94,
            "end": 314.3,
            "text": "最根本的原因是它的图像生成质量在当时是最好的。"
        },
        {
            "start": 314.82000000000005,
            "end": 318.5,
            "text": "第二个原则：小团队可以创造巨大价值。"
        },
        {
            "start": 318.5,
            "end": 322.46,
            "text": "AI 时代不再需要几百人的团队来做一个成功的产品。"
        },
        {
            "start": 322.46,
            "end": 324.38,
            "text": "十几个人甚至几个人，"
        },
        {
            "start": 324.38,
            "end": 327.16,
            "text": "如果每个人都是顶尖的，加上 AI 的杠杆，"
        },
        {
            "start": 327.16,
            "end": 329.58,
            "text": "就能做出影响几千万人的产品。"
        },
        {
            "start": 329.58,
            "end": 332.9,
            "text": "第三个原则：让用户成为你的营销团队。"
        },
        {
            "start": 332.9,
            "end": 337.38,
            "text": "当你的产品足够好的时候，用户会自发地帮你传播。"
        },
        {
            "start": 337.38,
            "end": 340.66,
            "text": "每一个用户分享的作品都是一次免费的广告。"
        },
        {
            "start": 340.66,
            "end": 342.9,
            "text": "这比花钱买广告有效得多。"
        },
        {
            "start": 342.9,
            "end": 346.24,
            "text": "第四个原则：选择最高效的分发渠道。"
        },
        {
            "start": 346.24,
            "end": 348.18,
            "text": "不一定要做自己的应用。"
        },
        {
            "start": 348.18,
            "end": 350.22,
            "text": "找到你的用户已经在的地方，"
        },
        {
            "start": 350.22,
            "end": 353.3,
            "text": "用最低成本把产品送到他们面前。"
        },
        {
            "start": 353.3,
            "end": 355.82,
            "text": "Midjourney 选择 Discord 就是这个逻辑。"
        },
        {
            "start": 355.82,
            "end": 359.0,
            "text": "第五个原则：能盈利就尽早盈利。"
        },
        {
            "start": 359.65999999999997,
            "end": 362.96,
            "text": "不是所有 AI 创业都需要先烧钱再盈利。"
        },
        {
            "start": 362.96,
            "end": 365.46,
            "text": "如果你的产品足够好、定价合理，"
        },
        {
            "start": 365.46,
            "end": 368.06,
            "text": "可以从很早开始就有正向的现金流。"
        },
        {
            "start": 368.06,
            "end": 371.2,
            "text": "这让你有更大的自主权和更长的生命力。"
        },
        {
            "start": 371.2,
            "end": 372.64,
            "text": "好，总结一下。"
        },
        {
            "start": 372.64,
            "end": 376.36,
            "text": "Midjourney 做对了五件事：极致小团队、"
        },
        {
            "start": 376.36,
            "end": 380.42,
            "text": "选对分发渠道 Discord、精准的订阅定价、"
        },
        {
            "start": 380.42,
            "end": 383.38,
            "text": "产品驱动增长、不融资保持控制权。"
        },
        {
            "start": 383.38,
            "end": 387.46,
            "text": "五个 AI 原生创业原则：产品质量是基础、"
        },
        {
            "start": 387.46,
            "end": 390.06,
            "text": "小团队大价值、用户即营销、"
        },
        {
            "start": 390.06,
            "end": 392.08,
            "text": "高效分发渠道、尽早盈利。"
        },
        {
            "start": 392.08,
            "end": 394.94,
            "text": "下一期我们看另外两个精彩案例："
        },
        {
            "start": 394.94,
            "end": 399.06,
            "text": "Cursor 和 Perplexity 是怎么用 AI 重新定义品类的。"
        },
        {
            "start": 399.06,
            "end": 400.82,
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
], navigation: { nextLessonUrl: "./lesson-innovation-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-10.html?entry={entry}", secondaryHref: "./lesson-innovation-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-09", coachSource: "./ai-coach.html?source=lesson-innovation-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：Midjourney——四个人如何做出十亿美金公司的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：Midjourney——四个人如何做出十亿美金公司", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
