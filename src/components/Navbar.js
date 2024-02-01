
import { useState, useEffect, useMemo } from 'react'
import { motion } from "framer-motion"
import { Link } from 'react-router-dom';



export function Navbar() {



    return (
        <>
        <motion.div 
            initial={{y: -50}}
            animate={{y: 0}}
        className="w-full h-[60px] flex text-white justify-between items-center fixed top-0 left-0 z-50 p-6">
            <div className="font-bold">TZ</div>
            <div className='flex items-center gap-x-4'>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/maya">Maya</Link>
            </div>
        </motion.div>

        
        </>
    );
  }