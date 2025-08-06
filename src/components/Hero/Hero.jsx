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
            {/* Left Section - Name and Title */}
            <div className={style.leftSection}>
                <div className={style.nameContainer}>
                    <div className={style.bouncingCircle}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="white" />
                        </svg>
                    </div>
                    <div className={style.bouncingCircle2}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <circle cx="12" cy="12" r="10" fill="white" />
                        </svg>
                    </div>
                    <h1 className={style.name}>
                        Pradeep <br /> Suthar
                    </h1>
                </div>
            </div>

            {/* Center Section - Your Image */}
            <div className={style.centerSection}>
                <div className={style.imageContainer}>
                    <Image
                        src="/images/Hero/right.png" // Replace with your image path
                        alt="Pradeep Suthar"
                        width={400}
                        height={500}
                        className={style.heroImage}
                        priority
                    />

                    {/* Optional: Decorative elements around image */}
                    <div className={style.imageDecoration}>
                        <div className={style.decorCircle}></div>
                        <div className={style.decorLine}></div>
                    </div>
                </div>
            </div>

            {/* Right Section - Description */}
            <div className={style.rightSection}>
                <div className={style.description}>
                    <span>A <b>Software Developer</b></span>
                    <span>focused on performance, UX, and SEO</span>
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
                            background: `linear-gradient(90deg, #000000 0%, #1a1a1a ${index * 12}%, #000000 100%)`
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