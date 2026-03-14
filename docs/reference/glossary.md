---
id: glossary
title: GOAL Glossary
sidebar_position: 1
description: Complete term reference for the GOAL Agile Methodology — definitions, context, and cross-references for every key concept.
---

# GOAL Glossary

## Goal-Oriented Adaptive Lifecycle — Complete Term Reference

This glossary defines GOAL-specific terms in full depth, explains adjacent agile and flow concepts practitioners need, and documents terms that GOAL deliberately removes or replaces from Scrum and Kanban vocabulary.

---

## A

### Acceptance Criteria

Specific, testable conditions that a backlog item must satisfy in order to fulfill the Product Strategist's intent. Unlike the Definition of Done (which applies to every task universally), Acceptance Criteria are unique to each individual backlog item and are typically written in Given/When/Then format.

Must be written and agreed upon before a backlog item can enter the Ready state. The Product Strategist is responsible for writing them; the Delivery Team provides input on feasibility. During Backlog Grooming, incomplete Acceptance Criteria are the primary reason items remain in Refinement rather than advancing to Ready.

**Related:** Definition of Done, Backlog Grooming Session, Ready State, Given/When/Then Format, Product Strategist

---

### Adaptive Goal Cycle

GOAL's primary time-boxing unit, analogous to the Scrum sprint but with fundamental behavioral differences. Unlike a sprint (which ends on a fixed calendar date), a Goal Cycle ends when its primary goals have been completed and validated. If goals are completed early, the cycle closes early. If goals require more time, the cycle can be formally extended once.

The "adaptive" in the name refers to two properties: the cycle's duration adapts to goal achievement (not the calendar), and tasks within the cycle adapt freely to serve those goals.

**Related:** Goal Cycle, Goal Stability Rule, Scope Flexibility Rule, Smart Planning Session, Cycle Accuracy Index
**Replaces:** Sprint (Scrum)

---

### Aging Indicator

A visual signal applied to a task card on the Flow Board when the task has remained in the same column longer than its expected duration based on its size. Thresholds: Small tasks trigger yellow after 1 day; Medium tasks after 2 days. Any task at 2× its expected time triggers a red indicator and must be discussed in the next Daily Flow Sync.

**Related:** Flow Board, Task Size, Daily Flow Sync, Flow Master, Cycle Time

---

### Anti-Pattern

A recognizable way that a methodology is commonly misapplied. Anti-patterns look like legitimate adaptations but consistently produce negative outcomes. GOAL catalogs seven single-team anti-patterns (Scrum-washing, WIP limit ignoring, retrospectives without data, Expedite lane inflation, DoD negotiation, invisible work, goal drift) and six multi-team anti-patterns (dependency hiding, program sync theater, platform team as ticket queue, dependency rate normalization, misaligned program goals, shadow dependencies).

**Related:** Scrum-Washing, WIP Limit, Expedite Lane Inflation, Goal Drift, Definition of Done, Invisible Work

---

## B

### Backlog

A prioritized list of all work items not yet part of an active Goal Cycle. GOAL distinguishes sharply between a healthy backlog (prioritized, all ready items with Acceptance Criteria and size estimates, at least two cycles of ready work) and an unhealthy backlog (infinite wish list, stale items, items without Acceptance Criteria).

**Related:** Backlog Grooming Session, Backlog Health Standard, Ready State, Backlog Curator

---

### Backlog Curator

Not a separate role but a formal function within the Product Strategist's responsibilities. Core responsibilities: ensure the backlog contains at least two Goal Cycles of ready items; ensure every ready item has defined Acceptance Criteria; remove or archive obsolete items; run the weekly Backlog Grooming Session.

**Related:** Product Strategist, Backlog, Backlog Grooming Session, Backlog Health Standard, Ready State

---

### Backlog Grooming Session

A recurring GOAL event — held weekly, independent of cycle timing — dedicated to maintaining backlog health. Duration: 30–45 minutes. Participants: Product Strategist (required), Flow Master (required), 1–2 rotating Delivery Team members. Agenda covers: reviewing new items, confirming Acceptance Criteria, sizing, identifying dependencies, splitting Large items, and archiving stale items.

**Related:** Backlog, Backlog Health Standard, Smart Planning Session, Product Strategist, Flow Master

---

### Backlog Health Standard

