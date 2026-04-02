# CHANGELOG

本项目遵循 Keep a Changelog 风格。

## [Unreleased]

### Added

- 就业方向咨询模块：`resources/就业方向总览.md`、`就业方向推荐流程.md`、`就业方向评估方法.md`、`岗位画像库.md`、`转岗技能映射.md`（与下方 JSON 配套）；`decision-tree.md` 新增分支 G；`workflows.md` 新增 Workflow 8；`examples/example_就业方向_*.md` 示例若干。
- 结构化数据目录 `data/`：`role_profiles.json`（已扩展至含平台就业、服务业一线、小生意等 **37** 条画像，含 `common_entry_barriers`）、`career_paths.json`、`skill_mappings.json`、`recommendation_rules.json`、`intake_questions.json`，供 Skill 基于字段输出而非泛泛建议。

### Changed

- 项目主题与描述从「面向程序员」调整为「面向各行业遭遇裁员与职业高压的职场人」，并同步更新 Skill、资源示例与发布文案中的措辞。
- 优化开源协作层文档：`CONTRIBUTING.md`、`SECURITY.md`
- 新增 GitHub Issue 模板与 PR 模板，提升协作一致性
- 补充发布素材文件 `GITHUB_RELEASE_KIT.md`

## [0.1.0] - 2026-04-01

### Added

- 初始中文 Skill：`.agents/skills/裁了吗/`
- 核心决策文件：`SKILL.md`、`decision-tree.md`、`workflows.md`
- 话术与边界文件：`scripts.md`、`boundaries.md`、`persona.md`、`scenarios.md`
- 资源文件：
  - 被裁流程、HR 谈判、领导沟通、情绪稳定
  - 未来方向、转行分析、单干副业
  - 7天/30天/90天计划
  - 竞业、背调、劳动仲裁基础
- checklist 资源模板（当天、一周、一个月、求职、转行、单干等）
- 多场景 examples（被裁、HR 施压、情绪崩溃、转行、副业、竞业、仲裁等）

### Notes

- 项目定位为 Markdown Agent Skill 仓库，不包含前端/后端/数据库代码。
- 默认服务对象为遭遇裁员、协商离职或职业转型压力的中国职场人（不限定行业与岗位）。

