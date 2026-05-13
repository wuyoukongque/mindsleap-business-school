(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing04 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第4课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第4课：消费者决策心理：人为什么买单",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep37-consumer-psychology/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：消费者决策心理：人为什么买单", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-4", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个营销判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个增长环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的营销优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的营销学习，最终都会回到资源配置与增长判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-marketing.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "STP：找到你的市场在哪里",
                "body": "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "品牌定位：在用户心里占一个位置",
                "body": "从差异化与心智占位出发，重新理解品牌定位在 AI 时代为什么更重要。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "4P 到 4C：营销组合怎么设计",
                "body": "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "消费者决策心理：人为什么买单",
                "body": "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从问题开始",
                "body": "今天聊一个超级有意思的话题：消费者决策心理"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "比如 SaaS 产品的定价页面，通常会把最贵的企业版放在最前面（或最显眼的位置），这样中间的专业版看起来就很划算了"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键判断",
                "body": "不是泛泛地说很多人在用，而是说\"跟你相似的人在用\""
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "生活费是一个账户，娱乐费是一个账户，学习投资是一个账户"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 4/4", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-04", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson4", audioSource: './assets/audio/marketing-ep37-consumer-psychology.mp3?v=20260410-marketing-04a', vttSrc: './assets/subtitles/marketing-ep37-consumer-psychology.vtt?v=20260410-marketing-04a', slideBasePath: './assets/slides/', slideVersion: '?v=20260410-marketing-04a', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep37-consumer-psychology/slide_01.png",
            "label": "消费者决策心理：人为什么买单",
            "caption": "这一节会帮助你系统理解：消费者决策心理：人为什么买单"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_03.png",
            "label": "核心框架",
            "caption": "比如 SaaS 产品的定价页面，通常会把最贵的企业版放在最前面（或最显眼的位置），这样中间的专业版看起来就很划算了。 第二个原理：损失厌恶。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_04.png",
            "label": "关键判断",
            "caption": "不是泛泛地说很多人在用，而是说\"跟你相似的人在用\"。 比如\"你所在行业的 500 家企业都在用我们的产品\"，这比\"10 万用户\"更有说服力，因为跟你更相关。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "生活费是一个账户，娱乐费是一个账户，学习投资是一个账户。 同样是花 500 块钱，如果归到\"娱乐\"账户，你可能会犹豫。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_06.png",
            "label": "回到你的业务",
            "caption": "AI 识别到了\"犹豫\"这个行为信号，然后用\"损失厌恶 + 稀缺性\"来推动转化。 第二，情感分析。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_07.png",
            "label": "风险与提醒",
            "caption": "因为消费者不傻，他用了你的产品之后发现不好，会退货、会差评、会告诉身边的人别买。 好的营销是把真正好的产品和真正需要它的人连接起来。"
        },
        {
            "file": "marketing-ep37-consumer-psychology/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.44,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.44,
            "end": 2.96,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 2.96,
            "end": 5.26,
            "text": "今天聊一个超级有意思的话题。"
        },
        {
            "start": 5.26,
            "end": 6.48,
            "text": "消费者决策心理。"
        },
        {
            "start": 6.48,
            "end": 8.98,
            "text": "也就是说，人到底为什么买单？"
        },
        {
            "start": 8.98,
            "end": 11.6,
            "text": "你可能会以为，人买东西是理性的。"
        },
        {
            "start": 11.6,
            "end": 14.42,
            "text": "比较价格，比较功能，选最划算的。"
        },
        {
            "start": 14.42,
            "end": 17.8,
            "text": "但心理学和行为经济学告诉我们，现实并不是这样。"
        },
        {
            "start": 17.8,
            "end": 20.5,
            "text": "很多购买决策，往往先是感性发生，"
        },
        {
            "start": 20.5,
            "end": 22.9,
            "text": "然后理性再出来替它找理由。"
        },
        {
            "start": 22.9,
            "end": 26.28,
            "text": "今天我想带你抓住几个最重要的消费者心理原理。"
        },
        {
            "start": 26.28,
            "end": 28.22,
            "text": "你理解了这些原理，就会知道，"
        },
        {
            "start": 28.22,
            "end": 30.12,
            "text": "为什么有些营销动作特别有效，"
        },
        {
            "start": 30.12,
            "end": 33.36,
            "text": "也会知道 AI 在这里到底能帮你放大什么。"
        },
        {
            "start": 33.36,
            "end": 34.9,
            "text": "第一个原理，锚定效应。"
        },
        {
            "start": 34.9,
            "end": 38.8,
            "text": "人在做判断的时候，会被自己最先接触到的信息锚定。"
        },
        {
            "start": 38.8,
            "end": 40.48,
            "text": "举个很经典的例子。"
        },
        {
            "start": 40.48,
            "end": 42.82,
            "text": "一件衬衫标价一千二，你觉得贵。"
        },
        {
            "start": 42.82,
            "end": 45.88,
            "text": "但如果旁边放着一件标价三千八的西装，"
        },
        {
            "start": 45.88,
            "end": 47.66,
            "text": "你再回头看这件衬衫，"
        },
        {
            "start": 47.66,
            "end": 49.3,
            "text": "突然就觉得还挺合理。"
        },
        {
            "start": 49.3,
            "end": 50.92,
            "text": "这就是锚定效应。"
        },
        {
            "start": 50.92,
            "end": 52.839999999999996,
            "text": "那件更贵的西装，就是你的锚。"
        },
        {
            "start": 52.839999999999996,
            "end": 56.1,
            "text": "你的大脑会不自觉地拿这个锚去评估别的东西。"
        },
        {
            "start": 56.1,
            "end": 57.7,
            "text": "营销里怎么用？"
        },
        {
            "start": 57.7,
            "end": 60.58,
            "text": "先展示高价产品，再展示你真正想卖的产品。"
        },
        {
            "start": 60.58,
            "end": 64.6,
            "text": "比如很多 SaaS 产品的定价页，会把企业版放在最显眼的位置。"
        },
        {
            "start": 64.6,
            "end": 67.42,
            "text": "这样一来，中间档的专业版就会显得更划算。"
        },
        {
            "start": 67.75999999999999,
            "end": 69.46000000000001,
            "text": "第二个原理，损失厌恶。"
        },
        {
            "start": 69.46000000000001,
            "end": 73.38,
            "text": "人对损失的感受，往往比对同等收益的感受更强。"
        },
        {
            "start": 73.38,
            "end": 75.52,
            "text": "也就是说，丢掉一百块钱的痛苦，"
        },
        {
            "start": 75.52,
            "end": 77.6,
            "text": "通常大于捡到一百块钱的快乐。"
        },
        {
            "start": 77.6,
            "end": 78.88,
            "text": "营销里怎么用？"
        },
        {
            "start": 78.88,
            "end": 80.7,
            "text": "限时优惠，明天恢复原价。"
        },
        {
            "start": 80.7,
            "end": 83.24,
            "text": "它真正触发的，不是你会赚到什么，"
        },
        {
            "start": 83.24,
            "end": 85.62,
            "text": "而是如果你现在不买，你会失去什么。"
        },
        {
            "start": 85.62,
            "end": 87.36,
            "text": "再比如，免费试用三十天。"
        },
        {
            "start": 87.36,
            "end": 88.44,
            "text": "用了三十天以后，"
        },
        {
            "start": 88.44,
            "end": 90.02,
            "text": "你已经习惯了这个产品，"
        },
        {
            "start": 90.02,
            "end": 93.02,
            "text": "这时候取消就像是在失去一个已经拥有的东西。"
        },
        {
            "start": 93.02,
            "end": 94.64,
            "text": "这个心理阻力会很强。"
        },
        {
            "start": 94.64,
            "end": 96.94,
            "text": "这也是为什么订阅制产品很厉害。"
        },
        {
            "start": 96.94,
            "end": 100.14,
            "text": "一旦用户订阅了，取消就会被感知成一种损失。"
        },
        {
            "start": 100.14,
            "end": 102.14,
            "text": "第三个原理，社会认同。"
        },
        {
            "start": 102.14,
            "end": 105.24,
            "text": "人在不确定的时候，会参考别人的行为。"
        },
        {
            "start": 105.24,
            "end": 107.32,
            "text": "如果很多人都在做同一件事，"
        },
        {
            "start": 107.32,
            "end": 109.78,
            "text": "你会更容易觉得，这件事应该是对的。"
        },
        {
            "start": 109.78,
            "end": 111.28,
            "text": "所以你经常会看到这样的表达。"
        },
        {
            "start": 111.28,
            "end": 113.06,
            "text": "十万用户的选择。"
        },
        {
            "start": 113.06,
            "end": 113.96,
            "text": "销量第一。"
        },
        {
            "start": 113.96,
            "end": 115.66,
            "text": "很多同类企业都在用。"
        },
        {
            "start": 115.66,
            "end": 118.74,
            "text": "但真正更有力量的，是相似性社会认同。"
        },
        {
            "start": 118.74,
            "end": 121.34,
            "text": "不是泛泛地说很多人，而是告诉你，"
        },
        {
            "start": 121.34,
            "end": 123.26,
            "text": "跟你相似的人正在这样做。"
        },
        {
            "start": 123.26,
            "end": 126.04,
            "text": "比如，你所在行业的五百家企业都在用我们的产品。"
        },
        {
            "start": 126.04,
            "end": 128.04,
            "text": "这个说服力，通常会更强。"
        },
        {
            "start": 128.04,
            "end": 132.5,
            "text": "用户评价、口碑、评分体系，本质上也都在利用社会认同。"
        },
        {
            "start": 132.5,
            "end": 134.98,
            "text": "这就是为什么评论区、星级评分、"
        },
        {
            "start": 135.16,
            "end": 137.14,
            "text": "真实案例会深深影响购买决策。"
        },
        {
            "start": 137.14,
            "end": 139.1,
            "text": "第四个原理，稀缺性。"
        },
        {
            "start": 139.1,
            "end": 140.88,
            "text": "越稀缺的东西，越有吸引力。"
        },
        {
            "start": 140.88,
            "end": 142.6,
            "text": "不是因为它一定更有价值，"
        },
        {
            "start": 142.6,
            "end": 145.26,
            "text": "而是因为稀缺会触发你害怕错过的心理。"
        },
        {
            "start": 145.26,
            "end": 147.26,
            "text": "也就是 FOMO。"
        },
        {
            "start": 147.26,
            "end": 148.2,
            "text": "仅剩最后三件。"
        },
        {
            "start": 148.2,
            "end": 149.46,
            "text": "限量发售五百份。"
        },
        {
            "start": 149.46,
            "end": 150.7,
            "text": "名额只剩十个。"
        },
        {
            "start": 150.7,
            "end": 152.12,
            "text": "这些都在利用稀缺性。"
        },
        {
            "start": 152.12,
            "end": 153.28,
            "text": "稀缺有两种。"
        },
        {
            "start": 153.28,
            "end": 154.42,
            "text": "一种是数量稀缺。"
        },
        {
            "start": 154.42,
            "end": 156.0,
            "text": "另一种是时间稀缺。"
        },
        {
            "start": 156.0,
            "end": 157.82,
            "text": "两者叠加，效果通常最强。"
        },
        {
            "start": 157.82,
            "end": 159.38,
            "text": "但这里有一个前提。"
        },
        {
            "start": 159.38,
            "end": 161.08,
            "text": "稀缺性必须真实。"
        },
        {
            "start": 161.08,
            "end": 164.0,
            "text": "如果你每次都说最后三件，但永远有货，"
        },
        {
            "start": 164.0,
            "end": 165.64,
            "text": "消费者很快就不会信了。"
        },
        {
            "start": 165.64,
            "end": 167.58,
            "text": "第五个原理，心理账户。"
        },
        {
            "start": 167.58,
            "end": 170.2,
            "text": "人在心里会把钱分进不同账户。"
        },
        {
            "start": 170.2,
            "end": 171.58,
            "text": "生活费是一个账户，"
        },
        {
            "start": 171.58,
            "end": 172.92,
            "text": "娱乐消费是一个账户，"
        },
        {
            "start": 172.92,
            "end": 175.24,
            "text": "学习投资可能又是另一个账户。"
        },
        {
            "start": 175.24,
            "end": 179.5,
            "text": "同样是花五百块，如果你觉得这是娱乐消费，可能会犹豫。"
        },
        {
            "start": 179.5,
            "end": 182.94,
            "text": "但如果你觉得这是在投资自己，感受就完全不一样。"
        },
        {
            "start": 182.94,
            "end": 184.24,
            "text": "营销里怎么用？"
        },
        {
            "start": 184.24,
            "end": 186.86,
            "text": "就是帮助客户把这笔支出归到一个更容易"
        },
        {
            "start": 186.86,
            "end": 188.74,
            "text": "接受的心理账户里。"
        },
        {
            "start": 188.74,
            "end": 192.08,
            "text": "比如卖课程的时候，你不只是说，花三千块买一门课。"
        },
        {
            "start": 192.08,
            "end": 194.5,
            "text": "你也可以说，这是在投资你的竞争力，"
        },
        {
            "start": 194.5,
            "end": 196.52,
            "text": "摊到每天可能不到十块钱。"
        },
        {
            "start": 196.52,
            "end": 200.12,
            "text": "这样一来，客户感受到的就不只是消费，而更像投资。"
        },
        {
            "start": 200.12,
            "end": 201.96,
            "text": "好，讲完这五个核心原理，"
        },
        {
            "start": 201.96,
            "end": 205.68,
            "text": "我们来看看 AI 能怎么帮你把这些心理机制用得更精准。"
        },
        {
            "start": 205.68,
            "end": 207.12,
            "text": "第一，行为预测。"
        },
        {
            "start": 207.12,
            "end": 211.02,
            "text": "AI 可以分析用户的浏览、搜索、加购、"
        },
        {
            "start": 211.02,
            "end": 212.78,
            "text": "停留、离开这些行为，"
        },
        {
            "start": 212.78,
            "end": 214.54,
            "text": "帮助你判断他的购买意图。"
        },
        {
            "start": 215.09999999999997,
            "end": 217.76,
            "text": "比如，一个用户看了同一款产品三次，"
        },
        {
            "start": 217.76,
            "end": 219.76,
            "text": "加了购物车，但一直没下单。"
        },
        {
            "start": 219.76,
            "end": 220.92,
            "text": "AI 可以判断，"
        },
        {
            "start": 220.92,
            "end": 222.68,
            "text": "这个人很可能已经接近购买，"
        },
        {
            "start": 222.68,
            "end": 224.44,
            "text": "只是在价格上还在犹豫。"
        },
        {
            "start": 224.44,
            "end": 227.56,
            "text": "然后系统就可以自动触发一个限时优惠。"
        },
        {
            "start": 227.56,
            "end": 231.82,
            "text": "这其实就是把消费者心理学和 AI 行为分析结合起来了。"
        },
        {
            "start": 231.82,
            "end": 236.62,
            "text": "AI 先识别出犹豫，再用损失厌恶和稀缺性去推动转化。"
        },
        {
            "start": 236.62,
            "end": 238.26,
            "text": "第二，情感分析。"
        },
        {
            "start": 238.26,
            "end": 241.66,
            "text": "AI 还可以去分析客户在评论、客服对话、"
        },
        {
            "start": 241.66,
            "end": 243.5,
            "text": "社交媒体里表达出来的情绪。"
        },
        {
            "start": 243.5,
            "end": 246.02,
            "text": "是满意，是不满，是焦虑，还是兴奋。"
        },
        {
            "start": 246.02,
            "end": 249.36,
            "text": "这些情绪信号，会帮助你调整营销表达。"
        },
        {
            "start": 249.36,
            "end": 252.38,
            "text": "如果客户在购买前的主要情绪是焦虑，"
        },
        {
            "start": 252.38,
            "end": 253.82,
            "text": "比如担心不好用，"
        },
        {
            "start": 253.82,
            "end": 256.94,
            "text": "那你就应该重点去降低焦虑，提供试用、"
        },
        {
            "start": 257.2,
            "end": 258.74,
            "text": "展示案例、强调保障。"
        },
        {
            "start": 258.74,
            "end": 260.52,
            "text": "第三，个性化触发。"
        },
        {
            "start": 260.52,
            "end": 264.74,
            "text": "不同的人，对不同心理触发因素的敏感度并不一样。"
        },
        {
            "start": 264.74,
            "end": 266.32,
            "text": "有些人对价格更敏感，"
        },
        {
            "start": 266.32,
            "end": 268.08,
            "text": "有些人更相信社会认同，"
        },
        {
            "start": 268.08,
            "end": 270.7,
            "text": "还有些人特别怕错过。"
        },
        {
            "start": 270.7,
            "end": 275.02,
            "text": "AI 可以根据一个人过去的行为，判断他更容易被什么触发。"
        },
        {
            "start": 275.02,
            "end": 278.78,
            "text": "于是系统可以把不同的营销信息，推给不同的人。"
        },
        {
            "start": 278.78,
            "end": 281.06,
            "text": "对价格敏感的人，看见优惠券。"
        },
        {
            "start": 281.06,
            "end": 284.22,
            "text": "对社会认同敏感的人，看见用户评价。"
        },
        {
            "start": 284.22,
            "end": 287.14,
            "text": "对 FOMO 敏感的人，看见倒计时。"
        },
        {
            "start": 287.14,
            "end": 289.06,
            "text": "但最后我一定要提醒一点。"
        },
        {
            "start": 289.06,
            "end": 291.62,
            "text": "理解消费者心理，不是为了操纵消费者。"
        },
        {
            "start": 291.62,
            "end": 294.82,
            "text": "如果你只是靠这些技巧去卖一个不值得买的产品，"
        },
        {
            "start": 294.82,
            "end": 297.66,
            "text": "短期也许有效，但长期一定会反噬。"
        },
        {
            "start": 297.66,
            "end": 301.64,
            "text": "因为用户用了以后，会退货，会差评，会告诉别人不要买。"
        },
        {
            "start": 301.64,
            "end": 303.46,
            "text": "真正好的营销，不是操控，"
        },
        {
            "start": 303.46,
            "end": 304.86,
            "text": "而是把真正好的产品，"
        },
        {
            "start": 304.86,
            "end": 307.2,
            "text": "更有效地连接到真正需要它的人。"
        },
        {
            "start": 307.2,
            "end": 310.88,
            "text": "心理学帮你提高连接效率，AI 帮你把这件事做得更精准。"
        },
        {
            "start": 310.88,
            "end": 314.2,
            "text": "但前提始终是，你的产品本身值得。"
        },
        {
            "start": 314.2,
            "end": 315.2,
            "text": "好，总结一下。"
        },
        {
            "start": 315.2,
            "end": 318.06,
            "text": "今天我们讲了五个最核心的消费者决策心理。"
        },
        {
            "start": 318.06,
            "end": 322.5,
            "text": "锚定效应、损失厌恶、社会认同、稀缺性、心理账户。"
        },
        {
            "start": 322.5,
            "end": 324.74,
            "text": "AI 能做三件很重要的事。"
        },
        {
            "start": 324.74,
            "end": 325.4,
            "text": "行为预测。"
        },
        {
            "start": 325.72,
            "end": 326.26,
            "text": "情感分析。"
        },
        {
            "start": 326.26,
            "end": 327.5,
            "text": "个性化心理触发。"
        },
        {
            "start": 327.5,
            "end": 329.2,
            "text": "但真正的底线不能丢。"
        },
        {
            "start": 329.2,
            "end": 333.62,
            "text": "心理学是用来更好连接用户和价值，不是用来做短期操纵。"
        },
        {
            "start": 333.62,
            "end": 335.52,
            "text": "下一期我们聊增长飞轮。"
        },
        {
            "start": 335.52,
            "end": 337.72,
            "text": "从 AARRR 到 AI 驱动增长。"
        },
        {
            "start": 337.72,
            "end": 339.24,
            "text": "我是Lincoln，我们下期见。"
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
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-04", coachSource: "./ai-coach.html?source=lesson-marketing-04" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于消费者决策心理：人为什么买单的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "消费者决策心理：人为什么买单", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
