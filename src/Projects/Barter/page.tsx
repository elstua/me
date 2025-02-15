import React, { useState, useEffect } from 'react';
import ProjectHeader from '../../projectheader';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Image from '../../imageExpand';

export default function BarterBlock() {
    const [isMobile, setIsMobile] = useState(false);
    
        useEffect(() => {
            const checkMobile = () => {
                setIsMobile(window.innerWidth <= 768);
            };
    
            // Check on initial load
            checkMobile();
    
            // Add event listener for window resize
          window.addEventListener('resize', checkMobile);
    
            // Cleanup
            return () => window.removeEventListener('resize', checkMobile);
    }, []);


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


             <div className="flex w-full md:w-2/3 h-auto pt-10">
                <div className='w-full font-mono text-sm text-neutral-900'>
                <p>
                Barter is an intent based swap tool that saves money. Founders asked me to find a design language, create branding and explore the way to make a B2C part of product — exchange platform.
                </p> 
                <p>
                I decided to build design language around two main cores: build something material and touchy, and make it warm and calm. With intetion to move away from typical themes in crypto space I design interfaces and marketing materials as interactive objects and a worlds inside its own.
                </p> 
                </div>
             </div>

            <motion.div className="flex w-full pt-20 pb-4 lg:px-10 lg:px-0"
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
                    playing={!isMobile}
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

              {/* flow block */}
            <div className="flex flex-wrap flex-row w-full h-auto justify-around pt-10 pb-10  lg:px-0 gap-8">
                <motion.div className='browserwindow w-full lg:w-[45%] md:w-[40%]'
                initial={{
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
                }}>
                <ReactPlayer
                    url="/Barter/barterchange.webm"
                    playing={!isMobile}
                    loop={true}
                    muted={true}
                    controls={true}
                    alt="barter interface"
                    width={"100%"}
                    height={"auto"}
                    style={{ borderRadius: '16px', overflow: 'hidden'}}
                    styleName="shadowblock"
                />
                </motion.div>
                
                <motion.div 
                    className='flex h-full phone-block relative'
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
                        playing={!isMobile}
                        muted={true}
                        loop={true}
                        controls={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </motion.div>
            </div>
            
            <motion.div className='browserwindow w-full lg:px-0 pt-20 pb-20 lg:pt-1'
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
                    playing={!isMobile}
                    muted={true}
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
            
            <div className="flex flex-row flex-wrap justify-around w-full h-auto pt-4 pb-10">

                    <Image src="/Barter/algorithm.webp" 
                        alt="barter image shows integrations" layoutId='algorithm'/>
                    <Image src="/Barter/transformation.webp" 
                        alt="barter image from deck shows transformation to intents" layoutId='transformation'/>
                    <Image src="/Barter/types.webp" 
                        alt="Barter graphic for deck" 
                        layoutId='types'/>
                    <Image src="/Barter/barter-field.webp" 
                        alt="barter image shows multiverse of crypto" layoutId='multiverse of crypto'/>                        
                    
                </div>
        </div>
        </div>

    );
}