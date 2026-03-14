---
id: manifesto
title: The GOAL Manifesto
sidebar_position: 2
description: The five core values of GOAL Agile that guide all decisions within the framework.
---

# The GOAL Manifesto

GOAL is built on five values that guide all decisions within the framework. When in doubt about a decision, check it against the manifesto.

---

## The Five Values

### 1. Goals over Backlogs

> We commit to outcomes, not task lists. The path to a goal can change; the goal itself stays stable within a cycle.

**What this means in practice:**

At Smart Planning, the team commits to achieving specific outcomes — not to completing a predetermined list of tasks. The task list emerges during the cycle as the team discovers the best path to the goal. Tasks can be added, changed, or removed. Goals cannot.

A team that completes 40 tasks but delivers no meaningful outcome had a failed cycle. A team that delivers three tasks that reduce user churn by 20% had an excellent cycle.

**The anti-pattern this prevents:**

Sprint backlog filling — loading a cycle with a fixed task list at planning and calling those tasks "goals." This is Scrum renamed. GOAL's planning produces outcomes; execution produces the task list.

---

### 2. Flow over Velocity

> We measure how work actually moves through the system, not how much work we said we planned to do.

**What this means in practice:**

GOAL replaces velocity (story points delivered per sprint) with flow metrics: how long tasks take to complete, how much of that time was active work vs waiting, what percentage of tasks get blocked. These numbers describe reality. Velocity describes planned intent.

Flow metrics reveal where the bottlenecks are. Velocity reveals whether the team hit an arbitrary number.

**The anti-pattern this prevents:**

Velocity gaming — inflating story point estimates over time to maintain the appearance of high velocity. When you measure actual flow time, inflation is impossible.

---

### 3. Data over Estimates

> We use historical flow data — cycle time, block rate, delivery rate — instead of abstract story points.

**What this means in practice:**

Rather than asking "how many points is this task?" GOAL asks "how long does this type of task typically take, based on our historical data?" After three to five cycles, the team has real delivery rate data, average cycle times by task size, and block rate patterns. These are far more accurate planning inputs than estimation.

The GOAL sizing system (Small / Medium / Large) is based on expected delivery time, not effort. This makes it calibratable and comparable over time.

**The anti-pattern this prevents:**

Planning poker theater — hours spent estimating tasks with false precision, debating whether something is a 5 or an 8, when the team has no idea. Estimation can be replaced by measurement once you have data.

---

### 4. Delivery over Activity

> Starting a task has no value. Only a task that meets the Definition of Done counts as progress.

**What this means in practice:**

A task in In Progress is not done. A task in Code Review is not done. A task that is "almost done" is not done. The only state that counts as delivered value is Done — fully meeting the Definition of Done criteria. GOAL's metrics count tasks completed, not tasks started.

This principle drives the WIP limit enforcement. Starting three new tasks when four existing tasks are awaiting code review looks like activity but creates no value. GOAL prioritizes finishing what is started.

**The anti-pattern this prevents:**

Busyness theater — the appearance of high activity (many tasks in progress) with low actual delivery. When metrics measure completion, not starts, the board tells the real story.

---

### 5. Adaptation over Commitment Locking

> Plans evolve when new information arrives. GOAL absorbs that change without breaking the team's focus.

**What this means in practice:**

New technical discoveries, changed requirements, and better solutions should be embraced, not fought. When the team finds a library that accomplishes the same goal in half the time, they use it. When a task turns out to be unnecessary for the goal, it is removed. The goal stays fixed; the path evolves.

For external changes (new business priorities, production incidents), GOAL has formal protocols — the Interrupt Management Protocol classifies and handles them without derailing the current cycle.

**The anti-pattern this prevents:**

Sprint lock-in — the Scrum problem of being unable to respond to new information mid-sprint without breaking the sprint. GOAL never locks the path, only the destination.

---

## Using the Manifesto as a Decision Filter

When a team faces a difficult decision, the manifesto provides a framework for evaluation:

| Situation | Manifesto check |
|-----------|----------------|
| "Should we add this urgent task to the current cycle?" | Adaptation over commitment locking → use the Interrupt Management Protocol to classify it correctly |
| "Should we mark this task done without a code review?" | Delivery over activity → no, the DoD requires a code review |
| "Should we estimate these tasks in story points?" | Data over estimates → size them S/M/L and rely on historical delivery rate |
| "We completed all our tasks — was the cycle successful?" | Goals over backlogs → only if the goals were achieved |
| "Our retrospective feels like complaining — is that useful?" | Flow over velocity → anchor every topic to a flow metric |

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
