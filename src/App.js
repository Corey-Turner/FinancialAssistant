import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import MortgageCalc from "./components/MortgageCalc";
import Nav from "./components/Nav";
import DebtManager from "./components/DebtManager";
import BudgetManager from "./components/BudgetManager";
import TaxEstimator from "./components/TaxEstimator";
import Home from "./components/Home";

function App() {
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

export default App;
