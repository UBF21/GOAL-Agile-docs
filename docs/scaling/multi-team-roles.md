---
id: multi-team-roles
title: Program-Level Roles
sidebar_position: 2
description: The Program Flow Master and Program Strategist roles in GOAL — responsibilities, authority, and boundaries.
---

# Program-Level Roles

Two roles are introduced at the program level. These roles coordinate across teams — they do not replace any single-team role.

---

## Program Flow Master

### What This Role Is

The Program Flow Master is responsible for the health of work flowing **across team boundaries**. They do not manage individual teams' internal flow — each team retains its own Flow Master for that. The Program Flow Master's domain is the space between teams.

### Core Responsibilities

- Maintain and review the Dependency Register daily
- Facilitate the Program Sync event at the start of each cycle
- Facilitate the Cross-Team Dependency Review (twice per week)
- Escalate cross-team blockers that are not resolved within 24 hours
- Track and report Program-level metrics
- Coordinate cycle alignment across teams — ensure all teams are running compatible cycle structures
- Identify recurring cross-team anti-patterns and surface them in the Program Retrospective
- Coordinate the Expedite lane across teams if an Expedite item in one team creates a dependency in another

### Authority

- **Can:** Escalate blockers to Product Strategists and program leadership
- **Can:** Declare a Cross-Team Blocker State — a formal flag that halts new cross-team dependency creation until existing ones are resolved
- **Cannot:** Change team goals
- **Cannot:** Reassign team members
- **Cannot:** Override individual team WIP limits

### Who Holds This Role

**Tier 2 (2–3 teams):** Typically held by the most experienced Flow Master among the participating teams, in addition to their team responsibilities.

**Tier 3 (4–8 teams):** A dedicated full-time role.

### Success Metric

Cross-Team Block Rate below 15% across the program, and average cross-team dependency resolution time under 2 working days.

---

## Program Strategist

### What This Role Is

The Program Strategist is responsible for the **strategic alignment of goals across teams**. They define program-level outcomes that individual teams then translate into team-level goals in their own cycles.

### Core Responsibilities

- Define Program Goals — high-level outcomes that span multiple teams and multiple cycles
- Ensure each team's Goal Cycle Plan contributes to at least one Program Goal
- Prioritize cross-team dependencies when conflicts arise (which team's need takes precedence)
- Coordinate shared backlog items — work that cannot be owned by a single team
- Run the Program Retrospective
- Report program-level value delivery to organizational stakeholders using the 3-Layer Value Framework at the program scale
- Maintain the Cross-Team Cycle Plan

### Authority

- **Can:** Override individual Product Strategist priority decisions when a cross-team dependency conflict arises (must document the rationale)
- **Cannot:** Change individual team goals mid-cycle — changes follow the same Goal Stability Rule that applies at the team level
- **Cannot:** Decompose Program Goals into tasks — that remains the responsibility of each team's Product Strategist

### Relationship with Product Strategists

The Program Strategist sets direction. Product Strategists translate that direction into executable team-level goals.

A Program Strategist who starts writing acceptance criteria or task lists for individual teams is violating the role boundary. Direction is the Program Strategist's responsibility; execution is the team's.

### Success Metric

Percentage of Program Goals completed on time, and reduction in cross-team dependency-driven cycle extensions over successive program cycles.

---

## Role Interaction at Program Level

| Event | Program Flow Master | Program Strategist | Team Flow Masters | Team Product Strategists |
|-------|--------------------|--------------------|-------------------|--------------------------|
| Program Sync | Facilitates | Confirms program goals | Declare team goals | Declare team goals |
| Cross-Team Dependency Review | Facilitates | Joins if needed | Provide status | Optional |
| Program Retrospective | Facilitates | Participates | Participate | Participate |
| Daily (between events) | Monitors Dependency Register | Available for escalations | Manage team boards | Manage backlogs |

---

## What Program Roles Are NOT

**The Program Flow Master is not a super-Flow Master.** They do not have authority over individual teams' internal processes, WIP limits, or flow decisions. Their authority is limited to cross-team coordination.

**The Program Strategist is not a super-Product Owner.** They do not manage the detailed content of individual team backlogs. They set program-level outcomes and resolve cross-team priority conflicts.

Adding program-level authority to override individual teams should be rare, documented, and justified. The goal of the program structure is to facilitate coordination, not to impose centralized control.

---

*GOAL Agile Methodology v0.2 | Author: Felipe Montenegro*
