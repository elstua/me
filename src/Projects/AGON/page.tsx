import React from "react";
import ReactPlayer from 'react-player'
import ProjectHeader from "../../projectheader";

export default function AgonBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };

    return (
        <div id="agon" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
                <ProjectHeader
                    name="Agon"
                    startDate={2023}
                    endDate={2024}
                    description="Build habits with fitness challenges, gamification and AI tracking" />

                <div className="flex justify-around w-full h-auto pt-32 pb-10">
                    <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)` }} >
                    <img
                        src="./Agon/MainScreen.webp"
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </div>

                    <div className='w-60 m-4 font-mono text-sm'>
                    <p>There is a text about what agon is. How we move to it, what i've done and what's the language behind it.</p>
                    </div>

                    <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px' }} >
                    <ReactPlayer
                        url="/Agon/exercise_small.webm"
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </div>
                </div>


                <div className="flex justify-around flex-wrap content-center w-full pt-12 pb-10 gap-20">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${String(getRandomRotation())}deg)` }}
                    >
                    <img
                        src="/Agon/Challenge.png"
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </div>
                    <div className='flex flex-1 flex-row flex-wrap justify-end content-center space-between gap-4'
                    style={{maxHeight: '540px'}}>
                    <img src="/Agon/first_day_card.webp" alt="Agon" 
                    className="w-64 h-auto"
                    style={{ transform: `rotate(${getRandomRotation()}deg)`}} />
                    <img src="/Agon/done_card.webp" alt="Agon"
                       className="w-64 h-auto"
                       style={{ transform: `rotate(${getRandomRotation()}deg)`}} />
                    <img src="/Agon/top15_card.webp" alt="Agon"
                     className="w-64 h-auto"
                     style={{ transform: `rotate(${getRandomRotation()}deg)`}}/>
                    <img src="/Agon/last_day_card.webp" alt="Agon"
                     className="w-64 h-auto"
                     style={{ transform: `rotate(${getRandomRotation()}deg)`}}/>
                    <img src="/Agon/top10_card.webp" alt="Agon"
                     className="w-64 h-auto"
                     style={{ transform: `rotate(${getRandomRotation()}deg)`}}/>
                     <p className="font-mono text-sm">different states of active challenges</p>
                    </div>
                </div>


                <div className="flex justify-around w-full pt-12 pb-10 place-content-center">
                <div 
                    className='h-full phone-block'
                    style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px'}} >
                    <ReactPlayer
                        url="/Agon/buycoins.webm"
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                    >
                    <img
                        src="/Agon/paywall.webp"
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </div>
                </div>

                {/* onboarding block */}
                <div className="flex justify-around w-full pt-12 pb-10 place-content-center">
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)` }}
                    >
                    <ReactPlayer
                        url="/Agon/onboarding.webm"
                        playing={true}
                        loop={true}
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        style={{ borderRadius: '24px', overflow: 'hidden'}}
                    />
                    </div>
                    <div 
                        className='h-full phone-block'
                        style={{ transform: `rotate(${getRandomRotation()}deg)`, marginTop: '80px'}}
                    >
                    <img
                        src="/Agon/Onboarding04.webp"
                        alt="Agon"
                        width={240}
                        height={"auto"}
                        className="h-full screen-block"
                    />
                    </div>
                </div>

                {/* Marketing block */}
                {/* <div className='flex flex-row w-full gap-3'>
                    <div className='flex-1 bg-slate-400'>
                        <p>There are a lot of marketing materials, from app store screens to first advertisement in</p>
                    </div>
                    <div className='w-2/3 h-72 bg-slate-400'>
                        <p>marketing imgs and language</p>
                    </div>
                </div> */}

            </div>
        </div>
    );
}
