import React from "react";
import { motion } from "motion/react";

export default function AgonBlock3() {
    
return (
        <div className="flex flex-row flex-wrap md:flex-col md:flex-nowrap
        w-full lg:w-2/5 lg:overflow-visible
        items-start justify-start gap-1 lg:gap-2 
        lg:pt-16 lg:pb-16 py-8
        
        *:md:w-[70%] *:w-[45%]">
          <motion.img src="./Agon/first_day_card.webp" alt="Agon" 
                    className="h-auto"
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
                    <motion.img src="./Agon/done_card.webp" alt="Agon"
                       className="h-auto"
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
                    <motion.img src="./Agon/top15_card.webp" alt="Agon"
                     className="h-auto"
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
                    <motion.img src="./Agon/last_day_card.webp" alt="Agon"
                     className="h-auto"
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
                    <motion.img src="./Agon/top10_card.webp" alt="Agon"
                     className="h-auto"
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