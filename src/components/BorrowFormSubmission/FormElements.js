import React, { useState } from "react";
import "./FormElements.css";

const FormElements = (props) => {

    const [enterCreditor, setEnterCreditor] = useState('');
    const [enterAmount, setEnterAmount] = useState('');
    const [enterInterest, setEnterInterest] = useState('');
    const [enterDateofIssued, setEnterDateofIssued] = useState('');
    const [enterDueDate, setEnterDueDate] = useState('');
    const [enterDescribe, setEnterDescribe] = useState('');

    const creditHandler = (event) => {
        setEnterCreditor(event.target.value);
    }
    const amountHandler = (event) => {
        setEnterAmount(event.target.value);
    }
    const interestHandler = (event) => {
        setEnterInterest(event.target.value);
    }
    const dateofissuedHandler = (event) => {
        setEnterDateofIssued(event.target.value);
    }
    const duedateHandler = (event) => {
        setEnterDueDate(event.target.value);
    }
    const describeHandler = (event) => {
        setEnterDescribe(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        const borrowData = {
            creditor: enterCreditor,
            amount: enterAmount,
            interest: enterInterest,
            dateofissued: new Date(enterDateofIssued),
            description: enterDescribe,
            duedate: new Date(enterDueDate) 
        }

        props.getFormBorrowData(borrowData);

        setEnterCreditor('');
        setEnterAmount('');
        setEnterInterest('');
        setEnterDateofIssued('');
        setEnterDueDate('');
        setEnterDescribe('');

        props.passCloseHandler(false);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <div className="input-element">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" value={enterCreditor} onChange={creditHandler} name="creditor" autoComplete="off" required/>
                            <div className="underline"></div>
                            <label htmlFor="creditor">Creditor</label>
                        </div>
                    </div>
                </div>
                <div className="input-row">
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="number" value={enterAmount} onChange={amountHandler} name="amount" min="5000" autoComplete="off" required/>
                                <div className="underline"></div>
                                <label htmlFor="amount">Enter a Amount</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="number" value={enterInterest} onChange={interestHandler} name="interest" min="0.00" max="5" step="0.01" autoComplete="off" required/>
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
                                <input type="date" value={enterDateofIssued} onChange={dateofissuedHandler} name="dateofissued" required/>
                                <div className="underline"></div>
                                <label htmlFor="dateofissued">Date of Issued</label>
                            </div>
                        </div>
                    </div>
                    <div className="input-element">
                        <div className="wrapper">
                            <div className="input-data">
                                <input type="date" value={enterDueDate} onChange={duedateHandler} name="duedate" required/>
                                <div className="underline"></div>
                                <label htmlFor="duedate">Due Date</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="input-element describe">
                    <div className="wrapper">
                        <div className="input-data">
                            <input type="text" value={enterDescribe} onChange={describeHandler} name="description" autoComplete="off" required/>
                            <div className="underline"></div>
                            <label htmlFor="description">Description</label>
                        </div>
                    </div>
                </div>
                <div className="buttons">
                    <input type="submit" className="submit-button" value="ADD"/>
                    <input type="button" className="cancel-button" onClick={props.passCloseHandler} value="CANCEL"/>
                </div>
            </form>
        </>

    )
}

export default FormElements;