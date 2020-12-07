
import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import Button from 'react-bootstrap/Button';


function Navbar2() {
    return (
        <div>
            <div id="row" className="row">

                <Link to='/Posts' className="nav-link">
                    <Button id="button">
                    Posts
                    </Button>
                </Link>
                <Link to='/Profile' className="nav-link">
                    <Button id="button">
                    Profile
                    </Button>
                </Link>

                <Link to='/LearnMore' className="nav-link">
                    <Button id="button">
                    LearnMore
                    </Button>
                </Link>
                <Link to='/Volunteer' className="nav-link">
                    <Button id="button">
                    Volunteer
                    </Button>
                </Link>
                <Link to='/News' className="nav-link">
                    <Button id="button">
                    News
                    </Button>
                </Link>
                <Link to='/Logout' className="nav-link">
                    <Button id="button">
                    Logout
                    </Button>
                </Link>
            </div>

        </div>
    );
}


export default Navbar2; 

