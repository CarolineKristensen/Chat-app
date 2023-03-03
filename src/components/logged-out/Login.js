import React from "react";
import {
    Container,
    Form,
    Button,
} from "react-bootstrap";

function Login() {

    return (
        <Container>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Användarnamn</Form.Label>
                    <Form.Control type="" placeholder="Skriv användarnamn..." required/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Lösenord</Form.Label>
                    <Form.Control type="password" placeholder="Skriv lösenord..." required/>
                </Form.Group>
                <p id="forgotPwd">
                    <a href="/">Glömt lösenordet?</a>
                </p>
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Logga in
                    </Button>
                    <p id="registerLink">
                        <a href="/">Registrera dig!</a>
                    </p>
                </div>
            </Form>
        </Container>
    )
}

export default Login;