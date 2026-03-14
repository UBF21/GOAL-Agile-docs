---
id: quick-start
title: Quick Start Guide
sidebar_position: 3
description: How to start using GOAL Agile in your team — a phase-by-phase implementation roadmap.
---

# Quick Start: Implementing GOAL in Your Team

GOAL is designed to be adopted progressively. You do not need to implement every element from day one. This guide walks you through Phase 1 — enough to complete your first full Goal Cycle — with pointers to deeper content for each component.

---

## Before You Start

**What you need:**
- A team of 2–12 people working on a shared product
- At least one person willing to take on the Flow Master function (even part-time)
- A visual board tool (physical board, Jira, Linear, Trello, Notion, or even Google Sheets)
- Willingness to remove story points

**What you do NOT need:**
- Formal certification
- Special software
- A consultant
- A complete methodology rollout on day one

---

## Phase 1 — Foundation (Weeks 1–3)

**Goal:** Complete one full Goal Cycle with the basic GOAL infrastructure in place.

### Step 1: Assign Roles

Identify who will take on each role:

| Role | Who | Key responsibility |
|------|-----|--------------------|
| **Flow Master** | Usually a tech lead, senior engineer, or Scrum Master | Enforces WIP limits, runs Daily Flow Sync, monitors the board |
| **Product Strategist** | Usually a Product Owner, Product Manager, or team lead | Defines cycle goals, maintains backlog, measures value |
| **Delivery Team** | Everyone doing the work | Self-organizes task execution, flags blockers immediately |

Roles can overlap in small teams. A 3-person team can have one person serve as both Product Strategist and a Delivery Team member.

---

### Step 2: Create Your Flow Board

Set up a board with these columns:

```
Backlog → Ready → In Progress → Code Review → Validation → Done
```

Plus these special lanes:
- **Blocked** — for tasks that cannot progress
- **Expedite** — for urgent approved interruptions (maximum 1 active at any time)
- **Technical Debt** — for debt-reduction work

You can use any tool. See the [Tooling Integration Guide](/docs/guides/tooling-integration) for setup instructions for Jira, Linear, Trello, Notion, and GitHub Projects.

---

### Step 3: Define Your WIP Limit

Calculate your WIP limit using the formula:

```
WIP Limit = Team Size × Focus Factor
```

**Choose your Focus Factor:**

| Your situation | Focus Factor |
|----------------|-------------|
| New team or new to GOAL | 0.6 |
| Experienced team, standard conditions | 0.7 |
| Stable work, minimal interruptions | 0.8 |
| Frequent interruptions or dependencies | 0.6 |

**Example:** Team of 5, new to GOAL → 5 × 0.6 = 3 active tasks maximum

This limit applies to tasks in **In Progress + Code Review + Validation** combined.

---

### Step 4: Define Your Definition of Done

Hold a 30-minute team session to define what "done" means. Start with this baseline:

```
A task is Done when ALL of the following are true:

☐ Code is merged to the main/trunk branch
☐ All automated tests pass
☐ At least one peer code review completed and approved
☐ Task validated in staging or QA environment
☐ No new technical debt without a Technical Debt backlog entry
☐ Relevant documentation updated (if behavior changes or new API added)
```

Add any team-specific criteria in Level 2. Write it down. Post it on the board or in your team wiki.

---

### Step 5: Calibrate S/M/L Task Sizing

Define what Small, Medium, and Large mean for **your team**:

| Size | Definition | Maximum time |
|------|------------|-------------|
| Small (S) | Can be delivered in 1 day | 1 day |
| Medium (M) | Can be delivered in 2–3 days | 3 days |
| Large (L) | Requires more than 3 days | Must be split before entering Ready |

**Create 3–5 team-specific examples for each size.** This calibration is more valuable than the definition itself.

---

### Step 6: Run Your First Smart Planning Session

**Duration:** 30–60 minutes
**Who:** All roles

