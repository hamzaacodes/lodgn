import React from "react";
import "./Home.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Sidebar from "../../components/Sidebar/Sidebar";
import RequestBox from "../../components/RequestBox/RequestBox";
import RequestRound from "../../components/RequestRound/RequestRound";
import ChatImage from "../../assets/Chat.png";

const Home = () => {
  return (
    <>
      <div className="home-page d-flex">
        <Sidebar />
        <div className="main">
          <div className="main-content">
            <Container fluid>
              <Row>
                <h2>You currently have 3 request</h2>
              </Row>
              <Row>
                <RequestBox />
              </Row>
              <Row>
                <RequestRound />
              </Row>
            </Container>
          </div>
        </div>
        <div className="contact-div">
          <img src={ChatImage} alt="" />
        </div>
      </div>
    </>
  );
};

export default Home;
