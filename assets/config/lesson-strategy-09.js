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

  window.MindsLeapConfigs.lessons.strategy09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第9课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第9课：蓝海战略：AI 时代的新蓝海在哪里",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep09-blue-ocean/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：蓝海战略：AI 时代的新蓝海在哪里",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-9",
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
        secondaryHref: "./lesson-strategy-10.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 8,
                "title": "订阅经济与 AI 个性化",
                "body": "理解订阅模式为什么成立，以及 AI 个性化如何强化长期价值。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "蓝海战略：AI 时代的新蓝海在哪里",
                "body": "把创造无竞争市场空间的经典框架，放到 AI 新机会里重新理解。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "安索夫矩阵：四种增长路径怎么选",
                "body": "用安索夫矩阵看清市场、产品与多元化的不同风险。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-10.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "把创造无竞争市场空间的经典框架，放到 AI 新机会里重新理解。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "蓝海不是逃离竞争",
                "body": "它真正的重点，是重新设计价值曲线，让你不必继续在同一套游戏规则里死拼。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "四步动作框架最关键",
                "body": "消除、减少、增加、创造，能帮助你系统性地重构价值，而不是只做一个小优化。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "很多蓝海来自普惠化",
                "body": "当原本只有少数人买得起、用得起的东西被大幅降低门槛，新的市场空间就可能被打开。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 会让新蓝海更容易出现",
                "body": "有些产品和服务在 AI 出现之前根本做不出来，或者成本太高，现在才第一次成立。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 9/14", "建议下一节：安索夫矩阵：四种增长路径怎么选", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-10.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-09",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson9",
    audioSource: './assets/audio/strategy-ep09-blue-ocean.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep09-blue-ocean.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep09-blue-ocean/slide_01.png",
            "label": "蓝海战略：AI 时代的新蓝海在哪里",
            "caption": "这一节会帮助你系统理解：蓝海战略：AI 时代的新蓝海在哪里"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_03.png",
            "label": "经典框架",
            "caption": "哪些因素可以大幅减少到行业标准以下？ 第三，增加。"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_04.png",
            "label": "关键判断",
            "caption": "只有高净值人群才请得起。 但现在呢？"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "这个产品在AI之前是不可能存在的。 它创造了一个全新的品类。"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_06.png",
            "label": "回到你的企业",
            "caption": "这就是一个新的蓝海，\"AI个性化企业培训\"。 成本比传统培训低很多，效果可能还更好，因为是个性化的。"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_07.png",
            "label": "风险与提醒",
            "caption": "第一，你所在的行业，有没有一群被忽视的客户？ AI能帮你服务他们吗？"
        },
        {
            "file": "strategy-ep09-blue-ocean/slide_08.png",
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
            "end": 3.4600000000000066,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.4600000000000066,
            "end": 5.74,
            "text": "今天开始进入战略增长的话题。"
        },
        {
            "start": 5.74,
            "end": 7.88,
            "text": "第一个主题：蓝海战略。"
        },
        {
            "start": 7.88,
            "end": 14.94,
            "text": "蓝海战略是2005年由W. Chan Kim和Renée Mauborgne提出来的。"
        },
        {
            "start": 14.94,
            "end": 17.72,
            "text": "它的核心思想非常简单但很有力："
        },
        {
            "start": 17.72,
            "end": 20.88,
            "text": "与其在已有的市场里跟竞争对手血拼，"
        },
        {
            "start": 20.88,
            "end": 22.84,
            "text": "不如创造一个全新的、"
        },
        {
            "start": 22.84,
            "end": 24.26,
            "text": "没有竞争的市场空间。"
        },
        {
            "start": 24.26,
            "end": 27.2,
            "text": "已有的市场叫红海，Red Ocean。"
        },
        {
            "start": 27.2,
            "end": 30.94,
            "text": "因为竞争太激烈了，水都被\"血\"染红了。"
        },
        {
            "start": 30.94,
            "end": 33.6,
            "text": "新的市场空间叫蓝海，Blue Ocean。"
        },
        {
            "start": 33.66,
            "end": 36.46,
            "text": "水是蓝的，因为还没有人来过。"
        },
        {
            "start": 36.46,
            "end": 40.1,
            "text": "蓝海战略有一个核心工具叫四步动作框架。"
        },
        {
            "start": 40.1,
            "end": 42.8,
            "text": "面对现有行业，你要问四个问题。"
        },
        {
            "start": 42.8,
            "end": 44.18,
            "text": "第一，消除。"
        },
        {
            "start": 44.18,
            "end": 48.06,
            "text": "行业内大家习以为常但其实客户并不在乎的因素，"
        },
        {
            "start": 48.06,
            "end": 49.82,
            "text": "哪些可以消除？"
        },
        {
            "start": 49.82,
            "end": 51.0,
            "text": "第二，减少。"
        },
        {
            "start": 51.0,
            "end": 54.74,
            "text": "哪些因素可以大幅减少到行业标准以下？"
        },
        {
            "start": 54.74,
            "end": 55.86,
            "text": "第三，增加。"
        },
        {
            "start": 55.86,
            "end": 59.26,
            "text": "哪些因素应该大幅提升到行业标准以上？"
        },
        {
            "start": 59.26,
            "end": 60.56,
            "text": "第四，创造。"
        },
        {
            "start": 60.56,
            "end": 64.48,
            "text": "哪些是行业从来没有提供过的，你可以创造出来？"
        },
        {
            "start": 64.48,
            "end": 66.4,
            "text": "经典案例是太阳马戏团。"
        },
        {
            "start": 66.4,
            "end": 67.82,
            "text": "传统马戏团有什么？"
        },
        {
            "start": 67.82,
            "end": 71.26,
            "text": "动物表演、明星小丑、三个舞台同时演出、低价票。"
        },
        {
            "start": 71.26,
            "end": 73.06,
            "text": "太阳马戏团做了什么？"
        },
        {
            "start": 73.06,
            "end": 74.48,
            "text": "消除了动物表演，"
        },
        {
            "start": 74.48,
            "end": 76.18,
            "text": "减少了喜剧和刺激元素，"
        },
        {
            "start": 76.18,
            "end": 77.84,
            "text": "增加了艺术性和美感，"
        },
        {
            "start": 77.84,
            "end": 80.84,
            "text": "创造了一个接近百老汇音乐剧的高端体验。"
        },
        {
            "start": 80.84,
            "end": 81.66,
            "text": "结果呢？"
        },
        {
            "start": 81.66,
            "end": 83.6,
            "text": "它跳出了传统马戏的红海，"
        },
        {
            "start": 83.6,
            "end": 86.74,
            "text": "创造了一个全新的市场——\"马戏+剧场\"，"
        },
        {
            "start": 86.74,
            "end": 88.74,
            "text": "票价是传统马戏的好几倍，"
        },
        {
            "start": 88.74,
            "end": 90.9,
            "text": "但客户完全不一样了。"
        },
        {
            "start": 90.9,
            "end": 92.9,
            "text": "好，AI时代蓝海在哪里？"
        },
        {
            "start": 92.9,
            "end": 95.74,
            "text": "我认为AI正在创造三类蓝海。"
        },
        {
            "start": 95.74,
            "end": 100.3,
            "text": "第一类蓝海：把以前只有少数人能享受的服务，普惠化。"
        },
        {
            "start": 101.36,
            "end": 105.98,
            "text": "以前请一个私人投资顾问，一年至少要花几万甚至十几万。"
        },
        {
            "start": 105.98,
            "end": 108.2,
            "text": "只有高净值人群才请得起。"
        },
        {
            "start": 108.2,
            "end": 109.08000000000001,
            "text": "但现在呢？"
        },
        {
            "start": 109.08000000000001,
            "end": 111.02,
            "text": "AI驱动的智能投顾，"
        },
        {
            "start": 111.02,
            "end": 114.36,
            "text": "几十块钱一个月就能提供个性化的投资建议。"
        },
        {
            "start": 114.36,
            "end": 115.54,
            "text": "这就是一个蓝海。"
        },
        {
            "start": 115.54,
            "end": 117.6,
            "text": "不是在跟传统投顾竞争，"
        },
        {
            "start": 117.6,
            "end": 121.78,
            "text": "而是服务了一个以前完全没被服务过的庞大人群。"
        },
        {
            "start": 121.78,
            "end": 123.76,
            "text": "类似的例子还有很多。"
        },
        {
            "start": 123.76,
            "end": 128.64,
            "text": "AI心理咨询让心理健康服务触达以前请不起咨询师的人群。"
        },
        {
            "start": 128.64,
            "end": 131.96,
            "text": "AI法律助手让中小企业用得起法律顾问。"
        },
        {
            "start": 131.96,
            "end": 135.24,
            "text": "AI教育让个性化辅导不再是富人的专利。"
        },
        {
            "start": 135.24,
            "end": 137.0,
            "text": "你发现规律了吗？"
        },
        {
            "start": 137.0,
            "end": 139.96,
            "text": "AI让很多高端服务的成本大幅下降。"
        },
        {
            "start": 139.96,
            "end": 144.58,
            "text": "这些服务以前因为成本太高，只能服务金字塔尖的客户。"
        },
        {
            "start": 144.58,
            "end": 146.82,
            "text": "但AI把成本降下来之后，"
        },
        {
            "start": 146.82,
            "end": 149.48,
            "text": "金字塔底部的巨大人群就成了蓝海。"
        },
        {
            "start": 149.48,
            "end": 154.26,
            "text": "第二类蓝海：用AI创造以前不存在的产品或服务。"
        },
        {
            "start": 154.26,
            "end": 156.92,
            "text": "比如说，AI实时翻译耳机。"
        },
        {
            "start": 156.92,
            "end": 159.68,
            "text": "你戴着它跟一个日本人说话，它自动翻译。"
        },
        {
            "start": 159.68,
            "end": 162.48,
            "text": "这个产品在AI之前是不可能存在的。"
        },
        {
            "start": 162.48,
            "end": 164.42,
            "text": "它创造了一个全新的品类。"
        },
        {
            "start": 164.42,
            "end": 167.3,
            "text": "再比如，AI音乐生成工具。"
        },
        {
            "start": 167.3,
            "end": 170.62,
            "text": "以前做背景音乐要请音乐人，或者买版权音乐。"
        },
        {
            "start": 170.62,
            "end": 175.02,
            "text": "现在你描述一个风格和情绪，AI几秒钟就能生成。"
        },
        {
            "start": 175.02,
            "end": 177.86,
            "text": "这催生了全新的\"AI音乐素材\"市场。"
        },
        {
            "start": 177.86,
            "end": 179.22,
            "text": "还有AI数字人。"
        },
        {
            "start": 179.22,
            "end": 183.6,
            "text": "你可以用AI生成一个虚拟形象来做客服、做直播、做教学。"
        },
        {
            "start": 183.6,
            "end": 186.78,
            "text": "数字人这个品类在AI之前几乎不存在。"
        },
        {
            "start": 186.78,
            "end": 190.56,
            "text": "第三类蓝海：重新定义现有行业的价值曲线。"
        },
        {
            "start": 190.56,
            "end": 193.14,
            "text": "就是用蓝海战略的四步动作框架，"
        },
        {
            "start": 193.14,
            "end": 196.0,
            "text": "结合AI的能力，重新设计你的价值主张。"
        },
        {
            "start": 196.0,
            "end": 199.36,
            "text": "比如说，传统的企业培训：线下、集中、"
        },
        {
            "start": 199.36,
            "end": 201.02,
            "text": "标准化课程、价格高。"
        },
        {
            "start": 201.02,
            "end": 202.98000000000002,
            "text": "如果用AI重新设计呢？"
        },
        {
            "start": 202.98000000000002,
            "end": 205.58,
            "text": "消除线下场地和讲师的固定成本。"
        },
        {
            "start": 205.58,
            "end": 207.56,
            "text": "减少标准化的通用内容。"
        },
        {
            "start": 207.56,
            "end": 210.08,
            "text": "增加AI驱动的个性化学习路径。"
        },
        {
            "start": 210.08,
            "end": 212.58,
            "text": "创造实时AI教练陪练的体验。"
        },
        {
            "start": 212.58,
            "end": 216.14,
            "text": "这就是一个新的蓝海——\"AI个性化企业培训\"。"
        },
        {
            "start": 216.14,
            "end": 218.36,
            "text": "成本比传统培训低很多，"
        },
        {
            "start": 218.36,
            "end": 221.54,
            "text": "效果可能还更好，因为是个性化的。"
        },
        {
            "start": 221.54,
            "end": 224.3,
            "text": "其实我们MindsLeap 商学院做的就是这件事情。"
        },
        {
            "start": 224.3,
            "end": 228.52,
            "text": "用AI把MBA级别的商业教育做成个性化、"
        },
        {
            "start": 228.52,
            "end": 230.38,
            "text": "碎片化、人人可及的体验。"
        },
        {
            "start": 230.38,
            "end": 235.3,
            "text": "这就是在传统商学院教育的红海之外，找到的一片蓝海。"
        },
        {
            "start": 235.3,
            "end": 237.66,
            "text": "找蓝海有一个很实用的方法。"
        },
        {
            "start": 237.66,
            "end": 239.54,
            "text": "你可以问自己三个问题。"
        },
        {
            "start": 239.54,
            "end": 243.68,
            "text": "第一，有没有一群人需要某个服务但现在负担不起？"
        },
        {
            "start": 243.68,
            "end": 247.0,
            "text": "AI能不能把成本降到他们负担得起的水平？"
        },
        {
            "start": 247.0,
            "end": 251.36,
            "text": "第二，有没有某个需求以前因为技术限制而无法满足？"
        },
        {
            "start": 251.36,
            "end": 253.28,
            "text": "AI现在能不能满足？"
        },
        {
            "start": 253.28,
            "end": 258.36,
            "text": "第三，有没有一个现有行业的价值曲线可以用AI重新画？"
        },
        {
            "start": 258.36,
            "end": 261.34,
            "text": "消除什么、减少什么、增加什么、创造什么？"
        },
        {
            "start": 261.34,
            "end": 264.18,
            "text": "每一个\"是\"的回答，都可能是一片蓝海。"
        },
        {
            "start": 264.18,
            "end": 266.38,
            "text": "好，今天的思考题。"
        },
        {
            "start": 266.38,
            "end": 270.02,
            "text": "第一，你所在的行业，有没有一群被忽视的客户？"
        },
        {
            "start": 270.02,
            "end": 272.14,
            "text": "AI能帮你服务他们吗？"
        },
        {
            "start": 272.14,
            "end": 272.58,
            "text": "第二，"
        },
        {
            "start": 272.72,
            "end": 275.32,
            "text": "用四步动作框架分析你自己的业务："
        },
        {
            "start": 275.32,
            "end": 278.12,
            "text": "你可以消除什么、减少什么、增加什么、"
        },
        {
            "start": 278.32,
            "end": 278.92,
            "text": "创造什么？"
        },
        {
            "start": 278.92,
            "end": 281.34,
            "text": "第三，如果你今天重新创业，"
        },
        {
            "start": 281.34,
            "end": 284.66,
            "text": "利用AI的能力，你会在哪个领域找蓝海？"
        },
        {
            "start": 284.66,
            "end": 285.98,
            "text": "总结一下。"
        },
        {
            "start": 285.98,
            "end": 286.34,
            "text": "第一，"
        },
        {
            "start": 286.34,
            "end": 289.82,
            "text": "蓝海战略的核心是创造没有竞争的市场空间，"
        },
        {
            "start": 289.82,
            "end": 291.7,
            "text": "而不是在红海里血拼。"
        },
        {
            "start": 291.7,
            "end": 294.6,
            "text": "第二，AI正在创造三类蓝海："
        },
        {
            "start": 294.6,
            "end": 297.28,
            "text": "高端服务普惠化、全新产品品类、"
        },
        {
            "start": 297.28,
            "end": 299.32,
            "text": "现有行业价值曲线重塑。"
        },
        {
            "start": 299.32,
            "end": 303.14,
            "text": "第三，四步动作框架在AI时代依然好用："
        },
        {
            "start": 303.14,
            "end": 305.46,
            "text": "消除、减少、增加、创造。"
        },
        {
            "start": 305.46,
            "end": 306.1,
            "text": "第四，"
        },
        {
            "start": 306.24,
            "end": 309.3,
            "text": "最大的蓝海机会往往在于用AI把以前少"
        },
        {
            "start": 309.3,
            "end": 310.71999999999997,
            "text": "数人才能享受的服务，"
        },
        {
            "start": 310.71999999999997,
            "end": 312.08,
            "text": "变成人人可及。"
        },
        {
            "start": 312.08,
            "end": 316.22,
            "text": "下一期我们讲安索夫矩阵，四种增长路径怎么选。"
        },
        {
            "start": 316.22,
            "end": 319.64,
            "text": "你的公司应该做深现有市场还是开拓新市场？"
        },
        {
            "start": 319.64,
            "end": 322.38,
            "text": "做深现有产品还是开发新产品？"
        },
        {
            "start": 322.38,
            "end": 324.32,
            "text": "AI时代这四条路怎么走？"
        },
        {
            "start": 324.32,
            "end": 325.34,
            "text": "好，今天就到这里。"
        },
        {
            "start": 325.34,
            "end": 326.62,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.46,
        "index": 0
    },
    {
        "start": 3.46,
        "end": 51.0,
        "index": 1
    },
    {
        "start": 51.0,
        "end": 105.98,
        "index": 2
    },
    {
        "start": 105.98,
        "end": 159.68,
        "index": 3
    },
    {
        "start": 159.68,
        "end": 212.58,
        "index": 4
    },
    {
        "start": 212.58,
        "end": 266.38,
        "index": 5
    },
    {
        "start": 266.38,
        "end": 284.66,
        "index": 6
    },
    {
        "start": 284.66,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-10.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "把创造无竞争市场空间的经典框架，放到 AI 新机会里重新理解。"
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
      submitHref: "./lesson-strategy-10.html?entry={entry}",
      secondaryHref: "./lesson-strategy-10.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-09",
      coachSource: "./ai-coach.html?source=lesson-strategy-09"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于蓝海战略：AI 时代的新蓝海在哪里的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "蓝海战略：AI 时代的新蓝海在哪里", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-10.html" + '?entry=' + entryMode;
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
