import INumberCurrencyToString from 'interfaces/INumberCurrencyToString';

export const stringCurrenctyToNumber = (value: string, options?: any) => parseFloat(value.replaceAll(',', ''));

export const numberCurrencyToString = (value: number = 0, options: INumberCurrencyToString = {}) => {
        const { targetLanguage = 'en-US' }  = options;
    
    const localization = new Intl.NumberFormat(targetLanguage, { style: 'currency', currency: 'usd', ...options});
    return localization.format(value)
}