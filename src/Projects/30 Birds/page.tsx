import React from "react";
import ProjectHeader from "../../projectheader";
import { motion } from "framer-motion";
import ReactPlayer from "react-player";

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
            />

            <div className="flex flex-row flex-wrap items-center justify-between w-full h-auto pt-10 pb-10">
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
                    {/* <img src="/30Birds/arrow-1.svg"
                        className="flex-1">
                    </img> */}

                    <div className="flex flex-col w-1/5 h-auto items-center">
                    <img src="/30Birds/big bird.svg"
                        alt="30Birds"
                        className="max-w-24">
                    </img>

                    <img src="/30Birds/arrow-2.svg"
                        alt="30Birds"
                        className="w-20">
                    </img>
                    </div>
                
                    <img src="/30Birds/Open_bird.webp" 
                    alt="30Birds" 
                    className="w-2/5 h-auto"  />
                     </div>


             <div className="flex w-2/3 h-auto pt-10 pb-10">
                <div className='w-full text-sm font-mono'>
                <p>
                HRtech, recognition & meritocracy SaaS that transform 360 review process with consist feedback in form of a praise. Write what you praise your colleague for, select skills and sent a bird. Birds bring points, awards and make everyone in company visible</p> 
                </div>
             </div>

            
            
             <div className="flex flex-row flex-wrap items-start justify-between w-full h-auto pt-20 pb-10 gap-6">
                    <img src="/30Birds/Cabinet.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="flex-1 h-full rounded-xl shadowblock" />

                    <div className="flex-2 w-45 h-auto">
                        <ReactPlayer
                        url="/30birds/skillsbar.webm"
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={"100%"}
                        height={"auto"}
                        style={{ borderRadius: '16px', overflow: 'hidden'}}
                        />
                    </div>
                    <img src="/30Birds/popup-award.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="flex-3 w-1/2 h-auto rounded-xl " />

                </div>

                <div className="flex flex-row flex-wrap items-center w-full h-auto pt-10 pb-10">
                    <motion.img src="/30Birds/card1.webp" 
                        alt="30Birds" 
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
                    }}/>
                    <motion.img src="/30Birds/achieve.webp" 
                        alt="30Birds" 
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
                    }}/>
                    <motion.img src="/30Birds/card2.webp" 
                        alt="30Birds" 
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
                        whileTap={{scale:1.4}}/>
                    
                </div>


             <div className="flex flex-row-reverse w-full h-auto pt-20 pb-10 gap-8 font-mono text-sm">
                    {/* <div className='h-80 w-full bg-slate-900'><p>main screen of 30birds</p> </div> */}
                    <img src="/30Birds/company_view.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="w-2/3 flex-1 rounded-xl shadowblock" />
                
                    <div className='flex-1 h-90 w-full'>
                        <p>Gamification help find new faces in company, get to know each other and see team impact</p>

                    </div>
             </div>
            
            {/* Block with team view */}
             <div className="flex flex-row flex-wrap w-full h-auto pt-20 pb-10 gap-8">
                    <img src="/30Birds/TeamView.webp" 
                    alt="30Birds" 
                    className="w-full flex-1 rounded-xl shadowblock" />
             </div>
            
            {/* Block with skill search */}
             <div className="flex w-full h-auto pt-10 pb-10">
                    <img src="/30Birds/Skill_search.webp" 
                    alt="30Birds" 
                    width={1280} 
                    height={720} 
                    className="h-full rounded-xl shadowblock" />
            </div>

            {/* <div className="flex w-full h-auto pt-10 pb-10">
                    <div className='h-80 w-full bg-slate-500'><p>Awards and other graphic</p> </div>
            </div> */}

        </div>
        </div>
    );
}