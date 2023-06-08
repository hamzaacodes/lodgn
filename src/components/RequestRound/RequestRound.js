import React from "react";
import "./RequestRound.css";
import RequestHeader from "../RequestHeader/RequestHeader";
import PackagexBox from "../PackagexBox/PackagexBox";

const RequestRound = () => {
  return (
    <>
      <div className="request-round">
        <RequestHeader />
        <div>
            <div className="status-bar">
                <div className="completed">Completed</div>
            </div>
        </div>
        <PackagexBox/>
      </div>
    </>
  );
};

export default RequestRound;
