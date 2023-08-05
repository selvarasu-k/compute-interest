import React from "react";
import BorrowedListItem from "./BorrowedListItem";
import BorrowedListStyle from './BorrowedList.module.css';

const BorrowedList = (props) => {
    return (
        <div className={BorrowedListStyle["table-parent-div"]}>
            <div className={BorrowedListStyle["table-heading"]}>
                <p>Borrowed Information</p>
            </div>
            <div className={BorrowedListStyle["table-data"]}>
                <table>
                    <thead>
                        <tr>
                            <th>Creditor</th>
                            <th>Amount</th>
                            <th>Interest</th>
                            <th>Date of Issued</th>
                            <th>Description</th>
                            <th>Due Date</th>
                        </tr>
                    </thead>
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