import React, { Component } from "react";
import './styles.css' //Styling for the taxEstimator Component
import AboveTheLineDeductionWidget from "./../aboveTheLineDeductionsWidget/aboveTheLineDeductionWidget";
import SalaryInfoWidget from "./../salaryInfoWidget/salaryInfoWidget";

class IndividualInfoPanelWidget extends Component {
    state = {  }
    render() { 
        return (
            <div className="IndividualInfoPanelWidget">
                <SalaryInfoWidget index={this.props.index}/>
                <AboveTheLineDeductionWidget index={this.props.index}/>
            </div>
          );
    }
}
 
export default IndividualInfoPanelWidget;