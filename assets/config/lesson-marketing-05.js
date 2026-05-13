(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的营销思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的营销框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的增长判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.marketing05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Marketing 第5课",
      backLink: { href: './module-marketing.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块三 · 营销与增长',
      lessonTitle: "第5课：增长飞轮：从 AARRR 到 AI 驱动增长",
      heroMeta: ['🎙 Marketing 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀增长判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立营销判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的增长判断框架'] },
      player: { initialSlide: "./assets/slides/marketing-ep38-growth-flywheel/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：增长飞轮：从 AARRR 到 AI 驱动增长", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-marketing.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "增长飞轮：从 AARRR 到 AI 驱动增长",
                "body": "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-marketing.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-marketing.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从问题开始",
                "body": "但不是泛泛地聊，怎么增长，而是聊一个很经典、也很实用的增长框架"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "这个时刻，很多人会叫它 Aha Moment"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键判断",
                "body": "因为如果前面的激活和留存做不好，收入迟早会掉下去"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "到了留存这一步，AI 可以做三件特别重要的事"
        }
] },
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的营销课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：营销与增长 5/5", "你已完成当前开放的营销课程", '也可以先整理这一节'], nextHref: "./module-marketing.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-marketing.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'marketing', lessonId: "marketing-05", modulePage: 'module-marketing.html', progressNamespace: 'marketing', progressLessonKey: "lesson5", audioSource: './assets/audio/marketing-ep38-growth-flywheel.mp3?v=20260411-marketing-05b', vttSrc: './assets/subtitles/marketing-ep38-growth-flywheel.vtt?v=20260411-marketing-05b', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-marketing-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "marketing-ep38-growth-flywheel/slide_01.png",
            "label": "增长飞轮：从 AARRR 到 AI 驱动增长",
            "caption": "这一节会帮助你系统理解：增长飞轮：从 AARRR 到 AI 驱动增长"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到Minds Leap商学院。"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_03.png",
            "label": "核心框架",
            "caption": "这个时刻，很多人会叫它 Aha Moment。 也就是用户真正感到，哦，原来如此，原来这个产品真的能帮到我。"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_04.png",
            "label": "关键判断",
            "caption": "因为如果前面的激活和留存做不好，收入迟早会掉下去。 好，那 AI 在这里能做什么？"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "到了留存这一步，AI 可以做三件特别重要的事。 第一，预测谁有流失风险。"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_06.png",
            "label": "回到你的业务",
            "caption": "你在正确的时间，去触发正确的人，推荐效率会高很多。 但我想特别强调一点。"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_07.png",
            "label": "风险与提醒",
            "caption": "如果现在最大的问题是，用户来了就走，那你继续砸获客，往往只是把更多人送进漏斗顶部，再从中间漏掉。 如果现在的问题是，用户其实留得住，但付费转化弱，那重点就不是再讲品牌故事，而是要去"
        },
        {
            "file": "marketing-ep38-growth-flywheel/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的营销框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.04,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.04,
            "end": 2.94,
            "text": "欢迎来到Minds Leap商学院。"
        },
        {
            "start": 2.94,
            "end": 4.14,
            "text": "今天来聊增长。"
        },
        {
            "start": 4.14,
            "end": 5.88,
            "text": "但不是泛泛地聊，怎么增长，"
        },
        {
            "start": 5.88,
            "end": 7.28,
            "text": "而是聊一个很经典、"
        },
        {
            "start": 7.28,
            "end": 8.9,
            "text": "也很实用的增长框架。"
        },
        {
            "start": 8.9,
            "end": 9.68,
            "text": "海盗模型。"
        },
        {
            "start": 9.68,
            "end": 11.36,
            "text": "以及，在 AI 时代，"
        },
        {
            "start": 11.36,
            "end": 14.14,
            "text": "怎么把它真正变成一个会转起来的增长飞轮。"
        },
        {
            "start": 14.14,
            "end": 15.74,
            "text": "先说这个模型本身。"
        },
        {
            "start": 15.74,
            "end": 17.66,
            "text": "海盗模型一共有五个环节。"
        },
        {
            "start": 17.66,
            "end": 18.3,
            "text": "获取。"
        },
        {
            "start": 18.72,
            "end": 18.98,
            "text": "激活。"
        },
        {
            "start": 18.98,
            "end": 19.62,
            "text": "留存。"
        },
        {
            "start": 20.06,
            "end": 20.24,
            "text": "收入。"
        },
        {
            "start": 20.42,
            "end": 20.94,
            "text": "推荐。"
        },
        {
            "start": 20.94,
            "end": 22.6,
            "text": "你也可以把它理解成，"
        },
        {
            "start": 22.6,
            "end": 24.3,
            "text": "用户从第一次知道你，"
        },
        {
            "start": 24.3,
            "end": 26.04,
            "text": "到真正帮你带来更多用户，"
        },
        {
            "start": 26.04,
            "end": 27.58,
            "text": "中间会经历的五步。"
        },
        {
            "start": 27.58,
            "end": 29.08,
            "text": "第一步，获取。"
        },
        {
            "start": 29.08,
            "end": 30.86,
            "text": "也就是用户怎么知道你。"
        },
        {
            "start": 30.86,
            "end": 34.18,
            "text": "是通过搜索、内容、广告、社交媒体、"
        },
        {
            "start": 34.42,
            "end": 36.4,
            "text": "口碑推荐，还是线下活动。"
        },
        {
            "start": 36.4,
            "end": 39.22,
            "text": "很多企业一谈增长，第一反应就是去想获客。"
        },
        {
            "start": 39.22,
            "end": 42.52,
            "text": "但问题是，你把人带来了，不代表增长真的成立。"
        },
        {
            "start": 42.52,
            "end": 45.18,
            "text": "因为后面每一步，都可能在漏人。"
        },
        {
            "start": 45.18,
            "end": 46.4,
            "text": "第二步，激活。"
        },
        {
            "start": 46.4,
            "end": 48.4,
            "text": "用户来了以后，第一次体验怎么样。"
        },
        {
            "start": 48.4,
            "end": 49.94,
            "text": "他有没有真的感受到价值。"
        },
        {
            "start": 49.94,
            "end": 54.12,
            "text": "有没有走到那个让他觉得，嗯，这个东西对我有用的时刻。"
        },
        {
            "start": 54.12,
            "end": 56.56,
            "text": "这个时刻，很多人会叫它 Aha Moment。"
        },
        {
            "start": 56.56,
            "end": 59.24,
            "text": "也就是用户真正感到，哦，原来如此，"
        },
        {
            "start": 59.24,
            "end": 61.16,
            "text": "原来这个产品真的能帮到我。"
        },
        {
            "start": 61.16,
            "end": 62.42,
            "text": "第三步，留存。"
        },
        {
            "start": 62.42,
            "end": 66.12,
            "text": "不是用过一次就结束了，而是他会不会回来继续用。"
        },
        {
            "start": 66.12,
            "end": 68.82,
            "text": "会不会把这个产品慢慢变成自己的习惯。"
        },
        {
            "start": 68.82,
            "end": 69.62,
            "text": "真正的增长，"
        },
        {
            "start": 69.62,
            "end": 72.38,
            "text": "往往不是靠一次次不断拉新撑出来的，"
        },
        {
            "start": 72.38,
            "end": 74.62,
            "text": "而是靠用户留下来，持续使用，"
        },
        {
            "start": 74.84,
            "end": 75.74,
            "text": "持续产生价值。"
        },
        {
            "start": 75.74,
            "end": 76.96,
            "text": "第四步，收入。"
        },
        {
            "start": 76.96,
            "end": 80.22,
            "text": "也就是你怎么把前面的价值，真正变成现金流。"
        },
        {
            "start": 80.22,
            "end": 81.72,
            "text": "用户愿不愿意付钱。"
        },
        {
            "start": 81.72,
            "end": 82.46,
            "text": "愿不愿意升级。"
        },
        {
            "start": 82.46,
            "end": 83.72,
            "text": "愿不愿意持续续费。"
        },
        {
            "start": 83.72,
            "end": 85.0,
            "text": "第五步，推荐。"
        },
        {
            "start": 85.0,
            "end": 86.96,
            "text": "这是很多人容易忽略的一步。"
        },
        {
            "start": 86.96,
            "end": 88.22,
            "text": "真正好的增长，"
        },
        {
            "start": 88.22,
            "end": 90.22,
            "text": "不只是你自己不断花钱买流量，"
        },
        {
            "start": 90.22,
            "end": 92.44,
            "text": "而是老用户愿意带来新用户。"
        },
        {
            "start": 92.44,
            "end": 95.54,
            "text": "这个时候，系统才开始有一点自我增强的味道。"
        },
        {
            "start": 96.0,
            "end": 97.94,
            "text": "所以，海盗模型最重要的价值，"
        },
        {
            "start": 97.94,
            "end": 100.64,
            "text": "不是让你背下这五个词，而是提醒你，"
        },
        {
            "start": 100.64,
            "end": 103.0,
            "text": "增长不是一个点，而是一整条链路。"
        },
        {
            "start": 103.0,
            "end": 104.52,
            "text": "你不能只看获客。"
        },
        {
            "start": 104.52,
            "end": 107.76,
            "text": "你要看，流量进来以后，后面到底哪里在漏。"
        },
        {
            "start": 107.76,
            "end": 109.14,
            "text": "也不能只看收入。"
        },
        {
            "start": 109.14,
            "end": 113.42,
            "text": "因为如果前面的激活和留存做不好，收入迟早会掉下去。"
        },
        {
            "start": 113.42,
            "end": 115.48,
            "text": "好，那 AI 在这里能做什么？"
        },
        {
            "start": 115.48,
            "end": 117.52,
            "text": "我们一个环节一个环节来看。"
        },
        {
            "start": 117.52,
            "end": 118.56,
            "text": "在获取这一步，"
        },
        {
            "start": 118.56,
            "end": 123.24,
            "text": "AI 最擅长做的是识别更有效的渠道和更可能转化的人群。"
        },
        {
            "start": 123.24,
            "end": 125.4,
            "text": "它可以分析不同渠道带来的用户，"
        },
        {
            "start": 125.4,
            "end": 128.02,
            "text": "后面谁留存更好，谁更愿意付费，"
        },
        {
            "start": 128.02,
            "end": 129.22,
            "text": "谁只是来看看。"
        },
        {
            "start": 129.22,
            "end": 131.68,
            "text": "这样你就不只是看表面的点击量，"
        },
        {
            "start": 131.68,
            "end": 133.74,
            "text": "而是看更后面的真实质量。"
        },
        {
            "start": 133.74,
            "end": 137.8,
            "text": "它也可以帮你更快做内容分发、广告测试、受众拓展。"
        },
        {
            "start": 137.8,
            "end": 139.98,
            "text": "让获客不再只是拍脑袋投放。"
        },
        {
            "start": 139.98,
            "end": 142.56,
            "text": "到了激活这一步，AI 的价值会更明显。"
        },
        {
            "start": 142.56,
            "end": 145.6,
            "text": "因为不同用户，第一次使用产品的时候，"
        },
        {
            "start": 145.6,
            "end": 147.74,
            "text": "卡住的地方常常不一样。"
        },
        {
            "start": 147.74,
            "end": 149.5,
            "text": "有人是不知道下一步做什么。"
        },
        {
            "start": 149.5,
            "end": 151.9,
            "text": "有人是不理解这个产品到底值在哪。"
        },
        {
            "start": 151.9,
            "end": 154.74,
            "text": "有人是流程太长，中途就放弃了。"
        },
        {
            "start": 154.74,
            "end": 158.12,
            "text": "AI 可以根据用户的行为，动态调整引导路径。"
        },
        {
            "start": 158.12,
            "end": 159.36,
            "text": "也可以识别，"
        },
        {
            "start": 159.36,
            "end": 162.02,
            "text": "哪些用户在前二十四小时最容易流失，"
        },
        {
            "start": 162.02,
            "end": 164.82,
            "text": "然后及时做提醒、提示或者帮助。"
        },
        {
            "start": 164.82,
            "end": 168.54,
            "text": "到了留存这一步，AI 可以做三件特别重要的事。"
        },
        {
            "start": 168.54,
            "end": 170.5,
            "text": "第一，预测谁有流失风险。"
        },
        {
            "start": 170.5,
            "end": 172.3,
            "text": "第二，判断他为什么要流失。"
        },
        {
            "start": 172.3,
            "end": 176.14,
            "text": "第三，在真正流失之前，给出更合适的触达和内容。"
        },
        {
            "start": 176.56,
            "end": 179.0,
            "text": "这时候，AI 不只是自动发消息，"
        },
        {
            "start": 179.0,
            "end": 181.92,
            "text": "而是更像一个会观察用户状态的系统。"
        },
        {
            "start": 181.92,
            "end": 183.98,
            "text": "它知道这个人是不是冷下来了，"
        },
        {
            "start": 183.98,
            "end": 185.44,
            "text": "是不是兴趣下降了，"
        },
        {
            "start": 185.44,
            "end": 187.04,
            "text": "是不是价值感在变弱。"
        },
        {
            "start": 187.04,
            "end": 191.7,
            "text": "收入这一步，AI 的作用，是帮你更聪明地推动转化和升级。"
        },
        {
            "start": 191.7,
            "end": 195.52,
            "text": "比如，它可以识别哪些用户已经进入了适合付费的状态。"
        },
        {
            "start": 195.52,
            "end": 197.6,
            "text": "也可以根据用户的使用深度，"
        },
        {
            "start": 197.6,
            "end": 199.26,
            "text": "判断他更适合什么套餐，"
        },
        {
            "start": 199.26,
            "end": 201.38,
            "text": "什么时候更适合收到升级提醒。"
        },
        {
            "start": 201.38,
            "end": 202.96,
            "text": "当然，边界也很重要。"
        },
        {
            "start": 202.96,
            "end": 205.36,
            "text": "我们不是要用 AI 去做过度收割，"
        },
        {
            "start": 205.36,
            "end": 208.16,
            "text": "而是帮助用户在真正需要的时候，"
        },
        {
            "start": 208.16,
            "end": 210.16,
            "text": "更顺畅地进入下一层价值。"
        },
        {
            "start": 210.16,
            "end": 213.04,
            "text": "到了推荐这一步，AI 其实也很有用。"
        },
        {
            "start": 213.04,
            "end": 215.82,
            "text": "因为不是每个用户都一样愿意推荐你。"
        },
        {
            "start": 215.82,
            "end": 218.18,
            "text": "AI 可以识别哪些用户现在满意度高、"
        },
        {
            "start": 218.42,
            "end": 220.78,
            "text": "活跃度高，也更有可能愿意做推荐。"
        },
        {
            "start": 220.78,
            "end": 224.8,
            "text": "你在正确的时间，去触发正确的人，推荐效率会高很多。"
        },
        {
            "start": 224.8,
            "end": 226.38,
            "text": "但我想特别强调一点。"
        },
        {
            "start": 226.38,
            "end": 228.8,
            "text": "如果你只是把海盗模型理解成一个漏斗，"
        },
        {
            "start": 228.8,
            "end": 230.68,
            "text": "你的思路还是线性的。"
        },
        {
            "start": 230.68,
            "end": 232.96,
            "text": "更进一步的做法，是把它看成一个飞轮。"
        },
        {
            "start": 233.45999999999998,
            "end": 235.48,
            "text": "也就是，推荐带来新的获取。"
        },
        {
            "start": 235.48,
            "end": 237.39999999999998,
            "text": "新的获取带来新的激活。"
        },
        {
            "start": 237.4,
            "end": 239.68,
            "text": "更好的激活带来更高的留存。"
        },
        {
            "start": 239.68,
            "end": 242.04,
            "text": "更稳定的留存带来更多收入。"
        },
        {
            "start": 242.04,
            "end": 245.22,
            "text": "更多收入又能反过来投入产品、服务和增长。"
        },
        {
            "start": 245.22,
            "end": 247.28,
            "text": "最后，再带来更多推荐。"
        },
        {
            "start": 247.28,
            "end": 251.6,
            "text": "这时候，系统不是一段一段分开的，而是开始自己转起来。"
        },
        {
            "start": 251.6,
            "end": 253.6,
            "text": "所以真正关键的问题就变了。"
        },
        {
            "start": 253.6,
            "end": 257.92,
            "text": "不是我五步都懂不懂，而是，我的飞轮杠杆点到底在哪里。"
        },
        {
            "start": 257.92,
            "end": 259.84000000000003,
            "text": "有的企业，杠杆点在激活。"
        },
        {
            "start": 259.84000000000003,
            "end": 264.34,
            "text": "因为一旦用户真正感受到价值，后面留存和收入都顺。"
        },
        {
            "start": 264.34,
            "end": 266.16,
            "text": "有的企业，杠杆点在留存。"
        },
        {
            "start": 266.16,
            "end": 270.1,
            "text": "因为只要留下来，用户后面就会自然产生收入和推荐。"
        },
        {
            "start": 270.1,
            "end": 272.22,
            "text": "还有的企业，杠杆点在推荐。"
        },
        {
            "start": 272.22,
            "end": 275.82,
            "text": "因为口碑一旦建立起来，获客成本会明显下降。"
        },
        {
            "start": 275.82,
            "end": 277.72,
            "text": "你要做的，不是平均用力，"
        },
        {
            "start": 277.72,
            "end": 280.34,
            "text": "而是找到那个最值得先发力的环节。"
        },
        {
            "start": 280.34,
            "end": 283.64,
            "text": "如果现在最大的问题是，用户来了就走，"
        },
        {
            "start": 283.64,
            "end": 284.92,
            "text": "那你继续砸获客，"
        },
        {
            "start": 284.92,
            "end": 287.54,
            "text": "往往只是把更多人送进漏斗顶部，"
        },
        {
            "start": 287.54,
            "end": 288.76,
            "text": "再从中间漏掉。"
        },
        {
            "start": 288.76,
            "end": 291.4,
            "text": "如果现在的问题是，用户其实留得住，"
        },
        {
            "start": 291.4,
            "end": 292.46,
            "text": "但付费转化弱，"
        },
        {
            "start": 292.46,
            "end": 294.46,
            "text": "那重点就不是再讲品牌故事，"
        },
        {
            "start": 294.46,
            "end": 296.24,
            "text": "而是要去优化价值呈现、"
        },
        {
            "start": 296.24,
            "end": 298.18,
            "text": "付费时机和升级路径。"
        },
        {
            "start": 298.18,
            "end": 300.54,
            "text": "所以，海盗模型真正的用法，"
        },
        {
            "start": 300.54,
            "end": 302.22,
            "text": "不是把它当成一张漂亮图，"
        },
        {
            "start": 302.22,
            "end": 303.84,
            "text": "而是当成一个诊断工具。"
        },
        {
            "start": 303.84,
            "end": 305.38,
            "text": "你可以问自己几个问题。"
        },
        {
            "start": 305.38,
            "end": 307.98,
            "text": "第一，今天我的增长，最卡的是哪一步。"
        },
        {
            "start": 307.98,
            "end": 310.56,
            "text": "第二，这一步的问题，是体验问题、"
        },
        {
            "start": 310.56,
            "end": 313.14,
            "text": "内容问题、产品问题，还是触达问题。"
        },
        {
            "start": 313.14,
            "end": 317.84,
            "text": "第三，如果让 AI 先介入一个地方，哪里最容易先看到结果。"
        },
        {
            "start": 317.84,
            "end": 318.84,
            "text": "好，总结一下。"
        },
        {
            "start": 318.84,
            "end": 323.14,
            "text": "海盗模型的五步，是获取、激活、留存、收入、推荐。"
        },
        {
            "start": 323.14,
            "end": 325.88,
            "text": "AI 的价值，不是把每一步都自动化，"
        },
        {
            "start": 325.88,
            "end": 329.08,
            "text": "而是帮你更快识别问题、优化关键环节，"
        },
        {
            "start": 329.08,
            "end": 331.86,
            "text": "并找到真正能让系统转起来的杠杆点。"
        },
        {
            "start": 331.86,
            "end": 334.78,
            "text": "真正的目标，也不是把漏斗画得更漂亮，"
        },
        {
            "start": 334.78,
            "end": 336.46,
            "text": "而是把你的增长链路，"
        },
        {
            "start": 336.46,
            "end": 338.72,
            "text": "慢慢变成一个会自我增强的飞轮。"
        },
        {
            "start": 338.72,
            "end": 341.1,
            "text": "下一期我们聊 AI 内容营销。"
        },
        {
            "start": 341.1,
            "end": 343.24,
            "text": "怎么规模化创作高质量内容。"
        },
        {
            "start": 343.24,
            "end": 345.22,
            "text": "我是Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 2.94,
        "index": 0
    },
    {
        "start": 2.94,
        "end": 15.74,
        "index": 1
    },
    {
        "start": 15.74,
        "end": 96.0,
        "index": 2
    },
    {
        "start": 96.0,
        "end": 164.82,
        "index": 3
    },
    {
        "start": 164.82,
        "end": 210.16,
        "index": 4
    },
    {
        "start": 210.16,
        "end": 226.38,
        "index": 5
    },
    {
        "start": 226.38,
        "end": 317.84,
        "index": 6
    },
    {
        "start": 317.84,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./module-marketing.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的营销增长判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是营销判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的营销判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-marketing.html?entry={entry}", secondaryHref: "./module-marketing.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-marketing-05", coachSource: "./ai-coach.html?source=lesson-marketing-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于增长飞轮：从 AARRR 到 AI 驱动增长的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "增长飞轮：从 AARRR 到 AI 驱动增长", module: '营销与增长' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-marketing.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-marketing.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
