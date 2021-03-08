import { useRef } from "react";
import DateSelectWraper from "./styles";
import Description from "components/typography/Description";
import Paragraph from "components/typography/Paragraph";
import { getStringDate } from "helpers/dates";
import ChevronRight from 'assets/icons/ChevronRight';
import ChevronLeft from 'assets/icons/ChevronLeft';
import useKeyPress from 'hooks/useKeyPress'

interface Props extends React.HTMLAttributes<HTMLElement> {
  monthsAhead: number;
  handleMonthsAhead: (monthsAhead: number) => void;
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  label?: string;
}

export const DateSelect = ({
  label,
  monthsAhead,
  handleMonthsAhead,
  disableLeftArrow = false,
  disableRightArrow = false,
  ...containerProps
}: Props) => {
  const leftArrowButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;
  const rightArrowButtonRef = useRef() as React.MutableRefObject<HTMLButtonElement>;

  useKeyPress('ArrowRight', () => handleArrowKeys('ArrowRight'));
  useKeyPress('ArrowLeft', () => handleArrowKeys('ArrowLeft'));

  const handleDateIncrement = () => {
    handleMonthsAhead(monthsAhead + 1);
  };
  const handleDateDecrement = () => {
    handleMonthsAhead(monthsAhead - 1);
  };

  const handleArrowKeys = (key: string) => {
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


  const [month, year] = getStringDate(monthsAhead).split(" ");
  return (
    <DateSelectWraper {...containerProps}>
      <div className="label">
        {label && <Description className="label">{label}</Description>}
      </div>
      <div className="date-selector-content">
        <button
          ref={leftArrowButtonRef}
          disabled={disableLeftArrow}
          onClick={handleDateDecrement}
          className="controls"
          >
          <ChevronLeft aria-label="arrow-left" name="chevron-left"/>
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
          disabled={disableRightArrow}
        >
          <ChevronRight aria-label="arrow-right" name="chevron-left"/>
        </button>
      </div>
    </DateSelectWraper>
  );
};
