import { useState } from "react";
import "./login-modal.css"
import Login from "./login";
import Register from "./register";

const LoginModal = (props) => {
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    return (
        <div className="form">
            <Login setUser={props.setUser} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage}/>

            <div className="divider"/>
            
            <Register setUser={props.setUser} setSuccessMessage={setSuccessMessage} setErrorMessage={setErrorMessage}/>

            { errorMessage &&
            <div className="error-message">{errorMessage}</div>}
            { successMessage &&
            <div className="success-message">{successMessage}</div>}
        </div>
    )
}

export default LoginModal
