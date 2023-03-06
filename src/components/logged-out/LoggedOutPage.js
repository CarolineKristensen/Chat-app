import React, { useState } from "react";
import {
    Container,
    Tab,
    Tabs
} from "react-bootstrap";
import Login from "./Login";
import Register from "./Register";

function LoggedOutPage() {
    const [key, setKey] = useState("login");

    return (
        <Container>
            {key == "login" ? (
                <h1 className="text-center">Logga in</h1>
            ): (
                <h1 className="text-center">Registrera dig</h1>
            )}
            <Tabs
            defaultActiveKey="login"
             id="loginRegister"
             activeKey={key}
             onSelect={(k) => setKey(k)}
             className="mb-3"
             justify
            >
                <Tab eventKey="login" title="Inloggning">
                    <Login />
                </Tab>
                <Tab eventKey="register" title="Registrering">
                    <Register />
                </Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOutPage;