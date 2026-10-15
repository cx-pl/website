import { defineConfig } from 'vitepress'
import cxGrammar from './theme/cx.tmLanguage.json'

export default defineConfig({
  title: 'CX',
  description: 'The CX programming language: tutorials, language reference, and tools.',
  lang: 'en-US',
  base: '/',
  cleanUrls: false,
  ignoreDeadLinks: [/^\/samples\/Counter\.cx$/],
  lastUpdated: true,
  sitemap: { hostname: 'https://cx-pl.io' },
  transformPageData(pageData) {
    const pagePath = pageData.relativePath.replace(/index\.md$/, '').replace(/\.md$/, '.html')
    const canonicalUrl = `https://cx-pl.io/${pagePath}`
    pageData.frontmatter.head ??= []
    pageData.frontmatter.head.push(
      ['link', { rel: 'canonical', href: canonicalUrl }],
      ['meta', { property: 'og:url', content: canonicalUrl }],
    )
  },
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg', type: 'image/svg+xml' }],
    ['meta', { name: 'theme-color', content: '#111827' }],
    ['meta', { property: 'og:site_name', content: 'CX' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:image', content: 'https://cx-pl.io/cx-social.svg' }],
    ['meta', { name: 'twitter:card', content: 'summary_large_image' }],
  ],
  markdown: {
    lineNumbers: true,
    languages: [{ ...cxGrammar, name: 'cx' }],
  },
  themeConfig: {
    logo: '/cx-mark.svg',
    siteTitle: 'CX',
    nav: [
      { text: 'Get started', link: '/getting-started/' },
      { text: 'Tutorials', link: '/tutorials/' },
      { text: 'Docs', link: '/language/' },
      { text: 'Tools', link: '/tools/' },
      { text: 'Project', link: '/project/' },
    ],
    sidebar: {
      '/getting-started/': [
        { text: 'Start here', items: [{ text: 'Build CX', link: '/getting-started/' }] },
      ],
      '/tutorials/': [
        { text: 'Learn CX', items: [
          { text: '1. Hello World', link: '/tutorials/hello-world' },
          { text: '2. Values and control flow', link: '/tutorials/values-and-control-flow' },
          { text: '3. Types and objects', link: '/tutorials/types-and-objects' },
        ] },
      ],
      '/language/': [
        { text: 'Language', items: [
          { text: 'Overview', link: '/language/' },
          { text: 'Language reference', link: '/language/reference' },
        ] },
      ],
      '/stdlib/': [
        { text: 'Standard library', items: [
          { text: 'Overview', link: '/stdlib/' },
          { text: 'Runtime contracts', link: '/generated/standard-library-contracts' },
          { text: 'Runtime ABI', link: '/generated/runtime-abi' },
        ] },
      ],
      '/tools/': [
        { text: 'Tools', items: [
          { text: 'Overview', link: '/tools/' },
          { text: 'Compiler', link: '/tools/compiler' },
          { text: 'Packages', link: '/tools/packages' },
          { text: 'Visual Studio Code', link: '/tools/vscode' },
        ] },
      ],
      '/project/': [
        { text: 'Project', items: [
          { text: 'Status and contribution', link: '/project/' },
          { text: 'Tested revisions', link: '/project/revisions' },
          { text: 'Source licenses', link: '/project/attributions' },
        ] },
      ],
    },
    search: { provider: 'local' },
    socialLinks: [{ icon: 'github', link: 'https://github.com/cx-pl' }],
    editLink: {
      pattern: 'https://github.com/cx-pl/website/edit/main/docs/:path',
      text: 'Edit this page on GitHub',
    },
    footer: {
      message: 'CX is experimental software; features and compatibility may change.',
      copyright: '© 2026 CX contributors. Microsoft and Windows are trademarks of the Microsoft group of companies.',
    },
  },
})
