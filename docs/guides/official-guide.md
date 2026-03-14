---
id: official-guide
title: GOAL Official Guide
sidebar_position: 1
description: The complete GOAL Official Guide — field reference covering all roles, events, artifacts, metrics, and operational procedures.
---

# GOAL Official Guide
## Goal-Oriented Adaptive Lifecycle — Field Reference

**Version:** 0.2 | **Author:** Felipe Montenegro | **Status:** Active Reference

---

## GOAL in One Page

GOAL is an adaptive agile framework built on a single idea: **Goals are the contract. Tasks are the path.**

Teams commit to outcomes (goals), not task lists. Goals stay fixed for the duration of a cycle. Tasks — the specific work chosen to reach those goals — are fully flexible. This separation is the core of everything GOAL does.

A **Goal Cycle** is a time-bounded work period (1–3 weeks) that ends when goals are completed, not when the calendar runs out. Cycles can close early if goals finish ahead of schedule. Cycles can extend once, with documentation, if goals need more time. Goals cannot change mid-cycle.

Work flows through a **Flow Board** — a visual board with columns: Backlog → Ready → In Progress → Code Review → Validation → Done — plus special lanes for Blocked, Expedite, and Technical Debt.

**WIP limits** control how many tasks can be active simultaneously. The formula is: Team Size × Focus Factor (0.6–0.8). WIP limits are non-negotiable. When WIP is full, the priority is finishing existing work, not starting new tasks.

**Flow metrics** replace story points: Flow Efficiency measures productive vs waiting time; Cycle Time measures execution speed; Block Rate measures process friction. These metrics drive retrospectives, not opinions.

**Interruptions** are classified — P1 (production incident), P2 (urgent business), P3 (disguised normal request) — and handled through a formal protocol. Only P1 and P2 can enter the Expedite lane. Maximum one active Expedite task at any time.

Five roles, five events, six artifacts, seven metrics, eight mandatory rules.

---

## The GOAL Manifesto

**1. Goals over backlogs.**
We commit to outcomes, not task lists — the path to a goal can change, the goal itself stays stable within a cycle.

**2. Flow over velocity.**
We measure how work actually moves through the system, not how much work we said we planned to do.

**3. Data over estimates.**
We use historical flow data — cycle time, block rate, delivery rate — instead of abstract story points.

**4. Delivery over activity.**
Starting a task has no value; only a task that meets the Definition of Done counts as progress.

**5. Adaptation over commitment locking.**
Plans evolve when new information arrives; GOAL absorbs that change without breaking the team's focus.

---

## Quick Reference: Roles

### Flow Master
The guardian of the delivery process. Focuses on the system — how work flows — not on individual people.

- Define and enforce WIP limits each cycle using the formula
- Monitor the Flow Board daily; flag aging tasks
- Escalate blocked tasks that exceed 48 hours without resolution
- Run the Daily Flow Sync
- Protect the team from scope changes and unplanned interruptions
- Approve Expedite lane entries (jointly with Product Strategist)
- Facilitate Data-Driven Retrospectives using flow metrics
- Track and report the Cycle Accuracy Index

**Authority:** Can enforce WIP limits and block new task starts. Cannot change goals or business priorities.
**Success metric:** Flow stability — consistent cycle times and low block rate over successive cycles.

---

### Product Strategist
Responsible for value direction. Defines what the team should achieve (goals), not how to achieve it (tasks).

- Define primary and secondary goals for each Goal Cycle
- Maintain and prioritize the backlog; run the Backlog Grooming Session weekly
- Tag each goal with its value layers using the 3-Layer Value Framework
- Evaluate and respond to interrupt requests
- Report value delivered at Goal Review with evidence
- Be available during the cycle to answer questions

**Authority:** Defines goals, cannot change them mid-cycle without Emergency Cycle Protocol.
**Does NOT do:** Define implementation approach, assign tasks, monitor individual output.
**Success metric:** Value delivered per cycle — measured using the 3-Layer Value Framework.

---

### Delivery Team
The self-managed group of engineers responsible for executing work.

- Deliver value continuously, not in batches at cycle end
- Maintain quality as defined in the Definition of Done
- Flag blockers immediately — never hold blockers privately
- Participate in Backlog Grooming for technical sizing and feasibility input
- Manage technical debt proactively within the allocated capacity
- Self-organize: who picks up which task, how to implement a goal, when to split a large task

**Success metric:** Throughput stability — consistent delivery rate cycle over cycle.

---

