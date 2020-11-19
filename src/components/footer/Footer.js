import React from 'react';
import LogoWhite from '../images/logo white.svg';

const Footer = () => {
    return(
        <footer>
        <div class="footer-logo">
            <img src={LogoWhite} alt=""/>
            <p>+1-543-123-4567<br/>example@huddle.com</p>
        </div>

        <div class="about">
            <p>About Us<br/>Jobs<br/>Press<br/>Blog</p>
        </div>
        <div class="career">
            <p>Career<br/>Terms<br/>Privacy</p>
        </div>

        <i className = "fab fa-facebook"></i>
        <i className = "fab fa-twitter"></i>
        <i className = "fab fa-instagram"></i>

    </footer>
    )
};

export default Footer;