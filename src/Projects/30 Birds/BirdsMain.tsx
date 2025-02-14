import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function BirdsMain() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
        <div className="flex flex-wrap relative
        overflow-hidden items-center justify-around 
        w-full h-screen mt-10
        bg-[#FCCD56] px-8 rounded-xl">

            <div className='absolute lg:left-8 lg:top-8 left-4 top-4 flex-col md:w-1/2 lg:w-1/2 justify-left gap-8 flex-2 font-mono text-sm text-gray-800'>
                <p>
                30 Birds was born from the idea that we often underappreciate each other in the work environment, and that genuine appreciation holds more significance than mere points on a CV or KPI.
                </p>
                <p>
                Started from a simple Slack bot for sending 'birds' I led the team in designing a web suite around these ideas that bring +40% more sent praises.
                </p>
            </div>

            <motion.img src="/30Birds/cabinet.webp" 
            alt="30Birds" 
            style={{
                y: 200,
             }} 
            className="flex-1 w-max-[80%] h-full rounded-xl shadowblock"
            whileHover={{
                y: 150,
                transition: { duration: 0.3 },
            }}
            />

            {/* <motion.div 
            className='h-full phone-block'
            initial={{ 
                scale: 1,
            }} 
            whileHover={{
                scale: 1.05,
                transition: { duration: 0.3 },
            }}
            whileTap={{ scale: 1.1}}>
            <ReactPlayer
                url="/Agon/exercise_small.webm"
                controls={true}
                playing={true}
                loop={true}
                alt="Agon"
                width={320}
                height={"auto"}
                style={{ borderRadius: '24px', overflow: 'hidden'}}
            />
            </motion.div> */}
        </div>
) }