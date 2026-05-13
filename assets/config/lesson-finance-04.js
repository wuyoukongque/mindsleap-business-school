(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第4课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第4课：AI 财务分析：让 AI 成为你的 CFO 助手",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep04-ai-financial-analysis/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 财务分析：让 AI 成为你的 CFO 助手", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-05.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 3,
                "title": "现金流管理：利润不等于现金",
                "body": "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 财务分析：让 AI 成为你的 CFO 助手",
                "body": "把 AI 用进财务分析，让数字阅读更快、更系统。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "公司估值：一家公司到底值多少钱",
                "body": "先建立估值判断框架，理解一家公司的价值到底从哪里来。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-05.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把 AI 用进财务分析，让数字阅读更快、更系统。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "前面三期我们学了财务报表和关键指标"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "有没有什么值得关注的风险信号"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "把ROE拆解成净利率、资产周转率和权益乘数"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "如果你有历史的月度现金流数据，你可以让AI帮你做预测"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 4/13", "建议下一节：公司估值：一家公司到底值多少钱", '也可以先整理这一节'], nextHref: "./lesson-finance-05.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-04", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson4", audioSource: './assets/audio/finance-ep04-ai-financial-analysis.mp3?v=20260411-finance-ep04-r1', vttSrc: './assets/subtitles/finance-ep04-ai-financial-analysis.vtt?v=20260411-finance-ep04-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep04-ai-financial-analysis/slide_01.png",
            "label": "AI 财务分析：让 AI 成为你的 CFO 助手",
            "caption": "这一节会帮助你系统理解：AI 财务分析：让 AI 成为你的 CFO 助手"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_03.png",
            "label": "核心框架",
            "caption": "有没有什么值得关注的风险信号？ \" AI几分钟就能给你一个结构化的分析。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_04.png",
            "label": "关键指标",
            "caption": "把ROE拆解成净利率、资产周转率和权益乘数。 对比最近三年的趋势。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "如果你有历史的月度现金流数据，你可以让AI帮你做预测。 \"这是我公司过去12个月的现金流数据。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_06.png",
            "label": "回到你的企业",
            "caption": "第三，AI的分析是起点不是终点。 AI给你的是一个初步分析，帮你节省了大量的信息处理时间。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_07.png",
            "label": "风险与提醒",
            "caption": "第五步，十分钟，你自己review AI的分析，结合你对业务的了解，做出判断。 三十分钟，你就完成了一个相当深度的财务体检。"
        },
        {
            "file": "finance-ep04-ai-financial-analysis/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.36,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.62,
            "end": 3.5600000000000067,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.5600000000000067,
            "end": 7.0,
            "text": "前面三期我们学了财务报表和关键指标。"
        },
        {
            "start": 7.0,
            "end": 12.14,
            "text": "今天来一期实操课：怎么用AI让财务分析变得又快又简单。"
        },
        {
            "start": 12.14,
            "end": 14.32,
            "text": "以前做财务分析是什么样的？"
        },
        {
            "start": 14.32,
            "end": 17.56,
            "text": "你要打开Excel，下载数据，手动算比率，"
        },
        {
            "start": 17.88,
            "end": 19.5,
            "text": "做图表，写分析报告。"
        },
        {
            "start": 19.5,
            "end": 22.78,
            "text": "一个公司的分析可能要花半天到一天。"
        },
        {
            "start": 22.78,
            "end": 26.62,
            "text": "如果要对比三到五家公司，可能要花好几天。"
        },
        {
            "start": 26.62,
            "end": 27.500000000000007,
            "text": "现在呢？"
        },
        {
            "start": 27.500000000000007,
            "end": 30.8,
            "text": "你把财报数据丢给AI，跟它说话就行了。"
        },
        {
            "start": 30.8,
            "end": 33.14,
            "text": "我给大家演示几个典型的场景。"
        },
        {
            "start": 33.14,
            "end": 35.98,
            "text": "场景一：快速读懂一份财报。"
        },
        {
            "start": 35.98,
            "end": 39.2,
            "text": "你拿到了一家公司的年报PDF。"
        },
        {
            "start": 39.2,
            "end": 42.8,
            "text": "以前你可能要花两三个小时把它从头读到尾。"
        },
        {
            "start": 42.8,
            "end": 47.4,
            "text": "现在你可以把PDF上传给AI，然后跟它说："
        },
        {
            "start": 47.4,
            "end": 48.9,
            "text": "\"请帮我分析这份年报。"
        },
        {
            "start": 48.9,
            "end": 51.559999999999995,
            "text": "提取以下关键指标：收入、净利润、"
        },
        {
            "start": 51.56,
            "end": 54.24,
            "text": "毛利率、净利率、ROE、资产负债率、"
        },
        {
            "start": 54.24,
            "end": 55.64,
            "text": "经营活动现金流。"
        },
        {
            "start": 55.64,
            "end": 59.3,
            "text": "跟去年对比，哪些指标在变好，哪些在变差？"
        },
        {
            "start": 59.3,
            "end": 62.38,
            "text": "有没有什么值得关注的风险信号？"
        },
        {
            "start": 62.38,
            "end": 62.800000000000004,
            "text": "\""
        },
        {
            "start": 62.800000000000004,
            "end": 65.52,
            "text": "AI几分钟就能给你一个结构化的分析。"
        },
        {
            "start": 65.52,
            "end": 67.54,
            "text": "关键数字全部提取出来，"
        },
        {
            "start": 67.54,
            "end": 69.0,
            "text": "同比变化一目了然，"
        },
        {
            "start": 69.0,
            "end": 70.9,
            "text": "风险信号帮你标出来。"
        },
        {
            "start": 70.9,
            "end": 75.08,
            "text": "你原来要花两三个小时做的事情，现在十分钟搞定。"
        },
        {
            "start": 75.08,
            "end": 79.04,
            "text": "当然，你还是要用你的判断力去审核AI的分析。"
        },
        {
            "start": 79.04,
            "end": 80.94,
            "text": "数字有没有提取对？"
        },
        {
            "start": 80.94,
            "end": 82.2,
            "text": "结论合不合理？"
        },
        {
            "start": 82.2,
            "end": 85.22,
            "text": "但审核比从零开始分析快多了。"
        },
        {
            "start": 85.22,
            "end": 87.48,
            "text": "场景二：竞品财务对比。"
        },
        {
            "start": 87.48,
            "end": 90.74,
            "text": "假设你要对比三家上市公司的财务状况。"
        },
        {
            "start": 90.74,
            "end": 96.76,
            "text": "\"请帮我对比、和最近三年的财务数据。"
        },
        {
            "start": 96.76,
            "end": 99.18,
            "text": "做一个对比表格，包括收入、"
        },
        {
            "start": 99.4,
            "end": 102.54,
            "text": "收入增长率、毛利率、净利率、ROE、"
        },
        {
            "start": 102.54,
            "end": 105.58,
            "text": "资产负债率、经营活动现金流。"
        },
        {
            "start": 105.58,
            "end": 107.46,
            "text": "谁的盈利能力最强？"
        },
        {
            "start": 107.46,
            "end": 108.82,
            "text": "谁的增长最快？"
        },
        {
            "start": 108.82,
            "end": 110.6,
            "text": "谁的财务风险最高？"
        },
        {
            "start": 110.6,
            "end": 111.02,
            "text": "\""
        },
        {
            "start": 111.02,
            "end": 114.88,
            "text": "AI会生成一个清晰的对比表格，加上分析结论。"
        },
        {
            "start": 114.88,
            "end": 117.38,
            "text": "你一眼就能看到三家公司的差异。"
        },
        {
            "start": 117.38,
            "end": 120.14,
            "text": "场景三：杜邦分析拆解。"
        },
        {
            "start": 120.14,
            "end": 122.54,
            "text": "上一期我们讲了杜邦分析法。"
        },
        {
            "start": 122.54,
            "end": 124.62,
            "text": "你可以让AI帮你做拆解。"
        },
        {
            "start": 124.62,
            "end": 127.6,
            "text": "\"请对做杜邦分析。"
        },
        {
            "start": 127.6,
            "end": 132.62,
            "text": "把ROE拆解成净利率、资产周转率和权益乘数。"
        },
        {
            "start": 132.62,
            "end": 134.78,
            "text": "对比最近三年的趋势。"
        },
        {
            "start": 134.78,
            "end": 138.4,
            "text": "ROE的变化主要是由哪个因素驱动的？"
        },
        {
            "start": 138.4,
            "end": 138.82,
            "text": "\""
        },
        {
            "start": 138.82,
            "end": 142.34,
            "text": "这种分析以前你可能要在Excel里面建一个模型才能做。"
        },
        {
            "start": 142.34,
            "end": 144.54,
            "text": "现在跟AI说一句话就行了。"
        },
        {
            "start": 144.54,
            "end": 146.44000000000003,
            "text": "场景四：这个最cool。"
        },
        {
            "start": 146.44000000000003,
            "end": 149.28,
            "text": "让AI帮你发现你没注意到的问题。"
        },
        {
            "start": 149.28,
            "end": 151.2,
            "text": "你可以跟AI说："
        },
        {
            "start": 151.2,
            "end": 153.72,
            "text": "\"请你扮演一个资深的财务分析师，"
        },
        {
            "start": 153.72,
            "end": 156.04,
            "text": "仔细审视这份财务报表。"
        },
        {
            "start": 156.04,
            "end": 159.58,
            "text": "找出三个最值得管理层关注的问题或风险。"
        },
        {
            "start": 159.58,
            "end": 163.52,
            "text": "不要只看表面数据，请深入分析趋势和异常。"
        },
        {
            "start": 163.52,
            "end": 163.94,
            "text": "\""
        },
        {
            "start": 163.94,
            "end": 165.6,
            "text": "AI可能会告诉你："
        },
        {
            "start": 165.6,
            "end": 169.66,
            "text": "\"应收账款周转天数从45天增加到72天，"
        },
        {
            "start": 169.66,
            "end": 170.18,
            "text": "增幅60%。"
        },
        {
            "start": 171.32,
            "end": 172.8,
            "text": "远超收入增长率20%。"
        },
        {
            "start": 173.78,
            "end": 177.2,
            "text": "这说明公司可能在放松信用条件来推动销售。"
        },
        {
            "start": 177.78,
            "end": 181.14,
            "text": "建议关注应收账款的账龄分布和坏账风险。"
        },
        {
            "start": 181.14,
            "end": 181.55999999999997,
            "text": "\""
        },
        {
            "start": 181.55999999999997,
            "end": 182.32,
            "text": "这种洞察，"
        },
        {
            "start": 182.32,
            "end": 186.0,
            "text": "以前可能需要一个经验丰富的财务总监才能看出来。"
        },
        {
            "start": 186.0,
            "end": 189.04000000000002,
            "text": "现在AI可以帮你做第一轮的筛查。"
        },
        {
            "start": 189.04000000000002,
            "end": 191.12,
            "text": "场景五：现金流预测。"
        },
        {
            "start": 191.54,
            "end": 196.28,
            "text": "如果你有历史的月度现金流数据，你可以让AI帮你做预测。"
        },
        {
            "start": 196.28,
            "end": 199.62,
            "text": "\"这是我公司过去12个月的现金流数据。"
        },
        {
            "start": 199.62,
            "end": 204.5,
            "text": "请帮我预测未来三个月的现金流，考虑季节性因素。"
        },
        {
            "start": 204.5,
            "end": 208.1,
            "text": "我的固定支出每月大约是X万。"
        },
        {
            "start": 208.1,
            "end": 212.02,
            "text": "请判断未来三个月是否有现金流紧张的风险。"
        },
        {
            "start": 212.02,
            "end": 212.44,
            "text": "\""
        },
        {
            "start": 212.44,
            "end": 214.22,
            "text": "这个对创业公司特别有用。"
        },
        {
            "start": 214.22,
            "end": 217.16,
            "text": "你可以随时掌握自己的Runway还有多长。"
        },
        {
            "start": 217.16,
            "end": 219.28,
            "text": "好，讲完了应用场景。"
        },
        {
            "start": 219.28,
            "end": 223.51999999999998,
            "text": "我给大家几个使用AI做财务分析的注意事项。"
        },
        {
            "start": 223.52,
            "end": 225.44,
            "text": "第一，数据准确性。"
        },
        {
            "start": 225.44,
            "end": 229.16,
            "text": "AI分析的质量完全取决于你给它的数据。"
        },
        {
            "start": 229.16,
            "end": 233.86,
            "text": "如果你的数据有误，AI的分析就是建立在错误基础上的。"
        },
        {
            "start": 233.86,
            "end": 236.76,
            "text": "所以一定要确认数据来源的准确性。"
        },
        {
            "start": 236.76,
            "end": 239.96,
            "text": "第二，AI可能会\"编\"数字。"
        },
        {
            "start": 239.96,
            "end": 242.1,
            "text": "如果你没有提供具体数据，"
        },
        {
            "start": 242.1,
            "end": 244.98,
            "text": "直接问AI某公司的财务指标，"
        },
        {
            "start": 244.98,
            "end": 249.48,
            "text": "它可能会给你一个看起来合理但实际上是虚构的数字。"
        },
        {
            "start": 249.48,
            "end": 250.94,
            "text": "这就是幻觉问题。"
        },
        {
            "start": 251.48,
            "end": 255.2,
            "text": "所以尽量给它原始数据，而不是让它自己去\"回忆\"。"
        },
        {
            "start": 255.2,
            "end": 258.34,
            "text": "第三，AI的分析是起点不是终点。"
        },
        {
            "start": 258.34,
            "end": 260.64,
            "text": "AI给你的是一个初步分析，"
        },
        {
            "start": 260.64,
            "end": 263.08,
            "text": "帮你节省了大量的信息处理时间。"
        },
        {
            "start": 263.08,
            "end": 266.76,
            "text": "但最终的判断和决策仍然是你的工作。"
        },
        {
            "start": 266.76,
            "end": 271.76,
            "text": "AI不了解你公司的战略背景、行业动态、管理团队的能力。"
        },
        {
            "start": 271.76,
            "end": 274.4,
            "text": "这些软性因素，你比AI清楚。"
        },
        {
            "start": 274.4,
            "end": 276.68,
            "text": "第四，注意数据隐私。"
        },
        {
            "start": 277.14,
            "end": 280.64,
            "text": "如果你上传的是你自己公司的内部财务数据，"
        },
        {
            "start": 280.64,
            "end": 283.9,
            "text": "确保你使用的AI工具有足够的安全保障。"
        },
        {
            "start": 283.9,
            "end": 287.9,
            "text": "敏感数据不要随便上传到公开的AI工具上。"
        },
        {
            "start": 287.9,
            "end": 290.64,
            "text": "我再给大家推荐一个具体的工作流程。"
        },
        {
            "start": 290.64,
            "end": 294.22,
            "text": "每个月或者每个季度你拿到财务数据之后，"
        },
        {
            "start": 294.22,
            "end": 296.36,
            "text": "花三十分钟做这个流程："
        },
        {
            "start": 296.36,
            "end": 301.02,
            "text": "第一步，五分钟，让AI提取关键指标和同比变化。"
        },
        {
            "start": 301.02,
            "end": 304.44,
            "text": "第二步，五分钟，让AI做杜邦分析，"
        },
        {
            "start": 304.44,
            "end": 307.22,
            "text": "看ROE的驱动因素有没有变化。"
        },
        {
            "start": 307.22,
            "end": 311.32,
            "text": "第三步，五分钟，让AI检查有没有异常信号。"
        },
        {
            "start": 311.32,
            "end": 315.34000000000003,
            "text": "第四步，五分钟，让AI做一个现金流预测。"
        },
        {
            "start": 315.34000000000003,
            "end": 319.28,
            "text": "第五步，十分钟，你自己review AI的分析，"
        },
        {
            "start": 319.28,
            "end": 322.12,
            "text": "结合你对业务的了解，做出判断。"
        },
        {
            "start": 322.12,
            "end": 326.5,
            "text": "三十分钟，你就完成了一个相当深度的财务体检。"
        },
        {
            "start": 326.5,
            "end": 328.0,
            "text": "以前可能要花一天。"
        },
        {
            "start": 328.0,
            "end": 329.96,
            "text": "这就是AI的杠杆效应。"
        },
        {
            "start": 329.96,
            "end": 332.94,
            "text": "好，今天的思考题就是一个实操任务。"
        },
        {
            "start": 332.94,
            "end": 335.98,
            "text": "找到你公司最近一个季度的财务数据，"
        },
        {
            "start": 335.98,
            "end": 337.82,
            "text": "按我刚才讲的五步流程，"
        },
        {
            "start": 337.82,
            "end": 340.24,
            "text": "用AI做一次完整的财务分析。"
        },
        {
            "start": 340.24,
            "end": 342.56,
            "text": "看看AI能给你什么样的洞察，"
        },
        {
            "start": 342.56,
            "end": 346.26,
            "text": "看看哪些分析你认同，哪些你觉得不对。"
        },
        {
            "start": 346.26,
            "end": 349.94,
            "text": "这个练习可能是你花的最有价值的三十分钟。"
        },
        {
            "start": 349.94,
            "end": 351.26,
            "text": "总结一下。"
        },
        {
            "start": 351.26,
            "end": 354.86,
            "text": "第一，AI让财务分析的效率提升了十倍以上。"
        },
        {
            "start": 354.86,
            "end": 357.4,
            "text": "从半天缩短到三十分钟。"
        },
        {
            "start": 357.4,
            "end": 360.86,
            "text": "第二，五个高价值场景：快速读财报、"
        },
        {
            "start": 360.86,
            "end": 364.32,
            "text": "竞品对比、杜邦拆解、异常发现、"
        },
        {
            "start": 364.32,
            "end": 365.78,
            "text": "现金流预测。"
        },
        {
            "start": 365.78,
            "end": 369.38,
            "text": "第三，注意事项：确认数据准确性、"
        },
        {
            "start": 369.38,
            "end": 373.26,
            "text": "警惕AI编数字、把AI当起点不是终点、"
        },
        {
            "start": 373.26,
            "end": 374.56,
            "text": "注意数据隐私。"
        },
        {
            "start": 374.56,
            "end": 378.44,
            "text": "第四，建立定期的AI辅助财务分析流程，"
        },
        {
            "start": 378.44,
            "end": 380.64,
            "text": "每月或每季度做一次。"
        },
        {
            "start": 380.64,
            "end": 383.7,
            "text": "下一期我们进入估值与融资的话题。"
        },
        {
            "start": 383.7,
            "end": 385.66,
            "text": "你的公司到底值多少钱？"
        },
        {
            "start": 385.66,
            "end": 390.28,
            "text": "DCF、可比公司、可比交易，三种估值方法怎么用？"
        },
        {
            "start": 390.28,
            "end": 391.62,
            "text": "好，今天就到这里。"
        },
        {
            "start": 391.62,
            "end": 393.5,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 12.834,
        "index": 0
    },
    {
        "start": 12.834,
        "end": 66.898,
        "index": 1
    },
    {
        "start": 66.898,
        "end": 121.604,
        "index": 2
    },
    {
        "start": 121.604,
        "end": 175.829,
        "index": 3
    },
    {
        "start": 175.829,
        "end": 229.572,
        "index": 4
    },
    {
        "start": 229.572,
        "end": 280.107,
        "index": 5
    },
    {
        "start": 280.107,
        "end": 345.561,
        "index": 6
    },
    {
        "start": 345.561,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-05.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把 AI 用进财务分析，让数字阅读更快、更系统。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-05.html?entry={entry}", secondaryHref: "./lesson-finance-05.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-04", coachSource: "./ai-coach.html?source=lesson-finance-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 财务分析：让 AI 成为你的 CFO 助手的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 财务分析：让 AI 成为你的 CFO 助手", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-05.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
