"use client";
import Academics from "../../components/academics";
import Volunteering from "../../components/Volunteering";
import Certifications from "../../components/Certifications";
import Awards from "../../components/Awards";
import styles from "./style.module.scss";
import { ListFilter, Grid2X2 } from "lucide-react";
import { useState, useEffect } from "react";


const About = () => {

    const components = {
        Academics: Academics,
        Volunteering: Volunteering,
        Certifications: Certifications,
        Awards: Awards
    };

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
                    <div className={styles.category}>
                        <button onClick={() => handleSectionClick("Academics")} style={{ backgroundColor: selectedSection === "Academics" ? "white" : "transparent", color: selectedSection === "Academics" ? "black" : "white" }}>Academics</button>
                        <button onClick={() => handleSectionClick("Volunteering")} style={{ backgroundColor: selectedSection === "Volunteering" ? "white" : "transparent", color: selectedSection === "Volunteering" ? "black" : "white" }}>Volunteering</button>
                        <button onClick={() => handleSectionClick("Certifications")} style={{ backgroundColor: selectedSection === "Certifications" ? "white" : "transparent", color: selectedSection === "Certifications" ? "black" : "white" }}>Certifications</button>
                        <button onClick={() => handleSectionClick("Awards")} style={{ backgroundColor: selectedSection === "Awards" ? "white" : "transparent", color: selectedSection === "Awards" ? "black" : "white" }}>Achievements</button>
                    </div>



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