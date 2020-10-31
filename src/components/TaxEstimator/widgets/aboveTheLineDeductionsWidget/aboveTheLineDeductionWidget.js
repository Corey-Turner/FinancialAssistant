import React, { Component } from "react";
import { connect } from 'react-redux'
import { taxActions, taxDeductionTypes } from "../../data/actions";
import './styles.css' //Styling for the Basic Input Widget

class AboveTheLineDeductionWidget extends Component {
    constructor(props){
        super(props)
        this.props.updateTaxesOwed()
    }
    deductionChanged = (value, type) => {
      console.log(value)
      if(value === "")
      {
        value = 0
      }
      this.props.updateDeductions(parseInt(this.props.index), parseFloat(value), type)
      this.props.updateTaxesOwed()
    }
    retirementDeductionChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.RETIREMENT)
    }
    studentLoanDeductionChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.STUDENT_LOAN)
    }
    movingExpenseDeductionChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.MOVING_EXPENSE)
    }
    educatorExpenseDeductionChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.EDUCATOR_EXPENSE)
    }
    hsaDeductionChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.HSA)
    }
    otherDeductionsChanged = event => {
        this.deductionChanged(event.target.value, taxDeductionTypes.OTHER)
    }
    selectText = event => {
        event.target.select()
    }
    render() { 
      return (
      <div className="AboveTheLineDeductionWidget">
        <h2>Above The Line Deductions</h2>
        <label htmlFor="monthly-payment">IRA/401K Contribution</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].retirement}
            onChange={this.retirementDeductionChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label htmlFor="monthly-payment">Student Loan Interst</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].studentLoan}
            onChange={this.studentLoanDeductionChanged}
            onFocus = {this.selectText}

          />
        </span>
        <label htmlFor="monthly-payment">Moving Expenses</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].movingExpense}
            onChange={this.movingExpenseDeductionChanged}
            onFocus = {this.selectText}

          />
        </span>
        <label htmlFor="monthly-payment">Educator Expenses </label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].educatorExpense}
            onChange={this.educatorExpenseDeductionChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label htmlFor="monthly-payment">HSA Deductions</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].hsa}
            onChange={this.hsaDeductionChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label htmlFor="monthly-payment">Other Deductions</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.deductions[this.props.index].other}
            onChange={this.otherDeductionsChanged}
            onFocus = {this.selectText}
          />
        </span>
      </div>
    );
    }
}
 

const mapStateToProps = (state) =>{
  return{
    taxInfo: state.taxesReducer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateSalary: (index, value) => {dispatch(taxActions.updateSalary(index, value))},
    updateDeductions: (index, value, type) => {dispatch(taxActions.updateDeductions(index, value, type))},
    updateFilingStatus: (value) => {dispatch(taxActions.updateFilingStatus(value))},
    updateTaxesOwed: () => {dispatch(taxActions.updateTaxesOwed())},

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(AboveTheLineDeductionWidget);