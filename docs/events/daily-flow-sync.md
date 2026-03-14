---
id: daily-flow-sync
title: Daily Flow Sync
sidebar_position: 2
description: The GOAL Daily Flow Sync — how to run a 10-minute board-focused meeting that replaces the traditional standup.
---

# Daily Flow Sync

**Purpose:** Identify blockers and maintain flow momentum. This is not a status report.

**Duration:** 10–12 minutes (hard limit — if it takes longer, it is being run incorrectly)

**Participants:** All roles (Product Strategist optional but recommended)

**When it happens:** Every working day of the cycle, at a consistent time

---

## Three Questions

The Daily Flow Sync is structured around three questions only:

```
1. What moved forward since yesterday?
   (Focus on tasks that changed column, not on personal activity)

2. What is blocked or at risk of being blocked?
   (Any task that has not moved, any dependency at risk)

3. What is slowing the flow?
   (Process observations: long queues, WIP approaching limit, review bottlenecks)
```

These questions are answered by **walking the board**, not by going person by person.

---

## Full Script

### Setup (before the sync)

The Flow Master reviews the Flow Board before the sync starts. Note:
- Any tasks that have not moved columns since yesterday
- Any tasks approaching or past aging thresholds
- Current WIP count vs limit

### Opening (30 seconds)

*"Let's run the sync. We have 10 minutes. We're walking the board, not going person by person."*

---

### Question 1: What moved forward since yesterday? (3 minutes)

Walk the board **right to left**: Done → Validation → Code Review → In Progress → Ready.

Ask: *"What completed or changed columns yesterday?"*

Record: Any new items in Done. Any new items advancing toward Done.

**Redirect if needed:** If someone starts explaining what they did (activity), redirect: *"Did the task change columns? What's its current state?"*

---

### Question 2: What is blocked or at risk of being blocked? (4 minutes)

Check the Blocked column: *"Is each blocked task's Register entry complete? Is there an owner?"*

Check the rest of the board: *"Is there anything in In Progress or Code Review that hasn't moved in more than [S: 1 day / M: 2 days / L: 3 days]?"*

Ask the team: *"Is anything at risk of getting stuck today — a pending decision, a review that needs to happen, an external response you're waiting for?"*

Any new blocker identified: Move the task to Blocked now. Complete the Register entry today.

---

### Question 3: What is slowing the flow? (2 minutes)

Flow Master observes: *"WIP is currently [X] of [Y limit]. Code Review has [Z] tasks queued. Validation has [N] tasks."*

If queues are building: *"Who can do a review right now? Before picking up new work, let's clear Code Review."*

If WIP is near limit: *"We're at [X/Y]. Before anyone picks up a new task, finish or unblock what's active."*

---

### Close (30 seconds)

*"That's the sync. Blockers go in the Register today. Next sync is tomorrow at [time]."*

If a discussion topic emerges that needs more than 2 minutes: *"Let's take that offline — [Name] and [Name] connect after the sync."*

---

## What the Daily Flow Sync Is NOT

- A task-by-task status update from each person
- A place for technical problem solving (those discussions happen separately)
- A management check-in on individual productivity
- Replaceable with a Slack message
- Optional

---

## Flow Master's Role During the Sync

The Flow Master leads the sync and is specifically looking for:

- Tasks aging in any column
- WIP approaching the limit
- Blockers that were not formally registered
- Patterns (same person always blocked, same column always backed up)

The Flow Master is not a passive observer — they actively question board state and redirect personal activity reports to flow state.

---

## When the Sync Takes More Than 12 Minutes

If the Daily Flow Sync consistently takes more than 12 minutes, the most likely causes are:

1. **People are reporting activities, not board states** — redirect to column changes
2. **Technical problem solving is happening in the sync** — take it offline immediately
3. **The team is too large** — consider splitting into smaller sync groups
4. **WIP is too high** — there are too many tasks to discuss in 12 minutes (this is itself a signal)

The 12-minute limit is not a suggestion — it is a process rule. A meeting culture where people expect to spend 30 minutes in standup will resist data-driven retrospectives, WIP limits, and every other GOAL practice.

---

## Daily Flow Sync vs Scrum Daily Standup

| Dimension | Daily Flow Sync | Scrum Daily Standup |
|-----------|----------------|---------------------|
| Focus | Board state | Individual activity |
| Structure | Walk the board | Person by person |
| Questions | What moved? What's blocked? What's slow? | What did you do? What will you do? Any blockers? |
| Duration | 10–12 min (enforced) | 15 min (suggested) |
| Product Strategist | Optional | Not prescribed |
| Primary output | Identified blockers, WIP awareness | Individual plans |

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
