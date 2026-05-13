(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第6课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第6课：产品市场匹配：AI 产品的 PMF 有什么不同",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep79-pmf/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：产品市场匹配：AI 产品的 PMF 有什么不同", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-07.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "从零到一：AI 时代的创业路径",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：Midjourney——四个人如何做出十亿美金公司",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
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
], nextLessonHref: "./lesson-innovation-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 6/12", "建议下一节：从零到一：AI 时代的创业路径", '也可以先整理这一节'], nextHref: "./lesson-innovation-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-06", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson6", audioSource: './assets/audio/innovation-ep79-pmf.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep79-pmf.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep79-pmf/slide_01.png",
            "label": "产品市场匹配：AI 产品的 PMF 有什么不同",
            "caption": "这一节会帮助你系统理解：产品市场匹配：AI 产品的 PMF 有什么不同"
        },
        {
            "file": "innovation-ep79-pmf/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep79-pmf/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "用户一个月后还在用吗？ 第二，自然增长。"
        },
        {
            "file": "innovation-ep79-pmf/slide_04.png",
            "label": "关键判断一",
            "caption": "对 AI 产品来说，找到 PMF 不只是\"大部分时候好用\"。 你需要做到\"几乎不犯严重错误\"。"
        },
        {
            "file": "innovation-ep79-pmf/slide_05.png",
            "label": "关键判断二",
            "caption": "一方面，AI 的宣传和讨论让用户的预期被拉得很高。 用户觉得 AI 应该\"什么都能做、什么都做得好\"。"
        },
        {
            "file": "innovation-ep79-pmf/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "\" 如果用户描述的痛点跟你想象的不一样，或者用户觉得现有的解决方案已经够用了，那你的问题假设可能是错的。 第二阶段：方案验证。"
        },
        {
            "file": "innovation-ep79-pmf/slide_07.png",
            "label": "本节行动提示",
            "caption": "最后给 AI 创业者几个找 PMF 的实用建议。 第一，不要试图一开始就服务所有人。"
        },
        {
            "file": "innovation-ep79-pmf/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.3,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.3,
            "end": 3.58,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.58,
            "end": 9.32,
            "text": "今天聊产品市场匹配，英文叫 Product Market Fit，简称 PMF。"
        },
        {
            "start": 9.32,
            "end": 11.74,
            "text": "这是创业中最重要的概念之一。"
        },
        {
            "start": 11.74,
            "end": 16.38,
            "text": "如果你的产品没有找到 PMF，其他一切都是白搭。"
        },
        {
            "start": 16.38,
            "end": 19.52,
            "text": "PMF 的定义很简单：你做了一个产品，"
        },
        {
            "start": 19.52,
            "end": 20.96,
            "text": "市场真的需要它，"
        },
        {
            "start": 20.96,
            "end": 23.86,
            "text": "用户真的愿意持续使用并付费。"
        },
        {
            "start": 23.86,
            "end": 25.12,
            "text": "听起来简单，"
        },
        {
            "start": 25.12,
            "end": 29.26,
            "text": "但大多数创业项目死掉的原因就是没有找到 PMF。"
        },
        {
            "start": 29.26,
            "end": 32.82,
            "text": "做了一个自己觉得很好的产品，但市场不买账。"
        },
        {
            "start": 32.82,
            "end": 35.8,
            "text": "AI 产品的 PMF 有一些独特的挑战。"
        },
        {
            "start": 35.8,
            "end": 38.0,
            "text": "今天我们来深入讲讲。"
        },
        {
            "start": 38.0,
            "end": 41.12,
            "text": "先讲 PMF 的基本概念和判断标准。"
        },
        {
            "start": 41.12,
            "end": 44.44,
            "text": "怎么判断你的产品有没有达到 PMF？"
        },
        {
            "start": 44.44,
            "end": 47.36,
            "text": "有一个经典的测试方法，叫做\"失望测试\"。"
        },
        {
            "start": 47.36,
            "end": 49.34,
            "text": "问你的用户一个问题："
        },
        {
            "start": 49.34,
            "end": 52.18,
            "text": "\"如果你明天不能再使用这个产品了，"
        },
        {
            "start": 52.18,
            "end": 53.16,
            "text": "你会有多失望？"
        },
        {
            "start": 53.16,
            "end": 57.42,
            "text": "\"选项有三个：非常失望、有点失望、不失望。"
        },
        {
            "start": 57.42,
            "end": 61.2,
            "text": "如果超过百分之四十的用户选了\"非常失望\"，"
        },
        {
            "start": 61.2,
            "end": 63.66,
            "text": "那你的产品可能已经达到了 PMF。"
        },
        {
            "start": 63.66,
            "end": 65.59999999999998,
            "text": "如果低于百分之四十，"
        },
        {
            "start": 65.6,
            "end": 67.4,
            "text": "说明你的产品还不够刚需，"
        },
        {
            "start": 67.4,
            "end": 69.34,
            "text": "还需要继续迭代。"
        },
        {
            "start": 69.34,
            "end": 71.3,
            "text": "还有几个定量的信号可以参考。"
        },
        {
            "start": 71.3,
            "end": 72.66,
            "text": "第一，留存率。"
        },
        {
            "start": 72.66,
            "end": 74.66,
            "text": "用户一个月后还在用吗？"
        },
        {
            "start": 74.66,
            "end": 75.76,
            "text": "第二，自然增长。"
        },
        {
            "start": 75.76,
            "end": 77.92,
            "text": "用户会不会主动推荐给别人？"
        },
        {
            "start": 77.92,
            "end": 79.42000000000002,
            "text": "第三，付费意愿。"
        },
        {
            "start": 79.42000000000002,
            "end": 81.3,
            "text": "用户愿意付多少钱？"
        },
        {
            "start": 81.3,
            "end": 85.1,
            "text": "好，现在讲 AI 产品的 PMF 有什么特殊之处。"
        },
        {
            "start": 85.1,
            "end": 88.92,
            "text": "AI 产品在找 PMF 的过程中有四个独特挑战。"
        },
        {
            "start": 88.92,
            "end": 91.56,
            "text": "第一个挑战：新鲜感陷阱。"
        },
        {
            "start": 91.56,
            "end": 95.36,
            "text": "AI 产品刚上线的时候，用户觉得\"哇好厉害\"。"
        },
        {
            "start": 95.36,
            "end": 100.56,
            "text": "注册量暴增、使用量很高、社交媒体上好评如潮。"
        },
        {
            "start": 100.56,
            "end": 103.26,
            "text": "创始人觉得已经找到 PMF 了。"
        },
        {
            "start": 103.26,
            "end": 105.76,
            "text": "但这往往是新鲜感驱动的。"
        },
        {
            "start": 105.76,
            "end": 108.08,
            "text": "一两个月之后，活跃度急剧下降。"
        },
        {
            "start": 108.08,
            "end": 111.18,
            "text": "用户玩了几次觉得\"也就那样\"，就不用了。"
        },
        {
            "start": 111.18,
            "end": 112.78,
            "text": "怎么识别新鲜感陷阱？"
        },
        {
            "start": 112.78,
            "end": 114.22,
            "text": "看三十天留存率。"
        },
        {
            "start": 114.22,
            "end": 118.76000000000003,
            "text": "如果你的注册转化率很高但三十天留存率低于百分之二十，"
        },
        {
            "start": 118.76000000000003,
            "end": 120.6,
            "text": "很可能就是新鲜感驱动。"
        },
        {
            "start": 120.6,
            "end": 123.26,
            "text": "真正的 PMF 要看长期留存。"
        },
        {
            "start": 123.86,
            "end": 125.68,
            "text": "第二个挑战：质量波动。"
        },
        {
            "start": 125.68,
            "end": 128.16,
            "text": "传统产品的功能是确定性的。"
        },
        {
            "start": 128.16,
            "end": 131.26,
            "text": "按钮一按，功能就出来了，每次都一样。"
        },
        {
            "start": 131.26,
            "end": 132.56,
            "text": "AI 产品不同。"
        },
        {
            "start": 132.56,
            "end": 134.54,
            "text": "AI 的输出有不确定性。"
        },
        {
            "start": 134.54,
            "end": 137.12,
            "text": "同样的输入，可能产生不同的输出。"
        },
        {
            "start": 137.12,
            "end": 139.12,
            "text": "有时候很好，有时候不太行。"
        },
        {
            "start": 139.12,
            "end": 141.56,
            "text": "这种波动会影响用户信任。"
        },
        {
            "start": 141.56,
            "end": 144.66,
            "text": "如果用户十次使用中有两次结果很差，"
        },
        {
            "start": 144.66,
            "end": 147.1,
            "text": "他可能就不信任这个产品了，"
        },
        {
            "start": 147.1,
            "end": 149.04,
            "text": "即使另外八次都很好。"
        },
        {
            "start": 149.04,
            "end": 154.28,
            "text": "对 AI 产品来说，找到 PMF 不只是\"大部分时候好用\"。"
        },
        {
            "start": 154.28,
            "end": 156.8,
            "text": "你需要做到\"几乎不犯严重错误\"。"
        },
        {
            "start": 156.8,
            "end": 158.94,
            "text": "小错误用户可以容忍，"
        },
        {
            "start": 158.94,
            "end": 162.95,
            "text": "但严重的错误（比如给出完全错误的信息或"
        },
        {
            "start": 162.95,
            "end": 166.7,
            "text": "者产生有害的内容）会直接摧毁用户信任。"
        },
        {
            "start": 166.7,
            "end": 169.12,
            "text": "第三个挑战：数据冷启动。"
        },
        {
            "start": 169.12,
            "end": 172.38,
            "text": "很多 AI 产品需要数据才能变好。"
        },
        {
            "start": 172.38,
            "end": 174.92,
            "text": "但产品刚上线的时候没什么数据。"
        },
        {
            "start": 174.92,
            "end": 177.22,
            "text": "没有数据产品就不够好，"
        },
        {
            "start": 177.22,
            "end": 178.8,
            "text": "产品不够好用户就不来，"
        },
        {
            "start": 178.8,
            "end": 180.8,
            "text": "用户不来就没有数据。"
        },
        {
            "start": 180.8,
            "end": 182.72,
            "text": "这就是冷启动困境。"
        },
        {
            "start": 182.72,
            "end": 184.7,
            "text": "怎么突破冷启动？"
        },
        {
            "start": 184.7,
            "end": 187.4,
            "text": "第一种方法，用公开数据预训练。"
        },
        {
            "start": 187.4,
            "end": 189.04,
            "text": "在产品上线之前，"
        },
        {
            "start": 189.04,
            "end": 193.44,
            "text": "先用行业公开数据把模型训练到一个\"及格线\"以上。"
        },
        {
            "start": 193.44,
            "end": 197.14,
            "text": "第二种方法，从小而垂直的场景切入。"
        },
        {
            "start": 197.14,
            "end": 200.08,
            "text": "不要一上来就做一个通用的产品。"
        },
        {
            "start": 200.08,
            "end": 204.86,
            "text": "先做一个非常垂直的场景，用户群体小但需求明确。"
        },
        {
            "start": 204.86,
            "end": 209.58,
            "text": "小的场景需要的数据量也小，更容易达到\"够好\"的水平。"
        },
        {
            "start": 209.58,
            "end": 211.62,
            "text": "第三种方法，人工补位。"
        },
        {
            "start": 211.62,
            "end": 215.62,
            "text": "产品刚开始的时候，AI 处理不了的部分由人来补位。"
        },
        {
            "start": 215.62,
            "end": 220.78,
            "text": "用户看到的是一个\"AI 产品\"，但背后其实是 AI 加人。"
        },
        {
            "start": 220.78,
            "end": 224.38,
            "text": "随着数据积累和模型改进，逐步减少人的介入。"
        },
        {
            "start": 224.38,
            "end": 226.96,
            "text": "第四个挑战：用户预期管理。"
        },
        {
            "start": 226.96,
            "end": 229.58,
            "text": "AI 产品面临一个独特的预期问题。"
        },
        {
            "start": 230.14000000000001,
            "end": 234.5,
            "text": "一方面，AI 的宣传和讨论让用户的预期被拉得很高。"
        },
        {
            "start": 234.5,
            "end": 238.2,
            "text": "用户觉得 AI 应该\"什么都能做、什么都做得好\"。"
        },
        {
            "start": 238.2,
            "end": 242.38,
            "text": "当他们发现你的产品有局限的时候，失望感会特别强。"
        },
        {
            "start": 242.9,
            "end": 245.24,
            "text": "另一方面，有些用户对 AI 不信任，"
        },
        {
            "start": 245.24,
            "end": 247.14,
            "text": "觉得 AI 的东西\"不靠谱\"。"
        },
        {
            "start": 247.14,
            "end": 250.36,
            "text": "即使你的产品已经做得很好了，他们也不愿意用。"
        },
        {
            "start": 250.36,
            "end": 252.22,
            "text": "这两种预期都需要管理。"
        },
        {
            "start": 252.78,
            "end": 254.48,
            "text": "对预期过高的用户，"
        },
        {
            "start": 254.48,
            "end": 258.18,
            "text": "你需要在产品中明确告知 AI 的能力边界。"
        },
        {
            "start": 258.18,
            "end": 260.48,
            "text": "\"这个功能适合用于初稿生成，"
        },
        {
            "start": 260.48,
            "end": 263.34,
            "text": "建议你在此基础上做审核和修改。"
        },
        {
            "start": 263.34,
            "end": 266.62,
            "text": "\"不要给用户\"AI 无所不能\"的印象。"
        },
        {
            "start": 266.62,
            "end": 270.72,
            "text": "对不信任 AI 的用户，你需要提供\"安全感设计\"。"
        },
        {
            "start": 270.72,
            "end": 273.8,
            "text": "比如让用户随时可以看到 AI 的推理过程、"
        },
        {
            "start": 273.8,
            "end": 276.44,
            "text": "让用户可以随时切换到手动模式、"
        },
        {
            "start": 276.44,
            "end": 281.02,
            "text": "在关键决策上提供\"AI 建议加人工确认\"的双重保障。"
        },
        {
            "start": 281.58,
            "end": 286.74,
            "text": "好，讲完了四个挑战，来看 AI 产品怎么系统地寻找 PMF。"
        },
        {
            "start": 286.74,
            "end": 290.34,
            "text": "我给你一个三阶段的 PMF 寻找路径。"
        },
        {
            "start": 290.34,
            "end": 291.74,
            "text": "第一阶段：问题验证。"
        },
        {
            "start": 291.74,
            "end": 294.64,
            "text": "验证你想解决的问题是不是真问题。"
        },
        {
            "start": 294.64,
            "end": 296.06,
            "text": "不要一上来就做产品。"
        },
        {
            "start": 296.06,
            "end": 297.82,
            "text": "先去跟目标用户聊。"
        },
        {
            "start": 297.82,
            "end": 300.78,
            "text": "问他们：\"你在这个工作中最痛苦的是什么？"
        },
        {
            "start": 300.78,
            "end": 302.34,
            "text": "你现在怎么解决的？"
        },
        {
            "start": 302.34,
            "end": 304.16,
            "text": "你花了多少时间和钱？"
        },
        {
            "start": 304.16,
            "end": 304.58000000000004,
            "text": "\""
        },
        {
            "start": 304.58000000000004,
            "end": 307.66,
            "text": "如果用户描述的痛点跟你想象的不一样，"
        },
        {
            "start": 307.66,
            "end": 310.48,
            "text": "或者用户觉得现有的解决方案已经够用了，"
        },
        {
            "start": 310.48,
            "end": 312.84,
            "text": "那你的问题假设可能是错的。"
        },
        {
            "start": 312.84,
            "end": 314.44,
            "text": "第二阶段：方案验证。"
        },
        {
            "start": 314.44,
            "end": 317.66,
            "text": "验证 AI 是不是解决这个问题的最佳方案。"
        },
        {
            "start": 317.66,
            "end": 321.24,
            "text": "不是所有问题都适合用 AI 来解决。"
        },
        {
            "start": 321.24,
            "end": 325.44,
            "text": "有些问题用一个简单的工具或者优化一下流程就能解决，"
        },
        {
            "start": 325.44,
            "end": 326.88,
            "text": "不需要 AI。"
        },
        {
            "start": 326.88,
            "end": 329.72,
            "text": "你要验证 AI 方案比现有方案好多少。"
        },
        {
            "start": 330.22,
            "end": 331.02,
            "text": "怎么验证？"
        },
        {
            "start": 331.02,
            "end": 332.42,
            "text": "做一个简单的对比。"
        },
        {
            "start": 332.42,
            "end": 336.82,
            "text": "让用户用现有的方式完成一个任务，记录时间和质量。"
        },
        {
            "start": 336.82,
            "end": 340.26,
            "text": "然后让用户用你的 AI 方案完成同样的任务，"
        },
        {
            "start": 340.26,
            "end": 341.74,
            "text": "再记录时间和质量。"
        },
        {
            "start": 342.52000000000004,
            "end": 345.74,
            "text": "如果 AI 方案的效率提升不到两到三倍，"
        },
        {
            "start": 345.74,
            "end": 347.7,
            "text": "用户切换的动力就不够。"
        },
        {
            "start": 347.7,
            "end": 350.74,
            "text": "因为切换到新工具是有学习成本的。"
        },
        {
            "start": 350.74,
            "end": 352.42,
            "text": "第三阶段：产品验证。"
        },
        {
            "start": 352.42,
            "end": 356.44,
            "text": "做出产品，验证用户是否持续使用并付费。"
        },
        {
            "start": 357.02,
            "end": 360.74,
            "text": "这一阶段关注的核心指标是：第一，周留存率。"
        },
        {
            "start": 360.74,
            "end": 362.5,
            "text": "用户每周来用几次？"
        },
        {
            "start": 362.5,
            "end": 365.44,
            "text": "如果一周都不用一次，说明不够刚需。"
        },
        {
            "start": 365.44,
            "end": 367.06,
            "text": "第二，使用深度。"
        },
        {
            "start": 367.06,
            "end": 369.04,
            "text": "用户每次用多长时间？"
        },
        {
            "start": 369.04,
            "end": 370.3,
            "text": "用了哪些功能？"
        },
        {
            "start": 370.3,
            "end": 372.34,
            "text": "第三，付费转化率。"
        },
        {
            "start": 372.34,
            "end": 374.8,
            "text": "免费用户转付费的比例是多少？"
        },
        {
            "start": 374.8,
            "end": 376.34,
            "text": "第四，推荐意愿。"
        },
        {
            "start": 376.34,
            "end": 379.0,
            "text": "用户愿不愿意推荐给同事或朋友？"
        },
        {
            "start": 379.0,
            "end": 382.84,
            "text": "最后给 AI 创业者几个找 PMF 的实用建议。"
        },
        {
            "start": 382.84,
            "end": 387.28,
            "text": "第一，不要试图一开始就服务所有人。"
        },
        {
            "start": 387.28,
            "end": 389.28,
            "text": "找到你的\"最佳种子用户\"。"
        },
        {
            "start": 389.28,
            "end": 391.5,
            "text": "谁是对这个问题最痛苦、"
        },
        {
            "start": 391.5,
            "end": 394.82,
            "text": "对 AI 方案最开放、最愿意给反馈的人？"
        },
        {
            "start": 394.82,
            "end": 397.4,
            "text": "先让这一小群人爱上你的产品。"
        },
        {
            "start": 397.4,
            "end": 400.3,
            "text": "第二，紧密跟踪用户的实际使用行为。"
        },
        {
            "start": 400.3,
            "end": 403.52,
            "text": "不要只看用户说什么，要看用户做什么。"
        },
        {
            "start": 403.52,
            "end": 406.12,
            "text": "用户可能在访谈中说\"这个产品很好\"，"
        },
        {
            "start": 406.12,
            "end": 408.14,
            "text": "但实际上一周都不打开一次。"
        },
        {
            "start": 408.14,
            "end": 409.58,
            "text": "数据不会说谎。"
        },
        {
            "start": 409.58,
            "end": 413.72,
            "text": "第三，AI 产品的 PMF 往往不是一次找到的，"
        },
        {
            "start": 413.72,
            "end": 416.24,
            "text": "而是通过不断调整\"AI 做什么、"
        },
        {
            "start": 416.24,
            "end": 418.54,
            "text": "人做什么\"的边界来逼近的。"
        },
        {
            "start": 418.54,
            "end": 422.16,
            "text": "一开始你可能让 AI 做太多了，结果质量不行。"
        },
        {
            "start": 422.16,
            "end": 426.32,
            "text": "那就缩小 AI 的范围，只让它做最擅长的部分。"
        },
        {
            "start": 426.32,
            "end": 427.22,
            "text": "慢慢扩大。"
        },
        {
            "start": 427.22,
            "end": 431.26,
            "text": "找到那个 AI 输出质量让用户满意的\"甜蜜点\"。"
        },
        {
            "start": 431.26,
            "end": 432.46,
            "text": "好，总结一下。"
        },
        {
            "start": 432.46,
            "end": 436.3199999999999,
            "text": "PMF 的经典判断：失望测试超过百分之四十。"
        },
        {
            "start": 436.32,
            "end": 439.9,
            "text": "AI 产品 PMF 四个独特挑战：新鲜感陷阱、"
        },
        {
            "start": 439.9,
            "end": 443.28,
            "text": "质量波动、数据冷启动、用户预期管理。"
        },
        {
            "start": 443.28,
            "end": 447.18,
            "text": "三阶段 PMF 路径：问题验证、方案验证、产品验证。"
        },
        {
            "start": 447.18,
            "end": 449.42,
            "text": "关键建议：从种子用户开始、"
        },
        {
            "start": 449.42,
            "end": 451.18000000000006,
            "text": "看行为不看口头反馈、"
        },
        {
            "start": 451.18000000000006,
            "end": 453.4000000000001,
            "text": "不断调整人机边界。"
        },
        {
            "start": 453.4000000000001,
            "end": 456.18,
            "text": "下一期我们聊从零到一的创业路径："
        },
        {
            "start": 456.18,
            "end": 458.52,
            "text": "AI 时代的创始人可以做更多。"
        },
        {
            "start": 458.52,
            "end": 460.08,
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
], navigation: { nextLessonUrl: "./lesson-innovation-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-07.html?entry={entry}", secondaryHref: "./lesson-innovation-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-06", coachSource: "./ai-coach.html?source=lesson-innovation-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于产品市场匹配：AI 产品的 PMF 有什么不同的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "产品市场匹配：AI 产品的 PMF 有什么不同", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
