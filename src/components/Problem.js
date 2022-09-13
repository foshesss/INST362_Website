import React from "react";

const Problem = () => {


    return (
        <section className='problem-section page-section' id='problem'>
            <header className='problem-header'>
                <h2>What's the problem?</h2>
            </header>

            <section className='problems-container'>
                <div className='problem'>
                    <img
                        src='https://cdn-icons-png.flaticon.com/512/5231/5231341.png'
                        alt='recycle bin'
                    />
                    <h3>Food is wasted</h3>
                    <p>
                        At the end of the day, all leftover food that didn't make it 
                        to students is thrown out.
                    </p>
                </div>
                <div className='problem'>
                    <img
                        src='https://cdn.iconscout.com/icon/free/png-256/sad-emoji-17-894764.png'
                        alt='sad face'
                    />
                    <h3>Students are hungry</h3>
                    <p>
                        As a result of long lines, students are unable to get food 
                        at the dining halls, leaving them hungry.
                    </p>
                </div>
            </section>

        </section>
    );
};

export default Problem;