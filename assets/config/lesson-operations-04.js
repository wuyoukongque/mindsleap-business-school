(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第4课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第4课：AI 供应链：让链条更智能",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep65-ai-supply-chain/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 供应链：让链条更智能", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-05.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "从 RPA 到 Agent：流程自动化的升级",
                "body": "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：一家制造企业的 AI 运营升级",
                "body": "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-operations-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "供应链不是后勤，而是经营系统的一部分",
                "body": "它牵动采购、生产、库存、物流和客户交付，任何一个环节失衡，都会放大成经营问题。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "需求预测、库存优化和韧性，是 AI 最值得先介入的三大入口",
                "body": "这三处决定了供应链是变成成本黑洞，还是变成效率与现金流优势。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "数字孪生代表了更高阶的供应链管理能力",
                "body": "当企业能在虚拟世界里先模拟风险和方案，供应链就开始从反应式管理走向预演式管理。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 4/12", "建议下一节：从 RPA 到 Agent：流程自动化的升级", '也可以先整理这一节'], nextHref: "./lesson-operations-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-04", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson4", audioSource: './assets/audio/operations-ep65-ai-supply-chain.mp3?v=20260413-operations-04a', vttSrc: './assets/subtitles/operations-ep65-ai-supply-chain.vtt?v=20260413-operations-04a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep65-ai-supply-chain/slide_01.png",
            "label": "AI 供应链：让链条更智能",
            "caption": "这一节会帮助你系统理解：AI 供应链：让链条更智能"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_02.png",
            "label": "供应链到底在解决什么",
            "caption": "供应链真正难的地方，不是单点动作，而是大量变量在同一条链路上互相影响。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_03.png",
            "label": "需求预测",
            "caption": "供应链很多问题的源头，其实都从预测不准开始。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_04.png",
            "label": "库存优化",
            "caption": "库存优化真正追求的，不是库存越低越好，而是在服务水平和现金效率之间找到更优平衡。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_05.png",
            "label": "供应链韧性",
            "caption": "AI 时代的供应链，不只是更省，更要更稳。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_06.png",
            "label": "AI 在各环节的应用",
            "caption": "真正有价值的供应链 AI，不是单点提效，而是沿整条链条持续优化。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_07.png",
            "label": "数字孪生供应链",
            "caption": "数字孪生真正改变的，不只是看见供应链，而是让你提前演练供应链。"
        },
        {
            "file": "operations-ep65-ai-supply-chain/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.02,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.02,
            "end": 2.78,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.78,
            "end": 5.32,
            "text": "今天这一节，我们来聊 AI 供应链。"
        },
        {
            "start": 5.32,
            "end": 8.14,
            "text": "很多人一听供应链，会觉得那是制造业、"
        },
        {
            "start": 8.14,
            "end": 10.6,
            "text": "大工厂或者零售巨头的事。"
        },
        {
            "start": 10.6,
            "end": 13.1,
            "text": "但只要你的企业有采购、生产、库存、"
        },
        {
            "start": 13.1,
            "end": 14.2,
            "text": "配送或者交付，"
        },
        {
            "start": 14.2,
            "end": 16.58,
            "text": "其实就已经在面对供应链问题了。"
        },
        {
            "start": 16.58,
            "end": 20.58,
            "text": "如果要把供应链管理讲得最简单，它要解决的是一件事。"
        },
        {
            "start": 20.58,
            "end": 22.64,
            "text": "在正确的时间，把正确的产品，"
        },
        {
            "start": 22.64,
            "end": 25.3,
            "text": "以正确的数量，送到正确的地点，"
        },
        {
            "start": 25.3,
            "end": 27.54,
            "text": "同时尽量把整体成本控制住。"
        },
        {
            "start": 27.54,
            "end": 30.22,
            "text": "听起来很直白，但做起来非常复杂。"
        },
        {
            "start": 30.22,
            "end": 32.42,
            "text": "因为供应链不是一条静止的链。"
        },
        {
            "start": 32.42,
            "end": 33.86,
            "text": "供应商交期会变。"
        },
        {
            "start": 33.86,
            "end": 35.4,
            "text": "原材料价格会波动。"
        },
        {
            "start": 35.4,
            "end": 36.76,
            "text": "产能会受限制。"
        },
        {
            "start": 36.76,
            "end": 38.56,
            "text": "库存会积压或者断货。"
        },
        {
            "start": 38.56,
            "end": 40.52,
            "text": "客户需求也会不断变化。"
        },
        {
            "start": 40.52,
            "end": 42.26,
            "text": "这些变量还会互相影响。"
        },
        {
            "start": 42.26,
            "end": 44.2,
            "text": "所以供应链管理真正难的，"
        },
        {
            "start": 44.2,
            "end": 45.56,
            "text": "不是某一个单点动作，"
        },
        {
            "start": 45.56,
            "end": 49.4,
            "text": "而是要在大量不确定性里保持整条链路的稳定和效率。"
        },
        {
            "start": 49.4,
            "end": 51.58,
            "text": "先看供应链最核心的三个挑战。"
        },
        {
            "start": 51.58,
            "end": 53.24,
            "text": "第一个，是需求预测。"
        },
        {
            "start": 53.24,
            "end": 55.86,
            "text": "你到底该生产多少，备多少货，"
        },
        {
            "start": 55.86,
            "end": 57.68,
            "text": "往哪个区域压多少库存，"
        },
        {
            "start": 57.68,
            "end": 59.6,
            "text": "这些问题都从预测开始。"
        },
        {
            "start": 59.6,
            "end": 63.72,
            "text": "如果预测太高，货做多了卖不掉，库存和现金都会被压住。"
        },
        {
            "start": 63.72,
            "end": 68.46,
            "text": "如果预测太低，货不够卖，客户流失，机会也会跟着损失。"
        },
        {
            "start": 68.46,
            "end": 71.54,
            "text": "传统预测很多时候还是靠历史数据加经验判断。"
        },
        {
            "start": 71.54,
            "end": 73.08,
            "text": "去年同期卖了多少，"
        },
        {
            "start": 73.08,
            "end": 75.06,
            "text": "今年感觉会多一点还是少一点，"
        },
        {
            "start": 75.06,
            "end": 77.22,
            "text": "然后拍一个相对合理的数字。"
        },
        {
            "start": 77.22,
            "end": 80.04,
            "text": "AI 最大的变化，是它可以同时看更多变量。"
        },
        {
            "start": 80.04,
            "end": 83.4,
            "text": "历史销量、季节变化、促销计划、天气、"
        },
        {
            "start": 83.4,
            "end": 85.38,
            "text": "社交媒体热度、竞品动态，"
        },
        {
            "start": 85.38,
            "end": 88.36,
            "text": "甚至宏观经济信号，都可以一起纳入。"
        },
        {
            "start": 88.36,
            "end": 93.08,
            "text": "这让预测不再只是线性外推，而更像一个动态判断系统。"
        },
        {
            "start": 93.08,
            "end": 95.02,
            "text": "对大规模供应链来说，"
        },
        {
            "start": 95.02,
            "end": 97.04,
            "text": "预测精度哪怕只提升一点点，"
        },
        {
            "start": 97.04,
            "end": 98.94,
            "text": "背后都可能是很大的库存成本、"
        },
        {
            "start": 98.94,
            "end": 100.78,
            "text": "缺货损失和现金流差异。"
        },
        {
            "start": 100.78,
            "end": 102.88,
            "text": "第二个挑战，是库存优化。"
        },
        {
            "start": 102.88,
            "end": 105.1,
            "text": "库存是供应链里最纠结的地方。"
        },
        {
            "start": 105.1,
            "end": 108.06,
            "text": "库存高了，钱被占住，仓储成本上升，"
        },
        {
            "start": 108.06,
            "end": 110.4,
            "text": "过期和贬值风险也会跟着增加。"
        },
        {
            "start": 110.4,
            "end": 113.6,
            "text": "库存低了，又容易断货，服务水平下降，"
        },
        {
            "start": 113.6,
            "end": 115.22,
            "text": "销售机会直接损失。"
        },
        {
            "start": 115.22,
            "end": 117.5,
            "text": "所以库存从来不是越少越好。"
        },
        {
            "start": 117.5,
            "end": 118.58,
            "text": "真正的问题是，"
        },
        {
            "start": 118.58,
            "end": 121.86,
            "text": "你能不能在成本和风险之间找到更优的平衡。"
        },
        {
            "start": 121.86,
            "end": 124.72,
            "text": "AI 在这里能做三件很重要的事。"
        },
        {
            "start": 124.72,
            "end": 127.9,
            "text": "第一，把安全库存从固定数值变成动态策略。"
        },
        {
            "start": 127.9,
            "end": 130.18,
            "text": "不是全年都用同一个安全库存，"
        },
        {
            "start": 130.18,
            "end": 132.12,
            "text": "而是根据当前需求预测、"
        },
        {
            "start": 132.12,
            "end": 134.9,
            "text": "供应商交期和季节因素不断调整。"
        },
        {
            "start": 134.9,
            "end": 137.04,
            "text": "第二，如果你有多个仓库，"
        },
        {
            "start": 137.04,
            "end": 140.34,
            "text": "AI 可以帮你优化库存在不同仓库之间的分布。"
        },
        {
            "start": 140.34,
            "end": 142.76,
            "text": "哪里该放多少，什么时候该调拨，"
        },
        {
            "start": 142.76,
            "end": 144.9,
            "text": "怎样才能既降低仓储压力，"
        },
        {
            "start": 144.9,
            "end": 146.36,
            "text": "又提升交付效率。"
        },
        {
            "start": 146.36,
            "end": 148.96,
            "text": "第三，它可以做到按商品精细化管理。"
        },
        {
            "start": 148.96,
            "end": 150.98,
            "text": "高频热卖品和低频长尾品，"
        },
        {
            "start": 150.98,
            "end": 153.22,
            "text": "本来就不应该用同一套库存规则。"
        },
        {
            "start": 153.22,
            "end": 157.34,
            "text": "AI 可以让库存策略从粗放管理走向更精细的分层管理。"
        },
        {
            "start": 157.34,
            "end": 159.28,
            "text": "第三个挑战，是供应链韧性。"
        },
        {
            "start": 159.28,
            "end": 162.46,
            "text": "过去很多企业做供应链，最重视的是效率和成本。"
        },
        {
            "start": 162.46,
            "end": 165.86,
            "text": "但这几年大家越来越意识到，供应链还要能扛风险。"
        },
        {
            "start": 165.86,
            "end": 167.86,
            "text": "一场疫情、一次港口堵塞、"
        },
        {
            "start": 167.86,
            "end": 169.56,
            "text": "一个关键供应商出问题，"
        },
        {
            "start": 169.56,
            "end": 171.2,
            "text": "整条链路都可能被打乱。"
        },
        {
            "start": 171.2,
            "end": 173.96,
            "text": "这时候真正重要的，不只是平时跑得快，"
        },
        {
            "start": 173.96,
            "end": 176.26,
            "text": "而是出事以后能不能迅速恢复。"
        },
        {
            "start": 176.26,
            "end": 178.6,
            "text": "AI 在韧性建设里特别有价值。"
        },
        {
            "start": 178.6,
            "end": 181.76,
            "text": "它可以持续监控新闻、天气、港口状态、"
        },
        {
            "start": 181.76,
            "end": 184.4,
            "text": "供应商经营情况和全球风险事件。"
        },
        {
            "start": 184.4,
            "end": 187.90000000000003,
            "text": "当某个风险开始上升时，系统就能提前预警。"
        },
        {
            "start": 187.90000000000003,
            "end": 190.5,
            "text": "更进一步，它还能帮你做情景模拟。"
        },
        {
            "start": 190.5,
            "end": 193.14,
            "text": "如果某家供应商突然断供会怎样。"
        },
        {
            "start": 193.14,
            "end": 195.96,
            "text": "如果某条路线中断，替代方案是什么。"
        },
        {
            "start": 195.96,
            "end": 199.6,
            "text": "如果需求突然暴增五成，现有库存和产能还能不能撑住。"
        },
        {
            "start": 199.6,
            "end": 202.68,
            "text": "这些问题过去常常等事情发生了才被迫回答。"
        },
        {
            "start": 202.68,
            "end": 204.96,
            "text": "而 AI 让你有机会提前推演。"
        },
        {
            "start": 204.96,
            "end": 209.08,
            "text": "讲完三大挑战，我们再看 AI 在供应链各环节到底怎么用。"
        },
        {
            "start": 209.08,
            "end": 212.9,
            "text": "采购环节，AI 可以做供应商评估和价格趋势分析。"
        },
        {
            "start": 212.9,
            "end": 215.56,
            "text": "哪些供应商交付稳定，哪些经常拖期，"
        },
        {
            "start": 215.56,
            "end": 218.36,
            "text": "哪些质量波动大，哪些报价更有竞争力，"
        },
        {
            "start": 218.36,
            "end": 220.22,
            "text": "这些都可以被系统化比较。"
        },
        {
            "start": 220.22,
            "end": 223.68,
            "text": "生产环节，AI 可以做排程优化和预测性维护。"
        },
        {
            "start": 223.68,
            "end": 226.9,
            "text": "多个订单、多条产线、多种产品同时排，"
        },
        {
            "start": 226.9,
            "end": 228.62,
            "text": "AI 更容易找到兼顾效率、"
        },
        {
            "start": 228.62,
            "end": 230.48,
            "text": "交期和换线成本的组合。"
        },
        {
            "start": 230.48,
            "end": 234.88,
            "text": "物流环节，AI 最常见的是路线优化和物流商组合优化。"
        },
        {
            "start": 234.88,
            "end": 236.84,
            "text": "同样一批货，怎么走路程更短、"
        },
        {
            "start": 236.84,
            "end": 238.56,
            "text": "时间更稳、成本更低，"
        },
        {
            "start": 238.56,
            "end": 240.26,
            "text": "AI 在这类问题上很强。"
        },
        {
            "start": 240.26,
            "end": 242.76,
            "text": "仓储环节，它可以优化仓库布局、"
        },
        {
            "start": 242.76,
            "end": 244.38,
            "text": "拣货路径和作业调度，"
        },
        {
            "start": 244.38,
            "end": 246.26,
            "text": "让人和设备都少走弯路。"
        },
        {
            "start": 246.26,
            "end": 247.92,
            "text": "这也是一个很关键的判断。"
        },
        {
            "start": 247.92,
            "end": 250.14,
            "text": "供应链里的 AI 不是单点工具。"
        },
        {
            "start": 250.14,
            "end": 253.96,
            "text": "它的真正价值，是沿整条链路不断放大决策质量。"
        },
        {
            "start": 253.96,
            "end": 256.18,
            "text": "采购更准一点，库存就会更稳。"
        },
        {
            "start": 256.18,
            "end": 258.58,
            "text": "排程更顺一点，交付就会更稳。"
        },
        {
            "start": 258.58,
            "end": 261.52,
            "text": "路线更优一点，成本和时效就都会变。"
        },
        {
            "start": 261.52,
            "end": 265.02,
            "text": "供应链就是这样，一个环节变好，会继续影响下一个环节。"
        },
        {
            "start": 265.02,
            "end": 267.96,
            "text": "最后再讲一个更高阶的概念，数字孪生供应链。"
        },
        {
            "start": 267.96,
            "end": 269.46,
            "text": "你可以把它理解成，"
        },
        {
            "start": 269.46,
            "end": 271.9,
            "text": "一个和真实供应链实时同步的虚拟副本。"
        },
        {
            "start": 271.9,
            "end": 273.18,
            "text": "有了这个虚拟副本，"
        },
        {
            "start": 273.18,
            "end": 275.02,
            "text": "你就可以先在数字世界里做实验，"
        },
        {
            "start": 275.02,
            "end": 277.06,
            "text": "而不必先在真实世界里冒险。"
        },
        {
            "start": 277.06,
            "end": 279.72,
            "text": "比如，如果我关掉一个仓库，会发生什么。"
        },
        {
            "start": 279.72,
            "end": 283.12,
            "text": "如果春节期间需求暴增，现有链路能不能扛住。"
        },
        {
            "start": 283.12,
            "end": 286.76,
            "text": "如果核心供应商停摆，替代方案会把成本拉高多少。"
        },
        {
            "start": 286.76,
            "end": 288.76,
            "text": "这些都可以先在模型里模拟。"
        },
        {
            "start": 288.76,
            "end": 291.9,
            "text": "数字孪生的意义，不只是更炫的可视化。"
        },
        {
            "start": 291.9,
            "end": 294.24,
            "text": "而是让供应链管理开始从被动反应，"
        },
        {
            "start": 294.24,
            "end": 296.42,
            "text": "走向提前预演和提前准备。"
        },
        {
            "start": 296.42,
            "end": 298.9,
            "text": "它代表的是供应链能力的更高阶段。"
        },
        {
            "start": 298.9,
            "end": 300.88,
            "text": "不是等风险发生了再调度，"
        },
        {
            "start": 300.88,
            "end": 304.5,
            "text": "而是在风险发生前就已经推演过多套方案。"
        },
        {
            "start": 304.5,
            "end": 305.78,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 305.78,
            "end": 307.92,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 307.92,
            "end": 309.46,
            "text": "第一，供应链管理的本质，"
        },
        {
            "start": 309.46,
            "end": 312.5,
            "text": "是在大量不确定变量中，同时平衡时间、"
        },
        {
            "start": 312.5,
            "end": 314.48,
            "text": "数量、地点和成本四件事。"
        },
        {
            "start": 314.48,
            "end": 317.08,
            "text": "第二，AI 对供应链最核心的价值，"
        },
        {
            "start": 317.08,
            "end": 318.26,
            "text": "体现在需求预测、"
        },
        {
            "start": 318.26,
            "end": 321.12,
            "text": "库存优化和韧性建设这三大挑战上。"
        },
        {
            "start": 321.12,
            "end": 324.48,
            "text": "第三，从采购、生产、物流到仓储，"
        },
        {
            "start": 324.48,
            "end": 328.3,
            "text": "AI 正在把供应链从经验驱动升级成更可预测、"
        },
        {
            "start": 328.3,
            "end": 330.34,
            "text": "更可模拟、更可优化的系统。"
        },
        {
            "start": 330.34,
            "end": 334.0,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 334.0,
            "end": 338.34,
            "text": "想一想，你的企业供应链里最脆弱的地方到底在哪里。"
        },
        {
            "start": 338.34,
            "end": 339.12,
            "text": "是预测不准。"
        },
        {
            "start": 339.12,
            "end": 340.54,
            "text": "是库存压得太重。"
        },
        {
            "start": 340.54,
            "end": 342.18,
            "text": "是供应商太单一。"
        },
        {
            "start": 342.18,
            "end": 345.1,
            "text": "还是一旦出事就没有替代方案。"
        },
        {
            "start": 345.1,
            "end": 346.84,
            "text": "当你先把这件事看清楚，"
        },
        {
            "start": 346.84,
            "end": 349.74,
            "text": "AI 在供应链里最该先放进去的位置，"
        },
        {
            "start": 349.74,
            "end": 350.94,
            "text": "也就会更清楚。"
        },
        {
            "start": 350.94,
            "end": 351.92,
            "text": "我是 Lincoln。"
        },
        {
            "start": 352.3,
            "end": 354.78,
            "text": "我们下一节，继续聊流程自动化，"
        },
        {
            "start": 354.78,
            "end": 358.2,
            "text": "看看从规则型自动化走向智能流程系统，"
        },
        {
            "start": 358.2,
            "end": 359.34,
            "text": "企业到底该怎么做。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 16.58,
        "index": 0
    },
    {
        "start": 16.58,
        "end": 51.58,
        "index": 1
    },
    {
        "start": 51.58,
        "end": 100.78,
        "index": 2
    },
    {
        "start": 100.78,
        "end": 157.34,
        "index": 3
    },
    {
        "start": 157.34,
        "end": 204.96,
        "index": 4
    },
    {
        "start": 204.96,
        "end": 265.02,
        "index": 5
    },
    {
        "start": 265.02,
        "end": 304.5,
        "index": 6
    },
    {
        "start": 304.5,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-05.html?entry={entry}", secondaryHref: "./lesson-operations-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-04", coachSource: "./ai-coach.html?source=lesson-operations-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 供应链：让链条更智能的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 供应链：让链条更智能", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
