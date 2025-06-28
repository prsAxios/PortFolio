"use client";
import styles from "./style.module.scss";
import gsap from "gsap";
import { useEffect, useRef } from "react";



const Academics = () => {

    const Academic_data = [
        {
            title: "MCA",
            description: "Master of Computer Applications",
            institution: "Viva Institute of Technology",
            year: "2023-2025",
            CGPA: "8.81",
            Grade: "A",
            CourseWork: "Web Development, Data Structures, Cloud Computing, AI/ML"
        },
        {
            title: "BCA",
            description: "Bachelor of Computer Applications",
            institution: "Chikitsak Samuha's Patkar-Varde College",
            year: "2019-2022",
            Grade: "7.71",
            Grade: "A",
            CourseWork: "OOP, OS, Networks, DBMS"
        }
    ];

    const col_headings = [
        "Degree",
        "Institution",
        "Year",
        "CGPA",
        "Grade",
        "Course Work"
    ]


    useEffect(() => {

        const Container = gsap.utils.toArray(`.${styles.education}`);

        Container.forEach((edu, index) => {
            gsap.fromTo(edu, {
                y: 100,
                opacity: 0,
            }, {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
            })
        })

    }, []);


    return (
        <section className={styles.section}>
            <div className={styles.col_headings}>
                {col_headings.map((heading, index) => (
                    <p key={index}>{heading}</p>
                ))}
            </div>

            <div className={styles.edu_Container}>

                {Academic_data.map((item, index) => (

                    <div key={index} className={styles.education}>
                        <p className={styles.title}>{item.title}</p>
                        <p>{item.institution}</p>
                        <p>{item.year}</p>
                        <p>{item.CGPA}</p>
                        <p>{item.Grade}</p>
                        <p>{item.CourseWork}</p>
                    </div>






                ))}
            </div>
        </section>
    )
}

export default Academics;