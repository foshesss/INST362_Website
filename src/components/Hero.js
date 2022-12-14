import React from "react";

const Hero = () => {
    return (
        <section className='hero-section' id='hero'>
            <section className='hero-subsection'>
                <div className='hero-left'>
                    <h1>Together, we will <span id='eliminar'>eliminate</span> food waste.</h1>
                    <p>
                        We are a team that's dedicated to finding solutions that 
                        will eliminate food waste in University of
                        Maryland dining halls.
                    </p>
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