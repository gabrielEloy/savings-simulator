export const getStringDate = (monthsAhead: number, baseDate?: Date) => {
  if(monthsAhead <= 0){
    throw new Error('Months ahead must be a positive number');
  }
  
  const targetDate = baseDate || new Date();
  
  const futureDate = targetDate.setMonth(targetDate.getMonth() + (monthsAhead - 1));

  const stringDate = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric",
  }).format(futureDate);

  return stringDate;
};
