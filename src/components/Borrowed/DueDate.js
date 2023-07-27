import React from "react";
import './DueDate.css';

const DueDate = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", 
    "Jul","Aug", "Sep", "Oct", "Nov","Dec"];

    const date = props.duedate.getDate();
    const month = months[props.duedate.getMonth() + 1];
    const year = props.duedate.getFullYear();
        
    return (
        <td>
            {date} {month} {year} 
        </td>
    )}

export default DueDate;