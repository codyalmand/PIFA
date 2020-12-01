
import React from "react";
import { Link } from "react-router-dom";
import "./style.css"
import Button from 'react-bootstrap/Button';


function Navbar() {
    return (
        <div>
            <div id="row" className="row">
                <Link to='/login' className="nav-link">
                    <Button id="button">
                    Login
                    </Button>
                </Link>
                <Link to='/register' className="nav-link">
                    <Button id="button">
                    Register
                    </Button>
                </Link>
                
                <Link to='/Profile' className="nav-link">
                    <Button id="button">
                    Profile
                    </Button>
                </Link>
                <Link to='/Requests/Posts' className="nav-link">
                    <Button id="button">
                    Requests/Posts
                    </Button>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;