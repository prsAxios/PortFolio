"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const TextGlossEffect = ({ text }) => {
    const textRef = useRef(null);

    useEffect(() => {
        const letters = textRef.current.querySelectorAll("span");

        gsap.set(letters, { opacity: 0, y: 20 });
        gsap.to(letters, {
            opacity: 1,
            y: 0,
            stagger: 0.05,
            ease: "power3.out",
            duration: 0.6,
        });
    }, []);

    return (
        <div className="gloss-wrapper">
            <h1 className="glossy-text" ref={textRef}>
                {text.split("").map((char, i) => (
                    <span key={i} style={{ display: "inline-block" }}>
                        {char === " " ? "\u00A0" : char}
                    </span>
                ))}
            </h1>
        </div>
    );
};

export default TextGlossEffect;
