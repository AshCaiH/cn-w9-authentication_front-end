import { deleteRequest } from "../../../common/requests";

const UserControls = (props) => {
    const deleteUser = async () => {

        const query = JSON.stringify({
            username: props.user.username,
        });

        console.log(query);

        const response = await deleteRequest("http://localhost:5001/users/delete", query);

        console.log(response);
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