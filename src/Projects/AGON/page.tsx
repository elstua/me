import React from "react";
import ProjectHeader from "../../projectheader";
import AgonBlock1 from "./AgonMain";
import AgonBlock2 from "./Agon2";
import AgonBlock3 from "./Agon3";
import AgonBlock4 from "./Agon4";
import ExpandableProjectContent from "../../ExpandableProjectContent";

export default function AgonBlock() {
    // Preview images for the toggle button thumbnails
    const previewImages = [
        { src: "/Agon/challenge.webp", className: "h-36 rounded-lg" },     // From AgonBlock2
        { src: "/Agon/done_card.webp", className: "h-20 md:block hidden" },
        { src: "/Agon/onboarding04.webp", className: "h-36 h-20 rounded-lg" }, // From AgonBlock3
        { src: "/Agon/paywall.webp", className: "h-36 h-20 rounded-lg" },      // From AgonBlock4
    ];

    return (
        <div id="agon" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-left justify-between">
                {/* Project header - always visible */}
                <ProjectHeader
                    name="Agon"
                    startDate={2023}
                    endDate={2024}
                    description="Building habits with fitness challenges, gamification and AI tracking"
                    link="https://apps.apple.com/pt/app/agon-fitness-rewards/id1574023421?l=en-GB"
                    linkText="App at Appstore" />

                {/* Main hero block - always visible */}
                <AgonBlock1/>

                {/* Expandable detail blocks */}
                <ExpandableProjectContent 
                    projectName="Agon" 
                    previewImages={previewImages}
                >
                    <div className="flex flex-wrap md:flex-nowrap w-full flex-row gap-2">
                        <AgonBlock3/>
                        <AgonBlock2/>
                    </div>
                    <AgonBlock4/>
                </ExpandableProjectContent>
            </div>
        </div>
    );
}
