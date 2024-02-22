import { useState } from "react";
import { postRequest } from "../../common/requests";
import "./login-modal.css"

const LoginModal = (props) => {
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();
    
    const login = async () => {
        const query = JSON.stringify({
            username: document.getElementById("login-username").value,
            password: document.getElementById("login-password").value,
        });

        const response = await postRequest("http://localhost:5001/users/login", query, "POST");

        if (response.user) {
            props.setUser(response.user)
            setSuccessMessage("Login Successful")
            setErrorMessage(null)
        } else {
            setErrorMessage(response.message);
            setSuccessMessage(null)
        }
    }

    const register = async () => {
        const query = JSON.stringify({
            username: document.getElementById("register-username").value,
            email: document.getElementById("register-email").value,
            password: document.getElementById("register-password").value,
        });

        const response = await postRequest("http://localhost:5001/users/register", query, "POST");

        if (response.error) {
            console.log(response.error);
            props.setUser(response.user)
            setSuccessMessage(null)
            setErrorMessage(response.message)
        } else {
            setSuccessMessage("User successfully registered.")
            setErrorMessage(null)
        }
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

            { errorMessage &&
            <div className="error-message">{errorMessage}</div>}
            { successMessage &&
            <div className="success-message">{successMessage}</div>}
        </div>
    )
}

export default LoginModal
