import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Goals are the contract.
          <br />
          Tasks are the path.
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          GOAL is an adaptive agile framework for modern software teams. Commit to outcomes,
          not task lists. Measure flow, not velocity. Deliver continuously, not in batches.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/docs/intro">
            Get Started
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.buttonOutlineLight)}
            to="/docs/quick-start">
            Quick Start Guide
          </Link>
        </div>
        <div className={styles.heroBadges}>
          <span className={styles.badge}>Open Methodology</span>
          <span className={styles.badge}>v0.2</span>
          <span className={styles.badge}>Scrum + Kanban Synthesis</span>
        </div>
      </div>
    </header>
  );
}

type FeatureItem = {
  title: string;
  icon: string;
  description: string;
};

const features: FeatureItem[] = [
  {
    title: 'Adaptive Goal Cycles',
    icon: '🎯',
    description:
      'Cycles end when goals are achieved — not when the calendar says so. Close early when you finish ahead. Extend once when you need more time. Always measure, always improve.',
  },
  {
    title: 'Formula-Based WIP Limits',
    icon: '⚡',
    description:
      'WIP Limit = Team Size × Focus Factor. Dynamic, data-driven constraints that reduce cognitive load and increase cycle time. Little\'s Law in practice.',
  },
  {
    title: 'Flow Metrics Replace Story Points',
    icon: '📊',
    description:
      'Cycle Time, Flow Efficiency, Block Rate, and the Cycle Accuracy Index replace abstract story points with observable, historical flow data.',
  },
  {
    title: 'Classified Interrupt Management',
    icon: '🚦',
    description:
      'Every interrupt is P1, P2, or P3. Every classification has a defined handling path. No more invisible context-switching that corrupts your metrics.',
  },
  {
    title: '3-Layer Value Framework',
    icon: '💎',
    description:
      'Business Value, User Value, and Technical Value — tagged at planning, evidenced at review. Finally, "delivering value" has operational meaning.',
  },
  {
    title: 'Data-Driven Retrospectives',
    icon: '🔬',
    description:
      'Retrospectives are anchored to the Flow Metrics Dashboard. Every improvement has an owner, a success metric, and a follow-up checkpoint.',
  },
];

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.sectionTitle}>
              What GOAL brings to your team
            </Heading>
          </div>
        </div>
        <div className="row">
          {features.map((feature) => (
            <div key={feature.title} className={clsx('col col--4', styles.featureCol)}>
              <div className={styles.featureCard}>
                <div className={styles.featureIcon}>{feature.icon}</div>
                <Heading as="h3" className={styles.featureTitle}>
                  {feature.title}
                </Heading>
                <p className={styles.featureDescription}>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ManifestoSection() {
  const values = [
    { left: 'Goals', right: 'Backlogs', desc: 'Commit to outcomes, not task lists' },
    { left: 'Flow', right: 'Velocity', desc: 'Measure how work moves, not how much was planned' },
    { left: 'Data', right: 'Estimates', desc: 'Use historical flow data, not abstract points' },
    { left: 'Delivery', right: 'Activity', desc: 'Progress means value delivered, not work started' },
    { left: 'Adaptation', right: 'Commitment Locking', desc: 'Plans evolve; goals persist' },
  ];

  return (
    <section className={styles.manifestoSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          The GOAL Manifesto
        </Heading>
        <p className={styles.manifestoSubtitle}>
          Five values that guide every decision in the framework.
          When in doubt, check against the manifesto.
        </p>
        <div className={styles.manifestoGrid}>
          {values.map((v) => (
            <div key={v.left} className={styles.manifestoItem}>
              <div className={styles.manifestoValue}>
                <strong className={styles.manifestoLeft}>{v.left}</strong>
                <span className={styles.manifestoOver}>over</span>
                <span className={styles.manifestoRight}>{v.right}</span>
              </div>
              <p className={styles.manifestoDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.manifestoCta}>
          <Link className="button button--primary" to="/docs/manifesto">
            Read the Full Manifesto
          </Link>
        </div>
      </div>
    </section>
  );
}

type ComparisonRow = {
  dimension: string;
  scrum: string;
  kanban: string;
  goal: string;
};

const comparisonRows: ComparisonRow[] = [
  {
    dimension: 'Cycle termination',
    scrum: 'Calendar date',
    kanban: 'N/A',
    goal: 'Goals completed',
  },
  {
    dimension: 'Scope flexibility',
    scrum: 'Fixed during sprint',
    kanban: 'Fully flexible',
    goal: 'Tasks flexible, goals fixed',
  },
  {
    dimension: 'Performance metric',
    scrum: 'Velocity',
    kanban: 'Throughput',
    goal: 'Flow Efficiency + CAI',
  },
  {
    dimension: 'Interrupt handling',
    scrum: 'Sprint break',
    kanban: 'Any time',
    goal: 'P1/P2/P3 protocol',
  },
  {
    dimension: 'Value measurement',
    scrum: 'Not defined',
    kanban: 'Not defined',
    goal: '3-Layer Value Framework',
  },
  {
    dimension: 'Technical debt',
    scrum: 'Usually ignored',
    kanban: 'Visible if tracked',
    goal: '10–20% allocation, first-class',
  },
];

function WhyGoalSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          Why GOAL?
        </Heading>
        <p className={styles.comparisonSubtitle}>
          GOAL synthesizes the structural benefits of Scrum with the flow intelligence of Kanban —
          and adds original contributions that neither framework provides.
        </p>

        <div className={styles.comparisonGrid}>
          {/* Header */}
          <div className={styles.cmpHeaderCell}>Dimension</div>
          <div className={styles.cmpHeaderCell}>Scrum</div>
          <div className={styles.cmpHeaderCell}>Kanban</div>
          <div className={styles.cmpHeaderCellGoal}>GOAL</div>

          {/* Rows */}
          {comparisonRows.map((row) => (
            <div key={row.dimension} className={styles.cmpRow}>
              <div className={styles.cmpDimension}>{row.dimension}</div>
              <div className={styles.cmpCell}>{row.scrum}</div>
              <div className={styles.cmpCell}>{row.kanban}</div>
              <div className={styles.cmpCellGoal}>{row.goal}</div>
            </div>
          ))}
        </div>

        <div className={styles.comparisonCta}>
          <Link className="button button--outline button--primary" to="/docs/reference/comparison">
            Full Comparison Matrix →
          </Link>
        </div>
      </div>
    </section>
  );
}

function FooterCtaSection() {
  return (
    <section className={styles.footerCtaSection}>
      <div className="container">
        <div className={styles.footerCtaContent}>
          <Heading as="h2" className={styles.footerCtaTitle}>
            Ready to adopt GOAL?
          </Heading>
          <p className={styles.footerCtaText}>
            Start with the Quick Start guide to implement GOAL Phase 1 in your team this week.
            Or explore the full methodology documentation.
          </p>
          <div className={styles.footerCtaButtons}>
            <Link className="button button--primary button--lg" to="/docs/quick-start">
              Quick Start Guide
            </Link>
            <Link className="button button--secondary button--lg" to="/docs/methodology/overview">
              Full Methodology
            </Link>
            <Link className="button button--outline button--lg" to="/docs/certification/certification-overview">
              Certification Program
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} — Goal-Oriented Adaptive Lifecycle`}
      description="GOAL is an adaptive agile framework for software teams. Commit to outcomes, not task lists. Measure flow, not velocity. Replace story points with real flow data.">
      <HeroSection />
      <main>
        <FeaturesSection />
        <ManifestoSection />
        <WhyGoalSection />
        <FooterCtaSection />
      </main>
    </Layout>
  );
}
