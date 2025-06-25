import styles from "./navbar.module.scss";
import Links from "./Link/index";
import { motion } from "framer-motion";
import { menuSlider } from "./anima";
import Curve from "./curve/Curve";
import { LiaLinkedin } from "react-icons/lia";
import { GitBranch, Github } from "lucide-react";
import { FaHackerrank } from "react-icons/fa6";

const Navbar = ({ toggleMenu }) => {
    const isClient = typeof window !== 'undefined';

    const navItems = [
        {
            title: "Home",
            href: "/",
        },
        {
            title: "Contact",
            href: "/contact",
        },
        {
            title: "About",
            href: "/about",
        },
    ];

    return (
        <motion.div
            variants={menuSlider}
            animate="enter"
            exit="exit"
            initial="initial"
            className={styles.menu}
        >
            {isClient && (
                <div className={styles.body}>
                    <div className={styles.nav}>


                        {navItems.map((item, index) => (
                            <Links key={index} data={{ ...item, index }} />
                        ))}
                    </div>
                    <div className={styles.footer}>
                        <a href="/" aria-label="Linkedin link"><LiaLinkedin size={50} /></a>
                        <a href="/" aria-label="Github link"><Github size={50} /></a>
                        <a href="/" aria-label="hackerrank link"><FaHackerrank size={50} /></a>
                    </div>
                </div>
            )}
            <Curve />
        </motion.div>
    );
};

export default Navbar;
