export const getFormattedDate = (date) => new Intl.DateTimeFormat("ru-RU", {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric",
}).format(date)
