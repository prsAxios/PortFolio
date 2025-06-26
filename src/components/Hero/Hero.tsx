"use client";

import style from "./hero.module.scss";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Hero = () => {
    const firstText = useRef<HTMLParagraphElement>(null);
    const secondText = useRef<HTMLParagraphElement>(null);
    const slider = useRef<HTMLDivElement>(null);
    const dirRef = useRef(1);
    let x_axis_perc = 0;

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);
        requestAnimationFrame(animation);

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
    },);

    const animation = () => {
        if (x_axis_perc <= -100) {
            x_axis_perc = 0;
        }
        if (x_axis_perc > 0) {
            x_axis_perc = -100;
        }
        x_axis_perc += 0.1 * dirRef.current;
        gsap.set(firstText.current, { xPercent: x_axis_perc });
        gsap.set(secondText.current, { xPercent: x_axis_perc });
        requestAnimationFrame(animation);
    }



    return (
        <main className={style.mainHero}>
            <img
                src={"/images/Hero/right.png"}
                alt="HeroImage"

            />
            <div className={style.sliderContainer}>
                <div ref={slider} className={style.slider}>
                    <p ref={firstText}>Pradeep Suthar -</p>
                    <p ref={secondText}>Pradeep Suthar -</p>
                </div>
            </div>

            <div data-scroll data-scroll-speeed={0.1} className={`${style.description}`}>
                <p>
                    -Frontend Developer<br />
                    -Web Developer<br />
                    -Optimizing for speed, UX, and search.
                </p>
            </div>

        </main>
    )
}

export default Hero;