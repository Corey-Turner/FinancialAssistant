import React, { Component } from "react";
import './styles.css' //Styling for the taxEstimator Component
import PersonalInfoInputWidget from "./widgets/personalInfoInputWidget/personalInfoInputWidget";

class TaxEstimator extends Component {
  state = {};
  render() {
    return (
      <div className="TaxEstimator">
        <PersonalInfoInputWidget/>
      </div>
    );
  }
}

export default TaxEstimator;
