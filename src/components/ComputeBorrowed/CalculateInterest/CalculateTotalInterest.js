import React from "react";

const CalculateTotalInterest = (props, {getInterest}) => {
    
    let sumofinterestToData = 0;

    props.cardvalue.map(data => {

          const dateOfIssued = data.dateofissued;
          const todayDate = new Date();

          const dateOfIssuedInMs = dateOfIssued.getTime();
          const todayDateInMs = todayDate.getTime();

          const msDiff = Math.abs(dateOfIssuedInMs - todayDateInMs);
          const DayInMs = 24 * 60 * 60 * 1000;
          const calcDays = msDiff / DayInMs;
          const countDays = Math.floor(calcDays);
          
          const CalcMonthlyInterest = data.amount * data.interest / 100;
          const interestToDate = Math.floor((CalcMonthlyInterest / 30) * countDays);

          sumofinterestToData += interestToDate;

          props.getInterest(sumofinterestToData);

        return (
            <>
              {interestToDate}
            </>
          )
     }
  )

      return (
        <div>
          ₹ {sumofinterestToData.toLocaleString('en-IN')}
        </div>
      )
  }

export default CalculateTotalInterest;