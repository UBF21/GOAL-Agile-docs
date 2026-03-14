---
id: comparison
title: GOAL vs Scrum vs Kanban
sidebar_position: 4
description: A complete comparison matrix of GOAL, Scrum, and Kanban across all key dimensions — structure, metrics, planning, events, and philosophy.
---

# GOAL vs Scrum vs Kanban

GOAL is not a replacement for Scrum or Kanban built from scratch — it is a synthesis that addresses the documented weaknesses of both frameworks while retaining their strengths. Understanding where each framework came from and what specific problem it solves helps practitioners make informed adoption decisions and explain GOAL's design choices.

---

## The Problem Each Framework Solves

**Scrum** addresses the problem of unpredictable project delivery by creating a structured, time-boxed iteration cycle with defined roles, ceremonies, and artifacts. It was designed to replace waterfall-style big-bang delivery with shorter feedback loops and more adaptive planning.

**Kanban** addresses the problem of work management in continuous-flow environments. It makes work visible, limits work-in-progress to reduce congestion, and enables teams to measure and improve their flow without imposing a specific process structure.

**GOAL** addresses a different problem: *both Scrum and Kanban leave critical gaps in how software teams commit to outcomes and measure delivered value.* Scrum commits to tasks (sprint scope) rather than outcomes and measures completion rate rather than value. Kanban commits to nothing and measures throughput rather than outcomes. GOAL combines Scrum's outcome orientation with Kanban's flow focus while adding explicit value measurement.

---

## Full Comparison Matrix

| Dimension | Scrum | Kanban | GOAL |
|-----------|-------|--------|------|
| **Cycle structure** | Fixed sprint (1–4 weeks) | No cycles | Adaptive Goal Cycle (1–3 weeks) |
| **Cycle termination** | Calendar date | N/A | Goals completed |
| **Scope flexibility** | Fixed during sprint | Fully flexible | Tasks flexible, goals fixed |
| **Planning frequency** | Per sprint | Continuous | Per cycle |
| **Daily ceremony** | Daily Standup | Optional | Daily Flow Sync (flow-focused) |
| **Estimation unit** | Story points / hours | Not required | S/M/L task sizing |
| **Primary performance metric** | Velocity | Throughput | Flow Efficiency + Cycle Accuracy Index |
| **Interrupt handling** | Sprint break / exception | Any time, informal | Classified P1/P2/P3 protocol |
| **Technical debt** | Usually ignored | Visible if tracked | First-class work (10–20% allocation) |
| **Value measurement** | Not defined | Not defined | 3-Layer Value Framework |
| **Blocked task handling** | Discussed in standup | Ad hoc | Formal protocol with escalation timeline |
| **Backlog refinement** | Separate ceremony (inconsistent) | Ad hoc | Formal weekly event |
| **WIP limits** | Not defined | Defined (static) | Dynamic (formula-based: Team Size × Focus Factor) |
| **Retrospective input** | Team opinions | Not standard | Flow metrics data (mandatory) |
| **Role: team leader** | Scrum Master (process focus) | No defined role | Flow Master (flow + metrics focus) |
| **Role: product direction** | Product Owner | No defined role | Product Strategist (+ value measurement) |
| **Goal commitment** | Sprint goal (often deprioritized) | None | Primary goals (locked during cycle) |
| **Cycle extension** | Not possible (sprint ends on date) | N/A | Formal extension, once, documented |
| **Early closure** | Not possible (sprint ends on date) | N/A | Yes — when goals achieved |
| **Scaling** | SAFe, LeSS, Nexus | None standard | Multi-Team GOAL (Tier 2), Program GOAL (Tier 3) |
| **Certification** | CSM, CSPO, CSD | KMP, KSD | GP, GFMC, GPL, GCT |

---

## Key Differentiators Explained

### 1. Fixed Scope vs Fixed Goals

**Scrum:** The sprint scope is defined at Sprint Planning and locked. Teams commit to completing a specific list of backlog items. If priorities change mid-sprint, the sprint is either broken or the changes are "smuggled in."

**GOAL:** The cycle goals are defined at Smart Planning and locked. The tasks that serve those goals are completely flexible — they can be added, changed, or removed at any time as long as they serve the current primary goals. Teams commit to outcomes, not task lists.

**Why it matters:** Fixed-scope sprints create perverse incentives. Teams optimize for completing sprint items rather than achieving outcomes. A sprint can be "successful" (all items completed) while delivering little business value. GOAL makes outcome achievement the definition of success.

---

### 2. Static vs Dynamic WIP Limits

**Kanban:** WIP limits are defined per column and remain fixed unless the team deliberately changes them. They are not tied to team size or current capacity.

**GOAL:** WIP limits are calculated per cycle using the formula `Team Size × Focus Factor`. They adjust automatically when the team size changes and can be recalibrated when Focus Factor changes based on data.

**Why it matters:** Static WIP limits become arbitrary over time. A team that grows from 4 to 7 people without adjusting WIP limits will be artificially constrained. A team under heavy interrupt load needs a lower WIP limit than a team with stable work. GOAL's formula keeps WIP limits calibrated to reality.

---

