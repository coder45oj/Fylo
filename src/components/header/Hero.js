import React from 'react';
import IllustrationOne from '../images/illustration-1.svg'

const Hero = () => {
    return (
        <div className="firstpage">
        <div id="firstpagetext">
            <h1> All your files in one <br/> secure location, accesible anywhere.</h1>
            <p id="top-text">Fylo stores your most important files in one secure
                location. Access<br/> them wherever you need, share and collaborate with friends,<br/> family and
                co-workers.
            </p>
            <input type="text" placeholder="Enter your email..." id="entermail"/>
            <button id="getstarted"> Get Started</button>
        </div>
        <div className="firstimage">
            <img src={IllustrationOne} alt="" className="illustration-1"/>
        </div>
    </div>
    )
};

export default Hero;