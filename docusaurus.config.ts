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
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
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
          href: 'https://github.com/goal-agile/goal-methodology',
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
              href: 'https://github.com/goal-agile/goal-methodology',
            },
            {
              label: 'Discussions',
              href: 'https://github.com/goal-agile/goal-methodology/discussions',
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
      ],
      copyright: `Copyright © ${new Date().getFullYear()} GOAL Agile. Author: Felipe Montenegro. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json', 'yaml'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
