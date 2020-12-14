import React from "react";
import { Link } from "react-router-dom";
import "../../pages/News.css"

function NewsItem(props) {
    return (
        <div id="newsArticles" className="row">
            <div className="col-sm-12 col-md-4">
                <img src={props.image} alt="Article" style={{ height: "250px", width: "100%" }} />
            </div>
            <div className="col-sm-12 col-md-8">
                <h4>{props.title}</h4>
                <p>
                    {props.description}
                </p>
                <Link id="newsButton" to={{ pathname: props.url }} target="_blank" className="link" >
                    Read More
                </Link>
            </div>
        </div>
    )
}

export default NewsItem;