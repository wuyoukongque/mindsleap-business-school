(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的创新思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的创新框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的创新判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.innovation11 = {
    shell: {
      documentTitle: "MindsLeap Business School · Innovation 第11课",
      backLink: { href: './module-innovation.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块六 · 创新与创业',
      lessonTitle: "第11课：案例：传统行业加 AI 的成功转型",
      heroMeta: ['🎙 Innovation 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀创新判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立创新判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 12-14 分钟", '你将获得：一个可带回业务现场使用的创新判断框架'] },
      player: { initialSlide: "./assets/slides/innovation-ep84-case-traditional-ai/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：传统行业加 AI 的成功转型", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-innovation.html?entry=sequence#lesson-11", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个创新判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个创新环节开始应用，这个框架会落在哪里？', placeholder: '例如：细分、定位、内容、渠道、转化、留存，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的创新优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的创新学习，最终都会回到资源配置与创新判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-innovation-12.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "颠覆式创新：AI 如何加速颠覆周期",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "设计思维：AI 如何增强每一步",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "精益创业：AI 时代的 MVP 更快更便宜",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "第一性原理思维：AI 时代的创新基础",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "AI 原生创业：从第一天就用 AI 构建",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "产品市场匹配：AI 产品的 PMF 有什么不同",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "从零到一：AI 时代的创业路径",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "失败管理：从失败中提取价值",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：Midjourney——四个人如何做出十亿美金公司",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：Cursor 和 Perplexity——用 AI 重新定义品类",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "案例：传统行业加 AI 的成功转型",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 12,
                "title": "你的创新工作坊：用 AI 设计一个创新实验",
                "body": "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
], nextLessonHref: "./lesson-innovation-12.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-innovation.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
        {
                "eyebrow": "核心知识点 01",
                "title": "先把创新问题讲清楚",
                "body": "创新不是追热点，而是重新理解客户、技术、成本和组织能力之间的新组合。"
        },
        {
                "eyebrow": "核心知识点 02",
                "title": "AI 让试错更快，但也要求判断更稳",
                "body": "速度变快以后，真正稀缺的不是想法数量，而是筛选、验证和复盘能力。"
        },
        {
                "eyebrow": "核心知识点 03",
                "title": "用小实验替代大口号",
                "body": "每一节课都要落到一个可执行、可衡量、可复盘的创新动作上。"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组创新框架学完整。", meta: ["当前完成：创新与创业 11/12", "建议下一节：你的创新工作坊：用 AI 设计一个创新实验", '也可以先整理这一节'], nextHref: "./lesson-innovation-12.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-innovation.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'innovation', lessonId: "innovation-11", modulePage: 'module-innovation.html', progressNamespace: 'innovation', progressLessonKey: "lesson11", audioSource: './assets/audio/innovation-ep84-case-traditional-ai.mp3?v=20260513-innovation-01-12a', vttSrc: './assets/subtitles/innovation-ep84-case-traditional-ai.vtt?v=20260513-innovation-01-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260410-innovation-05a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "innovation-ep84-case-traditional-ai/slide_01.png",
            "label": "案例：传统行业加 AI 的成功转型",
            "caption": "这一节会帮助你系统理解：案例：传统行业加 AI 的成功转型"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_02.png",
            "label": "先看这个框架为什么重要",
            "caption": "大家好，我是 Lincoln。 欢迎来到MindsLeap 商学院。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_03.png",
            "label": "AI 时代的新变化",
            "caption": "这个系统可以在几分钟内把一份合同通读一遍，自动标注潜在的风险条款、不合常规的表述、缺失的重要条款。 然后生成一份初步的审查报告。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_04.png",
            "label": "关键判断一",
            "caption": "这家企业有大约一百家门店。 它的运营痛点有三个：食材浪费严重、排班效率低、客户满意度参差不齐。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_05.png",
            "label": "关键判断二",
            "caption": "效果：人力成本降低了百分之十，同时高峰期的服务质量反而提升了。 因为 AI 排班比人工排班更合理。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "不再是固定的区域划分，而是每天根据当天的包裹分布动态调整每个司机的配送范围。 第二，智能路线规划。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_07.png",
            "label": "本节行动提示",
            "caption": "找到那个\"痛得不能忍、AI 又能解决\"的点，先打透。 第二，AI 加人，而不是 AI 替代人。"
        },
        {
            "file": "innovation-ep84-case-traditional-ai/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的创新框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.68,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.68,
            "end": 4.32,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.32,
            "end": 9.48,
            "text": "前两期我们看了 Midjourney、Cursor、Perplexity 这些 AI 原生公司的案例。"
        },
        {
            "start": 9.48,
            "end": 13.48,
            "text": "今天换一个视角：传统行业怎么加 AI 成功转型。"
        },
        {
            "start": 13.48,
            "end": 16.36,
            "text": "不是所有创新都是从零开始的颠覆。"
        },
        {
            "start": 16.36,
            "end": 19.76,
            "text": "对大多数企业来说，更现实的路径是："
        },
        {
            "start": 19.76,
            "end": 21.64,
            "text": "在已有的业务基础上，"
        },
        {
            "start": 21.64,
            "end": 25.2,
            "text": "用 AI 实现突破性的效率提升和体验升级。"
        },
        {
            "start": 25.72,
            "end": 28.04,
            "text": "今天讲三个不同行业的案例。"
        },
        {
            "start": 28.04,
            "end": 30.8,
            "text": "第一个案例：一家律师事务所的 AI 转型。"
        },
        {
            "start": 30.8,
            "end": 33.18,
            "text": "这家律所大约五十个律师，"
        },
        {
            "start": 33.18,
            "end": 35.18,
            "text": "主要做商业合同审查、"
        },
        {
            "start": 35.18,
            "end": 37.78,
            "text": "知识产权和企业合规方面的业务。"
        },
        {
            "start": 37.78,
            "end": 39.42,
            "text": "他们的痛点是什么？"
        },
        {
            "start": 39.42,
            "end": 41.28,
            "text": "合同审查太耗时了。"
        },
        {
            "start": 41.28,
            "end": 46.42,
            "text": "一份复杂的商业合同，一个资深律师要花两到三天来审查。"
        },
        {
            "start": 46.42,
            "end": 50.48,
            "text": "大量的时间花在\"读合同\"和\"找风险点\"上。"
        },
        {
            "start": 50.48,
            "end": 54.2,
            "text": "但律所的收费是按人头按时间来的，"
        },
        {
            "start": 54.2,
            "end": 57.08,
            "text": "效率低就意味着要么多收客户钱、"
        },
        {
            "start": 57.08,
            "end": 58.28,
            "text": "要么少赚钱。"
        },
        {
            "start": 58.28,
            "end": 59.36,
            "text": "他们做了什么？"
        },
        {
            "start": 59.36,
            "end": 61.94,
            "text": "引入了一个 AI 合同审查系统。"
        },
        {
            "start": 62.42,
            "end": 65.78,
            "text": "这个系统可以在几分钟内把一份合同通读一遍，"
        },
        {
            "start": 65.78,
            "end": 68.26,
            "text": "自动标注潜在的风险条款、"
        },
        {
            "start": 68.26,
            "end": 71.46,
            "text": "不合常规的表述、缺失的重要条款。"
        },
        {
            "start": 71.46,
            "end": 74.02,
            "text": "然后生成一份初步的审查报告。"
        },
        {
            "start": 74.02,
            "end": 79.34,
            "text": "律师拿到 AI 的审查报告之后，不需要从头到尾读合同了。"
        },
        {
            "start": 79.34,
            "end": 84.52,
            "text": "只需要重点看 AI 标注的问题点，做专业判断和最终决策。"
        },
        {
            "start": 84.97999999999999,
            "end": 85.9,
            "text": "效果怎么样？"
        },
        {
            "start": 85.9,
            "end": 89.9,
            "text": "合同审查时间从两到三天缩短到了半天。"
        },
        {
            "start": 89.9,
            "end": 92.12,
            "text": "律师的产能提升了大约四倍。"
        },
        {
            "start": 92.12,
            "end": 94.42,
            "text": "更重要的是，AI 不会漏看。"
        },
        {
            "start": 94.88,
            "end": 96.96,
            "text": "它会检查合同的每一个条款，"
        },
        {
            "start": 96.96,
            "end": 101.98,
            "text": "不像人类律师可能因为疲劳或者经验局限而遗漏某些风险。"
        },
        {
            "start": 101.98,
            "end": 104.08,
            "text": "这家律所没有因此裁员。"
        },
        {
            "start": 104.08,
            "end": 107.58,
            "text": "相反，因为效率提升，他们可以接更多的案子。"
        },
        {
            "start": 107.58,
            "end": 110.39999999999998,
            "text": "收入在一年内增长了百分之四十。"
        },
        {
            "start": 110.4,
            "end": 113.06,
            "text": "同时把部分效率提升让利给客户，"
        },
        {
            "start": 113.06,
            "end": 116.34,
            "text": "降低了收费标准，吸引了更多客户。"
        },
        {
            "start": 116.34,
            "end": 117.92,
            "text": "最关键的一点是什么？"
        },
        {
            "start": 117.92,
            "end": 119.3,
            "text": "AI 没有替代律师，"
        },
        {
            "start": 119.3,
            "end": 123.04,
            "text": "而是让律师从\"读合同\"的苦力活中解放出来，"
        },
        {
            "start": 123.04,
            "end": 126.06,
            "text": "专注在\"做判断\"的高价值工作上。"
        },
        {
            "start": 126.06,
            "end": 128.86,
            "text": "律师的工作满意度反而提高了。"
        },
        {
            "start": 128.86,
            "end": 132.82,
            "text": "第二个案例：一家连锁餐饮企业的 AI 运营升级。"
        },
        {
            "start": 132.82,
            "end": 135.36,
            "text": "这家企业有大约一百家门店。"
        },
        {
            "start": 135.36,
            "end": 138.26,
            "text": "它的运营痛点有三个：食材浪费严重、"
        },
        {
            "start": 138.26,
            "end": 141.06,
            "text": "排班效率低、客户满意度参差不齐。"
        },
        {
            "start": 141.06,
            "end": 143.4,
            "text": "他们分三个阶段导入了 AI。"
        },
        {
            "start": 143.4,
            "end": 146.92,
            "text": "第一个阶段：AI 需求预测和采购优化。"
        },
        {
            "start": 146.92,
            "end": 152.34,
            "text": "每家门店每天需要准备多少食材，过去是店长凭经验估的。"
        },
        {
            "start": 152.34,
            "end": 156.42,
            "text": "估多了食材浪费，估少了菜品断供影响客户体验。"
        },
        {
            "start": 156.42,
            "end": 159.32,
            "text": "他们接入了一个 AI 需求预测系统。"
        },
        {
            "start": 159.32,
            "end": 162.88,
            "text": "这个系统分析每家门店的历史销售数据、"
        },
        {
            "start": 162.88,
            "end": 165.08,
            "text": "天气、节假日、周边活动、"
        },
        {
            "start": 165.08,
            "end": 166.96,
            "text": "甚至竞品的促销信息，"
        },
        {
            "start": 166.96,
            "end": 169.48,
            "text": "预测每天每道菜的销量。"
        },
        {
            "start": 170.04,
            "end": 172.12,
            "text": "然后自动生成采购建议。"
        },
        {
            "start": 172.12,
            "end": 175.86000000000004,
            "text": "效果：食材浪费减少了百分之三十。"
        },
        {
            "start": 175.86000000000004,
            "end": 178.90000000000003,
            "text": "断供率从百分之八降到了百分之二。"
        },
        {
            "start": 178.90000000000003,
            "end": 181.34,
            "text": "每年节省食材成本约几百万。"
        },
        {
            "start": 181.34,
            "end": 184.04,
            "text": "第二个阶段：AI 智能排班。"
        },
        {
            "start": 184.04,
            "end": 185.74,
            "text": "一百家门店、"
        },
        {
            "start": 185.74,
            "end": 189.4,
            "text": "几千名员工的排班是一个极其复杂的优化问题。"
        },
        {
            "start": 189.4,
            "end": 192.4,
            "text": "要考虑每家店每个时段的预估客流、"
        },
        {
            "start": 192.4,
            "end": 194.34,
            "text": "每个员工的技能和偏好、"
        },
        {
            "start": 194.34,
            "end": 196.8,
            "text": "劳动法规定的工时限制。"
        },
        {
            "start": 196.8,
            "end": 201.94,
            "text": "AI 排班系统综合考虑这些因素，自动生成最优排班方案。"
        },
        {
            "start": 201.94,
            "end": 205.3,
            "text": "高峰时段安排更多人手，低谷时段减少。"
        },
        {
            "start": 205.3,
            "end": 208.48,
            "text": "每个员工的排班尽量符合他们的偏好。"
        },
        {
            "start": 208.48,
            "end": 211.89999999999998,
            "text": "效果：人力成本降低了百分之十，"
        },
        {
            "start": 211.9,
            "end": 214.74,
            "text": "同时高峰期的服务质量反而提升了。"
        },
        {
            "start": 214.74,
            "end": 217.5,
            "text": "因为 AI 排班比人工排班更合理。"
        },
        {
            "start": 217.5,
            "end": 219.94,
            "text": "第三个阶段：客户体验分析。"
        },
        {
            "start": 220.42,
            "end": 225.54,
            "text": "用 AI 分析所有门店的客户评价、外卖平台评分、投诉记录。"
        },
        {
            "start": 225.54,
            "end": 228.14,
            "text": "AI 自动识别每家店的薄弱环节。"
        },
        {
            "start": 228.14,
            "end": 230.34,
            "text": "有的店是出餐速度慢，"
        },
        {
            "start": 230.34,
            "end": 232.78,
            "text": "有的店是某道菜品质量不稳定，"
        },
        {
            "start": 232.78,
            "end": 234.74,
            "text": "有的店是服务态度有问题。"
        },
        {
            "start": 234.74,
            "end": 238.96,
            "text": "针对每家店的具体问题，制定针对性的改善方案。"
        },
        {
            "start": 238.96,
            "end": 243.08000000000004,
            "text": "三个月后，整体客户满意度提升了百分之十五。"
        },
        {
            "start": 243.08000000000004,
            "end": 246.28,
            "text": "第三个案例：一家物流公司的 AI 升级。"
        },
        {
            "start": 246.28,
            "end": 250.2,
            "text": "这家公司做城市配送，有大约三百辆配送车。"
        },
        {
            "start": 250.57999999999998,
            "end": 252.6,
            "text": "它的核心挑战是配送效率。"
        },
        {
            "start": 252.6,
            "end": 255.78,
            "text": "每天有几千个包裹要送到城市的各个角落。"
        },
        {
            "start": 255.78,
            "end": 260.34,
            "text": "传统的做法是把包裹按区域分好，每个司机负责一个区域。"
        },
        {
            "start": 260.34,
            "end": 262.56,
            "text": "但这种静态分配方式效率不高。"
        },
        {
            "start": 263.0,
            "end": 264.82,
            "text": "因为每天的包裹分布不同，"
        },
        {
            "start": 264.82,
            "end": 266.64,
            "text": "有时候某个区域特别多、"
        },
        {
            "start": 266.64,
            "end": 267.66,
            "text": "某个区域特别少。"
        },
        {
            "start": 267.66,
            "end": 270.02,
            "text": "他们引入了 AI 路线优化系统。"
        },
        {
            "start": 270.02,
            "end": 272.32,
            "text": "这个系统做了三件事。"
        },
        {
            "start": 272.32,
            "end": 273.72,
            "text": "第一，动态分区。"
        },
        {
            "start": 273.72,
            "end": 275.7,
            "text": "不再是固定的区域划分，"
        },
        {
            "start": 275.7,
            "end": 279.62,
            "text": "而是每天根据当天的包裹分布动态调整每"
        },
        {
            "start": 279.62,
            "end": 281.08,
            "text": "个司机的配送范围。"
        },
        {
            "start": 281.08,
            "end": 283.02,
            "text": "第二，智能路线规划。"
        },
        {
            "start": 283.02,
            "end": 286.04,
            "text": "为每个司机规划当天的最优配送路线。"
        },
        {
            "start": 286.04,
            "end": 290.46,
            "text": "考虑包裹的时效要求、道路拥堵情况、配送点的位置关系。"
        },
        {
            "start": 290.46,
            "end": 292.26,
            "text": "第三，实时调度。"
        },
        {
            "start": 292.26,
            "end": 294.46,
            "text": "配送过程中如果出现异常，"
        },
        {
            "start": 294.46,
            "end": 298.04,
            "text": "比如某条路堵了、某个包裹需要加急，"
        },
        {
            "start": 298.04,
            "end": 299.9,
            "text": "AI 实时调整路线。"
        },
        {
            "start": 299.9,
            "end": 301.34,
            "text": "效果非常显著。"
        },
        {
            "start": 301.34,
            "end": 305.02000000000004,
            "text": "每辆车每天的配送量提升了百分之二十五。"
        },
        {
            "start": 305.02000000000004,
            "end": 308.7249999999999,
            "text": "配送准时率从百分之八十五提升到百分之九十五。"
        },
        {
            "start": 308.7249999999999,
            "end": 311.0485714285714,
            "text": "燃油成本降低了百分之十五。"
        },
        {
            "start": 311.0485714285714,
            "end": 313.71999999999997,
            "text": "客户投诉减少了百分之四十。"
        },
        {
            "start": 313.72,
            "end": 314.96,
            "text": "最终的商业效果："
        },
        {
            "start": 314.96,
            "end": 317.4,
            "text": "在车辆数量不变的情况下，"
        },
        {
            "start": 317.4,
            "end": 319.74000000000007,
            "text": "配送能力提升了百分之二十五。"
        },
        {
            "start": 319.74000000000007,
            "end": 322.86,
            "text": "相当于不花钱多买了七十五辆车。"
        },
        {
            "start": 322.86,
            "end": 324.56,
            "text": "从这三个案例中，"
        },
        {
            "start": 324.56,
            "end": 329.38,
            "text": "我们可以提炼出传统行业 AI 转型的几个关键成功要素。"
        },
        {
            "start": 329.38,
            "end": 331.86,
            "text": "第一，从最痛的点切入。"
        },
        {
            "start": 331.86,
            "end": 336.32,
            "text": "律所选了合同审查，因为这是律师最耗时的工作。"
        },
        {
            "start": 336.32,
            "end": 340.44,
            "text": "餐饮选了食材预测，因为浪费是最大的成本黑洞。"
        },
        {
            "start": 340.44,
            "end": 344.41999999999996,
            "text": "物流选了路线优化，因为效率直接影响盈利。"
        },
        {
            "start": 344.41999999999996,
            "end": 346.94,
            "text": "不要试图一次性改造整个业务。"
        },
        {
            "start": 346.94,
            "end": 351.1,
            "text": "找到那个\"痛得不能忍、AI 又能解决\"的点，先打透。"
        },
        {
            "start": 351.1,
            "end": 354.2,
            "text": "第二，AI 加人，而不是 AI 替代人。"
        },
        {
            "start": 354.2,
            "end": 357.48,
            "text": "三个案例中，AI 都没有完全替代人。"
        },
        {
            "start": 357.48,
            "end": 362.58,
            "text": "律师还在做专业判断，店长还在管理门店，司机还在开车。"
        },
        {
            "start": 362.58,
            "end": 365.32,
            "text": "AI 做的是\"提供信息和建议\"，"
        },
        {
            "start": 365.32,
            "end": 367.84,
            "text": "人做的是\"最终决策和执行\"。"
        },
        {
            "start": 368.38,
            "end": 370.42,
            "text": "这种\"AI 辅助人\"的模式，"
        },
        {
            "start": 370.42,
            "end": 374.14,
            "text": "对传统行业来说是最安全也最有效的。"
        },
        {
            "start": 374.14,
            "end": 375.86,
            "text": "第三，数据是基础。"
        },
        {
            "start": 375.86,
            "end": 378.38,
            "text": "三个案例都依赖数据。"
        },
        {
            "start": 378.38,
            "end": 380.42,
            "text": "律所的历史合同数据、"
        },
        {
            "start": 380.42,
            "end": 382.7,
            "text": "餐饮的销售和库存数据、"
        },
        {
            "start": 382.7,
            "end": 384.92,
            "text": "物流的配送和路线数据。"
        },
        {
            "start": 384.92,
            "end": 389.02,
            "text": "如果这些数据没有积累、没有数字化，AI 就无从下手。"
        },
        {
            "start": 389.02,
            "end": 392.82,
            "text": "第四，持续优化而不是一次性项目。"
        },
        {
            "start": 392.82,
            "end": 395.12,
            "text": "AI 系统上线不是终点。"
        },
        {
            "start": 395.12,
            "end": 400.18,
            "text": "数据越多模型越准，持续的反馈和优化让效果越来越好。"
        },
        {
            "start": 400.18,
            "end": 404.02,
            "text": "三个案例的效果都是在上线后持续改善的。"
        },
        {
            "start": 404.02,
            "end": 405.28,
            "text": "好，总结一下。"
        },
        {
            "start": 405.28,
            "end": 407.78,
            "text": "三个传统行业AI转型案例："
        },
        {
            "start": 407.78,
            "end": 410.87333333333333,
            "text": "律所用 AI 合同审查提升四倍产能、"
        },
        {
            "start": 410.87333333333333,
            "end": 414.7,
            "text": "餐饮用 AI 需求预测减少百分之三十浪费、"
        },
        {
            "start": 414.7,
            "end": 418.76,
            "text": "物流用 AI 路线优化提升百分之二十五配送量。"
        },
        {
            "start": 418.76,
            "end": 422.1,
            "text": "四个成功要素：从最痛的点切入、"
        },
        {
            "start": 422.1,
            "end": 425.08,
            "text": "AI 加人而不是替代人、数据是基础、"
        },
        {
            "start": 425.08,
            "end": 425.96,
            "text": "持续优化。"
        },
        {
            "start": 425.96,
            "end": 428.34,
            "text": "下一期是模块六的最后一期："
        },
        {
            "start": 428.34,
            "end": 431.42,
            "text": "创新工作坊，用 AI 设计一个创新实验。"
        },
        {
            "start": 431.42,
            "end": 433.86,
            "text": "我是 Lincoln，我们下期见。"
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
], navigation: { nextLessonUrl: "./lesson-innovation-12.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的创新创业判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把这个创新与创业框架放回 AI 时代的经营现实里，形成一个可验证、可执行的创新判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是创新判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的创新判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-innovation-12.html?entry={entry}", secondaryHref: "./lesson-innovation-12.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-innovation-11", coachSource: "./ai-coach.html?source=lesson-innovation-11" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：传统行业加 AI 的成功转型的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：传统行业加 AI 的成功转型", module: '创新与创业' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-innovation-12.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-innovation.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
