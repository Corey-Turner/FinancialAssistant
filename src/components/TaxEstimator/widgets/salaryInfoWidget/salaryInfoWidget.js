import React, { Component } from "react";
import { connect } from 'react-redux'
import { FEDERAL_TAX_FILING_STATUSES, taxActions } from "../../data/actions";
import './styles.css' //Styling for the Basic Input Widget

class SalaryInfoWidget extends Component {
  constructor(props){
    super(props)
    this.props.updateTaxesOwed()
  }
    salaryChanged = event => {
      this.props.updateSalary(parseInt(this.props.index), event.target.value)
      this.props.updateTaxesOwed()
      this.props.updateTaxReturn()
    }
    additionalIncomeChanged = event => {
      this.props.updateAdditionalIncome(parseInt(this.props.index), event.target.value)
      this.props.updateTaxesOwed()
      this.props.updateTaxReturn()
    }
    filingStatusChanged = event => {
      this.props.updateFilingStatus(event.target.value, parseInt(this.props.index))
      this.props.updateTaxesOwed()
      this.props.updateTaxReturn()
    }
    selectText = event => {
      event.target.select()
    }

  render() {
    return (
      <div className="SalaryInfoWidget">
        <h2>Income #{parseInt(this.props.index) + 1}</h2>
        <label>Salary</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].salary}
            onChange={this.salaryChanged}
            onFocus = {this.selectText}
          />
        </span>
                <label>Additional Income</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].additionalIncome}
            onChange={this.additionalIncomeChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label>Filing status</label>
        <span className="input-format">
          <select
            name="status" 
            value = {this.props.taxInfo.info[this.props.index].filingStatus.Status}          
            onChange={this.filingStatusChanged}>
            <option value={FEDERAL_TAX_FILING_STATUSES.Single}>Single</option>
            <option value={FEDERAL_TAX_FILING_STATUSES.HeadOfHousehold}>Head Of Household</option>
            <option value={FEDERAL_TAX_FILING_STATUSES.MarriedFilingJoint}>Married Filing Joint</option>
            <option value={FEDERAL_TAX_FILING_STATUSES.MarriedFilingSingle}>Married Filing Single</option>
          </select>
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
    updateAdditionalIncome: (index, value) => {dispatch(taxActions.updateAdditionalIncome(index, value))},
    updateFilingStatus: (index, value) => {dispatch(taxActions.updateFilingStatus(index, value))},
    updateTaxesOwed: () => {dispatch(taxActions.updateTaxesOwed())},
    updateTaxReturn: () => {dispatch(taxActions.updateTaxReturn())},
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SalaryInfoWidget);
