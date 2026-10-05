import React, { useState } from "react";
import Navbar from "../components/Navbar";

const WORD_SEQUENCE = ["PARTH", "FORGE", "MERGE", "WIRED", "BURST"];
const WORD_COLORS = {
  PARTH: "#f0ca68",
  FORGE: "#73c8ff",
  MERGE: "#ff746d",
  WIRED: "#74dbc4",
  BURST: "#ffad72",
};

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [animationPhase, setAnimationPhase] = useState("wave");

  const currentWord = WORD_SEQUENCE[wordIndex];
  const leftLetters = currentWord.slice(0, 2).split("");
  const rightLetters = currentWord.slice(3).split("");
  const advanceWord = () => {
    setWordIndex((prev) => (prev + 1) % WORD_SEQUENCE.length);
    setAnimationPhase("wave");
  };
  const finishWave = () => setAnimationPhase("r-flip");

  const frontendText = "";
  const backendText = "";
  const developerText = "WEB DEVELOPER";
  const designerText = "AI DEVELOPER";

  return (
    <section className={`hero-section ${currentWord === "PARTH" ? "is-parth-focus" : ""}`}>
      <Navbar />

      <div className="corner-text corner-text-tl">
        {frontendText.split("").map((char, i) => (
          <span key={i} className="char-tl">
            {char}
          </span>
        ))}
      </div>

      <div className="corner-text corner-text-tr developer-text">
        <span className="developer-phrase">{developerText}</span>
      </div>

      <div className="corner-text corner-text-bl-flicker designer-text">
        <span className="developer-phrase">{designerText}</span>
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
          <h1 className="hero-title" style={{ "--word-color": WORD_COLORS[currentWord] }} aria-live="polite">
            <span className="word-pair word-left" key={`${currentWord}-left`}>
              {leftLetters.map((letter, index) => (
                <span
                  key={`${currentWord}-left-${index}`}
                  className={`hero-letter word-letter ${animationPhase === "wave" ? `word-flip-in word-delay-${index + 1}` : ""}`}
                >
                  {letter}
                </span>
              ))}
            </span>
            <span className="r-bg" aria-hidden="true">
              <span
                className={`hero-letter word-letter ${animationPhase === "wave" ? "" : "r-flip"}`}
                onAnimationEnd={animationPhase === "wave" ? undefined : advanceWord}
              >
                <span className="fly">R</span>
              </span>
            </span>
            <span className="word-pair word-right" key={`${currentWord}-right`}>
              {rightLetters.map((letter, index) => (
                <span
                  key={`${currentWord}-right-${index}`}
                  className={`hero-letter word-letter ${animationPhase === "wave" ? `word-flip-in word-delay-${index + 3}` : ""}`}
                  onAnimationEnd={
                    animationPhase === "wave" && index === rightLetters.length - 1 ? finishWave : undefined
                  }
                >
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
