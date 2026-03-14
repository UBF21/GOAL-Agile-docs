---
id: technical-debt
title: Technical Debt Integration
sidebar_position: 9
description: How GOAL treats technical debt as first-class work — capacity allocation, visibility, and management rules.
---

# Technical Debt Integration

Technical debt — the accumulated cost of past shortcuts, outdated dependencies, and suboptimal decisions — is a real and measurable drag on delivery speed. GOAL treats technical debt reduction as a **first-class type of work**, not a secondary concern addressed only when it becomes a crisis.

---

## Technical Debt as First-Class Work

In most agile frameworks, technical debt is:
- Discussed in retrospectives but rarely addressed
- Deprioritized in favor of new features
- Addressed only when it becomes a production incident
- Invisible on the board (no dedicated tracking)

**GOAL's approach:**
- Technical debt has a dedicated lane on the Flow Board
- Every cycle allocates a fixed percentage of capacity to debt reduction
- Debt work is sized, tracked, and subject to the full DoD
- Debt patterns surfaced in retrospectives create structured improvement plans

---

## Technical Debt Capacity Allocation

```
Recommended allocation per cycle:

  Minimum: 10% of team capacity
  Standard: 15%
  Maximum: 20%

  Example for a 2-week cycle with a team of 5:
    Total capacity: ~50 developer-days
    Technical debt allocation at 15%: ~7.5 developer-days
    Approximately 2 Medium tasks dedicated to debt reduction per cycle
```

**This allocation is protected.** It cannot be cut for goal work during the cycle without formal agreement between the Flow Master and Product Strategist at Smart Planning.

### Allocation Rules

| Condition | Allocation |
|-----------|-----------|
| No active debt items | Minimum 10% (add new debt items to backlog) |
| Standard operating conditions | 15% |
| Debt is actively slowing delivery | Up to 20% |
| Exceeding 20% | Requires architectural decision, not a cycle-level choice |

---

## Technical Debt Visibility

All technical debt work is:

1. **Tracked in the dedicated Technical Debt lane** on the Flow Board
2. **Added to the backlog** with explicit descriptions of the problem and the proposed improvement
3. **Sized using S/M/L** like any other task
4. **Subject to the full Definition of Done** — debt tasks are not exempt from code review, tests, or documentation

### Creating Good Debt Items

A good technical debt backlog item has:
- A description of the **problem** (what is slow, fragile, or difficult about the current state)
- A description of the **improvement** (what the state will look like after the work)
- An estimate of the **delivery impact** (why this debt is worth addressing now)
- Acceptance criteria (how do we know the debt is resolved)

**Poor debt item:** "Refactor the authentication module"
**Good debt item:** "Replace the custom session token implementation with a JWT library. Current implementation has 3 known security edge cases and takes 2–3 days for new engineers to understand. Acceptance: JWT-based auth works identically in all environments, custom token code is removed, new engineer can understand the auth flow in under 30 minutes."

---

## When to Exceed the Debt Allocation

The team can propose exceeding the standard debt allocation when:

- A specific debt item is **directly blocking delivery** of a business goal
- The Flow Metrics show that a specific module is causing **disproportionate block rates**
- An **architectural change** is needed to support upcoming roadmap items

Decisions to exceed the allocation are made at Smart Planning with Product Strategist agreement. They are not made unilaterally by the Delivery Team during a cycle.

---

## Technical Debt and the Block Register

When a task is blocked because of technical debt (not because of the debt itself, but because an existing debt item makes progress impossible), the Block Register entry should:
- Classify the blocker as "Technical"
- Link to the debt item in the backlog
- Escalate the debt item's priority for the next cycle's planning

This creates a data trail from current-cycle blockers to the root cause in the technical debt backlog.

---

## Technical Debt and Retrospectives

At every Data-Driven Retrospective, the Block Register is analyzed. If technical blockers appear frequently:
- What specific debt items are causing the most blocks?
- Is the 15% allocation sufficient, or should it increase?
- Are specific areas of the codebase generating disproportionate debt-related blocks?

This analysis turns debt visibility into concrete allocation decisions rather than vague intentions.

---

## Technical Debt and the DoD

One of the Level 1 DoD criteria states:

> "No new technical debt introduced without a corresponding entry in the Technical Debt backlog."

This rule exists to keep debt visible. Teams can incur debt — sometimes intentionally, when a faster solution is needed for a time-sensitive goal — but every intentional debt incurrence must be logged. Invisible debt is the most dangerous kind.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
