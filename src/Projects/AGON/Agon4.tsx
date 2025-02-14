import React from "react";
import ReactPlayer from 'react-player'
import { motion, useScroll, useTransform } from "framer-motion";

export default function AgonBlock4() {
    const { scrollY } = useScroll();
    const y = useTransform(scrollY, [0, 2000], [0, 200]); 
    
return (
  <div className="flex flex-row 
        lg:flex-row md:flex-wrap relative
        items-between justify-between w-full
         lg:gap-3 lg:pt-32 lg:pb-32 lg:px-16">

  <motion.div 
    className='w-[240px] h-auto phone-block relative'
    // style={{ marginTop: '80px'}}
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
        controls={false}
        loop={true}
        autoplay={true}
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
        controls={false}
        autoplay={true}
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