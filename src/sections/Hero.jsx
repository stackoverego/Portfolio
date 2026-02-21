import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import cursorImg from '../assets/cur.png';
import rGif from '../assets/tryyygif1.gif';

const Hero = () => {
    const comp = useRef(null);
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

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
                }
            });

            // Looping Sequence
            const tl = gsap.timeline({
                delay: 1.5,
                repeat: -1,
                repeatDelay: 2
            });

            // 1. Type Frontend
            tl.from(".char-tl", {
                opacity: 0,
                duration: 0.05,
                stagger: 0.1,
                ease: "none"
            })
                // 2. Type Backend
                .from(".char-br", {
                    opacity: 0,
                    duration: 0.05,
                    stagger: 0.1,
                    ease: "none"
                }, "+=0.2")
                // 3. Flicker Developer (Top Right)
                .to(".char-tr", {
                    opacity: 1,
                    duration: 0.02,
                    stagger: {
                        amount: 0.3,
                        from: "random"
                    },
                    repeat: 5,
                    yoyo: true,
                    ease: "none"
                }, "+=0.5")
                .to(".char-tr", {
                    opacity: 1,
                    duration: 0.1,
                    ease: "none"
                })
                // 4. Flicker Designer (Bottom Left)
                .to(".char-bl-flicker", {
                    opacity: 1,
                    duration: 0.02,
                    stagger: {
                        amount: 0.3,
                        from: "random"
                    },
                    repeat: 5,
                    yoyo: true,
                    ease: "none"
                }, "+=0.3")
                .to(".char-bl-flicker", {
                    opacity: 1,
                    duration: 0.1,
                    ease: "none"
                })
                // Pause then fade out for restart
                .to(".char-tl, .char-br, .char-tr, .char-bl-flicker", {
                    opacity: 0,
                    duration: 0.5,
                    delay: 3
                });
        }, comp);
        return () => ctx.revert();
    }, []);

    // Cursor Movement Logic
    useEffect(() => {
        const moveCursor = (e) => {
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2,
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    const frontendText = "FRONTEND";
    const backendText = "BACKEND";
    const developerText = "DEVELOPER";
    const designerText = "DESIGNER";

    return (
        <section ref={comp} className="hero-section">
            <Navbar />

            {/* Corner Text Elements */}
            <div className="corner-text corner-text-tl">
                {frontendText.split("").map((char, i) => (
                    <span key={i} className="char-tl">{char}</span>
                ))}
            </div>

            <div className="corner-text corner-text-tr developer-text">
                {developerText.split("").map((char, i) => (
                    <span key={i} className="char-tr">{char}</span>
                ))}
            </div>

            <div className="corner-text corner-text-bl-flicker designer-text">
                {designerText.split("").map((char, i) => (
                    <span key={i} className="char-bl-flicker">{char}</span>
                ))}
            </div>

            <div className="corner-text corner-text-br">
                {backendText.split("").map((char, i) => (
                    <span key={i} className={`char-br ${char === " " ? "char-space" : ""}`}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </div>

            <div
                ref={cursorRef}
                className={`hero-cursor ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${cursorImg})`,
                }}
            />

            <div className="hero-content">
                <div
                    className="hero-text-container"
                    style={{ cursor: isHovering ? 'none' : 'auto' }}
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <h1 className="hero-title">
                        <span className="stretch">PA</span>
                        <span className="r-bg">
                            <span className="fly">R</span>
                        </span>
                        <span className="stretch">TH</span>
                    </h1>
                </div>
            </div>

            <div className="hero-overlay" />
        </section>
    );
};

export default Hero;
