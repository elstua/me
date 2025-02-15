import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock3() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
        <div className="lg:flex md:flex flex-row lg:flex-col md:flex-nowrap relative
        w-full lg:w-2/5 lg:overflow-visible hidden
        items-center justify-center gap-1 lg:gap-2 
        lg:pt-16 lg:pb-16 lg:px-16 py-8">
          <motion.img src="/Agon/first_day_card.webp" alt="Agon" 
                    className="w-full max-w-[80%] h-auto"
                    initial={{ 
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10,
                      }} />
                    <motion.img src="/Agon/done_card.webp" alt="Agon"
                       className="w-full max-w-[80%] h-auto"
                       initial={{ 
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10, 
                      }}/>
                    <motion.img src="/Agon/top15_card.webp" alt="Agon"
                     className="w-full max-w-[80%] h-auto"
                     initial={{ 
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10
                      }}/>
                    <motion.img src="/Agon/last_day_card.webp" alt="Agon"
                     className="w-full max-w-[80%] h-auto"
                     initial={{ 
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10,
                      }}/>
                    <motion.img src="/Agon/top10_card.webp" alt="Agon"
                     className="w-full max-w-[80%] h-auto"
                     initial={{ 
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.2,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10,
                      }}/>
        </div>
) }