(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的项目思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的 综合项目方法真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的项目判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.capstone02 = {
    shell: {
      documentTitle: "MindsLeap Business School · Capstone 第2课",
      backLink: { href: './module-capstone.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块十 · 综合实战与毕业项目',
      lessonTitle: "第2课：案例复盘：一家公司的全方位诊断",
      heroMeta: ['🎙 Capstone 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀项目判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立 综合项目框架，而不是一上来就陷入零散课程知识。", meta: ["预计时长：约 7 分钟", '你将获得：一个可带回业务现场使用的 综合实战框架'] },
      player: { initialSlide: "./assets/slides/capstone-ep116-case-review/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例复盘：一家公司的全方位诊断", subtitle: '边听边看重点，学完后把今天的方法带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-capstone.html?entry=sequence#lesson-2", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个 综合项目方法最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个方法会落在哪里？', placeholder: '例如：行业研究、公司诊断、策略制定、方案呈现、复盘迭代，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的 项目推进优先级？', placeholder: '这个方法会让你多做什么、少做什么，或者重新排序什么？', tip: '真正有价值的 综合实战学习，最终都会回到项目设计与方案表达。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-capstone-03.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "商业分析全流程：从行业研究到战略建议",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "案例复盘：一家公司的全方位诊断",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "你的毕业项目（上）：问题定义与数据收集",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 4,
                "title": "你的毕业项目（中）：分析与策略制定",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "你的毕业项目（下）：方案呈现与 AI 点评",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "毕业寄语：AI 时代的终身学习者",
                "body": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-capstone-03.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-capstone.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个项目判断", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "从真实问题出发",
                "body": "毕业项目不是再听一遍知识点，而是把一个真实业务问题定义清楚、拆开、验证并形成方案。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "让证据支撑判断",
                "body": "好的商业分析要把行业、用户、财务、运营和组织线索串起来，而不是只给一个漂亮结论。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "把方案讲给人听",
                "body": "最终产出要能被团队理解、讨论和执行，所以呈现结构与 AI 点评同样重要。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组 综合项目框架学完整。", meta: ["当前完成：综合实战与毕业项目 2/6", "建议下一节：你的毕业项目（上）：问题定义与数据收集", '也可以先整理这一节'], nextHref: "./lesson-capstone-03.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-capstone.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'capstone', lessonId: "capstone-02", modulePage: 'module-capstone.html', progressNamespace: 'capstone', progressLessonKey: "lesson2", audioSource: './assets/audio/capstone-ep116-case-review.mp3?v=20260515-capstone-01a', vttSrc: './assets/subtitles/capstone-ep116-case-review.vtt?v=20260515-capstone-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260515-capstone-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "capstone-ep116-case-review/slide_01.png",
            "label": "案例复盘：一家公司的全方位诊断",
            "caption": "这一节会帮助你系统理解：案例复盘：一家公司的全方位诊断"
        },
        {
            "file": "capstone-ep116-case-review/slide_02.png",
            "label": "项目任务与判断标准",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "capstone-ep116-case-review/slide_03.png",
            "label": "核心分析框架",
            "caption": "中国的企业级 SaaS 市场整体还在增长，但增速也在放缓。 更重要的变化是：AI 能力成为了企业 SaaS 的标配。"
        },
        {
            "file": "capstone-ep116-case-review/slide_04.png",
            "label": "证据与材料组织",
            "caption": "但获客成本在过去一年上升了百分之四十。 原因是竞争加剧，关键词的竞价越来越贵。"
        },
        {
            "file": "capstone-ep116-case-review/slide_05.png",
            "label": "策略形成与取舍",
            "caption": "客户遇到问题得不到及时支持，满意度在下降。 第三，产品的易用性需要改善，新功能加得太快但打磨不够。"
        },
        {
            "file": "capstone-ep116-case-review/slide_06.png",
            "label": "呈现与反馈方式",
            "caption": "暂停新功能开发三个月，集中精力打磨现有功能的深度和体验。 特别是聚焦行业的核心功能要做到行业最佳。"
        },
        {
            "file": "capstone-ep116-case-review/slide_07.png",
            "label": "本节行动提示",
            "caption": "这份报告可以用来跟管理团队讨论、跟投资人沟通、或者作为年度战略规划的基础。 好，总结一下这个案例。"
        },
        {
            "file": "capstone-ep116-case-review/slide_08.png",
            "label": "学员最需要带走的 3 个项目判断",
            "caption": "学完后，最重要的是把今天的 综合项目方法带回你的业务现场。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.52,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.52,
            "end": 3.14,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.14,
            "end": 7.56,
            "text": "今天用一个完整的案例走一遍上期讲的商业分析七步法。"
        },
        {
            "start": 7.56,
            "end": 10.22,
            "text": "案例综合了多家真实企业的情况。"
        },
        {
            "start": 10.22,
            "end": 14.08,
            "text": "主角是一家做企业级 SaaS 产品的公司。"
        },
        {
            "start": 14.08,
            "end": 17.16,
            "text": "产品是一套 AI 驱动的客户管理系统。"
        },
        {
            "start": 17.16,
            "end": 21.48,
            "text": "成立三年，员工八十人，年营收约两千万。"
        },
        {
            "start": 21.48,
            "end": 26.44,
            "text": "过去一年增长放缓，创始人想找到原因并制定下一步策略。"
        },
        {
            "start": 26.44,
            "end": 28.2,
            "text": "第一步：定义问题。"
        },
        {
            "start": 28.2,
            "end": 29.22,
            "text": "创始人说："
        },
        {
            "start": 29.22,
            "end": 31.399999999999995,
            "text": "\"我们去年增长了百分之五十，"
        },
        {
            "start": 31.4,
            "end": 34.239999999999995,
            "text": "今年到现在只增长了百分之十五。"
        },
        {
            "start": 34.24,
            "end": 36.16,
            "text": "增长明显放缓了。"
        },
        {
            "start": 36.16,
            "end": 36.58,
            "text": "\""
        },
        {
            "start": 36.58,
            "end": 38.8,
            "text": "细化问题：增长放缓体现在哪些方面？"
        },
        {
            "start": 38.8,
            "end": 40.54,
            "text": "是新客户减少了？"
        },
        {
            "start": 40.54,
            "end": 42.86,
            "text": "还是老客户的续费率下降了？"
        },
        {
            "start": 42.86,
            "end": 44.4,
            "text": "还是客单价降了？"
        },
        {
            "start": 44.4,
            "end": 47.24,
            "text": "是所有产品线都放缓还是某个？"
        },
        {
            "start": 47.24,
            "end": 48.86,
            "text": "用数据来回答。"
        },
        {
            "start": 48.86,
            "end": 51.980000000000004,
            "text": "新客户获取量同比下降了百分之二十。"
        },
        {
            "start": 51.980000000000004,
            "end": 55.599999999999994,
            "text": "老客户续费率从百分之八十五降到了百分之七十五。"
        },
        {
            "start": 55.6,
            "end": 57.24,
            "text": "平均客单价基本不变。"
        },
        {
            "start": 57.24,
            "end": 61.2,
            "text": "核心问题被拆解成了两个：新客获取为什么下降？"
        },
        {
            "start": 61.2,
            "end": 62.78,
            "text": "续费率为什么下降？"
        },
        {
            "start": 62.78,
            "end": 64.84,
            "text": "第二步：行业和市场分析。"
        },
        {
            "start": 65.38,
            "end": 70.32,
            "text": "中国的企业级 SaaS 市场整体还在增长，但增速也在放缓。"
        },
        {
            "start": 70.32,
            "end": 75.47999999999999,
            "text": "更重要的变化是：AI 能力成为了企业 SaaS 的标配。"
        },
        {
            "start": 75.48,
            "end": 77.96,
            "text": "几乎所有的竞品都加入了 AI 功能。"
        },
        {
            "start": 78.39999999999999,
            "end": 82.16,
            "text": "三年前，这家公司的 AI 功能是差异化优势。"
        },
        {
            "start": 82.77999999999999,
            "end": 86.64,
            "text": "现在，AI 功能不再是差异化，而是基础要求。"
        },
        {
            "start": 86.64,
            "end": 88.14,
            "text": "竞争格局方面。"
        },
        {
            "start": 88.14,
            "end": 91.0,
            "text": "两个大的竞品在过去一年加大了投入，"
        },
        {
            "start": 91.0,
            "end": 93.1,
            "text": "推出了更低价的入门版本，"
        },
        {
            "start": 93.1,
            "end": 95.3,
            "text": "抢走了不少中小企业客户。"
        },
        {
            "start": 95.3,
            "end": 98.68,
            "text": "同时有三到四家新创公司进入市场，"
        },
        {
            "start": 98.68,
            "end": 101.04,
            "text": "主打更垂直的行业解决方案。"
        },
        {
            "start": 101.04,
            "end": 102.28,
            "text": "客户需求方面。"
        },
        {
            "start": 102.28,
            "end": 103.5,
            "text": "企业客户对 SaaS"
        },
        {
            "start": 103.5,
            "end": 107.56,
            "text": "产品的要求从\"功能够用\"转向了\"深度解决行业问题\"。"
        },
        {
            "start": 107.56,
            "end": 109.92,
            "text": "通用型产品的吸引力在下降，"
        },
        {
            "start": 109.92,
            "end": 112.42,
            "text": "垂直行业型产品的需求在上升。"
        },
        {
            "start": 112.42,
            "end": 114.316,
            "text": "第三步：内部诊断。"
        },
        {
            "start": 114.316,
            "end": 115.28,
            "text": "财务维度。"
        },
        {
            "start": 115.28,
            "end": 118.14,
            "text": "营收增长放缓但还在增长。"
        },
        {
            "start": 118.14,
            "end": 121.9,
            "text": "毛利率从百分之七十降到了百分之六十，"
        },
        {
            "start": 121.9,
            "end": 124.28,
            "text": "因为 AI 功能的计算成本在上升。"
        },
        {
            "start": 124.28,
            "end": 128.36,
            "text": "现金流偏紧，目前还有十二个月的现金储备。"
        },
        {
            "start": 128.36,
            "end": 129.54,
            "text": "营销维度。"
        },
        {
            "start": 129.54,
            "end": 132.1,
            "text": "过去主要靠线上投放获客。"
        },
        {
            "start": 132.1,
            "end": 135.92,
            "text": "但获客成本在过去一年上升了百分之四十。"
        },
        {
            "start": 135.92,
            "end": 139.32,
            "text": "原因是竞争加剧，关键词的竞价越来越贵。"
        },
        {
            "start": 139.32,
            "end": 142.24,
            "text": "内容营销和口碑推荐的占比很低。"
        },
        {
            "start": 142.24,
            "end": 143.3,
            "text": "产品维度。"
        },
        {
            "start": 143.3,
            "end": 146.6,
            "text": "产品功能比较全面，但在某些行业的深度不够。"
        },
        {
            "start": 146.6,
            "end": 148.88,
            "text": "客户反馈最多的问题是："
        },
        {
            "start": 148.88,
            "end": 150.42,
            "text": "\"你们的产品什么都能做，"
        },
        {
            "start": 150.42,
            "end": 152.24,
            "text": "但在我们行业里不够专业。"
        },
        {
            "start": 152.24,
            "end": 152.66,
            "text": "\""
        },
        {
            "start": 152.66,
            "end": 153.58,
            "text": "组织维度。"
        },
        {
            "start": 153.58,
            "end": 156.16,
            "text": "团队八十人，其中三十人是研发。"
        },
        {
            "start": 156.16,
            "end": 158.46,
            "text": "研发资源一直在做新功能，"
        },
        {
            "start": 158.46,
            "end": 161.78,
            "text": "但很少花时间优化已有功能的深度和体验。"
        },
        {
            "start": 161.78,
            "end": 164.32,
            "text": "销售团队的人均产出在下降。"
        },
        {
            "start": 164.32,
            "end": 166.5,
            "text": "第四步：问题归因。"
        },
        {
            "start": 166.5,
            "end": 169.86,
            "text": "把外部和内部的分析综合起来，归因如下。"
        },
        {
            "start": 169.86,
            "end": 172.06,
            "text": "新客获取下降的核心原因。"
        },
        {
            "start": 172.06,
            "end": 176.06,
            "text": "第一，获客渠道过度依赖线上投放，竞价成本飙升。"
        },
        {
            "start": 176.06,
            "end": 180.32,
            "text": "第二，产品的差异化在减弱，\"AI 功能\"不再是独特卖点。"
        },
        {
            "start": 180.32,
            "end": 184.1,
            "text": "第三，竞品推出低价入门版抢走了中小客户。"
        },
        {
            "start": 184.1,
            "end": 186.72,
            "text": "续费率下降的核心原因。"
        },
        {
            "start": 186.72,
            "end": 189.42,
            "text": "第一，产品在行业深度上不够，"
        },
        {
            "start": 189.42,
            "end": 190.86,
            "text": "客户觉得\"不够专业\"，"
        },
        {
            "start": 190.86,
            "end": 192.6,
            "text": "被垂直型竞品挖走。"
        },
        {
            "start": 192.6,
            "end": 196.18,
            "text": "第二，客户成功团队太薄弱，只有两个人。"
        },
        {
            "start": 196.18,
            "end": 199.66,
            "text": "客户遇到问题得不到及时支持，满意度在下降。"
        },
        {
            "start": 199.66,
            "end": 202.34,
            "text": "第三，产品的易用性需要改善，"
        },
        {
            "start": 202.34,
            "end": 204.86,
            "text": "新功能加得太快但打磨不够。"
        },
        {
            "start": 204.86,
            "end": 206.54,
            "text": "第五步：策略制定。"
        },
        {
            "start": 206.54,
            "end": 208.88,
            "text": "基于归因分析，制定以下策略。"
        },
        {
            "start": 208.88,
            "end": 212.3,
            "text": "策略一：聚焦两到三个行业做深做透。"
        },
        {
            "start": 212.3,
            "end": 215.02,
            "text": "不再做\"什么行业都能用\"的通用产品。"
        },
        {
            "start": 215.02,
            "end": 219.88,
            "text": "选择两到三个最有潜力的行业，深度定制行业解决方案。"
        },
        {
            "start": 219.88,
            "end": 221.42,
            "text": "选行业的标准："
        },
        {
            "start": 221.42,
            "end": 224.3,
            "text": "现有客户中哪个行业的客户最多、"
        },
        {
            "start": 224.3,
            "end": 226.54,
            "text": "续费率最高、反馈最好。"
        },
        {
            "start": 226.54,
            "end": 229.1,
            "text": "集中优势兵力做深这几个行业。"
        },
        {
            "start": 229.1,
            "end": 234.06,
            "text": "策略二：从\"投放获客\"转向\"内容加口碑获客\"。"
        },
        {
            "start": 234.06,
            "end": 236.24,
            "text": "降低线上投放的比例。"
        },
        {
            "start": 236.24,
            "end": 240.52,
            "text": "加大内容营销投入，行业报告、客户案例、专家分享。"
        },
        {
            "start": 240.52,
            "end": 244.18,
            "text": "建立客户推荐机制，老客户推荐新客户有奖励。"
        },
        {
            "start": 244.18,
            "end": 246.68,
            "text": "策略三：加强客户成功。"
        },
        {
            "start": 246.68,
            "end": 249.74,
            "text": "客户成功团队从两人扩展到五人。"
        },
        {
            "start": 249.74,
            "end": 251.56,
            "text": "建立客户健康度评分体系，"
        },
        {
            "start": 251.56,
            "end": 254.74,
            "text": "用 AI 自动监控客户的使用情况和满意度。"
        },
        {
            "start": 254.74,
            "end": 256.54,
            "text": "高风险客户主动干预。"
        },
        {
            "start": 256.54,
            "end": 259.76,
            "text": "策略四：产品从\"功能多\"转向\"体验深\"。"
        },
        {
            "start": 259.76,
            "end": 262.0,
            "text": "暂停新功能开发三个月，"
        },
        {
            "start": 262.0,
            "end": 264.96,
            "text": "集中精力打磨现有功能的深度和体验。"
        },
        {
            "start": 264.96,
            "end": 268.68,
            "text": "特别是聚焦行业的核心功能要做到行业最佳。"
        },
        {
            "start": 268.68,
            "end": 270.18,
            "text": "第六步：财务测算。"
        },
        {
            "start": 270.18,
            "end": 271.8,
            "text": "简单测算一下。"
        },
        {
            "start": 271.8,
            "end": 272.68,
            "text": "投入方面。"
        },
        {
            "start": 272.84,
            "end": 275.72,
            "text": "行业方案开发需要三到四个月的研发投入。"
        },
        {
            "start": 275.72,
            "end": 277.58,
            "text": "内容营销需要增加两个人。"
        },
        {
            "start": 277.58,
            "end": 279.24,
            "text": "客户成功团队增加三个人。"
        },
        {
            "start": 279.24,
            "end": 282.14,
            "text": "总的额外年度投入大约一百五十万。"
        },
        {
            "start": 282.14,
            "end": 283.56,
            "text": "预期回报方面。"
        },
        {
            "start": 283.56,
            "end": 284.6,
            "text": "基准情景："
        },
        {
            "start": 284.6,
            "end": 287.4714285714286,
            "text": "行业聚焦后客单价提升百分之二十，"
        },
        {
            "start": 287.4714285714286,
            "end": 290.6799999999999,
            "text": "续费率从百分之七十五回升到百分之八十五。"
        },
        {
            "start": 290.68,
            "end": 294.46000000000004,
            "text": "内容加口碑获客把获客成本降低百分之三十。"
        },
        {
            "start": 294.46000000000004,
            "end": 297.44000000000005,
            "text": "预计下一年营收增长百分之三十。"
        },
        {
            "start": 297.44000000000005,
            "end": 299.34,
            "text": "投入产出比是合理的。"
        },
        {
            "start": 299.34,
            "end": 300.76,
            "text": "额外投入一百五十万，"
        },
        {
            "start": 300.76,
            "end": 305.14,
            "text": "但如果营收增长百分之三十意味着增加约七百万营收。"
        },
        {
            "start": 305.14,
            "end": 307.04,
            "text": "第七步：方案呈现。"
        },
        {
            "start": 307.04,
            "end": 310.08,
            "text": "把以上分析整合成一份完整的报告。"
        },
        {
            "start": 310.08,
            "end": 311.42,
            "text": "执行摘要："
        },
        {
            "start": 311.42,
            "end": 315.28,
            "text": "增长放缓的核心原因是差异化减弱和获客渠道单一。"
        },
        {
            "start": 315.28,
            "end": 318.46,
            "text": "策略是聚焦行业做深、转变获客模式、"
        },
        {
            "start": 318.46,
            "end": 321.26,
            "text": "加强客户成功、打磨产品体验。"
        },
        {
            "start": 321.26,
            "end": 324.64,
            "text": "预计投入一百五十万，实现百分之三十的增长。"
        },
        {
            "start": 324.64,
            "end": 327.22,
            "text": "这份报告可以用来跟管理团队讨论、"
        },
        {
            "start": 327.22,
            "end": 328.36,
            "text": "跟投资人沟通、"
        },
        {
            "start": 328.36,
            "end": 330.86,
            "text": "或者作为年度战略规划的基础。"
        },
        {
            "start": 330.86,
            "end": 332.64,
            "text": "好，总结一下这个案例。"
        },
        {
            "start": 332.64,
            "end": 334.5,
            "text": "七步法的完整应用："
        },
        {
            "start": 334.5,
            "end": 338.86,
            "text": "定义问题（拆解增长放缓为新客下降和续费下降）、"
        },
        {
            "start": 338.86,
            "end": 341.64,
            "text": "行业分析（AI 不再是差异化、"
        },
        {
            "start": 341.64,
            "end": 345.0,
            "text": "竞争加剧）、内部诊断（获客成本高、"
        },
        {
            "start": 345.0,
            "end": 347.82,
            "text": "行业深度不够、客户成功薄弱）、"
        },
        {
            "start": 347.82,
            "end": 352.18,
            "text": "归因（差异化减弱加渠道单一加客户支持不足）、"
        },
        {
            "start": 352.18,
            "end": 355.12,
            "text": "策略（聚焦行业、转变获客、"
        },
        {
            "start": 355.12,
            "end": 357.4,
            "text": "加强客户成功、打磨产品）、"
        },
        {
            "start": 357.4,
            "end": 359.96,
            "text": "财务测算（投入一百五十万，"
        },
        {
            "start": 359.96,
            "end": 362.62,
            "text": "预期增长百分之三十）、方案呈现。"
        },
        {
            "start": 362.62,
            "end": 365.04,
            "text": "下一期我们开始你的毕业项目。"
        },
        {
            "start": 365.04,
            "end": 367.38,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 367.38,
            "end": 371.04,
            "text": "1. 完整案例演示商业分析七步法的实际应用"
        },
        {
            "start": 371.04,
            "end": 375.88,
            "text": "2. 关键发现：差异化减弱 加 获客渠道单一 加 客户成功薄弱"
        },
        {
            "start": 375.88,
            "end": 378.68,
            "text": "3. 核心策略：聚焦行业做深、"
        },
        {
            "start": 378.68,
            "end": 381.34,
            "text": "内容+口碑获客、加强客户成功"
        },
        {
            "start": 381.76000000000005,
            "end": 386.52,
            "text": "4. 投入 150 万预期增长 30%，投入产出比合理"
        },
        {
            "start": 386.52,
            "end": 390.08,
            "text": "1. 这个案例中的问题跟你的企业有没有相似之处？"
        },
        {
            "start": 391.26,
            "end": 395.66,
            "text": "2. \"从通用到垂直\"的策略转型有什么风险？"
        },
        {
            "start": 395.66,
            "end": 397.0,
            "text": "你怎么看？"
        },
        {
            "start": 397.0,
            "end": 402.42,
            "text": "3. 如果你是这家公司的创始人，你会优先执行哪个策略？"
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
], navigation: { nextLessonUrl: "./lesson-capstone-03.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的 综合项目判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是 综合项目框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的 综合项目框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-capstone-03.html?entry={entry}", secondaryHref: "./lesson-capstone-03.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-capstone-02", coachSource: "./ai-coach.html?source=lesson-capstone-02" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例复盘：一家公司的全方位诊断的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例复盘：一家公司的全方位诊断", module: '综合实战与毕业项目' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-capstone-03.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-capstone.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
