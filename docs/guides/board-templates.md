---
id: board-templates
title: Board Templates
sidebar_position: 2
description: Complete GOAL board templates — Flow Board, Program Board, Metrics Dashboard, Block Register, and Backlog templates with ASCII layouts.
---

# GOAL Board Templates Guide

**Version:** 1.0 | **Framework:** GOAL v0.2

---

## Why Board Design Matters in GOAL

The Flow Board is not a project management convenience. It is the central nervous system of the GOAL framework. Every protocol, every metric, every ceremony in GOAL depends on the board being accurate, visible, and correctly structured.

**What a well-designed board does:**
- Makes invisible work visible (blocked tasks, aging tasks, WIP violations)
- Creates shared accountability without status meetings
- Provides the raw data required for flow metrics
- Enforces WIP limits as a physical constraint
- Distinguishes between types of work (standard, expedite, technical debt)

**What a poorly designed board does:**
- Hides blockers behind "In Progress" status
- Encourages multitasking by not enforcing WIP
- Conflates different types of work, making metrics meaningless
- Forces teams to rely on subjective status updates instead of visual signals

---

## Template 1: Single-Team Flow Board

### Full Column Layout

```
╔══════════════════════════════════════════════════════════════════════════════╗
║         GOAL FLOW BOARD — [TEAM NAME] — CYCLE #[N]                          ║
║         Primary Goal: [Goal Description]   WIP Limit: [N]                   ║
╠══════════╦══════════╦══════════════╦═══════════╦═══════════╦════════════╣
║          ║          ║              ║   CODE    ║           ║            ║
║ BACKLOG  ║  READY   ║ IN PROGRESS  ║  REVIEW   ║ VALIDATION║    DONE    ║
║          ║          ║  WIP: [N]    ║  WIP: [N] ║  WIP: [N] ║            ║
╠══════════╬══════════╬══════════════╬═══════════╬═══════════╬════════════╣
║          ║          ║              ║           ║           ║            ║
║ (items   ║ (items   ║ (active      ║ (PRs      ║ (staging  ║ (done      ║
║  not yet ║  ready   ║  tasks)      ║  in       ║  testing) ║  & DoD     ║
║  ready)  ║  to pull)║              ║  review)  ║           ║  verified) ║
║          ║          ║              ║           ║           ║            ║
╠══════════╩══════════╩══════════════╩═══════════╩═══════════╩════════════╣
║  SPECIAL LANES                                                           ║
╠══════════════════════════╦═══════════════════════╦════════════════════  ║
║  BLOCKED                 ║  EXPEDITE (MAX: 1)    ║  TECH DEBT LANE     ║
║  (tasks awaiting         ║  (P1/P2 only,         ║  (debt reduction    ║
║   external action)       ║   FM+PS approval)     ║   10-20% of cap)   ║
╚══════════════════════════╩═══════════════════════╩════════════════════╝
```

### Column Definitions and Entry/Exit Criteria

**BACKLOG**
- Definition: Items that exist but are not ready to execute
- Entry: Any request can be added; no criteria required
- Exit: Has outcome description + acceptance criteria + size (S/M/L) + no blocking dependencies
- WIP limit: None

**READY**
- Definition: Items fully ready to execute; can be picked up immediately
- Entry: All Backlog exit criteria met, confirmed in Backlog Grooming
- Exit: Team member picks up and moves to In Progress (WIP limit must allow it)
- WIP limit: None (health standard: at least 1 cycle worth of ready items)

**IN PROGRESS**
- Definition: Actively being worked on by a single team member
- Entry: Item is in Ready; WIP limit not exceeded
- Exit: Implementation complete; PR opened; moved to Code Review
- WIP limit: Enforced (part of global WIP count)

**CODE REVIEW**
- Definition: Implementation complete; awaiting or undergoing peer review
- Entry: PR/diff is open and ready for review
- Exit: At least one peer reviewed and approved; no blocking comments
- WIP limit: Enforced (part of global WIP count)

**VALIDATION**
- Definition: Code review complete; being tested in staging/QA environment
- Entry: Code review approved; deployed to staging
- Exit: All Level 1 DoD criteria met; acceptance criteria validated
- WIP limit: Enforced (part of global WIP count)

**DONE**
- Definition: Task fully meets all Definition of Done criteria
- Entry: All DoD items checked; all acceptance criteria passed
- Exit: Terminal state (archived at end of cycle)
- WIP limit: None

**BLOCKED**
- Definition: Cannot progress without external action
- Entry: Owner identifies external dependency; Block Register entry completed
- Exit: Blocker resolved; card returns to previous column
- WIP limit: None; but every blocked card has an escalation timeline

**EXPEDITE**
- Definition: Urgent task approved through Interrupt Management Protocol (P1 or P2)
- Entry: Joint FM + PS approval; business justification documented
- Exit: Completes through full column flow; DoD still applies
- WIP limit: Maximum 1 active at any time — no exceptions

