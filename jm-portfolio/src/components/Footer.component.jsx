import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faInstagram } from "@fortawesome/free-brands-svg-icons";
import './Footer.styles.css'

const Footer = () => {
    return (
        <div className="social-wrapper">
            <h3>Where to find me</h3>
            <div className="links">
                <a href="https://github.com/Spiritusanti" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faGithub} size="4x" color="black"/></a>
                <a href="https://www.linkedin.com/in/jacob-mccracken/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size="4x" color="black"/></a>
                <a href="https://www.instagram.com/mccracken_jacob/" target="_blank" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} size="4x" color="black"/></a>
            </div>
        </div>
    )
}

export default Footer;