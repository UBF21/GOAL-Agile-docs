---
id: wip-limits
title: WIP Limits
sidebar_position: 6
description: Work In Progress limits in GOAL — the formula, Focus Factor selection, authority model, and what to do when WIP is full.
---

import Drawio from '@theme/Drawio'
import WipFormulaDiagram from '!!raw-loader!../diagrams/wip-formula.drawio'
import WipPriorityDiagram from '!!raw-loader!../diagrams/wip-priority-order.drawio'
import FocusRatioDiagram from '!!raw-loader!../diagrams/focus-ratio.drawio'

# WIP Limits

WIP (Work In Progress) limits are one of the most powerful and most frequently violated elements of GOAL. Understanding why they exist — not just what they are — is essential for enforcing them under pressure.

---

## What WIP Means

WIP refers to the number of tasks that are actively being worked on — in the **In Progress**, **Code Review**, or **Validation** columns — at any given time across the entire team.

**Backlog and Ready column tasks do not count toward WIP.** They are waiting, not in progress.
**Blocked tasks do not count toward WIP.** They are paused.

---

## Why WIP Limits Matter

Without limits, teams tend to start many tasks simultaneously. Each team member works on multiple items, switching context frequently. This creates cascading problems:

- Every task takes longer because attention is split
- Code review queues grow because reviewers are also context-switching
- Blockers accumulate silently because nobody has time to resolve them
- Nothing gets fully completed even though everyone appears busy

WIP limits force the team to **finish before starting**. This is counterintuitive but consistently shown in flow research to increase throughput.

**Simple analogy:** A highway with 100 cars moving at 120 km/h flows freely. A highway with 1000 cars moves at 20 km/h. Adding more cars (starting more tasks) does not increase throughput — it reduces it.

---

## Dynamic WIP Formula

<Drawio content={WipFormulaDiagram} />

GOAL uses a formula rather than a fixed number to keep WIP limits adapted to actual team size:

```
WIP Limit = Team Size × Focus Factor

Focus Factor range: 0.6 – 0.8

Examples:
  Team of 3 developers:  3 × 0.7 = ~2 active tasks
  Team of 5 developers:  5 × 0.7 = ~3–4 active tasks
  Team of 8 developers:  8 × 0.7 = ~5–6 active tasks
```

Round to the nearest whole number.

### WIP Limit Quick Calculator

| Team Size | Focus Factor 0.6 | Focus Factor 0.7 | Focus Factor 0.8 |
|-----------|:----------------:|:----------------:|:----------------:|
| 2 | 1 | 1 | 2 |
| 3 | 2 | 2 | 2 |
| 4 | 2 | 3 | 3 |
| 5 | 3 | 4 | 4 |
| 6 | 4 | 4 | 5 |
| 7 | 4 | 5 | 6 |
| 8 | 5 | 6 | 6 |
| 9 | 5 | 6 | 7 |
| 10 | 6 | 7 | 8 |
| 12 | 7 | 8 | 10 |

---

## Choosing the Focus Factor

| Condition | Recommended Focus Factor |
|-----------|--------------------------|
| Team is new to GOAL or new to each other | 0.6 (more conservative) |
| Team is experienced with GOAL | 0.7 (standard) |
| Team has very stable, well-defined work | 0.8 (less conservative) |
| Team has frequent interruptions or dependencies | 0.6 |
| Team is absorbing new members | 0.6 |

**Start at 0.6 for the first cycle.** It is much easier to raise a limit based on data than to lower it after violation patterns have formed.

---

## WIP Authority

- The **Flow Master** defines the WIP limit for each cycle using the formula and current team data
- The **team** can propose changing the Focus Factor at a retrospective, backed by data
- **No team member** can start a new task if it would exceed the WIP limit
- The **Flow Master** can approve a temporary WIP limit override for emergency situations, documented with a reason

**The WIP limit is enforced by the Flow Master as one of their primary responsibilities.** "The WIP limit is just a guideline" is an anti-pattern.

---

## What to Do When WIP Is Full

<Drawio content={WipPriorityDiagram} />

When the WIP limit is reached and a team member has no active task, the priority order is:

```
1. Help unblock a task in the Blocked column
2. Perform a code review on a task in Code Review
3. Help validate a task in Validation
4. Pair with another team member on their current task
5. Work on technical debt items
6. Only if none of the above: pick a new task from Ready
```

This order reinforces GOAL's principle of **finishing before starting**. The most valuable action when WIP is full is to help existing work move to Done, not to start new work.

---

## Focus Ratio — Monitoring WIP Health

<Drawio content={FocusRatioDiagram} />

```
Focus Ratio = Active tasks (In Progress + Code Review + Validation) ÷ WIP Limit

< 0.7:   Team has idle capacity — check if backlog is ready, or if blockers are hiding work
0.7–1.0: Healthy operating range
> 1.0:   WIP limit is being exceeded — Flow Master intervention required
```

The Focus Ratio is tracked on the Flow Metrics Dashboard and reviewed at the Daily Flow Sync.

---

## Common WIP Limit Mistakes

**"Our WIP limit is 4 but the board shows 7 tasks in progress."**
This is one of the most common adoption failures. The WIP limit means nothing if it is not enforced. The Flow Master must actively prevent new task starts when the limit is reached — this is a core authority of the role.

**"WIP limits slow us down."**
This is the most common misconception. WIP limits appear to slow individual starts, but they consistently improve team throughput because tasks complete faster. After one cycle of strict enforcement, the metrics make the case.

**"The Expedite lane task doesn't count toward WIP."**
Incorrect. The Expedite lane task does count toward WIP. The entire Expedite model has only 1 active task maximum precisely because of this.

**"We need a higher WIP limit because everyone is independent and doesn't block each other."**
Even for highly independent teams, higher WIP means more context switching and slower code review turnaround. The formula accounts for focus, not just dependency.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
