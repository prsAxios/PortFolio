"use client";
import styles from "./decs.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./anime";
import Button from "../Button";
import { useRouter } from "next/navigation";



const Decs = () => {

    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef);
    const router = useRouter();


    const param = "Helping brands to stand out in the digital era. Together we will set the new status quo. No nonsense, always on cutting edge.";

    return (
        <div ref={containerRef} className={styles.dec}>
            <div className={styles.body}>
                <p>
                    {param.split(" ").map((word, index) => {
                        return (
                            <span key={index} className={styles.word}>
                                <motion.span
                                    variants={slideUp}
                                    initial="initial"
                                    animate={isInView ? "open" : "closed"}
                                    custom={index}
                                >
                                    {word}
                                </motion.span>
                            </span>
                        )
                    })}
                </p>
                <motion.p
                    variants={slideUp}
                    initial="initial"
                    animate={isInView ? "open" : "closed"}
                >
                    The combination of my passion for desgine, code & interaction position
                    me in a unique place.

                </motion.p>

                <div data-scroll data-scroll-speed={0.1}>
                    <Button
                        onClick={() => router.push("/about")}
                    >
                        <p style={{ color: "black", backgroundColor: "white", padding: "6px", borderRadius: 10, cursor: "pointer" }}>About Me</p>
                    </Button>
                </div>
            </div>
        </div >
    )
}

export default Decs;
