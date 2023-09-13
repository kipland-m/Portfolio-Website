import './App.css'
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Home from './Home';
import Resume from './Resume';
import Contact from './Contact';

function Navbar() {
  return (
    <nav>
      <ul class="navbar">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}


function App() {
  return (
    <Router>
    <div className="App">
    <div className="slim-column">
      <header className="App-header">
          <Navbar/>
          <t>Kipland Melton</t>

          <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/resume" element={<Resume/>} />
          <Route path="/contact" element={<Contact/>} />
          </Routes>
      </header>
    </div>
    </div>
    </Router>
  );
}



export default App;
