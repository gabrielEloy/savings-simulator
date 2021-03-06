export default interface IMaskOptions {
  suffix?: string;
  includeThousandsSeparator?: boolean;
  thousandsSeparatorSymbol?: string;
  allowDecimal?: boolean;
  decimalSymbol?: string;
  decimalLimit?: number;
  allowNegative?: boolean;
  allowLeadingZeroes?: boolean;
}
