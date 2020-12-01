import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar.js";
import './LandingPage.css';
import LearnMore from "./LearnMore.js";


function LandingPage() {
    return ( 
        <div>
            <Navbar /> 
            <container id="landingContainer">
                <h1 id="landingTitle">
                    PIFA
                <p id="landingP">
                    Pay It Foward, Austin!
                </p>
                </h1>
            </container>
          
        </div>
    )
}

export default LandingPage;