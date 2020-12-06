import React from "react";
import "./Post.css"



function Post(props) {
    return (

        <div id= "postsBorder" key={props.id}>
            <h3 id="username" >{props.username}</h3>
            <br></br><hr></hr>
            <p id="title">{props.title}</p>
            <hr></hr>
            <p id="description">{props.description}</p>    
            <button onClick={props.handleEmail} type="button" className="btn btn-primary btn-lg" id={props.email}>Help</button>     
        </div>
    )
}

export default Post