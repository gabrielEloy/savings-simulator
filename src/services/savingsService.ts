import LOCAL_STORAGE from "constants/localStorageValues";
import ISavingCard from "interfaces/ISavingCard";
import { savingsInitialValues } from "constants/Initialvalues";

export const getSavings = (): ISavingCard[] => {
  const values = localStorage.getItem(LOCAL_STORAGE.SAVINGS);

  if (values) return JSON.parse(values);

  
  localStorage.setItem(
    LOCAL_STORAGE.SAVINGS,
    JSON.stringify(savingsInitialValues)
  );
  return savingsInitialValues;
};

export const updateSavings = (savings: ISavingCard[]): void => 
  localStorage.setItem(LOCAL_STORAGE.SAVINGS, JSON.stringify(savings));