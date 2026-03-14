---
id: tooling-integration
title: Tooling Integration Guide
sidebar_position: 4
description: How to set up GOAL in Jira, Linear, Trello, Notion, GitHub Projects, and Google Sheets — with step-by-step configuration instructions.
---

# GOAL Tooling Integration Guide

**Version:** 1.0 | **Companion to:** GOAL Methodology v0.2

---

## Tool Selection Guide

### Why Tool Choice Matters for GOAL

GOAL introduces several concepts that are not standard in most project management tools: the Flow Board with a Blocked lane and an Expedite lane, dynamic WIP limits, the Block Register, the Cycle Accuracy Index, and the 3-Layer Value Framework. No existing tool natively implements all of these. Every tool requires some customization.

### GOAL Requirements Map

| GOAL Requirement | What the Tool Must Support |
|-----------------|---------------------------|
| Flow Board (6 columns + 2 special lanes) | Configurable columns or lists; ability to add swimlanes or color-coded lanes |
| WIP limit visibility | Column capacity limits, or a manual counter visible to the team |
| Blocked task state | A dedicated "Blocked" column, label, or swimlane with visible reason |
| Expedite lane | A separate swimlane, tag, or visual priority marker |
| Block Register | A separate database, log view, or linked issue type |
| Task aging indicators | Aging indicators, date-triggered automation, or conditional formatting |
| Cycle time tracking | Date stamps on column transitions, or integration with analytics tools |
| Flow Efficiency calculation | Requires time-in-status data; most tools need a third-party add-on |
| Goal tagging (link task to goal) | Custom fields, labels, or linked epic/parent |
| S/M/L sizing | Custom field or label system |
| Cycle Accuracy Index | A separate tracker (spreadsheet is usually acceptable) |

### Tool Comparison Matrix

| Feature | Jira | Linear | Trello | Notion | GitHub Projects | Google Sheets |
|---------|:----:|:------:|:------:|:------:|:---------------:|:-------------:|
| Configurable columns | ✓ Full | ✓ Full | ✓ Lists | ✓ DB views | ✓ Fields | Manual |
| WIP limit enforcement | Partial | Manual | Manual (Butler) | Manual | Manual | Formula |
| Blocked lane | Custom | Label + filter | Custom list | DB property | Label | Color |
| Expedite lane | Swimlane (Premium) | Label + view | Butler + label | Filtered view | Label | Color row |
| Task aging | Add-on | No native | Card Aging Power-Up | Formula | No native | Formula |
| Cycle time (native) | Basic | No (export) | No | Formula | No | Formula |
| Flow Efficiency (native) | No | No | No | No | No | Formula |
| Goal/epic linking | ✓ Epics | ✓ Projects | Label only | Relation | Milestone | Manual |
| S/M/L sizing | Custom field | Estimate field | Custom field | Select property | Custom field | Column |
| Automation rules | ✓ Full | ✓ Auto-status | ✓ Butler | Limited | GitHub Actions | Apps Script |
| Budget | Paid (Free tier) | Paid (Free tier) | Free/Paid | Free/Paid | Free (with GitHub) | Free |

### Recommendation by Team Size and Budget

**Solo practitioner or very small team (1–3 people):**
- Best choice: Linear (free tier) or Notion
- Spreadsheet fallback is viable for full GOAL implementation

**Small team (4–8 people), limited budget:**
- Best choice: Linear free tier + Google Sheets for metrics
- Alternative: Trello + Google Sheets

**Small team (4–8 people), willing to pay:**
- Best choice: Linear (paid) + Swarmia or LinearB for metrics
- Alternative: Jira Standard + built-in reporting

**Medium team (8–20 people):**
- Best choice: Jira Standard or Premium
- Pair with Jira's built-in reporting or Atlassian Analytics

**Engineering-first team already using GitHub:**
- Best choice: GitHub Projects + Google Sheets for Block Register and metrics

**Multi-team GOAL (Tier 2 or 3):**
- Best choice: Jira Premium for Advanced Roadmaps
- Alternative: Linear with separate team spaces + shared project for program board

---

## Jira Setup

### Board Type Recommendation

**Recommended: Kanban board with Versions**

Use a Jira Kanban board as the primary Flow Board. Create a Jira Version (Release) for each Goal Cycle. Tag issues with that version. This gives you:
- Continuous flow visibility
- Cycle tracking through versions without sprint rigidity
- Ability to close a version early when goals complete

**Why Kanban over Scrum board:** Jira Sprints enforce a fixed-scope commitment model that conflicts with GOAL's Scope Flexibility Rule. Kanban boards allow continuous flow.

### Flow Board Column Configuration

1. Go to your Jira project → Board → Board settings → Columns
2. Add/rename columns:

