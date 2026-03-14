---
id: anti-patterns
title: GOAL Anti-Patterns
sidebar_position: 2
description: Complete catalog of single-team and multi-team GOAL anti-patterns — symptoms, root causes, and correction approaches.
---

# GOAL Anti-Patterns

Anti-patterns are recognizable ways that the methodology is commonly misapplied. They look like legitimate adaptations but consistently produce negative outcomes. Knowing them gives teams a shared vocabulary to diagnose and correct their own behavior without resorting to blame.

---

## Single-Team Anti-Patterns

### 1. Scrum-Washing GOAL

**Symptom:** The team uses Goal Cycles but fills them with a fixed task list from the start. No tasks are added or removed during the cycle. Goals are essentially sprint commitments with a different name. The team updates tasks each standup rather than tracking column movement.

**Why it happens:** Teams adopting GOAL from Scrum revert to familiar patterns under pressure. The sprint mindset — commit to a task list, execute the list, report on list completion — is deeply ingrained.

**Root cause:** The team has not internalized the distinction between goals (outcomes) and tasks (paths to outcomes). The Scope Flexibility Rule is not being exercised.

**Correction:** In the next Smart Planning Session, explicitly define only goals and an initial list of no more than 3 tasks. Add more tasks as the cycle progresses. Review the Scope Flexibility Rule with the team. The Flow Master should ask at each Daily Flow Sync: "Is there a better way to achieve this goal than the tasks currently on the board?"

**Detection:** Check whether the task list at cycle end matches the task list from Smart Planning almost exactly. If it does, Scrum-Washing is likely.

---

### 2. Ignoring WIP Limits Under Pressure

**Symptom:** The WIP limit is 4 but the board consistently shows 6–8 active tasks. The Flow Master stops enforcing it because "everything is urgent." The Focus Ratio on the Flow Metrics Dashboard consistently exceeds 1.0.

**Why it happens:** Short-term pressure overrides long-term system health. Adding more active tasks feels productive; the cognitive load cost is invisible in the moment.

**Root cause:** The team does not have visceral experience of what happens when WIP limits are respected vs violated. The connection between WIP limit enforcement and cycle time is abstract until the data makes it concrete.

**Correction:** Enforce the limit strictly for one full cycle. Present the flow efficiency and cycle time data from the period of violation vs the period of compliance. Data usually makes the case more effectively than any argument. If "everything is urgent" is the objection, use the Interrupt Management Protocol to force explicit prioritization.

**Detection:** Focus Ratio consistently above 1.0 on the Flow Metrics Dashboard.

---

### 3. Retrospectives Without Data

**Symptom:** Retrospectives become complaint sessions or praise sessions. Improvements identified are vague ("communicate better", "be more organized"). Nothing measurably changes between cycles. No metrics are reviewed at the start of the retrospective.

**Why it happens:** Teams skip the Flow Metrics Dashboard preparation before the retrospective. Without data, the discussion defaults to the most recent memorable events, which introduces recency bias and social dynamics.

**Root cause:** The Flow Metrics Dashboard is not being maintained, or the team does not believe the data is useful for process discussion.

**Correction:** Make it a rule that no retrospective topic is valid unless it can be pointed to in the metrics. Prepare the Flow Metrics Dashboard before the retrospective, not during it. When a team member raises a topic without data, the Flow Master redirects: "Which metric does this show up in?" If it shows up nowhere, it is anecdotal.

**Detection:** The retrospective produces action items not connected to any measurable metric.

---

### 4. Expedite Lane Inflation

**Symptom:** There are always 2–3 tasks in the Expedite lane. Everything is "urgent." The regular flow is perpetually disrupted. The Expedite lane has become a second In Progress column for high-priority work.

**Why it happens:** The interrupt classification protocol is not being enforced. P3 requests — disguised normal requests framed with urgency language — are being treated as P1/P2. Stakeholders have learned that using urgency language bypasses the planning process.

**Root cause:** The Flow Master and Product Strategist are not consistently applying the P1/P2/P3 classification criteria, or they are avoiding the social discomfort of telling stakeholders their request is not actually urgent.

**Correction:** Review the Block Register interrupt log. Present the data on how many interrupts entered the cycle and their classification. Require documentation of business impact before any P2 classification. The single-task rule in the Expedite Lane makes this anti-pattern visible — when a second task is trying to enter Expedite, it forces the question: which one is actually more urgent?

**Detection:** More than one card in the Expedite lane simultaneously.

---

### 5. Definition of Done Negotiation

**Symptom:** Tasks are moved to Done before meeting the full DoD. "We'll add the tests next cycle." "Code review was done verbally." "It's deployed to prod, that's basically validation." The Done column contains tasks with unchecked DoD items.

**Why it happens:** End-of-cycle deadline pressure. The DoD starts as a quality floor and drifts to a ceiling — something to achieve when convenient rather than something required for completion.

