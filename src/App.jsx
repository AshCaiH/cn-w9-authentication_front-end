import { useState } from 'react'
import LoginModal from "./components/login-modal/login-modal";
import './App.css'
import MemberList from './components/member-list/member-list';

function App() {
  return (
    <>
      <LoginModal />
      <MemberList />
    </>
  )
}

export default App
