"use client";
import Academics from "../../components/academics";
import Volunteering from "../../components/Volunteering";
import Certifications from "../../components/Certifications";
import Awards from "../../components/Awards";
import styles from "./style.module.scss";

import { useState } from "react";


const About = () => {


    const [selectedSection, setSelectedSection] = useState("Academics");

    const handleSectionClick = (sectionName) => {
        setSelectedSection(sectionName);
    }

    return (
        <div className={styles.About}>
            <div className={styles.body}>
                <div className={styles.header}>
                    <p>Explore more about me.</p>
                </div>

                <div className={styles.buttons}>

                    {/* Button div */}
                    <button onClick={() => handleSectionClick("Academics")} style={{ backgroundColor: selectedSection === "Academics" ? "black" : "white", color: selectedSection === "Academics" ? "white" : "black" }}>Academics</button>
                    <button onClick={() => handleSectionClick("Volunteering")} style={{ backgroundColor: selectedSection === "Volunteering" ? "black" : "white", color: selectedSection === "Volunteering" ? "white" : "black" }}>Volunteering</button>
                    <button onClick={() => handleSectionClick("Certifications")} style={{ backgroundColor: selectedSection === "Certifications" ? "black" : "white", color: selectedSection === "Certifications" ? "white" : "black" }}>Certifications</button>
                    <button onClick={() => handleSectionClick("Awards")} style={{ backgroundColor: selectedSection === "Awards" ? "black" : "white", color: selectedSection === "Awards" ? "white" : "black" }}>Achievements</button>



                </div>


                {/* each category-specific div */}
                <div className={styles.child}>
                    {selectedSection === "Academics" && <Academics />}
                    {selectedSection === "Volunteering" && <Volunteering />}
                    {selectedSection === "Certifications" && <Certifications />}
                    {selectedSection === "Awards" && <Awards />}

                </div>

            </div>

        </div >
    )
}

export default About;