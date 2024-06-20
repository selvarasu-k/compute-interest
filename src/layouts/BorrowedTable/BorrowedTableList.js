import React from "react";
import BorrowedTableListItem from "./BorrowedTableListItem";
import BorrowedTableListStyle from './BorrowedTableList.module.css';
import { useSelector } from "react-redux";

const BorrowedTableList = () => {

    const borrowed = useSelector((state) => state.borrowed.borrowed);

    const recentBorrowTableData = borrowed.slice(0,6);

    return (
        <div className={BorrowedTableListStyle["table-parent-div"]}>
            <div className={BorrowedTableListStyle["table-heading"]}>
                <p>Borrowed Information</p>
            </div>
            <div className={BorrowedTableListStyle["table-data"]}>
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
                    {recentBorrowTableData.map(listitem => {
                        return (
                            <BorrowedTableListItem 
                                key={listitem.id}
                                creditor={listitem.creditor}
                                amount={listitem.amount}
                                interest={listitem.interest}
                                dateofissued={new Date(listitem.dateofissued)}
                                description={listitem.description}
                                duedate={new Date(listitem.duedate)}
                            />
                        )}
                    )}
                </table>
            </div>
        </div>
    );

}

export default BorrowedTableList;