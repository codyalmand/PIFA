import React from "react";
import "./Post2.css"



function Post2(props) {
    return (

        <div id= "postsBorder" key={props.id}>
            <h3 id="username" >{props.username}</h3>
            <br></br><hr></hr>
            <p id="title">{props.title}</p>
            <hr></hr>
            <p id="description">{props.description}</p>    
        </div>
    )
}

export default Post2