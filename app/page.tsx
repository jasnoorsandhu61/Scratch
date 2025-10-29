"use client";

import { useEffect, useState } from "react";
import { createGlobalStyle } from "styled-components";
import { motion } from "framer-motion";

import IntroScroll from "@/components/IntroScroll";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import MusicPlayer from "@/components/MusicPlayer";
import Footer from "@/components/Footer";
import Gallery from "@/components/Gallery";
import DigiMag from "@/components/DigiMag";
import Carousel from "@/components/Corousel";
import Card from "@/components/Card";
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

  useEffect(() => {
    // Scroll effect for dock
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
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
          <section id="hero">
            <Hero />
          </section>

          <section id="latest-album">
            <MusicPlayer />
          </section>

          <section id="gallery">
            <Gallery />
          </section>

          <img src="/backgroundimage.webp" alt="Page Tear Image" />

          <section id="services">
            <Services />
          </section>

          <DigiMag />
          <Card />
          <Carousel />
          <Footer />
        </div>

        <NavigationDock className={isScrolled ? "scrolled" : ""} />
      </main>
    </>
  );
}
