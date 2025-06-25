import { GiAchievement } from "react-icons/gi";
import style from "./style.module.scss";
import Image from "next/image";
import { title } from "process";

const awards = [
    {
        id: 1,
        title: "Best Dedication Award – Ekart (Flipkart Group)",
        Achievement: "Role: Intern Team Leader | Awarded by: Regional Manager – Apurva Sir",
        Date: "BBD Sale Season, 2022",
        desc: "Received the “Best Dedication” award during Flipkart’s Big Billion Days 2022 campaign for exemplary performance as an Intern Team Leader at Ekart. I was recognized for driving operational efficiency by analyzing delivery metrics, converting customer feedback into actionable insights, and helping track fraudulent delivery attempts. My leadership contributed to smoother delivery operations and enhanced customer satisfaction during one of India’s largest e-commerce events. The award was formally presented by the Regional Manager for outstanding ownership and results-driven execution.",
        cert: "/images/award/img_3.jpg",
    },
    {
        id: 2,
        title: "AceHack 3.0 – National Level Hackathon (Jaipur)",
        Achievement: "Top 22 Teams Nationally",
        Date: "Apr-2024",
        desc: "Ranked 22nd nationally at AceHack 3.0, a prestigious hackathon sponsored by Nordek. Built a blockchain-based payment gateway in 24 hours, focusing on secure, decentralized transaction flow. Demonstrated innovation, technical execution, and presentation under tight time constraints among top tech teams across India.",
        cert: "/images/award/acehack.png",
    },
    {
        id: 3,
        title: "DecodeX 2025 – National Hackathon Finalist",
        Achievement: "Top 150 Teams Nationally | Final Round Qualifier",
        Date: "Feb-2025",
        desc: "Created a decentralized voting dApp on Polygon. Implemented secure voting using smart contracts and IPFS for immutable storage. Features included voter verification through KYC, real-time vote counting, and transparent audit trails. The dApp handled over 10,000 test votes during the hackathon. Used React, Solidity, and Web3.js for frontend-backend integration. Received praise for security implementation and user experience design.",
        cert: "/images/award/decodex.jpg",
    },
    {
        id: 4,
        title: "NCRENB 2024",
        Achievement: "Certificate of Appreciation",
        Date: "Mar-2024",
        desc: "Volunteered at the National Conference on Role of Engineers in Nation Building – 2024 (NCRENB-2024) and received a Certificate of Appreciation for supporting event execution, managing technical setups, and assisting in smooth coordination during national-level sessions focused on engineering and innovation.",
        cert: "/images/award/img_2.jpg"

    },
    {
        id: 5,
        title: "SIH 2024",
        Achievement: "Internal Campus Hackathon (Viva Institute of Technology)",
        Date: "Sep-2024",
        desc: "Ranked 6th in the internal round of Smart India Hackathon 2024, held at Viva Institute of Technology. Developed a tech-driven solution to a real-world problem under tight timelines, showcasing strong teamwork, innovation, and technical execution during the campus-wide selection phase.",
        cert: "/images/award/img_1.jpg"
    }

];

const Awards = () => {
    return (
        <section className={style.section}>
            <div className={style.body}>
                {awards.map((award) => (
                    <div key={award.id} className={style.award}>
                        <div className={award.id === 1 ? style.imageContainer2 : style.imageContainer} >
                            <Image
                                src={award.cert}
                                alt={award.title}
                                layout="fill"
                            />
                        </div>

                        <div className={style.infoContainer}>
                            <p>{award.title}</p>
                            <p>{award.Achievement}</p>
                            <p>{award.Date}</p>
                            <p>{award.desc}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Awards;