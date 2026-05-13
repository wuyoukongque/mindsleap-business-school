(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第8课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第8课：案例：亚马逊的 AI 运营飞轮",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep69-case-amazon/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：亚马逊的 AI 运营飞轮", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-09.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-operations-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "飞轮的关键不是速度，而是系统会不会自我增强",
                "body": "当客户体验、卖家数量、选品丰富度和价格优势相互放大时，运营就会从线性改善走向飞轮式增长。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "系统打通比单点优化更重要",
                "body": "推荐、库存、物流、定价和客服如果各做各的，很难形成全局优势；打通以后，AI 才能做真正的整体优化。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "运营效率最终要回到客户体验",
                "body": "亚马逊所有运营动作看起来都很技术化，但最终目的只有一个：让客户感受到更快、更准、更省、更省心。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 8/12", "建议下一节：案例：快时尚为什么能快", '也可以先整理这一节'], nextHref: "./lesson-operations-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-08", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson8", audioSource: './assets/audio/operations-ep69-case-amazon.mp3?v=20260415-operations-08a', vttSrc: './assets/subtitles/operations-ep69-case-amazon.vtt?v=20260415-operations-08a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep69-case-amazon/slide_01.png",
            "label": "案例：亚马逊的 AI 运营飞轮",
            "caption": "这一节会帮助你系统理解：案例：亚马逊的 AI 运营飞轮"
        },
        {
            "file": "operations-ep69-case-amazon/slide_02.png",
            "label": "亚马逊飞轮到底是什么",
            "caption": "亚马逊的核心不是某一个动作更强，而是它把客户体验与运营系统做成了会自我增强的飞轮。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_03.png",
            "label": "推荐与库存联动",
            "caption": "推荐系统一旦和库存系统打通，就不只是卖货工具，而会变成运营调度工具。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_04.png",
            "label": "仓储与物流网络",
            "caption": "亚马逊的物流速度，本质上来自预测、预布局和实时调度，而不是单纯更拼命。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_05.png",
            "label": "动态定价与卖家管理",
            "caption": "价格、卖家和选品不是分开的管理动作，而是同一个运营系统里的不同齿轮。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_06.png",
            "label": "预测性客服",
            "caption": "预测性客服真正改变的，是客户从“出问题再找你”变成“问题出现前你先处理”。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_07.png",
            "label": "三个关键洞察",
            "caption": "亚马逊案例最值得学的，不是某个具体技巧，而是系统打通、长期积累和客户导向这三个底层判断。"
        },
        {
            "file": "operations-ep69-case-amazon/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.94,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 0.94,
            "end": 2.88,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.88,
            "end": 3.62,
            "text": "今天这一节，"
        },
        {
            "start": 3.62,
            "end": 5.86,
            "text": "我们来看一个运营管理里非常经典、"
        },
        {
            "start": 5.86,
            "end": 7.64,
            "text": "也非常有代表性的案例。"
        },
        {
            "start": 7.64,
            "end": 8.1,
            "text": "亚马逊。"
        },
        {
            "start": 8.1,
            "end": 12.1,
            "text": "很多人一提亚马逊，第一反应是规模大、物流快、技术强。"
        },
        {
            "start": 12.1,
            "end": 15.9,
            "text": "但如果只这么理解，还没有真正看见它最厉害的地方。"
        },
        {
            "start": 15.9,
            "end": 19.44,
            "text": "亚马逊真正强的，不是某一个单点动作特别高效。"
        },
        {
            "start": 19.44,
            "end": 21.86,
            "text": "而是它把客户体验、卖家供给、"
        },
        {
            "start": 21.86,
            "end": 24.56,
            "text": "商品丰富度、价格优势和运营效率，"
        },
        {
            "start": 24.56,
            "end": 26.8,
            "text": "做成了一个会不断自我增强的系统。"
        },
        {
            "start": 26.8,
            "end": 28.6,
            "text": "这就是著名的亚马逊飞轮。"
        },
        {
            "start": 28.6,
            "end": 32.02,
            "text": "如果用最简单的话来讲，飞轮的逻辑是这样的。"
        },
        {
            "start": 32.02,
            "end": 33.88,
            "text": "更好的客户体验，带来更多客户。"
        },
        {
            "start": 33.88,
            "end": 35.74,
            "text": "更多客户，吸引更多卖家。"
        },
        {
            "start": 35.94,
            "end": 38.74,
            "text": "更多卖家，带来更丰富的选品和更低价格。"
        },
        {
            "start": 38.74,
            "end": 42.64,
            "text": "更丰富的选品和更低价格，又进一步强化客户体验。"
        },
        {
            "start": 42.64,
            "end": 45.28,
            "text": "这样循环一圈，飞轮就会继续往前加速。"
        },
        {
            "start": 45.28,
            "end": 49.32,
            "text": "所以亚马逊的真正难点，从来不是把某一个环节做到最好。"
        },
        {
            "start": 49.32,
            "end": 51.84,
            "text": "而是让整套系统能够一起转起来。"
        },
        {
            "start": 51.84,
            "end": 54.220000000000006,
            "text": "AI 在这里扮演的，也不是一个单独外挂。"
        },
        {
            "start": 54.220000000000006,
            "end": 56.7,
            "text": "它更像是持续推动飞轮加速的引擎。"
        },
        {
            "start": 56.7,
            "end": 59.5,
            "text": "先看第一个环节，推荐与库存联动。"
        },
        {
            "start": 59.5,
            "end": 62.06,
            "text": "亚马逊很早就大规模使用推荐系统。"
        },
        {
            "start": 62.06,
            "end": 65.76,
            "text": "你看到的“你可能还喜欢”“买了这个的人也买了那个”，"
        },
        {
            "start": 65.76,
            "end": 67.34,
            "text": "背后都不是简单展示，"
        },
        {
            "start": 67.34,
            "end": 69.08,
            "text": "而是一个复杂的系统判断。"
        },
        {
            "start": 69.08,
            "end": 71.64,
            "text": "很多人把推荐系统理解成营销工具。"
        },
        {
            "start": 71.64,
            "end": 72.76,
            "text": "这当然没错。"
        },
        {
            "start": 72.76,
            "end": 75.02,
            "text": "但如果只停在这里，还是看窄了。"
        },
        {
            "start": 75.02,
            "end": 77.42,
            "text": "推荐系统其实也是运营系统的一部分。"
        },
        {
            "start": 77.42,
            "end": 80.08,
            "text": "因为推荐什么，会直接影响用户买什么。"
        },
        {
            "start": 80.08,
            "end": 82.5,
            "text": "用户买什么，又会影响库存周转、"
        },
        {
            "start": 82.5,
            "end": 84.8,
            "text": "仓储压力、利润结构和配送效率。"
        },
        {
            "start": 84.8,
            "end": 88.72,
            "text": "亚马逊真正厉害的地方，是推荐逻辑并不是只看相关度。"
        },
        {
            "start": 88.72,
            "end": 91.74,
            "text": "它还会同时考虑库存水平、仓库位置、"
        },
        {
            "start": 91.74,
            "end": 94.18,
            "text": "配送时效，甚至整体经营效率。"
        },
        {
            "start": 94.18,
            "end": 97.32,
            "text": "所以系统推荐的，不只是“你可能会喜欢”的商品。"
        },
        {
            "start": 97.32,
            "end": 99.68,
            "text": "而更像是“你可能会喜欢，"
        },
        {
            "start": 99.68,
            "end": 102.36,
            "text": "而且系统也最适合现在卖给你”的商品。"
        },
        {
            "start": 102.36,
            "end": 104.7,
            "text": "这就是系统打通带来的力量。"
        },
        {
            "start": 104.7,
            "end": 107.04,
            "text": "一旦推荐和库存系统连在一起，"
        },
        {
            "start": 107.04,
            "end": 109.34,
            "text": "推荐就不只是一个前台展示逻辑，"
        },
        {
            "start": 109.34,
            "end": 111.66,
            "text": "而会变成后台运营调度的一部分。"
        },
        {
            "start": 111.66,
            "end": 113.98,
            "text": "第二个环节，是仓储与物流网络。"
        },
        {
            "start": 113.98,
            "end": 117.14,
            "text": "亚马逊物流为什么能快，不是简单因为仓库多。"
        },
        {
            "start": 117.14,
            "end": 121.84,
            "text": "而是它会先预测需求，再提前把货放到更接近客户的地方。"
        },
        {
            "start": 121.84,
            "end": 125.14,
            "text": "也就是说，它不是等你下单以后才开始想怎么发货。"
        },
        {
            "start": 125.14,
            "end": 127.08,
            "text": "很多时候，在你下单之前，"
        },
        {
            "start": 127.08,
            "end": 129.86,
            "text": "系统已经开始为可能发生的订单做准备。"
        },
        {
            "start": 129.86,
            "end": 134.08,
            "text": "这种能力背后，依赖的就是预测、预布局和实时调度。"
        },
        {
            "start": 134.08,
            "end": 137.08,
            "text": "先预测哪个区域接下来可能会有更多需求。"
        },
        {
            "start": 137.08,
            "end": 139.44,
            "text": "再把库存提前布到更近的位置。"
        },
        {
            "start": 139.44,
            "end": 141.44,
            "text": "仓内再通过机器人调度、"
        },
        {
            "start": 141.44,
            "end": 143.36,
            "text": "拣货优化和路径安排，"
        },
        {
            "start": 143.36,
            "end": 145.44,
            "text": "把货更快送到出库节点。"
        },
        {
            "start": 145.44,
            "end": 146.9,
            "text": "最后一公里配送阶段，"
        },
        {
            "start": 146.9,
            "end": 149.06,
            "text": "系统还会继续根据订单窗口、"
        },
        {
            "start": 149.06,
            "end": 152.16,
            "text": "道路情况和包裹特征优化路线。"
        },
        {
            "start": 152.16,
            "end": 156.18,
            "text": "你会发现，亚马逊的速度本质上不是加班加人换来的。"
        },
        {
            "start": 156.18,
            "end": 159.4,
            "text": "而是整套运营系统在更早一步就开始准备。"
        },
        {
            "start": 159.4,
            "end": 162.46,
            "text": "这和很多企业做运营优化的差别非常大。"
        },
        {
            "start": 162.46,
            "end": 165.66,
            "text": "很多企业是在问题出现以后，才开始补动作。"
        },
        {
            "start": 165.66,
            "end": 169.02,
            "text": "而亚马逊更像是通过预测，把大量动作前移。"
        },
        {
            "start": 169.02,
            "end": 172.28,
            "text": "所以它看起来更快，其实本质上是准备得更早。"
        },
        {
            "start": 172.28,
            "end": 175.18,
            "text": "第三个环节，是动态定价和卖家管理。"
        },
        {
            "start": 175.18,
            "end": 177.58,
            "text": "亚马逊上的价格不是固定不动的。"
        },
        {
            "start": 177.58,
            "end": 179.86,
            "text": "系统会结合竞品价格、库存水平、"
        },
        {
            "start": 179.86,
            "end": 182.98,
            "text": "需求变化、时间节点等因素不断调整。"
        },
        {
            "start": 182.98,
            "end": 186.56,
            "text": "很多时候，调价并不只是为了把单个商品利润做高。"
        },
        {
            "start": 186.56,
            "end": 188.84,
            "text": "而是为了让整个飞轮转得更顺。"
        },
        {
            "start": 188.84,
            "end": 191.34,
            "text": "比如有些商品，表面看利润不高。"
        },
        {
            "start": 191.34,
            "end": 192.7,
            "text": "但它是流量入口。"
        },
        {
            "start": 192.7,
            "end": 196.5,
            "text": "用户买了它以后，很可能顺便买其他利润更高的商品。"
        },
        {
            "start": 196.5,
            "end": 197.14,
            "text": "这时候，"
        },
        {
            "start": 197.14,
            "end": 200.76,
            "text": "系统会从整体经营角度来判断这个价格应该怎么定，"
        },
        {
            "start": 200.76,
            "end": 202.0,
            "text": "而不是只看单品。"
        },
        {
            "start": 202.0,
            "end": 203.7,
            "text": "卖家管理也是一样。"
        },
        {
            "start": 203.7,
            "end": 206.06,
            "text": "亚马逊平台上有非常多第三方卖家。"
        },
        {
            "start": 206.06,
            "end": 208.8,
            "text": "系统会持续监控发货速度、退货率、"
        },
        {
            "start": 208.8,
            "end": 210.9,
            "text": "评分、假货风险和供给趋势。"
        },
        {
            "start": 210.9,
            "end": 213.36,
            "text": "这些动作看起来是在做平台治理。"
        },
        {
            "start": 213.36,
            "end": 215.04,
            "text": "但从运营角度看，"
        },
        {
            "start": 215.04,
            "end": 216.96,
            "text": "本质上是在保护供给质量、"
        },
        {
            "start": 216.96,
            "end": 218.14,
            "text": "保护客户体验，"
        },
        {
            "start": 218.14,
            "end": 222.12,
            "text": "也是在让飞轮里面的“更多卖家”不会变成“更多混乱”。"
        },
        {
            "start": 222.12,
            "end": 224.64,
            "text": "第四个环节，是预测性客服。"
        },
        {
            "start": 224.64,
            "end": 226.96,
            "text": "这是亚马逊非常值得学的一点。"
        },
        {
            "start": 226.96,
            "end": 230.36,
            "text": "传统客服的逻辑，是客户遇到问题以后来找你。"
        },
        {
            "start": 230.36,
            "end": 231.72,
            "text": "而亚马逊更进一步。"
        },
        {
            "start": 231.72,
            "end": 236.12,
            "text": "它会尽量在客户来投诉之前，就先发现问题并处理预期。"
        },
        {
            "start": 236.12,
            "end": 237.62,
            "text": "比如包裹延迟了。"
        },
        {
            "start": 237.62,
            "end": 239.48,
            "text": "系统不一定等客户自己来查。"
        },
        {
            "start": 239.48,
            "end": 241.26,
            "text": "它可以先主动告诉客户，"
        },
        {
            "start": 241.26,
            "end": 244.2,
            "text": "订单会晚一点到，并给出补偿或说明。"
        },
        {
            "start": 244.2,
            "end": 246.94,
            "text": "这样一来，客户的体验就会完全不同。"
        },
        {
            "start": 246.94,
            "end": 247.88,
            "text": "同样是延迟。"
        },
        {
            "start": 247.88,
            "end": 251.62,
            "text": "如果客户是在焦虑中自己来追问，感受会很差。"
        },
        {
            "start": 251.62,
            "end": 255.16,
            "text": "如果系统提前说明并安抚，感受就会好很多。"
        },
        {
            "start": 255.16,
            "end": 257.42,
            "text": "这就是预测性客服的真正价值。"
        },
        {
            "start": 257.42,
            "end": 261.6,
            "text": "它改变的，不只是效率，而是客户对整个平台的心理体验。"
        },
        {
            "start": 261.6,
            "end": 263.52,
            "text": "所以从亚马逊这个案例里，"
        },
        {
            "start": 263.52,
            "end": 266.4,
            "text": "我们至少可以提炼出三个特别重要的经营判断。"
        },
        {
            "start": 266.4,
            "end": 269.36,
            "text": "第一，系统打通比单点优化更重要。"
        },
        {
            "start": 269.36,
            "end": 272.26,
            "text": "很多企业做 AI 优化，喜欢一段一段做。"
        },
        {
            "start": 272.26,
            "end": 273.54,
            "text": "客服上一套系统。"
        },
        {
            "start": 273.54,
            "end": 274.94,
            "text": "仓库上一套系统。"
        },
        {
            "start": 274.94,
            "end": 276.72,
            "text": "营销再上一套系统。"
        },
        {
            "start": 276.72,
            "end": 278.64,
            "text": "但这些系统彼此之间不通。"
        },
        {
            "start": 278.64,
            "end": 282.12,
            "text": "这样即使每一段都变强了，也很难形成整体飞轮。"
        },
        {
            "start": 282.12,
            "end": 284.36,
            "text": "第二，飞轮效应需要时间积累。"
        },
        {
            "start": 284.36,
            "end": 286.26,
            "text": "亚马逊不是靠一招致胜。"
        },
        {
            "start": 286.26,
            "end": 288.52,
            "text": "它是靠长期数据、算法、"
        },
        {
            "start": 288.52,
            "end": 290.82,
            "text": "流程和基础设施一点点叠加，"
        },
        {
            "start": 290.82,
            "end": 292.72,
            "text": "最后才让飞轮越来越快。"
        },
        {
            "start": 292.72,
            "end": 295.54,
            "text": "这意味着，飞轮不是一个“做一下就有”的项目。"
        },
        {
            "start": 295.54,
            "end": 298.64,
            "text": "它更像是企业长期积累出来的系统能力。"
        },
        {
            "start": 298.64,
            "end": 301.94,
            "text": "第三，运营效率最终必须回到客户体验。"
        },
        {
            "start": 301.94,
            "end": 305.58,
            "text": "亚马逊所有运营动作，最后都在服务同一件事。"
        },
        {
            "start": 305.58,
            "end": 308.18,
            "text": "让客户体验更快、更准、更丰富、更省心。"
        },
        {
            "start": 308.58,
            "end": 311.5,
            "text": "如果运营优化最后只是让内部报表更好看，"
        },
        {
            "start": 311.5,
            "end": 313.7,
            "text": "而没有让客户感受到更好的体验，"
        },
        {
            "start": 313.7,
            "end": 315.6,
            "text": "那飞轮其实是转不起来的。"
        },
        {
            "start": 315.6,
            "end": 316.84,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 316.84,
            "end": 319.16,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 319.16,
            "end": 320.56,
            "text": "第一，亚马逊最强的，"
        },
        {
            "start": 320.56,
            "end": 322.28,
            "text": "不是某一个环节做得极致，"
        },
        {
            "start": 322.28,
            "end": 324.48,
            "text": "而是它把客户体验、供给、"
        },
        {
            "start": 324.48,
            "end": 327.5,
            "text": "价格和效率做成了一个会自我增强的飞轮。"
        },
        {
            "start": 327.9,
            "end": 330.6,
            "text": "第二，AI 在亚马逊里不是单点提效工具，"
        },
        {
            "start": 330.6,
            "end": 333.4,
            "text": "而是持续推动推荐、库存、物流、定价、"
        },
        {
            "start": 333.4,
            "end": 336.12,
            "text": "卖家管理和客服协同优化的系统引擎。"
        },
        {
            "start": 336.71999999999997,
            "end": 338.44,
            "text": "第三，真正值得学的，"
        },
        {
            "start": 338.44,
            "end": 339.84,
            "text": "不是模仿某一个动作，"
        },
        {
            "start": 339.84,
            "end": 342.58,
            "text": "而是学习怎样把数据和系统打通，"
        },
        {
            "start": 342.58,
            "end": 345.4,
            "text": "让运营效率最终回到客户体验上。"
        },
        {
            "start": 345.4,
            "end": 348.86,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 348.86,
            "end": 352.24,
            "text": "想一想，你自己的业务里有没有某种“飞轮”雏形。"
        },
        {
            "start": 352.24,
            "end": 356.96,
            "text": "哪些环节如果真正打通，就会互相放大，而不是各做各的。"
        },
        {
            "start": 356.96,
            "end": 358.58,
            "text": "如果你把这个问题想清楚，"
        },
        {
            "start": 358.58,
            "end": 361.24,
            "text": "很多原本看上去零散的运营动作，"
        },
        {
            "start": 361.24,
            "end": 363.14,
            "text": "就会开始连成一套系统。"
        },
        {
            "start": 363.14,
            "end": 363.92,
            "text": "我是 Lincoln。"
        },
        {
            "start": 363.92,
            "end": 366.14,
            "text": "我们下一节，继续看另一个案例，"
        },
        {
            "start": 366.14,
            "end": 368.38,
            "text": "看看快时尚企业是怎样把速度、"
        },
        {
            "start": 368.38,
            "end": 370.12,
            "text": "供应链和数据组织到一起的。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 15.9,
        "index": 0
    },
    {
        "start": 15.9,
        "end": 56.7,
        "index": 1
    },
    {
        "start": 56.7,
        "end": 111.66,
        "index": 2
    },
    {
        "start": 111.66,
        "end": 172.28,
        "index": 3
    },
    {
        "start": 172.28,
        "end": 222.12,
        "index": 4
    },
    {
        "start": 222.12,
        "end": 261.6,
        "index": 5
    },
    {
        "start": 261.6,
        "end": 315.6,
        "index": 6
    },
    {
        "start": 315.6,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-09.html?entry={entry}", secondaryHref: "./lesson-operations-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-08", coachSource: "./ai-coach.html?source=lesson-operations-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：亚马逊的 AI 运营飞轮的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：亚马逊的 AI 运营飞轮", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
