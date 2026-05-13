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

  window.MindsLeapConfigs.lessons.strategy13 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第13课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第13课：案例：字节跳动的战略飞轮",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep13-case-bytedance/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：案例：字节跳动的战略飞轮",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-13",
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
        secondaryHref: "./lesson-strategy-14.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 12,
                "title": "案例：Tesla 的 AI 战略棋局",
                "body": "用前面学过的战略工具，系统拆解 Tesla 的战略选择与 AI 布局。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：字节跳动的战略飞轮",
                "body": "通过字节案例理解平台、算法、全球化与组织能力如何相互支撑。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 14,
                "title": "你的战略工作坊：用 AI 帮你做战略分析",
                "body": "把整个模块整合起来，沉淀成真正可带回企业使用的一页纸战略。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-14.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "通过字节案例理解平台、算法、全球化与组织能力如何相互支撑。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "字节的核心不是内容，而是推荐系统",
                "body": "真正让字节与传统内容平台拉开差距的，不是内容本身，而是算法分发能力。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "行为数据驱动推荐飞轮",
                "body": "用户每一次停留、点赞、划走，都会反馈回系统，进一步提升推荐准确度。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "推荐越准，商业化越强",
                "body": "更高的停留和更好的匹配，不只提升留存，也直接强化广告效果与平台变现能力。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "这是典型的数据网络效应",
                "body": "更多用户带来更多数据，更多数据让算法更强，算法更强又吸引更多用户，这就是字节的战略飞轮。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 13/14", "建议下一节：你的战略工作坊：用 AI 帮你做战略分析", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-14.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-13",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson13",
    audioSource: './assets/audio/strategy-ep13-case-bytedance.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep13-case-bytedance.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep13-case-bytedance/slide_01.png",
            "label": "案例：字节跳动的战略飞轮",
            "caption": "这一节会帮助你系统理解：案例：字节跳动的战略飞轮"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_03.png",
            "label": "经典框架",
            "caption": "它的推荐系统根据每个用户的行为数据，你点了什么、看了多久、点了赞还是划走了，来决定给你推什么内容。 这意味着什么？"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_04.png",
            "label": "关键判断",
            "caption": "字节的飞轮是：更多用户 → 更多行为数据 → 推荐算法更准 → 用户体验更好 → 用户留存更高、使用时长更长 → 产生更多数据。 这个飞轮转了十几年了。"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "因为字节的广告效果确实好，精准推荐意味着精准广告投放，所以广告主愿意付较高的价格。 字节跳动还有一个非常独特的战略特征：它的增长模式是\"复制中台\"。"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_06.png",
            "label": "回到你的企业",
            "caption": "如果你能把你的AI能力建成一个可复用的中台，你就能以很低的边际成本不断衍生新产品。 每个新产品共享同一套AI引擎、同一份用户数据、同一套运营工具。"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_07.png",
            "label": "风险与提醒",
            "caption": "AI驱动的战略可以让你快速崛起，但AI本身也带来新的风险，监管风险、伦理风险、社会争议。 我们在法律与合规模块会深入讲这些。"
        },
        {
            "file": "strategy-ep13-case-bytedance/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.18,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.18,
            "end": 3.26,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.26,
            "end": 5.14,
            "text": "今天的案例是字节跳动。"
        },
        {
            "start": 5.14,
            "end": 7.28,
            "text": "一家2012年成立的公司，"
        },
        {
            "start": 7.28,
            "end": 11.02,
            "text": "到今天已经是全球最有价值的未上市公司之一。"
        },
        {
            "start": 11.02,
            "end": 17.06,
            "text": "旗下有今日头条、抖音、TikTok、飞书、番茄小说，等等吧。"
        },
        {
            "start": 17.06,
            "end": 19.52,
            "text": "字节跳动的战略跟Tesla完全不同。"
        },
        {
            "start": 19.52,
            "end": 23.38,
            "text": "Tesla是硬件+AI，字节跳动是纯软件+AI。"
        },
        {
            "start": 23.38,
            "end": 26.96,
            "text": "但两者有一个共同点：AI不是附加功能，"
        },
        {
            "start": 26.96,
            "end": 29.06,
            "text": "而是整个公司的核心引擎。"
        },
        {
            "start": 29.06,
            "end": 31.4,
            "text": "字节跳动的核心竞争力是什么？"
        },
        {
            "start": 31.4,
            "end": 33.48,
            "text": "一句话概括：推荐算法。"
        },
        {
            "start": 33.48,
            "end": 36.32,
            "text": "传统的内容平台是编辑驱动的。"
        },
        {
            "start": 36.32,
            "end": 39.7,
            "text": "编辑决定什么内容放在首页，什么内容推荐给用户。"
        },
        {
            "start": 39.7,
            "end": 42.16666666666667,
            "text": "这种模式有一个天然的瓶颈："
        },
        {
            "start": 42.16666666666667,
            "end": 45.76,
            "text": "编辑能审核和推荐的内容量是有限的。"
        },
        {
            "start": 45.76,
            "end": 49.36,
            "text": "字节跳动做了一件革命性的事情：用算法取代编辑。"
        },
        {
            "start": 49.36,
            "end": 53.46,
            "text": "它的推荐系统根据每个用户的行为数据——你点了什么、"
        },
        {
            "start": 53.68,
            "end": 54.32,
            "text": "看了多久、"
        },
        {
            "start": 54.32,
            "end": 57.68,
            "text": "点了赞还是划走了——来决定给你推什么内容。"
        },
        {
            "start": 58.68,
            "end": 59.96,
            "text": "这意味着什么？"
        },
        {
            "start": 59.96,
            "end": 62.02,
            "text": "第一，个性化到极致。"
        },
        {
            "start": 62.02,
            "end": 66.4,
            "text": "你打开抖音看到的内容，跟你旁边的人看到的完全不同。"
        },
        {
            "start": 66.4,
            "end": 68.36,
            "text": "因为算法了解你的偏好。"
        },
        {
            "start": 68.36,
            "end": 70.98,
            "text": "第二，内容发现效率极高。"
        },
        {
            "start": 70.98,
            "end": 72.6,
            "text": "在传统平台上，"
        },
        {
            "start": 72.6,
            "end": 75.24,
            "text": "一个好内容如果没有被编辑发现，"
        },
        {
            "start": 75.24,
            "end": 76.98,
            "text": "可能永远埋没了。"
        },
        {
            "start": 76.98,
            "end": 78.86,
            "text": "但在字节的平台上，"
        },
        {
            "start": 78.86,
            "end": 81.8,
            "text": "算法会给每个新内容一个初始的曝光，"
        },
        {
            "start": 81.8,
            "end": 85.84,
            "text": "如果数据反馈好就继续推，不好就停。"
        },
        {
            "start": 85.84,
            "end": 88.0,
            "text": "所以好内容总能被发现。"
        },
        {
            "start": 88.0,
            "end": 90.86,
            "text": "第三，创作者生态被激活了。"
        },
        {
            "start": 90.86,
            "end": 93.54,
            "text": "因为好内容一定能被算法发现和推荐，"
        },
        {
            "start": 93.54,
            "end": 96.02,
            "text": "创作者就有了持续创作的动力。"
        },
        {
            "start": 96.02,
            "end": 100.44,
            "text": "不像以前，你的内容好不好取决于编辑是不是认识你。"
        },
        {
            "start": 100.44,
            "end": 103.7,
            "text": "用我们之前讲的战略工具来分析字节跳动。"
        },
        {
            "start": 103.7,
            "end": 105.2,
            "text": "首先，数据飞轮。"
        },
        {
            "start": 105.2,
            "end": 106.64,
            "text": "字节的飞轮是："
        },
        {
            "start": 106.64,
            "end": 110.08,
            "text": "更多用户 → 更多行为数据 → 推荐算法更准"
        },
        {
            "start": 110.08,
            "end": 112.96,
            "text": "→ 用户体验更好 → 用户留存更高、"
        },
        {
            "start": 112.96,
            "end": 115.74,
            "text": "使用时长更长 → 产生更多数据。"
        },
        {
            "start": 115.74,
            "end": 117.92,
            "text": "这个飞轮转了十几年了。"
        },
        {
            "start": 117.92,
            "end": 121.42,
            "text": "字节积累的用户行为数据量是天文数字。"
        },
        {
            "start": 121.42,
            "end": 123.75999999999999,
            "text": "这个数据资产是它最深的壁垒。"
        },
        {
            "start": 123.76,
            "end": 125.56,
            "text": "你可以抄它的产品形态，"
        },
        {
            "start": 125.56,
            "end": 129.18,
            "text": "但你抄不走它十几年积累的数据和算法迭代。"
        },
        {
            "start": 129.18,
            "end": 131.7,
            "text": "其次，用五力模型来看。"
        },
        {
            "start": 131.7,
            "end": 133.78,
            "text": "新进入者的威胁：很低。"
        },
        {
            "start": 133.78,
            "end": 136.4,
            "text": "因为算法和数据壁垒太深了。"
        },
        {
            "start": 136.4,
            "end": 140.56,
            "text": "你做一个短视频App不难，但你的推荐做不到TikTok那么准。"
        },
        {
            "start": 140.56,
            "end": 142.92,
            "text": "替代品的威胁：存在但有限。"
        },
        {
            "start": 142.92,
            "end": 145.32,
            "text": "YouTube、Instagram Reels是替代品，"
        },
        {
            "start": 145.32,
            "end": 148.64,
            "text": "但TikTok的沉浸式推荐体验目前还没有被超越。"
        },
        {
            "start": 150.04,
            "end": 152.3,
            "text": "供应商（创作者）的议价能力："
        },
        {
            "start": 152.3,
            "end": 154.62,
            "text": "个体创作者议价能力很低，"
        },
        {
            "start": 154.62,
            "end": 157.06,
            "text": "因为平台上有海量创作者。"
        },
        {
            "start": 157.06,
            "end": 160.08,
            "text": "但头部创作者有一定议价能力。"
        },
        {
            "start": 160.08,
            "end": 162.54,
            "text": "买方（广告主）的议价能力：中等。"
        },
        {
            "start": 162.54,
            "end": 165.66,
            "text": "因为字节的广告效果确实好——精准推荐"
        },
        {
            "start": 165.66,
            "end": 169.74,
            "text": "意味着精准广告投放——所以广告主愿意付较高的价格。"
        },
        {
            "start": 169.74,
            "end": 172.76,
            "text": "字节跳动还有一个非常独特的战略特征："
        },
        {
            "start": 172.76,
            "end": 174.94,
            "text": "它的增长模式是\"复制中台\"。"
        },
        {
            "start": 174.94,
            "end": 176.16,
            "text": "什么意思？"
        },
        {
            "start": 176.16,
            "end": 179.3,
            "text": "字节建了一个强大的技术和算法中台。"
        },
        {
            "start": 179.3,
            "end": 182.2,
            "text": "这个中台包括推荐算法、广告系统、"
        },
        {
            "start": 182.2,
            "end": 185.42,
            "text": "数据分析、AB测试框架、增长工具。"
        },
        {
            "start": 185.42,
            "end": 187.82,
            "text": "当它要做一个新产品的时候，"
        },
        {
            "start": 187.82,
            "end": 189.16,
            "text": "不是从零开始，"
        },
        {
            "start": 189.16,
            "end": 193.02,
            "text": "而是把中台的能力快速复制到新产品上。"
        },
        {
            "start": 193.02,
            "end": 194.92,
            "text": "今日头条是第一个产品。"
        },
        {
            "start": 194.92,
            "end": 198.44,
            "text": "验证了推荐算法+信息流这个模式之后，"
        },
        {
            "start": 198.44,
            "end": 201.96,
            "text": "它把同样的算法能力复制到短视频——抖音诞生了。"
        },
        {
            "start": 201.96,
            "end": 204.16,
            "text": "复制到教育——大力教育。"
        },
        {
            "start": 204.16,
            "end": 206.2,
            "text": "复制到电商——抖音商城。"
        },
        {
            "start": 206.2,
            "end": 208.04,
            "text": "复制到企业服务——飞书。"
        },
        {
            "start": 208.04,
            "end": 211.0,
            "text": "这就是安索夫矩阵里面的产品开发。"
        },
        {
            "start": 211.0,
            "end": 214.64,
            "text": "字节用的是同一群用户和同一套算法能力，"
        },
        {
            "start": 214.64,
            "end": 216.06,
            "text": "不断开发新产品。"
        },
        {
            "start": 216.06,
            "end": 219.38,
            "text": "每一个新产品的启动成本都比竞争对手低，"
        },
        {
            "start": 219.38,
            "end": 221.32,
            "text": "因为中台已经在了。"
        },
        {
            "start": 221.32,
            "end": 222.38,
            "text": "这给我们什么启发？"
        },
        {
            "start": 222.38,
            "end": 226.1,
            "text": "如果你能把你的AI能力建成一个可复用的中台，"
        },
        {
            "start": 226.1,
            "end": 229.4,
            "text": "你就能以很低的边际成本不断衍生新产品。"
        },
        {
            "start": 229.4,
            "end": 232.04000000000002,
            "text": "每个新产品共享同一套AI引擎、"
        },
        {
            "start": 232.04000000000002,
            "end": 235.0,
            "text": "同一份用户数据、同一套运营工具。"
        },
        {
            "start": 235.0,
            "end": 237.6,
            "text": "这就是AI驱动的产品扩张策略。"
        },
        {
            "start": 237.6,
            "end": 239.98,
            "text": "当然，字节跳动也面临挑战。"
        },
        {
            "start": 239.98,
            "end": 242.16,
            "text": "第一，算法推荐的社会争议。"
        },
        {
            "start": 242.16,
            "end": 245.27999999999997,
            "text": "推荐算法被批评为制造\"信息茧房\"，"
        },
        {
            "start": 245.28,
            "end": 247.64,
            "text": "让用户只看到自己想看的，"
        },
        {
            "start": 247.64,
            "end": 248.78,
            "text": "不利于多元视角。"
        },
        {
            "start": 248.78,
            "end": 252.06,
            "text": "还有算法对青少年的影响也一直被讨论。"
        },
        {
            "start": 252.6,
            "end": 254.62,
            "text": "第二，全球化的政治风险。"
        },
        {
            "start": 254.62,
            "end": 258.26,
            "text": "TikTok在美国和一些国家面临监管和安全审查。"
        },
        {
            "start": 258.26,
            "end": 261.12,
            "text": "这不是商业问题，是地缘政治问题。"
        },
        {
            "start": 261.62,
            "end": 263.26,
            "text": "第三，增长天花板。"
        },
        {
            "start": 263.26,
            "end": 267.64,
            "text": "短视频用户渗透率已经很高了，用户时长也接近天花板。"
        },
        {
            "start": 267.64,
            "end": 269.82,
            "text": "下一个增长引擎在哪里？"
        },
        {
            "start": 269.82,
            "end": 273.92,
            "text": "电商可能是一个方向，但电商的竞争格局完全不同。"
        },
        {
            "start": 274.94,
            "end": 276.76,
            "text": "这些挑战也给我们启示。"
        },
        {
            "start": 276.76,
            "end": 279.64,
            "text": "AI驱动的战略可以让你快速崛起，"
        },
        {
            "start": 279.64,
            "end": 283.34,
            "text": "但AI本身也带来新的风险——监管风险、"
        },
        {
            "start": 283.34,
            "end": 285.1,
            "text": "伦理风险、社会争议。"
        },
        {
            "start": 285.1,
            "end": 288.58,
            "text": "我们在法律与合规模块会深入讲这些。"
        },
        {
            "start": 288.58,
            "end": 290.48,
            "text": "好，今天的思考题。"
        },
        {
            "start": 290.48,
            "end": 293.24,
            "text": "第一，字节跳动的\"复制中台\"战略，"
        },
        {
            "start": 293.24,
            "end": 296.64,
            "text": "你的公司有没有可以复用的AI核心能力？"
        },
        {
            "start": 296.64,
            "end": 301.36,
            "text": "第二，你的业务有没有可能用推荐算法来提升用户体验？"
        },
        {
            "start": 301.36,
            "end": 304.22,
            "text": "不一定是内容推荐，也可以是产品推荐、"
        },
        {
            "start": 304.22,
            "end": 305.76,
            "text": "服务推荐、知识推荐。"
        },
        {
            "start": 306.32000000000005,
            "end": 309.96,
            "text": "第三，字节面临的算法伦理争议，对你有什么警示？"
        },
        {
            "start": 309.96,
            "end": 311.96,
            "text": "如果你用AI做个性化，"
        },
        {
            "start": 311.96,
            "end": 314.28,
            "text": "你会怎么处理公平性和透明度的问题？"
        },
        {
            "start": 314.28,
            "end": 315.52,
            "text": "总结一下。"
        },
        {
            "start": 315.52,
            "end": 318.34,
            "text": "第一，字节跳动的核心竞争力是推荐算法。"
        },
        {
            "start": 318.34,
            "end": 322.12,
            "text": "算法取代编辑，实现了极致的内容个性化。"
        },
        {
            "start": 322.12,
            "end": 325.28,
            "text": "第二，字节的数据飞轮跟Tesla一样强大："
        },
        {
            "start": 325.28,
            "end": 328.14,
            "text": "更多用户 → 更多数据 → 更好的算法 →"
        },
        {
            "start": 328.14,
            "end": 329.7,
            "text": "更好的体验 → 更多用户。"
        },
        {
            "start": 329.7,
            "end": 333.18,
            "text": "第三，\"复制中台\"是字节的增长引擎。"
        },
        {
            "start": 333.18,
            "end": 336.9200000000001,
            "text": "一套算法能力支撑多个产品线，边际成本极低。"
        },
        {
            "start": 336.9200000000001,
            "end": 340.28,
            "text": "第四，AI驱动的战略带来快速增长，"
        },
        {
            "start": 340.28,
            "end": 342.78,
            "text": "但也带来新风险：监管、伦理、"
        },
        {
            "start": 343.02,
            "end": 343.54,
            "text": "社会争议。"
        },
        {
            "start": 343.54,
            "end": 347.1,
            "text": "下一期是模块一的最后一期：战略工作坊。"
        },
        {
            "start": 347.1,
            "end": 350.36,
            "text": "我会手把手教你怎么用AI工具来做你自"
        },
        {
            "start": 350.36,
            "end": 352.72,
            "text": "己公司的战略分析——五力分析、"
        },
        {
            "start": 352.72,
            "end": 357.08,
            "text": "SWOT、竞品研究，全部用AI辅助完成。"
        },
        {
            "start": 357.08,
            "end": 359.22,
            "text": "非常实操，不要错过。"
        },
        {
            "start": 359.22,
            "end": 360.32,
            "text": "好，今天就到这里。"
        },
        {
            "start": 360.32,
            "end": 362.02,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.26,
        "index": 0
    },
    {
        "start": 3.26,
        "end": 49.36,
        "index": 1
    },
    {
        "start": 49.36,
        "end": 105.2,
        "index": 2
    },
    {
        "start": 105.2,
        "end": 162.54,
        "index": 3
    },
    {
        "start": 162.54,
        "end": 222.38,
        "index": 4
    },
    {
        "start": 222.38,
        "end": 276.76,
        "index": 5
    },
    {
        "start": 276.76,
        "end": 314.28,
        "index": 6
    },
    {
        "start": 314.28,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-14.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "通过字节案例理解平台、算法、全球化与组织能力如何相互支撑。"
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
      submitHref: "./lesson-strategy-14.html?entry={entry}",
      secondaryHref: "./lesson-strategy-14.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-13",
      coachSource: "./ai-coach.html?source=lesson-strategy-13"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于案例：字节跳动的战略飞轮的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：字节跳动的战略飞轮", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-14.html" + '?entry=' + entryMode;
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
