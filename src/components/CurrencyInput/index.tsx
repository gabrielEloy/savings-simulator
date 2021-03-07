import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import defaultMaskOptions from "constants/defaultMaskOptions";
import { stringCurrenctyToNumber } from "helpers/currency";
import IMaskOptions from "interfaces/IMaskOptions";
import Description from "components/typography/Description";
import CurrencyInputWrapper from "./styles";

interface ICurrencyInput extends React.InputHTMLAttributes<HTMLInputElement> {
  maskOptions?: IMaskOptions;
  preffix: JSX.Element;
  label?: string;
  value: number;
  handleValue: (value: number) => void;
}

const CurrencyInput = ({
  value,
  label,
  preffix,
  maskOptions,
  handleValue,
  ...inputProps
}: ICurrencyInput) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  const handleOnChange = (e: any) => {
    const number = stringCurrenctyToNumber(e.target.value)
    handleValue(number)
  };

  return (
    <CurrencyInputWrapper>
      {label && <Description className="label">{label}</Description>}
      <div className="input-container">
        <div className="preffix-container">{preffix}</div>
        <MaskedInput
          onChange={handleOnChange}
          value={value || ''}
          mask={currencyMask}
          {...inputProps}
        />
      </div>
    </CurrencyInputWrapper>
  );
};

export default CurrencyInput;
