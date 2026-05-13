(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  function getEls() {
    return {
      lessonStatus: document.getElementById('lessonStatus'),
      ctaTitle: document.getElementById('ctaTitle'),
      ctaCopy: document.getElementById('ctaCopy'),
      completionSheet: document.getElementById('completionSheet'),
      completionClose: document.getElementById('completionClose'),
      completionNextBtn: document.getElementById('completionNextBtn'),
      completionModuleBtn: document.getElementById('completionModuleBtn')
    };
  }

  let completionShown = false;

  function showCompletionSheet(api) {
    const els = getEls();
    if (!els.completionSheet || completionShown) return;
    completionShown = true;
    api.markLessonCompleted();
    els.completionSheet.classList.add('show');
  }

  function updateLessonStatus(api) {
    const els = getEls();
    const time = api.elements.audio.currentTime || 0;
    const duration = api.elements.audio.duration || 0;
    if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return;

    if (duration && time >= duration - 2) {
      els.lessonStatus.textContent = '已完成';
      els.lessonStatus.classList.add('done');
      els.ctaTitle.textContent = '现在，把这节课整理成你的战略思考卡';
      els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的框架真正落回你的企业里。';
      showCompletionSheet(api);
    } else if (time > 0.5) {
      els.lessonStatus.textContent = '学习中';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '边听边想，听完后开始整理';
      els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。';
    } else {
      els.lessonStatus.textContent = '未开始';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '先听课，再整理思路';
      els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。';
    }
  }

  window.MindsLeapConfigs.lessons.strategy04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第4课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第4课：价值链分析：AI 正在重构哪些环节",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep04-value-chain/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：价值链分析：AI 正在重构哪些环节",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-4",
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '查看学习地图',
        quickThoughtHref: './map.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '不要只停在“我听懂了”。',
        leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。',
        questions: [
          { id: 'qOpportunity', title: '1. 今天这节课里，哪个判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' },
          { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：产品、营销、组织、定价、客户关系，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' },
          { id: 'qAlignment', title: '3. 这会怎么影响你今年的优先级或资源配置？', placeholder: '这个框架会让你多做什么、少做什么，或者重新排序什么？', tip: '真正的战略学习，最终都会回到取舍与资源配置。' }
        ],
        outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。'
      },
      cta: {
        title: '回答先记录下来，继续往下学',
        body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。',
        titleId: 'ctaTitle',
        bodyId: 'ctaCopy',
        submitId: 'submitQuiz',
        submitLabel: "保存回答，进入下一节",
        coachLabel: "暂时跳过，继续学习",
        secondaryHref: "./lesson-strategy-05.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 3,
                "title": "竞争优势的两条路：成本领先 vs 差异化",
                "body": "理解企业到底靠什么赢，以及 AI 是否正在改变边界。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "价值链分析：AI 正在重构哪些环节",
                "body": "用价值链看清利润从哪里来，也看清 AI 最值得切入的环节。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "商业模式画布：一张图说清怎么赚钱",
                "body": "用九宫格快速看懂任何业务如何创造、交付与捕获价值。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-05.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "用价值链看清利润从哪里来，也看清 AI 最值得切入的环节。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "价值链不是部门列表",
                "body": "它真正帮你看清的是：企业到底在哪些活动上创造价值，哪些活动只是在消耗成本。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "先找关键活动",
                "body": "不是每个环节都值得同时做 AI，应该先找到痛点大、匹配度高、战略价值高的活动。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "营销与服务最容易先被重构",
                "body": "很多企业第一批真正被 AI 改写的，不是全部流程，而是营销、服务和数据支持环节。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "不要全链条同时开工",
                "body": "价值链分析的意义，是帮助你做减法和排序，而不是把每个点都变成 AI 项目。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 4/14", "建议下一节：商业模式画布：一张图说清怎么赚钱", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-05.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-04",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson4",
    audioSource: './assets/audio/strategy-ep04-value-chain.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep04-value-chain.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep04-value-chain/slide_01.png",
            "label": "价值链分析：AI 正在重构哪些环节",
            "caption": "这一节会帮助你系统理解：价值链分析：AI 正在重构哪些环节"
        },
        {
            "file": "strategy-ep04-value-chain/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_03.png",
            "label": "经典框架",
            "caption": "包装、配送、库存管理。 第四，市场营销。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_04.png",
            "label": "关键判断",
            "caption": "以前靠人眼看产品有没有瑕疵，现在AI摄像头一秒钟能检查几十个产品，准确率比人高。 预测性维护也是一个很好的应用。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "以前这需要一个经验丰富的投放专员盯着数据看，现在AI可以做得更快更精准。 用户洞察。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_06.png",
            "label": "回到你的企业",
            "caption": "GitHub Copilot、Cursor这些工具让程序员的生产力提升了30%到50%。 产品经理可以用AI快速做竞品分析、写PRD、生成原型。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_07.png",
            "label": "风险与提醒",
            "caption": "三个标准都满足的环节，就是你的AI杠杆点。 你应该集中资源先攻这个点，而不是撒胡椒面，每个环节都试一点。"
        },
        {
            "file": "strategy-ep04-value-chain/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.06,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.06,
            "end": 3.24,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.24,
            "end": 5.44,
            "text": "前面几期我们讲了战略是什么、"
        },
        {
            "start": 5.44,
            "end": 7.18,
            "text": "行业竞争格局怎么分析、"
        },
        {
            "start": 7.18,
            "end": 8.98,
            "text": "竞争优势的两条路径。"
        },
        {
            "start": 8.98,
            "end": 12.06,
            "text": "今天来讲一个非常实操的工具：价值链分析。"
        },
        {
            "start": 12.06,
            "end": 13.72,
            "text": "Value Chain Analysis。"
        },
        {
            "start": 13.72,
            "end": 16.18,
            "text": "价值链这个概念也是波特提出来的。"
        },
        {
            "start": 16.18,
            "end": 17.74,
            "text": "它的核心思想很简单："
        },
        {
            "start": 17.74,
            "end": 20.86,
            "text": "一个企业从原材料到最终交付给客户，"
        },
        {
            "start": 20.86,
            "end": 23.04,
            "text": "中间经过了一系列的活动。"
        },
        {
            "start": 23.04,
            "end": 26.66,
            "text": "每一个活动要么在创造价值，要么在消耗成本。"
        },
        {
            "start": 26.66,
            "end": 30.52,
            "text": "你的利润就来自于：创造的价值减去消耗的成本。"
        },
        {
            "start": 30.52,
            "end": 32.46,
            "text": "所以如果你想提升利润，"
        },
        {
            "start": 32.46,
            "end": 34.92,
            "text": "你要么提高某些环节创造的价值，"
        },
        {
            "start": 34.92,
            "end": 37.12,
            "text": "要么降低某些环节消耗的成本。"
        },
        {
            "start": 37.12,
            "end": 39.46,
            "text": "价值链分析就是帮你看清楚："
        },
        {
            "start": 39.46,
            "end": 41.58,
            "text": "哪些环节在创造价值，"
        },
        {
            "start": 41.58,
            "end": 43.46,
            "text": "哪些环节在浪费资源。"
        },
        {
            "start": 43.46,
            "end": 48.14,
            "text": "波特把企业的活动分成两大类：基本活动和支持活动。"
        },
        {
            "start": 48.14,
            "end": 52.74,
            "text": "基本活动就是直接跟产品或服务的生产和交付相关的活动，"
        },
        {
            "start": 52.74,
            "end": 53.64,
            "text": "有五个。"
        },
        {
            "start": 53.64,
            "end": 54.86,
            "text": "第一，进货物流。"
        },
        {
            "start": 54.86,
            "end": 56.86,
            "text": "就是原材料怎么进来的。"
        },
        {
            "start": 56.86,
            "end": 58.9,
            "text": "采购、仓储、原料管理。"
        },
        {
            "start": 58.9,
            "end": 60.54,
            "text": "第二，生产运营。"
        },
        {
            "start": 60.54,
            "end": 62.86,
            "text": "就是把原材料变成产品的过程。"
        },
        {
            "start": 62.86,
            "end": 64.48,
            "text": "制造、加工、组装。"
        },
        {
            "start": 64.48,
            "end": 66.14,
            "text": "第三，出货物流。"
        },
        {
            "start": 66.14,
            "end": 68.42,
            "text": "就是产品怎么送到客户手里。"
        },
        {
            "start": 68.42,
            "end": 70.62,
            "text": "包装、配送、库存管理。"
        },
        {
            "start": 70.62,
            "end": 71.8,
            "text": "第四，市场营销。"
        },
        {
            "start": 71.8,
            "end": 74.74,
            "text": "就是怎么让客户知道你、买你的东西。"
        },
        {
            "start": 74.74,
            "end": 76.42,
            "text": "广告、销售、渠道。"
        },
        {
            "start": 76.42,
            "end": 77.76,
            "text": "第五，售后服务。"
        },
        {
            "start": 77.76,
            "end": 80.36,
            "text": "就是卖了之后怎么服务客户。"
        },
        {
            "start": 80.36,
            "end": 82.3,
            "text": "客服、维修、退换货。"
        },
        {
            "start": 82.3,
            "end": 85.58,
            "text": "支持活动呢，是为基本活动提供支撑的，"
        },
        {
            "start": 85.58,
            "end": 88.62,
            "text": "包括：企业基础设施（财务、法务、"
        },
        {
            "start": 89.04,
            "end": 92.06,
            "text": "管理）、人力资源、技术研发、采购。"
        },
        {
            "start": 92.06,
            "end": 95.34,
            "text": "你把这些活动全部列出来，就是你的价值链。"
        },
        {
            "start": 95.34,
            "end": 98.72,
            "text": "每一个环节你都可以分析：它创造了多少价值？"
        },
        {
            "start": 98.72,
            "end": 100.1,
            "text": "消耗了多少成本？"
        },
        {
            "start": 100.1,
            "end": 101.06,
            "text": "效率怎么样？"
        },
        {
            "start": 101.06,
            "end": 102.58,
            "text": "有没有优化空间？"
        },
        {
            "start": 102.58,
            "end": 104.52,
            "text": "好，经典部分讲完了。"
        },
        {
            "start": 104.52,
            "end": 109.42,
            "text": "现在来聊最exciting的部分：AI正在重构价值链的每一个环节。"
        },
        {
            "start": 109.42,
            "end": 110.98,
            "text": "我一个一个来说。"
        },
        {
            "start": 110.98,
            "end": 113.66,
            "text": "进货物流方面，AI能做什么？"
        },
        {
            "start": 113.66,
            "end": 117.44,
            "text": "AI的需求预测能力非常强。"
        },
        {
            "start": 117.44,
            "end": 120.48,
            "text": "它可以分析历史销售数据、季节趋势、"
        },
        {
            "start": 120.48,
            "end": 123.02,
            "text": "市场信号，预测未来的需求。"
        },
        {
            "start": 123.02,
            "end": 126.54,
            "text": "预测准了，你就不会采购太多也不会采购太少。"
        },
        {
            "start": 126.54,
            "end": 130.1,
            "text": "库存成本降下来了，缺货率也降下来了。"
        },
        {
            "start": 130.1,
            "end": 133.76,
            "text": "沃尔玛、亚马逊在这一块已经做得非常深了。"
        },
        {
            "start": 133.76,
            "end": 137.96,
            "text": "它们的AI能精确到每个门店、每个SKU的日级需求预测。"
        },
        {
            "start": 137.96,
            "end": 140.76,
            "text": "生产运营方面，AI能做什么？"
        },
        {
            "start": 140.76,
            "end": 143.6,
            "text": "AI视觉质检已经很成熟了。"
        },
        {
            "start": 143.6,
            "end": 145.98,
            "text": "以前靠人眼看产品有没有瑕疵，"
        },
        {
            "start": 145.98,
            "end": 149.8,
            "text": "现在AI摄像头一秒钟能检查几十个产品，"
        },
        {
            "start": 149.8,
            "end": 151.34,
            "text": "准确率比人高。"
        },
        {
            "start": 151.34,
            "end": 153.8,
            "text": "预测性维护也是一个很好的应用。"
        },
        {
            "start": 153.8,
            "end": 156.77999999999997,
            "text": "AI通过分析设备的传感器数据，"
        },
        {
            "start": 156.78,
            "end": 160.18,
            "text": "预测什么时候可能出故障，提前维护。"
        },
        {
            "start": 160.18,
            "end": 162.3,
            "text": "避免了突然停机的损失。"
        },
        {
            "start": 162.3,
            "end": 165.28,
            "text": "出货物流方面，AI能做什么？"
        },
        {
            "start": 165.28,
            "end": 168.4,
            "text": "路线优化是一个经典的AI应用场景。"
        },
        {
            "start": 168.4,
            "end": 171.28,
            "text": "快递公司用AI优化配送路线，"
        },
        {
            "start": 171.28,
            "end": 174.18,
            "text": "同样多的订单，少开30%的里程，"
        },
        {
            "start": 174.18,
            "end": 175.54,
            "text": "省油省时间。"
        },
        {
            "start": 175.54,
            "end": 178.02,
            "text": "动态定价也跟这个环节相关。"
        },
        {
            "start": 178.02,
            "end": 181.38,
            "text": "AI根据实时的供需情况调整配送费用。"
        },
        {
            "start": 181.38,
            "end": 184.2,
            "text": "但我觉得AI对价值链冲击最大的，"
        },
        {
            "start": 184.2,
            "end": 186.88,
            "text": "是市场营销和售后服务这两个环节。"
        },
        {
            "start": 186.88,
            "end": 190.48,
            "text": "因为这两个环节是最信息密集、最需要个性化的。"
        },
        {
            "start": 190.48,
            "end": 194.86,
            "text": "市场营销方面，AI简直是一个核武器级别的提效工具。"
        },
        {
            "start": 194.86,
            "end": 196.38,
            "text": "我列几个具体的场景。"
        },
        {
            "start": 196.38,
            "end": 197.5,
            "text": "内容生成。"
        },
        {
            "start": 197.5,
            "end": 201.66,
            "text": "以前一个市场团队一个月能写二三十篇内容就很厉害了。"
        },
        {
            "start": 201.66,
            "end": 202.96,
            "text": "现在用AI辅助，"
        },
        {
            "start": 202.96,
            "end": 205.76000000000002,
            "text": "同一个团队可能一个月产出两三百篇，"
        },
        {
            "start": 205.76000000000002,
            "end": 209.14,
            "text": "而且每篇都可以针对不同的用户群体做定制。"
        },
        {
            "start": 209.70000000000002,
            "end": 210.8,
            "text": "广告投放优化。"
        },
        {
            "start": 210.8,
            "end": 212.94,
            "text": "AI可以实时分析广告效果，"
        },
        {
            "start": 212.94,
            "end": 215.88,
            "text": "自动调整投放策略、出价、人群定向。"
        },
        {
            "start": 215.88,
            "end": 219.98,
            "text": "以前这需要一个经验丰富的投放专员盯着数据看，"
        },
        {
            "start": 219.98,
            "end": 222.1,
            "text": "现在AI可以做得更快更精准。"
        },
        {
            "start": 222.1,
            "end": 223.2,
            "text": "用户洞察。"
        },
        {
            "start": 223.2,
            "end": 226.16,
            "text": "AI可以分析海量的用户行为数据、"
        },
        {
            "start": 226.16,
            "end": 228.74,
            "text": "社交媒体评论、客服对话记录，"
        },
        {
            "start": 228.74,
            "end": 231.34,
            "text": "提炼出用户的真实需求和痛点。"
        },
        {
            "start": 231.34,
            "end": 235.24,
            "text": "以前做一份用户洞察报告可能要做半个月的调研，"
        },
        {
            "start": 235.24,
            "end": 238.52,
            "text": "现在AI几天就能给你一份初步的分析。"
        },
        {
            "start": 238.52,
            "end": 242.1,
            "text": "售后服务方面，AI客服已经很普遍了。"
        },
        {
            "start": 242.1,
            "end": 245.14000000000001,
            "text": "但更有价值的是AI驱动的主动服务。"
        },
        {
            "start": 245.14000000000001,
            "end": 246.28,
            "text": "什么意思呢？"
        },
        {
            "start": 246.28,
            "end": 249.34,
            "text": "以前的客服是被动的，客户来了问题你才回答。"
        },
        {
            "start": 249.34,
            "end": 252.16,
            "text": "但AI可以分析客户的使用数据，"
        },
        {
            "start": 252.16,
            "end": 254.46,
            "text": "预测这个客户可能遇到什么问题，"
        },
        {
            "start": 254.46,
            "end": 257.32,
            "text": "或者可能要流失了，提前主动干预。"
        },
        {
            "start": 257.32,
            "end": 258.56,
            "text": "比如说，"
        },
        {
            "start": 258.56,
            "end": 262.0,
            "text": "AI发现某个客户最近登录频率下降了，"
        },
        {
            "start": 262.0,
            "end": 264.36,
            "text": "使用核心功能的次数也减少了。"
        },
        {
            "start": 264.36,
            "end": 266.42,
            "text": "它就自动触发一个\"关怀流程\"，"
        },
        {
            "start": 266.42,
            "end": 269.88,
            "text": "给客户发一封邮件或者让客服主动联系。"
        },
        {
            "start": 270.3,
            "end": 273.44,
            "text": "这种主动服务能大幅降低客户流失率。"
        },
        {
            "start": 273.44,
            "end": 275.18,
            "text": "再说支持活动。"
        },
        {
            "start": 275.18,
            "end": 277.98,
            "text": "人力资源方面，AI可以做简历筛选、"
        },
        {
            "start": 277.98,
            "end": 280.32,
            "text": "面试安排、员工入职自动化、"
        },
        {
            "start": 280.32,
            "end": 281.76,
            "text": "培训内容个性化。"
        },
        {
            "start": 281.76,
            "end": 285.0,
            "text": "一些公司已经开始用AI做员工情绪分析，"
        },
        {
            "start": 285.0,
            "end": 288.74,
            "text": "通过分析邮件和沟通的语气来预测离职风险。"
        },
        {
            "start": 288.74,
            "end": 293.58,
            "text": "技术研发方面，AI辅助编程已经是主流了。"
        },
        {
            "start": 293.58,
            "end": 299.94,
            "text": "GitHub Copilot、Cursor这些工具让程序员的生产力提升了30%到50%。"
        },
        {
            "start": 300.66,
            "end": 306.36,
            "text": "产品经理可以用AI快速做竞品分析、写PRD、生成原型。"
        },
        {
            "start": 306.36,
            "end": 312.46,
            "text": "财务和法务方面，AI合同审查、AI财务分析、AI税务优化。"
        },
        {
            "start": 312.46,
            "end": 314.54,
            "text": "这些工具正在快速普及。"
        },
        {
            "start": 314.54,
            "end": 318.48,
            "text": "你看，价值链上的每一个环节，AI都在渗透。"
        },
        {
            "start": 318.48,
            "end": 321.84,
            "text": "这不是未来的事情，这是现在正在发生的事情。"
        },
        {
            "start": 321.84,
            "end": 324.58,
            "text": "好，讲完了AI在每个环节的应用，"
        },
        {
            "start": 324.58,
            "end": 327.4,
            "text": "我想给大家一个更重要的战略建议："
        },
        {
            "start": 327.4,
            "end": 328.7,
            "text": "你不能什么都做，"
        },
        {
            "start": 328.7,
            "end": 330.68,
            "text": "你要找到你的AI杠杆点。"
        },
        {
            "start": 330.68,
            "end": 332.54,
            "text": "什么是AI杠杆点？"
        },
        {
            "start": 332.54,
            "end": 337.0,
            "text": "就是在你的价值链上，AI投入产出比最高的那个环节。"
        },
        {
            "start": 337.0,
            "end": 337.98,
            "text": "怎么找？"
        },
        {
            "start": 337.98,
            "end": 338.86,
            "text": "三个标准。"
        },
        {
            "start": 338.86,
            "end": 340.36,
            "text": "第一，痛点大。"
        },
        {
            "start": 340.36,
            "end": 342.84,
            "text": "这个环节目前的效率低、成本高、"
        },
        {
            "start": 343.22,
            "end": 345.34,
            "text": "质量不稳定、客户抱怨多。"
        },
        {
            "start": 345.34,
            "end": 347.12,
            "text": "第二，AI匹配度高。"
        },
        {
            "start": 347.12,
            "end": 351.34,
            "text": "这个环节的任务结构化程度高，数据量大，重复性高。"
        },
        {
            "start": 351.34,
            "end": 355.08000000000015,
            "text": "还记得我们在模块零第三期讲的四象限矩阵吗？"
        },
        {
            "start": 355.08000000000015,
            "end": 359.06,
            "text": "第一和第二象限的任务就是AI匹配度高的。"
        },
        {
            "start": 359.06,
            "end": 360.82,
            "text": "第三，战略价值高。"
        },
        {
            "start": 360.82,
            "end": 363.94,
            "text": "这个环节的优化能直接影响你的竞争优势。"
        },
        {
            "start": 363.94,
            "end": 366.5,
            "text": "它不是一个无关痛痒的后台流程，"
        },
        {
            "start": 366.5,
            "end": 368.86,
            "text": "而是一个关键的价值创造环节。"
        },
        {
            "start": 368.86,
            "end": 372.88,
            "text": "三个标准都满足的环节，就是你的AI杠杆点。"
        },
        {
            "start": 372.88,
            "end": 375.28,
            "text": "你应该集中资源先攻这个点，"
        },
        {
            "start": 375.28,
            "end": 378.2,
            "text": "而不是撒胡椒面，每个环节都试一点。"
        },
        {
            "start": 378.2,
            "end": 379.94,
            "text": "好，今天的思考题。"
        },
        {
            "start": 379.94,
            "end": 381.84,
            "text": "第一，画出你公司的价值链。"
        },
        {
            "start": 381.84,
            "end": 385.68,
            "text": "从原材料到最终客户，中间经过了哪些环节？"
        },
        {
            "start": 386.1,
            "end": 389.76,
            "text": "第二，在这些环节里，哪个环节是你的AI杠杆点？"
        },
        {
            "start": 389.76,
            "end": 392.04,
            "text": "痛点最大、AI匹配度最高、"
        },
        {
            "start": 392.04,
            "end": 394.48,
            "text": "战略价值最高的那个环节是哪个？"
        },
        {
            "start": 394.48,
            "end": 394.9,
            "text": "第三，"
        },
        {
            "start": 395.04,
            "end": 399.28,
            "text": "如果你的竞争对手在某个关键环节用AI做到了极致，"
        },
        {
            "start": 399.28,
            "end": 400.9,
            "text": "会对你造成什么影响？"
        },
        {
            "start": 400.9,
            "end": 403.22,
            "text": "总结一下今天的核心要点。"
        },
        {
            "start": 403.22,
            "end": 403.54,
            "text": "第一，"
        },
        {
            "start": 403.96,
            "end": 406.82,
            "text": "价值链分析帮你把企业活动拆解开来，"
        },
        {
            "start": 406.82,
            "end": 409.64,
            "text": "看清每个环节的价值创造和成本消耗。"
        },
        {
            "start": 409.64,
            "end": 413.16,
            "text": "第二，AI正在重构价值链的每一个环节，"
        },
        {
            "start": 413.16,
            "end": 415.7,
            "text": "其中营销和服务环节受冲击最大。"
        },
        {
            "start": 415.7,
            "end": 417.92,
            "text": "第三，你不能什么都做，"
        },
        {
            "start": 417.92,
            "end": 421.18,
            "text": "要找到你的AI杠杆点：痛点大、"
        },
        {
            "start": 421.42,
            "end": 423.5,
            "text": "AI匹配度高、战略价值高。"
        },
        {
            "start": 423.5,
            "end": 425.4,
            "text": "集中资源先攻这个点。"
        },
        {
            "start": 425.4,
            "end": 428.94,
            "text": "第四，AI在价值链上的应用不只是降本，"
        },
        {
            "start": 428.94,
            "end": 431.14,
            "text": "更重要的是创造新的价值。"
        },
        {
            "start": 431.14,
            "end": 434.72,
            "text": "比如主动服务、个性化体验、需求预测。"
        },
        {
            "start": 434.72,
            "end": 437.72,
            "text": "好，竞争战略基础四期就讲完了。"
        },
        {
            "start": 437.72,
            "end": 440.4,
            "text": "从下一期开始我们进入商业模式设计。"
        },
        {
            "start": 440.4,
            "end": 444.98,
            "text": "第一个话题是商业模式画布——一张图说清楚你怎么赚钱。"
        },
        {
            "start": 444.98,
            "end": 446.7,
            "text": "这个工具非常强大，"
        },
        {
            "start": 446.7,
            "end": 449.56,
            "text": "我保证你学完之后看任何一家公司都能快"
        },
        {
            "start": 449.56,
            "end": 451.16,
            "text": "速看懂它的商业逻辑。"
        },
        {
            "start": 451.16,
            "end": 452.54,
            "text": "好，今天就到这里。"
        },
        {
            "start": 452.54,
            "end": 454.08,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 8.98,
        "index": 0
    },
    {
        "start": 8.98,
        "end": 43.46,
        "index": 1
    },
    {
        "start": 43.46,
        "end": 137.96,
        "index": 2
    },
    {
        "start": 137.96,
        "end": 209.7,
        "index": 3
    },
    {
        "start": 209.7,
        "end": 293.58,
        "index": 4
    },
    {
        "start": 293.58,
        "end": 327.4,
        "index": 5
    },
    {
        "start": 327.4,
        "end": 400.9,
        "index": 6
    },
    {
        "start": 400.9,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-05.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "用价值链看清利润从哪里来，也看清 AI 最值得切入的环节。"
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是判断框架还不够清楚。",
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: "系统希望你先建立一个更稳定的战略判断框架，再去推进具体动作。"
      }
    },
    reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] },
    redirects: {
      submitHref: "./lesson-strategy-05.html?entry={entry}",
      secondaryHref: "./lesson-strategy-05.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-04",
      coachSource: "./ai-coach.html?source=lesson-strategy-04"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于价值链分析：AI 正在重构哪些环节的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "价值链分析：AI 正在重构哪些环节", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-05.html" + '?entry=' + entryMode;
        if (els.completionModuleBtn) els.completionModuleBtn.href = './module-strategy.html?entry=' + entryMode;
        if (els.completionClose) {
          els.completionClose.onclick = () => els.completionSheet?.classList.remove('show');
        }
        updateLessonStatus(api);
      },
      onLoadedMetadata: updateLessonStatus,
      onPlay: updateLessonStatus,
      onTimeUpdate: updateLessonStatus,
      onEnded(api) {
        updateLessonStatus(api);
        showCompletionSheet(api);
      }
    }
  };
})(window);
