---
id: smart-planning
title: Smart Planning Session
sidebar_position: 1
description: The GOAL Smart Planning Session — purpose, agenda, timing, and how to run it effectively.
---

import Drawio from '@theme/Drawio'
import SmartPlanningDiagram from '!!raw-loader!../diagrams/smart-planning-process.drawio'

# Smart Planning Session

**Purpose:** Define the goals and initial work shape for an upcoming Goal Cycle.

**Duration:** 30–60 minutes (shorter for cycles ≤1 week; full 60 minutes for new teams or complex goals)

**Participants:** All roles

**When it happens:** At the start of every Goal Cycle (immediately after the previous retrospective, or at team formation)

---

<Drawio content={SmartPlanningDiagram} />

## Agenda

### [5 min] Step 1 — Cycle Accuracy Review

Flow Master presents: What was the Cycle Accuracy Index for the last cycle? Was the estimate accurate? If variance occurred, which category (A–E) explains it?

**Purpose:** Calibrate the team's time estimate for this cycle before committing.

If this is the team's first cycle, skip this step.

---

### [5 min] Step 2 — Backlog Readiness Check

Product Strategist confirms: "The top items in the backlog are ready — they have acceptance criteria and a size."

Flow Master confirms there are at least two cycles worth of ready items.

**Flag any items missing criteria — do not let them into this cycle.** If the backlog is not ready, the Product Strategist grooms it before planning begins. Do not proceed with planning if the backlog is not ready.

---

### [20–30 min] Step 3 — Define Primary Goals

Product Strategist proposes 1–3 primary goals (outcomes, not task lists).

For each goal:
1. Product Strategist states the goal and its value layer(s)
2. Team asks feasibility questions
3. Team identifies known risks or dependencies
4. Team and Product Strategist agree: is this achievable in 1, 2, or 3 weeks?

**Rule:** If the team cannot clearly describe what "done" looks like for a goal, it is not ready to enter the cycle. Clarify first.

**Goal format examples:**

Good (outcome): *"Users can reset their password via email link so that we reduce support tickets related to locked accounts"*

Not good (task list): *"Implement forgot-password endpoint, send email with token, create reset form, add tests"*

---

### [5–10 min] Step 4 — Define Secondary Goals

Product Strategist proposes secondary goals — valuable, but not required for cycle success.

Secondary goals are picked up only if primary goals complete ahead of schedule. Keep this list short (1–2 items maximum). Secondary goals do not affect whether the cycle is considered successful.

---

### [5 min] Step 5 — Set WIP Limit

Flow Master proposes WIP limit using the formula:

```
WIP Limit = Team Size × Focus Factor
```

**Recommended Focus Factor:**
- New team or new to GOAL: 0.6
- Experienced team, stable work: 0.7
- High-interruption environment: 0.6

Team confirms or raises concerns. WIP limit is set for the cycle.

---

### [5 min] Step 6 — Technical Debt Allocation

Product Strategist and Flow Master confirm: what percentage of cycle capacity is reserved for technical debt?

- Default: **15%**
- Adjust up (to 20%) if debt is actively slowing delivery
- Adjust down (to 10%) only if no debt items exist

This allocation is protected — it cannot be cut for goal work during the cycle.

---

### Close

Publish the Goal Cycle Plan. Seed the Flow Board with initial tasks (no more than one full cycle's worth — add more as the cycle progresses). Confirm the first Daily Flow Sync time.

---

## What Smart Planning Does NOT Include

- Story point estimation
- Hour-level task breakdown
- Assigning tasks to specific people (the team self-organizes)
- Creating a complete task list (tasks emerge as the cycle progresses)

These are common Scrum habits that GOAL deliberately removes from planning.

---

## Sizing Tasks at Planning

Tasks are sized as Small, Medium, or Large based on expected delivery time:

| Size | Definition | Rule |
|------|------------|------|
| S | Delivered in 1 day | Enters Ready directly |
| M | Delivered in 2–3 days | Enters Ready directly |
| L | Requires more than 3 days | Must be split before entering Ready |

Any task that cannot be completed within 3 days must be split into smaller tasks before it enters the Ready column.

---

## The Goal Cycle Plan (Output of Smart Planning)

After Smart Planning, the Flow Master and Product Strategist publish the Goal Cycle Plan. This document is the reference for the entire cycle.

**Goal Cycle Plan contains:**
- Primary goals (must-achieve outcomes for cycle success)
- Secondary goals (valuable but non-blocking)
- Risk items (known factors that could slow the cycle)
- Technical debt allocation (percentage of cycle capacity)
- Cycle time estimate (1, 2, or 3 weeks)
- WIP limit for this cycle

**Primary goals are now locked.** No changes without the Emergency Cycle Protocol.

---

## Common Smart Planning Mistakes

**"We filled the cycle with a complete task list at planning."**
Tasks emerge during execution. At planning, define goals and 2–3 initial tasks per goal. Add more as work progresses.

**"We ran Smart Planning without checking if the backlog was ready."**
Planning proceeds only when the backlog contains at least two cycles worth of ready items. Backlog readiness is a prerequisite, not an afterthought.

**"Our goals are actually task descriptions."**
A goal describes an outcome. If you can't describe what user or business value it delivers, it's not a goal — it's a task.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
