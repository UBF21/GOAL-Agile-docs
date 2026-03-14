---
id: workflow-diagrams
title: Workflow Diagrams
sidebar_position: 3
description: All GOAL workflow diagrams in Mermaid format — Goal Cycle, Task State Machine, Interrupt Protocol, Blocked Task Escalation, and more.
---

# GOAL Workflow Diagrams

All diagrams are in Mermaid format and render natively in Docusaurus.

---

## 1. Goal Cycle Lifecycle Diagram

This diagram shows the complete state machine of a GOAL Goal Cycle, from initiation through all possible closure paths.

```mermaid
stateDiagram-v2
    [*] --> Planning : New cycle triggered

    Planning --> Active : Smart Planning Session complete\nGoals defined, WIP limit set

    Active --> InProgress : Daily work begins\nDelivery Team pulls tasks

    InProgress --> GoalReview : All primary goals completed

    GoalReview --> EarlyClosure : Goals completed\nBEFORE estimated end date

    GoalReview --> NormalClosure : Goals completed\nON estimated end date

    GoalReview --> ExtensionRequired : Goals NOT completed\nby estimated end date

    ExtensionRequired --> ExtendedActive : Extension approved\nFlow Master + Product Strategist\nDocument reason (A/B/C/D/E)

    ExtendedActive --> GoalReview : Primary goals completed\nduring extension

    ExtendedActive --> ForcedClosure : Extension period exhausted\nGoals still not complete

    InProgress --> EmergencyBreak : Emergency condition met

    EmergencyBreak --> EmergencyClosure : Flow Master + PS agree\nPartial completion documented

    NormalClosure --> Retrospective : Goal Review complete
    EarlyClosure --> Retrospective : Goal Review complete
    ForcedClosure --> Retrospective : Partial completion recorded
    EmergencyClosure --> Retrospective : Impact record created

    Retrospective --> [*] : New Smart Planning Session\nbegins immediately
```

---

## 2. Task State Machine

All possible states a single task can be in within GOAL, and the valid transitions between them.

```mermaid
stateDiagram-v2
    [*] --> Backlog : Task created or requested

    Backlog --> Refinement : Needs acceptance criteria or sizing

    Refinement --> Backlog : Returned — needs more info

    Refinement --> Ready : Meets ready-to-execute definition

    Backlog --> Ready : Already meets ready-to-execute definition

    Ready --> InProgress : Team member pulls task\nWIP limit not exceeded

    InProgress --> CodeReview : Implementation complete\nPR opened

    CodeReview --> InProgress : Review rejected\nChanges required

    CodeReview --> Validation : Code review approved\nDeployed to staging

    Validation --> InProgress : Validation failed\nBugs found

    Validation --> Done : All DoD criteria met\nAcceptance criteria passed

    InProgress --> Blocked : Progress impossible\nwithout external action

    CodeReview --> Blocked : Review cannot complete

    Validation --> Blocked : Validation cannot complete

    Blocked --> InProgress : Blocker resolved
    Blocked --> CodeReview : Blocker resolved (was in Code Review)
    Blocked --> Validation : Blocker resolved (was in Validation)

    Ready --> Archived : Task removed or deprioritized

    Done --> Archived : End of cycle archiving
```

---

## 3. Interrupt Management Protocol Flowchart

Complete decision process for handling any incoming request not in the backlog.

```mermaid
flowchart TD
    A([New request arrives]) --> B{Is the live system\nfailing for real users\nright now?}

    B -->|Yes| C[Classify as P1\nProduction Incident]
    B -->|No| D{Is there documented\nbusiness impact if NOT\naddressed within 1-5 days?}

    D -->|Yes| E[Classify as P2\nUrgent Business Request]
    D -->|No| F[Classify as P3\nDisguised Normal Request]

    C --> G[Immediate Expedite lane entry\nFlow Master verbal approval\nDocument within 2 hours]
    G --> H[Assign to available team member\nPause their current task]
    H --> I{Resolved within\n24 hours?}
    I -->|Yes| J[Document in interrupt log\nCycle continues]
    I -->|No| K[Escalate to incident commander\nEvaluate cycle impact]

    E --> N[Product Strategist evaluates:\nCost of waiting vs cost of interrupting]
    N -->|Interrupt| O[Joint approval: FM + PS\nDocument business justification]
    N -->|Wait| P[Add to backlog\nCommunicate timeline to stakeholder]
    O --> Q{Active Expedite task\nalready exists?}
    Q -->|Yes| R[Cannot enter Expedite now\nEvaluate priority vs current Expedite]
    Q -->|No| S[Enter Expedite lane\nSame rules as P1]

    F --> V[FM + PS review together]
    V --> W[Add to backlog with normal priority]
    W --> X[Communicate next cycle timeline\nto stakeholder]
    X --> Y[Document in interrupt log]
```

