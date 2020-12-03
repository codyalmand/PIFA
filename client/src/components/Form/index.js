import React from "react";

function Form(props) {
    return (
        <div className="col-12">
            <form>
                <div className="form-group">
                    <input 
                        className="form-control"
                        name="title"
                        placeholder="Title"
                        onChange={props.onChange}
                    />
                </div>
                <div className="form-group">
                    <textarea
                        className="form-control"
                        rows="5"
                        name="description"
                        placeholder="Make your request here"
                        onChange={props.onChange}
                    />
                </div>
                <button className="btn btn-secondary"  type="button" onClick={props.onClick}>
                    Post Request
                </button>
            </form>
        </div>
    );
}

export default Form;