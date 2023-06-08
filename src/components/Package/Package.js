import React from "react";
import "./Package.css";
import Button from "react-bootstrap/Button";
import HashImage from "../../assets/Hash.png";

const Package = () => {
  return (
    <>
      <div className="package">
        <div className="package-head">
            <div>
                <img src={HashImage} alt="" />
            </div>
            <div>
                Holiday Inn
            </div>
        </div>
        <div className="package-bottom">
            <div>1.5 miles away from joblocation</div>
            <div className="d-flex w-100">
                <div className="w-50 px-2">
                    <div>Single: $120</div>
                    <div>Doubles: $145</div>
                </div>
                <div className="w-50 px-2 py-2"> 
                    <Button>Book Now</Button>
                </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Package;
