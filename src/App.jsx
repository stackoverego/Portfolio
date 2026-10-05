import React, { useState, useRef } from "react";
import gsap from "gsap";
import Intro from "./components/Intro";
import Hero from "./sections/Hero";
import DemoSection from "./components/DemoSection";
import AboutProfile from "./components/AboutProfile";
import ContactForm from "./components/ContactForm";
import TransitionOverlay from "./components/TransitionOverlay";
import NavContext from "./context/NavContext";

function App() {
  const [showIntro, setShowIntro] = useState(true);
  const overlayRef = useRef(null);

  // Global Navigation Handler
  const handleNavigate = (targetId, rect) => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const blackBg = overlay.querySelector(".overlay-backdrop");
    const redBox = overlay.querySelector(".overlay-box");
    const tl = gsap.timeline();
    const scrollBehavior = window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth";
    const initialStats = rect
      ? {
          top: rect.top,
          left: rect.left,
          width: rect.width,
          height: rect.height,
        }
      : {
          top: "50%",
          left: "50%",
          width: "200px",
          height: "100px",
          xPercent: -50,
          yPercent: -50,
        };

    tl.set(overlay, { display: "block" })
      .set(blackBg, { opacity: 0 })
      .set(redBox, {
        opacity: 1,
        position: "absolute",
        ...initialStats,
        scale: 1,
      })
      .to(redBox, {
        scale: 150,
        duration: 1,
        ease: "expo.inOut",
      })
      .to(blackBg, { opacity: 1, duration: 0.1 }, "-=0.5")
      .add(() => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: scrollBehavior });
        } else if (targetId === "home") {
          window.scrollTo({ top: 0, behavior: scrollBehavior });
        }
      })
      .to([redBox, blackBg], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.out",
      })
      .set(overlay, { display: "none" })
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
            <AboutProfile />
            <ContactForm />
          </main>
        )}
      </div>
    </NavContext.Provider>
  );
}

export default App;
