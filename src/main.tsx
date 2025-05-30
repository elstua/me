import React from 'react';
import { motion } from 'framer-motion';


export default function FirstScreen() {
    return (
      <main className="flex mainblock-height w-full flex-col items-center justify-between pt-8 md:pt-16 sm:pl-0 sm:pr-0" id="main">
        <div className="content-width flex-col items-left font-mono text-sm text-neutral-900 lg:flex">
          <div className='flex flex-row items-center gap-2 pb-10'>
            <h1>Hi, I'm Artem Savelev!</h1>
            <motion.img 
            src='/me.png' 
            alt="my avatar should be there"
            className='rounded-full w-8 h-8'
            initial={{ 
              zIndex: 0,
              scale: 1,
          }} 
          whileHover={{
              scale: 2,
              zIndex: 1,
              rotate: 0,
              transition: { duration: 0.3 },
          }}
          whileTap={{ scale: 2 }}
            />
          </div>
          <p className='md:w-2/3 xl:w-2/5 w-full'>
          Over the past nine years, my work title has been Product Designer.
          From seed-stage startups to large corporations, I have explored ways to design holistic experiences.</p>
          <p className='md:w-2/3 xl:w-2/5 w-full pt-8'>
          Believe that software can tell a story. It can provide users with a new perspective on everyday life. It offer teams a journey of decisions and ideas that evolve into greateness.
          </p>
          
          <p className='md:w-2/3 xl:w-2/5 w-full pt-8'>
          I am currently open for a job and colloborations, so let's chat!
          </p>
          <ul className="flex flex-col w-full pt-4 pb-10 gap-4">
          {/* <li className='flex flex-row gap-2'><p className='opacity-50'>Let's connect</p> <a href="mailto:stua@fastmail.com" className='no-underline hover:underline'>stua@fastmail.com</a></li> */}
          <li className='flex flex-row gap-2'><p className='opacity-50'>Experience</p> 
            <a href="https://read.cv/stua" target="_blank" rel="noopener noreferrer" 
            className='no-underline hover:underline'>Read.cv ↗︎</a>
            <p>,</p>
            <a href="https://linkedin.com/in/stua" target="_blank" rel="noopener noreferrer" 
            className='no-underline hover:underline'>LinkedIn ↗︎</a>
          </li>
          <li className='flex flex-row gap-2'><p className='opacity-50'>Social</p> 
          <a href="https://twitter.com/s_tu_a" target="_blank" rel="noopener noreferrer" 
          className='no-underline hover:underline'>Twitter ↗︎</a>
          <p>,</p>
          <a href="https://posts.cv/stua" target="_blank" rel="noopener noreferrer" 
          className='no-underline hover:underline'>Posts ↗︎</a>
          </li>
          <li className='flex flex-row gap-2'><p className='opacity-50'>City</p><p>Lisbon</p></li>
          </ul>

          <div><p className='Black pb-4'>Let's connect</p> </div>
          <div className='flex gap-2'>
          <motion.button
              onClick={() => window.location.href = "mailto:stua@fastmail.com"}
              className='md:w-[220px] lg:w-[220px] w-full px-2 py-2 overflow-hidden border  relative rounded-3xl  text-neutral-800 '
              initial="initial"
              whileHover="hover"
              animate="initial"
              variants={{
                initial: {
                  background: "#F0E2CA00",
                  borderColor: "#baafa2",

                },
                hover: {
                  borderColor: '#F0E2CA',
                  background: "#F0E2CA",
                  transition: { duration: 0.3 }
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
              Write an email
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

          <motion.button
          onClick={() => window.location.href = "https://t.me/elstua"}
          className='md:w-[220px] lg:w-[220px] w-full px-2 py-2 overflow-hidden border  relative rounded-3xl  text-neutral-800 '
          initial="initial"
          whileHover="hover"
          animate="initial"
          variants={{
            initial: {
              background: "#F0E2CA00",
              borderColor: "#baafa2",

            },
            hover: {
              borderColor: '#F0E2CA',
              background: "#F0E2CA",
              transition: { duration: 0.3 }
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
              Contact in telegram
            </motion.div>
            <motion.div
              className="absolute w-full left-0"
              variants={{
                initial: { y: 30 },
                hover: { y: -20 }
              }}
              transition={{ duration: 0.3 }}
            >
              @elstua
            </motion.div>
          </motion.button>
          </div>
          
        </div>
      </main>
    );
  }

