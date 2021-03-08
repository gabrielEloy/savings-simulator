import { useEffect, useState, useCallback } from "react";

function useKeyPress(targetKey: string, callback: () => void) {
  const [keyPressed, setKeyPressed] = useState(false);
  const downHandler = useCallback(({ key }: KeyboardEvent) => {
    if (key === targetKey) {
      setKeyPressed(true);
      callback();
    }
  }, [targetKey, callback]);

  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
    };
  }, [downHandler]);

  return keyPressed;
}

export default useKeyPress;
