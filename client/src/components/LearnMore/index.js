import React from "react";
// import { Link } from "react-router-dom";
// import Navbar from "../components/Navbar.js";
import "./style.css"
import Button from 'react-bootstrap/Button';

function LearnMore() {
    return ( 
        <div>
            <container id="container">
                <h1 id="learnMoreInfo">
                <p> We believe our application would provide an easy and accessible way of helping others in the community,
                     while also providing an outlet for those who need the help to find it.</p>
                <p> PIFA app allows users to ask the Austin community for help by posting help requests 
                    that include user information and a description of what they need. 
                    Other users of the PIFA app can then offer to help that person and are then connected via email exchange, and this 
                continues the cycle of paying it forward.</p> <p> Good deeds help expand local generosity 
                    and let users feel good about helping each other. Everyone needs help sometimes.</p><br></br>
                <p id="tagline"> When life gets disordered.. </p>
                <p id="tagline"> Request on PIFA, then Pay It Forward! </p>    

                </h1>
            </container>
        </div>
    )
}

export default LearnMore;