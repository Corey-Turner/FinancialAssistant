import React, { Component } from "react";
import {Link} from 'react-router-dom'
import './styles.css' //styling for the Navigation Bar

class Nav extends Component {
  render() {
    return (
      <div className="NavigationBar">
        <ul>
          <li>
            <Link to="/budget-manager">Budget</Link>
          </li>
          <li>
            <Link to="/debt-manager">Debt</Link>
          </li>
          <li>
            <Link to="/tax-estimator">Taxes</Link>
          </li>
          <li>
            <Link to="/mortgage-calculator">Mortgage</Link>
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
