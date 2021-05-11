import React, { Component, useEffect, useState } from "react";
import "./Root.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import avatar from "../assets/cardea.png"
import logo from "../assets/CARDEA-Logo.png"
import QRCode from 'qrcode.react'
import styled from 'styled-components'

function Root(props) {
  console.log("Container ", Container)

  const QR = styled(QRCode)`
    display: block;
    margin: auto;
    padding: 10px;
    width: 300px;
  `
  const [waitingForInvitation, setwaitingForInvitation] = useState(false)
  const [waitingForConnection, setWaitingForConnection] = useState(false)
  const [connected, setConnected] = useState(false)

  //TODO there is a bug that causes us to issue to INVITATION requests
  if (!waitingForInvitation) {
    props.sendRequest('INVITATIONS', 'CREATE_SINGLE_USE', {})
    setwaitingForInvitation(true)
  }

  useEffect(() => { 
    console.log("here")
    console.log(props.QRCodeURL)
    if (props.QRCodeURL !== "") {
      setWaitingForConnection(true)
    }
    if (props.contacts.length > 0 && waitingForConnection) {
      setConnected(true)
    }
    
  }, [props.QRCodeURL, props.contacts, waitingForConnection])

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
                  {props.emailVerifiedData ? (
                      <Col xs="6" className="right-fold">
                        <h1 className="header">Credentials verified!</h1>
                        <h4 className="head"></h4>
                        <p className="para">
                          Email: {props.emailVerifiedData.address.raw}
                        </p>
                    </Col>) : (
                      connected ? (
                        <Col xs="6" className="right-fold">
                          <h1 className="header">Verify your email credentials</h1>
                          <h4 className="head"></h4>
                          <p className="para">
                            You will now receive a request on your mobile app to send your credential to us!
                          </p>
                        </Col>
                      ) : (
                        <Col xs="6" className="right-fold">
                          <h1 className="header">Verify your email credentials</h1>
                          <h4 className="head"></h4>
                          <p className="para">
                            Simply scan the following QR code to begin the verification process!
                          </p>
                          <p>
                          {props.QRCodeURL ? (
                              <QR value={props.QRCodeURL} size={256} renderAs="svg" />
                            ) : (
                              <span>Loading...</span>
                            )}
                          </p>
                        </Col>
                      )
                    )}          
                </Row>
              </Container>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Root;
