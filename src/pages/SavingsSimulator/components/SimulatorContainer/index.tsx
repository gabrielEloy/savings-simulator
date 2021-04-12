import { useState, useEffect } from "react";
import Wrapper from "./styles";
import Subtitle from "components/typography/Subtitle";
import Caption from "components/typography/Caption";
import House from "assets/icons/House";
import HeadingSmall from "components/typography/HeadingSmall";
import Paragraph from "components/typography/Paragraph";
import CurrencyInput from "components/CurrencyInput";
import DollarSign from "assets/icons/DollarSign";
import { DateSelect } from "components/DateSelect";
import PillButton from "components/PillButton";
import { getStringDate } from "helpers/dates";
import { numberCurrencyToString } from "helpers/currency";
import { calculateMonthlyValue } from "helpers/math";
import { FUTURE_MONTHS, MONEY_GOAL } from "constants/Initialvalues";
import { useHistory, useParams } from "react-router-dom";
import useSavings from "hooks/useSavings";

interface Props {}

const SimulatorContainer = (props: Props) => {
  const history = useHistory();
  const params = useParams();
  const [value, setValue] = useState(MONEY_GOAL);
  const [monthsAhead, setMonthsAhead] = useState(FUTURE_MONTHS);

  const {editSavings, getSavingById} = useSavings();

  //@ts-ignore
  const saving = getSavingById(params.id)

  useEffect(() => {
    if(saving?.value && saving?.monthsAhead){
      setValue(saving.value)
      setMonthsAhead(saving.monthsAhead)
    }
  }, [saving])

  

  const handleMonthsAhead = (value: number) => setMonthsAhead(value);
  const handleValue = (value: number) => setValue(value);

  const monthlyAmount = numberCurrencyToString(
    calculateMonthlyValue(monthsAhead, value)
  );

  const handleSaveGoal = () => {
    //@ts-ignore
    console.log({ id:params.id, value, monthsAhead })
    //@ts-ignore
    editSavings({ id:params.id, value, monthsAhead })
    history.push('/');
  }
  return (
    <Wrapper>
      <div className="simulator-container">
        <div className="title">
          <House width={80} height={80} aria-label="house icon" />
          <div className="text">
            <HeadingSmall className="header-text">Buy a house</HeadingSmall>
            <Paragraph>Saving goal</Paragraph>
          </div>
        </div>
        <div className="data-inputs">
          <CurrencyInput
            className="total"
            preffix={<DollarSign aria-label="$" />}
            label="Total amount"
            placeholder="insert the desired value"
            value={value}
            handleValue={handleValue}
          />
          <DateSelect
            monthsAhead={monthsAhead}
            label="Reach goal by"
            handleMonthsAhead={handleMonthsAhead}
            className="months"
            tabIndex={0}
            disableLeftArrow={monthsAhead <= 1}
          />
        </div>
        <div className="monthly-amount-container">
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
          <PillButton onClick={handleSaveGoal}>Confirm</PillButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default SimulatorContainer;
