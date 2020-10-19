import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

class PieChart extends Component {
  constructor(){
    var promisedDeliveryChart = new Chart(document.getElementById('Chart'), {
      type: 'pie',
      data: data,
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    });
    
    Chart.pluginService.register({
      beforeDraw: function(chart) {
        var width = chart.chart.width,
            height = chart.chart.height,
            ctx = chart.chart.ctx;
    
        ctx.restore();
        var fontSize = (height / 114).toFixed(2);
        ctx.font = fontSize + "em sans-serif";
        ctx.textBaseline = "middle";
    
        var text = "75%",
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;
    
        ctx.fillText(text, textX, textY);
        ctx.save();
      }
    });
  }

  render() {
    return (
      <div className="PieChart">
        <canvas id="myChart"></canvas>
      </div>
    );
  }
}

export default PieChart;
