import React from "react";
import ProjectHeader from "../../projectheader";
import AgonBlock1 from "./Agon1";
import AgonBlock2 from "./Agon2";
import AgonBlock3 from "./Agon3";
import AgonBlock4 from "./Agon4";

export default function AgonBlock() {
    const getRandomRotation = () => {
        return Math.floor(Math.random() * 10) - 4; // Generate a random number between -4 and 4
    };



    return (
        <div id="agon" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-left justify-between">
                <ProjectHeader
                    name="Agon"
                    startDate={2023}
                    endDate={2024}
                    description="Building habits with fitness challenges, gamification and AI tracking"
                    link="https://apps.apple.com/pt/app/agon-fitness-rewards/id1574023421?l=en-GB"
                    linkText="App at Appstore" />

                    <AgonBlock1/>
                <div className="flex flex-wrap md:flex-nowrap lg:flex-nowrap w-full flex-row lg:pt-20 gap-4">
                    <AgonBlock3/>
                    <AgonBlock2/>

                </div>
                    <AgonBlock4/>
                </div>

            </div>
    );
}
