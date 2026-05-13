(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  window.MindsLeapConfigs.modules.finance = {
    progressNamespace: 'finance',
    backHref: './map.html?entry={entry}',
    hero: { pill: '模块 02 · 财务与经营分析', title: '把数字重新变成经营判断，建立 AI 时代的财务思维', lead: '这个模块会从三张财务报表开始，逐步进入关键指标、现金流、AI 财务分析、估值、融资、股权、投资决策、风险管理与定价，最后回到一套真正可落地的财务体检流程。', meta: ['共 13 节', '预计总时长：约 2.3 小时', '适合作为战略模块之后的下一步'] },
    chapters: [
    {
        "key": "lesson1",
        "index": 1,
        "anchorId": "lesson-1",
        "title": "三张财务报表：企业的体检报告",
        "description": "先建立财务阅读的底层框架：资产负债表、利润表与现金流量表到底怎么看。",
        "href": "./lesson-finance-01.html?entry={entry}"
    },
    {
        "key": "lesson2",
        "index": 2,
        "anchorId": "lesson-2",
        "title": "关键财务指标：管理者必须盯住的几个数字",
        "description": "抓住几个最关键的数字，快速判断一家公司的健康度。",
        "href": "./lesson-finance-02.html?entry={entry}"
    },
    {
        "key": "lesson3",
        "index": 3,
        "anchorId": "lesson-3",
        "title": "现金流管理：利润不等于现金",
        "description": "理解为什么赚钱的公司也会死在现金流上，以及该怎么提前预警。",
        "href": "./lesson-finance-03.html?entry={entry}"
    },
    {
        "key": "lesson4",
        "index": 4,
        "anchorId": "lesson-4",
        "title": "AI 财务分析：让 AI 成为你的 CFO 助手",
        "description": "把 AI 用进财务分析，让数字阅读更快、更系统。",
        "href": "./lesson-finance-04.html?entry={entry}"
    },
    {
        "key": "lesson5",
        "index": 5,
        "anchorId": "lesson-5",
        "title": "公司估值：一家公司到底值多少钱",
        "description": "先建立估值判断框架，理解一家公司的价值到底从哪里来。",
        "href": "./lesson-finance-05.html?entry={entry}"
    },
    {
        "key": "lesson6",
        "index": 6,
        "anchorId": "lesson-6",
        "title": "AI 估值：用 AI 做公司估值的第一版判断",
        "description": "用 AI 提高估值分析效率，但保留管理者自己的判断。",
        "href": "./lesson-finance-06.html?entry={entry}"
    },
    {
        "key": "lesson7",
        "index": 7,
        "anchorId": "lesson-7",
        "title": "融资策略：什么时候该融资，怎么融更合适",
        "description": "理解融资不是越多越好，而是要匹配你的阶段、目标和筹码。",
        "href": "./lesson-finance-07.html?entry={entry}"
    },
    {
        "key": "lesson8",
        "index": 8,
        "anchorId": "lesson-8",
        "title": "股权结构：控制权、激励与长期治理",
        "description": "把融资、控制权和长期激励放在同一张桌子上考虑。",
        "href": "./lesson-finance-08.html?entry={entry}"
    },
    {
        "key": "lesson9",
        "index": 9,
        "anchorId": "lesson-9",
        "title": "投资决策：怎么判断一笔投入值不值",
        "description": "让投资决策回到回报、风险与机会成本，而不是只凭感觉。",
        "href": "./lesson-finance-09.html?entry={entry}"
    },
    {
        "key": "lesson10",
        "index": 10,
        "anchorId": "lesson-10",
        "title": "AI 时代的财务风险：你需要警惕什么",
        "description": "识别 AI 时代新的财务风险源，并建立更前置的预警机制。",
        "href": "./lesson-finance-10.html?entry={entry}"
    },
    {
        "key": "lesson11",
        "index": 11,
        "anchorId": "lesson-11",
        "title": "定价策略：价格不是拍脑袋决定的",
        "description": "把定价放回价值、成本、竞争与客户心理里重新判断。",
        "href": "./lesson-finance-11.html?entry={entry}"
    },
    {
        "key": "lesson12",
        "index": 12,
        "anchorId": "lesson-12",
        "title": "案例：NVIDIA 的财务与资本市场逻辑",
        "description": "通过 NVIDIA 看清增长、利润、估值和资本市场预期如何联动。",
        "href": "./lesson-finance-12.html?entry={entry}"
    },
    {
        "key": "lesson13",
        "index": 13,
        "anchorId": "lesson-13",
        "title": "你的财务体检：用 AI 做一次快速财务诊断",
        "description": "把整个模块整合起来，做一次真正可落地的财务体检。",
        "href": "./lesson-finance-13.html?entry={entry}"
    }
],
    side: { title: '这个模块怎么学更顺', cards: [{ title: '顺序学习建议', body: '先把第 1、2、3、4 节听完，你会先建立“财报 → 指标 → 现金流 → AI 分析”的四层骨架，后面再进入估值、融资和投资决策会顺很多。' }, { title: '学完每节以后', body: '建议每节都做一次课后整理，把数字背后的判断变成自己的经营语言。这样到最后的财务体检时，才更容易真正落地。' }, { title: 'AI 时代的重构角度', body: '每一节都不是只讲经典财务知识，而是把经典框架重新放回 AI 时代的经营现实里。' } ] },
    path: { title: '推荐学习路径', items: [{ title: '第 1 步', body: '先建立“财务到底怎么看”的底层框架。' }, { title: '第 2 步', body: '接着看懂关键指标、现金流、估值与融资逻辑。' }, { title: '第 3 步', body: '最后把所有框架汇总成一次真正可落地的财务体检。' }] }
  };
})(window);
