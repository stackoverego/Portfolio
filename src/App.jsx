import React, { useState, useRef } from 'react';
import gsap from 'gsap';
import Intro from './components/Intro';
import Hero from './sections/Hero';
import DemoSection from './components/DemoSection';
import TransitionOverlay from './components/TransitionOverlay';
import NavContext from './context/NavContext';

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const overlayRef = useRef(null);

  // Global Navigation Handler
  const handleNavigate = (targetId, rect) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const blackBg = overlay.querySelector('.overlay-backdrop');
    const redBox = overlay.querySelector('.overlay-box');
    const tl = gsap.timeline();

    // Default center fallback if no rect provided
    const initialStats = rect ? {
      top: rect.top,
      left: rect.left,
      width: rect.width,
      height: rect.height
    } : {
      top: '50%',
      left: '50%',
      width: '200px',
      height: '100px',
      xPercent: -50,
      yPercent: -50
    };

    // 1. Prepare Overlay & Red Box at Click Position
    tl.set(overlay, { display: 'block' }) // Remove 'flex' since we use absolute now
      .set(blackBg, { opacity: 0 })
      .set(redBox, {
        opacity: 1,
        position: 'absolute',
        ...initialStats,
        scale: 1
      })

      // 2. Expand Red Box to Cover Screen (Zoom In)
      // We scale it up massively from its position
      .to(redBox, {
        scale: 150, // Massive scale to cover screen from the point
        duration: 1,
        ease: "expo.inOut",
      })

      // 3. Fade in Black (just to be safe/clean background)
      .to(blackBg, { opacity: 1, duration: 0.1 }, "-=0.5")

      // 4. Scroll (Behind the scenes)
      .add(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: 'auto' });
        } else if (targetId === 'home') {
          window.scrollTo(0, 0);
        }
      })

      // 5. Reveal New Section (Fade out overlay)
      .to([redBox, blackBg], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out"
      })

      // Clean up
      .set(overlay, { display: 'none' })
      // Reset redbox properties to avoid interference next time?
      // Not strictly necessary as we .set() them every time, but good practice to clear transforms if needed.
      .set(redBox, { scale: 1, clearProps: "all" });
  };

  return (
    <NavContext.Provider value={{ navigate: handleNavigate }}>
      <div className="app-container">
        <TransitionOverlay ref={overlayRef} />

        {showIntro ? (
          <Intro onComplete={() => setShowIntro(false)} />
        ) : (
          <main>
            <Hero />
            <DemoSection id="work" title="WORK" className="bg-work" />
            <DemoSection id="about" title="ABOUT" className="bg-about" />
            <DemoSection id="contact" title="CONTACT" className="bg-contact" />
          </main>
        )}
      </div>
    </NavContext.Provider>
  );
}

export default App;
