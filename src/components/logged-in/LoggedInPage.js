import React from "react";
import "./LoggedIn.css";
import {
    Container,
    Row,
    Col
} from "react-bootstrap";
import Chat from "./Chat";
import Contacts from "./Contacts";

function LoggedInPage() {
    return (
        <Container className="loggedInDiv shadow">
            <Row>
                <Col sm={4} className="contacts">
                    <Contacts />
                </Col>
                <Col sm={8} className="chat">
                    <Chat />
                </Col>
            </Row>
        </Container>
    )
}

export default LoggedInPage;