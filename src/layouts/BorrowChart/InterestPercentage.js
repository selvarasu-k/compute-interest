import React from "react";

const InterestPercentage = (props) => {

        const dateOfIssued = new Date(props.dateofissued);
        const todayDate = new Date();

        const dateOfIssuedInMs = dateOfIssued.getTime();
        const todayDateInMs = todayDate.getTime();

        const msDiff = Math.abs(dateOfIssuedInMs - todayDateInMs);
        const DayInMs = 24 * 60 * 60 * 1000;
        const calcDays = msDiff / DayInMs;
        const countDays = Math.floor(calcDays);
        
        const calcMonthlyInterest = props.amount * props.interest / 100;
        const interestToDate = Math.floor((calcMonthlyInterest / 30) * countDays);

        const interestYear = calcMonthlyInterest * 12;
        const calcInterest = interestYear / interestToDate;
        const percentageInterest = Math.floor(100 / calcInterest);

    return (
      <>
        {percentageInterest}%
      </>
    )
}

export default InterestPercentage;