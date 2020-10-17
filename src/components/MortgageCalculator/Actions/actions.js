
export const MortgageConstants = {
    UPDATE_STARTING_AMOUNT: 'UPDATE_STARTING_AMOUNT',
    UPDATE_INTEREST_RATE: 'MORTGAGE_UPDATE_INTEREST_RATE',
    UPDATE_TOTAL_DURATION: 'MORTGAGE_UPDATE_TOTAL_DURATION'
}

export function updateStartingAmount(value){
    return{
        type: MortgageConstants.UPDATE_STARTING_AMOUNT,
        payload: {
            mortgageAmount: value
        }
    }
}
export function updateInterestRate(value){
    return{
        type: MortgageConstants.UPDATE_INTEREST_RATE,
        payload: {
            interestRate: value
        }
    }
}
export function updateTotalDuration(value){
    return{
        type: MortgageConstants.UPDATE_TOTAL_DURATION,
        payload: {
            totalDuration: value
        }
    }
}

export const mortgageActions = 
{
    updateStartingAmount: updateStartingAmount,
    updateInterestRate: updateInterestRate,
    updateTotalDuration: updateTotalDuration
}