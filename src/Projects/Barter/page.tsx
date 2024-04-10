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
                    link="https://barterswap.xyz/"
                    linkText="Landing page"
            />


             <div className="flex w-full md:w-2/3 h-auto pt-20 pb-10">
                <div className='w-full font-mono text-sm text-neutral-900'>
                <p>
                Barter is an intent based swap tool that saves money. Founders asked me to find a design language, create branding and explore the way to make a B2C part of product — exchange platform.
                </p> 
                <p>
                I decided to build design language around two main cores: build something material and touchy, and make it warm and calm. With intetion to move away from typical themes in crypto space I design interfaces and marketing materials as interactive objects and a worlds inside its own.
                </p> 
                </div>
             </div>

            <motion.div className="flex w-full pt-20 pb-10"
            whileHover={{
                scale: 1.1,
                zIndex: 10,
                rotate: 0,
                transition: { duration: 0.3 },
            }}
            whileTap={{scale:1.3,
                zIndex: 10,
            }}>
                <ReactPlayer
                    url="/Barter/barter.webm"
                    playing={true}
                    loop={true}
                    controls={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
            </motion.div>

              {/* flow block */}
            <div className="flex flex-wrap flex-row w-full h-auto justify-around pt-10 pb-10 gap-8">
                <motion.div className='browserwindow w-full w-45'
                whileHover={{
                    scale: 1.1,
                    zIndex: 10,
                    rotate: 0,
                    transition: { duration: 0.3 },
                }}
                whileTap={{scale:1.3,
                    zIndex: 10,
                }}>
                <ReactPlayer
                    url="/Barter/barterchange.webm"
                    playing={true}
                    loop={true}
                    controls={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
                </motion.div>
                
                <motion.div 
                    className='flex h-full '
                    initial={{ rotate: getRandomRotation(),
                        scale: 1,
                    }}
                    whileHover={{
                        scale: 1.1,
                        zIndex: 10,
                        rotate: 0,
                        transition: { duration: 0.3 },
                    }}
                    whileTap={{scale:1.3,
                        zIndex: 10,
                    }} >
                    <ReactPlayer
                        url="/Barter/bartermobile.webm"
                        playing={true}
                        loop={true}
                        controls={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </motion.div>
            </div>
            
            <motion.div className='browserwindow w-full'
            whileHover={{
                scale: 1.1,
                zIndex: 10,
                rotate: 0,
                transition: { duration: 0.3 },
            }}
            whileTap={{scale:1.3,
                zIndex: 10,
            }}>
                <ReactPlayer
                    url="/Barter/explore.webm"
                    playing={true}
                    loop={true}
                    controls={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
            </motion.div>

            <div className=' flex-1 w-full font-mono text-sm pt-10'>
                     <p>A couple of images from pitchdeck and social media</p>
            </div>
            
            <div className="flex flex-row flex-wrap justify-around w-full h-auto pt-10 pb-10 gap-4">

                    <motion.img src="/Barter/algorithm.webp" 
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
                    <motion.img src="/Barter/transformation.webp" 
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
                    <motion.img src="/Barter/types.webp" 
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
                    <motion.img src="/Barter/multiverse.webp" 
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