export const getStringDate = (monthsAhead: number) => {
  const futureDate = new Date().setMonth(new Date().getMonth() + (monthsAhead - 1));

  const stringDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(futureDate);

  return stringDate;
};
