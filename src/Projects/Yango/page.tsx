import React from "react";
import ProjectHeader from "../../projectheader";
import { motion } from "framer-motion";

export default function YangoBlock() {

    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };
    
    return (
        
        <div id="yango" className="flex flex-col items-center w-full">
        <div className="content-width flex flex-col items-center justify-between">

                <ProjectHeader 
                name="Yango" 
                startDate={2017} 
                endDate={2020} 
                description="Biggest Taxi and delivery service in Russia" 
                link="https://apps.apple.com/pt/app/yandex-go-taxi-food-delivery/id472650686?l=en-GB"
                linkText="App at App Store"
                />


                <div className="flex justify-between w-full pt-10 pb-10 place-content-center">
                <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                        }}
                    >
                    <img
                        src="/Yango/delivery.webp"
                        alt="Delivery option in Yango app"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>

                    <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                          }}
                    >
                    <img
                        src="/Yango/map.webp"
                        alt="Order process in Yango app"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>

                    <motion.div 
                        className='h-full phone-block'
                        initial={{ 
                            rotate: `${String(getRandomRotation())}deg`,
                            scale: 1,
                        }} 
                        whileHover={{
                            scale: 1.1,
                            rotate: 0,
                            transition: { duration: 0.3 },
                          }}
                    >
                    <img
                        src="/Yango/history.webp"
                        alt="Order history page in Yango app"
                        width={220}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </motion.div>
                </div>
        </div>
        </div>
    );
}