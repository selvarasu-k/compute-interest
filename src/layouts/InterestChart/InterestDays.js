import React from "react";
import * as Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useSelector } from "react-redux";

const InterestDays = (props) => {

    const borrowed = useSelector((state) => state.borrowed.borrowed);

    const showAmountValues = borrowed.map(value => {
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
          type: 'line',
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
          text: 'Interest To Date - Days',
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
                text: 'Days',
                margin: 15
            }
        }],
         plotOptions: {
          line: {
            allowPointSelect: false,
            cursor: 'pointer',
            dataLabels: {
              enabled: true,
              format: '{point.y} days'
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
                name: 'Days',
                colorByPoint: true,
                innerSize: '50%',
                data: props.passInterestDays
            }
        ],
        accessibility: {
          enabled: false
        }
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

export default InterestDays;