---

## Template 2: Standard Task Card

```
┌────────────────────────────────────────────────────┐
│ [TASK-ID]    ●  [S / M / L]                         │
│                                                      │
│  TASK NAME                                           │
│  ──────────────────────────────────────────────     │
│  Goal: [Goal name or ID]                             │
│                                                      │
│  Owner: [Name]                                       │
│  In column since: [Date]                             │
│                                                      │
│  Acceptance criteria:                                │
│  ☐ [Criterion 1]                                    │
│  ☐ [Criterion 2]                                    │
│                                                      │
│  [AGING INDICATOR: blank / YELLOW / RED]             │
└────────────────────────────────────────────────────┘
```

**Required fields:**

| Field | Required | Notes |
|-------|----------|-------|
| Task ID | Yes | Unique identifier (e.g., GOAL-042) |
| Size | Yes | S, M, or L. L items must be split before In Progress |
| Task name | Yes | Outcome-oriented: "Implement X so that Y" |
| Goal link | Yes | Which primary or secondary goal this serves |
| Owner | Yes | Single person currently responsible |
| In column since | Yes | Date card entered current column |
| Acceptance criteria | Yes | At least one criterion in checkbox format |
| Aging indicator | Auto | Assigned after aging threshold is exceeded |

---

## Template 3: Expedite Card

```
┌────────────────────────────────────────────────────┐
│ ⚡ EXPEDITE  [TASK-ID]    ●  [S / M]               │
│  ════════════════════════════════════════════════   │
│  TASK NAME                                           │
│  ──────────────────────────────────────────────     │
│  Priority: P1 / P2                                   │
│  Approved by: [Flow Master] + [Product Strategist]  │
│  Approved date: [Date]                               │
│  Business justification: [1-sentence reason]        │
│                                                      │
│  Owner: [Name]                                       │
│  Paused task: [Task ID of paused task]               │
│  Target resolution: [Date]                           │
└────────────────────────────────────────────────────┘
```

*Expedite cards use a visually distinct color (red border). Large (L) items are NOT permitted in the Expedite lane.*

---

## Template 4: Technical Debt Card

```
┌────────────────────────────────────────────────────┐
│ 🔧 TECH DEBT  [TASK-ID]    ●  [S / M / L]          │
│  ════════════════════════════════════════════════   │
│  TASK NAME                                           │
│  ──────────────────────────────────────────────     │
│  Debt type: Dependency / Architecture /              │
│             Coverage / Documentation / Other         │
│                                                      │
│  Problem: [What is the current technical debt]       │
│  Improvement: [What this task will fix]              │
│  Impact if unaddressed: [Risk level]                 │
│                                                      │
│  Owner: [Name]                                       │
│  In column since: [Date]                             │
└────────────────────────────────────────────────────┘
```

---

## Template 5: Aging Indicators

```
Aging thresholds by size:

  SMALL (S):
    > 1 day in same column    → YELLOW indicator
    > 2 days in same column   → RED indicator

  MEDIUM (M):
    > 2 days in same column   → YELLOW indicator
    > 4 days in same column   → RED indicator

  LARGE (L):
    > 3 days in same column   → YELLOW indicator
    > 6 days in same column   → RED indicator

  ANY SIZE:
    > 2x expected time        → RED indicator immediately
    (raise in next Daily Flow Sync)

Physical board: Add colored dot stickers to cards that exceed thresholds.
Digital board: Use aging labels, card color rules, or automation triggers.
```

---

## Template 6: Block Register

```
BLOCK REGISTER

Cycle: ______  Team: ______________  Date range: ____________

┌────────┬──────────────────┬───────────┬──────────┬──────────────────────┬────────────┬──────────────┐
│ ID     │ Task Name        │ Type      │ Date     │ Description          │ Owner      │ Status       │
│        │                  │           │ Blocked  │                      │            │              │
├────────┼──────────────────┼───────────┼──────────┼──────────────────────┼────────────┼──────────────┤
│ BLK-01 │ [Task name]      │ Technical │ [Date]   │ [What's blocked]     │ [Name]     │ Resolved     │
│        │                  │           │          │                      │            │ [Date]       │
├────────┼──────────────────┼───────────┼──────────┼──────────────────────┼────────────┼──────────────┤
│ BLK-02 │ [Task name]      │ External  │ [Date]   │ [What's blocked]     │ [Name]     │ Active       │
│        │                  │           │          │                      │            │ 2d open      │
├────────┼──────────────────┼───────────┼──────────┼──────────────────────┼────────────┼──────────────┤
│ ...    │                  │           │          │                      │            │              │
└────────┴──────────────────┴───────────┴──────────┴──────────────────────┴────────────┴──────────────┘

BLOCKER TYPE SUMMARY (for retrospective):
  Technical:         ___
  External:          ___
  Business Decision: ___
  Dependency:        ___
  Infrastructure:    ___
  TOTAL:             ___

  Block Rate = ______ blocked / ______ total completed = ______%
  Avg resolution time: ______ hours
```

