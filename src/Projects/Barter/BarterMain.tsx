import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function BarterMain() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [1000, 0], [0, -300]); 
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center justify-around 
        w-full h-screen
        bg-[#5D4987] px-8 rounded-xl">

            <div className='absolute lg:left-8 lg:top-8 left-4 top-4 flex-col w-[90%] md:w-1/2 lg:w-1/2 justify-left gap-8 flex-2 font-mono text-sm text-gray-100'>
                <p>
                Barter is an intent based swap tool that saves money. Founders asked me to find a design language, create branding and explore the way to make a B2C part of product — exchange platform.
                </p> 
                <p>
                I built design language around two main cores: something material, touchy and warm. With intention to move away from typical themes in crypto space I design interfaces and marketing materials as interactive objects and a worlds inside its own.
                </p> 
            </div>

            <motion.div className="flex w-full pt-20 pb-4 lg:px-10 lg:px-0 lg:h-auto
            lg:block md:block absolute bottom-[-4%] lg:bottom-[-4%]"
            style={{ y }}
            whileHover={{
                scale: 1,
                zIndex: 10,
                rotate: 0,
                transition: { duration: 0.3 },
            }}
            whileTap={{
                zIndex: 10,
            }}>
                <ReactPlayer
                    url="/Barter/barter.webm"
                    // playing={!isMobile}
                    muted={true}
                    loop={true}
                    controls={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '8px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
            </motion.div>
        </div>
) }