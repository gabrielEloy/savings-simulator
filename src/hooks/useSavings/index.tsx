import { useEffect, useState } from "react";
import { getSavings } from "services/savingsService";
import ISavingCard from "interfaces/ISavingCard";
import { updateSavings } from "services/savingsService";

interface IEditSavings {
  id: string | number;
  value: number;
  monthsAhead: number;
}

function useSavings() {
  const [savings, setSavings] = useState<ISavingCard[]>([]);

  useEffect(() => {
    const fetchedSavings = getSavings();
    setSavings(fetchedSavings);
  }, []);

  function editSavings({ id, value, monthsAhead }: IEditSavings) {
    const editedId = savings.findIndex((saving) => String(saving.id) === id);

    if (editedId === -1) {
      throw new Error("the ID you're trying to edit does not exist");
    }

    const editedSaving = {
      ...savings[editedId],
      value,
      monthsAhead,
    };
    const editedSavings = [...savings];
    
    editedSavings[editedId] = editedSaving;
    updateSavings(editedSavings);
    setSavings(editedSavings);
  }

  function getSavingById(id: string){
    return savings.find(s => String(s.id) === id);
  }

  return { savings, editSavings, getSavingById };
}

export default useSavings;
