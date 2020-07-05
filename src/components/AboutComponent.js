import React from 'react';


function About(props) {
    return (
        <div className="container page">
            <div className="row row-header">
                <div className="fib col-6"><h1 className="row-header" >About</h1></div>
                <div className="fib col-6 page-icons" style={{ textAlign: "right" }}>
                    <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://instagram.com/whyshivam">
                        <i className="fa fa-instagram" />
                    </a>
                    <a className="header-icons" rel="noopener noreferrer" target="_blank" href="https://www.twitter.com/whyshivam">
                        <i className="fa fa-twitter" />
                    </a>
                </div>
                <div className="fib col-12"  >
                    <p className="Intro light">
                        Competitive Coder, Ecliptic Web Developer, Premiere Programmer, Illustrative Designer. Enthusiast about data structures, algorithms, and solving intense brain puzzles. I find problem-solving
                    and technological advancement enthralling.</p>
                    <p className="passion-intro">I'm a passionate filmmaker and a struggling guitarist. Maths, Music &amp; Movies are three love of my life. Although I often
        indulge myself in content writing, travelling and cooking.</p>
                </div>

            </div>

        </div>

    );
}
export default About;