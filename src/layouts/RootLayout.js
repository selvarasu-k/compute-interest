import React, { useState } from "react";
import ComputeBorrowed from "./ComputeBorrowed/ComputeBorrowed";
import BorrowChart from "./BorrowChart/BorrowChart";
import InterestChart from "./InterestChart/InterestChart";
import BorrowedTable from "./BorrowedTable/BorrowedTable";
import Profile from "./Profile/Profile";
import About from "./Profile/About";
import Borrowed from "./CRUD BorrowedTable/Borrowed";
import "./RootLayout.css";

const RootLayout = () => {

  const [switchingTab, setSwitchingTab] = useState(0);

  const activeTabIndex = (id) => {
    setSwitchingTab(id);
  };

  return (
    <div className="app">
      <div className="app-body">
        <div className="app-container">
          <div className="side-bar">
            <Profile />
            <div className="tab-list">
              <div
                onClick={() => activeTabIndex(0)}
                className={switchingTab === 0 ? "active" : "list-item"}
              >
                Dashboard
              </div>
              <div
                onClick={() => activeTabIndex(1)}
                className={switchingTab === 1 ? "active" : "list-item"}
              >
                Credits
              </div>
              <div
                onClick={() => activeTabIndex(2)}
                className={switchingTab === 2 ? "active" : "list-item"}
              >
                About
              </div>
            </div>
          </div>
          <div className="tab-content-block">
            <div
              className={
                switchingTab === 0 ? "active-tab-content" : "tab-content"
              }
            >
              <div className="app-components">
                <div className="all-credits">Dashboard</div>
                <ComputeBorrowed />
                <BorrowChart />
                <InterestChart />
                <BorrowedTable />
              </div>
            </div>
            <div
              className={
                switchingTab === 1 ? "active-tab-content" : "tab-content"
              }
            >
              <div className="app-components">
                <div className="all-credits-block">
                  <Borrowed />
                </div>
              </div>
            </div>
            <div
              className={
                switchingTab === 2 ? "active-tab-content" : "tab-content"
              }
            >
              <div className="app-components">
                <About />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RootLayout;
