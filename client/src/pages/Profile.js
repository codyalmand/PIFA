import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./Profile.css";
import API from "../utils/API";
import Post from "../components/Post"

function Profile() {
    
    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState("");
    
    useEffect(() => {
        loadUserId()
        loadUserPosts()
    }, []);

    function loadUserId() {
        //console.log("load user id hit")
        API.checkUserInfo()
            .then(res => {
                console.log(res)
                setUserInfo(res.data)})
            .catch(err => console.log(err))
    }

    function loadUserPosts() {
        //console.log(userId);
        //console.log("load user posts hit")
        API.getUserPosts(userInfo.id)
            .then(res => {
                //console.log(res);
                setUserPosts(res.data)
            })
    }

    function handleDelete(id) {
        //console.log("delete hit")
        //console.log(e)
        //console.log(id)
        API.deleteUserPost(id)
            .then(res => loadUserPosts())
            .catch(err => console.log(err))
    }

    return ( 
        <div>
            <div id="profileContainer">
            <h1 id="profiletitle">Your Profile</h1>
            <hr></hr>
            <p id="YPP">Your Past Posts</p>
                {userPosts.length ? (
                    userPosts.map(post => (
                        <div id="postsInProfile" key={post.id}>
                        <Post
                            title={post.title}
                            description={post.description}
                            username={userInfo.username}
                        >
                        </Post>
                        <button id="deleteButton" type="button" onClick={() => {handleDelete(post.id)}}>
                                Delete Post
                        </button>
                        </div>
                    ))
                ) : (
                    <h3 id="postmade">No Posts Yet!</h3>
                )}
            </div>
            
        </div>
    )
}

export default Profile;