import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./Problem";
import Team from "./Team";
import AffinityDiagram from "./AffinityDiagram";
import Personas from "./Personas";
import TenTen from "./TenTen";
import Makeathon from "./Makeathon";
import UsabilityTest from "./UsabilityTestPlan";

const PageLayout = () => (
    <div className='page-layout'>
        <NavBar />
        <Hero />
        <About />
        <AffinityDiagram />
        <Personas />
        <TenTen />
        <Makeathon />
        <UsabilityTest />
        <Team />
    </div>
);

export default PageLayout;