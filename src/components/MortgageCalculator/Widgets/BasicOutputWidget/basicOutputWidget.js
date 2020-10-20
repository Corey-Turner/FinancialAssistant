import React, { Component } from "react";
import {connect} from 'react-redux'
import { mortgageActions } from "../../data/actions";
import './styles.css' //Styling for the Basic Output Widget

class BasicOutputWidget extends Component {
  constructor(props){
    super(props)

    this.props.updateMonthlyPayments()
    this.props.updateTotalPayment()
    this.props.updateTotalInterest()
  }
  state = {};

  render() {
    return (
      <div className="BasicOutputWidget">
        <label htmlFor="total-cost">Total Cost of Mortgage</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="total-cost"
            className="mortgage-amount-output"
            value={this.props.mortgageInfo.totalPayment}
            readOnly
          />
        </span>
        <label htmlFor="monthly-payment">Monthly Payments</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="monthly-payment"
            className="mortgage-amount-output"
            value={this.props.mortgageInfo.monthlyPayment}
            readOnly
          />
        </span>
        <label htmlFor="interest-paid">Total Interest Paid</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="interest-paid"
            className="mortgage-amount-output"
            value={this.props.mortgageInfo.totalInterest}
            readOnly
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
    updateMonthlyPayments: () => {dispatch(mortgageActions.updateMonthlyPayments())},
    updateTotalPayment: () => {dispatch(mortgageActions.updateTotalPayment())},
    updateTotalInterest: () => {dispatch(mortgageActions.updateTotalInterest())}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(BasicOutputWidget);

