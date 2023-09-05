import React, {useState} from "react";
import "./FormUpdate.css";

const FormUpdate = (props) => {

    const showData = props.passOneRowData;

    const getData = {
        key: showData.key,
        creditor: showData.creditor,
        amount: showData.amount,
        interest: showData.interest,
        dateofissued: showData.dateofissued,
        description: showData.description,
        duedate: showData.duedate
    }

    const issuedDate = showData.dateofissued.getDate() + 1;
    const issuedMonth = showData.dateofissued.getMonth() + 1;
    const issuedYear = showData.dateofissued.getFullYear();
    
    const dateIssued = issuedMonth + "-" + issuedDate + "-" + issuedYear;
    const showIssuedDate = new Date(dateIssued).toISOString('en-IN').slice(0,10);

    const dueDate = showData.duedate.getDate() + 1;
    const dueMonth = showData.duedate.getMonth() + 1;
    const dueYear = showData.duedate.getFullYear();

    const dateDue = dueMonth + "-" + dueDate + "-" + dueYear;
    const showDueDate = new Date(dateDue).toISOString('en-IN').slice(0,10);

    const [editCreditor, setEditCreditor] = useState(getData.creditor);
    const [editAmount, setEditAmount] = useState(getData.amount);
    const [editInterest, setEditInterest] = useState(getData.interest);
    const [editDateofIssued, setEditDateofIssued] = useState(showIssuedDate);
    const [editDueDate, setEditDueDate] = useState(showDueDate);
    const [editDescribe, setEditDescribe] = useState(getData.description);

    const creditHandler = (event) => {
        const changeCreditor = event.target.value
        setEditCreditor(changeCreditor);
    }
    const amountHandler = (event) => {
        const changeAmount = event.target.value
        setEditAmount(changeAmount);
    }
    const interestHandler = (event) => {
        const changeInterest = event.target.value
        setEditInterest(changeInterest);
    }
    const dateofissuedHandler = (event) => {
        const changeDateofissued = event.target.value
        setEditDateofIssued(changeDateofissued);
    }
    const duedateHandler = (event) => {
        const changeDuedate = event.target.value
        setEditDueDate(changeDuedate);
    }
    const describeHandler = (event) => {
        const changeDescribe = event.target.value
        setEditDescribe(changeDescribe);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const borrowData = {
            key: getData.key,
            creditor: editCreditor,
            amount: editAmount,
            interest: editInterest,
            dateofissued: new Date(editDateofIssued),
            description: editDescribe,
            duedate: new Date(editDueDate) 
        }

        props.getFormUpdateData(borrowData);

        setEditCreditor('');
        setEditAmount('');
        setEditInterest('');
        setEditDateofIssued('');
        setEditDueDate('');
        setEditDescribe('');

        props.closeHandler(false);

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-element">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" value={editCreditor} onChange={creditHandler} name="creditor" autoComplete="off" required/>
                            <div className="underline"></div>
                            <label htmlFor="creditor">Creditor</label>
                        </div>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="number" value={editAmount} onChange={amountHandler} name="amount" min="5000" autoComplete="off" required/>
                                <div className="underline"></div>
                                <label htmlFor="amount">Enter a Amount</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="number" value={editInterest} onChange={interestHandler} name="interest" min="0.00" max="5" step="0.01" autoComplete="off" required/>
                                <div className="underline"></div>
                                <label htmlFor="interest">Enter a Interest</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="date" value={editDateofIssued} onChange={dateofissuedHandler} name="dateofissued"/>
                                <div className="underline"></div>
                                <label htmlFor="dateofissued">Date of Issued</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="date" value={editDueDate} onChange={duedateHandler} name="duedate"/>
                                <div className="underline"></div>
                                <label htmlFor="duedate">Due Date</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-element describe">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" value={editDescribe} onChange={describeHandler} name="description" autoComplete="off" required/>
                            <div className="underline"></div>
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <input type="submit" className="save-button" value="SAVE"/>
                    <input type="button" className="cancel-button" onClick={() => props.closeHandler(false)} value="CANCEL"/>
                </div>
            </form>
        </>

    )
}

export default FormUpdate;