"use client";

import { useEffect, useState, useRef } from "react";
import { createGlobalStyle } from "styled-components";
import Lenis from "@studio-freight/lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import IntroScroll from "@/components/IntroScroll";
import ZServices from "@/components/zServices";
import Footer from "@/components/Footer";
import DigiMag from "@/components/DigiMag";
import Carousel from "@/components/Corousel";
import { NavigationDock } from "@/components/NavDoc";

// Global Styles
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    background-color: black;
    color: white;
    overflow-x: hidden;
    min-height: 100vh;
  }
`;

export default function Home() {
  const [isScrolled, setIsScrolled] = useState(false);
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize Lenis smooth scroll with optimized settings
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => 1 - Math.pow(2, -10 * t),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1.5,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Connect Lenis with GSAP ScrollTrigger for synchronized timing
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    // Scroll effect for dock
    lenis.on("scroll", ({ scroll }: { scroll: number }) => {
      setIsScrolled(scroll > 50);
    });

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000);
      });
    };
  }, []);

  return (
    <>
      <GlobalStyle />
      <main className="bg-black text-white">
        {/* Intro Scroll as first section */}
        <section id="intro-scroll" className="relative">
          <IntroScroll />
        </section>

        {/* Rest of the homepage content continues seamlessly */}
        <div className="relative z-0">
          <section id="services">
            <ZServices />
          </section>

          <DigiMag />
          <Carousel />
          <Footer />
        </div>
      </main>

      {/* Navigation Dock - Fixed overlay layer */}
      <NavigationDock className={isScrolled ? "scrolled" : ""} />
    </>
  );
}
