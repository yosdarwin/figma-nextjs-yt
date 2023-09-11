import About from "@/components/home/About";
import Hero from "@/components/home/Hero";
import LatestProject from "@/components/home/LatestProject";
import OurService from "@/components/home/OurService";
import React from "react";
const Home = () => {
    return (
        <>
            <Hero />
            <About />
            <OurService />
            <LatestProject />
        </>
    );
};

export default Home;
