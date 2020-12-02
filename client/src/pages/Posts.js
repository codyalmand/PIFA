import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Form from "../components/Form";
import { use } from "passport";
import API from "../utils/API";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState("");

    useEffect(() => {
        loadPost()
    }, []);

    function loadPost() {
        API.getPosts()
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className="container">
            <div className="row">
                <Form />
            </div>
            <div className="row">
                <Post />
            </div>
        </div>
    )
}

export default Posts;