import SavingsSimulator from "./index";
import { render, fireEvent, screen } from "@testing-library/react";
import { MONEY_GOAL, FUTURE_MONTHS } from "constants/Initialvalues";
import { numberCurrencyToString } from "helpers/currency";
import { getStringDate } from "helpers/dates";
import { calculateMonthlyValue } from "helpers/math";

describe("Savings simulator component", () => {
  describe("check app's initial structure", () => {
    it('should match the snapshot',  () => {
      const { container } = render(<SavingsSimulator />);

      expect(container).toMatchSnapshot();
    })

    describe("data inputs", () => {
      it("Should render the data input's with the expected initial values", () => {
        render(<SavingsSimulator />);

        const initialValueGoal = numberCurrencyToString(MONEY_GOAL, {
          style: "decimal",
        });
        const initialValue = screen.getByDisplayValue(initialValueGoal);

        const [month, year] = getStringDate(FUTURE_MONTHS).split(" ");
        const initialTargetMonth = screen.getByText(month);
        const initialTargetYear = screen.getByText(year);

        expect(initialValue).toBeTruthy();
        expect(initialTargetMonth).toBeTruthy();
        expect(initialTargetYear).toBeTruthy();
      });
    });
    describe("Monthly amount container", () => {
      it("Should have the expectrd initial monthly value", () => {
        render(<SavingsSimulator />);

        const expectedValue = calculateMonthlyValue(FUTURE_MONTHS, MONEY_GOAL);
        const formattedExpectedValue = numberCurrencyToString(expectedValue);

        const calculatedValue = screen.getAllByText(formattedExpectedValue);

        expect(calculatedValue).toBeTruthy();
        expect(calculatedValue.length).toEqual(2);
      });
    });
  });
  describe("Values update", () => {
    describe("Total amount", () => {
      it("Should correclty update the monthly amount when the total is changed", () => {
        render(<SavingsSimulator />);

        //querying the input by it's initial value
        const initialValueGoal = numberCurrencyToString(MONEY_GOAL, {
          style: "decimal",
        });
        const goalInput = screen.getByDisplayValue(initialValueGoal);

        const newGoal = 50000;

        fireEvent.change(goalInput, { target: { value: newGoal } });

        const expectedValue = calculateMonthlyValue(FUTURE_MONTHS, newGoal);
        const formattedExpectedValue = numberCurrencyToString(expectedValue);

        const newMonthlyValue = screen.getAllByText(formattedExpectedValue);

        expect(newMonthlyValue).toBeTruthy();
      });

      it("Should show a monthly value of 0 when the goal input has no value", () => {
        render(<SavingsSimulator />);

        //querying the input by it's initial value
        const initialValueGoal = numberCurrencyToString(MONEY_GOAL, {
          style: "decimal",
        });
        const goalInput = screen.getByDisplayValue(initialValueGoal);

        fireEvent.change(goalInput, { target: { value: "" } });

        const formattedExpectedValue = numberCurrencyToString(0);

        const newMonthlyValue = screen.getAllByText(formattedExpectedValue);

        expect(formattedExpectedValue).toEqual("$0.00");
        expect(newMonthlyValue).toBeTruthy();
      });
    });

    describe("Target month", () => {
      it("Should correclty update the monthly amount when the target month is updated to the future", () => {
        render(<SavingsSimulator />);

        const [nextMonth] = getStringDate(FUTURE_MONTHS + 1).split(" ");
        const [twoMonthsAhead] = getStringDate(FUTURE_MONTHS + 2).split(" ");

        const arrowRight = screen.getByLabelText("arrow-right");

        fireEvent.click(arrowRight);

        const initialTargetMonthQuery = screen.getByText(nextMonth);
        expect(initialTargetMonthQuery).toBeTruthy();

        fireEvent.click(arrowRight);

        const twoMonthsAheadQuery = screen.getByText(twoMonthsAhead);
        expect(twoMonthsAheadQuery).toBeTruthy();
      });
      it("Should correclty update the monthly amount when the target month is updated to the past", () => {
        render(<SavingsSimulator />);

        const [pastMonth] = getStringDate(FUTURE_MONTHS - 1).split(" ");
        const [twoMonthsAgo] = getStringDate(FUTURE_MONTHS - 2).split(" ");

        const arrowLeft = screen.getByLabelText("arrow-left");

        fireEvent.click(arrowLeft);

        const initialTargetMonthQuery = screen.getByText(pastMonth);
        expect(initialTargetMonthQuery).toBeTruthy();

        fireEvent.click(arrowLeft);

        const twoMonthsAgoQuery = screen.getByText(twoMonthsAgo);
        expect(twoMonthsAgoQuery).toBeTruthy();
      });
    });
  });
});
