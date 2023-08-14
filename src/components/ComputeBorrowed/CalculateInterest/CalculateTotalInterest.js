import React from "react";

const CalculateTotalInterest = (props) => {

      const amountFormatted = new Intl.NumberFormat("en-IN").format(props.passInterest);
    
      return (
        <div>
          ₹ {amountFormatted}
        </div>
      )
  }

export default CalculateTotalInterest;