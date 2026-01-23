import React from "react";
import { motion } from "motion/react";

export default function ZenX() {
    
return (
    <div className="flex flex-col items-start w-full">
        <p className="font-mono text-sm text-gray-500">exploration for planning mode long before the cursor and claude</p>
        <div className="flex flex-nowraps relative
        items-center justify-between lg:justify-around w-full pb-2 pt-8 lg:gap-8">
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
                src="/Zencoder/zencoder_x_1.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>
        </div>
        <div className="flex flex-nowraps relative
        items-center justify-between lg:justify-around w-full pb-16 pt-8 lg:gap-8">
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
                src="/Zencoder/zencoder_x_2.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>
        </div>

    </div>
) }