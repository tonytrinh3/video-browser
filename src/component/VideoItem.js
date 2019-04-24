import React from 'react';

//const VideoItem = ({video}) => {}

const VideoItem = (props) =>{
    return (
    <div >
        <img src = {props.video.snippet.thumbnails.medium.url} alt = {props.video.snippet.title}  />
        <div key = {props.id}>{props.video.snippet.title}</div>
        <br/>
    </div>
    )
};

export default VideoItem;