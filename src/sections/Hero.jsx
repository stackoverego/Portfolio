import React, { useLayoutEffect, useRef, useState, useEffect } from 'react';
import gsap from 'gsap';
import Navbar from '../components/Navbar';
import cursorImg from '../assets/cur.png'; // Import the image

const Hero = () => {
    const comp = useRef(null);
    const textContainerRef = useRef(null);
    const cursorRef = useRef(null);
    const [isHovering, setIsHovering] = useState(false);

    useLayoutEffect(() => {
        let ctx = gsap.context(() => {
            const tl = gsap.timeline({ delay: 0.5 });

            // Line 1: Slides Down
            tl.from(".line-1", {
                y: -100,
                opacity: 0,
                duration: 1,
                ease: "power4.out"
            }, "start")

                // Line 2: Slides Right
                .from(".line-2", {
                    x: -100,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out"
                }, "start+=0.2")

                // Line 3: Slides Up
                .from(".line-3", {
                    y: 100,
                    opacity: 0,
                    duration: 1,
                    ease: "power4.out"
                }, "start+=0.4");
        }, comp);

        return () => ctx.revert();
    }, []);

    // Cursor Movement Logic
    useEffect(() => {
        const moveCursor = (e) => {
            // Move the custom cursor to follow the mouse
            gsap.to(cursorRef.current, {
                x: e.clientX,
                y: e.clientY,
                duration: 0.2, // Smooth follow
                ease: "power2.out"
            });
        };

        window.addEventListener('mousemove', moveCursor);
        return () => window.removeEventListener('mousemove', moveCursor);
    }, []);

    return (
        <section ref={comp} className="hero-section">
            <Navbar />

            {/* Custom Cursor Element - Fixed to viewport */}
            <div
                ref={cursorRef}
                className={`hero-cursor ${isHovering ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    backgroundImage: `url(${cursorImg})`,
                }}
            />

            {/* Main Content Area */}
            <div className="hero-content">
                <div
                    className="hero-text-container"
                    style={{ cursor: isHovering ? 'none' : 'auto' }} // Hide default cursor only when hovering
                    onMouseEnter={() => setIsHovering(true)}
                    onMouseLeave={() => setIsHovering(false)}
                >
                    <h1 className="hero-title">
                        <span className="hero-line line-1">Helping our partners</span>
                        <span className="hero-line line-2">build original Brands</span>
                        <span className="hero-line line-3 hero-line-gray">that shine.</span>
                    </h1>
                </div>
            </div>

            <div className="hero-overlay" />
        </section>
    );
};

export default Hero;
