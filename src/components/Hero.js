import React from "react";
import HeroNavButton from "./HeroNavButton";

const Hero = () => {
    return (
        <section className='hero-section page-section'>
            <section className='hero-subsection'>
                <div className='hero-left'>
                    <h1>Together, we will eliminate food waste.</h1>
                    <p>
                        We are a team that's dedicated to finding solutions that 
                        will eliminate food waste in University of Maryland dining halls.
                    </p>
                    <nav>
                        <ul className='hero-nav'>
                            <HeroNavButton
                                text='Problem'
                            />
                            <HeroNavButton
                                text='Team'
                            />
                        </ul>
                    </nav>
                </div>
            </section>
            <section className='hero-right hero-subsection'>
                <img
                    src='https://o.quizlet.com/QWEgIx8Uq2Fn4AWH5HmcYg.png'
                    alt='cake'
                />
            </section>
        </section>
    );
};

export default Hero;