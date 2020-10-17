
export const MortgageConstants = {
    UPDATE_STARTING_AMOUNT: 'UPDATE_STARTING_AMOUNT',
    UPDATE_INTEREST_RATE: 'MORTGAGE_UPDATE_INTEREST_RATE',
    UPDATE_TOTAL_DURATION: 'MORTGAGE_UPDATE_TOTAL_DURATION',
    UPDATE_MONTHLY_PAYMENTS: 'MORTGAGE_UPDATE_MONTHLY_PAYMENTS',
    UPDATE_TOTAL_PAYMENT: 'MORTGAGE_UPDATE_TOTAL_PAYMENT',
    UPDATE_TOTAL_INTEREST: 'MORTGAGE_UPDATE_TOTAL_INTEREST',
    UPDATE_MONTHLY_HOA: 'MORTGAGE_UPDATE_MONTHLY_HOA'

}

function updateStartingAmount(value){
    return{
        type: MortgageConstants.UPDATE_STARTING_AMOUNT,
        payload: {
            initialAmount: value
        }
    }
}
function updateInterestRate(value){
    return{
        type: MortgageConstants.UPDATE_INTEREST_RATE,
        payload: {
            interestRate: value
        }
    }
}
function updateTotalDuration(value){
    return{
        type: MortgageConstants.UPDATE_TOTAL_DURATION,
        payload: {
            totalDuration: value
        }
    }
}

function updateMonthlyPayments(){
    return{
        type: MortgageConstants.UPDATE_MONTHLY_PAYMENTS
    }
}

function updateTotalPayment(){
    return{
        type: MortgageConstants.UPDATE_TOTAL_PAYMENT
    }
}

function updateTotalInterest(){
    return{
        type: MortgageConstants.UPDATE_TOTAL_INTEREST
    }
}
function updateMonthlyHOA(value){
    return{
        type: MortgageConstants.UPDATE_MONTHLY_HOA,
        payload: {
            monthlyHOA: value
        }
    }
}
export const mortgageActions = 
{
    updateStartingAmount: updateStartingAmount,
    updateInterestRate: updateInterestRate,
    updateTotalDuration: updateTotalDuration,
    updateMonthlyPayments: updateMonthlyPayments,
    updateTotalPayment: updateTotalPayment,
    updateTotalInterest: updateTotalInterest,
    updateMonthlyHOA: updateMonthlyHOA

}