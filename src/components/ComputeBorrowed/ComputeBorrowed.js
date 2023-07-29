import React, { useState } from "react";
import Card from "./Card";
import CalculateAmount from "./CalculateAmount";
import CalculateTotalInterest from "./CalculateInterest/CalculateTotalInterest";
import CalcMonthlyInterest from "./CalculateInterest/CalculateMonthlyInterest";
import CalculateDailyInterest from "./CalculateInterest/CalculateDailyInterest";
import './ComputeBorrowed.css';

    const computeBorrow = [
        {
            cardtext: 'Total Borrow',
            cardcolor: '#4d80f3'
        },
        {
            cardtext: 'Total Interest',
            cardcolor: '#fb6d9d'
        },
        {
            cardtext: 'Monthly Interest',
            cardcolor: '#81c868'
        },
        {
            cardtext: 'Daily Interest',
            cardcolor: '#34d3eb'
        }
    ]

const ComputeBorrowed = (props) => {

    const [interest, setInterest] = useState(0);

    const calcInterest = (int) => {
            setInterest(int);
    }

    return (
        <div className="compute-borrow">
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[0].cardcolor}}>
                            <CalculateAmount cardvalue={props.passBorrowData} />
                        </h3>
                        <span className="card-text">{computeBorrow[0].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[1].cardcolor}}>
                            <CalculateTotalInterest 
                                    getInterest={calcInterest}
                                    cardvalue={props.passBorrowData}
                                />
                        </h3>
                        <span className="card-text">{computeBorrow[1].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[2].cardcolor}}>
                            <CalcMonthlyInterest 
                                    passInterest={interest} 
                            />
                        </h3>
                        <span className="card-text">{computeBorrow[2].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[3].cardcolor}}>
                            <CalculateDailyInterest 
                                    passInterest={interest}
                            />
                        </h3>
                        <span className="card-text">{computeBorrow[3].cardtext}</span>
                    </Card>
        </div>
    )
}

export default ComputeBorrowed;