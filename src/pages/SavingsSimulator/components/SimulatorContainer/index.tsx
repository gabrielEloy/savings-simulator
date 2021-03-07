import { useState } from "react";
import Wrapper from "./styles";
import Subtitle from "../../../../components/typography/Subtitle";
import Caption from "../../../../components/typography/Caption";
import houseIcon from "../../../../assets/icons/house.svg";
import HeadingSmall from "../../../../components/typography/HeadingSmall";
import Paragraph from "../../../../components/typography/Paragraph";
import CurrencyInput from "../../../../components/CurrencyInput";
import dollarSign from "../../../../assets/icons/dollar-sign.svg";
import { DateSelect } from "../../../../components/DateSelect";
import PillButton from "../../../../components/PillButton";
import { getStringDate } from "../../../../helpers/dates";
import { numberCurrencyToString } from "../../../../helpers/currency";
import { calculateMonthlyValue } from "../../../../helpers/math";

interface Props {}

const SimulatorContainer = (props: Props) => {
  const [value, setValue] = useState(25000);
  const [monthsAhead, setMonthsAhead] = useState(10);

  const handleMonthsAhead = (value: number) => setMonthsAhead(value);
  const handleValue = (value: number) => setValue(value);

  const monthlyAmount = numberCurrencyToString(
    calculateMonthlyValue(monthsAhead, value)
  );
  return (
    <Wrapper>
      <div className="simulator-container">
        <div className="title">
          <img src={houseIcon} alt="house icon" />
          <div className="text">
            <HeadingSmall className="header-text">Buy a house</HeadingSmall>
            <Paragraph>Saving goal</Paragraph>
          </div>
        </div>
        <div className="data-inputs">
          <CurrencyInput
            className="total"
            preffix={<img src={dollarSign} alt="Dollar sign" />}
            label="Total amount"
            value={value}
            handleValue={handleValue}
          />
          <DateSelect
            monthsAhead={monthsAhead}
            label="Reach goal by"
            handleMonthsAhead={handleMonthsAhead}
            className="months"
            tabIndex={0}
          />
        </div>
        <div className="montly-amout-container">
          <div className="values">
            <Subtitle>Monthly amount</Subtitle>
            <HeadingSmall color="#0079FF" size="medium">
              {monthlyAmount}
            </HeadingSmall>
          </div>
          <div className="desc">
            <Caption>
              You’re planning <strong>{monthsAhead} monthly deposits</strong> to
              reach your <strong>{monthlyAmount}</strong> goal by{" "}
              <strong>{getStringDate(monthsAhead)}</strong>
            </Caption>
          </div>
        </div>
        <div className="confirm-button-container">
          <PillButton>Confirm</PillButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default SimulatorContainer;
