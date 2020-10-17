import {updateStartingAmount, updateInterestRate, updateTotalDuration} from './../Actions/actions'

const updateOutputValues = () =>{
    console.log("Hello World")
}

const updateStartingAmountMiddleware = () =>{
    updateOutputValues()
    return updateStartingAmount
}

const updateInterestRateMiddleware = () =>{
    updateOutputValues()
    return updateInterestRate
}

const updateTotalDurationMiddleware = () =>{
    updateOutputValues()
    return updateTotalDuration
}

export const mortgageMiddleware = 
{
    updateStartingAmount: updateStartingAmountMiddleware,
    updateInterestRate: updateInterestRateMiddleware,
    updateTotalDuration: updateTotalDurationMiddleware
}