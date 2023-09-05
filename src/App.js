import React, { useState } from 'react';
import ComputeBorrowed from './components/ComputeBorrowed/ComputeBorrowed';
import BorrowChart from './components/BorrowChart/BorrowChart';
import InterestChart from './components/InterestChart/InterestChart';
import BorrowedTable from './components/BorrowedTable/BorrowedTable';
import Profile from './components/Profile/Profile';
import About from './components/Profile/About';
import Borrowed from './components/Borrowed/Borrowed';
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
      dateofissued: new Date('10-30-2022'),
      description: 'Tamil date aippasi 14',
      duedate: new Date('10-30-2023')
  }
];

function App() {

    const [borrowdata, setBorrowData] = useState(myBorrowList);

    const addData = (data) => {
      setBorrowData((prevBorrow) => {
        return [data, ...prevBorrow];
      })   
    }

    const [switchingTab, setSwitchingTab] = useState(0);

    const activeTabIndex = (id) => {
      setSwitchingTab(id);
    }

    return (
      <div className="app">
        <div className="app-body">
          <div className="app-container">
            <div className='side-bar'>
              <Profile/>
              <div className="tab-list">
                <div onClick={() => activeTabIndex(0)} 
                     className={switchingTab === 0 ? "active" : "list-item"}>
                  Dashboard
                </div>
                <div onClick={() => activeTabIndex(1)} 
                     className={switchingTab === 1 ? "active" : "list-item"}>
                  Credits
                </div>
                <div onClick={() => activeTabIndex(2)} 
                     className={switchingTab === 2 ? "active" : "list-item"}>
                  About
                </div>
              </div>
            </div>
            <div className='tab-content-block'>
              <div className={switchingTab === 0 ? "active-tab-content" : "tab-content"}>
                <div className="app-components">
                  <div className="all-credits">Dashboard</div>
                  <ComputeBorrowed passComputeBorrowData={borrowdata}/>
                  <BorrowChart passBorrowChartData={borrowdata}/>
                  <InterestChart passInterestChartData={borrowdata}/>
                  <BorrowedTable passBorrowTableData={borrowdata}/>
                </div>
              </div>
              <div className={switchingTab === 1 ? "active-tab-content" : "tab-content"}>
                <div className='app-components'>
                  <div className='all-credits-block'>
                    <Borrowed passBorrowData={myBorrowList}
                              Data={addData}
                              borrowdata={borrowdata}
                              setBorrowData={setBorrowData}
                    />
                  </div>
                </div>
              </div>
              <div className={switchingTab === 2 ? "active-tab-content" : "tab-content"}>
                <div className='app-components'>
                  <About/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default App;
