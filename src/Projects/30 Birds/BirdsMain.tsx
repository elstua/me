import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function BirdsMain() {
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center justify-around 
        w-full h-screen
        bg-[#FCCD56] px-8 rounded-xl">

            <div className='absolute lg:left-8 lg:top-8 left-4 top-4 flex-col w-[90%] md:w-1/2 lg:w-1/2 justify-left gap-8 flex-2 font-mono text-sm text-gray-800'>
                <p>
                30 Birds was born from the idea that we often underappreciate each other in the work environment, and that genuine appreciation holds more significance than mere points on a CV or KPI.
                </p>
                <p>
                Started from a simple Slack bot for sending 'birds' I led the team in designing a web suite around these ideas that bring +40% more sent praises.
                </p>
            </div>

            <motion.div className='browserwindow lg:w-max-[80%] md:w-max-[90%] lg:h-auto
            lg:block md:block absolute left-[10%] top-[50%] lg:top-[30%] w-full'
            whileHover={{
                scale: 1.02,
                transition: { duration: 0.3 },
            }}
            whileTap={{scale:1.1,
                zIndex: 10,
            }}>

                <img src="./30Birds/cabinet.webp" 
                alt="30Birds" 
                className="rounded-xl shadowblock"
                />
            </motion.div>
        </div>
) }