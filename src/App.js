import logo from './logo.svg';
import './App.css';
import { useRef, Link } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Route, Switch, Routes } from 'react-router-dom';



import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'
import { Maya } from './components/Maya'



function App() {

  return (
    <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/maya" element={<Maya />} />
        </Routes>
    </Router>
  );
}

export default App;
