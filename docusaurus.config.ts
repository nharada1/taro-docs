import type * as Preset from '@docusaurus/preset-classic';
import type { Config } from '@docusaurus/types';
import { themes as prismThemes } from 'prism-react-renderer';

const config: Config = {
  title: 'Taro AI',
  tagline: 'Autocomplete for Arborists',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://docs.taroai.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'nharada1', // Usually your GitHub org/user name.
  projectName: 'taro-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Useful options to enforce blogging best practices
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
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    navbar: {
      title: 'Taro AI',
      logo: {
        alt: 'Taro AI Logo',
        src: 'img/logo.svg',
      },
      items: [
        {to: '/', label: 'Release Log', position: 'left'},
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://app.taroai.com',
          label: 'Back to Taro AI',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Twitter',
              href: 'https://twitter.com/gettaroai',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'Release Log',
              to: '/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Taro-AI-Inc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Taro AI, Inc.`
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,

  plugins: [
    [
      '@docusaurus/plugin-content-blog',
      {
        id: 'second-blog',
        routeBasePath: '/',
        path: './release-log',
      },
    ],
  ],
};

export default config;