### Backlog Curator (function of the Product Strategist)
Not a separate role. A formal function within the Product Strategist's responsibilities.

- Ensure the backlog always contains at least two Goal Cycles worth of ready-to-execute items
- Ensure every backlog item has defined acceptance criteria before entering Smart Planning
- Remove or archive obsolete items
- Run the weekly Backlog Grooming Session

**Ready-to-execute definition:** Clear outcome description + acceptance criteria + S/M/L size estimate + no blocking unresolved dependencies.

---

## Quick Reference: Events

| Event | Duration | Who | Cadence | Purpose |
|-------|----------|-----|---------|---------|
| Smart Planning Session | 30–60 min | All roles | Start of every Goal Cycle | Define cycle goals, initial task shape, and WIP limit |
| Daily Flow Sync | 10–12 min | All roles (PS optional) | Every working day | Identify blockers and maintain flow momentum |
| Backlog Grooming Session | 30–45 min | PS + FM required, 1–2 DT rotating | Weekly | Keep backlog healthy and ready-to-execute |
| Goal Review | 30–45 min | All roles + stakeholders | End of every Goal Cycle | Evaluate goal achievement and measure value delivered |
| Data-Driven Retrospective | 45–60 min | All roles | After Goal Review | Improve process using real metrics |

---

## Quick Reference: Artifacts

| Artifact | Owner | Description |
|----------|-------|-------------|
| Goal Cycle Plan | Product Strategist | Primary goals, secondary goals, risks, tech debt allocation, and estimated cycle duration |
| Flow Board | Flow Master (enforces), Team (maintains) | Visual board showing all active work and column status |
| Flow Metrics Dashboard | Flow Master | Real-time view of WIP vs limit, cycle time, block rate, flow efficiency, aging tasks |
| Block Register | Flow Master (tracks), Task Owner (logs) | Persistent log of every blocked task with type, owner, resolution, and time blocked |
| Definition of Done | Team (collective ownership) | Quality checklist every task must fully satisfy before moving to Done |
| Cycle Accuracy Index | Flow Master | Historical record of estimated vs actual cycle duration |

---

## Quick Reference: Metrics

| Metric | Formula | Target / Interpretation |
|--------|---------|------------------------|
| Flow Time | Date entered Done − Date entered Ready | Track trend downward |
| Cycle Time | Date entered Done − Date entered In Progress | Consistent is as important as fast |
| Wait Time | Flow Time − Cycle Time | Minimize — this is pure waste |
| Flow Efficiency | (Cycle Time ÷ Flow Time) × 100 | &lt;15% = critical; 15–30% = baseline; 30–50% = healthy; 50%+ = high-performing |
| Block Rate | (Blocked tasks ÷ Total tasks completed) × 100 | Target &lt;20%; &gt;30% = systemic problem |
| Delivery Rate | Tasks moved to Done ÷ Working days in cycle | Track trend stability |
| Focus Ratio | Active tasks ÷ WIP Limit | &lt;0.7 = idle; 0.7–1.0 = healthy; &gt;1.0 = WIP violation |
| Cycle Accuracy Index | Actual days ÷ Estimated days | 1.0 = perfect; &lt;1.0 = early; &gt;1.0 = investigate |

---

## Quick Reference: Mandatory Rules

1. **WIP limits are enforced at all times.** No exceptions without Flow Master approval and written documentation.
2. **All tasks must be deliverable within 3 days.** Large items are split before entering Ready.
3. **Blocked tasks are immediately registered in the Block Register.** Holding a blocker privately is a process violation.
4. **Daily Flow Sync is held every working day.** 10–12 minutes. Not optional. Not replaceable with a Slack message.
5. **All work follows the Definition of Done.** No "done enough." No "just this once" exceptions.
6. **Retrospectives use flow metrics data.** Opinions must be anchored to observable data.
7. **Goal Cycle goals do not change during an active cycle.** New priorities follow the Interrupt Management Protocol.
8. **Expedite lane has a maximum of 1 active task.** No exceptions.

---

## The Goal Cycle in 10 Steps

**Step 1 — Complete the previous cycle.**
Run the Goal Review and Data-Driven Retrospective before starting a new cycle.

**Step 2 — Confirm backlog readiness.**
At least two cycles worth of ready-to-execute items before Smart Planning.

**Step 3 — Run the Smart Planning Session (30–60 min).**
Product Strategist proposes primary goals. Team provides feasibility input. WIP limit set. Tech debt allocation confirmed.