| Column Name | Mapped Status | Notes |
|-------------|--------------|-------|
| Backlog | Backlog | Use Jira's native backlog panel |
| Ready | To Do (rename to "Ready") | Items fully ready to execute |
| In Progress | In Progress | Active work only |
| Code Review | In Review (create new status) | |
| Validation | Testing (create new status) | |
| Done | Done | DoD-verified |

3. Create swimlanes for Blocked and Expedite (requires Jira Premium or manual labels on Standard)

### WIP Limits in Jira

- **Jira Premium:** Set column constraints in Board settings > Columns > Column constraint
- **Jira Standard:** Add a manual WIP counter card at the top of each column, or use Jira Automation to flag when a column exceeds the limit

### Custom Fields for GOAL

Create these custom fields in your Jira project:

| Field Name | Type | Values | Purpose |
|------------|------|--------|---------|
| Task Size | Select | Small, Medium, Large | S/M/L sizing |
| Goal | Text or Link | Goal description | Link task to cycle goal |
| Blocker Type | Select | Technical, External, Business Decision, Dependency, Infrastructure | Block Register |
| Blocker Description | Text | — | Block Register detail |
| Value Layer | Checkboxes | Business Value, User Value, Technical Value | 3-Layer tagging |

### Jira Automation Rules

**Rule 1: Aging alert**
- Trigger: Issue in status "In Progress" for > 1 day (S), 2 days (M), or 3 days (L)
- Action: Add label "AGING" and send notification to Flow Master

**Rule 2: WIP violation alert**
- Trigger: Count of issues in "In Progress" + "Code Review" + "Validation" exceeds WIP limit
- Action: Send notification to Flow Master

**Rule 3: Blocked task reminder**
- Trigger: Issue in status "Blocked" for > 24 hours
- Action: Send notification to Resolution Owner and Flow Master

---

## Linear Setup

### Cycle Structure in Linear

Linear's native "Cycles" feature maps well to GOAL Goal Cycles:
- Each Cycle corresponds to one Goal Cycle
- Set Cycle duration to 1, 2, or 3 weeks
- Cycles can be closed early by marking all primary goal issues as completed

### Workflow Configuration

Linear's default workflow:
```
Backlog → Todo → In Progress → In Review → Done
```

Customize to GOAL standard:
1. Settings → Team → Workflow
2. Add states:
   - Rename "Todo" to "Ready"
   - Add "Code Review" between "In Progress" and "In Review" (or rename "In Review" to "Code Review")
   - Add "Validation" after "Code Review"
   - Add "Blocked" state with red color

### Labels for GOAL in Linear

Create these labels:
- **Size:** `size-S`, `size-M`, `size-L`
- **Goal:** `goal-[cycle-number]-[goal-name]` (e.g., `goal-7-auth-overhaul`)
- **Type:** `tech-debt`, `expedite`
- **Blocker type:** `blocked-technical`, `blocked-external`, `blocked-business`, `blocked-dependency`, `blocked-infra`

### WIP Limits in Linear

Linear does not have native WIP limit enforcement. Workarounds:
- Create a pinned filter showing "In Progress" + "Code Review" + "Validation" count
- Use a Slack integration to post daily WIP count to the team channel
- Flow Master manually monitors the count before each Daily Flow Sync

### Block Register in Linear

Use a separate Linear project or Notion database for the Block Register. Link blocked issues in Linear to their Block Register entries using the description field or a custom integration.

---

## Trello Setup

### Board Structure

**Create these lists in order:**
1. Backlog
2. Ready
3. In Progress
4. Code Review
5. Validation
6. Done
7. Blocked
8. Expedite (note in header: MAX 1 CARD)
9. Tech Debt

### WIP Limits with Butler Automation

Create a Butler rule:
- **Trigger:** When a card is moved to "In Progress" or "Code Review" or "Validation"
- **Condition:** If the count of cards in those three lists combined exceeds [WIP limit]
- **Action:** Post a message to the card: "WIP limit reached! Finish or unblock existing work before starting new tasks."

### Aging with Card Aging Power-Up

Enable the Card Aging Power-Up from Trello's Power-Up directory. Configure aging thresholds matching GOAL's:
- Yellow: 1 day (S), 2 days (M), 3 days (L)
- Red: 2x the yellow threshold

### Custom Fields Power-Up

Add custom fields:
- **Size:** Dropdown (Small, Medium, Large)
- **Goal:** Text field
- **Owner:** Text field (or use @mention in card)
- **Date entered column:** Date field (update manually when moving cards)

---

## Notion Setup

### Database Structure

Create the following databases:

