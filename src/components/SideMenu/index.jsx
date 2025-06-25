"use client";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import style from "./style.module.scss";
import { FiMenu, FiX } from "react-icons/fi";

const Links = ["About", "Projects", "Skills", "Contact"];

export default function SideMenu() {
    const [open, setOpen] = useState(true);

    return (
        <>
            <button onClick={() => setOpen(true)} className={style.hamburger}>
                <FiMenu />
            </button>

            <AnimatePresence>
                {open && (
                    <>
                        <motion.div
                            className={style.sidebar}
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "spring", stiffness: 100 }}
                        >
                            <div className={style.body}>
                                <nav className={style.nav}>
                                    {Links.map((link, i) => (
                                        <motion.a
                                            key={i}
                                            href={`#${link.toLowerCase()}`}
                                            onClick={(e) => {
                                                e.preventDefault();
                                                setOpen(false);
                                                const element = document.getElementById(link.toLowerCase());
                                                if (element) {
                                                    element.scrollIntoView({ behavior: 'smooth' });
                                                }
                                            }}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: 0.1 * i }}
                                        >
                                            {link}
                                        </motion.a>
                                    ))}
                                </nav>

                                <div className={style.buttonDiv}>
                                    <button onClick={() => setOpen(false)} className={style.closeBtn}>
                                        <FiX />
                                    </button>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className={style.backdrop}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setOpen(false)}
                        />
                    </>
                )}
            </AnimatePresence>
        </>
    );
}