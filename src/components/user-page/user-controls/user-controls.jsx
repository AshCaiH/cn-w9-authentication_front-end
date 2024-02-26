import { useState } from "react";
import { deleteRequest, postRequest, updateRequest } from "../../../common/requests";

const UserControls = (props) => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const headers = {authorization: "Bearer " + props.user.loginToken};

    const updateEmail = async () => {
        const query = JSON.stringify({
            email: email,
            something: "hello",
        })

        const response = await updateRequest("http://localhost:5001/users/update", headers, query);

        console.log(headers, query, response);

        if (response.error) {
            setSuccessMessage(null);
            try {
                setErrorMessage(response.error.errors[0].message);
            } catch {
                try {
                    setErrorMessage(response.error.message);
                } catch {
                    setErrorMessage("There was an error.");
                }
            }
        } else {
            setErrorMessage(null);
            setSuccessMessage("User email successfully updated");
        }
    }

    const deleteUser = async () => {
        const response = await deleteRequest("http://localhost:5001/users/delete", headers);

        props.setUser(null);

        if (response.error) {
            setErrorMessage(response.error.errors[0].message);
        } else {
            setSuccessMessage("Account successfully deleted. You will be logged out.");
        }
    }

    return (
        <>
        <form id="login-form" className="form-section start-section" onSubmit={(e) => e.preventDefault()}>
            <h2>Update user settings</h2>
            <div className="form-item">Email
                <input id="update-email-input" placeholder="Email address" onChange={(e) => setEmail(e.target.value)}></input></div> 
            <button className="green centre" onClick={updateEmail}>Update</button>
        </form>

        <div className="hdivider" />

        { errorMessage &&
        <div className="error-message">{errorMessage}</div>}
        { successMessage &&
        <div className="success-message">{successMessage}</div>}

        {/* <p>Update this account</p> */}
        <p>You are logged in as <b>{props.user.username}</b></p> 
        <button className="red" onClick={deleteUser}>Delete This Account</button>
        </>
    )
}

export default UserControls;