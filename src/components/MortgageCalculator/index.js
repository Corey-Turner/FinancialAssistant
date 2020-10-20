import React, { Component } from "react";
import BasicInputWidget from "./Widgets/BasicInputWidget/basicInputWidget";
import BasicOutputWidget from "./Widgets/BasicOutputWidget/basicOutputWidget";
import PITIEstimatorWidget from "./Widgets/PITIEstimatorWidget/pitiEstimatorWidget";
import './styles.css' //Styling for the MortgageCalc Component

class MortgageCalc extends Component {
  state = {
  };

  render() {
    return (
      <div className="MortgageCalc">
        <BasicInputWidget />
        <BasicOutputWidget />
        <PITIEstimatorWidget />
      </div>
    );
  }
}

export default MortgageCalc;
