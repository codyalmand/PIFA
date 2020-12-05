import React, { useState, useEffect } from "react";
import Post from "../components/Post";
import Form from "../components/Form";
import API from "../utils/API";
import "./Posts.css";

function Posts() {

    const [posts, setPosts] = useState([]);
    const [formObject, setFormObject] = useState("");

    const [userId, setUserId] = useState("");
    const [email, setEmail] = useState("");


    useEffect(() => {
        loadPost()
        loadUserId()
        loadUserEmail()
        return function cleanup() {
            API.unCheckUserInfo()
        }
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

            UserId: userId,
            email: email

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

    function loadUserEmail() {
        API.checkUserInfo()
        .then(res => setEmail(res.data.email))
        .catch(err => console.log(err))
    }

    function handleEmail(e) {
        //console.log(e.target.id);
        API.sendEmail({email: e.target.id});
    }

    return (
        <div id="postsContainer">
            <div id="inputBox">
                <Form 
                onChange={handleInputChange} 
                onClick={handleFormSubmit} 
                />
            </div>
            <div id="post">
                {posts.length ? (
                    
                    posts.map(post => (
                        
                        <Post
                            email={post.email}
                            handleEmail={handleEmail}
                            title={post.title}

                            description={post.description} 
                            key={post.id}

                        />
                    ))
                ) : (
                    <h3 id="postmade">No Post Made</h3>
                )}
            </div>
        </div>
    )
}

export default Posts;