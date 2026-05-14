(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的数据思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal09 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第9课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块七 · 法律、合规与风险',
      lessonTitle: "第9课：案例：AI 公司的法律踩坑实录",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep105-case-legal-pitfalls/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：AI 公司的法律踩坑实录", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-9", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-10.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "公司法基础：企业设立与法人治理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "合同法要点：签合同前必知的事",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "知识产权保护：AI 时代的 IP 新问题",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "数据隐私与合规：GDPR 与个人信息保护法",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 法规全景：全球 AI 监管趋势",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 伦理与算法治理：负责任地使用 AI",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "劳动法：AI 替代岗位的法律与伦理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：AI 公司的法律踩坑实录",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "法律工具箱：AI 时代管理者必备的法律清单",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-legal-10.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先识别风险，再设计动作",
                "body": "法律问题不能只靠事后救火，管理者要在业务设计、合同、数据和组织动作之前先看到风险。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "合规不是拖慢业务，而是保护业务可持续",
                "body": "好的合规框架能让企业少踩坑、少返工，也让团队在关键决策上更有边界感。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "AI 放大效率，也放大治理责任",
                "body": "当 AI 进入内容、数据、招聘、客服和决策流程，管理者必须同步建立新的责任边界。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 9/10", "建议下一节：法律工具箱：AI 时代管理者必备的法律清单", '也可以先整理这一节'], nextHref: "./lesson-legal-10.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-09", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson9", audioSource: './assets/audio/legal-ep105-case-legal-pitfalls.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep105-case-legal-pitfalls.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_01.png",
            "label": "案例：AI 公司的法律踩坑实录",
            "caption": "这一节会帮助你系统理解：案例：AI 公司的法律踩坑实录"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "一些平台（比如新闻网站）开始屏蔽 AI 爬虫，不允许 AI 公司抓取他们的内容。 对你的启示是什么？"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_04.png",
            "label": "常见误区与代价",
            "caption": "另一个案例：某大型科技公司的简历筛选 AI，因为训练数据中历史上男性员工比例高，导致 AI 系统性地给女性简历打低分。 公司在内部发现这个问题后悄悄放弃了这个系统。"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "意大利曾一度禁止了该 AI 服务。 多个国家的监管机构开始调查 AI 公司的数据保护措施。"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "如果你的企业依赖 AI 生成的内容做商业决策或者对外沟通，AI 的\"幻觉\"可能给你带来实际的法律后果。 比如你的 AI 销售助手给客户承诺了一个你无法兑现的条件。"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_07.png",
            "label": "本节行动提示",
            "caption": "第一，AI 定价和个性化策略要有底线。 差异化可以有，但不能是对老用户涨价。"
        },
        {
            "file": "legal-ep105-case-legal-pitfalls/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.66,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.66,
            "end": 4.08,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.08,
            "end": 8.14,
            "text": "今天讲几个 AI 公司真实的法律踩坑案例。"
        },
        {
            "start": 8.14,
            "end": 9.92,
            "text": "都是血的教训。"
        },
        {
            "start": 9.92,
            "end": 11.32,
            "text": "通过这些案例，"
        },
        {
            "start": 11.32,
            "end": 16.4,
            "text": "你可以更具体地理解 AI 法律风险到底长什么样子，"
        },
        {
            "start": 16.4,
            "end": 17.6,
            "text": "以及怎么避免。"
        },
        {
            "start": 17.6,
            "end": 20.82,
            "text": "第一个案例：AI 版权诉讼风暴。"
        },
        {
            "start": 20.82,
            "end": 24.14,
            "text": "全球多家 AI 公司面临了版权诉讼。"
        },
        {
            "start": 24.14,
            "end": 25.28,
            "text": "核心争议是："
        },
        {
            "start": 25.28,
            "end": 27.2,
            "text": "AI 公司在训练大模型的时候，"
        },
        {
            "start": 27.32,
            "end": 30.12,
            "text": "未经许可使用了大量受版权保护的内容，"
        },
        {
            "start": 30.12,
            "end": 32.68,
            "text": "文章、图片、代码、书籍。"
        },
        {
            "start": 33.14,
            "end": 36.2,
            "text": "内容创作者的立场是：\"你没有付费、"
        },
        {
            "start": 36.2,
            "end": 39.5,
            "text": "没有获得授权就用我的作品来训练你的 AI，"
        },
        {
            "start": 39.5,
            "end": 41.44,
            "text": "然后靠这个 AI 赚钱。"
        },
        {
            "start": 41.44,
            "end": 42.38,
            "text": "这是侵权。"
        },
        {
            "start": 42.38,
            "end": 42.800000000000004,
            "text": "\""
        },
        {
            "start": 42.9,
            "end": 44.16,
            "text": "AI 公司的立场是："
        },
        {
            "start": 44.16,
            "end": 45.92,
            "text": "\"我们是在做技术创新，"
        },
        {
            "start": 45.92,
            "end": 47.7,
            "text": "训练 AI 属于合理使用。"
        },
        {
            "start": 47.7,
            "end": 51.18,
            "text": "而且 AI 不是直接复制你的作品，是从中学习规律。"
        },
        {
            "start": 51.18,
            "end": 51.6,
            "text": "\""
        },
        {
            "start": 51.6,
            "end": 54.26,
            "text": "这些诉讼还在进行中，最终结果还不确定。"
        },
        {
            "start": 54.26,
            "end": 56.46,
            "text": "但已经产生了实际影响。"
        },
        {
            "start": 56.46,
            "end": 61.0,
            "text": "一些 AI 公司开始跟内容出版商签署授权协议，"
        },
        {
            "start": 61.0,
            "end": 63.72,
            "text": "付费使用内容来训练模型。"
        },
        {
            "start": 63.72,
            "end": 67.78,
            "text": "一些平台（比如新闻网站）开始屏蔽 AI 爬虫，"
        },
        {
            "start": 67.78,
            "end": 70.58,
            "text": "不允许 AI 公司抓取他们的内容。"
        },
        {
            "start": 70.58,
            "end": 72.8,
            "text": "对你的启示是什么？"
        },
        {
            "start": 72.8,
            "end": 73.5,
            "text": "第一，"
        },
        {
            "start": 73.74,
            "end": 76.22,
            "text": "如果你在用 AI 生成商业内容（图片、"
        },
        {
            "start": 76.22,
            "end": 77.16,
            "text": "文案、设计），"
        },
        {
            "start": 77.16,
            "end": 80.1,
            "text": "要知道这些内容可能存在版权争议。"
        },
        {
            "start": 80.1,
            "end": 84.56,
            "text": "不要把 AI 生成的内容当作完全没有法律风险的。"
        },
        {
            "start": 84.56,
            "end": 87.9,
            "text": "第二，如果你自己在训练 AI 模型，"
        },
        {
            "start": 87.9,
            "end": 90.92,
            "text": "确保你的训练数据是合法获取的。"
        },
        {
            "start": 90.92,
            "end": 93.58,
            "text": "开源数据、你自己创作的数据、"
        },
        {
            "start": 93.58,
            "end": 96.38,
            "text": "获得授权的数据，用这些来训练。"
        },
        {
            "start": 96.38,
            "end": 99.76,
            "text": "第二个案例：AI 招聘偏见诉讼。"
        },
        {
            "start": 99.76,
            "end": 103.22,
            "text": "纽约市在 2023 年生效了一条法律，"
        },
        {
            "start": 103.22,
            "end": 106.64,
            "text": "要求企业在使用 AI 做招聘决策时，"
        },
        {
            "start": 106.64,
            "end": 108.84,
            "text": "必须进行年度的偏见审计。"
        },
        {
            "start": 109.33000000000001,
            "end": 111.14,
            "text": "这条法律的背景是什么？"
        },
        {
            "start": 111.14,
            "end": 115.3,
            "text": "多个案例显示，AI 招聘工具存在系统性偏见。"
        },
        {
            "start": 115.3,
            "end": 119.46,
            "text": "有一家知名公司的 AI 面试评估工具，"
        },
        {
            "start": 119.46,
            "end": 122.76,
            "text": "通过分析候选人的视频面试来评分。"
        },
        {
            "start": 122.76,
            "end": 126.28,
            "text": "后来被发现，AI 对某些口音、"
        },
        {
            "start": 126.28,
            "end": 129.72,
            "text": "某些面部表情、某些说话方式有偏好，"
        },
        {
            "start": 129.72,
            "end": 133.06,
            "text": "而这些偏好跟种族和性别相关。"
        },
        {
            "start": 133.06,
            "end": 134.38,
            "text": "另一个案例："
        },
        {
            "start": 134.38,
            "end": 138.12,
            "text": "某大型科技公司的简历筛选 AI，"
        },
        {
            "start": 138.12,
            "end": 142.28,
            "text": "因为训练数据中历史上男性员工比例高，"
        },
        {
            "start": 142.28,
            "end": 146.02,
            "text": "导致 AI 系统性地给女性简历打低分。"
        },
        {
            "start": 146.02,
            "end": 150.3,
            "text": "公司在内部发现这个问题后悄悄放弃了这个系统。"
        },
        {
            "start": 150.3,
            "end": 152.18,
            "text": "对你的启示是什么？"
        },
        {
            "start": 152.18,
            "end": 155.1,
            "text": "第一，如果你在用 AI 做招聘、"
        },
        {
            "start": 155.1,
            "end": 157.4,
            "text": "绩效评估等涉及人的决策，"
        },
        {
            "start": 157.4,
            "end": 159.72,
            "text": "必须做偏见检测。"
        },
        {
            "start": 159.72,
            "end": 163.96,
            "text": "定期检查 AI 的决策在不同群体之间是否公平。"
        },
        {
            "start": 163.96,
            "end": 166.86,
            "text": "第二，保留人工审核环节。"
        },
        {
            "start": 166.86,
            "end": 172.08,
            "text": "AI 可以辅助筛选和排序，但关键决策要有人参与。"
        },
        {
            "start": 172.08,
            "end": 177.38,
            "text": "第三，在越来越多的地区，用 AI 做人事决策需要合规披露。"
        },
        {
            "start": 177.38,
            "end": 180.58,
            "text": "你需要告诉候选人你在使用 AI，"
        },
        {
            "start": 180.58,
            "end": 183.9,
            "text": "并且解释 AI 在决策中扮演的角色。"
        },
        {
            "start": 183.9,
            "end": 187.14,
            "text": "第三个案例：AI 数据泄露事件。"
        },
        {
            "start": 187.14,
            "end": 190.14,
            "text": "某知名 AI 公司发生了一次数据泄露。"
        },
        {
            "start": 190.14,
            "end": 191.24,
            "text": "由于系统漏洞，"
        },
        {
            "start": 191.24,
            "end": 195.66,
            "text": "部分用户的聊天记录标题和支付信息被其他用户看到了。"
        },
        {
            "start": 195.66,
            "end": 199.36,
            "text": "虽然泄露的范围有限，但引发了广泛关注。"
        },
        {
            "start": 199.36,
            "end": 201.36,
            "text": "用户突然意识到："
        },
        {
            "start": 201.36,
            "end": 204.58,
            "text": "他们跟 AI 对话的内容是被存储的，"
        },
        {
            "start": 204.58,
            "end": 206.1,
            "text": "而且可能被泄露。"
        },
        {
            "start": 206.1,
            "end": 208.66,
            "text": "这个事件之后发生了什么？"
        },
        {
            "start": 208.66,
            "end": 211.42,
            "text": "意大利曾一度禁止了该 AI 服务。"
        },
        {
            "start": 211.42,
            "end": 215.64,
            "text": "多个国家的监管机构开始调查 AI 公司的数据保护措施。"
        },
        {
            "start": 216.16000000000003,
            "end": 219.84,
            "text": "很多企业开始重新评估是否允许员工使用外部"
        },
        {
            "start": 219.84,
            "end": 221.94,
            "text": "AI 工具处理公司数据。"
        },
        {
            "start": 221.94,
            "end": 223.78,
            "text": "对你的启示是什么？"
        },
        {
            "start": 223.78,
            "end": 224.34,
            "text": "第一，"
        },
        {
            "start": 224.34,
            "end": 228.24,
            "text": "你的员工在使用外部 AI 工具时输入的任何信息，"
        },
        {
            "start": 228.24,
            "end": 230.3,
            "text": "都可能被存储和分析。"
        },
        {
            "start": 230.3,
            "end": 234.28,
            "text": "必须有明确的政策规定什么数据可以输入、什么不行。"
        },
        {
            "start": 234.28,
            "end": 237.38,
            "text": "第二，如果你在建自己的 AI 应用，"
        },
        {
            "start": 237.38,
            "end": 239.66,
            "text": "数据安全要从第一天就考虑。"
        },
        {
            "start": 239.66,
            "end": 241.86,
            "text": "不能等出了问题再补。"
        },
        {
            "start": 241.86,
            "end": 244.16,
            "text": "第三，选择 AI 服务商的时候，"
        },
        {
            "start": 244.16,
            "end": 247.62,
            "text": "要评估他们的数据保护能力和合规水平。"
        },
        {
            "start": 247.62,
            "end": 252.04,
            "text": "第四个案例：AI 生成虚假信息的法律后果。"
        },
        {
            "start": 252.04,
            "end": 254.46,
            "text": "有律师在法庭上引用了 AI"
        },
        {
            "start": 254.46,
            "end": 256.68,
            "text": "生成的\"判例\"来支持自己的论点。"
        },
        {
            "start": 256.68,
            "end": 262.12,
            "text": "结果法官核实后发现，这些判例根本不存在，是 AI 编造的。"
        },
        {
            "start": 262.12,
            "end": 266.06,
            "text": "这位律师面临了法庭处罚和职业声誉的严重损害。"
        },
        {
            "start": 266.06,
            "end": 269.78,
            "text": "这个案例虽然是个人行为，但对企业也有警示。"
        },
        {
            "start": 269.78,
            "end": 274.5,
            "text": "如果你的企业依赖 AI 生成的内容做商业决策或者对外沟通，"
        },
        {
            "start": 274.5,
            "end": 277.98,
            "text": "AI 的\"幻觉\"可能给你带来实际的法律后果。"
        },
        {
            "start": 277.98,
            "end": 283.46,
            "text": "比如你的 AI 销售助手给客户承诺了一个你无法兑现的条件。"
        },
        {
            "start": 283.46,
            "end": 287.6,
            "text": "比如你的 AI 生成的产品说明包含了虚假的性能参数。"
        },
        {
            "start": 287.6,
            "end": 291.42,
            "text": "这些都可能构成虚假宣传或者合同欺诈。"
        },
        {
            "start": 291.42,
            "end": 293.36,
            "text": "对你的启示是什么？"
        },
        {
            "start": 293.36,
            "end": 296.66,
            "text": "AI 的输出不能不经审核就对外使用。"
        },
        {
            "start": 296.66,
            "end": 298.94,
            "text": "特别是涉及事实性声明、承诺、"
        },
        {
            "start": 298.94,
            "end": 301.06,
            "text": "法律引用、数据引用的内容，"
        },
        {
            "start": 301.06,
            "end": 302.48,
            "text": "必须人工核实。"
        },
        {
            "start": 302.48,
            "end": 305.54,
            "text": "第五个案例：算法歧视和大数据杀熟。"
        },
        {
            "start": 305.54,
            "end": 309.92,
            "text": "在中国，多家平台被曝存在\"大数据杀熟\"的问题。"
        },
        {
            "start": 309.92,
            "end": 312.82,
            "text": "老用户看到的价格比新用户高，"
        },
        {
            "start": 312.82,
            "end": 315.54,
            "text": "会员看到的价格比非会员高。"
        },
        {
            "start": 315.54,
            "end": 318.05999999999995,
            "text": "这本质上是算法歧视："
        },
        {
            "start": 318.06,
            "end": 320.98,
            "text": "AI 根据用户的画像来差异化定价，"
        },
        {
            "start": 320.98,
            "end": 324.24,
            "text": "对价格不敏感的用户报更高的价格。"
        },
        {
            "start": 324.78,
            "end": 327.9,
            "text": "中国的《互联网信息服务算法推荐管理规"
        },
        {
            "start": 327.9,
            "end": 329.86,
            "text": "定》明确禁止了这种行为。"
        },
        {
            "start": 329.86,
            "end": 333.0,
            "text": "如果被查到，面临罚款和监管处罚。"
        },
        {
            "start": 333.0,
            "end": 335.06,
            "text": "更重要的是品牌伤害。"
        },
        {
            "start": 335.06,
            "end": 338.24,
            "text": "一旦用户发现你在\"杀熟\"，信任就崩了。"
        },
        {
            "start": 338.24,
            "end": 339.74,
            "text": "对你的启示是什么？"
        },
        {
            "start": 339.74,
            "end": 343.98,
            "text": "第一，AI 定价和个性化策略要有底线。"
        },
        {
            "start": 343.98,
            "end": 347.44,
            "text": "差异化可以有，但不能是对老用户涨价。"
        },
        {
            "start": 347.44,
            "end": 351.42,
            "text": "可以给新用户优惠，但不能对老用户收更高的价格。"
        },
        {
            "start": 351.42,
            "end": 354.42,
            "text": "第二，定期审计你的算法行为。"
        },
        {
            "start": 354.84000000000003,
            "end": 359.5,
            "text": "看看 AI 在实际运行中有没有产生你意想不到的歧视性结果。"
        },
        {
            "start": 359.5,
            "end": 362.98,
            "text": "好，总结一下今天讲的五个案例和启示。"
        },
        {
            "start": 362.98,
            "end": 366.12,
            "text": "版权诉讼：AI 训练数据要合法获取，"
        },
        {
            "start": 366.12,
            "end": 368.1,
            "text": "AI 生成内容有版权风险。"
        },
        {
            "start": 368.1,
            "end": 373.1,
            "text": "招聘偏见：AI 人事决策必须做偏见检测，保留人工审核。"
        },
        {
            "start": 373.56,
            "end": 378.36,
            "text": "数据泄露：制定 AI 使用政策，敏感数据不上传外部工具。"
        },
        {
            "start": 378.36,
            "end": 382.4,
            "text": "虚假信息：AI 输出必须人工核实再对外使用。"
        },
        {
            "start": 382.4,
            "end": 387.88,
            "text": "算法歧视：AI 定价和个性化有底线，定期审计算法行为。"
        },
        {
            "start": 388.3,
            "end": 390.46,
            "text": "下一期是模块八的最后一期："
        },
        {
            "start": 390.46,
            "end": 393.34,
            "text": "AI 时代管理者必备的法律工具箱。"
        },
        {
            "start": 393.34,
            "end": 395.28,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 395.28,
            "end": 400.8,
            "text": "1. 版权风险：AI 训练数据需合法，生成内容有争议"
        },
        {
            "start": 400.8,
            "end": 405.84,
            "text": "2. 招聘偏见：AI 人事决策需偏见审计+人工审核"
        },
        {
            "start": 405.84,
            "end": 410.1,
            "text": "3. 数据泄露：制定 AI 使用政策，敏感数据不外传"
        },
        {
            "start": 410.1,
            "end": 415.92,
            "text": "4. 幻觉风险：AI 输出必须核实，虚假信息有法律后果"
        },
        {
            "start": 415.92,
            "end": 421.18,
            "text": "5. 算法歧视：大数据杀熟违法，定期审计算法行为"
        },
        {
            "start": 421.18,
            "end": 425.26,
            "text": "1. 你的企业有没有明确的 AI 使用政策？"
        },
        {
            "start": 425.26,
            "end": 428.88,
            "text": "员工知道什么数据不能输入外部 AI 吗？"
        },
        {
            "start": 428.88,
            "end": 432.8,
            "text": "2. 如果你在用 AI 做客户相关的决策，"
        },
        {
            "start": 432.8,
            "end": 434.68,
            "text": "有没有做过偏见检测？"
        },
        {
            "start": 434.68,
            "end": 438.78,
            "text": "3. 你的 AI 生成内容有没有人工审核环节？"
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
], navigation: { nextLessonUrl: "./lesson-legal-10.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的数据经营判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-10.html?entry={entry}", secondaryHref: "./lesson-legal-10.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-09", coachSource: "./ai-coach.html?source=lesson-legal-09" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：AI 公司的法律踩坑实录的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：AI 公司的法律踩坑实录", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-10.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetalegal: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
