import React, { Component } from "react";
import { connect } from 'react-redux'
import { taxActions } from "../../data/actions";
import './styles.css' //Styling for the Basic Input Widget

class PersonalInfoInputWidget extends Component {
  constructor(props){
    super(props)
    this.props.updateTaxesOwed()
  }
    primarySalaryChanged = event => {
      this.props.updatePrimarySalary(parseFloat(event.target.value))
      this.props.updateTaxesOwed()
    }
    secondarySalaryChanged = event => {
      this.props.updateSecondarySalary(parseFloat(event.target.value))
      this.props.updateTaxesOwed()
    }

  render() {
    console.log(this.props.taxInfo)
    return (
      <div className="PersonalInfoInputWidget">
        <label htmlFor="monthly-payment">Primary Income</label>
        <span className="currency-input-format">
          <input
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.primarySalary}
            onChange={this.primarySalaryChanged}
          />
        </span>
        <label htmlFor="monthly-payment">Primary Income Tax</label>
        <span className="currency-input-format">
          <input
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.taxesOwed[0]}
            readOnly
          />
        </span>
        <label htmlFor="monthly-payment">Secondary Income</label>
        <span className="currency-input-format">
          <input
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.secondarySalary}
            onChange={this.secondarySalaryChanged}
          />
        </span>
        <label htmlFor="monthly-payment">Secondary Income Taxes</label>
        <span className="currency-input-format">
          <input
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.taxesOwed[1]}
            readOnly
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
    updatePrimarySalary: (value) => {dispatch(taxActions.updatePrimarySalary(value))},
    updateSecondarySalary: (value) => {dispatch(taxActions.updateSecondarySalary(value))},
    updateFilingStatus: (value) => {dispatch(taxActions.updateFilingStatus(value))},
    updateTaxesOwed: () => {dispatch(taxActions.updateTaxesOwed())},

  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PersonalInfoInputWidget);
