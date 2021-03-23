import { GOALS } from 'constants/localStorageConstants';
import initialGoals from 'constants/initialValues/goals';
//tite: string
//Icon: JSX element
//data?: {
//  goalAmount: number;
//  monthsAhead: number   
//}

export const getGoals = () => {
    const persistedGoals = localStorage.getItem(GOALS);
    
    if(persistedGoals){
        return JSON.parse(persistedGoals);
    }

    localStorage.setItem(GOALS, JSON.stringify(initialGoals));
    return initialGoals;
}