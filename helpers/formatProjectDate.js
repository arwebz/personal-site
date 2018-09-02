import moment from 'moment'

const IN_FORMAT = 'YYYY-MM'
const OUT_FORMAT = 'MMMM YYYY'

export function formatProjectDate (project) {
  const dates = {
    start: moment(project.start, IN_FORMAT).format(OUT_FORMAT),
    end: project.end
      ? moment(project.end, IN_FORMAT).format(OUT_FORMAT)
      : 'present'
  }
  return `${dates.start} to ${dates.end}`
}
