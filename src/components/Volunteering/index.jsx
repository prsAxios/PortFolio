"use client";
import style from "./style.module.scss";
import Image from "next/image";
import gsap from "gsap";
import { useEffect } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Volunteering = () => {


    useEffect(() => {
        const cards = gsap.utils.toArray(`.${style.vol_card}`)

        cards.forEach((card, index) => {
            gsap.fromTo(card, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                stagger: 0.2,
                ease: "power3.out",
                scrollTrigger: {
                    trigger: card,
                    start: "top 85%",
                    toggleActions: "play none none reverse",
                }
            })
        })


    }, [])

    const volunteeringData = [
        {
            title: "ISR Activity – Zila Parishad Government School",
            profile: "Lead Instructor & Team Coordinator",
            Date: "Mar 2024",
            description: "As part of a social responsibility initiative, I led a volunteer team to conduct digital literacy sessions at a rural government school where access to computers was limited. We introduced underprivileged students to foundational web technologies like HTML and CSS, aiming to spark curiosity and build basic programming skills. I took charge of planning the curriculum, delivering hands-on sessions, and mentoring students through interactive examples. This experience not only deepened my sense of community service but also strengthened my ability to teach, lead, and communicate technical concepts to beginners in a resource-constrained environment.",
            image: "/images/vol/vol_1.jpg"
        },
        {
            title: "Interactive Software Support – Netflix Series Launch (Mumbai, Lower Parel)",
            profile: "JavaScript Developer (Event-Based Contribution)",
            description: "As part of a creative tech agency collaboration, I contributed to an interactive software experience designed for the launch of a Netflix series in Mumbai. The installation allowed attendees to generate unique avatars and quirky, personalized names — blending entertainment with technology. I worked on JavaScript-based modules that powered these real-time customizations, gaining firsthand experience in building interactive UIs for live audiences. The project sharpened my skills in DOM manipulation, event handling, and user engagement design — all within the fast-paced environment of a high-profile media event.",
            image: "/images/vol/netflix.jpg"
        },
        {
            title: "Technical Volunteer – Snapchat India AR Day (Worli, Mumbai)",
            profile: "Freelance Technical Support",
            description: "Volunteered as a technical assistant during Snapchat India's AR Day event held in Worli, where the company showcased its latest Augmented Reality innovations. I played a key role in setting up and configuring visual displays, software environments, and connectivity systems to ensure a seamless experience for attendees. My responsibilities included hands-on support for screen installations, system testing, and troubleshooting — all contributing to the smooth execution of immersive AR demos. This opportunity offered me a behind-the-scenes view of real-time tech deployment at scale, blending hardware setup with user-focused software interaction.",
            image: "/images/vol/snapchat.jpg"
        },
    ];

    return (
        <>
            <section className={style.section}>
                <div className={style.body}>
                    {volunteeringData.map((data, i) => (
                        <div
                            className={`${style.vol_card} ${i % 2 === 1 ? style.reverse : ""}`}
                            key={i}
                        >
                            <div className={style.image_container}>
                                <Image
                                    src={data.image}
                                    alt={data.title}
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>

                            <div className={style.text_container}>
                                <p>{data.title}</p>
                                <p>{data.profile}</p>
                                <p>{data.Date}</p>
                                <p>{data.description}</p>
                            </div>

                        </div>
                    ))}
                </div>

            </section >
        </>
    )
}

export default Volunteering;