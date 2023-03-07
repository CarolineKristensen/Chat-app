import React from "react";
import {
    Form,
    InputGroup,
    Button
} from "react-bootstrap";

function Register() {

    return (
        <div className="registerDiv">
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Användarnamn</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="usernameIcon" src="../images/person-fill.svg" alt="Username icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="" placeholder="Användarnamn..." required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formUsername">
                    <Form.Label>Email</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="emailIcon" src="../images/envelope-fill.svg" alt="Email icon" width="15px" />
                        </InputGroup.Text>
                        <Form.Control type="email" placeholder="Email..." required/>
                    </InputGroup>
                </Form.Group>
                <Form.Group controlId="formPassword">
                    <Form.Label>Lösenord</Form.Label>
                    <InputGroup>
                        <InputGroup.Text>
                            <img id="passwordIcon" src="../images/key-fill.svg" alt="Password icon" width="20px" />
                        </InputGroup.Text>
                        <Form.Control type="password" placeholder="Lösenord..." required/>
                    </InputGroup>
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