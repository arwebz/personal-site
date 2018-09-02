const Prism = require('prismjs');
const loadLanguages = require('prismjs/components/')

module.exports = {
  content: [
    [
      'articles', {
        page: '/articles/_year/_article',
        permalink: ':year/:slug',
        generate: ['get', 'getAll']
      }
    ]
  ],
  parsers: {
    md: {
      extend(config) {
        config.highlight = (code, lang) => {
          const cls = `language-${lang}`
          loadLanguages(['cpp'])
          return `<pre class="${cls}"><code class="${cls}">${Prism.highlight(code, Prism.languages[lang] || Prism.languages.markup)}</code></pre>`
        }
      }
    }
  }
}
