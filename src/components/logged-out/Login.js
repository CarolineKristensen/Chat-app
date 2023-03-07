import React from "react";
import {
    Form,
    InputGroup,
    Button,
} from "react-bootstrap";

function Login() {

    return (
        <div className="loginDiv">
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Användarnamn</Form.Label>
                    <InputGroup>
                        <InputGroup.Prepend>
                            <InputGroup.Text>
                            
                            </InputGroup.Text>
                        </InputGroup.Prepend>
                        <Form.Control type="" placeholder="Användarnamn..." required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Lösenord</Form.Label>
                    <Form.Control type="password" placeholder="Lösenord..." required/>
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
        </div>
    )
}

export default Login;