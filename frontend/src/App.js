import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './App.css';
import Homepage from './pages/homepage';
import Signupp from './pages/signup';
import Loginn from './pages/login';
import Admin from './pages/Admin';


function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Homepage/>} />
          <Route path="/signup" element={<Signupp/>} />
          <Route path="/login" element={<Loginn/>} />

          {/* <Route path="*" element={() => <div>404</div>} /> */}
          <Route path="*" element={<Homepage/>} />
          <Route path="/admin" element={<Admin/>} />
      </Routes>  
    </Router> 
  
  );
}

export default App;
