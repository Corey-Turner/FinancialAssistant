import React, { Component } from "react";
import { connect } from 'react-redux'
import TaxInfoWidget from "../taxInfoWidget/taxInfoWidget";
import './styles.css' //Styling for the Basic Input Widget



class TotalTaxInfoWidget extends Component {
    state = {  }
    render() { 
        return ( 
        <div className="TotalTaxInfoWidget">
            <TaxInfoWidget index={0}/>
            <TaxInfoWidget index={1}/>
             <div className="TotalTaxesOwed">
                <h3>Total Taxes</h3>
                <label>Gross</label>
                <span className="currency-input-format">
                $
                <input
                    className="currency-amount"
                    type="number" 
                    name="mortgage-duration" 
                    step="5" 
                    min="0" 
                    value={this.props.taxInfo.totals.taxesOwed}
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
                    value={this.props.taxInfo.totals.withholdings}
                    readOnly
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
                    value={this.props.taxInfo.totals.additionalWithholdings}
                    readOnly
                />
                </span>
                <label>Estimated Tax Return</label>
                <span className="currency-input-format">
                $
                <input
                    className="currency-amount"
                    type="number" 
                    name="mortgage-duration" 
                    step="5" 
                    min="0" 
                    value={this.props.taxInfo.totals.taxReturn}
                    readOnly
                />
                </span>
            </div>
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