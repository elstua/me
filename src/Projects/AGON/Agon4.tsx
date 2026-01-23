import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock4() {
    
return (
  <div className="flex flex-row 
        lg:flex-row md:flex-wrap relative
        items-between justify-between w-full
         lg:gap-3 lg:pt-32 lg:pb-32 lg:px-16">

  <motion.div 
    className='w-[240px] h-auto phone-block relative'
    initial={{ 
        scale: 1,
    }} 
    whileHover={{
        scale: 1.1,
        rotate: 0,
        transition: { duration: 0.3 },
    }}
    whileTap={{ scale: 1.2}} >
    <ReactPlayer
        url="/Agon/buycoins.webm"
        playing={true}
        muted={true}
        controls={false}
        loop={true}
        alt="Agon"
        width={'auto'}
        height={"auto"}
        style={{ borderRadius: '7%', overflow: 'hidden'}}
    />
  </motion.div>
  <motion.div 
        className='w-[240px] phone-block relative'
        initial={{ 
            scale: 1,
        }} 
        whileHover={{
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.3 },
        }}
        whileTap={{
            scale: 1.2,
        }}
    >
    <ReactPlayer
        url="/Agon/onboarding.webm"
        playing={true}
        muted={true}
        controls={false}
        loop={true}
        alt="Agon"
        width={'auto'}
        height={"auto"}
        style={{ borderRadius: '7%', overflow: 'hidden'}}
    />
  </motion.div>
  <motion.div 
        className='w-[240px] phone-block relative'
        initial={{ 
            scale: 1,
        }} 
        whileHover={{
            scale: 1.1,
            rotate: 0,
            transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 1.2}}
    >
    <img
        src="/Agon/paywall.webp"
        alt="Agon"
        width={'auto'}
        height={"auto"}
        className="screen-block"
    />
  </motion.div>
        </div>
) }