A backlog is considered healthy when it contains: at minimum two Goal Cycles worth of ready-to-execute items; all ready items have Acceptance Criteria; all ready items have a size estimate (S/M/L); no ready items have unresolved blocking dependencies.

**Related:** Backlog, Backlog Grooming Session, Backlog Curator, Ready State, Smart Planning Session

---

### Backlog Item States

The lifecycle progression of a backlog entry: **Discovery** (exists but not defined enough to size), **Refinement** (Acceptance Criteria being written), **Ready** (meets ready-to-execute definition), **Cycle** (part of active Goal Cycle), **Done** (completed and meets DoD), **Archive** (removed as no longer relevant).

**Related:** Backlog, Flow Board, Ready State, Definition of Done, Backlog Grooming Session

---

### Batch Size

The amount of work accumulated before it is integrated, reviewed, or released. GOAL enforces small-batch delivery through two rules: tasks must be deliverable within 3 days (S/M/L sizing, Large tasks must be split), and pull requests should be reviewable in under 30 minutes. Smaller batches flow faster and more predictably.

**Related:** Continuous Delivery, Trunk-Based Development, Feature Flags, Little's Law, Definition of Done, Task Size

---

### Block Rate

Percentage of tasks in a cycle that encountered a blocked state: `(Tasks blocked ÷ Total tasks completed) × 100`. Target for established teams: below 20%. Above 30% indicates a systemic process problem requiring deep retrospective investigation. Analyzed in absolute terms and by blocker type distribution.

**Related:** Block Register, Blocked State, Blocker Type, Data-Driven Retrospective, Flow Efficiency

---

### Block Register

A persistent log maintained across all Goal Cycles recording every task that entered the Blocked state. Required fields per entry: task name and ID, date blocked, blocker description, blocker type, resolution owner, resolution plan, expected resolution date, date resolved, and total time blocked. Analyzed in every Data-Driven Retrospective. Failing to log a blocked task is a process violation.

**Related:** Blocked State, Blocker Type, Block Rate, Data-Driven Retrospective, Flow Master, Escalation Timeline

---

### Blocked State

A task is Blocked when the responsible person cannot make progress due to an external factor requiring action from someone else. GOAL draws an important distinction: thinking, researching, or learning is **not** blocked — it is in progress. Blocked requires an external dependency, decision, or infrastructure problem. Moving a task to Blocked is mandatory, not optional.

**Related:** Block Register, Blocker Type, Escalation Timeline, Flow Board, Blocked Task Protocol

---

### Blocker Type

Classification applied to every blocked task. GOAL defines five types: **Technical** (technical problem requiring research), **External** (blocked by third party or another team), **Business Decision** (requires decision from Product Strategist or stakeholder), **Dependency** (blocked by another incomplete task), **Infrastructure** (environment or tooling issue). Each type has a defined escalation path at the 48-hour mark.

**Related:** Blocked State, Block Register, Escalation Timeline, Data-Driven Retrospective

---

## C

### Cognitive Load

The total mental effort required at any given moment. GOAL acknowledges cognitive load as a performance factor. WIP limits control cognitive load by limiting active tasks. The 3-day task rule limits how long team members hold complex context. Making all work visible is a cognitive load reduction strategy.

**Related:** WIP Limits, Focus Factor, Invisible Work, Task Size, Sustainability Principle, Burnout

---

### Continuous Delivery

A practice in which code is kept in a releasable state at all times, with changes integrated frequently. GOAL enforces four rules: no large merges (PRs reviewable in under 30 minutes), no long-lived branches (feature branches ≤ 3 days), frequent integration (completed tasks merged immediately, not held for release), and trunk-based development as the preferred integration model.

**Related:** Trunk-Based Development, Feature Flags, Batch Size, Definition of Done, Flow Efficiency, DORA Metrics

---

### Cycle Accuracy Index (CAI)

Tracks the relationship between estimated and actual Goal Cycle duration. Formula: `Actual Duration ÷ Estimated Duration`. A result of 1.0 = perfect accuracy; below 1.0 = completed faster than estimated; above 1.0 = took longer. Tracked as a moving average over the last five cycles. Replaces velocity as the primary planning signal.

**Related:** Goal Review, Smart Planning Session, Cycle Duration, Flow Efficiency, Extension Record
**Replaces:** Velocity (Scrum) as the primary planning estimation signal

---

### Cycle Time

