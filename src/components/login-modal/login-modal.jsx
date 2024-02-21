import { useState } from "react";
import "./login-modal.css"

const LoginModal = (props) => {
    const [res, setResponse] = useState();
    
    const login = () => {
        const query = JSON.stringify({
            username: document.getElementById("login-username").value,
            password: document.getElementById("login-password").value,
        });

        (async () => {
            setResponse(
                await fetch("http://localhost:5001/users/login", {
                    method: "POST",
                    mode: "cors",
                    headers: {"Content-Type": "application/json"},
                    body: query,
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                })
            )}
        )();
    }

    const register = () => {
        const query = JSON.stringify({
            username: document.getElementById("register-username").value,
            email: document.getElementById("register-email").value,
            password: document.getElementById("register-password").value,
        });

        (async () => {
            setResponse(
                await fetch("http://localhost:5001/users/register", {
                    method: "POST",
                    mode: "cors",
                    headers: {"Content-Type": "application/json"},
                    body: query,
                }).then((response) => {
                    return response.json();
                }).then((data) => {
                    console.log(data);
                })
            )}
        )();
    }

    return (
        <div className="form">
            <div id="login-form" className="form-section start-section">
            <h2>Login</h2>
            <div className="form-item">Username
                <input id="login-username"></input></div>
            <div className="form-item">Password
                <input id="login-password" ></input></div>
            <button onClick={login}>Log In</button>
            </div>

            <div className="divider"/>
            
            <div id="register-form" className="form-section end-section">
            <h2>Register</h2>
            <div className="form-item">Username 
                <input id="register-username"></input></div>
            <div className="form-item">Email address 
                <input id="register-email"></input></div>
            <div className="form-item">Password 
                <input id="register-password"></input></div>
            <button onClick={register}>Register</button>
            </div>
        </div>
    )
}

export default LoginModal
