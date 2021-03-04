import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";
import CurrencyInputWrapper from './styles';

interface ICurrencyInput extends React.InputHTMLAttributes<HTMLInputElement>{
  maskOptions?: {
    suffix?: string,
    includeThousandsSeparator?: boolean,
    thousandsSeparatorSymbol?: string,
    allowDecimal?: boolean,
    decimalSymbol?: string,
    decimalLimit?: number,
    allowNegative?: boolean,
    allowLeadingZeroes?: boolean,
  };
  preffix: JSX.Element;
}

const defaultMaskOptions = {
  prefix: "", //I explicitly remove the library's custom preffix because I'm implementing my  own
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const CurrencyInput = ({ preffix, maskOptions, ...inputProps }: ICurrencyInput) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  
  
  return (
    <CurrencyInputWrapper>
      <div className="preffix-container">
        {preffix}
      </div>
      <MaskedInput mask={currencyMask} {...inputProps} />
    </CurrencyInputWrapper>
  )
};

CurrencyInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

export default CurrencyInput;
