import React from "react";
// import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import './LandingPage.css';
// import LearnMore from "./LearnMore.js";
import { useStoreContext } from '../utils/GlobalStore';


function LandingPage() {
    const [state] = useStoreContext();
    return ( 
        <div>
            <Navbar /> 
            <container id="landingContainer">
                <h1 id="landingTitle">
                        <svg id="logo" width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-geo-alt-fill" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                        </svg>
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