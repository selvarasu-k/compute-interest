import React, { useState } from "react";
import BorrowedList from "./BorrowedList";
import Pagination from "./Pagination";
import "./Borrowed.css";
import { useSelector } from "react-redux";

const Borrowed = () => {

  const borrowed = useSelector((state) => state.borrowed.borrowed);

  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 5;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = borrowed.slice(firstIndex, lastIndex);

  return (
    <div className="list-borrow-data">
      <BorrowedList records={records} />
      <Pagination
        borrowdata={borrowed}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        recordsPerPage={recordsPerPage}
        lastIndex={lastIndex}
        firstIndex={firstIndex}
      />
    </div>
  );
};

export default Borrowed;
