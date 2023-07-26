import React from 'react';
import './App.css';
import Borrowed from './components/Borrowed/Borrowed';

function App() {
  return (
    <div className="app">
      <div className='app-body'>
        <div className='app-main'>
          <div className='app-components'>
            <Borrowed />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
