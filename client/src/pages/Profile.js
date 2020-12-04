import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Profile.css";

function Profile() {
    
    const [userPosts, setUserPosts] = useState([]);
    const [userId, setUserId] = useState("");
    
    useEffect(() => {
        loadUserPosts()
        loadUserId()
    }, []);

    function loadUserPosts() {
        console.log("load user posts hit")
        API.getUserPosts(userId)
            .then(res => {
                setUserPosts(res.data)
            })
    }

    function loadUserId() {
        console.log("load user id hit")
        API.checkUserInfo()
            .then(res => setUserId(res.data.id))
            .catch(err => console.log(err))
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