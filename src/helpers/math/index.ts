export const calculateMonthlyValue = (months: number, totalValue?: number) => {
    if(months <= 0){
        throw new TypeError('months must be a number bigger than zero');
    }

    return totalValue ? totalValue/months : 0
}