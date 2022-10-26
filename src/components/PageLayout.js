import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./Problem";
import Team from "./Team";
import AffinityDiagram from "./AffinityDiagram";
import Personas from "./Personas";
import TenTen from "./TenTen";

const PageLayout = () => (
    <div className='page-layout'>
        <NavBar />
        <Hero />
        <About />
        <AffinityDiagram />
        <Personas />
        <TenTen />
        <Team />
    </div>
);

export default PageLayout;