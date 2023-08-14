import React, { useState } from 'react';
import Borrowed from './components/Borrowed/Borrowed';
import ComputeBorrowed from './components/ComputeBorrowed/ComputeBorrowed';
import BorrowChart from './components/BorrowChart/BorrowChart';
import InterestChart from './components/InterestChart/InterestChart';
import Profile from './components/Profile/Profile';
import BorrowFormSubmission from './components/BorrowFormSubmission/BorrowFormSubmit';
import './App.css';

const myBorrowList = [
  {
      key: 'a1',
      creditor: 'Vengadasalam',
      amount: 10000,
      interest: 2,
      dateofissued: new Date('06-01-2023'),
      description: 'Tamil Date Vaikaasi 18',
      duedate: new Date('06-01-2024'),
  },
  {
      key: 'a2',
      creditor: 'Sinthamani',
      amount: 50000,
      interest: 1.5,
      dateofissued: new Date('01-25-2023'),
      description: 'Tamil date thai 11',
      duedate: new Date('01-25-2024')
  },
  {
      key: 'a3',
      creditor: 'Palanisamy BNP',
      amount: 10000,
      interest: 2,
      dateofissued: new Date('11-22-2022'),
      description: 'Tamil date karthikai 6',
      duedate: new Date('11-22-2023')
  },
  {
      key: 'a4',
      creditor: 'Lakshmi Amma',
      amount: 10000,
      interest: 2,
      dateofissued: new Date('10-28-2022'),
      description: 'Tamil date aippasi 11',
      duedate: new Date('10-28-2023')
  },
  {
      key: 'a5',
      creditor: 'Vathiyar',
      amount: 100000,
      interest: 1.5,
      dateofissued: new Date('02-15-2023'),
      description: 'Tamil date Maasi 03',
      duedate: new Date('02-15-2024')
  },
  {
      key: 'a6',
      creditor: 'Periamma',
      amount: 10000,
      interest: 2,
      dateofissued: new Date('10-31-2022'),
      description: 'Tamil date aippasi 14',
      duedate: new Date('10-31-2023')
  }
];

function App() {

    const [borrowdata, setBorrowData] = useState(myBorrowList);

    const addBorrowData = (borrow) => {
      setBorrowData((prevBorrow) => {
        return [borrow, ...prevBorrow];
      })
    }

    return (
      <div className="app">
        <div className="app-body">
          <div className="app-container">
            <div className='side-bar'>
              <Profile/>
            </div>
            <div className="app-components">
              <BorrowFormSubmission getBorrowData={addBorrowData}/>
              <ComputeBorrowed passComputeBorrowData={borrowdata}/>
              <BorrowChart passBorrowChartData={borrowdata}/>
              <InterestChart passInterestChartData={borrowdata}/>
              <Borrowed passBorrowData={borrowdata}/>
            </div>
          </div>
        </div>
      </div>
    );
}

export default App;
