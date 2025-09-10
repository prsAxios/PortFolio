"use client";

import style from "./hero.module.scss";
import { useEffect, useRef } from "react";
import Image from "next/image";

const Hero = () => {
    const boxRefs = useRef([]);

    useEffect(() => {
        // Enhanced animation with customizable parameters
        const animateBoxes = () => {
            boxRefs.current.forEach((box, index) => {
                if (!box) return;

                // Staggered animation delay
                setTimeout(() => {
                    // Move up animation
                    box.style.transform = 'translateY(-100%)';
                    box.style.opacity = '0.8';

                    // Reset after animation with different timing for each box
                    setTimeout(() => {
                        box.style.transform = 'translateY(0)';
                        box.style.opacity = '1';
                    }, 600 + (index * 50)); // Varied reset timing
                }, index * 120); // Increased stagger delay
            });
        };

        // Start animation loop with longer interval
        const interval = setInterval(animateBoxes, 4000);

        // Cleanup
        return () => {
            clearInterval(interval);
        };
    }, []);

    const setBoxRef = (el, index) => {
        if (el) {
            boxRefs.current[index] = el;
        }
    };

    return (
        <main className={style.mainHero}>
            <div className={style.centeredContent}>
                <div className={style.nameContainer}>
                    <h1 className={style.name}>
                        Pradeep Suthar
                    </h1>
                    <div className={style.description}>
                        <span>A <b>Software Developer</b></span>
                        <span>focused on performance, UX, and SEO</span>
                    </div>
                </div>
            </div>

            {/* Animated Black Lines */}
            <div className={style.animatedLines}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => setBoxRef(el, index)}
                        className={style.animatedLine}
                        style={{
                            height: `${(index + 1) * 8}px`,
                            //I want white lines
                            background: `linear-gradient(90deg, #ffffff 0%, #ffffff ${index * 12}%, #ffffff 100%)`
                        }}
                    />
                ))}
            </div>

            {/* Optional: Additional decorative lines */}
            <div className={style.decorativeLines}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={`top-${index}`}
                        className={style.decorativeLine}
                        style={{
                            top: `${20 + (index * 30)}%`,
                            animationDelay: `${index * 0.5}s`
                        }}
                    />
                ))}
            </div>
        </main>
    )
}

export default Hero;