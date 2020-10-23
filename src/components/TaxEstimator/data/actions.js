
export const FEDERAL_TAX_INFORMATION = {
    Rate: [10,12,22,24,32,35,37],
    filingStatus: {
        Single: {
        "Bracket" : [0, 9876 , 40126 , 85526, 163301, 207351, 518401],
        "Witholding" : 12200
        },
        HeadOfHousehold:{
            "Bracket" : [0, 14101  , 53701  , 85501 , 163301, 207351, 518401],
            "Witholding" : 18350
        },
        MarriedFilingJoint:{
            "Bracket" : [0, 19751 , 80251  , 171051, 326601, 414701 , 622051],
            "Witholding" : 24400
        },
        MarriedFilingSingle: {
            "Bracket" : [0, 9876 , 40126 , 85526, 163301, 207351, 311026 ],
            "Witholding" : 12200
        }
    }
}
export const FEDERAL_TAX_FILING_STATUSES = {
    Single: 'Single',
    HeadOfHousehold: 'HeadOfHousehold',
    MarriedFilingJoint: 'MarriedFilingJoint',
    MarriedFilingSingle: 'MarriedFilingSingle',
}

export const TaxConstants = {
    UPDATE_ANNUAL_SALARY_VALUE: 'TAXES_UPDATE_ANNUAL_SALARY_VALUE',
    UPDATE_FILING_STATUS: 'TAXES_UPDATE_FILING_STATUS',
    UPDATE_TAXES_OWED: 'TAXES_UPDATE_TAXES_OWED'
}

function updateAnnualSalary(value){
    return{
        type: TaxConstants.UPDATE_ANNUAL_SALARY_VALUE,
        payload: {
            annualSalaryValue: value
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
    updateAnnualSalary: updateAnnualSalary,
    updateFilingStatus: updateFilingStatus,
    updateTaxesOwed: updateTaxesOwed,

}