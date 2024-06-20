import React from "react";
import Card from "./Card";
import CalculateAmount from "./CalculateAmount";
import CalculateTotalInterest from "./CalculateInterest/CalculateTotalInterest";
import CalcMonthlyInterest from "./CalculateInterest/CalculateMonthlyInterest";
import CalculateDailyInterest from "./CalculateInterest/CalculateDailyInterest";
import './ComputeBorrowed.css';
import { useSelector } from "react-redux";

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

const ComputeBorrowed = () => {

    const borrowed = useSelector((state) => state.borrowed.borrowed);

    let sumofinterestToDate = 0;
    let sumofinterestMonthly = 0;
    let sumofinterestDaily = 0;

        borrowed.map(data => {

            const dateOfIssued = new Date(data.dateofissued);
            const todayDate = new Date();

            const dateOfIssuedInMs = dateOfIssued.getTime();
            const todayDateInMs = todayDate.getTime();

            const msDiff = Math.abs(dateOfIssuedInMs - todayDateInMs);
            const DayInMs = 24 * 60 * 60 * 1000;
            const calcDays = msDiff / DayInMs;
            const countDays = Math.floor(calcDays);
            
            const CalcMonthlyInterest = data.amount * data.interest / 100;
            const CalcDailyInterest = CalcMonthlyInterest / 30;
            const interestToDate = Math.floor((CalcMonthlyInterest / 30) * countDays);

            sumofinterestToDate += interestToDate;
            sumofinterestMonthly += CalcMonthlyInterest;
            sumofinterestDaily += CalcDailyInterest;

            return (
                <>
                {interestToDate}
                </>
            )
        }
    )

    return (
        <div className="compute-borrow">
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[0].cardcolor}}>
                            <CalculateAmount cardvalue={borrowed} />
                        </h3>
                        <span className="card-text">{computeBorrow[0].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[1].cardcolor}}>
                            <CalculateTotalInterest
                                    passInterest={sumofinterestToDate}
                            />
                        </h3>
                        <span className="card-text">{computeBorrow[1].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[2].cardcolor}}>
                            <CalcMonthlyInterest 
                                    passInterest={sumofinterestMonthly} 
                            />
                        </h3>
                        <span className="card-text">{computeBorrow[2].cardtext}</span>
                    </Card>
                    <Card>
                        <h3 className="card-value" style={{color: computeBorrow[3].cardcolor}}>
                            <CalculateDailyInterest 
                                    passInterest={sumofinterestDaily}
                            />
                        </h3>
                        <span className="card-text">{computeBorrow[3].cardtext}</span>
                    </Card>
        </div>
    )
}

export default ComputeBorrowed;