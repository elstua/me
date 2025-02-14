import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock2() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
        <div className="flex flex-nowraps relative
        items-center justify-between lg:justify-around w-full lg:w-3/5 rounded-xl pt-16 pb-16 px-8 lg:gap-8">
            <motion.div
            className='w-[180px] lg:w-[300px] phone-block relative'
            initial={{ 
                rotate: 6,
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
            className='w-[180px] lg:w-[300px] phone-block relative'
            initial={{ 
                rotate: 6,
                y: -20,
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
                autoPlay={true}
                loop={true}
                alt="Agon"
                width={"100%"}
                height={"100%"}
                style={{ borderRadius: '7%', overflow: 'hidden'}}
            />
            </motion.div>
        </div>
) }