Elapsed time from when active work begins on a task (enters In Progress) until the task is completed (enters Done). Measures only active processing time — does not include waiting time in queues. Expected range in GOAL: 1–3 days for properly sized Small or Medium tasks.

**Related:** Flow Time, Wait Time, Flow Efficiency, Little's Law, Throughput

---

### Cycle Duration

Total working days from the start of a Smart Planning Session to the closure of the Goal Cycle. GOAL recommends 1–3 weeks. Shorter cycles work for teams with frequent priority changes; longer for stable teams with clear, larger goals.

**Related:** Goal Cycle, Cycle Accuracy Index, Smart Planning Session, Goal Review, Extension Record

---

## D

### Daily Flow Sync

GOAL's replacement for the Scrum Daily Standup. A 10–12 minute daily meeting focused on the health of work flow — not individual status reports. Three questions: What moved forward (column transitions, not activity)? What is blocked or at risk? What is slowing flow? The Flow Master leads it. Cannot be replaced by async updates.

**Related:** Flow Board, Flow Master, Blocked State, WIP Limits, Aging Indicator
**Replaces:** Daily Standup / Daily Scrum (Scrum)

---

### Data-Driven Retrospective

GOAL's cycle improvement event, held immediately after the Goal Review. Uses flow metrics as its primary input rather than team opinions. Agenda: review flow metrics, analyze the Block Register, identify 1–3 improvements with owners and success metrics, review the outcome of the previous cycle's improvements. Discussion topics must be anchored to data.

**Related:** Flow Metrics Dashboard, Block Register, Flow Efficiency, Block Rate, Cycle Accuracy Index, Goal Review
**Replaces:** Retrospective (Scrum) — the name signals the data requirement

---

### Definition of Done (DoD)

A team-defined checklist every task must fully satisfy before moving to Done. GOAL structures the DoD in two levels. **Level 1 (Baseline)** is mandatory for all GOAL teams: code merged to main, all automated tests pass, peer code review approved, validated in staging/QA (not only locally), no new technical debt without a corresponding backlog entry, documentation updated. **Level 2 (Extended)** is team-defined and reviewed at every retrospective.

**Related:** Acceptance Criteria, Flow Board, Technical Debt, Code Review, Validation Column, Done Column

---

### Delivery Rate

Number of tasks moved to Done per working day during a Goal Cycle. Measures throughput stability rather than absolute speed. A consistent Delivery Rate is more valuable for planning than a high but volatile one. Tracked as a trend over time, not used as a daily target.

**Related:** Throughput, Flow Time, Cycle Time, Block Rate, Data-Driven Retrospective

---

### Delivery Team

The self-managed group of engineers responsible for executing work. GOAL does not prescribe internal team structure. Key responsibilities: flagging blockers immediately (holding a blocker privately is a process violation), managing technical debt within allocated capacity, and providing sizing input during Backlog Grooming. Success metric: throughput stability.

**Related:** Flow Master, Product Strategist, Throughput, Technical Debt, Block Register, WIP Limits

---

### Dependency

A situation where one task or team cannot complete its work until another delivers a specific output. In single-team GOAL, managed as Blocker Type: Dependency in the Block Register. In multi-team GOAL, tracked in a dedicated Dependency Register with full lifecycle management.

**Related:** Dependency Register, Block Register, Dependency Rate, Program Flow Master, Cross-Team Block Rate

---

### Dependency Rate

Program-level metric: `(New dependencies opened in cycle ÷ Total tasks completed across all teams) × 100`. Target: below 10%. Warning zone: above 20% (architectural review recommended). A rising Dependency Rate signals increasing architectural coupling between teams.

**Related:** Dependency Register, Program Flow Master, Cross-Team Block Rate, Program Retrospective

---

### Dependency Register

Multi-team artifact serving as the single source of truth for all cross-team dependencies. Required fields: unique ID, dates, requesting and providing teams, description, linked tasks, expected delivery date, impact if late, escalation owner, status (Identified / Active / At Risk / Blocked / Resolved), resolution date, time blocked.

**Related:** Dependency, Dependency Rate, Program Flow Master, Cross-Team Dependency Review, Program Board

---

### DORA Metrics

Four software delivery performance indicators: Deployment Frequency, Lead Time for Changes, Change Failure Rate, and Mean Time to Restore (MTTR). Referenced in GOAL's Phase 4 optimization roadmap as an optional extension that complements GOAL's flow metrics.

