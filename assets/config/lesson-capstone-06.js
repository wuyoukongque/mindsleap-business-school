(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第6课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第6课：毕业寄语：AI 时代的终身学习者",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 6 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep120-graduation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：毕业寄语：AI 时代的终身学习者", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-capstone.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "商业分析全流程：从行业研究到战略建议",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "案例复盘：一家公司的全方位诊断",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "你的毕业项目（上）：问题定义与数据收集",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "你的毕业项目（中）：分析与策略制定",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "你的毕业项目（下）：方案呈现与 AI 点评",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "毕业寄语：AI 时代的终身学习者",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-capstone.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "从真实问题出发",
                "body": "毕业项目不是再听一遍知识点，而是把一个真实业务问题定义清楚、拆开、验证并形成方案。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "让证据支撑判断",
                "body": "好的商业分析要把行业、用户、财务、运营和组织线索串起来，而不是只给一个漂亮结论。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "把方案讲给人听",
                "body": "最终产出要能被团队理解、讨论和执行，所以呈现结构与 AI 点评同样重要。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的 毕业项目课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：综合实战与毕业项目 6/6", "你已完成当前开放的 毕业项目课程", '也可以先整理这一节'], nextHref: "./module-capstone.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-06", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson6", audioSource: './assets/audio/capstone-ep120-graduation.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep120-graduation.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep120-graduation/slide_01.png",
            "label": "毕业寄语：AI 时代的终身学习者",
            "caption": "这一节会帮助你系统理解：毕业寄语：AI 时代的终身学习者"
        },
        {
            "file": "capstone-ep120-graduation/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep120-graduation/slide_03.png",
            "label": "核心分析框架",
            "caption": "遇到财务问题，你有三张报表分析、估值方法、定价策略。 遇到增长问题，你有 STP、增长飞轮、漏斗分析。"
        },
        {
            "file": "capstone-ep120-graduation/slide_04.png",
            "label": "证据与材料组织",
            "caption": "但 AI 可以在几秒钟内调用人类几乎所有的公开知识。 AI 写报告比你快十倍。"
        },
        {
            "file": "capstone-ep120-graduation/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "我们这套课程讲的内容，在三年后可能有百分之三十需要更新。 在五年后可能有百分之五十需要更新。"
        },
        {
            "file": "capstone-ep120-graduation/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "加入一个有共同目标的学习社群，互相分享、互相督促、互相启发。 最后，我想跟你分享一个我深信不疑的观点。"
        },
        {
            "file": "capstone-ep120-graduation/slide_07.png",
            "label": "本节行动提示",
            "caption": "一百二十期。 十个模块。"
        },
        {
            "file": "capstone-ep120-graduation/slide_08.png",
            "label": "学员最需要带走的 3 个项目判断",
            "caption": "学完后，最重要的是把今天的 综合项目方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.54,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.54,
            "end": 3.78,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.78,
            "end": 7.3,
            "text": "这是我们课程的第一百二十期，也是最后一期。"
        },
        {
            "start": 7.3,
            "end": 10.14,
            "text": "从第一期到第一百二十期，"
        },
        {
            "start": 10.14,
            "end": 13.4,
            "text": "我们一起走过了一段很长的旅程。"
        },
        {
            "start": 13.4,
            "end": 17.64,
            "text": "从 AI 认知启蒙到战略管理、财务分析、"
        },
        {
            "start": 17.98,
            "end": 21.06,
            "text": "市场营销、组织领导力、运营管理、"
        },
        {
            "start": 21.06,
            "end": 24.62,
            "text": "创新创业、商业数据分析、法律合规、"
        },
        {
            "start": 24.62,
            "end": 26.34,
            "text": "AI 实战工具，"
        },
        {
            "start": 26.34,
            "end": 29.12,
            "text": "一直到综合实战和毕业项目。"
        },
        {
            "start": 29.12,
            "end": 30.94,
            "text": "感谢你一路的陪伴。"
        },
        {
            "start": 30.94,
            "end": 35.76,
            "text": "今天不讲新的框架和工具，我想跟你聊聊心里话。"
        },
        {
            "start": 35.76,
            "end": 37.34,
            "text": "第一件事，我想说："
        },
        {
            "start": 37.34,
            "end": 40.36,
            "text": "你已经拥有了一套完整的商业操作系统。"
        },
        {
            "start": 40.36,
            "end": 42.22,
            "text": "一百二十期课程，"
        },
        {
            "start": 42.22,
            "end": 45.0,
            "text": "覆盖了 MBA 级别的核心商业知识，"
        },
        {
            "start": 45.0,
            "end": 47.3,
            "text": "加上 AI 时代的前沿视角。"
        },
        {
            "start": 47.3,
            "end": 50.26,
            "text": "这些框架和工具不是考试用的，"
        },
        {
            "start": 50.26,
            "end": 54.22,
            "text": "而是你每天做决策时可以随时调用的\"思维工具箱\"。"
        },
        {
            "start": 54.22,
            "end": 59.1,
            "text": "遇到战略问题，你有波特五力、商业模式画布、蓝海战略。"
        },
        {
            "start": 59.1,
            "end": 63.94,
            "text": "遇到财务问题，你有三张报表分析、估值方法、定价策略。"
        },
        {
            "start": 63.94,
            "end": 68.58,
            "text": "遇到增长问题，你有 STP、增长飞轮、漏斗分析。"
        },
        {
            "start": 68.58,
            "end": 71.56,
            "text": "遇到团队问题，你有领导力模型、"
        },
        {
            "start": 71.56,
            "end": 73.9,
            "text": "变革管理、人机协作框架。"
        },
        {
            "start": 73.9,
            "end": 78.72000000000001,
            "text": "遇到运营问题，你有精益管理、瓶颈理论、自动化路线图。"
        },
        {
            "start": 78.72000000000001,
            "end": 81.036,
            "text": "这些框架不是要你死记硬背。"
        },
        {
            "start": 81.036,
            "end": 83.34,
            "text": "它们是你思考问题的\"脚手架\"。"
        },
        {
            "start": 83.34,
            "end": 85.62,
            "text": "用多了就内化成你的直觉。"
        },
        {
            "start": 85.62,
            "end": 88.7,
            "text": "第二件事，我想说：AI 不会替代你，"
        },
        {
            "start": 88.7,
            "end": 91.56,
            "text": "但会用 AI 的你会替代不会用的你。"
        },
        {
            "start": 91.56,
            "end": 93.88,
            "text": "这句话我们在课程中多次提到。"
        },
        {
            "start": 93.88,
            "end": 96.54000000000002,
            "text": "现在我想更深入地聊这个。"
        },
        {
            "start": 96.54000000000002,
            "end": 99.5,
            "text": "AI 时代最大的变化不是技术本身，"
        },
        {
            "start": 99.5,
            "end": 101.92,
            "text": "而是人的能力被重新定义了。"
        },
        {
            "start": 101.92,
            "end": 102.56,
            "text": "过去，"
        },
        {
            "start": 102.56,
            "end": 106.14,
            "text": "一个人的价值很大程度上取决于他\"知道"
        },
        {
            "start": 106.14,
            "end": 107.72,
            "text": "多少\"\"能做多快\"。"
        },
        {
            "start": 107.72,
            "end": 110.24000000000001,
            "text": "你记住了更多的行业知识，"
        },
        {
            "start": 110.24000000000001,
            "end": 114.00999999999999,
            "text": "你的报告写得更快，你的 Excel 用得更熟练，"
        },
        {
            "start": 114.00999999999999,
            "end": 115.62,
            "text": "这些让你有竞争力。"
        },
        {
            "start": 115.62,
            "end": 121.1,
            "text": "但 AI 可以在几秒钟内调用人类几乎所有的公开知识。"
        },
        {
            "start": 121.1,
            "end": 123.46,
            "text": "AI 写报告比你快十倍。"
        },
        {
            "start": 123.46,
            "end": 125.92,
            "text": "AI 做数据分析不需要 Excel。"
        },
        {
            "start": 125.92,
            "end": 127.6,
            "text": "那你的竞争力在哪？"
        },
        {
            "start": 127.6,
            "end": 128.7,
            "text": "在三个地方。"
        },
        {
            "start": 128.7,
            "end": 130.9,
            "text": "第一，判断力。"
        },
        {
            "start": 130.9,
            "end": 135.3,
            "text": "AI 给你分析和建议，但最终的判断是你做的。"
        },
        {
            "start": 135.3,
            "end": 138.42,
            "text": "什么策略是对的、什么时机是好的、"
        },
        {
            "start": 138.42,
            "end": 140.64,
            "text": "什么风险是可以承受的，"
        },
        {
            "start": 140.64,
            "end": 142.3,
            "text": "这些需要商业直觉、"
        },
        {
            "start": 142.3,
            "end": 145.06,
            "text": "行业经验和对人性的理解。"
        },
        {
            "start": 145.06,
            "end": 146.16,
            "text": "AI 做不到。"
        },
        {
            "start": 146.16,
            "end": 147.94,
            "text": "第二，创造力。"
        },
        {
            "start": 148.48000000000002,
            "end": 151.68,
            "text": "AI 可以基于已有的知识做组合和优化。"
        },
        {
            "start": 151.68,
            "end": 154.70000000000002,
            "text": "但真正的创新，重新定义问题、"
        },
        {
            "start": 154.70000000000002,
            "end": 156.59999999999997,
            "text": "看到别人看不到的机会、"
        },
        {
            "start": 156.6,
            "end": 158.4,
            "text": "做出反直觉的决策，"
        },
        {
            "start": 158.4,
            "end": 160.72,
            "text": "这些来自人的创造力。"
        },
        {
            "start": 160.72,
            "end": 162.38,
            "text": "第三，关系力。"
        },
        {
            "start": 162.38,
            "end": 164.74,
            "text": "商业最终是人与人的事。"
        },
        {
            "start": 164.74,
            "end": 166.6,
            "text": "信任、合作、领导、说服，"
        },
        {
            "start": 166.6,
            "end": 169.74,
            "text": "这些靠的是人际关系和情感连接。"
        },
        {
            "start": 169.74,
            "end": 174.48,
            "text": "AI 是你的工具，但客户信任的是你，团队追随的是你。"
        },
        {
            "start": 174.48,
            "end": 178.0,
            "text": "第三件事，也是最重要的一件事：保持学习。"
        },
        {
            "start": 178.0,
            "end": 180.06,
            "text": "我们这套课程讲的内容，"
        },
        {
            "start": 180.06,
            "end": 183.02,
            "text": "在三年后可能有百分之三十需要更新。"
        },
        {
            "start": 183.02,
            "end": 186.14,
            "text": "在五年后可能有百分之五十需要更新。"
        },
        {
            "start": 186.14,
            "end": 188.72,
            "text": "AI 技术在以指数级的速度进化。"
        },
        {
            "start": 188.72,
            "end": 191.04,
            "text": "商业环境也在快速变化。"
        },
        {
            "start": 191.04,
            "end": 193.86,
            "text": "你不可能靠一套课程吃一辈子。"
        },
        {
            "start": 193.86,
            "end": 195.28000000000003,
            "text": "怎么保持学习？"
        },
        {
            "start": 195.28000000000003,
            "end": 198.16000000000003,
            "text": "第一，养成每天用 AI 学习的习惯。"
        },
        {
            "start": 198.16000000000003,
            "end": 200.64,
            "text": "遇到不懂的概念、不了解的行业、"
        },
        {
            "start": 200.64,
            "end": 202.82,
            "text": "不确定的决策，随时问 AI。"
        },
        {
            "start": 202.82,
            "end": 207.78,
            "text": "AI 是你的私人导师，7 乘 24 小时在线，不嫌你问题多。"
        },
        {
            "start": 208.52,
            "end": 211.1,
            "text": "第二，保持对新技术的好奇心。"
        },
        {
            "start": 211.1,
            "end": 215.02,
            "text": "每个月花两到三个小时了解 AI 领域的最新进展。"
        },
        {
            "start": 215.02,
            "end": 216.98000000000002,
            "text": "不需要深入技术细节，"
        },
        {
            "start": 216.98000000000002,
            "end": 220.06,
            "text": "但要知道\"AI 又能做什么新的事了\"。"
        },
        {
            "start": 220.06,
            "end": 222.22,
            "text": "第三，实践出真知。"
        },
        {
            "start": 222.22,
            "end": 224.67333333333332,
            "text": "学一百个框架不如用好一个。"
        },
        {
            "start": 224.67333333333332,
            "end": 228.66,
            "text": "选择一两个对你当前工作最有价值的框架和工具，"
        },
        {
            "start": 228.66,
            "end": 230.8,
            "text": "反复实践，直到内化。"
        },
        {
            "start": 230.8,
            "end": 232.9,
            "text": "第四，加入学习社群。"
        },
        {
            "start": 232.9,
            "end": 234.86,
            "text": "一个人学习容易懈怠。"
        },
        {
            "start": 234.86,
            "end": 237.98,
            "text": "加入一个有共同目标的学习社群，"
        },
        {
            "start": 237.98,
            "end": 240.59999999999997,
            "text": "互相分享、互相督促、互相启发。"
        },
        {
            "start": 240.6,
            "end": 244.07999999999998,
            "text": "最后，我想跟你分享一个我深信不疑的观点。"
        },
        {
            "start": 244.08,
            "end": 246.08,
            "text": "AI 时代是最好的时代。"
        },
        {
            "start": 246.08,
            "end": 246.6,
            "text": "为什么？"
        },
        {
            "start": 246.6,
            "end": 250.32,
            "text": "因为 AI 是一个巨大的\"能力平等化\"工具。"
        },
        {
            "start": 250.32,
            "end": 254.58,
            "text": "在过去，一个初创公司跟一个大企业的能力差距是巨大的。"
        },
        {
            "start": 254.58,
            "end": 258.32,
            "text": "大企业有几百人的分析团队，你只有自己。"
        },
        {
            "start": 258.32,
            "end": 262.02,
            "text": "大企业有几千万的营销预算，你只有几万块。"
        },
        {
            "start": 262.02,
            "end": 265.1,
            "text": "大企业有几十年的行业积累，你刚入行。"
        },
        {
            "start": 265.1,
            "end": 267.78,
            "text": "但 AI 改变了这个等式。"
        },
        {
            "start": 267.78,
            "end": 271.26,
            "text": "一个会用 AI 的人，效率可以抵得上一个小团队。"
        },
        {
            "start": 271.26,
            "end": 275.34,
            "text": "一个会用 AI 的小团队，能力可以接近一个大部门。"
        },
        {
            "start": 275.34,
            "end": 279.1,
            "text": "AI 让小企业有了跟大企业竞争的可能性。"
        },
        {
            "start": 279.1,
            "end": 282.6,
            "text": "让个人创业者有了以前不敢想的能力。"
        },
        {
            "start": 282.6,
            "end": 284.54,
            "text": "所以不要恐惧 AI 时代。"
        },
        {
            "start": 284.54,
            "end": 285.42,
            "text": "拥抱它。"
        },
        {
            "start": 285.42,
            "end": 288.26,
            "text": "你已经具备了拥抱它的知识和工具。"
        },
        {
            "start": 288.26,
            "end": 289.64,
            "text": "接下来就是行动。"
        },
        {
            "start": 289.64,
            "end": 292.22,
            "text": "好，我们的课程到这里就全部结束了。"
        },
        {
            "start": 292.22,
            "end": 293.7200000000001,
            "text": "一百二十期。"
        },
        {
            "start": 293.7200000000001,
            "end": 294.78,
            "text": "十个模块。"
        },
        {
            "start": 294.78,
            "end": 299.78,
            "text": "覆盖了商业管理的核心学科，融入了 AI 时代的前沿视角。"
        },
        {
            "start": 299.78,
            "end": 300.68,
            "text": "我是Lincoln。"
        },
        {
            "start": 300.68,
            "end": 303.12,
            "text": "感谢你选择 MindsLeap 商学院。"
        },
        {
            "start": 303.12,
            "end": 306.0533333333333,
            "text": "感谢你用你宝贵的时间跟我一起学习。"
        },
        {
            "start": 306.0533333333333,
            "end": 308.2066666666667,
            "text": "记住，学完不是终点。"
        },
        {
            "start": 308.2066666666667,
            "end": 309.52,
            "text": "学完是起点。"
        },
        {
            "start": 309.52,
            "end": 311.42,
            "text": "去用你学到的东西。"
        },
        {
            "start": 311.42,
            "end": 313.18,
            "text": "去做你想做的事。"
        },
        {
            "start": 313.18,
            "end": 315.96,
            "text": "去建设你想建设的企业。"
        },
        {
            "start": 315.96,
            "end": 317.36,
            "text": "AI 是你的工具。"
        },
        {
            "start": 317.36,
            "end": 319.28,
            "text": "知识是你的武器。"
        },
        {
            "start": 319.28,
            "end": 321.66,
            "text": "判断力是你的护城河。"
        },
        {
            "start": 321.66,
            "end": 324.08,
            "text": "祝你在 AI 时代乘风破浪。"
        },
        {
            "start": 324.08,
            "end": 325.66,
            "text": "我们后会有期。"
        },
        {
            "start": 325.66,
            "end": 328.79499999999996,
            "text": "1. 你已拥有完整的商业操作系统，"
        },
        {
            "start": 328.79499999999996,
            "end": 330.56,
            "text": "随时调用的\"思维工具箱\""
        },
        {
            "start": 330.56,
            "end": 335.06,
            "text": "2. AI 时代的三大竞争力：判断力、创造力、关系力"
        },
        {
            "start": 335.06,
            "end": 338.15999999999997,
            "text": "3. 保持学习：每天用 AI 学、"
        },
        {
            "start": 338.15999999999997,
            "end": 341.02,
            "text": "关注新技术、实践出真知、加入社群"
        },
        {
            "start": 341.02,
            "end": 344.14,
            "text": "4. AI 是能力平等化工具："
        },
        {
            "start": 344.14,
            "end": 347.7,
            "text": "让小企业和个人有了跟大企业竞争的可能"
        },
        {
            "start": 349.18,
            "end": 350.58,
            "text": "1. 这一百二十期课程中，"
        },
        {
            "start": 350.58,
            "end": 354.13,
            "text": "对你影响最大的三个概念或框架是什么？"
        },
        {
            "start": 354.13,
            "end": 357.88,
            "text": "2. 你打算在接下来一个月内把哪个学到"
        },
        {
            "start": 357.88,
            "end": 360.22,
            "text": "的框架用到实际工作中？"
        },
        {
            "start": 360.22,
            "end": 364.08666666666664,
            "text": "3. 你的 AI 时代个人竞争力计划是什么？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 55.0,
        "index": 0
    },
    {
        "start": 55.0,
        "end": 110.0,
        "index": 1
    },
    {
        "start": 110.0,
        "end": 165.0,
        "index": 2
    },
    {
        "start": 165.0,
        "end": 220.0,
        "index": 3
    },
    {
        "start": 220.0,
        "end": 275.0,
        "index": 4
    },
    {
        "start": 275.0,
        "end": 330.0,
        "index": 5
    },
    {
        "start": 330.0,
        "end": 385.0,
        "index": 6
    },
    {
        "start": 385.0,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-capstone.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-capstone.html?entry={entry}", secondaryHref: "./module-capstone.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-06", coachSource: "./ai-coach.html?source=lesson-capstone-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于毕业寄语：AI 时代的终身学习者的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "毕业寄语：AI 时代的终身学习者", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-capstone.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
