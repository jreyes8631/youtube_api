import './videoItem.css'
import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    return (
        <div onClick={() => onVideoSelect(video)} className="video-item item">
            <img className="image" 
                alt="backup" 
                src={video.snippet.thumbnails.medium.url} 
            />
            <div className="content">
                <div className="header">
                 {video.snippet.title}
                </div> 
            </div>
        </div>
    )
}

export default VideoItem