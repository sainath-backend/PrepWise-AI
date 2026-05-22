
import { Routes, Route, Navigate } from 'react-router-dom'
import Home from './Pages/Home'
import Auth from './Pages/Auth'
import { useEffect } from 'react';
import { getCurrentUser } from './services/api.js';
import { useDispatch, useSelector } from 'react-redux';
import History from './Pages/History.jsx';
import Notes from './Pages/Notes.jsx';
import Pricing from './Pages/Pricing.jsx';
import PaymentSuccess from './Pages/PaymentSuccess.jsx';
import PaymentFailed from './Pages/PaymentFailed.jsx';

export const serverUrl = "http://localhost:8000";
function App() {

  const dispatch = useDispatch()
  useEffect(()=>{
    getCurrentUser(dispatch);
  },[dispatch])

  const {userData} = useSelector((state)=>state.user)
  return (
    <>
    <Routes>
      <Route path ='/' element = {userData?<Home/>:<Navigate to = "/auth" replace/>} />
      <Route path ='/auth' element = {userData?<Navigate to = "/" replace/>:<Auth/>} />
      <Route path ='/history' element = {userData?<History/>:<Navigate to = "/auth" replace/>} />
      <Route path ='/notes' element = {userData?<Notes/>:<Navigate to = "/auth" replace/>} />
      <Route path ='/pricing' element = {userData?<Pricing/>:<Navigate to = "/auth" replace/>} />
      <Route path ='/payment-success' element={<PaymentSuccess/>} />
      <Route path ='/payment-failed' element={<PaymentFailed/>} />
    </Routes>
    </>
  )
}

export default App

