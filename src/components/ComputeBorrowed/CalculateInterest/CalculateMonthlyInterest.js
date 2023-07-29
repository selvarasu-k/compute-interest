import React from 'react';

const CalcMonthlyInterest = (props) => {

    const month = props.passInterest / 30;

    const monthlyInterst = Math.floor(month.toLocaleString('en-IN'));

    return (
        <div>₹ {monthlyInterst}</div>
    )
}

export default CalcMonthlyInterest;