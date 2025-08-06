"use client";
import Image from "next/image";
import Styles from "./slider.module.scss";
import { useRef } from "react";
import { motion, useScroll, useTransform } from 'framer-motion';

const SliderCert_ = () => {

    const slider_Cont_1 = [
        {
            color: "#0074D9", // Bright blue
            src: "/images/certificate/restAPI.png"
        },
        {
            color: "#FFD700", // Gold yellow
            src: "/images/certificate/javascript.png"
        },
        {
            color: "#FFA500", // Orange
            src: "/images/certificate/skyscanner.png"
        },
        {
            color: "#FFFFFF", // White
            src: "/images/certificate/walmart.png"
        }
    ]

    const slider_Cont_2 = [
        {
            src: "/images/award/vivancerb.jpg"
        },
        {
            src: "/images/award/decodex.jpg"
        },
        {
            src: "/images/award/flipkart.jpg"
        },
        {
            src: "/images/award/acehack.png"
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
                            style={{ backgroundColor: "transparent", border: "solid white 1px" }}
                        >
                            <div className={Styles.imageContainer}>
                                <Image
                                    alt="ProjectImages"
                                    fill={true}
                                    src={item.src}
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
                            style={{ backgroundColor: "transparent", border: "solid white 1px" }}
                        >
                            <div className={Styles.imageContainer}>
                                <Image
                                    alt="ProjectImages"
                                    fill={true}
                                    src={item.src}
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