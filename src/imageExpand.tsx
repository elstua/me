import React from "react";
import "./App.css";
import { useState } from "react";
import { motion } from "framer-motion";

// зачем мне нужна для этого функция с открытием когда я могу сделать то же самое с помощью вариантов?


interface ImageProps {
  src: string;
  alt: string;
  layoutId: string;
  size?: string;
}

function Image({ src, alt, layoutId }: ImageProps) {
  const [open, setOpen] = useState(true);
  const getRandomRotation = () => {
    return Math.floor(Math.random() * 10) - 8; // Generate a random number between -4 and 4
};

  return (
    <>
      {open ? (
        <motion.div className="w-[340px] h-64 items-center content-center justify-center"
        transition={{duration: 0.4}}>
          <motion.div
            className="relative"
            onClick={() => setOpen(false)}
            initial={{
              
              rotate: `${String(getRandomRotation())}deg`, 
              zIndex: 1,
              margin: '0 -8px'}}
            whileHover={{ 
              // position: 'relative',
              scale: 1.1, 
              zIndex: 99, 
              rotate: 0}}
            whileTap={{
              scale: 1,
              zIndex: 3,
            }}
            animate={open ? "closed" : "open"}
            variants={{
              open: {
                backgroundColor: "rgba(255,247,237,0.8)",
              },
              closed: {
                backgroundColor: "rgba(255,247,237,0)",
              },
            }}
            transition={{ type: 'circIn', duration: 0.4 }}
          >
            <motion.div
              layoutId={layoutId}
              className="bg-white p-2 imageblock rounded-[8px] shadowblockSmall"
              variants={{
                open: {
                  width: "80%",
                },
                closed: {
                  width: "100%",
                },
              }}
            >
              <motion.img src={src} alt={alt} className="imageblock"/>

            </motion.div>
          </motion.div>
        </motion.div>
      ) : (

        <motion.div className=" z-[30] h-64 relative">
          <motion.div
            className="h-full w-full fixed flex items-center content-center justify-center top-0 left-0"
            onClick={() => setOpen(true)}
            animate={open ? "closed" : "open"}
            variants={{
              open: {
                backgroundColor: "rgba(255,247,237,0.8)",
              },
              closed: {
                backgroundColor: "rgba(255,247,237,0)",
              },
            }}
          >
            <motion.div
              layoutId={layoutId}
              className="bg-white p-8 h-auto rounded-[24px] imageblock shadowblock"
              variants={{
                open: {
                  width: "80%",
                },
                closed: {
                  width: "100%",
                },
              }}
              initial={{margin: '0px'}}
              whileHover={{ scale: 1.04, transition: { duration: 0.4 } }}
              whileTap={{ scale: 1 }}
              transition={{ type:'circIn', duration: 0.4}}
            >
              <motion.img src={src} alt={alt} className="h-auto imageblock" />
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}


export default Image;