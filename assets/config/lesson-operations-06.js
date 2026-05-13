(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第6课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第6课：数据化运营：用 AI 驱动每一个运营决策",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep67-data-driven-ops/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：数据化运营：用 AI 驱动每一个运营决策", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-07.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-operations-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "数据化运营不是做总结，而是做实时判断",
                "body": "当数据能实时进入看板、预警和归因，运营决策才会真正从事后复盘走向当下调整。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "指标树决定了团队能不能把抽象目标拆成具体动作",
                "body": "北极星指标统一方向，驱动指标解释结果，过程指标指导动作，三层缺一不可。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "技术可以把门槛降下来，但文化决定数据能不能真正被使用",
                "body": "如果组织仍然习惯用感觉拍板，哪怕工具再先进，数据也只能停留在报表层。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 6/12", "建议下一节：敏捷项目管理：在变化中持续交付", '也可以先整理这一节'], nextHref: "./lesson-operations-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-06", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson6", audioSource: './assets/audio/operations-ep67-data-driven-ops.mp3?v=20260413-operations-06a', vttSrc: './assets/subtitles/operations-ep67-data-driven-ops.vtt?v=20260413-operations-06a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep67-data-driven-ops/slide_01.png",
            "label": "数据化运营：用 AI 驱动每一个运营决策",
            "caption": "这一节会帮助你系统理解：数据化运营：用 AI 驱动每一个运营决策"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_02.png",
            "label": "什么才叫真正的数据化运营",
            "caption": "数据化运营真正要解决的，不是看更多报表，而是让数据真正进入日常决策。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_03.png",
            "label": "运营指标体系",
            "caption": "没有指标树，数据就很容易变成一堆彼此无关的数字。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_04.png",
            "label": "实时监控与归因",
            "caption": "看板只是第一层，真正拉开差距的是预警和归因。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_05.png",
            "label": "用数据做实验",
            "caption": "真正的数据化运营，不靠“我觉得”，而靠实验把判断做实。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_06.png",
            "label": "预测与优化",
            "caption": "预测能力一旦建立，运营节奏就会从“出了事再救”转向“提前做准备”。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_07.png",
            "label": "数据驱动文化",
            "caption": "数据化运营最大的障碍，常常不是系统，而是组织是否真的愿意让数据发声。"
        },
        {
            "file": "operations-ep67-data-driven-ops/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.98,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 0.98,
            "end": 2.94,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.94,
            "end": 5.36,
            "text": "今天这一节，我们来聊数据化运营。"
        },
        {
            "start": 5.36,
            "end": 8.18,
            "text": "很多企业嘴上都说自己在做数据驱动。"
        },
        {
            "start": 8.18,
            "end": 10.28,
            "text": "但真正到了做决策的时候，"
        },
        {
            "start": 10.28,
            "end": 12.92,
            "text": "很多判断还是凭经验、凭感觉、"
        },
        {
            "start": 12.92,
            "end": 14.0,
            "text": "凭谁声音更大。"
        },
        {
            "start": 14.0,
            "end": 16.5,
            "text": "所以数据化运营最容易出现的误区，"
        },
        {
            "start": 16.5,
            "end": 18.14,
            "text": "就是以为报表多了，"
        },
        {
            "start": 18.14,
            "end": 19.62,
            "text": "就等于已经数据化了。"
        },
        {
            "start": 19.62,
            "end": 20.46,
            "text": "其实不是。"
        },
        {
            "start": 20.46,
            "end": 23.54,
            "text": "真正的数据化运营，至少要做到三件事。"
        },
        {
            "start": 23.54,
            "end": 25.84,
            "text": "第一，你能及时看到运营状态。"
        },
        {
            "start": 25.84,
            "end": 28.72,
            "text": "第二，你能从数据里发现问题和机会。"
        },
        {
            "start": 28.72,
            "end": 32.52,
            "text": "第三，你能基于这些数据，做出更稳的运营决策。"
        },
        {
            "start": 32.52,
            "end": 35.44,
            "text": "也就是说，数据不是用来会后总结的。"
        },
        {
            "start": 35.44,
            "end": 37.64,
            "text": "而是要进入你每天的运营判断里。"
        },
        {
            "start": 37.64,
            "end": 39.56,
            "text": "AI 的价值，就在这里。"
        },
        {
            "start": 39.56,
            "end": 42.54,
            "text": "它让看见、发现和判断这三件事，"
        },
        {
            "start": 42.54,
            "end": 44.72,
            "text": "第一次可以更快、更连续地发生。"
        },
        {
            "start": 44.72,
            "end": 47.64,
            "text": "先讲第一层基础，运营指标体系。"
        },
        {
            "start": 48.02,
            "end": 49.18,
            "text": "没有好的指标体系，"
        },
        {
            "start": 49.18,
            "end": 52.12,
            "text": "所谓数据化运营就很容易变成一堆数字堆在那里，"
        },
        {
            "start": 52.12,
            "end": 53.64,
            "text": "却没人知道该盯什么。"
        },
        {
            "start": 53.64,
            "end": 55.68,
            "text": "一个成熟的指标体系，至少有三层。"
        },
        {
            "start": 55.68,
            "end": 57.08,
            "text": "第一层，是北极星指标。"
        },
        {
            "start": 57.46,
            "end": 59.22,
            "text": "也就是整个业务最核心、"
        },
        {
            "start": 59.22,
            "end": 61.82,
            "text": "最能代表客户价值和经营结果的那个指标。"
        },
        {
            "start": 61.82,
            "end": 63.1,
            "text": "它像一个总方向。"
        },
        {
            "start": 63.1,
            "end": 65.6,
            "text": "告诉团队，最终应该把力用到哪里。"
        },
        {
            "start": 65.6,
            "end": 69.46,
            "text": "但北极星指标通常太高层，不能直接拿来指导每天动作。"
        },
        {
            "start": 69.46,
            "end": 71.52,
            "text": "所以第二层，是驱动指标。"
        },
        {
            "start": 71.52,
            "end": 73.44,
            "text": "也就是把那个总目标拆开，"
        },
        {
            "start": 73.44,
            "end": 76.4,
            "text": "拆成几个真正能推动结果变化的关键因素。"
        },
        {
            "start": 76.4,
            "end": 78.78,
            "text": "再往下，第三层，是过程指标。"
        },
        {
            "start": 78.78,
            "end": 83.16,
            "text": "也就是团队每天能看、能管、能直接采取动作的那些指标。"
        },
        {
            "start": 83.16,
            "end": 86.18,
            "text": "这样一来，北极星指标负责统一方向，"
        },
        {
            "start": 86.18,
            "end": 88.12,
            "text": "驱动指标负责解释结果，"
        },
        {
            "start": 88.12,
            "end": 89.86,
            "text": "过程指标负责指导动作。"
        },
        {
            "start": 89.86,
            "end": 92.4,
            "text": "你会发现，这其实是在搭一棵指标树。"
        },
        {
            "start": 92.4,
            "end": 93.58000000000001,
            "text": "有了这棵树，"
        },
        {
            "start": 93.58000000000001,
            "end": 96.04,
            "text": "你才知道某一个小指标出问题的时候，"
        },
        {
            "start": 96.04,
            "end": 98.68,
            "text": "最后会影响到哪一个更大的经营目标。"
        },
        {
            "start": 98.68,
            "end": 102.72,
            "text": "没有指标树，数据就很容易变成很多彼此无关的数字。"
        },
        {
            "start": 102.72,
            "end": 105.2,
            "text": "大家都在看数，但没有人真的知道，"
        },
        {
            "start": 105.2,
            "end": 106.34,
            "text": "哪个数字最重要，"
        },
        {
            "start": 106.34,
            "end": 108.3,
            "text": "哪个波动最值得现在处理。"
        },
        {
            "start": 108.3,
            "end": 111.5,
            "text": "好，讲完指标体系，下一步就是实时监控。"
        },
        {
            "start": 111.5,
            "end": 115.16,
            "text": "传统运营里最常见的情况是，过几天做一次报表。"
        },
        {
            "start": 115.16,
            "end": 116.36,
            "text": "过一周开一次会。"
        },
        {
            "start": 116.36,
            "end": 117.9,
            "text": "过一个月做一次复盘。"
        },
        {
            "start": 117.9,
            "end": 120.26,
            "text": "问题是，等你看到这份报告的时候，"
        },
        {
            "start": 120.26,
            "end": 123.02,
            "text": "很多机会和损失其实已经发生完了。"
        },
        {
            "start": 123.02,
            "end": 126.26,
            "text": "所以真正的数据化运营，不只是把数据展示出来。"
        },
        {
            "start": 126.26,
            "end": 128.88,
            "text": "而是要让系统持续盯着这些关键指标，"
        },
        {
            "start": 128.88,
            "end": 131.3,
            "text": "看它们是不是正在偏离正常区间。"
        },
        {
            "start": 131.3,
            "end": 133.9,
            "text": "我建议你把实时监控理解成三层。"
        },
        {
            "start": 133.9,
            "end": 135.54,
            "text": "第一层，是看板。"
        },
        {
            "start": 135.54,
            "end": 137.34,
            "text": "也就是关键数据随时可见。"
        },
        {
            "start": 137.34,
            "end": 138.86,
            "text": "第二层，是预警。"
        },
        {
            "start": 138.86,
            "end": 140.6,
            "text": "不是等人自己发现异常，"
        },
        {
            "start": 140.6,
            "end": 142.7,
            "text": "而是系统先主动告诉你，"
        },
        {
            "start": 142.7,
            "end": 144.4,
            "text": "哪个指标开始不对了。"
        },
        {
            "start": 144.4,
            "end": 146.26,
            "text": "第三层，是归因。"
        },
        {
            "start": 146.26,
            "end": 148.74,
            "text": "也就是系统不只告诉你出事了，"
        },
        {
            "start": 148.74,
            "end": 151.68,
            "text": "还能进一步帮你分析，到底是哪个区域、"
        },
        {
            "start": 151.68,
            "end": 152.38,
            "text": "哪个渠道、"
        },
        {
            "start": 152.38,
            "end": 154.64,
            "text": "哪个产品或者哪个环节出了问题。"
        },
        {
            "start": 154.64,
            "end": 157.2,
            "text": "真正拉开差距的，不是有没有看板。"
        },
        {
            "start": 157.2,
            "end": 158.82,
            "text": "而是当指标异动时，"
        },
        {
            "start": 158.82,
            "end": 161.76,
            "text": "你是不是能第一时间知道原因大概在哪里。"
        },
        {
            "start": 161.76,
            "end": 163.68,
            "text": "如果每次都是看见掉了，"
        },
        {
            "start": 163.68,
            "end": 165.04,
            "text": "再临时开会去猜，"
        },
        {
            "start": 165.04,
            "end": 167.02,
            "text": "那运营节奏还是会很被动。"
        },
        {
            "start": 167.02,
            "end": 167.9,
            "text": "举个例子。"
        },
        {
            "start": 167.9,
            "end": 170.9,
            "text": "如果一家电商公司某一天订单量突然下滑，"
        },
        {
            "start": 170.9,
            "end": 172.86,
            "text": "系统不应该只告诉你，"
        },
        {
            "start": 172.86,
            "end": 174.36,
            "text": "今天少了百分之十几。"
        },
        {
            "start": 174.36,
            "end": 177.22,
            "text": "更好的状态是，它能继续往下告诉你，"
        },
        {
            "start": 177.22,
            "end": 179.94,
            "text": "是哪个区域掉了，是因为配送时效变慢，"
        },
        {
            "start": 179.94,
            "end": 182.06,
            "text": "还是某个渠道流量突然下降。"
        },
        {
            "start": 182.06,
            "end": 186.32,
            "text": "这样一来，运营动作才会从被动反应，变成快速修正。"
        },
        {
            "start": 186.32,
            "end": 190.04,
            "text": "数据化运营的第三个核心能力，是用数据做实验。"
        },
        {
            "start": 190.04,
            "end": 192.46,
            "text": "很多运营动作看起来都很有道理。"
        },
        {
            "start": 192.46,
            "end": 193.86,
            "text": "页面是不是该改。"
        },
        {
            "start": 193.86,
            "end": 195.4,
            "text": "活动是不是该这么做。"
        },
        {
            "start": 195.4,
            "end": 196.84,
            "text": "话术是不是该那样写。"
        },
        {
            "start": 196.84,
            "end": 200.62,
            "text": "但如果不测，很多时候你只是把自己的判断当成事实。"
        },
        {
            "start": 200.62,
            "end": 201.56,
            "text": "更稳的做法，"
        },
        {
            "start": 201.56,
            "end": 204.46000000000004,
            "text": "是把不同方案同时放进真实业务场景里，"
        },
        {
            "start": 204.46000000000004,
            "end": 206.72,
            "text": "让数据告诉你到底哪个更有效。"
        },
        {
            "start": 206.72,
            "end": 208.18,
            "text": "这才是实验思维。"
        },
        {
            "start": 208.18,
            "end": 211.1,
            "text": "过去做实验，往往只能测试很少几个版本。"
        },
        {
            "start": 211.1,
            "end": 213.5,
            "text": "现在有了 AI，实验可以做得更细。"
        },
        {
            "start": 213.5,
            "end": 215.76,
            "text": "它可以一次生成更多候选方案。"
        },
        {
            "start": 215.76,
            "end": 219.36,
            "text": "也可以更快地识别，不同用户群体对不同方案的反应。"
        },
        {
            "start": 219.36,
            "end": 223.4,
            "text": "甚至能更早判断，哪些方案已经明显不行，应该尽快停掉。"
        },
        {
            "start": 223.86,
            "end": 227.22,
            "text": "所以数据化运营真正厉害的地方，不是有更多创意。"
        },
        {
            "start": 227.22,
            "end": 231.2,
            "text": "而是你终于有能力把创意快速放进真实环境里验证。"
        },
        {
            "start": 231.2,
            "end": 234.1,
            "text": "这样团队就会慢慢从“我觉得这样更好”，"
        },
        {
            "start": 234.1,
            "end": 236.42,
            "text": "变成“数据已经证明这样更好”。"
        },
        {
            "start": 236.42,
            "end": 238.3,
            "text": "再往下一层，就是预测和优化。"
        },
        {
            "start": 238.3,
            "end": 241.58,
            "text": "也就是数据化运营不能只盯着过去发生了什么。"
        },
        {
            "start": 241.95999999999998,
            "end": 244.5,
            "text": "还要提前判断，未来可能会发生什么。"
        },
        {
            "start": 244.5,
            "end": 246.14,
            "text": "比如订单量会不会增长。"
        },
        {
            "start": 246.14,
            "end": 247.74,
            "text": "客户有没有流失风险。"
        },
        {
            "start": 247.74,
            "end": 250.36,
            "text": "客服和物流资源是不是快不够了。"
        },
        {
            "start": 250.36,
            "end": 253.04,
            "text": "某个指标是不是三天后就会跌破警戒线。"
        },
        {
            "start": 253.04,
            "end": 257.54,
            "text": "一旦这种预测能力建立起来，运营节奏就会完全不一样。"
        },
        {
            "start": 257.54,
            "end": 260.14,
            "text": "你不再只是等问题冒出来以后再救火。"
        },
        {
            "start": 260.14,
            "end": 262.34,
            "text": "而是可以提前备货、提前排班、"
        },
        {
            "start": 262.56,
            "end": 265.48,
            "text": "提前做客户挽回、提前准备替代方案。"
        },
        {
            "start": 265.48,
            "end": 267.8,
            "text": "所以预测的意义，不是多了一个模型。"
        },
        {
            "start": 267.8,
            "end": 270.84,
            "text": "而是让整个运营系统开始变得更有前瞻性。"
        },
        {
            "start": 270.84,
            "end": 273.98,
            "text": "但讲到这里，我反而想提醒你一个最重要的现实。"
        },
        {
            "start": 273.98,
            "end": 277.94,
            "text": "数据化运营最大的障碍，常常不是技术，而是文化。"
        },
        {
            "start": 277.94,
            "end": 280.78,
            "text": "很多企业不是没有数据，也不是没有工具。"
        },
        {
            "start": 280.78,
            "end": 283.92,
            "text": "而是组织根本没有形成用数据说话的习惯。"
        },
        {
            "start": 283.92,
            "end": 285.4,
            "text": "怎么建立这种文化。"
        },
        {
            "start": 285.4,
            "end": 287.56,
            "text": "第一，领导层要先带头。"
        },
        {
            "start": 287.56,
            "end": 289.92,
            "text": "开会的时候，不能只停留在“我觉得”。"
        },
        {
            "start": 289.92,
            "end": 293.14,
            "text": "而要追问，数据怎么看，证据在哪里。"
        },
        {
            "start": 293.14,
            "end": 294.98,
            "text": "第二，要降低数据使用门槛。"
        },
        {
            "start": 294.98,
            "end": 297.0,
            "text": "不是每个人都要会写代码。"
        },
        {
            "start": 297.0,
            "end": 300.76,
            "text": "但团队应该能方便地拿到数据、问出问题、得到答案。"
        },
        {
            "start": 300.76,
            "end": 303.72,
            "text": "第三，要奖励那些用数据发现问题、"
        },
        {
            "start": 303.72,
            "end": 306.02,
            "text": "验证假设、推动优化的人。"
        },
        {
            "start": 306.02,
            "end": 308.52,
            "text": "让大家知道，数据化不是额外负担，"
        },
        {
            "start": 308.52,
            "end": 310.46,
            "text": "而是更高质量工作的方式。"
        },
        {
            "start": 310.46,
            "end": 312.24,
            "text": "第四，也最难的一点，"
        },
        {
            "start": 312.24,
            "end": 315.38,
            "text": "是组织要能接受数据揭示出来的真相。"
        },
        {
            "start": 315.38,
            "end": 317.32,
            "text": "有时候数据会告诉你，"
        },
        {
            "start": 317.32,
            "end": 319.82,
            "text": "一个投入很大的项目，其实效果很一般。"
        },
        {
            "start": 319.82,
            "end": 321.78,
            "text": "如果组织不能接受这种真相，"
        },
        {
            "start": 321.78,
            "end": 324.24,
            "text": "大家最后还是会回到凭感觉拍板。"
        },
        {
            "start": 324.24,
            "end": 325.78,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 325.78,
            "end": 327.66,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 327.66,
            "end": 330.22,
            "text": "第一，数据化运营不是报表更多，"
        },
        {
            "start": 330.22,
            "end": 332.42,
            "text": "而是让看见、预警、归因、"
        },
        {
            "start": 332.42,
            "end": 334.96,
            "text": "实验和预测真正进入日常运营决策。"
        },
        {
            "start": 334.96,
            "end": 337.24,
            "text": "第二，一个成熟的指标体系，"
        },
        {
            "start": 337.24,
            "end": 341.36,
            "text": "必须从北极星指标一路拆到驱动指标和过程指标，"
        },
        {
            "start": 341.36,
            "end": 344.24,
            "text": "否则团队很难知道自己每天该盯什么。"
        },
        {
            "start": 344.24,
            "end": 344.9,
            "text": "第三，"
        },
        {
            "start": 345.26,
            "end": 348.25999999999993,
            "text": "AI 可以放大数据化运营的速度和精度，"
        },
        {
            "start": 348.26,
            "end": 350.14,
            "text": "但组织能不能真正用数据说话，"
        },
        {
            "start": 350.14,
            "end": 351.24,
            "text": "最终还是文化问题。"
        },
        {
            "start": 351.24,
            "end": 354.38,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 354.38,
            "end": 357.6,
            "text": "把你企业当前最重要的一个经营目标写下来。"
        },
        {
            "start": 357.6,
            "end": 358.4,
            "text": "然后往下拆，"
        },
        {
            "start": 358.64,
            "end": 362.68,
            "text": "拆出它最关键的驱动指标和几个真正可行动的过程指标。"
        },
        {
            "start": 362.68,
            "end": 365.78,
            "text": "再问自己，现在这些指标是实时可见的，"
        },
        {
            "start": 365.78,
            "end": 368.04,
            "text": "还是只能靠周报和月报才知道。"
        },
        {
            "start": 368.04,
            "end": 370.82,
            "text": "当你这样拆一次，你会很容易看清楚，"
        },
        {
            "start": 370.82,
            "end": 373.82,
            "text": "自己的数据化运营到底是停留在口号上，"
        },
        {
            "start": 373.82,
            "end": 375.74,
            "text": "还是已经真正开始落地。"
        },
        {
            "start": 375.74,
            "end": 376.52,
            "text": "我是 Lincoln。"
        },
        {
            "start": 376.52,
            "end": 379.1,
            "text": "我们下一节，继续聊敏捷项目管理，"
        },
        {
            "start": 379.1,
            "end": 381.14,
            "text": "看看在变化越来越快的时代，"
        },
        {
            "start": 381.14,
            "end": 382.94,
            "text": "团队怎么才能持续交付。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 19.62,
        "index": 0
    },
    {
        "start": 19.62,
        "end": 44.72,
        "index": 1
    },
    {
        "start": 44.72,
        "end": 108.3,
        "index": 2
    },
    {
        "start": 108.3,
        "end": 186.32,
        "index": 3
    },
    {
        "start": 186.32,
        "end": 236.42,
        "index": 4
    },
    {
        "start": 236.42,
        "end": 270.84,
        "index": 5
    },
    {
        "start": 270.84,
        "end": 324.24,
        "index": 6
    },
    {
        "start": 324.24,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-07.html?entry={entry}", secondaryHref: "./lesson-operations-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-06", coachSource: "./ai-coach.html?source=lesson-operations-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于数据化运营：用 AI 驱动每一个运营决策的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "数据化运营：用 AI 驱动每一个运营决策", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
