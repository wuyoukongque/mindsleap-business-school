(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal05 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第5课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第5课：AI 法规全景：全球 AI 监管趋势",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep101-ai-regulation/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：AI 法规全景：全球 AI 监管趋势", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-5", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-legal-06.html?entry=sequence" },
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
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "AI 伦理与算法治理：负责任地使用 AI",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 7,
                "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "劳动法：AI 替代岗位的法律与伦理",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：AI 公司的法律踩坑实录",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "法律工具箱：AI 时代管理者必备的法律清单",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-legal-06.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组合规与风险框架学完整。", meta: ["当前完成：法律、合规与风险 5/10", "建议下一节：AI 伦理与算法治理：负责任地使用 AI", '也可以先整理这一节'], nextHref: "./lesson-legal-06.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-05", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson5", audioSource: './assets/audio/legal-ep101-ai-regulation.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep101-ai-regulation.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep101-ai-regulation/slide_01.png",
            "label": "AI 法规全景：全球 AI 监管趋势",
            "caption": "这一节会帮助你系统理解：AI 法规全景：全球 AI 监管趋势"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "包括：AI 用于招聘筛选、信贷审批、教育评分、医疗诊断、执法等领域。 这些领域的 AI 系统必须做风险评估、保持透明度、接受人工监督、保留使用记录。"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_04.png",
            "label": "常见误区与代价",
            "caption": "针对 ChatGPT 这类生成式 AI。 要求：训练数据要合法、生成内容不得违法、要做内容审核、要向用户标明 AI 生成。"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "美国的监管特点是：比较分散、偏向行业自律，但也在加速立法进程中。 这些法规对企业实际经营的影响是什么？"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "你需要知道你的 AI 用了什么数据训练的、数据是否合法获取、数据中是否有偏见。 第四个影响：跨境合规的复杂性。"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_07.png",
            "label": "本节行动提示",
            "caption": "AI 可以帮你自动追踪法规变化、评估合规状态、生成合规报告。 好，总结一下。"
        },
        {
            "file": "legal-ep101-ai-regulation/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.64,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.64,
            "end": 3.92,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.92,
            "end": 7.04,
            "text": "今天看全球 AI 监管的全景图。"
        },
        {
            "start": 7.04,
            "end": 10.8,
            "text": "AI 发展太快了，各国的监管也在快速跟进。"
        },
        {
            "start": 10.8,
            "end": 13.54,
            "text": "作为管理者，你需要了解这些法规，"
        },
        {
            "start": 13.54,
            "end": 16.92,
            "text": "特别是如果你的业务涉及多个国家和地区。"
        },
        {
            "start": 16.92,
            "end": 20.2,
            "text": "先看最重要的三大 AI 监管体系。"
        },
        {
            "start": 20.2,
            "end": 23.28,
            "text": "第一，欧盟的《人工智能法案》。"
        },
        {
            "start": 23.28,
            "end": 26.66,
            "text": "这是全球第一部全面的 AI 专项法律。"
        },
        {
            "start": 26.66,
            "end": 30.54,
            "text": "2024年正式生效，分阶段实施。"
        },
        {
            "start": 30.54,
            "end": 33.74,
            "text": "欧盟的核心思路是\"基于风险的分级监管\"。"
        },
        {
            "start": 34.17999999999999,
            "end": 37.220000000000006,
            "text": "把 AI 系统按风险等级分成四类。"
        },
        {
            "start": 37.220000000000006,
            "end": 39.6,
            "text": "第一类：不可接受的风险。"
        },
        {
            "start": 39.6,
            "end": 41.92,
            "text": "这些 AI 应用被直接禁止。"
        },
        {
            "start": 41.92,
            "end": 44.3,
            "text": "比如用 AI 做社会信用评分、"
        },
        {
            "start": 44.3,
            "end": 47.539999999999964,
            "text": "对公共场所做实时人脸识别（有例外）、"
        },
        {
            "start": 47.539999999999964,
            "end": 50.16,
            "text": "利用人的弱点进行操纵性的 AI 系统。"
        },
        {
            "start": 50.16,
            "end": 51.74,
            "text": "第二类：高风险。"
        },
        {
            "start": 51.74,
            "end": 55.06,
            "text": "这些 AI 应用不禁止，但要严格监管。"
        },
        {
            "start": 55.06,
            "end": 58.5,
            "text": "包括：AI 用于招聘筛选、信贷审批、"
        },
        {
            "start": 58.5,
            "end": 61.26,
            "text": "教育评分、医疗诊断、执法等领域。"
        },
        {
            "start": 61.72,
            "end": 64.88,
            "text": "这些领域的 AI 系统必须做风险评估、"
        },
        {
            "start": 64.88,
            "end": 67.26,
            "text": "保持透明度、接受人工监督、"
        },
        {
            "start": 67.26,
            "end": 68.64,
            "text": "保留使用记录。"
        },
        {
            "start": 68.64,
            "end": 70.58,
            "text": "第三类：有限风险。"
        },
        {
            "start": 70.58,
            "end": 73.18,
            "text": "主要是跟用户直接互动的 AI 系统。"
        },
        {
            "start": 73.18,
            "end": 74.92,
            "text": "比如 AI 聊天机器人。"
        },
        {
            "start": 74.92,
            "end": 78.02,
            "text": "要求很简单：必须告诉用户\"你在跟 AI 对话\"。"
        },
        {
            "start": 78.02,
            "end": 79.34,
            "text": "第四类：最低风险。"
        },
        {
            "start": 79.98,
            "end": 81.68,
            "text": "大部分 AI 应用属于这一类。"
        },
        {
            "start": 81.68,
            "end": 83.76,
            "text": "基本没有额外的监管要求。"
        },
        {
            "start": 83.76,
            "end": 86.2,
            "text": "对通用大模型（比如 GPT、"
        },
        {
            "start": 86.2,
            "end": 89.1,
            "text": "Claude 这类基础模型）有额外的要求："
        },
        {
            "start": 89.1,
            "end": 92.04,
            "text": "必须披露训练数据的来源、遵守版权法、"
        },
        {
            "start": 92.04,
            "end": 94.24,
            "text": "做安全测试、报告严重事故。"
        },
        {
            "start": 94.24,
            "end": 96.44,
            "text": "第二，中国的 AI 管理框架。"
        },
        {
            "start": 96.44,
            "end": 100.74,
            "text": "中国采取的是\"分领域逐步出台\"的监管策略。"
        },
        {
            "start": 100.74,
            "end": 103.08,
            "text": "不是一部法律管所有，"
        },
        {
            "start": 103.08,
            "end": 107.12,
            "text": "而是针对不同的 AI 应用场景分别出台规定。"
        },
        {
            "start": 107.12,
            "end": 109.84,
            "text": "目前已经出台了几个重要的规定。"
        },
        {
            "start": 109.84,
            "end": 113.9,
            "text": "第一，《生成式人工智能服务管理暂行办法》。"
        },
        {
            "start": 113.9,
            "end": 116.18,
            "text": "针对 ChatGPT 这类生成式 AI。"
        },
        {
            "start": 116.18,
            "end": 118.26,
            "text": "要求：训练数据要合法、"
        },
        {
            "start": 118.26,
            "end": 121.32,
            "text": "生成内容不得违法、要做内容审核、"
        },
        {
            "start": 121.32,
            "end": 124.1,
            "text": "要向用户标明 AI 生成。"
        },
        {
            "start": 124.1,
            "end": 127.16,
            "text": "第二，《互联网信息服务深度合成管理规定》。"
        },
        {
            "start": 127.16,
            "end": 128.88,
            "text": "针对深度伪造技术。"
        },
        {
            "start": 128.88,
            "end": 133.0,
            "text": "要求：AI 生成或编辑的音频视频图片必须加标识。"
        },
        {
            "start": 133.0,
            "end": 136.96,
            "text": "第三，《互联网信息服务算法推荐管理规定》。"
        },
        {
            "start": 136.96,
            "end": 138.32,
            "text": "针对推荐算法。"
        },
        {
            "start": 138.32,
            "end": 141.40000000000003,
            "text": "要求：不得利用算法制造信息茧房、"
        },
        {
            "start": 141.40000000000003,
            "end": 143.94,
            "text": "要给用户关闭个性化推荐的选项、"
        },
        {
            "start": 143.94,
            "end": 146.58,
            "text": "不得利用算法进行大数据杀熟。"
        },
        {
            "start": 146.58,
            "end": 149.78,
            "text": "中国的监管特点是：出台速度快、"
        },
        {
            "start": 149.78,
            "end": 152.5,
            "text": "针对性强，但也在不断调整完善中。"
        },
        {
            "start": 152.5,
            "end": 154.78,
            "text": "第三，美国的 AI 监管。"
        },
        {
            "start": 155.23999999999998,
            "end": 158.84,
            "text": "美国目前没有联邦层面的全面 AI 法律。"
        },
        {
            "start": 158.84,
            "end": 163.12,
            "text": "它采取的是\"行政令加行业自律加州法律\"的组合模式。"
        },
        {
            "start": 163.12,
            "end": 167.08,
            "text": "联邦层面主要靠总统的行政令来引导方向。"
        },
        {
            "start": 167.08,
            "end": 169.1,
            "text": "各个州在自行立法。"
        },
        {
            "start": 169.1,
            "end": 172.68,
            "text": "比如纽约市已经立法限制招聘中使用 AI。"
        },
        {
            "start": 172.68,
            "end": 176.44,
            "text": "科罗拉多州通过了 AI 消费者保护法。"
        },
        {
            "start": 176.44,
            "end": 179.04,
            "text": "美国的监管特点是：比较分散、"
        },
        {
            "start": 179.04,
            "end": 182.72,
            "text": "偏向行业自律，但也在加速立法进程中。"
        },
        {
            "start": 182.72,
            "end": 186.1,
            "text": "这些法规对企业实际经营的影响是什么？"
        },
        {
            "start": 186.1,
            "end": 188.5,
            "text": "第一个影响：合规成本增加。"
        },
        {
            "start": 188.96,
            "end": 192.26,
            "text": "特别是如果你用 AI 做\"高风险\"领域的事情，"
        },
        {
            "start": 192.26,
            "end": 194.86,
            "text": "招聘、信贷、医疗，你需要做合规评估、"
        },
        {
            "start": 194.86,
            "end": 197.20000000000002,
            "text": "建立监控机制、保留审计记录。"
        },
        {
            "start": 197.20000000000002,
            "end": 198.28,
            "text": "这些都是成本。"
        },
        {
            "start": 198.28,
            "end": 201.54,
            "text": "第二个影响：AI 产品设计要考虑合规。"
        },
        {
            "start": 201.54,
            "end": 203.5,
            "text": "如果你在做 AI 产品，"
        },
        {
            "start": 203.5,
            "end": 206.74,
            "text": "合规要求必须在产品设计阶段就考虑进去。"
        },
        {
            "start": 206.74,
            "end": 209.04,
            "text": "不是等产品做完了再去适配法规。"
        },
        {
            "start": 209.56,
            "end": 213.16,
            "text": "比如：如果你的 AI 产品涉及自动化决策，"
        },
        {
            "start": 213.16,
            "end": 216.8,
            "text": "你需要在设计中就加入\"人工审核\"的环"
        },
        {
            "start": 216.8,
            "end": 218.68,
            "text": "节和\"算法解释\"的功能。"
        },
        {
            "start": 219.24,
            "end": 221.44,
            "text": "如果你的产品用了生成式 AI，"
        },
        {
            "start": 221.44,
            "end": 224.5,
            "text": "你需要在产品中加入内容标识功能。"
        },
        {
            "start": 224.5,
            "end": 227.08,
            "text": "第三个影响：数据治理要求提高。"
        },
        {
            "start": 227.08,
            "end": 232.76,
            "text": "AI 法规普遍要求你对训练数据的来源、质量、偏见做管理。"
        },
        {
            "start": 232.76,
            "end": 235.96,
            "text": "你需要知道你的 AI 用了什么数据训练的、"
        },
        {
            "start": 235.96,
            "end": 239.56,
            "text": "数据是否合法获取、数据中是否有偏见。"
        },
        {
            "start": 239.56,
            "end": 242.36,
            "text": "第四个影响：跨境合规的复杂性。"
        },
        {
            "start": 242.36,
            "end": 244.58,
            "text": "如果你的业务跨多个国家，"
        },
        {
            "start": 244.58,
            "end": 247.22,
            "text": "你需要同时遵守多个国家的法规。"
        },
        {
            "start": 247.22,
            "end": 250.98,
            "text": "欧盟的要求可能跟中国的不同，跟美国的也不同。"
        },
        {
            "start": 250.98,
            "end": 253.82,
            "text": "合规工作的复杂度大幅增加。"
        },
        {
            "start": 253.82,
            "end": 255.72,
            "text": "怎么应对这些监管挑战？"
        },
        {
            "start": 255.72,
            "end": 258.62,
            "text": "第一，建立 AI 合规的基本框架。"
        },
        {
            "start": 258.62,
            "end": 261.78,
            "text": "不需要一步到位，但至少要做几件事："
        },
        {
            "start": 261.78,
            "end": 263.78,
            "text": "知道你在用哪些 AI 系统、"
        },
        {
            "start": 263.78,
            "end": 266.52,
            "text": "评估每个系统的风险等级、"
        },
        {
            "start": 266.52,
            "end": 268.96,
            "text": "对高风险系统做合规检查。"
        },
        {
            "start": 268.96,
            "end": 271.1,
            "text": "第二，关注法规动态。"
        },
        {
            "start": 271.1,
            "end": 273.8,
            "text": "AI 法规还在快速变化中。"
        },
        {
            "start": 273.8,
            "end": 278.02,
            "text": "指定一个人或一个团队定期跟踪 AI 法规的最新变化。"
        },
        {
            "start": 278.64,
            "end": 281.22,
            "text": "第三，采取\"最高标准\"策略。"
        },
        {
            "start": 281.22,
            "end": 283.7,
            "text": "如果你的业务跨多个国家，"
        },
        {
            "start": 283.7,
            "end": 286.08,
            "text": "与其逐个适配不同国家的法规，"
        },
        {
            "start": 286.08,
            "end": 290.16,
            "text": "不如直接采用最严格的标准（通常是欧盟的标准）。"
        },
        {
            "start": 290.16,
            "end": 293.08,
            "text": "这样在所有国家都是合规的。"
        },
        {
            "start": 293.08,
            "end": 295.68,
            "text": "第四，利用 AI 做合规管理。"
        },
        {
            "start": 295.68,
            "end": 298.74,
            "text": "AI 可以帮你自动追踪法规变化、"
        },
        {
            "start": 298.74,
            "end": 301.24,
            "text": "评估合规状态、生成合规报告。"
        },
        {
            "start": 301.24,
            "end": 302.98,
            "text": "好，总结一下。"
        },
        {
            "start": 302.98,
            "end": 304.34,
            "text": "三大监管体系："
        },
        {
            "start": 304.34,
            "end": 307.42,
            "text": "欧盟的风险分级法案（最全面）、"
        },
        {
            "start": 307.42,
            "end": 310.34,
            "text": "中国的分领域规定（出台快）、"
        },
        {
            "start": 310.34,
            "end": 313.82,
            "text": "美国的行政令加州法律（比较分散）。"
        },
        {
            "start": 313.82,
            "end": 317.14,
            "text": "四个实际影响：合规成本增加、"
        },
        {
            "start": 317.14,
            "end": 319.22,
            "text": "产品设计要考虑合规、"
        },
        {
            "start": 319.22,
            "end": 322.64,
            "text": "数据治理要求提高、跨境合规复杂。"
        },
        {
            "start": 322.64,
            "end": 326.56,
            "text": "应对策略：建基本框架、跟踪法规动态、"
        },
        {
            "start": 326.56,
            "end": 329.56,
            "text": "采最高标准、用 AI 做合规。"
        },
        {
            "start": 329.56,
            "end": 333.12,
            "text": "下一期我们聊 AI 伦理与算法治理。"
        },
        {
            "start": 333.12,
            "end": 335.28,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 335.28,
            "end": 339.02,
            "text": "1. 三大体系：欧盟风险分级（最严）、"
        },
        {
            "start": 339.02,
            "end": 341.16,
            "text": "中国分领域立法（最快）、"
        },
        {
            "start": 341.16,
            "end": 342.44,
            "text": "美国分散式监管"
        },
        {
            "start": 342.44,
            "end": 345.02,
            "text": "2. 欧盟 AI 法案四级风险："
        },
        {
            "start": 345.02,
            "end": 348.98,
            "text": "禁止 → 高风险（严管）→ 有限风险 → 最低风险"
        },
        {
            "start": 348.98,
            "end": 352.52,
            "text": "3. 四个影响：合规成本、产品设计、"
        },
        {
            "start": 352.52,
            "end": 354.72,
            "text": "数据治理、跨境复杂性"
        },
        {
            "start": 354.72,
            "end": 360.04,
            "text": "4. 应对：建框架、跟动态、采最高标准、AI 辅助合规"
        },
        {
            "start": 360.64,
            "end": 364.0,
            "text": "1. 你的 AI 应用属于哪个风险等级？"
        },
        {
            "start": 364.0,
            "end": 365.54,
            "text": "需要遵守哪些法规？"
        },
        {
            "start": 365.54,
            "end": 369.18,
            "text": "2. 你有没有跟踪 AI 法规变化的机制？"
        },
        {
            "start": 369.18,
            "end": 372.72,
            "text": "3. 如果欧盟法规适用于你的业务，"
        },
        {
            "start": 372.72,
            "end": 374.48,
            "text": "你目前的合规水平够吗？"
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
], navigation: { nextLessonUrl: "./lesson-legal-06.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-legal-06.html?entry={entry}", secondaryHref: "./lesson-legal-06.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-05", coachSource: "./ai-coach.html?source=lesson-legal-05" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于AI 法规全景：全球 AI 监管趋势的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "AI 法规全景：全球 AI 监管趋势", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-legal-06.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
