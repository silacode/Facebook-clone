import { Avatar } from '@material-ui/core';
import React, { useState } from 'react';
import "./MessageSender.css";
import VideoCallIcon from '@material-ui/icons/VideoCall';
import PhotoIcon from '@material-ui/icons/Photo';
import MoodIcon from '@material-ui/icons/Mood';
import { useStateValue } from '../StateProvider/StateProvider';
import db from "../firebase";
import firebase from "firebase";
import Button from "@material-ui/core/Button";

function MessageSender() {

    const [{user}, dispatch] = useStateValue();

    const [input, setInput] = useState("");
    const [imageURL, setImageURL] = useState("");

    const handleSubmit =(e)=>{
        e.preventDefault();

        //DB coding
        db.collection("posts").add({
            message:input,
            timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
            profilePic: user.photoURL,
            userName: user.displayName,
            image: imageURL
        });

        //reset state variables
        setInput("");
        setImageURL("");
    }

    const UserInput =(e)=>{
        const i = e.target.value;
        setInput(i);
    }

    const UserImage=(e)=>{
        const i= e.target.value;
        setImageURL(i);
    }

    return (
        <div className="messageSender">
            <div className="messageSender__top">
                <Avatar src={user.photoURL}/>
                <form>
                    <input 
                        placeholder={"Share your thoughts " + user.displayName}
                        type="text" 
                        className="messageSender__input"
                        onChange={UserInput}
                        value={input}
                    />
                    <input 
                        value={imageURL}
                        onChange={UserImage}
                        type="text"
                        placeholder="img URL (optional)"

                    />
                    <Button type="submit" onClick={handleSubmit}>
                        Hidden Submit
                    </Button>
                    
                </form>
            </div>
            <div className="messageSender__bottom">
                <div className="messageSender__options">
                    <VideoCallIcon style={{color:"red"}}/>
                    <h4>Live Video</h4>
                </div>
                <div className="messageSender__options">
                    <PhotoIcon style={{color:"green"}}/>
                    <h4>Photo/Video</h4>
                </div>
                <div className="messageSender__options">
                    <MoodIcon style={{color:"orange"}} />
                    <h4>Feeling/Activity</h4>
                </div>
            </div>
        </div>
    )
}

export default MessageSender
