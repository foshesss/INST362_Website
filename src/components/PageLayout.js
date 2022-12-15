import React from "react";
import NavBar from "./NavBar";
import Makeathon from "./Makeathon";
import HomePage from "./HomePage";
import UsabilityTest from "./UsabilityTestPlan"

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

const PageLayout = () => (
    <div className='page-layout'>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/makeathon" element={<Makeathon />} />
                <Route path="usability-test-plan" element={<UsabilityTest />} />
            </Routes>
        </Router>
    </div>
);

export default PageLayout;