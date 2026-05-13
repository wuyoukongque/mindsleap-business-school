(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第12课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第12课：案例：可口可乐的 AI 营销实验",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 5 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep45-case-coca-cola/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：可口可乐的 AI 营销实验", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-12", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "品牌资产越清楚，AI 创意越不会跑偏",
                "body": "Logo、色彩、瓶型、语气和视觉边界越明确，AI 就越能在正确范围内高效发散。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "最强的互动，不是品牌说得更响，而是用户自己开始创作",
                "body": "当消费者用你的品牌元素表达自己，内容传播就从品牌投放变成了用户参与。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 最适合放大创意团队，而不是替代创意团队",
                "body": "团队的价值从“想出几个方向”转向“判断什么值得保留、怎样打磨成真正的品牌表达”。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 12/12", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-12", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson12", audioSource: './assets/audio/marketing-ep45-case-coca-cola.mp3?v=20260411-marketing-12b', vttSrc: './assets/subtitles/marketing-ep45-case-coca-cola.vtt?v=20260411-marketing-12b', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep45-case-coca-cola/slide_01.png",
            "label": "案例：可口可乐的 AI 营销实验",
            "caption": "这一节会帮助你系统理解：案例：可口可乐的 AI 营销实验"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_02.png",
            "label": "先看这个案例为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_03.png",
            "label": "AI 创意生成",
            "caption": "品牌团队先给出方向，也给出清楚的品牌资产。 比如 logo 怎么用，品牌色是什么，视觉风格是什么，哪些元素是必须保留的。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_04.png",
            "label": "个性化消费者互动",
            "caption": "可口可乐把 AI 互动做成了参与机制，而不只是多一次品牌曝光。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_05.png",
            "label": "数据驱动精准营销",
            "caption": "当数据规模足够大时，AI 的价值会从分析效率升级到决策质量。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_06.png",
            "label": "可提炼的方法论",
            "caption": "真正值得学的，不是可口可乐花了多少钱，而是它怎样重新定义了创意团队和消费者的角色。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_07.png",
            "label": "不同体量品牌怎么借鉴",
            "caption": "案例的价值不在复制动作，而在于根据自己体量找到最适合的切入点。"
        },
        {
            "file": "marketing-ep45-case-coca-cola/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.1,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.1,
            "end": 2.96,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 2.96,
            "end": 5.06,
            "text": "今天我们来看一个非常典型的案例。"
        },
        {
            "start": 5.06,
            "end": 8.28,
            "text": "可口可乐这个百年品牌，"
        },
        {
            "start": 8.28,
            "end": 11.14,
            "text": "是怎么把 AI 真正放进营销体系里的。"
        },
        {
            "start": 11.14,
            "end": 12.66,
            "text": "我很喜欢研究这种案例。"
        },
        {
            "start": 12.66,
            "end": 14.52,
            "text": "因为它不是一个小团队的实验，"
        },
        {
            "start": 14.52,
            "end": 16.78,
            "text": "也不是一条短期活动的噱头。"
        },
        {
            "start": 16.78,
            "end": 20.32,
            "text": "而是一个已经把品牌做到全球顶级的公司，"
        },
        {
            "start": 20.32,
            "end": 22.66,
            "text": "开始系统性地重做它的创意、"
        },
        {
            "start": 22.66,
            "end": 24.8,
            "text": "互动和数据决策方式。"
        },
        {
            "start": 24.8,
            "end": 27.34,
            "text": "所以这节课，我想带你看三个维度。"
        },
        {
            "start": 27.34,
            "end": 30.42,
            "text": "AI 创意生成，个性化消费者互动，"
        },
        {
            "start": 30.42,
            "end": 32.52,
            "text": "以及数据驱动的精准营销。"
        },
        {
            "start": 32.52,
            "end": 34.94,
            "text": "先说第一个维度，AI 创意生成。"
        },
        {
            "start": 34.94,
            "end": 38.5,
            "text": "可口可乐很早就开始把 AI 放进广告创意流程里。"
        },
        {
            "start": 38.5,
            "end": 41.22,
            "text": "但它做的并不是“让 AI 随便出一张图”，"
        },
        {
            "start": 41.22,
            "end": 43.56,
            "text": "而是把 AI 当成一个创意放大器。"
        },
        {
            "start": 43.56,
            "end": 45.22,
            "text": "它的做法很值得记住。"
        },
        {
            "start": 45.22,
            "end": 49.38,
            "text": "品牌团队先给出方向，也给出清楚的品牌资产。"
        },
        {
            "start": 49.38,
            "end": 51.24,
            "text": "比如 logo 怎么用，品牌色是什么，"
        },
        {
            "start": 51.24,
            "end": 52.66,
            "text": "视觉风格是什么，"
        },
        {
            "start": 52.66,
            "end": 54.98,
            "text": "哪些元素是必须保留的。"
        },
        {
            "start": 54.98,
            "end": 58.42,
            "text": "然后，AI 在这些边界里快速生成大量创意方向。"
        },
        {
            "start": 58.42,
            "end": 61.92,
            "text": "最后，由人类创意团队来选择、判断和继续打磨。"
        },
        {
            "start": 61.92,
            "end": 65.04,
            "text": "这个工作流的核心可以浓缩成一句话。"
        },
        {
            "start": 65.04,
            "end": 67.1,
            "text": "AI 负责发散，人负责收敛。"
        },
        {
            "start": 67.1,
            "end": 70.54,
            "text": "过去团队可能花两周，才产出三五个方向。"
        },
        {
            "start": 70.54,
            "end": 73.26,
            "text": "现在 AI 一天就能给你几百个方向。"
        },
        {
            "start": 73.26,
            "end": 74.82,
            "text": "所以创意团队的价值，"
        },
        {
            "start": 74.82,
            "end": 76.46,
            "text": "不再只是“想几个点子”，"
        },
        {
            "start": 76.46,
            "end": 77.94,
            "text": "而是判断什么值得留下，"
        },
        {
            "start": 77.94,
            "end": 80.46,
            "text": "什么最符合品牌，什么还能再优化。"
        },
        {
            "start": 80.46,
            "end": 83.22,
            "text": "第二个维度，是个性化消费者互动。"
        },
        {
            "start": 83.22,
            "end": 84.76,
            "text": "可口可乐很厉害的一点，"
        },
        {
            "start": 84.76,
            "end": 87.36,
            "text": "是它没有只把 AI 当成内部效率工具。"
        },
        {
            "start": 87.36,
            "end": 91.34,
            "text": "它还在某些市场，把 AI 做成了消费者可以参与的互动体验。"
        },
        {
            "start": 91.34,
            "end": 92.76,
            "text": "这件事为什么巧妙。"
        },
        {
            "start": 92.76,
            "end": 94.94,
            "text": "因为消费者不再只是看你的广告，"
        },
        {
            "start": 94.94,
            "end": 97.78,
            "text": "而是开始用你的品牌元素自己创作内容。"
        },
        {
            "start": 97.78,
            "end": 101.12,
            "text": "一旦消费者从“接收者”变成“参与者”和“创作者”，"
        },
        {
            "start": 101.12,
            "end": 103.36,
            "text": "整件事情的传播结构就变了。"
        },
        {
            "start": 103.36,
            "end": 105.54,
            "text": "它不再只是品牌对外发一条内容。"
        },
        {
            "start": 105.54,
            "end": 109.14,
            "text": "而是用户自己带着品牌元素，把内容扩散出去。"
        },
        {
            "start": 109.14,
            "end": 112.44,
            "text": "从营销心理学的角度看，这里至少用了三层机制。"
        },
        {
            "start": 112.44,
            "end": 113.78,
            "text": "第一，参与感。"
        },
        {
            "start": 113.78,
            "end": 117.88,
            "text": "人会对自己亲手参与过的东西，建立更强的情感连接。"
        },
        {
            "start": 117.88,
            "end": 119.44,
            "text": "第二，社会认同。"
        },
        {
            "start": 119.44,
            "end": 121.9,
            "text": "当你看到别人都在参与，自己也更容易加入。"
        },
        {
            "start": 121.9,
            "end": 123.24,
            "text": "第三，自我表达。"
        },
        {
            "start": 123.24,
            "end": 125.54,
            "text": "AI 把创作门槛降得很低，"
        },
        {
            "start": 125.54,
            "end": 128.64,
            "text": "让普通消费者也能做出“看起来很专业”的内容，"
        },
        {
            "start": 128.64,
            "end": 130.54,
            "text": "这会显著放大表达欲。"
        },
        {
            "start": 130.54,
            "end": 133.18,
            "text": "第三个维度，是数据驱动的精准营销。"
        },
        {
            "start": 133.18,
            "end": 137.12,
            "text": "可口可乐这种体量的公司，本来就有海量的消费者数据。"
        },
        {
            "start": 137.12,
            "end": 138.22,
            "text": "AI 最适合做的，"
        },
        {
            "start": 138.22,
            "end": 141.22,
            "text": "就是把这些原本分散的数据整合起来，"
        },
        {
            "start": 141.22,
            "end": 143.52,
            "text": "让营销决策更快、更细、更准。"
        },
        {
            "start": 143.92,
            "end": 145.98,
            "text": "比如在不同地区、不同渠道、"
        },
        {
            "start": 145.98,
            "end": 148.22,
            "text": "不同时间段，消费者买的是什么，"
        },
        {
            "start": 148.22,
            "end": 149.92,
            "text": "促销对销量有没有带动，"
        },
        {
            "start": 149.92,
            "end": 152.52,
            "text": "哪些产品更适合在哪些场景被推广。"
        },
        {
            "start": 152.52,
            "end": 154.64,
            "text": "这些问题，过去也能分析。"
        },
        {
            "start": 154.64,
            "end": 159.18,
            "text": "但现在 AI 能把这种分析做得更实时，也更容易规模化。"
        },
        {
            "start": 159.18,
            "end": 162.38,
            "text": "另一个关键点，是社交媒体趋势和舆情监控。"
        },
        {
            "start": 162.38,
            "end": 164.57333333333335,
            "text": "消费者怎么讨论可口可乐，"
        },
        {
            "start": 164.57333333333335,
            "end": 166.76,
            "text": "竞品的新动作有没有引起反应，"
        },
        {
            "start": 166.76,
            "end": 169.08,
            "text": "新的消费趋势是不是正在抬头。"
        },
        {
            "start": 169.08,
            "end": 171.46,
            "text": "这些以前很依赖人工整理。"
        },
        {
            "start": 171.46,
            "end": 175.32,
            "text": "现在 AI 可以让趋势捕捉更快，也让决策反应更及时。"
        },
        {
            "start": 175.32,
            "end": 176.7,
            "text": "好，讲完三个维度，"
        },
        {
            "start": 176.7,
            "end": 180.02,
            "text": "我们来提炼这节案例课真正值得带走的方法论。"
        },
        {
            "start": 180.02,
            "end": 182.51999999999998,
            "text": "第一，品牌资产是 AI 创意的护栏。"
        },
        {
            "start": 182.52,
            "end": 185.42,
            "text": "如果你的品牌资产本身就是模糊的，"
        },
        {
            "start": 185.42,
            "end": 187.22,
            "text": "那 AI 只会把这种模糊放大。"
        },
        {
            "start": 187.22,
            "end": 189.46,
            "text": "所以先把视觉规范、品牌语气、"
        },
        {
            "start": 189.46,
            "end": 191.76,
            "text": "表达边界和关键资产整理清楚，"
        },
        {
            "start": 191.76,
            "end": 193.3,
            "text": "再让 AI 进入流程。"
        },
        {
            "start": 193.3,
            "end": 195.2,
            "text": "第二，让消费者参与创作。"
        },
        {
            "start": 195.2,
            "end": 198.24,
            "text": "不要只想着用 AI 把内容更高效地推给用户。"
        },
        {
            "start": 198.24,
            "end": 200.02,
            "text": "你也要想，能不能借助 AI，"
        },
        {
            "start": 200.02,
            "end": 202.42,
            "text": "让用户自己创造和品牌有关的内容。"
        },
        {
            "start": 202.42,
            "end": 205.34,
            "text": "第三，AI 放大团队，而不是替代团队。"
        },
        {
            "start": 205.34,
            "end": 208.5,
            "text": "可口可乐没有因为有了 AI 就把创意团队拿掉。"
        },
        {
            "start": 208.5,
            "end": 211.96,
            "text": "恰恰相反，AI 让团队的工作方式升级了。"
        },
        {
            "start": 211.96,
            "end": 213.46,
            "text": "从“我自己想内容”，"
        },
        {
            "start": 213.46,
            "end": 215.74,
            "text": "变成“AI 先给我更多选项，"
        },
        {
            "start": 215.74,
            "end": 217.08,
            "text": "我来做判断和优化”。"
        },
        {
            "start": 217.08,
            "end": 219.9,
            "text": "第四，规模化和本地化要同时成立。"
        },
        {
            "start": 219.9,
            "end": 223.3,
            "text": "全球品牌不能只有一致性，也不能只有本地化。"
        },
        {
            "start": 223.3,
            "end": 225.78,
            "text": "真正厉害的是，在统一品牌策略之下，"
        },
        {
            "start": 225.78,
            "end": 229.34,
            "text": "让每个市场还能有足够贴近当地的表达和执行。"
        },
        {
            "start": 229.34,
            "end": 231.74,
            "text": "当然，我们也要看到这类案例的边界。"
        },
        {
            "start": 231.74,
            "end": 233.44,
            "text": "可口可乐有巨大的预算、"
        },
        {
            "start": 233.44,
            "end": 235.68,
            "text": "海量的数据和顶级的合作伙伴，"
        },
        {
            "start": 235.68,
            "end": 238.02,
            "text": "这不是多数公司能直接复制的。"
        },
        {
            "start": 238.02,
            "end": 240.42,
            "text": "但你可以借鉴原则，而不是照搬动作。"
        },
        {
            "start": 240.42,
            "end": 242.94,
            "text": "小品牌先做品牌资产和内容效率。"
        },
        {
            "start": 242.94,
            "end": 245.66,
            "text": "中型品牌可以尝试 AI 驱动的互动营销。"
        },
        {
            "start": 245.66,
            "end": 249.12,
            "text": "大品牌更适合把 AI 系统性地接入整个营销体系。"
        },
        {
            "start": 249.12,
            "end": 250.4,
            "text": "好，我们总结一下。"
        },
        {
            "start": 250.4,
            "end": 253.24,
            "text": "可口可乐这套 AI 营销，主要做了三件事。"
        },
        {
            "start": 253.24,
            "end": 257.26,
            "text": "AI 创意生成，个性化消费者互动，数据驱动精准营销。"
        },
        {
            "start": 257.26,
            "end": 258.94,
            "text": "真正值得学的方法论，"
        },
        {
            "start": 258.94,
            "end": 262.08,
            "text": "是品牌资产做护栏，让消费者参与创作，"
        },
        {
            "start": 262.08,
            "end": 264.54,
            "text": "让 AI 放大而不是替代创意团队。"
        },
        {
            "start": 264.54,
            "end": 266.54,
            "text": "下一期我们再看另一个案例，"
        },
        {
            "start": 266.54,
            "end": 270.06,
            "text": "一个 DTC 品牌如何用 AI 从零做到千万。"
        },
        {
            "start": 270.06,
            "end": 272.04,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 24.8,
        "index": 0
    },
    {
        "start": 24.8,
        "end": 32.52,
        "index": 1
    },
    {
        "start": 32.52,
        "end": 80.46,
        "index": 2
    },
    {
        "start": 80.46,
        "end": 130.54,
        "index": 3
    },
    {
        "start": 130.54,
        "end": 176.7,
        "index": 4
    },
    {
        "start": 176.7,
        "end": 229.34,
        "index": 5
    },
    {
        "start": 229.34,
        "end": 249.12,
        "index": 6
    },
    {
        "start": 249.12,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-12", coachSource: "./ai-coach.html?source=lesson-marketing-12" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：可口可乐的 AI 营销实验的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：可口可乐的 AI 营销实验", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
