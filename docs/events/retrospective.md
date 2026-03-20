---
id: retrospective
title: Data-Driven Retrospective
sidebar_position: 5
description: The GOAL Data-Driven Retrospective — a metrics-based process improvement event that replaces opinion-driven retrospectives.
---

import Drawio from '@theme/Drawio'
import RetroDiagram from '!!raw-loader!../diagrams/retrospective-flow.drawio'

# Data-Driven Retrospective

**Purpose:** Improve the process using real metrics, not gut feelings.

**Duration:** 45–60 minutes

**Participants:** All roles

**When it happens:** Immediately after the Goal Review

---

<Drawio content={RetroDiagram} />

## What Makes It Data-Driven

The fundamental rule of the GOAL retrospective:

> **Every discussion topic must be anchored to at least one flow metric. If the metrics do not show it, it is not a process finding.**

This does not mean opinions are unwelcome. It means every opinion must be connected to an observable data point. "I feel like we were slow this cycle" is not a retrospective input. "Cycle Time averaged 4.2 days this cycle vs 2.8 days last cycle — what changed?" is.

**Prepare the Flow Metrics Dashboard before the session, not during it.**

---

## Agenda

### [15 min] Step 1 — Flow Metrics Review

Flow Master presents the metrics for this cycle vs the previous cycle:

**Cycle Time:** Did it improve, regress, or hold steady?
- Is the trend consistent or volatile?
- If it changed significantly, what happened in this cycle that could explain it?

**Flow Efficiency:** What percentage of time was active vs waiting?
- What type of waiting dominated? (Code Review queue? Validation backlog? Blocked?)
- Is it trending toward the healthy range (30–50%)?

**Block Rate:** How many tasks got blocked? What types?
- Were blocks concentrated in a specific type (technical, external, business decision)?
- Were blocks resolved within 48 hours, or did they persist?

**Delivery Rate:** Tasks completed per day — is the trend stable?
- Volatility in delivery rate (some days zero, some days many) signals batching behavior

**WIP Compliance:** Were WIP limits respected throughout the cycle?
- If not, when and why? What was the impact on flow efficiency?

**Ground rule:** Every discussion topic must be anchored to at least one of these metrics.

---

### [10 min] Step 2 — Block Register Analysis

Review every blocked task from this cycle (from the Block Register):

- What were the most common blocker types? (Technical / External / Business Decision / Dependency / Infrastructure)
- Are any blocker types recurring across multiple cycles?
- Which blockers took the longest to resolve? Why?
- Were blockers logged promptly or held privately?

If blockers were held privately: raise this as a process violation and discuss the root cause (fear, culture, tool friction).

**Key question:** Is there a structural problem that can be solved structurally, rather than a one-time event that cannot be prevented?

---

### [15 min] Step 3 — Identify Improvements

Generate improvement candidates based on the metrics and block analysis.

**Rule: Select 1–3 improvements only. Not more.** Long improvement lists never get implemented. The discipline of selecting only 1–3 forces the team to prioritize what will actually make a difference.

For each selected improvement, define:
- **What specifically will change?** (Not "communicate better" — something concrete and observable)
- **Who owns this improvement?** (One person, not "the team")
- **What metric will we use to know if it worked?** (Must be one of the core flow metrics)
- **By which cycle should we see the effect?**

Write these down. They are reviewed at the start of the next retrospective.

---

### [10 min] Step 4 — Review Previous Improvements

Were last cycle's improvements actually implemented? What do the metrics show?

- Did it work? What does the data show?
- If not — why not? Was the improvement the wrong solution? Was it not implemented?
- Adjust or close each item.

**This step is critical.** Retrospective improvements that are never reviewed become theater. The team learns that improvements do not matter, and the retrospective loses its value.

---

### Close

Flow Master summarizes the 1–3 new improvements and their owners. Immediately move to Smart Planning for the next cycle (or schedule it for the next working day at the latest).

---

## Retrospective Failure Modes

**"Our retrospectives have become complaint sessions."**
Introduce the rule that no topic is raised without pointing to the metric that supports it. Prepare the Flow Metrics Dashboard before the session.

**"We generate a list of 10 improvements and implement none of them."**
Cap at 1–3. More than 3 never gets done.

**"We keep discussing the same problems every retrospective."**
The problems are not being solved structurally. If the same blocker type appears three cycles in a row, it is a structural problem. Assign one person to own a structural resolution.

**"The Flow Master presents metrics, everyone nods, and nothing changes."**
The metrics review must produce discussion. Ask: "What would need to be true for [metric] to improve? Who has a theory? What's the single biggest lever?"

---

## Flow Efficiency Benchmark Reference

| Flow Efficiency | Interpretation | Suggested action |
|-----------------|----------------|-----------------|
| &lt;15% | Critical — most time is waiting | Investigate biggest queue (usually Code Review) |
| 15–30% | Baseline — common for new teams | GOAL target for first 3 cycles |
| 30–50% | Healthy | Target for cycles 4–8 |
| 50%+ | High-performing | Long-term optimization target |

---

## Block Rate Benchmark Reference

| Block Rate | Interpretation | Suggested action |
|------------|----------------|-----------------|
| &lt;20% | Target for established teams | Maintain current practices |
| 20–30% | Elevated | Investigate most common blocker type |
| &gt;30% | Systemic problem | Deep investigation; likely structural cause |

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