---

## 4. Blocked Task Escalation Flowchart

Hour-by-hour decision tree for managing a blocked task from identification through resolution.

```mermaid
flowchart TD
    A([Task owner cannot progress\ndue to external factor]) --> B[HOUR 0: Move task to Blocked\nComplete Block Register entry\nTask owner begins resolution attempt]

    B --> D{Resolved within\n24 hours?}

    D -->|Yes| E[Move task back to previous column\nComplete Block Register resolution entry]
    E --> F([Task resumes normal flow])

    D -->|No — Hour 24| G[Flow Master actively assists\nDiscussed in Daily Flow Sync\nResolution owner confirmed]

    G --> H{Resolved between\nHour 24-48?}
    H -->|Yes| E

    H -->|No — Hour 48| I{Blocker type?}

    I -->|Technical| J[FM + Tech Lead jointly own resolution]
    I -->|External| K[Product Strategist contacts external party]
    I -->|Business Decision| L[PS makes decision or escalates]
    I -->|Dependency| M[FM reprioritizes blocking task]
    I -->|Infrastructure| N[FM escalates to DevOps with formal SLA]

    J --> O{Resolved Hour 48-72?}
    K --> O
    L --> O
    M --> O
    N --> O

    O -->|Yes| E

    O -->|No — Hour 72+| P{Blocking a\nprimary goal?}

    P -->|No| Q[Continue monitoring\nDocument at retrospective]

    P -->|Yes| R[Mark goal AT RISK\nProduct Strategist formally notified]

    R --> S{Goal completable\nwithin cycle?}

    S -->|Yes| T[Continue resolution\nDaily Sync focuses on this blocker]

    S -->|No| U[Evaluate cycle extension\nFlow Master presents data]

    U -->|Extend| V[Formal extension documented\nCAI updated]
    U -->|Close partial| W[Cycle closes with partial record\nRoot cause is retrospective topic #1]
```

---

## 5. Smart Planning Session Process Flow

```mermaid
flowchart TD
    A([Previous Retrospective complete]) --> B[FM prepares: CAI, WIP calculation, team availability]
    B --> C[PS prepares: proposed goals, value layer tags, backlog status]
    C --> D[Smart Planning begins — 30-60 min]

    D --> E[Step 1 — 5 min: Review Cycle Accuracy Index]
    E --> F[Step 2 — 5 min: Review Backlog Readiness]
    F --> G{Backlog has enough\nReady items?}

    G -->|No| H[PS leads emergency grooming\nDo not start cycle without Ready items]
    H --> F

    G -->|Yes| I[Step 3 — 20-30 min: Define primary goals\nPS proposes, team provides feasibility input\nGoals sized as 1, 2, or 3 week estimate]

    I --> J{Goals feasible?}
    J -->|No| K[Split or reduce goals until feasible]
    K --> I

    J -->|Yes| L[Step 4 — 5-10 min: Define secondary goals]
    L --> M[Step 5 — 5 min: FM sets WIP limit\nTeam Size x Focus Factor]
    M --> N[Step 6 — 5 min: Confirm tech debt allocation]
    N --> O[Publish Goal Cycle Plan\nSeed Flow Board with initial tasks]

    O --> P([Goal Cycle officially begins])
```

---

## 6. Daily Flow Sync Process Flow

```mermaid
flowchart TD
    A([Daily Sync begins — 10-12 min hard limit]) --> B[FM opens Flow Board\nTeam reviews visually]

    B --> C[Q1 — 3 min: What moved forward?\nTasks that changed column]
    C --> D[Q2 — 4 min: What is blocked or at risk?]

    D --> E{New blockers\nidentified?}
    E -->|Yes| F[Block Register entry created now\nResolution owner named]
    E -->|No| G{Existing blockers\npast 24-hour mark?}
    F --> G

    G -->|Yes| H[FM activates Hour 24 escalation]
    G -->|No| I[Q3 — 3 min: What is slowing the flow?]
    H --> I

    I --> J[FM scans: aging tasks, WIP count,\nqueue buildup, Focus Ratio]

    J --> K{WIP limit\nviolation?}
    K -->|Yes| L[FM enforces WIP rule:\n1. Unblock 2. Review 3. Validate\n4. Pair 5. Tech Debt 6. New task]
    K -->|No| M[Sync complete]
    L --> M

    M --> N([Team returns to work])
```

