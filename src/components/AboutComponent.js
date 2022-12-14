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
                        Competitive Coder, π Ecliptic Web Developer, Premiere Programmer, Illustrative Designer. Enthusiast about data structures, β° algorithms, and solving intense brain puzzles. I find π€ problem-solving
                    and π technological advancement enthralling .</p>
                    <p className="passion-intro">I'm a π» passionate filmmaker π and a budding πΈguitarist πΆ. Although I often
        indulge myself in β content writing, πΈ travelling and π΄ cooking .</p>
                </div>

            </div>

        </div>

    );
}
export default About;