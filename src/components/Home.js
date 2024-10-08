
import { useState, useEffect, useMemo } from 'react'
import { motion, AnimatePresence } from "framer-motion"



export const Home = ({ isVisible }) => (

        <>
        <AnimatePresence mode="wait">
        <div className=' text-white bg-zinc-900 text-center scale-100 p-4 h-full w-full flex flex-col items-center relative justify-center overflow-hidden'>
            
                <div className='text-sm w-1/2 uppercase  mx-auto font-opensans z-50 relative'>
                    Hello <span className='text-[#f40c28] font-bold'>World</span>
                </div>

                <motion.div
                  initial={{ scale:0 }}
                  animate={{ scale: 1 }}
                  transition={{ ease: "easeInOut", duration: 0.6, delay:0.5 }}
                className='h-px w-1/2 md:w-1/4 bg-gradient-to-r from-transparent via-[#f40c28] to-transparent line-in mt-3 mb-10 mx-auto' />


                <div className=' mx-auto relative z-40 flex flex-col'>
                

                    <motion.div
                      initial={{ opacity: 0, translateY: 50 }}
                      animate={{ opacity: 1, translateY: 0 }}
                      transition={{ duration: 1 }}
                      exit={{translateY: 50, delay: 4}}
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
                    <motion.div
                      initial={{ scale:0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay:0.5 }}
                    className='h-px w-1/2 md:w-1/4 bg-gradient-to-r from-transparent via-[#f40c28] to-transparent line-in mb-3 mt-10  flex-shrink' />
                <div className='text-sm w-1/2 uppercase  mx-auto font-opensans relative z-50'>
                    Since<span className='text-[#f40c28] font-bold'> 2008</span>
                </div>

                <motion.div
                initial={{opacity:0}}
                whileInView={{opacity:1}}
                transition={{delay: 1, duration: 1}}
                viewport={{once: false}}
                className='w-full h-full absolute top-0 left-0 bg-grid gradient-radial' />
        </div>
        
        </AnimatePresence>
      </>
    )
