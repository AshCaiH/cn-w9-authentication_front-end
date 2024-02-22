import { useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import MemberList from './components/member-list/member-list';
import TopBar from './components/top-bar/top-bar';

function App() {
  const [user, setUser] = useState(null);

  return (
    <>
      <TopBar user={user} setUser={setUser} />
      {!user ?
        <LoginModal setUser={setUser}/>
        :
        <MemberList user={user}/>
      }
    </>
  )
}

export default App
