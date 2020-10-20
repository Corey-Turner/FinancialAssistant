import {MortgageConstants} from './actions'

const initialState = {
    propertyValue: 200000,
    interestRate: 5,
    totalDuration: 30,
    monthlyPayment: 0,
    totalPayment: 0,
    totalInterest: 0,
    monthlyHOA: 100,
    propertyTaxRate: 1.5,
    annualInsuranceCost: 1200,
}

export default function mortgageCalcReducer(state = initialState, action){
    switch(action.type){
        case MortgageConstants.UPDATE_PROPERTY_VALUE:
            return{
                ...state, 
                propertyValue: action.payload.propertyValue,       
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
            console.log(state)
            return {
                ...state,
                monthlyPayment: (state.propertyValue * ((state.interestRate/100)/12) / (1 - Math.pow(1 + ((state.interestRate/100)/12), -(state.totalDuration*12)))).toFixed(2)

            }
        case MortgageConstants.UPDATE_TOTAL_INTEREST:
            return {
                ...state,
                totalInterest: (state.totalPayment - state.propertyValue).toFixed(2)
            }
        case MortgageConstants.UPDATE_MONTHLY_HOA:
            return{
                ...state, 
                monthlyHOA: action.payload.monthlyHOA,       
            };
        case MortgageConstants.UPDATE_PROPERTY_TAX_RATE:
            return{
                ...state, 
                propertyTaxRate: action.payload.propertyTaxRate,       
            };
        case MortgageConstants.UPDATE_ANNUAL_INSURANCE_COST:
            return{
                ...state, 
                annualInsuranceCost: action.payload.annualInsuranceCost,       
            };
        default:
            return state;
    }
}