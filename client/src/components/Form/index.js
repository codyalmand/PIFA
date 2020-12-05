import React from "react";
import "../../pages/Posts.css";

function Form (props) {
    return (
        <div>
               <div id="formInfo" className="form-group">
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
                <button id="formbutton" type="button" onClick={props.onClick}>
                    Post Request
                </button>
        </div>
    );
}

export default Form;