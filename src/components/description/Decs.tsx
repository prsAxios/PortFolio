"use client";
import styles from "./decs.module.scss";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { slideUp } from "./anime";
import Button from "../Button";
import { useRouter } from "next/navigation";
import { BiDownArrow } from "react-icons/bi";

const Decs = () => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const isInView = useInView(containerRef);
    const router = useRouter();

    const param =
        "Hi, I’m Pradeep — an MCA student who enjoys building full-stack applications that are fast, reliable, and easy to maintain. I work across frontend interfaces, backend logic, SQL databases, and also care about SEO and performance to create digital solutions that are both functional and discoverable.";

    return (
        <div ref={containerRef} className={styles.dec}>
            <div className={styles.body}>
                <p>
                    {param.split(" ").map((word, index) => (
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
                    ))}
                </p>

                <div data-scroll data-scroll-speed={0.1} className={styles.buttonWrap}>

                    {/* 👇 Hint Text Below the Button */}


                    <Button onClick={() => router.push("/about")} className={styles.button}>

                        Click to know more

                    </Button>


                </div>

                <div className={styles.scroll}>Scroll to projects
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 1, ease: "easeOut", repeat: Infinity, repeatType: "reverse" }}
                        className={styles.hint}
                    >
                        <span><BiDownArrow size={50} /></span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Decs;
