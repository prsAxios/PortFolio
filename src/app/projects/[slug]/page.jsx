"use client";
import React, { useRef } from 'react';
import style from "./style.module.scss";
import data from "../../../data/projects.json";
import { useParams, notFound } from 'next/navigation';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const HorizontalScroll = () => {
    const params = useParams();
    const { slug } = params;
    const project = data.find(p => p.slug === slug);
    const containerRef = useRef();

    if (!project) return notFound();

    const { title, description, image_1, image_2, techStack } = project;



    return (
        <div className={style.parentDiv} ref={containerRef}>
            <div className={style.body}>
                {/* Panel One */}
                <div className={style.panelOne}>
                    <p>{title}</p>
                    <p>{description}</p>
                </div>

                {/* Panel Two */}
                <div className={style.panelTwo}>
                    <div className={style.ImageWrapper}>
                        <Image src={image_1} alt="image_1" fill className={style.image} />
                    </div>
                </div>

                {/* Panel Three */}
                <div className={style.panelThree}>
                    <div className={style.ImageWrapper}>
                        <Image src={image_2} alt="image_2" fill className={style.image} />
                    </div>
                    <div className={style.techStack}>
                        {techStack.map((tech, index) => (
                            <span key={index} className={style.techBadge}>{tech}</span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HorizontalScroll;
