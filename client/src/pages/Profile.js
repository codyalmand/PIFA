import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";
import API from "../utils/API";
import Post from "../components/Post"

function Profile() {
    
    const [userPosts, setUserPosts] = useState([]);
    const [userId, setUserId] = useState();
    
    useEffect(() => {
        loadUserId()
        loadUserPosts()
    }, []);

    function loadUserId() {
        console.log("load user id hit")
        API.checkUserInfo()
            .then(res => {
                console.log(res)
                setUserId(res.data.id)})
            .catch(err => console.log(err))
    }

    function loadUserPosts() {
        console.log(userId);
        console.log("load user posts hit")
        API.getUserPosts(userId)
            .then(res => {
                console.log(res);
                setUserPosts(res.data)
            })
    }

    return ( 
        <div>
            <div className="post">
                {userPosts.length ? (
                    userPosts.map(post => (
                        <Post
                            title={post.title}
                            description={post.description}
                        />
                    ))
                ) : (
                    <h3 id="postmade">No Posts Yet!</h3>
                )}
            </div>
            
        </div>
    )
}

export default Profile;