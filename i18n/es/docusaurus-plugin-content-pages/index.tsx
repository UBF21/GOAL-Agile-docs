import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from '@site/src/pages/index.module.css';

function HeroSection() {
  return (
    <header className={clsx('hero hero--primary', styles.heroBanner)}>
      <div className="container">
        <Heading as="h1" className={clsx('hero__title', styles.heroTitle)}>
          Los objetivos son el contrato.
          <br />
          Las tareas son el camino.
        </Heading>
        <p className={clsx('hero__subtitle', styles.heroSubtitle)}>
          GOAL es un framework ágil adaptativo para equipos de software modernos. Comprométete con
          resultados, no con listas de tareas. Mide el flujo, no la velocidad. Entrega de forma
          continua, no en lotes.
        </p>
        <div className={styles.heroButtons}>
          <Link
            className="button button--secondary button--lg"
            to="/es/docs/intro">
            Comenzar
          </Link>
          <Link
            className={clsx('button button--outline button--lg', styles.buttonOutlineLight)}
            to="/es/docs/quick-start">
            Guía de Inicio Rápido
          </Link>
        </div>
        <div className={styles.heroBadges}>
          <span className={styles.badge}>Metodología Abierta</span>
          <span className={styles.badge}>v0.2</span>
          <span className={styles.badge}>Síntesis Scrum + Kanban</span>
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
    title: 'Ciclos de Objetivos Adaptativos',
    icon: '🎯',
    description:
      'Los ciclos terminan cuando se alcanzan los objetivos, no cuando el calendario lo indica. Cierra antes si terminas a tiempo. Extiende una vez si necesitas más tiempo. Siempre mide, siempre mejora.',
  },
  {
    title: 'Límites WIP Basados en Fórmulas',
    icon: '⚡',
    description:
      'Límite WIP = Tamaño del Equipo × Factor de Enfoque. Restricciones dinámicas y basadas en datos que reducen la carga cognitiva y mejoran el tiempo de ciclo. La Ley de Little en práctica.',
  },
  {
    title: 'Métricas de Flujo Reemplazan los Story Points',
    icon: '📊',
    description:
      'Cycle Time, Flow Efficiency, Block Rate y el Cycle Accuracy Index reemplazan los story points abstractos con datos de flujo históricos y observables.',
  },
  {
    title: 'Gestión Clasificada de Interrupciones',
    icon: '🚦',
    description:
      'Cada interrupción es P1, P2 o P3. Cada clasificación tiene un camino de atención definido. No más cambios de contexto invisibles que corrompen tus métricas.',
  },
  {
    title: 'Framework de Valor en 3 Capas',
    icon: '💎',
    description:
      'Valor de Negocio, Valor de Usuario y Valor Técnico — etiquetados en la planificación, evidenciados en la revisión. Por fin, "entregar valor" tiene un significado operativo.',
  },
  {
    title: 'Retrospectivas Basadas en Datos',
    icon: '🔬',
    description:
      'Las retrospectivas están ancladas al Flow Metrics Dashboard. Cada mejora tiene un responsable, una métrica de éxito y un punto de seguimiento.',
  },
];

