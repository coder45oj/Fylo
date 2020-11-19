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

        <span className= "fa-stack fa-lg">
            <i className="fa fa-facebook fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin  fa-stack-2x" aria-hidden="true"></i>
        </span>

        <span className = "fa-stack fa-lg">
            <i className="fa fa-twitter fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin  fa-stack-2x" aria-hidden="true"></i>
        </span>

        <span className = "fa-stack fa-lg">
            <i className="fa fa-instagram fa-stack-1x" aria-hidden="true"></i>
            <i className="fa fa-circle-thin  fa-stack-2x" aria-hidden="true"></i>
        </span>

    </footer>
    )
};

export default Footer;