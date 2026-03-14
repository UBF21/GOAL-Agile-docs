---
id: scaling-overview
title: Scaling GOAL
sidebar_position: 1
description: How GOAL scales from single teams to multi-team programs — tiers, when to scale, and decision framework.
---

# Scaling GOAL

GOAL is designed with single teams as its primary unit. This section defines how the framework extends to multi-team environments, what new structures are required, and where the current version's honest limits are.

---

## GOAL Scaling Levels

GOAL defines three scaling tiers based on the number of teams operating on the same product or platform. Each tier introduces additional coordination needs without replacing the single-team mechanics.

| Tier | Teams | Label | What Changes |
|------|-------|-------|--------------|
| **Tier 1** | 1 team (2–12 people) | **Single Team GOAL** | No changes — base framework applies fully |
| **Tier 2** | 2–3 teams | **Multi-Team GOAL** | Program-level coordination layer added |
| **Tier 3** | 4–8 teams | **Program GOAL** | Full program board, dedicated program roles, formal dependency registry |

### Teams Beyond 8

GOAL v0.2 does not prescribe a model for more than 8 teams operating on a shared product. At that scale, the coordination cost between teams becomes the dominant engineering challenge — exceeding what GOAL's current event and artifact model can address.

Organizations at that scale should evaluate whether SAFe, LeSS, or a customized program management approach better fits their needs, potentially retaining GOAL at the individual team level.

---

## When to Scale

Not every organization with multiple teams needs a scaling framework. The question is whether teams have **meaningful interdependencies** that affect delivery.

### Decision Tree — Should You Introduce Program-Level GOAL?

```
Do you have 2+ teams working on the same product or shared platform?
├── No → Single Team GOAL is sufficient. Stop here.
└── Yes
    ↓
Do tasks from one team regularly block tasks in another team
(more than once per cycle)?
├── No → Lightweight coordination only (weekly Flow Master sync).
│         No formal Program GOAL needed yet.
└── Yes
    ↓
Do those cross-team dependencies affect the delivery of primary goals
in either team?
├── No → Add Dependency markers to Flow Boards. Review in
│         inter-team sync. Monitor for escalation.
└── Yes → Introduce Multi-Team GOAL (Tier 2 or Tier 3
          depending on team count).
```

### Signal to Move from Tier 2 to Tier 3

Move to Tier 3 (Program GOAL) when Tier 2 coordination itself becomes a bottleneck:
- The weekly sync takes more than 30 minutes
- The Dependency Register has more than 8 open items at cycle start
- Cross-team block rate exceeds 25% per cycle

---

## Tier 2: Multi-Team GOAL

Tier 2 adds the minimum program-level structure for 2–3 teams:

**New elements at Tier 2:**
- **Program Flow Master** (typically the most experienced team Flow Master, part-time role)
- **Weekly Cross-Team Dependency Review** (15–20 minutes)
- **Dependency Register** (shared log of cross-team dependencies)
- **Program Board** (simple visual of all team goals and dependencies)

Single-team GOAL remains unchanged inside each team.

---

## Tier 3: Program GOAL

Tier 3 adds full program-level infrastructure for 4–8 teams:

**New elements at Tier 3:**
- **Dedicated Program Flow Master** (full-time role)
- **Program Strategist** (dedicated program-level role)
- **Program Sync** (once per cycle at cycle start)
- **Cross-Team Dependency Review** (twice per week)
- **Program Retrospective** (once per program cycle)
- **Cross-Team Cycle Plan** (program-level planning document)
- **Dependency Register** (full structured register with escalation paths)
- **Program Board** (full visual with dependency connectors)

---

## Scaling Principles

**Single-team GOAL is never modified when scaling.** Each team continues to run its own Goal Cycles, Flow Board, WIP limits, and events. Scaling adds coordination between teams — it does not change how individual teams work.

**Coordination costs are explicit.** Every scaling event and artifact exists to manage a specific coordination need. If a coordination structure adds overhead without reducing cross-team friction, it should be removed.

**Dependencies drive the need for scaling.** The presence of multiple teams is not sufficient reason to add program structures. Only actual interdependencies that affect goal delivery justify the coordination overhead.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
