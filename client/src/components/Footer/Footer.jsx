import React from "react";
import styles from "./Footer.module.css";
import icons from "../../images/IconsType";

function Footer() {
    return (
        <div className={styles.container}>
            <span>Visit us on our social networks</span>
            <div>
                <a href="https://www.linkedin.com/in/david-de-jes%C3%BAs-vergara-navarro-62169225a/" target="_blank" rel="noreferrer">
                <img src={icons.linkedin} alt="LinkeInd" />
                </a>
                <a href="https://github.com/Davidvn95" target="_blank" rel="noreferrer">
                    <img src={icons.github} alt="GitHub" />
                </a>
            </div>
        </div>
    );
}

export default Footer;
