# GitHub 发布素材包

用于仓库 About、Topics、首个 Release、社交分享文案的统一素材。

## 1) About 一句话简介

### 中文候选

1. 面向中国程序员的职业重启 Agent Skill：被裁应对、方向决策与行动落地。
2. 一个中文 Agent Skill，帮程序员在裁员与焦虑中恢复控制感并推进下一步。
3. 聚焦“被裁之后”的开源 Skill 仓库：先稳住，再判断，再行动。

### English candidates

1. A Chinese agent skill for engineers navigating layoffs, career decisions, and practical restart planning.
2. An open-source markdown skill that helps software engineers turn career crisis into actionable next steps.
3. A China-focused career-restart skill for Codex/OpenClaw/Claude Code with structured workflows and scripts.

## 2) Topics 建议（优先级排序）

1. `agent-skill`
2. `markdown`
3. `career-restart`
4. `layoff-support`
5. `career-transition`
6. `job-search`
7. `freelance`
8. `codex`
9. `claude-code`
10. `openclaw`
11. `china-tech`
12. `prompt-engineering`

### Topics 说明

- `agent-skill`: 明确仓库定位为可调用技能。
- `markdown`: 主要资产是 Markdown 内容。
- `career-restart`: 主题是职业重启。
- `layoff-support`: 聚焦被裁后高压场景。
- `career-transition`: 覆盖转岗转行问题。
- `job-search`: 含求职、面试、空窗期内容。
- `freelance`: 覆盖副业和单干试水。
- `codex` / `claude-code` / `openclaw`: 标记适配生态。
- `china-tech`: 强调中国程序员语境。
- `prompt-engineering`: 体现结构化输出与分流模板。

## 3) 首个 Release 文案（v0.1）

### 中文版

#### 这是什么

`programmer-future-skill` 是一个面向中国程序员的开源 Agent Skill 仓库。  
它不是网站或 SaaS，而是一套可被 Agent 直接读取的 Markdown 决策与行动技能。

#### 当前支持什么

- 被裁当天到 90 天的分阶段应对
- HR 协商、签字压力、补偿沟通、竞业与背调场景
- 统一流程：先稳住 -> 再判断 -> 再分流 -> 再行动
- 可直接复制的话术模板（HR/领导/家人/面试）
- 多场景示例与 checklist（找工作、转行、单干等）

#### 还不支持什么

- 不提供法律结论，不替代律师意见
- 不提供心理治疗或医疗建议
- 不支持报复、删数据、泄密、破坏设备等行为
- 暂未覆盖所有城市/行业细分差异

#### 后续计划

- 增加更多地区与行业差异化案例
- 增加 offer 对比与入职风险检查模板
- 增加家庭压力与现金流协同决策模板
- 增加多 Agent 调用示例

### English version

#### What this is

`programmer-future-skill` is an open-source Chinese Agent Skill repository for software engineers facing career disruption.  
It is not a web app or SaaS, but a markdown-first skill system for agent execution.

#### What is supported now

- Structured support from layoff day to a 90-day restart
- HR negotiation, signing pressure, compensation, non-compete, and reference-check scenarios
- A consistent flow: stabilize -> assess -> route -> act
- Copy-ready scripts for HR/manager/family/interview communication
- Scenario examples and checklists for job search, transition, and freelance validation

#### What is not supported

- No legal conclusions or lawyer replacement
- No medical or clinical guidance
- No retaliation/data deletion/data exfiltration/sabotage guidance
- Not yet fully localized for every city/industry sub-context

#### What’s next

- Add more region/industry-specific cases
- Add offer comparison and pre-onboarding risk templates
- Add family-pressure + cashflow decision modules
- Improve cross-agent integration patterns and examples

## 4) 社交分享短文案

### 中文（3）

1. 被裁后最难的是“下一步做什么”。这个开源 Skill 只做一件事：把混乱变成可执行动作。
2. 给中国程序员做的职业重启 Agent Skill：不讲鸡汤，直接给流程、话术和清单。
3. 如果你在裁员、转行、单干之间摇摆，这个仓库可以帮你先稳住，再判断，再行动。

### English (3)

1. Built an open-source agent skill for engineers after layoffs: less noise, more actionable next steps.
2. A markdown-first career-restart skill for Codex/OpenClaw/Claude Code, focused on real-world execution.
3. Not motivational fluff: structured workflows, scripts, and checklists for layoff and transition decisions.

## 5) 仓库首页推荐标签文案

- 适合谁：被裁或职业转型中的中国程序员；需要现实决策支持的工程师。
- 能解决什么：把“情绪 + 不确定性 + 信息压力”转成“可执行下一步、可复用话术和时间线计划”。
- 怎么开始用：让 Agent 读取 `.agents/skills/程序员未来/SKILL.md`，按 `decision-tree.md` 分流并按 `workflows.md` 输出。
