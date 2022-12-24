import moment from "moment";

export function formattingDate(date: string) {
  return moment(date).fromNow();
}