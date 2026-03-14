---
id: value-framework
title: 3-Layer Value Framework
sidebar_position: 2
description: The GOAL 3-Layer Value Framework — defining Business Value, User Value, and Technical Value with examples and application guidance.
---

# 3-Layer Value Framework

## Why Value Must Be Defined

"Value delivered" is one of the most common phrases in agile frameworks and one of the least defined. If the Product Strategist is measured on "value delivered per cycle" but value is not defined, the metric is meaningless or gameable.

GOAL uses a 3-layer framework to make value **concrete and measurable**.

---

## The Three Layers

### Layer 1 — Business Value

Work delivers Business Value when it directly affects the organization's key performance indicators.

```
Business Value indicators:

☐ Directly increases revenue
  Example: new payment method added, removing friction that was causing drop-off

☐ Reduces customer churn
  Example: fixing a bug that was causing users to leave, improving onboarding conversion

☐ Reduces operational cost
  Example: automating a manual process, reducing infrastructure cost per request

☐ Satisfies a legal, compliance, or contractual requirement
  Example: GDPR data deletion feature, SLA-required uptime improvement

☐ Unblocks another team or dependency
  Example: publishing an API that a partner team is waiting for

☐ Improves retention or engagement metrics
  Example: feature that increases daily active users, reduces time-to-first-value
```

---

### Layer 2 — User Value

Work delivers User Value when it improves the direct experience of the product's users.

```
User Value indicators:

☐ Resolves a problem users have reported
  Example: fixing a workflow that users consistently find confusing

☐ Reduces friction in an existing flow
  Example: reducing the number of steps to complete a common action

☐ Adds capability users did not previously have
  Example: export to CSV, dark mode, bulk actions

☐ Improves visible performance
  Example: page load time reduction that users notice, faster search results

☐ Reduces error rates users encounter
  Example: better validation preventing common form submission errors
```

---

### Layer 3 — Technical Value

Work delivers Technical Value when it improves the team's ability to deliver faster and more reliably in the future.

```
Technical Value indicators:

☐ Reduces the probability of future bugs
  Example: adding test coverage to an untested critical path

☐ Reduces onboarding time for new developers
  Example: improving code documentation, simplifying a complex module

☐ Improves future delivery speed
  Example: refactoring a module that was slowing every related feature

☐ Reduces infrastructure cost
  Example: optimizing a database query that was causing expensive full scans

☐ Reduces incident probability
  Example: improving error handling in a failure-prone integration
```

---

## How to Apply the Value Framework

### At Smart Planning

The Product Strategist tags each goal with its value layers before the cycle begins:

```
Goal: Implement Google OAuth login
  Layer 1 Business Value: reduces sign-up friction → expected to improve conversion rate
  Layer 2 User Value:     users can log in without creating a new password
  Layer 3 Technical Value: none (new feature, no existing code improved)

Goal: Refactor authentication middleware
  Layer 1 Business Value: none (internal improvement)
  Layer 2 User Value:     faster login response time (indirect)
  Layer 3 Technical Value: reduces auth-related bug probability, simplifies future
                           OAuth additions
```

---

### At Goal Review

The Product Strategist records evidence of value delivery:

```
Goal: Implement Google OAuth login
  Completed: Yes
  Value evidence:
    Layer 1: Sign-up conversion rate increased from 34% to 41% in first week
    Layer 2: 23% of new users chose Google login in first week
    Layer 3: N/A
  Value confirmed: Yes

Goal: Refactor authentication middleware
  Completed: Yes
  Value evidence:
    Layer 1: N/A
    Layer 2: Login response time reduced from 800ms avg to 120ms avg
    Layer 3: Auth-related bug count in previous 3 cycles: 4. Expected reduction tracked.
  Value confirmed: Partial (Layer 3 measurement pending — 2 cycles)
```

---

## When Value Cannot Be Measured Immediately

Some value takes time to manifest. In this case, the Goal Review records:
- An expected measurement date
- What data will be collected
- Who is responsible for measuring

The outcome is tracked in the following retrospective.

---

## When Work Has No Layer

If a proposed goal cannot be tagged to any layer of the framework, that is a signal to question whether it should be prioritized. Not a veto — but a prompt for the Product Strategist to articulate the value explicitly.

**Questions to ask:**
- "What would be worse if we did not do this?"
- "Who benefits, and how do they benefit?"
- "Can we measure whether this made a difference?"

If the goal cannot be connected to any layer after these questions, it is likely a low-value or no-value activity.

---

## Value Framework and Backlog Prioritization

The 3-Layer Value Framework is the primary tool for backlog prioritization:

| Priority | Rule |
|----------|------|
| Highest | Multiple layers + strong evidence | Anything that hits all three layers with measurable indicators |
| High | Layer 1 (Business Value) + evidence | Direct KPI impact |
| Medium | Layer 2 (User Value) + evidence | Clear user benefit |
| Lower | Layer 3 only (Technical Value) | Protected by 10–20% cycle allocation |

Items that cannot be connected to any layer go to the bottom of the backlog, pending clarification.

---

## Reporting Value to Stakeholders

The Goal Review is a stakeholder-facing event. The 3-Layer Value Framework gives the Product Strategist a structured way to report:

1. **What was built** — the goal description
2. **Why it matters** — the value layer(s) it addresses
3. **Evidence** — the concrete measurement

This replaces informal "we built X and Y" reports with evidence-based value demonstrations. Stakeholders can evaluate whether the team's work is aligned with business priorities.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
