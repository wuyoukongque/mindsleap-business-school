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

  window.MindsLeapConfigs.lessons.strategy12 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第12课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第12课：案例：Tesla 的 AI 战略棋局",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep12-case-tesla/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：案例：Tesla 的 AI 战略棋局",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-12",
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
        secondaryHref: "./lesson-strategy-13.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 11,
                "title": "并购与战略联盟：AI 时代的买 vs 建 vs 合作",
                "body": "面对新能力需求时，判断自己做、买下来还是合作。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "案例：Tesla 的 AI 战略棋局",
                "body": "用前面学过的战略工具，系统拆解 Tesla 的战略选择与 AI 布局。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 13,
                "title": "案例：字节跳动的战略飞轮",
                "body": "通过字节案例理解平台、算法、全球化与组织能力如何相互支撑。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-13.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "用前面学过的战略工具，系统拆解 Tesla 的战略选择与 AI 布局。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "Tesla 的关键是纵向一体化",
                "body": "它不是简单造车，而是在电池、软件、制造、充电网络等关键环节形成系统性控制力。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "数据飞轮是它的长期护城河",
                "body": "车辆规模带来真实世界数据，数据反过来训练自动驾驶能力，这比单点产品优势更重要。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "收入结构也在不断升级",
                "body": "Tesla 不只卖硬件，还持续扩展到软件订阅、充电网络、能源业务和碳积分收入。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "这不是单点创新，而是战略棋局",
                "body": "Tesla 的价值在于多个环节彼此支撑，形成了更难被复制的整体战略系统。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 12/14", "建议下一节：案例：字节跳动的战略飞轮", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-13.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-12",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson12",
    audioSource: './assets/audio/strategy-ep12-case-tesla.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep12-case-tesla.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep12-case-tesla/slide_01.png",
            "label": "案例：Tesla 的 AI 战略棋局",
            "caption": "这一节会帮助你系统理解：案例：Tesla 的 AI 战略棋局"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_03.png",
            "label": "经典框架",
            "caption": "但Tesla选择了把关键环节全部自己做。 为什么？"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_04.png",
            "label": "关键判断",
            "caption": "这些数据用来训练Tesla的自动驾驶模型FSD。 模型改进后，通过OTA推送给所有车辆。"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "但Tesla还有：FSD软件订阅费、充电网络收入、能源业务（太阳能和储能）、碳积分交易收入。 注意FSD软件订阅这一项。"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_06.png",
            "label": "回到你的企业",
            "caption": "AI优化了生产线效率降低了成本，同时AI驱动的自动驾驶和智能体验创造了差异化。 一边降本，一边增值。"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_07.png",
            "label": "风险与提醒",
            "caption": "你把这三个平台放在一起看：电动车 + 机器人 + 能源。 核心是什么？"
        },
        {
            "file": "strategy-ep12-case-tesla/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.34,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.34,
            "end": 3.74,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.74,
            "end": 6.22,
            "text": "今天开始我们进入战略实战案例。"
        },
        {
            "start": 6.22,
            "end": 7.58,
            "text": "第一个案例就是Tesla。"
        },
        {
            "start": 7.58,
            "end": 11.36,
            "text": "我们用前面学的所有战略工具来拆解Tesla，"
        },
        {
            "start": 11.36,
            "end": 14.22,
            "text": "看看Elon Musk是怎么下这盘棋的。"
        },
        {
            "start": 14.22,
            "end": 17.48,
            "text": "先说一句：不管你喜不喜欢Musk这个人，"
        },
        {
            "start": 17.48,
            "end": 19.1,
            "text": "从战略角度来说，"
        },
        {
            "start": 19.1,
            "end": 22.38,
            "text": "Tesla是过去二十年最值得研究的案例之一。"
        },
        {
            "start": 22.38,
            "end": 25.72,
            "text": "我们先用波特的视角来看Tesla的战略定位。"
        },
        {
            "start": 25.72,
            "end": 27.6,
            "text": "Tesla的战略是什么？"
        },
        {
            "start": 27.6,
            "end": 30.0,
            "text": "表面上看，它是一家电动车公司。"
        },
        {
            "start": 30.0,
            "end": 32.48,
            "text": "但如果你理解了前面几期的内容，"
        },
        {
            "start": 32.48,
            "end": 34.84,
            "text": "你就知道这个理解太浅了。"
        },
        {
            "start": 34.84,
            "end": 36.72,
            "text": "Tesla的战略应该这么描述："
        },
        {
            "start": 36.72,
            "end": 40.04,
            "text": "用软件和AI能力重新定义汽车行业，"
        },
        {
            "start": 40.04,
            "end": 43.64,
            "text": "建立一个从能源到出行到机器人的科技生态。"
        },
        {
            "start": 43.64,
            "end": 46.22,
            "text": "这里面有几个关键的战略取舍。"
        },
        {
            "start": 46.22,
            "end": 48.66,
            "text": "第一，Tesla选择了垂直整合。"
        },
        {
            "start": 48.66,
            "end": 50.96,
            "text": "它自己做电池，自己做芯片，"
        },
        {
            "start": 50.96,
            "end": 53.2,
            "text": "自己做充电网络，自己做保险。"
        },
        {
            "start": 53.2,
            "end": 57.08,
            "text": "传统车企是高度分工的，你造车我做零件。"
        },
        {
            "start": 57.08,
            "end": 60.32,
            "text": "但Tesla选择了把关键环节全部自己做。"
        },
        {
            "start": 60.32,
            "end": 61.0,
            "text": "为什么？"
        },
        {
            "start": 61.22,
            "end": 64.32,
            "text": "因为在AI时代，数据的打通是核心。"
        },
        {
            "start": 64.32,
            "end": 67.24,
            "text": "如果电池数据在一家供应商那里，"
        },
        {
            "start": 67.24,
            "end": 69.0,
            "text": "驾驶数据在另一家那里，"
        },
        {
            "start": 69.0,
            "end": 70.72,
            "text": "你就没办法做整合优化。"
        },
        {
            "start": 70.72,
            "end": 75.22,
            "text": "只有全链条都在自己手里，AI才能发挥最大威力。"
        },
        {
            "start": 75.22,
            "end": 77.88,
            "text": "第二，Tesla选择了\"软件定义汽车\"。"
        },
        {
            "start": 77.88,
            "end": 81.64,
            "text": "传统车企卖了一辆车，这辆车的性能就固定了。"
        },
        {
            "start": 81.64,
            "end": 84.62,
            "text": "但Tesla的车卖出去之后还在不断升级。"
        },
        {
            "start": 84.62,
            "end": 87.94,
            "text": "OTA空中升级，定期推送新功能。"
        },
        {
            "start": 87.94,
            "end": 91.88,
            "text": "你去年买的车，今年的加速性能可能比去年更好了。"
        },
        {
            "start": 91.88,
            "end": 93.08,
            "text": "这意味着什么？"
        },
        {
            "start": 93.08,
            "end": 96.04,
            "text": "产品的价值不是在生产线上决定的，"
        },
        {
            "start": 96.04,
            "end": 100.0,
            "text": "而是在软件和AI团队的持续迭代中决定的。"
        },
        {
            "start": 100.0,
            "end": 103.7,
            "text": "好，现在来看Tesla最核心的AI战略资产：数据飞轮。"
        },
        {
            "start": 103.7,
            "end": 106.36,
            "text": "前面我们讲数据飞轮讲了好几次。"
        },
        {
            "start": 106.36,
            "end": 109.54,
            "text": "Tesla可能是全球最好的数据飞轮案例。"
        },
        {
            "start": 109.54,
            "end": 113.4,
            "text": "截至2026年，全球有几百万辆Tesla在路上跑。"
        },
        {
            "start": 113.4,
            "end": 117.7,
            "text": "每辆车都有多个摄像头、传感器，不断收集驾驶数据。"
        },
        {
            "start": 117.7,
            "end": 121.52,
            "text": "这些数据用来训练Tesla的自动驾驶模型FSD。"
        },
        {
            "start": 121.52,
            "end": 125.02,
            "text": "模型改进后，通过OTA推送给所有车辆。"
        },
        {
            "start": 125.02,
            "end": 126.78,
            "text": "这个飞轮有多恐怖？"
        },
        {
            "start": 126.78,
            "end": 131.46,
            "text": "传统车企要测试自动驾驶，需要专门的测试车队跑路测。"
        },
        {
            "start": 131.46,
            "end": 133.52,
            "text": "一年可能跑几百万公里。"
        },
        {
            "start": 133.52,
            "end": 137.85999999999999,
            "text": "但Tesla的几百万辆车每天都在帮它\"免费\"跑路测。"
        },
        {
            "start": 137.85999999999999,
            "end": 142.22,
            "text": "一年积累的驾驶数据可能是传统车企的几百倍甚至几千倍。"
        },
        {
            "start": 142.22,
            "end": 145.88000000000002,
            "text": "数据越多 → 模型越好 → 自动驾驶越安全 →"
        },
        {
            "start": 145.88000000000002,
            "end": 148.12,
            "text": "更多人买Tesla → 更多数据。"
        },
        {
            "start": 148.12,
            "end": 150.64,
            "text": "这就是为什么很多行业分析师说，"
        },
        {
            "start": 150.64,
            "end": 153.06,
            "text": "Tesla真正的壁垒不是电池技术，"
        },
        {
            "start": 153.06,
            "end": 155.54,
            "text": "不是制造能力，而是数据。"
        },
        {
            "start": 155.54,
            "end": 157.46000000000004,
            "text": "因为数据是时间的函数，"
        },
        {
            "start": 157.46000000000004,
            "end": 161.3,
            "text": "你不能花钱买到几百万辆车跑了几年的驾驶数据。"
        },
        {
            "start": 161.3,
            "end": 162.96,
            "text": "你只能自己慢慢积累。"
        },
        {
            "start": 162.96,
            "end": 168.06,
            "text": "用商业模式画布来看Tesla，你会发现一些很有意思的地方。"
        },
        {
            "start": 168.06,
            "end": 170.98,
            "text": "传统车企的收入来源主要是卖车。"
        },
        {
            "start": 170.98,
            "end": 173.63,
            "text": "但Tesla的收入来源更多元。"
        },
        {
            "start": 173.63,
            "end": 175.6,
            "text": "卖车——这是基本的。"
        },
        {
            "start": 175.6,
            "end": 178.42,
            "text": "但Tesla还有：FSD软件订阅费、"
        },
        {
            "start": 178.42,
            "end": 179.66,
            "text": "充电网络收入、"
        },
        {
            "start": 179.66,
            "end": 181.92,
            "text": "能源业务（太阳能和储能）、"
        },
        {
            "start": 181.92,
            "end": 183.46,
            "text": "碳积分交易收入。"
        },
        {
            "start": 183.92,
            "end": 186.2,
            "text": "注意FSD软件订阅这一项。"
        },
        {
            "start": 186.2,
            "end": 188.78,
            "text": "传统车企的利润主要来自硬件。"
        },
        {
            "start": 188.78,
            "end": 192.84,
            "text": "但Tesla正在把一部分利润从硬件转移到软件和服务。"
        },
        {
            "start": 192.84,
            "end": 195.92,
            "text": "车可能卖得不贵，但你想要自动驾驶？"
        },
        {
            "start": 195.92,
            "end": 197.06,
            "text": "每月付费。"
        },
        {
            "start": 197.56,
            "end": 198.6,
            "text": "想要更快的加速？"
        },
        {
            "start": 199.1,
            "end": 199.7,
            "text": "付费解锁。"
        },
        {
            "start": 199.7,
            "end": 202.9,
            "text": "这就是我们之前讲的\"从卖产品到卖智能\"。"
        },
        {
            "start": 202.9,
            "end": 206.32,
            "text": "车是硬件载体，AI是持续变现的引擎。"
        },
        {
            "start": 206.32,
            "end": 208.6,
            "text": "从竞争优势的角度看Tesla。"
        },
        {
            "start": 208.6,
            "end": 210.92,
            "text": "它是成本领先还是差异化？"
        },
        {
            "start": 210.92,
            "end": 212.24,
            "text": "其实两者都有，"
        },
        {
            "start": 212.24,
            "end": 214.64,
            "text": "它可能就是我们第九期讲的"
        },
        {
            "start": 214.64,
            "end": 217.78,
            "text": "那种AI让\"既要又要\"成为可能的案例。"
        },
        {
            "start": 217.78,
            "end": 221.98,
            "text": "成本方面：Tesla的垂直整合和超级工厂生产效率极高。"
        },
        {
            "start": 221.98,
            "end": 224.66,
            "text": "它的单车生产成本持续在下降。"
        },
        {
            "start": 224.66,
            "end": 227.7,
            "text": "差异化方面：自动驾驶、OTA升级、"
        },
        {
            "start": 227.7,
            "end": 230.66,
            "text": "极简设计、直销模式、超级充电网络。"
        },
        {
            "start": 230.66,
            "end": 234.02,
            "text": "这些都是传统车企短期内很难复制的。"
        },
        {
            "start": 234.02,
            "end": 236.38,
            "text": "而这两者是AI赋能的。"
        },
        {
            "start": 236.38,
            "end": 238.92,
            "text": "AI优化了生产线效率降低了成本，"
        },
        {
            "start": 238.92,
            "end": 243.34,
            "text": "同时AI驱动的自动驾驶和智能体验创造了差异化。"
        },
        {
            "start": 243.34,
            "end": 245.04,
            "text": "一边降本，一边增值。"
        },
        {
            "start": 245.04,
            "end": 247.76,
            "text": "最后讲Tesla更大的战略格局。"
        },
        {
            "start": 247.76,
            "end": 250.52,
            "text": "很多人把Tesla理解为一家车企。"
        },
        {
            "start": 250.52,
            "end": 252.56,
            "text": "但如果你看Musk的布局，"
        },
        {
            "start": 252.56,
            "end": 254.74,
            "text": "Tesla更像是一个AI公司，"
        },
        {
            "start": 254.74,
            "end": 257.7,
            "text": "车只是它第一个落地的硬件平台。"
        },
        {
            "start": 258.16,
            "end": 260.66,
            "text": "第二个平台是Optimus机器人。"
        },
        {
            "start": 260.66,
            "end": 264.3,
            "text": "Tesla在2022年发布了人形机器人的原型。"
        },
        {
            "start": 264.3,
            "end": 267.46,
            "text": "你可能会想，一个车企为什么要做机器人？"
        },
        {
            "start": 267.46,
            "end": 269.64,
            "text": "答案是：核心能力的复用。"
        },
        {
            "start": 269.64,
            "end": 274.12,
            "text": "Tesla在自动驾驶上积累的AI能力——计算机视觉、"
        },
        {
            "start": 274.12,
            "end": 274.62,
            "text": "实时决策、"
        },
        {
            "start": 274.62,
            "end": 278.28000000000003,
            "text": "运动控制——跟机器人需要的AI能力高度重叠。"
        },
        {
            "start": 278.28000000000003,
            "end": 281.18,
            "text": "而且Tesla的超级计算基础设施Dojo，"
        },
        {
            "start": 281.18,
            "end": 284.3,
            "text": "可以同时为自动驾驶和机器人训练模型。"
        },
        {
            "start": 284.3,
            "end": 286.12,
            "text": "第三个平台是能源。"
        },
        {
            "start": 286.12,
            "end": 289.66,
            "text": "Tesla的太阳能板和Powerwall储能设备，"
        },
        {
            "start": 289.66,
            "end": 292.14,
            "text": "加上AI优化的能源管理系统，"
        },
        {
            "start": 292.14,
            "end": 294.28,
            "text": "构成了一个分布式能源网络。"
        },
        {
            "start": 294.70000000000005,
            "end": 298.64,
            "text": "你把这三个平台放在一起看：电动车 + 机器人 + 能源。"
        },
        {
            "start": 298.64,
            "end": 299.48,
            "text": "核心是什么？"
        },
        {
            "start": 299.48,
            "end": 300.0,
            "text": "AI。"
        },
        {
            "start": 300.0,
            "end": 303.02,
            "text": "AI是连接这三个平台的底层能力。"
        },
        {
            "start": 303.02,
            "end": 306.92,
            "text": "这就是Tesla的战略棋局——它不是在做一个产品，"
        },
        {
            "start": 306.92,
            "end": 310.06,
            "text": "它是在建一个AI驱动的产业帝国。"
        },
        {
            "start": 310.06,
            "end": 311.9,
            "text": "好，今天的思考题。"
        },
        {
            "start": 311.9,
            "end": 314.36,
            "text": "第一，Tesla的数据飞轮为什么这么强？"
        },
        {
            "start": 314.36,
            "end": 317.72,
            "text": "你的业务有没有可能建立类似的数据飞轮？"
        },
        {
            "start": 317.72,
            "end": 321.3,
            "text": "第二，Tesla选择了极度垂直整合的战略。"
        },
        {
            "start": 321.3,
            "end": 324.56,
            "text": "你的业务应该垂直整合还是专注分工？"
        },
        {
            "start": 324.56,
            "end": 326.6,
            "text": "AI时代这个选择有没有变化？"
        },
        {
            "start": 326.6,
            "end": 329.42,
            "text": "第三，Tesla的核心竞争力到底是什么？"
        },
        {
            "start": 329.42,
            "end": 329.96,
            "text": "电池？"
        },
        {
            "start": 330.28,
            "end": 330.52,
            "text": "制造？"
        },
        {
            "start": 330.8,
            "end": 331.16,
            "text": "品牌？"
        },
        {
            "start": 331.66,
            "end": 332.96,
            "text": "还是AI和数据？"
        },
        {
            "start": 332.96,
            "end": 334.04,
            "text": "总结一下。"
        },
        {
            "start": 334.04,
            "end": 336.5,
            "text": "第一，Tesla的战略不是\"做电动车\"，"
        },
        {
            "start": 336.5,
            "end": 339.08,
            "text": "而是\"用AI重新定义出行和能源\"。"
        },
        {
            "start": 339.08,
            "end": 342.3,
            "text": "第二，垂直整合是为了打通数据链条，"
        },
        {
            "start": 342.3,
            "end": 344.32,
            "text": "让AI能发挥最大价值。"
        },
        {
            "start": 344.32,
            "end": 347.4,
            "text": "第三，数据飞轮是Tesla最深的壁垒。"
        },
        {
            "start": 347.4,
            "end": 351.62,
            "text": "几百万辆车的驾驶数据是竞争对手短期无法追赶的。"
        },
        {
            "start": 351.62,
            "end": 355.2,
            "text": "第四，Tesla的长期格局是一个AI平台公司："
        },
        {
            "start": 355.2,
            "end": 358.3,
            "text": "电动车、机器人、能源，底层是AI。"
        },
        {
            "start": 358.3,
            "end": 361.54,
            "text": "下一期我们看另一个精彩的案例：字节跳动。"
        },
        {
            "start": 361.54,
            "end": 363.52,
            "text": "一家靠算法驱动的公司，"
        },
        {
            "start": 363.52,
            "end": 367.74,
            "text": "是怎么在短短十年内从零做到全球级别的。"
        },
        {
            "start": 367.74,
            "end": 372.24,
            "text": "它的战略逻辑跟Tesla完全不同，但同样是AI驱动的。"
        },
        {
            "start": 372.24,
            "end": 373.66,
            "text": "好，今天就到这里。"
        },
        {
            "start": 373.66,
            "end": 375.12,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.74,
        "index": 0
    },
    {
        "start": 3.74,
        "end": 57.08,
        "index": 1
    },
    {
        "start": 57.08,
        "end": 117.7,
        "index": 2
    },
    {
        "start": 117.7,
        "end": 175.6,
        "index": 3
    },
    {
        "start": 175.6,
        "end": 236.38,
        "index": 4
    },
    {
        "start": 236.38,
        "end": 294.7,
        "index": 5
    },
    {
        "start": 294.7,
        "end": 332.96,
        "index": 6
    },
    {
        "start": 332.96,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-13.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "用前面学过的战略工具，系统拆解 Tesla 的战略选择与 AI 布局。"
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
      submitHref: "./lesson-strategy-13.html?entry={entry}",
      secondaryHref: "./lesson-strategy-13.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-12",
      coachSource: "./ai-coach.html?source=lesson-strategy-12"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于案例：Tesla 的 AI 战略棋局的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：Tesla 的 AI 战略棋局", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-13.html" + '?entry=' + entryMode;
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
