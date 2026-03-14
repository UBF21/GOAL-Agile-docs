---
id: okr-integration
title: OKR Integration Guide
sidebar_position: 17
description: How to connect organizational OKRs to GOAL cycle-level execution, from quarterly planning to goal review and KR tracking.
---

## Table of Contents

1. [OKR Fundamentals](#1-okr-fundamentals)
2. [The GOAL-OKR Connection Model](#2-the-goal-okr-connection-model)
3. [OKR-to-Goal Translation Process](#3-okr-to-goal-translation-process)
4. [Quarterly Planning in GOAL](#4-quarterly-planning-in-goal)
5. [OKR Health Check within GOAL](#5-okr-health-check-within-goal)
6. [When GOAL Goals Conflict with OKRs](#6-when-goal-goals-conflict-with-okrs)
7. [Metrics Alignment — OKRs Meet Flow Metrics](#7-metrics-alignment--okrs-meet-flow-metrics)
8. [OKR Anti-Patterns That GOAL Helps Prevent](#8-okr-anti-patterns-that-goal-helps-prevent)
9. [Team OKR Setting Workshop](#9-team-okr-setting-workshop)
10. [Product Strategist as OKR Owner](#10-product-strategist-as-okr-owner)
11. [GOAL Without OKRs](#11-goal-without-okrs)
12. [OKR Integration for Scaled Teams](#12-okr-integration-for-scaled-teams)

---

## 1. OKR Fundamentals

### 1.1 What OKRs Are

OKRs (Objectives and Key Results) are a goal-setting framework used by organizations to define and track ambitious outcomes. The structure is simple but deliberately demanding:

- **Objective:** A qualitative statement describing *where you want to go*. It should be inspiring, directional, and time-bound. Objectives answer: "What does success look like?"
- **Key Results:** A set of 2–5 quantitative measures that define *how you will know you got there*. Key Results answer: "How will we know the Objective was achieved?"

**The fundamental contract of an OKR:**

> If all Key Results are achieved, the Objective is achieved. If the Objective was achieved but the Key Results were not, the Objective was not well defined.

**Example:**

```
Objective:  Become the trusted payment platform for mid-market e-commerce
Key Result 1:  Increase gross payment volume from $12M to $20M/month
Key Result 2:  Reduce payment failure rate from 4.2% to below 1.5%
Key Result 3:  Achieve NPS score of 45+ among merchants processing > $50K/month
Key Result 4:  Onboard 3 enterprise partners via direct integration
```

OKRs are not a task list. They describe the outcome, not the method. The path to achieving a Key Result is the domain of teams and their execution frameworks — which is exactly where GOAL operates.

---

### 1.2 The OKR Cascade: Annual → Quarterly → Cycle

Organizations typically use OKRs at multiple levels of the hierarchy, each nested inside the one above it.

**Annual OKRs** (set by executive leadership)

Annual OKRs define the organization's strategic direction for the year. They are high-level, bold, and represent the company's most important bets. Annual OKRs are stable — they should not change mid-year unless the business context changes fundamentally.

**Quarterly OKRs** (set by business units and departments)

Quarterly OKRs break the annual objectives into 90-day chunks. They answer: "What must we achieve this quarter to be on track for the annual OKR?" Quarterly OKRs are the primary alignment layer for product and engineering teams.

**Cycle Goals** (set by teams using GOAL)

Each GOAL cycle's primary goals are derived from the team's quarterly OKRs. A cycle goal is the execution unit — the concrete piece of work the team will deliver in the next 1–3 weeks that contributes measurably to a Key Result.

**The cascade in practice:**

```
Annual OKR (Company)
  └── Q1 OKR (Department / Business Unit)
        └── Q1 Team OKR
              ├── Cycle 1 Primary Goal   →  Tasks
              ├── Cycle 2 Primary Goal   →  Tasks
              ├── Cycle 3 Primary Goal   →  Tasks
              └── Cycle 4 Primary Goal   →  Tasks
```

Each level contains and constrains the one below it. A cycle goal that cannot be traced upward to a quarterly Key Result is a candidate for deferral or removal.

---

### 1.3 Why OKRs Alone Fail Without an Execution Framework

OKRs have a well-documented implementation problem: organizations adopt them enthusiastically at the strategic level but never build the execution bridge that connects objectives to daily work.

The most common failure modes are:

**The OKR shelf problem**
OKRs are written in January, presented in an all-hands meeting, and then effectively ignored until the end-of-quarter scoring session. There is no mechanism connecting the OKR to what teams actually prioritize week to week.

**The activity trap**
Teams reinterpret OKRs as task lists. Key Results become things like "Launch feature X" rather than "Reduce checkout abandonment by 30%." The team delivers the feature but never validates whether the outcome was achieved.

**The alignment gap**
Individual teams do not know which of their potential backlogs items actually move the needle on Key Results. Everything feels equally important because the strategic filter is missing.

**The measurement vacuum**
OKRs require regular progress tracking, but most teams lack the operational data to answer "are we on track?" at a Key Result level. Without execution metrics, OKR reviews become subjective estimates.

**GOAL fills this gap directly.** GOAL provides:
- A planning structure that explicitly connects cycle goals to Key Results
- Flow metrics that can serve as leading indicators of KR progress
- A cadence (Quarterly Planning + Goal Review) that validates KR progress at regular intervals
- A Product Strategist role with explicit accountability for KR tracking

---

## 2. The GOAL-OKR Connection Model

### 2.1 How Company OKRs Cascade to Team OKRs

Company OKRs are owned by the executive team. They are translated into department or business unit OKRs, which are then translated into team-level OKRs during quarterly planning.

The translation process at each level asks:
1. Which of our team's capabilities most directly affects the Key Result above us?
2. What specific outcome can our team commit to this quarter that would move that Key Result?
3. Is that outcome measurable with data we have access to?

**Key principle:** Team OKRs should be *derived from*, not *parallel to*, company OKRs. A team OKR that cannot trace to a company KR either represents work that is not currently strategic, or signals a gap in company strategy alignment.

---

### 2.2 How Team OKRs Generate Goal Cycle Goals

A team's quarterly OKRs define the outcomes expected over 3 months. Goal Cycles are the execution units within those 3 months — typically 4–6 cycles per quarter depending on cycle length.

Each Goal Cycle's primary goal should:
- Contribute measurably to at least one team Key Result
- Be completable within the cycle's time estimate (1–3 weeks)
- Be specific enough that the team can determine after the cycle whether the goal was achieved

**The connection rule:**

> Every primary goal in a Goal Cycle Plan must map to at least one active team Key Result. If no mapping exists, the goal must be justified as a secondary goal or deferred.

This is not bureaucracy — it is a filter that prevents the accumulation of work that feels productive but doesn't move the organization forward.

---

### 2.3 The Goal Cascade Diagram

The following shows the complete structure from company strategy to individual tasks:

```
COMPANY LEVEL
┌─────────────────────────────────────────────────────────────┐
│  Company OKR (Annual)                                        │
│  Objective: Become the #1 SMB accounting platform in LATAM  │
│  KR1: Reach 50,000 active paying SMB users by December      │
│  KR2: Achieve <2% monthly churn                             │
│  KR3: NPS > 50 among users active for 3+ months            │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
DEPARTMENT LEVEL
┌─────────────────────────────────────────────────────────────┐
│  Q2 Department OKR (Product & Engineering)                   │
│  Objective: Remove friction from the user activation funnel  │
│  KR1: Increase trial-to-paid conversion from 18% to 28%     │
│  KR2: Reduce time-to-first-value from 9 days to 4 days      │
│  KR3: Reduce support tickets in first 30 days by 40%        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
TEAM LEVEL
┌─────────────────────────────────────────────────────────────┐
│  Q2 Team OKR (Onboarding Squad)                              │
│  Objective: Make first-week activation effortless            │
│  KR1: Complete guided setup flow for 70% of new users        │
│  KR2: Reduce onboarding drop-off at step 3 from 52% to 20%  │
│  KR3: Connect first bank account within 10 min for 60% users │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
GOAL CYCLE LEVEL
┌─────────────────────────────────────────────────────────────┐
│  Cycle 1 Primary Goal (Week 1–2 of Q2)                       │
│  "Redesign step 3 of onboarding to reduce field count        │
│   from 12 to 5 and add progress indicator"                   │
│  → Contributes to: Team KR2 (reduce step 3 drop-off)        │
└────────────────────────┬────────────────────────────────────┘
                         │
                         ▼
TASK LEVEL
┌─────────────────────────────────────────────────────────────┐
│  Tasks in Cycle 1:                                           │
│  ├── [S] Update onboarding form schema (remove 7 fields)     │
│  ├── [M] Build progress indicator component (steps 1–5)      │
│  ├── [S] Update validation rules for simplified form         │
│  ├── [S] A/B test flag setup (old vs new flow)               │
│  └── [M] Analytics events for step 3 drop-off tracking      │
└─────────────────────────────────────────────────────────────┘
```

---

### 2.4 Visual Model with Example

**Scenario:** A SaaS company's engineering team in Q3.

```
Company Annual KR:  "Grow ARR from $4M to $7M by year-end"
         │
         ▼
Q3 Department KR:  "Improve feature adoption rate to drive expansion revenue"
         │
         ▼
Team Q3 KR:        "Increase users using 3+ features from 31% to 55%"
         │
         ├─── Cycle 4 Goal:  "Deliver in-app feature discovery tour"
         │         └── Tasks: tour script, UI overlays, skip logic, analytics
         │
         ├─── Cycle 5 Goal:  "Launch feature usage digest email (weekly)"
         │         └── Tasks: email template, send trigger, preference center
         │
         └─── Cycle 6 Goal:  "Add contextual feature suggestions on dashboard"
                   └── Tasks: recommendation engine, UI card, A/B test setup
```

Each cycle goal is a coherent deliverable. Each traces directly to the KR. The KR is tracked quarterly — the cycles are how the team makes progress on it.

---

## 3. OKR-to-Goal Translation Process

### 3.1 Step-by-Step: From a Key Result to a Cycle Goal

Translating a Key Result into cycle-level goals is a deliberate process, not a direct copy-paste. The following steps describe how to do it correctly.

**Step 1 — Understand the Key Result completely**

Before generating goals, ensure the team understands:
- What is being measured? (the metric)
- What is the current baseline? (starting point)
- What is the target? (end point)
- Why does this KR matter strategically?

A Key Result that the team does not fully understand will generate misaligned goals.

**Step 2 — Identify the primary driver(s) of the metric**

Ask: "What changes in our product or system would most directly cause this metric to move?"

Use whatever data you have — analytics, user research, support tickets, A/B test results. You are looking for the highest-leverage intervention.

**Step 3 — Generate candidate cycle goals**

For each driver, write a candidate cycle goal in the form:
> "[Verb] [specific change] to [measurable expected effect]"

Examples:
- "Rebuild checkout flow to reduce payment step count from 5 to 2"
- "Add real-time error validation to sign-up form to reduce submission failures"

**Step 4 — Validate feasibility**

With the Delivery Team, size the candidate goals:
- Can this be done in 1–3 cycles?
- Are there unresolved dependencies?
- Does it require capacity the team currently has?

**Step 5 — Sequence across the quarter**

Order the cycle goals by:
1. Dependencies (which must come first?)
2. Learning value (what will teach us whether we're on the right track?)
3. Impact size (what moves the needle most?)

**Step 6 — Map each cycle goal to its KR explicitly**

The Goal Cycle Plan must include, for every primary goal:

```
Cycle Goal:    [description]
Contributes to KR: [KR name and number]
Expected KR contribution:  [quantified if possible, or hypothesis if not]
Measurement date: [when will we observe the KR impact?]
```

---

### 3.2 When One Key Result Generates Multiple Cycles

Many Key Results require several cycles to achieve because the change needed is too large for a single cycle or because the team needs to learn iteratively.

**When to split a KR into multiple cycles:**

- The total implementation effort exceeds 3 weeks
- Multiple independent components must be built before the outcome can be measured
- The team has low confidence in the approach and wants to validate before committing to the full build
- There is a dependency between parts (part 2 cannot start without part 1's output)

**Example:**

```
KR: Reduce API response time from 800ms to 200ms for 95th percentile requests

Cycle 1 Goal:  Profile and identify the top 5 slowest endpoints
               (diagnostic — generates the data needed for Cycles 2–3)

Cycle 2 Goal:  Optimize the 3 highest-traffic slow endpoints
               (implementation — expected to move p95 to ~450ms)

Cycle 3 Goal:  Implement caching layer for remaining slow endpoints
               (implementation — expected to reach the 200ms target)
```

In this structure, Cycles 1–3 all map to the same KR. The Product Strategist tracks the cumulative KR progress across all three cycles.

---

### 3.3 When One Cycle Contributes to Multiple Key Results

A single cycle goal can sometimes move more than one Key Result simultaneously. This is efficient but requires careful tracking so the contribution to each KR is measured separately.

**Example:**

```
Cycle Goal:  Redesign the mobile checkout experience

Contributes to:
  KR1 (reduce cart abandonment from 68% to 45%) → primary contribution
  KR3 (increase mobile revenue share from 22% to 35%) → secondary contribution
  KR4 (improve app store rating from 3.8 to 4.4) → tertiary contribution
```

When a goal contributes to multiple KRs, the Product Strategist must:
1. Identify which KR is the *primary* driver of the goal's prioritization
2. Track contribution to each KR separately at Goal Review
3. Avoid double-counting KR progress in reporting

---

### 3.4 Translation Examples Across Different Company Types

The following examples illustrate how Key Results from different industries and company contexts translate into GOAL cycle goals.

**Example 1 — B2B SaaS (Sales productivity tool)**
```
KR:   Increase feature adoption rate from 23% to 45% among enterprise accounts
Cycle Goal:   Build in-app contextual help system for the 3 most-used underadopted features
```

**Example 2 — E-commerce platform**
```
KR:   Reduce checkout abandonment rate from 71% to 55%
Cycle Goal:   Implement guest checkout (no account required) with order tracking by email
```

**Example 3 — Fintech (digital bank)**
```
KR:   Reduce KYC (identity verification) failure rate from 18% to 6%
Cycle Goal:   Integrate AI-assisted document quality check before submission to KYC provider
```

**Example 4 — Health tech (patient scheduling)**
```
KR:   Reduce no-show rate from 34% to 15%
Cycle Goal:   Build automated 24h reminder flow with one-click confirmation and rescheduling
```

**Example 5 — Developer tools (API platform)**
```
KR:   Increase time-to-first-API-call for new developers from 2 hours to under 20 minutes
Cycle Goal:   Rebuild onboarding quickstart guide with live interactive code examples
```

**Example 6 — Internal platform team (infrastructure)**
```
KR:   Reduce CI/CD pipeline average time from 28 minutes to under 10 minutes
Cycle Goal:   Implement parallel test execution and Docker layer caching across all services
```

**Example 7 — Mobile app (fitness)**
```
KR:   Increase D30 retention from 19% to 32%
Cycle Goal:   Build streak system and personalized weekly goal summary notification
```

**Example 8 — Marketplace (two-sided)**
```
KR:   Increase seller activation rate (first listing within 7 days) from 38% to 62%
Cycle Goal:   Create step-by-step AI-assisted listing creation flow with image recognition
```

**Example 9 — EdTech (corporate learning)**
```
KR:   Increase course completion rate from 41% to 65%
Cycle Goal:   Implement adaptive lesson sequencing based on quiz performance data
```

**Example 10 — Enterprise SaaS (HR platform)**
```
KR:   Reduce average time to complete onboarding for new hires from 11 days to 3 days
Cycle Goal:   Build manager dashboard to track and nudge onboarding task completion in real time
```

**Example 11 — Gaming (casual mobile)**
```
KR:   Increase average session length from 4.2 min to 7 min
Cycle Goal:   Design and ship "daily challenge" mode with social leaderboard
```

**Example 12 — SaaS (reporting tool)**
```
KR:   Reduce churn from premium tier from 6.4%/month to 2.5%/month
Cycle Goal:   Build automated "value digest" email with user's top 3 insights from the past week
```

---

## 4. Quarterly Planning in GOAL

### 4.1 The Layer Above Cycles

GOAL operates primarily at the cycle level — but cycles exist within a quarter. Without a quarterly planning layer, cycles are well-executed but may not be well-sequenced toward quarterly OKR achievement.

The GOAL Quarterly Planning event is the bridge between the organization's OKR layer and the team's cycle execution layer. It does not replace the OKR-setting process (which happens at the organization level). It translates the team's quarterly OKRs into a high-confidence cycle roadmap for the quarter.

---

### 4.2 GOAL Quarterly Planning Event Format

**Purpose:** Translate the team's quarterly OKRs into a sequenced set of cycle goals with confidence ratings, dependencies mapped, and capacity allocated.

**Duration:** 2–3 hours

**When it happens:** During the week before the quarter begins, or in the first week of the new quarter before the first cycle starts.

**Participants:** Product Strategist (required), Flow Master (required), Delivery Team leads or senior members (1–2, optional but recommended), direct leadership stakeholder (30-min participation at the start, for OKR briefing)

**Preparation required (before the meeting):**

```
Product Strategist prepares:
  □ Confirmed Q[n] team OKRs with targets and baselines
  □ Last quarter's OKR performance summary (what was achieved, what was not)
  □ Backlog snapshot: which items map to each KR
  □ Known dependencies and external risks for the quarter
  □ Any committed dates or external obligations in the quarter

Flow Master prepares:
  □ Last quarter's Cycle Accuracy Index data
  □ Average cycle duration for the team (last 5 cycles)
  □ Team capacity estimate (holidays, planned leave, known interruptions)
  □ WIP limit baseline from previous quarter
```

**Session agenda:**

```
PART 1 — Strategic context (30 min)
  Leadership stakeholder joins for this segment

  1.1  Company and department OKR briefing (15 min)
       Leadership presents the quarter's company and department OKRs
       Team asks clarifying questions
       Critical: understand WHY each OKR matters, not just what it says

  1.2  Team OKR confirmation (15 min)
       Confirm team OKRs are correctly derived from department OKRs
       Identify any misalignments before the quarter begins
       Confirm which KRs the team owns vs. contributes to
       Leadership stakeholder leaves after this segment

PART 2 — Capacity reality check (20 min)
  2.1  Cycle capacity estimate
       How many cycles can realistically fit in this quarter?
       Formula: Quarter working days ÷ Average cycle duration
       Adjust for holidays, planned leave, known interruptions

  2.2  Historical performance calibration
       What was last quarter's Cycle Accuracy Index?
       Are there patterns of underestimation we should correct?

  2.3  Interrupt capacity reservation
       Based on last quarter's interrupt data, reserve estimated capacity
       Typical range: 10–20% of quarter capacity

PART 3 — Cycle goal generation (60 min)
  For each team KR:

  3.1  Identify the primary delivery drivers
       What does the team need to build/change for this KR to move?
       Generate candidate cycle goals (3–5 per KR)

  3.2  Size each candidate goal
       Small (1-cycle), Medium (1–2 cycles), or Large (needs splitting)

  3.3  Map dependencies
       Which goals must precede others?
       Which goals have external dependencies?

  3.4  Assign confidence levels (see Section 4.4)
       How confident is the team that this goal, if completed, will move the KR?

PART 4 — Quarter roadmap construction (30 min)
  4.1  Sequence cycle goals across the quarter
       Place goals in a logical order respecting dependencies and learning sequence
       Assign each goal to a rough cycle slot (Cycle 1, 2, 3, etc.)

  4.2  Validate coverage
       Do the mapped cycle goals, if completed, give the team a realistic path to each KR?
       Are there gaps where a KR has no execution coverage?

  4.3  Identify risks
       Which goals have the highest uncertainty?
       Which KRs are most at risk if a cycle extends?

PART 5 — Output and communication (20 min)
  5.1  Document the Quarterly Cycle Roadmap (see Section 4.3)
  5.2  Identify what will be shared with leadership and when
  5.3  Confirm first cycle start date and Smart Planning Session time
```

---

### 4.3 Output: Quarterly Cycle Roadmap

The output of the Quarterly Planning session is a Quarterly Cycle Roadmap — a living document that maps cycle goals to KRs for the quarter.

**Format:**

```
Quarter: Q[n] [Year]
Team: [Team name]
Quarter OKRs:
  Objective: [Objective text]
  KR1: [KR text] | Baseline: [X] | Target: [Y]
  KR2: [KR text] | Baseline: [X] | Target: [Y]
  KR3: [KR text] | Baseline: [X] | Target: [Y]

Capacity estimate:
  Estimated cycles in quarter: [N]
  Capacity reserved for interrupts: [%]
  Net planned cycles: [N - interrupt reserve]

Cycle roadmap:

  Cycle 1 (est. [date range])
    Primary Goal: [description]
    Maps to KR: [KR number]
    Confidence: [High / Medium / Low]
    Key dependency: [if any]

  Cycle 2 (est. [date range])
    Primary Goal: [description]
    Maps to KR: [KR number]
    Confidence: [High / Medium / Low]
    Key dependency: [if any]

  [... additional cycles ...]

  Buffer cycle (est. [date range])
    Purpose: Absorb extensions, catch-up, unplanned strategic work
    Not pre-assigned to a specific goal

KR coverage check:
  KR1: covered by Cycles [1, 3]
  KR2: covered by Cycles [2, 4]
  KR3: covered by Cycles [3, 5]

Quarter risks:
  [Risk 1]: [description and mitigation]
  [Risk 2]: [description and mitigation]
```

---

### 4.4 How to Handle Uncertainty: Confidence Levels

Not all cycle goals are equally certain. Some represent well-understood work with clear paths. Others represent bets that depend on technical unknowns or market hypotheses.

GOAL uses a three-level confidence rating for cycle goals in the Quarterly Roadmap:

**High Confidence**
```
Definition:   The team has clear understanding of what needs to be built,
              the technical path is known, and there is evidence this change
              will move the KR.
Evidence:     Previous similar work done, user research validated,
              technical spike completed.
Planning:     Cycle duration estimates are reliable. Commit with confidence.
```

**Medium Confidence**
```
Definition:   The goal is directionally clear, but there is meaningful uncertainty
              about scope, technical approach, or KR impact.
Evidence:     Hypothesis supported by partial data. Some unknowns remain.
Planning:     Add a buffer day to cycle estimate. Plan a validation checkpoint
              at mid-cycle. Be prepared for the goal to expand or contract.
```

**Low Confidence**
```
Definition:   The goal represents a significant unknown — a new technology,
              an untested user behavior hypothesis, or a complex dependency.
Evidence:     Minimal. The cycle is itself a learning exercise.
Planning:     Consider splitting: first cycle is diagnostic (research, spike,
              prototype), second cycle is delivery (once the path is known).
              Do not commit this goal to a fixed deadline externally.
```

---

## 5. OKR Health Check within GOAL

### 5.1 The Problem: OKRs That Nobody Checks

One of the most common OKR failure modes is the organization that sets OKRs at the start of the quarter and checks them only at the end — too late to course-correct. GOAL's cadence creates natural checkpoints where KR progress can be assessed and acted upon.

---

### 5.2 Are Our Cycle Goals Actually Moving the KR Needle?

At every Goal Review, the Product Strategist evaluates not just whether the cycle goal was completed, but whether completing it is contributing to the intended Key Result.

**The OKR contribution check (added to the Goal Review agenda):**

```
For each completed primary goal:

  1. Was the goal completed and does it meet the DoD?
     → Yes / Partial / No

  2. KR contribution check:
     → What was the expected KR contribution when this goal was planned?
     → What is the observed KR movement since this goal was delivered?
     → If there is a measurement lag: when will we observe the impact?
       (and set a specific follow-up date)

  3. Is the KR on track?
     → Current KR value: [X]
     → Required progress by quarter end at current rate: [Y]
     → Assessment: On Track / At Risk / Off Track
```

**Assessment thresholds:**

```
On Track:   Current KR progress pace, if maintained, would reach the target by quarter end.

At Risk:    Current pace is insufficient, but there are remaining cycle goals that could
            close the gap if delivered as planned.

Off Track:  Even if all remaining planned cycle goals are delivered perfectly, the KR
            target is unlikely to be reached. Action required.
```

---

### 5.3 How to Validate KR Progress at Each Goal Review

Some Key Results update in near-real-time (product metrics visible in dashboards). Others require more intentional measurement. The Product Strategist must know, for each KR, how and when it is measured.

**KR measurement classification:**

```
Type A — Real-time observable
  The KR metric is tracked in an analytics system updated daily or weekly.
  Examples: conversion rate, churn rate, active users, revenue
  → Check at every Goal Review. Trend is immediately visible.

Type B — Lagged metric
  The KR metric requires user behavior over time to manifest.
  Examples: D30 retention, NPS, feature adoption after 2 weeks of use
  → Check at Goal Review with explicit acknowledgment of measurement lag.
  → Record expected observation date. Follow up in next retrospective.

Type C — Manual measurement
  The KR requires explicit data collection (survey, audit, manual count).
  Examples: support ticket analysis, user interview synthesis, manual QA audit
  → Schedule measurement activities as tasks in the cycle that delivers the relevant goal.
  → Do not defer measurement until end of quarter.
```

---

### 5.4 Mid-Quarter OKR Adjustment Protocol

If, at a Goal Review, a Key Result is assessed as Off Track, the following protocol applies:

**Step 1 — Diagnose the cause**

Is the KR off track because:
- (a) The team has not delivered enough toward it yet? (execution lag — may self-correct)
- (b) The goals delivered did not move the KR as expected? (hypothesis failure — need new approach)
- (c) The KR target was set unrealistically? (target calibration issue — needs leadership input)
- (d) External factors changed the baseline? (market shift — may require OKR revision)

**Step 2 — Choose the appropriate response**

```
Cause (a) — Execution lag:
  Reassess remaining cycle roadmap.
  Can planned cycles close the gap?
  If yes: maintain course but increase urgency signal to team.
  If no: escalate to leadership immediately (do not wait for quarter end).

Cause (b) — Hypothesis failure:
  Call an unscheduled strategy session with Product Strategist + relevant team members.
  Identify alternative drivers of the KR.
  Revise the remaining cycle goals in the Quarterly Roadmap.
  Update leadership on the pivot.

Cause (c) — Target calibration:
  Product Strategist presents the data to leadership.
  Request a formal OKR revision (typically only approved for genuinely unexpected conditions).
  Document the revision and the reason.

Cause (d) — External factors:
  Escalate to leadership immediately.
  OKR revision likely required at the department level.
  Team's cycle roadmap may need full replanning.
```

**Step 3 — Update the Quarterly Cycle Roadmap**

After any mid-quarter OKR adjustment, the Quarterly Cycle Roadmap is updated to reflect the revised plan. All remaining cycle goals are re-evaluated for their contribution to the (potentially revised) KRs.

---

## 6. When GOAL Goals Conflict with OKRs

### 6.1 Interrupt Requests That Don't Serve Any Key Result

The GOAL Interrupt Management Protocol classifies all incoming requests as P1, P2, or P3. The OKR lens adds a layer to this classification: does the interrupt serve any active Key Result?

**The OKR interrupt filter:**

```
When evaluating a P2 or P3 interrupt request, the Product Strategist asks:

  "Does this request, if completed, contribute to any of our active team KRs?"

  If YES → Standard interrupt evaluation applies (cost of waiting test, etc.)

  If NO  → Additional gate:
           "Does this request prevent significant business harm, even if it doesn't
            advance any KR?"
           → Legal/compliance/contractual obligation: Yes → P2 path
           → Pure stakeholder preference: No → P3 path, with explicit communication
             that the request does not align with current strategic priorities
```

**Communication template for non-KR interrupt requests:**

```
"We have reviewed your request for [X]. After evaluation, this request does not
 align with our team's current Key Results for Q[n]. We have added it to our
 backlog. It will be considered for prioritization during Q[n+1] quarterly planning.

 If you believe this request is strategically critical, please escalate to
 [leadership contact] with the business case so it can be considered in the context
 of our current OKRs."
```

---

### 6.2 Discovering That a Committed KR Is Unreachable Mid-Quarter

This is one of the most uncomfortable situations in OKR management — realizing mid-quarter that a committed Key Result cannot be achieved even if the team executes perfectly for the rest of the quarter.

**Signals that a KR may be unreachable:**

- Two or more cycle goals delivered as planned, but KR metric has not moved
- A critical dependency has failed (external partner, data availability, technology)
- A technical constraint was discovered that makes the planned approach impossible
- Market or product context changed (competitor action, regulatory change, user behavior shift)

**The GOAL response:**

```
Step 1 — Verify the assessment
  Do not declare a KR unreachable based on one Goal Review data point.
  Confirm: is the data clean? Is there a measurement lag that explains the gap?
  Involve the Flow Master in verifying delivery — was the goal actually completed
  to the full DoD, or only partially?

Step 2 — Escalate early, not at quarter end
  The Product Strategist must communicate the at-risk KR to leadership as soon
  as the assessment is confident.
  Rule: never let the organization be surprised at quarter-end review.

Step 3 — Present options, not just problems
  When escalating, the Product Strategist brings:
  (a) The current KR status and why the target is unreachable
  (b) What has been achieved so far (partial progress is real progress)
  (c) 2–3 options for the remainder of the quarter:
      Option 1: Redirect remaining cycle capacity to a different KR where
                progress is achievable
      Option 2: Redefine the KR target to a still-ambitious but achievable level
                (requires leadership approval)
      Option 3: Accept the miss and document the learning (why was the KR wrong,
                what will we do differently?)

Step 4 — Update the cycle roadmap
  After the decision is made, update the Quarterly Cycle Roadmap.
  Re-assign remaining cycles to revised goals.
```

---

### 6.3 When Business Reality Changes the OKR Landscape

Occasionally, the strategic context changes so significantly mid-quarter that the team's OKRs are no longer the right OKRs. This is distinct from normal execution challenges — it is a strategic realignment signal.

**Examples of business reality changes:**

- A major competitor launches a product that directly threatens the company's market position
- A new regulatory requirement creates an urgent compliance deadline
- A significant partnership opportunity emerges with a narrow acceptance window
- A product experiment fails so definitively that the strategic hypothesis behind the OKR collapses
- A key customer segment turns out to have fundamentally different needs than assumed

**The GOAL response for strategic realignment:**

This is the equivalent of the Goal Cycle's Emergency Cycle Protocol, but at the quarter level.

```
1. Leadership calls an emergency OKR review (not the team's responsibility to initiate,
   but the Product Strategist should flag the signal immediately)

2. Product Strategist pauses quarterly planning activities and communicates to the team
   that the cycle roadmap is under review

3. The current active Goal Cycle continues unless the Emergency Cycle Protocol triggers
   (it takes a high bar to break a running cycle — the cycle-level rules still apply)

4. New quarterly OKRs (or revised OKRs) are communicated to the team as quickly as
   possible, with the same cascade and translation process used for original OKRs

5. A Quarterly Planning session is re-run (abbreviated, 1 hour) to rebuild the
   cycle roadmap for the remainder of the quarter
```

---

## 7. Metrics Alignment — OKRs Meet Flow Metrics

### 7.1 The Two Measurement Planes

GOAL teams operate on two measurement planes simultaneously:

- **Flow metrics plane:** How efficiently is the team delivering work? (cycle time, flow efficiency, block rate, delivery rate)
- **OKR plane:** Is the work being delivered actually moving the strategic needle? (KR progress)

These two planes must be read together. A team with excellent flow metrics and stagnant KR progress is delivering the wrong things efficiently. A team with improving KR progress but deteriorating flow metrics is lucky this quarter but fragile next quarter.

---

### 7.2 How to Connect Flow Efficiency to Business Outcomes

Flow Efficiency (the percentage of a task's total lifetime spent in active work vs. waiting) is an internal process metric. It does not directly measure business value. However, it is a leading indicator of the team's capacity to deliver KR-relevant work.

**The connection:**

```
High Flow Efficiency
        │
        ▼
Shorter time from backlog to Done
        │
        ▼
More cycle goals completed per quarter
        │
        ▼
More KR contribution attempts per quarter
        │
        ▼
Higher probability of achieving KR targets
```

**Practical implication:** When a team's Flow Efficiency is low (&lt; 20%), it is not just an internal process problem — it is a KR risk. A team spending 80% of task time in queues will miss KR targets not because they made bad strategic choices, but because they could not deliver fast enough to validate their hypotheses.

**Flow Efficiency as a KR risk signal:**

```
Flow Efficiency trend at Quarterly Planning (from last quarter's data):

< 20%:   KR achievement is at structural risk from process waste.
         Before adding more cycle goals to the quarter plan, invest
         one cycle in flow improvement.

20–35%:  Manageable. Track closely. If it degrades mid-quarter,
         treat it as an OKR risk factor.

35%+:    Process is healthy enough to focus planning attention on
         goal selection rather than process optimization.
```

---

### 7.3 Delivery Rate as a Predictor of KR Achievement

Delivery Rate (tasks completed per working day) is the closest GOAL metric to a KR throughput predictor. If a team knows how many cycle goals they need to complete in a quarter and their average delivery rate, they can estimate whether the plan is feasible.

**Quarter feasibility check:**

```
Required:  N cycle goals to achieve all KRs
Typical cycle goal = 3–5 tasks of mixed sizes
Average delivery rate: D tasks/day (from last quarter's data)

Estimated days to complete all cycle goals = (N × 4) ÷ D
(using 4 as the average task count per goal — adjust to team's actual data)

Compare to: Quarter working days × (1 - interrupt capacity reserve)

If estimated days > available days: the plan is overloaded.
Reduce N, increase delivery rate investment, or revise KR targets.
```

**Delivery Rate consistency matters more than peaks:**

A team that delivers 2.5 tasks/day consistently across a quarter is more predictable than a team that delivers 5 tasks/day in good weeks and 0 in bad weeks. For KR planning purposes, use the *median* delivery rate, not the average (outliers skew the average and create overconfident plans).

---

### 7.4 Cycle Accuracy as a Quarterly Planning Input

The Cycle Accuracy Index measures the ratio of actual cycle duration to estimated cycle duration. Over time, it builds a historical record that directly informs quarterly capacity planning.

**How to use Cycle Accuracy in quarterly planning:**

```
Cycle Accuracy Index (last 5 cycles): [historical values]
Moving average: [X] (e.g., 1.35 = cycles take 35% longer than estimated)

Adjusted quarterly capacity:
  Raw estimated capacity: 12 weeks = 4 cycles × 3 weeks each
  Accuracy-adjusted capacity: 4 cycles ÷ 1.35 = ~3 effective cycles worth of output

Implication: Plan for 3 cycle goals, not 4, to avoid committing to KRs
             that require 4 cycles of delivery to achieve.
```

**Cycle Accuracy improvement as a KR dependency:**

If a team's Cycle Accuracy Index is consistently above 1.3, investing in a cycle specifically focused on reducing estimation error (through better backlog readiness, dependency mapping, and technical spiking) can unlock capacity for KR work in subsequent cycles.

---

## 8. OKR Anti-Patterns That GOAL Helps Prevent

### 8.1 KRs With No Execution Path

**The anti-pattern:**

An OKR is set with measurable Key Results, but when teams look at their backlog, there are no items that clearly connect to moving those Key Results. The KR exists as aspiration without an execution path.

**How this happens:**

- OKRs are set top-down by leadership without input from the teams who must deliver them
- The translation from strategic intent to product execution is assumed rather than designed
- Teams are too busy with existing cycles to map their work to the new OKRs

**How GOAL prevents it:**

The Quarterly Planning event forces the translation from KR to cycle goal explicitly. If a Key Result cannot generate at least one concrete cycle goal, the KR is incomplete. The Product Strategist is accountable for identifying what the team would actually build to move each KR.

The rule: **No KR without at least one cycle goal.** If you cannot identify a cycle goal, you do not yet understand your KR well enough to commit to it.

---

### 8.2 Activity-Based Key Results

**The anti-pattern:**

Key Results that measure activities rather than outcomes. Classic examples:
- "Launch the new dashboard" (output, not outcome)
- "Conduct 20 user interviews" (activity, not outcome)
- "Complete the platform migration" (activity, not outcome)

**Why this matters:**

Activity-based KRs make it possible to "achieve" a KR without creating any business value. The team ships the dashboard, achieves the KR, and later discovers that no one uses it or it did not move the metric it was supposed to improve.

**How GOAL corrects this:**

The Value Framework (3-Layer Value Framework from GOAL core) is applied at cycle goal level. Every cycle goal must be tagged to at least one value layer. When the Product Strategist attempts to tag an activity-based cycle goal:

```
Goal:  "Complete migration to new database"

Layer 1 Business Value: [pause — does this directly affect revenue, churn, cost, compliance?]
  → Not directly. It enables future delivery speed.

Layer 2 User Value: [pause — does this improve user experience?]
  → Not visible to users.

Layer 3 Technical Value: [yes — reduces deployment time by 40%, enables horizontal scaling]

Assessment: This is a technical value goal. Valid — but reframe the KR:
  Instead of: "Complete the platform migration"
  Use:        "Reduce deployment cycle time from 45 min to 15 min"
              (measurable outcome enabled by the migration)
```

This reframing discipline, applied consistently, transforms activity-based KRs into outcome-based ones.

---

### 8.3 Quarterly Theater

**The anti-pattern:**

The organization goes through the full OKR ceremony — goal-setting workshops, all-hands presentations, cascading OKR documents — but at the end of the quarter, the score is set by subjective judgment rather than data, and no actual behavior changed because of the OKRs during the quarter.

This is "quarterly theater": the performance of goal-setting without the substance.

**Symptoms:**
- Teams cannot describe their active KRs without looking them up
- OKR scores are negotiated rather than measured at end of quarter
- Retrospectives do not reference OKR performance
- New cycles begin without connecting to any KR
- Individual contributor work cannot be traced to any KR

**How GOAL prevents it:**

GOAL makes OKR connection a structural requirement at three points:

1. **At Quarterly Planning:** Cycle goals are explicitly mapped to KRs. No mapping, no commitment.
2. **At every Goal Review:** KR progress is checked and assessed as On Track / At Risk / Off Track.
3. **At Data-Driven Retrospective:** OKR trajectory is included in the retrospective data review.

When the connection between daily work and quarterly KRs is checked every 1–3 weeks, theater becomes impossible to sustain.

---

## 9. Team OKR Setting Workshop

### 9.1 Using GOAL Principles to Set Better Team OKRs

Most organizations have a defined OKR-setting process at the company and department level. The GOAL Team OKR Setting Workshop is designed to run *within* that process — it is the team-level portion, facilitated by the Product Strategist, that translates department OKRs into team-level commitments.

The workshop uses three GOAL principles to produce better OKRs:

1. **Data over estimation:** Use last quarter's cycle data, not intuition, to calibrate ambition
2. **Goals over backlogs:** Define what the team will achieve, not what it will build
3. **Delivery over activity:** Ensure Key Results measure outcomes, not outputs

---

### 9.2 Workshop Format (2-Hour Structure)

**Prerequisites (prepared by Product Strategist before the session):**

```
□ Department/company OKRs for the upcoming quarter (confirmed)
□ Last quarter's team OKR performance summary
□ Team's Cycle Accuracy Index (last 5 cycles)
□ Delivery Rate (median tasks/day, last quarter)
□ List of current backlog themes (what has the team been asked to build?)
□ Any committed external obligations for the quarter
```

**Session agenda:**

```
SEGMENT 1 — Context loading (20 min)
  Facilitator: Product Strategist

  1.1  Share department OKRs for the quarter (10 min)
       Read through each OKR.
       Pause at each KR and ask: "In plain language, what does this mean for us?"
       Goal: ensure every team member understands the strategic direction,
       not just the KR text.

  1.2  Last quarter retrospective (10 min)
       What KRs did we achieve? Why?
       What KRs did we miss? Why?
       What does the Cycle Accuracy data tell us about our capacity?

SEGMENT 2 — OKR candidate generation (40 min)
  Facilitator: Product Strategist

  For each department KR:

  2.1  Identify the team's contribution surface (10 min)
       "What can our team specifically do that would move this KR?"
       Brainstorm silently (2 min), then share and cluster

  2.2  Draft candidate team OKRs (30 min)
       For each major contribution surface, draft:
         - Candidate Objective (qualitative, inspiring)
         - 2–4 candidate Key Results (quantitative, outcome-based)

       Apply the outcome test to each candidate KR:
         "If we delivered this KR value, would the business be measurably better?"
         "Is this something we can actually measure with data we have access to?"
         "Is this within our team's ability to influence?"

SEGMENT 3 — Feasibility filter (25 min)
  Facilitator: Flow Master (co-facilitates this segment)

  3.1  Capacity reality check (10 min)
       How many cycles does the team estimate for the quarter?
       (Use last quarter's Cycle Accuracy data to calibrate)
       How many cycle goals does that translate to?

  3.2  Candidate KR prioritization (15 min)
       Stack-rank candidate KRs by:
         - Strategic impact (does achieving this make the department KR achievable?)
         - Team influence (can the team actually move this metric?)
         - Measurability (can we track progress every 2–3 weeks?)

       Keep: 2–4 KRs that pass all three filters
       Defer: KRs that fail any filter (note them for backlog or next quarter)

SEGMENT 4 — Finalization and commitment (15 min)
  Facilitator: Product Strategist

  4.1  Read back the finalized team OKRs
       Confirm every team member can describe them without looking at notes

  4.2  Identify first cycle goals
       "What is the first concrete thing we should build toward each KR?"
       (These become the input for the next Quarterly Planning session)

  4.3  Define KR measurement protocols
       For each KR: how will we measure progress? How often?

  4.4  Identify known risks
       What could prevent us from achieving each KR?

CLOSING (10 min)
  Product Strategist summarizes the agreed team OKRs
  Confirm OKR review cadence with leadership (typically at Goal Review events)
  Schedule first Goal Review with OKR check-in
```

---

### 9.3 Criteria for Good Team OKRs

A team OKR is well-formed if it meets all of the following criteria:

**Directional alignment**
```
The Objective and Key Results, if achieved, would contribute measurably to at least
one department or company KR. The connection is explicit, not assumed.
```

**Outcome orientation**
```
Key Results describe changes in measurable outcomes (user behavior, system performance,
business metrics) — not activities, features delivered, or hours spent.
```

**Team influence**
```
The team has meaningful control over the factors that determine whether the KR moves.
KRs that depend primarily on factors outside the team's control (market conditions,
competitor actions, decisions by other teams) are not good team KRs.
```

**Measurability**
```
The KR metric can be observed with data the team has access to, at the frequency
needed to check progress at each Goal Review (every 1–3 weeks).
```

**Realistic ambition**
```
The KR target is achievable if the team executes well AND makes good strategic choices.
It should not require luck or heroics. Use last quarter's Cycle Accuracy and delivery
data to validate that the implied work volume fits in the quarter.
```

**Specificity**
```
The KR has a specific current baseline and a specific target value.
"Improve NPS" is not a KR. "Improve NPS from 32 to 48" is a KR.
```

---

## 10. Product Strategist as OKR Owner

### 10.1 Responsibility for KR Tracking at Cycle Level

In GOAL, the Product Strategist is the team's OKR owner. This means the Product Strategist is not simply aware of the OKRs — they are responsible for actively tracking, reporting, and influencing KR progress throughout the quarter.

**OKR owner responsibilities in the context of GOAL cycles:**

```
Before each cycle:
  □ Confirm which KR(s) the cycle's primary goals contribute to
  □ Update the Quarterly Cycle Roadmap with any changes from the previous cycle
  □ Ensure KR measurement infrastructure is in place (dashboards, data, access)

During each cycle:
  □ Monitor KR-relevant metrics (do not wait for the Goal Review)
  □ Flag early signals of KR stagnation to the Flow Master
  □ Protect cycle goals from scope changes that would reduce KR contribution

At Goal Review:
  □ Present KR progress data (current value vs. target vs. expected pace)
  □ Provide an explicit On Track / At Risk / Off Track assessment for each KR
  □ Document the expected contribution of the completed cycle goal to the KR
  □ Identify any hypothesis that was invalidated (goal completed but KR did not move)

Between cycles:
  □ Communicate KR status to leadership stakeholder (see Section 10.2)
  □ Update the Quarterly Cycle Roadmap if KR trajectory has changed
  □ Identify if any mid-quarter OKR adjustment is needed
```

---

### 10.2 Communication Cadence with Leadership

The Product Strategist is the interface between the team's execution reality and the organization's strategic layer. A communication cadence ensures leadership is never surprised by KR misses.

**Recommended communication structure:**

```
Every Goal Review (every 1–3 weeks):
  Async update to leadership stakeholder:
  - Which cycle goals were completed
  - KR status (On Track / At Risk / Off Track) for each team KR
  - Any changes to the quarterly cycle roadmap
  Format: short written summary (< 1 page) or brief async video

Monthly (or at natural quarter milestones):
  Synchronous 30-minute review with leadership stakeholder:
  - Deep review of KR progress and trajectory
  - Strategic risks that could affect KR achievement
  - Request for leadership decisions or unblocking if needed
  Format: brief deck or structured conversation

At quarter end:
  OKR score presentation:
  - Final KR scores with data evidence
  - Cycles completed vs. planned
  - What was learned that affects next quarter's planning
  Format: formal presentation aligned with organization's OKR review process
```

---

### 10.3 How to Flag KRs at Risk Before Quarter End

Early warning is the Product Strategist's most valuable OKR contribution. An At Risk KR identified at week 4 of a 12-week quarter can usually be recovered or redirected. An At Risk KR identified at week 11 cannot.

**The at-risk flag protocol:**

```
Trigger:  At any Goal Review, a KR is assessed as At Risk or Off Track

Action within 24 hours:
  1. Draft a risk communication to the leadership stakeholder
  2. Include:
     - Current KR value vs. target
     - Root cause of the gap (execution lag / hypothesis failure / external factor)
     - Remaining cycles and their expected KR contribution
     - Best-case trajectory if remaining cycles execute as planned
     - Recommended decision: maintain course / pivot approach / revise target
  3. Request a 30-min leadership meeting within 3 business days

Do NOT:
  - Wait until the next scheduled monthly review
  - Optimize the KR score (present partial progress as full progress)
  - Commit to recovery without leadership support if external resources are needed
  - Proceed with a pivot in cycle goals without leadership alignment
```

**KR status communication template:**

```
Subject: [Team Name] — [KR Name] is At Risk | Q[n] Week [N]

Current status:
  KR: [Key Result text]
  Baseline: [X] | Current: [Y] | Target: [Z]
  Pace required: [expected weekly movement to reach target]
  Actual pace: [actual weekly movement over last N weeks]

Root cause assessment:
  [One paragraph explaining why the KR is not moving as expected]

Remaining plan:
  Cycles remaining: [N]
  Planned cycle goals contributing to this KR: [list]
  Best-case projection if remaining cycles execute: [estimated value]

Decision needed:
  [ ] Option 1: Maintain current approach — accept risk of partial achievement
  [ ] Option 2: Pivot — replace remaining cycle goal X with goal Y (describe)
  [ ] Option 3: Revise KR target to [revised value] — rationale: [explain]

I am requesting a 30-min call to align on approach.
Proposed times: [options]
```

---

## 11. GOAL Without OKRs

### 11.1 For Teams or Companies That Don't Use OKRs

GOAL is designed to connect with OKRs, but it does not *require* OKRs to function. Many organizations use other strategic planning tools, and others operate without a formal strategic framework at all. GOAL can adapt.

The core requirement is not OKRs — it is **strategic alignment**: the team's cycle goals should connect to something larger than the immediate task list. That "something larger" can be expressed in many forms.

---

### 11.2 Alternative Strategic Alignment Mechanisms

**Product Roadmap alignment**

A product roadmap defines the major features, improvements, or platform changes planned across a time horizon (typically 6–18 months). In the absence of OKRs, the roadmap serves as the strategic filter for cycle goal selection.

```
How it works in GOAL:
  - The Product Strategist maintains a roadmap with explicit priority tiers
    (Must ship this quarter / Target for next quarter / Planned but not committed)
  - Cycle goals are drawn from the top tier of the roadmap
  - The Goal Review includes an assessment of roadmap progress:
    "How many of this quarter's must-ship items have been delivered?"

Limitation vs. OKRs:
  Roadmaps describe what will be built, not what outcome will be achieved.
  Teams should supplement roadmap alignment with outcome hypotheses:
  "We believe shipping [feature X] will result in [outcome Y]."
  Track whether the hypothesis was validated.
```

**Strategic themes**

Strategic themes are qualitative priority areas defined by leadership (e.g., "Improve developer experience," "Expand into enterprise," "Harden the platform for scale"). They provide directional guidance without quantitative targets.

```
How it works in GOAL:
  - At Quarterly Planning, the Product Strategist maps each candidate cycle goal
    to the current strategic themes
  - Goals that serve no active theme are secondary candidates
  - Goal Reviews ask: "Did this cycle advance [theme X]?"

Limitation vs. OKRs:
  Themes lack quantitative targets, making it impossible to assess "how much"
  progress was made. Supplement with at least one proxy metric per theme:
  "For the theme 'Improve developer experience,' we track: deployment frequency,
   mean time to review, and developer NPS."
```

**Strategic bets**

Some organizations, particularly early-stage companies, operate on explicit bets — directional hypotheses about what will drive growth or differentiation. Strategic bets are similar to objectives but are explicitly probabilistic.

```
How it works in GOAL:
  - Strategic bets are documented with:
    - The bet (directional hypothesis)
    - The success signal (how you would know the bet is paying off)
    - The validation timeline (when you expect to see signals)
  - Cycle goals are evaluated against the bet they contribute to
  - Goal Reviews include a bet status update: "Is this bet looking right or wrong?"

Example:
  Bet:  "If we make integration setup under 5 minutes, enterprise procurement
         cycles will shorten by 30% and increase win rate."
  Success signal:  Average integration setup time < 5 min, enterprise deal cycle
                   monitoring, win rate for deals involving integration demo.
  Validation timeline:  6 months from first integration improvement cycle.
```

---

### 11.3 Minimum Viable Strategic Alignment in GOAL

For teams that cannot or will not adopt a formal strategic framework, GOAL requires a minimum level of strategic alignment to function as intended. Without it, cycles are well-executed but potentially misaligned.

**The GOAL minimum viable strategic alignment standard:**

```
Every 90 days, the Product Strategist must be able to answer:

  1. "What are the 2–3 most important outcomes this team should achieve
      in the next 90 days, and why?"

  2. "For each cycle we plan this quarter, which of those 2–3 outcomes
      does it contribute to?"

  3. "How will we know, at the end of the quarter, whether those
      outcomes were achieved?"

If these three questions cannot be answered, the team lacks the strategic
foundation to use GOAL at its full potential.
The Product Strategist should escalate to leadership to obtain clarity
before the quarter begins.
```

---

## 12. OKR Integration for Scaled Teams

### 12.1 How Program-Level OKRs Connect to Individual Team Cycles

In scaled environments, multiple teams work on a single product or platform. OKRs are set at the program level (across teams) and must be translated down to each team's quarterly planning.

**The scaled OKR structure:**

```
Company Annual OKR
        │
        ▼
Program-Level Q[n] OKR
(owned by Program Manager / Head of Product)
        │
        ├──────────────────────────────────────┐
        ▼                                      ▼
Team A Q[n] OKR                         Team B Q[n] OKR
(e.g., Core Platform)                   (e.g., Growth/Activation)
        │                                      │
        ▼                                      ▼
Team A Cycles                           Team B Cycles
```

**Key difference at the program level:**

Program-level Key Results often require contributions from multiple teams simultaneously. No single team owns the full KR — each team owns a slice.

```
Example:
  Program KR:  "Reduce infrastructure cost per active user from $0.48 to $0.28"

  Team A contribution (Platform):
    "Migrate high-traffic services to new container architecture (40% of savings)"

  Team B contribution (Analytics):
    "Reduce real-time event processing volume by 35% via event deduplication (20% of savings)"

  Team C contribution (Data):
    "Implement data retention policy to reduce storage costs (40% of savings)"
```

Each team sets a team-level sub-KR that represents their slice of the program KR. The program KR is only tracked at the program level.

---

### 12.2 Cross-Team OKR Dependencies

When multiple teams contribute to the same program KR, their work creates dependencies. A cycle goal on Team A may be a blocker for Team B's cycle goal.

**Dependency types in scaled OKR environments:**

```
Sequential dependency:
  Team A must deliver Goal X before Team B can begin Goal Y.
  Both goals contribute to the same KR.

  Management: Program Manager maps these dependencies during Program-level
  Quarterly Planning. Team A's delivery milestone is in Team B's cycle plan
  as an input.

Parallel dependency:
  Teams A and B both contribute independently to the same KR.
  Their work is parallel but the KR only moves when both deliver.

  Management: Program Manager tracks combined progress toward the shared KR.
  Each team tracks their own sub-contribution. The shared KR is discussed
  at program-level milestone reviews.

Interface dependency:
  Teams A and B build separate systems that must integrate.
  The integration point itself is the KR-moving deliverable.

  Management: The integration specification is agreed before either team's
  cycle begins. A shared Definition of Done covers the integration point.
  Both teams' Product Strategists must sign off on the interface design.
```

**Cross-team dependency visibility protocol:**

```
At each team's Smart Planning Session:
  The Flow Master identifies any cycle goals that have external team dependencies.
  These are flagged in the Goal Cycle Plan with:
    - Dependency description
    - Team responsible
    - Expected delivery date of the dependency
    - Risk level if the dependency slips

At each team's Goal Review:
  The Product Strategist reports on the status of any cross-team dependencies
  that affect their cycle goals and KR progress.
  Dependency issues are escalated to the Program Manager immediately,
  not held until a program-level meeting.
```

---

### 12.3 Program-Level KR Ownership

When OKRs span multiple teams, clear ownership at the program level is critical.

**The Program Manager / Head of Product as program KR owner:**

```
Responsibilities at program level:
  □ Own the program-level OKRs — not the teams' sub-OKRs
  □ Facilitate program Quarterly Planning where team sub-OKRs are derived
  □ Track combined KR progress across all contributing teams
  □ Surface and resolve cross-team dependencies before they become blockers
  □ Report program KR status to executive stakeholders
  □ Call program-level OKR adjustment sessions when needed

How GOAL teams interact with the program KR owner:
  □ Each team's Product Strategist reports team-level KR progress
    at the program-level milestone review (typically monthly)
  □ Cross-team dependencies are escalated to the program KR owner,
    not resolved bilaterally between teams
  □ Program KR status changes (At Risk / Off Track) are communicated
    immediately to all contributing teams' Product Strategists
```

**Program-level OKR review rhythm:**

```
Weekly:
  Each team's Goal Review produces KR status data.
  Program KR owner reviews asynchronously.
  Flags issues requiring immediate cross-team attention.

Monthly (or after each major program milestone):
  Synchronous program-level OKR review.
  All Product Strategists present their team's KR contributions.
  Program KR owner presents the aggregated program KR status.
  Cross-team dependency issues and trade-off decisions are made.
  Program Quarterly Cycle Roadmap is updated.

Quarter end:
  Program OKR scoring.
  Each team's contribution is documented.
  Learning from misaligned sub-OKRs feeds into next quarter's
  program Quarterly Planning.
```

---

*This document is a companion to the GOAL Agile Methodology (GOAL_Methodology_v0.2.md). It should be read alongside the core methodology, not as a standalone framework. The OKR integration patterns described here assume teams are operating at GOAL v0.2 maturity or above.*

*Version 1.0 | Author: Felipe Montenegro | 2026*
