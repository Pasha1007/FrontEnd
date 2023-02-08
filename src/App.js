import './App.css';
import React from 'react';
import HomePage from './pages/HomePage';
import Login from './components/Login';
import AfterAuthPage from './components/AfterAuthPage';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Reset from './Reset';

function App() {
  return (
    
      
    <div>
    
    <Routes>
        <Route exact path="/reset" element={<Reset/>}/>
        <Route exact path="/log" component={<Login/>} />
        <Route exact path='/home' element={<HomePage/>}/>
        <Route exact path='/user' element={<AfterAuthPage/>}/>
        <Route exact path='/' element={<Navigate replace to="/home" />} />
         {/* 
         <Route exact path='/login' element={<LoginPage/>}/>
         <Route exact path='/register' element={<RegisterPage/>}/> */}
    </Routes>
    </div>
    
  );
}

export default App;
