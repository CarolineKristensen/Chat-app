import React, { useState } from "react";
import {
    Container,
    //Row,
    //Col,
    //Button,
    Tab,
    Tabs
} from "react-bootstrap";

function LoggedOutPage() {
    const [key, setKey] = useState("login");

    return (
        <Container>
            <h1>Du är utloggad</h1>
            <Tabs
             id="login"
             activeKey={key}
             onSelect={(k) => setKey(k)}
             className="mb-3"
            >
                <Tab eventKey="login" title="Logga in"></Tab>
                <Tab eventKey="register" title="Registrera"></Tab>
            </Tabs>
        </Container>
    )
}

export default LoggedOutPage;