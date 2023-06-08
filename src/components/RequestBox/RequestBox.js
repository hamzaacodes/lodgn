import React from "react";
import "./RequestBox.css";
import RequestHeader from "../RequestHeader/RequestHeader";

const RequestBox = () => {
  return (
    <>
      <div className="request-box">
        <RequestHeader/>
        <div>
            <div className="status-bar">
                <div className="recieved">
                    <span style={{width: '50%'}}>Recieved</span>
                </div>
                <div className="negotiating">Negotiating</div>
                <div className="completed">Completed</div>
            </div>
        </div>
      </div>
    </>
  );
};

export default RequestBox;
