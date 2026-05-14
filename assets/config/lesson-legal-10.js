(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的风险判断卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的合规与风险框架真正落回你的业务里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的风险判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.legal10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Legal 第10课",
      backLink: { href: './module-legal.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块八 · 法律、合规与风险',
      lessonTitle: "第10课：法律工具箱：AI 时代管理者必备的法律清单",
      heroMeta: ['🎙 Legal 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀风险判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你先建立风险判断框架，而不是一上来就陷入零散动作。", meta: ["预计时长：约 6-8 分钟", '你将获得：一个可带回业务现场使用的风险判断框架'] },
      player: { initialSlide: "./assets/slides/legal-ep106-legal-toolkit/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：法律工具箱：AI 时代管理者必备的法律清单", subtitle: '边听边看重点，学完后把今天的框架带回你的业务里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-legal.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的业务现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个风险判断最值得带回你的业务？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' }, { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：指标体系、看板、用户分群、漏斗、预测、实验，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么改变你接下来的合规优先级？', placeholder: '这个框架会让你多看什么、少做什么，或者重新排序什么？', tip: '真正有价值的合规学习，最终都会回到资源配置与风险判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '系统会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，回到模块页", coachLabel: "暂时跳过，回到模块页", secondaryHref: "./module-legal.html?entry=sequence" },
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
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "法律工具箱：AI 时代管理者必备的法律清单",
                "body": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        }
], nextLessonHref: "./module-legal.html?entry=sequence", nextLessonLabel: "查看本模块全部章节", moduleOverviewHref: './module-legal.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "学员最需要带走的 3 个知识点", summaryCards: [
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
      completion: { title: '这节课你已经学完了', body: "你已经完成了当前开放的合规课程。建议回到模块页复盘完整章节结构。", meta: ["当前完成：法律、合规与风险 10/10", "你已完成当前开放的合规课程", '也可以先整理这一节'], nextHref: "./module-legal.html?entry=sequence", nextLabel: "返回模块页", moduleHref: './module-legal.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'legal', lessonId: "legal-10", modulePage: 'module-legal.html', progressNamespace: 'legal', progressLessonKey: "lesson10", audioSource: './assets/audio/legal-ep106-legal-toolkit.mp3?v=20260514-legal-01a', vttSrc: './assets/subtitles/legal-ep106-legal-toolkit.vtt?v=20260514-legal-01a', slideBasePath: './assets/slides/', slideVersion: "?v=20260514-legal-01a", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "legal-ep106-legal-toolkit/slide_01.png",
            "label": "法律工具箱：AI 时代管理者必备的法律清单",
            "caption": "这一节会帮助你系统理解：法律工具箱：AI 时代管理者必备的法律清单"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_02.png",
            "label": "先看这个风险为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_03.png",
            "label": "核心法律与合规框架",
            "caption": "企业批准使用的 AI 工具有哪些？ 未经批准的工具不能使用。"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_04.png",
            "label": "常见误区与代价",
            "caption": "这个清单可以打印出来，每次签合同的时候对照着检查。 也可以把合同发给 AI，让 AI 按照这个清单帮你做检查。"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_05.png",
            "label": "AI 时代的新变化",
            "caption": "收集个人信息有没有获得用户的明确同意？ 同意机制是否符合\"主动同意\"的要求？"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_06.png",
            "label": "怎么带回企业现场",
            "caption": "第六个工具：AI 法律助手的正确使用方式。 AI 可以帮你做很多法律相关的工作。"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_07.png",
            "label": "本节行动提示",
            "caption": "不是等出了事才找律师，而是平时就有一个律师帮你做预防。 第二，定期做法律体检。"
        },
        {
            "file": "legal-ep106-legal-toolkit/slide_08.png",
            "label": "学员最需要带走的 3 个知识点",
            "caption": "学完后，最重要的是把今天的合规与风险框架带回你的企业里。"
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
            "end": 4.119999999999997,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 4.119999999999997,
            "end": 7.52,
            "text": "今天是模块八商业法律与合规的最后一期。"
        },
        {
            "start": 7.52,
            "end": 10.18,
            "text": "前面讲了公司法、合同法、知识产权、"
        },
        {
            "start": 10.18,
            "end": 13.5,
            "text": "数据隐私、AI 法规、AI 伦理、AI 风险、"
        },
        {
            "start": 13.66,
            "end": 14.72,
            "text": "劳动法和案例。"
        },
        {
            "start": 15.139999999999997,
            "end": 18.26,
            "text": "今天把这些整合成一个实用的\"法律工具箱\"，"
        },
        {
            "start": 18.26,
            "end": 20.06,
            "text": "让你随时可以拿来用。"
        },
        {
            "start": 20.06,
            "end": 22.3,
            "text": "第一个工具：AI 使用政策模板。"
        },
        {
            "start": 22.3,
            "end": 25.26,
            "text": "每家企业都应该有一份 AI 使用政策。"
        },
        {
            "start": 25.759999999999998,
            "end": 29.1,
            "text": "告诉员工怎么用 AI、什么能做什么不能做。"
        },
        {
            "start": 29.1,
            "end": 31.52,
            "text": "这份政策应该包含以下内容。"
        },
        {
            "start": 31.52,
            "end": 33.94,
            "text": "第一部分，允许使用的场景。"
        },
        {
            "start": 33.94,
            "end": 35.74,
            "text": "哪些工作可以用 AI 辅助？"
        },
        {
            "start": 35.74,
            "end": 39.6,
            "text": "比如：文案起草、数据分析、会议记录整理、代码辅助。"
        },
        {
            "start": 39.6,
            "end": 42.22,
            "text": "第二部分，禁止输入的数据类型。"
        },
        {
            "start": 42.22,
            "end": 45.4,
            "text": "哪些数据绝对不能输入外部 AI 工具？"
        },
        {
            "start": 45.4,
            "end": 47.38,
            "text": "比如：客户个人信息、财务数据、"
        },
        {
            "start": 47.38,
            "end": 49.72,
            "text": "商业机密、未公开的产品信息、"
        },
        {
            "start": 49.72,
            "end": 51.16,
            "text": "员工的薪酬信息。"
        },
        {
            "start": 51.16,
            "end": 53.72,
            "text": "第三部分，人工审核要求。"
        },
        {
            "start": 53.72,
            "end": 57.74,
            "text": "哪些 AI 输出必须经过人工审核才能使用？"
        },
        {
            "start": 57.74,
            "end": 60.06,
            "text": "比如：所有对外发布的内容、"
        },
        {
            "start": 60.06,
            "end": 62.18,
            "text": "涉及事实和数据的内容、"
        },
        {
            "start": 62.18,
            "end": 64.38,
            "text": "涉及法律和财务的内容。"
        },
        {
            "start": 64.38,
            "end": 66.76,
            "text": "第四部分，工具白名单。"
        },
        {
            "start": 66.76,
            "end": 69.58,
            "text": "企业批准使用的 AI 工具有哪些？"
        },
        {
            "start": 69.58,
            "end": 71.86,
            "text": "未经批准的工具不能使用。"
        },
        {
            "start": 71.86,
            "end": 73.42,
            "text": "第五部分，违规后果。"
        },
        {
            "start": 73.42,
            "end": 76.36,
            "text": "违反 AI 使用政策的后果是什么？"
        },
        {
            "start": 76.36,
            "end": 79.62,
            "text": "你可以让 AI 帮你起草这份政策的初稿，"
        },
        {
            "start": 79.62,
            "end": 82.42,
            "text": "然后根据你企业的实际情况做调整。"
        },
        {
            "start": 82.42,
            "end": 85.06,
            "text": "第二个工具：合同审查检查清单。"
        },
        {
            "start": 85.06,
            "end": 88.92,
            "text": "每次签合同之前，按照这个清单逐项检查。"
        },
        {
            "start": 88.92,
            "end": 90.38,
            "text": "第一，主体核实。"
        },
        {
            "start": 90.38,
            "end": 93.08,
            "text": "对方的公司名称、法定代表人、"
        },
        {
            "start": 93.08,
            "end": 95.34,
            "text": "统一社会信用代码是否正确？"
        },
        {
            "start": 95.34,
            "end": 99.28,
            "text": "有没有在国家企业信用信息公示系统上核实过？"
        },
        {
            "start": 99.28,
            "end": 100.78,
            "text": "第二，标的明确。"
        },
        {
            "start": 100.78,
            "end": 104.08,
            "text": "合同约定的产品或服务是否描述清楚？"
        },
        {
            "start": 104.08,
            "end": 105.46000000000001,
            "text": "有没有歧义？"
        },
        {
            "start": 105.46000000000001,
            "end": 107.7,
            "text": "第三，价格和付款。"
        },
        {
            "start": 107.7,
            "end": 109.22,
            "text": "金额是否正确？"
        },
        {
            "start": 109.22,
            "end": 111.76,
            "text": "付款节点和条件是否清楚？"
        },
        {
            "start": 111.76,
            "end": 113.08,
            "text": "有没有预付款？"
        },
        {
            "start": 113.08,
            "end": 115.0,
            "text": "逾期付款的违约金是多少？"
        },
        {
            "start": 115.0,
            "end": 117.12,
            "text": "第四，交付和验收。"
        },
        {
            "start": 117.12,
            "end": 118.24,
            "text": "交付物是什么？"
        },
        {
            "start": 118.24,
            "end": 119.72,
            "text": "验收标准是什么？"
        },
        {
            "start": 119.72,
            "end": 120.84,
            "text": "验收期限？"
        },
        {
            "start": 120.84,
            "end": 123.28,
            "text": "逾期视为通过的条款有没有？"
        },
        {
            "start": 123.28,
            "end": 124.44,
            "text": "第五，知识产权。"
        },
        {
            "start": 124.44,
            "end": 126.13999999999999,
            "text": "成果的知识产权归谁？"
        },
        {
            "start": 126.14,
            "end": 127.4,
            "text": "有没有授权条款？"
        },
        {
            "start": 127.4,
            "end": 129.1,
            "text": "第六，保密条款。"
        },
        {
            "start": 129.1,
            "end": 131.3,
            "text": "保密范围和期限是否合理？"
        },
        {
            "start": 131.3,
            "end": 133.12,
            "text": "第七，违约责任。"
        },
        {
            "start": 133.12,
            "end": 135.16,
            "text": "违约金是否对等？"
        },
        {
            "start": 135.16,
            "end": 136.52,
            "text": "责任上限是否合理？"
        },
        {
            "start": 136.52,
            "end": 138.02,
            "text": "第八，争议解决。"
        },
        {
            "start": 138.22,
            "end": 140.4,
            "text": "管辖法院或仲裁机构是哪里？"
        },
        {
            "start": 140.4,
            "end": 144.6,
            "text": "这个清单可以打印出来，每次签合同的时候对照着检查。"
        },
        {
            "start": 144.6,
            "end": 149.52,
            "text": "也可以把合同发给 AI，让 AI 按照这个清单帮你做检查。"
        },
        {
            "start": 149.52,
            "end": 151.84,
            "text": "第三个工具：知识产权保护清单。"
        },
        {
            "start": 151.84,
            "end": 153.72,
            "text": "定期检查以下事项。"
        },
        {
            "start": 153.72,
            "end": 154.92,
            "text": "第一，商标。"
        },
        {
            "start": 154.92,
            "end": 158.74,
            "text": "你的核心品牌名称、logo有没有注册商标？"
        },
        {
            "start": 158.74,
            "end": 161.08,
            "text": "注册的品类覆盖够不够？"
        },
        {
            "start": 161.08,
            "end": 163.44,
            "text": "有没有到期需要续展的商标？"
        },
        {
            "start": 163.44,
            "end": 164.64,
            "text": "第二，专利。"
        },
        {
            "start": 164.64,
            "end": 167.22,
            "text": "你的核心技术有没有申请专利？"
        },
        {
            "start": 167.22,
            "end": 170.6,
            "text": "有没有竞品在申请跟你类似的专利？"
        },
        {
            "start": 170.6,
            "end": 172.36,
            "text": "第三，版权。"
        },
        {
            "start": 172.36,
            "end": 177.84,
            "text": "你的核心内容（课程、设计、代码）有没有做版权登记？"
        },
        {
            "start": 177.84,
            "end": 181.94,
            "text": "员工的创作成果归属是否在劳动合同中明确？"
        },
        {
            "start": 181.94,
            "end": 184.24,
            "text": "第四，商业秘密。"
        },
        {
            "start": 184.24,
            "end": 187.02,
            "text": "你的核心商业机密（客户名单、"
        },
        {
            "start": 187.02,
            "end": 190.52,
            "text": "定价策略、技术秘方）有没有保密措施？"
        },
        {
            "start": 190.52,
            "end": 192.84,
            "text": "员工有没有签保密协议？"
        },
        {
            "start": 192.84,
            "end": 194.86,
            "text": "第五，AI 生成内容。"
        },
        {
            "start": 194.86,
            "end": 199.34,
            "text": "你在商业中使用的 AI 生成内容有没有做原创性检查？"
        },
        {
            "start": 199.34,
            "end": 201.78,
            "text": "有没有人工创造性参与的记录？"
        },
        {
            "start": 201.78,
            "end": 205.76,
            "text": "第四个工具：数据隐私合规检查清单。"
        },
        {
            "start": 205.76,
            "end": 207.18,
            "text": "第一，隐私政策。"
        },
        {
            "start": 207.18,
            "end": 209.42,
            "text": "你的隐私政策有没有？"
        },
        {
            "start": 209.42,
            "end": 210.74,
            "text": "内容是否完整？"
        },
        {
            "start": 210.74,
            "end": 215.22,
            "text": "是否涵盖了数据收集的目的、方式、存储期限、用户权利？"
        },
        {
            "start": 215.64,
            "end": 217.0,
            "text": "第二，用户同意。"
        },
        {
            "start": 217.0,
            "end": 220.3,
            "text": "收集个人信息有没有获得用户的明确同意？"
        },
        {
            "start": 220.3,
            "end": 223.2,
            "text": "同意机制是否符合\"主动同意\"的要求？"
        },
        {
            "start": 223.2,
            "end": 224.92,
            "text": "第三，数据安全。"
        },
        {
            "start": 224.92,
            "end": 227.44,
            "text": "数据的存储和传输是否加密？"
        },
        {
            "start": 227.44,
            "end": 229.16,
            "text": "访问控制是否到位？"
        },
        {
            "start": 229.16,
            "end": 231.18,
            "text": "有没有数据泄露应急预案？"
        },
        {
            "start": 231.18,
            "end": 232.62,
            "text": "第四，用户权利响应。"
        },
        {
            "start": 232.62,
            "end": 237.38,
            "text": "如果用户要求访问、删除、导出数据，你的系统能响应吗？"
        },
        {
            "start": 237.38,
            "end": 238.52,
            "text": "处理流程是什么？"
        },
        {
            "start": 238.52,
            "end": 240.02,
            "text": "第五，跨境传输。"
        },
        {
            "start": 240.02,
            "end": 242.14,
            "text": "有没有数据传输到境外？"
        },
        {
            "start": 242.14,
            "end": 244.84,
            "text": "是否符合跨境传输的法规要求？"
        },
        {
            "start": 244.84,
            "end": 246.68,
            "text": "第六，AI 数据使用。"
        },
        {
            "start": 246.68,
            "end": 249.12,
            "text": "有没有用个人数据训练 AI 模型？"
        },
        {
            "start": 249.12,
            "end": 251.1,
            "text": "是否获得了相应的授权？"
        },
        {
            "start": 251.1,
            "end": 253.78,
            "text": "第五个工具：AI 风险评估表。"
        },
        {
            "start": 253.78,
            "end": 257.74,
            "text": "对你企业中的每一个 AI 应用，填写以下信息。"
        },
        {
            "start": 257.74,
            "end": 260.26,
            "text": "AI 系统名称和用途是什么？"
        },
        {
            "start": 260.26,
            "end": 261.8,
            "text": "涉及哪个业务部门？"
        },
        {
            "start": 261.8,
            "end": 264.6,
            "text": "影响哪些人群（员工、客户、公众）？"
        },
        {
            "start": 264.6,
            "end": 267.0,
            "text": "风险等级是高、中还是低？"
        },
        {
            "start": 267.0,
            "end": 271.64,
            "text": "六大风险逐项评估：幻觉风险的概率和影响？"
        },
        {
            "start": 271.64,
            "end": 273.12,
            "text": "数据泄露风险？"
        },
        {
            "start": 273.42,
            "end": 273.98,
            "text": "依赖风险？"
        },
        {
            "start": 273.98,
            "end": 274.96,
            "text": "声誉风险？"
        },
        {
            "start": 275.26,
            "end": 275.98,
            "text": "合规风险？"
        },
        {
            "start": 276.3,
            "end": 277.12,
            "text": "质量风险？"
        },
        {
            "start": 277.12,
            "end": 279.4,
            "text": "每个风险有什么预防措施？"
        },
        {
            "start": 279.4,
            "end": 281.38,
            "text": "有什么监控措施？"
        },
        {
            "start": 281.38,
            "end": 283.24,
            "text": "有什么应急预案？"
        },
        {
            "start": 283.24,
            "end": 285.76,
            "text": "这个表格建议每半年更新一次。"
        },
        {
            "start": 285.76,
            "end": 289.42,
            "text": "每次引入新的 AI 系统时也要做评估。"
        },
        {
            "start": 289.42,
            "end": 293.26,
            "text": "第六个工具：AI 法律助手的正确使用方式。"
        },
        {
            "start": 293.26,
            "end": 296.34,
            "text": "AI 可以帮你做很多法律相关的工作。"
        },
        {
            "start": 296.82000000000005,
            "end": 299.4,
            "text": "但你要知道它能做什么、不能做什么。"
        },
        {
            "start": 299.4,
            "end": 302.6,
            "text": "AI 能做的：解释法律条文的含义、"
        },
        {
            "start": 302.6,
            "end": 304.9,
            "text": "帮你审查合同找潜在风险、"
        },
        {
            "start": 304.9,
            "end": 307.58,
            "text": "帮你起草政策和协议的初稿、"
        },
        {
            "start": 307.58,
            "end": 311.52,
            "text": "帮你追踪法规变化、帮你做合规检查。"
        },
        {
            "start": 311.52,
            "end": 314.62,
            "text": "AI 不能做的：给你正式的法律意见。"
        },
        {
            "start": 314.62,
            "end": 317.66,
            "text": "AI 不是律师，它的分析可能有错误，"
        },
        {
            "start": 317.66,
            "end": 319.9200000000001,
            "text": "不能作为法律诉讼的依据。"
        },
        {
            "start": 319.9200000000001,
            "end": 321.72,
            "text": "正确的使用方式是："
        },
        {
            "start": 321.72,
            "end": 323.94,
            "text": "用 AI 做初步的分析和筛查，"
        },
        {
            "start": 323.94,
            "end": 325.94,
            "text": "发现可能有问题的地方。"
        },
        {
            "start": 325.94,
            "end": 328.4,
            "text": "然后把这些问题带给专业律师，"
        },
        {
            "start": 328.4,
            "end": 331.3,
            "text": "请律师给出正式的法律意见。"
        },
        {
            "start": 331.3,
            "end": 334.4,
            "text": "AI 帮你节省的是时间和初步筛查的成本。"
        },
        {
            "start": 334.4,
            "end": 337.36,
            "text": "但最终的法律把关还是要靠专业人士。"
        },
        {
            "start": 337.36,
            "end": 341.6,
            "text": "最后给大家一个建议：法律不是等出了问题再想的事。"
        },
        {
            "start": 341.6,
            "end": 345.78,
            "text": "很多企业平时不关注法律，等到出了纠纷才找律师。"
        },
        {
            "start": 345.78,
            "end": 348.32,
            "text": "这时候往往已经很被动了。"
        },
        {
            "start": 348.32,
            "end": 350.72,
            "text": "预防远比补救便宜。"
        },
        {
            "start": 350.72,
            "end": 355.52,
            "text": "花一万块做合同审查，可能帮你避免一百万的损失。"
        },
        {
            "start": 355.52,
            "end": 360.78,
            "text": "花五万块做数据隐私合规，可能帮你避免几百万的罚款。"
        },
        {
            "start": 360.78,
            "end": 363.28,
            "text": "建一个\"法律预防\"的习惯。"
        },
        {
            "start": 363.76,
            "end": 366.24,
            "text": "第一，找一个靠谱的法律顾问。"
        },
        {
            "start": 366.24,
            "end": 368.32,
            "text": "不是等出了事才找律师，"
        },
        {
            "start": 368.32,
            "end": 371.38,
            "text": "而是平时就有一个律师帮你做预防。"
        },
        {
            "start": 371.38,
            "end": 373.52,
            "text": "第二，定期做法律体检。"
        },
        {
            "start": 373.52,
            "end": 376.62,
            "text": "每年至少做一次：合同体检、"
        },
        {
            "start": 376.62,
            "end": 379.8,
            "text": "知识产权体检、劳动用工体检、"
        },
        {
            "start": 379.8,
            "end": 381.02,
            "text": "数据隐私体检。"
        },
        {
            "start": 381.02,
            "end": 384.42,
            "text": "第三，善用 AI 做日常的法律辅助工作。"
        },
        {
            "start": 384.42,
            "end": 387.72,
            "text": "把专业律师留给最重要的事情。"
        },
        {
            "start": 387.72,
            "end": 389.2,
            "text": "好，总结一下。"
        },
        {
            "start": 389.2,
            "end": 392.28,
            "text": "六个法律工具：AI 使用政策模板、"
        },
        {
            "start": 392.28,
            "end": 395.4,
            "text": "合同审查检查清单、知识产权保护清单、"
        },
        {
            "start": 395.4,
            "end": 398.94,
            "text": "数据隐私合规清单、AI 风险评估表、"
        },
        {
            "start": 398.94,
            "end": 401.1,
            "text": "AI 法律助手的正确用法。"
        },
        {
            "start": 401.1,
            "end": 404.14,
            "text": "核心理念：法律预防远比补救便宜。"
        },
        {
            "start": 404.14,
            "end": 407.72,
            "text": "日常用 AI 辅助，关键时刻请专业律师。"
        },
        {
            "start": 407.72,
            "end": 410.26,
            "text": "模块八到这里全部结束了。"
        },
        {
            "start": 410.26,
            "end": 414.86,
            "text": "从下一期开始，我们进入模块九：AI 实战工作坊，纯实操。"
        },
        {
            "start": 414.86,
            "end": 417.18,
            "text": "我是Lincoln，我们下期见。"
        },
        {
            "start": 417.18,
            "end": 420.76,
            "text": "1. 六大法律工具：AI 政策、合同清单、"
        },
        {
            "start": 420.76,
            "end": 424.14,
            "text": "IP 清单、隐私清单、风险评估表、"
        },
        {
            "start": 424.14,
            "end": 425.32,
            "text": "AI 法律助手"
        },
        {
            "start": 425.32,
            "end": 429.42,
            "text": "2. AI 能做法律初筛，但正式意见需专业律师"
        },
        {
            "start": 429.42,
            "end": 433.96,
            "text": "3. 法律预防远比补救便宜：定期法律体检"
        },
        {
            "start": 433.96,
            "end": 439.74,
            "text": "4. 建立习惯：找法律顾问、年度法律体检、AI 辅助日常"
        },
        {
            "start": 439.74,
            "end": 443.32,
            "text": "1. 你的企业有 AI 使用政策吗？"
        },
        {
            "start": 443.32,
            "end": 445.66,
            "text": "如果没有，今天就开始起草"
        },
        {
            "start": 445.66,
            "end": 448.96,
            "text": "2. 六个法律工具中，你最缺哪一个？"
        },
        {
            "start": 448.96,
            "end": 450.1,
            "text": "优先补上"
        },
        {
            "start": 450.1,
            "end": 453.0,
            "text": "3. 你有没有定期做法律体检的习惯？"
        },
        {
            "start": 453.0,
            "end": 454.36,
            "text": "上一次是什么时候？"
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
], navigation: { nextLessonUrl: "./module-legal.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的风险判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是风险判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的风险判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./module-legal.html?entry={entry}", secondaryHref: "./module-legal.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-legal-10", coachSource: "./ai-coach.html?source=lesson-legal-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于法律工具箱：AI 时代管理者必备的法律清单的思路打磨得更清楚。", buildThoughtCardDraft: (({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "法律工具箱：AI 时代管理者必备的法律清单", module: '法律、合规与风险' })), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./module-legal.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-legal.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
