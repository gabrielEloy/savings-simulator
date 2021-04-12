import React from 'react';
import Caption from "components/typography/Caption";
import Paragraph from "components/typography/Paragraph";
import THEME from "themes/main";
import GoalPreviewWrapper from "./GoalPreviewStyles";
import { getStringDate } from "helpers/dates";
import { numberCurrencyToString } from "helpers/currency";

interface Props {
  monthsAhead?: number;
  value?: number;
  className?: string;
}

export const GoalPreview = ({ value, monthsAhead, className }: Props) => {
  const formattedReachGoal = monthsAhead ? getStringDate(monthsAhead) : "";
  const formattedValue = numberCurrencyToString(value);
  return (
    <GoalPreviewWrapper className={className}>
      <div className="goal-amount">
        <Caption className="title" fontSize="12px" color={THEME.blueGrayLight}>
          Goal Amount
        </Caption>
        <Paragraph fontWeight="semi-bold" color={THEME.bradColorSecundary}>
          {formattedValue}
        </Paragraph>
      </div>
      <div className="reach-goal">
        <Caption className="title" fontSize="12px" color={THEME.blueGrayLight}>
          Reach goal by
        </Caption>
        <Paragraph fontWeight="semi-bold" color={THEME.bluegrayDark}>
          {formattedReachGoal}
        </Paragraph>
      </div>
    </GoalPreviewWrapper>
  );
};
