"use client";

import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Overlay: React.FC = () => {
    const overlayRef = useRef<HTMLDivElement>(null);
    const slide1Ref = useRef<HTMLDivElement>(null);
    const slide2Ref = useRef<HTMLDivElement>(null);
    const slide3Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        if (!overlayRef.current || !slide1Ref.current || !slide2Ref.current || !slide3Ref.current) return;

        // Set initial states
        gsap.set(overlayRef.current, { opacity: 0 });
        gsap.set(slide1Ref.current, { opacity: 0, y: 50 });
        gsap.set(slide2Ref.current, { opacity: 0, y: 50 });
        gsap.set(slide3Ref.current, { opacity: 0, y: 50 });

        // Create main timeline with scrub (no pin - let IntroScroll handle pinning)
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: ".main-scroll",
                start: "top top",
                end: "+=2000",
                scrub: 1,
                anticipatePin: 1,
                snap: {
                    snapTo: [0, 0.33, 0.66, 1],
                    duration: { min: 0.2, max: 0.6 },
                    delay: 0.1,
                    ease: "power2.inOut"
                },
            }
        });

        // Timeline sequence
        tl
            // Overlay fade in
            .to(overlayRef.current, {
                opacity: 1,
                duration: 0.3,
                ease: "power2.out"
            })

            // Slide 1: Intro text
            .to(slide1Ref.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, 0.2)

            // Slide 1 to Slide 2 transition
            .to(slide1Ref.current, {
                opacity: 0,
                y: -50,
                duration: 0.4,
                ease: "power2.inOut"
            }, 0.8)
            .to(slide2Ref.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, 1.0)

            // Slide 2 to Slide 3 transition
            .to(slide2Ref.current, {
                opacity: 0,
                y: -50,
                duration: 0.4,
                ease: "power2.inOut"
            }, 1.6)
            .to(slide3Ref.current, {
                opacity: 1,
                y: 0,
                duration: 0.5,
                ease: "power2.out"
            }, 1.8)

            // Final fade out
            .to(slide3Ref.current, {
                opacity: 0,
                y: -50,
                duration: 0.4,
                ease: "power2.in"
            }, 2.4)
            .to(overlayRef.current, {
                opacity: 0,
                duration: 0.4,
                ease: "power2.in"
            }, 2.6);

        return () => {
            ScrollTrigger.getAll().forEach(trigger => {
                if (trigger.vars.trigger === ".main-scroll") {
                    trigger.kill();
                }
            });
        };
    }, []);

    return (
        <div
            ref={overlayRef}
            className="fixed inset-0 bg-black/30 z-20 pointer-events-none h-screen w-screen"
            style={{ fontFamily: 'Anton-Regular, sans-serif' }}
        >
            {/* Top Left - Static */}
            <div className="absolute top-4 left-4 md:top-8 md:left-8 p-4">
                <p className="text-white text-lg md:text-xl font-bold tracking-wider">WE'RE R.O.V.</p>
            </div>

            {/* Top Right - Static */}
            <div className="absolute top-4 right-4 md:top-8 md:right-8 text-right p-4">
                <p className="text-white text-xs md:text-sm font-bold tracking-widest">BRAND IDENTITY /</p>
                <p className="text-white text-xs md:text-sm font-bold tracking-widest">ARCHITECTS</p>
            </div>

            {/* Center - Animated text slides */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 px-4 md:px-8 w-full max-w-4xl h-auto">
                {/* Slide 1 - Intro */}
                <div ref={slide1Ref} className="w-full absolute top-0 left-0">
                    <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                        Want to see what <span className="italic">COMPLETE</span> really means?
                    </p>
                </div>

                {/* Slide 2 - Service Promise */}
                <div ref={slide2Ref} className="w-full absolute top-0 left-0">
                    <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                        We deliver <span className="italic">COMPLETE</span> brand solutions.
                    </p>
                </div>

                {/* Slide 3 - Call to Action */}
                <div ref={slide3Ref} className="w-full absolute top-0 left-0">
                    <p className="text-white text-2xl md:text-4xl lg:text-5xl font-bold text-center leading-tight">
                        Ready to <span className="italic">ELEVATE</span> your brand?
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Overlay;
