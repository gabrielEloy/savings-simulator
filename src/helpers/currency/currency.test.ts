import { stringCurrenctyToNumber, numberCurrencyToString } from 'helpers/currency';


describe('currency formet helpers', () => {
    describe('stringCurrenctyToNumber', () => {
        it("Should correctly convert a string that has ',' as its thousands separator", () => {
            const stringNumber = '123,234,214.24'
            const expectedResult = 123_234_214.24;

            expect(stringCurrenctyToNumber(stringNumber)).toEqual(expectedResult);
        });
        
    })
    describe('numberCurrencyToString', () => {
        it('Should correctly format a number to the default currency value', () => {
            const value = 92038409.23;

            const expectedResult = '$92,038,409.23'
            
            expect(numberCurrencyToString(value)).toEqual(expectedResult);
        })

        it('Should return formatting according to the provided locale', () => {
            const value = 3232123;
            const targetLanguage = 'pt-BR'

            const expectedResult = 'US$ 3,232,123.00'
            
            expect(numberCurrencyToString(value, { targetLanguage })).toEqual(expectedResult);
        })

        it('Should propagate Intl.numberFormat options', () => {
            const value = 3232123;

            const expectedResult = '3,232,123'
            
            expect(numberCurrencyToString(value, { style: 'decimal' })).toEqual(expectedResult);
        })
    })
})