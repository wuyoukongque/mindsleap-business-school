(function (window) {
  window.MindsLeapConfigs = window.MindsLeapConfigs || { modules: {}, lessons: {} };

  window.MindsLeapConfigs.modules.aiFoundation = {
    progressNamespace: 'aiFoundation',
    backHref: './map.html?entry={entry}',
    hero: {
      pill: '模块 00 · AI时代商业认知',
      title: '先建立 AI 时代决策者必须具备的认知地基',
      lead: '这个模块对应你内容库里的 AI foundation 主线。它不会带你学技术细节，而是先帮助你建立一个管理者理解 AI 的底层框架：AI 到底是什么、大模型改变了什么、AI 擅长与不擅长什么、AI 的经济学、提示词思维，以及 AI 时代个人竞争力。',
      meta: ['共 6 节', '预计总时长：约 78 分钟', '适合作为整个商学院的学习起点']
    },
    chapters: [
      {
        key: 'lesson1',
        index: 1,
        anchorId: 'lesson-1',
        title: 'AI 到底是什么？一个管理者的理解框架',
        description: '先建立一个管理者理解 AI 的底层框架：不学技术细节，也能先看清 AI 的本质、边界与价值。',
        href: './lesson-ai-foundation-01.html?entry={entry}'
      },
      {
        key: 'lesson2',
        index: 2,
        anchorId: 'lesson-2',
        title: '大模型到底改变了什么？从 GPT 到 Agent 的进化',
        description: '理解为什么大模型会成为这一轮 AI 变化的核心，以及它对企业经营意味着什么。',
        href: './lesson-ai-foundation-02.html?entry={entry}'
      },
      {
        key: 'lesson3',
        index: 3,
        anchorId: 'lesson-3',
        title: 'AI 能做什么，不能做什么？管理者的判断框架',
        description: '帮助你判断哪些任务适合交给 AI，哪些任务必须保留人的判断。',
        href: './lesson-ai-foundation-03.html?entry={entry}'
      },
      {
        key: 'lesson4',
        index: 4,
        anchorId: 'lesson-4',
        title: 'AI 的商业经济学：成本、速度与规模',
        description: '理解 AI 的成本结构、规模价值，以及 API 与自建的判断逻辑。',
        href: './lesson-ai-foundation-04.html?entry={entry}'
      },
      {
        key: 'lesson5',
        index: 5,
        anchorId: 'lesson-5',
        title: 'Prompt Thinking：怎么跟 AI 更好共创',
        description: '把提示词从“会不会写”升级为“会不会思考与拆解问题”。',
        href: './lesson-ai-foundation-05.html?entry={entry}'
      },
      {
        key: 'lesson6',
        index: 6,
        anchorId: 'lesson-6',
        title: 'AI时代的个人竞争力',
        description: '思考管理者和专业人士在 AI 时代最需要重建的能力结构。',
        href: './lesson-ai-foundation-06.html?entry={entry}'
      }
    ],
    side: {
      title: '这个模块怎么学更顺',
      cards: [
        {
          title: '顺序学习建议',
          body: '先把第 1、2、3、4 节听完，你会先建立“AI 是什么 → 大模型改变了什么 → AI 的能力边界 → AI 的投入逻辑”的四层骨架，后面再学 Prompt Thinking 和人机协作会顺很多。'
        },
        {
          title: '学完每节以后',
          body: '建议每节都做一次课后整理，把内容沉淀成自己的认知卡片。这样后面进入战略、增长与领导力模块时，你会更容易形成稳定判断。'
        },
        {
          title: '如果你是从问题进入的',
          body: '不管你是顺序学习还是带着问题进入，都建议先从第 1 节开始。Foundation 模块就是整套课程的认知底盘。'
        }
      ]
    },
    path: {
      title: '推荐学习路径',
      items: [
        { title: '第 1 步', body: '先建立“AI 到底是什么”的底层判断框架。' },
        { title: '第 2 步', body: '接着理解大模型改变了什么，再进入 AI 的能力边界与投入判断。' },
        { title: '第 3 步', body: '回到企业现实问题，把 Foundation 的认知框架带进后续每个经营模块。' }
      ]
    }
  };
})(window);
