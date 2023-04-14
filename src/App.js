import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage'
import StartProcess from './component/StartProcess';
import FormData from './component/Form';
import Navbar from './component/NavBar';

function App() {
  return (
    <div>
      <Router>
        <Navbar/>
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/processStart' Component={StartProcess} />
          <Route path='/process' Component={FormData} />
          <Route path='/sample' Component={Navbar} />
        </Routes>
      </Router>
    </div>
  )
}

export default App