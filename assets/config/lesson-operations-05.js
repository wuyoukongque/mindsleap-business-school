(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第5课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第5课：从 RPA 到 Agent：流程自动化的升级",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep66-rpa-to-agent/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：从 RPA 到 Agent：流程自动化的升级", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-06.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-operations-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "自动化升级的关键，是系统是否具备理解与判断能力",
                "body": "从脚本到 RPA 再到 AI Agent，真正的分水岭不是速度，而是能不能处理变化与例外。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "不是所有流程都该一上来用 AI Agent",
                "body": "规则清晰、格式稳定的高频流程，RPA 往往更便宜也更直接；复杂判断流程才需要 AI Agent。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "未来更常见的是混合自动化，而不是单一工具统治一切",
                "body": "让 AI Agent 负责理解和判断，让 RPA 负责规则执行，让人保留在关键授权节点，整体效率会更高。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 5/12", "建议下一节：数据化运营：用 AI 驱动每一个运营决策", '也可以先整理这一节'], nextHref: "./lesson-operations-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-05", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson5", audioSource: './assets/audio/operations-ep66-rpa-to-agent.mp3?v=20260413-operations-05a', vttSrc: './assets/subtitles/operations-ep66-rpa-to-agent.vtt?v=20260413-operations-05a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep66-rpa-to-agent/slide_01.png",
            "label": "从 RPA 到 Agent：流程自动化的升级",
            "caption": "这一节会帮助你系统理解：从 RPA 到 Agent：流程自动化的升级"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_02.png",
            "label": "流程自动化已经走到哪一代",
            "caption": "自动化升级的关键，不是工具更多了，而是系统终于开始具备理解与判断能力。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_03.png",
            "label": "RPA 的本质与优势",
            "caption": "RPA 最擅长的，不是思考，而是稳定地把规则明确的动作一遍遍做好。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_04.png",
            "label": "RPA 的根本局限",
            "caption": "RPA 的问题不在于不够快，而在于它无法真正理解变化。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_05.png",
            "label": "为什么说智能代理是下一代",
            "caption": "智能代理带来的升级，是自动化第一次真正跨过了“理解”这道门槛。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_06.png",
            "label": "怎么判断该用哪一种",
            "caption": "先判断流程特征，再决定用什么自动化，而不是先被工具名称带着走。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_07.png",
            "label": "混合自动化案例",
            "caption": "最有效的自动化，往往不是单一技术，而是 AI Agent、RPA 与人工分工协作。"
        },
        {
            "file": "operations-ep66-rpa-to-agent/slide_08.png",
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
            "end": 2.68,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.68,
            "end": 5.06,
            "text": "今天这一节，我们来聊流程自动化。"
        },
        {
            "start": 5.06,
            "end": 8.02,
            "text": "很多企业每天都在做大量重复性的工作。"
        },
        {
            "start": 8.02,
            "end": 11.24,
            "text": "填表、录数据、发邮件、对账、审批。"
        },
        {
            "start": 11.24,
            "end": 13.9,
            "text": "这些事情很耗时间，也很耗人，"
        },
        {
            "start": 13.9,
            "end": 16.16,
            "text": "但真正新增的价值其实并不高。"
        },
        {
            "start": 16.16,
            "end": 18.8,
            "text": "如果用一句最简单的话来讲，"
        },
        {
            "start": 18.8,
            "end": 19.76,
            "text": "流程自动化，"
        },
        {
            "start": 19.76,
            "end": 22.78,
            "text": "就是用技术去接住那些重复、稳定、"
        },
        {
            "start": 22.78,
            "end": 24.42,
            "text": "可被系统接管的工作。"
        },
        {
            "start": 24.42,
            "end": 27.8,
            "text": "但这个领域并不是一下子就走到今天的。"
        },
        {
            "start": 27.8,
            "end": 29.16,
            "text": "它经历了几代升级。"
        },
        {
            "start": 29.16,
            "end": 30.84,
            "text": "最早是脚本和宏。"
        },
        {
            "start": 30.84,
            "end": 33.42,
            "text": "后来是机器人流程自动化，也就是 RPA。"
        },
        {
            "start": 33.42,
            "end": 39.28,
            "text": "再往后，才进入今天大家更关注的智能代理这一代。"
        },
        {
            "start": 39.28,
            "end": 41.74,
            "text": "所以这一节，我们真正要讲清楚的，"
        },
        {
            "start": 41.74,
            "end": 43.68,
            "text": "不只是这些名字分别代表什么。"
        },
        {
            "start": 43.68,
            "end": 46.94,
            "text": "而是你的企业现在到底更适合哪一类自动化。"
        },
        {
            "start": 46.94,
            "end": 47.96,
            "text": "先讲 RPA。"
        },
        {
            "start": 47.96,
            "end": 51.62,
            "text": "机器人流程自动化，本质上是在模仿人操作电脑。"
        },
        {
            "start": 51.62,
            "end": 53.86,
            "text": "你怎么点鼠标，怎么敲键盘，"
        },
        {
            "start": 53.86,
            "end": 56.879999999999995,
            "text": "怎么在几个系统之间复制、粘贴、录入，"
        },
        {
            "start": 56.88,
            "end": 58.36,
            "text": "RPA 就怎么照着做。"
        },
        {
            "start": 58.36,
            "end": 60.66,
            "text": "它更像一个非常听话的软件员工。"
        },
        {
            "start": 60.66,
            "end": 64.32,
            "text": "规则写清楚以后，它就会稳定地一遍遍执行。"
        },
        {
            "start": 64.32,
            "end": 66.26,
            "text": "你可以想象一个很典型的场景。"
        },
        {
            "start": 66.26,
            "end": 68.94,
            "text": "财务团队每天都要从邮箱下载发票。"
        },
        {
            "start": 68.94,
            "end": 70.86,
            "text": "把发票信息整理进表格。"
        },
        {
            "start": 70.86,
            "end": 72.32,
            "text": "再登录系统录入。"
        },
        {
            "start": 72.32,
            "end": 74.06,
            "text": "最后导出汇总报表。"
        },
        {
            "start": 74.06,
            "end": 76.86,
            "text": "这个流程一个人做，也许要花两个小时。"
        },
        {
            "start": 76.86,
            "end": 81.42,
            "text": "但如果步骤完全固定，RPA 就可以把这整套动作接过去。"
        },
        {
            "start": 81.42,
            "end": 85.34,
            "text": "速度更快，出错更少，也不用人反复做这些机械动作。"
        },
        {
            "start": 85.34,
            "end": 87.44,
            "text": "所以 RPA 的优势其实很清楚。"
        },
        {
            "start": 87.44,
            "end": 88.96,
            "text": "第一，部署快。"
        },
        {
            "start": 88.96,
            "end": 91.26,
            "text": "很多时候你不需要先改造老系统，"
        },
        {
            "start": 91.26,
            "end": 93.9,
            "text": "它就可以先在现有系统外层开始工作。"
        },
        {
            "start": 93.9,
            "end": 95.76,
            "text": "第二，成本相对低。"
        },
        {
            "start": 95.76,
            "end": 97.98,
            "text": "如果只是为了处理固定流程，"
        },
        {
            "start": 97.98,
            "end": 100.76000000000002,
            "text": "RPA 往往比重做系统接口更省事。"
        },
        {
            "start": 100.76000000000002,
            "end": 102.38,
            "text": "第三，见效快。"
        },
        {
            "start": 102.38,
            "end": 106.18,
            "text": "只要流程足够标准，一个简单场景很快就能落地。"
        },
        {
            "start": 106.18,
            "end": 108.32,
            "text": "但 RPA 有一个根本性的边界。"
        },
        {
            "start": 108.32,
            "end": 111.86,
            "text": "它只适合规则明确、步骤固定、变化很少的任务。"
        },
        {
            "start": 111.86,
            "end": 114.74,
            "text": "一旦页面结构变了，文档格式变了，"
        },
        {
            "start": 114.74,
            "end": 117.34,
            "text": "流程多了例外，RPA 就很容易卡住。"
        },
        {
            "start": 117.72,
            "end": 119.74,
            "text": "因为它并不理解自己在做什么。"
        },
        {
            "start": 119.74,
            "end": 122.22,
            "text": "它只是严格执行你事先写好的规则。"
        },
        {
            "start": 122.22,
            "end": 124.64,
            "text": "这也是为什么很多企业上了 RPA 以后，"
        },
        {
            "start": 124.64,
            "end": 127.06,
            "text": "后面又花了很多时间在维护上。"
        },
        {
            "start": 127.06,
            "end": 128.9,
            "text": "业务一调整，机器人就要跟着改。"
        },
        {
            "start": 128.9,
            "end": 130.96,
            "text": "流程一变化，脚本就要跟着修。"
        },
        {
            "start": 130.96,
            "end": 132.52,
            "text": "所以 RPA 不是不好。"
        },
        {
            "start": 132.52,
            "end": 136.58,
            "text": "而是它非常适合某一类流程，同时也只适合那一类流程。"
        },
        {
            "start": 136.58,
            "end": 137.96,
            "text": "高度标准化。"
        },
        {
            "start": 137.96,
            "end": 138.68,
            "text": "格式稳定。"
        },
        {
            "start": 138.68,
            "end": 139.52,
            "text": "异常很少。"
        },
        {
            "start": 139.52,
            "end": 141.82,
            "text": "这样的流程，用 RPA 往往最划算。"
        },
        {
            "start": 141.82,
            "end": 143.58000000000004,
            "text": "好，接下来讲智能代理。"
        },
        {
            "start": 143.58000000000004,
            "end": 145.86,
            "text": "如果说 RPA 是照着步骤执行，"
        },
        {
            "start": 145.86,
            "end": 148.82,
            "text": "那么智能代理更像是围绕目标来完成任务。"
        },
        {
            "start": 148.82,
            "end": 150.58,
            "text": "这就是两者最大的不同。"
        },
        {
            "start": 150.58,
            "end": 154.72,
            "text": "RPA 的逻辑是，你告诉它，如果看到这个，就做那个。"
        },
        {
            "start": 154.72,
            "end": 158.52,
            "text": "而智能代理的逻辑是，你告诉它，我要完成这个目标。"
        },
        {
            "start": 158.52,
            "end": 160.5,
            "text": "至于要先做什么，再做什么，"
        },
        {
            "start": 160.5,
            "end": 163.12,
            "text": "遇到变化怎么调整，它可以自己判断。"
        },
        {
            "start": 163.12,
            "end": 165.4,
            "text": "还是拿发票处理这个场景来举例。"
        },
        {
            "start": 165.4,
            "end": 168.9,
            "text": "如果是 RPA，你需要把每一步都写得非常细。"
        },
        {
            "start": 168.9,
            "end": 170.3,
            "text": "到哪个邮箱找邮件。"
        },
        {
            "start": 170.3,
            "end": 171.76,
            "text": "标题里出现什么词。"
        },
        {
            "start": 171.76,
            "end": 173.3,
            "text": "附件下载到哪里。"
        },
        {
            "start": 173.3,
            "end": 175.52,
            "text": "表格哪一列对应系统哪个字段。"
        },
        {
            "start": 175.52,
            "end": 177.26,
            "text": "每一步都要先定义清楚。"
        },
        {
            "start": 177.26,
            "end": 180.14,
            "text": "但如果是智能代理，你可以直接告诉它，"
        },
        {
            "start": 180.14,
            "end": 182.5,
            "text": "处理今天收到的发票，并录入系统。"
        },
        {
            "start": 182.5,
            "end": 184.52,
            "text": "它会去理解文档长什么样。"
        },
        {
            "start": 184.52,
            "end": 185.86,
            "text": "数据在哪个位置。"
        },
        {
            "start": 185.86,
            "end": 187.56,
            "text": "哪些附件其实不是发票。"
        },
        {
            "start": 187.56,
            "end": 190.54,
            "text": "哪些情况需要跳过，或者转给人工确认。"
        },
        {
            "start": 190.54,
            "end": 194.46,
            "text": "这意味着智能代理相比 RPA，至少多了四种能力。"
        },
        {
            "start": 194.46,
            "end": 196.06,
            "text": "第一，是理解能力。"
        },
        {
            "start": 196.06,
            "end": 198.16,
            "text": "它能读文档、读邮件、看图片、"
        },
        {
            "start": 198.16,
            "end": 199.22,
            "text": "处理自然语言，"
        },
        {
            "start": 199.22,
            "end": 201.84,
            "text": "而不是只会对固定格式做机械映射。"
        },
        {
            "start": 201.84,
            "end": 203.5,
            "text": "第二，是适应能力。"
        },
        {
            "start": 203.5,
            "end": 206.06,
            "text": "格式变了，流程变了，出现例外了，"
        },
        {
            "start": 206.06,
            "end": 208.88,
            "text": "它更有机会自己调整，而不是立刻报错。"
        },
        {
            "start": 208.88,
            "end": 210.4,
            "text": "第三，是判断能力。"
        },
        {
            "start": 210.4,
            "end": 211.66,
            "text": "它不只是执行，"
        },
        {
            "start": 211.66,
            "end": 214.43333333333334,
            "text": "还能在一定边界内做分类、归因、"
        },
        {
            "start": 214.43333333333334,
            "end": 215.68,
            "text": "路由和建议。"
        },
        {
            "start": 215.68,
            "end": 217.4,
            "text": "第四，是学习能力。"
        },
        {
            "start": 217.4,
            "end": 221.0,
            "text": "随着历史处理记录越来越多，它往往会越做越稳。"
        },
        {
            "start": 221.0,
            "end": 224.78,
            "text": "但这并不意味着，所有流程都应该立刻上智能代理。"
        },
        {
            "start": 224.78,
            "end": 227.66,
            "text": "真正成熟的判断，不是追最新的名字，"
        },
        {
            "start": 227.66,
            "end": 229.46,
            "text": "而是先判断你的流程特征。"
        },
        {
            "start": 229.46,
            "end": 231.68,
            "text": "我建议你从两个维度来看。"
        },
        {
            "start": 231.68,
            "end": 233.96,
            "text": "第一个维度，是流程复杂度。"
        },
        {
            "start": 233.96,
            "end": 235.94,
            "text": "如果你的流程规则很固定，"
        },
        {
            "start": 235.94,
            "end": 238.98,
            "text": "输入也很标准化，那 RPA 往往就够了。"
        },
        {
            "start": 238.98,
            "end": 240.38,
            "text": "比如固定格式报表搬运，"
        },
        {
            "start": 240.38,
            "end": 242.0,
            "text": "系统之间的数据同步，"
        },
        {
            "start": 242.0,
            "end": 243.6,
            "text": "或者标准邮件发送。"
        },
        {
            "start": 243.6,
            "end": 246.48,
            "text": "如果你的流程会遇到非结构化内容，"
        },
        {
            "start": 246.48,
            "end": 249.4,
            "text": "需要理解上下文，需要判断和分类，"
        },
        {
            "start": 249.4,
            "end": 251.16,
            "text": "还经常会有例外情况，"
        },
        {
            "start": 251.16,
            "end": 253.02000000000004,
            "text": "那就更适合智能代理。"
        },
        {
            "start": 253.02000000000004,
            "end": 255.56,
            "text": "比如合同审查、复杂客服回复、"
        },
        {
            "start": 255.56,
            "end": 257.5,
            "text": "不同格式文档处理，"
        },
        {
            "start": 257.5,
            "end": 260.18,
            "text": "这类任务天然更适合交给更智能的一层。"
        },
        {
            "start": 260.18,
            "end": 262.46,
            "text": "第二个维度，是自动化价值。"
        },
        {
            "start": 262.46,
            "end": 264.7,
            "text": "不是所有流程都值得自动化。"
        },
        {
            "start": 264.7,
            "end": 268.84,
            "text": "判断一个流程值不值得优先做，我建议先看三个因素。"
        },
        {
            "start": 268.84,
            "end": 269.78,
            "text": "频率高不高。"
        },
        {
            "start": 269.78,
            "end": 271.26,
            "text": "每次耗时长不长。"
        },
        {
            "start": 271.26,
            "end": 272.94,
            "text": "人工出错率高不高。"
        },
        {
            "start": 272.94,
            "end": 275.42,
            "text": "如果一条流程又高频、又耗时、"
        },
        {
            "start": 275.42,
            "end": 276.26,
            "text": "又容易出错，"
        },
        {
            "start": 276.26,
            "end": 279.06,
            "text": "那它几乎一定应该优先进入自动化清单。"
        },
        {
            "start": 279.06,
            "end": 282.78,
            "text": "所以更务实的做法，不是先问我要不要上 AI Agent。"
        },
        {
            "start": 282.78,
            "end": 285.76,
            "text": "而是先把你企业里的重复性流程列出来。"
        },
        {
            "start": 285.76,
            "end": 288.36,
            "text": "按照频率、耗时、出错率做排序。"
        },
        {
            "start": 288.36,
            "end": 292.80000000000007,
            "text": "再看每一条流程，到底更适合 RPA，还是更适合智能代理。"
        },
        {
            "start": 292.80000000000007,
            "end": 295.0,
            "text": "这里我再给你一个更现实的判断。"
        },
        {
            "start": 295.0,
            "end": 297.32,
            "text": "未来很多企业真正会用到的，"
        },
        {
            "start": 297.32,
            "end": 299.72,
            "text": "不是二选一，而是混合自动化。"
        },
        {
            "start": 299.72,
            "end": 301.42,
            "text": "也就是让智能代理、"
        },
        {
            "start": 301.42,
            "end": 305.4,
            "text": "RPA 和人工分别待在自己最合适的位置上。"
        },
        {
            "start": 305.4,
            "end": 306.88,
            "text": "比如保险理赔这个流程。"
        },
        {
            "start": 306.88,
            "end": 308.84,
            "text": "客户提交理赔资料以后，"
        },
        {
            "start": 308.84,
            "end": 310.82,
            "text": "先由智能代理读取照片、"
        },
        {
            "start": 310.82,
            "end": 313.6,
            "text": "发票和医疗材料，提取关键信息。"
        },
        {
            "start": 313.6,
            "end": 316.5,
            "text": "接着，RPA 去做规则明确的系统校验。"
        },
        {
            "start": 316.5,
            "end": 319.96,
            "text": "比如保单号是否匹配，是否在有效期内，"
        },
        {
            "start": 319.96,
            "end": 321.56,
            "text": "是否属于保障范围。"
        },
        {
            "start": 321.56,
            "end": 325.44,
            "text": "再往后，智能代理可以根据历史案例给出赔付建议。"
        },
        {
            "start": 325.44,
            "end": 328.78,
            "text": "最后，RPA 再去完成系统录入和通知发送。"
        },
        {
            "start": 328.78,
            "end": 330.54,
            "text": "你会发现，在这个流程里，"
        },
        {
            "start": 330.54,
            "end": 332.5,
            "text": "智能代理负责理解和判断，"
        },
        {
            "start": 332.5,
            "end": 335.96,
            "text": "RPA 负责规则执行，而人保留在审核、"
        },
        {
            "start": 335.96,
            "end": 338.26,
            "text": "授权和异常处理的关键节点上。"
        },
        {
            "start": 338.26,
            "end": 340.3,
            "text": "这其实才是更稳的自动化架构。"
        },
        {
            "start": 340.3,
            "end": 342.66,
            "text": "不是把所有事都交给同一种工具。"
        },
        {
            "start": 342.66,
            "end": 345.62,
            "text": "而是让不同能力，各自放在最擅长的地方。"
        },
        {
            "start": 345.62,
            "end": 347.9,
            "text": "最后我想提醒你三个注意事项。"
        },
        {
            "start": 347.9,
            "end": 350.26,
            "text": "第一，不要为了自动化而自动化。"
        },
        {
            "start": 350.26,
            "end": 352.2,
            "text": "如果一个流程本身就很低效，"
        },
        {
            "start": 352.2,
            "end": 355.14,
            "text": "你只是让系统更快地执行了一个低效流程。"
        },
        {
            "start": 355.14,
            "end": 357.78,
            "text": "先理顺流程，再做自动化，才更划算。"
        },
        {
            "start": 357.78,
            "end": 360.28,
            "text": "第二，人机接口一定要设计清楚。"
        },
        {
            "start": 360.28,
            "end": 362.04,
            "text": "哪些环节可以自动处理，"
        },
        {
            "start": 362.04,
            "end": 363.8,
            "text": "哪些情况必须升级给人工，"
        },
        {
            "start": 363.8,
            "end": 365.56,
            "text": "哪些决策必须有人拍板，"
        },
        {
            "start": 365.56,
            "end": 367.36,
            "text": "这些边界要先定义清楚。"
        },
        {
            "start": 367.8,
            "end": 369.76,
            "text": "第三，自动化上线不是终点。"
        },
        {
            "start": 369.76,
            "end": 372.56,
            "text": "后面还要持续监控准确率、异常率、"
        },
        {
            "start": 372.56,
            "end": 374.26,
            "text": "处理时效和人工介入比例，"
        },
        {
            "start": 374.26,
            "end": 376.14,
            "text": "自动化系统才会越做越稳。"
        },
        {
            "start": 376.14,
            "end": 377.74,
            "text": "好，我们来收一下这一节。"
        },
        {
            "start": 377.74,
            "end": 379.8,
            "text": "今天最需要带走三件事。"
        },
        {
            "start": 379.8,
            "end": 382.64,
            "text": "第一，流程自动化已经从脚本和 RPA，"
        },
        {
            "start": 382.64,
            "end": 385.44,
            "text": "走向了更像智能代理的新阶段。"
        },
        {
            "start": 386.05999999999995,
            "end": 388.16,
            "text": "第二，RPA 适合规则固定、"
        },
        {
            "start": 388.16,
            "end": 389.26,
            "text": "格式稳定的流程，"
        },
        {
            "start": 389.26,
            "end": 391.72,
            "text": "而智能代理更适合需要理解、"
        },
        {
            "start": 391.72,
            "end": 393.24,
            "text": "判断和适应变化的流程。"
        },
        {
            "start": 393.84,
            "end": 395.84,
            "text": "第三，真正成熟的自动化路径，"
        },
        {
            "start": 395.84,
            "end": 398.12,
            "text": "不是盲目追新，而是先按频率、"
        },
        {
            "start": 398.12,
            "end": 400.8,
            "text": "耗时和出错率排序，再决定人、"
        },
        {
            "start": 400.8,
            "end": 402.82,
            "text": "RPA 和智能代理的最佳分工。"
        },
        {
            "start": 403.24,
            "end": 406.3,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 406.3,
            "end": 409.72,
            "text": "列出你企业里最重复、最耗时的三条流程。"
        },
        {
            "start": 409.72,
            "end": 412.28,
            "text": "然后分别判断，它们更适合用 RPA，"
        },
        {
            "start": 412.28,
            "end": 414.0799999999999,
            "text": "还是更适合用智能代理，"
        },
        {
            "start": 414.08,
            "end": 415.8,
            "text": "或者应该做混合自动化。"
        },
        {
            "start": 416.20000000000005,
            "end": 417.94,
            "text": "当你这样去看问题的时候，"
        },
        {
            "start": 417.94,
            "end": 420.24,
            "text": "自动化就不再只是一个技术名词，"
        },
        {
            "start": 420.24,
            "end": 423.74,
            "text": "而会慢慢变成一条真正可落地的经营升级路径。"
        },
        {
            "start": 423.74,
            "end": 424.3799999999999,
            "text": "我是 Lincoln。"
        },
        {
            "start": 424.3799999999999,
            "end": 426.45999999999947,
            "text": "我们下一节，继续聊数据化运营，"
        },
        {
            "start": 426.45999999999947,
            "end": 430.13999999999874,
            "text": "看看企业为什么必须让运营决策真正建立在数据之上。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 16.16,
        "index": 0
    },
    {
        "start": 16.16,
        "end": 46.94,
        "index": 1
    },
    {
        "start": 46.94,
        "end": 106.18,
        "index": 2
    },
    {
        "start": 106.18,
        "end": 141.82,
        "index": 3
    },
    {
        "start": 141.82,
        "end": 229.46,
        "index": 4
    },
    {
        "start": 229.46,
        "end": 295.0,
        "index": 5
    },
    {
        "start": 295.0,
        "end": 376.14,
        "index": 6
    },
    {
        "start": 376.14,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-06.html?entry={entry}", secondaryHref: "./lesson-operations-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-05", coachSource: "./ai-coach.html?source=lesson-operations-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于从 RPA 到 Agent：流程自动化的升级的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "从 RPA 到 Agent：流程自动化的升级", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
