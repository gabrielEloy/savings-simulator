import CurrencyInput from "components/CurrencyInput";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CurrencyInput test", () => {
  it("Should Correctly mask a value with the default properties", () => {
    const mockValue = 25000;
    const mockedHandleValue = jest.fn();

    render(<CurrencyInput handleValue={mockedHandleValue} value={mockValue} />);

    screen.getByDisplayValue("25,000");
  });

  it("Should call the handleValue function with the expected parameters", () => {
    const mockValue = 25000;
    const mockedHandleValue = jest.fn();

    render(<CurrencyInput  handleValue={mockedHandleValue} value={mockValue} />);

    const newValue = 12000;
    
    const input = screen.getByDisplayValue('25,000');
    fireEvent.change(input, {target: {value: newValue}});

    expect(mockedHandleValue).toHaveBeenCalledWith(newValue);
  });

  it("Should correctly render the component's label", () => {
    const mockValue = 25000;
    const mockedHandleValue = jest.fn();
    const mockedLabel = 'Mocked component'

    render(<CurrencyInput label={mockedLabel} handleValue={mockedHandleValue} value={mockValue} />);

    const label = screen.getByText(mockedLabel);

    expect(label).toBeTruthy();
  });

  it('Should correctly render the preffix', () => {
    const mockValue = 25000;
    const mockedHandleValue = jest.fn();
    
    const mockedPreffixContent = ';D'
    const mockedPreffix = <span>{mockedPreffixContent}</span>

    render(<CurrencyInput preffix={mockedPreffix} handleValue={mockedHandleValue} value={mockValue} />);

    const preffix = screen.getByText(mockedPreffixContent);

    expect(preffix).toBeTruthy();
  });

  it('Should only show numbers', () => {
    const mockValue = 25000;
    const mockedHandleValue = jest.fn();
  
    render(<CurrencyInput handleValue={mockedHandleValue} value={mockValue} />);

    const input = screen.getByDisplayValue("25,000") as HTMLInputElement;
    
    fireEvent.change(input, {target: {value: 1}});
    
    expect(input.value).toEqual("1")
    
    fireEvent.change(input, {target: {value: 'as'}});
    expect(input.value).toEqual("");
  })
});
