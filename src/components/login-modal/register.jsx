import { postRequest } from "../../common/requests";

const Register = (props) => {
    const {setUser, setSuccessMessage, setErrorMessage} = props;

    const register = async () => {
        const query = JSON.stringify({
            username: document.getElementById("register-username").value,
            email: document.getElementById("register-email").value,
            password: document.getElementById("register-password").value,
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
    )
}

export default Register;