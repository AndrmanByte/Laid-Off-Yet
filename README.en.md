<div align="center">
  <br>
  <h1>📄 Laid Off Yet?</h1>
  <h3>⚠️ Heads-up: this Skill is full of plain language and “next steps”.<br>Don’t read it under HR eye contact—it might speed up the signing.</h3>
  <br>
  <p><strong>“Terminations have to be fast—someone took a screenshot.”</strong></p>
  <p>— To everyone whose pupils just shook at their desk</p>
</div>

<p align="center">
  <strong>Language</strong><br>
  <a href="README.md">中文</a>
  · <a href="README.en.md">English</a>
</p>
<p align="center"><sub>Note: GitHub shows <code>README.md</code> by default; this file is the English README.</sub></p>

<p align="center">
  <strong>Friends</strong>: <a href="https://linux.do">LINUX DO</a> — this project is linked with the LINUX DO community.
</p>

---

<h2 id="sec-what">🤔 What is this?</h2>

**Laid Off Yet?** — a Markdown **Agent Skill** for working people.

This is not a hotline that hands you tissues, and not a “be grateful to the company” success seminar.

It’s built to close the dozens of anxious tabs layoffs open in your head—**“Is HR bluffing?” “Should I sign a non-compete?” “How do I fix my résumé by tomorrow?” “What about the mortgage?”**—and replace them with **actions you can take** and **lines you can actually send**.

Works with Codex, OpenClaw, Claude Code, and similar agents.

<h2 id="sec-why">🥺 Why this exists</h2>

Layoffs feel like a 5× drama binge: the process is fast, the information is shattered, and the emotional bill feels priced per second.

You’ve heard enough “You got this!” What you need is substance: **“Don’t sign that today. Say it like this. Before bed, do these three things.”**

This Skill doesn’t promise N+1 or an instant job. It aims to help you **make fewer irreversible mistakes** you’d want to time-travel back and slap yourself for.

<h2 id="sec-can">⚡️ What it can do</h2>

- **Routing**: layoff day, HR talks, non-compete, emotional crash, career change, side income—each has its own branch; it won’t mix “I was laid off today” with “should I join a small company?”
- **Structure**: default **8-part** output—stabilize, assess, then **today/this week** tasks plus **7/30/90-day** timelines.
- **Scripts**: copy-paste lines for HR, your manager, family, and interviewers—e.g. **“Could you put that in writing? I want to make sure I understand.”**
- **Checklists**: day one, week one, 30 days, 90 days—what to do when.
- **Career direction**: structured profiles and rules under `data/` for “what else can I do?”—without pretending to choose for you.

**Core flow (same as `workflows.md`):** stabilize → assess the situation → route the problem → information & strategy → action list → risk notes → timeline → close the loop.

**Boundaries (same as `boundaries.md`):** no definitive legal advice or lawyer replacement; no psychological or medical diagnosis; no retaliation, deleting data, leaks, taking company assets or trade secrets, or sabotage; no coaching to forge or hide evidence. See `.agents/skills/裁了吗/boundaries.md`.

<h2 id="sec-who">🎯 Who it’s for</h2>

- You who just got the “graduation notice” and went blank.
- You negotiating with HR and unsure what to sign.
- You in a gap month and spiraling.
- You pivoting or side-hustling with no idea where to start.

If you want **“what do I do next”** instead of an all-night chat buddy, we’re aligned.

<h2 id="sec-how">🚀 How to use</h2>

1. Clone this repo.
2. Copy `.agents/skills/裁了吗/` into your Agent Skills folder. For career-direction mode, keep the repo-root `data/*.json` files too.
3. Load `SKILL.md` in your agent and follow `decision-tree.md` and `workflows.md`, then start the conversation.

**Example prompt:**

```text
Load the skill: 裁了吗.
I was just laid off; HR wants me to sign a mutual termination today.
Follow the skill structure: stabilize, situation assessment, today/this week actions, copy-ready lines, risk notes, 7/30/90-day timeline.
```

<h2 id="sec-nav">📂 Quick links</h2>

