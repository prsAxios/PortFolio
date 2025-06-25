"use client";
import Image from "next/image";
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
    }, []);

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
            <Image
                src={"/contact.svg"}
                alt="HeroImage"
                fill={true}
            />
            <div className={style.sliderContainer}>
                <div ref={slider} className={style.slider}>
                    <p ref={firstText}>Pradeep Suthar -</p>
                    <p ref={secondText}>Pradeep Suthar -</p>
                </div>
            </div>

            <div data-scroll data-scroll-speeed={0.1} className={`${style.description}`}>
                <svg
                    width="20"
                    height="20"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 8.5C8.27614 8.5 8.5 8.27614 8.5 8L8.5 3.5C8.5 3.22386 8.27614 3 8 3C7.72386 3 7.5 3.22386 7.5 3.5V7.5H3.5C3.22386 7.5 3 7.72386 3 8C3 8.27614 3.22386 8.5 3.5 8.5L8 8.5ZM0.646447 1.35355L7.64645 8.35355L8.35355 7.64645L1.35355 0.646447L0.646447 1.35355Z"
                        fill="yellow"
                    />
                </svg>
                <p>Frontend Developer</p>
                <p>Full Stack Developer</p>
            </div>
        </main>
    )
}

export default Hero;