---
id: quality-management
title: Quality Management
sidebar_position: 13
description: A complete quality framework for GOAL teams — built-in quality philosophy, quality metrics, testing strategy, bug management, code review standards, and anti-patterns to avoid.
---

## Table of Contents

1. [Quality Philosophy in GOAL](#1-quality-philosophy-in-goal)
2. [Quality Metrics GOAL Teams Track](#2-quality-metrics-goal-teams-track)
3. [Testing Strategy Integrated Into the Goal Cycle](#3-testing-strategy-integrated-into-the-goal-cycle)
4. [Definition of Ready for QA](#4-definition-of-ready-for-qa)
5. [Quality Gates by Task Type](#5-quality-gates-by-task-type)
6. [Bug Management in GOAL](#6-bug-management-in-goal)
7. [Code Review Quality Standards](#7-code-review-quality-standards)
8. [Quality Retrospective Analysis](#8-quality-retrospective-analysis)
9. [QA Role in GOAL Teams](#9-qa-role-in-goal-teams)
10. [Quality Anti-Patterns](#10-quality-anti-patterns)

---

## 1. Quality Philosophy in GOAL

### 1.1 The foundational principle: quality is built in, not tested in

GOAL's Definition of Done requires that tests pass. But that single criterion does not constitute a quality strategy — it is the final checkpoint of one. The fuller principle is:

> **Quality is the responsibility of the person writing the code, in the moment they write it. Testing confirms what quality has already been built.**

This is the difference between "built-in quality" and "tested-in quality."

**Tested-in quality** is the traditional model: developers write code, then QA finds bugs, then developers fix bugs, then QA re-tests. In this model, quality is a downstream filter. It is slow, expensive, and creates adversarial dynamics between development and QA. It also fails systemically — no QA team can find all bugs, and the bugs that escape to production are usually the most expensive.

**Built-in quality** means every team member considers correctness, testability, and maintainability as part of the implementation decision — not as a separate phase. Testing becomes confirmation, not discovery.

### 1.2 Why this matters in GOAL specifically

GOAL is built around continuous delivery and flow efficiency. A bug that escapes to production does not just cost one fix — it costs:

- Time to detect the bug in production (often hours or days)
- Context switch overhead for the developer who needs to re-engage with old code
- Flow disruption: the bug typically enters as a P1 interrupt, consuming Expedite lane capacity
- Trust erosion with stakeholders who see production failures
- Rework: the task that "passed the DoD" has to return to In Progress, inflating cycle time metrics

All of these are measurable, flow-level impacts. Quality is not a soft value — it is a throughput variable.

### 1.3 Quality as a shared team responsibility

GOAL does not have a separate QA department that "owns" quality. Quality is distributed:

| Role | Quality responsibility |
|------|----------------------|
| **Delivery Team member** | Write tests, review for correctness, flag quality risks in planning |
| **QA engineers (if embedded)** | Define acceptance tests, validate in staging, identify gaps in coverage strategy |
| **Flow Master** | Monitor task return-to-progress rates, flag quality-related delays in flow |
| **Product Strategist** | Write clear acceptance criteria that make quality unambiguous |

When quality fails, it is a system failure — not the QA team's failure.

### 1.4 Quality as a cycle-level commitment

At Smart Planning, the team does not just commit to delivering features. They implicitly commit to the quality level defined in the DoD. The DoD is the minimum quality contract. If a cycle produces features that technically pass the DoD but generate high bug escape rates, the DoD needs to be updated.

Quality commitments evolve. The Extended DoD (Level 2 in the GOAL methodology) is the mechanism for this evolution. Each retrospective is an opportunity to raise the quality bar based on what the data shows.

---

## 2. Quality Metrics GOAL Teams Track

GOAL uses data to drive decisions. Quality is no exception. The following metrics form the quality layer of the Flow Metrics Dashboard.

### 2.1 Bug Escape Rate

```
Definition:   Bugs found in production / Total bugs found (production + pre-release)
Formula:      Bug Escape Rate = (Production bugs / Total bugs) × 100
Unit:         Percentage
Measurement:  Per cycle

Interpretation guide:
  < 5%    Excellent. Pre-release detection is working.
  5–15%   Acceptable for teams still maturing their testing strategy.
  15–30%  Concerning. Testing strategy has significant gaps.
  > 30%   Systemic quality problem. Testing strategy requires fundamental review.

Why this metric matters:
  A team can have many bugs and still have excellent quality if they all get caught before production.
  A team with few bugs but high escape rate has a detection problem, not just a bug problem.
  Escape rate separates "we write bugs" from "we miss bugs before users see them."
```

**How to track it:** Count bugs reported from production monitoring, user reports, or post-release discovery as "escaped." Count bugs caught in code review, QA environments, or automated testing as "pre-release caught." Record both per cycle.

### 2.2 Defect Density

```
Definition:   Number of bugs found per unit of output
Formula A:    Bugs per feature delivered in the cycle
Formula B:    Bugs per task completed in the cycle
Unit:         Ratio (bugs/feature or bugs/task)
Measurement:  Per cycle, tracked as trend over time

Interpretation:
  There is no universal "good" defect density — teams and products vary.
  The goal is a consistent downward trend over 4–6 cycles.
  A spike in defect density in a specific cycle is a signal to investigate:
    - Was the cycle rushed?
    - Were the features more complex than usual?
    - Was there a team member or area of the codebase with disproportionate bugs?

Note on completeness:
  Defect density is only useful if bug tracking is complete.
  Bugs fixed informally without being logged corrupt this metric.
  Every bug fix must be a tracked task on the Flow Board.
```

### 2.3 Test Coverage

```
Definition:   Percentage of code paths or behaviors covered by automated tests
Standard:     Line coverage is the most commonly measured but the least meaningful.
              GOAL teams track meaningful coverage instead.

Meaningful coverage framework:
  - Critical path coverage: are the flows that users depend on most tested end-to-end?
  - Branch coverage: are both sides of conditional logic tested?
  - Error path coverage: are error conditions and edge cases tested, not just happy paths?
  - Regression coverage: is every previously escaped bug now covered by a regression test?

Targets:
  GOAL does not set a universal percentage target (e.g., "80% line coverage").
  Instead, coverage targets are defined per module based on criticality:

  | Module criticality | Coverage expectation |
  |--------------------|----------------------|
  | Payment / auth / data integrity | > 90% branch coverage + critical path E2E |
  | Core business logic | > 80% branch coverage |
  | UI components | Critical path E2E + snapshot tests for key screens |
  | Configuration / tooling | Smoke tests at minimum |
  | Legacy untouched code | Do not reduce; improve opportunistically |

Coverage as a quality gate:
  Coverage percentage is not a DoD criterion by default.
  What IS a DoD criterion: "No new code was added without corresponding tests."
  Coverage regression (new code that reduces overall coverage) triggers a review.
```

### 2.4 Mean Time to Detect (MTTD) and Mean Time to Resolve (MTTR)

```
MTTD — Mean Time to Detect

Definition:   Average time between when a bug is introduced and when it is discovered
Formula:      Average of (bug detection date - estimated introduction date) across all bugs
Unit:         Hours or days
Measurement:  Per cycle or rolling 30-day window

Interpretation:
  Low MTTD (<4 hours) = bugs caught within the same development session (ideal)
  Medium MTTD (hours–days) = caught in code review or QA validation (acceptable)
  High MTTD (days–weeks) = caught in production or after release (costly)

MTTR — Mean Time to Resolve

Definition:   Average time between when a bug is detected and when the fix is deployed
Formula:      Average of (fix deploy date - bug detection date) across all bugs
Unit:         Hours or days
Measurement:  Per cycle or rolling 30-day window

Interpretation:
  MTTR for P1 (production): target < 4 hours
  MTTR for P2 (pre-release): target < 1 cycle
  MTTR for P3 (known issues): tracked, resolved within tech debt budget

MTTD and MTTR relationship:
  Low MTTD + Low MTTR = excellent quality operations
  Low MTTD + High MTTR = good detection, slow response (process or capacity problem)
  High MTTD + Low MTTR = fast fixes but catching bugs late (testing strategy problem)
  High MTTD + High MTTR = systemic quality crisis requiring immediate attention
```

### 2.5 Change Failure Rate (DORA Metric)

```
Definition:   Percentage of deployments that result in a production failure
              requiring a hotfix, rollback, or patch within 24 hours
Formula:      (Failed deployments / Total deployments) × 100
Unit:         Percentage
Measurement:  Per cycle, tracked as trend

DORA benchmark levels:
  Elite performers:  0–15% change failure rate
  High performers:   16–30%
  Medium performers: 16–30% (same range, distinguished by recovery speed)
  Low performers:    > 45%

Why GOAL tracks this:
  Change failure rate directly connects delivery speed to stability.
  Teams that deploy frequently but with high failure rates are not high-performing.
  GOAL's goal-oriented delivery model should improve this metric over time
  because goals push toward well-defined, tested outcomes rather than rushed feature dumps.

Relationship to GOAL cycle health:
  A spike in change failure rate in a given cycle is an automatic retrospective trigger.
  It often correlates with: rushed cycle closure, unclear acceptance criteria,
  inadequate validation in staging, or WIP limit violations in the Validation column.
```

### 2.6 Rework Rate

```
Definition:   Percentage of tasks that return to In Progress after being moved to Done
              or after being considered complete by the developer
Formula:      (Tasks returning to In Progress from Done or Validation / Total tasks) × 100
Unit:         Percentage
Measurement:  Per cycle

Note: In GOAL, "returning from Done" means the task did not truly meet the DoD
      and was incorrectly marked. This is a DoD compliance failure.
      "Returning from Validation" is more common and expected in mature teams
      but should still be tracked as a signal of incomplete task definition.

Targets:
  < 5%   Healthy. Task definitions are clear, DoD is being enforced.
  5–15%  Watch. Either task definitions lack clarity or DoD enforcement is inconsistent.
  > 15%  Problem. Rework is consuming planned capacity and hiding true cycle time.

Rework and flow efficiency:
  Rework inflates cycle time, reduces delivery rate, and hides true capacity.
  A team with 20% rework rate effectively has 20% less capacity than their plan assumes.
  Rework rate is therefore also a capacity planning input (see GOAL_Capacity_Planning.md).
```

---

## 3. Testing Strategy Integrated Into the Goal Cycle

### 3.1 The Test Pyramid for GOAL Teams

The test pyramid describes the recommended ratio of test types in a healthy test suite. GOAL adopts the standard pyramid with specific guidance for how it maps to the Flow Board.

```
                    /\
                   /  \
                  / E2E \         ~10% of test investment
                 /--------\
                /Integration\     ~20% of test investment
               /--------------\
              /   Unit Tests    \ ~70% of test investment
             /------------------\
```

**Unit tests (70%)**

- Test individual functions, methods, or components in isolation
- Run in milliseconds — should run on every file save in development
- Written by the developer implementing the code, at the time of implementation
- A unit test that passes but does not test the actual behavior is waste (test theater — see Section 10)
- GOAL expectation: every new function with logic complexity > trivial has at least one unit test

**Integration tests (20%)**

- Test interactions between components, modules, or services
- Test database interactions, API contracts, service-to-service communication
- Run in seconds — should run in the CI pipeline before merge
- Often more valuable than unit tests for finding real bugs because they test actual system wiring
- GOAL expectation: every new API endpoint or service integration has an integration test

**End-to-end tests (10%)**

- Test complete user workflows through the actual UI or API surface
- Slowest, most expensive to maintain, most fragile
- Reserved for critical paths only: login, payment, core user journeys
- GOAL expectation: each primary goal that affects a user-facing flow has at least one E2E test covering the happy path and one covering the most critical error path

**Adjusting the pyramid for your context:**

The 70/20/10 ratio is a starting point. Teams with:
- Heavy UI work: may shift more investment toward component and E2E tests
- Pure API / backend services: may shift more toward integration tests
- Data pipelines: may need specialized data integrity tests outside the standard pyramid

The pyramid shape (many fast cheap tests, few slow expensive tests) remains constant even as ratios adjust.

### 3.2 When Tests Are Written — GOAL's Stance on TDD

GOAL does not mandate Test-Driven Development (TDD) as a strict practice. It does have a clear position:

**Tests are written as part of implementation, not after implementation is "done."**

The distinction:

| Approach | When tests are written | GOAL position |
|----------|----------------------|---------------|
| Test-Driven Development (TDD) | Before implementation code | Encouraged, not mandated |
| Test-concurrent development | During implementation | Acceptable, standard practice |
| Test-after development | After implementation is complete, before DoD | Borderline acceptable for small changes |
| Test-later | After the task is moved to Done, in a future task | Not acceptable — violates DoD |
| Never | Tests are not written | Never acceptable under GOAL DoD |

**Why GOAL encourages TDD without mandating it:**

TDD produces demonstrably better-designed code in most cases because writing the test first forces the developer to define the expected behavior before thinking about the implementation. However, mandating TDD on teams that are not trained in it creates superficial compliance (tests written to pass, not to specify behavior) rather than genuine quality improvement.

GOAL's approach: introduce TDD concepts in retrospectives and team learning sessions; let the team adopt it organically as they see its benefits in their defect density data.

### 3.3 Tests as Part of Task Definition, Not a Separate Task

One of the most common quality anti-patterns in agile teams is creating a separate "write tests for X" task that follows the implementation task. This creates several problems:

- Tests are written from memory, not from the moment of implementation when behavior is freshest
- The "write tests" task is always the first one cut when the cycle is running out of time
- It creates the false sense that testing is optional or separable from development
- It doubles the WIP without doubling the value

**GOAL's rule:**

> A task is not complete until its tests are written. Tests are part of the task, not a consequence of it.

This means task sizing must account for test writing time. When a developer estimates a Medium task (2–3 days), that estimate includes writing and verifying the tests. If a task would exceed the Large threshold (more than 3 days) once testing is included, it should be split.

**What "tests as part of the task" looks like on the Flow Board:**

The DoD checklist for any code-producing task includes: "Automated tests written and passing." When a task enters Code Review, the reviewer checks that tests exist, are meaningful, and pass. When a task enters Validation, QA (or the developer themselves) verifies the acceptance tests pass in the staging environment.

### 3.4 Acceptance Test Definition During Smart Planning

Quality work begins at Smart Planning, not at Code Review. The Product Strategist's acceptance criteria (written before the cycle begins) are the specification for acceptance tests.

**During Smart Planning, the team should:**

1. Review the acceptance criteria for each goal with a testing lens
2. Identify which criteria are testable as automated tests vs require manual validation
3. Flag any criteria that are ambiguous or untestable and request clarification before the cycle starts
4. Identify criteria that require a specific test environment, test data, or third-party account setup

**QA engineer's role in Smart Planning (if present):**

The QA engineer reviews acceptance criteria and drafts acceptance test cases before implementation begins. These test cases become the specification for the Validation column. A task enters Validation only when there is an agreed-upon set of test cases to run.

**The benefit of early test definition:**

When test cases are written before implementation, developers know exactly what behavior they are building toward. This eliminates the "I thought it was supposed to work this way" conversation at the end of the cycle. It also enables TDD: the test cases from Smart Planning become the failing tests that the implementation makes pass.

---

## 4. Definition of Ready for QA

### 4.1 What "Ready for QA" Means in GOAL

The Validation column on the Flow Board is for tasks that have passed code review and are ready to be tested in a staging or QA environment. Moving a task to Validation prematurely — before it is truly ready — is one of the most common quality process failures.

GOAL defines a "Definition of Ready for QA" (DRfQ) that is separate from and additional to the standard Definition of Done. A task can only enter the Validation column when all DRfQ criteria are met.

### 4.2 Criteria for Entering the Validation Column

```
A task is Ready for QA when ALL of the following are true:

□ Code review is complete and all review comments are resolved
□ All automated tests pass in the CI pipeline (unit + integration)
□ The feature is deployed to the staging/QA environment (not just merged to main)
□ The staging environment reflects the current state of the feature (no broken dependencies)
□ The acceptance criteria for the task are documented and accessible to the validator
□ Test data or test accounts needed to validate the feature are available
□ Any known limitations or testing prerequisites are documented on the task card
□ The developer who implemented the feature has done a basic self-review
  ("desk check") — they have verified the feature works as expected in staging
  before handing it to QA
```

The desk check is particularly important. A developer who has never run their own feature in a real environment before passing it to QA is passing risk downstream. Desk checks catch the most obvious failures in minutes, saving QA hours.

### 4.3 Common "Not Ready for QA" Failures and How to Prevent Them

**Failure 1: "It works on my machine"**

The feature works locally but the staging deployment is broken or not done yet.

Prevention: The DoD requires staging validation, not local validation. The DRfQ enforces staging deployment before entering Validation. Automated deployment pipelines eliminate the manual step.

**Failure 2: Missing or incomplete acceptance criteria**

The validator does not know what to test or what "passing" looks like.

Prevention: Acceptance criteria are required at the Backlog Grooming stage (before the cycle). A task without complete acceptance criteria cannot enter the Ready column, which means it cannot enter the cycle at all.

**Failure 3: Broken dependencies in staging**

The feature works but the staging environment has a broken dependency (API, database state, third-party service) that prevents meaningful testing.

Prevention: Environment health is monitored continuously. A broken staging environment is a blocker — it gets its own entry in the Block Register and is escalated immediately (Infrastructure blocker type, 24-hour resolution SLA).

**Failure 4: Test data not available**

The feature requires specific test data (user accounts, product records, etc.) that do not exist in staging.

Prevention: Test data requirements are identified at Smart Planning during acceptance test definition. Data setup is a subtask of the implementation task, not an afterthought.

**Failure 5: Ambiguous test scope**

The task was split into subtasks and it is unclear whether QA is validating one subtask, all subtasks, or the integrated feature.

Prevention: When a task is split, the acceptance tests and validation scope are clarified at the time of the split. Each subtask has its own validation criteria, and there is an additional integration validation step for the assembled feature.

---

## 5. Quality Gates by Task Type

Different task types have different risk profiles. GOAL's quality gates reflect these differences.

### 5.1 Feature Gates

Features are new capabilities added to the product. They carry the highest testing obligation because they introduce new code paths, new user interactions, and new integration points.

```
Feature quality gates:

□ Unit tests covering new business logic (target: branch coverage for all non-trivial logic)
□ Integration tests for new API endpoints, database interactions, or service calls
□ Acceptance tests matching each acceptance criterion (automated where feasible)
□ E2E test for the critical path of the feature (at minimum: happy path)
□ Regression test run: existing test suite passes without degradation
□ Staging validation against all acceptance criteria by QA or designated validator
□ Performance check: the feature does not introduce latency regressions
  (baseline measurement compared against threshold, e.g., p95 response time)
□ Security review if the feature handles authentication, authorization, or user data
□ Product Strategist sign-off on acceptance criteria satisfaction
```

### 5.2 Bug Fix Gates

Bug fixes repair existing behavior. The primary risk is regression: the fix solves the bug but breaks something else.

```
Bug fix quality gates:

□ Regression test written FIRST that reproduces the bug before the fix is applied
  (This test must fail before the fix and pass after — proving the fix works)
□ Root cause documented on the task card
□ Impact assessment: what other areas could be affected by this change?
□ Automated test suite passes fully (no regressions introduced)
□ Staging validation: the original bug scenario no longer occurs
□ Related area smoke test: manual or automated spot-check of adjacent functionality
□ For P1 production bugs: post-fix monitoring confirmation (24 hours of clean metrics)
```

The regression test requirement is non-negotiable. A bug fix without a regression test is likely to recur — either the same bug reintroduced in a future change, or a related bug in adjacent code that was not understood.

### 5.3 Refactoring Gates

Refactoring changes internal structure without changing external behavior. The risk is unintended behavior change — the refactored code does something subtly different than the original.

```
Refactoring quality gates:

□ Existing tests pass without modification (if existing tests need to change,
  this is scope creep — the refactoring changed behavior, not just structure)
□ Coverage maintained or improved (refactoring is an opportunity to add missing tests)
□ Performance metrics unchanged (refactoring should not introduce latency changes)
□ No new technical debt introduced (the purpose of refactoring is to reduce debt)
□ Architecture decision documented if the refactoring involves a structural change
  that affects other team members' future work
□ Peer review focused on: was any behavior changed? are the tests still meaningful?
```

**Important:** If existing tests require modification during a refactoring, stop and reassess. Either the tests were testing implementation rather than behavior (a test quality problem) or the refactoring changed observable behavior (which makes it a feature change, not a refactoring, and it needs different gates).

### 5.4 Infrastructure Change Gates

Infrastructure changes (deployment configurations, CI/CD pipeline changes, database schema migrations, environment changes) have a unique risk profile: they can cause silent failures that only appear under production conditions.

```
Infrastructure change quality gates:

□ Change tested in staging environment before production deployment
□ Rollback plan documented and tested (can you undo this change in < 30 minutes?)
□ Impact assessment: which services or features does this change affect?
□ Staging smoke test after change: core application paths still work
□ Monitoring and alerting verified: if this change causes a failure, will you know?
□ Deployment window agreed: infrastructure changes prefer low-traffic windows
□ Post-deployment verification checklist executed
□ On-call engineer notified if change affects production availability

For database schema migrations specifically:
□ Migration is reversible (or rollback SQL is prepared)
□ Migration tested with production-scale data in staging
□ Performance impact assessed (does this migration lock tables? how long does it take?)
□ Application code is backwards compatible with both old and new schema
  (to enable zero-downtime deployment)
```

---

## 6. Bug Management in GOAL

### 6.1 Bug Classification

GOAL uses a three-tier bug classification system aligned with the Interrupt Management Protocol from the core methodology.

**P1 — Production Bug**

```
Definition:   A defect that is causing measurable harm to live production users
              or breaking a critical system function right now.

Characteristics:
  - Users are actively affected (cannot complete a core action, seeing errors, data is wrong)
  - Revenue or compliance is at risk
  - The issue cannot wait for the next cycle

Response:
  - Immediate entry to Expedite lane (follows Interrupt Management Protocol, Class P1)
  - All other work pauses while P1 is being resolved
  - Target resolution time: < 4 hours for mitigation, < 24 hours for full fix
  - Root cause analysis is mandatory — documented in the Block Register
  - Post-mortem analysis in the next retrospective

Examples:
  Login broken for all users, payment processing failing, data corruption occurring,
  security vulnerability actively exploited
```

**P2 — Pre-release Bug**

```
Definition:   A defect discovered before production release, in staging or QA environment,
              that would cause a significant problem if released.

Characteristics:
  - Found during Validation column testing
  - Prevents the task from meeting its acceptance criteria
  - High enough severity that releasing the feature as-is would harm users

Response:
  - Task returns to In Progress with the bug description documented
  - Counts against rework rate metric
  - Fix is prioritized within the current cycle if capacity allows
  - If cycle is near close and fix would extend it, Product Strategist decides:
    defer the feature or extend the cycle

Examples:
  Feature does not handle an important edge case, form validation incorrect,
  API returns wrong data for specific inputs
```

**P3 — Known Issue**

```
Definition:   A defect that is documented but not critical enough to block release
              or interrupt current cycle work.

Characteristics:
  - Low user impact (edge case, cosmetic issue, non-critical workflow)
  - Does not affect core user journeys
  - Can be tracked and resolved within the normal backlog process

Response:
  - Logged as a backlog item with P3 classification
  - Included in technical debt budget allocation discussions
  - Resolved in a future cycle based on priority and capacity

Examples:
  Minor UI misalignment in a specific browser, error message that could be clearer,
  performance issue affecting only a small percentage of users
```

### 6.2 Bug Flow Through the Board

Bugs are tasks. They follow the same Flow Board process as features, with one additional consideration: their entry point depends on their classification.

```
P1 bug flow:
  Detected → Expedite lane → In Progress (immediate) → Code Review → Validation → Done
  Parallel: Block Register entry, stakeholder communication, monitoring alert

P2 bug flow:
  Detected in Validation → Task card updated with bug details →
  Task returns to In Progress → Re-enters Validation after fix →
  Code Review of fix (or inline review for small changes) → Done

P3 bug flow:
  Detected → New bug task created in Backlog →
  Sized and prioritized during Backlog Grooming →
  Enters Ready when prioritized →
  Normal flow: Ready → In Progress → Code Review → Validation → Done
```

**Bug task card requirements:**

A bug task card must include:
- Steps to reproduce (exact, verifiable)
- Expected behavior
- Actual behavior
- Environment where bug was found (staging / production / specific browser or device)
- Screenshot or log excerpt if available
- Classification (P1 / P2 / P3)
- Discovery source (monitoring / user report / QA testing / code review)

Bug cards without reproduction steps are not ready to execute. They stay in Backlog until this information is available.

### 6.3 Bug Budget Per Cycle

GOAL teams should establish a bug budget — the maximum number of bugs that can be taken into a cycle from the backlog without disrupting goal achievement.

```
Bug budget framework:

Step 1: Review P1 history
  How many P1 bugs appeared in the last 3 cycles?
  Reserve Expedite lane capacity for P1 occurrence probability.

Step 2: Allocate P3 backlog resolution
  Include P3 bugs in the technical debt budget (typically 10–20% of cycle capacity).
  Do not let the P3 backlog grow unbounded — it eventually becomes a risk signal.

Step 3: Set an entry threshold
  If the number of P3 bugs entering a cycle exceeds a threshold that would
  consume more than the technical debt allocation, excess bugs are deferred.

  Example:
    Team capacity: 10 effective person-days per cycle
    Tech debt allocation: 20% = 2 person-days
    Average P3 bug fix time: 0.5 days
    Bug budget for cycle: 4 P3 bugs maximum

Step 4: Monitor and adjust
  If P3 backlog is growing despite bug budget allocation,
  this is a signal to increase the tech debt allocation or improve upstream quality.
```

### 6.4 Technical Debt Bugs vs Feature Bugs

Not all bugs are equal in origin or resolution path.

**Feature bugs** arise from incorrect implementation of a known requirement. They indicate a gap in the testing strategy, unclear acceptance criteria, or an implementation mistake. They are resolved by fixing the specific code.

**Technical debt bugs** arise from the accumulation of shortcuts, outdated code, missing tests, and architectural decisions that were "good enough at the time." These bugs are symptomatic — fixing the symptom (the specific bug) without addressing the underlying technical debt means the same type of bug will recur.

GOAL teams should distinguish between these two types:

- When a bug is filed, the developer assessing it should note whether it is a feature bug (fix the implementation) or a technical debt bug (fix the implementation AND create a tech debt task to address the root cause)
- Technical debt bugs should be linked to a tech debt task in the backlog
- The ratio of tech debt bugs to feature bugs is a signal about codebase health
- If tech debt bugs are consistently > 40% of total bugs, the codebase has a structural quality problem that requires dedicated technical debt work

---

## 7. Code Review Quality Standards

### 7.1 What a Good Code Review Looks Like in GOAL

Code review is not a formality. It is the primary quality gate before code reaches the staging environment. In GOAL, code review is one of the two columns between In Progress and Done (the other being Validation). A task can spend significant time here — and that is acceptable when reviews are substantive.

A good code review in GOAL addresses these dimensions:

**Correctness**
- Does the code do what the task's acceptance criteria require?
- Are edge cases handled?
- Are error conditions handled gracefully?
- Are there obvious bugs (null dereference, off-by-one errors, race conditions)?

**Test quality**
- Do the tests actually test the behavior, or do they just exercise code paths?
- Are the tests readable — can another developer understand what behavior they verify?
- Do the tests cover the edge cases that the implementation handles?
- Would a future change that breaks the behavior cause these tests to fail?

**Maintainability**
- Is the code understandable without extensive comments?
- Does it follow the team's established patterns and conventions?
- Will a developer unfamiliar with this code be able to modify it in 6 months?

**Security and performance** (as applicable)
- Does the change introduce security risks (injection, privilege escalation, data exposure)?
- Does the change introduce performance risks (N+1 queries, unbounded loops, missing indexes)?

**Technical debt**
- Does the change introduce new technical debt?
- If it does, is there a corresponding tech debt item in the backlog?

### 7.2 Review SLAs — How Long Can a PR Sit in Review

A pull request sitting in Code Review without being reviewed is pure wait time. It inflates flow time, blocks the task owner from starting new work, and often results in merge conflicts as the codebase changes around it.

GOAL establishes review SLAs as part of the team's quality standards:

```
Review SLA targets:

Small task PR (< 1 day of implementation):
  Target review time: 4 hours from submission
  Maximum: same business day

Medium task PR (2–3 days of implementation):
  Target review time: next business day
  Maximum: 48 hours from submission

Large task PR (requires split — should rarely occur, but may happen):
  Target review time: 48 hours
  Maximum: 72 hours

Emergency / P1 bug fix:
  Target review time: 1 hour
  This is a shared team obligation — reviewing an emergency fix takes priority
  over all non-emergency In Progress work

If a PR exceeds its SLA:
  - Flow Master identifies it as an aging item during the Daily Flow Sync
  - The reviewer is contacted directly (this is not a passive observation)
  - If the reviewer is overloaded, another team member takes the review
  - Review SLA violations are tracked and discussed in retrospectives
```

**On review queue buildup:**

If the Code Review column consistently backs up, it is a flow problem. Common causes:
- WIP limits are not being enforced (too much new work starting before old work is reviewed)
- The team does not treat reviewing as core work (they prioritize starting over finishing)
- Reviews take too long because the PRs are too large (split tasks better)

### 7.3 Author and Reviewer Responsibilities

**Author responsibilities:**

- Write a clear PR description: what does this change do, why, and how?
- Link the PR to the task card on the Flow Board
- Highlight areas where the author is uncertain and wants specific feedback
- Keep PRs small — a PR that implements one task should be reviewable in 30–60 minutes
- Respond to review comments promptly (within the same business day)
- Do not merge until all review comments are resolved (not just acknowledged)

**Reviewer responsibilities:**

- Review within the SLA — treat it as obligatory, not optional
- Distinguish blocking comments (must be fixed before merge) from suggestions (non-blocking)
- Explain the "why" behind blocking feedback — comments like "change this" without rationale create confusion and slow down resolution
- Approve only when genuinely satisfied — approving to be polite undermines the quality gate
- If the review reveals a fundamental problem (wrong approach, missing requirements), escalate to a synchronous discussion rather than running an async comment thread

### 7.4 Automated Review vs Human Review Split

Automation handles the mechanical quality checks. Humans focus on the judgment-dependent ones.

```
What automated tools check (CI pipeline, linters, automated scanners):
  - Code style and formatting (linters)
  - Static analysis (potential null dereferences, unreachable code, common mistakes)
  - Test pass/fail
  - Coverage regression detection
  - Dependency vulnerability scanning
  - Secret detection (ensure no credentials committed)

These checks run automatically on every PR and must pass before human review begins.
If automated checks fail, the PR is not ready for human review.

What human reviewers check:
  - Logic correctness
  - Test meaningfulness
  - Design and architectural decisions
  - Clarity and maintainability
  - Business rule implementation
  - Security implications that require understanding context
  - All the dimensions described in Section 7.1

The goal of this split:
  Humans should spend their review time on things that require human judgment.
  Enforcing that a line ends without a trailing semicolon is not a good use of
  a developer's attention. Automated tools do that faster and more consistently.
```

---

## 8. Quality Retrospective Analysis

### 8.1 Which Quality Metrics Go Into the Retrospective

GOAL's Data-Driven Retrospective already reviews flow metrics. Quality metrics are a layer added to that review. Each retrospective should include a brief quality metrics summary alongside the flow metrics.

**Quality metrics reviewed each retrospective:**

```
1. Bug escape rate (current cycle vs previous cycle vs 3-cycle trend)
2. Defect density (bugs per feature delivered this cycle)
3. Change failure rate (deployments that caused production failures)
4. Rework rate (tasks that returned to In Progress)
5. P1 incidents this cycle (count, total resolution time, MTTR)
6. Code review SLA compliance (percentage of PRs reviewed within SLA)
7. Test coverage trend (regression or improvement from last cycle)
```

**Format for quality section of retrospective:**

The quality section should take no more than 10 minutes in a standard retrospective. If a quality metric shows a significant change (&gt;10% movement in escape rate, a P1 incident, or a coverage regression), it warrants a dedicated root cause discussion (see Section 8.2).

### 8.2 Root Cause Analysis for Escaped Defects

When a bug escapes to production (P1 or high-impact P2), a root cause analysis (RCA) is performed. This is not a blame exercise. It is a system analysis.

**GOAL's RCA framework for escaped defects:**

```
RCA trigger:
  - Any P1 production bug
  - Any P2 bug that would have reached production without being caught
  - Any cycle where bug escape rate exceeds 15%

RCA questions:

1. Where in the process was this bug introduced?
   (Which task, which cycle, which code change)

2. Why was it not caught at each quality gate?
   - Was there a unit test that should have caught it? (Missing test)
   - Was there an integration test that should have caught it? (Missing test)
   - Was it reviewed and the reviewer missed it? (Review quality issue)
   - Was it validated in staging and the validator missed it? (Validation process issue)
   - Was the acceptance criterion ambiguous? (Specification issue)

3. Is this bug type specific to this instance, or is it a category?
   (One-time mistake vs. systemic gap in testing strategy)

4. What structural change would prevent this category of bug?
   (New test type, additional DoD criterion, process change, training)

5. What is the action item, who owns it, and when is it implemented?

RCA output format:
  One-paragraph summary + one action item with owner and due date.
  This goes into the retrospective record and is reviewed in the next retrospective.
```

### 8.3 Quality Trend Tracking Across Cycles

Quality does not improve from single-cycle analysis. Trends appear over 3–5 cycles. GOAL teams maintain a simple quality trend log alongside the Cycle Accuracy Index.

```
Quality Trend Log format (tracked per cycle):

| Cycle | Bug Escape Rate | Defect Density | Change Failure Rate | Rework Rate | P1 Count |
|-------|-----------------|----------------|---------------------|-------------|----------|
| C-1   | 12%             | 1.2 bugs/feat  | 8%                  | 7%          | 1        |
| C-2   | 9%              | 0.9 bugs/feat  | 5%                  | 6%          | 0        |
| C-3   | 14%             | 1.5 bugs/feat  | 10%                 | 9%          | 2        |
| C-4   | ...             | ...            | ...                 | ...         | ...      |

Reading the trend:
  An upward trend in defect density over 2+ cycles = testing strategy is not keeping pace
  with feature delivery rate. Review the test pyramid allocation.

  Consistent P1 count > 0 = architectural or monitoring problem.
  Root causes should be converging toward structural fixes, not just individual bug fixes.

  Rework rate increasing = task definition quality is degrading.
  Acceptance criteria may be getting less precise as the team moves faster.
  Review Smart Planning discipline.
```

---

## 9. QA Role in GOAL Teams

### 9.1 Where QA Engineers Fit in the Delivery Team

GOAL defines the Delivery Team as self-organized engineers responsible for execution. QA engineers are members of the Delivery Team, not a separate downstream function.

This is an important structural point. In many organizations, QA is a separate department that receives work from development and "tests it." In GOAL, this model creates the "tested-in quality" anti-pattern — QA becomes a buffer for developer quality, and the entire flow slows down because one column (Validation) is a bottleneck controlled by a separate team.

**The GOAL model for QA:**

```
QA engineers in GOAL:
  - Are embedded in the Delivery Team
  - Participate in Smart Planning, Backlog Grooming, and Daily Flow Sync
  - Own the acceptance test strategy for each goal
  - Collaborate with developers during implementation, not just at the end
  - Focus on test automation, not just manual testing
  - Are responsible for test environment health
  - Bring quality risk perspective to goal feasibility discussions

What QA engineers do NOT do in GOAL:
  - Act as the sole quality gate (quality is everyone's responsibility)
  - Receive work from developers as a handoff (they collaborate throughout)
  - Own the DoD by themselves (the whole team owns it)
  - Maintain a separate bug tracking system outside the Flow Board
```

### 9.2 Shift-Left Testing Integration

"Shift left" means moving testing activities earlier in the development process — to the left of the timeline. GOAL's structure naturally enables shift-left testing because QA is involved from planning, not from validation.

**What shift-left looks like in a GOAL cycle:**

```
Smart Planning (leftmost point):
  QA reviews acceptance criteria for testability
  QA identifies test environment requirements
  QA drafts acceptance test cases from acceptance criteria
  QA flags ambiguous criteria before implementation begins

In Progress (development phase):
  QA is available to answer questions about expected behavior
  QA reviews test approach for new features
  QA may pair with developers on integration or E2E test setup
  QA monitors CI test health continuously

Code Review:
  QA is one of the reviewers (in teams where this is practical)
  QA focuses on: are the tests meaningful? Do they cover the acceptance criteria?

Validation:
  QA executes the acceptance tests prepared during Smart Planning
  QA performs exploratory testing around the feature
  QA confirms the DoD is satisfied
```

The practical effect: bugs found during Smart Planning cost nothing to fix (the acceptance criterion is clarified). Bugs found during development cost one developer's attention. Bugs found in Validation cost rework. Bugs found in production cost rework plus user impact plus incident response. Shift-left is purely an economic optimization.

### 9.3 QA Involvement in Smart Planning and Backlog Grooming

**Smart Planning:**

QA should attend all Smart Planning sessions. Their specific contributions:
- Flag acceptance criteria that are not testable as written ("The feature should be fast" is not testable; "The feature should respond in &lt; 2 seconds at p95" is)
- Estimate the testing effort required for each goal (this input feeds capacity planning)
- Identify test environment or test data dependencies that could block the Validation column
- Propose whether specific scenarios require manual validation vs can be automated

**Backlog Grooming:**

QA participates in Backlog Grooming to ensure items in the Ready state have testable acceptance criteria. A backlog item with criteria that QA cannot translate into concrete test cases is not truly ready. QA's grooming checklist:

```
For each backlog item during grooming, QA confirms:
  □ Can I write at least one concrete test case from each acceptance criterion?
  □ Do I know what the expected behavior is for common error cases?
  □ Is there test data available (or can I create it) to test this item?
  □ Is there a test environment where I can validate this item?
  □ Do I understand the scope boundary — what is in this task vs what is not?
```

---

## 10. Quality Anti-Patterns

Anti-patterns are patterns that appear reasonable but consistently produce bad outcomes. Quality anti-patterns in GOAL teams are worth naming explicitly because they are easy to fall into, especially under delivery pressure.

### 10.1 "We'll Test It Later"

**What it looks like:**

"Let's ship this now and add tests in the next cycle." "We're in a rush — skip the unit tests for this one." "We'll add that to the tech debt backlog and test it properly later."

**Why it happens:**

Short-term delivery pressure. It feels like skipping tests saves time now. The DoD may not be enforced consistently.

**Why it fails:**

"Later" almost never happens. The next cycle has its own goals. The technical debt backlog grows. Tests are never written. The untested code gets built upon. Six months later, nobody knows how this code works or how to safely change it. Every bug in that code now takes three times as long to fix because there is no test harness.

**GOAL response:**

The DoD is enforced without exceptions. A task without tests does not move to Done. The Flow Master is responsible for catching DoD violations at the Daily Flow Sync. If skipping tests is consistently tempting, the issue is capacity planning — the team is committing to more goals than they can achieve with quality. That is a Smart Planning failure, not a testing failure.

### 10.2 Test Theater

**What it looks like:**

Tests exist. They pass. Coverage reports look good. But the tests do not actually catch bugs. They test that code runs, not that it does the right thing. Test names like `test_function_runs_without_error` or tests that test the implementation's internals rather than its observable behavior.

**Why it happens:**

Teams under coverage percentage pressure write tests to satisfy the metric, not to verify behavior. Developers who were told "write more tests" but not why or how write superficial tests. Test coverage becomes a goal in itself rather than a means to quality.

**Why it fails:**

Test theater is the worst of both worlds. It provides false confidence (the tests pass, so we think we're covered), consumes maintenance time (tests that test implementation break when implementation is refactored, even when behavior is unchanged), and still lets bugs escape.

**GOAL response:**

Quality metrics focus on bug escape rate and defect density, not coverage percentage alone. During code review, reviewers evaluate whether tests are meaningful — "does this test verify behavior, or does it just exercise code?" Cover the "what" (behavior), not the "how" (implementation). Test review is a skill — develop it through pair review and retrospective discussion of test quality examples.

### 10.3 Manual-Only Testing as a Bottleneck

**What it looks like:**

The Validation column is always backed up. QA is the slowest step in the flow. The team can only release when QA has finished manually testing each feature. Any change, even a small one, requires a full regression cycle. Delivery rate drops when QA is unavailable.

**Why it happens:**

The testing strategy is based primarily on manual testing. Automated tests are not trusted (possibly because they are test theater). The team has not invested in test automation. QA headcount has not scaled with feature delivery rate.

**Why it fails:**

Manual testing is linear — it takes roughly the same time regardless of how fast the development side moves. As a team's velocity increases, manual-only testing becomes an increasingly severe bottleneck. It also makes continuous delivery (a GOAL principle) impossible — you cannot deploy continuously if each deployment requires hours of manual validation.

**GOAL response:**

Automated tests are mandatory (DoD). The test pyramid determines what automated tests exist at each layer. Manual testing in the Validation column is for exploratory testing and final acceptance validation of automated test coverage gaps — not as a full regression substitute. If the Validation column is consistently the longest wait time in the flow (visible in flow efficiency metrics), this is the bottleneck to address. Invest in test automation as a tech debt priority.

### 10.4 Validation Column as a Dumping Ground

**What it looks like:**

Tasks move to Validation before they are ready. QA finds them broken, half-built, or missing test cases. QA spends time figuring out what to test because acceptance criteria are unclear. Tasks bounce back and forth between Validation and In Progress repeatedly. QA time is wasted on environmental issues that the developer should have caught before handoff.

**Why it happens:**

Teams treat Validation as "QA's problem." Developers hand off work too early to clear their WIP. There is no Definition of Ready for QA. The DoD is not enforced at the Code Review stage.

**Why it fails:**

It creates exactly the adversarial development-QA dynamic that GOAL's quality philosophy is designed to prevent. QA time is wasted, rework rate increases, cycle time inflates, and QA engineers get demoralized by spending their time on work that was not ready to be tested.

**GOAL response:**

The Definition of Ready for QA (Section 4) is enforced as strictly as the DoD. A task that does not meet the DRfQ does not enter the Validation column — it stays in Code Review or returns to In Progress. The Flow Master monitors Validation column health during the Daily Flow Sync. High rework rate from Validation is flagged as a quality anti-pattern in the retrospective, with root cause analysis.

---

## Summary: Quality in GOAL at a Glance

| Dimension | GOAL approach |
|-----------|---------------|
| Quality ownership | Whole team — not QA alone |
| When quality work begins | Smart Planning — not after implementation |
| Test writing timing | During implementation — not after Done |
| QA position | Embedded in Delivery Team — not a separate gate |
| Quality measurement | Bug escape rate, defect density, MTTD/MTTR, change failure rate, rework rate |
| Testing strategy | Pyramid-based: mostly unit, some integration, few E2E |
| Bug classification | P1 (production) / P2 (pre-release) / P3 (known issue) |
| Code review | Time-bounded SLAs + defined author/reviewer responsibilities |
| Retrospective input | Quality trend log reviewed every cycle |
| Anti-patterns to avoid | Test later, test theater, manual-only bottleneck, Validation dumping ground |

---

*This document is part of the GOAL Agile Methodology documentation suite. Refer to GOAL_Methodology_v0.2.md for core framework definitions. Refer to GOAL_Capacity_Planning.md for how quality work fits into capacity calculations.*
