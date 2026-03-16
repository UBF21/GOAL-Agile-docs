---
id: pilot-program
title: Pilot Program Guide
sidebar_position: 7
description: Complete guide to running a structured 3-cycle GOAL pilot — from team selection and prerequisites to the go/no-go decision framework.
---

## 1. Why a Pilot?

### 1.1 The case for running a pilot before full commitment

Adopting a new methodology across an entire engineering organization is a significant commitment. It involves retraining people, changing tools, reshaping how work is planned and reviewed, and — most importantly — asking teams to change the daily habits they have built over months or years. Done well, a full adoption produces lasting improvement. Done poorly, it generates cynicism, adds overhead, and makes future improvement attempts harder to sell.

A structured pilot solves this by doing one thing: **separating the risk of learning from the risk of failing**. When a pilot team runs GOAL for 6–9 weeks under controlled conditions, the organization gains real evidence — data, observations, team feedback — before committing to broader change. Leadership gets to make the full adoption decision based on proof rather than promise.

### 1.2 What a pilot achieves

**Reduces adoption risk**

A pilot limits the blast radius of any problems encountered during learning. If Cycle 1 is rough — board discipline is inconsistent, Daily Flow Syncs take too long, WIP limits feel arbitrary — that roughness affects one team, not ten. The pilot team works through the friction and produces a set of lessons that protect every team that follows.

**Builds organizational evidence**

"We think this will work" is a weak argument for change. "We ran it for nine weeks with Team X and here is what the data shows" is a strong one. A well-documented pilot produces cycle time baselines, team satisfaction data, stakeholder feedback, and goal achievement rates that leadership can evaluate objectively. This evidence makes the go/no-go decision rational rather than political.

**Generates institutional knowledge**

The pilot team becomes the organization's GOAL experts. They know which WIP limit formula worked for their team size, what a good Daily Flow Sync looks and feels like, how to handle the first time someone pushes back on the Interrupt Management Protocol. This knowledge is irreplaceable — it cannot be produced by reading the methodology documents alone. After the pilot, these people become the coaches for subsequent teams.

**Creates buy-in through experience**

Teams that participate in a pilot and see genuine improvement become advocates. Their testimonial carries more weight than any external consultant or methodology document. When the pilot team tells a skeptical future adopter "yes, the first two weeks were uncomfortable, but by week six we would not go back," that converts resisters in a way that top-down mandates cannot.

### 1.3 When not to run a pilot

A pilot is the right first step when:
- The organization wants evidence before committing to broader change
- Management support for full adoption is conditional or uncertain
- Multiple methodology options are being evaluated
- The organization has been burned by past failed methodology transitions

A pilot is not the right approach when:
- The team is already mid-crisis and cannot afford a 6–9 week learning investment
- The team is too small to sustain a meaningful comparison (fewer than 3 people)
- Management has already committed to full adoption and the pilot would be theater
- Organizational conditions (see Section 2) are not met — in that case, fix the conditions first

---

## 2. Pilot Prerequisites

### 2.1 Minimum conditions to begin a pilot

These are not suggestions. If any condition below is not met, the pilot should not begin. Starting under inadequate conditions produces a distorted result — not evidence that GOAL does not work, but evidence that the pilot was set up to fail.

**Condition 1: A committed Flow Master candidate exists**

At least one person has read the complete GOAL Methodology document and is prepared to serve as Flow Master for the pilot duration. This person does not need prior experience with GOAL — first-time Flow Masters who have studied the methodology carefully are sufficient. What is not sufficient: assigning the role to someone who has not read the methodology or who is being added to the pilot as a secondary responsibility.

**Condition 2: A committed Product Strategist exists**

Someone with the authority and business knowledge to define meaningful cycle goals is available and willing to operate in the Product Strategist role. Critically, this person must be willing to define goals as outcomes — not task lists — from the first planning session. A Product Strategist who continues to hand the team a list of features to build is not operating in the GOAL model, and the pilot will not demonstrate GOAL.

**Condition 3: A work tracking tool is in place and agreed upon**

The team has a shared digital or physical board, agrees to keep it updated as the single source of truth for work status, and has confirmed the tool can support the six standard GOAL columns plus the Blocked and Expedite special lanes. The tool does not need to be sophisticated — a well-maintained Jira board, Linear workspace, Trello board, or even a physical whiteboard is sufficient.

**Condition 4: Management has explicitly committed to a learning period**

The team's direct management has explicitly agreed not to demand individual productivity reports, not to interrupt the pilot team's cycle goals with ad hoc priority changes outside the Interrupt Management Protocol, and to allow the team's cycle metrics to mature for at least two cycles before drawing performance conclusions. This agreement should be stated in writing, even informally. Without it, the pilot operates under conditions that GOAL is specifically designed to eliminate, and the results will not reflect GOAL's actual performance.

**Condition 5: The team has protected time for the pilot**

No major parallel initiative is consuming a significant fraction of the pilot team's attention during the pilot period. Teams that are simultaneously managing a production incident, onboarding a major new client, or undergoing a reorganization cannot give the pilot the focused attention it requires. If such a situation exists, delay the pilot start until conditions stabilize.

**Condition 6: Baseline data can be collected**

The team can produce at least a rough estimate of current average task duration, current blocker frequency, and current team health before the pilot begins. This baseline data is essential for the go/no-go comparison in Cycle 3. Without a pre-pilot baseline, the pilot cannot demonstrate improvement — only current state.

### 2.2 Team size requirements

The pilot team should have between 3 and 8 members in the Delivery Team role.

- **Fewer than 3:** WIP limits become impractical, flow metrics are statistically meaningless, and the team lacks the diversity of work patterns that makes GOAL's protocols valuable.
- **More than 8:** Consider splitting into two sub-teams or running the pilot on a clearly bounded workstream rather than the full team's work.

The Flow Master and Product Strategist can be the same person on very small teams (3–4 people), but this is not ideal. On larger teams (5+), these should be distinct people.

---

## 3. Pilot Scope

### 3.1 What to include in a pilot

A pilot is not a full implementation. It is a bounded experiment. The instinct to implement everything at once — all artifacts, all metrics, all protocols — is the most common cause of pilot overload and the second most common cause of pilot failure (the first is covered in Section 15).

**Include in Cycle 1:**
- Flow Board with standard columns (Backlog, Ready, In Progress, Code Review, Validation, Done) plus Blocked and Expedite lanes
- WIP limits (use the conservative formula: Team Size × 0.6 for the first cycle)
- Daily Flow Sync (daily, 10–12 minutes)
- Smart Planning Session (goals as outcomes, not task lists)
- Goal Cycle Plan document (simple version: goals, estimated duration, WIP limit)
- Definition of Done — Baseline Level only

**Add in Cycle 2:**
- Block Register (formal logging, not informal notes)
- Flow Metrics Dashboard (basic: cycle time tracking, task start and end dates)
- Backlog Grooming Session (weekly, 30 minutes)
- First Data-Driven Retrospective (using available data, however limited)

**Add in Cycle 3:**
- Full Interrupt Management Protocol (P1/P2/P3 classification applied to all incoming requests)
- Flow Efficiency baseline calculation
- Value Framework application at Goal Review
- Full Data-Driven Retrospective with complete metrics set

### 3.2 What to exclude from a pilot

Do not attempt to implement these during a pilot:

- **Cycle Accuracy Index trending** — requires at least four cycles of data to be meaningful
- **Extended Definition of Done** — start with Baseline DoD only; Extended DoD is a Cycle 3+ addition
- **WIP compliance percentage tracking** — meaningful only after WIP compliance becomes habitual (typically Cycle 3 or later)
- **Multi-team scaling practices** — pilots are single-team experiments; scaling considerations come post-pilot
- **Advanced Block Rate analysis** — use the Block Register to log blockers during the pilot; analysis comes in Cycle 3 retrospective
- **Full value framework with ROI calculations** — apply the 3-layer value framework simply in Cycle 3; deep ROI analysis is post-pilot work

