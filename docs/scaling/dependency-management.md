---
id: dependency-management
title: Dependency Management
sidebar_position: 4
description: Cross-team dependency identification, the Dependency Register, status tracking, and escalation in GOAL programs.
---

# Dependency Management

Cross-team dependencies are the primary coordination challenge in multi-team GOAL. This section covers how to identify, track, and resolve them.

---

## The Dependency Register

The Dependency Register is a structured log of all active and pending cross-team dependencies. It is the single source of truth for inter-team work coordination.

### Required Fields Per Entry

```
Dependency Register Entry:

  ID:                  [auto-generated unique ID, e.g., DEP-042]
  Date identified:     [date]
  Requesting team:     [team that needs the deliverable]
  Providing team:      [team that must produce the deliverable]
  Description:         [what needs to be delivered]
  Linked tasks:        [task IDs in both teams' boards]
  Expected delivery:   [date the providing team commits to deliver]
  Impact if late:      [consequence for the requesting team — which goal is affected?]
  Escalation owner:    [who is responsible if this becomes a blocker]
  Status:              [Identified / Active / At Risk / Blocked / Resolved]
  Resolution date:     [actual date resolved, if applicable]
  Time blocked:        [total days this dependency was in Blocked status]
```

### Status Definitions

| Status | Meaning |
|--------|---------|
| **Identified** | Dependency logged, providing team acknowledged it |
| **Active** | Providing team is working on it, expected delivery date confirmed |
| **At Risk** | Providing team flagged that the expected delivery date is in doubt |
| **Blocked** | Dependency cannot be fulfilled — escalation required immediately |
| **Resolved** | Delivering team delivered; requesting team confirmed receipt |

---

## Dependency Identification

Dependencies are identified at two points:

**At Program Sync (cycle start):** Each Product Strategist declares which of their team's goals depends on another team's output. The Program Flow Master logs each dependency in the Register in real time.

**Mid-cycle:** Any team that discovers a new dependency mid-cycle notifies the Program Flow Master immediately. Dependencies are not held until the next sync.

### What Counts as a Dependency

A cross-team dependency exists when:
- Team A cannot deliver a primary goal without output from Team B
- Team A's task requires an API, service, or deliverable that Team B owns
- Team A needs a decision or sign-off from Team B before proceeding

Informal coordination ("we mentioned it in Slack") does not create a tracked dependency. A Dependency Register entry is required.

---

## Dependency Escalation

```
Day 0:     Dependency identified and logged in Register
           Providing team acknowledges and confirms expected delivery date

During cycle: Program Flow Master monitors status twice per week
              in Cross-Team Dependency Review

At Risk:   Providing team flags risk before expected delivery date
           Program Flow Master coordinates mitigation with both teams

Day 1 Blocked: Dependency cannot be fulfilled
               Program Flow Master takes ownership of escalation
               Product Strategists from both teams are notified

Day 2 Blocked: Program Strategist is involved
               If blocking a primary goal: cycle extension evaluation begins

Day 3+ Blocked: Goal is marked "at risk" in Goal Cycle Plan
                Program Strategist may override priority to resolve the block
                Cross-team architecture review may be triggered
```

---

## The Program Board

The Program Board is a visual representation of all teams' current Goal Cycles on a single view, with cross-team dependencies explicitly drawn as connections between team cards.

### Structure

```
Program Board layout:

Rows:    One row per team
Columns: Cycle weeks (Week 1, Week 2, Week 3...)

Each cell contains:
  - Team name
  - Primary goals for this cycle (abbreviated)
  - Count of outgoing dependencies (this team is a dependency for another team)
  - Count of incoming dependencies (this team is waiting on another team)
  - Current cycle health status: Green / Yellow / Red

Dependency connectors:
  Drawn as arrows between team rows
  Arrow color:
    Gray  = dependency identified, not yet active
    Blue  = dependency active and on track
    Amber = dependency at risk (resolution expected date is today or tomorrow)
    Red   = dependency blocked (past expected resolution date)
```

### Maintenance

The Program Flow Master maintains the Program Board and updates it before each Program Sync. Teams are responsible for notifying the Program Flow Master when a dependency status changes — they do not wait for the next sync.

---

## Cross-Team Cycle Plan

The Cross-Team Cycle Plan is a program-level planning document created at the Program Sync. It maps which teams depend on which, in what sequence, and what the critical path across teams looks like.

### Example Structure

```
Cross-Team Cycle Plan (example: Cycle 7)

Program Goals this cycle:
  PG-1: Complete user authentication overhaul (affects: Team Alpha, Team Beta)
  PG-2: Launch payment service v2 (affects: Team Beta, Team Gamma)

Team goals summary:
  Team Alpha:  Auth service refactor (provides: new auth API v2)
  Team Beta:   Frontend integration with auth v2 + payment service hooks
  Team Gamma:  Payment service v2 backend

Critical path:
  [Team Alpha: auth API v2] → [Team Beta: frontend integration]
                                     ↑
  [Team Gamma: payment v2] → [Team Beta: payment hooks]

Key dependencies:
  DEP-042: Team Alpha delivers auth API v2 endpoint docs by Day 3
  DEP-043: Team Gamma delivers payment service staging environment by Day 5

Risk flags:
  DEP-042: Team Alpha is running at 85% capacity this cycle — at risk
  Mitigation: Team Alpha reduces secondary goal scope

Contingency:
  If DEP-042 slips past Day 5: Team Beta switches to independent tasks
  and the cycle is formally extended for integration tasks only.
```

---

## Dependency Rate Metric

```
Dependency Rate = (Dependencies opened in cycle / Total tasks completed across all teams) × 100

Target:       < 10% for a healthy program
Warning zone: > 20% — program is too tightly coupled; architectural review recommended
```

A high Dependency Rate is a signal that teams are not sufficiently autonomous. The architectural response is to reduce coupling — create clearer API boundaries, extract shared services, or restructure team ownership.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
