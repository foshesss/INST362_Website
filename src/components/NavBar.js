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

        <div id="navbar-list">
            <Link to="/">Home</Link>
            <Link to="/affinity">Affinity Diagram</Link>
            <Link to="/personas">Personas</Link>
            <Link to="/ten-ten">10+10 Diagram</Link>
            <Link to="/makeathon">Makeathon</Link>
            <Link to="/usability-test-plan">Usability Test Plan</Link>
        </div>
    </nav>
);

export default NavBar;