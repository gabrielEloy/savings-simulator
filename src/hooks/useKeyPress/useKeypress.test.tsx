import { UseKeypressExample } from "./useKeypressExample";
import { render, fireEvent } from "@testing-library/react";

describe("useKeyPress", () => {
  it("Should successfully call a function when a key is pressed once", () => {
    const mockedCallback = jest.fn();
    const {container} = render(<UseKeypressExample triggerKey="ArrowLeft" callback={() => {mockedCallback()}}/>);

    
    fireEvent.keyDown(container, { key: "ArrowLeft" });

    expect(mockedCallback).toHaveBeenCalledTimes(1);
  });
  it("Should successfully call a function when a key is pressed multiple times", () => {
    const mockedCallback = jest.fn();
    const {container} = render(<UseKeypressExample triggerKey="ArrowLeft" callback={() => {mockedCallback()}}/>);

    
    fireEvent.keyDown(container, { key: "ArrowLeft" });
    fireEvent.keyDown(container, { key: "ArrowLeft" });
    fireEvent.keyDown(container, { key: "ArrowLeft" });


    expect(mockedCallback).toHaveBeenCalledTimes(3);
  });
  it("Should not call a function when other keys that !== the trigger key are pressed", () => {
    const mockedCallback = jest.fn();
    const {container} = render(<UseKeypressExample triggerKey="ArrowLeft" callback={() => {mockedCallback()}}/>);

    
    fireEvent.keyDown(container, { key: "a" });
    fireEvent.keyDown(container, { key: "b" });
    fireEvent.keyDown(container, { key: "c" });
    fireEvent.keyDown(container, { key: "d" });
    fireEvent.keyDown(container, { key: "Arrowright" });

    expect(mockedCallback).toHaveBeenCalledTimes(0);
  });
});
