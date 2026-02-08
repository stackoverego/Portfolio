import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

const Intro = ({ onComplete }) => {
    const comp = useRef(null);
    const textRef = useRef(null);
    const redBoxRef = useRef(null);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({
                onComplete: () => {
                    if (onComplete) onComplete();
                }
            });

            // Initial State
            gsap.set(textRef.current, { opacity: 0 });
            gsap.set(redBoxRef.current, {
                opacity: 0,
                scale: 1,
                display: 'none'
            });

            // 1. Blink "WELCOME" 2 times (Fast)
            // Appear -> Disappear -> Appear -> Disappear -> Appear (Final state before morph)

            const blinkSpeed = 0.15; // Fast blink

            tl.to(textRef.current, { opacity: 1, duration: blinkSpeed, ease: "power1.inOut" })
                .to(textRef.current, { opacity: 0, duration: blinkSpeed, ease: "power1.inOut" })
                .to(textRef.current, { opacity: 1, duration: blinkSpeed, ease: "power1.inOut" })
                .to(textRef.current, { opacity: 0, duration: blinkSpeed, ease: "power1.inOut" })
                .to(textRef.current, { opacity: 1, duration: blinkSpeed, ease: "power1.inOut" });

            // 2. Morph to Red Rectangle
            // Hide Text, Show Box at same instant
            tl.set(textRef.current, { opacity: 0, display: 'none' })
                .set(redBoxRef.current, {
                    display: 'block',
                    opacity: 1
                });

            // 3. Red Rectangle Zooms Out (Expands to fill/clear screen)
            tl.to(redBoxRef.current, {
                scale: 100, // Massive expansion
                duration: 1.2,
                ease: "power3.in",
                // Optional: fade out as it expands to clear smoothly
                opacity: 0
            });

        }, comp);

        return () => ctx.revert();
    }, [onComplete]);

    return (
        <div ref={comp} className="intro-container">
            {/* Text Element */}
            <h1
                ref={textRef}
                className="intro-text"
            >
                WELCOME
            </h1>

            {/* Rectangle Element (Hidden initially) */}
            <div
                ref={redBoxRef}
                className="intro-box"
            ></div>
        </div>
    );
};

export default Intro;
