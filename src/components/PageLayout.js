import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./Problem";
import Team from "./Team";
import AffinityDiagram from "./AffinityDiagram";

const PageLayout = () => (
    <div className='page-layout'>
        <NavBar />
        <Hero />
        <About />
        <AffinityDiagram />
        <Team />
    </div>
);

export default PageLayout;