import React from "react";

const CalculateDailyInterest = (props) => {

    const day = props.passInterest / 360;

    const dailyInterst = Math.floor(day.toLocaleString('en-IN'));

    const amountFormatted = new Intl.NumberFormat("en-IN").format(dailyInterst);

    return (
        <div>₹ {amountFormatted}</div>
    )

}

export default CalculateDailyInterest;