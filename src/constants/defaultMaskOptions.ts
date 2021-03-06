const defaultMaskOptions = {
  prefix: "", //I explicitly remove the library's custom preffix because I'm implementing my own
  suffix: "",
  includeThousandsSeparator: true,
  thousandsSeparatorSymbol: ",",
  allowDecimal: true,
  decimalSymbol: ".",
  decimalLimit: 2,
  allowNegative: false,
  allowLeadingZeroes: false,
  integerLimit: 9,
};

export default defaultMaskOptions;
