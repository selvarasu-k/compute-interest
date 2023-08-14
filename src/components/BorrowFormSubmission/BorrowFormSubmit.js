import React, { useState } from "react";
import closebtn from "../../Images/close.png";
import FormElements from "./FormElements";
import './BorrowFormSubmit.css';

const BorrowFormSubmission = (props) => {

    const [formdata, setFormData] = useState(false);

    const showFormHandler = () => {
        setFormData(!formdata);
    }

    const hideFormHandler = () => {
        setFormData(!formdata);
    }

    const saveFormBorrowData = (enteredBorrow) => {
        const borrowData = {
            ...enteredBorrow,
            key: Math.random().toString(),
        };
        props.getBorrowData(borrowData);
    }

    return (
        <div className="dashboard-block">
            <div className="dashboard-name">
                Dashboard
            </div>
            <div className="add-button">
                <button className="credit-button" onClick={showFormHandler}>ADD CREDIT</button>
            </div>
            {formdata?
            <div className="overlay-block">
                <div className="overlay"></div>
                <div className="overlay-content">
                    <div className="form-parent-block">
                        <div className="form-header">
                            <div className="form-header-name">New Credit</div>
                            <span className="closebtn" onClick={hideFormHandler}><img src={closebtn} alt="closebutton"/></span>
                        </div>
                        <FormElements passCloseHandler={hideFormHandler}
                                      getFormBorrowData={saveFormBorrowData}/>
                    </div>
                </div>
            </div> : ""}
        </div>
    )
}

export default BorrowFormSubmission;