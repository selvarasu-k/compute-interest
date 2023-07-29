import React from "react";

const CalculateAmount = (props) => {

    const setAmount = props.cardvalue.reduce((total, num) => (total = total + num.amount), 0);

    return <div>₹ {setAmount.toLocaleString('en-IN')}</div>
}

export default CalculateAmount;