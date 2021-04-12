import ISavingCard from "interfaces/ISavingCard";
import SavingCardStyles from "./SavingCardStyles";
import Paragraph from "components/typography/Paragraph";
import THEME from "themes/main";
import PillButton from "components/PillButton";
import { GoalPreview } from "components/GoalPreview";
import SquareButton from "components/SquareButton";
import Edit from "assets/icons/Edit";
import { IconDictionary } from "helpers/Icons";


interface Props {
  info: ISavingCard;
  onClick: (info: ISavingCard) => void;
}

export const SavingCard = ({
  info,
  onClick,
}: Props) => {
  const { monthsAhead, value, title } = info;

  const handleClick = () => {
    onClick(info);
  };

  const hasValues = monthsAhead && value;

  /* @ts-ignore */
  const Icon = IconDictionary[info.title];
  return (
    <SavingCardStyles>
      <div className={`saving-desc ${hasValues ? 'has-goal' : ''}`}>
        {/*@ts-ignore*/}
        <div className="icon">{Icon}</div>
        <Paragraph color={THEME.bluegrayDark} fontWeight="semi-bold">
          {title}
        </Paragraph>
      </div>
      {hasValues ? (
        <>
          <GoalPreview className="goal-preview" value={value} monthsAhead={monthsAhead} />
          <SquareButton onClick={handleClick} className="edit-goal-button">Edit Goal <Edit className="edit"/></SquareButton>
        </>
      ) : (
        <PillButton onClick={handleClick} className="setup-goal-button">
          Setup Goal
        </PillButton>
      )}
    </SavingCardStyles>
  );
};
