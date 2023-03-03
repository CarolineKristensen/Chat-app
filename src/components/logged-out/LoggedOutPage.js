import React, { useState } from "react";
import {
    Container,
    //Row,
    //Col,
    //Button,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function LoggedOutPage() {
    const [key, setKey] = useState("login");

    return (
        <Container>
            <h1 className="text-center mb-4">Du är utloggad</h1>
            <Tabs
            defaultActiveKey="login"
             id="loginRegister"
             activeKey={key}
             onSelect={(k) => setKey(k)}
             className="mb-3"
             justify
            >
                <Tab eventKey="login" title="Logga in">
                    <Login />
                </Tab>
                <Tab eventKey="register" title="Registrera">
                    <Register />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOutPage;