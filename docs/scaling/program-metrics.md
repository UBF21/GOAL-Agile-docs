---
id: program-metrics
title: Program-Level Metrics
sidebar_position: 5
description: Metrics for multi-team GOAL programs — Cross-Team Block Rate, Dependency Rate, Program Goal completion, and resolution time.
---

# Program-Level Metrics

Program-level metrics complement individual team flow metrics by measuring coordination health across team boundaries.

---

## Core Program Metrics

### Cross-Team Block Rate

```
Definition:   Percentage of tasks across all teams that were blocked by a cross-team dependency.

Formula:      Cross-Team Block Rate = (Tasks blocked by cross-team dependency /
              Total tasks completed across all teams) × 100

Target:       < 15% for a healthy program
Warning zone: > 25% — program coordination is failing
```

High cross-team block rates indicate one of three structural problems:
1. Teams are too tightly coupled architecturally
2. The Dependency Register is not being maintained proactively
3. Providing teams are underpowered relative to the demand placed on them

---

### Average Dependency Resolution Time

```
Definition:   Average number of working days from when a dependency is identified
              as At Risk or Blocked to when it is Resolved.

Formula:      Sum of (Resolution date - Blocked date) for all blocked dependencies /
              Number of blocked dependencies

Target:       < 2 working days
Warning zone: > 4 working days
```

---

### Dependency Rate

```
Definition:   Percentage of work effort that involves a cross-team dependency.

Formula:      Dependency Rate = (Dependencies opened in cycle /
              Total tasks completed across all teams) × 100

Target:       < 10%
Warning zone: > 20% — architectural coupling is too high
```

A Dependency Rate above 20% is a signal for an architectural review. The teams are not sufficiently autonomous. Consider restructuring ownership of services or APIs to reduce inter-team handoffs.

---

### Program Goal Completion Rate

```
Definition:   Percentage of Program Goals that were fully completed
              in the program cycle they were planned for.

Formula:      Program Goal Completion Rate = (Completed Program Goals /
              Total Program Goals planned for this cycle) × 100

Target:       > 80%
Warning zone: < 60% — program planning or dependency management needs review
```

---

### Program Cycle Accuracy Index

```
Definition:   Tracks estimated vs actual duration for program-level goals
              (goals that span multiple team cycles).

Formula:      Same as team-level Cycle Accuracy Index:
              Actual program cycle duration / Estimated program cycle duration

Interpretation:
  = 1.0:   Perfect accuracy
  < 1.0:   Programs completing faster than estimated
  > 1.0:   Programs taking longer than estimated — investigate reason
```

---

## Metrics Dashboard for Program Level

A program-level metrics dashboard should display:

| Metric | Current Value | Previous Cycle | Trend |
|--------|--------------|----------------|-------|
| Cross-Team Block Rate | X% | Y% | ↑ ↓ → |
| Avg Dependency Resolution Time | X days | Y days | ↑ ↓ → |
| Dependency Rate | X% | Y% | ↑ ↓ → |
| Program Goal Completion Rate | X% | Y% | ↑ ↓ → |
| Active dependencies (start of cycle) | N | — | — |
| Blocked dependencies (current) | N | — | — |

---

## Using Program Metrics in the Program Retrospective

Program metrics are the primary input for the Program Retrospective. The same principle applies as at the team level:

> Every program retrospective discussion topic must be anchored to at least one program metric.

Common metric-driven discussions:

**"Cross-Team Block Rate is 28% this cycle (up from 12% last cycle)."**
→ Which team pairs are generating the most blocks? What types of dependencies are getting blocked?

**"Average dependency resolution time is 5 days — up from 2 days."**
→ Which dependencies took the longest? Were they all from the same providing team?

**"Dependency Rate increased to 22%."**
→ Is architectural coupling increasing? Should we schedule an architectural review?

---

## Distinguishing Program Metrics from Team Metrics

| Metric type | Owner | When reviewed | Input for |
|-------------|-------|---------------|-----------|
| Team flow metrics | Team Flow Master | Daily Sync + Retrospective | Team-level improvements |
| Program metrics | Program Flow Master | Cross-Team Review + Program Retrospective | Program-level coordination improvements |

Program metrics do not replace team metrics. They provide a layer of analysis that individual team metrics cannot reveal — the coordination patterns between teams.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
