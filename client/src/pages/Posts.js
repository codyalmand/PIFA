import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Form from "../components/Form";
import { use } from "passport";
import API from "../utils/API";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState("");
    const [userId, setUserId] = useState("");

    useEffect(() => {
        loadPost()
        loadUserId()
    }, []);

    function loadPost() {
        API.getPosts()
            .then(res => {
                setPosts(res.data)
            })
            .catch(err => console.log(err))
    }

    function handleInputChange(event) {
        const { name, value } = event.target;
        setFormObject({ ...formObject, [name]: value})
    }
    
    function handleFormSubmit(event) {
        event.preventDefault();
        API.savePost({
            title: formObject.title,
            description: formObject.description,
            user_id: userId.id
        })
            .then(res => loadPost())
            .then(res => setFormObject(""))
            .catch(err => console.log(err))
    }

    function loadUserId() {
        API.checkUserInfo()
            .then(res => setUserId({
                id: res.data.id
            }))
            .then(res => console.log(userId.id))
    }
    return (
        <div className="container" style={{ background: "white"}}>
            <div className="row">
                <Form onChange={handleInputChange} onClick={handleFormSubmit}/>
            </div>
            <div className="row">
                {posts.length ? (
                    posts.map(post => (
                        <Post
                            title={post.title}
                            description={post.description}
                        />
                    ))
                ) : (
                    <h3 style={{ textAlign: "center" }}>No Post Made</h3>
                )}
            </div>
        </div>
    )
}

export default Posts;