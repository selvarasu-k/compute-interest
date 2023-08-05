import React from 'react';
import InterestPercentage from './InterestPercentage';
import BorrowChartListItemStyle from './BorrowChartListItem.module.css';

const BorrowChartListItem = (props) => {

    return (
        <tbody className={BorrowChartListItemStyle["chart-list"]}>
            <tr>
                <td>
                    <div>
                        <div style={{backgroundColor: props.chartcolor}}
                             className={BorrowChartListItemStyle["color-circle"]}>
                        </div>
                        <div>
                            {props.creditor}
                        </div>
                    </div>
                </td>
                <td>₹ {props.amount.toLocaleString('en-IN')}</td>
                <td><InterestPercentage dateofissued={props.dateofissued}
                                        amount={props.amount}
                                        interest={props.interest}
                    />
                </td>
            </tr>
        </tbody>
    )
}

export default BorrowChartListItem;