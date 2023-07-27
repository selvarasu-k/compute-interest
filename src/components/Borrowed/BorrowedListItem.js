import React from "react";
import DateofIssued from "./DateofIssued";
import './BorrowedListItem.css';
import DueDate from "./DueDate";

const BorrowedListItem = (props) => {
        return (
            <tbody>
                <tr>
                    <td>{props.creditor}</td>
                    <td>₹ {props.amount}</td>
                    <td>{props.interest}</td>
                    <DateofIssued dateofissued={props.dateofissued} />
                    <td>{props.description}</td>
                    <DueDate duedate={props.duedate} />
                </tr>
            </tbody>
        )}

export default BorrowedListItem;