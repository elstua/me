"use client";
import React from 'react';
import { Link, animateScroll as scroll, scrollSpy } from 'react-scroll';
import { useState, useEffect } from "react";
import { filterProps, motion, useScroll, useTransform } from "framer-motion";
import "./App.css";

export function HeaderNav(){

    useEffect(() => {
        scrollSpy.update();

      }, []);
    const links = [
        { href: "agon", text: "Agon" },
        { href: "30birds", text: "30 Birds" },
        { href: "barter", text: "Barter" },
        { href: "yango", text: "Yango" }
    ];
    
    const handleSetActive = (to: any) => {
      };

    return (
        <>
        
            {links.map((link, index) => (
                <Link
                    className="flex flex-1 justify-center content-center items-center align-middle
                    rounded-full font-mono text-m h-12 text-black cursor-pointer
                    transition-all ease-in-out
                    hover: hover:bg-stone-400 duration-300 ..."
                    activeClass="font-extrabold decoration-solid"
                    to={link.href}
                    spy={true} 
                    hashSpy={true}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                    onSetActive={handleSetActive}
                >
                    {link.text}
                </Link>
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
        const threshold = window.innerHeight * 0.01;

        if (scrollPosition > threshold) {
            setShowNav(true);
        } else {
            setShowNav(false);
        }
    };

        const { scrollY } = useScroll();
    const headerColor = useTransform(
      scrollY,
      [0, 200],
      ["#fff7ed", "rgba(232, 219, 200, 0.8)"]
    );

    const padding = useTransform(
        scrollY,
        [0, 150],
        ["8px", "16px"]
    );

    const blur = useTransform(
        // Add the missing CSS filter style
        scrollY,
        [0, 200],
        [`blur(32px)`, `blur(0px)`]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);
    useEffect(() => {
        window.addEventListener("scroll", headerScroll);
    }, []);

    return (
            <header className= "flex flex-col items-center justify-between fixed top-0 left-0 right-0 z-30 pl-32 pr-32 pt-4 min-h-18">
            <motion.div 
            className={` header-width flex flex-row items-center justify-between h-20`} 
            id="headnav">
                <motion.div className={`flex w-full flex-row rounded-full backdrop-blur-lg ${showNav ? "showNav" : "hideNav"}`}
                style={{ backgroundColor: headerColor, padding: padding, filter: blur}}
                >
                <Link
                    className="flex version p-4 justify-center content-center items-center align-middle
                    rounded-full font-mono text-m h-12 text-black cursor-pointer
                    transition-all ease-in-out
                    hover: hover:bg-stone-400 duration-300 ..."
                    activeClass="font-extrabold decoration-solid"
                    to={"main"}
                    smooth={true} 
                    duration={400}
                    offset={-300}
                >
                    Artem Savelev
                </Link>
                <div
                    className={`flex flex-row flex-1 content-between ${showProjectNav ? "show" : "hide"}`}>
                    <HeaderNav />
                </div>
                </motion.div>
            </motion.div>
            
        </header>
    );
};  