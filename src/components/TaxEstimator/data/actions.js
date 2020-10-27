
export const FEDERAL_TAX_FILING_STATUSES = {
    Single: 'Single',
    HeadOfHousehold: 'HeadOfHousehold',
    MarriedFilingJoint: 'MarriedFilingJoint',
    MarriedFilingSingle: 'MarriedFilingSingle',
}

export const FEDERAL_TAX_INFORMATION = {
    Rate: [10,12,22,24,32,35,37],
    filingStatus: {
        Single: {
        "Status": FEDERAL_TAX_FILING_STATUSES.Single,
        "Bracket" : [9875 , 40125 , 85525, 163300, 207350, 518400],
        "Witholding" : 12200
        },
        HeadOfHousehold:{
            "Status": FEDERAL_TAX_FILING_STATUSES.HeadOfHousehold,
            "Bracket" : [14100  , 53700  , 85500 , 163300, 207350, 518400],
            "Witholding" : 18350
        },
        MarriedFilingJoint:{
            "Status": FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint,
            "Bracket" : [19750 , 80250  , 171050, 326600, 414700 , 622050],
            "Witholding" : 24400
        },
        MarriedFilingSingle: {
            "Status": FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle,
            "Bracket" : [9875 , 40125 , 85525, 163300, 207350, 311025 ],
            "Witholding" : 12200
        }
    }
}


export const TaxConstants = {
    UPDATE_PRIMARY_SALARY: 'TAXES_UPDATE_PRIMARY_SALARY_VALUE',
    UPDATE_SECONDARY_SALARY: 'TAXES_UPDATE_SECONDARY_SALARY_VALUE',
    UPDATE_FILING_STATUS: 'TAXES_UPDATE_FILING_STATUS',
    UPDATE_TAXES_OWED: 'TAXES_UPDATE_TAXES_OWED'
}

function updatePrimarySalary(value){
    return{
        type: TaxConstants.UPDATE_PRIMARY_SALARY,
        payload: {
            primarySalaryValue: value
        }
    }
}

function updateSecondarySalary(value){
    return{
        type: TaxConstants.UPDATE_SECONDARY_SALARY,
        payload: {
            secondarySalaryValue: value
        }
    }
}

function updateFilingStatus(value){
    return{
        type: TaxConstants.UPDATE_FILING_STATUS,
        payload: {
            filingStatus: FEDERAL_TAX_INFORMATION.filingStatus[value]
        }
    }
}
function updateTaxesOwed(){
    return{
        type: TaxConstants.UPDATE_TAXES_OWED
    }
}

export const taxActions = 
{
    updatePrimarySalary: updatePrimarySalary,
    updateSecondarySalary: updateSecondarySalary,
    updateFilingStatus: updateFilingStatus,
    updateTaxesOwed: updateTaxesOwed,

}