(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第9课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第9课：案例：快时尚为什么能快",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep70-case-fast-fashion/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：快时尚为什么能快", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-10.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "运营思维：用系统的方式做事情",
                "body": "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "精益管理：消除一切浪费",
                "body": "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "质量管理：质量不是检出来的",
                "body": "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 供应链：让链条更智能",
                "body": "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "从 RPA 到 Agent：流程自动化的升级",
                "body": "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：一家制造企业的 AI 运营升级",
                "body": "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 11,
                "title": "你的运营诊断：用 AI 找到效率瓶颈",
                "body": "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "自动化路线图：先做什么，后做什么",
                "body": "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-operations-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "本期重点总结", summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先理解流程为什么重要",
                "body": "今天讲快时尚行业的供应链案例"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "流程看清楚以后",
                "body": "Zara 的很多生产基地在西班牙和葡萄牙，离它的总部和欧洲市场很近"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "找到真正的瓶颈",
                "body": "Shein 的供应链模式跟 Zara 完全不同"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "把标准化做起来",
                "body": "在设计环节，AI 不只是预测趋势，它还能拆解趋势"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 9/12", "建议下一节：案例：一家制造企业的 AI 运营升级", '也可以先整理这一节'], nextHref: "./lesson-operations-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-09", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson9", audioSource: './assets/audio/operations-ep70-case-fast-fashion.mp3?v=20260513-operations-09-12a', vttSrc: './assets/subtitles/operations-ep70-case-fast-fashion.vtt?v=20260513-operations-09-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep70-case-fast-fashion/slide_01.png",
            "label": "案例：快时尚为什么能快",
            "caption": "这一节会帮助你系统理解：案例：快时尚为什么能快"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_02.png",
            "label": "先理解流程为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_03.png",
            "label": "流程看清楚以后",
            "caption": "Zara 的很多生产基地在西班牙和葡萄牙，离它的总部和欧洲市场很近。 虽然人工成本比亚洲高，但运输时间短、响应速度快。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_04.png",
            "label": "找到真正的瓶颈",
            "caption": "Shein 的供应链模式跟 Zara 完全不同。 如果说 Zara 是\"快时尚\"，那 Shein 就是\"超快时尚\"。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_05.png",
            "label": "把标准化做起来",
            "caption": "在设计环节，AI 不只是预测趋势，它还能拆解趋势。 比如某个颜色在社交媒体上开始火了，AI 会把这个颜色跟不同的版型、面料、图案做排列组合，自动生成几十个设计方案。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_06.png",
            "label": "AI 如何重构运营",
            "caption": "Shein 更多依赖 AI 驱动设计，人类设计师做审核和优化。 在库存策略上，两者的理念是一样的：小批量试水，数据验证后再追加。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_07.png",
            "label": "回到你的业务现场",
            "caption": "消费者在前端的浏览、点击、购买行为，实时传递到后端的设计、生产、物流。 没有这个数据打通，快速响应就是一句空话。"
        },
        {
            "file": "operations-ep70-case-fast-fashion/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.56,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.86,
            "end": 3.72,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.239999999999999,
            "end": 6.76,
            "text": "今天讲快时尚行业的供应链案例。"
        },
        {
            "start": 6.76,
            "end": 9.48,
            "text": "快时尚是供应链管理的极端考验："
        },
        {
            "start": 9.48,
            "end": 12.86,
            "text": "潮流变得快、需求预测难、库存风险大。"
        },
        {
            "start": 12.86,
            "end": 15.841666666666665,
            "text": "我们来看两家标杆企业——Zara 和 Shein，"
        },
        {
            "start": 15.841666666666665,
            "end": 19.36,
            "text": "它们用完全不同的方式把供应链做到了极致。"
        },
        {
            "start": 19.36,
            "end": 21.26000000000001,
            "text": "先讲 Zara，再讲 Shein，"
        },
        {
            "start": 21.26000000000001,
            "end": 25.02,
            "text": "最后总结两种模式的核心差异和对我们的启发。"
        },
        {
            "start": 25.02,
            "end": 28.56,
            "text": "Zara 是西班牙公司 Inditex 旗下的品牌，"
        },
        {
            "start": 28.56,
            "end": 31.36,
            "text": "是全球最大的时装零售商之一。"
        },
        {
            "start": 31.36,
            "end": 35.02,
            "text": "Zara 的供应链有一个核心理念：快速响应。"
        },
        {
            "start": 35.02,
            "end": 38.02,
            "text": "传统的服装品牌是这样运作的："
        },
        {
            "start": 38.02,
            "end": 41.22,
            "text": "提前半年甚至一年设计下一季的款式，"
        },
        {
            "start": 41.22,
            "end": 44.02,
            "text": "然后大批量生产，铺到全球的门店。"
        },
        {
            "start": 44.02,
            "end": 47.04,
            "text": "如果某款卖得不好，只能打折清仓。"
        },
        {
            "start": 47.04,
            "end": 49.02,
            "text": "Zara 完全不同。"
        },
        {
            "start": 49.02,
            "end": 52.22,
            "text": "它的设计到上架只需要两到三周。"
        },
        {
            "start": 52.22,
            "end": 55.5,
            "text": "传统品牌一年做两到四个季度的新品，"
        },
        {
            "start": 55.5,
            "end": 58.6,
            "text": "Zara 一年推出超过一万款新品。"
        },
        {
            "start": 58.6,
            "end": 59.94,
            "text": "它怎么做到的？"
        },
        {
            "start": 59.94,
            "end": 61.82,
            "text": "靠两个关键的供应链策略。"
        },
        {
            "start": 61.82,
            "end": 64.86,
            "text": "第一个策略：小批量、多批次。"
        },
        {
            "start": 64.86,
            "end": 69.14,
            "text": "Zara 不会一次性生产大批量的某个款式。"
        },
        {
            "start": 69.14,
            "end": 73.44,
            "text": "它先生产一小批投放到市场，看看销售反应。"
        },
        {
            "start": 73.44,
            "end": 76.1,
            "text": "卖得好就快速追加生产，"
        },
        {
            "start": 76.1,
            "end": 80.14,
            "text": "卖得不好就停止生产，损失控制在最小。"
        },
        {
            "start": 80.14,
            "end": 83.38,
            "text": "第二个策略：供应链近岸化。"
        },
        {
            "start": 83.38,
            "end": 86.3,
            "text": "Zara 的很多生产基地在西班牙和葡萄牙，"
        },
        {
            "start": 86.3,
            "end": 88.82,
            "text": "离它的总部和欧洲市场很近。"
        },
        {
            "start": 88.82,
            "end": 93.58,
            "text": "虽然人工成本比亚洲高，但运输时间短、响应速度快。"
        },
        {
            "start": 93.58,
            "end": 96.96,
            "text": "从工厂到门店只需要两到三天。"
        },
        {
            "start": 96.96,
            "end": 100.18,
            "text": "那 AI 在 Zara 的供应链中发挥了什么作用？"
        },
        {
            "start": 100.18,
            "end": 101.98,
            "text": "第一，趋势预测。"
        },
        {
            "start": 101.98,
            "end": 105.84,
            "text": "Zara 的设计团队不是在时装周上找灵感。"
        },
        {
            "start": 105.84,
            "end": 108.24,
            "text": "他们用 AI 分析社交媒体、"
        },
        {
            "start": 108.24,
            "end": 111.36,
            "text": "时尚博主的穿搭、街头潮流照片，"
        },
        {
            "start": 111.36,
            "end": 114.04,
            "text": "实时追踪什么元素在流行。"
        },
        {
            "start": 114.04,
            "end": 116.98,
            "text": "AI 帮设计师更快地捕捉趋势。"
        },
        {
            "start": 116.98,
            "end": 118.86,
            "text": "第二，需求预测。"
        },
        {
            "start": 118.86,
            "end": 122.06,
            "text": "每一款新品投放到市场后，"
        },
        {
            "start": 122.06,
            "end": 125.38,
            "text": "AI 实时分析各个门店的销售数据。"
        },
        {
            "start": 125.38,
            "end": 128.92,
            "text": "哪个颜色最受欢迎、哪个尺码卖得最快、"
        },
        {
            "start": 128.92,
            "end": 130.78,
            "text": "哪个城市的需求最大。"
        },
        {
            "start": 130.78,
            "end": 136.04,
            "text": "然后快速反馈给生产端，指导追加生产的数量和分布。"
        },
        {
            "start": 136.58,
            "end": 138.22,
            "text": "第三，库存分配。"
        },
        {
            "start": 138.22,
            "end": 140.9,
            "text": "Zara 的全球门店有好几千家。"
        },
        {
            "start": 140.9,
            "end": 145.6,
            "text": "同一款衣服，在巴黎可能热卖，在纽约可能卖不动。"
        },
        {
            "start": 145.6,
            "end": 150.74,
            "text": "AI 根据每个门店的实时销售数据和当地的需求特征，"
        },
        {
            "start": 150.74,
            "end": 153.32,
            "text": "优化库存在门店之间的分配。"
        },
        {
            "start": 153.72,
            "end": 155.68,
            "text": "第四，定价和促销。"
        },
        {
            "start": 155.68,
            "end": 159.6,
            "text": "AI 帮助 Zara 决定哪些产品什么时候降价、降多少。"
        },
        {
            "start": 159.6,
            "end": 163.12,
            "text": "目标是在尽量少打折的情况下清掉库存。"
        },
        {
            "start": 163.12,
            "end": 166.86,
            "text": "Zara 的折扣率在行业中一直是最低的之一，"
        },
        {
            "start": 166.86,
            "end": 170.84,
            "text": "这跟它的精准生产和 AI 定价策略有直接关系。"
        },
        {
            "start": 170.84,
            "end": 172.39999999999998,
            "text": "好，现在讲 Shein。"
        },
        {
            "start": 172.39999999999998,
            "end": 175.42,
            "text": "Shein 的供应链模式跟 Zara 完全不同。"
        },
        {
            "start": 175.42,
            "end": 179.84,
            "text": "如果说 Zara 是\"快时尚\"，那 Shein 就是\"超快时尚\"。"
        },
        {
            "start": 179.84,
            "end": 184.9,
            "text": "Zara 从设计到上架需要两到三周，Shein 只需要三到七天。"
        },
        {
            "start": 184.9,
            "end": 189.7,
            "text": "Zara 一年推出一万款新品，Shein 一天就能上新几千款。"
        },
        {
            "start": 189.7,
            "end": 191.26,
            "text": "Shein 怎么做到的？"
        },
        {
            "start": 191.26,
            "end": 195.04,
            "text": "它的供应链模式可以用一个词概括：小单快反。"
        },
        {
            "start": 195.04,
            "end": 200.16,
            "text": "\"小单\"就是每次只生产极少的数量，通常一百到三百件。"
        },
        {
            "start": 200.16,
            "end": 204.84,
            "text": "\"快反\"就是根据市场反应快速决定是否追加生产。"
        },
        {
            "start": 204.84,
            "end": 206.62,
            "text": "具体流程是这样的。"
        },
        {
            "start": 206.62,
            "end": 208.12,
            "text": "第一步，AI 设计辅助。"
        },
        {
            "start": 208.12,
            "end": 211.08,
            "text": "Shein 用 AI 分析全球的时尚趋势、"
        },
        {
            "start": 211.08,
            "end": 213.64,
            "text": "社交媒体的热点、竞品的新品，"
        },
        {
            "start": 213.64,
            "end": 216.66,
            "text": "自动生成设计方案供设计师参考。"
        },
        {
            "start": 216.66,
            "end": 218.54,
            "text": "第二步，小批量试产。"
        },
        {
            "start": 218.54,
            "end": 223.24,
            "text": "把新设计交给供应商，只生产一两百件，上线销售。"
        },
        {
            "start": 223.24,
            "end": 225.06,
            "text": "第三步，AI 测款。"
        },
        {
            "start": 225.06,
            "end": 228.68,
            "text": "上线后 AI 实时监控点击率、收藏率、加购率、转化率。"
        },
        {
            "start": 228.68,
            "end": 231.92,
            "text": "三到七天内就能判断这个款是爆款还是平款。"
        },
        {
            "start": 231.92,
            "end": 233.78,
            "text": "第四步，快速追单。"
        },
        {
            "start": 233.78,
            "end": 238.12,
            "text": "如果数据显示是爆款，AI 立刻触发追加生产。"
        },
        {
            "start": 238.12,
            "end": 240.4,
            "text": "供应商在几天内就能交货。"
        },
        {
            "start": 240.4,
            "end": 245.4,
            "text": "如果数据不好，直接停止，损失就是那一两百件的成本。"
        },
        {
            "start": 245.4,
            "end": 249.32,
            "text": "Shein 的 AI 系统渗透到了供应链的每一个环节。"
        },
        {
            "start": 249.84,
            "end": 254.12,
            "text": "在设计环节，AI 不只是预测趋势，它还能拆解趋势。"
        },
        {
            "start": 254.70000000000002,
            "end": 258.14,
            "text": "比如某个颜色在社交媒体上开始火了，"
        },
        {
            "start": 258.14,
            "end": 260.86,
            "text": "AI 会把这个颜色跟不同的版型、面料、"
        },
        {
            "start": 260.86,
            "end": 262.3,
            "text": "图案做排列组合，"
        },
        {
            "start": 262.3,
            "end": 264.68,
            "text": "自动生成几十个设计方案。"
        },
        {
            "start": 264.68,
            "end": 266.76,
            "text": "在供应商管理环节，"
        },
        {
            "start": 266.76,
            "end": 271.16,
            "text": "Shein 把几千家供应商连接到它的数字系统上。"
        },
        {
            "start": 271.16,
            "end": 276.16,
            "text": "供应商可以实时看到订单需求、面料要求、交付时间。"
        },
        {
            "start": 276.74,
            "end": 282.12,
            "text": "AI 根据每个供应商的产能、交期、质量表现来分配订单。"
        },
        {
            "start": 282.12,
            "end": 286.98,
            "text": "在物流环节，Shein 主要面向海外市场，物流链路很长。"
        },
        {
            "start": 286.98,
            "end": 290.36,
            "text": "AI 优化了从中国到全球各地的物流路线，"
        },
        {
            "start": 290.36,
            "end": 293.38,
            "text": "包括仓库选址、配送方式选择、"
        },
        {
            "start": 293.38,
            "end": 294.64,
            "text": "清关流程优化。"
        },
        {
            "start": 294.64,
            "end": 298.22,
            "text": "在定价环节，Shein 的产品价格普遍很低。"
        },
        {
            "start": 298.22,
            "end": 301.72,
            "text": "AI 帮它在极低的价格下找到利润空间。"
        },
        {
            "start": 301.72,
            "end": 304.64,
            "text": "通过精准控制库存避免滞销、"
        },
        {
            "start": 304.64,
            "end": 307.48,
            "text": "通过大规模采购降低面料成本、"
        },
        {
            "start": 307.48,
            "end": 310.82,
            "text": "通过算法优化生产排程降低制造成本。"
        },
        {
            "start": 310.82,
            "end": 313.84,
            "text": "好，Zara 和 Shein 两种模式对比一下。"
        },
        {
            "start": 313.84,
            "end": 317.86,
            "text": "在生产模式上，Zara 是\"近岸生产加快速追单\"。"
        },
        {
            "start": 317.86,
            "end": 321.6,
            "text": "供应链短、响应快，但单位成本高一些。"
        },
        {
            "start": 321.6,
            "end": 324.84,
            "text": "Shein 是\"中国制造加极致小单快反\"。"
        },
        {
            "start": 324.84,
            "end": 328.42,
            "text": "供应链长，但成本极低、款式极多。"
        },
        {
            "start": 328.42,
            "end": 330.06,
            "text": "在设计模式上，"
        },
        {
            "start": 330.06,
            "end": 332.36,
            "text": "Zara 更多依赖人类设计师的判断，"
        },
        {
            "start": 332.36,
            "end": 333.92,
            "text": "AI 辅助趋势分析。"
        },
        {
            "start": 333.92,
            "end": 338.88,
            "text": "Shein 更多依赖 AI 驱动设计，人类设计师做审核和优化。"
        },
        {
            "start": 339.36,
            "end": 342.66,
            "text": "在库存策略上，两者的理念是一样的："
        },
        {
            "start": 342.66,
            "end": 345.7,
            "text": "小批量试水，数据验证后再追加。"
        },
        {
            "start": 345.7,
            "end": 349.92,
            "text": "只是 Shein 的批量更小、速度更快、款式更多。"
        },
        {
            "start": 349.92,
            "end": 353.98,
            "text": "在目标客群上，Zara 走的是中端路线，"
        },
        {
            "start": 353.98,
            "end": 356.1166666666667,
            "text": "强调\"快时尚但有品质感\"。"
        },
        {
            "start": 356.1166666666667,
            "end": 360.92,
            "text": "Shein 走的是极致性价比路线，目标是\"最新最多最便宜\"。"
        },
        {
            "start": 361.42,
            "end": 362.72,
            "text": "从这两个案例中，"
        },
        {
            "start": 362.72,
            "end": 365.98,
            "text": "我们可以提炼出几个通用的供应链管理原则。"
        },
        {
            "start": 365.98,
            "end": 369.22,
            "text": "第一个原则：需求驱动而不是计划驱动。"
        },
        {
            "start": 369.78000000000003,
            "end": 373.34,
            "text": "传统的供应链是\"先计划、再生产、再销售\"。"
        },
        {
            "start": 373.34,
            "end": 378.36,
            "text": "Zara 和 Shein 都是\"先小批量测试、看数据、再决定生产多少\"。"
        },
        {
            "start": 378.36,
            "end": 381.92,
            "text": "这种需求驱动的模式大幅减少了库存风险。"
        },
        {
            "start": 382.36,
            "end": 385.0,
            "text": "不只是服装行业可以这样做。"
        },
        {
            "start": 385.0,
            "end": 389.24,
            "text": "任何有\"猜需求\"问题的行业，都可以借鉴这个思路。"
        },
        {
            "start": 389.24,
            "end": 395.0,
            "text": "先用最小成本测试市场反应，用数据验证后再规模化。"
        },
        {
            "start": 395.0,
            "end": 398.8,
            "text": "第二个原则：供应链的柔性比成本更重要。"
        },
        {
            "start": 398.8,
            "end": 402.7,
            "text": "Zara 选择在西班牙生产，成本比在亚洲高。"
        },
        {
            "start": 402.7,
            "end": 404.32,
            "text": "但它换来的是柔性："
        },
        {
            "start": 404.32,
            "end": 407.72,
            "text": "能快速响应市场变化，能小批量生产，"
        },
        {
            "start": 407.72,
            "end": 408.9,
            "text": "能快速追单。"
        },
        {
            "start": 408.9,
            "end": 412.06,
            "text": "这种柔性带来的收益远超成本的增加。"
        },
        {
            "start": 412.06,
            "end": 415.42,
            "text": "第三个原则：数据必须端到端打通。"
        },
        {
            "start": 415.42,
            "end": 420.48,
            "text": "Zara 和 Shein 的共同点是：从消费者端的数据一直打通到生产端。"
        },
        {
            "start": 420.48,
            "end": 423.96,
            "text": "消费者在前端的浏览、点击、购买行为，"
        },
        {
            "start": 423.96,
            "end": 426.9,
            "text": "实时传递到后端的设计、生产、物流。"
        },
        {
            "start": 426.9,
            "end": 430.72,
            "text": "没有这个数据打通，快速响应就是一句空话。"
        },
        {
            "start": 430.72,
            "end": 434.7,
            "text": "第四个原则：AI 的价值在于\"缩短反馈循环\"。"
        },
        {
            "start": 434.7,
            "end": 437.4,
            "text": "从发现趋势到设计新品、"
        },
        {
            "start": 437.4,
            "end": 440.42,
            "text": "从上架到判断爆款、从追单到交付。"
        },
        {
            "start": 440.42,
            "end": 443.76,
            "text": "每一个循环越短，你的竞争优势越大。"
        },
        {
            "start": 443.76,
            "end": 447.68,
            "text": "AI 的核心价值就是在每个环节缩短这个反馈循环。"
        },
        {
            "start": 447.68,
            "end": 449.24,
            "text": "好，总结一下。"
        },
        {
            "start": 449.24,
            "end": 454.08,
            "text": "Zara 模式：近岸生产加快速响应，强调品质和速度的平衡。"
        },
        {
            "start": 454.08,
            "end": 457.22,
            "text": "Shein 模式：小单快反加 AI 驱动设计，"
        },
        {
            "start": 457.22,
            "end": 460.22,
            "text": "强调极致性价比和海量款式。"
        },
        {
            "start": 460.22,
            "end": 462.44,
            "text": "两者的共同点：小批量试水、"
        },
        {
            "start": 462.44,
            "end": 465.02,
            "text": "数据驱动追单、AI 贯穿全链路。"
        },
        {
            "start": 465.02,
            "end": 468.04,
            "text": "四个通用原则：需求驱动、供应链柔性、"
        },
        {
            "start": 468.04,
            "end": 471.06,
            "text": "数据端到端打通、AI 缩短反馈循环。"
        },
        {
            "start": 471.52000000000004,
            "end": 473.54,
            "text": "下一期我们看第三个案例："
        },
        {
            "start": 473.54,
            "end": 476.92,
            "text": "一家传统制造企业怎么用 AI 实现运营升级。"
        },
        {
            "start": 476.92,
            "end": 478.84,
            "text": "我是 Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 9.464,
        "index": 0
    },
    {
        "start": 9.464,
        "end": 64.003,
        "index": 1
    },
    {
        "start": 64.003,
        "end": 119.369,
        "index": 2
    },
    {
        "start": 119.369,
        "end": 173.552,
        "index": 3
    },
    {
        "start": 173.552,
        "end": 227.736,
        "index": 4
    },
    {
        "start": 227.736,
        "end": 284.049,
        "index": 5
    },
    {
        "start": 284.049,
        "end": 349.353,
        "index": 6
    },
    {
        "start": 349.353,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-10.html?entry={entry}", secondaryHref: "./lesson-operations-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-09", coachSource: "./ai-coach.html?source=lesson-operations-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：快时尚为什么能快的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：快时尚为什么能快", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
