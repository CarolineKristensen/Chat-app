import React, { useState } from "react";
//import Form from "react-bootstrap/Form";
//import Button from "react-bootstrap/Button";
import "./CSS/main.css";

function Login(props) {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div class="auth-form-container">
            <h2>Login</h2>
          <form class="login-form" onSubmit={handleSubmit}>
              <label for ="email">Email</label>
              <input value={email} onChange={(e) => setEmail(e.target.value)} type ="email" placeholder="youremail@gmail.com" id="email" name="email"></input>
              <label for ="password">Password</label>
              <input value={pass} onChange={(e) => setPass(e.target.value)} type ="password" placeholder="**********" id="password" name="password"></input>
              <button type="submit">Login</button>
          </form>
          <button class="link-btn" onClick ={() => props.onFormSwitch('register')}>Don't have an account? Register here</button>
        </div>
    );
}
export default Login;