'use client';

import React from 'react';
import styled, { createGlobalStyle, keyframes } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'FlightMaybeMaj';
    src: url('/fonts/Flight mAybe Maj.ttf') format('truetype');
  }

  @font-face {
    font-family: 'ProximaNovaBlack';
    src: url('/fonts/proximanova_black.ttf') format('truetype');
  }

  @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700;900&display=swap');
`;

const fadeIn = keyframes`
  from { opacity: 0; }
  to { opacity: 1; }
`;

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 80px 20px;
  color: white;
  font-family: 'ProximaNovaBlack', sans-serif;
`;

const FixedImage = styled.img`
  position: fixed;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: auto;
  z-index: 0;
  pointer-events: none;
  user-select: none;
`;

const HeadingContainer = styled.div`
  position: absolute;
  top: 20px;
  right: 20px;
  text-align: right;
  font-family: 'FlightMaybeMaj', sans-serif;
  z-index: 2;

  @media (max-width: 768px) {
    top: 10px;
    right: 10px;
  }
`;

const CreativeText = styled.div`
  font-size: 3rem;
  font-weight: bold;
  line-height: 1.2;
  animation: ${fadeIn} 1s ease-out forwards;
  margin-right: 40px; /* Reduced from 120px to bring it back right */

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-right: 30px;
  }
`;

const CurvedStudioSVG = styled.svg`
  width: 360px;
  height: 140px;
  margin-top: 10px;
  transform: rotate(-15deg);
  margin-left: 40px; /* Slightly reduced from 60px */

  text {
    fill: white;
    font-size: 3rem;
    font-weight: bold;
    font-family: 'FlightMaybeMaj', sans-serif;
    animation: ${fadeIn} 1s ease-out forwards;
  }

  @media (max-width: 768px) {
    width: 220px;
    height: 100px;
    margin-left: 20px;
    transform: rotate(-12deg);

    text {
      font-size: 1.8rem;
    }
  }
`;

const WebDev: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Container>
        <FixedImage src="/webdev_hero.png" alt="Web Development Hero" />

        <HeadingContainer>
          <CreativeText>CREATIVE</CreativeText>
          <CurvedStudioSVG viewBox="0 0 90 200">
            <defs>
              <path
                id="studioSmilePath"
                d="M20,30 Q200,140 380,30"
                fill="none"
              />
            </defs>
            <text>
              <textPath href="#studioSmilePath" startOffset="50%" textAnchor="middle">
                STUDIO
              </textPath>
            </text>
          </CurvedStudioSVG>
        </HeadingContainer>
      </Container>
    </>
  );
};

export default WebDev;