"use client";

import React, { useState, useEffect } from "react";
import style from "./project.module.scss";
import Project from "./childProject/Project";
import Button from "../Button";
import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import gsap from "gsap";
import Link from "next/link";
import projectData from "../../data/projects.json";
import { useRouter } from "next/navigation";




const index = () => {
    const router = useRouter();
    const projects = projectData;

    const scaleAnimation = {
        initial: { scale: 0, x: "-50%", y: "-50%" },
        enter: {
            scale: 1,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
        },
        closed: {
            scale: 0,
            x: "-50%",
            y: "-50%",
            transition: { duration: 0.4, ease: [0.32, 0, 0.67, 0] },
        },
    };

    const [modal, setModal] = useState({ active: false, index: 0 });
    const { active, index } = modal;

    const modalContainer = useRef(null);
    const cursorRef = useRef(null);

    const xMoveContainer = useRef(null);
    const yMoveContainer = useRef(null);
    const xMoveCursor = useRef(null);
    const yMoveCursor = useRef(null);

    useEffect(() => {
        // Moving hover container smoothly
        xMoveContainer.current = gsap.quickTo(modalContainer.current, "left", {
            duration: 0.8,
            ease: "power3",
        });
        yMoveContainer.current = gsap.quickTo(modalContainer.current, "top", {
            duration: 0.8,
            ease: "power3",
        });
        // Moving cursor smoothly
        xMoveCursor.current = gsap.quickTo(cursorRef.current, "left", {
            duration: 0.5,
            ease: "power3",
        });
        yMoveCursor.current = gsap.quickTo(cursorRef.current, "top", {
            duration: 0.5,
            ease: "power3",
        });
    }, []);

    const moveItems = (x, y) => {
        xMoveContainer.current(x);
        yMoveContainer.current(y);
        xMoveCursor.current(x);
        yMoveCursor.current(y);
    }

    const manageModal = (active, index, x, y) => {
        moveItems(x, y);
        setModal({ active, index });
    }

    const handleProjectClick = (slug) => {
        console.log("Project clicked:", slug);
        // Close modal first
        setModal({ active: false, index: 0 });
        // Navigate to project page
        router.push(`/projects/${slug}`);
    };

    return (
        <main className={style.projects}
            onMouseMove={(e) => moveItems(e.clientX, e.clientY)}
        >
            <div className={style.body}>
                <p className={style.projectsTitle}>Projects</p>
                {projects.map((project, index) => {
                    return (
                        <Project
                            key={index}
                            index={index}
                            title={project.project_name}
                            description={project.one_liner}
                            slug={project.slug}
                            manageModal={manageModal}
                            onProjectClick={handleProjectClick}
                        />
                    )
                })}
            </div>


            <>
                {/* hover modal container code */}
                <motion.div
                    ref={modalContainer}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                    className={style.modalContainer}
                >
                    <div
                        style={{ top: index * -100 + "%" }}
                        className={style.modalSlider}>
                        {projects.map((project, index) => {
                            const { src, color } = project;
                            return (
                                <div
                                    key={`modal_${index}`}
                                    className={style.modal}
                                    style={{ backgroundColor: color }}
                                >
                                    <Image
                                        src={project.image_1}
                                        width={300}
                                        height={0}
                                        alt={project.project_name}
                                    />
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* cursor code - shows "Click to view" */}
                <motion.div
                    ref={cursorRef}
                    className={style.cursor}
                    variants={scaleAnimation}
                    initial="initial"
                    animate={active ? "enter" : "closed"}
                >
                    <span>Click to view</span>
                </motion.div>
            </>
        </main>
    );
};

export default index;