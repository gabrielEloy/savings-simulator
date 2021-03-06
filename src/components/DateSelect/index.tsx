import DateSelectWraper from "./styles";
import chevronLeft from "../../assets/icons/chevron-left.svg";
import chevronRight from "../../assets/icons/chevron-right.svg";
import Description from "../typography/Description";
import Paragraph from "../typography/Paragraph";
import { getStringDate } from "../../helpers/dates";
import { SyntheticEvent } from "react";

interface Props extends React.HTMLAttributes<HTMLElement>{
  label?: string;
  monthsAhead: number;
  handleMonthsAhead: (monthsAhead: number) => void;
}

export const DateSelect = ({
  label,
  monthsAhead,
  handleMonthsAhead,
  ...containerProps
}: Props) => {
  

  const handleDateIncrement = () => {
    handleMonthsAhead(monthsAhead + 1);
  };
  const handleDateDecrement = () => {
    handleMonthsAhead(monthsAhead - 1);
  };

  const handleArrowKeys = ({key}: React.KeyboardEvent<HTMLInputElement>) => {
    if(key === 'ArrowRight') return handleDateIncrement();
    if(key === 'ArrowLeft') return handleDateDecrement();
  }
  
  const composedKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if(containerProps.onKeyDown){
      containerProps.onKeyDown(event);
    }
    handleArrowKeys(event);
  }

  const [month, year] = getStringDate(monthsAhead).split(" ");
  return (
    <DateSelectWraper {...containerProps} onKeyDown={composedKeyPress}>
      <div className="label">
        {label && <Description className="label">{label}</Description>}
      </div>
      <div className="date-selector-content">
        <button
          disabled={monthsAhead <= 1}
          onClick={handleDateDecrement}
          className="controls"
        >
          <img src={chevronLeft} alt="arrow left" />
        </button>
        <div className="input">
          <Paragraph color="#1E2A32" fontWeight="semi-bold">
            {month}
          </Paragraph>
          <Paragraph>{year}</Paragraph>
        </div>
        <button onClick={handleDateIncrement} className="controls">
          <img src={chevronRight} alt="arrow right" />
        </button>
      </div>
    </DateSelectWraper>
  );
};
