import React from "react";
import "./PackagexBox.css";
import Package from "../Package/Package";

const PackagexBox = () => {
  return <>
  <div className="package-box">
    <div className="package-container">
        <div className="red-box">
            Rare Find
        </div>
        <Package/>
        <Package/>
        <Package/>
    </div>
  </div>
  </>;
};

export default PackagexBox;
