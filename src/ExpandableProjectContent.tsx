import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

// Type for individual preview images with customizable properties
export interface PreviewImage {
    src: string;              // Image path
    className?: string;       // Custom CSS classes for this specific image
    alt?: string;            // Custom alt text (optional)
}

interface ExpandableProjectContentProps {
    projectName: string;
    previewImages: (string | PreviewImage)[];  // Can be either a string path or an object with properties
    children: React.ReactNode;
}

const getRandomRotation = () => {
    return Math.floor(Math.random() * 10) - 4; // Generate a random number between -2 and 2
};

/**
 * A reusable component that wraps project content blocks with a toggle button.
 * 
 * How it works:
 * - Shows a "Explore {projectName} ↓" button when collapsed
 * - Shows "Hide" when expanded
 * - Includes preview thumbnails on the right side of the button
 * - Animates content with slide + blur effects
 * 
 * Props:
 * - projectName: The name shown in the toggle button (e.g., "Agon")
 * - previewImages: Array of image paths (strings) OR objects with { src, className, alt }
 *   Examples:
 *   ["/image1.jpg", "/image2.jpg"] // Simple string array
 *   [{ src: "/image1.jpg", className: "h-24 w-24" }, { src: "/image2.jpg", className: "h-32" }] // Custom sizes
 * - children: The content blocks to show/hide
 */
export default function ExpandableProjectContent({ 
    projectName, 
    previewImages, 
    children 
}: ExpandableProjectContentProps) {
    // State to track if content is expanded or collapsed
    const [isExpanded, setIsExpanded] = useState(false);

    // Animation variants for the content blocks
    const contentVariants = {
        hidden: {
            y: 50,
            opacity: 0,
            filter: 'blur(8px)',
        },
        visible: {
            y: 0,
            opacity: 1,
            filter: 'blur(0px)',
            transition: {
                duration: 0.4,
                ease: 'easeOut',
            },
        },
        exit: {
            y: -50,
            opacity: 0,
            filter: 'blur(8px)',
            transition: {
                duration: 0.3,
                ease: 'easeIn',
            },
        },
    };

    return (
        <div className="w-full">
            {/* Toggle Button with smooth layout transitions */}
            <motion.button
                onClick={() => setIsExpanded(!isExpanded)}
                className={`w-full flex items-center transition-colors duration-300 overflow-none relative
                    ${isExpanded 
                        ? 'h-16 py-12 justify-center hover:text-neutral-500 hover:underline' 
                        : 'md:flex-row flex-col gap-4 md:justify-between mt-8 md:mt-4 hover:text-neutral-500 hover:underline '
                    }`}
                layout="position" // Only animates position changes, not size (prevents text scaling)
                transition={{ 
                    layout: { duration: 0.3, ease: 'easeInOut' },
                    duration: 0.3 
                }}
                initial="initial"
                animate={isExpanded ? "expanded" : "initial"}
                whileHover="hover"
            >
                <AnimatePresence mode="wait">
                    {isExpanded ? (
                        // Collapsed view: centered "Close {projectName}" button
                        <motion.div
                            key="close-button"
                            initial={{ opacity: 0, y: 0 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ 
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: { duration: 0.25 }
                            }}
                            className="font-mono text-sm text-neutral-800"
                        >
                           <p> Hide {projectName} ↑ </p>
                        </motion.div>
                    ) : (
                        // Expanded view: original layout with preview images
                        <motion.div
                            key="explore-content"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ 
                                duration: 0.3,
                                ease: "easeInOut",
                                opacity: { duration: 0.25 }
                            }}
                            className="w-full flex md:flex-row flex-col gap-4 items-center md:justify-between"
                        >
                            {/* Left side: Toggle text */}
                            <div className="font-mono text-sm text-neutral-800">
                                Explore {projectName} ↓
                            </div>

                            {/* Right side: Preview thumbnails */}
                            {previewImages.length > 0 && (
                                <div className="flex flex-row flex-wrap items-center justify-center gap-[2px]">
                                    {previewImages.slice(0, 4).map((image, index) => {
                                        // Support both string paths and image objects
                                        const imageSrc = typeof image === 'string' ? image : image.src;
                                        const imageClassName = typeof image === 'string' 
                                            ? "flex object-cover rounded-sm h-36 shadow-lg" 
                                            : image.className || "flex object-cover rounded-sm h-36 shadow-lg";
                                        const imageAlt = typeof image === 'string' 
                                            ? `${projectName} preview ${index + 1}` 
                                            : image.alt || `${projectName} preview ${index + 1}`;

                                        return (
                                            <motion.img
                                                layout
                                                variants={{
                                                    initial: { rotate: getRandomRotation(), scale: 0.9 },
                                                    hover: { rotate: 0, scale: 1 },
                                                }}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                exit={{ scale: 0.8, opacity: 0, y: 100 }}
                                                transition={{ duration: 0.2, delay: index * 0.05 }}
                                                key={index}
                                                src={imageSrc}
                                                alt={imageAlt}
                                                className={imageClassName}
                                            />
                                        );
                                    })}
                                </div>
                            )}
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>

            {/* Expandable Content */}
            <AnimatePresence>
                {isExpanded && (
                    <motion.div
                        variants={contentVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                    >
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
