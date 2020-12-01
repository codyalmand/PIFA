
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Button from 'react-bootstrap/Button';


function Navbar() {
    return (
        <div>
            <div id="row" className="row">
                <Link to='/Login' className="nav-link">
                    <Button id="button">
                    Login
                    </Button>
                </Link>
                <Link to='/Signup' className="nav-link">
                    <Button id="button">
                    Signup
                    </Button>
                </Link>
                
                <Link to='/Profile' className="nav-link">
                    <Button id="button">
                    Profile
                    </Button>
                </Link>
                <Link to='/Posts' className="nav-link">
                    <Button id="button">
                    Posts
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