### 3. Velocity vs Flow Efficiency + CAI

**Scrum:** Velocity (story points per sprint) is used to forecast future delivery and plan sprints. Points inflate over time, are non-comparable between teams, and velocity itself becomes a target that corrupts the metric.

**GOAL:** Two planning signals replace velocity: (1) **Flow Efficiency** measures how much of the cycle is actually spent delivering vs waiting — a measure of system health; (2) **Cycle Accuracy Index** measures whether cycle duration estimates are improving over time — a measure of planning calibration.

**Why it matters:** Velocity answers "how much did we do?" Flow Efficiency + CAI answer "how well does our system work and are we getting better at predicting it?" The second pair of questions leads to better decisions.

---

### 4. Undefined vs Structured Value Measurement

**Scrum and Kanban:** Neither framework defines what "value" means or how to measure it. "Deliver value" is a principle without operational content.

**GOAL:** The 3-Layer Value Framework defines three types of value that can be evidenced: Business Value (KPI impact), User Value (user experience improvement), and Technical Value (delivery capability improvement). Goals are tagged with their value layer at Smart Planning, and evidence is presented at the Goal Review.

**Why it matters:** Without a value definition, "delivering value" becomes a platitude that cannot be measured, improved, or communicated to stakeholders. The 3-Layer framework gives Product Strategists a concrete reporting structure that connects team work to business outcomes.

---

### 5. Informal vs Classified Interrupt Handling

**Scrum:** Interruptions either break the sprint (unusual) or are handled informally and invisibly, distorting velocity data.

**Kanban:** Any work can enter the system at any time, which is Kanban's intentional design, but there is no standard protocol for prioritization or impact tracking.

**GOAL:** All interruptions are classified as P1 (production incident), P2 (urgent business request), or P3 (disguised normal request). Each class has a defined handling path. All interrupts are logged regardless of outcome. Interrupt patterns are analyzed in retrospectives.

**Why it matters:** Invisible interrupt work is one of the most common sources of cycle failure and metric distortion. Making interrupt classification explicit, requiring documentation, and analyzing patterns turns interrupt management from a reactive problem into a manageable process.

---

## When to Choose Each Framework

| Situation | Recommended Framework |
|-----------|----------------------|
| Team new to agile, needs simple structure | Scrum |
| Operations team, continuous support work, no delivery cadence needed | Kanban |
| Product team with mixed delivery + support work and outcome accountability | GOAL |
| Team with strong Kanban practice wanting to add outcome commitment | GOAL |
| Team with strong Scrum practice wanting to improve flow and drop story points | GOAL |
| Enterprise at 4–8+ teams needing formal scaling | GOAL (Tier 3) or SAFe/LeSS |
| Single team, heavily regulatory/compliance environment | Scrum or GOAL |

---

## Vocabulary Translation

| Scrum Term | Kanban Term | GOAL Term |
|-----------|-------------|-----------|
| Sprint | Iteration / Cycle | Goal Cycle |
| Sprint Goal | — | Primary Goal |
| Sprint Planning | — | Smart Planning Session |
| Daily Scrum / Standup | — | Daily Flow Sync |
| Sprint Review | — | Goal Review |
| Sprint Retrospective | — | Data-Driven Retrospective |
| Backlog Refinement | — | Backlog Grooming Session |
| Scrum Master | — | Flow Master |
| Product Owner | — | Product Strategist |
| Story Points | — | S/M/L Task Sizing |
| Velocity | Throughput | Cycle Accuracy Index + Delivery Rate |
| Sprint Burndown | Cumulative Flow | Flow Metrics Dashboard |
| Definition of Done | — | Definition of Done (2-level) |
| — | WIP Limit (static) | WIP Limit (Team Size × Focus Factor) |
| — | Lead Time | Flow Time |
| — | Cycle Time | Cycle Time |

---

## What GOAL Borrows from Each Framework

**From Scrum:**
- Time-bounded work iterations with defined start and end
- Named roles with distinct responsibilities
- Planning ceremony at the start of each iteration
- Retrospective for process improvement
- The concept of a product backlog
- Team self-management within a structured process

**From Kanban:**
- Visual flow board as the primary work management tool
- WIP limits as the primary process health lever
- Flow metrics (cycle time, flow efficiency, throughput) as performance measures
- Continuous, pull-based work intake rather than committed sprint scope
- Explicit visualization of blocked work
- The concept that system design (not individual effort) determines delivery speed

**GOAL's original contributions:**
- Goal Stability Rule + Scope Flexibility Rule (adaptive termination model)
- Adaptive Cycle termination (closes when goals are met, not by calendar)
- Dynamic WIP limit formula (Team Size × Focus Factor)
- Formal Interrupt Management Protocol (P1/P2/P3 classification)
- Formal Blocked Task Protocol with escalation timeline
- 3-Layer Value Framework for concrete value measurement
- Technical debt as mandatory first-class work with percentage allocation
- Data-Driven Retrospective as a rule (not just a practice name)
- Backlog Grooming as a formal weekly event (not sprint-timing-dependent)
- Multi-team scaling model (Tier 2 / Tier 3 with Dependency Register and Program Board)

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
