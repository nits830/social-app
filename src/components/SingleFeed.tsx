import React from 'react'
import { Feed } from '../models';
import "./styles.css"
import Like from './Like';

interface Props{
    feed:Feed;
    setFeeds:React.Dispatch<React.SetStateAction<Feed[]>>;
    
}

const SingleFeed:React.FC<Props> = ({feed, setFeeds}) => {
  return (
    <div className='single-container'>
        <div className="identity">
            <img src='https://lh3.googleusercontent.com/a/AAcHTtd4LxZVzkw9v75eNqMPWBzfabtl6jbnwiY4CG8ysg=s192-c-rg-br100' alt='Nitish Gupta'/>
            <a className='name' href='/'>Nitish Gupta</a>
        </div>
        
        <p className='single-feed'>{feed.feed}</p>
        <Like/>
        <hr/> 
        
    </div>
  )
}

export default SingleFeed;