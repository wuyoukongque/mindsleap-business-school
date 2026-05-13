(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance08 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第8课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第8课：股权结构：控制权、激励与长期治理",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep08-equity-structure/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：股权结构：控制权、激励与长期治理", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-8", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-09.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 7,
                "title": "融资策略：什么时候该融资，怎么融更合适",
                "body": "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "股权结构：控制权、激励与长期治理",
                "body": "把融资、控制权和长期激励放在同一张桌子上考虑。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "投资决策：怎么判断一笔投入值不值",
                "body": "让投资决策回到回报、风险与机会成本，而不是只凭感觉。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-finance-09.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把融资、控制权和长期激励放在同一张桌子上考虑。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '本期重点总结', summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先从财务问题开始",
                "body": "今天聊一个创始人必须懂、但很多人直到吃了亏才重视的话题：股权结构设计和 Term Sheet"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "核心框架",
                "body": "你和几个核心合伙人签一个协议，约定在股东大会上按照同一个方向投票"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "关键指标",
                "body": "就是说入职满一年后，你才获得第一批 25% 的股份，然后剩下的 75% 在接下来三年里按月或按季度逐步到手"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "AI 时代的变化",
                "body": "就是如果公司被卖了或者清算了，投资人有权先拿回他的钱，拿完了才轮到普通股东分"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 8/13", "建议下一节：投资决策：怎么判断一笔投入值不值", '也可以先整理这一节'], nextHref: "./lesson-finance-09.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-08", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson8", audioSource: './assets/audio/finance-ep08-equity-structure.mp3?v=20260411-finance-ep08-r1', vttSrc: './assets/subtitles/finance-ep08-equity-structure.vtt?v=20260411-finance-ep08-r1', slideBasePath: './assets/slides/', slideVersion: '?v=20260405-finance-batch', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep08-equity-structure/slide_01.png",
            "label": "股权结构：控制权、激励与长期治理",
            "caption": "这一节会帮助你系统理解：股权结构：控制权、激励与长期治理"
        },
        {
            "file": "finance-ep08-equity-structure/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep08-equity-structure/slide_03.png",
            "label": "核心框架",
            "caption": "你和几个核心合伙人签一个协议，约定在股东大会上按照同一个方向投票。 这样你们几个人的投票权加在一起就够了。"
        },
        {
            "file": "finance-ep08-equity-structure/slide_04.png",
            "label": "关键指标",
            "caption": "就是说入职满一年后，你才获得第一批 25% 的股份，然后剩下的 75% 在接下来三年里按月或按季度逐步到手。 为什么要这样做？"
        },
        {
            "file": "finance-ep08-equity-structure/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "就是如果公司被卖了或者清算了，投资人有权先拿回他的钱，拿完了才轮到普通股东分。 最基础的是 1x 非参与优先权。"
        },
        {
            "file": "finance-ep08-equity-structure/slide_06.png",
            "label": "回到你的企业",
            "caption": "作为创始人，你一定要争取 Weighted Average，坚决不接受 Full Ratchet。 第四个关键条款：董事会席位。"
        },
        {
            "file": "finance-ep08-equity-structure/slide_07.png",
            "label": "风险与提醒",
            "caption": "第三，现在 AI 可以帮你做很多前期的功课。 你可以把 Term Sheet 上传给 AI，让它帮你逐条分析，标注出哪些条款对你不利，跟市场常见条款做对比。"
        },
        {
            "file": "finance-ep08-equity-structure/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.54,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.54,
            "end": 3.340000000000007,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.340000000000007,
            "end": 5.28,
            "text": "今天聊一个创始人必须懂、"
        },
        {
            "start": 5.28,
            "end": 8.18,
            "text": "但很多人直到吃了亏才重视的话题："
        },
        {
            "start": 8.18,
            "end": 9.71,
            "text": "股权结构设计和 Term Sheet。"
        },
        {
            "start": 9.76,
            "end": 12.22,
            "text": "我见过太多这样的案例："
        },
        {
            "start": 12.22,
            "end": 14.76,
            "text": "创始人辛辛苦苦做了三五年，"
        },
        {
            "start": 14.76,
            "end": 16.54,
            "text": "公司好不容易起来了，"
        },
        {
            "start": 16.54,
            "end": 19.54,
            "text": "结果发现自己在公司里说了不算了。"
        },
        {
            "start": 19.54,
            "end": 21.18,
            "text": "投票权被稀释了，"
        },
        {
            "start": 21.18,
            "end": 23.28,
            "text": "董事会被投资人控制了，"
        },
        {
            "start": 23.28,
            "end": 25.76,
            "text": "甚至被自己创办的公司给赶走了。"
        },
        {
            "start": 25.76,
            "end": 27.5,
            "text": "这些悲剧的根源，"
        },
        {
            "start": 27.5,
            "end": 31.84,
            "text": "往往就是在最早期的时候没有做好股权结构设计，"
        },
        {
            "start": 31.84,
            "end": 35.82,
            "text": "或者在融资的时候没有看清 Term Sheet 里面的条款。"
        },
        {
            "start": 35.82,
            "end": 38.06,
            "text": "所以今天这一期非常重要，"
        },
        {
            "start": 38.06,
            "end": 41.3,
            "text": "我尽量讲清楚，让你以后不踩这些坑。"
        },
        {
            "start": 41.3,
            "end": 43.52,
            "text": "先来讲股权结构设计。"
        },
        {
            "start": 43.52,
            "end": 47.22,
            "text": "第一个核心原则：创始人必须保持控制权。"
        },
        {
            "start": 47.22,
            "end": 48.86,
            "text": "怎么保持控制权？"
        },
        {
            "start": 48.86,
            "end": 52.48,
            "text": "不是说你一定要占 51% 以上的股份。"
        },
        {
            "start": 52.48,
            "end": 55.08,
            "text": "你可以通过几种机制来实现："
        },
        {
            "start": 55.08,
            "end": 58.38,
            "text": "第一种，投票权和经济权分离。"
        },
        {
            "start": 58.38,
            "end": 62.82,
            "text": "也就是大家常说的 AB 股结构，或者叫双层股权结构。"
        },
        {
            "start": 62.82,
            "end": 68.1,
            "text": "创始人持有的 B 类股每股有 10 票甚至 20 票投票权，"
        },
        {
            "start": 68.1,
            "end": 70.96,
            "text": "普通股东持有的 A 类股每股 1 票。"
        },
        {
            "start": 70.96,
            "end": 76.06,
            "text": "这样创始人哪怕股份被稀释到 10% 几，照样能控制公司。"
        },
        {
            "start": 76.06,
            "end": 78.94,
            "text": "京东的刘强东、小米的雷军、"
        },
        {
            "start": 78.94,
            "end": 80.84,
            "text": "Google 的两位创始人，"
        },
        {
            "start": 80.84,
            "end": 83.88,
            "text": "都是通过这种机制保持控制权的。"
        },
        {
            "start": 83.88,
            "end": 85.48,
            "text": "第二种，一致行动人协议。"
        },
        {
            "start": 85.48,
            "end": 88.08,
            "text": "你和几个核心合伙人签一个协议，"
        },
        {
            "start": 88.08,
            "end": 91.04,
            "text": "约定在股东大会上按照同一个方向投票。"
        },
        {
            "start": 91.04,
            "end": 94.64,
            "text": "这样你们几个人的投票权加在一起就够了。"
        },
        {
            "start": 94.64,
            "end": 97.2,
            "text": "第三种，有限合伙持股平台。"
        },
        {
            "start": 97.2,
            "end": 99.14,
            "text": "这个在中国很常见。"
        },
        {
            "start": 99.14,
            "end": 101.46,
            "text": "创始人作为普通合伙人 GP，"
        },
        {
            "start": 101.46,
            "end": 106.0,
            "text": "其他股东作为有限合伙人 LP 进入持股平台。"
        },
        {
            "start": 106.0,
            "end": 111.26,
            "text": "GP 拥有管理权，也就是投票权，LP 只有经济分配权。"
        },
        {
            "start": 111.26,
            "end": 113.52,
            "text": "这三种方式可以组合使用。"
        },
        {
            "start": 113.52,
            "end": 114.62,
            "text": "具体怎么设计，"
        },
        {
            "start": 114.62,
            "end": 116.44,
            "text": "要根据你的实际情况来定，"
        },
        {
            "start": 116.44,
            "end": 119.12,
            "text": "最好在公司成立的早期就做好。"
        },
        {
            "start": 119.12,
            "end": 122.92,
            "text": "第二个核心原则：合伙人之间的股权分配要合理。"
        },
        {
            "start": 122.92,
            "end": 123.92,
            "text": "什么叫合理？"
        },
        {
            "start": 123.92,
            "end": 125.0,
            "text": "不是平均分。"
        },
        {
            "start": 125.0,
            "end": 129.78,
            "text": "两个合伙人各 50%、三个合伙人各 33%，这是最差的方案。"
        },
        {
            "start": 129.78,
            "end": 130.5,
            "text": "为什么？"
        },
        {
            "start": 130.5,
            "end": 133.68,
            "text": "因为没有人拍板，出了分歧就陷入僵局。"
        },
        {
            "start": 133.68,
            "end": 135.82,
            "text": "好的股权分配有几个特点："
        },
        {
            "start": 135.82,
            "end": 138.68,
            "text": "第一，有一个绝对的大股东。"
        },
        {
            "start": 138.68,
            "end": 144.34,
            "text": "通常是 CEO 或者核心创始人，股份在 50% 到 70% 之间。"
        },
        {
            "start": 144.34,
            "end": 147.96,
            "text": "第二，其他合伙人根据贡献差异化分配。"
        },
        {
            "start": 147.96,
            "end": 153.3,
            "text": "贡献不只是钱，还包括技术、资源、全职投入时间等。"
        },
        {
            "start": 153.3,
            "end": 155.48,
            "text": "第三，预留期权池。"
        },
        {
            "start": 155.48,
            "end": 159.56,
            "text": "通常预留 10% 到 20% 的股份作为期权池，"
        },
        {
            "start": 159.56,
            "end": 161.74,
            "text": "用来吸引未来的核心人才。"
        },
        {
            "start": 161.74,
            "end": 164.64,
            "text": "还有一个非常重要的机制：成熟期。"
        },
        {
            "start": 164.64,
            "end": 165.9,
            "text": "英文叫 vesting。"
        },
        {
            "start": 165.9,
            "end": 166.72,
            "text": "什么意思呢？"
        },
        {
            "start": 166.72,
            "end": 170.06,
            "text": "就是合伙人的股份不是一次性给到位的，"
        },
        {
            "start": 170.06,
            "end": 172.02,
            "text": "而是分四年逐步成熟。"
        },
        {
            "start": 172.02,
            "end": 174.38,
            "text": "比如四年 vesting，一年 cliff。"
        },
        {
            "start": 174.88,
            "end": 177.02,
            "text": "就是说入职满一年后，"
        },
        {
            "start": 177.02,
            "end": 179.78,
            "text": "你才获得第一批 25% 的股份，"
        },
        {
            "start": 179.78,
            "end": 185.96,
            "text": "然后剩下的 75% 在接下来三年里按月或按季度逐步到手。"
        },
        {
            "start": 185.96,
            "end": 187.54,
            "text": "为什么要这样做？"
        },
        {
            "start": 187.54,
            "end": 190.44,
            "text": "因为如果一个合伙人干了半年就走了，"
        },
        {
            "start": 190.44,
            "end": 193.6,
            "text": "你不能让他白拿走 33% 的股份对不对？"
        },
        {
            "start": 193.6,
            "end": 196.72,
            "text": "有了 vesting，他没干满的部分就不给了。"
        },
        {
            "start": 196.72,
            "end": 201.2,
            "text": "这是保护公司和其他创始人的关键机制，千万不能省。"
        },
        {
            "start": 201.2,
            "end": 204.24,
            "text": "好，股权结构讲完了，接下来讲 Term Sheet。"
        },
        {
            "start": 204.24,
            "end": 207.64,
            "text": "Term Sheet 中文叫\"投资条款清单\"，"
        },
        {
            "start": 207.64,
            "end": 212.56,
            "text": "是投资人在正式投资之前给你的一份条款框架。"
        },
        {
            "start": 212.56,
            "end": 214.52,
            "text": "它不是最终的法律文件，"
        },
        {
            "start": 214.52,
            "end": 217.52,
            "text": "但它基本上确定了这笔投资的核心条款。"
        },
        {
            "start": 217.52,
            "end": 220.24,
            "text": "我给大家拆解几个最关键的条款。"
        },
        {
            "start": 220.24,
            "end": 221.84,
            "text": "第一个：估值。"
        },
        {
            "start": 221.84,
            "end": 224.62,
            "text": "分为投前估值和投后估值。"
        },
        {
            "start": 224.62,
            "end": 229.2,
            "text": "投前估值是投资人对你公司在投资进来之前的估值。"
        },
        {
            "start": 229.2,
            "end": 232.8,
            "text": "投后估值 = 投前估值 + 投资金额。"
        },
        {
            "start": 232.8,
            "end": 234.0,
            "text": "举个例子。"
        },
        {
            "start": 234.0,
            "end": 237.62,
            "text": "投资人说你的投前估值是 4000 万，投资 1000 万。"
        },
        {
            "start": 237.62,
            "end": 239.72,
            "text": "那投后估值就是 5000 万。"
        },
        {
            "start": 239.72,
            "end": 243.16,
            "text": "投资人拿到的股份 = 1000 / 5000 = 20%。"
        },
        {
            "start": 244.2,
            "end": 247.74,
            "text": "很多创始人只看投前估值高不高就开心了。"
        },
        {
            "start": 247.74,
            "end": 252.62,
            "text": "但其实估值只是一个维度，后面的条款可能比估值更重要。"
        },
        {
            "start": 252.62,
            "end": 255.64,
            "text": "第二个关键条款：优先清算权。"
        },
        {
            "start": 255.64,
            "end": 257.58,
            "text": "英文叫 Liquidation Preference。"
        },
        {
            "start": 258.09999999999997,
            "end": 259.08,
            "text": "这是什么意思呢？"
        },
        {
            "start": 259.08,
            "end": 261.8,
            "text": "就是如果公司被卖了或者清算了，"
        },
        {
            "start": 261.8,
            "end": 264.14,
            "text": "投资人有权先拿回他的钱，"
        },
        {
            "start": 264.14,
            "end": 266.6,
            "text": "拿完了才轮到普通股东分。"
        },
        {
            "start": 266.6,
            "end": 269.46,
            "text": "最基础的是 1x 非参与优先权。"
        },
        {
            "start": 269.46,
            "end": 274.72,
            "text": "就是投资人先拿回他投的本金，剩下的再按股份比例分配。"
        },
        {
            "start": 275.26,
            "end": 276.32,
            "text": "这个还算合理。"
        },
        {
            "start": 276.32,
            "end": 280.38,
            "text": "但有些条款会写 2x、3x 优先清算权。"
        },
        {
            "start": 280.38,
            "end": 280.94,
            "text": "什么意思？"
        },
        {
            "start": 280.94,
            "end": 286.42,
            "text": "投资人先拿走他投资金额的两倍或三倍，然后剩下的再分。"
        },
        {
            "start": 286.42,
            "end": 290.24,
            "text": "更狠的是参与分配权，英文叫 Participating Preferred。"
        },
        {
            "start": 290.24,
            "end": 293.18,
            "text": "投资人不但先拿走优先清算金额，"
        },
        {
            "start": 293.18,
            "end": 296.44,
            "text": "拿完之后还按股份比例参与剩余分配。"
        },
        {
            "start": 296.44,
            "end": 298.02,
            "text": "这等于拿了两次。"
        },
        {
            "start": 298.02,
            "end": 300.06,
            "text": "你一定要看清楚这个条款。"
        },
        {
            "start": 300.06,
            "end": 302.96,
            "text": "如果公司最终的退出金额不够大，"
        },
        {
            "start": 302.96,
            "end": 305.64,
            "text": "创始人和团队可能一分钱都拿不到。"
        },
        {
            "start": 305.64,
            "end": 308.54,
            "text": "第三个关键条款：反稀释保护。"
        },
        {
            "start": 308.54,
            "end": 310.68,
            "text": "英文叫 Anti-dilution。"
        },
        {
            "start": 310.68,
            "end": 311.56,
            "text": "什么意思？"
        },
        {
            "start": 311.56,
            "end": 315.2,
            "text": "就是如果你下一轮融资的估值比这一轮低了，"
        },
        {
            "start": 315.2,
            "end": 316.2200000000003,
            "text": "俗称 Down Round，"
        },
        {
            "start": 316.2200000000003,
            "end": 320.68,
            "text": "投资人可以要求额外获得更多股份来弥补他的损失。"
        },
        {
            "start": 320.68,
            "end": 322.64,
            "text": "反稀释保护有两种方式。"
        },
        {
            "start": 322.64,
            "end": 324.74,
            "text": "一种叫 Full Ratchet，完全棘轮。"
        },
        {
            "start": 324.74,
            "end": 326.18,
            "text": "这个非常苛刻，"
        },
        {
            "start": 326.18,
            "end": 330.72,
            "text": "相当于把前一轮投资人的价格直接降到新一轮的价格。"
        },
        {
            "start": 330.72,
            "end": 332.54,
            "text": "对创始人稀释很大。"
        },
        {
            "start": 332.54,
            "end": 335.2,
            "text": "另一种叫 Weighted Average，加权平均。"
        },
        {
            "start": 335.2,
            "end": 339.06,
            "text": "这个比较温和，是按加权平均的方式来调整。"
        },
        {
            "start": 339.06,
            "end": 344.04,
            "text": "作为创始人，你一定要争取 Weighted Average，坚决不接受 Full Ratchet。"
        },
        {
            "start": 344.04,
            "end": 346.56,
            "text": "第四个关键条款：董事会席位。"
        },
        {
            "start": 346.56,
            "end": 349.36,
            "text": "董事会是公司的最高决策机构。"
        },
        {
            "start": 349.82000000000005,
            "end": 353.88,
            "text": "谁控制了董事会，谁就控制了公司的重大决策。"
        },
        {
            "start": 353.88,
            "end": 355.26,
            "text": "通常的安排是："
        },
        {
            "start": 355.26,
            "end": 358.1,
            "text": "早期的时候创始人控制多数席位，"
        },
        {
            "start": 358.1,
            "end": 360.08,
            "text": "比如 3 席里面你占 2 席。"
        },
        {
            "start": 360.08,
            "end": 364.54,
            "text": "但随着融资轮次增加，投资人会要求越来越多的席位。"
        },
        {
            "start": 364.54,
            "end": 366.44,
            "text": "你一定要守住的底线是："
        },
        {
            "start": 366.44,
            "end": 368.86,
            "text": "创始人加上独立董事的席位，"
        },
        {
            "start": 368.86,
            "end": 371.96,
            "text": "至少要等于或多于投资人的席位。"
        },
        {
            "start": 371.96,
            "end": 374.8,
            "text": "一旦投资人在董事会占了多数，"
        },
        {
            "start": 374.8,
            "end": 378.66,
            "text": "你在很多重大事项上就失去了最终话语权。"
        },
        {
            "start": 378.66,
            "end": 381.36,
            "text": "第五个条款：保护性条款。"
        },
        {
            "start": 381.36,
            "end": 385.8,
            "text": "这些条款列出了一些需要投资人同意才能做的事情，"
        },
        {
            "start": 385.8,
            "end": 388.68,
            "text": "比如：修改公司章程、发行新股、"
        },
        {
            "start": 388.68,
            "end": 391.78,
            "text": "出售公司、大额借款、更换 CEO 等。"
        },
        {
            "start": 391.78,
            "end": 396.56,
            "text": "有保护性条款是合理的，投资人投了钱当然需要一些保护。"
        },
        {
            "start": 396.56,
            "end": 398.74,
            "text": "但你要注意范围不能太宽。"
        },
        {
            "start": 398.74,
            "end": 402.34,
            "text": "如果连日常经营决策都需要投资人批准，"
        },
        {
            "start": 402.34,
            "end": 404.62,
            "text": "那你这个 CEO 就没法干活了。"
        },
        {
            "start": 404.62,
            "end": 406.68,
            "text": "最后给大家几条实战建议。"
        },
        {
            "start": 406.68,
            "end": 410.64,
            "text": "第一，在签 Term Sheet 之前一定要找有经验的律师帮你看。"
        },
        {
            "start": 410.64,
            "end": 411.94,
            "text": "不要省这个钱。"
        },
        {
            "start": 411.94,
            "end": 414.96,
            "text": "很多条款的坑，你自己根本看不出来。"
        },
        {
            "start": 414.96,
            "end": 419.98,
            "text": "第二，永远记住：估值不是最重要的，条款才是。"
        },
        {
            "start": 419.98,
            "end": 422.6,
            "text": "一个高估值配上苛刻的条款，"
        },
        {
            "start": 422.6,
            "end": 426.14,
            "text": "可能还不如一个稍低的估值配上友好的条款。"
        },
        {
            "start": 426.14,
            "end": 429.92,
            "text": "第三，现在 AI 可以帮你做很多前期的功课。"
        },
        {
            "start": 429.92,
            "end": 432.1,
            "text": "你可以把 Term Sheet 上传给 AI，"
        },
        {
            "start": 432.1,
            "end": 434.0,
            "text": "让它帮你逐条分析，"
        },
        {
            "start": 434.0,
            "end": 436.22,
            "text": "标注出哪些条款对你不利，"
        },
        {
            "start": 436.22,
            "end": 438.66,
            "text": "跟市场常见条款做对比。"
        },
        {
            "start": 438.66,
            "end": 442.14,
            "text": "这能帮你在跟投资人谈判之前做好充分的准备。"
        },
        {
            "start": 442.14,
            "end": 444.96,
            "text": "但最终的谈判还是要你自己来。"
        },
        {
            "start": 444.96,
            "end": 449.82,
            "text": "AI 帮你做准备，谈判桌上还是要靠你的判断力和谈判能力。"
        },
        {
            "start": 449.82,
            "end": 450.86,
            "text": "好，总结一下。"
        },
        {
            "start": 450.86,
            "end": 454.28,
            "text": "股权结构设计的核心是保持创始人控制权，"
        },
        {
            "start": 454.28,
            "end": 457.58,
            "text": "合伙人之间合理分配，设置 vesting 机制。"
        },
        {
            "start": 457.58,
            "end": 460.46,
            "text": "Term Sheet 里最要关注的条款是估值、"
        },
        {
            "start": 460.46,
            "end": 462.64,
            "text": "优先清算权、反稀释保护、"
        },
        {
            "start": 462.64,
            "end": 464.9,
            "text": "董事会席位和保护性条款。"
        },
        {
            "start": 464.9,
            "end": 468.4,
            "text": "记住，估值不是最重要的，条款才是。"
        },
        {
            "start": 468.4,
            "end": 470.5,
            "text": "下一期我们来聊投资决策："
        },
        {
            "start": 470.5,
            "end": 473.88,
            "text": "一个项目该不该投，NPV 和 IRR 怎么用。"
        },
        {
            "start": 473.88,
            "end": 475.54,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 475.54,
            "end": 478.78,
            "text": "1. 三种保持创始人控制权的机制："
        },
        {
            "start": 478.78,
            "end": 482.82,
            "text": "AB 股、一致行动人、有限合伙持股平台"
        },
        {
            "start": 482.82,
            "end": 486.34,
            "text": "2. 股权分配原则：有绝对大股东、"
        },
        {
            "start": 486.34,
            "end": 490.34,
            "text": "差异化分配、预留期权池、设置 vesting"
        },
        {
            "start": 490.34,
            "end": 493.74,
            "text": "3. Term Sheet 五大关键条款：估值、"
        },
        {
            "start": 493.74,
            "end": 497.24,
            "text": "优先清算权、反稀释、董事会席位、"
        },
        {
            "start": 497.24,
            "end": 498.36,
            "text": "保护性条款"
        },
        {
            "start": 498.36,
            "end": 502.78000000000003,
            "text": "4. 核心原则：估值不是最重要的，条款才是"
        },
        {
            "start": 502.78000000000003,
            "end": 507.64,
            "text": "1. 如果你是创始人，你会选择哪种方式来保持控制权？"
        },
        {
            "start": 507.64,
            "end": 508.26,
            "text": "为什么？"
        },
        {
            "start": 508.26,
            "end": 510.58,
            "text": "2. 优先清算权中，"
        },
        {
            "start": 510.58,
            "end": 516.12,
            "text": "1x 非参与和 1x 参与分配对创始人的影响有多大差异？"
        },
        {
            "start": 516.12,
            "end": 521.84,
            "text": "3. 你觉得 AI 在融资谈判的哪些环节可以提供最大的帮助？"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 9.082,
        "index": 0
    },
    {
        "start": 9.082,
        "end": 64.939,
        "index": 1
    },
    {
        "start": 64.939,
        "end": 121.476,
        "index": 2
    },
    {
        "start": 121.476,
        "end": 177.446,
        "index": 3
    },
    {
        "start": 177.446,
        "end": 231.258,
        "index": 4
    },
    {
        "start": 231.258,
        "end": 287.569,
        "index": 5
    },
    {
        "start": 287.569,
        "end": 349.782,
        "index": 6
    },
    {
        "start": 349.782,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-09.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把融资、控制权和长期激励放在同一张桌子上考虑。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-09.html?entry={entry}", secondaryHref: "./lesson-finance-09.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-08", coachSource: "./ai-coach.html?source=lesson-finance-08" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于股权结构：控制权、激励与长期治理的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "股权结构：控制权、激励与长期治理", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-09.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