**Related:** Continuous Delivery, Flow Efficiency, Technical Value

---

## E

### Early Closure

Occurs when all primary goals of a Goal Cycle are completed before the estimated end date. The cycle closes immediately — the team does not fill remaining time with arbitrary work. A new Smart Planning Session is called promptly. Early Closure is a success indicator.

**Related:** Goal Cycle, Goal Stability Rule, Cycle Accuracy Index, Smart Planning Session, Extended Closure

---

### Emergency Cycle Protocol

The formal process for closing a Goal Cycle before primary goals are completed, used when business priorities have changed fundamentally. Requires mutual agreement between Product Strategist and Flow Master, produces a partial completion record, and triggers an Emergency Smart Planning Session within 24 hours. Three trigger cases: fundamental business change, P1 incidents consuming more than 50% of cycle capacity, or external blocker cancelling cycle goals.

**Related:** Goal Stability Rule, P1 Interrupt, Goal Cycle, Product Strategist, Flow Master

---

### Escalation Timeline

GOAL's defined sequence of responses to a blocked task by time elapsed: **Hour 0** — task marked Blocked, Block Register entry completed, independent resolution begins; **Hours 0–24** — owner resolves independently; **Hour 24** — if unresolved, Flow Master actively assists; **Hour 48** — formal escalation (path by blocker type); **Hours 72+** — if goal affected, goal marked "at risk," Product Strategist notified, cycle extension evaluated.

**Related:** Blocked State, Block Register, Blocker Type, Flow Master, Product Strategist, Blocked Task Protocol

---

### Expedite Lane

A special priority path on the GOAL Flow Board for tasks approved through the Interrupt Management Protocol at P1 or P2 level. Rules: maximum one active task at any time (no exceptions), joint approval from Flow Master and Product Strategist required, business justification documented, normal WIP limits still apply to the rest of the board.

**Related:** Interrupt Management Protocol, P1 Interrupt, P2 Interrupt, Flow Board, WIP Limits, Flow Master

---

### Expedite Lane Inflation

Anti-pattern where the Expedite Lane is chronically occupied by 2+ tasks because interrupt classification is not being enforced. Indicates P3 requests are being treated as P1/P2. Correction: review interrupt log data, require documentation of business impact before any P2/P3 classification.

**Related:** Expedite Lane, Interrupt Management Protocol, P1 Interrupt, P2 Interrupt, P3 Interrupt, Anti-Pattern

---

### Extended Closure

Occurs when a cycle's primary goals cannot be completed by the estimated end date and the cycle is formally extended. The Extension Record requires: original end date, approval by Flow Master + Product Strategist, additional days, and an extension reason code (A: External blocker, B: Scope underestimation, C: Unexpected technical complexity, D: Unplanned interruptions, E: Team capacity reduction). A cycle can only be extended once.

**Related:** Goal Cycle, Cycle Accuracy Index, Extension Record, Early Closure, Goal Review

---

## F

### Feature Flags

A technique allowing teams to merge incomplete functionality into the main branch while keeping it hidden from end users. GOAL recommends feature flags as the mechanism for complying with the rule that feature branches should not live longer than 3 days. The DoD should include verification of the feature flag's enabled and disabled states.

**Related:** Trunk-Based Development, Continuous Delivery, Batch Size, Definition of Done, Technical Debt

---

### Flow

The smooth, uninterrupted movement of work through a system. Flow is disrupted by batching, multi-tasking, unclear requirements, slow handoffs, and resource contention. The central metaphor of the GOAL framework — the name "Flow Board," "Flow Master," "Flow Efficiency," and "Daily Flow Sync" all derive from it.

**Related:** WIP Limits, Little's Law, Flow Efficiency, Throughput, Queueing Theory, Kanban

---

### Flow Board

GOAL's central visual management artifact. Six standard columns: Backlog, Ready, In Progress, Code Review, Validation, Done. Two special lanes: Blocked and Expedite. A Technical Debt lane is also maintained. Every task card must contain: task name, size (S/M/L), owner, date entered current column, and the goal it serves.

**Related:** Flow Master, WIP Limits, Blocked State, Expedite Lane, Aging Indicator, Daily Flow Sync, Task Card

---

### Flow Efficiency

