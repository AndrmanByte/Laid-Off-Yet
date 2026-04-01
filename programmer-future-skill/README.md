# 程序员未来（Programmer Future）

> 面向中国程序员的职业重启 Agent Skill

一个可被 Codex / OpenClaw / Claude Code 调用的中文 Markdown Skill。  
核心价值：把“被裁后的混乱”变成“下一步可执行动作”。

## 项目亮点

- 结构化输出：默认按 8 段决策结构输出
- 真实场景覆盖：被裁、HR协商、竞业、转行、副业、仲裁
- 直接可用：内置可复制话术与 checklist 清单
- 风格克制：不鸡汤、不说教，强调现实可执行

## 快速导航

- [项目背景](#项目背景)
- [为什么做这个项目](#为什么做这个项目)
- [这个项目解决什么问题](#这个项目解决什么问题)
- [适用人群](#适用人群)
- [典型使用场景](#典型使用场景)
- [Skill 能力列表](#skill-能力列表)
- [Skill 工作流程（简要）](#skill-工作流程简要)
- [仓库结构说明](#仓库结构说明)
- [如何安装 / 如何在 Agent 中使用](#如何安装--如何在-agent-中使用)
- [示例对话](#示例对话)
- [Skill 设计原则](#skill-设计原则)
- [免责声明](#免责声明)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## 典型使用场景（示例）

“我刚被裁，HR 催我今天签协商解除。请按技能结构输出：先稳住、局面判断、今天行动清单、可直接发送话术、风险提醒和 7/30/90 天计划。”

## 适合谁

适合正在经历裁员、职业迷茫、转型压力或副业选择的中国程序员，尤其是需要“先稳住再行动”的人。

## 这个项目不是什么

- 不是网站，不是 SaaS，不是前后端应用
- 不是法律结论工具，也不是心理治疗工具
- 不是泛泛聊天助手，而是行动导向的 Skill 仓库

## 项目背景

互联网行业周期波动下，程序员常在短时间内同时面对：
- 裁员流程与 HR 条款压力
- 情绪冲击与执行力下降
- 方向选择（继续开发、转行、单干）

## 为什么做这个项目

很多建议要么太空泛，要么只讲情绪，不够落地。  
这个项目的目标不是给“标准答案”，而是帮助用户恢复控制感，明确下一步行动。

## 这个项目解决什么问题

- 被裁当天该先做什么
- HR 施压签字时如何拖时间、要书面、谈补偿
- 竞业、背调、仲裁是否要介入
- 找工作两个月无 offer 如何调整策略
- 35+ 焦虑下如何做方向决策
- 副业/单干是否可行，如何低风险试水

## Skill 能力列表

- 结构化输出：统一 8 段决策结构
- 决策分流：按问题类型进入对应流程
- 话术模板：可直接复制给 HR/领导/家人/面试官
- checklist 清单：当天/一周/30天/90天执行清单
- 风险边界：不做法律结论，不提供破坏性建议

## Skill 工作流程（简要）

1. 情绪稳定
2. 局面判断
3. 决策分流
4. 信息与策略
5. 行动清单
6. 风险提醒
7. 时间线（7天 / 30天 / 90天）
8. 行动收束

## 仓库结构说明

```text
programmer-future-skill/
- README.md
- LICENSE
- AGENTS.md
- CONTRIBUTING.md
- SECURITY.md
- CHANGELOG.md
- GITHUB_RELEASE_KIT.md
- RELEASE_NOTES_v0.1.md
- .agents/
  - skills/
    - 程序员未来/
      - SKILL.md
      - persona.md
      - workflows.md
      - scenarios.md
      - scripts.md
      - decision-tree.md
      - boundaries.md
      - resources/
        - *.md
- examples/
  - example_*.md
```

## 如何安装 / 如何在 Agent 中使用

1. 克隆仓库。
2. 将 `.agents/skills/程序员未来/` 复制到你的 Agent Skills 目录。
3. 在 Agent 中加载 `SKILL.md`，再按 `decision-tree.md` 与 `workflows.md` 执行。

调用示例：

```text
请加载技能：程序员未来。
我刚被裁，HR 催我今天签协商解除。
请按技能结构输出：
1）先稳住
2）当前局面判断
3）今天/本周行动清单
4）可直接发送的话术
5）风险提醒
6）7/30/90 天时间线
```

## 示例对话

- [刚被裁当天](./examples/example_被裁当天_对话.md)
- [HR 施压签字](./examples/example_HR谈判_对话.md)
- [情绪崩溃](./examples/example_情绪崩溃_对话.md)
- [找工作两个月没有 Offer](./examples/example_找工作两个月无offer_对话.md)
- [35岁焦虑](./examples/example_35岁焦虑_对话.md)
- [想转行 AI](./examples/example_转行AI_对话.md)
- [是否签竞业](./examples/example_是否签竞业_对话.md)
- [是否仲裁](./examples/example_要不要仲裁_对话.md)
- [是否降薪换工作](./examples/example_是否降薪换工作_对话.md)
- [是否去小公司](./examples/example_是否去小公司_对话.md)
- [是否出海远程](./examples/example_是否出海远程_对话.md)

## Skill 设计原则

- 先稳住，再判断，再行动
- 先可逆决策，再不可逆决策
- 少大道理，多行动建议
- 有同理心，但不高高在上
- 用结构降低焦虑，用行动恢复控制感

## 项目定位总结

这是一个面向中国程序员在裁员、职业迷茫、转型、副业和职业重启阶段的 AI Agent Skill，
用于提供冷静、现实、可执行的决策与行动建议。

## 免责声明

- 本仓库内容用于职业支持与沟通准备，不构成法律、医疗或心理治疗意见。
- 本仓库不支持报复、删数据、泄密、带走代码、破坏设备等行为。
- 高风险争议或心理危机请及时联系专业人士。

## Roadmap

- [ ] 增加更多城市/行业差异化案例
- [ ] 增加 offer 对比与入职风险检查模板
- [ ] 增加家庭压力与现金流协同决策模板
- [ ] 增加多 Agent 适配调用范式

## Contributing

欢迎贡献场景、模板和文档优化。  
提交前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

## License

MIT，详见 [LICENSE](./LICENSE)。

## 发布素材

可直接复用的 GitHub About、Topics、Release、社交文案在：
- [GITHUB_RELEASE_KIT.md](./GITHUB_RELEASE_KIT.md)
- [RELEASE_NOTES_v0.1.md](./RELEASE_NOTES_v0.1.md)