function FeaturesSection() {
  return (
    <section className={styles.featuresSection}>
      <div className="container">
        <div className="row">
          <div className="col col--12">
            <Heading as="h2" className={styles.sectionTitle}>
              Lo que GOAL aporta a tu equipo
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
    { left: 'Objetivos', right: 'Backlogs', desc: 'Comprométete con resultados, no con listas de tareas' },
    { left: 'Flujo', right: 'Velocidad', desc: 'Mide cómo se mueve el trabajo, no cuánto se planeó' },
    { left: 'Datos', right: 'Estimaciones', desc: 'Usa datos históricos de flujo, no puntos abstractos' },
    { left: 'Entrega', right: 'Actividad', desc: 'El progreso es valor entregado, no trabajo iniciado' },
    { left: 'Adaptación', right: 'Compromisos Rígidos', desc: 'Los planes evolucionan; los objetivos persisten' },
  ];

  return (
    <section className={styles.manifestoSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          El Manifiesto GOAL
        </Heading>
        <p className={styles.manifestoSubtitle}>
          Cinco valores que guían cada decisión del framework.
          Ante la duda, consulta el manifiesto.
        </p>
        <div className={styles.manifestoGrid}>
          {values.map((v) => (
            <div key={v.left} className={styles.manifestoItem}>
              <div className={styles.manifestoValue}>
                <strong className={styles.manifestoLeft}>{v.left}</strong>
                <span className={styles.manifestoOver}>sobre</span>
                <span className={styles.manifestoRight}>{v.right}</span>
              </div>
              <p className={styles.manifestoDesc}>{v.desc}</p>
            </div>
          ))}
        </div>
        <div className={styles.manifestoCta}>
          <Link className="button button--primary" to="/es/docs/manifesto">
            Leer el Manifiesto Completo
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
    dimension: 'Cierre del ciclo',
    scrum: 'Fecha del calendario',
    kanban: 'N/A',
    goal: 'Objetivos completados',
  },
  {
    dimension: 'Flexibilidad de alcance',
    scrum: 'Fijo durante el sprint',
    kanban: 'Completamente flexible',
    goal: 'Tareas flexibles, objetivos fijos',
  },
  {
    dimension: 'Métrica de rendimiento',
    scrum: 'Velocity',
    kanban: 'Throughput',
    goal: 'Flow Efficiency + CAI',
  },
  {
    dimension: 'Manejo de interrupciones',
    scrum: 'Ruptura del sprint',
    kanban: 'En cualquier momento',
    goal: 'Protocolo P1/P2/P3',
  },
  {
    dimension: 'Medición de valor',
    scrum: 'No definida',
    kanban: 'No definida',
    goal: 'Framework de Valor en 3 Capas',
  },
  {
    dimension: 'Deuda técnica',
    scrum: 'Generalmente ignorada',
    kanban: 'Visible si se rastrea',
    goal: 'Asignación 10–20%, primera clase',
  },
];

function WhyGoalSection() {
  return (
    <section className={styles.comparisonSection}>
      <div className="container">
        <Heading as="h2" className={styles.sectionTitle}>
          ¿Por qué GOAL?
        </Heading>
        <p className={styles.comparisonSubtitle}>
          GOAL sintetiza los beneficios estructurales de Scrum con la inteligencia de flujo de Kanban
          — y agrega contribuciones originales que ninguno de los dos frameworks proporciona.
        </p>

        <div className={styles.comparisonGrid}>
          {/* Header */}
          <div className={styles.cmpHeaderCell}>Dimensión</div>
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
          <Link className="button button--outline button--primary" to="/es/docs/reference/comparison">
            Matriz de Comparación Completa →
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
        <div className={styles.authorCard}>
          <div className={styles.authorAvatar}>FM</div>
          <div className={styles.authorInfo}>
            <p className={styles.authorLabel}>Creado por</p>
            <h3 className={styles.authorName}>Felipe Rafael Montenegro Morriberon</h3>
            <p className={styles.authorRole}>Desarrollador de Software</p>
            <div className={styles.authorLinks}>
              <a
                href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLinkBtn}>
                LinkedIn
              </a>
              <a
                href="https://github.com/UBF21"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.authorLinkBtn}>
                GitHub
              </a>
            </div>
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
          <Heading as="h2" className={styles.footerCtaTitle}>
            ¿Listo para adoptar GOAL?
          </Heading>
          <p className={styles.footerCtaText}>
            Comienza con la guía de Inicio Rápido para implementar GOAL Fase 1 en tu equipo esta semana.
            O explora la documentación completa de la metodología.
          </p>
          <div className={styles.footerCtaButtons}>
            <Link className="button button--primary button--lg" to="/es/docs/quick-start">
              Guía de Inicio Rápido
            </Link>
            <Link className="button button--secondary button--lg" to="/es/docs/methodology/overview">
              Metodología Completa
            </Link>
            <Link className="button button--outline button--lg" to="/es/docs/certification/certification-overview">
              Programa de Certificación
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
      title={`${siteConfig.title} — Ciclo de Vida Adaptativo Orientado a Objetivos`}
      description="GOAL es un framework ágil adaptativo para equipos de software. Comprométete con resultados, no con listas de tareas. Mide el flujo, no la velocidad. Reemplaza los story points con datos de flujo reales.">
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
