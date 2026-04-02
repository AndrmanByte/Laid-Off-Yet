<div align="center">
  <br>
  <h1>📄 裁了么</h1>
  <h3>⚠️ 温馨提示：本 Skill 包含大量「人话」和「下一步」，<br>请勿在 HR 凝视下阅读，以防加速签字。</h3>
  <br>
  <p><strong>「开除速度一定要快，有人截图了！」</strong></p>
  <p>—— 致每一位在工位上瞳孔地震的你</p>
</div>

---

<h2 id="sec-what">🤔 裁了么是什么</h2>

**Laid Off Yet?** 「裁了么」

这不是一个给你递纸巾的安慰热线，也不是一个教你「感恩公司」的成功学讲座。

这是一个**为打工人量身定制的 Markdown Agent Skill**。它的唯一使命，就是把你脑子里因为裁员而同时打开的「几十个焦虑标签页」——比如 **「HR 在忽悠我吗？」、「竞业协议能不能签？」、「明天简历怎么编？」、「房贷怎么办？」**——全部关掉，然后给你一张写满**能执行的动作**和**能直接扔出去的句子**的清单。

Codex、OpenClaw、Claude Code 等 Agent 均可加载。

<h2 id="sec-why">🥺 为什么做这个项目</h2>

裁员这件事，流程快到像 5 倍速追剧，信息碎到像摔烂的手机屏，情绪贵到像请了个心理医生按秒收费。

市面上的「加油，你是最棒的！」我们已经听腻了。你需要的不是鸡汤，是干货：**「今天，先别签那个字。话，要这么说。今晚，睡前先搞定这三件事。」**

这个 Skill 不保证你一定能拿到 N+1 或者立刻上岸，它只保证，**让你在这个狗血剧情里，少做几个能让你后悔到想穿越回去抽自己耳光的蠢决定。**

<h2 id="sec-can">⚡️ 这个 Skill 能做什么</h2>

- **智能分流**：被裁当天、HR 谈判、竞业协议、情绪崩溃、转行、副业……不管你卡在哪一步，都给你走对应的决策树，绝不把「今天被裁」和「要不要去小公司」混在一起瞎聊。
- **超级结构**：默认按 8 段输出——先稳住，再判断，再给**今天/本周行动清单** + **7/30/90 天时间线**，让你知道什么时候该做什么，不再焦虑。
- **怼人话术库**：对 HR、对领导、对家人、对面试官，我们都有可以直接复制粘贴的模板。**「您说的这个点，我不是很理解，能麻烦您写下来吗？」** 拿走不谢。
- **行动清单**：当天、一周、30 天、90 天，每个阶段该干嘛，清清楚楚。
- **就业导航仪**：`data/` 里有结构化岗位画像与推荐规则，帮你分析「我到底还能干什么」，告别「我好像什么都不会」的空虚感。

**底层逻辑：** 情绪稳定 → 局面判断 → 分流 → 信息与策略 → 行动清单 → 风险预警 → 时间线 → 收束。一条龙服务。

**重要边界：** 我不是你的律师，也不是你的心理医生。我不会教你报复前司、删库跑路，或者把公司咖啡机搬回家。咱是体面人。

<h2 id="sec-who">🎯 适合谁</h2>

- 刚刚收到「毕业通知」，大脑一片空白的你。
- 正在和 HR 极限拉扯，不知道该签什么的你。
- 空窗期超过 1 个月，开始怀疑人生的你。
- 想转行、搞副业，但不知道从哪下手的你。

只要你想要的是 **「下一步先干什么」**，而不是找人陪你彻夜聊天，那我们就是朋友。

<h2 id="sec-how">🚀 如何使用</h2>

1. 克隆本仓库。
2. 将 `.agents/skills/裁了吗/` 复制到你的 Agent Skills 目录。使用就业方向咨询时，请同时保留仓库根目录 `data/*.json`。
3. 在 Agent 中加载 `SKILL.md`，按 `decision-tree.md` 与 `workflows.md` 执行，然后就可以开始对话了。

**示例提示词：**

```text
请加载技能：裁了吗。
我刚被裁，HR 催我今天签协商解除。
请按技能结构输出：先稳住、局面判断、今天/本周行动清单、可直接发送的话术、风险提醒、7/30/90 天。
```

<h2 id="sec-nav">📂 快速导航</h2>

