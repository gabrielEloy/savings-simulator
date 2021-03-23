import IGoals from "interfaces/IGoals";
import { useEffect, useState } from "react";
import { getGoals } from "services/goalsService";

export default function useGoals() {
  const [goals, setGoals] = useState<IGoals[]>([] as IGoals[]);

  useEffect(() => {
    const fetchedGoals = getGoals();
    setGoals(fetchedGoals);
  }, [setGoals]);


  return {
      goals
  };
}
