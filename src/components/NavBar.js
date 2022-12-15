import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => (
    <nav className='navbar'>
        <header className='navbar-header'>
            <button
            >
                <h1>Wu-Tang Flan</h1>
            </button>
        </header>

        <div>
            <Link to="/">Home</Link>
        </div>
    </nav>
);

export default NavBar;