import {MortgageConstants} from './../Actions/actions'

const initialState = {
    initialAmount: 200000,
    interestRate: 5,
    totalDuration: 30,
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    monthlyHOA: 0
}

export default function mortgageCalcReducer(state = initialState, action){
    switch(action.type){
        case MortgageConstants.UPDATE_STARTING_AMOUNT:
            return{
                ...state, 
                initialAmount: action.payload.initialAmount,       
            };
         case MortgageConstants.UPDATE_INTEREST_RATE:
            return{
                    ...state, 
                    interestRate: action.payload.interestRate
                };       
        case MortgageConstants.UPDATE_TOTAL_DURATION:
            return{
                    ...state, 
                    totalDuration: action.payload.totalDuration
                };
        case MortgageConstants.UPDATE_TOTAL_PAYMENT:
            return {
                ...state,
                totalPayment: (state.monthlyPayment*state.totalDuration*12).toFixed(2)
            }
        case MortgageConstants.UPDATE_MONTHLY_PAYMENTS:
            return {
                ...state,
                monthlyPayment: (state.initialAmount * ((state.interestRate/100)/12) / (1 - Math.pow(1 + ((state.interestRate/100)/12), -(state.totalDuration*12)))).toFixed(2)

            }
        case MortgageConstants.UPDATE_TOTAL_INTEREST:
            return {
                ...state,
                totalInterest: (state.totalPayment - state.initialAmount).toFixed(2)
            }
        case MortgageConstants.UPDATE_MONTHLY_HOA:
            return{
                ...state, 
                monthlyHOA: action.payload.monthlyHOA,       
            };
        default:
            return state;
    }
}