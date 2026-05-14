(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第4课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第4课：用户分群：AI 发现你看不到的用户群体",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep89-user-segmentation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：用户分群：AI 发现你看不到的用户群体", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-05.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "数据驱动决策：从拍脑袋到用数据说话",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "核心商业指标：哪些数字必须盯住",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "数据可视化与 Dashboard：让数据讲故事",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "用户分群：AI 发现你看不到的用户群体",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "漏斗分析与归因：AI 帮你找到增长杠杆",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 6,
                "title": "预测分析：用 AI 预测业务趋势",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AB 测试与实验文化",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：Netflix 如何用数据加 AI 决定拍什么剧",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：拼多多的数据驱动增长引擎",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "AI 数据分析工具实操：从 Excel 到对话式分析",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的数据诊断：用 AI 搭建业务指标体系",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-data-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先定义问题，再看数据",
                "body": "没有清楚的经营问题，数据只会变成更多噪音；先问对问题，指标才有方向。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "指标不是数字，而是管理语言",
                "body": "好的指标能帮助团队对齐目标、识别异常、判断优先级，而不是只做事后汇报。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 放大分析能力，也放大提问质量",
                "body": "AI 可以更快生成图表和洞察，但管理者仍然要负责判断什么值得分析、什么值得行动。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 4/11", "建议下一节：漏斗分析与归因：AI 帮你找到增长杠杆", '也可以先整理这一节'], nextHref: "./lesson-data-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-04", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson4", audioSource: './assets/audio/data-ep89-user-segmentation.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep89-user-segmentation.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep89-user-segmentation/slide_01.png",
            "label": "用户分群：AI 发现你看不到的用户群体",
            "caption": "这一节会帮助你系统理解：用户分群：AI 发现你看不到的用户群体"
        },
        {
            "file": "data-ep89-user-segmentation/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep89-user-segmentation/slide_03.png",
            "label": "核心指标与判断",
            "caption": "你需要引导他们养成购买习惯。 R 远、F 低、M 低的客户，是\"流失的低价值客户\"。"
        },
        {
            "file": "data-ep89-user-segmentation/slide_04.png",
            "label": "从看见到解释",
            "caption": "这群人的特征是：主要在周五和周六晚上浏览商品，浏览时间很长但很少购买，偶尔在促销期间集中下单。 发现这个群体之后你可以做什么？"
        },
        {
            "file": "data-ep89-user-segmentation/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "价格敏感型用户，给他们优惠券和折扣信息。 新用户，给他们引导教程和首单优惠。"
        },
        {
            "file": "data-ep89-user-segmentation/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "讲一个用户分群加 AI 的实际案例。 一家在线教育平台。"
        },
        {
            "file": "data-ep89-user-segmentation/slide_07.png",
            "label": "本节行动提示",
            "caption": "对囤课型：不再频繁推课程通知打扰他们，而是在特定节点温和地提醒\"你还有未完成的课程\"。 对社交学习型：强化社区功能，推出学习伙伴匹配。"
        },
        {
            "file": "data-ep89-user-segmentation/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.22,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.44,
            "end": 3.12,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.12,
            "end": 4.38,
            "text": "今天聊用户分群。"
        },
        {
            "start": 4.38,
            "end": 6.14,
            "text": "你的客户不是一个整体。"
        },
        {
            "start": 6.14,
            "end": 10.48,
            "text": "不同的客户有不同的需求、不同的行为、不同的价值。"
        },
        {
            "start": 10.48,
            "end": 13.64,
            "text": "如果你用同一种方式对待所有客户，"
        },
        {
            "start": 13.64,
            "end": 17.64,
            "text": "你一定在浪费资源，也一定在错失机会。"
        },
        {
            "start": 17.64,
            "end": 23.32,
            "text": "用户分群就是把你的客户按照某些维度划分成不同的群体，"
        },
        {
            "start": 23.32,
            "end": 26.22,
            "text": "然后针对每个群体制定不同的策略。"
        },
        {
            "start": 26.22,
            "end": 29.2,
            "text": "传统的分群靠人的经验和判断。"
        },
        {
            "start": 29.64,
            "end": 33.3,
            "text": "AI 可以从数据中发现人看不到的群体和规律。"
        },
        {
            "start": 33.3,
            "end": 36.96,
            "text": "先讲一个经典的分群模型：RFM 模型。"
        },
        {
            "start": 36.96,
            "end": 40.44,
            "text": "RFM 是三个英文单词的首字母。"
        },
        {
            "start": 40.44,
            "end": 44.08,
            "text": "R 是 Recency，最近一次购买是什么时候。"
        },
        {
            "start": 44.08,
            "end": 47.16,
            "text": "F 是 Frequency，购买频率是多少。"
        },
        {
            "start": 47.16,
            "end": 50.78,
            "text": "M 是 Monetary，累计消费金额是多少。"
        },
        {
            "start": 50.78,
            "end": 54.76,
            "text": "根据这三个维度，你可以把客户分成几种类型。"
        },
        {
            "start": 54.76,
            "end": 60.02,
            "text": "R 近、F 高、M 高的客户，是你的\"高价值活跃客户\"。"
        },
        {
            "start": 60.02,
            "end": 62.66,
            "text": "这是你最重要的客户群体。"
        },
        {
            "start": 62.66,
            "end": 67.18,
            "text": "R 远、F 高、M 高的客户，是\"沉睡的高价值客户\"。"
        },
        {
            "start": 67.18,
            "end": 69.66,
            "text": "他们以前买得很多但最近不买了。"
        },
        {
            "start": 69.66,
            "end": 70.9,
            "text": "你需要做召回。"
        },
        {
            "start": 71.62,
            "end": 75.38,
            "text": "R 近、F 低、M 低的客户，是\"新客户\"。"
        },
        {
            "start": 75.38,
            "end": 77.16,
            "text": "他们刚来不久，消费不多。"
        },
        {
            "start": 77.16,
            "end": 79.56,
            "text": "你需要引导他们养成购买习惯。"
        },
        {
            "start": 79.56,
            "end": 84.24,
            "text": "R 远、F 低、M 低的客户，是\"流失的低价值客户\"。"
        },
        {
            "start": 84.24,
            "end": 86.28,
            "text": "很久没来了，以前也没怎么买。"
        },
        {
            "start": 86.28,
            "end": 89.26,
            "text": "投入资源去召回他们的性价比可能很低。"
        },
        {
            "start": 89.26,
            "end": 94.16,
            "text": "RFM 模型的价值在于：它帮你区分不同客户的优先级。"
        },
        {
            "start": 94.16,
            "end": 97.0,
            "text": "不是所有客户都值得同等对待。"
        },
        {
            "start": 97.0,
            "end": 100.86,
            "text": "高价值客户值得你投入更多的关注和资源。"
        },
        {
            "start": 100.86,
            "end": 105.5,
            "text": "低价值的即将流失的客户，可能就让他自然流失。"
        },
        {
            "start": 105.5,
            "end": 109.74,
            "text": "RFM 是一个很好的起点，但它只用了三个维度。"
        },
        {
            "start": 109.74,
            "end": 111.72,
            "text": "AI 可以做到更多。"
        },
        {
            "start": 111.72,
            "end": 114.52,
            "text": "AI 分群跟传统分群的区别是什么？"
        },
        {
            "start": 114.52,
            "end": 117.42,
            "text": "传统分群是\"人定义维度\"。"
        },
        {
            "start": 117.42,
            "end": 119.8,
            "text": "你决定用什么维度来分群。"
        },
        {
            "start": 119.8,
            "end": 121.74,
            "text": "RFM 是你选的三个维度。"
        },
        {
            "start": 121.74,
            "end": 124.76,
            "text": "也许你还会按地域、年龄、性别来分。"
        },
        {
            "start": 124.76,
            "end": 127.08,
            "text": "但维度都是你自己定的。"
        },
        {
            "start": 127.66,
            "end": 129.94,
            "text": "AI 分群是\"数据驱动发现\"。"
        },
        {
            "start": 129.94,
            "end": 132.86,
            "text": "你把所有的用户数据扔给 AI，"
        },
        {
            "start": 132.86,
            "end": 136.4,
            "text": "AI 自己从数据中发现最有意义的群体。"
        },
        {
            "start": 136.4,
            "end": 139.54,
            "text": "它考虑的维度可能有几十甚至上百个。"
        },
        {
            "start": 139.54,
            "end": 143.34,
            "text": "最终发现的群体可能是你从来没想到过的。"
        },
        {
            "start": 143.34,
            "end": 144.06,
            "text": "举个例子。"
        },
        {
            "start": 144.06,
            "end": 145.64,
            "text": "你是一家电商平台。"
        },
        {
            "start": 145.64,
            "end": 150.62,
            "text": "传统分群可能按照消费金额分成高中低三档。"
        },
        {
            "start": 150.62,
            "end": 153.94,
            "text": "AI 分群可能发现一个你没想到的群体："
        },
        {
            "start": 153.94,
            "end": 155.74,
            "text": "\"周末夜晚浏览型用户\"。"
        },
        {
            "start": 155.74,
            "end": 157.46,
            "text": "这群人的特征是："
        },
        {
            "start": 157.46,
            "end": 160.18,
            "text": "主要在周五和周六晚上浏览商品，"
        },
        {
            "start": 160.18,
            "end": 162.82,
            "text": "浏览时间很长但很少购买，"
        },
        {
            "start": 162.82,
            "end": 165.26,
            "text": "偶尔在促销期间集中下单。"
        },
        {
            "start": 165.26,
            "end": 168.0,
            "text": "发现这个群体之后你可以做什么？"
        },
        {
            "start": 168.0,
            "end": 172.6,
            "text": "专门在周末晚上推送限时优惠，把他们的浏览转化为购买。"
        },
        {
            "start": 172.6,
            "end": 174.36,
            "text": "这种精细化的策略，"
        },
        {
            "start": 174.36,
            "end": 176.72,
            "text": "如果你不知道这个群体的存在，"
        },
        {
            "start": 176.72,
            "end": 178.06,
            "text": "你就做不到。"
        },
        {
            "start": 178.06,
            "end": 182.14,
            "text": "AI 做用户分群常用的方法叫\"聚类分析\"。"
        },
        {
            "start": 182.14,
            "end": 184.26,
            "text": "聚类分析的逻辑是："
        },
        {
            "start": 184.26,
            "end": 188.42,
            "text": "让 AI 在数据中找到\"彼此相似的用户放在一起，"
        },
        {
            "start": 188.42,
            "end": 191.38,
            "text": "不同群体之间的差异最大化\"。"
        },
        {
            "start": 191.38,
            "end": 195.46,
            "text": "AI 不需要你告诉它怎么分，它自己找到最优的分法。"
        },
        {
            "start": 195.46,
            "end": 197.58,
            "text": "AI 聚类会考虑很多维度。"
        },
        {
            "start": 197.58,
            "end": 202.32,
            "text": "购买行为维度：购买频率、客单价、品类偏好、购买时间。"
        },
        {
            "start": 202.32,
            "end": 205.52,
            "text": "浏览行为维度：访问频率、停留时间、"
        },
        {
            "start": 205.52,
            "end": 208.04,
            "text": "浏览品类、搜索关键词。"
        },
        {
            "start": 208.04,
            "end": 210.6,
            "text": "互动行为维度：是否参与促销、"
        },
        {
            "start": 210.6,
            "end": 213.12,
            "text": "是否留评、是否推荐给别人、"
        },
        {
            "start": 213.12,
            "end": 215.02,
            "text": "客服咨询的频率和内容。"
        },
        {
            "start": 215.02,
            "end": 217.66,
            "text": "把这些维度综合起来，"
        },
        {
            "start": 217.66,
            "end": 221.28,
            "text": "AI 可能会把你的用户分成五到八个群体。"
        },
        {
            "start": 221.28,
            "end": 224.06,
            "text": "每个群体有独特的行为模式和特征。"
        },
        {
            "start": 224.06,
            "end": 226.72,
            "text": "好，有了用户分群之后怎么用？"
        },
        {
            "start": 226.72,
            "end": 228.36,
            "text": "我给你四种核心用法。"
        },
        {
            "start": 228.36,
            "end": 230.52,
            "text": "第一种用法：差异化营销。"
        },
        {
            "start": 230.52,
            "end": 234.62,
            "text": "不同的用户群体用不同的营销内容和渠道。"
        },
        {
            "start": 234.62,
            "end": 239.64,
            "text": "高价值活跃用户，给他们专属的VIP待遇和新品优先权。"
        },
        {
            "start": 239.64,
            "end": 243.6,
            "text": "价格敏感型用户，给他们优惠券和折扣信息。"
        },
        {
            "start": 243.6,
            "end": 247.2,
            "text": "新用户，给他们引导教程和首单优惠。"
        },
        {
            "start": 247.2,
            "end": 250.72,
            "text": "传统的做法是所有人发一样的营销邮件。"
        },
        {
            "start": 250.72,
            "end": 254.72,
            "text": "AI 分群之后，你可以给每个群体发定制化的内容。"
        },
        {
            "start": 254.72,
            "end": 257.16,
            "text": "第二种用法：资源分配优化。"
        },
        {
            "start": 257.68,
            "end": 259.02,
            "text": "你的客服资源有限。"
        },
        {
            "start": 259.02,
            "end": 261.58,
            "text": "高价值客户应该优先服务。"
        },
        {
            "start": 261.58,
            "end": 263.1,
            "text": "你的营销预算有限。"
        },
        {
            "start": 263.1,
            "end": 266.34,
            "text": "高转化潜力的用户群体应该优先投入。"
        },
        {
            "start": 266.34,
            "end": 269.78,
            "text": "AI 帮你量化每个群体的价值和潜力，"
        },
        {
            "start": 269.78,
            "end": 271.96,
            "text": "让你把资源花在刀刃上。"
        },
        {
            "start": 271.96,
            "end": 274.52,
            "text": "第三种用法：流失预警和干预。"
        },
        {
            "start": 274.52,
            "end": 277.86,
            "text": "AI 识别出哪些用户群体有流失风险。"
        },
        {
            "start": 278.36,
            "end": 281.52,
            "text": "然后对不同的群体用不同的干预措施。"
        },
        {
            "start": 282.0,
            "end": 284.22,
            "text": "高价值用户即将流失？"
        },
        {
            "start": 284.22,
            "end": 286.78,
            "text": "安排客户成功经理一对一沟通。"
        },
        {
            "start": 286.78,
            "end": 289.34,
            "text": "中等价值用户活跃度下降？"
        },
        {
            "start": 289.34,
            "end": 292.38,
            "text": "推送个性化的内容和优惠。"
        },
        {
            "start": 292.38,
            "end": 294.46,
            "text": "低价值用户很久没来？"
        },
        {
            "start": 294.46,
            "end": 299.04,
            "text": "发一封自动化的召回邮件就行，不需要投入太多人力。"
        },
        {
            "start": 299.04,
            "end": 301.22,
            "text": "第四种用法：产品优化。"
        },
        {
            "start": 301.70000000000005,
            "end": 305.14,
            "text": "不同用户群体对产品的使用方式不同。"
        },
        {
            "start": 305.14,
            "end": 309.9,
            "text": "有些群体只用某几个功能，有些群体用得很全面。"
        },
        {
            "start": 309.9,
            "end": 314.08,
            "text": "理解每个群体的使用模式，可以帮你优化产品。"
        },
        {
            "start": 314.08,
            "end": 319.04,
            "text": "比如发现一个群体注册后只用了基础功能就流失了。"
        },
        {
            "start": 319.04,
            "end": 321.8,
            "text": "分析发现他们不知道高级功能的存在。"
        },
        {
            "start": 321.8,
            "end": 324.96,
            "text": "那产品团队就应该优化引导流程，"
        },
        {
            "start": 324.96,
            "end": 327.72,
            "text": "让新用户更容易发现高级功能。"
        },
        {
            "start": 327.72,
            "end": 330.88,
            "text": "讲一个用户分群加 AI 的实际案例。"
        },
        {
            "start": 330.88,
            "end": 332.66,
            "text": "一家在线教育平台。"
        },
        {
            "start": 332.66,
            "end": 336.84,
            "text": "他们原来的用户分群很简单：免费用户和付费用户。"
        },
        {
            "start": 336.84,
            "end": 339.12,
            "text": "用 AI 做了深度分群之后，"
        },
        {
            "start": 339.12,
            "end": 342.78,
            "text": "发现付费用户中有五个明显不同的群体。"
        },
        {
            "start": 342.78,
            "end": 344.94,
            "text": "第一个群体：学习狂人。"
        },
        {
            "start": 344.94,
            "end": 349.78,
            "text": "每天都上课，完课率极高，经常给课程打分和留评。"
        },
        {
            "start": 349.78,
            "end": 353.82,
            "text": "这群人是你的铁杆粉丝，也是你的口碑传播者。"
        },
        {
            "start": 353.82,
            "end": 356.2,
            "text": "第二个群体：考试驱动型。"
        },
        {
            "start": 356.2,
            "end": 359.94,
            "text": "只在考试前密集学习，考完就消失了。"
        },
        {
            "start": 359.94,
            "end": 362.6,
            "text": "他们需要的是考试相关的精准内容，"
        },
        {
            "start": 362.6,
            "end": 364.82,
            "text": "而不是泛泛的课程推荐。"
        },
        {
            "start": 365.36,
            "end": 367.18,
            "text": "第三个群体：囤课型。"
        },
        {
            "start": 367.18,
            "end": 369.1,
            "text": "买了很多课但几乎不上。"
        },
        {
            "start": 369.1,
            "end": 372.06,
            "text": "他们买课更多是为了\"拥有\"而不是\"学习\"。"
        },
        {
            "start": 372.06,
            "end": 374.66,
            "text": "续费率其实很高，但使用率很低。"
        },
        {
            "start": 374.66,
            "end": 376.92,
            "text": "第四个群体：社交学习型。"
        },
        {
            "start": 376.92,
            "end": 379.4,
            "text": "喜欢在讨论区互动、参加学习小组。"
        },
        {
            "start": 379.4,
            "end": 382.76,
            "text": "他们留存的关键不是课程质量，而是社区氛围。"
        },
        {
            "start": 382.76,
            "end": 385.26,
            "text": "第五个群体：即将流失型。"
        },
        {
            "start": 385.26,
            "end": 389.58,
            "text": "上课频率在持续下降，对推送内容的打开率越来越低。"
        },
        {
            "start": 389.58,
            "end": 392.7,
            "text": "发现这五个群体之后，教育平台做了什么？"
        },
        {
            "start": 392.7,
            "end": 394.06,
            "text": "对学习狂人："
        },
        {
            "start": 394.06,
            "end": 397.06,
            "text": "推出了\"学习达人\"标识和推荐激励计划，"
        },
        {
            "start": 397.06,
            "end": 398.64,
            "text": "让他们帮忙传播。"
        },
        {
            "start": 398.64,
            "end": 402.94,
            "text": "对考试驱动型：在考试季推送针对性的考前冲刺包。"
        },
        {
            "start": 402.94,
            "end": 404.3,
            "text": "对囤课型："
        },
        {
            "start": 404.3,
            "end": 407.2,
            "text": "不再频繁推课程通知打扰他们，"
        },
        {
            "start": 407.2,
            "end": 411.12,
            "text": "而是在特定节点温和地提醒\"你还有未完成的课程\"。"
        },
        {
            "start": 411.12,
            "end": 415.7,
            "text": "对社交学习型：强化社区功能，推出学习伙伴匹配。"
        },
        {
            "start": 415.7,
            "end": 418.64,
            "text": "对即将流失型：安排客服主动联系，"
        },
        {
            "start": 418.64,
            "end": 420.6,
            "text": "了解原因并提供解决方案。"
        },
        {
            "start": 420.6,
            "end": 423.8000000000001,
            "text": "结果：总体留存率提升了百分之十八，"
        },
        {
            "start": 423.8000000000001,
            "end": 426.09999999999997,
            "text": "付费转化率提升了百分之十二。"
        },
        {
            "start": 426.1,
            "end": 427.12,
            "text": "好，总结一下。"
        },
        {
            "start": 427.12,
            "end": 431.16,
            "text": "经典的 RFM 分群模型按最近购买时间、"
        },
        {
            "start": 431.16,
            "end": 433.68,
            "text": "频率、金额三个维度分群。"
        },
        {
            "start": 433.68,
            "end": 435.92,
            "text": "AI 分群超越 RFM，"
        },
        {
            "start": 435.92,
            "end": 440.26,
            "text": "可以从几十上百个维度自动发现隐藏的用户群体。"
        },
        {
            "start": 440.26,
            "end": 442.76,
            "text": "四种核心用法：差异化营销、"
        },
        {
            "start": 442.76,
            "end": 445.02,
            "text": "资源分配优化、流失预警干预、"
        },
        {
            "start": 445.02,
            "end": 445.82,
            "text": "产品优化。"
        },
        {
            "start": 445.82,
            "end": 447.74,
            "text": "用户分群的核心理念："
        },
        {
            "start": 447.74,
            "end": 449.28,
            "text": "不同客户不同对待，"
        },
        {
            "start": 449.28,
            "end": 451.76,
            "text": "把资源花在最有价值的地方。"
        },
        {
            "start": 451.76,
            "end": 456.7,
            "text": "下一期我们聊漏斗分析与归因：AI 帮你找到增长杠杆。"
        },
        {
            "start": 456.7,
            "end": 458.62,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 458.62,
            "end": 462.02,
            "text": "1. RFM 模型：最近购买时间、频率、"
        },
        {
            "start": 462.3,
            "end": 464.64,
            "text": "金额，经典用户分群起点"
        },
        {
            "start": 464.64,
            "end": 467.22,
            "text": "2. AI 聚类分群：数据驱动，"
        },
        {
            "start": 467.22,
            "end": 470.04,
            "text": "从几十个维度自动发现隐藏群体"
        },
        {
            "start": 470.04,
            "end": 473.86,
            "text": "3. 四种用法：差异化营销、资源优化、"
        },
        {
            "start": 473.86,
            "end": 475.52,
            "text": "流失干预、产品优化"
        },
        {
            "start": 475.52,
            "end": 480.18,
            "text": "4. 核心理念：不同客户不同策略，资源花在刀刃上"
        },
        {
            "start": 480.18,
            "end": 483.62,
            "text": "1. 你目前对客户有分群吗？"
        },
        {
            "start": 483.62,
            "end": 485.28,
            "text": "是按什么维度分的？"
        },
        {
            "start": 485.28,
            "end": 488.72,
            "text": "2. 如果 AI 帮你重新分群，"
        },
        {
            "start": 488.72,
            "end": 492.32,
            "text": "你觉得可能发现什么你没想到的群体？"
        },
        {
            "start": 492.32,
            "end": 497.0,
            "text": "3. 你对不同价值的客户投入的资源是均"
        },
        {
            "start": 497.0,
            "end": 498.64,
            "text": "等的还是差异化的？"
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
], navigation: { nextLessonUrl: "./lesson-data-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-05.html?entry={entry}", secondaryHref: "./lesson-data-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-04", coachSource: "./ai-coach.html?source=lesson-data-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于用户分群：AI 发现你看不到的用户群体的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "用户分群：AI 发现你看不到的用户群体", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
