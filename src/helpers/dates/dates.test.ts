import { getStringDate } from "helpers/dates";

describe("dates helper", () => {
  it("Should return the current month when the first argument is 1", () => {
    const currentMonthString = getStringDate(1);

    const currentDate = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(new Date());

    expect(currentMonthString).toEqual(currentDate);
  });

  it("Should return the expected result when a baseDate is provided", () => {
    //January 13th, 2013
    const baseDate = new Date(2013, 0, 13);

    const expectedDateString = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(baseDate);

    const formattedString = getStringDate(1, baseDate);

    expect(formattedString).toEqual(expectedDateString);
  });

  it("Should throw an error given an invalid number of future months", () => {
    expect(() => {
      getStringDate(0);
    }).toThrowError("Months ahead must be a positive number");
  });

  it("should return the expected value for future months without baseDate", () => {
    const futureMonths = 7;
    const now = new Date();
    
    //why futureMonths - 1 ?
    //because getDateString considers 1 to be the current month

    const futureDate = now.setMonth(now.getMonth() + (futureMonths - 1));

    const futureDateString = getStringDate(futureMonths);

    const expectedMonthString = new Intl.DateTimeFormat("en-US", {
      month: "long",
      year: "numeric",
    }).format(futureDate);

    expect(futureDateString).toEqual(expectedMonthString);
  });

  it("should return the expected value for future months with baseDate", () => {
    const futureMonths = 10;
    const baseDate = new Date(2021, 2, 7);

    //since we have a basepath, our function becomes pure
    //meaning that given the same inputs, our function will always have the same outputs
    const expectedDate = 'December 2021';

    const futureDateString = getStringDate(futureMonths, baseDate);

    expect(futureDateString).toEqual(expectedDate);
  });
});
