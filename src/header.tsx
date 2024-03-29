import React from 'react';
import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollSpy from 'react-scrollspy-navigation';
import "./App.css";

export function HeaderNav(){

    const links = [
        { href: "#agon", text: "Agon" },
        { href: "#30birds", text: "30 Birds" },
        { href: "#barter", text: "Barter" },
        { href: "#yango", text: "Yango" }
    ];

    return (
        <>
            {links.map((link, index) => (
                <motion.a
                    className="flex flex-1 content-center text-m text-black"
                    key={index}
                    href={link.href}
                >
                    {link.text}
                </motion.a>
            ))}
        </>
    );
}


export default function Header(){

    const [showProjectNav, setShowProjectNav] = useState(false);
    const handleScroll = () => {
        const scrollPosition = window.scrollY;
        const threshold = 1.3 * window.innerHeight;

        if (scrollPosition > threshold) {
            setShowProjectNav(true);
        } else {
            setShowProjectNav(false);
        }
    };

        const { scrollY } = useScroll();
    const headerColor = useTransform(
      scrollY,
      [0, 200],
      ["rgba(194, 177, 150, 0)", "rgba(238, 221, 195, 0.7)"]
    );

    const padding = useTransform(
        scrollY,
        [0, 150],
        ["16", "32px"]
    );

    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
    }, []);

    return (
            <header className= "flex flex-col items-center justify-between sticky top-0 z-30 pl-32 pr-32 pt-4 ">
            <motion.div 
            className="header-width flex flex-row items-center justify-between h-18 rounded-full backdrop-blur-lg"
            style={{ backgroundColor: headerColor, padding: padding}} 
            id="headnav">
                <div className="flex flex-row">
                <p className="text-l font-bold">Hi!</p>
                </div>
                
                <motion.div
                    className={`flex flex-row flex-1 ${showProjectNav ? "show" : "hide"}`}
                    id="projectnav">
                    <HeaderNav />
                </motion.div>
            </motion.div>
            
        </header>
    );
};  