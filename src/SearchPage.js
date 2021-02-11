import React from 'react'
import "./SearchPage.css";
import ChannelRow from "./ChannelRow";
import VideoRow from "./VideoRow"
import TuneOutlinedIcon from '@material-ui/icons/TuneOutlined';


function SearchPage() {
    return (
        <div className="searchPage">
            <div className="searchPage__filter">
                <TuneOutlinedIcon />
                <h2>Filter</h2>
            </div>
            <hr />
            <ChannelRow
                image="https://pbs.twimg.com/profile_images/766360293953802240/kt0hiSmv.jpg"
                channel="Metallica"
                verified
                subs="6.98M"
                noOfVideos={1699}
                description="The Official Metallica Music Channel"
            />
            <hr />

            <VideoRow
                views="1.4M"
                subs="659"
                description="Playing Minecraft"
                timestamp="59 seconds ago"
                channel="Pewdiepie"
                title="Let's play Minecraft"
                image="https://i.redd.it/9p0avomgt5631.jpg"
            />

            <VideoRow
                views="1.4M"
                subs="659"
                description="Playing Minecraft"
                timestamp="59 seconds ago"
                channel="Pewdiepie"
                title="Let's play Minecraft"
                image="https://i.redd.it/9p0avomgt5631.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659"
                description="Playing Minecraft"
                timestamp="59 seconds ago"
                channel="Pewdiepie"
                title="Let's play Minecraft"
                image="https://i.redd.it/9p0avomgt5631.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659"
                description="Playing Minecraft"
                timestamp="59 seconds ago"
                channel="Pewdiepie"
                title="Let's play Minecraft"
                image="https://i.redd.it/9p0avomgt5631.jpg"
            />
            <VideoRow
                views="1.4M"
                subs="659"
                description="Playing Minecraft"
                timestamp="59 seconds ago"
                channel="Pewdiepie"
                title="Let's play Minecraft"
                image="https://i.redd.it/9p0avomgt5631.jpg"
            />
        </div>
    )
}


export default SearchPage
