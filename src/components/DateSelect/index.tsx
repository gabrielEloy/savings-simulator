import { useRef } from "react";
import DateSelectWraper from "./styles";
import Description from "../typography/Description";
import Paragraph from "../typography/Paragraph";
import { getStringDate } from "../../helpers/dates";
import ChevronRight from '../../assets/icons/ChevronRight';
import ChevronLeft from '../../assets/icons/ChevronLeft';

interface Props extends React.HTMLAttributes<HTMLElement> {
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
  const leftArrowButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const rightArrowButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  const handleDateIncrement = () => {
    handleMonthsAhead(monthsAhead + 1);
  };
  const handleDateDecrement = () => {
    handleMonthsAhead(monthsAhead - 1);
  };

  const handleArrowKeys = ({ key }: React.KeyboardEvent<HTMLInputElement>) => {
    const mappedKeyboardActions: {[key: string]: React.MutableRefObject<HTMLButtonElement>} = {
      'ArrowLeft': leftArrowButtonRef,
      'ArrowRight': rightArrowButtonRef
    }
    
    const targetDOMNode = mappedKeyboardActions[key]

    if(targetDOMNode){
      targetDOMNode.current.focus();
      targetDOMNode.current.click();
    }
  };

  const composedKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (containerProps.onKeyDown) {
      containerProps.onKeyDown(event);
    }
    handleArrowKeys(event);
  };

  const [month, year] = getStringDate(monthsAhead).split(" ");
  return (
    <DateSelectWraper {...containerProps} onKeyDown={composedKeyPress}>
      <div className="label">
        {label && <Description className="label">{label}</Description>}
      </div>
      <div className="date-selector-content">
        <button
          ref={leftArrowButtonRef}
          disabled={monthsAhead <= 1}
          onClick={handleDateDecrement}
          className="controls"
          >
          <ChevronLeft aria-labelledby="arrow left"/>
        </button>
        <div className="input">
          <Paragraph color="#1E2A32" fontWeight="semi-bold">
            {month}
          </Paragraph>
          <Paragraph>{year}</Paragraph>
        </div>
        <button
          ref={rightArrowButtonRef}
          onClick={handleDateIncrement}
          className="controls"
        >
          <ChevronRight aria-labelledby="arrow right"/>
        </button>
      </div>
    </DateSelectWraper>
  );
};
