(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第5课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第5课：漏斗分析与归因：AI 帮你找到增长杠杆",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep90-funnel-attribution/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：漏斗分析与归因：AI 帮你找到增长杠杆", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-06.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "漏斗分析与归因：AI 帮你找到增长杠杆",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "预测分析：用 AI 预测业务趋势",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 5/11", "建议下一节：预测分析：用 AI 预测业务趋势", '也可以先整理这一节'], nextHref: "./lesson-data-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-05", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson5", audioSource: './assets/audio/data-ep90-funnel-attribution.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep90-funnel-attribution.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep90-funnel-attribution/slide_01.png",
            "label": "漏斗分析与归因：AI 帮你找到增长杠杆",
            "caption": "这一节会帮助你系统理解：漏斗分析与归因：AI 帮你找到增长杠杆"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_03.png",
            "label": "核心指标与判断",
            "caption": "如果你能把这一层从百分之三十三提到百分之四十，整体的付款客户就从六百增加到七百二十。 提升了百分之二十。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_04.png",
            "label": "从看见到解释",
            "caption": "也许那些先看了评价再看商品详情的用户，转化率比直接看商品详情的高两倍。 那你就应该在商品详情页更突出地展示用户评价。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "客户最后点了搜索广告才购买的，功劳全给搜索广告。 这个模型简单但不公平。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "比如 AI 发现：看了公众号文章又看了搜索广告的用户，转化率是百分之十二。 只看了搜索广告没看公众号文章的用户，转化率是百分之四。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_07.png",
            "label": "本节行动提示",
            "caption": "收到了第三天推送的用户，七天内完成三节课的比例是百分之四十五。 没收到的只有百分之十五。"
        },
        {
            "file": "data-ep90-funnel-attribution/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.24,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.24,
            "end": 3.54,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.54,
            "end": 5.8,
            "text": "今天聊漏斗分析和归因模型。"
        },
        {
            "start": 5.8,
            "end": 8.82,
            "text": "这两个是数据分析中最实用的工具。"
        },
        {
            "start": 8.82,
            "end": 11.94,
            "text": "漏斗告诉你\"用户在哪里流失了\"，"
        },
        {
            "start": 11.94,
            "end": 14.72,
            "text": "归因告诉你\"增长的功劳应该归给谁\"。"
        },
        {
            "start": 14.72,
            "end": 18.78,
            "text": "搞清楚这两件事，你就知道把力气往哪里使了。"
        },
        {
            "start": 18.78,
            "end": 20.28,
            "text": "先讲���斗分析。"
        },
        {
            "start": 20.28,
            "end": 21.52,
            "text": "什么是漏斗？"
        },
        {
            "start": 21.52,
            "end": 25.4,
            "text": "就是用户从接触你到完成购买的完整路径。"
        },
        {
            "start": 25.4,
            "end": 27.46,
            "text": "每一步都会有人离开，"
        },
        {
            "start": 27.46,
            "end": 30.6,
            "text": "所以形状像一个漏斗，上面宽下面窄。"
        },
        {
            "start": 30.6,
            "end": 32.62,
            "text": "以一个电商网站为例。"
        },
        {
            "start": 32.62,
            "end": 34.54,
            "text": "漏斗大概是这样的。"
        },
        {
            "start": 34.54,
            "end": 35.44,
            "text": "第一层：访问。"
        },
        {
            "start": 35.44,
            "end": 37.48,
            "text": "有一万个人来到了你的网站。"
        },
        {
            "start": 37.48,
            "end": 38.92,
            "text": "第二层：浏览商品。"
        },
        {
            "start": 38.92,
            "end": 41.38,
            "text": "其中六千人看了商品详情页。"
        },
        {
            "start": 41.38,
            "end": 43.2,
            "text": "第三层：加入购物车。"
        },
        {
            "start": 43.2,
            "end": 46.26,
            "text": "其中两千人把商品加进了购物车。"
        },
        {
            "start": 46.26,
            "end": 48.18,
            "text": "第四层：开始结算。"
        },
        {
            "start": 48.18,
            "end": 50.34,
            "text": "其中一千人点击了去结算。"
        },
        {
            "start": 50.34,
            "end": 51.94,
            "text": "第五层：完成支付。"
        },
        {
            "start": 51.94,
            "end": 53.92,
            "text": "其中六百人成功付款。"
        },
        {
            "start": 53.92,
            "end": 58.9,
            "text": "从一万个访客到六百个付款客户，整体转化率百分之六。"
        },
        {
            "start": 58.9,
            "end": 61.4,
            "text": "但更重要的是看每一层之间的转化率。"
        },
        {
            "start": 61.4,
            "end": 64.06,
            "text": "从访问到浏览是百分之六十，还不错。"
        },
        {
            "start": 64.06,
            "end": 66.73999999999998,
            "text": "从浏览到加购是百分之三十三。"
        },
        {
            "start": 66.74,
            "end": 69.25999999999999,
            "text": "从加购到结算是百分之五十。"
        },
        {
            "start": 69.26,
            "end": 71.85999999999997,
            "text": "从结算到付款是百分之六十。"
        },
        {
            "start": 71.86,
            "end": 73.3,
            "text": "哪一层的转化率最低？"
        },
        {
            "start": 73.3,
            "end": 76.50000000000001,
            "text": "从浏览到加购，只有百分之三十三。"
        },
        {
            "start": 76.50000000000001,
            "end": 78.44,
            "text": "这就是你的\"最大漏损点\"。"
        },
        {
            "start": 78.44,
            "end": 82.97999999999999,
            "text": "如果你能把这一层从百分之三十三提到百分之四十，"
        },
        {
            "start": 82.98,
            "end": 86.82,
            "text": "整体的付款客户就从六百增加到七百二十。"
        },
        {
            "start": 86.82,
            "end": 88.26,
            "text": "提升了百分之二十。"
        },
        {
            "start": 88.26,
            "end": 90.7,
            "text": "这就是漏斗分析的核心价值："
        },
        {
            "start": 90.7,
            "end": 94.56,
            "text": "找到最大的漏损点，集中力量去优化它。"
        },
        {
            "start": 94.56,
            "end": 96.92,
            "text": "AI 怎么让漏斗分析更强大？"
        },
        {
            "start": 96.92,
            "end": 99.9,
            "text": "传统的漏斗分析看的是整体的转化率。"
        },
        {
            "start": 99.9,
            "end": 101.82,
            "text": "但 AI 可以做得更细。"
        },
        {
            "start": 101.82,
            "end": 103.6,
            "text": "第一，分群漏斗。"
        },
        {
            "start": 103.6,
            "end": 106.6,
            "text": "不同用户群体的漏斗可能完全不同。"
        },
        {
            "start": 106.6,
            "end": 110.4,
            "text": "比如新用户的漏斗和老用户的漏斗不一样。"
        },
        {
            "start": 110.4,
            "end": 113.8,
            "text": "来自搜索引擎的用户和来自社交媒体的用户，"
        },
        {
            "start": 113.8,
            "end": 115.5,
            "text": "漏斗也不一样。"
        },
        {
            "start": 115.5,
            "end": 118.74,
            "text": "AI 可以自动把用户按不同维度切分，"
        },
        {
            "start": 118.74,
            "end": 120.54,
            "text": "分别看每个群体的漏斗。"
        },
        {
            "start": 120.54,
            "end": 121.8,
            "text": "你可能发现："
        },
        {
            "start": 121.8,
            "end": 125.0,
            "text": "来自社交媒体的用户在\"浏览到加购\"这"
        },
        {
            "start": 125.0,
            "end": 126.52,
            "text": "一步的转化率特别低，"
        },
        {
            "start": 126.52,
            "end": 127.89333333333332,
            "text": "只有百分之二十。"
        },
        {
            "start": 127.89333333333332,
            "end": 132.29999999999998,
            "text": "而来自搜索引擎的用户在这一步是百分之四十五。"
        },
        {
            "start": 132.3,
            "end": 133.22,
            "text": "这告诉你什么？"
        },
        {
            "start": 133.22,
            "end": 136.8,
            "text": "社交媒体来的用户可能是\"随便看看\"的心态，"
        },
        {
            "start": 136.8,
            "end": 137.82000000000002,
            "text": "购买意图低。"
        },
        {
            "start": 137.82000000000002,
            "end": 141.38,
            "text": "你需要针对这个群体设计不同的转化策略。"
        },
        {
            "start": 142.0,
            "end": 143.42,
            "text": "第二，路径分析。"
        },
        {
            "start": 143.42,
            "end": 146.68,
            "text": "传统漏斗假设用户按固定的路径走。"
        },
        {
            "start": 146.68,
            "end": 149.56,
            "text": "但实际上用户的路径千变万化。"
        },
        {
            "start": 149.56,
            "end": 152.1,
            "text": "有人先看了三个商品再加购，"
        },
        {
            "start": 152.1,
            "end": 155.92,
            "text": "有人先加购又去比较了其他商品再结算。"
        },
        {
            "start": 155.92,
            "end": 158.34,
            "text": "AI 可以分析用户的真实路径，"
        },
        {
            "start": 158.34,
            "end": 161.08,
            "text": "发现\"最高效的转化路径\"是什么。"
        },
        {
            "start": 161.08,
            "end": 164.68,
            "text": "也许那些先看了评价再看商品详情的用户，"
        },
        {
            "start": 164.68,
            "end": 167.9,
            "text": "转化率比直接看商品详情的高两倍。"
        },
        {
            "start": 167.9,
            "end": 172.2,
            "text": "那你就应该在商品详情页更突出地展示用户评价。"
        },
        {
            "start": 172.2,
            "end": 174.04,
            "text": "第三，预测性漏斗。"
        },
        {
            "start": 174.04,
            "end": 178.66,
            "text": "AI 不只是看已经发生的转化数据，还能预测未来的转化。"
        },
        {
            "start": 178.66,
            "end": 181.28,
            "text": "比如一个用户浏览了三个商品、"
        },
        {
            "start": 181.28,
            "end": 183.86,
            "text": "收藏了一个、停留了十分钟。"
        },
        {
            "start": 183.86,
            "end": 185.02,
            "text": "基于这些行为，"
        },
        {
            "start": 185.02,
            "end": 188.82,
            "text": "AI 预测他在接下来二十四小时内购买的"
        },
        {
            "start": 188.82,
            "end": 190.72000000000003,
            "text": "概率是百分之三十五。"
        },
        {
            "start": 190.72000000000003,
            "end": 195.48,
            "text": "对高概率的用户，你可以推送一个限时优惠来促成转化。"
        },
        {
            "start": 195.48,
            "end": 197.72,
            "text": "好，讲完漏斗，来聊归因。"
        },
        {
            "start": 197.72,
            "end": 198.96,
            "text": "什么是归因问题？"
        },
        {
            "start": 198.96,
            "end": 201.66,
            "text": "一个客户最终购买了你的产品。"
        },
        {
            "start": 202.20000000000002,
            "end": 204.92,
            "text": "但在购买之前，他可能经历了多个触点："
        },
        {
            "start": 204.92,
            "end": 206.7,
            "text": "看了你的公众号文章、"
        },
        {
            "start": 206.7,
            "end": 208.22,
            "text": "点了一个搜索广告、"
        },
        {
            "start": 208.22,
            "end": 210.03999999999996,
            "text": "收到了一封促销邮件、"
        },
        {
            "start": 210.04,
            "end": 212.82,
            "text": "在社交媒体上看到了朋���的推荐。"
        },
        {
            "start": 213.57999999999998,
            "end": 216.82,
            "text": "问题是：这笔成交的\"功劳\"应该归给谁？"
        },
        {
            "start": 216.82,
            "end": 218.2,
            "text": "是公众号文章？"
        },
        {
            "start": 218.2,
            "end": 219.38,
            "text": "搜索广告？"
        },
        {
            "start": 219.38,
            "end": 220.14,
            "text": "促销邮件？"
        },
        {
            "start": 220.14,
            "end": 221.66,
            "text": "还是朋友推荐？"
        },
        {
            "start": 222.1,
            "end": 223.38,
            "text": "这个问题非常重要。"
        },
        {
            "start": 223.38,
            "end": 225.74,
            "text": "因为它直接影响你的预算分配。"
        },
        {
            "start": 226.2,
            "end": 228.5,
            "text": "如果你觉得搜索广告的功劳最大，"
        },
        {
            "start": 228.5,
            "end": 230.6,
            "text": "你就会加大搜索广告的预算。"
        },
        {
            "start": 231.12,
            "end": 235.28,
            "text": "如果你觉得是朋友推荐，你就会加大口碑营销的投入。"
        },
        {
            "start": 235.28,
            "end": 238.08,
            "text": "归因错了，预算就分配错了。"
        },
        {
            "start": 238.08,
            "end": 239.94,
            "text": "传统的归因模型有几种。"
        },
        {
            "start": 239.94,
            "end": 242.28,
            "text": "第一种：最后触点归因。"
        },
        {
            "start": 242.28,
            "end": 244.84,
            "text": "把功劳全部归给最后一个触点。"
        },
        {
            "start": 244.84,
            "end": 249.58,
            "text": "客户最后点了搜索广告才购买的，功劳全给搜索广告。"
        },
        {
            "start": 249.58,
            "end": 251.62,
            "text": "这个模型简单但不公平。"
        },
        {
            "start": 251.62,
            "end": 255.56,
            "text": "前面的公众号文章可能是让客户第一次知道你的，"
        },
        {
            "start": 255.56,
            "end": 258.1,
            "text": "没有它客户根本不会搜索你。"
        },
        {
            "start": 258.1,
            "end": 260.38,
            "text": "但它的功劳被完全忽略了。"
        },
        {
            "start": 260.6,
            "end": 262.8,
            "text": "第二��：首次触点归因。"
        },
        {
            "start": 262.8,
            "end": 265.6,
            "text": "把功劳全部归给第一个触点。"
        },
        {
            "start": 265.6,
            "end": 270.04,
            "text": "客户第一次是通过公众号文章知道你的，功劳全给公众号。"
        },
        {
            "start": 270.04,
            "end": 271.36,
            "text": "这个模型也不公平。"
        },
        {
            "start": 271.36,
            "end": 275.7,
            "text": "中间的搜索广告和促销邮件也起了作用，被忽略了。"
        },
        {
            "start": 275.7,
            "end": 277.9,
            "text": "第三种：平均分配归因。"
        },
        {
            "start": 277.9,
            "end": 279.62,
            "text": "所有触点平分功劳。"
        },
        {
            "start": 279.62,
            "end": 281.864,
            "text": "每个触点得四分之一。"
        },
        {
            "start": 281.864,
            "end": 283.74,
            "text": "这看似公平，但也不合理。"
        },
        {
            "start": 283.74,
            "end": 287.1,
            "text": "因为不同触点在客户决策过程中的作用不同。"
        },
        {
            "start": 287.1,
            "end": 289.3,
            "text": "有些触点是\"引发兴趣\"，"
        },
        {
            "start": 289.3,
            "end": 290.72,
            "text": "有些是\"加深了解\"，"
        },
        {
            "start": 290.72,
            "end": 292.06,
            "text": "有些是\"促成购买\"。"
        },
        {
            "start": 292.06,
            "end": 294.48,
            "text": "它们的贡献不应该一样。"
        },
        {
            "start": 294.48,
            "end": 297.82,
            "text": "AI 归因模型比这些传统方法聪明得多。"
        },
        {
            "start": 297.82,
            "end": 301.0,
            "text": "AI 归因的核心思路是\"数据驱动归因\"。"
        },
        {
            "start": 301.0,
            "end": 303.52,
            "text": "不靠人为的规则来分配功劳，"
        },
        {
            "start": 303.52,
            "end": 307.72,
            "text": "而是让 AI 从大量的用户行为数据中学习："
        },
        {
            "start": 307.72,
            "end": 310.68,
            "text": "哪些触点组合最有效地促成了转化。"
        },
        {
            "start": 310.68,
            "end": 312.96,
            "text": "AI 归因模型怎么工作？"
        },
        {
            "start": 312.96,
            "end": 315.86,
            "text": "简单来说，它会比较两组用户。"
        },
        {
            "start": 315.86,
            "end": 318.14,
            "text": "一组是完成了转化的用户，一组是没有转化的用户。"
        },
        {
            "start": 320.18,
            "end": 323.42,
            "text": "然后分析这两组用户的触点差异。"
        },
        {
            "start": 323.96000000000004,
            "end": 327.72,
            "text": "如果接触了某个触点的用户转化率明显更高，"
        },
        {
            "start": 327.72,
            "end": 330.2,
            "text": "那这个触点的贡献就更大。"
        },
        {
            "start": 330.2,
            "end": 331.66,
            "text": "比如 AI 发现："
        },
        {
            "start": 331.66,
            "end": 335.08,
            "text": "看了公众号文章又看了搜索广告的用户，"
        },
        {
            "start": 335.08,
            "end": 336.99999999999994,
            "text": "转化率是百分之十二。"
        },
        {
            "start": 337.0,
            "end": 339.94,
            "text": "只看了搜索广告没看公众号文章的用户，"
        },
        {
            "start": 339.94,
            "end": 341.64000000000004,
            "text": "转化率是百分之四。"
        },
        {
            "start": 341.64000000000004,
            "end": 344.18,
            "text": "那公众号文章的\"增量贡献\"就很大。"
        },
        {
            "start": 344.18,
            "end": 348.32,
            "text": "这种分析比简单的\"最后触点\"或\"平均分配\"精准得多。"
        },
        {
            "start": 348.32,
            "end": 352.08,
            "text": "AI 归因还可以发现\"触点之间的协同效应\"。"
        },
        {
            "start": 352.08,
            "end": 355.26,
            "text": "也许公众号文章单独的效果一般，"
        },
        {
            "start": 355.26,
            "end": 357.58,
            "text": "搜索广告单独的效果也一般。"
        },
        {
            "start": 357.58,
            "end": 361.34,
            "text": "但\"先看文章再点广告\"的组合效果特别好。"
        },
        {
            "start": 361.34,
            "end": 365.28,
            "text": "这种协同效应，传统归因模型完全看不到。"
        },
        {
            "start": 365.28,
            "end": 368.44,
            "text": "讲一个漏斗加归因的实际应用案例。"
        },
        {
            "start": 368.44,
            "end": 370.1,
            "text": "一家在线教育公司。"
        },
        {
            "start": 370.1,
            "end": 373.14,
            "text": "他们的获客漏斗是：免费试听、注册、"
        },
        {
            "start": 373.14,
            "end": 375.02,
            "text": "试用七天、付费购买。"
        },
        {
            "start": 375.02,
            "end": 376.4,
            "text": "漏斗分析发现："
        },
        {
            "start": 376.4,
            "end": 379.74,
            "text": "从\"试用七天\"到\"付费购买\"的转化率特别低，"
        },
        {
            "start": 379.74,
            "end": 380.66399999999993,
            "text": "只有百分之八。"
        },
        {
            "start": 380.66399999999993,
            "end": 382.04,
            "text": "这是最大的漏损点。"
        },
        {
            "start": 382.04,
            "end": 385.32,
            "text": "进一步用 AI 做分群漏斗分析。"
        },
        {
            "start": 385.32,
            "end": 387.26,
            "text": "发现了一个有意思的差异："
        },
        {
            "start": 387.26,
            "end": 391.02,
            "text": "那些在试用期内完成了至少三节课的用户，"
        },
        {
            "start": 391.02,
            "end": 393.7399999999999,
            "text": "付费转化率是百分之二十五。"
        },
        {
            "start": 393.74,
            "end": 397.38800000000003,
            "text": "而只完成了一节课的用户，转化率只有百分之三。"
        },
        {
            "start": 397.38800000000003,
            "end": 402.28,
            "text": "洞察很清楚：关键是让用户在试用期内完成三节课。"
        },
        {
            "start": 402.28,
            "end": 404.88,
            "text": "然后用 AI 做归因分析："
        },
        {
            "start": 404.88,
            "end": 409.14,
            "text": "哪些触点最能促进用户在试用期内多上课？"
        },
        {
            "start": 409.14,
            "end": 413.46,
            "text": "结果发现：第三天的个性化推送提醒效果最好。"
        },
        {
            "start": 413.46,
            "end": 415.4,
            "text": "收到了第三天推送的用户，"
        },
        {
            "start": 415.4,
            "end": 418.7999999999999,
            "text": "七天内完成三节课的比例是百分之四十五。"
        },
        {
            "start": 418.8,
            "end": 420.90000000000003,
            "text": "没收到的只有百分之十五。"
        },
        {
            "start": 420.90000000000003,
            "end": 422.84,
            "text": "行动方案就很清晰了。"
        },
        {
            "start": 422.84,
            "end": 423.04,
            "text": "第一，"
        },
        {
            "start": 423.04,
            "end": 427.42,
            "text": "确保每个试用用户在第三天都收到个性化的推送提醒。"
        },
        {
            "start": 427.42,
            "end": 431.06,
            "text": "第二，优化推送的内容，让它更有针对性。"
        },
        {
            "start": 431.06,
            "end": 433.84,
            "text": "第三，在产品中增加引导机制，"
        },
        {
            "start": 433.84,
            "end": 436.64,
            "text": "鼓励用户在前七天内完成三节课。"
        },
        {
            "start": 436.64,
            "end": 437.72,
            "text": "实施之后，"
        },
        {
            "start": 437.72,
            "end": 442.13999999999993,
            "text": "试用到付费的转化率从百分之八提升到了百分之十四。"
        },
        {
            "start": 442.14,
            "end": 443.3,
            "text": "好，总结一下。"
        },
        {
            "start": 443.3,
            "end": 446.64,
            "text": "漏斗分析找到最大漏损点，集中力量优化。"
        },
        {
            "start": 446.64,
            "end": 450.58,
            "text": "AI 增强漏斗：分群漏斗、路径分析、预测性漏斗。"
        },
        {
            "start": 450.58,
            "end": 454.5,
            "text": "归因分析回答\"功劳归谁\"，指导预算分配。"
        },
        {
            "start": 454.5,
            "end": 458.32,
            "text": "AI 数据驱动归因比传统归因更精准，"
        },
        {
            "start": 458.32,
            "end": 460.72,
            "text": "还能发现触点协同效应。"
        },
        {
            "start": 460.72,
            "end": 463.72,
            "text": "漏���加归因的组合拳：找到漏损点，"
        },
        {
            "start": 463.72,
            "end": 465.76,
            "text": "再找到最有效的解决手段。"
        },
        {
            "start": 465.76,
            "end": 469.7,
            "text": "下一期我们聊预测分析：用 AI 预测业务趋势。"
        },
        {
            "start": 469.7,
            "end": 471.96,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 471.96,
            "end": 475.6,
            "text": "1. 漏斗分析：找到最大漏损点，集中资源优化"
        },
        {
            "start": 475.6,
            "end": 480.28,
            "text": "2. AI 增强漏斗：分群漏斗、路径分析、预测性漏斗"
        },
        {
            "start": 480.28,
            "end": 486.52,
            "text": "3. 归因模型进化：最后触点 → 平均分配 → AI 数据驱动归因"
        },
        {
            "start": 486.52,
            "end": 489.2,
            "text": "4. 漏斗+归因组合："
        },
        {
            "start": 489.2,
            "end": 492.18,
            "text": "找到问题在哪 + 找到最有效的解决手段"
        },
        {
            "start": 492.18,
            "end": 498.48,
            "text": "1. 画出你的核心业务漏斗，每一层的转化率是多少？"
        },
        {
            "start": 498.48,
            "end": 500.2,
            "text": "最大漏损点在哪？"
        },
        {
            "start": 500.88,
            "end": 503.12,
            "text": "2. 你目前用什么归因模型？"
        },
        {
            "start": 503.12,
            "end": 504.0,
            "text": "它合理吗？"
        },
        {
            "start": 504.0,
            "end": 508.06,
            "text": "3. 如果你能把漏斗中最弱的一环提升十个百分点，"
        },
        {
            "start": 508.06,
            "end": 510.02,
            "text": "对整体业务的影响有多大？"
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
], navigation: { nextLessonUrl: "./lesson-data-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-06.html?entry={entry}", secondaryHref: "./lesson-data-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-05", coachSource: "./ai-coach.html?source=lesson-data-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于漏斗分析与归因：AI 帮你找到增长杠杆的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "漏斗分析与归因：AI 帮你找到增长杠杆", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
