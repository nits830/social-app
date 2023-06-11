import React, { useState } from 'react';
import "./styles.css"

const Like = () => {
    const [count, setCount] =useState<number>(0);
    
    

    const handleClick = ()=>{
        let temp:number = count;
        temp++;
        setCount(temp);
    };

  return (
    <div className='like-btn'>
        <p className="like" onClick ={handleClick} >Likes   {count}</p>
        <p className="like"  >Comment </p>
        <p className="like"  >Share </p>

    </div>
  )
}

export default Like