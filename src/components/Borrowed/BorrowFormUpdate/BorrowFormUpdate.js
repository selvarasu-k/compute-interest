import React from "react";
import closebtn from "../../../Images/close.png";
import FormUpdate from "./FormUpdate";
import './BorrowFormUpdate.css';

const BorrowFormUpdate = (props) => {
    
    const saveFormBorrowData = (enteredBorrow) => {
        const borrowData = {
            ...enteredBorrow, key: enteredBorrow.key
        };

        props.getUpdateData(borrowData);
    }

    return (
        <div className="all-credit-block">            
            <div className="overlay-block">
                <div className="overlay"></div>
                <div className="overlay-content">
                    <div className="form-parent-block">
                        <div className="form-header">
                            <div className="form-header-name">Edit Credit</div>
                            <span className="closebtn" onClick={() => props.closeHandler(false)}><img src={closebtn} alt="closebutton"/></span>
                        </div>
                        <FormUpdate getFormUpdateData={saveFormBorrowData}
                                    closeHandler={props.closeHandler}
                                    passOneRowData={props.passOneRowData}
                        />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default BorrowFormUpdate;