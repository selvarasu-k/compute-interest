import React from "react";
import './DateofIssued.css';

const DateofIssued = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", 
    "Jul","Aug", "Sep", "Oct", "Nov","Dec"];

    const date = props.dateofissued.getDate();
    const month = months[props.dateofissued.getMonth()];
    const year = props.dateofissued.getFullYear();
        
    return (
        <td>
            {date} {month} {year} 
        </td>
    )}

export default DateofIssued;