`(Cycle Time ÷ Flow Time) × 100`. Measures what percentage of total flow time was spent in active work versus waiting. Benchmarks: below 15% = most time spent waiting; 15–30% = typical for teams new to flow management; 30–50% = healthy for established teams; 50%+ = high-performing flow.

**Related:** Flow Time, Cycle Time, Wait Time, Throughput, Data-Driven Retrospective, Little's Law

---

### Flow Master

The GOAL role responsible for the health of the delivery process. Primary focus is on the workflow itself — the board, the metrics, blockers, and WIP limits. Key authorities: define and enforce WIP limits, approve temporary WIP overrides, approve Expedite Lane entries (jointly with Product Strategist), escalate blocked tasks above the 48-hour threshold.

**Related:** Scrum Master (replaced), WIP Limits, Block Register, Expedite Lane, Daily Flow Sync, Data-Driven Retrospective
**Replaces:** Scrum Master (Scrum) — different focus and responsibilities

---

### Flow Metrics Dashboard

An artifact providing real-time or near-real-time view of team flow health. Minimum contents: current WIP vs WIP limit, average cycle time for the last 10 completed tasks, current block rate, flow efficiency trend for the last 3 cycles, and aging tasks. Primary preparation tool for the Daily Flow Sync and the Data-Driven Retrospective.

**Related:** Flow Efficiency, Block Rate, Cycle Time, WIP Limits, Daily Flow Sync, Data-Driven Retrospective

---

### Flow Time

Total elapsed time from when a task enters the Ready column until it enters the Done column. Includes all waiting time, all blocked time, and all active working time. The customer-facing metric. Relationship: `Flow Time = Cycle Time + Wait Time`.

**Related:** Cycle Time, Wait Time, Flow Efficiency, Little's Law, Ready State

---

### Focus Factor

A coefficient in GOAL's WIP limit formula, ranging from 0.6 to 0.8. Represents the team's estimated ability to focus on active delivery work. Formula: `WIP Limit = Team Size × Focus Factor`. Standard: 0.7. Lower (0.6) for new teams or high-interrupt environments. Higher (0.8) for stable, experienced teams with low interrupt rates.

**Related:** WIP Limits, Focus Ratio, Team Size, Flow Master

---

### Focus Ratio

`Active Tasks (In Progress + Code Review + Validation) ÷ WIP Limit`. Below 0.7 may indicate idle capacity; 0.7–1.0 is healthy; above 1.0 means the WIP limit is being exceeded and requires immediate Flow Master intervention.

**Related:** WIP Limits, Flow Master, Daily Flow Sync, Cognitive Load, Focus Factor

---

## G

### Given/When/Then Format

Structured format for writing Acceptance Criteria: **Given** (initial context/precondition), **When** (action or event), **Then** (expected outcome). Forces the writer to think in terms of observable, testable behavior. GOAL's preferred Acceptance Criteria format.

**Related:** Acceptance Criteria, Backlog Grooming Session, Definition of Done, Validation Column

---

### Goal Cycle

GOAL's primary work cadence unit. Three defining rules: **Goal Stability Rule** (primary goals cannot change once active), **Scope Flexibility Rule** (tasks can change freely), and **Adaptive Termination Model** (cycle ends when goals are met, not by calendar).

**Related:** Goal Stability Rule, Scope Flexibility Rule, Adaptive Goal Cycle, Smart Planning Session, Goal Review, Cycle Accuracy Index

---

### Goal Cycle Plan

The artifact created at the start of each Goal Cycle. Not a task list — an outcomes document. Contains: primary goals, secondary goals, risk items, technical debt allocation, and cycle time estimate. Explicitly does not contain a task list. Tasks are determined by the Delivery Team as the cycle progresses.

**Related:** Goal Cycle, Goal Stability Rule, Scope Flexibility Rule, Smart Planning Session, Product Strategist

---

### Goal Drift

Anti-pattern where the primary goals of a cycle subtly change during execution without formal change records. Correction: treat the Goal Cycle Plan as a formal reference document, not a memory. The Flow Master explicitly refers to it at every Daily Flow Sync and challenges any task not serving the plan's goals.

**Related:** Goal Stability Rule, Goal Cycle Plan, Emergency Cycle Protocol, Anti-Pattern, Scope Flexibility Rule

---

### Goal Review

