import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Principle", "Interest", "Taxes", "Insurance"],
        datasets: [
          {
            backgroundColor: ["#003f5c", "#58508d", "#bc5090", "#ff6361"],
            borderWidth: 1,
            data: [1, 2, 3, 4],
          },
        ],
      },
    };
  }

  getChartData = (canvas) => {
    const data = this.state.data;
    return data;
  };

  render() {
    return (
      <div className="PieChart">
        <Doughnut
          className="Chart"
          options={{
            responsive: true,
          }}
          data={this.getChartData}
          width={"100%"}
        />
      </div>
    );
  }
}

export default PieChart;
