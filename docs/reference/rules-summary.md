---
id: rules-summary
title: Rules Summary
sidebar_position: 3
description: Complete summary of all mandatory and recommended rules in the GOAL Agile framework.
---

# GOAL Rules Summary

## The 8 Mandatory Rules (Non-Negotiable)

These rules define GOAL compliance. A team that is not following these rules is not practicing GOAL — it is practicing something else with GOAL vocabulary.

---

### Rule 1: WIP Limits Are Enforced at All Times

No exceptions without Flow Master approval and documentation of the reason.

**What this means:**
- The Flow Master calculates the WIP limit using Team Size × Focus Factor at the start of each cycle
- No team member starts a new task if it would exceed the WIP limit
- The Flow Master has authority to block new task starts
- Temporary overrides require written documentation of the reason

**Violation signal:** The Focus Ratio exceeds 1.0 on the Flow Metrics Dashboard.

---

### Rule 2: All Tasks Must Be Deliverable Within 3 Days

Large items are split before entering the Ready column.

**What this means:**
- Small (S) = deliverable in 1 day
- Medium (M) = deliverable in 2–3 days
- Large (L) = must be split into S/M tasks before entering Ready

**No Large tasks enter In Progress.** A Large task on the Flow Board is a planning artifact; it must be decomposed before work begins.

**Violation signal:** A card labeled L is found in In Progress, Code Review, or Validation.

---

### Rule 3: Blocked Tasks Are Immediately Registered in the Block Register

Holding a blocker privately is a process violation.

**What this means:**
- When a task cannot progress due to an external factor, it moves to the Blocked column immediately
- A Block Register entry is completed within the hour of blocking
- The entry must include: task name, date blocked, blocker type, description, resolution owner, resolution plan, and expected resolution date
- An incomplete Block Register entry is itself a process violation

**Violation signal:** A task has been in the Blocked column for more than 1 hour without a complete Block Register entry.

---

### Rule 4: Daily Flow Sync Is Held Every Working Day

It is 10–12 minutes. Not optional. Not replaceable with a Slack message.

**What this means:**
- The Daily Flow Sync happens every working day of the cycle, regardless of other factors
- It is exactly 10–12 minutes — not more, not less
- It is run by the Flow Master, walking the board right to left
- It cannot be replaced by an async update, a Slack message, or a "quick chat"

**Violation signal:** A day passes without a Daily Flow Sync, or the sync consistently exceeds 12 minutes.

---

### Rule 5: All Work Follows the Definition of Done

No "done enough." No "just this once" exceptions.

**What this means:**
- Every task must satisfy both Level 1 (Baseline) and Level 2 (Extended) DoD criteria before moving to Done
- A task with any unchecked DoD box is not done
- The Flow Master monitors DoD compliance
- DoD is not negotiable under deadline pressure — that is exactly when it matters most

**Violation signal:** A task is in the Done column with unchecked DoD items, or a task is marked Done without code review.

---

### Rule 6: Retrospectives Use Flow Metrics Data

Opinions must be anchored to observable data. If the metrics don't show it, it is not a process finding.

**What this means:**
- The Flow Metrics Dashboard is prepared before the retrospective, not during it
- Every discussion topic must be connected to at least one flow metric
- Opinions are welcome but must be anchored: "I feel we were slow" must be connected to "Cycle Time was 4.2 days vs 2.8 days last cycle"
- Improvements without metrics-based rationale are not actionable findings

**Violation signal:** A retrospective produces "action items" that are not connected to any measurable metric.

---

### Rule 7: Goal Cycle Goals Do Not Change During an Active Cycle

New priorities follow the Interrupt Management Protocol.

**What this means:**
- Primary goals are locked when the Goal Cycle Plan is published
- The Product Strategist cannot add, remove, or modify primary goals during an active cycle
- If a new business priority is more important than current goals, the Emergency Cycle Protocol applies
- "The goal changed a little bit" is not an acceptable justification — formal change records are required

**Violation signal:** Primary goals at cycle end differ from what was documented in the Goal Cycle Plan without a formal change record.

---

### Rule 8: Expedite Lane Has a Maximum of 1 Active Task

No exceptions. No "but this one is really urgent."

**What this means:**
- Only one task can be in the Expedite lane at any given time
- This rule exists because a second Expedite task de-prioritizes the first, defeating the purpose of the lane
- Joint approval (Flow Master + Product Strategist) is required for every Expedite entry
- If two urgent requests arrive simultaneously, they must be triaged — one enters Expedite, the other waits or goes to backlog

**Violation signal:** More than one card in the Expedite lane simultaneously.

---

## Recommended Rules (Strong Default Practices)

These are not mandatory in the same way as the 8 rules above, but are strongly recommended default practices. Teams that deviate from these without data-driven rationale should expect worse outcomes.

### Technical Debt Allocation: 10–20% of Cycle Capacity

Default is 15%. Adjust up to 20% if debt is actively slowing delivery. Adjust down to 10% only if no debt items exist. The allocation is protected during a cycle.

### Backlog Health: 2 Cycles Worth of Ready Items

The backlog should always contain at least two Goal Cycles worth of ready-to-execute items with complete acceptance criteria. Smart Planning cannot run effectively without a healthy backlog.

### Cycle Duration: 1–3 Weeks Maximum

GOAL cycles are designed for 1–3 weeks. Longer "cycles" lose the cadence benefits and become mini-projects. Shorter than 1 week reduces planning and retrospective effectiveness for most teams.

### Maximum 1–3 Retrospective Improvements Per Cycle

Long improvement lists never get implemented. Capping at 3 forces the team to prioritize. Each improvement must have a single named owner and a success metric.

### All Work on the Flow Board

All work — including support tasks, debugging, internal tools, and meetings that consume meaningful time — goes on the Flow Board. There is no minimum task size.

### PR Size: Reviewable in Under 30 Minutes

Pull requests should represent coherent, bounded changes. A PR that takes more than 30 minutes to review is a violation of the continuous delivery principle and creates Code Review queue buildup.

---

## Rules Application Reference

| Rule | Who enforces it | Signal when violated |
|------|----------------|---------------------|
| WIP Limits | Flow Master | Focus Ratio > 1.0 |
| 3-Day Task Limit | Flow Master + Team | L-sized card in In Progress |
| Block Register | Flow Master | Blocked card with no Register entry |
| Daily Flow Sync | Flow Master | Sync missed or exceeds 12 min |
| Definition of Done | Flow Master + Team | Card in Done with unchecked DoD items |
| Data-Driven Retrospectives | Flow Master | Improvements not tied to metrics |
| Goal Stability | Flow Master + PS | Goal Cycle Plan goals changed without record |
| Expedite Limit | Flow Master | More than 1 card in Expedite lane |

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
