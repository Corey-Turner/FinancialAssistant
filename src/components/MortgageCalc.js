import React, { Component } from "react";
import BasicInputWidget from "./MortgageCalcWidgets/BasicInputWidget";
import BasicOutputWidget from "./MortgageCalcWidgets/BasicOutputWidget";
import PITIEstimatorWidget from "./MortgageCalcWidgets/PITIEstimatorWidget";

class MortgageCalc extends Component {
  state = {
    MortgageAmount: -1,
    InterestRate: -1,
    MortgageDuration: -1,
    TotalMortgageAmount: 0,
    MonthlyPayment: 0,
    TotalInterestPaid: 0,
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
