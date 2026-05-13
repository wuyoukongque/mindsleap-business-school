(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的领导力思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的组织与领导力框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的组织判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.leadership13 = {
    shell: {
      documentTitle: "MindsLeap Business School · Leadership 第13课",
      backLink: { href: './module-leadership.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块四 · AI时代领导力',
      lessonTitle: "第13课：案例：纳德拉如何重塑微软",
      heroMeta: ['🎙 Leadership 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀组织判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把组织与领导力框架，重新放回 AI 时代的管理现实里，形成更稳定的领导判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回团队现场使用的领导判断框架'] },
      player: { initialSlide: "./assets/slides/leadership-ep60-case-nadella/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：纳德拉如何重塑微软", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-leadership.html?entry=sequence#lesson-13", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个组织或用人判断最值得带回你的团队？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：招聘、激励、绩效、协作、变革推进，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的领导力学习，最终都会回到人、组织与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-leadership-14.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "招人的艺术：AI 时代需要什么样的人才",
                "body": "重新理解 AI 时代的人才标准：什么能力在升值，什么样的人更值得你提前布局。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "团队激励：钱不是万能的",
                "body": "看清楚团队真正被什么驱动，再把激励从单一的奖金机制升级成更完整的系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "绩效与 OKR：目标怎么真正落地",
                "body": "让绩效管理回到方向清晰、过程对齐与结果复盘，而不是停留在形式化打分。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "领导力模型：领导者到底在做什么",
                "body": "把领导力从抽象魅力拆成可理解、可训练、可在企业里落地的几个核心动作。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "管理数字员工：人和 AI 一起工作以后怎么管",
                "body": "当团队里出现越来越多 AI 角色，管理的对象、边界和责任该如何重新定义。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "人与 AI 协作：团队分工怎么重做",
                "body": "把人的判断与 AI 的执行放在同一套协作设计里，建立更高效的人机组合方式。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 变革管理：组织怎么更轻快地改变",
                "body": "理解变革阻力从哪里来，再把 AI 时代的组织升级做得更稳、更快、更少内耗。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "敏捷组织：组织怎么更灵活",
                "body": "重新看组织边界、协作节奏与决策机制，让组织更适应快速变化的环境。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "企业文化：看不见的组织操作系统",
                "body": "文化不是墙上的口号，而是组织里每天被默许、被奖励、被重复的行为模式。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "远程协作：团队不在一起怎么高效工作",
                "body": "把远程办公从被动应对，升级成流程、信任与协作节奏都清晰的工作方式。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "AI 辅助决策：领导者该怎么用 AI 想问题",
                "body": "把 AI 真正变成决策辅助者，而不是新的噪音来源。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "冲突管理：有分歧，不一定是坏事",
                "body": "看清冲突背后的结构问题，把分歧变成组织升级的入口，而不是团队消耗。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：纳德拉如何重塑微软",
                "body": "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "案例：一家企业如何真正把 AI 用起来",
                "body": "通过真实 adoption 路径，看懂组织把 AI 落地时最容易卡住的点与真正有效的推进方式。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-leadership-14.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-leadership.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先改文化，再推战略，组织才接得住变化",
                "body": "纳德拉的动作顺序非常关键，文化先动，后面的战略和产品动作才真正有了执行土壤。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "真正的战略下注，一定伴随着资源重配和长期耐心",
                "body": "不是看到机会就够了，而是要有能力把资源集中到你真正相信的未来上。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "技术价值最终要落到产品和生态",
                "body": "只有当技术真正进入用户工作流，并进一步沉淀成平台能力，转型才算真正做深。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组组织与领导力框架学完整。", meta: ["当前完成：AI时代领导力 13/14", "建议下一节：案例：一家企业如何真正把 AI 用起来", '也可以先整理这一节'], nextHref: "./lesson-leadership-14.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-leadership.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'leadership', lessonId: "leadership-13", modulePage: 'module-leadership.html', progressNamespace: 'leadership', progressLessonKey: "lesson13", audioSource: './assets/audio/leadership-ep60-case-nadella.mp3?v=20260412-leadership-13a', vttSrc: './assets/subtitles/leadership-ep60-case-nadella.vtt?v=20260412-leadership-13a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-leadership-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "leadership-ep60-case-nadella/slide_01.png",
            "label": "案例：纳德拉如何重塑微软",
            "caption": "这一节会帮助你系统理解：案例：纳德拉如何重塑微软"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_02.png",
            "label": "先看为什么这个案例值得学",
            "caption": "大家好，我是 Lincoln。 欢迎来到 MindsLeap 商学院。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_03.png",
            "label": "文化重塑",
            "caption": "文化不是附属动作，而是微软转型真正开始的地方。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_04.png",
            "label": "战略重心转移",
            "caption": "战略真正困难的地方，不在于看见趋势，而在于敢不敢重新分配资源。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_05.png",
            "label": "产品化落地",
            "caption": "很多技术转型失败，不是因为技术不行，而是因为没有真正变成用户愿意用的产品。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_06.png",
            "label": "生态系统建设",
            "caption": "单点产品能赢一时，平台和生态才决定企业能不能持续放大价值。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_07.png",
            "label": "五个领导力教训",
            "caption": "案例真正值得学的，不是微软有多大，而是领导动作为什么能一层层接上。"
        },
        {
            "file": "leadership-ep60-case-nadella/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.12,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.34,
            "end": 2.82,
            "text": "欢迎来到 MindsLeap 商学院。"
        },
        {
            "start": 2.82,
            "end": 5.46,
            "text": "今天这一节，我们来看一个非常重要的案例。"
        },
        {
            "start": 5.46,
            "end": 7.78,
            "text": "纳德拉是怎么带领微软，"
        },
        {
            "start": 7.78,
            "end": 11.38,
            "text": "从一家被很多人觉得已经失去锋芒的大公司，"
        },
        {
            "start": 11.38,
            "end": 14.62,
            "text": "重新变成 AI 时代最强的领先者之一。"
        },
        {
            "start": 14.62,
            "end": 17.96,
            "text": "这个案例之所以值得看，不只是因为微软成功了。"
        },
        {
            "start": 17.96,
            "end": 19.04,
            "text": "更重要的是，"
        },
        {
            "start": 19.04,
            "end": 23.88,
            "text": "它几乎完整展示了一个领导者在大转型里最该做的几件事。"
        },
        {
            "start": 23.88,
            "end": 27.9,
            "text": "文化怎么改，战略怎么转，产品怎么落地，生态怎么建。"
        },
        {
            "start": 27.9,
            "end": 30.3,
            "text": "这些动作在纳德拉身上都非常完整。"
        },
        {
            "start": 30.3,
            "end": 32.45333333333333,
            "text": "先看第一步，文化重塑。"
        },
        {
            "start": 32.45333333333333,
            "end": 35.26,
            "text": "纳德拉上任以后，最先动的不是产品线。"
        },
        {
            "start": 35.26,
            "end": 36.12,
            "text": "而是文化。"
        },
        {
            "start": 36.12,
            "end": 38.04,
            "text": "他提出了一个非常重要的转变。"
        },
        {
            "start": 38.04,
            "end": 41.26,
            "text": "从“我什么都知道”，转向“我什么都愿意学”。"
        },
        {
            "start": 41.26,
            "end": 43.12,
            "text": "这件事听起来像一句口号。"
        },
        {
            "start": 43.16,
            "end": 46.24,
            "text": "但它打中的，其实是微软当时最深层的问题。"
        },
        {
            "start": 46.24,
            "end": 47.92,
            "text": "那就是内部竞争太强，"
        },
        {
            "start": 47.92,
            "end": 49.52,
            "text": "部门之间边界太重，"
        },
        {
            "start": 49.56,
            "end": 51.74,
            "text": "很多人更关心证明自己是对的，"
        },
        {
            "start": 51.74,
            "end": 53.5,
            "text": "而不是一起把事情做好。"
        },
        {
            "start": 53.5,
            "end": 57.26,
            "text": "文化不改，后面的战略再好，也很难真正被组织执行。"
        },
        {
            "start": 57.26,
            "end": 59.18,
            "text": "纳德拉做了几件很关键的事。"
        },
        {
            "start": 59.18,
            "end": 60.58,
            "text": "第一，他自己先示范。"
        },
        {
            "start": 60.58,
            "end": 64.52,
            "text": "他公开承认微软过去错过了移动互联网和云早期窗口。"
        },
        {
            "start": 64.52,
            "end": 67.98,
            "text": "他愿意承认不足，这会给组织一个非常强的信号。"
        },
        {
            "start": 67.98,
            "end": 72.22,
            "text": "原来承认不知道、承认没做好，不是软弱，而是被鼓励的。"
        },
        {
            "start": 72.22,
            "end": 74.24,
            "text": "第二，他推动绩效逻辑的变化。"
        },
        {
            "start": 74.24,
            "end": 76.28,
            "text": "不再只看你个人做成了什么。"
        },
        {
            "start": 76.28,
            "end": 78.44,
            "text": "还要看你有没有帮助别人成功。"
        },
        {
            "start": 78.44,
            "end": 80.72,
            "text": "这其实是在重写组织行为。"
        },
        {
            "start": 80.72,
            "end": 83.74,
            "text": "第三，他把成长型思维真正带进微软。"
        },
        {
            "start": 83.74,
            "end": 85.52,
            "text": "也就是让整个组织相信，"
        },
        {
            "start": 85.52,
            "end": 87.04,
            "text": "能力不是固定的，"
        },
        {
            "start": 87.04,
            "end": 89.18,
            "text": "是可以持续学习和升级的。"
        },
        {
            "start": 89.18,
            "end": 91.24,
            "text": "第二步，是战略重心转移。"
        },
        {
            "start": 91.24,
            "end": 95.42,
            "text": "纳德拉非常果断地把微软的资源往云和 AI 上集中。"
        },
        {
            "start": 95.42,
            "end": 97.78,
            "text": "这不是一句“我们也重视 AI”那么简单。"
        },
        {
            "start": 97.78,
            "end": 98.96,
            "text": "真正难的是，"
        },
        {
            "start": 98.96,
            "end": 101.26,
            "text": "你要把资源从旧业务里抽出来，"
        },
        {
            "start": 101.26,
            "end": 103.4,
            "text": "压到你真正相信的未来上。"
        },
        {
            "start": 103.4,
            "end": 107.3,
            "text": "这意味着有些过去重要的东西，要被弱化，甚至被放弃。"
        },
        {
            "start": 107.3,
            "end": 109.66,
            "text": "而这正是领导者最难的动作之一。"
        },
        {
            "start": 109.66,
            "end": 112.78,
            "text": "其中最关键的战略下注之一，就是投资 OpenAI。"
        },
        {
            "start": 112.78,
            "end": 115.38,
            "text": "在当时，这并不是一个没有争议的选择。"
        },
        {
            "start": 115.38,
            "end": 117.22,
            "text": "它需要远见，也需要耐心。"
        },
        {
            "start": 117.22,
            "end": 119.52,
            "text": "因为真正的结果，不会立刻发生。"
        },
        {
            "start": 119.52,
            "end": 121.54,
            "text": "但纳德拉看到了一个更大的判断。"
        },
        {
            "start": 121.54,
            "end": 123.24,
            "text": "AI 不是某个功能升级。"
        },
        {
            "start": 123.24,
            "end": 126.02,
            "text": "它很可能是下一代计算平台级别的变化。"
        },
        {
            "start": 126.02,
            "end": 129.74,
            "text": "如果这个判断成立，微软必须提前站到那个位置上。"
        },
        {
            "start": 129.74,
            "end": 131.44,
            "text": "第三步，是产品化落地。"
        },
        {
            "start": 131.44,
            "end": 134.2,
            "text": "很多企业的问题不是看不到技术趋势。"
        },
        {
            "start": 134.2,
            "end": 135.62,
            "text": "而是技术买回来了，"
        },
        {
            "start": 135.62,
            "end": 137.7,
            "text": "却没有真正变成用户愿意用、"
        },
        {
            "start": 137.7,
            "end": 138.96,
            "text": "愿意付费的产品。"
        },
        {
            "start": 138.96,
            "end": 140.9,
            "text": "纳德拉在这一步做得非常聪明。"
        },
        {
            "start": 140.9,
            "end": 143.72,
            "text": "他没有把 AI 只做成一个独立的新玩具。"
        },
        {
            "start": 143.72,
            "end": 147.0,
            "text": "而是把 AI 嵌进微软原本最核心的产品里。"
        },
        {
            "start": 147.0,
            "end": 150.48,
            "text": "比如办公软件、搜索、开发工具、企业云服务。"
        },
        {
            "start": 150.48,
            "end": 154.2,
            "text": "这样一来，用户不需要先学会一个完全陌生的新系统。"
        },
        {
            "start": 154.2,
            "end": 157.02,
            "text": "AI 是顺着原来的工作流进入的。"
        },
        {
            "start": 157.02,
            "end": 159.58,
            "text": "这背后其实体现了一个很重要的产品判断。"
        },
        {
            "start": 159.58,
            "end": 161.42,
            "text": "不要让用户去找技术。"
        },
        {
            "start": 161.42,
            "end": 164.9,
            "text": "而要让技术主动进入用户已经在做的事情里。"
        },
        {
            "start": 164.9,
            "end": 166.88,
            "text": "这会大大降低 adoption 的阻力。"
        },
        {
            "start": 166.88,
            "end": 169.02,
            "text": "第四步，是生态系统建设。"
        },
        {
            "start": 169.02,
            "end": 172.62,
            "text": "纳德拉没有把 AI 只理解成微软自己的一个产品机会。"
        },
        {
            "start": 172.62,
            "end": 174.96,
            "text": "他更进一步，把它做成了平台机会。"
        },
        {
            "start": 175.34,
            "end": 177.38,
            "text": "也就是说，不只是微软自己用 AI。"
        },
        {
            "start": 177.38,
            "end": 179.06,
            "text": "而是开发者、合作伙伴、"
        },
        {
            "start": 179.06,
            "end": 182.46,
            "text": "企业客户都可以在微软的平台上构建自己的 AI 能力。"
        },
        {
            "start": 182.46,
            "end": 183.78,
            "text": "这一步非常重要。"
        },
        {
            "start": 183.78,
            "end": 185.92,
            "text": "因为它让微软不只是卖工具。"
        },
        {
            "start": 185.92,
            "end": 188.92,
            "text": "而是成为了 AI 基础设施和生态的提供方。"
        },
        {
            "start": 188.92,
            "end": 192.28,
            "text": "谁在这个生态上成功，微软就能从中持续受益。"
        },
        {
            "start": 192.28,
            "end": 194.5,
            "text": "这比单一产品的价值要大得多。"
        },
        {
            "start": 194.5,
            "end": 196.12,
            "text": "如果把这个案例往回收，"
        },
        {
            "start": 196.12,
            "end": 198.7,
            "text": "我们会看到几个非常清楚的领导力教训。"
        },
        {
            "start": 198.7,
            "end": 200.54,
            "text": "第一，文化先于战略。"
        },
        {
            "start": 200.54,
            "end": 204.3,
            "text": "不是先把战略写出来，再希望组织自己适应。"
        },
        {
            "start": 204.3,
            "end": 206.46,
            "text": "而是先把组织的学习方式、"
        },
        {
            "start": 206.46,
            "end": 209.12,
            "text": "合作方式和行为方式重写，"
        },
        {
            "start": 209.12,
            "end": 211.12,
            "text": "战略才有真正落地的土壤。"
        },
        {
            "start": 211.12,
            "end": 213.38,
            "text": "第二，领导者必须亲自示范。"
        },
        {
            "start": 213.38,
            "end": 215.74,
            "text": "纳德拉不是站在外面点评变化。"
        },
        {
            "start": 215.74,
            "end": 217.56,
            "text": "他自己就是变化的一部分。"
        },
        {
            "start": 217.56,
            "end": 221.56,
            "text": "第三，真正的战略转型，一定伴随着资源重配和取舍。"
        },
        {
            "start": 221.56,
            "end": 223.78,
            "text": "不是所有方向都要一起做。"
        },
        {
            "start": 223.78,
            "end": 227.52,
            "text": "而是你必须足够清楚，未来真正值得压注的是什么。"
        },
        {
            "start": 227.52,
            "end": 230.5,
            "text": "第四，技术只有变成用户愿意用的产品，"
        },
        {
            "start": 230.5,
            "end": 232.22,
            "text": "才算真正创造了价值。"
        },
        {
            "start": 232.22,
            "end": 234.1,
            "text": "第五，单点产品不够，"
        },
        {
            "start": 234.1,
            "end": 236.48,
            "text": "真正强的企业会进一步构建生态，"
        },
        {
            "start": 236.48,
            "end": 237.76,
            "text": "让自己成为平台。"
        },
        {
            "start": 237.76,
            "end": 239.12,
            "text": "好，我们来收一下。"
        },
        {
            "start": 239.12,
            "end": 241.82,
            "text": "今天这节课，你最需要带走三件事。"
        },
        {
            "start": 241.82,
            "end": 243.94,
            "text": "第一，纳德拉带领微软转型，"
        },
        {
            "start": 243.94,
            "end": 246.86,
            "text": "最关键的四步是文化重塑、战略转移、"
        },
        {
            "start": 246.86,
            "end": 248.54,
            "text": "产品化落地和生态建设。"
        },
        {
            "start": 248.54,
            "end": 250.56,
            "text": "第二，这个案例再次说明，"
        },
        {
            "start": 250.56,
            "end": 251.92,
            "text": "文化不是附属品，"
        },
        {
            "start": 251.92,
            "end": 253.7,
            "text": "而是转型真正开始的地方。"
        },
        {
            "start": 254.12,
            "end": 256.26,
            "text": "第三，领导者最重要的工作，"
        },
        {
            "start": 256.26,
            "end": 257.74,
            "text": "不只是看见趋势，"
        },
        {
            "start": 257.74,
            "end": 260.02,
            "text": "而是把趋势变成组织能力、"
        },
        {
            "start": 260.02,
            "end": 261.96,
            "text": "产品能力和平台能力。"
        },
        {
            "start": 261.96,
            "end": 265.2,
            "text": "如果你愿意，听完这一节以后，你可以先做一个动作。"
        },
        {
            "start": 265.2,
            "end": 267.08,
            "text": "想一想你自己的组织，"
        },
        {
            "start": 267.08,
            "end": 269.46,
            "text": "如果要完成一次真正的 AI 转型，"
        },
        {
            "start": 269.46,
            "end": 272.74,
            "text": "最应该先动的，是文化、战略、产品，"
        },
        {
            "start": 272.74,
            "end": 273.58,
            "text": "还是生态。"
        },
        {
            "start": 273.58,
            "end": 276.28,
            "text": "你会发现，很多转型推不动，"
        },
        {
            "start": 276.28,
            "end": 277.74,
            "text": "不是因为没有机会，"
        },
        {
            "start": 277.74,
            "end": 280.68,
            "text": "而是因为领导动作的顺序出了问题。"
        },
        {
            "start": 281.14000000000004,
            "end": 281.84,
            "text": "我是 Lincoln。"
        },
        {
            "start": 281.84,
            "end": 283.98,
            "text": "我们下一节，继续看最后一个案例，"
        },
        {
            "start": 283.98,
            "end": 286.44,
            "text": "看看一家企业真正把 AI 用起来时，"
        },
        {
            "start": 286.44,
            "end": 287.74,
            "text": "会经历什么样的路径。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.82,
        "index": 0
    },
    {
        "start": 2.82,
        "end": 30.3,
        "index": 1
    },
    {
        "start": 30.3,
        "end": 89.18,
        "index": 2
    },
    {
        "start": 89.18,
        "end": 129.74,
        "index": 3
    },
    {
        "start": 129.74,
        "end": 166.88,
        "index": 4
    },
    {
        "start": 166.88,
        "end": 194.5,
        "index": 5
    },
    {
        "start": 194.5,
        "end": 239.12,
        "index": 6
    },
    {
        "start": 239.12,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-leadership-14.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的组织与领导力判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从微软的转型看领导者如何同时推动文化重建、战略重构与组织能力升级。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是组织判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的组织判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-leadership-14.html?entry={entry}", secondaryHref: "./lesson-leadership-14.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-leadership-13", coachSource: "./ai-coach.html?source=lesson-leadership-13" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：纳德拉如何重塑微软的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：纳德拉如何重塑微软", module: 'AI时代领导力' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-leadership-14.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-leadership.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
