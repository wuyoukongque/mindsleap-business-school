(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第11课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第11课：出海营销：AI 如何降低全球化门槛",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 5 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep44-global-marketing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：出海营销：AI 如何降低全球化门槛", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个营销判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个增长环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的营销优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的营销学习，最终都会回到资源配置与增长判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-marketing-12.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：可口可乐的 AI 营销实验",
                "body": "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-marketing-12.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把出海最难的语言、文化和市场洞察拆开来看，再用 AI 建立更轻量的全球化营销打法。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "AI 把出海门槛拉低了，但没有把复杂性抹平",
                "body": "语言、文化和市场研究都可以先借助 AI 起步，但真正进入市场仍然需要本地判断。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "最该升级的不是翻译效率，而是跨语言表达能力",
                "body": "把核心信息和品牌调性讲清楚，再让 AI 用目标语言重新创作，比逐句直译更有效。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "出海不是多开几个市场，而是先把一个市场打透",
                "body": "先验证市场、合规、支付和履约这套闭环，再复制到更多国家，风险会小很多。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组营销框架学完整。", meta: ["当前完成：营销与增长 11/12", "建议下一节：案例：可口可乐的 AI 营销实验", '也可以先整理这一节'], nextHref: "./lesson-marketing-12.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-11", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson11", audioSource: './assets/audio/marketing-ep44-global-marketing.mp3?v=20260411-marketing-11b', vttSrc: './assets/subtitles/marketing-ep44-global-marketing.vtt?v=20260411-marketing-11b', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep44-global-marketing/slide_01.png",
            "label": "出海营销：AI 如何降低全球化门槛",
            "caption": "这一节会帮助你系统理解：出海营销：AI 如何降低全球化门槛"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_02.png",
            "label": "先看出海的三大门槛",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_03.png",
            "label": "语言不是只翻译",
            "caption": "现在 AI 翻译已经很好用了。 对于商业文本、技术文档、日常沟通，它已经足够达到“可以投入使用”的标准。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_04.png",
            "label": "文化适配",
            "caption": "文化适配不是把中文文案翻过去，而是让你的表达在当地市场真正说得通。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_05.png",
            "label": "市场洞察",
            "caption": "AI 可以显著加快市场调研，但不能替代你亲自理解目标市场。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_06.png",
            "label": "具体操作方法",
            "caption": "真正值得先落地的，不是一下铺满全球，而是把内容、投放和客服三条链先跑起来。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_07.png",
            "label": "出海注意事项",
            "caption": "出海营销的成败，不只看传播能力，还取决于合规、支付和交付是否同步到位。"
        },
        {
            "file": "marketing-ep44-global-marketing/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.14,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.14,
            "end": 3.12,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 3.12,
            "end": 4.62,
            "text": "今天我们来聊出海营销。"
        },
        {
            "start": 4.62,
            "end": 7.26,
            "text": "如果你想把业务做到国际市场，"
        },
        {
            "start": 7.26,
            "end": 9.64,
            "text": "AI 确实正在把全球化这件事，"
        },
        {
            "start": 9.64,
            "end": 11.08,
            "text": "变得比过去轻很多。"
        },
        {
            "start": 11.08,
            "end": 12.98,
            "text": "但我想先提醒你一句。"
        },
        {
            "start": 12.98,
            "end": 16.86,
            "text": "AI 让出海更容易了，不等于出海已经变简单了。"
        },
        {
            "start": 16.86,
            "end": 19.02,
            "text": "它只是把原来特别重、特别贵、"
        },
        {
            "start": 19.24,
            "end": 21.86,
            "text": "特别慢的那部分门槛，往下拉了很多。"
        },
        {
            "start": 21.86,
            "end": 25.48,
            "text": "这节课，我想带你抓住出海最关键的三道门槛。"
        },
        {
            "start": 25.48,
            "end": 28.12,
            "text": "语言，文化适配，还有市场洞察。"
        },
        {
            "start": 28.12,
            "end": 30.1,
            "text": "先说第一道门槛，语言。"
        },
        {
            "start": 30.1,
            "end": 32.38,
            "text": "这是所有人一开始都会遇到的障碍。"
        },
        {
            "start": 32.38,
            "end": 35.12,
            "text": "你的官网、产品介绍、广告文案、"
        },
        {
            "start": 35.26,
            "end": 36.74,
            "text": "客服回复、销售邮件，"
        },
        {
            "start": 36.74,
            "end": 39.44,
            "text": "全部都要进入目标市场的语言环境。"
        },
        {
            "start": 39.44,
            "end": 41.38,
            "text": "过去这件事非常重。"
        },
        {
            "start": 41.38,
            "end": 43.76,
            "text": "你要找翻译公司，要来回审稿，"
        },
        {
            "start": 43.96,
            "end": 44.96,
            "text": "要反复改，"
        },
        {
            "start": 44.96,
            "end": 47.82,
            "text": "还不一定真正符合当地用户的表达习惯。"
        },
        {
            "start": 47.82,
            "end": 50.04,
            "text": "现在 AI 翻译已经很好用了。"
        },
        {
            "start": 50.04,
            "end": 52.7,
            "text": "对于商业文本、技术文档、日常沟通，"
        },
        {
            "start": 52.7,
            "end": 55.5,
            "text": "它已经足够达到“可以投入使用”的标准。"
        },
        {
            "start": 55.5,
            "end": 59.98,
            "text": "但真正的重点，不是翻得准不准，而是说得像不像当地人。"
        },
        {
            "start": 59.98,
            "end": 63.68,
            "text": "所以我更建议你把 AI 用在跨语言内容创作上，"
        },
        {
            "start": 63.68,
            "end": 64.84,
            "text": "而不只是直译。"
        },
        {
            "start": 64.84,
            "end": 67.22,
            "text": "你把核心信息、品牌语气、"
        },
        {
            "start": 67.22,
            "end": 69.86,
            "text": "目标受众和传播目标给清楚，"
        },
        {
            "start": 69.86,
            "end": 72.78,
            "text": "让 AI 直接用目标语言重新写一版。"
        },
        {
            "start": 72.78,
            "end": 76.8,
            "text": "这通常会比一句一句翻过去更自然，也更有营销效果。"
        },
        {
            "start": 76.8,
            "end": 78.88,
            "text": "第二道门槛，是文化适配。"
        },
        {
            "start": 78.88,
            "end": 83.24,
            "text": "很多时候，问题不是语言没翻对，而是文化没贴上去。"
        },
        {
            "start": 83.24,
            "end": 85.32,
            "text": "同样一句话、同一种配色、"
        },
        {
            "start": 85.52,
            "end": 88.42,
            "text": "同一种节日促销逻辑，放到不同国家，"
        },
        {
            "start": 88.42,
            "end": 89.92,
            "text": "感受可能完全不一样。"
        },
        {
            "start": 89.92,
            "end": 92.34,
            "text": "你可以把文化适配理解成三个层次。"
        },
        {
            "start": 92.34,
            "end": 94.58,
            "text": "第一层，是明显的文化符号。"
        },
        {
            "start": 94.58,
            "end": 98.8,
            "text": "颜色、节日、图像、视觉风格，这些都很容易踩坑。"
        },
        {
            "start": 98.8,
            "end": 100.66,
            "text": "第二层，是表达习惯。"
        },
        {
            "start": 100.66,
            "end": 103.42,
            "text": "有些市场喜欢直接、明确、强调效率。"
        },
        {
            "start": 103.42,
            "end": 107.12,
            "text": "有些市场更看重礼貌、可靠、细节和信任感。"
        },
        {
            "start": 107.12,
            "end": 109.06,
            "text": "第三层，是价值偏好。"
        },
        {
            "start": 109.06,
            "end": 110.02,
            "text": "同一个产品，"
        },
        {
            "start": 110.02,
            "end": 112.06,
            "text": "在一个市场强调创新和速度，"
        },
        {
            "start": 112.06,
            "end": 114.62,
            "text": "在另一个市场可能更应该强调稳定、"
        },
        {
            "start": 114.62,
            "end": 116.38,
            "text": "安全和长期关系。"
        },
        {
            "start": 116.38,
            "end": 120.48,
            "text": "AI 在文化适配里的最好用法，是先帮你做第一轮筛查。"
        },
        {
            "start": 120.48,
            "end": 124.02,
            "text": "把你的 landing page、广告语、活动方案丢给 AI，"
        },
        {
            "start": 124.28,
            "end": 127.02,
            "text": "让它先指出哪里可能引起误解、冒犯，"
        },
        {
            "start": 127.02,
            "end": 128.84,
            "text": "或者只是显得不够本地。"
        },
        {
            "start": 128.84,
            "end": 131.76,
            "text": "然后，再交给本地审核者做最后一轮判断。"
        },
        {
            "start": 131.76,
            "end": 134.66,
            "text": "所以一个更现实、也更轻量的方法是："
        },
        {
            "start": 134.66,
            "end": 137.4,
            "text": "AI 先完成 80% 的初步本地化，"
        },
        {
            "start": 137.4,
            "end": 140.22,
            "text": "本地的人完成最后 20% 的文化校准。"
        },
        {
            "start": 140.22,
            "end": 142.32,
            "text": "第三道门槛，是市场洞察。"
        },
        {
            "start": 142.32,
            "end": 144.3,
            "text": "因为你进入一个新国家时，"
        },
        {
            "start": 144.3,
            "end": 145.58,
            "text": "真正要搞清楚的，"
        },
        {
            "start": 145.58,
            "end": 147.44,
            "text": "不只是“能不能翻译成那边的语言”。"
        },
        {
            "start": 147.44,
            "end": 150.04,
            "text": "你还要知道，这个市场到底值不值得打。"
        },
        {
            "start": 150.04,
            "end": 152.52,
            "text": "至少有五件事，你需要尽快看清楚。"
        },
        {
            "start": 152.52,
            "end": 154.26,
            "text": "市场规模和增长趋势。"
        },
        {
            "start": 154.68,
            "end": 157.8,
            "text": "竞争格局，谁已经在做了，他们怎么定位、怎么定价。"
        },
        {
            "start": 157.8,
            "end": 160.94,
            "text": "目标客户画像，他们是谁，他们最在意什么。"
        },
        {
            "start": 160.94,
            "end": 164.44,
            "text": "渠道偏好，他们平时在哪里获取信息，在哪里购买。"
        },
        {
            "start": 164.44,
            "end": 167.72,
            "text": "还有监管环境，有哪些法律法规你必须先知道。"
        },
        {
            "start": 167.72,
            "end": 170.72,
            "text": "过去做这套研究，常常要几周甚至几个月。"
        },
        {
            "start": 170.72,
            "end": 174.62,
            "text": "现在 AI 至少可以先帮你把起步研究压缩到几小时。"
        },
        {
            "start": 174.62,
            "end": 176.42,
            "text": "比如先做竞品扫描，"
        },
        {
            "start": 176.42,
            "end": 178.4,
            "text": "先分析目标市场的社媒讨论，"
        },
        {
            "start": 178.4,
            "end": 180.06,
            "text": "先整理行业公开资料，"
        },
        {
            "start": 180.06,
            "end": 182.24,
            "text": "快速形成一版初步市场判断。"
        },
        {
            "start": 182.24,
            "end": 186.86,
            "text": "但我还是要强调，AI 给你的是起步速度，不是最终确定性。"
        },
        {
            "start": 186.86,
            "end": 189.0,
            "text": "如果你准备做更大的市场投入，"
        },
        {
            "start": 189.0,
            "end": 190.84,
            "text": "线下体验、用户访谈、"
        },
        {
            "start": 190.84,
            "end": 193.82,
            "text": "当地合作伙伴交流，这些都还是要做。"
        },
        {
            "start": 193.82,
            "end": 197.0,
            "text": "好，讲完三道门槛，我们来看更具体的操作方法。"
        },
        {
            "start": 197.0,
            "end": 199.32,
            "text": "第一，多语言内容规模化。"
        },
        {
            "start": 199.32,
            "end": 201.88,
            "text": "你完全可以先用自己最熟悉的语言，"
        },
        {
            "start": 201.88,
            "end": 204.08,
            "text": "把核心观点和案例写扎实，"
        },
        {
            "start": 204.08,
            "end": 207.2,
            "text": "再让 AI 快速生成英语、日语、西班牙语，"
        },
        {
            "start": 207.2,
            "end": 208.9,
            "text": "或者其他目标市场版本。"
        },
        {
            "start": 208.9,
            "end": 213.04,
            "text": "这样你不用一上来就在每个市场都配一套完整内容团队。"
        },
        {
            "start": 213.04,
            "end": 214.74,
            "text": "第二，多市场广告投放。"
        },
        {
            "start": 214.74,
            "end": 218.84,
            "text": "同一个产品，在不同国家可以有完全不同的传播重点。"
        },
        {
            "start": 218.84,
            "end": 221.26,
            "text": "美国市场也许更看重效率和创新，"
        },
        {
            "start": 221.26,
            "end": 223.76,
            "text": "日本市场可能更在意可靠和细节，"
        },
        {
            "start": 223.76,
            "end": 226.96,
            "text": "东南亚市场也许会更在乎性价比和落地感。"
        },
        {
            "start": 226.96,
            "end": 231.28,
            "text": "AI 很适合帮你先做多版本创意，再根据投放效果不断调整。"
        },
        {
            "start": 231.28,
            "end": 232.82,
            "text": "第三，多语言客服。"
        },
        {
            "start": 232.82,
            "end": 235.34,
            "text": "很多跨境业务卡住，不是卡在获客，"
        },
        {
            "start": 235.34,
            "end": 237.46,
            "text": "而是卡在咨询和转化承接。"
        },
        {
            "start": 237.46,
            "end": 239.96,
            "text": "如果用户能直接用自己的语言提问，"
        },
        {
            "start": 239.96,
            "end": 242.54,
            "text": "并且得到足够自然、足够及时的回复，"
        },
        {
            "start": 242.54,
            "end": 244.46,
            "text": "整个购买体验会顺很多。"
        },
        {
            "start": 244.46,
            "end": 247.18,
            "text": "AI 在这里可以先覆盖大部分标准问题，"
        },
        {
            "start": 247.18,
            "end": 249.32,
            "text": "再把复杂问题升级给人工。"
        },
        {
            "start": 249.32,
            "end": 251.08,
            "text": "最后，再给你三个提醒。"
        },
        {
            "start": 251.08,
            "end": 254.28,
            "text": "第一，先打透一个市场，不要一开始就铺十个市场。"
        },
        {
            "start": 254.28,
            "end": 255.82,
            "text": "第二，合规是红线。"
        },
        {
            "start": 255.82,
            "end": 258.3,
            "text": "数据隐私、广告法、消费者保护、"
        },
        {
            "start": 258.42,
            "end": 259.14,
            "text": "内容审查，"
        },
        {
            "start": 259.14,
            "end": 261.8,
            "text": "这些问题不能等到规模做起来以后再补。"
        },
        {
            "start": 261.8,
            "end": 264.06,
            "text": "第三，支付和物流要跟上。"
        },
        {
            "start": 264.06,
            "end": 266.1,
            "text": "营销做得再好，客户付不了钱，"
        },
        {
            "start": 266.1,
            "end": 268.08,
            "text": "或者收不到货，一切都会断掉。"
        },
        {
            "start": 268.08,
            "end": 269.56,
            "text": "好，我们总结一下。"
        },
        {
            "start": 269.56,
            "end": 273.94000000000005,
            "text": "出海最难的三件事，是语言、文化适配和市场洞察。"
        },
        {
            "start": 273.94000000000005,
            "end": 277.2,
            "text": "AI 能显著降低每一个环节的起步成本。"
        },
        {
            "start": 277.2,
            "end": 280.56,
            "text": "真正值得先做的三件事，是多语言内容、"
        },
        {
            "start": 280.68,
            "end": 282.9,
            "text": "多市场广告和多语言客服。"
        },
        {
            "start": 282.9,
            "end": 284.74,
            "text": "但真正稳妥的顺序，"
        },
        {
            "start": 284.74,
            "end": 287.66,
            "text": "永远是先打透一个市场，再在合规、"
        },
        {
            "start": 287.96,
            "end": 290.26,
            "text": "支付和交付跟上的前提下，"
        },
        {
            "start": 290.26,
            "end": 291.34,
            "text": "复制到更多市场。"
        },
        {
            "start": 291.34,
            "end": 295.58,
            "text": "下一期我们来看一个案例，可口可乐的 AI 营销实验。"
        },
        {
            "start": 295.58,
            "end": 297.38,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 21.86,
        "index": 0
    },
    {
        "start": 21.86,
        "end": 28.12,
        "index": 1
    },
    {
        "start": 28.12,
        "end": 76.8,
        "index": 2
    },
    {
        "start": 76.8,
        "end": 140.22,
        "index": 3
    },
    {
        "start": 140.22,
        "end": 193.82,
        "index": 4
    },
    {
        "start": 193.82,
        "end": 249.32,
        "index": 5
    },
    {
        "start": 249.32,
        "end": 268.08,
        "index": 6
    },
    {
        "start": 268.08,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-marketing-12.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把出海最难的语言、文化和市场洞察拆开来看，再用 AI 建立更轻量的全球化营销打法。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-marketing-12.html?entry={entry}", secondaryHref: "./lesson-marketing-12.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-11", coachSource: "./ai-coach.html?source=lesson-marketing-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于出海营销：AI 如何降低全球化门槛的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "出海营销：AI 如何降低全球化门槛", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-marketing-12.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
