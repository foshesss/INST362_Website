import React from "react";
import scrollToElement from "../functions/scrollToElement";

const HeroNavButton = ({ text }) => (
    <li className='hero-nav-button'>
        <button
            type="button"
            onClick={
                () => scrollToElement(text.toLowerCase())
            }
        >
            {text}
        </button>
    </li>
);

export default HeroNavButton;