import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";
import { connect } from "react-redux";
import { mortgageActions } from "../../data/actions";
import './styles.css' //Styling for the PITI Estimator Widget

class PITIEstimatorWidget extends Component {
  constructor(props) {
    super(props)
    this.state = {
      monthlyHOA: 0,
      data: {
        labels: ["Principle & Interest", "Taxes", "Insurance", "HOA"],
      },
    };
  }

  monthlyHOAOnChange = (event) =>{
    this.props.updateMonthlyHOA(parseFloat(event.target.value))
  }

  propertyTaxRateOnChange = (event) => {
    this.props.updatePropertyTaxRate(parseFloat(event.target.value))
  }

  insuranceCostOnChange = (event) => {
    this.props.updateAnnualInsuranceCost(parseFloat(event.target.value))
  }
  getMonthlyExpenses = () => {
    let value = 0;
    value = parseFloat(this.props.mortgageInfo.monthlyPayment) + 
    parseFloat(((this.props.mortgageInfo.propertyTaxRate/100) * this.props.mortgageInfo.propertyValue)/12 ) + 
    parseFloat(this.props.mortgageInfo.annualInsuranceCost/12 ) + 
    parseFloat(this.props.mortgageInfo.monthlyHOA)

    console.log(value)
    return value
  }
  getChartData = (canvas) => {
    const data = this.state.data
    data.datasets = [
      {
        backgroundColor: [
          "#003f5c",
          "#bc5090",
          "#ff6361",
          "#ffa600",
        ],
        borderWidth: 1,
        data: [
          this.props.mortgageInfo.monthlyPayment, 
          ((this.props.mortgageInfo.propertyTaxRate/100) * this.props.mortgageInfo.propertyValue)/12, 
          this.props.mortgageInfo.annualInsuranceCost/12, 
          this.props.mortgageInfo.monthlyHOA],
      },
    ]
    return data;
  };

  render() {
    return (
      <div className="PITIEstimatorWidget">
        <div className="InformationDiv">
        <label htmlFor="tax-rate">Property Tax Rate (%)</label>
        <span className="piti-input">
          <input
            type="number"
            name="tax-rate"
            step="1"
            max="100"
            min="0"
            value={this.props.mortgageInfo.propertyTaxRate}
            onChange={this.propertyTaxRateOnChange}
          />
        </span>
        <label htmlFor="home-insurance">Annual Home Insurance</label>
        <span className="piti-input">
          $
          <input
            type="number"
            name="home-insurance"
            className="piti-amount-input"
            step="1"
            max="100"
            min="0"
            value={this.props.mortgageInfo.annualInsuranceCost}
            onChange={this.insuranceCostOnChange}
          />
        </span>
        <label htmlFor="monthly-hoa">Monthly HOA</label>
        <span className="piti-input">
          $
          <input type="number" name="monthly-hoa" className="piti-amount-input" step="100" min="0" value={this.props.mortgageInfo.monthlyHOA} onChange={this.monthlyHOAOnChange}/>
        </span>
        <label htmlFor="monthly-expenses">Monthly Housing Expenses</label>
        <span className="piti-output">
          $
          <input 
          type="number" 
          name="monthly-hoa" 
          className="piti-amount-output" 
          value={this.getMonthlyExpenses().toFixed(2)} 
          readOnly/>
        </span>
        </div>
        <div className="chart-div">
          <Doughnut
            className="Chart"
            options={{
              responsive: true,
              maintainAspectRatio: false,
              tooltips: {
                callbacks: {
                  label: function (tooltipItem, data) {
                    return (
                     "$" + data["datasets"][0]["data"][tooltipItem["index"]] 
                    );
                  },
                },
              },
              legend: {
                display: true,
                position: "left",
                labels: {
                  fontSize: 9,
                  boxWidth: 10,
                  fontColor: "#eee",
                },
              },
            }}
            data={this.getChartData}
            width={100}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) =>{
  return{
    mortgageInfo: state.mortgageCalcReducer
  }
}
const mapDispatchToProps = (dispatch) =>{
  return{
    updateMonthlyHOA: (value) => {dispatch(mortgageActions.updateMonthlyHOA(value))},
    updatePropertyTaxRate: (value) => {dispatch(mortgageActions.updatePropertyTaxRate(value))},
    updateAnnualInsuranceCost: (value) => {dispatch(mortgageActions.updateAnnualInsuranceCost(value))},
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(PITIEstimatorWidget);
