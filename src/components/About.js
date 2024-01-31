
import { useState, useEffect, useMemo, useRef } from 'react'
import { motion, useAnimation } from "framer-motion"



export function About() {


    return (
        <>
        
        <motion.div className=' text-white p-20 bg-zinc-600 h-full w-full flex  items-center justify-center overflow-hidden'>
            <div className='max-w-[1100px] mx-auto items-center flex md:flex-row flex-col md:gap-x-10'>
                <motion.h1 
                initial={{opacity:0, x: -50 }}
                whileInView={{opacity:1, x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
                className='text-4xl md:text-7xl md:w-1/2 md:mb-0 mb-3 flex-shrink-0 font-bold text-left'>This is something about me and more</motion.h1>
                <motion.p 
                initial={{opacity:0, x: 50 }}
                whileInView={{opacity:1, x: 0}}
                transition={{duration: 0.5}}
                viewport={{once: false}}
                className='text-left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</motion.p>
            </div>
        </motion.div>
        </>
    );
  }