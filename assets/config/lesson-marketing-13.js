(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing13 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第13课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第13课：案例：一个直面消费者品牌如何用 AI 从零做到千万",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep46-direct-brand/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：一个直面消费者品牌如何用 AI 从零做到千万", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-13", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "B2B 营销：企业客户怎么打",
                "body": "理解 B2B 的多角色决策和长周期购买，再用 ABM、线索培育、AI 评分与销售协同建立更稳的企业获客系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "出海营销：AI 如何降低全球化门槛",
                "body": "把出海最难的语言、文化和市场洞察拆开来看，再用 AI 建立更轻量的全球化营销打法。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：可口可乐的 AI 营销实验",
                "body": "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：一个直面消费者品牌如何用 AI 从零做到千万",
                "body": "从一个小团队品牌的成长路径里，看清楚 AI 怎样帮助品牌完成验证、冷启动、规模化增长和长期复购。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从一个小团队品牌的成长路径里，看清楚 AI 怎样帮助品牌完成验证、冷启动、规模化增长和长期复购。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先验证，再放量，别把预算花在没验证过的概念上",
                "body": "AI 最先帮助你的，不是规模化，而是更便宜地验证痛点、定位和产品概念。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "小团队的优势，不是全靠硬扛，而是懂得把 AI 放在对的位置",
                "body": "从内容、广告到客服，AI 可以显著放大执行力，但前提是你先设计好增长路径。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "长期价值不在第一次成交，而在复购与长期用户价值",
                "body": "补货提醒、交叉推荐、会员运营和反馈分析，决定品牌能不能从爆款走向长期生意。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 13/13", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-13", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson13", audioSource: './assets/audio/marketing-ep46-direct-brand.mp3?v=20260411-marketing-13a', vttSrc: './assets/subtitles/marketing-ep46-direct-brand.vtt?v=20260411-marketing-13a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep46-direct-brand/slide_01.png",
            "label": "案例：一个直面消费者品牌如何用 AI 从零做到千万",
            "caption": "这一节会帮助你系统理解：案例：一个直面消费者品牌如何用 AI 从零做到千万"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_02.png",
            "label": "先看这个模式为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_03.png",
            "label": "第一阶段：验证机会",
            "caption": "比如职场人群想要功能性零食，但市面上的产品不是太贵，就是太难吃，不然就是包装和品牌感太弱。 这个阶段 AI 最重要的价值，是帮你更便宜地验证，而不是帮你直接拍板。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_04.png",
            "label": "第三阶段：冷启动获客",
            "caption": "冷启动的关键不是预算有多大，而是能不能先找到第一批真正愿意尝试你的用户。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_05.png",
            "label": "第四阶段：规模化增长",
            "caption": "当产品和渠道被验证之后，AI 的价值会从“试错工具”升级成“增长放大器”。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_06.png",
            "label": "第五阶段：复购与长期价值",
            "caption": "真正能把品牌做成长期生意的，不是第一次成交，而是后面的持续复购。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_07.png",
            "label": "这个模式真正的优势",
            "caption": "AI 并不替你成功，但它会让你用更小的团队、更低的成本、更快地验证机会。"
        },
        {
            "file": "marketing-ep46-direct-brand/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.06,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.06,
            "end": 2.92,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 2.92,
            "end": 6.12,
            "text": "上一期我们看了可口可乐这样的百年巨头怎么用 AI。"
        },
        {
            "start": 6.12,
            "end": 7.66,
            "text": "今天我们换一个视角。"
        },
        {
            "start": 7.66,
            "end": 9.86,
            "text": "如果是一个小团队、低预算、"
        },
        {
            "start": 9.86,
            "end": 11.44,
            "text": "没有太多资源的新品牌，"
        },
        {
            "start": 11.44,
            "end": 13.32,
            "text": "怎么借助 AI 从零起步，"
        },
        {
            "start": 13.32,
            "end": 14.92,
            "text": "把生意做到年销千万。"
        },
        {
            "start": 14.92,
            "end": 18.54,
            "text": "这节课我想讲的，是一种“品牌直接卖给消费者”的模式。"
        },
        {
            "start": 19.0,
            "end": 20.120000000000005,
            "text": "没有层层经销商，"
        },
        {
            "start": 20.120000000000005,
            "end": 22.06,
            "text": "也不严重依赖线下渠道，"
        },
        {
            "start": 22.06,
            "end": 24.3,
            "text": "而是品牌自己面对消费者，"
        },
        {
            "start": 24.3,
            "end": 27.02,
            "text": "自己掌握内容、获客、转化和复购。"
        },
        {
            "start": 27.02,
            "end": 29.48,
            "text": "过去这种模式已经很有吸引力。"
        },
        {
            "start": 29.48,
            "end": 32.68,
            "text": "而 AI 出现之后，它的门槛又被明显拉低了。"
        },
        {
            "start": 32.68,
            "end": 33.36,
            "text": "所以今天，"
        },
        {
            "start": 33.36,
            "end": 35.44,
            "text": "我不讲某一家具体公司的传记，"
        },
        {
            "start": 35.44,
            "end": 37.76,
            "text": "而是综合多个真实品牌的实践，"
        },
        {
            "start": 37.76,
            "end": 40.18,
            "text": "带你看一条更完整的成长路径。"
        },
        {
            "start": 40.18,
            "end": 42.68,
            "text": "第一阶段，是发现机会和验证机会。"
        },
        {
            "start": 42.68,
            "end": 44.48,
            "text": "时间大约一到两个月。"
        },
        {
            "start": 44.48,
            "end": 46.7,
            "text": "创始人先看到一个真实问题。"
        },
        {
            "start": 46.7,
            "end": 49.3,
            "text": "比如职场人群想要功能性零食，"
        },
        {
            "start": 49.3,
            "end": 52.12,
            "text": "但市面上的产品不是太贵，就是太难吃，"
        },
        {
            "start": 52.12,
            "end": 54.2,
            "text": "不然就是包装和品牌感太弱。"
        },
        {
            "start": 54.2,
            "end": 56.64,
            "text": "这个阶段 AI 最重要的价值，"
        },
        {
            "start": 56.64,
            "end": 58.5,
            "text": "是帮你更便宜地验证，"
        },
        {
            "start": 58.5,
            "end": 59.96,
            "text": "而不是帮你直接拍板。"
        },
        {
            "start": 59.96,
            "end": 61.42,
            "text": "第一，验证痛点。"
        },
        {
            "start": 61.42,
            "end": 63.54,
            "text": "用 AI 去分析社交媒体、"
        },
        {
            "start": 63.54,
            "end": 65.16,
            "text": "电商评论和用户讨论，"
        },
        {
            "start": 65.16,
            "end": 67.12,
            "text": "看看大家最常抱怨什么。"
        },
        {
            "start": 67.12,
            "end": 69.9,
            "text": "如果“太甜”“添加剂多”“包装不方便"
        },
        {
            "start": 69.9,
            "end": 71.4,
            "text": "”这样的词反复出现，"
        },
        {
            "start": 71.4,
            "end": 73.5,
            "text": "就说明痛点确实存在。"
        },
        {
            "start": 73.5,
            "end": 74.76,
            "text": "第二，分析竞品。"
        },
        {
            "start": 74.76,
            "end": 77.52,
            "text": "让 AI 快速梳理市场上的定位、价格、"
        },
        {
            "start": 77.52,
            "end": 78.36,
            "text": "渠道和评价，"
        },
        {
            "start": 78.36,
            "end": 81.44,
            "text": "看看有没有一个还没有被很好满足的中间区间。"
        },
        {
            "start": 81.44,
            "end": 82.82,
            "text": "第三，测试概念。"
        },
        {
            "start": 82.82,
            "end": 85.7,
            "text": "先做几个不同的产品概念和表达方向，"
        },
        {
            "start": 85.7,
            "end": 87.38,
            "text": "用小预算投放测试，"
        },
        {
            "start": 87.38,
            "end": 89.8,
            "text": "看哪个概念点击率和互动率更高。"
        },
        {
            "start": 89.8,
            "end": 91.62,
            "text": "这个阶段花的钱不一定多，"
        },
        {
            "start": 91.62,
            "end": 94.34,
            "text": "但它会决定你后面有没有必要继续投入。"
        },
        {
            "start": 94.34,
            "end": 97.56,
            "text": "第二阶段，是品牌建设和内容启动。"
        },
        {
            "start": 97.56,
            "end": 100.22,
            "text": "机会验证通过以后，就要开始做品牌。"
        },
        {
            "start": 100.22,
            "end": 101.8,
            "text": "过去这一步往往很贵。"
        },
        {
            "start": 101.8,
            "end": 105.06,
            "text": "名字、标志、视觉风格、内容体系，"
        },
        {
            "start": 105.06,
            "end": 107.88,
            "text": "动不动就要花很多钱去找团队完整搭一套。"
        },
        {
            "start": 107.88,
            "end": 111.28,
            "text": "现在 AI 可以先帮你把初稿和方向大量跑出来。"
        },
        {
            "start": 111.28,
            "end": 113.88,
            "text": "名字可以先头脑风暴出很多候选。"
        },
        {
            "start": 113.88,
            "end": 116.5,
            "text": "视觉风格可以先试很多不同方向。"
        },
        {
            "start": 116.5,
            "end": 118.78,
            "text": "产品详情页、品牌故事、种草内容，"
        },
        {
            "start": 118.78,
            "end": 121.04,
            "text": "也都可以先由 AI 帮你搭起第一版。"
        },
        {
            "start": 121.04,
            "end": 124.56,
            "text": "这一步最重要的，不是让 AI 替你决定品牌长什么样。"
        },
        {
            "start": 124.56,
            "end": 126.26,
            "text": "而是让你用更低的成本，"
        },
        {
            "start": 126.26,
            "end": 128.06,
            "text": "更快看到十几个方向，"
        },
        {
            "start": 128.06,
            "end": 129.72,
            "text": "再去选最对的那个。"
        },
        {
            "start": 129.72,
            "end": 132.22,
            "text": "同时，内容体系也可以一起启动。"
        },
        {
            "start": 132.22,
            "end": 133.48000000000002,
            "text": "你把核心理念、"
        },
        {
            "start": 133.48000000000002,
            "end": 135.6,
            "text": "用户场景和品牌故事讲清楚，"
        },
        {
            "start": 135.6,
            "end": 138.1,
            "text": "AI 就可以把它改写成短视频脚本、"
        },
        {
            "start": 138.1,
            "end": 141.0,
            "text": "种草笔记、公众号文章和详情页文案。"
        },
        {
            "start": 141.0,
            "end": 145.1,
            "text": "一个人加 AI，能跑出过去三到五个人内容团队的产出量。"
        },
        {
            "start": 145.1,
            "end": 147.32,
            "text": "第三阶段，是冷启动获客。"
        },
        {
            "start": 147.32,
            "end": 150.78,
            "text": "产品上线以后，真正难的是第一批客户从哪里来。"
        },
        {
            "start": 150.78,
            "end": 153.16,
            "text": "最常见的第一步，不是找大网红，"
        },
        {
            "start": 153.16,
            "end": 154.7,
            "text": "而是找一批更小体量、"
        },
        {
            "start": 154.7,
            "end": 156.86,
            "text": "但调性更匹配的种草博主。"
        },
        {
            "start": 156.86,
            "end": 161.12,
            "text": "因为他们更真实，也更容易带来第一批愿意尝试你的用户。"
        },
        {
            "start": 161.12,
            "end": 163.22,
            "text": "AI 可以帮你筛选合作对象。"
        },
        {
            "start": 163.22,
            "end": 165.6,
            "text": "看粉丝画像、互动率、内容调性，"
        },
        {
            "start": 165.6,
            "end": 167.78,
            "text": "再生成更个性化的合作邀请。"
        },
        {
            "start": 167.78,
            "end": 170.3,
            "text": "第二个动作，是精准广告测试。"
        },
        {
            "start": 170.3,
            "end": 172.76,
            "text": "你可以让 AI 一次生成多组文案角度、"
        },
        {
            "start": 172.76,
            "end": 174.62,
            "text": "卖点版本和视觉表达，"
        },
        {
            "start": 174.62,
            "end": 176.24,
            "text": "再用小预算快速测试。"
        },
        {
            "start": 176.24,
            "end": 179.9,
            "text": "一开始每天只花三五百，也能逐步找到最有效的版本。"
        },
        {
            "start": 179.9,
            "end": 182.02,
            "text": "第三个动作，是社群运营。"
        },
        {
            "start": 182.02,
            "end": 183.74,
            "text": "把种子用户拉进群里，"
        },
        {
            "start": 183.74,
            "end": 185.6,
            "text": "让 AI 协助你准备每日内容、"
        },
        {
            "start": 185.6,
            "end": 187.2,
            "text": "用户答疑和话题设计。"
        },
        {
            "start": 187.2,
            "end": 189.44,
            "text": "但创始人自己仍然要在群里出现，"
        },
        {
            "start": 189.44,
            "end": 191.88,
            "text": "因为最初的信任感，不能完全外包。"
        },
        {
            "start": 191.88,
            "end": 193.92,
            "text": "第四阶段，是规模化增长。"
        },
        {
            "start": 193.92,
            "end": 195.1,
            "text": "当前面的产品、"
        },
        {
            "start": 195.1,
            "end": 196.76,
            "text": "渠道和表达都被验证之后，"
        },
        {
            "start": 196.76,
            "end": 197.9,
            "text": "就进入加速阶段。"
        },
        {
            "start": 197.9,
            "end": 200.56,
            "text": "这一阶段，AI 的价值会被放大得最明显。"
        },
        {
            "start": 200.56,
            "end": 202.24,
            "text": "第一，内容规模化。"
        },
        {
            "start": 202.24,
            "end": 204.42,
            "text": "从每周十篇，变成每周几十篇。"
        },
        {
            "start": 204.42,
            "end": 205.7,
            "text": "第二，广告优化。"
        },
        {
            "start": 205.7,
            "end": 209.82,
            "text": "AI 可以根据时段、素材和转化表现，持续调整预算和版本。"
        },
        {
            "start": 209.82,
            "end": 211.46,
            "text": "第三，客服自动化。"
        },
        {
            "start": 211.46,
            "end": 212.72400000000002,
            "text": "物流、产品咨询、"
        },
        {
            "start": 212.72400000000002,
            "end": 214.76,
            "text": "退换货流程这些高频问题，"
        },
        {
            "start": 214.76,
            "end": 216.62,
            "text": "可以大量交给 AI 处理，"
        },
        {
            "start": 216.62,
            "end": 218.72,
            "text": "人工只处理更复杂的部分。"
        },
        {
            "start": 218.72,
            "end": 220.8,
            "text": "所以你会看到一个很有意思的结果。"
        },
        {
            "start": 220.8,
            "end": 222.96,
            "text": "团队可能只有三到五个人，"
        },
        {
            "start": 222.96,
            "end": 225.9,
            "text": "但整体效率已经接近过去一个十几人团队。"
        },
        {
            "start": 225.9,
            "end": 229.18,
            "text": "第五阶段，是复购和长期用户价值。"
        },
        {
            "start": 229.18,
            "end": 233.06,
            "text": "品牌如果只会获客，不会复购，生意很难真正健康。"
        },
        {
            "start": 233.06,
            "end": 235.5,
            "text": "AI 在这一阶段的作用非常具体。"
        },
        {
            "start": 235.5,
            "end": 239.2,
            "text": "可以根据用户的购买频率，预测他什么时候需要补货。"
        },
        {
            "start": 239.2,
            "end": 242.4,
            "text": "可以根据购买历史，推荐更适合的互补产品。"
        },
        {
            "start": 242.4,
            "end": 244.28,
            "text": "可以帮你运营会员体系，"
        },
        {
            "start": 244.28,
            "end": 245.86,
            "text": "自动发送节日提醒、"
        },
        {
            "start": 245.86,
            "end": 247.86,
            "text": "生日优惠和会员权益通知。"
        },
        {
            "start": 247.86,
            "end": 250.4,
            "text": "也可以实时分析评价和客服对话，"
        },
        {
            "start": 250.4,
            "end": 253.1,
            "text": "帮助你发现产品问题和新的改进机会。"
        },
        {
            "start": 253.44,
            "end": 255.62,
            "text": "所以真正的重点，不是第一次成交，"
        },
        {
            "start": 255.62,
            "end": 257.96,
            "text": "而是你能不能让客户不断回来。"
        },
        {
            "start": 257.96,
            "end": 259.46,
            "text": "最后，我们来算一笔账。"
        },
        {
            "start": 259.46,
            "end": 261.6,
            "text": "过去一个品牌要做到年销千万，"
        },
        {
            "start": 261.6,
            "end": 263.62,
            "text": "可能需要十五到二十人的团队、"
        },
        {
            "start": 263.62,
            "end": 265.5,
            "text": "两三百万级的启动资金，"
        },
        {
            "start": 265.5,
            "end": 267.28,
            "text": "以及一到两年的时间。"
        },
        {
            "start": 267.28,
            "end": 270.3,
            "text": "而一个 AI 原生品牌，也许三到五个人、"
        },
        {
            "start": 270.3,
            "end": 272.3,
            "text": "几十万预算、六到十二个月，"
        },
        {
            "start": 272.3,
            "end": 274.04,
            "text": "就有机会跑到相近规模。"
        },
        {
            "start": 274.04,
            "end": 276.32,
            "text": "当然，这不代表 AI 会替你成功。"
        },
        {
            "start": 276.32,
            "end": 279.1,
            "text": "产品本身好不好，市场选得对不对，"
        },
        {
            "start": 279.1,
            "end": 281.28,
            "text": "创始人的判断力和执行力够不够，"
        },
        {
            "start": 281.28,
            "end": 283.18,
            "text": "这些才是底层决定因素。"
        },
        {
            "start": 283.18,
            "end": 285.94,
            "text": "AI 只是让你更快、更省、更容易试错。"
        },
        {
            "start": 285.94,
            "end": 287.34,
            "text": "好，我们总结一下。"
        },
        {
            "start": 287.34,
            "end": 291.1,
            "text": "一个 AI 原生直面消费者品牌，通常会走过五个阶段。"
        },
        {
            "start": 291.1,
            "end": 294.24,
            "text": "验证机会，品牌建设，冷启动获客，"
        },
        {
            "start": 294.24,
            "end": 297.52,
            "text": "规模化增长，复购和长期用户价值。"
        },
        {
            "start": 297.52,
            "end": 299.26,
            "text": "AI 最值得放进去的地方，"
        },
        {
            "start": 299.26,
            "end": 301.66,
            "text": "是每个本来很耗人、很耗时间、"
        },
        {
            "start": 301.66,
            "end": 302.98,
            "text": "很耗钱的环节。"
        },
        {
            "start": 302.98,
            "end": 307.8,
            "text": "但最后真正决定成败的，还是产品力、判断力和执行力。"
        },
        {
            "start": 307.8,
            "end": 310.08,
            "text": "下一期，就是模块三的最后一期。"
        },
        {
            "start": 310.08,
            "end": 312.68000000000006,
            "text": "我们会做一次完整的营销诊断，"
        },
        {
            "start": 312.68000000000006,
            "end": 315.68,
            "text": "帮你用 AI 重新设计自己的增长策略。"
        },
        {
            "start": 315.68,
            "end": 317.56,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 32.68,
        "index": 0
    },
    {
        "start": 32.68,
        "end": 40.18,
        "index": 1
    },
    {
        "start": 40.18,
        "end": 94.34,
        "index": 2
    },
    {
        "start": 94.34,
        "end": 145.1,
        "index": 3
    },
    {
        "start": 145.1,
        "end": 191.88,
        "index": 4
    },
    {
        "start": 191.88,
        "end": 225.9,
        "index": 5
    },
    {
        "start": 225.9,
        "end": 285.94,
        "index": 6
    },
    {
        "start": 285.94,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从一个小团队品牌的成长路径里，看清楚 AI 怎样帮助品牌完成验证、冷启动、规模化增长和长期复购。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-13", coachSource: "./ai-coach.html?source=lesson-marketing-13" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：一个直面消费者品牌如何用 AI 从零做到千万的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：一个直面消费者品牌如何用 AI 从零做到千万", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
