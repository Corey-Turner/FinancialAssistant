import React, { Component } from "react";
import { connect } from 'react-redux'
import { mortgageActions } from "../../data/actions";
import './styles.css' //Styling for the Basic Input Widget

class BasicInputWidget extends Component {
  
  StartingAmountOnChange = (event) => {
    this.props.updatePropertyValue(parseFloat(event.target.value))
    this.props.updateMonthlyPayments()
    this.props.updateTotalPayment()
    this.props.updateTotalInterest()
  }

  InterestRateOnChange = (event) => {
    if(event.target.value < 100 && event.target.value > 0)
    {
      this.props.updateInterestRate(parseFloat(event.target.value))
    }
    else if(event.target.value <= 0)
    {
      this.props.updateInterestRate(0)
    }
    else
    {
      this.props.updateInterestRate(100)
    }
    this.props.updateMonthlyPayments()
    this.props.updateTotalPayment()
    this.props.updateTotalInterest()
  }
  TotalDurationOnChange = (event) =>{
    this.props.updateTotalDuration(parseFloat(event.target.value))
    this.props.updateMonthlyPayments()
    this.props.updateTotalPayment()
    this.props.updateTotalInterest()
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
            value={this.props.mortgageInfo.propertyValue}
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
            value={this.props.mortgageInfo.interestRate}
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
    updatePropertyValue: (value) => {dispatch(mortgageActions.updatePropertyValue(value))},
    updateInterestRate: (value) => {dispatch(mortgageActions.updateInterestRate(value))},
    updateTotalDuration: (value) => {dispatch(mortgageActions.updateTotalDuration(value))},
    updateMonthlyPayments: () => {dispatch(mortgageActions.updateMonthlyPayments())},
    updateTotalPayment: () => {dispatch(mortgageActions.updateTotalPayment())},
    updateTotalInterest: () => {dispatch(mortgageActions.updateTotalInterest())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(BasicInputWidget);
