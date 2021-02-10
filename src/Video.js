import React from 'react'
import { Avatar } from "@material-ui/core"
import "./Video.css";

function Video({ image, title, channel, views, timestamp, channelImg }) {
    return (
        <div className="video">
            <img className="video__thumbnail" src={image} alt="" />
            <div className="video__info">
                <Avatar className="video__avatar" alt={channel} src={channelImg} />
                <div className="video__text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} &bull; {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Video
