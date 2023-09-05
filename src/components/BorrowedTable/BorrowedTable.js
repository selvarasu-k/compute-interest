import React from "react";
import BorrowedTableList from "./BorrowedTableList";
import './BorrowedTable.css';

const BorrowedTable = (props) => {

    return (
        <div className="list-borrow-data">
            <BorrowedTableList passBorrowTableData = {props.passBorrowTableData} />
        </div>
    ) 
}

export default BorrowedTable;