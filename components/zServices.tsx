"use client";

import React from "react";
import { User, Video, Headphones, Cpu } from "lucide-react";

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

                {/* Folder icon container */}
                <div className="relative z-10 mb-6">
                    <div className="w-20 h-20 bg-gradient-to-br from-white/20 to-white/10 rounded-2xl border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:scale-105 transition-transform duration-300 overflow-hidden">
                        <div className="flex items-center justify-center w-full h-full">
                            {icon}
                        </div>
                    </div>
                </div>

                {/* Service title */}
                <h3
                    className="text-white/90 text-lg md:text-xl font-medium text-center uppercase tracking-wider relative z-10"
                    style={{ fontFamily: "Flight Maybe Maj, sans-serif" }}
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
      `}</style>
        </div>
    );
};

const ZServices: React.FC = () => {
    const services = [
        {
            title: "Web Design",
            icon: <User className="w-8 h-8 text-white/80" />,
            description: "Custom websites & digital experiences"
        },
        {
            title: "Video Production",
            icon: <Video className="w-8 h-8 text-white/80" />,
            description: "Cinematic content & aerial media"
        },
        {
            title: "Sound Engineering",
            icon: <Headphones className="w-8 h-8 text-white/80" />,
            description: "Audio production & mixing"
        },
        {
            title: "AI Workflows",
            icon: <Cpu className="w-8 h-8 text-white/80" />,
            description: "Custom automation solutions"
        }
    ];

    return (
        <section className="min-h-screen bg-black py-20 px-6">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div className="text-center mb-16">
                    <h2
                        className="text-4xl md:text-6xl text-white/90 uppercase tracking-wider mb-4"
                        style={{ fontFamily: "Flight Maybe Maj, sans-serif" }}
                    >
                        Our Services
                    </h2>
                    <p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto">
                        Comprehensive digital solutions crafted with precision and creativity
                    </p>
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