Agenda:
1. **Backlog readiness check (5 min)** — do the top items have acceptance criteria and sizes?
2. **Define primary goals (20–30 min)** — 1–3 outcome statements the team commits to
3. **Define secondary goals (5 min)** — 1–2 nice-to-haves if capacity allows
4. **Set WIP limit (5 min)** — Flow Master proposes, team confirms
5. **Confirm tech debt allocation (5 min)** — default 15% of capacity

**Primary goal format:** An outcome statement, not a task list.

Good: *"Users can log in with Google OAuth so that sign-up friction is reduced"*
Not good: *"Implement OAuth endpoints, update user model, add tests"* (that's tasks, not a goal)

After planning: seed the Flow Board with an initial 2–3 tasks per goal. More tasks will be added as the cycle progresses.

---

### Step 7: Run the Daily Flow Sync Every Day

**Duration:** 10–12 minutes — strictly enforced
**Who:** Full team
**Format:** Walk the board right to left (Done → Validation → Code Review → In Progress → Ready)

Three questions only:
1. What moved forward since yesterday?
2. What is blocked or at risk of being blocked?
3. What is slowing the flow?

This replaces your existing daily standup. If it takes more than 12 minutes, it is being run incorrectly — redirect personal activity reports to board state questions.

---

### Step 8: Handle Blockers Immediately

When a task cannot progress, move it to the **Blocked** column immediately and complete a Block Register entry:

- Task name and date blocked
- What specifically is preventing progress
- Who is responsible for unblocking it
- What action is being taken right now
- Expected resolution date

**Escalation clock:** Hour 0 — task owner tries to resolve | Hour 24 — Flow Master assists | Hour 48 — formal escalation

---

### Step 9: Close the Cycle and Retrospect

When all primary goals meet the Definition of Done, the cycle closes — regardless of the calendar date.

**Goal Review (30–45 min):** Were primary goals achieved? What is the evidence of value delivered?

**Data-Driven Retrospective (45–60 min):**
- Review flow metrics for the cycle
- Analyze the Block Register
- Identify 1–3 specific improvements with owners
- Review whether previous improvements were implemented

Then: immediately start Smart Planning for the next cycle.

---

## Phase 1 Checklist

```
☐ Flow Board created with all standard columns and special lanes
☐ WIP limit defined and communicated to the team
☐ Daily Flow Sync started (replaced existing standup)
☐ Baseline Definition of Done defined and agreed by the whole team
☐ S/M/L sizing criteria calibrated with team-specific examples
☐ First Smart Planning Session completed
☐ First Goal Cycle started with at least 2 primary goals defined
☐ Flow metrics data collection started
```

**Phase 1 success criteria:** Team has completed one full Goal Cycle with a Flow Board, WIP limits, and a DoD in place.

---

## What Comes After Phase 1

| Phase | Weeks | Focus |
|-------|-------|-------|
| Phase 2 | 4–8 | Activate Flow Metrics Dashboard, remove story points, formalize backlog grooming |
| Phase 3 | 9–14 | Implement full Interrupt Management Protocol, Blocked Task escalation, Value Framework |
| Phase 4 | 15+ | Cycle duration prediction, delivery risk indicators, DORA metrics integration |

See the [Implementation Roadmap](./methodology/overview#implementation-roadmap) for the full phased plan.

---

## Common Mistakes in Week 1

**"We filled the cycle with a complete task list at planning."**
This is Scrum renamed. At the next Smart Planning, define only goals and 2–3 initial tasks. Add tasks as the cycle progresses.

**"Our WIP limit of 4 shows 7 tasks in progress."**
Enforce the limit strictly for one full cycle. Collect the metrics. Data makes the case better than arguments.

**"Our Daily Flow Sync takes 30 minutes."**
It is being run as a status meeting. Walk the board, not the people. Redirect: "Did the task change columns?" not "What did you do yesterday?"

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
