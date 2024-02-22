import { RiLogoutBoxLine } from "react-icons/ri";
import "./top-bar.css";

const TopBar = (props) => {
    const logout = () => {
        props.setUser(null);
    }

    return (
        <div id="top-bar">            
            <div className="top-bar-inner">
            { props.user &&
                <>
                <div>Hello <b>{props.user.username}</b>!</div>
                <a className="logout" href="#" onClick={logout}>Log Out <RiLogoutBoxLine className="icon"/></a>
                </>
            } </div>
        </div>
    )
}

export default TopBar;