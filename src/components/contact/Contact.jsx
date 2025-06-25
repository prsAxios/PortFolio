"use client";

import styles from "./contact.module.scss";
import Image from 'next/image';
// import Rounded from '../../common/roundedbutton';
import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
// import Magnetic from '../../common/magnetic';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";


export default function Contact() {

    const icons = [
        {
            icon: <FaGithub />,
            link: "",
            color: "#ffffff",
        },
        {
            icon: <FaLinkedin />,
            link: "https://linkedin.com/in/yourname",
            color: "#ffffff",
        },
        {
            icon: <FaEnvelope />,
            link: "mailto:your@email.com",
            color: "#ffffff",
        },

    ];


    return (
        <motion.div className={styles.contact}>
            <div className={styles.body}>
                <div className={styles.title}>
                    <span>
                        <div className={styles.imageContainer}>
                            <Image
                                fill={true}
                                alt={"image"}
                                src={`/contact.svg`}
                            />
                        </div>
                        <h2>Contact</h2>
                    </span>
                    <motion.div className={styles.buttonContainer}>
                        {/* <Rounded backgroundColor={"#334BD3"} className={styles.button}>
                            <p>Get in touch</p>
                        </Rounded> */}
                    </motion.div>

                </div>
                <div className={styles.nav}>

                    {/* <Rounded>
                        <p>info@dennissnellenberg.com</p>
                    </Rounded> */}
                    {/* <Rounded>
                        <p>+31 6 27 84 74 30</p>
                    </Rounded> */}
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
                            <h3>Version</h3>
                            <p>2022 © Edition</p>
                        </span>
                        <span>
                            <h3>Version</h3>
                            <p>11:49 PM GMT+2</p>
                        </span>
                    </div>
                    {/* <div>
                        <span>
                            <h3>socials</h3>
                            <Magnetic>
                                <p>Awwwards</p>
                            </Magnetic>
                        </span>
                        <Magnetic>
                            <p>Instagram</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Dribbble</p>
                        </Magnetic>
                        <Magnetic>
                            <p>Linkedin</p>
                        </Magnetic>
                    </div> */}
                    <div>
                        <span>
                            <h3>socials</h3>

                            <p>Awwwards</p>

                        </span>

                        <p>Instagram</p>

                        <p>Dribbble</p>


                        <p>Linkedin</p>

                    </div>
                </div>
            </div>
        </motion.div>
    )
}