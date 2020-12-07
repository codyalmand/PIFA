import React from "react";
import { Link } from "react-router-dom";
import "./Volunteer.css"

function Volunteer() {
    return ( 
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <h1>
                        <p id="volunteerText">
                            If you can't seem to find a request that works with
                            you, have no fear, there are other ways to pay it forward!
                            Austin has many volunteer opportunities, and finding a way
                            to help someone in need is just a click away!
                        </p>
                    </h1>
                    <Link id="volunteerButton" to={{ pathname: "https://communityimpact.com/austin/features/2016/12/14/heres-list-nonprofits-volunteer-opportunities-central-austin/"}} target="_blank" className="link" >
                        Find Volunteer Opportunities Today
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Volunteer;