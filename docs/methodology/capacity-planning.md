---
id: capacity-planning
title: Capacity Planning
sidebar_position: 14
description: A complete guide to matching team capacity to goal commitments in GOAL — calculation model, goal sizing, reduced capacity cycles, onboarding and departure impacts, and quarterly forecasting.
---

## Table of Contents

1. [Why Capacity Planning Matters in GOAL](#1-why-capacity-planning-matters-in-goal)
2. [Capacity Vocabulary](#2-capacity-vocabulary)
3. [Capacity Calculation Model](#3-capacity-calculation-model)
4. [Capacity Table and Calculator](#4-capacity-table-and-calculator)
5. [Goal Sizing Against Capacity](#5-goal-sizing-against-capacity)
6. [Reduced Capacity Cycles](#6-reduced-capacity-cycles)
7. [New Team Member Onboarding Impact](#7-new-team-member-onboarding-impact)
8. [Team Member Departure Impact](#8-team-member-departure-impact)
9. [Part-Time Team Members](#9-part-time-team-members)
10. [Contractor and External Contributor Capacity](#10-contractor-and-external-contributor-capacity)
11. [Quarterly Capacity Forecasting](#11-quarterly-capacity-forecasting)
12. [Capacity Anti-Patterns](#12-capacity-anti-patterns)

---

## 1. Why Capacity Planning Matters in GOAL

### 1.1 The problem with the WIP formula in isolation

The GOAL methodology defines a WIP limit formula: `Team Size × Focus Factor`. This formula correctly controls how many tasks are active at any moment. But it assumes the team is fully available. In practice, teams are almost never fully available.

Consider a team of five developers. The WIP formula suggests a limit of 3–4 active tasks. But what if:
- One developer is on vacation
- One is in three days of job interviews for an open role
- One is onboarding a new colleague
- One is dealing with a P1 production incident from last cycle

The WIP formula still says 3–4 tasks. But the team's actual productive capacity might be 40–50% of normal. Committing to a full set of primary goals under these conditions is setting up the cycle to fail.

Capacity planning is the discipline of understanding what you actually have before committing to what you want to deliver.

### 1.2 The cost of over-committing goals

When a GOAL cycle is committed with goals that exceed real capacity, several predictable failures occur:

- **The Cycle Accuracy Index degrades** — the cycle runs long, which is documented but never structurally addressed if the root cause (capacity over-commitment) is not named
- **Quality drops** — developers under time pressure cut corners on tests, documentation, and review thoroughness. The DoD is pressured
- **Rework increases** — rushed work generates more bugs, which consume capacity in the next cycle
- **Team morale erodes** — teams that consistently miss their committed goals develop learned helplessness about planning

None of these failures are visible unless you measure them. GOAL's metrics system (flow efficiency, rework rate, change failure rate) will reveal them — but only if capacity planning is done honestly and the comparison between planned and actual capacity is tracked.

### 1.3 Capacity planning as a discipline, not a calculation

Capacity planning in GOAL is not purely mathematical. It requires:
- Honesty about what the team's actual availability is (not what you wish it were)
- Discipline in accounting for overhead that is real but easy to ignore
- Willingness to commit to fewer goals when capacity is constrained
- Transparency with stakeholders about why goals were sized down

The fundamental principle is:

> **It is better to commit to two goals and deliver both than to commit to four goals and deliver two.**

The first outcome builds trust and demonstrates reliability. The second outcome builds a reputation for over-promising, which degrades stakeholder confidence over time and creates pressure that compounds quality problems.

---

## 2. Capacity Vocabulary

Precise language prevents confusion in planning conversations. GOAL uses three distinct capacity terms that are often conflated.

### 2.1 Available Capacity

```
Definition:   The raw number of working person-hours or person-days the team has
              during the cycle, before any deductions.

Calculation:  Team Size × Working Days in Cycle × Hours Per Working Day

This is the ceiling — the maximum that could theoretically exist.
It is almost never the right number to plan against.

Example:
  5 developers × 10 working days × 8 hours = 400 person-hours (Available Capacity)
```

### 2.2 Effective Capacity

```
Definition:   The productive, focused work hours available after accounting for all
              deductions: planned absences, ceremonies, overhead, and the focus factor.

This is the number you actually plan against.

Effective Capacity = Available Capacity
                     − Absence deductions (vacation, sick day estimate, holidays)
                     − Ceremony time (planning, daily syncs, reviews, retrospectives)
                     − Operational overhead (1:1s, hiring interviews, cross-team meetings)
                     − Applied focus factor (human cognitive limits)

Example:
  400 person-hours Available
  − 40 hours (one developer: 1-week vacation = 5 days × 8 hours)
  − 20 hours (team ceremonies: planning + 10 daily syncs + review + retro)
  − 15 hours (1:1s + cross-team meetings)
  − Focus factor applied to remaining = 325 × 0.7 = 227.5 hours
  ≈ 228 person-hours Effective Capacity
```

### 2.3 Planned Capacity

```
Definition:   The portion of Effective Capacity formally allocated to specific work categories
              in the Goal Cycle Plan.

In GOAL, Planned Capacity is divided between:
  - Primary goals (the core committed work)
  - Secondary goals (valuable if capacity allows)
  - Technical debt allocation (10–20% of Effective Capacity, reserved before goals are sized)
  - Buffer (the recommended 20% margin — see Section 5.5)

Planned Capacity ≤ Effective Capacity (always)
The difference between Effective Capacity and Planned Capacity is the safety margin.
Teams that set Planned Capacity = Effective Capacity have eliminated their buffer.
```

**Why these three terms matter:**

Planning conversations often mix these terms. "We have 5 developers for 2 weeks" (Available Capacity) is not the same as "we can deliver 5 goals" (a leap that skips Effective Capacity entirely). Making the distinctions explicit forces honest conversations about what is truly available.

---

## 3. Capacity Calculation Model

### 3.1 The Base Calculation

```
Step 1: Count available team-days

  Formula:  Sum of (Working Days Available) for each team member

  Example for a 2-week cycle (10 working days):
    Developer A:  10 days (fully available)
    Developer B:  8 days (2 days PTO)
    Developer C:  10 days (fully available)
    Developer D:  7 days (3 days for onboarding new hire)
    Developer E:  10 days (fully available)
    ─────────────────────────────────────────────
    Total raw team-days:  45 days

Step 2: Subtract ceremony time (convert to days)

  Standard ceremony overhead for a 2-week GOAL cycle:
    Smart Planning:              0.5 days (per person)
    Daily Flow Sync (10 days):   10 × 12min = 2 hours = 0.25 days (per person)
    Backlog Grooming:            0.5 days (for attending members; often only 2–3 attend)
    Goal Review:                 0.5 days (per person)
    Data-Driven Retrospective:   0.5 days (per person)
    ────────────────────────────────────────────────────────────
    Total ceremony overhead:     ~1.75 days per person (for attendees of all events)

  Ceremony deduction for 5-person team:
    5 × 1.75 days = 8.75 days

  Team-days after ceremonies:  45 − 8.75 = 36.25 days

Step 3: Subtract operational overhead

  1:1 meetings (assume 30 min/week × 2 weeks × 5 people) = 5 hours = 0.625 days
  Hiring interviews (if active): variable — estimate per cycle
  Cross-team meetings: variable — estimate per cycle
  Slack/email/async communication: typically 0.5–1 hour per person per day
    → 5 people × 1 hour/day × 10 days = 50 hours = 6.25 days

  Operational overhead estimate: ~6.875 days

  Team-days after overhead:  36.25 − 6.875 = 29.375 days

Step 4: Apply the Focus Factor

  Focus Factor (standard GOAL teams): 0.7
  Effective Capacity:  29.375 × 0.7 = 20.6 effective person-days

  Rounded to working units: ~21 effective person-days
```

### 3.2 The Focus Factor Explained

The Focus Factor is not a pessimism adjustment. It reflects the reality that a "working day" is not eight hours of pure productive output. It accounts for:

- Context switching between tasks (even with WIP limits, some context switching exists)
- Unplanned coordination (clarifying a requirement, helping a colleague, debugging an environment issue)
- Cognitive overhead (reading documentation, understanding code, thinking before typing)
- The gap between being at a desk and being in deep work

Research on knowledge worker productivity consistently shows that four to six hours of focused output per eight-hour day is realistic for most people on most days. The GOAL focus factor of 0.7 represents this.

Teams that believe they can sustain higher focus (very well-defined work, minimal meetings, experienced team) can use 0.8. Teams with frequent interruptions, high coordination overhead, or volatile work should use 0.6.

### 3.3 Worked Examples

**Example A: 1-week cycle, team of 4**

```
Team:           4 developers, all fully available for 5 working days
Raw team-days:  4 × 5 = 20 days

Ceremony deductions (1-week cycle):
  Smart Planning:   0.5 days/person × 4 = 2 days
  Daily Flow Sync:  5 × 12min/person × 4 = 4 hours = 0.5 days (total)
  Goal Review:      0.5 days/person × 4 = 2 days
  Retrospective:    0.5 days/person × 4 = 2 days
  (No Backlog Grooming — too short a cycle; grooming runs independently)
  Total ceremony deduction: 6.5 days

Days after ceremonies: 20 − 6.5 = 13.5 days

Operational overhead (1 week):
  1:1s: 30 min × 4 people = 2 hours = 0.25 days
  Async communication: 4 × 1 hour/day × 5 days = 20 hours = 2.5 days
  Total overhead: 2.75 days

Days after overhead: 13.5 − 2.75 = 10.75 days

Focus Factor (0.7): 10.75 × 0.7 = 7.5 effective person-days

Result: ~7–8 effective person-days for a 1-week cycle with 4 developers

Goal sizing implication:
  With tasks averaging 1 day each, this cycle can absorb 7–8 tasks.
  With technical debt allocation at 15%: 7.5 × 0.85 = ~6 tasks for primary goals.
```

**Example B: 2-week cycle, team of 6, one member on vacation**

```
Team:           6 developers
  Developer A–E: fully available (10 days each) = 50 days
  Developer F:   on vacation week 1 = 5 days available

Raw team-days:  50 + 5 = 55 days

Ceremony deductions (2-week cycle, 6 people, Developer F misses week 1 events):
  Smart Planning:   6 × 0.5 = 3 days (Developer F not present → 5 × 0.5 = 2.5 days)
  Daily Flow Sync:  6 × 0.25 = 1.5 days (week 2 only for Developer F: 0.125 days)
  Backlog Grooming: 2 attendees × 0.5 = 1 day
  Goal Review:      6 × 0.5 = 3 days
  Retrospective:    6 × 0.5 = 3 days
  Approximate total: ~10 days

Days after ceremonies: 55 − 10 = 45 days

Operational overhead:
  6 people × (1:1 + async estimate) ≈ 9 days over 2 weeks

Days after overhead: 45 − 9 = 36 days

Focus Factor (0.7): 36 × 0.7 = 25.2 effective person-days

Result: ~25 effective person-days for a 2-week cycle with 6 developers (one on vacation)

For comparison: same team fully available = ~28 effective person-days
The vacation reduces effective capacity by approximately 11%.
```

**Example C: 3-week cycle, team of 8, standard conditions**

```
Team:           8 developers, all available for 15 working days
Raw team-days:  8 × 15 = 120 days

Ceremony deductions (3-week cycle):
  Smart Planning:     8 × 0.5 = 4 days
  Daily Flow Sync:    8 × 0.3 = 2.4 days (15 days × 12 min = 3 hours/person)
  Backlog Grooming:   2 sessions × 3 attendees × 0.5 = 3 days
  Goal Review:        8 × 0.5 = 4 days
  Retrospective:      8 × 0.75 = 6 days
  Total ceremony: ~19.4 days

Days after ceremonies: 120 − 19.4 = 100.6 days

Operational overhead:
  8 people × (1:1 + meetings + async) ≈ 20 days over 3 weeks

Days after overhead: 100.6 − 20 = 80.6 days

Focus Factor (0.7): 80.6 × 0.7 = 56.4 effective person-days

Result: ~56 effective person-days for a 3-week cycle with 8 developers

Technical debt at 15%: 56 × 0.15 = 8.4 days
Buffer at 20%: 56 × 0.20 = 11.2 days
Available for primary + secondary goals: 56 − 8.4 − 11.2 = 36.4 days
```

---

## 4. Capacity Table and Calculator

### 4.1 The Capacity Table Template

At Smart Planning, the team fills out a capacity table. This takes 5–10 minutes and prevents the rest of the planning session from being built on incorrect assumptions.

```
CAPACITY TABLE — [Cycle Name] — [Start Date] to [End Date]

Team member  | Days avail | Daily focus hrs | Role overhead | Effective days
─────────────────────────────────────────────────────────────────────────────
[Name A]     |     10     |      5.6 hrs    |    0.5 days   |     9.5 days
[Name B]     |      8     |      5.6 hrs    |    0.5 days   |     7.5 days
[Name C]     |     10     |      5.6 hrs    |    1.0 day    |     9.0 days  (tech lead)
[Name D]     |     10     |      5.6 hrs    |    0.5 days   |     9.5 days
[Name E]     |     10     |      5.6 hrs    |    2.0 days   |     8.0 days  (onboarding buddy)
─────────────────────────────────────────────────────────────────────────────
TOTALS       |     48     |                 |    4.5 days   |    43.5 days
─────────────────────────────────────────────────────────────────────────────

Pre-deductions:
  Ceremonies:          − 8.75 days (from standard formula)
  Remaining:           43.5 − 8.75 = 34.75 days

Focus Factor applied: 34.75 × 0.7 = 24.3 effective person-days

Tech debt allocation (15%):  24.3 × 0.15 = 3.6 days
Buffer (20%):                24.3 × 0.20 = 4.9 days
Available for goals:         24.3 − 3.6 − 4.9 = 15.8 effective person-days

EFFECTIVE CAPACITY FOR GOAL COMMITMENT: ~16 person-days
```

**Column definitions:**

- **Days available:** Calendar working days minus confirmed absences (vacation, holidays, pre-booked commitments)
- **Daily focus hours:** Standard is 5.6 hours (8 hours × 0.7 focus factor). Can be adjusted for specific individuals
- **Role overhead:** Extra time deducted for responsibilities beyond delivery tasks — tech lead review responsibilities, onboarding buddy duties, cross-team obligations
- **Effective days:** Days available minus role overhead. This is the individual's contribution to team capacity

### 4.2 How to Fill the Capacity Table at Smart Planning

1. **Before the meeting:** Each team member self-reports their confirmed absences for the cycle. The Flow Master compiles these.

2. **At the start of Smart Planning (5 minutes):** The capacity table is filled live with the team. Anyone can flag changes or corrections.

3. **Transparency rule:** The table is visible to all. If someone has significant overhead this cycle (hiring, onboarding, medical), they declare it here. This is not a performance evaluation — it is an input to planning.

4. **Cross-check:** Compare this cycle's effective capacity to the previous cycle's actual delivery. If the team typically delivers 18 person-days of work and this cycle has 14 effective person-days, goals must be scaled down accordingly.

5. **Goal sizing follows capacity:** Never set goals first and then calculate capacity as a justification. The capacity calculation happens first. Goals are then sized to fit the capacity.

---

## 5. Goal Sizing Against Capacity

### 5.1 How to Match Goal Complexity to Available Capacity

Goal complexity in GOAL is estimated in terms of the tasks needed to achieve the goal and their sizes (S, M, L). Before Smart Planning, the Product Strategist and Flow Master should have a rough task breakdown for each proposed goal.

```
Goal sizing process:

1. For each proposed primary goal:
   a. List the tasks needed to achieve it (not exhaustively — rough breakdown)
   b. Assign each task a size: S (1 day), M (2–3 days), L (must split before starting)
   c. Sum the expected days for the goal
   d. Add 20% uncertainty buffer per goal (new information always appears)

2. Compare total goal days to available capacity for goals (after tech debt and buffer)

3. If total goal days ≤ available capacity for goals → proceed
   If total goal days > available capacity for goals → scale down (see Section 5.3)

Example:
  Available capacity for goals: 16 person-days

  Proposed primary goal A: "User authentication redesign"
    Task 1: Update login form UI (S = 1 day)
    Task 2: Implement OAuth flow (M = 2 days)
    Task 3: Update session management (M = 3 days)
    Task 4: Write acceptance tests (M = 2 days)
    Task 5: Staging validation (S = 1 day)
    Subtotal: 9 days + 20% buffer = ~11 days

  Proposed primary goal B: "Export functionality"
    Task 1: API endpoint for export (M = 2 days)
    Task 2: File format handling (M = 2 days)
    Task 3: Frontend trigger (S = 1 day)
    Task 4: Tests + validation (S = 1 day)
    Subtotal: 6 days + 20% buffer = ~7.2 days

  Total: 11 + 7.2 = 18.2 days
  Available: 16 days

  18.2 > 16 → The team needs to scale back or negotiate scope.
  Options: Defer Goal B to secondary, reduce scope of Goal A, or add to next cycle.
```

### 5.2 Task Sizing Reference

When estimating goal complexity, use these size definitions consistently:

```
Small (S):   1 day of active work by one developer
             Clear, bounded scope. Well-understood implementation path.
             Examples: UI text change, bug fix with known root cause,
                       adding a field to an existing form

Medium (M):  2–3 days of active work by one developer
             Moderate complexity. Some investigation needed but path is clear.
             Examples: new API endpoint, component refactor, integration with
                       known third-party service

Large (L):   Would take more than 3 days — must be split before entering In Progress
             Large items are planning artifacts used at the goal level,
             not deliverable work items
             If a Large item cannot be split, it is a signal of unclear scope
             or dependency on decisions not yet made
```

### 5.3 Rules for When Desired Goals Exceed Capacity

When the Smart Planning analysis shows that desired goals exceed available capacity, the team has four options. They are listed in order of preference:

**Option 1: Reduce goal scope (preferred)**

Rather than dropping a goal entirely, reduce its scope to fit capacity. Deliver the most valuable part of the goal now; defer the rest.

```
Example:
  Original goal: "Rebuild the reporting dashboard with three new chart types"
  Reduced scope: "Add the most-requested chart type; defer the other two to next cycle"

  This preserves value delivery while respecting capacity.
  The deferred scope goes back to the backlog as a prioritized item.
```

**Option 2: Move a goal to secondary**

Demote a less critical primary goal to secondary. It gets picked up if primary goals are completed early.

**Option 3: Defer the goal to the next cycle**

If a goal cannot be meaningfully scoped down, defer it in full. Partial delivery of a complex goal often creates more confusion than value.

**Option 4: Negotiate capacity increase (rarely appropriate)**

In exceptional cases, the Product Strategist may negotiate for additional temporary resources (contractor, second developer pairing) if the goal is genuinely critical and the capacity gap is significant. This is the least preferred option because it introduces onboarding overhead (see Section 10).

**What NOT to do:**

- Commit to goals that exceed capacity and hope for the best
- Reduce tech debt allocation to create more goal capacity (this creates compounding quality debt)
- Eliminate the buffer to squeeze in one more goal (the buffer exists precisely for the unexpected)

### 5.4 Technical Debt Allocation Before Goal Sizing

Technical debt allocation is decided before goals are sized. It is not what is "left over" after goals are committed. This ordering matters because it ensures technical health is never sacrificed for short-term goal achievement.

```
Allocation sequence at Smart Planning:

1. Calculate Effective Capacity (from capacity table)
2. Deduct tech debt allocation (10–20% depending on codebase health)
3. Deduct buffer (20% recommended)
4. What remains is the capacity available for primary and secondary goals
5. Size goals against that remaining capacity

Never reverse this sequence.
```

**Tech debt allocation guidelines:**

```
Codebase health           Recommended tech debt allocation
──────────────────────────────────────────────────────────
Healthy codebase          10% (maintenance mode)
Normal accumulated debt   15% (standard)
Significant debt burden   20–25% (active reduction mode)
Critical tech debt risk   30%+ (requires Product Strategist agreement)
```

### 5.5 Buffer Capacity: Why 20% Is Recommended

The 20% buffer is not pessimism — it is the difference between a reliable team and an unreliable one. It absorbs:

- Tasks that turn out to be larger than estimated (happens in every cycle)
- P2 bug fixes that arise during the cycle from the Validation column
- Unexpected dependency discoveries during implementation
- The occasional P1 that, even with the Expedite lane, takes developer attention

Teams that consistently use their buffer fully are operating at the right level of commitment. Teams that never use their buffer may be under-committing. Teams that consistently exceed capacity despite the buffer are under-estimating goal complexity and need to review their sizing calibration.

**Buffer is not the same as slack time.** Buffer is reserved capacity that remains uncommitted in the plan. If the cycle completes primary goals ahead of schedule without needing the buffer, secondary goals are pulled in, tech debt tasks are accelerated, or the cycle closes early per the Goal Cycle closure rules.

---

## 6. Reduced Capacity Cycles

### 6.1 When to Declare a Reduced Capacity Cycle

A reduced capacity cycle is formally declared when the team's effective capacity for a cycle is less than 70% of their baseline effective capacity (the effective capacity in a normal, full-attendance cycle).

```
Trigger threshold: Effective Capacity < 70% of baseline

Examples that can trigger a reduced capacity cycle:
  - Multiple team members on vacation simultaneously
  - Extended P1 incident carryover from previous cycle
  - A significant onboarding event (new hire joining)
  - Major company event consuming team time
  - High sick day incidence (can be estimated from historical average)

Sick day estimation:
  GOAL teams track sick day usage over time.
  For capacity planning, use the historical average:
  "On average, this team takes X sick days per person per 2-week cycle."
  For a first cycle with no history, use the industry average: 0.5 days per person per 2 weeks.
```

### 6.2 How to Adjust Goals, WIP Limit, and Tech Debt in a Reduced Capacity Cycle

**Goal adjustment:**

When capacity drops to 70% of baseline, goals should be adjusted proportionally. If the team normally commits to three primary goals in a full capacity cycle, two primary goals is the right level for a reduced capacity cycle.

```
Goal adjustment formula:
  Reduced goal count ≈ Normal goal count × (Reduced Capacity / Baseline Capacity)

Example:
  Normal cycle: 28 effective person-days, 3 primary goals
  Reduced cycle: 18 effective person-days (64% of baseline)
  Adjusted goals: 3 × 0.64 = 1.9 → commit to 2 primary goals maximum
```

**WIP limit adjustment:**

The WIP formula is `Team Size × Focus Factor`. In a reduced capacity cycle, the effective team size is smaller. Adjust accordingly.

```
WIP adjustment:
  Normal: 5 developers × 0.7 = 3.5 → WIP limit of 4
  Reduced (3 effective developers): 3 × 0.7 = 2.1 → WIP limit of 2

  "Effective developers" accounts for partial availability:
  A developer who is 50% on onboarding duties counts as 0.5 effective developers.
```

**Tech debt allocation:**

In a reduced capacity cycle, the temptation is to cut tech debt allocation to preserve goal capacity. This is wrong. Tech debt work during a reduced cycle is more valuable per hour, not less — it reduces the quality risk that comes with a less attentive team.

Maintain the tech debt percentage. If 15% was allocated in normal cycles, allocate 15% of the reduced capacity to tech debt. The absolute hours will be fewer; the proportion should stay the same.

### 6.3 Communication with Stakeholders

When a reduced capacity cycle is declared, stakeholders must be informed before the cycle begins — not after it fails to deliver expected goals.

**Communication template:**

```
Subject: [Team Name] — Cycle [N] — Adjusted Capacity Notice

This cycle ([date range]) the team is operating at reduced capacity:
  Normal effective capacity:   [X] person-days
  This cycle's capacity:       [Y] person-days ([Z]% of normal)

Reason: [vacation / onboarding / incidents / etc.]

As a result, we are committing to:
  Primary goals: [list — reduced from normal count]
  Secondary goals (if primary completes early): [list]
  Deferred goals: [list of what was pushed to next cycle]

We expect to return to full capacity starting [date of next cycle].

Questions or priority changes: contact [Product Strategist name]
```

This communication is not an apology. It is a professional forecast. Stakeholders who receive this communication before the cycle have the opportunity to re-prioritize if needed. Stakeholders who discover missed goals after the fact cannot do anything useful with that information.

---

## 7. New Team Member Onboarding Impact

### 7.1 Capacity Reduction During Onboarding Period

A new team member entering the team creates a capacity impact in two ways:

1. **The new member's own capacity is reduced** — they are learning the codebase, tools, processes, and domain. Their effective contribution is significantly below a fully ramped developer's.

2. **The senior members absorb onboarding cost** — pairing sessions, code review of new member's work, answering questions, reviewing architecture decisions. This time comes directly from the senior team members' productive capacity.

```
Onboarding capacity impact by week:

Week 1 (orientation):
  New member contribution:  ~10% of a senior developer
  Senior member overhead:   1.0–1.5 days per senior supporting the new member
  Net capacity change:      Slightly negative (cost > contribution)

Week 2:
  New member contribution:  ~25% of a senior developer
  Senior member overhead:   0.75 days per senior
  Net capacity change:      Near neutral

Week 3:
  New member contribution:  ~40% of a senior developer
  Senior member overhead:   0.5 days per senior
  Net capacity change:      Slightly positive

Week 4:
  New member contribution:  ~55–60% of a senior developer
  Senior member overhead:   0.25 days per senior
  Net capacity change:      Positive but still below full replacement value

Full ramp (typically weeks 6–8 for most software teams):
  New member contribution:  ~80–90% of senior developer
  Senior member overhead:   Minimal (routine peer interaction)
```

**Practical implication:** In the first cycle that includes a new team member, plan as if the team size increased by 0.3–0.4 (not 1.0) for capacity purposes. The team size for WIP calculations should reflect actual effective contributors.

### 7.2 WIP Adjustment Recommendations

During onboarding weeks 1–2, the WIP limit should be set conservatively. The new member is not yet able to carry an independent task through the full flow without significant support. Assigning them a task creates a hidden WIP cost: the senior supporting them is partially committed to two tasks simultaneously.

```
WIP recommendation during onboarding:

Weeks 1–2:
  Calculate WIP as if the new member is 0.3 of a developer
  If normal WIP limit = 4, keep it at 4 (do not increase just because headcount increased)
  Assign new member to pair on an existing task rather than a new solo task

Weeks 3–4:
  New member counts as 0.5 developer for WIP purposes
  Small solo tasks appropriate (S-sized, 1 day, well-defined scope)
  Senior buddy reduces solo task complexity by reviewing before In Progress

Weeks 5+:
  New member takes full participation in WIP
  Adjust WIP limit upward by 1 when their solo throughput is demonstrated
  (not assumed — wait for data from the Flow Metrics Dashboard)
```

### 7.3 How Senior Members Absorb Onboarding Cost

The onboarding cost does not fall equally on all senior members. GOAL recommends designating one "onboarding buddy" per new hire. This person absorbs more overhead but provides consistent support, which is better for the new member than distributed, inconsistent help from multiple people.

The onboarding buddy's role overhead should be reflected in the capacity table. A developer serving as onboarding buddy in weeks 1–2 should have 1.0–1.5 days per cycle deducted from their capacity.

This overhead is a legitimate, planned cost — not an interruption. Do not count it against the new member's performance and do not expect the buddy to absorb it invisibly. The capacity table makes it visible.

---

## 8. Team Member Departure Impact

### 8.1 Immediate Cycle Impact Assessment

When a team member announces departure (or in cases of sudden departure), the first action is a cycle impact assessment. This is not about the emotional response to the departure — it is a practical analysis of what must be done to maintain delivery continuity.

```
Departure impact assessment (complete within 24 hours of confirmation):

1. Capacity recalculation
   What is the remaining effective capacity for the current cycle?
   If departure is mid-cycle: recalculate from departure date to cycle end.

2. Task ownership review
   Which tasks are currently owned by the departing member?
   Which tasks are in progress? In Code Review? Blocked?
   Which tasks are unstarted but needed for primary goals?

3. Goal feasibility re-evaluation
   With revised capacity, are primary goals still achievable?
   If not: which goals are at risk, and what is the minimum viable scope?

4. Knowledge gap identification
   What does this person know that nobody else knows?
   What systems, components, or processes do they own exclusively?
   This is the single-point-of-failure inventory (see Section 12.4).
```

### 8.2 Capacity Redistribution

After a departure, the remaining team's WIP limit and goal commitments must be recalculated using the departure-adjusted team size.

```
Example:
  Team of 5, one departure announced with 7 days left in a 2-week cycle.

  Original WIP limit: 5 × 0.7 = 3.5 → 4 tasks
  Revised team size: 4 developers (effective from departure date)
  Revised WIP limit: 4 × 0.7 = 2.8 → 3 tasks

  Tasks in progress that were owned by the departing member:
    → If near completion: departing member completes them before leaving
    → If early stage: reassign with full context handoff (documentation + pairing session)
    → If blocked: assess whether to defer or reassign based on goal impact

  Goal impact: if primary goal is at risk, Product Strategist notified immediately.
  Possible actions: descope primary goal, extend cycle (Extension reason E),
  or declare partial cycle completion.
```

### 8.3 Knowledge Transfer as a Formal GOAL Task

Knowledge transfer is not a side conversation. It is a task on the Flow Board with acceptance criteria, an owner, and a deadline.

```
Knowledge transfer task template:

Task name:     "Knowledge Transfer — [Departing Member] — [Component/System]"
Size:          Medium or Large (never Small — real KT takes time)
Owner:         Departing member (author) + receiving member (learner)
Acceptance criteria:
  □ All owned systems/components documented at a level where the receiver
    can independently debug and modify them
  □ Active tasks have been reviewed and handed off with full context
  □ Access credentials and configurations have been transferred to the appropriate people
  □ At least one pairing session completed per system the departing member exclusively knew
  □ Documentation updated in the team's knowledge base

Priority:
  If departing member has 2+ weeks remaining: Medium priority, planned task
  If departing member has < 2 weeks: High priority, enters cycle immediately
  If sudden departure: emergency triage to identify critical knowledge gaps
```

---

## 9. Part-Time Team Members

### 9.1 How to Count Part-Time Capacity Fairly

Part-time team members contribute real capacity and deserve to be counted accurately in the capacity table — not rounded down to zero or approximated loosely.

```
Part-time capacity calculation:

Step 1: Determine actual hours per week
  Part-time is not always 50%. Some part-time arrangements are:
  - 3 days per week (60%)
  - 4 days per week (80%)
  - Mornings only (50%)
  - Variable schedule

Step 2: Convert to full-time equivalent (FTE) days for the cycle
  FTE days = (Hours per week / Standard hours per week) × Working days in cycle

  Example:
    Developer works 24 hours per week (3 days)
    Standard = 40 hours per week
    FTE ratio = 24/40 = 0.6
    2-week cycle = 10 working days × 0.6 = 6 days available

Step 3: Apply the same focus factor and overhead deductions as full-time members
  The overhead percentage is often higher for part-time members because ceremonies
  and coordination overhead are roughly fixed costs, but available delivery time is reduced.

  Example with ceremonies:
    Full-time member: ceremony overhead = 1.75 days / 10 days = 17.5%
    Part-time member (6 days): same ceremony overhead = 1.75 days / 6 days = 29%

  This means part-time members may need adjusted ceremony participation
  (e.g., attending only the ceremonies most relevant to their work)
  to avoid their entire contribution being consumed by overhead.
```

### 9.2 WIP Limit Adjustment for Mixed Full/Part-Time Teams

When the team includes both full-time and part-time members, the WIP limit formula needs to reflect effective contributors, not headcount.

```
Mixed team WIP calculation:

Full-time member = 1.0 for WIP calculation
Part-time member = Their FTE ratio

Example:
  3 full-time developers (1.0 each) + 2 part-time developers (0.6 each)
  Effective team size = 3(1.0) + 2(0.6) = 3 + 1.2 = 4.2 effective developers
  WIP limit = 4.2 × 0.7 = 2.94 → WIP limit of 3

Note: This is the same WIP limit as a team of 3 full-time developers.
This might feel unintuitive, but it is correct: the part-time developers
contribute capacity, but their reduced daily availability means tasks assigned
to them take longer in calendar time, which the WIP calculation reflects.
```

### 9.3 Task Assignment Considerations for Part-Time Members

Part-time members should receive tasks with clear boundaries and minimal dependencies on other team members' availability. Tasks that require frequent synchronous coordination are difficult for part-time members because their available hours may not overlap with the rest of the team.

Best task types for part-time members:
- Well-defined, bounded implementation tasks
- Documentation and specification work
- Test writing
- Code review (can be done asynchronously)

Less suitable without explicit coordination:
- Tasks with hard dependencies on same-day input from other members
- Paired tasks that require extended synchronous sessions
- P1 incident response (part-time members may not be available when P1s occur)

---

## 10. Contractor and External Contributor Capacity

### 10.1 How to Account for Contractors in Capacity

Contractors contribute capacity, but they are not equivalent to full-time team members in planning terms. The key differences:

- They carry onboarding overhead regardless of technical experience
- They have no prior knowledge of the team's codebase, conventions, or decisions
- Context setup time is a real, unavoidable upfront cost
- Their availability may not match the team's cycle precisely

```
Contractor capacity modeling:

Week 1 of engagement:
  Contribution:   ~20–30% of comparable full-time developer
  Overhead cost:  1.5–2.0 days from team members for onboarding and context

Week 2:
  Contribution:   ~40–50%
  Overhead cost:  0.5–1.0 days

Weeks 3–4:
  Contribution:   ~60–70% (for well-scoped, well-defined work)
  Overhead cost:  Minimal (routine interaction)

Note: These numbers assume the contractor has relevant technical skills.
Contractors without domain knowledge in the specific technology stack
take longer to ramp and may not reach 70% contribution in a short engagement.
```

### 10.2 Onboarding Overhead for Contractors

Contractor onboarding should follow the same formal process as full-time member onboarding. It is frequently skipped because contractors are perceived as "already experienced" — but experience in their field does not transfer knowledge of your codebase, your conventions, or your deployment process.

```
Minimum contractor onboarding (before first task):

□ Codebase walkthrough: architecture overview, key modules, entry points
□ Development environment setup: local setup verified and working
□ Deployment process: how to deploy to staging, how CI/CD works
□ Team conventions: coding standards, naming conventions, PR process
□ DoD briefing: the contractor must understand and commit to the team's DoD
□ First task selection: start with a well-defined S or small M task in a bounded area
  (not in the most complex or critical part of the codebase)

Skipping this onboarding guarantees one of two outcomes:
  a) The contractor delivers work that does not meet standards, requiring rework
  b) A senior team member becomes an invisible full-time support person,
     consuming capacity that was supposed to be offset by the contractor
```

### 10.3 When Contractors Help vs Hurt Flow

Contractors help flow when:
- The engagement is long enough for the ramp to pay off (minimum 3–4 weeks)
- The work is well-defined and bounded (does not require deep codebase knowledge)
- The team has available capacity to absorb the onboarding overhead
- The contractor has been briefed on GOAL practices and will follow the DoD

Contractors hurt flow when:
- The engagement is too short (1–2 weeks: onboarding cost exceeds contribution)
- The work requires deep system knowledge that takes weeks to transfer
- The team is already at reduced capacity (adding onboarding overhead to an already stretched team accelerates the problem)
- The contractor bypasses the DoD or is not held to the team's quality standards

**The contractor paradox:** Teams often hire contractors when they are overloaded. But an overloaded team has the least capacity to absorb contractor onboarding overhead. This is why the first 1–2 weeks of a contractor engagement often make overload worse before it gets better.

Recommendation: Plan contractor starts for the beginning of cycles when the team's capacity is at or near normal. Avoid starting contractor engagements in the middle of a reduced capacity cycle.

---

## 11. Quarterly Capacity Forecasting

### 11.1 How to Plan Capacity for the Next 3–4 Cycles

Quarterly capacity forecasting extends the per-cycle capacity calculation into a rolling horizon. It answers the question: "Given what we know about the next 3 months, what can we realistically commit to?"

This forecast is used as input to the product roadmap. It prevents the common failure mode where the roadmap is built on theoretical team capacity, and delivery consistently falls short of roadmap commitments.

```
Quarterly forecast process (done once per quarter, updated monthly):

Step 1: List the next 3–4 cycle windows
  Define approximate start and end dates for upcoming cycles.
  Typical: 3 cycles of 3 weeks each = 9-week horizon

Step 2: For each cycle window, catalog known constraints
  - Confirmed vacations (already booked)
  - Company-wide events (offsite, conferences)
  - Known hiring activity (headcount changes expected)
  - Planned contractor starts/ends
  - Known onboarding events
  - Historical sick day rate (from cycle data)

Step 3: Calculate approximate effective capacity per cycle
  Use the same formula as per-cycle planning, with less precision at the quarterly level.
  Quarterly forecasts use rough estimates; per-cycle planning uses exact data.

Step 4: Identify high-constraint cycles
  Flag any cycle where effective capacity will be < 80% of baseline.
  These cycles need reduced goal commitments and early stakeholder communication.

Step 5: Output a capacity outlook document
  Share with Product Strategist and relevant stakeholders.
  This is the foundation for roadmap commitment conversations.
```

### 11.2 Quarterly Capacity Forecast Template

```
QUARTERLY CAPACITY FORECAST — Q[N] [Year]
Team: [Team Name]
Prepared by: [Flow Master Name]
Date: [Date]
Baseline effective capacity (full team, normal cycle): [X] person-days per 2-week cycle

Cycle   | Window         | Known constraints          | Est. capacity | Flag
────────────────────────────────────────────────────────────────────────────────
C-[N]   | Apr 7 – Apr 18 | None known                 | ~X days       | Normal
C-[N+1] | Apr 21 – May 2 | Developer A: vacation wk 2 | ~X–3 days     | Minor reduction
C-[N+2] | May 5 – May 16 | Company offsite (May 8–9)  | ~X–5 days     | Moderate reduction
C-[N+3] | May 19 – May 30| New hire starts May 19     | ~X–4 days     | Moderate reduction
────────────────────────────────────────────────────────────────────────────────
Notes:
  - C-[N+2] company offsite impacts all team members for 2 days
  - C-[N+3] new hire introduces 3–4 days of onboarding overhead for the onboarding buddy
  - Historical sick day rate: 0.4 days/person/cycle → add ~2 days buffer across team per cycle

Roadmap implication:
  Normal: [3 goals/cycle × 4 cycles] = 12 goals available
  Adjusted for constraints: ~10 goals over this quarter
  Recommend: Reserve 2 goal slots for high-priority items that need scheduling flexibility
```

### 11.3 Handling Known Future Constraints

Some constraints are known far in advance: company off-sites, planned leaves, conference attendance, onboarding schedules. These are the easiest to account for because they are calendar-visible.

**Pre-cycle communication protocol for known constraints:**

- Constraints known > 4 weeks ahead: reflected in the quarterly forecast
- Constraints known 1–4 weeks ahead: incorporated at next Smart Planning
- Constraints discovered during a cycle: immediate capacity impact assessment (follows departure protocol if severe)

### 11.4 Capacity Planning as Input to Roadmap Commitments

The roadmap is the product of two inputs: what the business wants (priority from the Product Strategist) and what the team can deliver (capacity from the Flow Master's planning work). When roadmaps are built without capacity input, they are fiction.

```
Roadmap commitment framework:

For each roadmap item, the Product Strategist and Flow Master jointly assess:
  1. What cycle window is this item targeted for?
  2. What is the estimated capacity requirement (based on task sizing)?
  3. Does the target cycle have sufficient effective capacity for this item?
  4. What are the dependencies — does this item require a preceding item to be complete?

Commitment types:
  Committed:   Item fits within confirmed capacity for a specific cycle window.
               The team will deliver this barring major unexpected events.

  Forecasted:  Item is planned for a cycle window but capacity is not yet confirmed.
               Subject to change based on actual capacity at Smart Planning.

  Aspirational: Item is desired but has not been capacity-matched to a specific cycle.
               Not a commitment — should not be communicated to external stakeholders as one.
```

---

## 12. Capacity Anti-Patterns

Anti-patterns are approaches that seem reasonable but consistently produce bad outcomes. Capacity planning has several well-documented anti-patterns worth naming explicitly.

### 12.1 100% Utilization Planning

**What it looks like:**

The team's effective capacity is calculated as X person-days. The plan allocates X person-days of work. There is no buffer. Every person is assigned to something for every hour of the cycle.

**Why it seems reasonable:**

"We're paying for full-time employees — we should use all their time." "Leaving capacity unused is waste." "If we don't fill the plan, we're underperforming."

**Why it fails:**

100% utilization planning fails because it assumes perfect information. In every real software cycle:
- Tasks are sometimes larger than estimated
- Unexpected bugs emerge from Validation
- Dependencies reveal themselves mid-implementation
- Colleagues need help
- A developer gets sick

When any of these occur in a 100%-utilized plan, something falls off the edge. Either a task is rushed (quality drops), a goal is missed (Cycle Accuracy Index degrades), or the team works overtime (sustainable delivery is violated).

**GOAL response:**

The 20% buffer is explicitly protected in the capacity calculation before goals are sized. Teams that consistently use their full buffer should not eliminate it — that means they are operating at the right level of commitment, not that they have slack to exploit.

### 12.2 Ignoring Ceremony Time

**What it looks like:**

The capacity calculation counts 5 developers × 10 days = 50 team-days, and then goals are sized to consume 50 team-days of work. Ceremonies are not deducted.

**Why it seems reasonable:**

"Ceremonies are part of the job — they don't count against delivery time." "We only have 30-minute standups — it's not that much."

**Why it fails:**

GOAL ceremonies for a 2-week cycle with 5 people consume roughly 8–9 team-days. That is approximately 17% of the raw available capacity. If you plan against 50 team-days but only have 41 for delivery, you will consistently run 17% short of your commitments. Over 4 cycles, that is one full cycle's worth of undelivered work.

**GOAL response:**

Ceremony time is a mandatory line item in the capacity calculation. It is not waste — ceremonies deliver alignment, improvement, and direction. But they do consume time, and that time must be accounted for.

### 12.3 Not Accounting for Onboarding

**What it looks like:**

A new developer joins the team. The WIP limit is increased by 1 immediately. The capacity calculation treats the new member as a full contributor from day one. Goals are set based on the "expanded team."

**Why it seems reasonable:**

"We hired them — they should be productive immediately." "They're an experienced developer — they don't need much hand-holding."

**Why it fails:**

Even the most experienced senior developer takes 4–8 weeks to reach full productivity in a new codebase. During that period, their contribution is partial, and the team absorbs overhead that is invisible in the capacity table. Planning as if a new hire immediately replaces the capacity of a fully ramped developer leads to over-committed cycles, frustrated new hires, and burned-out senior members who are simultaneously trying to deliver and provide support.

**GOAL response:**

The onboarding capacity ramp in Section 7.1 is explicit. New members are counted at their actual effective contribution (starting at ~0.3 FTE in week 1). The WIP limit increase is delayed until the new member's solo throughput is demonstrated in the Flow Metrics Dashboard.

### 12.4 Single Point of Failure

**What it looks like:**

All meaningful knowledge of a critical system lives with one developer. If they are sick, on vacation, or leave, the team cannot make progress on work involving that system. The effective team capacity drops sharply whenever that person is unavailable.

**Why it happens:**

Work naturally concentrates. The person who built a system tends to get all the work involving that system. Knowledge sharing is deprioritized because the person who knows is available. The risk is invisible as long as they are available.

**Why it fails:**

When the single point of failure is unavailable (and this always happens eventually), it can be catastrophic. The capacity impact is not "one developer down" — it is "zero effective capacity on everything that touches this system."

**GOAL response:**

- Knowledge transfer is a proactive, regular activity — not only triggered by departures
- The tech debt allocation includes documentation and knowledge spreading tasks
- The Block Register tracks blockers that are caused by a single-person dependency; these patterns are analyzed in retrospectives
- A healthy target: any critical system has at least two developers who can modify it independently

**Practical implementation:**

In each retrospective, the Flow Master asks: "Are there any systems or knowledge areas where we have single-person dependency?" Any identified single points of failure become tech debt tasks in the next cycle. The goal is not perfect knowledge redundancy — it is eliminating catastrophic unavailability from any single person's absence.

---

## Summary: Capacity Planning in GOAL at a Glance

| Dimension | GOAL approach |
|-----------|---------------|
| When capacity is calculated | Before goals are sized, at Smart Planning |
| Base calculation | Team members × available days × focus factor, minus deductions |
| Key deductions | Ceremonies, 1:1s, operational overhead, absences |
| Focus factor | 0.6–0.8 depending on team stability and interrupt frequency |
| Buffer | 20% of effective capacity, committed before goals are sized |
| Tech debt allocation | 10–20% of effective capacity, committed before goals are sized |
| Reduced capacity threshold | &lt; 70% of baseline triggers formal reduced capacity cycle |
| New hire impact | Counted at 0.3–0.6 FTE during weeks 1–4; WIP increase delayed until throughput proven |
| Departure impact | Immediate cycle impact assessment; knowledge transfer as formal GOAL task |
| Part-time members | Counted at their FTE ratio; WIP limit uses effective team size |
| Contractor contribution | Full ramp takes 3–4 weeks; onboarding overhead must be planned |
| Quarterly forecasting | Rolling 3–4 cycle horizon; input to roadmap commitments |
| Anti-patterns to avoid | 100% utilization, ignoring ceremony time, ignoring onboarding, single points of failure |

---

*This document is part of the GOAL Agile Methodology documentation suite. Refer to GOAL_Methodology_v0.2.md for the core framework. Refer to GOAL_Quality_Management.md for how quality work factors into capacity allocation decisions.*
