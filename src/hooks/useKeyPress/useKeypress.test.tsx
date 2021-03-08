import { UseKeypressExample } from "./useKeypressExample";
import { render, fireEvent } from "@testing-library/react";

describe("useKeyPress", () => {
  it("Should successfully call a function when a key is pressed", () => {
    const mockedCallback = jest.fn();
    const {container} = render(<UseKeypressExample triggerKey="ArrowLeft" callback={() => {mockedCallback()}}/>);

    
    fireEvent.keyDown(container, { key: "ArrowLeft" });

    expect(mockedCallback).toHaveBeenCalledTimes(1);
  });
});
