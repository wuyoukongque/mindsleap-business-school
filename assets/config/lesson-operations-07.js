(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第7课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第7课：敏捷项目管理：在变化中持续交付",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep68-agile-pm/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：敏捷项目管理：在变化中持续交付", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-08.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-operations-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "项目管理的核心问题是如何在不确定中持续交付",
                "body": "真正成熟的项目管理，不是计划写得多漂亮，而是变化来了以后，团队还能继续稳步推进成果。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "敏捷的价值不在于更快，而在于更早暴露问题并及时修正",
                "body": "短周期、快速反馈和持续复盘，目的是让团队更快接近正确结果，而不是让大家更忙。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 时代的项目管理要从管过程转向管成果",
                "body": "当执行越来越容易被自动化，项目管理更重要的，是确保每一轮迭代都在产生真实价值。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 7/12", "建议下一节：案例：亚马逊的 AI 运营飞轮", '也可以先整理这一节'], nextHref: "./lesson-operations-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-07", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson7", audioSource: './assets/audio/operations-ep68-agile-pm.mp3?v=20260413-operations-07a', vttSrc: './assets/subtitles/operations-ep68-agile-pm.vtt?v=20260413-operations-07a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep68-agile-pm/slide_01.png",
            "label": "敏捷项目管理：在变化中持续交付",
            "caption": "这一节会帮助你系统理解：敏捷项目管理：在变化中持续交付"
        },
        {
            "file": "operations-ep68-agile-pm/slide_02.png",
            "label": "为什么传统项目管理容易失效",
            "caption": "项目管理真正难的，不是排计划，而是在变化中持续把成果交出来。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_03.png",
            "label": "瀑布式与敏捷",
            "caption": "不是哪种方法更先进，而是哪种方法更适合你的项目不确定性。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_04.png",
            "label": "角色与节奏",
            "caption": "敏捷的核心不是多几个会议，而是建立一个能持续暴露问题和修正方向的节奏系统。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_05.png",
            "label": "AI 如何增强项目管理",
            "caption": "AI 不是替代项目管理，而是把项目管理从重复协调里解放出来。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_06.png",
            "label": "从管过程到管成果",
            "caption": "AI 时代项目管理的关键转向，是从“过程有没有按计划走”变成“结果有没有持续产出价值”。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_07.png",
            "label": "常见误区",
            "caption": "真正的误区，不是选错方法，而是只学了形式，没有学到底层判断。"
        },
        {
            "file": "operations-ep68-agile-pm/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 0.96,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 0.96,
            "end": 2.82,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.82,
            "end": 5.2,
            "text": "今天这一节，我们来聊敏捷项目管理。"
        },
        {
            "start": 5.5600000000000005,
            "end": 8.02,
            "text": "不管你是在做产品开发、市场活动、"
        },
        {
            "start": 8.02,
            "end": 8.9,
            "text": "内部系统建设，"
        },
        {
            "start": 8.9,
            "end": 11.18,
            "text": "还是在推进企业里的 AI 项目，"
        },
        {
            "start": 11.18,
            "end": 13.56,
            "text": "只要你要协调多人、多任务、"
        },
        {
            "start": 13.56,
            "end": 16.3,
            "text": "多时间节点，其实就在做项目管理。"
        },
        {
            "start": 16.3,
            "end": 19.92,
            "text": "很多人以为项目管理最核心的事情，是把计划排清楚。"
        },
        {
            "start": 19.92,
            "end": 21.86,
            "text": "但现实往往不是这么简单。"
        },
        {
            "start": 21.86,
            "end": 23.88,
            "text": "项目一开始看上去都很清楚。"
        },
        {
            "start": 23.88,
            "end": 26.48,
            "text": "真正难的是，项目推进到中间，"
        },
        {
            "start": 26.48,
            "end": 29.02,
            "text": "需求变了，资源变了，优先级变了，"
        },
        {
            "start": 29.02,
            "end": 30.68,
            "text": "甚至外部环境都变了。"
        },
        {
            "start": 30.68,
            "end": 34.22,
            "text": "这时候还能不能继续稳定交付，才是项目管理的分水岭。"
        },
        {
            "start": 34.22,
            "end": 36.62,
            "text": "所以这一节，我们先不急着讲工具。"
        },
        {
            "start": 36.62,
            "end": 38.38,
            "text": "先把一个底层问题讲清楚。"
        },
        {
            "start": 38.38,
            "end": 42.3,
            "text": "为什么很多传统项目管理方法，到了今天越来越容易失效。"
        },
        {
            "start": 42.3,
            "end": 44.86,
            "text": "原因并不是那些方法本身错了。"
        },
        {
            "start": 44.86,
            "end": 46.28,
            "text": "而是它们默认的前提，"
        },
        {
            "start": 46.28,
            "end": 48.54,
            "text": "和今天越来越多项目的现实之间，"
        },
        {
            "start": 48.54,
            "end": 49.88,
            "text": "已经开始不匹配。"
        },
        {
            "start": 49.88,
            "end": 52.58,
            "text": "先讲第一种经典方法，瀑布式项目管理。"
        },
        {
            "start": 52.58,
            "end": 53.84,
            "text": "它的逻辑很清楚。"
        },
        {
            "start": 53.84,
            "end": 57.48,
            "text": "先做需求分析，再做方案设计，再开发、"
        },
        {
            "start": 57.48,
            "end": 59.44,
            "text": "测试，最后上线或交付。"
        },
        {
            "start": 59.44,
            "end": 62.6,
            "text": "每一步按顺序往下走，前一个阶段结束，"
        },
        {
            "start": 62.6,
            "end": 64.04,
            "text": "再进入下一个阶段。"
        },
        {
            "start": 64.04,
            "end": 67.34,
            "text": "这种方法的优点，是清晰、可控、可预测。"
        },
        {
            "start": 67.34,
            "end": 70.2,
            "text": "如果需求很稳定，边界也很清楚，"
        },
        {
            "start": 70.2,
            "end": 72.64,
            "text": "瀑布式其实是一种很有效的方法。"
        },
        {
            "start": 72.64,
            "end": 74.68,
            "text": "但它有一个非常关键的前提。"
        },
        {
            "start": 74.68,
            "end": 76.1,
            "text": "就是你要默认，"
        },
        {
            "start": 76.1,
            "end": 78.58,
            "text": "需求在一开始就已经足够明确，"
        },
        {
            "start": 78.58,
            "end": 80.64,
            "text": "而且后面不会发生太大变化。"
        },
        {
            "start": 80.64,
            "end": 83.24,
            "text": "可现实中的很多项目，根本不是这样。"
        },
        {
            "start": 83.24,
            "end": 84.74,
            "text": "客户会改想法。"
        },
        {
            "start": 84.82,
            "end": 85.62,
            "text": "市场会变。"
        },
        {
            "start": 85.62,
            "end": 87.44,
            "text": "技术会带来新的可能性。"
        },
        {
            "start": 87.44,
            "end": 89.48,
            "text": "团队在推进过程中也会发现，"
        },
        {
            "start": 89.48,
            "end": 92.12,
            "text": "原来设想的方案并不是最优的。"
        },
        {
            "start": 92.12,
            "end": 95.08,
            "text": "一旦这些变化出现，瀑布式的代价就会很高。"
        },
        {
            "start": 95.08,
            "end": 98.78,
            "text": "因为你前面很多步骤，都是围绕旧假设做出来的。"
        },
        {
            "start": 98.78,
            "end": 102.22,
            "text": "这就是为什么，后来越来越多团队开始转向敏捷。"
        },
        {
            "start": 102.22,
            "end": 104.18,
            "text": "敏捷真正重要的，不是它快。"
        },
        {
            "start": 104.18,
            "end": 105.82,
            "text": "而是它默认了一件事。"
        },
        {
            "start": 105.82,
            "end": 109.6,
            "text": "变化会发生，所以项目管理本来就应该允许持续调整。"
        },
        {
            "start": 109.6,
            "end": 111.77,
            "text": "如果用一句最简单的话概括，"
        },
        {
            "start": 111.77,
            "end": 114.06,
            "text": "敏捷就是小步快跑，快速反馈，"
        },
        {
            "start": 114.4,
            "end": 115.10666666666665,
            "text": "持续迭代。"
        },
        {
            "start": 115.10666666666665,
            "end": 117.92,
            "text": "它不要求你一开始就把所有细节都规划完。"
        },
        {
            "start": 117.92,
            "end": 120.38,
            "text": "而是把项目拆成一个个更短的周期。"
        },
        {
            "start": 120.38,
            "end": 123.94,
            "text": "每一个周期结束，都尽量交付一个真实可用的成果。"
        },
        {
            "start": 123.94,
            "end": 126.88,
            "text": "然后根据反馈，再决定下一轮怎么做。"
        },
        {
            "start": 126.88,
            "end": 129.58,
            "text": "这意味着，项目管理的重心开始变化了。"
        },
        {
            "start": 129.58,
            "end": 132.04,
            "text": "你不再只是问，计划有没有按原样执行。"
        },
        {
            "start": 132.04,
            "end": 135.18,
            "text": "你开始更关注，这一轮到底交付了什么价值。"
        },
        {
            "start": 135.18,
            "end": 138.08,
            "text": "它有没有帮助团队更接近真正的目标。"
        },
        {
            "start": 138.08,
            "end": 140.24,
            "text": "有没有让问题更早暴露出来。"
        },
        {
            "start": 140.24,
            "end": 143.78,
            "text": "敏捷里常见的一套实践，是角色清晰、节奏稳定。"
        },
        {
            "start": 143.78,
            "end": 145.24,
            "text": "谁来决定优先级。"
        },
        {
            "start": 145.24,
            "end": 146.9,
            "text": "谁来帮团队清除障碍。"
        },
        {
            "start": 146.9,
            "end": 148.74,
            "text": "谁来真正把事情做出来。"
        },
        {
            "start": 148.74,
            "end": 150.52,
            "text": "这些角色如果边界不清，"
        },
        {
            "start": 150.52,
            "end": 153.6,
            "text": "项目就很容易在推进过程中不断互相等待。"
        },
        {
            "start": 153.6,
            "end": 156.26,
            "text": "除此以外，还要有一个固定的协作节奏。"
        },
        {
            "start": 156.26,
            "end": 157.54,
            "text": "短周期规划。"
        },
        {
            "start": 157.54,
            "end": 158.28,
            "text": "日常同步。"
        },
        {
            "start": 158.28,
            "end": 159.32,
            "text": "阶段展示。"
        },
        {
            "start": 159.56,
            "end": 160.24,
            "text": "以及阶段复盘。"
        },
        {
            "start": 160.24,
            "end": 161.84,
            "text": "这里要特别提醒一句。"
        },
        {
            "start": 161.84,
            "end": 164.22,
            "text": "敏捷的价值，不是多了几个会议。"
        },
        {
            "start": 164.22,
            "end": 165.88,
            "text": "而是通过这些固定节奏，"
        },
        {
            "start": 165.88,
            "end": 168.72,
            "text": "让问题更早暴露，让方向更早修正。"
        },
        {
            "start": 169.16000000000003,
            "end": 172.08,
            "text": "如果团队只是把这些动作机械执行，"
        },
        {
            "start": 172.08,
            "end": 174.04,
            "text": "却没有真正拿来发现问题，"
        },
        {
            "start": 174.04,
            "end": 175.96,
            "text": "那最后就会变成形式上的敏捷，"
        },
        {
            "start": 175.96,
            "end": 176.88,
            "text": "实际上的低效。"
        },
        {
            "start": 177.22,
            "end": 180.24,
            "text": "好，讲完方法，再来看 AI 到底怎么增强项目管理。"
        },
        {
            "start": 180.24,
            "end": 181.74,
            "text": "过去很多项目经理，"
        },
        {
            "start": 181.74,
            "end": 184.1,
            "text": "花了大量时间在追状态、做排期、"
        },
        {
            "start": 184.32,
            "end": 186.72,
            "text": "催进度、整理会议纪要和更新表格上。"
        },
        {
            "start": 186.72,
            "end": 188.1,
            "text": "这些工作当然重要。"
        },
        {
            "start": 188.1,
            "end": 191.16,
            "text": "但它们会不断吞掉项目管理真正应该投入"
        },
        {
            "start": 191.16,
            "end": 192.84,
            "text": "在判断和协调上的时间。"
        },
        {
            "start": 192.84,
            "end": 196.06,
            "text": "AI 在项目管理里，至少有五个非常实际的应用。"
        },
        {
            "start": 196.06,
            "end": 197.62,
            "text": "第一，是排期辅助。"
        },
        {
            "start": 197.62,
            "end": 199.42,
            "text": "AI 可以结合历史项目、"
        },
        {
            "start": 199.42,
            "end": 200.94,
            "text": "任务复杂度和团队节奏，"
        },
        {
            "start": 200.94,
            "end": 203.86,
            "text": "帮助你更稳地估算一个任务可能需要多久。"
        },
        {
            "start": 203.86,
            "end": 205.18,
            "text": "第二，是风险预测。"
        },
        {
            "start": 205.18,
            "end": 206.72,
            "text": "系统可以提前发现，"
        },
        {
            "start": 206.72,
            "end": 208.24,
            "text": "哪些任务很可能延期，"
        },
        {
            "start": 208.24,
            "end": 210.18,
            "text": "哪些依赖关系已经开始危险，"
        },
        {
            "start": 210.18,
            "end": 212.56,
            "text": "哪些资源冲突会在几天后爆发。"
        },
        {
            "start": 212.56,
            "end": 214.36,
            "text": "第三，是进度摘要。"
        },
        {
            "start": 214.36,
            "end": 216.42,
            "text": "项目状态、任务完成情况、"
        },
        {
            "start": 216.42,
            "end": 219.32,
            "text": "风险点和阻塞项，可以自动被整理出来，"
        },
        {
            "start": 219.32,
            "end": 221.3,
            "text": "不再全靠人工追问和汇总。"
        },
        {
            "start": 221.3,
            "end": 223.38,
            "text": "第四，是任务分配辅助。"
        },
        {
            "start": 223.38,
            "end": 226.4,
            "text": "谁更适合做什么，谁当前负载已经过高，"
        },
        {
            "start": 226.4,
            "end": 228.7,
            "text": "哪些工作更适合重新协调，"
        },
        {
            "start": 228.7,
            "end": 231.02,
            "text": "AI 都可以提供更快的判断参考。"
        },
        {
            "start": 231.02,
            "end": 232.66,
            "text": "第五，是知识沉淀。"
        },
        {
            "start": 232.66,
            "end": 235.48,
            "text": "每一个项目做完，都会留下经验和教训。"
        },
        {
            "start": 235.48,
            "end": 238.12,
            "text": "过去这些东西经常写进复盘文档，"
        },
        {
            "start": 238.12,
            "end": 240.54,
            "text": "最后很少再被真正用起来。"
        },
        {
            "start": 240.54,
            "end": 243.72,
            "text": "而 AI 可以把这些项目经验变成真正可检索、"
        },
        {
            "start": 243.72,
            "end": 245.34,
            "text": "可提醒、可复用的知识。"
        },
        {
            "start": 245.34,
            "end": 249.3,
            "text": "你会发现，AI 带来的变化，并不是项目管理不重要了。"
        },
        {
            "start": 249.3,
            "end": 250.18,
            "text": "恰恰相反。"
        },
        {
            "start": 250.18,
            "end": 253.86,
            "text": "它让项目管理从大量重复协调动作里被释放出来，"
        },
        {
            "start": 253.86,
            "end": 256.12,
            "text": "重新回到最核心的工作上。"
        },
        {
            "start": 256.12,
            "end": 258.2,
            "text": "也就是看清风险、判断优先级、"
        },
        {
            "start": 258.2,
            "end": 259.1,
            "text": "协调资源，"
        },
        {
            "start": 259.1,
            "end": 261.46,
            "text": "并确保团队一直在接近真正成果。"
        },
        {
            "start": 261.46,
            "end": 263.4,
            "text": "这就带出一个很重要的转向。"
        },
        {
            "start": 263.4,
            "end": 264.94,
            "text": "AI 时代的项目管理，"
        },
        {
            "start": 264.94,
            "end": 267.68,
            "text": "正在慢慢从“管理过程”变成“管理成果”。"
        },
        {
            "start": 267.68,
            "end": 269.62,
            "text": "以前很多团队会特别关注，"
        },
        {
            "start": 269.62,
            "end": 271.98,
            "text": "任务完成了多少，工时花了多少，"
        },
        {
            "start": 271.98,
            "end": 273.98,
            "text": "里程碑有没有按原计划推进。"
        },
        {
            "start": 273.98,
            "end": 275.78,
            "text": "这些当然不能完全不看。"
        },
        {
            "start": 275.78,
            "end": 279.26,
            "text": "但当越来越多具体执行动作可以被 AI 加速以后，"
        },
        {
            "start": 279.26,
            "end": 281.4,
            "text": "单纯盯过程，会越来越不够。"
        },
        {
            "start": 281.4,
            "end": 283.4,
            "text": "更值得盯住的问题变成了："
        },
        {
            "start": 283.4,
            "end": 285.04,
            "text": "这一轮到底交付了什么价值。"
        },
        {
            "start": 285.04,
            "end": 286.96,
            "text": "这个结果是不是真的有效。"
        },
        {
            "start": 286.96,
            "end": 289.44,
            "text": "有没有比上一轮更接近业务目标。"
        },
        {
            "start": 289.44,
            "end": 293.42,
            "text": "有没有让客户、用户或者内部团队，真正感受到变化。"
        },
        {
            "start": 293.42,
            "end": 295.24,
            "text": "所以项目管理的重心，"
        },
        {
            "start": 295.24,
            "end": 297.72,
            "text": "会慢慢从“有没有按原计划做完”，"
        },
        {
            "start": 297.72,
            "end": 300.32,
            "text": "转向“是不是持续在产出对的结果”。"
        },
        {
            "start": 300.32,
            "end": 302.94,
            "text": "最后，我想讲三个很常见的误区。"
        },
        {
            "start": 302.94,
            "end": 306.06,
            "text": "第一个误区，是以为敏捷就是不做计划。"
        },
        {
            "start": 306.06,
            "end": 307.04,
            "text": "其实不是。"
        },
        {
            "start": 307.04,
            "end": 310.06,
            "text": "敏捷不是没有计划，而是持续调整计划。"
        },
        {
            "start": 310.06,
            "end": 313.38,
            "text": "第二个误区，是以为敏捷只适合软件团队。"
        },
        {
            "start": 313.38,
            "end": 314.24,
            "text": "也不是。"
        },
        {
            "start": 314.24,
            "end": 317.12,
            "text": "只要你的工作需要快速验证、频繁反馈、"
        },
        {
            "start": 317.12,
            "end": 319.8,
            "text": "持续调整，敏捷思路都可能有价值。"
        },
        {
            "start": 319.8,
            "end": 323.16,
            "text": "第三个误区，是以为敏捷的目标只是更快。"
        },
        {
            "start": 323.16,
            "end": 325.34,
            "text": "真正的目标，不是单纯更快，"
        },
        {
            "start": 325.34,
            "end": 328.28,
            "text": "而是更早交付价值，更早发现问题，"
        },
        {
            "start": 328.28,
            "end": 329.9,
            "text": "更灵活应对变化。"
        },
        {
            "start": 329.9,
            "end": 331.46,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 331.46,
            "end": 333.88,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 333.88,
            "end": 336.08,
            "text": "第一，项目管理真正的难点，"
        },
        {
            "start": 336.08,
            "end": 337.72,
            "text": "不是排出一张漂亮计划，"
        },
        {
            "start": 337.72,
            "end": 340.94,
            "text": "而是在变化中还能持续把成果交出来。"
        },
        {
            "start": 340.94,
            "end": 343.98,
            "text": "第二，瀑布式适合需求稳定的项目，"
        },
        {
            "start": 343.98,
            "end": 345.84,
            "text": "敏捷适合变化更快、"
        },
        {
            "start": 345.84,
            "end": 347.74,
            "text": "更需要反馈和调整的项目。"
        },
        {
            "start": 347.74,
            "end": 351.54,
            "text": "第三，AI 正在把项目管理从追状态、"
        },
        {
            "start": 351.54,
            "end": 354.1,
            "text": "催进度，推进到更早发现风险、"
        },
        {
            "start": 354.1,
            "end": 357.26,
            "text": "更快修正节奏，并更聚焦成果价值。"
        },
        {
            "start": 357.26,
            "end": 361.0,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 361.0,
            "end": 363.48,
            "text": "挑一个你现在正在推进的项目。"
        },
        {
            "start": 363.48,
            "end": 364.84,
            "text": "问自己三个问题。"
        },
        {
            "start": 364.84,
            "end": 367.6,
            "text": "这个项目目前最大的不确定性是什么。"
        },
        {
            "start": 367.6,
            "end": 371.1,
            "text": "团队现在更像是在管理过程，还是在管理成果。"
        },
        {
            "start": 371.1,
            "end": 374.44,
            "text": "如果引入 AI，最值得先增强的是排期、"
        },
        {
            "start": 374.44,
            "end": 377.68,
            "text": "风险预测、进度摘要，还是知识沉淀。"
        },
        {
            "start": 377.68,
            "end": 379.64,
            "text": "当你把这三个问题想清楚，"
        },
        {
            "start": 379.64,
            "end": 380.92,
            "text": "你会更容易判断，"
        },
        {
            "start": 380.92,
            "end": 383.18,
            "text": "这个项目下一步到底应该怎么推。"
        },
        {
            "start": 383.18,
            "end": 384.12,
            "text": "我是 Lincoln。"
        },
        {
            "start": 384.12,
            "end": 385.04,
            "text": "我们下一节，"
        },
        {
            "start": 385.04,
            "end": 387.18,
            "text": "继续看亚马逊的 AI 运营飞轮，"
        },
        {
            "start": 387.18,
            "end": 388.8,
            "text": "理解一个真正把运营、"
        },
        {
            "start": 388.8,
            "end": 390.9,
            "text": "数据和客户体验串起来的案例。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 34.22,
        "index": 0
    },
    {
        "start": 34.22,
        "end": 49.88,
        "index": 1
    },
    {
        "start": 49.88,
        "end": 177.22,
        "index": 2
    },
    {
        "start": 177.22,
        "end": 192.84,
        "index": 3
    },
    {
        "start": 192.84,
        "end": 261.46,
        "index": 4
    },
    {
        "start": 261.46,
        "end": 300.32,
        "index": 5
    },
    {
        "start": 300.32,
        "end": 329.9,
        "index": 6
    },
    {
        "start": 329.9,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-08.html?entry={entry}", secondaryHref: "./lesson-operations-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-07", coachSource: "./ai-coach.html?source=lesson-operations-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于敏捷项目管理：在变化中持续交付的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "敏捷项目管理：在变化中持续交付", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
