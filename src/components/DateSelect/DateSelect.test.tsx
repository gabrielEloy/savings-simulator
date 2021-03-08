import { DateSelect } from "components/DateSelect";
import { render, screen, fireEvent } from "@testing-library/react";
import { getStringDate } from "helpers/dates";

describe("DateSelect", () => {
  test("should correctly get month and year based on monthsAhead", () => {
    const monthsAhead = 5;
    const handleMonthsAhead = jest.fn();
    const [expectedMonth, expectedString] = getStringDate(monthsAhead).split(
      " "
    );

    render(
      <DateSelect
        handleMonthsAhead={handleMonthsAhead}
        monthsAhead={monthsAhead}
      />
    );

    expect(screen.getByText(expectedMonth)).toBeTruthy();
    expect(screen.getByText(expectedString)).toBeTruthy();
  });

  it("Should listen for arrow keys press", () => {
    const monthsAhead = 5;
    const handleMonthsAhead = jest.fn();

    const { container } = render(
      <DateSelect
        handleMonthsAhead={handleMonthsAhead}
        monthsAhead={monthsAhead}
      />
    );

    fireEvent.keyDown(container, { key: "ArrowLeft" });
    fireEvent.keyDown(container, { key: "ArrowRight" });

    expect(handleMonthsAhead).toHaveBeenCalledTimes(2);
  });

  it("Should call handleMonths ahead with the correct parameters", () => {
    const monthsAhead = 5;
    const handleMonthsAhead = jest.fn();

    render(
      <DateSelect
        handleMonthsAhead={handleMonthsAhead}
        monthsAhead={monthsAhead}
      />
    );

    const arrowLeft = screen.getByLabelText("arrow-left");
    const arrowRight = screen.getByLabelText("arrow-right");

    fireEvent.click(arrowLeft);
    expect(handleMonthsAhead).toHaveBeenCalledWith(monthsAhead - 1);
    fireEvent.click(arrowRight);
    expect(handleMonthsAhead).toHaveBeenCalledWith(monthsAhead + 1);
  });

  it("Should correclty display label", () => {
    const monthsAhead = 5;
    const handleMonthsAhead = jest.fn();
    const labelText = "Hello, im the label";

    render(
      <DateSelect
        handleMonthsAhead={handleMonthsAhead}
        monthsAhead={monthsAhead}
        label={labelText}
      />
    );

    screen.getByText(labelText);

    expect(labelText).toBeTruthy();
  });

  describe("Button disable", () => {
    it("Should respect the left button disable prop", () => {
      const monthsAhead = 5;
      const handleMonthsAhead = jest.fn();

      render(
        <DateSelect
          handleMonthsAhead={handleMonthsAhead}
          monthsAhead={monthsAhead}
          disableLeftArrow
        />
      );

      const arrowLeft = screen.getByLabelText("arrow-left");

      expect(arrowLeft.closest('button')).toBeDisabled();
    });
    
    it("Should respect the right button disable prop", () => {
      const monthsAhead = 5;
      const handleMonthsAhead = jest.fn();

      render(
        <DateSelect
          handleMonthsAhead={handleMonthsAhead}
          monthsAhead={monthsAhead}
          disableRightArrow
        />
      );

      const arrowLeft = screen.getByLabelText("arrow-right");

      expect(arrowLeft.closest('button')).toBeDisabled();
    });
  });
});