The GOAL event held at the end of every Goal Cycle, before the Data-Driven Retrospective. Evaluates whether the cycle achieved its objectives and measures the value delivered. Duration: 30–45 minutes. Agenda: review primary goals (completed? Evidence of value?), secondary goals, Cycle Accuracy review, and value delivered summary using the 3-Layer Value Framework.

**Related:** Goal Cycle Plan, Cycle Accuracy Index, 3-Layer Value Framework, Definition of Done, Data-Driven Retrospective

---

### Goal Stability Rule

Once a Goal Cycle is active, primary goals are locked and cannot be changed, replaced, or expanded by any party. Secondary goals can be deprioritized but not elevated to primary mid-cycle. The only exceptions are through the Emergency Cycle Protocol or by the cycle completing and new Smart Planning establishing new goals.

**Related:** Goal Cycle, Goal Drift, Emergency Cycle Protocol, Scope Flexibility Rule, Smart Planning Session

---

## H

### Heroics

A pattern where delivery is achieved through exceptional individual effort (working nights, weekends) rather than sustainable process. GOAL explicitly rejects heroics. WIP limits, task sizing rules, and cycle extensions exist to prevent heroics-necessary situations. A team consistently needing heroics has a calibration problem, not a commitment problem.

**Related:** Sustainability Principle, Burnout, Cognitive Load, WIP Limits, Cycle Accuracy Index

---

## I

### Interrupt Management Protocol

GOAL's formal system for handling all incoming requests not already in the backlog. Classifies work into three priority levels: **P1** (production incident, immediate Expedite), **P2** (urgent business request, evaluated jointly, may enter Expedite), **P3** (disguised normal request, added to backlog with normal priority). All requests logged in an interrupt log regardless of outcome.

**Related:** P1 Interrupt, P2 Interrupt, P3 Interrupt, Expedite Lane, Flow Master, Product Strategist, Goal Stability Rule

---

### Invisible Work

Anti-pattern where team members perform work not on the Flow Board — support requests, ad-hoc debugging, unscheduled meetings. Invisible work corrupts all flow metrics while making the team appear to have more capacity than it does. GOAL rule: all work goes on the board. There is no minimum size for a task card.

**Related:** Flow Board, WIP Limits, Cognitive Load, Anti-Pattern, Flow Metrics Dashboard

---

## L

### Lead Time

Total elapsed time from when a work item is requested until it is delivered to the end user. GOAL uses "Flow Time" as its primary elapsed-time metric (from Ready state to Done). Flow Time is a subset of full Lead Time.

**Related:** Flow Time, Cycle Time, Wait Time, DORA Metrics

---

### Little's Law

A theorem from queueing theory: average WIP = Throughput × average Cycle Time. Proves that for a given throughput, reducing WIP reduces cycle time. Provides the mathematical foundation for GOAL's WIP limit policy.

**Related:** WIP Limits, Throughput, Cycle Time, Flow, Queueing Theory, Focus Factor

---

## M

### Manifesto

Five foundational value statements guiding all GOAL decisions: **Goals over Backlogs** (commit to outcomes, not task lists), **Flow over Velocity** (measure how work moves), **Data over Estimates** (use historical flow data), **Delivery over Activity** (progress means delivered value), **Adaptation over Commitment Locking** (plans evolve; goals persist).

**Related:** Core Principles, Agile Manifesto, Velocity (replaced), Story Points (replaced)

---

## P

### P1 Interrupt

A production incident where the live system is actively failing for real users. Receives immediate entry to the Expedite Lane with verbal Flow Master approval (formal documentation within 2 hours). Maximum resolution time: 24 hours before escalation to an incident commander.

**Related:** Interrupt Management Protocol, Expedite Lane, P2 Interrupt, P3 Interrupt, Emergency Cycle Protocol

---

### P2 Interrupt

An urgent business request with no production failure but a concrete, documented business impact within 1–5 days. Test: "Is the cost of waiting until the next cycle greater than the cost of interrupting the current cycle?" If yes, enters Expedite with joint approval. If no, enters backlog prioritized for the next cycle.

**Related:** Interrupt Management Protocol, P1 Interrupt, P3 Interrupt, Expedite Lane, Product Strategist, Flow Master

---

### P3 Interrupt

A disguised normal request — framed as urgent but without documented business impact. Receives backlog placement with normal priority and a stakeholder communication explaining the next cycle timeline. All P3 decisions are logged in the interrupt log.

