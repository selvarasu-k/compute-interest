import React, { useEffect } from "react";
import DateofIssued from "./DateofIssued";
import DueDate from "./DueDate";
import ShowModel from "./ShowModel/ShowModel";
import BorrowedListStyle from "./BorrowedList.module.css";
import "./Pagination.css";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteBorrow,
  fetchBorrow,
} from "../../features/borrowed/borrowedActions";
import {
  deleteAll,
  deleteBorrowData,
  rowSelection,
  setEditMode,
  setShowModel,
} from "../../features/borrowed/borrowedSlice";

const BorrowedList = (props) => {

  const dispatch = useDispatch();

  const borrowed = useSelector((state) => state.borrowed.borrowed);

  const selectedRows = useSelector((state) => state.borrowed.selectedRows);

  const isCheckAll = useSelector((state) => state.borrowed.isCheckAll);

  useEffect(() => {
    dispatch(fetchBorrow());
  }, [dispatch]);

  const handleRowSelection = (rowId) => {
    dispatch(rowSelection(rowId));
  };

  const handleDeleteRows = () => {
    dispatch(deleteBorrowData());
    selectedRows.forEach((id) => {
      dispatch(deleteBorrow(id));
    });
  };

  const handleSelectAll = () => {
    dispatch(deleteAll());
  };

  const handleEditRow = () => {
    selectedRows.filter((id) => {
      borrowed.map((onerow) => {

        if (onerow.id === id) {
          dispatch(setEditMode(true));
          dispatch(setShowModel(true));
        }
        return onerow;

      });
      return id;
    });
  };

  return (
    <div>
      <div>
        <ShowModel />
      </div>
      <div className={BorrowedListStyle["table-parent-div"]}>
        <div className={BorrowedListStyle["table-heading"]}>
          <p>Borrowed Information</p>
          <div className="edit-delete-buttons">
            <button
              className={BorrowedListStyle["edit-button"]}
              onClick={handleEditRow}
              disabled={selectedRows.length === 1 ? false : true}
              style={{ opacity: selectedRows.length === 1 ? "1" : "0.5" }}
            >
              Edit
            </button>
            <button
              className={BorrowedListStyle["delete-button"]}
              onClick={handleDeleteRows}
              disabled={selectedRows.length === 0 ? true : false}
              style={{ opacity: selectedRows.length === 0 ? "0.5" : "1" }}
            >
              Delete
            </button>
          </div>
        </div>
        <div className={BorrowedListStyle["table-data"]}>
          <table>
            <thead>
              <tr>
                <th>
                  <input
                    type="checkbox"
                    name="selectall"
                    onChange={handleSelectAll}
                    checked={isCheckAll}
                    className={BorrowedListStyle["checkbox"]}
                  />
                </th>
                <th>Creditor</th>
                <th>Amount</th>
                <th>Interest</th>
                <th>Date of Issued</th>
                <th>Description</th>
                <th>Due Date</th>
              </tr>
            </thead>
            <tbody className={BorrowedListStyle["table-body-list"]}>
              {props.records?.map((listitem) => {
                return (
                  <tr key={listitem.id}>
                    <td>
                      <input
                        type="checkbox"
                        name="selectall"
                        checked={selectedRows.includes(listitem.id)}
                        onChange={() =>
                          handleRowSelection(listitem.id, listitem.creditor)
                        }
                        className={BorrowedListStyle["checkbox"]}
                      />
                    </td>
                    <td>{listitem.creditor}</td>
                    <td>
                      ₹ {new Intl.NumberFormat("en-IN").format(listitem.amount)}
                    </td>
                    <td>{listitem.interest}</td>
                    <td>
                      <DateofIssued
                        dateofissued={new Date(listitem.dateofissued)}
                      />
                    </td>
                    <td>{listitem.description}</td>
                    <td>
                      <DueDate duedate={new Date(listitem.duedate)} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default BorrowedList;
