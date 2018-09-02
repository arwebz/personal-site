import moment from 'moment'

export function formatArticleDate (article) {
  return moment(article.date, 'YYYY-MM-DD').format('LL')
}
