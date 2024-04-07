"use client";

import { motion } from 'framer-motion';
import React from 'react'

const Marquee = () => {
    
  return (
    <>
      <div className="w-full py-20 bg-[#004D43] rounded-t-xl">
        <div className="text h-full w-full border-t-2 border-b-2 border-zinc-300 flex items-center gap-8 whitespace-nowrap overflow-hidden text-white">
          <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease :"linear" , repeat: Infinity , duration: 8}}  className="text-[16vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase py-3">
            we are ochi
          </motion.h1 >
          <motion.h1 initial={{x : 0}} animate={{x : "-100%"}} transition={{ease :"linear" , repeat: Infinity , duration: 8}}  className="text-[16vw] leading-none font-['Founders_Grotesk_X-Condensed'] font-bold uppercase py-3">
            we are ochi
          </motion.h1 >
        </div>
      </div>
    </>
  );
 
}

export default Marquee