### 3.3 The pilot boundary rule

> **The pilot team runs GOAL. The rest of the organization runs whatever it was running before.**

Do not allow the pilot team's practices to drift outward into adjacent teams during the pilot period. If another team leader asks "can we try this too?", the answer is: "After the pilot produces results, we will run a structured expansion. Right now, we need clean data from one team."

Cross-team dependencies that affect the pilot team should be explicitly identified in the pre-pilot baseline and managed through the Interrupt Management Protocol during the pilot — not handled through informal cross-team adoption of partial GOAL practices.

---

## 4. Pilot Team Selection

### 4.1 Why team selection matters

The pilot team's results become the evidence base for the organization's go/no-go decision. A poorly selected team produces misleading data — either making GOAL look better than it is (selecting an already-high-performing team) or worse (selecting a team under crisis conditions). The goal is to select a team that is representative of the organization's typical conditions.

### 4.2 Selection criteria

**Positive criteria — the ideal pilot team has:**

- A stable composition: no planned headcount changes, departures, or major onboardings during the pilot period
- An identifiable and bounded workstream: the team works on a product, service, or domain with clear enough boundaries that cycle goals can be defined without constant negotiation with other teams
- A willing candidate for the Flow Master role: someone with enough organizational standing to enforce WIP limits and redirect Daily Flow Syncs, and enough motivation to invest in learning the methodology
- Some existing process maturity: the team does not need to be high-performing, but should have at minimum a shared board (even if poorly maintained) and some history with planning. Teams with a readiness score of 11 or above (using the Adoption Playbook's scoring model) are appropriate pilot candidates.
- Management support: the team's direct manager understands what the pilot involves and has agreed to the conditions in Section 2.1

**Negative criteria — avoid selecting a team that:**

- Is currently in a production crisis or managing a high-severity incident response
- Has significant team health problems: active interpersonal conflict, burnout, or recent high turnover
- Has a Product Strategist who is unavailable or not invested in the pilot (travelling frequently, spread across five teams, treating goal definition as a formality)
- Is about to undergo a significant organizational change (merger, reorganization, new leadership)
- Has a very high volume of unplanned interrupt work as a structural feature of their role (e.g., a pure support team — GOAL can work for support teams, but a first pilot adds unnecessary complexity)

### 4.3 The ideal pilot team profile

If given a choice, the ideal first pilot team looks like this:

```
Size:              4–6 Delivery Team members
Current process:   Scrum with some dissatisfaction, or informal Kanban
Workstream:        Product development or platform with a visible backlog
Team health:       Functional, with identifiable pain points (not crises)
Flow Master:       Tech lead or senior developer willing to own the role
Product Strategist: Product manager or domain lead present at least 3 days per week
Management:        Direct manager supportive and not requiring individual velocity tracking
Readiness score:   12–18 (developing to ready)
```

This profile does not need to be exact. A team that meets 5 of 6 criteria above is a good candidate. A team that meets fewer than 4 should be assessed individually before being selected.

### 4.4 What to tell the pilot team

The team should be told, clearly and honestly:

1. This is an experiment, not a mandate. The organization is evaluating GOAL before committing to wider adoption.
2. The first two cycles are learning cycles. The team will not be judged on performance metrics during this period.
3. The team's observations and feedback are as important as the quantitative metrics. Their experience is data.
4. After the pilot, the team will participate in a lessons-learned session and will be asked to contribute to documentation for the next teams.
5. If the pilot results do not support adoption, the decision will be respected. This is a genuine evaluation, not a rubber stamp.

---

## 5. Cycle 1 — Foundation (Weeks 1–2 or 1–3)

### 5.1 Purpose of Cycle 1

Cycle 1 is a habit-building cycle. Its purpose is not performance. It is to establish the behavioral foundation — the board, the WIP discipline, the Daily Flow Sync cadence — that all future cycles will rest on.

A team that ends Cycle 1 with consistent board updates, a functioning Daily Flow Sync, and a completed Goal Review has had a successful Cycle 1, regardless of how many tasks were delivered or how smooth the flow metrics look.

### 5.2 Duration

- **Recommended duration:** 2 weeks for teams coming from Scrum (familiar with time-boxing), 3 weeks for teams coming from Kanban or informal processes (need more time to experience the goal-cycle structure)
- **Do not extend Cycle 1 beyond 3 weeks.** If goals are not complete by week 3, close the cycle anyway and document the gap. An extended first cycle teaches the wrong lesson about cycle discipline.

### 5.3 Cycle 1 goals

The Product Strategist should define 1–2 primary goals maximum for Cycle 1. The instinct to define 4–5 goals to "make the cycle productive" should be resisted. The goal of Cycle 1 is to learn the process, not to maximize delivery.

**Goal framing guidance for Cycle 1:**

Good: "Users can complete the onboarding flow without support intervention."
Good: "The API response time for the /search endpoint is under 200ms at p95."
Too task-like: "Build the onboarding screens and fix the search endpoint performance."

Secondary goals should be absent or at most one. If the primary goals complete early (which is unlikely in Cycle 1 due to learning friction), secondary goals exist as a next step.

### 5.4 What to focus on in Cycle 1

**Board discipline**

The Flow Board is the single source of truth. Every team member updates their card when work changes column — not at the Daily Flow Sync, not at the end of the day: when it happens. The Flow Master checks the board before each Daily Flow Sync and calls out stale cards by name, without blame.

This is the single most important habit to build in Cycle 1. Teams that do not build real-time board discipline in Cycle 1 carry that deficit into every subsequent cycle.

**Daily Flow Sync format**

The three GOAL questions are not optional variations on the standup format — they are a deliberate replacement:
1. What moved forward since yesterday?
2. What is blocked or at risk of being blocked?
3. What is slowing the flow?

The Flow Master's job in Cycle 1 is to redirect any "I did X, I will do Y" standup responses back to board observations. "What column did it move to?" and "Is it visible on the board?" are the two correction questions.

**WIP limit enforcement**

Use the conservative formula: Team Size × 0.6, rounded down. Enforce it without exceptions from Day 1. If a team member finishes a task and the WIP limit is full, follow the priority order: unblock, review, validate, pair, then start new. The first enforcement moment — when someone is told they cannot start a new task — is the most important WIP education event in the pilot.

**Definition of Done**

Implement Baseline DoD only. Confirm the team has an agreed checklist and apply it to every task before it moves to Done. If any item in the Baseline DoD is not currently achievable (e.g., the team has no staging environment), document that gap explicitly rather than removing the requirement.

### 5.5 What to ignore in Cycle 1

| Element | Why to defer |
|---------|--------------|
| Flow Efficiency calculation | Requires multiple cycles of data to be meaningful |
| Block Rate analysis | First-cycle block rates are inflated by previously-hidden blockers surfacing — this is expected and should not be analyzed as a performance signal |
| Cycle Accuracy Index trending | One data point is not a trend |
| Interrupt Management Protocol (full) | In Cycle 1, simply log any interrupt requests as potential backlog additions. Formal P1/P2/P3 classification begins in Cycle 2. |
| Extended Definition of Done | Start with Baseline DoD only |
| Backlog Grooming Session (formal) | One informal grooming conversation mid-cycle is sufficient in Cycle 1 |

### 5.6 Cycle 1 success criteria

Cycle 1 is successful when ALL of the following are true at the end of the cycle:

- [ ] The Flow Board was kept current in real time for at least 80% of working days (observed, not self-reported)
- [ ] The Daily Flow Sync was held every working day at a consistent time
- [ ] The three GOAL questions were used in at least 75% of Daily Flow Syncs (Flow Master observation)
- [ ] WIP limits were enforced on at least 80% of instances where they applied
- [ ] At least one task was formally moved to the Blocked lane with an owner assigned
- [ ] A Goal Review was held at cycle close (even if abbreviated — 20 minutes minimum)
- [ ] A retrospective was held using the First Retrospective Learning Reflection Format
- [ ] 1–3 improvements for Cycle 2 were identified and documented

**What Cycle 1 success does NOT require:**

- High flow efficiency
- All primary goals completed (completion is good but not a Cycle 1 success requirement)
- Absence of WIP violations
- A populated Block Register (logging begins formally in Cycle 2)

### 5.7 Common Cycle 1 mistakes and recovery

**Mistake: The board stops being updated after day 3**

This is the most common Cycle 1 failure. The team participates actively on Day 1, updates the board through Day 2, and by Day 4 the board reflects where work was, not where it is.

Recovery: The Flow Master makes a point of checking the board 5 minutes before each Daily Flow Sync and asking about any card that has not moved since the day before. Do not make it an accusation — "This card has been in In Progress for three days. Is it still active? What column should it be in?" The goal is to rebuild the habit, not to embarrass anyone.

**Mistake: Goals get expanded mid-cycle**

A stakeholder asks for something, the Product Strategist agrees, and a new task appears on the board that serves no current cycle goal. This happens frequently in Cycle 1 because the goal stability rule is new.

Recovery: The Flow Master spots the new card, asks which cycle goal it serves, and if the answer is "it doesn't have one, but it's important," moves the card to the backlog with an explanation to the stakeholder: "We've logged this for the next planning session." The Product Strategist may resist this — the conversation to have is: "The goal stability rule exists so the team can finish what they started. If this is genuinely urgent, it goes through the interrupt protocol."

**Mistake: The Daily Flow Sync becomes a status meeting**

People revert to "Yesterday I worked on X. Today I'll work on Y. No blockers." This is the standup format, not the GOAL format.

Recovery: The Flow Master stops the go-around format entirely and points at the board: "Let's look at the board together. What has moved since yesterday? What hasn't moved that should have?" Moving from person-centric to board-centric immediately reframes the conversation.

**Mistake: WIP limits are violated silently**

Someone finishes their task, picks up a new one, and does not check whether the WIP limit is full. The board shows too many In Progress cards.

Recovery: Catch it the same day during the Daily Flow Sync, not the next day. "We're at WIP limit — is there something that can be unblocked or reviewed before starting something new?" Enforce without making it personal.

**Mistake: The Goal Review is skipped**

The cycle ends, the retrospective is held, but the Goal Review is skipped because "we know what we did."

Recovery: Hold a 20-minute Goal Review before every retrospective, even a minimal one. Answer three questions for each primary goal: Was it completed? Does it meet the Definition of Done? What value was delivered? The habit of measuring delivery against goals is the foundation of the entire framework — skipping the Goal Review is skipping GOAL's core value proposition.

---

## 6. Cycle 2 — Measurement (Weeks 3–5 or 4–6)

### 6.1 Purpose of Cycle 2

Cycle 2 activates the measurement layer. By now, the team has a functioning board, a Daily Flow Sync habit, and some experience with WIP limits. Cycle 2 adds data: formal task date tracking, Block Register discipline, and a first look at flow metrics.

The team does not need perfect data in Cycle 2. The goal is to start the tracking habits that will produce meaningful data by Cycle 3.

### 6.2 Duration

- **Recommended duration:** 2–3 weeks, consistent with Cycle 1 duration
- Use the same duration as Cycle 1 unless the retrospective explicitly identified cycle length as a problem

### 6.3 Cycle 2 goals

Define 2–3 primary goals. The Product Strategist should apply more discipline to goal framing than in Cycle 1 — goals should have clearer success criteria.

**The acceptance criteria upgrade:** Every cycle goal should include a brief "how will we know this is done?" statement. This is not a full specification, but a one-sentence description of the observable outcome.

Example:
> "API response time for /search is under 200ms at p95" → Observable outcome: "p95 latency measured in staging environment shows ≤200ms for 3 consecutive test runs."

### 6.4 What to introduce in Cycle 2

**Block Register (formal)**

Every task that enters the Blocked lane gets a Block Register entry with the minimum required fields:
- Task name and ID
- Date blocked
- Blocker description
- Blocker type (technical / external / business decision / dependency)
- Owner responsible for resolution
- Date resolved (filled when the task unblocks)
- Total time blocked (calculated at resolution)

This is not bureaucratic overhead — it is the data source for retrospective investigation of systemic problems. A team that has 40 Block Register entries after three cycles can see which blocker type dominates, which column blockers cluster in, and which external dependencies recur.

**Task date tracking**

Begin recording the date a task enters each column: date entered Ready, date entered In Progress, date entered Done. This is the minimum data needed to calculate Cycle Time. The tracking can be a custom field in the digital tool or a date stamp written on physical cards.

**Flow Metrics Dashboard**

Create a simple dashboard — a shared spreadsheet is sufficient — that tracks:
- Tasks completed this cycle (count)
- Average time from In Progress to Done (early cycle time estimate)
- Tasks that went through the Blocked lane (count and average time blocked)
- WIP violations (count of instances where WIP limit was exceeded)

This dashboard will be sparse after Cycle 2. That is expected. Its purpose is to build the tracking habit and produce a Cycle 3 comparison point.

**Backlog Grooming Session (formal)**

Hold the Backlog Grooming Session weekly during Cycle 2. Minimum agenda: size new items, confirm acceptance criteria on the top 10 items, remove or archive items that are no longer relevant.

### 6.5 First Data-Driven Retrospective

The Cycle 2 retrospective introduces data for the first time. The data will be limited — possibly only a handful of completed tasks with date tracking. Use it anyway.

**Cycle 2 retrospective agenda:**

```
1. Review available flow data (10 min)
   - How many tasks were completed this cycle?
   - What was the average time in progress for completed tasks?
   - How many tasks went through Blocked? For how long on average?
   - How many WIP violations occurred?

2. Compare to Cycle 1 observations (10 min)
   - Was the board more consistently updated than Cycle 1?
   - Did the Daily Flow Sync feel more useful?
   - Did WIP limits feel more natural?

3. Block Register review (10 min)
   - Which blocker types appeared?
   - Were any blockers systemic (appeared more than once)?
   - Were blockers resolved faster when formally logged vs. when handled informally?

4. Identify 1–3 improvements for Cycle 3 (15 min)
   - Each improvement has an owner and a testable outcome

5. Preview Cycle 3 structure (5 min)
   - Cycle 3 introduces the full Interrupt Management Protocol and completes the baseline measurement
```

### 6.6 How to handle the "this feels slower" feedback

This is the most common Cycle 2 feedback and it should be anticipated rather than deflected. It has two valid causes:

**Cause 1: The measurement is revealing real slowness that was always there**

Tasks that previously had invisible wait times now show those times explicitly on the board. When a task sits in Code Review for two days, that wait time is now visible in the metrics. The feeling that "things are slower" may actually mean "we can now see how slow we already were."

The correct response: "Let's look at whether cycle time has actually increased, or whether we're seeing wait time that was always there but invisible. If the data shows genuine slowdown, that's what we investigate."

**Cause 2: Process overhead is genuinely adding friction**

Board updates, Block Register entries, and daily syncs take time. During a learning period, that time is a real cost. A team that previously spent zero time on process is now spending 20–30 minutes per day on process activities. This is front-loaded — it decreases as habits become automatic.

The correct response: "Process overhead is highest during the learning period. Track how long process activities actually take. If in three cycles the process overhead has not decreased, that is a real problem to solve. Right now, we're still building the habits."

**Cause 3 (less common): The WIP limits are too low**

If the team is frequently at WIP limit with nothing to unblock or review, the Focus Factor may be too conservative. The solution is not to abandon WIP limits — it is to raise the Focus Factor slightly (from 0.6 to 0.65 or 0.7) in Cycle 3, with data to support the change.

### 6.7 Cycle 2 success criteria

Cycle 2 is successful when ALL of the following are true:

- [ ] Every blocked task has a complete Block Register entry
- [ ] Task entry and exit dates are recorded for at least 80% of completed tasks
- [ ] A Flow Metrics Dashboard exists with Cycle 1 and Cycle 2 comparison data (however limited)
- [ ] The Backlog Grooming Session was held at least once during the cycle
- [ ] The Data-Driven Retrospective was held using available metrics
- [ ] The 1–3 improvements from Cycle 1's retrospective were reviewed and assessed
- [ ] New 1–3 improvements for Cycle 3 were identified and documented

---

## 7. Cycle 3 — Validation (Weeks 6–8 or 7–9)

### 7.1 Purpose of Cycle 3

Cycle 3 is the validation cycle. By now the team has established habits (Cycle 1) and started measuring (Cycle 2). Cycle 3 runs full GOAL operations and compares results to the pre-pilot baseline. This is the cycle that produces the evidence for the go/no-go decision.

### 7.2 Duration

- Same duration as Cycles 1 and 2, unless the retrospective explicitly called for a duration change
- Do not shorten Cycle 3 to accelerate the decision timeline — the cycle needs to complete naturally

### 7.3 Cycle 3 goals

Define 2–3 primary goals and optionally 1 secondary goal. By Cycle 3, the Product Strategist should be writing goals with measurable outcomes consistently.

**Goal quality check:** Before the Cycle 3 Smart Planning Session, review the goals from Cycles 1 and 2. Were they specific enough? Did the team clearly know when each goal was complete? Strengthen the framing for Cycle 3 based on what was learned.

### 7.4 What to introduce in Cycle 3

**Full Interrupt Management Protocol**

Apply the P1/P2/P3 classification to all incoming interrupt requests during Cycle 3:

```
P1 — Critical incident: system down or data loss.
     Response: immediate. Enters Expedite lane. Cycle can be paused.

P2 — High-impact issue: significant user or business impact.
     Response: within the cycle. Enters Expedite lane if capacity allows.
     Product Strategist + Flow Master joint decision required.

P3 — Important but not urgent.
     Response: next cycle. Added to backlog with priority noted.
     No interruption of current cycle.
```

Every request that arrives during Cycle 3 is classified and logged. At the retrospective, the log shows: how many P1, P2, P3 requests arrived? How many P3s were submitted as P1s? This data is revealing.

**Flow Efficiency baseline**

Calculate flow efficiency for the first time using Cycle 2 and Cycle 3 data:

```
Flow Efficiency = Active Time / Total Flow Time

Active Time:     Time the task was in In Progress or Code Review
Total Flow Time: Time from entering Ready to entering Done

Example:
  Task A: Entered Ready on Monday, entered In Progress on Wednesday,
          completed on Thursday.
  Total Flow Time: 4 days
  Active Time:     2 days (Wednesday + Thursday)
  Flow Efficiency: 2/4 = 50%
```

A baseline flow efficiency of 15–40% is typical for teams new to flow measurement. Do not treat this number as a failure — it is a starting point. Every cycle of improvement should move this number upward.

**Value Framework at Goal Review**

Apply the 3-Layer Value Framework at the Cycle 3 Goal Review:

- **Layer 1 — Delivered:** Was the goal completed and does it meet the DoD?
- **Layer 2 — Functional:** Does the delivered work produce its intended effect in production?
- **Layer 3 — Business impact:** Is there evidence that this delivery moved a business metric?

For many teams, Layer 3 will be approximate or deferred ("we expect to see this impact over the next four weeks"). That is acceptable. The discipline of asking the Layer 3 question — even when the answer is "we don't have the data yet" — builds the habit of connecting delivery to business outcomes.

### 7.5 Cycle 3 retrospective: comparison to baseline

The Cycle 3 retrospective is different from previous retrospectives. It uses the pre-pilot baseline data (Section 8) as a comparison point.

**Comparison agenda:**

```
1. Pre-pilot baseline vs. Cycle 3 metrics (15 min)
   - Cycle time: estimated pre-pilot vs. measured Cycle 3 average
   - Block frequency: estimated pre-pilot vs. Block Register count
   - Goal achievement rate: Cycle 1 vs. Cycle 2 vs. Cycle 3 primary goals completed
   - Team health: pre-pilot score vs. end-of-pilot score

2. Flow trend analysis (10 min)
   - Is cycle time improving cycle-over-cycle?
   - Is flow efficiency increasing?
   - Is WIP compliance rate increasing?

3. Qualitative assessment (10 min)
   - What does the team prefer about GOAL vs. the previous methodology?
   - What does the team find worse or harder?
   - What would they change about the implementation?

4. Go/no-go input (5 min)
   - Does the team recommend continuing to full adoption?
   - What conditions would they add?
   - Are there specific elements they would not want to carry forward?

5. Improvements for Cycle 4 (if continuing) (10 min)
```

### 7.6 Cycle 3 success criteria

Cycle 3 is successful when ALL of the following are true:

- [ ] The full Interrupt Management Protocol was applied to all incoming requests
- [ ] Flow efficiency was calculated using Cycle 2 and Cycle 3 data
- [ ] The Value Framework was applied at the Goal Review for each primary goal
- [ ] The Data-Driven Retrospective included a comparison to the pre-pilot baseline
- [ ] The team completed a structured go/no-go input exercise (see Section 12)
- [ ] The Pilot Scorecard (Section 14) was completed

**Additional indicators to note (not pass/fail, but informative):**

- Cycle time average for Cycle 3 vs. the pre-pilot estimate: is it better, similar, or worse?
- Block register entry completeness: are all blocked tasks logged?
- WIP compliance rate: what percentage of In Progress states respected the WIP limit?
- Goal achievement rate: what percentage of primary goals were completed across three cycles?

---

## 8. Pre-Pilot Baseline Measurement

### 8.1 Why baseline measurement is essential

The pilot's go/no-go decision depends on a comparison: GOAL vs. what came before. Without a pre-pilot baseline, that comparison is impossible. The team may feel the pilot went well, but without data from before, "went well" is an opinion. With baseline data, "went well" can be a measured statement.

Collecting baseline data takes 2–4 hours and should happen in the week before the pilot kickoff.

### 8.2 What to measure

**Metric 1: Cycle time estimate**

Since the team likely does not have formal cycle time tracking, use estimation:

"Think about the last 10 tasks your team completed. Roughly how long did each take from when you started working on it to when it was complete? Give a rough range — not a precise number."

Collect 10 estimates and calculate an approximate average. This is your pre-pilot cycle time baseline. It is imprecise — that is acceptable. The goal is a directional comparison.

**Metric 2: Blocker frequency estimate**

"In the last month, roughly how many times did a task get stuck waiting for something? Think about: waiting for a review, waiting for a decision, waiting for access, waiting for another team. How many times per week on average?"

Express as: approximately N blockers per week. This becomes the comparison for the Block Register data from Cycles 2 and 3.

**Metric 3: Unplanned work estimate**

"In the last month, roughly what percentage of the team's capacity went to unplanned urgent work — things that appeared during the week and had to be done immediately?"

Express as: approximately X% of capacity. This becomes the comparison for the Interrupt Management Protocol data from Cycle 3.

**Metric 4: Goal achievement rate (if applicable)**

If the team currently operates in sprints or has some form of planned cycle:

"In the last three sprints or equivalent planning cycles, what percentage of the planned work was actually completed?"

Express as: approximately X% completion rate.

**Metric 5: Team health score**

Run a brief team health survey using 5 dimensions, rated 1–5 by each team member anonymously:

```
1. Process clarity:    "I understand how to do my work effectively."
2. Focus:              "I can maintain focus on one task without constant interruption."
3. Visibility:         "I always know the status of work on my team."
4. Improvement:        "Our team regularly improves how we work."
5. Satisfaction:       "I find our current process effective and reasonably low-friction."
```

Average the scores per dimension. This produces a baseline team health profile that can be compared to an identical survey at the end of Cycle 3.

### 8.3 Baseline data documentation

Record all baseline data in the Pilot Journal (Section 10) before the pilot begins. Label it clearly as "Pre-Pilot Baseline." This data is referenced in the Cycle 3 retrospective and the go/no-go presentation.

```
Pre-Pilot Baseline Record

Date collected: [DATE]
Collected by:   [NAME]

Cycle time estimate:          ~[X] days average (from [N] task estimates)
Blocker frequency:            ~[X] blockers per week
Unplanned work percentage:    ~[X]% of capacity
Goal/sprint completion rate:  ~[X]% (if applicable)

Team health scores (1–5 average per dimension):
  Process clarity:   [X]
  Focus:             [X]
  Visibility:        [X]
  Improvement:       [X]
  Satisfaction:      [X]
  Overall average:   [X]

Notes / context:
[Any factors that make these estimates higher or lower than typical:
 recent reorganization, new team members, unusual workload, etc.]
```

---

## 9. Pilot Kickoff Meeting

### 9.1 Purpose

The pilot kickoff is the official start of the pilot. It is not a GOAL training session — team members should have read at minimum the GOAL overview before this meeting. It is a structured session that establishes shared understanding, resolves open questions, makes explicit commitments, and launches Cycle 1.

### 9.2 Who attends

- Flow Master (required)
- Product Strategist (required)
- All Delivery Team members (required)
- Direct manager of the team (strongly recommended — their visible commitment matters)
- Sponsor or champion from leadership if one exists (optional)

### 9.3 Duration

90 minutes

### 9.4 Agenda

**Part 1: Why we're doing this (15 minutes)**

The Flow Master or team leader explains:
- The specific pain points GOAL is intended to address for this team (drawn from the pre-pilot baseline and team feedback)
- What the pilot is: a 3-cycle, 6–9 week structured experiment with a go/no-go decision at the end
- What the pilot is not: a mandate, a performance evaluation, or a foregone conclusion
- The management commitment: no individual productivity reports, no ad hoc cycle goal changes for 6–9 weeks

**Part 2: GOAL structure overview (20 minutes)**

A brief walkthrough of the elements the team will use in Cycle 1:
- Flow Board columns and special lanes (show the actual board)
- WIP limits: what they are, why they exist, what happens when the limit is full
- Daily Flow Sync: the three questions, the 10-minute limit, the board-centric format
- Goal Cycle structure: Smart Planning → daily execution → Goal Review → Retrospective

This is not a deep training session. If the team has questions that would take more than 5 minutes to answer fully, defer them to a separate conversation and note them for the Pilot Journal.

**Part 3: Establish the board together (20 minutes)**

As a group:
- Review the current state of the work tracking tool and confirm the column structure
- Set the WIP limit: Team Size × 0.6 (the Flow Master proposes, team confirms)
- Move any currently active work into the appropriate columns
- Confirm the Definition of Done — Baseline Level

**Part 4: Smart Planning Session for Cycle 1 (25 minutes)**

Immediately following the board setup, run the first Smart Planning Session:
- Product Strategist presents 1–2 proposed primary goals
- Team provides feasibility input (2–3 minutes of discussion per goal)
- Goals are confirmed and written on the board / in the tool
- Cycle duration is estimated (1–2 weeks for most pilot teams)
- Initial tasks are identified and placed in Ready (not more than 5–7 tasks in Ready at cycle start)

**Part 5: Commitments and open questions (10 minutes)**

Each person states one explicit commitment for Cycle 1. Examples:
- "I commit to updating my board cards when they move, not at the end of the day."
- "I commit to logging any task that gets stuck rather than solving it silently."
- "I commit to using the three GOAL questions in the Daily Flow Sync."

Open questions are collected in the Pilot Journal. The Flow Master commits to answering them before Day 3.

### 9.5 Decisions made at kickoff

The following decisions must be explicit and agreed by the end of the kickoff meeting:

- [ ] WIP limit for Cycle 1 confirmed: ___
- [ ] Cycle 1 primary goals confirmed (written on board)
- [ ] Estimated Cycle 1 end date: ___
- [ ] Daily Flow Sync time confirmed: ___ (must be same time every day)
- [ ] Flow Master confirmed: ___
- [ ] Product Strategist confirmed: ___
- [ ] Definition of Done reviewed and accepted

---

## 10. Pilot Journal

### 10.1 Purpose

The Pilot Journal is a lightweight, weekly log maintained by the Flow Master. It captures observations that numbers alone cannot capture: what happened when WIP limits were first enforced, how the team reacted to the first formal blocker log, what the Daily Flow Sync felt like in week one vs. week six. This qualitative data is essential for the go/no-go presentation and for the lessons-learned session.

The Pilot Journal is not a status report. It takes 15–20 minutes per week to maintain. It is a first-person, observation-based log.

### 10.2 Weekly entry template

```
GOAL PILOT JOURNAL — WEEK [N]
Date: [DATE]
Author: [FLOW MASTER NAME]

---

CYCLE STATUS
Current cycle:         [Cycle 1 / 2 / 3]
Cycle day:             [Day X of estimated Y]
Cycle goals:           [List primary goals and current status: On Track / At Risk / Complete]
WIP limit:             [Current limit]
Active WIP (avg):      [Average active tasks this week]

---

FLOW OBSERVATIONS
Board discipline:      [1–5] — Comment: [What was good or bad about board updates this week?]
Daily Flow Sync:       [1–5] — Comment: [What happened in the syncs? Any notable patterns?]
WIP compliance:        [X out of Y instances respected the WIP limit]
Blockers this week:    [Count] — Notable blocker: [Most interesting or systemic blocker this week]

---

TEAM OBSERVATIONS
[3–5 sentences on what you observed about the team this week.
 Focus on: energy level, engagement with the process, friction points,
 moments where GOAL clearly helped or clearly frustrated.]

---

NOTABLE EVENTS
[Any specific event worth documenting: first WIP limit enforcement,
 first formal interrupt request, a blocker that was resolved exceptionally
 well or exceptionally poorly, a stakeholder interaction, a team member
 who became more or less engaged, etc.]

---

OPEN QUESTIONS / ISSUES TO RESOLVE
[List any unresolved questions, methodology ambiguities, or
 tooling issues that need to be addressed before next week.]

---

NEXT WEEK FOCUS
[What is the one thing to watch or improve next week?]
```

### 10.3 When to write the journal entry

End of each working week — ideally Friday afternoon. Do not defer to the following Monday. The observations from the current week are freshest on Friday.

### 10.4 Using the journal in the retrospective

Before each retrospective, the Flow Master reviews the Pilot Journal entries from the cycle and summarizes:
- What patterns appeared across the week-by-week observations?
- What improved? What did not?
- What was the single most important non-quantitative observation from the cycle?

This summary is presented at the start of the retrospective's qualitative review section.

---

## 11. Stakeholder Reporting During the Pilot

### 11.1 The reporting balance problem

Stakeholders want visibility. The pilot team needs protected space to learn. These needs are in tension during the pilot, and the tension is manageable with a clear communication structure.

Over-reporting during the pilot creates two problems: it consumes team and management time that should go toward the pilot itself, and it invites premature evaluation of Cycle 1 and Cycle 2 metrics that are not yet meaningful. Under-reporting creates anxiety and creates the conditions for management to intervene at the wrong moment.

The answer is a structured, low-frequency communication model with clear scope.

### 11.2 Recommended communication structure

**Weekly: Flow Master → Direct manager (written, 5 minutes)**

A brief written update covering:
- Which cycle is in progress and what its goals are
- Whether the cycle is on track, at risk, or completed early
- One qualitative observation from the week
- No performance metrics in Cycles 1 and 2

Format:
```
GOAL Pilot — Week [N] Update

Cycle [1/2/3] is in progress. Goals: [list goals].
Status: [On Track / At Risk / Complete].

This week: [one sentence on the most notable observation].

No metrics to share yet — we are in the learning period.
Next metrics update: end of Cycle 2.
```

**End of each cycle: Flow Master → Sponsor / management layer (15-minute meeting or written summary)**

Timing: within 2 days of each cycle retrospective

Content:
- Were the cycle's primary goals completed?
- What did the retrospective identify as improvements?
- What metrics are available (note: Cycle 1 will have minimal metrics; Cycle 2 will have early metrics; Cycle 3 will have comparison data)
- Any blockers or issues requiring management attention

**End of pilot: Full presentation to leadership**

This is the go/no-go meeting covered in Section 12. It is the only time the full pilot data set is presented.

### 11.3 What not to report

- Individual team member performance or activity levels
- Cycle 1 flow metrics (too early, too noisy)
- Detailed block-by-block analysis before Cycle 3 (report counts only, not analysis, until Cycle 3)
- Retrospective details (retrospectives are team-confidential by default; share the improvement actions, not the discussions)

### 11.4 Managing the "can I see the board?" question

Stakeholders who hear the team is using a new visual management system will frequently ask to see the Flow Board. This is healthy and should be encouraged — with one explicit expectation:

*"Absolutely. You're welcome to look at the board at any time. Please note that what you'll see is a current snapshot of work status, not a performance evaluation. In the early cycles, you'll see things that look messy — tasks in the blocked lane, WIP limits being tested — and that's expected. That's the information that helps us improve. If you have questions about what you see, bring them to me rather than to the team directly."*

---

## 12. Go / No-Go Decision Framework

### 12.1 What the go/no-go decision is

At the end of Cycle 3, the pilot produces a structured recommendation: continue to full adoption, adjust the approach and continue, or stop. This decision is based on evidence — the pilot's data, the team's feedback, and the stakeholder assessment — not on enthusiasm or resistance.

The go/no-go decision is a management decision informed by the pilot. It is not a team vote, though the team's input carries significant weight. Leadership makes the call; the pilot provides the evidence.

### 12.2 Evidence to collect before the decision

Compile the following before presenting the go/no-go recommendation:

**Quantitative evidence:**

| Metric | Pre-Pilot Baseline | Cycle 3 Result | Direction |
|--------|-------------------|----------------|-----------|
| Average cycle time (days) | [baseline] | [cycle 3 avg] | ↑ / ↓ / → |
| Blocker frequency (per week) | [baseline] | [cycle 3 avg] | ↑ / ↓ / → |
| Goal achievement rate | [baseline or N/A] | [% primary goals completed] | ↑ / ↓ / → |
| Flow efficiency | N/A (no pre-pilot measure) | [cycle 3 baseline %] | baseline |
| WIP compliance | N/A | [% of states respected limit] | baseline |
| Team health score (avg) | [baseline] | [end-of-pilot survey] | ↑ / ↓ / → |

**Qualitative evidence:**

- Pilot Journal summary: key observations across three cycles
- Team retrospective input: does the team want to continue? Under what conditions?
- Stakeholder feedback: has stakeholder visibility improved? Has goal clarity improved?

### 12.3 Criteria for GO (continue to full adoption)

A GO recommendation is appropriate when the majority of the following are true:

- [ ] Cycle time shows improvement or is stable (not significantly worse) vs. pre-pilot baseline
- [ ] Goal achievement rate across Cycle 2 and Cycle 3 is 75% or higher (primary goals completed)
- [ ] Team health score is the same or improved vs. pre-pilot baseline
- [ ] The team explicitly recommends continuation in the Cycle 3 retrospective input
- [ ] No critical failure patterns are present (see Section 15)
- [ ] Management confirms continued commitment to the conditions in Section 2.1

**GO does not require:**

- Perfect metrics — a team still improving is a GO candidate
- Unanimous team support — a majority in favor with specific concerns documented is acceptable
- Flow efficiency above a target threshold — the first baseline is just that: a baseline

### 12.4 Criteria for ADJUST (modify approach and continue)

An ADJUST recommendation is appropriate when:

- The team has adopted core GOAL practices but specific elements are generating significant friction without clear benefit
- Metrics are mixed: some improving, some not, with identifiable causes for the underperforming areas
- Management conditions were not fully honored (individual tracking requests, mid-cycle goal changes) and those conditions can be enforced going forward

**ADJUST means:**

- Identify the specific element(s) causing friction or underperformance
- Define a concrete modification (e.g., change the WIP formula, reduce the frequency of a ceremony, adjust the goal-setting format)
- Run one additional cycle under the modified conditions before re-evaluating
- Document the modification and its rationale

**ADJUST is not the same as abandoning GOAL.** It is evidence-based calibration.

### 12.5 Criteria for STOP (end the pilot without full adoption)

A STOP recommendation is appropriate when:

- Cycle time significantly worsened vs. pre-pilot baseline AND no identifiable cause exists that would change with more time
- Team health significantly declined AND the cause is attributable to GOAL-specific practices rather than external factors
- The team unanimously or near-unanimously opposes continuation, with specific substantive reasons rather than general discomfort with change
- Management conditions (Section 2.1) cannot be honored going forward and without them GOAL cannot function as designed
- A critical prerequisite condition (psychological safety, basic tooling, management support) has deteriorated since the pilot began

**What STOP means:**

STOP does not mean GOAL does not work. It means GOAL does not work for this team at this time under these conditions. The STOP decision should be documented with specificity about which conditions prevented success, so that a future attempt — when conditions improve — has a clear starting point.

### 12.6 How to present the decision to leadership

**Presentation format: 30 minutes**

The go/no-go presentation should be led by the Flow Master with the Product Strategist present. Use this structure:

```
1. What we set out to learn (5 min)
   - Restate the pilot's purpose and the specific questions it was designed to answer
   - Restate the pre-pilot conditions and baseline

2. What we did (5 min)
   - Brief description of what was implemented across three cycles
   - Any significant deviations from the plan and why they occurred

3. What the data shows (10 min)
   - Present the quantitative comparison table (Section 12.2)
   - Present key qualitative observations from the Pilot Journal
   - Present team health comparison
   - Present goal achievement rate

4. The team's recommendation (5 min)
   - What does the team recommend?
   - What specific conditions does the team request for full adoption?

5. The recommendation: GO / ADJUST / STOP (5 min)
   - State the recommendation clearly
   - State the rationale in 3 points
   - If GO: present the proposed expansion plan (Section 13)
   - If ADJUST: present the specific modifications and one-cycle reassessment timeline
   - If STOP: present what conditions would make a future attempt viable
```

---

## 13. Post-Pilot: Scaling to the Full Team

### 13.1 From pilot team to all teams

A GO decision means scaling GOAL from the pilot team to additional teams. This is not a simultaneous full-organization rollout — it is a structured expansion with the pilot team as the foundation.

**Recommended scaling sequence:**

```
Wave 1 (months 1–2 post-pilot):
   Add 1–2 teams adjacent to the pilot team.
   Pilot team members serve as embedded coaches for 2–4 weeks.
   Pilot team's Flow Master is available for weekly advisory sessions.

Wave 2 (months 3–4 post-pilot):
   Add 2–4 more teams using the documented pilot lessons.
   Wave 1 teams now have their own coaching capacity.
   Establish a cross-team GOAL community of practice.

Wave 3 (months 5–6 post-pilot):
   Remaining teams.
   Standard adoption path using updated playbook with pilot lessons incorporated.
   Cross-team Flow Master network established.
```

**What must not happen:**

- Simultaneous organization-wide rollout immediately after GO — this destroys the quality of adoption
- Pilot team members being extracted from their team to coach others full-time — they need to maintain their own GOAL practice
- Treating Wave 1 teams as if they have the pilot team's experience — each new team runs its own learning curve

### 13.2 Lessons-learned session format

Before any Wave 1 team begins, the pilot team holds a lessons-learned session with the Wave 1 teams present. This is a 90-minute structured knowledge transfer.

**Agenda:**

```
1. What GOAL looks like in practice (20 min)
   Pilot team members describe, in practical terms, what changed.
   Focus on: what does the Daily Flow Sync actually look like?
   What did the first WIP limit enforcement feel like?
   How does the Goal Review work when a goal is not completed?

2. What to expect in Cycle 1 (20 min)
   Pilot team's honest account of what was hard.
   Specific mistakes they made and how they recovered.
   What they wish they had known before starting.

3. What to expect in Cycle 2 (15 min)
   How the measurement layer was introduced.
   The "this feels slower" moment and how they handled it.

4. Q&A with pilot team (20 min)
   Wave 1 teams ask the pilot team directly — not the Flow Master or leadership.

5. What the pilot team recommends modifying from the standard playbook (15 min)
   Any team-specific adaptations that worked well and should be tried by others.
   Any standard practices that should be applied with more caution.
```

### 13.3 What to document for the next team

The Flow Master should prepare a concise handoff document — not a full report, but a practical guide — covering:

**Handoff document structure (target: 2–3 pages):**

1. **WIP limit formula we used:** What team size, what Focus Factor, and why
2. **Daily Flow Sync evolution:** What the sync looked like in Week 1 vs. Week 9
3. **The moment that worked best:** One specific instance where GOAL clearly solved a real problem
4. **The hardest transition:** What was most difficult and what made it easier
5. **Tool configuration:** How the board was set up, any custom fields added, what was and was not useful
6. **Management agreement specifics:** What was agreed, how it was maintained, any challenges
7. **Block Register insights:** What blocker types dominated and whether any systemic patterns appeared
8. **Recommended modifications:** Anything the pilot team would do differently on first day of a new pilot

---

## 14. Pilot Scorecard

### 14.1 Purpose

The Pilot Scorecard is a one-page summary of the pilot's results. It is the primary artifact for the go/no-go presentation and for the historical record of the pilot. Completed at the end of Cycle 3.

---

```
╔══════════════════════════════════════════════════════════════════════════╗
║                        GOAL PILOT SCORECARD                             ║
╠══════════════════════════════════════════════════════════════════════════╣
║  Team: ____________________   Pilot period: ____________ to ___________  ║
║  Flow Master: ______________  Product Strategist: __________________     ║
║  Team size: ________________  Cycles completed: ____________________     ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  FLOW METRICS                                                            ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  Avg cycle time — pre-pilot: ______ days  |  Cycle 3: ______ days       ║
║  Direction: [ ] Improved  [ ] Stable  [ ] Declined                      ║
║                                                                          ║
║  Blocker frequency — pre-pilot: ____/wk  |  Cycle 3: ____/wk           ║
║  Direction: [ ] Improved  [ ] Stable  [ ] Declined                      ║
║                                                                          ║
║  Flow efficiency baseline (Cycle 3): _______%                           ║
║                                                                          ║
║  WIP compliance rate (Cycle 3): _______%                                ║
║  (% of in-progress states that respected the WIP limit)                 ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  GOAL ACHIEVEMENT                                                        ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  Cycle 1 primary goals: __ of __ completed  [ ] ≥75%  [ ] <75%         ║
║  Cycle 2 primary goals: __ of __ completed  [ ] ≥75%  [ ] <75%         ║
║  Cycle 3 primary goals: __ of __ completed  [ ] ≥75%  [ ] <75%         ║
║  Overall goal achievement rate: _______%                                ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  PROCESS ADOPTION                                                        ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  Board discipline (1–5 avg across pilot): ______                        ║
║  Daily Flow Sync consistency (% days held): _______%                    ║
║  Block Register completeness (% blocked tasks logged): _______%         ║
║  Retrospective action follow-through rate: _______%                     ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  TEAM SATISFACTION                                                       ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  Team health score — pre-pilot: ______ / 5                              ║
║  Team health score — end of pilot: ______ / 5                           ║
║  Direction: [ ] Improved  [ ] Stable  [ ] Declined                      ║
║                                                                          ║
║  Team recommendation from Cycle 3 retrospective:                        ║
║  [ ] Continue to full adoption                                           ║
║  [ ] Continue with modifications (specify below)                        ║
║  [ ] Stop / reassess                                                     ║
║                                                                          ║
║  Modifications requested (if any): ________________________________      ║
║  ___________________________________________________________________     ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  STAKEHOLDER FEEDBACK                                                    ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  Visibility improvement vs. pre-pilot: [ ] Better  [ ] Same  [ ] Worse  ║
║  Goal clarity improvement: [ ] Better  [ ] Same  [ ] Worse              ║
║  Interrupt handling improvement: [ ] Better  [ ] Same  [ ] Worse        ║
║                                                                          ║
║  Stakeholder notes: _________________________________________________    ║
║  ___________________________________________________________________     ║
║                                                                          ║
╠══════════════════════════════════════════════════════════════════════════╣
║                                                                          ║
║  OVERALL RECOMMENDATION                                                  ║
║  ─────────────────────────────────────────────────────────────────────  ║
║  [ ] GO — Continue to full adoption                                      ║
║  [ ] ADJUST — Modify approach and run one additional cycle               ║
║  [ ] STOP — Do not continue at this time                                ║
║                                                                          ║
║  Decision rationale (3 points):                                         ║
║  1. _________________________________________________________________    ║
║  2. _________________________________________________________________    ║
║  3. _________________________________________________________________    ║
║                                                                          ║
║  Decided by: _____________________  Date: ____________________________  ║
║                                                                          ║
╚══════════════════════════════════════════════════════════════════════════╝
```

---

## 15. Pilot Failure Patterns

### 15.1 Overview

Pilots fail for identifiable, preventable reasons. The five patterns below account for the majority of pilot failures. Each is described with its early warning signs and a specific prevention strategy.

Understanding these patterns before the pilot begins — not during it — is the difference between catching a problem early and discovering it at the go/no-go meeting.

---

### Pattern 1: The Sponsor Disappears

**What it looks like**

Management agreed to support the pilot at kickoff, but the agreed conditions are quietly eroded as the pilot progresses. Individual productivity questions reappear. Ad hoc priority requests arrive outside the Interrupt Management Protocol. Cycle goals are changed informally mid-cycle. No one explicitly canceled the pilot — it is simply operating under conditions that make GOAL impossible to evaluate fairly.

**Early warning signs**
- First mid-cycle goal change request arrives in Week 2 and is accommodated without going through the Interrupt Protocol
- Management asks for individual task completion counts in a weekly update
- A stakeholder contacts a team member directly about a specific task without going through the Product Strategist
- The Flow Master starts accommodating WIP limit exceptions "just this once" due to external pressure

**Prevention**

Before the pilot begins, the management commitment (Section 2.1, Condition 4) must be explicit and written. The Flow Master is responsible for flagging — respectfully and immediately — any instance where the agreed conditions are not being honored.

When the first violation occurs: address it directly with the manager in a private conversation. "We agreed to X for the duration of the pilot. What happened this week was not consistent with that agreement. Can we reconfirm the commitment? The pilot cannot produce reliable data if the conditions keep changing."

If the violations continue after one explicit conversation: document them in the Pilot Journal and surface them in the go/no-go presentation as a context factor. A pilot that ran under compromised conditions does not produce valid evidence about GOAL — it produces evidence about what happens when GOAL is adopted without adequate management support.

---

### Pattern 2: The Board is Never Truly Adopted

**What it looks like**

The Flow Board exists and is technically maintained, but it reflects status at the end of the day (or worse, the end of the week) rather than in real time. Team members know where work stands from memory and verbal communication, not from the board. The Daily Flow Sync operates on verbal status reports, not board observations. The board is technically alive but functionally dead.

This pattern is dangerous because it is easy to miss. The team says the board is maintained. The metrics are recorded. But the board is not the single source of truth — people are. This means blockers are invisible (they exist only in the person's head), WIP violations are undetectable (the board shows one state while reality is another), and flow metrics are inaccurate (tasks are marked done at end of day, not when they actually completed).

**Early warning signs**
- The Daily Flow Sync starts with people updating the board in real time rather than the board already reflecting reality
- The Flow Master asks "when did this task move to Code Review?" and nobody knows exactly
- Multiple cards in In Progress are at the WIP limit numerically but nobody is actually blocked
- Task completion dates cluster on Friday afternoons

**Prevention**

The board discipline habit must be built in Week 1 with consistent, non-punitive enforcement. The Flow Master's daily board check before the sync is not optional — it is the primary enforcement mechanism. The practice of asking "is this card up to date?" for every stale card, every day, for the first two weeks, is what converts periodic updates into real-time updates.

If the pattern is detected mid-pilot: hold a brief team conversation (not at the Daily Flow Sync — separately). "I've noticed that the board is being updated at end of day rather than in real time. This matters because [explain why]. Starting today, I'm going to ask about any card that hasn't moved since the previous sync. I'm not trying to catch anyone — I'm trying to help us build the habit."

---

### Pattern 3: Goals Are Still Task Lists

**What it looks like**

The Product Strategist defines "goals" for each cycle that are, functionally, task lists with a title. "Build the user profile page, fix the login bug, and add email notifications" is not a cycle goal — it is three tasks. When cycle goals are task lists, GOAL's core value proposition (accountability to outcomes rather than activity) is absent. The team delivers tasks but cannot answer "what value did this cycle produce?"

This pattern also makes retrospectives meaningless: if the "goal" was just to complete three tasks, and the team completed three tasks, then every cycle is automatically successful regardless of whether any of those tasks produced value.

**Early warning signs**
- Cycle goals describe work to be done rather than outcomes to be achieved
- The Goal Review answers "yes, it's done" rather than "yes, and here is the evidence of value"
- The team cannot answer "what would need to be true for this cycle to be a failure?" for any goal
- Secondary goals look identical in format to primary goals — just more tasks

**Prevention**

In the kickoff meeting and in every Smart Planning Session, apply the outcome test: "Can this goal be evaluated without knowing which specific tasks were completed?" If the answer is no, reframe the goal.

The goal-framing coach questions:
- "What changes in the world when this is done?"
- "How will we know — with evidence — that this goal is complete?"
- "If the team completed this goal by doing completely different tasks than we expected, would we still count it as success?"

If the pattern persists into Cycle 2: this is a Product Strategist coaching need, not a team problem. The Flow Master should work directly with the Product Strategist outside the planning session to reframe 2–3 historical task-based goals into outcome goals, then use those as examples in the Smart Planning Session.

---

### Pattern 4: The Pilot Is Evaluated Too Early

**What it looks like**

After Cycle 1 — sometimes even during Cycle 1 — leadership or management draws conclusions about whether GOAL is working based on early, noisy, and intentionally incomplete data. A director looks at the Cycle 1 metrics, sees that cycle time is higher than pre-pilot estimates and that block rate is elevated, and announces "this isn't working." The pilot collapses not because GOAL failed but because it was evaluated before any meaningful signal could be produced.

This pattern is particularly damaging because it is self-fulfilling: the early evaluation produces skepticism, the skepticism reduces team commitment, the reduced commitment produces worse Cycle 2 results, and those results confirm the initial premature conclusion.

**Early warning signs**
- Management asks for metric comparisons at the end of Cycle 1
- The sponsor attends the Cycle 1 retrospective and asks performance-related questions
- Someone in leadership references "the new process" skeptically in a project status meeting during the pilot
- Individual productivity tracking questions appear in Week 3

**Prevention**

Set explicit expectations at the kickoff and in the management agreement: Cycle 1 and Cycle 2 metrics will not be shared with leadership for comparative evaluation. The only Cycle 1 and 2 reporting is the structured weekly update (Section 11). The full metric comparison happens at the end of Cycle 3.

If a premature evaluation attempt occurs: the Flow Master or pilot sponsor redirects it directly. "We agreed to evaluate the pilot at the end of Cycle 3 using the pre-pilot baseline as comparison. We're currently in Cycle 1. The data we have is intentionally incomplete — sharing it now would be like evaluating a surgeon on the first week of residency. Let's hold to the agreed evaluation timeline."

---

### Pattern 5: The Flow Master Role Is Not Genuinely Filled

**What it looks like**

Someone is designated as Flow Master but does not actually perform the role's core functions. WIP limits are suggested rather than enforced. The Daily Flow Sync is facilitated but not redirected when it becomes a standup. The Block Register exists as a document but is not actively maintained. Aging tasks appear on the board and are not flagged. The retrospective is facilitated without metric analysis.

This pattern produces a pilot that looks like GOAL (the ceremonies exist, the board exists, the terminology is used) but does not function like GOAL. The flow intelligence — the continuous observation and intervention that prevents small problems from becoming large ones — is absent. Metrics reflect a process with GOAL's shape but not GOAL's substance.

**Early warning signs**
- WIP violations occur and are noted but not addressed
- The Daily Flow Sync regularly runs over 10 minutes without the facilitator redirecting
- Board cards are stale and the Flow Master says "I'll follow up later" rather than addressing in the sync
- The retrospective focuses on team feelings rather than data because the data was not prepared in advance
- The Flow Master says "I don't want to seem like I'm policing everyone" when asked about enforcement

**Prevention**

Flow Master preparation before the pilot begins is the prevention. The person taking this role should:
1. Read the GOAL Methodology document completely
2. Read this Pilot Program guide completely
3. Understand specifically what "enforcement" means — it is not punitive, it is systematic and consistent
4. Accept that being the person who says "we're at WIP limit" or "this sync is going over time" will feel uncomfortable at first and do it anyway

If the pattern is detected mid-pilot: have a direct conversation with the Flow Master outside the team. "I've noticed that [specific behaviors] are not being enforced. The pilot needs active facilitation to produce valid results. What's making it hard to enforce [specific behavior]? Let's solve that directly."

If the Flow Master cannot perform the role effectively, consider whether a different person should take it — even mid-pilot. A mid-pilot role change is disruptive but less damaging than completing a three-cycle pilot that never had active facilitation.
