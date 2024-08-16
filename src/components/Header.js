
import { useState, useEffect, useMemo } from 'react'
import { AnimatePresence, motion } from "framer-motion"
import { Link } from 'react-router-dom';

import SRC_NOTI from '../assets/img/notifications.svg';
import SRC_CHAT from '../assets/img/messages.svg';



export function Header() {



    return (
        <>
        <AnimatePresence mode='wait'>
            <div className="w-full h-[68px] flex text-black bg-white justify-between uppercase items-center px-global ">
                <div className="font-semibold tracking-wider text-xl">SURF<span className='text-sky-500'>YX</span></div>

                <div className='flex ml-auto gap-x-5'>
                    <Link className='flex size-[26px] items-center justify-center' to="/about">
                        <img src={SRC_NOTI} />
                    </Link>
                    <Link className='flex size-[26px] items-center justify-center' to="/about">
                        <img src={SRC_CHAT} />
                    </Link>
                </div>
            </div>
        </AnimatePresence>

        
        </>
    );
  }