import React from "react";
import "./RequestHeader.css";

const RequestHeader = () => {
  return (
    <>
      <div className="request-header">
        <div className="d-flex py-2">
          <div className="w-25 heads">
            <div>
              St Judas Hospital
              <div className="sub-text">Sarasota, FL. 33178</div>
            </div>
          </div>
          <div className="left-line"></div>
          <div className="w-25 heads">
            <div>
              10
              <div className="sub-text">October</div>
            </div>
            <div style={{width: '38px'}}>
              -
            </div>
            <div>
             17
              <div className="sub-text">December</div>
            </div>
          </div>
          <div className="left-line"></div>
          <div className="w-25 heads">
            <div>
              20 Rooms
              <div className="sub-text">10 Single, 10 doubles</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default RequestHeader;
