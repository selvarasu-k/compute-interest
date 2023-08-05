import React from "react";
import DateofIssued from "./DateofIssued";
import DueDate from "./DueDate";
import BorrowedListItemStyle from './BorrowedListItem.module.css';

const BorrowedListItem = (props) => {
        return (
            <tbody className={BorrowedListItemStyle["table-body-list"]}>
                <tr>
                    <td>{props.creditor}</td>
                    <td>₹ {props.amount.toLocaleString('en-IN')}</td>
                    <td>{props.interest}</td>
                    <td><DateofIssued dateofissued={props.dateofissued} /></td>
                    <td>{props.description}</td>
                    <td><DueDate duedate={props.duedate} /></td>
                </tr>
            </tbody>
        )}

export default BorrowedListItem;