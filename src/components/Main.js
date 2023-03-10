import React, {useState} from "react";
//import React from "react";
import "./CSS/main.css";
import Login from "./Login";
import { Register } from "./Register";


function Main() {
    const [currentForm, setCurrentForm] = useState('login');

    const toggleForm = (formName) => {
        setCurrentForm(formName);
    }

    return (
        <div class="App">
            <div class="login-box">
                {
                currentForm === "login" ? <Login onFormSwitch = {toggleForm}/> : <Register onFormSwitch = {toggleForm}/>
                }
            </div>
            
        </div>
    )
}

export default Main;