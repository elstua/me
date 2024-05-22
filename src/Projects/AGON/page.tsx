import React from "react";
import ReactPlayer from 'react-player'
import ProjectHeader from "../../projectheader";
import { motion } from "framer-motion";

export default function AgonBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };


    return (
        <div id="agon" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
                <ProjectHeader
                    name="Agon"
                    startDate={2023}
                    endDate={2024}
                    description="Building habits with fitness challenges, gamification and AI tracking"
                    link="https://apps.apple.com/pt/app/agon-fitness-rewards/id1574023421?l=en-GB"
                    linkText="App at Appstore" />


                    <div className='md:hidden flex-col justify-center gap-8 flex-2 w-full font-mono text-sm text-neutral-900'>
                    <p>Agon hosts fitness challenges in which users actively participate. 
                        Using machine vision technology, exercises are tracked and counted, earning users points and advancing them towards prizes.
                        All within the vibe of a cyberpunk fitness center.</p>

                        {/* <p>Our team acquired Agon from friends and successfully relaunched it. 
                        I led the redesign of primary user flows, crafted a new UX for challenges, and enhanced the visual language.
                        Additionally, I designed marketing materials and socials </p> */}
                    </div>

                <div className="flex flex-wrap md:flex-nowrap justify-around w-full h-auto pt-10 pb-10">
                    <motion.div 
                    className='h-full phone-block'
                    initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{
                        scale: 1.5,
                    }}
                      >
                    <img
                        src="./Agon/MainScreen.webp"
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>

                    <div className='md:flex hidden flex-col justify-center pl-2 pb-2 gap-8 flex-2  max-w-64 font-mono text-sm text-neutral-900'>
                    <p>Agon hosts fitness challenges in which users actively participate. 
                        Using machine vision technology, exercises are tracked and counted, earning users points and advancing them towards prizes.
                        All within the vibe of a cyberpunk fitness center.</p>

                        {/* <p>Our team acquired Agon from friends and successfully relaunched it. 
                        I led the redesign of primary user flows, crafted a new UX for challenges, and enhanced the visual language.
                        Additionally, I designed marketing materials and socials </p> */}
                    </div>

                    <motion.div 
                    className='h-full phone-block'
                    style={{ marginTop: '80px' }} 
                    initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.5}}>
                    <ReactPlayer
                        url="/Agon/exercise_small.webm"
                        controls={true}
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </motion.div>
                </div>


                <div className="flex justify-around flex-wrap content-center w-full pt-12 pb-10 gap-20">
                    <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 1.5}}
                    >
                    <img
                        src="/Agon/challenge.webp"
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>
                    <div className='flex flex-1 flex-row flex-wrap justify-start content-center space-between gap-4'
                    style={{maxHeight: '540px'}}>
                    <motion.img src="/Agon/first_day_card.webp" alt="Agon" 
                    className="w-60 h-auto"
                    initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.5,
                        zIndex: 10,
                      }} />
                    <motion.img src="/Agon/done_card.webp" alt="Agon"
                       className="w-60 h-auto"
                       initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.5,
                        zIndex: 10, 
                      }}/>
                    <motion.img src="/Agon/top15_card.webp" alt="Agon"
                     className="w-60 h-auto"
                     initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.3,
                        zIndex: 10
                      }}/>
                    <motion.img src="/Agon/last_day_card.webp" alt="Agon"
                     className="w-60 h-auto"
                     initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.5,
                        zIndex: 10,
                      }}/>
                    <motion.img src="/Agon/top10_card.webp" alt="Agon"
                     className="w-60 h-auto"
                     initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        zIndex: 10,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{ scale: 1.5,
                        zIndex: 10,
                      }}/>
                     <p className="font-mono text-sm">different states of active challenges in feed</p>
                    </div>
                </div>


                <div className="flex flex-wrap justify-around w-full pt-10 pb-10 place-content-center">
                <motion.div 
                    className='h-full phone-block'
                    style={{ marginTop: '80px'}}
                    initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{ scale: 1.5}} >
                    <ReactPlayer
                        url="/Agon/buycoins.webm"
                        playing={true}
                        controls={true}
                        loop={true}
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </motion.div>
                    <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 1.5}}
                    >
                    <img
                        src="/Agon/paywall.webp"
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>
                </div>

                {/* onboarding block */}
                <div className="flex flex-wrap justify-around w-full pt-10 pb-10 place-content-center">
                    <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{
                            scale: 1.5,
                        }}
                    >
                    <ReactPlayer
                        url="/Agon/onboarding.webm"
                        playing={true}
                        controls={true}
                        loop={true}
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </motion.div>
                    <motion.div 
                        className='h-full phone-block'
                        style={{marginTop: '80px'}}
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{
                            scale: 1.5,
                        }}
                    >
                    <img
                        src="/Agon/onboarding04.webp"
                        alt="Agon"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>
                </div>

                {/* Marketing block */}
                {/* <div className='flex flex-row w-full gap-3'>
                    <div className='flex-1 bg-slate-400'>
                        <p>There are a lot of marketing materials, from app store screens to first advertisement in</p>
                    </div>
                    <div className='w-2/3 h-72 bg-slate-400'>
                        <p>marketing imgs and language</p>
                    </div>
                </div> */}

            </div>
        </div>
    );
}
