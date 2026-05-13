(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  function getEls() { return { lessonStatus: document.getElementById('lessonStatus'), ctaTitle: document.getElementById('ctaTitle'), ctaCopy: document.getElementById('ctaCopy'), completionSheet: document.getElementById('completionSheet'), completionClose: document.getElementById('completionClose'), completionNextBtn: document.getElementById('completionNextBtn'), completionModuleBtn: document.getElementById('completionModuleBtn') }; }
  let completionShown = false;
  function showCompletionSheet(api) { const els = getEls(); if (!els.completionSheet || completionShown) return; completionShown = true; api.markLessonCompleted(); els.completionSheet.classList.add('show'); }
  function updateLessonStatus(api) { const els = getEls(); const time = api.elements.audio.currentTime || 0; const duration = api.elements.audio.duration || 0; if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return; if (duration && time >= duration - 2) { els.lessonStatus.textContent = '已完成'; els.lessonStatus.classList.add('done'); els.ctaTitle.textContent = '现在，把这节课整理成你的运营思考卡'; els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的运营与流程框架真正落回你的企业里。'; showCompletionSheet(api); } else if (time > 0.5) { els.lessonStatus.textContent = '学习中'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '边听边想，听完后开始整理'; els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的运营判断。'; } else { els.lessonStatus.textContent = '未开始'; els.lessonStatus.classList.remove('done'); els.ctaTitle.textContent = '先听课，再整理思路'; els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。'; } }

  window.MindsLeapConfigs.lessons.operations10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Operations 第10课",
      backLink: { href: './module-operations.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块五 · 运营与流程优化',
      lessonTitle: "第10课：案例：一家制造企业的 AI 运营升级",
      heroMeta: ['🎙 Operations 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀运营判断'],
      topNote: { title: '为什么这一节值得现在学？', body: "因为这节课会帮助你把运营与流程框架，重新放回 AI 时代的经营现实里，形成更稳定的运营判断。", meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业现场使用的运营判断框架'] },
      player: { initialSlide: "./assets/slides/operations-ep71-case-manufacturing/slide_01.png", initialSlideCount: "1 / 8", title: "当前内容：案例：一家制造企业的 AI 运营升级", subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。', initialSubtitle: '准备播放后，系统会同步切换课件与当前字幕。' },
      playerActions: { backToModuleHref: "./module-operations.html?entry=sequence#lesson-10", backToModuleLabel: '回到本模块章节', quickThoughtLabel: '查看学习地图', quickThoughtHref: './map.html?entry=sequence' },
      reflection: { title: '课后整理', leadStrong: '不要只停在“我听懂了”。', leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。', questions: [{ id: 'qOpportunity', title: '1. 今天这节课里，哪个运营判断最值得先带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这个判断为什么会影响你的效率、质量或交付。' }, { id: 'qResources', title: '2. 如果只选一个流程先开始优化，你会先动哪一段？', placeholder: '例如：交付流程、质检、库存、客服、项目推进或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' }, { id: 'qAlignment', title: '3. 这会怎么影响你接下来的资源配置或优化优先级？', placeholder: '这个框架会让你多看什么、少忽略什么，或者重新排序什么？', tip: '真正的运营学习，最终都会回到流程、瓶颈与资源配置判断。' }], outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。' },
      cta: { title: '回答先记录下来，继续往下学', body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。', titleId: 'ctaTitle', bodyId: 'ctaCopy', submitId: 'submitQuiz', submitLabel: "保存回答，进入下一节", coachLabel: "暂时跳过，继续学习", secondaryHref: "./lesson-operations-11.html?entry=sequence" },
      sidebar: { chaptersTitle: '本模块章节', chapters: [
        {
                "no": 1,
                "title": "运营思维：用系统的方式做事情",
                "body": "建立流程思维、瓶颈理论和标准化三层运营框架，再看 AI 如何让运营更可见、可预测、可自动化。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 2,
                "title": "精益管理：消除一切浪费",
                "body": "用精益视角识别浪费、优化流动，把持续改善真正落到日常运营里。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 3,
                "title": "质量管理：质量不是检出来的",
                "body": "从源头预防、过程控制和持续改进重建质量系统，再看 AI 如何帮助预警与归因。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 4,
                "title": "AI 供应链：让链条更智能",
                "body": "看懂预测、库存、采购和配送如何被 AI 重新组织，从而让供应链更快、更稳、更省。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 5,
                "title": "从 RPA 到 Agent：流程自动化的升级",
                "body": "从规则驱动的自动化走向可理解、可协调、可处理例外的智能流程系统。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 6,
                "title": "数据化运营：用 AI 驱动每一个运营决策",
                "body": "建立指标体系、实时监控、实验和预测优化，让运营真正从经验驱动走向数据驱动。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 7,
                "title": "敏捷项目管理：在变化中持续交付",
                "body": "重新理解短周期迭代、跨职能协作与 AI 辅助推进，让项目在变化中仍能稳定交付。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 8,
                "title": "案例：亚马逊的 AI 运营飞轮",
                "body": "从亚马逊案例看清楚，运营、数据和客户体验如何互相放大，形成持续增长的飞轮。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 9,
                "title": "案例：快时尚为什么能快",
                "body": "理解快反供应链、需求响应和库存周转背后的运营逻辑，看速度如何变成竞争力。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "案例：一家制造企业的 AI 运营升级",
                "body": "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "你的运营诊断：用 AI 找到效率瓶颈",
                "body": "用结构化诊断法识别流程瓶颈、浪费和自动化机会，把运营优化真正做成系统动作。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        },
        {
                "no": 12,
                "title": "自动化路线图：先做什么，后做什么",
                "body": "把候选流程排清优先级，形成一条务实可执行的 AI 自动化路线图，而不是一口气全做。",
                "badge": "待学习",
                "state": "",
                "badgeClass": ""
        }
], nextLessonHref: "./lesson-operations-11.html?entry=sequence", nextLessonLabel: "查看下一节", moduleOverviewHref: './module-operations.html?entry=sequence', moduleOverviewLabel: '查看本模块全部章节', benefitTitle: '本课你会得到什么', reasonTitle: '学习收获', reasonBody: "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。", statusTitle: '学习状态', statusBody: '未开始', statusId: 'lessonStatus', summaryTitle: "本期重点总结", summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "先理解流程为什么重要",
                "body": "前两期我们看了亚马逊和快时尚的案例，都是比较前沿的企业"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "流程看清楚以后",
                "body": "先做哪个订单、哪条线做什么产品、什么时候换线，全靠人脑算"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "找到真正的瓶颈",
                "body": "质检员从十几人减少到五人"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "把标准化做起来",
                "body": "排产的难度在于约束条件多"
        }
] },
      completion: { title: '这节课你已经学完了', body: "建议马上进入下一节，继续把这一组运营与流程框架学完整。", meta: ["当前完成：运营与流程优化 10/12", "建议下一节：你的运营诊断：用 AI 找到效率瓶颈", '也可以先整理这一节'], nextHref: "./lesson-operations-11.html?entry=sequence", nextLabel: "进入下一节", moduleHref: './module-operations.html?entry=sequence', moduleLabel: '查看本模块全部章节', thoughtId: 'completionQuickThoughtBtn', thoughtLabel: '查看学习地图', thoughtHref: './map.html?entry=sequence' }
    },
    moduleId: 'operations', lessonId: "operations-10", modulePage: 'module-operations.html', progressNamespace: 'operations', progressLessonKey: "lesson10", audioSource: './assets/audio/operations-ep71-case-manufacturing.mp3?v=20260513-operations-09-12a', vttSrc: './assets/subtitles/operations-ep71-case-manufacturing.vtt?v=20260513-operations-09-12a', slideBasePath: './assets/slides/', slideVersion: "?v=20260412-operations-01b", subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Minds Leap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "operations-ep71-case-manufacturing/slide_01.png",
            "label": "案例：一家制造企业的 AI 运营升级",
            "caption": "这一节会帮助你系统理解：案例：一家制造企业的 AI 运营升级"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_02.png",
            "label": "先理解流程为什么重要",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_03.png",
            "label": "流程看清楚以后",
            "caption": "先做哪个订单、哪条线做什么产品、什么时候换线，全靠人脑算。 经常出现有的线忙不过来、有的线空着的情况。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_04.png",
            "label": "找到真正的瓶颈",
            "caption": "质检员从十几人减少到五人。 减少的人转到了其他需要人的岗位。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_05.png",
            "label": "把标准化做起来",
            "caption": "排产的难度在于约束条件多。 你有多个客户的订单，每个订单有交期要求。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_06.png",
            "label": "AI 如何重构运营",
            "caption": "第二，动态安全库存。 不是所有原材料用同一个安全库存水平，而是根据每种原材料的供应稳定性、价格波动、使用频率，设定不同的安全库存。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_07.png",
            "label": "回到你的业务现场",
            "caption": "视觉质检需要标注好的图片数据，预测性维护需要设备运行数据，智能排产需要订单和产能数据。 如果你的数据基础太差，先花时间把数据整理好。"
        },
        {
            "file": "operations-ep71-case-manufacturing/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.52,
            "text": "大家好，我是 Lincoln。"
        },
        {
            "start": 1.52,
            "end": 3.72,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.72,
            "end": 6.62,
            "text": "前两期我们看了亚马逊和快时尚的案例，"
        },
        {
            "start": 6.62,
            "end": 8.3,
            "text": "都是比较前沿的企业。"
        },
        {
            "start": 8.3,
            "end": 12.98,
            "text": "今天换一个更接地气的视角——一家传统制造企业怎么用"
        },
        {
            "start": 12.98,
            "end": 14.74,
            "text": "AI 实现运营升级。"
        },
        {
            "start": 14.74,
            "end": 19.02,
            "text": "这个案例综合了多家真实制造企业的经验。"
        },
        {
            "start": 19.02,
            "end": 23.26,
            "text": "主角是一家大约五百人的机械零部件制造商。"
        },
        {
            "start": 23.26,
            "end": 26.6,
            "text": "产品卖给汽车和家电行业的大客户。"
        },
        {
            "start": 26.6,
            "end": 31.7,
            "text": "典型的传统制造业：订单驱动、工艺复杂、质量要求高。"
        },
        {
            "start": 31.7,
            "end": 35.7,
            "text": "先看升级之前，这家企业面临的四个核心痛点。"
        },
        {
            "start": 35.7,
            "end": 38.12,
            "text": "第一个痛点：质量问题频发。"
        },
        {
            "start": 38.12,
            "end": 40.9,
            "text": "产品的不良率在百分之三左右。"
        },
        {
            "start": 40.9,
            "end": 43.98,
            "text": "听起来不高，但对大客户来说不可接受。"
        },
        {
            "start": 43.98,
            "end": 47.68,
            "text": "大客户要求不良率控制在百分之零点五以下。"
        },
        {
            "start": 48.18,
            "end": 52.52,
            "text": "每个月因为质量问题导致的退货和赔偿大约二十万。"
        },
        {
            "start": 52.52,
            "end": 53.76,
            "text": "质检靠人眼。"
        },
        {
            "start": 53.76,
            "end": 57.26,
            "text": "十几个质检员在产线末端目视检查。"
        },
        {
            "start": 57.26,
            "end": 61.58,
            "text": "但零部件的某些缺陷很细微，肉眼很难发现。"
        },
        {
            "start": 61.58,
            "end": 66.34,
            "text": "而且质检员工作八小时之后，漏检率明显上升。"
        },
        {
            "start": 66.34,
            "end": 69.28,
            "text": "第二个痛点：设备故障频繁。"
        },
        {
            "start": 69.28,
            "end": 71.6,
            "text": "工厂有几十台核心设备。"
        },
        {
            "start": 71.6,
            "end": 75.4,
            "text": "设备一旦出故障停机，整条产线都停了。"
        },
        {
            "start": 75.4,
            "end": 80.82,
            "text": "每次非计划停机平均要停四到六个小时，算上修理和调试。"
        },
        {
            "start": 81.22,
            "end": 86.1,
            "text": "每个月大概有三到四次非计划停机，产能损失很大。"
        },
        {
            "start": 86.1,
            "end": 88.52,
            "text": "第三个痛点：排产效率低。"
        },
        {
            "start": 88.52,
            "end": 92.42,
            "text": "工厂有几十种产品、多条产线、多个客户订单。"
        },
        {
            "start": 92.42,
            "end": 94.76,
            "text": "排产靠生产主管的经验。"
        },
        {
            "start": 94.76,
            "end": 98.08,
            "text": "先做哪个订单、哪条线做什么产品、"
        },
        {
            "start": 98.08,
            "end": 100.52,
            "text": "什么时候换线，全靠人脑算。"
        },
        {
            "start": 100.52,
            "end": 104.42,
            "text": "经常出现有的线忙不过来、有的线空着的情况。"
        },
        {
            "start": 104.42,
            "end": 107.2,
            "text": "第四个痛点：库存管理粗放。"
        },
        {
            "start": 107.2,
            "end": 110.18,
            "text": "原材料库存偏高，占用了大量资金。"
        },
        {
            "start": 110.18,
            "end": 114.68,
            "text": "但偶尔又会出现某种原材料断货导致停产的情况。"
        },
        {
            "start": 114.68,
            "end": 118.28,
            "text": "库存管理靠手工Excel，没有系统化。"
        },
        {
            "start": 118.28,
            "end": 120.06,
            "text": "好，这四个痛点很典型。"
        },
        {
            "start": 120.55999999999999,
            "end": 122.78,
            "text": "很多制造企业都有类似的问题。"
        },
        {
            "start": 122.78,
            "end": 126.0,
            "text": "来看它们是怎么一步步用 AI 解决的。"
        },
        {
            "start": 126.0,
            "end": 128.45999999999998,
            "text": "老板的策略很务实：不搞大跃进，"
        },
        {
            "start": 128.46,
            "end": 130.76,
            "text": "而是\"选一个点、打透、见效、"
        },
        {
            "start": 130.76,
            "end": 131.44,
            "text": "再扩展\"。"
        },
        {
            "start": 131.84,
            "end": 134.6,
            "text": "第一个 AI 项目：视觉质检。"
        },
        {
            "start": 134.6,
            "end": 136.38,
            "text": "这是见效最快的场景。"
        },
        {
            "start": 136.38,
            "end": 140.96,
            "text": "在产线末端安装了工业相机和 AI 视觉检测系统。"
        },
        {
            "start": 140.96,
            "end": 142.66,
            "text": "实施过程分三步。"
        },
        {
            "start": 142.66,
            "end": 144.28,
            "text": "第一步，数据收集。"
        },
        {
            "start": 144.28,
            "end": 147.56,
            "text": "花了两周时间拍了几万张产品照片，"
        },
        {
            "start": 147.56,
            "end": 150.46,
            "text": "包括合格品和各种类型的不良品。"
        },
        {
            "start": 150.46,
            "end": 153.62,
            "text": "标注了每张照片的缺陷类型和位置。"
        },
        {
            "start": 153.62,
            "end": 155.7,
            "text": "第二步，模型训练。"
        },
        {
            "start": 155.7,
            "end": 159.08,
            "text": "用标注好的数据训练 AI 视觉模型。"
        },
        {
            "start": 159.08,
            "end": 162.28,
            "text": "刚开始的准确率只有百分之八十多，不够用。"
        },
        {
            "start": 162.28,
            "end": 164.98,
            "text": "经过三轮的数据补充和模型优化，"
        },
        {
            "start": 164.98,
            "end": 167.9199999999999,
            "text": "准确率提升到了百分之九十七。"
        },
        {
            "start": 167.92,
            "end": 169.88,
            "text": "第三步，上线调试。"
        },
        {
            "start": 169.88,
            "end": 172.7,
            "text": "AI 系统和产线的控制系统对接。"
        },
        {
            "start": 172.7,
            "end": 176.06,
            "text": "检测到不良品自动报警并弹出。"
        },
        {
            "start": 176.06,
            "end": 176.88,
            "text": "效果怎么样？"
        },
        {
            "start": 176.88,
            "end": 178.26,
            "text": "上线三个月后，"
        },
        {
            "start": 178.26,
            "end": 181.83999999999992,
            "text": "产品不良率从百分之三降到了百分之零点四。"
        },
        {
            "start": 181.84,
            "end": 185.38,
            "text": "漏检率从之前的百分之十五降到了百分之二以下。"
        },
        {
            "start": 185.38,
            "end": 188.14,
            "text": "质检员从十几人减少到五人。"
        },
        {
            "start": 188.14,
            "end": 190.72,
            "text": "减少的人转到了其他需要人的岗位。"
        },
        {
            "start": 190.72,
            "end": 191.86,
            "text": "更重要的是，"
        },
        {
            "start": 191.86,
            "end": 195.58,
            "text": "拿下了之前因为质量问题而犹豫的两个大客户订单。"
        },
        {
            "start": 195.58,
            "end": 198.24,
            "text": "第二个 AI 项目：预测性维护。"
        },
        {
            "start": 198.24,
            "end": 201.92,
            "text": "视觉质检的成功让老板和团队建立了信心。"
        },
        {
            "start": 201.92,
            "end": 204.6,
            "text": "接下来做设备的预测性维护。"
        },
        {
            "start": 204.6,
            "end": 208.4,
            "text": "在核心设备上安装了传感器，采集振动、"
        },
        {
            "start": 208.4,
            "end": 210.66,
            "text": "温度、电流、噪音等数据。"
        },
        {
            "start": 210.66,
            "end": 213.12,
            "text": "AI 模型分析这些数据的趋势，"
        },
        {
            "start": 213.12,
            "end": 215.98,
            "text": "预测设备什么时候可能出故障。"
        },
        {
            "start": 215.98,
            "end": 219.06,
            "text": "实施过程中遇到了一个挑战：数据不够。"
        },
        {
            "start": 219.06,
            "end": 222.9,
            "text": "设备运行的正常数据很多，但故障数据很少。"
        },
        {
            "start": 222.9,
            "end": 226.02,
            "text": "因为一年才坏几次，样本太少。"
        },
        {
            "start": 226.42,
            "end": 227.86,
            "text": "解决办法是两个。"
        },
        {
            "start": 227.86,
            "end": 228.1,
            "text": "第一，"
        },
        {
            "start": 228.1,
            "end": 232.84,
            "text": "把过去三年的设备维修记录和当时的运行数据整理出来，"
        },
        {
            "start": 232.84,
            "end": 235.16,
            "text": "虽然不够精细但有参考价值。"
        },
        {
            "start": 235.16,
            "end": 238.62,
            "text": "第二，使用了一种叫\"异常检测\"的 AI 方法。"
        },
        {
            "start": 238.62,
            "end": 240.78,
            "text": "不需要大量的故障样本，"
        },
        {
            "start": 240.78,
            "end": 243.6,
            "text": "而是学习\"正常运行\"是什么样子，"
        },
        {
            "start": 243.6,
            "end": 246.14,
            "text": "然后发现偏离正常的异常模式。"
        },
        {
            "start": 246.14,
            "end": 247.78,
            "text": "上线之后的效果："
        },
        {
            "start": 247.78,
            "end": 252.04,
            "text": "AI 在设备真正出故障之前的一到三天就能给出预警。"
        },
        {
            "start": 252.04,
            "end": 255.46,
            "text": "维修团队可以在计划好的时间进行维护，"
        },
        {
            "start": 255.46,
            "end": 259.08,
            "text": "而不是等设备突然停了再手忙脚乱地修。"
        },
        {
            "start": 259.6,
            "end": 264.1,
            "text": "非计划停机次数从每月三到四次降到了每月不到一次。"
        },
        {
            "start": 264.1,
            "end": 266.7600000000001,
            "text": "设备综合效率提升了百分之十五。"
        },
        {
            "start": 266.7600000000001,
            "end": 269.12,
            "text": "第三个 AI 项目：智能排产。"
        },
        {
            "start": 269.12,
            "end": 272.1,
            "text": "前两个项目都是在\"做\"的环节用 AI。"
        },
        {
            "start": 272.62,
            "end": 275.04,
            "text": "这个项目是在\"计划\"的环节用 AI。"
        },
        {
            "start": 275.04,
            "end": 277.74,
            "text": "排产的难度在于约束条件多。"
        },
        {
            "start": 277.74,
            "end": 281.0,
            "text": "你有多个客户的订单，每个订单有交期要求。"
        },
        {
            "start": 281.0,
            "end": 284.16,
            "text": "你有多条产线，每条线能做的产品不一样。"
        },
        {
            "start": 284.16,
            "end": 287.3,
            "text": "换线需要时间，频繁换线效率就低。"
        },
        {
            "start": 287.3,
            "end": 291.76,
            "text": "还要考虑原材料的到货时间、模具的可用性、人员的排班。"
        },
        {
            "start": 291.76,
            "end": 293.68,
            "text": "生产主管靠经验排产，"
        },
        {
            "start": 293.68,
            "end": 296.06,
            "text": "通常只能找到一个\"还过得去\"的方案，"
        },
        {
            "start": 296.06,
            "end": 298.14,
            "text": "很难找到最优方案。"
        },
        {
            "start": 298.14,
            "end": 302.94,
            "text": "AI 排产系统把所有的约束条件和目标都输入进去。"
        },
        {
            "start": 302.94,
            "end": 305.92,
            "text": "约束条件包括：订单交期、产线能力、"
        },
        {
            "start": 305.92,
            "end": 308.92,
            "text": "换线时间、原材料库存、人员排班。"
        },
        {
            "start": 309.38,
            "end": 311.98,
            "text": "优化目标包括：最大化产能利用率、"
        },
        {
            "start": 311.98,
            "end": 314.56,
            "text": "最小化交期延误、最小化换线次数。"
        },
        {
            "start": 314.56,
            "end": 318.38,
            "text": "AI 可以在几分钟内计算出几千种排产方案，"
        },
        {
            "start": 318.38,
            "end": 321.08,
            "text": "然后找到综合最优的那个。"
        },
        {
            "start": 321.08,
            "end": 325.87999999999994,
            "text": "效果：产能利用率从百分之七十二提升到百分之八十五。"
        },
        {
            "start": 325.88,
            "end": 329.73999999999995,
            "text": "交期准时率从百分之八十五提升到百分之九十五。"
        },
        {
            "start": 329.74,
            "end": 332.86000000000007,
            "text": "换线次数减少了百分之三十。"
        },
        {
            "start": 332.86000000000007,
            "end": 334.98,
            "text": "生产主管说了一句话很有意思："
        },
        {
            "start": 334.98,
            "end": 337.38,
            "text": "\"以前我每天花两个小时排产，"
        },
        {
            "start": 337.38,
            "end": 339.74,
            "text": "现在 AI 五分钟就排好了，"
        },
        {
            "start": 339.74,
            "end": 341.02,
            "text": "而且排得比我好。"
        },
        {
            "start": 341.02,
            "end": 345.5,
            "text": "我的时间可以花在解决异常问题和改善产线上了。"
        },
        {
            "start": 345.5,
            "end": 345.92,
            "text": "\""
        },
        {
            "start": 345.92,
            "end": 347.76,
            "text": "第四个 AI 项目：库存优化。"
        },
        {
            "start": 347.76,
            "end": 352.0,
            "text": "这是最后实施的项目，因为它依赖前面几个项目的数据。"
        },
        {
            "start": 352.0,
            "end": 354.44,
            "text": "AI 库存优化做了两件事。"
        },
        {
            "start": 354.44,
            "end": 355.58,
            "text": "第一，需求预测。"
        },
        {
            "start": 355.58,
            "end": 358.5,
            "text": "根据历史订单数据、客户的下单规律、"
        },
        {
            "start": 358.5,
            "end": 359.78,
            "text": "行业的季节性，"
        },
        {
            "start": 359.78,
            "end": 362.48,
            "text": "预测未来一到三个月的原材料需求。"
        },
        {
            "start": 362.48,
            "end": 364.5,
            "text": "第二，动态安全库存。"
        },
        {
            "start": 364.5,
            "end": 367.94,
            "text": "不是所有原材料用同一个安全库存水平，"
        },
        {
            "start": 367.94,
            "end": 371.2,
            "text": "而是根据每种原材料的供应稳定性、"
        },
        {
            "start": 371.2,
            "end": 373.16,
            "text": "价格波动、使用频率，"
        },
        {
            "start": 373.16,
            "end": 375.22,
            "text": "设定不同的安全库存。"
        },
        {
            "start": 375.22,
            "end": 379.66,
            "text": "供应稳定的可以少备一些，供应不稳定的多备一些。"
        },
        {
            "start": 379.66,
            "end": 380.48,
            "text": "效果："
        },
        {
            "start": 380.48,
            "end": 383.7,
            "text": "原材料库存金额降低了百分之二十五，"
        },
        {
            "start": 383.7,
            "end": 385.0,
            "text": "释放了大量流动资金。"
        },
        {
            "start": 385.0,
            "end": 390.06,
            "text": "同时原材料断货次数从每月两到三次降到了几乎为零。"
        },
        {
            "start": 390.06,
            "end": 392.7,
            "text": "整个 AI 升级历时大约一年。"
        },
        {
            "start": 392.7,
            "end": 394.96,
            "text": "投入的成本大约两百万。"
        },
        {
            "start": 394.96,
            "end": 396.28,
            "text": "我们来算一下回报。"
        },
        {
            "start": 396.28,
            "end": 398.32,
            "text": "质量改善带来的收益："
        },
        {
            "start": 398.32,
            "end": 400.94,
            "text": "退货赔偿减少了每月十五万，"
        },
        {
            "start": 400.94,
            "end": 404.96,
            "text": "新增大客户订单带来的年收入增加了约三百万。"
        },
        {
            "start": 404.96,
            "end": 407.02,
            "text": "设备效率提升带来的收益："
        },
        {
            "start": 407.02,
            "end": 410.52000000000004,
            "text": "非计划停机减少，产能提升百分之十五，"
        },
        {
            "start": 410.52000000000004,
            "end": 413.38,
            "text": "相当于增加了一条产线的部分产能。"
        },
        {
            "start": 413.38,
            "end": 416.72,
            "text": "排产优化带来的收益：产能利用率提升、"
        },
        {
            "start": 416.9,
            "end": 419.44,
            "text": "交期改善，客户满意度大幅提升。"
        },
        {
            "start": 419.44,
            "end": 423.18,
            "text": "库存优化带来的收益：释放流动资金约五百万。"
        },
        {
            "start": 423.18,
            "end": 428.06,
            "text": "综合算下来，AI 投入的回报周期大约是八到十个月。"
        },
        {
            "start": 428.06,
            "end": 430.1,
            "text": "第二年开始就是纯收益。"
        },
        {
            "start": 430.1,
            "end": 433.12,
            "text": "最后总结一下这个案例的几个关键经验。"
        },
        {
            "start": 433.64,
            "end": 436.52,
            "text": "第一，从痛点最大、见效最快的场景开始。"
        },
        {
            "start": 436.52,
            "end": 439.42,
            "text": "这家企业选择视觉质检作为第一个项目，"
        },
        {
            "start": 439.42,
            "end": 441.52,
            "text": "就是因为痛点明确、投入不大、"
        },
        {
            "start": 441.52,
            "end": 442.90000000000003,
            "text": "效果立竿见影。"
        },
        {
            "start": 442.90000000000003,
            "end": 444.66,
            "text": "第二，不需要一步到位。"
        },
        {
            "start": 444.66,
            "end": 447.06,
            "text": "用一年时间分四个阶段做，"
        },
        {
            "start": 447.06,
            "end": 449.78,
            "text": "每个阶段消化一个项目，稳扎稳打。"
        },
        {
            "start": 449.78,
            "end": 451.4,
            "text": "第三，数据是基础。"
        },
        {
            "start": 451.4,
            "end": 453.02,
            "text": "每个项目都需要数据。"
        },
        {
            "start": 453.02,
            "end": 456.06,
            "text": "视觉质检需要标注好的图片数据，"
        },
        {
            "start": 456.06,
            "end": 458.96,
            "text": "预测性维护需要设备运行数据，"
        },
        {
            "start": 458.96,
            "end": 461.96,
            "text": "智能排产需要订单和产能数据。"
        },
        {
            "start": 461.96,
            "end": 466.24,
            "text": "如果你的数据基础太差，先花时间把数据整理好。"
        },
        {
            "start": 466.24,
            "end": 468.38,
            "text": "第四，人比技术更关键。"
        },
        {
            "start": 468.38,
            "end": 472.26,
            "text": "每个项目上线的时候，一线员工的配合度决定了成败。"
        },
        {
            "start": 472.26,
            "end": 474.72,
            "text": "这家企业做对的一件事是："
        },
        {
            "start": 474.72,
            "end": 476.92,
            "text": "让一线员工参与到项目中来，"
        },
        {
            "start": 476.92,
            "end": 478.62,
            "text": "而不是强行推行。"
        },
        {
            "start": 478.62,
            "end": 480.28,
            "text": "好，总结一下。"
        },
        {
            "start": 480.28,
            "end": 482.88,
            "text": "传统制造企业 AI 升级四步走："
        },
        {
            "start": 482.88,
            "end": 485.02,
            "text": "视觉质检解决质量问题、"
        },
        {
            "start": 485.02,
            "end": 487.22,
            "text": "预测性维护解决设备停机、"
        },
        {
            "start": 487.22,
            "end": 489.12,
            "text": "智能排产解决产能利用、"
        },
        {
            "start": 489.12,
            "end": 491.28,
            "text": "库存优化解决资金占用。"
        },
        {
            "start": 491.28,
            "end": 494.26,
            "text": "关键经验：从痛点最大的场景切入、"
        },
        {
            "start": 494.26,
            "end": 496.32,
            "text": "分阶段推进、数据是基础、"
        },
        {
            "start": 496.32,
            "end": 497.86,
            "text": "人比技术更关键。"
        },
        {
            "start": 497.86,
            "end": 500.1,
            "text": "下一期我们进入实战环节："
        },
        {
            "start": 500.1,
            "end": 502.0,
            "text": "用 AI 做一次运营诊断，"
        },
        {
            "start": 502.0,
            "end": 503.6,
            "text": "找到你的效率瓶颈。"
        },
        {
            "start": 503.6,
            "end": 505.68,
            "text": "我是 Lincoln，我们下期见。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 9.257,
        "index": 0
    },
    {
        "start": 9.257,
        "end": 64.918,
        "index": 1
    },
    {
        "start": 64.918,
        "end": 120.579,
        "index": 2
    },
    {
        "start": 120.579,
        "end": 177.281,
        "index": 3
    },
    {
        "start": 177.281,
        "end": 233.751,
        "index": 4
    },
    {
        "start": 233.751,
        "end": 290.453,
        "index": 5
    },
    {
        "start": 290.453,
        "end": 349.585,
        "index": 6
    },
    {
        "start": 349.585,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-operations-11.html?entry={entry}" }, entryCopy: { sequence: { topNoteTitle: '学习收获', topNoteBody: "这节课会先帮你形成一个更稳定的运营与流程判断框架。", benefitSectionTitle: '本课学习收获', reasonCardTitle: '学习收获', reasonCardBody: "从传统制造场景看 AI 如何改善排产、质检、设备维护和交付效率。" }, problem: { topNoteTitle: '为什么系统先推荐你从这节课开始？', topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是运营判断框架还不够清楚。", benefitSectionTitle: '本课你会得到什么', reasonCardTitle: '推荐理由', reasonCardBody: "系统希望你先建立一个更稳定的运营判断框架，再去推进具体动作。" } }, reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] }, redirects: { submitHref: "./lesson-operations-11.html?entry={entry}", secondaryHref: "./lesson-operations-11.html?entry={entry}", thoughtCardHref: './thought-card.html', thoughtCardSource: "./thought-card.html?source=lesson-operations-10", coachSource: "./ai-coach.html?source=lesson-operations-10" }, authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' }, coachFirstMessage: "我想继续把这一节关于案例：一家制造企业的 AI 运营升级的思路打磨得更清楚。", buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "案例：一家制造企业的 AI 运营升级", module: '运营与流程优化' }), hooks: { onInit(api) { const els = getEls(); const entryMode = api.config.entryMode || 'sequence'; if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-operations-11.html" + '?entry=' + entryMode; if (els.completionModuleBtn) els.completionModuleBtn.href = './module-operations.html?entry=' + entryMode; if (els.completionClose) { els.completionClose.onclick = () => els.completionSheet?.classList.remove('show'); } updateLessonStatus(api); }, onLoadedMetadata: updateLessonStatus, onPlay: updateLessonStatus, onTimeUpdate: updateLessonStatus, onEnded(api) { updateLessonStatus(api); showCompletionSheet(api); } }
  };
})(window);
