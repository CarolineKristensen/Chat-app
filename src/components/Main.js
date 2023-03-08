import React from "react";
import "./CSS/main.css";
import Login from "./Login";

function Main() {
    return (
        <div>
            <h1 id="app-name">Welcome to Chat-App!</h1>
            <div class="login-box">
                <Login />
            </div>
            
        </div>
    )
}

export default Main;