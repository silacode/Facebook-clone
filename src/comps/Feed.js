import React, { useState, useEffect } from 'react';
import "./Feed.css";
import Post from "./Post";
import MessageSender from './MessageSender';
import StoryReel from "./StoryReel"
import db from '../firebase';

function Feed() {
    const [posts, setPosts]= useState([]);

    useEffect(() => {
       db.collection("posts").orderBy("timeStamp", "desc").onSnapshot((snapshot)=>{
           console.log(snapshot);
           setPosts(snapshot.docs.map((doc)=>({id:doc.id, data:doc.data() })))
       });
    }, []);
    return (
        <div className="feed ">
            {/* Storyreel */}
            <StoryReel />
            {/* Message Sender */}
            <MessageSender />
            {/* Post */}
            
            {posts.map((post)=>{
                return(
                    <Post 
                        key={post.id}
                        profilePic={post.data.profilePic}
                        username={post.data.userName}
                        image={post.data.image}
                        message={post.data.message}
                        timestamp={post.data.timeStamp}
                    />
                )
            })}
        
            
        </div>
    )
}

export default Feed
