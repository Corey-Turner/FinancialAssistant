import {TaxConstants, FEDERAL_TAX_INFORMATION,FEDERAL_TAX_FILING_STATUSES} from './actions'

const initialState = {
    salaries: [65000, 30000],
    additionalIncome: [0, 0],
    filingStatus: [FEDERAL_TAX_INFORMATION.filingStatus.Single, FEDERAL_TAX_INFORMATION.filingStatus.Single],
    taxesOwed: [0, 0],
    retirementContributions: [0, 0],
    deductions: [{
        retirement: 0,
        studentLoan: 0,
        movingExpense: 0,
        educatorExpense: 0,
        hsa: 0,
        other: 0,
    },
    {
        retirement: 0,
        studentLoan: 0,
        movingExpense: 0,
        educatorExpense: 0,
        hsa: 0,
        other: 0,
    },
    {
        // Additional Income Bracket
        // Not currently implemented but this could be used to add additional Incomes
    }]
}

const getTotalDeductions = (deductions, index) => {
    const retirement = isNaN(deductions[index].retirement) ? 0 : deductions[index].retirement
    const movingExpense = isNaN(deductions[index].movingExpense) ? 0 : deductions[index].movingExpense
    const hsa = isNaN(deductions[index].hsa) ? 0 : deductions[index].hsa
    const other = isNaN(deductions[index].other) ? 0 : deductions[index].other
    const studentLoan = isNaN(deductions[index].studentLoan) ? 0 : deductions[index].studentLoan
    const educatorExpense = isNaN(deductions[index].educatorExpense) ? 0 : deductions[index].educatorExpense    
    let runningSum = retirement + movingExpense + hsa + other

    if(studentLoan <= 2000)
    {
        runningSum  = runningSum + studentLoan
    }
    else if (studentLoan <= 4000)
    {
        runningSum  = runningSum + 2000 + (.25 * (studentLoan - 2000))
    }
    else{
        console.log("IS NANA")
        runningSum  = runningSum + 2500
    }

    
    if(educatorExpense <= 250)
    {
        runningSum  = runningSum + educatorExpense
    }
    else
    {
        runningSum  = runningSum + 250
    }    
    return runningSum
}

const calculateTaxesOwed = (salaries, additionalIncome, status, deductions) => {
    let statusIsJoint = false
    status.forEach(val => {statusIsJoint = (statusIsJoint || val.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint)})
    
    if(statusIsJoint)
    {
        let sum = 0
        let totalDeductions = 0
        salaries.forEach((val, index) => {
            val = isNaN(val) ? 0 : val
            sum = sum + val
            totalDeductions = totalDeductions + getTotalDeductions(deductions, index)
        })
        salaries = [sum]
        deductions = [totalDeductions]
    }
    const arr = salaries.map((val, index) => {
        const currentStatus = status[index]
        val = isNaN(val) ? 0 : val
        let adtlIncome = isNaN(additionalIncome[index]) ? 0 : additionalIncome[index]
        let taxesToPay = 0, bracketIndex = 0, lower = 0

        const taxableIncome = val + adtlIncome - currentStatus.Witholding - getTotalDeductions(deductions, index)
        currentStatus["Bracket"].forEach(bracketVal => {
            let upper = bracketVal <= taxableIncome ? bracketVal : taxableIncome
            
            if(upper <= lower) 
            {
                return
            }

            taxesToPay = taxesToPay + (FEDERAL_TAX_INFORMATION.Rate[bracketIndex] * (upper - lower) / 100)            
            lower = upper + 1

            bracketIndex = bracketIndex + 1
        })
        if(taxableIncome > lower)
        {
            taxesToPay = taxesToPay + (FEDERAL_TAX_INFORMATION.Rate[bracketIndex] * (taxableIncome - lower) / 100)
        }
        return parseFloat(taxesToPay)
    })
    if(arr.length < 2)
    {
        return[...arr, 0]
    }
    return arr;
}

const updateArray = (array, index, value) => {
    return array.map( (val, currentIndex) => {
        if(index === currentIndex)
        {
            return value
        }
        return val
    })
}

const updateDeductions = (deduction, index, type, value) => {
        let newVal = deduction[index]
        newVal[type] = value        
        return updateArray(deduction, index, newVal)
}

const updateFilingStatus = (filingStatus, index, value) => {

    //determine if we need to override the Married Filing Joint Lock
    let unlockFilingJoint = false
    filingStatus.forEach(val => {
        unlockFilingJoint = val.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint || val.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle
    })

    
    if(value.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint || value.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle)
    {
        // fills filing status with status' of Married Filing Joint
        return filingStatus.map(val => {return value})
    }
    else if(unlockFilingJoint)
    {
        //Remove Married Filing Joint from both, array[index] becomes the incoming value, all other indecies become Single Filing Status
        return updateArray([FEDERAL_TAX_INFORMATION.filingStatus.Single, FEDERAL_TAX_INFORMATION.filingStatus.Single], index, value)
    }
    else
    {
        return updateArray(filingStatus, index, value)
    }
}

export default function taxesReducer(state = initialState, action){
    switch(action.type){
        case TaxConstants.UPDATE_SALARIES:
            return{
                ...state, 
                salaries: updateArray(state.salaries, action.payload.index, parseFloat(action.payload.value)),       
            };
        case TaxConstants.UPDATE_ADDITIONAL_INCOME:
            return{
                ...state, 
                additionalIncome: updateArray(state.additionalIncome, action.payload.index, parseFloat(action.payload.value)),       
            };
        case TaxConstants.UPDATE_IRA_CONTRIBUTIONS:
            return{
                ...state, 
                retirementContributions: updateArray(state.deductions, action.payload.index, parseFloat(action.payload.value)),       
            };
        case TaxConstants.UPDATE_DEDUCTIONS:
            return{
                ...state, 
                retirementContributions: updateDeductions(state.deductions, action.payload.index, action.payload.deductionType, parseFloat(action.payload.value)),       
            };    
        case TaxConstants.UPDATE_FILING_STATUS:
            return{
                ...state, 
                filingStatus: updateFilingStatus(state.filingStatus, action.payload.index, action.payload.value),       
            };
        case TaxConstants.UPDATE_TAXES_OWED:
            return{
                ...state, 
                taxesOwed: calculateTaxesOwed(state.salaries, state.additionalIncome, state.filingStatus, state.retirementContributions)
            };

        default:
            return state;
    }
}