import React from "react";
import closebtn from "../../../images/close.png";
import FormElements from "./FormElements";
import "./ShowModel.css";
import { useDispatch, useSelector } from "react-redux";
import {
  setEditMode,
  setShowModel,
} from "../../../features/borrowed/borrowedSlice";

const ShowModel = () => {
    
  const dispatch = useDispatch();

  const selectedRows = useSelector((state) => state.borrowed.selectedRows);

  const showModel = useSelector((state) => state.borrowed.showModel);

  const editMode = useSelector((state) => state.borrowed.editMode);

  const showFormHandler = () => {
    if (selectedRows.length === 0) {
      dispatch(setShowModel(!showModel));
    } else {
      window.confirm("Uncheck select row");
    }
    dispatch(setEditMode(false));
  };

  const hideFormHandler = () => {
    dispatch(setShowModel(!showModel));
  };

  return (
    <div className="all-credit-block">
      <div className="credit-name">All Credits</div>
      <div className="add-button">
        <button className="credit-button" onClick={showFormHandler}>
          ADD CREDIT
        </button>
      </div>
      {showModel ? (
        <div className="overlay-block">
          <div className="overlay"></div>
          <div className="overlay-content">
            <div className="form-parent-block">
              <div className="form-header">
                <div className="form-header-name">
                  {editMode ? "Edit Credit" : "New Credit"}
                </div>
                <span className="closebtn" onClick={hideFormHandler}>
                  <img src={closebtn} alt="closebutton" />
                </span>
              </div>
              <FormElements passCloseHandler={hideFormHandler} />
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ShowModel;
