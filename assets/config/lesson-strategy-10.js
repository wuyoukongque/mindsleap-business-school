(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  function getEls() {
    return {
      lessonStatus: document.getElementById('lessonStatus'),
      ctaTitle: document.getElementById('ctaTitle'),
      ctaCopy: document.getElementById('ctaCopy'),
      completionSheet: document.getElementById('completionSheet'),
      completionClose: document.getElementById('completionClose'),
      completionNextBtn: document.getElementById('completionNextBtn'),
      completionModuleBtn: document.getElementById('completionModuleBtn')
    };
  }

  let completionShown = false;

  function showCompletionSheet(api) {
    const els = getEls();
    if (!els.completionSheet || completionShown) return;
    completionShown = true;
    api.markLessonCompleted();
    els.completionSheet.classList.add('show');
  }

  function updateLessonStatus(api) {
    const els = getEls();
    const time = api.elements.audio.currentTime || 0;
    const duration = api.elements.audio.duration || 0;
    if (!els.lessonStatus || !els.ctaTitle || !els.ctaCopy) return;

    if (duration && time >= duration - 2) {
      els.lessonStatus.textContent = '已完成';
      els.lessonStatus.classList.add('done');
      els.ctaTitle.textContent = '现在，把这节课整理成你的战略思考卡';
      els.ctaCopy.textContent = '你已经听完这节课。建议马上用下面 3 个问题，把今天的框架真正落回你的企业里。';
      showCompletionSheet(api);
    } else if (time > 0.5) {
      els.lessonStatus.textContent = '学习中';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '边听边想，听完后开始整理';
      els.ctaCopy.textContent = '你已经进入学习状态。建议先把整节课听完，再把这节课真正变成你的经营判断。';
    } else {
      els.lessonStatus.textContent = '未开始';
      els.lessonStatus.classList.remove('done');
      els.ctaTitle.textContent = '先听课，再整理思路';
      els.ctaCopy.textContent = '建议先把整节课听完，再开始记录你的思考。';
    }
  }

  window.MindsLeapConfigs.lessons.strategy10 = {
    shell: {
      documentTitle: "MindsLeap Business School · Strategy 第10课",
      backLink: { href: './module-strategy.html?entry=sequence', label: '← 返回模块' },
      moduleLabel: '模块一 · 企业战略',
      lessonTitle: "第10课：安索夫矩阵：四种增长路径怎么选",
      heroMeta: ['🎙 Strategy 音频主导', '🖼 Slides 跟随切换', '📝 学完后沉淀战略思考'],
      topNote: {
        title: '为什么这一节值得现在学？',
        body: "因为这节课会帮助你把经典战略框架，重新放回 AI 时代的经营现实里，形成更稳定的判断。",
        meta: ["预计时长：约 10-12 分钟", '你将获得：一个可带回企业使用的判断框架']
      },
      player: {
        initialSlide: "./assets/slides/strategy-ep10-ansoff-matrix/slide_01.png?v=20260410-strategy-safe-v1",
        initialSlideCount: "1 / 8",
        title: "当前内容：安索夫矩阵：四种增长路径怎么选",
        subtitle: '边听边看重点，学完后把今天的框架带回你的企业里。',
        initialSubtitle: ''
      },
      playerActions: {
        backToModuleHref: "./module-strategy.html?entry=sequence#lesson-10",
        backToModuleLabel: '回到本模块章节',
        quickThoughtLabel: '查看学习地图',
        quickThoughtHref: './map.html?entry=sequence'
      },
      reflection: {
        title: '课后整理',
        leadStrong: '不要只停在“我听懂了”。',
        leadBody: '用下面 3 个问题，把今天这节课真正放回你的企业现实里。系统会先保存你的回答，后续在模块复盘里统一整理。',
        questions: [
          { id: 'qOpportunity', title: '1. 今天这节课里，哪个判断最值得带回你的企业？', placeholder: '先写下最触动你的一点，不用追求完整。', tip: '重点不是复述概念，而是说清楚这件事为什么对你重要。' },
          { id: 'qResources', title: '2. 如果只选一个业务环节开始应用，这个框架会落在哪里？', placeholder: '例如：产品、营销、组织、定价、客户关系，或别的关键环节。', tip: '先选一个最现实的切入口，不要同时展开太多动作。' },
          { id: 'qAlignment', title: '3. 这会怎么影响你今年的优先级或资源配置？', placeholder: '这个框架会让你多做什么、少做什么，或者重新排序什么？', tip: '真正的战略学习，最终都会回到取舍与资源配置。' }
        ],
        outroNote: '系统会先保存你的回答。等你学完整个模块后，再统一做一次更完整的模块复盘。'
      },
      cta: {
        title: '回答先记录下来，继续往下学',
        body: '这一版 MVP 会先把你的回答保存下来。学完整个模块后，再统一做一次更完整的模块复盘。',
        titleId: 'ctaTitle',
        bodyId: 'ctaCopy',
        submitId: 'submitQuiz',
        submitLabel: "保存回答，进入下一节",
        coachLabel: "暂时跳过，继续学习",
        secondaryHref: "./lesson-strategy-11.html?entry=sequence"
      },
      sidebar: {
        chaptersTitle: '本模块章节',
        chapters: [
        {
                "no": 9,
                "title": "蓝海战略：AI 时代的新蓝海在哪里",
                "body": "把创造无竞争市场空间的经典框架，放到 AI 新机会里重新理解。",
                "badge": "已学过",
                "state": "",
                "badgeClass": ""
        },
        {
                "no": 10,
                "title": "安索夫矩阵：四种增长路径怎么选",
                "body": "用安索夫矩阵看清市场、产品与多元化的不同风险。",
                "badge": "当前",
                "state": "current",
                "badgeClass": ""
        },
        {
                "no": 11,
                "title": "并购与战略联盟：AI 时代的买 vs 建 vs 合作",
                "body": "面对新能力需求时，判断自己做、买下来还是合作。",
                "badge": "下一节",
                "state": "next",
                "badgeClass": "next"
        }
],
        nextLessonHref: "./lesson-strategy-11.html?entry=sequence",
        nextLessonLabel: "查看下一节",
        moduleOverviewHref: './module-strategy.html?entry=sequence',
        moduleOverviewLabel: '查看本模块全部章节',
        benefitTitle: '本课你会得到什么',
        reasonTitle: '学习收获',
        reasonBody: "用安索夫矩阵看清市场、产品与多元化的不同风险。",
        statusTitle: '学习状态',
        statusBody: '未开始',
        statusId: 'lessonStatus',
        summaryTitle: '本期重点总结',
        summaryCards: [
        {
                "eyebrow": "核心判断 01",
                "title": "安索夫矩阵帮你看清增长路径",
                "body": "增长不是只有“继续做大”这一种说法，而是要先判断你是在扩市场、扩产品，还是走向多元化。"
        },
        {
                "eyebrow": "核心判断 02",
                "title": "先从低风险路径开始",
                "body": "通常先做市场渗透，再看市场开发和产品开发，最后才考虑风险最高的多元化。"
        },
        {
                "eyebrow": "核心判断 03",
                "title": "AI 会降低部分增长试错成本",
                "body": "AI 可以更快完成调研、洞察、测试和内容适配，但不会替你决定哪条增长路最值得走。"
        },
        {
                "eyebrow": "核心判断 04",
                "title": "多元化依然最危险",
                "body": "即使有 AI 加速，多元化仍然意味着新产品 + 新市场的双重不确定性，不能轻易美化。"
        }
]
      },
      completion: {
        title: '这节课你已经学完了',
        body: "建议马上进入下一节，继续把这一组战略框架学完整。",
        meta: ["当前完成：企业战略 10/14", "建议下一节：并购与战略联盟：AI 时代的买 vs 建 vs 合作", '也可以先整理这一节'],
        nextHref: "./lesson-strategy-11.html?entry=sequence",
        nextLabel: "进入下一节",
        moduleHref: './module-strategy.html?entry=sequence',
        moduleLabel: '查看本模块全部章节',
        thoughtId: 'completionQuickThoughtBtn',
        thoughtLabel: '查看学习地图',
        thoughtHref: './map.html?entry=sequence'
      }
    },
    moduleId: 'strategy',
    lessonId: "strategy-10",
    modulePage: 'module-strategy.html',
    progressNamespace: 'strategy',
    progressLessonKey: "lesson10",
    audioSource: './assets/audio/strategy-ep10-ansoff-matrix.mp3?v=20260410-strategy-sync',
    vttSrc: './assets/subtitles/strategy-ep10-ansoff-matrix.vtt?v=20260410-strategy-sync',
    slideBasePath: './assets/slides/',
    slideVersion: '?v=20260410-strategy-safe-v1',
    subtitleReplacements: [[',', '，'], ['?', '？'], ['MindsLeap商学院', 'MindsLeap 商学院'], ['Claw商学院', 'MindsLeap 商学院']],
    lessonSlides: [
        {
            "file": "strategy-ep10-ansoff-matrix/slide_01.png",
            "label": "安索夫矩阵：四种增长路径怎么选",
            "caption": "这一节会帮助你系统理解：安索夫矩阵：四种增长路径怎么选"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_02.png",
            "label": "先从问题开始",
            "caption": "大家好，我是Lincoln。 欢迎来到MindsLeap商学院。"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_03.png",
            "label": "经典框架",
            "caption": "AI精准营销帮你找到更多潜在客户。 AI个性化推荐帮你提高转化率和客单价。"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_04.png",
            "label": "关键判断",
            "caption": "AI可以快速帮你做市场调研、竞品分析、用户洞察。 以前请一个咨询公司做这些可能要花几十万，现在AI几天就能给你一个初步的分析。"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_05.png",
            "label": "AI 时代的变化",
            "caption": "第四条：多元化。 新产品 × 新市场。"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_06.png",
            "label": "回到你的企业",
            "caption": "因为AI让你能做以前做不到的事情。 比如你以前只能服务大客户，因为小客户的服务成本太高不划算。"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_07.png",
            "label": "风险与提醒",
            "caption": "第一，用安索夫矩阵分析你的公司，你目前的增长主要靠哪条路径？ 第二，你的市场渗透做透了吗？"
        },
        {
            "file": "strategy-ep10-ansoff-matrix/slide_08.png",
            "label": "这节课最值得带走的三点",
            "caption": "学完后，最重要的是把今天的框架带回你的企业里。"
        }
    ],
    subtitleCues: [
        {
            "start": 0.0,
            "end": 1.28,
            "text": "大家好，我是Lincoln。"
        },
        {
            "start": 1.28,
            "end": 3.34,
            "text": "欢迎来到MindsLeap 商学院。"
        },
        {
            "start": 3.34,
            "end": 4.76,
            "text": "今天我们聊增长。"
        },
        {
            "start": 4.76,
            "end": 9.1,
            "text": "每个企业都想增长，但增长的路径不止一条。"
        },
        {
            "start": 9.1,
            "end": 10.28,
            "text": "怎么选？"
        },
        {
            "start": 10.28,
            "end": 13.52,
            "text": "安索夫矩阵给了我们一个非常清晰的框架。"
        },
        {
            "start": 13.52,
            "end": 18.42,
            "text": "安索夫矩阵是Igor Ansoff在1957年提出来的，"
        },
        {
            "start": 18.42,
            "end": 19.5,
            "text": "快七十年了，"
        },
        {
            "start": 19.5,
            "end": 23.1,
            "text": "到今天依然是最简洁好用的增长战略框架。"
        },
        {
            "start": 23.1,
            "end": 25.71,
            "text": "它用两个维度划出四个象限。"
        },
        {
            "start": 25.71,
            "end": 28.68,
            "text": "横轴是市场：现有市场还是新市场。"
        },
        {
            "start": 28.68,
            "end": 31.64,
            "text": "纵轴是产品：现有产品还是新产品。"
        },
        {
            "start": 31.64,
            "end": 33.74,
            "text": "四个象限就是四条增长路径。"
        },
        {
            "start": 33.74,
            "end": 35.56,
            "text": "第一条：市场渗透。"
        },
        {
            "start": 35.56,
            "end": 37.38,
            "text": "现有产品 × 现有市场。"
        },
        {
            "start": 37.38,
            "end": 41.42,
            "text": "就是在你现在的市场里，把现有的产品卖给更多的人。"
        },
        {
            "start": 41.42,
            "end": 43.68,
            "text": "或者让已有的客户买更多。"
        },
        {
            "start": 43.68,
            "end": 46.08,
            "text": "这是风险最低的增长路径。"
        },
        {
            "start": 46.08,
            "end": 49.26,
            "text": "因为你的产品已经验证了，市场你也熟悉。"
        },
        {
            "start": 49.26,
            "end": 51.9,
            "text": "核心打法就是：提高市场份额、"
        },
        {
            "start": 52.26,
            "end": 55.02,
            "text": "提高客户复购、提高客户单价。"
        },
        {
            "start": 55.02,
            "end": 57.02,
            "text": "AI怎么帮你做市场渗透？"
        },
        {
            "start": 57.32,
            "end": 58.02,
            "text": "非常多。"
        },
        {
            "start": 58.02,
            "end": 60.78,
            "text": "AI精准营销帮你找到更多潜在客户。"
        },
        {
            "start": 60.78,
            "end": 64.48,
            "text": "AI个性化推荐帮你提高转化率和客单价。"
        },
        {
            "start": 64.48,
            "end": 67.5,
            "text": "AI客户运营帮你提高复购率和留存率。"
        },
        {
            "start": 67.5,
            "end": 70.76,
            "text": "说白了，市场渗透就是把现有的生意做得更深。"
        },
        {
            "start": 70.76,
            "end": 72.66,
            "text": "AI是做深的加速器。"
        },
        {
            "start": 73.12,
            "end": 74.24,
            "text": "第二条：市场开发。"
        },
        {
            "start": 74.24,
            "end": 76.0,
            "text": "现有产品 × 新市场。"
        },
        {
            "start": 76.0,
            "end": 78.42,
            "text": "就是把你现有的产品卖到新的市场。"
        },
        {
            "start": 78.42,
            "end": 83.1,
            "text": "新市场可以是新的地理区域、新的客户群体、新的渠道。"
        },
        {
            "start": 83.12,
            "end": 87.74,
            "text": "比如说，一个在中国做得不错的SaaS产品，想出海到东南亚。"
        },
        {
            "start": 87.74,
            "end": 90.4,
            "text": "产品是现有的，市场是新的。"
        },
        {
            "start": 90.4,
            "end": 92.64,
            "text": "AI对市场开发的帮助很大。"
        },
        {
            "start": 92.64,
            "end": 95.24,
            "text": "出海最大的障碍之一是语言和文化。"
        },
        {
            "start": 95.24,
            "end": 98.98,
            "text": "以前做本地化需要大量的翻译和文化适配工作。"
        },
        {
            "start": 98.98,
            "end": 102.64,
            "text": "现在AI翻译和内容本地化的质量已经非常好了，"
        },
        {
            "start": 102.64,
            "end": 104.46,
            "text": "成本也低了一个数量级。"
        },
        {
            "start": 104.46,
            "end": 108.2,
            "text": "一个小团队用AI就能把产品做成多语言版本。"
        },
        {
            "start": 108.2,
            "end": 113.1,
            "text": "还有，进入新市场需要了解当地的竞争格局和用户需求。"
        },
        {
            "start": 113.1,
            "end": 117.86000000000001,
            "text": "AI可以快速帮你做市场调研、竞品分析、用户洞察。"
        },
        {
            "start": 117.86000000000001,
            "end": 121.1,
            "text": "以前请一个咨询公司做这些可能要花几十万，"
        },
        {
            "start": 121.1,
            "end": 123.98,
            "text": "现在AI几天就能给你一个初步的分析。"
        },
        {
            "start": 123.98,
            "end": 126.0,
            "text": "第三条：产品开发。"
        },
        {
            "start": 126.08,
            "end": 128.04,
            "text": "新产品 × 现有市场。"
        },
        {
            "start": 128.04,
            "end": 131.86,
            "text": "就是给你现在的客户开发新的产品或服务。"
        },
        {
            "start": 131.86,
            "end": 136.28,
            "text": "比如说，你是一个做CRM的公司，你的客户是中小企业。"
        },
        {
            "start": 136.28,
            "end": 139.38,
            "text": "你发现客户不只需要CRM，还需要财务管理。"
        },
        {
            "start": 139.38,
            "end": 141.18,
            "text": "于是你开发了一个财务模块。"
        },
        {
            "start": 141.18,
            "end": 144.08,
            "text": "客户是同一群人，产品是新的。"
        },
        {
            "start": 144.08,
            "end": 145.94,
            "text": "AI让产品开发变快了。"
        },
        {
            "start": 145.94,
            "end": 148.34,
            "text": "以前开发一个新功能可能需要三个月。"
        },
        {
            "start": 148.34,
            "end": 151.1,
            "text": "现在AI辅助编程、AI辅助设计、"
        },
        {
            "start": 151.16,
            "end": 152.46,
            "text": "AI辅助测试，"
        },
        {
            "start": 152.46,
            "end": 154.74,
            "text": "开发周期可能缩短到一个月。"
        },
        {
            "start": 154.74,
            "end": 159.08,
            "text": "更重要的是，AI帮你更好地理解现有客户的需求。"
        },
        {
            "start": 159.08,
            "end": 162.54,
            "text": "通过分析客户的使用数据、客服对话、"
        },
        {
            "start": 162.9,
            "end": 163.54,
            "text": "反馈意见，"
        },
        {
            "start": 163.54,
            "end": 166.42,
            "text": "AI能帮你发现客户的隐性需求——"
        },
        {
            "start": 166.42,
            "end": 170.2,
            "text": "那些客户自己都没明确说出来但确实需要的东西。"
        },
        {
            "start": 170.32,
            "end": 172.3,
            "text": "第四条：多元化。"
        },
        {
            "start": 172.3,
            "end": 174.26,
            "text": "新产品 × 新市场。"
        },
        {
            "start": 174.26,
            "end": 176.64,
            "text": "这是风险最高的增长路径。"
        },
        {
            "start": 176.64,
            "end": 180.74,
            "text": "新产品加新市场，你面对的是完全未知的领域。"
        },
        {
            "start": 180.74,
            "end": 184.82,
            "text": "多元化又分为相关多元化和非相关多元化。"
        },
        {
            "start": 184.82,
            "end": 189.4,
            "text": "相关多元化是进入跟你现有业务有协同效应的新领域。"
        },
        {
            "start": 189.4,
            "end": 192.18,
            "text": "比如说亚马逊从电商做到云计算，"
        },
        {
            "start": 192.18,
            "end": 194.22,
            "text": "虽然是新产品新市场，"
        },
        {
            "start": 194.22,
            "end": 198.66,
            "text": "但核心能力是共享的——都是大规模的技术基础设施运营。"
        },
        {
            "start": 198.66,
            "end": 202.18,
            "text": "非相关多元化就是进入完全不相关的领域。"
        },
        {
            "start": 202.18,
            "end": 204.24,
            "text": "比如一个房地产公司去做奶茶。"
        },
        {
            "start": 204.24,
            "end": 208.2,
            "text": "这种通常不太建议，除非你有非常特殊的原因。"
        },
        {
            "start": 208.2,
            "end": 210.32,
            "text": "好，四条路径讲完了。"
        },
        {
            "start": 210.32,
            "end": 210.96,
            "text": "怎么选？"
        },
        {
            "start": 210.96,
            "end": 213.54,
            "text": "我给大家一个决策顺序的建议。"
        },
        {
            "start": 213.54,
            "end": 215.06,
            "text": "优先考虑市场渗透。"
        },
        {
            "start": 215.06,
            "end": 219.18,
            "text": "因为风险最低，而且你可能还没有把现有市场做透。"
        },
        {
            "start": 219.18,
            "end": 222.46,
            "text": "很多公司着急拓展新市场、开发新产品，"
        },
        {
            "start": 222.46,
            "end": 226.26,
            "text": "但其实在现有市场还有大量增长空间没被挖掘。"
        },
        {
            "start": 226.72,
            "end": 230.8,
            "text": "特别是在AI时代，市场渗透的空间比以前更大了。"
        },
        {
            "start": 230.8,
            "end": 233.3,
            "text": "因为AI让你能做以前做不到的事情。"
        },
        {
            "start": 233.3,
            "end": 235.5,
            "text": "比如你以前只能服务大客户，"
        },
        {
            "start": 235.5,
            "end": 238.04,
            "text": "因为小客户的服务成本太高不划算。"
        },
        {
            "start": 238.04,
            "end": 243.14,
            "text": "但AI可以大幅降低服务成本，让你能够profitable地服务小客户。"
        },
        {
            "start": 243.14,
            "end": 246.68,
            "text": "这就是在现有市场里找到了新的增长空间。"
        },
        {
            "start": 246.68,
            "end": 251.0,
            "text": "第二步考虑市场开发或产品开发，取决于你的核心能力。"
        },
        {
            "start": 251.0,
            "end": 253.9,
            "text": "如果你的核心能力在产品和技术上，"
        },
        {
            "start": 253.9,
            "end": 256.28,
            "text": "可以考虑用同样的产品打新市场。"
        },
        {
            "start": 256.28,
            "end": 259.48,
            "text": "如果你的核心能力在客户关系和渠道上，"
        },
        {
            "start": 259.48,
            "end": 261.76,
            "text": "可以考虑给现有客户开发新产品。"
        },
        {
            "start": 261.76,
            "end": 263.44,
            "text": "最后才考虑多元化。"
        },
        {
            "start": 263.44,
            "end": 267.12,
            "text": "而且即使多元化，也优先考虑相关多元化。"
        },
        {
            "start": 267.12,
            "end": 269.28,
            "text": "还有一点很重要：AI时代不要贪多。"
        },
        {
            "start": 269.28,
            "end": 271.44,
            "text": "AI降低了做很多事情的门槛，"
        },
        {
            "start": 271.44,
            "end": 273.76,
            "text": "但这不意味着你应该什么都做。"
        },
        {
            "start": 273.76,
            "end": 276.4,
            "text": "战略是取舍，记得第一期讲的吗？"
        },
        {
            "start": 276.4,
            "end": 278.36,
            "text": "AI让你有能力做更多的事，"
        },
        {
            "start": 278.36,
            "end": 281.76,
            "text": "但你的战略判断力决定了你应该做哪几件事。"
        },
        {
            "start": 281.76,
            "end": 283.46,
            "text": "好，今天的思考题。"
        },
        {
            "start": 283.46,
            "end": 285.98,
            "text": "第一，用安索夫矩阵分析你的公司，"
        },
        {
            "start": 285.98,
            "end": 288.64,
            "text": "你目前的增长主要靠哪条路径？"
        },
        {
            "start": 288.64,
            "end": 291.02,
            "text": "第二，你的市场渗透做透了吗？"
        },
        {
            "start": 291.02,
            "end": 294.04,
            "text": "有没有AI能帮你挖掘的存量增长空间？"
        },
        {
            "start": 294.04,
            "end": 298.14,
            "text": "第三，如果你要选一条新的增长路径，你选哪条？"
        },
        {
            "start": 298.24,
            "end": 298.78,
            "text": "为什么？"
        },
        {
            "start": 298.78,
            "end": 300.0,
            "text": "总结一下。"
        },
        {
            "start": 300.0,
            "end": 302.44,
            "text": "第一，安索夫矩阵四条增长路径："
        },
        {
            "start": 302.44,
            "end": 305.52,
            "text": "市场渗透、市场开发、产品开发、"
        },
        {
            "start": 305.56,
            "end": 306.5,
            "text": "多元化。"
        },
        {
            "start": 306.5,
            "end": 307.88,
            "text": "风险从低到高。"
        },
        {
            "start": 307.88,
            "end": 310.34,
            "text": "第二，优先做市场渗透。"
        },
        {
            "start": 310.34,
            "end": 313.8,
            "text": "AI让渗透空间更大了——以前够不到的客户，"
        },
        {
            "start": 313.8,
            "end": 315.06,
            "text": "现在够得到了。"
        },
        {
            "start": 315.06,
            "end": 317.4,
            "text": "第三，AI加速了每条路径："
        },
        {
            "start": 317.4,
            "end": 320.94,
            "text": "精准营销加速渗透，AI翻译加速出海，"
        },
        {
            "start": 320.94,
            "end": 323.12,
            "text": "AI开发加速新产品，"
        },
        {
            "start": 323.12,
            "end": 325.36,
            "text": "AI分析帮你发现隐性需求。"
        },
        {
            "start": 325.36,
            "end": 328.82,
            "text": "第四，AI降低了做事的门槛，但不要贪多。"
        },
        {
            "start": 328.82,
            "end": 331.0,
            "text": "战略的核心仍然是取舍。"
        },
        {
            "start": 331.0,
            "end": 333.22,
            "text": "下一期我们聊并购与战略联盟。"
        },
        {
            "start": 333.22,
            "end": 335.92,
            "text": "在AI时代，你是应该买一个AI团队，"
        },
        {
            "start": 335.92,
            "end": 338.9,
            "text": "还是跟大模型厂商合作，还是自己建？"
        },
        {
            "start": 338.9,
            "end": 342.8,
            "text": "这个\"买vs建vs合作\"的决策框架非常重要。"
        },
        {
            "start": 342.8,
            "end": 344.12,
            "text": "好，今天就到这里。"
        },
        {
            "start": 344.12,
            "end": 345.56,
            "text": "我们下期再见，拜拜。"
        }
    ],
    slideTimeline: [
    {
        "start": 0.0,
        "end": 3.34,
        "index": 0
    },
    {
        "start": 3.34,
        "end": 58.02,
        "index": 1
    },
    {
        "start": 58.02,
        "end": 113.1,
        "index": 2
    },
    {
        "start": 113.1,
        "end": 170.32,
        "index": 3
    },
    {
        "start": 170.32,
        "end": 230.8,
        "index": 4
    },
    {
        "start": 230.8,
        "end": 283.46,
        "index": 5
    },
    {
        "start": 283.46,
        "end": 298.78,
        "index": 6
    },
    {
        "start": 298.78,
        "end": 9999,
        "index": 7
    }
], navigation: { nextLessonUrl: "./lesson-strategy-11.html?entry={entry}" },
    entryCopy: {
      sequence: {
        topNoteTitle: '学习收获',
        topNoteBody: "这节课会先帮你形成一个更稳定的经营判断框架。",
        benefitSectionTitle: '本课学习收获',
        reasonCardTitle: '学习收获',
        reasonCardBody: "用安索夫矩阵看清市场、产品与多元化的不同风险。"
      },
      problem: {
        topNoteTitle: '为什么系统先推荐你从这节课开始？',
        topNoteBody: "因为你的问题背后，很可能卡住的不是动作不够多，而是判断框架还不够清楚。",
        benefitSectionTitle: '本课你会得到什么',
        reasonCardTitle: '推荐理由',
        reasonCardBody: "系统希望你先建立一个更稳定的战略判断框架，再去推进具体动作。"
      }
    },
    reflection: { fields: [{ id: 'qOpportunity', key: 'q1' }, { id: 'qResources', key: 'q2' }, { id: 'qAlignment', key: 'q3' }] },
    redirects: {
      submitHref: "./lesson-strategy-11.html?entry={entry}",
      secondaryHref: "./lesson-strategy-11.html?entry={entry}",
      thoughtCardHref: './thought-card.html',
      thoughtCardSource: "./thought-card.html?source=lesson-strategy-10",
      coachSource: "./ai-coach.html?source=lesson-strategy-10"
    },
    authActions: { submitReflection: 'submit_reflection', openCoach: 'open_coach' },
    coachFirstMessage: "我想继续把这一节关于安索夫矩阵：四种增长路径怎么选的思路打磨得更清楚。",
    buildThoughtCardDraft: ({ answers, notes }) => ({ opportunity: answers.q1 || '', resources: answers.q2 || '', alignment: answers.q3 || '', notes: notes || '', lesson: "安索夫矩阵：四种增长路径怎么选", module: '企业战略' }),
    hooks: {
      onInit(api) {
        const els = getEls();
        const entryMode = api.config.entryMode || 'sequence';
        if (els.completionNextBtn) els.completionNextBtn.href = "./lesson-strategy-11.html" + '?entry=' + entryMode;
        if (els.completionModuleBtn) els.completionModuleBtn.href = './module-strategy.html?entry=' + entryMode;
        if (els.completionClose) {
          els.completionClose.onclick = () => els.completionSheet?.classList.remove('show');
        }
        updateLessonStatus(api);
      },
      onLoadedMetadata: updateLessonStatus,
      onPlay: updateLessonStatus,
      onTimeUpdate: updateLessonStatus,
      onEnded(api) {
        updateLessonStatus(api);
        showCompletionSheet(api);
      }
    }
  };
})(window);
