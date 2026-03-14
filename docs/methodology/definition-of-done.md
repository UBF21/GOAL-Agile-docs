---
id: definition-of-done
title: Definition of Done
sidebar_position: 7
description: The two-level Definition of Done in GOAL — baseline criteria, extended criteria, management rules, and DoD vs acceptance criteria.
---

# Definition of Done

The Definition of Done (DoD) is a checklist that a task must fully satisfy before it can move to the Done column. Without a DoD, "done" means something different to every person on the team. The DoD eliminates ambiguity.

**Critical rule:**

> A task that does not meet the DoD cannot move to Done. It must either return to In Progress or move to Blocked (if an external dependency prevents DoD completion). No exceptions.

---

## Two-Level DoD Structure

GOAL uses two levels of Definition of Done:

### Level 1 — Baseline DoD (Mandatory for All GOAL Teams)

This applies to every task, without exception:

```
DEFINITION OF DONE — LEVEL 1 (BASELINE)

A task is Done when ALL of the following are true:

☐ Code is merged to the main/trunk branch
  (not sitting in a personal or feature branch)

☐ All automated tests pass
  (unit, integration, or relevant test type for this task)

☐ At least one peer code review completed and approved
  (verbal review does not count)

☐ Task validated in staging or QA environment
  (not only validated locally)

☐ No new technical debt introduced without a corresponding
  entry in the Technical Debt backlog

☐ Relevant documentation updated
  (required if task changes existing behavior or adds a new API/interface)
```

### Level 2 — Extended DoD (Team-Defined, Reviewed Each Retrospective)

Additional criteria the team adds based on their product and context. Examples:

```
DEFINITION OF DONE — LEVEL 2 (EXTENDED — examples)

☐ Performance benchmarks verified
  (for performance-sensitive features)

☐ Accessibility standards checked
  (for UI features — WCAG 2.1 AA or team standard)

☐ Security review completed
  (for authentication, authorization, or data-handling features)

☐ Monitoring and alerting configured
  (for new backend services)

☐ Feature flag enabled/disabled state verified
  (if using feature flags)

☐ Product Strategist sign-off received
  (for high-stakes user-facing changes)
```

The Extended DoD is unique to each team and evolves over time based on retrospective decisions.

---

## Full DoD Checklist Template

```
DEFINITION OF DONE — TASK CHECKLIST

Task: _______________________________________
Cycle: _____________ Date: _________________

LEVEL 1 — BASELINE (mandatory for all tasks)

☐ Code is merged to the main/trunk branch

☐ All automated tests pass

☐ At least one peer code review completed and approved

☐ Task validated in staging or QA environment

☐ No new technical debt introduced without a Technical Debt entry

☐ Relevant documentation updated

LEVEL 2 — EXTENDED (team-defined)

☐ ____________________________________________

☐ ____________________________________________

☐ ____________________________________________

☐ ____________________________________________

BOTH levels must be fully checked before this task moves to Done.
A task with any unchecked box is NOT done.

Verified by: _________________ Date: ___________
```

---

## DoD Management

**Setting the Baseline DoD:**
The Baseline DoD is set at team formation during a dedicated team session. It does not change without a formal team decision at a retrospective.

**Managing the Extended DoD:**
The Extended DoD is reviewed and potentially updated at every retrospective. New criteria can be added, existing criteria can be modified, and criteria that are no longer relevant can be removed.

**Enforcement:**
- The DoD is a team document — every team member is equally responsible for enforcing it
- The Flow Master monitors DoD compliance and flags violations in the Daily Flow Sync
- A task moved to Done without meeting the DoD is a process violation — tracked in the Block Register as a separate category

**When deadline pressure hits:**
The DoD is not negotiable at end-of-cycle deadline pressure. That is exactly when it matters most. Teams that compromise on the DoD under pressure accumulate technical debt that slows every subsequent cycle. Short-term pain, long-term protection.

---

## DoD vs Acceptance Criteria

These are two different things that are often confused:

| | Definition of Done | Acceptance Criteria |
|-|--------------------|---------------------|
| **Scope** | Applies to every task | Specific to one task |
| **Content** | Process and quality gates | Business behavior requirements |
| **Example** | "Code reviewed by a peer" | "User can log in with Google OAuth and is redirected to dashboard" |
| **Who defines it** | The team collectively | The Product Strategist |
| **Changes** | Only at retrospective | Per item, during grooming |

**Both must be satisfied for a task to be considered Done.** A task where the code is merged, reviewed, and tested in staging (DoD met) but the acceptance criteria failed (user cannot log in as expected) is **not done**.

---

## Common DoD Mistakes

**"We'll add the tests next cycle."**
This is a DoD violation. Tests are a Level 1 requirement. The Flow Master must refuse to count the task as done.

**"The code review was done verbally."**
Verbal reviews do not count. The DoD requires a documented, approved review — a pull request with written approval.

**"This task is too small to need the full DoD."**
There is no minimum size for DoD application. Small tasks that skip code review accumulate into large quality problems.

**"We're using the DoD as a ceiling, not a floor."**
The DoD is a minimum standard. Teams can always do more than the DoD requires. They cannot do less.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
