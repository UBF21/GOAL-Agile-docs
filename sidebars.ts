import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  goalSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      collapsed: false,
      items: [
        'intro',
        'manifesto',
        'quick-start',
      ],
    },
    {
      type: 'category',
      label: 'Core Methodology',
      items: [
        'methodology/overview',
        'methodology/principles',
        'methodology/roles',
        'methodology/goal-cycle',
        'methodology/flow-board',
        'methodology/wip-limits',
        'methodology/definition-of-done',
        'methodology/continuous-delivery',
        'methodology/technical-debt',
        'methodology/goal-writing',
        'methodology/developer-experience',
        'methodology/stakeholder-management',
        'methodology/quality-management',
        'methodology/capacity-planning',
        'methodology/risk-management',
        'methodology/remote-async',
        'methodology/okr-integration',
      ],
    },
    {
      type: 'category',
      label: 'Events',
      items: [
        'events/smart-planning',
        'events/daily-flow-sync',
        'events/backlog-grooming',
        'events/goal-review',
        'events/retrospective',
      ],
    },
    {
      type: 'category',
      label: 'Protocols',
      items: [
        'protocols/interrupt-management',
        'protocols/blocked-task-protocol',
        'protocols/backlog-management',
      ],
    },
    {
      type: 'category',
      label: 'Metrics & Value',
      items: [
        'metrics/metrics-system',
        'metrics/value-framework',
      ],
    },
    {
      type: 'category',
      label: 'Scaling',
      items: [
        'scaling/scaling-overview',
        'scaling/multi-team-roles',
        'scaling/multi-team-events',
        'scaling/dependency-management',
        'scaling/program-metrics',
      ],
    },
    {
      type: 'category',
      label: 'Guides',
      items: [
        'guides/official-guide',
        'guides/board-templates',
        'guides/workflow-diagrams',
        'guides/tooling-integration',
        'guides/adoption-playbook',
        'guides/retrospective-patterns',
      ],
    },
    {
      type: 'category',
      label: 'Certification',
      items: [
        'certification/certification-overview',
        'certification/practitioner',
        'certification/flow-master-certified',
        'certification/program-lead',
        'certification/trainer-coach',
      ],
    },
    {
      type: 'category',
      label: 'Reference',
      items: [
        'reference/glossary',
        'reference/anti-patterns',
        'reference/rules-summary',
        'reference/comparison',
      ],
    },
  ],
};

export default sidebars;
