import React, { useState } from "react";
import "./FormElements.css";
import Input from "../../../components/Input/Input";
import { useDispatch, useSelector } from "react-redux";
import {
  addBorrow,
  updateBorrow,
} from "../../../features/borrowed/borrowedActions";
import { setEditMode } from "../../../features/borrowed/borrowedSlice";

const FormElements = (props) => {
  
  const dispatch = useDispatch();

  const borrowed = useSelector((state) => state.borrowed.borrowed);

  const selectedRows = useSelector((state) => state.borrowed.selectedRows);

  const editMode = useSelector((state) => state.borrowed.editMode);

  const initialValues = {
    creditor: "",
    amount: "",
    interest: "",
    dateofissued: "",
    duedate: "",
    description: "",
  };

  const borrowToEdit = borrowed.find((row) => row.id === selectedRows[0]);

  const [enteredValues, setEnteredValues] = useState(
    borrowToEdit || initialValues
  );

  const handleInputChange = (identifier, value) => {
    setEnteredValues((previousValues) => ({
      ...previousValues,
      [identifier]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    dispatch(setEditMode(false));

    if (enteredValues.id) {
      dispatch(updateBorrow(enteredValues));
    } else {
      dispatch(addBorrow(enteredValues));
    }

    props.passCloseHandler(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Input
          type="text"
          label="Creditor"
          id="creditor"
          name="creditor"
          onChange={(event) =>
            handleInputChange("creditor", event.target.value)
          }
          value={enteredValues.creditor || ""}
          required
        />
        <div className="input-row">
          <Input
            type="number"
            label="Enter a Amount"
            id="amount"
            name="amount"
            min="5000"
            onChange={(event) =>
              handleInputChange("amount", event.target.value)
            }
            value={enteredValues.amount || ""}
            required
          />
          <Input
            type="number"
            label="Enter a Interest"
            id="interest"
            name="interest"
            min="0.00"
            max="5"
            step="0.01"
            onChange={(event) =>
              handleInputChange("interest", event.target.value)
            }
            value={enteredValues.interest || ""}
            required
          />
        </div>
        <div className="input-row">
          <Input
            type="date"
            label="Date of Issued"
            id="dateofissued"
            name="dateofissued"
            onChange={(event) =>
              handleInputChange("dateofissued", event.target.value)
            }
            value={enteredValues.dateofissued || ""}
            required
          />
          <Input
            type="date"
            label="Due Date"
            id="duedate"
            name="duedate"
            onChange={(event) =>
              handleInputChange("duedate", event.target.value)
            }
            value={enteredValues.duedate || ""}
            required
          />
        </div>
        <Input
          type="text"
          label="Description"
          id="description"
          name="description"
          onChange={(event) =>
            handleInputChange("description", event.target.value)
          }
          value={enteredValues.description || ""}
          className="describe"
          required
        />
        <div className="buttons">
          <input
            type="submit"
            className="submit-button"
            value={editMode ? "SAVE" : "ADD"}
          />
          <input
            type="button"
            className="cancel-button"
            onClick={props.passCloseHandler}
            value="CANCEL"
          />
        </div>
      </form>
    </>
  );
};

export default FormElements;
