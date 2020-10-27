import {combineReducers} from 'redux'
import mortgageCalcReducer from '../components/MortgageCalculator/data/Reducer'
import taxesReducer from './../components/TaxEstimator/data/reducer'
export default combineReducers({
    mortgageCalcReducer,
    taxesReducer
})