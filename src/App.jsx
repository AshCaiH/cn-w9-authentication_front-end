import { useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import MemberList from './components/member-list/member-list';

function App() {
  const [token, setToken] = useState(null);

  return (
    <>
      {!token ?
        <LoginModal setToken={setToken}/>
        :
        <MemberList />
      }
    </>
  )
}

export default App
