"use client";
import Image from "next/image";
import Styles from "./slider.module.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const SliderCert_ = () => {

    const slider_Cont_1 = [
        {
            color: "#0074D9", // Bright blue
            src: "c1.png"
        },
        {
            color: "#FFD700", // Gold yellow
            src: "c2.png"
        },
        {
            color: "#FFA500", // Orange
            src: "img1.png"
        },
        {
            color: "#FFFFFF", // White
            src: "img2.png"
        }
    ]

    const slider_Cont_2 = [
        {
            color: "#39FF14", // Neon green
            src: "img3.png"
        },
        {
            color: "#FF69B4", // Hot pink
            src: "img4.png"
        },
        {
            color: "#FF4500", // Orange-red
            src: "img5.png"
        },
        {
            color: "#4169E1", // Royal blue
            src: "img6.png"
        }
    ]

    const container = useRef(null);

    const { scrollYProgress } = useScroll({
        target: container,
        offset: ["start end", "end start"]
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
    const height = useTransform(scrollYProgress, [0, 1], [200, 0]);

    return (
        <div ref={container} className={Styles.sliding_Container}>
            <motion.div style={{ x: x1 }} className={Styles.slider}>
                {slider_Cont_1.map((item, index) => {
                    return (
                        <div

                            className={Styles.item}
                            key={`sli_${index}`}
                            style={{ backgroundColor: item.color }}
                        >
                            <div className={Styles.imageContainer}>
                                <Image
                                    alt="ProjectImages"
                                    fill={true}
                                    src={`/images/${item.src}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            <motion.div style={{ x: x2 }} className={Styles.slider}>
                {slider_Cont_2.map((item, index) => {
                    return (
                        <div
                            className={Styles.item}
                            key={`sli_${index}`}
                            style={{ backgroundColor: item.color }}
                        >
                            <div className={Styles.imageContainer}>
                                <Image
                                    alt="ProjectImages"
                                    fill={true}
                                    src={`/images/${item.src}`}
                                />
                            </div>
                        </div>
                    );
                })}
            </motion.div>
            {/* 
            <motion.div style={{ height }} className={Styles.circleContainer}>
                <div className={Styles.circle}></div>
            </motion.div> */}
        </div>
    );
}

export default SliderCert_;