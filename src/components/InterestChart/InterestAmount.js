import React from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const InterestAmount = (props) => {

    const showAmountValues = props.passInterestChartData.map(value => {
        return `<div><div>₹ </div>${new Intl.NumberFormat("en-IN").format(value.amount)}</div>`;
    })

    Highcharts.setOptions({    
        lang: {                
            decimalPoint: '.', 
            thousandsSep: ','  
        }                      
    });

    const options = {
        chart: {
          type: 'column',
          width: 560
        },        
        colors: props.passchartColors,
        credits: {
          text: '',
          href: '#'
        },
        tooltip: { 
          enabled: true
        },
        title: {
          text: 'Interest To Date - Amount',
          align: 'left',
          margin: 40
        },
        xAxis: {
            categories: showAmountValues,
            crosshair: true,
            title: {
                text: 'Principle',
                align: 'middle',
                margin: 20
            }
        },
        yAxis: [{
            title: {
                text: 'Interest',
                margin: 15
            }
        }],
         plotOptions: {
          column: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '₹ {point.y}'
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
                name: 'Interest',
                colorByPoint: true,
                innerSize: '50%',
                data: props.passInterestAmount
            }
        ]
    }

    return (
        <div className="interest-amount">
            <div className="container">
                <div className="column-chart">
                    <HighchartsReact
                        highcharts={Highcharts}
                        options={options}
                    />
                </div>
            </div>
        </div>
    )
}

export default InterestAmount;