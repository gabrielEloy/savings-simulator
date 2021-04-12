export default interface ISavingCard {
  id: number | string;
  title: string;
  hasGoal: boolean;
  value?: number;
  monthsAhead?: number;
}
