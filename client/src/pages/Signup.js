import React, { useRef, useState } from "react"
import { Link } from "react-router-dom";
import API from "../utils/API";
import { AUTH_SET_LOGGED_IN } from "../utils/actions";
import { useStoreContext } from '../utils/GlobalStore';
import "./Signup.css";

function Signup() {
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const emailRef = useRef();
    const passwordRef = useRef();
    const usernameRef = useRef();
    const [, dispatch] = useStoreContext();

    const handleSignup = (event) => {
        event.preventDefault();
        const signupData = {
            email: emailRef.current.value,
            password: passwordRef.current.value,
            username: usernameRef.current.value
        };
        API.signup(signupData).then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            });
        }).catch(err => {
            setShowError(true);
            setErrorMessage("An error occurred while signing up");
        })
    }

    return <div>
        <div id="signupContainer" className="container">
            <div className="row">
                <div id="signupForm" className="col-md-6 col-md-offset-3">
                    <h2 id="signupP">Sign Up</h2>
                    <form className="signup" onSubmit={handleSignup}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Email Address</label>
                            <input type="email" className="form-control" placeholder="Email" ref={emailRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputUsername">Username</label>
                            <input type="name" className="form-control" placeholder="Username" ref={usernameRef} />
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Password</label>
                            <input type="password" className="form-control" placeholder="Password" ref={passwordRef} />
                        </div>
                        <div style={{ "display": showError ? "block" : "none" }} id="alert" className="alert alert-danger" role="alert">
                            <span className="glyphicon glyphicon-exclamation-sign" aria-hidden="true"></span>
                            <span className="sr-only">Error:</span> <span className="msg">{errorMessage}</span>
                        </div>
                        <button id="formbutton" type="submit" className="btn btn-default">Sign Up</button>
                        <br></br><br></br>
                    </form>
                 
                    <p>or Login <Link to="/signup" id="signupP">here</Link></p>
                </div>
            </div>
        </div>
    </div>
}

export default Signup;