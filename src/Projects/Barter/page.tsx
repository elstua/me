import React from 'react';
import ProjectHeader from '../../projectheader';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';

export default function BarterBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };
    return (
        <div id="barter" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
            <ProjectHeader
                    name="Barter"
                    startDate={2022}
                    endDate={2023}
                    description="Make WEB3 more touchy" 
            />


             <div className="flex w-2/3 h-auto pt-20 pb-10">
                <div className='w-full font-mono text-sm'>
                <p>
                Barter is an intent based swap tool that change space of swapping crypto. Founders asked me to find a design language, build branding and explore the way to make a B2C part of product — interface for swaps.
                </p> 
                <p>
                Main idea of interface and branding — make crypto more material. With intetion to move away I design interfaces and marketing materials as interactive objects in digital space.
                </p> 
                </div>
             </div>

            <div className="flex w-full pt-20 pb-10">
                <ReactPlayer
                    url="/Barter/Barter.webm"
                    playing={true}
                    loop={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
            </div>

              {/* flow block */}
            <div className="flex w-full h-auto justify-around pt-10 pb-10 gap-8">
                <div className='browserwindow w-1/2'>
                <ReactPlayer
                    url="/Barter/barterchange.webm"
                    playing={true}
                    loop={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
                </div>
                
                <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)`}} >
                    <ReactPlayer
                        url="/Barter/bartermobile.webm"
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </div>
            </div>
            
            <div className='browserwindow w-full'>
                <ReactPlayer
                    url="/Barter/explore.webm"
                    playing={true}
                    loop={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
            </div>

            <div className=' flex-1 w-full font-mono text-sm pt-10'>
                     <p>A couple of images for pitchdeck and social media</p>
            </div>
            
            <div className="flex flex-row flex-wrap justify-around w-full h-auto pt-10 pb-20 gap-4">

                    <motion.img src="/barter/algorithm.webp" 
                        alt="30Birds" 
                        className="flex-3 w-45 h-auto rounded-xl" 
                        initial={{ 
                            // rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 2 }}
                        />
                    <motion.img src="/barter/transformation.webp" 
                        alt="30Birds" 
                        className="flex-3 w-45 h-auto rounded-xl" 
                        initial={{ 
                            // rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 2 }}
                        />
                    <motion.img src="/barter/types.webp" 
                        alt="Barter graphic for deck" 
                        className="flex-3 w-45 h-auto rounded-xl" 
                        initial={{ 
                            // rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 2 }}
                    />
                    <motion.img src="/barter/multiverse.webp" 
                        alt="30Birds" 
                        className="flex-3 w-45 h-auto rounded-xl" 
                        initial={{ 
                            // rotate: `${String(getRandomRotation())}deg`,
                            zIndex: 1,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.2,
                            zIndex: 10,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                        whileTap={{ scale: 2 }}
                    />
                    
                </div>
        </div>
        </div>

    );
}