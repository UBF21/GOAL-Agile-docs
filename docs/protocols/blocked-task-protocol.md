---
id: blocked-task-protocol
title: Blocked Task Protocol
sidebar_position: 2
description: The GOAL Blocked Task Protocol — what blocked means, required Block Register information, escalation timeline, and retrospective analysis.
---

# Blocked Task Protocol

A blocked task is one of the most visible indicators of process health. GOAL treats blocked tasks with a formal protocol that ensures visibility, accountability, and timely resolution.

---

## What a Blocked Task Is

A task is blocked when the person responsible for it **cannot make progress due to a factor outside their immediate control**.

**Important distinction:**

A task where the developer is thinking, researching, or learning is **NOT** blocked. It is in progress. A blocked task requires action from **someone else** to be able to continue.

| State | Meaning |
|-------|---------|
| In Progress | Developer is actively working; no external dependency needed |
| **Blocked** | Progress requires action from another person, team, or external party |

---

## Blocking a Task — Required Information

When a task is moved to the Blocked column, the following information is **mandatory**. The Block Register entry is incomplete without it.

```
BLOCK REGISTER ENTRY

Task name:               [clear name]
Task ID (if any):        [optional]
Date and time blocked:   [date and time]

Blocker type (select one):
  ☐ Technical
  ☐ External
  ☐ Business Decision
  ☐ Dependency
  ☐ Infrastructure

Blocker description:
  What specifically is preventing progress?
  ___________________________________________________

Resolution owner:
  Name of person responsible for unblocking (not just "the team"):
  ___________________________________________________

Resolution plan:
  What action is being taken right now to resolve this?
  ___________________________________________________

Expected resolution date/time:  _____________________

Escalation path (if not resolved by hour 24):
  ___________________________________________________
```

This entry must be completed **within the hour** of the task being blocked. Not at the next Daily Flow Sync. Not end of day.

---

## Blocker Type Categories

| Type | Use when... | Example |
|------|-------------|---------|
| **Technical** | A technical problem requires research, a spike, or a decision | "Need to determine if the external API supports batch requests before implementing" |
| **External** | Blocked by a third party, another team, or external service | "Waiting for API credentials from vendor" |
| **Business Decision** | Requires a decision from Product Strategist or stakeholder | "Design for this screen has not been approved" |
| **Dependency** | Blocked by another task that is not yet complete | "Cannot start until Task X is merged to main" |
| **Infrastructure** | Environment or tooling issue | "CI pipeline is broken, cannot run validation" |

---

## Escalation Timeline

```
Hour 0:     Task is marked Blocked in the board
            Block Register entry is completed by the task owner
            Task owner begins working on resolution independently

Hour 0–24:  Task owner resolves the blocker independently if possible
            Flow Master is aware (sees it in the Daily Flow Sync)

Hour 24:    If not resolved, Flow Master actively assists
            Blocker is discussed in the next Daily Flow Sync
            Resolution owner is confirmed and accountable

Hour 48:    If still not resolved, formal escalation occurs:

            Blocker type → Escalation path:
            ─────────────────────────────────────────────────────────
            Technical     → Flow Master + Tech Lead jointly own resolution
            External      → Product Strategist contacts external party directly
            Business      → Product Strategist makes the decision or escalates
            Dependency    → Flow Master reprioritizes the blocking task (may adjust WIP)
            Infrastructure→ Flow Master escalates to DevOps/Platform with formal SLA

Hour 72+:   If blocker is unresolved and blocking a primary goal:
            → The goal is marked "at risk" in the Goal Cycle Plan
            → Product Strategist is formally notified
            → Possible cycle extension is evaluated
```

---

## Rules for Blocked Tasks

1. **Moving a task to Blocked is mandatory, not optional.** No developer should hold a blocker privately. Holding a blocker privately is a process violation.

2. **Blocked tasks do not count toward WIP.** A blocked task is paused, not active.

3. **Every blocked task has a single named owner.** "The team" is not an owner. One person is responsible for driving the resolution.

4. **The Daily Flow Sync reviews all Blocked tasks.** The Flow Master asks: is the Register entry complete? Is there an owner? Has the escalation clock started?

---

## Retrospective Use of Block Register

At every Data-Driven Retrospective, the Block Register is analyzed for patterns:

- Which blocker types appear most frequently?
- Are there recurring external dependencies that should be resolved structurally?
- Are there specific types of tasks that consistently get blocked?
- Is there a team member whose tasks are disproportionately blocked? (Possible support or training need)
- Are blockers being logged promptly or held privately?

**Key question:** Is there a structural problem that can be solved, rather than a one-time event that cannot be prevented?

If the same external dependency blocks the team in three consecutive cycles, it is a structural problem. The Product Strategist should negotiate a service level agreement or the team should build around it.

---

## Common Blocked Task Mistakes

**"We discuss blocked tasks in the standup instead of moving them to Blocked."**
The Blocked column serves a specific purpose: it makes blockers visible on the board at all times, not just during the Daily Flow Sync. Move the task. Complete the entry.

**"The blocked task has been sitting with no owner for three days."**
The Block Register requires a named owner. The Flow Master must refuse to let a blocked task sit without a complete entry. No entry = no escalation clock.

**"We mark tasks as blocked to avoid WIP pressure."**
This is a manipulation of the protocol. A task is blocked only if another person's action is required. If the developer is actively working, the task is In Progress regardless of difficulty.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
