import logo from './logo.svg';
import './App.css';
import { useRef } from "react";

import { motion, useScroll, useSpring, useTransform, MotionValue } from "framer-motion";

import { Home } from './components/Home'
import { About } from './components/About'
import { Navbar } from './components/Navbar'



function App() {

  return (
    <>
    <div className="App w-full h-full overflow-auto">
        <Navbar />
        <Home />
        <About />
    </div>
    </>
  );
}

export default App;
