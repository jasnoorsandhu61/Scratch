"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function IntroScroll() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        // ===============================================================
        // CONFIGURATION
        // ===============================================================
        const startFrame = 504;
        const endFrame = 761;
        const frameCount = endFrame - startFrame + 1;

        // Adjust folder and filename to match your actual path
        const urls = new Array(frameCount).fill(0).map((_, i) => {
            const frameNumber = startFrame + i;
            return `/videoFrames/${frameNumber}.webp`;
        });

        // ===============================================================
        // RESIZE HANDLER
        // ===============================================================
        const handleResize = () => {
            canvas.width = canvas.clientWidth;
            canvas.height = canvas.clientHeight;
            ScrollTrigger.refresh();
        };
        window.addEventListener("resize", handleResize);
        handleResize();

        // ===============================================================
        // IMAGE SEQUENCE FUNCTION
        // ===============================================================
        let playhead = { frame: 0 };
        const images: HTMLImageElement[] = [];

        const updateImage = () => {
            const img = images[Math.round(playhead.frame)];
            if (!img || !img.width || !img.height) return;

            const canvas = ctx.canvas;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Scale like CSS "background-size: cover"
            const hRatio = canvas.width / img.width;
            const vRatio = canvas.height / img.height;
            const ratio = Math.max(hRatio, vRatio);
            const centerShiftX = (canvas.width - img.width * ratio) / 2;
            const centerShiftY = (canvas.height - img.height * ratio) / 2;

            ctx.drawImage(
                img,
                0,
                0,
                img.width,
                img.height,
                centerShiftX,
                centerShiftY,
                img.width * ratio,
                img.height * ratio
            );
        };

        // Preload all images
        let firstImageLoaded = false;
        urls.forEach((url, i) => {
            const img = new Image();
            img.src = url;
            img.onload = () => {
                if (i === 0 && !firstImageLoaded) {
                    firstImageLoaded = true;
                    updateImage(); // draw only after the first one loads
                    canvas.style.visibility = "visible";
                    setIsLoaded(true);
                }
            };
            img.onerror = () => {
                console.error(`Failed to load image: ${url}`);
            };

            images.push(img);
        });

        // ===============================================================
        // GSAP SCROLL ANIMATION WITH CUSTOM SMOOTHING
        // ===============================================================
        const sequence = gsap.to(playhead, {
            frame: frameCount - 1,
            ease: "none",
            onUpdate: updateImage,
            scrollTrigger: {
                trigger: ".main-scroll",
                start: "top top",
                end: "+=4000", // Scroll distance for the intro
                scrub: 1.2,
                pin: ".main-scroll", // Pin just the visual part
                pinSpacing: true, // Allow natural spacing
                anticipatePin: 1,
                invalidateOnRefresh: true,
                onLeave: () => {
                    // Animation completed, continue seamlessly
                    console.log("Intro scroll animation completed - seamless transition");
                },
            },
        });

        // ===============================================================
        // CLEANUP
        // ===============================================================
        return () => {
            window.removeEventListener("resize", handleResize);
            sequence?.kill();
            ScrollTrigger.getAll().forEach((st) => st.kill());
        };
    }, []);

    return (
        <div className="relative">
            {/* Main intro scroll container */}
            <div className="w-full h-screen bg-black relative" style={{ zIndex: 10 }}>
                <div className="main-scroll flex items-center justify-center h-screen w-full overflow-hidden bg-black relative">
                    <canvas
                        ref={canvasRef}
                        style={{ visibility: "hidden" }}
                        className="w-full h-full"
                    />
                </div>
            </div>
            {/* Spacer to account for scroll distance - this creates the scroll room */}
            <div className="h-[4000px]" />
        </div>
    );
}