**Root cause:** Short-term cycle pressure is allowed to override the long-term protection the DoD provides. The cumulative technical debt cost of DoD shortcuts is not visible until it becomes a crisis.

**Correction:** The Flow Master must refuse to count tasks toward goal completion if they do not meet the DoD. This causes short-term pain but provides long-term protection. Track DoD violations in the Block Register as a separate category. Present the data at retrospective: what percentage of tasks completed this cycle met the full DoD? What was the rework rate for tasks that didn't?

**Detection:** Tasks in the Done column with unchecked DoD items, or tasks marked Done without a code review record.

---

### 6. Invisible Work

**Symptom:** Team members are doing work that is not on the Flow Board — support requests, meetings, ad-hoc debugging, documentation updates, on-call rotations. The board shows 4 active tasks but the team is actually handling 8 work items. Flow metrics are consistently off from what the team experiences.

**Why it happens:** People feel small tasks are too trivial to put on the board or don't think of support/operational work as "real work." There may also be social pressure not to make certain work types visible.

**Root cause:** The team has not internalized GOAL's rule that all work goes on the board. There is an implicit distinction between "project work" and "other work" that GOAL explicitly rejects.

**Correction:** All work goes on the board. There is no minimum size for a task card. A 20-minute debugging session that turns into a 3-hour investigation belongs on the board, retroactively if necessary. Make "off-board work" a retrospective metric: at cycle end, estimate what percentage of actual work time was not represented on the board. Use this to recalibrate WIP limits and Focus Factor.

**Detection:** Delivery Rate significantly lower than expected given WIP levels; team members reporting feeling busy without much showing on the board.

---

### 7. Goal Drift

**Symptom:** The primary goals at the end of a cycle are not the same as the goals defined at planning, but nobody noticed the change happening. Small scope additions accumulated without formal change records. The Cycle Accuracy Index data is compromised because success was measured against goals different from what was originally committed.

**Why it happens:** Small, individually reasonable scope expansions accumulate without anyone noting a direction change. "We're already in this area, so let's also..." is the typical pattern.

**Root cause:** The Goal Cycle Plan is being treated as a memory artifact rather than a formal document. Goals are being held in people's heads rather than in writing.

**Correction:** The Goal Cycle Plan is a document, not a memory. Refer to it explicitly at every Daily Flow Sync. If a change to a goal is proposed, it requires the Emergency Cycle Protocol or waits for the next cycle. The Flow Master should ask at each sync: "Does the current work on the board still map to the goals in the Goal Cycle Plan?"

**Detection:** Primary goals at cycle end differ from what was documented in the Goal Cycle Plan without a formal change record.

---

## Multi-Team Anti-Patterns

### 8. Dependency Hiding

**Symptom:** Teams are aware of cross-team dependencies but do not log them in the Dependency Register because they "expect to resolve them informally." Dependencies become visible only when they block a primary goal.

**Why it happens:** Logging a dependency feels like bureaucracy and signals to other teams that progress may be at risk. Teams prefer the optimistic assumption that dependencies will resolve without formal tracking.

**Root cause:** The cost of dependency tracking (a few minutes) is immediate and visible; the cost of dependency hiding (cascade delays) is deferred and distributed across teams.

**Correction:** The Program Flow Master must actively surface informal dependency conversations and convert them into Dependency Register entries. Make it clear that the purpose of the register is early warning and shared visibility, not blame allocation. Teams that routinely hide dependencies should have their Cross-Team Block Rate reviewed — the data will usually show the cost.

**Detection:** Dependencies that become blockers without any prior Dependency Register entry.

---

### 9. Program Sync Theater

**Symptom:** The Program Sync runs for 60–90 minutes (it should be 45–60 minutes maximum). Teams report status but no decisions are made. Action items are vague or not followed up. The same dependency issues are discussed in every sync without resolution.

**Why it happens:** The Program Sync has drifted from a dependency-focused coordination event to a general status report meeting. The Program Flow Master is facilitating a standup-style report rather than a working session focused on dependency health.

**Root cause:** The sync agenda has not been maintained. Participants are not pre-reviewing the Dependency Register before the sync, so the meeting is spent discovering problems rather than acting on pre-analyzed information.

**Correction:** The Program Flow Master must prepare a pre-sync Dependency Register report showing status changes since the last sync and flagging At Risk or Blocked items. The sync focuses only on items that require decisions or cross-team actions. Items that are healthy do not need discussion.

**Detection:** Program Sync consistently exceeds 60 minutes; action items from previous syncs are not tracked.

---

### 10. Platform Team as Ticket Queue

**Symptom:** The platform or infrastructure team receives requests from multiple product teams but has no structured intake process. Their board is actually a support queue rather than a flow board. Their WIP is consistently exceeded because every request from every team is "urgent." The team's block rate is very high.

