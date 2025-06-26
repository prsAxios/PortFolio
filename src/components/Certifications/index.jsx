import style from './style.module.scss';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

gsap.registerPlugin(ScrollTrigger);

const Certifications = () => {
    const certificates = [
        {
            title: "REST API",
            description: "Validated skills in designing and consuming RESTful APIs using HTTP methods, status codes, and JSON data handling.",
            image: "/images/certificate/restAPI.png",
            issuingOrg: "HackerRank",
            date: "June 2024"
        },
        {
            title: "JavaScript",
            description: "Demonstrated proficiency in JavaScript fundamentals including closures, async handling, functional patterns, and ES6+ features.",
            image: "/images/certificate/javascript.png",
            issuingOrg: "HackerRank",
            date: "June 2024"
        },
        {
            title: "Frontend Software Engineering Virtual Experience",
            description: "Completed real-world frontend simulation tasks including responsive UI implementation and accessibility improvements.",
            image: "/images/certificate/skyscanner.png",
            issuingOrg: "Skyscanner (via Forage)",
            date: "May 2024"
        },
        {
            title: "Software Engineering Job Simulation",
            description: "Simulated software engineering tasks such as code reviews, feature planning, and debugging in a Walmart engineering workflow.",
            image: "/images/certificate/walmart.png",
            issuingOrg: "Walmart Global Tech (via Forage)",
            date: "May 2024"
        }
    ];


    const cont_headings = [
        "Certificate",
        "Skill/Domain",
        "Description",

    ];

    useEffect(() => {
        const cards = gsap.utils.toArray(`.${style.certificate}`)

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


    }, []);

    return (
        <section className={style.Certifications}>
            <div className={style.body}>

                <div className={style.heading}>
                    {cont_headings.map((heading, index) => (
                        <p key={index}>{heading}</p>
                    ))}
                </div>
                {certificates.map((certificate, index) => (
                    <div key={index} className={style.certificate}>
                        <div className={style.imageContainer}>
                            <Image
                                src={certificate.image}
                                alt={`${certificate.title} certificate`}
                                fill={true}
                                className={style.image}
                            />
                        </div>

                        <p>{certificate.title}</p>
                        <p>{certificate.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Certifications;