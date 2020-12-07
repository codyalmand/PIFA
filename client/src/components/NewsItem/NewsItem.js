import React from "react";
import { Link } from "react-router-dom";

function NewsItem(props) {
    return (
        <div className="row" style={{ marginTop: "20px", background: "white", borderRadius: "25px", padding: "20px" }}>
            <div className="col-sm-12 col-md-4">
                <img src={props.image} alt="Article" style={{ height: "250px", width: "100%" }} />
            </div>
            <div className="col-sm-12 col-md-8">
                <h4>{props.title}</h4>
                <p>
                    {props.description}
                </p>
                <Link to={{ pathname: props.url }} target="_blank" className="link" >
                    Read Here
                </Link>
            </div>
        </div>
    )
}

export default NewsItem;