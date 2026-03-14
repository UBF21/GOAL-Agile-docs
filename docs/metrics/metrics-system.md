---
id: metrics-system
title: Metrics System
sidebar_position: 1
description: The complete GOAL metrics system — all seven flow metrics with definitions, formulas, benchmarks, and interpretation guides.
---

# Metrics System

GOAL replaces story points and velocity with flow-based metrics that reflect how work actually moves through the system.

---

## Why Story Points Are Removed

Story points attempt to measure effort abstractly. They suffer from several structural problems:

- Points inflate over time (teams renegotiate what a "3" means without realizing it)
- Points are not comparable between teams
- Planning poker creates the illusion of precision from inherently uncertain estimates
- Velocity (points per sprint) becomes a target, which corrupts it as a measurement
- Teams spend hours estimating instead of delivering

GOAL replaces estimation-based metrics with **observation-based metrics**. Instead of asking "how long will this take?" (estimate), GOAL asks "how long does this type of work typically take?" (historical data).

---

## Core Metrics

### Flow Time

```
Definition:   Total elapsed time from when a task enters the Ready column
              until it enters the Done column.
              Includes all waiting time, blocked time, and active work time.

Measures:     The complete "customer experience" of a task
              (how long from ready-to-start until delivered)

Formula:      Flow Time = Date entered Done − Date entered Ready

Unit:         Days (or hours for very fast teams)

Goal:         Track trend downward over cycles. Lower is better.
```

---

### Cycle Time

```
Definition:   Elapsed time from when work actively begins on a task
              (enters In Progress) until it enters the Done column.

Measures:     The team's execution speed once work starts

Formula:      Cycle Time = Date entered Done − Date entered In Progress

Unit:         Days

Goal:         Track trend. Consistent is as important as fast.
              A consistent cycle time enables reliable planning.
```

---

### Wait Time

```
Definition:   Flow Time minus Cycle Time.
              The time a task spent in queues without active work.

Measures:     Pure waste in the system — time the task existed
              but nobody was working on it.

Formula:      Wait Time = Flow Time − Cycle Time

Unit:         Days

Goal:         Minimize. Wait time is where improvement potential lives.
```

---

### Flow Efficiency

```
Definition:   The percentage of a task's total flow time that was spent
              in active work.

Formula:      Flow Efficiency = (Cycle Time ÷ Flow Time) × 100

Unit:         Percentage

Example:
  Task entered Ready:      Monday 9am
  Task entered In Progress: Wednesday 9am   (2 days waiting)
  Task entered Done:        Friday 5pm      (2 days active work)

  Flow Time:        4 days (Monday to Friday)
  Cycle Time:       2 days (Wednesday to Friday)
  Flow Efficiency:  2 ÷ 4 × 100 = 50%
```

### Flow Efficiency Interpretation Guide

| Flow Efficiency | Interpretation | Action |
|-----------------|----------------|--------|
| **< 15%** | Critical — most time is waiting. Primary suspects: long code review queues, slow QA environments, unclear tasks requiring frequent clarification. | Investigate the biggest wait time contributors. |
| **15–30%** | Typical for teams new to flow management. Significant improvement opportunity. | GOAL baseline target for first 3 cycles. |
| **30–50%** | Healthy flow for most software teams. | Target for teams in cycles 4–8. |
| **50%+** | High-performing flow. | Long-term optimization target. |

**Important context:** Low flow efficiency is NOT automatically a performance problem. Some wait time is structural and legitimate:
- Code review requires another person's attention
- QA environment deployment takes time
- Client validation requires a human decision

The goal is to reduce **avoidable** wait time, not eliminate all wait time. Focus retrospective discussions on what type of wait time dominates.

---

### Block Rate

```
Definition:   Percentage of completed tasks that encountered a blocker
              during their flow.

Formula:      Block Rate = (Blocked tasks in cycle ÷ Total tasks completed in cycle) × 100

Unit:         Percentage

Target:       < 20% for established teams
Action zone:  > 30% indicates a systemic process problem worth deep investigation
```

**Block Rate interpretation:**

- High block rate + mostly Technical blockers → codebase or architecture problem
- High block rate + mostly External blockers → dependency management problem
- High block rate + mostly Business Decision blockers → Product Strategist availability problem
- High block rate + mostly Infrastructure blockers → DevOps or environment problem

---

### Delivery Rate

```
Definition:   Number of tasks moved to Done per working day during the cycle.

Formula:      Delivery Rate = Tasks completed ÷ Working days in cycle

Unit:         Tasks per day

Goal:         Track trend stability, not absolute number.
              A consistent delivery rate (even if modest) is more valuable
              than a high but volatile one.
```

**Note:** Delivery Rate is measured by completion (Done column), not by starts (In Progress column).

---

### Focus Ratio

```
Definition:   How close to WIP capacity the team is operating.

Formula:      Focus Ratio = Active tasks (In Progress + Code Review + Validation) ÷ WIP Limit

Interpretation:
  < 0.7:   Team has idle capacity — check if backlog is ready, or if blockers are hiding work
  0.7–1.0: Healthy operating range
  > 1.0:   WIP limit is being exceeded — Flow Master intervention required
```

---

### Cycle Accuracy Index

```
Definition:   Tracks estimated vs actual cycle duration over time.

Formula:      Cycle Accuracy Index = Actual Days ÷ Estimated Days

Interpretation:
  = 1.0:   Perfect accuracy (uncommon)
  < 1.0:   Cycles finishing faster than estimated (good)
  > 1.0:   Cycles taking longer than estimated (investigate reason)

Use:         Moving average over last 5 cycles to see trend.
             After 5+ cycles, teams should predict cycle duration within 20% accuracy.
```

---

## Metrics Quick Reference

| Metric | Formula | Target |
|--------|---------|--------|
| Flow Time | Date Done − Date Ready | Trend downward |
| Cycle Time | Date Done − Date In Progress | Consistent, trending down |
| Wait Time | Flow Time − Cycle Time | Minimize |
| Flow Efficiency | (Cycle Time ÷ Flow Time) × 100 | 30–50% healthy; 50%+ excellent |
| Block Rate | (Blocked ÷ Total completed) × 100 | &lt;20%; &gt;30% = systemic problem |
| Delivery Rate | Tasks Done ÷ Working days | Stable trend |
| Focus Ratio | Active tasks ÷ WIP Limit | 0.7–1.0 |
| Cycle Accuracy Index | Actual days ÷ Estimated days | 1.0 = perfect |

---

## How Metrics Are Used

**At the Daily Flow Sync:**
- Current WIP count vs WIP limit (Focus Ratio)
- Tasks approaching aging thresholds
- Current blocked count

**At Goal Review:**
- Cycle Time for completed goals
- Delivery Rate for the cycle
- Cycle Accuracy Index update

**At the Data-Driven Retrospective:**
- All metrics compared to previous cycle
- Flow Efficiency trend
- Block Rate by blocker type
- WIP Compliance analysis

---

## Metrics and the Delivery Rate Trap

One common mistake is using Delivery Rate as a performance target. A team that rushes tasks through Done without meeting the DoD to hit a higher delivery rate is gaming the metric. The DoD is what makes delivery rate meaningful.

**Principle:** Measure completion quality as well as completion rate. A delivery rate of 3 tasks/day with 100% DoD compliance is better than 5 tasks/day with 30% DoD compliance.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
