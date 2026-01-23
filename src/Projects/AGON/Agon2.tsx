import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock2() {
    
return (
        <div className="flex flex-nowraps relative
        items-center justify-between lg:justify-around w-full lg:w-3/5 rounded-xl 
        lg:gap-8 pb-16 md:pb-0
        *:w-[45%]">
            <motion.div
            className='phone-block relative'
            initial={{ 
                rotate: 0,
                y: 0,
            }} 
            whileHover={{
                rotate: 0,
                y: 0,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}>
            <motion.img
                src="/Agon/challenge.webp"
                alt="Agon"
                className="screen-block"
            />
            </motion.div>


            <motion.div 
            className='phone-block relative'
            initial={{ 
                rotate: 2,
                y: 0,
            }} 
            whileHover={{
                rotate: 0,
                y: 0,
                zIndex: 10,
                transition: { duration: 0.3 },
              }}>
            <ReactPlayer
                url="/Agon/exercise_small.webm"
                controls={true}
                playing={true}
                muted={true}
                loop={true}
                alt="Agon"
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: '7%', overflow: 'hidden'}}
            />
            </motion.div>
        </div>
) }