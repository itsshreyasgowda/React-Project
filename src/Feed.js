import React from 'react'
import './Feed.css'
import TweetBox from './TweetBox'
import Post from './Post'

function Feed() {
    return (
        <div className="feed">
            <div className="feed__header"> 
                <h2>Home</h2>
            </div>
            {/*TweetBox*/}
            <TweetBox />
            {/*Posts*/}
            <Post />
            
            <Post />
            {/*Posts*/}
            {/*Posts*/}
            {/*Posts*/}            
        </div>
    )
}

export default Feed
