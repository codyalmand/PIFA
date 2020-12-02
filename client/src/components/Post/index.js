import React from "react";


function Post(props) {
    return (
        <div className="col-12">
            <h4>{props.title}</h4>
            <hr/>
            <h5>USERNAME OF POSTER HERE</h5>
            <p>{props.description}</p>            
        </div>
    )
}

export default Post