---
id: backlog-grooming
title: Backlog Grooming Session
sidebar_position: 3
description: The GOAL Backlog Grooming Session — purpose, agenda, backlog health standards, and readiness criteria.
---

# Backlog Grooming Session

**Purpose:** Maintain a healthy, ready-to-execute backlog so Smart Planning is never blocked by unready items.

**Duration:** 30–45 minutes

**Participants:** Product Strategist (required), Flow Master (required), 1–2 Delivery Team members (rotating)

**When it happens:** Once per week, independent of cycle timing. Not tied to cycle start or end.

---

## Why a Dedicated Grooming Event

Without regular grooming:
- Smart Planning is blocked by items that don't have acceptance criteria
- Teams discover mid-cycle that upcoming work is poorly defined
- Backlog becomes a wish list that nobody acts on
- Dependencies are discovered late, causing cycle-level blockers

The Backlog Grooming Session separates the preparation work from the planning work. Smart Planning should be fast and clean because grooming has done the preparation.

---

## Agenda

### [10 min] Step 1 — Review New Items

Review items added to the backlog since the last grooming:
- Size each new item (S/M/L based on expected delivery time)
- Add or request acceptance criteria
- Flag any items that are unclear or need more research before sizing

Items without acceptance criteria cannot proceed to Ready. Flag them for follow-up before the next grooming session.

---

### [15 min] Step 2 — Review Upcoming Items (Top of Backlog)

For each of the top items likely to enter the next cycle:
- Confirm acceptance criteria are complete and clear
- Confirm sizing is still accurate (sometimes items grow or shrink as the team learns more)
- Identify dependencies (what does this item need before it can start?)
- Split any Large items that can be split now, before they block planning

**Key question for each item:** "Could a developer pick this up right now and know exactly what to deliver?"

If the answer is no, the item is not ready.

---

### [5 min] Step 3 — Archive or Remove Stale Items

Review items that have been in the backlog for a long time:
- Is the item still relevant?
- Has it been superseded by other work?
- Was it deprioritized so long ago that the context has changed?

Archive or remove items that no longer reflect current priorities. A backlog with 200 items that nobody is actually planning to do is a false signal of future work.

---

### [5 min] Step 4 — Confirm Backlog Health

Final check:
- At least 2 cycles worth of ready items in the backlog?
- Any critical gaps in the roadmap?
- Any items blocked by external decisions that need Product Strategist action?

---

## Backlog Health Standard

The backlog is considered **healthy** when it contains at minimum:

1. Two Goal Cycles worth of ready-to-execute items
2. All ready items have acceptance criteria
3. All ready items have a size estimate
4. No ready items have unresolved blocking dependencies

If the backlog drops below this standard, the Product Strategist prioritizes grooming over other work until health is restored. A planning session cannot run effectively with an unhealthy backlog.

---

## Backlog Item States

```
Discovery → Refinement → Ready → Cycle → Done / Archive

Discovery:   Item exists but is not yet defined enough to be estimated or executed
Refinement:  Item is being analyzed; acceptance criteria are being written
Ready:       Item meets the ready-to-execute definition
Cycle:       Item is part of an active Goal Cycle
Done:        Item has been completed and meets the DoD
Archive:     Item was removed because it is no longer relevant
```

Only items in **Ready** state can enter a Goal Cycle at Smart Planning.

---

## Acceptance Criteria Format

Every backlog item must have acceptance criteria written before it can enter the Ready state. GOAL recommends the **Given/When/Then** format:

```
Format:
  Given [initial context or precondition]
  When  [action is performed]
  Then  [expected outcome]

Example — user login feature:
  Given the user has a valid registered account
  When  the user enters their email and password and clicks "Login"
  Then  the user is authenticated and redirected to the dashboard within 2 seconds

Example — API endpoint:
  Given a valid authentication token in the request header
  When  a GET request is made to /api/users/{id}
  Then  the response returns status 200 with the user object in JSON format
  And   the response time is under 300ms
```

Multiple acceptance criteria per item are allowed. All must pass for the item to be considered Done.

---

## The Backlog Curator Function

The Backlog Grooming Session is owned by the Backlog Curator function — a formal function of the Product Strategist that can be delegated to a senior team member in larger organizations.

The Backlog Curator is responsible for backlog health between grooming sessions: adding new items, flagging unclear items, and maintaining priority order.

---

## What the Backlog Is NOT

- A wish list of every idea anyone has ever had
- A fixed list that never changes
- A Sprint backlog (GOAL does not have sprint backlogs)
- A feature roadmap (the roadmap lives at the Product Strategist level)

The backlog is a **working instrument** for the next 2–3 cycles of delivery. Anything beyond that belongs in roadmap planning, not in the active backlog.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
