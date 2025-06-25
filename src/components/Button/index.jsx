import style from "./button.module.scss";
// import Megnatic from "../magnetic";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const index = ({ children, backgroundColor = "#455CE9", ...attributes }) => {
    const circle = useRef(null);
    let timeline = useRef(null);
    let timeoutId = null;

    useEffect(() => {
        timeline.current = gsap.timeline({ paused: true });
        timeline.current
            .to(
                circle.current,
                { scale: 1.2, duration: 0.4, ease: "power3.in" },
                "enter"
            )
            .to(
                circle.current,
                { scale: 1, duration: 0.25 },
                "exit"
            );
    }, []);

    const manageMouseEnter = () => {
        if (timeoutId) clearTimeout(timeoutId);
        timeline.current.tweenFromTo("enter", "exit");
    };

    const manageMouseLeave = () => {
        timeoutId = setTimeout(() => {
            timeline.current.play();
        }, 300);
    };

    return (
        // <Megnatic>
        <div
            className={style.roundedButton}
            style={{ overflow: "hidden", backgroundColor: "transparent" }}
            onMouseEnter={() => {
                manageMouseEnter();
            }}
            onMouseLeave={() => {
                manageMouseLeave();
            }}
            {...attributes}
        >
            {children}
            <div
                ref={circle}
                style={{ backgroundColor }}
                className={style.circle}
            ></div>
        </div>
        // </Megnatic>
    );
};

export default index;
