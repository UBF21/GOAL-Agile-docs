---
id: interrupt-management
title: Interrupt Management Protocol
sidebar_position: 1
description: The GOAL Interrupt Management Protocol — P1/P2/P3 classification, Expedite lane rules, stakeholder negotiation, and when to break a cycle.
---

# Interrupt Management Protocol

Interruptions are one of the most common causes of failed sprints and lost productivity in software teams. GOAL treats interruptions as a class of work with a formal handling protocol, not as exceptions to improvise around.

---

## Interrupt Classification

Every incoming request that is not already in the backlog is classified before being acted on.

### Class P1 — Production Incident

```
Definition:
  The live system is failing for real users right now.
  Examples: service down, data loss, authentication broken, payment failing

Action:
  Immediate entry to Expedite lane
  Authorization: Flow Master verbal approval (formal documentation within 2 hours)
  The highest-priority active In Progress task is paused (not abandoned)
  Maximum resolution time: 24 hours before escalation to incident commander

Effect on cycle:
  Cycle continues
  P1 resolution time is recorded as "unplanned interrupt time" in the cycle record
  If P1 resolution exceeds 2 days, cycle may be formally extended (Extension reason D)
```

### Class P2 — Urgent Business Request

```
Definition:
  No production failure, but there is a concrete, documented business impact
  if not addressed within 1–5 days.
  Examples: key client demo requires a fix, legal deadline, partner integration blocked

Action:
  Product Strategist evaluates with this test:
    "Is the cost of waiting until the next cycle greater than the cost of interrupting?"
  If yes → enters Expedite lane with joint approval (Flow Master + Product Strategist)
  If no → enters backlog, prioritized for next cycle

Effect on cycle:
  If it enters Expedite: same Expedite rules apply (max 1 active)
  Product Strategist documents the business justification in the interrupt log
```

### Class P3 — Disguised Normal Request

```
Definition:
  A request framed as urgent but without documented business impact.
  Usually characterized by:
  - Stakeholder urgency language without evidence
  - "It will just take 5 minutes"
  - Repeat requests for previously deprioritized items

Action:
  Flow Master and Product Strategist evaluate together
  Request is added to the backlog with normal priority
  Stakeholder receives a communication explaining the next cycle timeline

Effect on cycle:
  None — the cycle is not interrupted
  Flow Master documents the request in the interrupt log for pattern analysis
```

---

## Interrupt Decision Tree

When a new request arrives mid-cycle, run this classification before taking any action:

```
New request arrives
        |
        v
Is the live production system failing for real users right now?
(Service down, data loss, payment failing, authentication broken)
        |
   YES  |  NO
        |   |
        |   v
P1      |  Is there documented, concrete business impact
        |  if this is NOT addressed within 1–5 days?
        |  (Demo blocked, legal deadline, partner integration failing)
        |       |
        |  YES  |  NO
        |       |   |
        |       P2  P3
```

---

## Expedite Lane Rules

The Expedite lane is a special fast-track path through the Flow Board for items approved under the Interrupt Management Protocol.

```
Expedite Lane Rules:

1. Maximum ONE active Expedite task at any time — no exceptions
2. Joint approval required: Flow Master + Product Strategist
3. Business justification must be documented before work begins
4. Expedite tasks are visible to the whole team on the Flow Board
5. Normal WIP limits still apply to the rest of the board
6. An Expedite task that takes more than 3 days without resolution
   is reclassified and a cycle impact assessment is performed
7. The Delivery Team member assigned to Expedite pauses their current task
   (does not abandon it) — the paused task does not count against WIP
```

**Why the limit of 1:** A second Expedite task would make both items de-prioritized relative to each other, defeating the purpose of the lane. If two P1 incidents are active simultaneously, the team must triage which one gets Expedite status and handle the other through the normal board while escalating both.

---

## Stakeholder Negotiation Model

When a stakeholder requests something that cannot be handled as P1 or P2, GOAL provides a clear communication model:

**Step 1: Acknowledge the request formally**
*"We have received your request for [X] and are evaluating it."*

**Step 2: Classify using the interrupt model**
Determine P1, P2, or P3 in collaboration with the Product Strategist.

**Step 3: Communicate the outcome**

For P1/P2 approved:
> "This has been added to our active cycle via the Expedite lane. Expected resolution: [date]."

For P3 (next cycle):
> "This request has been added to the backlog. Based on current priorities, it is scheduled for the next Goal Cycle starting [date]. If the business impact justification changes, please provide documented evidence and we can re-evaluate the priority."

**Step 4: Document the request in the interrupt log**
All requests are logged regardless of outcome. This data is used in retrospectives to identify interrupt patterns.

---

## When to Break a Goal Cycle

A Goal Cycle can be formally closed early (before goal completion) in these specific cases:

### Case 1 — Full Emergency

The nature of the business has changed so fundamentally that the current goals are no longer relevant.

*Example: A major competitor ships a feature that makes the current goals irrelevant.*

**Process:**
1. Product Strategist proposes early closure
2. Flow Master confirms flow impact
3. Cycle closes with partial completion record
4. Emergency Smart Planning Session held within 24 hours

### Case 2 — Accumulated P1 Incidents

P1 incidents have consumed more than 50% of the cycle's team capacity and primary goals cannot be completed in the remaining time.

**Process:**
1. Flow Master presents data showing capacity impact
2. Product Strategist confirms goals cannot be reached
3. Cycle closes with partial completion + interrupt impact record
4. Root cause of P1 accumulation is the **primary topic of the retrospective**

### Case 3 — External Blocker That Resolves All Goals

A third-party dependency is officially cancelled, making all cycle goals moot.

**Process:**
1. Flow Master and Product Strategist agree on closure
2. All completed goals are documented
3. New Smart Planning Session called

---

## Interrupt Pattern Analysis

The interrupt log is analyzed at every retrospective:

- What was the total number of P1, P2, and P3 requests this cycle?
- Are P2 requests growing (signal that the team is under-resourced or the product has structural instability)?
- Are any stakeholders consistently generating P3 requests that they argue are P2?
- Is the Expedite lane being used for more than 1 active task at any time?

If the team is experiencing more than 2–3 P1/P2 interrupts per cycle, it is a systemic problem — not a coincidence. The retrospective should investigate root causes.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
