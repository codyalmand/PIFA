import React from "react";

function Form(props) {
    return (
        <div className="col-12">
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Make A Request
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <form>
                        <div className="form-group dropdown-item">
                            <input 
                                className="form-control"
                                name="title"
                                placeholder="Title"
                                onChange={props.onChange}
                            />
                        </div>
                        <div className="form-group dropdown-item">
                            <textarea
                                className="form-control"
                                rows="20"
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
            </div>
        </div>
    );
}

export default Form;