---

## 7. WIP Limit Enforcement Decision Flow

```mermaid
flowchart TD
    A([Team member has no active task\nand wants to start new work]) --> B{Is current WIP count\nat or above WIP limit?}

    B -->|No — WIP available| C[Pick up a new task from Ready\nUpdate board immediately]
    C --> D([Continue working])

    B -->|Yes — WIP full| E[Cannot start new task\nFollow priority order]

    E --> F{Any tasks in\nBlocked column?}
    F -->|Yes| G[Help unblock a Blocked task\nThis is Priority 1]
    F -->|No| H{Any tasks in\nCode Review?}

    G --> D
    H -->|Yes| I[Perform a code review\nThis is Priority 2]
    H -->|No| J{Any tasks in\nValidation?}

    I --> D
    J -->|Yes| K[Help validate a task\nThis is Priority 3]
    J -->|No| L{Another team member\nwith an active task?}

    K --> D
    L -->|Yes| M[Pair with a teammate\nThis is Priority 4]
    L -->|No| N{Any Technical Debt\nitems ready?}

    M --> D
    N -->|Yes| O[Work on a Technical Debt item\nThis is Priority 5]
    N -->|No| P[Wait for WIP to open\nor re-evaluate board with Flow Master]

    O --> D
    P --> D
```

---

## 8. Definition of Done Validation Flow

```mermaid
flowchart TD
    A([Developer believes task is complete]) --> B[Review Level 1 Baseline DoD\nCheck each criterion]

    B --> C{Code merged to\nmain/trunk branch?}
    C -->|No| D[Complete merge\nDo not move to Done]
    C -->|Yes| E{All automated\ntests pass?}

    D --> A

    E -->|No| F[Fix failing tests]
    E -->|Yes| G{Peer code review\ncompleted and approved?}

    F --> A

    G -->|No| H[Request code review\nWait for approval]
    G -->|Yes| I{Validated in staging\nor QA environment?}

    H --> G

    I -->|No| J[Deploy to staging\nRun validation]
    I -->|Yes| K{New technical debt\nintroduced?}

    J --> I

    K -->|Yes, not logged| L[Create Technical Debt\nbacklog entry]
    K -->|No, or logged| M{Documentation\nupdated if needed?}

    L --> M

    M -->|No| N[Update documentation]
    M -->|Yes| O{Level 2 Extended DoD\ncriteria all met?}

    N --> O

    O -->|No| P[Complete remaining\nExtended DoD criteria]
    O -->|Yes| Q[Move task to Done column\nTask is complete]

    P --> O

    Q --> R([Done — counts toward\ngoal completion])
```

---

## 9. Value Framework Classification Flow

```mermaid
flowchart TD
    A([Product Strategist evaluates a goal\nor completed work item]) --> B{Does it directly affect\nbusiness KPIs?\nRevenue, cost, churn, compliance?}

    B -->|Yes| C[Tag: Layer 1 — Business Value\nSpecify which KPI]
    B -->|No| D{Does it improve the\ndirect user experience?\nUX, capability, performance?}

    C --> D

    D -->|Yes| E[Tag: Layer 2 — User Value\nSpecify what improves for users]
    D -->|No| F{Does it improve the\nteam's ability to deliver?\nCode quality, speed, reliability?}

    E --> F

    F -->|Yes| G[Tag: Layer 3 — Technical Value\nSpecify what delivery capability improves]
    F -->|No| H{Any layer\nidentified?}

    G --> H

    H -->|At least one layer| I[Document value layers\nin Goal Cycle Plan\nMeasurement plan defined]

    H -->|No layers identified| J[Raise to Product Strategist:\nWhat value does this deliver?\nIf no layer can be articulated:\nquestion whether to prioritize]

    I --> K{Is value measurable\nimmediately after delivery?}

    K -->|Yes| L[Record measurement method\nand expected outcome]
    K -->|No — deferred measurement| M[Record expected measurement date\nAssign measurement owner]

    L --> N([Goal Review: present evidence])
    M --> N
```

---

*GOAL Workflow Diagrams v1.0 | Framework: GOAL v0.2 | Author: Felipe Montenegro*