---

## Template 7: Flow Metrics Dashboard

```
FLOW METRICS DASHBOARD — CYCLE #[N]
Team: ____________  Cycle dates: ____________  WIP Limit: ___

CURRENT CYCLE
─────────────────────────────────────────────────────────
  WIP Status:          [Current] / [Limit]  Focus Ratio: ___
  Tasks in Done:       ___
  Tasks in Progress:   ___
  Tasks Blocked:       ___

CYCLE METRICS (completed tasks)
─────────────────────────────────────────────────────────
  Avg Flow Time:       ___ days   (prev: ___ days)   ↑ ↓ →
  Avg Cycle Time:      ___ days   (prev: ___ days)   ↑ ↓ →
  Avg Wait Time:       ___ days   (prev: ___ days)   ↑ ↓ →
  Flow Efficiency:     ____%      (prev: ___%)       ↑ ↓ →
  Block Rate:          ____%      (prev: ___%)       ↑ ↓ →
  Delivery Rate:       ___ tasks/day  (prev: ___)    ↑ ↓ →

CYCLE ACCURACY INDEX
─────────────────────────────────────────────────────────
  Estimated:   ___ days
  Actual:      ___ days
  CAI:         ___  (target: 1.0)

FLOW EFFICIENCY BENCHMARK
─────────────────────────────────────────────────────────
  < 15%  = Critical (investigate wait time sources)
  15-30% = Baseline (improvement opportunity)
  30-50% = Healthy
  50%+   = High-performing
  Current: ___% → [CRITICAL / BASELINE / HEALTHY / HIGH-PERFORMING]
```

---

## Template 8: Goal Cycle Plan

```
GOAL CYCLE PLAN
─────────────────────────────────────────────────────────
Team:           ______________________
Cycle number:   ___
Start date:     ___________
Estimated end:  ___________
WIP limit:      ___  (Team Size: ___ × Focus Factor: ___)

PRIMARY GOALS (must-achieve for cycle success)
─────────────────────────────────────────────────────────
Goal 1: _________________________________________________
  Value layers: ☐ Business  ☐ User  ☐ Technical
  Value description: _____________________________________
  Done looks like: _______________________________________
  Duration estimate: 1 week / 2 weeks / 3 weeks

Goal 2: _________________________________________________
  Value layers: ☐ Business  ☐ User  ☐ Technical
  Value description: _____________________________________
  Done looks like: _______________________________________
  Duration estimate: 1 week / 2 weeks / 3 weeks

Goal 3 (if applicable): _________________________________
  Value layers: ☐ Business  ☐ User  ☐ Technical
  Done looks like: _______________________________________

SECONDARY GOALS (best-effort if capacity allows)
─────────────────────────────────────────────────────────
  1. _____________________________________________________
  2. _____________________________________________________

TECHNICAL DEBT ALLOCATION
─────────────────────────────────────────────────────────
  Allocation: ___% of cycle capacity
  Planned debt items:
  1. _________________ [S/M/L]
  2. _________________ [S/M/L]

KNOWN RISKS AND MITIGATIONS
─────────────────────────────────────────────────────────
  Risk 1: ________________  Mitigation: _________________
  Risk 2: ________________  Mitigation: _________________

STATUS: ACTIVE  (Goals locked — no changes without Emergency Protocol)
─────────────────────────────────────────────────────────
Approved by: [Flow Master] ________  [Product Strategist] ________
```

---

## Template 9: Multi-Team Program Board

```
GOAL PROGRAM BOARD — CYCLE #[N]
Program Goal(s): ___________________________

           │ Week 1    │ Week 2    │ Week 3    │
───────────┼───────────┼───────────┼───────────┤
TEAM ALPHA │ Goal A1   │           │           │
           │ ↓ DEP-01  │           │           │
           │ (3 out)   │           │           │
───────────┼───────────┼───────────┼───────────┤
TEAM BETA  │ ← DEP-01  │ Goal B1   │           │
           │ (2 in,    │           │           │
           │  1 out)   │           │           │
───────────┼───────────┼───────────┼───────────┤
TEAM GAMMA │ Goal G1   │ ↓ DEP-02  │ Goal G2   │
           │           │           │           │
───────────┴───────────┴───────────┴───────────┘

DEPENDENCY KEY:
  → / ← = direction of dependency
  Gray  = identified, not yet active
  Blue  = active, on track
  Amber = at risk
  Red   = blocked

CURRENT DEPENDENCIES:
  DEP-01: Alpha → Beta (API v2 endpoint docs, Day 3)  Status: ACTIVE
  DEP-02: Gamma → Beta (payment staging env, Day 5)   Status: ACTIVE
```

---

*GOAL Board Templates v1.0 | Framework: GOAL v0.2 | Author: Felipe Montenegro*
