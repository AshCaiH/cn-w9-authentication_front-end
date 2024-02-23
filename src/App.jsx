import { useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import TopBar from './components/top-bar/top-bar';
import UserPage from './components/user-page/user-page';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <TopBar user={user} setUser={setUser} />
      {!user ?
        <LoginModal setUser={setUser}/>
        :
        <UserPage user={user} setUser={setUser}/>
      }
    </>
  )
}

export default App
