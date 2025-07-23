"use client";
import { useLayoutEffect, useRef, useState } from "react";
import style from "./header.module.scss";
import Navbar from "../Navbar/Navbar";
import { AnimatePresence } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Download } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [isActive, setIsActive] = useState(false);
    const targertBurger = useRef(null);
    useLayoutEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        gsap.to(targertBurger.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                onLeave: () => {
                    gsap.to(targertBurger.current, {
                        scale: 1,
                        duration: 0.25,
                        ease: "power1.out",
                    });
                },
                onEnterBack: () => {
                    gsap.to(targertBurger.current, {
                        scale: 0,
                        duration: 0.25,
                        ease: "power1.out",
                    });
                },
            },
        });
    }, []);

    const [isMenu, setMenu] = useState(false);

    const toggleMenu = () => {
        setMenu((prev) => !prev);
    };


    return (
        <>

            <div className={style.header}>
                <div className={style.logo}>
                    <a href="/pradeep_suthar_resume.pdf" download target="_blank" rel="noopener noreferrer">
                        <p className={style.download}><Download /></p>
                    </a>
                    <div className={style.name}>
                        <p className={style.codeby}>Download</p>
                        <p className={style.pradeep}>Resume</p>
                    </div>
                </div>

                <div className={style.navContainer}>
                    <div className={`${style.menuName}`} onClick={toggleMenu}>
                        <p>Menu</p>
                        <div className={style.MenuEndicator}></div>
                    </div>

                    <AnimatePresence mode="exit">
                        {isMenu && <Navbar toggleMenu={toggleMenu} />}
                    </AnimatePresence>

                    <div className={`${style.nav} ${isMenu ? style.shownav : ""}`}>


                        <Link href="/about" className={style.el}>
                            <p>About</p>
                            <div className={style.endicator}></div>
                        </Link>

                        <Link href="/contact" className={style.el}>
                            <p>Contact</p>
                            <div className={style.endicator}></div>
                        </Link>

                    </div>
                </div>

                <div ref={targertBurger} className={style.headerButtonContainer}>
                    <button
                        onClick={() => {
                            setIsActive(!isActive);
                        }}
                        className={style.button}
                    >
                        <div
                            className={`${style.burger} ${isActive ? style.burgerActive : ""
                                }`}
                        ></div>
                    </button>
                </div>

                <AnimatePresence mode="exit">{isActive && <Navbar />}</AnimatePresence>
            </div>


        </>
    );
};

export default Header;
