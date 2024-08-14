// SplashScreen.jsx
import React, { useEffect } from 'react';
import { gsap } from 'gsap';
import './SplashScreen.css';

const SplashScreen = ({ onComplete }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(".splash-screen", {
          duration: 1,
          opacity: 0,
          onComplete: () => {
            if (onComplete) onComplete();
          }
        });
      }
    });

    tl.to(".letter", {
      duration: 1,
      opacity: 1,
      y: -50,
      stagger: 0.1,
      ease: "bounce.out"
    });
  }, [onComplete]);

  return (
    <div className="splash-screen">
      <div className="logo">
        <span className="letter">N</span>
        <span className="letter">o</span>
        <span className="letter">v</span>
        <span className="letter">a</span>
        <span className="letter">x</span>
        <span className="letter">a</span>
      </div>
    </div>
  );
};

export default SplashScreen;
