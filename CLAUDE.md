# CLAUDE.md — GOAL Agile Documentation Site

This file gives Claude Code full context about this project.
Read it entirely before making any changes.

---

## What this project is

This is the official documentation site for **GOAL Agile** (Goal-Oriented Adaptive Lifecycle) —
a new agile methodology created by **Felipe Montenegro** that combines the structure of Scrum
with the flow intelligence of Kanban, while adding original concepts neither framework provides.

The site is built with **Docusaurus** and published to **Netlify**.
It supports **two languages**: English (default) and Spanish (i18n).

---

## Tech stack

| Tool | Version | Purpose |
|------|---------|---------|
| Docusaurus | 3.x (classic) | Static site generator |
| TypeScript | Yes | Config and pages |
| Bun | 1.3.9 | Package manager (NOT npm) |
| Mermaid | via @docusaurus/theme-mermaid | Workflow diagrams |
| Netlify | Manual deploy | Hosting |

**Always use `bun` — never `npm` or `yarn`.**

---

## Commands

```bash
bun start          # Dev server at localhost:3000
bun run build      # Production build → ./build/
bun run serve      # Serve the production build locally
```

---

## Project structure

```
goal-docs/
├── docs/                          # English documentation (50 pages)
│   ├── intro.md
│   ├── manifesto.md
│   ├── quick-start.md
│   ├── methodology/               # Core methodology (15 pages)
│   │   ├── overview.md
│   │   ├── principles.md
│   │   ├── roles.md
│   │   ├── goal-cycle.md
│   │   ├── flow-board.md
│   │   ├── wip-limits.md
│   │   ├── definition-of-done.md
│   │   ├── continuous-delivery.md
│   │   ├── technical-debt.md
│   │   ├── goal-writing.md
│   │   ├── developer-experience.md
│   │   ├── stakeholder-management.md
│   │   ├── quality-management.md
│   │   ├── capacity-planning.md
│   │   ├── risk-management.md
│   │   ├── remote-async.md
│   │   └── okr-integration.md
│   ├── events/                    # 5 GOAL events
│   ├── protocols/                 # 3 protocols
│   ├── metrics/                   # Metrics + Value framework
│   ├── scaling/                   # Multi-team scaling (5 pages)
│   ├── guides/                    # Practical guides (6 pages)
│   ├── certification/             # Certification program (5 pages)
│   └── reference/                 # Glossary, anti-patterns, etc. (4 pages)
│
├── i18n/es/                       # Spanish translations (mirror of docs/)
│   └── docusaurus-plugin-content-docs/current/
│
├── src/
│   ├── pages/
│   │   ├── index.tsx              # Custom homepage
│   │   └── index.module.css       # Homepage styles
│   └── css/
│       └── custom.css             # Global brand CSS variables
│
├── static/
│   ├── img/
│   │   ├── logo.png               # Icon transparent (used as fallback)
│   │   ├── wordmark-light.png     # Navbar logo — light mode
│   │   ├── wordmark-dark.png      # Navbar logo — dark mode
│   │   ├── logo-light.png         # Icon — light background
│   │   ├── logo-dark.png          # Icon — dark background
│   │   └── favicon-32.png         # Favicon
│   └── _redirects                 # Netlify SPA redirects
│
├── docusaurus.config.ts           # Main config (i18n, navbar, footer, mermaid)
├── sidebars.ts                    # Sidebar navigation structure
└── CLAUDE.md                      # This file
```

---

## Brand system

Extracted from the official GOAL Brand System (G. FOLDED G mark):

```
primary-700:    #0284C7   ← primary color in light mode
primary-600:    #06B6D4   ← cyan accent
primary-500:    #14B8A6   ← teal / primary color in dark mode
text-light:     #0F172A
text-dark:      #F8FAFC
bg-dark:        #0B1220
surface-dark:   #0F172A
border-dark:    #1E293B
accent:         #34D399
```

Dark mode uses `#0B1220` as background and `#14B8A6` (teal) as primary.
Light mode uses `#FFFFFF` background and `#0284C7` (blue) as primary.

Logo assets are in `static/img/`. The navbar uses `wordmark-light.png` / `wordmark-dark.png`
(responsive to color mode via Docusaurus `srcDark` prop).

---

## Homepage (src/pages/index.tsx)

