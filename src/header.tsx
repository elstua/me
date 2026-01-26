"use client";
import React from 'react';
import { Link, scrollSpy } from 'react-scroll';
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import "./App.css";

export function HeaderNav(){
    const [activeSection, setActiveSection] = useState("");
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        scrollSpy.update();

      }, []);
    const links = [
        { href: "zencoder", text: "Zencoder" },
        { href: "agon", text: "Agon" },
        { href: "30birds", text: "30 Birds" },
        { href: "barter", text: "Barter" },
        { href: "yango", text: "Yango" }
    ];
    
    const handleSetActive = (to: any) => {
        setActiveSection(to);
      };

    // Calculate progress within the active section
    useEffect(() => {
        const handleScroll = () => {
            if (!activeSection) return;
            
            const section = document.getElementById(activeSection);
            if (!section) return;
            
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionHeight = rect.height;
            const scrollPosition = window.scrollY;
            
            // Calculate progress through this section
            const progress = Math.max(0, Math.min(1, 
                (scrollPosition - sectionTop + 500) / sectionHeight
            ));
            
            setScrollProgress(progress);
        };
        
        window.addEventListener("scroll", handleScroll);
        handleScroll(); // Initial calculation
        
        return () => window.removeEventListener("scroll", handleScroll);
    }, [activeSection]);

    return (
        <>
        
            {links.map((link, index) => (
                <div key={link.href} className="">
                    <Link
                        className="flex flex-col gap-[1px] justify-center content-center items-center align-middle
                        rounded-full font-mono text-sm md:h-12 w-12 md:w-auto text-black px-4 cursor-pointer
                        transition-all ease-in-out headernav
                        duration-300 ..."
                        activeClass="font-bold"
                        to={link.href}
                        spy={true} 
                        hashSpy={true}
                        smooth={true} 
                        duration={400}
                        offset={-500}
                        onSetActive={handleSetActive}
                    >
                        <span className="md:hidden text-lg">◦</span>
                        <span className="hidden md:inline">{link.text}</span>
                        {/* Progress bar underline */}
                    {activeSection === link.href && (
                        <div className="hidden md:block w-full h-2 md:h-0.5 bg-[#CCC1B0] rounded-full">
                            <motion.div
                                className="h-full bg-gray-900 rounded-full"
                                initial={{ width: "0%" }}
                                animate={{ width: `${scrollProgress * 100}%` }}
                                transition={{ duration: 0.1, ease: "linear" }}
                            />
                        </div>
                    )}  
                    </Link>
                    

                </div>
            ))}
        </>
    );
}


export default function Header(){

    const [showProjectNav, setShowProjectNav,] = useState(false);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 1 * window.innerHeight;

        if (scrollPosition > threshold) {
            setShowProjectNav(true);
        } else {
            setShowProjectNav(false);
        }
    };
    const [showNav, setShowNav,] = useState(false);
    const headerScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = window.innerHeight * 0.7;

        if (scrollPosition > threshold) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

        const { scrollY } = useScroll();
    const headerColor = useTransform(
      scrollY,
      [400, 800],
      ["#fff7ed", "hsla(38, 41.00%, 84.70%, 0.80)"]
    );

    const padding = useTransform(
        scrollY,
        [400, 800],
        ["8px", "16px"]
    );

    const blur = useTransform(
        // Add the missing CSS filter style
        scrollY,
        [400, 800],
        [`blur(32px)`, `blur(0px)`]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", headerScroll);
    }, []);

    return (
            <header className= "flex flex-col items-center content-center justify-center fixed top-0 left-0 right-0 z-30 pl-1 pr-1 pt-4 min-h-18">
                <motion.div className={`flex max-w-[1200px] items-between flex-row md:h-20 justify-between w-full flex-row rounded-full backdrop-blur-lg ${showNav ? "showNav" : "hideNav"}`}
                style={{ backgroundColor: headerColor, padding: padding, filter: blur}}
                >
                <Link
                    className="hidden md:flex md:p-4 justify-center content-center items-center
                    rounded-full font-mono text-sm cursor-pointer
                    transition-all ease-in-out
                    duration-300 "
                    activeClass="font-extrabold decoration-solid"
                    to={"main"}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                >
                    Artem Savelev
                </Link>
                <Link
                    className="md:hidden flex justify-center content-center items-center align-middle
                    rounded-full font-mono text-sm text-black cursor-pointer
                    transition-all ease-in-out
                    headernav duration-300 ..."
                    activeClass="font-extrabold decoration-solid"
                    to={"main"}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                >
                    Stua
                </Link>

                <div className={`flex flex-row justify-center w-4/5 md:w-2/5 ${showProjectNav ? "show" : "hide"}`}>
                    <HeaderNav />
                </div>

                <a
                    href="mailto:stua@fastmail.com"
                    className="hidden md:flex md:p-4 justify-center content-center items-center align-middle
                    rounded-full font-mono text-sm h-12 text-black cursor-pointer
                    transition-all ease-in-out
                    headernav duration-300 ..."
                >
                    ↘︎ Contact me
                </a>
                </motion.div>
            
        </header>
    );
};
