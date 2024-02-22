import { useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import MemberList from './components/member-list/member-list';
import TopBar from './components/top-bar/top-bar';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      <TopBar token={token} setToken={setToken} />
      {!token ?
        <LoginModal setToken={setToken}/>
        :
        <MemberList token={token}/>
      }
    </>
  )
}

export default App
