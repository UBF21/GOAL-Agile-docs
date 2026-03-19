import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import styles from './index.module.css';

function HeroSection() {
  return (
    <header className={styles.hero}>
      <div className={styles.heroGrid} />
      <div className={styles.heroOrb1} />
      <div className={styles.heroOrb2} />
      <div className={styles.heroOrb3} />
      <div className={styles.heroInner}>
        <div className={styles.heroBadge}>
          <span className={styles.heroBadgePulse} />
          v0.2 · Open Methodology
        </div>
        <h1 className={styles.heroTitle}>GOAL</h1>
        <p className={styles.heroTagline}>
          <span className={styles.heroTaglineComment}>//</span>{' '}adaptive agile framework
        </p>
        <div className={styles.heroStats}>
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>5</span>
            <span className={styles.heroStatLabel}>core values</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>Flow</span>
            <span className={styles.heroStatLabel}>metrics</span>
          </div>
          <div className={styles.heroStatDivider} />
          <div className={styles.heroStat}>
            <span className={styles.heroStatValue}>Scrum</span>
            <span className={styles.heroStatLabel}>+ Kanban</span>
          </div>
        </div>
        <div className={styles.heroCta}>
          <Link className={styles.btnPrimary} to="/docs/quick-start">
            Get started →
          </Link>
          <Link className={styles.btnSecondary} to="/docs/intro">
            Read the docs
          </Link>
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

function FeatureCard({ icon, title, description, index }: FeatureItem & { index: number }) {
  return (
    <div className={styles.featureCard} style={{ animationDelay: `${index * 80}ms` }}>
      <span className={styles.featureNumber}>{String(index + 1).padStart(2, '0')}</span>
      <div className={styles.featureIconWrap}>
        <span className={styles.featureIconGlyph}>{icon}</span>
      </div>
      <h3 className={styles.featureTitle}>{title}</h3>
      <p className={styles.featureDescription}>{description}</p>
    </div>
  );
}

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <h2 className={styles.sectionTitle}>What GOAL brings to your team</h2>
        </div>
        <div className={styles.featuresGrid}>
          {features.map((f, i) => <FeatureCard key={f.title} {...f} index={i} />)}
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
      <div className={styles.manifestoDivider} />
      <div className="container">
        <h2 className={styles.sectionTitle}>
          The GOAL Manifesto
        </h2>
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
        <h2 className={styles.sectionTitle}>
          Why GOAL?
        </h2>
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

function AuthorSection() {
  return (
    <section className={styles.authorSection}>
      <div className="container">
        <div className={styles.authorInner}>
          <p className={styles.authorEyebrow}>About the author</p>
          <div className={styles.avatarRingWrap}>
            <div className={styles.avatarRing} aria-hidden="true" />
            <div className={styles.authorAvatar}>FM</div>
          </div>
          <h3 className={styles.authorName}>Felipe Rafael Montenegro Morriberon</h3>
          <p className={styles.authorRole}>Software Developer &amp; Creator of GOAL Agile</p>
          <p className={styles.authorBio}>
            Passionate about process design, developer experience, and building tools that
            help software teams work smarter — not harder.
          </p>
          <div className={styles.authorLinks}>
            <a
              href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorLinkLinkedIn}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
              LinkedIn
            </a>
            <a
              href="https://github.com/UBF21"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.authorLinkGitHub}>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"/>
              </svg>
              GitHub
            </a>
          </div>
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
          <h2 className={styles.footerCtaTitle}>
            Ready to adopt GOAL?
          </h2>
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
        <AuthorSection />
        <FooterCtaSection />
      </main>
    </Layout>
  );
}
