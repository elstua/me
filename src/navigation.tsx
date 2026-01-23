
import React from 'react';
// import { Link, animateScroll as scroll} from 'react-scroll';
import ProjectCard from './ProjectCard';

export default function ProjectsRow(){
    return (
        <div className="flex-col items-center w-full hidden md:flex lg:flex md:px-4">

            <div className="flex flex-row gap-2 content-width font-mono text-sm text-neutral-900 items-left pb-4 md:sm-8"><p className="text-neutral-500">Now:</p><p>Open for projects and full-time opportunities</p></div>
            <div className="flex-col content-width font-mono text-sm text-neutral-900 items-left pb-4 md:sm-8"><p className="text-neutral-500">Before:</p></div>

        <div className="content-width flex flex-col md:flex-row flex-nowrap items-center justify-between gap-1 md:gap-4">

            <ProjectCard 
                to="zencoder"
                hoverColor="#FFB394"
                logoSrc="./Zencoder/logo.svg"
                logoAlt="Zencoder coding agent"
                logoClassName="w-24"
                text="AI Coding Agent"
            />


            <ProjectCard 
                to="agon"
                hoverColor="#D5FC51"
                logoSrc="./Agon/Logo.svg"
                logoAlt="Agon app"
                logoClassName="w-16"
                text="AI Fitness Challenges app"
            />

            <ProjectCard 
                to="30birds"
                hoverColor="#FCCD56"
                logoSrc="./30Birds/logo.svg"
                logoAlt="30 Birds"
                logoClassName="w-20"
                text="SaaS that changes 360 review"
            />

            <ProjectCard 
                to="barter"
                hoverColor="#D3CAE5"
                logoSrc="./Barter/Logo.svg"
                logoAlt="Barter logo"
                logoClassName="w-20"
                text="Web3 trading engine"
            />

            <ProjectCard 
                to="yango"
                hoverColor="#FFD700"
                logoSrc="./Yango/logo.svg"
                logoAlt="Yango logo"
                logoClassName="w-20"
                text="Taxi, Delivery, Superapp"
            />
            
        </div>
        </div>
    );
};
