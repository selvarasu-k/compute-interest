import React from "react";
import BorrowedList from "./BorrowedList";
import './Borrowed.css';

const myBorrowList = [
    {
        key: 'a1',
        creditor: 'Vengadasalam',
        amount: 10000,
        interest: 2,
        dateofissued: '01 Jun 2023',
        description: 'Tamil Date Vaikaasi 18',
        duedate: '01 Jun 2024'
    },
    {
        key: 'a2',
        creditor: 'Sinthamani',
        amount: 50000,
        interest: 1.5,
        dateofissued: '25 Jan 2023',
        description: 'Tamil date thai 11',
        duedate: '01 Jun 2024'
    },
    {
        key: 'a3',
        creditor: 'Palanisamy BNP',
        amount: 10000,
        interest: 2,
        dateofissued: '22 Nov 2022',
        description: 'Tamil date karthikai 6',
        duedate: '22 Nov 2023'
    },
    {
        key: 'a4',
        creditor: 'Lakshmi Amma',
        amount: 10000,
        interest: 2,
        dateofissued: '28 Oct 2022',
        description: 'Tamil date aippasi 11',
        duedate: '28 Oct 2023'
    },
    {
        key: 'a5',
        creditor: 'Vathiyar',
        amount: 100000,
        interest: 1.5,
        dateofissued: '15 Feb 2023',
        description: 'Tamil date Maasi 03',
        duedate: '15 Feb 2024'
    },
    {
        key: 'a6',
        creditor: 'Periamma',
        amount: 10000,
        interest: 2,
        dateofissued: '31 Oct 2022',
        description: 'Tamil date aippasi 14',
        duedate: '31 Oct 2023'
    }
];

const Borrowed = () => {

    const BorrowData = myBorrowList.map(listitem => {
        return (
                <tr>
                    <td key={listitem.key}>{listitem.creditor}</td>
                    <td key={listitem.key}>₹ {listitem.amount}</td>
                    <td key={listitem.key}>{listitem.interest}</td>
                    <td key={listitem.key}>{listitem.dateofissued}</td>
                    <td key={listitem.key}>{listitem.description}</td>
                    <td key={listitem.key}>{listitem.duedate}</td>
                </tr>
            )
        }
    );
    return (
        <div>
            <BorrowedList passBorrowData = {BorrowData} />
        </div>
    ) 
}

export default Borrowed;