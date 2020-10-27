import {TaxConstants, FEDERAL_TAX_INFORMATION,FEDERAL_TAX_FILING_STATUSES} from './actions'

const initialState = {
    primarySalary: 665000,
    secondarySalary: 100,
    filingStatus: FEDERAL_TAX_INFORMATION.filingStatus.Single,
    taxesOwed: 0
}

const calculateTaxesOwed = (salaries, status, additionalDeductions) => {
    if(status.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint)
    {
        let sum = 0
        salaries.map(val => {
            sum = sum + val
            return sum
        })
        salaries = [sum]
    }

    const arr = salaries.map(val => {
        const taxableIncome = val - status.Witholding - additionalDeductions
        let taxesToPay = 0, bracketIndex = 0, lower = 0

        status["Bracket"].map(bracketVal => {
            let upper = bracketVal <= taxableIncome ? bracketVal : taxableIncome
            
            if(upper <= lower) 
            {
                return 0
            }

            taxesToPay = taxesToPay + (FEDERAL_TAX_INFORMATION.Rate[bracketIndex] * (upper - lower) / 100)            
            lower = upper + 1

            bracketIndex = bracketIndex + 1
            return 0
        })
        if(taxableIncome > lower)
        {
            taxesToPay = taxesToPay + (FEDERAL_TAX_INFORMATION.Rate[bracketIndex] * (taxableIncome - lower) / 100)
        }
        return taxesToPay
    })
    console.log(arr)
    return arr;
}

export default function taxesReducer(state = initialState, action){
    switch(action.type){
        case TaxConstants.UPDATE_PRIMARY_SALARY:
            return{
                ...state, 
                primarySalary: action.payload.primarySalaryValue,       
            };
        case TaxConstants.UPDATE_SECONDARY_SALARY:
            return{
                ...state, 
                secondarySalary: action.payload.secondarySalaryValue,       
            };
        case TaxConstants.UPDATE_FILING_STATUS:
            return{
                ...state, 
                filingStatus: action.payload.filingStatus,       
            };
        case TaxConstants.UPDATE_TAXES_OWED:
            return{
                ...state, 
                taxesOwed: calculateTaxesOwed([state.primarySalary, state.secondarySalary], state.filingStatus, 0)
            };

        default:
            return state;
    }
}