import React, { Component } from "react";
import { connect } from 'react-redux'
import './styles.css' //Styling for the Basic Input Widget



class TotalTaxInfoWidget extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="SalaryInfoWidget">
            <h2>Taxes</h2>
            <label htmlFor="monthly-payment">TEMP TAXES</label>
            <span className="currency-output-format">
            $
            <input
                className="currency-amount"
                type="number" 
                name="mortgage-duration" 
                step="5" 
                min="0" 
                value={this.props.taxInfo.taxesOwed[0]}
                readOnly
            />
            </span>
            <label htmlFor="monthly-payment">TEMP TAXES</label>
            <span className="currency-output-format">
            $
            <input
                className="currency-amount"
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

export default connect(mapStateToProps)(TotalTaxInfoWidget);