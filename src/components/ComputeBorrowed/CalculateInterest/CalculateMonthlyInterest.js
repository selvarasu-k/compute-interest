import React from 'react';

const CalcMonthlyInterest = (props) => {

    const month = props.passInterest / 30;

    const monthlyInterst = Math.floor(month);

    const amountFormatted = new Intl.NumberFormat("en-IN").format(monthlyInterst);

    return (
        <div>₹ {amountFormatted}</div>
    )
}

export default CalcMonthlyInterest;