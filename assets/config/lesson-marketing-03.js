(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第3课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第3课：4P 到 4C：营销组合怎么设计",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep36-marketing-mix/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：4P 到 4C：营销组合怎么设计", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-3", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从问题开始",
                "body": "4P 是营销学之父 Philip Kotler 推广开来的"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "二，AI 实现了产品个性化"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键判断",
                "body": "第一，全渠道融合"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "内容方面，AI 可以帮你规模化地生成文案、图片、视频"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 3/3", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-03", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson3", audioSource: './assets/audio/marketing-ep36-marketing-mix.mp3?v=20260410-marketing-03c', vttSrc: './assets/subtitles/marketing-ep36-marketing-mix.vtt?v=20260410-marketing-03c', slideBasePath: './assets/slides/', slideVersion: '?v=20260410-marketing-03c', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep36-marketing-mix/slide_01.png",
            "label": "4P 到 4C：营销组合怎么设计",
            "caption": "这一节会帮助你系统理解：4P 到 4C：营销组合怎么设计"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_03.png",
            "label": "核心框架",
            "caption": "二，AI 实现了产品个性化。 AI 可以根据每个用户的偏好和行为来调整产品体验。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_04.png",
            "label": "关键判断",
            "caption": "第一，全渠道融合。 AI 可以打通线上线下的数据，让客户在任何渠道都有一致的体验。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "内容方面，AI 可以帮你规模化地生成文案、图片、视频。 一个人加 AI 可以做出过去十个人团队的内容产出量。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_06.png",
            "label": "回到你的业务",
            "caption": "Cost：客户付出的不只是钱，还包括时间、精力、心理成本。 你的产品可能价格便宜，但如果使用很复杂、学习成本很高，客户的总成本其实不低。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_07.png",
            "label": "风险与提醒",
            "caption": "你可以把这四个问题和你的相关数据输入给 AI，让它帮你做一个营销组合的诊断和优化建议。 好，总结一下。"
        },
        {
            "file": "marketing-ep36-marketing-mix/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.0,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.0,
            "end": 2.68,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 2.68,
            "end": 5.5,
            "text": "今天来聊一个营销学里最经典的框架："
        },
        {
            "start": 5.5,
            "end": 7.6,
            "text": "4P，以及它的升级版 4C。"
        },
        {
            "start": 7.6,
            "end": 11.3,
            "text": "4P 是营销学之父 Philip Kotler 推广开来的。"
        },
        {
            "start": 11.3,
            "end": 13.54,
            "text": "四个 P 分别是：Product，产品。"
        },
        {
            "start": 13.54,
            "end": 14.68,
            "text": "Price，价格。"
        },
        {
            "start": 14.94,
            "end": 15.76,
            "text": "Place，渠道。"
        },
        {
            "start": 15.76,
            "end": 16.9,
            "text": "Promotion，推广。"
        },
        {
            "start": 16.9,
            "end": 20.02,
            "text": "这四个维度加在一起，就是你的营销组合。"
        },
        {
            "start": 20.02,
            "end": 20.66,
            "text": "Marketing Mix。"
        },
        {
            "start": 20.66,
            "end": 23.240000000000002,
            "text": "你可以把它理解为营销的四个可调节旋钮。"
        },
        {
            "start": 23.240000000000002,
            "end": 26.08,
            "text": "每个旋钮怎么调，决定了你的营销策略。"
        },
        {
            "start": 26.08,
            "end": 27.88,
            "text": "先说 Product，产品。"
        },
        {
            "start": 27.88,
            "end": 31.42,
            "text": "传统思维是，我做一个好产品，然后想办法卖出去。"
        },
        {
            "start": 31.42,
            "end": 33.44,
            "text": "但今天更重要的思维是，"
        },
        {
            "start": 33.44,
            "end": 35.2,
            "text": "先搞清楚客户需要什么，"
        },
        {
            "start": 35.2,
            "end": 37.26,
            "text": "再做一个真正满足需求的产品。"
        },
        {
            "start": 37.26,
            "end": 39.06,
            "text": "产品不只是物理属性。"
        },
        {
            "start": 39.06,
            "end": 41.58,
            "text": "它还包括功能、品质、设计、品牌、"
        },
        {
            "start": 41.84,
            "end": 43.42,
            "text": "包装、售后服务、用户体验。"
        },
        {
            "start": 43.42,
            "end": 46.88,
            "text": "所有这些加起来，才构成客户感知到的总产品。"
        },
        {
            "start": 46.88,
            "end": 49.3,
            "text": "AI 对产品设计的影响非常大。"
        },
        {
            "start": 49.3,
            "end": 51.18,
            "text": "第一，AI 加速了产品迭代。"
        },
        {
            "start": 51.18,
            "end": 53.1,
            "text": "过去做用户调研要几周，"
        },
        {
            "start": 53.1,
            "end": 56.08,
            "text": "现在 AI 可以实时分析用户反馈和行为数据，"
        },
        {
            "start": 56.08,
            "end": 58.32,
            "text": "更快发现产品改进点。"
        },
        {
            "start": 58.32,
            "end": 60.68,
            "text": "第二，AI 实现了产品个性化。"
        },
        {
            "start": 60.68,
            "end": 64.56,
            "text": "AI 可以根据每个用户的偏好和行为，动态调整产品体验。"
        },
        {
            "start": 64.56,
            "end": 66.7,
            "text": "你看到的界面、推荐内容、功能入口，"
        },
        {
            "start": 66.7,
            "end": 68.36,
            "text": "可能跟别人完全不同。"
        },
        {
            "start": 68.36,
            "end": 70.86,
            "text": "第三，AI 本身就是产品的一部分。"
        },
        {
            "start": 70.86,
            "end": 73.68,
            "text": "越来越多的产品都开始内嵌 AI 功能。"
        },
        {
            "start": 73.68,
            "end": 76.56,
            "text": "搜索有 AI，客服有 AI，推荐有 AI。"
        },
        {
            "start": 76.56,
            "end": 79.24,
            "text": "AI 不再只是加分项，而正在变成标配。"
        },
        {
            "start": 79.24,
            "end": 81.0,
            "text": "再说 Price，价格。"
        },
        {
            "start": 81.0,
            "end": 83.76,
            "text": "上一个模块我们专门花了一期讲定价策略，"
        },
        {
            "start": 83.76,
            "end": 85.0,
            "text": "这里简单回顾一下。"
        },
        {
            "start": 85.0,
            "end": 86.54,
            "text": "定价大致有三层。"
        },
        {
            "start": 86.54,
            "end": 88.7,
            "text": "成本加成，是最基础的。"
        },
        {
            "start": 88.7,
            "end": 90.38,
            "text": "竞争定价，是看对手。"
        },
        {
            "start": 90.38,
            "end": 94.06,
            "text": "价值定价，是看客户真正获得了多大价值。"
        },
        {
            "start": 94.06,
            "end": 98.52,
            "text": "AI 对定价最大的改变，是让价格变得更动态，也更个性化。"
        },
        {
            "start": 98.52,
            "end": 101.06,
            "text": "价格不再只是贴在商品上的固定标签，"
        },
        {
            "start": 101.06,
            "end": 103.04,
            "text": "而可以根据时间、场景、"
        },
        {
            "start": 103.04,
            "end": 104.82,
            "text": "用户特征实时调整。"
        },
        {
            "start": 104.82,
            "end": 106.6,
            "text": "但这里要记住一个边界。"
        },
        {
            "start": 106.6,
            "end": 110.04,
            "text": "动态定价可以做，大数据杀熟不能做。"
        },
        {
            "start": 110.04,
            "end": 112.5,
            "text": "第三个 P，Place，渠道。"
        },
        {
            "start": 112.5,
            "end": 115.06,
            "text": "渠道就是你的产品怎么到达客户手里。"
        },
        {
            "start": 115.06,
            "end": 118.62,
            "text": "是线下门店，是电商平台，是自有网站，"
        },
        {
            "start": 118.62,
            "end": 120.96,
            "text": "是社交媒体，还是直销团队。"
        },
        {
            "start": 120.96,
            "end": 124.22,
            "text": "传统渠道策略要考虑覆盖面、控制力和成本。"
        },
        {
            "start": 124.22,
            "end": 127.9,
            "text": "渠道越多，覆盖越广，但管理成本通常也越高。"
        },
        {
            "start": 127.9,
            "end": 130.18,
            "text": "AI 对渠道的影响，主要有两个方向。"
        },
        {
            "start": 130.56,
            "end": 131.94,
            "text": "第一，全渠道融合。"
        },
        {
            "start": 131.94,
            "end": 134.5,
            "text": "AI 可以把线上线下数据打通，"
        },
        {
            "start": 134.5,
            "end": 137.72,
            "text": "让客户在任何渠道都能获得更一致的体验。"
        },
        {
            "start": 137.72,
            "end": 139.8,
            "text": "客户在网上看过你的产品，"
        },
        {
            "start": 139.8,
            "end": 142.78,
            "text": "到门店还能接上；在门店试过产品，"
        },
        {
            "start": 142.78,
            "end": 144.52,
            "text": "回家再下单也不会断掉。"
        },
        {
            "start": 144.52,
            "end": 147.38,
            "text": "第二，AI 正在改变渠道本身。"
        },
        {
            "start": 147.38,
            "end": 151.54,
            "text": "AI 搜索、AI 推荐、AI 助手，正在成为新的渠道入口。"
        },
        {
            "start": 151.54,
            "end": 155.98,
            "text": "过去客户通过搜索引擎找到你，现在他可能先问 AI。"
        },
        {
            "start": 155.98,
            "end": 159.48,
            "text": "这意味着，你需要在 AI 系统里有存在感。"
        },
        {
            "start": 159.48,
            "end": 161.26,
            "text": "还有一个趋势，是 DTC。"
        },
        {
            "start": 161.26,
            "end": 164.1,
            "text": "Direct to Consumer，直接面向消费者。"
        },
        {
            "start": 164.1,
            "end": 166.42,
            "text": "社交媒体和电商工具的成熟，"
        },
        {
            "start": 166.42,
            "end": 168.52,
            "text": "让品牌可以跳过中间商，"
        },
        {
            "start": 168.52,
            "end": 170.12,
            "text": "直接服务消费者。"
        },
        {
            "start": 170.12,
            "end": 171.92,
            "text": "AI 又让这件事更容易了。"
        },
        {
            "start": 171.92,
            "end": 173.96,
            "text": "你可以用 AI 做客服、做推荐、"
        },
        {
            "start": 173.96,
            "end": 175.08,
            "text": "做个性化营销，"
        },
        {
            "start": 175.08,
            "end": 177.86,
            "text": "一个小团队就能跑起一个 DTC 品牌。"
        },
        {
            "start": 177.86,
            "end": 180.18,
            "text": "第四个 P，Promotion，推广。"
        },
        {
            "start": 180.18,
            "end": 183.44,
            "text": "推广包括广告、公关、促销、内容营销、"
        },
        {
            "start": 183.44,
            "end": 186.76,
            "text": "社交媒体、SEO，所有让目标客户知道你、"
        },
        {
            "start": 186.76,
            "end": 188.7,
            "text": "了解你、信任你、购买你的动作，"
        },
        {
            "start": 188.7,
            "end": 189.78,
            "text": "都属于推广。"
        },
        {
            "start": 189.78,
            "end": 192.08,
            "text": "这可能是 AI 影响最大的一个 P。"
        },
        {
            "start": 192.08,
            "end": 194.58,
            "text": "因为推广的核心是内容和投放，"
        },
        {
            "start": 194.58,
            "end": 197.02,
            "text": "而 AI 在这两个方面的能力提升，"
        },
        {
            "start": 197.02,
            "end": 198.42,
            "text": "是革命性的。"
        },
        {
            "start": 198.42,
            "end": 202.22,
            "text": "内容方面，AI 可以帮你规模化生成文案、图片、视频。"
        },
        {
            "start": 202.22,
            "end": 206.58,
            "text": "一个人加 AI，就可能做出过去十个人团队的内容产出量。"
        },
        {
            "start": 206.58,
            "end": 210.64,
            "text": "投放方面，AI 可以帮你精准定向、自动出价、实时优化。"
        },
        {
            "start": 210.64,
            "end": 213.02,
            "text": "你不需要手动不停调广告计划，"
        },
        {
            "start": 213.02,
            "end": 216.0,
            "text": "AI 可以根据效果数据持续学习和优化。"
        },
        {
            "start": 216.0,
            "end": 218.62,
            "text": "但推广也是最容易翻车的环节。"
        },
        {
            "start": 218.62,
            "end": 219.9,
            "text": "AI 生成的内容，"
        },
        {
            "start": 219.9,
            "end": 221.94,
            "text": "如果缺少品牌调性和人情味，"
        },
        {
            "start": 221.94,
            "end": 223.86,
            "text": "会让人觉得你的品牌很塑料。"
        },
        {
            "start": 223.86,
            "end": 228.48,
            "text": "所以更好的分工是，AI 负责量和效率，人负责质和温度。"
        },
        {
            "start": 228.48,
            "end": 229.98,
            "text": "好，4P 讲完了。"
        },
        {
            "start": 229.98,
            "end": 232.16,
            "text": "现在来讲它的升级版，4C。"
        },
        {
            "start": 232.16,
            "end": 234.5,
            "text": "4C 是 Robert Lauterborn 提出的，"
        },
        {
            "start": 234.5,
            "end": 236.08,
            "text": "代表了一个非常重要的转变，"
        },
        {
            "start": 236.08,
            "end": 239.18,
            "text": "也就是从卖方思维转向买方思维。"
        },
        {
            "start": 239.18,
            "end": 242.64,
            "text": "Product，对应 Customer Value，也就是客户价值。"
        },
        {
            "start": 242.64,
            "end": 245.6,
            "text": "Price，对应 Cost，也就是客户总成本。"
        },
        {
            "start": 245.6,
            "end": 248.72,
            "text": "Place，对应 Convenience，也就是便利性。"
        },
        {
            "start": 248.72,
            "end": 251.92,
            "text": "Promotion，对应 Communication，也就是双向沟通。"
        },
        {
            "start": 251.92,
            "end": 252.96,
            "text": "这是什么意思呢？"
        },
        {
            "start": 252.96,
            "end": 253.7,
            "text": "Customer Value。"
        },
        {
            "start": 253.7,
            "end": 255.88,
            "text": "不要从我有什么产品出发，"
        },
        {
            "start": 255.88,
            "end": 258.98,
            "text": "而要从客户真正需要什么价值出发。"
        },
        {
            "start": 258.98,
            "end": 259.48,
            "text": "Cost。"
        },
        {
            "start": 259.48,
            "end": 262.24,
            "text": "客户付出的不只是钱，还包括时间、"
        },
        {
            "start": 262.24,
            "end": 264.02,
            "text": "精力、学习成本、心理成本。"
        },
        {
            "start": 264.02,
            "end": 265.62,
            "text": "你的产品可能看起来不贵，"
        },
        {
            "start": 265.62,
            "end": 267.44,
            "text": "但如果很难上手，"
        },
        {
            "start": 267.44,
            "end": 269.26,
            "text": "客户的总成本其实很高。"
        },
        {
            "start": 269.26,
            "end": 269.9,
            "text": "Convenience。"
        },
        {
            "start": 269.9,
            "end": 271.68,
            "text": "不是你想在哪个渠道卖，"
        },
        {
            "start": 271.68,
            "end": 274.2,
            "text": "而是客户在哪个渠道买起来最方便。"
        },
        {
            "start": 274.2,
            "end": 274.84,
            "text": "Communication。"
        },
        {
            "start": 274.84,
            "end": 276.84,
            "text": "不是单向地去推广给客户，"
        },
        {
            "start": 276.84,
            "end": 279.72,
            "text": "而是跟客户建立持续的双向沟通和互动。"
        },
        {
            "start": 279.72,
            "end": 282.52,
            "text": "4C 的思维在 AI 时代其实更重要。"
        },
        {
            "start": 282.52,
            "end": 284.28,
            "text": "因为 AI 让你更容易理解客户，"
        },
        {
            "start": 284.28,
            "end": 286.9,
            "text": "减少客户总成本，提高购买便利性，"
        },
        {
            "start": 286.9,
            "end": 288.62,
            "text": "也更容易形成持续互动。"
        },
        {
            "start": 288.62,
            "end": 292.36,
            "text": "最后给大家一个营销组合设计时非常实用的检查框架。"
        },
        {
            "start": 292.36,
            "end": 293.92,
            "text": "你可以问自己四个问题。"
        },
        {
            "start": 293.92,
            "end": 297.06,
            "text": "第一，我的产品给客户创造了什么独特价值？"
        },
        {
            "start": 297.06,
            "end": 299.6,
            "text": "这个价值是不是客户真正需要的？"
        },
        {
            "start": 299.6,
            "end": 302.9,
            "text": "第二，我的定价是不是跟客户感知到的价值匹配？"
        },
        {
            "start": 302.9,
            "end": 304.94,
            "text": "客户的总成本是不是可接受？"
        },
        {
            "start": 304.94,
            "end": 308.46,
            "text": "第三，我的渠道是不是出现在客户最方便的地方？"
        },
        {
            "start": 308.46,
            "end": 312.04,
            "text": "从发现到购买到使用，这条路径是不是足够顺畅？"
        },
        {
            "start": 312.04,
            "end": 314.82,
            "text": "第四，我跟客户的沟通是不是双向的？"
        },
        {
            "start": 314.82,
            "end": 317.14,
            "text": "我有没有真正听到客户在说什么？"
        },
        {
            "start": 317.14,
            "end": 320.78,
            "text": "你甚至可以把这四个问题连同你的业务数据一起给到 AI，"
        },
        {
            "start": 320.78,
            "end": 323.17999999999995,
            "text": "让它先帮你做一个营销组合诊断，"
        },
        {
            "start": 323.18,
            "end": 325.76,
            "text": "再由你来判断哪些建议值得采用。"
        },
        {
            "start": 325.76,
            "end": 327.06,
            "text": "好，总结一下。"
        },
        {
            "start": 327.06,
            "end": 329.32,
            "text": "4P 是营销组合的经典框架。"
        },
        {
            "start": 329.32,
            "end": 332.42,
            "text": "Product，Price，Place，Promotion。"
        },
        {
            "start": 332.42,
            "end": 334.1,
            "text": "4C 是它的升级版。"
        },
        {
            "start": 334.1,
            "end": 334.84,
            "text": "它提醒你，"
        },
        {
            "start": 334.84,
            "end": 336.96,
            "text": "营销不能只从企业要卖什么出发，"
        },
        {
            "start": 336.96,
            "end": 339.12,
            "text": "而要回到客户价值、客户成本、"
        },
        {
            "start": 339.12,
            "end": 340.74,
            "text": "客户便利和双向沟通。"
        },
        {
            "start": 340.74,
            "end": 345.02,
            "text": "AI 正在重塑每一个 P，也正在放大 4C 的价值。"
        },
        {
            "start": 345.02,
            "end": 349.84,
            "text": "产品更个性化，价格更动态，渠道更融合，推广更规模化。"
        },
        {
            "start": 349.84,
            "end": 354.04,
            "text": "但真正的核心依然没有变，就是始终从客户价值出发。"
        },
        {
            "start": 354.04,
            "end": 356.8,
            "text": "下一期我们聊消费者决策心理。"
        },
        {
            "start": 356.8,
            "end": 360.6,
            "text": "人为什么买单，AI 又怎么帮助我们更早看见购买意图。"
        },
        {
            "start": 360.6,
            "end": 362.52,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.555,
        "index": 0
    },
    {
        "start": 10.555,
        "end": 66.103,
        "index": 1
    },
    {
        "start": 66.103,
        "end": 122.575,
        "index": 2
    },
    {
        "start": 122.575,
        "end": 179.31,
        "index": 3
    },
    {
        "start": 179.31,
        "end": 233.143,
        "index": 4
    },
    {
        "start": 233.143,
        "end": 288.558,
        "index": 5
    },
    {
        "start": 288.558,
        "end": 350.835,
        "index": 6
    },
    {
        "start": 350.835,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-03", coachSource: "./ai-coach.html?source=lesson-marketing-03" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于4P 到 4C：营销组合怎么设计的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "4P 到 4C：营销组合怎么设计", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
