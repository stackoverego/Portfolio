import React, { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import Navbar from "../components/Navbar";

const WORD_SEQUENCE = ["PARTH", "FORGE", "MERGE", "WIRED", "BURST"];

const Hero = () => {
  const comp = useRef(null);
  const wordIndexRef = useRef(0);
  const [wordIndex, setWordIndex] = useState(0);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      // Simple Entrance Animation for PARTH
      gsap.from(".stretch, .fly", {
        y: 30,
        opacity: 0,
        duration: 1,
        stagger: 0.1,
        ease: "power2.out",
        onComplete: function () {
          gsap.set(this.targets(), { clearProps: "all" });
        },
      });

      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        const letters = gsap.utils.toArray(".hero-letter");
        const changingLetters = letters.filter((_, index) => index !== 2);
        const letterTimeline = gsap.timeline({ repeat: -1, repeatDelay: 0.24 });

        letterTimeline
          .to(letters, {
            y: -20,
            rotation: -2,
            scale: 1.055,
            duration: 0.34,
            ease: "power2.out",
            stagger: { each: 0.18, from: "start" },
          })
          .to(letters, {
            y: 0,
            rotation: 0,
            scale: 1,
            duration: 0.42,
            ease: "power2.inOut",
            stagger: { each: 0.18, from: "end" },
          })
          .addLabel("wordSwap")
          .to(
            changingLetters,
            {
              scaleY: 0,
              opacity: 0,
              duration: 0.14,
              ease: "power2.in",
              stagger: { each: 0.06, from: "start" },
            },
            "wordSwap",
          )
          .to(
            letters[2],
            {
              rotationY: 360,
              transformPerspective: 650,
              filter: "drop-shadow(0 0 16px rgba(239, 92, 92, 0.85))",
              duration: 0.64,
              ease: "power2.inOut",
            },
            "wordSwap",
          )
          .call(
            () => {
              wordIndexRef.current = (wordIndexRef.current + 1) % WORD_SEQUENCE.length;
              setWordIndex(wordIndexRef.current);
            },
            null,
            "wordSwap+=0.32",
          )
          .to(
            changingLetters,
            {
              scaleY: 1,
              opacity: 1,
              duration: 0.22,
              ease: "back.out(1.5)",
              stagger: { each: 0.06, from: "start" },
            },
            "wordSwap+=0.64",
          )
          .set(
            letters[2],
            {
              rotationY: 0,
              transformPerspective: 0,
              filter: "none",
            },
            "wordSwap+=1.05",
          );
      }

      // Looping Sequence
      const tl = gsap.timeline({
        delay: 1.5,
        repeat: -1,
        repeatDelay: 2,
      });

      // 1. Type Frontend
      tl.from(".char-tl", {
        opacity: 0,
        duration: 0.05,
        stagger: 0.1,
        ease: "none",
      })
        // 2. Type Backend
        .from(
          ".char-br",
          {
            opacity: 0,
            duration: 0.05,
            stagger: 0.1,
            ease: "none",
          },
          "+=0.2",
        )
        // 3. Flicker Developer (Top Right)
        .to(
          ".char-tr",
          {
            opacity: 1,
            duration: 0.02,
            stagger: {
              amount: 0.3,
              from: "random",
            },
            repeat: 5,
            yoyo: true,
            ease: "none",
          },
          "+=0.5",
        )
        .to(".char-tr", {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        })
        // 4. Flicker Designer (Bottom Left)
        .to(
          ".char-bl-flicker",
          {
            opacity: 1,
            duration: 0.02,
            stagger: {
              amount: 0.3,
              from: "random",
            },
            repeat: 5,
            yoyo: true,
            ease: "none",
          },
          "+=0.3",
        )
        .to(".char-bl-flicker", {
          opacity: 1,
          duration: 0.1,
          ease: "none",
        })
        // Pause then fade out for restart
        .to(".char-tl, .char-br, .char-tr, .char-bl-flicker", {
          opacity: 0,
          duration: 0.5,
          delay: 3,
        });
    }, comp);
    return () => ctx.revert();
  }, []);

  const frontendText = "";
  const backendText = "";
  const developerText = "WEB DEVELOPER";
  const designerText = "AI DEVELOPER";

  return (
    <section ref={comp} className="hero-section">
      <Navbar />

      {/* Corner Text Elements */}
      <div className="corner-text corner-text-tl">
        {frontendText.split("").map((char, i) => (
          <span key={i} className="char-tl">
            {char}
          </span>
        ))}
      </div>

      <div className="corner-text corner-text-tr developer-text">
        {developerText.split("").map((char, i) => (
          <span key={i} className="char-tr">
            {char}
          </span>
        ))}
      </div>

      <div className="corner-text corner-text-bl-flicker designer-text">
        {designerText.split("").map((char, i) => (
          <span key={i} className="char-bl-flicker">
            {char}
          </span>
        ))}
      </div>

      <div className="corner-text corner-text-br">
        {backendText.split("").map((char, i) => (
          <span key={i} className={`char-br ${char === " " ? "char-space" : ""}`}>
            {char === " " ? "\u00A0" : char}
          </span>
        ))}
      </div>

      <div className="hero-content">
        <div className="hero-text-container">
          <h1 className="hero-title">
            <span className="stretch">
              {[WORD_SEQUENCE[wordIndex][0], WORD_SEQUENCE[wordIndex][1]].map((letter, index) => (
                <span className="hero-letter" key={index}>
                  {letter}
                </span>
              ))}
            </span>
            <span className="r-bg">
              <span className="hero-letter">
                <span className="fly">R</span>
              </span>
            </span>
            <span className="stretch">
              {[WORD_SEQUENCE[wordIndex][3], WORD_SEQUENCE[wordIndex][4]].map((letter, index) => (
                <span className="hero-letter" key={index}>
                  {letter}
                </span>
              ))}
            </span>
          </h1>
        </div>
      </div>

      <div className="hero-overlay" />
    </section>
  );
};

export default Hero;
