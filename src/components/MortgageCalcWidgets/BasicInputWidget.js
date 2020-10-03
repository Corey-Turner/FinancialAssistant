import React, { Component } from "react";
import { useSelector } from "react-redux";

class BasicInputWidget extends Component {
  state = {};

  render() {
    return (
      <div className="BasicInputWidget">
        <label htmlFor="mortgage-amount">Mortgage Amount</label>
        <span className="basic-input-input">
          $
          <input
            type="number"
            name="mortgage-amount"
            className="mortgage-amount-input"
            step="10000"
            min="0"
            onChange={this.MortgageAmountChangedHandler}
          />
        </span>
        <label htmlFor="interest-rate">Interest Rate (%)</label>
        <span className="basic-input-input">
          <input
            type="number"
            name="interest-rate"
            step="1"
            max="100"
            min="0"
          />
        </span>
        <label htmlFor="mortgage-duration">Mortgage Duration (Years) </label>
        <span className="basic-input-input">
          <input type="number" name="mortgage-duration" step="5" min="0" />
        </span>
      </div>
    );
  }
}

export default BasicInputWidget;
