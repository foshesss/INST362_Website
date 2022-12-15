import React from "react";
import NavBar from "./NavBar";
import About from "./Problem";
import HomePage from "./HomePage";

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

const PageLayout = () => (
    <div className='page-layout'>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<About />} />
            </Routes>
        </Router>
    </div>
);

export default PageLayout;