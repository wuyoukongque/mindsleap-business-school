(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的数据分析框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的数据判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.data06 = {
    shell: {
      documentTitle: "MindsLeap Business School · Data 第6课",
      backLink: { href: './module-data.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 数据驱动经营',
      lessonTitle: "第6课：预测分析：用 AI 预测业务趋势",
      heroMeta: ['🎙 Data 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀数据判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立数据判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的数据判断框架'] },
      player: { initialSlide: "./assets/slides/data-ep91-predictive-analytics/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：预测分析：用 AI 预测业务趋势", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-data.html?entry=sequence#lesson-6", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个数据判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的数据优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的数据学习，最终都会回到资源配置与数据判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-data-07.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "预测分析：用 AI 预测业务趋势",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AB 测试与实验文化",
                "body": "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
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
], nextLessonHref: "./lesson-data-07.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-data.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组数据分析框架学完整。", meta: ["当前完成：数据驱动经营 6/11", "建议下一节：AB 测试与实验文化", '也可以先整理这一节'], nextHref: "./lesson-data-07.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-data.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'data', lessonId: "data-06", modulePage: 'module-data.html', progressNamespace: 'data', progressLessonKey: "lesson6", audioSource: './assets/audio/data-ep91-predictive-analytics.mp3?v=20260514-data-01a', vttSrc: './assets/subtitles/data-ep91-predictive-analytics.vtt?v=20260514-data-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-data-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "data-ep91-predictive-analytics/slide_01.png",
            "label": "预测分析：用 AI 预测业务趋势",
            "caption": "这一节会帮助你系统理解：预测分析：用 AI 预测业务趋势"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_02.png",
            "label": "先看数据为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_03.png",
            "label": "核心指标与判断",
            "caption": "不只是看历史趋势，还看季节因素、节假日效应、天气影响、营销活动计划、行业数据。 然后综合所有因素给出一个更精准的预测。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_04.png",
            "label": "从看见到解释",
            "caption": "帮你提前做好财务规划。 传统的财务预测靠人工做 Excel 模型。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "预测销量可能需要：历史销量、季节因素、促销计划、天气数据、竞品价格。 预测流失可能需要：客户的使用频率、消费金额、互动记录、投诉记录。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "要考虑\"如果预测偏高了怎么办\"\"如果预测偏低了怎么办\"。 做好应对不同场景的预案。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_07.png",
            "label": "本节行动提示",
            "caption": "悲观情景：如果行业零增长，竞品大打价格战，我们被迫跟进降价，那下个季度的营收可能下降百分之五。 对每个情景，提前想好应对策略。"
        },
        {
            "file": "data-ep91-predictive-analytics/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的数据分析框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.78,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.78,
            "end": 4.18,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.18,
            "end": 5.82,
            "text": "今天聊预测分析。"
        },
        {
            "start": 5.82,
            "end": 9.26,
            "text": "前面几期我们讲了怎么用数据看过去发生了什么。"
        },
        {
            "start": 9.26,
            "end": 12.559999999999999,
            "text": "今天讲怎么用数据预测未来会发生什么。"
        },
        {
            "start": 12.559999999999999,
            "end": 15.3,
            "text": "预测分析在商业中的价值非常大。"
        },
        {
            "start": 15.3,
            "end": 18.46,
            "text": "如果你能提前知道下个月的销量大概是多少，"
        },
        {
            "start": 18.46,
            "end": 21.939999999999998,
            "text": "你就能提前做好库存和产能准备。"
        },
        {
            "start": 21.939999999999998,
            "end": 25.0,
            "text": "如果你能提前知道哪些客户可能会流失，"
        },
        {
            "start": 25.0,
            "end": 28.18,
            "text": "你就能在他们走之前做干预。"
        },
        {
            "start": 28.18,
            "end": 31.8,
            "text": "AI 让预测分析变得更准确也更普及。"
        },
        {
            "start": 31.8,
            "end": 34.8,
            "text": "过去这是数据科学家的专属技能，"
        },
        {
            "start": 34.8,
            "end": 38.46000000000001,
            "text": "现在管理者也可以借助 AI 工具来做预测。"
        },
        {
            "start": 38.46000000000001,
            "end": 40.79,
            "text": "先讲预测分析的基本逻辑。"
        },
        {
            "start": 40.79,
            "end": 42.14,
            "text": "预测的本质是什么？"
        },
        {
            "start": 42.14,
            "end": 44.78,
            "text": "是从历史数据中找到规律，"
        },
        {
            "start": 44.78,
            "end": 48.21250000000001,
            "text": "然后假设这些规律在未来还会继续。"
        },
        {
            "start": 48.21250000000001,
            "end": 50.2,
            "text": "最简单的预测就是看趋势。"
        },
        {
            "start": 50.2,
            "end": 52.57333333333332,
            "text": "过去三个月的营收分别是一百万、"
        },
        {
            "start": 52.57333333333332,
            "end": 54.21777777777774,
            "text": "一百一十万、一百二十万。"
        },
        {
            "start": 54.21777777777774,
            "end": 57.04,
            "text": "按这个趋势，下个月可能是一百三十万左右。"
        },
        {
            "start": 57.04,
            "end": 59.2,
            "text": "但现实比这复杂得多。"
        },
        {
            "start": 59.2,
            "end": 61.2,
            "text": "营收不是线性增长的。"
        },
        {
            "start": 61.2,
            "end": 63.988,
            "text": "它会受到季节性、促销活动、竞品行为、"
        },
        {
            "start": 63.988,
            "end": 66.3,
            "text": "宏观经济等各种因素的影响。"
        },
        {
            "start": 66.3,
            "end": 68.88,
            "text": "AI 预测分析的厉害之处在于："
        },
        {
            "start": 68.88,
            "end": 71.94,
            "text": "它可以同时考虑几十甚至上百个因素。"
        },
        {
            "start": 71.94,
            "end": 75.3,
            "text": "不只是看历史趋势，还看季节因素、"
        },
        {
            "start": 75.3,
            "end": 78.62000000000002,
            "text": "节假日效应、天气影响、营销活动计划、"
        },
        {
            "start": 78.62000000000002,
            "end": 79.28000000000002,
            "text": "行业数据。"
        },
        {
            "start": 79.28000000000002,
            "end": 82.91999999999999,
            "text": "然后综合所有因素给出一个更精准的预测。"
        },
        {
            "start": 82.91999999999999,
            "end": 85.6,
            "text": "预测分析在商业中有四个核心应用。"
        },
        {
            "start": 85.6,
            "end": 87.53,
            "text": "第一个应用：需求预测。"
        },
        {
            "start": 87.53,
            "end": 90.04499999999999,
            "text": "这个我们在供应链那期讲过。"
        },
        {
            "start": 90.04499999999999,
            "end": 92.64,
            "text": "预测未来一段时间的产品需求量，"
        },
        {
            "start": 92.64,
            "end": 94.91999999999999,
            "text": "帮你做好库存和生产准备。"
        },
        {
            "start": 94.92,
            "end": 98.22,
            "text": "AI 需求预测可以做到很细的粒度。"
        },
        {
            "start": 98.22,
            "end": 99.84,
            "text": "不只是预测\"总需求\"，"
        },
        {
            "start": 99.84,
            "end": 101.94,
            "text": "还能预测\"每个产品、每个地区、"
        },
        {
            "start": 101.94,
            "end": 103.46,
            "text": "每个时间段的需求\"。"
        },
        {
            "start": 103.46,
            "end": 106.78,
            "text": "需求预测对零售和电商特别重要。"
        },
        {
            "start": 106.78,
            "end": 108.92999999999999,
            "text": "预测太高，库存积压。"
        },
        {
            "start": 108.92999999999999,
            "end": 110.92,
            "text": "预测太低，缺货损失。"
        },
        {
            "start": 110.92,
            "end": 116.32,
            "text": "AI 需求预测通常比传统方法准确率提升百分之二十到五十。"
        },
        {
            "start": 116.32,
            "end": 118.50799999999998,
            "text": "第二个应用：客户行为预测。"
        },
        {
            "start": 118.50799999999998,
            "end": 120.25999999999999,
            "text": "预测客户的未来行为。"
        },
        {
            "start": 120.25999999999999,
            "end": 121.38,
            "text": "谁可能会流失？"
        },
        {
            "start": 121.38,
            "end": 123.66,
            "text": "谁可能会升级到更高的套餐？"
        },
        {
            "start": 123.66,
            "end": 126.32,
            "text": "谁可能会购买某个新产品？"
        },
        {
            "start": 126.32,
            "end": 129.84,
            "text": "AI 通过分析客户的历史行为模式来做预测。"
        },
        {
            "start": 129.84,
            "end": 134.18,
            "text": "比如一个客户的登录频率从每天一次降到了每周一次，"
        },
        {
            "start": 134.18,
            "end": 137.08,
            "text": "购买间隔从一个月变成了三个月，"
        },
        {
            "start": 137.08,
            "end": 139.48,
            "text": "最近一次客服互动是投诉。"
        },
        {
            "start": 139.48,
            "end": 142.82,
            "text": "AI 综合这些信号，给出一个\"流失概率\"。"
        },
        {
            "start": 142.82,
            "end": 146.1,
            "text": "如果概率超过某个阈值，就触发预警。"
        },
        {
            "start": 146.1,
            "end": 148.14000000000004,
            "text": "第三个应用：财务预测。"
        },
        {
            "start": 148.14000000000004,
            "end": 150.74,
            "text": "预测未来的营收、成本、现金流。"
        },
        {
            "start": 150.74,
            "end": 153.16666666666669,
            "text": "帮你提前做好财务规划。"
        },
        {
            "start": 153.16666666666669,
            "end": 156.34,
            "text": "传统的财务预测靠人工做 Excel 模型。"
        },
        {
            "start": 156.62,
            "end": 158.14,
            "text": "假设太多、更新太慢。"
        },
        {
            "start": 158.14,
            "end": 161.66857142857145,
            "text": "AI 可以实时根据最新的业务数据自动更新预测。"
        },
        {
            "start": 161.66857142857145,
            "end": 165.12,
            "text": "当实际数据偏离预测时，AI 自动调整模型。"
        },
        {
            "start": 165.54000000000002,
            "end": 167.32000000000002,
            "text": "第四个应用：风险预测。"
        },
        {
            "start": 167.32000000000002,
            "end": 168.95999999999995,
            "text": "预测各种业务风险。"
        },
        {
            "start": 168.95999999999995,
            "end": 171.66000000000003,
            "text": "设备故障风险、供应链中断风险、"
        },
        {
            "start": 171.66000000000003,
            "end": 174.12,
            "text": "市场变化风险、信用违约风险。"
        },
        {
            "start": 174.12,
            "end": 178.02,
            "text": "AI 风险预测的逻辑跟客户流失预测类似："
        },
        {
            "start": 178.02,
            "end": 181.58,
            "text": "从历史数据中找到\"风险发生前的信号模式\"，"
        },
        {
            "start": 181.58,
            "end": 183.83,
            "text": "然后实时监控这些信号。"
        },
        {
            "start": 183.83,
            "end": 185.64,
            "text": "好，预测分析怎么做？"
        },
        {
            "start": 185.64,
            "end": 187.34,
            "text": "我给你一个实用的框架。"
        },
        {
            "start": 187.34,
            "end": 189.48,
            "text": "第一步：明确预测目标。"
        },
        {
            "start": 189.48,
            "end": 190.704,
            "text": "你要预测什么？"
        },
        {
            "start": 190.704,
            "end": 192.42,
            "text": "这个问题必须非常具体。"
        },
        {
            "start": 192.42,
            "end": 194.26,
            "text": "不是\"预测未来的业务情况\"，"
        },
        {
            "start": 194.26,
            "end": 197.82999999999998,
            "text": "而是\"预测下个月每个产品线的月销量\"或"
        },
        {
            "start": 197.82999999999998,
            "end": 201.1,
            "text": "者\"预测每个客户未来三十天的流失概率\"。"
        },
        {
            "start": 201.1,
            "end": 204.18,
            "text": "预测目标越具体，预测越可能有用。"
        },
        {
            "start": 204.18,
            "end": 205.91333333333333,
            "text": "第二步：准备数据。"
        },
        {
            "start": 205.91333333333333,
            "end": 207.42999999999998,
            "text": "预测需要历史数据。"
        },
        {
            "start": 207.42999999999998,
            "end": 210.14,
            "text": "数据量越大、维度越多，预测越准。"
        },
        {
            "start": 210.14,
            "end": 212.15714285714282,
            "text": "通常需要两类数据。"
        },
        {
            "start": 212.15714285714282,
            "end": 214.88,
            "text": "一类是\"目标变量\"的历史数据。"
        },
        {
            "start": 214.88,
            "end": 217.9,
            "text": "你要预测销量，就需要过去的销量数据。"
        },
        {
            "start": 217.9,
            "end": 221.34000000000003,
            "text": "你要预测流失，就需要过去的流失记录。"
        },
        {
            "start": 221.34000000000003,
            "end": 223.26,
            "text": "另一类是\"特征变量\"的数据。"
        },
        {
            "start": 223.26,
            "end": 225.74,
            "text": "就是可能影响目标变量的因素。"
        },
        {
            "start": 225.74,
            "end": 228.32,
            "text": "预测销量可能需要：历史销量、"
        },
        {
            "start": 228.32,
            "end": 230.945,
            "text": "季节因素、促销计划、天气数据、"
        },
        {
            "start": 230.945,
            "end": 232.0,
            "text": "竞品价格。"
        },
        {
            "start": 232.0,
            "end": 235.3,
            "text": "预测流失可能需要：客户的使用频率、"
        },
        {
            "start": 235.3,
            "end": 237.54,
            "text": "消费金额、互动记录、投诉记录。"
        },
        {
            "start": 237.54,
            "end": 239.84,
            "text": "第三步：选择预测方法。"
        },
        {
            "start": 239.84,
            "end": 243.7,
            "text": "对大多数管理者来说，你不需要自己训练 AI 模型。"
        },
        {
            "start": 243.7,
            "end": 246.5,
            "text": "现在有很多工具可以帮你做预测分析。"
        },
        {
            "start": 246.5,
            "end": 250.90666666666667,
            "text": "你只需要把数据导入工具，工具自动帮你建模和预测。"
        },
        {
            "start": 250.90666666666667,
            "end": 254.94,
            "text": "当然，如果你有数据团队，他们可以用更专业的方法来做。"
        },
        {
            "start": 254.94,
            "end": 257.1,
            "text": "第四步：评估预测准确性。"
        },
        {
            "start": 257.1,
            "end": 258.66,
            "text": "预测一定有误差。"
        },
        {
            "start": 258.66,
            "end": 261.68500000000006,
            "text": "关键是误差在可接受的范围内。"
        },
        {
            "start": 261.68500000000006,
            "end": 264.3,
            "text": "评估预测准确性的方法是\"回测\"。"
        },
        {
            "start": 264.3,
            "end": 269.0,
            "text": "用过去的数据来模拟预测，然后跟实际结果对比。"
        },
        {
            "start": 269.0,
            "end": 274.16,
            "text": "如果预测值和实际值的偏差在百分之十到十五以内，"
        },
        {
            "start": 274.16,
            "end": 276.62,
            "text": "通常就是一个有用的预测了。"
        },
        {
            "start": 277.14,
            "end": 279.38,
            "text": "第五步：持续更新模型。"
        },
        {
            "start": 279.38,
            "end": 283.78,
            "text": "业务环境在变，过去的规律不一定在未来还适用。"
        },
        {
            "start": 283.78,
            "end": 288.0466666666666,
            "text": "预测模型需要定期用最新的数据重新训练和校准。"
        },
        {
            "start": 288.0466666666666,
            "end": 290.8,
            "text": "讲几个预测分析的注意事项。"
        },
        {
            "start": 290.8,
            "end": 293.44,
            "text": "第一，预测不是确定性的。"
        },
        {
            "start": 293.44,
            "end": 294.9,
            "text": "预测是概率性的。"
        },
        {
            "start": 294.9,
            "end": 299.69199999999995,
            "text": "\"下个月销量预计是一万件，置信区间是八千到一万两千。"
        },
        {
            "start": 299.69199999999995,
            "end": 303.56,
            "text": "\"这意味着实际销量最可能在八千到一万两千之间，"
        },
        {
            "start": 303.56,
            "end": 305.68000000000006,
            "text": "但也可能超出这个范围。"
        },
        {
            "start": 305.68000000000006,
            "end": 309.06,
            "text": "不要把预测当成确定的数字来做决策。"
        },
        {
            "start": 309.06,
            "end": 311.54,
            "text": "要考虑\"如果预测偏高了怎么办\"\""
        },
        {
            "start": 311.54,
            "end": 313.2,
            "text": "如果预测偏低了怎么办\"。"
        },
        {
            "start": 313.2,
            "end": 315.52,
            "text": "做好应对不同场景的预案。"
        },
        {
            "start": 315.52,
            "end": 319.32,
            "text": "第二，预测无法应对\"黑天鹅\"事件。"
        },
        {
            "start": 319.32,
            "end": 322.08,
            "text": "AI 预测是基于历史规律的。"
        },
        {
            "start": 322.08,
            "end": 325.24,
            "text": "如果发生了历史上从未出现过的事件，"
        },
        {
            "start": 325.24,
            "end": 328.4,
            "text": "比如突发的行业政策变化、全球疫情，"
        },
        {
            "start": 328.4,
            "end": 330.6,
            "text": "AI 预测就会严重失准。"
        },
        {
            "start": 331.08000000000004,
            "end": 333.86,
            "text": "第三，预测的价值不在于\"精确\"，"
        },
        {
            "start": 333.86,
            "end": 336.06,
            "text": "而在于\"比没有预测好\"。"
        },
        {
            "start": 336.06,
            "end": 338.32,
            "text": "你不需要预测精确到个位数。"
        },
        {
            "start": 338.32,
            "end": 341.84,
            "text": "只要预测能帮你做出比\"拍脑袋\"更好的决策，"
        },
        {
            "start": 341.84,
            "end": 343.2,
            "text": "它就有价值。"
        },
        {
            "start": 343.2,
            "end": 343.88,
            "text": "比如，"
        },
        {
            "start": 343.88,
            "end": 347.34,
            "text": "人工凭经验预测下个月需要备货一万件，"
        },
        {
            "start": 347.34,
            "end": 350.1600000000001,
            "text": "实际需要八千件，偏差百分之二十五。"
        },
        {
            "start": 350.1600000000001,
            "end": 352.8999999999999,
            "text": "AI 预测是八千五百件，偏差百分之六。"
        },
        {
            "start": 352.9,
            "end": 356.68,
            "text": "AI 不是完美的，但比人工拍脑袋好多了。"
        },
        {
            "start": 356.68,
            "end": 359.02,
            "text": "最后讲一个概念：情景分析。"
        },
        {
            "start": 359.02,
            "end": 361.64,
            "text": "情景分析是预测分析的高级玩法。"
        },
        {
            "start": 361.64,
            "end": 363.1000000000001,
            "text": "不是只做一个预测，"
        },
        {
            "start": 363.1000000000001,
            "end": 366.94,
            "text": "而是做多个\"如果怎样就会怎样\"的预测。"
        },
        {
            "start": 366.94,
            "end": 367.38,
            "text": "比如："
        },
        {
            "start": 367.38,
            "end": 370.4633333333333,
            "text": "乐观情景：如果行业增长百分之十，"
        },
        {
            "start": 370.4633333333333,
            "end": 371.76000000000005,
            "text": "竞品没有新动作，"
        },
        {
            "start": 371.76000000000005,
            "end": 374.14000000000004,
            "text": "我们的营销投入增加百分之二十，"
        },
        {
            "start": 374.14000000000004,
            "end": 384.4999999999999,
            "text": "那下个季度的营收预计增长百分之十五。"
        },
        {
            "start": 384.5,
            "end": 390.16400000000016,
            "text": "基准情景：如果行业增长百分之五，"
        },
        {
            "start": 390.16400000000016,
            "end": 390.2664000000004,
            "text": "竞品推出类似产品，"
        },
        {
            "start": 390.2664000000004,
            "end": 390.3816000000006,
            "text": "我们的营销投入不变，"
        },
        {
            "start": 390.3816000000006,
            "end": 390.58640000000105,
            "text": "那下个季度的营收预计增长百分之五。"
        },
        {
            "start": 390.58640000000105,
            "end": 390.72720000000135,
            "text": "悲观情景：如果行业零增长，"
        },
        {
            "start": 390.72720000000135,
            "end": 393.94,
            "text": "竞品大打价格战，我们被迫跟进降价，"
        },
        {
            "start": 393.94,
            "end": 397.08400000000006,
            "text": "那下个季度的营收可能下降百分之五。"
        },
        {
            "start": 397.08400000000006,
            "end": 400.32,
            "text": "对每个情景，提前想好应对策略。"
        },
        {
            "start": 400.32,
            "end": 404.58000000000004,
            "text": "这样不管未来往哪个方向发展，你都有准备。"
        },
        {
            "start": 404.58000000000004,
            "end": 407.5,
            "text": "AI 让情景分析变得更容易。"
        },
        {
            "start": 407.5,
            "end": 412.6,
            "text": "你可以调整各种参数，AI 瞬间给你一个新的预测结果。"
        },
        {
            "start": 412.6,
            "end": 416.56000000000006,
            "text": "过去用 Excel 做情景分析可能要调半天公式，"
        },
        {
            "start": 416.56000000000006,
            "end": 419.16,
            "text": "现在 AI 几秒钟就算完了。"
        },
        {
            "start": 419.16,
            "end": 420.56,
            "text": "好，总结一下。"
        },
        {
            "start": 420.56,
            "end": 423.26,
            "text": "预测分析四大应用：需求预测、"
        },
        {
            "start": 423.26,
            "end": 426.1599999999999,
            "text": "客户行为预测、财务预测、风险预测。"
        },
        {
            "start": 426.16,
            "end": 429.5342857142858,
            "text": "五步实操框架：明确目标、准备数据、"
        },
        {
            "start": 429.5342857142858,
            "end": 432.58,
            "text": "选择方法、评估准确性、持续更新。"
        },
        {
            "start": 432.58,
            "end": 436.16,
            "text": "预测不是确定性的，要做情景分析和预案。"
        },
        {
            "start": 436.16,
            "end": 440.24,
            "text": "预测的价值不在于精确，而在于比拍脑袋更好。"
        },
        {
            "start": 440.24,
            "end": 442.98,
            "text": "下一期我们聊 AB 测试与实验文化。"
        },
        {
            "start": 442.98,
            "end": 444.975,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 444.975,
            "end": 448.62,
            "text": "1. 预测分析四大应用：需求预测、"
        },
        {
            "start": 448.62,
            "end": 452.1983333333332,
            "text": "客户行为预测、财务预测、风险预测"
        },
        {
            "start": 452.1983333333332,
            "end": 453.46,
            "text": "2. 五步框架："
        },
        {
            "start": 453.46,
            "end": 458.86,
            "text": "明确目标 → 准备数据 → 选方法 → 评估准确性 → 持续更新"
        },
        {
            "start": 458.86,
            "end": 464.34000000000003,
            "text": "3. 预测是概率性的，要做情景分析（乐观、基准、悲观）"
        },
        {
            "start": 464.34000000000003,
            "end": 469.08,
            "text": "4. 预测的价值：不在于精确，在于比\"拍脑袋\"更好"
        },
        {
            "start": 469.08,
            "end": 472.7,
            "text": "1. 你的业务中最需要预测的是什么？"
        },
        {
            "start": 472.7,
            "end": 473.22,
            "text": "需求？"
        },
        {
            "start": 473.22,
            "end": 474.39,
            "text": "客户行为？"
        },
        {
            "start": 474.39,
            "end": 475.19333333333327,
            "text": "还是财务？"
        },
        {
            "start": 475.19333333333327,
            "end": 478.96000000000004,
            "text": "2. 你有足够的历史数据来支撑预测分析吗？"
        },
        {
            "start": 478.96000000000004,
            "end": 481.1,
            "text": "3. 你做过情景分析吗？"
        },
        {
            "start": 481.1,
            "end": 483.38,
            "text": "你的\"悲观情景\"有没有应对预案？"
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
], navigation: { nextLessonUrl: "./lesson-data-07.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把数据从报表和后台数字，重新变成可以指导经营判断、实验设计和资源配置的管理语言。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是数据判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的数据判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-data-07.html?entry={entry}", secondaryHref: "./lesson-data-07.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-data-06", coachSource: "./ai-coach.html?source=lesson-data-06" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于预测分析：用 AI 预测业务趋势的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "预测分析：用 AI 预测业务趋势", module: '数据驱动经营' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-data-07.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-data.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
