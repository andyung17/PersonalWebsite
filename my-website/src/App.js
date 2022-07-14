import logo from './logo.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import WebsiteBar from './components/WebsiteBar';
import React from 'react';
import './App.css';
import NavBar from './components/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages';

function App() {
  return (
    // <div className="App">
    <Router>
      <NavBar/>
      <Routes>
            <Route path="/" element={<Home />} />
        </Routes>
        {/* <WebsiteBar /> */}
    </Router>
  );
}

export default App;