**Related:** Interrupt Management Protocol, P1 Interrupt, P2 Interrupt, Flow Master, Product Strategist

---

### Product Strategist

The GOAL role responsible for the value direction of the team. Defines what the team should achieve (goals), not how. Manages the product backlog, measures value delivered, and serves as the interface between the Delivery Team and stakeholders. Key constraint: cannot change primary goals during an active cycle.

**Related:** Product Owner (replaced), Backlog, Goal Cycle Plan, 3-Layer Value Framework, Backlog Grooming Session
**Replaces:** Product Owner (Scrum) — same territory, additional responsibilities

---

### Program Board

A multi-team artifact providing a single visual view of all teams' current Goal Cycles with cross-team dependencies drawn as explicit connections. Rows = teams; Columns = weeks. Dependency connectors color-coded: Gray = identified, Blue = active and on track, Amber = at risk, Red = blocked.

**Related:** Program Flow Master, Dependency Register, Program Sync, Multi-Team GOAL, Cross-Team Cycle Plan

---

### Program Flow Master

The multi-team GOAL role responsible for the health of work flowing across team boundaries. Core responsibilities: maintain the Dependency Register daily, facilitate Program Sync and Cross-Team Dependency Review, escalate cross-team blockers unresolved after 24 hours, track program-level metrics. Success metric: Cross-Team Block Rate below 15%, average dependency resolution time under 2 working days.

**Related:** Flow Master, Dependency Register, Program Board, Program Sync, Cross-Team Block Rate

---

### Program Strategist

The multi-team GOAL role responsible for strategic alignment of goals across teams. Defines Program Goals; individual Product Strategists translate these into team-level goals. Cannot change individual team goals mid-cycle. Key constraint: defines direction but does not decompose goals into tasks.

**Related:** Product Strategist, Program Goals, Cross-Team Cycle Plan, Program Sync, Program Retrospective

---

## Q

### Queueing Theory

A branch of mathematics studying how items wait in queues and move through service systems. Core insight for software: as utilization approaches 100%, queue lengths grow non-linearly. GOAL's WIP limit policy is directly grounded in queueing theory — limits are set below full utilization (Focus Factor 0.6–0.8) to prevent queue congestion.

**Related:** WIP Limits, Little's Law, Flow, Throughput, Focus Factor, Flow Efficiency

---

## R

### Ready State

A backlog item status meaning the item is fully prepared for execution. The ready-to-execute definition requires: a clear outcome description, Acceptance Criteria in complete Given/When/Then form, a size estimate (S/M/L), and no unresolved blocking dependencies.

**Related:** Backlog Item States, Acceptance Criteria, Task Size, Backlog Grooming Session, Backlog Health Standard

---

## S

### S/M/L Task Sizing

GOAL's task sizing system that replaces story points. Based on expected delivery time: **Small** = deliverable in 1 day; **Medium** = 2–3 days; **Large** = must be split before entering In Progress. Large is a planning artifact, not a deliverable.

**Related:** Story Points (replaced), Task Size, Batch Size, Flow Board, Backlog Grooming Session, Continuous Delivery
**Replaces:** Story Points (Scrum) for planning and capacity estimation

---

### Scope Flexibility Rule

Within a Goal Cycle, tasks can be added, removed, modified, or replaced at any time — but only when they serve current primary goals and do not introduce new scope beyond them. The complement to the Goal Stability Rule. Together they define GOAL's contract: "goals are fixed, tasks are free."

**Related:** Goal Stability Rule, Goal Cycle Plan, Anti-Pattern (Scrum-Washing), Flow Master

---

### Smart Planning Session

The GOAL event held at the start of every Goal Cycle. Duration: 30–60 minutes. Produces a Goal Cycle Plan with defined outcomes, an estimated duration, and a confirmed WIP limit. Explicitly does not include: story point estimation, hour-level task breakdown, or pre-assigning tasks to developers.

**Related:** Goal Cycle Plan, Cycle Accuracy Index, WIP Limits, Product Strategist, Flow Master, Backlog Health Standard
**Replaces:** Sprint Planning (Scrum) — shorter, goal-focused, without story point estimation

---

### Story Points

Removed from GOAL. GOAL identifies four structural problems: inflation over time, non-comparability between teams, the precision illusion of planning poker, and velocity becoming a corrupted target. Replaced by S/M/L sizing and the Cycle Accuracy Index.

