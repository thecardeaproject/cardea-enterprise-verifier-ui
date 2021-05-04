import React, { Component } from "react";
import "./Root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../assets/cardea.png"
import avatar from "../assets/avatar.png"
import logo from "../assets/CARDEA-Logo.png"

class Root extends Component {
  render() {
    console.log("Container ", Container)

    return (
      <>
        <div className="container-fluid">
          <div className="row">
            <div className="home col s12">
              <div className="col upper-fold">
                <img
                  src={logo}
                  className="img-fluid"
                  alt=""
                />
                <Container>
                  <Row>
                    <Col xs="6" className="left-fold">
                      <img
                        src={avatar}
                        className="avatar"
                        alt=""
                      />
                    </Col>
                    <Col xs="6" className="right-fold">
                      <h1 className="header">What’s A Cardea?</h1>
                      <h4 className="head">Show The World Who You Are™</h4>
                      <p className="para">
                        Read more
                      </p>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Root;
