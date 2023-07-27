import React from "react";
import BorrowedListItem from "./BorrowedListItem";
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
                    {props.passBorrowData.map(listitem => {
                        return (
                            <BorrowedListItem 
                                key={listitem.key}
                                creditor={listitem.creditor}
                                amount={listitem.amount}
                                interest={listitem.interest}
                                dateofissued={listitem.dateofissued}
                                description={listitem.description}
                                duedate={listitem.duedate}
                            />
                        )}
                    )}
                </table>
            </div>
        </div>
    );

}

export default BorrowedList;