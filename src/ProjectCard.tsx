import { motion } from "motion/react";
import React from 'react';
import { Link } from 'react-scroll';

// This defines what properties our component expects to receive
interface ProjectCardProps {
    to: string;              // Where to scroll to (e.g., "agon", "30birds")
    hoverColor: string;      // Background color when hovering (e.g., "#D5FC51")
    logoSrc: string;         // Path to the logo image
    logoAlt: string;         // Description of the logo for accessibility
    logoClassName: string;   // CSS classes to control logo size
    text?: string;           // Optional text to display
    role?: string;           // Optional role description to display
}

// Helper function that generates a random rotation angle
const getRandomRotation = () => {
    return Math.floor(Math.random() * 10) - 4; // Random number between -4 and 4
};

export default function ProjectCard({
    to,
    hoverColor,
    logoSrc,
    logoAlt,
    logoClassName,
    text,
    role
}: ProjectCardProps) {
    
    // Convert the hover color to transparent for initial state
    // by adding "00" at the end (represents 0% opacity in hex)
    const transparentColor = hoverColor + '00';

    return (
        <motion.div 
            className="flex flex-row flex-auto w-[15%] md:h-56 px-1 pt-1 rounded-xl cursor-pointer border border-solid"
            initial={{ 
                zIndex: 1,
                rotate: 0,
                backgroundColor: transparentColor,
                borderColor: '#baafa2',
            }} 
            whileHover={{
                zIndex: 10,
                rotate: getRandomRotation(),
                y: -20,
                transition: { duration: 0.3 },
                backgroundColor: hoverColor,
                borderColor: '#baafa200',
            }}
            whileTap={{ scale: 0.9 }}>
                <Link
                    to={to}
                    spy={true} 
                    smooth={true}
                    duration={500}
                    className="flex flex-row md:flex-col flex-wrap w-full p-4 justify-between overflow-hidden"
                >
                    <div className="flex flex-col gap-3">
                    <img src={logoSrc} alt={logoAlt} className={logoClassName} />
                    
                    <div className="font-mono text-sm text-neutral-500">{text}</div>
                    </div>

                    <div className="pt-4 font-mono text-sm text-neutral-500">{role}</div>
                </Link>
            </motion.div>
    );
}
