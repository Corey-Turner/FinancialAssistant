import {TaxConstants, FEDERAL_TAX_INFORMATION,FEDERAL_TAX_FILING_STATUSES} from './actions'

const initialState = {
    totals: {
        withholdings: 0,
        additionalWithholdings: 0,
        taxesOwed: 0,
        taxReturn: 0
    },
    info: [
        {
            salary: 65000,
            additionalIncome: 0,
            filingStatus: FEDERAL_TAX_INFORMATION.filingStatus.Single,
            taxesOwed: 0,
            taxReturn: 0,
            withholdings: 0,
            additionalWithholdings: 0,
            deductions: {
                retirement: 0,
                studentLoan: 0,
                movingExpense: 0,
                educatorExpense: 0,
                hsa: 0,
                other: 0
            }
        },
        {
            salary: 30000,
            additionalIncome: 0,
            filingStatus: FEDERAL_TAX_INFORMATION.filingStatus.Single,
            taxesOwed: 0,
            taxReturn: 0,
            withholdings: 0,
            additionalWithholdings: 0,
            deductions: {
                retirement: 0,
                studentLoan: 0,
                movingExpense: 0,
                educatorExpense: 0,
                hsa: 0,
                other: 0
            }
        }
    ]
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

const combineDeductions = (deductions, index) => {
    let out = [{
        retirement: 0,
        movingExpense: 0,
        hsa: 0,
        other: 0,
        studentLoan: 0,
        educatorExpense: 0
    }];

    deductions.forEach(val => {
        out[0].retirement = out[0].retirement + (isNaN(val.retirement) ? 0 : val.retirement)
        out[0].movingExpense = out[0].movingExpense + (isNaN(val.movingExpense) ? 0 : val.movingExpense)
        out[0].hsa = out[0].hsa + (isNaN(val.hsa) ? 0 : val.hsa)
        out[0].other = out[0].other + (isNaN(val.other) ? 0 : val.other)
        out[0].studentLoan = out[0].studentLoan + (isNaN(val.studentLoan) ? 0 : val.studentLoan)
        out[0].educatorExpense = out[0].educatorExpense + (isNaN(val.educatorExpense) ? 0 : val.educatorExpense)
    })

    return out
}

//This logic should be revisited to become more efficient
const calculateTaxesOwed = (info) => {
    let statusIsJoint = false

    // there is definately better logic than this, but the tax logic was created with a multi list style data struct
    let salaries = info.map(val => {return val.salary})
    const additionalIncome = info.map(val => {return val.additionalIncome})
    const status = info.map(val => {return val.filingStatus})
    let deductions = info.map(val => {return val.deductions})

    info.forEach(val => {statusIsJoint = (statusIsJoint || val.filingStatus.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint)})
    if(statusIsJoint)
    {
        let salarySum = 0
        salaries.forEach((val) => {
            val = isNaN(val) ? 0 : val
            salarySum = salarySum + val
        })
        salaries = [salarySum]
        deductions = combineDeductions(deductions)
    }
    let arr = salaries.map((val, index) => {
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
        arr = [...arr, 0]
    }
    
    return updateMultipleUsersProperty(info, "taxesOwed", arr)
}

const calculateTaxReturn = (info) => {
    const values = info.map(val => {
        return((val.withholdings*12) - val.taxesOwed + val.additionalWithholdings)
    })
    return updateMultipleUsersProperty(info, "taxReturn", values)
}

const calculateTotals = (info) => {
    let out = {}
    out.withholdings = 0
    out.additionalWithholdings = 0
    out.taxesOwed = 0
    info.forEach(val => {
        out.withholdings = out.withholdings + val.withholdings
        out.additionalWithholdings = out.additionalWithholdings + val.additionalWithholdings
        out.taxesOwed = out.taxesOwed + val.taxesOwed
    })
    out.taxReturn = (out.withholdings*12) + out.additionalWithholdings - out.taxesOwed
    return out
}

//info[0].property will be set to value[0]. the values list must be organized as such
const updateMultipleUsersProperty = (info, prop, values) =>
{
    let temp = info
    values.forEach((val, i) => {
        temp = updateProperty(temp, prop, i, val)
    })
    return temp
}

const updateProperty = (info, prop, index, value) => {
    return info.map((val, currentIndex) => {
        let out = val
        if(index === currentIndex)
        {
            let temp = val
            temp[prop] = value
            out = temp
        }
        return out;
    })
}

const updateDeductions = (info, prop, category, index, value) => {
        let newVal = info[index].deductions
        newVal[category] = value        
        return updateProperty(info, prop, index, newVal)
}

const updateFilingStatus = (info, prop, index, value) => {
    //determine if we need to override the Married Filing Joint Lock
    let unlockFilingJoint = false

    info.forEach(val => {
        unlockFilingJoint = val.filingStatus.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint || val.filingStatus.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle
    })

    if(value.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint || value.Status === FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle)
    {
        // fills filing status with status' of Married Filing Joint
        return updateMultipleUsersProperty(info, prop, [value, value])
    }
    else if(unlockFilingJoint)
    {
        //Remove Married Filing Joint from both, array[index] becomes the incoming value, all other indecies become Single Filing Status
        return updateMultipleUsersProperty(info, prop, (index === 0 ? [value, FEDERAL_TAX_INFORMATION.filingStatus.Single] :[FEDERAL_TAX_INFORMATION.filingStatus.Single, value]))
    }
    else
    {
        return updateProperty(info, prop, index, value)
    }
}

export default function taxesReducer(state = initialState, action){
    switch(action.type){
        case TaxConstants.UPDATE_SALARIES:
            return{
                ...state, 
                info: updateProperty(state.info, "salary", action.payload.index, parseFloat(action.payload.value))
            };
        case TaxConstants.UPDATE_ADDITIONAL_INCOME:
            return{
                ...state, 
                info: updateProperty(state.info, "additionalIncome", action.payload.index, parseFloat(action.payload.value)),       
            };
        case TaxConstants.UPDATE_DEDUCTIONS:
            return{
                ...state, 
                info: updateDeductions(state.info, "deductions", action.payload.deductionType, action.payload.index, parseFloat(action.payload.value)),       
            };    
        case TaxConstants.UPDATE_FILING_STATUS:
            return{
                ...state, 
                info: updateFilingStatus(state.info, "filingStatus", action.payload.index, action.payload.value),       
            };
        case TaxConstants.UPDATE_TAXES_OWED:
            return{
                ...state, 
                info: calculateTaxesOwed(state.info),
                totals: calculateTotals(state.info)
            };
        case TaxConstants.UPDATE_WITHOLDINGS:
            return{
                ...state, 
                info: updateProperty(state.info, "withholdings", action.payload.index, parseFloat(action.payload.value)),
                totals: calculateTotals(state.info)
            };
        case TaxConstants.UPDATE_ADDITIONAL_WITHOLDINGS:
            return{
                ...state, 
                info: updateProperty(state.info, "additionalWithholdings", action.payload.index, parseFloat(action.payload.value)),
                totals: calculateTotals(state.info)
            };
        case TaxConstants.UPDATE_TAX_RETURN:
            return{
                ...state,
                info: calculateTaxReturn(state.info)
            }
        default:
            return state;
    }
}