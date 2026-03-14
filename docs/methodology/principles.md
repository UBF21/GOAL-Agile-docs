---
id: principles
title: Core Principles
sidebar_position: 2
description: The eight core principles of GOAL Agile that guide all framework decisions and team behavior.
---

# Core Principles

GOAL is built on eight core principles. These principles serve as the reasoning behind every rule, protocol, and event in the framework. When a specific rule seems unclear, returning to the principle that grounds it provides the answer.

---

## Principle 1: Flow Over Rigidity

Work should move continuously. Artificial boundaries that stop work from progressing create waste. GOAL minimizes gates, approvals, and handoffs that do not add value.

**What this looks like in practice:**
- No "release windows" that batch work unnecessarily
- Code review happens promptly, not once per week
- Blocked tasks escalate on a defined timeline rather than sitting indefinitely
- The Daily Flow Sync addresses impediments daily, not in a weekly meeting

**Why it matters:**
Every hour a task spends waiting in a queue is waste. Flow research consistently shows that most of a task's elapsed time is queue time, not work time. GOAL measures this through Flow Efficiency and actively works to reduce it.

---

## Principle 2: Goals Over Tasks

Teams are accountable for outcomes, not activity. A team that completed 40 tasks but delivered no user value had a bad cycle. A team that completed 10 tasks and shipped a feature that reduced churn by 15% had a great cycle.

**What this looks like in practice:**
- Smart Planning produces outcome statements, not task lists
- Success at cycle end is measured by goal achievement, not task completion percentage
- The Product Strategist's success metric is value delivered per cycle, not backlog throughput

**Why it matters:**
Activity without direction is motion without progress. Teams can be busy in ways that never produce value. Committing to goals rather than tasks forces clarity about what the team is actually trying to achieve.

---

## Principle 3: Data Over Estimation

Abstract estimation (story points, hours) is replaced by real flow data. Cycle time, block rate, and delivery rate tell you more about team capacity than planning poker.

**What this looks like in practice:**
- Story points are removed entirely; tasks are sized S/M/L by expected delivery time
- Planning uses historical delivery rate and cycle time, not fresh estimates
- Retrospectives open with metrics review, not gut feelings
- Capacity planning improves over time as the Cycle Accuracy Index builds historical data

**Why it matters:**
Estimates are guesses that become false precision over time. Flow data is observation. A team with 5 cycles of delivery rate data can plan more accurately than a team with 5 years of velocity charts.

---

## Principle 4: Focus Over Multitasking

Cognitive science consistently shows that context switching between tasks reduces quality and increases time-to-completion. GOAL enforces WIP limits to protect team focus.

**What this looks like in practice:**
- WIP limits are calculated and enforced, not suggested
- When WIP is full, the priority order is finishing before starting
- The Flow Board makes multitasking visible and accountable
- The Flow Master's authority includes blocking new task starts when WIP is full

**Why it matters:**
Every active task is a context that must be maintained in memory. Studies of knowledge workers consistently show that switching between even two tasks can reduce effective throughput by 20–40%. WIP limits are cognitive protection, not just process rules.

---

## Principle 5: Adaptability Over Commitment Locking

The path to a goal can change based on new information. New tools, changed requirements, or technical discoveries should be incorporated, not fought.

**What this looks like in practice:**
- Tasks can be added, removed, or changed during a cycle as long as they serve the current goals
- A better technical solution that achieves the same goal is always preferred
- Urgent external changes have a formal protocol (Interrupt Management) rather than being ignored or causing chaos
- The Goal Cycle can extend or close early based on reality, not just the calendar

**Why it matters:**
Software development is fundamentally a discovery process. Requirements reveal complexity only when implemented. Locking teams into plans formed before implementation begins creates waste and frustration. GOAL locks goals (outcomes) while keeping execution paths fully adaptable.

---

## Principle 6: Delivery Over Activity

Starting a task has no value. Delivering a task that meets the Definition of Done has value. GOAL measures completion, not activity.

**What this looks like in practice:**
- Metrics count tasks moved to Done, not tasks started
- A task with any unchecked DoD box is not done, regardless of effort spent
- Work that is "almost done" is not counted in cycle metrics
- The Delivery Rate metric tracks tasks completed per day, not tasks started per day

**Why it matters:**
"Almost done" tasks that never reach Done are the silent killer of team credibility. A cycle that shows 90% completion with 10% remaining is not a near-success — those unfinished tasks carry cost into the next cycle. Measuring delivery rather than activity eliminates this ambiguity.

---

## Principle 7: Visibility Over Assumptions

All work must be visible and quantified. Hidden work, undocumented decisions, and invisible blockers are the primary sources of project failure.

**What this looks like in practice:**
- All work — including support tasks, debugging sessions, and meetings — goes on the Flow Board
- Blocked tasks are immediately visible in the Blocked column with a Block Register entry
- WIP violations are visible through the Focus Ratio metric
- No work is too small to put on the board; there is no minimum size for a task card

**Why it matters:**
Invisible work corrupts every metric. If 30% of the team's time is spent on untracked support requests, the flow metrics will show false efficiency. Invisible blockers delay resolution. Hidden decisions create misalignment. The Flow Board is a trust mechanism as much as a planning tool.

---

## Principle 8: Sustainability Over Heroics

Consistent delivery over time is more valuable than burst output followed by burnout. GOAL is designed to be sustainable as a permanent operating model, not a short-term fix.

**What this looks like in practice:**
- WIP limits protect team capacity from overload
- Technical debt has a formal allocation (10–20%) in every cycle — not just when it becomes a crisis
- Retrospective improvements are capped at 1–3 per cycle to ensure they actually get implemented
- The Cycle Accuracy Index improves estimation over time, reducing end-of-cycle crunch

**Why it matters:**
Many agile implementations produce short-term velocity gains followed by burnout, quality degradation, and team turnover. GOAL is designed to be practiced indefinitely. The same team operating GOAL for two years should be healthier and more effective than in year one.

---

## How the Principles Connect

The eight principles are not independent — they reinforce each other:

- **Flow Over Rigidity** creates the environment where **Delivery Over Activity** is measurable
- **Goals Over Tasks** gives **Data Over Estimation** something meaningful to measure
- **Focus Over Multitasking** supports **Sustainability Over Heroics**
- **Visibility Over Assumptions** enables **Data Over Estimation** to be accurate
- **Adaptability Over Commitment Locking** makes **Sustainability Over Heroics** possible long-term

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
