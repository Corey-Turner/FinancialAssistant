import React, { Component } from "react";

class BasicOutputWidget extends Component {
  state = {};
  render() {
    return (
      <div className="BasicOutputWidget">
        <label htmlFor="total-cost">Total Cost of Mortgage</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="total-cost"
            className="mortgage-amount-output"
            readOnly
          />
        </span>
        <label htmlFor="monthly-payment">Monthly Payments</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="monthly-payment"
            className="mortgage-amount-output"
            readOnly
          />
        </span>
        <label htmlFor="interest-paid">Total Interest Paid</label>
        <span className="basic-output-input">
          $
          <input
            type="number"
            name="interest-paid"
            className="mortgage-amount-output"
            readOnly
          />
        </span>
      </div>
    );
  }
}

export default BasicOutputWidget;
