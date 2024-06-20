import React from "react";
import BorrowChartListItem from "./BorrowChartListItem";

const BorrowChartList = (props) => {

    return (
        <table>
            {props.passChartList.map((chartlist, index) => {
                return (
                    <BorrowChartListItem
                        key={chartlist.id}
                        creditor={chartlist.creditor}
                        amount={chartlist.amount}
                        interest={chartlist.interest}
                        dateofissued={chartlist.dateofissued}
                        chartcolor={props.passChartColors[index]}
                    />
                )
            })}
            
        </table>
    )
}

export default BorrowChartList;