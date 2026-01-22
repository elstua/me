import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Zen2() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
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
                src="/zencoder/closeup_1.webp"
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
                src="/zencoder/closeup_2.webp"
                alt="Zencoder agent creation screen"
                className="zencoder-border"
            />
            </motion.div>
        </div>
) }