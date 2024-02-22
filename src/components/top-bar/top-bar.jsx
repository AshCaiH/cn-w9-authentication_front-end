import { RiLogoutBoxLine } from "react-icons/ri";
import "./top-bar.css";

const TopBar = (props) => {
    const logout = () => {
        console.log(props.token);
        props.setToken(null);
        console.log(props.token);
    }

    return (
        <div id="top-bar">
            { props.token &&
            <a className="logout" href="#" onClick={logout}>Log Out <RiLogoutBoxLine className="icon"/></a> }
        </div>
    )
}

export default TopBar;