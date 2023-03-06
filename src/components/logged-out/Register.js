import React from "react";
import {
    Form,
    Button,
} from "react-bootstrap";

function Register() {

    return (
        <div>
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Användarnamn</Form.Label>
                    <Form.Control type="" placeholder="Användarnamn..." required/>
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="" placeholder="Email..." required/>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Lösenord</Form.Label>
                    <Form.Control type="password" placeholder="Lösenord..." required/>
                </Form.Group>
                <Form.Check type="checkbox" id="registerConsent" label="Jag samtycker..." />
                <div className="text-center">
                    <Button variant="primary" type="submit">
                        Registrera
                    </Button>
                </div>
            </Form>
        </div>
    )
}

export default Register;