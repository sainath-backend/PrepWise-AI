
import { Routes, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import { useEffect } from 'react';
import { getCurrentUser } from './services/api';

export const serverUrl = "http://localhost:8000";
function App() {

  useEffect(()=>{
    getCurrentUser();
  },[])

  return (
    <>
    <Routes>
      <Route path ='/' element = {<Home/>} />
      <Route path ='/auth' element = {<Auth/>} />
    </Routes>
    </>
  )
}

export default App

