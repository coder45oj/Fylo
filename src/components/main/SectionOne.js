import React from 'react';
import IconArrow from '../images/icon-arrow.svg';
import IconQuotes from '../images/icon-quotes.svg';
import Avatar from '../images/avatar-testimonial.jpg';
import IllustrationTwo from '../images/illustration-2.svg'

const SectionOne = () => {
    return (
        <main>
        <div className="mainSection">
            <div className="maintext">
                <h2 className="maintext-header">Stay productive, wherever you are.</h2>
                <p className="maintext-body">Never let location be an issue when accessing your files. Fylo has<br/>
                    you covered for all of your
                    file
                    storage needs.</p>
                <p className="maintext-body">Securely share files and folders with friends, family and collegues <br/>for
                    live collaboration. no
                    email
                    attachments required!</p>
            </div>
            <div className="work-link">
                <a href="howfyloworks">See how Fylo works</a>
                <img src={IconArrow} alt="arrow"/>
            </div>
            <div className="card">
                <img src={IconQuotes} alt="quotes" className="quotes"/>
                <p className="cardtext">Fylo has improved our team productivity by an<br/> order of magnitude. Since making
                    the switch our<br/> team
                    has become a well-oiled collaboration<br/> machine.</p>
                <div className="ceo-profile">
                    <div className="passport">
                        <img src={Avatar} alt="kyle" className="kyle-image"/>
                    </div>
                    <div className="passport-text">
                        <p className="kyle"> Kyle Burton</p>
                        <p className="title">Founder & CEO, Huddle</p>
                    </div>
                </div>
            </div>
        </div>
        <div> 
            <img src={IllustrationTwo} alt="" className="illustration-2"/>
        </div>
    </main>

    )
};

export default SectionOne;