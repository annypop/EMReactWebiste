import React from "react";
import { NavLink } from "react-router-dom";
import web from "../images/image1.svg";
import Common from "./Common";

const Home = () => {
    return (
        <>
            <Common name="Energy Monitoring Available with"
              imgsrc={web} 
              visit="/service" 
              btnname="Get Started"/>
        </>
    );
};

export default Home;