(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  window.MindsLeapConfigs.modules.marketing = {
    progressNamespace: 'marketing',
    backHref: './map.html?entry={entry}',
    hero: { pill: '模块 03 · 营销与增长', title: '把零散营销动作重新整理成增长判断，建立 AI 时代的营销框架', lead: "这个模块会从 STP、品牌定位开始，逐步进入营销组合、消费者心理、增长飞轮、AI 内容营销、个性化营销、营销自动化，以及更复杂的 B2B 与全球化场景。当前试跑先开放前 14 节。", meta: ["当前开放 14 节", "预计总时长：约 168 分钟", '适合作为财务模块之后的下一步'] },
    chapters: [
    {
        "key": "lesson1",
        "index": 1,
        "anchorId": "lesson-1",
        "title": "STP：找到你的市场在哪里",
        "description": "先想清楚：市场分哪几块、先打哪一块、你要在用户心里占据什么位置。",
        "href": "./lesson-marketing-01.html?entry={entry}"
    },
    {
        "key": "lesson2",
        "index": 2,
        "anchorId": "lesson-2",
        "title": "品牌定位：在用户心里占一个位置",
        "description": "从差异化与心智占位出发，重新理解品牌定位在 AI 时代为什么更重要。",
        "href": "./lesson-marketing-02.html?entry={entry}"
    },
    {
        "key": "lesson3",
        "index": 3,
        "anchorId": "lesson-3",
        "title": "4P 到 4C：营销组合怎么设计",
        "description": "把产品、价格、渠道、推广放回同一张桌子，再用 4C 重新看客户价值。",
        "href": "./lesson-marketing-03.html?entry={entry}"
    },
    {
        "key": "lesson4",
        "index": 4,
        "anchorId": "lesson-4",
        "title": "消费者决策心理：人为什么买单",
        "description": "理解锚定、损失厌恶、社会认同等关键机制，再看 AI 如何把心理触发做得更精准。",
        "href": "./lesson-marketing-04.html?entry={entry}"
    },
    {
        "key": "lesson5",
        "index": 5,
        "anchorId": "lesson-5",
        "title": "增长飞轮：从 AARRR 到 AI 驱动增长",
        "description": "把获取、激活、留存、收入、推荐串成一个增长系统，再找到 AI 最值得介入的关键杠杆点。",
        "href": "./lesson-marketing-05.html?entry={entry}"
    },
    {
        "key": "lesson6",
        "index": 6,
        "anchorId": "lesson-6",
        "title": "AI 内容营销：规模化创作高质量内容",
        "description": "把内容生产从一次次临时输出，升级成模板、语料与审核驱动的内容系统。",
        "href": "./lesson-marketing-06.html?entry={entry}"
    },
    {
        "key": "lesson7",
        "index": 7,
        "anchorId": "lesson-7",
        "title": "个性化营销：千人千面的实现路径",
        "description": "把千人千面拆成四个层次、三类基础设施和几个最值得先做的应用场景。",
        "href": "./lesson-marketing-07.html?entry={entry}"
    },
    {
        "key": "lesson8",
        "index": 8,
        "anchorId": "lesson-8",
        "title": "营销自动化：让 AI Agent 帮你跑增长",
        "description": "把营销自动化从规则引擎升级成目标驱动的执行系统，先从最值得落地的五类 Agent 场景开始。",
        "href": "./lesson-marketing-08.html?entry={entry}"
    },
    {
        "key": "lesson9",
        "index": 9,
        "anchorId": "lesson-9",
        "title": "故事化营销：AI 时代更需要人的温度",
        "description": "把品牌表达从“我想说什么”转成“用户为什么会在乎”，用故事建立真实感、记忆点和信任。",
        "href": "./lesson-marketing-09.html?entry={entry}"
    },
    {
        "key": "lesson10",
        "index": 10,
        "anchorId": "lesson-10",
        "title": "B2B 营销：企业客户怎么打",
        "description": "理解 B2B 的多角色决策和长周期购买，再用 ABM、线索培育、AI 评分与销售协同建立更稳的企业获客系统。",
        "href": "./lesson-marketing-10.html?entry={entry}"
    },
    {
        "key": "lesson11",
        "index": 11,
        "anchorId": "lesson-11",
        "title": "出海营销：AI 如何降低全球化门槛",
        "description": "把出海最难的语言、文化和市场洞察拆开来看，再用 AI 建立更轻量的全球化营销打法。",
        "href": "./lesson-marketing-11.html?entry={entry}"
    },
    {
        "key": "lesson12",
        "index": 12,
        "anchorId": "lesson-12",
        "title": "案例：可口可乐的 AI 营销实验",
        "description": "从可口可乐的案例看清楚：品牌资产如何做 AI 护栏，消费者如何参与创作，AI 又如何真正放大创意团队。",
        "href": "./lesson-marketing-12.html?entry={entry}"
    },
    {
        "key": "lesson13",
        "index": 13,
        "anchorId": "lesson-13",
        "title": "案例：一个直面消费者品牌如何用 AI 从零做到千万",
        "description": "从一个小团队品牌的成长路径里，看清楚 AI 怎样帮助品牌完成验证、冷启动、规模化增长和长期复购。",
        "href": "./lesson-marketing-13.html?entry={entry}"
    },
    {
        "key": "lesson14",
        "index": 14,
        "anchorId": "lesson-14",
        "title": "你的营销诊断：用 AI 设计你的增长策略",
        "description": "用五步法诊断营销健康度、AARRR 漏斗和竞品策略，再设计一套可执行的 90 天增长计划。",
        "href": "./lesson-marketing-14.html?entry={entry}"
    }
],
    side: { title: '这个模块怎么学更顺', cards: [{ title: '顺序学习建议', body: '先把 STP 与品牌定位学完，你会先建立“市场细分 → 目标选择 → 心智占位”的基本骨架，后面再进入增长与内容时会顺很多。' }, { title: '学完每节以后', body: '建议每节都做一次课后整理，把营销动作背后的判断真正沉淀成你自己的业务语言。' }, { title: 'AI 时代的重构角度', body: '每一节都不是只讲经典营销框架，而是把这些框架重新放回 AI 时代的竞争与增长现实里。' } ] },
    path: { title: '推荐学习路径', items: [{ title: '第 1 步', body: '先建立“该打谁、怎么打、占什么位置”的底层框架。' }, { title: '第 2 步', body: '再逐步进入增长、内容、自动化与更复杂的营销场景。' }, { title: '第 3 步', body: '最后把所有判断整合成适合你企业的增长系统。' }] }
  };
})(window);
