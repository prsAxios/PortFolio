"use client";

import style from "./hero.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import GlossyText from "../glossyText";

const Hero = () => {
    const firstImages = useRef(null);
    const secondImages = useRef(null);
    const slider = useRef(null);
    const dirRef = useRef(1);
    let x_axis_perc = 0;

    useEffect(() => {

        if (firstImages.current && secondImages.current && slider.current) {
            gsap.registerPlugin(ScrollTrigger);
            requestAnimationFrame(animation);
        }

        gsap.to(slider.current, {
            scrollTrigger: {
                trigger: document.documentElement,
                start: 0,
                end: window.innerHeight,
                scrub: 0.25,
                onUpdate: (e) => {
                    dirRef.current = e.direction * -1;
                },
            },
            x: "-300px",
        });

        return () => ScrollTrigger.killAll();


    },);

    const animation = () => {
        if (x_axis_perc <= -100) {
            x_axis_perc = 0;
        }
        if (x_axis_perc > 0) {
            x_axis_perc = -100;
        }
        x_axis_perc += 0.2 * dirRef.current;
        gsap.set(firstImages.current, { xPercent: x_axis_perc });
        gsap.set(secondImages.current, { xPercent: x_axis_perc });
        requestAnimationFrame(animation);
    }

    return (
        <main className={style.mainHero}>
            <div className={style.sliderContainer}>
                <div ref={slider} className={style.slider}>
                    <div ref={firstImages} className={style.imageSet}>
                        <img
                            src="/icons/css.svg"
                            alt="CSS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/javascript.svg"
                            alt="JavaScript"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/images/others/sass.svg"
                            alt="SASS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/next.svg"
                            alt="Next.js"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/tailwind.svg"
                            alt="Tailwind CSS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                    </div>
                    <div ref={secondImages} className={style.imageSet}>
                        <img
                            src="/icons/css.svg"
                            alt="CSS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/javascript.svg"
                            alt="JavaScript"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/sass.svg"
                            alt="SASS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/next.svg"
                            alt="Next.js"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                        <img
                            src="/icons/tailwind.svg"
                            alt="Tailwind CSS"
                            width="50"
                            height="50"
                            style={{
                                objectFit: 'contain',
                                minWidth: '50px',
                                minHeight: '50px',
                            }}
                        />
                    </div>
                </div>
            </div>


            {/* <div className={style.main_container}> */}
            {/* <div className={style.main_container}> */}

            <div data-scroll data-scroll-speeed={0.1} className={`${style.heroText}`}>
                <p>Pradeep<br />Suthar</p>
            </div>
            {/* <img src="/images/others/hero_2.png" alt="hero"
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    width: "700px",
                    height: "auto",
                    transform: "translate(-50%, -50%)",
                    filter: "grayscale(100%)",
                }}
            /> */}
            <div data-scroll data-scroll-speeed={0.1} className={`${style.description}`}>
                <p>
                    A <b>Frontend Developer</b><br />focused on performance, UX, and SEO
                </p>
                {/* <GlossyText text={"Full stack developer"} /> */}
                {/* seo */}
            </div>
            {/* </div> */}





        </main>
    )
}

export default Hero;