import React from "react";
import scrollToElement from "../functions/scrollToElement";

const NavBar = () => (
    <nav className='navbar'>
        <header className='navbar-header'>
            <button
                type='button'
                onClick = {() => scrollToElement('hero')}
            >
                <h1>Wu-Tang Flan</h1>
            </button>
        </header>
    </nav>
);

export default NavBar;