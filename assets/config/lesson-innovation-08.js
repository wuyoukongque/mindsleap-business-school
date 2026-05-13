(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第8课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第8课：失败管理：从失败中提取价值",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep81-failure-management/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：失败管理：从失败中提取价值", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-09.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "颠覆式创新：AI 如何加速颠覆周期",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "设计思维：AI 如何增强每一步",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "精益创业：AI 时代的 MVP 更快更便宜",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "第一性原理思维：AI 时代的创新基础",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 原生创业：从第一天就用 AI 构建",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "产品市场匹配：AI 产品的 PMF 有什么不同",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "从零到一：AI 时代的创业路径",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：Midjourney——四个人如何做出十亿美金公司",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 10,
                "title": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "案例：传统行业加 AI 的成功转型",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "你的创新工作坊：用 AI 设计一个创新实验",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-innovation-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把创新问题讲清楚",
                "body": "创新不是追热点，而是重新理解客户、技术、成本和组织能力之间的新组合。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 让试错更快，但也要求判断更稳",
                "body": "速度变快以后，真正稀缺的不是想法数量，而是筛选、验证和复盘能力。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "用小实验替代大口号",
                "body": "每一节课都要落到一个可执行、可衡量、可复盘的创新动作上。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 8/12", "建议下一节：案例：Midjourney——四个人如何做出十亿美金公司", '也可以先整理这一节'], nextHref: "./lesson-innovation-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-08", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson8", audioSource: './assets/audio/innovation-ep81-failure-management.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep81-failure-management.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep81-failure-management/slide_01.png",
            "label": "失败管理：从失败中提取价值",
            "caption": "这一节会帮助你系统理解：失败管理：从失败中提取价值"
        },
        {
            "file": "innovation-ep81-failure-management/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "坏的失败是什么？ 就是反复犯同样的错误、在明显有问题的方向上投入了过多的时间和资源、失败之后没有任何总结和反思。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_04.png",
            "label": "关键判断一",
            "caption": "为什么需求变更了？ 因为上线前客户反馈跟最初的需求不一致。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_05.png",
            "label": "关键判断二",
            "caption": "让 AI 先做一个客观的分析，然后团队在此基础上讨论，可以大幅减少情绪干扰。 第三个价值：经验沉淀和复用。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "草率的失败是：没有做调研、没有做计划、犯了一些低级错误导致的失败。 这种失败不应该被容忍。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_07.png",
            "label": "本节行动提示",
            "caption": "用百分之七十的资源做。 这是在现有业务基础上的改善和优化。"
        },
        {
            "file": "innovation-ep81-failure-management/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.72,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 2.2,
            "end": 4.14,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.14,
            "end": 8.94,
            "text": "今天聊一个大家不太喜欢但非常重要的话题：失败管理。"
        },
        {
            "start": 8.94,
            "end": 13.2,
            "text": "创新和创业本质上就是一个高失败率的过程。"
        },
        {
            "start": 13.2,
            "end": 17.96,
            "text": "硅谷有一个数据，大约百分之九十的创业公司会失败。"
        },
        {
            "start": 18.58,
            "end": 21.8,
            "text": "即使在成功的公司里，大部分的新产品、"
        },
        {
            "start": 21.94,
            "end": 23.9,
            "text": "新功能、新实验也会失败。"
        },
        {
            "start": 23.9,
            "end": 28.18,
            "text": "失败不可怕，可怕的是从失败中什么都没学到。"
        },
        {
            "start": 28.18,
            "end": 32.32,
            "text": "或者更糟的是，因为害怕失败而不敢尝试。"
        },
        {
            "start": 33.02,
            "end": 35.84,
            "text": "今天我们来聊怎么系统地管理失败、"
        },
        {
            "start": 36.06,
            "end": 38.46,
            "text": "从失败中提取最大的价值。"
        },
        {
            "start": 38.46,
            "end": 42.74,
            "text": "先聊一个认知问题：什么样的失败是\"好的失败\"？"
        },
        {
            "start": 42.74,
            "end": 44.86,
            "text": "不是所有的失败都一样。"
        },
        {
            "start": 44.86,
            "end": 47.52,
            "text": "有些失败有价值，有些没有。"
        },
        {
            "start": 47.52,
            "end": 49.56,
            "text": "好的失败有三个特征。"
        },
        {
            "start": 49.56,
            "end": 52.22,
            "text": "第一，它验证了一个明确的假设。"
        },
        {
            "start": 52.22,
            "end": 56.74,
            "text": "你清楚地知道你在测试什么，失败了说明这个假设不成立。"
        },
        {
            "start": 56.74,
            "end": 58.16,
            "text": "你排除了一个方向。"
        },
        {
            "start": 58.6,
            "end": 61.54,
            "text": "第二，它发生得足够早、成本足够低。"
        },
        {
            "start": 61.54,
            "end": 65.58,
            "text": "在你只花了一周和几千块的时候发现方向错了，"
        },
        {
            "start": 65.58,
            "end": 68.98,
            "text": "比在你花了半年和几十万之后才发现好得多。"
        },
        {
            "start": 69.41999999999999,
            "end": 71.64,
            "text": "第三，它产生了可复用的知识。"
        },
        {
            "start": 71.64,
            "end": 74.06,
            "text": "你从这次失败中学到了什么？"
        },
        {
            "start": 74.06,
            "end": 78.08,
            "text": "这个知识能帮你在下一次尝试中做得更好吗？"
        },
        {
            "start": 78.08,
            "end": 79.38,
            "text": "坏的失败是什么？"
        },
        {
            "start": 79.38,
            "end": 82.1,
            "text": "就是反复犯同样的错误、"
        },
        {
            "start": 82.1,
            "end": 86.42,
            "text": "在明显有问题的方向上投入了过多的时间和资源、"
        },
        {
            "start": 86.42,
            "end": 89.62,
            "text": "失败之后没有任何总结和反思。"
        },
        {
            "start": 89.62,
            "end": 92.32,
            "text": "精益创业之所以强调\"快速试错\"，"
        },
        {
            "start": 92.32,
            "end": 95.24,
            "text": "核心就是让失败发生得早、成本低、"
        },
        {
            "start": 95.4,
            "end": 96.24,
            "text": "学习多。"
        },
        {
            "start": 96.24,
            "end": 99.04,
            "text": "好，怎么从失败中系统地提取价值？"
        },
        {
            "start": 99.04,
            "end": 100.86,
            "text": "我教你一个复盘方法论。"
        },
        {
            "start": 100.86,
            "end": 103.34,
            "text": "复盘是中国围棋的概念。"
        },
        {
            "start": 103.34,
            "end": 106.7,
            "text": "下完一盘棋之后，把整个过程重新走一遍。"
        },
        {
            "start": 106.7,
            "end": 108.08,
            "text": "哪一步走得好？"
        },
        {
            "start": 108.16,
            "end": 109.34,
            "text": "哪一步走错了？"
        },
        {
            "start": 109.34,
            "end": 111.58,
            "text": "如果重新来一次会怎么走？"
        },
        {
            "start": 111.58,
            "end": 114.22,
            "text": "商业复盘的逻辑是一样的。"
        },
        {
            "start": 114.22,
            "end": 118.36,
            "text": "一个项目或者一次尝试结束之后，系统地回顾整个过程。"
        },
        {
            "start": 118.36,
            "end": 120.2,
            "text": "复盘有四个步骤。"
        },
        {
            "start": 120.2,
            "end": 121.72,
            "text": "第一步：回顾目标。"
        },
        {
            "start": 121.72,
            "end": 123.72,
            "text": "当初设定的目标是什么？"
        },
        {
            "start": 123.72,
            "end": 125.38,
            "text": "期望达到什么结果？"
        },
        {
            "start": 125.38,
            "end": 127.46,
            "text": "第二步：评估结果。"
        },
        {
            "start": 127.46,
            "end": 128.74,
            "text": "实际结果是什么？"
        },
        {
            "start": 128.74,
            "end": 130.34,
            "text": "跟目标的差距有多大？"
        },
        {
            "start": 130.36,
            "end": 131.34,
            "text": "差在哪里？"
        },
        {
            "start": 131.34,
            "end": 132.7,
            "text": "第三步：分析原因。"
        },
        {
            "start": 132.7,
            "end": 134.74,
            "text": "为什么出现了这个差距？"
        },
        {
            "start": 134.74,
            "end": 135.82,
            "text": "哪些做得好？"
        },
        {
            "start": 135.82,
            "end": 136.74,
            "text": "哪些做得不好？"
        },
        {
            "start": 136.74,
            "end": 138.24,
            "text": "根本原因是什么？"
        },
        {
            "start": 138.24,
            "end": 142.36,
            "text": "分析原因的时候有一个非常有用的方法叫\"五个为什么\"。"
        },
        {
            "start": 142.36,
            "end": 146.02,
            "text": "连续问五次\"为什么\"，可以帮你找到根本原因。"
        },
        {
            "start": 146.02,
            "end": 148.02,
            "text": "比如：项目延期了。"
        },
        {
            "start": 148.02,
            "end": 148.36,
            "text": "为什么？"
        },
        {
            "start": 148.36,
            "end": 149.98,
            "text": "因为开发进度慢了。"
        },
        {
            "start": 149.98,
            "end": 151.58,
            "text": "为什么开发进度慢了？"
        },
        {
            "start": 151.58,
            "end": 153.54,
            "text": "因为中途需求变更了。"
        },
        {
            "start": 153.54,
            "end": 154.92,
            "text": "为什么需求变更了？"
        },
        {
            "start": 154.92,
            "end": 158.58,
            "text": "因为上线前客户反馈跟最初的需求不一致。"
        },
        {
            "start": 159.1,
            "end": 159.96,
            "text": "为什么不一致？"
        },
        {
            "start": 159.96,
            "end": 162.5,
            "text": "因为最初没有做充分的用户调研。"
        },
        {
            "start": 162.5,
            "end": 163.58,
            "text": "为什么没做？"
        },
        {
            "start": 163.58,
            "end": 165.78,
            "text": "因为急着赶时间跳过了这一步。"
        },
        {
            "start": 165.78,
            "end": 167.32,
            "text": "根本原因找到了："
        },
        {
            "start": 167.32,
            "end": 170.44,
            "text": "在项目初期没有花足够的时间做用户调研。"
        },
        {
            "start": 170.44,
            "end": 172.14,
            "text": "第四步：提炼经验。"
        },
        {
            "start": 172.14,
            "end": 176.3,
            "text": "从这次复盘中，你提炼出了什么可复用的经验或原则？"
        },
        {
            "start": 176.3,
            "end": 178.68,
            "text": "怎么确保下次不犯同样的错误？"
        },
        {
            "start": 178.68,
            "end": 180.84,
            "text": "AI 怎么帮你做更好的复盘？"
        },
        {
            "start": 180.84,
            "end": 183.44,
            "text": "AI 在复盘中有三个独特的价值。"
        },
        {
            "start": 183.98,
            "end": 186.22,
            "text": "第一个价值：全面的数据分析。"
        },
        {
            "start": 186.22,
            "end": 188.16,
            "text": "人做复盘的时候，"
        },
        {
            "start": 188.16,
            "end": 193.0,
            "text": "很容易受到\"幸存者偏差\"和\"后见之明偏差\"的影响。"
        },
        {
            "start": 193.0,
            "end": 195.56,
            "text": "你会记住那些印象深刻的事情，"
        },
        {
            "start": 195.56,
            "end": 198.12,
            "text": "忽略那些不起眼但很重要的因素。"
        },
        {
            "start": 198.12,
            "end": 201.2,
            "text": "AI 可以把所有的相关数据都拿出来分析。"
        },
        {
            "start": 201.2,
            "end": 204.48,
            "text": "项目日志、沟通记录、数据指标、时间线。"
        },
        {
            "start": 204.48,
            "end": 207.3,
            "text": "从数据中找到你可能忽略的关键因素。"
        },
        {
            "start": 207.3,
            "end": 209.82,
            "text": "第二个价值：减少情绪干扰。"
        },
        {
            "start": 209.82,
            "end": 212.74,
            "text": "人在复盘的时候容易有情绪。"
        },
        {
            "start": 212.74,
            "end": 216.88,
            "text": "做错事的人会为自己辩解，其他人可能会指责。"
        },
        {
            "start": 216.88,
            "end": 220.54,
            "text": "复盘变成了\"追责会\"，而不是\"学习会\"。"
        },
        {
            "start": 220.54,
            "end": 222.18,
            "text": "AI 是客观的。"
        },
        {
            "start": 222.18,
            "end": 224.74,
            "text": "它不会指责谁，也不会为谁辩解。"
        },
        {
            "start": 224.74,
            "end": 226.7,
            "text": "它只看数据和事实。"
        },
        {
            "start": 226.7,
            "end": 229.16,
            "text": "让 AI 先做一个客观的分析，"
        },
        {
            "start": 229.16,
            "end": 231.76,
            "text": "然后团队在此基础上讨论，"
        },
        {
            "start": 231.76,
            "end": 233.9,
            "text": "可以大幅减少情绪干扰。"
        },
        {
            "start": 234.42000000000002,
            "end": 236.8,
            "text": "第三个价值：经验沉淀和复用。"
        },
        {
            "start": 236.8,
            "end": 239.28,
            "text": "复盘的最大价值是积累组织智慧。"
        },
        {
            "start": 239.28,
            "end": 244.02,
            "text": "但传统的复盘报告写完就存档了，很少有人再看。"
        },
        {
            "start": 244.02,
            "end": 247.66,
            "text": "AI 可以把每次复盘的经验沉淀到知识库中。"
        },
        {
            "start": 247.66,
            "end": 251.84,
            "text": "下次做类似的项目，AI 自动推送相关的历史经验。"
        },
        {
            "start": 251.84,
            "end": 255.42,
            "text": "\"你正在做的这个项目跟去年的某个项目很像。"
        },
        {
            "start": 255.42,
            "end": 259.0,
            "text": "那个项目犯了这些错误，建议你注意这几个风险点。"
        },
        {
            "start": 259.0,
            "end": 259.42,
            "text": "\""
        },
        {
            "start": 259.42,
            "end": 259.58,
            "text": "这样，"
        },
        {
            "start": 259.58,
            "end": 262.44,
            "text": "失败的经验就真正变成了组织的资产，"
        },
        {
            "start": 262.44,
            "end": 264.46,
            "text": "而不是一份没人看的报告。"
        },
        {
            "start": 264.46,
            "end": 269.32,
            "text": "讲一个更大的话题：怎么在组织中建立容忍失败的文化。"
        },
        {
            "start": 269.32,
            "end": 271.9,
            "text": "很多企业嘴上说\"鼓励创新、"
        },
        {
            "start": 271.9,
            "end": 272.66,
            "text": "容忍失败\"，"
        },
        {
            "start": 272.66,
            "end": 275.36,
            "text": "但实际上失败了还是会被惩罚。"
        },
        {
            "start": 275.36,
            "end": 280.04,
            "text": "做一个新项目失败了，绩效打差、奖金减少、升职没戏。"
        },
        {
            "start": 280.04,
            "end": 282.34,
            "text": "在这种环境下，谁还敢创新？"
        },
        {
            "start": 282.34,
            "end": 284.74,
            "text": "怎么建立真正的容错文化？"
        },
        {
            "start": 284.74,
            "end": 288.0,
            "text": "第一，区分\"聪明的失败\"和\"草率的失败\"。"
        },
        {
            "start": 288.56,
            "end": 290.67999999999995,
            "text": "聪明的失败是：经过深思熟虑、"
        },
        {
            "start": 290.68,
            "end": 291.74,
            "text": "做了充分的准备、"
        },
        {
            "start": 291.74,
            "end": 294.4,
            "text": "用最小的成本测试了一个有价值的假设，"
        },
        {
            "start": 294.4,
            "end": 295.94,
            "text": "结果假设不成立。"
        },
        {
            "start": 295.94,
            "end": 298.5,
            "text": "这种失败应该被奖励而不是惩罚。"
        },
        {
            "start": 299.08,
            "end": 300.92,
            "text": "草率的失败是：没有做调研、"
        },
        {
            "start": 300.92,
            "end": 301.8,
            "text": "没有做计划、"
        },
        {
            "start": 301.8,
            "end": 303.9,
            "text": "犯了一些低级错误导致的失败。"
        },
        {
            "start": 303.9,
            "end": 305.98,
            "text": "这种失败不应该被容忍。"
        },
        {
            "start": 305.98,
            "end": 308.98,
            "text": "第二，奖励学习而不只是奖励结果。"
        },
        {
            "start": 309.36,
            "end": 310.68,
            "text": "在绩效评估中，"
        },
        {
            "start": 310.68,
            "end": 313.02,
            "text": "不只是看\"项目成功了没有\"，"
        },
        {
            "start": 313.02,
            "end": 316.16,
            "text": "还要看\"你从这个项目中学到了什么\"。"
        },
        {
            "start": 316.16,
            "end": 320.18,
            "text": "一个项目失败了但团队学到了非常有价值的经验，"
        },
        {
            "start": 320.18,
            "end": 324.02,
            "text": "这比一个侥幸成功但什么都没学到的项目更有价值。"
        },
        {
            "start": 324.48,
            "end": 327.52,
            "text": "第三，领导者带头分享自己的失败。"
        },
        {
            "start": 328.3,
            "end": 332.36,
            "text": "如果老板从来不承认自己的失败，下面的人也不会。"
        },
        {
            "start": 332.36,
            "end": 336.58,
            "text": "领导者主动分享自己犯过的错误和学到的教训，"
        },
        {
            "start": 336.58,
            "end": 339.88,
            "text": "可以极大地降低团队对失败的恐惧。"
        },
        {
            "start": 339.88,
            "end": 344.68,
            "text": "第四，让复盘成为日常流程而不是特殊事件。"
        },
        {
            "start": 344.68,
            "end": 347.62,
            "text": "不要只在项目失败的时候才复盘。"
        },
        {
            "start": 347.62,
            "end": 349.56,
            "text": "成功的项目也要复盘。"
        },
        {
            "start": 349.56,
            "end": 351.64,
            "text": "每个冲刺结束都复盘。"
        },
        {
            "start": 351.64,
            "end": 354.38,
            "text": "让复盘成为一个正常的工作流程，"
        },
        {
            "start": 354.38,
            "end": 356.84,
            "text": "而不是\"出了事才开的追责会\"。"
        },
        {
            "start": 356.84,
            "end": 360.08,
            "text": "最后讲一个概念：失败的投资组合。"
        },
        {
            "start": 360.08,
            "end": 363.3,
            "text": "就像投资一样，创新也需要\"投资组合\"思维。"
        },
        {
            "start": 363.3,
            "end": 366.48,
            "text": "你不应该把所有资源押在一个创新项目上。"
        },
        {
            "start": 366.48,
            "end": 370.28,
            "text": "你应该同时投资多个方向，接受其中大部分会失败。"
        },
        {
            "start": 370.28,
            "end": 371.62,
            "text": "具体怎么做？"
        },
        {
            "start": 371.62,
            "end": 373.9,
            "text": "把你的创新资源分成三类。"
        },
        {
            "start": 373.9,
            "end": 375.84,
            "text": "第一类，核心创新。"
        },
        {
            "start": 375.84,
            "end": 378.08,
            "text": "用百分之七十的资源做。"
        },
        {
            "start": 378.08,
            "end": 381.4,
            "text": "这是在现有业务基础上的改善和优化。"
        },
        {
            "start": 381.4,
            "end": 383.7,
            "text": "成功率高但回报有限。"
        },
        {
            "start": 383.7,
            "end": 385.38,
            "text": "第二类，相邻创新。"
        },
        {
            "start": 385.38,
            "end": 387.36,
            "text": "用百分之二十的资源做。"
        },
        {
            "start": 387.36,
            "end": 391.12,
            "text": "这是进入相邻市场或者用新技术做现有业务。"
        },
        {
            "start": 391.12,
            "end": 393.4,
            "text": "成功率中等，回报也中等。"
        },
        {
            "start": 393.4,
            "end": 395.14,
            "text": "第三类，突破性创新。"
        },
        {
            "start": 395.14,
            "end": 396.9,
            "text": "用百分之十的资源做。"
        },
        {
            "start": 396.9,
            "end": 398.56,
            "text": "这是完全新的方向。"
        },
        {
            "start": 398.56,
            "end": 401.34,
            "text": "成功率很低但一旦成功回报巨大。"
        },
        {
            "start": 401.76000000000005,
            "end": 404.06,
            "text": "这个\"七二一\"的比例不是死板的，"
        },
        {
            "start": 404.06,
            "end": 406.6,
            "text": "可以根据你的行业和风险承受能力调整。"
        },
        {
            "start": 406.6,
            "end": 410.34,
            "text": "但核心理念是：不要指望每次创新都成功。"
        },
        {
            "start": 410.34,
            "end": 415.08,
            "text": "用投资组合的方式来管理创新，总体上收益就是正的。"
        },
        {
            "start": 415.08,
            "end": 416.38,
            "text": "好，总结一下。"
        },
        {
            "start": 416.38,
            "end": 419.56,
            "text": "好的失败三特征：验证了明确假设、"
        },
        {
            "start": 419.56,
            "end": 422.56,
            "text": "发生得早成本低、产生了可复用知识。"
        },
        {
            "start": 422.56,
            "end": 425.6,
            "text": "复盘四步法：回顾目标、评估结果、"
        },
        {
            "start": 425.6,
            "end": 428.28,
            "text": "分析原因（五个为什么）、提炼经验。"
        },
        {
            "start": 428.28,
            "end": 431.1,
            "text": "AI 帮助复盘：全面数据分析、"
        },
        {
            "start": 431.1,
            "end": 433.96,
            "text": "减少情绪干扰、经验沉淀复用。"
        },
        {
            "start": 433.96,
            "end": 435.52,
            "text": "容错文化四要素："
        },
        {
            "start": 435.52,
            "end": 438.72,
            "text": "区分聪明和草率的失败、奖励学习、"
        },
        {
            "start": 438.72,
            "end": 441.0,
            "text": "领导者带头、复盘日常化。"
        },
        {
            "start": 441.0,
            "end": 443.98,
            "text": "创新投资组合：\"七二一\"资源分配。"
        },
        {
            "start": 443.98,
            "end": 446.24,
            "text": "下一期我们看一个精彩案例："
        },
        {
            "start": 446.24,
            "end": 450.28,
            "text": "Midjourney 是怎么用四个人做出一个价值十亿美金的公司的。"
        },
        {
            "start": 450.28,
            "end": 452.24,
            "text": "我是 Lincoln，我们下期见。"
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
], navigation: { nextLessonUrl: "./lesson-innovation-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-09.html?entry={entry}", secondaryHref: "./lesson-innovation-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-08", coachSource: "./ai-coach.html?source=lesson-innovation-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于失败管理：从失败中提取价值的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "失败管理：从失败中提取价值", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
