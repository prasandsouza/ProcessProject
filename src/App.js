import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from './component/HomePage'
import StartProcess from './component/StartProcess';
import Nav from './component/Nav';
import FormData from './component/Form';
import Sample from './component/Sample';

function App() {
  return (
    <div>
      <Router>
        <Nav />
        <Routes>
          <Route path='/' Component={HomePage} />
          <Route path='/processStart' Component={StartProcess} />
          <Route path='/process' Component={FormData} />
          <Route path='sample' Component={Sample} />
        </Routes>
      </Router>
    </div>
  )
}

export default App