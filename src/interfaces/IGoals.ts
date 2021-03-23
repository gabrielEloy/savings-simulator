export default interface IGoals {
    id: number;
    title: string;
    //TODO: mudar isso pra jsx ou o tipo escolhido
    icon: string
    data?: {
        monthsAhead: number;
        savingsGoal: number;
    }
}