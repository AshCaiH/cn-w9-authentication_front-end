import { useState } from "react";
import { postRequest } from "../../common/requests";

const Login = (props) => {

    const {setUser, setSuccessMessage, setErrorMessage} = props;
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const login = async () => {
        const query = JSON.stringify({
            username: username,
            password: password
        });

        const response = await postRequest("http://localhost:5001/users/login", query, "POST");

        if (response.user) {
            setUser(response.user)
            setSuccessMessage("Login Successful")
            setErrorMessage(null)
        } else {
            setErrorMessage(response.message);
            setSuccessMessage(null)
        }
    }

    return (
        <div id="login-form" className="form-section start-section">
            <h2>Login</h2>
            <div className="form-item">Username
                <input id="login-username" onChange={(e) => setUsername(e.target.value)}></input></div>
            <div className="form-item">Password
                <input id="login-password" onChange={(e) => setPassword(e.target.value)}></input></div>
            <button onClick={login}>Log In</button>
        </div>
    )

}

export default Login