**Step 4 — Publish the Goal Cycle Plan.**
Immediately after Smart Planning. Primary goals are now locked.

**Step 5 — Seed the Flow Board.**
Initial tasks in Ready. Every card must have: task name, size, owner, date entered, and the goal it serves.

**Step 6 — Run the Daily Flow Sync every working day.**
10–12 minutes. Walk the board right to left.

**Step 7 — Manage blocked tasks immediately.**
Move to Blocked. Complete Block Register entry within the hour.

**Step 8 — Handle interruptions using the protocol.**
P1/P2/P3 classification before any action is taken.

**Step 9 — Close the cycle when goals are completed.**
Calendar is irrelevant. Goals drive closure.

**Step 10 — Repeat from Step 1.**
No gap between cycles. Continuous cadence.

---

## The Daily Flow Sync Script

**Setup:** Flow Master reviews the board before sync. Notes any stalled tasks, aging tasks, current WIP vs limit.

**Opening (30 sec):** *"Let's run the sync. We have 10 minutes. We're walking the board, not going person by person."*

**Q1 — What moved forward? (3 min):** Walk right to left: Done → Validation → Code Review → In Progress → Ready. Record column changes only.

**Q2 — What is blocked or at risk? (4 min):** Check Blocked column. Check for aging tasks. Ask: "Anything at risk of getting stuck today?"

**Q3 — What is slowing the flow? (2 min):** Flow Master observes WIP count, queue lengths, bottlenecks.

**Close (30 sec):** *"That's the sync. Blockers go in the Register today. Next sync is tomorrow."*

---

## The Smart Planning Agenda

| Time | Step | Activity |
|------|------|----------|
| 5 min | 1 | Review Cycle Accuracy Index from last cycle |
| 5 min | 2 | Backlog readiness check |
| 20–30 min | 3 | Define primary goals (1–3 outcomes) |
| 5–10 min | 4 | Define secondary goals (1–2, best-effort only) |
| 5 min | 5 | Set WIP Limit (Team Size × Focus Factor) |
| 5 min | 6 | Confirm technical debt allocation (default 15%) |

---

## The Retrospective Agenda

| Time | Step | Activity |
|------|------|----------|
| 15 min | 1 | Flow Metrics Review (Cycle Time, Flow Efficiency, Block Rate, Delivery Rate, WIP Compliance) |
| 10 min | 2 | Block Register Analysis (types, patterns, recurring issues) |
| 15 min | 3 | Identify Improvements (maximum 3, each with owner and success metric) |
| 10 min | 4 | Review Previous Improvements (implemented? did they work?) |

---

## WIP Limit Quick Calculator

Formula: **WIP Limit = Team Size × Focus Factor** (round to nearest whole number)

| Team Size | FF 0.6 | FF 0.7 | FF 0.8 |
|-----------|:------:|:------:|:------:|
| 3 | 2 | 2 | 2 |
| 4 | 2 | 3 | 3 |
| 5 | 3 | 4 | 4 |
| 6 | 4 | 4 | 5 |
| 7 | 4 | 5 | 6 |
| 8 | 5 | 6 | 6 |
| 10 | 6 | 7 | 8 |

**Focus Factor selection:**

| Condition | Use |
|-----------|-----|
| New team, or new to GOAL | 0.6 |
| Experienced team, standard operating conditions | 0.7 |
| Stable, well-defined work, minimal interruptions | 0.8 |
| Frequent dependencies or interruptions | 0.6 |

---

## S/M/L Sizing Quick Guide

| Size | Definition | Board Rule |
|------|------------|------------|
| **Small (S)** | Delivered in 1 day or less | Enters Ready directly |
| **Medium (M)** | Delivered in 2–3 days | Enters Ready directly |
| **Large (L)** | Requires more than 3 days | Must be split before entering Ready |

---

## GOAL Adoption Checklist

### Phase 1 — Foundation (Weeks 1–3)

```
☐ Flow Board created with standard columns + special lanes
☐ WIP limit defined and communicated to the team
☐ Daily Flow Sync started (replaces existing standup)
☐ Baseline Definition of Done defined and agreed by the whole team
☐ S/M/L sizing criteria calibrated with team-specific examples
☐ First Smart Planning Session completed
☐ First Goal Cycle started with at least 2 primary goals defined
☐ Flow metrics data collection started
```

### Phase 2 — Metrics and Goals (Weeks 4–8)

