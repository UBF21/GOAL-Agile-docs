---
id: risk-management
title: Risk Management
sidebar_position: 15
description: A formal risk management model for GOAL teams — risk taxonomy, Risk Register artifact, identification techniques, response strategies, dependency risk, and integration into the Goal Cycle.
---

## Table of Contents

1. [Risk Philosophy in GOAL](#1-risk-philosophy-in-goal)
2. [Risk Taxonomy for Software Teams](#2-risk-taxonomy-for-software-teams)
3. [Risk Register Artifact](#3-risk-register-artifact)
4. [Risk Identification Techniques](#4-risk-identification-techniques)
5. [Risk Response Strategies](#5-risk-response-strategies)
6. [Risk Integration into the Goal Cycle](#6-risk-integration-into-the-goal-cycle)
7. [Risk Review Cadence](#7-risk-review-cadence)
8. [Risk Escalation](#8-risk-escalation)
9. [Dependency Risk](#9-dependency-risk)
10. [Risk Anti-Patterns](#10-risk-anti-patterns)

---

## 1. Risk Philosophy in GOAL

### 1.1 The foundational stance

GOAL's seventh core principle states: **Visibility Over Assumptions**. Risks are the most common class of hidden assumption in software teams. They exist in every cycle. Teams that do not name them do not eliminate them — they simply choose to be surprised by them.

GOAL treats risk management not as a bureaucratic gate or a PMO compliance exercise, but as a practical delivery tool. The purpose of naming a risk is to reduce the probability that it destroys cycle momentum.

The three-word principle for GOAL risk management is:

> **Risks are visible, owned, and time-bound.**

- **Visible:** Every risk known to any team member must be recorded and shared. Private risks — things one person worries about but never says — are invisible threats to the entire team.
- **Owned:** Every risk has exactly one owner. An owner is not someone who is responsible for preventing the risk. They are responsible for monitoring it, executing the response strategy, and raising the alarm if the risk materializes.
- **Time-bound:** Every risk has a review date. A risk without a review date is a risk that will be forgotten. Forgotten risks are indistinguishable from ignored risks.

### 1.2 Relationship to GOAL's existing artifacts

GOAL's Goal Cycle Plan already references "risk items" as a named component. This document formalizes what that means. The Risk Register described in Section 3 is the artifact that populates the risk items field of the Goal Cycle Plan. These two documents are connected:

- At Smart Planning, identified risks are added to the Risk Register
- The Goal Cycle Plan references the Risk Register by summary
- During the cycle, the Risk Register is the living document; the Goal Cycle Plan remains stable

### 1.3 What a risk is — and what it is not

A **risk** is an uncertain future event that, if it occurs, would negatively affect the team's ability to complete a goal within the expected cycle.

A **blocker** is a risk that has already materialized. Once a risk becomes real, it exits the Risk Register and enters the Block Register. The Blocked Task Protocol applies from that point forward.

An **assumption** is a belief held without confirmation. Unvalidated assumptions are the raw material of risks. During risk identification, the question "what are we assuming that might not be true?" converts assumptions into risks.

A **constraint** is a fixed, known limitation (budget cap, regulatory deadline, team headcount). Constraints are not risks — they are facts to be planned around. They may, however, be the source of risks (e.g., a fixed budget creates the risk that scope exceeds available resources).

### 1.4 Risk tolerance in GOAL

GOAL does not prescribe a universal risk tolerance level. Each team, product, and organization has a different threshold for acceptable risk. What GOAL prescribes is that the team's risk tolerance must be:

- Explicitly agreed upon, not assumed
- Documented in the Risk Register as a reference anchor
- Revisited when organizational context changes (new product stage, new stakeholders, regulatory changes)

---

## 2. Risk Taxonomy for Software Teams

GOAL organizes risks into five categories. This taxonomy exists to ensure completeness during risk identification. When a team brainstorms risks, working through each category systematically prevents the blind spots that emerge when teams only think about technical risks.

### 2.1 Technical Risks

Technical risks arise from the nature of software itself — uncertainty in implementation, architecture, infrastructure, and dependencies.

**2.1.1 Architecture risks**

| Example risk | Description |
|---|---|
| Architectural decision is unvalidated | A core design choice has not been prototyped. If it does not work, significant rework is required. |
| Performance under load is unknown | The system has never been tested at production scale. |
| Migration path not established | An existing data schema must be migrated but the migration strategy is untested. |
| Third-party SDK behavior is undocumented | A new library must be integrated. Edge case behavior is not known. |

**2.1.2 Dependency risks (technical)**

| Example risk | Description |
|---|---|
| External API rate limits unknown | An integration may hit rate limits at scale, requiring caching or retry logic not currently planned. |
| Library version incompatibility | A required upgrade may break other dependencies. |
| CI/CD pipeline fragility | The build pipeline has intermittent failures that block deployment. |

**2.1.3 Unknown unknowns (discovery risks)**

These are the hardest to enumerate because they are, by definition, not yet known. The best approach is to use historical Block Register data to identify areas where past cycles consistently surfaced surprises, and to treat those areas as elevated risk zones.

**Indicators of high discovery risk:**
- The team has never built this type of feature before
- The codebase in this area has not been touched in over six months
- The technical lead who last worked on this component has left the team
- Requirements in this area changed more than twice in the last two cycles

### 2.2 External Risks

External risks originate outside the delivery team. The team cannot eliminate them through its own actions — only prepare for them.

| Risk type | Examples |
|---|---|
| **Third-party delivery failure** | A vendor does not deliver an API, credential, or service by the agreed date. |
| **Infrastructure provider issues** | Cloud provider outage, DNS failure, certificate expiry, cost spike requiring emergency throttling. |
| **Vendor availability** | A key vendor contact is unavailable for approval or sign-off. |
| **Integration partner delays** | A partner team's work is a prerequisite for the current goal. |
| **Security or compliance change** | A regulatory body announces new requirements during the cycle. |
| **Environment access** | The team cannot access a production-like environment for testing. |

**Key characteristic:** External risks require mitigation strategies that do not depend solely on the team's own action. The owner of an external risk must have a fallback plan that the team can execute independently if the external party fails to deliver.

### 2.3 Team Risks

Team risks relate to the people doing the work — their availability, knowledge, and sustainability.

| Risk type | Description |
|---|---|
| **Capacity reduction** | A team member is unavailable (illness, unexpected leave, reassignment) for a significant portion of the cycle. |
| **Knowledge concentration** | Only one person on the team understands a critical system component. If that person is unavailable, the goal cannot be completed. |
| **Onboarding drag** | A new team member is joining during the cycle and will require mentoring time from senior members. |
| **Turnover** | A key contributor has announced departure during or immediately after the cycle. |
| **Skill gap** | The goal requires expertise the team does not currently have. |
| **Burnout signal** | One or more team members are showing early signs of unsustainable workload patterns. |

**Knowledge concentration deserves special attention.** It is one of the highest-probability, highest-impact team risks in software. A team where a single person holds critical knowledge about authentication, payments, data pipeline, or infrastructure is operating with structural fragility. The mitigation is not to fire that person — it is to systematically transfer their knowledge before it becomes a crisis.

**GOAL's approach to knowledge concentration:**

During retrospectives, the team should maintain a simple knowledge map:
```
Component / System area → Who knows it well → Who has partial knowledge → Who has none
```
Any component with only one "knows it well" entry is a knowledge concentration risk and should be flagged in the Risk Register.

### 2.4 Business Risks

Business risks originate from the organizational and commercial context in which the team operates.

| Risk type | Description |
|---|---|
| **Priority change** | A business event (competitor launch, market shift, executive decision) changes what is strategically important during the cycle. |
| **Stakeholder unavailability** | A key decision-maker or approver is unavailable for sign-offs required to complete the goal. |
| **Compliance or legal change** | A legal, regulatory, or contractual obligation emerges that affects what can be shipped. |
| **Budget constraint** | Resource or infrastructure costs exceed what was approved, limiting what can be delivered. |
| **Market deadline** | An external market event (a conference, a competitor's release date, a contract deadline) creates a fixed delivery window that may not be achievable. |
| **Goal definition ambiguity** | The goal was defined without full alignment with stakeholders, creating risk that the delivered outcome is rejected. |

**The priority change risk** is particularly important in GOAL because the methodology explicitly protects goal stability within a cycle (Section 8.3 of the core methodology). However, protection is only as good as the organization's willingness to honor it. When the probability of a mid-cycle priority change is high, this must be surfaced before the cycle starts — not as a reason to avoid commitment, but as a reason to design the cycle scope to be more resilient to partial completion.

### 2.5 Process Risks

Process risks arise from the team's own workflow, planning practices, and coordination mechanisms.

| Risk type | Description |
|---|---|
| **Estimation error** | The cycle duration estimate is significantly off, either because the goal was underestimated or because team capacity was overestimated. |
| **Scope creep** | Tasks or requirements expand incrementally during the cycle beyond what was agreed in Smart Planning. |
| **Dependency conflict** | Two goals within the same cycle depend on the same component, creating contention or integration risk. |
| **WIP discipline failure** | The team consistently exceeds WIP limits, creating the flow degradation GOAL is designed to prevent. |
| **Definition of Done gaps** | A task moves to Done without actually meeting DoD criteria, creating rework risk in later cycles. |
| **Incomplete grooming** | The backlog was not properly prepared before Smart Planning, resulting in goals with unclear acceptance criteria. |
| **Communication breakdown** | A decision made by one team member is not shared with the rest of the team, creating divergent assumptions. |

---

## 3. Risk Register Artifact

### 3.1 What the Risk Register is

The Risk Register is a living document that records all identified risks for the current Goal Cycle and tracks their status throughout the cycle. It is not a one-time planning artifact — it is updated as new risks are discovered and as existing risks evolve.

**Location:** The Risk Register should be maintained in the same tool as the Flow Board and Goal Cycle Plan. It is a team-owned document, not a management report.

**Ownership:** The Flow Master is responsible for ensuring the Risk Register is maintained. Individual risk owners are responsible for updating their own entries.

### 3.2 Required fields

Every entry in the Risk Register must contain the following fields:

```
Risk Register Entry — Required Fields

RISK-[ID]         Unique identifier (e.g., RISK-001, RISK-002)
Description       Clear, specific statement of the risk (1–3 sentences)
                  Bad:  "Technical problems"
                  Good: "The authentication service we depend on has not published
                         their v3 API documentation. If it is not available by
                         Day 3, our integration task cannot start."
Category          Technical / External / Team / Business / Process
Probability       1–5 scale (see scoring guide below)
Impact            1–5 scale (see scoring guide below)
Risk Score        Probability × Impact (range: 1–25)
Owner             One named person — not "the team"
Mitigation Plan   Specific, actionable steps being taken to reduce probability
                  or impact. Not generic. Not "monitor the situation."
Contingency Plan  What will be done if the risk materializes (i.e., becomes a blocker)
Status            Open / Monitoring / Escalated / Closed / Materialized
Review Date       The date when this risk entry will be reviewed and updated
```

### 3.3 Probability scale

| Score | Definition |
|---|---|
| **1** | Very unlikely. Has not happened in the last 5+ cycles. No current indicators. |
| **2** | Unlikely. Has happened once in past cycles. Low current signal. |
| **3** | Possible. Has happened in recent memory. Some current indicators present. |
| **4** | Likely. Pattern of occurrence across cycles. Strong current indicators. |
| **5** | Near certain. Expected to occur unless actively prevented. |

### 3.4 Impact scale

| Score | Definition |
|---|---|
| **1** | Negligible. Would cause minor inconvenience. Goal completion unaffected. |
| **2** | Low. Would cause a 1-day delay or require minor rework. Goal still achievable. |
| **3** | Moderate. Would cause a 2–3 day delay or require significant rework. Goal likely achievable with effort. |
| **4** | High. Would cause a cycle extension or partial goal failure. Primary goal at risk. |
| **5** | Critical. Would cause full cycle failure or force an Emergency Cycle reset. |

### 3.5 Risk scoring matrix

The Risk Score (Probability × Impact) places each risk in one of three zones:

```
                        IMPACT
                  1     2     3     4     5
               ┌─────┬─────┬─────┬─────┬─────┐
             5 │  5  │ 10  │ 15  │ 20  │ 25  │
               ├─────┼─────┼─────┼─────┼─────┤
P            4 │  4  │  8  │ 12  │ 16  │ 20  │
R              ├─────┼─────┼─────┼─────┼─────┤
O            3 │  3  │  6  │  9  │ 12  │ 15  │
B              ├─────┼─────┼─────┼─────┼─────┤
A            2 │  2  │  4  │  6  │  8  │ 10  │
B              ├─────┼─────┼─────┼─────┼─────┤
I            1 │  1  │  2  │  3  │  4  │  5  │
L              └─────┴─────┴─────┴─────┴─────┘
I
T     Score 1–4:    GREEN  — Monitor only. Review at end-of-cycle retrospective.
Y     Score 5–9:    YELLOW — Active monitoring. Review in every Goal Review.
      Score 10–14:  ORANGE — Active mitigation required. Review in Daily Flow Sync
                             when risk shows movement.
      Score 15–25:  RED    — Immediate action required. Consider cycle scope adjustment.
```

### 3.6 Risk Register maintenance

**Who updates it:**

| Update type | Responsible party | When |
|---|---|---|
| Add new risk | Any team member who identifies it | Immediately upon identification |
| Update status | Risk owner | At their risk's review date, or sooner if conditions change |
| Review all open risks | Flow Master | At every Goal Review |
| Archive closed risks | Flow Master | End of cycle, during retrospective setup |

**When it is updated:**

- At Smart Planning: initial risks are added
- During the cycle: any team member can add a risk they discover
- At Daily Flow Sync: if an active risk shows new signal, status is updated (briefly — not a detailed discussion)
- At Goal Review: all open risks are reviewed with the full team
- At Retrospective: materialized risks are analyzed; the register is archived for the cycle record

**The Risk Register is never frozen.** A risk discovered on Day 6 of a 10-day cycle is just as important as one identified at Smart Planning.

---

## 4. Risk Identification Techniques

### 4.1 Pre-cycle risk brainstorm (during Smart Planning)

Smart Planning already includes a "Risks and dependencies identified" step (Section 12.1 of the core methodology). This section formalizes that step into a structured 5-minute brainstorm.

**Format:**

```
Duration:     5 minutes (timed, not extended)
Facilitator:  Flow Master
Participants: All roles present at Smart Planning

Steps:
  1. Flow Master reads the goal(s) for the cycle aloud.
  2. Silent individual thinking: 90 seconds.
     Each person writes risks on sticky notes / digital cards — one risk per card.
  3. Round-robin sharing: each person reads one card, placed in the risk zone.
     No discussion during this phase — capture first, evaluate second.
  4. Rapid deduplication: merge identical or near-identical risks.
  5. Quick scoring: Flow Master assigns preliminary probability/impact scores.
     Full scoring can happen async after the session.
  6. Risks above score 8 are flagged for immediate mitigation planning.
```

**Why 5 minutes:**
Risk brainstorming tends to expand indefinitely if not time-boxed. Most high-value risks surface in the first 3 minutes. The 5-minute limit forces prioritization and prevents the session from becoming a risk-anxiety spiral.

### 4.2 Dependency mapping as risk source

Dependencies are the most reliable generator of external and technical risks. Before finalizing the cycle scope, the team performs a dependency map:

```
Dependency Map Template (per goal):

Goal: [Goal name]

Internal dependencies (other tasks in this cycle this goal depends on):
  → Task A must complete before Task B can start
  → [list all sequential dependencies]

External team dependencies (other teams whose work this goal depends on):
  → Team [X] must deliver [Y] by [date]
  → [list all cross-team dependencies]

Third-party dependencies (vendors, APIs, infrastructure):
  → [Service name] must provide [specific thing] by [date]
  → [list all third-party dependencies]

For each external or third-party dependency:
  ├── Is the dependency confirmed? (yes / no / partial)
  ├── Who is the owner on their side?
  ├── What is the risk if they are late?
  └── What is the fallback if they do not deliver?
```

Any dependency that is unconfirmed, has a tight timeline, or has no fallback automatically becomes a Risk Register entry.

### 4.3 Historical data mining from the Block Register

The Block Register (Section 7.4 of the core methodology) is a historical record of every blocked task. It is the most data-rich source of risk intelligence available to the team.

**Analysis questions for risk identification:**

```
Before each Smart Planning Session, the Flow Master reviews the last 3 cycles of Block Register data:

1. What types of blockers appeared most frequently?
   → These are high-probability risks for future cycles.

2. What was the average resolution time for each blocker type?
   → Long resolution times = high impact if the same blocker recurs.

3. Are there components, systems, or external parties that appear repeatedly?
   → Recurring blockers = systemic risk, not random variance.

4. Were any blockers complete surprises (i.e., not listed as risks before the cycle)?
   → These are candidates for the risk taxonomy — unknown unknowns to watch.

5. Did any blockers cascade into cycle extensions?
   → These deserve ORANGE or RED risk scoring if they could recur.
```

**Output:** A short list of "recurring risk patterns" that should be preemptively added to every relevant future cycle's Risk Register. These are not theoretical — they are empirically derived from the team's actual history.

### 4.4 Structured "what could go wrong?" questions by category

When the pre-cycle brainstorm alone does not surface enough risks (a sign the team may be overconfident), the Flow Master can guide the team through category-specific trigger questions.

**Technical:**
- Is there any area of the codebase we have not touched in a long time?
- Are we integrating with any API we have not used in this configuration before?
- Have we validated the architecture for the new feature at the load we expect?
- Does this goal require a database migration? Have we tested the rollback?
- Are all our dependencies (libraries, services) on versions we have tested together?

**External:**
- Is there any third party whose action we need to proceed?
- Have we confirmed all required credentials, API keys, or environment access?
- Are there any approval gates from outside the team before we can deploy?
- Is any team we depend on currently in a freeze, release, or high-load period?

**Team:**
- Is anyone on the team at or near 100% capacity going into this cycle?
- Is there a vacation, conference, or planned absence during this cycle?
- Is there only one person who can work on any part of this goal?
- Are we onboarding someone new this cycle?

**Business:**
- Has this goal been clearly signed off by all stakeholders who will evaluate it?
- Is there any business event (a product launch, a board meeting, a fiscal deadline) that could redirect attention during this cycle?
- Are there any regulatory or compliance considerations we have not fully mapped?
- Is the acceptance criteria for this goal unambiguous to everyone in the room?

**Process:**
- Is the cycle scope too large given our recent cycle time data?
- Are any two goals in this cycle dependent on each other in a way that creates a sequential bottleneck?
- Have all items in this cycle been groomed to the ready-to-execute standard?
- Are there any tasks in this cycle that have never been done before and may be harder than estimated?

---

## 5. Risk Response Strategies

Every risk in the Risk Register must have a stated response strategy. GOAL uses four standard response strategies, adapted to the context of software delivery teams.

### 5.1 Avoid

**Definition:** Change the goal, approach, or scope of the cycle to eliminate the risk entirely.

**When to use:** When the probability and impact are both high (RED zone) and the avoided element is not essential to the goal's core value.

**GOAL-specific examples:**

```
Risk: The goal requires integrating with Service X, whose API is undocumented
      and whose support team is unresponsive. (Score: 4×4 = 16 — RED)

Avoid strategy:
  Redesign the goal to not require Service X in this cycle.
  Use a mock/stub for Service X so the rest of the feature can be built
  and validated. Defer the real integration to a future cycle when Service X
  documentation is available or a different integration is chosen.
```

```
Risk: This goal requires touching the authentication module, which has
      zero test coverage and no documentation. Any change risks breaking
      login for all users. (Score: 3×5 = 15 — RED)

Avoid strategy:
  Remove the authentication change from this cycle's scope.
  Add a dedicated "authentication refactor and coverage" goal to the next cycle,
  properly prepared with test coverage before the feature work begins.
```

**Important:** Avoid does not mean "give up on the goal." It means finding a path that achieves the goal's value without the risk. The distinction matters — avoidance is a creative response, not a capitulation.

### 5.2 Mitigate

**Definition:** Take specific actions before or during the cycle to reduce the probability that the risk occurs, reduce the impact if it does occur, or both.

**When to use:** When the risk cannot be avoided (the element that carries risk is essential to the goal) but specific actions can reduce its severity.

**GOAL-specific examples:**

```
Risk: Only one developer knows the payment processing module, and that
      developer may be called away for a family emergency during the cycle.
      (Score: 2×4 = 8 — YELLOW)

Mitigation (probability):
  Schedule a knowledge transfer session in Week 1. The knowledgeable developer
  walks a second developer through the module for 2 hours, documenting key
  decision points. The second developer is now capable of handling straightforward
  changes with minimal guidance.

Mitigation (impact):
  Break the payment-related task into a portion the knowledgeable developer
  completes first (the risky core), and a portion that is straightforward
  enough for any team member.
```

```
Risk: The estimated cycle duration is 2 weeks, but the last 3 similar cycles
      ran 20% over estimate. (Score: 4×3 = 12 — ORANGE)

Mitigation:
  Apply the 20% historical overrun buffer explicitly to the cycle estimate.
  Treat the cycle as 2.4 weeks for planning purposes.
  Reduce secondary goal scope to protect primary goal completion.
```

### 5.3 Transfer

**Definition:** Assign responsibility for managing or absorbing the risk to another party — typically through contracts, SLAs, insurance, or organizational agreements.

**When to use:** When the risk originates from an external party and a formal agreement can shift accountability for delivery.

**Practical note:** Transfer is the least common strategy in software team risk management. Most risks cannot be truly transferred in a pure sense. However, there are genuine GOAL-relevant cases:

**GOAL-specific examples:**

```
Risk: The infrastructure hosting our service is managed by a third-party
      provider. A major outage could prevent us from deploying during the cycle.
      (Score: 2×4 = 8 — YELLOW)

Transfer:
  Confirm the SLA with the provider. Document the escalation path if an outage
  occurs. Ensure the vendor's incident response obligation is in writing.
  The risk of outage itself is transferred to the provider within the SLA terms.
  The team's responsibility is limited to knowing the escalation path.
```

```
Risk: Legal review of the new terms and conditions is required before launch,
      and the legal team's availability is uncertain.

Transfer:
  Formalize a delivery SLA with the legal team: "Legal review delivered within
  3 business days of submission." This converts an uncertain dependency into
  a measurable commitment, shifting accountability for the delay to the legal team
  if the SLA is breached.
```

### 5.4 Accept

**Definition:** Acknowledge the risk, document it, and continue without active mitigation, because the cost of mitigation exceeds the probable cost of the risk materializing.

**When to use:** GREEN zone risks (score 1–4) where the impact is low enough that active mitigation is not worth the team's time. Also used for risks where all mitigation options have been exhausted.

**The critical rule about acceptance:** Accepting a risk is not ignoring it. Accepted risks must still be monitored and reviewed. The difference is that no additional action is taken to reduce them.

**GOAL-specific examples:**

```
Risk: The third-party analytics service we use occasionally has 2-3 hour
      outages, which would prevent our analytics events from being tracked
      during that window. (Score: 2×1 = 2 — GREEN)

Accept:
  The impact is negligible — a few hours of analytics data is not critical.
  No mitigation is warranted. The risk is logged in the register with
  status "Accepted" and a review date at cycle end. If it materializes,
  it requires no escalation.
```

```
Risk: A team member is presenting at a conference on Day 4 and will miss
      that day. (Score: 5×1 = 5 — YELLOW, border case)

Accept:
  One day of reduced capacity is within normal variance. The cycle estimate
  already includes a standard availability buffer. No special action needed.
  Log and monitor.
```

---

## 6. Risk Integration into the Goal Cycle

### 6.1 How risks affect cycle duration estimate

The cycle duration estimate established in Smart Planning must incorporate risk. An estimate that ignores risk is an optimistic forecast, not a realistic one.

**Risk-adjusted cycle estimate formula:**

```
Base Estimate:       Days required assuming everything goes as planned
Risk Buffer:         Additional days based on risk register scores

Risk Buffer Calculation:
  Sum all Risk Scores for ORANGE and RED risks in the register.
  Divide by a calibration factor based on team's historical risk accuracy.

  Simplified rule:
    0 RED risks, 0 ORANGE risks:    +0 days buffer
    1–2 ORANGE risks (score 10–14): +1 day buffer
    3+ ORANGE risks:                +2 days buffer
    1 RED risk (score 15–25):       +2 days buffer
    2+ RED risks:                   +3–4 days buffer or descope consideration

Adjusted Cycle Estimate = Base Estimate + Risk Buffer
```

The Risk Buffer is documented explicitly in the Goal Cycle Plan. Stakeholders should understand that the buffer exists because of named, specific risks — not because the team is padding.

### 6.2 Risk-adjusted capacity calculation

Team capacity is not simply headcount multiplied by working days. Risk-adjusted capacity accounts for the probability that team capacity will be reduced.

```
Base Capacity:       Team members × cycle days × focus factor
Risk Adjustments:
  - For each identified TEAM risk (score ≥ 8): reduce capacity by
    (team member count affected) ÷ (total team) × 20%
  - For known planned absences: reduce proportionally
  - For knowledge concentration risks: reduce effective capacity
    for that component by 50% (assumes one person does the work of two
    when knowledge is concentrated)

Risk-Adjusted Capacity = Base Capacity × (1 - sum of reduction factors)
```

This adjusted capacity figure is used by the Flow Master when setting the WIP limit for the cycle.

### 6.3 Risk threshold for cycle scope

When the Risk Register shows an unusually high concentration of RED and ORANGE risks, the cycle scope should be actively reduced. The rationale is simple: a cycle loaded with high-risk items and full scope has a high probability of failure. A cycle with reduced scope and the same risks has a higher probability of delivering its core goal successfully.

**Decision framework:**

```
Risk Load Assessment at Smart Planning:

If the team identifies:
  ≤ 2 YELLOW risks and 0 ORANGE/RED risks:
    → Proceed with full planned scope.

  3+ YELLOW risks or 1–2 ORANGE risks:
    → Review each secondary goal.
    → Remove the secondary goal most dependent on risky components.
    → Add risk buffer to estimate.

  1+ RED risks:
    → Mandatory scope conversation before cycle starts.
    → Either: reduce primary goals to the minimum valuable subset
    → Or:     redesign the goal to avoid the RED risk (see Avoid strategy)
    → Do not start a cycle with a RED risk and full scope. This is a known failure pattern.

  2+ RED risks:
    → Escalate to Product Strategist immediately.
    → Consider whether the cycle is ready to start at all.
    → Risk pre-work (spike, validation, dependency confirmation) may need to happen
       before the goal cycle begins.
```

---

## 7. Risk Review Cadence

### 7.1 Daily Flow Sync risk scan (2 minutes, conditional)

The Daily Flow Sync is limited to 10–12 minutes and should not become a risk review meeting. However, when the Risk Register contains active ORANGE or RED items, a brief risk scan is appended:

```
Risk scan trigger: Risk Register contains ≥ 1 ORANGE or RED open risk.

Format (2 minutes maximum):
  Flow Master reads each active ORANGE/RED risk name and asks:
  "Any new information on [risk name]?"

  Acceptable responses:
    "No change." → Move on. No discussion.
    "It moved — here's the update." → Risk owner updates register after sync.
    "It's happening." → Risk has materialized; blocker protocol activates immediately.
```

This keeps risk visible without turning every daily sync into a risk management session.

### 7.2 Full risk review at Goal Review

The Goal Review (Section 12.4 of the core methodology) includes a dedicated risk review segment:

```
Risk Review segment in Goal Review (5–10 minutes):

1. Flow Master reviews all open risks in the Risk Register with the full team.
2. For each open risk:
   - Was the risk assessment accurate? (Was the probability/impact correctly estimated?)
   - Did the risk materialize? (If yes → log as "Materialized" and note actual impact)
   - Is it still relevant for the next cycle?
3. Risks that did not materialize and are no longer relevant → Close.
4. Risks that did not materialize but remain relevant → Carry forward to next cycle's register.
5. Materialized risks → move to retrospective analysis agenda.
```

### 7.3 Risk retrospective analysis

The Data-Driven Retrospective (Section 12.5 of the core methodology) includes a risk analysis section:

```
Risk Retrospective Analysis (10 minutes):

Questions:

For risks that materialized (became real):
  1. Was this risk in the register before it materialized?
     If NO → This is an identification gap. Add to future standard risk checklist.
     If YES → The risk was known. Did the mitigation plan work? Why or why not?

  2. Was the impact score accurate?
     If actual impact was higher than estimated → recalibrate team's impact scoring.

  3. Was the probability score accurate?
     If this risk has materialized in multiple cycles → increase to score 4–5 for future.

For risks that were listed but did NOT materialize:
  1. Did the mitigation plan work, or was the risk simply overestimated?
  2. If overestimated → consider reducing probability score for similar risks in future.
  3. If mitigation worked → document the mitigation as a reusable playbook entry.

Outcome:
  1–2 risk management improvements per retrospective.
  These become inputs to the next cycle's risk identification process.
```

---

## 8. Risk Escalation

### 8.1 When a risk becomes a blocker

A risk materializes when the uncertain future event it described actually occurs. At that moment, it is no longer a risk — it is a blocker. The transition must be immediate and explicit:

```
Risk materialization protocol:

1. Risk owner or any team member recognizes the risk has materialized.
2. Update the Risk Register: status → "Materialized", date materialized → today.
3. Create a Block Register entry immediately (per Blocked Task Protocol,
   Section 14 of the core methodology).
4. Flag at the next Daily Flow Sync, or immediately if score was RED.
5. Risk owner now becomes the blocker owner until resolution.
```

The distinction between a risk (future, uncertain) and a blocker (present, certain) matters because they trigger different protocols. Misclassifying a materialized risk as "still being monitored" delays resolution and masks the true state of the cycle.

### 8.2 When a risk requires stakeholder notification

Not all risks require stakeholder involvement. Most risks are internal delivery concerns that the team resolves through its own mitigation strategies. Stakeholder notification is appropriate when:

```
Notification triggers:

  The risk affects the goal's delivery date in a way that changes
  stakeholder expectations:
    → Notify Product Strategist immediately.
    → Product Strategist determines whether to notify upstream stakeholders.

  The risk is in the Business category and involves stakeholder availability,
  compliance, or external commitment:
    → Notify Product Strategist to coordinate stakeholder response.

  A RED risk has materialized and cycle extension is likely:
    → Product Strategist and Flow Master notify stakeholders within 24 hours.
    → Communicate: what happened, expected impact, and action plan.

  The risk requires a resource, budget, or authority decision that is outside
  the team's control:
    → Escalate to the appropriate organizational level with a clear
       request: "We need [specific decision/resource] by [date] to proceed."
```

**Communication standard:** Stakeholder notifications about risk escalation must include (1) what the risk is, (2) what the team is doing about it, (3) what the stakeholder needs to do (if anything), and (4) the expected timeline for resolution or update. Vague risk communications ("we may have a problem") are not acceptable.

### 8.3 Risk-driven cycle extension justification

When a risk materializes and requires a cycle extension, the extension must be formally documented (per Section 8.2 of the core methodology, Extension Category A, C, or E depending on risk type). The Risk Register entry for the materialized risk becomes the primary justification document.

```
Risk-driven extension justification record:

Risk ID:              [RISK-XXX]
Risk category:        [Technical / External / Team / Business / Process]
Materialized on:      [date]
Actual impact:        [description of what happened]
Original risk score:  [score — was the risk properly anticipated?]
Extension reason:     [GOAL Extension Category A/C/E]
Additional days:      [number]
Approved by:          Flow Master + Product Strategist
Mitigation taken:     [what actions were taken once it materialized]
Prevention for next cycle: [what will be done differently]
```

This documentation serves two purposes: it justifies the extension to stakeholders with concrete evidence, and it feeds the retrospective analysis for continuous improvement of risk identification.

---

## 9. Dependency Risk

Dependency risk is given its own section because it is the most frequent source of cycle failure in modern software teams. Almost every non-trivial goal has dependencies, and unmanaged dependencies consistently become the blockers that drive cycle extensions.

### 9.1 Mapping all external dependencies before cycle start

Before the cycle clock starts, every dependency must be mapped. A dependency that is "probably fine" without confirmation is a risk with unknown probability and impact — the worst kind.

**Pre-cycle dependency confirmation checklist:**

```
For each dependency in the cycle:

External teams:
  □ Has the dependent team confirmed they will deliver by [date]?
  □ Do we have a named contact who can be reached if they are delayed?
  □ Is their delivery in a state visible to us (e.g., a shared board or
    ticket we can monitor)?

Third-party services / APIs:
  □ Has the vendor confirmed API stability for the integration period?
  □ Do we have all required credentials, keys, and documentation?
  □ Have we tested the integration in a non-production environment?

Infrastructure:
  □ Is the target environment provisioned and accessible?
  □ Are there any planned maintenance windows during the cycle?
  □ Do we have the necessary access permissions?

Internal (cross-component) dependencies:
  □ Are all prerequisite tasks ready-to-execute in the backlog?
  □ Is there a risk that a prerequisite task will block a downstream task
    due to ordering constraints?
```

Any item where the answer is "no" or "unknown" becomes a dependency risk in the Risk Register.

### 9.2 Dependency risk scoring

Dependencies should be scored using the standard Risk Register matrix with additional weight given to the following factors:

```
Dependency risk scoring adjustments:

  Unconfirmed dependency (no explicit commitment from dependent party):
    → Add +2 to probability score
    → Add +1 to impact score

  No fallback plan available:
    → Add +2 to impact score

  Dependent party has failed to deliver in a previous cycle:
    → Add +2 to probability score (historical pattern)

  Critical path dependency (this task cannot start without the dependency):
    → Add +1 to impact score (delays cascade)
```

### 9.3 Mitigation: parallel tracks, early validation, fallback plans

**Parallel tracks**

When a goal has a high-risk external dependency, the team should identify work that can proceed in parallel — work that does not require the dependency to be resolved. This prevents a single dependency from idling the entire team.

```
Example:
Goal: Integrate payment provider X into the checkout flow.
Dependency risk: Payment provider X has not provided sandbox credentials.

Parallel track:
  - Build the full checkout UI flow using a mock payment interface.
  - Build the backend payment service abstraction layer with a mock provider.
  - Write all integration tests against the mock.
  - Only the final integration step requires real credentials from provider X.
  If credentials arrive late, only the last step is delayed — not the entire goal.
```

**Early validation (spike)**

For dependency risks with probability ≥ 3, a validation spike should be scheduled in the first quarter of the cycle:

```
Spike definition:
  A time-boxed investigation (maximum half a day) to validate the dependency.
  Output: confirmed working OR confirmed broken, within Day 2 of the cycle.
  If broken: the risk is now a blocker. Escalate immediately.
  If working: the risk score is reduced. Monitor and move on.

Spikes for dependency validation are Small tasks on the Flow Board.
They are not optional when the dependency risk score is ≥ 10.
```

**Fallback plans**

Every external dependency in the ORANGE or RED zone must have a documented fallback plan before the cycle starts. A fallback plan answers: "If this dependency does not come through, what do we do to still deliver the core goal value?"

```
Fallback plan template:

Dependency:       [what we need from whom]
Expected by:      [date]
Fallback trigger: [date when we switch to fallback if not resolved]
Fallback action:  [specific alternative approach]
                  "If vendor X does not deliver API credentials by Day 3,
                   we build the feature using vendor Y's equivalent API,
                   which we already have access to."
Fallback owner:   [named person responsible for executing the fallback]
Scope impact:     [what is lost if we use the fallback — is the goal still fully achievable?]
```

---

## 10. Risk Anti-Patterns

Anti-patterns are risk management behaviors that appear helpful but actively undermine the process. Recognizing them is the first step to correcting them.

### 10.1 Risks listed but never reviewed

**The pattern:** The team dutifully creates a Risk Register at Smart Planning. Nobody looks at it again until the retrospective, at which point several risks have quietly materialized without any response.

**Why it happens:** Risk registration becomes a checkbox activity. The team feels that writing the risk down is sufficient. There is no structured review cadence, so the register becomes a graveyard of good intentions.

**The correction:** Implement the review cadence from Section 7. Assign a risk owner who has explicit accountability. The Flow Master includes the risk register in their daily board review. If a risk has not been reviewed on its review date, it is raised at the next Daily Flow Sync.

### 10.2 "It won't happen to us" bias

**The pattern:** The team consistently assigns low probability scores to risks based on optimism rather than evidence. "Yes, that dependency has failed before, but we talked to them this time, so it'll be fine." When risks materialize, the team is genuinely surprised.

**Why it happens:** Teams are psychologically motivated to want their plans to succeed. Assigning a high probability to a risk feels like admitting the plan is bad. It can also feel disrespectful to partners (assigning a high probability that a vendor will fail implies distrust).

**The correction:** Use the Block Register as the primary input for probability scoring, not gut feeling. Historical data is neutral. If the same type of risk has materialized three times in the last five cycles, the probability score is 4 or 5, period. Separate the scoring exercise from the relationship management exercise — you can trust a vendor and still correctly score their delivery risk based on history.

### 10.3 Over-risking (listing everything as a risk)

**The pattern:** The team lists every conceivable uncertainty as a risk. The Risk Register contains 30 items for a two-week cycle. Every item is scored as ORANGE. The register becomes unmanageable, the team cannot prioritize, and the entire risk management activity loses credibility.

**Why it happens:** A team recently burned by an unexpected event tends to over-compensate by trying to anticipate everything. Risk management becomes risk anxiety.

**The correction:** Apply the scoring matrix rigorously. GREEN risks (score 1–4) are logged and forgotten until the retrospective. They do not require active management. Focus attention exclusively on ORANGE and RED risks. If everything is ORANGE, recalibrate: re-score using strict definitions. The goal is signal clarity, not comprehensiveness.

**The practical limit:** A well-managed GOAL cycle should have no more than 5–8 risks in the register. If you have more, you are either over-risking or the cycle scope is too large.

### 10.4 Risks without owners

**The pattern:** Risks are listed in the register with "team" or "TBD" in the owner field. When the risk materializes, nobody takes action because nobody felt personally responsible.

**Why it happens:** Assigning ownership feels awkward, especially when the risk involves an area outside one person's expertise. The team defaults to collective ownership, which in practice means no ownership.

**The correction:** Every risk must have exactly one named owner — a specific person, not a role, not a team. The owner does not need to be the person who can resolve the risk. They need to be the person who monitors it and raises the alarm if it moves. Ownership is accountability for awareness and communication, not for solving every problem alone.

**A useful framing:** The risk owner's job is to be the last person who can say "I didn't know that was happening." If the risk materializes and surprises the risk owner, the ownership structure failed. If the risk materializes and the risk owner is already raising the alarm — the system worked.

---

## Appendix A: Risk Register Template

```
# Risk Register — [Team Name] — Cycle [N]
# Created: [date] | Last Updated: [date]
# Flow Master: [name]

---

| Field         | Value                                    |
|---------------|------------------------------------------|
| Risk ID       | RISK-001                                 |
| Description   | [1–3 sentence specific risk description] |
| Category      | Technical / External / Team / Business / Process |
| Probability   | 1 / 2 / 3 / 4 / 5                        |
| Impact        | 1 / 2 / 3 / 4 / 5                        |
| Risk Score    | [Probability × Impact]                   |
| Zone          | GREEN / YELLOW / ORANGE / RED            |
| Owner         | [First name Last name]                   |
| Mitigation    | [Specific actions to reduce P or I]      |
| Contingency   | [What to do if risk materializes]        |
| Status        | Open / Monitoring / Escalated / Closed / Materialized |
| Review Date   | [date]                                   |
| Notes         | [optional — updates, changes, context]   |

---

[Repeat for each risk]

---

Cycle Risk Summary:
  Total risks:           [n]
  RED (15–25):           [n]
  ORANGE (10–14):        [n]
  YELLOW (5–9):          [n]
  GREEN (1–4):           [n]
  Risk buffer applied:   [+N days]
  Risks materialized:    [n] (carried to Block Register)
```

---

## Appendix B: Risk Management Checklist for Each Cycle Event

```
Smart Planning Session:
  □ Pre-cycle risk brainstorm completed (5 min)
  □ Dependency map created for each goal
  □ Block Register from last 3 cycles reviewed for recurring patterns
  □ All risks scored and entered in Risk Register
  □ Risk buffer added to cycle estimate
  □ RED risks resolved, avoided, or cycle scope reduced accordingly
  □ All RED/ORANGE risks have named owners

During the cycle (Flow Master daily check):
  □ Risk Register reviewed for review dates due
  □ Any new risks identified and added?
  □ Any risk showing new signal → status updated

Daily Flow Sync (when register has ORANGE/RED items):
  □ 2-minute risk scan appended to sync
  □ Any risk confirmed as materialized → Blocked Task Protocol activated

Goal Review:
  □ All open risks reviewed with full team
  □ Materialized risks documented with actual impact
  □ Non-materialized, non-relevant risks closed
  □ Relevant risks carried to next cycle register

Data-Driven Retrospective:
  □ Risk retrospective analysis completed
  □ Identification gaps addressed (risks that should have been in register)
  □ Probability/impact scoring recalibrated based on outcomes
  □ Successful mitigation playbooks documented
  □ 1–2 risk management improvements identified
```
