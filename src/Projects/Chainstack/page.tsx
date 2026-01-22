import React, { useState, useEffect } from 'react';
import ProjectHeader from '../../projectheader';
import ReactPlayer from 'react-player';
import { motion } from 'framer-motion';
import Image from '../../imageExpand';
import ExpandableProjectContent from '../../ExpandableProjectContent';
import ChainstackMain from './ChainstackMain';
export default function ChainstackBlock() {
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
        <div id="chainstack" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
            {/* Project header - always visible */}
            <ProjectHeader
                    name="Chainstack"
                    startDate={2022}
                    endDate={2023}
                    description="AI Coding Agent" 
                    link="https://chainstack.com/"
                    linkText="Landing page"
            />

            {/* First content block - always visible */}
            <ChainstackMain />

        </div>    
        </div>
    )
}