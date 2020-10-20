import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import MortgageCalc from "./components/MortgageCalculator/component";
import Nav from "./components/Nav/nav";
import DebtManager from "./components/DebtManager/component";
import BudgetManager from "./components/BudgetManager/component";
import TaxEstimator from "./components/TaxEstimator/component";
import Home from "./components/Home/component";

export default function App() {
  return (
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/mortgage-calculator" component={MortgageCalc} />
          <Route path="/tax-estimator" component={TaxEstimator} />
          <Route path="/debt-manager" component={DebtManager} />
          <Route path="/budget-manager" component={BudgetManager} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </Router>
  );
}

