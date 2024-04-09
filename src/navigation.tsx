import { motion } from "framer-motion";
import React from 'react';
import { Link, animateScroll as scroll} from 'react-scroll';

export default function ProjectsRow(){

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };

    return (
        <div id="yango" className="flex flex-col items-center w-full">
        <div className="content-width font-mono text-sm text-neutral-900 items-left pb-8"><p>There are selected projects from small startups to huge corporations</p></div>
        <div className="content-width flex flex-row flex-wrap items-center justify-between gap-4">

            
            <motion.div 
                className="flex flex-auto w-1/5 rounded-2xl h-64 cursor-pointer bg-white"
                initial={{ 
                    rotate: `${String(getRandomRotation())}deg`,
                    zIndex: 1,
                }} 
                whileHover={{
                    zIndex: 10,
                    rotate: 0,
                    y: -20,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9}}>
                    <Link
                        to="agon"
                        spy={true} 
                        smooth={true}
                        duration={500}
                        className="flex flex-col w-full p-4 justify-between overflow-hidden"
                        >
                            <img src="/Agon/Logo.svg" alt="Agon app" className="w-2/3"/>
                            <div className="flex flex-row flex-wrap w-full font-mono text-sm">
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Fitness</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">App</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">AI</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Gamification</div>
                            </div>
                    </Link>
                </motion.div>

                <motion.div 
                className="flex flex-auto w-1/5 rounded-2xl bg-white h-64 cursor-pointer"
                initial={{ 
                    rotate: `${String(getRandomRotation())}deg`,
                    zIndex: 1,
                }} 
                whileHover={{
                    zIndex: 10,
                    rotate: 0,
                    y: -20,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9}}>
                    <Link
                        to="30birds"
                        spy={true} 
                        smooth={true}
                        duration={500}
                        className="flex flex-col w-full p-4 justify-between"
                        >
                            <img src="/30birds/logo.svg" alt="30 Birds" className="w-2/3"/>
                            <div className="flex flex-row flex-wrap w-full font-mono text-sm">
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">SaaS</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">HR-tech</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Recognition</div>
                            </div>
                    </Link>
                </motion.div>

                <motion.div 
                className="flex flex-auto w-1/5 rounded-2xl bg-white h-64 cursor-pointer"
                initial={{ 
                    rotate: `${String(getRandomRotation())}deg`,
                    zIndex: 1,
                }} 
                whileHover={{
                    zIndex: 10,
                    rotate: 0,
                    y: -20,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9}}>
                    <Link
                        to="barter"
                        spy={true} 
                        smooth={true}
                        duration={500}
                        className="flex flex-col w-full p-4 justify-between"
                        >
                            <img src="/barter/Logo.svg" alt="Barter logo" className="w-2/3"/>
                            <div className="flex flex-row flex-wrap w-full font-mono text-sm">
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Web3</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Infrastructure</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Exchange</div>
                            </div>
                    </Link>
                </motion.div>

                <motion.div 
                className="flex flex-auto w-1/5 rounded-2xl bg-white h-64 cursor-pointer"
                initial={{ 
                    rotate: `${String(getRandomRotation())}deg`,
                    zIndex: 1,
                }} 
                whileHover={{
                    zIndex: 10,
                    rotate: 0,
                    y: -20,
                    transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.9}}>
                    <Link
                        to="yango"
                        spy={true} 
                        smooth={true}
                        duration={500}
                        className="flex flex-col w-full p-4 justify-between"
                        >
                            <img src="/yango/logo.svg" alt="Yango logo" className="w-2/3"/>
                            <div className="flex flex-row flex-wrap w-full font-mono text-sm">
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Taxi</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Delivery</div>
                            <div className="flex flex-2 h-6 p-4 rounded-2xl items-center bg-slate-100">Superapp</div>
                            </div>
                    </Link>
                </motion.div>
        </div>
        </div>
    );
};
