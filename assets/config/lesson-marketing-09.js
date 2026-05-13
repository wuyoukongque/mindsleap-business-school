(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第9课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第9课：故事化营销：AI 时代更需要人的温度",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep42-storytelling/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：故事化营销：AI 时代更需要人的温度", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个营销判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个增长环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的营销优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的营销学习，最终都会回到资源配置与增长判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-marketing.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "STP：找到你的市场在哪里",
                "body": "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "品牌定位：在用户心里占一个位置",
                "body": "从差异化与心智占位出发，重新理解品牌定位在 AI 时代为什么更重要。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "4P 到 4C：营销组合怎么设计",
                "body": "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "消费者决策心理：人为什么买单",
                "body": "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "增长飞轮：从 AARRR 到 AI 驱动增长",
                "body": "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 内容营销：规模化创作高质量内容",
                "body": "把内容生产从一次次临时输出，升级成模板、语料与审核驱动的内容系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "个性化营销：千人千面的实现路径",
                "body": "把千人千面拆成四个层次、三类基础设施和几个最值得先做的应用场景。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "营销自动化：让 AI Agent 帮你跑增长",
                "body": "把营销自动化从规则引擎升级成目标驱动的执行系统，先从最值得落地的五类 Agent 场景开始。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "故事化营销：AI 时代更需要人的温度",
                "body": "把品牌表达从“我想说什么”转成“用户为什么会在乎”，用故事建立真实感、记忆点和信任。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把品牌表达从“我想说什么”转成“用户为什么会在乎”，用故事建立真实感、记忆点和信任。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "客户才是主角，品牌不是来当英雄的",
                "body": "更有效的故事不是反复讲自己多厉害，而是让客户的困境、选择和变化成为叙事中心。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "真正能被记住的，不是信息量，而是代入感",
                "body": "冲突、转折和结局，会让客户从“知道”走向“感受到”，这才更容易激发行动。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 负责放大故事，人负责创造真实",
                "body": "用 AI 去整理、改编和分发故事，但别把品牌最珍贵的真实经历和温度外包掉。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 9/9", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-09", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson9", audioSource: './assets/audio/marketing-ep42-storytelling.mp3?v=20260411-marketing-09a', vttSrc: './assets/subtitles/marketing-ep42-storytelling.vtt?v=20260411-marketing-09a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep42-storytelling/slide_01.png",
            "label": "故事化营销：AI 时代更需要人的温度",
            "caption": "这一节会帮助你系统理解：故事化营销：AI 时代更需要人的温度"
        },
        {
            "file": "marketing-ep42-storytelling/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_03.png",
            "label": "核心框架",
            "caption": "而营销真正想做的，从来不只是让人知道，而是让人相信、让人记住、让人愿意行动。 所以我很喜欢一句话。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_04.png",
            "label": "关键判断",
            "caption": "但如果这个客户原来正卡在一个真实问题里，比如线索很多但转化很差，比如团队越来越忙但增长越来越慢，比如用户不断流失但找不到原因，这时候冲突就出来了。 冲突让故事有张力。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "讲到这里，我们来看几个最常见的故事化营销场景。 第一，客户案例。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_06.png",
            "label": "回到你的业务",
            "caption": "那 AI 在故事化营销里，应该扮演什么角色？ 我的判断是，AI 适合放大故事，但不适合代替人创造核心故事。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_07.png",
            "label": "风险与提醒",
            "caption": "在 AI 时代，当大家都能快速做出还不错的内容时，真正的差异化越来越来自人本身。 来自你的经历。"
        },
        {
            "file": "marketing-ep42-storytelling/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.26,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.26,
            "end": 3.54,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 3.54,
            "end": 5.08,
            "text": "前几期我们一直在聊，"
        },
        {
            "start": 5.08,
            "end": 7.62,
            "text": "AI 怎么帮助你把营销做得更快、更准、"
        },
        {
            "start": 7.9,
            "end": 8.26,
            "text": "更自动。"
        },
        {
            "start": 8.26,
            "end": 10.68,
            "text": "今天我想聊一个看起来有点相反，"
        },
        {
            "start": 10.68,
            "end": 12.54,
            "text": "但其实越来越重要的话题。"
        },
        {
            "start": 12.54,
            "end": 13.58,
            "text": "故事化营销。"
        },
        {
            "start": 13.58,
            "end": 18.18,
            "text": "更具体一点说，在 AI 时代，为什么人的温度反而会更值钱。"
        },
        {
            "start": 18.18,
            "end": 19.66,
            "text": "这件事一点也不矛盾。"
        },
        {
            "start": 19.66,
            "end": 22.42,
            "text": "AI 越强，大家越容易批量生产内容。"
        },
        {
            "start": 22.42,
            "end": 23.44,
            "text": "文章可以写。"
        },
        {
            "start": 23.56,
            "end": 24.54,
            "text": "海报可以做。"
        },
        {
            "start": 24.8,
            "end": 25.82,
            "text": "视频脚本可以起。"
        },
        {
            "start": 25.82,
            "end": 27.440000000000005,
            "text": "邮件可以批量改。"
        },
        {
            "start": 27.440000000000005,
            "end": 29.2,
            "text": "广告文案可以同时生成几十版。"
        },
        {
            "start": 29.2,
            "end": 30.24,
            "text": "结果是什么？"
        },
        {
            "start": 30.6,
            "end": 33.94,
            "text": "信息越来越多，但真正让人记住的内容，反而越来越少。"
        },
        {
            "start": 33.94,
            "end": 36.26,
            "text": "因为大多数内容都开始长得很像。"
        },
        {
            "start": 36.26,
            "end": 39.38,
            "text": "这时候，什么东西能真正把你和别人拉开？"
        },
        {
            "start": 39.38,
            "end": 41.0,
            "text": "不是再多一个功能点。"
        },
        {
            "start": 41.0,
            "end": 42.7,
            "text": "也不只是再多一条数据。"
        },
        {
            "start": 42.7,
            "end": 44.56,
            "text": "而是，一个真实的故事。"
        },
        {
            "start": 44.68,
            "end": 45.96,
            "text": "为什么故事有力量？"
        },
        {
            "start": 45.96,
            "end": 48.66,
            "text": "因为数据让人理解，故事让人代入。"
        },
        {
            "start": 48.66,
            "end": 50.88,
            "text": "你给客户看一张图表，他会想一想。"
        },
        {
            "start": 50.88,
            "end": 53.74,
            "text": "但你给客户讲一个人如何在焦虑、犹豫、"
        },
        {
            "start": 53.74,
            "end": 56.68,
            "text": "失败和转折中走出来，他会感受到。"
        },
        {
            "start": 56.68,
            "end": 58.04,
            "text": "而营销真正想做的，"
        },
        {
            "start": 58.06,
            "end": 60.44,
            "text": "从来不只是让人知道，而是让人相信、"
        },
        {
            "start": 60.58,
            "end": 62.16,
            "text": "让人记住、让人愿意行动。"
        },
        {
            "start": 62.16,
            "end": 63.9,
            "text": "所以我很喜欢一句话。"
        },
        {
            "start": 64.06,
            "end": 66.46,
            "text": "数据回答的是，这件事值不值得相信。"
        },
        {
            "start": 66.66,
            "end": 69.38,
            "text": "故事回答的是，这件事跟我有没有关系。"
        },
        {
            "start": 69.38,
            "end": 71.66,
            "text": "当一个人觉得，这说的就是我，"
        },
        {
            "start": 71.66,
            "end": 72.8,
            "text": "这就是我的困境，"
        },
        {
            "start": 72.8,
            "end": 74.24,
            "text": "这就是我正在经历的东西，"
        },
        {
            "start": 74.24,
            "end": 76.38,
            "text": "营销才真正开始起作用。"
        },
        {
            "start": 76.38,
            "end": 79.68,
            "text": "好，那什么样的故事，才算一个好的品牌故事？"
        },
        {
            "start": 79.68,
            "end": 81.96,
            "text": "我建议你记住一个非常经典的结构。"
        },
        {
            "start": 81.96,
            "end": 84.78,
            "text": "主角、冲突、转折、结局。"
        },
        {
            "start": 84.78,
            "end": 86.12,
            "text": "第一，主角。"
        },
        {
            "start": 86.24,
            "end": 89.06,
            "text": "很多品牌讲故事的时候，最容易犯的错，"
        },
        {
            "start": 89.06,
            "end": 90.92,
            "text": "就是把自己放在主角位置。"
        },
        {
            "start": 90.92,
            "end": 91.84,
            "text": "我们是谁。"
        },
        {
            "start": 91.84,
            "end": 92.68,
            "text": "我们多厉害。"
        },
        {
            "start": 92.68,
            "end": 93.64,
            "text": "我们做了什么。"
        },
        {
            "start": 93.64,
            "end": 95.0,
            "text": "我们技术多先进。"
        },
        {
            "start": 95.0,
            "end": 97.58,
            "text": "但对客户来说，他真正关心的，"
        },
        {
            "start": 97.58,
            "end": 98.84,
            "text": "从来不是你有多厉害，"
        },
        {
            "start": 98.84,
            "end": 100.46,
            "text": "而是你能不能帮助他。"
        },
        {
            "start": 100.46,
            "end": 103.7,
            "text": "所以，一个更有效的讲法是，客户才是主角。"
        },
        {
            "start": 103.7,
            "end": 105.24,
            "text": "你的品牌不是英雄，"
        },
        {
            "start": 105.24,
            "end": 107.62,
            "text": "而是帮助英雄完成任务的导师、"
        },
        {
            "start": 107.62,
            "end": 108.62,
            "text": "工具和伙伴。"
        },
        {
            "start": 108.62,
            "end": 109.72,
            "text": "第二，冲突。"
        },
        {
            "start": 109.84,
            "end": 111.44,
            "text": "没有冲突，就没有故事。"
        },
        {
            "start": 111.44,
            "end": 115.2,
            "text": "一个客户只是“用了某个产品，效果不错”，这不叫故事。"
        },
        {
            "start": 115.2,
            "end": 118.6,
            "text": "但如果这个客户原来正卡在一个真实问题里，"
        },
        {
            "start": 118.6,
            "end": 120.28,
            "text": "比如线索很多但转化很差，"
        },
        {
            "start": 120.28,
            "end": 122.9,
            "text": "比如团队越来越忙但增长越来越慢，"
        },
        {
            "start": 122.9,
            "end": 125.2,
            "text": "比如用户不断流失但找不到原因，"
        },
        {
            "start": 125.2,
            "end": 126.9,
            "text": "这时候冲突就出来了。"
        },
        {
            "start": 126.9,
            "end": 128.36,
            "text": "冲突让故事有张力。"
        },
        {
            "start": 128.58,
            "end": 130.0,
            "text": "也让听的人更容易代入。"
        },
        {
            "start": 130.0,
            "end": 131.24,
            "text": "第三，转折。"
        },
        {
            "start": 131.24,
            "end": 132.76,
            "text": "故事之所以吸引人，"
        },
        {
            "start": 132.76,
            "end": 134.3,
            "text": "是因为它不是平铺直叙，"
        },
        {
            "start": 134.3,
            "end": 135.6,
            "text": "而是出现了变化。"
        },
        {
            "start": 135.72,
            "end": 137.22,
            "text": "主角原来卡住了。"
        },
        {
            "start": 137.22,
            "end": 139.24,
            "text": "后来遇到了新的方法、新的视角、"
        },
        {
            "start": 139.44,
            "end": 141.6,
            "text": "新的工具，事情开始发生变化。"
        },
        {
            "start": 141.6,
            "end": 143.46,
            "text": "这个变化，不一定非要夸张。"
        },
        {
            "start": 143.46,
            "end": 145.44,
            "text": "关键是，要让人看到，"
        },
        {
            "start": 145.52,
            "end": 146.94,
            "text": "问题不是天然无解，"
        },
        {
            "start": 146.94,
            "end": 148.76,
            "text": "而是有被改写的可能。"
        },
        {
            "start": 148.76,
            "end": 149.78,
            "text": "第四，结局。"
        },
        {
            "start": 149.78,
            "end": 152.7,
            "text": "结局不是单纯说，结果提升了百分之多少。"
        },
        {
            "start": 152.7,
            "end": 154.34,
            "text": "当然，数据也重要。"
        },
        {
            "start": 154.34,
            "end": 156.9,
            "text": "但更有力量的结局，往往是，"
        },
        {
            "start": 156.9,
            "end": 159.38,
            "text": "主角变成了一个更有掌控感的人。"
        },
        {
            "start": 159.38,
            "end": 160.6,
            "text": "团队变得更稳。"
        },
        {
            "start": 160.78,
            "end": 161.88,
            "text": "客户关系变好了。"
        },
        {
            "start": 161.88,
            "end": 163.7,
            "text": "业务走出了原来的困局。"
        },
        {
            "start": 163.7,
            "end": 165.7,
            "text": "这时候，故事才真正完整。"
        },
        {
            "start": 165.7,
            "end": 168.22,
            "text": "主角、冲突、转折、结局。"
        },
        {
            "start": 168.22,
            "end": 170.86,
            "text": "这是最基本，也最耐用的叙事骨架。"
        },
        {
            "start": 170.86,
            "end": 173.26,
            "text": "你会发现，不只是客户案例，"
        },
        {
            "start": 173.26,
            "end": 175.88,
            "text": "创始人故事、品牌故事、用户故事，"
        },
        {
            "start": 175.88,
            "end": 177.34,
            "text": "甚至一封销售邮件，"
        },
        {
            "start": 177.34,
            "end": 179.1,
            "text": "其实都可以借用这个结构。"
        },
        {
            "start": 179.1,
            "end": 183.22,
            "text": "讲到这里，我们来看几个最常见的故事化营销场景。"
        },
        {
            "start": 183.22,
            "end": 184.72,
            "text": "第一，客户案例。"
        },
        {
            "start": 184.72,
            "end": 187.26,
            "text": "很多公司的客户案例写得像成绩单。"
        },
        {
            "start": 187.26,
            "end": 188.94,
            "text": "用了我们的产品以后，"
        },
        {
            "start": 188.94,
            "end": 190.56000000000003,
            "text": "效率提升百分之三十，"
        },
        {
            "start": 190.56000000000003,
            "end": 192.07999999999996,
            "text": "成本下降百分之二十，"
        },
        {
            "start": 192.08,
            "end": 193.94,
            "text": "满意度提升百分之十五。"
        },
        {
            "start": 193.94,
            "end": 197.76,
            "text": "这些数据不是没用，但如果只有数据，很难让人记住。"
        },
        {
            "start": 197.76,
            "end": 198.94,
            "text": "更有效的方式，"
        },
        {
            "start": 198.94,
            "end": 202.12,
            "text": "是先讲客户原来卡在哪里，他有多焦虑，"
        },
        {
            "start": 202.12,
            "end": 203.76,
            "text": "他试过什么没成功，"
        },
        {
            "start": 203.76,
            "end": 205.3,
            "text": "后来为什么会转向你，"
        },
        {
            "start": 205.3,
            "end": 207.12,
            "text": "最后事情是怎么改变的。"
        },
        {
            "start": 207.12,
            "end": 208.36,
            "text": "第二，创始人故事。"
        },
        {
            "start": 208.36,
            "end": 209.78,
            "text": "为什么你会做这件事？"
        },
        {
            "start": 209.78,
            "end": 210.98,
            "text": "你经历过什么问题？"
        },
        {
            "start": 210.98,
            "end": 213.16,
            "text": "你为什么对这个行业有这么强的执念？"
        },
        {
            "start": 213.16,
            "end": 216.28,
            "text": "创始人故事不是为了煽情，而是为了建立信任。"
        },
        {
            "start": 216.28,
            "end": 219.22,
            "text": "因为人更容易信任一个有来处、有立场、"
        },
        {
            "start": 219.22,
            "end": 220.14,
            "text": "有经历的人，"
        },
        {
            "start": 220.14,
            "end": 221.9,
            "text": "而不是一个抽象的公司名字。"
        },
        {
            "start": 221.9,
            "end": 224.04,
            "text": "第三，用户自己的故事。"
        },
        {
            "start": 224.04,
            "end": 225.78,
            "text": "很多最有感染力的内容，"
        },
        {
            "start": 225.78,
            "end": 227.72,
            "text": "不是品牌自己写出来的，"
        },
        {
            "start": 227.72,
            "end": 229.26,
            "text": "而是用户自己讲出来的。"
        },
        {
            "start": 229.26,
            "end": 231.7,
            "text": "用户分享自己的变化、自己的选择、"
        },
        {
            "start": 231.9,
            "end": 232.56,
            "text": "自己的经历，"
        },
        {
            "start": 232.56,
            "end": 234.72,
            "text": "这种内容的说服力往往非常强。"
        },
        {
            "start": 234.72,
            "end": 237.34,
            "text": "因为它不只是品牌在说自己好，"
        },
        {
            "start": 237.34,
            "end": 238.96,
            "text": "而是真实的人在说，"
        },
        {
            "start": 238.96,
            "end": 240.62,
            "text": "我为什么愿意相信它。"
        },
        {
            "start": 240.62,
            "end": 243.42,
            "text": "那 AI 在故事化营销里，应该扮演什么角色？"
        },
        {
            "start": 243.42,
            "end": 246.04,
            "text": "我的判断是，AI 适合放大故事，"
        },
        {
            "start": 246.04,
            "end": 248.36,
            "text": "但不适合代替人创造核心故事。"
        },
        {
            "start": 248.36,
            "end": 249.88,
            "text": "AI 很擅长做三件事。"
        },
        {
            "start": 249.88,
            "end": 251.48,
            "text": "第一，帮你整理素材。"
        },
        {
            "start": 251.48,
            "end": 254.4,
            "text": "客户访谈、用户评论、销售记录、"
        },
        {
            "start": 254.68,
            "end": 257.1,
            "text": "社群对话，这些原始材料往往很散。"
        },
        {
            "start": 257.1,
            "end": 260.84,
            "text": "AI 很适合帮你先把它们梳理成可用的故事元素。"
        },
        {
            "start": 260.84,
            "end": 262.48,
            "text": "第二，帮你搭结构。"
        },
        {
            "start": 262.48,
            "end": 264.28,
            "text": "你把核心信息给到 AI，"
        },
        {
            "start": 264.28,
            "end": 266.5,
            "text": "它可以帮你按照主角、冲突、转折、"
        },
        {
            "start": 266.5,
            "end": 269.1,
            "text": "结局的逻辑，先组织出一个故事框架。"
        },
        {
            "start": 269.1,
            "end": 271.41999999999996,
            "text": "第三，帮你做多格式改编。"
        },
        {
            "start": 271.41999999999996,
            "end": 273.86,
            "text": "一个客户故事，可以变成一篇文章、"
        },
        {
            "start": 273.86,
            "end": 276.72,
            "text": "一条短视频脚本、一组社交帖子、"
        },
        {
            "start": 276.72,
            "end": 279.24,
            "text": "一封邮件，甚至一页销售页文案。"
        },
        {
            "start": 279.24,
            "end": 281.7,
            "text": "AI 在这一步的效率非常高。"
        },
        {
            "start": 281.7,
            "end": 285.6,
            "text": "但 AI 做不到的一件事，是替你创造真正有生命力的真实感。"
        },
        {
            "start": 285.6,
            "end": 287.96,
            "text": "它可以模仿结构，可以模仿语气，"
        },
        {
            "start": 287.96,
            "end": 289.4,
            "text": "但它没有真实经历，"
        },
        {
            "start": 289.4,
            "end": 291.76,
            "text": "也没有真正站在场景里的情绪。"
        },
        {
            "start": 291.76,
            "end": 294.64,
            "text": "所以最好的方法，不是让 AI 凭空讲故事，"
        },
        {
            "start": 294.64,
            "end": 297.58,
            "text": "而是由人提供真实素材和真实感受，"
        },
        {
            "start": 297.58,
            "end": 299.86,
            "text": "再让 AI 去放大、整理和改编。"
        },
        {
            "start": 299.86,
            "end": 301.82,
            "text": "这也会带出一个更深的判断。"
        },
        {
            "start": 301.82,
            "end": 303.2,
            "text": "在 AI 时代，"
        },
        {
            "start": 303.2,
            "end": 305.9,
            "text": "当大家都能快速做出还不错的内容时，"
        },
        {
            "start": 305.9,
            "end": 308.26,
            "text": "真正的差异化越来越来自人本身。"
        },
        {
            "start": 308.26,
            "end": 309.74,
            "text": "来自你的经历。"
        },
        {
            "start": 309.74,
            "end": 310.6,
            "text": "你的失败。"
        },
        {
            "start": 310.6,
            "end": 311.48,
            "text": "你的反思。"
        },
        {
            "start": 311.48,
            "end": 312.6,
            "text": "你的价值观。"
        },
        {
            "start": 312.6,
            "end": 314.1,
            "text": "你为什么做这件事。"
        },
        {
            "start": 314.1,
            "end": 315.22,
            "text": "你愿意坚持什么。"
        },
        {
            "start": 315.22,
            "end": 316.5,
            "text": "你不愿意妥协什么。"
        },
        {
            "start": 316.5,
            "end": 318.76,
            "text": "这些东西，AI 没办法真正替代。"
        },
        {
            "start": 318.76,
            "end": 322.68,
            "text": "所以，如果你问我，在 AI 时代品牌最值得加码的是什么？"
        },
        {
            "start": 322.68,
            "end": 326.36,
            "text": "我的答案会是，真实的人，真实的故事，真实的立场。"
        },
        {
            "start": 326.36,
            "end": 327.68,
            "text": "AI 当然要用。"
        },
        {
            "start": 327.68,
            "end": 330.2,
            "text": "但你要把 AI 用在放大这些真实感上，"
        },
        {
            "start": 330.2,
            "end": 333.06,
            "text": "而不是让它把你的品牌也磨平成另外一个模板。"
        },
        {
            "start": 333.06,
            "end": 334.9,
            "text": "最后给你一个很实用的提醒。"
        },
        {
            "start": 334.9,
            "end": 337.92,
            "text": "做故事化营销，不是为了写得更煽情。"
        },
        {
            "start": 337.92,
            "end": 339.62,
            "text": "而是为了让你的品牌表达，"
        },
        {
            "start": 339.62,
            "end": 341.34,
            "text": "从“我想告诉你什么”，"
        },
        {
            "start": 341.34,
            "end": 343.66,
            "text": "转成“你为什么会在乎这件事”。"
        },
        {
            "start": 343.66,
            "end": 346.0,
            "text": "当品牌学会从用户视角讲故事，"
        },
        {
            "start": 346.0,
            "end": 348.26,
            "text": "营销的穿透力会完全不一样。"
        },
        {
            "start": 348.26,
            "end": 349.48,
            "text": "好，总结一下。"
        },
        {
            "start": 349.48,
            "end": 352.2,
            "text": "故事化营销的核心，不是讲得多华丽，"
        },
        {
            "start": 352.2,
            "end": 355.44,
            "text": "而是让客户成为主角，让冲突真实，"
        },
        {
            "start": 355.68,
            "end": 358.32,
            "text": "让转折成立，让结局有感受。"
        },
        {
            "start": 358.32,
            "end": 363.3,
            "text": "AI 最适合做的是整理素材、搭建结构和多格式改编。"
        },
        {
            "start": 363.3,
            "end": 366.28,
            "text": "但真正让品牌产生差异化的，"
        },
        {
            "start": 366.28,
            "end": 367.56,
            "text": "仍然是人的经历、"
        },
        {
            "start": 367.66,
            "end": 369.72,
            "text": "人的温度和人的价值观。"
        },
        {
            "start": 369.72,
            "end": 371.94,
            "text": "下一期我们继续聊 B2B 营销。"
        },
        {
            "start": 371.94,
            "end": 374.16,
            "text": "看看企业客户到底该怎么打。"
        },
        {
            "start": 374.16,
            "end": 376.02,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 8.26,
        "index": 0
    },
    {
        "start": 8.26,
        "end": 76.38,
        "index": 1
    },
    {
        "start": 76.38,
        "end": 179.1,
        "index": 2
    },
    {
        "start": 179.1,
        "end": 240.62,
        "index": 3
    },
    {
        "start": 240.62,
        "end": 299.86,
        "index": 4
    },
    {
        "start": 299.86,
        "end": 333.06,
        "index": 5
    },
    {
        "start": 333.06,
        "end": 348.26,
        "index": 6
    },
    {
        "start": 348.26,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把品牌表达从“我想说什么”转成“用户为什么会在乎”，用故事建立真实感、记忆点和信任。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-09", coachSource: "./ai-coach.html?source=lesson-marketing-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于故事化营销：AI 时代更需要人的温度的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "故事化营销：AI 时代更需要人的温度", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
