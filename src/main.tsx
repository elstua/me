import React from 'react';
import { motion } from 'motion/react';
import Cave from './Cave';


export default function FirstScreen() {
    return (
      <main className="flex mainblock-height w-full flex-col items-center sm:pl-0 sm:pr-0" id="main">
        <Cave/>
        <div className="content-width md:flex-row justify-between font-mono text-sm text-neutral-900 pt-16 lg:flex">
          <div className='flex flex-col'>
          <h1 className='pb-8'>
            Hi, I'm Artem Savelev, Product Designer
          </h1>
          <p className='md:w-2/3 xl:w-3/5 w-full'>
          From pre-seed startups to large corporations, for the last 10 years I've explored ways to give people new angles on their everyday tasks.
          <br />
          Believe that software is a culture medium and a story. 
          <br />
          It offers teams a journey of decisions and ideas that evolve into greatness and something worth of building.</p>
            
            <div className='flex pt-8 gap-2'>
              <motion.button
                  onClick={() => window.location.href = "mailto:stua@fastmail.com"}
                  className='md:w-[240px] lg:w-[240px] w-full px-6 py-2 overflow-hidden border  relative rounded-3xl  text-neutral-800 '
                  initial="initial"
                  whileHover="hover"
                  animate="initial"
                  style={{ boxShadow: "0px 0px 0px 1px rgba(184, 175, 163, 0.5)" }}
                  variants={{
                    initial: {
                      background: "#ffffff",
                      borderColor: "#baafa2",

                    },
                    hover: {
                      background: "#F0E2CA",
                      transition: { duration: 0.2 }
                    }
                  }}
              >
                <motion.div
                  variants={{
                    initial: { y: 0 },
                    hover: { y: -30 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  Let's work together
                </motion.div>
                <motion.div
                  className="absolute w-full left-0"
                  variants={{
                    initial: { y: 30 },
                    hover: { y: -20 }
                  }}
                  transition={{ duration: 0.3 }}
                >
                  stua@fastmail.com
                </motion.div>
              </motion.button>

              </div>
              
            </div>



          <div className='flex pt-10'>
          <ul className="flex flex-row md:flex-col lg:*:items-end w-full gap-4">
          <li className='flex flex-row md:flex-col gap-2'><p className='opacity-50'>Social</p> 
          <a href="https://twitter.com/s_tu_a" target="_blank" rel="noopener noreferrer" 
          className='underline hover:no-underline'>Twitter</a>
          <a href="https://linkedin.com/in/stua" target="_blank" rel="noopener noreferrer" 
            className='underline hover:no-underline'>LinkedIn</a>
          </li>
          <li className='flex flex-row md:flex-col gap-2'><p className='opacity-50'>City</p><p>Lisbon</p></li>
          </ul>
          </div>

        </div>
      </main>
    );
  }

