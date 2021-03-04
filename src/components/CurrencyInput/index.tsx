import React from "react";
import MaskedInput from "react-text-mask";
import createNumberMask from "text-mask-addons/dist/createNumberMask";

interface ICurrencyInput extends React.InputHTMLAttributes<HTMLInputElement>{
  maskOptions?: {
    prefix?: string,
    suffix?: string,
    includeThousandsSeparator?: boolean,
    thousandsSeparatorSymbol?: string,
    allowDecimal?: boolean,
    decimalSymbol?: string,
    decimalLimit?: number,
    allowNegative?: boolean,
    allowLeadingZeroes?: boolean,
  };
}

const defaultMaskOptions = {
  prefix: "$",
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false,
};

const CurrencyInput = ({ maskOptions, ...inputProps }: ICurrencyInput) => {
  const currencyMask = createNumberMask({
    ...defaultMaskOptions,
    ...maskOptions,
  });

  return <MaskedInput mask={currencyMask} {...inputProps} />;
};

CurrencyInput.defaultProps = {
  inputMode: "numeric",
  maskOptions: {},
};

export default CurrencyInput;
