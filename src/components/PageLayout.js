import React from "react";
import NavBar from "./NavBar";
import Hero from "./Hero";
import About from "./Problem";
import Team from "./Team";

const PageLayout = () => (
    <div className='page-layout'>
        <NavBar />
        <Hero />
        <About />
        <Team />
    </div>
);

export default PageLayout;