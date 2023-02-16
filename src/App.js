import React from 'react';
import './App.css';
import NavBar from './components/navBar/navBar';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Home from './pages/home/home';
import About from './pages/about/about';
import Service from './pages/service/service';
import Contact from './pages/contact/contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/service" element={<Service/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      {/* <NavBar/> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
