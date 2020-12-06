import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Form from "../components/Form";
import API from "../utils/API";
import "./Posts.css";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState("");
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        loadPost()
        loadUserId()
    }, []);

    function loadPost() {
        API.getPosts()
            .then(res => {
            setPosts(res.data)
            })
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
            UserId: userInfo.id
        })
            .then(res => loadPost())
            .then(res => setFormObject(""))
            .catch(err => console.log(err))
    }

    function loadUserId() {
        API.checkUserInfo()
            .then(res => setUserInfo(res.data))
            .catch(err => console.log(err))
    }
    return (
        <div id="postsContainer">
            <div id="inputBox">
                <Form onChange={handleInputChange} onClick={handleFormSubmit}/>
            </div>
            <p id="helpOthers">Consider Helping Others In Need</p>
            <div>
                {posts.length ? (
                    posts.map(post => (
                        <Post 
                            title={post.title}
                            description={post.description}
                            username={userInfo.username}
                        />
                    ))
                ) : (
                    <h3 id="postmade">No Post Made</h3>
                )}
                <hr></hr><br></br>
            </div>
        </div>
    )
}

export default Posts;