- [What is this?](#sec-what)
- [Why this exists](#sec-why)
- [What it can do](#sec-can)
- [Who it’s for](#sec-who)
- [How to use](#sec-how)
- [Repo layout](#sec-tree)
- [Example dialogues](#sec-examples)
- [Design principles](#sec-principles)
- [Disclaimer](#sec-disclaimer)
- [Roadmap](#sec-roadmap)
- [Contributing](#sec-contributing)
- [License](#sec-license)
- [Friends / LINUX DO](#sec-friends)

<h2 id="sec-not">🧐 What this is not</h2>

- ❌ Not a website, SaaS, or full-stack app (don’t plan to “deploy and monetize” it)
- ❌ Not legal advice or therapy (use professionals for that)
- ❌ Not generic chit-chat—it’s an action-oriented Skill and data repo

<h2 id="sec-tree">🗂 Repository layout</h2>

```text
Laid-Off-Yet/
- data/
  - role_profiles.json
  - career_paths.json
  - skill_mappings.json
  - recommendation_rules.json
  - intake_questions.json
- README.md
- README.en.md
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

<h2 id="sec-examples">💬 Example dialogues</h2>

**Classic scenarios**

- [Layoff day—what first?](./examples/example_被裁当天_对话.md)
- [HR pressure to sign—what to say?](./examples/example_HR谈判_对话.md)
- [Meltdown—only want to cry](./examples/example_情绪崩溃_对话.md)
- [Two months, no offer—am I done?](./examples/example_找工作两个月无offer_对话.md)
- [Age 35 anxiety](./examples/example_35岁焦虑_对话.md)
- [Pivot to AI](./examples/example_转行AI_对话.md)

**Career / pivot**

- [Don’t want my old job—what’s realistic?](./examples/example_就业方向_不想干原工作_对话.md)
- [Pivot to ops—feasible?](./examples/example_就业方向_转行运营_对话.md)
- [Average credentials—realistic jobs?](./examples/example_就业方向_学历一般现实工作_对话.md)
- [Side income to survive](./examples/example_就业方向_副业养活自己_对话.md)
- [No more employment—small business?](./examples/example_就业方向_小生意不打工_对话.md)
- [Age 40—can I still pivot?](./examples/example_就业方向_40岁转行_对话.md)

**More trade-offs**

- [Sign non-compete?](./examples/example_是否签竞业_对话.md)
- [Arbitration—worth it?](./examples/example_要不要仲裁_对话.md)
- [Lower pay to switch jobs?](./examples/example_是否降薪换工作_对话.md)
- [Small company—trap?](./examples/example_是否去小公司_对话.md)
- [Overseas remote—realistic?](./examples/example_是否出海远程_对话.md)

<h2 id="sec-principles">🧘 Design principles</h2>

- Stabilize first, then decide, then act
- Reversible decisions before irreversible ones
- Fewer slogans, more next steps
- Empathy without condescension
- Structure lowers anxiety; action restores agency

<h2 id="sec-disclaimer">📜 Disclaimer</h2>

- Content supports career planning and communication prep—not legal, medical, or psychological advice.
- No retaliation, deleting data, leaks, taking company assets or trade secrets, or device sabotage.
- For high-risk disputes or crisis, contact qualified professionals.

<h2 id="sec-roadmap">🗺 Roadmap</h2>

- [ ] More city/industry-specific cases
- [ ] Offer comparison & onboarding risk templates
- [ ] Family pressure & cash-flow decision templates
- [ ] More multi-agent integration examples

<h2 id="sec-contributing">🤝 Contributing</h2>

Contributions to scenarios, templates, and docs are welcome.  
See [CONTRIBUTING.md](./CONTRIBUTING.md).

<h2 id="sec-license">⚖️ License</h2>

MIT—see [LICENSE](./LICENSE).

<h2 id="sec-friends">🔗 Friends / LINUX DO</h2>

This open-source project is recognized by the [LINUX DO](https://linux.do) community and maintains a mutual link:

- **LINUX DO**: <https://linux.do> — Open Chinese-language tech community (*Where possible begins*).

<h2 id="sec-release">💡 Release kit</h2>

For About text, topics, releases, and social blurbs:

- [GITHUB_RELEASE_KIT.md](./GITHUB_RELEASE_KIT.md)
- [RELEASE_NOTES_v0.1.md](./RELEASE_NOTES_v0.1.md)
