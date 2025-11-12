"use client";

import React from "react";
import { User, Video, Headphones, Cpu, ExternalLink } from "lucide-react";

interface ServiceFolderProps {
    title: string;
    icon: React.ReactNode;
    description?: string;
}

const ServiceFolder: React.FC<ServiceFolderProps> = ({ title, icon, description }) => {
    return (
        <div className="group relative">
            {/* Glass container with shimmer effect */}
            <div className="relative bg-black/50 backdrop-blur-md border border-white/10 rounded-3xl p-8 h-[280px] flex flex-col items-center justify-center transition-all duration-500 hover:bg-black/40 hover:border-white/20 overflow-hidden">

                {/* Shimmer effect on hover */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-300">
                    <div className="shimmer-effect"></div>
                </div>

                {/* Main content with folder and text side by side */}
                <div className="relative z-10 flex items-center gap-6 mb-6">
                    {/* 3D Flip Container */}
                    <div className="flip-container w-48 h-36 flex-shrink-0 group-folder">
                        <div className="flip-card w-full h-full">
                            {/* Front Side - Folder */}
                            <div className="flip-card-front">
                                <div className="relative w-full h-full">
                                    {/* Folder tab (top flap) */}
                                    <div className="absolute -top-3 left-0 w-32 h-10 bg-[#a9a495] rounded-t-2xl"></div>

                                    {/* Main folder body */}
                                    <div className="relative w-full h-full bg-[#a9a495] rounded-3xl shadow-2xl flex items-center justify-center">
                                        {/* Icon on folder */}
                                        <div className="text-white/90">
                                            {icon}
                                        </div>

                                        {/* Folder depth/shadow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                                    </div>
                                </div>
                            </div>

                            {/* Back Side - Redirect Icon */}
                            <div className="flip-card-back">
                                <div className="relative w-full h-full">
                                    {/* Folder tab (top flap) */}
                                    <div className="absolute -top-3 left-0 w-32 h-10 bg-[#a9a495] rounded-t-2xl"></div>

                                    {/* Main folder body */}
                                    <div className="relative w-full h-full bg-[#a9a495] rounded-3xl shadow-2xl flex items-center justify-center">
                                        {/* Redirect/External Link Icon */}
                                        <div className="text-white/90">
                                            <ExternalLink className="w-20 h-20" strokeWidth={1.5} />
                                        </div>

                                        {/* Folder depth/shadow effect */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent rounded-3xl"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Text to the right of folder */}
                    <p className="text-white/60 text-sm uppercase tracking-wider" style={{ fontFamily: "Futura, sans-serif" }}>
                        Projects starting from
                    </p>
                </div>

                {/* Service title */}
                <h3
                    className="text-white/90 text-lg md:text-xl font-medium text-center uppercase tracking-wider relative z-10"
                    style={{ fontFamily: "Futura, sans-serif" }}
                >
                    {title}
                </h3>

            </div>

            {/* Custom CSS for shimmer effect */}
            <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-150%) rotate(15deg);
          }
          100% {
            transform: translateX(250%) rotate(15deg);
          }
        }

        .shimmer-effect {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 60%;
          height: 200%;
          background: linear-gradient(
            90deg,
            rgba(255, 255, 255, 0) 0%,
            rgba(255, 255, 255, 0.25) 50%,
            rgba(255, 255, 255, 0) 100%
          );
          filter: blur(10px);
          animation: shimmer 2.5s ease-in-out infinite;
        }

        /* 3D Flip Animation Styles */
        .flip-container {
          perspective: 1000px;
        }

        .flip-card {
          position: relative;
          transition: transform 0.8s;
          transform-style: preserve-3d;
        }

        .group-folder:hover .flip-card {
          transform: rotateX(180deg);
        }

        .flip-card-front,
        .flip-card-back {
          position: absolute;
          width: 100%;
          height: 100%;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          top: 0;
          left: 0;
        }

        .flip-card-back {
          transform: rotateX(180deg);
        }

        /* Reset any default pseudo-elements that might be causing the boxes */
        .group *,
        .group *::before,
        .group *::after {
          box-sizing: border-box;
        }

        .group *::before,
        .group *::after {
          content: none !important;
        }

        @font-face {
          font-family: "Flight Maybe Maj";
          src: url("/fonts/Flight Maybe Maj.ttf") format("truetype");
          font-weight: normal;
          font-style: normal;
        }

        @font-face {
          font-family: "ZRTW Bokerough";
          src: url("/fonts/ZRTW-BokeRoughPersonalUse.otf") format("opentype");
          font-weight: normal;
          font-style: normal;
        }
      `}</style>
        </div>
    );
};

const ZServices: React.FC = () => {
    const services = [
        {
            title: "Web Design",
            icon: <User className="w-16 h-16 text-white/80" />,
            description: "Custom websites & digital experiences"
        },
        {
            title: "Video Production",
            icon: <Video className="w-16 h-16 text-white/80" />,
            description: "Cinematic content & aerial media"
        },
        {
            title: "Sound Engineering",
            icon: <Headphones className="w-16 h-16 text-white/80" />,
            description: "Audio production & mixing"
        },
        {
            title: "AI Workflows",
            icon: <Cpu className="w-16 h-16 text-white/80" />,
            description: "Custom automation solutions"
        }
    ];

    return (
        <section className="min-h-screen bg-black py-20 px-6 relative">
            {/* Decorative stars - Big, bright, and on top */}
            <img
                src="/star.svg"
                alt="Star"
                className="absolute top-32 left-20 w-24 h-24 opacity-90 animate-pulse z-50 pointer-events-none"
                style={{ animationDuration: '3s' }}
            />
            <img
                src="/star.svg"
                alt="Star"
                className="absolute bottom-40 right-32 w-20 h-20 opacity-85 animate-pulse z-50 pointer-events-none"
                style={{ animationDuration: '4s' }}
            />
            <img
                src="/star.svg"
                alt="Star"
                className="absolute top-[45%] left-1/2 -translate-x-1/2 w-28 h-28 opacity-95 z-50 pointer-events-none"
                style={{
                    animation: 'float 6s ease-in-out infinite'
                }}
            />

            {/* Star2 decorative elements */}
            <img
                src="/star2.svg"
                alt="Star"
                className="absolute top-[60%] left-2 w-22 h-22 opacity-90 z-50 pointer-events-none"
                style={{
                    animation: 'float 7s ease-in-out infinite'
                }}
            />
            <img
                src="/star2.svg"
                alt="Star"
                className="absolute top-1/4 right-28 w-24 h-24 opacity-85 animate-pulse z-50 pointer-events-none"
                style={{ animationDuration: '5s' }}
            />

            {/* Star3 decorative elements */}
            <img
                src="/star3.svg"
                alt="Star"
                className="absolute top-20 right-40 w-20 h-20 opacity-85 animate-pulse z-50 pointer-events-none"
                style={{ animationDuration: '4.5s' }}
            />
            <img
                src="/star3.svg"
                alt="Star"
                className="absolute bottom-32 left-40 w-26 h-26 opacity-90 z-50 pointer-events-none"
                style={{
                    animation: 'float 8s ease-in-out infinite'
                }}
            />
            <img
                src="/star3.svg"
                alt="Star"
                className="absolute top-[55%] right-20 w-18 h-18 opacity-80 animate-pulse z-50 pointer-events-none"
                style={{ animationDuration: '6s' }}
            />

            <div className="max-w-6xl mx-auto relative">
                <style jsx>{`
                    @keyframes float {
                        0%, 100% {
                            transform: translate(-50%, 0px);
                        }
                        50% {
                            transform: translate(-50%, -20px);
                        }
                    }
                `}</style>
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-6xl text-white/90 uppercase tracking-wider mb-4"
                        style={{ fontFamily: "ZRTW Bokerough, sans-serif" }}
                    >
                        Our Services
                    </h2>
                </div>

                {/* 2x2 Grid of service folders */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-4xl mx-auto">
                    {services.map((service, index) => (
                        <ServiceFolder
                            key={index}
                            title={service.title}
                            icon={service.icon}
                            description={service.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ZServices;