import React from "react";
import InterestAmount from "./InterestAmount";
import InterestDays from "./InterestDays";
import InterestChartStyling from './InterestChart.module.css';

const InterestChart = (props) => {

    const recentChartInterest = props.passInterestChartData.slice(0,6);

    const showInterest = recentChartInterest.map((intamount) => {

        const dateOfIssued = intamount.dateofissued;
        const todayDate = new Date();

        const dateOfIssuedInMs = dateOfIssued.getTime();
        const todayDateInMs = todayDate.getTime();

        const msDiff = Math.abs(dateOfIssuedInMs - todayDateInMs);
        const DayInMs = 24 * 60 * 60 * 1000;
        const calcDays = msDiff / DayInMs;
        const countDays = Math.floor(calcDays);
        
        const CalcMonthlyInterest = intamount.amount * intamount.interest / 100;
        const interestToDate = Math.floor((CalcMonthlyInterest / 30) * countDays);

            return ({
                name: `<div style="font-size: 16px;font-weight: normal">${intamount.creditor}</div>`,
                y: interestToDate
            })
    })

    const showDays = recentChartInterest.map((intamount) => {

        const dateOfIssued = intamount.dateofissued;
        const todayDate = new Date();

        const dateOfIssuedInMs = dateOfIssued.getTime();
        const todayDateInMs = todayDate.getTime();

        const msDiff = Math.abs(dateOfIssuedInMs - todayDateInMs);
        const DayInMs = 24 * 60 * 60 * 1000;
        const calcDays = msDiff / DayInMs;
        const countDays = Math.floor(calcDays);

            return ({
                name: `<div style="font-size: 16px;font-weight: normal">${intamount.creditor}</div>`,
                y: countDays
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

    return (
        <div className={InterestChartStyling["interest-chart-block"]}>
            <div className={InterestChartStyling["container"]}>
                <div className={InterestChartStyling["interest-chart"]}>
                    <InterestAmount passInterestAmount={showInterest}
                                    passchartColors={chartColors}
                                    {...props}
                    />
                </div>
                <div className={InterestChartStyling["interest-chart"]}>
                    <InterestDays passInterestDays={showDays}
                                  passchartColors={chartColors}
                                  {...props}
                    />
                </div>
            </div>
        </div>
    )
}

export default InterestChart;