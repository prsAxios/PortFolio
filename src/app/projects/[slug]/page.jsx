"use client";
import React, { useEffect, useRef } from 'react';
import style from "./style.module.scss";
import data from "../../../data/projects.json";
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';


import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const HorizontalScroll = () => {
    const params = useParams();
    const { slug } = params;
    const project = data.find(p => p.slug === slug);
    const containerRef = useRef();

    if (!project) return notFound();

    const { title, description, image_1, image_2, techStack } = project;

    const textRef = useRef(null);

    useEffect(() => {
        gsap.to(textRef.current, {
            duration: 2,
            text: {
                value: `${title}`,
                scrambleText: {
                    chars: "01",
                    revealDelay: 0.1,
                    speed: 0.1,
                },
            },
            ease: "power2.out",

        });
    }, []);



    return (
        <div className={style.parentDiv} ref={containerRef}>
            <div className={style.body}>
                {/* Hero */}
                <section className={style.Hero}>
                    <p ref={textRef}>

                    </p>
                </section>
                {/* Image*/}
                <section className={style.Image}>

                    <img src={image_1} alt={project.title} />

                </section>

                {/* Tech stack and description */}
                <section className={style.TechStack}>
                    <div className={style.description}>
                        <h2>About the Project</h2>
                        <p>{description}</p>
                    </div>

                    <div className={style.techStack}>
                        <h2>Tech Stack</h2>
                        <ul>
                            {techStack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>
                </section>

                {/* Key features */}
                <section className={style.KeyFeatures}>

                </section>



                {/* Key features */}
                <section className={style.KeyFeatures}>

                </section>

                {/* Links */}
                <section className={style.Links}>
                    {/* <button>Live</button>
                    <button>GitHub</button> */}
                </section>
            </div>
        </div>
    );
};

export default HorizontalScroll;
