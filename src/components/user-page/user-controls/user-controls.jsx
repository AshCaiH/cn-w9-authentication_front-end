import { deleteRequest } from "../../../common/requests";

const UserControls = (props) => {
    const deleteUser = async () => {
        const headers = {authorization: "Bearer " + props.user.loginToken}
        const response = await deleteRequest("http://localhost:5001/users/delete", headers);

        props.setUser(null);
    }

    return (
        <>
        <p>Update this account</p>
        <button className="red" onClick={deleteUser}>Delete This Account</button>
        </>
    )
}

export default UserControls;