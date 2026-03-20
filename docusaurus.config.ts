import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'GOAL Agile',
  tagline: 'Goal-Oriented Adaptive Lifecycle — The flow-optimized agile framework',
  favicon: 'img/favicon-32.png',

  future: {
    v4: true,
  },

  url: 'https://goal-agile.dev',
  baseUrl: '/',

  organizationName: 'goal-agile',
  projectName: 'goal-methodology',

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es'],
    localeConfigs: {
      en: {
        label: 'English',
        direction: 'ltr',
      },
      es: {
        label: 'Español',
        direction: 'ltr',
      },
    },
  },

  markdown: {
    mermaid: true,
  },

  themes: ['@docusaurus/theme-mermaid'],

  plugins: ['docusaurus-plugin-drawio'],

  headTags: [
    {
      tagName: 'link',
      attributes: { rel: 'canonical', href: 'https://goal-agile.dev/' },
    },
    {
      tagName: 'script',
      attributes: { type: 'application/ld+json' },
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'TechArticle',
        name: 'GOAL Agile — Goal-Oriented Adaptive Lifecycle',
        description: 'Open agile methodology combining Scrum structure with Kanban flow intelligence, adding original contributions for software teams.',
        url: 'https://goal-agile.dev',
        author: {
          '@type': 'Person',
          name: 'Felipe Rafael Montenegro Morriberon',
          url: 'https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/',
        },
        publisher: {
          '@type': 'Organization',
          name: 'GOAL Agile',
          url: 'https://goal-agile.dev',
        },
      }),
    },
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'docs',
          sidebarPath: './sidebars.ts',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/goal-social-card.jpg',
    metadata: [
      { name: 'description', content: 'GOAL Agile is a flow-optimized agile framework that combines Scrum structure with Kanban intelligence — adding goal-driven cycles, formula-based WIP limits, and real flow metrics.' },
      { name: 'keywords', content: 'GOAL Agile, agile methodology, goal-oriented, adaptive lifecycle, flow metrics, WIP limits, Scrum, Kanban, agile framework, software teams, cycle accuracy index' },
      { name: 'author', content: 'Felipe Rafael Montenegro Morriberon' },
      { name: 'robots', content: 'index, follow, max-image-preview:large' },
      { name: 'theme-color', content: '#0284C7' },
      { property: 'og:type', content: 'website' },
      { property: 'og:site_name', content: 'GOAL Agile' },
      { property: 'og:title', content: 'GOAL Agile — Goal-Oriented Adaptive Lifecycle Framework' },
      { property: 'og:description', content: 'Flow-optimized agile framework combining Scrum structure with Kanban intelligence. Goal-driven cycles, formula-based WIP limits, and real flow metrics — not story points.' },
      { property: 'og:url', content: 'https://goal-agile.dev/' },
      { property: 'og:image', content: 'https://goal-agile.dev/img/goal-social-card.jpg' },
      { property: 'og:locale', content: 'en_US' },
      { property: 'og:locale:alternate', content: 'es_ES' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'GOAL Agile — Goal-Oriented Adaptive Lifecycle Framework' },
      { name: 'twitter:description', content: 'Flow-optimized agile framework. Goal-driven cycles, WIP limits, flow metrics. Replace story points with real data.' },
      { name: 'twitter:image', content: 'https://goal-agile.dev/img/goal-social-card.jpg' },
    ],
    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: '',
      logo: {
        alt: 'GOAL Agile',
        src: 'img/wordmark-light.png',
        srcDark: 'img/wordmark-dark.png',
        height: 36,
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'goalSidebar',
          position: 'left',
          label: 'Methodology',
        },
        {
          to: '/docs/guides/official-guide',
          position: 'left',
          label: 'Guides',
        },
        {
          to: '/docs/certification/certification-overview',
          position: 'left',
          label: 'Certification',
        },
        {
          to: '/docs/scaling/scaling-overview',
          position: 'left',
          label: 'Scaling',
        },
        {
          to: '/docs/reference/glossary',
          position: 'left',
          label: 'Reference',
        },
        {
          to: '/docs/guides/official-guide',
          position: 'left',
          label: 'Official Guide',
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/UBF21/GOAL-Agile-docs',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Introduction',
              to: '/docs/intro',
            },
            {
              label: 'Core Methodology',
              to: '/docs/methodology/overview',
            },
            {
              label: 'Quick Start',
              to: '/docs/quick-start',
            },
            {
              label: 'Official Guide',
              to: '/docs/guides/official-guide',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/UBF21/GOAL-Agile-docs',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/UBF21/GOAL-Agile-docs/discussions',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Certification',
              to: '/docs/certification/certification-overview',
            },
            {
              label: 'Glossary',
              to: '/docs/reference/glossary',
            },
            {
              label: 'Scaling GOAL',
              to: '/docs/scaling/scaling-overview',
            },
          ],
        },
        {
          title: 'Author',
          items: [
            {
              label: 'Felipe R. Montenegro',
              href: 'https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/',
            },
            {
              label: 'Software Developer',
              href: 'https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/',
            },
            {
              label: 'LinkedIn',
              href: 'https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GOAL Agile — Created by <a href="https://www.linkedin.com/in/felipe-rafael-montenegro-morriberon-a79a341b2/" target="_blank" rel="noopener noreferrer">Felipe Rafael Montenegro Morriberon</a>. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
