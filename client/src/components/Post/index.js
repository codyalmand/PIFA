import React from "react";
import "./style.css"

function Post(props) {
    return (
        <div className="col-12 border">
            <row id="username">{props.username}</row>
            <br></br><hr></hr>
            <p id="title">{props.title}</p>
            <hr></hr>
            <p id="description">{props.description}</p>            
        </div>
    )
}

export default Post