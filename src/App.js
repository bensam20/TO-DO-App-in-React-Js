import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'


function App() {

  return (
    <div className="app">
      <Navbar />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
