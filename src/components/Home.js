
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from "framer-motion"



export function Home() {
    return (
        <>
        
        <div className=' text-white bg-zinc-900 text-center scale-100 p-4 h-full w-full flex flex-col items-center justify-center overflow-hidden'>
            
                <div className='text-sm w-1/2 uppercase  mx-auto font-opensans z-50 relative'>
                    Hello <span className='text-[#f40c28] font-bold'>BITCHES</span>
                </div>

                <div className='h-px w-1/2 md:w-1/4 bg-zinc-800 line-in mt-3 mb-10 mx-auto' />


                <div className=' mx-auto relative z-40 flex flex-col'>
                        
                    <motion.div
                      initial={{ opacity: 0, translateY: 50 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 1 }}
                    className='text-5xl md:text-7xl mb-2 font-bold flex justify-center relative z-50 from-bottom'>
                        I'm Tom<div className='relative'><div className='relative z-20'>as</div> <div className='absolute left-0 top-0 text-[#f40c28]'>áš</div></div>,
                    </motion.div>
                </div>

                  <motion.div 
                    initial={{ opacity: 0, translateY: 50 }}
                    animate={{ opacity: 1, translateY: 0 }}
                    transition={{duration: 1, delay: 0.2 }}
                  className=' relative z-40 mx-auto flex flex-col'>
                      <div className='text-5xl md:text-7xl relative font-bold z-50 flex items-center'>
                      UI/UX Designer
                      </div>
                    </motion.div>
                    <div className='h-px w-1/2 md:w-1/4 bg-zinc-800 line-in mb-3 mt-10  flex-shrink' />
                <div className='text-sm w-1/2 uppercase  mx-auto font-opensans relative z-50'>
                    Since<span className='text-[#f40c28] font-bold'> 2008</span>
                </div>
        </div>
        </>
    );
  }