import {MortgageConstants} from './../Actions/actions'

const initialState = {
    totalAmount: 200000,
    interestRate: 0.05,
    totalDuration: 30,
}

export default function mortgageCalcReducer(state = initialState, action){
    switch(action.type){
        case MortgageConstants.UPDATE_STARTING_AMOUNT:
            return{
                ...state, 
                totalAmount: action.payload.mortgageAmount,       
            };
         case MortgageConstants.UPDATE_INTEREST_RATE:
            return{
                    ...state, 
                    interestRate: action.payload.mortgageInterestRate
                };       
        case MortgageConstants.UPDATE_TOTAL_DURATION:
            return{
                    ...state, 
                    totalDuration: action.payload.mortgageDuration
                };
        default:
            return state;
    }
}