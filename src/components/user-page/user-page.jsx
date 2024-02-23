import MemberList from "./member-list/member-list";
import UserControls from "./user-controls/user-controls";

const UserPage = (props) => {
    return (
        <>
        <MemberList user={props.user}/>
        <UserControls user={props.user} setUser={props.setUser}/>
        </>
    )
}

export default UserPage;