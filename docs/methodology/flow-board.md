---
id: flow-board
title: Flow Board
sidebar_position: 5
description: The GOAL Flow Board — standard columns, special lanes, task card anatomy, and aging indicators.
---

import Drawio from '@theme/Drawio'
import FlowBoardColumnsDiagram from '!!raw-loader!../diagrams/flow-board-columns.drawio'

# Flow Board

The Flow Board is the central visual management tool in GOAL. It represents every piece of active work and its current state. It is the primary data source for flow metrics, the Daily Flow Sync, and the Data-Driven Retrospective.

---

## Standard Columns

<Drawio content={FlowBoardColumnsDiagram} />

```
Backlog → Ready → In Progress → Code Review → Validation → Done
```

| Column | What It Means |
|--------|---------------|
| **Backlog** | Items that exist but are not yet ready to execute (missing acceptance criteria or sizing) |
| **Ready** | Items that meet the ready-to-execute definition and can be picked up |
| **In Progress** | Actively being worked on by a team member |
| **Code Review** | Implementation complete, waiting for peer review |
| **Validation** | Code review complete, being tested in staging/QA environment |
| **Done** | Meets all Definition of Done criteria — no exceptions |

### Column Rules

**Backlog → Ready transition:**
An item can only move to Ready when it has a clear outcome description, acceptance criteria, a size estimate (S/M/L), and no blocking unresolved dependencies.

**Ready → In Progress transition:**
A team member picks up a task from Ready only when their current tasks are complete or WIP allows. No two people should start the same task without coordination.

**In Progress → Code Review transition:**
Implementation is complete. The developer creates a pull request and moves the card. The card stays in Code Review until a peer has reviewed and approved.

**Code Review → Validation transition:**
Code review is complete and approved. The task is deployed to staging/QA and validated against the acceptance criteria.

**Validation → Done transition:**
All DoD criteria are fully met. The task is Done — no exceptions for deadline pressure.

---

## Special Lanes

### Blocked

For any task that cannot progress due to an external factor. Moving a task to Blocked is **mandatory**, not optional.

Rules:
- Any team member who discovers a blocker moves the task to Blocked immediately — not at the next Daily Flow Sync
- A Block Register entry must be completed within the hour of blocking
- Blocked tasks do not count toward WIP (they are in a paused state)
- The escalation clock starts at hour 0 — see the [Blocked Task Protocol](../protocols/blocked-task-protocol)

A task where the developer is thinking, researching, or learning is **NOT** blocked. It is in progress. A blocked task requires action from someone else.

### Expedite

For urgent tasks approved through the [Interrupt Management Protocol](../protocols/interrupt-management). Hard rules:

- **Maximum 1 active Expedite task at any time — no exceptions**
- Joint approval required: Flow Master + Product Strategist
- Business justification documented before work begins
- Expedite tasks are visible to the whole team on the Flow Board
- Normal WIP limits still apply to the rest of the board
- An Expedite task that takes more than 3 days without resolution is reclassified

### Technical Debt

For tasks that reduce existing technical debt rather than deliver new features. Kept separate to:
- Ensure visibility — debt work does not compete invisibly with feature work
- Enforce the 10–20% capacity allocation
- Enable debt-specific metrics (how much debt work was done vs planned)

Technical Debt tasks are subject to the full Definition of Done.

---

## Task Card Minimum Information

Every task on the Flow Board must have:

1. **Task name** — clear, outcome-oriented description
2. **Size** — S (Small), M (Medium), or L (Large)
3. **Owner** — who is currently responsible
4. **Date entered current column** — required for aging calculations
5. **Goal it serves** — link to the primary or secondary goal

**No exceptions.** A task card without this information cannot move to Ready.

---

## Task Sizing: S/M/L

GOAL uses three sizes based on expected delivery time, not abstract effort:

| Size | Definition | Maximum time | Board rule |
|------|------------|-------------|------------|
| **Small (S)** | Can be delivered in 1 day or less | 1 day | Enters Ready directly |
| **Medium (M)** | Can be delivered in 2–3 days | 3 days | Enters Ready directly |
| **Large (L)** | Requires more than 3 days | Must be split | Cannot enter Ready until split |

### Calibration Examples

**Small (S):**
- Fix a UI bug where a button is misaligned
- Update a configuration value and redeploy
- Write unit tests for an existing function
- Add one field to an existing API response

**Medium (M):**
- Implement a new API endpoint with validation and tests
- Build a new form with client-side validation
- Refactor a module to use a new pattern
- Integrate a third-party webhook

**Large (L — must split before starting):**
- "Build the user authentication system"
- "Migrate the database to the new schema"
- "Implement the notifications feature"

### How to Split a Large Task

1. Identify the smallest deliverable slice that provides value or unblocks something
2. Make that a Medium task
3. Define the remaining work as additional Medium or Small tasks
4. If any piece is still more than 3 days, split again

**Sizing rule:** When in doubt, estimate smaller. The cost of splitting a task partway through is low. The cost of a task that takes 2 weeks and blocks the board is high.

---

## Aging Indicators

Tasks that remain in the same column beyond their expected duration receive a visual aging indicator. Recommended thresholds:

| Task Size | Yellow Indicator | Red Indicator |
|-----------|-----------------|---------------|
| Small (S) | >1 day in same column | >2 days |
| Medium (M) | >2 days in same column | >4 days |
| Large (L) | >3 days in same column | >6 days |
| Any task | — | >2x expected time → discuss in next Daily Flow Sync |

### Why Aging Indicators Matter

Aging tasks are the leading indicator of blockers, WIP violations, and process bottlenecks. A task stuck in Code Review for 4 days with no aging indicator is an invisible problem. With an aging indicator, it surfaces in the Daily Flow Sync automatically.

The Flow Master monitors aging tasks daily and raises them in the sync even if nobody else does.

---

## What "All Work on the Board" Means

One of GOAL's eight mandatory rules is that **all work** goes on the Flow Board. This includes:

- Feature development (expected)
- Bug fixes (expected)
- Technical debt reduction (tracked in the Technical Debt lane)
- Support requests handled by the team
- Ad-hoc debugging or investigation
- Internal tools or scripts
- Documentation updates that consume meaningful time

There is no minimum size for a task card. A 30-minute task still belongs on the board if it consumes team capacity that affects the WIP count.

**Why:** Invisible work corrupts every flow metric. If 25% of the team's time is spent on untracked support requests, the Delivery Rate metric is wrong. The WIP count is wrong. The Flow Efficiency calculation is wrong. The board must reflect reality.

---

## Physical vs Digital Boards

**Physical boards:** Work well for co-located teams. Use sticky notes, tape, and a whiteboard. Aging indicators can be implemented with colored dots or markers added after a set number of days. Simple and highly visible.

**Digital boards:** Required for distributed teams. Jira, Linear, Trello, Notion, and GitHub Projects all support the GOAL Flow Board structure with varying degrees of native feature support. See the [Tooling Integration Guide](../guides/tooling-integration) for setup instructions.

**Hybrid:** Some teams maintain a physical board for the Daily Flow Sync and a digital board for async visibility and metrics tracking. This can work but requires rigorous synchronization discipline.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
