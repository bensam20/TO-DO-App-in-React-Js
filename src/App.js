import React from 'react';
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Home'
import Pending from './Pending';
import Completed from './Completed';


function App() {

  return (
    <div className="app">
      <Navbar />
      <br />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/pending" element={<Pending />} />
          <Route path="/completed" element={<Completed />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
