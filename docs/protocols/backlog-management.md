---
id: backlog-management
title: Backlog Management
sidebar_position: 3
description: How the GOAL backlog works — item states, readiness criteria, acceptance criteria format, and health standards.
---

# Backlog Management

The backlog is a prioritized list of all future work, organized by value and readiness. It is a living document that reflects the current understanding of what the team should build.

---

## The Backlog in GOAL

The backlog is **not**:
- A wish list of every idea anyone has ever had
- A fixed list that never changes
- A Sprint backlog (in Scrum terms) — GOAL does not have a Sprint backlog
- A permanent commitment to build everything listed

The backlog is a **working instrument** — the next 2–3 cycles of planned work, kept healthy and ready-to-execute.

---

## Backlog Item States

```
Discovery → Refinement → Ready → Cycle → Done / Archive

Discovery:   Item exists but is not yet defined enough to be estimated or executed
             (an idea, a request, a captured user problem)

Refinement:  Item is being analyzed; acceptance criteria are being written
             (Product Strategist is clarifying scope with stakeholders)

Ready:       Item meets the ready-to-execute definition
             (has outcome description + acceptance criteria + size + no blocking deps)

Cycle:       Item is part of an active Goal Cycle
             (has been committed to in Smart Planning)

Done:        Item has been completed and meets the DoD
             (all acceptance criteria + full DoD satisfied)

Archive:     Item was removed because it is no longer relevant
             (superseded, cancelled, deprioritized indefinitely)
```

Only items in **Ready** state can enter a Goal Cycle.

---

## Ready-to-Execute Definition

A backlog item is ready to execute when it has **all four** of the following:

1. **A clear description of the outcome** — what will be true after this item is delivered
2. **Acceptance criteria** — specific, testable conditions that define "done" for this item
3. **A size estimate** — Small, Medium, or Large based on expected delivery time
4. **No unresolved dependencies** blocking its start

Any item missing one of these four cannot enter the Ready column.

---

## Acceptance Criteria Format

Every backlog item must have acceptance criteria written before it can enter the Ready state. GOAL recommends the **Given/When/Then** format:

```
Format:
  Given [initial context or precondition]
  When  [action is performed]
  Then  [expected outcome]

Example — user login:
  Given the user has a valid registered account
  When  the user enters their email and password and clicks "Login"
  Then  the user is authenticated and redirected to the dashboard within 2 seconds

Example — API endpoint:
  Given a valid authentication token in the request header
  When  a GET request is made to /api/users/{id}
  Then  the response returns status 200 with the user object in JSON format
  And   the response time is under 300ms

Example — bug fix:
  Given the user is on the account settings page
  When  the user changes their display name and clicks Save
  Then  the new name is displayed immediately without a page reload
  And   the new name persists after page refresh
```

Multiple acceptance criteria per item are allowed. All must pass for the item to be considered Done.

---

## Backlog Health Standards

The backlog is considered **healthy** when:

1. At least **two Goal Cycles worth** of ready-to-execute items exist
2. All ready items have **complete acceptance criteria**
3. All ready items have **a size estimate**
4. No ready items have **unresolved blocking dependencies**

If the backlog drops below this standard:
- The Product Strategist prioritizes grooming over other work until health is restored
- Smart Planning cannot proceed until the backlog is healthy
- A backlog health emergency is a Product Strategist responsibility to resolve

---

## Backlog Prioritization

The Product Strategist is responsible for backlog priority order. Priority criteria in GOAL are connected to the 3-Layer Value Framework:

- **Business Value** items (direct revenue, compliance, churn reduction) take priority over User or Technical Value items
- **User Value** items (friction reduction, capability additions) take priority over Technical Value items when business value is equal
- **Technical Value** items (debt reduction, platform improvements) are protected through the 10–20% cycle allocation

The product roadmap drives the order; the backlog reflects the next 2–3 cycles of execution.

---

## Backlog Anti-Patterns

**The infinite backlog:** 200+ items that will never be worked on. Archive aggressively. A backlog item that has been deprioritized for 6 months should be archived unless it has been recently re-evaluated.

**The task-list backlog:** Backlog items that describe implementation steps ("Add index to users table") rather than outcomes ("User search completes in under 500ms"). Backlog items should be outcomes; tasks emerge during execution.

**The ungrown backlog:** Items at the top of the backlog without acceptance criteria. Smart Planning blocks on these. Run the Backlog Grooming Session weekly to prevent this.

**The frozen backlog:** A backlog that never changes because the Product Strategist doesn't update priorities based on new information. The backlog should reflect current strategic reality, not a plan made six months ago.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