**Related:** S/M/L Task Sizing (replaces), Velocity (replaced), Cycle Accuracy Index, Flow Efficiency
**Replaced by:** S/M/L Task Sizing (GOAL)

---

### Sustainability Principle

One of GOAL's eight Core Principles. Consistent delivery over time is more valuable than burst output followed by burnout. Manifests in WIP limits, the 3-day task size rule, the Interrupt Management Protocol, the Technical Debt allocation, and cycle extensions as the accepted response to underestimation.

**Related:** Burnout, Cognitive Load, WIP Limits, Technical Debt Allocation, Heroics, Focus Factor

---

## T

### Task Card

The unit of work on the Flow Board. Required fields: task name, size (S/M/L), owner, date entered current column, and the goal it serves. Each field serves a specific function: size enables WIP management; owner enables escalation routing; date entered enables aging indicator calculation; goal link enables scope policing.

**Related:** Flow Board, Definition of Done, Aging Indicator, WIP Limits, Blocked State, Goal Cycle Plan

---

### Technical Debt

The accumulated cost of past shortcuts, suboptimal implementations, and deferred refactoring. GOAL treats it as first-class work with a dedicated Technical Debt lane. Each cycle allocates 10–20% of team capacity to debt reduction (minimum 10%, standard 15%). Debt tasks are sized S/M/L and must pass the full Definition of Done.

**Related:** Technical Value, Technical Debt Lane, Definition of Done, Flow Board, S/M/L Task Sizing, Continuous Delivery

---

### 3-Layer Value Framework

GOAL's model for defining and measuring delivered value. **Layer 1 — Business Value:** directly affects KPIs (revenue, churn, cost, compliance). **Layer 2 — User Value:** improves user experience (friction reduction, new capability, performance). **Layer 3 — Technical Value:** improves future delivery capability (test coverage, refactoring, incident probability reduction). Goals are tagged at Smart Planning and evidenced at Goal Review.

**Related:** Product Strategist, Goal Review, Goal Cycle Plan, Smart Planning Session, Cycle Accuracy Index

---

### Throughput

The rate at which a system produces completed outputs over time. GOAL measures throughput through the Delivery Rate metric. Success metric for the Delivery Team: **Throughput Stability** — a consistent Delivery Rate cycle over cycle.

**Related:** Delivery Rate, Little's Law, Flow Efficiency, Cycle Time, WIP Limits

---

### Trunk-Based Development

All developers integrate to a single shared branch ("main") at least once per day. Long-lived feature branches avoided. When incomplete features need to be merged without being visible to users, feature flags gate the functionality. GOAL's preferred integration model.

**Related:** Feature Flags, Continuous Delivery, Batch Size, Definition of Done

---

## V

### Validation Column

The Flow Board state where code review is complete and the implementation is being tested in a staging/QA environment (not locally). A distinct state from Code Review because QA queue time should be visible in flow metrics separately. A task code-reviewed but not validated in staging cannot move to Done.

**Related:** Flow Board, Definition of Done, Code Review, Flow Time, Flow Efficiency

---

### Velocity

Removed from GOAL. Three structural problems: points inflate over time (non-comparable history), velocity becomes a target corrupting it as a measurement (Goodhart's Law), and points are non-comparable between teams. Replaced by Cycle Accuracy Index and Delivery Rate trend.

**Related:** Story Points (replaced), Cycle Accuracy Index, Delivery Rate, Flow Efficiency, Throughput
**Replaced by:** Cycle Accuracy Index + Delivery Rate trend (GOAL)

---

## W

### Wait Time

Time a task spends in the system without active work being performed. Computed as: `Flow Time − Cycle Time`. Accumulates in the Ready queue, while waiting for code review, for QA capacity, or for business decisions. GOAL treats wait time reduction as the primary improvement lever in flow systems.

**Related:** Flow Time, Cycle Time, Flow Efficiency, Little's Law

---

### WIP Limits

Work-in-Progress Limits define the maximum number of tasks that can be in active states (In Progress, Code Review, Validation) simultaneously. Formula: `Team Size × Focus Factor`. Enforced by the Flow Master at all times. Mathematical foundation: Little's Law — keeping WIP low is the primary lever for improving cycle time.

**Related:** Focus Factor, Focus Ratio, Little's Law, Flow Master, Queueing Theory

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
