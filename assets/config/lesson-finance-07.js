(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance07 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第7课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第7课：融资策略：什么时候该融资，怎么融更合适",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep07-financing-strategy/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：融资策略：什么时候该融资，怎么融更合适", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-7", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-08.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 6,
                "title": "AI 估值：用 AI 做公司估值的第一版判断",
                "body": "用 AI 提高估值分析效率，但保留管理者自己的判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "融资策略：什么时候该融资，怎么融更合适",
                "body": "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "股权结构：控制权、激励与长期治理",
                "body": "把融资、控制权和长期激励放在同一张桌子上考虑。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-08.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天来聊一个每个创业者都会面对的问题：你的公司需要钱了，你该怎么融"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "但是，股权融资的代价是什么"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "如果你的现金流出了问题，还不上债，那就是实打实的违约"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "所以典型的 AI 创业公司融资路径是这样的： 天使轮和种子轮，金额通常在几百万到一两千万人民币"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 7/13", "建议下一节：股权结构：控制权、激励与长期治理", '也可以先整理这一节'], nextHref: "./lesson-finance-08.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-07", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson7", audioSource: './assets/audio/finance-ep07-financing-strategy.mp3?v=20260411-finance-ep07-r1', vttSrc: './assets/subtitles/finance-ep07-financing-strategy.vtt?v=20260411-finance-ep07-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep07-financing-strategy/slide_01.png",
            "label": "融资策略：什么时候该融资，怎么融更合适",
            "caption": "这一节会帮助你系统理解：融资策略：什么时候该融资，怎么融更合适"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_03.png",
            "label": "核心框架",
            "caption": "但是，股权融资的代价是什么？ 是稀释。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_04.png",
            "label": "关键指标",
            "caption": "如果你的现金流出了问题，还不上债，那就是实打实的违约。 严重的话，公司可能被债权人申请破产清算。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "所以典型的 AI 创业公司融资路径是这样的： 天使轮和种子轮，金额通常在几百万到一两千万人民币。 这笔钱用来搭团队、做 demo、验证技术可行性。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_06.png",
            "label": "回到你的企业",
            "caption": "很多 AI 公司融了一轮钱，结果大部分都交给了云服务商买 GPU 算力。 第二，技术迭代风险。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_07.png",
            "label": "风险与提醒",
            "caption": "三，准备融资材料。 商业计划书、财务模型、竞品分析，这些材料都可以用 AI 来辅助撰写和优化。"
        },
        {
            "file": "finance-ep07-financing-strategy/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.5,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.5,
            "end": 3.96,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.96,
            "end": 7.04,
            "text": "今天来聊一个每个创业者都会面对的问题："
        },
        {
            "start": 7.04,
            "end": 10.01,
            "text": "你的公司需要钱了，你该怎么融？"
        },
        {
            "start": 10.01,
            "end": 13.24,
            "text": "融资这件事情，说到底就是两条路。"
        },
        {
            "start": 13.24,
            "end": 16.56,
            "text": "一条叫股权融资，equity financing，"
        },
        {
            "start": 16.56,
            "end": 19.74,
            "text": "就是出让公司的一部分股份来换钱。"
        },
        {
            "start": 19.74,
            "end": 26.36,
            "text": "另一条叫债权融资，debt financing，就是借钱，到期还本付息。"
        },
        {
            "start": 26.36,
            "end": 28.08,
            "text": "听起来很简单对不对？"
        },
        {
            "start": 28.08,
            "end": 31.02,
            "text": "但实际选择的时候，这里面的学问大了去了。"
        },
        {
            "start": 31.02,
            "end": 34.06,
            "text": "选错了，可能融来的钱没把公司做大，"
        },
        {
            "start": 34.06,
            "end": 36.56,
            "text": "反而把创始人给稀释没了。"
        },
        {
            "start": 36.56,
            "end": 40.58,
            "text": "或者借了不该借的钱，现金流一紧，公司就出问题了。"
        },
        {
            "start": 40.58,
            "end": 43.38,
            "text": "今天我就给大家一个清晰的决策框架。"
        },
        {
            "start": 43.38,
            "end": 45.22,
            "text": "先来讲股权融资。"
        },
        {
            "start": 45.22,
            "end": 47.76,
            "text": "股权融资最大的好处是什么？"
        },
        {
            "start": 47.76,
            "end": 48.5,
            "text": "不用还。"
        },
        {
            "start": 48.56,
            "end": 50.4,
            "text": "投资人给你一笔钱，"
        },
        {
            "start": 50.4,
            "end": 52.32,
            "text": "你不需要每个月付利息，"
        },
        {
            "start": 52.32,
            "end": 54.44,
            "text": "也不需要到期还本金。"
        },
        {
            "start": 54.44,
            "end": 58.74,
            "text": "这笔钱可以拿来烧，拿来投入，没有还款压力。"
        },
        {
            "start": 58.74,
            "end": 61.7,
            "text": "这对于早期创业公司来说非常重要。"
        },
        {
            "start": 61.7,
            "end": 64.52,
            "text": "因为早期你大概率是亏损的，"
        },
        {
            "start": 64.52,
            "end": 66.92,
            "text": "根本没有稳定的现金流来还债。"
        },
        {
            "start": 66.92,
            "end": 71.12,
            "text": "第二个好处是，好的股权投资人不只是给钱。"
        },
        {
            "start": 71.12,
            "end": 74.56,
            "text": "他还带资源、带人脉、带行业洞察。"
        },
        {
            "start": 74.56,
            "end": 79.18,
            "text": "尤其是知名的 VC，他投了你，本身就是一种信用背书。"
        },
        {
            "start": 79.64,
            "end": 81.9,
            "text": "但是，股权融资的代价是什么？"
        },
        {
            "start": 81.9,
            "end": 82.74,
            "text": "是稀释。"
        },
        {
            "start": 82.74,
            "end": 86.5,
            "text": "你每融一轮，你在公司里的股份就少一点。"
        },
        {
            "start": 86.5,
            "end": 88.3,
            "text": "融到 C 轮 D 轮的时候，"
        },
        {
            "start": 88.3,
            "end": 92.32,
            "text": "很多创始人在自己公司里只剩不到 20% 的股份了。"
        },
        {
            "start": 92.32,
            "end": 96.78,
            "text": "还有一点很多创始人不注意的：投资人是有回报预期的。"
        },
        {
            "start": 96.78,
            "end": 99.96,
            "text": "VC 的钱不是慈善，他投你一百万，"
        },
        {
            "start": 99.96,
            "end": 103.72,
            "text": "他期望在五到七年内拿回十倍甚至几十倍。"
        },
        {
            "start": 103.72,
            "end": 106.06,
            "text": "这意味着一旦拿了 VC 的钱，"
        },
        {
            "start": 106.06,
            "end": 109.14,
            "text": "你就上了一条快车道，你必须高速增长，"
        },
        {
            "start": 109.14,
            "end": 111.45999999999998,
            "text": "最终要么 IPO 要么被并购，"
        },
        {
            "start": 111.46,
            "end": 113.34,
            "text": "才能给投资人退出的机会。"
        },
        {
            "start": 113.34,
            "end": 117.48,
            "text": "如果你的公司不是那种能做到几十亿规模的类型，"
        },
        {
            "start": 117.48,
            "end": 119.82,
            "text": "拿 VC 的钱反而可能是个负担。"
        },
        {
            "start": 119.82,
            "end": 121.38,
            "text": "再来讲债权融资。"
        },
        {
            "start": 121.38,
            "end": 124.58,
            "text": "债权融资最大的好处是不稀释股份。"
        },
        {
            "start": 124.58,
            "end": 129.28,
            "text": "你借一千万，到期还一千万加利息，你的股份一点都没少。"
        },
        {
            "start": 129.28,
            "end": 133.08,
            "text": "如果你的公司已经有稳定的现金流和盈利能力，"
        },
        {
            "start": 133.08,
            "end": 136.18,
            "text": "债权融资的性价比其实比股权高得多。"
        },
        {
            "start": 136.18,
            "end": 137.02,
            "text": "你想想看，"
        },
        {
            "start": 137.02,
            "end": 139.38,
            "text": "假设你的公司今年赚了五百万，"
        },
        {
            "start": 139.38,
            "end": 140.96,
            "text": "你需要一千万来扩张。"
        },
        {
            "start": 140.96,
            "end": 146.04,
            "text": "如果你去融股权，可能要出让 15% 到 20% 的股份。"
        },
        {
            "start": 146.04,
            "end": 149.94,
            "text": "但如果你去银行借一千万，年利率 6%，"
        },
        {
            "start": 150.26,
            "end": 151.96,
            "text": "一年利息才六十万。"
        },
        {
            "start": 151.96,
            "end": 152.94,
            "text": "哪个更划算？"
        },
        {
            "start": 153.16,
            "end": 154.04,
            "text": "当然是借钱。"
        },
        {
            "start": 154.04,
            "end": 155.9,
            "text": "但债权的风险是什么？"
        },
        {
            "start": 155.9,
            "end": 157.16,
            "text": "到期必须还。"
        },
        {
            "start": 157.16,
            "end": 160.2,
            "text": "如果你的现金流出了问题，还不上债，"
        },
        {
            "start": 160.2,
            "end": 161.84,
            "text": "那就是实打实的违约。"
        },
        {
            "start": 161.84,
            "end": 165.9,
            "text": "严重的话，公司可能被债权人申请破产清算。"
        },
        {
            "start": 165.9,
            "end": 170.12,
            "text": "所以债权融资更适合有稳定现金流的成熟业务，"
        },
        {
            "start": 170.12,
            "end": 173.06,
            "text": "不太适合早期高风险的创业项目。"
        },
        {
            "start": 173.06,
            "end": 177.36,
            "text": "好，讲完了各自的优缺点，我给大家一个判断的框架。"
        },
        {
            "start": 177.36,
            "end": 179.0,
            "text": "什么时候该选股权？"
        },
        {
            "start": 179.0,
            "end": 182.26,
            "text": "第一，公司还在早期，没有稳定收入。"
        },
        {
            "start": 182.26,
            "end": 185.54,
            "text": "这个时候你没有还债的能力，只能用股权。"
        },
        {
            "start": 185.54,
            "end": 190.6,
            "text": "第二，你需要大量资金来快速扩张，而且市场窗口期很短。"
        },
        {
            "start": 190.6,
            "end": 194.84,
            "text": "比如你在打一个赢者通吃的市场，慢了就没机会了。"
        },
        {
            "start": 194.84,
            "end": 198.3,
            "text": "第三，你需要战略资源，不只是钱。"
        },
        {
            "start": 198.3,
            "end": 202.48,
            "text": "比如你需要某个投资人背后的行业资源和客户关系。"
        },
        {
            "start": 202.48,
            "end": 204.26,
            "text": "什么时候该选债权？"
        },
        {
            "start": 204.26,
            "end": 207.44,
            "text": "第一，公司已经有稳定的收入和现金流。"
        },
        {
            "start": 207.44,
            "end": 210.08,
            "text": "你能算得清楚每个月能还多少。"
        },
        {
            "start": 210.08,
            "end": 212.68,
            "text": "第二，你的扩张计划风险可控。"
        },
        {
            "start": 212.68,
            "end": 217.42,
            "text": "不是在赌一个不确定的未来，而是在已验证的模式上加量。"
        },
        {
            "start": 217.42,
            "end": 219.54,
            "text": "第三，你不想被稀释。"
        },
        {
            "start": 219.54,
            "end": 223.04,
            "text": "特别是如果你觉得公司未来的增值空间很大，"
        },
        {
            "start": 223.04,
            "end": 225.22,
            "text": "现在出让股份太亏了。"
        },
        {
            "start": 225.22,
            "end": 228.68,
            "text": "接下来我要重点聊一下，AI 创业公司的融资节奏。"
        },
        {
            "start": 228.68,
            "end": 231.14,
            "text": "这个跟传统公司有一些不同。"
        },
        {
            "start": 231.14,
            "end": 234.28,
            "text": "AI 创业公司有一个特点：前期投入大、"
        },
        {
            "start": 234.28,
            "end": 236.82,
            "text": "烧钱快，但一旦产品跑通，"
        },
        {
            "start": 236.82,
            "end": 238.64,
            "text": "规模化的边际成本很低。"
        },
        {
            "start": 238.64,
            "end": 242.16,
            "text": "所以典型的 AI 创业公司融资路径是这样的："
        },
        {
            "start": 242.16,
            "end": 247.02,
            "text": "天使轮和种子轮，金额通常在几百万到一两千万人民币。"
        },
        {
            "start": 247.02,
            "end": 250.96,
            "text": "这笔钱用来搭团队、做 demo、验证技术可行性。"
        },
        {
            "start": 250.96,
            "end": 253.74,
            "text": "这个阶段基本只能走股权融资。"
        },
        {
            "start": 253.74,
            "end": 257.3,
            "text": "Pre-A 和 A 轮，金额通常几千万。"
        },
        {
            "start": 257.3,
            "end": 261.72,
            "text": "这笔钱用来做出产品、找到第一批付费客户、验证 PMF。"
        },
        {
            "start": 261.72,
            "end": 263.98,
            "text": "这个阶段还是以股权为主。"
        },
        {
            "start": 263.98,
            "end": 266.2,
            "text": "B 轮及以后，金额可能上亿。"
        },
        {
            "start": 266.2,
            "end": 269.92,
            "text": "这个阶段公司应该已经有了比较清晰的商业化路径。"
        },
        {
            "start": 269.92,
            "end": 273.62,
            "text": "这时候你可以开始考虑股权加债权的混合方式。"
        },
        {
            "start": 273.62,
            "end": 277.42,
            "text": "比如用股权融资做新产品研发和市场扩张，"
        },
        {
            "start": 277.42,
            "end": 280.36,
            "text": "用债权融资做运营资金周转。"
        },
        {
            "start": 280.36,
            "end": 283.74,
            "text": "还有一些中间状态的融资工具，比如可转债。"
        },
        {
            "start": 283.74,
            "end": 286.76,
            "text": "可转债就是先当债，给你利息，"
        },
        {
            "start": 286.76,
            "end": 291.02,
            "text": "但在下一轮融资的时候可以按约定价格转换成股权。"
        },
        {
            "start": 291.02,
            "end": 296.06,
            "text": "这个工具对早期公司特别有用，因为它延迟了估值的问题。"
        },
        {
            "start": 296.06,
            "end": 299.28,
            "text": "双方不用现在就为公司值多少钱争论，"
        },
        {
            "start": 299.28,
            "end": 301.44,
            "text": "等下一轮的时候再说。"
        },
        {
            "start": 301.44,
            "end": 304.68,
            "text": "讲几个 AI 时代融资的特别注意事项。"
        },
        {
            "start": 304.68,
            "end": 306.22,
            "text": "第一，算力成本。"
        },
        {
            "start": 306.22,
            "end": 310.36,
            "text": "AI 公司的一大开支是算力，也就是 GPU 的使用费用。"
        },
        {
            "start": 310.36,
            "end": 313.58,
            "text": "在融资的时候一定要把算力成本算清楚。"
        },
        {
            "start": 313.58,
            "end": 316.22,
            "text": "很多 AI 公司融了一轮钱，"
        },
        {
            "start": 316.22,
            "end": 320.06,
            "text": "结果大部分都交给了云服务商买 GPU 算力。"
        },
        {
            "start": 320.06,
            "end": 321.84,
            "text": "第二，技术迭代风险。"
        },
        {
            "start": 321.84,
            "end": 323.72,
            "text": "AI 技术迭代非常快。"
        },
        {
            "start": 323.72,
            "end": 328.14,
            "text": "你今天做的模型，半年后可能被开源模型追上了。"
        },
        {
            "start": 328.14,
            "end": 330.36,
            "text": "所以投资人在看 AI 公司的时候，"
        },
        {
            "start": 330.36,
            "end": 333.18,
            "text": "越来越看重你的落地场景和数据壁垒，"
        },
        {
            "start": 333.18,
            "end": 334.94,
            "text": "而不只是技术本身。"
        },
        {
            "start": 334.94,
            "end": 337.3,
            "text": "第三，融资时点很重要。"
        },
        {
            "start": 337.3,
            "end": 340.02,
            "text": "AI 行业有明显的热度周期。"
        },
        {
            "start": 340.02,
            "end": 343.74,
            "text": "在行业热的时候融资，估值高、条款好。"
        },
        {
            "start": 343.74,
            "end": 348.14,
            "text": "在行业冷的时候融资，可能要打折还要接受苛刻的条款。"
        },
        {
            "start": 348.65999999999997,
            "end": 353.56,
            "text": "所以如果行情好，哪怕你不缺钱，也可以考虑适度融一些。"
        },
        {
            "start": 353.56,
            "end": 356.0,
            "text": "这就是所谓的\"晴天修屋顶\"。"
        },
        {
            "start": 356.0,
            "end": 359.38,
            "text": "好的创始人不会等到快没钱了才去融资，"
        },
        {
            "start": 359.38,
            "end": 364.98,
            "text": "而是在现金还够用 12 到 18 个月的时候就开始准备下一轮。"
        },
        {
            "start": 364.98,
            "end": 368.32,
            "text": "最后聊一下 AI 工具在融资过程中的应用。"
        },
        {
            "start": 368.32,
            "end": 370.0,
            "text": "你可以用 AI 做什么？"
        },
        {
            "start": 370.40000000000003,
            "end": 372.06,
            "text": "一，做财务建模。"
        },
        {
            "start": 372.06,
            "end": 374.78,
            "text": "把你的收入预测、成本结构、"
        },
        {
            "start": 374.78,
            "end": 376.72,
            "text": "现金流预测输入给 AI，"
        },
        {
            "start": 376.72,
            "end": 379.02,
            "text": "让它帮你做敏感性分析。"
        },
        {
            "start": 379.02,
            "end": 383.82,
            "text": "比如如果获客成本上涨 20%，你的现金流什么时候断？"
        },
        {
            "start": 383.82,
            "end": 386.04,
            "text": "二，做投资人研究。"
        },
        {
            "start": 386.04,
            "end": 389.78,
            "text": "你可以让 AI 帮你分析目标投资机构的投资偏好、"
        },
        {
            "start": 389.78,
            "end": 391.24,
            "text": "过往案例、投资阶段。"
        },
        {
            "start": 391.24,
            "end": 393.92,
            "text": "这样你就能更精准地匹配投资人。"
        },
        {
            "start": 393.92,
            "end": 395.96,
            "text": "三，准备融资材料。"
        },
        {
            "start": 395.96,
            "end": 399.06,
            "text": "商业计划书、财务模型、竞品分析，"
        },
        {
            "start": 399.06,
            "end": 402.46,
            "text": "这些材料都可以用 AI 来辅助撰写和优化。"
        },
        {
            "start": 402.46,
            "end": 406.46,
            "text": "但记住，融资最终是人和人之间的信任建立。"
        },
        {
            "start": 406.46,
            "end": 408.68,
            "text": "AI 能帮你提高效率和质量，"
        },
        {
            "start": 408.68,
            "end": 412.62,
            "text": "但不能替代你和投资人面对面的沟通和信任构建。"
        },
        {
            "start": 412.62,
            "end": 414.76,
            "text": "好，总结一下今天的内容。"
        },
        {
            "start": 414.76,
            "end": 419.32,
            "text": "股权融资不用还但会稀释，适合早期和高增长阶段。"
        },
        {
            "start": 419.32,
            "end": 424.18,
            "text": "债权融资不稀释但必须还，适合有稳定现金流的阶段。"
        },
        {
            "start": 424.18,
            "end": 427.64,
            "text": "AI 创业公司通常从纯股权开始，"
        },
        {
            "start": 427.64,
            "end": 430.44,
            "text": "随着商业化成熟逐步引入债权。"
        },
        {
            "start": 430.44,
            "end": 433.90000000000003,
            "text": "融资时点很重要，晴天修屋顶。"
        },
        {
            "start": 433.90000000000003,
            "end": 437.32,
            "text": "下一期我们来聊股权结构设计和 Term Sheet 解读，"
        },
        {
            "start": 437.32,
            "end": 440.12,
            "text": "这是每个创始人必须懂的保命知识。"
        },
        {
            "start": 440.12,
            "end": 442.3,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 442.3,
            "end": 447.92,
            "text": "1. 股权融资 vs 债权融资的核心区别：稀释 vs 还款压力"
        },
        {
            "start": 447.92,
            "end": 453.58,
            "text": "2. 判断框架：早期/高增长选股权，稳定现金流选债权"
        },
        {
            "start": 453.58,
            "end": 456.46,
            "text": "3. AI 创业公司融资路径："
        },
        {
            "start": 456.46,
            "end": 460.12,
            "text": "天使→A→B，从纯股权到股债混合"
        },
        {
            "start": 460.12,
            "end": 463.24,
            "text": "4. 三个 AI 时代融资注意事项："
        },
        {
            "start": 463.24,
            "end": 467.04,
            "text": "算力成本、技术迭代风险、融资时点"
        },
        {
            "start": 467.04,
            "end": 469.32,
            "text": "1. 如果你正在创业，"
        },
        {
            "start": 469.32,
            "end": 473.1,
            "text": "你现在的阶段更适合股权融资还是债权融资？"
        },
        {
            "start": 473.1,
            "end": 473.86,
            "text": "为什么？"
        },
        {
            "start": 473.86,
            "end": 478.18,
            "text": "2. 可转债这个工具在什么情况下对创始人有利？"
        },
        {
            "start": 478.18,
            "end": 480.54,
            "text": "什么情况下对投资人有利？"
        },
        {
            "start": 480.54,
            "end": 485.28,
            "text": "3. AI 创业公司的算力成本大概占总成本的多少？"
        },
        {
            "start": 485.28,
            "end": 487.14,
            "text": "有什么方法可以优化？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 10.141,
        "index": 0
    },
    {
        "start": 10.141,
        "end": 65.789,
        "index": 1
    },
    {
        "start": 65.789,
        "end": 121.056,
        "index": 2
    },
    {
        "start": 121.056,
        "end": 176.831,
        "index": 3
    },
    {
        "start": 176.831,
        "end": 229.817,
        "index": 4
    },
    {
        "start": 229.817,
        "end": 285.592,
        "index": 5
    },
    {
        "start": 285.592,
        "end": 348.592,
        "index": 6
    },
    {
        "start": 348.592,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-08.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-08.html?entry={entry}", secondaryHref: "./lesson-finance-08.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-07", coachSource: "./ai-coach.html?source=lesson-finance-07" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于融资策略：什么时候该融资，怎么融更合适的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "融资策略：什么时候该融资，怎么融更合适", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-08.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
