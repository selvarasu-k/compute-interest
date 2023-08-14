import React from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import BorrowChartList from "./BorrowChartList";
import './BorrowChart.css';

const BorrowChart = (props) => {

    const recentChartList = props.passBorrowChartData.slice(0,6);

    const showData = recentChartList.map(list => {
        return ({
          name: `<div style="font-size: 16px;font-weight: normal">${list.creditor}</div>`,
          y: parseFloat(list.amount)
        })
      })
      
      const chartColors = [
        "#61EFCD",
        "#CDDE1F",
        "#FEC200",
        "#CA765A",
        "#2485FA",
        "#F57D7D"
      ];
     
     Highcharts.setOptions({    
        lang: {                
            decimalPoint: '.', 
            thousandsSep: ','  
        }                      
    });

    const options = {
        chart: {
          type: 'pie',
          width: 650
        },        
        colors: chartColors,
        credits: {
          text: '',
          href: '#'
        },
        tooltip: { 
          enabled: false
        },
        title: {
          text: 'Borrow Chart',
          align: 'left',
          margin: 40
        },
        subtitle: {
          text: 'Yearly interest - Percentage',
          align: 'left'
        },
         plotOptions: {
          pie: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.name}'
            },
            showInLegend: false
          },
        series: {
              states: {
                inactive: {
                  opacity: 1
              }
            }
          }
        },
        legend: {
          align: 'left',
          layout: 'vertical',
          verticalAlign: 'middle',
          x: 40,
          y: 0
        },
        series: [
            {
                name: 'Borrow Amount',
                colorByPoint: true,
                innerSize: '50%',
                data: showData
            }
        ]
    }

    return (
        <div className="borrow-chart">
            <div className="container">
                <div className="pie-chart">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
                <div className="pie-chart-borrow-data">
                    <div className="borrow-data-list">
                        <BorrowChartList 
                              passChartList={recentChartList}
                              passChartColors={chartColors}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BorrowChart;