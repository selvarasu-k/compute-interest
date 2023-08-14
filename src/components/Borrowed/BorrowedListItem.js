import React from "react";
import DateofIssued from "./DateofIssued";
import DueDate from "./DueDate";
import BorrowedListItemStyle from './BorrowedListItem.module.css';

const BorrowedListItem = (props) => {

        const amountFormatted = new Intl.NumberFormat("en-IN").format(props.amount);

        return (
            <tbody className={BorrowedListItemStyle["table-body-list"]}>
                <tr>
                    <td>{props.creditor}</td>
                    <td>₹ {amountFormatted}</td>
                    <td>{props.interest}</td>
                    <td><DateofIssued dateofissued={props.dateofissued} /></td>
                    <td>{props.description}</td>
                    <td><DueDate duedate={props.duedate} /></td>
                </tr>
            </tbody>
        )}

export default BorrowedListItem;