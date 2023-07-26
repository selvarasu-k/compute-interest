import React from "react";
import './BorrowedList.css';

const BorrowedList = (props) => {
    return (
        <div className="table-parent-div">
            <div className="table-heading">
                <p>Borrowed Information</p>
            </div>
            <div className="table-data">
                <table>
                    <tr>
                        <th>Creditor</th>
                        <th>Amount</th>
                        <th>Interest</th>
                        <th>Date of Issued</th>
                        <th>Description</th>
                        <th>Due Date</th>
                    </tr>
                    {props.passBorrowData}
                </table>
            </div>
        </div>
    );

}

export default BorrowedList;