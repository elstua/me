import React, { useState, useEffect } from 'react';
import ProjectHeader from '../../projectheader';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Image from '../../imageExpand';
import ExpandableProjectContent from '../../ExpandableProjectContent';
import BarterMain from './BarterMain';
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
        return Math.floor(Math.random() * 10) - 6 // Generate a random number between -4 and 4
    };

    // Preview images for the toggle button thumbnails
    const previewImages = [
        "/Barter/barter-landing.webp",
        "/Barter/multiverse.webp",
        "/Barter/transformation.webp",
        
    ];

    return (
        <div id="barter" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
            {/* Project header - always visible */}
            <ProjectHeader
                    name="Barter"
                    startDate={2022}
                    endDate={2023}
                    description="Make WEB3 more touchy" 
                    link="https://barterswap.xyz/"
                    linkText="Landing page"
            />

            {/* First content block - always visible */}
            <BarterMain />


            {/* Expandable detail blocks */}
            <ExpandableProjectContent 
                projectName="Barter" 
                previewImages={previewImages}
            >
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

                        <Image src="/Barter/barter-landing.webp" 
                            alt="barter image shows integrations" layoutId='algorithm'/>
                        <Image src="/Barter/transformation.webp" 
                            alt="barter image from deck shows transformation to intents" layoutId='transformation'/>
                        <Image src="/Barter/types.webp" 
                            alt="Barter graphic for deck" 
                            layoutId='types'/>
                        <Image src="/Barter/barter-field.webp" 
                            alt="barter image shows multiverse of crypto" layoutId='multiverse of crypto'/>                        
                        
                    </div>
            </ExpandableProjectContent>
        </div>
        </div>

    );
}
