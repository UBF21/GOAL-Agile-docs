---
id: retrospective-patterns
title: Retrospective Patterns Library
sidebar_position: 6
description: Complete format reference for GOAL retrospectives, covering nine patterns for every situation from standard cycles to incident recovery, low morale, and cross-team sessions.
---

## Table of Contents

1. [When to Use Which Pattern — Decision Tree](#1-when-to-use-which-pattern--decision-tree)
2. [Pattern 1 — Standard Data-Driven Retrospective](#2-pattern-1--standard-data-driven-retrospective)
3. [Pattern 2 — First Retrospective](#3-pattern-2--first-retrospective)
4. [Pattern 3 — Post-Incident Retrospective](#4-pattern-3--post-incident-retrospective)
5. [Pattern 4 — Low Morale Retrospective](#5-pattern-4--low-morale-retrospective)
6. [Pattern 5 — High Performance Retrospective](#6-pattern-5--high-performance-retrospective)
7. [Pattern 6 — Post-Major-Feature Retrospective](#7-pattern-6--post-major-feature-retrospective)
8. [Pattern 7 — Cross-Team Retrospective](#8-pattern-7--cross-team-retrospective)
9. [Pattern 8 — Quarterly Reset Retrospective](#9-pattern-8--quarterly-reset-retrospective)
10. [Pattern 9 — Recovery Retrospective](#10-pattern-9--recovery-retrospective)
11. [Retrospective Facilitation Guide](#11-retrospective-facilitation-guide)
12. [Retrospective Output Management](#12-retrospective-output-management)

---

## 1. When to Use Which Pattern — Decision Tree

Start at the top and follow the first condition that applies.

```
START
  │
  ├─ Is this the team's first cycle with GOAL?
  │     └─ YES → Pattern 2: First Retrospective
  │
  ├─ Did a P1 production incident occur during this cycle?
  │     └─ YES → Pattern 3: Post-Incident Retrospective
  │              (Run in addition to the standard retrospective if cycle was otherwise normal)
  │
  ├─ Is the team visibly burned out, demoralized, or experiencing conflict?
  │     └─ YES → Pattern 4: Low Morale Retrospective
  │
  ├─ Did the team just deliver a major feature, launch, or milestone?
  │     └─ YES → Pattern 6: Post-Major-Feature Retrospective
  │
  ├─ Is this a cross-team session involving more than one GOAL team?
  │     └─ YES → Pattern 7: Cross-Team Retrospective
  │
  ├─ Is this the last cycle of the quarter or a major planning period?
  │     └─ YES → Pattern 8: Quarterly Reset Retrospective
  │
  ├─ Did the cycle fail, get extended more than once, or significantly miss its goals?
  │     └─ YES → Pattern 9: Recovery Retrospective
  │
  ├─ Is the team performing at consistently high levels with no major issues?
  │     └─ YES → Pattern 5: High Performance Retrospective
  │
  └─ None of the above apply
        └─ Pattern 1: Standard Data-Driven Retrospective
```

**Using multiple patterns in one cycle:**

Some cycles may qualify for more than one pattern. Guidance:
- Post-Incident + Standard: Run Pattern 3 as a standalone session first, then hold a shorter Standard retrospective for the rest of the cycle
- Low Morale + Recovery: Pattern 4 takes precedence; recovery elements can be embedded within it
- High Performance + Post-Major-Feature: Run Pattern 6; it contains high-performance elements already

---

## 2. Pattern 1 — Standard Data-Driven Retrospective

### Overview

The default retrospective format for all normal cycles. Used when no special circumstances apply. Built around flow metrics rather than feelings or opinions, this format produces actionable improvements grounded in evidence.

**Duration:** 45–60 minutes
**Participants:** All roles (Flow Master, Product Strategist, full Delivery Team)
**When:** Immediately after the Goal Review, at the end of each cycle
**Minimum data required:** At least one previous cycle's worth of metrics

---

### Pre-Retrospective Preparation (Flow Master)

Before the session, prepare:
- Cycle Time for this cycle vs previous cycle (average and variance)
- Flow Efficiency % for this cycle vs previous cycle
- Block Rate for this cycle (blocked tasks / total tasks × 100)
- Delivery Rate (tasks completed per working day)
- WIP compliance rate (days at or below WIP limit / total days)
- Block Register summary (types and counts)
- List of improvements from the previous retrospective and their implementation status

Present these as a simple dashboard — not a report. The goal is to see patterns, not to generate a slide deck.

---

### Agenda

**Segment 1: Metrics Review (15 minutes)**

Open with the data dashboard. Walk through each metric:

*Cycle Time:*
- What was the average cycle time this cycle?
- Did it improve or regress vs the previous cycle?
- Were there outliers (tasks that took significantly longer than average)? What caused them?

*Flow Efficiency:*
- What percentage of total flow time was active work?
- What percentage was waiting?
- Where was most of the waiting? (In Ready? In Code Review? In Validation?)

*Block Rate:*
- What percentage of tasks encountered a blocker?
- What were the most common blocker types (Technical / External / Business / Dependency / Infrastructure)?
- Are any types recurring across multiple cycles?

*Delivery Rate:*
- How many tasks were completed per working day on average?
- Was the rate consistent across the cycle or concentrated at the end?

*WIP Compliance:*
- Were WIP limits respected?
- On days when the limit was exceeded, what was the reason?

**Important rule:** If a team member raises a subjective observation ("I felt like we were really slow this cycle"), the facilitator asks: "What does the data show about that?" This is not dismissive — it is investigative. If the data does not support the feeling, the feeling may be about something the metrics are not capturing. In that case, note it as a qualitative observation and investigate what is not being measured.

---

**Segment 2: Block Register Analysis (10 minutes)**

Review the Block Register as a pattern-finding exercise, not a blame exercise.

Questions to ask:
1. What were the top 3 blocker types this cycle?
2. Have any of these blocker types appeared in the last 3 cycles?
3. For recurring blockers: is there a structural change that would prevent them from recurring?
4. Are there specific tasks, task categories, or team members whose work is disproportionately blocked?

The goal of this segment is to identify systemic issues, not individual failures. If a specific person's work is always blocked by a specific external dependency, the question is "how do we solve that dependency?" not "why does this keep happening to them?"

---

**Segment 3: Improvement Identification (15 minutes)**

Based on what the data revealed, identify 1–3 specific, actionable improvements.

**Improvement quality criteria:**

A good improvement is:
- **Specific:** Not "improve communication" but "the Flow Master will call out any blocked task still open at the 24-hour mark in the daily sync"
- **Owned:** One named person is responsible for implementing it
- **Measurable:** There is a clear signal that indicates whether it worked (a metric that should change, a behavior that should appear)
- **Achievable in one cycle:** If it would take more than one cycle to implement, break it down

**Improvement generation exercise:**

Write all candidate improvements on a shared surface. Vote on the top 3 using dot voting (each person gets 2 votes). The top 3 proceed. The rest are archived for consideration in a future retrospective.

---

**Segment 4: Review of Previous Improvements (10 minutes)**

Before closing, review the improvements from the previous retrospective:

For each previous improvement:
- Was it implemented? (Yes / Partially / No)
- If yes: did it work? What changed in the metrics?
- If no: why not? Is it still worth implementing or should it be dropped?

This segment is what makes retrospectives compound over time. Teams that skip it break the improvement loop and retroactives become purely expressive rather than functional.

---

**Segment 5: Close (5 minutes)**

Flow Master summarizes:
- 3 improvements for the next cycle, with owners named
- The one data finding from this cycle that most surprised the team (makes the data memorable)
- Appreciation for a specific team effort that was visible in the data or the retrospective

---

### Common Variations

**Short cycle variant (for 1-week cycles):** Reduce Segment 1 to 8 minutes by pre-distributing the metrics dashboard. Skip Segment 4 if this is the second cycle (no previous improvements to review). Total: 35–40 minutes.

**Remote variant:** Distribute the metrics dashboard 24 hours before the retrospective. Use a shared digital board (Miro, FigJam, etc.) for the improvement identification exercise. Ensure all participants have their cameras on for Segment 2 and beyond — body language matters when discussing blockers.

---

## 3. Pattern 2 — First Retrospective

### Overview

The very first retrospective a team runs after adopting GOAL. This format prioritizes psychological safety, learning orientation, and setting correct expectations over metrics-driven analysis. At this stage, the team does not yet have enough data for the Standard format, and using it would produce false precision.

**Duration:** 60 minutes
**Participants:** All roles
**When:** After the first complete GOAL cycle
**Minimum data required:** None — this format does not depend on metrics

---

### Setting the Stage (Flow Master — 3 minutes)

The opening statement should be explicit and delivered before anything else:

*"This is our first GOAL retrospective. I want to name what this session is not: it is not a performance review, it is not a scorecard, and it is not an evaluation of whether any individual did a good job.*

*What it is: a learning session. We've been trying something new for [X days]. This is our chance to ask — honestly — what did we learn? What worked? What was hard? What do we want to do differently?*

*Everything we discuss here is about our process, not about any person. If something went wrong, we're looking for what in the process allowed it to happen, not who caused it."*

---

### Agenda

**Segment 1: What felt different? (15 minutes)**

Round robin — each person shares one thing that felt noticeably different from how the team was working before GOAL.

Facilitator captures each response on a shared surface and organizes them live into four categories:

| Better | Harder | Neutral | Surprising |
|--------|--------|---------|------------|
| Things that felt like an improvement | Things that were more difficult | Things that felt the same | Things the team didn't expect |

No discussion during collection. Just capture. Discussion happens in the next segments.

---

**Segment 2: What will we keep? (10 minutes)**

Look at the "Better" column. For each item, ask:
- Is this something that happened by accident or something we built deliberately?
- How do we make sure this continues in cycle 2?

Identify 1–2 practices the team commits to preserving explicitly.

---

**Segment 3: What was hard? (15 minutes)**

Look at the "Harder" column. For each item, the facilitator asks:

*"Is this hard because it's new and unfamiliar? Or is this hard because something in the process isn't working for us?"*

Classify each item:
- **Hard-Unfamiliar:** "This will get easier as we practice. No change needed."
- **Hard-Structural:** "Something in the process needs to change."

Only the Hard-Structural items proceed to the improvement stage.

---

**Segment 4: Safe questions (10 minutes)**

These questions are designed to surface concerns that people may be holding but haven't expressed yet. Respond to each one as a group, briefly.

1. "Is there anything about GOAL that you think won't work for our specific team?" (Surface doubts early)
2. "Was there a moment in the cycle where you felt like the process was getting in your way?" (Surface friction points)
3. "Is there anyone whose experience of this cycle was significantly different from what we've discussed?" (Surface outliers)

These are not problems to be solved in this retrospective — they are data to be acknowledged. If something emerges that requires immediate action, note it and address it after the session.

---

**Segment 5: Setting expectations for cycle 2 (7 minutes)**

The Flow Master addresses the team directly:

*"In cycle 2, we'll be doing most of the same things we did in cycle 1, but more deliberately. Here's what I'm asking you to focus on: [name the 1–2 behavioral goals for cycle 2, based on what surfaced in the retro — e.g., 'updating the board in real time' or 'flagging blockers on the day they occur'].*

*Here's what we will not focus on: [name the metrics that are still too early to optimize — e.g., 'flow efficiency' or 'cycle accuracy']. Those will matter later. Right now, the most important thing is building the habits."*

---

**Segment 6: Improvements for cycle 2 (5 minutes)**

From the Hard-Structural items in Segment 3, identify 1–3 improvements.

Apply the same quality criteria as the Standard retrospective:
- Specific, owned, measurable, achievable in one cycle

Write them on the board before the session ends.

---

**Closing (5 minutes)**

Each person shares one word for how they feel going into cycle 2.

The Flow Master closes with: "Thank you. We've started the improvement loop. Let's check back on these [point to improvements] in cycle 2."

---

### What NOT to Do in the First Retrospective

- Do not calculate or present flow metrics as measures of cycle 1 performance
- Do not compare the team to industry benchmarks or other teams
- Do not pressure team members who are quiet — use written response options if needed
- Do not generate a long list of improvements — 1–3 only
- Do not close without confirming owners for each improvement

---

## 4. Pattern 3 — Post-Incident Retrospective

### Overview

Triggered when a P1 production incident occurred during or adjacent to the GOAL cycle. This format is blameless by design. Its purpose is to understand the systems and conditions that allowed the incident to occur, and to produce structural changes that reduce the probability of recurrence.

This retrospective is typically held in addition to (not instead of) the end-of-cycle Standard retrospective. It may be held earlier — within 48 hours of incident resolution — while details are still fresh.

**Duration:** 60–90 minutes
**Participants:** Everyone involved in or affected by the incident. Flow Master facilitates.
**When:** Within 48–72 hours of incident resolution
**Minimum data required:** Incident timeline (required — must be constructed before the session)

---

### Pre-Session: Build the Timeline

Before the retrospective begins, construct a chronological incident timeline. This is essential — the timeline prevents memory distortion and ensures discussion is grounded in events, not feelings.

**Timeline format:**

```
Date/Time   | Event                              | Actor        | Source
────────────┼────────────────────────────────────┼──────────────┼──────────
[timestamp] | [what happened]                    | [who/what]   | [log/message/memory]
[timestamp] | [first alert triggered]             | [monitoring] | [alert system]
[timestamp] | [engineer first notified]          | [name]       | [on-call log]
[timestamp] | [initial diagnosis]                | [name]       | [chat log]
[timestamp] | [first remediation attempt]        | [name]       | [deployment log]
[timestamp] | [escalation]                       | [name]       | [ticket]
[timestamp] | [resolution]                       | [name]       | [deployment log]
[timestamp] | [all-clear confirmed]              | [name]       | [monitoring]
```

The timeline should be built collaboratively before the session using actual logs, not from memory alone. Assign one person to assemble it.

---

### Opening: The Blameless Contract (5 minutes)

The facilitator opens with an explicit statement of the blameless format. This is not optional — it sets the psychological contract for everything that follows.

*"This retrospective operates on one foundational assumption: everyone involved in this incident made the best decisions they could with the information they had at the time. We are not here to find who made a mistake. We are here to find what in our systems, processes, and environment allowed this to happen — and what we can change so it is less likely to happen again.*

*During this session, I will redirect any statement that attributes the incident to an individual's failure. If you have observations about individual performance, please address those separately and privately with the appropriate manager. In this room, we investigate systems."*

---

### Agenda

**Segment 1: Timeline Walk (15–20 minutes)**

Walk through the pre-built incident timeline together. As a group:
- Confirm accuracy (are there missing events? incorrect timestamps?)
- Note points of decision (moments where a different action could have changed the outcome)
- Note points of surprise (things that worked differently than expected)

No analysis yet — just confirm the factual record.

---

**Segment 2: 5-Why Root Cause Analysis (20–25 minutes)**

Starting from the incident trigger event, apply the 5-Why technique. Ask "why did this happen?" for each answer until the structural root cause is reached.

**Example:**

```
Incident: Payment service returned 500 errors for 40 minutes

Why did the payment service return errors?
→ The database connection pool was exhausted

Why was the connection pool exhausted?
→ A traffic spike from a marketing campaign increased request volume by 400%

Why wasn't the service able to handle a 400% traffic increase?
→ Auto-scaling was not configured for the payment service

Why wasn't auto-scaling configured?
→ The payment service was migrated from the legacy system without matching its infrastructure configuration

Why was it migrated without matching the configuration?
→ The migration checklist did not include infrastructure parity review

Root cause: No infrastructure parity review in the migration process
```

The facilitator documents each step. When two different paths emerge (two different explanations for the same event), follow both. Multiple root causes are common and more honest than forcing a single explanation.

**Facilitator rule:** If the 5-Why chain reaches "a person made a decision" without going deeper, ask one more "why": "Why was this person in a position to make that decision without a safety net?" This moves from individual blame to systemic analysis.

---

**Segment 3: Contributing Factor Analysis (10 minutes)**

Beyond the root cause, identify contributing factors — conditions that did not cause the incident but made it worse or harder to resolve.

Common contributing factor categories:
- **Detection gap:** Why wasn't this detected sooner?
- **Recovery gap:** What made recovery slower than it should have been?
- **Communication gap:** Were the right people notified promptly?
- **Knowledge gap:** Was there a lack of documentation, runbooks, or context that made diagnosis harder?
- **Process gap:** Is there a step in our process that should have prevented this?

---

**Segment 4: Action Items (15 minutes)**

Generate concrete, structural action items. For each, record:

```
Action:          [specific change to make]
Type:            [Prevention / Detection / Recovery / Process]
Owner:           [named individual]
Due date:        [specific date — not "soon" or "next sprint"]
Success signal:  [what will be true when this is done]
```

**Action item quality rules:**
- Minimum 1 Prevention, 1 Detection, 1 Recovery item for every major incident
- All action items must have named owners — not "the team" or "DevOps"
- Due dates must be specific
- Maximum 5 action items — if more are generated, prioritize by impact

---

**Segment 5: Close (5 minutes)**

Confirm:
- Action items and owners are documented
- A follow-up check-in is scheduled for each action item at its due date
- The incident timeline will be added to the team's knowledge base

Final question: "Is there anything about how we handled this incident that we should be proud of?" This is not perfunctory — it identifies what worked and should be repeated.

---

### How to Prevent Defensive Behavior

**If someone deflects to individual blame:**
"I hear that. For the purposes of this session, let's stay with the systems question: what in our process allowed that decision to be made without a safety net?"

**If someone is silent:**
"[Name], you were involved in [part of timeline]. What was your understanding of the situation at that point?" (specific, factual question, not a challenge)

**If the conversation becomes heated:**
"Let's come back to the timeline. What does the record show happened at [specific time]?" (redirect to facts)

**If management is in the room and creating pressure:**
Open with extra emphasis on the blameless contract. If management behavior actively undermines the blameless format (pursuing blame), stop the session and reschedule with a clearer contract.

---

## 5. Pattern 4 — Low Morale Retrospective

### Overview

Used when the team is burned out, demoralized, experiencing conflict, or in a sustained period of low energy. The standard Data-Driven format would be counterproductive here: focusing on metrics in a demoralized team reads as "we need you to perform better" when the real message needs to be "we see that you're struggling and we want to help."

**Duration:** 60 minutes
**Participants:** All roles — Flow Master facilitates, but a neutral external facilitator is preferable if one is available
**When:** When any three or more of the signals below are present

---

### Signals That This Pattern Is Needed

Before deciding to use this pattern, look for at least three of the following:

**Behavioral signals:**
- Participation in ceremonies has visibly declined (people are quieter, less engaged)
- The Flow Board is being updated less reliably than in previous cycles
- Informal team communication has decreased (less Slack banter, fewer spontaneous conversations)
- Team members are working longer hours than normal

**Verbal signals:**
- Cynical or dismissive comments about the methodology or the work
- "It doesn't matter anyway" language
- Expressions of helplessness about recurring problems
- Silence when asked for input

**Performance signals:**
- Delivery Rate has dropped without explanation in workload
- Block Rate is increasing without increasing complexity
- A high-performing team member has suddenly become withdrawn

If only one or two signals are present, consider a brief check-in conversation before the retrospective rather than switching the format entirely.

---

### Opening: Creating the Safe Space (10 minutes)

The opening of this retrospective requires more care than usual.

**Room/environment setup:**
- If possible, change the physical or virtual environment from the normal meeting setup. A different room, a different background, no screen sharing at first.
- Keep the team size small. If a large team is using this pattern, split into sub-groups of 3–4.
- Cameras on but not required if someone is visibly distressed.

**Opening statement:**

*"I want to acknowledge something directly: I've noticed that the team has been carrying a lot lately. [Name 1–2 specific things you've observed — not diagnoses, just observations: 'we've had three cycles in a row with significant overruns' or 'there have been some really difficult incidents this quarter'].*

*This retrospective is not a normal retrospective. We're not going to go through the metrics. We're going to spend this time on one question: what is making work hard right now, and what can we remove or reduce?*

*Nothing said here will be used for performance evaluation. I am not here to measure you or assess you. I am here to understand what the team needs."*

---

### Agenda

**Segment 1: How is everyone actually doing? (10 minutes)**

Scale check-in — each person responds to two questions on a 1–5 scale (1 = very bad, 5 = very good). No explanation required unless they want to share.

```
Question 1: How are you feeling about the work right now?
Question 2: How are you feeling about the team right now?
```

Capture the scores visibly. If the average is below 3 on either question, that data point opens the conversation.

Optional alternative for groups where numerical scales feel clinical: each person picks an emoji or weather metaphor (thunderstorm, overcast, partly cloudy, sunny). The format matters less than the honest answer.

---

**Segment 2: What is making work hard? (20 minutes)**

Each person writes their answers individually on sticky notes (digital or physical) before sharing:

Question: "What is making work feel harder than it should right now?"

No filtering, no qualifying. Write what is true.

The facilitator collects responses and groups them:

| In our control | Partially in our control | Outside our control |
|----------------|-------------------------|---------------------|

The group focuses on the "In our control" category. The other categories are acknowledged, not ignored.

**Rule for this segment:** No judgment of what people write. No "but that's not really a problem" responses. The experience of difficulty is valid whether or not it meets an objective threshold.

---

**Segment 3: What can we remove or reduce? (15 minutes)**

Focus only on items in the "In our control" column.

For each item, the group asks: "If we could change one thing about this situation, what would it be?"

This question has a specific design: it focuses on removal and reduction, not addition. A demoralized team does not need more process. It needs less friction.

**What NOT to do:**
- Do not suggest adding new metrics or tracking
- Do not suggest adding ceremonies
- Do not suggest motivational solutions ("we need to celebrate more")
- Do not suggest that team members need to change their attitude

**What to do:**
- Identify specific blockers, friction points, or structural problems that can be removed
- Identify specific sources of overload that can be reduced
- Identify specific decisions or clarifications that are pending and draining energy

---

**Segment 4: The 1-2-3 plan (10 minutes)**

Identify the following and nothing more:

1. **One thing we stop doing** (a meeting, a process step, a report that drains energy without producing value)
2. **One thing we reduce** (frequency of a ceremony, scope of a requirement, something overwhelming made more manageable)
3. **One thing we change** (a specific structural problem that has a specific solution)

Each item gets an owner. These three items are the only improvements from this retrospective. Resist the urge to generate a longer list.

---

**Closing (5 minutes)**

The facilitator closes without a metrics review, without performance commentary, and without pressure.

*"Thank you for being honest today. That is not easy to do. Here's what we agreed to: [read the 1-2-3 plan]. I will follow up on these personally.*

*One more thing: I see a team that is working hard and caring about the work, even when it's difficult. That matters."*

End the session. Do not run it long.

---

### What NOT to Do in a Low Morale Retrospective

- Do not show the metrics dashboard. A demoralized team does not need to see a declining Flow Efficiency graph.
- Do not give a pep talk. Manufactured optimism in a room full of tired people reads as dismissive.
- Do not minimize the team's experience: "It's not that bad" is the most damaging thing a facilitator can say.
- Do not make commitments you cannot keep. Only promise changes that are actually within your authority.
- Do not end by asking the team to "stay positive" or "stay motivated."

---

## 6. Pattern 5 — High Performance Retrospective

### Overview

Used when the team is operating at consistently high levels — goals are being met, metrics are healthy, and the team is in a positive groove. The standard retrospective may produce no meaningful improvements when everything is working well. This pattern shifts focus to extending excellence, not just maintaining it.

**Duration:** 60 minutes
**Participants:** All roles
**When:** When all three of the following are true for at least 2 consecutive cycles:
- All primary goals were achieved
- Flow Efficiency is above 30%
- Block Rate is below 15%

---

### Opening: Naming the Achievement (5 minutes)

Begin by naming the performance explicitly:

*"We're here because the data shows that we're working well. [Specific metric] is at [value] — one of the best we've seen. [Another metric] has been consistent for [X] cycles. This is worth naming. Today, instead of asking 'what's broken?', we're asking 'what can we make even better?' and 'what do we want to learn next?'"*

---

### Agenda

**Segment 1: What got us here? (10 minutes)**

The team answers: what specifically are we doing that is producing these results?

This is not obvious. High-performing teams often cannot articulate why they're performing well, which means they cannot reproduce it if disrupted. Making the underlying practices explicit is essential.

Each person names one practice, habit, or condition they believe is most responsible for the current performance.

The facilitator groups responses and identifies the 3 most commonly mentioned. These become the team's "performance anchors" — the things that must be protected.

---

**Segment 2: The edge of our current capability (15 minutes)**

When nothing is broken, improvement means pushing toward the edge of current capability.

Questions to explore:
- What is the one type of work that still takes longer than we'd like?
- What is the one type of blocker we cannot seem to eliminate?
- Where in the flow is there still avoidable wait time?
- What would our process look like if we tried to double throughput? What would break first?

This segment uses questions as probes rather than problem identification. The goal is to find the next edge, not to fix a current problem.

---

**Segment 3: Stretch goals and experiments (15 minutes)**

Identify 1–2 deliberate experiments for the next cycle. An experiment in this context means:

- A specific change to the process that is explicitly labeled as an experiment (not a permanent change)
- A defined duration (try it for one cycle, then evaluate)
- A specific hypothesis: "We believe that [change] will improve [metric] by [amount]"
- A predefined evaluation: how will we know if it worked?

Example experiments for high-performing teams:
- "Reduce Daily Flow Sync to 3x per week instead of 5x and evaluate impact on cycle time"
- "Introduce pair programming on all Medium tasks this cycle and measure Block Rate change"
- "Attempt to reduce WIP limit by 1 and measure impact on Flow Efficiency"
- "Introduce a 'quiet hours' convention (no meetings 9–12 daily) and measure delivery rate"

---

**Segment 4: Knowledge sharing and team growth (10 minutes)**

High-performing teams risk becoming high-performing silos — individuals who are excellent at their specific work but not deliberately growing their collective capability.

Questions for this segment:
- Is there knowledge or skill concentrated in one person that would benefit others to have?
- Is there a team member who is newer or less experienced who would benefit from deliberate mentoring?
- Is there a technical area the team is collectively weak in that the next year will require?
- What does the team want to be able to do in 6 months that it cannot do as easily today?

Identify 1 learning goal for the next cycle: a specific skill, technology, or practice the team will invest in developing together.

---

**Segment 5: Review improvements and metrics (10 minutes)**

Standard Segment 4 and Segment 1 from Pattern 1:
- Were previous improvements implemented? Did they work?
- What does this cycle's data show?

In a high-performing team, this segment is quick. The data is good. The improvements were implemented. The conversation focuses on what the data reveals about the next edge.

---

**Closing (5 minutes)**

Confirm:
- 1–2 experiments for next cycle, with owners and evaluation criteria
- 1 learning goal, with a specific action for cycle start
- Protection plan for performance anchors (the things that got you here)

---

## 7. Pattern 6 — Post-Major-Feature Retrospective

### Overview

Used after the team delivers a significant feature, product launch, major release, or important milestone. The purpose is dual: celebrate the delivery and extract all possible learning from the experience.

**Duration:** 75–90 minutes (longer than standard — the depth is warranted)
**Participants:** All roles plus any stakeholders who were closely involved
**When:** Within one week of the major delivery completing

---

### Opening: Celebrate Before Analyzing (10 minutes)

Before any analysis, acknowledge the achievement. This is not a courtesy — it is a deliberate signal that delivering value matters and is recognized.

**Celebration options:**
- Share a specific metric or outcome showing the delivery's impact (user adoption rate, error rate change, stakeholder feedback)
- Ask each person to name the single contribution they're proudest of from this feature
- Read a specific positive stakeholder quote if one exists

The facilitator makes this non-optional and non-perfunctory. It should take a full 10 minutes.

---

### Agenda

**Segment 1: Delivery quality assessment (15 minutes)**

Examine what was delivered against what was planned:

- Did the feature meet all acceptance criteria?
- Were there any Definition of Done exceptions made? If so, what were they and what is the plan to resolve them?
- What was the production defect rate in the first week after release?
- What was the deployment experience like? (Smooth? Complicated? Required rollback?)

This is not blame — it is a technical quality review. If DoD exceptions were made, the question is "why?" and "how do we prevent that next time?"

---

**Segment 2: Value validation discussion (20 minutes)**

The Product Strategist leads this segment. Key questions:

- What was the original value hypothesis for this feature? ("We believe this will [outcome] for [user/business]")
- What data do we have from the first week that confirms or challenges this hypothesis?
- If we don't have data yet: how will we know in 30 days whether this delivered the expected value?
- Were there any valuable outcomes we didn't anticipate?
- Were there any costs we didn't anticipate (user confusion, support burden, technical side effects)?

This segment is particularly important for connecting development work to business outcomes. It closes the loop from planning to delivery.

---

**Segment 3: Process review (20 minutes)**

Look at how the team worked during the delivery period:

*What worked well?*
- What planning decisions turned out to be particularly good?
- What specific practices during execution made delivery smoother?
- Were there dependency management moments that went especially well?

*What was hard?*
- Were there periods of significant overload?
- Were there decisions that took too long to get made?
- Were there technical discoveries that should have been found earlier?
- Were there coordination problems with other teams or stakeholders?

*What would we do differently?*
- Specifically: if we were starting this feature over today, what is the one thing we would change in how we planned it? In how we executed it?

---

**Segment 4: Technical quality review (10 minutes)**

A brief technical reflection led by the Delivery Team:

- Did we introduce any technical debt during this delivery? (If yes: is it logged?)
- Are there any architectural decisions made under pressure that we want to revisit?
- Is the new code as maintainable and testable as the team wants it to be?
- What technical improvement investment would make future work on this feature area easier?

---

**Segment 5: Improvements and learning (10 minutes)**

Standard improvement generation: 1–3 improvements based on what the segments revealed, with owners and success signals.

Additionally, capture any process innovations that emerged during the delivery that should become permanent practices.

---

**Closing (5 minutes)**

The Product Strategist closes with a statement about what the delivery means for the product and the team. Then open floor for the team to share any final reflections.

---

## 8. Pattern 7 — Cross-Team Retrospective

### Overview

Used when two or more GOAL teams need to examine their shared interfaces, dependencies, and coordination patterns. Individual team retrospectives cannot surface problems that exist between teams — this pattern is specifically designed for that space.

**Duration:** 90–120 minutes
**Participants:** Flow Masters from all teams (required), Product Strategists from all teams (required), 1–2 Delivery Team members from each team (recommended)
**When:** Every 2–3 cycles when teams have active dependencies, or when dependency friction has been raised in individual team retrospectives

---

### Pre-Session Preparation

Each team prepares a brief summary (5 minutes to present):
- Current cycle metrics (Cycle Time, Block Rate)
- How many tasks this cycle were blocked due to dependencies on the other team(s)?
- What was the nature of those blocks?
- What requests did this team make of other teams? Were they handled well?

This data frames the cross-team session with specifics rather than generalities.

---

### Agenda

**Segment 1: Team snapshots (10 minutes)**

Each team presents its 5-minute summary. No questions yet — just listening.

The facilitator captures the dependency blocks in a shared view: which team blocked which other team, how many times, and for how long.

---

**Segment 2: Dependency friction analysis (25 minutes)**

For each identified cross-team dependency block:

1. What was the nature of the dependency? (Technical / Decision / Resource / Information)
2. How was the dependency communicated? Was the other team aware of the need in advance?
3. How was the dependency resolved? Was the resolution timeline acceptable?
4. What could have been different on either side to reduce the friction?

**The cross-team rule:** Both teams have equal standing in this analysis. A "dependency block" is a shared problem, not one team's fault. The question is always "how do we make this work better?" not "why didn't you respond faster?"

---

**Segment 3: Communication gaps between teams (20 minutes)**

Beyond blockers, examine how teams communicate:

- When does Team A learn about Team B's plans? Is it early enough to plan around them?
- Are there decisions made by one team that affect the other team but are not communicated proactively?
- Are there recurring misalignments about priority? (One team considers something urgent; the other does not)
- Are there informal communication channels between teams that are working? What can be learned from them?

---

**Segment 4: Program-level improvement items (20 minutes)**

Based on segments 2 and 3, identify improvements that require cross-team agreement and coordination:

**Improvement format for cross-team items:**

```
Improvement:     [specific change]
Required from Team A:  [specific action/change]
Required from Team B:  [specific action/change]
Joint owner:     [one person from each team is accountable]
Success signal:  [what will we measure to know this worked?]
Review date:     [when will both teams check in on this?]
```

Maximum 2 cross-team improvements per session. More than this overwhelms coordination capacity.

---

**Segment 5: Forward visibility agreement (10 minutes)**

A practical agreement between teams about how to share planning information going forward:

- How far in advance will each team share upcoming cycle goals with the other?
- Is there a lightweight way to flag cross-team dependencies before cycles begin (not after they block)?
- What is the agreed response time when one team requests something from the other?

Document these agreements explicitly. Vague commitments do not survive the return to normal workflow.

---

**Closing (5 minutes)**

Each team's Flow Master states one concrete commitment for the next cross-team interaction period.

---

## 9. Pattern 8 — Quarterly Reset Retrospective

### Overview

Held at the end of a quarter or a major planning period. Longer, more strategic than a cycle-level retrospective. Combines process reflection with goal quality analysis and OKR alignment review.

**Duration:** 120–150 minutes (half-day investment — schedule accordingly)
**Participants:** All roles plus leadership stakeholders (optional but valuable)
**When:** End of each quarter, or every 8–10 cycles if cycles do not align with quarters

---

### Pre-Session Preparation

Prepare the following before the session:
- Cycle metrics for all cycles in the quarter (Cycle Time, Flow Efficiency, Block Rate)
- Goal completion rate across all cycles (what percentage of primary goals were achieved?)
- Goal quality analysis: looking back, were the goals we set good goals? Did achieving them deliver the expected value?
- Improvement tracking: of all retrospective improvements identified this quarter, how many were implemented and sustained?

---

### Agenda

**Segment 1: Quarter in data (20 minutes)**

Present the quarterly view of flow metrics. Look for:
- Trends (is the team getting faster? more efficient? more blocked?)
- Cycles that were outliers (best and worst) and why
- Overall goal achievement rate: did we deliver what we committed to?

The quarterly data view reveals patterns that cycle-level retrospectives cannot see. A team that looks good cycle-by-cycle may reveal a seasonal pattern, an accumulating technical debt effect, or a gradual burnout trend at the quarterly level.

---

**Segment 2: Goal quality analysis (25 minutes)**

This segment examines not whether goals were achieved, but whether the right goals were set.

For each goal set this quarter:
- Was it achieved? (Yes / Partially / No)
- In retrospect, was achieving it actually as valuable as we thought?
- Were there goals we set that turned out to be less important than expected?
- Were there things we didn't set as goals that we should have?
- Were our goals connected to the organization's actual strategic priorities?

This analysis is valuable because teams can develop a pattern of setting "safe" goals — achievable but not impactful — in response to goal pressure. The quarterly review surfaces this pattern.

**Outcome:** A list of goal quality patterns to improve in the next quarter's planning. Discuss with the Product Strategist.

---

**Segment 3: OKR alignment review (20 minutes)**

If the team operates within an OKR framework:

- Which of this quarter's goals connected to organizational OKRs? Which did not?
- Were there OKRs that the team did not address at all this quarter? Why?
- For the next quarter: how should the team's Goal Cycles connect to the incoming OKRs?

If the team does not operate within an OKR framework:

- What were the most important things the team delivered this quarter from the organization's perspective?
- Were there gaps between what leadership needed and what the team built?
- What should be the 2–3 most important outcomes the team delivers next quarter?

---

**Segment 4: Process maturity assessment (20 minutes)**

Use the GOAL Adoption Scorecard (from the Adoption Playbook) to assess the team's process maturity quarterly.

Compare scores to the previous quarter:
- What has improved?
- What has stagnated or regressed?
- What are the most valuable areas to invest in next quarter?

---

**Segment 5: Retrospective effectiveness review (15 minutes)**

An honest assessment of the improvement loop itself:

- How many improvements were identified across all cycle retrospectives this quarter?
- How many were actually implemented and sustained?
- What prevented implementation of the ones that didn't land?
- Is the team's retrospective practice getting better, staying the same, or declining?

This meta-retrospective question is uncomfortable but essential. Teams that skip it continue generating improvements that don't land.

---

**Segment 6: Next quarter intentions (20 minutes)**

Based on all the above, collaboratively set 3–5 intentions for the next quarter:

- 1–2 process improvements the team will prioritize
- 1 skill or capability the team will deliberately develop
- 1 quality metric the team will target improving by a specific amount
- 1 goal-quality improvement (how will the team set better goals next quarter?)

These are intentions, not commitments. They guide cycle-level planning without constraining it.

---

**Closing (10 minutes)**

Each person shares:
1. The thing from this quarter they're proudest of
2. The one intention for next quarter they feel most strongly about

Document the intentions in a shared location and review them at the start of the first cycle of the next quarter.

---

## 10. Pattern 9 — Recovery Retrospective

### Overview

Used after a cycle that failed significantly — goals were not met, the cycle was extended multiple times, or the team is experiencing a confidence crisis. The purpose is to understand what happened, distinguish systemic from one-time causes, and rebuild the team's confidence in its ability to improve.

**Duration:** 75–90 minutes
**Participants:** All roles
**When:** Immediately after a cycle with significant goal failure or following a red-signal period

---

### Opening: Before the Data (10 minutes)

Unlike the standard retrospective, begin with the human experience, not the metrics.

*"Before we look at the data, I want to acknowledge what just happened. [Cycle X] was hard. [Name the specific difficulties: 'We didn't finish the goals we committed to' or 'We had three blockers that stalled us for a week' or 'We had to extend twice and it was frustrating']. That is real, and it's worth naming.*

*Here's what this retrospective is: a structured investigation into why this happened, so we can prevent it from happening again. It is not a performance review. It is not an assessment of whether the team is capable. Every team has difficult cycles. The difference between teams that improve and teams that don't is whether they understand why."*

---

### Agenda

**Segment 1: What actually happened? (15 minutes)**

Reconstruct the cycle factually, without interpretation.

Create a simple cycle timeline:
```
Day 1:       [What was the state of the work?]
Day 3–5:     [First signals things weren't going as planned?]
Day 7–10:    [Key events: blockers, scope changes, capacity issues]
Final days:  [How did it end?]
```

This timeline is built collaboratively. Different people noticed different things. The goal is to build a shared, accurate account before drawing conclusions.

---

**Segment 2: Root cause without blame (20 minutes)**

Using the timeline, ask: what were the root causes of this cycle's difficulties?

Use the 5-Why technique from Pattern 3, but apply it to process failures rather than incidents.

**The blame-free question template:** For each problem identified in the timeline, ask: "What in our planning, process, or environment made this outcome possible?"

Categorize root causes:

| Systemic | One-time |
|----------|----------|
| Problems that will recur if nothing changes | Problems caused by specific circumstances unlikely to repeat |

Focus the improvement discussion on systemic causes. Document one-time causes and close them.

---

**Segment 3: Distinguishing systemic vs one-time causes (10 minutes)**

For each identified root cause, ask:
1. "Has this happened before?" (If yes: systemic)
2. "Would this have happened in a different cycle?" (If yes: systemic)
3. "Was this caused by a specific one-time event?" (If yes: one-time — confirm the event is truly over)

Teams sometimes attribute systemic problems to one-time events as a coping mechanism. The facilitator should gently challenge "one-time" classifications: "Is there any chance this could happen again? What would need to be true to prevent it?"

---

**Segment 4: Rebuilding confidence (15 minutes)**

After the root cause analysis, shift the frame.

Questions:
- What did we do well this cycle, despite the difficulties? (Something was working — find it)
- What did we learn that we didn't know before?
- What would have been worse without [specific GOAL practice]? (This identifies what the framework protected even in a hard cycle)
- Given what we've identified, what would have to be true for the next cycle to go significantly better?

This segment is not optional and not cosmetic. A team that leaves a recovery retrospective only with a list of what went wrong is demoralized. A team that also understands what it can specifically change, and has confidence that change is possible, is capable of recovery.

---

**Segment 5: Recovery plan (15 minutes)**

Identify 1–3 specific, high-impact improvements for the next cycle.

For a recovery retrospective, the improvements should be defensive: things that prevent the identified root causes from recurring. Not additions to process, but protections from what failed.

Additional recovery planning questions:
- Should the scope of the next cycle be reduced to rebuild confidence and momentum? (A smaller, fully-achieved cycle is more valuable than another large, partially-achieved one)
- Are there external conditions that need to change before the team can succeed? (If so: who escalates this and to whom?)
- Does the team need specific support in the next cycle? (Flow Master more actively present, Product Strategist more available, etc.)

---

**Closing (5 minutes)**

Close on a specific forward commitment:

*"Here is what we are changing for cycle [N+1]: [name the 1–3 improvements]. Here is what we are NOT changing: [name the things that worked and should continue]. The goal of cycle [N+1] is not to be perfect — it is to be better than cycle [N] in these specific ways."*

---

## 11. Retrospective Facilitation Guide

### 11.1 How to facilitate each pattern

**Universal facilitation principles:**

1. **Prepare more than you think you need to.** The retrospective should feel effortless to participants, which requires significant facilitator preparation. Know the metrics, know the timeline, know the team's history.

2. **Your job is to surface information, not to teach.** Facilitators who use retrospectives as coaching opportunities lose the room. Ask questions. Make observations. Offer hypotheses. Do not lecture.

3. **Make thinking visible.** Capture everything on a shared surface. Ideas that are not written down do not survive the meeting.

4. **Protect the time boxes.** Each segment has a time. Enforce it. If a discussion runs over, explicitly decide to continue (cutting a later segment) or to park the discussion for after the retrospective.

5. **The last 10 minutes are the most important.** Improvements without owners never happen. Never end without confirmed owners for every improvement. Never let the last segment be rushed.

---

**Pattern-specific facilitation notes:**

*Pattern 1 (Standard):*
- Your most important skill is redirecting subjective statements to data: "What does the cycle time tell us about that?"
- Watch for the retrospective becoming a venting session without action. Capture everything but convert to improvement hypotheses.

*Pattern 2 (First Retrospective):*
- The opening statement is everything. Get it right. Practice it.
- Some team members will want to dive into analysis mode immediately. Slow down. The feeling-oriented segments in this pattern exist for a reason.

*Pattern 3 (Post-Incident):*
- Build the timeline before the session. Never build it in the room — it takes too long and creates conflict.
- Your most important skill is redirecting individual blame to systemic analysis.

*Pattern 4 (Low Morale):*
- Read the room constantly. Adjust pacing. If people are withdrawn, give more time.
- Resist the facilitator's urge to fill silence. Silence is often processing.

*Pattern 5 (High Performance):*
- The risk in this pattern is complacency. Push toward the edge of capability.
- Keep the session moving — high-performing teams have less to process and can move faster.

*Pattern 6 (Post-Major-Feature):*
- The celebration segment is mandatory. Do not skip it or rush it. It sets the emotional frame for everything that follows.

*Pattern 7 (Cross-Team):*
- Maintain strict neutrality between teams. Never appear to be advocating for one team's position.
- The room will sometimes feel like a negotiation. Your job is to keep it collaborative.

*Pattern 8 (Quarterly Reset):*
- This is a long session. Energy management matters. Schedule a break at the midpoint.
- The goal quality analysis is uncomfortable. People are admitting they set the wrong goals. Create safety explicitly before this segment.

*Pattern 9 (Recovery):*
- This is the most emotionally demanding pattern to facilitate.
- Never use language that evaluates the team's capacity or future potential. "The team struggled this cycle" is very different from "the team is struggling."

---

### 11.2 Common facilitation mistakes

**Mistake 1: Letting the highest-status person set the agenda**
The Product Strategist or senior developer speaks first and their framing dominates the rest of the discussion. Prevention: use individual silent writing before group discussion for every segment. Get everyone's thinking on paper before sharing.

**Mistake 2: Generating too many improvements**
The retrospective produces 8 improvements and nothing gets implemented. Prevention: hard cap at 3. Use dot voting to enforce selection.

**Mistake 3: Accepting vague improvements**
"Improve communication" is added to the list. It will never happen. Prevention: reject any improvement that doesn't have a specific behavior, an owner, and a measurable signal. Push for specificity before closing.

**Mistake 4: Skipping the previous-improvements review**
The team generates new improvements but never checks on old ones. Prevention: make this segment 1, not segment 4. Make it non-negotiable.

**Mistake 5: Running over time**
The meeting was supposed to be 60 minutes. It runs 90. People are late for their next meeting and leave before improvements are assigned. Prevention: hard time-box every segment. Use a visible timer.

**Mistake 6: Facilitating instead of participating**
The Flow Master never shares their own observations. Prevention: the facilitator can and should share data-based observations. Not opinions, but observations: "I noticed that the most common blocker this cycle was external dependencies. Did others see that?"

---

### 11.3 How to handle dominant voices and silent members

**Dominant voices:**

A team member who speaks first in every segment, speaks longest, and whose framing tends to be adopted by the group without much pushback.

Techniques:
- Use silent writing before sharing for every segment. Gets everyone's thinking out before the dominant voice frames it.
- Explicitly call on others before returning to the dominant voice: "Let's hear from someone who hasn't shared yet."
- For the improvement generation segment, use individual sticky notes rather than open brainstorm. Everyone's ideas have equal visual weight on the board.
- After the dominant voice shares, ask: "Does anyone see it differently?" before moving on.

**Silent members:**

A team member who rarely contributes during retrospectives, either from introversion, distrust of the safety, or disengagement.

Techniques:
- Do not force public sharing. Offer written alternatives for every segment.
- Ask specific, factual questions that invite contribution without putting people on the spot: "Were you involved in that blocker? What was your experience of it?"
- Check in after the retrospective (not in the room): "I noticed you were quiet today. Is everything OK? Is there something you'd want me to know about how the cycle went?"
- Over time, silent members often become more participatory as psychological safety builds.

---

### 11.4 Remote facilitation specifics

**Preparation differences:**
- Distribute the metrics dashboard 24 hours before the session so people can think about it in advance
- Prepare the digital collaboration board (Miro, FigJam, Mural, or equivalent) before the session — a blank board at the start of a remote retrospective wastes time and breaks flow
- Test screen sharing before the session starts

**Engagement differences:**
- Cameras on is the default but not a requirement for distressed team members
- Use the reaction features (thumbs up, emoji) for check-ins — quicker than typing
- Use breakout rooms for segments that benefit from smaller group discussion (3–4 people) before full-group synthesis

**Facilitation differences:**
- Call people by name more explicitly in remote settings — "I'd like to hear from [name] before we move on"
- Be more explicit about transitions: "We're moving to segment 2 now. Please open the [section] on the board."
- Time boxes are even more important remotely — attention fatigue sets in faster online

**Silent writing works better remotely:**
The individual writing before sharing format actually works better in remote settings than in person. Digital sticky notes remove the handwriting barrier, multiple people can post simultaneously, and there's less social pressure to match what others have written.

---

## 12. Retrospective Output Management

### 12.1 How to ensure improvements actually happen

The most common retrospective failure is not producing bad improvements. It is producing good improvements that never get implemented. The output management system must be as deliberate as the retrospective itself.

**The improvement record:**

Every improvement generated in a retrospective must be recorded in a persistent shared location with:

```
Improvement:     [specific description]
Owner:           [named individual — not "the team"]
Cycle targeted:  [the cycle in which this will be implemented]
Success signal:  [what will be measurably different when this works?]
Status:          [Not started / In progress / Implemented / Closed-not-implemented]
Review date:     [the retrospective where this will be checked]
```

This record is maintained by the Flow Master and reviewed at the start of every retrospective.

**The 3-improvement maximum rule:**

A retrospective that produces 3 focused improvements that all get implemented is infinitely more valuable than one that produces 10 improvements that none get implemented.

The 3-improvement maximum is not a suggestion — it is a structural rule. When more than 3 improvements are generated (common in pattern 8 sessions), use dot voting to select the 3 most valuable. Archive the rest for future retrospectives.

**Why 3?**

Three improvements fit in working memory. Three improvements can be tracked in a 5-minute segment of the next retrospective. Three improvements do not overwhelm a team that is also executing work. More than three creates the feeling that "there's too much to fix" — which produces paralysis rather than action.

---

### 12.2 Maximum 3 improvements per retrospective — rationale and enforcement

**The paradox of comprehensive improvement lists:**

A retrospective that identifies 10 things to improve communicates (implicitly) that the team is deeply broken. This demoralizes rather than motivates. A retrospective that identifies 3 specific, achievable improvements and consistently implements them builds confidence and genuine capability over time.

**Enforcement in practice:**

1. After improvement generation, the facilitator counts the items. If there are more than 3 with votes, the top 3 are confirmed and the rest are explicitly archived:
   *"We have 7 candidate improvements. We're going to take the top 3. The other 4 are archived here [point to location] — they're not forgotten, they're candidates for future cycles."*

2. If the team pushes back ("but all of these are important"), the facilitator responds:
   *"I agree they're all important. The reason we cap at 3 is not that the others don't matter — it's that a list of 7 improvements consistently gets 0 implemented. A list of 3 consistently gets 2–3 implemented. I'd rather we get 3 of these right than none of 7."*

3. If a critical improvement does not make the top 3 vote, it can be escalated outside the retrospective as a priority item for the Product Strategist or Flow Master to address directly. The retrospective output is separate from the escalation channel.

---

### 12.3 How to track improvement implementation between cycles

**During the cycle (not just at retrospective time):**

The Flow Master is responsible for improvement implementation between cycles. Mid-cycle, the Flow Master should:

- Check whether improvement owners have taken action on their items
- Flag any improvement that appears stuck: "The improvement we agreed on is to [X]. Has that happened? What's in the way?"
- Note implementation progress in the improvement record

Improvements are not task items on the Flow Board. They are behavioral changes or structural changes that happen alongside the regular work. They require active follow-up, not just addition to a list.

**At the next retrospective:**

Segment 4 of Pattern 1 (or an equivalent segment in other patterns) opens with: "Let's check on the improvements from last cycle."

For each improvement:
- Show status
- Ask the owner to describe what changed
- If implemented: "What does the data show?" (Connect to a metric if possible)
- If not implemented: "What prevented this? Is it still worth doing? Who takes it forward?"

**Improvement lifecycle:**

```
Identified in retrospective
         ↓
Recorded with owner and success signal
         ↓
Implemented during next cycle (Flow Master follows up)
         ↓
Reviewed in next retrospective
         ↓
Either: [Confirmed working → becomes standard practice]
     or [Confirmed not working → investigated or dropped]
     or [Not implemented → re-evaluate: still valuable? different owner? different approach?]
```

**What to do with improvements that never get implemented:**

If an improvement appears on the list twice in a row without progress, ask explicitly: "This improvement has been on our list for two cycles without movement. One of three things is true: it's not actually a priority, the owner doesn't have the ability or time to implement it, or there's a structural barrier we haven't identified. Which is it?"

This question forces an honest answer rather than allowing the improvement to stay on the list indefinitely as performance of intent without substance.

---

*End of GOAL Retrospective Patterns Library v1.0*
*Companion document: GOAL Methodology v0.2*
*Related: GOAL Adoption Playbook*
