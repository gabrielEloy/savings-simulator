import { calculateMonthlyValue } from "helpers/math";

describe("calculateMonthlyValue", () => {
  it("Should return zero given a invalid value", () => {
    const value = undefined;
    const months = 12;

    expect(calculateMonthlyValue(months, value)).toEqual(0);
  });
  it("Should throw an error given a invalid months value", () => {
    const value = undefined;
    const months = -1;

    expect(() => {
      calculateMonthlyValue(months, value);
    }).toThrow("months must be a number bigger than zero");
  });
  it("Should correctly valid month value combinations", () => {
    const firstTestValue = 12;
    const firstTestMonth = 12;
    
    const secondTestValue = 1500;
    const secondTestMonth = 6;
    
    const thirdTestValue = 20;
    const thirdTestMonth = 48;
    
    const fourthTestValue = 759842.32;
    const fourthTestMonth = 3;

    
    expect(firstTestValue/firstTestMonth).toEqual(calculateMonthlyValue(firstTestMonth, firstTestValue));
    expect(secondTestValue/secondTestMonth).toEqual(calculateMonthlyValue(secondTestMonth, secondTestValue));
    expect(thirdTestValue/thirdTestMonth).toEqual(calculateMonthlyValue(thirdTestMonth, thirdTestValue));
    expect(fourthTestValue/fourthTestMonth).toEqual(calculateMonthlyValue(fourthTestMonth, fourthTestValue));
  });
});
