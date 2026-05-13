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

  window.MindsLeapConfigs.lessons.strategy03 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第3课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第3课：竞争优势的两条路：成本领先 vs 差异化",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 7 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep03-competitive-advantage/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：竞争优势的两条路：成本领先 vs 差异化",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-3",
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
        secondaryHref: "./lesson-strategy-04.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 2,
                "title": "波特五力模型：看懂你的行业竞争格局",
                "body": "从竞争结构切入，看清行业吸引力、壁垒与价格战。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "竞争优势的两条路：成本领先 vs 差异化",
                "body": "理解企业到底靠什么赢，以及 AI 是否正在改变边界。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "价值链分析：AI 正在重构哪些环节",
                "body": "用价值链看清利润从哪里来，也看清 AI 最值得切入的环节。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-04.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "理解企业到底靠什么赢，以及 AI 是否正在改变边界。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "两条路不能同时贪",
                "body": "大多数企业最终都要明确主路径：是把成本做得更低，还是把价值做得更独特。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "成本领先靠系统效率",
                "body": "流程、供应链、标准化和自动化，决定低成本优势能不能持续，而不是一时便宜。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "差异化要让客户真愿意多付",
                "body": "如果客户感知不到独特价值，所谓差异化就会退化成更高成本、更低效率。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 会同时重写两条路",
                "body": "AI 既能压低成本门槛，也能放大差异化表达，关键是你的优势到底建立在什么能力上。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 3/14", "建议下一节：价值链分析：AI 正在重构哪些环节", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-04.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-03",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson3",
    audioSource: './assets/audio/strategy-ep03-competitive-advantage.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep03-competitive-advantage.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep03-competitive-advantage/slide_01.png",
            "label": "竞争优势的两条路：成本领先 vs 差异化",
            "caption": "这一节会帮助你系统理解：竞争优势的两条路：成本领先 vs 差异化"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_03.png",
            "label": "经典框架",
            "caption": "比如说比亚迪，自己做电池、自己做芯片，成本比外购低很多。 成本领先的好处是什么？"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_04.png",
            "label": "关键判断",
            "caption": "但差异化的风险是什么？ 第一，差异化的成本很高，你需要持续投入研发、设计、品牌。"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "AI做第一份个性化方案要花一块钱，做第一万份也还是每份一块钱。 这意味着什么？"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_06.png",
            "label": "回到你的企业",
            "caption": "现在，如果你能用好AI，你可能可以同时实现低成本和高差异化。 这就是AI时代的竞争优势新范式。"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_07.png",
            "label": "风险与提醒",
            "caption": "AI帮你降低了后台运营成本，同时帮你在前台创造了个性化的客户体验。 一边省钱，一边赚更多钱。"
        },
        {
            "file": "strategy-ep03-competitive-advantage/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.12,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.12,
            "end": 3.12,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.12,
            "end": 6.66,
            "text": "上一期我们用五力模型分析了行业竞争格局。"
        },
        {
            "start": 6.66,
            "end": 10.759999999999998,
            "text": "今天我们来聊一个更核心的问题：你的公司靠什么赢？"
        },
        {
            "start": 10.76,
            "end": 12.96,
            "text": "你的竞争优势到底是什么？"
        },
        {
            "start": 12.96,
            "end": 16.18,
            "text": "波特教授给了我们两条基本的竞争战略路径。"
        },
        {
            "start": 16.18,
            "end": 18.84,
            "text": "第一条叫成本领先，Cost Leadership。"
        },
        {
            "start": 18.84,
            "end": 21.88,
            "text": "第二条叫差异化，Differentiation。"
        },
        {
            "start": 21.88,
            "end": 23.819999999999997,
            "text": "这两条路径听起来简单，"
        },
        {
            "start": 23.82,
            "end": 26.02,
            "text": "但绝大多数公司的战略困境，"
        },
        {
            "start": 26.02,
            "end": 29.26,
            "text": "都可以归结为在这两条路之间没想清楚。"
        },
        {
            "start": 29.26,
            "end": 30.78,
            "text": "先说成本领先。"
        },
        {
            "start": 30.78,
            "end": 33.7,
            "text": "成本领先不是说你卖得最便宜。"
        },
        {
            "start": 33.7,
            "end": 37.0,
            "text": "它说的是，在同样的品质水平下，"
        },
        {
            "start": 37.0,
            "end": 39.62,
            "text": "你的成本结构比竞争对手更低。"
        },
        {
            "start": 39.62,
            "end": 43.58,
            "text": "你可以选择把这个成本优势变成低价去抢市场，"
        },
        {
            "start": 43.58,
            "end": 46.98,
            "text": "也可以选择维持正常价格获得更高的利润。"
        },
        {
            "start": 46.98,
            "end": 48.6,
            "text": "怎么做到成本领先？"
        },
        {
            "start": 48.6,
            "end": 50.370000000000005,
            "text": "通常有几种途径。"
        },
        {
            "start": 50.370000000000005,
            "end": 51.42,
            "text": "规模效应。"
        },
        {
            "start": 51.42,
            "end": 54.76,
            "text": "量大了，每个单位的固定成本就摊薄了。"
        },
        {
            "start": 54.76,
            "end": 57.39999999999999,
            "text": "沃尔玛就是靠规模拿到最低的采购价。"
        },
        {
            "start": 57.4,
            "end": 58.5,
            "text": "流程优化。"
        },
        {
            "start": 58.5,
            "end": 62.64,
            "text": "通过精益管理、自动化把生产和运营效率做到极致。"
        },
        {
            "start": 62.64,
            "end": 64.28,
            "text": "丰田就是这个路子。"
        },
        {
            "start": 64.28,
            "end": 65.56,
            "text": "供应链控制。"
        },
        {
            "start": 65.56,
            "end": 68.54,
            "text": "掌控上游原材料或者关键供应环节。"
        },
        {
            "start": 68.54,
            "end": 70.76,
            "text": "比如说比亚迪，自己做电池、"
        },
        {
            "start": 71.08,
            "end": 73.48,
            "text": "自己做芯片，成本比外购低很多。"
        },
        {
            "start": 73.48,
            "end": 75.54,
            "text": "成本领先的好处是什么？"
        },
        {
            "start": 75.54,
            "end": 77.5,
            "text": "就是你有更大的腾挪空间。"
        },
        {
            "start": 77.5,
            "end": 80.02,
            "text": "行业打价格战的时候，你能扛得住。"
        },
        {
            "start": 80.02,
            "end": 84.38,
            "text": "经济下行客户预算收紧的时候，你还能保持利润。"
        },
        {
            "start": 84.38,
            "end": 86.16,
            "text": "但成本领先的风险是什么？"
        },
        {
            "start": 86.16,
            "end": 88.28,
            "text": "有人会用更低的成本杀进来。"
        },
        {
            "start": 88.28,
            "end": 90.9,
            "text": "特别是来自发展中国家的竞争对手，"
        },
        {
            "start": 90.9,
            "end": 92.32,
            "text": "劳动力更便宜，"
        },
        {
            "start": 92.32,
            "end": 95.3,
            "text": "你的成本优势可能一夜之间就没了。"
        },
        {
            "start": 95.3,
            "end": 96.34,
            "text": "再说差异化。"
        },
        {
            "start": 96.34,
            "end": 100.3,
            "text": "差异化就是你提供了一些竞争对手提供不了的、"
        },
        {
            "start": 100.3,
            "end": 102.68,
            "text": "客户愿意为之多付钱的独特价值。"
        },
        {
            "start": 102.68,
            "end": 104.88,
            "text": "差异化有很多种形式。"
        },
        {
            "start": 104.88,
            "end": 106.14,
            "text": "产品差异化。"
        },
        {
            "start": 106.14,
            "end": 109.5,
            "text": "你的产品功能、性能、设计比别人好。"
        },
        {
            "start": 109.5,
            "end": 111.88,
            "text": "苹果就是典型的产品差异化。"
        },
        {
            "start": 111.88,
            "end": 113.1,
            "text": "服务差异化。"
        },
        {
            "start": 113.1,
            "end": 114.86,
            "text": "你的服务体验比别人好。"
        },
        {
            "start": 114.86,
            "end": 117.04,
            "text": "海底捞靠服务做出了差异化。"
        },
        {
            "start": 117.04,
            "end": 118.36,
            "text": "品牌差异化。"
        },
        {
            "start": 118.36,
            "end": 122.22,
            "text": "你的品牌代表了一种独特的价值观或生活方式。"
        },
        {
            "start": 122.22,
            "end": 125.06,
            "text": "lululemon、Patagonia就是品牌差异化。"
        },
        {
            "start": 125.06,
            "end": 126.3,
            "text": "技术差异化。"
        },
        {
            "start": 126.3,
            "end": 128.32,
            "text": "你掌握了别人没有的核心技术。"
        },
        {
            "start": 128.32,
            "end": 132.64,
            "text": "台积电靠先进制程做到了极致的技术差异化。"
        },
        {
            "start": 132.64,
            "end": 134.14,
            "text": "差异化的好处是什么？"
        },
        {
            "start": 134.14,
            "end": 137.6,
            "text": "你能收更高的价格，你有更忠诚的客户，"
        },
        {
            "start": 137.6,
            "end": 139.98,
            "text": "你不容易被价格战打败。"
        },
        {
            "start": 139.98,
            "end": 141.76444444444445,
            "text": "但差异化的风险是什么？"
        },
        {
            "start": 141.76444444444445,
            "end": 143.58,
            "text": "第一，差异化的成本很高，"
        },
        {
            "start": 143.58,
            "end": 146.2,
            "text": "你需要持续投入研发、设计、品牌。"
        },
        {
            "start": 146.2,
            "end": 148.66,
            "text": "第二，你的差异化可能被模仿。"
        },
        {
            "start": 148.66,
            "end": 151.06,
            "text": "第三，客户的需求在变，"
        },
        {
            "start": 151.06,
            "end": 154.04,
            "text": "你今天的差异化明天可能不再值钱。"
        },
        {
            "start": 154.04,
            "end": 155.74,
            "text": "波特有一个很著名的观点，"
        },
        {
            "start": 155.74,
            "end": 158.02,
            "text": "他说企业不能\"stuck in the middle\"，"
        },
        {
            "start": 158.02,
            "end": 159.6,
            "text": "不能卡在中间。"
        },
        {
            "start": 159.6,
            "end": 163.88,
            "text": "你要么选成本领先，要么选差异化，不能两个都想要。"
        },
        {
            "start": 163.88,
            "end": 166.46,
            "text": "因为两条路径需要的组织能力、"
        },
        {
            "start": 166.46,
            "end": 169.22,
            "text": "资源配置、文化基因是不一样的。"
        },
        {
            "start": 169.22,
            "end": 171.68,
            "text": "追求低成本的组织要精打细算，"
        },
        {
            "start": 171.68,
            "end": 174.78,
            "text": "追求差异化的组织要鼓励创新和冒险。"
        },
        {
            "start": 174.78,
            "end": 176.67333333333332,
            "text": "你很难两者兼顾。"
        },
        {
            "start": 176.67333333333332,
            "end": 179.76,
            "text": "这个观点在传统商业世界基本上是对的。"
        },
        {
            "start": 179.76,
            "end": 183.81,
            "text": "但是，AI时代来了之后，这个规律可能正在被改写。"
        },
        {
            "start": 183.81,
            "end": 187.02,
            "text": "这就是今天我最想跟大家分享的部分："
        },
        {
            "start": 187.02,
            "end": 189.86,
            "text": "AI如何让\"既要又要\"成为可能。"
        },
        {
            "start": 189.86,
            "end": 193.4,
            "text": "为什么传统上成本领先和差异化是矛盾的？"
        },
        {
            "start": 193.4,
            "end": 197.78,
            "text": "因为差异化通常意味着定制化，而定制化意味着高成本。"
        },
        {
            "start": 197.78,
            "end": 202.78,
            "text": "你给每个客户提供个性化服务，人力成本是线性增长的。"
        },
        {
            "start": 202.78,
            "end": 205.1,
            "text": "但AI改变了这个等式。"
        },
        {
            "start": 205.1,
            "end": 208.18,
            "text": "因为AI的边际成本趋近于零。"
        },
        {
            "start": 208.18,
            "end": 211.2,
            "text": "我们在模块零第四期讲过这个概念。"
        },
        {
            "start": 211.2,
            "end": 214.0,
            "text": "AI做第一份个性化方案要花一块钱，"
        },
        {
            "start": 214.0,
            "end": 216.32666666666665,
            "text": "做第一万份也还是每份一块钱。"
        },
        {
            "start": 216.32666666666665,
            "end": 217.2,
            "text": "这意味着什么？"
        },
        {
            "start": 217.2,
            "end": 221.0,
            "text": "意味着你可以低成本地实现大规模差异化。"
        },
        {
            "start": 221.0,
            "end": 222.54,
            "text": "我给你举几个例子。"
        },
        {
            "start": 222.54,
            "end": 223.54,
            "text": "Netflix。"
        },
        {
            "start": 223.54,
            "end": 226.2,
            "text": "它的内容推荐是高度个性化的，"
        },
        {
            "start": 226.2,
            "end": 228.26,
            "text": "每个用户看到的首页都不一样。"
        },
        {
            "start": 228.26,
            "end": 232.66,
            "text": "但这个个性化不是靠人工编辑做的，是靠推荐算法做的。"
        },
        {
            "start": 232.66,
            "end": 237.04,
            "text": "算法服务一个用户和服务一亿个用户的边际成本几乎一样。"
        },
        {
            "start": 237.04,
            "end": 240.44,
            "text": "所以Netflix做到了低成本的差异化体验。"
        },
        {
            "start": 240.44,
            "end": 241.42,
            "text": "Spotify。"
        },
        {
            "start": 241.42,
            "end": 244.78,
            "text": "它为每个用户生成个性化的播放列表。"
        },
        {
            "start": 244.78,
            "end": 247.56,
            "text": "几亿用户，每个人的歌单都不同。"
        },
        {
            "start": 247.56,
            "end": 249.58,
            "text": "这在以前是不可能的。"
        },
        {
            "start": 249.58,
            "end": 252.38,
            "text": "以前你请一百个DJ也做不到这个事情。"
        },
        {
            "start": 252.38,
            "end": 256.46,
            "text": "再比如说，一些AI-Native的电商公司，"
        },
        {
            "start": 256.46,
            "end": 260.08,
            "text": "已经开始给每个用户展示不同的产品描述、"
        },
        {
            "start": 260.08,
            "end": 262.14,
            "text": "不同的价格、不同的营销文案。"
        },
        {
            "start": 262.14,
            "end": 265.04,
            "text": "所有这些都是AI实时生成的。"
        },
        {
            "start": 265.04,
            "end": 266.2,
            "text": "你发现没有？"
        },
        {
            "start": 266.2,
            "end": 269.24,
            "text": "AI让\"个性化\"的成本趋近于零了。"
        },
        {
            "start": 269.24,
            "end": 272.84,
            "text": "以前个性化是奢侈品，只有最有钱的客户才能享受。"
        },
        {
            "start": 272.84,
            "end": 275.06,
            "text": "现在个性化可以变成标配。"
        },
        {
            "start": 275.06,
            "end": 277.78,
            "text": "这对战略的含义是深远的。"
        },
        {
            "start": 277.78,
            "end": 281.095,
            "text": "以前你可能要在成本和差异化之间做取舍。"
        },
        {
            "start": 281.095,
            "end": 283.5,
            "text": "现在，如果你能用好AI，"
        },
        {
            "start": 283.5,
            "end": 287.2,
            "text": "你可能可以同时实现低成本和高差异化。"
        },
        {
            "start": 287.2,
            "end": 290.3,
            "text": "这就是AI时代的竞争优势新范式。"
        },
        {
            "start": 290.3,
            "end": 291.8,
            "text": "但我要给你一个提醒。"
        },
        {
            "start": 291.8,
            "end": 295.18000000000006,
            "text": "不是说有了AI你就自动获得两全其美的优势。"
        },
        {
            "start": 295.18000000000006,
            "end": 299.52,
            "text": "AI只是提供了这个可能性，但你需要战略性地去设计。"
        },
        {
            "start": 299.52,
            "end": 301.84,
            "text": "具体来说，你需要想清楚三个问题。"
        },
        {
            "start": 301.84,
            "end": 306.0,
            "text": "第一，在你的业务里，哪些环节可以通过AI降低成本？"
        },
        {
            "start": 306.0,
            "end": 309.5400000000001,
            "text": "通常是那些信息处理密集、重复性高的环节。"
        },
        {
            "start": 309.5400000000001,
            "end": 313.48,
            "text": "比如客服、数据分析、内容生成、订单处理。"
        },
        {
            "start": 313.48,
            "end": 318.18,
            "text": "第二，在你的业务里，AI可以帮你在哪些环节实现差异化？"
        },
        {
            "start": 318.18,
            "end": 320.38,
            "text": "通常是那些可以个性化的环节。"
        },
        {
            "start": 320.38,
            "end": 324.3,
            "text": "比如产品推荐、营销内容、定价、客户沟通。"
        },
        {
            "start": 324.3,
            "end": 329.64,
            "text": "第三，你的组织是否有能力同时推进AI降本和AI差异化？"
        },
        {
            "start": 329.64,
            "end": 331.28,
            "text": "这第三点很关键。"
        },
        {
            "start": 331.28,
            "end": 335.88,
            "text": "很多公司把AI只用在降本上——用AI代替客服、"
        },
        {
            "start": 335.88,
            "end": 339.4085714285714,
            "text": "用AI写报告、用AI做数据录入。"
        },
        {
            "start": 339.4085714285714,
            "end": 342.8,
            "text": "这没错，但你只挖掘了AI一半的价值。"
        },
        {
            "start": 342.8,
            "end": 347.5799999999999,
            "text": "另一半价值在差异化——用AI给客户创造独特的体验。"
        },
        {
            "start": 347.58,
            "end": 350.04,
            "text": "最厉害的公司，是两者同时做的。"
        },
        {
            "start": 350.04,
            "end": 352.42,
            "text": "AI帮你降低了后台运营成本，"
        },
        {
            "start": 352.42,
            "end": 355.59999999999997,
            "text": "同时帮你在前台创造了个性化的客户体验。"
        },
        {
            "start": 355.6,
            "end": 358.08,
            "text": "一边省钱，一边赚更多钱。"
        },
        {
            "start": 358.08,
            "end": 359.5,
            "text": "好，今天的思考题。"
        },
        {
            "start": 359.5,
            "end": 363.94000000000005,
            "text": "第一，你的公司目前走的是成本领先还是差异化路线？"
        },
        {
            "start": 363.94000000000005,
            "end": 365.58,
            "text": "还是\"stuck in the middle\"？"
        },
        {
            "start": 365.58,
            "end": 369.36,
            "text": "第二，如果用AI，你能在哪些环节降低成本？"
        },
        {
            "start": 369.36,
            "end": 371.66,
            "text": "在哪些环节创造差异化？"
        },
        {
            "start": 371.66,
            "end": 372.2,
            "text": "第三，"
        },
        {
            "start": 372.2,
            "end": 376.82,
            "text": "你的竞争对手如果用AI同时实现了低成本和高差异化，"
        },
        {
            "start": 376.82,
            "end": 377.86799999999994,
            "text": "你怎么应对？"
        },
        {
            "start": 377.86799999999994,
            "end": 379.74,
            "text": "总结一下今天的核心要点。"
        },
        {
            "start": 379.74,
            "end": 384.56,
            "text": "第一，竞争优势的两条经典路径：成本领先和差异化。"
        },
        {
            "start": 384.56,
            "end": 386.55999999999995,
            "text": "传统上两者很难兼顾。"
        },
        {
            "start": 386.56,
            "end": 389.58,
            "text": "第二，AI时代可能改写了这个规律。"
        },
        {
            "start": 389.58,
            "end": 392.24,
            "text": "因为AI的边际成本趋近于零，"
        },
        {
            "start": 392.24,
            "end": 394.84,
            "text": "你可以低成本地实现大规模个性化。"
        },
        {
            "start": 394.84,
            "end": 395.52,
            "text": "第三，"
        },
        {
            "start": 395.52,
            "end": 401.06,
            "text": "最大的AI战略机会是同时用AI降本和用AI创造差异化。"
        },
        {
            "start": 401.06,
            "end": 403.26,
            "text": "一边提效率，一边提体验。"
        },
        {
            "start": 403.26,
            "end": 405.26,
            "text": "第四，这不会自动发生。"
        },
        {
            "start": 405.26,
            "end": 406.80000000000007,
            "text": "你需要战略性地设计："
        },
        {
            "start": 406.80000000000007,
            "end": 408.74,
            "text": "哪些环节用AI降本，"
        },
        {
            "start": 408.74,
            "end": 411.2,
            "text": "哪些环节用AI做差异化。"
        },
        {
            "start": 411.2,
            "end": 413.3,
            "text": "下一期我们讲价值链分析。"
        },
        {
            "start": 413.3,
            "end": 417.8,
            "text": "一个企业从原材料到最终交付给客户，中间有很多环节。"
        },
        {
            "start": 417.8,
            "end": 420.53999999999996,
            "text": "AI正在重构其中的每一个环节。"
        },
        {
            "start": 420.54,
            "end": 423.52,
            "text": "我会帮你具体看看，在你的价值链上，"
        },
        {
            "start": 423.52,
            "end": 425.54,
            "text": "AI最应该切入的点在哪里。"
        },
        {
            "start": 425.54,
            "end": 427.0,
            "text": "好，今天就到这里。"
        },
        {
            "start": 427.0,
            "end": 428.64,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 6.66,
        "index": 0
    },
    {
        "start": 6.66,
        "end": 29.26,
        "index": 1
    },
    {
        "start": 29.26,
        "end": 139.98,
        "index": 2
    },
    {
        "start": 139.98,
        "end": 179.76,
        "index": 3
    },
    {
        "start": 179.76,
        "end": 281.095,
        "index": 4
    },
    {
        "start": 281.095,
        "end": 290.3,
        "index": 5
    },
    {
        "start": 290.3,
        "end": 377.868,
        "index": 6
    },
    {
        "start": 377.868,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-04.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "理解企业到底靠什么赢，以及 AI 是否正在改变边界。"
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
      submitHref: "./lesson-strategy-04.html?entry={entry}",
      secondaryHref: "./lesson-strategy-04.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-03",
      coachSource: "./ai-coach.html?source=lesson-strategy-03"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于竞争优势的两条路：成本领先 vs 差异化的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "竞争优势的两条路：成本领先 vs 差异化", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-04.html" + '?entry=' + entryMode;
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
