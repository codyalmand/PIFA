import React from "react";
import "./Post.css"

function Post(props) {
    let test=props.active;
    return (
        <div id="postsBorder" key={props.id}>
            <h3 id="username" >{props.username}</h3>
            <br></br><hr></hr>
            <p id="title">{props.title}</p>
            <hr></hr>
            <p id="description">{props.description}</p>
            <button onClick={props.handleEmail} type="button" className={test ? "helpButton" : "button2"} id={props.email} value={props._id} >
                {test ? "Contact" : "Help is coming!"}
                </button>
        </div>
    )
}

export default Post