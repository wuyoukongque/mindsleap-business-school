(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance13 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第13课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第13课：你的财务体检：用 AI 做一次快速财务诊断",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep13-financial-checkup/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：你的财务体检：用 AI 做一次快速财务诊断", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-13", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-finance.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 12,
                "title": "案例：NVIDIA 的财务与资本市场逻辑",
                "body": "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "你的财务体检：用 AI 做一次快速财务诊断",
                "body": "把整个模块整合起来，做一次真正可落地的财务体检。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-finance.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把整个模块整合起来，做一次真正可落地的财务体检。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天是模块二财务与金融的最后一期，也是我们的实战课"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "把你的财务数据上传给 AI，然后让它帮你计算以下几组核心指标"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "经营现金流与净利润的比率 自由现金流 = 经营现金流 ，资本支出 现金储备能支撑多少个月的运营 这个最后一个特别重要"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "基于前面的分析，让 AI 帮你做一个总体诊断"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了整个财务模块。建议回到模块页复盘完整章节结构。", meta: ["当前完成：财务与经营分析 13/13", "你已完成财务模块", '也可以先整理这一节'], nextHref: "./module-finance.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-13", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson13", audioSource: './assets/audio/finance-ep13-financial-checkup.mp3?v=20260411-finance-ep13-r1', vttSrc: './assets/subtitles/finance-ep13-financial-checkup.vtt?v=20260411-finance-ep13-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep13-financial-checkup/slide_01.png",
            "label": "你的财务体检：用 AI 做一次快速财务诊断",
            "caption": "这一节会帮助你系统理解：你的财务体检：用 AI 做一次快速财务诊断"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_03.png",
            "label": "核心框架",
            "caption": "把你的财务数据上传给 AI，然后让它帮你计算以下几组核心指标。 第一组：盈利能力指标。"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_04.png",
            "label": "关键指标",
            "caption": "经营现金流与净利润的比率 自由现金流 = 经营现金流 ，资本支出 现金储备能支撑多少个月的运营 这个最后一个特别重要。 你要知道如果收入断了，你的现金还够撑多久"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "基于前面的分析，让 AI 帮你做一个总体诊断。 你可以用这样的提示词： \"基于以上的财务分析，请帮我总结三个最大的财务健康问题，每个问题给出具体的改进建议，以及"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_06.png",
            "label": "回到你的企业",
            "caption": "每个月把最新的数据填进去，AI 帮你自动算指标、画趋势、标注异常。 更高级的做法是，接通你的财务系统，让 AI 实时获取数据并做分析。"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_07.png",
            "label": "风险与提醒",
            "caption": "但有了 AI，你可以在几分钟内完成过去需要专业会计师花几天才能做完的分析。 好，这就是我们模块二的最后一期。"
        },
        {
            "file": "finance-ep13-financial-checkup/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.02,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.02,
            "end": 3.12,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.12,
            "end": 7.82,
            "text": "今天是模块二财务与金融的最后一期，也是我们的实战课。"
        },
        {
            "start": 7.82,
            "end": 12.78,
            "text": "我要手把手教你用 AI 给你的公司做一次快速的财务体检。"
        },
        {
            "start": 12.78,
            "end": 14.98,
            "text": "过去十二期我们学了很多："
        },
        {
            "start": 14.98,
            "end": 18.02,
            "text": "三张报表怎么读、关键指标怎么看、"
        },
        {
            "start": 18.02,
            "end": 20.12,
            "text": "估值怎么算、风控怎么做。"
        },
        {
            "start": 20.12,
            "end": 22.64,
            "text": "理论都有了，今天我们来落地。"
        },
        {
            "start": 22.64,
            "end": 24.34,
            "text": "你不需要是财务专家。"
        },
        {
            "start": 24.34,
            "end": 27.66,
            "text": "你只需要一份你公司的财务报表（哪怕是"
        },
        {
            "start": 27.66,
            "end": 29.38,
            "text": "内部的管理报表也行），"
        },
        {
            "start": 29.38,
            "end": 31.32,
            "text": "加上一个 AI 工具——豆包、"
        },
        {
            "start": 31.32,
            "end": 35.4,
            "text": "通义千问或者其他你习惯用的——就可以开始了。"
        },
        {
            "start": 35.4,
            "end": 37.06,
            "text": "第一步：准备数据。"
        },
        {
            "start": 37.06,
            "end": 38.62,
            "text": "你需要准备三份材料："
        },
        {
            "start": 38.62,
            "end": 41.06,
            "text": "一，最近一到三年的利润表。"
        },
        {
            "start": 41.06,
            "end": 44.34,
            "text": "包括收入、成本、各项费用、净利润。"
        },
        {
            "start": 44.34,
            "end": 46.44,
            "text": "二，最新的资产负债表。"
        },
        {
            "start": 46.44,
            "end": 50.28,
            "text": "包括总资产、总负债、现金、应收账款、存货等。"
        },
        {
            "start": 50.28,
            "end": 52.78,
            "text": "三，最近一年的现金流量表。"
        },
        {
            "start": 52.78,
            "end": 54.04,
            "text": "如果没有的话，"
        },
        {
            "start": 54.04,
            "end": 57.36,
            "text": "至少要知道你每个月的经营现金流入和流出。"
        },
        {
            "start": 57.84,
            "end": 62.0,
            "text": "如果你的公司很小，还没有正式的财报，也没关系。"
        },
        {
            "start": 62.0,
            "end": 65.5,
            "text": "你可以用你的银行流水来做一个简化的分析。"
        },
        {
            "start": 65.5,
            "end": 69.52,
            "text": "把收入和支出分好类，也能看出很多东西。"
        },
        {
            "start": 69.52,
            "end": 72.51999999999998,
            "text": "第二步：基础体检——关键指标诊断。"
        },
        {
            "start": 72.52,
            "end": 75.24,
            "text": "把你的财务数据上传给 AI，"
        },
        {
            "start": 75.24,
            "end": 78.36,
            "text": "然后让它帮你计算以下几组核心指标。"
        },
        {
            "start": 78.36,
            "end": 80.52,
            "text": "第一组：盈利能力指标。"
        },
        {
            "start": 80.52,
            "end": 84.64,
            "text": "- 毛利率 = （收入 - 成本）/ 收入"
        },
        {
            "start": 84.64,
            "end": 87.34,
            "text": "- 净利率 = 净利润 / 收入"
        },
        {
            "start": 87.34,
            "end": 90.98,
            "text": "- ROE = 净利润 / 股东权益"
        },
        {
            "start": 90.98,
            "end": 95.14,
            "text": "你可以问 AI：我的毛利率和同行业平均水平比怎么样？"
        },
        {
            "start": 95.14,
            "end": 97.22,
            "text": "是高于还是低于？"
        },
        {
            "start": 97.22,
            "end": 98.5,
            "text": "差距有多大？"
        },
        {
            "start": 98.5,
            "end": 100.42,
            "text": "第二组：运营效率指标。"
        },
        {
            "start": 100.42,
            "end": 105.2,
            "text": "- 应收账款周转天数 = 应收账款 / 日均收入"
        },
        {
            "start": 105.2,
            "end": 108.92,
            "text": "- 存货周转天数 = 存货 / 日均成本"
        },
        {
            "start": 108.92,
            "end": 115.54,
            "text": "- 应付账款周转天数 = 应付账款 / 日均成本"
        },
        {
            "start": 115.54,
            "end": 119.86,
            "text": "这三个指标告诉你，你的钱在业务循环中转得快不快。"
        },
        {
            "start": 120.4,
            "end": 123.4,
            "text": "周转天数越短，说明资金效率越高。"
        },
        {
            "start": 123.4,
            "end": 127.58,
            "text": "你可以问 AI：根据我的数据，我的现金转化周期是多少天？"
        },
        {
            "start": 127.58,
            "end": 129.54,
            "text": "跟行业平均比如何？"
        },
        {
            "start": 129.54,
            "end": 130.92,
            "text": "有没有优化空间？"
        },
        {
            "start": 130.92,
            "end": 132.98,
            "text": "第三组：偿债能力指标。"
        },
        {
            "start": 132.98,
            "end": 136.42,
            "text": "- 流动比率 = 流动资产 / 流动负债"
        },
        {
            "start": 136.42,
            "end": 139.9,
            "text": "- 资产负债率 = 总负债 / 总资产"
        },
        {
            "start": 141.36,
            "end": 145.12,
            "text": "这两个指标告诉你，你的公司有没有偿债风险。"
        },
        {
            "start": 145.12,
            "end": 148.64,
            "text": "流动比率低于 1 是一个警示信号，"
        },
        {
            "start": 148.64,
            "end": 151.04,
            "text": "说明你短期可能还不起钱。"
        },
        {
            "start": 151.04,
            "end": 153.26,
            "text": "第四组：现金流指标。"
        },
        {
            "start": 153.26,
            "end": 155.56,
            "text": "- 经营现金流与净利润的比率"
        },
        {
            "start": 155.56,
            "end": 158.72000000000003,
            "text": "- 自由现金流 = 经营现金流 - 资本支出"
        },
        {
            "start": 158.72000000000003,
            "end": 161.58,
            "text": "- 现金储备能支撑多少个月的运营"
        },
        {
            "start": 161.58,
            "end": 163.34,
            "text": "这个最后一个特别重要。"
        },
        {
            "start": 163.34,
            "end": 167.16,
            "text": "你要知道如果收入断了，你的现金还够撑多久。"
        },
        {
            "start": 167.16,
            "end": 170.34,
            "text": "一般来说，至少要有 6 个月的现金储备。"
        },
        {
            "start": 170.34,
            "end": 172.14,
            "text": "第三步：趋势分析。"
        },
        {
            "start": 172.14,
            "end": 176.74,
            "text": "单看一个时间点的指标是不够的，更重要的是看趋势。"
        },
        {
            "start": 176.74,
            "end": 180.5,
            "text": "把你最近几个季度或者几年的数据放在一起，"
        },
        {
            "start": 180.5,
            "end": 184.34,
            "text": "让 AI 帮你画趋势图，回答这几个问题："
        },
        {
            "start": 184.34,
            "end": 187.72,
            "text": "一，你的收入是在增长还是停滞？"
        },
        {
            "start": 187.72,
            "end": 190.22,
            "text": "增速是在加快还是放缓？"
        },
        {
            "start": 190.22,
            "end": 193.46,
            "text": "二，你的毛利率在变好还是变差？"
        },
        {
            "start": 193.46,
            "end": 197.52,
            "text": "如果在恶化，是成本涨了还是价格降了？"
        },
        {
            "start": 197.52,
            "end": 201.4,
            "text": "三，你的应收账款周转天数是在缩短还是拉长？"
        },
        {
            "start": 201.4,
            "end": 204.64,
            "text": "如果在拉长，说明客户付款越来越慢，"
        },
        {
            "start": 204.64,
            "end": 206.7,
            "text": "你的现金流可能会出问题。"
        },
        {
            "start": 207.16,
            "end": 210.36,
            "text": "四，你的经营现金流跟利润是同步的吗？"
        },
        {
            "start": 210.36,
            "end": 213.42,
            "text": "如果利润在增长但现金流没有增长，"
        },
        {
            "start": 213.42,
            "end": 215.62,
            "text": "那你的利润质量可能有问题。"
        },
        {
            "start": 215.62,
            "end": 218.48,
            "text": "趋势分析比静态分析更有价值。"
        },
        {
            "start": 218.48,
            "end": 220.94,
            "text": "因为方向比位置更重要。"
        },
        {
            "start": 220.94,
            "end": 224.52,
            "text": "一家公司现在的指标一般般但在变好，"
        },
        {
            "start": 224.66,
            "end": 228.4,
            "text": "可能比一家指标很好但在变差的公司更有前途。"
        },
        {
            "start": 228.88,
            "end": 231.38,
            "text": "第四步：问题诊断与改进建议。"
        },
        {
            "start": 231.38,
            "end": 235.0,
            "text": "基于前面的分析，让 AI 帮你做一个总体诊断。"
        },
        {
            "start": 235.0,
            "end": 237.4,
            "text": "你可以用这样的提示词："
        },
        {
            "start": 237.4,
            "end": 238.98,
            "text": "\"基于以上的财务分析，"
        },
        {
            "start": 238.98,
            "end": 242.22,
            "text": "请帮我总结三个最大的财务健康问题，"
        },
        {
            "start": 242.22,
            "end": 244.72,
            "text": "每个问题给出具体的改进建议，"
        },
        {
            "start": 244.72,
            "end": 246.98,
            "text": "以及预计改进后的效果。"
        },
        {
            "start": 246.98,
            "end": 247.39999999999998,
            "text": "\""
        },
        {
            "start": 247.39999999999998,
            "end": 249.26,
            "text": "AI 可能会给你这样的输出："
        },
        {
            "start": 249.26,
            "end": 252.94,
            "text": "问题一：应收账款周转天数偏长。"
        },
        {
            "start": 252.94,
            "end": 255.56,
            "text": "建议缩短账期、加强催收。"
        },
        {
            "start": 255.56,
            "end": 259.28,
            "text": "如果把周转天数从 90 天降到 60 天，"
        },
        {
            "start": 259.28,
            "end": 261.32,
            "text": "可以释放大约多少万的现金。"
        },
        {
            "start": 261.32,
            "end": 263.88,
            "text": "问题二：毛利率在下降。"
        },
        {
            "start": 263.88,
            "end": 265.54,
            "text": "建议分析成本结构，"
        },
        {
            "start": 265.54,
            "end": 269.46,
            "text": "看能不能通过 AI 工具优化某些环节来降成本。"
        },
        {
            "start": 269.46,
            "end": 272.3,
            "text": "或者看看产品定价是不是需要调整。"
        },
        {
            "start": 272.3,
            "end": 274.88,
            "text": "问题三：现金储备不足。"
        },
        {
            "start": 274.88,
            "end": 278.86,
            "text": "建议控制非必要开支，或者提前安排融资。"
        },
        {
            "start": 278.86,
            "end": 282.8,
            "text": "当然，AI 给的建议需要你用你的业务判断来过滤。"
        },
        {
            "start": 282.8,
            "end": 285.88,
            "text": "它不了解你公司的具体情况和行业背景，"
        },
        {
            "start": 285.88,
            "end": 287.8,
            "text": "有些建议可能不切实际。"
        },
        {
            "start": 287.8,
            "end": 290.32,
            "text": "但它至少给了你一个思考的起点。"
        },
        {
            "start": 290.32,
            "end": 293.18,
            "text": "第五步：建立持续监控机制。"
        },
        {
            "start": 293.18,
            "end": 297.32,
            "text": "财务体检不是一次性的事情，它应该是常态化的。"
        },
        {
            "start": 297.32,
            "end": 301.26,
            "text": "我建议你建立一个月度或者至少季度的财务仪表盘，"
        },
        {
            "start": 301.26,
            "end": 303.4,
            "text": "监控上面提到的核心指标。"
        },
        {
            "start": 303.4,
            "end": 306.12,
            "text": "你可以让 AI 帮你设计一个模板。"
        },
        {
            "start": 306.12,
            "end": 308.92,
            "text": "每个月把最新的数据填进去，"
        },
        {
            "start": 308.92,
            "end": 311.98,
            "text": "AI 帮你自动算指标、画趋势、标注异常。"
        },
        {
            "start": 311.98,
            "end": 315.04,
            "text": "更高级的做法是，接通你的财务系统，"
        },
        {
            "start": 315.04,
            "end": 317.5,
            "text": "让 AI 实时获取数据并做分析。"
        },
        {
            "start": 317.5,
            "end": 320.26,
            "text": "但这需要一些技术基础设施的支持，"
        },
        {
            "start": 320.26,
            "end": 322.12,
            "text": "可以作为下一步的目标。"
        },
        {
            "start": 322.12,
            "end": 327.02,
            "text": "最后，给大家几个实用的提示词模板，方便你直接拿来用。"
        },
        {
            "start": 327.02,
            "end": 329.24,
            "text": "第一个模板——基础体检："
        },
        {
            "start": 329.24,
            "end": 333.12,
            "text": "\"以下是我公司最近一年的利润表和资产负债表。"
        },
        {
            "start": 333.12,
            "end": 336.26,
            "text": "请帮我计算以下指标：毛利率、净利率、"
        },
        {
            "start": 336.26,
            "end": 338.32,
            "text": "ROE、流动比率、资产负债率、"
        },
        {
            "start": 338.32,
            "end": 341.6,
            "text": "应收账款周转天数、存货周转天数。"
        },
        {
            "start": 341.6,
            "end": 346.06,
            "text": "然后与同行业平均水平做对比，指出哪些指标偏离较大。"
        },
        {
            "start": 346.06,
            "end": 346.48,
            "text": "\""
        },
        {
            "start": 346.48,
            "end": 348.02,
            "text": "第二个模板——趋势分析："
        },
        {
            "start": 348.56,
            "end": 352.2,
            "text": "\"以下是我公司最近三年的季度财务数据。"
        },
        {
            "start": 352.2,
            "end": 354.44,
            "text": "请帮我分析收入增长趋势、"
        },
        {
            "start": 354.44,
            "end": 357.92,
            "text": "毛利率变化趋势和经营现金流趋势。"
        },
        {
            "start": 357.92,
            "end": 360.46,
            "text": "标注出需要关注的拐点或异常。"
        },
        {
            "start": 360.46,
            "end": 360.88,
            "text": "\""
        },
        {
            "start": 360.88,
            "end": 362.8,
            "text": "第三个模板——问题诊断："
        },
        {
            "start": 362.8,
            "end": 364.2,
            "text": "\"基于以上财务分析，"
        },
        {
            "start": 364.2,
            "end": 367.12,
            "text": "帮我识别三个最关键的财务风险点，"
        },
        {
            "start": 367.12,
            "end": 370.36,
            "text": "每个给出具体的改进方案和预期效果。"
        },
        {
            "start": 370.36,
            "end": 372.34,
            "text": "优先级从高到低排列。"
        },
        {
            "start": 372.34,
            "end": 372.76,
            "text": "\""
        },
        {
            "start": 372.76,
            "end": 376.06,
            "text": "记住，AI 是你的分析助手，不是决策者。"
        },
        {
            "start": 376.06,
            "end": 378.54,
            "text": "最终的判断和行动还是你来做。"
        },
        {
            "start": 378.54,
            "end": 379.7,
            "text": "但有了 AI，"
        },
        {
            "start": 379.7,
            "end": 382.98,
            "text": "你可以在几分钟内完成过去需要专业会计"
        },
        {
            "start": 382.98,
            "end": 385.14,
            "text": "师花几天才能做完的分析。"
        },
        {
            "start": 385.14,
            "end": 388.26,
            "text": "好，这就是我们模块二的最后一期。"
        },
        {
            "start": 388.26,
            "end": 390.22,
            "text": "回顾一下整个模块二："
        },
        {
            "start": 390.22,
            "end": 393.68,
            "text": "我们从三张报表出发，学了怎么读财报、"
        },
        {
            "start": 394.04,
            "end": 396.62,
            "text": "怎么看指标、怎么做估值、怎么融资、"
        },
        {
            "start": 396.62,
            "end": 398.62,
            "text": "怎么风控、怎么定价。"
        },
        {
            "start": 398.62,
            "end": 402.46,
            "text": "最后今天我们把所有这些知识串起来，"
        },
        {
            "start": 402.46,
            "end": 404.6,
            "text": "做了一次实战的财务体检。"
        },
        {
            "start": 404.6,
            "end": 406.72,
            "text": "财务不是财务部门的事情。"
        },
        {
            "start": 406.72,
            "end": 411.32,
            "text": "每一个管理者、每一个创业者都需要有基本的财务素养。"
        },
        {
            "start": 411.32,
            "end": 415.0199999999999,
            "text": "你不需要成为 CFO，但你需要能读懂数字，"
        },
        {
            "start": 415.02,
            "end": 418.02,
            "text": "能从数字里看出问题、看到机会。"
        },
        {
            "start": 418.02,
            "end": 421.32,
            "text": "有了 AI 的帮助，这件事比过去容易得多了。"
        },
        {
            "start": 421.32,
            "end": 424.84,
            "text": "从下一期开始，我们进入模块三：市场营销。"
        },
        {
            "start": 424.84,
            "end": 428.06,
            "text": "同样是经典框架加 AI 时代的新玩法。"
        },
        {
            "start": 428.06,
            "end": 430.3,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 430.3,
            "end": 432.46,
            "text": "1. 财务体检五步法："
        },
        {
            "start": 432.46,
            "end": 437.56,
            "text": "准备数据 → 指标诊断 → 趋势分析 → 问题诊断 → 持续监控"
        },
        {
            "start": 437.56,
            "end": 440.78,
            "text": "2. 四组核心指标：盈利能力、"
        },
        {
            "start": 441.06,
            "end": 443.24,
            "text": "运营效率、偿债能力、现金流"
        },
        {
            "start": 443.24,
            "end": 449.1,
            "text": "3. 趋势比位置更重要：方向变化比绝对数字更值得关注"
        },
        {
            "start": 449.1,
            "end": 454.12,
            "text": "4. AI 是你的财务分析助手：三个实用提示词模板"
        },
        {
            "start": 454.12,
            "end": 458.62,
            "text": "1. 用今天的五步法给你的公司做一次体检，"
        },
        {
            "start": 458.62,
            "end": 459.56,
            "text": "你发现了什么？"
        },
        {
            "start": 459.56,
            "end": 461.28,
            "text": "最大的问题是什么？"
        },
        {
            "start": 461.28,
            "end": 464.22,
            "text": "2. 你的现金储备够支撑多少个月？"
        },
        {
            "start": 464.22,
            "end": 467.36,
            "text": "如果不够 6 个月，你打算怎么改善？"
        },
        {
            "start": 467.36,
            "end": 472.5,
            "text": "3. 你觉得建立月度财务仪表盘对你的决策帮助有多大？"
        },
        {
            "start": 472.5,
            "end": 474.84,
            "text": "你会监控哪几个核心指标？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.546,
        "index": 0
    },
    {
        "start": 10.546,
        "end": 65.119,
        "index": 1
    },
    {
        "start": 65.119,
        "end": 118.111,
        "index": 2
    },
    {
        "start": 118.111,
        "end": 171.761,
        "index": 3
    },
    {
        "start": 171.761,
        "end": 225.807,
        "index": 4
    },
    {
        "start": 225.807,
        "end": 279.194,
        "index": 5
    },
    {
        "start": 279.194,
        "end": 348.136,
        "index": 6
    },
    {
        "start": 348.136,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-finance.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把整个模块整合起来，做一次真正可落地的财务体检。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-finance.html?entry={entry}", secondaryHref: "./module-finance.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-13", coachSource: "./ai-coach.html?source=lesson-finance-13" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于你的财务体检：用 AI 做一次快速财务诊断的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的财务体检：用 AI 做一次快速财务诊断", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-finance.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
