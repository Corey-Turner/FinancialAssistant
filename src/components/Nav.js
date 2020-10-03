import React, { Component } from "react";
import {Link} from 'react-router-dom'

class Nav extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <ul>
          <li>
            <Link to="/budget-manager">Budget Manager</Link>
          </li>
          <li>
            <Link to="/debt-manager">Debt Manager</Link>
          </li>
          <li>
            <Link to="/tax-estimator">Tax Estimator</Link>
          </li>
          <li>
            <Link to="/mortgage-calculator">Mortgage Calculator</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Nav;
