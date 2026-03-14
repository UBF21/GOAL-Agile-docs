---
id: continuous-delivery
title: Continuous Delivery Model
sidebar_position: 8
description: GOAL's continuous delivery model — small batch rules, trunk-based development, and integration principles.
---

# Continuous Delivery Model

GOAL enforces a small-batch delivery model. Work should be integrated and delivered frequently, not accumulated and released in large batches.

---

## The Continuous Delivery Principle in GOAL

**Why small batches matter:**

Large merges and long-lived branches are one of the primary sources of integration problems in software. When a developer works on a feature branch for two weeks and then merges, they are merging against a codebase that has changed significantly since they started. This creates conflicts, regressions, and review overhead.

Small batches reduce risk per change and provide faster feedback.

---

## Continuous Delivery Rules in GOAL

### Rule 1 — No Large Merges

A pull request should represent a coherent unit of change, not a week's worth of accumulated work.

**Target:** Pull requests reviewable in under 30 minutes.

A pull request that takes 2 hours to review is too large. It creates review fatigue, increases error probability, and creates a context-switching burden for reviewers.

### Rule 2 — No Long-Lived Branches

Feature branches should not exist for more than **3 days**.

If a feature requires more than 3 days, use one of these strategies to merge incomplete work safely:
- **Feature flags** — merge the code behind a flag that is off in production until the feature is complete
- **Branch by abstraction** — introduce an abstraction layer first, then implement behind it

Long-lived branches are a WIP violation at the code level. The same principles that apply to task WIP apply to code integration.

### Rule 3 — Frequent Integration

Every completed task should be integrated to the main branch as soon as it meets the DoD.

- Not batched by end of cycle
- Not held for a "release day"
- Not waiting for related tasks to complete

If the task is done, it integrates. This rule requires a reliable CI/CD pipeline — see the [Tooling Integration Guide](../guides/tooling-integration) for pipeline configuration.

### Rule 4 — Trunk-Based Development Preferred

Teams are encouraged to adopt trunk-based development: all developers integrate to a single main branch at least once per day.

Feature flags are used to hide incomplete functionality from users while keeping the codebase in an always-releasable state.

**Benefits of trunk-based development in GOAL:**
- Flow metrics are more accurate (no hidden branch work)
- Code review is faster (smaller, more frequent PRs)
- Integration conflicts are caught and resolved daily, not in large painful merges
- The Flow Board accurately reflects work state

---

## How Continuous Delivery Connects to GOAL Metrics

Continuous delivery practices directly improve GOAL's core flow metrics:

| Practice | Metric it improves |
|----------|--------------------|
| Small pull requests | Cycle Time (code review completes faster) |
| Frequent integration | Flow Efficiency (less time in Code Review queue) |
| Trunk-based development | Block Rate (fewer integration-related blockers) |
| Feature flags | Delivery Rate (work can be merged without waiting for feature completion) |

When a team's Flow Efficiency is below 15%, one of the first places to investigate is the Code Review column. Long-lived branches and large PRs are a common root cause.

---

## Continuous Delivery and the Definition of Done

GOAL's Level 1 DoD requires:
- Code merged to the main/trunk branch
- All automated tests pass
- Validated in staging/QA environment

These three criteria are only achievable with a continuous delivery pipeline. Teams implementing GOAL should prioritize their CI/CD infrastructure early — it is not optional for the DoD to be meaningful.

**Minimum CI/CD requirements for GOAL:**
- Automated test suite that runs on every push
- Staging/QA environment that mirrors production
- Deployment process that does not require more than 1 hour to release to staging

---

## Continuous Delivery and the Flow Board

The Flow Board's Code Review and Validation columns are the visual representation of the integration pipeline. Healthy flow through these columns requires:

1. **Code Review column:** PRs that are reviewable in under 30 minutes (small batch rule)
2. **Validation column:** A staging environment that is reliably available and reflects the current main branch
3. **Done column:** Deployment to production (or staging, depending on team's release model) is part of the DoD

When these columns back up — many tasks stuck in Code Review, Validation taking days — the continuous delivery rules have broken down. The retrospective should investigate.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