**1. Flow Board (Board View)**
- Properties: Title, Status (Select: Backlog/Ready/In Progress/Code Review/Validation/Done/Blocked), Size (Select: S/M/L), Owner (Person), Goal (Text or Relation), Date Entered Column (Date), Aging Days (Formula)

**2. Block Register (Table View)**
- Properties: Task (Relation to Flow Board), Date Blocked (Date), Blocker Type (Select), Description (Text), Resolution Owner (Person), Expected Resolution (Date), Date Resolved (Date), Hours Blocked (Formula)

**3. Goal Cycle Plan (Gallery View)**
- Properties: Cycle Number, Start Date, End Date, Primary Goals (Text), Secondary Goals (Text), WIP Limit, Tech Debt Allocation, Status

### Aging Formula in Notion

Add this formula property to your Flow Board database:
```
dateBetween(now(), prop("Date Entered Column"), "days")
```

Then create a filtered view showing cards where this formula exceeds the threshold for their size.

### WIP Counter Formula

Create a calculated field in the board database:
```
countAll(filter(Tasks, prop("Status") == "In Progress" or
               prop("Status") == "Code Review" or
               prop("Status") == "Validation"))
```

Display this prominently in a linked view widget.

---

## GitHub Projects Setup

### When to Use GitHub Projects

Best for engineering teams that:
- Already use GitHub for code
- Want automatic card movement based on PR events
- Don't need advanced flow analytics

### Board Configuration

1. Create a new Project (Projects v2 for best feature set)
2. Switch to Board view
3. Add these columns: Backlog, Ready, In Progress, Code Review, Validation, Done
4. Add custom fields: Size (Single select: S/M/L), Goal (Text), Blocker Type (Single select)

### Automations for GOAL

Enable built-in automations:
- "When a pull request is opened → move to Code Review"
- "When a pull request is reviewed → move to Validation"
- "When a pull request is merged → move to Done"

These match GOAL's Code Review and Validation columns exactly.

### Limitations

GitHub Projects does not natively support:
- WIP limit enforcement (manual monitoring required)
- Cycle time tracking (requires export + Google Sheets)
- Flow Efficiency calculation (requires export)
- Aging indicators (no native support)

For teams using GitHub Projects, supplement with a Google Sheets metrics tracker.

---

## Google Sheets Fallback

### When to Use Google Sheets

- Team of any size, zero budget
- Need full GOAL implementation without tooling cost
- Good for teams in early adoption (Phase 1) before committing to a paid tool

### Sheet Structure

Create one Google Sheets file with these tabs:

**Tab 1: Flow Board**
Columns: Task ID | Task Name | Size | Goal | Owner | Status | Date Entered Column | Days in Column | Aging Status (formula)

**Tab 2: Block Register**
Columns: Block ID | Task Name | Date Blocked | Blocker Type | Description | Resolution Owner | Resolution Plan | Expected Resolution | Date Resolved | Hours Blocked

**Tab 3: Metrics Dashboard**
Use formulas to calculate:
- `COUNTIFS` for WIP count by status
- `AVERAGEIFS` for Cycle Time averages
- Flow Efficiency = avg(Cycle Time) / avg(Flow Time) × 100
- Block Rate = COUNTIF(blocked tasks) / COUNTIF(done tasks) × 100

**Tab 4: Cycle Accuracy Index**
Columns: Cycle Number | Estimated Days | Actual Days | CAI (= Actual/Estimated) | Reason Category | Notes

**Tab 5: Goal Cycle Plan**
One section per cycle, with primary goals, secondary goals, WIP limit, and tech debt allocation.

---

## Metrics Tracking Recommendations

Regardless of your primary tool, track these metrics outside the tool if they're not natively supported:

| Metric | Minimum tracking | Ideal tracking |
|--------|-----------------|----------------|
| Cycle Time | Manual date stamps in Sheets | Native tool reporting or LinearB/Swarmia |
| Flow Time | Manual date stamps in Sheets | Same |
| Flow Efficiency | Sheets formula | Swarmia, Faros, or custom dashboard |
| Block Rate | Block Register count in Sheets | Native tool + Sheets |
| Delivery Rate | Done count per day in Sheets | Native tool reporting |
| Cycle Accuracy Index | Sheets tracker | Sheets (no tool does this natively) |
| Focus Ratio | Manual WIP count | Native WIP limit display |

**Recommended third-party analytics:**
- **Swarmia** — Linear/GitHub native; excellent flow metrics
- **LinearB** — Linear/GitHub/Jira; engineering metrics with DORA support
- **Faros** — Multi-tool; good for organizations with multiple tools
- **Pluralsight Flow** — Jira/GitHub; engineering productivity metrics

---

*GOAL Tooling Integration Guide v1.0 | Author: Felipe Montenegro*
