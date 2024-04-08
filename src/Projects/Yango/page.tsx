import React from "react";
import ProjectHeader from "../../projectheader";

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
                />


                <div className="flex justify-between w-full pt-10 pb-10 place-content-center">
                <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                >
                    <img
                        src="/Agon/Onboarding01.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                </div>
                <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }}
                >
                    <img
                        src="/Agon/Onboarding02.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`}}
                    >
                    <img
                        src="/Agon/Onboarding04.png"
                        alt="Agon"
                        width={260}
                        height={640}
                        className="h-full screen-block"
                    />
                    </div>
                </div>
        </div>
        </div>
    );
}