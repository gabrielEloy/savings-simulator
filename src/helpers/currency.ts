import INumberCurrencyToString from 'interfaces/INumberCurrencyToString';

const removeString = (value: string, removedString: string) => {
    let  newValue = '';

    for(let char of value){
        if(char !==  removedString){
            newValue += char;
        }
    }

    return newValue;
}

export const stringCurrenctyToNumber = (value: string, options?: any) => parseFloat(removeString(value, ','));

export const numberCurrencyToString = (value: number = 0, options: INumberCurrencyToString = {}) => {
        const { targetLanguage = 'en-US' }  = options;
    
    const localization = new Intl.NumberFormat(targetLanguage, { style: 'currency', currency: 'usd', ...options});
    return localization.format(value)
}