- [裁了么是什么](#sec-what)
- [为什么做这个项目](#sec-why)
- [这个 Skill 能做什么](#sec-can)
- [适合谁](#sec-who)
- [如何使用](#sec-how)
- [仓库结构说明](#sec-tree)
- [示例对话](#sec-examples)
- [Skill 设计原则](#sec-principles)
- [免责声明](#sec-disclaimer)
- [Roadmap](#sec-roadmap)
- [Contributing](#sec-contributing)
- [License](#sec-license)

<h2 id="sec-not">🧐 这个项目不是什么</h2>

- ❌ 不是网站、不是 SaaS、不是前后端应用（别想着部署上线赚钱了，乖）
- ❌ 不是法律结论工具，也不是心理治疗工具（专业的事找专业的人）
- ❌ 不是泛泛聊天助手，而是行动导向的 Skill 与数据文档仓库（我们是实干派）

<h2 id="sec-tree">🗂 仓库结构说明</h2>

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

<h2 id="sec-examples">💬 示例对话</h2>

不想看说明书？直接看疗效：

**经典场景**

- [刚被裁当天，我该干嘛？](./examples/example_被裁当天_对话.md)
- [HR 施压签字，话怎么说？](./examples/example_HR谈判_对话.md)
- [情绪崩溃，只想哭怎么办？](./examples/example_情绪崩溃_对话.md)
- [两个月没 Offer，是不是我废了？](./examples/example_找工作两个月无offer_对话.md)
- [35 岁焦虑，我还有未来吗？](./examples/example_35岁焦虑_对话.md)
- [想转行 AI](./examples/example_转行AI_对话.md)

**就业 / 转行咨询**

- [不想干原工作了，还能做什么？](./examples/example_就业方向_不想干原工作_对话.md)
- [转行做运营可以吗](./examples/example_就业方向_转行运营_对话.md)
- [学历一般，什么工作比较现实？](./examples/example_就业方向_学历一般现实工作_对话.md)
- [副业养活自己](./examples/example_就业方向_副业养活自己_对话.md)
- [不想打工，有什么小生意可以做？](./examples/example_就业方向_小生意不打工_对话.md)
- [40 岁还能转行吗？求指条明路！](./examples/example_就业方向_40岁转行_对话.md)

**更多博弈**

- [是否签竞业，会不会被搞？](./examples/example_是否签竞业_对话.md)
- [要不要仲裁？麻烦吗？](./examples/example_要不要仲裁_对话.md)
- [是否降薪换工作，该不该将就？](./examples/example_是否降薪换工作_对话.md)
- [是否去小公司，会不会是坑？](./examples/example_是否去小公司_对话.md)
- [是否出海远程，靠谱吗？](./examples/example_是否出海远程_对话.md)

<h2 id="sec-principles">🧘 Skill 设计原则</h2>

- 先稳住，再判断，再行动
- 先可逆决策，再不可逆决策
- 少大道理，多行动建议
- 有同理心，但不高高在上
- 用结构降低焦虑，用行动恢复控制感

<h2 id="sec-disclaimer">📜 免责声明</h2>

- 本仓库内容用于职业支持与沟通准备，不构成法律、医疗或心理治疗意见。
- 本仓库不支持报复、删数据、泄密、擅自带走公司资产或商业秘密、破坏设备等行为。
- 高风险争议或心理危机请及时联系专业人士。

<h2 id="sec-roadmap">🗺 Roadmap</h2>

- [ ] 增加更多城市/行业差异化案例
- [ ] 增加 offer 对比与入职风险检查模板
- [ ] 增加家庭压力与现金流协同决策模板
- [ ] 增加多 Agent 适配调用范式

<h2 id="sec-contributing">🤝 Contributing</h2>

欢迎贡献场景、模板和文档优化。  
提交前请阅读 [CONTRIBUTING.md](./CONTRIBUTING.md)。

<h2 id="sec-license">⚖️ License</h2>

MIT，详见 [LICENSE](./LICENSE)。

<h2 id="sec-release">💡 发布素材</h2>

想发朋友圈、推特、V2EX 安利？直接拿去用：

- [GITHUB_RELEASE_KIT.md](./GITHUB_RELEASE_KIT.md)
- [RELEASE_NOTES_v0.1.md](./RELEASE_NOTES_v0.1.md)
