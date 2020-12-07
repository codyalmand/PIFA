
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Button from 'react-bootstrap/Button';


function Navbar() {
    return (
        <div>
            <div id="row" className="row">
            <Link to='/Signup' className="nav-link">
                    <Button id="button">
                    Sign Up
                    </Button>
                </Link>
                <Link to='/Login' className="nav-link">
                    <Button id="button">
                    Login
                    </Button>
                </Link>
       
                <Link to='/LearnMore' className="nav-link">
                    <Button id="button">
                    LearnMore
                    </Button>
                </Link>
            </div>
            
        </div>
    );
}

export default Navbar;