```
☐ Flow Metrics Dashboard activated and visible to the team
☐ Story points removed completely
☐ Formal Goal Cycle structure: goals as outcomes, not task lists
☐ Backlog Grooming Sessions running weekly
☐ Block Register implemented
☐ First full Data-Driven Retrospective run using flow metrics
☐ Team can articulate the difference between a goal and a task
```

### Phase 3 — Protocols (Weeks 9–14)

```
☐ Interrupt Management Protocol implemented — all requests classified P1/P2/P3
☐ Blocked Task Protocol fully active — escalation timeline followed
☐ 3-Layer Value Framework used at Goal Reviews
☐ Cycle Accuracy Index tracking activated
☐ Technical Debt lane active with formal allocation
☐ Stakeholder communication model in place for P3 requests
```

### Phase 4 — Optimization (Weeks 15+)

```
☐ Cycle duration prediction using Cycle Accuracy Index historical data
☐ Delivery risk indicators active
☐ Flow Efficiency trending upward across at least 3 consecutive cycles
☐ Retrospective improvements measurably reducing block rate
☐ Optional: DORA metrics integrated
☐ Optional: Developer cognitive load monitoring
```

---

## Common Mistakes and Quick Fixes

**1. "We use Goal Cycles but fill them with a fixed task list from day one."**
This is Scrum renamed. Define only goals and 2–3 initial tasks at planning. Let the rest emerge.

**2. "Our WIP limit is 4 but the board always shows 7–8 active tasks."**
Enforce strictly for one full cycle. Compare flow efficiency and cycle time from violation vs compliance periods.

**3. "Our retrospectives have become complaint sessions."**
Make it a rule that no topic is raised without pointing to the metric that supports it.

**4. "Everything ends up in the Expedite lane."**
Review the interrupt log. Require documented business impact before any P2 classification.

**5. "Tasks are moved to Done before meeting the full DoD."**
The Flow Master must refuse to count tasks toward goal completion if they do not meet the DoD.

**6. "Team members are doing work that is not on the Flow Board."**
All work goes on the board — there is no minimum size. Invisible work corrupts every flow metric.

**7. "The goals at cycle end are not what we defined at planning."**
The Goal Cycle Plan is a document, not a memory. Reference it explicitly at every Daily Flow Sync.

**8. "We can't run a Daily Flow Sync every day — it takes too long."**
If it takes more than 12 minutes, it is being run incorrectly. Walk the board, not the people.

**9. "Blocked tasks sit for days with no owner."**
The Block Register entry is the blocker escalation. No entry = no escalation clock.

**10. "Story points are gone but we have no idea how much work fits in a cycle."**
After 3–5 cycles, Delivery Rate and Cycle Accuracy Index data provide a reliable capacity model.

---

## One-Page Team Health Check

Score each item: 3 = consistently true | 2 = sometimes true | 1 = rarely true | 0 = not true

**Flow and Board Health**
- [ /3] WIP limit respected at all times
- [ /3] All work (including support, ad-hoc, meetings) is on the Flow Board
- [ /3] Blocked tasks are moved to Blocked immediately with complete Block Register entry
- [ /3] Board is reviewed daily in the Flow Sync

**Goals and Planning**
- [ /3] Smart Planning produces outcomes, not task lists
- [ /3] Primary goals do not change during an active cycle
- [ /3] Every backlog item entering a cycle has acceptance criteria and a size
- [ /3] Team can articulate what value each goal delivers

**Metrics and Retrospectives**
- [ /3] Retrospectives start with the Flow Metrics Dashboard
- [ /3] Each retrospective produces 1–3 improvements with owners and success metrics
- [ /3] Previous retrospective improvements are reviewed
- [ /3] Cycle Accuracy Index shows improving estimation over time

**Interruptions and Escalations**
- [ /3] Requests are classified P1/P2/P3 before any action is taken
- [ /3] Expedite lane has at most 1 active task
- [ /3] Blocked tasks resolved within 48 hours on average

**Roles and Accountability**
- [ /3] Flow Master is enforcing WIP limits and DoD compliance
- [ /3] Product Strategist can show value delivered per cycle with data
- [ /3] Delivery Team self-organizes task assignment

**Scoring:**

| Total | Interpretation |
|-------|---------------|
| 45–51 | Strong GOAL implementation. Continue current practices. |
| 36–44 | Good foundation. Focus one retrospective improvement on the lowest-scoring area. |
| 24–35 | Several practices are inconsistent. Revisit mandatory rules as a team. |
| Below 24 | GOAL fundamentals are not in place. Return to Phase 1. |

---

*GOAL Official Guide v0.2 | Based on GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
