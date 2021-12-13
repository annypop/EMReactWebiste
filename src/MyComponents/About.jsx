import React from "react";
import Common from "./Common";
import web from "../images/image2.png";

const About = () => {
    return(
        <>
        <Common name="Get To Know More About"
              imgsrc={web} 
              visit="/contact" 
              btnname="Contact Us"/>
        </>
    );
};

export default About;