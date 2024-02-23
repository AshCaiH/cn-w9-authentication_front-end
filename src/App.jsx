import { useEffect, useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import TopBar from './components/top-bar/top-bar';
import UserPage from './components/user-page/user-page';
import { getRequest } from './common/requests';

function App() {
    const [user, setUser] = useState(null);

    useEffect(() => {        
        const token = sessionStorage.getItem("token")

        const confirmToken = async () => {
            const headers = { authorization: "Bearer " + token }
            const response = await getRequest("http://localhost:5001/users/authcheck", headers);

            setUser(response.user);
            user.loginToken = token;
        }

        if (!user && token) confirmToken();
    }, [user]);

    return (
        <>
            <TopBar user={user} setUser={setUser} />
            {!user ?
                <LoginModal setUser={setUser} />
                :
                <UserPage user={user} setUser={setUser} />
            }
        </>
    )
}

export default App
