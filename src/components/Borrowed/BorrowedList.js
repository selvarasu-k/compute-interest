import React, {useState} from "react";
import DateofIssued from "./DateofIssued";
import DueDate from "./DueDate";
import BorrowFormSubmission from "./BorrowFormSubmission/BorrowFormSubmit";
import BorrowFormUpdate from "./BorrowFormUpdate/BorrowFormUpdate";
import BorrowedListStyle from './BorrowedList.module.css';
import './Pagination.css';

const BorrowedList = (props) => {

    const [showModel, setShowModel] = useState(false);
    const [passdata, setPassData] = useState();

    const [isCheckAll, setIsCheckAll] = useState(false);
    const [selectedRows, setSelectedRows] = useState([]);

    const handleRowSelection = (rowId, creditorName) => {
        if (selectedRows.includes(rowId)) {
          setSelectedRows(selectedRows.filter((id) => id !== rowId));
        } else {
          setSelectedRows([...selectedRows, rowId]);
        }
    
        const newData = props.borrowdata.map((row) => {
          if (row.key === rowId) {
            return { ...row, creditorName };
          }
          return row;
        });
        props.setBorrowData(newData);
    };

    const handleDeleteRows = () => {
        const newData = props.borrowdata.filter((row) => !selectedRows.includes(row.key));
        props.setBorrowData(newData);
        setSelectedRows([]);
        setIsCheckAll(false);
    };

    const handleSelectAll = (e) => {
        setIsCheckAll(!isCheckAll);
        setSelectedRows(props.records.map((li) => li.key));
        if (isCheckAll) {
          setSelectedRows([]);
        }
    };

    const handleEditRow = () => {
        selectedRows.filter((id) => {
          props.borrowdata.map((onerow) => {

            if (onerow.key === id) {
              const getData = {
                key: onerow.key,
                creditor: onerow.creditor,
                amount: onerow.amount,
                interest: onerow.interest,
                dateofissued: onerow.dateofissued,
                description: onerow.description,
                duedate: onerow.duedate
              };

              setPassData(getData);
              setShowModel(true);
            }

            return onerow;
          });

          return id;
        });

      };

      const updateData = (borrow) => {
        props.borrowdata.map((row, index) => {
            if(row.key === borrow.key) {
                const updatedRows = [...props.borrowdata];
                updatedRows[index].creditor = borrow.creditor;
                updatedRows[index].amount = borrow.amount;
                updatedRows[index].interest = borrow.interest;
                updatedRows[index].dateofissued = borrow.dateofissued;
                updatedRows[index].duedate = borrow.duedate;
                updatedRows[index].description = borrow.description;

                props.setBorrowData(updatedRows);
                setSelectedRows([]);
            }
            return row;
        })
      }

      const saveBorrowData = (enteredBorrow) => {
            props.getData(enteredBorrow);
      };

    return (
        <div>
            <div>
                <BorrowFormSubmission passBorrowData = {props.passBorrowData} 
                                      getBorrowData={saveBorrowData}
                />
            </div>
            <div>
                {showModel &&
                <BorrowFormUpdate closeHandler={setShowModel}
                                  passOneRowData={passdata}
                                  getUpdateData={updateData}
                />}
            </div>
            <div className={BorrowedListStyle["table-parent-div"]}>
                <div className={BorrowedListStyle["table-heading"]}>
                    <p>Borrowed Information</p>
                    <div className="edit-delete-buttons">
                        <button className={BorrowedListStyle["edit-button"]}
                                onClick={handleEditRow}
                                disabled={selectedRows.length === 1 ? false : true}
                                style={{opacity: selectedRows.length === 1 ? "1" : "0.5"}}>Edit
                        </button>
                        <button className={BorrowedListStyle["delete-button"]}
                                onClick={handleDeleteRows} 
                                disabled={selectedRows.length === 0 ? true : false}
                                style={{opacity: selectedRows.length === 0 ? "0.5" : "1"}}>Delete
                        </button>
                    </div>
                </div>
                <div className={BorrowedListStyle["table-data"]}>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox"
                                        name="selectall"
                                        onChange={handleSelectAll}
                                        checked={isCheckAll}
                                        className={BorrowedListStyle["checkbox"]} />
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
                            {props.records.map((listitem, index) => {
                                return (
                                        <tr key={listitem.key}>
                                            <td><input type="checkbox" 
                                                    name="selectall"
                                                    checked={selectedRows.includes(listitem.key)}
                                                    onChange={() => handleRowSelection(listitem.key, listitem.creditor)}
                                                    className={BorrowedListStyle["checkbox"]} />
                                            </td>
                                            <td>{listitem.creditor}</td>
                                            <td>₹ {new Intl.NumberFormat("en-IN").format(listitem.amount)}</td>
                                            <td>{listitem.interest}</td>
                                            <td><DateofIssued dateofissued={listitem.dateofissued}/></td>
                                            <td>{listitem.description}</td>
                                            <td><DueDate duedate={listitem.duedate}/></td>
                                        </tr>
                                    )}
                                )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );

}

export default BorrowedList;