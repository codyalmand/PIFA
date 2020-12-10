import React, { useEffect, useState } from "react";
//import { Link } from "react-router-dom";
import "./Profile.css";
import API from "../utils/API";
import Post2 from "../components/Post2"
let userId = "";


function Profile() {

    const [userPosts, setUserPosts] = useState([]);
    const [userInfo, setUserInfo] = useState("");

    useEffect(() => {
        loadUserId()        
        loadUserPosts()
    }, [])// eslint-disable-line react-hooks/exhaustive-deps

    function loadUserId() {
        API.checkUserInfo()
            .then(res => {
                setUserInfo(res.data)
                userId = userInfo.id;
            })
            .catch(err => console.log(err))
    }

    function loadUserPosts() {
        API.getUserPosts(userId)
            .then(res => setUserPosts(res.data))
            .catch(err => console.log(err))
    }

    function handleDelete(_id) {
        API.deleteUserPost(_id)
            .then(() => loadUserPosts())
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
                            <Post2
                                title={post.title}
                                description={post.description}
                                username={userInfo.username}
                            >
                            </Post2>
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