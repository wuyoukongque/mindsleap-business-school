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

  window.MindsLeapConfigs.lessons.strategy14 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第14课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第14课：你的战略工作坊：用 AI 帮你做战略分析",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep14-strategy-workshop/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：你的战略工作坊：用 AI 帮你做战略分析",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-14",
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
        submitLabel: "保存回答，回到模块页",
        coachLabel: "暂时跳过，回到模块页",
        secondaryHref: "./module-strategy.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 13,
                "title": "案例：字节跳动的战略飞轮",
                "body": "通过字节案例理解平台、算法、全球化与组织能力如何相互支撑。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "你的战略工作坊：用 AI 帮你做战略分析",
                "body": "把整个模块整合起来，沉淀成真正可带回企业使用的一页纸战略。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
],
        nextLessonHref: "./module-strategy.html?entry=sequence",
        nextLessonLabel: "查看本模块全部章节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "把整个模块整合起来，沉淀成真正可带回企业使用的一页纸战略。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "工作坊的意义是把框架变成行动",
                "body": "前面学过的所有工具，最后都要回到你的企业现实里，变成一页纸能用的战略判断。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "AI 是共创工具，不是替你拍板",
                "body": "你可以让 AI 帮你分析、整理、比较，但不能把最终战略判断直接外包给模型。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "框架的价值在于结构化思考",
                "body": "无论是 SWOT、价值链还是五力，核心都不是填表，而是把问题整理得更清楚、更可决策。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "最后要落到优先级排序",
                "body": "真正能带回企业的，不是更多概念，而是你下一步先做什么、后做什么，以及为什么。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "你已经完成了整个战略模块。建议回到模块页复盘完整章节结构。",
        meta: ["当前完成：企业战略 14/14", "你已完成战略模块", '也可以先整理这一节'],
        nextHref: "./module-strategy.html?entry=sequence",
        nextLabel: "返回模块页",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-14",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson14",
    audioSource: './assets/audio/strategy-ep14-strategy-workshop.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep14-strategy-workshop.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep14-strategy-workshop/slide_01.png",
            "label": "你的战略工作坊：用 AI 帮你做战略分析",
            "caption": "这一节会帮助你系统理解：你的战略工作坊：用 AI 帮你做战略分析"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_03.png",
            "label": "经典框架",
            "caption": "但这里有一个关键：不要直接接受AI给你的结论。 你要基于你对行业的了解去挑战它。"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_04.png",
            "label": "关键判断",
            "caption": "优势+机会：我可以怎么利用优势去抓住机会？ 劣势+威胁：最危险的组合是什么，我应该如何应对？"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "对每个环节，请评估：1. 目前的效率和成本情况；2. AI可以在这个环节做什么；3. 优化的优先级（高/中/低）。 帮我找出三个最值得AI介入的环节。"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_06.png",
            "label": "回到你的企业",
            "caption": "这样整个分析是连贯的。 第二，准备好你的公司简介。"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_07.png",
            "label": "风险与提醒",
            "caption": "如果你认真做了，你可能会得到一个比很多咨询报告都更有针对性的战略分析。 因为AI有广度，你有深度。"
        },
        {
            "file": "strategy-ep14-strategy-workshop/slide_08.png",
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
            "start": 1.36,
            "end": 3.84,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.84,
            "end": 6.86,
            "text": "今天是模块一战略管理的最后一期。"
        },
        {
            "start": 6.86,
            "end": 9.64,
            "text": "前面十三期我们学了一系列战略工具："
        },
        {
            "start": 9.64,
            "end": 11.98,
            "text": "波特五力、竞争优势、价值链、"
        },
        {
            "start": 11.98,
            "end": 14.32,
            "text": "商业模式画布、平台战略、蓝海战略、"
        },
        {
            "start": 14.5,
            "end": 15.7,
            "text": "安索夫矩阵。"
        },
        {
            "start": 15.7,
            "end": 18.14,
            "text": "还看了Tesla和字节跳动的案例。"
        },
        {
            "start": 18.14,
            "end": 19.72,
            "text": "今天不讲新理论。"
        },
        {
            "start": 19.88,
            "end": 20.86,
            "text": "今天是实战课。"
        },
        {
            "start": 20.86,
            "end": 24.96,
            "text": "我要手把手教你，怎么用AI来做你自己公司的战略分析。"
        },
        {
            "start": 24.96,
            "end": 26.22,
            "text": "听完这期之后，"
        },
        {
            "start": 26.22,
            "end": 28.32,
            "text": "我希望你真的打开AI工具，"
        },
        {
            "start": 28.32,
            "end": 31.28,
            "text": "花一到两个小时，把今天的内容跑一遍。"
        },
        {
            "start": 31.28,
            "end": 34.4,
            "text": "这可能是整个模块对你最有价值的一期。"
        },
        {
            "start": 34.4,
            "end": 37.88,
            "text": "我给你设计了一个五步战略分析流程。"
        },
        {
            "start": 37.88,
            "end": 40.82,
            "text": "每一步我都会告诉你具体怎么跟AI协作。"
        },
        {
            "start": 40.82,
            "end": 42.76,
            "text": "第一步：行业五力分析。"
        },
        {
            "start": 42.76,
            "end": 46.53999999999999,
            "text": "打开你的AI工具，比如DeepSeek或者Kimi。"
        },
        {
            "start": 46.54,
            "end": 48.0,
            "text": "你可以用这样的Prompt："
        },
        {
            "start": 48.44,
            "end": 54.02,
            "text": "\"我是一家做的公司，主要产品是，目标客户是。"
        },
        {
            "start": 54.64,
            "end": 58.96,
            "text": "请用波特五力模型帮我分析我所在行业的竞争格局。"
        },
        {
            "start": 58.96,
            "end": 60.34,
            "text": "对每一个力量，"
        },
        {
            "start": 60.34,
            "end": 62.98,
            "text": "请评估其强度（高/中/低），"
        },
        {
            "start": 63.18,
            "end": 64.22,
            "text": "并说明原因。"
        },
        {
            "start": 64.22,
            "end": 67.86,
            "text": "特别注意分析AI技术对每一个力量的影响。"
        },
        {
            "start": 67.86,
            "end": 68.28,
            "text": "\""
        },
        {
            "start": 68.28,
            "end": 70.3,
            "text": "AI会给你一个初步的分析。"
        },
        {
            "start": 70.3,
            "end": 73.78,
            "text": "但这里有一个关键：不要直接接受AI给你的结论。"
        },
        {
            "start": 73.78,
            "end": 76.56,
            "text": "你要基于你对行业的了解去挑战它。"
        },
        {
            "start": 76.56,
            "end": 79.74,
            "text": "比如AI说\"新进入者的威胁是中等\"。"
        },
        {
            "start": 79.74,
            "end": 80.64,
            "text": "你可以追问："
        },
        {
            "start": 80.64,
            "end": 83.64,
            "text": "\"考虑到AI大幅降低了软件开发成本，"
        },
        {
            "start": 83.64,
            "end": 86.26,
            "text": "新进入者的威胁是不是应该调高？"
        },
        {
            "start": 86.26,
            "end": 90.02,
            "text": "最近有没有新的AI-Native公司进入这个赛道？"
        },
        {
            "start": 90.02,
            "end": 90.44,
            "text": "\""
        },
        {
            "start": 90.44,
            "end": 94.4,
            "text": "记住，AI提供框架和信息，你提供行业洞察和判断。"
        },
        {
            "start": 94.4,
            "end": 97.0,
            "text": "人机协作，这是最佳实践。"
        },
        {
            "start": 97.0,
            "end": 99.12,
            "text": "第二步：SWOT分析。"
        },
        {
            "start": 99.12,
            "end": 106.18,
            "text": "SWOT就是优势Strengths、劣势Weaknesses、机会Opportunities、威胁Threats。"
        },
        {
            "start": 106.18,
            "end": 107.5,
            "text": "Prompt可以这么写："
        },
        {
            "start": 107.5,
            "end": 111.36,
            "text": "\"基于刚才的五力分析，帮我做一个SWOT分析。"
        },
        {
            "start": 111.36,
            "end": 113.5,
            "text": "我公司的基本情况是：。"
        },
        {
            "start": 117.42,
            "end": 122.02,
            "text": "请列出我的核心优势、主要劣势、市场机会和外部威胁。"
        },
        {
            "start": 122.02,
            "end": 124.94,
            "text": "每一项给出三到五个具体的点。"
        },
        {
            "start": 124.94,
            "end": 125.36,
            "text": "\""
        },
        {
            "start": 125.36,
            "end": 128.94,
            "text": "这一步的关键是：你要给AI足够的内部信息。"
        },
        {
            "start": 128.94,
            "end": 133.44,
            "text": "AI不了解你的公司，你需要把关键信息告诉它。"
        },
        {
            "start": 133.44,
            "end": 137.38,
            "text": "你给的信息越详细，它的分析就越有针对性。"
        },
        {
            "start": 137.38,
            "end": 143.2,
            "text": "还有一个技巧：做完SWOT之后，让AI帮你做交叉分析。"
        },
        {
            "start": 143.2,
            "end": 147.14,
            "text": "\"请帮我做SWOT的交叉分析。"
        },
        {
            "start": 147.14,
            "end": 151.7,
            "text": "优势+机会：我可以怎么利用优势去抓住机会？"
        },
        {
            "start": 151.7,
            "end": 156.64,
            "text": "劣势+威胁：最危险的组合是什么，我应该如何应对？"
        },
        {
            "start": 156.64,
            "end": 157.05999999999997,
            "text": "\""
        },
        {
            "start": 157.05999999999997,
            "end": 160.12,
            "text": "这个交叉分析往往能给你一些你没想到的洞察。"
        },
        {
            "start": 160.12,
            "end": 162.3,
            "text": "第三步：竞品分析。"
        },
        {
            "start": 162.3,
            "end": 164.06,
            "text": "这一步AI特别有用，"
        },
        {
            "start": 164.06,
            "end": 167.26,
            "text": "因为它可以帮你快速整合大量的公开信息。"
        },
        {
            "start": 167.26,
            "end": 170.78,
            "text": "\"请帮我分析我的三个主要竞争对手：、、。"
        },
        {
            "start": 173.42,
            "end": 175.5,
            "text": "对每个竞品，请分析："
        },
        {
            "start": 175.5,
            "end": 178.42,
            "text": "1. 它们的定位和目标客户是什么；"
        },
        {
            "start": 178.42,
            "end": 180.72,
            "text": "2. 核心价值主张是什么；"
        },
        {
            "start": 180.72,
            "end": 182.78,
            "text": "3. 商业模式是什么；"
        },
        {
            "start": 182.78,
            "end": 185.52,
            "text": "4. 它们在AI应用方面做了什么；"
        },
        {
            "start": 185.52,
            "end": 187.4,
            "text": "5. 它们的优势和劣势。"
        },
        {
            "start": 187.4,
            "end": 189.86,
            "text": "最后帮我做一个对比表格。"
        },
        {
            "start": 189.86,
            "end": 190.28,
            "text": "\""
        },
        {
            "start": 190.28,
            "end": 193.26,
            "text": "AI会基于公开信息给你一个初步的竞品分析。"
        },
        {
            "start": 193.26,
            "end": 195.52,
            "text": "如果你有一些非公开的信息，"
        },
        {
            "start": 195.52,
            "end": 198.7,
            "text": "比如你了解到竞品最近在招AI工程师，"
        },
        {
            "start": 198.7,
            "end": 201.94,
            "text": "或者他们的客户反馈，你可以补充进去，"
        },
        {
            "start": 201.94,
            "end": 203.88,
            "text": "让AI的分析更准确。"
        },
        {
            "start": 203.88,
            "end": 206.7,
            "text": "做完竞品分析后，追问一个关键问题："
        },
        {
            "start": 206.7,
            "end": 207.7,
            "text": "\"基于这个对比，"
        },
        {
            "start": 207.7,
            "end": 209.8,
            "text": "我的差异化定位应该是什么？"
        },
        {
            "start": 209.8,
            "end": 212.62,
            "text": "我如何在竞争中建立独特的优势？"
        },
        {
            "start": 212.62,
            "end": 213.04,
            "text": "\""
        },
        {
            "start": 213.04,
            "end": 214.86,
            "text": "第四步：价值链审视。"
        },
        {
            "start": 215.4,
            "end": 218.56,
            "text": "回顾你公司的价值链，找到AI的切入点。"
        },
        {
            "start": 218.56,
            "end": 220.7,
            "text": "\"请帮我梳理我公司的价值链。"
        },
        {
            "start": 220.7,
            "end": 225.52,
            "text": "从到，中间经过了哪些环节？"
        },
        {
            "start": 225.52,
            "end": 227.44,
            "text": "对每个环节，请评估："
        },
        {
            "start": 227.44,
            "end": 229.82,
            "text": "1. 目前的效率和成本情况；"
        },
        {
            "start": 229.82,
            "end": 232.4,
            "text": "2. AI可以在这个环节做什么；"
        },
        {
            "start": 232.4,
            "end": 235.7,
            "text": "3. 优化的优先级（高/中/低）。"
        },
        {
            "start": 235.7,
            "end": 238.68,
            "text": "帮我找出三个最值得AI介入的环节。"
        },
        {
            "start": 238.68,
            "end": 239.1,
            "text": "\""
        },
        {
            "start": 239.1,
            "end": 241.64,
            "text": "这一步的目标是找到你的AI杠杆点。"
        },
        {
            "start": 241.64,
            "end": 245.08,
            "text": "第十期讲过，AI杠杆点就是痛点大、"
        },
        {
            "start": 245.08,
            "end": 247.78,
            "text": "AI匹配度高、战略价值高的环节。"
        },
        {
            "start": 247.78,
            "end": 250.04,
            "text": "第五步：战略方向建议。"
        },
        {
            "start": 250.04,
            "end": 252.86,
            "text": "最后一步，让AI帮你做综合。"
        },
        {
            "start": 252.86,
            "end": 257.28,
            "text": "\"基于前面四步的分析——五力、SWOT、竞品、"
        },
        {
            "start": 257.28,
            "end": 260.38,
            "text": "价值链——请帮我提出三个战略方向建议。"
        },
        {
            "start": 260.38,
            "end": 262.28,
            "text": "对每个方向，请说明："
        },
        {
            "start": 262.28,
            "end": 264.42,
            "text": "1. 核心主张是什么；"
        },
        {
            "start": 264.42,
            "end": 266.74,
            "text": "2. 需要什么资源和能力；"
        },
        {
            "start": 266.74,
            "end": 269.1,
            "text": "3. 预期的效果和风险；"
        },
        {
            "start": 269.1,
            "end": 272.18,
            "text": "4. AI在其中扮演什么角色。"
        },
        {
            "start": 272.18,
            "end": 272.6,
            "text": "\""
        },
        {
            "start": 272.6,
            "end": 273.76,
            "text": "AI会给你几个方向。"
        },
        {
            "start": 273.76,
            "end": 277.26,
            "text": "但我再强调一次：最终的战略决策是你的工作。"
        },
        {
            "start": 277.26,
            "end": 280.84,
            "text": "AI给你的是选项和分析，选择权在你手里。"
        },
        {
            "start": 280.84,
            "end": 284.34,
            "text": "因为战略是取舍，取舍涉及价值判断，"
        },
        {
            "start": 284.34,
            "end": 286.46,
            "text": "而价值判断是人的事情。"
        },
        {
            "start": 286.46,
            "end": 288.7,
            "text": "好，五步流程讲完了。"
        },
        {
            "start": 288.7,
            "end": 291.16,
            "text": "我给大家几个额外的实操建议。"
        },
        {
            "start": 291.16,
            "end": 293.14,
            "text": "第一，一次对话做完全部五步。"
        },
        {
            "start": 293.14,
            "end": 294.64,
            "text": "不要分五次来做。"
        },
        {
            "start": 294.64,
            "end": 297.86,
            "text": "因为AI在同一个对话里面会记住前面的内容，"
        },
        {
            "start": 297.86,
            "end": 300.32,
            "text": "后面的分析会基于前面的结论。"
        },
        {
            "start": 300.32,
            "end": 302.72,
            "text": "这样整个分析是连贯的。"
        },
        {
            "start": 302.72,
            "end": 304.82,
            "text": "第二，准备好你的公司简介。"
        },
        {
            "start": 304.82,
            "end": 309.24000000000007,
            "text": "在开始之前，先给AI一个你公司的detailed brief。"
        },
        {
            "start": 309.24000000000007,
            "end": 312.46,
            "text": "包括：行业、产品、客户、团队规模、"
        },
        {
            "start": 312.46,
            "end": 315.48,
            "text": "成立时间、竞争对手、当前的核心挑战。"
        },
        {
            "start": 315.48,
            "end": 318.54,
            "text": "信息越充分，分析越有针对性。"
        },
        {
            "start": 318.54,
            "end": 320.9,
            "text": "第三，主动挑战AI的结论。"
        },
        {
            "start": 320.9,
            "end": 325.12,
            "text": "如果你觉得AI的分析不对或者太表面，追问它。"
        },
        {
            "start": 325.12,
            "end": 327.82,
            "text": "\"为什么你认为这个威胁是中等而不是高？"
        },
        {
            "start": 327.82,
            "end": 329.6,
            "text": "\"、\"你有没有遗漏什么因素？"
        },
        {
            "start": 329.6,
            "end": 331.61999999999995,
            "text": "\"、\"换一个角度来看呢？"
        },
        {
            "start": 331.61999999999995,
            "end": 332.03999999999996,
            "text": "\""
        },
        {
            "start": 332.03999999999996,
            "end": 334.52,
            "text": "第四，让AI帮你做一个executive summary。"
        },
        {
            "start": 334.52,
            "end": 338.18,
            "text": "做完所有分析后，让AI用一页纸的篇幅，"
        },
        {
            "start": 338.18,
            "end": 340.84,
            "text": "总结关键发现和行动建议。"
        },
        {
            "start": 340.84,
            "end": 343.42,
            "text": "这个summary你可以直接拿去跟团队讨论。"
        },
        {
            "start": 343.42,
            "end": 347.98,
            "text": "第五，也是最重要的：不要把AI的分析当成最终答案。"
        },
        {
            "start": 347.98,
            "end": 352.48,
            "text": "把它当成一个起点，一个你可以在上面迭代和讨论的基础。"
        },
        {
            "start": 352.48,
            "end": 354.14,
            "text": "真正有价值的战略，"
        },
        {
            "start": 354.14,
            "end": 356.42,
            "text": "是在AI的分析基础上，"
        },
        {
            "start": 356.42,
            "end": 359.18,
            "text": "加上你的行业洞察、你的直觉、"
        },
        {
            "start": 359.18,
            "end": 362.62,
            "text": "你对组织和人的理解，最终形成的。"
        },
        {
            "start": 362.62,
            "end": 363.74,
            "text": "好，今天没有思考题。"
        },
        {
            "start": 363.74,
            "end": 366.34,
            "text": "今天的\"作业\"就是：打开AI工具，"
        },
        {
            "start": 366.34,
            "end": 369.18,
            "text": "花一到两个小时，把这五步跑一遍。"
        },
        {
            "start": 369.68,
            "end": 370.88,
            "text": "如果你认真做了，"
        },
        {
            "start": 370.88,
            "end": 373.92,
            "text": "你可能会得到一个比很多咨询报告都更有"
        },
        {
            "start": 373.92,
            "end": 375.18,
            "text": "针对性的战略分析。"
        },
        {
            "start": 375.18,
            "end": 377.76,
            "text": "因为AI有广度，你有深度。"
        },
        {
            "start": 377.76,
            "end": 380.34,
            "text": "两者结合，效果会超出你的预期。"
        },
        {
            "start": 380.34,
            "end": 381.42,
            "text": "做完之后，"
        },
        {
            "start": 381.42,
            "end": 384.72,
            "text": "你也可以把这份分析结果先整理出来，"
        },
        {
            "start": 384.72,
            "end": 387.24,
            "text": "回到企业里继续验证和迭代。"
        },
        {
            "start": 387.24,
            "end": 390.56,
            "text": "这样你会更清楚哪些判断是成立的，哪些还需要继续推敲，"
        },
        {
            "start": 390.56,
            "end": 392.4,
            "text": "提出更多的challenge和建议。"
        },
        {
            "start": 392.4,
            "end": 394.68,
            "text": "总结一下模块一的核心内容。"
        },
        {
            "start": 394.68,
            "end": 399.14,
            "text": "我们用十四期的内容，走完了战略管理的完整旅程。"
        },
        {
            "start": 399.14,
            "end": 400.82,
            "text": "战略的本质是取舍。"
        },
        {
            "start": 400.82,
            "end": 402.88,
            "text": "五力模型帮你看懂行业。"
        },
        {
            "start": 402.88,
            "end": 406.46,
            "text": "竞争优势有两条路，AI让你可能兼得。"
        },
        {
            "start": 406.46,
            "end": 410.78,
            "text": "价值链告诉你利润从哪来，AI正在重构每个环节。"
        },
        {
            "start": 410.78,
            "end": 413.46,
            "text": "商业模式画布帮你设计赚钱逻辑，"
        },
        {
            "start": 413.46,
            "end": 415.78,
            "text": "数据飞轮可能是最深的壁垒。"
        },
        {
            "start": 415.78,
            "end": 420.4,
            "text": "蓝海战略帮你找到无人区，AI正在创造大量新蓝海。"
        },
        {
            "start": 420.4,
            "end": 424.8,
            "text": "安索夫矩阵帮你选增长路径，AI加速每一条路径。"
        },
        {
            "start": 424.8,
            "end": 428.28,
            "text": "Tesla和字节跳动告诉你AI驱动战略的力量。"
        },
        {
            "start": 428.28,
            "end": 431.46000000000004,
            "text": "从下一期开始，我们进入模块二：财务与金融。"
        },
        {
            "start": 431.46000000000004,
            "end": 434.92,
            "text": "第一个话题是三张财务报表——企业的体检报告。"
        },
        {
            "start": 434.92,
            "end": 439.72,
            "text": "不管你是创业者还是管理者，读懂财报是一项必备技能。"
        },
        {
            "start": 439.72,
            "end": 443.76,
            "text": "我们还会讲到AI怎么让财务分析变得更简单。"
        },
        {
            "start": 443.76,
            "end": 446.0,
            "text": "好，模块一战略管理就到这里。"
        },
        {
            "start": 446.0,
            "end": 447.22,
            "text": "感谢大家的陪伴。"
        },
        {
            "start": 447.22,
            "end": 448.76,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.84,
        "index": 0
    },
    {
        "start": 3.84,
        "end": 70.3,
        "index": 1
    },
    {
        "start": 70.3,
        "end": 99.12,
        "index": 2
    },
    {
        "start": 99.12,
        "end": 232.4,
        "index": 3
    },
    {
        "start": 232.4,
        "end": 300.32,
        "index": 4
    },
    {
        "start": 300.32,
        "end": 369.68,
        "index": 5
    },
    {
        "start": 369.68,
        "end": 392.4,
        "index": 6
    },
    {
        "start": 392.4,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-strategy.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "把整个模块整合起来，沉淀成真正可带回企业使用的一页纸战略。"
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
      submitHref: "./module-strategy.html?entry={entry}",
      secondaryHref: "./module-strategy.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-14",
      coachSource: "./ai-coach.html?source=lesson-strategy-14"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于你的战略工作坊：用 AI 帮你做战略分析的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "你的战略工作坊：用 AI 帮你做战略分析", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./module-strategy.html" + '?entry=' + entryMode;
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
