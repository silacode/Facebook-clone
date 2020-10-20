import React from 'react';
import "./StoryReel.css";
import Story from "./Story";
import storyData from "./StoryData";

function StoryReel() {
    return (
        <div className="storyReel">
        {storyData.map((story, index)=>{
            return(
                <div className="storyReel__story">
                     <Story key={index} {...story} />
                </div>
                
            );
        })}
        </div>
    )
}

export default StoryReel
