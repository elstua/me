import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock1() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center justify-around 
        w-full h-screen 
        bg-[#0628ee] rounded-xl
        ">

            <div className='absolute lg:left-8 lg:top-8 left-4 top-4  flex-col md:w-1/2 lg:w-1/3 justify-left gap-8 flex-2 font-mono text-sm text-gray-200'>
            <p>Agon hosts fitness challenges in which users actively participate. 
                Using machine vision technology, exercises are tracked and counted, earning users points and advancing them towards prizes.
                All within the vibe of a cyberpunk fitness center.</p>
            </div>


            <motion.div 
            className='phone-block relative'
            style={{ y }}

            initial={{ 
                scale: 1,
            }} 
            whileHover={{
                transition: { duration: 0.3 },
            }}
            whileTap={{
                scale: 1.1,
            }}
            >
            <img
                src="./Agon/MainScreen.webp"
                alt="Agon"
                className="h-full lg:w-[420px] md:w-[240px] w-[180px] screen-block"
            />
            </motion.div>
        </div>
) }