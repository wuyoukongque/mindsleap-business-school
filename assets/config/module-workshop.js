(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  window.MindsLeapConfigs.modules.workshop = {
    progressNamespace: 'workshop',
    backHref: './map.html?entry={entry}',
    hero: { pill: '模块 09 · AI实战工作坊', title: '把 AI 工具真正放进业务现场，形成可复用的工作流能力', lead: "这个模块会从工具全景、写作、数据分析、创意制作、Agent、AI 编程、工作流设计和部署推广，带你完成一组完整的 AI 实操训练。", meta: ["当前开放 8 节", "预计总时长：约 2 小时", '适合作为法律模块之后的下一步'] },
    chapters: [
    {
        "key": "lesson1",
        "index": 1,
        "anchorId": "lesson-1",
        "title": "AI 工具全景图：管理者必备工具栈",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-01.html?entry={entry}"
    },
    {
        "key": "lesson2",
        "index": 2,
        "anchorId": "lesson-2",
        "title": "AI 写作实操：让 AI 帮你写报告、方案、邮件",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-02.html?entry={entry}"
    },
    {
        "key": "lesson3",
        "index": 3,
        "anchorId": "lesson-3",
        "title": "AI 数据分析实操：用自然语言分析业务数据",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-03.html?entry={entry}"
    },
    {
        "key": "lesson4",
        "index": 4,
        "anchorId": "lesson-4",
        "title": "AI 创意实操：用 AI 做设计、做视频、做 PPT",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-04.html?entry={entry}"
    },
    {
        "key": "lesson5",
        "index": 5,
        "anchorId": "lesson-5",
        "title": "AI Agent 深度实操：企业级应用与组织转型",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-05.html?entry={entry}"
    },
    {
        "key": "lesson6",
        "index": 6,
        "anchorId": "lesson-6",
        "title": "AI 编程实操：不会写代码也能做工具",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-06.html?entry={entry}"
    },
    {
        "key": "lesson7",
        "index": 7,
        "anchorId": "lesson-7",
        "title": "你的 AI 工作流设计：找到你业务中的 AI 杠杆点",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-07.html?entry={entry}"
    },
    {
        "key": "lesson8",
        "index": 8,
        "anchorId": "lesson-8",
        "title": "AI 工具选型与部署：从试用到全面推广",
        "description": "把 AI 工具从零散试用，整理成可复用、可评估、可推广的工作流能力。",
        "href": "./lesson-workshop-08.html?entry={entry}"
    }
],
    side: { title: '这个模块怎么学更顺', cards: [{ title: '顺序学习建议', body: '先建立工具全景，再分别练写作、数据分析和创意制作，最后进入 Agent、AI 编程、工作流和部署推广。' }, { title: '学完每节以后', body: '建议每节都沉淀一个可复用模板：提示词、检查清单、操作流程或团队规范。' }, { title: 'AI 时代的重构角度', body: '重点不是展示工具有多神奇，而是把 AI 放进真实业务流程，让它稳定地产生价值。' } ] },
    path: { title: '推荐学习路径', items: [{ title: '第 1 步', body: '先看清工具地图，知道不同 AI 工具分别适合解决什么问题。' }, { title: '第 2 步', body: '用写作、数据分析、创意制作和 AI 编程练出基本操作手感。' }, { title: '第 3 步', body: '最后把个人使用升级成团队工作流、工具选型和部署推广方案。' }] }
  };
})(window);
