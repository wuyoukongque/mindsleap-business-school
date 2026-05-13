(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的财务思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的财务框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.finance01 = {
    shell: {
      documentTitle: "MindsLeap Business School · Finance 第1课",
      backLink: { href: './module-finance.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块二 · 财务与经营分析',
      lessonTitle: "第1课：三张财务报表：企业的体检报告",
      heroMeta: ['🎙 Finance 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀财务判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把财务框架，重新放回 AI 时代的经营现实里，形成更稳定的经营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的财务判断框架'] },
      player: { initialSlide: "./assets/slides/finance-ep01-financial-statements/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：三张财务报表：企业的体检报告", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '' },
      playerActions: { backToModuleHref: "./module-finance.html?entry=sequence#lesson-1", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个财务判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个经营环节开始应用，这个框架会落在哪里？', placeholder: '例如：定价、现金流、融资、预算、成本控制，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或决策优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的财务学习，最终都会回到资源配置与经营判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-finance-02.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "三张财务报表：企业的体检报告",
                "body": "先建立财务阅读的底层框架：资产负债表、利润表与现金流量表到底怎么看。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "关键财务指标：管理者必须盯住的几个数字",
                "body": "抓住几个最关键的数字，快速判断一家公司的健康度。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
] , nextLessonHref: "./lesson-finance-02.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-finance.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "先建立财务阅读的底层框架：资产负债表、利润表与现金流量表到底怎么看。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: '学员最需要带走的 4 个知识点', summaryCards: [
        {
                "eyebrow": "知识点 01",
                "title": "三张财务报表分别在看什么？",
                "body": "重要观点：资产负债表看家底，利润表看赚钱能力，现金流量表看真金白银。管理者不能只看一张表，而要把三张表放在一起判断企业状态。"
        },
        {
                "eyebrow": "知识点 02",
                "title": "读三张表时，最先该抓住什么？",
                "body": "重要观点：资产负债表先看资产质量、负债结构、资产负债率；利润表先看毛利率；现金流量表先看经营活动现金流。先抓关键点，才能快速形成经营判断。"
        },
        {
                "eyebrow": "知识点 03",
                "title": "为什么说利润不等于现金流？",
                "body": "重要观点：利润是会计概念，现金流才是真金白银。一个公司即使利润不错，也可能因为回款慢、支出重而出现现金压力，所以不能把赚钱和安全画等号。"
        },
        {
                "eyebrow": "知识点 04",
                "title": "一份报表里，哪些信号最值得警惕？",
                "body": "重要观点：利润好但现金流差、应收账款增长过快、库存积压、短期负债明显高于现金，都是企业在积累风险的早期信号，管理者必须尽早识别。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组财务框架学完整。", meta: ["当前完成：财务与经营分析 1/13", "建议下一节：关键财务指标：管理者必须盯住的几个数字", '也可以先整理这一节'], nextHref: "./lesson-finance-02.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-finance.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'finance', lessonId: "finance-01", modulePage: 'module-finance.html', progressNamespace: 'finance', progressLessonKey: "lesson1", audioSource: './assets/audio/finance-ep01-financial-statements.mp3?v=20260407-precisealign', vttSrc: './assets/subtitles/finance-ep01-financial-statements.vtt?v=20260407-precisealign', slideBasePath: './assets/slides/', slideVersion: '?v=20260407-finance-safezone-v6', subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "finance-ep01-financial-statements/slide_01.png",
            "label": "三张财务报表：企业的体检报告",
            "caption": "这一节会帮助你系统理解：三张财务报表：企业的体检报告"
        },
        {
            "file": "finance-ep01-financial-statements/slide_02.png",
            "label": "先从财务问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "finance-ep01-financial-statements/slide_03.png",
            "label": "核心框架",
            "caption": "它记录的是一段时间内，实际有多少钱流进来、多少钱流出去。 三个视角，缺一不可。"
        },
        {
            "file": "finance-ep01-financial-statements/slide_04.png",
            "label": "关键指标",
            "caption": "短期负债（一年内要还的）和长期负债的比例。 如果短期负债太多，而你的现金不够，可能会有流动性风险。"
        },
        {
            "file": "finance-ep01-financial-statements/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "毛利率低意味着你赚的大部分钱都被成本吃掉了。 不同行业的毛利率差别非常大。"
        },
        {
            "file": "finance-ep01-financial-statements/slide_06.png",
            "label": "回到你的企业",
            "caption": "所以有一句话说：\"Revenue is vanity, profit is sanity, but cash is reality.\" 收入是虚荣，利润是理性，"
        },
        {
            "file": "finance-ep01-financial-statements/slide_07.png",
            "label": "风险与提醒",
            "caption": "现金流量表：经营活动现金流为正且持续增长，投资活动在合理范围内，筹资活动没有过度依赖借款。 反过来，什么样的信号说明公司可能有问题？"
        },
        {
            "file": "finance-ep01-financial-statements/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.42,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.74,
            "end": 3.6,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.6,
            "end": 6.72,
            "text": "今天我们正式进入模块二：财务与金融。"
        },
        {
            "start": 6.72,
            "end": 9.06,
            "text": "我知道很多人一听到财务就头大。"
        },
        {
            "start": 9.06,
            "end": 13.58,
            "text": "但我跟你说，财务是每个管理者和创业者必须掌握的语言。"
        },
        {
            "start": 13.58,
            "end": 18.12,
            "text": "你不需要成为会计师，但你必须能读懂企业的财务报表。"
        },
        {
            "start": 18.12,
            "end": 18.72,
            "text": "为什么？"
        },
        {
            "start": 18.94,
            "end": 22.14,
            "text": "因为财务报表就是企业的体检报告。"
        },
        {
            "start": 22.14,
            "end": 25.66,
            "text": "你去医院体检，医生看你的血压、血糖、"
        },
        {
            "start": 25.98,
            "end": 28.88,
            "text": "心电图，就能大概判断你的健康状况。"
        },
        {
            "start": 28.88,
            "end": 31.28,
            "text": "企业的财务报表也是一样的，"
        },
        {
            "start": 31.28,
            "end": 34.36,
            "text": "它用数字告诉你：这家公司赚不赚钱？"
        },
        {
            "start": 34.36,
            "end": 35.48,
            "text": "有没有钱？"
        },
        {
            "start": 35.48,
            "end": 36.5,
            "text": "欠了多少债？"
        },
        {
            "start": 36.92,
            "end": 39.32,
            "text": "钱从哪里来，花到哪里去？"
        },
        {
            "start": 39.32,
            "end": 43.3,
            "text": "今天我们先把三张核心报表的基本逻辑搞清楚。"
        },
        {
            "start": 43.3,
            "end": 48.82,
            "text": "三张财务报表分别是：资产负债表、利润表、现金流量表。"
        },
        {
            "start": 48.82,
            "end": 51.62,
            "text": "我用一个比喻帮你记住它们的关系。"
        },
        {
            "start": 51.62,
            "end": 53.68,
            "text": "资产负债表是一张照片。"
        },
        {
            "start": 53.68,
            "end": 58.02,
            "text": "它拍的是某个时间点上，你公司拥有什么、欠了什么。"
        },
        {
            "start": 58.02,
            "end": 59.48,
            "text": "就像拍一张快照。"
        },
        {
            "start": 59.48,
            "end": 61.48,
            "text": "利润表是一段视频。"
        },
        {
            "start": 61.48,
            "end": 65.7,
            "text": "它记录的是一段时间内，你赚了多少、花了多少。"
        },
        {
            "start": 65.7,
            "end": 67.36,
            "text": "就像一段时间的回放。"
        },
        {
            "start": 67.36,
            "end": 69.58,
            "text": "现金流量表是银行流水。"
        },
        {
            "start": 69.58,
            "end": 71.84,
            "text": "它记录的是一段时间内，"
        },
        {
            "start": 71.84,
            "end": 74.66,
            "text": "实际有多少钱流进来、多少钱流出去。"
        },
        {
            "start": 74.66,
            "end": 76.7,
            "text": "三个视角，缺一不可。"
        },
        {
            "start": 76.7,
            "end": 78.06,
            "text": "你只看利润表，"
        },
        {
            "start": 78.06,
            "end": 80.2,
            "text": "可能以为公司赚了很多钱，"
        },
        {
            "start": 80.2,
            "end": 83.44,
            "text": "但现金流量表告诉你其实钱还没收回来。"
        },
        {
            "start": 83.44,
            "end": 86.12,
            "text": "你只看资产负债表，觉得资产很多，"
        },
        {
            "start": 86.12,
            "end": 88.5,
            "text": "但利润表告诉你其实在亏损。"
        },
        {
            "start": 88.5,
            "end": 90.68000000000006,
            "text": "先说资产负债表，Balance Sheet。"
        },
        {
            "start": 90.68000000000006,
            "end": 95.0,
            "text": "核心公式非常简单：资产 = 负债 + 所有者权益。"
        },
        {
            "start": 95.52,
            "end": 99.38,
            "text": "左边是资产，就是你公司拥有的一切值钱的东西。"
        },
        {
            "start": 99.38,
            "end": 102.84,
            "text": "现金、应收账款、库存、设备、房产、专利。"
        },
        {
            "start": 103.34,
            "end": 104.62,
            "text": "右边分两部分。"
        },
        {
            "start": 104.62,
            "end": 106.5,
            "text": "负债就是你欠别人的钱。"
        },
        {
            "start": 106.5,
            "end": 110.28,
            "text": "银行贷款、应付账款、员工工资还没发的。"
        },
        {
            "start": 110.28,
            "end": 114.46,
            "text": "所有者权益就是股东投的钱加上公司历年积累的利润。"
        },
        {
            "start": 114.9,
            "end": 116.74,
            "text": "这个等式永远是平衡的，"
        },
        {
            "start": 116.74,
            "end": 119.32,
            "text": "因为你拥有的东西要么是借来的，"
        },
        {
            "start": 119.32,
            "end": 120.74,
            "text": "要么是股东的。"
        },
        {
            "start": 120.74,
            "end": 122.18,
            "text": "这就是为什么叫\"平衡表\"。"
        },
        {
            "start": 122.18,
            "end": 125.92,
            "text": "读资产负债表的时候，你要关注几个关键点。"
        },
        {
            "start": 125.92,
            "end": 127.2,
            "text": "资产的质量。"
        },
        {
            "start": 127.2,
            "end": 129.48,
            "text": "不是所有资产都是好资产。"
        },
        {
            "start": 129.48,
            "end": 134.16,
            "text": "如果应收账款很高，意味着你卖了东西但钱还没收回来。"
        },
        {
            "start": 134.16,
            "end": 137.86,
            "text": "如果库存很高，意味着东西卖不出去积压了。"
        },
        {
            "start": 137.86,
            "end": 138.84,
            "text": "负债的结构。"
        },
        {
            "start": 138.84,
            "end": 142.32,
            "text": "短期负债（一年内要还的）和长期负债的比例。"
        },
        {
            "start": 142.84,
            "end": 145.96,
            "text": "如果短期负债太多，而你的现金不够，"
        },
        {
            "start": 145.96,
            "end": 147.58,
            "text": "可能会有流动性风险。"
        },
        {
            "start": 147.58,
            "end": 148.8,
            "text": "资产负债率。"
        },
        {
            "start": 148.8,
            "end": 150.92,
            "text": "就是负债除以总资产。"
        },
        {
            "start": 150.92,
            "end": 154.38,
            "text": "这个比率太高说明杠杆太大，风险高。"
        },
        {
            "start": 154.38,
            "end": 158.42,
            "text": "太低可能说明太保守，没有充分利用财务杠杆。"
        },
        {
            "start": 158.42,
            "end": 160.64,
            "text": "再说利润表，Income Statement。"
        },
        {
            "start": 160.64,
            "end": 164.76,
            "text": "利润表回答一个问题：这段时间你赚了多少钱？"
        },
        {
            "start": 164.76,
            "end": 169.12,
            "text": "核心结构是：收入 - 成本 - 费用 = 利润。"
        },
        {
            "start": 169.12,
            "end": 170.94,
            "text": "但利润有好几层。"
        },
        {
            "start": 170.94,
            "end": 174.28,
            "text": "营业收入 - 营业成本 = 毛利润。"
        },
        {
            "start": 174.28,
            "end": 178.02,
            "text": "这告诉你，你的产品或服务本身赚不赚钱。"
        },
        {
            "start": 178.02,
            "end": 183.04,
            "text": "毛利润 - 销售费用 - 管理费用 - 研发费用 = 营业利润。"
        },
        {
            "start": 183.04,
            "end": 186.52,
            "text": "这告诉你，算上运营开支之后还赚不赚钱。"
        },
        {
            "start": 186.52,
            "end": 190.0,
            "text": "营业利润 + 其他收入 - 税 = 净利润。"
        },
        {
            "start": 190.0,
            "end": 191.78,
            "text": "这是最终到手的利润。"
        },
        {
            "start": 191.78,
            "end": 194.3,
            "text": "读利润表最重要的指标是什么？"
        },
        {
            "start": 194.3,
            "end": 195.11200000000002,
            "text": "毛利率。"
        },
        {
            "start": 195.11200000000002,
            "end": 198.52,
            "text": "毛利率 = 毛利润 / 营业收入。"
        },
        {
            "start": 198.52,
            "end": 202.28,
            "text": "这个指标直接反映了你的产品有多少定价空间。"
        },
        {
            "start": 202.28,
            "end": 206.26,
            "text": "毛利率高意味着你的产品成本低或者定价高，"
        },
        {
            "start": 206.26,
            "end": 208.38,
            "text": "有更多的钱可以花在研发、"
        },
        {
            "start": 208.38,
            "end": 209.88,
            "text": "营销和其他方面。"
        },
        {
            "start": 209.88,
            "end": 214.22,
            "text": "毛利率低意味着你赚的大部分钱都被成本吃掉了。"
        },
        {
            "start": 214.22,
            "end": 217.0,
            "text": "不同行业的毛利率差别非常大。"
        },
        {
            "start": 217.0,
            "end": 220.58,
            "text": "软件行业的毛利率通常在70%到90%。"
        },
        {
            "start": 221.12,
            "end": 223.56,
            "text": "制造业可能只有20%到30%。"
        },
        {
            "start": 224.28,
            "end": 226.8,
            "text": "零售业可能在30%到50%。"
        },
        {
            "start": 227.36,
            "end": 230.0,
            "text": "所以你不能跨行业比毛利率。"
        },
        {
            "start": 230.0,
            "end": 234.14,
            "text": "但在同行业内，毛利率越高通常说明竞争力越强。"
        },
        {
            "start": 234.14,
            "end": 237.54,
            "text": "最后说现金流量表，Cash Flow Statement。"
        },
        {
            "start": 237.54,
            "end": 240.24,
            "text": "很多人会问：利润和现金流有什么区别？"
        },
        {
            "start": 240.24,
            "end": 241.4,
            "text": "不都是赚钱吗？"
        },
        {
            "start": 241.4,
            "end": 242.8,
            "text": "区别大了。"
        },
        {
            "start": 242.8,
            "end": 245.64,
            "text": "利润是会计概念，现金流是真金白银。"
        },
        {
            "start": 245.64,
            "end": 246.6,
            "text": "举个例子。"
        },
        {
            "start": 246.6,
            "end": 249.82,
            "text": "你这个月卖了一百万的货，客户说下个月付款。"
        },
        {
            "start": 249.82,
            "end": 252.64,
            "text": "在利润表上，你这个月有一百万的收入。"
        },
        {
            "start": 252.64,
            "end": 255.84,
            "text": "但在现金流上，你这个月一分钱没收到。"
        },
        {
            "start": 255.84,
            "end": 257.16,
            "text": "再举个例子。"
        },
        {
            "start": 257.16,
            "end": 260.54,
            "text": "你买了一台一百万的设备，按五年折旧。"
        },
        {
            "start": 260.54,
            "end": 264.36,
            "text": "在利润表上，你每年只扣二十万的折旧费用。"
        },
        {
            "start": 264.36,
            "end": 268.78,
            "text": "但在现金流上，你买设备的那个月一百万就出去了。"
        },
        {
            "start": 268.78,
            "end": 270.28,
            "text": "所以有一句话说："
        },
        {
            "start": 270.28,
            "end": 276.44,
            "text": "\"Revenue is vanity, profit is sanity, but cash is reality.\" 收入是虚荣，"
        },
        {
            "start": 276.44,
            "end": 279.96,
            "text": "利润是理性，但现金才是现实。"
        },
        {
            "start": 279.96,
            "end": 282.22,
            "text": "现金流量表分三个部分。"
        },
        {
            "start": 282.22,
            "end": 283.76,
            "text": "经营活动现金流。"
        },
        {
            "start": 283.76,
            "end": 285.46,
            "text": "做生意进进出出的钱。"
        },
        {
            "start": 285.46,
            "end": 288.68,
            "text": "收到客户的货款、付给供应商的钱、发工资。"
        },
        {
            "start": 288.68,
            "end": 290.2,
            "text": "这个应该是正的。"
        },
        {
            "start": 290.2,
            "end": 293.0,
            "text": "如果经营活动现金流长期为负，"
        },
        {
            "start": 293.0,
            "end": 295.7,
            "text": "说明你的核心业务本身不产生现金，"
        },
        {
            "start": 295.7,
            "end": 296.7,
            "text": "这很危险。"
        },
        {
            "start": 296.7,
            "end": 298.24,
            "text": "投资活动现金流。"
        },
        {
            "start": 298.24,
            "end": 300.56,
            "text": "买设备、买资产、做投资。"
        },
        {
            "start": 300.56,
            "end": 303.82,
            "text": "这个通常是负的，因为你在花钱投资未来。"
        },
        {
            "start": 303.82,
            "end": 305.46,
            "text": "筹资活动现金流。"
        },
        {
            "start": 305.46,
            "end": 307.18,
            "text": "借钱、还钱、融资、分红。"
        },
        {
            "start": 307.18,
            "end": 311.48,
            "text": "借钱和融资进来是正的，还钱和分红出去是负的。"
        },
        {
            "start": 311.48,
            "end": 313.0,
            "text": "好，三张报表讲完了。"
        },
        {
            "start": 313.0,
            "end": 314.82,
            "text": "现在我帮你把它们串起来。"
        },
        {
            "start": 314.82,
            "end": 316.82,
            "text": "一个健康的公司应该是什么样的？"
        },
        {
            "start": 316.82,
            "end": 320.16,
            "text": "资产负债表：资产质量高（现金充裕、"
        },
        {
            "start": 320.16,
            "end": 322.56,
            "text": "应收账款可控、库存合理），"
        },
        {
            "start": 322.56,
            "end": 324.1,
            "text": "负债率适中。"
        },
        {
            "start": 324.1,
            "end": 328.98,
            "text": "利润表：收入持续增长，毛利率稳定或上升，净利润为正。"
        },
        {
            "start": 328.98,
            "end": 330.3,
            "text": "现金流量表："
        },
        {
            "start": 330.3,
            "end": 332.92,
            "text": "经营活动现金流为正且持续增长，"
        },
        {
            "start": 332.92,
            "end": 334.76,
            "text": "投资活动在合理范围内，"
        },
        {
            "start": 334.76,
            "end": 337.02,
            "text": "筹资活动没有过度依赖借款。"
        },
        {
            "start": 337.02,
            "end": 340.66,
            "text": "反过来，什么样的信号说明公司可能有问题？"
        },
        {
            "start": 340.66,
            "end": 345.26,
            "text": "利润看起来不错但经营现金流为负——可能是虚假繁荣，"
        },
        {
            "start": 345.26,
            "end": 346.74,
            "text": "钱还没收回来。"
        },
        {
            "start": 346.74,
            "end": 350.16,
            "text": "应收账款增速远超收入增速——可能是放"
        },
        {
            "start": 350.16,
            "end": 352.16,
            "text": "松了收款标准来冲业绩。"
        },
        {
            "start": 352.16,
            "end": 355.38,
            "text": "库存大幅增加——可能是产品卖不动了。"
        },
        {
            "start": 355.38,
            "end": 358.64,
            "text": "短期负债远超现金——可能面临流动性危机。"
        },
        {
            "start": 358.64,
            "end": 361.34,
            "text": "这些信号，你读懂了报表就能看到。"
        },
        {
            "start": 361.34,
            "end": 364.94,
            "text": "这就是为什么财务报表是管理者的必修课。"
        },
        {
            "start": 364.94,
            "end": 366.84,
            "text": "好，今天的思考题。"
        },
        {
            "start": 366.84,
            "end": 367.26,
            "text": "第一，"
        },
        {
            "start": 367.26,
            "end": 370.8,
            "text": "找到你公司最近一个季度或一年的三张报表，"
        },
        {
            "start": 370.8,
            "end": 372.59999999999997,
            "text": "花十五分钟浏览一遍。"
        },
        {
            "start": 372.59999999999997,
            "end": 375.6,
            "text": "看看你能不能识别出上面提到的关键指标。"
        },
        {
            "start": 375.6,
            "end": 377.96,
            "text": "第二，你的毛利率是多少？"
        },
        {
            "start": 377.96,
            "end": 380.28,
            "text": "在同行业里是高还是低？"
        },
        {
            "start": 380.28,
            "end": 383.76,
            "text": "第三，你的经营活动现金流是正还是负？"
        },
        {
            "start": 383.76,
            "end": 385.8,
            "text": "如果是负的，原因是什么？"
        },
        {
            "start": 385.8,
            "end": 386.92,
            "text": "总结一下。"
        },
        {
            "start": 386.92,
            "end": 388.84,
            "text": "第一，三张财务报表："
        },
        {
            "start": 388.84,
            "end": 391.48,
            "text": "资产负债表是快照，利润表是回放，"
        },
        {
            "start": 391.48,
            "end": 393.64,
            "text": "现金流量表是银行流水。"
        },
        {
            "start": 393.64,
            "end": 396.7,
            "text": "第二，资产负债表看你有什么、欠什么。"
        },
        {
            "start": 396.7,
            "end": 398.5,
            "text": "利润表看你赚不赚钱。"
        },
        {
            "start": 399.04,
            "end": 401.48,
            "text": "现金流量表看你有没有真金白银。"
        },
        {
            "start": 401.48,
            "end": 403.74,
            "text": "第三，利润不等于现金流。"
        },
        {
            "start": 403.74,
            "end": 405.8,
            "text": "赚钱的公司也可能缺现金。"
        },
        {
            "start": 405.8,
            "end": 407.22,
            "text": "现金才是reality。"
        },
        {
            "start": 407.22,
            "end": 409.6,
            "text": "第四，关键警示信号："
        },
        {
            "start": 409.6,
            "end": 412.22,
            "text": "利润好但现金流差、应收飙升、"
        },
        {
            "start": 412.22,
            "end": 414.78,
            "text": "库存积压、短期负债远超现金。"
        },
        {
            "start": 414.78,
            "end": 417.72,
            "text": "下一期我们深入聊关键财务指标。"
        },
        {
            "start": 417.72,
            "end": 419.04,
            "text": "ROE、毛利率、"
        },
        {
            "start": 419.04,
            "end": 421.64,
            "text": "资产负债率这些数字到底怎么看，"
        },
        {
            "start": 421.64,
            "end": 424.56,
            "text": "怎么用它们快速判断一家公司的健康度。"
        },
        {
            "start": 424.56,
            "end": 425.96,
            "text": "好，今天就到这里。"
        },
        {
            "start": 425.96,
            "end": 427.78,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.6,
        "index": 0
    },
    {
        "start": 3.6,
        "end": 39.32,
        "index": 1
    },
    {
        "start": 39.32,
        "end": 88.5,
        "index": 2
    },
    {
        "start": 88.5,
        "end": 158.42,
        "index": 3
    },
    {
        "start": 158.42,
        "end": 234.14,
        "index": 4
    },
    {
        "start": 234.14,
        "end": 311.48,
        "index": 5
    },
    {
        "start": 311.48,
        "end": 385.8,
        "index": 6
    },
    {
        "start": 385.8,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-finance-02.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的财务经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "先建立财务阅读的底层框架：资产负债表、利润表与现金流量表到底怎么看。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是财务判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的财务判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-finance-02.html?entry={entry}", secondaryHref: "./lesson-finance-02.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-finance-01", coachSource: "./ai-coach.html?source=lesson-finance-01" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于三张财务报表：企业的体检报告的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "三张财务报表：企业的体检报告", module: '财务与经营分析' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-finance-02.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-finance.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
