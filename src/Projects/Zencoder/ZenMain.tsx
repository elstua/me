import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function ZenMain() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [1000, 0], [0, -100]); 
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center 
        w-full h-screen
        bg-[#121010] md:px-8 px-4 rounded-xl">

            <div className='absolute lg:left-8 lg:top-8 md:left-4 top-4 flex-col w-[80%] md:w-1/2 lg:w-1/3 justify-left gap-8 flex-2 font-mono text-sm text-gray-100'>
                <p>
                Zencoder is an AI coding agent that works best with large codebases and team projects
                </p> 
                <p className="pt-4">
                I worked as founding designer and built UX and design system from zero to launch with over 300k current installs.
                </p> 
            </div>

            <motion.div className='
            absolute right-[-50%] md:right-[-20%] bottom-[4%] w-[140%] md:w-[900px] h-auto'
            style={{ y }}
            whileHover={{
                transition: { duration: 0.3 },
            }}
            whileTap={{
            }}>

                <img src="/zencoder/zencoder-main-chat.webp" 
                alt="Zencoder main chat" 
                className="rounded-xl zencoder-hero"
                />
            </motion.div>
        </div>
) }