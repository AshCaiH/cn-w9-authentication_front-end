import { useState } from "react";
import { deleteRequest } from "../../../common/requests";

const UserControls = (props) => {
    const [email, setEmail] = useState("");
    const [errorMessage, setErrorMessage] = useState();
    const [successMessage, setSuccessMessage] = useState();

    const deleteUser = async () => {
        const headers = {authorization: "Bearer " + props.user.loginToken}
        const response = await deleteRequest("http://localhost:5001/users/delete", headers);

        props.setUser(null);
    }

    return (
        <>
        <form id="login-form" className="form-section start-section" onSubmit={(e) => e.preventDefault()}>
            <h2>Update user settings</h2>
            <div className="form-item">Email
            {/* Add onChange function later */}
                <input id="update-email-input" placeholder="Email address"></input></div> 
            <button className="green centre" onClick={() => {}}>Update</button>
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