Five sections:
1. **Hero** — dark navy gradient (`#0B1220 → #0F2040`), white text forced with `!important`
2. **Features** — 6 feature cards on `--ifm-background-surface-color`
3. **Manifesto** — 5 GOAL values with "X over Y" format
4. **Why GOAL?** — CSS Grid comparison table (NOT an HTML `<table>`)
5. **Footer CTA** — dark navy gradient, same as hero

**Critical CSS rule:** The hero and footer CTA sections have dark backgrounds.
All text inside them must use explicit `color: #F8FAFC !important` or `color: #94A3B8 !important`
because Docusaurus injects light-mode text colors that override inherited values.

The comparison table uses `.comparisonGrid` (CSS Grid, 4 columns).
The GOAL column uses `.cmpCellGoal` with dark background and teal `#14B8A6` border + arrow prefix.

---

## i18n

- Default locale: `en`
- Second locale: `es`
- Spanish pages mirror the English structure exactly under `i18n/es/docusaurus-plugin-content-docs/current/`
- Navbar and footer translations: `i18n/es/docusaurus-theme-classic/navbar.json` and `footer.json`
- To add a new page in both languages: create in `docs/` AND `i18n/es/.../`

---

## Netlify deployment

Manual deploy process:
1. `bun run build`
2. Drag `build/` folder to Netlify deploy drop zone
3. `static/_redirects` is automatically included in the build

The `_redirects` file handles:
- `/es/*` → `/es/index.html 200` (Spanish SPA fallback)
- `/*` → `/index.html 200` (English SPA fallback)

---

## Source markdown files

The raw methodology documents live in a separate folder:
```
/Users/feliperafaelmontenegro/Documents/Goal agile/
```

These are the source of truth for content. The Docusaurus pages were generated from them.
If content needs updating, edit the Docusaurus page directly (not the source markdown).
If a new module is added to "Goal agile/", it needs a corresponding Docusaurus page.

**35 source documents exist** (EN + ES pairs):
- GOAL_Methodology_v0.2 — core framework (26 sections)
- GOAL_Official_Guide — field reference
- GOAL_Goal_Writing_Framework — how to write goals
- GOAL_Developer_Experience — burnout, cognitive load, team health
- GOAL_Stakeholder_Management — communication model
- GOAL_Quality_Management — quality metrics and strategy
- GOAL_Capacity_Planning — team capacity formulas
- GOAL_Risk_Management — risk register and protocols
- GOAL_Remote_Async — distributed team adaptations
- GOAL_Adoption_Playbook — transition from Scrum/Kanban
- GOAL_Retrospective_Patterns — 9 retrospective formats
- GOAL_OKR_Integration — connecting OKRs to Goal Cycles
- GOAL_Board_Templates — Flow Board ASCII templates
- GOAL_Workflow_Diagrams — Mermaid diagrams
- GOAL_Tooling_Integration — Jira, Linear, Trello, Notion, GitHub
- GOAL_Certification_Model — 3-level certification program
- GOAL_Glossary — 60+ terms
- GOAL_FAQ — 46 questions
- GOAL_Pilot_Program — 3-cycle pilot guide

**Pending (ES versions not yet created — rate limit):**
- GOAL_Integracion_OKR_ES.md
- GOAL_Manual_Adopcion_ES.md
- GOAL_Patrones_Retrospectiva_ES.md

---

## Known issues / pending work

- [ ] 3 Spanish docs pending (see above)
- [ ] FAQ and Pilot Program pages not yet added to Docusaurus sidebar
- [ ] No custom 404 page
- [ ] Social card image (`img/goal-social-card.jpg`) is missing — using placeholder
- [ ] GitHub repo not yet created (waiting for author)
- [ ] SaaS product vision exists but no code started

---

## Methodology context

GOAL is at **v0.2**. It has never been used by a real team yet (no pilot data).
The next milestone is finding a pilot team to validate the framework.

Key GOAL concepts to understand:
- **Goal Cycle** = adaptive sprint that ends when goals are met (not calendar)
- **Flow Master** = Scrum Master equivalent focused on flow, not ceremony
- **Product Strategist** = Product Owner equivalent who owns value measurement
- **WIP Limit** = Team Size × Focus Factor (0.6–0.8)
- **Flow Efficiency** = Cycle Time / Flow Time × 100 (target: 30–50%)
- **Cycle Accuracy Index** = Actual days / Estimated days (tracks estimation quality)
- **P1/P2/P3** = interrupt classification (P1=prod incident, P2=urgent biz, P3=normal)
- **3-Layer Value** = Business Value / User Value / Technical Value

Author: **Felipe Montenegro**
