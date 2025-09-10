"use client";
import React, { useEffect, useRef } from 'react';
import style from "./style.module.scss";
import data from "../../../data/projects.json";
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { TextPlugin } from 'gsap/TextPlugin';
import Link from "next/link";

import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Github } from 'lucide-react';
import { SiVercel } from 'react-icons/si';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(TextPlugin);

const HorizontalScroll = () => {
    const params = useParams();
    const { slug } = params;
    const project = data.find(p => p.slug === slug);
    const containerRef = useRef();

    if (!project) return notFound();

    const { id, project_name, image_1, image_2, image_3, tech_stack, solution, responsibilities, highlight_features, tools_used, outcome, links } = project;

    const textRef = useRef(null);

    useEffect(() => {
        gsap.to(textRef.current, {
            duration: 2,
            text: {
                value: `${project_name}`,
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

                    <img src={image_1} alt={project_name} />

                </section>

                {/* Tech stack and description */}
                <section className={style.TechStack}>

                    <div className={style.description}>
                        <h2>About the Project</h2>
                        <p>{solution}</p>
                    </div>

                    <div className={style.techStack}>
                        <h2>Tech Stack</h2>
                        <ul>
                            {tech_stack.map((tech, index) => (
                                <li key={index}>{tech}</li>
                            ))}
                        </ul>
                    </div>


                    <div className={style.KeyFeatures}>
                        <h2>Key Features</h2>
                        {highlight_features.map((feat, i) => (
                            <p key={i}>{feat}</p>
                        ))}
                    </div>

                    <div className={style.Learned}>
                        <h2>Outcome</h2>
                        {outcome.map((line, i) => (
                            <p key={i}>{line}</p>
                        ))}

                    </div>


                    {responsibilities && (
                        <div className={style.responsibilities}>
                            <h2>Responsibilities</h2>
                            {responsibilities.map((resp, i) => (
                                <p key={i}>{resp}</p>
                            ))}
                        </div>
                    )}


                    <div className={style.toolsUsed}>
                        <h2>Tools used</h2>
                        {Object.entries(tools_used).map(([category, tools], i) => (
                            <div key={i} className={style.tool}>
                                <h3>{category}</h3>
                                <ul>{tools.map((tool, j) => (
                                    <li key={j}>{tool}</li>
                                ))}</ul>
                            </div>
                        ))}
                    </div>
                </section>

                {/* Links */}
                <section className={style.Links}>
                    <div className={style.container}>

                        {/* Github */}
                        <div className={style.card}>
                            <img src={image_2} alt={"Github screenshot"} />
                            <a href={links.live_demo} target="_blank" rel="noopener noreferrer"><SiVercel />View Live</a>

                        </div>


                        {/* Live */}
                        <div className={style.card}>
                            <img src={image_3} alt={"Live screenshot"} />
                            <a href={links.github} target="_blank" rel="noopener noreferrer"><Github />View on Github</a>
                        </div>

                    </div>
                </section>
            </div >
        </div >
    );
};

export default HorizontalScroll;
