import React from "react";
import "./style.css"



function Post(props) {
    return (

        <div key={props.id} className="col-12 border">
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