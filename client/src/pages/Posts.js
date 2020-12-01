import React from "react";
import { Link } from "react-router-dom";
import Post from "../components/Post";
import { useStoreContext } from "../utils/GlobalStore";

function Posts() {

    cosnt [state, dispatch] = useStoreContext();

    return (
        <div className="container">
            <div className="row">
                <Post />
            </div>
        </div>
    )
}

export default Posts;