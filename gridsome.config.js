// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const wordpress = require('./wordpress.config');

const shopify = require('./shopify.config');

const ghost = require('./ghost.config');

const netlify = require('./netlify.config');

const {version} = require('./package.json');

module.exports = {
  siteName: 'Udesly Adapter Docs',
 
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png',
  },
  siteUrl: process.env.SITE_URL ? process.env.SITE_URL : 'https://example.com',
  settings: {
    version,
    githubRepoBase: 'https://github.com/eclipsesrl/udesly-docs-gridsome/blob/master/content/',
    nav: {
      links: [
        {
          path: '/shopify/',
          title: 'WordPress',
          logo: 'ShopifyLogo'
        },
        {
          path: '/wordpress/',
          title: 'WordPress',
          logo: 'WordPressLogo',
        },
        {
          path: '/ghost/',
          title: 'Ghost',
          logo: 'GhostLogo'
        },
        {
          path: '/jamstack/',
          title: 'Jamstack',
          logo: 'JamstackLogo'
        }
      ],
    },
    sidebar: [
      wordpress.sidebar,
      shopify.sidebar,
      ghost.sidebar,
      netlify.sidebar
    ],
  },
  plugins: [
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'MarkdownPage',
        baseDir: './content',
        template: './src/templates/MarkdownPage.vue',
        plugins: ['@gridsome/remark-prismjs'],
      },
    },
    {
      use: '@gridsome/vue-remark',
      options: {
        typeName: 'ChangelogPage',
        baseDir: './changelog',
        plugins: ['@gridsome/remark-prismjs'],
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [/token$/],
        },
      },
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9',
      },
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {},
    },
  ],
};
