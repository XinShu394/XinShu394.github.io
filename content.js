/* Public content; project updates maintained in private career index. */
window.SITE = {
  "profile": {
    "name": "陈天",
    "nameEn": "TIAN CHEN",
    "handle": "XinShu394",
    "fields": [
      "AI 应用与 Agent",
      "数据产品",
      "独立游戏"
    ],
    "line": "香港科技大学（广州）人工智能 MPhil　·　香港中文大学（深圳）金融学士",
    "email": "tchen361@connect.hkust-gz.edu.cn",
    "github": "https://github.com/XinShu394",
    "bilibili": "https://www.bilibili.com/video/BV11E4LzzERr/",
    "languages": "TOEFL 99 · 全英文硕士项目",
    "skills": [
      "Python",
      "Flask",
      "PostgreSQL",
      "SQLite",
      "Nginx",
      "LLM API",
      "Agent 工作流",
      "RAG",
      "Prompt Engineering",
      "R / Wind",
      "OLS / HC3",
      "Godot 4.4"
    ]
  },
  "music": {
    "title": "Until the Game Says Goodnight",
    "note": "BOGAME 原声",
    "src": "assets/audio/until-the-game-says-goodnight.mp3"
  },
  "education": [
    {
      "org": "香港科技大学（广州）",
      "orgEn": "HKUST (Guangzhou)",
      "logo": "assets/logos/hkustgz.png",
      "degree": "人工智能 Thrust · 研究型硕士 MPhil",
      "period": "2024.09 — 2026.10",
      "points": [
        "全额奖学金",
        "研究方向：游戏 AI 智能体、多模态情绪分析",
        "毕业论文：FOMC 新闻发布会多模态情绪与市场反应"
      ]
    },
    {
      "org": "香港中文大学（深圳）",
      "orgEn": "CUHK-Shenzhen",
      "logo": "assets/logos/cuhksz.png",
      "degree": "经管学院 · 金融 · 工商管理学士（甲等荣誉）",
      "period": "2020.09 — 2024.07",
      "points": [
        "连续 3 年院长嘉许奖",
        "学业优秀奖学金（mGPA 前 5%）· 博文奖学金",
        "本科生学业辅导员"
      ]
    }
  ],
  "experience": [
    {
      "id": "tencent",
      "org": "腾讯",
      "orgEn": "Tencent",
      "logo": "assets/logos/tencent-user.png",
      "title": "商业分析组 · AI 游戏应用实习生",
      "period": "2026.01 — 2026.04",
      "work": "游戏市场数据 & AI 周报系统",
      "workNote": "独立规划、开发与交付",
      "sources": [
        {
          "name": "DataEye",
          "logo": "assets/logos/dataeye.svg"
        },
        {
          "name": "引力引擎",
          "logo": "assets/logos/gravity.svg"
        },
        {
          "name": "TapTap",
          "logo": "assets/logos/taptap.png"
        },
        {
          "name": "Steam",
          "logo": "assets/logos/steam.svg"
        }
      ],
      "flow": [
        "多平台自动采集",
        "PostgreSQL 日度入库",
        "LLM 生成周报初稿",
        "分析人员复核"
      ],
      "points": [
        "接入 DataEye、引力引擎、TapTap、Steam，开发自动采集、清洗与入库工具，把按周取数升级为按日沉淀",
        "基于 PostgreSQL 建组内游戏数据库，统一相对时间标签，支持按平台 / 游戏 / 区间查询与 CSV 导出",
        "拆解周报模板并接入 LLM API，配置查询、表格、异常提醒与周报生成等 Tools 与 Skills；用预设查询限制模型自主取数，并保留人工复核"
      ],
      "metrics": [
        {
          "v": "7–8h → 3h",
          "k": "单人每周周报人工时"
        },
        {
          "v": "≈1 个月",
          "k": "接入组内工作流持续运行"
        }
      ]
    },
    {
      "id": "liusheng",
      "org": "流昇科技",
      "orgEn": "Liusheng Tech",
      "logo": null,
      "title": "人工智能行研实习生",
      "period": "2025.06 — 2025.08",
      "work": "端侧 AI 竞争格局研究",
      "workNote": "团队项目 · 个人负责约 20 家公司",
      "points": [
        "深度研究端侧 SoC 芯片（8 家）与图像传感器 / MEMS / 激光雷达（12 家）赛道公司",
        "按「产业链上中下游 × 芯-模-端-智」双维度框架，结合 PESTEL 与波特五力分析商业模式与技术壁垒",
        "用财报、技术参数与市占率交叉验证技术叙事，整合为六维监控仪表盘，支持创业项目路演展示"
      ],
      "metrics": [
        {
          "v": "≈20 家",
          "k": "个人深度覆盖公司"
        },
        {
          "v": "6 维",
          "k": "决策监控仪表盘"
        }
      ]
    },
    {
      "id": "gtht",
      "org": "国泰海通证券",
      "orgEn": "Guotai Haitong Securities",
      "logo": "assets/logos/gtht.svg",
      "title": "债券融资部实习生",
      "period": "2023.05 — 2023.08",
      "work": "R × Wind 财务指标批量提取工具",
      "workNote": "分享给部门同事使用",
      "showcase": "assets/projects/wind-clientapi.webp",
      "showcaseCaption": "Wind 金融终端 · Client API（支持 R 调用）｜图源：Wind 官网",
      "points": [
        "用 R 对接 Wind 数据接口，按公司代码批量提取并汇总核心财务指标，用于尽调报告与年报 / 半年报制作",
        "投标文件工作从数据整理逐步推进到直接撰写草稿，经审核后用于正式投标"
      ],
      "metrics": [
        {
          "v": "数小时 → 30 分钟",
          "k": "手动提数耗时"
        }
      ]
    }
  ],
  "projects": [
    {
      "id": "textagent",
      "kind": "product",
      "size": "tall",
      "title": "TextAgentForU",
      "subtitle": "企业微信入口的多用户 AI 生活助手",
      "period": "2026.03 — 2026.06",
      "role": "产品设计 · 独立开发",
      "tagline": "从事务提醒，扩展到记录、复盘与主动陪伴。",
      "cover": "assets/projects/textagent.webp",
      "shots": [
        "assets/projects/textagent.webp"
      ],
      "problem": "长辈容易忘事，备忘录不会主动提醒，闹钟也装不下完整的事情。",
      "actions": [
        "以企业微信为入口，串联消息预处理、模型路由、Skill 执行、存储与主动触达",
        "实现分层模型调用与 Agent Loop，支持笔记、待办、复盘和信息检索等场景",
        "通过 UserContext、用户目录、技能权限与 Token 管理隔离用户数据，提供 SQLite 存储层",
        "待办使用独立分钟级心跳，配合意图队列和主动调度处理提醒与陪伴",
        "提供用户 Web 页面与管理后台，查看内容、用户状态及 LLM 用量和异常日志"
      ],
      "results": [
        "历史试用记录：10 名用户、1 个月测试，参与者均使用超过 1 周（原简历口径）",
        "公开源码包含多用户管理、技能路由、提醒调度与 Web 管理模块"
      ],
      "stack": [
        "Python",
        "Flask",
        "SQLite",
        "企业微信",
        "Agent Loop",
        "Skill"
      ],
      "links": [
        {
          "label": "项目页",
          "url": "https://xinshu394.github.io/Textagentweb/"
        },
        {
          "label": "代码",
          "url": "https://github.com/XinShu394/TextagentForU"
        },
        {
          "label": "本次审阅版本",
          "url": "https://github.com/XinShu394/TextagentForU/tree/69befdf6ff7c8ac52b55a08e2be583a1b164e734"
        }
      ],
      "reviewedAt": "2026-11-19",
      "sourceNote": "按公开仓库源码与文档更新；历史运营和试用数字沿用原简历，不代表实时统计。"
    },
    {
      "id": "skinwiki",
      "kind": "product",
      "size": "big",
      "title": "砖皮百科",
      "subtitle": "玩家共建皮肤图鉴与游戏知识库",
      "period": "2026.06 — 2026.11（持续迭代）",
      "role": "产品设计 · 全栈开发 · 内容运营",
      "tagline": "把玩家截图、投稿心得与知识条目组织成可浏览、可维护的资料库。",
      "cover": "assets/projects/skinwiki.webp",
      "shots": [
        "assets/projects/skinwiki-home.webp",
        "assets/projects/skinwiki.webp"
      ],
      "metric": {
        "v": "500+",
        "k": "历史投稿 · 原简历口径"
      },
      "problem": "官方皮肤预览角度和配件组合展示有限，相关内容散落在长视频里，玩家购买前很难看清效果。",
      "actions": [
        "保留图鉴浏览、筛选、搜索、玩家投稿与人工审核闭环，迭代选枪、详情及上传导航",
        "采用静态前端 + Flask API + SQLite + OSS，浏览器通过临时授权直传图片",
        "审核通过后进入构建队列，生成图鉴静态数据；配套数据库备份与发布工具",
        "新增「焚诀」独立知识库，以 Markdown 和图片为内容源，构建静态页面",
        "玩家见闻 API 已有实现；投稿与审核前端仍处于开发阶段"
      ],
      "results": [
        "历史运营记录：500+ 次投稿、8 条 B 站视频、200+ 人玩家群（原简历口径）",
        "历史传播记录：累计 20 万+ 播放、单条最高 6.7 万、单日访客峰值 1 万+（非实时统计）",
        "仓库现包含图鉴、投稿审核与独立知识库的实现"
      ],
      "stack": [
        "Flask",
        "SQLite",
        "OSS",
        "Nginx",
        "JavaScript"
      ],
      "links": [
        {
          "label": "网站",
          "url": "https://skin.textagent.cn"
        },
        {
          "label": "代码",
          "url": "https://github.com/XinShu394/SHUXINskinwiki"
        },
        {
          "label": "本次审阅版本",
          "url": "https://github.com/XinShu394/SHUXINskinwiki/tree/2de6e3e98dac409309980881d817d0123c8f0bec"
        }
      ],
      "reviewedAt": "2026-11-19",
      "sourceNote": "按公开仓库源码与文档更新；历史运营和试用数字沿用原简历，不代表实时统计。"
    },
    {
      "id": "bogame",
      "kind": "game",
      "size": "wide",
      "title": "BOGAME",
      "subtitle": "回合制卡牌对战游戏",
      "period": "2025.07 — 2025.10",
      "role": "玩法设计 · 独立开发",
      "tagline": "把小时候的拍手气功游戏，做成有角色、有血量、有心理博弈的卡牌对战。",
      "cover": "assets/projects/bogame.webp",
      "shots": [
        "assets/projects/bogame.webp"
      ],
      "problem": "原版拍手游戏规则简单，缺少角色差异与长线博弈。",
      "actions": [
        "设计 7 个英雄 + 10 张卡牌，靠血量 / 初始能量 / 被动技能组合区分定位",
        "开发核心战斗系统、UI 框架与 AI 对手",
        "AI 对手采用启发式打分：斩杀优先、抢先手加分、只在能克制真实威胁时防御，并加入随机，防止背板",
        "5–15 人测试发现「蓄能获胜」与坦克英雄冲突，调整蓄能门槛并给坦克攻击牌动态 +1 费用"
      ],
      "results": [
        "v0.7 开源",
        "B 站演示视频"
      ],
      "stack": [
        "Godot 4.4",
        "GDScript"
      ],
      "links": [
        {
          "label": "代码",
          "url": "https://github.com/XinShu394/BOGAME"
        },
        {
          "label": "B 站演示",
          "url": "https://www.bilibili.com/video/BV11E4LzzERr/"
        }
      ]
    },
    {
      "id": "econqa",
      "kind": "research",
      "size": "",
      "title": "Econ-QA",
      "subtitle": "可信、可解释的经济研究问答系统",
      "period": "2024.10 — 2025.12",
      "role": "需求拆解 · 接口对齐 · 系统集成（5 人团队）",
      "tagline": "把团队分散的研究成果，整合成一个会标注证据状态的问答系统。",
      "problem": "经济研究问答需要可解释、可追溯，而团队成果分散在 Fedspeak、DEI、政策情绪、多模态等多个方向。",
      "actions": [
        "定义「可信问答」需求：可解释、可追溯引用、置信度提示，并拆成工程任务与测试用例",
        "最终版实现 Prompt 主题路由、模块化 Memory、Atomic Analysis 与 VERIFIED / NEUTRAL 状态标注",
        "参与 BM25 + FAISS 候选融合召回、Atomic Claims 一致性检查的原型开发与接口对接"
      ],
      "results": [
        "MPhil 毕业项目交付",
        "答辩演示基于真实系统输出"
      ],
      "stack": [
        "RAG",
        "BM25",
        "FAISS",
        "LLM"
      ],
      "links": []
    },
    {
      "id": "fomc",
      "kind": "research",
      "size": "",
      "title": "FOMC 多模态情绪研究",
      "subtitle": "MPhil 毕业论文",
      "period": "2024.10 — 2025.12",
      "role": "数据集共建 · 独立研究设计与建模",
      "tagline": "美联储主席的表情，能预测市场吗？以及，如实报告「不太能」。",
      "metric": {
        "v": "80 场",
        "k": "FOMC 发布会多模态数据集"
      },
      "problem": "检验 FOMC 发布会的文本 / 音频 / 视频情绪，在控制硬政策变量后是否仍有增量解释力。",
      "actions": [
        "与 2 名组员共建 2011–2025 年 80 场 FOMC 发布会多模态数据集",
        "HC3 稳健标准误 OLS 检验视频情绪的增量解释力",
        "设计文本基线 / 多模态拼接 / 交叉注意力三类架构与 5 个消融模型，66 场会议、36 个 walk-forward 测试窗",
        "DA / MSE / IC 三指标联合评估，VIX 分层探索性分析与交易回测"
      ],
      "results": [
        "发现复杂模型不必然跑赢简单模型",
        "回测 Sharpe −0.44：如实报告统计关联未转化为超额收益"
      ],
      "stack": [
        "多模态融合",
        "OLS / HC3",
        "Walk-forward"
      ],
      "links": []
    },
    {
      "id": "shuxin",
      "kind": "ip",
      "size": "wide",
      "title": "SHUXIN 舒心",
      "subtitle": "AI 虚拟人自设项目",
      "period": "2026 — 进行中",
      "role": "角色设定 · 资产管线 · 人格设计",
      "tagline": "从设定、Q 版、Live2D 到人格与声音，自己搭起来的 AI 虚拟人。",
      "cover": "assets/shuxin.webp",
      "problem": "想要一个能跨项目复用的 AI 角色：有统一的外观、人格、说话方式和可运行的资产。",
      "actions": [
        "完成三视图与服装拆解设定，统一黑白粉调色板",
        "制作 Q 版半身与分层素材，适配 BongoCat 互动皮肤",
        "搭建 Live2D 标准比例模型：20 种表情、待机与点头动作",
        "撰写人格设定、角色提示词卡与音色方案",
        "已作为 TextAgentForU 的形象，并计划成为三角洲知识库 Agent 的形象"
      ],
      "results": [
        "20 种 Live2D 表情",
        "BongoCat 皮肤可安装使用"
      ],
      "stack": [
        "Live2D",
        "角色设定",
        "Prompt"
      ],
      "links": []
    },
    {
      "id": "bogame-arena",
      "kind": "game",
      "size": "wide",
      "title": "BOGAME-Arena",
      "subtitle": "Web 联机对战与 LLM 竞技场",
      "period": "2026.11 · 仓库版本",
      "role": "游戏与 Agent 应用项目",
      "tagline": "让玩家和不同模型在同一套规则下对战。",
      "cover": "assets/projects/bogame.webp",
      "problem": "Godot 原型需要更便捷的浏览器分享、联网对战，以及可重复的模型对局评测。",
      "actions": [
        "将规则组织为共享 TypeScript 引擎，由服务端权威裁决对局",
        "构建 WebSocket 对战、房间与回放能力，前端使用 Preact 与 PixiJS",
        "批量运行 Agent 对局并轮换座位，记录胜负、非法输出、延迟和 token 消耗"
      ],
      "results": [
        "已形成 Web 对战与模型竞技的代码实现",
        "上线状态与模型评测结论仍需单独验证"
      ],
      "stack": [
        "TypeScript",
        "Fastify",
        "WebSocket",
        "Preact",
        "PixiJS",
        "SQLite"
      ],
      "links": [],
      "reviewedAt": "2026-11-19",
      "sourceNote": "经本人授权公开项目简介；源码暂未公开。"
    },
    {
      "id": "bigfish",
      "kind": "research",
      "size": "",
      "title": "bigfish-lab",
      "subtitle": "同源 LLM Agent 的信息环境实验原型",
      "period": "2026.11 · 仓库版本",
      "role": "Agent 实验设计与工程原型",
      "tagline": "相同起点的智能体，会被不同的信息环境塑造成什么样？",
      "problem": "希望区分信息平台影响与个体路径依赖，并用可追溯轨迹观察记忆和行为的分化。",
      "actions": [
        "组织人格、平台适配器、轨迹、记忆和夜间巩固流程",
        "实现 SQLite 记忆与检索，以及分化指标和报告管线",
        "通过 mock 适配器验证离线流程；真实平台接入仍有未完成环节"
      ],
      "results": [
        "已建立可运行管线的代码与测试入口",
        "合成数据用于管线验证，不作为真实平台研究结论"
      ],
      "stack": [
        "Python",
        "LLM Agent",
        "SQLite",
        "BM25",
        "实验设计"
      ],
      "links": [],
      "reviewedAt": "2026-11-19",
      "sourceNote": "实验原型；经本人授权公开简介，尚无已核实的真实平台研究结论。"
    }
  ],
  "repos": [
    {
      "name": "Tenhou 牌谱抓取与风格分析",
      "repo": "craptenhouTOPRANK",
      "note": "麻将 AI 对手建模的数据准备"
    },
    {
      "name": "Steam 商店数据库",
      "repo": "RANKsteamstoredb",
      "note": "Steam 榜单数据采集与展示"
    },
    {
      "name": "welcome to HKUST-GZ",
      "repo": "welcometoHKUSZGZ",
      "note": "Godot 小游戏"
    }
  ],
  "projectReview": "2026-11-19"
};
