import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PITIEstimatorWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {
        labels: ["Principle", "Interest", "Taxes", "Insurance", "HOA"],
        datasets: [
          {
            backgroundColor: [
              "#003f5c",
              "#58508d",
              "#bc5090",
              "#ff6361",
              "#ffa600",
            ],
            borderWidth: 1,
            data: [800, 200, 100, 70, 120],
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
      <div className="PITIEstimatorWidget">
        <div className="InformationDiv">
          <label htmlFor="location">Location</label>
          <span className="piti-input">
            <select name="location">
              <option value=""> &lt;Select a State&gt; </option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </span>

          <label htmlFor="monthly-hoa">Monthly HOA</label>
          <span className="piti-input">
            <input type="number" name="monthly-hoa" step="100" min="0" />
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
            width={"100%"}
          />
        </div>
      </div>
    );
  }
}
export default PITIEstimatorWidget;
