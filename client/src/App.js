import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom'
import './App.css';
import LandingPage from "./pages/LandingPage.js";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Navbar from "./components/Navbar";
import Navbar2 from "./components/Navbar2";
import LearnMore from "./components/LearnMore/index.js";
import { useStoreContext } from './utils/GlobalStore';
import API from './utils/API';
import { AUTH_SET_LOGGED_IN, AUTH_SET_LOGGED_OUT } from "./utils/actions";



function App() {
    // Our provider is setup in index.js so we can use the GlobalStore here easily.

    // Something we want to do at the beginning of the application is check if the user is logged in or not, if the user is, we'll
    // dispatch an action 
    const [state, dispatch] = useStoreContext();
    useEffect(() => {
        // Try getting our user-data, if the user is logged in, we will update our GlobalStore to refelct that
        API.checkUserInfo().then(response => {
            const { email } = response.data;
            dispatch({
                type: AUTH_SET_LOGGED_IN,
                data: {
                    email
                }
            })
        }).catch(err => {
            // Not able to be logged in, leave us logged out
            console.log("error", err);
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            })
        })
    }, []);

    const logout = () => {
       
            dispatch({
                type: AUTH_SET_LOGGED_OUT
            
        })
        return null;
    }

    return (
        
        <Router>
                
                <Switch>
                    {
                         !state.userLoggedIn ? (
            // These routes are only avaialable to LOGGED OUT users
                            <>

                            <Navbar />
                            <LandingPage />

                                <Route exact path="/Login" component={Login} />
                                <Route exact path="/Signup" component={Signup} />
                                <Route exact path="/LearnMore" component={LearnMore} />

                            </>
                        ) : (
            // These routes are only available to LOGGED IN users
                            <>

                            <Navbar2 />
                                <LandingPage />
                                <Route exact path="/Posts" component={Posts} />
                                <Route exact path="/LearnMore" component={LearnMore} />
                                <Route exact path="/logout" component={logout} />
                                <Route exact path="/Profile" component={Profile} />


            {/* If you are logged in, going to the login/signup page will take you to the members page */}
                                    <Redirect to="/" />
                                
                                <Route exact path="/LandingPage" component={LandingPage} />
                                
                            </>
                            )
                    }
                    {
                        /* These routes are ALWAYS available */
                    }
                    
                    <Route>
            { /*If none of the other pages match, redirect them to the main page */}
                        <Redirect to="/LandingPage" />
                    </Route>
                </Switch>

        </Router>
      
    );
}

export default App;
