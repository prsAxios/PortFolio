"use client";

import styles from "./contact.module.scss";
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';


export default function Contact() {

    const boxRefs = useRef([]);

    const icons = [
        {
            icon: <FaGithub />,
            linkName: "Github",
            link: "",
            color: "#ffffff",
        },
        {
            icon: <FaLinkedin />,
            linkName: "Linkedin",
            link: "https://linkedin.com/in/yourname",
            color: "#ffffff",
        },
    ];

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
        <motion.div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <h2>Contact</h2>
                    </span>
                </div>

                <div className={styles.icons}>
                    {icons.map((item, index) => (
                        <a
                            key={index}
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <div
                                data-color={item.color}
                                className={styles.icon}
                            >
                                {item.icon}
                            </div>
                        </a>
                    ))}
                    <p>antpradeep.8@gmail.com</p>
                    <p>+91-8766528848</p>
                </div>

                <div className={styles.info}>
                    <div>
                        <span>
                            <h3>Created by</h3>
                            <p className={styles.link}>
                                <Link style={{ textDecoration: "none", color: "white", zIndex: "100" }} href="https://pradeepsuthar.vercel.app/">
                                    @PradeepSuthar
                                </Link>
                            </p>
                        </span>
                    </div>
                </div>
            </div>

            {/* Animated Black Lines */}
            <div className={styles.animatedLines}>
                {Array.from({ length: 8 }).map((_, index) => (
                    <div
                        key={index}
                        ref={(el) => setBoxRef(el, index)}
                        className={styles.animatedLine}
                        style={{
                            height: `${(index + 1) * 6}px`,
                            background: `linear-gradient(90deg, #000000 0%, #1a1a1a ${index * 12}%, #000000 100%)`
                        }}
                    />
                ))}
            </div>

            {/* Optional: Additional decorative lines */}
            <div className={styles.decorativeLines}>
                {Array.from({ length: 3 }).map((_, index) => (
                    <div
                        key={`top-${index}`}
                        className={styles.decorativeLine}
                        style={{
                            top: `${20 + (index * 30)}%`,
                            animationDelay: `${index * 0.5}s`
                        }}
                    />
                ))}
            </div>
        </motion.div>
    )
}