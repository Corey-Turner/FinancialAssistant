import React, { Component } from "react";
import './styles.css' //Styling for the taxEstimator Component
import IndividualInfoPanelWidget from "./widgets/IndividualInfoPanelWidget/individualInfoPanelWidget";
import TotalTaxInfoWidget from "./widgets/totalTaxInfoWidget/totalTaxInfoWidget";

class TaxEstimator extends Component {
  state = {};
  render() {
    return (
      <div className="TaxEstimator">
        <IndividualInfoPanelWidget index='0'/>
        <IndividualInfoPanelWidget index='1'/>
        <TotalTaxInfoWidget/>
      </div>
    );
  }
}

export default TaxEstimator;
