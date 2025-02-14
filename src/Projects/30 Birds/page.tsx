import React from "react";
import ProjectHeader from "../../projectheader";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";
import BirdsMain from "./BirdsMain";

export default function ThirtyBirdsBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };

    return (
        <div id="30birds" className="flex flex-col items-center w-full">
        <div className="content-width flex flex-col items-center justify-between">

            <ProjectHeader
                    name="30 Birds"
                    startDate={2023}
                    endDate={2023}
                    description="Transform 360 review with constant feedback" 
                    link="https://app.30birds.xyz/profile/U04N8RJQQQ7"
                    linkText="Profile at 30birds"
            />

            <BirdsMain />

            <div className="flex flex-row flex-wrap items-center gap- w-full h-auto pt-10 pb-10 lg:px-20 lg:pt-20 lg:pb-20">
                <motion.img src="/30Birds/Slack.png" 
                    alt="30Birds"  
                    className="w-2/5 h-auto rounded-xl shadowblock"
                    initial={{ 
                        rotate: `${String(getRandomRotation())}deg`,
                        scale: 1,
                    }} 
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                    />

                    <div className="flex flex-col w-1/5 h-auto items-center">
                    <img src="/30Birds/Big Bird.svg"
                        alt="Origami Bird"
                        className="max-w-24">
                    </img>

                    <img src="/30Birds/arrow-2.svg"
                        alt="arrow"
                        className="w-20">
                    </img>
                    </div>
                
                    <img src="/30Birds/open_bird.webp" 
                    alt="30Birds" 
                    className="w-2/5 h-auto"  />
                     </div>


             <div className="flex w-full justify-left pt-10 pb-10">
                <div className='flex flex-col gap-8 w-1/2 md:w-2/4 text-sm font-mono'>
                
                {/* <p>
                The concept of origami birds, suggested by a designer friend I incorporate into the product in various forms, from instruction-like illustrations to paper-like UI elements. And, of course, actual birds for praises.    
                </p> */}
                {/* <p>
                Collaborating with founders and clients, we defined the main user cases and sought to understand how to establish a continuous feedback loop that could transform traditional 360-degree reviews, and how users could carry this feedback culture with them to new environments.
                </p>  */}
                </div>
             </div>

            
            
             <div className="flex flex-row flex-wrap items-start justify-between w-full h-auto pt-10 pb-10 gap-6">

                    <motion.div className="flex-2 w-45 h-auto"
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                    whileTap={{scale:1.5}}>
                        <ReactPlayer
                        url="/30Birds/skillsbar.webm"
                        playing={true}
                        loop={true}
                        controls={true}
                        alt="Agon"
                        width={"100%"}
                        height={"auto"}
                        style={{ borderRadius: '16px', overflow: 'hidden'}}
                        />
                    </motion.div>

                    <motion.img src="/30Birds/skillaward.webp" 
                    alt="Popup with award for skills" 
                    width={1280} 
                    height={720} 
                    className="flex-3 w-full md:w-1/2 h-auto rounded-xl "
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{scale:1.5}}/>

                </div>
                <div className="flex w-full justify-center pt-10 pb-10">
                {/* <div className='flex flex-col gap-8 w-full md:w-2/4 text-sm font-mono'>
                <p>
                The concept of origami birds, suggested by a designer friend I incorporate into the product in various forms, from instruction-like illustrations to paper-like UI elements. And, of course, actual birds for praises.    
                </p>
                </div> */}
                </div>

                <div className="flex flex-row flex-wrap items-center w-full h-auto pt-10 pb-10">
                    <motion.img src="/30Birds/card1.webp" 
                        alt="Open bird with praise" 
                        className="flex-3 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                    }}
                    whileTap={{scale:1.5}}/>

                    <motion.img src="/30Birds/achieve.webp" 
                        alt="Achivement for skills" 
                        className="flex-3 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                    }}
                    whileTap={{scale:1.5}}/>

                    <motion.img src="/30Birds/card2.webp" 
                        alt="open bird with big praise" 
                        className="flex-3 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                    }}
                        whileTap={{scale:1.5}}/>
                    
                </div>


             <div className="flex flex-row-reverse flex-wrap w-full h-auto pt-20 pb-10 gap-8 font-mono text-sm">
                    {/* <div className='h-80 w-full bg-slate-900'><p>main screen of 30birds</p> </div> */}
                    <motion.img src="/30Birds/company_view.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="md:w-2/3 h-auto flex-1 rounded-xl shadowblock"
                    whileHover={{
                        scale: 1.1,
                        zIndex: 10,
                        rotate: 0,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{scale:1.2}}/>
                
                    <div className='flex-1 w-full text-sm font-mono'>
                        <p>Gamification help find new faces in company, get to know each other and see your team impact</p>
                        <div className="flex flex-row flex-wrap w-full h-auto pt-2 pb-10 gap-2">

                        <motion.img src="/30Birds/Receiver-card.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2}}/>

                        <motion.img src="/30Birds/sender-card.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2}}/>

                        <motion.img src="/30Birds/Builders-card.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2,
                            zIndex: 10,
                        }}/>

                        <motion.img src="/30Birds/Team-card.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2,
                            zIndex: 10,
                        }}/>

                        <motion.img src="/30Birds/Networker.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2,
                            zIndex: 10,
                        }}/>

                        <motion.img src="/30Birds/Praised-mark.svg" 
                        alt="30Birds" 
                        className="flex-1 max-w-32 w-1/3 h-auto" 
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.5,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{scale:2,
                            zIndex: 10,
                        }}/>
                        
                        </div>
                    </div>
             </div>
            
            {/* Block with team view */}
             <div className="flex flex-row flex-wrap w-full h-auto pt-10 pb-10 gap-8">
                    <motion.img src="/30Birds/teamview.webp" 
                    alt="30Birds" 
                    className="w-full flex-1 rounded-xl shadowblock"
                    whileHover={{
                        scale: 1.1,
                        zIndex: 10,
                        rotate: 0,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{scale:1.3,
                        zIndex: 10,
                    }} />
             </div>
            
            {/* Block with skill search */}
             <div className="flex w-full h-auto pt-10 pb-10">
                    <motion.img src="/30Birds/skill_search.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-xl shadowblock"
                    whileHover={{
                        scale: 1.1,
                        rotate: 0,
                        transition: { duration: 0.3 },
                      }}
                      whileTap={{scale:1.3}} />
            </div>

            {/* <div className="flex w-full h-auto pt-10 pb-10">
                    <div className='h-80 w-full bg-slate-500'><p>Awards and other graphic</p> </div>
            </div> */}

        </div>
        </div>
    );
}