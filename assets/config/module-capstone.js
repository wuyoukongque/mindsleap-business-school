(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  window.MindsLeapConfigs.modules.capstone = {
    progressNamespace: 'capstone',
    backHref: './map.html?entry={entry}',
    hero: { pill: '模块 10 · 综合实战与毕业项目', title: '把完整商业判断串成一次可展示、可反馈、可迭代的毕业项目', lead: "这个模块会从商业分析全流程开始，通过案例复盘和三段式毕业项目训练，最终完成一次可呈现、可点评、可迭代的综合实战。", meta: ["当前开放 6 节", "预计总时长：约 2 小时", '适合作为全套课程的最后整合'] },
    chapters: [
    {
        "key": "lesson1",
        "index": 1,
        "anchorId": "lesson-1",
        "title": "商业分析全流程：从行业研究到战略建议",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-01.html?entry={entry}"
    },
    {
        "key": "lesson2",
        "index": 2,
        "anchorId": "lesson-2",
        "title": "案例复盘：一家公司的全方位诊断",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-02.html?entry={entry}"
    },
    {
        "key": "lesson3",
        "index": 3,
        "anchorId": "lesson-3",
        "title": "你的毕业项目（上）：问题定义与数据收集",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-03.html?entry={entry}"
    },
    {
        "key": "lesson4",
        "index": 4,
        "anchorId": "lesson-4",
        "title": "你的毕业项目（中）：分析与策略制定",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-04.html?entry={entry}"
    },
    {
        "key": "lesson5",
        "index": 5,
        "anchorId": "lesson-5",
        "title": "你的毕业项目（下）：方案呈现与 AI 点评",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-05.html?entry={entry}"
    },
    {
        "key": "lesson6",
        "index": 6,
        "anchorId": "lesson-6",
        "title": "毕业寄语：AI 时代的终身学习者",
        "description": "把前面模块学到的商业判断与 AI 方法，整合成一次可展示、可反馈、可迭代的毕业项目。",
        "href": "./lesson-capstone-06.html?entry={entry}"
    }
],
    side: { title: '这个模块怎么学更顺', cards: [{ title: '顺序学习建议', body: '先复盘完整商业分析流程，再进入案例诊断，最后完成自己的三段式毕业项目。' }, { title: '学完每节以后', body: '建议每节都沉淀一个项目产出：问题定义、证据清单、策略方案、呈现结构或复盘记录。' }, { title: 'AI 时代的重构角度', body: '重点不是把前面知识点再背一遍，而是用 AI 帮你把研究、判断、方案和表达整合成真实产出。' } ] },
    path: { title: '推荐学习路径', items: [{ title: '第 1 步', body: '先建立一套完整的商业分析路径，知道从哪里开始、如何推进。' }, { title: '第 2 步', body: '再用案例复盘把行业、财务、运营、组织和战略线索串起来。' }, { title: '第 3 步', body: '最后完成自己的毕业项目，并用 AI 点评帮助方案继续迭代。' }] }
  };
})(window);
