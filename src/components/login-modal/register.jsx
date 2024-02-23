import { useState } from "react";
import { postRequest } from "../../common/requests";

const Register = (props) => {
    const {setUser, setSuccessMessage, setErrorMessage} = props;
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const register = async () => {
        const query = JSON.stringify({
            username: username,
            email: email,
            password: password,
        });

        const response = await postRequest("http://localhost:5001/users/register", query, "POST");

        if (response.error) {
            console.log(response.error);
            setUser(response.user)
            setSuccessMessage(null)
            setErrorMessage(response.message)
        } else {
            setSuccessMessage("User successfully registered.")
            setErrorMessage(null)
        }
    }

    return (
        <form id="register-form" className="form-section end-section">
            <h2>Register</h2>
            <div className="form-item">Username 
                <input id="register-username"   onChange={(e) => setUsername(e.target.value)}></input></div>
            <div className="form-item">Email address 
                <input id="register-email"      onChange={(e) => setEmail(e.target.value)}></input></div>
            <div className="form-item">Password 
                <input id="register-password"   onChange={(e) => setPassword(e.target.value)}></input></div>
            <button onClick={register}>Register</button>
        </form>
    )
}

export default Register;