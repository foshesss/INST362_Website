import React from "react";
import NavBar from "./NavBar";
import HomePage from "./HomePage";
import AffinityDiagram from "./AffinityDiagram";
import Personas from "./Personas";
import TenTen from "./TenTen";

import {  BrowserRouter as Router,  Routes,  Route} from "react-router-dom";

const PageLayout = () => (
    <div className='page-layout'>
        <Router>
            <NavBar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/affinity" element={<AffinityDiagram />} />
                <Route path="/personas" element={<Personas />} />
                <Route path="/ten-ten" element={<TenTen />} />
            </Routes>
        </Router>
    </div>
);

export default PageLayout;