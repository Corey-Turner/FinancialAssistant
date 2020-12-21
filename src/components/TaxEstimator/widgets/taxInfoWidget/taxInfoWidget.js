import React, { Component } from "react";
import { connect } from 'react-redux'
import { taxActions } from "../../data/actions";
import './styles.css' //Styling for the Basic Input Widget

class TaxInfoWidget extends Component {
    constructor(props){
      super(props)
      this.props.updateTaxReturn()
    }
    withholdingsChanged = event => {
      this.props.updateWithholdings(parseInt(this.props.index), event.target.value)
      this.props.updateTaxReturn()
    }
    additionalWithholdingsChanged= event => {
      this.props.updateAdditionalWithholdings(parseInt(this.props.index), event.target.value)
      this.props.updateTaxReturn()
    }
    selectText = event => {
      event.target.select()
    }

  render() {
    return (
      <div className="TaxInfoWidget">
        <h3>Taxes #{parseInt(this.props.index) + 1}</h3>
        <label>Gross</label>
        <span className="currency-output-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].taxesOwed}
            readOnly
          />
        </span>
        <label>Withholdings (Monthly)</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].withholdings}
            onChange={this.withholdingsChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label>Additional Withholdings (Annual)</label>
        <span className="currency-input-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].additionalWithholdings}
            onChange={this.additionalWithholdingsChanged}
            onFocus = {this.selectText}
          />
        </span>
        <label>Estimated Tax Return</label>
        <span className="currency-output-format">
          $
          <input
            className="currency-amount"
            type="number" 
            name="mortgage-duration" 
            step="5" 
            min="0" 
            value={this.props.taxInfo.info[this.props.index].taxReturn} //toChange
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
    updateWithholdings: (index, value) => {dispatch(taxActions.updateWithholdings(index, value))},
    updateAdditionalWithholdings: (index, value) => {dispatch(taxActions.updateAdditionalWithholdings(index, value))},
    updateTaxReturn: (index) => {dispatch(taxActions.updateTaxReturn(index))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TaxInfoWidget);
