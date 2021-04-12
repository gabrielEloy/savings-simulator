import SavingsListWrapper, { GridWrapper } from "./SavingsListStyles";
import HeadingSmall from "components/typography/HeadingSmall";
import { useHistory } from "react-router-dom";
import useSavings from "hooks/useSavings";
import { SavingCard } from "components/SavingCard";
import ISavingCard from "interfaces/ISavingCard";

const SavingsList = () => {
  const history = useHistory();
  const { savings } = useSavings();

  const handleGoalNavigation = ({id}: ISavingCard) => {
    history.push(`/goal/${id}`);
  };
  return (
    <SavingsListWrapper>
      <HeadingSmall className="title-text" size="medium">
        Here are your saving goals
      </HeadingSmall>
      <GridWrapper>
        {savings.map((item, index) => (
          <SavingCard onClick={handleGoalNavigation} info={item} />
        ))}
      </GridWrapper>
    </SavingsListWrapper>
  );
};

export default SavingsList;
