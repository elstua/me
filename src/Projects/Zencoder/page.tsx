import React from 'react';
import ProjectHeader from '../../projectheader';
import ExpandableProjectContent from '../../ExpandableProjectContent';
import ZenMain from './ZenMain';
import Zen1 from './zen1';
import Zen2 from './zen2';
import ZenX from './zenx';


export default function ZencoderBlock() {

    // Preview images for the toggle button thumbnails

    const previewImages = [
        { src: "./input.webp", className: "h-24" },  
        { src: "./zencoder_agent.webp", className: "h-36 rounded-md" },     // From AgonBlock2
        { src: "./zencoder_x_2.webp", className: "h-36 rounded-lg" }, // From AgonBlock3
        { src: "./context.webp", className: "h-24" },      // From AgonBlock4      // From AgonBlock4
    ];


    return (
        
        
        <div id="zencoder" className="flex flex-col items-center w-full">
            <div className="content-width flex flex-col items-center justify-between">
            {/* Project header - always visible */}
            <ProjectHeader
                    name="Zencoder"
                    startDate={2024}
                    endDate={2025}
                    description="AI Coding Agent" 
                    link="https://zencoder.ai/"
                    linkText="Landing page"
            />

            {/* First content block - always visible */}
            <ZenMain />

            <ExpandableProjectContent projectName="Zencoder" previewImages={previewImages}>
            <Zen1 />
            <Zen2 />
            <ZenX />
            </ExpandableProjectContent>

        </div>    
        </div>
    )
}