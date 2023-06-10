import React from 'react';
import "./styles.css";




const StatusBar:React.FC = () => {
    const placeholder = "What's on your mind";
  return (
    <form className="status">
        <input type="text" className="input_status" placeholder={placeholder} />
        <button className='post-btn' type='submit'>Post</button>
    </form>
  )
}

export default StatusBar