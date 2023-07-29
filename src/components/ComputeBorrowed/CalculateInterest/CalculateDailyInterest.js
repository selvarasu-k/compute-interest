import React from "react";

const CalculateDailyInterest = (props) => {

    const day = props.passInterest / 360;

    const dailyInterst = Math.floor(day.toLocaleString('en-IN'));

    return (
        <div>₹ {dailyInterst}</div>
    )

}

export default CalculateDailyInterest;