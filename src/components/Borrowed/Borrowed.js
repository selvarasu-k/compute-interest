import React from "react";
import BorrowedList from "./BorrowedList";
import './Borrowed.css';

const Borrowed = (props) => {

    return (
        <div className="list-borrow-data">
            <BorrowedList passBorrowData = {props.passBorrowData} />
        </div>
    ) 
}

export default Borrowed;