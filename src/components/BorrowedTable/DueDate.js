import React from "react";

const DueDate = (props) => {

    const months = ["Jan", "Feb", "Mar", "Apr", "May","Jun", 
    "Jul","Aug", "Sep", "Oct", "Nov","Dec"];

    const date = props.duedate.getDate();
    const month = months[props.duedate.getMonth()];
    const year = props.duedate.getFullYear();
        
    return (
                <>
                    {date} {month} {year}
                </> 
    )}

export default DueDate;