import moment from "moment";

const OUT_FORMAT = "MMMM YYYY";

export function formatProjectDate(project) {
  const dates = {
    start: moment(project.start).format(OUT_FORMAT),
    end: project.end ? moment(project.end).format(OUT_FORMAT) : "present"
  };
  return `${dates.start} to ${dates.end}`;
}
