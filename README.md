<div align="center">

# 裁了么

<br>

### **“开除速度一定要快”**

<sub>有人截图了。</sub>

<br>

很多人不是在会议室被裁员的，<br>
而是在某个早上打开邮箱时，<br>
才知道自己已经没有工作了。

</div>

---

## 裁了么是什么

**Laid Off Yet?** 口语里叫「裁了么」、仓库里技能目录叫「裁了吗」——说的是同一件事：工作被按下暂停键之后，接下来几天该怎么走。

这不是安慰热线，也不是成功学。本仓库是一个中文 **Markdown Agent Skill**：把裁员、协商、求职、转行、副业里那些「脑子里同时开几十个标签页」的混乱，拆成**能执行的动作**和**能发出去的句子**。可被 Codex、OpenClaw、Claude Code 等 Agent 加载。

## 为什么做这个项目

裁员这件事，流程可以很快，信息可以很碎，情绪可以很贵。市面上不缺「加油」，缺的是：今天先别签什么、话怎么说、今晚睡不睡得着之前先把哪三件事做了。这个 Skill 不保证结局，只尽量让你在局面里少做几次不可逆的蠢决定。

## 这个 Skill 能做什么

- **分流**：被裁当天、HR 谈判、竞业、情绪崩溃、转行、副业、就业方向咨询等，各走各的决策树  
- **结构**：默认按 8 段输出——先稳住，再判断局面，再给今天/本周行动与 7/30/90 天时间线  
- **话术**：对 HR、领导、家人、面试，可直接改写的模板  
- **清单**：当天、一周、30 天、90 天能做什么  
- **就业方向**：`data/` 里结构化岗位画像与推荐规则，避免「我适合干什么」只剩空话（不替用户拍板）  

底层流程：情绪稳定 → 局面判断 → 分流 → 信息与策略 → 行动清单 → 风险 → 时间线 → 收束。

**边界**：不是律师、不是心理医生；不提供报复、泄密、破坏设备一类建议。

## 适合谁

正在经历裁员、组织优化、空窗、转行或副业压力的职场人——行业不限。你要的是「下一步先干什么」，而不是陪聊一整晚，就对路。

## 如何使用

1. 克隆仓库。  
2. 将 `.agents/skills/裁了吗/` 复制到你的 Agent Skills 目录；使用就业方向咨询时，请同时保留仓库根目录 `data/*.json`。  
3. 在 Agent 中加载 `SKILL.md`，按 `decision-tree.md` 与 `workflows.md` 执行。

示例提示：

```text
请加载技能：裁了吗。
我刚被裁，HR 催我今天签协商解除。
请按技能结构输出：先稳住、局面判断、今天/本周行动清单、可直接发送的话术、风险提醒、7/30/90 天。
```

## 快速导航

- [裁了么是什么](#裁了么是什么)
- [为什么做这个项目](#为什么做这个项目)
- [这个 Skill 能做什么](#这个-skill-能做什么)
- [适合谁](#适合谁)
- [如何使用](#如何使用)
- [仓库结构说明](#仓库结构说明)
- [示例对话](#示例对话)
- [Skill 设计原则](#skill-设计原则)
- [免责声明](#免责声明)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)

## 这个项目不是什么

- 不是网站，不是 SaaS，不是前后端应用  
- 不是法律结论工具，也不是心理治疗工具  
- 不是泛泛聊天助手，而是行动导向的 Skill 与数据文档仓库  

## 仓库结构说明

```text
Laid-Off-Yet/
- data/
  - role_profiles.json
  - career_paths.json
  - skill_mappings.json
  - recommendation_rules.json
  - intake_questions.json
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
    - 裁了吗/
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

就业方向咨询 / 职业方向推荐：

- [不想干原工作还能做什么](./examples/example_就业方向_不想干原工作_对话.md)
- [转行做运营可以吗](./examples/example_就业方向_转行运营_对话.md)
- [学历一般什么工作现实](./examples/example_就业方向_学历一般现实工作_对话.md)
- [副业养活自己](./examples/example_就业方向_副业养活自己_对话.md)
- [不想打工做什么小生意](./examples/example_就业方向_小生意不打工_对话.md)
- [40 岁还能转行吗](./examples/example_就业方向_40岁转行_对话.md)

## Skill 设计原则

- 先稳住，再判断，再行动
- 先可逆决策，再不可逆决策
- 少大道理，多行动建议
- 有同理心，但不高高在上
- 用结构降低焦虑，用行动恢复控制感

## 免责声明

- 本仓库内容用于职业支持与沟通准备，不构成法律、医疗或心理治疗意见。
- 本仓库不支持报复、删数据、泄密、擅自带走公司资产或商业秘密、破坏设备等行为。
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
