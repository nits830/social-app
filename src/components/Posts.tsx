import React from 'react'
import { Feed } from '../models';
import './styles.css'
import SingleFeed from './SingleFeed';

interface Props{
    feeds: Feed[];
    setFeeds:React.Dispatch<React.SetStateAction<Feed[]>>;
}
const Posts:React.FC<Props> = ({feeds, setFeeds}) => {
  return (
    <div className='post-window'>
        {feeds.map(feed => <SingleFeed feed ={feed} setFeeds={setFeeds}/>)}
    </div>
  )
}

export default Posts