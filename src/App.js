import React, {useState} from 'react';
import Borrowed from './components/Borrowed/Borrowed';
import ComputeBorrowed from './components/ComputeBorrowed/ComputeBorrowed';
import BorrowChart from './components/BorrowChart/BorrowChart';
import InterestChart from './components/InterestChart/InterestChart';
import './App.css';

function App() {

  const [data, setData] = useState([]);

  const calculateBorrowData = (datalist) => {
    setData(datalist);
  }

  return (
    <div className="app">
      <div className="app-body">
        <div className="app-main">
          <div className="app-components">
            <InterestChart passInterestChartData={data}/>
            <BorrowChart passBorrowChartData={data}/>
            <ComputeBorrowed passBorrowData={data}/>
            <Borrowed getBorrowData={calculateBorrowData}/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
