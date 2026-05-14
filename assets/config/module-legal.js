(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };
  window.MindsLeapConfigs.modules.legal = {
    progressNamespace: 'legal',
    backHref: './map.html?entry={entry}',
    hero: { pill: '模块 08 · 法律、合规与风险', title: '把零散法律问题整理成经营判断，建立 AI 时代的合规与风险框架', lead: "这个模块会从公司治理、合同、知识产权和数据隐私开始，再进入 AI 监管、算法治理、风险管理、劳动法、案例和法律工具箱。", meta: ["当前开放 10 节", "预计总时长：约 2 小时", '适合作为数据模块之后的下一步'] },
    chapters: [
    {
        "key": "lesson1",
        "index": 1,
        "anchorId": "lesson-1",
        "title": "公司法基础：企业设立与法人治理",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-01.html?entry={entry}"
    },
    {
        "key": "lesson2",
        "index": 2,
        "anchorId": "lesson-2",
        "title": "合同法要点：签合同前必知的事",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-02.html?entry={entry}"
    },
    {
        "key": "lesson3",
        "index": 3,
        "anchorId": "lesson-3",
        "title": "知识产权保护：AI 时代的 IP 新问题",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-03.html?entry={entry}"
    },
    {
        "key": "lesson4",
        "index": 4,
        "anchorId": "lesson-4",
        "title": "数据隐私与合规：GDPR 与个人信息保护法",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-04.html?entry={entry}"
    },
    {
        "key": "lesson5",
        "index": 5,
        "anchorId": "lesson-5",
        "title": "AI 法规全景：全球 AI 监管趋势",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-05.html?entry={entry}"
    },
    {
        "key": "lesson6",
        "index": 6,
        "anchorId": "lesson-6",
        "title": "AI 伦理与算法治理：负责任地使用 AI",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-06.html?entry={entry}"
    },
    {
        "key": "lesson7",
        "index": 7,
        "anchorId": "lesson-7",
        "title": "AI 风险管理框架：识别和防控 AI 带来的新风险",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-07.html?entry={entry}"
    },
    {
        "key": "lesson8",
        "index": 8,
        "anchorId": "lesson-8",
        "title": "劳动法：AI 替代岗位的法律与伦理",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-08.html?entry={entry}"
    },
    {
        "key": "lesson9",
        "index": 9,
        "anchorId": "lesson-9",
        "title": "案例：AI 公司的法律踩坑实录",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-09.html?entry={entry}"
    },
    {
        "key": "lesson10",
        "index": 10,
        "anchorId": "lesson-10",
        "title": "法律工具箱：AI 时代管理者必备的法律清单",
        "description": "把法律、合规和风险从事后补救，重新变成经营决策、组织治理和 AI 应用中的前置判断。",
        "href": "./lesson-legal-10.html?entry={entry}"
    }
],
    side: { title: '这个模块怎么学更顺', cards: [{ title: '顺序学习建议', body: '先把公司法、合同法、知识产权和数据隐私学完，你会先建立“主体 → 合同 → 资产 → 数据”的风险骨架，后面进入 AI 监管与案例会顺很多。' }, { title: '学完每节以后', body: '建议每节都做一次课后整理，把合规动作背后的判断真正沉淀成你自己的业务语言。' }, { title: 'AI 时代的重构角度', body: '每一节都不是只讲法律条文，而是把合规和风险重新放回 AI 时代的经营决策现实里。' } ] },
    path: { title: '推荐学习路径', items: [{ title: '第 1 步', body: '先建立“企业主体、合同边界、知识产权和数据责任”的底层框架。' }, { title: '第 2 步', body: '再逐步进入 AI 监管、算法治理、风险管理和劳动法议题。' }, { title: '第 3 步', body: '最后通过案例和工具箱，把所有判断整合成适合你企业的合规检查清单。' }] }
  };
})(window);
