import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZenMain() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [-3000, 0], [0, -200]); 
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center justify-around 
        w-full h-screen
        bg-[#A9D2FF] px-8 rounded-xl">

            <div className='absolute lg:left-8 lg:top-8 left-4 top-4 flex-col md:w-1/2 lg:w-1/3 justify-left gap-8 flex-2 font-mono text-sm text-gray-600'>
                <p>
                 Web3 Node provider and infrastructure for blockchain.
                </p> 
                <p className="pt-4">
                I worked as solo designer, designed new product, huge product features, made a refresh of marketing materials and lendings.
                </p> 
            </div>

            <motion.div className='
            lg:block md:block absolute right-[-20%] bottom-[4%]'
            whileHover={{
                scale: 1.01,
                transition: { duration: 0.3 },
            }}
            whileTap={{scale:1.05,
                zIndex: 10,
            }}>

                <img src="/zencoder/zencoder-main-chat.webp" 
                alt="Zencoder main chat" 
                className="rounded-xl zencoder-hero lg:h-[800px] md:h-[600px] h-[400px]"
                />
            </motion.div>
        </div>
) }