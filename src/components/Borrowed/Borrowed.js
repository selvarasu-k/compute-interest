import React, {useState} from "react";
import BorrowedList from "./BorrowedList";
import Pagination from "./Pagination";
import './Borrowed.css';

const Borrowed = (props) => {

    const saveData = (datalist) => {
        props.Data(datalist);
    }

    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 5;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = props.borrowdata.slice(firstIndex, lastIndex);

    return (
        <div className="list-borrow-data">
            <BorrowedList passBorrowData = {props.passBorrowData}
                          getData={saveData}
                          borrowdata={props.borrowdata}
                          setBorrowData={props.setBorrowData}
                          records={records}
            />
            <Pagination borrowdata={props.borrowdata}
                        setCurrentPage={setCurrentPage}
                        currentPage={currentPage}
                        recordsPerPage={recordsPerPage}
                        lastIndex={lastIndex}
                        firstIndex={firstIndex}
            />
        </div>
    ) 
}

export default Borrowed;