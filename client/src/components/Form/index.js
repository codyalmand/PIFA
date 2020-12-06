import React from "react";
import "../../pages/Signup.css";

function Form (props) {
    return (
        <div>
               <div id="formInfo">
                   <h1>Post Your Requests</h1>
                    <input 
                        className="form-control"
                        name="title"
                        placeholder="Title"
                        onChange={props.onChange}
                    />
                
                    <textarea 
                        className="form-control"
                        rows="5"
                        name="description"
                        placeholder="Make your request here"
                        onChange={props.onChange}
                    />
                </div>
                <button id="postButton" type="button" onClick={props.onClick}>
                    Post Request
                </button>
                <hr></hr>
        </div>
    );
}

export default Form;