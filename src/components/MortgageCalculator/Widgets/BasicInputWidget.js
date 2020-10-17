import React, { Component } from "react";
import { connect } from 'react-redux'
//import mortgageCalcReducer from './../Reducers/MortgageCalculatorReducer'
import { mortgageActions } from "../Actions/actions";

class BasicInputWidget extends Component {
  StartingAmountOnChange = (event) =>{
    this.props.updateStartingAmount(event.target.value)
  }
  InterestRateOnChange = (event) =>{
    this.props.updateInterestRate(event.target.value)
  }
  TotalDurationOnChange = (event) =>{
    this.props.updateTotalDuration(event.target.value)
  }

  render() {
    return (
      <div className="BasicInputWidget">
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <span className="basic-input-input">
          $
          <input
            type="number"
            name="mortgage-amount"
            className="mortgage-amount-input"
            step="10000"
            min="0"
            value={this.props.mortgageInfo.totalAmount}
            onChange={this.StartingAmountOnChange}
          />
        </span>
        <label htmlFor="interest-rate">Interest Rate (%)</label>
        <span className="basic-input-input">
          <input
            type="number"
            name="interest-rate"
            step="1"
            max="100"
            min="0"
            value={this.props.mortgageInfo.interestRate * 100}
            onChange={this.InterestRateOnChange}
          />
        </span>
        <label htmlFor="mortgage-duration">Mortgage Duration (Years) </label>
        <span className="basic-input-input">
          <input 
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.mortgageInfo.totalDuration}
            onChange={this.TotalDurationOnChange}
          />
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    mortgageInfo: state.mortgageCalcReducer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateStartingAmount: (value) => {dispatch(mortgageActions.updateStartingAmount(value))},
    updateInterestRate: (value) => {dispatch(mortgageActions.updateInterestRate(value))},
    updateTotalDuration: (value) => {dispatch(mortgageActions.updateTotalDuration(value))}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicInputWidget);
