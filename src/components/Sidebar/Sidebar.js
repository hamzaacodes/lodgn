import React from "react";
import Button from "react-bootstrap/Button";
import "./Sidebar.css";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar d-flex align-items-center">
        <div className="sidebar-container d-flex flex-column justify-content-between align-items-center">
          <div className="upper-div w-75">
            <h2>LODGN</h2>
            <div className="list-div">
              <div className="list-text">
                Current Requests
                <div className="bottom-line"></div>
              </div>
              <div className="list-text">
                Ongoing stays
                <div className="bottom-line"></div>
              </div>
              <div className="list-text">
                Previous stays
                <div className="bottom-line"></div>
              </div>
              <div className="list-text">
                Reports
                <div className="bottom-line"></div>
              </div>
            </div>
          </div>
          <div className="bottom-div w-75">
            <Button className="logout-btn">Log-out</Button>
            <div>Help Desk</div>
            <div>786-874-9988</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
