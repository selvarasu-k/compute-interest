import React from "react";

const CalculateAmount = (props) => {

    const setAmount = props.cardvalue.reduce((total, num) => (total = parseInt(total) + parseInt(num.amount)), 0);

    const amountFormatted = new Intl.NumberFormat("en-IN").format(setAmount);

    return <div>₹ {amountFormatted}</div>
}

export default CalculateAmount;