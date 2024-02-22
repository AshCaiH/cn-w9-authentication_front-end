import { RiLogoutBoxLine } from "react-icons/ri";
import "./top-bar.css";

const TopBar = (props) => {
    const logout = () => {
        props.setUser(null);
    }

    return (
        <div id="top-bar">
            { props.user &&
            <a className="logout" href="#" onClick={logout}>Log Out <RiLogoutBoxLine className="icon"/></a> }
        </div>
    )
}

export default TopBar;