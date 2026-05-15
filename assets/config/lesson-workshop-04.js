(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的实战应用卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 AI 实操方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的实战判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.workshop04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Workshop 第4课",
      backLink: { href: './module-workshop.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块九 · AI实战工作坊',
      lessonTitle: "第4课：AI 创意实操：用 AI 做设计、做视频、做 PPT",
      heroMeta: ['🎙 Workshop 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀实战判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 AI 实战框架，而不是一上来就陷入零散工具试用。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 AI 实操框架'] },
      player: { initialSlide: "./assets/slides/workshop-ep110-ai-creative/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 创意实操：用 AI 做设计、做视频、做 PPT", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-workshop.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 AI 实操方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：报告、数据分析、创意制作、代码工具、客户服务，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 AI 应用优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 AI 实操学习，最终都会回到流程设计与产出评估。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-workshop-05.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "AI 工具全景图：管理者必备工具栈",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "AI 写作实操：让 AI 帮你写报告、方案、邮件",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "AI 数据分析实操：用自然语言分析业务数据",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI Agent 深度实操：企业级应用与组织转型",
                "body": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-workshop-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-workshop.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个实操判断", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 AI 实战框架学完整。", meta: ["当前完成：AI实战工作坊 4/8", "建议下一节：AI Agent 深度实操：企业级应用与组织转型", '也可以先整理这一节'], nextHref: "./lesson-workshop-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-workshop.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'workshop', lessonId: "workshop-04", modulePage: 'module-workshop.html', progressNamespace: 'workshop', progressLessonKey: "lesson4", audioSource: './assets/audio/workshop-ep110-ai-creative.mp3?v=20260515-workshop-01a', vttSrc: './assets/subtitles/workshop-ep110-ai-creative.vtt?v=20260515-workshop-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-workshop-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "workshop-ep110-ai-creative/slide_01.png",
            "label": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
            "caption": "这一节会帮助你系统理解：AI 创意实操：用 AI 做设计、做视频、做 PPT"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_02.png",
            "label": "工具场景与边界",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_03.png",
            "label": "核心实操框架",
            "caption": "提示词可以是：\"一个现代化的办公空间，几个年轻的创业者在电脑前工作，屏幕上显示着数据图表，整体氛围是温暖而充满希望的，简约插画风格，色调以蓝色和橙色为主，16比9横版。 \" 几个技"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_04.png",
            "label": "提示词与输入设计",
            "caption": "第二种，用 AI PPT 工具直接生成。 一些专门的 AI 工具可以根据你的主题直接生成完整的 PPT，包括排版和设计。"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_05.png",
            "label": "输出评估与迭代",
            "caption": "AI 视频工具的发展非常快。 现在你可以用文字描述来生成视频片段。"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_06.png",
            "label": "回到真实业务流程",
            "caption": "AI 创意工具最大的威力在于组合使用。 比如你要做一次产品发布。"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_07.png",
            "label": "本节行动提示",
            "caption": "但品牌的核心视觉（logo、品牌手册、重要的营销物料），建议还是请专业设计师来做。 好，总结一下。"
        },
        {
            "file": "workshop-ep110-ai-creative/slide_08.png",
            "label": "学员最需要带走的 3 个实操判断",
            "caption": "学完后，最重要的是把今天的 AI 实操方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.66,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.66,
            "end": 3.98,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.98,
            "end": 6.2,
            "text": "今天实操 AI 创意工具。"
        },
        {
            "start": 6.2,
            "end": 8.3,
            "text": "做图、做视频、做 PPT，"
        },
        {
            "start": 8.3,
            "end": 11.46,
            "text": "这些过去需要设计师才能做的事情，"
        },
        {
            "start": 11.46,
            "end": 13.74,
            "text": "AI 正在让每个人都能做。"
        },
        {
            "start": 13.74,
            "end": 15.84,
            "text": "第一个场景：AI 图片生成。"
        },
        {
            "start": 15.84,
            "end": 18.04,
            "text": "什么时候你需要生成图片？"
        },
        {
            "start": 18.04,
            "end": 20.28,
            "text": "社交媒体配图、公众号封面、"
        },
        {
            "start": 20.28,
            "end": 23.34,
            "text": "产品宣传图、PPT 里的配图、广告素材。"
        },
        {
            "start": 23.34,
            "end": 26.76,
            "text": "用 AI 生图的核心是写好提示词。"
        },
        {
            "start": 26.76,
            "end": 29.2,
            "text": "提示词的结构一般包括几个要素。"
        },
        {
            "start": 29.2,
            "end": 30.56,
            "text": "第一，主体。"
        },
        {
            "start": 30.56,
            "end": 31.8,
            "text": "你想画什么？"
        },
        {
            "start": 31.8,
            "end": 34.8,
            "text": "\"一个商务人士在办公室里使用电脑\"。"
        },
        {
            "start": 34.8,
            "end": 36.02,
            "text": "第二，风格。"
        },
        {
            "start": 36.38,
            "end": 36.96,
            "text": "什么风格？"
        },
        {
            "start": 36.96,
            "end": 40.88,
            "text": "\"简约插画风格\"\"照片级真实感\"\"扁平化设计\"。"
        },
        {
            "start": 40.88,
            "end": 42.2,
            "text": "第三，氛围。"
        },
        {
            "start": 42.36,
            "end": 43.34,
            "text": "什么感觉？"
        },
        {
            "start": 43.34,
            "end": 46.48,
            "text": "\"专业且温暖\"\"科技感\"\"轻松活泼\"。"
        },
        {
            "start": 46.48,
            "end": 48.18,
            "text": "第四，技术参数。"
        },
        {
            "start": 48.18,
            "end": 51.68,
            "text": "比如\"16比9的横版\"\"白色背景\"\"高清\"。"
        },
        {
            "start": 51.68,
            "end": 53.06,
            "text": "举个实际的例子。"
        },
        {
            "start": 53.06,
            "end": 55.54,
            "text": "你需要一张公众号文章的封面图，"
        },
        {
            "start": 55.54,
            "end": 58.6,
            "text": "文章主题是\"AI 如何帮助中小企业\"。"
        },
        {
            "start": 59.120000000000005,
            "end": 60.72,
            "text": "提示词可以是："
        },
        {
            "start": 60.72,
            "end": 62.34,
            "text": "\"一个现代化的办公空间，"
        },
        {
            "start": 62.34,
            "end": 65.1,
            "text": "几个年轻的创业者在电脑前工作，"
        },
        {
            "start": 65.1,
            "end": 67.32,
            "text": "屏幕上显示着数据图表，"
        },
        {
            "start": 67.32,
            "end": 70.62,
            "text": "整体氛围是温暖而充满希望的，"
        },
        {
            "start": 70.62,
            "end": 74.22,
            "text": "简约插画风格，色调以蓝色和橙色为主，"
        },
        {
            "start": 74.22,
            "end": 75.72,
            "text": "16比9横版。"
        },
        {
            "start": 75.72,
            "end": 76.14,
            "text": "\""
        },
        {
            "start": 76.14,
            "end": 76.76,
            "text": "几个技巧。"
        },
        {
            "start": 77.18,
            "end": 79.18,
            "text": "第一，多生成几张选最好的。"
        },
        {
            "start": 79.18,
            "end": 81.52,
            "text": "AI 每次生成的结果不同。"
        },
        {
            "start": 81.52,
            "end": 84.8,
            "text": "生成四到八张，选最满意的那张。"
        },
        {
            "start": 84.8,
            "end": 86.2,
            "text": "第二，迭代优化。"
        },
        {
            "start": 86.2,
            "end": 87.88,
            "text": "第一次的结果不满意？"
        },
        {
            "start": 88.16,
            "end": 89.38000000000001,
            "text": "调整提示词再试。"
        },
        {
            "start": 89.38000000000001,
            "end": 92.64,
            "text": "\"颜色再暖一些\"\"人物少一些\"\"背景简化\"。"
        },
        {
            "start": 92.64,
            "end": 94.9,
            "text": "第三，用图片做参考。"
        },
        {
            "start": 94.9,
            "end": 100.0,
            "text": "很多 AI 工具支持上传一张参考图，让 AI 按类似的风格生成。"
        },
        {
            "start": 100.0,
            "end": 102.22,
            "text": "第二个场景：AI 做 PPT。"
        },
        {
            "start": 102.22,
            "end": 105.04,
            "text": "做 PPT 是管理者的日常痛苦。"
        },
        {
            "start": 105.04,
            "end": 108.02,
            "text": "内容倒好说，排版和设计最花时间。"
        },
        {
            "start": 108.02,
            "end": 110.56,
            "text": "AI 做 PPT 有几种方式。"
        },
        {
            "start": 110.56,
            "end": 114.66,
            "text": "第一种，让 AI 生成大纲和内容，你自己排版。"
        },
        {
            "start": 114.86,
            "end": 115.88,
            "text": "这是最基本的。"
        },
        {
            "start": 115.88,
            "end": 120.08,
            "text": "把你的主题和要点告诉 AI，AI 帮你生成每一页的内容。"
        },
        {
            "start": 120.08,
            "end": 122.0,
            "text": "你再用 PPT 软件排版。"
        },
        {
            "start": 122.52,
            "end": 126.0,
            "text": "第二种，用 AI PPT 工具直接生成。"
        },
        {
            "start": 126.0,
            "end": 130.8,
            "text": "一些专门的 AI 工具可以根据你的主题直接生成完整的 PPT，"
        },
        {
            "start": 130.8,
            "end": 132.82,
            "text": "包括排版和设计。"
        },
        {
            "start": 133.34,
            "end": 138.04,
            "text": "你输入\"帮我做一份关于2026年市场策略的汇报 PPT，"
        },
        {
            "start": 138.04,
            "end": 140.72,
            "text": "十页左右\"，AI 直接出一套。"
        },
        {
            "start": 140.72,
            "end": 145.8,
            "text": "第三种，在对话式 AI 中做内容，然后用设计工具美化。"
        },
        {
            "start": 145.8,
            "end": 149.7,
            "text": "先让 AI 帮你组织好每一页的内容和讲述逻辑，"
        },
        {
            "start": 149.7,
            "end": 152.16,
            "text": "然后用设计工具做视觉呈现。"
        },
        {
            "start": 152.16,
            "end": 154.98,
            "text": "用 AI 做 PPT 的最佳实践。"
        },
        {
            "start": 154.98,
            "end": 157.3,
            "text": "第一，先想清楚故事线。"
        },
        {
            "start": 157.3,
            "end": 160.04,
            "text": "PPT 不是数据的堆砌，是一个故事。"
        },
        {
            "start": 160.04,
            "end": 162.92,
            "text": "先跟 AI 讨论你的 PPT 要讲什么故事、"
        },
        {
            "start": 162.92,
            "end": 166.22,
            "text": "分几个部分、每部分的核心信息是什么。"
        },
        {
            "start": 166.22,
            "end": 169.26,
            "text": "第二，每页只讲一个核心信息。"
        },
        {
            "start": 169.26,
            "end": 174.12,
            "text": "让 AI 帮你把每页的内容精简到一个核心观点加几个支撑点。"
        },
        {
            "start": 174.12,
            "end": 176.66,
            "text": "第三，多用图表少用文字。"
        },
        {
            "start": 176.66,
            "end": 181.34,
            "text": "让 AI 建议每页用什么类型的图表或视觉元素来呈现信息。"
        },
        {
            "start": 181.34,
            "end": 183.5,
            "text": "第三个场景：AI 做视频。"
        },
        {
            "start": 183.5,
            "end": 185.86,
            "text": "AI 视频工具的发展非常快。"
        },
        {
            "start": 185.86,
            "end": 188.76,
            "text": "现在你可以用文字描述来生成视频片段。"
        },
        {
            "start": 188.76,
            "end": 191.82,
            "text": "最实用的商务视频场景有几个。"
        },
        {
            "start": 191.82,
            "end": 193.46,
            "text": "第一，产品演示视频。"
        },
        {
            "start": 193.46,
            "end": 197.88,
            "text": "用 AI 把产品的截图或描述变成一个动态的演示视频。"
        },
        {
            "start": 197.88,
            "end": 199.6,
            "text": "第二，社交媒体短视频。"
        },
        {
            "start": 199.6,
            "end": 203.84,
            "text": "把文字内容转化为有画面、有文字、有配音的短视频。"
        },
        {
            "start": 203.84,
            "end": 205.48,
            "text": "第三，培训视频。"
        },
        {
            "start": 205.48,
            "end": 208.92,
            "text": "把培训材料转化为有视觉呈现的教学视频。"
        },
        {
            "start": 208.92,
            "end": 212.22,
            "text": "用 AI 做视频的流程通常是这样的。"
        },
        {
            "start": 212.22,
            "end": 213.3,
            "text": "第一步，准备脚本。"
        },
        {
            "start": 213.3,
            "end": 215.58,
            "text": "你可以先用 AI 写好视频脚本，"
        },
        {
            "start": 215.58,
            "end": 218.04,
            "text": "每一个画面对应什么内容、什么旁白。"
        },
        {
            "start": 218.04,
            "end": 219.98,
            "text": "第二步，生成视觉素材。"
        },
        {
            "start": 219.98,
            "end": 223.26,
            "text": "用 AI 图片工具生成需要的图片素材。"
        },
        {
            "start": 223.26,
            "end": 225.26,
            "text": "第三步，组合和编辑。"
        },
        {
            "start": 225.26,
            "end": 229.48,
            "text": "用 AI 视频工具把文字、图片、配音组合成视频。"
        },
        {
            "start": 230.1,
            "end": 233.42000000000002,
            "text": "目前 AI 视频工具在商业应用中最成熟的"
        },
        {
            "start": 233.42000000000002,
            "end": 235.46,
            "text": "是\"图文转视频\"类工具。"
        },
        {
            "start": 235.46,
            "end": 239.24,
            "text": "纯粹靠文字描述生成的视频在质量和可控"
        },
        {
            "start": 239.24,
            "end": 240.74,
            "text": "性上还有提升空间。"
        },
        {
            "start": 240.74,
            "end": 242.58,
            "text": "但进步速度很快。"
        },
        {
            "start": 243.0,
            "end": 244.3,
            "text": "跨场景的组合应用。"
        },
        {
            "start": 244.3,
            "end": 247.64,
            "text": "AI 创意工具最大的威力在于组合使用。"
        },
        {
            "start": 247.64,
            "end": 249.52,
            "text": "比如你要做一次产品发布。"
        },
        {
            "start": 249.52,
            "end": 252.72,
            "text": "第一，用 AI 写好新闻稿和社交媒体文案。"
        },
        {
            "start": 252.72,
            "end": 257.06,
            "text": "第二，用 AI 生成产品宣传图和社交媒体配图。"
        },
        {
            "start": 257.06,
            "end": 259.8,
            "text": "第三，用 AI 做产品介绍的 PPT。"
        },
        {
            "start": 259.8,
            "end": 263.46,
            "text": "第四，用 AI 把产品介绍做成一个短视频。"
        },
        {
            "start": 263.46,
            "end": 267.72,
            "text": "过去这些事情需要文案、设计师、视频制作者多人协作。"
        },
        {
            "start": 267.72,
            "end": 271.34,
            "text": "现在一个人用 AI 工具就能完成大部分工作。"
        },
        {
            "start": 271.34,
            "end": 274.28,
            "text": "当然，品质上可能比不上专业团队，"
        },
        {
            "start": 274.28,
            "end": 276.68,
            "text": "但对于很多中小企业来说，"
        },
        {
            "start": 276.68,
            "end": 277.94,
            "text": "已经完全够用了。"
        },
        {
            "start": 277.94,
            "end": 281.14,
            "text": "最后讲几个 AI 创意工具的注意事项。"
        },
        {
            "start": 281.14,
            "end": 282.72,
            "text": "第一，版权问题。"
        },
        {
            "start": 282.72,
            "end": 285.72,
            "text": "AI 生成的图片和视频可能存在版权风险。"
        },
        {
            "start": 285.72,
            "end": 289.2,
            "text": "如果是重要的商业素材，建议做原创性检查。"
        },
        {
            "start": 289.2,
            "end": 291.40000000000003,
            "text": "第二，品牌一致性。"
        },
        {
            "start": 291.40000000000003,
            "end": 294.18,
            "text": "AI 生成的素材风格可能不统一。"
        },
        {
            "start": 294.18,
            "end": 296.58,
            "text": "建议建立一套品牌视觉规范，"
        },
        {
            "start": 296.58,
            "end": 299.46,
            "text": "在给 AI 下指令的时候明确要求。"
        },
        {
            "start": 299.46,
            "end": 301.52,
            "text": "第三，不要过度依赖。"
        },
        {
            "start": 301.52,
            "end": 304.6,
            "text": "AI 工具适合快速出稿和日常内容。"
        },
        {
            "start": 304.6,
            "end": 307.94,
            "text": "但品牌的核心视觉（logo、品牌手册、"
        },
        {
            "start": 307.94,
            "end": 309.43999999999994,
            "text": "重要的营销物料），"
        },
        {
            "start": 309.44,
            "end": 311.82,
            "text": "建议还是请专业设计师来做。"
        },
        {
            "start": 311.82,
            "end": 313.1,
            "text": "好，总结一下。"
        },
        {
            "start": 313.1,
            "end": 314.98,
            "text": "AI 创意三大场景："
        },
        {
            "start": 314.98,
            "end": 317.24,
            "text": "图片生成（写好提示词、"
        },
        {
            "start": 317.24,
            "end": 319.32,
            "text": "多生几张选最好的）、"
        },
        {
            "start": 319.32,
            "end": 321.48,
            "text": "PPT 制作（先想故事线、"
        },
        {
            "start": 321.48,
            "end": 323.3,
            "text": "每页一个核心信息）、"
        },
        {
            "start": 323.3,
            "end": 326.94,
            "text": "视频制作（脚本加素材加组合）。"
        },
        {
            "start": 326.94,
            "end": 328.58,
            "text": "组合使用威力最大。"
        },
        {
            "start": 328.58,
            "end": 333.26,
            "text": "注意版权、品牌一致性、核心素材请专业设计师。"
        },
        {
            "start": 333.26,
            "end": 335.66,
            "text": "下一期我们实操 AI Agent。"
        },
        {
            "start": 335.66,
            "end": 338.1,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 338.1,
            "end": 340.98,
            "text": "1. 图片生成：提示词四要素（主体、"
        },
        {
            "start": 340.98,
            "end": 343.58,
            "text": "风格、氛围、参数），多生几张选最好的"
        },
        {
            "start": 343.58,
            "end": 345.94,
            "text": "2. PPT 制作：先定故事线，"
        },
        {
            "start": 345.94,
            "end": 349.38,
            "text": "每页一个核心信息，多用图表少用文字"
        },
        {
            "start": 349.38,
            "end": 354.56,
            "text": "3. 视频制作：脚本→素材→组合，图文转视频最成熟"
        },
        {
            "start": 354.56,
            "end": 358.76,
            "text": "4. 组合使用威力最大，注意版权和品牌一致性"
        },
        {
            "start": 358.76,
            "end": 361.94,
            "text": "1. 你最近需要做什么视觉素材？"
        },
        {
            "start": 361.94,
            "end": 363.56,
            "text": "试着用 AI 工具生成"
        },
        {
            "start": 363.56,
            "end": 368.72,
            "text": "2. 试着用 AI 做一份五页的汇报 PPT，对比你以前的效率"
        },
        {
            "start": 368.72,
            "end": 372.94,
            "text": "3. 你的团队有没有可以用 AI 创意工具提效的场景？"
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
], navigation: { nextLessonUrl: "./lesson-workshop-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 AI 实战判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 AI 工具落地框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 AI 工具落地框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-workshop-05.html?entry={entry}", secondaryHref: "./lesson-workshop-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-workshop-04", coachSource: "./ai-coach.html?source=lesson-workshop-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 创意实操：用 AI 做设计、做视频、做 PPT的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 创意实操：用 AI 做设计、做视频、做 PPT", module: 'AI实战工作坊' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-workshop-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-workshop.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
