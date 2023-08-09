import React, {useState} from 'react';
import Borrowed from './components/Borrowed/Borrowed';
import ComputeBorrowed from './components/ComputeBorrowed/ComputeBorrowed';
import BorrowChart from './components/BorrowChart/BorrowChart';
import InterestChart from './components/InterestChart/InterestChart';
import Profile from './components/Profile/Profile';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const calculateBorrowData = (datalist) => {
    setData(datalist);
  }

  return (
    <div className="app">
      <div className="app-body">
        <div className="app-container">
          <div className='side-bar'>
            <Profile/>
          </div>
          <div className="app-components">
            <ComputeBorrowed passBorrowData={data}/>
            <BorrowChart passBorrowChartData={data}/>
            <InterestChart passInterestChartData={data}/>
            <Borrowed getBorrowData={calculateBorrowData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
