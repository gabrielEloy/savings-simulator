import { replaceAll } from 'helpers/string';



describe('string helpers', () => {
    it('Should return the same string when none of the replaced values is found inside the provided value', () => {
        const value = 'hello I am a test';
        const replaceMap = {'$': '!', ';': ':'};

        expect(replaceAll(value, replaceMap)).toEqual(value);
    });


    it('Should correctly replace multiple values at once', () => {
        const value = 'where are my vowels ?';
        const replaceMap = {'a': '','e': '','i': '','o': '','u': ''};

        const expectedValue = 'whr r my vwls ?'

        expect(replaceAll(value, replaceMap)).toEqual(expectedValue);
    })
})

