import React from 'react';
import "./styles.css";

interface Props{
  status:string;
  setStatus:React.Dispatch<React.SetStateAction<string>>;
  handleSubmit:(event:React.FormEvent)=>void;
}


const StatusBar:React.FC<Props> = ({status, setStatus, handleSubmit}) => {
    const placeholder = "What's on your mind";
  return (
    <form className="status" onSubmit={(e)=>handleSubmit(e)}>
        <input type="text" className="input_status" placeholder={placeholder}
        value={status} onChange={(e)=>setStatus(e.target.value)}
        />
        <button className='post-btn' type='submit'>Post</button>
    </form>
  )
}

export default StatusBar