**Why it happens:** Platform teams have inherent multi-customer service characteristics that are not well addressed by the base GOAL model without adaptation. They are simultaneously providing services (reactive work) and improving infrastructure (proactive work).

**Root cause:** Platform teams have not adapted their WIP limits and Focus Factor to account for service-type work. Their requests are being processed informally rather than through the Interrupt Management Protocol.

**Correction:** Platform teams should use a modified Focus Factor of 0.5–0.6 to account for their higher interrupt baseline. All incoming requests must be classified using the interrupt protocol before entering the board. The Product Strategist for the platform team must actively prioritize and protect against interrupt overload, just as a product team's Product Strategist would.

**Detection:** Cross-Team Block Rate is high and a large proportion of dependencies trace back to the platform team; platform team's own block rate is chronically above 30%.

---

### 11. Dependency Rate Normalization

**Symptom:** The program's Dependency Rate (cross-team dependencies as a percentage of total tasks) has been above 20% for multiple cycles, but no architectural review has been triggered. The Program Retrospective notes "high dependency rate" as a recurring observation without producing structural changes.

**Why it happens:** A consistently high Dependency Rate becomes the "new normal." The metric is reported but treated as an unactionable fact rather than a signal requiring architectural investigation.

**Root cause:** The program team lacks the mandate or authority to recommend architectural changes. Or the connection between high Dependency Rate and architectural coupling is not being made explicitly enough.

**Correction:** Above 20% Dependency Rate for two or more consecutive cycles should trigger a mandatory architectural review session involving technical leads from all affected teams. The output should be at least one architectural change proposal that reduces cross-team coupling. Even if implementation is deferred, the pattern must be acknowledged as an architecture problem, not a coordination problem.

**Detection:** Dependency Rate above 20% for two or more consecutive cycles without an architectural review.

---

### 12. Misaligned Program Goals

**Symptom:** Teams are operating successfully against their own team goals but the Program Goals are not being achieved. Team-level metrics are healthy; program-level metrics show poor Program Goal Completion Rate.

**Why it happens:** The Program Strategist defined Program Goals without adequate translation into team-level goals. Individual Product Strategists aligned their teams to goals that were locally meaningful but not contributing to program outcomes.

**Root cause:** The cascading process from Program Goals to team-level goals was not completed. Teams optimized locally without understanding how their goals contributed to program goals.

**Correction:** The Program Strategist must explicitly trace each team's primary goals to at least one Program Goal before the cycle begins. During the Cross-Team Cycle Plan, this traceability must be visible. In the Program Retrospective, if program goals were not met despite healthy team metrics, the traceability is the first thing to audit.

**Detection:** Program Goal Completion Rate below target while individual team flow metrics are healthy.

---

### 13. Shadow Dependencies

**Symptom:** Teams discover mid-cycle that they depend on work being done by another team that was not captured in the Dependency Register. These "shadow" dependencies cause unexpected blockers. The actual Dependency Rate is higher than the registered rate.

**Why it happens:** Dependency identification during Cross-Team Cycle Plan was not thorough enough. Teams are starting work without verifying their full dependency chain.

**Root cause:** The Cross-Team Cycle Plan preparation did not include all technical leads, or teams did not review their task-level dependencies before the cycle began.

**Correction:** Before each cycle, require all teams to conduct a 30-minute dependency review where each team lists all work in their cycle that depends on another team's output. This should happen before the Cross-Team Cycle Plan is finalized. The Program Flow Master should specifically ask: "Are there any technical dependencies between your planned tasks and another team's work that we haven't captured?"

**Detection:** A significant number of Dependency Register entries created mid-cycle (after cycle start) rather than at cycle planning.

---

## Anti-Pattern Quick Reference

| Anti-Pattern | Primary Symptom | Violation Signal |
|---|---|---|
| Scrum-Washing | Fixed task lists in cycles | Task list at end = task list at start |
| WIP Limit Ignoring | Focus Ratio consistently > 1.0 | Board always over limit |
| Retrospectives Without Data | Vague action items | No metrics in retrospective output |
| Expedite Lane Inflation | Multiple Expedite tasks | > 1 card in Expedite lane |
| DoD Negotiation | Tasks Done with unchecked items | Done column with DoD gaps |
| Invisible Work | Metrics don't match experience | Team feels busier than board shows |
| Goal Drift | Goals changed without records | Cycle-end goals differ from plan |
| Dependency Hiding | Surprise mid-cycle blockers | New Register entries mid-cycle |
| Program Sync Theater | Sync runs 60–90 min | No decisions made; same issues weekly |
| Platform Team as Queue | Platform team block rate > 30% | All urgent; no intake process |
| Dependency Rate Normalization | Rate > 20% with no action | No architectural review after 2 cycles |
| Misaligned Program Goals | Team metrics good, program goals not met | Low Program Goal Completion Rate |
| Shadow Dependencies | Surprise cross-team blockers | Register entries created after cycle start |

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
