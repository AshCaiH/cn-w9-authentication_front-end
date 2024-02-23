import { postRequest } from "../../common/requests";

const Login = (props) => {

    const login = async () => {
        const query = JSON.stringify({
            username: document.getElementById("login-username").value,
            password: document.getElementById("login-password").value,
        });

        const response = await postRequest("http://localhost:5001/users/login", query, "POST");

        if (response.user) {
            props.setUser(response.user)
            props.setSuccessMessage("Login Successful")
            props.setErrorMessage(null)
        } else {
            props.setErrorMessage(response.message);
            props.setSuccessMessage(null)
        }
    }

    return (
        <div id="login-form" className="form-section start-section">
            <h2>Login</h2>
            <div className="form-item">Username
                <input id="login-username"></input></div>
            <div className="form-item">Password
                <input id="login-password" ></input></div>
            <button onClick={login}>Log In</button>
        </div>
    )

}

export default Login