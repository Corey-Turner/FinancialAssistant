import {TaxConstants, FEDERAL_TAX_INFORMATION,FEDERAL_TAX_FILING_STATUSES} from './actions'

const initialState = {
    annualSalary: [65000, 32000],
    filingStatus: FEDERAL_TAX_INFORMATION.filingStatus.Single,
    taxesOwed: 0
}

calculateTaxesOwed = (FederalTaxes, salaries, bracketString) => {
    if(bracketString == FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint)
        salaries = [sum(salaries)]
    output = []
    salaries.map = annualSalary => {
        taxableIncome = annualSalary - FederalTaxes.filingStatus[bracketString]["Witholding"]
        let stillTaxable = taxableIncome
        let TaxesDue = 0
        let actualMax = 0
        i = 0
    
        while(stillTaxable >= 0){
            if(i >= len(FederalTaxes.filingStatus[bracketString]["Bracket"]) - 1)
                actualMax = taxableIncome
            else if(stillTaxable > FederalTaxes.filingStatus[bracketString]["Bracket"][i+1]-1)
                actualMax = FederalTaxes.filingStatus[bracketString]["Bracket"][i+1]-1
            else
                actualMax = taxableIncome

            TaxesDue = TaxesDue + (0.01 * FederalTaxes['Rate'][i] * (actualMax - FederalTaxes[bracketString]["Bracket"][i]) )
            stillTaxable = stillTaxable - actualMax
            i = i + 1
        }
        output.append(TaxesDue)
    }
    return output
}

export default function taxesReducer(state = initialState, action){
    switch(action.type){
        case TaxConstants.UPDATE_ANNUAL_SALARY_VALUE:
            return{
                ...state, 
                annualSalary: action.payload.annualSalaryValue,       
            };
        case TaxConstants.UPDATE_FILING_STATUS:
            return{
                ...state, 
                filingStatus: action.payload.filingStatus,       
            };
        case TaxConstants.UPDATE_TAXES_OWED:
            return{
                ...state, 
                taxesOwed: calculateTaxesOwed()
            };

        default:
            return state;
    }
}