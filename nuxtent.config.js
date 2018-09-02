const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/')
const externalLinks = require('markdown-it-link-attributes')

module.exports = {
  content: [
    ['blog', {
      page: '/blog/_year/_article',
      permalink: ':year/:slug',
      generate: ['get', 'getAll']
    }],
    ['projects', {
      permalink: ':slug',
      isPost: false,
      generate: ['getAll']
    }],
    ['skills', {
      permalink: ':slug',
      isPost: false,
      generate: ['getAll']
    }],
    ['misc', {
      permalink: ':slug',
      isPost: false,
      generage: ['getAll']
    }]
  ],
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          const cls = `language-${lang}`
          loadLanguages(['cpp'])
          return `<pre class="${cls}"><code class="${cls}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        }
        config.linkify = false
      },
      plugins: [
        [
          externalLinks,
          {
            pattern: /^https:/,
            attrs: {
              target: '_blank',
              rel: 'noopener'
            }
          }
        ]
      ]
    }
  }
}
