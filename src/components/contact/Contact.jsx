"use client";

import styles from "./contact.module.scss";
import Image from 'next/image';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Link from 'next/link';


export default function Contact() {

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
                            <p className={styles.link}><Link style={{ textDecoration: "none", color: "black" }} href="https://pradeepsuthar.vercel.app/">@PradeepSuthar</Link></p>

                        </span>

                    </div>

                </div>
            </div>
        </motion.div>
    )
}