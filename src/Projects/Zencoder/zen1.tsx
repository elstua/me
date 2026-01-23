import React from "react";
import { motion } from "motion/react";

export default function Zen1() {
    
return (
        <div className="flex flex-nowraps relative
        items-center justify-between lg:justify-around w-full pb-16 lg:gap-4">
            <motion.div
            className='relative'
            initial={{ 
                rotate: 0,
                y: 0,
            }} 
            whileHover={{
                rotate: 0,
                y: 0,
                zIndex: 10,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}>
            <motion.img
                src="/Zencoder/zencoder_agent.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>


            <motion.div 
            className=' relative'
            initial={{ 
                rotate: 0,
                y: 0,
            }} 
            whileHover={{
                rotate: 0,
                y: 0,
                zIndex: 10,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}>
            <motion.img
                src="/Zencoder/zencoder_e2e_start.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>

            <motion.div 
            className=' relative'
            initial={{ 
                rotate: 0,
                y: 0,
            }} 
            whileHover={{
                rotate: 0,
                y: 0,
                zIndex: 10,
                scale: 1.01,
                transition: { duration: 0.3 },
              }}>
            <motion.img
                src="/Zencoder/zencoder_e2e_process.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>
        </div>
) }